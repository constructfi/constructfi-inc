import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Code2,
  FileCode2,
  Github,
  Webhook,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE, COVI, ELUV } from "@/lib/site";

export const metadata: Metadata = {
  title: "Developers",
  description:
    "Developer overview for ConstructFi ecosystem and Partner Solutions integrations, including COVI, ELUV, and audit-gated contract publishing.",
  openGraph: {
    title: "ConstructFi Developers",
    description:
      "Build for ecosystem products and partner programs on transparent, audit-gated rails.",
    url: `${SITE.url}/developers`,
  },
  alternates: { canonical: "/developers" },
};

const BLOCKS = [
  {
    icon: Code2,
    title: "COVI utility rails",
    body: `${COVI.standard} utility token support for ecosystem activity, with ${COVI.chain.toLowerCase()} and no investment framing.`,
  },
  {
    icon: FileCode2,
    title: "ELUV credential rails",
    body: `${ELUV.standard} milestone credentials: non-transferable, consent-based, and separate from collectible or marketplace listings.`,
  },
  {
    icon: Blocks,
    title: "Partner program infrastructure",
    body: "Branded program instances for workforce, education, procurement, and operating workflows on maintained shared infrastructure.",
  },
  {
    icon: Webhook,
    title: "Integrations and webhooks",
    body: "Hook partner systems, reporting pipelines, and product workflows into shared rails once audited contracts and interfaces publish.",
  },
];

export default function DevelopersPage() {
  return (
    <>
      <PageHero
        eyebrow="Developers"
        title="Build for ecosystem products and partner programs"
        lede="ConstructFi separates utility, credentials, and partner delivery concerns so developers can integrate the right layer without blurring what each part is for."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href={SITE.githubRepo} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1.5 h-4 w-4" />
              View the GitHub repository
              <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
            </a>
          </Button>
          <Button asChild variant="outline">
            <Link href="/partners">Partner Solutions</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/whitepaper">Whitepaper</Link>
          </Button>
        </div>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Architecture"
          title="Four integration surfaces"
          lede="Use the layer that matches the problem: utility rails, credential rails, partner infrastructure, or workflow/event integrations."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {BLOCKS.map((block) => (
            <Card key={block.title} className="h-full">
              <CardContent className="pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal dark:text-mint">
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
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          <SectionHeading
            eyebrow="Publishing posture"
            title="Audit first, addresses after"
            lede="Wallet-connect is real today, but contract addresses, ABIs, and production integration details publish only after independent audit."
          />
          <div className="rounded-2xl border border-line bg-card p-6 shadow-sm dark:border-border">
            <Badge className="bg-gold/15 text-gold dark:text-gold-2">
              Contracts publishing after audit
            </Badge>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Verified contract addresses, ABIs, and integration notes will publish
              through official ConstructFi channels after the audit is complete. Until
              then, treat any claimed address as unofficial and avoid hard-coding
              speculative values into downstream integrations.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href={SITE.githubRepo} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1.5 h-4 w-4" />
                  Follow release activity
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/security">Security posture</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <SectionHeading
            eyebrow="Partner Solutions teaser"
            title="Most integrations start with a program or workflow need"
            lede="If you are building for a nonprofit, public agency, educational institution, industry organization, or enterprise, start with Partner Solutions so the technical shape follows the operating shape."
          />
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/partners">
                Explore Partner Solutions
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Talk to ConstructFi</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
