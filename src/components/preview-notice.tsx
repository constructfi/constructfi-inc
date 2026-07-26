import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

// Reusable "this is not live data" notice used by the dashboard previews.
// Compliance: every demo figure on this site must be visibly labeled illustrative.
export function PreviewNotice({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-2xl border border-gold/30 bg-gold/[0.07] px-4 py-3 text-sm",
        className
      )}
      role="note"
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold dark:text-gold-2" aria-hidden />
      <p className="text-foreground/85">{children}</p>
    </div>
  );
}
