import Link from "next/link";
import { CircleCheck, CalendarClock, ShieldCheck } from "lucide-react";
import { SITE } from "@/lib/site";

type Item = { text: string; href?: string };

type Column = {
  key: "today" | "launch" | "audit";
  icon: typeof CircleCheck;
  title: string;
  items: Item[];
};

/**
 * Every claim here is load-bearing for compliance. "Available today" may only
 * list things a visitor can actually do right now; everything gated on the
 * launch date or the contract audit belongs in the later columns.
 */
const COLUMNS: Column[] = [
  {
    key: "today",
    icon: CircleCheck,
    title: "Available today",
    items: [
      { text: "Connect a wallet on Base from the site header" },
      {
        text: "Try the Build or Bust prototype in your browser — an interactive demo running on demonstration data",
        href: "/app#demo",
      },
      { text: "Preview the participant dashboard", href: "/dashboard" },
      {
        text: `Read the whitepaper (v${SITE.whitepaperVersion}, ${SITE.whitepaperDate})`,
        href: "/whitepaper",
      },
    ],
  },
  {
    key: "launch",
    icon: CalendarClock,
    title: `At launch · ${SITE.launchDate}`,
    items: [
      { text: "Platform goes live; KYC / allowlist verification opens" },
      {
        text: "Start earning COVI through verified activity — COVI is transfer-paused and non-tradable at launch",
      },
      { text: "Begin minting soulbound ELUV milestones" },
      { text: "Marketplace opens for the verified supplier network" },
    ],
  },
  {
    key: "audit",
    icon: ShieldCheck,
    title: "After independent audit",
    items: [
      {
        text: "COVI becomes tradable only after an independent smart-contract audit and a publicly published, audited contract address",
      },
      { text: "Mobile apps (iOS App Store / Google Play) — coming soon" },
      { text: "Phase 2: collectibles & credentials layer" },
    ],
  },
];

/**
 * Shared "what works now vs. what is still sequenced" strip.
 *
 * Styled entirely from jul16 custom properties so it inherits the correct
 * contrast whether it lands on a light band, a `.section.dkband`, or an
 * `.ink-surface` page hero.
 */
export function LaunchStatusStrip() {
  return (
    <div className="lss" data-testid="launch-status-strip">
      <div className="lss-grid">
        {COLUMNS.map((col) => (
          <div className={`lss-col lss-${col.key}`} key={col.key}>
            <div className="lss-head">
              <span className="lss-ic" aria-hidden>
                <col.icon size={17} strokeWidth={2} />
              </span>
              <h3 className="lss-title">{col.title}</h3>
            </div>
            <ul className="lss-list">
              {col.items.map((item) => (
                <li key={item.text}>
                  <span className="lss-dot" aria-hidden />
                  {item.href ? (
                    <Link className="lss-link" href={item.href}>
                      {item.text}
                    </Link>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="lss-foot">
        COVI is a utility token for ecosystem activity — not an investment. Dates are
        targets and may shift; nothing here is an offer to sell.
      </p>
    </div>
  );
}
