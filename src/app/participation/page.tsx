import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE, COVI, ELUV, COVI_ALLOCATION } from "@/lib/site";

export const metadata: Metadata = {
  title: "Participation — COVI & ELUV | ConstructFi",
  description:
    "COVI is a utility token for eligible ecosystem activity. ELUV is a non-transferable credential for verified real-estate progress. Neither is an investment.",
  openGraph: {
    title: "COVI & ELUV — Ecosystem Participation | ConstructFi",
    description:
      "Learn how COVI and ELUV work as optional participation layers in the ConstructFi ecosystem — earned through verified activity, never purchased as investments.",
    url: `${SITE.url}/participation`,
    images: [{ url: "/og/default.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/participation" },
};

const COVI_NOTES = [
  "COVI is an ERC-20 utility token with a fixed supply of 10,000,000,000.",
  "Transfer-paused and earn-only before listing on any exchange.",
  "Earned through eligible platform activity; spent on platform features.",
  "Not an investment. No yield, APY, return, or appreciation claim is made.",
  "Verified contract addresses published after independent audit — not before.",
];

const ELUV_NOTES = [
  "ELUV is an ERC-5192 Minimal Soulbound NFT, non-transferable by design.",
  "One token minted per verified milestone — no fixed supply.",
  "Earned only through verified learning, procurement, or participation milestones.",
  "Never sold, never transferable. Confers no financial rights.",
  "Governance weight derives from milestone count and tier, with a per-address cap.",
];

export default function ParticipationPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <header className="section" style={{ borderTop: "none", paddingBottom: 44 }}>
        <div className="wrap">
          <span className="eyebrow">Ecosystem participation</span>
          <h1 style={{ fontSize: 44, fontWeight: 800, margin: "0 0 14px", maxWidth: 700 }}>
            COVI &amp; ELUV — participation, not investment.
          </h1>
          <p style={{ fontSize: 18, color: "var(--ink2)", maxWidth: 640, lineHeight: 1.65 }}>
            COVI and ELUV are the optional participation layers of the ConstructFi
            ecosystem. They are earned through verified activity — never purchased as
            investments, never offered for yield, appreciation, or return.
          </p>
          <div className="store-line">
            <span className="chip soon">Launching {SITE.launchDate}</span>
            <span className="chip">Earn-only before listing</span>
            <span className="chip">Token participation is optional</span>
          </div>
        </div>
      </header>

      {/* ── COVI ─────────────────────────────────────────────────────────── */}
      <section className="section alt" id="s-covi">
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "40px 56px",
              alignItems: "start",
            }}
            className="feature-row"
          >
            <div style={{ textAlign: "center", minWidth: 160 }}>
              <Image
                src="/coins/covi.png"
                alt="COVI coin — utility token for eligible ConstructFi ecosystem activity"
                width={160}
                height={160}
                style={{ borderRadius: "50%", display: "block", margin: "0 auto" }}
                priority
              />
              <div
                style={{
                  marginTop: 16,
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "10px",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "rgba(0,51,107,.4)",
                }}
              >
                {COVI.standard}
              </div>
            </div>
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "10.5px",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--teal)",
                  marginBottom: 8,
                }}
              >
                COVI
              </span>
              <h2 style={{ margin: "0 0 8px", fontSize: 30, fontWeight: 700 }}>
                Utility for eligible ecosystem activity.
              </h2>
              <p
                style={{
                  margin: "0 0 20px",
                  fontSize: 16,
                  lineHeight: 1.65,
                  color: "var(--ink2)",
                  maxWidth: 560,
                }}
              >
                Designed to support defined access and participation across ConstructFi
                and Covington experiences. COVI is earned through platform activity and
                spent on platform features — enabling deeper access to tools, reports,
                and ecosystem capabilities.
              </p>
              <ul
                style={{
                  margin: "0 0 24px",
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {COVI_NOTES.map((note) => (
                  <li
                    key={note}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                      fontSize: 14.5,
                      lineHeight: 1.6,
                      color: "var(--ink2)",
                    }}
                  >
                    <span style={{ color: "var(--teal)", flexShrink: 0, marginTop: 2 }}>
                      ✓
                    </span>
                    {note}
                  </li>
                ))}
              </ul>
              <div
                className="disclaim"
                style={{
                  fontSize: 13,
                  lineHeight: 1.6,
                  color: "rgba(0,51,107,.55)",
                  maxWidth: 560,
                }}
              >
                <strong>COVI is not an investment.</strong> No yield, staking return,
                APY, appreciation, revenue share, or financial return is implied or
                offered. Fixed supply: {COVI.supply} tokens (10B cap). Chain: {COVI.chain}.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COVI Allocation ───────────────────────────────────────────────── */}
      <section className="section" id="s-covi-allocation">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">COVI tokenomics</span>
            <h2>Token allocation — 10,000,000,000 fixed cap</h2>
          </div>
          <div className="primer">
            {COVI_ALLOCATION.map((row) => (
              <div className="pr" key={row.name}>
                <div className="pr-n">{row.pct}%</div>
                <div className="pr-t">{row.name}</div>
                <p className="pr-d">{row.tokens} · {row.vesting}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ELUV ─────────────────────────────────────────────────────────── */}
      <section className="section dkband" id="s-eluv">
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "40px 56px",
              alignItems: "start",
            }}
            className="feature-row"
          >
            <div style={{ textAlign: "center", minWidth: 160 }}>
              <Image
                src="/coins/eluv.png"
                alt="ELUV coin — verified progress credential for the Eluvial real-estate ecosystem"
                width={160}
                height={160}
                style={{ borderRadius: "50%", display: "block", margin: "0 auto" }}
                priority
              />
              <div
                style={{
                  marginTop: 16,
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "10px",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,.35)",
                }}
              >
                {ELUV.standard}
              </div>
            </div>
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "10.5px",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--teal)",
                  marginBottom: 8,
                }}
              >
                ELUV
              </span>
              <h2 style={{ margin: "0 0 8px", fontSize: 30, fontWeight: 700, color: "#fff" }}>
                Verified progress in real estate.
              </h2>
              <p
                style={{
                  margin: "0 0 20px",
                  fontSize: 16,
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,.75)",
                  maxWidth: 560,
                }}
              >
                A non-transferable credential designed to recognize learning, readiness,
                and defined program milestones within the Eluvial ecosystem. Each ELUV
                token represents something that was earned through verified action — it
                can never be bought, sold, or transferred.
              </p>
              <ul
                style={{
                  margin: "0 0 24px",
                  padding: 0,
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {ELUV_NOTES.map((note) => (
                  <li
                    key={note}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                      fontSize: 14.5,
                      lineHeight: 1.6,
                      color: "rgba(255,255,255,.7)",
                    }}
                  >
                    <span style={{ color: "var(--teal)", flexShrink: 0, marginTop: 2 }}>
                      ✓
                    </span>
                    {note}
                  </li>
                ))}
              </ul>
              <div
                className="disclaim"
                style={{
                  fontSize: 13,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,.45)",
                  maxWidth: 560,
                  borderColor: "rgba(255,255,255,.1)",
                }}
              >
                <strong style={{ color: "rgba(255,255,255,.7)" }}>
                  ELUV is not an investment.
                </strong>{" "}
                No purchase, exchange, staking, yield, appreciation, or financial claim
                is implied or offered. Soulbound: {ELUV.fungible}. {ELUV.howObtained}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Verified phone visual ─────────────────────────────────────────── */}
      <section className="section alt" id="s-readiness">
        <div className="wrap">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
              alignItems: "center",
            }}
            className="feature-row"
          >
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "10.5px",
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--teal)",
                  marginBottom: 10,
                }}
              >
                Readiness &amp; verified participation
              </span>
              <h2 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 14px" }}>
                Your verified track record, on-chain.
              </h2>
              <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "var(--ink2)" }}>
                The Readiness Tracker maps the milestones that make up readiness —
                knowledge, procurement, and participation — and shows what you have
                verified. Each completed milestone can mint one ELUV credential: a
                record of work that was actually done and checked, not self-reported.
              </p>
              <div className="store-line" style={{ marginTop: 22 }}>
                <Link className="btn btn-primary" href="/marketplace?tab=learn">
                  Explore learning products
                </Link>
                <Link className="btn btn-ghost" href="/whitepaper">
                  Read the whitepaper →
                </Link>
              </div>
            </div>
            <div style={{ borderRadius: 4, overflow: "hidden", background: "#041428" }}>
              <Image
                src="/img/readiness.png"
                alt="Readiness Tracker app showing verified milestone progress and ELUV credential status"
                width={600}
                height={400}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Token participation disclaimer ────────────────────────────────── */}
      <section className="section" id="s-disclaimer">
        <div className="wrap">
          <div className="disclaim" style={{ maxWidth: 780, fontSize: 13, lineHeight: 1.7 }}>
            <strong>Token participation is optional.</strong> Government and public-interest
            programs are token-free by default. COVI and ELUV are optional participation
            layers — they are not required to use ConstructFi products or Partner
            Solutions. No investment, earnings, yield, appreciation, revenue share,
            staking, purchase, exchange, or speculative claims are made about either
            token. COVI is a consumption token for ecosystem activity. ELUV is a
            soulbound credential earned through verified milestones.{" "}
            <Link href="/legal/risk" style={{ color: "inherit", textDecoration: "underline" }}>
              Read the risk disclosures →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
