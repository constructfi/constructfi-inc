import { cn } from "@/lib/utils";

/** COVI — ERC-20 utility token mark. */
export function CoviCoin({ className }: { className?: string }) {
  return (
    <svg className={cn("coin", className)} viewBox="0 0 64 64" role="img" aria-label="COVI coin">
      <defs>
        <linearGradient id="coviG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0AE8AE" />
          <stop offset="1" stopColor="#00A87C" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="31" fill="url(#coviG)" />
      <circle cx="32" cy="32" r="26" fill="none" stroke="#04231A" strokeOpacity=".35" strokeWidth="2" />
      <path
        d="M41 24.5a12 12 0 1 0 0 15"
        fill="none"
        stroke="#04231A"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** ELUV — ERC-5192 soulbound credential mark. */
export function EluvCoin({ className }: { className?: string }) {
  return (
    <svg className={cn("coin", className)} viewBox="0 0 64 64" role="img" aria-label="ELUV credential">
      <defs>
        <linearGradient id="eluvG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F5C36B" />
          <stop offset="1" stopColor="#DB8A0E" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="31" fill="url(#eluvG)" />
      <circle cx="32" cy="32" r="26" fill="none" stroke="#3A2503" strokeOpacity=".35" strokeWidth="2" />
      <path
        d="M25 21v15.5A7.5 7.5 0 0 0 32.5 44h6.5"
        fill="none"
        stroke="#3A2503"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Build or Bust app icon, redrawn from the Jul 16 inline SVG. */
export function BobMark({ className }: { className?: string }) {
  return (
    <svg
      className={cn("bob-mark", className)}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Build or Bust app icon"
    >
      <defs>
        <linearGradient id="bobIgnite" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0AE8AE" />
          <stop offset="1" stopColor="#00B487" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="64" height="64" rx="15" fill="#0E1420" />
      <rect x="1" y="1" width="62" height="62" rx="14" fill="none" stroke="url(#bobIgnite)" strokeWidth="1.5" opacity=".55" />
      <rect x="15" y="38" width="7" height="12" rx="2" fill="url(#bobIgnite)" />
      <rect x="26" y="31" width="7" height="19" rx="2" fill="url(#bobIgnite)" />
      <rect x="37" y="24" width="7" height="26" rx="2" fill="url(#bobIgnite)" />
      <path d="M17 33 L30 24 L38 28 L49 16" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M43 15 H50 V22" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
