import { defineConfig, devices } from "@playwright/test";
import { config } from "dotenv";

console.log("ENVIRONMENT before dotenv:", process.env.ENVIRONMENT);

if (process.env.ENVIRONMENT) {
  config({
    path: ".env.${process.env.ENVIRONMENT}",
    override: true,
  });
  console.log(`Loaded env from .env.${process.env.ENVIRONMENT}`);
} else {
  config();
  console.log("Loaded env from default .env");
}

console.log("URL after dotenv:", process.env.URL);

export default defineConfig({
  testDir: "./e2e/tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    trace: "on",
    video: "on",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], video: "on" },
    },
  ],
});
