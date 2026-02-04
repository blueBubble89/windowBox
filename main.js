const { app, BrowserWindow } = require('electron');
const path = require('path');

// 开机自启动设置
app.setLoginItemSettings({
  openAtLogin: true,
  openAsHidden: false
});

let mainWindow;

function createWindow() {
  // 创建全屏浏览器窗口
  mainWindow = new BrowserWindow({
    fullscreen: true,
    frame: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webviewTag: false
    }
  });

  // 生成带时间戳的 URL
  const timestamp = Date.now();
  const url = `https://map.polarlink.net/web/${timestamp}`;

  // 加载 URL
  mainWindow.loadURL(url);

  // 禁用菜单栏
  mainWindow.setMenuBarVisibility(false);

  // 窗口关闭时的处理
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// 当 Electron 完成初始化时创建窗口
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// 当所有窗口关闭时退出应用（macOS 除外）
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
