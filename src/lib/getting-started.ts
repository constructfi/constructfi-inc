import {
  Wallet,
  BadgeCheck,
  Gamepad2,
  LineChart,
  Store,
} from "lucide-react";
import { SITE } from "@/lib/site";

export const STEPS = [
  {
    n: "01",
    icon: Wallet,
    title: "Connect a wallet on Base",
    body: "ConstructFi is non-custodial. Use any wallet supported by Reown / WalletConnect — including MetaMask, Coinbase Wallet, or Rainbow — connected to the Base network. You keep control of your keys at all times; the platform never takes custody.",
    note: "Wallet connection is available in the site header today.",
  },
  {
    n: "02",
    icon: BadgeCheck,
    title: "Complete verification (KYC / allowlist)",
    body: "Any compliant COVI distribution requires identity verification and allowlisting. Verification also unlocks milestone review, since ELUV credentials attest to a real person’s verified progress.",
    note: "Verification opens ahead of launch on " + SITE.launchDate + ".",
  },
  {
    n: "03",
    icon: Gamepad2,
    title: "Start with Build or Bust",
    body: "Analyze a property, work through education modules, and submit your first verified activity. Completed, reviewed work earns COVI participation rewards and can mint your first ELUV milestone.",
    note: "ELUV is earned only — it is never sold.",
  },
  {
    n: "04",
    icon: LineChart,
    title: "Track progress on your dashboard",
    body: "Your dashboard collects COVI activity, verified ELUV milestones, and readiness progression toward the next tier. Tiers advance only through verified work.",
    note: "A preview of the dashboard is available now.",
  },
  {
    n: "05",
    icon: Store,
    title: "Participate in the marketplace",
    body: "Procure materials and services from the verified supplier network. Marketplace fees recycle into the rewards pool, so participation is funded by genuine commerce rather than token printing.",
    note: "Marketplace launches " + SITE.launchDate + ".",
  },
] as const;
