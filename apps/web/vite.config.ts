import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig(({ mode }) => {
  // 加载 .env、.env.development、.env.production 等
  const env = loadEnv(mode, process.cwd(), '')
  console.log('>>>>>>>>VITE_WAKATIME_API_KEY', env.VITE_WAKATIME_API_KEY)

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      host: true,
      port: 5173,
      allowedHosts: 'all', // ⚠️ 开发用，不建议生产环境
      proxy: {
        '/wakatime': {
          target: 'https://wakatime.com/api/v1',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/wakatime/, ''),
          headers: {
            Authorization: `Basic ${btoa(`${env.VITE_WAKATIME_API_KEY}:`)}`,
          },
        },
      },
    },
  }
})

