
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
  define: {
    'process.env': {
      API_KEY: process.env.API_KEY || process.env.GEMINI_API_KEY || '',
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY || '',
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN || '',
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID || '',
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID || ''
    }
  },
});
