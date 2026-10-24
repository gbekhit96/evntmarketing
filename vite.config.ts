import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  // Local dev and a custom domain serve from "/". The GitHub Pages project URL
  // (gbekhit96.github.io/evntmarketing/) needs the subpath, which the deploy
  // workflow passes in via VITE_DEPLOY_BASE.
  base: process.env.VITE_DEPLOY_BASE || "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
}));
