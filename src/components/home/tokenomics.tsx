import Link from "next/link";
import { ArrowRight, Coins, Fingerprint } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { COVI, ELUV } from "@/lib/site";

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 border-t border-white/10 py-3 first:border-t-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
      <span className="text-xs font-medium uppercase tracking-wide text-white/50">
        {label}
      </span>
      <span className="text-sm font-medium text-white sm:text-right">{value}</span>
    </div>
  );
}

export function Tokenomics() {
  return (
    <Section id="tokenomics">
      <SectionHeading
        eyebrow="Two tokens. Two clear roles."
        title={
          <>
            <span className="text-teal dark:text-mint">COVI moves.</span>{" "}
            <span className="text-gold">ELUV proves.</span>
          </>
        }
        lede="ConstructFi deliberately separates transaction infrastructure (COVI) from progression infrastructure (ELUV). They are different token standards with different rules."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* COVI */}
        <Reveal>
          <div className="flex h-full flex-col rounded-2xl bg-gradient-to-br from-teal-2 to-sky p-7 text-white shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                  <Coins className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-2xl font-bold tracking-tight">COVI</div>
                  <div className="text-xs text-white/70">{COVI.role}</div>
                </div>
              </div>
              <Badge className="bg-white/15 text-white">ERC-20</Badge>
            </div>

            <div className="mt-6 flex-1">
              <Row label="Standard" value={COVI.standard} />
              <Row label="Network" value={COVI.chain} />
              <Row label="Fixed supply" value={`${COVI.supply} (${COVI.supplyNote})`} />
              <Row label="Composition" value={COVI.composition} />
              <Row label="How you get it" value={COVI.howObtained} />
              <Row label="Largest allocation" value={COVI.largestAllocation} />
              <Row label="Reward funding" value={COVI.rewardFunding} />
            </div>
            <p className="mt-5 rounded-lg bg-white/10 px-3.5 py-2.5 text-xs leading-relaxed text-white/80">
              COVI is a consumption/utility token — <strong>not an investment</strong>.
              Any sale occurs under a compliant exemption with KYC/AML.
            </p>
          </div>
        </Reveal>

        {/* ELUV — CORRECTED to ERC-5192 soulbound NFT */}
        <Reveal delay={0.08}>
          <div className="flex h-full flex-col rounded-2xl bg-gradient-to-br from-[#9A742A] to-[#C09A45] p-7 text-white shadow-lg">
            <div className="flex flex-wrap items-start justify-between gap-y-2">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                  <Fingerprint className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-2xl font-bold tracking-tight">ELUV</div>
                  <div className="text-xs text-white/75">{ELUV.role}</div>
                </div>
              </div>
              <Badge className="shrink-0 whitespace-nowrap border border-white/30 bg-white/20 font-semibold text-white">
                ERC-5192 · Soulbound NFT
              </Badge>
            </div>

            <div className="mt-6 flex-1">
              <Row label="Standard" value={ELUV.standard} />
              <Row label="Fungibility" value={ELUV.fungible} />
              <Row label="Supply" value={`${ELUV.supply} — ${ELUV.supplyNote}`} />
              <Row label="How you get it" value={ELUV.howObtained} />
              <Row label="What it does" value={ELUV.whatItDoes} />
            </div>
            <p className="mt-5 rounded-lg bg-white/10 px-3.5 py-2.5 text-xs leading-relaxed text-white/85">
              {ELUV.governance} ELUV is a non-transferable credential — it is{" "}
              <strong>never sold and confers no financial rights</strong>.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-line bg-wash px-5 py-4 dark:border-border dark:bg-ink-2/40">
          <p className="text-sm text-muted-foreground">
            Full allocation table, fee-recycling economics, and the credential
            framework are detailed in the whitepaper.
          </p>
          <Link
            href="/whitepaper#chapter-5"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-teal hover:underline dark:text-mint"
            data-testid="link-tokenomics-whitepaper"
          >
            See COVI allocation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
