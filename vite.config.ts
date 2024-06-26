import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
  },
  plugins: [
    react(),
    ViteImageOptimizer({
      jpg: {
        quality: 85,
      },
      png: {
        quality: 10,
      },
    }),
  ],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
