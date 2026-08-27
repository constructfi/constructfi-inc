# ConstructFi homepage — visual asset package

**Route scope:** `/` (homepage) plus the shared header and footer.
**Source of truth:** `handoff/ConstructFi_Site_v2_standalone.html`.
**Status:** specification. Almost nothing in this list exists as production artwork yet — see §6.

Copy, product names, platform claims and navigation hierarchy are fixed by the reference. Nothing in this document changes them.

---

## 0. The finding that shapes this whole package

In the approved reference, **the ConstructFi house mark is the only real vector artwork on the page.** Everything else that reads as a logo, an app icon, or a product cover is drawn at runtime out of styled `<div>`s and inline geometry:

- Each product's app-icon badge is a small stack of coloured boxes assembled in code (`PRODUCT_ICON`), keyed to that product's brand palette.
- Each product's cover is an "app-surface illustration" — a miniature of the product's own UI, also assembled in code.
- Product wordmarks are set live in each brand's typeface. They are type, not artwork.

That was the right call for a design reference: it let each product carry its own brand grammar without waiting on eleven logo files. It is the wrong thing to ship. The Next.js build needs real files, and those files do not exist yet.

So the package splits three ways, and §6 is the part to read first if you are scheduling work.

A second finding: `public/products/` currently holds seven `.webp` covers at 900 × 1350 under **old slugs** — `build-or-bust`, `covi-estimator`, `covi-wallet`, `readiness-tracker`, `collectibles`. They do not match the eleven-product lineup, they do not match the approved cover composition, and their 2:3 portrait ratio is not the ratio any homepage card uses. Treat them as retired.

---

## 1. Asset inventory

`Exists` = production-ready file in the repo today. `Export` = can be produced from the approved reference. `Create` = needs a brand designer; no production-quality source exists.

### House brand

| Asset | Placement | Filename | Format | Export size | Variants | Transparent | Notes | State |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ConstructFi emblem | Header, left of wordmark, 30px tall | `brand/constructfi-emblem.svg` | SVG | viewBox 1080 × 1080 | one (fixed colourway) | yes | Three leaning planes, overlaps intact. Plane fills `#1BB6FD` / `#00D19A` / periwinkle. Never recolour to a single flat fill. | Exists |
| ConstructFi lockup, dark ground | Header, footer, any navy surface | `brand/constructfi-lockup-dark.svg` | SVG | viewBox 1920 × 1080 | dark | yes | Emblem + "ConstructFi" with `Fi` in `#00D19A`. | Exists |
| ConstructFi lockup, light ground | White sections, print, partner decks | `brand/constructfi-lockup-light.svg` | SVG | viewBox 1920 × 1080 | light | yes | Current file carries a full-bleed background `<rect>` — strip it before use or it will paint a box. | Exists, needs clean export |
| ConstructFi favicon set | Browser chrome | `brand/favicon-{16,32,180,512}.png` + `favicon.ico` | PNG / ICO | 16, 32, 180, 512 | one | yes | Emblem only, no wordmark. Below 32px the plane overlaps close up — commission a simplified 16px cut rather than downscaling. | Create |
| ConstructFi app icon | Store listings, PWA manifest | `brand/constructfi-appicon-1024.png` | PNG | 1024 × 1024 | one | no | Navy `#041428` plate, emblem centred, artwork bleeds to edge. | Create |

### Homepage hero

| Asset | Placement | Filename | Format | Export size | Variants | Transparent | Notes | State |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Hero device surface | Hero right column, the "Good morning / Your ecosystem" panel | — | **not an image** | — | — | — | Built in markup: navy panel, 2-column tile grid, six product tiles, green status dot. Reproduce as DOM, not as a screenshot. | Reproduce in code |
| Hero blueprint grid | Hero section background | — | **not an image** | — | — | — | Two `linear-gradient` rules over `#041428`, 1px white at 5%. CSS only. | Reproduce in code |
| Hero tile badges (×6) | Inside the hero panel, one per tile | see product marks below | SVG | 24 × 24 render | mono on dark | yes | ConstructOS, Build or Busted, Material Marketplace, Supplier Marketplace, + two more in reference order. | Create |

### Product assets — eleven products

Every product needs the same five files. `{slug}` is the reference slug (see §3) — keep it, because the routes and the `PRODUCT_ICON` keys already use it.

| Asset | Placement | Filename | Format | Export size | Variants | Transparent | Safe area | State |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Product mark | App-icon badge on cards, hero tiles, detail hero, footer | `products/{slug}-mark.svg` | SVG | square viewBox, 64-unit grid | full-colour + one-colour | yes | Mark occupies 58–66% of tile; nothing in the outer 12.5% | Create |
| Product app icon | Store listings, marketplace grid | `products/{slug}-appicon-1024.png` | PNG | 1024 × 1024 | one | no | Bleeds to edge; OS applies its own mask. No baked corner radius. | Create |
| Product wordmark | Detail hero, marketplace row | `products/{slug}-wordmark.svg` | SVG | height-normalised to 64 | dark + light | yes | Clear space per each brand's own rule | Create |
| Cover, wide | Featured **lead** card, 352px band | `products/{slug}-cover-wide.webp` | WebP | 1600 × 900 | one | no | Keep the app surface inside the centre 80%; the card crops on narrow columns | Export |
| Cover, row | Featured **row** cards, 200 × 168 slot | `products/{slug}-cover-row.webp` | WebP | 800 × 640 | one | no | Different crop, not a scaled copy — the row slot is 5:4 and much tighter | Export |

### Coins

| Asset | Placement | Filename | Format | Export size | Variants | Transparent | Notes | State |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| COVI coin | Ecosystem section, wallet chip, tokenomics blocks | `coins/covi.png` | PNG | 512 × 512 | one | check | Present at 512². Needs an alpha audit and an SVG or 1024² master if it is ever used above 256px. | Exists, needs master |
| ELUV coin | Same | `coins/eluv.png` | PNG | 512 × 512 | one | check | Same. | Exists, needs master |
| Coin marks, small | Inline with figures at 16–20px | `coins/covi-mark.svg`, `coins/eluv-mark.svg` | SVG | 24-unit grid | mono | yes | The 512² raster is unusable inline. A flat vector cut is required. | Create |

### Partner and endorsement marks

The homepage carries no third-party partner logos in the approved reference. Covington Supply Co. is named in copy only, on Collections surfaces. **Do not add a partner logo strip** — it is not in the design, and each mark would need its own usage clearance.

---

## 2. File structure

```
public/
  brand/
    constructfi-emblem.svg
    constructfi-lockup-dark.svg
    constructfi-lockup-light.svg
    constructfi-appicon-1024.png
    favicon.ico
    favicon-16.png
    favicon-32.png
    favicon-180.png
    favicon-512.png
  products/
    constructos-mark.svg
    constructos-wordmark.svg
    constructos-appicon-1024.png
    constructos-cover-wide.webp
    constructos-cover-row.webp
    build-or-busted-…            (same five)
    pactpilot-…
    covington-sales-academy-…
    eluvial-academy-…
    builderbae-…                 (Material Marketplace — see §3)
    supplier-marketplace-…
    covi-buildsim-…              (House Hackers — see §3)
    cashflow-city-tycoon-…
    brick-by-brick-…
    constructfi-collections-…
  coins/
    covi.png
    covi-mark.svg
    eluv.png
    eluv-mark.svg
```

Two slugs do not match their display names, because the reference routes were set before the products were renamed:

- `builderbae` → **Material Marketplace**
- `covi-buildsim` → **House Hackers**

Keep the slugs. Renaming them means changing routes, `PRODUCT_ICON` keys, and every internal link, and the design has no opinion on the URL. If marketing wants clean URLs, do it as one deliberate migration with redirects, not as a filename change.

Delete on merge: `public/products/build-or-bust.webp`, `collectibles.webp`, `covi-estimator.webp`, `covi-wallet.webp`, `house-hackers.webp`, `readiness-tracker.webp`, `supplier-marketplace.webp`.

---

## 3. Product identity systems

Do not normalise these into one card style. The distinctness is the point — each product was given its own brand grammar from its own approved standards deck.

Shared card rules: the accent bar at the top of a card is the product's **key** colour at 36px on the lead card, 0 on row cards. Card ground is white `#FFFFFF`, border `#D3DFE9`, hover border `#1BB6FD`. Cover art sits on the product's **ink** colour, never on white.

### ConstructOS — `constructos`
- **Mark:** four-pane mark, knocked out. Signal Teal fills the lower-right pane only, never the others, never the wordmark. Pane geometry on the 120-unit grid at 8 / 52 / 68 / 112, never adjusted.
- **Colours:** Signal Teal `#14C8B4` (key), Graphite `#14171A` (ink), Field Orange `#FF6A2B`, Steel `#8B9096`, Paper `#F2F2EF`.
- **Type:** Space Grotesk — Bold uppercase −4% for display, Regular 16–18px/1.6 for body. Data in Chivo Mono.
- **Cover:** dashboard cropped to one decision. Graphite ground.
- **Icon:** mark at 58% of tile width, optically centred, squircle radius 22.5% of height. Graphite tile.
- **Non-negotiable:** Signal Teal never exceeds 10% of a surface and never signals status. Field Orange means action required.

### Build or Busted — `build-or-busted`
- **Mark:** BoB monogram, Space Grotesk Bold, −4% tracking, the `o` in Midnight Ink. Squircle radius 28% of icon height.
- **Colours:** Ignition Orange `#FF5A1F` (key), Midnight Ink `#0E1420` (ink), Signal Green `#16C784`, Steel Gray `#8A94A6`, Cloud `#F5F7FA`.
- **Type:** Space Grotesk Bold 46–64px/.98 hero; Inter Regular 15–16px/1.6 body; JetBrains Mono for data.
- **Cover:** the underwriting verdict surface. 2400 × 1000 marketing hero exists as a composition in the standards deck — re-crop, do not reuse.
- **Icon:** one tile colour, Ignition Orange. Never on Midnight Ink, never reversed, never with the wordmark. Holds to 32px; below that, drop to the chart mark.
- **Non-negotiable:** orange is brand, never status. Build = Signal Green, Hold = amber, Busted = red.

### Material Marketplace — `builderbae`
- **Mark:** The Chip — a square shell holding an amber core. Same construction as the Supplier Marketplace hexagon, so the two read as one company without sharing a colour.
- **Colours:** Amber `#F2B01E` (key), Ink `#191510`, Kraft `#EDE4D6`, Paper `#FBF8F3`.
- **Type:** Newsreader display (−2.5%, .95 leading); Archivo UI/body 16–17px; IBM Plex Mono for SKUs, quantities, prices.
- **Cover:** the listing card — quantity, provenance, price, in that order. Price is the largest mono element.
- **Icon:** ink field, reversed chip, no wordmark. Below 16px, the amber square alone.
- **Non-negotiable:** amber carries one thing per screen — a price or a button, never both in the same eyeline. Green only ever means stock status.

### Supplier Marketplace — `supplier-marketplace`
- **Mark:** The Core — a solid inside a hexagonal shell, square-cornered, legible at 16px on a purchase order.
- **Colours:** Teal `#0F766E` (key), Ink `#0E1620`, Light Teal `#2AA79B` (reversed only), Steel `#E2E8EC`, Paper `#F7F9FA`.
- **Type:** Source Serif 4 headlines; IBM Plex Sans interface 400/500; IBM Plex Mono for money, dates, quantities.
- **Cover:** the quote comparison table — nine quotes on one basis.
- **Icon:** ink field, reversed mark, no wordmark. Below 24px the shell closes up; ship the core alone.
- **Non-negotiable:** Covington amber appears nowhere in this product. It is the sibling's signature and the only hard separation between them.

### PactPilot — `pactpilot`
- **Mark:** two strokes rising to a heading, separated by a seam, over a fixed signature rule. The rule is artwork — never redrawn, never rebuilt in another typeface.
- **Colours:** Ink Navy `#123049`, Beacon Amber `#F2C14E` (key), Deep Ink `#0B1D2E`, Harbour `#3E6A85`, Paper `#F7F6F3`. Findings: high `#B3322B`, review `#C97B1E`, clear `#2E7D62`.
- **Type:** Newsreader 300/400 display (−.02em); IBM Plex Sans 16px/1.65 body, 62-character measure; IBM Plex Mono for clause references.
- **Cover:** the findings panel with clause references and risk chips.
- **Icon:** Deep Ink ground, amber leading stroke. Signature rule is dropped below 40px.
- **Non-negotiable:** every surface carrying the mark also carries the qualifier — PactPilot supports professional legal counsel; it does not replace it.

### Covington Sales Academy — `covington-sales-academy`
- **Mark:** a lime square set inside a forest plate, at the 22px plate radius. The only rounded shape in the parent system.
- **Colours:** Forest `#386641`, Lime `#A7C957` (key), Sheet `#F7F8F7`, Black `#000000`. Proportion 60 / 30 / 10.
- **Type:** Open Sans only — Bold for course titles, Regular for body.
- **Cover:** course thumbnail, 16:9, on a solid plate. Type never sits directly on a photograph.
- **Icon:** forest plate, lime glyph. Drop the inner hairline below 96px; at 16px the glyph reduces to the lime square alone.
- **Non-negotiable:** lime never grounds a page and never carries white type. The Academy signature never leads the parent mark.

### Eluvial Academy — `eluvial-academy`
- **Mark:** the parent U mark on a Forest Green plate in the gold colourway. Mark height 47% of the plate, optical centre raised 3%.
- **Colours:** Forest Green `#196C52`, Golden Sand `#D4A95A` (key), Green 900 `#082C23`, Neutral 25 `#FAF9F6`.
- **Type:** Trajan Pro Bold (Cinzel as web fallback) for display only, uppercase .06em; Poppins for every working surface at 1.65.
- **Cover:** plate, full-bleed photograph behind a directional scrim, Trajan title on the lower third, gold rule along the top edge.
- **Icon:** flat Forest Green plate, no gradient or bevel. Gold step rule dropped below 64px.
- **Non-negotiable:** Academy is a label, not a second brand. Gold appears once per screen, on the commercial action.

### House Hackers — `covi-buildsim`
- **Mark:** a doorway, a rising bar, and the letterform at once. HOUSE indented from HACKERS by one step unit so the lockup climbs.
- **Colours:** Equity Gold `#E8B23A` (key), Asphalt `#0E1012` (ink), Cash Flow Green `#2FC98C`, Debt Red `#E2503C`, Blueprint Paper `#F4F1EA`.
- **Type:** Archivo 900 width 118, −3.5% tracking for display; Archivo 400/500 body; JetBrains Mono 500 for figures, tabular always on.
- **Cover:** the four-number HUD — cash, flow, credit, debt — over a property card.
- **Icon:** 1024², no rounding baked in. Mark alone below 48px.
- **Non-negotiable:** never set gold or green type below 16px; HUD values use paper white with a coloured indicator.

### Cashflow Tycoon — `cashflow-city-tycoon`
- **Mark:** The Block — knocked-out block lockup. Cyan field is fixed; TYCOON tracks out to match its width. CT monogram below 96px.
- **Colours:** Signal Cyan `#00C2FF` (key), Hazard Amber `#FFB300`, Asphalt `#0D0F12` (ink), Slab `#14181D`, Steel `#6B7480`, Concrete `#ECEAE4`.
- **Type:** Anton uppercase −2% display, never below 18px; Archivo 400/600/700 text, 16px minimum on mobile; IBM Plex Mono +14% for HUD.
- **Cover:** the plant shop with the budget-aware buy bar. Dusk-to-night, amber work lamps.
- **Icon:** always an Asphalt field. No gradients, no drop shadows, no baked corner radius.
- **Non-negotiable:** amber never sits next to cyan at equal size. Amber is always smaller, and reserved for the thing the player is about to press.

### Brick by Brick — `brick-by-brick`
- **Mark:** a running-bond grid of rounded rectangles — the brand's only pattern. Corner radius is one quarter of the brick width; clear space equals one brick.
- **Colours:** Brick Red `#C8462C` (key), Blueprint Teal `#3E7C8C`, Signal Sun `#F2B233`, Ink `#14110F`, Sand `#D9C7A3`, Paper `#FBF7F0`.
- **Type:** Baloo 2 600–800 display and HUD; Nunito 400–700 briefs and hints.
- **Cover:** the level board — filled bricks placed, dashed outlines legal.
- **Icon:** brick unit, minimum 24px for the mark, 120px for the horizontal lockup.
- **Non-negotiable:** Brick Red carries actions, Blueprint Teal carries numbers, Signal Sun carries unlocks. Never redraw the brick by eye.

### ConstructFi Collections — `constructfi-collections`
- **Mark:** a token, not a square. Navy-950 field, periwinkle edge, the house mark's three leaning planes inside with the overlaps intact.
- **Colours:** Periwinkle `#8298FC` (key), Rewarded `#00D19A`, On-chain `#1BB6FD`, Plate ground `#001A38` (ink), Panel `#00234C`.
- **Type:** Poppins 600 −2% display and plate name; Barlow 400 17/1.6 body; JetBrains Mono tabular for figures.
- **Cover:** the plate — cut-out product photograph on a white plate above, plate data below. No text ever sits on the photograph.
- **Icon:** minimum symbol height 24px; below that the wordmark is dropped.
- **Non-negotiable:** the plate carries a 22px cut corner, not a radius — no other surface in the app uses it. Green means money that moved, never a background or hover fill. No yield, APY, income or revenue-share language, in copy or in charts. **Collections is web-only inside ConstructFi — it has no store buttons.**

---

## 4. Homepage visual specification — `/`

Content max width is **1280px** with **32px** side padding, on every section, at every breakpoint above mobile. Nothing on the homepage is full-bleed except section backgrounds.

### Utility strip
34px tall, ground `#020D1C`, bottom hairline `rgba(255,255,255,.08)`. Left: tagline, 10.5px, .16em tracking, uppercase, `#00D19A`. Right: section list, 10.5px, .14em, `rgba(255,255,255,.42)`. Hidden below 900px.

### Header
- 70px tall, ground navy, nowrap.
- Emblem at **30px tall, width auto**, then an 11px gap, then the wordmark at 19px/700/−.02em in white with `Fi` in `#00D19A`.
- Nav items 13px/600, 9px 10px padding. Active item carries `inset 0 -2px 0 #00D19A`, not a colour change.
- Right cluster: wallet chip, then the primary CTA at 13.5px/600 on `#00D19A` with `#041428` text, hover `#0AE8AE`.
- **Below 900px:** drop the nav to a sheet, keep emblem + wordmark, keep one CTA. Do not shrink the emblem below 26px.
- **At 390px:** emblem + wordmark only, 24px emblem, menu button right. The wordmark never truncates — if it would, drop to the emblem alone.

### Hero
- Ground `#041428` with a blueprint grid: two 1px `linear-gradient` rules at `rgba(255,255,255,.05)`. CSS, not an image.
- Two columns above 1024px, copy left / device panel right. Single column below, panel **below** the copy.
- Copy column: 44px eyebrow rule + label, then `h1` at `clamp(44px, 5.4vw, 72px)`, line-height .98, tracking −.04em, max 15ch. Body 19px/1.6 at 72% white, max 52ch. CTA row 36px below, 12px gap, buttons 15px 24px.
- Device panel: navy card, "Good morning" at 19px/600, "Your ecosystem" eyebrow at 10px/.12em in `#00D19A`, then a 2-column tile grid at 8px gap with six product tiles (12px 11px padding, 1px `rgba(255,255,255,.1)` border). Foot rule with a 7×7 green square and the marketplace count.
- Padding-bottom on the copy column is 104px at desktop; drop to 48px below 1024px.
- **1440:** columns settle at the 1280 max — the hero gains outer margin, not width.
- **1280:** the design width. Everything as specified.
- **390:** single column, `h1` lands at 44px, panel full-width, CTAs stack full-width at 48px tall.

### Ecosystem section
White ground, 92px vertical padding, bottom hairline `#DEE6EE`. Two columns; left copy, right supporting block. `h2` at `clamp(32px, 3.4vw, 44px)`, −.032em. The pull paragraph carries a 2px `#00D19A` left rule with 16px padding.

### Featured products
Ground white, 92px padding, bottom hairline `#DEE6EE`.

Header row: eyebrow `03` in `#00A87C` + "Featured products" label, `h2` "Explore our Featured Products" at `clamp(30px, 3.2vw, 42px)`, and a right-aligned link to the marketplace.

Grid: `repeat(auto-fit, minmax(320px, 1fr))`, 20px gap, 44px below the header. Two columns at 1280 and 1440; one column below ~700px.

**Featured set, in order:** Build or Busted (lead), then Material Marketplace, ConstructOS, PactPilot in the right stack.

**Lead card** (left column, `align-self: start`):
- 36px accent bar in the product's key colour.
- 352px cover band, full card width, cover art cropped to fill.
- 28px body with a top hairline. Mark badge + category eyebrow row, `h3` at 26px/600/−.022em, tagline at 17px/500 in `#00A87C`, description at 15.5px/1.6 at 68% ink, max 52ch.
- Border `#D3DFE9`; hover border `#1BB6FD` plus a lift shadow.

**Row cards** (right column, 20px gap):
- `grid-template-columns: 200px minmax(0, 1fr)`.
- 168px cover slot, right and bottom hairlines, `overflow: hidden`.
- No accent bar. Same hover treatment.
- **At 390px:** the 200px cover column becomes a full-width 160px band above the text; the card becomes one column. Do not shrink the cover column below 200px — it stops reading as an app surface.

### Games strip
House Hackers, Cashflow Tycoon, Brick by Brick, in that order, each on its own ink ground.

### Footer
- Navy ground. Lockup uses `constructfi-lockup-dark.svg` at **32px tall**, not the header emblem-plus-text pair.
- Link groups in a 4-column grid above 1024px, 2 columns at tablet, accordion at 390px.
- 48px above the legal line, 32px below it.
- The COVI & ELUV disclaimer sits in the footer at 12px/1.6 and is not truncated at any width.

### Breakpoints
| Width | Behaviour |
| --- | --- |
| ≥1440 | Content pinned at 1280, outer margin grows |
| 1280 | Design width — match the reference exactly |
| 1024–1279 | Two-column layouts hold; hero panel narrows |
| 700–1023 | Hero and ecosystem go single-column; featured grid to one column |
| 390–699 | Full mobile: sheet nav, stacked CTAs, row cards become vertical |
| <390 | Do not design for it. Set a 360px floor and let it scroll. |

---

## 5. Asset manifest

See `brand-assets.ts` in this folder. It is types and paths only — no component code, no imports into app files.

---

## 6. Missing source assets

### A — Can be exported from the approved reference
These exist as approved compositions; someone needs to render and crop them.

- All 22 product covers (11 products × wide + row). The compositions are approved and visible in the reference; they need to be produced as real artwork at the sizes in §1, not screenshotted from the browser.
- Hero and section backgrounds: not assets. Rebuild in CSS.

### B — Exist, but need a cleaner source
- `constructfi-lockup-light.svg` — carries a full-bleed background rectangle. Re-export without it.
- `coins/covi.png`, `coins/eluv.png` — 512² rasters, ~200KB each, alpha unverified. Need an alpha audit, a 1024² master, and a flat SVG cut for inline use at 16–20px.
- `constructfi-emblem.svg` — good, but has no simplified small-size cut. The plane overlaps close up below 32px.

### C — Must be created by a brand designer
No production-quality source exists for any of these. Do not substitute, do not approximate from the code geometry, do not generate.

- **Eleven product marks.** The badges in the reference are coloured boxes standing in for logos. Every one of the eleven standards decks describes its mark in words and shows it as a rendering; none has shipped artwork.
- **Eleven product wordmarks.** Currently live type. Several brands specify tracking and width axes (Archivo width 118, Space Grotesk −4%) that need to be outlined and locked.
- **Eleven product app icons** at 1024², plus the platform size sets each brand specifies.
- **ConstructFi favicon set and app icon.**
- **COVI and ELUV vector marks.**
- **A simplified 16px cut of the ConstructFi emblem.**

Two brands additionally flag open items in their own standards: Material Marketplace and Supplier Marketplace both list yard photography as uncommissioned, and every image area in the Eluvial Academy system is a flat placeholder. Those are photography commissions, not exports.

---

## 7. Developer acceptance checklist

Header and footer
- [ ] Header shows `constructfi-emblem.svg` at 30px, not a raster, not a text-only wordmark.
- [ ] `Fi` renders in `#00D19A`; the rest of the wordmark is white.
- [ ] Active nav item shows the 2px green underline, not a colour swap.
- [ ] Footer uses `constructfi-lockup-dark.svg` at 32px.
- [ ] Light lockup, wherever used, paints no background box.

Hero
- [ ] Blueprint grid is CSS gradients over `#041428`, not an image file.
- [ ] Device panel is live DOM with six tiles, not a screenshot.
- [ ] `h1` reaches 72px at 1280 and 44px at 390, and never wraps past 15ch.

Featured products
- [ ] Order is Build or Busted, Material Marketplace, ConstructOS, PactPilot.
- [ ] Lead card carries a 36px accent bar in the product's own key colour; row cards carry none.
- [ ] Each cover is that product's own artwork on that product's own ink ground — no white cover grounds, no shared template.
- [ ] Each mark badge is the product's own mark, not a lettered monogram fallback.
- [ ] Row cards hold the 200px cover column down to 700px, then stack.
- [ ] Hover border is `#1BB6FD` on all four cards.

Products and brands
- [ ] All eleven products resolve at their reference slugs, including `builderbae` and `covi-buildsim`.
- [ ] No product has been normalised into the ConstructFi house palette.
- [ ] Collections shows no App Store or Google Play button.
- [ ] PactPilot surfaces carry the counsel qualifier.
- [ ] Supplier Marketplace uses no amber anywhere.

Assets and hygiene
- [ ] The seven stale `public/products/*.webp` files are deleted.
- [ ] Every asset in `brand-assets.ts` resolves — no 404s in the network panel.
- [ ] Covers ship as WebP with explicit width and height, no layout shift.
- [ ] Favicon set is present at 16 / 32 / 180 / 512.
- [ ] Store URLs point at real listings, not store search results.
