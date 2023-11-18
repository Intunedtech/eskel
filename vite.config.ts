import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ include: ['lib'] })
  ],

  build: {
    // Disable copy behavior of all files from the public directory to the output folder.    
    copyPublicDir: false,
    
    // Vite library mode configuration
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es']
    }

  }
})
