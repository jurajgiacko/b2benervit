import { NextResponse } from "next/server";
import { repForRegion } from "@/lib/regions";

type NominatePayload = {
  nominatorName?: string;
  nominatorEmail?: string;
  storeName?: string;
  city?: string;
  region?: string;
  goal?: string;
  consent?: boolean;
  ref?: string;
};

export async function POST(request: Request) {
  let body: NominatePayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const required = ["nominatorName", "nominatorEmail", "storeName", "city", "region"] as const;
  const missing = required.filter((f) => !body[f]?.toString().trim());
  if (missing.length > 0 || !body.consent) {
    return NextResponse.json(
      { ok: false, error: "missing_fields", fields: missing },
      { status: 400 }
    );
  }

  const rep = repForRegion(body.region!);
  const lead = {
    formType: "nomination",
    ...body,
    assignedRep: rep?.name ?? "nepřiřazeno",
    submittedAt: new Date().toISOString(),
    source: "b2b.enervit.online/doporucte",
  };

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (!res.ok) {
        console.error("Nomination webhook failed:", res.status, await res.text());
        return NextResponse.json({ ok: false, error: "webhook_failed" }, { status: 502 });
      }
    } catch (err) {
      console.error("Nomination webhook error:", err);
      return NextResponse.json({ ok: false, error: "webhook_error" }, { status: 502 });
    }
  } else {
    console.log("[NOMINATION — no LEAD_WEBHOOK_URL configured]", JSON.stringify(lead));
  }

  return NextResponse.json({ ok: true });
}
