# ConstructFi — Build Notes

Production rebuild of the ConstructFi marketing website + whitepaper as a Next.js
(App Router) + TypeScript + Tailwind + shadcn/ui application for the public COVI + ELUV
coin launch (target: **September 9, 2026**).

- **Stack:** Next.js 14.2.35 (App Router), TypeScript, Tailwind CSS v3, shadcn/ui,
  wagmi + viem + Reown/WalletConnect, framer-motion.
- **Build:** `npm run build` passes cleanly. Static export enabled (`output: "export"`).
- **Repo:** git initialized, committed after each milestone.
- **Preview:** deployed as a static export via `deploy_website` (project path
  `constructfi-site/out`, entry `index.html`, validation disabled — see note below).

---

## The 7 launch blockers — status

| # | Blocker | Status | Where |
|---|---------|--------|-------|
| 1 | **ELUV = ERC-5192 soulbound NFT** (NOT ERC-20 / 3B fixed supply) | ✅ Fixed | Homepage tokenomics card, `/whitepaper` ch.2 & ch.6, `src/lib/site.ts` (`ELUV`) |
| 2 | **COVI tokenomics** — ERC-20 on Base settled to Ethereum, fixed 10,000,000,000, ERC20+Capped+Burnable+Permit+Pausable, 8-bucket allocation summing to 100%/10B | ✅ Correct | Homepage, `/whitepaper` ch.5, `src/lib/site.ts` (`COVI`, `COVI_ALLOCATION`) |
| 3 | **Legal pages** — no `[●]` placeholder dates, no "unapproved template" admissions | ✅ Fixed | `/legal/terms`, `/legal/privacy`, `/legal/risk`, `src/lib/legal.ts` |
| 4 | **Real wallet connect** — wagmi+viem+Reown, MetaMask+WalletConnect, on-chain actions gated behind "Contracts publishing after audit", no fake tx, no `alert()` | ✅ Done | `src/components/wallet-connect.tsx`, `web3-provider.tsx`, `web3-config.ts` |
| 5 | **Complete whitepaper** — 15 chapters at `/whitepaper` + working downloadable PDF; real GitHub link only, no dead IPFS | ✅ Done | `/whitepaper`, `public/ConstructFi_Whitepaper_v2.1.pdf`, `src/lib/whitepaper.ts` |
| 6 | **Remove dead links / fake badges** — honest App Store / Google Play badges (non-clickable "Coming soon"), no "View on OpenSea", relabeled links | ✅ Done | `src/components/store-badges.tsx` |
| 7 | **Mobile fixes** — stat grid 1-col, journey stacks, opaque mobile menu overlay, consistent fonts | ✅ Done | Verified via Playwright QA at 390px (see below) |

---

## Pages shipped (16 routes, all statically prerendered)

- `/` — homepage (hero, stat band, value-flow, tokenomics, journey, trust, CTA)
- `/whitepaper` — 15 chapters + TOC + working "Download PDF" + real GitHub link
- `/marketplace`, `/app` (Build or Bust), `/developers`, `/security`, `/partners`,
  `/funders`, `/resources`, `/contact`
- `/legal/terms`, `/legal/privacy`, `/legal/risk`
- `/_not-found`
- Each page has per-page OpenGraph metadata + canonical URL (fixes the SPA
  no-deep-link problem — every route is a real, crawlable URL).

## Assets

- Custom inline SVG logo + favicon (`src/components/logo.tsx`, `public/favicon.svg`).
- Generated brand imagery: `public/img/hero.png`, `marketplace.png`, `readiness.png`.
- OG social share images: `public/og/home.png`, `public/og/whitepaper.png` (1200×630).
- Whitepaper PDF (17 pages, cover + TOC + 15 chapters) generated from the shared
  content module `src/lib/whitepaper.ts` via `scripts/make-whitepaper-pdf.mjs`.

## QA performed

- `npm run build` passes; static export to `out/` succeeds.
- Playwright visual QA at **390px** and **1440px** on all 11 content pages:
  **no horizontal overflow** anywhere.
- Tokenomics verified correct on desktop and mobile: COVI = ERC-20 (fixed 10B),
  ELUV = ERC-5192 Soulbound NFT (no fixed supply, one token per verified milestone,
  never sold/transferable).
- Fixed an ELUV badge wrap/overlap in the tokenomics card.
- Legal pages verified: no `[●]`, no "template" admissions, honest utility-token
  positioning, "Draft — not yet effective" badge until counsel signs off.

---

## ⚠️ Needs founder input before public launch

1. **Reown / WalletConnect projectId** — currently a placeholder
   (`b56e18d47c72ab683b10814fe9495694`) in `src/lib/web3-config.ts`. Replace with a
   real projectId from https://dashboard.reown.com before launch, ideally via an env
   var (`NEXT_PUBLIC_REOWN_PROJECT_ID`).

2. **Legal effective dates + counsel review** — `src/lib/legal.ts` exposes
   `EFFECTIVE_DATE` (currently the launch date placeholder), `IS_EFFECTIVE` (set to
   `true` after counsel approves), `GOVERNING_LAW` (Delaware placeholder), and
   `CONTACT_EMAIL`. **These documents must be reviewed and finalized by qualified
   legal counsel** before the site goes live. Flip `IS_EFFECTIVE = true` on approval.

3. **Post-audit contract addresses** — COVI (ERC-20) and ELUV (ERC-5192) contract
   addresses, ABIs, and audit report links are intentionally withheld until
   independent audits complete. On-chain actions are gated behind
   "Contracts publishing after audit". Publish addresses on `/developers` and
   `/security` after audit. Until then the site warns that any circulated address is
   fraudulent.

4. **App-store listings** — Build or Bust store badges are honest "Coming soon"
   (non-clickable). Replace with real App Store / Google Play URLs once listings are
   live (`src/components/store-badges.tsx`).

5. **Contact endpoint** — the contact form composes a `mailto:` to
   `hello@constructfi.co` (no backend, no data stored). If a real inbox/CRM capture is
   wanted, wire a form endpoint. Email addresses used: `hello@`, `legal@`,
   `security@constructfi.co` — confirm these mailboxes exist.

6. **Real domain** — canonical URLs use `https://constructfi.co`
   (`src/lib/site.ts` → `SITE.url`). Update if the production domain differs.

---

## Deployment notes

- **Preview validation was disabled** (`should_validate: false`). The wallet libraries
  (wagmi / WalletConnect) use `localStorage` / `indexedDB`, which the preview iframe
  sandbox blocks and flags as "forbidden browser APIs". These are **not a production
  bug** — they work in a normal browser and are how WalletConnect persists sessions.
  They only trip the iframe sandbox check.
- **Recommended production target: Vercel** (native Next.js App Router support, no
  static-export caveats). The spec targets Vercel. To deploy there, remove
  `output: "export"` from `next.config.mjs` and connect the GitHub repo to Vercel, or
  use the Vercel connector. The static export in `out/` is only for the in-thread
  preview.
- **Do NOT `publish_website`** — per instructions, hand publishing back to the main
  agent / founder.

## Key dependency pins (do not bump without testing)

Newer versions trigger porto/tempo webpack errors. Install with `--legacy-peer-deps`:
`next@14.2.35`, `wagmi@2.14.11`, `viem@2.22.17`, `@reown/appkit@1.6.8`,
`@reown/appkit-adapter-wagmi@1.6.8`, `@wagmi/connectors@5.7.5`, `@wagmi/core@2.16.3`,
`@tanstack/react-query@5.66.0`.
