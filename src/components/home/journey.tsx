import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";

const STEPS = [
  {
    n: "01",
    title: "Join & verify",
    body: "Members complete verification and join the platform — non-custodial, wallet-controlled from day one.",
  },
  {
    n: "02",
    title: "Participate & earn",
    body: "Complete lessons, analyses, and marketplace activity to earn COVI rewards for real contribution.",
  },
  {
    n: "03",
    title: "Build readiness",
    body: "Verified milestones mint soulbound ELUV credentials — a portable, non-transferable readiness record.",
  },
  {
    n: "04",
    title: "Unlock ownership",
    body: "Readiness gates entry into verified opportunities, from procurement to housing pathways.",
  },
];

export function Journey() {
  return (
    <Section id="participation-journey" className="bg-wash dark:bg-ink-2/40">
      <SectionHeading
        eyebrow="Participation journey"
        title="From engagement to ownership"
        lede="Transparent and verifiable at every step. Each stage compounds into the next."
      />

      {/* 4-step grid — stacks 1 col on mobile, 2 on tablet, 4 on desktop (mobile fix) */}
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.07}>
            <div className="relative flex h-full flex-col rounded-xl border border-line bg-card p-6 dark:border-border">
              <span className="font-mono text-4xl font-bold text-mint/25">{s.n}</span>
              <h3 className="mt-3 text-lg font-semibold text-navy dark:text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
