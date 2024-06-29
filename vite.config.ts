import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Even if the port gets changed,
    // it would seem that electron-vite is always looking port 5173
    port: 5173,
  }
})