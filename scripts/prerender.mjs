// Renders the app shell once and writes it to dist/index.html, then flattens
// dist/client into dist so Nginx can serve /dist as a plain static site.
import { cpSync, rmSync, writeFileSync, existsSync } from "node:fs";

const mod = await import("../dist/server/index.mjs");
const handler = mod.default;
const res = await handler.fetch(new Request("http://localhost/"), {}, { waitUntil() {}, passThroughOnException() {} });
if (!res.ok) throw new Error(`Prerender failed: ${res.status}`);
const html = await res.text();

cpSync("dist/client", "dist", { recursive: true });
writeFileSync("dist/index.html", html);
for (const p of ["dist/client", "dist/server", "dist/nitro.json", "dist/package.json", "dist/package-lock.json", "dist/_headers"]) {
  if (existsSync(p)) rmSync(p, { recursive: true, force: true });
}
console.log("Static site ready in dist/");
