import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      // Externalizing assets that are not bundled. 
      // But remember, static assets should be directly accessed from the public folder, not bundled.
      external: ['/stateFlags/*'],
    }
  }
});
