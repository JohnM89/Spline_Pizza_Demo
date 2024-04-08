import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Move all code from node_modules into a separate chunk
            return 'vendor';
          }
        }
      }
    }
  },
  plugins: [
    react(),
    // Add the PWA plugin with some basic options
    VitePWA({
  workbox: {
    maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // Increase the limit as necessary, e.g., to 5MB
  },
  
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt'], // Additional assets to cache
      manifest: {
        name: 'Pizza App',
        short_name: 'PZA',
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
  chunkSizeWarningLimit: 1000,
});