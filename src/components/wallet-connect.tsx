"use client";

import { useAccount, useDisconnect } from "wagmi";
import { useAppKit } from "@reown/appkit/react";
import { base } from "@reown/appkit/networks";
import { Wallet, LogOut, ShieldAlert } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function shortAddr(addr?: string) {
  if (!addr) return "";
  return `${addr.slice(0, 6)}…${addr.slice(-4)}`;
}

export function WalletConnect({
  className,
  size = "sm",
  disconnectedLabel = "Connect wallet",
  disconnectedVariant = "default",
  connectedVariant = "outline",
  disconnectVariant = "ghost",
  disconnectedClassName,
  connectedClassName,
  disconnectClassName,
  hideDisconnectedIcon = false,
  hideDisconnectButton = false,
}: {
  className?: string;
  size?: ButtonProps["size"];
  disconnectedLabel?: string;
  disconnectedVariant?: ButtonProps["variant"];
  connectedVariant?: ButtonProps["variant"];
  disconnectVariant?: ButtonProps["variant"];
  disconnectedClassName?: string;
  connectedClassName?: string;
  disconnectClassName?: string;
  hideDisconnectedIcon?: boolean;
  hideDisconnectButton?: boolean;
}) {
  const { open } = useAppKit();
  const { address, isConnected, chainId } = useAccount();
  const { disconnect } = useDisconnect();

  if (!isConnected) {
    return (
      <Button
        size={size}
        variant={disconnectedVariant}
        onClick={() => open()}
        className={cn("gap-2", disconnectedClassName, className)}
        data-testid="button-connect-wallet"
      >
        {!hideDisconnectedIcon && <Wallet className="h-4 w-4" />}
        {disconnectedLabel}
      </Button>
    );
  }

  const wrongNetwork = chainId !== base.id;

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Button
        variant={connectedVariant}
        size={size}
        onClick={() => open({ view: "Account" })}
        className={cn("gap-2 font-mono text-xs", connectedClassName)}
        data-testid="button-wallet-account"
      >
        {wrongNetwork ? (
          <ShieldAlert className="h-4 w-4 text-gold" />
        ) : (
          <span className="h-2 w-2 rounded-full bg-mint" aria-hidden />
        )}
        {shortAddr(address)}
      </Button>
      {!hideDisconnectButton && (
        <Button
          variant={disconnectVariant}
          size="icon"
          onClick={() => disconnect()}
          aria-label="Disconnect wallet"
          className={disconnectClassName}
          data-testid="button-disconnect-wallet"
        >
          <LogOut className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
