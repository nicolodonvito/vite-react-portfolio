import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { imageToWebpPlugin } from 'vite-plugin-image-to-webp'
import sitemapPlugin from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imageToWebpPlugin(),
    sitemapPlugin({
      hostname: 'https://ndonvito.it',
      dynamicRoutes: [],
      generateRobotsTxt: true,
      robots: [
        { userAgent: '*', allow: '/' },
      ],
    })
  ],
  base: './'
})
