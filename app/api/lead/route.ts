import { NextResponse } from "next/server";
import { repForRegion } from "@/lib/regions";

type LeadPayload = {
  storeName?: string;
  storeType?: string;
  city?: string;
  region?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  message?: string;
  ref?: string;
  consent?: boolean;
};

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const required = ["storeName", "storeType", "region", "contactName", "email", "phone"] as const;
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
    assignedRep: rep?.name ?? "nepřiřazeno",
    submittedAt: new Date().toISOString(),
    source: "b2b.enervit.online",
  };

  // Lead se předává do Make.com scénáře (e-mail zástupci + zápis do sheetu).
  // Bez nastaveného LEAD_WEBHOOK_URL se lead jen zaloguje — formulář zůstává funkční pro vývoj/preview.
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (!res.ok) {
        console.error("Lead webhook failed:", res.status, await res.text());
        return NextResponse.json({ ok: false, error: "webhook_failed" }, { status: 502 });
      }
    } catch (err) {
      console.error("Lead webhook error:", err);
      return NextResponse.json({ ok: false, error: "webhook_error" }, { status: 502 });
    }
  } else {
    console.log("[LEAD — no LEAD_WEBHOOK_URL configured]", JSON.stringify(lead));
  }

  return NextResponse.json({ ok: true, assignedRep: rep?.name ?? null });
}
