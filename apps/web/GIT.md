# git

## 创建分支

>git checkout main         # 切换到主分支
>git pull origin main      # 拉取最新代码
>git checkout -b frdev     # 基于 main 新建 frdev 并切换

## 第一次推送

>git push -u origin frdev

## 约定式提交

```bash
build: 依赖调整 影响构建系统或外部依赖的更改 (示例作用域：gulp, broccoli, npm）
chore: 杂务处理 其他不会修改源文件或者测试文件的更改
ci: 脚本变更 对 CI 配置文件和脚本的更改（示例作用域： Travis, Circle, BrowserStack, SauceLabs)
docs: 文档变更 添加或者更新文档
feat: 添加功能 引入新的特性
fix 错误修复 修复 bug
perf: 性能优化 更改代码以提高性能
refactor: 代码重构 即不是修复 Bug，也不是添加特性的代码更改
revert: 恢复版本 恢复到上一个版本
style: 格式调整 不会影响代码含义的更改（空格，格式缺少分号等）
test: 更新测试 添加或者更新测试
```
