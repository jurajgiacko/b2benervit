"use client";

import { useState, type FormEvent } from "react";
import { REGIONS } from "@/lib/regions";

type Status = "idle" | "sending" | "success" | "error";
type Locale = "cs" | "sk";

const T = {
  cs: {
    successTitle: "Jste na seznamu",
    successBody:
      "Jakmile bude první várka připravená, ozveme se vám dřív než ostatním. Do té doby vás nikam nezavazujeme.",
    storeName: "Název prodejny / firmy *",
    storeNamePh: "např. Bike Point Beroun",
    region: "Kraj *",
    chooseRegion: "Vyberte kraj…",
    contactName: "Kontaktní osoba *",
    contactNamePh: "Jméno a příjmení",
    email: "E-mail *",
    emailPh: "vas@email.cz",
    phone: "Telefon (nepovinné)",
    phonePh: "+420…",
    consent:
      "Souhlasím se zpracováním osobních údajů za účelem obchodní komunikace se společností VITAR Sport s.r.o. *",
    error: "Odeslání se nepovedlo. Zkuste to prosím znovu.",
    submit: "Chci být na seznamu",
    sending: "Odesílám…",
    footnote: "Nezávazné. Přednostní pořadí, ne objednávka.",
  },
  sk: {
    successTitle: "Ste na zozname",
    successBody:
      "Len čo bude prvá várka pripravená, ozveme sa vám skôr než ostatným. Dovtedy vás k ničomu nezaväzujeme.",
    storeName: "Názov predajne / firmy *",
    storeNamePh: "napr. Bike Point Trenčín",
    region: "Kraj *",
    chooseRegion: "Vyberte kraj…",
    contactName: "Kontaktná osoba *",
    contactNamePh: "Meno a priezvisko",
    email: "E-mail *",
    emailPh: "vas@email.sk",
    phone: "Telefón (nepovinné)",
    phonePh: "+421…",
    consent:
      "Súhlasím so spracovaním osobných údajov na účely obchodnej komunikácie so spoločnosťou VITAR Sport s.r.o. *",
    error: "Odoslanie sa nepodarilo. Skúste to prosím znova.",
    submit: "Chcem byť na zozname",
    sending: "Odosielam…",
    footnote: "Nezáväzné. Prednostné poradie, nie objednávka.",
  },
} as const;

export default function WaitlistForm({ locale = "cs" }: { locale?: Locale }) {
  const t = T[locale];
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    const payload = {
      storeName: data.get("storeName"),
      contactName: data.get("contactName"),
      email: data.get("email"),
      phone: data.get("phone"),
      region: data.get("region"),
      consent: data.get("consent") === "on",
      locale,
      ref: new URLSearchParams(window.location.search).get("ref") ?? undefined,
    };

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
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
      <div className="rounded-2xl border border-white/15 bg-ink/80 p-8 text-center shadow-2xl backdrop-blur-sm">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-enervit text-xl text-white">
          ✓
        </div>
        <h3 className="font-display text-2xl font-bold uppercase text-white">{t.successTitle}</h3>
        <p className="mt-3 text-sm text-white/70">{t.successBody}</p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-enervit focus:ring-2 focus:ring-enervit/30";
  const labelCls = "mb-1 block text-xs font-semibold uppercase tracking-wide text-white/50";

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-2xl border border-white/15 bg-ink/80 p-6 shadow-2xl backdrop-blur-sm sm:grid-cols-2 sm:p-8"
    >
      <div className="sm:col-span-2">
        <label htmlFor="wl-storeName" className={labelCls}>
          {t.storeName}
        </label>
        <input id="wl-storeName" name="storeName" required className={inputCls} placeholder={t.storeNamePh} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="wl-region" className={labelCls}>
          {t.region}
        </label>
        <select id="wl-region" name="region" required defaultValue="" className={inputCls}>
          <option value="" disabled>
            {t.chooseRegion}
          </option>
          {REGIONS.map((r) => (
            <option key={r.value} value={r.value} className="text-ink">
              {r.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="wl-contactName" className={labelCls}>
          {t.contactName}
        </label>
        <input id="wl-contactName" name="contactName" required className={inputCls} placeholder={t.contactNamePh} />
      </div>

      <div>
        <label htmlFor="wl-phone" className={labelCls}>
          {t.phone}
        </label>
        <input id="wl-phone" name="phone" type="tel" className={inputCls} placeholder={t.phonePh} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="wl-email" className={labelCls}>
          {t.email}
        </label>
        <input id="wl-email" name="email" type="email" required className={inputCls} placeholder={t.emailPh} />
      </div>

      <label className="flex items-start gap-3 text-xs text-white/50 sm:col-span-2">
        <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 accent-enervit" />
        <span>{t.consent}</span>
      </label>

      {status === "error" && <p className="text-sm font-medium text-enervit sm:col-span-2">{t.error}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="font-display mt-2 rounded-lg bg-enervit px-8 py-4 text-lg font-bold uppercase tracking-wide text-white transition hover:bg-enervit-dark disabled:opacity-60 sm:col-span-2"
      >
        {status === "sending" ? t.sending : t.submit}
      </button>

      <p className="text-center text-xs text-white/40 sm:col-span-2">{t.footnote}</p>
    </form>
  );
}
