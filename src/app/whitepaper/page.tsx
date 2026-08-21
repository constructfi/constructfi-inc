import type { Metadata } from "next";
import Link from "next/link";
import { Download, Github, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WP_CHAPTERS, WP_META } from "@/lib/whitepaper";
import { SITE } from "@/lib/site";
import { WhitepaperBody } from "@/components/whitepaper-body";

export const metadata: Metadata = {
  title: "Whitepaper",
  description:
    "The complete ConstructFi whitepaper (v2.1): two-token model (COVI ERC-20, ELUV ERC-5192 soulbound), tokenomics, fee-recycling economics, governance, security, compliance, roadmap, and risk factors.",
  openGraph: {
    title: "ConstructFi Whitepaper v2.1",
    description:
      "COVI moves. ELUV proves. The complete technical and economic overview of the ConstructFi platform.",
    url: `${SITE.url}/whitepaper`,
    images: [{ url: "/og/whitepaper.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "/whitepaper" },
};

export default function WhitepaperPage() {
  return (
    <>
      {/* Header band */}
      <section className="ink-surface relative overflow-hidden text-white">
        <div className="bg-grid absolute inset-0 opacity-25" aria-hidden />
        <div className="container relative py-16 sm:py-20">
          <Badge className="bg-mint/15 text-mint">
            Whitepaper · Version {WP_META.version} · {WP_META.date}
          </Badge>
          <h1 className="mt-5 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            {WP_META.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/70">
            {WP_META.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <a
                href="/ConstructFi_Whitepaper_v2.1.pdf"
                download
                data-testid="button-download-pdf"
              >
                <Download className="mr-1.5 h-4 w-4" />
                Download PDF
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <a
                href={SITE.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-github"
              >
                <Github className="mr-1.5 h-4 w-4" />
                View on GitHub
                <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link href="/developers">
                Developers
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link href="/partners">
                Partner Solutions
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container py-14">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
          {/* Table of contents */}
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Contents
            </h2>
            <nav className="mt-4 space-y-1" aria-label="Whitepaper chapters">
              {WP_CHAPTERS.map((c) => (
                <Link
                  key={c.id}
                  href={`#${c.id}`}
                  className="flex gap-3 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <span className="font-mono text-xs text-mint">
                    {String(c.n).padStart(2, "0")}
                  </span>
                  <span className="leading-tight">{c.title}</span>
                </Link>
              ))}
            </nav>
          </aside>

          {/* Chapters */}
          <div className="min-w-0 max-w-3xl">
            <WhitepaperBody chapters={WP_CHAPTERS} />
            <div className="mt-14 rounded-2xl border border-line bg-card p-6 shadow-sm dark:border-border">
              <h2 className="text-2xl font-bold text-navy dark:text-white">
                Want the implementation paths too?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                The whitepaper covers thesis and architecture. The Developers and
                Partner Solutions pages show how those ideas map to integrations,
                branded programs, and maintained operating infrastructure.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/developers">Visit Developers</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/partners">Partner Solutions</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
