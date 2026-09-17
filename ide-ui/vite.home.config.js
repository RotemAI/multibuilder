import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

// The dashboard home is built SEPARATELY from the IDE.
//
// A single build with two entries made asset naming collide: both import the
// same app.css, so Vite emitted several stylesheets and the fixed name pattern
// resolved them as ide.css / ide2.css / …, leaving Tailwind's tokens in a file
// nothing referenced and the IDE unstyled. Two builds cannot collide.
export default defineConfig({
  plugins: [tailwindcss(), svelte()],
  base: './',
  build: {
    outDir: resolve(import.meta.dirname, '../static/home'),
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(import.meta.dirname, 'src/home.js'),
      output: {
        entryFileNames: 'home.js',
        chunkFileNames: 'home-[name].js',
        assetFileNames: 'home.[ext]',
      },
    },
  },
})
