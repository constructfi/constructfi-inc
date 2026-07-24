import type { Metadata } from "next";
import { ShieldCheck, Lock, FileSearch, AlertTriangle, KeyRound, Timer } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Security",
  description:
    "ConstructFi’s security posture: independent audits before launch, non-custodial architecture, timelock + multisig treasury controls, and honest disclosure.",
  openGraph: {
    title: "ConstructFi Security",
    description:
      "Audit-gated contracts, non-custodial design, and transparent treasury controls.",
    url: `${SITE.url}/security`,
  },
  alternates: { canonical: "/security" },
};

const PRACTICES = [
  {
    icon: FileSearch,
    title: "Independent audits before launch",
    body: "Contracts are audited by qualified third parties. Verified addresses publish only after audits complete — never before.",
  },
  {
    icon: KeyRound,
    title: "Non-custodial by design",
    body: "ConstructFi never holds your keys or assets. On-chain actions are always initiated from your own wallet.",
  },
  {
    icon: Timer,
    title: "Timelock + multisig treasury",
    body: "Treasury and reserve allocations are governance-controlled behind a timelock and multisig to prevent unilateral movement.",
  },
  {
    icon: Lock,
    title: "Minimal on-chain disclosure",
    body: "ELUV credentials store only a reference hash on-chain; no personally identifiable information is written to the blockchain.",
  },
  {
    icon: ShieldCheck,
    title: "Pausable safeguards",
    body: "COVI includes Pausable controls so the team can respond to a critical incident while a fix is deployed.",
  },
  {
    icon: AlertTriangle,
    title: "Fraud-address warning",
    body: "Until audits complete, treat any COVI or ELUV contract address you see anywhere as fraudulent.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform · Security"
        title="Audit-gated. Non-custodial. Transparent."
        lede="Security is a launch blocker, not an afterthought. On-chain actions stay gated until independent audits complete."
      >
        <Badge className="bg-gold/20 text-gold-2">
          Contracts publishing after audit
        </Badge>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Our posture" title="How we protect participants" align="center" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTICES.map((p) => (
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
      </Section>

      <Section className="bg-wash dark:bg-ink-2/30">
        <div className="mx-auto max-w-2xl rounded-2xl border border-line bg-background p-8 text-center dark:border-border">
          <h2 className="text-2xl font-bold text-navy dark:text-white">
            Report a vulnerability
          </h2>
          <p className="mt-3 text-muted-foreground">
            Responsible disclosure keeps everyone safe. If you believe you’ve found a
            security issue, contact us privately so we can investigate before any
            public disclosure.
          </p>
          <a
            href="mailto:security@constructfi.co"
            className="mt-5 inline-block font-medium text-teal underline-offset-4 hover:underline dark:text-mint"
          >
            security@constructfi.co
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            Audit reports will be linked here ahead of the {SITE.launchDate} launch.
          </p>
        </div>
      </Section>
    </>
  );
}
