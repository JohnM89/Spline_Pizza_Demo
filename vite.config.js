import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Add the PWA plugin with some basic options
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'], // Additional assets to cache
      manifest: {
        name: 'Your App Name',
        short_name: 'AppShortName',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png', // Path to your icons
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          // You can add more icons here
        ],
      },
    }),
  ],
});