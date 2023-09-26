const { app, BrowserWindow, BrowserView } = require('electron');
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
  win.setBrowserView(view);
  view.setBounds({
    x: 0,
    y: 0,
    width: 300,
    height: 300,
  });
  view.webContents.loadURL(url);
};

app.whenReady().then(() => {
  // createWindowFromURL('https://login.salesforce.com/');

  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  const view = new BrowserView();
  win.setBrowserView(view);
  view.setBounds({
    x: 400,
    y: 0,
    width: 300,
    height: 600,
  });
  view.webContents.loadURL('https://www.linkedin.com/');
  win.loadFile('public/index.html');

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
