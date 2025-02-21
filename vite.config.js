import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    historyApiFallback: true, // Redirects unknown routes to index.html
  },
  build: {
    outDir: "dist", // Ensure the build output is correctly set
  },
});
