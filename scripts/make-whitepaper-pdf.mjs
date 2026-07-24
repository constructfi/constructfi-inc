// Generates public/ConstructFi_Whitepaper_v2.1.pdf from the whitepaper content.
// Renders a print-styled HTML with Playwright Chromium.
import { chromium } from "playwright";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

// --- Import content by transpiling the TS source inline (simple parse) ---
// To avoid a TS build step, we re-declare the content via a JSON export written
// by the build. Instead, we read the compiled data from a generated JSON file.
import { WP_META, WP_CHAPTERS } from "./whitepaper-data.mjs";

const esc = (s = "") =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function renderBlock(b) {
  switch (b.type) {
    case "p":
      return `<p>${esc(b.text)}</p>`;
    case "h3":
      return `<h3>${esc(b.text)}</h3>`;
    case "list":
      return `<ul class="tight">${b.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
    case "callout": {
      const cls = b.variant === "gold" ? "gold" : b.variant === "risk" ? "risk" : "";
      return `<div class="call ${cls}">${b.title ? `<div class="ct">${esc(b.title)}</div>` : ""}<p>${esc(b.text)}</p></div>`;
    }
    case "table": {
      const head = `<tr>${b.headers.map((h) => `<th>${esc(h)}</th>`).join("")}</tr>`;
      const body = b.rows
        .map(
          (r) =>
            `<tr>${r.map((c, i) => `<td class="${i === 0 ? "lab" : ""}">${esc(c)}</td>`).join("")}</tr>`
        )
        .join("");
      return `<table><thead>${head}</thead><tbody>${body}</tbody></table>`;
    }
    default:
      return "";
  }
}

const CSS = `
:root{--ink:#0B1930;--ink2:#10233F;--navy:#14325A;--teal:#0E9F8A;--mint:#2BC5A0;--sky:#1E9FC9;--gold:#B9903B;--gold2:#D8B25E;--paper:#FFFFFF;--wash:#F2F7F6;--line:#DDE7E5;--grey:#54646F;--red:#8A3B2F;}
*{margin:0;padding:0;box-sizing:border-box;-webkit-print-color-adjust:exact;print-color-adjust:exact}
html,body{font-family:'Poppins',-apple-system,'Segoe UI',sans-serif;color:var(--ink);font-size:10pt;line-height:1.62}
@page{size:letter;margin:0}
.pg{width:8.5in;min-height:11in;position:relative;overflow:hidden;page-break-after:always;background:var(--paper)}
.pad{padding:.75in .9in .95in .9in}
.ft{position:absolute;left:.9in;right:.9in;bottom:.42in;display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--line);padding-top:7px;font-size:6.6pt;letter-spacing:.14em;text-transform:uppercase;color:#8798A3}
.ft b{color:var(--teal);font-weight:600}.ft .pn{font-weight:600;color:var(--navy)}
.eyebrow{font-size:7.2pt;font-weight:600;letter-spacing:.24em;text-transform:uppercase;color:var(--teal);margin-bottom:8px}
h1{font-size:23pt;font-weight:700;line-height:1.14;color:var(--navy);letter-spacing:-.01em}
h2{font-size:13.5pt;font-weight:600;color:var(--navy);margin:20px 0 8px;letter-spacing:-.005em}
h3{font-size:10.5pt;font-weight:600;color:var(--navy);margin:15px 0 5px}
p{margin:0 0 9px}
.lede{font-size:10.8pt;line-height:1.66;color:#2A3A4A;font-weight:300}
strong{font-weight:600;color:var(--ink)}
.chap{position:relative;background:var(--ink);color:#fff;padding:.5in .9in .42in;overflow:hidden}
.chap .bp{position:absolute;inset:0;opacity:.5;background:linear-gradient(rgba(43,197,160,.10) 1px,transparent 1px),linear-gradient(90deg,rgba(43,197,160,.10) 1px,transparent 1px);background-size:96px 96px,96px 96px}
.chap .in{position:relative}
.chap .num{position:absolute;right:0;top:-6px;font-size:46pt;font-weight:700;color:transparent;-webkit-text-stroke:1.2px rgba(43,197,160,.55);line-height:1}
.chap .eyebrow{color:var(--mint)}.chap h1{color:#fff;max-width:5.9in;font-size:20pt}
.chap .dek{margin-top:9px;color:rgba(255,255,255,.75);font-weight:300;font-size:10pt;max-width:5.7in;line-height:1.55}
.chap .bar{width:52px;height:4px;background:linear-gradient(90deg,var(--mint),var(--sky));margin-top:14px;border-radius:2px}
.call{border-left:3px solid var(--teal);background:var(--wash);padding:11px 14px;margin:12px 0;border-radius:0 6px 6px 0}
.call .ct{font-size:8.2pt;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--teal);margin-bottom:4px}
.call p{margin:0;font-size:9.4pt}
.call.gold{border-left-color:var(--gold);background:#FBF6EA}.call.gold .ct{color:var(--gold)}
.call.risk{border-left-color:var(--red);background:#F9F1EF}.call.risk .ct{color:var(--red)}
table{width:100%;border-collapse:collapse;margin:12px 0;font-size:8.8pt;line-height:1.5}
th{background:var(--navy);color:#fff;font-weight:600;text-align:left;padding:7px 10px;font-size:8.4pt}
td{padding:7px 10px;border-bottom:1px solid var(--line);vertical-align:top}
tr:nth-child(even) td{background:var(--wash)}
td.lab{font-weight:600;color:var(--navy)}
ul.tight{margin:6px 0 10px 16px}ul.tight li{margin-bottom:5px;font-size:9.4pt}ul.tight li::marker{color:var(--mint)}
.cover{background:var(--ink);color:#fff;height:11in}
.cover .bp{position:absolute;inset:0;background:linear-gradient(rgba(43,197,160,.09) 1px,transparent 1px),linear-gradient(90deg,rgba(43,197,160,.09) 1px,transparent 1px);background-size:120px 120px,120px 120px}
.cover .glow{position:absolute;width:560px;height:560px;border-radius:50%;right:-190px;bottom:-190px;background:radial-gradient(circle,rgba(43,197,160,.22),transparent 62%)}
.cover .glow2{position:absolute;width:420px;height:420px;border-radius:50%;left:-160px;top:-160px;background:radial-gradient(circle,rgba(30,159,201,.18),transparent 62%)}
.cover .in{position:relative;padding:1in .9in}
.logo{font-size:15pt;font-weight:700}.logo .fi{color:var(--mint)}
.logomark{display:inline-block;width:17px;height:17px;border-radius:3px;margin-right:8px;vertical-align:-2px;background:linear-gradient(135deg,var(--mint) 0 50%,var(--sky) 50% 100%)}
.cover h1{font-size:34pt;margin-top:2.6in;max-width:6in;color:#fff}
.cover .sub{margin-top:14px;font-size:12pt;color:rgba(255,255,255,.8);font-weight:300;max-width:5in}
.cover .meta{position:absolute;left:.9in;bottom:.9in;font-size:8.6pt;letter-spacing:.14em;text-transform:uppercase;color:var(--mint)}
.toc-row{display:flex;align-items:baseline;gap:10px;padding:7px 0;border-bottom:1px dotted #C9D6D3;font-size:9.6pt}
.toc-row .n{flex:0 0 26px;font-weight:700;color:var(--mint);font-size:8.6pt}
.toc-row .t{font-weight:500;color:var(--ink)}
.sig{font-family:'Lora',Georgia,serif;font-style:italic;font-size:13pt;color:var(--navy)}
`;

const now = new Date().getFullYear();

// Cover page
let html = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body>`;
html += `
<div class="pg cover">
  <div class="bp"></div><div class="glow"></div><div class="glow2"></div>
  <div class="in">
    <div class="logo"><span class="logomark"></span>Construct<span class="fi">Fi</span></div>
    <h1>${esc(WP_META.title)}</h1>
    <div class="sub">${esc(WP_META.subtitle)}</div>
  </div>
  <div class="meta">Version ${WP_META.version} · ${WP_META.date} · From participation to ownership</div>
</div>`;

// TOC page
html += `<div class="pg"><div class="pad">
  <div class="eyebrow">Contents</div>
  <h1 style="font-size:19pt">Table of contents</h1>
  <div style="margin-top:18px">
    ${WP_CHAPTERS.map(
      (c) =>
        `<div class="toc-row"><span class="n">${String(c.n).padStart(2, "0")}</span><span class="t">${esc(c.title)}</span></div>`
    ).join("")}
  </div>
  <div class="ft"><span>Construct<b>Fi</b> Whitepaper v${WP_META.version}</span><span class="pn">ii</span></div>
</div></div>`;

// Chapter pages — group each chapter on its own page(s)
let pageNo = 1;
for (const c of WP_CHAPTERS) {
  const body = c.blocks.map(renderBlock).join("");
  html += `<div class="pg">
    <div class="chap"><div class="bp"></div><div class="in">
      <div class="num">${String(c.n).padStart(2, "0")}</div>
      <div class="eyebrow">Chapter ${c.n}</div>
      <h1>${esc(c.title)}</h1>
      <div class="dek">${esc(c.dek)}</div>
      <div class="bar"></div>
    </div></div>
    <div class="pad" style="padding-top:.4in">${body}
      <div class="ft"><span>Construct<b>Fi</b> · ${esc(c.title)}</span><span class="pn">${pageNo}</span></div>
    </div>
  </div>`;
  pageNo++;
}

html += `</body></html>`;

const outHtml = resolve(__dirname, "whitepaper-render.html");
writeFileSync(outHtml, html);

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto("file://" + outHtml, { waitUntil: "networkidle" });
const out = resolve(__dirname, "..", "public", "ConstructFi_Whitepaper_v2.1.pdf");
await page.pdf({ path: out, format: "Letter", printBackground: true, preferCSSPageSize: true });
await browser.close();
console.log("PDF written to", out);
