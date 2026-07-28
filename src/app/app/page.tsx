import type { Metadata } from "next";
import Link from "next/link";
import { BobMark } from "@/components/jul16/coins";
import { IconApple, IconPlay } from "@/components/jul16/icons";
import { BobDemo } from "@/components/bob-demo";
import { TagChips } from "@/components/tag-chip";
import { StatusPill } from "@/components/status-pill";
import { getProduct } from "@/lib/products";
import { SITE } from "@/lib/site";

const BOB = getProduct("build-or-bust")!;

export const metadata: Metadata = {
  title: "Build or Bust — know in 60 seconds",
  description:
    "Build or Bust is ConstructFi's real-estate deal analyzer. Answer ~12 plain-English questions and get a BUILD / WORK THE DEAL / BUST verdict, the three numbers behind it, and the price where the deal works. Try the interactive prototype.",
  openGraph: {
    title: "Build or Bust — Know in 60 seconds, before you fall in love with it.",
    description:
      "A real-estate deal analyzer with a free 60-second verdict. Try the interactive prototype.",
    url: `${SITE.url}/app`,
    images: [{ url: "/img/readiness.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/app" },
};

const PILLARS = [
  {
    t: "The 60-second verdict",
    d: "Always free. BUILD means go, WORK THE DEAL means pursue with conditions, BUST means walk. You get an answer before you spend a weekend in a spreadsheet.",
  },
  {
    t: "Goal-first flow",
    d: "Start with what you are trying to do — Hold, Sell, or Hold after building value — then set your bar. Newer and Experienced presets fill in cash-on-cash %, DSCR, and $/unit targets.",
  },
  {
    t: "Three numbers + solved price",
    d: "The verdict shows the three numbers that actually drove it, and the price at which the deal would work. No black box.",
  },
  {
    t: "Depth runs on COVI",
    d: "Sensitivity tables, exports, and deal packaging use COVI, which you earn in-app through the Academy. COVI is a utility token for platform activity — not an investment.",
  },
  {
    t: "Milestones mint ELUV",
    d: "Verified progress can mint ELUV, an ERC-5192 soulbound credential. Earned only, never sold, never transferable.",
  },
];

const VERDICTS = [
  {
    word: "BUILD",
    color: "var(--green)",
    d: "Clears your gates with room to spare. Go get it — after you verify every number.",
  },
  {
    word: "WORK THE DEAL",
    color: "var(--gold)",
    d: "Close, but conditional. The app shows which lever to pull and what price makes it work.",
  },
  {
    word: "BUST",
    color: "var(--red)",
    d: "Does not clear the bar you set, and the gap is not fixable at a sane price. Move on.",
  },
];

const DEMO_STEPS = [
  "Tap “Screen a deal” to start, then set the bar you want the deal to clear.",
  "Pick your goal — Hold, Sell, or Hold after building value.",
  "Answer about twelve plain-English questions about the property.",
  "Read the verdict: the call, the three numbers behind it, and the solved price.",
];

export default function AppPage() {
  return (
    <>
      <header className="section" style={{ borderTop: "none", paddingBottom: 48 }}>
        <div className="wrap">
          <div className="app-show">
            <div>
              <div
                style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 18 }}
              >
                <BobMark className="lg" />
                <div>
                  <span className="eyebrow" style={{ marginBottom: 4 }}>
                    Apps · Flagship
                  </span>
                  <h1 style={{ fontSize: 40, fontWeight: 800, margin: 0 }}>
                    <span style={{ color: "var(--green)" }}>Build</span>{" "}
                    <span style={{ color: "var(--ink3)" }}>or</span>{" "}
                    <span style={{ color: "var(--red)" }}>Bust</span>
                  </h1>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 24,
                  color: "var(--ink)",
                  marginBottom: 14,
                  maxWidth: 520,
                }}
              >
                Know in 60 seconds, before you fall in love with it.
              </p>
              <p style={{ fontSize: "16.5px", color: "var(--ink2)", maxWidth: 540 }}>
                A real-estate deal analyzer. Answer about twelve plain-English questions
                and get a <b>BUILD</b>, <b>WORK THE DEAL</b>, or <b>BUST</b> verdict —
                plus the three numbers that drove it and the price where the deal works.
                The verdict is always free.
              </p>
              <div className="pd-meta" style={{ marginTop: 18 }}>
                <StatusPill status={BOB.status} />
              </div>
              <TagChips tags={BOB.tags} />
              <div className="store-line">
                <Link className="btn btn-primary" href="#demo">
                  Try the interactive demo
                </Link>
                <Link className="btn btn-ghost" href="/marketplace/build-or-bust">
                  Product details →
                </Link>
              </div>
              <p
                style={{
                  color: "var(--ink)",
                  fontWeight: 600,
                  fontSize: 15,
                  marginTop: 26,
                  marginBottom: 0,
                }}
              >
                Coming to the Apple App Store and Google Play.
              </p>
              <div className="store-line" style={{ marginTop: 12 }}>
                <div className="store-badge" role="img" aria-label="Apple App Store — coming soon">
                  <IconApple width={20} height={20} />
                  <div>
                    <div className="sb-s">Coming soon to the</div>
                    <div className="sb-b">Apple App Store</div>
                  </div>
                </div>
                <div className="store-badge" role="img" aria-label="Google Play — coming soon">
                  <IconPlay width={18} height={20} />
                  <div>
                    <div className="sb-s">Coming soon on</div>
                    <div className="sb-b">Google Play</div>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: "12.5px", color: "var(--ink3)", marginTop: 10 }}>
                Store listings go live at release on {SITE.launchDate}. The badges above
                are labels, not links.
              </p>
            </div>
            <div className="phone-float">
              <div className="demo-phone" style={{ width: 340 }}>
                <iframe
                  src="/demos/build-or-bust.html"
                  title="Build or Bust prototype preview — demonstration data"
                  style={{ height: 680 }}
                  data-testid="demo-iframe-hero"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section dkband" id="demo">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Try it</span>
            <h2>Screen a deal right now</h2>
            <p>
              This is the real prototype, running in the frame below. Nothing is sent
              anywhere and no sign-in is required — every figure is demonstration data.
            </p>
          </div>
          <BobDemo>
            <div>
              <h3 style={{ fontSize: 20, marginBottom: 10 }}>How the flow works</h3>
              <ol className="demo-steps">
                {DEMO_STEPS.map((s, i) => (
                  <li key={s}>
                    <span className="ds-n">{String(i + 1).padStart(2, "0")}</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
              <div className="disclaim" style={{ marginTop: 26 }}>
                <b>This is an educational screening tool.</b> The Deal Score is an
                estimate built from your own inputs and targets — not investment,
                lending, or legal advice. Verify every number before you make an offer.
              </div>
            </div>
          </BobDemo>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">What you get</span>
            <h2>Five things the app actually does</h2>
            <p>
              Build or Bust is a screening tool, not a crystal ball. It tells you
              quickly whether a deal deserves more of your time.
            </p>
          </div>
          <div className="layers">
            {PILLARS.map((p) => (
              <div className="layer" key={p.t}>
                <div className="l-t">{p.t}</div>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">The verdict</span>
            <h2>Three possible answers</h2>
            <p>
              Every screen ends in one of three calls, with the reasoning shown rather
              than hidden.
            </p>
          </div>
          <div className="grid3">
            {VERDICTS.map((v) => (
              <div className="card" key={v.word}>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: 22,
                    letterSpacing: ".03em",
                    color: v.color,
                    marginBottom: 8,
                  }}
                >
                  {v.word}
                </h3>
                <p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="cta-band">
            <h2>See the rest of the store</h2>
            <p>
              Build or Bust is the flagship, not the whole platform. Apps, games,
              materials, and collectibles all live in the marketplace.
            </p>
            <div
              className="store-line"
              style={{ justifyContent: "center", marginTop: 0 }}
            >
              <Link className="btn btn-primary" href="/marketplace">
                Browse the app store
              </Link>
              <Link className="btn btn-ghost" href="/getting-started">
                How to start →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
