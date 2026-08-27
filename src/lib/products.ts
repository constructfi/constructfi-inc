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
  /**
   * Illustrative 900x1350 preview render in public/products/. These are brand
   * artwork, not screenshots of a shipped app, so every surface that shows one
   * labels it as an illustrative preview.
   */
  image?: string;
  /**
   * `object-position` for the cropped card thumbnail. The renders differ in where
   * the meaningful artwork sits, and the crop must not frame a product around
   * money imagery — see the House Hackers entry.
   */
  imageFocus?: string;
  featured?: boolean;
};

/** Intrinsic size of every file in public/products/ — set on <Image> to reserve space. */
export const PRODUCT_IMAGE_SIZE = { width: 900, height: 1350 } as const;

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
    name: "Build or Busted",
    tagline: "Know in 60 seconds, before you fall in love with it.",
    category: "apps",
    secondaryCategories: ["games"],
    status: "live",
    tags: ["Free verdict", "Guided analysis", "Progress milestones"],
    icon: "gauge",
    image: "/products/build-or-bust.webp",
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
    tags: ["Supplier network", "Bid workflows"],
    icon: "ruler",
    image: "/products/covi-estimator.webp",
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
    tags: ["Progress milestones", "Readiness tracking"],
    icon: "target",
    image: "/products/readiness-tracker.webp",
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
    tagline: "Utility activity + credentials — non-custodial.",
    category: "apps",
    status: "coming-soon",
    tags: ["Utility activity", "Non-custodial"],
    icon: "wallet",
    image: "/products/covi-wallet.webp",
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
    name: "Covi BuildSim: House Hackers",
    tagline: "Learn by playing.",
    category: "games",
    status: "coming-soon",
    tags: ["Simulation learning", "Participation milestones"],
    icon: "gamepad",
    image: "/products/house-hackers.webp",
    shortDescription:
      "A learn-to-earn game that teaches real-estate and readiness concepts through play. Progress engages game mechanics — no promise of return.",
    longDescription:
      "House Hackers teaches the same concepts Build or Bust screens for, but through play. You work scenarios, make calls, and see how they land. Game mechanics exist to make learning engaging — progression is a measure of participation and understanding, never a promise of financial return, and the leaderboards rank engagement rather than money.",
    features: [
      "Scenario challenges built from real underwriting decisions",
      "Participation milestones tied to verified learning progression",
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
    tags: ["Supplier network", "Verified participation", "On-chain settlement"],
    icon: "boxes",
    image: "/products/supplier-marketplace.webp",
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
    name: "Digital Collectibles",
    tagline: "Phase 2 digital collectibles.",
    category: "nfts",
    status: "phase-2",
    tags: ["NFT", "Phase 2"],
    icon: "gem",
    image: "/products/collectibles.webp",
    shortDescription:
      "Digital collectibles are planned for a later phase. They remain separate from ELUV credentials, which are non-transferable readiness records.",
    longDescription:
      "Digital collectibles are planned for a later phase. This page does not represent a live sale surface.",
    features: [
      "Digital collectibles are planned for a later phase",
      "Collectibles are not represented as currently available for purchase",
      "ELUV credentials are a separate, non-transferable category",
      "ELUV credentials are never listed here",
    ],
    coviEluvNote:
      "Digital collectibles remain a separate Phase 2 surface. ELUV stays a non-transferable credential and is never represented as a collectible.",
  },
  {
    slug: "constructos",
    name: "ConstructOS",
    tagline: "The revenue OS for construction.",
    category: "apps",
    status: "live",
    tags: ["Business operations", "Executive workflows"],
    icon: "briefcase",
    shortDescription:
      "An AI-assisted revenue and business-development workspace that connects sales, estimating, procurement, logistics, and executive reporting into one system.",
    longDescription:
      "RevenueOS is the business-operations app for contractors and suppliers who are running a real book of work. It connects sales, estimating, procurement, logistics, and executive reporting into a single workspace, so a bid, the materials behind it, and the job it becomes stay attached to the same record. Every module shares the platform's identity, AI, and reporting layer, which is why a number on the executive dashboard traces back to the workflow that produced it rather than to a manual reconciliation.",
    features: [
      "Executive Command Center — one operating view across pipeline, jobs, and reporting",
      "Construction CRM for contacts, bids, and job history",
      "Business Development Intelligence for opportunity discovery and scoring",
      "Estimating and Procurement hubs wired to the verified supplier network",
      "Logistics Hub for scheduling, dispatch, and delivery tracking",
      "Executive AI Advisor for natural-language reporting across your own data",
    ],
    coviEluvNote:
      "Advanced automation and exports run on COVI, the platform's utility token — earned through platform activity and spent on platform features. COVI is transfer-paused and earn-only before listing, and it is not an investment.",
  },
  {
    slug: "sales-academy",
    name: "Covington Sales Academy",
    tagline: "Certification-grade sales onboarding.",
    category: "apps",
    status: "coming-soon",
    tags: ["Education", "Defined program"],
    icon: "graduation",
    shortDescription:
      "A structured sales onboarding, coaching, and performance program that runs on RevenueOS. Verified completions can mint soulbound ELUV credentials.",
    longDescription:
      "The Academy is how someone new to construction sales gets to competent on a schedule rather than by osmosis. It runs on RevenueOS, so onboarding tracks, role-play coaching, and scorecards read from the same records a rep works in every day. Completions are reviewed rather than self-reported, and a verified certification milestone can mint one soulbound ELUV credential — a record of work that was actually done and checked.",
    features: [
      "Guided onboarding tracks that sequence what to learn and when",
      "AI role-play coaching against realistic buyer objections",
      "Performance scorecards drawn from RevenueOS activity",
      "Certification milestones reviewed before they count",
      "Verified completion can mint a soulbound ELUV credential",
    ],
    coviEluvNote:
      "Verified completions can mint ELUV, an ERC-5192 soulbound credential that is earned only, never transferable, and never sold. Any COVI involved is a utility token for platform activity — transfer-paused and earn-only before listing, and not an investment.",
  },
  {
    slug: "pact-pilot",
    name: "PactPilot",
    tagline: "Contract and document workflows with risk-layer context.",
    category: "apps",
    status: "coming-soon",
    tags: ["Document workflows", "Risk-layer context"],
    icon: "briefcase",
    shortDescription:
      "A contract and document workspace for construction teams that need consistent records and risk-aware review context.",
    longDescription:
      "PactPilot provides a structured place for contract packets, revisions, and review checkpoints so teams can track what changed and what still needs decisions. It is presented as a coming-soon workflow surface, not as a live legal, settlement, or signature system.",
    features: [
      "Structured document packets with clear revision history",
      "Risk-layer overlays to flag items for follow-up review",
      "Role-based review checkpoints for internal coordination",
      "Linkage to related ConstructOS project records",
    ],
    coviEluvNote:
      "PactPilot can be used without token flows by default. Any future COVI usage remains utility-only for platform actions, and ELUV remains a non-transferable credential for verified milestones.",
  },
  {
    slug: "builder-bae",
    name: "BuilderBae",
    tagline: "Material and inventory companion for jobsite buyers.",
    category: "apps",
    status: "coming-soon",
    tags: ["Inventory companion", "Jobsite planning"],
    icon: "package",
    shortDescription:
      "A practical planning companion focused on material visibility and everyday inventory decisions for smaller jobsite teams.",
    longDescription:
      "BuilderBae is designed as a warm, practical companion for buyers who need a simpler way to track material needs and organize procurement intent before purchase. It is a coming-soon planning surface and does not claim live supplier integrations or real-time settlement.",
    features: [
      "Material-list organization by job or scope",
      "Inventory-style views for planning and prep",
      "Checklist-driven handoff into procurement workflows",
      "Simple progress states for team coordination",
    ],
    coviEluvNote:
      "BuilderBae is token-optional by default. If COVI or ELUV appears in later phases, usage stays utility-and-credential only under existing platform guardrails.",
  },
  {
    slug: "eluvial-academy",
    name: "Eluvial Academy",
    tagline: "Property-readiness pathways with milestone-based progress.",
    category: "apps",
    status: "coming-soon",
    tags: ["Education pathways", "Milestone progress"],
    icon: "graduation",
    shortDescription:
      "A structured education pathway for readiness concepts, built around defined milestones and practical next steps.",
    longDescription:
      "Eluvial Academy organizes readiness education into sequenced pathways so participants can move from fundamentals to more advanced property concepts with clear checkpoints. It is positioned as a coming-soon learning surface with milestone progress, not a promise of financial outcomes.",
    features: [
      "Sequential readiness pathways by learning stage",
      "Milestone map with progress checkpoints",
      "Practical exercises tied to defined program outcomes",
      "Optional handoff into broader ConstructFi participation surfaces",
    ],
    coviEluvNote:
      "ELUV remains a non-transferable credential for verified milestones only. COVI remains a utility token for platform activity and is never described as an investment.",
  },
  {
    slug: "cashflow-city-tycoon",
    name: "Cashflow City Tycoon",
    tagline: "City-building progression game for property-curious learners.",
    category: "games",
    status: "coming-soon",
    tags: ["City-building simulation", "Progression gameplay"],
    icon: "gamepad",
    shortDescription:
      "A progression-first city-building game introducing construction and cashflow concepts through guided play loops.",
    longDescription:
      "Cashflow City Tycoon presents construction and operating tradeoffs through city-building progression, with each stage focused on decision quality and learning feedback. It is a coming-soon educational game surface and does not represent real investment returns or trading outcomes.",
    features: [
      "District-by-district city progression loops",
      "Scenario choices with immediate learning feedback",
      "Beginner-friendly ramp for property-curious players",
      "Optional cross-links to readiness education pathways",
    ],
    coviEluvNote:
      "Participation language remains educational and utility-focused only. Any future token interactions stay under the existing COVI utility and ELUV credential guardrails.",
  },
  {
    slug: "brick-by-brick",
    name: "Brick by Brick",
    tagline: "Modular puzzle play for construction fundamentals.",
    category: "games",
    status: "coming-soon",
    tags: ["Modular puzzle", "Beginner on-ramp"],
    icon: "gamepad",
    shortDescription:
      "A modular puzzle-format game that introduces construction and property concepts step by step for beginners.",
    longDescription:
      "Brick by Brick uses approachable puzzle patterns to teach foundational construction ideas in short, confidence-building sessions. It is a coming-soon beginner on-ramp and does not make claims about investment, yield, or guaranteed rewards.",
    features: [
      "Modular puzzle tracks with progressive difficulty",
      "Foundational concept prompts tied to each level",
      "Short-session format designed for new entrants",
      "Clear progression checkpoints without financial claims",
    ],
    coviEluvNote:
      "Any participation pathways remain optional and utility-focused. ELUV references stay limited to verified, non-transferable credential milestones.",
  },
  {
    slug: "material-marketplace",
    name: "Material Marketplace",
    tagline: "Division-based material packages from vetted manufacturers.",
    category: "materials",
    status: "live",
    tags: ["Supplier network", "Defined procurement flow"],
    icon: "package",
    shortDescription:
      "A sourcing exchange for division-organized material packages from vetted manufacturers, connected to the same verified supplier operations behind the Supplier Marketplace.",
    longDescription:
      "Material Marketplace organizes sourcing the way a construction schedule already does: by division. Instead of hunting line items one at a time, you work from curated packages assembled with vetted manufacturers, so a division's materials arrive as a coherent scope. It sits alongside the Supplier Marketplace rather than replacing it — Material Marketplace is the curated manufacturer-package layer, while the Supplier Marketplace is the broader procurement and settlement engine those packages flow through.",
    features: [
      "Packages organized by construction division rather than loose line items",
      "Vetted manufacturers reviewed before their packages are listed",
      "Package-level bulk pricing for repeat scopes",
      "Connects straight through to procurement and settlement",
      "Provenance surfaced at the point of purchase",
    ],
    coviEluvNote:
      "Eligible activity can involve COVI, the platform's utility token — transfer-paused and earn-only before listing, and not an investment. Verified contract addresses are published only after independent audit.",
  },
];

export const FEATURED_PRODUCT =
  PRODUCTS.find((p) => p.featured) ?? PRODUCTS[0];

const PRODUCT_SLUG_ALIASES: Record<string, string> = {
  revenueos: "constructos",
  "build-or-busted": "build-or-bust",
};

export function getProduct(slug: string): Product | undefined {
  const normalized = PRODUCT_SLUG_ALIASES[slug] ?? slug;
  return PRODUCTS.find((p) => p.slug === normalized);
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
  const others = PRODUCTS.filter((p) => p.slug !== current.slug);
  const sameCategory = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
