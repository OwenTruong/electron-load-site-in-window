const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
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
  createWindowFromURL('https://login.salesforce.com/');
});
