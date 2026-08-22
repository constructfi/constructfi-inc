"use client";

import * as React from "react";
import { useAccount, useDisconnect } from "wagmi";
import { useAppKit } from "@reown/appkit/react";
import { base } from "@reown/appkit/networks";
import { Wallet, LogOut, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function shortAddr(addr?: string) {
  if (!addr) return "";
  return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
}

export function WalletConnect({
  className,
  size = "sm",
  disconnectedLabel = "Connect wallet",
  variant = "default",
}: {
  className?: string;
  size?: "sm" | "default" | "lg";
  disconnectedLabel?: string;
  variant?: "default" | "header";
}) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    if (variant === "header") {
      return (
        <button
          type="button"
          className={cn(
            "inline-flex items-center gap-2 border px-4 py-2 text-sm font-medium transition-colors",
            "border-white/24 text-white hover:border-white/40 hover:bg-white/10",
            className
          )}
          data-testid="button-connect-wallet"
        >
          <Wallet className="h-4 w-4" />
          {disconnectedLabel}
        </button>
      );
    }

    return (
      <Button
        size={size}
        className={cn("gap-2", className)}
        data-testid="button-connect-wallet"
      >
        <Wallet className="h-4 w-4" />
        {disconnectedLabel}
      </Button>
    );
  }

  return (
    <WalletConnectReady
      className={className}
      size={size}
      disconnectedLabel={disconnectedLabel}
      variant={variant}
    />
  );
}

function WalletConnectReady({
  className,
  size = "sm",
  disconnectedLabel = "Connect wallet",
  variant = "default",
}: {
  className?: string;
  size?: "sm" | "default" | "lg";
  disconnectedLabel?: string;
  variant?: "default" | "header";
}) {
  const { open } = useAppKit();
  const { address, isConnected, chainId } = useAccount();
  const { disconnect } = useDisconnect();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    setMenuOpen(false);
  }, [isConnected, address]);

  React.useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  const openWallet = () => {
    setMenuOpen(false);
    open();
  };

  if (variant !== "header" && !isConnected) {
    return (
      <Button
        size={size}
        onClick={openWallet}
        className={cn("gap-2", className)}
        data-testid="button-connect-wallet"
      >
        <Wallet className="h-4 w-4" />
        {disconnectedLabel}
      </Button>
    );
  }

  const wrongNetwork = chainId !== base.id;

  if (variant === "header") {
    return (
      <div className={cn("relative", className)} ref={wrapperRef}>
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className={cn(
            "inline-flex items-center gap-2 border px-4 py-2 text-sm font-medium transition-colors",
            isConnected
              ? "border-mint/40 bg-mint/10 text-white hover:bg-mint/15"
              : "border-white/24 text-white hover:border-white/40 hover:bg-white/10"
          )}
          data-testid={isConnected ? "button-wallet-account" : "button-connect-wallet"}
        >
          {isConnected ? (
            wrongNetwork ? (
              <ShieldAlert className="h-4 w-4 text-gold" />
            ) : (
              <span className="h-2 w-2 rounded-full bg-mint" aria-hidden />
            )
          ) : (
            <Wallet className="h-4 w-4" />
          )}
          {isConnected ? shortAddr(address) : disconnectedLabel}
        </button>
        {menuOpen ? (
          <div className="absolute right-0 top-[calc(100%+10px)] z-30 w-[250px] border border-white/14 bg-[#0b1626] shadow-[0_20px_40px_-12px_rgba(0,0,0,.5)]">
            {isConnected ? (
              <div className="p-4">
                <div className="font-body text-[10px] uppercase tracking-[.14em] text-white/45">
                  Connected · {wrongNetwork ? "Wrong network" : "Base"}
                </div>
                <div className="mt-2 font-body text-sm text-white">{shortAddr(address)}</div>
                <button
                  type="button"
                  onClick={() => {
                    disconnect();
                    setMenuOpen(false);
                  }}
                  className="mt-3 block w-full border border-white/20 px-3 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-white/6"
                  data-testid="button-disconnect-wallet"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <div className="p-2">
                <div className="px-3 py-2 font-body text-[10px] uppercase tracking-[.14em] text-white/45">
                  Non-custodial · Base network
                </div>
                {[
                  { mono: "MM", name: "MetaMask", color: "#e4b95b" },
                  { mono: "CB", name: "Coinbase Wallet", color: "#1bb6fd" },
                  { mono: "WC", name: "WalletConnect", color: "#00d19a" },
                ].map((wallet) => (
                  <button
                    key={wallet.name}
                    type="button"
                    onClick={openWallet}
                    className="flex w-full items-center gap-3 px-3 py-3 text-left text-sm text-white transition-colors hover:bg-white/6"
                  >
                    <span
                      className="inline-flex h-6 w-6 items-center justify-center rounded-[6px] text-[11px] font-bold text-[#041428]"
                      style={{ background: wallet.color }}
                    >
                      {wallet.mono}
                    </span>
                    {wallet.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button
        variant="outline"
        size={size}
        onClick={() => open({ view: "Account" })}
        className="gap-2 font-mono text-xs"
        data-testid="button-wallet-account"
      >
        {wrongNetwork ? (
          <ShieldAlert className="h-4 w-4 text-gold" />
        ) : (
          <span className="h-2 w-2 rounded-full bg-mint" aria-hidden />
        )}
        {shortAddr(address)}
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => disconnect()}
        aria-label="Disconnect wallet"
        data-testid="button-disconnect-wallet"
      >
        <LogOut className="h-4 w-4" />
      </Button>
    </div>
  );
}
