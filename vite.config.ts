import react from "@vitejs/plugin-react"
import path from "path"
import tailwindcss from "tailwindcss"
import { defineConfig } from "vite"
import eslint from "vite-plugin-eslint"
import svgrPlugin from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_PATH || "/",
  resolve: {
    alias: {
      "@atoms": `${path.resolve(__dirname, "./src/components/atoms")}`,
      "@molecules": `${path.resolve(__dirname, "./src/components/molecules")}`,
      "@organisms": `${path.resolve(__dirname, "./src/components/organisms")}`,
    },
  },
  plugins: [react(), svgrPlugin(), eslint()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
})
