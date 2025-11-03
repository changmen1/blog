/*
 * Author: 💗zxl
 * Created on Mon Jul 28 2025
 * 宠物猫 - 1.0
 * Copyright (c) 2025 Dv
 * https://github.com/changmen1
 */

// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'
import { useLoadingComplete, useInit } from './hooks/use-fillingPoint.ts'
import useFingerprintJS from './hooks/use-fingerprintJS.ts'
import ClickHearts from './hooks/ClickHearts.tsx'
// import Utils from './components/utils/index.tsx'
// import SplashCursor from './components/bits/Move.tsx'

useLoadingComplete('ZxlBlog程序初始化加载完成!')
useFingerprintJS()
if (process.env.NODE_ENV === 'production') {
  console.log(`%c这是生产环境`, 'color: white; background: red; padding: 2px 6px; border-radius: 4px;font-size:20px')
  useInit()
} else {
  console.log(`%c这是开发环境`, 'color: white; background: red; padding: 2px 6px; border-radius: 4px;font-size:20px')
}
createRoot(document.getElementById('zxl')!).render(
  // TODO 关闭颜色模式
  // <StrictMode>
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <App />
    <ClickHearts />
    {/* <Utils /> */}
    {/* 鼠标特效 */}
    {/* <SplashCursor /> */}
  </ThemeProvider>
  // </StrictMode>,
)
