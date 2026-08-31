"use client";

import { useMemo, useState } from "react";

const AMBER = "#F4A261"; // the thing about to be pressed

const STARTING_BANK = 50000;

const UPGRADES = [
  { key: "van", name: "Delivery Van", cost: 5000, paybackMonths: 6 },
  { key: "marketing", name: "Marketing Push", cost: 3000, paybackMonths: 3 },
  { key: "inventory", name: "Inventory Expansion", cost: 8000, paybackMonths: 9 },
];

const TIERS = ["Seedling", "Grower", "Tycoon"];
const LOOP = ["Scout", "Invest", "Collect", "Reinvest"];

export function CashflowTycoonShop() {
  const [active, setActive] = useState<Record<string, boolean>>({});

  const totals = useMemo(() => {
    const chosen = UPGRADES.filter((u) => active[u.key]);
    const spent = chosen.reduce((sum, u) => sum + u.cost, 0);
    const remaining = STARTING_BANK - spent;
    const overBudget = remaining < 0;
    const avgPayback =
      chosen.length > 0
        ? chosen.reduce((sum, u) => sum + u.paybackMonths, 0) / chosen.length
        : 0;
    const rateOfReturn = chosen.length > 0 ? (100 / Math.max(1, avgPayback)) * 3 : 0;
    const tier = spent >= 12000 ? TIERS[2] : spent >= 5000 ? TIERS[1] : TIERS[0];
    return { spent, remaining, overBudget, avgPayback, rateOfReturn, tier, chosen };
  }, [active]);

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
        {LOOP.map((step, i) => (
          <span key={step} className="chip" style={{ color: "var(--ink2)" }}>
            {i + 1}. {step}
          </span>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)", gap: 24 }}>
        <div className="card">
          <h3 style={{ fontSize: 16, marginBottom: 4 }}>Plant shop upgrades</h3>
          <p style={{ fontSize: 13, color: "var(--ink3)", marginBottom: 18 }}>
            Starting bank: ${STARTING_BANK.toLocaleString()}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {UPGRADES.map((u) => {
              const on = !!active[u.key];
              return (
                <button
                  key={u.key}
                  onClick={() => setActive((a) => ({ ...a, [u.key]: !a[u.key] }))}
                  className="card"
                  style={{
                    cursor: "pointer",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: 16,
                    borderColor: on ? AMBER : "var(--line)",
                    background: on ? `${AMBER}18` : "var(--panel)",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{u.name}</div>
                    <div style={{ fontSize: 12.5, color: "var(--ink3)" }}>
                      ${u.cost.toLocaleString()} · pays back in {u.paybackMonths} months
                    </div>
                  </div>
                  <span
                    className="chip"
                    style={{ color: on ? AMBER : "var(--ink3)", borderColor: on ? `${AMBER}88` : "var(--line2)" }}
                  >
                    {on ? "On" : "Off"}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div
          className="card"
          style={{
            borderColor: totals.overBudget ? "rgba(255,107,122,.5)" : "var(--line)",
            background: totals.overBudget ? "rgba(255,107,122,.08)" : "var(--panel)",
          }}
        >
          <h3 style={{ fontSize: 15, marginBottom: 14 }}>Shop status</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
            <div className="mrow"><span className="mk">Rate of return</span><span className="mv" style={{ color: AMBER }}>{totals.rateOfReturn.toFixed(0)}%</span></div>
            <div className="mrow"><span className="mk">Avg. payback period</span><span className="mv">{totals.avgPayback ? `${totals.avgPayback.toFixed(1)} mo` : "—"}</span></div>
            <div className="mrow"><span className="mk">Spent</span><span className="mv">${totals.spent.toLocaleString()}</span></div>
            <div className="mrow"><span className="mk">Remaining bank</span><span className="mv" style={{ color: totals.overBudget ? "var(--red)" : "var(--green)" }}>${totals.remaining.toLocaleString()}</span></div>
          </div>
          {totals.overBudget && (
            <p style={{ fontSize: 13, color: "var(--red)", marginBottom: 12 }}>
              Over budget — total upgrades exceed the starting bank.
            </p>
          )}
          <div style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: ".08em", color: "var(--ink3)", marginBottom: 8 }}>
            Current tier
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {TIERS.map((t) => (
              <span
                key={t}
                className="chip"
                style={{
                  color: t === totals.tier ? AMBER : "var(--ink3)",
                  borderColor: t === totals.tier ? `${AMBER}88` : "var(--line2)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p style={{ marginTop: 16, fontSize: 12.5, color: "var(--ink3)" }}>All figures are illustrative.</p>
    </div>
  );
}
