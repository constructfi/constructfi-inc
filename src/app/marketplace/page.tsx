import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Gamepad2,
  LayoutGrid,
  Package,
  Wallet,
} from "lucide-react";
import { ProductBrowser } from "@/components/product-browser";
import { FeaturedProductCard } from "@/components/product-card";
import { Section, SectionHeading } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FEATURED_PRODUCT } from "@/lib/products";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Marketplace",
  description:
    "Discover ConstructFi products, supplier workflows, and the Own lane for transferable digital collectibles while keeping ELUV credentials clearly separate.",
  openGraph: {
    title: "ConstructFi Marketplace",
    description:
      "Marketplace discovery for products, supplier workflows, and optional participation.",
    url: `${SITE.url}/marketplace`,
    images: [{ url: "/img/marketplace.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/marketplace" },
};

const CATEGORY_BLOCKS = [
  {
    icon: LayoutGrid,
    title: "Apps",
    body: "Tools for deal screening, readiness, wallets, and operating workflows.",
  },
  {
    icon: Boxes,
    title: "Materials",
    body: "Verified supplier and package-based procurement workflows connected to real operations.",
  },
  {
    icon: Gamepad2,
    title: "Games",
    body: "Participation-first experiences that reinforce learning, readiness, and product usage.",
  },
  {
    icon: Package,
    title: "Own",
    body: "Transferable digital collectibles and NFTs that can point to OpenSea when collections are actually listed.",
  },
];

const PARTICIPATION_NOTES = [
  {
    icon: Wallet,
    title: "Non-custodial by default",
    body: "Connect the wallet you already use when you want on-chain participation. ConstructFi does not hold your keys or fake a wallet flow.",
  },
  {
    icon: BadgeCheck,
    title: "Audit-gated contracts",
    body: "COVI and ELUV addresses publish only after independent audit. Anything circulating before then should be treated as unofficial.",
  },
  {
    icon: ArrowRight,
    title: "COVI and ELUV stay distinct",
    body: "COVI supports ecosystem utility. ELUV records verified progress. Transferable collectibles in Own are separate from both.",
  },
];

export default function MarketplacePage() {
  return (
    <>
      <section className="ink-surface relative overflow-hidden text-white">
        <div className="bg-grid absolute inset-0 opacity-25" aria-hidden />
        <div className="container relative py-16 sm:py-20">
          <Badge className="bg-white/10 text-white">Marketplace</Badge>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Discovery for the ConstructFi ecosystem
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
            Start here to see what ConstructFi ships. The marketplace is the discovery
            layer for products, supplier workflows, and the Own lane for transferable
            digital collectibles — while ELUV remains a non-transferable credential.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/getting-started">Getting started</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/whitepaper">Read the whitepaper</Link>
            </Button>
          </div>
        </div>
      </section>

      <Section id="discover">
        <SectionHeading
          eyebrow="Browse by lane"
          title="Categories that match how people shop"
          lede="The marketplace separates discovery into recognizable lanes so apps, materials, games, and Own collectibles do not blur into each other."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {CATEGORY_BLOCKS.map((block) => (
            <div
              key={block.title}
              className="card-lift rounded-2xl border border-line bg-card p-6 shadow-sm dark:border-border"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal dark:text-mint">
                <block.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy dark:text-white">
                {block.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {block.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-wash dark:bg-ink-2/30">
        <SectionHeading
          eyebrow="Featured"
          title="Start with the flagship product"
          lede="Build or Bust remains the clearest entry point for using the ecosystem today."
        />
        <div className="mt-12">
          <FeaturedProductCard product={FEATURED_PRODUCT} />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="All listings"
          title="Browse the marketplace"
          lede="Every listing stays honest about what ships at launch, what is coming next, and what belongs in Own instead of in the credential layer."
        />
        <div className="mt-10">
          <ProductBrowser />
        </div>
      </Section>

      <Section className="bg-wash dark:bg-ink-2/30" id="participation">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="Participation layer"
            title="Optional, non-custodial, and audit-gated"
            lede="Marketplace participation should help people use the ecosystem, not distract from what the products actually do."
          />
          <div className="space-y-5">
            {PARTICIPATION_NOTES.map((note) => (
              <div
                key={note.title}
                className="card-lift rounded-2xl border border-line bg-card p-6 shadow-sm dark:border-border"
              >
                <div className="flex items-center gap-3 text-teal dark:text-mint">
                  <note.icon className="h-5 w-5" />
                  <p className="text-base font-semibold text-navy dark:text-white">
                    {note.title}
                  </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {note.body}
                </p>
              </div>
            ))}
            <div className="rounded-2xl border border-dashed border-gold/40 bg-gold/5 p-6">
              <p className="text-sm font-semibold text-navy dark:text-white">
                Own uses OpenSea language only for transferable collectibles.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                When a transferable collection is ready, ConstructFi can point to the
                relevant OpenSea collection page. ELUV is excluded from that flow
                because it is a non-transferable milestone credential rather than a
                tradable item.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/partners">
              Partner Solutions
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/developers">Developer overview</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
