import type { Metadata } from "next";
import Link from "next/link";
import { Github, ArrowUpRight, Code2, Boxes, FileCode2, Webhook, BookOpen } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE, COVI, ELUV } from "@/lib/site";

export const metadata: Metadata = {
  title: "Developers",
  description:
    "Build on ConstructFi. Two audited token standards — COVI (ERC-20) and ELUV (ERC-5192 soulbound) — with white-label infrastructure and open documentation.",
  openGraph: {
    title: "ConstructFi for Developers",
    description:
      "Two audited token standards and white-label infrastructure for real-world participation.",
    url: `${SITE.url}/developers`,
  },
  alternates: { canonical: "/developers" },
};

const BLOCKS = [
  {
    icon: Code2,
    title: "COVI — ERC-20 utility",
    body: `${COVI.composition}. Fixed cap of ${COVI.supply}, ${COVI.chain.toLowerCase()}.`,
  },
  {
    icon: FileCode2,
    title: "ELUV — ERC-5192 soulbound",
    body: `${ELUV.standard}. One non-transferable credential per verified milestone; consent-based issuance and revocation.`,
  },
  {
    icon: Boxes,
    title: "White-label infrastructure",
    body: "Institutions can deploy branded programs — curriculum, milestones, and credentialing — on shared, transparent rails.",
  },
  {
    icon: Webhook,
    title: "Attestation & webhooks",
    body: "Off-chain attestations reference on-chain hashes. Integration surfaces publish alongside audited contracts.",
  },
];

export default function DevelopersPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · Developers"
        title="Build on transparent, audited rails"
        lede="ConstructFi separates transaction infrastructure (COVI) from progression infrastructure (ELUV). Both are open, documented, and audit-gated."
      >
        <Button asChild>
          <a href={SITE.githubRepo} target="_blank" rel="noopener noreferrer">
            <Github className="mr-1.5 h-4 w-4" />
            View the GitHub organization
            <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
          </a>
        </Button>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Architecture"
          title="Two standards, two jobs"
          lede="Conflating commerce and credentials is a common failure mode in token design. ConstructFi keeps them cleanly separate."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {BLOCKS.map((b) => (
            <Card key={b.title} className="h-full">
              <CardContent className="pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal dark:text-mint">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy dark:text-white">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-wash dark:bg-ink-2/30">
        <div className="mx-auto grid max-w-5xl gap-8 rounded-2xl border border-line bg-background p-8 dark:border-border lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div>
            <Badge className="bg-gold/15 text-gold dark:text-gold-2">Whitepaper</Badge>
            <h2 className="mt-4 text-2xl font-bold text-navy dark:text-white">
              The full technical &amp; economic model
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Read the complete ConstructFi whitepaper for the two-token model,
              marketplace economics, governance, compliance posture, security
              assumptions, and partner infrastructure.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/whitepaper">
                  Read the whitepaper
                  <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href={`${SITE.githubRepo}/blob/main/src/lib/whitepaper.ts`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View source on GitHub
                  <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </div>
          <Card className="h-full">
            <CardContent className="pt-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal dark:text-mint">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-navy dark:text-white">
                ConstructFi Whitepaper
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Version 2.1 covers marketplace, procurement, participation,
                funder mappings, governance, security, compliance, roadmap, and
                legal disclaimers in one source file.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section className="bg-wash dark:bg-ink-2/30">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="bg-gold/15 text-gold dark:text-gold-2">
            Contracts publishing after audit
          </Badge>
          <h2 className="mt-4 text-2xl font-bold text-navy dark:text-white">
            Documentation & addresses on the way
          </h2>
          <p className="mt-3 text-muted-foreground">
            Verified contract addresses, ABIs, and integration guides publish here
            once independent audits complete. Any address circulated before then is
            not official. Follow the GitHub organization for release updates.
          </p>
          <div className="mt-6">
            <Button variant="outline" asChild>
              <a href={SITE.githubRepo} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1.5 h-4 w-4" />
                {SITE.githubRepo.replace("https://", "")}
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
