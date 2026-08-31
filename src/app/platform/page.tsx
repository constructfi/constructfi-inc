import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Sparkles,
  Wallet,
  BarChart3,
  Plug,
  LayoutGrid,
  Boxes,
  CircleDollarSign,
  Network,
  Target,
  Tags,
  Package,
  GraduationCap,
  Check,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { StatusPill } from "@/components/status-pill";
import { getProduct } from "@/lib/products";
import { SITE, STATS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Platform — shared infrastructure behind every app",
  description:
    "ConstructFi is shared infrastructure — identity, an AI layer, a rewards ledger, data, integrations, and marketplace plumbing — that every app on the platform inherits.",
  openGraph: {
    title: "ConstructFi Platform — one platform, many apps",
    description:
      "The six shared services every ConstructFi app inherits, and how the marketplace sits on top of them.",
    url: `${SITE.url}/platform`,
    images: [{ url: "/og/home.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/platform" },
};

const SERVICES = [
  {
    icon: ShieldCheck,
    title: "Identity & Security",
    body: "One credential, scoped to every workspace and app. SSO, MFA, invitation codes, digital signatures, and role-based permissions shared across the platform.",
  },
  {
    icon: Sparkles,
    title: "AI Intelligence Layer",
    body: "Shared reasoning, retrieval, and coaching across apps. Opportunity discovery, transcription and scoring, natural-language reporting, and role-play coaching run on one governed model layer with tenant-isolated context.",
  },
  {
    icon: Wallet,
    title: "Wallet & Rewards",
    body: "COVI activity, program incentives, and soulbound ELUV credentials in one ledger per organization. COVI is a utility token for platform activity — earn-only and transfer-paused before listing — not an investment.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    body: "A single, tenant-partitioned warehouse behind every dashboard and export, so reporting never depends on a manual reconciliation step.",
  },
  {
    icon: Plug,
    title: "Integration Hub",
    body: "Connectors for tools like RingCentral, Notion, ERP, and manufacturer feeds — with field-level sync control, replay on failure, and an audit trail.",
  },
  {
    icon: LayoutGrid,
    title: "Marketplace Infrastructure",
    body: "Discovery, entitlement, deployment, and metering for every app — the plumbing each marketplace app inherits.",
  },
];

const REVENUEOS_WORKSPACES = [
  "Executive Command Center",
  "Construction CRM",
  "Business Development Intelligence",
  "RingCentral Workspace",
  "Estimating Hub",
  "Procurement Hub",
  "Logistics Hub",
  "Executive AI Advisor",
];

const PALETTE = [
  { bg: "bg-teal/10", text: "text-teal dark:text-mint", dot: "#00a87c" },
  { bg: "bg-sky/10", text: "text-sky", dot: "#1bb6fd" },
  { bg: "bg-indigo/10", text: "text-indigo dark:text-periwinkle", dot: "#4a67ce" },
  { bg: "bg-periwinkle/10", text: "text-periwinkle", dot: "#8298fc" },
  { bg: "bg-gold/10", text: "text-gold", dot: "#e4b95b" },
  { bg: "bg-mint/10", text: "text-teal dark:text-mint", dot: "#00d19a" },
] as const;

const LAYERS = [
  {
    name: "App Layer",
    desc: "Marketplace-deployed apps that teams buy, configure, and run — each scoped to a workspace and tenant.",
    icon: LayoutGrid,
  },
  {
    name: "Shared Services",
    desc: "Identity, AI, wallet, analytics, integrations, and marketplace plumbing — inherited by every app.",
    icon: Boxes,
  },
  {
    name: "Token Layer",
    desc: "COVI (ERC-20 utility) and ELUV (ERC-5192 soulbound) sit on Base, settled to Ethereum.",
    icon: Network,
  },
  {
    name: "Ledger & Wallet",
    desc: "One rewards ledger per organization: COVI activity, ELUV milestones, and program incentives unified.",
    icon: CircleDollarSign,
  },
  {
    name: "Data & Compliance",
    desc: "Tenant-partitioned warehouse, audit trails, and independent smart-contract audits before every launch.",
    icon: ShieldCheck,
  },
] as const;

const SEGMENTS = [
  "Real-estate investors & developers",
  "General contractors & trade subs",
  "Suppliers & distributors",
  "Project owners & asset managers",
  "Institutional lenders & capital advisors",
  "Platform ecosystem partners",
] as const;

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
] as const;

const CONNECT_STEPS = [
  {
    label: "Discover",
    body: "Browse the marketplace for apps, suppliers, and programs that match your role and market.",
    icon: Target,
  },
  {
    label: "Qualify",
    body: "Complete identity verification, set up your wallet, and earn your first ELUV milestone.",
    icon: Tags,
  },
  {
    label: "Deploy",
    body: "Activate the apps that match your workflow. Each one inherits identity, AI, and the rewards ledger automatically.",
    icon: Package,
  },
  {
    label: "Operate",
    body: "Run deals, manage supply chains, and coordinate teams — every action earns COVI and advances your ELUV credential.",
    icon: GraduationCap,
  },
  {
    label: "Verify",
    body: "Milestones are minted as soulbound ELUV tokens — a permanent, tamper-proof record of what you actually built.",
    icon: Check,
  },
] as const;

export default function PlatformPage() {
  const revenueos = getProduct("revenueos");

  return (
    <>
      <PageHero
        eyebrow="Platform · Shared infrastructure"
        title="One platform. Shared infrastructure. Many apps."
        lede="ConstructFi is shared infrastructure — identity, an AI layer, a rewards ledger, data, integrations, and marketplace plumbing — that every app on the platform inherits. The marketplace is the discovery layer on top."
      >
        <div className="flex flex-wrap gap-3">
          <Link className="btn btn-primary" href="/marketplace">
            Browse the app store →
          </Link>
          <Link className="btn btn-ghost" href="/getting-started">
            Start here
          </Link>
        </div>
      </PageHero>

      <Section className="bg-wash py-12 dark:bg-ink-2/30 sm:py-14">
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

      <Section>
        <SectionHeading
          eyebrow="What every app inherits"
          title="Six shared services every app inherits"
          lede="An app on ConstructFi does not rebuild sign-in, reporting, or a rewards ledger. It inherits them, which is why the products stay consistent with each other instead of drifting apart."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <Card className="h-full">
                <CardContent className="flex h-full flex-col pt-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal dark:text-mint">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-navy dark:text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-wash dark:bg-ink-2/30" id="how-we-operate">
        <SectionHeading
          eyebrow="How we operate"
          title="Five architecture layers"
          lede="From the apps you see to the contracts that settle on-chain — five layers that keep the platform coherent, auditable, and extensible."
        />
        <div className="mt-12 flex flex-col gap-4">
          {LAYERS.map((layer, i) => {
            const color = PALETTE[i % PALETTE.length];
            return (
              <Reveal key={layer.name} delay={i * 0.06}>
                <div className="flex items-start gap-5 rounded-xl border border-line bg-card p-5 dark:border-border">
                  <span
                    className={`mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${color.bg} ${color.text}`}
                    aria-hidden
                  >
                    <layer.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy dark:text-white">{layer.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{layer.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Who we serve"
          title="Built for every seat at the table"
          lede="From individuals earning their first credential to institutions running readiness programs — ConstructFi is designed for the full stack of participants in real-estate and construction."
        />
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-label="Segments we serve">
          {SEGMENTS.map((segment, i) => {
            const color = PALETTE[i % PALETTE.length];
            return (
              <Reveal key={segment} delay={i * 0.04}>
                <li className="flex items-center gap-3 rounded-xl border border-line px-5 py-4 dark:border-border">
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: color.dot }}
                    aria-hidden
                  />
                  <span className="text-sm font-medium text-navy dark:text-white">{segment}</span>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </Section>

      <Section className="bg-wash dark:bg-ink-2/30">
        <SectionHeading
          eyebrow="Our commitments"
          title="Five things we will not compromise on"
          lede="These are not marketing claims — they are structural constraints baked into the protocol."
        />
        <div className="relative mt-12">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-line dark:bg-border" aria-hidden />
          <ol className="flex flex-col" aria-label="Our commitments">
            {COMMITMENTS.map((commitment, i) => (
              <Reveal key={commitment.title} delay={i * 0.06}>
                <li className="relative flex items-start gap-6 pb-10 last:pb-0">
                  <span
                    className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-white shadow-sm"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <div className="pt-1.5">
                    <h3 className="font-semibold text-navy dark:text-white">{commitment.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{commitment.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How the ecosystem connects"
          title="Five steps from first login to verified track record"
          lede="The full journey — from discovery to on-chain credential — in one connected flow."
        />
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-stretch">
          {CONNECT_STEPS.map((step, i) => {
            const color = PALETTE[i % PALETTE.length];
            const isLast = i === CONNECT_STEPS.length - 1;
            return (
              <div key={step.label} className="flex flex-1 items-stretch">
                <Reveal
                  delay={i * 0.06}
                  className="flex w-full flex-col gap-3 rounded-xl border border-line bg-card p-5 dark:border-border"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-xs font-bold text-white dark:bg-teal">
                      {i + 1}
                    </span>
                    <span
                      className={`inline-flex h-7 w-7 items-center justify-center rounded-lg ${color.bg} ${color.text}`}
                      aria-hidden
                    >
                      <step.icon className="h-4 w-4" />
                    </span>
                  </div>
                  <h3 className="font-semibold text-navy dark:text-white">{step.label}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </Reveal>
                {!isLast && (
                  <div className="hidden items-center px-1 text-muted-foreground/40 sm:flex" aria-hidden>
                    <svg
                      viewBox="0 0 16 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      className="h-6 w-4 shrink-0"
                    >
                      <path d="M4 2l8 10-8 10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="bg-wash dark:bg-ink-2/30">
        <SectionHeading
          eyebrow="Featured app"
          title="ConstructFi RevenueOS"
          lede="The flagship business-operations app on the platform — and the clearest example of what inheriting the shared services buys you."
        />
        <div className="mt-10 rounded-2xl border border-line bg-card p-6 dark:border-border sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <StatusPill status={revenueos?.status ?? "live"} />
            <span className="chip">Business operations</span>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            RevenueOS connects sales, estimating, procurement, logistics, and
            executive reporting into one workspace, so a bid, the materials behind
            it, and the job it becomes stay attached to the same record. Each
            workspace shares the platform&apos;s identity, AI, and reporting layer.
            It ships at launch on {SITE.launchDate} — it is not available today.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="RevenueOS workspaces">
            {REVENUEOS_WORKSPACES.map((w) => (
              <li className="chip" key={w}>
                {w}
              </li>
            ))}
          </ul>
          <div className="mt-7">
            <Button asChild>
              <Link href="/marketplace/revenueos">
                View app listing
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section className="ink-surface relative text-white">
        <div className="bg-grid-fine absolute inset-0 opacity-25" aria-hidden />
        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mint">
              Next step
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              See what runs on it
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              The marketplace is the discovery layer for everything built on these
              services. The getting-started walkthrough covers wallet setup on Base,
              verification, and how your first milestone gets minted.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link className="btn btn-primary" href="/marketplace">
              Browse the app store →
            </Link>
            <Link className="btn btn-ghost" href="/getting-started">
              Getting started
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
