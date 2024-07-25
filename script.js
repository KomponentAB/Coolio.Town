// Define the URL of your webhook
const webhookUrl = 'https://apps.taskmagic.com/api/v1/webhooks/Wn8CdqSXOlSSMewy6xL60';

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
