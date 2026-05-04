// Copies the published ui-css + ui-js bundles into apps/docs/public so the
// static demo can <link>/<script> them at the same paths a CDN would serve.
// Runs as predev/prebuild so no manual sync is needed.

import { cp } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..", "..", "..");
const pub  = resolve(here, "..", "public");

const copies = [
  ["packages/ui-css/dist/snowztech-ui.min.css", "snowztech-ui.css"],
  ["packages/ui-js/dist/snowztech-ui.esm.js",   "snowztech-ui.esm.js"],
];

for (const [from, to] of copies) {
  await cp(resolve(root, from), resolve(pub, to));
  console.log("synced", to);
}
