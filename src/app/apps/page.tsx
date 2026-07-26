import type { Metadata } from "next";
import Link from "next/link";
import {
  Gamepad2,
  Store,
  LineChart,
  Boxes,
  Wallet,
  Building2,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { StoreBadges } from "@/components/store-badges";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "The ConstructFi app surface: Build or Bust, the verified supplier marketplace, the participant dashboard, and the products sequenced behind them.",
  openGraph: {
    title: "ConstructFi Apps",
    description:
      "Build or Bust, the marketplace, the participant dashboard, and what ships next.",
    url: `${SITE.url}/apps`,
    images: [{ url: "/img/readiness.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/apps" },
};

type App = {
  icon: typeof Gamepad2;
  title: string;
  body: string;
  badge: string;
  badgeVariant: "default" | "gold" | "outline";
  href?: string;
  cta?: string;
};

const APPS: App[] = [
  {
    icon: Gamepad2,
    title: "Build or Bust",
    body: "Gamified financial education and readiness. Complete lessons and property analyses, earn COVI participation rewards, and mint soulbound ELUV milestones for verified progress.",
    badge: "Phase 1 · At launch",
    badgeVariant: "default",
    href: "/app",
    cta: "Explore Build or Bust",
  },
  {
    icon: Store,
    title: "Marketplace",
    body: "A verified supplier network wired to real procurement across six markets. A share of transaction fees recycles into the rewards pool, so rewards are funded by commerce.",
    badge: "Phase 1 · At launch",
    badgeVariant: "default",
    href: "/marketplace",
    cta: "Explore the marketplace",
  },
  {
    icon: LineChart,
    title: "Participant dashboard",
    body: "One view of your COVI activity, verified ELUV milestones, and readiness progression. A static preview with illustrative data is available today.",
    badge: "Preview available",
    badgeVariant: "gold",
    href: "/dashboard",
    cta: "View the preview",
  },
  {
    icon: Boxes,
    title: "Collectibles & credentials layer",
    body: "The NFT layer that carries ELUV milestones and commemorative collections issued through platform activity. Distribution happens inside ConstructFi — never through third-party listings.",
    badge: "Phase 2 · Coming soon",
    badgeVariant: "outline",
  },
  {
    icon: Building2,
    title: "Procurement workspace",
    body: "Bulk ordering, subcontractor coordination, and supply-chain provenance for teams running real jobs across the six active markets.",
    badge: "Phase 2 · Coming soon",
    badgeVariant: "outline",
  },
  {
    icon: Wallet,
    title: "Mobile companion",
    body: "Build or Bust and dashboard access on iOS and Android, so participation and milestone submission work from the job site.",
    badge: "Phase 2 · Coming soon",
    badgeVariant: "outline",
  },
];

export default function AppsPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · Apps"
        title="One platform, sequenced deliberately"
        lede="ConstructFi ships as a small set of products that reinforce each other: learn and prove in Build or Bust, transact in the marketplace, and watch it compound on your dashboard."
      >
        <Badge className="bg-white/10 text-white">
          Phase 1 launches {SITE.launchDate}
        </Badge>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="The surface"
          title="What you can use, and what comes next"
          lede="Nothing here is presented as shipped before it is. Phase 2 items are honest placeholders, not download links."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {APPS.map((a, i) => {
            const inner = (
              <Card
                className={
                  a.href
                    ? "h-full transition-colors hover:border-teal/50 dark:hover:border-mint/50"
                    : "h-full"
                }
              >
                <CardContent className="flex h-full flex-col pt-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal dark:text-mint">
                      <a.icon className="h-5 w-5" />
                    </div>
                    <Badge variant={a.badgeVariant}>{a.badge}</Badge>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-navy dark:text-white">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {a.body}
                  </p>
                  {a.cta && (
                    <span className="mt-4 inline-block text-sm font-medium text-teal dark:text-mint">
                      {a.cta} →
                    </span>
                  )}
                </CardContent>
              </Card>
            );
            return (
              <Reveal key={a.title} delay={i * 0.04}>
                {a.href ? <Link href={a.href}>{inner}</Link> : inner}
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="ink-surface relative text-white">
        <div className="bg-grid-fine absolute inset-0 opacity-25" aria-hidden />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mint">
              Mobile
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Apps ship after launch
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              The mobile builds are in development. Store listings go live at
              release — until then these badges are labels, not links.
            </p>
          </div>
          <StoreBadges />
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <SectionHeading
            eyebrow="Start here"
            title="New to ConstructFi?"
            lede="The getting-started walkthrough covers wallet setup on Base, verification, and how your first milestone gets minted."
          />
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/getting-started">
                Getting started
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/whitepaper">Read the whitepaper</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
