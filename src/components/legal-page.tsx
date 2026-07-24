import Link from "next/link";
import { FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  EFFECTIVE_DATE,
  IS_EFFECTIVE,
  type LegalDoc,
} from "@/lib/legal";

const OTHER: { slug: string; label: string }[] = [
  { slug: "terms", label: "Terms of Use" },
  { slug: "privacy", label: "Privacy Policy" },
  { slug: "risk", label: "Risk Disclosure" },
];

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <section className="ink-surface relative overflow-hidden text-white">
        <div className="bg-grid-fine absolute inset-0 opacity-20" aria-hidden />
        <div className="container relative py-14 sm:py-16">
          <div className="flex items-center gap-2 text-mint">
            <FileText className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Legal
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {doc.title}
          </h1>
          <p className="mt-3 max-w-2xl text-white/70">{doc.summary}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/60">
            <span>
              Effective date:{" "}
              <span className="font-medium text-white">{EFFECTIVE_DATE}</span>
            </span>
            {!IS_EFFECTIVE && (
              <Badge className="bg-gold/20 text-gold-2">
                Draft — not yet effective
              </Badge>
            )}
          </div>
        </div>
      </section>

      <div className="container py-14">
        <div className="grid gap-12 lg:grid-cols-[200px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:h-fit">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Legal documents
            </h2>
            <nav className="mt-3 space-y-1">
              {OTHER.map((o) => (
                <Link
                  key={o.slug}
                  href={`/legal/${o.slug}`}
                  className={`block rounded-md px-2 py-1.5 text-sm transition-colors ${
                    o.slug === doc.slug
                      ? "bg-muted font-medium text-teal dark:text-mint"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {o.label}
                </Link>
              ))}
            </nav>
          </aside>

          <article className="min-w-0 max-w-3xl">
            {doc.sections.map((s) => (
              <section key={s.heading} className="mb-8">
                <h2 className="mb-3 text-xl font-semibold text-navy dark:text-white">
                  {s.heading}
                </h2>
                {s.paragraphs?.map((p, i) => (
                  <p key={i} className="mb-3 leading-relaxed text-foreground/85">
                    {p}
                  </p>
                ))}
                {s.list && (
                  <ul className="space-y-2">
                    {s.list.map((it, i) => (
                      <li
                        key={i}
                        className="flex gap-3 leading-relaxed text-foreground/85"
                      >
                        <span
                          className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-mint"
                          aria-hidden
                        />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>
        </div>
      </div>
    </>
  );
}
