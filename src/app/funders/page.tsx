import type { Metadata } from "next";
import { TrendingUp, Target, BarChart3, ShieldCheck, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { STATS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Funders",
  description:
    "For funders and grantmakers: ConstructFi turns capital into measurable, verifiable outcomes through on-chain milestones and a real supplier economy.",
  openGraph: {
    title: "ConstructFi for Funders",
    description:
      "Capital into measurable, verifiable outcomes — backed by real operations.",
    url: `${SITE.url}/funders`,
  },
  alternates: { canonical: "/funders" },
};

const VALUE = [
  {
    icon: Target,
    title: "Outcome-based verification",
    body: "Grant milestones map to ELUV credentials — non-transferable, tamper-resistant proof that an outcome actually happened.",
  },
  {
    icon: BarChart3,
    title: "Measurable impact",
    body: "Track participation, completion, and procurement in real markets rather than self-reported surveys.",
  },
  {
    icon: TrendingUp,
    title: "Real economic base",
    body: "Programs run on top of $60M+ in development activity and ~$7M in annual supply operations — not a whitepaper alone.",
  },
  {
    icon: ShieldCheck,
    title: "Accountable disbursement",
    body: "Treasury controls use timelock + multisig, and reporting is grounded in verifiable on-chain activity.",
  },
];

export default function FundersPage() {
  return (
    <>
      <PageHero
        eyebrow="Ecosystem · Funders"
        title="Fund outcomes you can verify"
        lede="ConstructFi converts grant and program capital into measurable, on-chain outcomes — backed by two operating businesses and a verified supplier network."
      >
        <Button asChild variant="outline" className="border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white">
          <Link href="/whitepaper">
            <FileText className="mr-1.5 h-4 w-4" />
            Read the whitepaper
          </Link>
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-6 sm:grid-cols-3">
          {STATS.slice(0, 3).map((s) => (
            <div key={s.label} className="rounded-xl border border-line p-6 dark:border-border">
              <div className="text-3xl font-bold text-teal dark:text-mint">{s.value}</div>
              <div className="mt-1 font-medium text-navy dark:text-white">{s.label}</div>
              <div className="text-sm text-muted-foreground">{s.sub}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-wash dark:bg-ink-2/30">
        <SectionHeading eyebrow="Why funders choose ConstructFi" title="Capital to verifiable outcomes" align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {VALUE.map((v) => (
            <Card key={v.title} className="h-full">
              <CardContent className="pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal dark:text-mint">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy dark:text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold text-navy dark:text-white">
            Explore a funded program
          </h2>
          <p className="max-w-xl text-muted-foreground">
            We work with funders to design milestone frameworks and reporting ahead of
            the {SITE.launchDate} launch.
          </p>
          <Button asChild>
            <Link href="/contact">
              Start a conversation
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
