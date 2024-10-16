import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Set the base to the repository name, as GitHub Pages serves from a subdirectory
  base: '/codeShinobi-sarthak.github.io/',  // This is your GitHub Pages URL base

  plugins: [react()],
})
