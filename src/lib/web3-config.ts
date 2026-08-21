import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { base, mainnet } from "@reown/appkit/networks";
import type { AppKitNetwork } from "@reown/appkit/networks";

// Reown/WalletConnect project ID. A public placeholder is used for the preview
// build; the founder must supply a real projectId from https://dashboard.reown.com
// before production launch. See BUILD_NOTES.md.
export const projectId =
  process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || "b56e18d47c72ab683b10814fe9495694";

// Base is the primary chain (COVI built on Base, settled to Ethereum L1).
export const networks: [AppKitNetwork, ...AppKitNetwork[]] = [base, mainnet];

export const wagmiAdapter = new WagmiAdapter({
  ssr: false,
  projectId,
  networks,
});

export const wagmiConfig = wagmiAdapter.wagmiConfig;
