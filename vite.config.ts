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
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/routes": path.resolve(__dirname, "./src/routes"),
      "@/services": path.resolve(__dirname, "./src/services"),
      "@/styles": path.resolve(__dirname, "./src/styles"),
      "@/lib": path.resolve(__dirname, "./src/lib"),
      "@/data": path.resolve(__dirname, "./src/data"),
      "@/ui": path.resolve(__dirname, "./src/components/ui"),
      "@/app": path.resolve(__dirname, "./src/components/app"),
      "@/landing": path.resolve(__dirname, "./src/components/landing"),
    },
  },
  build: {
    // Configurações de otimização do build
    target: "esnext",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug"],
        passes: 2,
      },
      mangle: {
        safari10: true,
      },
    } as any,
    // Otimizações adicionais
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false,
    // Configuração de chunks manuais para otimizar o bundle
    rollupOptions: {
      output: {
        manualChunks: {
          // React e React DOM em chunk separado
          "react-vendor": ["react", "react-dom"],

          // TanStack Router em chunk separado
          "router-vendor": ["@tanstack/react-router", "@tanstack/react-form"],

          // Firebase em chunk separado (apenas Firestore)
          "firebase-vendor": ["firebase/app", "firebase/firestore"],

          // Radix UI em chunk separado
          "radix-vendor": [
            "@radix-ui/react-select",
            "@radix-ui/react-slot",
            "@radix-ui/react-switch",
          ],

          // Syntax Highlighter em chunk separado (biblioteca pesada)
          "syntax-highlighter": ["react-syntax-highlighter"],

          // Utilitários em chunk separado
          "utils-vendor": [
            "clsx",
            "tailwind-merge",
            "class-variance-authority",
            "zod",
          ],

          // Lucide React em chunk separado
          "icons-vendor": ["lucide-react"],
        },
      },
    },
    // Aumentar limite de warning para chunks grandes
    chunkSizeWarningLimit: 1000,
  },
  // Otimizações de dependências
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "@tanstack/react-router",
      "@tanstack/react-form",
      "firebase/app",
      "firebase/firestore",
      "zod",
    ],
  },
});
