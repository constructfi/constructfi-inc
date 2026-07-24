import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden ink-surface text-white">
      <Image
        src="/img/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-right opacity-70 [mask-image:linear-gradient(90deg,transparent,black_45%)]"
      />
      <div className="bg-grid absolute inset-0 opacity-30" aria-hidden />
      <div className="container relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          <Badge variant="default" className="bg-mint/15 text-mint">
            <ShieldCheck className="mr-1.5 h-3.5 w-3.5" />
            Public launch · {SITE.launchDate}
          </Badge>
          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            From participation
            <br className="hidden sm:block" /> to{" "}
            <span className="text-gradient-brand">ownership.</span>
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/75">
            A programmable economic-participation platform built on two operating
            businesses — real transactions, real counterparties, real fee revenue.
            Two tokens coordinate it all:{" "}
            <span className="font-semibold text-mint">COVI moves.</span>{" "}
            <span className="font-semibold text-gold-2">ELUV proves.</span>
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <Link href="/app" data-testid="cta-hero-primary">
                Start participating
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link href="/whitepaper" data-testid="cta-hero-whitepaper">
                Read the whitepaper
              </Link>
            </Button>
          </div>
          <p className="mt-5 text-sm text-white/50">
            Non-custodial · KYC/AML on any sale · Contracts published after independent audit
          </p>
        </div>
      </div>
    </section>
  );
}
