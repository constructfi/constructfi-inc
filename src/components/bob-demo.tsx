/**
 * The Build or Bust prototype, embedded from public/demos/build-or-bust.html.
 *
 * Same-origin static file, so no sandbox attribute: the prototype draws to
 * <canvas> and generates file downloads, both of which a sandbox would break.
 */
export function BobDemo({ children }: { children?: React.ReactNode }) {
  return (
    <div className="demo-wrap">
      <div>
        <div className="demo-phone" data-testid="demo-phone">
          <iframe
            src="/demos/build-or-bust.html"
            title="Build or Bust interactive prototype — demonstration data"
            data-testid="demo-iframe"
          />
        </div>
        <p className="demo-cap">
          <span className="chip demo">Demo</span>
          Interactive prototype · demonstration data
        </p>
      </div>
      {children}
    </div>
  );
}
