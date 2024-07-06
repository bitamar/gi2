import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",
  base: "/gi2/",
  // build to /dist
  build: {
    outDir: "../dist",
  },
});
