import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    // Ensure proper handling of public assets
    assetsInlineLimit: 4096, // 4kb
    // Copy public directory to dist
    copyPublicDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          framer: ['framer-motion'],
        },
        // Ensure consistent chunk naming
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    // Enable HMR
    hmr: {
      overlay: true,
    },
  },
  preview: {
    port: 8080,
    open: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
    // Enable esbuild optimizations
    esbuildOptions: {
      target: 'es2020',
    },
  },
  // Handle environment variables
  define: {
    'process.env': process.env,
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  // Improve build performance
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
});