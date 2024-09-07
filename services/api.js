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
            console.log('Token fetched.');
            console.log('data:');
            console.log(data);
            console.log('datatoken:');
            console.log(data.Token);
            return data.Token;
        } else {
            throw new Error('Error during fetching token');
        }
    } catch (error) {
        console.log('Something went wrong: ' + error.message);
        throw error;
    }
}


module.exports = {
    fetchTokenWebport
};