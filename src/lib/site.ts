// Single source of truth for canonical stats, tokenomics, and site metadata.
// Reconcile ALL numbers here (spec §Canonical stat set + LAUNCH BLOCKERS 1 & 2).

export const SITE = {
  name: "ConstructFi",
  tagline: "COVI moves. ELUV proves.",
  subtagline: "From participation to ownership.",
  description:
    "A programmable economic-participation platform built on real operations. COVI moves. ELUV proves.",
  url: "https://constructfi.co",
  launchDate: "September 9, 2026",
  founder: "DaBrielle Goodwin",
  githubRepo: "https://github.com/constructfi/constructfi-inc",
  whitepaperVersion: "2.1",
  whitepaperDate: "July 2026",
} as const;

// Canonical stat set — reuse everywhere.
export const STATS = [
  { value: "$60M+", label: "Development activity", sub: "via Eluvial Enterprise Inc." },
  { value: "~$7M", label: "Annual supply operations", sub: "via Covington Supply Co." },
  { value: "$2.1M+", label: "Sustainable materials", sub: "sourced to date" },
  { value: "8", label: "Verticals", sub: "coordinated by two tokens" },
  { value: "6", label: "Active markets", sub: "DC · VA · MD · NC · FL · MO" },
  { value: "2014", label: "Broker licensed", sub: "founder, real estate (DC)" },
] as const;

export const MARKETS = ["DC", "VA", "MD", "NC", "FL", "MO"] as const;

// COVI — ERC-20 utility token (CORRECT, keep).
export const COVI = {
  name: "COVI",
  role: "Commerce & rewards — spendable",
  standard: "Ethereum ERC-20",
  chain: "Built on Base, settled to Ethereum",
  supply: "10,000,000,000",
  supplyNote: "Fixed cap",
  composition: "ERC20 · Capped · Burnable · Permit · Pausable",
  howObtained: "Earned · limited compliant sale (KYC/AML)",
  largestAllocation: "Ecosystem & participation rewards — 35%",
  rewardFunding: "Declining emissions + 20% fee recycling",
  isInvestment: false,
} as const;

// ELUV — ERC-5192 SOULBOUND NFT (CORRECTED — was wrongly ERC-20/3B).
export const ELUV = {
  name: "ELUV",
  role: "Readiness & governance credential — proof",
  standard: "ERC-5192 (Minimal Soulbound) over ERC-721",
  fungible: "Non-fungible · non-transferable",
  supply: "No fixed supply",
  supplyNote: "One token minted per verified milestone",
  howObtained: "Earned only — verified progression. Never sold, never transferable.",
  whatItDoes: "Unlocks access · governs · proves",
  governance:
    "Governance weight derives from the count and tier of non-disputed milestones, with a per-address cap.",
} as const;

// COVI allocation — must sum to 100% / 10B.
export const COVI_ALLOCATION = [
  { name: "Ecosystem & participation rewards", pct: 35, tokens: "3.50B", vesting: "Declining emission schedule to RewardsDistributor" },
  { name: "Token sale (private + public)", pct: 15, tokens: "1.50B", vesting: "KYC/AML-gated; lockups per tranche" },
  { name: "Treasury / reserve", pct: 15, tokens: "1.50B", vesting: "Timelock + multisig; governance-controlled" },
  { name: "Team & core contributors", pct: 15, tokens: "1.50B", vesting: "12-mo cliff, then 36–48-mo linear" },
  { name: "Liquidity & market making", pct: 10, tokens: "1.00B", vesting: "Unlockable near launch (only large launch unlock)" },
  { name: "Partnerships & institutional", pct: 5, tokens: "0.50B", vesting: "Milestone / linear per agreement" },
  { name: "Community / airdrop", pct: 3, tokens: "0.30B", vesting: "Consent-based claim; anti-Sybil checks" },
  { name: "Advisors", pct: 2, tokens: "0.20B", vesting: "Cliff + linear" },
] as const;

export const NAV_LINKS = [
  { href: "/whitepaper", label: "Whitepaper" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/app", label: "Build or Bust" },
  { href: "/developers", label: "Developers" },
  { href: "/security", label: "Security" },
  { href: "/partners", label: "Partners" },
  { href: "/funders", label: "Funders" },
] as const;

export const FOOTER_LINKS = {
  Platform: [
    { href: "/marketplace", label: "Marketplace" },
    { href: "/app", label: "Build or Bust" },
    { href: "/developers", label: "Developers" },
    { href: "/security", label: "Security" },
  ],
  Ecosystem: [
    { href: "/partners", label: "Partners" },
    { href: "/funders", label: "Funders" },
    { href: "/resources", label: "Resources" },
    { href: "/whitepaper", label: "Whitepaper" },
  ],
  Company: [
    { href: "/contact", label: "Contact" },
    { href: SITE.githubRepo, label: "GitHub", external: true },
  ],
  Legal: [
    { href: "/legal/terms", label: "Terms of Use" },
    { href: "/legal/privacy", label: "Privacy Policy" },
    { href: "/legal/risk", label: "Risk Disclosure" },
  ],
} as const;
