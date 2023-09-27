const { app, BrowserWindow, BrowserView, ipcMain } = require('electron');
const path = require('node:path');

const createWindow = () => {
  const win = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    width: 800,
    height: 600,
  });

  win.loadFile('public/index.html');
  return win;
};

const createWindowFromURL = (url) => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  win.loadURL(url);
  return win;
};

const createViewFromURL = (win, url) => {
  const view = new BrowserView();
  view.setBounds({
    x: 400,
    y: 0,
    width: 300,
    height: 600,
  });
  view.webContents.loadURL(url);
  win.setBrowserView(view);
  return view;
};

app.whenReady().then(() => {
  // createWindowFromURL('https://login.salesforce.com/');

  const win = createWindow();

  // createViewFromURL(win, 'https://www.linkedin.com/');

  ipcMain.handle('createEmbed', async (event, args) => {
    const view = createViewFromURL(win, args);
    return true;
  });

  ipcMain.handle('deleteEmbed', async (event) => {
    win.setBrowserView(null);
    return true;
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
