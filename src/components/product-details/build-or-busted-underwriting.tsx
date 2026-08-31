"use client";

import { useMemo, useState } from "react";

/**
 * Build or Busted — five-slider underwriting model.
 *
 * All math below is demonstration-only, built to make the verdict react
 * visibly to each slider. It is not the production underwriting model.
 */
const VERDICTS = {
  build: { label: "BUILD", color: "#00D19A", sub: "Clears the bar on cash-on-cash and DSCR." },
  hold: { label: "HOLD", color: "#E4B95B", sub: "Borderline — worth a second look, not a clear yes." },
  busted: { label: "BUSTED", color: "#FF6B7A", sub: "Fails the target on one or both measures." },
} as const;

function fmtMoney(n: number) {
  return `$${Math.round(n).toLocaleString()}`;
}

export function BuildOrBustedUnderwriting() {
  const [arv, setArv] = useState(320000);
  const [price, setPrice] = useState(220000);
  const [rehab, setRehab] = useState(35000);
  const [hold, setHold] = useState(12);
  const [targetCoC, setTargetCoC] = useState(10);

  const model = useMemo(() => {
    const totalCost = price + rehab;
    const monthlyRent = arv * 0.008;
    const annualRent = monthlyRent * 12;
    const opEx = annualRent * 0.4;
    const noi = annualRent - opEx;
    const loanAmount = totalCost * 0.75;
    const monthlyDebt = loanAmount * 0.00665; // ~7% / 30yr approximation
    const annualDebt = monthlyDebt * 12;
    const cashFlow = noi - annualDebt;
    const cashInvested = totalCost * 0.25;
    const coc = cashInvested > 0 ? (cashFlow / cashInvested) * 100 : 0;
    const dscr = annualDebt > 0 ? noi / annualDebt : 0;
    const holdAdj = Math.max(0.85, 1 - (hold - 12) * 0.004);

    let verdict: keyof typeof VERDICTS;
    const cocAdjusted = coc * holdAdj;
    if (cocAdjusted >= targetCoC && dscr >= 1.2) verdict = "build";
    else if (cocAdjusted >= targetCoC * 0.7 || dscr >= 1.0) verdict = "hold";
    else verdict = "busted";

    return { totalCost, noi, cashFlow, coc: cocAdjusted, dscr, verdict };
  }, [arv, price, rehab, hold, targetCoC]);

  const v = VERDICTS[model.verdict];

  const sliders: Array<{
    key: string;
    label: string;
    value: number;
    min: number;
    max: number;
    step: number;
    format: (n: number) => string;
    set: (n: number) => void;
  }> = [
    { key: "arv", label: "ARV (after-repair value)", value: arv, min: 120000, max: 550000, step: 5000, format: fmtMoney, set: setArv },
    { key: "price", label: "Purchase price", value: price, min: 50000, max: 450000, step: 5000, format: fmtMoney, set: setPrice },
    { key: "rehab", label: "Rehab cost", value: rehab, min: 0, max: 120000, step: 2500, format: fmtMoney, set: setRehab },
    { key: "hold", label: "Hold period (months)", value: hold, min: 3, max: 36, step: 1, format: (n) => `${n} mo`, set: setHold },
    { key: "coc", label: "Target cash-on-cash", value: targetCoC, min: 5, max: 20, step: 0.5, format: (n) => `${n.toFixed(1)}%`, set: setTargetCoC },
  ];

  return (
    <div style={{ fontFamily: "var(--font-bob)" }}>
      <div className="grid2" style={{ gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr)", gap: 28, alignItems: "start" }}>
        <div className="card" style={{ borderColor: "rgba(228,109,45,.3)" }}>
          <h3 style={{ fontFamily: "var(--font-bob)", color: "#E86D2D" }}>Five-slider underwriting model</h3>
          <p style={{ marginBottom: 18 }}>
            Move any slider — the verdict recomputes against fixed, visible thresholds
            (cash-on-cash ≥ target and DSCR ≥ 1.2 to BUILD).
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {sliders.map((s) => (
              <label key={s.key} style={{ display: "block" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 13,
                    marginBottom: 6,
                    color: "var(--ink2)",
                  }}
                >
                  <span>{s.label}</span>
                  <strong style={{ color: "#E86D2D" }}>{s.format(s.value)}</strong>
                </div>
                <input
                  type="range"
                  min={s.min}
                  max={s.max}
                  step={s.step}
                  value={s.value}
                  onChange={(e) => s.set(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "#E86D2D" }}
                  aria-label={s.label}
                />
              </label>
            ))}
          </div>
        </div>

        <div
          className="card"
          style={{
            textAlign: "center",
            border: `1px solid ${v.color}66`,
            background: `${v.color}14`,
          }}
        >
          <div style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--ink3)", marginBottom: 8 }}>
            Verdict
          </div>
          <div
            style={{
              fontFamily: "var(--font-bob)",
              fontWeight: 800,
              fontSize: 40,
              letterSpacing: ".03em",
              color: v.color,
              marginBottom: 8,
            }}
          >
            {v.label}
          </div>
          <p style={{ fontSize: 13.5, color: "var(--ink2)", marginBottom: 20 }}>{v.sub}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, textAlign: "left" }}>
            <div className="mrow"><span className="mk">Total cost</span><span className="mv">{fmtMoney(model.totalCost)}</span></div>
            <div className="mrow"><span className="mk">Est. NOI (annual)</span><span className="mv">{fmtMoney(model.noi)}</span></div>
            <div className="mrow"><span className="mk">Cash-on-cash</span><span className="mv" style={{ color: v.color }}>{model.coc.toFixed(1)}%</span></div>
            <div className="mrow"><span className="mk">DSCR</span><span className="mv" style={{ color: v.color }}>{model.dscr.toFixed(2)}</span></div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20 }}>
            {(Object.keys(VERDICTS) as Array<keyof typeof VERDICTS>).map((k) => (
              <span
                key={k}
                className="chip"
                style={{
                  color: VERDICTS[k].color,
                  borderColor: `${VERDICTS[k].color}66`,
                  background: model.verdict === k ? `${VERDICTS[k].color}22` : "transparent",
                }}
              >
                {VERDICTS[k].label}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p style={{ marginTop: 18, fontSize: 12.5, color: "var(--ink3)" }}>
        Every number is demonstration data — not a real underwrite, not advice.
      </p>
    </div>
  );
}
