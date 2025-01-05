import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',  // Ensure that the 'public' directory is handled correctly

  // Optional: configure asset handling if you want more control (can be left out in most cases)
  build: {
    rollupOptions: {
      // You can add more options if needed
    },
  },
});
