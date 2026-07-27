import { cn } from "@/lib/utils";

/**
 * Official ConstructFi emblem — a multi-tone building/skyline mark from the
 * ConstructFi Branding Guide. Brand colors are fixed (they read on both light
 * and dark surfaces), so the emblem never recolors with the theme.
 *   Sky #1bb6fd · Teal #019599 · Emerald #00d19a · Indigo #4a67ce · Periwinkle #8298fc
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="255.61 255.59 568.79 568.79"
      className={cn("h-8 w-auto", className)}
      role="img"
      aria-label="ConstructFi logo mark"
    >
      <path
        fill="#1bb6fd"
        d="M587.86,792.38v1s-235.86,0-235.86,1v-239l81.92-47.49V661.32c0-.55,63.13-.8,124.08-.92V792.84C558,792.66,570.11,792.51,587.86,792.38Z"
      />
      <path
        fill="#019599"
        d="M587.86,418.68V603.22L558,620.54V660.4c-60.95.12-124.08.37-124.08.92V507.9Z"
      />
      <polygon
        fill="#00d19a"
        points="669.81 285.59 669.81 555.7 587.86 603.22 587.86 418.68 433.92 507.9 433.92 422.33 669.81 285.59"
      />
      <path
        fill="#4a67ce"
        d="M669.81,555.7V660.27s-37.13,0-81.95.07v132c-17.75.13-29.86.28-29.86.46V620.54l29.86-17.32Z"
      />
      <path
        fill="#8298fc"
        d="M728,522V792.08s-91.36,0-140.14.3v-132c44.82-.07,81.95-.07,81.95-.07V555.7Z"
      />
    </svg>
  );
}

/**
 * Full ConstructFi lockup: emblem + wordmark. Wordmark inherits currentColor
 * (dark on light surfaces, white on dark) with the "Fi" set in brand emerald,
 * matching the official lockup artwork.
 */
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
      <span className="font-display text-[1.2rem] font-bold leading-none tracking-tight">
        Construct<span className="text-mint">Fi</span>
      </span>
    </span>
  );
}
