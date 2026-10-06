import react from "@vitejs/plugin-react"
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"
import eslint from "vite-plugin-eslint"
import svgrPlugin from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_PATH || "/",
  resolve: {
    alias: {
      "@atoms": path.resolve(import.meta.dirname, "./src/components/atoms"),
      "@molecules": path.resolve(
        import.meta.dirname,
        "./src/components/molecules"
      ),
      "@organisms": path.resolve(
        import.meta.dirname,
        "./src/components/organisms"
      ),
      "@utils": path.resolve(import.meta.dirname, "src/utils"),
      "@assets": path.resolve(import.meta.dirname, "./src/assets"),
    },
  },
  plugins: [tailwindcss(), react(), svgrPlugin(), eslint()],
})
