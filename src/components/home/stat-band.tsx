import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/count-up";
import { STATS } from "@/lib/site";

export function StatBand() {
  return (
    <Section id="track-record" className="ink-surface relative text-white">
      <div className="bg-grid-fine absolute inset-0 opacity-25" aria-hidden />
      <div className="relative">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mint">
            Track record
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Built on real operations. Designed for scale.
          </h2>
          <p className="mt-4 text-white/70">
            ConstructFi launches on top of two operating businesses — Eluvial
            Enterprise Inc. and Covington Supply Co. — not a whitepaper alone.
          </p>
        </div>

        {/* Stat grid — collapses to 1 column on mobile (fixes overflow) */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
                <div className="text-3xl font-bold leading-none text-white sm:text-4xl">
                  <CountUp value={s.value} />
                </div>
                <div className="mt-3 text-sm font-medium text-mint">{s.label}</div>
                <div className="mt-1 text-xs leading-relaxed text-white/50">
                  {s.sub}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
