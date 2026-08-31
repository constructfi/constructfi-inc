"use client";

import { useMemo, useState } from "react";

const AMBER = "#E4B95B";

const LOTS = [
  { name: "Lumber Package", unit: "board ft", unitPrice: 3.4, retailPrice: 4.6, stock: 4200, grade: "New" },
  { name: "Concrete Mix", unit: "bag", unitPrice: 6.75, retailPrice: 8.9, stock: 1800, grade: "New" },
  { name: "Steel Beams", unit: "beam", unitPrice: 142, retailPrice: 185, stock: 260, grade: "Certified Refurb" },
  { name: "Insulation Bundle", unit: "bundle", unitPrice: 28.5, retailPrice: 39, stock: 640, grade: "Reclaimed" },
];

const CONDITIONS = ["New", "Certified Refurb", "Reclaimed"];

export function MaterialMarketplacePricer() {
  const [lotIndex, setLotIndex] = useState(0);
  const [qty, setQty] = useState(10);
  const lot = LOTS[lotIndex];

  const totals = useMemo(() => {
    const lineTotal = lot.unitPrice * qty;
    const retailTotal = lot.retailPrice * qty;
    const savingPct = ((lot.retailPrice - lot.unitPrice) / lot.retailPrice) * 100;
    const remainingStock = Math.max(0, lot.stock - qty);
    return { lineTotal, retailTotal, savingPct, remainingStock };
  }, [lot, qty]);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 22 }}>
        {LOTS.map((l, i) => (
          <button
            key={l.name}
            onClick={() => {
              setLotIndex(i);
              setQty(Math.min(qty, l.stock));
            }}
            className="chip"
            style={{
              cursor: "pointer",
              color: i === lotIndex ? AMBER : "var(--ink2)",
              borderColor: i === lotIndex ? `${AMBER}88` : "var(--line2)",
              background: i === lotIndex ? `${AMBER}18` : "transparent",
            }}
          >
            {l.name}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.1fr) minmax(0,1fr)", gap: 26 }}>
        <div className="card">
          <h3 style={{ fontSize: 16, marginBottom: 4 }}>{lot.name}</h3>
          <p style={{ fontSize: 13, color: "var(--ink3)", marginBottom: 18 }}>
            Condition grade: {lot.grade} · priced per {lot.unit}
          </p>
          <label style={{ display: "block", marginBottom: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6, color: "var(--ink2)" }}>
              <span>Quantity</span>
              <strong style={{ color: AMBER }}>
                {qty} {lot.unit}
              </strong>
            </div>
            <input
              type="range"
              min={1}
              max={100}
              step={1}
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              style={{ width: "100%", accentColor: AMBER }}
              aria-label="Quantity"
            />
          </label>

          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 18 }}>
            <div className="mrow"><span className="mk">Unit price</span><span className="mv" style={{ color: AMBER }}>${lot.unitPrice.toFixed(2)}</span></div>
            <div className="mrow"><span className="mk">Line total</span><span className="mv" style={{ color: AMBER }}>${totals.lineTotal.toFixed(2)}</span></div>
            <div className="mrow"><span className="mk">Retail comparison</span><span className="mv">${totals.retailTotal.toFixed(2)}</span></div>
            <div className="mrow"><span className="mk">Saving</span><span className="mv" style={{ color: "var(--green)" }}>{totals.savingPct.toFixed(0)}%</span></div>
            <div className="mrow"><span className="mk">Stock remaining</span><span className="mv">{totals.remainingStock.toLocaleString()} {lot.unit}</span></div>
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontSize: 15, marginBottom: 12 }}>Provenance</h3>
          <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", fontSize: 12.5, color: "var(--ink2)", marginBottom: 22 }}>
            <span className="chip">Manufacturer</span>
            <span aria-hidden>→</span>
            <span className="chip">Distributor</span>
            <span aria-hidden>→</span>
            <span className="chip">Covington Supply</span>
            <span aria-hidden>→</span>
            <span className="chip">Site</span>
          </div>
          <h3 style={{ fontSize: 15, marginBottom: 12 }}>Condition grades</h3>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {CONDITIONS.map((c) => (
              <span
                key={c}
                className="chip"
                style={{
                  color: c === lot.grade ? AMBER : "var(--ink3)",
                  borderColor: c === lot.grade ? `${AMBER}66` : "var(--line2)",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p style={{ marginTop: 16, fontSize: 12.5, color: "var(--ink3)" }}>Prices are illustrative.</p>
    </div>
  );
}
