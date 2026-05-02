import { defineConfig } from "tsup";
import { readFile, writeFile } from "node:fs/promises";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    client: "src/client.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  treeshake: true,
  async onSuccess() {
    // Prepend "use client" to the client bundle so Next.js treats it as a client boundary.
    for (const file of ["dist/client.js", "dist/client.cjs"]) {
      const body = await readFile(file, "utf8");
      if (!body.startsWith('"use client"')) {
        await writeFile(file, `"use client";\n${body}`);
      }
    }
  },
});
