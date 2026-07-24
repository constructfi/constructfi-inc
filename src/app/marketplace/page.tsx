import type { Metadata } from "next";
import Image from "next/image";
import { ShoppingCart, Recycle, ShieldCheck, Boxes, Store, Coins } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Marketplace",
  description:
    "The ConstructFi marketplace connects a verified supplier network to real procurement. Rewards are funded by real commerce — not by printing tokens.",
  openGraph: {
    title: "ConstructFi Marketplace",
    description:
      "A verified supplier network where real procurement funds real rewards.",
    url: `${SITE.url}/marketplace`,
    images: [{ url: "/img/marketplace.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/marketplace" },
};

const FEATURES = [
  {
    icon: Store,
    title: "Verified supplier network",
    body: "Every supplier is vetted before listing. Procurement flows through Covington Supply Co.’s ~$7M/year operations across six markets.",
  },
  {
    icon: Recycle,
    title: "Fee-recycling economics",
    body: "A share of marketplace transaction fees recycles into the rewards pool, so participation is funded by genuine commerce.",
  },
  {
    icon: Coins,
    title: "Spend and earn in COVI",
    body: "COVI is the unit of account for eligible purchases and rewards — a utility token used for consumption, not investment.",
  },
  {
    icon: ShieldCheck,
    title: "On-chain settlement",
    body: "Transactions settle transparently. Contract addresses publish only after independent audit.",
  },
  {
    icon: Boxes,
    title: "Sustainable materials",
    body: "$2.1M+ in sustainable materials sourced to date, with provenance surfaced at point of purchase.",
  },
  {
    icon: ShoppingCart,
    title: "Built for businesses",
    body: "Bulk procurement, subcontractor coordination, and transparent supply chains for real building operations.",
  },
];

export default function MarketplacePage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · Marketplace"
        title="Real procurement, funding real rewards"
        lede="The ConstructFi marketplace links a verified supplier network to on-chain settlement — so rewards are backed by real commerce, not token printing."
      >
        <Badge className="bg-white/10 text-white">Launching {SITE.launchDate}</Badge>
      </PageHero>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="How it works"
              title="Commerce first. Rewards follow."
              lede="ConstructFi’s thesis is simple: rewards should be paid from a real, verified supplier network. The marketplace is where that commerce happens."
            />
            <ul className="mt-6 space-y-3 text-foreground/85">
              {[
                "Buyers procure materials and services from vetted suppliers.",
                "A portion of transaction fees recycles into the COVI rewards pool.",
                "Verified activity can earn ELUV milestones — non-transferable proof of progress.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" aria-hidden />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-line shadow-lg dark:border-border">
            <Image
              src="/img/marketplace.png"
              alt="ConstructFi marketplace interface"
              width={900}
              height={640}
              className="h-auto w-full"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-wash dark:bg-ink-2/30">
        <SectionHeading
          eyebrow="Capabilities"
          title="What the marketplace does"
          align="center"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <Card key={f.title} className="h-full">
              <CardContent className="pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal dark:text-mint">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
