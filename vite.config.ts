// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  
  // 빌드 최적화
  build: {
    outDir: 'dist',
    sourcemap: false, // 프로덕션에서는 false
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          // 큰 라이브러리들을 별도 청크로 분리
          vendor: ['react', 'react-dom'],
          ui: ['styled-components'],
          router: ['react-router-dom'],
          utils: ['axios']
        }
      }
    },
    // 청크 크기 경고 임계값 증가
    chunkSizeWarningLimit: 1000
  },
  
  // 개발 서버 설정
  server: {
    port: 5174,
    host: true
  },
  
  // 프로덕션 환경 변수
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  },
  
  // 경로 별칭 (Node.js 방식으로 수정)
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
      '@components': path.resolve(process.cwd(), 'src/Components'),
      '@pages': path.resolve(process.cwd(), 'src/pages')
    }
  }
})