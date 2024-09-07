async function fetchTokenWebport(ip, user, password) {
    try {
        console.log('Connecting to API, fetching token');
        const response = await fetch(`http://${ip}/api/v1/access/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({
                username: user,
                password: password
            })
        });

        if (response.ok) {
            const data = await response.json();
            return data.Token;
        } else {
            throw new Error('Error during fetching token');
        }
    } catch (error) {
        throw error;
    }
}


async function fetchData(tags, interval, ip, token) {
    try {
        const tagParams = tags.map(tag => `tag=${encodeURIComponent(tag)}`).join('&');
        const url = `http://${ip}/api/v1/tag/read?${tagParams}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'token': token
            }
        });

        const data = await response.json();
        return data; 

    } catch (error) {
        throw new Error('Något gick fel: ' + error.message);
        
    }
}


module.exports = {
    fetchTokenWebport,
    fetchData
};