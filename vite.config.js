import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { imageToWebpPlugin } from 'vite-plugin-image-to-webp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imageToWebpPlugin()
  ],
  base: './'
})
