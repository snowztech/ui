import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "tests",
  fullyParallel: true,
  reporter: process.env.CI ? "github" : "list",
  use: { baseURL: "http://localhost:3001", viewport: { width: 1280, height: 800 } },
  webServer: {
    command: "pnpm start",
    url: "http://localhost:3001",
    reuseExistingServer: !process.env.CI,
  },
});
