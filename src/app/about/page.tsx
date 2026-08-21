import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { STATS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — ConstructFi",
  description:
    "ConstructFi is a programmable economic-participation platform built on real operations in real-estate and construction. Learn about our mission, architecture, and commitments.",
  openGraph: {
    title: "About ConstructFi",
    description:
      "A programmable economic-participation platform built on real operations.",
    url: `${SITE.url}/about`,
    images: [{ url: "/og/home.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/about" },
};

// ── Category palette (cycles across multi-item lists) ──────────────────────
const PALETTE = [
  { bg: "bg-teal/10", text: "text-teal dark:text-mint", dot: "#00a87c" },
  { bg: "bg-sky/10", text: "text-sky", dot: "#1bb6fd" },
  { bg: "bg-indigo/10", text: "text-indigo dark:text-periwinkle", dot: "#4a67ce" },
  { bg: "bg-periwinkle/10", text: "text-periwinkle", dot: "#8298fc" },
  { bg: "bg-gold/10", text: "text-gold", dot: "#e4b95b" },
  { bg: "bg-mint/10", text: "text-teal dark:text-mint", dot: "#00d19a" },
];

// ── Shared platform services (same source as platform/page.tsx) ────────────
const SERVICES = [
  {
    title: "Identity & Security",
    body: "One credential, scoped to every workspace and app. SSO, MFA, invitation codes, digital signatures, and role-based permissions shared across the platform.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden className="h-5 w-5">
        <path d="M12 2L4 5v6c0 5.25 3.5 10.15 8 11.25C16.5 21.15 20 16.25 20 11V5l-8-3z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "AI Intelligence Layer",
    body: "Shared reasoning, retrieval, and coaching across apps. Opportunity discovery, transcription and scoring, natural-language reporting, and role-play coaching run on one governed model layer with tenant-isolated context.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden className="h-5 w-5">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Wallet & Rewards",
    body: "COVI activity, program incentives, and soulbound ELUV credentials in one ledger per organization. COVI is a utility token for platform activity — earn-only and transfer-paused before listing — not an investment.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden className="h-5 w-5">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M16 12h.01" strokeLinecap="round" strokeWidth={2.5} />
        <path d="M2 10h20" />
      </svg>
    ),
  },
  {
    title: "Data & Analytics",
    body: "A single, tenant-partitioned warehouse behind every dashboard and export, so reporting never depends on a manual reconciliation step.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden className="h-5 w-5">
        <path d="M4 20V10M9 20V4M14 20v-8M19 20v-6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Integration Hub",
    body: "Connectors for tools like RingCentral, Notion, ERP, and manufacturer feeds — with field-level sync control, replay on failure, and an audit trail.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden className="h-5 w-5">
        <path d="M7 7V2M17 7V2M7 7h10M7 7v3a5 5 0 0010 0V7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 17v5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Marketplace Infrastructure",
    body: "Discovery, entitlement, deployment, and metering for every app — the plumbing each marketplace app inherits.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden className="h-5 w-5">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
];

// ── Five architecture layers ───────────────────────────────────────────────
const LAYERS = [
  {
    name: "App Layer",
    desc: "Marketplace-deployed apps that teams buy, configure, and run — each scoped to a workspace and tenant.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden className="h-5 w-5">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    name: "Shared Services",
    desc: "Identity, AI, wallet, analytics, integrations, and marketplace plumbing — inherited by every app.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden className="h-5 w-5">
        <path d="M21 7.5l-9-4.5-9 4.5M21 7.5v9l-9 4.5-9-4.5v-9M21 7.5L12 12l-9-4.5M12 12v9" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Token Layer",
    desc: "COVI (ERC-20 utility) and ELUV (ERC-5192 soulbound) sit on Base, settled to Ethereum.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden className="h-5 w-5">
        <circle cx="9" cy="12" r="6" />
        <circle cx="15" cy="12" r="6" />
      </svg>
    ),
  },
  {
    name: "Ledger & Wallet",
    desc: "One rewards ledger per organization: COVI activity, ELUV milestones, and program incentives unified.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden className="h-5 w-5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v10M9.5 9.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 3-5 3-5 6 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Data & Compliance",
    desc: "Tenant-partitioned warehouse, audit trails, and independent smart-contract audits before every launch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden className="h-5 w-5">
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="17" r="2" />
        <circle cx="19" cy="17" r="2" />
        <path d="M12 7v4M12 11l-5.1 4.3M12 11l5.1 4.3" strokeLinecap="round" />
      </svg>
    ),
  },
];

// ── Who we serve ───────────────────────────────────────────────────────────
const SEGMENTS = [
  "Real-estate investors & developers",
  "General contractors & trade subs",
  "Suppliers & distributors",
  "Project owners & asset managers",
  "Institutional lenders & capital advisors",
  "Platform ecosystem partners",
];

// ── Five commitments ────────────────────────────────────────────────────────
const COMMITMENTS = [
  {
    title: "Earn, never buy",
    body: "COVI and ELUV are earned through verifiable work and platform activity. Neither token is sold or gifted as a reward for holding capital.",
  },
  {
    title: "Transparent by default",
    body: "Smart-contract code, token economics, and audit reports are published before launch. Nothing ships locked in a black box.",
  },
  {
    title: "Tenant isolation",
    body: "Every workspace is partitioned at the data, AI-context, and permission layer. One tenant's data never touches another.",
  },
  {
    title: "No rent-seeking",
    body: "Platform fees fund development, liquidity, and ecosystem rewards — not extraction. A portion of every fee recycles back to the RewardsDistributor.",
  },
  {
    title: "Audit before launch",
    body: "Every contract and material upgrade goes through an independent audit. No contract goes live without a published report and a passing result.",
  },
];

// ── How the ecosystem connects ─────────────────────────────────────────────
const CONNECT_STEPS = [
  {
    label: "Discover",
    body: "Browse the marketplace for apps, suppliers, and programs that match your role and market.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden className="h-4 w-4">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v2M12 19v2M3 12H5M19 12h2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Qualify",
    body: "Complete identity verification, set up your wallet, and earn your first ELUV milestone.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden className="h-4 w-4">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" strokeLinejoin="round" />
        <circle cx="7" cy="7" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Deploy",
    body: "Activate the apps that match your workflow. Each one inherits identity, AI, and the rewards ledger automatically.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden className="h-4 w-4">
        <path d="M21 8L12 3 3 8l9 5 9-5zM3 8v8l9 5 9-5V8" strokeLinejoin="round" />
        <path d="M12 13v8" />
      </svg>
    ),
  },
  {
    label: "Operate",
    body: "Run deals, manage supply chains, and coordinate teams — every action earns COVI and advances your ELUV credential.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden className="h-4 w-4">
        <path d="M22 10L12 5 2 10l10 5 10-5z" strokeLinejoin="round" />
        <path d="M6 12v5c2 2 8 2 12 0v-5" strokeLinejoin="round" />
        <path d="M22 10v5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Verify",
    body: "Milestones are minted as soulbound ELUV tokens — a permanent, tamper-proof record of what you actually built.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden className="h-4 w-4">
        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <PageHero
        eyebrow="About Us"
        title="A platform built on real operations."
        lede="ConstructFi is a programmable economic-participation platform — an app store for real-estate and construction work where the tasks you complete earn tokens and mint verifiable credentials."
      >
        <div className="flex flex-wrap gap-3">
          <Link className="btn btn-primary" href="/marketplace">
            Browse the app store →
          </Link>
          <Link className="btn btn-ghost" href="/whitepaper">
            Read the whitepaper
          </Link>
        </div>
      </PageHero>

      {/* ── Stat strip ────────────────────────────────────────────────── */}
      <Section className="bg-wash dark:bg-ink-2/30 py-12 sm:py-14">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.04}>
              <div className="flex flex-col gap-1">
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="text-2xl font-bold text-navy dark:text-white sm:text-3xl">
                  {s.value}
                </dd>
                <p className="text-xs text-muted-foreground">{s.sub}</p>
              </div>
            </Reveal>
          ))}
        </dl>
      </Section>

      {/* ── Shared platform services ──────────────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="Shared platform services"
          title="Six services every app inherits"
          lede="An app on ConstructFi does not rebuild sign-in, reporting, or a rewards ledger. It inherits them, which is why products stay consistent with each other instead of drifting apart."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const c = PALETTE[i % PALETTE.length];
            return (
              <Reveal key={s.title} delay={i * 0.04}>
                <div className="flex h-full flex-col rounded-xl border border-line bg-card p-6 dark:border-border">
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${c.bg} ${c.text}`}
                    aria-hidden
                  >
                    {s.icon}
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-navy dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ── How we operate — five architecture layers ─────────────────── */}
      <Section className="bg-wash dark:bg-ink-2/30" id="how-we-operate">
        <SectionHeading
          eyebrow="How we operate"
          title="Five architecture layers"
          lede="From the apps you see to the contracts that settle on-chain — five layers that keep the platform coherent, auditable, and extensible."
        />
        <div className="mt-12 flex flex-col gap-4">
          {LAYERS.map((l, i) => {
            const c = PALETTE[i % PALETTE.length];
            return (
              <Reveal key={l.name} delay={i * 0.06}>
                <div className="flex items-start gap-5 rounded-xl border border-line bg-card p-5 dark:border-border">
                  <span
                    className={`mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${c.bg} ${c.text}`}
                    aria-hidden
                  >
                    {l.icon}
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy dark:text-white">{l.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{l.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ── Who we serve ─────────────────────────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="Who we serve"
          title="Built for every seat at the table"
          lede="From individuals earning their first credential to institutions running readiness programs — ConstructFi is designed for the full stack of participants in real-estate and construction."
        />
        <ul
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Segments we serve"
        >
          {SEGMENTS.map((seg, i) => {
            const c = PALETTE[i % PALETTE.length];
            return (
              <Reveal key={seg} delay={i * 0.04}>
                <li className="flex items-center gap-3 rounded-xl border border-line px-5 py-4 dark:border-border">
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: c.dot }}
                    aria-hidden
                  />
                  <span className="text-sm font-medium text-navy dark:text-white">{seg}</span>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </Section>

      {/* ── Five commitments ──────────────────────────────────────────── */}
      <Section className="bg-wash dark:bg-ink-2/30">
        <SectionHeading
          eyebrow="Our commitments"
          title="Five things we will not compromise on"
          lede="These are not marketing claims — they are structural constraints baked into the protocol."
        />
        <div className="relative mt-12">
          {/* Vertical through-line */}
          <div
            className="absolute bottom-0 left-5 top-0 w-px bg-line dark:bg-border"
            aria-hidden
          />
          <ol className="flex flex-col" aria-label="Our commitments">
            {COMMITMENTS.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <li className="relative flex items-start gap-6 pb-10 last:pb-0">
                  {/* Circular numbered node */}
                  <span
                    className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal text-white text-sm font-bold shadow-sm"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="font-semibold text-navy dark:text-white">{c.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* ── How the ecosystem connects ────────────────────────────────── */}
      <Section>
        <SectionHeading
          eyebrow="How the ecosystem connects"
          title="Five steps from first login to verified track record"
          lede="The full journey — from discovery to on-chain credential — in one connected flow."
        />
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-stretch">
          {CONNECT_STEPS.map((step, i) => {
            const c = PALETTE[i % PALETTE.length];
            const isLast = i === CONNECT_STEPS.length - 1;
            return (
              <div key={step.label} className="flex flex-1 items-stretch">
                <Reveal delay={i * 0.06} className="flex w-full flex-col gap-3 rounded-xl border border-line bg-card p-5 dark:border-border">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-white text-xs font-bold dark:bg-teal">
                      {i + 1}
                    </span>
                    <span
                      className={`inline-flex h-7 w-7 items-center justify-center rounded-lg ${c.bg} ${c.text}`}
                      aria-hidden
                    >
                      {step.icon}
                    </span>
                  </div>
                  <h3 className="font-semibold text-navy dark:text-white">{step.label}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </Reveal>
                {!isLast && (
                  <div className="hidden sm:flex items-center px-1 text-muted-foreground/40" aria-hidden>
                    <svg viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-4 shrink-0">
                      <path d="M4 2l8 10-8 10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <Section className="ink-surface relative text-white">
        <div className="bg-grid-fine absolute inset-0 opacity-25" aria-hidden />
        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mint">
              Get started
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to earn your first credential?
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              Set up your wallet, complete verification, and launch your first app.
              The getting-started walkthrough covers everything in under five minutes.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link className="btn btn-primary" href="/getting-started">
              Getting started →
            </Link>
            <Link className="btn btn-ghost" href="/platform">
              Platform overview
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
