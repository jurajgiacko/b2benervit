import type { Metadata } from "next";
import Image from "next/image";
import BannerZoom from "@/components/BannerZoom";

export const metadata: Metadata = {
  title: "Kampaňové bannery — interní",
  robots: { index: false, follow: false },
};

// Interní přehled kreativ pro Meta/Google kampaň. Není prolinkovaný z hlavní stránky.
// Pravidla: jeden headline (max ~6 slov), velké logo, jedno CTA, žádné odstavce.

const URL_LABEL = "b2b.enervit.online";

function Logo({ className }: { className: string }) {
  return <Image src="/img/logo.png" alt="Enervit" width={640} height={360} className={className} />;
}

function Cta({ children, dark = false, small = false }: { children: React.ReactNode; dark?: boolean; small?: boolean }) {
  return (
    <span
      className={`font-display inline-block rounded-lg font-bold uppercase tracking-wide ${
        dark ? "bg-ink text-white" : "bg-enervit text-white"
      } ${small ? "px-6 py-3 text-2xl" : "px-10 py-5 text-3xl"}`}
    >
      {children} →
    </span>
  );
}

function Frame({
  w,
  h,
  label,
  id,
  children,
}: {
  w: number;
  h: number;
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-16 scroll-mt-24" id={id}>
      <p className="mb-3 font-mono text-sm text-neutral-500">
        <span className="font-bold text-ink">{id.toUpperCase()}</span> · {label} — {w}×{h}
      </p>
      <div
        className="relative overflow-hidden bg-ink text-white shadow-2xl"
        style={{ width: w, height: h, zoom: "var(--banner-zoom, 0.5)" }}
      >
        {children}
      </div>
    </div>
  );
}

const INDEX = [
  { id: "a1", label: "A1 marže · feed" },
  { id: "b1", label: "B1 Pogačar · feed" },
  { id: "c1", label: "C1 podpora · feed" },
  { id: "b2", label: "B2 Pogačar · link ad" },
  { id: "a2", label: "A2 marže · link ad" },
  { id: "b3", label: "B3 Pogačar · story" },
  { id: "d1", label: "D1 doporuč · feed" },
  { id: "d2", label: "D2 doporuč · story" },
  { id: "d3", label: "D3 doporuč · link ad" },
  { id: "a3", label: "A3 marže · leaderboard" },
  { id: "a4", label: "A4 marže · rectangle" },
];

export default function Banners() {
  return (
    <main className="min-h-screen overflow-x-auto bg-neutral-100 p-10">
      <h1 className="font-display text-3xl font-bold uppercase">Kampaňové bannery — Fueled by Enervit (interní)</h1>
      <p className="mt-2 max-w-2xl text-sm text-neutral-600">
        Čtyři copy linky: <b>A</b> marže · <b>B</b> Pogačar · <b>C</b> podpora · <b>D</b> doporuč prodejnu (B2C).
        Pro export přepněte na 100 % a udělejte screenshot banneru.
      </p>
      <nav className="mb-6 mt-4 flex max-w-4xl flex-wrap gap-2">
        {INDEX.map((i) => (
          <a
            key={i.id}
            href={`#${i.id}`}
            className="rounded-full border border-neutral-300 bg-white px-3 py-1.5 text-xs font-semibold text-neutral-700 transition hover:border-enervit hover:text-enervit"
          >
            {i.label}
          </a>
        ))}
      </nav>
      <BannerZoom />

      {/* ============ A1 · MARŽE · 1080×1080 — čistá typografie ============ */}
      <Frame id="a1" w={1080} h={1080} label="Meta feed · marže">
        <div className="absolute inset-0 bg-ink" />
        <div className="absolute inset-0 flex flex-col items-start justify-between p-20">
          <Logo className="h-32 w-auto" />
          <div>
            <p className="font-display whitespace-nowrap text-[230px] font-extrabold leading-none text-enervit">40–55&nbsp;%</p>
            <p className="font-display mt-2 text-6xl font-bold uppercase text-white">
              marže pro vaši prodejnu
            </p>
          </div>
          <Cta>Chci Enervit</Cta>
        </div>
      </Frame>

      {/* ============ B1 · POGAČAR · 1080×1080 ============ */}
      <Frame id="b1" w={1080} h={1080} label="Meta feed · Pogačar">
        <Image src="/img/hero-pogacar.jpg" alt="" fill className="object-cover object-[62%_20%] opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-start justify-between p-20">
          <Logo className="h-32 w-auto" />
          <div>
            <p className="font-display text-[135px] font-extrabold uppercase italic leading-[0.92]">
              Výživa vítězů
              <br />
              <span className="hl-bib">Tour.</span>
            </p>
            <div className="mt-12">
              <Cta>Prodávejte ji i vy</Cta>
            </div>
          </div>
        </div>
      </Frame>

      {/* ============ C1 · PODPORA · 1080×1080 — červená + produkt ============ */}
      <Frame id="c1" w={1080} h={1080} label="Meta feed · podpora">
        <div className="absolute inset-0 bg-enervit" />
        <div className="absolute -right-20 bottom-0 top-40 w-[600px]">
          <Image src="/img/p-purepro.png" alt="" fill className="object-contain object-bottom" />
        </div>
        <div className="absolute inset-0 flex flex-col items-start justify-between p-20">
          <Logo className="h-32 w-auto" />
          <div className="max-w-[560px]">
            <p className="font-display text-[120px] font-extrabold uppercase italic leading-[0.92] text-white">
              Balíček.
              <br />
              Zaškolení.
              <br />
              Zástupce.
            </p>
            <div className="mt-12">
              <Cta dark>Staňte se partnerem</Cta>
            </div>
          </div>
        </div>
      </Frame>

      {/* ============ B2 · POGAČAR · 1200×628 link ad ============ */}
      <Frame id="b2" w={1200} h={628} label="Meta link ad / GDN · Pogačar">
        <Image src="/img/hero-pogacar.jpg" alt="" fill className="object-cover object-[70%_20%] opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-between p-16">
          <Logo className="h-24 w-auto self-start" />
          <div>
            <p className="font-display max-w-[720px] text-8xl font-extrabold uppercase italic leading-[0.92]">
              Výživa vítězů <span className="hl-bib">Tour.</span>
            </p>
            <div className="mt-8">
              <Cta small>Prodávejte ji i vy</Cta>
            </div>
          </div>
        </div>
      </Frame>

      {/* ============ A2 · MARŽE · 1200×628 link ad ============ */}
      <Frame id="a2" w={1200} h={628} label="Meta link ad / GDN · marže">
        <div className="absolute inset-0 bg-ink" />
        <div className="absolute -right-6 bottom-0 top-10 w-[420px]">
          <Image src="/img/p-carbogel.png" alt="" fill className="object-contain object-bottom" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-between p-16">
          <Logo className="h-24 w-auto self-start" />
          <div>
            <p className="font-display whitespace-nowrap text-[140px] font-extrabold leading-none text-enervit">40–55&nbsp;%</p>
            <p className="font-display text-5xl font-bold uppercase text-white">marže pro vaši prodejnu</p>
            <div className="mt-8">
              <Cta small>Chci Enervit</Cta>
            </div>
          </div>
        </div>
      </Frame>

      {/* ============ B3 · POGAČAR · 1080×1920 story ============ */}
      <Frame id="b3" w={1080} h={1920} label="IG/FB story · Pogačar">
        <Image src="/img/win-pogacar.jpg" alt="" fill className="object-cover object-[45%_top] opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-between p-20 pb-36 text-center">
          <Logo className="h-40 w-auto" />
          <div>
            <p className="font-display text-[150px] font-extrabold uppercase italic leading-[0.92]">
              Váš regál.
              <br />
              Jejich <span className="hl-bib">palivo.</span>
            </p>
            <div className="mt-16">
              <Cta>Staňte se partnerem</Cta>
            </div>
            <p className="mt-10 text-3xl font-semibold text-white/70">{URL_LABEL}</p>
          </div>
        </div>
      </Frame>

      {/* ============ D1 · DOPORUČ · 1080×1080 B2C ============ */}
      <Frame id="d1" w={1080} h={1080} label="Meta feed B2C · doporuč prodejnu">
        <Image src="/img/win-pogacar.jpg" alt="" fill className="object-cover object-[45%_top] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-start justify-between p-20">
          <Logo className="h-32 w-auto" />
          <div>
            <p className="font-display text-[130px] font-extrabold uppercase italic leading-[0.92]">
              Chybí ti Enervit
              <br />
              <span className="hl-bib">za rohem?</span>
            </p>
            <div className="mt-12">
              <Cta>Doporuč prodejnu</Cta>
            </div>
            <p className="mt-8 text-3xl font-semibold text-white/80">Za úspěšný tip balíček na tvůj cíl.</p>
          </div>
        </div>
      </Frame>

      {/* ============ D2 · DOPORUČ · 1080×1920 story B2C ============ */}
      <Frame id="d2" w={1080} h={1920} label="IG story B2C · doporuč prodejnu">
        <Image src="/img/hero-pogacar.jpg" alt="" fill className="object-cover object-[58%_20%] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-between p-20 pb-36 text-center">
          <Logo className="h-40 w-auto" />
          <div>
            <p className="font-display text-[150px] font-extrabold uppercase italic leading-[0.92]">
              Tvůj obchod.
              <br />
              Tvoje <span className="hl-bib">palivo.</span>
            </p>
            <div className="mt-16">
              <Cta>Doporuč prodejnu</Cta>
            </div>
            <p className="mt-10 text-3xl font-semibold text-white/80">Za úspěšný tip balíček na tvůj cíl.</p>
          </div>
        </div>
      </Frame>

      {/* ============ D3 · DOPORUČ · 1200×628 link ad B2C ============ */}
      <Frame id="d3" w={1200} h={628} label="Meta link ad B2C · doporuč prodejnu">
        <Image src="/img/win-pogacar.jpg" alt="" fill className="object-cover object-[45%_top] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-between p-16">
          <Logo className="h-24 w-auto self-start" />
          <div>
            <p className="font-display max-w-[760px] text-8xl font-extrabold uppercase italic leading-[0.92]">
              Chybí ti Enervit <span className="hl-bib">za rohem?</span>
            </p>
            <div className="mt-8">
              <Cta small>Doporuč prodejnu</Cta>
            </div>
          </div>
        </div>
      </Frame>

      {/* ============ A3 · MARŽE · 970×250 leaderboard ============ */}
      <Frame id="a3" w={970} h={250} label="leaderboard · marže">
        <div className="absolute inset-0 bg-enervit" />
        <div className="absolute inset-0 flex items-center gap-12 px-14">
          <Logo className="h-20 w-auto shrink-0" />
          <p className="font-display flex-1 text-6xl font-extrabold uppercase leading-none text-white">
            Marže 40–55&nbsp;%
          </p>
          <span className="font-display shrink-0 rounded-lg bg-ink px-8 py-4 text-2xl font-bold uppercase text-white">
            Chci Enervit →
          </span>
        </div>
      </Frame>

      {/* ============ A4 · MARŽE · 300×250 rectangle ============ */}
      <Frame id="a4" w={300} h={250} label="medium rectangle · marže">
        <div className="absolute inset-0 bg-ink" />
        <div className="absolute inset-0 flex flex-col items-start justify-between p-6">
          <Logo className="h-12 w-auto" />
          <div>
            <p className="font-display text-6xl font-extrabold leading-none text-enervit">40–55&nbsp;%</p>
            <p className="font-display text-xl font-bold uppercase text-white">marže na výživě</p>
          </div>
          <span className="font-display rounded bg-enervit px-5 py-2.5 text-base font-bold uppercase text-white">
            Chci Enervit →
          </span>
        </div>
      </Frame>
    </main>
  );
}
