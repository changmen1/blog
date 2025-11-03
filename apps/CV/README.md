# Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.
**根据官方Nextjs16学习步骤 记录重要信息**

## 第一章 创建Next.js 应用程序并运行开发服务器

### 文件夹结构

- /app : 包含了您应用程序的所有路由、组件和逻辑，您将主要在这里进行工作。
- /app/lib : 包含了您应用程序中使用的函数，例如可重用的实用函数和数据获取函数。
- /app/ui : 包含了您应用程序的所有 UI 组件，例如卡片、表格和表单。为了节省时间，我们已经为您预先设计了这些组件。
- /public : 包含了您应用程序的所有静态资源，例如图片。
- 配置文件：您还会在应用程序的根目录下注意到一些配置文件，例如 next.config.ts 。当您使用 create-next-app 开始一个新项目时，这些文件中的大多数都会被创建和预先配置。在这个课程中，您不需要修改它们。

> 对于这个项目，我们在 app/lib/placeholder-data.ts 中提供了一些占位符数据。文件中的每个 JavaScript 对象代表你数据库中的一个表。
> 在设置数据库的章节中，您将使用这些数据来初始化您的数据库（用一些初始数据填充它）。
> Next.js 会检测您的项目是否使用 TypeScript，并自动安装必要的包和配置。Next.js 还附带了一个 TypeScript 插件，用于您的代码编辑器，以帮助实现自动完成和类型安全。

```bash
    Opening the command palette (Ctrl/⌘ + Shift + P)
    - 打开命令面板（ Ctrl/⌘ + Shift + P ）
    Searching for "TypeScript: Select TypeScript Version"
    - 搜索“TypeScript：选择 TypeScript 版本”
    Selecting "Use Workspace Version"
    - 选择“使用工作区版本”
```

## 第二章 CSS样式

How to add a global CSS file to your application.
如何将全局 CSS 文件添加到您的应用程序中。

Two different ways of styling: Tailwind and CSS modules.
两种不同的样式化方式：Tailwind 和 CSS 模块。

How to conditionally add class names with the clsx utility package.
如何使用 clsx 工具包条件性地添加类名。

### clsx

- 您可以使用 clsx 来有条件地应用类，如下所示：
- 假设您想创建一个接受 status 的 InvoiceStatus 组件。状态可以是 'pending' 或 'paid' 。
- 如果是 'paid' ，您希望颜色为绿色。如果是 'pending' ，您希望颜色为灰色

```tsx
import clsx from 'clsx';
 
export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
    // ...
)}    
```

## 第三章 优化字体和图片

如何使用 next/font 添加自定义字体。

如何使用 next/image 添加图片。

在 Next.js 中字体和图片是如何进行优化的。

>当你使用 next/font 模块时，Next.js 会自动在应用中优化字体。它会在构建时下载字体文件，并将它们与你的其他静态资源一起托管。这意味着当用户访问你的应用时，不会有额外的字体网络请求，这会影响性能。

### 添加主字体

在您的 /app/ui 文件夹中，创建一个名为 fonts.ts 的新文件。您将使用此文件来保存将在整个应用中使用的字体。

```ts
    import { Inter } from 'next/font/google'
    export const inter = Inter({ subsets: ['latin'] });
```

最后，将字体添加到 /app/layout.tsx 中的 body元素：

```tsx
    import "@/app/ui/global.css"
    import { inter } from '@/app/ui/fonts';

    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode;
    }) {
      return (
        <html lang="en">
          <body className={`${inter.className} antialiased`}>{children}</body>
        </html>
      );
    }
```

通过将 Inter 添加到 body 元素中，字体将应用于您的整个应用。这里，您还添加了 Tailwind antialiased 类，它使字体更加平滑。使用这个类不是必需的，但它增添了一些美感。

### 添加副字体

```ts
    import { Inter, Lusitana } from 'next/font/google'
    export const inter = Inter({ subsets: ['latin'] });
    export const lusitana = Lusitana({
        subsets: ['latin'],
        weight: ['400', '700'],
    })
```

## 第四章 创建布局和页面

Create the dashboard routes using file-system routing.
使用文件系统路由创建 dashboard 路由。

Understand the role of folders and files when creating new route segments.
了解在创建新路由段时文件夹和文件的作用。

Create a nested layout that can be shared between multiple dashboard pages.
创建一个可以共享于多个仪表板页面的嵌套布局。

Understand what colocation, partial rendering, and the root layout are.
了解什么是托管、部分渲染和根布局。

## 第五章 页面导航

How to use the next/link component.
如何使用 next/link 组件。

How to show an active link with the usePathname() hook.
如何使用 usePathname() 钩子显示活动链接。

How navigation works in Next.js.
Next.js 中导航的工作原理。

## 第六章 设置数据库

> vercel托管项目 阿里云解析就可以

Push your project to GitHub.
将您的项目推送到 GitHub。

Set up a Vercel account and link your GitHub repo for instant previews and deployments.
设置 Vercel 账户并将您的 GitHub 仓库链接，以实现即时预览和部署。

Create and link your project to a Postgres database.
创建并将您的项目链接到一个 Postgres 数据库。

Seed the database with initial data.
初始化数据库数据。

## 第七章 获取数据

Learn about some approaches to fetching data: APIs, ORMs, SQL, etc.
了解一些获取数据的方法：API、ORM、SQL 等。

How Server Components can help you access back-end resources more securely.
了解服务器组件如何帮助你更安全地访问后端资源。

What network waterfalls are.
什么是网络瀑布。

How to implement parallel data fetching using a JavaScript Pattern.
如何使用 JavaScript 模式实现并行数据获取。

## 第八章 静态和动态渲染

What static rendering is and how it can improve your application's performance.
静态渲染是什么以及它如何提高您应用程序的性能。

What dynamic rendering is and when to use it.
什么是动态渲染以及何时使用它。

Different approaches to make your dashboard dynamic.
使您的仪表板动态化的不同方法。

Simulate a slow data fetch to see what happens.
模拟慢速数据获取以查看会发生什么。

## 第九章 流式传输

What streaming is and when you might use it.
什么是流式传输以及何时可能使用它。

How to implement streaming with loading.tsx and Suspense.
如何使用 loading.tsx 和 Suspense 实现流式传输。

What loading skeletons are.
什么是加载骨架。

What Next.js Route Groups are, and when you might use them.
Next.js 路由组是什么，以及你可能在什么时候使用它们。

Where to place React Suspense boundaries in your application.
在哪里放置 React Suspense 边界。

```txt
流式传输是一种数据传输技术，允许你将路由分解成更小的“块”，并随着它们准备就绪，逐步从服务器流式传输到客户端。
通过流式传输，您可以防止缓慢的数据请求阻塞整个页面。这使用户可以在等待所有数据加载并显示任何 UI 之前，看到并与之交互页面的部分。
在 Next.js 中，您有两种实现流式传输的方式：
在页面级别，使用 loading.tsx 文件（为您创建 <Suspense> ）。
在组件级别，使用 <Suspense> 进行更细粒度的控制。
```

## 第十章 部分预渲染

What Partial Prerendering is.
部分预渲染是什么。

How Partial Prerendering works.
如何实现部分预渲染。

To install the canary release of Next.js, run:
要安装 Next.js canary 版本，请运行：

```bash
    pnpm install next@canary
``

通过在您的 next.config.ts 文件中添加 ppr 选项来为您的 Next.js 应用启用 PPR：

```ts
import type { NextConfig } from 'next';
 
const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental'
  }
};
 
export default nextConfig;
```

接下来，将 experimental_ppr 段配置选项添加到您的仪表板布局中：

```tsx
import SideNav from '@/app/ui/dashboard/sidenav';
 
export const experimental_ppr = true;
 
// ...
```

这就是了。在开发过程中，你可能看不到你的应用有什么区别，但在生产环境中，你应该会注意到性能的提升。Next.js 会预渲染路由的静态部分，并将动态部分推迟到用户请求时再渲染。

关于部分预渲染的好处是，您无需更改代码即可使用它。只要您使用 Suspense 来包裹路由的动态部分，Next.js 就会知道您的路由中哪些部分是静态的，哪些是动态的。

我们认为 PPR 有潜力成为 Web 应用的默认渲染模型，将静态站点和动态渲染的优点结合起来。然而，它仍然是实验性的。我们希望在未来使其稳定，并使其成为使用 Next.js 构建的默认方式。

## 第十一章 添加搜索和分页

学习如何使用 Next.js API： useSearchParams ， usePathname ，和 useRouter 。

使用 URL 搜索参数实现搜索和分页。

useSearchParams - 允许您访问当前 URL 的参数。例如，此 URL /dashboard/invoices?page=1&query=pending 的搜索参数将如下所示： {page: '1', query: 'pending'}
usePathname - 允许您读取当前 URL 的路径名。例如，对于路由 /dashboard/invoices ， usePathname 将返回 '/dashboard/invoices' 。
useRouter - 启用客户端组件内路由之间的程序化导航。您可以使用多种方法。

何时使用 useSearchParams() 钩子与 searchParams 属性？
你可能已经注意到你使用了两种不同的方式来提取搜索参数。你使用哪一种取决于你是在客户端还是服务器上工作。<Search是一个客户端组件，所以你使用了 useSearchParams() 钩子从客户端访问参数。
Table是一个从服务器获取自己数据的服务器组件，所以你可以从页面传递 searchParams 属性到组件。
作为一般规则，如果你想从客户端读取参数，使用 useSearchParams() 钩子，这样可以避免需要回到服务器。

您在每次按键时都在更新 URL，因此也在每次按键时查询数据库！这对我们的应用来说不是问题，但如果您的应用有数千用户，每个用户在每次按键时都向数据库发送新的请求，那就另当别论了。
防抖是一种编程实践，它限制了函数可以触发的频率。在我们的情况下，您只想在用户停止输入时查询数据库。

防抖是如何工作的：
触发事件：当发生应该防抖的事件（如搜索框中的按键）时，计时器开始。
等待：如果在新事件发生之前计时器尚未到期，计时器将被重置。
执行：如果计时器到达倒计时结束，防抖函数将被执行。
您可以通过几种方式实现防抖，包括手动创建自己的防抖函数。为了保持简单，我们将使用名为 use-debounce 的库

## 第十二章 修改数据

React 服务器操作是什么以及如何使用它们来修改数据。

如何处理表单和服务器组件。

与原生 FormData 对象一起工作的最佳实践，包括类型验证。

如何使用 revalidatePath API 重新验证客户端缓存。

如何创建具有特定 ID 的动态路由段。

## 第十三章 错误处理

如何使用特殊的 error.tsx 文件来捕获路由段中的错误，并向用户显示一个回退 UI。
如何使用 notFound 函数和 not-found 文件来处理 404 错误（对于不存在的资源）。
