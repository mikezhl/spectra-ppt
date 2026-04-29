import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      ignored: [
        "**/qa-artifacts/**",
        "**/.edge-qa-profile/**",
        "**/qa-*.png",
        "**/vite-dev*.log",
      ],
    },
  },
});
