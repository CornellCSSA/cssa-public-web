import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 线上 /content/* 与 /media/* 由 CloudFront 从内容桶提供（见 cssa-deployment-cdk）。
// 本地开发默认把这两个前缀转发到线上站点；想看本地内容时用 CONTENT_ORIGIN 指向别处。
// 转发失败（比如切 DNS 之前线上还没有 /content）时页面会自动退回内置内容。
const contentOrigin = process.env.CONTENT_ORIGIN ?? 'https://www.cornellcssa.org';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    proxy: {
      '/content': { target: contentOrigin, changeOrigin: true },
      '/media': { target: contentOrigin, changeOrigin: true },
    },
  },
});
