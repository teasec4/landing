import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Если репозиторий назовёшь иначе — поменяй '/landing/'
export default defineConfig({
  plugins: [react()],
  base: '/landing/',
})