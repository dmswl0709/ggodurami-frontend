import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // ⭐ 반드시 추가

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ⭐ @를 src로 지정
    },
  },
});