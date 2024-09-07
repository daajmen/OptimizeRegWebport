// ipcHandlers.js
const { ipcMain } = require('electron');
const { fetchTokenWebport } = require('./services/api.js'); // Importera din fetchToken-funktion

// Lägg till en IPC-hanterare för att hämta token
ipcMain.handle('fetch-token', async (event, ip, user, password) => {
    try {
        const token = await fetchTokenWebport(ip, user, password);
        return token;
    } catch (error) {
        throw new Error('Fel vid hämtning av token: ' + error.message);
    }
});

// Du kan lägga till fler IPC-hanterare här för olika funktioner
