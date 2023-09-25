const { app, BrowserWindow } = require('electron');
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
};

app.whenReady().then(() => {
  // createWindowFromURL('https://login.salesforce.com/');
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
