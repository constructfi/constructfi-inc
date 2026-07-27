# ConstructFi — Restore Missing Features (build spec)

Restore 4 feature areas the rebuild dropped, matching the EXISTING design system EXACTLY. This is an existing Next.js 14.2.35 App Router + TS + Tailwind + shadcn/ui site at `/home/user/workspace/constructfi-site`. Do NOT scaffold a new project. Do NOT change existing pages' content except the small nav/footer additions noted below.

## Hard rules (compliance — do not violate)
- NO fake external links. No fake OpenSea/App Store/Google Play links. Store badges use the existing `store-badges` "Coming Soon · Phase 1" pattern only.
- Contract addresses are NEVER shown (whitepaper forbids it until post-audit). Any dashboard token balances are clearly labeled DEMO / PREVIEW / illustrative.
- Dashboards must carry a visible "Preview — illustrative data" badge/notice. They are non-functional demos (no real wallet reads). The "Claim rewards" style buttons must be disabled or clearly demo.
- No investment/profit/yield/APY language for COVI. ELUV = non-transferable credential, no financial rights.
- Reuse SITE, STATS, COVI, ELUV, COVI_ALLOCATION from `src/lib/site.ts`. Do not hardcode divergent numbers.

## Design system (match exactly)
- Components: `PageHero` (eyebrow/title/lede/children), `Section` + `SectionHeading` (eyebrow/title/lede/align), `Card`/`CardContent`, `Badge`, `Button`, `Accordion` from `@/components/ui/*`.
- Colors (tailwind): ink `#0B1930`, ink-2 `#10233F`, navy `#14325A`, teal `#0E9F8A`, mint `#2BC5A0`, sky `#1E9FC9`, gold `#B9903B`, wash `#F2F7F6`, line `#DDE7E5`. Dark mode is supported (next-themes). Use existing patterns: `bg-wash dark:bg-ink-2/30` for alt sections, `text-navy dark:text-white` for headings, `text-muted-foreground` for body, mint accent dots, `rounded-2xl border border-line dark:border-border`.
- Icons: lucide-react.
- Fonts: display/sans = Poppins var, mono = IBM Plex var (already configured).
- Every page = `export const metadata` with title/description/openGraph/canonical (copy the marketplace page pattern).
- Reveal/animation: use existing `Reveal` and `CountUp` components where the homepage uses them.

## Routes to build

### 1. `/dashboard` — Participant Dashboard (Preview)
A demo of what a participant sees after connecting. PageHero eyebrow "Platform · Dashboard", title like "Your participation, at a glance". Prominent "Preview — illustrative data, not a live wallet" Badge.
Sections:
- COVI balance card (demo number, e.g. "12,480 COVI"), labeled "Earned · demo".
- Rewards pool / recent rewards activity (a small table or list of demo activity: milestone completed → COVI earned).
- ELUV milestones: a grid of soulbound credential cards (e.g. "Property Analysis · Verified", "Financing Readiness · Verified") — each a non-transferable badge. Make clear they cannot be sold/transferred.
- Progression / readiness meter (visual progress toward next tier).
- A disabled/demo "Connect wallet to see your real data" CTA that opens the existing wallet-connect (reuse `<WalletConnect/>` component from `src/components/wallet-connect.tsx`) OR is clearly demo.

### 2. `/getting-started` — Getting Started
Step-by-step onboarding walkthrough. PageHero eyebrow "Start · Getting started". Numbered steps (reuse the homepage `Journey` visual style if helpful) e.g.:
1. Connect a wallet (Reown/WalletConnect/MetaMask on Base)
2. Complete KYC/allowlist (required for any compliant COVI sale)
3. Start with Build or Bust — analyze a property, earn your first COVI + ELUV milestone
4. Track progress on your dashboard
5. Participate in the marketplace
Include a short FAQ accordion (reuse `Accordion`) with 5–6 real Q&As (what is COVI vs ELUV, is COVI an investment [no], when tradable [after audit ~Nov], is ELUV sellable [no], what chain [Base], is my data safe). Link to whitepaper + dashboard.

### 3. `/admin` — Admin Dashboard (Preview)
Internal ops preview. PageHero eyebrow "Internal · Admin". Prominent "Preview — internal ops mockup" badge. NOT linked in the main public nav (add to footer under a new "Internal" group OR leave unlinked but reachable by URL). Sections: platform metrics (participants, milestones minted, COVI in circulation [demo], marketplace GMV [demo]), a demo table of recent milestone verifications with an approve/dispute demo action (disabled), KYC queue demo. All clearly illustrative.

### 4. Apps hub + NFT sections
- `/apps` — ConstructFi Apps overview hub. PageHero eyebrow "Platform · Apps". Cards for each app: Build or Bust (link to /app), Marketplace (link /marketplace), and "more coming" placeholders using honest "Phase 2 · Coming soon" badges. 
- Homepage NFT section: add a tasteful section to the homepage (new component `src/components/home/nft-collections.tsx`) describing the NFT/collectibles layer WITHOUT fake OpenSea links — use "Marketplace launches {launchDate}" honest state. Insert it into `src/app/page.tsx` in a sensible position (after MarketplaceTeaser). Keep it consistent with existing home section styling.

## Nav / footer updates (small, precise)
- Add to `NAV_LINKS` in `src/lib/site.ts`: `{ href: "/apps", label: "Apps" }` (place after Build or Bust). Keep nav from overflowing — if it gets crowded, that's acceptable at lg; test at 1280px.
- Add to `FOOTER_LINKS.Platform`: Dashboard (`/dashboard`), Getting Started (`/getting-started`), Apps (`/apps`).
- Add a footer link to `/admin` under a NEW `FOOTER_LINKS.Internal` group OR under Company as "Admin (preview)". Your call, keep it subtle.

## Build & verify
- `npm run build` MUST pass clean (all routes prerender). Run `npx tsc --noEmit` — zero errors.
- Do Playwright screenshots (desktop 1280 + mobile 375) of each new route; fix any text overflow, contrast, or mobile-stacking issues before finishing. The original site had mobile stat-grid breaks — do NOT reintroduce; test grids collapse to 1 column on mobile.
- Match dark AND light mode.
- When done, write a short summary of files added/changed to `/home/user/workspace/constructfi-site/RESTORE_DONE.md` listing every new route and component.

Do NOT deploy — the main agent will build, deploy to Vercel, and verify.
