function appendToOutput(message) {
    const outputDiv = document.getElementById('output');
    
    if (outputDiv) {
        const newMessage = document.createElement('div'); // Skapar ett nytt <div>-element
        newMessage.textContent = message; // Ställer in meddelandet
        outputDiv.appendChild(newMessage); // Lägger till meddelandet i div#output
    } else {
        console.error('Output-div kunde inte hittas');
    }
}


module.exports = {
    appendToOutput
};