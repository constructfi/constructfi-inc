"use client";

import { useState } from "react";

const TEAL = "#00B4CC";

const MODULES = [
  { name: "CRM", writes: "Contacts & Opportunities" },
  { name: "Estimating", writes: "Bids & Takeoffs" },
  { name: "Procurement", writes: "Purchase Orders & Supplier Records" },
  { name: "Logistics", writes: "Deliveries & Dispatch Schedules" },
  { name: "Executive AI", writes: "Reporting Queries & Insights" },
  { name: "Readiness", writes: "Milestones & ELUV Eligibility" },
  { name: "Compliance", writes: "Certifications & Audit Trail" },
  { name: "Reporting", writes: "Dashboards & Exports" },
];

const STAGES = [
  { key: "lead", label: "Lead", module: "CRM", note: "A contact becomes an opportunity." },
  { key: "estimate", label: "Estimate", module: "Estimating", note: "The opportunity gets a priced bid line." },
  { key: "award", label: "Award", module: "Procurement", note: "The bid line becomes a purchase order." },
  { key: "build", label: "Build", module: "Logistics", note: "The purchase order becomes a delivery and a schedule." },
  { key: "closeout", label: "Closeout", module: "Reporting", note: "The job closes and rolls into the executive dashboard." },
];

const AI_SURFACES = [
  { name: "Executive AI Advisor", desc: "Ask a plain-language question and get reporting drawn from your own data." },
  { name: "Scope Intelligence", desc: "Auto-fills estimate line items from a takeoff or a prior job's scope." },
  { name: "Market Intel", desc: "Scores inbound opportunities so the pipeline surfaces the ones worth chasing first." },
];

export function ConstructOSModuleMap() {
  const [stage, setStage] = useState(0);

  return (
    <div>
      <div style={{ marginBottom: 34 }}>
        <h3 style={{ fontSize: 17, marginBottom: 14 }}>Eight modules, one record</h3>
        <div className="grid3" style={{ gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
          {MODULES.map((m) => (
            <div key={m.name} className="card" style={{ padding: 18 }}>
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{m.name}</div>
              <div style={{ fontSize: 12.5, color: "var(--ink3)" }}>writes {m.writes}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 34 }}>
        <h3 style={{ fontSize: 17, marginBottom: 14 }}>One estimate line, traced bid to closeout</h3>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
          {STAGES.map((s, i) => (
            <button
              key={s.key}
              onClick={() => setStage(i)}
              className="chip"
              style={{
                cursor: "pointer",
                color: i === stage ? TEAL : "var(--ink2)",
                borderColor: i === stage ? `${TEAL}88` : "var(--line2)",
                background: i === stage ? `${TEAL}18` : "transparent",
              }}
            >
              {i + 1}. {s.label}
            </button>
          ))}
        </div>
        <div className="card" style={{ borderLeft: `3px solid ${TEAL}` }}>
          <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: ".08em", color: TEAL, marginBottom: 6 }}>
            {STAGES[stage].module}
          </div>
          <p style={{ fontSize: 14.5, color: "var(--ink2)" }}>{STAGES[stage].note}</p>
        </div>
      </div>

      <div style={{ marginBottom: 30 }}>
        <h3 style={{ fontSize: 17, marginBottom: 14 }}>
          Three AI surfaces <span style={{ color: TEAL, fontSize: 12 }}>· Signal Teal marks AI, nothing else</span>
        </h3>
        <div className="grid3" style={{ gap: 14 }}>
          {AI_SURFACES.map((a) => (
            <div key={a.name} className="card" style={{ borderTop: `3px solid ${TEAL}` }}>
              <h3 style={{ fontSize: 15, color: TEAL }}>{a.name}</h3>
              <p style={{ fontSize: 13.5 }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <p style={{ fontSize: 13.5, color: "var(--ink2)" }}>
        Available by division — deploy the modules your operation needs, add more as you scale.
      </p>
    </div>
  );
}
