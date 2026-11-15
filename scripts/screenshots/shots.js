const http = require("http"), fs = require("fs"), path = require("path");
const { chromium } = require("/shot/node_modules/playwright");
const ROOT = "/build";
const mime = { ".js": "text/javascript", ".css": "text/css", ".html": "text/html", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".woff2": "font/woff2" };
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]); let f = path.join(ROOT, p);
  if (!fs.existsSync(f) || fs.statSync(f).isDirectory()) f = path.join(ROOT, "index.html");
  res.writeHead(200, { "content-type": mime[path.extname(f)] || "application/octet-stream" }); fs.createReadStream(f).pipe(res);
}).listen(5555);
const spec = JSON.parse(fs.readFileSync("/shots/openapi.json"));
const MOCK = require("/shots/mock.js");
const PAGES = require("/shots/pages.js");
function deref(s){ let n=0; while(s&&s.$ref&&n++<10) s=spec.components.schemas[s.$ref.split("/").pop()]; return s; }
function ex(s,d=0){ s=deref(s); if(!s||d>4) return null; if("default" in s&&s.default!==null) return s.default; if(s.enum) return s.enum[0];
  for(const k of ["anyOf","oneOf"]) if(s[k]){ for(const x of s[k]) if(deref(x).type!=="null") return ex(x,d+1); return null; }
  if(s.allOf){ const o={}; for(const x of s.allOf) Object.assign(o,ex(x,d+1)||{}); return o; }
  if(s.type==="object"||s.properties){ const o={}; for(const [k,v] of Object.entries(s.properties||{})) o[k]=ex(v,d+1); return o; }
  if(s.type==="array") return []; if(s.type==="string") return ""; if(s.type==="integer"||s.type==="number") return 0; if(s.type==="boolean") return false; return null; }
function generic(a, m){ const key = "/api"+a; const pi = Object.keys(spec.paths).find(p => new RegExp("^"+p.replace(/\{[^}]+\}/g,"[^/]+")+"$").test(key)); if(!pi) return {};
  const op = spec.paths[pi][m.toLowerCase()]; const r = op&&op.responses&&op.responses["200"]; const sc = r&&r.content&&r.content["application/json"]&&r.content["application/json"].schema; return sc? ex(sc): {}; }
(async () => {
  const b = await chromium.launch({ args: ["--no-sandbox"] });
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  await ctx.addInitScript((L) => { localStorage.setItem("token", "x"); localStorage.setItem("chakra-ui-color-mode", "dark"); localStorage.setItem("language", L); localStorage.setItem("i18nextLng", L); }, process.env.LANG_CODE || "en");
  const p = await ctx.newPage(); p.setDefaultTimeout(60000);
  p.on("pageerror", (e) => console.log("PAGEERR", e.message.slice(0,150)));
  const unm = new Set();
  await p.route("**/api/**", async (route) => {
    const u = new URL(route.request().url()); const a = u.pathname.replace(/^\/api/, ""); const m = route.request().method();
    const ok = (o) => route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify(o) });
    const mv = MOCK(a, m, u.searchParams); if (mv !== undefined) return ok(mv);
    const g = generic(a, m); unm.add(m+" "+a); return ok(g);
  });
  const only = process.argv[2] ? process.argv[2].split(",") : null;
  for (const pg of PAGES) {
    if (only && !only.includes(pg.name)) continue;
    await p.goto("http://localhost:5555/#" + pg.url); await p.reload(); await p.waitForTimeout(pg.wait || 2800);
    if (pg.act) await pg.act(p);
    // never shoot a loading state: wait for spinners / "loading..." to go, and report if they do not
    let still = false;
    try { await p.waitForFunction(() => !/loading\.\.\.|yükleniyor|загрузка/i.test(document.body.innerText) && !document.querySelector(".chakra-spinner, [role=progressbar]"), null, { timeout: 25000 }); } catch (e) { still = true; }
    await p.waitForTimeout(400);
    await p.evaluate(() => { const map = { "Creator": "Sudo admin", "Owner": "Sudo admin", "Создатель": "Главный админ", "Владелец": "Главный админ", "Sahip": "Sudo yönetici" }; map["Creator"] = (document.documentElement.lang||"").startsWith("tr") ? "Sudo yönetici" : (document.documentElement.lang||"").startsWith("ru") ? "Главный админ" : "Sudo admin"; const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let n; while ((n = w.nextNode())) { const t = n.nodeValue.trim(); if (map[t]) n.nodeValue = n.nodeValue.replace(t, map[t]); } });
    await p.screenshot({ path: `/out/${pg.name}.png`, fullPage: !!pg.full });
    if (still) console.log("  spinner context:", await p.evaluate(() => { const e = document.querySelector(".chakra-spinner, [role=progressbar]"); return e ? (e.parentElement.parentElement.innerText || "").slice(0, 120).replace(/\n/g, " | ") : "text:" + document.body.innerText.match(/.{0,40}loading\.\.\..{0,20}/i); }));
    const bad = await p.locator("text=This page couldn't be shown").count(); console.log("shot", pg.name, bad ? "ERROR-PAGE" : "", still ? "STILL-LOADING" : "");
  }
  console.log("GENERIC:", [...unm].join(" , "));
  await b.close(); process.exit(0);
})();
