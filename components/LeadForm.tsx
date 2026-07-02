"use client";

import { useMemo, useState, type FormEvent } from "react";
import { REGIONS, STORE_TYPES, repForRegion } from "@/lib/regions";

type Status = "idle" | "sending" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [region, setRegion] = useState("");
  const [assignedRep, setAssignedRep] = useState<string | null>(null);

  const previewRep = useMemo(() => (region ? repForRegion(region) : null), [region]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    const payload = {
      storeName: data.get("storeName"),
      storeType: data.get("storeType"),
      city: data.get("city"),
      region: data.get("region"),
      contactName: data.get("contactName"),
      email: data.get("email"),
      phone: data.get("phone"),
      message: data.get("message"),
      consent: data.get("consent") === "on",
      ref: new URLSearchParams(window.location.search).get("ref") ?? undefined,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setAssignedRep(json.assignedRep);
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white p-10 text-center shadow-xl">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-enervit text-2xl text-white">
          ✓
        </div>
        <h3 className="font-display text-3xl font-bold uppercase">Máme to!</h3>
        <p className="mt-3 text-neutral-600">
          {assignedRep
            ? `${assignedRep}, obchodní zástupce pro váš region, se vám ozve do 72 hodin.`
            : "Náš obchodní zástupce se vám ozve do 72 hodin."}
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-enervit focus:ring-2 focus:ring-enervit/20";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl bg-white p-6 shadow-xl sm:grid-cols-2 sm:p-8">
      <div className="sm:col-span-2">
        <label htmlFor="storeName" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
          Název prodejny / firmy *
        </label>
        <input id="storeName" name="storeName" required className={inputCls} placeholder="např. Bike Point Beroun" />
      </div>

      <div>
        <label htmlFor="storeType" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
          Typ prodejny *
        </label>
        <select id="storeType" name="storeType" required defaultValue="" className={inputCls}>
          <option value="" disabled>
            Vyberte…
          </option>
          {STORE_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="city" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
          Město
        </label>
        <input id="city" name="city" className={inputCls} placeholder="např. Beroun" />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="region" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
          Kraj *
        </label>
        <select
          id="region"
          name="region"
          required
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className={inputCls}
        >
          <option value="" disabled>
            Vyberte kraj…
          </option>
          {REGIONS.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
        {previewRep && (
          <p className="mt-2 text-xs text-neutral-500">
            Váš region má na starosti <span className="font-semibold text-ink">{previewRep.name}</span>.
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contactName" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
          Kontaktní osoba *
        </label>
        <input id="contactName" name="contactName" required className={inputCls} placeholder="Jméno a příjmení" />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
          Telefon *
        </label>
        <input id="phone" name="phone" type="tel" required className={inputCls} placeholder="+420…" />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="email" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
          E-mail *
        </label>
        <input id="email" name="email" type="email" required className={inputCls} placeholder="vas@email.cz" />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
          Co vás zajímá? (nepovinné)
        </label>
        <textarea id="message" name="message" rows={3} className={inputCls} placeholder="např. podmínky pro cyklo prodejnu, startovací balíček…" />
      </div>

      <label className="flex items-start gap-3 text-xs text-neutral-500 sm:col-span-2">
        <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 accent-enervit" />
        <span>
          Souhlasím se zpracováním osobních údajů za účelem obchodní komunikace se společností VITAR Sport s.r.o. *
        </span>
      </label>

      {status === "error" && (
        <p className="text-sm font-medium text-enervit sm:col-span-2">
          Odeslání se nepovedlo. Zkuste to prosím znovu, nebo nám napište na e-mail.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="font-display mt-2 rounded-lg bg-enervit px-8 py-4 text-lg font-bold uppercase tracking-wide text-white transition hover:bg-enervit-dark disabled:opacity-60 sm:col-span-2"
      >
        {status === "sending" ? "Odesílám…" : "Chci nabídku pro svou prodejnu"}
      </button>

      <p className="text-center text-xs text-neutral-400 sm:col-span-2">
        Odpovídáme do 72 hodin. Žádný spam, žádné závazky.
      </p>
    </form>
  );
}
