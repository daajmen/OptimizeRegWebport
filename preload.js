// preload.js
const { contextBridge, ipcRenderer } = require('electron');

// Logg för att kontrollera om preload laddas
console.log('Preload.js laddades');

// Exponera IPC-funktioner till renderingsprocessen
contextBridge.exposeInMainWorld('electronAPI', {
    fetchTokenWebport: (ip, user, password) => ipcRenderer.invoke('fetch-token', ip, user, password)
});
