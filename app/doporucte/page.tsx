import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NominateForm from "@/components/NominateForm";

export const metadata: Metadata = {
  title: "Doporučte prodejnu — Enervit tam, kde nakupujete vy",
  description:
    "Chybí vám Enervit ve vaší oblíbené prodejně? Doporučte nám ji. Když se stane naším partnerem, vybavíme vás na cestě za vaším dalším tréninkovým cílem.",
  openGraph: {
    title: "Doporučte prodejnu — Enervit tam, kde nakupujete vy",
    description:
      "Když se z vaší prodejny stane partner Enervit, vybavíme vás balíčkem na váš další tréninkový cíl.",
    images: ["/img/win-pogacar.jpg"],
    locale: "cs_CZ",
    type: "website",
  },
};

const STEPS = [
  {
    n: "01",
    title: "Doporučíte prodejnu",
    text: "Cyklo servis, běžecká speciálka, fitko s recepcí — místo, kde byste Enervit rádi kupovali.",
  },
  {
    n: "02",
    title: "My se jí ozveme",
    text: "Náš obchodní zástupce prodejně nabídne partnerství — a řekne jí, že o Enervit stojí její vlastní zákazníci.",
  },
  {
    n: "03",
    title: "Vy vyhráváte",
    text: "Jakmile prodejna udělá první objednávku, pošleme vám výživový balíček sestavený podle vašeho tréninkového cíle.",
  },
];

export default function Doporucte() {
  return (
    <main className="flex-1">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/">
            <Image src="/img/logo.png" alt="Enervit" width={160} height={90} className="h-12 w-auto sm:h-14" priority />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-white/80 transition hover:text-white"
          >
            Pro prodejny →
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-ink pt-20 text-white">
        <Image
          src="/img/win-pogacar.jpg"
          alt="Tadej Pogačar slaví vítězství"
          fill
          priority
          className="object-cover object-[45%_top] opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/20" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-24">
          <span className="tag-bib rise">Pro sportovce · doporučte prodejnu</span>
          <h1 className="font-display rise rise-1 mt-5 max-w-3xl text-5xl font-extrabold uppercase italic leading-[0.98] sm:text-7xl">
            Chybí vám Enervit <span className="hl-bib">za rohem?</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            Řekněte nám, kde byste svůj oblíbený gel nebo iso kupovali nejraději. My prodejnu oslovíme — a když se
            stane naším partnerem, <strong className="text-white">vybavíme vás na cestě za vaším dalším tréninkovým cílem</strong>.
          </p>
          <a
            href="#formular"
            className="font-display mt-10 inline-block rounded-lg bg-enervit px-8 py-4 text-lg font-bold uppercase tracking-wide transition hover:bg-enervit-dark"
          >
            Doporučit prodejnu
          </a>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="tag-bib">Jak to funguje</span>
            <h2 className="font-display mt-4 text-4xl font-bold uppercase italic leading-tight sm:text-5xl">
              Tři kroky k Enervitu ve vaší prodejně
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-2xl border border-neutral-200 p-8">
                <p className="font-display text-5xl font-extrabold italic text-enervit">{s.n}</p>
                <h3 className="font-display mt-3 text-2xl font-bold uppercase">{s.title}</h3>
                <p className="mt-2 text-neutral-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="formular" className="relative overflow-hidden bg-ink py-24">
        <Image
          src="/img/products-range.jpg"
          alt="Produktová řada Enervit C2:1PRO"
          fill
          className="object-cover object-[center_30%] opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-transparent to-ink/80" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
          <div className="text-white">
            <span className="tag-bib">2 minuty</span>
            <h2 className="font-display mt-4 text-4xl font-bold uppercase italic leading-tight sm:text-5xl">
              Kde máme zaklepat?
            </h2>
            <p className="mt-4 max-w-md text-white/75">
              Napište nám prodejnu a svůj tréninkový cíl. Když to klapne, balíček sestavíme přesně na něj — maraton,
              L&apos;Etape nebo první Jizerská.
            </p>
          </div>
          <NominateForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink py-12 text-sm text-white/50">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:flex-row sm:justify-between">
          <Image src="/img/logo.png" alt="Enervit" width={130} height={73} className="h-11 w-auto" />
          <p className="text-center">
            VITAR Sport s.r.o. — exkluzivní distributor Enervit pro ČR a SR
            <br />
            <Link href="/" className="underline transition hover:text-white">Program pro prodejny</Link>
            {" · "}
            <a href="https://www.enervit.cz" className="underline transition hover:text-white">enervit.cz</a>
          </p>
          <p>© 2026 VITAR Sport s.r.o.</p>
        </div>
      </footer>
    </main>
  );
}
