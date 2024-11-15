import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/React-project/' : '/',
  plugins: [
    VitePWA({
      manifest: {
        background_color: 'red',
        display: 'standalone',
        icons: [
          {
            purpose: 'any',
            sizes: '192x192',
            src: 'manifest-icon-192.maskable.png',
            type: 'image/png',
          },
          {
            purpose: 'maskable',
            sizes: '192x192',
            src: 'manifest-icon-192.maskable.png',
            type: 'image/png',
          },
          {
            purpose: 'any',
            sizes: '512x512',
            src: 'manifest-icon-512.maskable.png',
            type: 'image/png',
          },
          {
            purpose: 'maskable',
            sizes: '512x512',
            src: 'manifest-icon-512.maskable.png',
            type: 'image/png',
          },
        ],
        name: 'Wild adoption',
        short_name: 'Wild adoption',
        start_url: '.',
        theme_color: 'green',
      },
      registerType: 'autoUpdate',
      workbox: {
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
        globPatterns: ['assets/**', 'index.html', 'manifest.webmanifest'],
      },
      devOptions: {
        enabled: false,
      },
    }),
    react(),
  ],
  server: {
    host: '0.0.0.0',
  },
  build: {
    sourcemap: true,
  },
})
