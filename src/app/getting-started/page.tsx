import type { Metadata } from "next";
import Link from "next/link";
import {
  Wallet,
  BadgeCheck,
  Gamepad2,
  LineChart,
  Store,
  ArrowRight,
  BookOpen,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { FaqAccordion, type FaqItem } from "@/components/faq-accordion";
import { LaunchStatusStrip } from "@/components/launch-status-strip";
import { COVI, ELUV, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Getting Started",
  description:
    "A step-by-step walkthrough of joining ConstructFi: connect a wallet on Base, complete KYC/allowlist, earn your first COVI and ELUV milestone, and track progress.",
  openGraph: {
    title: "Getting Started — ConstructFi",
    description:
      "Connect a wallet, complete verification, earn your first milestone, and track your readiness.",
    url: `${SITE.url}/getting-started`,
    images: [{ url: "/og/home.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/getting-started" },
};

export const STEPS = [
  {
    n: "01",
    icon: Wallet,
    title: "Connect a wallet on Base",
    body: "ConstructFi is non-custodial. Use any wallet supported by Reown / WalletConnect — including MetaMask, Coinbase Wallet, or Rainbow — connected to the Base network. You keep control of your keys at all times; the platform never takes custody.",
    note: "Wallet connection is available in the site header today.",
  },
  {
    n: "02",
    icon: BadgeCheck,
    title: "Complete verification (KYC / allowlist)",
    body: "Any compliant COVI distribution requires identity verification and allowlisting. Verification also unlocks milestone review, since ELUV credentials attest to a real person’s verified progress.",
    note: "Verification opens ahead of launch on " + SITE.launchDate + ".",
  },
  {
    n: "03",
    icon: Gamepad2,
    title: "Start with Build or Bust",
    body: "Analyze a property, work through education modules, and submit your first verified activity. Completed, reviewed work earns COVI participation rewards and can mint your first ELUV milestone.",
    note: "ELUV is earned only — it is never sold.",
  },
  {
    n: "04",
    icon: LineChart,
    title: "Track progress on your dashboard",
    body: "Your dashboard collects COVI activity, verified ELUV milestones, and readiness progression toward the next tier. Tiers advance only through verified work.",
    note: "A preview of the dashboard is available now.",
  },
  {
    n: "05",
    icon: Store,
    title: "Participate in the marketplace",
    body: "Procure materials and services from the verified supplier network. Marketplace fees recycle into the rewards pool, so participation is funded by genuine commerce rather than token printing.",
    note: "Marketplace launches " + SITE.launchDate + ".",
  },
];

const FAQ: readonly FaqItem[] = [
  {
    q: "What is the difference between COVI and ELUV?",
    a: `${COVI.name} is an ${COVI.standard} utility token used for ${COVI.role.toLowerCase()} — it moves. ${ELUV.name} is an ${ELUV.standard} soulbound credential — ${ELUV.fungible.toLowerCase()} — minted one per verified milestone. It proves. COVI is spendable; ELUV is permanent proof of progression.`,
  },
  {
    q: "Is COVI an investment?",
    a: "No. COVI is a utility and consumption token used inside the platform for eligible purchases and participation rewards. It is not offered as an investment, carries no promise of profit, return, yield, or appreciation, and nothing on this site is an offer to sell or a solicitation to buy a security. Any token sale will occur only under a compliant exemption with KYC/AML.",
  },
  {
    q: "When will COVI be tradable?",
    a: `COVI is not tradable today. Contract addresses are published only after independent audit, and the platform launches ${SITE.launchDate}. Distribution is gated by KYC/AML with lockups per tranche. Do not trust any token or address claiming to be COVI before an audited address is published through official ConstructFi channels.`,
  },
  {
    q: "Can I sell or transfer an ELUV credential?",
    a: `No. ELUV follows ${ELUV.standard} — ${ELUV.fungible.toLowerCase()}. Once minted to your address it cannot be sold, traded, gifted, or moved. ${ELUV.howObtained} It confers no financial rights and no claim on revenue or assets.`,
  },
  {
    q: "Which chain does ConstructFi use?",
    a: `${COVI.chain}. Base keeps transaction costs low for everyday participation while settling to Ethereum. You will need your wallet set to the Base network to interact with the platform.`,
  },
  {
    q: "Is my data safe, and what is stored on-chain?",
    a: "Verification documents are handled off-chain by the compliance process and are never written to a public ledger. What goes on-chain is minimal: milestone credentials and reward records tied to your wallet address. The platform is non-custodial, so it never holds your funds or your keys. See the Privacy Policy for full detail.",
  },
];

export default function GettingStartedPage() {
  return (
    <>
      <PageHero
        eyebrow="Start · Getting started"
        title="Five steps from curious to participating"
        lede="ConstructFi is non-custodial, verification-gated, and built on real operations. Here is exactly what joining looks like — and what it does not involve."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="bg-white/10 text-white">
            Platform launches {SITE.launchDate}
          </Badge>
          <Badge className="bg-white/10 text-white">Non-custodial · Base</Badge>
        </div>
      </PageHero>

      <Section className="bg-wash dark:bg-ink-2/30">
        <SectionHeading
          eyebrow="Current state"
          title="Where things stand"
          lede="What you can use right now, what opens at launch, and what stays gated behind an independent audit."
        />
        <div className="mt-10">
          <LaunchStatusStrip />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Walkthrough"
          title="The onboarding path"
          lede="Each step builds on the last. Nothing requires you to buy anything to begin."
        />
        <div className="mt-12 space-y-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <div className="rounded-2xl border border-line bg-card p-6 dark:border-border sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:gap-7">
                  <div className="flex shrink-0 items-center gap-4 sm:flex-col sm:items-start">
                    <span className="font-mono text-4xl font-bold leading-none text-mint/30">
                      {s.n}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal dark:text-mint">
                      <s.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-navy dark:text-white">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {s.body}
                    </p>
                    <p className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-teal dark:text-mint">
                      <span className="h-1.5 w-1.5 rounded-full bg-mint" aria-hidden />
                      {s.note}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-wash dark:bg-ink-2/30">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr]">
          <SectionHeading
            eyebrow="Questions"
            title="Frequently asked"
            lede="Straight answers on what COVI and ELUV are — and what they are not."
          />
          <div className="rounded-2xl border border-line bg-card px-5 dark:border-border sm:px-7">
            <FaqAccordion items={FAQ} />
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: BookOpen,
              title: "Read the whitepaper",
              body: `Version ${SITE.whitepaperVersion} covers the full technical and economic design.`,
              href: "/whitepaper",
              cta: "Open whitepaper",
            },
            {
              icon: LineChart,
              title: "Preview the dashboard",
              body: "See what participation looks like once your milestones start landing.",
              href: "/dashboard",
              cta: "View dashboard preview",
            },
            {
              icon: Store,
              title: "Explore the marketplace",
              body: "The verified supplier network that funds the rewards loop.",
              href: "/marketplace",
              cta: "Explore marketplace",
            },
          ].map((c) => (
            <Link key={c.title} href={c.href}>
              <Card className="h-full transition-colors hover:border-teal/50 dark:hover:border-mint/50">
                <CardContent className="pt-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal dark:text-mint">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-navy dark:text-white">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium text-teal dark:text-mint">
                    {c.cta} →
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Button asChild>
            <Link href="/app">
              Start with Build or Bust
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
