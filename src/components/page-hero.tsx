import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <section className="ink-surface relative overflow-hidden text-white">
      <div className="bg-grid absolute inset-0 opacity-25" aria-hidden />
      <div
        className="absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #2BC5A0 0%, transparent 65%)" }}
        aria-hidden
      />
      <div className="container relative py-16 sm:py-20">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-mint">
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
            {lede}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
