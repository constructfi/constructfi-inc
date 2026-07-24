import { Users, Coins, ShoppingBag, RefreshCw, Wallet } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";

const STEPS = [
  { icon: Users, title: "Participate", body: "Verified members join and take part in real activity." },
  { icon: Coins, title: "Earn COVI", body: "Contribution earns on-chain rewards in COVI." },
  { icon: ShoppingBag, title: "Spend COVI", body: "Redeem across the marketplace and partner programs." },
  { icon: RefreshCw, title: "20% fees recycle", body: "A fixed fee share buys back COVI." },
  { icon: Wallet, title: "Rewards refill", body: "The buyback replenishes the rewards pool — funded by real commerce." },
];

export function ValueFlow() {
  return (
    <Section id="how-value-flows" className="bg-wash dark:bg-ink-2/40">
      <SectionHeading
        eyebrow="How value flows"
        title="A closed loop, funded by real commerce"
        lede="Rewards are funded by real commerce through a verified supplier network — not by printing tokens. The buyback replenishes the rewards pool; it is not a holder dividend."
      />

      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {STEPS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <div className="relative flex h-full flex-col rounded-xl border border-line bg-card p-5 dark:border-border">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-mint/12 text-teal dark:text-mint">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-semibold text-navy dark:text-white">
                {s.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              {i < STEPS.length - 1 && (
                <span
                  className="pointer-events-none absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-gradient-to-r from-mint to-transparent lg:block"
                  aria-hidden
                />
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-8 max-w-2xl rounded-lg border-l-2 border-gold bg-gold/5 px-4 py-3 text-sm text-muted-foreground">
          <strong className="text-navy dark:text-gold-2">Why COVI holds value:</strong>{" "}
          real marketplace demand creates fee revenue, and 20% of that revenue funds
          buybacks that refill rewards — closing the loop between commerce and incentives.
        </p>
      </Reveal>
    </Section>
  );
}
