import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Eyebrow } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

const POINTS = [
  "Educational apps, NFTs, supply & procurement, and a partner marketplace",
  "Every purchase earns ~2% back in COVI",
  "Marketplace fees fund the rewards loop — real demand, not emissions",
  "Gaming and DeFi follow, deliberately sequenced and compliance-reviewed",
];

export function MarketplaceTeaser() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div>
              <Eyebrow>One marketplace. Many products.</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy dark:text-white sm:text-4xl">
                Commerce becomes infrastructure
              </h2>
              <p className="mt-4 text-muted-foreground">
                Verified suppliers, transparent transactions, and coordinated supply
                chains create efficient, trustworthy commerce — and every transaction
                feeds the rewards loop.
              </p>
              <ul className="mt-6 space-y-3">
                {POINTS.map((p) => (
                  <li key={p} className="flex gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal dark:text-mint" />
                    <span className="text-foreground/85">{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button variant="outline" asChild>
                  <Link href="/marketplace" data-testid="link-marketplace">
                    Explore the marketplace
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line dark:border-border">
              <Image
                src="/img/marketplace.png"
                alt="Verified supplier network coordinating transparent commerce"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
