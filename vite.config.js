import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Safe chunking configuration
    rollupOptions: {
      output: {
        manualChunks: {
          // Only separate core vendor files
          vendor: ['react', 'react-dom'],
          three: ['three']
        }
      }
    },
    // Increase warning limit to avoid build errors
    chunkSizeWarningLimit: 1500,
    // Ensure source maps for debugging
    sourcemap: true
  },
  // Optimize asset handling
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
})
