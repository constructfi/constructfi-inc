import type { Metadata } from "next";
import {
  Users,
  Award,
  Coins,
  ShoppingCart,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { PreviewNotice } from "@/components/preview-notice";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admin (Preview)",
  description:
    "Internal operations mockup for the ConstructFi admin console — platform metrics, milestone verification queue, and KYC queue. Illustrative data only.",
  openGraph: {
    title: "Admin Console (Preview) — ConstructFi",
    description:
      "Internal ops mockup: platform metrics, milestone verification queue, and KYC queue. Illustrative data only.",
    url: `${SITE.url}/admin`,
    images: [{ url: "/og/home.png", width: 1200, height: 630 }],
  },
  robots: { index: false, follow: false },
  alternates: { canonical: "/admin" },
};

const METRICS = [
  { icon: Users, label: "Participants", value: "3,412", sub: "Verified accounts · demo" },
  { icon: Award, label: "ELUV milestones minted", value: "9,187", sub: "Soulbound credentials · demo" },
  { icon: Coins, label: "COVI in circulation", value: "412.6M", sub: "Of 10B fixed cap · demo" },
  { icon: ShoppingCart, label: "Marketplace volume", value: "$1.84M", sub: "Trailing 90 days · demo" },
];

const VERIFICATIONS = [
  {
    id: "MS-2841",
    participant: "Participant #2841",
    milestone: "Site Coordination",
    submitted: "Jul 21",
    status: "Pending review",
  },
  {
    id: "MS-2839",
    participant: "Participant #2839",
    milestone: "Financing Readiness",
    submitted: "Jul 20",
    status: "Pending review",
  },
  {
    id: "MS-2833",
    participant: "Participant #2833",
    milestone: "Procurement Fundamentals",
    submitted: "Jul 19",
    status: "Evidence requested",
  },
  {
    id: "MS-2828",
    participant: "Participant #2828",
    milestone: "Property Analysis",
    submitted: "Jul 18",
    status: "Approved",
  },
  {
    id: "MS-2820",
    participant: "Participant #2820",
    milestone: "Compliance Basics",
    submitted: "Jul 16",
    status: "Disputed",
  },
];

const KYC = [
  { id: "KYC-1104", region: "DC", tier: "Standard", age: "2h", status: "Awaiting review" },
  { id: "KYC-1103", region: "VA", tier: "Standard", age: "6h", status: "Awaiting review" },
  { id: "KYC-1101", region: "MD", tier: "Enhanced", age: "1d", status: "Documents requested" },
  { id: "KYC-1098", region: "NC", tier: "Standard", age: "2d", status: "Cleared" },
  { id: "KYC-1094", region: "FL", tier: "Enhanced", age: "3d", status: "Escalated" },
];

function statusVariant(status: string): "default" | "gold" | "outline" {
  if (status === "Approved" || status === "Cleared") return "default";
  if (status === "Disputed" || status === "Escalated") return "gold";
  return "outline";
}

export default function AdminPage() {
  return (
    <>
      <PageHero
        eyebrow="Internal · Admin"
        title="Operations console"
        lede="How the ConstructFi ops team reviews milestone evidence, clears verification queues, and watches platform health. Shown here as a static mockup."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="bg-gold/20 text-gold-2">
            Preview — internal ops mockup
          </Badge>
          <Badge className="bg-white/10 text-white">Not a live console</Badge>
        </div>
      </PageHero>

      <Section>
        <PreviewNotice className="mb-10">
          This page is an interface mockup for internal review. All records,
          identifiers, and figures are invented for illustration, every action
          control is disabled, and no participant data of any kind is displayed.
        </PreviewNotice>

        <SectionHeading
          eyebrow="Health"
          title="Platform metrics"
          lede={`Illustrative snapshot of the operating picture the team expects to monitor from launch on ${SITE.launchDate}.`}
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.05}>
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal dark:text-mint">
                      <m.icon className="h-5 w-5" />
                    </div>
                    <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-gold dark:text-gold-2">
                      Demo
                    </span>
                  </div>
                  <div className="mt-4 font-mono text-3xl font-bold leading-none text-navy dark:text-white">
                    {m.value}
                  </div>
                  <div className="mt-3 text-sm font-medium text-navy dark:text-white">
                    {m.label}
                  </div>
                  <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {m.sub}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-wash dark:bg-ink-2/30">
        <SectionHeading
          eyebrow="Queue"
          title="Milestone verification"
          lede="Submitted evidence is reviewed by an operator before any ELUV credential is minted. Credentials are never issued automatically or for payment."
        />
        <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-card dark:border-border">
          <ul className="divide-y divide-border">
            {VERIFICATIONS.map((v) => (
              <li key={v.id} className="p-5">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="font-mono text-xs text-muted-foreground">
                        {v.id}
                      </span>
                      <Badge variant={statusVariant(v.status)}>{v.status}</Badge>
                    </div>
                    <p className="mt-2 text-sm font-medium text-navy dark:text-white">
                      {v.milestone}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {v.participant} · submitted {v.submitted}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" disabled aria-disabled title="Demo only">
                      Approve
                    </Button>
                    <Button size="sm" variant="outline" disabled aria-disabled title="Demo only">
                      Dispute
                    </Button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <ClipboardList className="h-3.5 w-3.5" aria-hidden />
          Approve and dispute controls are disabled in this mockup.
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Compliance"
          title="KYC / allowlist queue"
          lede="Verification is handled off-chain by the compliance process. Only queue state is surfaced to operators — never identity documents."
        />
        <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-card dark:border-border">
          <ul className="divide-y divide-border">
            {KYC.map((k) => (
              <li
                key={k.id}
                className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="font-mono text-xs text-muted-foreground">
                      {k.id}
                    </span>
                    <Badge variant={statusVariant(k.status)}>{k.status}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-foreground/85">
                    {k.region} · {k.tier} review · in queue {k.age}
                  </p>
                </div>
                <Button size="sm" variant="outline" disabled aria-disabled title="Demo only">
                  Open case
                </Button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex items-start gap-3 rounded-2xl border border-teal/25 bg-teal/[0.06] px-4 py-3 text-sm">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-teal dark:text-mint" aria-hidden />
          <span className="text-foreground/85">
            The production console will be access-controlled, audit-logged, and
            restricted to authorized ConstructFi personnel. This public page exists
            only to document the intended workflow.
          </span>
        </div>
      </Section>
    </>
  );
}
