import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import path from "path";

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: false, // Desabilita o auto code splitting que pode causar problemas com React 19
    }),
    react({
      // Configurações específicas para React 19
      jsxRuntime: "automatic",
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks mais conservadores para React 19
          if (id.includes("node_modules")) {
            // Mantém React e React-DOM juntos para evitar problemas de hidratação
            if (id.includes("react") || id.includes("react-dom")) {
              return "react-vendor";
            }
            // Mantém TanStack Router em chunk separado mas mais estável
            if (id.includes("@tanstack")) {
              return "router-vendor";
            }
            // Agrupa UI libraries
            if (id.includes("@radix-ui") || id.includes("lucide-react")) {
              return "ui-vendor";
            }
            // Firebase em chunk separado
            if (id.includes("firebase")) {
              return "firebase-vendor";
            }
            // Utilitários em chunk separado
            if (
              id.includes("clsx") ||
              id.includes("tailwind-merge") ||
              id.includes("class-variance-authority") ||
              id.includes("zod")
            ) {
              return "utils-vendor";
            }
            return "vendor";
          }
        },
      },
    },
    // Aumenta o limite de warning para chunks
    chunkSizeWarningLimit: 1000,
    // Habilita source maps para debug
    sourcemap: true,
    // Configurações específicas para React 19
    target: "esnext",
    minify: "esbuild", // Usa esbuild que é mais compatível com React 19
  },
  // Configurações de otimização para React 19
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "@tanstack/react-router",
      "@tanstack/react-router-devtools",
    ],
    exclude: ["@tanstack/router-plugin"],
  },
});
