# ConstructFi ecosystem site — developer handoff

**Issued 26 August 2026. Supersedes `design_handoff_ecosystem_site/`.**
Repo: `constructfi/constructfi-inc`, branch `main`.

## Read in this order

1. **`ConstructFi_Backend_Closeout.html`** — open in a browser, or print to PDF. The closeout: what is designed, the seven interactive surfaces and what each needs from the backend, the entities to model, the brand rules that must survive implementation, what is open before launch, and the acceptance checklist. **Start here.**
2. **`ConstructFi_Site_v2_standalone.html`** — the full design reference. Every page and product, self-contained, opens offline with no server. Click through it before writing code.
3. **`IMPLEMENTATION_PLAN.md`** — step-by-step sequence for the site-level changes (fonts, nav, About, Partner Solutions, COVI & ELUV, marketplace). Still accurate for those steps. It predates the product-page build-outs described below.
4. **`COPILOT_PROMPTS.md`** — paste-ready prompts per step, plus merge discipline.
5. **`DEPLOY_HOSTINGER.md`** — hosting and delivery notes for the Hostinger rollout: plan requirements, domain shape, deployment checklist.

## What is in this bundle

| File | What it is |
| --- | --- |
| `ConstructFi_Backend_Closeout.html` | Closeout document. Print to PDF from the browser. |
| `ConstructFi_Site_v2_standalone.html` | Design reference, all 24 screens, self-contained (~3.4 MB) |
| `IMPLEMENTATION_PLAN.md` | Sequenced steps for site-level changes |
| `COPILOT_PROMPTS.md` | Prompts per step |
| `DEPLOY_HOSTINGER.md` | Hostinger hosting notes and deployment checklist |
| `assets/img-01…09` | The nine bitmaps, extracted from base64. Prefer the repo's own `public/` copies where they exist. |

## The design reference is not shippable code

Both HTML files are design references built in a design tool. They are not React components and must not be copied into the Next.js app. Rebuild each screen as real `.tsx` using the repo's existing components (`PageHero`, `Section`, `SectionHeading`, `Card`, `Button`, `Badge`) and the Tailwind tokens already in `tailwind.config.ts` / `src/app/globals.css`. Pull exact colour values from the config, not from the hex codes baked into the reference.

Copy is final. Do not rewrite it during implementation.

## Added since the previous handoff

The earlier bundle covered site-level changes only. Since then, eleven product pages were built out against each product's own approved brand standards. These are new and are not described in `IMPLEMENTATION_PLAN.md`.

**Eight products gained a detail treatment** below the standard hero and feature list:

- **ConstructOS** — eight-module map naming the record each module writes, a five-stage bid-to-closeout trace of one estimate line, three AI surfaces, division-by-division deployment note.
- **Build or Busted** — five-slider underwriting model with a Build / Hold / Busted verdict against fixed visible thresholds, plus a full interactive preview at its own route.
- **PactPilot** — three-state findings explainer (High / Review / Clear) with the required "not legal advice" qualifier.
- **Material Marketplace** — live lot pricer over four listings: select a lot, drag quantity, and line total, retail comparison, saving and remaining stock recompute. Plus provenance chain and three condition grades.
- **Supplier Marketplace** — RFQ comparison across six quotes with a live schedule constraint, the four verification checks as a record table, and the three states a returned scope can be in.
- **House Hackers** — four opening moves, each playing out a twelve-month consequence chain across cash, equity, debt and credit. Plus the four-number colour contract and three stages of play.
- **Cashflow Tycoon** — plant shop with a $50,000 bank: toggle upgrades and the rate, payback and remaining bank recompute; over-budget states are handled. Plus the four-beat loop and three tiers.
- **Brick by Brick** — a playable level with three solutions and real feedback, how a level teaches, and the three puzzle sets.

**Covington Sales Academy, Eluvial Academy and ConstructFi Collections** carry the standard treatment only. Decide before launch whether to build them out to match.

**Also changed:**

- `Covi BuildSim: House Hackers` is renamed **House Hackers** everywhere.
- All ten products except Collections carry App Store and Google Play buttons in both the hero and the Access panel. **Every URL currently points at a store search, not a listing.** Supply real links or hide the buttons per product.
- Access lines updated: "App Store · Google Play" for the games and Build or Busted; "Enterprise · iOS and Android" or "In ConstructFi · iOS and Android" where the app also lives inside the platform.
- The whitepaper section carries a **Download PDF** control alongside "Read the whitepaper"; it opens the whitepaper and fires the browser print dialog. Implement as a real PDF asset if one exists, otherwise keep the print path.
- Product covers are app-surface illustrations showing the UI each product displays, sized to fit their frames.

## Per-product brand systems — do not normalise

Each product page renders in its own approved typeface and palette, not the house stack. The house system (Fraunces on h1/h2, Manrope elsewhere) governs everything outside the product pages. Refactoring the eleven product pages onto shared components is the most likely way this gets broken.

Colour is semantic and product-specific:

- **ConstructOS** — Signal Teal marks AI and nothing else, under 10% of any surface. Never status.
- **Material Marketplace** — amber is price, only.
- **Cashflow Tycoon** — amber is the thing about to be pressed; never beside cyan at equal size.
- **House Hackers** — gold is equity, green is cash flow, red is debt.
- **Build or Busted** — orange is brand, never status. Build is green, Hold is amber, Busted is red.
- **Supplier Marketplace** — teal carries verification and action. Covington amber appears nowhere.

No emoji anywhere — not in app, push or email. Status is a colour, a dot, or a word.

## Blocking before launch

1. **Store listing URLs** — all ten point at search results.
2. **Legal review** — COVI & ELUV disclaimer, FAQ and status language; the PactPilot qualifier.
3. **Real numbers for the seven calculators** — every figure is currently a plausible invention. Supply real values or keep the illustrative labelling.

Non-blocking: accessibility audit (keyboard operation of the selectable rows, focus states, contrast across eleven palettes, reduced motion), and the three products still on the standard treatment.

## Design preview

`public/design-preview.html` in the repo is refreshed to this build. Push it with the git CLI — it is over GitHub's web-editor size cap.

Questions on intent go back to design before they are resolved in code.
