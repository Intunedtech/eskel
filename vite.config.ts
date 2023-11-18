import { defineConfig } from 'vite'
import { extname, relative, resolve } from 'path'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(), // Helps inject css modules using import statement within eskel-component-library.js
    dts({ include: ['lib'] })
  ],

  build: {
    // Disable copy behavior of all files from the public directory to the output folder.    
    copyPublicDir: false,
    
    // Vite library mode configuration
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es']
    },

    // Rollup config
    rollupOptions: {
      // externalize dependencies to remove the code from bundle.
      //  as the app using this library is expected to have react already installed
      external: ['react', 'react/jsx-runtime'],

      // Split files
      input: Object.fromEntries(
        glob.sync('lib/**/*.{ts,tsx}').map(file => [
          // The name of the entry point
          // lib/nested/foo.ts becomes nested/foo
          relative(
            'lib',
            file.slice(0, file.length - extname(file).length)
          ),
          // The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, import.meta.url))
        ])
      ),

      // define output filenames for the split files
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      }
    }

  }
})
