import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Building2,
  BriefcaseBusiness,
  GraduationCap,
  Landmark,
  LayoutGrid,
  Store,
  Wallet,
} from "lucide-react";
import { FeaturedProductCard, ProductCard } from "@/components/product-card";
import { Section, SectionHeading } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FEATURED_PRODUCT, PRODUCTS } from "@/lib/products";
import { COVI, ELUV, MARKETS, SITE, STATS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ecosystem",
  description: SITE.description,
  alternates: { canonical: "/" },
};

const PILLARS = [
  {
    icon: Blocks,
    title: "ConstructFi is the ecosystem",
    body: "A coordinated system for people who build: discovery, usable products, partner infrastructure, and an optional participation layer built on real operations.",
  },
  {
    icon: Store,
    title: "Marketplace is discovery",
    body: "Browse the products, supplier infrastructure, and collectible experiences that sit on shared rails without implying everything is already live.",
  },
  {
    icon: LayoutGrid,
    title: "Products are for use",
    body: "Use Build or Bust, procurement tools, readiness tracking, and operating software because they solve work — not because they promise financial upside.",
  },
  {
    icon: Building2,
    title: "Partner Solutions are the build path",
    body: "Organizations launch branded web and mobile programs on maintained infrastructure, with token-free public-sector options by default.",
  },
];

const CATEGORY_CARDS = [
  {
    title: "Apps",
    body: "Decision tools, readiness tracking, wallet access, and operating software.",
  },
  {
    title: "Materials",
    body: "Verified supplier and material marketplaces tied to genuine procurement activity.",
  },
  {
    title: "Games",
    body: "Participation-first experiences that teach workflows and reward verified engagement.",
  },
  {
    title: "Own",
    body: "Transferable digital collectibles live separately from ELUV, which remains a non-transferable credential.",
  },
];

const PARTNER_AUDIENCES = [
  { icon: Landmark, label: "Public agencies" },
  { icon: BriefcaseBusiness, label: "Private enterprises" },
  { icon: GraduationCap, label: "Educational institutions" },
  { icon: Building2, label: "Nonprofits" },
  { icon: BadgeCheck, label: "Industry organizations" },
];

const SOLUTION_CARDS = [
  "Custom web and mobile apps for targeted member or workforce journeys",
  "Program platforms for workforce, education, and economic-development outcomes",
  "Marketplace and procurement workflows that connect to verified supply activity",
  "Program, case, and reporting tools that map to funder and compliance frameworks",
];

const PARTICIPATION_STEPS = [
  "Connect a non-custodial wallet when you want on-chain participation. You keep your keys; ConstructFi does not custody them.",
  "Use products and partner programs first. Token participation is optional, and government or public-interest programs can stay token-free by default.",
  "Wait for audited contract publishing before trusting any COVI or ELUV address. Official addresses publish only after independent review.",
];

const HOME_PRODUCTS = PRODUCTS.filter((product) =>
  ["supplier-marketplace", "revenueos", "collectibles"].includes(product.slug)
);

export default function HomePage() {
  return (
    <>
      <section className="ink-surface relative overflow-hidden text-white">
        <div className="bg-grid absolute inset-0 opacity-25" aria-hidden />
        <div className="container relative py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <Badge className="bg-white/10 text-white">{SITE.tagline}</Badge>
              <h1 className="mt-5 max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                The ecosystem for people who build
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
                ConstructFi brings together marketplace discovery, products people can
                use, and Partner Solutions organizations can build on. COVI and ELUV
                add an optional participation layer on top of real construction,
                housing, procurement, and readiness activity.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge className="bg-white/10 text-white">Optional participation layer</Badge>
                <Badge className="bg-white/10 text-white">Non-custodial wallet support</Badge>
                <Badge className="bg-white/10 text-white">Audit-gated contracts</Badge>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/marketplace">
                    Explore the marketplace
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/partners">See Partner Solutions</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-2" aria-label="Active markets">
                {MARKETS.map((market) => (
                  <span
                    key={market}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm font-medium text-white/80"
                  >
                    {market}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/20">
              <Image
                src="/img/hero.png"
                alt="ConstructFi ecosystem preview spanning marketplace, readiness, and partner infrastructure"
                width={1200}
                height={630}
                className="h-auto w-full rounded-[20px] border border-white/10"
                priority
              />
            </div>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-2xl font-bold text-mint">{stat.value}</p>
                <p className="mt-1 text-sm font-semibold text-white">{stat.label}</p>
                <p className="mt-1 text-sm text-white/65">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow="How the ecosystem is organized"
          title="One ecosystem, four jobs"
          lede="ConstructFi works best when discovery, product usage, partner infrastructure, and participation stay clear about what each layer does."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="card-lift rounded-2xl border border-line bg-card p-6 shadow-sm dark:border-border"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal dark:text-mint">
                <pillar.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy dark:text-white">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-wash dark:bg-ink-2/30" id="discover">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="Marketplace"
            title="Discovery starts with categories people recognize"
            lede="Browse by function, not hype: apps, materials, games, and an Own lane for transferable digital collectibles."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {CATEGORY_CARDS.map((category) => (
              <div
                key={category.title}
                className="card-lift rounded-2xl border border-line bg-card p-6 shadow-sm dark:border-border"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal dark:text-mint">
                  {category.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {category.body}
                </p>
              </div>
            ))}
            <div className="rounded-2xl border border-line bg-background p-6 dark:border-border sm:col-span-2">
              <p className="text-sm font-semibold text-navy dark:text-white">
                Own is separate from ELUV.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Transferable collectibles use OpenSea-style language and appear in the
                Own tab when collections are ready. ELUV never appears there because it
                is a non-transferable milestone credential that stays in your wallet and
                readiness record.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Featured products"
          title="Use what the ecosystem ships"
          lede="Marketplace discovery should lead into usable products: deal analysis, procurement, operating systems, and collectibles that support participation without replacing the work."
        />
        <div className="mt-12">
          <FeaturedProductCard product={FEATURED_PRODUCT} />
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {HOME_PRODUCTS.map((product, index) => (
            <ProductCard key={product.slug} product={product} eagerImage={index === 0} />
          ))}
        </div>
      </Section>

      <Section className="bg-wash dark:bg-ink-2/30">
        <SectionHeading
          eyebrow="Partner Solutions"
          title="Build programs for the people and organizations you serve"
          lede="ConstructFi helps nonprofits, public agencies, educational institutions, industry organizations, and private enterprises launch branded experiences on maintained infrastructure."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {PARTNER_AUDIENCES.map((audience) => (
            <div
              key={audience.label}
              className="card-lift rounded-2xl border border-line bg-card p-5 text-sm font-semibold text-navy shadow-sm dark:border-border dark:text-white"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10 text-teal dark:text-mint">
                <audience.icon className="h-5 w-5" />
              </div>
              <p className="mt-4">{audience.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {SOLUTION_CARDS.map((solution) => (
            <div
              key={solution}
              className="card-lift rounded-2xl border border-line bg-background p-6 shadow-sm dark:border-border"
            >
              <p className="text-sm leading-relaxed text-muted-foreground">{solution}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/partners">
              Explore Partner Solutions
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/developers">Developer overview</Link>
          </Button>
        </div>
      </Section>

      <Section id="participation">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr]">
          <SectionHeading
            eyebrow="Participation"
            title="COVI moves utility. ELUV proves progress."
            lede="ConstructFi treats COVI and ELUV as an optional participation layer, not as an investment proposition. They exist to support construction, readiness, and real-estate progress workflows."
          />
          <div className="space-y-5">
            <div className="card-lift rounded-2xl border border-line bg-card p-6 shadow-sm dark:border-border">
              <div className="flex items-center gap-3 text-teal dark:text-mint">
                <Wallet className="h-5 w-5" />
                <p className="text-base font-semibold text-navy dark:text-white">
                  {COVI.name} is construction ecosystem utility
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Spend or earn {COVI.name} inside marketplace and product workflows where
                platform utility is appropriate. It is a utility token for ecosystem
                activity, not a promise of yield, income, or appreciation.
              </p>
            </div>
            <div className="card-lift rounded-2xl border border-line bg-card p-6 shadow-sm dark:border-border">
              <div className="flex items-center gap-3 text-gold">
                <BadgeCheck className="h-5 w-5" />
                <p className="text-base font-semibold text-navy dark:text-white">
                  {ELUV.name} is a progress and credential record
                </p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {ELUV.name} is earned through verified readiness, housing, workforce, and
                procurement milestones. It is non-transferable, never sold, and exists to
                prove progress rather than to trade.
              </p>
            </div>
            <div className="rounded-2xl border border-dashed border-teal/30 bg-teal/5 p-6">
              <p className="text-sm font-semibold text-navy dark:text-white">
                Optional by design
              </p>
              <ul className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {PARTICIPATION_STEPS.map((step) => (
                  <li key={step} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-mint" aria-hidden />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section className="ink-surface relative text-white">
        <div className="bg-grid-fine absolute inset-0 opacity-25" aria-hidden />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mint">
              Keep going
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Start with the marketplace, then decide how deeply you want to participate
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              Read the whitepaper for the full architecture, explore Partner Solutions
              if you run programs, and visit Developers if you need integration context.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/whitepaper">Read the whitepaper</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/developers">Visit Developers</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
