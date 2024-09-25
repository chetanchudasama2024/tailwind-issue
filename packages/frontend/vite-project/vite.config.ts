import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import shopify from "vite-plugin-shopify";

export default defineConfig({
  plugins: [
    shopify({
      themeRoot: "extensions/theme-extension",
      sourceCodeDir: "packages/frontend/vite-project/src",
      entrypointsDir: "packages/frontend/vite-project/src/entrypoints",
    }),
    react(),
  ],
  build: {
    outDir: "../../../extensions/theme-extension/assets",
    rollupOptions: {
      input: {
        theme: "./src/entrypoints/main.tsx",
        css: "./src/entrypoints/index.css",
      },
      output: {
        entryFileNames: "theme.js",
        chunkFileNames: "theme.js",
        assetFileNames: "theme.[ext]",
      },
    },
  },
});
