import type { CSSProperties } from "react";

export type HomepageVisualKey =
  | "build-or-busted"
  | "builderbae"
  | "constructos"
  | "pactpilot"
  | "supplier-marketplace"
  | "eluvial-academy"
  | "house-hackers";

type ProductVisualSpec = {
  mono: string;
  keyColor: string;
  inkColor: string;
  badgeBackground: string;
  badgeForeground: string;
  tileBackground: string;
  titleColor: string;
  dotColor: string;
};

const specs: Record<HomepageVisualKey, ProductVisualSpec> = {
  "build-or-busted": {
    mono: "BoB",
    keyColor: "#FF5A1F",
    inkColor: "#0E1420",
    badgeBackground: "#2d140d",
    badgeForeground: "#ffb08d",
    tileBackground: "#281610",
    titleColor: "#ffb08d",
    dotColor: "#FF5A1F",
  },
  builderbae: {
    mono: "MM",
    keyColor: "#F2B01E",
    inkColor: "#191510",
    badgeBackground: "#33260f",
    badgeForeground: "#ffd584",
    tileBackground: "#261e13",
    titleColor: "#f8d27b",
    dotColor: "#F2B01E",
  },
  constructos: {
    mono: "OS",
    keyColor: "#14C8B4",
    inkColor: "#14171A",
    badgeBackground: "#132423",
    badgeForeground: "#8ef1e4",
    tileBackground: "#122020",
    titleColor: "#9ff1e7",
    dotColor: "#14C8B4",
  },
  pactpilot: {
    mono: "PP",
    keyColor: "#F2C14E",
    inkColor: "#0B1D2E",
    badgeBackground: "#243140",
    badgeForeground: "#fde3a1",
    tileBackground: "#162534",
    titleColor: "#f8df9b",
    dotColor: "#F2C14E",
  },
  "supplier-marketplace": {
    mono: "SM",
    keyColor: "#00A87C",
    inkColor: "#122118",
    badgeBackground: "#102320",
    badgeForeground: "#9fe0be",
    tileBackground: "#102320",
    titleColor: "#9fe0be",
    dotColor: "#00A87C",
  },
  "eluvial-academy": {
    mono: "EA",
    keyColor: "#8298FC",
    inkColor: "#171f3d",
    badgeBackground: "#162038",
    badgeForeground: "#c4cbff",
    tileBackground: "#162038",
    titleColor: "#c4cbff",
    dotColor: "#8298FC",
  },
  "house-hackers": {
    mono: "HH",
    keyColor: "#8298FC",
    inkColor: "#15183A",
    badgeBackground: "#1b1f45",
    badgeForeground: "#d5dbff",
    tileBackground: "#1b1f45",
    titleColor: "#d5dbff",
    dotColor: "#8298FC",
  },
};

function coverGrid(inkColor: string): CSSProperties {
  return {
    backgroundColor: inkColor,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px)",
    backgroundSize: "24px 24px",
  };
}

export function getHomepageVisualSpec(key: HomepageVisualKey) {
  return specs[key];
}

export function HomepageProductBadge({
  visualKey,
  size = "md",
}: {
  visualKey: HomepageVisualKey;
  size?: "sm" | "md";
}) {
  const spec = specs[visualKey];
  const sizeClass =
    size === "sm"
      ? "h-7 min-w-7 px-2 text-[10px]"
      : "h-8 min-w-8 px-2.5 text-[11px]";

  return (
    <span
      className={`inline-flex items-center justify-center font-semibold tracking-[0.08em] ${sizeClass}`}
      style={{ backgroundColor: spec.badgeBackground, color: spec.badgeForeground }}
    >
      {spec.mono}
    </span>
  );
}

export function HomepageHeroTile({ visualKey, name }: { visualKey: HomepageVisualKey; name: string }) {
  const spec = specs[visualKey];

  return (
    <div
      className="grid gap-3.5 border px-[11px] py-3"
      style={{
        borderColor: "rgba(255,255,255,.1)",
        background: spec.tileBackground,
      }}
    >
      <div className="flex items-center justify-between">
        <HomepageProductBadge visualKey={visualKey} size="sm" />
        <span
          className="h-2 w-2 rounded-none"
          style={{ backgroundColor: spec.dotColor }}
        />
      </div>
      <span className="text-[11px] leading-[1.25]" style={{ color: spec.titleColor }}>
        {name}
      </span>
    </div>
  );
}

function BuildOrBustedCover({ compact = false }: { compact?: boolean }) {
  const metric = compact ? "text-[11px]" : "text-[14px]";
  const body = compact ? "p-4" : "p-6";

  return (
    <div className={`relative h-full w-full overflow-hidden ${body}`} style={coverGrid("#0E1420")}>
      <div className="absolute inset-x-0 top-0 h-1.5 bg-[#FF5A1F]" />
      <div className="grid h-full gap-4 min-[700px]:grid-cols-[1.15fr_.85fr]">
        <div className="flex flex-col justify-between">
          <div className="rounded-[10px] border border-white/10 bg-white/[0.06] p-4">
            <div className="text-[10px] uppercase tracking-[0.12em] text-white/55">Acquisition</div>
            <div className={`mt-2 font-semibold tracking-[-0.03em] text-white ${compact ? "text-[28px]" : "text-[34px]"}`}>
              $312k
            </div>
            <div className="mt-3 h-2 w-full bg-white/10">
              <div className="h-2 w-[72%] bg-[#FF5A1F]" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <span className="bg-[#14b86a] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-white">
              Build
            </span>
            <span className="bg-[#d9a441] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#041428]">
              Hold
            </span>
            <span className="bg-[#d84343] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-white">
              Busted
            </span>
          </div>
        </div>
        <div className="grid gap-3">
          {["DSCR 1.42", "Cash-on-cash 13.8%", "Stabilized spread +$42k"].map((item) => (
            <div key={item} className="rounded-[10px] border border-white/10 bg-white/[0.05] p-3">
              <div className={`text-white ${metric}`}>{item}</div>
            </div>
          ))}
          <div className="rounded-[10px] border border-[#FF5A1F]/50 bg-[#FF5A1F]/10 p-3 text-[10px] uppercase tracking-[0.12em] text-[#ffb08d]">
            Underwriting verdict surface
          </div>
        </div>
      </div>
    </div>
  );
}

function MaterialMarketplaceCover({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative h-full w-full overflow-hidden p-4" style={coverGrid("#191510")}>
      <div className="grid h-full gap-3">
        <div className="flex items-center justify-between rounded-[10px] border border-white/10 bg-white/[0.06] px-3 py-2">
          <div className="text-[10px] uppercase tracking-[0.12em] text-white/55">Procurement lot</div>
          <div className="rounded-full bg-[#F2B01E] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#191510]">
            Price
          </div>
        </div>
        <div className="grid gap-3 min-[700px]:grid-cols-[1fr_.8fr]">
          <div className="rounded-[12px] border border-white/10 bg-white/[0.05] p-3">
            <div className="text-[13px] font-medium text-white">Division 09 finish package</div>
            <div className="mt-2 space-y-2">
              {["2,480 sq ft", "Lead time 6 days", "Verified mill + distributor"].map((row) => (
                <div key={row} className="h-2 rounded-full bg-white/12" aria-hidden="true">
                  <div className="sr-only">{row}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="rounded border border-white/15 px-2 py-1 text-[9px] uppercase tracking-[0.1em] text-white/70">
                Provenance
              </span>
              <span className="rounded border border-[#F2B01E]/35 bg-[#F2B01E]/12 px-2 py-1 text-[9px] uppercase tracking-[0.1em] text-[#ffd37c]">
                Quantity
              </span>
            </div>
          </div>
          <div className="grid gap-3">
            <div className="rounded-[12px] border border-white/10 bg-white/[0.05] p-3">
              <div className="text-[10px] uppercase tracking-[0.12em] text-white/55">Unit price</div>
              <div className={`mt-2 font-semibold tracking-[-0.03em] text-[#F2B01E] ${compact ? "text-[24px]" : "text-[30px]"}`}>
                $18.40
              </div>
            </div>
            <div className="rounded-[12px] border border-white/10 bg-white/[0.05] p-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.12em] text-white/55">Qty</span>
                <span className="text-[12px] text-white">144</span>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center border border-white/15 text-white">−</span>
                <span className="h-2 flex-1 bg-white/10">
                  <span className="block h-2 w-[58%] bg-[#F2B01E]" />
                </span>
                <span className="flex h-7 w-7 items-center justify-center border border-white/15 text-white">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConstructOSCover({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative h-full w-full overflow-hidden p-4" style={coverGrid("#14171A")}>
      <div className="grid h-full gap-3 min-[700px]:grid-cols-[.85fr_1.15fr]">
        <div className="relative rounded-[12px] border border-white/10 bg-white/[0.04] p-4">
          <div className="absolute bottom-4 left-4 top-4 w-[3px] rounded-full bg-[#14C8B4]" />
          <div className="ml-4 grid gap-3">
            {[0.42, 0.35, 0.6, 0.3].map((width, index) => (
              <div key={index} className="relative rounded-[8px] border border-white/10 bg-white/[0.04] p-3">
                <div
                  className="h-2 rounded-full bg-white/12"
                  style={{ width: `${width * 100}%` }}
                />
                {index === 2 && (
                  <div className="absolute inset-0 rounded-[8px] ring-1 ring-[#14C8B4] shadow-[0_0_18px_rgba(20,200,180,.25)]" />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-3">
          <div className="rounded-[12px] border border-white/10 bg-white/[0.05] p-4">
            <div className="flex items-center justify-between">
              <div className="text-[10px] uppercase tracking-[0.12em] text-white/55">Decision dashboard</div>
              <div className="rounded-full bg-[#14C8B4]/15 px-2 py-1 text-[9px] uppercase tracking-[0.1em] text-[#89f0e3]">
                AI signal
              </div>
            </div>
            <div className={`mt-3 font-semibold tracking-[-0.03em] text-white ${compact ? "text-[20px]" : "text-[24px]"}`}>
              Margin leak in Division 03
            </div>
            <div className="mt-3 h-2 w-full bg-white/10">
              <div className="h-2 w-[64%] bg-[#14C8B4]" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {["BD pipeline", "Procurement", "Executive report", "Logistics"].map((item) => (
              <div key={item} className="rounded-[12px] border border-white/10 bg-white/[0.05] p-3 text-[11px] text-white/75">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PactPilotCover({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative h-full w-full overflow-hidden p-4" style={coverGrid("#0B1D2E")}>
      <div className="grid h-full gap-3 min-[700px]:grid-cols-[1fr_.82fr]">
        <div className="rounded-[12px] border border-white/12 bg-white/[0.06] p-4">
          <div className="space-y-2">
            {[1, 2, 3, 4].map((line) => (
              <div key={line} className="h-2 rounded-full bg-white/18" />
            ))}
          </div>
          <div className="mt-3 rounded-[10px] border border-[#F2C14E]/40 bg-[#F2C14E]/12 p-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#F2C14E]" />
              <span className="h-2 flex-1 rounded-full bg-white/30" />
            </div>
          </div>
          <div className="mt-3 space-y-2">
            <div className="h-2 w-[88%] rounded-full bg-white/14" />
            <div className="h-2 w-[70%] rounded-full bg-white/14" />
          </div>
        </div>
        <div className="grid gap-3">
          <div className="rounded-[12px] border border-white/10 bg-white/[0.05] p-3">
            <div className="text-[10px] uppercase tracking-[0.12em] text-white/55">Findings</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded bg-[#f05454] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-white">
                High
              </span>
              <span className="rounded bg-[#F2C14E] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#0B1D2E]">
                Review
              </span>
              <span className="rounded bg-[#14b86a] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-white">
                Clear
              </span>
            </div>
          </div>
          <div className="rounded-[12px] border border-white/10 bg-white/[0.05] p-3">
            <div className="text-[10px] uppercase tracking-[0.12em] text-white/55">Clause risk</div>
            <div className={`mt-2 font-semibold tracking-[-0.03em] text-white ${compact ? "text-[18px]" : "text-[22px]"}`}>
              Missing indemnity exception
            </div>
            <div className="mt-3 rounded border border-[#F2C14E]/40 px-2 py-1 text-[9px] uppercase tracking-[0.1em] text-[#fde3a1]">
              Not legal advice
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomepageProductCover({
  visualKey,
  compact = false,
}: {
  visualKey: Extract<
    HomepageVisualKey,
    "build-or-busted" | "builderbae" | "constructos" | "pactpilot"
  >;
  compact?: boolean;
}) {
  if (visualKey === "build-or-busted") return <BuildOrBustedCover compact={compact} />;
  if (visualKey === "builderbae") return <MaterialMarketplaceCover compact={compact} />;
  if (visualKey === "constructos") return <ConstructOSCover compact={compact} />;
  return <PactPilotCover compact={compact} />;
}
