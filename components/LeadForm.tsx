"use client";

import { useMemo, useState, type FormEvent } from "react";
import { REGIONS, STORE_TYPES, STORE_TYPES_SK, repForRegion } from "@/lib/regions";

type Status = "idle" | "sending" | "success" | "error";
type Locale = "cs" | "sk";

const T = {
  cs: {
    successTitle: "Máme to!",
    successWithRep: (rep: string) => `${rep}, obchodní zástupce pro váš region, se vám ozve do 72 hodin.`,
    successNoRep: "Náš obchodní zástupce se vám ozve do 72 hodin.",
    storeName: "Název prodejny / firmy *",
    storeNamePh: "např. Bike Point Beroun",
    storeType: "Typ prodejny *",
    choose: "Vyberte…",
    city: "Město",
    cityPh: "např. Beroun",
    region: "Kraj *",
    chooseRegion: "Vyberte kraj…",
    repNote: (rep: string) => ["Váš region má na starosti ", rep, "."] as const,
    contactName: "Kontaktní osoba *",
    contactNamePh: "Jméno a příjmení",
    phone: "Telefon *",
    phonePh: "+420…",
    email: "E-mail *",
    emailPh: "vas@email.cz",
    message: "Co vás zajímá? (nepovinné)",
    messagePh: "např. podmínky pro cyklo prodejnu, startovací balíček…",
    consent: "Souhlasím se zpracováním osobních údajů za účelem obchodní komunikace se společností VITAR Sport s.r.o. *",
    error: "Odeslání se nepovedlo. Zkuste to prosím znovu, nebo nám napište na e-mail.",
    submit: "Chci nabídku pro svou prodejnu",
    sending: "Odesílám…",
    footnote: "Odpovídáme do 72 hodin. Žádný spam, žádné závazky.",
  },
  sk: {
    successTitle: "Máme to!",
    successWithRep: (rep: string) => `${rep}, obchodný zástupca pre váš región, sa vám ozve do 72 hodín.`,
    successNoRep: "Náš obchodný zástupca sa vám ozve do 72 hodín.",
    storeName: "Názov predajne / firmy *",
    storeNamePh: "napr. Bike Point Trenčín",
    storeType: "Typ predajne *",
    choose: "Vyberte…",
    city: "Mesto",
    cityPh: "napr. Trenčín",
    region: "Kraj *",
    chooseRegion: "Vyberte kraj…",
    repNote: (rep: string) => ["Váš región má na starosti ", rep, "."] as const,
    contactName: "Kontaktná osoba *",
    contactNamePh: "Meno a priezvisko",
    phone: "Telefón *",
    phonePh: "+421…",
    email: "E-mail *",
    emailPh: "vas@email.sk",
    message: "Čo vás zaujíma? (nepovinné)",
    messagePh: "napr. podmienky pre cyklo predajňu, štartovací balíček…",
    consent: "Súhlasím so spracovaním osobných údajov na účely obchodnej komunikácie so spoločnosťou VITAR Sport s.r.o. *",
    error: "Odoslanie sa nepodarilo. Skúste to prosím znova, alebo nám napíšte e-mail.",
    submit: "Chcem ponuku pre svoju predajňu",
    sending: "Odosielam…",
    footnote: "Odpovedáme do 72 hodín. Žiadny spam, žiadne záväzky.",
  },
} as const;

export default function LeadForm({ locale = "cs" }: { locale?: Locale }) {
  const t = T[locale];
  const storeTypes = locale === "sk" ? STORE_TYPES_SK : STORE_TYPES;
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
      locale,
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
        <h3 className="font-display text-3xl font-bold uppercase">{t.successTitle}</h3>
        <p className="mt-3 text-neutral-600">
          {assignedRep ? t.successWithRep(assignedRep) : t.successNoRep}
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-enervit focus:ring-2 focus:ring-enervit/20";
  const labelCls = "mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl bg-white p-6 shadow-xl sm:grid-cols-2 sm:p-8">
      <div className="sm:col-span-2">
        <label htmlFor="storeName" className={labelCls}>
          {t.storeName}
        </label>
        <input id="storeName" name="storeName" required className={inputCls} placeholder={t.storeNamePh} />
      </div>

      <div>
        <label htmlFor="storeType" className={labelCls}>
          {t.storeType}
        </label>
        <select id="storeType" name="storeType" required defaultValue="" className={inputCls}>
          <option value="" disabled>
            {t.choose}
          </option>
          {storeTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="city" className={labelCls}>
          {t.city}
        </label>
        <input id="city" name="city" className={inputCls} placeholder={t.cityPh} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="region" className={labelCls}>
          {t.region}
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
            {t.chooseRegion}
          </option>
          {REGIONS.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
        {previewRep && (
          <p className="mt-2 text-xs text-neutral-500">
            {t.repNote(previewRep.name)[0]}
            <span className="font-semibold text-ink">{previewRep.name}</span>
            {t.repNote(previewRep.name)[2]}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contactName" className={labelCls}>
          {t.contactName}
        </label>
        <input id="contactName" name="contactName" required className={inputCls} placeholder={t.contactNamePh} />
      </div>

      <div>
        <label htmlFor="phone" className={labelCls}>
          {t.phone}
        </label>
        <input id="phone" name="phone" type="tel" required className={inputCls} placeholder={t.phonePh} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="email" className={labelCls}>
          {t.email}
        </label>
        <input id="email" name="email" type="email" required className={inputCls} placeholder={t.emailPh} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelCls}>
          {t.message}
        </label>
        <textarea id="message" name="message" rows={3} className={inputCls} placeholder={t.messagePh} />
      </div>

      <label className="flex items-start gap-3 text-xs text-neutral-500 sm:col-span-2">
        <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 accent-enervit" />
        <span>{t.consent}</span>
      </label>

      {status === "error" && (
        <p className="text-sm font-medium text-enervit sm:col-span-2">{t.error}</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="font-display mt-2 rounded-lg bg-enervit px-8 py-4 text-lg font-bold uppercase tracking-wide text-white transition hover:bg-enervit-dark disabled:opacity-60 sm:col-span-2"
      >
        {status === "sending" ? t.sending : t.submit}
      </button>

      <p className="text-center text-xs text-neutral-400 sm:col-span-2">{t.footnote}</p>
    </form>
  );
}
