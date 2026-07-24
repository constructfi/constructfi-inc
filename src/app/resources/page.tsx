import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Github, Shield, Scale, BookOpen, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "ConstructFi resources: the whitepaper and PDF, GitHub organization, security posture, and legal documents — all in one place.",
  openGraph: {
    title: "ConstructFi Resources",
    description: "Whitepaper, code, security, and legal — all in one place.",
    url: `${SITE.url}/resources`,
  },
  alternates: { canonical: "/resources" },
};

const RESOURCES: {
  icon: typeof FileText;
  title: string;
  body: string;
  href: string;
  external?: boolean;
  cta: string;
}[] = [
  {
    icon: BookOpen,
    title: "Whitepaper (web)",
    body: "The complete 15-chapter technical and economic overview, version 2.1.",
    href: "/whitepaper",
    cta: "Read online",
  },
  {
    icon: FileText,
    title: "Whitepaper (PDF)",
    body: "Download the full whitepaper as a print-ready PDF.",
    href: "/ConstructFi_Whitepaper_v2.1.pdf",
    external: true,
    cta: "Download PDF",
  },
  {
    icon: Github,
    title: "GitHub organization",
    body: "Source, releases, and audited contract addresses (publishing after audit).",
    href: SITE.githubRepo,
    external: true,
    cta: "View on GitHub",
  },
  {
    icon: Shield,
    title: "Security posture",
    body: "Audit-gating, non-custodial design, treasury controls, and disclosure.",
    href: "/security",
    cta: "Read security",
  },
  {
    icon: Scale,
    title: "Legal documents",
    body: "Terms of Use, Privacy Policy, and Risk Disclosure.",
    href: "/legal/terms",
    cta: "Read legal",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Ecosystem · Resources"
        title="Everything in one place"
        lede="Documentation, code, security, and legal — the canonical references for ConstructFi."
      />
      <Section>
        <SectionHeading eyebrow="Library" title="Resources & documentation" align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((r) => {
            const inner = (
              <Card className="h-full transition-colors hover:border-teal/50 dark:hover:border-mint/50">
                <CardContent className="pt-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal dark:text-mint">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 flex items-center gap-1 text-lg font-semibold text-navy dark:text-white">
                    {r.title}
                    {r.external && <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {r.body}
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium text-teal dark:text-mint">
                    {r.cta} →
                  </span>
                </CardContent>
              </Card>
            );
            return r.external ? (
              <a key={r.title} href={r.href} target="_blank" rel="noopener noreferrer">
                {inner}
              </a>
            ) : (
              <Link key={r.title} href={r.href}>
                {inner}
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}
