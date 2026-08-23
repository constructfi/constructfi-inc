import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Sparkles,
  Wallet,
  BarChart3,
  Plug,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { StatusPill } from "@/components/status-pill";
import { getProduct } from "@/lib/products";
import { SITE } from "@/lib/site";

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

export default function PlatformPage() {
  const revenueos = getProduct("constructos");

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

      <Section className="bg-wash dark:bg-ink-2/30">
        <SectionHeading
          eyebrow="Featured app"
          title="ConstructOS"
          lede="The flagship business-operations platform on ConstructFi — and the clearest example of what inheriting the shared services buys you."
        />
        <div className="mt-10 rounded-2xl border border-line bg-card p-6 dark:border-border sm:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <StatusPill status={revenueos?.status ?? "live"} />
            <span className="chip">Business operations</span>
          </div>
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            ConstructOS connects sales, estimating, procurement, logistics, and
            executive reporting into one workspace, so a bid, the materials behind
            it, and the job it becomes stay attached to the same record. Each
            workspace shares the platform&apos;s identity, AI, and reporting layer.
            It ships at launch on {SITE.launchDate} — it is not available today.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="ConstructOS workspaces">
            {REVENUEOS_WORKSPACES.map((w) => (
              <li className="chip" key={w}>
                {w}
              </li>
            ))}
          </ul>
          <div className="mt-7">
            <Button asChild>
              <Link href="/marketplace/constructos">
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
