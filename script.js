const DEFAULT_WEBHOOK_URL = 'https://apps.taskmagic.com/api/v1/webhooks/Wn8CdqSXOlSSMewy6xL60';

// Function to send player data to the webhook
async function sendPlayerData(webhookUrl = DEFAULT_WEBHOOK_URL) {
    try {
        await WA.onInit();
        const playerId = WA.player.id;
        const playerName = WA.player.name;

        if (!playerId || !playerName) {
            throw new Error('Invalid player data');
        }

        // Create the payload
        const payload = {
            id: playerId,
            name: playerName
        };

        // Function to handle fetch with timeout
        const fetchWithTimeout = (url, options, timeout = 5000) => {
            return Promise.race([
                fetch(url, options),
                new Promise((_, reject) =>
                    setTimeout(() => reject(new Error('Request timed out')), timeout)
                )
            ]);
        };

        // Send the payload to the webhook
        const response = await fetchWithTimeout(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Success:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function to send player data
sendPlayerData();