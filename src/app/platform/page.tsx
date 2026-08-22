import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  Coins,
  FileBadge2,
  GraduationCap,
  LayoutGrid,
  Package,
  Plug,
  ShieldCheck,
  Sparkles,
  Tags,
  Target,
  UsersRound,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SITE, STATS } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — ConstructFi",
  description:
    "ConstructFi is the connected ecosystem for the built world — marketplace commerce, specialized software, real estate intelligence, procurement, education, and custom digital solutions.",
  openGraph: {
    title: "ConstructFi — the connected ecosystem for the built world",
    description:
      "One platform. Shared infrastructure. Many apps.",
    url: `${SITE.url}/platform`,
    images: [{ url: "/og/home.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/platform" },
};

const POSITIONING = [
  {
    label: "Primary positioning",
    text: "ConstructFi is the connected ecosystem for construction and real estate—bringing together the tools, marketplaces, intelligence, education, and experiences that help people build, operate, invest, and grow.",
  },
  { label: "Short positioning", text: "The ecosystem for people who build." },
  {
    label: "Brand promise",
    text: "Whatever you are building, ConstructFi connects you to the tools, people, knowledge, and opportunities to move forward.",
  },
] as const;

const SERVICES = [
  {
    icon: ShieldCheck,
    accent: "bg-teal text-white",
    title: "Identity & Security",
    body: "One credential, scoped to every workspace and app. SSO, MFA, invitation codes, digital signatures, and role-based permissions shared across the platform.",
  },
  {
    icon: Sparkles,
    accent: "bg-mint text-navy",
    title: "AI Intelligence Layer",
    body: "Shared reasoning, retrieval, and coaching across apps. Opportunity discovery, transcription and scoring, natural-language reporting, and role-play coaching run on one governed model layer with tenant-isolated context.",
  },
  {
    icon: Wallet,
    accent: "bg-sky text-navy",
    title: "Wallet & Rewards",
    body: "COVI activity, program incentives, and soulbound ELUV credentials in one ledger per organization. COVI is a utility token for platform activity — earn-only and transfer-paused before listing — not an investment.",
  },
  {
    icon: BarChart3,
    accent: "bg-indigo text-white",
    title: "Data & Analytics",
    body: "A single, tenant-partitioned warehouse behind every dashboard and export, so reporting never depends on a manual reconciliation step.",
  },
  {
    icon: Plug,
    accent: "bg-periwinkle text-navy",
    title: "Integration Hub",
    body: "Connectors for tools like RingCentral, Notion, ERP, and manufacturer feeds — with field-level sync control, replay on failure, and an audit trail.",
  },
  {
    icon: LayoutGrid,
    accent: "bg-gold text-navy",
    title: "Marketplace Infrastructure",
    body: "Discovery, entitlement, deployment, and metering for every app — the plumbing each marketplace product inherits.",
  },
] as const;

const COMMITMENTS = [
  {
    n: "01",
    title: "Built on real operations",
    body: "The ecosystem sits on top of real development activity and real supply operations, so the products describe work the organization already does.",
  },
  {
    n: "02",
    title: "Modular by design",
    body: "Products can be used independently or together, and partner programs can stay entirely token-optional when that better fits the mission or the funding.",
  },
  {
    n: "03",
    title: "Utility-first participation",
    body: "COVI and ELUV are participation layers, not the definition of the platform. They appear only where the program, product, and compliance path support them.",
  },
  {
    n: "04",
    title: "Transparent infrastructure",
    body: "Identity, reporting, review, integrations, and marketplace plumbing are shared across the ecosystem, which keeps records coherent instead of fragmented.",
  },
  {
    n: "05",
    title: "Long-term stewardship",
    body: "ConstructFi is built to support agencies, nonprofits, institutions, contractors, suppliers, owners, and future builders over time — not as a one-off launch.",
  },
] as const;

const AUDIENCES = [
  "Contractors",
  "Suppliers",
  "Developers",
  "Property owners",
  "Investors",
  "Entrepreneurs",
  "Nonprofits",
  "Public agencies",
  "Institutions",
] as const;

const AUDIENCE_COLORS = [
  "bg-teal",
  "bg-mint",
  "bg-sky",
  "bg-indigo",
  "bg-periwinkle",
  "bg-gold",
] as const;

const LAYERS = [
  {
    icon: LayoutGrid,
    title: "Marketplace",
    body: "Discover apps, services, materials, learning, and experiences.",
    accent: "bg-teal text-white",
  },
  {
    icon: Boxes,
    title: "Products",
    body: "Use purpose-built tools for construction and real estate.",
    accent: "bg-indigo text-white",
  },
  {
    icon: UsersRound,
    title: "Partner Solutions",
    body: "Build custom applications and digital programs.",
    accent: "bg-sky text-navy",
  },
  {
    icon: Coins,
    title: "Participation",
    body: "COVI and ELUV recognize eligible activity across the ecosystem.",
    accent: "bg-gold text-navy",
  },
  {
    icon: UsersRound,
    title: "Community",
    body: "Builders, suppliers, developers, investors, agencies, institutions, nonprofits, and future builders.",
    accent: "bg-periwinkle text-navy",
  },
] as const;

const CONNECT_STEPS = [
  {
    n: "01",
    icon: Target,
    title: "Start with the job",
    body: "Use a product to answer a real need — analysis, sourcing, learning, operations, or engagement.",
    chip: "Products",
  },
  {
    n: "02",
    icon: Tags,
    title: "Keep the record",
    body: "What happens in one part of the ecosystem can stay attached to the next step instead of being re-entered by hand.",
    chip: "Shared infrastructure",
  },
  {
    n: "03",
    icon: Package,
    title: "Move the workflow forward",
    body: "A bid becomes a scope, a scope becomes an order, and progress becomes something the platform can verify and report.",
    chip: "Marketplace",
  },
  {
    n: "04",
    icon: GraduationCap,
    title: "Recognize the progress",
    body: "Eligible activity and verified learning can be recognized across the ecosystem without forcing that layer into every program.",
    chip: "COVI · ELUV",
  },
  {
    n: "05",
    icon: CheckCircle2,
    title: "Carry it into the next opportunity",
    body: "Used together, the products create continuity instead of disconnected tools and fragmented records.",
    chip: "ConstructFi",
  },
] as const;

export default function PlatformPage() {
  return (
    <>
      <section className="section" style={{ borderTop: "none", paddingTop: 62 }}>
        <div className="wrap">
          <div className="max-w-[52.5rem]">
            <div className="border-b border-line pb-2">
              <span className="eyebrow" style={{ color: "rgba(0,51,107,.55)" }}>
                About Us
              </span>
            </div>
            <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
              ConstructFi is the connected ecosystem for the built world.
            </h1>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-navy/75">
              ConstructFi brings together marketplace commerce, specialized software,
              real estate intelligence, procurement, education, interactive learning,
              and custom digital solutions that help people and organizations build,
              operate, invest, learn, and grow.
            </p>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-navy/75">
              ConstructFi is not simply an app, a marketplace, or a token project.
              It is the umbrella ecosystem that connects specialized products,
              communities, and opportunities for contractors, suppliers, developers,
              property owners, investors, entrepreneurs, nonprofits, public agencies,
              institutions, and future builders.
            </p>
          </div>
          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
            {POSITIONING.map((statement) => (
              <div key={statement.label} className="bg-wash px-7 py-8">
                <div className="text-[10.5px] uppercase tracking-[.16em] text-navy/50">
                  {statement.label}
                </div>
                <p className="mt-4 text-lg font-medium leading-8 tracking-[-0.015em] text-navy">
                  {statement.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ink-surface relative overflow-hidden py-20 text-white">
        <div className="bg-grid-fine absolute inset-0 opacity-25" aria-hidden />
        <div className="wrap relative">
          <div className="max-w-3xl">
            <div className="border-b border-white/15 pb-2">
              <span className="eyebrow text-white/55">The operating base</span>
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              Built on operating businesses, not a deck
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/70 sm:text-lg">
              The ecosystem sits on top of real development activity and real
              supply operations. That is why the products describe work the
              organization already does.
            </p>
          </div>
          <div className="mt-11 grid gap-px border border-white/15 bg-white/15 sm:grid-cols-2 xl:grid-cols-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="bg-ink px-5 py-6">
                <div className="text-3xl font-semibold tracking-tight text-mint">{stat.value}</div>
                <div className="mt-1 text-sm font-medium text-white">{stat.label}</div>
                <div className="mt-1 text-[10.5px] tracking-[.06em] text-white/50">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-wash dark:bg-ink-2/30">
        <div className="wrap">
          <div className="max-w-3xl">
            <div className="border-b border-line pb-2">
              <span className="eyebrow">Shared platform services</span>
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              One platform. Shared infrastructure. Many apps.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-navy/70 sm:text-lg">
              An app on ConstructFi does not rebuild sign-in, reporting, or a rewards
              ledger. It inherits them, which is why the products stay consistent
              with each other instead of drifting apart.
            </p>
          </div>
          <div className="mt-11 grid gap-px border border-line bg-line lg:grid-cols-3">
            {SERVICES.map((service) => (
              <Card key={service.title} className="h-full rounded-none border-0 shadow-none">
                <CardContent className="h-full px-6 py-7">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-[7px] ${service.accent}`}>
                    <service.icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-navy dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{service.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <div className="border-b border-line pb-2">
              <span className="eyebrow">How we operate</span>
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-navy sm:text-[2.35rem]">
              Five commitments the ecosystem is built on
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-navy/70">
              These hold whether you arrive as a contractor buying materials, an
              agency launching a program, or a student learning the business.
            </p>
          </div>
          <div className="relative">
            <span className="absolute bottom-0 left-[14px] top-[6px] w-px bg-line" aria-hidden />
            {COMMITMENTS.map((commitment) => (
              <div key={commitment.n} className="relative py-5 pl-0">
                <div className="flex items-start gap-4">
                  <span className="relative z-[1] inline-flex h-[29px] w-[29px] items-center justify-center rounded-full border-[1.5px] border-teal bg-background text-[11.5px] font-bold text-teal">
                    {commitment.n}
                  </span>
                  <div>
                    <h3 className="mt-[3px] text-xl font-semibold tracking-[-0.014em] text-navy dark:text-white">
                      {commitment.title}
                    </h3>
                    <p className="mt-2 max-w-3xl text-[15.5px] leading-7 text-navy/70 dark:text-white/70">
                      {commitment.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="max-w-4xl">
            <div className="border-b border-line pb-2">
              <span className="eyebrow">Who we serve</span>
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-navy sm:text-[2.15rem]">
              Everyone who touches the built world
            </h2>
          </div>
          <div className="mt-8 grid max-w-5xl gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {AUDIENCES.map((audience, index) => (
              <div key={audience} className="flex items-center gap-3 bg-background px-5 py-4">
                <span className={`h-2 w-2 rounded-full ${AUDIENCE_COLORS[index % AUDIENCE_COLORS.length]}`} />
                <span className="text-sm font-semibold text-navy dark:text-white">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-line">
        <div className="wrap">
          <div className="max-w-3xl">
            <div className="border-b border-line pb-2">
              <span className="eyebrow">Solutions by need</span>
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              Start with the job in front of you
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-navy/70 sm:text-lg">
              Every product in the marketplace answers one of six needs. Find
              yours, see which products serve it, and what changes once you are
              working inside the ecosystem.
            </p>
          </div>
          <div className="mt-11 grid gap-px border border-line bg-line lg:grid-cols-5">
            {LAYERS.map((layer) => (
              <Card key={layer.title} className="h-full rounded-none border-0 shadow-none">
                <CardContent className="px-6 py-7">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-[8px] ${layer.accent}`}>
                    <layer.icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 text-[21px] font-semibold tracking-[-0.015em] text-navy dark:text-white">
                    {layer.title}
                  </h3>
                  <p className="mt-2 text-[15.5px] leading-7 text-navy/65 dark:text-white/70">
                    {layer.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="max-w-3xl">
            <div className="border-b border-line pb-2">
              <span className="eyebrow">How the ecosystem connects</span>
            </div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              One job, five products, one record
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-navy/70 sm:text-lg">
              Products are useful on their own. Used together, the work carries
              forward instead of being re-entered — a bid becomes a scope, a
              scope becomes an order, and the activity behind it can be
              recognized.
            </p>
          </div>
          <div className="mt-10 grid gap-px border border-line bg-line lg:grid-cols-5">
            {CONNECT_STEPS.map((step, index) => (
              <div
                key={step.n}
                className="relative flex min-h-56 flex-col gap-3 bg-ink px-5 py-6 text-white"
              >
                {index < CONNECT_STEPS.length - 1 ? (
                  <span className="absolute -right-[11px] top-9 z-[2] hidden h-[22px] w-[22px] items-center justify-center rounded-full border border-white/15 bg-ink text-[11px] text-mint lg:inline-flex">
                    →
                  </span>
                ) : null}
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full bg-mint text-[12.5px] font-bold text-navy">
                    {step.n}
                  </span>
                  <span className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-[6px] bg-white/10">
                    <step.icon className="h-4 w-4 text-mint" />
                  </span>
                </div>
                <h3 className="text-xl font-semibold tracking-[-0.015em]">{step.title}</h3>
                <p className="text-sm leading-7 text-white/72">{step.body}</p>
                <span className="mt-auto inline-flex self-start rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[.12em] text-white/55">
                  {step.chip}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/marketplace">
                Explore the Marketplace
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/partners">Build With ConstructFi</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
