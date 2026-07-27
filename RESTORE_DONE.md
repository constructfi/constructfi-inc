# ConstructFi — Restored Features (done)

## New routes
- `/dashboard` — Participant dashboard PREVIEW. Summary stat cards (COVI balance, ELUV milestones, activities, readiness tier — all DEMO-labeled), recent rewards activity log, readiness/tier meter, 6 ELUV soulbound milestone cards (Verified / In review / Locked states, all "Non-transferable"), and a "This is a preview, not a live account" CTA. Prominent "Preview — illustrative data" badge + compliance notice.
- `/getting-started` — 5-step onboarding walkthrough (Connect wallet → KYC/allowlist → Build or Bust → Dashboard → Marketplace) + 6-item FAQ accordion (COVI vs ELUV, is COVI an investment [no], tradability, ELUV non-transferable, chain=Base, data safety) + resource cards.
- `/admin` — Internal Operations console PREVIEW. Platform metrics (participants, ELUV minted, COVI circulation, marketplace volume — all DEMO), milestone verification queue (disabled Approve/Dispute), KYC/allowlist queue. "Preview — internal mockup" + "Not a live console" badges.
- `/apps` — ConstructFi Apps hub. 6 app cards: Build or Bust (Phase 1), Marketplace (Phase 1), Participant dashboard (Preview available), + Phase 2 "Coming soon": Collectibles & credentials layer, Procurement workspace, Mobile companion. Honest "Coming Soon · Phase 1" store badges (no fake links).

## New components
- `src/components/home/nft-collections.tsx` — homepage NFT/collectibles section (inserted after MarketplaceTeaser); honest "Marketplace launches Sept 9, 2026" state, no fake OpenSea links.

## Edits
- `src/lib/site.ts` — added `/apps` to NAV_LINKS; added Dashboard, Getting Started, Apps to FOOTER_LINKS.Platform; added "Admin (preview)" to FOOTER_LINKS.Company.
- `src/app/page.tsx` — import + render `<NftCollections />`.
- `src/components/reveal.tsx` — HARDENED: replaced fragile framer `whileInView` with an IntersectionObserver + already-in-view check + 1.2s safety timer, and a `useReducedMotion` fallback. Guarantees content can never get stuck at opacity 0 (this was causing Summary/milestone/metrics grids to render blank).

## Compliance guardrails honored
- No fake external links (no fake OpenSea / App Store / Google Play links).
- No contract addresses displayed anywhere.
- All dashboards clearly labeled illustrative/demo; action controls disabled.
- No investment/yield/APY language; ELUV = non-transferable credential, no financial rights.

## Verification
- `npx tsc --noEmit` — 0 errors.
- `npm run build` — clean, 20/20 routes prerendered.
- Playwright screenshots desktop 1280 + mobile 375 for all 4 new routes — all content renders without manual scroll; no console/page errors; no mobile overflow (375/375 on every page); grids collapse to 1 column on mobile.
