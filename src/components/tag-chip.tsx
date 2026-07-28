import { cn } from "@/lib/utils";

// Tint by what the tag is about: COVI green, ELUV gold, everything else neutral.
// Tags mentioning both fall to ELUV gold so the soulbound side stays visible.
function tintFor(tag: string) {
  if (/ELUV/i.test(tag)) return "eluv";
  if (/COVI/i.test(tag)) return "covi";
  if (/free/i.test(tag)) return "free";
  return undefined;
}

export function TagChip({ tag, className }: { tag: string; className?: string }) {
  return (
    <span className={cn("chip", tintFor(tag), className)}>{tag}</span>
  );
}

export function TagChips({ tags }: { tags: string[] }) {
  return (
    <div className="tag-row">
      {tags.map((t) => (
        <TagChip key={t} tag={t} />
      ))}
    </div>
  );
}
