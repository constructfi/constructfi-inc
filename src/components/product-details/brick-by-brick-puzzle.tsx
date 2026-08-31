"use client";

import { useState } from "react";

const RED = "#9B2335";

const PUZZLE_SETS = ["Foundation", "Framework", "Finish"];

const OPTIONS = [
  {
    key: "a",
    label: "Spend the full budget on materials now",
    feedback: "Materials arrive on time, but there is no reserve left when the delivery is short two pallets.",
    good: false,
  },
  {
    key: "b",
    label: "Hold 15% of the budget in reserve",
    feedback: "The reserve covers the short delivery without delaying the schedule — the level's intended solution.",
    good: true,
  },
  {
    key: "c",
    label: "Delay the order until the full budget is confirmed",
    feedback: "The order is fully funded, but the delay pushes the whole schedule back a week.",
    good: false,
  },
];

export function BrickByBrickPuzzle() {
  const [set, setSet] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
        {PUZZLE_SETS.map((s, i) => (
          <button
            key={s}
            onClick={() => {
              setSet(i);
              setPicked(null);
            }}
            className="chip"
            style={{
              cursor: "pointer",
              color: i === set ? RED : "var(--ink2)",
              borderColor: i === set ? `${RED}88` : "var(--line2)",
              background: i === set ? `${RED}18` : "transparent",
            }}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="card" style={{ marginBottom: 20, borderLeft: `3px solid ${RED}` }}>
        <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: ".08em", color: RED, marginBottom: 6 }}>
          {PUZZLE_SETS[set]} · Level problem
        </div>
        <p style={{ fontSize: 14.5, color: "var(--ink2)" }}>
          Your budget is fixed for this phase. A supplier just confirmed a partial delivery — pick how you handle the
          shortfall before the crew shows up Monday.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 20 }}>
        {OPTIONS.map((o) => (
          <button
            key={o.key}
            onClick={() => setPicked(o.key)}
            className="card"
            style={{
              cursor: "pointer",
              textAlign: "left",
              padding: 18,
              borderColor: picked === o.key ? RED : "var(--line)",
              background: picked === o.key ? `${RED}12` : "var(--panel)",
            }}
          >
            <p style={{ fontSize: 13.5, color: "var(--ink)" }}>{o.label}</p>
          </button>
        ))}
      </div>

      {picked && (
        <div
          className="card"
          style={{
            borderColor: OPTIONS.find((o) => o.key === picked)?.good ? "rgba(0,209,154,.5)" : "rgba(255,107,122,.5)",
            background: OPTIONS.find((o) => o.key === picked)?.good ? "rgba(0,209,154,.08)" : "rgba(255,107,122,.08)",
          }}
        >
          <h3 style={{ fontSize: 14.5, marginBottom: 6 }}>What happens</h3>
          <p style={{ fontSize: 13.5, color: "var(--ink2)" }}>
            {OPTIONS.find((o) => o.key === picked)?.feedback}
          </p>
        </div>
      )}

      <p style={{ marginTop: 18, fontSize: 13.5, color: "var(--ink2)" }}>
        Each level teaches reading a budget, allocating resources, and timing decisions — the same three moves in every
        set, at a harder difficulty.
      </p>
      <p style={{ marginTop: 8, fontSize: 12.5, color: "var(--ink3)" }}>
        Illustrative puzzle — real game content ships at launch.
      </p>
    </div>
  );
}
