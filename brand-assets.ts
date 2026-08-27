/**
 * ConstructFi — brand asset manifest
 * Generated from the approved visual reference (ConstructFi_Site_v2_standalone.html).
 * Paths are public-relative. See ASSET_SPEC.md for sizes, variants and safe areas.
 *
 * Slug notes: `builderbae` is Material Marketplace; `coviBuildsim` (slug covi-buildsim)
 * is House Hackers. The slugs predate the renames and are load-bearing for routing.
 *
 * Assets marked MISSING in ASSET_SPEC.md §6C do not exist yet. The paths are final;
 * the files are not there. Do not substitute placeholder artwork.
 */

export const BRAND_ASSETS = {
  constructfi: {
    emblem: "/brand/constructfi-emblem.svg",
    lockupDark: "/brand/constructfi-lockup-dark.svg",
    lockupLight: "/brand/constructfi-lockup-light.svg",
    appIcon: "/brand/constructfi-appicon-1024.png",
    favicon: {
      ico: "/brand/favicon.ico",
      px16: "/brand/favicon-16.png",
      px32: "/brand/favicon-32.png",
      px180: "/brand/favicon-180.png",
      px512: "/brand/favicon-512.png",
    },
  },

  coins: {
    covi: { raster: "/coins/covi.png", mark: "/coins/covi-mark.svg" },
    eluv: { raster: "/coins/eluv.png", mark: "/coins/eluv-mark.svg" },
  },

  products: {
    constructos: {
      name: "ConstructOS",
      mark: "/products/constructos-mark.svg",
      wordmark: "/products/constructos-wordmark.svg",
      appIcon: "/products/constructos-appicon-1024.png",
      coverWide: "/products/constructos-cover-wide.webp",
      coverRow: "/products/constructos-cover-row.webp",
      key: "#14C8B4",
      ink: "#14171A",
    },
    "build-or-busted": {
      name: "Build or Busted",
      mark: "/products/build-or-busted-mark.svg",
      wordmark: "/products/build-or-busted-wordmark.svg",
      appIcon: "/products/build-or-busted-appicon-1024.png",
      coverWide: "/products/build-or-busted-cover-wide.webp",
      coverRow: "/products/build-or-busted-cover-row.webp",
      key: "#FF5A1F",
      ink: "#0E1420",
    },
    builderbae: {
      name: "Material Marketplace",
      mark: "/products/builderbae-mark.svg",
      wordmark: "/products/builderbae-wordmark.svg",
      appIcon: "/products/builderbae-appicon-1024.png",
      coverWide: "/products/builderbae-cover-wide.webp",
      coverRow: "/products/builderbae-cover-row.webp",
      key: "#F2B01E",
      ink: "#191510",
    },
    "supplier-marketplace": {
      name: "Supplier Marketplace",
      mark: "/products/supplier-marketplace-mark.svg",
      wordmark: "/products/supplier-marketplace-wordmark.svg",
      appIcon: "/products/supplier-marketplace-appicon-1024.png",
      coverWide: "/products/supplier-marketplace-cover-wide.webp",
      coverRow: "/products/supplier-marketplace-cover-row.webp",
      key: "#0F766E",
      ink: "#0E1620",
    },
    pactpilot: {
      name: "PactPilot",
      mark: "/products/pactpilot-mark.svg",
      wordmark: "/products/pactpilot-wordmark.svg",
      appIcon: "/products/pactpilot-appicon-1024.png",
      coverWide: "/products/pactpilot-cover-wide.webp",
      coverRow: "/products/pactpilot-cover-row.webp",
      key: "#F2C14E",
      ink: "#0B1D2E",
    },
    "covington-sales-academy": {
      name: "Covington Sales Academy",
      mark: "/products/covington-sales-academy-mark.svg",
      wordmark: "/products/covington-sales-academy-wordmark.svg",
      appIcon: "/products/covington-sales-academy-appicon-1024.png",
      coverWide: "/products/covington-sales-academy-cover-wide.webp",
      coverRow: "/products/covington-sales-academy-cover-row.webp",
      key: "#A7C957",
      ink: "#386641",
    },
    "eluvial-academy": {
      name: "Eluvial Academy",
      mark: "/products/eluvial-academy-mark.svg",
      wordmark: "/products/eluvial-academy-wordmark.svg",
      appIcon: "/products/eluvial-academy-appicon-1024.png",
      coverWide: "/products/eluvial-academy-cover-wide.webp",
      coverRow: "/products/eluvial-academy-cover-row.webp",
      key: "#D4A95A",
      ink: "#082C23",
    },
    "covi-buildsim": {
      name: "House Hackers",
      mark: "/products/covi-buildsim-mark.svg",
      wordmark: "/products/covi-buildsim-wordmark.svg",
      appIcon: "/products/covi-buildsim-appicon-1024.png",
      coverWide: "/products/covi-buildsim-cover-wide.webp",
      coverRow: "/products/covi-buildsim-cover-row.webp",
      key: "#E8B23A",
      ink: "#0E1012",
    },
    "cashflow-city-tycoon": {
      name: "Cashflow Tycoon",
      mark: "/products/cashflow-city-tycoon-mark.svg",
      wordmark: "/products/cashflow-city-tycoon-wordmark.svg",
      appIcon: "/products/cashflow-city-tycoon-appicon-1024.png",
      coverWide: "/products/cashflow-city-tycoon-cover-wide.webp",
      coverRow: "/products/cashflow-city-tycoon-cover-row.webp",
      key: "#00C2FF",
      ink: "#0D0F12",
    },
    "brick-by-brick": {
      name: "Brick by Brick",
      mark: "/products/brick-by-brick-mark.svg",
      wordmark: "/products/brick-by-brick-wordmark.svg",
      appIcon: "/products/brick-by-brick-appicon-1024.png",
      coverWide: "/products/brick-by-brick-cover-wide.webp",
      coverRow: "/products/brick-by-brick-cover-row.webp",
      key: "#C8462C",
      ink: "#14110F",
    },
    "constructfi-collections": {
      name: "ConstructFi Collections",
      mark: "/products/constructfi-collections-mark.svg",
      wordmark: "/products/constructfi-collections-wordmark.svg",
      appIcon: "/products/constructfi-collections-appicon-1024.png",
      coverWide: "/products/constructfi-collections-cover-wide.webp",
      coverRow: "/products/constructfi-collections-cover-row.webp",
      key: "#8298FC",
      ink: "#001A38",
    },
  },
} as const;

/** Homepage featured section, in reference order. First entry is the lead card. */
export const HOMEPAGE_FEATURED = [
  "build-or-busted",
  "builderbae",
  "constructos",
  "pactpilot",
] as const;

/** Games strip, in reference order. */
export const HOMEPAGE_GAMES = [
  "covi-buildsim",
  "cashflow-city-tycoon",
  "brick-by-brick",
] as const;

/** Products with no store presence — web-only inside ConstructFi. */
export const WEB_ONLY = ["constructfi-collections"] as const;

export type ProductSlug = keyof typeof BRAND_ASSETS.products;
