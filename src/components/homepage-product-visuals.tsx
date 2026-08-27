import type { CSSProperties } from "react";

export type ProductVisualKey =
  | "build-or-busted"
  | "builderbae"
  | "constructos"
  | "pactpilot"
  | "supplier-marketplace"
  | "eluvial-academy"
  | "house-hackers";

type ProductVisualMode = "badge" | "tile" | "cover";

type ProductVisualSpec = {
  keyColor: string;
  inkColor: string;
  badgeBackground: string;
  badgeBorder: string;
  badgeForeground: string;
  tileBackground: string;
  tileForeground: string;
  dotColor: string;
};

const specs: Record<ProductVisualKey, ProductVisualSpec> = {
  "build-or-busted": {
    keyColor: "#FF5A1F",
    inkColor: "#0E1420",
    badgeBackground: "#281610",
    badgeBorder: "rgba(255,90,31,.45)",
    badgeForeground: "#ffb08d",
    tileBackground: "#281610",
    tileForeground: "#ffb08d",
    dotColor: "#FF5A1F",
  },
  builderbae: {
    keyColor: "#F2B01E",
    inkColor: "#191510",
    badgeBackground: "#2a1f0d",
    badgeBorder: "rgba(242,176,30,.4)",
    badgeForeground: "#ffe09e",
    tileBackground: "#241c12",
    tileForeground: "#f8d27b",
    dotColor: "#F2B01E",
  },
  constructos: {
    keyColor: "#14C8B4",
    inkColor: "#14171A",
    badgeBackground: "#122020",
    badgeBorder: "rgba(20,200,180,.36)",
    badgeForeground: "#9ff1e7",
    tileBackground: "#122020",
    tileForeground: "#9ff1e7",
    dotColor: "#14C8B4",
  },
  pactpilot: {
    keyColor: "#F2C14E",
    inkColor: "#0B1D2E",
    badgeBackground: "#1a2937",
    badgeBorder: "rgba(242,193,78,.38)",
    badgeForeground: "#fde3a1",
    tileBackground: "#162534",
    tileForeground: "#fde3a1",
    dotColor: "#F2C14E",
  },
  "supplier-marketplace": {
    keyColor: "#00A87C",
    inkColor: "#122118",
    badgeBackground: "#102320",
    badgeBorder: "rgba(0,168,124,.35)",
    badgeForeground: "#9fe0be",
    tileBackground: "#102320",
    tileForeground: "#9fe0be",
    dotColor: "#00A87C",
  },
  "eluvial-academy": {
    keyColor: "#D4A017",
    inkColor: "#193020",
    badgeBackground: "#193020",
    badgeBorder: "rgba(212,160,23,.4)",
    badgeForeground: "#efd48a",
    tileBackground: "linear-gradient(180deg,#172726,#193020)",
    tileForeground: "#dfe6c1",
    dotColor: "#D4A017",
  },
  "house-hackers": {
    keyColor: "#D4A017",
    inkColor: "#23262B",
    badgeBackground: "#23262B",
    badgeBorder: "rgba(212,160,23,.42)",
    badgeForeground: "#f2d27a",
    tileBackground: "#1f2228",
    tileForeground: "#f0d58e",
    dotColor: "#D4A017",
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

export function getProductVisualSpec(key: ProductVisualKey) {
  return specs[key];
}

function ProductBadgeShape({ visualKey }: { visualKey: ProductVisualKey }) {
  const spec = specs[visualKey];
  const stroke = { borderColor: spec.badgeBorder };

  if (visualKey === "constructos") {
    return (
      <span className="relative block h-4 w-4">
        <span className="absolute left-[1px] top-0 h-4 w-[3px] rounded-full bg-[#14C8B4]" />
        <span className="absolute left-[6px] top-[2px] h-[3px] w-[9px] rounded-full bg-[#9ff1e7]" />
        <span className="absolute left-[6px] top-[7px] h-[3px] w-[7px] rounded-full bg-[#9ff1e7]/80" />
        <span className="absolute left-[6px] top-[12px] h-[3px] w-[8px] rounded-full bg-[#9ff1e7]/55" />
      </span>
    );
  }

  if (visualKey === "build-or-busted") {
    return (
      <span className="relative block h-4 w-[18px] overflow-hidden">
        <span className="absolute inset-0 border border-[#FF5A1F]/45" />
        <span className="absolute left-[2px] top-[2px] h-[10px] w-[5px] bg-white/20" />
        <span className="absolute left-[8px] top-[2px] h-[10px] w-[8px] bg-[#FF5A1F]" />
        <span className="absolute inset-x-[2px] bottom-[2px] h-[2px] bg-[#ffb08d]" />
      </span>
    );
  }

  if (visualKey === "builderbae") {
    return (
      <span className="relative block h-4 w-[18px]">
        <span className="absolute inset-x-0 bottom-0 h-[11px] rounded-[2px] bg-[#F2B01E]" />
        <span className="absolute left-[2px] top-[2px] h-[5px] w-[14px] rounded-[2px] border" style={stroke} />
        <span className="absolute left-[4px] top-[4px] h-px w-[10px] bg-[#191510]" />
      </span>
    );
  }

  if (visualKey === "supplier-marketplace") {
    return (
      <span className="relative block h-4 w-4">
        <span
          className="absolute inset-0"
          style={{
            clipPath: "polygon(26% 3%,74% 3%,97% 50%,74% 97%,26% 97%,3% 50%)",
            background: "rgba(159,224,190,.18)",
            border: "1px solid rgba(0,168,124,.35)",
          }}
        />
        <span
          className="absolute inset-[3px]"
          style={{
            clipPath: "polygon(26% 3%,74% 3%,97% 50%,74% 97%,26% 97%,3% 50%)",
            background: "#00A87C",
          }}
        />
      </span>
    );
  }

  if (visualKey === "pactpilot") {
    return (
      <span className="relative block h-4 w-[18px] overflow-hidden rounded-[2px] border border-[#F2C14E]/35">
        <span className="absolute inset-y-0 left-[5px] w-px bg-[#F2C14E]" />
        <span className="absolute inset-y-0 right-[5px] w-px bg-[#fde3a1]/55" />
        <span className="absolute bottom-[3px] left-[2px] right-[2px] h-px bg-[#F2C14E]" />
      </span>
    );
  }

  return (
    <span className="relative block h-4 w-[18px] overflow-hidden rounded-[2px] border border-[#D4A017]/35 bg-[#193020]">
      <span className="absolute inset-x-[2px] top-[2px] h-[4px] bg-[#D4A017]" />
      <span className="absolute bottom-[2px] left-[2px] h-[6px] w-[5px] bg-[#4c8f59]" />
      <span className="absolute bottom-[2px] left-[8px] h-[8px] w-[8px] bg-[#efd48a]" />
    </span>
  );
}

function ProductBadge({ visualKey, size = "md" }: { visualKey: ProductVisualKey; size?: "sm" | "md" }) {
  const spec = specs[visualKey];
  const sizeClass = size === "sm" ? "h-7 w-7" : "h-8 w-8";

  return (
    <span
      className={`inline-flex items-center justify-center overflow-hidden border ${sizeClass}`}
      style={{
        background: spec.badgeBackground,
        borderColor: spec.badgeBorder,
        color: spec.badgeForeground,
      }}
      aria-hidden="true"
    >
      <ProductBadgeShape visualKey={visualKey} />
    </span>
  );
}

function HeroTileSurface({ visualKey }: { visualKey: ProductVisualKey }) {
  if (visualKey === "constructos") {
    return (
      <div className="grid gap-[5px]">
        <div className="flex items-center gap-[6px]">
          <span className="h-7 w-[3px] bg-[#14C8B4]" />
          <div className="grid flex-1 gap-[5px]">
            <span className="h-[5px] w-[70%] bg-[#9ff1e7]/85" />
            <span className="h-[5px] w-[48%] bg-[#9ff1e7]/55" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[5px]">
          <span className="h-6 border border-white/10 bg-white/[0.04]" />
          <span className="h-6 border border-[#14C8B4]/35 bg-[#14C8B4]/12" />
        </div>
      </div>
    );
  }

  if (visualKey === "build-or-busted") {
    return (
      <div className="grid gap-[6px]">
        <div className="border border-white/10 bg-white/[0.05] p-[6px]">
          <span className="block h-[4px] w-[58%] bg-white/30" />
          <span className="mt-[6px] block h-[8px] w-[45%] bg-white/80" />
          <span className="mt-[6px] block h-[4px] w-full bg-white/10">
            <span className="block h-[4px] w-[65%] bg-[#FF5A1F]" />
          </span>
        </div>
        <div className="grid grid-cols-3 gap-[4px]">
          <span className="h-4 bg-[#14b86a]" />
          <span className="h-4 bg-[#F2C14E]" />
          <span className="h-4 bg-[#d84343]" />
        </div>
      </div>
    );
  }

  if (visualKey === "builderbae") {
    return (
      <div className="grid gap-[6px]">
        <div className="border border-white/10 bg-white/[0.05] p-[6px]">
          <div className="flex items-center gap-[5px]">
            <span className="h-4 w-4 border border-[#F2B01E]/35 bg-[#F2B01E]/15" />
            <span className="h-[4px] flex-1 bg-white/28" />
          </div>
          <span className="mt-[6px] block h-[8px] w-[40%] bg-[#F2B01E]" />
        </div>
        <div className="flex items-center justify-between gap-[6px]">
          <span className="h-4 flex-1 bg-white/10" />
          <span className="h-4 w-10 bg-[#F2B01E]" />
        </div>
      </div>
    );
  }

  if (visualKey === "supplier-marketplace") {
    return (
      <div className="grid grid-cols-3 gap-[5px]">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className="h-5"
            style={{
              clipPath: "polygon(26% 3%,74% 3%,97% 50%,74% 97%,26% 97%,3% 50%)",
              backgroundColor: i === 1 || i === 4 ? "#00A87C" : "rgba(255,255,255,.08)",
            }}
          />
        ))}
      </div>
    );
  }

  if (visualKey === "pactpilot") {
    return (
      <div className="grid gap-[6px]">
        <div className="border border-white/10 bg-white/[0.05] p-[6px]">
          <span className="block h-[4px] w-[58%] bg-white/28" />
          <span className="mt-[5px] block h-[4px] w-[75%] bg-white/16" />
          <span className="mt-[5px] block h-[4px] w-[62%] bg-white/16" />
        </div>
        <div className="flex gap-[4px]">
          <span className="h-4 w-6 bg-[#f05454]" />
          <span className="h-4 w-6 bg-[#F2C14E]" />
          <span className="h-4 w-6 bg-[#14b86a]" />
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-[6px]">
      <div className="grid grid-cols-[1.1fr_.9fr] gap-[5px]">
        <span className="h-5 border border-[#D4A017]/35 bg-[#D4A017]/18" />
        <span className="h-5 border border-[#4c8f59]/35 bg-[#4c8f59]/18" />
      </div>
      <span className="h-[4px] w-[70%] bg-white/22" />
    </div>
  );
}

function BuildOrBustedCover({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative h-full w-full overflow-hidden p-4 sm:p-5" style={coverGrid("#0E1420")}>
      <div className="absolute inset-x-0 top-0 h-[3px] bg-[#FF5A1F]" />
      <div className="grid h-full gap-3">
        <div className="grid gap-3 min-[700px]:grid-cols-[1.18fr_.82fr]">
          <div className="rounded-[12px] border border-white/10 bg-white/[0.05] p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[9px] uppercase tracking-[0.14em] text-white/55">Deal metric</div>
                <div className={`mt-2 font-semibold tracking-[-0.035em] text-white ${compact ? "text-[24px]" : "text-[34px]"}`}>
                  $312k
                </div>
              </div>
              <div className="border border-[#FF5A1F]/35 bg-[#FF5A1F]/12 px-2 py-1 text-[9px] uppercase tracking-[0.14em] text-[#ffb08d]">
                Review
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                ["DSCR", "1.42"],
                ["Cash-on-cash", "13.8%"],
                ["Exit cap", "6.1%"],
                ["Spread", "+$42k"],
              ].map(([label, value]) => (
                <div key={label} className="border border-white/10 bg-[#0a111b] p-3">
                  <div className="text-[9px] uppercase tracking-[0.12em] text-white/50">{label}</div>
                  <div className="mt-1 text-[14px] font-medium text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-3">
            <div className="border border-white/10 bg-white/[0.05] p-3">
              <div className="text-[9px] uppercase tracking-[0.12em] text-white/50">Property</div>
              <div className="mt-2 text-[13px] text-white">12-unit value-add · South Dallas</div>
              <div className="mt-3 h-[5px] bg-white/10">
                <div className="h-[5px] w-[72%] bg-[#FF5A1F]" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <span className="bg-[#14b86a] px-2 py-1 text-center text-[9px] font-semibold uppercase tracking-[0.1em] text-white">Build</span>
              <span className="bg-[#F2C14E] px-2 py-1 text-center text-[9px] font-semibold uppercase tracking-[0.1em] text-[#041428]">Hold</span>
              <span className="bg-[#d84343] px-2 py-1 text-center text-[9px] font-semibold uppercase tracking-[0.1em] text-white">Busted</span>
            </div>
            <div className="border border-[#FF5A1F]/35 bg-[#FF5A1F]/10 p-3 text-[10px] uppercase tracking-[0.12em] text-[#ffb08d]">
              Orange action bar · underwriting verdict
            </div>
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
        <div className="border border-white/10 bg-white/[0.05] p-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-[9px] uppercase tracking-[0.12em] text-white/50">Procurement listing</div>
              <div className="mt-1 text-[13px] font-medium text-white">Reclaimed oak flooring pallet</div>
            </div>
            <span className="border border-[#F2B01E]/35 bg-[#F2B01E]/12 px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-[#ffe09e]">
              Verified
            </span>
          </div>
          <div className="mt-2 text-[10px] text-white/60">Nashville, TN · Division 09 finish package</div>
        </div>
        <div className="grid flex-1 gap-3 min-[700px]:grid-cols-[1fr_.9fr]">
          <div className="border border-white/10 bg-white/[0.05] p-3">
            <div className="flex flex-wrap gap-2">
              <span className="border border-white/12 px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-white/65">Qty 144</span>
              <span className="border border-[#F2B01E]/35 px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-[#ffe09e]">Provenance</span>
            </div>
            <div className="mt-3 space-y-2">
              <div className="h-[5px] w-[84%] bg-white/16" />
              <div className="h-[5px] w-[67%] bg-white/16" />
              <div className="h-[5px] w-[52%] bg-white/16" />
            </div>
          </div>
          <div className="grid gap-3">
            <div className="border border-white/10 bg-white/[0.05] p-3">
              <div className="text-[9px] uppercase tracking-[0.12em] text-white/50">Price</div>
              <div className={`mt-2 font-semibold tracking-[-0.03em] text-[#F2B01E] ${compact ? "text-[22px]" : "text-[30px]"}`}>
                $18.40
              </div>
              <div className="mt-1 text-[10px] text-white/38 line-through">$22.10</div>
            </div>
            <div className="border border-[#F2B01E]/25 bg-[#F2B01E]/10 p-3 text-[10px] uppercase tracking-[0.12em] text-[#ffe09e]">
              8 pallets left
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
        <div className="relative border border-white/10 bg-white/[0.04] p-4">
          <div className="absolute bottom-4 left-4 top-4 w-[4px] bg-[#14C8B4]" />
          <div className="ml-5 grid gap-3">
            {[0.44, 0.3, 0.62, 0.36].map((width, index) => (
              <div key={index} className="relative border border-white/10 bg-white/[0.04] p-3">
                <div className="h-[5px] bg-white/16" style={{ width: `${width * 100}%` }} />
                {index === 2 && <div className="absolute inset-0 border border-[#14C8B4]/50 shadow-[0_0_20px_rgba(20,200,180,.18)]" />}
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-3">
          <div className="border border-white/10 bg-white/[0.05] p-4">
            <div className="flex items-center justify-between gap-2">
              <div className="text-[9px] uppercase tracking-[0.12em] text-white/50">Decision dashboard</div>
              <span className="border border-[#14C8B4]/35 bg-[#14C8B4]/12 px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-[#9ff1e7]">
                AI signal
              </span>
            </div>
            <div className={`mt-3 font-semibold tracking-[-0.03em] text-white ${compact ? "text-[18px]" : "text-[24px]"}`}>
              Margin leak in Division 03
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {["Procurement", "Ops", "BD", "Reporting"].map((label) => (
                <span key={label} className="border border-white/10 bg-[#121719] px-2 py-2 text-[10px] text-white/72">
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <span className="h-8 border border-white/10 bg-white/[0.04]" />
            <span className="h-8 border border-[#14C8B4]/35 bg-[#14C8B4]/12" />
            <span className="h-8 border border-white/10 bg-white/[0.04]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PactPilotCover({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative h-full w-full overflow-hidden p-4" style={coverGrid("#0B1D2E")}>
      <div className="grid h-full gap-3 min-[700px]:grid-cols-[1.1fr_.9fr]">
        <div className="border border-white/10 bg-white/[0.05] p-4">
          <div className="flex items-center justify-between gap-2">
            <div className="text-[9px] uppercase tracking-[0.12em] text-white/50">Finding</div>
            <span className="border border-[#F2C14E]/35 bg-[#F2C14E]/12 px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-[#fde3a1]">
              Counsel review
            </span>
          </div>
          <div className="mt-3 grid grid-cols-[1fr_1fr] gap-3">
            <div className="space-y-2 border-r border-white/10 pr-3">
              <div className="h-[5px] w-[86%] bg-white/18" />
              <div className="h-[5px] w-[72%] bg-white/14" />
              <div className="h-[5px] w-[66%] bg-white/14" />
              <div className="h-[5px] w-[80%] bg-white/14" />
            </div>
            <div className="space-y-2">
              <div className="h-[5px] w-[76%] bg-white/18" />
              <div className="h-[5px] w-[58%] bg-white/14" />
              <div className="h-[5px] w-[63%] bg-white/14" />
              <div className="h-[5px] w-[49%] bg-white/14" />
            </div>
          </div>
        </div>
        <div className="grid gap-3">
          <div className="border border-white/10 bg-white/[0.05] p-3">
            <div className="text-[9px] uppercase tracking-[0.12em] text-white/50">Status</div>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="bg-[#f05454] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-white">High</span>
              <span className="bg-[#F2C14E] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#0B1D2E]">Review</span>
              <span className="bg-[#14b86a] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-white">Clear</span>
            </div>
          </div>
          <div className="border border-white/10 bg-white/[0.05] p-3">
            <div className="text-[9px] uppercase tracking-[0.12em] text-white/50">Clause</div>
            <div className={`mt-2 font-semibold tracking-[-0.03em] text-white ${compact ? "text-[16px]" : "text-[22px]"}`}>
              Missing indemnity exception
            </div>
            <div className="mt-3 border border-[#F2C14E]/35 px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-[#fde3a1]">
              Not legal advice
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type ProductVisualProps = {
  visualKey: ProductVisualKey;
  mode: ProductVisualMode;
  name?: string;
  compact?: boolean;
  size?: "sm" | "md";
};

export function ProductVisual({
  visualKey,
  mode,
  name,
  compact = false,
  size = "md",
}: ProductVisualProps) {
  const spec = specs[visualKey];

  if (mode === "badge") {
    return <ProductBadge visualKey={visualKey} size={size} />;
  }

  if (mode === "tile") {
    return (
      <div
        className="grid gap-3 border px-[11px] py-3"
        style={{
          borderColor: "rgba(255,255,255,.1)",
          background: spec.tileBackground,
        }}
      >
        <div className="flex items-start justify-between gap-2">
          <ProductBadge visualKey={visualKey} size="sm" />
          <span className="h-2 w-2 shrink-0" style={{ backgroundColor: spec.dotColor }} />
        </div>
        <HeroTileSurface visualKey={visualKey} />
        {name ? (
          <span className="text-[11px] leading-[1.25]" style={{ color: spec.tileForeground }}>
            {name}
          </span>
        ) : null}
      </div>
    );
  }

  if (visualKey === "build-or-busted") return <BuildOrBustedCover compact={compact} />;
  if (visualKey === "builderbae") return <MaterialMarketplaceCover compact={compact} />;
  if (visualKey === "constructos") return <ConstructOSCover compact={compact} />;
  return <PactPilotCover compact={compact} />;
}
