import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import vsharp from 'vite-plugin-vsharp'
import { imageToWebpPlugin } from 'vite-plugin-image-to-webp'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vsharp(),
    imageToWebpPlugin(),
    react()],
})
