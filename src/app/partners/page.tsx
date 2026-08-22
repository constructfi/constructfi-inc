import type { Metadata } from "next";
import Link from "next/link";
import { SITE, MARKETS } from "@/lib/site";
import { WP_CHAPTERS } from "@/lib/whitepaper";

const ch9 = WP_CHAPTERS[8];
const ch9Lead = (ch9.blocks[0] as { type: "p"; text: string }).text;
const ch9Table = ch9.blocks[1] as { type: "table"; headers: string[]; rows: string[][] };

export const metadata: Metadata = {
  title: "Partner Solutions",
  description:
    "ConstructFi partners with nonprofits, public agencies, educational institutions, industry organizations, and private enterprises to build and operate digital programs on shared infrastructure.",
  openGraph: {
    title: "Build a digital platform around your mission",
    description:
      "Partner Solutions for nonprofits, agencies, institutions, suppliers, owners, and private organizations.",
    url: `${SITE.url}/partners`,
  },
  alternates: { canonical: "/partners" },
};

const PHASES = [
  {
    n: "01",
    duration: "Phase 1",
    title: "Discovery and fit",
    body: "We map the mission, the population you serve, the funding you answer to, and the outcomes that define success. If ConstructFi is the wrong vehicle, we say so here.",
    deliverable:
      "A written program brief: audience, outcomes, constraints, and a go or no-go recommendation.",
    needs:
      "Program goals, funding context, and the people who will own the program internally.",
  },
  {
    n: "02",
    duration: "Phase 2",
    title: "Program and eligibility design",
    body: "We turn program rules into something a system can apply: who qualifies, what counts as progress, what evidence a milestone requires, and who reviews it.",
    deliverable:
      "Eligibility criteria, milestone definitions, evidence standards, and the review workflow.",
    needs:
      "Grant terms or program policy, and the person who can approve eligibility decisions.",
  },
  {
    n: "03",
    duration: "Phase 3",
    title: "Compliance and data plan",
    body: "Before anything is built we agree what data is collected, why it is needed, how consent is captured, how long it is retained, and who can see it.",
    deliverable:
      "A data map, consent language, access roles, retention schedule, and reporting plan.",
    needs:
      "Your privacy, records, and procurement requirements — and counsel where you have one.",
  },
  {
    n: "04",
    duration: "Phase 4",
    title: "Build",
    body: "Your application is configured and built on the shared platform, carrying your brand first. Identity, reporting, integrations, and marketplace plumbing are inherited rather than rebuilt.",
    deliverable:
      "A working application on your brand, with administrator tooling and staged review builds.",
    needs: "Brand assets, curriculum or content, and reviewers for each staged build.",
  },
  {
    n: "05",
    duration: "Phase 5",
    title: "Launch and onboarding",
    body: "We take the program live, train your administrators, and stand behind the first cohort so intake and review problems surface while we are still in the room.",
    deliverable:
      "Launch, App Store or web release, administrator training, and first-cohort support.",
    needs: "A launch date, an internal owner, and the first cohort or vendor list.",
  },
  {
    n: "06",
    duration: "Ongoing",
    title: "Operate and maintain",
    body: "The platform is monitored, patched, and reported on. Program changes, new cohorts, and funder reporting cycles are handled as ordinary operations rather than new projects.",
    deliverable: "Maintenance, reporting cycles, and a standing roadmap review.",
    needs: "A named program contact and your reporting calendar.",
  },
] as const;

const FUNDING = [
  {
    n: "F-01",
    title: "Eligibility encoded, not remembered",
    body: "Program rules become system rules. Who qualifies, for what, and under which conditions is applied consistently at intake instead of interpreted case by case.",
    evidence: "Produces: a rule set you can show a funder before the first application.",
  },
  {
    n: "F-02",
    title: "Application intake with documentation",
    body: "Applications capture the fields and files the funding requires, flag what is missing, and hold the record together so nothing is chased by email later.",
    evidence: "Produces: complete application records with attached documentation.",
  },
  {
    n: "F-03",
    title: "Verification before recognition",
    body: "Progress is reviewed by an operator against the evidence standard set in Phase 2. Nothing is credited automatically and nothing is credited for payment.",
    evidence: "Produces: reviewer, date, and evidence behind every completed milestone.",
  },
  {
    n: "F-04",
    title: "An audit trail that survives staff turnover",
    body: "Every eligibility decision, review, and change is logged with who did it and when, so a program can be reconstructed a year later by someone who was not there.",
    evidence: "Produces: an exportable decision and activity log.",
  },
  {
    n: "F-05",
    title: "Funder-ready reporting",
    body: "Reporting reads from the same records participants and administrators work in, so numbers in a board deck trace back to the workflow that produced them.",
    evidence: "Produces: period reporting on participation, completion, and outcomes.",
  },
  {
    n: "F-06",
    title: "Your data, exportable",
    body: "Program data belongs to the partner, with export rights written into the agreement. Renewals and re-competes do not depend on our goodwill.",
    evidence: "Produces: full program data export on request.",
  },
] as const;

const JOURNEY = [
  {
    n: "J-01",
    title: "Consent first",
    body: "Participants are told what is collected and why, in plain language, before collection starts. Consent is recorded with the record it applies to.",
  },
  {
    n: "J-02",
    title: "Minimum necessary data",
    body: "Programs collect what the outcome and the funding actually require. Identity documents are handled by the verification process and are not stored in the program application.",
  },
  {
    n: "J-03",
    title: "Evidence, not surveillance",
    body: "Tracking captures the artifacts of progress — submissions, completions, procurement activity — rather than continuous behavioral monitoring of participants.",
  },
  {
    n: "J-04",
    title: "Reviewed milestones",
    body: "A milestone becomes a record only after an operator reviews the evidence against the standard. Disputes reopen the record rather than quietly overwriting it.",
  },
] as const;

const BUILD_SCOPE = [
  "Configuration and build of your application on the shared platform, your brand first",
  "Administrator tooling: intake queues, review, eligibility overrides, and reporting",
  "Integrations with the systems your program already runs on",
  "Web release plus Apple App Store and Google Play submission where the program calls for it",
  "Administrator training and first-cohort support through launch",
].map((text, i) => ({ n: String(i + 1).padStart(2, "0"), text }));

const MAINTENANCE = [
  "Platform updates and security patching across the shared services underneath your app",
  "Monitoring of integrations, with replay on failure and an audit trail",
  "Program changes between cohorts — new criteria, new milestones, new content",
  "Reporting cycles aligned to your funder and board calendar",
  "A standing roadmap review, so what the platform gains next reflects what partners need",
].map((text, i) => ({ n: String(i + 1).padStart(2, "0"), text }));

const PARTNER_TYPES = [
  {
    n: "01",
    type: "Nonprofits",
    value: "Deliver programs, resources, learning, engagement, and impact reporting in one place",
    example: "Workforce training, youth development, housing-resource, or member portal app",
  },
  {
    n: "02",
    type: "Government agencies",
    value: "Modernize public-facing services and connect residents, vendors, programs, and data",
    example: "Supplier-diversity portal, permitting hub, workforce pipeline, or economic-development marketplace",
  },
  {
    n: "03",
    type: "Schools and institutions",
    value: "Give students, members, and communities practical learning and opportunity tools",
    example: "Career-pathway app, construction academy, entrepreneurship portal, or alumni network",
  },
] as const;

const MODULAR = [
  {
    need: "Government program",
    approach:
      "No token layer by default; use standard profiles, eligibility, applications, progress tracking, or credentials.",
  },
  {
    need: "Nonprofit learning program",
    approach: "Non-transferable badges, progress credentials, and member recognition.",
  },
  {
    need: "Workforce initiative",
    approach: "Course completion, verified skills, employer pathways, and credentials.",
  },
  {
    need: "Private marketplace",
    approach: "Loyalty points, member tiers, access benefits, and potentially COVI only after review.",
  },
  {
    need: "Construction community",
    approach: "Eligible COVI participation programs, product access, events, and ecosystem experiences.",
  },
  {
    need: "Real estate education community",
    approach: "ELUV-based recognition, progress, access, and educational/community benefits.",
  },
] as const;

export default function PartnersPage() {
  return (
    <>
      <section className="ink-surface partner-hero">
        <div className="bg-grid-fine partner-hero-grid" aria-hidden />
        <div className="wrap partner-hero-wrap">
          <div className="partner-chip-row">
            {MARKETS.map((market) => (
              <span key={market} className="chip">
                {market}
              </span>
            ))}
          </div>
          <span className="eyebrow">Built for organizations that build impact</span>
          <h1 className="partner-hero-title">Build a digital platform around your mission.</h1>
          <p className="partner-hero-copy">
            ConstructFi partners with nonprofits, public agencies, educational institutions,
            industry organizations, and private enterprises to design and launch custom web and
            mobile applications — then operates and maintains them, so your program has a
            platform rather than a project.
          </p>
          <p className="partner-hero-kicker">
            Your mission. Your community. Your platform. Built on ConstructFi.
          </p>
          <div className="store-line">
            <Link className="btn btn-primary" href="/contact">
              Start a partner conversation
            </Link>
            <Link className="btn btn-ghost" href="/developers">
              Developers →
            </Link>
          </div>
          <div className="partner-chip-row">
            <span className="chip free">Web + mobile delivery</span>
            <span className="chip">Administrator tooling included</span>
            <span className="chip eluv">ELUV is optional and earned-only</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Audience routes</span>
            <h2>Three token-free starting points</h2>
            <p>
              Agencies, nonprofits, and institutions can launch programs on ConstructFi without
              forcing a wallet, token, or marketplace path into public-facing workflows.
            </p>
          </div>
          <div className="grid3">
            {PARTNER_TYPES.map((route) => (
              <div className="card route-card" key={route.type}>
                <div className="pr-n">{route.n}</div>
                <h3>{route.type}</h3>
                <p>{route.value}</p>
                <div className="route-card-note">{route.example}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dkband">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Participation surface</span>
            <h2>ELUV explains readiness without becoming the program.</h2>
            <p>
              ELUV is an earned-only credential layer for verified progress. Partner programs can
              use the shared participation rails, or keep the experience completely token-free.
            </p>
          </div>
          <div className="grid2 partner-surface-grid">
            <div className="tok eluv">
              <div className="t-name">ELUV</div>
              <div className="t-role">
                A non-transferable readiness record for verified milestones, issued only when a
                program actually needs that proof layer.
              </div>
              <table>
                <tbody>
                  <tr>
                    <td>Default for agencies</td>
                    <td>No token layer</td>
                  </tr>
                  <tr>
                    <td>Credential mode</td>
                    <td>Earned only</td>
                  </tr>
                  <tr>
                    <td>Transferability</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>Purpose</td>
                    <td>Readiness · access · proof</td>
                  </tr>
                </tbody>
              </table>
              <div className="t-foot">
                Public agencies, nonprofits, and institutions can use standard accounts,
                eligibility, applications, and reporting without ever exposing participants to a
                tokenized experience.
              </div>
            </div>
            <div className="card">
              <h3 style={{ fontSize: 20, marginBottom: 14 }}>
                How the participation layer stays compliant
              </h3>
              <div className="arch-list" style={{ gridTemplateColumns: "1fr", marginBottom: 0 }}>
                {JOURNEY.map((item) => (
                  <div className="arch-item" key={item.n}>
                    <span className="tick">{item.n}</span>
                    <span>{item.body}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="seg-grid">
            {MODULAR.map((item) => (
              <div className="card" key={item.need}>
                <h3>{item.need}</h3>
                <p>{item.approach}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Building programs</span>
            <h2>How a partner program gets built</h2>
            <p>
              Six phases from first conversation to a platform in service. Every phase ends with
              something a program owner can review and approve.
            </p>
          </div>
          <div className="steps">
            {PHASES.map((phase) => (
              <div className="step" key={phase.n}>
                <div className="pr-n">{phase.duration}</div>
                <h3>{phase.title}</h3>
                <p>{phase.body}</p>
                <p style={{ marginTop: 12 }}>
                  <b style={{ color: "var(--ink)" }}>Deliverable:</b> {phase.deliverable}
                </p>
                <p style={{ marginTop: 10, color: "var(--green)" }}>{phase.needs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Funding eligibility and accountability</span>
            <h2>Built so the program stays fundable</h2>
            <p>
              Most programs do not lose funding because the work did not happen. They lose it
              because the work could not be evidenced.
            </p>
          </div>
          <div className="grid3">
            {FUNDING.map((item) => (
              <div className="card" key={item.n}>
                <div className="pr-n">{item.n}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <p className="route-card-note">{item.evidence}</p>
              </div>
            ))}
          </div>
          <div className="card" style={{ marginTop: 30 }}>
            <div className="pr-n">Mapped to funder frameworks</div>
            <p style={{ marginBottom: 18 }}>{ch9Lead}</p>
            <div className="arch-list" style={{ gridTemplateColumns: "1fr" }}>
              {ch9Table.rows.map(([name, mapping]) => (
                <div className="arch-item" key={name}>
                  <span className="tick">{name}</span>
                  <span>{mapping}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section dkband">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Build and maintenance</span>
            <h2>The platform after launch day</h2>
            <p>
              Launch is the beginning of the obligation, not the end of it. Applications built on
              ConstructFi inherit shared services, reporting, and maintenance underneath your
              program.
            </p>
          </div>
          <div className="grid2">
            <div className="card">
              <div className="pr-n">Included in the build</div>
              <ul className="pd-feats">
                {BUILD_SCOPE.map((item) => (
                  <li key={item.n}>{item.text}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <div className="pr-n">Ongoing operation</div>
              <ul className="pd-feats">
                {MAINTENANCE.map((item) => (
                  <li key={item.n}>{item.text}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="cta-band" style={{ marginTop: 30 }}>
            <h2>Operate with your brand first.</h2>
            <p>
              Partners retain ownership of their brand, curriculum, and program data, with export
              rights defined in the agreement.
            </p>
            <div className="store-line" style={{ justifyContent: "center" }}>
              <Link className="btn btn-primary" href="/contact">
                Start a partner conversation
              </Link>
              <Link className="btn btn-ghost" href="/whitepaper">
                Read the whitepaper →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
