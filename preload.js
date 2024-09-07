// preload.js
const { contextBridge, ipcRenderer } = require('electron');
const { appendToOutput } = require('./communication/outputModule');
const { fetchdata } = require('./services/api');
const { mapData } = require('./utils/saveMeasurements');


// Exponera IPC-funktioner till renderingsprocessen
contextBridge.exposeInMainWorld('electronAPI', {
    fetchTokenWebport: (ip, user, password) => ipcRenderer.invoke('fetch-token', ip, user, password),
    fetchdata: (tags, interval, ip, token) => ipcRenderer.invoke('fetch-data', tags, interval, ip, token),
    mapData: (incomingData) => ipcRenderer.invoke('map-data', incomingData)

});
// Exponera appendToOutput till renderingsprocessen
contextBridge.exposeInMainWorld('interactionAPI', {
    appendToOutput: (message) => appendToOutput(message)
});

