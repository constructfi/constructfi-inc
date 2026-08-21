# Handoff: ConstructFi Ecosystem Site — Design Update

## Overview
This bundle documents design changes made against the `constructfi/constructfi-inc` repo (Next.js app) in a design tool, so they can be implemented as real code in that repo. The changes reposition the site as "ecosystem-first" (new nav, merged About/Platform page, restructured Partner Solutions and COVI/ELUV copy) and add a header wallet-connect affordance, plus port over content that already exists in the repo's source-of-truth libs but was missing from a couple of pages.

## About the design files
`ConstructFi_Site_v2_design_reference.dc.html` and the `_standalone.html` copy are **HTML design references** — built in a design tool to prototype layout, copy, and visual language. They are NOT React components and must not be copied into the Next.js app as-is. Recreate each screen below as real `.tsx` using the repo's existing components (`PageHero`, `Section`, `SectionHeading`, `Card`, `Button`, `Badge`, etc. from `src/components/ui/*`) and Tailwind classes/tokens already defined in `tailwind.config.ts` / `src/app/globals.css`.

## Fidelity
**High-fidelity.** Copy is final (do not rewrite), section order and structure are final, colors/type are meant to match the repo's existing design tokens (teal/mint/navy/gold) — pull exact token values from `tailwind.config.ts` rather than the hex values baked into the HTML reference, since the reference predates some token names.

## What changed, mapped to repo files

### 1. Global nav order + header wallet connect
- **Target**: `src/components/site-header.tsx`, `src/lib/site.ts` (`NAV_LINKS`/`NAV_GROUPS`)
- Nav order becomes: Ecosystem (home) → About → Marketplace → Partner Solutions → Developers → COVI & ELUV.
- Add a **Connect Wallet** control to the header, to the left of "Build With ConstructFi": disconnected state shows a "Wallet" button; clicking opens a dropdown with MetaMask / Coinbase Wallet / WalletConnect options and a "Non-custodial · Base network" note; connected state shows a truncated address (e.g. `0x71C7...9e3F`) with a green status dot and a Disconnect action.
- **This should wire to the repo's real `src/components/wallet-connect.tsx` (wagmi/viem/Reown)** rather than a mock — the design reference uses fake addresses purely for layout since wallet libraries don't run in the design sandbox. Use the design only for the button's placement, copy, and dropdown layout.
- Nav must not overflow at desktop widths without a visible scroll affordance — if it does, apply a horizontal fade-mask (`mask-image: linear-gradient(90deg, #000 calc(100% - 24px), transparent 100%)`) on the scrollable nav container, matching the reference.

### 2. About page — add missing "Shared platform services" section
- **Target**: wherever the merged About/Platform content lives now (repo currently splits this as `src/app/platform/page.tsx`; the design merges it into one About page — developer's call whether to keep them merged or split per the repo's current routing).
- The six-service grid (Identity & Security, AI Intelligence Layer, Wallet & Rewards, Data & Analytics, Integration Hub, Marketplace Infrastructure) already exists in `src/app/platform/page.tsx`'s `SERVICES` array — this section was simply missing from the design's About page and has been added back in the reference, positioned as section "A-03" (right after the "operating base" stats, before "how we operate").
- The stat strip should show all 6 entries from `STATS` in `src/lib/site.ts`, including the "8 · Verticals" stat, which the design page had dropped.

### 3. Partner Solutions — funder-frameworks table
- **Target**: `src/app/partners/page.tsx` (or wherever Partner Solutions content lives)
- Add a subsection titled "Mapped to funder frameworks" under the funding-eligibility section, with this exact paragraph (already correct in `src/lib/whitepaper.ts` chapter 9 — reuse verbatim, don't re-derive):
  > "ConstructFi produces the kind of measurable, auditable outcomes funders require: completion rates, milestone progression, and impact reporting anchored to on-chain ELUV credentials that cannot be fabricated or double-counted."
- Followed by a 2-column table: WIOA (workforce) / HUD (housing) / CRA (banking) / CFPB alignment, each with its mapping sentence — copy these rows straight from `WP_CHAPTERS[8].blocks` (chapter 9) in `src/lib/whitepaper.ts`.

### 4. Whitepaper — own page, not embedded
- **Target**: `src/app/whitepaper/page.tsx` (already exists and is presumably correct — the design reference rebuilt it from `src/lib/whitepaper.ts` to confirm parity: all 15 chapters, tables, and callouts render, plus "Download PDF" (browser print) and "View source on GitHub" (links to `src/lib/whitepaper.ts`) actions in the hero). Confirm the live page has both of those actions; add if missing.
- Developers page should link to `/whitepaper` via a compact teaser card + "Read the whitepaper" button, not embed chapter content inline.

### 5. COVI & ELUV page — Wallets section + chain detail
- **Target**: wherever COVI/ELUV participation copy lives (repo's `funders`/`developers`/a dedicated participation page — reconcile against whichever page currently owns this content)
- Add a "Wallets" section: "Non-custodial by default" — MetaMask/WalletConnect on Base, ConstructFi never holds keys or funds — followed by the 5-step onboarding list (Connect wallet → KYC/allowlist → Build or Bust → Dashboard → Marketplace, copy from `getting-started/page.tsx`'s `STEPS`), and a note that contract addresses publish only after audit.
- Add a "Connect Wallet" button inside this section, wired to the same header wallet-connect control/state.
- Add COVI chain detail line under the COVI description: "ERC-20 · Built on Base, settled to Ethereum · fixed cap 10,000,000,000" (from `COVI` object in `src/lib/site.ts`).

### 6. Product marketplace cover art
- **Target**: `src/lib/products.ts` art/imagery, or wherever product cover images are generated/stored
- The design reference includes purpose-built line-art + filled-illustration covers for the 7 products that don't have real photography (ConstructOS, PactPilot, Covington Sales Academy, Eluvial Academy, Material Marketplace, Cashflow Tycoon, Brick by Brick), and scrim-overlay treatments for the 3 that do (Build or Busted, House Hackers/Covi BuildSim, Supplier Marketplace). Use these as art direction if/when real product photography isn't available; replace with real assets as they become available.
- Each product's icon "PRODUCT_ICON" glyph (in the reference's JS) gives a distinct pictogram per product (hub/check/contract/megaphone/capArrow/cube/bag/house/skyline/brick) for app-icon-style badges — reuse these shapes for any real app/store icon work.

### 7. Marketplace — "Own" tab + NFT collectibles
- **Target**: `src/app/marketplace/page.tsx`, `src/lib/products.ts`
- The marketplace tab set gains an **Own** tab (sitting next to **Play**) holding Digital Collectibles (NFTs). The collectibles cover carries an "NFT" label. Copy states all NFTs list on OpenSea.

### 8. Typography update (supersedes the type line below)
- **Target**: `tailwind.config.ts` font families, `src/app/globals.css`
- Headline family is now **Fraunces** (serif, high-contrast) applied to `h1`/`h2` **only**. `h3` and all body/label/eyebrow text set in **Manrope**.
- Rationale: Fraunces at h3 sizes read fussy; restricting it to h1/h2 keeps the editorial voice while card titles stay clean.

### 9. Nav grouping + overflow dropdowns
- **Target**: `src/components/site-header.tsx`, `src/lib/site.ts`
- Supersedes the fade-mask instruction in item 1: nav no longer scrolls. Top level is Ecosystem → About → Marketplace → Partner Solutions, with grouped dropdowns — **COVI & ELUV** under Marketplace, **Developers** under Partner Solutions. The parent label reflects the active child when a child page is open.

### 10. Icons replacing numeric labels; About page cleanup
- **Target**: `src/app/platform/page.tsx`, About page sections, `src/lib/site.ts`
- All `A-01`…`A-09` section badges are **removed** from the About page — sections show their plain label text only (first section is "About Us").
- Numeric markers replaced with inline SVG pictograms in colored badges throughout: the five architecture layers (grid / cube / overlapping circles / coin / cluster), Shared platform services (shield / spark / wallet-card / bar-chart / plug / grid), and the ecosystem-flow steps (target / tag / box / cap / check) which now also carry filled step-number circles and connecting chevrons.
- "Who we serve" is now bordered tiles with a colored dot per audience (cycling the category palette), not uniform outline chips.
- "Five commitments" is a connected vertical timeline — circular numbered nodes on a through-line — not divided rows.

### 11. Motion + accessibility pass
- Cards use a 150ms transition with a subtle lift on hover (`translateY(-2px)` + shadow). Marketplace/featured/category/solution cards all share this treatment.
- Product photography carries `data-om-raster`-equivalent intent (raster, not shape) and should ship with real `alt` text in the app.

## Design tokens (pull exact values from `tailwind.config.ts`, these are what the reference approximates)
- Ink/navy: `#041428` (dark surfaces), `#00336b` (headline text on light)
- Teal: `#00a87c` (primary CTA/accent on light backgrounds)
- Mint: `#00d19a` (primary CTA/accent on dark backgrounds)
- Wash: `#f2f7fb` (light section background), `#dee6ee` (hairline borders)
- Gold/warning: `#d4a95a` / `#e4b95b` (badges, "preview" and "draft" states)
- Category colors: teal `#019599`, mint `#00d19a`, sky `#1bb6fd`, indigo `#4a67ce`, periwinkle `#8298fc`, gold `#e4b95b`
- Type: **Fraunces** (h1/h2 only), **Manrope** (h3, body, labels, eyebrows), Space Grotesk (Build or Busted product-specific type only).

## Assets
- Product photography (Build or Busted, House Hackers, Supplier Marketplace) and brand logo SVGs were sourced from `public/` in the repo during this project — reuse those existing files rather than the base64 copies embedded in the HTML reference.
- COVI/ELUV coin renders are embedded as base64 PNGs in the reference for preview only — use the repo's actual coin art assets in production.

## Files in this bundle
- `ConstructFi_Site_v2_design_reference.dc.html` — the live design tool source (all pages/screens, in one file, screens toggled via internal state)
- `ConstructFi_Site_v2_standalone.html` — a self-contained copy of the same, viewable by opening directly in a browser
