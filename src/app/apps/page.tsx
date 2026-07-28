import type { Metadata } from "next";
import Link from "next/link";
import { LineChart, Smartphone, Building2, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { StoreBadges } from "@/components/store-badges";
import { ProductIcon } from "@/components/product-icon";
import { StatusPill } from "@/components/status-pill";
import { CATEGORIES, PRODUCTS, type Product } from "@/lib/products";
import { SITE } from "@/lib/site";

function categoryLabel(key: Product["category"]) {
  return CATEGORIES.find((c) => c.key === key)?.label ?? key;
}

export const metadata: Metadata = {
  title: "All apps & roadmap",
  description:
    "Every ConstructFi product and the order it ships in: Build or Bust, the supplier marketplace, the wallet, the readiness tracker, and what follows in Phase 2.",
  openGraph: {
    title: "ConstructFi apps & roadmap",
    description:
      "Every product, the order it ships in, and what is still sequenced behind it.",
    url: `${SITE.url}/apps`,
    images: [{ url: "/img/readiness.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/apps" },
};

// Platform surfaces that are not marketplace listings — they have no store page.
const PLATFORM = [
  {
    icon: LineChart,
    title: "Participant dashboard",
    body: "One view of your COVI activity, verified ELUV milestones, and readiness progression. A static preview with demonstration data is available today.",
    badge: "Preview available",
    badgeVariant: "gold" as const,
    href: "/dashboard",
    cta: "View the preview",
  },
  {
    icon: Building2,
    title: "Procurement workspace",
    body: "Bulk ordering, subcontractor coordination, and supply-chain provenance for teams running real jobs across the six active markets.",
    badge: "Phase 2",
    badgeVariant: "outline" as const,
  },
  {
    icon: Smartphone,
    title: "Mobile companion",
    body: "Build or Bust and dashboard access on iOS and Android, so participation and milestone submission work from the job site.",
    badge: "Phase 2",
    badgeVariant: "outline" as const,
  },
];

export default function AppsPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · Apps & roadmap"
        title="One platform, sequenced deliberately"
        lede="ConstructFi ships as a small set of products that reinforce each other: screen deals in Build or Bust, procure in the marketplace, and watch it compound on your dashboard."
      >
        <Badge className="bg-white/10 text-white">
          Phase 1 launches {SITE.launchDate}
        </Badge>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="The platform map"
          title={`All ${PRODUCTS.length} products and the phase each ships in`}
          lede="A roster, not a storefront — one line per product so the sequence is readable at a glance. Full descriptions, screenshots, and tags live in the marketplace."
        />
        <ul className="mt-12 roster">
          {PRODUCTS.map((p) => (
            <li className="roster-row" key={p.slug} data-testid={`roster-${p.slug}`}>
              <span className="roster-ic" aria-hidden>
                <ProductIcon icon={p.icon} />
              </span>
              <span className="roster-txt">
                <b>{p.name}</b>
                <span>{p.tagline}</span>
              </span>
              <span className="roster-cat">{categoryLabel(p.category)}</span>
              <StatusPill status={p.status} />
              <Link className="roster-link" href={`/marketplace/${p.slug}`}>
                View in store →
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/marketplace">
              Browse the app store
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/app">Try Build or Bust</Link>
          </Button>
        </div>
      </Section>

      <Section className="bg-wash dark:bg-ink-2/30">
        <SectionHeading
          eyebrow="Also on the platform"
          title="Surfaces that are not store listings"
          lede="These support the products above rather than standing alone as marketplace items."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PLATFORM.map((a, i) => {
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
              release — until then these badges are labels, not links. You can try
              the Build or Bust prototype in your browser today.
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
