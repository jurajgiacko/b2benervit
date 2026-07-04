# Zadání pro performance agenturu — B2B kampaň „Fueled by Enervit"

**Zadavatel:** VITAR Sport s.r.o. (exkluzivní distributor Enervit pro ČR a SR)
**Kontakt:** Juraj Giacko (juraj@giacko.sk)
**Období kampaně:** 8. 9. – 15. 12. 2026 (setup do 31. 8.)
**Trhy:** ČR (primární), SK (sekundární) — oddělené kampaně i reporting

---

## 1. Cíl kampaně (jediná metrika úspěchu)

Generovat **kvalifikované B2B leady** — majitele specializovaných prodejen (cyklo, běh, fitness, sportovní výživa, lékárny), kteří vyplní formulář na landing page. Leady zpracovává náš obchodní tým; byznysový cíl je 30 nových partnerských prodejen do konce roku.

**KPI pro agenturu:**

| Metrika | Cíl |
|---|---|
| Leady z paid kanálů (4 měsíce) | 60–80 |
| CPL ČR | < 500 Kč |
| CPL SK | < 600 Kč |
| Kvalita: podíl leadů v cílovém segmentu | > 60 % (vyhodnotíme společně po 1. měsíci) |

Ne-cíle: awareness, traffic, fanoušci, prodeje na e-shopu. Toto je čistá B2B lead-gen kampaň, oddělená od stávajících e-commerce aktivit.

## 2. Cílové skupiny

**B2B (hlavní, ~85 % rozpočtu):** majitelé/vedoucí malých specializovaných prodejen v ČR/SR, 30–55 let. Zájmy/chování: cyklistika, běh, správa FB stránky prodejny, malé podnikání. Pain: nízké marže na hardwaru, strach z ležáků a z podřezání e-shopy.

**B2C „Doporuč prodejnu" (vedlejší, ~15 %, start říjen):** aktivní sportovci (cyklo/běh/triatlon) v ČR/SR, kteří doporučí svou oblíbenou prodejnu — mechanika: za úspěšný tip balíček výživy. Cíl: nominace přes formulář /doporucte.

## 3. Co je hotové a co dodáme

- **Landing page:** b2benervit.vercel.app (CZ) a /sk (SK) — po připojení domény b2b.enervit.online. Krátký formulář (8 polí), lead se automaticky routuje na obchodního zástupce podle kraje. B2C stránka: /doporucte.
- **Kreativy:** 11 hotových bannerů ve 4 copy liniích na interní stránce /banners (A marže · B Pogačar · C podpora · D doporuč) ve formátech 1080×1080, 1200×628, 1080×1920, 970×250, 300×250. Zdrojové fotky a packshoty dodáme pro vaše ad varianty; brand: Enervit červená #E40521, bílé logo na červené.
- **UTM konvence:** utm_source / utm_medium / utm_campaign dle vaší praxe; parametr `ref=` je rezervovaný pro obchodníky — neužívat v paid.

## 4. Co poptáváme od vás

1. **Media plán a setup** (do 31. 8.): struktura kampaní Meta (ČR/SK zvlášť), Google Search; návrh publik vč. lookalike (dodáme seed: zákaznickou databázi e-shopu po anonymizaci / pixel data).
2. **Měření:** dodat Meta Pixel ID + GA4 property + konverzní události (odeslání formuláře /api/lead a /api/nominate → thank-you stav). Web je Next.js, implementaci provedeme my do 5 pracovních dnů od dodání ID. Consent mode v2.
3. **Test fáze (8.–21. 9.):** 3 B2B kreativní linie proti sobě na obou trzích, vyhodnocení CPL → doporučení alokace. Kill-kritérium: linie s CPL > 1 000 Kč po 10 000 Kč spendu.
4. **Scale fáze (říjen–prosinec):** optimalizace na vítězné kombinace, refresh kreativ à 3–4 týdny (můžeme dodávat varianty z /banners), zapnutí B2C linie D v říjnu, listopadový push „stihněte vánoční sezónu".
5. **Reporting:** týdenní přehled (spend, leady, CPL per trh/kanál/kreativa) do sdíleného sheetu + měsíční call. Přístup do účtů pro nás (vlastnictví účtů: VITAR Sport).

## 5. Kanály a rozpočet (media spend, bez fee)

| Kanál | ČR | SK | Poznámka |
|---|---|---|---|
| Meta (FB/IG) B2B lead-gen | 100 000 Kč | 32 000 Kč | primární kanál; landing page konverze; Meta Lead Ads lze A/B testovat proti landingu, ale pole musí odpovídat formuláři a leady téct do našeho webhooku |
| Google Search | 24 000 Kč | 8 000 Kč | exact/phrase: „sportovní výživa velkoobchod", „enervit b2b", „výživa pro prodejnu" apod. |
| Sklik (test) | 8 000 Kč | — | jen pokud doporučíte; kill při CPL > 800 Kč |
| Meta B2C „doporuč" | 14 000 Kč | 6 000 Kč | od října |
| **Celkem media** | **146 000 Kč** | **46 000 Kč** | + rezerva 13 000 Kč na přesuny dle výkonu |

Rozpočet je stropní; přesuny mezi kanály/trhy dle výkonu po dohodě (stačí e-mail). Fee: navrhněte model (fix / % ze spendu) v nabídce.

## 6. Harmonogram

| Termín | Milník |
|---|---|
| do 15. 8. | vaše nabídka: media plán, fee, návrh publik |
| do 31. 8. | schválení, setup kampaní, pixel/GA4 nasazené, QA měření |
| 8. 9. | launch test fáze (B2B linie A/B/C, ČR+SK) |
| 22. 9. | vyhodnocení testu, alokace na scale |
| 1. 10. | zapnutí B2C linie D |
| 1. 11. | Q4 push kreativa |
| 15. 12. | stop-stav, závěrečný report a doporučení pro Q1/27 |

## 7. Omezení a poznámky

- Nezasahovat do stávajících e-commerce kampaní (enervit.cz / enervitsport.sk) — oddělené kampaně, oddělené rozpočty; sdílený pixel je OK.
- Tonalita: expert, závodní kredibilita (Pogačar, Sinner, UAE Team Emirates, Jizerská 50, ČSOB Bratislava Marathon), žádné slevové messagingy — marže a podmínky komunikujeme rozmezím, nikdy konkrétní ceník v reklamě.
- Právní: v B2C linii D neslibovat konkrétní hodnotu odměny (jen „balíček na tvůj cíl").
- Značku Enervit užívat dle brand manuálu (dodáme); fotky Pogačara/Sinnera pouze ty, které dodáme my.
