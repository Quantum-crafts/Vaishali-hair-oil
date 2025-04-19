import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vite.dev/config/
export default defineConfig({
  base: "/Vaishali-hair-oil/",
  plugins: [react()],
  build: {
    outDir: "docs" 
  }
});