"use client";

import { useState } from "react";

const GOLD = "#E4B95B"; // equity
const GREEN = "#00D19A"; // cash flow
const RED = "#FF6B7A"; // debt

const MOVES = [
  {
    name: "Buy & Hold",
    stage: "Scout",
    cashFlow: "+$340/mo",
    equity: "+$6,200",
    debt: "+$210,000",
    credit: "Neutral",
  },
  {
    name: "Fix & Flip",
    stage: "Analyze",
    cashFlow: "-$0/mo",
    equity: "+$28,000",
    debt: "+$165,000",
    credit: "Slight dip",
  },
  {
    name: "House Hack",
    stage: "Execute",
    cashFlow: "+$610/mo",
    equity: "+$4,800",
    debt: "+$245,000",
    credit: "Neutral",
  },
  {
    name: "Wholesale",
    stage: "Scout",
    cashFlow: "+$8,500 (one-time)",
    equity: "$0",
    debt: "$0",
    credit: "Neutral",
  },
];

const STAGES = ["Scout", "Analyze", "Execute"];

export function HouseHackersMoves() {
  const [active, setActive] = useState(0);
  const move = MOVES[active];

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
        {STAGES.map((s) => (
          <span
            key={s}
            className="chip"
            style={{
              color: s === move.stage ? "var(--green)" : "var(--ink3)",
              borderColor: s === move.stage ? "rgba(0,209,154,.5)" : "var(--line2)",
            }}
          >
            {s}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 22 }}>
        {MOVES.map((m, i) => (
          <button
            key={m.name}
            onClick={() => setActive(i)}
            className="card"
            style={{
              cursor: "pointer",
              textAlign: "left",
              flex: "1 1 200px",
              borderColor: i === active ? "var(--green)" : "var(--line)",
              background: i === active ? "rgba(0,209,154,.08)" : "var(--panel)",
              padding: 18,
            }}
          >
            <div style={{ fontWeight: 700, fontSize: 14.5 }}>{m.name}</div>
          </button>
        ))}
      </div>

      <div className="card">
        <h3 style={{ fontSize: 16, marginBottom: 14 }}>{move.name} — 12-month outcome</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div className="mrow"><span className="mk">Cash flow</span><span className="mv" style={{ color: GREEN }}>{move.cashFlow}</span></div>
          <div className="mrow"><span className="mk">Equity</span><span className="mv" style={{ color: GOLD }}>{move.equity}</span></div>
          <div className="mrow"><span className="mk">Debt</span><span className="mv" style={{ color: RED }}>{move.debt}</span></div>
          <div className="mrow"><span className="mk">Credit impact</span><span className="mv">{move.credit}</span></div>
        </div>
      </div>
      <p style={{ marginTop: 16, fontSize: 12.5, color: "var(--ink3)" }}>All figures are illustrative.</p>
    </div>
  );
}
