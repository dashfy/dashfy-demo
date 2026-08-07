import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Symlinked local extensions can ship their own
  // react/react-dom copies; dedupe forces a single instance and avoids hook errors.
  // Feel free to remove this if you're not using symlinked local extensions.
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
})
