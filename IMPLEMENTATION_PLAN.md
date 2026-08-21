# ConstructFi — Implementation Plan

This plan documents the updated design and deployment flow for the ConstructFi marketing site.
`src/lib/site.ts` is the single source of truth for all navigation and footer routing.

---

## Step 0 — Preview URL deployment (CLI push)

**Repo files**
- `vercel.json`
- `package.json`

**Setup**

The site deploys to Vercel. To push a preview build from a local branch:

```bash
# Install the Vercel CLI once
npm install -g vercel

# Authenticate (one-time)
vercel login

# From the repo root — creates a preview deployment and prints the URL
vercel --cwd . --yes

# To deploy to the production URL (main branch only):
vercel --prod
```

The `vercel.json` already declares `framework: nextjs`, `buildCommand: next build`, and `outputDirectory: .next`.  
No additional config is needed. Vercel reads environment variables from the project dashboard.

**Done-checks**
- [ ] `vercel` CLI exits 0 and prints a preview URL.
- [ ] The preview URL loads the site with the correct nav and footer.
- [ ] `vercel --prod` (from `main`) updates the production URL at `constructfi.co`.

---

## Step 1 — Font prerequisite ✅

**Repo files**
- `src/lib/fonts.ts`
- `src/app/layout.tsx`
- `package.json`

**Change made**

Replaced `next/font/google` (requires network access at build time) with `next/font/local`
backed by `@fontsource` npm packages (`@fontsource/poppins`, `@fontsource/ibm-plex-sans`,
`@fontsource/ibm-plex-mono`, `@fontsource/lora`).  
Font files are resolved from `node_modules` at build time — no DNS required, works in CI.

The same CSS variables are exported (`--font-poppins`, `--font-plex-sans`, `--font-plex-mono`,
`--font-lora`) so `layout.tsx` and all `var(--font-*)` usages in CSS are unchanged.

**Done-checks**
- [x] `npm run build` succeeds without font-fetch errors.
- [x] CSS variables are defined and injected by `RootLayout`.
- [x] No duplicate or conflicting font declarations.

---

## Step 2 — Navigation source of truth ✅

**Repo files**
- `src/lib/site.ts` — `NAV_GROUPS`, `MOBILE_NAV`, `APP_URL`, `APP_URL_EXTERNAL`
- `src/components/site-header.tsx`

**Existing state (correct)**

`site-header.tsx` already imports `NAV_GROUPS` and `MOBILE_NAV` directly from `src/lib/site.ts`
and renders them — no inline route lists in the component.  
All five nav groups (Overview, Products, Platform, Partners, Resources) are present with their
sub-items. The mobile drawer mirrors the full `MOBILE_NAV` list.

**Done-checks**
- [x] `NAV_GROUPS` in `src/lib/site.ts` is the only top-nav definition.
- [x] `MOBILE_NAV` in `src/lib/site.ts` is the only mobile drawer definition.
- [x] Desktop and mobile labels/hrefs match.
- [x] No duplicate nav source exists in any component.

---

## Step 3 — Motion prerequisite ✅

**Repo files**
- `src/components/reveal.tsx`

**Existing state (correct)**

`Reveal` is the single motion primitive used across the site. It uses `framer-motion` with:
- `IntersectionObserver`-driven enter animation (fade + slide-up).
- Immediate show for elements already in the viewport at mount.
- `useReducedMotion()` — renders a plain `<div>` with no animation for accessibility.
- A 1200 ms safety fallback timer so content can never get stuck at `opacity: 0`.

**Done-checks**
- [x] Motion is handled by a single component (`Reveal`).
- [x] Reduced-motion preference is respected.
- [x] No component introduces a conflicting animation duration or easing.

---

## Step 4 — Homepage / nav integration ✅

**Repo files**
- `src/app/page.tsx`
- `src/components/site-header.tsx`
- `src/lib/site.ts`

**Existing state (correct)**

The homepage imports `APP_URL`, `APP_URL_EXTERNAL` from `src/lib/site.ts` for all CTA links.
The header is rendered globally by `RootLayout` (`src/app/layout.tsx`) so it is present on
every page including the homepage.

**Done-checks**
- [x] Homepage "Launch app" CTA uses `APP_URL` from `src/lib/site.ts`.
- [x] Header present on homepage with full nav.
- [x] No broken internal links on the homepage.

---

## Step 5 — Footer route coverage ✅

**Repo files**
- `src/lib/site.ts` — `FOOTER_LINKS`
- `src/components/site-footer.tsx`

**Change made**

Added a new `Developers` group and moved `/platform`, `/developers`, `/security`, and
`/funders` into `FOOTER_LINKS` so every route that exists in `NAV_GROUPS` is discoverable
from either the top navigation or the footer.

Before this change the following routes were in the top nav but absent from the footer:
`/platform`, `/developers`, `/security`, `/funders`.

**Done-checks**
- [x] `FOOTER_LINKS` is the only footer route definition (consumed by `SiteFooter`).
- [x] `/platform`, `/developers`, `/security`, `/funders` appear in the footer.
- [x] Footer groups render correctly on desktop and mobile.

---

## Step 6 — Marketplace and /app entrypoints ✅

**Repo files**
- `src/app/marketplace/page.tsx`
- `src/app/app/page.tsx`
- `src/lib/site.ts` — `APP_URL`, `APP_URL_EXTERNAL`, `APP_LIVE`

**Existing state (correct)**

`APP_LIVE = false` routes all "Launch app" CTAs to the in-site prototype at `/app`.  
Flip `APP_LIVE = true` in `src/lib/site.ts` once `constructfi.app` is live and every CTA
switches to the external origin automatically (the external link opens in a new tab because
`APP_URL_EXTERNAL` will become `true`).

**Done-checks**
- [x] `/marketplace` and `/app` resolve correctly.
- [x] All "Launch app" CTAs use `APP_URL` from `src/lib/site.ts`.
- [x] Flipping `APP_LIVE` to `true` is the only change needed to cut over to `constructfi.app`.

---

## Step 7 — Platform and developer pages ✅

**Repo files**
- `src/app/platform/page.tsx`
- `src/app/developers/page.tsx`
- `src/app/whitepaper/page.tsx`
- `src/app/security/page.tsx`

**Existing state (correct)**

All four pages exist and are reachable from `NAV_GROUPS` (Platform group).  
After Step 5, they are also reachable from the footer.

**Done-checks**
- [x] Each page is reachable from at least one navigation surface.
- [x] No stale route references in page content.

---

## Step 8 — Partner and funding pages ✅

**Repo files**
- `src/app/partners/page.tsx`
- `src/app/funders/page.tsx`

**Existing state (correct)**

Both pages are in `NAV_GROUPS` (Partners group) and, after Step 5, also in `FOOTER_LINKS`.

**Done-checks**
- [x] Both pages reachable from header nav and footer.
- [x] Labels are consistent across header, mobile, and footer.

---

## Step 9 — Resources, onboarding, and contact pages ✅

**Repo files**
- `src/app/resources/page.tsx`
- `src/app/getting-started/page.tsx`
- `src/app/contact/page.tsx`

**Existing state (correct)**

All three pages are in the `Resources` group in `NAV_GROUPS` and in the `Ecosystem` group of
`FOOTER_LINKS`.

**Done-checks**
- [x] Support/onboarding routes discoverable from both nav and footer.
- [x] No orphaned links in page content.

---

## Step 10 — Final validation and cleanup ✅

**Repo files**
- `src/lib/site.ts`
- `src/components/site-header.tsx`
- `src/components/site-footer.tsx`
- `src/lib/fonts.ts`

**Summary of all changes in this plan**

| File | Change |
|------|--------|
| `src/lib/fonts.ts` | Switched from `next/font/google` to `next/font/local` backed by `@fontsource` packages |
| `src/lib/site.ts` | Added `Developers` footer group; added `/platform`, `/developers`, `/security`, `/funders` to `FOOTER_LINKS` |
| `package.json` | Added `@fontsource/poppins`, `@fontsource/ibm-plex-sans`, `@fontsource/ibm-plex-mono`, `@fontsource/lora` |
| `IMPLEMENTATION_PLAN.md` | This file — documents all steps and done-checks |

**Done-checks**
- [x] `npm run build` passes with no errors.
- [x] `src/lib/site.ts` is the sole nav and footer source.
- [x] No duplicate nav or font definitions remain.
- [x] All planned route moves are reflected in the rendered footer.
