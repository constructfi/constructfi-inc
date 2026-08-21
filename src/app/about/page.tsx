import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, LayoutGrid, Store, Wallet } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MARKETS, STATS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About ConstructFi: the ecosystem for people who build, organized around marketplace discovery, usable products, partner solutions, and optional participation.",
  alternates: { canonical: "/about" },
};

const BLOCKS = [
  {
    icon: LayoutGrid,
    title: "Ecosystem",
    body: "ConstructFi coordinates products, marketplace discovery, partner programs, and participation infrastructure on shared rails.",
  },
  {
    icon: Store,
    title: "Marketplace",
    body: "The marketplace is where people discover products, supplier workflows, and the Own lane for transferable digital collectibles.",
  },
  {
    icon: Building2,
    title: "Partner Solutions",
    body: "Organizations launch branded web and mobile experiences, reporting tools, and operating workflows without rebuilding the platform core.",
  },
  {
    icon: Wallet,
    title: "Participation",
    body: "Wallet connection and token participation are optional. Public-sector and government programs can stay token-free by default.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About · ConstructFi"
        title="A practical ecosystem for people who build"
        lede="ConstructFi brings together discovery, products, partner infrastructure, and optional participation on top of real development and supply operations."
      >
        <div className="flex flex-wrap gap-2">
          {MARKETS.map((market) => (
            <span
              key={market}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm font-medium text-white/80"
            >
              {market}
            </span>
          ))}
        </div>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="What ConstructFi is"
          title="Organized around the work, not around speculation"
          lede="ConstructFi is designed so each layer stays legible: marketplace for discovery, products for usage, partner infrastructure for programs, and participation tools where they help."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {BLOCKS.map((block) => (
            <Card key={block.title} className="h-full">
              <CardContent className="pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal dark:text-mint">
                  <block.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy dark:text-white">
                  {block.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {block.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-wash dark:bg-ink-2/30">
        <SectionHeading
          eyebrow="Operating base"
          title="Built on real activity"
          lede="The core site metrics come from operating businesses and existing market activity, which is why the ecosystem can talk about participation without inventing a synthetic starting point."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-line bg-card p-6 shadow-sm dark:border-border"
            >
              <p className="text-2xl font-bold text-teal dark:text-mint">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-navy dark:text-white">
                {stat.label}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.sub}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <SectionHeading
            eyebrow="Next steps"
            title="Go deeper where you need to"
            lede="Use the whitepaper for the full thesis and architecture, the marketplace for product discovery, and Partner Solutions if you are building programs for an organization."
          />
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/whitepaper">
                Read the whitepaper
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/partners">Partner Solutions</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
