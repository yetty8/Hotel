import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Remove react-router-dom from manual chunks
          react: ['react', 'react-dom'],
          // Add other vendor chunks if needed
          vendor: ['framer-motion']
        }
      }
    }
  }
})