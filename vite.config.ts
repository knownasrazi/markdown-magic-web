import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/markdown-magic-web/",
  plugins: [react()],
});
