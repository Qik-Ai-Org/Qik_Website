import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Custom domain (www.qik.ai) uses root path
  build: {
    outDir: 'dist', // Build to dist folder (build artifacts should not be committed)
    assetsDir: 'static', // Match the current structure
  },
  server: {
    port: 3000,
    open: true
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[tj]sx?$/,
    exclude: []
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js'],
  }
})