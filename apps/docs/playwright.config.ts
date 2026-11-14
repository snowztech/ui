import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "tests",
  fullyParallel: true,
  reporter: process.env.CI ? "github" : "list",
  // Reduced motion turns transitions off, so colors are read at rest, not mid-fade.
  use: { baseURL: "http://localhost:3001", viewport: { width: 1280, height: 800 }, reducedMotion: "reduce" },
  webServer: {
    command: "pnpm start",
    url: "http://localhost:3001",
    reuseExistingServer: !process.env.CI,
  },
});
