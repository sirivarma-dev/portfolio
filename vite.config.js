import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Repo is served from https://siri-8440.github.io/portfolio/
  base: "/portfolio/",
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
});
