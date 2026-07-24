import { Apple, Play } from "lucide-react";

// Honest, non-clickable store badges. The apps are not yet published, so these
// are clearly labeled "Coming soon" and are NOT presented as working links.
// When the founder provides real store URLs, wrap each in an <a href>. See BUILD_NOTES.
export function StoreBadges({ phase = "Phase 1" }: { phase?: string }) {
  const badges = [
    { icon: Apple, store: "App Store", os: "iOS" },
    { icon: Play, store: "Google Play", os: "Android" },
  ];
  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {badges.map((b) => (
          <div
            key={b.store}
            role="img"
            aria-label={`${b.store} — coming soon`}
            className="flex cursor-default items-center gap-3 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 opacity-80"
            data-testid={`badge-${b.store.toLowerCase().replace(/\s+/g, "-")}`}
          >
            <b.icon className="h-6 w-6 text-white/80" />
            <span className="text-left leading-tight">
              <span className="block text-[0.65rem] uppercase tracking-wide text-white/50">
                Coming soon · {phase}
              </span>
              <span className="block text-sm font-medium text-white">{b.store}</span>
            </span>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-white/45">
        Mobile apps launch in {phase}. Store links go live at release.
      </p>
    </div>
  );
}
