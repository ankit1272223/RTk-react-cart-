import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow network access (e.g., 192.168.x.x)
    port: 3000, // Use a specific port
  },
})
