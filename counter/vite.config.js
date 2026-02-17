import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()],
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
