import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',      // ← This allows external access from mobile devices
    port: 5173,           // ← Optional: use the same port you use in dev
    strictPort: true,     // ← Optional: ensures port doesn't change if busy
  },
});