"use client";

import { useState } from "react";

const STATES = {
  high: { label: "High Risk", color: "#FF6B7A" },
  review: { label: "Review", color: "#E4B95B" },
  clear: { label: "Clear", color: "#00D19A" },
} as const;

const FINDINGS = [
  {
    clause: "Payment terms",
    state: "high" as const,
    explanation:
      "Payment is due 90 days after invoice with no late-payment penalty on the other side. That is longer than typical and shifts cash-flow risk onto you.",
  },
  {
    clause: "Change-order process",
    state: "review" as const,
    explanation:
      "Change orders must be submitted within 5 business days, which is workable but tight if a site condition surfaces over a weekend.",
  },
  {
    clause: "Indemnification",
    state: "clear" as const,
    explanation: "Mutual indemnification limited to each party's own negligence — standard language, nothing unusual here.",
  },
];

export function PactPilotFindings() {
  const [active, setActive] = useState(0);
  const finding = FINDINGS[active];
  const state = STATES[finding.state];

  return (
    <div>
      <div
        className="card"
        style={{
          marginBottom: 20,
          border: "1px solid rgba(228,185,91,.4)",
          background: "rgba(228,185,91,.06)",
        }}
      >
        <strong style={{ color: "var(--gold)" }}>Not legal advice.</strong>{" "}
        <span style={{ color: "var(--ink2)", fontSize: 13.5 }}>
          PactPilot findings are informational only. Have a licensed attorney review any contract before you sign it.
        </span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)", gap: 24 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {FINDINGS.map((f, i) => {
            const s = STATES[f.state];
            return (
              <button
                key={f.clause}
                onClick={() => setActive(i)}
                className="card"
                style={{
                  textAlign: "left",
                  cursor: "pointer",
                  borderColor: i === active ? `${s.color}88` : "var(--line)",
                  background: i === active ? `${s.color}12` : "var(--panel)",
                  padding: 18,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 700, fontSize: 14.5 }}>{f.clause}</span>
                  <span className="chip" style={{ color: s.color, borderColor: `${s.color}66` }}>
                    {s.label}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="card" style={{ borderLeft: `3px solid ${state.color}` }}>
          <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: ".08em", color: state.color, marginBottom: 8 }}>
            {finding.clause} · {state.label}
          </div>
          <p style={{ fontSize: 14.5, color: "var(--ink2)" }}>{finding.explanation}</p>
        </div>
      </div>
    </div>
  );
}
