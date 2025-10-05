import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // 👈 استيراد path الصحيح

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()  
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 👈 المسار الصحيح للمجلد src
    },
  },
})