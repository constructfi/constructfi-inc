import type { Metadata } from "next";
import Image from "next/image";
import { GraduationCap, Gamepad2, Trophy, Target, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { StoreBadges } from "@/components/store-badges";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Build or Bust",
  description:
    "Build or Bust is ConstructFi’s gamified financial-education and readiness app. Learn, participate, and earn verifiable ELUV milestones through real progress.",
  openGraph: {
    title: "Build or Bust — ConstructFi",
    description:
      "Gamified financial education and readiness. Earn verifiable milestones through real progress.",
    url: `${SITE.url}/app`,
    images: [{ url: "/img/readiness.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/app" },
};

const PILLARS = [
  {
    icon: GraduationCap,
    title: "Learn",
    body: "Financial-education modules — including partner-branded curricula — presented for informational purposes, never as advice.",
  },
  {
    icon: Target,
    title: "Build readiness",
    body: "Complete verified milestones that reflect real progress in knowledge, procurement, and participation.",
  },
  {
    icon: Trophy,
    title: "Earn ELUV",
    body: "Each verified milestone can mint one non-transferable ELUV credential — earned only, never sold.",
  },
  {
    icon: Gamepad2,
    title: "Play & engage",
    body: "Game mechanics make progression engaging without turning it into a game of chance or a promise of return.",
  },
];

export default function AppPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · Build or Bust"
        title="Turn learning into a verifiable record"
        lede="Build or Bust is the gamified readiness and financial-education experience at the heart of ConstructFi. Every verified milestone becomes durable, portable proof."
      >
        <StoreBadges />
      </PageHero>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 overflow-hidden rounded-2xl border border-line shadow-lg dark:border-border lg:order-1">
            <Image
              src="/img/readiness.png"
              alt="Build or Bust readiness app"
              width={900}
              height={640}
              className="h-auto w-full"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="The loop"
              title="Participation to ownership"
              lede="You learn and participate, the platform verifies real progress, and that progress mints proof you carry with you — a credential no one can buy."
            />
            <div className="mt-6 flex items-center gap-3 rounded-lg border border-teal/25 bg-teal/[0.06] px-4 py-3 text-sm">
              <Sparkles className="h-4 w-4 shrink-0 text-teal dark:text-mint" />
              <span className="text-foreground/85">
                ELUV is an ERC-5192 soulbound credential — non-transferable, earned
                only, and it confers no financial rights.
              </span>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-wash dark:bg-ink-2/30">
        <SectionHeading eyebrow="Four pillars" title="How Build or Bust works" align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <Card key={p.title} className="h-full">
              <CardContent className="pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal dark:text-mint">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-muted-foreground">
          Apps ship after launch on {SITE.launchDate}. Store badges above are marked
          “Coming soon” until listings are live.
        </p>
      </Section>
    </>
  );
}
