import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
  {
    n: "J-05",
    title: "Tenant isolation",
    body: "Your program's data is partitioned. Analytics and AI context never answer another organization's question with your participants' information.",
  },
  {
    n: "J-06",
    title: "Role-based access and logging",
    body: "Administrators see only what their role requires, and access is logged. Public-facing recognition discloses only what the credential itself is meant to say.",
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
  {
    n: "04",
    type: "Developers and owners",
    value: "Improve stakeholder communication, sourcing, project engagement, and community access",
    example: "Development opportunity portal, subcontractor network, leasing, or resident engagement app",
  },
  {
    n: "05",
    type: "Suppliers and manufacturers",
    value: "Create digital sales, education, distributor, product, and loyalty experiences",
    example: "Product catalog, contractor-training app, dealer portal, or sourcing platform",
  },
  {
    n: "06",
    type: "Private organizations",
    value: "Turn specialized workflows, communities, and services into scalable products",
    example: "Branded marketplace, member platform, operational portal, or vertical SaaS application",
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
      <section className="ink-surface relative overflow-hidden py-20 text-white">
        <div className="bg-grid-fine absolute inset-0 opacity-25" aria-hidden />
        <div className="wrap relative">
          <div className="flex flex-wrap gap-2">
            {MARKETS.map((market) => (
              <span
                key={market}
                className="rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-sm font-medium text-white/80"
              >
                {market}
              </span>
            ))}
          </div>
          <div className="mt-6 border-b border-white/15 pb-2">
            <span className="eyebrow text-mint">
              Built for organizations that build impact
            </span>
          </div>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight sm:text-[3.35rem]">
            Build a digital platform around your mission.
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-white/70">
            ConstructFi partners with nonprofits, public agencies, educational
            institutions, industry organizations, and private enterprises to
            design and launch custom web and mobile applications — then
            operates and maintains them, so your program has a platform rather
            than a project.
          </p>
          <p className="mt-6 max-w-2xl text-2xl font-medium tracking-[-0.015em] text-mint">
            Your mission. Your community. Your platform. Built on ConstructFi.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="max-w-4xl">
            <div className="border-b border-line pb-2">
              <span className="eyebrow">The engagement</span>
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              How a partner program gets built
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-7 text-navy/70 sm:text-lg">
              Six phases from first conversation to a platform in service. Each
              phase ends with something you can review, approve, and take to a
              funder or a board.
            </p>
          </div>
          <div className="mt-11 border-t border-line">
            {PHASES.map((phase) => (
              <div
                key={phase.n}
                className="grid gap-6 border-b border-line py-7 lg:grid-cols-[88px_minmax(220px,1fr)_minmax(220px,1fr)_minmax(200px,.9fr)]"
              >
                <div>
                  <div className="text-[26px] font-semibold leading-none tracking-[-0.03em] text-teal/35">
                    {phase.n}
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-[.1em] text-navy/45">
                    {phase.duration}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.014em] text-navy dark:text-white">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-navy/70 dark:text-white/70">
                    {phase.body}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[.14em] text-navy/45">
                    What you get
                  </span>
                  <p className="mt-2 text-sm leading-7 text-navy/72 dark:text-white/70">
                    {phase.deliverable}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[.14em] text-navy/45">
                    What we need
                  </span>
                  <p className="mt-2 text-sm leading-7 text-teal dark:text-mint">
                    {phase.needs}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-wash dark:bg-ink-2/30">
        <div className="wrap">
          <div className="max-w-4xl">
            <div className="border-b border-line pb-2">
              <span className="eyebrow">Funding eligibility and accountability</span>
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Built so the program stays fundable
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-7 text-navy/70 sm:text-lg">
              Most programs do not lose funding because the work did not happen.
              They lose it because the work could not be evidenced. Eligibility
              rules, intake, verification, and reporting are designed into the
              application from the first phase rather than reconstructed at
              renewal.
            </p>
          </div>
          <div className="mt-11 grid gap-px border border-line bg-line lg:grid-cols-3">
            {FUNDING.map((item) => (
              <Card key={item.n} className="h-full rounded-none border-0 shadow-none">
                <CardContent className="px-7 py-8">
                  <div className="text-[10.5px] font-semibold uppercase tracking-[.16em] text-teal">
                    {item.n}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.014em] text-navy dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-navy/70 dark:text-white/70">
                    {item.body}
                  </p>
                  <p className="mt-4 border-t border-slate-100 pt-3 text-[11px] leading-6 tracking-[.04em] text-navy/55 dark:text-white/55">
                    {item.evidence}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl border-t border-line pt-10">
            <span className="text-[10.5px] uppercase tracking-[.16em] text-navy/50">
              Mapped to funder frameworks
            </span>
            <p className="mt-4 max-w-[72ch] text-[16.5px] leading-[1.7] text-navy/75 dark:text-white/70">
              {ch9Lead}
            </p>
          </div>
          <div className="mt-5 max-w-[62.5rem] border-t border-line">
            {ch9Table.rows.map(([name, mapping]) => (
              <div
                key={name}
                className="grid gap-7 border-b border-line py-5 sm:grid-cols-[minmax(10rem,.6fr)_minmax(16rem,1.4fr)]"
              >
                <span className="text-base font-semibold leading-snug tracking-[-0.012em] text-navy dark:text-white">
                  {name}
                </span>
                <span className="text-[15px] leading-[1.65] text-navy/70 dark:text-white/65">
                  {mapping}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ink-surface relative overflow-hidden py-20 text-white">
        <div className="bg-grid-fine absolute inset-0 opacity-25" aria-hidden />
        <div className="wrap relative">
          <div className="max-w-4xl">
            <div className="border-b border-white/15 pb-2">
              <span className="eyebrow text-white/55">Compliant journey tracking</span>
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              Track the journey without overreaching
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-7 text-white/70 sm:text-lg">
              A participant journey is evidence when it is consented, minimal,
              verifiable, and reviewable. These are the defaults every partner
              application inherits, and each one is configurable to the rules
              your program answers to.
            </p>
          </div>
          <div className="mt-11 border-t border-white/15">
            {JOURNEY.map((item) => (
              <div
                key={item.n}
                className="grid gap-6 border-b border-white/10 py-6 lg:grid-cols-[70px_minmax(200px,.9fr)_minmax(260px,1.6fr)]"
              >
                <span className="text-[11px] font-semibold text-mint">{item.n}</span>
                <h3 className="text-lg font-semibold tracking-[-0.012em] text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-white/66">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-7 max-w-6xl text-[11.5px] leading-6 tracking-[.04em] text-white/50">
            Participation is modular. A government program runs with no token
            layer by default — standard profiles, eligibility, applications,
            progress tracking, or credentials. COVI or ELUV enter only where a
            program calls for them and only after review.
          </p>
        </div>
      </section>

      <section className="section border-b border-line">
        <div className="wrap">
          <div className="max-w-4xl">
            <div className="border-b border-line pb-2">
              <span className="eyebrow">Build and maintenance</span>
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              The platform after launch day
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-7 text-navy/70 sm:text-lg">
              Launch is the beginning of the obligation, not the end of it.
              Applications built on ConstructFi inherit the platform&apos;s shared
              services, so maintenance covers the whole stack underneath your
              program rather than only the screens on top of it.
            </p>
          </div>
          <div className="mt-11 grid gap-11 lg:grid-cols-2">
            <div>
              <span className="text-[10.5px] uppercase tracking-[.16em] text-navy/50">
                Included in the build
              </span>
              <div className="mt-4">
                {BUILD_SCOPE.map((item) => (
                  <div key={item.n} className="flex gap-4 border-t border-line py-4">
                    <span className="shrink-0 text-xs text-teal">{item.n}</span>
                    <span className="text-sm leading-7 text-navy/75">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="text-[10.5px] uppercase tracking-[.16em] text-navy/50">
                Ongoing operation
              </span>
              <div className="mt-4">
                {MAINTENANCE.map((item) => (
                  <div key={item.n} className="flex gap-4 border-t border-line py-4">
                    <span className="shrink-0 text-xs text-teal">{item.n}</span>
                    <span className="text-sm leading-7 text-navy/75">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-11 max-w-4xl border border-line bg-background p-7">
            <h3 className="text-xl font-semibold tracking-[-0.014em] text-navy dark:text-white">
              What you own
            </h3>
            <p className="mt-3 text-[15.5px] leading-7 text-navy/72 dark:text-white/70">
              Partners retain ownership of their brand, curriculum, and program
              data, with data-export rights set out in the partner agreement.
              ConstructFi owns the shared platform and the software that runs it.
              Your community is yours; the rails are ours.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="max-w-4xl">
            <div className="border-b border-line pb-2">
              <span className="eyebrow">Who we partner with</span>
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Six partner types, six starting points
            </h2>
          </div>
          <div className="mt-10 border-t border-line">
            {PARTNER_TYPES.map((type) => (
              <div
                key={type.n}
                className="grid gap-5 border-b border-line py-6 lg:grid-cols-[44px_minmax(150px,.85fr)_minmax(220px,1.3fr)_minmax(220px,1.3fr)]"
              >
                <span className="text-[11px] font-semibold text-teal">{type.n}</span>
                <span className="text-lg font-semibold tracking-[-0.012em] text-navy dark:text-white">
                  {type.type}
                </span>
                <span className="text-sm leading-7 text-navy/70 dark:text-white/70">
                  {type.value}
                </span>
                <span className="text-sm leading-7 text-teal dark:text-mint">{type.example}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-4xl">
            <div className="border-b border-line pb-2">
              <span className="eyebrow">Participation is modular</span>
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-navy sm:text-[2.35rem]">
              Token-optional where the program needs it to be
            </h2>
            <p className="mt-4 max-w-4xl text-base leading-7 text-navy/70 sm:text-lg">
              Public agencies, nonprofits, institutions, and enterprise partners
              can build on ConstructFi without forcing wallet, token, or
              marketplace participation into every workflow.
            </p>
          </div>
          <div className="mt-8 border-t border-line">
            {MODULAR.map((item) => (
              <div
                key={item.need}
                className="grid gap-6 border-b border-line py-5 sm:grid-cols-[minmax(200px,1fr)_minmax(280px,1.9fr)]"
              >
                <span className="text-base font-semibold tracking-[-0.012em] text-navy dark:text-white">
                  {item.need}
                </span>
                <span className="text-sm leading-7 text-navy/70 dark:text-white/70">
                  {item.approach}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact">
                Start a partner conversation
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/developers">Developers</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
