import { NextResponse } from "next/server";
import { repForRegion } from "@/lib/regions";

// Přednostní pořadí na C2:1PRO Lactate Gel Mix — kratší formulář než hlavní lead
// (jde o vyjádření zájmu, ne o kompletní kvalifikaci prodejny).
type WaitlistPayload = {
  storeName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  region?: string;
  ref?: string;
  consent?: boolean;
};

export async function POST(request: Request) {
  let body: WaitlistPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const required = ["storeName", "contactName", "email", "region"] as const;
  const missing = required.filter((f) => !body[f]?.toString().trim());
  if (missing.length > 0 || !body.consent) {
    return NextResponse.json(
      { ok: false, error: "missing_fields", fields: missing },
      { status: 400 }
    );
  }

  const rep = repForRegion(body.region!);
  const lead = {
    ...body,
    formType: "lactate_waitlist",
    assignedRep: rep?.name ?? "nepřiřazeno",
    submittedAt: new Date().toISOString(),
    source: "b2b.enervit.online",
  };

  // Stejný Make.com scénář jako u leadů — rozlišuje se přes formType.
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (!res.ok) {
        console.error("Waitlist webhook failed:", res.status, await res.text());
        return NextResponse.json({ ok: false, error: "webhook_failed" }, { status: 502 });
      }
    } catch (err) {
      console.error("Waitlist webhook error:", err);
      return NextResponse.json({ ok: false, error: "webhook_error" }, { status: 502 });
    }
  } else {
    console.log("[WAITLIST — no LEAD_WEBHOOK_URL configured]", JSON.stringify(lead));
  }

  return NextResponse.json({ ok: true, assignedRep: rep?.name ?? null });
}
