import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from the root of the user site https://vespersgame.github.io/
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
