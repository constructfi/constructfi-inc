import Link from "next/link";
import { Award, Layers, Lock, Ticket, ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { ELUV, SITE } from "@/lib/site";

const COLLECTIONS = [
  {
    icon: Award,
    title: "ELUV milestone credentials",
    body: `${ELUV.standard}. One credential minted per verified milestone — proof of readiness that follows the person, not the wallet balance.`,
    badge: "Soulbound · earned only",
    badgeVariant: "default" as const,
  },
  {
    icon: Ticket,
    title: "Participation collectibles",
    body: "Commemorative items issued for cohort completions and marketplace milestones. Distributed inside the platform through activity — never sold as a speculative drop.",
    badge: "Phase 2 · Coming soon",
    badgeVariant: "outline" as const,
  },
  {
    icon: Layers,
    title: "Supplier & provenance records",
    body: "Sourcing records that attach provenance to sustainable materials moving through the verified supplier network, viewable at point of purchase.",
    badge: "Phase 2 · Coming soon",
    badgeVariant: "outline" as const,
  },
];

export function NftCollections() {
  return (
    <Section id="collections" className="bg-wash dark:bg-ink-2/40">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:items-end">
        <SectionHeading
          eyebrow="Collections"
          title="The credential layer"
          lede="ConstructFi’s NFTs are records, not merchandise. The most important one — ELUV — can never be bought or sold."
        />
        <div className="flex flex-wrap items-center gap-3 lg:justify-end">
          <Badge className="bg-teal/12 text-teal dark:text-mint">
            Marketplace launches {SITE.launchDate}
          </Badge>
          <Badge variant="outline">No third-party listings</Badge>
        </div>
      </div>

      {/* 1 col on mobile, 3 on desktop */}
      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {COLLECTIONS.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <Card className="h-full">
              <CardContent className="flex h-full flex-col pt-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal dark:text-mint">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <Badge variant={c.badgeVariant}>{c.badge}</Badge>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy dark:text-white">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-6 rounded-2xl border border-line bg-card p-6 dark:border-border sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-3">
          <Lock className="mt-0.5 h-4 w-4 shrink-0 text-teal dark:text-mint" aria-hidden />
          <p className="max-w-2xl text-sm leading-relaxed text-foreground/85">
            Collections live inside the ConstructFi marketplace when it opens on{" "}
            {SITE.launchDate}. There are no external listings today — treat any
            third-party &ldquo;ConstructFi&rdquo; collection as unaffiliated.
          </p>
        </div>
        <Button variant="outline" asChild className="shrink-0">
          <Link href="/marketplace">
            See the marketplace
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
