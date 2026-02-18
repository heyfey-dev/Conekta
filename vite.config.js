import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // optional: use @ for src
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'] // ensures Vite checks TS/TSX first
  }
});
