import type { Metadata } from "next";
import { Building2, Handshake, Boxes, GraduationCap, Landmark, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SITE, MARKETS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with ConstructFi to deploy white-label participation programs — curriculum, milestones, and credentialing — on transparent, audited infrastructure.",
  openGraph: {
    title: "Partner with ConstructFi",
    description:
      "White-label participation programs on transparent, audited infrastructure.",
    url: `${SITE.url}/partners`,
  },
  alternates: { canonical: "/partners" },
};

const TYPES = [
  {
    icon: Building2,
    title: "Institutions & enterprises",
    body: "Deploy branded readiness and rewards programs on shared rails, with your own curriculum and milestone definitions.",
  },
  {
    icon: Boxes,
    title: "Suppliers & manufacturers",
    body: "Join the verified supplier network and reach real procurement demand across six active markets.",
  },
  {
    icon: GraduationCap,
    title: "Education providers",
    body: "Bring accredited financial-education content into Build or Bust with data-export rights and clear ownership.",
  },
  {
    icon: Landmark,
    title: "Community organizations",
    body: "Turn shared economic activity into measurable, durable value for the people you serve.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Ecosystem · Partners"
        title="Build your program on ConstructFi"
        lede="ConstructFi launches on top of two operating businesses and a verified supplier network. Partners plug into the same transparent infrastructure."
      >
        <div className="flex flex-wrap gap-2">
          {MARKETS.map((m) => (
            <span
              key={m}
              className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-sm font-medium text-white/80"
            >
              {m}
            </span>
          ))}
        </div>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Who we work with" title="Partnership tracks" align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {TYPES.map((t) => (
            <Card key={t.title} className="h-full">
              <CardContent className="pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal dark:text-mint">
                  <t.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy dark:text-white">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-wash dark:bg-ink-2/30">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl border border-line bg-background p-8 text-center dark:border-border sm:flex-row sm:text-left">
          <Handshake className="h-10 w-10 shrink-0 text-teal dark:text-mint" />
          <div className="flex-1">
            <h2 className="text-xl font-bold text-navy dark:text-white">
              Let’s talk before launch
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              We’re onboarding launch partners ahead of {SITE.launchDate}.
            </p>
          </div>
          <Button asChild>
            <Link href="/contact">
              Get in touch
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
