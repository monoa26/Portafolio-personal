import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  resolve: {
    tsconfigPaths: true,
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
    },
    dedupe: ["react", "react-dom", "@tanstack/react-router"],
  },
  optimizeDeps: {
    include: ["react", "react-dom", "@tanstack/react-router"],
  },
  plugins: [
    tanstackStart({
      server: {
        entry: "server",
      },
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
    }),
    viteReact(),
    tailwindcss(),
  ],
});
