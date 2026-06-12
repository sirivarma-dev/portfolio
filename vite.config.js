import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // Repo is served from https://sirivarma-dev.github.io/Portfolio/
  base: "/Portfolio/",
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
});
