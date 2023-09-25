const { app, BrowserWindow } = require('electron');

const createWindowFromURL = (url) => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });
  win.loadURL(url);
};

window.addEventListener('DOMContentLoaded', () => {
  const h2 = document.createElement('h2');
  h2.innerText = 'Bought to you by preload.js';
  document.body.appendChild(h2);
});
