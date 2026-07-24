import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-24", className)}>
      <div className="container">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-teal dark:text-mint">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-navy dark:text-white sm:text-4xl">
        {title}
      </h2>
      {lede && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {lede}
        </p>
      )}
    </div>
  );
}
