"use client";

import { useState } from "react";

const TEAL = "#019599";

const QUOTES = [
  { supplier: "Covington Supply Co.", price: "$48,200", lead: "6 days", verified: true },
  { supplier: "Ridgeline Materials", price: "$51,000", lead: "9 days", verified: true },
  { supplier: "Delta Building Supply", price: "$46,750", lead: "14 days", verified: false },
  { supplier: "Northpoint Distributors", price: "$49,900", lead: "7 days", verified: true },
  { supplier: "Harborview Wholesale", price: "$44,300", lead: "18 days", verified: false },
  { supplier: "Anchor Point Supply", price: "$50,400", lead: "5 days", verified: true },
];

const CHECKS = [
  { check: "Business license", status: "Verified" },
  { check: "Insurance", status: "Verified" },
  { check: "References", status: "Verified" },
  { check: "Platform history", status: "12 completed orders" },
];

const SCOPE_STATES = ["Accepted", "Revised", "Declined"] as const;

export function SupplierMarketplaceRFQ() {
  const [scopeState, setScopeState] = useState<(typeof SCOPE_STATES)[number]>("Revised");

  return (
    <div>
      <div
        className="card"
        style={{ marginBottom: 22, borderLeft: `3px solid ${TEAL}` }}
      >
        <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: ".08em", color: TEAL, marginBottom: 6 }}>
          Schedule constraint
        </div>
        <p style={{ fontSize: 14.5, color: "var(--ink2)" }}>
          Job starts <strong>Sept 15, 2026</strong> — material must arrive by <strong>Sept 12, 2026</strong>.
        </p>
      </div>

      <h3 style={{ fontSize: 16, marginBottom: 12 }}>Six quotes, compared</h3>
      <div style={{ overflowX: "auto", marginBottom: 26 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5 }}>
          <thead>
            <tr style={{ borderBottom: "1px solid var(--line2)" }}>
              {["Supplier", "Price", "Lead time", "Verified"].map((h) => (
                <th key={h} style={{ textAlign: "left", padding: "8px 10px", color: "var(--ink3)", fontWeight: 600 }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {QUOTES.map((q) => (
              <tr key={q.supplier} style={{ borderBottom: "1px solid var(--line)" }}>
                <td style={{ padding: "10px" }}>{q.supplier}</td>
                <td style={{ padding: "10px" }}>{q.price}</td>
                <td style={{ padding: "10px" }}>{q.lead}</td>
                <td style={{ padding: "10px" }}>
                  <span
                    className="chip"
                    style={{
                      color: q.verified ? TEAL : "var(--ink3)",
                      borderColor: q.verified ? `${TEAL}66` : "var(--line2)",
                    }}
                  >
                    {q.verified ? "Verified" : "Unverified"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: 22 }}>
        <div className="card">
          <h3 style={{ fontSize: 15, marginBottom: 12 }}>Four verification checks</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {CHECKS.map((c) => (
              <div key={c.check} className="mrow">
                <span className="mk">{c.check}</span>
                <span className="mv" style={{ color: TEAL }}>{c.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontSize: 15, marginBottom: 12 }}>Returned scope status</h3>
          <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
            {SCOPE_STATES.map((s) => (
              <button
                key={s}
                onClick={() => setScopeState(s)}
                className="chip"
                style={{
                  cursor: "pointer",
                  color: s === scopeState ? TEAL : "var(--ink2)",
                  borderColor: s === scopeState ? `${TEAL}88` : "var(--line2)",
                  background: s === scopeState ? `${TEAL}18` : "transparent",
                }}
              >
                {s}
              </button>
            ))}
          </div>
          <p style={{ fontSize: 13.5, color: "var(--ink2)" }}>
            {scopeState === "Accepted" && "The scope matches the RFQ as submitted — procurement can proceed."}
            {scopeState === "Revised" && "The supplier returned a scope with changes — review before accepting."}
            {scopeState === "Declined" && "The supplier could not meet the scope or schedule — remove them from consideration."}
          </p>
        </div>
      </div>
    </div>
  );
}
