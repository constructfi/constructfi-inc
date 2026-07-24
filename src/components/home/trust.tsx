import Link from "next/link";
import {
  KeyRound,
  Eye,
  UserCheck,
  AlertTriangle,
  FileSearch,
  Scale,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";

const PILLARS = [
  { icon: KeyRound, title: "Non-custodial", body: "Assets and permissions stay under user-controlled keys at all times." },
  { icon: Eye, title: "Transparent incentives", body: "Rewards and rules are on-chain, visible, and verifiable." },
  { icon: UserCheck, title: "User-controlled", body: "Self-sovereign, wallet-controlled access across every layer." },
  { icon: AlertTriangle, title: "Risk-aware", body: "Guardrails and clear disclosures protect participants." },
  { icon: FileSearch, title: "Audit-focused", body: "OpenZeppelin-based contracts and an independent audit before launch. Verified addresses published after audit — not before." },
  { icon: Scale, title: "Compliance-aware", body: "Regulatory alignment as a first-class requirement — KYC/AML on any sale, lockups, utility-first positioning." },
];

export function Trust() {
  return (
    <Section id="trust">
      <SectionHeading
        eyebrow="Trust & compliance"
        title="Building trust into every transaction"
        lede="ConstructFi is designed as a real-world-asset (RWA) platform: rewards funded by real commerce through a verified supplier network — not by printing tokens."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PILLARS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <div className="flex h-full flex-col rounded-xl border border-line bg-card p-6 dark:border-border">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-mint/12 text-teal dark:text-mint">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-navy dark:text-white">
                {p.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Proof strip */}
      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-col gap-3 rounded-xl border border-line bg-wash px-5 py-4 text-sm dark:border-border dark:bg-ink-2/40 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
          <span className="font-medium text-navy dark:text-white">Proof:</span>
          <a
            href="https://www.dllr.state.md.us/cgi-bin/ElectronicLicensing/OP_Search/OP_search.cgi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal hover:underline dark:text-mint"
          >
            Broker-license lookup
          </a>
          <span className="text-muted-foreground">LEED sustainable-materials reference</span>
          <span className="text-muted-foreground">Case studies (publishing pre-launch)</span>
          <Link href="/security" className="text-teal hover:underline dark:text-mint">
            Verified contract addresses published after audit
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
