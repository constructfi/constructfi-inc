// Legal content — Terms, Privacy, Risk.
//
// IMPORTANT (developer/founder note — NOT shown on the live page):
// These are professional draft documents for a utility-token + educational-app
// platform. They MUST be reviewed and finalized by qualified legal counsel before
// public launch. Set EFFECTIVE_DATE to the counsel-approved date and flip
// IS_EFFECTIVE to true once counsel signs off. Do NOT ship "[●]" placeholders or
// "unapproved template" language to production — this file deliberately contains
// neither on the rendered page.

// Founder fills this in once counsel approves. Until then, pages render a subtle,
// non-self-incriminating "not yet effective" note rather than a bracketed blank.
// These read from Vercel env vars so counsel-approved values can be flipped
// WITHOUT a code change/redeploy of source. Set them in Vercel → Settings →
// Environment Variables (Production), then redeploy:
//   NEXT_PUBLIC_LEGAL_EFFECTIVE_DATE = "September 9, 2026"  (counsel-approved date)
//   NEXT_PUBLIC_LEGAL_IS_EFFECTIVE   = "true"               (only AFTER counsel signs off)
//   NEXT_PUBLIC_LEGAL_GOVERNING_LAW  = "the State of Delaware, USA"
// Defaults below keep the page in the safe "Draft — not yet effective" state
// until the founder explicitly flips the env var.
export const EFFECTIVE_DATE =
  process.env.NEXT_PUBLIC_LEGAL_EFFECTIVE_DATE || "September 9, 2026"; // founder to confirm with counsel
export const IS_EFFECTIVE =
  process.env.NEXT_PUBLIC_LEGAL_IS_EFFECTIVE === "true"; // stays false until env var set true after counsel review
export const GOVERNING_LAW =
  process.env.NEXT_PUBLIC_LEGAL_GOVERNING_LAW || "the State of Delaware, USA"; // confirm with counsel
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_LEGAL_CONTACT_EMAIL || "legal@constructfi.co";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

export interface LegalDoc {
  slug: "terms" | "privacy" | "risk";
  title: string;
  summary: string;
  sections: LegalSection[];
}

export const TERMS: LegalDoc = {
  slug: "terms",
  title: "Terms of Use",
  summary:
    "These Terms govern your access to and use of the ConstructFi website, applications, and platform services.",
  sections: [
    {
      heading: "1. Acceptance of terms",
      paragraphs: [
        "By accessing or using the ConstructFi website, mobile applications, or platform services (collectively, the \"Services\"), you agree to be bound by these Terms of Use. If you do not agree, do not use the Services.",
        "ConstructFi provides educational tools, a participation marketplace, and related utility features. The Services are operated by ConstructFi and its affiliated operating companies.",
      ],
    },
    {
      heading: "2. Eligibility and accounts",
      paragraphs: [
        "You must be at least 18 years old and legally able to enter into a binding agreement to use the Services. Certain features require identity verification (KYC/AML) and may be unavailable in some jurisdictions.",
        "You are responsible for maintaining control of your non-custodial wallet and private keys. ConstructFi never takes custody of your assets or keys and cannot recover them on your behalf.",
      ],
    },
    {
      heading: "3. Nature of COVI and ELUV",
      list: [
        "COVI is a utility/consumption token used within the platform. It is not an investment, security, or a promise of profit, yield, or appreciation.",
        "ELUV is a non-transferable (soulbound, ERC-5192) credential representing verified milestones. It is never sold, cannot be transferred, and confers no financial rights.",
        "Nothing in the Services constitutes an offer to sell or a solicitation to buy any security. Any COVI sale, if offered, occurs only under a compliant exemption with KYC/AML and applicable lockups.",
      ],
    },
    {
      heading: "4. Acceptable use",
      paragraphs: [
        "You agree not to misuse the Services, including by attempting to farm rewards through prohibited automation, circumventing verification, infringing intellectual property, or using the Services for unlawful purposes.",
      ],
    },
    {
      heading: "5. Educational, non-lending positioning",
      paragraphs: [
        "Educational content, including partner-branded financial-education applications, is provided for informational purposes only and does not constitute financial, investment, legal, or tax advice. ConstructFi does not originate loans or extend credit through the Services.",
      ],
    },
    {
      heading: "6. Intellectual property",
      paragraphs: [
        "The Services, including software, content, and trademarks, are owned by ConstructFi or its licensors. Partners retain ownership of their brand, curriculum, and program data as set out in their separate agreements.",
      ],
    },
    {
      heading: "7. Disclaimers and limitation of liability",
      paragraphs: [
        "The Services are provided \"as is\" and \"as available\" without warranties of any kind. To the maximum extent permitted by law, ConstructFi is not liable for indirect, incidental, or consequential damages arising from your use of the Services, including losses related to smart-contract risk, market volatility, or loss of keys.",
      ],
    },
    {
      heading: "8. Dispute resolution and arbitration",
      paragraphs: [
        `Any dispute arising out of these Terms will be resolved by binding arbitration on an individual basis, except where prohibited by law. These Terms are governed by the laws of ${GOVERNING_LAW}, without regard to conflict-of-laws principles.`,
      ],
    },
    {
      heading: "9. Changes to these terms",
      paragraphs: [
        "We may update these Terms from time to time. Material changes will be posted with a revised effective date. Continued use of the Services after changes take effect constitutes acceptance.",
      ],
    },
    {
      heading: "10. Contact",
      paragraphs: [`Questions about these Terms may be directed to ${CONTACT_EMAIL}.`],
    },
  ],
};

export const PRIVACY: LegalDoc = {
  slug: "privacy",
  title: "Privacy Policy",
  summary:
    "This Policy explains how ConstructFi collects, uses, and protects personal information across the platform.",
  sections: [
    {
      heading: "1. Information we collect",
      list: [
        "Account and verification data you provide, including identity information required for KYC/AML where applicable.",
        "Usage and device data generated when you interact with the Services.",
        "Public blockchain data, such as wallet addresses and on-chain transactions, which is inherently public.",
      ],
    },
    {
      heading: "2. How we use information",
      paragraphs: [
        "We use information to operate and improve the Services, verify eligibility, issue and administer rewards and credentials, comply with legal obligations, and protect against fraud and abuse.",
      ],
    },
    {
      heading: "3. On-chain data and minimal disclosure",
      paragraphs: [
        "ELUV credentials store only a reference hash on-chain; the underlying attestation detail remains off-chain. We do not write personally identifiable information to the blockchain.",
      ],
    },
    {
      heading: "4. Sharing of information",
      paragraphs: [
        "We share information with service providers, partners for their own programs where you participate, and authorities where required by law. We do not sell personal information.",
      ],
    },
    {
      heading: "5. Data rights",
      paragraphs: [
        "Depending on your jurisdiction, you may have rights to access, correct, delete, or port your personal information, and to object to certain processing. Partner programs offer data-export rights as described in their agreements.",
      ],
    },
    {
      heading: "6. Security and retention",
      paragraphs: [
        "We apply administrative, technical, and physical safeguards appropriate to the sensitivity of the data, and retain information for as long as necessary to provide the Services and meet legal obligations.",
      ],
    },
    {
      heading: "7. International transfers",
      paragraphs: [
        "Information may be processed in jurisdictions other than your own. Where required, we implement appropriate transfer safeguards.",
      ],
    },
    {
      heading: "8. Contact",
      paragraphs: [`Privacy questions may be directed to ${CONTACT_EMAIL}.`],
    },
  ],
};

export const RISK: LegalDoc = {
  slug: "risk",
  title: "Risk Disclosure",
  summary:
    "Participation in the ConstructFi platform involves risk. Read this disclosure carefully before participating.",
  sections: [
    {
      heading: "1. Not an investment",
      paragraphs: [
        "COVI is a utility/consumption token and ELUV is a non-transferable credential. Neither is offered as an investment, and neither confers rights to profit, yield, dividends, or revenue. Do not participate expecting financial return.",
      ],
    },
    {
      heading: "2. Regulatory risk",
      paragraphs: [
        "Laws and regulations applicable to tokens, digital assets, and related platforms are evolving and may change in ways that adversely affect the Services or your ability to use them.",
      ],
    },
    {
      heading: "3. Technology and smart-contract risk",
      paragraphs: [
        "Smart contracts may contain undiscovered vulnerabilities despite independent audits. Verified contract addresses are published only after audit; treat any address circulated beforehand as fraudulent.",
      ],
    },
    {
      heading: "4. Market and liquidity risk",
      paragraphs: [
        "COVI's utility value depends on real marketplace demand, which may fluctuate. There may be limited or no liquidity for COVI at any given time.",
      ],
    },
    {
      heading: "5. Key-management risk",
      paragraphs: [
        "The Services are non-custodial. If you lose access to your wallet or private keys, ConstructFi cannot recover your assets or credentials.",
      ],
    },
    {
      heading: "6. Execution and roadmap risk",
      paragraphs: [
        "Roadmap items, capabilities, and timelines are forward-looking and subject to development, partnership, and regulatory readiness. No outcome is guaranteed.",
      ],
    },
    {
      heading: "7. No advice",
      paragraphs: [
        "Nothing in the Services is financial, investment, legal, or tax advice. Consult qualified professional advisors before participating.",
      ],
    },
  ],
};

export const LEGAL_DOCS = { terms: TERMS, privacy: PRIVACY, risk: RISK };
