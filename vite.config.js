import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Ensures Vite looks in the correct directory
  build: {
    outDir: 'dist', // Build output folder
  },
});
