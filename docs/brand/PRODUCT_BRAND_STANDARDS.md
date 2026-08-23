# ConstructFi Product Brand Standards

> Version 1.0 · August 2026
> Scope: documentation and typed configuration only. This document does not alter live routes, page copy, wallet/Web3 behavior, environment variables, infrastructure, token mechanics, or production deployments.

---

## Table of Contents

1. [Branded-House Architecture](#1-branded-house-architecture)
2. [Master Endorsement](#2-master-endorsement)
3. [Shared Standards](#3-shared-standards)
   - 3.1 Typography
   - 3.2 UI & Accessibility
   - 3.3 Card Standards
   - 3.4 Availability-Status Labels
   - 3.5 Naming Conventions
   - 3.6 App Store Relationship
4. [Product-Card Template](#4-product-card-template)
5. [Product-Detail-Page Template](#5-product-detail-page-template)
6. [Voice & Tone Rules](#6-voice--tone-rules)
7. [Asset Requirements](#7-asset-requirements)
8. [COVI / ELUV Public-Language Guardrails](#8-covi--eluv-public-language-guardrails)
9. [Product Identity Matrix](#9-product-identity-matrix)
10. [Asset Inventory & Missing-Assets Checklist](#10-asset-inventory--missing-assets-checklist)

---

## 1. Branded-House Architecture

ConstructFi operates as a **branded house**: one master brand owns the umbrella, and every product beneath it carries explicit master-brand attribution. This is the opposite of a house-of-brands model in which sub-brands stand alone.

### Implications

| Principle | Detail |
|---|---|
| **Single trust equity** | Credibility built by one product reflects on all. |
| **Consistent visual DNA** | All products share the same base type scale, spacing tokens, and accessibility rules (§3). |
| **Explicit attribution** | Every product surface — card, detail page, App Store listing — must display the master endorsement (§2). |
| **No rogue sub-brands** | Products may have distinct accent colors and motifs but may not adopt a visual language that severs the connection to ConstructFi. |
| **Ecosystem narrative** | Marketing copy always situates a product inside the ConstructFi ecosystem ("COVI earnable in-app," "ELUV milestone available," "Part of the ConstructFi ecosystem"). |

---

## 2. Master Endorsement

Every public-facing product surface **must** carry the following endorsement line verbatim:

> **Part of the ConstructFi ecosystem**

### Placement rules

- **Cards**: bottom-left micro-label, 10 px / Manrope Regular, opacity 60 %.
- **Detail pages**: below product name, above tagline, same styling.
- **App Store listings**: last sentence of the short description.
- **In-app splash / onboarding**: first screen, sub-headline.

### Prohibited substitutions

"Powered by ConstructFi" and "A ConstructFi product" are acceptable alternatives in constrained surfaces (notification copy, push titles). All other reformulations require brand review.

---

## 3. Shared Standards

### 3.1 Typography

All products use the three-font stack loaded via `@fontsource` packages (see `src/app/layout.tsx`):

| Role | Family | Weight | CSS Variable |
|---|---|---|---|
| Display / editorial headings | Fraunces | 400 – 700 | `--font-fraunces` |
| Body / UI prose | Manrope | 400, 500, 600, 700 | `--font-manrope` |
| Mono / code / data | Space Grotesk | 400, 500 | `--font-space-grotesk` |

- **Minimum body size**: 16 px / 1 rem.
- **Line height**: 1.5 for body, 1.2 for display.
- Product-specific accent colors may not override the type stack.

### 3.2 UI & Accessibility

| Requirement | Standard |
|---|---|
| Color contrast | WCAG 2.1 AA minimum (4.5 : 1 normal text, 3 : 1 large text) |
| Focus rings | Visible on all interactive elements; do not suppress `outline` without a custom visible replacement |
| Alt text | Required on all product images; images marked as "illustrative preview" must say so in alt |
| Status announcements | Use `aria-live="polite"` for async state changes (wallet, status chips) |
| Touch targets | Minimum 44 × 44 px |
| Motion | Respect `prefers-reduced-motion`; no auto-playing animations above decorative level |

### 3.3 Card Standards

Product cards follow a shared anatomy:

```
┌─────────────────────────────────────┐
│  [Product image — illustrative]     │  aspect-ratio: 2/3 · object-fit: cover
│  [STATUS CHIP]        [CATEGORY]    │  overlaid at top
├─────────────────────────────────────┤
│  [Product Name]  — Fraunces 600     │
│  [Tagline]       — Manrope 400 14px │
│  [Tags row]                         │
│  [Short description — 2 lines max]  │
│  [PRIMARY CTA BUTTON]               │
│  Part of the ConstructFi ecosystem  │  micro-label
└─────────────────────────────────────┘
```

- Images are labeled **"Illustrative preview"** in alt text and visible caption where space allows.
- The crop `imageFocus` field in `products.ts` must not frame the card around money imagery.

### 3.4 Availability-Status Labels

Use only the following labels (sourced from `STATUS` in `src/lib/products.ts`):

| Status key | Rendered label | Chip class |
|---|---|---|
| `live` | At launch · Sept 9, 2026 | `chip live` |
| `coming-soon` | Coming soon | `chip soon` |
| `phase-2` | Phase 2 | `chip demo` |

Do not use "Live," "Available," "Download now," or any language implying the product ships before September 9, 2026.

### 3.5 Naming Conventions

- Use the product name exactly as defined in the `name` field of `PRODUCTS` in `src/lib/products.ts`.
- Abbreviations are only permitted in constrained surfaces (notification titles, breadcrumbs). Introduce the full name first.
- "COVI" and "ELUV" are always uppercase.
- "ConstructFi" is one word, capital C, capital F, no space.
- "RevenueOS" is one word, capital R, capital OS.
- "BuilderBae" is one word, capital B × 2.
- "PactPilot" is one word, capital P × 2.
- "CashflowCity Tycoon" rendered as "Cashflow City Tycoon" (two words, then Tycoon).

### 3.6 App Store Relationship

ConstructFi positions its product suite as an **app store for construction**:

- `/marketplace` is the canonical app-store surface.
- Products do not have independent App Store (Apple / Google) listings unless separately approved. Current default pathway is in-browser web app.
- App Store listing copy must end with "Part of the ConstructFi ecosystem."
- Screenshots submitted to stores must include the "Illustrative preview" disclaimer.
- COVI/ELUV references in App Store copy must conform to the guardrails in §8.

---

## 4. Product-Card Template

Use this template when writing copy for a product card:

```
Name:            [Product Name]
Tagline:         [≤ 10 words — what it does, not what it earns]
Status chip:     [live | coming-soon | phase-2]
Tags:            [2–4 tags; no yield/return/investment language]
Short desc:      [1–2 sentences; ≤ 280 characters; plain language]
Primary CTA:     [See below — preferred CTA per product in §9]
Endorsement:     Part of the ConstructFi ecosystem
```

**CTA guidance**: match the availability-status label.

| Status | Default CTA text |
|---|---|
| `live` | Learn more |
| `coming-soon` | Join waitlist |
| `phase-2` | Explore Phase 2 |

---

## 5. Product-Detail-Page Template

```
[Hero image — illustrative preview]

[Product Name]                  ← Fraunces 700
Part of the ConstructFi ecosystem  ← endorsement line
[Tagline]                       ← Manrope 400

[STATUS CHIP] [CATEGORY CHIP]

[Short description — 1 paragraph]

── Features ──────────────────────────────────────────
• [Feature 1]
• [Feature 2]
  …

── COVI / ELUV ────────────────────────────────────────
[coviEluvNote — verbatim from products.ts; no modifications
 that would introduce investment language]

── Related products ───────────────────────────────────
[relatedProducts() — up to 3 cards]

[PRIMARY CTA BUTTON]

[Footer: Part of the ConstructFi ecosystem]
```

---

## 6. Voice & Tone Rules

### Master brand voice (ConstructFi)

- **Honest and operational**: say what the product does, not what it earns you.
- **Specific over vague**: cite real numbers when they exist (e.g., "$7M annual operations," "~12 questions").
- **Plain language first**: if a contractor on a job site can't parse a sentence in five seconds, rewrite it.
- **No hype**: superlatives ("the most powerful," "revolutionary") require evidence or removal.

### By product persona

| Persona | Tone | Avoid |
|---|---|---|
| Operational / executive | Crisp, professional, outcome-focused | Jargon, buzzwords |
| Direct / analytical | Confident, verdict-driven, economical | Hedging, qualifiers |
| Precise / trusted | Methodical, document-oriented, calm | Ambiguity, casual contractions |
| Helpful / value-led | Warm, practical, inventory-oriented | Condescension, overselling |
| Reliable / commercial | Commercial, B2B, logistics-aware | Hype, consumer-facing language |
| Practical / motivating | Coach-like, sequential, achievable | Pressure tactics, vague goals |
| Aspirational / grounded | Encouraging, milestone-driven | Empty motivational language |
| Playful / educational | Light, curiosity-led, clear feedback | Gambling or money-outcome framing |
| Energetic / youth-oriented | Energetic, progression-focused | Financial-return framing |
| Welcoming / confidence-building | Accessible, modular, step-by-step | Overwhelm, prerequisite gatekeeping |
| Useful / transparent | Factual, utility-first, non-speculative | Any speculative or investment language |
| Earned / credible | Credential-focused, achievement-led | Purchased or granted connotations |

---

## 7. Asset Requirements

### Minimum per product

| Asset | Spec | Required by |
|---|---|---|
| Product illustration (card image) | 900 × 1350 px · WebP · < 200 kB | Card & detail page |
| Product icon / motif (SVG) | 48 × 48 viewBox · accessible title | Card icon, navigation |
| Status chip color (CSS token) | Must pass WCAG 2.1 AA on white | Status chip |
| App Store icon | 1024 × 1024 px · PNG · no alpha | If App Store listing exists |
| App Store screenshots | 1290 × 2796 px (iPhone 6.9") | If App Store listing exists |

### File-naming convention

```
public/products/[slug].webp          ← illustration
public/icons/[slug].svg              ← icon/motif
public/app-store/[slug]-icon.png     ← App Store icon (if applicable)
public/app-store/[slug]-screen-1.png ← screenshot 1 (if applicable)
```

---

## 8. COVI / ELUV Public-Language Guardrails

### 8.1 Approved language

Use these terms when referring to COVI and ELUV:

- utility, utility token
- eligible participation
- progress, milestone
- credentials, credential minting
- access, platform access
- recognition
- member benefits
- defined programs
- earn / earnable / earn-only
- spend / platform features
- transfer-paused (COVI pre-listing)
- soulbound, non-transferable (ELUV)
- governance weight (derived from verified milestone count and tier)

### 8.2 Prohibited language

Never use the following in any public-facing copy, App Store descriptions, or marketing:

| Prohibited term | Reason |
|---|---|
| investment / invest | Implies a financial product |
| income | Implies a financial product |
| yield / APY / APR | Implies a financial product |
| returns / return on | Implies a financial product |
| dividends | Implies a financial product |
| appreciation | Implies price speculation |
| revenue share | Implies a financial instrument |
| guaranteed rewards | Misrepresentation risk |
| trading | COVI is transfer-paused; trading framing is inaccurate |
| token sale | There is no public token sale |
| external marketplace (for ELUV) | ELUV is soulbound and non-transferable |
| price (of COVI) | Transfer-paused; price language is inaccurate |
| profit | Implies a financial product |

### 8.3 Public-sector / nonprofit / institutional pathways

ConstructFi explicitly preserves:

- **Token-optional pathways**: all core functionality is accessible without COVI. COVI enhances access to platform features but is not required to use the platform.
- **Token-free-by-default for public-sector, nonprofit, and institutional participants**: these entities can participate in procurement, credentialing, and readiness tracking without acquiring or spending COVI or receiving ELUV.
- Any copy or configuration that implies COVI/ELUV participation is mandatory for institutional or public-sector use must be corrected before publication.

### 8.4 Review trigger

Any copy that introduces a term not covered by §8.1 or §8.2 must be submitted for a brand-and-legal review before publication.

---

## 9. Product Identity Matrix

> For slug-to-brand mapping in code, see `src/lib/product-brand.ts`.

---

### ConstructOS (slug: `revenueos`)

| Attribute | Value |
|---|---|
| **Product role** | Revenue and business-operations platform for contractors and suppliers |
| **Color direction** | Deep navy (`#0D1B2A`) primary · Teal (`#00A896`) accent |
| **Visual motif** | Connected workflows, executive dashboard, pipeline nodes |
| **Tone / voice** | Operational / executive — crisp, outcome-focused, professional |
| **Audience** | Contractors, GCs, suppliers running an active book of work |
| **Master-brand relationship** | Flagship operational product; directly references ConstructFi AI and supplier network |
| **Preferred marketplace CTA** | Learn more |
| **Availability label** | At launch · Sept 9, 2026 |
| **Asset minimum** | Illustration (card image), dashboard-motif icon SVG |

---

### Build or Busted (slug: `build-or-bust`)

| Attribute | Value |
|---|---|
| **Product role** | Deal-verdict screener — BUILD / WORK THE DEAL / BUST in ~60 seconds |
| **Color direction** | Teal (`#00A896`) primary · Signal red (`#E63946`) verdict accent |
| **Visual motif** | Verdict card, gauge, underwriting signal |
| **Tone / voice** | Direct / analytical — confident, verdict-driven, economical |
| **Audience** | Investors, developers, first-time buyers evaluating a deal |
| **Master-brand relationship** | Flagship consumer/prosumer app; lead-in to COVI Academy pathway |
| **Preferred marketplace CTA** | Learn more |
| **Availability label** | At launch · Sept 9, 2026 |
| **Asset minimum** | Illustration (card image), gauge icon SVG |

---

### PactPilot (slug: _not yet in products.ts — see §10_)

| Attribute | Value |
|---|---|
| **Product role** | Contract and document management with risk-layer overlays |
| **Color direction** | Indigo (`#3D405B`) primary · Cool slate (`#8D99AE`) accent |
| **Visual motif** | Document stack, risk layers, verified signature |
| **Tone / voice** | Precise / trusted — methodical, document-oriented, calm |
| **Audience** | Contractors, lenders, legal reviewers |
| **Master-brand relationship** | Part of the ConstructFi ecosystem; integrates with ConstructOS records |
| **Preferred marketplace CTA** | Join waitlist |
| **Availability label** | Coming soon |
| **Asset minimum** | Illustration, document-stack icon SVG |

---

### BuilderBae (slug: _not yet in products.ts — see §10_)

| Attribute | Value |
|---|---|
| **Product role** | Material and inventory companion for jobsite buyers |
| **Color direction** | Safety orange (`#F4A261`) primary · Teal (`#00A896`) accent |
| **Visual motif** | Material tiles, inventory grid, jobsite checklist |
| **Tone / voice** | Helpful / value-led — warm, practical, inventory-oriented |
| **Audience** | Jobsite buyers, small contractors, owner-builders |
| **Master-brand relationship** | Consumer companion feeding the Supplier Marketplace |
| **Preferred marketplace CTA** | Join waitlist |
| **Availability label** | Coming soon |
| **Asset minimum** | Illustration, material-tile icon SVG |

---

### Supplier Marketplace (slug: `supplier-marketplace`)

| Attribute | Value |
|---|---|
| **Product role** | Commerce engine — vetted supplier network, procurement, settlement |
| **Color direction** | Blue (`#2B6CB0`) primary · Steel (`#718096`) accent |
| **Visual motif** | Supplier network nodes, RFQ flow, logistics chain |
| **Tone / voice** | Reliable / commercial — B2B, logistics-aware, outcome-focused |
| **Audience** | Contractors, GCs, developers procuring at scale |
| **Master-brand relationship** | Commerce backbone of the ConstructFi ecosystem |
| **Preferred marketplace CTA** | Learn more |
| **Availability label** | At launch · Sept 9, 2026 |
| **Asset minimum** | Illustration (card image), network-node icon SVG |

---

### Covington Sales Academy (slug: `sales-academy`)

| Attribute | Value |
|---|---|
| **Product role** | Sales onboarding, coaching, and performance program inside RevenueOS |
| **Color direction** | Covington green (`#2D6A4F`) primary · Warm gold (`#D4A017`) accent |
| **Visual motif** | Coaching track, certification milestone, scorecard |
| **Tone / voice** | Practical / motivating — coach-like, sequential, achievable |
| **Audience** | New and developing construction sales reps |
| **Master-brand relationship** | Part of the ConstructFi ecosystem; runs on RevenueOS data layer |
| **Preferred marketplace CTA** | Join waitlist |
| **Availability label** | Coming soon |
| **Asset minimum** | Illustration, graduation-cap icon SVG |

---

### Eluvial Academy (slug: _not yet in products.ts — see §10_)

| Attribute | Value |
|---|---|
| **Product role** | Property-readiness education pathways leading to ELUV milestone credentials |
| **Color direction** | Emerald (`#1B4332`) primary · Bronze (`#A0522D`) accent |
| **Visual motif** | Property pathways, progress map, credential milestone |
| **Tone / voice** | Aspirational / grounded — encouraging, milestone-driven |
| **Audience** | Aspiring property owners, first-time buyers, community participants |
| **Master-brand relationship** | Part of the ConstructFi ecosystem; primary ELUV credential pathway |
| **Preferred marketplace CTA** | Join waitlist |
| **Availability label** | Coming soon |
| **Asset minimum** | Illustration, pathway-progress icon SVG |

---

### Covi BuildSim: House Hackers (slug: `house-hackers`)

| Attribute | Value |
|---|---|
| **Product role** | Learn-to-earn simulation game teaching real-estate and readiness concepts |
| **Color direction** | Teal (`#00A896`) primary · Gold (`#D4A017`) accent |
| **Visual motif** | Property simulation tiles, milestone flags, engagement leaderboard |
| **Tone / voice** | Playful / educational — curiosity-led, clear feedback loops |
| **Audience** | Learners at any experience level; existing platform members |
| **Master-brand relationship** | COVI participation pathway; feeds Readiness Tracker milestone map |
| **Preferred marketplace CTA** | Join waitlist |
| **Availability label** | Coming soon |
| **Asset minimum** | Illustration (card image), gamepad icon SVG |

---

### Cashflow City Tycoon (slug: _not yet in products.ts — see §10_)

| Attribute | Value |
|---|---|
| **Product role** | City-building progression game with construction and cashflow mechanics |
| **Color direction** | Blue (`#2B6CB0`) primary · Orange (`#F4A261`) · Gold (`#D4A017`) accents |
| **Visual motif** | City skyline, build progression, district expansion |
| **Tone / voice** | Energetic / youth-oriented — progression-focused, dynamic |
| **Audience** | Younger players; general consumers; property-curious beginners |
| **Master-brand relationship** | Part of the ConstructFi ecosystem; engagement and awareness play |
| **Preferred marketplace CTA** | Join waitlist |
| **Availability label** | Coming soon |
| **Asset minimum** | Illustration, city-build icon SVG |

---

### Brick by Brick (slug: _not yet in products.ts — see §10_)

| Attribute | Value |
|---|---|
| **Product role** | Modular block / puzzle game introducing construction and property concepts |
| **Color direction** | Brick red (`#9B2335`) primary · Cream (`#FAF0E6`) · Navy (`#0D1B2A`) accents |
| **Visual motif** | Modular blocks, puzzle grid, foundational building patterns |
| **Tone / voice** | Welcoming / confidence-building — accessible, modular, step-by-step |
| **Audience** | New entrants, beginners, community education participants |
| **Master-brand relationship** | Part of the ConstructFi ecosystem; beginner on-ramp |
| **Preferred marketplace CTA** | Join waitlist |
| **Availability label** | Coming soon |
| **Asset minimum** | Illustration, building-block icon SVG |

---

### COVI (the utility token)

| Attribute | Value |
|---|---|
| **Product role** | ERC-20 utility token; platform activity currency; 10B fixed cap; transfer-paused / earn-only before listing |
| **Color direction** | Construction gold (`#D4A017`) primary · Teal (`#00A896`) accent |
| **Visual motif** | Skyline silhouette, commerce flow, platform activity nodes |
| **Tone / voice** | Useful / transparent / non-speculative — factual, utility-first |
| **Audience** | Platform participants; contractors; institutional / public-sector observers |
| **Master-brand relationship** | Native to the ConstructFi platform; not independently branded; never positioned outside ecosystem context |
| **Preferred marketplace CTA** | Learn more (links to COVI explainer, not a purchase page) |
| **Availability label** | At launch · Sept 9, 2026 |
| **Asset minimum** | Token mark SVG, explainer illustration |
| **Guardrails** | See §8 in full; never investment, yield, or trading language |

---

### ELUV (the credential token)

| Attribute | Value |
|---|---|
| **Product role** | ERC-5192 soulbound credential; earned only; non-transferable; never sold; governance weight from verified milestone count |
| **Color direction** | Bronze (`#A0522D`) primary · Emerald (`#1B4332`) accent |
| **Visual motif** | Shield, verified milestone badge, credential ribbon |
| **Tone / voice** | Earned / credible / empowering — achievement-led, credential-focused |
| **Audience** | Platform participants who have completed verified readiness milestones |
| **Master-brand relationship** | Native to the ConstructFi platform; always described within ecosystem context |
| **Preferred marketplace CTA** | Learn more (links to ELUV explainer, not a purchase page) |
| **Availability label** | At launch · Sept 9, 2026 |
| **Asset minimum** | Credential badge SVG, explainer illustration |
| **Guardrails** | See §8 in full; soulbound, non-transferable, never listed on external marketplaces |

---

## 10. Asset Inventory & Missing-Assets Checklist

### Existing assets (found in `public/products/`)

| Product | Illustration | Status |
|---|---|---|
| Build or Bust | `/products/build-or-bust.webp` | ✅ Present |
| Covi Estimator | `/products/covi-estimator.webp` | ✅ Present |
| Readiness Tracker | `/products/readiness-tracker.webp` | ✅ Present |
| Covi Wallet | `/products/covi-wallet.webp` | ✅ Present |
| House Hackers | `/products/house-hackers.webp` | ✅ Present |
| Supplier Marketplace | `/products/supplier-marketplace.webp` | ✅ Present |
| Digital Collectibles | `/products/collectibles.webp` | ✅ Present |
| ConstructOS (RevenueOS) | _(not referenced in products.ts)_ | ⬜ Missing |
| Covington Sales Academy | _(not referenced in products.ts)_ | ⬜ Missing |
| Material Marketplace | _(not referenced in products.ts)_ | ⬜ Missing |

### Missing assets — full portfolio checklist

> Items marked ⬜ have no asset path defined. Do not invent paths or placeholder files.

#### Illustrations (`public/products/[slug].webp`)

- [x] `build-or-bust.webp`
- [x] `covi-estimator.webp`
- [x] `readiness-tracker.webp`
- [x] `covi-wallet.webp`
- [x] `house-hackers.webp`
- [x] `supplier-marketplace.webp`
- [x] `collectibles.webp`
- [ ] `revenueos.webp` — ConstructOS / RevenueOS
- [ ] `sales-academy.webp` — Covington Sales Academy
- [ ] `material-marketplace.webp` — Material Marketplace
- [ ] `pact-pilot.webp` — PactPilot _(slug not yet defined)_
- [ ] `builder-bae.webp` — BuilderBae _(slug not yet defined)_
- [ ] `eluvial-academy.webp` — Eluvial Academy _(slug not yet defined)_
- [ ] `cashflow-city-tycoon.webp` — Cashflow City Tycoon _(slug not yet defined)_
- [ ] `brick-by-brick.webp` — Brick by Brick _(slug not yet defined)_

#### Icon SVGs (`public/icons/[slug].svg`)

- [ ] All product icon SVGs (none currently in `/public/icons/`) — to be created by design

#### Token marks

- [ ] `covi-mark.svg` — COVI utility token mark
- [ ] `eluv-mark.svg` — ELUV credential badge

### Slug / content mismatches with the desired brand portfolio

| Brand-portfolio product | Current slug in `products.ts` | Notes |
|---|---|---|
| ConstructOS | `revenueos` | Slug reflects internal naming; brand name is "ConstructFi RevenueOS" in products.ts. Brand doc uses "ConstructOS" as shorthand. |
| Build or Busted | `build-or-bust` | Minor name variant ("Busted" vs "Bust") — products.ts uses "Build or Bust." |
| PactPilot | _(none)_ | Not yet in products.ts; requires new slug (`pact-pilot` recommended) |
| BuilderBae | _(none)_ | Not yet in products.ts; requires new slug (`builder-bae` recommended) |
| Eluvial Academy | _(none)_ | Not yet in products.ts; requires new slug (`eluvial-academy` recommended) |
| Cashflow City Tycoon | _(none)_ | Not yet in products.ts; requires new slug (`cashflow-city-tycoon` recommended) |
| Brick by Brick | _(none)_ | Not yet in products.ts; requires new slug (`brick-by-brick` recommended) |
| Covi Estimator | `covi-estimator` | Present but not in brand guidance baseline — carry forward as-is |
| Readiness Tracker | `readiness-tracker` | Present but not in brand guidance baseline — carry forward as-is |
| Covi Wallet | `covi-wallet` | Present but not in brand guidance baseline — carry forward as-is |
| Digital Collectibles | `collectibles` | Present but not in brand guidance baseline — carry forward as-is |
| Material Marketplace | `material-marketplace` | Present but not in brand guidance baseline — carry forward as-is |
