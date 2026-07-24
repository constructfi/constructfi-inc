import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { StoreBadges } from "@/components/store-badges";

export function AppTeaser() {
  return (
    <section className="ink-surface relative overflow-hidden py-16 text-white sm:py-24">
      <div className="bg-grid-fine absolute inset-0 opacity-20" aria-hidden />
      <div className="container relative">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal delay={0.05}>
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/img/readiness.png"
                alt="Education-to-ownership progression path"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <div>
              <Eyebrow>See ConstructFi in action</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                One app to participate, build readiness, and earn
              </h2>
              <p className="mt-4 text-white/70">
                <span className="font-semibold text-mint">Build or Bust</span>, the
                platform&apos;s first mobile app: answer a few questions about a
                property and get a clear verdict — the numbers, the gates it cleared,
                and a financing-readiness read. Every completed analysis earns COVI
                and builds your soulbound ELUV record.
              </p>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/app" data-testid="link-app">
                    How Build or Bust works
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="mt-6">
                <StoreBadges />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
