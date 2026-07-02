# Enervit B2B — landing page pro nábor partnerských prodejen

Kampaň **„Fueled by Enervit: Partner Program H2 2026"** — nábor 30+ specializovaných prodejen (cyklo, běh, fitness, výživa, lékárny) v ČR a SR. Kompletní strategie kampaně: [docs/KAMPAN-B2B-H2-2026.md](docs/KAMPAN-B2B-H2-2026.md).

## Stack

Next.js 16 (App Router) + Tailwind CSS 4, deploy na Vercel. Obsah je statický, jediná dynamická část je `/api/lead` (příjem formuláře).

## Vývoj

```bash
npm install
npm run dev   # http://localhost:3000
```

## Formulář a lead routing

Formulář posílá lead na `POST /api/lead`. Route handler:

1. zvaliduje povinná pole a souhlas,
2. přiřadí obchodního zástupce podle kraje (`lib/regions.ts` — Čechy → Karolína, Morava → Jiří, Slovensko → Štěpán),
3. přepošle payload na webhook v env proměnné `LEAD_WEBHOOK_URL` (Make.com scénář: e-mail zástupci + zápis do Google Sheetu).

Bez nastavené `LEAD_WEBHOOK_URL` se lead jen zaloguje do server logu — formulář tak funguje i v preview.

UTM/ref: obchodníci sdílejí odkaz s `?ref=karolina|jiri|stepan` — hodnota se posílá s leadem.

## Deploy na Vercel

1. Importovat repo `jurajgiacko/b2benervit` na Vercelu (framework preset: Next.js, bez dalších úprav).
2. V Settings → Environment Variables nastavit `LEAD_WEBHOOK_URL` (Make.com webhook).
3. Doména: doporučeno `b2b.enervit.online` (konzistentní s event.enervit.online). Po připojení domény aktualizovat `metadataBase` v `app/layout.tsx`, pokud se změní.

## Assets

Loga, packshoty a lifestyle fotky v `public/img/` pocházejí z oficiálních Enervit brand podkladů (brand barva `#E40521`, Pantone 485). Zdrojové soubory v plném rozlišení jsou v interním úložišti VitarSport2026.
