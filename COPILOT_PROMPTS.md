# Copilot prompts — ConstructFi redesign

Paste one prompt per task. Wait for the PR, review it, merge to `main`, then start the next. Running several at once produces stacked branches that conflict, and production stays unchanged until each is merged.

**Before you start:** commit `IMPLEMENTATION_PLAN.md` to the repo root and `design-preview.html` to `public/` on `main`. Copilot cannot see files outside the repo.

---

## Prompt 1 — Fonts

> Read `IMPLEMENTATION_PLAN.md` in the repo root. Implement **Step 1 — Fonts** only. Do not touch any other step.
>
> Constraints:
> - Change only `tailwind.config.ts`, `src/app/globals.css`, `src/app/layout.tsx`.
> - Load fonts via `next/font/google`, not a `<link>` tag. Expose as CSS variables so Tailwind's `fontFamily` can reference them.
> - Fraunces (variable, opsz 9..144, weights 500–700) applies to `h1` and `h2` only. `h3` must be Manrope. This is deliberate — do not extend Fraunces to `h3`.
> - Manrope (400–800) for h3, body, labels, eyebrows, data. It replaces every prior use of IBM Plex Mono, including uppercase letter-spaced eyebrows.
> - Remove every `IBM Plex Sans` and `IBM Plex Mono` reference in the repo.
> - Keep Space Grotesk, scoped to Build or Bust surfaces only.
>
> When done, list the files you changed and confirm no `IBM Plex` string remains anywhere in the repo.

---

## Prompt 2 — Nav restructure

> Read `IMPLEMENTATION_PLAN.md`. Implement **Step 2 — Nav restructure** only. Do not touch any other step.
>
> Constraints:
> - Change only `src/lib/site.ts` and `src/components/site-header.tsx`.
> - Replace `NAV_GROUPS` with exactly four top-level entries: Ecosystem (`/`), About (`/platform`), Marketplace (`/marketplace`, dropdown child: COVI & ELUV), Partner Solutions (`/partners`, dropdown child: Developers).
> - Every route currently reachable must stay reachable. Routes leaving the top level (`/whitepaper`, `/apps`, `/security`, `/resources`, `/getting-started`, `/contact`, `/dashboard`, `/admin`, `/funders`, `/app`) move into `FOOTER_LINKS` and in-page links. Add `/security`, `/developers`, `/funders`, `/admin`, `/dashboard` to the footer.
> - Dropdown parents display the active child's label when a child route is open. On `/developers`, the parent reads "Developers".
> - Menus close on navigate and on outside click.
> - Delete any horizontal fade-mask or scroll affordance on the nav container. Four items plus two dropdowns fit at desktop widths; the nav must never scroll.
> - Update `MOBILE_NAV` to mirror the new hierarchy as a flat drawer.
>
> `public/design-preview.html` is the visual reference. Match its structure and spacing. Copy in it is final — do not rewrite it.
>
> When done, confirm the nav fits without scrolling at 1280px and that no footer link 404s.

---

## Prompt 3 — Motion and focus baseline

> Read `IMPLEMENTATION_PLAN.md`. Implement **Step 3 — Motion and focus baseline** only. Do not touch any other step.
>
> Constraints:
> - Change only `src/app/globals.css` and `src/components/ui/card.tsx`.
> - Card surfaces: `transition: transform .15s ease, box-shadow .15s ease`, hover `translateY(-2px)` plus a soft shadow. Applies to marketplace, featured, category, and solution cards.
> - Add `:focus-visible { outline: 2px solid #00d19a; outline-offset: 2px }`.
> - Add `a { transition: color .15s ease }`.
> - Honour `prefers-reduced-motion: reduce` by collapsing transition and animation durations to near-zero.
> - Do not add any other animation, scroll-reveal, or page transition.
>
> When done, confirm cards lift on hover and keyboard tabbing shows a mint focus ring.

---

## Prompt 4 — About page

This is the largest task. If Copilot produces a partial or messy PR, split it: run 4a (items 1–3), then 4b (items 4–7).

> Read `IMPLEMENTATION_PLAN.md`. Implement **Step 4 — About page** only. Do not touch any other step.
>
> Constraints:
> - Remove all `A-01`…`A-09` section badges. Sections show plain label text only. The first section is titled "About Us".
> - The stat strip must render all six entries from `STATS` in `src/lib/site.ts`, including `8 · Verticals`. Import from `site.ts` — do not hardcode or paraphrase these values.
> - Shared platform services: the six-service grid already exists as the `SERVICES` array in `src/app/platform/page.tsx`. Reuse it. Position after the stat strip, before "how we operate". Replace the `01`–`06` numerals with inline SVG pictograms in colored badges: shield, spark, wallet-card, bar-chart, plug, grid.
> - Five architecture layers: replace "Layer 01"–"Layer 05" numerals with pictograms — grid, cube, overlapping circles, coin, cluster. Colors cycle the category palette listed in the plan.
> - "Who we serve": bordered tiles, each with a colored dot cycling the category palette. Not uniform outline chips.
> - "Five commitments": connected vertical timeline — circular numbered nodes on a 1px through-line. Not divided rows.
> - "How the ecosystem connects": filled circular step numbers, an icon badge per step (target, tag, box, cap, check), and connecting chevrons between cards.
> - Lift the SVG `<path>` data for all pictograms from `public/design-preview.html` — search its JS for `PRODUCT_ICON` and the layer icon definitions. Do not invent new shapes.
>
> `public/design-preview.html` is the visual reference. Match its structure and spacing. Copy is final — do not rewrite it.
>
> When done, confirm no `A-0` string appears on the page and every former numeral is a glyph.

---

## Prompt 5 — Marketplace "Own" tab

> Read `IMPLEMENTATION_PLAN.md`. Implement **Step 5 — Marketplace "Own" tab** only. Do not touch any other step.
>
> Constraints:
> - Change only `src/app/marketplace/page.tsx` and `src/lib/products.ts`.
> - Add an **Own** tab immediately after **Play** in the tab row. Do not reorder the other tabs.
> - The Own panel holds Digital Collectibles (NFTs). The collectibles cover carries an "NFT" label.
> - Copy states all NFTs list on OpenSea.
>
> `public/design-preview.html` is the visual reference — see its Marketplace page. Copy is final.
>
> When done, confirm the tab row reads "… Play · Own" and the Own panel renders the collectibles card.

---

## Prompt 6 — Partner Solutions: funder frameworks

> Read `IMPLEMENTATION_PLAN.md`. Implement **Step 6 — Partner Solutions: funder frameworks** only. Do not touch any other step.
>
> Constraints:
> - Change only `src/app/partners/page.tsx`.
> - Add a "Mapped to funder frameworks" subsection under the funding-eligibility section.
> - The lead paragraph and all four table rows already exist verbatim in `WP_CHAPTERS[8].blocks` (chapter 9) of `src/lib/whitepaper.ts`. **Import and render these values from `whitepaper.ts`. Do not hardcode, retype, or paraphrase them.**
> - Two-column table with four rows: WIOA (workforce), HUD (housing), CRA (banking), CFPB alignment — each with its mapping sentence.
>
> When done, confirm the rendered copy matches `whitepaper.ts` character for character.

---

## Prompt 7 — COVI & ELUV page

> Read `IMPLEMENTATION_PLAN.md`. Implement **Step 7 — COVI & ELUV page** only. Do not touch any other step.
>
> Constraints:
> - Add a "Wallets" section headed "Non-custodial by default": MetaMask and WalletConnect on Base; ConstructFi never holds keys or funds.
> - Below it, the five-step onboarding list — reuse the `STEPS` array from `src/app/getting-started/page.tsx`. Import it; do not retype. Order: connect wallet → KYC/allowlist → Build or Bust → Dashboard → Marketplace.
> - Note that contract addresses publish only after audit.
> - Add a **Wallet** button in this section that shares state with the header wallet control.
> - Add a COVI chain detail line under the COVI description reading `ERC-20 · Built on Base, settled to Ethereum · fixed cap 10,000,000,000`. **Assemble this from the `COVI` object in `src/lib/site.ts` (`COVI.standard`, `COVI.chain`, `COVI.supply`). Do not hardcode the string.**
>
> When done, confirm the chain line derives from `site.ts` and renders correctly.

---

## Prompt 8 — Header wallet control

> Read `IMPLEMENTATION_PLAN.md`. Implement **Step 8 — Header wallet control** only. Do not touch any other step.
>
> Constraints:
> - Change only `src/components/site-header.tsx`. Wire to the existing `src/components/wallet-connect.tsx` (wagmi/viem/Reown) — do not write a new wallet implementation or a mock.
> - Place the control to the left of "Build With ConstructFi". The button label is "Wallet", not "Connect".
> - Disconnected state: opens a dropdown with MetaMask / Coinbase Wallet / WalletConnect and a "Non-custodial · Base network" note.
> - Connected state: truncated address with a green status dot, plus a Disconnect action.
> - `public/design-preview.html` shows a fake address purely for layout, because wallet libraries do not run in the design sandbox. Take placement, copy, and dropdown layout from the design; take all behaviour from the existing `wallet-connect.tsx`.
>
> When done, confirm a real wallet connects and the header shows its actual address.

---

## Prompt 9 — Whitepaper page audit

> Read `IMPLEMENTATION_PLAN.md`. Implement **Step 9 — Whitepaper page** only. Do not touch any other step.
>
> This is largely an audit — the page likely already exists and is correct. Report what you find before changing anything.
>
> Check and fix only if missing:
> - `src/app/whitepaper/page.tsx` hero has both a "Download PDF" action (browser print) and a "View source on GitHub" action linking to `src/lib/whitepaper.ts`.
> - All 15 chapters, tables, and callouts render from `src/lib/whitepaper.ts`.
> - `src/app/developers/page.tsx` links to `/whitepaper` via a compact teaser card and a "Read the whitepaper" button. It must not embed chapter content inline — remove any inline chapter content if present.
>
> Report what was already correct and what you changed.

---

## Prompt 10 — Product cover art

> Read `IMPLEMENTATION_PLAN.md`. Implement **Step 10 — Product cover art** only. Do not touch any other step.
>
> Constraints:
> - Change only `src/lib/products.ts` and files in `public/products/`.
> - Three products have real photography (Build or Busted, House Hackers / Covi BuildSim, Supplier Marketplace). Apply a scrim overlay so titles stay legible.
> - Seven have no photography (ConstructOS, PactPilot, Covington Sales Academy, Eluvial Academy, Material Marketplace, Cashflow Tycoon, Brick by Brick). Port the line-art and filled-illustration covers from `public/design-preview.html` as interim art. Lift the SVG directly — do not invent new artwork.
> - Each product also has a distinct pictogram (hub, check, contract, megaphone, capArrow, cube, bag, house, skyline, brick) for app-icon badges. Reuse these shapes.
> - Use existing assets in `public/products/`, `public/brand/`, and `public/coins/` rather than any base64 copies embedded in the design preview.
>
> When done, confirm every product has cover art and none falls back to a generic placeholder.

---

## If a PR comes back wrong

Reply in the PR rather than opening a new task. Three corrections that come up most:

- **It redesigned something you didn't ask for.** *"Revert the changes to [file/section]. That is outside Step N. Only the files and behaviours listed in that step should change."*
- **It retyped copy instead of importing it.** *"You hardcoded [string]. Import it from [lib file] instead — that file is the single source of truth and the copy must not drift."*
- **It extended Fraunces to h3 or body.** *"Fraunces is h1 and h2 only. Revert h3 and body to Manrope."*

## Order and merge discipline

Steps 1–3 are prerequisites — merge all three before starting 4. Steps 4–10 are independent of each other and can be run in any order, but still merge each before starting the next so Copilot branches from current `main`.

Nothing appears on `constructfi.co` until a PR is merged to `main`. Branch previews get their own URL and do not affect production.
