let token; 
let ip;

document.getElementById('fetchTokenBtn').addEventListener('click', async () => {
    ip = document.getElementById('ip').value;
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    
    try {
        window.interactionAPI.appendToOutput('Knappen klickades, försöker hämta token...');
        token = await window.electronAPI.fetchTokenWebport(ip, user, password);
        window.interactionAPI.appendToOutput('Token: ' + token);
    } catch (error) {
        window.interactionAPI.appendToOutput('Fel vid hämtning av token:');
    }
});


document.getElementById('fetchdataBtn').addEventListener('click', async () => {
    const tags = document.getElementById('tags').value.split('\n').map(tag => tag.trim());
    const interval = 'temp';
    try {
        window.interactionAPI.appendToOutput('Taggdata hämtas');
        const data = await window.electronAPI.fetchdata(tags, interval, ip, token);

        // Mappa data och strukturera det i variabler
        const measurementData = await window.electronAPI.mapData(data);

        
        window.interactionAPI.appendToOutput((JSON.stringify(measurementData, null, 2)));
    } catch (error) {
     
        window.interactionAPI.appendToOutput('Fel vid hämtning taggar:');
    }
});


