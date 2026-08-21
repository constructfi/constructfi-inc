import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Bot,
  BriefcaseBusiness,
  Building2,
  FileText,
  GraduationCap,
  Landmark,
  Package,
  Smartphone,
  Users,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Section, SectionHeading } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MARKETS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partner Solutions",
  description:
    "ConstructFi Partner Solutions for nonprofits, public agencies, educational institutions, industry organizations, and private enterprises.",
  openGraph: {
    title: "ConstructFi Partner Solutions",
    description:
      "Build workforce, education, economic-development, procurement, and program platforms on maintained infrastructure.",
    url: `${SITE.url}/partners`,
  },
  alternates: { canonical: "/partners" },
};

const AUDIENCES = [
  {
    icon: Building2,
    title: "Nonprofits",
    body: "Launch member, participant, or beneficiary programs with auditable progress and reporting.",
  },
  {
    icon: Landmark,
    title: "Public agencies",
    body: "Deploy token-free by default for government and public programs while keeping a path to optional wallet participation where appropriate.",
  },
  {
    icon: GraduationCap,
    title: "Educational institutions",
    body: "Run workforce, readiness, and credential pathways with durable records of progress.",
  },
  {
    icon: Users,
    title: "Industry organizations",
    body: "Coordinate cohorts, credentialing, and supply-side participation across your membership base.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Private enterprises",
    body: "Launch branded operating, enablement, and marketplace experiences on shared infrastructure.",
  },
];

const SOLUTIONS = [
  {
    icon: Smartphone,
    title: "Custom web and mobile apps",
    body: "Purpose-built experiences for member onboarding, field participation, and program delivery.",
  },
  {
    icon: Blocks,
    title: "Program platforms",
    body: "Branded program administration for workforce, education, economic development, and community initiatives.",
  },
  {
    icon: Package,
    title: "Marketplaces and procurement",
    body: "Supplier discovery, purchasing, and package-based workflows tied to verified operational rails.",
  },
  {
    icon: FileText,
    title: "Program and case tools",
    body: "Case management, participant progression, reporting, and evidence collection in one place.",
  },
  {
    icon: Bot,
    title: "AI intelligence",
    body: "Assistance for coaching, reporting, workflow orchestration, and executive insight grounded in your own program data.",
  },
  {
    icon: GraduationCap,
    title: "Workforce and education",
    body: "Readiness pathways, cohort sequencing, milestone verification, and learner support that can map to real outcomes.",
  },
];

const DELIVERY = [
  "Discovery and framework mapping across program goals, reporting obligations, and user groups",
  "Solution architecture for branded web, mobile, program, procurement, and AI-enabled workflows",
  "Implementation on ConstructFi's maintained infrastructure, with token-free defaults where public-sector rules require them",
  "Launch, partner-team training, and operational handoff",
  "Ongoing operating, maintenance, and product improvement under a shared-platform model",
];

const OPERATING_MODEL = [
  "ConstructFi maintains the underlying platform, hosting, releases, and shared infrastructure.",
  "Partners control their brand, program structure, audiences, and day-to-day operating priorities.",
  "Participation modules can be enabled selectively instead of forcing every program into the same wallet or token flow.",
];

const FUNDING = [
  "WIOA-aligned workforce programs that need auditable progression and completion evidence",
  "HUD-adjacent housing, readiness, or economic-development reporting pathways",
  "CRA or community-investment education programs that require measurable engagement without lending claims",
  "Other grant, philanthropic, or public-program frameworks that need structured outputs and documented progress",
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner Solutions"
        title="Build your organization’s program on maintained infrastructure"
        lede="ConstructFi Partner Solutions helps nonprofits, public agencies, educational institutions, industry organizations, and private enterprises launch branded experiences with clear reporting, optional participation modules, and token-free public-program defaults."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="bg-white/10 text-white">Token-free by default for public programs</Badge>
          <Badge className="bg-white/10 text-white">Custom web and mobile apps</Badge>
          <Badge className="bg-white/10 text-white">Operating and maintenance included</Badge>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {MARKETS.map((market) => (
            <span
              key={market}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm font-medium text-white/80"
            >
              {market}
            </span>
          ))}
        </div>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Who this serves"
          title="Five partner paths"
          lede="Partner Solutions adapts to who you serve rather than forcing every organization into a one-size-fits-all product flow."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {AUDIENCES.map((audience) => (
            <Card key={audience.title} className="h-full">
              <CardContent className="pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal dark:text-mint">
                  <audience.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy dark:text-white">
                  {audience.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {audience.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-wash dark:bg-ink-2/30">
        <SectionHeading
          eyebrow="What we build"
          title="Programs, products, and operational layers"
          lede="Partner Solutions spans product delivery and operating infrastructure, from front-end experiences to case tools and AI-backed reporting."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SOLUTIONS.map((solution) => (
            <Card key={solution.title} className="h-full">
              <CardContent className="pt-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal dark:text-mint">
                  <solution.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy dark:text-white">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {solution.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="Delivery lifecycle"
            title="From framework mapping to long-term operation"
            lede="Partner delivery is structured so implementation, launch, and maintenance stay connected instead of becoming separate projects."
          />
          <div className="space-y-4">
            {DELIVERY.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-line bg-card p-5 shadow-sm dark:border-border"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal dark:text-mint">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-wash dark:bg-ink-2/30">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Operating model"
              title="Shared maintenance, partner-owned outcomes"
              lede="ConstructFi runs the shared platform so partners can focus on program delivery, adoption, and reporting."
            />
            <ul className="mt-8 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {OPERATING_MODEL.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-mint" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Funding and frameworks"
              title="Built to map to how programs get funded"
              lede="Partner Solutions can support the reporting structures that funders, public frameworks, and community-investment programs expect."
            />
            <ul className="mt-8 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {FUNDING.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-mint" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="ink-surface relative text-white">
        <div className="bg-grid-fine absolute inset-0 opacity-25" aria-hidden />
        <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mint">
              Next steps
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Bring your program, framework, or operating need
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              We can start with a token-free workflow, a workforce pathway, a procurement
              experience, or a full branded platform — then add optional participation
              modules only where they fit.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/contact">
                Contact us
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/developers">Developers</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
