# log

## ✅ 使用 `%c` + CSS 样式美化日志

```ts
console.log('%c[INFO]%c 页面加载完成！', 'color: white; background: green; padding: 2px 6px; border-radius: 4px;', 'color: #333');
```

---

## ✅ 使用 `console.group()` 分组输出

```ts
// console.group 默认展开  console.groupCollapsed 默认不展开
console.group('%c用户信息', 'color: blue; font-weight: bold;');
console.log('姓名: 张三');
console.log('年龄: 18');
console.groupEnd();
```

---

## ✅ 使用 `console.table()` 展示数组或对象

```ts
const users = [
  { name: '张三', age: 20 },
  { name: '李四', age: 25 },
];
console.table(users);
```

---

## ✅ 5. 封装一个美化日志的函数

```ts
export function fancyLog(type: 'info' | 'warn' | 'error', label: string, message: any) {
  const colorMap = {
    info: 'blue',
    warn: 'orange',
    error: 'red'
  };

  console.log(
    `%c[${type.toUpperCase()}]%c ${label}:`,
    `color: white; background: ${colorMap[type]}; padding: 2px 6px; border-radius: 4px;`,
    'color: #333;',
    message
  );
}

// 使用方式：
fancyLog('info', '登录状态', '成功');
fancyLog('error', '登录失败', new Error('密码错误'));
```

---

## ✅ 打印分割线或标题

```ts
console.log('%c========== 页面加载 ==========', 'color: green; font-weight: bold;');
```

---
