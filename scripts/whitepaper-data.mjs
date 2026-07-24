// ConstructFi Whitepaper v2.1 — complete 15-chapter content.
// Single source of truth shared by the /whitepaper page and the PDF generator.
// COVI = ERC-20 utility (10B cap). ELUV = ERC-5192 soulbound credential (no fixed supply).



export const WP_META = {
  version: "2.1",
  date: "July 2026",
  title: "ConstructFi Whitepaper",
  subtitle: "A programmable economic-participation platform. COVI moves. ELUV proves.",
};

export const WP_CHAPTERS = [
  {
    n: 1,
    id: "chapter-1",
    title: "Overview & thesis",
    dek: "From participation to ownership — a platform built on real operations, not a whitepaper alone.",
    blocks: [
      { type: "p", text: "ConstructFi is a programmable economic-participation platform that turns verified activity — learning, procurement, transactions, and readiness — into durable, portable value. It launches on top of two operating businesses: Eluvial Enterprise Inc. (housing & development, $60M+ in supported development activity) and Covington Supply Co. (procurement & materials, ~$7M in annual supply operations across DC, VA, MD, NC, FL, and MO)." },
      { type: "p", text: "The thesis is simple: rewards should be funded by real commerce through a verified supplier network — not by printing tokens. Two tokens coordinate the system. COVI moves value; ELUV proves progress." },
      { type: "callout", variant: "teal", title: "Positioning", text: "ConstructFi is a real-world-asset (RWA) participation platform. COVI is a utility/consumption token — not an investment. ELUV is a non-transferable credential that confers no financial rights." },
      { type: "h3", text: "Who it serves" },
      { type: "list", items: [
        "Individuals — build readiness, earn rewards, and gain a verifiable record through participation.",
        "Businesses — coordinate procurement, transactions, and supply chains on transparent infrastructure.",
        "Communities — turn shared economic activity into resilient, measurable, long-term value.",
      ] },
    ],
  },
  {
    n: 2,
    id: "chapter-2",
    title: "Two-token model",
    dek: "COVI (ERC-20 utility) and ELUV (ERC-5192 soulbound credential) — different standards, different rules.",
    blocks: [
      { type: "p", text: "ConstructFi deliberately separates transaction infrastructure from progression infrastructure. Conflating the two is a common failure mode in token design; ConstructFi avoids it by using two distinct standards." },
      { type: "table", headers: ["", "COVI", "ELUV"], rows: [
        ["Purpose", "Commerce & rewards (spendable)", "Readiness & governance credential (proof)"],
        ["Standard", "ERC-20", "ERC-5192 (minimal soulbound) over ERC-721"],
        ["Fungible?", "Yes", "No — one token per verified milestone"],
        ["Transferable?", "Yes", "Never — locked at mint, permanently"],
        ["Supply", "Fixed cap 10,000,000,000", "No fixed fungible supply; minted per attestation"],
        ["How obtained", "Earned + limited compliant sale", "Earned only — verified progression"],
      ] },
      { type: "callout", variant: "gold", title: "Correction from earlier drafts", text: "ELUV is an ERC-5192 soulbound NFT, not an ERC-20 with a fixed 3,000,000,000 supply. There is no fixed fungible ELUV supply; one non-transferable token is minted per verified milestone." },
      { type: "h3", text: "ELUV consent, dispute, and revocation" },
      { type: "list", items: [
        "Explicit consent at issuance — never airdropped unprompted; the member accepts each milestone.",
        "Dispute/appeal path — a dispute role can flag a token pending resolution.",
        "Revocation & re-issuance — the only path a token leaves a wallet, for fraud or error.",
        "Minimal disclosure — no PII on-chain; metadata references an off-chain attestation hash.",
      ] },
    ],
  },
  {
    n: 3,
    id: "chapter-3",
    title: "Marketplace, procurement & commerce",
    dek: "Verified suppliers, transparent transactions, and coordinated supply chains.",
    blocks: [
      { type: "p", text: "The marketplace is where commerce becomes infrastructure. Educational apps, NFTs, supply & procurement, and a partner marketplace all transact on shared rails. Every purchase earns approximately 2% back in COVI, and marketplace fees fund the rewards loop." },
      { type: "p", text: "Gaming and DeFi capabilities follow, deliberately sequenced and compliance-reviewed. The marketplace draws on real procurement relationships from Covington Supply Co., giving the platform genuine transaction volume from day one rather than synthetic demand." },
      { type: "callout", variant: "teal", title: "Consistency note", text: "COVI spend use-cases reference partner programs (nonprofit, banking, and public partners) consistently across all materials." },
    ],
  },
  {
    n: 4,
    id: "chapter-4",
    title: "Gaming, education & engagement",
    dek: "Learning and credentials that move people from knowledge to opportunity.",
    blocks: [
      { type: "p", text: "Education on ConstructFi is action-oriented. Build or Bust, the platform's first mobile app, lets a member analyze a property, receive a clear verdict with the underlying numbers and the gates it cleared, and get a financing-readiness read. Every completed analysis earns COVI and builds the member's soulbound ELUV record." },
      { type: "p", text: "Engagement mechanics — lessons, referrals, and milestone progression — are designed to reward genuine contribution, with per-address, per-epoch rate limits to resist farming. Gaming layers extend engagement while remaining subordinate to the readiness and commerce mission." },
    ],
  },
  {
    n: 5,
    id: "chapter-5",
    title: "COVI token allocation",
    dek: "A fixed 10,000,000,000 supply distributed across eight buckets, insiders vesting slower than community.",
    blocks: [
      { type: "p", text: "COVI has a fixed maximum supply of 10,000,000,000 tokens. Each allocation bucket is governed by a separate vesting/minter contract limited to its cap. Nothing large unlocks at launch except liquidity; insiders (team and advisors) unlock more slowly than the community." },
      { type: "table", headers: ["Allocation", "Share", "Tokens", "Vesting"], rows: [
        ["Ecosystem & participation rewards", "35%", "3.50B", "Declining emission schedule to RewardsDistributor"],
        ["Token sale (private + public)", "15%", "1.50B", "KYC/AML-gated; lockups per tranche"],
        ["Treasury / reserve", "15%", "1.50B", "Timelock + multisig; governance-controlled"],
        ["Team & core contributors", "15%", "1.50B", "12-mo cliff, then 36–48-mo linear"],
        ["Liquidity & market making", "10%", "1.00B", "Unlockable near launch (only large launch unlock)"],
        ["Partnerships & institutional", "5%", "0.50B", "Milestone / linear per agreement"],
        ["Community / airdrop", "3%", "0.30B", "Consent-based claim; anti-Sybil checks"],
        ["Advisors", "2%", "0.20B", "Cliff + linear"],
      ] },
      { type: "p", text: "The sum of all bucket caps equals 10,000,000,000 (100%). On-chain invariants assert that no bucket over-mints and that total supply never exceeds the cap." },
    ],
  },
  {
    n: 6,
    id: "chapter-6",
    title: "ELUV readiness & credential framework",
    dek: "A soulbound record of verified milestones — portable, auditable, and governance-bearing.",
    blocks: [
      { type: "p", text: "ELUV is the readiness and governance credential. Each token is an attestation of a completed, verified milestone, permanently locked to the member's wallet at mint. Because ELUV is non-transferable, it cannot be bought, sold, or farmed across wallets." },
      { type: "h3", text: "Data model" },
      { type: "list", items: [
        "One token per (member, milestone) — enforced on-chain to prevent duplicates.",
        "On-chain: milestone id, issuer, evidence hash, issued-at, disputed flag.",
        "Off-chain: the full attestation bundle, referenced by hash and pinned to IPFS/Arweave.",
      ] },
      { type: "h3", text: "Governance weighting" },
      { type: "p", text: "Voting power derives from the count and tier of a member's non-disputed milestones — not a fungible balance — with a per-address cap (logarithmic or hard ceiling) to prevent whales-by-participation. Disputed or revoked tokens contribute zero weight." },
    ],
  },
  {
    n: 7,
    id: "chapter-7",
    title: "Fee-recycling economics",
    dek: "Why COVI holds value: a closed loop between real commerce and rewards.",
    blocks: [
      { type: "p", text: "COVI's value is anchored in real marketplace demand. A fixed 20% of marketplace and ecosystem fee revenue is used to buy back COVI (or route already-collected COVI fees) and replenish the rewards pool. This funds rewards from real commerce, not from emissions alone." },
      { type: "callout", variant: "gold", title: "Compliance-neutral by design", text: "The fee-recycling buyback replenishes a rewards pool — it is not a holder dividend, revenue share, or yield. There is no pro-rata distribution to COVI holders. The mechanism is named replenishRewardsPool, not distributeProfits." },
      { type: "p", text: "Combined with a declining emissions curve, fee recycling shifts reward funding over time from newly minted tokens toward recycled commerce revenue — the flywheel that gives COVI durable, demand-backed utility." },
    ],
  },
  {
    n: 8,
    id: "chapter-8",
    title: "Institutional infrastructure & white-label",
    dek: "Your brand, your content, your users — powered and maintained by ConstructFi.",
    blocks: [
      { type: "p", text: "ConstructFi builds educational apps for nonprofits, banks, and institutional and public partners on shared platform infrastructure, so every partner app launches with rewards, readiness, and reporting already wired in." },
      { type: "h3", text: "What partners own vs. share" },
      { type: "list", items: [
        "Partner-owned: brand, curriculum & content, user relationships, and program data — with a perpetual license to the app instance, full data-export rights, and source-code escrow for regulated partners.",
        "Shared engine: rewards rails, readiness engine, wallets, templates, and hosting — continuously maintained, audited, and improved across every partner app at once.",
        "Member progress: participation earns COVI and mints soulbound ELUV milestones — a portable readiness record partners can report on and build eligibility around.",
      ] },
    ],
  },
  {
    n: 9,
    id: "chapter-9",
    title: "For funders & grant outcomes",
    dek: "Measurable, auditable outcomes mapped to funder frameworks.",
    blocks: [
      { type: "p", text: "ConstructFi produces the kind of measurable, auditable outcomes funders require: completion rates, milestone progression, and impact reporting anchored to on-chain ELUV credentials that cannot be fabricated or double-counted." },
      { type: "table", headers: ["Framework", "How ConstructFi maps"], rows: [
        ["WIOA (workforce)", "Verified skills milestones and readiness progression as auditable outcome evidence."],
        ["HUD (housing)", "Housing-readiness tracks and ownership pathways with milestone attestations."],
        ["CRA (banking)", "Branded financial-education engagement your community teams can measure — educational only, non-lending."],
        ["CFPB alignment", "Clear disclosures, utility-first positioning, and consumer-protection guardrails."],
      ] },
    ],
  },
  {
    n: 10,
    id: "chapter-10",
    title: "Governance",
    dek: "Progressive, credential-weighted governance with a per-address cap.",
    blocks: [
      { type: "p", text: "Governance is introduced deliberately in a later phase via an ELUV-weighted governor. Voting power comes from non-disputed milestone count and tier, capped per address, so influence tracks genuine, verified participation rather than token accumulation." },
      { type: "p", text: "All privileged roles (admin, minter, pauser, issuer, dispute) sit behind a timelock and a multisig. No externally owned account holds privileged roles on mainnet." },
    ],
  },
  {
    n: 11,
    id: "chapter-11",
    title: "Security & audit posture",
    dek: "OpenZeppelin foundations, independent audit before launch, addresses after.",
    blocks: [
      { type: "list", items: [
        "OpenZeppelin Contracts v5.x foundations; Solidity ^0.8.24; Foundry test suite with unit, fuzz, and invariant tests (≥95% coverage on token logic).",
        "Access control behind a Timelock + Gnosis Safe multisig; reentrancy guards on external-call paths; pausable transfers (emergency only).",
        "Rate limiting on rewards distribution and milestone minting to resist farming.",
        "Independent audit before mainnet; verified contract addresses published only after audit — never before.",
      ] },
      { type: "callout", variant: "teal", title: "Verification", text: "Contract addresses are not published on this site until the independent audit is complete. Any address claiming to be COVI or ELUV before that point should be treated as fraudulent." },
    ],
  },
  {
    n: 12,
    id: "chapter-12",
    title: "Compliance & regulatory path",
    dek: "Utility-first, KYC/AML on sales, with a documented path for later phases.",
    blocks: [
      { type: "p", text: "ConstructFi is built with regulatory alignment as a first-class requirement. COVI is positioned as a utility/consumption token; ELUV is a non-transferable credential. Neither is marketed as an investment, and no profit, yield, or dividend is represented anywhere." },
      { type: "list", items: [
        "Any COVI sale occurs only under a compliant exemption with KYC/AML and per-tranche lockups.",
        "RWA framing: value is anchored in real commerce through a verified supplier network.",
        "Later-phase financial rails are compliance-reviewed and deliberately sequenced; a securities-registration path is contemplated where required for future capabilities.",
      ] },
    ],
  },
  {
    n: 13,
    id: "chapter-13",
    title: "Roadmap",
    dek: "Five phases, sequenced by capability milestone.",
    blocks: [
      { type: "table", headers: ["Phase", "Focus", "Status"], rows: [
        ["1 — Foundation", "Core protocol, verification, wallet, marketplace, readiness track.", "In progress"],
        ["2 — Partnerships", "Nonprofit, banking, and public-program partnerships and institutional participation.", "Next"],
        ["3 — Coordination", "Intelligence, automation, and cross-platform coordination.", "Planned"],
        ["4 — Financial tools", "Financial rails, liquidity layers, and sustainable incentive models (compliance-reviewed).", "Future"],
        ["5 — Global growth", "Localized systems, interoperability, and mass participation.", "Future"],
      ] },
      { type: "p", text: "Timing is subject to development, partnerships, and regulatory readiness." },
    ],
  },
  {
    n: 14,
    id: "chapter-14",
    title: "Risk factors",
    dek: "Participation carries risk; read carefully.",
    blocks: [
      { type: "callout", variant: "risk", title: "Not an investment", text: "COVI is a utility/consumption token and ELUV is a non-transferable credential. Neither is offered as an investment, and neither confers rights to profit, yield, or revenue." },
      { type: "list", items: [
        "Regulatory risk — token and platform treatment may change with evolving law and enforcement.",
        "Technology risk — smart contracts may contain undiscovered vulnerabilities despite audits.",
        "Market risk — COVI's utility value depends on real marketplace demand, which may fluctuate.",
        "Execution risk — roadmap timing depends on development, partnerships, and regulatory readiness.",
        "Key-management risk — non-custodial participation means users are responsible for their keys.",
      ] },
    ],
  },
  {
    n: 15,
    id: "chapter-15",
    title: "Legal disclaimers",
    dek: "Important notices governing use of this document.",
    blocks: [
      { type: "p", text: "This whitepaper is provided for informational purposes only and does not constitute an offer to sell, or a solicitation of an offer to buy, any security, token, or other financial instrument in any jurisdiction. Nothing herein is investment, legal, tax, or financial advice." },
      { type: "p", text: "Forward-looking statements reflect current expectations and are subject to change. ConstructFi makes no guarantee that any roadmap item, capability, or timeline will be achieved. Any COVI sale, if and when offered, will be conducted only under a compliant exemption with KYC/AML and applicable lockups." },
      { type: "p", text: "COVI is a utility/consumption token, not an investment. ELUV is a non-transferable credential and confers no financial rights. Prospective participants should consult qualified professional advisors before participating." },
    ],
  },
];
