import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      input: {
        // creating MPAs, route to *domainName/pages/{page_name}/*
        // NB: Dont forget to add a trailing slash at the end of the url.
        main: resolve(__dirname, '/index.html'),
        dashboard: resolve(__dirname, '/src/dashboard/index.html')
      }
    }
  }
})
