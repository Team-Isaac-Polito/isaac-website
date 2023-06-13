import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import tailwindcss from 'tailwindcss';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin(),
    eslint(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
