# Git 使用教程

本教程将指导你如何使用Git来管理你的代码，从初始设置到推送代码到GitHub。

## 1. 创建 .gitignore 文件

`.gitignore` 文件用于告诉Git哪些文件或目录不需要被追踪。

```bash
# 创建 .gitignore 文件
touch .gitignore

# 在 .gitignore 中添加常见的需要忽略的文件
# OS 生成的文件
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes

# IDE 相关文件
.vscode/
.idea/
*.swp
*.swo

# Node.js 相关
node_modules/
npm-debug.log
yarn-debug.log
yarn-error.log
```

## 2. 初始化Git仓库

```bash
# 进入项目目录
cd 你的项目目录

# 初始化Git仓库
git init
```

## 3. 设置远程仓库

### 方法一：HTTPS（需要用户名和Token）

```bash
# 添加远程仓库
git remote add origin https://github.com/用户名/仓库名.git

# 验证远程仓库
git remote -v
```

### 方法二：SSH（推荐，更安全且方便）

1. 生成 SSH 密钥（如果还没有）：
```bash
ssh-keygen -t ed25519 -C "你的邮箱"
```

2. 查看并复制公钥：
```bash
cat ~/.ssh/id_ed25519.pub
```

3. 将公钥添加到 GitHub：
   - 访问 https://github.com/settings/ssh/new
   - 填写标题（如："MacBook Air"）
   - 粘贴公钥
   - 点击"Add SSH key"

4. 设置远程仓库 SSH 地址：
```bash
git remote add origin git@github.com:用户名/仓库名.git
```

## 4. 推送代码

### 命令行方式

```bash
# 添加所有文件到暂存区
git add .

# 提交更改
git commit -m "你的提交信息"

# 推送到远程仓库
git push -u origin main  # 第一次推送
git push  # 之后的推送
```

### VS Code 图形界面方式

1. 打开源代码管理视图：
   - 点击左侧活动栏的源代码管理图标
   - 或使用快捷键 `Cmd + Shift + G`（Mac）/ `Ctrl + Shift + G`（Windows）

2. 暂存更改：
   - 点击文件旁的 `+` 号暂存单个文件
   - 点击"更改"上方的 `+` 号暂存所有更改

3. 提交更改：
   - 输入提交信息
   - 点击"✓"按钮或按 `Cmd/Ctrl + Enter`

4. 推送更改：
   - 点击底部状态栏的同步按钮（云图标）
   - 或在源代码管理视图中点击"..."选择"推送"

## 5. 常见问题解决

### 认证失败

如果使用 HTTPS 遇到认证失败：
1. 确保使用正确的个人访问令牌（Token）
2. 或切换到 SSH 方式（推荐）

### 推送被拒绝

如果推送时显示 "rejected"：
1. 先拉取远程更改：`git pull origin main`
2. 解决冲突（如果有）
3. 重新推送：`git push`

## 6. 日常使用流程

1. 开始工作前：`git pull` 获取最新代码
2. 修改代码
3. 暂存更改：`git add .`
4. 提交更改：`git commit -m "描述信息"`
5. 推送到远程：`git push`

## 提示

- 养成经常提交的习惯
- 提交信息要清晰明了
- 推送前先拉取最新代码
- 定期检查 `git status` 确保工作区清洁 