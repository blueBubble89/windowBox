# Polarlink Map Viewer

全屏 Electron 应用，开机自启动并访问 Polarlink 地图。

## 功能特性

- ✅ 开机自启动
- ✅ 全屏显示（无边框）
- ✅ 自动访问 https://map.polarlink.net/web/ 并附加时间戳
- ✅ GitHub Actions 自动构建 Windows 安装包

## 开发

```bash
# 安装依赖
npm install

# 启动开发模式（Mac 上测试）
npm start

# 构建 Windows 版本（需要在 GitHub Actions 中构建，Mac 本地无法构建 Windows 安装包）
# 推送代码到 GitHub 后会自动构建
```

**注意：** 在 Mac 上无法直接构建 Windows 安装包，需要通过 GitHub Actions 在 Windows 环境中构建。

## 构建说明

### Mac 本地开发

在 Mac 上可以运行 `npm start` 测试应用功能，但无法构建 Windows 安装包。

### GitHub Actions 自动构建（推荐）

1. 将代码推送到 GitHub
2. GitHub Actions 会自动构建 Windows 版本
3. 构建产物会上传为 Artifacts
4. 如果推送 tag（如 `v1.0.0`），会自动创建 Release

创建 Release 的命令：
```bash
git tag v1.0.0
git push origin v1.0.0
```

## 图标

将应用图标放在 `build/icon.ico`（Windows）。

## 注意事项

- 首次运行时，Windows 可能会提示安全警告
- 开机自启动需要用户授权
- 按 `Alt+F4` 或 `Ctrl+W` 可以退出全屏应用
