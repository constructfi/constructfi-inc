import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WalletConnect } from "@/components/wallet-connect";

export function FinalCTA() {
  return (
    <section className="ink-surface relative overflow-hidden text-white">
      <div className="bg-grid absolute inset-0 opacity-25" aria-hidden />
      <div className="container relative py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Own a share of what you help build.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Connect a wallet to start participating, or read the whitepaper first.
            Contracts publish after independent audit — no on-chain action is faked
            before then.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <WalletConnect size="lg" />
            <Button
              size="lg"
              variant="outline"
              className="border-white/25 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link href="/whitepaper" data-testid="cta-final-whitepaper">
                Read the whitepaper
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
