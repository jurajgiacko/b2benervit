# Marketingová stratégia štartu — B2B kampaň Enervit (sep–dec 2026)

> Nadväzuje na [KAMPAN-B2B-H2-2026.md](KAMPAN-B2B-H2-2026.md) (celková stratégia) a [ZADANIE-PERFORMANCE-AGENTURA.md](ZADANIE-PERFORMANCE-AGENTURA.md) (brief pre agentúru).
> Tento dokument rieši: ako začať, koľko to má stáť a čo je reálne čakať v CZ vs. SK.

---

## 1. Ako začať — 3 fázy

### Fáza 0 — Príprava (do 31. 8.)
Bez tohto nespúšťať ani korunu do médií:

| # | Úloha | Owner | Stav |
|---|---|---|---|
| 1 | Landing CZ + SK live | — | ✅ hotové (b2benervit.vercel.app + /sk) |
| 2 | Bannery 4 línie × formáty | — | ✅ hotové (/banners) |
| 3 | Doména b2b.enervit.online + LEAD_WEBHOOK_URL | Juraj | ⬜ |
| 4 | Make.com scenár: lead → mail zástupcovi + sheet | Juraj | ⬜ |
| 5 | **Meta Pixel + GA4 + consent lišta na webe** | agentúra dodá ID, my nasadíme | ⬜ |
| 6 | Štartovací balíček: obsah + cena per segment | Juraj + Karolína | ⬜ |
| 7 | Zoznamy 50 predajní / región | Karolína, Jirka, Štěpán | ⬜ |
| 8 | Kickoff s obchodom (playbook, UTM linky, SLA 72 h) | Juraj | ⬜ |
| 9 | Zadanie agentúre + schválenie media plánu | Juraj | ⬜ |

### Fáza 1 — Test (8. 9. – 30. 9.)
- **Outbound štartuje naplno** (obchodníci + e-mail na ~100 spiacich účtov) — to je hlavný motor, paid je akcelerátor.
- Paid v teste: 2 týždne, menšie rozpočty, všetky 3 B2B línie kreatív (A marže / B Pogačar / C podpora) proti sebe, CZ aj SK oddelene.
- Výstup testu: víťazná kreatíva a CPL per trh. Kill-kritérium: línia s CPL > 1 000 Kč po 10K Kč spendu sa vypína.

### Fáza 2 — Scale (okt–dec)
- Rozpočet presunúť do víťazných kombinácií (kreatíva × trh × kanál).
- November = Q4 push („stihnite vianočnú sezónu") + eventová prítomnosť.
- B2C línia D („doporuč obchod") sa zapína až v októbri — nech obchodníci najprv stíhajú spracovávať B2B leady.
- 15. 12. stop-stav, vyhodnotenie, pipeline do Q1/27.

## 2. Budget

Dva scenáre na 4 mesiace (média + podpora, bez agentúrneho fee):

### Scenár LEAN — 150 000 Kč
| Položka | Kč |
|---|---|
| Meta ads CZ (B2B) | 60 000 |
| Meta ads SK (B2B) | 20 000 |
| Google Search CZ+SK | 24 000 |
| B2C „doporuč" boost (okt–dec) | 12 000 |
| Tlač (one-pagery, QR stojany) | 10 000 |
| Vzorky do štartovacích balíčkov | 15 000 |
| Rezerva ~10 % | 9 000 |

### Scenár ODPORÚČANÝ — 250 000 Kč
| Položka | Kč |
|---|---|
| Meta ads CZ (B2B, vrátane retargetingu) | 100 000 |
| Meta ads SK (B2B) | 32 000 |
| Google Search CZ+SK (exact intent + brand B2B) | 32 000 |
| Sklik test CZ (okt, kill ak CPL > 800 Kč) | 8 000 |
| B2C „doporuč" (Meta, okt–dec) | 20 000 |
| Tlač + POS na eventy | 15 000 |
| Vzorky do štartovacích balíčkov (30 × ~1 000) | 30 000 |
| Rezerva ~7 % | 13 000 |

**Kontext únosnosti:** firma drží marketing ~16 % z tržieb; 250K za 4 mesiace je ~2 % ročných tržieb — bezpečné. Agentúrne fee navrhujem dohodnúť ako rozšírenie existujúceho retaineru (správa 2 kanálov × 2 trhy ≈ 15–25K Kč/mes — potvrdiť s agentúrou).

**Ekonomika:** 30 partnerov × konzervatívne 80–150K Kč ročného obratu = 2,4–4,5M Kč nového obratu ročne. Pri ~32 % B2B marži je to 0,8–1,4M Kč marže/rok → aj ODPORÚČANÝ scenár sa splatí za 3–4 mesiace bežného predaja partnerov.

## 3. Realistické ciele CZ vs. SK

Trhy nie sú symetrické — CZ robí ~88 % tržieb, sú tam 2 obchodníci a väčšia základňa predajní; SK je fragmentovaný trh s 1 obchodníkom.

| Metrika (sep–dec) | ČR | SK | Spolu |
|---|---|---|---|
| Leady z webu (paid + organika + QR) | 100 | 30 | 130 |
| Leady z outboundu/reaktivácie | 15 | 5 | 20 |
| Kvalifikované (predajňa v cieľovom segmente) | 70 | 20 | 90 |
| Schôdzky/hovory | 36 | 9 | 45 |
| **Noví partneri s 1. objednávkou** | **24** | **6** | **30** |
| Reaktivované spiace účty | 16 | 4 | 20 |
| Priemerná 1. objednávka | 15 000 Kč | 12 000 Kč (menšie predajne) | — |
| CPL z paid | < 500 Kč | < 600 Kč (drahšie, menší pool) | — |

**Prečo je to realistické:**
- 30 partnerov = oficiálny cieľ z obchodného plánu 2026; rozpad 24/6 kopíruje pomer trhov aj kapacitu (Karolína + Jirka vs. Štěpán).
- 8 nových partnerov mesačne na 3 ľudí = ~2,7/os./mes. pri SLA 72 h — zvládnuteľné popri bežnej agende, ak malé leady rieši telefón, nie výjazd.
- SK korekcia: fragmentovaný trh, cenová citlivosť, Štěpán má zároveň Globus — 6 partnerov je ambiciózne-realistické; 10+ by bolo naivné.
- Konverzia landing page 2–6 % je B2B benchmark; outbound a „vaši zákazníci sa pýtajú" leady konvertujú násobne lepšie.

**Čo cieľom NIE je:** brand awareness, fanúšikovia, návštevnosť. Jediná hviezda severu = partneri s prvou objednávkou; všetko ostatné sú medzikroky.

## 4. Meranie a rytmus riadenia

- **Týždenne (pondelok):** leady / schôdzky / objednávky per región + CPL per kanál — 15 min na porade obchodu.
- **Mesačne:** vyhodnotenie s agentúrou — presuny rozpočtu, výmena kreatív (refresh každé 3–4 týždne).
- **Zdroj pravdy:** Google Sheet z Make.com (leady) + Pohoda (objednávky) + GA4/Meta (médiá). UTM disciplína: `utm_source/medium/campaign` + `ref=` pre obchodníkov.
