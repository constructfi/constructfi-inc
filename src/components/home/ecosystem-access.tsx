"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CreditCard, ShieldCheck } from "lucide-react";
import { useAppKit } from "@reown/appkit/react";
import { useAccount } from "wagmi";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type CardBase = {
  title: string;
  sub: string;
  chip: string;
};

const TOKENS: (CardBase & { coin: string; accent: "covi" | "eluv" })[] = [
  {
    title: "COVI",
    sub: "Commerce & rewards · fixed 10B",
    chip: "Earned + limited sale",
    coin: "/coins/covi.png",
    accent: "covi",
  },
  {
    title: "ELUV",
    sub: "Soulbound readiness · fixed 3B",
    chip: "Earned only · never sold",
    coin: "/coins/eluv.png",
    accent: "eluv",
  },
];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-dashed border-line px-3 py-1 font-mono text-xs text-muted-foreground dark:border-white/20">
      {children}
    </span>
  );
}

function shortAddr(addr?: string) {
  if (!addr) return "";
  return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
}

export function EcosystemAccess() {
  const { open } = useAppKit();
  const { address, isConnected } = useAccount();

  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <Reveal>
          <div className="rounded-3xl border border-line bg-wash/60 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03] sm:p-10">
            {/* Header row */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-bold tracking-tight text-navy dark:text-white">
                Access the ecosystem
              </h2>
              <span className="inline-flex items-center rounded-full border border-mint/40 bg-mint/10 px-3 py-1 text-xs font-semibold text-teal dark:text-mint">
                Non-custodial
              </span>
            </div>

            {/* Cards */}
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {TOKENS.map((t) => (
                <div
                  key={t.title}
                  className="rounded-2xl border border-line/70 bg-white/70 p-6 dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <div
                    className={cn(
                      "flex h-16 w-16 items-center justify-center rounded-2xl",
                      t.accent === "covi"
                        ? "bg-mint/10 dark:bg-mint/10"
                        : "bg-gold/10 dark:bg-gold/10"
                    )}
                  >
                    <Image
                      src={t.coin}
                      alt={`${t.title} coin`}
                      width={52}
                      height={52}
                      className="h-12 w-12 object-contain drop-shadow-sm"
                    />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy dark:text-white">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{t.sub}</p>
                  <div className="mt-4">
                    <Chip>{t.chip}</Chip>
                  </div>
                </div>
              ))}

              {/* Wallet card */}
              <div className="rounded-2xl border border-line/70 bg-white/70 p-6 dark:border-white/10 dark:bg-white/[0.04]">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky/10">
                  <CreditCard className="h-7 w-7 text-sky" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy dark:text-white">
                  Non-custodial wallet
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Reown · WalletConnect · MetaMask
                </p>
                <div className="mt-4">
                  <Chip>
                    <ShieldCheck className="mr-1.5 h-3.5 w-3.5 text-mint" />
                    Your keys, always
                  </Chip>
                </div>
              </div>
            </div>

            {/* Footer row */}
            <div className="mt-8 border-t border-dashed border-line pt-5 dark:border-white/10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-muted-foreground">
                  Manage assets, track rewards, participate anywhere.
                </p>
                <button
                  type="button"
                  onClick={() =>
                    open({ view: isConnected ? "Account" : "Connect" })
                  }
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal transition-colors hover:text-mint dark:text-mint dark:hover:text-mint/80"
                  data-testid="button-ecosystem-explore"
                >
                  {isConnected ? shortAddr(address) : "Explore"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
