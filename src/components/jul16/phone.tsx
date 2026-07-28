import type { ReactNode } from "react";
import { BobMark } from "@/components/jul16/coins";
import { cn } from "@/lib/utils";

function StatusBar() {
  return (
    <div className="ph-status" aria-hidden>
      <span>9:41</span>
      <span className="ph-status-r">
        <i className="ph-sig" />
        <i className="ph-wifi" />
        <i className="ph-batt" />
      </span>
    </div>
  );
}

function TabBar({ active }: { active: string }) {
  const tabs = ["Home", "Market", "Learn", "Wallet", "Profile"];
  return (
    <div className="ph-tabbar" aria-hidden>
      {tabs.map((t) => (
        <span key={t} className={t === active ? "on" : undefined}>
          <i className={`ph-tabic ph-tabic-${t.toLowerCase()}`} />
          {t}
        </span>
      ))}
    </div>
  );
}

/** Device shell. `role="img"` keeps the mock out of the reading order. */
export function PhoneShell({
  children,
  className,
  label,
}: {
  children: ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <div className={cn("phone", className)} role="img" aria-label={label}>
      <div className="notch" />
      <div className="screen ph-screen">{children}</div>
    </div>
  );
}

/** Hero phone — the Marketplace app screen from the Jul 16 design. */
export function PhoneMarketplace({ className }: { className?: string }) {
  return (
    <PhoneShell className={className} label="ConstructFi app — marketplace screen (illustrative mockup)">
      <StatusBar />
      <div className="ph-body">
        <div className="ph-title">Marketplace</div>
        <div className="ph-stats two">
          <div>
            <span className="k">COVI</span>
            <span className="v">•••</span>
          </div>
          <div>
            <span className="k">ELUV</span>
            <span className="v gold">•••</span>
          </div>
        </div>
        <div className="ph-tabs">
          <span className="on">Apps</span>
          <span>Games</span>
          <span>Materials</span>
          <span>NFTs</span>
        </div>

        <div className="ph-feature">
          <div className="ph-feature-eyebrow">Featured · Flagship</div>
          <div className="ph-feature-row">
            <BobMark className="sm" />
            <div className="ph-feature-txt">
              <b>Build or Bust</b>
              <span>Real-estate deal screening</span>
            </div>
            <span className="ph-get">Get</span>
          </div>
        </div>

        <div className="ph-list">
          {[
            { n: "Covi Estimator", s: "Materials & scope", a: "Open" },
            { n: "House Hackers", s: "Learn by playing", a: "Soon" },
            { n: "Readiness Tracker", s: "ELUV milestones", a: "Open" },
            { n: "Covi Wallet", s: "COVI & ELUV", a: "Get" },
          ].map((r) => (
            <div className="ph-row" key={r.n}>
              <i className="ph-ico" />
              <div className="ph-row-txt">
                <b>{r.n}</b>
                <span>{r.s}</span>
              </div>
              <span className={cn("ph-get", r.a === "Soon" && "soon")}>{r.a}</span>
            </div>
          ))}
        </div>
      </div>
      <TabBar active="Market" />
    </PhoneShell>
  );
}

/** "See ConstructFi in action" — participation dashboard screen. */
export function PhoneDashboard({ className }: { className?: string }) {
  return (
    <PhoneShell className={className} label="ConstructFi app — participation dashboard (illustrative mockup)">
      <StatusBar />
      <div className="ph-body">
        <div className="ph-title">Your progress</div>
        <div className="ph-hero-card">
          <span className="k">Readiness tier</span>
          <span className="v">Tier 3 · Verified</span>
          <div className="ph-bar">
            <i style={{ width: "68%" }} />
          </div>
          <span className="s">Milestones minted as soulbound ELUV</span>
        </div>
        <div className="ph-stats two">
          <div>
            <span className="k">COVI earned</span>
            <span className="v">•••</span>
          </div>
          <div>
            <span className="k">ELUV milestones</span>
            <span className="v gold">•••</span>
          </div>
        </div>
        <div className="ph-sub">Recent activity</div>
        <div className="ph-list">
          {[
            { n: "Deal analysis completed", s: "Build or Bust", a: "COVI" },
            { n: "Budgeting module", s: "Learn track", a: "COVI" },
            { n: "Milestone minted", s: "Readiness · Tier 3", a: "ELUV" },
            { n: "Marketplace purchase", s: "Covington Supply", a: "COVI" },
          ].map((r) => (
            <div className="ph-row" key={r.n}>
              <i className="ph-ico" />
              <div className="ph-row-txt">
                <b>{r.n}</b>
                <span>{r.s}</span>
              </div>
              <span className={cn("ph-amt", r.a === "ELUV" && "gold")}>{r.a}</span>
            </div>
          ))}
        </div>
      </div>
      <TabBar active="Home" />
    </PhoneShell>
  );
}

/** Marketplace side rail — Covi Wallet screen. */
export function PhoneWallet({ className }: { className?: string }) {
  return (
    <div className={cn("side-phone", className)} role="img" aria-label="Covi Wallet screen (illustrative mockup)">
      <div className="sp-notch" />
      <div className="sp-screen ph-screen">
        <StatusBar />
        <div className="ph-body">
          <div className="ph-title">Covi Wallet</div>
          <div className="ph-asset covi">
            <span className="n">COVI</span>
            <span className="v">•••</span>
            <span className="s">Commerce &amp; rewards · ERC-20</span>
          </div>
          <div className="ph-asset eluv">
            <span className="n">ELUV</span>
            <span className="v">•••</span>
            <span className="s">Soulbound milestones · non-transferable</span>
          </div>
          <div className="ph-sub">Activity</div>
          <div className="ph-list">
            {[
              { n: "Materials purchase", a: "COVI" },
              { n: "Module completed", a: "COVI" },
              { n: "Milestone minted", a: "ELUV" },
            ].map((r) => (
              <div className="ph-row slim" key={r.n}>
                <div className="ph-row-txt">
                  <b>{r.n}</b>
                </div>
                <span className={cn("ph-amt", r.a === "ELUV" && "gold")}>{r.a}</span>
              </div>
            ))}
          </div>
          <div className="ph-keys">Non-custodial · your keys, always</div>
        </div>
      </div>
    </div>
  );
}
