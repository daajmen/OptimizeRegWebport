console.log('window.electronAPI:', window.electronAPI);

document.getElementById('fetchTokenBtn').addEventListener('click', async () => {
    const ip = document.getElementById('ip').value;
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    
    try {
        const token = await window.electronAPI.fetchTokenWebport(ip, user, password);
    } catch (error) {
        console.error('Fel vid hämtning av token:', error);
    }
});