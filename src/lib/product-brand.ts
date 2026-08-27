/**
 * Product brand configuration — typed mapping from product slug to brand data.
 *
 * This file is documentation and configuration only. It does not alter live
 * routes, page copy, wallet/Web3 behavior, environment variables,
 * infrastructure, token mechanics, or production deployments.
 *
 * All existing product content in src/lib/products.ts remains backward-
 * compatible. This file adds brand metadata alongside those definitions
 * without modifying the Product type or PRODUCTS array.
 *
 * Compliance notes (inherited from products.ts):
 *   - COVI is an ERC-20 utility token. Never investment, yield, or trading language.
 *   - ELUV is an ERC-5192 soulbound credential: earned only, non-transferable, never sold.
 *   - See docs/brand/PRODUCT_BRAND_STANDARDS.md §8 for full COVI/ELUV guardrails.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/**
 * Tone/voice persona used in copy decisions.
 * Each value maps to the guidelines in PRODUCT_BRAND_STANDARDS.md §6.
 */
export type BrandTone =
  | "operational-executive"
  | "direct-analytical"
  | "precise-trusted"
  | "helpful-value-led"
  | "reliable-commercial"
  | "practical-motivating"
  | "aspirational-grounded"
  | "playful-educational"
  | "energetic-youth"
  | "welcoming-confidence"
  | "useful-transparent"
  | "earned-credible";

/**
 * Visual treatment category indicating the dominant design approach.
 */
export type VisualTreatment =
  | "dashboard-executive"
  | "verdict-analytical"
  | "document-risk"
  | "inventory-jobsite"
  | "network-commercial"
  | "coaching-certification"
  | "pathway-progress"
  | "simulation-game"
  | "city-build-game"
  | "modular-block-game"
  | "token-utility"
  | "credential-badge";

/**
 * Preferred primary CTA text for a given availability state.
 * Must not imply the product is already shipped before Sept 9, 2026.
 */
export type PrimaryCTA = "Learn more" | "Join waitlist" | "Explore Phase 2";

/**
 * Canonical availability label rendered in cards and detail pages.
 * Mirrors STATUS labels from src/lib/products.ts.
 */
export type AvailabilityLanguage =
  | "At launch · Sept 9, 2026"
  | "Coming soon"
  | "Phase 2";

/**
 * Brand data record for a single product.
 *
 * Color values are CSS hex strings.
 * Icon/motif identifiers key into PRODUCT_ICONS in src/components/product-icon.tsx.
 * Asset paths reference files under /public/ — paths are only included
 * when the asset is confirmed to exist; see docs/brand/PRODUCT_BRAND_STANDARDS.md §10.
 */
export type ProductBrand = {
  /** Product slug — matches the `slug` field in src/lib/products.ts PRODUCTS array. */
  slug: string;
  /** Primary accent color (hex). */
  accent: string;
  /** Secondary accent color (hex). */
  accentSecondary: string;
  /** Icon/motif identifier (keys into PRODUCT_ICONS). */
  iconMotif: string;
  /** Visual treatment category. */
  visualTreatment: VisualTreatment;
  /** Tone/voice persona. */
  tone: BrandTone;
  /** Primary target audience description. */
  audience: string;
  /** Preferred primary CTA text. */
  primaryCTA: PrimaryCTA;
  /** Canonical availability label. */
  availabilityLanguage: AvailabilityLanguage;
  /** Master-brand endorsement line (always "Part of the ConstructFi ecosystem"). */
  ecosystemLabel: "Part of the ConstructFi ecosystem";
  /**
   * Path to the confirmed illustration asset under /public/.
   * Omitted when the asset does not yet exist — see §10 missing-assets checklist.
   */
  assetPath?: string;
};

// ---------------------------------------------------------------------------
// Brand data — existing product slugs
// ---------------------------------------------------------------------------

/**
 * Brand configurations for all products currently defined in products.ts,
 * plus forward-declared entries for brand-portfolio products whose slugs
 * are recommended but not yet present in products.ts.
 *
 * Products whose slugs do not yet exist in products.ts are marked with a
 * comment noting they are "pending products.ts entry". They are included
 * here so that the brand config is complete; adding the matching Product
 * entry to products.ts will activate them without requiring changes here.
 */
export const PRODUCT_BRANDS: ProductBrand[] = [
  // ── Existing products (slugs present in products.ts) ──────────────────────

  {
    slug: "constructos",
    accent: "#0D1B2A",
    accentSecondary: "#00A896",
    iconMotif: "briefcase",
    visualTreatment: "dashboard-executive",
    tone: "operational-executive",
    audience: "Contractors, GCs, and suppliers running an active book of work",
    primaryCTA: "Learn more",
    availabilityLanguage: "At launch · Sept 9, 2026",
    ecosystemLabel: "Part of the ConstructFi ecosystem",
    // No illustration asset confirmed for revenueos — see §10 missing-assets checklist
  },

  {
    slug: "build-or-bust",
    accent: "#00A896",
    accentSecondary: "#E63946",
    iconMotif: "gauge",
    visualTreatment: "verdict-analytical",
    tone: "direct-analytical",
    audience: "Investors, developers, and first-time buyers evaluating a deal",
    primaryCTA: "Learn more",
    availabilityLanguage: "At launch · Sept 9, 2026",
    ecosystemLabel: "Part of the ConstructFi ecosystem",
    assetPath: "/products/build-or-bust.webp",
  },

  {
    slug: "covi-estimator",
    accent: "#2B6CB0",
    accentSecondary: "#718096",
    iconMotif: "ruler",
    visualTreatment: "inventory-jobsite",
    tone: "reliable-commercial",
    audience: "Contractors and estimators scoping materials and bids",
    primaryCTA: "Join waitlist",
    availabilityLanguage: "Coming soon",
    ecosystemLabel: "Part of the ConstructFi ecosystem",
    assetPath: "/products/covi-estimator.webp",
  },

  {
    slug: "readiness-tracker",
    accent: "#1B4332",
    accentSecondary: "#A0522D",
    iconMotif: "target",
    visualTreatment: "pathway-progress",
    tone: "aspirational-grounded",
    audience:
      "Aspiring property owners and platform members tracking readiness milestones",
    primaryCTA: "Join waitlist",
    availabilityLanguage: "Coming soon",
    ecosystemLabel: "Part of the ConstructFi ecosystem",
    assetPath: "/products/readiness-tracker.webp",
  },

  {
    slug: "covi-wallet",
    accent: "#D4A017",
    accentSecondary: "#00A896",
    iconMotif: "wallet",
    visualTreatment: "token-utility",
    tone: "useful-transparent",
    audience: "Platform participants managing COVI activity and ELUV credentials",
    primaryCTA: "Join waitlist",
    availabilityLanguage: "Coming soon",
    ecosystemLabel: "Part of the ConstructFi ecosystem",
    assetPath: "/products/covi-wallet.webp",
  },

  {
    slug: "house-hackers",
    accent: "#00A896",
    accentSecondary: "#D4A017",
    iconMotif: "gamepad",
    visualTreatment: "simulation-game",
    tone: "playful-educational",
    audience: "Learners at any experience level; existing platform members",
    primaryCTA: "Join waitlist",
    availabilityLanguage: "Coming soon",
    ecosystemLabel: "Part of the ConstructFi ecosystem",
    assetPath: "/products/house-hackers.webp",
  },

  {
    slug: "supplier-marketplace",
    accent: "#2B6CB0",
    accentSecondary: "#718096",
    iconMotif: "boxes",
    visualTreatment: "network-commercial",
    tone: "reliable-commercial",
    audience: "Contractors, GCs, and developers procuring at scale",
    primaryCTA: "Learn more",
    availabilityLanguage: "At launch · Sept 9, 2026",
    ecosystemLabel: "Part of the ConstructFi ecosystem",
    assetPath: "/products/supplier-marketplace.webp",
  },

  {
    slug: "collectibles",
    accent: "#3D405B",
    accentSecondary: "#8D99AE",
    iconMotif: "gem",
    visualTreatment: "credential-badge",
    tone: "earned-credible",
    audience: "ConstructFi community members and NFT collectors",
    primaryCTA: "Explore Phase 2",
    availabilityLanguage: "Phase 2",
    ecosystemLabel: "Part of the ConstructFi ecosystem",
    assetPath: "/products/collectibles.webp",
  },

  {
    slug: "sales-academy",
    accent: "#2D6A4F",
    accentSecondary: "#D4A017",
    iconMotif: "graduation",
    visualTreatment: "coaching-certification",
    tone: "practical-motivating",
    audience: "New and developing construction sales representatives",
    primaryCTA: "Join waitlist",
    availabilityLanguage: "Coming soon",
    ecosystemLabel: "Part of the ConstructFi ecosystem",
    // No illustration asset confirmed for sales-academy — see §10 missing-assets checklist
  },

  {
    slug: "material-marketplace",
    accent: "#2B6CB0",
    accentSecondary: "#718096",
    iconMotif: "package",
    visualTreatment: "network-commercial",
    tone: "reliable-commercial",
    audience: "Contractors sourcing division-organized material packages",
    primaryCTA: "Learn more",
    availabilityLanguage: "At launch · Sept 9, 2026",
    ecosystemLabel: "Part of the ConstructFi ecosystem",
    // No illustration asset confirmed for material-marketplace — see §10 missing-assets checklist
  },

  // ── Pending products.ts entry (brand-portfolio products not yet in products.ts) ─

  /**
   * PactPilot — recommended slug: "pact-pilot"
   * Not yet in products.ts. Add a Product entry there to activate this brand config.
   */
  {
    slug: "pact-pilot",
    accent: "#3D405B",
    accentSecondary: "#8D99AE",
    iconMotif: "file-contract",
    visualTreatment: "document-risk",
    tone: "precise-trusted",
    audience: "Contractors, lenders, and legal reviewers managing contracts",
    primaryCTA: "Join waitlist",
    availabilityLanguage: "Coming soon",
    ecosystemLabel: "Part of the ConstructFi ecosystem",
  },

  /**
   * BuilderBae — recommended slug: "builder-bae"
   * Not yet in products.ts. Add a Product entry there to activate this brand config.
   */
  {
    slug: "builder-bae",
    accent: "#F4A261",
    accentSecondary: "#00A896",
    iconMotif: "hard-hat",
    visualTreatment: "inventory-jobsite",
    tone: "helpful-value-led",
    audience: "Jobsite buyers, small contractors, and owner-builders",
    primaryCTA: "Join waitlist",
    availabilityLanguage: "Coming soon",
    ecosystemLabel: "Part of the ConstructFi ecosystem",
  },

  /**
   * Eluvial Academy — recommended slug: "eluvial-academy"
   * Not yet in products.ts. Add a Product entry there to activate this brand config.
   */
  {
    slug: "eluvial-academy",
    accent: "#1B4332",
    accentSecondary: "#A0522D",
    iconMotif: "pathway",
    visualTreatment: "pathway-progress",
    tone: "aspirational-grounded",
    audience:
      "Aspiring property owners, first-time buyers, and community education participants",
    primaryCTA: "Join waitlist",
    availabilityLanguage: "Coming soon",
    ecosystemLabel: "Part of the ConstructFi ecosystem",
  },

  /**
   * Cashflow City Tycoon — recommended slug: "cashflow-city-tycoon"
   * Not yet in products.ts. Add a Product entry there to activate this brand config.
   */
  {
    slug: "cashflow-city-tycoon",
    accent: "#2B6CB0",
    accentSecondary: "#F4A261",
    iconMotif: "city",
    visualTreatment: "city-build-game",
    tone: "energetic-youth",
    audience: "Younger players and property-curious beginners",
    primaryCTA: "Join waitlist",
    availabilityLanguage: "Coming soon",
    ecosystemLabel: "Part of the ConstructFi ecosystem",
  },

  /**
   * Brick by Brick — recommended slug: "brick-by-brick"
   * Not yet in products.ts. Add a Product entry there to activate this brand config.
   */
  {
    slug: "brick-by-brick",
    accent: "#9B2335",
    accentSecondary: "#0D1B2A",
    iconMotif: "blocks",
    visualTreatment: "modular-block-game",
    tone: "welcoming-confidence",
    audience: "New entrants, beginners, and community education participants",
    primaryCTA: "Join waitlist",
    availabilityLanguage: "Coming soon",
    ecosystemLabel: "Part of the ConstructFi ecosystem",
  },
];

// ---------------------------------------------------------------------------
// Lookup helpers
// ---------------------------------------------------------------------------

/**
 * Look up brand data by product slug.
 * Returns undefined if the slug has no brand entry yet.
 */
export function getProductBrand(slug: string): ProductBrand | undefined {
  if (slug === "revenueos") return PRODUCT_BRANDS.find((b) => b.slug === "constructos");
  if (slug === "build-or-busted") {
    return PRODUCT_BRANDS.find((b) => b.slug === "build-or-bust");
  }
  return PRODUCT_BRANDS.find((b) => b.slug === slug);
}
