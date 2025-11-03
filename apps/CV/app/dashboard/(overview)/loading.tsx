/*
 * Author: zxl
 * 文件描述: loading.tsx 是一个基于 React Suspense 构建的 Next.js 特殊文件。它允许你在页面内容加载时显示一个替代的回退 UI。
 * 由于 <SideNav> 是静态的，它立即显示。用户可以在动态内容加载时与 <SideNav> 进行交互。
 * 用户在导航离开之前不需要等待页面完全加载（这被称为可中断导航）。
 * 创建时间 2025年10月13日 10:22:13
 */
import DashboardSkeleton from '@/app/ui/skeletons';
export default function Loading() {
    return <DashboardSkeleton />;
}