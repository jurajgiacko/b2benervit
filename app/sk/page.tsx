import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { REPS } from "@/lib/regions";

export const metadata: Metadata = {
  title: "Staňte sa partnerom Enervit | B2B program pre špecializované predajne",
  description:
    "Predávajte športovú výživu, s ktorou sa vyhráva Tour de France. Marža 40–55 %, štartovací balíček, osobný obchodný zástupca a dopyt z najväčších pretekov v ČR a SR.",
  alternates: {
    languages: { cs: "/", sk: "/sk" },
  },
  openGraph: {
    title: "Enervit B2B — partnerský program pre špecializované predajne",
    description:
      "Marža 40–55 %, dopyt z najväčších pretekov v ČR/SR a osobná podpora. Pridajte sa k 120+ predajniam.",
    images: ["/img/hero-pogacar.jpg"],
    locale: "sk_SK",
    type: "website",
  },
};

const BENEFITS = [
  {
    title: "Marža 40–55 %",
    text: "Specialty rabat 25–30 % plus objemové bonusy až +7 %. Výživa je spotrebný tovar — zákazník sa vracia každý mesiac, nie raz za päť rokov ako po bicykel.",
  },
  {
    title: "Dopyt z eventov",
    text: "ČSOB Bratislava Marathon, Jizerská 50, Pražský polmaratón. Sme hlavný výživový partner najväčších pretekov — vaši zákazníci sa na Enervit pýtajú sami.",
  },
  {
    title: "Kompletný fueling systém",
    text: "Od C2:1PRO gélov cez iónové nápoje po regeneráciu a proteíny. Jeden dodávateľ pokryje celý príbeh: pred výkonom, počas neho aj po ňom.",
  },
  {
    title: "Osobný zástupca + B2B portál",
    text: "Zaškolenie personálu, POS materiály a testery zadarmo. Doobjednávky vybavíte za pár minút v B2B portáli s reálnymi skladovými zásobami.",
  },
];

const PHASES = [
  {
    label: "Pred výkonom",
    products: [
      { src: "/img/p-presport.png", name: "PreSport Jelly" },
      { src: "/img/p-carbotablets.png", name: "Carbo Tablets" },
    ],
  },
  {
    label: "Počas výkonu",
    products: [
      { src: "/img/p-carbogel.png", name: "C2:1PRO Carbo Gel" },
      { src: "/img/p-gel.png", name: "Enervit Gel" },
      { src: "/img/p-isotonic.png", name: "Isotonic Drink" },
      { src: "/img/p-bar.png", name: "Performance Bar" },
    ],
  },
  {
    label: "Po výkone",
    products: [
      { src: "/img/p-r2.png", name: "R2 Recovery" },
      { src: "/img/p-magiccherry.png", name: "Magic Cherry" },
      { src: "/img/p-whey.png", name: "100% Whey Protein" },
    ],
  },
];

const SUBBRANDS = [
  {
    name: "Pure Pro",
    desc: "Prémiová rada pre gym a silu — izoláty, kreatín, pre-workout.",
    products: [
      { src: "/img/p-purepro.png", name: "Isolate Whey" },
      { src: "/img/p-creatine.png", name: "Creatine" },
    ],
  },
  {
    name: "The Protein Deal",
    desc: "Proteínové snacky na impulzný predaj pri pokladni.",
    products: [{ src: "/img/p-tpd.png", name: "Proteínové tyčinky" }],
  },
];

const SEGMENTS = [
  {
    title: "Špecializované predajne",
    desc: "Cyklo, beh, outdoor, športová výživa. Vysokoobrátkový doplnok k hardvéru s maržou, ktorú bicykle ani tenisky nedajú.",
    icon: "🚴",
  },
  {
    title: "Fitness & gymy",
    desc: "Proteíny, kreatín a snacky priamo na recepcii. Rady Pure Pro a The Protein Deal sú stavané pre gym prostredie.",
    icon: "💪",
  },
  {
    title: "Kluby a oddiely",
    desc: "Tímové fueling programy pre hokej, futbal, cyklistiku aj bežecké oddiely — od tréningu po zápasový deň.",
    icon: "🏆",
  },
  {
    title: "Obchodné siete a lekárne",
    desc: "Retailové riešenie s planogramom, POS podporou a logistikou. Enervit už dnes nájdete v sieťach v celej ČR aj SR.",
    icon: "🏪",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Vyplníte formulár",
    text: "Zaberie to dve minúty. Žiadne záväzky — len nám povedzte, akú máte predajňu a kde.",
  },
  {
    n: "02",
    title: "Ozve sa váš zástupca",
    text: "Do 72 hodín vás kontaktuje obchodný zástupca pre Slovensko a dohodne si s vami stretnutie alebo hovor.",
  },
  {
    n: "03",
    title: "Štartovací balíček",
    text: "Odporúčaný mix produktov podľa typu vašej predajne, POS materiály, testery a zaškolenie personálu.",
  },
  {
    n: "04",
    title: "Objednávate online",
    text: "Doobjednávky riešite v B2B portáli — reálne sklady, vaše ceny, história objednávok a faktúry na jednom mieste.",
  },
];

const PACKAGE_ITEMS = [
  "Rabat 25–30 % podľa segmentu + objemové bonusy pri vyšších odberoch",
  "Štartovací balíček zostavený na mieru vášmu typu predajne",
  "POS materiály — stojany, letáky, cenovky, plagáty",
  "Testery a vzorky pre zákazníkov",
  "Zaškolenie personálu v športovej výžive (čo odporučiť maratóncovi vs. hobby jazdcovi)",
  "Prístup do B2B portálu s reálnymi skladmi a vašimi cenami",
  "Podpora pri lokálnych akciách a pretekoch vo vašom regióne",
];

const FAQS = [
  {
    q: "Aké sú obchodné podmienky?",
    a: "Rabat 25–30 % podľa segmentu predajne, objemové bonusy až +7 % a štandardná splatnosť faktúr 30 dní. Konkrétne podmienky pre vašu predajňu s vami prejde obchodný zástupca.",
  },
  {
    q: "Musím odobrať veľké množstvo?",
    a: "Nie. Štartovací balíček navrhujeme podľa veľkosti a typu vašej predajne — začať môžete s jedným regálom. Cieľom je, aby sa tovar točil, nie aby vám ležal na sklade.",
  },
  {
    q: "Nepodrežú ma e-shopy cenou?",
    a: "Pracujeme s odporúčanými cenami a strážime cenovú hladinu značky. A hlavne: testery, osobné poradenstvo a eventy vo vašom regióne — presne to online predaj ponúknuť nevie. Dopyt z lokálnych pretekov patrí lokálnej predajni.",
  },
  {
    q: "Čo ak výžive nerozumiem?",
    a: "Od toho sme tu. Súčasťou spolupráce je zaškolenie personálu — naučíme vás, čo odporučiť maratóncovi, hobby cyklistovi alebo návštevníkovi fitka. Predávať systém pred–počas–po je jednoduchšie, než to vyzerá.",
  },
  {
    q: "Ako prebieha objednávanie a logistika?",
    a: "Prvú objednávku zostavíte so zástupcom, doobjednávky potom sami v B2B portáli s reálnymi skladovými zásobami. Expedujeme z centrálneho skladu na celé Slovensko aj do Českej republiky.",
  },
  {
    q: "Kto sa mi bude venovať na Slovensku?",
    a: "Štěpán Fryšara, náš obchodný zástupca pre Slovensko. Žiadne call centrum — jeden človek, ktorý pozná slovenské predajne, preteky aj kluby.",
  },
];

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="tag-bib">{eyebrow}</span>
      <h2 className="font-display mt-4 text-4xl font-bold uppercase italic leading-tight sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-lg text-neutral-600">{sub}</p>}
    </div>
  );
}

export default function HomeSK() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Image src="/img/logo.png" alt="Enervit" width={160} height={90} className="h-12 w-auto sm:h-14" priority />
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
            <a href="#vyhody" className="transition hover:text-white">Prečo Enervit</a>
            <a href="#segmenty" className="transition hover:text-white">Pre koho</a>
            <a href="#jak" className="transition hover:text-white">Ako to funguje</a>
            <a href="#tym" className="transition hover:text-white">Váš zástupca</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-semibold text-white/60 transition hover:text-white">
              CZ
            </Link>
            <a
              href="#formular"
              className="font-display rounded-lg bg-enervit px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-enervit-dark"
            >
              Stať sa partnerom
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink pt-20 text-white">
        <Image
          src="/img/hero-pogacar.jpg"
          alt="Tadej Pogačar s gélom Enervit C2:1PRO počas pretekov"
          fill
          priority
          className="hidden object-cover object-[62%_30%] opacity-50 md:block"
          sizes="100vw"
        />
        <Image
          src="/img/win-pogacar.jpg"
          alt="Tadej Pogačar oslavuje víťazstvo v žltom drese Tour de France"
          fill
          priority
          className="object-cover object-[45%_top] opacity-50 md:hidden"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-24">
          <span className="tag-bib rise">B2B program pre špecializované predajne v SR a ČR</span>
          <h1 className="font-display rise rise-1 mt-5 max-w-3xl text-5xl font-extrabold uppercase italic leading-[0.98] sm:text-7xl">
            Predávajte výživu, s ktorou sa vyhráva{" "}
            <span className="hl-bib">Tour de France</span>
          </h1>
          <p className="rise rise-2 mt-6 max-w-xl text-lg text-white/80">
            Enervit poháňa Tadeja Pogačara, Jannika Sinnera aj najväčšie preteky na Slovensku a v Česku.
            Pridajte sa k 120+ predajniam, ktoré na tom zarábajú — s maržou 40–55 % a podporou,
            ktorú vám hardvér nedá.
          </p>
          <div className="rise rise-3 mt-10 flex flex-wrap gap-4">
            <a
              href="#formular"
              className="font-display rounded-lg bg-enervit px-8 py-4 text-lg font-bold uppercase tracking-wide transition hover:bg-enervit-dark"
            >
              Chcem sa stať partnerom
            </a>
            <a
              href="#jak"
              className="font-display rounded-lg border border-white/30 px-8 py-4 text-lg font-bold uppercase tracking-wide transition hover:border-white hover:bg-white/10"
            >
              Ako to funguje
            </a>
          </div>
          <div className="rise rise-4 mt-16 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/15 pt-8 text-sm sm:grid-cols-4">
            <div>
              <p className="font-display text-3xl font-bold text-enervit">1976</p>
              <p className="mt-1 text-white/60">talianska značka s 50-ročnou históriou</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-enervit">120+</p>
              <p className="mt-1 text-white/60">aktívnych partnerov v ČR/SR</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-enervit">3</p>
              <p className="mt-1 text-white/60">najväčšie preteky v ČR/SR ako partner</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-enervit">UAE</p>
              <p className="mt-1 text-white/60">oficiálna výživa UAE Team Emirates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="vyhody" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Prečo Enervit"
            title="Regál, ktorý sa točí sám"
            sub="Športová výživa je najrýchlejšie obrátkový tovar v špecializovanej predajni. A Enervit je značka, ktorú zákazníci poznajú z pretekov — nemusíte ju vysvetľovať."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <div key={b.title} className="group rounded-2xl border border-neutral-200 p-8 transition hover:border-enervit hover:shadow-lg">
                <div className="h-1.5 w-12 rounded bg-enervit transition-all group-hover:w-20" />
                <h3 className="font-display mt-5 text-2xl font-bold uppercase">{b.title}</h3>
                <p className="mt-3 text-neutral-600">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments */}
      <section id="segmenty" className="bg-white pb-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Pre koho"
            title="Nielen pre predajne"
            sub="Program staviame na mieru podľa toho, kto ste a komu predávate."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SEGMENTS.map((s) => (
              <div key={s.title} className="rounded-2xl bg-paper p-7 transition hover:-translate-y-1 hover:shadow-lg">
                <span className="text-4xl">{s.icon}</span>
                <h3 className="font-display mt-4 text-xl font-bold uppercase leading-tight">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-paper py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Sortiment"
            title="Pred. Počas. Po."
            sub="Kompletný systém športovej výživy — od energie počas výkonu po regeneráciu a každodennú suplementáciu."
          />
          <div className="relative mt-14">
            <div className="absolute left-0 right-0 top-4 hidden h-0.5 bg-enervit/25 lg:block" />
            <div className="grid gap-10 sm:grid-cols-3">
              {PHASES.map((phase) => (
                <div key={phase.label}>
                  <div className="relative mb-6">
                    <span className="tag-bib">{phase.label}</span>
                  </div>
                  <div className="space-y-4">
                    {phase.products.map((p) => (
                      <div
                        key={p.name}
                        className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md"
                      >
                        <div className="relative h-20 w-16 shrink-0">
                          <Image src={p.src} alt={p.name} fill className="object-contain" sizes="80px" />
                        </div>
                        <p className="font-display text-lg font-bold uppercase leading-tight">{p.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 border-t border-neutral-300 pt-10">
              <p className="font-display text-center text-sm font-bold uppercase tracking-[0.2em] text-neutral-500">
                Doplnkové rady pre celoročný predaj
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {SUBBRANDS.map((sb) => (
                  <div key={sb.name} className="flex items-center gap-6 rounded-2xl bg-white p-6 shadow-sm">
                    <div className="flex shrink-0 gap-2">
                      {sb.products.map((p) => (
                        <div key={p.name} className="relative h-24 w-16">
                          <Image src={p.src} alt={p.name} fill className="object-contain" sizes="80px" />
                        </div>
                      ))}
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold uppercase">{sb.name}</h3>
                      <p className="mt-1 text-sm text-neutral-600">{sb.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="jak" className="bg-ink py-24 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Ako to funguje"
            title="Od formulára k prvému predaju za pár týždňov"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="relative rounded-2xl border border-white/10 bg-white/5 p-7">
                <p className="font-display text-5xl font-extrabold italic text-enervit">{s.n}</p>
                <h3 className="font-display mt-3 text-xl font-bold uppercase">{s.title}</h3>
                <p className="mt-2 text-sm text-white/70">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package */}
      <section className="relative overflow-hidden bg-white py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <span className="tag-bib">Čo dostanete</span>
            <h2 className="font-display mt-4 text-4xl font-bold uppercase italic leading-tight sm:text-5xl">
              Partnerstvo, nie len veľkoobchodný cenník
            </h2>
            <ul className="mt-8 space-y-4">
              {PACKAGE_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-enervit text-xs font-bold text-white">
                    ✓
                  </span>
                  <span className="text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#formular"
              className="font-display mt-10 inline-block rounded-lg bg-enervit px-8 py-4 text-lg font-bold uppercase tracking-wide text-white transition hover:bg-enervit-dark"
            >
              Chcem ponuku pre svoju predajňu
            </a>
          </div>
          <div className="relative h-[480px] overflow-hidden rounded-2xl">
            <Image
              src="/img/win-pogacar.jpg"
              alt="Tadej Pogačar oslavuje víťazstvo v žltom drese Tour de France"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
            <p className="absolute bottom-4 left-4 rounded bg-ink/70 px-3 py-1.5 text-xs font-medium text-white">
              Tadej Pogačar — víťaz Tour de France, spolieha sa na Enervit
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="tym" className="bg-paper py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Váš obchodný zástupca"
            title="Poznáte nás z pretekov. Teraz osobne."
            sub="Žiadne call centrum. Každý región má svojho človeka, ktorý pozná miestne predajne, preteky aj kluby."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {Object.values(REPS).map((rep) => (
              <div key={rep.name} className="rounded-2xl bg-white p-8 text-center shadow-sm">
                <div className="font-display mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-enervit text-3xl font-bold text-white">
                  {rep.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="font-display mt-5 text-2xl font-bold uppercase">{rep.name}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-enervit">{rep.region}</p>
                <div className="mt-4 space-y-1 text-sm text-neutral-600">
                  <p>
                    <a href={`mailto:${rep.email}`} className="transition hover:text-enervit">{rep.email}</a>
                  </p>
                  <p>
                    <a href={`tel:${rep.phone.replace(/\s/g, "")}`} className="transition hover:text-enervit">{rep.phone}</a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nominate teaser */}
      <section className="bg-enervit py-16 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase italic leading-tight sm:text-4xl">
              Ste športovec, nie predajňa?
            </h2>
            <p className="mt-2 max-w-xl text-white/90">
              Odporučte nám predajňu, kde by ste Enervit radi kupovali. Keď sa stane partnerom, vybavíme vás na ceste
              za vaším ďalším tréningovým cieľom.
            </p>
          </div>
          <a
            href="/doporucte"
            className="font-display shrink-0 rounded-lg bg-white px-8 py-4 text-lg font-bold uppercase tracking-wide text-enervit transition hover:bg-neutral-100"
          >
            Odporučiť predajňu
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-4">
          <SectionHeading eyebrow="Časté otázky" title="Na rovinu" />
          <div className="mt-12 space-y-3">
            {FAQS.map((f) => (
              <details key={f.q} className="faq group rounded-xl border border-neutral-200 transition hover:border-neutral-300">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
                  <span className="font-display text-lg font-bold uppercase">{f.q}</span>
                  <span className="faq-plus text-2xl font-light text-enervit transition-transform">+</span>
                </summary>
                <p className="px-6 pb-6 text-neutral-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="formular" className="relative overflow-hidden bg-ink py-24">
        <Image
          src="/img/products-range.jpg"
          alt="Produktová rada Enervit C2:1PRO"
          fill
          className="object-cover object-[center_30%] opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-transparent to-ink/80" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
          <div className="text-white">
            <span className="tag-bib">Pridajte sa</span>
            <h2 className="font-display mt-4 text-4xl font-bold uppercase italic leading-tight sm:text-5xl">
              Stihnite jesennú sezónu s Enervitom <span className="hl-bib">v regáli</span>
            </h2>
            <p className="mt-4 max-w-md text-white/75">
              Vyplňte formulár a do 72 hodín sa vám ozve obchodný zástupca pre váš región.
              Bez záväzkov — len si spolu prejdete, či to dáva zmysel.
            </p>
          </div>
          <LeadForm locale="sk" />
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink/95 p-3 backdrop-blur md:hidden">
        <a
          href="#formular"
          className="font-display block rounded-lg bg-enervit px-6 py-3.5 text-center text-base font-bold uppercase tracking-wide text-white"
        >
          Chcem ponuku pre svoju predajňu
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-ink py-12 pb-24 text-sm text-white/50 md:pb-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:flex-row sm:justify-between">
          <Image src="/img/logo.png" alt="Enervit" width={130} height={73} className="h-11 w-auto" />
          <p className="text-center">
            VITAR Sport s.r.o. — exkluzívny distribútor Enervit pre SR a ČR
            <br />
            <a href="https://www.enervitsport.sk" className="underline transition hover:text-white">enervitsport.sk</a>
            {" · "}
            <a href="https://www.enervit.cz" className="underline transition hover:text-white">enervit.cz</a>
            {" · "}
            <Link href="/" className="underline transition hover:text-white">česká verze</Link>
          </p>
          <p>© 2026 VITAR Sport s.r.o.</p>
        </div>
      </footer>
    </main>
  );
}
