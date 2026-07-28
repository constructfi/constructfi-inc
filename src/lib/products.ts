// Single source of truth for every product in the ConstructFi marketplace.
// The marketplace is an app store: this array drives /marketplace, the
// /marketplace/[slug] detail pages, the home app-store section, and /apps.
//
// Compliance rules that shape the copy in this file:
//   - COVI is an ERC-20 utility token, 10B fixed cap, transfer-paused / earn-only.
//     Never describe it with price, return, yield, APY, profit, or investment language.
//   - ELUV is an ERC-5192 soulbound credential: earned only, non-transferable, never sold.
//   - Nothing ships before the September 9, 2026 launch, so no product is described
//     as already downloadable and no status renders as "Live" (see STATUS below).
//   - NFT distribution happens in-app only — no third-party marketplace links.

export type ProductCategory = "apps" | "games" | "materials" | "nfts";

/** `live` means "ships at launch" — see STATUS for the label actually rendered. */
export type ProductStatus = "live" | "coming-soon" | "phase-2";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  /** Extra tabs this product also appears under (Build or Bust is an app and a game). */
  secondaryCategories?: ProductCategory[];
  status: ProductStatus;
  tags: string[];
  shortDescription: string;
  longDescription: string;
  features: string[];
  coviEluvNote: string;
  /** Key into PRODUCT_ICONS in src/components/product-icon.tsx. */
  icon: string;
  featured?: boolean;
};

export const CATEGORIES: { key: ProductCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "apps", label: "Apps" },
  { key: "games", label: "Games" },
  { key: "materials", label: "Materials" },
  { key: "nfts", label: "NFTs" },
];

// Status labels are deliberately not "Live". The platform launches September 9,
// 2026; presenting anything as already shipped would be a false claim.
export const STATUS: Record<ProductStatus, { label: string; chip: string }> = {
  live: { label: "At launch · Sept 9, 2026", chip: "chip live" },
  "coming-soon": { label: "Coming soon", chip: "chip soon" },
  "phase-2": { label: "Phase 2", chip: "chip demo" },
};

export const PRODUCTS: Product[] = [
  {
    slug: "build-or-bust",
    name: "Build or Bust",
    tagline: "Know in 60 seconds, before you fall in love with it.",
    category: "apps",
    secondaryCategories: ["games"],
    status: "live",
    tags: ["Free verdict", "Earn COVI", "Earn ELUV"],
    icon: "gauge",
    featured: true,
    shortDescription:
      "Real-estate deal analyzer. Answer ~12 plain-English questions, get a BUILD / WORK THE DEAL / BUST verdict plus the three numbers that drove it and the price where the deal works.",
    longDescription:
      "Build or Bust is the flagship ConstructFi app: a screening tool that tells you whether a property is worth your time before you spend a weekend on a spreadsheet. You pick what you are trying to do, set the bar you want the deal to clear, answer about twelve plain-English questions, and get a verdict — BUILD, WORK THE DEAL, or BUST — with the three numbers that drove it and the price at which the deal would actually work. The verdict is always free. It is an educational screening estimate built from your own inputs and targets, not investment, lending, or legal advice.",
    features: [
      "60-second verdict, always free — BUILD (go), WORK THE DEAL (pursue with conditions), or BUST (no-go)",
      "Goal-first flow: Hold, Sell, or Hold after building value",
      "Set your bar — Newer or Experienced presets for cash-on-cash %, DSCR, and $/unit targets",
      "The three numbers that drove the verdict, plus the solved price where the deal works",
      "Editable scorecard and proforma you can adjust line by line",
      "Deal-specific coaching lines — “Comp it hard.”, “Underwrite the leases, not the pro forma.”",
      "Deeper analysis, exports, and deal packaging run on COVI — earnable in-app through the Academy",
      "Verified milestones can mint soulbound ELUV credentials",
    ],
    coviEluvNote:
      "The verdict is always free. Deeper analysis, exports, and deal packaging run on COVI, which you earn in-app through the Academy — COVI is a utility token for platform activity, not an investment. Verified milestones can mint ELUV, a soulbound credential that is earned only and can never be transferred or sold.",
  },
  {
    slug: "covi-estimator",
    name: "Covi Estimator",
    tagline: "Takeoffs, bids & material scope.",
    category: "apps",
    status: "coming-soon",
    tags: ["Spend COVI", "Supplier network"],
    icon: "ruler",
    shortDescription:
      "Build fast, accurate takeoffs and bids using Covington supplier pricing. Scope materials, price them against the verified supplier network, and export.",
    longDescription:
      "Covi Estimator turns a scope of work into a priced bid. Build a takeoff, price the materials against the verified Covington supplier network, and export a bid you can hand to a client or a lender. Because the pricing comes from the same supplier operations that run inside the marketplace, the estimate and the eventual procurement stay in the same system.",
    features: [
      "Takeoff builder for materials and labor scope",
      "Supplier pricing drawn from the verified network (Covington supplier pricing · Jun 2026)",
      "Bid export for clients, lenders, and subcontractors",
      "Reusable scope templates for repeat job types",
    ],
    coviEluvNote:
      "Estimator runs on COVI for advanced exports and saved scopes. COVI is earned through platform activity and spent on platform features — it is transfer-paused and earn-only before listing.",
  },
  {
    slug: "readiness-tracker",
    name: "Readiness Tracker",
    tagline: "ELUV milestones & progress.",
    category: "apps",
    status: "coming-soon",
    tags: ["Earn ELUV"],
    icon: "target",
    shortDescription:
      "Track verified readiness milestones across knowledge, procurement, and participation. Each completed milestone can mint a soulbound ELUV credential.",
    longDescription:
      "Readiness Tracker is where progress becomes proof. It maps the milestones that make up readiness — knowledge, procurement, and participation — and shows what you have verified and what is still open. Each completed milestone can mint one ELUV credential, so your record is built from things you actually did rather than things you bought.",
    features: [
      "Milestone map across knowledge, procurement, and participation",
      "Progress meter toward the next verified milestone",
      "ELUV credential history — non-transferable by design",
      "Readiness score derived from non-disputed milestones",
    ],
    coviEluvNote:
      "Every verified milestone can mint one ELUV — an ERC-5192 soulbound credential that is earned only, never sold, and confers no financial rights. Governance weight derives from the count and tier of your non-disputed milestones, with a per-address cap.",
  },
  {
    slug: "covi-wallet",
    name: "Covi Wallet",
    tagline: "COVI & ELUV — non-custodial.",
    category: "apps",
    status: "coming-soon",
    tags: ["COVI & ELUV", "Non-custodial"],
    icon: "wallet",
    shortDescription:
      "Manage COVI and view soulbound ELUV credentials. Non-custodial — your keys, always. Reown · WalletConnect · MetaMask.",
    longDescription:
      "Covi Wallet puts COVI activity and ELUV credentials side by side in one non-custodial view. Connect the wallet you already use — Reown, WalletConnect, or MetaMask — and see your balance, your activity, and the credentials you have earned. ConstructFi never takes custody of your keys and cannot recover them for you.",
    features: [
      "COVI balance and activity history",
      "ELUV credential viewer — soulbound, non-transferable",
      "Connect via Reown, WalletConnect, or MetaMask",
      "Non-custodial by design — your keys never leave your control",
    ],
    coviEluvNote:
      "COVI is transfer-paused and earn-only before listing, so the wallet shows earned balances and platform activity rather than trading. ELUV appears as a credential you hold, not an asset you can move. Verified contract addresses are published after audit — not before.",
  },
  {
    slug: "house-hackers",
    name: "House Hackers",
    tagline: "Learn by playing.",
    category: "games",
    status: "coming-soon",
    tags: ["Earn COVI", "Learn-to-earn"],
    icon: "gamepad",
    shortDescription:
      "A learn-to-earn game that teaches real-estate and readiness concepts through play. Progress engages game mechanics — no promise of return.",
    longDescription:
      "House Hackers teaches the same concepts Build or Bust screens for, but through play. You work scenarios, make calls, and see how they land. Game mechanics exist to make learning engaging — progression is a measure of participation and understanding, never a promise of financial return, and the leaderboards rank engagement rather than money.",
    features: [
      "Scenario challenges built from real underwriting decisions",
      "Learn-to-earn COVI participation rewards",
      "Leaderboards that rank engagement, not financial outcomes",
      "Progress feeds the Readiness Tracker milestone map",
    ],
    coviEluvNote:
      "Participation can earn COVI, the platform's utility token. Game mechanics are for engagement and education only — nothing here is a game of chance, and no outcome implies a financial return.",
  },
  {
    slug: "supplier-marketplace",
    name: "Supplier Marketplace",
    tagline: "Verified suppliers. Real settlement.",
    category: "materials",
    status: "live",
    tags: ["Supplier network", "Earn ELUV", "Spend/Earn COVI"],
    icon: "boxes",
    shortDescription:
      "Procure materials and services from a vetted supplier network. A portion of transaction fees recycles into the COVI rewards pool; verified activity can earn ELUV.",
    longDescription:
      "The Supplier Marketplace is the commerce engine underneath the rest of the platform. Buyers procure materials and services from a vetted network backed by Covington Supply Co.'s roughly $7M of annual operations across six markets. A share of transaction fees recycles into the COVI rewards pool, which is why participation is funded by genuine commerce rather than by printing tokens.",
    features: [
      "Vetted supplier catalog — every supplier reviewed before listing",
      "Bulk procurement and subcontractor coordination",
      "Transparent on-chain settlement",
      "Provenance surfaced at point of purchase — $2.1M+ in sustainable materials sourced to date",
      "Fee-recycling economics: a share of fees funds the COVI rewards pool",
    ],
    coviEluvNote:
      "Eligible purchases can settle in COVI and a share of marketplace fees recycles into the rewards pool. Verified procurement activity can earn ELUV milestones. Contract addresses publish only after independent audit.",
  },
  {
    slug: "collectibles",
    name: "Collectibles & Credentials Layer",
    tagline: "Commemorative collections from real activity.",
    category: "nfts",
    status: "phase-2",
    tags: ["Earn ELUV", "Distributed in-app"],
    icon: "gem",
    shortDescription:
      "The NFT layer that carries ELUV milestones and commemorative collections issued through platform activity. Distribution happens inside ConstructFi — never through third-party listings.",
    longDescription:
      "The collectibles layer is how ELUV milestones and commemorative collections are represented on-chain. Everything here is issued through activity on the platform: you receive a collectible because you did something the platform verified. Distribution happens inside ConstructFi only — there are no third-party marketplace listings, and ELUV credentials themselves remain non-transferable.",
    features: [
      "Milestone-linked collectibles tied to verified progress",
      "Commemorative drops for platform milestones",
      "In-app distribution only — no third-party marketplace listings",
      "ELUV credentials remain soulbound and non-transferable",
    ],
    coviEluvNote:
      "ELUV credentials are ERC-5192 soulbound tokens: earned through verified milestones, never sold, and never transferable. Commemorative collectibles are distributed inside the platform, so there is nothing to bid on elsewhere.",
  },
];

export const FEATURED_PRODUCT =
  PRODUCTS.find((p) => p.featured) ?? PRODUCTS[0];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productsInCategory(category: ProductCategory | "all"): Product[] {
  if (category === "all") return PRODUCTS;
  return PRODUCTS.filter(
    (p) =>
      p.category === category || p.secondaryCategories?.includes(category)
  );
}

/** Up to `limit` other products, preferring the same category. */
export function relatedProducts(slug: string, limit = 3): Product[] {
  const current = getProduct(slug);
  if (!current) return [];
  const others = PRODUCTS.filter((p) => p.slug !== slug);
  const sameCategory = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
