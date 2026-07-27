import Link from "next/link";
import { ArrowRight, Check, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

/* --- Phone mockup: "Readiness journey" app screen (older design, built in code) --- */

const MILESTONES = [
  { label: "Financial literacy track", meta: "Verified · ELUV minted", done: true },
  { label: "Budgeting system", meta: "Verified · ELUV minted", done: true },
  { label: "Credit building module", meta: "Verified · ELUV minted", done: true },
  { label: "Savings plan milestone", meta: "In progress · 62%", progress: true },
  { label: "Pre-approval prep", meta: "Locked · requires savings plan", locked: true },
];

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[300px] max-w-full">
      <div className="rounded-[2.5rem] border border-white/10 bg-[#0b1220] p-3 shadow-2xl ring-1 ring-black/40">
        <div className="overflow-hidden rounded-[2rem] bg-[#070d17]">
          {/* status bar */}
          <div className="flex items-center justify-between px-5 pt-4 text-[11px] font-medium text-white/70">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="inline-block h-2.5 w-3 rounded-sm bg-white/40" />
              <span className="inline-block h-2.5 w-3 rounded-sm bg-white/40" />
              <span className="inline-block h-2.5 w-4 rounded-sm bg-white/60" />
            </span>
          </div>
          {/* header */}
          <div className="flex items-center justify-between px-5 pb-3 pt-3">
            <h3 className="text-lg font-bold text-white">Readiness journey</h3>
            <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-2 py-1 text-xs font-semibold text-gold-2">
              <span className="inline-block h-3.5 w-3.5 rounded-full bg-gradient-to-br from-gold to-gold-2" />
              1,050
            </span>
          </div>
          {/* current milestone card */}
          <div className="mx-4 rounded-2xl border border-mint/20 bg-mint/5 p-4">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-white">Milestone 4 of 5</span>
              <span className="font-semibold text-mint">62% COMPLETE</span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[62%] rounded-full bg-gradient-to-r from-mint to-gold-2" />
            </div>
            <p className="mt-2 text-[11px] leading-snug text-white/55">
              Complete your savings plan to mint the next soulbound ELUV
            </p>
          </div>
          {/* list */}
          <div className="space-y-2 p-4">
            {MILESTONES.map((m) => (
              <div
                key={m.label}
                className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5"
              >
                <span
                  className={
                    m.done
                      ? "flex h-6 w-6 flex-none items-center justify-center rounded-full bg-mint text-[#04121c]"
                      : m.locked
                        ? "flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white/10 text-white/40"
                        : "flex h-6 w-6 flex-none items-center justify-center rounded-full border border-gold-2 text-gold-2"
                  }
                >
                  {m.done ? (
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  ) : m.locked ? (
                    <Lock className="h-3 w-3" />
                  ) : (
                    <span className="text-[11px] font-bold">4</span>
                  )}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-xs font-semibold text-white">
                    {m.label}
                  </span>
                  <span className="block truncate text-[11px] text-white/45">
                    {m.meta}
                  </span>
                </span>
                {(m.done || m.progress) && (
                  <span className="ml-auto inline-block h-2.5 w-2.5 flex-none rounded-full bg-gradient-to-br from-gold to-gold-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background">
      {/* soft light wash (older design) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-mint/[0.06] via-transparent to-transparent dark:from-mint/[0.04]"
        aria-hidden
      />
      <div className="bg-grid-fine absolute inset-0 -z-10 opacity-[0.15] dark:opacity-20" aria-hidden />
      <div className="container relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: copy */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal dark:text-mint">
              — An operating system for economic participation
            </p>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.06] tracking-tight text-navy dark:text-white sm:text-5xl lg:text-6xl">
              From participation
              <br className="hidden sm:block" /> to{" "}
              <span className="text-gradient-brand">ownership.</span>
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
              ConstructFi turns real economic activity — development, marketplace
              commerce, and procurement — into measurable, on-chain progress toward
              ownership through a dual-token ecosystem on Ethereum.
            </p>

            {/* Earned first callout (older design, gold) */}
            <div className="mt-6 rounded-r-lg border-l-4 border-gold-2 bg-gold/5 py-3 pl-4 pr-4">
              <p className="text-sm leading-relaxed text-foreground/80">
                <span className="font-bold text-gold-2">Earned first.</span> Earn
                COVI through participation, learning, and marketplace activity.{" "}
                <span className="font-bold text-gold-2">ELUV is never sold</span> —
                it&apos;s a soulbound readiness credential that can only be earned.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" asChild>
                <Link href="/app" data-testid="cta-hero-primary">
                  Launch app
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/whitepaper" data-testid="cta-hero-whitepaper">
                  Read the whitepaper
                </Link>
              </Button>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Non-custodial · KYC/AML on any sale · Contracts published after
              independent audit · Public launch {SITE.launchDate}
            </p>
          </div>

          {/* Right: phone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="pointer-events-none absolute inset-0 -z-10 mx-auto h-full w-[80%] rounded-full bg-mint/10 blur-3xl"
              aria-hidden
            />
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
