import { build } from "esbuild";
import { mkdir, rm } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = (...p) => resolve(here, "src", ...p);
const dist = (...p) => resolve(here, "dist", ...p);

await rm(dist(), { recursive: true, force: true });
await mkdir(dist(), { recursive: true });

const shared = {
  bundle: true,
  target: "es2020",
  logLevel: "info",
};

// IIFE for <script src=...> in plain HTML. Auto-wires on load.
await build({
  ...shared,
  entryPoints: [src("auto.ts")],
  outfile: dist("snowztech-ui.iife.js"),
  format: "iife",
  globalName: "SnowztechUI",
});

await build({
  ...shared,
  entryPoints: [src("auto.ts")],
  outfile: dist("snowztech-ui.iife.min.js"),
  format: "iife",
  globalName: "SnowztechUI",
  minify: true,
});

// ESM for <script type="module"> and bundler imports.
await build({
  ...shared,
  entryPoints: [src("auto.ts")],
  outfile: dist("snowztech-ui.esm.js"),
  format: "esm",
});

// ESM library entry (no auto-wire side effect at import; consumers call init()).
await build({
  ...shared,
  entryPoints: [src("index.ts")],
  outfile: dist("index.js"),
  format: "esm",
});

await build({
  ...shared,
  entryPoints: [src("index.ts")],
  outfile: dist("index.cjs"),
  format: "cjs",
});

console.log("ui-js built");
