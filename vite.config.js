// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/sass/components/variables.scss";
          @import "./src/sass/components/mixins.scss";
        `,
      },
    },
  },
});