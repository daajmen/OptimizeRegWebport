// ipcHandlers.js
const { ipcMain } = require('electron');
const { fetchTokenWebport, fetchData } = require('./services/api.js'); // Importera din fetchData-funktion också
const { mapData } = require('./utils/saveMeasurements.js'); // Importera din fetchData-funktion också

// Lägg till en IPC-hanterare för att hämta token
ipcMain.handle('fetch-token', async (event, ip, user, password) => {
    try {
        const token = await fetchTokenWebport(ip, user, password);
        return token;
    } catch (error) {
        throw new Error('Fel vid hämtning av token: ' + error.message);
    }
});

// IPC-hanterare för att hämta data
ipcMain.handle('fetch-data', async (event, tags, interval, ip, token) => {
    try {
        const data = await fetchData(tags, interval, ip, token); // Anropa funktionen för att hämta data
        return data;
    } catch (error) {
        throw new Error('Fel vid hämtning av data: ' + error.message);
    }
});

// IPC-hanterare för att hämta data
ipcMain.handle('map-data', async (event, incomingData) => {
    try {
        const mappedData = await mapData(incomingData); 
        return mappedData;
    } catch (error) {
        throw new Error('Fel vid skrivning av data: ' + error.message);
    }
});