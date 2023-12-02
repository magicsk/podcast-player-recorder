import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [nodePolyfills(), react()],
  server: {
    cors: {
      origin: '*'
    },
    proxy: {
      '^/s/.*': {
        target: 'https://anchor.fm/',
        changeOrigin: true,
        secure: true
      }
    }
  }
})
