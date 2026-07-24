import type { WPBlock, WPChapter } from "@/lib/whitepaper";
import { cn } from "@/lib/utils";

function Block({ b }: { b: WPBlock }) {
  switch (b.type) {
    case "p":
      return <p className="mb-4 leading-relaxed text-foreground/85">{b.text}</p>;
    case "h3":
      return (
        <h3 className="mb-2 mt-8 text-lg font-semibold text-navy dark:text-white">
          {b.text}
        </h3>
      );
    case "list":
      return (
        <ul className="mb-4 space-y-2">
          {b.items?.map((it, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mint" aria-hidden />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "callout": {
      const variant = b.variant ?? "teal";
      const styles = {
        teal: "border-teal bg-teal/[0.06] [&_.ct]:text-teal dark:[&_.ct]:text-mint",
        gold: "border-gold bg-gold/[0.07] [&_.ct]:text-gold dark:[&_.ct]:text-gold-2",
        risk: "border-[#8A3B2F] bg-[#8A3B2F]/[0.07] [&_.ct]:text-[#B45B4A]",
      }[variant];
      return (
        <div className={cn("my-6 rounded-r-lg border-l-[3px] px-4 py-3.5", styles)}>
          {b.title && (
            <div className="ct mb-1 text-xs font-semibold uppercase tracking-wider">
              {b.title}
            </div>
          )}
          <p className="text-sm leading-relaxed text-foreground/85">{b.text}</p>
        </div>
      );
    }
    case "table":
      return (
        <div className="my-6 overflow-x-auto rounded-lg border border-line dark:border-border">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-navy text-white">
                {b.headers?.map((h, i) => (
                  <th key={i} className="px-3.5 py-2.5 text-left font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows?.map((row, ri) => (
                <tr
                  key={ri}
                  className="border-t border-line odd:bg-wash dark:border-border dark:odd:bg-ink-2/40"
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={cn(
                        "px-3.5 py-2.5 align-top text-foreground/85",
                        ci === 0 && "font-medium text-navy dark:text-white"
                      )}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export function WhitepaperBody({ chapters }: { chapters: WPChapter[] }) {
  return (
    <div>
      {chapters.map((c) => (
        <section key={c.id} id={c.id} className="scroll-mt-24 border-t border-line py-10 first:border-t-0 first:pt-0 dark:border-border">
          <div className="mb-6 flex items-baseline gap-4">
            <span className="font-mono text-4xl font-bold text-mint/25">
              {String(c.n).padStart(2, "0")}
            </span>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-navy dark:text-white">
                {c.title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{c.dek}</p>
            </div>
          </div>
          {c.blocks.map((b, i) => (
            <Block key={i} b={b} />
          ))}
        </section>
      ))}
    </div>
  );
}
