import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { serve } from 'pm2'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
  }
})
