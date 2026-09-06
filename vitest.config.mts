import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const alias: Record<string, string> = {
  "@": path.resolve(dirname, "./src"),
};

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    include: ["src/**/*.test.{ts,tsx}", "infra/**/*.test.ts"],
    globals: true,
  },
  resolve: {
    alias,
  },
});