import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

// Build a single self-contained bundle into ../static/ide/, which FastAPI
// mounts. Hashless filenames keep app.py's <script src> stable across builds.
export default defineConfig({
  plugins: [tailwindcss(), svelte()],
  // Assets are served under the dashboard's ROOT_PATH, and Monaco lazily
  // fetches its own CSS chunks at runtime. A relative base makes those
  // resolve against the script's own URL instead of the site root.
  base: './',
  build: {
    outDir: resolve(import.meta.dirname, '../static/ide'),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(import.meta.dirname, 'src/main.js'),
      output: {
        entryFileNames: 'ide.js',
        chunkFileNames: 'ide-[name].js',
        assetFileNames: 'ide.[ext]',
      },
    },
  },
})
