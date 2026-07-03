"use client";

import { useState, type FormEvent } from "react";
import { REGIONS } from "@/lib/regions";

type Status = "idle" | "sending" | "success" | "error";

export default function NominateForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    const payload = {
      nominatorName: data.get("nominatorName"),
      nominatorEmail: data.get("nominatorEmail"),
      storeName: data.get("storeName"),
      city: data.get("city"),
      region: data.get("region"),
      goal: data.get("goal"),
      consent: data.get("consent") === "on",
      ref: new URLSearchParams(window.location.search).get("ref") ?? undefined,
    };

    try {
      const res = await fetch("/api/nominate", {
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
      <div className="rounded-2xl bg-white p-10 text-center shadow-xl">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-enervit text-2xl text-white">
          ✓
        </div>
        <h3 className="font-display text-3xl font-bold uppercase">Díky, máme to!</h3>
        <p className="mt-3 text-neutral-600">
          Ozveme se prodejně — a jakmile u nás udělá první objednávku, ozveme se i vám s balíčkem na váš cíl. Držte
          nám palce. 🤞
        </p>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-enervit focus:ring-2 focus:ring-enervit/20";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl bg-white p-6 shadow-xl sm:grid-cols-2 sm:p-8">
      <div>
        <label htmlFor="nominatorName" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
          Vaše jméno *
        </label>
        <input id="nominatorName" name="nominatorName" required className={inputCls} placeholder="Jméno a příjmení" />
      </div>

      <div>
        <label htmlFor="nominatorEmail" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
          Váš e-mail *
        </label>
        <input id="nominatorEmail" name="nominatorEmail" type="email" required className={inputCls} placeholder="vas@email.cz" />
      </div>

      <div>
        <label htmlFor="storeName" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
          Prodejna, kterou doporučujete *
        </label>
        <input id="storeName" name="storeName" required className={inputCls} placeholder="např. Bike Point Beroun" />
      </div>

      <div>
        <label htmlFor="city" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
          Město prodejny *
        </label>
        <input id="city" name="city" required className={inputCls} placeholder="např. Beroun" />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="region" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
          Kraj *
        </label>
        <select id="region" name="region" required defaultValue="" className={inputCls}>
          <option value="" disabled>
            Vyberte kraj…
          </option>
          {REGIONS.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="goal" className="mb-1 block text-xs font-semibold uppercase tracking-wide text-neutral-500">
          Na co trénujete? (nepovinné — ať víme, co vám zabalit)
        </label>
        <input id="goal" name="goal" className={inputCls} placeholder="např. první maraton, L'Etape, Jizerská 50…" />
      </div>

      <label className="flex items-start gap-3 text-xs text-neutral-500 sm:col-span-2">
        <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 accent-enervit" />
        <span>
          Souhlasím se zpracováním osobních údajů za účelem vyřízení doporučení a odměny (VITAR Sport s.r.o.). *
        </span>
      </label>

      {status === "error" && (
        <p className="text-sm font-medium text-enervit sm:col-span-2">
          Odeslání se nepovedlo. Zkuste to prosím znovu.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="font-display mt-2 rounded-lg bg-enervit px-8 py-4 text-lg font-bold uppercase tracking-wide text-white transition hover:bg-enervit-dark disabled:opacity-60 sm:col-span-2"
      >
        {status === "sending" ? "Odesílám…" : "Doporučit prodejnu"}
      </button>

      <p className="text-center text-xs text-neutral-400 sm:col-span-2">
        Odměna po první objednávce doporučené prodejny · jedna odměna na osobu · platí pro prodejny, které zatím
        nejsou naším partnerem.
      </p>
    </form>
  );
}
