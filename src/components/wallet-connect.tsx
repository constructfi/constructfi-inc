"use client";

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
}: {
  className?: string;
  size?: "sm" | "default" | "lg";
}) {
  const { open } = useAppKit();
  const { address, isConnected, chainId } = useAccount();
  const { disconnect } = useDisconnect();

  if (!isConnected) {
    return (
      <Button
        size={size}
        onClick={() => open()}
        className={cn("gap-2", className)}
        data-testid="button-connect-wallet"
      >
        <Wallet className="h-4 w-4" />
        Connect wallet
      </Button>
    );
  }

  const wrongNetwork = chainId !== base.id;

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
