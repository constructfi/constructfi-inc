"use client";

import { createAppKit } from "@reown/appkit/react";
import { base, mainnet } from "@reown/appkit/networks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { wagmiAdapter, projectId, networks } from "@/lib/web3-config";

const queryClient = new QueryClient();

// Initialize Reown AppKit once at module scope (client-only).
createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks,
  defaultNetwork: base,
  metadata: {
    name: "ConstructFi",
    description: "COVI moves. ELUV proves. From participation to ownership.",
    url: "https://constructfi.co",
    icons: ["https://constructfi.co/icon.png"],
  },
  features: {
    analytics: false,
    email: false,
    socials: false,
  },
  themeMode: "dark",
  themeVariables: {
    "--w3m-accent": "#00d19a",
    "--w3m-border-radius-master": "3px",
    "--w3m-font-family": "var(--font-poppins), system-ui, sans-serif",
  },
});

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
