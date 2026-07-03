import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import { REPS } from "@/lib/regions";

const BENEFITS = [
  {
    title: "Marže 40–55 %",
    text: "Specialty rabat 25–30 % plus objemové bonusy až +7 %. Výživa je spotřební zboží — zákazník se vrací každý měsíc, ne jednou za pět let jako pro kolo.",
  },
  {
    title: "Poptávka z eventů",
    text: "Jizerská 50, Pražský půlmaraton, ČSOB Bratislava Marathon. Jsme hlavní výživový partner největších závodů — vaši zákazníci se na Enervit ptají sami.",
  },
  {
    title: "Kompletní fueling systém",
    text: "Od C2:1PRO gelů přes iontové nápoje po regeneraci a proteiny. Jeden dodavatel pokryje celý příběh: před výkonem, během něj i po něm.",
  },
  {
    title: "Osobní zástupce + B2B portál",
    text: "Zaškolení personálu, POS materiály a testery zdarma. Doobjednávky vyřídíte za pár minut v B2B portálu s reálnými skladovými zásobami.",
  },
];

// Sortiment jako fueling timeline — před/během/po je jádro prodejního příběhu
const PHASES = [
  {
    label: "Před výkonem",
    products: [{ src: "/img/p-bar.png", name: "Performance Bar" }],
  },
  {
    label: "Během výkonu",
    products: [
      { src: "/img/p-carbogel.png", name: "C2:1PRO Carbo Gel" },
      { src: "/img/p-gel.png", name: "Enervit Gel" },
      { src: "/img/p-isotonic.png", name: "Isotonic Drink" },
    ],
  },
  {
    label: "Po výkonu",
    products: [
      { src: "/img/p-whey.png", name: "100% Whey Protein" },
      { src: "/img/p-purepro.png", name: "Pure Pro Isolate" },
    ],
  },
  {
    label: "Každý den",
    products: [
      { src: "/img/p-creatine.png", name: "Pure Pro Creatine" },
      { src: "/img/p-tpd.png", name: "The Protein Deal" },
    ],
  },
];

const SEGMENTS = [
  {
    title: "Specializované prodejny",
    desc: "Cyklo, běh, outdoor, sportovní výživa. Vysokoobrátkový doplněk k hardwaru s marží, kterou kola ani boty nedají.",
    icon: "🚴",
  },
  {
    title: "Fitness & gymy",
    desc: "Proteiny, kreatin a snacky přímo na recepci. Řada Pure Pro a The Protein Deal je stavěná pro gym prostředí.",
    icon: "💪",
  },
  {
    title: "Kluby a oddíly",
    desc: "Týmové fueling programy pro hokej, fotbal, cyklistiku i běžecké oddíly — od tréninku po zápasový den.",
    icon: "🏆",
  },
  {
    title: "Obchodní sítě a lékárny",
    desc: "Retailové řešení s planogramem, POS podporou a logistikou. Enervit už dnes najdete v sítích po celé ČR.",
    icon: "🏪",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Vyplníte formulář",
    text: "Zabere to dvě minuty. Žádné závazky — jen nám řekněte, jakou máte prodejnu a kde.",
  },
  {
    n: "02",
    title: "Ozve se váš zástupce",
    text: "Do 72 hodin vás kontaktuje obchodní zástupce pro váš region a domluví si s vámi schůzku nebo hovor.",
  },
  {
    n: "03",
    title: "Startovací balíček",
    text: "Doporučený mix produktů podle typu vaší prodejny, POS materiály, testery a zaškolení personálu.",
  },
  {
    n: "04",
    title: "Objednáváte online",
    text: "Doobjednávky řešíte v B2B portálu — reálné sklady, vaše ceny, historie objednávek a faktury na jednom místě.",
  },
];

const PACKAGE_ITEMS = [
  "Rabat 25–30 % dle segmentu + objemové bonusy (+3 % nad 500 tis., +5 % nad 1 mil., +7 % nad 2 mil. Kč)",
  "Startovací balíček sestavený na míru vašemu typu prodejny",
  "POS materiály — stojany, letáky, cenovky, plakáty",
  "Testery a vzorky pro zákazníky",
  "Zaškolení personálu ve sportovní výživě (co doporučit maratonci vs. hobby jezdci)",
  "Přístup do B2B portálu s reálnými sklady a vašimi cenami",
  "Podpora při lokálních akcích a závodech ve vašem regionu",
];

const FAQS = [
  {
    q: "Jaké jsou obchodní podmínky?",
    a: "Rabat 25–30 % podle segmentu prodejny, objemové bonusy až +7 % a standardní splatnost faktur 30 dní. Konkrétní podmínky pro vaši prodejnu s vámi projde obchodní zástupce.",
  },
  {
    q: "Musím odebrat velké množství?",
    a: "Ne. Startovací balíček navrhujeme podle velikosti a typu vaší prodejny — začít můžete s jedním regálem. Cílem je, aby se zboží točilo, ne aby vám leželo na skladě.",
  },
  {
    q: "Nepodřežou mě e-shopy cenou?",
    a: "Pracujeme s doporučenými cenami a hlídáme cenovou hladinu značky. A hlavně: testery, osobní poradenství a eventy ve vašem regionu — to je přesně to, co online prodej nabídnout neumí. Poptávka z lokálních závodů patří lokální prodejně.",
  },
  {
    q: "Co když výživě nerozumím?",
    a: "Od toho jsme tady. Součástí spolupráce je zaškolení personálu — naučíme vás, co doporučit maratonci, hobby cyklistovi nebo návštěvníkovi fitka. Prodávat systém před–během–po je jednodušší, než to vypadá.",
  },
  {
    q: "Jak probíhá objednávání a logistika?",
    a: "První objednávku sestavíte se zástupcem, doobjednávky pak sami v B2B portálu s reálnými skladovými zásobami. Expedujeme z centrálního skladu v ČR do celé České republiky i na Slovensko.",
  },
  {
    q: "Funguje program i na Slovensku?",
    a: "Ano. VITAR Sport je exkluzivní distributor Enervit pro Českou i Slovenskou republiku a na Slovensku máme vyhrazeného obchodního zástupce.",
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

export default function Home() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Image src="/img/logo.png" alt="Enervit" width={160} height={90} className="h-12 w-auto sm:h-14" priority />
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
            <a href="#vyhody" className="transition hover:text-white">Proč Enervit</a>
            <a href="#segmenty" className="transition hover:text-white">Pro koho</a>
            <a href="#jak" className="transition hover:text-white">Jak to funguje</a>
            <a href="#tym" className="transition hover:text-white">Váš zástupce</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </nav>
          <a
            href="#formular"
            className="font-display rounded-lg bg-enervit px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-enervit-dark"
          >
            Stát se partnerem
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-ink pt-20 text-white">
        <Image
          src="/img/hero-pogacar.jpg"
          alt="Tadej Pogačar s gelem Enervit C2:1PRO během závodu"
          fill
          priority
          className="hidden object-cover object-[62%_30%] opacity-50 md:block"
          sizes="100vw"
        />
        <Image
          src="/img/win-pogacar.jpg"
          alt="Tadej Pogačar slaví vítězství ve žlutém dresu Tour de France"
          fill
          priority
          className="object-cover object-[45%_top] opacity-50 md:hidden"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-24">
          <span className="tag-bib rise">B2B program pro specializované prodejny v ČR a SR</span>
          <h1 className="font-display rise rise-1 mt-5 max-w-3xl text-5xl font-extrabold uppercase italic leading-[0.98] sm:text-7xl">
            Prodávejte výživu, se kterou se vyhrává{" "}
            <span className="hl-bib">Tour de France</span>
          </h1>
          <p className="rise rise-2 mt-6 max-w-xl text-lg text-white/80">
            Enervit pohání Tadeje Pogačara, Jannika Sinnera i největší závody v Česku a na Slovensku.
            Přidejte se ke 120+ prodejnám, které na tom vydělávají — s marží 40–55 % a podporou,
            kterou vám hardware nedá.
          </p>
          <div className="rise rise-3 mt-10 flex flex-wrap gap-4">
            <a
              href="#formular"
              className="font-display rounded-lg bg-enervit px-8 py-4 text-lg font-bold uppercase tracking-wide transition hover:bg-enervit-dark"
            >
              Chci se stát partnerem
            </a>
            <a
              href="#jak"
              className="font-display rounded-lg border border-white/30 px-8 py-4 text-lg font-bold uppercase tracking-wide transition hover:border-white hover:bg-white/10"
            >
              Jak to funguje
            </a>
          </div>
          <div className="rise rise-4 mt-16 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/15 pt-8 text-sm sm:grid-cols-4">
            <div>
              <p className="font-display text-3xl font-bold text-enervit">1976</p>
              <p className="mt-1 text-white/60">italská značka s 50letou historií</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-enervit">120+</p>
              <p className="mt-1 text-white/60">aktivních partnerů v ČR/SR</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-enervit">3</p>
              <p className="mt-1 text-white/60">největší závody v ČR/SR jako partner</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-enervit">UAE</p>
              <p className="mt-1 text-white/60">oficiální výživa UAE Team Emirates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="vyhody" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Proč Enervit"
            title="Regál, který se točí sám"
            sub="Sportovní výživa je nejrychleji obrátkové zboží ve specializované prodejně. A Enervit je značka, kterou zákazníci znají ze závodů — nemusíte ji vysvětlovat."
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
            eyebrow="Pro koho"
            title="Nejen pro prodejny"
            sub="Program stavíme na míru podle toho, kdo jste a komu prodáváte."
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
            title="Před. Během. Po."
            sub="Kompletní systém sportovní výživy — od energie během výkonu po regeneraci a každodenní suplementaci."
          />
          <div className="relative mt-14">
            {/* časová osa spojující fáze */}
            <div className="absolute left-0 right-0 top-4 hidden h-0.5 bg-enervit/25 lg:block" />
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="jak" className="bg-ink py-24 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Jak to funguje"
            title="Od formuláře k prvnímu prodeji za pár týdnů"
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
            <span className="tag-bib">Co dostanete</span>
            <h2 className="font-display mt-4 text-4xl font-bold uppercase italic leading-tight sm:text-5xl">
              Partnerství, ne jen velkoobchodní ceník
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
              Chci nabídku pro svou prodejnu
            </a>
          </div>
          <div className="relative h-[480px] overflow-hidden rounded-2xl">
            <Image
              src="/img/win-pogacar.jpg"
              alt="Tadej Pogačar slaví vítězství ve žlutém dresu Tour de France"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
            <p className="absolute bottom-4 left-4 rounded bg-ink/70 px-3 py-1.5 text-xs font-medium text-white">
              Tadej Pogačar — vítěz Tour de France, spoléhá na Enervit
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="tym" className="bg-paper py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            eyebrow="Váš obchodní zástupce"
            title="Znáte nás ze závodů. Teď osobně."
            sub="Žádné call centrum. Každý region má svého člověka, který zná místní prodejny, závody i kluby."
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
              Jste sportovec, ne prodejna?
            </h2>
            <p className="mt-2 max-w-xl text-white/90">
              Doporučte nám prodejnu, kde byste Enervit rádi kupovali. Když se stane partnerem, vybavíme vás na cestě
              za vaším dalším tréninkovým cílem.
            </p>
          </div>
          <a
            href="/doporucte"
            className="font-display shrink-0 rounded-lg bg-white px-8 py-4 text-lg font-bold uppercase tracking-wide text-enervit transition hover:bg-neutral-100"
          >
            Doporučit prodejnu
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
          alt="Produktová řada Enervit C2:1PRO"
          fill
          className="object-cover object-[center_35%] opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink/60" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
          <div className="text-white">
            <span className="tag-bib">Přidejte se</span>
            <h2 className="font-display mt-4 text-4xl font-bold uppercase italic leading-tight sm:text-5xl">
              Stihněte podzimní sezónu s Enervitem <span className="hl-bib">v regálu</span>
            </h2>
            <p className="mt-4 max-w-md text-white/75">
              Vyplňte formulář a do 72 hodin se vám ozve obchodní zástupce pro váš region.
              Bez závazků — jen si spolu projdete, jestli to dává smysl.
            </p>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink/95 p-3 backdrop-blur md:hidden">
        <a
          href="#formular"
          className="font-display block rounded-lg bg-enervit px-6 py-3.5 text-center text-base font-bold uppercase tracking-wide text-white"
        >
          Chci nabídku pro svou prodejnu
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-ink py-12 pb-24 text-sm text-white/50 md:pb-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:flex-row sm:justify-between">
          <Image src="/img/logo.png" alt="Enervit" width={130} height={73} className="h-11 w-auto" />
          <p className="text-center">
            VITAR Sport s.r.o. — exkluzivní distributor Enervit pro ČR a SR
            <br />
            <a href="https://www.enervit.cz" className="underline transition hover:text-white">enervit.cz</a>
            {" · "}
            <a href="https://www.enervitsport.sk" className="underline transition hover:text-white">enervitsport.sk</a>
          </p>
          <p>© 2026 VITAR Sport s.r.o.</p>
        </div>
      </footer>
    </main>
  );
}
