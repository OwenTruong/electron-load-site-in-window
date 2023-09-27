const { app, BrowserWindow, contextBridge, ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
  const h2 = document.createElement('h2');
  h2.innerText = 'Bought to you by preload.js';
  document.body.appendChild(h2);
});

contextBridge.exposeInMainWorld('electron', {
  createEmbed: async (url) => ipcRenderer.invoke('createEmbed', url),
  deleteEmbed: async () => ipcRenderer.invoke('deleteEmbed'),
});
