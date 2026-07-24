import { cn } from "@/lib/utils";

// Custom inline SVG logo: mint→sky split square mark + "ConstructFi" with mint "Fi".
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-7 w-7", className)}
      role="img"
      aria-label="ConstructFi logo mark"
    >
      <defs>
        <linearGradient id="cf-mint" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2BC5A0" />
          <stop offset="100%" stopColor="#0E9F8A" />
        </linearGradient>
        <linearGradient id="cf-sky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1E9FC9" />
          <stop offset="100%" stopColor="#14325A" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="30" height="30" rx="7" fill="#0B1930" />
      {/* Split square: top-left mint triangle, bottom-right sky triangle */}
      <path d="M8 8 H24 V24 Z" fill="url(#cf-sky)" opacity="0.95" />
      <path d="M8 8 H24 L8 24 Z" fill="url(#cf-mint)" />
      {/* Upward build tick */}
      <path
        d="M11 20 L16 13 L21 20"
        fill="none"
        stroke="#0B1930"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className={markClassName} />
      <span className="font-display text-[1.15rem] font-bold tracking-tight">
        Construct<span className="text-mint">Fi</span>
      </span>
    </span>
  );
}
