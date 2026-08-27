import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ConstructFi — The ecosystem for people who build",
  description:
    "ConstructFi connects the tools, marketplaces, intelligence, education, and experiences that help contractors, suppliers, developers, investors, and entrepreneurs build what is next.",
};

const shell = "mx-auto max-w-[1280px] px-8";
const lightButton =
  "inline-flex items-center justify-center px-6 py-4 text-[15.5px] font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
const sectionLabel =
  "border-b border-line pb-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-navy/55";

const audiences = [
  "Contractors",
  "Suppliers",
  "Developers",
  "Property owners",
  "Investors",
  "Entrepreneurs",
  "Nonprofits",
  "Public agencies",
  "Institutions",
];

const heroTiles = [
  {
    name: "ConstructOS",
    mark: "/products/constructos-mark.svg",
    surface: "bg-[#0e2430]",
    nameClass: "text-[#94efe0]",
    dot: "bg-[#00d19a]",
  },
  {
    name: "Build or Busted",
    mark: "/products/build-or-busted-mark.svg",
    surface: "bg-[#281610]",
    nameClass: "text-[#ffb08d]",
    dot: "bg-[#ff5a1f]",
  },
  {
    name: "Material Marketplace",
    mark: "/products/material-marketplace-mark.svg",
    surface: "bg-[#182719]",
    nameClass: "text-[#d6e8a0]",
    dot: "bg-[#a7c957]",
  },
  {
    name: "Supplier Marketplace",
    mark: "/products/supplier-marketplace-mark.svg",
    surface: "bg-[#102320]",
    nameClass: "text-[#9fe0be]",
    dot: "bg-[#00a87c]",
  },
  {
    mark: "/brand/constructfi-emblem-tight.svg",
    name: "Eluvial Academy",
    surface: "bg-[#162038]",
    nameClass: "text-[#bfc7ff]",
    dot: "bg-[#8298fc]",
  },
  {
    mark: "/products/house-hackers-mark.svg",
    name: "House Hackers",
    surface: "bg-[#1d1e38]",
    nameClass: "text-[#d2d8ff]",
    dot: "bg-[#8298fc]",
  },
] as const;

const ecosystemLayers = [
  {
    number: "Layer 01",
    title: "Marketplace",
    body: "Discover apps, services, materials, learning, and experiences.",
    accent: "bg-[#019599]",
    kind: "hub",
  },
  {
    number: "Layer 02",
    title: "Products",
    body: "Use purpose-built tools for construction and real estate.",
    accent: "bg-indigo",
    kind: "stack",
  },
  {
    number: "Layer 03",
    title: "Partner Solutions",
    body: "Build custom applications and digital programs.",
    accent: "bg-sky",
    kind: "people",
  },
  {
    number: "Layer 04",
    title: "Participation",
    body: "COVI and ELUV recognize eligible activity across the ecosystem.",
    accent: "bg-gold",
    kind: "ring",
  },
  {
    number: "Layer 05",
    title: "Community",
    body: "Builders, suppliers, developers, investors, agencies, institutions, nonprofits, and future builders.",
    accent: "bg-periwinkle",
    kind: "dots",
  },
];

const categories = [
  {
    label: "Run Your Business",
    need: "Manage operations, sales, projects, and growth",
    examples: "ConstructOS · Covington Sales Academy",
    href: "/marketplace/revenueos",
    accent: "bg-[#019599]",
    kind: "hub",
  },
  {
    label: "Source Materials and Suppliers",
    need: "Find materials, suppliers, pricing, and procurement support",
    examples: "Material Marketplace · Supplier Marketplace",
    href: "/marketplace/material-marketplace",
    accent: "bg-mint",
    kind: "bag",
  },
  {
    label: "Analyze Deals and Agreements",
    need: "Evaluate real estate opportunities and contracts",
    examples: "Build or Busted · PactPilot",
    href: "/marketplace/build-or-bust",
    accent: "bg-sky",
    kind: "contract",
  },
  {
    label: "Learn and Build Skills",
    need: "Gain practical knowledge, coaching, and tools",
    examples: "Eluvial Academy · Sales Academy",
    href: "/marketplace/sales-academy",
    accent: "bg-indigo",
    kind: "cap",
  },
  {
    label: "Play, Practice, and Explore",
    need: "Learn through simulation, games, and challenges",
    examples: "House Hackers · Cashflow Tycoon · Brick by Brick",
    href: "/marketplace/house-hackers",
    accent: "bg-periwinkle",
    kind: "cube",
  },
  {
    label: "Participate in the Ecosystem",
    need: "Access eligible programs and digital experiences",
    examples: "COVI · ELUV · digital collectibles",
    href: "#participation",
    accent: "bg-gold",
    kind: "coin",
  },
];

const featuredProducts = [
  {
    category: "Analyze Deals and Agreements",
    name: "Build or Busted",
    tagline: "Know in 60 seconds, before you fall in love with it.",
    description:
      "Evaluate a property, get a plain-English verdict, and see the numbers that drove it before you sink time into the wrong deal.",
    href: "/marketplace/build-or-bust",
    image: "/products/build-or-busted-cover.png",
    mark: "/products/build-or-busted-mark.svg",
    accent: "bg-[#ff5a1f]",
    accentText: "text-[#ff5a1f]",
    access: "App Store · Google Play",
    objectPosition: "center center",
    detail: "Verdict-led underwriting",
    chips: [
      { label: "Build", className: "bg-[#14b86a] text-white" },
      { label: "Hold", className: "bg-[#d9a441] text-[#041428]" },
      { label: "Busted", className: "bg-[#d84343] text-white" },
    ],
  },
  {
    category: "Source Materials and Suppliers",
    name: "Material Marketplace",
    tagline: "Division-based material packages from vetted manufacturers.",
    description:
      "Source coherent material packages by division, with vetted manufacturers and pricing that connect into the wider supplier network.",
    href: "/marketplace/material-marketplace",
    image: "/products/material-marketplace-cover.png",
    mark: "/products/material-marketplace-mark.svg",
    accent: "bg-[#a7c957]",
    accentText: "text-[#386641]",
    access: "In ConstructFi",
    objectPosition: "center center",
    detail: "Division-based sourcing",
    chips: [{ label: "Price", className: "bg-[#d4a95a] text-[#041428]" }],
  },
  {
    category: "Run Your Business",
    name: "ConstructOS",
    tagline: "The operating system for construction.",
    description:
      "Connect CRM, business development, estimating, procurement, logistics, project management, and executive reporting in one operating spine.",
    href: "/marketplace/revenueos",
    image: "/products/constructos-cover.png",
    mark: "/products/constructos-mark.svg",
    accent: "bg-[#019599]",
    accentText: "text-[#019599]",
    access: "Enterprise",
    objectPosition: "center center",
    detail: "Connected operations",
    chips: [{ label: "AI signals", className: "bg-[#019599] text-[#041428]" }],
  },
  {
    category: "Source Materials and Suppliers",
    name: "Supplier Marketplace",
    tagline: "Verified suppliers. Real settlement.",
    description:
      "Procure materials and services from a vetted supplier network backed by live operations, verification workflows, and order tracking.",
    href: "/marketplace/supplier-marketplace",
    image: "/products/supplier-marketplace-cover.png",
    mark: "/products/supplier-marketplace-mark.svg",
    accent: "bg-[#386641]",
    accentText: "text-[#00a87c]",
    access: "Enterprise",
    objectPosition: "center center",
    detail: "Verification + action",
    chips: [
      { label: "Verified", className: "bg-[#00a87c] text-white" },
      { label: "Action", className: "border border-white/15 bg-white/10 text-white/82" },
    ],
  },
] as const;

const houseHackersCallout = {
  mark: "/products/house-hackers-mark.svg",
  image: "/products/house-hackers-cover.png",
  objectPosition: "center center",
} as const;

const partnerSolutions = [
  "Community and member platforms",
  "Workforce and education applications",
  "Economic-development platforms",
  "Procurement and marketplace systems",
  "Program and case-management tools",
  "AI-powered intelligence tools",
];

const participationCards = [
  {
    title: "COVI",
    label: "Ecosystem utility layer",
    body: "Recognizes eligible activity across construction commerce, learning, games, and participating products.",
    quote: "“My meaningful activity in the construction ecosystem can be recognized and connected.”",
    image: "/coins/covi.png",
    accent: "from-teal/5 to-transparent",
    border: "hover:border-teal",
  },
  {
    title: "ELUV",
    label: "Soulbound readiness credential",
    body: "Records verified progression as a non-transferable credential that stays tied to the work you actually completed.",
    quote: "“My progress can be verified and carried forward without being bought, sold, or transferred.”",
    image: "/coins/eluv.png",
    accent: "from-gold/10 to-transparent",
    border: "hover:border-gold-2",
  },
];

function Glyph({ kind }: { kind: string }) {
  const base = "relative flex h-8 w-8 items-center justify-center";

  if (kind === "hub") {
    return (
      <span className={base}>
        <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-ink">
          <span className="h-1 w-1 rounded-full bg-ink" />
        </span>
      </span>
    );
  }

  if (kind === "bag") {
    return (
      <span className={base}>
        <span className="relative h-3 w-4 rounded-[2px] border-2 border-ink">
          <span className="absolute left-1 top-[-7px] h-1.5 w-2 rounded-t-full border-x-2 border-t-2 border-ink" />
        </span>
      </span>
    );
  }

  if (kind === "contract") {
    return (
      <span className={base}>
        <span className="flex h-4 w-3 flex-col justify-center gap-1 rounded-[2px] bg-ink px-0.5">
          <span className="h-[1.5px] bg-white" />
          <span className="h-[1.5px] w-2/3 bg-white" />
        </span>
      </span>
    );
  }

  if (kind === "cap") {
    return (
      <span className={base}>
        <span className="h-0 w-0 border-x-[7px] border-b-[9px] border-x-transparent border-b-ink" />
      </span>
    );
  }

  if (kind === "cube") {
    return (
      <span className={base}>
        <span className="flex">
          <span className="h-3 w-3 rounded-[1px] bg-ink/85" />
          <span className="-ml-1 mt-1 h-3 w-3 rounded-[1px] bg-ink" />
        </span>
      </span>
    );
  }

  if (kind === "coin") {
    return (
      <span className={base}>
        <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-ink">
          <span className="h-0.5 w-2 bg-ink" />
        </span>
      </span>
    );
  }

  if (kind === "stack") {
    return (
      <span className={base}>
        <span className="relative h-3 w-3 rounded-[2px] border-2 border-white">
          <span className="absolute left-[-5px] top-[1px] h-3 w-3 rounded-[2px] border-2 border-white/60" />
        </span>
      </span>
    );
  }

  if (kind === "people") {
    return (
      <span className={base}>
        <span className="flex">
          <span className="h-3.5 w-3.5 rounded-full bg-white/60" />
          <span className="-ml-1.5 h-3.5 w-3.5 rounded-full bg-white" />
        </span>
      </span>
    );
  }

  if (kind === "ring") {
    return (
      <span className={base}>
        <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-white">
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
        </span>
      </span>
    );
  }

  return (
    <span className={base}>
      <span className="flex gap-1">
        <span className="h-2 w-2 rounded-full bg-white/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-white" />
        <span className="h-2 w-2 rounded-full bg-white/60" />
      </span>
    </span>
  );
}

export default function HomePage() {
  const [featuredLead, ...featuredRest] = featuredProducts;

  return (
    <main className="bg-white text-navy">
      <section className="overflow-hidden bg-ink bg-[radial-gradient(1100px_520px_at_78%_-10%,rgba(27,182,253,0.16),transparent_62%),radial-gradient(820px_460px_at_2%_8%,rgba(0,209,154,0.13),transparent_58%),linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:auto,auto,64px_64px,64px_64px] pt-24">
        <div className={`${shell} grid gap-16 lg:grid-cols-[minmax(0,1.12fr)_minmax(300px,0.88fr)] lg:items-end`}>
          <div className="pb-20 lg:pb-[104px]">
            <div className="flex items-center gap-3.5">
              <span className="h-px w-11 bg-mint" />
              <span className="text-[11.5px] font-semibold uppercase tracking-[0.08em] text-mint">
                Construction. Real estate. Opportunity. Connected.
              </span>
            </div>
            <h1 className="mt-[26px] max-w-[15ch] text-[clamp(44px,5.4vw,72px)] font-semibold leading-[0.98] tracking-[-0.04em] text-white">
              The ecosystem for people who build.
            </h1>
            <p className="mt-[26px] max-w-[52ch] text-[19px] leading-[1.6] text-white/70">
              ConstructFi connects the tools, marketplaces, intelligence, education, and
              experiences that help contractors, suppliers, developers, investors, and
              entrepreneurs build what is next.
            </p>
            <div className="mt-[36px] flex flex-wrap gap-3">
              <Link
                href="/marketplace"
                className={`${lightButton} bg-mint text-ink hover:bg-mint-3 focus-visible:outline-mint`}
              >
                Explore the Marketplace →
              </Link>
              <Link
                href="/partners"
                className={`${lightButton} border border-white/25 text-white hover:bg-white/5 focus-visible:outline-white`}
              >
                Build With ConstructFi
              </Link>
            </div>
            <div className="mt-[44px] flex flex-wrap gap-2 border-t border-white/10 pt-[22px]">
              {audiences.map((audience) => (
                <span
                  key={audience}
                  className="border border-white/15 px-2.5 py-[5px] text-[10.5px] uppercase tracking-[0.1em] text-white/55"
                >
                  {audience}
                </span>
              ))}
            </div>
          </div>

          <div className="w-full max-w-[330px] justify-self-center self-end">
            <div className="rounded-t-[30px] border border-white/[0.18] border-b-0 bg-[#0a1b31] p-[14px] pb-0">
              <div className="overflow-hidden rounded-t-[20px] border border-white/[0.08] border-b-0 bg-[#061527] px-4 pt-[18px]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[9.5px] tracking-[0.14em] text-white/40">9:41</span>
                    <span className="flex items-end gap-[3px]">
                      <span className="h-1.5 w-[3px] bg-white/35" />
                      <span className="h-[9px] w-[3px] bg-white/45" />
                      <span className="h-3 w-[3px] bg-white/60" />
                    </span>
                  </div>
                  <div className="mt-[22px] text-[19px] font-semibold tracking-[-0.02em] text-white">
                    Good morning
                  </div>
                  <div className="mt-[3px] text-[10px] uppercase tracking-[0.12em] text-mint">
                    Your ecosystem
                  </div>
                  <div className="mt-[18px] grid grid-cols-2 gap-2">
                    {heroTiles.map((tile) => (
                      <div
                        key={tile.name}
                        className={`grid gap-3.5 border border-white/10 px-[11px] py-3 ${tile.surface}`}
                      >
                        <div className="flex items-center justify-between">
                          <Image
                            src={tile.mark}
                            alt=""
                            aria-hidden="true"
                            width={28}
                            height={28}
                            className="h-7 w-7"
                          />
                          <span className={`h-2 w-2 rounded-full ${tile.dot}`} />
                        </div>
                        <span className={`text-[11px] leading-[1.25] ${tile.nameClass}`}>{tile.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-[14px] flex items-center gap-1.5 border-t border-white/10 py-3">
                    <span className="h-[7px] w-[7px] bg-mint" />
                    <span className="text-[9.5px] uppercase tracking-[0.1em] text-white/50">
                      Marketplace · 10 products
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line py-[92px]">
        <div className={`${shell} grid gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(300px,1.05fr)] lg:items-start`}>
          <div className="lg:sticky lg:top-28">
            <div className={sectionLabel}>
              <span className="font-semibold text-teal">01</span> Ecosystem introduction
            </div>
            <h2 className="mt-6 max-w-[18ch] text-[clamp(32px,3.4vw,44px)] font-semibold leading-[1.05] tracking-[-0.032em] text-ink">
              More than an app. A connected ecosystem.
            </h2>
            <p className="mt-[18px] max-w-[46ch] text-[17.5px] leading-[1.65] text-navy/70">
              ConstructFi is the mobile-first gateway to a growing network of specialized
              products for the built world. Discover what you need today—from operations and
              procurement to real estate intelligence, training, and materials—then access more
              as your business, projects, and goals grow.
            </p>
            <p className="mt-[22px] max-w-[44ch] border-l-2 border-mint pl-4 text-[15px] leading-[1.7] text-navy/60">
              ConstructFi is the ecosystem. The Marketplace is where people discover it. The
              products are how people use it. Partner Solutions are how organizations build with
              it.
            </p>
          </div>

          <div>
            {ecosystemLayers.map((layer) => (
              <div
                key={layer.title}
                className="grid gap-[22px] border-t border-line py-[26px] sm:grid-cols-[64px_minmax(0,1fr)]"
              >
                <div>
                  <div className="text-[11px] font-semibold tracking-[0.1em] text-teal">
                    {layer.number}
                  </div>
                  <div className={`mt-3 flex h-[34px] w-[34px] items-center justify-center rounded-lg ${layer.accent}`}>
                    <Glyph kind={layer.kind} />
                  </div>
                </div>
                <div>
                  <h3 className="text-[21px] font-semibold tracking-[-0.015em] text-ink">
                    {layer.title}
                  </h3>
                  <p className="mt-2 text-[15.5px] leading-[1.6] text-navy/65">{layer.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-wash py-[92px]">
        <div className={shell}>
          <div className="max-w-[780px]">
            <div className="border-b border-[#d5dfe9] pb-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-navy/55">
              <span className="font-semibold text-teal">02</span> Marketplace
            </div>
            <h2 className="mt-6 text-[clamp(32px,3.4vw,44px)] font-semibold leading-[1.05] tracking-[-0.032em] text-ink">
              Find the right tool for the next move.
            </h2>
            <p className="mt-[18px] text-[17.5px] leading-[1.65] text-navy/70">
              Explore a curated collection of apps, services, materials, learning platforms, AI
              tools, and interactive experiences. Use products independently or discover how they
              connect through the ConstructFi ecosystem.
            </p>
          </div>

          <div className="mt-11 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 xl:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.label}
                href={category.href}
                className="flex min-h-[236px] flex-col gap-3.5 bg-white px-[26px] py-7 transition hover:-translate-y-0.5 hover:bg-[#fbfdff] focus-visible:z-10"
              >
                <div className="flex items-center gap-3">
                  <span className={`flex h-8 w-8 items-center justify-center rounded-[7px] ${category.accent}`}>
                    <Glyph kind={category.kind} />
                  </span>
                  <h3 className="text-[18.5px] font-semibold tracking-[-0.01em] text-ink">
                    {category.label}
                  </h3>
                </div>
                <p className="text-[15px] leading-[1.6] text-navy/65">{category.need}</p>
                <p className="mt-auto text-[12.5px] font-semibold text-teal">{category.examples}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line py-[92px]">
        <div className={shell}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[640px]">
              <div className={sectionLabel}>
                <span className="font-semibold text-teal">03</span> Featured products
              </div>
              <h2 className="mt-6 text-[clamp(30px,3.2vw,42px)] font-semibold leading-[1.06] tracking-[-0.032em] text-ink">
                Explore our Featured Products
              </h2>
            </div>
            <Link
              href="/marketplace"
              className="border-b border-teal/40 pb-[3px] text-[11.5px] uppercase tracking-[0.1em] text-teal"
            >
              All 10 products →
            </Link>
          </div>

          <div className="mt-11 grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)]">
            <Link
              href={featuredLead.href}
              className="flex h-full flex-col overflow-hidden border border-[#d3dfe9] bg-white transition hover:border-sky hover:shadow-[0_18px_40px_-28px_rgba(4,20,40,0.45)]"
            >
              <div className={`h-9 ${featuredLead.accent}`} />
              <div className="relative min-h-[280px] flex-1 overflow-hidden bg-[#071522]">
                <Image
                  src={featuredLead.image}
                  alt={`${featuredLead.name} product cover art`}
                  fill
                  className="object-cover"
                  style={{ objectPosition: featuredLead.objectPosition }}
                  sizes="(max-width: 1279px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,20,40,0.08)_0%,rgba(4,20,40,0.18)_30%,rgba(4,20,40,0.86)_100%)]" />
                <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2.5">
                  <Image
                    src={featuredLead.mark}
                    alt=""
                    aria-hidden="true"
                    width={40}
                    height={40}
                    className="h-10 w-10"
                  />
                  <span className="border border-white/15 bg-black/20 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-white/78 backdrop-blur-sm">
                    {featuredLead.access}
                  </span>
                </div>
                <div className="absolute inset-x-5 bottom-5">
                  <div className="flex flex-wrap gap-2">
                    {featuredLead.chips.map((chip) => (
                      <span
                        key={chip.label}
                        className={`px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] ${chip.className}`}
                      >
                        {chip.label}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 max-w-[22ch] text-[27px] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                    Build or Busted
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-white/68">
                    {featuredLead.detail}
                  </div>
                </div>
              </div>
              <div className="border-t border-[#d3dfe9] p-7">
                <div className="text-[10.5px] uppercase tracking-[0.14em] text-navy/50">
                  {featuredLead.category}
                </div>
                <h3 className="mt-3.5 text-[26px] font-semibold tracking-[-0.022em] text-ink">
                  {featuredLead.name}
                </h3>
                <p className={`mt-2.5 text-[17px] font-medium leading-[1.45] ${featuredLead.accentText}`}>
                  {featuredLead.tagline}
                </p>
                <p className="mt-4 max-w-[52ch] text-[15.5px] leading-[1.6] text-navy/70">
                  {featuredLead.description}
                </p>
              </div>
            </Link>

            <div className="grid gap-5">
              {featuredRest.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  className="grid overflow-hidden border border-[#d3dfe9] bg-white transition hover:-translate-y-0.5 hover:border-teal hover:shadow-[0_14px_32px_-26px_rgba(4,20,40,0.45)] sm:grid-cols-[168px_minmax(0,1fr)]"
                >
                  <div className="relative min-h-[158px] overflow-hidden border-b border-[#d3dfe9] bg-[#071522] sm:border-b-0 sm:border-r">
                    <Image
                      src={product.image}
                      alt={`${product.name} product cover art`}
                      fill
                      className="object-cover"
                      style={{ objectPosition: product.objectPosition }}
                      sizes="(max-width: 639px) 100vw, 168px"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,20,40,0.05)_0%,rgba(4,20,40,0.12)_32%,rgba(4,20,40,0.9)_100%)]" />
                    <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2">
                      <Image
                        src={product.mark}
                        alt=""
                        aria-hidden="true"
                        width={30}
                        height={30}
                        className="h-[30px] w-[30px]"
                      />
                      <span className="border border-white/15 bg-black/20 px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-white/78 backdrop-blur-sm">
                        {product.access}
                      </span>
                    </div>
                    <div className="absolute inset-x-3 bottom-3">
                      <div className="text-[16px] font-semibold leading-[1.05] tracking-[-0.02em] text-white">
                        {product.name}
                      </div>
                      <div className="mt-1 text-[9px] uppercase tracking-[0.12em] text-white/60">
                        {product.detail}
                      </div>
                      <div className="mt-1 flex flex-wrap gap-1.5">
                        {product.chips.map((chip) => (
                          <span
                            key={chip.label}
                            className={`px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] ${chip.className}`}
                          >
                            {chip.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-5 sm:px-[22px]">
                    <div className="flex items-center gap-2.5">
                      <span className={`h-2 w-2 ${product.accent}`} />
                      <span className="text-[10px] uppercase tracking-[0.14em] text-navy/50">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="mt-2.5 text-[18.5px] font-semibold tracking-[-0.014em] text-ink">
                      {product.name}
                    </h3>
                    <p className={`mt-1.5 text-[14.5px] font-medium leading-[1.45] ${product.accentText}`}>
                      {product.tagline}
                    </p>
                    <p className="mt-2.5 text-[14px] leading-[1.55] text-navy/65">
                      {product.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/marketplace/house-hackers"
            className="mt-5 grid overflow-hidden border border-[#d3dfe9] bg-[#071522] transition hover:border-indigo hover:shadow-[0_14px_32px_-26px_rgba(4,20,40,0.45)] md:grid-cols-[minmax(220px,0.42fr)_minmax(0,1fr)]"
          >
            <div className="relative min-h-[210px] overflow-hidden border-b border-white/10 md:border-b-0 md:border-r md:border-white/10">
              <Image
                src={houseHackersCallout.image}
                alt="House Hackers product cover art"
                fill
                className="object-cover"
                style={{ objectPosition: houseHackersCallout.objectPosition }}
                sizes="(max-width: 767px) 100vw, 28vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,16,48,0.14)_0%,rgba(11,16,48,0.3)_35%,rgba(11,16,48,0.88)_100%)]" />
              <div className="absolute left-4 top-4 flex items-center gap-2.5">
                <Image
                  src={houseHackersCallout.mark}
                  alt=""
                  aria-hidden="true"
                  width={34}
                  height={34}
                  className="h-[34px] w-[34px]"
                />
                <span className="border border-white/15 bg-black/20 px-2 py-1 text-[9px] uppercase tracking-[0.12em] text-white/78 backdrop-blur-sm">
                  App Store · Google Play
                </span>
              </div>
            </div>
            <div className="bg-white p-6 md:px-7">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 bg-[#8298fc]" />
                <span className="text-[10px] uppercase tracking-[0.14em] text-navy/50">
                  Play, Practice, and Explore
                </span>
              </div>
              <h3 className="mt-3 text-[24px] font-semibold tracking-[-0.02em] text-ink">
                House Hackers
              </h3>
              <p className="mt-2 text-[16px] font-medium leading-[1.45] text-[#4a67ce]">
                Learn by playing.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-[#d4a017] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#041428]">
                  Equity
                </span>
                <span className="bg-[#386641] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white">
                  Cash flow
                </span>
                <span className="bg-[#d84343] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-white">
                  Debt
                </span>
              </div>
              <p className="mt-4 max-w-[54ch] text-[15px] leading-[1.6] text-navy/70">
                Use simulation and game mechanics to practice real-estate and readiness concepts
                through action, with visible equity, cash-flow, and debt tradeoffs.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-ink bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:64px_64px] py-[100px]">
        <div className={`${shell} grid gap-14 xl:grid-cols-2`}>
          <div>
            <div className="flex items-center gap-3.5">
              <span className="text-[11px] font-semibold text-mint">04</span>
              <span className="h-px w-[30px] bg-mint/60" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-mint">
                Built for organizations that build impact
              </span>
            </div>
            <h2 className="mt-6 max-w-[20ch] text-[clamp(32px,3.6vw,46px)] font-semibold leading-[1.04] tracking-[-0.035em] text-white">
              Turn your mission into a digital platform.
            </h2>
            <p className="mt-5 max-w-[52ch] text-[17.5px] leading-[1.6] text-white/70">
              ConstructFi works with nonprofits, government agencies, institutions, and private
              organizations to create custom mobile and web experiences that connect people to
              programs, resources, education, services, and opportunity.
            </p>
            <div className="mt-8">
              <Link
                href="/partners"
                className={`${lightButton} bg-mint text-ink hover:bg-mint-3 focus-visible:outline-mint`}
              >
                Explore Partner Solutions →
              </Link>
            </div>
          </div>

          <div>
            <p className="max-w-[24ch] text-[26px] font-medium leading-[1.35] tracking-[-0.02em] text-white">
              Your mission. Your community. Your platform. Built on ConstructFi.
            </p>
            <div className="mt-8 grid">
              {partnerSolutions.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-3.5 border-t border-white/10 py-[13px] text-[15.5px] text-white/80"
                >
                  <span className="shrink-0 text-[10.5px] text-mint">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="participation" className="scroll-mt-28 border-b border-line py-[92px]">
        <div className={`${shell} grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.9fr)]`}>
          <div>
            <div className={sectionLabel}>
              <span className="font-semibold text-teal">05</span> Participation
            </div>
            <h2 className="mt-6 text-[clamp(30px,3.2vw,42px)] font-semibold leading-[1.06] tracking-[-0.032em] text-ink">
              Participation that grows with the ecosystem.
            </h2>
            <p className="mt-[18px] max-w-[56ch] text-[17.5px] leading-[1.65] text-navy/70">
              ConstructFi is building a participation layer designed to recognize eligible
              activity across connected products and communities. COVI and ELUV may support
              access, engagement, learning, and defined member benefits as the ecosystem evolves.
            </p>
            <div className="mt-[26px]">
              <Link
                href="/whitepaper"
                className="border-b border-teal/40 pb-[3px] text-[11.5px] uppercase tracking-[0.1em] text-teal"
              >
                How participation works →
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            {participationCards.map((card) => (
              <div
                key={card.title}
                className={`border border-line bg-gradient-to-b ${card.accent} p-[26px] transition ${card.border}`}
              >
                <div className="flex gap-5">
                  <Image
                    src={card.image}
                    alt={`${card.title} token artwork`}
                    width={76}
                    height={76}
                    className="h-[76px] w-[76px] shrink-0"
                  />
                  <div>
                    <h3 className="text-[24px] font-semibold tracking-[-0.022em] text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-navy/50">
                      {card.label}
                    </p>
                    <p className="mt-2.5 text-[15px] leading-[1.6] text-navy/70">{card.body}</p>
                    <p className="mt-3 border-t border-[#eef3f8] pt-3 text-[14px] leading-[1.55] text-navy/60">
                      {card.quote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="overflow-hidden border border-line">
              <Image
                src="/img/readiness.png"
                alt="ConstructFi readiness preview"
                width={1024}
                height={1536}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-wash py-[104px]">
        <div className={shell}>
          <h2 className="max-w-[22ch] text-[clamp(34px,4.2vw,52px)] font-semibold leading-[1.02] tracking-[-0.038em] text-ink">
            Start with what you need. Build what comes next.
          </h2>
          <p className="mt-[22px] max-w-[62ch] text-[18px] leading-[1.6] text-navy/70">
            ConstructFi is the connected ecosystem for construction and real estate. Explore
            powerful tools, marketplaces, learning, and experiences built for the people who make
            the built world move.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/marketplace"
              className={`${lightButton} bg-ink text-white hover:bg-ink-2 focus-visible:outline-ink`}
            >
              Explore Marketplace
            </Link>
            <Link
              href="/partners"
              className={`${lightButton} border border-ink text-ink hover:bg-white focus-visible:outline-ink`}
            >
              Build With ConstructFi
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
