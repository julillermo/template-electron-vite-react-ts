import { defineConfig } from 'electron-vite'
import react from "@vitejs/plugin-react-swc"

// electron.vite.config.js
export default defineConfig({
  main: {
    publicDir: false,
    build: {
      outDir: 'dist/main'
    }
  },
  preload: {
    build: {
      outDir: 'dist/preload'
    }
  },
  renderer: {
    plugins: [react()],
    publicDir: false,
    build: {
      outDir: 'dist/renderer'
    }
  }
})