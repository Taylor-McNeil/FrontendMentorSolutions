import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/FrontendMentorSolutions/four-cards/',
  plugins: [react()],
  build: {
    outDir: 'docs/four-cards',
    emptyOutDir: true
  }
})