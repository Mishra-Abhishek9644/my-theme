import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    outDir:"../assets",
  emptyOutDir: false,
    rollupOptions:{
      output:{
        entryFileNames: 'counter.js',
        chunkFileNames: 'counter.js',
        assetFileNames: 'counter.[ext]'
      }
    }
  }
})
