# Implementation plan — ConstructFi ecosystem redesign

Work top to bottom. Each step names the files to touch, the change, and how to tell it's done. Steps 1–3 are prerequisites; 4 onward are independent and can be parallelised or dropped without breaking anything above them.

Design reference: `ConstructFi_Site_v2_standalone.html` (open in a browser). Copy in the reference is final — do not rewrite it.

Preview URL once pushed: `https://constructfi.co/design-preview.html`

---

## Step 0 — Ship the design preview (30 min, no code)

The reference HTML is 857KB, over GitHub's web-editor cap. Push it with the CLI.

```
git clone https://github.com/constructfi/constructfi-inc.git
cd constructfi-inc
cp /path/to/design-preview.html public/design-preview.html
git add public/design-preview.html
git commit -m "Add design preview"
git push origin main
```

Files in `public/` are served as-is, so no build changes are needed. Vercel deploys on push.

**Done when:** `constructfi.co/design-preview.html` loads and the nav reads Ecosystem / About / Marketplace / Partner Solutions.

---

## Step 1 — Fonts

**Files:** `tailwind.config.ts`, `src/app/globals.css`, `src/app/layout.tsx`

Retire IBM Plex Sans and IBM Plex Mono. Add two families:

- **Fraunces** (variable, `opsz 9..144`, weights 500–700) — `h1` and `h2` only.
- **Manrope** (weights 400–800) — `h3`, body, labels, eyebrows, data. This replaces every prior use of IBM Plex Mono, including uppercase letter-spaced eyebrows.

Keep Space Grotesk, scoped to Build or Bust product surfaces only.

Load via `next/font/google` in `layout.tsx` rather than a `<link>`, and expose as CSS variables so Tailwind's `fontFamily` can reference them.

Do **not** put Fraunces on `h3`. It was tried and reads fussy at card-title sizes; the split is deliberate.

**Done when:** page headlines are serif, every card title and label is sans, and no `IBM Plex` string remains in the repo.

---

## Step 2 — Nav restructure

**Files:** `src/lib/site.ts`, `src/components/site-header.tsx`

Replace `NAV_GROUPS` with four top-level entries:

| Label | Href | Dropdown children |
| --- | --- | --- |
| Ecosystem | `/` | — |
| About | `/platform` | — |
| Marketplace | `/marketplace` | COVI & ELUV |
| Partner Solutions | `/partners` | Developers |

Keep every currently-reachable route reachable — the routes leaving the top level (`/whitepaper`, `/apps`, `/security`, `/resources`, `/getting-started`, `/contact`, `/dashboard`, `/admin`, `/funders`, `/app`) move into the footer and in-page links, not out of the site. `FOOTER_LINKS` already covers most; add `/security`, `/developers`, `/funders`, `/admin`, `/dashboard`.

Dropdown parents show the active child's label when a child route is open (on `/developers`, the parent reads "Developers"). Menu closes on navigate and on outside click.

Delete the horizontal fade-mask / scroll affordance if present — four items plus two dropdowns fit at desktop widths, so the nav should never scroll.

Update `MOBILE_NAV` to mirror the new hierarchy as a flat drawer.

**Done when:** nav fits without scrolling at 1280px, both dropdowns open and close, and no route 404s from the footer.

---

## Step 3 — Motion and focus baseline

**Files:** `src/app/globals.css`, `src/components/ui/card.tsx`

- Card surfaces: `transition: transform .15s ease, box-shadow .15s ease`, hover `translateY(-2px)` plus a soft shadow. Applies to marketplace, featured, category, and solution cards.
- `:focus-visible { outline: 2px solid #00d19a; outline-offset: 2px }`
- Honour `prefers-reduced-motion: reduce` by collapsing transition and animation durations.
- `a { transition: color .15s ease }`

**Done when:** cards lift on hover, keyboard tabbing shows a mint ring, and reduced-motion users get instant state changes.

---

## Step 4 — About page

**Files:** `src/app/platform/page.tsx` (or wherever merged About/Platform lands)

The design merges Platform into a single About page. Keeping them as separate routes is the developer's call — the content changes below apply either way.

1. **Remove all `A-01`…`A-09` section badges.** Sections show plain label text only. The first section is titled "About Us".
2. **Stat strip** shows all six entries from `STATS` in `src/lib/site.ts`, including `8 · Verticals`, which the old design dropped.
3. **Shared platform services** — the six-service grid already exists as the `SERVICES` array in `src/app/platform/page.tsx`. Position it after the stat strip, before "how we operate". Replace the `01`–`06` numerals with inline SVG pictograms in colored badges: shield, spark, wallet-card, bar-chart, plug, grid.
4. **Five architecture layers** — replace "Layer 01"–"Layer 05" numerals with pictograms: grid, cube, overlapping circles, coin, cluster. Colors cycle the category palette.
5. **Who we serve** — bordered tiles, each with a colored dot cycling the category palette. Not uniform outline chips.
6. **Five commitments** — connected vertical timeline: circular numbered nodes on a 1px through-line. Not divided rows.
7. **How the ecosystem connects** — filled circular step numbers, an icon badge per step (target, tag, box, cap, check), and connecting chevrons between cards.

Pictogram shapes are in the reference's `PRODUCT_ICON` / layer icon JS — lift the `<path>` data directly.

**Done when:** no `A-0` string appears on the page and every former numeral is a glyph.

---

## Step 5 — Marketplace "Own" tab

**Files:** `src/app/marketplace/page.tsx`, `src/lib/products.ts`

Add an **Own** tab immediately after **Play**, holding Digital Collectibles (NFTs). The collectibles cover carries an "NFT" label. Copy states all NFTs list on OpenSea.

**Done when:** the tab row reads … Play · Own, and the Own panel renders the collectibles card.

---

## Step 6 — Partner Solutions: funder frameworks

**Files:** `src/app/partners/page.tsx`, `src/lib/whitepaper.ts`

Add a "Mapped to funder frameworks" subsection under the funding-eligibility section. Lead paragraph and all four table rows already exist verbatim in `WP_CHAPTERS[8].blocks` (chapter 9) of `src/lib/whitepaper.ts` — import and render, don't retype.

Two-column table: WIOA (workforce) / HUD (housing) / CRA (banking) / CFPB alignment, each with its mapping sentence.

**Done when:** the four rows render and the copy matches `whitepaper.ts` character for character.

---

## Step 7 — COVI & ELUV page

**Files:** wherever COVI/ELUV participation copy lives; `src/lib/site.ts`, `src/app/getting-started/page.tsx`

1. **Wallets section** — "Non-custodial by default". MetaMask and WalletConnect on Base; ConstructFi never holds keys or funds.
2. Below it, the five-step onboarding list — copy from `STEPS` in `getting-started/page.tsx`: connect wallet → KYC/allowlist → Build or Bust → Dashboard → Marketplace.
3. Note that contract addresses publish only after audit.
4. A **Wallet** button in this section, sharing state with the header control.
5. **COVI chain detail** line under the COVI description: `ERC-20 · Built on Base, settled to Ethereum · fixed cap 10,000,000,000` — assemble from the `COVI` object in `site.ts`, don't hardcode.

**Done when:** the section renders and the chain line matches `COVI.standard` / `COVI.chain` / `COVI.supply`.

---

## Step 8 — Header wallet control

**Files:** `src/components/site-header.tsx`, `src/components/wallet-connect.tsx`

Place a **Wallet** button left of "Build With ConstructFi". Label is "Wallet", not "Connect".

- Disconnected: opens a dropdown with MetaMask / Coinbase Wallet / WalletConnect and a "Non-custodial · Base network" note.
- Connected: truncated address with a green status dot, plus Disconnect.

Wire to the repo's real `wallet-connect.tsx` (wagmi/viem/Reown). The reference shows a fake address purely for layout — wallet libraries don't run in the design sandbox. Take placement, copy, and dropdown layout from the design; take behaviour from the existing component.

**Done when:** a real wallet connects and the header shows its actual address.

---

## Step 9 — Whitepaper page

**Files:** `src/app/whitepaper/page.tsx`, `src/app/developers/page.tsx`

The page exists and is likely already correct. Confirm the hero has both actions:

- **Download PDF** (browser print)
- **View source on GitHub** → `src/lib/whitepaper.ts`

Developers page links to `/whitepaper` via a compact teaser card and a "Read the whitepaper" button. It should not embed chapter content inline.

**Done when:** all 15 chapters, tables, and callouts render, and both hero actions work.

---

## Step 10 — Product cover art

**Files:** `src/lib/products.ts`, `public/products/`

Three products have real photography (Build or Busted, House Hackers / Covi BuildSim, Supplier Marketplace) — these get a scrim overlay so titles stay legible.

Seven do not (ConstructOS, PactPilot, Covington Sales Academy, Eluvial Academy, Material Marketplace, Cashflow Tycoon, Brick by Brick). The reference includes purpose-built line-art and filled-illustration covers for these. Treat them as art direction and replace with real photography as it becomes available — this is the single biggest thing keeping the site looking like a prototype.

Each product also has a distinct pictogram (hub, check, contract, megaphone, capArrow, cube, bag, house, skyline, brick) for app-icon badges. Reuse these shapes for any app-store icon work.

**Done when:** every cover has art and no product falls back to a generic placeholder.

---

## Design tokens

Pull exact values from `tailwind.config.ts` — these are what the reference approximates.

- Ink/navy `#041428` (dark surfaces), `#00336b` (headline text on light)
- Teal `#00a87c` (primary accent on light), Mint `#00d19a` (primary accent on dark)
- Wash `#f2f7fb` (light section bg), `#dee6ee` (hairline borders)
- Gold `#d4a95a` / `#e4b95b` (badges, preview and draft states)
- Category palette: teal `#019599`, mint `#00d19a`, sky `#1bb6fd`, indigo `#4a67ce`, periwinkle `#8298fc`, gold `#e4b95b`

## Assets

Product photography and brand logo SVGs already live in `public/` — use those, not the base64 copies in the reference. Coin renders are embedded in the reference for preview only; `public/coins/` has the real art. The nine extracted bitmaps in `assets/` here are provided for anything not already in the repo.

## Still open

- Real product photography for the seven illustrated covers (step 10).
- Alt text on all imagery — not yet audited.
- Contrast audit on teal-on-white links and muted grays.
- Legal, Admin, and parts of the whitepaper are intentionally draft; needs a content pass before public launch.
