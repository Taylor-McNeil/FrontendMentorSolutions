import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/FrontendMentorSolutions/docs/four-cards/',
  plugins: [react()],
})

