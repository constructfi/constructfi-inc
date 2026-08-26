# Hosting notes — Hostinger

The developer is standing up the ConstructFi web properties and app landing pages on Hostinger, starting with `constructfi`. These notes cover only hosting and delivery. Design intent lives in `README.md` and `ConstructFi_Backend_Closeout.html`.

## What ships first

| Order | Property | Notes |
| --- | --- | --- |
| 1 | `constructfi` — main site | All 24 screens in the design reference. The other properties link back to it. |
| 2 | Product pages | Eleven products. Ten carry App Store / Google Play buttons; Collections is web-only inside ConstructFi. |
| 3 | Interactive surfaces | Seven calculators. They run client-side in the reference; each needs a real data source before launch (see closeout). |

## Plan requirements

The design reference is static and will serve from any Hostinger plan. The real site is Next.js (`constructfi/constructfi-inc`), which is not static — it needs Node.

- **Business / Cloud plan** (Node app support) — run `next start` behind Hostinger's Node setup, or
- **Static export** — only viable if the marketplace and dashboard routes are dropped or moved to a separate service. Not recommended.
- **VPS** — the clean option if any of the calculators end up server-backed.

Confirm the plan before wiring domains; a static-only plan will not run the app as built.

## Domains and subdomains

Decide the shape before deploying, because the header and footer links are hard-coded in `src/lib/site.ts`:

- Single domain with paths — `constructfi.com/build-or-busted` (fewest SSL certificates, simplest analytics).
- Subdomain per product — `buildorbusted.constructfi.com` (each product can ship independently).

Pick one and apply it to every product. Mixed schemes break the nav.

## Deployment checklist

1. Node version pinned to match the repo's `package.json`.
2. Environment variables set in Hostinger's panel, not committed. Nothing in the design reference reads env vars; the real app does.
3. SSL issued on every domain and subdomain in use, with forced HTTPS.
4. `public/design-preview.html` deployed only behind auth or not at all — it is an internal reference, not a public page.
5. Store listing URLs replaced before any product page goes live. All ten currently point at store search results.
6. Compression and caching on for `/public`; the cover illustrations are the heaviest assets.
7. Redirect `www` to apex (or the reverse) consistently.

## Do not deploy the design reference as the site

`ConstructFi_Site_v2_standalone.html` is a 3.4 MB single file built in a design tool. It is a reference for what to build, not a page to host. Uploading it to Hostinger as `index.html` would put an unresponsive, unindexable, un-updatable page on the domain.

## Handoff to Claude Code

The developer can point Claude Code at this bundle directly:

1. Clone `constructfi/constructfi-inc`.
2. Drop this `handoff/` folder into the repo root.
3. Tell Claude Code to read `handoff/README.md` first, then `ConstructFi_Backend_Closeout.html`, then work through `IMPLEMENTATION_PLAN.md`.

`COPILOT_PROMPTS.md` holds paste-ready prompts per step and the merge discipline to follow.
