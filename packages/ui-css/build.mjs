import { build } from "esbuild";
import { cp, mkdir, readdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const src = (...p) => resolve(here, "src", ...p);
const dist = (...p) => resolve(here, "dist", ...p);

await rm(dist(), { recursive: true, force: true });
await mkdir(dist("components"), { recursive: true });

// Bundled. Every class, single file.
await build({
  entryPoints: [src("index.css")],
  outfile: dist("snowztech-ui.css"),
  bundle: true,
  loader: { ".css": "css" },
  logLevel: "info",
});

await build({
  entryPoints: [src("index.css")],
  outfile: dist("snowztech-ui.min.css"),
  bundle: true,
  minify: true,
  loader: { ".css": "css" },
  logLevel: "info",
});

// Standalone tokens (vars only).
await cp(src("tokens.css"), dist("tokens.css"));
await cp(src("base.css"), dist("base.css"));
await cp(src("fonts.css"), dist("fonts.css"));

// Per-component files for advanced users / tree-shaking.
const components = (await readdir(src("components"))).map((f) => f.replace(/\.css$/, ""));
for (const name of components) {
  await cp(src("components", `${name}.css`), dist("components", `${name}.css`));
}

console.log(`built ${components.length + 4} files`);
