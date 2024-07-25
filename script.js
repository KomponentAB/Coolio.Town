// Define the URL of your webhook
const webhookUrl = 'https://hook.eu1.make.com/7ri45qjid9j6a5nlgvnzyabea01ik28y';

// Immediately Invoked Function Expression (IIFE)
(function sendPlayerData() {
    WA.onInit().then(() => {
        const playerId = WA.player.id;
        const playerName = WA.player.name;

        // Create the payload
        const payload = {
            id: playerId,
            name: playerName
        };

        // Send the payload to the webhook
        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        // Call the function again after 1 minute
        setTimeout(sendPlayerData, 60000);
    });
})();
