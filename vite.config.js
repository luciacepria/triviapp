import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
    setupFiles: ["./src/SetupTests.js"],
    include: ["src/**/*.{test,spec}.{ts,tsx,js,jsx}"]
  }
})
