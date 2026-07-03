import type { Metadata } from "next";
import Image from "next/image";
import BannerZoom from "@/components/BannerZoom";

export const metadata: Metadata = {
  title: "Kampaňové bannery — interní",
  robots: { index: false, follow: false },
};

// Interní přehled kreativ pro Meta/Google kampaň. Není prolinkovaný z hlavní stránky.
// Export: otevřít banner v prohlížeči při 100% zoomu a vyfotit / použít html-to-image nástroj.

const CTA = "Staňte se partnerem";
const URL_LABEL = "b2b.enervit.online";

function Logo({ className }: { className: string }) {
  return <Image src="/img/logo.png" alt="Enervit" width={640} height={360} className={className} />;
}

function CtaButton({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display inline-block rounded-lg bg-white px-8 py-4 text-2xl font-bold uppercase tracking-wide text-enervit ${className}`}
    >
      {CTA} →
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

      {/* ============ VARIANTA A — MARŽE (1080×1080, feed) ============ */}
      <Frame id="a1" w={1080} h={1080} label="Meta feed · marže">
        <Image src="/img/win-pogacar.jpg" alt="" fill className="object-cover object-[45%_top] opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-between p-16">
          <Logo className="h-20 w-auto self-start" />
          <div>
            <p className="font-display text-[110px] font-extrabold uppercase leading-[0.95]">
              Marže <span className="text-enervit">40–55 %</span>
              <br />
              na regálu, který
              <br />
              se točí sám
            </p>
            <p className="mt-6 text-3xl text-white/85">B2B program pro specializované prodejny</p>
            <div className="mt-10 flex items-center gap-8">
              <CtaButton />
              <span className="text-2xl font-semibold text-white/70">{URL_LABEL}</span>
            </div>
          </div>
        </div>
      </Frame>

      {/* ============ VARIANTA B — POGAČAR (1080×1080, feed) ============ */}
      <Frame id="b1" w={1080} h={1080} label="Meta feed · Pogačar">
        <Image src="/img/hero-pogacar.jpg" alt="" fill className="object-cover object-[62%_20%] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-between p-16">
          <Logo className="h-20 w-auto self-start" />
          <div>
            <p className="font-display text-[100px] font-extrabold uppercase leading-[0.95]">
              Prodávejte výživu,
              <br />
              se kterou se vyhrává
              <br />
              <span className="text-enervit">Tour de France</span>
            </p>
            <div className="mt-10 flex items-center gap-8">
              <CtaButton />
              <span className="text-2xl font-semibold text-white/70">{URL_LABEL}</span>
            </div>
          </div>
        </div>
      </Frame>

      {/* ============ VARIANTA C — PODPORA (1080×1080, feed) ============ */}
      <Frame id="c1" w={1080} h={1080} label="Meta feed · podpora">
        <div className="absolute inset-0 bg-enervit" />
        <div className="absolute -right-24 bottom-0 top-24 w-[560px]">
          <Image src="/img/p-purepro.png" alt="" fill className="object-contain object-bottom" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-between p-16">
          <Logo className="h-20 w-auto self-start rounded bg-white/0" />
          <div className="max-w-[620px]">
            <p className="font-display text-[96px] font-extrabold uppercase leading-[0.95]">
              Startovací balíček.
              <br />
              Zaškolení.
              <br />
              Váš zástupce.
            </p>
            <p className="mt-6 text-3xl text-white/90">Enervit do vaší prodejny bez rizika.</p>
            <div className="mt-10 flex items-center gap-8">
              <span className="font-display inline-block rounded-lg bg-ink px-8 py-4 text-2xl font-bold uppercase tracking-wide text-white">
                {CTA} →
              </span>
              <span className="text-2xl font-semibold text-white/85">{URL_LABEL}</span>
            </div>
          </div>
        </div>
      </Frame>

      {/* ============ 1200×628 link ad (B) ============ */}
      <Frame id="b2" w={1200} h={628} label="Meta link ad / GDN · Pogačar">
        <Image src="/img/hero-pogacar.jpg" alt="" fill className="object-cover object-[70%_20%] opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center p-14">
          <Logo className="mb-8 h-16 w-auto self-start" />
          <p className="font-display max-w-[700px] text-7xl font-extrabold uppercase leading-[0.95]">
            Výživa vítězů <span className="text-enervit">Tour de France</span> ve vaší prodejně
          </p>
          <div className="mt-8 flex items-center gap-6">
            <CtaButton className="!text-xl !px-6 !py-3" />
            <span className="text-xl font-semibold text-white/70">{URL_LABEL}</span>
          </div>
        </div>
      </Frame>

      {/* ============ 1200×628 link ad (A) ============ */}
      <Frame id="a2" w={1200} h={628} label="Meta link ad / GDN · marže">
        <div className="absolute inset-0 bg-ink" />
        <div className="absolute -right-10 bottom-0 top-16 w-[460px]">
          <Image src="/img/p-carbogel.png" alt="" fill className="object-contain object-bottom" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center p-14">
          <Logo className="mb-8 h-16 w-auto self-start" />
          <p className="font-display max-w-[720px] text-7xl font-extrabold uppercase leading-[0.95]">
            Marže <span className="text-enervit">40–55 %</span>.<br />
            Zákazník, který se vrací.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <CtaButton className="!text-xl !px-6 !py-3" />
            <span className="text-xl font-semibold text-white/70">{URL_LABEL}</span>
          </div>
        </div>
      </Frame>

      {/* ============ 1080×1920 story ============ */}
      <Frame id="b3" w={1080} h={1920} label="IG/FB story · Pogačar">
        <Image src="/img/win-pogacar.jpg" alt="" fill className="object-cover object-[45%_top] opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/60" />
        <div className="absolute inset-0 flex flex-col justify-between p-20 pb-32">
          <Logo className="h-24 w-auto self-center" />
          <div className="text-center">
            <p className="font-display text-[120px] font-extrabold uppercase leading-[0.95]">
              Váš regál.
              <br />
              Jejich <span className="text-enervit">palivo</span>.
            </p>
            <p className="mx-auto mt-8 max-w-[700px] text-4xl text-white/85">
              Staňte se partnerskou prodejnou Enervit. Marže 40–55 %, startovací balíček a podpora závodů ve vašem
              regionu.
            </p>
            <div className="mt-14">
              <CtaButton />
            </div>
            <p className="mt-8 text-3xl font-semibold text-white/70">{URL_LABEL}</p>
          </div>
        </div>
      </Frame>

      {/* ============ VARIANTA D — DOPORUČ (1080×1080, B2C feed) ============ */}
      <Frame id="d1" w={1080} h={1080} label="Meta feed B2C · doporuč prodejnu">
        <Image src="/img/win-pogacar.jpg" alt="" fill className="object-cover object-[45%_top] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-between p-16">
          <Logo className="h-20 w-auto self-start" />
          <div>
            <p className="font-display text-[100px] font-extrabold uppercase leading-[0.95]">
              Chybí ti Enervit
              <br />
              <span className="text-enervit">za rohem?</span>
            </p>
            <p className="mt-6 max-w-[820px] text-3xl text-white/90">
              Doporuč nám svou prodejnu. Když se přidá, vybavíme tě na tvůj další tréninkový cíl.
            </p>
            <div className="mt-10 flex items-center gap-8">
              <span className="font-display inline-block rounded-lg bg-white px-8 py-4 text-2xl font-bold uppercase tracking-wide text-enervit">
                Doporučit prodejnu →
              </span>
              <span className="text-2xl font-semibold text-white/70">{URL_LABEL}/doporucte</span>
            </div>
          </div>
        </div>
      </Frame>

      {/* ============ VARIANTA D — DOPORUČ (1080×1920, story) ============ */}
      <Frame id="d2" w={1080} h={1920} label="IG story B2C · doporuč prodejnu">
        <Image src="/img/hero-pogacar.jpg" alt="" fill className="object-cover object-[58%_20%] opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/60" />
        <div className="absolute inset-0 flex flex-col justify-between p-20 pb-32">
          <Logo className="h-24 w-auto self-center" />
          <div className="text-center">
            <p className="font-display text-[110px] font-extrabold uppercase leading-[0.95]">
              Tvůj obchod.
              <br />
              Tvoje <span className="text-enervit">palivo</span>.
            </p>
            <p className="mx-auto mt-8 max-w-[720px] text-4xl text-white/85">
              Doporuč prodejnu, kde chceš kupovat Enervit — a my tě vybavíme na tvůj další závod.
            </p>
            <div className="mt-14">
              <span className="font-display inline-block rounded-lg bg-white px-8 py-4 text-2xl font-bold uppercase tracking-wide text-enervit">
                Doporučit prodejnu →
              </span>
            </div>
            <p className="mt-8 text-3xl font-semibold text-white/70">{URL_LABEL}/doporucte</p>
          </div>
        </div>
      </Frame>

      {/* ============ VARIANTA D — DOPORUČ (1200×628, link ad) ============ */}
      <Frame id="d3" w={1200} h={628} label="Meta link ad B2C · doporuč prodejnu">
        <Image src="/img/win-pogacar.jpg" alt="" fill className="object-cover object-[45%_top] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center p-14">
          <Logo className="mb-8 h-16 w-auto self-start" />
          <p className="font-display max-w-[760px] text-7xl font-extrabold uppercase leading-[0.95]">
            Doporuč prodejnu, získej <span className="text-enervit">balíček na svůj cíl</span>
          </p>
          <div className="mt-8 flex items-center gap-6">
            <span className="font-display inline-block rounded-lg bg-white px-6 py-3 text-xl font-bold uppercase tracking-wide text-enervit">
              Doporučit prodejnu →
            </span>
            <span className="text-xl font-semibold text-white/70">{URL_LABEL}/doporucte</span>
          </div>
        </div>
      </Frame>

      {/* ============ 970×250 leaderboard ============ */}
      <Frame id="a3" w={970} h={250} label="leaderboard · marže">
        <div className="absolute inset-0 bg-enervit" />
        <div className="absolute inset-0 flex items-center gap-10 px-12">
          <Logo className="h-14 w-auto shrink-0" />
          <p className="font-display flex-1 text-5xl font-extrabold uppercase leading-none">
            Sportovní výživa s marží 40–55 %
          </p>
          <span className="font-display shrink-0 rounded-lg bg-ink px-6 py-3 text-xl font-bold uppercase text-white">
            {CTA} →
          </span>
        </div>
      </Frame>

      {/* ============ 300×250 rectangle ============ */}
      <Frame id="a4" w={300} h={250} label="medium rectangle · marže">
        <div className="absolute inset-0 bg-ink" />
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <Logo className="h-9 w-auto self-start" />
          <div>
            <p className="font-display text-3xl font-extrabold uppercase leading-none">
              Marže <span className="text-enervit">40–55 %</span> pro vaši prodejnu
            </p>
            <span className="font-display mt-4 inline-block rounded bg-enervit px-4 py-2 text-sm font-bold uppercase text-white">
              {CTA} →
            </span>
          </div>
        </div>
      </Frame>
    </main>
  );
}
