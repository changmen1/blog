# 问题记录

> svg绘制logo animejs [❌]
---

## 🎯 适合的使用场景

| 场景                      | 建议方式                                     |
| ----------------------- | ---------------------------------------- |
| 顶部导航栏                   | `<Link>` 或 `<button>` + `useNavigate` 都可 |
| 表单提交成功后跳转               | `useNavigate`                            |
| 点击卡片跳转详情页               | `useNavigate`                            |
| 动态路径（如 `/post/${id}`）跳转 | `navigate(\`/post/\${id}\`)\`            |

---

## git push遇大文件报错解决

```bash
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch 'src/assets/mp4/周星驰大话西游.mp4'" --prune-empty --tag-name-filter cat -- --all
```

## 强制推送

```bash
git push origin --force
```

## 页面内容宽度固定960px

## 响应式

> PC端

```css
    className="hidden md:flex"
    md:w-full
```

> 移动端

```css
    className="flex md:hidden"
```

<!-- 
react-bits（DavidHDev/react-bits）
集成 80+ 动画组件：文本动效、背景动画、交互效果等 
可以用来展示logo Ascii Text || Gradient Text
404页面展示文字动画  Fuzzy Text
来回交互文字动画 Scroll Velocity
动画文字可以用来展示编码时间 Rotating Text
动态卡片 Tilted Card 
3D立体动态卡片 Profile Card
相册浏览 Masonry
左右滑动相册组 Circular Gallery
超好看的照片 Chroma Grid
下拉动画 Lanyard
动态3D菜单 Dock
特效菜单 Gooey Nav
控制音乐声音大小特效组件 Elastic Slider
动态背景 Aurora
-->

<!-- 
// @ts-ignore 单行类型检查跳过
// @ts-nocheck 跳过整个文件类型检查 
-->
