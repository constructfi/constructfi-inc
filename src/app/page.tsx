import Link from "next/link";
import { SubNav } from "@/components/jul16/subnav";
import { CoviCoin, EluvCoin, BobMark } from "@/components/jul16/coins";
import { PhoneMarketplace, PhoneDashboard, PhoneWallet } from "@/components/jul16/phone";
import {
  IconApple,
  IconGrid,
  IconPen,
  IconPhone,
  IconPlay,
  IconStar,
  IconTarget,
} from "@/components/jul16/icons";
import { LaunchStatusStrip } from "@/components/launch-status-strip";
import { ProductCard, FeaturedProductCard } from "@/components/product-card";
import { WalletConnect } from "@/components/wallet-connect";
import { STEPS } from "@/app/getting-started/page";
import { FEATURED_PRODUCT, PRODUCTS } from "@/lib/products";
import { COVI, ELUV, APP_URL, APP_URL_EXTERNAL } from "@/lib/site";

// The homepage teases three products next to the flagship; the store has the rest.
const HOME_PRODUCTS = PRODUCTS.filter((p) =>
  ["supplier-marketplace", "covi-wallet", "collectibles"].includes(p.slug)
);

/** "Build or Bust" wordmark — green / muted / red, per the Jul 16 design. */
function BobWord() {
  return (
    <>
      <span style={{ color: "var(--green)" }}>Build</span>{" "}
      <span style={{ color: "var(--ink3)" }}>or</span>{" "}
      <span style={{ color: "var(--red)" }}>Bust</span>
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <SubNav />

      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Platform launches September 9, 2026</span>
            <h1>
              From participation
              <br />
              to <em>ownership.</em>
            </h1>
            <p className="lede">
              ConstructFi is an app store for real-estate and construction work — screen a
              deal, price a job, and build a verified track record in one place.
            </p>
            <p className="lede-sub">
              The work you actually complete earns COVI, a utility token you spend on platform
              features, and mints ELUV, a soulbound credential that can only be earned — never
              bought, sold, or transferred.
            </p>
            <div className="hero-ctas">
              <Link
                className="btn btn-primary"
                href={APP_URL}
                data-testid="button-hero-launch"
                {...(APP_URL_EXTERNAL ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                Launch app
              </Link>
              <Link className="btn btn-ghost" href="/whitepaper">
                Read the whitepaper
              </Link>
            </div>
            <div className="router" aria-label="Choose your path">
              <Link href="/marketplace">
                <span className="r-k">Individuals</span>
                <span className="r-v">Start earning →</span>
              </Link>
              <Link href="/marketplace">
                <span className="r-k">Suppliers &amp; contractors</span>
                <span className="r-v">Join the marketplace →</span>
              </Link>
              <Link href="/resources">
                <span className="r-k">Institutions</span>
                <span className="r-v">Run readiness programs →</span>
              </Link>
            </div>
          </div>
          <div className="hero-shot phone-float">
            <PhoneMarketplace />
          </div>
        </div>
      </header>

      <section className="section alt" id="s-primer">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">New here? Start with these four</span>
            <h2>ConstructFi in ninety seconds</h2>
            <p>
              A plain-English orientation before the detail: what this is, what you can
              actually use, how the two tokens differ, and where to begin.
            </p>
          </div>
          <div className="primer">
            <div className="pr">
              <div className="pr-n">01 · WHAT IT IS</div>
              <div className="pr-t">A platform built on real operations</div>
              <p className="pr-d">
                ConstructFi runs on top of two operating businesses — $60M+ of development
                activity and ~$7M/year of supply operations across six markets. The
                platform turns that real commerce into participation anyone can join.
              </p>
            </div>
            <div className="pr">
              <div className="pr-n">02 · THE PRODUCTS</div>
              <div className="pr-t">One app store, {PRODUCTS.length} products</div>
              <p className="pr-d">
                Apps, games, materials, and collectibles all live in the marketplace.
                Build or Bust — a real-estate deal analyzer with a free 60-second verdict
                — is the flagship, and you can try it right now.
              </p>
            </div>
            <div className="pr">
              <div className="pr-n">03 · THE TWO TOKENS</div>
              <div className="pr-t">COVI moves. ELUV proves.</div>
              <p className="pr-d">
                COVI is the utility token you earn and spend on platform features — not an
                investment. ELUV is a soulbound credential minted by verified milestones:
                earned only, never sold, never transferable.
              </p>
            </div>
            <div className="pr">
              <div className="pr-n">04 · HOW TO START</div>
              <div className="pr-t">Try the demo, then connect a wallet</div>
              <p className="pr-d">
                Screening a deal costs nothing and needs no account. When you are ready,
                the getting-started guide covers wallet setup on Base and how your first
                milestone gets minted.
              </p>
            </div>
          </div>
          <div className="store-line">
            <Link className="btn btn-primary" href="/app#demo">
              Try Build or Bust
            </Link>
            <Link className="btn btn-ghost" href="/marketplace">
              Browse the app store →
            </Link>
            <Link className="btn btn-ghost" href="/getting-started">
              Getting started
            </Link>
          </div>
        </div>
      </section>

      <section className="section" id="s-status">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Current state</span>
            <h2>Where things stand</h2>
            <p>
              What you can use right now, what opens at launch, and what stays gated
              behind an independent audit.
            </p>
          </div>
          <LaunchStatusStrip />
        </div>
      </section>

      <section className="section dkband" id="s-how">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>How ConstructFi works</h2>
            <p>
              Five connected layers turn everyday construction and real-estate activity into
              a record you own — coordinated end to end by COVI and ELUV.
            </p>
          </div>
          <div className="layers">
            <div className="layer">
              <div className="ic">
                <IconTarget width={18} height={18} />
              </div>
              <div className="l-t">Participate</div>
              <p>Join as a verified member and take part in real economic activity.</p>
            </div>
            <div className="layer">
              <div className="ic">
                <IconGrid width={18} height={18} />
              </div>
              <div className="l-t">Transact</div>
              <p>Procure materials and services from a vetted supplier network.</p>
            </div>
            <div className="layer">
              <div className="ic">
                <IconStar width={18} height={18} />
              </div>
              <div className="l-t">Earn</div>
              <p>Contribution earns COVI, the utility token you spend on platform features.</p>
            </div>
            <div className="layer">
              <div className="ic">
                <IconPen width={18} height={18} />
              </div>
              <div className="l-t">Build readiness</div>
              <p>Learning and verified milestones mint your soulbound ELUV record.</p>
            </div>
            <div className="layer">
              <div className="ic">
                <IconPhone width={18} height={18} />
              </div>
              <div className="l-t">Access</div>
              <p>Readiness opens entry to verified opportunities across the ecosystem.</p>
            </div>
          </div>
          <div className="arch-list" style={{ marginTop: 30, marginBottom: 0 }}>
            {[
              "Non-custodial throughout — Reown, WalletConnect, or MetaMask; your keys never leave your control",
              "Transparent rules — rewards and eligibility are on-chain, visible, and verifiable",
              "Measurable pathways — every milestone is earned, auditable, and yours to keep",
              "Built for the long term — responsible development and community-aligned growth",
            ].map((t) => (
              <div className="arch-item" key={t}>
                <span className="tick">✓</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="s-app">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">The app</span>
            <h2>See ConstructFi in action</h2>
            <p>
              One app to participate, build readiness, transact in the marketplace, and earn — all
              coordinated by COVI and ELUV.
            </p>
          </div>
          <div className="app-show">
            <div className="phone-float">
              <PhoneDashboard />
            </div>
            <div>
              <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
                <BobMark />
                <div>
                  <div
                    style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20 }}
                  >
                    <BobWord />
                  </div>
                  <div style={{ fontSize: 13, color: "var(--ink3)" }}>
                    The platform&apos;s first mobile app — real-estate deal screening
                  </div>
                </div>
              </div>
              <p style={{ color: "var(--ink2)", fontSize: "15.5px", marginBottom: 6 }}>
                Answer a few questions about a property and get a clear verdict — with the numbers,
                the gates it cleared, and a financing readiness read. Every completed analysis
                earns COVI and builds your soulbound ELUV record.
              </p>
              <p style={{ color: "var(--ink)", fontWeight: 600, fontSize: 15, marginTop: 12 }}>
                Coming to the Apple App Store and Google Play.
              </p>
              <div className="store-line">
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
                <Link className="btn btn-ghost" href="/app">
                  Explore the app →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt" id="s-market">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">The app store</span>
            <h2>One marketplace. Many products.</h2>
            <p>
              The marketplace is the ConstructFi app store — apps, games, materials, and
              collectibles in one place. Eligible activity earns COVI, and a share of
              marketplace fees funds the rewards loop.
            </p>
          </div>
          <div className="store-layout">
            <div className="store-main">
              <FeaturedProductCard product={FEATURED_PRODUCT} />
              <div className="apps-row store-grid" style={{ marginTop: 18 }}>
                {HOME_PRODUCTS.map((p) => (
                  <ProductCard key={p.slug} product={p} eagerImage />
                ))}
              </div>
              <div className="store-line">
                <Link className="btn btn-primary" href="/marketplace">
                  Browse the app store
                </Link>
                <span style={{ fontSize: "13px", color: "var(--ink3)" }}>
                  {PRODUCTS.length} products · apps, games, materials &amp; collectibles
                </span>
              </div>
            </div>
            <aside className="store-side">
              <PhoneWallet />
              <div className="side-cap">
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "14.5px",
                  }}
                >
                  Covi Wallet
                </div>
                <p style={{ fontSize: "12.5px", color: "var(--ink3)", marginTop: 3 }}>
                  COVI &amp; ELUV side by side — non-custodial, your keys always. Illustrative
                  screen; no balances shown.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section dkband" id="s-tokens">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Tokenomics</span>
            <h2>Two tokens. Two clear roles.</h2>
            <p>
              ConstructFi deliberately separates transaction infrastructure from progression
              infrastructure.
            </p>
          </div>
          <p
            className="motto"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            <CoviCoin />
            <span className="m1">COVI moves.</span>
            <span style={{ width: 10 }} />
            <EluvCoin />
            <span className="m2">ELUV proves.</span>
          </p>
          <div className="tok-grid">
            <div className="tok covi">
              <div
                style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}
              >
                <div className="t-name" style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <CoviCoin />
                  COVI
                </div>
                <span className="chip">Utility token</span>
              </div>
              <div className="t-role">
                The commerce &amp; rewards layer — earned through participation and learning, spent
                across gaming, NFTs, partner programs, and developer fees.
              </div>
              <div
                style={{
                  marginTop: 10,
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: ".02em",
                  color: "rgba(255,255,255,.72)",
                }}
              >
                {`${COVI.standard} · ${COVI.chain} · ${COVI.supplyNote.toLowerCase()} ${COVI.supply}`}
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>Fixed supply</td>
                    <td>{COVI.supply}</td>
                  </tr>
                  <tr>
                    <td>Standard</td>
                    <td>{COVI.standard}</td>
                  </tr>
                  <tr>
                    <td>How you get it</td>
                    <td>{COVI.howObtained}</td>
                  </tr>
                  <tr>
                    <td>Largest allocation</td>
                    <td>{COVI.largestAllocation}</td>
                  </tr>
                  <tr>
                    <td>Reward funding</td>
                    <td>{COVI.rewardFunding}</td>
                  </tr>
                </tbody>
              </table>
              <div className="t-foot">
                COVI is a consumption token for ecosystem activity — not an investment. Any sale
                will be conducted under a compliant exemption with KYC/AML screening.
              </div>
            </div>
            <div className="tok eluv">
              <div
                style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}
              >
                <div className="t-name" style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <EluvCoin />
                  ELUV
                </div>
                <span className="chip earned">Earned only — never sold</span>
              </div>
              <div className="t-role">
                The soulbound readiness &amp; governance credential — minted against verified
                milestones. It cannot be bought, transferred, or traded.
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>Supply</td>
                    <td>{ELUV.supply}</td>
                  </tr>
                  <tr>
                    <td>Standard</td>
                    <td>{ELUV.standard}</td>
                  </tr>
                  <tr>
                    <td>How you get it</td>
                    <td>Earned through verified progression</td>
                  </tr>
                  <tr>
                    <td>Issuance</td>
                    <td>{ELUV.supplyNote}</td>
                  </tr>
                  <tr>
                    <td>What it does</td>
                    <td>{ELUV.whatItDoes}</td>
                  </tr>
                </tbody>
              </table>
              <div className="t-foot">
                Because ELUV can&apos;t be sold, readiness and governance can&apos;t be bought or
                Sybil-farmed. Your record can only be earned.
              </div>
            </div>
          </div>
          <div style={{ marginTop: 80, maxWidth: 980 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                borderBottom: "1px solid rgba(222,230,238,.18)",
                paddingBottom: 10,
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 600, color: "var(--mint)" }}>02</span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: ".18em",
                  color: "rgba(255,255,255,.58)",
                }}
              >
                Wallets
              </span>
            </div>
            <h3
              style={{
                margin: "24px 0 0",
                fontSize: "clamp(28px,3vw,38px)",
                fontWeight: 700,
                letterSpacing: "-.03em",
                lineHeight: 1.08,
                color: "#fff",
              }}
            >
              Non-custodial by default
            </h3>
            <p
              style={{
                margin: "16px 0 0",
                maxWidth: "70ch",
                fontSize: "16.5px",
                lineHeight: 1.65,
                color: "rgba(255,255,255,.72)",
              }}
            >
              COVI and ELUV live in a wallet you control — MetaMask and WalletConnect on Base.
              ConstructFi never holds keys or funds.
            </p>
            <WalletConnect className="mt-6" size="default" disconnectedLabel="Wallet" />
            <div style={{ marginTop: 36, borderTop: "1px solid rgba(222,230,238,.18)" }}>
              {STEPS.map((step) => (
                <div
                  key={step.n}
                  className="grid gap-4 border-b border-white/10 py-5 md:grid-cols-[56px_minmax(200px,1fr)_minmax(260px,1.6fr)] md:gap-6"
                >
                  <span style={{ fontSize: 11, fontWeight: 600, color: "var(--mint)" }}>
                    {step.n}
                  </span>
                  <span style={{ fontSize: 16.5, fontWeight: 600, letterSpacing: "-.012em" }}>
                    {step.title}
                  </span>
                  <span style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,.72)" }}>
                    {step.body}
                  </span>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: 28,
                border: "1px solid rgba(222,230,238,.18)",
                padding: 24,
                maxWidth: 900,
                background: "rgba(255,255,255,.04)",
              }}
            >
              <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: "rgba(255,255,255,.72)" }}>
                Contract addresses publish only after audit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="s-build">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Build on ConstructFi</span>
            <h2>
              Your brand. Your content. Your users.
              <br />
              Powered and maintained by ConstructFi.
            </h2>
            <p>
              We build educational apps for nonprofits, banks, and institutional &amp; public
              partners on shared platform infrastructure — so every partner app launches with
              rewards, readiness, and reporting already wired in.
            </p>
          </div>
          <div className="own-stack" aria-label="Who owns what">
            <div className="own-layer yours">
              <span className="ol-who">Yours — guaranteed</span>
              <span className="ol-what">
                <b>Your app layer:</b> brand, curriculum &amp; content, user relationships, and
                program data — with a perpetual license to your app instance, full data-export
                rights, and source-code escrow available for regulated partners.
              </span>
              <span className="chip earned">Partner-owned</span>
            </div>
            <div className="own-layer ours">
              <span className="ol-who">Ours — so it compounds</span>
              <span className="ol-what">
                <b>The platform engine:</b> rewards rails, readiness engine, wallets, templates,
                and hosting — continuously maintained, audited, and improved by ConstructFi across
                every partner app at once.
              </span>
              <span className="chip live">Maintained for you</span>
            </div>
            <div className="own-layer">
              <span className="ol-who" style={{ color: "var(--blue)" }}>
                Shared — the flywheel
              </span>
              <span className="ol-what">
                <b>Your users&apos; progress:</b> participation in your app earns COVI and mints
                soulbound ELUV milestones — a portable readiness record your programs can report
                on, audit, and build eligibility around.
              </span>
              <span className="chip soon">COVI + ELUV</span>
            </div>
          </div>
          <div className="seg-grid">
            <div className="card">
              <h3>Nonprofits</h3>
              <p>
                Deliver readiness and financial-literacy programs with measurable, auditable
                outcomes — completion rates, milestone progression, and impact reporting built for
                funders.
              </p>
            </div>
            <div className="card">
              <h3>Banking &amp; financial institutions</h3>
              <p>
                Branded financial-education apps with engagement your CRA and community teams can
                actually measure. Educational only — non-lending positioning throughout.
              </p>
            </div>
            <div className="card">
              <h3>Institutional &amp; public partners</h3>
              <p>
                Workforce, housing-readiness, and resident-engagement tools for agencies and
                municipalities — eligibility credentials without re-verifying participants from
                scratch.
              </p>
            </div>
          </div>
          <div className="flow-line">
            <span>How engagements work:</span>
            <b>Build</b>
            <span className="fx">→ scoped build of your app layer</span>
            <b>Run</b>
            <span className="fx">→ platform &amp; maintenance subscription</span>
            <b>Grow</b>
            <span className="fx">
              → your users participate, earn, and progress across the ecosystem
            </span>
          </div>
          <div style={{ marginTop: 26, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn btn-primary" href="/partners">
              Start a partner conversation
            </Link>
            <Link className="btn btn-ghost" href="/resources">
              Institutional overview →
            </Link>
          </div>
        </div>
      </section>

      <section className="section alt" id="s-founder">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Operating foundation</span>
            <h2>Built on real operations</h2>
            <p>
              ConstructFi launches on top of two operating businesses — real transactions, real
              counterparties, real fee revenue — founded and led by Dabrielle Goodwin, a licensed
              real-estate broker in Washington, DC since 2014.
            </p>
          </div>
          <div className="grid2">
            <div className="card">
              <h3>Eluvial Enterprise Inc. — housing &amp; development</h3>
              <p>
                Real-estate development, housing, sustainability, and ownership infrastructure —{" "}
                <b className="mono" style={{ color: "var(--green)" }}>
                  $60M+
                </b>{" "}
                in supported development activity across multiple regional markets.
              </p>
            </div>
            <div className="card">
              <h3>Covington Supply Co. — procurement &amp; materials</h3>
              <p>
                Procurement, logistics, and materials sourcing supporting{" "}
                <b className="mono" style={{ color: "var(--green)" }}>
                  ~$7M
                </b>{" "}
                in annual supply operations across the DMV, North Carolina, Florida, and Missouri.
              </p>
            </div>
          </div>
          <div className="cred-row">
            <span className="chip">Licensed · Owner&apos;s representation</span>
            <span className="chip">LEED · Certified sustainability</span>
            <span className="chip">Multi-state · Operating footprint</span>
            <span className="chip">Web3 · On-chain infrastructure</span>
          </div>
          <div className="stat-band cols3" style={{ marginTop: 30 }}>
            {[
              { v: "$60M+", k: "Development activity supported" },
              { v: "~$7M", k: "Annual supply operations" },
              { v: "$2.1M+", k: "Sustainable materials" },
              { v: "8", k: "Ecosystem verticals" },
              { v: "6 markets", k: "DC · VA · MD · NC · FL · MO footprint" },
              { v: "2014", k: "Licensed broker, Washington DC" },
            ].map((s) => (
              <div className="sb" key={s.k}>
                <div className="sb-v">{s.v}</div>
                <div className="sb-k">{s.k}</div>
              </div>
            ))}
          </div>
          <div className="team-row" aria-label="Team">
            {[
              { i: "DG", n: "Dabrielle Goodwin", r: "Founder" },
              { i: "TR", n: "Terry Riley", r: "Board of Directors" },
              { i: "AS", n: "Anwar Saleem", r: "Board of Directors" },
              { i: "EW", n: "Ernest Williams", r: "Board of Directors" },
            ].map((m) => (
              <div className="tm" key={m.n}>
                <span className="av">{m.i}</span>
                <div>
                  <div className="tn">{m.n}</div>
                  <div style={{ fontSize: "11.5px", color: "var(--ink3)" }}>{m.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dkband" id="s-roadmap">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Roadmap</span>
            <h2>Ecosystem evolution roadmap</h2>
            <p>
              Sequenced by capability milestone; timing is subject to development, partnerships,
              and regulatory readiness.
            </p>
          </div>
          <div className="road5">
            {[
              {
                chip: "In build",
                cls: "chip live",
                t: "Build the foundation",
                d: "Establish the core protocol, verification, and wallet — plus the marketplace and readiness track.",
              },
              {
                chip: "In progress",
                cls: "chip live",
                t: "Expand partnerships",
                d: "Expand through strategic partnerships and institutional participation — nonprofit, banking, and public programs.",
              },
              {
                chip: "Next",
                cls: "chip soon",
                t: "Automate coordination",
                d: "Introduce intelligence, automation, and cross-platform coordination.",
              },
              {
                chip: "Planned",
                cls: "chip",
                t: "Scale financial tools",
                d: "Build financial rails, liquidity layers, and sustainable incentive models — compliance-reviewed and deliberately sequenced.",
              },
              {
                chip: "Future",
                cls: "chip",
                t: "Global growth",
                d: "Scale globally with localized systems, interoperability, and mass participation.",
              },
            ].map((r) => (
              <div className="card" key={r.t}>
                <span className={r.cls}>{r.chip}</span>
                <h3 style={{ marginTop: 14, fontSize: "15.5px" }}>{r.t}</h3>
                <p style={{ fontSize: 13 }}>{r.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="s-trust">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Trust layer</span>
            <h2>Building trust into every transaction</h2>
          </div>
          <div className="grid3">
            {[
              {
                t: "Non-custodial participation",
                d: "Assets and permissions stay under user-controlled keys at all times.",
              },
              {
                t: "Transparent incentives",
                d: "Rewards and rules are on-chain, visible, and verifiable.",
              },
              {
                t: "User-controlled systems",
                d: "Self-sovereign, wallet-controlled access across every layer.",
              },
              {
                t: "Risk-aware participation",
                d: "Guardrails and clear disclosures protect participants.",
              },
              {
                t: "Audit-focused architecture",
                d: "OpenZeppelin-based contracts and independent audits before launch; verified addresses published after audit — not before.",
              },
              {
                t: "Compliance-aware development",
                d: "Built with regulatory alignment as a first-class requirement — KYC/AML on any sale, lockups, utility-first positioning.",
              },
            ].map((c) => (
              <div className="card" key={c.t}>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="cta-band">
            <h2>Own a share of what you help build.</h2>
            <p>Connect a wallet to start participating, or read the whitepaper first.</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link
                className="btn btn-primary"
                href={APP_URL}
                {...(APP_URL_EXTERNAL ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                Launch app
              </Link>
              <Link className="btn btn-ghost" href="/whitepaper">
                Read the whitepaper
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
