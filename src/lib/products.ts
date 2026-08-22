// Single source of truth for every ConstructFi marketplace listing.
// This catalog reflects the latest approved design/source bundle.

export type ProductCategory =
  | "run"
  | "source"
  | "analyze"
  | "learn"
  | "play"
  | "own";

/** `live` means "ships at launch" — see STATUS for the label actually rendered. */
export type ProductStatus = "live" | "coming-soon" | "phase-2";

export type Product = {
  slug: string;
  mono: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  status: ProductStatus;
  access: string;
  tags: string[];
  shortDescription: string;
  longDescription: string;
  features: string[];
  forWho: string;
  coviEluvNote: string;
  icon: string;
  image?: string;
  imageFocus?: string;
  imageScrim?: boolean;
  featured?: boolean;
  showStoreBadges?: boolean;
};

/** Intrinsic size of every file in public/products/ — set on <Image> to reserve space. */
export const PRODUCT_IMAGE_SIZE = { width: 620, height: 930 } as const;

export const CATEGORIES: { key: ProductCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "run", label: "Run Your Business" },
  { key: "source", label: "Source Materials and Suppliers" },
  { key: "analyze", label: "Analyze Deals and Agreements" },
  { key: "learn", label: "Learn and Build Skills" },
  { key: "play", label: "Play, Practice, and Explore" },
  { key: "own", label: "Own" },
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
    slug: "constructos",
    mono: "OS",
    name: "ConstructOS",
    tagline: "The operating system for construction.",
    category: "run",
    status: "live",
    access: "Enterprise",
    tags: ["Enterprise", "AI workflows", "Shared records"],
    icon: "hub",
    shortDescription:
      "Connects CRM, business development, estimating, procurement, logistics, project management, supplier sourcing, and executive reporting.",
    longDescription:
      "ConstructOS connects CRM, business development, estimating, procurement, logistics, project management, supplier sourcing, and executive reporting. AI-powered insights and automated workflows help contractors and suppliers make better decisions, protect margin, reduce risk, and scale with greater control.",
    features: [
      "CRM and business development in one pipeline",
      "Estimating and procurement wired to supplier sourcing",
      "Logistics and project management on shared records",
      "Executive reporting with AI-powered insight",
      "Automated workflows that protect margin and reduce risk",
    ],
    forWho: "Contractors, suppliers, distributors, and construction executives.",
    coviEluvNote:
      "ConstructOS runs on ConstructFi's shared infrastructure. Where a program calls for it, optional COVI utility and ELUV credential layers can be added after compliance review; nothing on this page implies a token purchase, exchange, or financial return.",
  },
  {
    slug: "build-or-bust",
    mono: "BoB",
    name: "Build or Busted",
    tagline: "Know whether the deal works before you commit.",
    category: "analyze",
    status: "live",
    access: "In ConstructFi · App Store · Google Play",
    tags: ["Flagship", "Analysis", "Preview available"],
    icon: "house",
    image: "/products/build-or-busted.jpg",
    imageScrim: true,
    featured: true,
    showStoreBadges: true,
    shortDescription:
      "An AI-powered deal analysis platform for real estate investors, developers, and lenders.",
    longDescription:
      "An AI-powered deal analysis platform for real estate investors, developers, and lenders. It evaluates acquisition and development opportunities using purchase assumptions, costs, financing, market conditions, and projected returns to deliver a clearer, decision-ready view.",
    features: [
      "Purchase assumptions, costs, and financing in one model",
      "Market conditions factored into the analysis",
      "Projected returns presented decision-ready",
      "Built for acquisition and development opportunities alike",
    ],
    forWho: "Investors, developers, lenders, and real estate entrepreneurs.",
    coviEluvNote:
      "Build or Busted can connect participation to the wider ConstructFi ecosystem, but its public positioning remains educational and utility-first. Any COVI or ELUV involvement is optional, audit-gated, and never presented as an investment, yield, or purchase opportunity.",
  },
  {
    slug: "pactpilot",
    mono: "PP",
    name: "PactPilot",
    tagline: "Contract intelligence for more confident deals.",
    category: "analyze",
    status: "coming-soon",
    access: "In ConstructFi",
    tags: ["Contracts", "Review", "Not legal advice"],
    icon: "contract",
    shortDescription:
      "Review and analyze complex real estate agreements — risks, missing provisions, and negotiation considerations.",
    longDescription:
      "PactPilot helps investors, developers, attorneys, lenders, and joint-venture partners review and analyze complex real estate agreements. It identifies potential risks, missing provisions, negotiation considerations, and areas requiring further review while supporting—not replacing—qualified legal counsel.",
    features: [
      "Flags potential risks across complex agreements",
      "Surfaces missing provisions",
      "Highlights negotiation considerations",
      "Marks areas requiring further review",
      "Supports — never replaces — qualified legal counsel",
    ],
    forWho:
      "Investors, developers, attorneys, lenders, and joint-venture partners.",
    coviEluvNote:
      "PactPilot is a contract-intelligence product, not legal counsel, and it does not add any token requirement to use it. If a partner program later layers in ConstructFi participation, that layer remains optional and compliance-scoped.",
  },
  {
    slug: "covington-sales-academy",
    mono: "CSA",
    name: "Covington Sales Academy",
    tagline: "Build a sales team that knows the industry and wins the work.",
    category: "learn",
    status: "coming-soon",
    access: "Enterprise",
    tags: ["Training", "Coaching", "Enterprise"],
    icon: "megaphone",
    shortDescription:
      "An AI-powered training platform for building-materials professionals, suppliers, sales teams, and entrepreneurs.",
    longDescription:
      "An AI-powered training platform for building-materials professionals, suppliers, sales teams, and entrepreneurs, combining industry-specific content, interactive learning, AI coaching, product knowledge, and practical selling strategies.",
    features: [
      "Industry-specific content built for building materials",
      "Interactive learning with AI coaching",
      "Product-knowledge tracks",
      "Practical selling strategies for real accounts",
    ],
    forWho:
      "Building-materials sales teams, suppliers, manufacturers, distributors, and entrepreneurs.",
    coviEluvNote:
      "Sales Academy can support optional recognition and readiness records, but those layers stay scoped to the program using them. Public participants are never required to connect a wallet simply to access institutional training.",
  },
  {
    slug: "eluvial-academy",
    mono: "EA",
    name: "Eluvial Academy",
    tagline: "Learn the business of real estate ownership.",
    category: "learn",
    status: "coming-soon",
    access: "In ConstructFi",
    tags: ["Education", "Coaching", "Ownership"],
    icon: "cap-arrow",
    shortDescription:
      "Expert-led training, deal-analysis tools, AI-powered resources, coaching, and community for real estate.",
    longDescription:
      "Eluvial Academy gives investors, developers, and entrepreneurs access to expert-led training, deal-analysis tools, AI-powered resources, coaching, and community—from acquisition and financing through development and execution.",
    features: [
      "Expert-led training across the ownership path",
      "Deal-analysis tools alongside the curriculum",
      "AI-powered resources and coaching",
      "Community from acquisition through execution",
    ],
    forWho:
      "Aspiring and experienced real estate investors, developers, and entrepreneurs.",
    coviEluvNote:
      "Eluvial Academy can support earned recognition of progress, but it does not promise access to financial products, returns, or ownership. Any ELUV credentialing remains earned-only, non-transferable, and review-based.",
  },
  {
    slug: "material-marketplace",
    mono: "MM",
    name: "Material Marketplace",
    tagline: "More value from quality materials. Less waste on the jobsite.",
    category: "source",
    status: "live",
    access: "In ConstructFi",
    tags: ["Materials", "Surplus", "Reduced waste"],
    icon: "bag",
    shortDescription:
      "High-quality surplus materials from Covington projects, at below-market access, with less waste.",
    longDescription:
      "Material Marketplace connects small builders, contractors, investors, and property owners with high-quality surplus materials from Covington projects, helping customers access below-market materials while reducing waste.",
    features: [
      "Surplus inventory sourced from Covington projects",
      "Below-market material access",
      "Less jobsite and project waste",
      "Built for smaller crews and single properties",
    ],
    forWho:
      "Contractors, small builders, renovators, investors, and property owners.",
    coviEluvNote:
      "Material Marketplace is presented as a sourcing tool. Any ConstructFi utility or recognition layer stays secondary to the procurement workflow and is never framed as an investment feature.",
  },
  {
    slug: "supplier-marketplace",
    mono: "SM",
    name: "Supplier Marketplace",
    tagline: "Source better. Procure faster. Build stronger supplier relationships.",
    category: "source",
    status: "live",
    access: "Enterprise",
    tags: ["Verified suppliers", "Quotes", "Procurement"],
    icon: "cube",
    image: "/products/supplier-marketplace.jpg",
    imageScrim: true,
    shortDescription:
      "Verified manufacturers, distributors, and specialty suppliers for developers, contractors, and public agencies.",
    longDescription:
      "The Supplier Marketplace connects developers, general contractors, public agencies, and commercial builders with verified manufacturers, distributors, and specialty suppliers. Buyers can source scopes, compare vendors, request quotes, manage procurement, and track orders.",
    features: [
      "Source complete scopes rather than loose line items",
      "Compare vendors side by side",
      "Request and manage quotes",
      "Procurement management and order tracking",
      "Verified manufacturers, distributors, and specialty suppliers",
    ],
    forWho:
      "Developers, general contractors, agencies, commercial builders, manufacturers, distributors, and specialty suppliers.",
    coviEluvNote:
      "Supplier Marketplace is a procurement product first. Optional ConstructFi participation layers may recognize eligible activity, but public agencies and institutional users can deploy supplier workflows with no token requirement.",
  },
  {
    slug: "house-hackers",
    mono: "HH",
    name: "House Hackers",
    tagline: "From renter to investor, one decision at a time.",
    category: "play",
    status: "coming-soon",
    access: "App Store · Google Play",
    tags: ["Simulation", "Learning", "Real estate"],
    icon: "gamepad",
    image: "/products/house-hackers.jpg",
    imageScrim: true,
    showStoreBadges: true,
    shortDescription:
      "A real estate simulation game about credit, debt, renovations, acquisitions, and cash flow.",
    longDescription:
      "A real estate simulation game where players manage credit, debt, renovations, property acquisitions, and cash flow on the path from renter to investor.",
    features: [
      "Credit and debt decisions with consequences",
      "Renovation and acquisition scenarios",
      "Cash-flow management under pressure",
      "A progression from renter to investor",
    ],
    forWho:
      "Future builders, new investors, and anyone learning the fundamentals through play.",
    coviEluvNote:
      "House Hackers is an educational game. It does not promise financial outcomes, and any ConstructFi recognition or utility layer remains optional, controlled, and subordinate to the learning experience.",
  },
  {
    slug: "cashflow-tycoon",
    mono: "CT",
    name: "Cashflow Tycoon",
    tagline: "Build the city, build the business.",
    category: "play",
    status: "coming-soon",
    access: "App Store · Google Play",
    tags: ["City builder", "Entrepreneurship", "Learning"],
    icon: "skyline",
    showStoreBadges: true,
    shortDescription:
      "A construction and city-building adventure combining upgrades, obstacles, entrepreneurship, and community-building.",
    longDescription:
      "A construction and city-building adventure combining project upgrades, obstacle challenges, entrepreneurship, and community-building.",
    features: [
      "Project upgrade paths",
      "Obstacle challenges",
      "Entrepreneurship mechanics",
      "Community-building objectives",
    ],
    forWho: "Players learning construction and business concepts through gameplay.",
    coviEluvNote:
      "Cashflow Tycoon uses gameplay to teach concepts; it does not create a wallet, token purchase, or return expectation by default. Any future ConstructFi participation layer remains optional and clearly disclosed.",
  },
  {
    slug: "brick-by-brick",
    mono: "BXB",
    name: "Brick by Brick",
    tagline: "Construction concepts, one puzzle at a time.",
    category: "play",
    status: "coming-soon",
    access: "App Store · Google Play",
    tags: ["Puzzle", "Concepts", "Learning"],
    icon: "brick",
    showStoreBadges: true,
    shortDescription:
      "A collection of puzzle games that makes construction, development, financing, and investing approachable.",
    longDescription:
      "A collection of puzzle games that makes construction, development, financing, and real estate investing approachable through interactive challenges.",
    features: [
      "Short-form puzzle challenges",
      "Development and financing concepts made concrete",
      "Approachable entry point for new learners",
    ],
    forWho:
      "Newcomers to construction, development, and real estate investing.",
    coviEluvNote:
      "Brick by Brick is an educational puzzle experience. It does not imply a financial product, investment return, or live token exchange, and any optional recognition layer must remain clearly separated from gameplay.",
  },
  {
    slug: "collectibles",
    mono: "NFT",
    name: "Digital Collectibles",
    tagline: "Listed on OpenSea, not in-app.",
    category: "own",
    status: "phase-2",
    access: "OpenSea",
    tags: ["NFT", "OpenSea", "Phase 2"],
    icon: "gem",
    shortDescription:
      "All ConstructFi NFT collections are minted and traded on OpenSea rather than sold directly through this marketplace. ELUV credentials are a separate, non-transferable category and are never listed here.",
    longDescription:
      "All ConstructFi NFT collections are minted and traded on OpenSea rather than sold directly through this marketplace. ELUV credentials are a separate, non-transferable category and are never listed here.",
    features: [
      "All ConstructFi NFT collections are minted and traded on OpenSea",
      "NFT collections are not sold directly through this marketplace",
      "ELUV credentials are a separate, non-transferable category",
      "ELUV credentials are never listed here",
    ],
    forWho: "Collectors exploring optional ConstructFi NFT collections.",
    coviEluvNote:
      "NFT collectibles are optional and separate from ELUV. Nothing here changes the rule that public programs, agencies, nonprofits, and institutional paths can operate with no wallet or token requirement.",
  },
];

export const FEATURED_PRODUCT =
  PRODUCTS.find((p) => p.featured) ?? PRODUCTS[0];

export const LEGACY_PRODUCT_SLUGS: Record<string, string> = {
  revenueos: "constructos",
  "covi-estimator": "pactpilot",
  "readiness-tracker": "eluvial-academy",
  "covi-wallet": "collectibles",
  "sales-academy": "covington-sales-academy",
  "cashflow-city-tycoon": "cashflow-tycoon",
  "covi-buildsim": "house-hackers",
  builderbae: "material-marketplace",
};

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function resolveProductSlug(slug: string): string {
  return LEGACY_PRODUCT_SLUGS[slug] ?? slug;
}

export function productsInCategory(category: ProductCategory | "all"): Product[] {
  if (category === "all") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}

/** Up to `limit` other products, preferring the same category. */
export function relatedProducts(slug: string, limit = 3): Product[] {
  const current = getProduct(resolveProductSlug(slug));
  if (!current) return [];
  const others = PRODUCTS.filter((p) => p.slug !== current.slug && p.slug !== "collectibles");
  const sameCategory = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}
