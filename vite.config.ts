import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
