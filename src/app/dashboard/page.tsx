import type { Metadata } from "next";
import Link from "next/link";
import {
  Coins,
  Award,
  Activity,
  TrendingUp,
  Lock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { PreviewNotice } from "@/components/preview-notice";
import { WalletConnect } from "@/components/wallet-connect";
import { COVI, ELUV, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dashboard (Preview)",
  description:
    "A preview of the ConstructFi participant dashboard — COVI activity, soulbound ELUV milestones, and readiness progression. Illustrative data only; not a live wallet view.",
  openGraph: {
    title: "Participant Dashboard (Preview) — ConstructFi",
    description:
      "Preview of the participant dashboard: COVI activity, ELUV milestones, and readiness progression. Illustrative data only.",
    url: `${SITE.url}/dashboard`,
    images: [{ url: "/og/home.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/dashboard" },
};

const SUMMARY = [
  {
    icon: Coins,
    label: "COVI balance",
    value: "•••",
    unit: "COVI",
    sub: "Earned · illustrative",
  },
  {
    icon: Award,
    label: "ELUV milestones",
    value: "4",
    unit: "verified",
    sub: "Soulbound · non-transferable",
  },
  {
    icon: Activity,
    label: "Verified activities",
    value: "27",
    unit: "logged",
    sub: "Lessons, analyses, procurement",
  },
  {
    icon: TrendingUp,
    label: "Readiness tier",
    value: "2",
    unit: "of 4",
    sub: "Progressing to Tier 3",
  },
];

const ACTIVITY = [
  {
    date: "Jul 18",
    event: "Milestone verified — Financing Readiness",
    type: "ELUV minted",
    amount: "+1 ELUV",
  },
  {
    date: "Jul 14",
    event: "Property analysis completed (Build or Bust)",
    type: "Participation reward",
    amount: "+ COVI",
  },
  {
    date: "Jul 09",
    event: "Marketplace procurement — sustainable lumber",
    type: "Commerce reward",
    amount: "+ COVI",
  },
  {
    date: "Jul 02",
    event: "Education module — construction cost basics",
    type: "Participation reward",
    amount: "+ COVI",
  },
  {
    date: "Jun 26",
    event: "Milestone verified — Property Analysis",
    type: "ELUV minted",
    amount: "+1 ELUV",
  },
];

const MILESTONES = [
  {
    title: "Property Analysis",
    state: "Verified",
    body: "Completed and reviewed analyses of real listings, including cost and feasibility inputs.",
    date: "Minted Jun 26",
  },
  {
    title: "Financing Readiness",
    state: "Verified",
    body: "Demonstrated understanding of capital stacks, draw schedules, and lender documentation.",
    date: "Minted Jul 18",
  },
  {
    title: "Procurement Fundamentals",
    state: "Verified",
    body: "Sourced materials through the verified supplier network with documented provenance.",
    date: "Minted May 30",
  },
  {
    title: "Compliance Basics",
    state: "Verified",
    body: "Completed the platform’s disclosure, records, and consent walkthrough.",
    date: "Minted May 12",
  },
  {
    title: "Site Coordination",
    state: "In review",
    body: "Awaiting operator verification of submitted coordination evidence.",
    date: "Submitted Jul 21",
  },
  {
    title: "Ownership Pathway",
    state: "Locked",
    body: "Unlocks after Tier 3 readiness. Earned only — never purchasable, never transferable.",
    date: "Not started",
  },
];

const TIERS = [
  { name: "Tier 1 · Participant", done: true },
  { name: "Tier 2 · Contributor", done: true },
  { name: "Tier 3 · Verified builder", done: false },
  { name: "Tier 4 · Ownership pathway", done: false },
];

function stateStyles(state: string) {
  if (state === "Verified")
    return { badge: "default" as const, icon: ShieldCheck };
  if (state === "In review") return { badge: "gold" as const, icon: Activity };
  return { badge: "outline" as const, icon: Lock };
}

export default function DashboardPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · Dashboard"
        title="Your participation, at a glance"
        lede="COVI you have earned, the soulbound ELUV milestones you have proven, and how close you are to the next readiness tier — all in one view."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="bg-gold/20 text-gold-2">
            Preview — illustrative data, not a live wallet
          </Badge>
          <Badge className="bg-white/10 text-white">
            Live dashboard ships {SITE.launchDate}
          </Badge>
        </div>
      </PageHero>

      <Section>
        <PreviewNotice className="mb-10">
          Every number on this page is a fixed demonstration figure. Nothing here
          reads a wallet, a balance, or an on-chain record, and no contract
          addresses are published before independent audit.
        </PreviewNotice>

        <SectionHeading
          eyebrow="Overview"
          title="Summary"
          lede="What a participant sees after connecting — shown here with demo values."
        />

        {/* Summary grid — 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SUMMARY.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal dark:text-mint">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-gold dark:text-gold-2">
                      Demo
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap items-baseline gap-x-2">
                    <span className="font-mono text-3xl font-bold leading-none text-navy dark:text-white">
                      {s.value}
                    </span>
                    <span className="text-sm text-muted-foreground">{s.unit}</span>
                  </div>
                  <div className="mt-3 text-sm font-medium text-navy dark:text-white">
                    {s.label}
                  </div>
                  <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {s.sub}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
          {COVI.name} is a utility token used for {COVI.role.toLowerCase()} — not an
          investment. Rewards are funded by {COVI.rewardFunding.toLowerCase()}.
        </p>
      </Section>

      <Section className="bg-wash dark:bg-ink-2/30">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Activity"
              title="Recent rewards activity"
              lede="Verified participation is what funds the rewards line — commerce first, rewards after."
            />
            <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-card dark:border-border">
              <ul className="divide-y divide-border">
                {ACTIVITY.map((a) => (
                  <li
                    key={a.event}
                    className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-navy dark:text-white">
                        {a.event}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {a.date} · {a.type}
                      </p>
                    </div>
                    <span className="shrink-0 self-start rounded-full bg-teal/10 px-3 py-1 font-mono text-xs font-semibold text-teal dark:text-mint sm:self-auto">
                      {a.amount}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Illustrative activity log. No transactions are represented here.
            </p>
          </div>

          <div>
            <SectionHeading
              eyebrow="Progression"
              title="Readiness meter"
              lede="Tiers advance only through verified milestones — they cannot be bought."
            />
            <Card className="mt-8">
              <CardContent className="pt-6">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-sm font-medium text-navy dark:text-white">
                    Tier 2 → Tier 3
                  </span>
                  <span className="font-mono text-sm text-teal dark:text-mint">
                    62%
                  </span>
                </div>
                <div
                  className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-muted"
                  role="img"
                  aria-label="Readiness progression: 62 percent toward Tier 3 (demo)"
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-teal to-mint"
                    style={{ width: "62%" }}
                  />
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Demo value. 2 more verified milestones would complete Tier 3.
                </p>

                <ul className="mt-6 space-y-3">
                  {TIERS.map((t) => (
                    <li key={t.name} className="flex items-center gap-3 text-sm">
                      <span
                        className={
                          t.done
                            ? "h-2 w-2 shrink-0 rounded-full bg-mint"
                            : "h-2 w-2 shrink-0 rounded-full border border-muted-foreground/50"
                        }
                        aria-hidden
                      />
                      <span
                        className={
                          t.done
                            ? "text-foreground/85"
                            : "text-muted-foreground"
                        }
                      >
                        {t.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Credentials"
          title="ELUV milestones"
          lede={`${ELUV.standard}. ${ELUV.fungible}. Each milestone is earned through verified progress — it cannot be sold, transferred, or gifted, and it confers no financial rights.`}
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MILESTONES.map((m, i) => {
            const s = stateStyles(m.state);
            return (
              <Reveal key={m.title} delay={i * 0.04}>
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col pt-6">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal dark:text-mint">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <Badge variant={s.badge}>{m.state}</Badge>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-navy dark:text-white">
                      {m.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {m.body}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-line pt-4 text-xs text-muted-foreground dark:border-border">
                      <span className="font-mono">{m.date}</span>
                      <span className="inline-flex items-center gap-1">
                        <Lock className="h-3 w-3" aria-hidden />
                        Non-transferable
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="bg-wash dark:bg-ink-2/30">
        <div className="rounded-2xl border border-line bg-card p-6 dark:border-border sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Next"
                title="This is a preview, not a live account"
                lede="Wallet connection is available today for testing on Base, but no balances, milestones, or rewards are read or displayed until the platform launches."
              />
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <WalletConnect size="default" />
                <Button variant="outline" asChild>
                  <Link href="/getting-started">
                    See how to get started
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <Button
                className="mt-4"
                variant="ghost"
                disabled
                aria-disabled
                title="Demo only — rewards claiming is not available"
              >
                Claim rewards (demo — unavailable)
              </Button>
            </div>
            <PreviewNotice>
              Balances, milestone states, and progression shown on this page are
              fixed demonstration values chosen to illustrate the interface. They
              are not derived from any account.
            </PreviewNotice>
          </div>
        </div>
      </Section>
    </>
  );
}
