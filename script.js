WA.room.area.onEnter('roof_lowerLeft').subscribe(() => {
    WA.room.hideLayer('roofs/lowerLeft');
});
WA.room.area.onLeave('roof_lowerLeft').subscribe(() => {
    WA.room.showLayer('roofs/lowerLeft');
});

WA.room.area.onEnter('roof_lowerRight').subscribe(() => {
    WA.room.hideLayer('roofs/lowerRight');
});
WA.room.area.onLeave('roof_lowerRight').subscribe(() => {
    WA.room.showLayer('roofs/lowerRight');
});

WA.room.area.onEnter('roof_upperLeft').subscribe(() => {    
    WA.room.hideLayer('roofs/upperLeft');
});
WA.room.area.onLeave('roof_upperLeft').subscribe(() => {    
    WA.room.showLayer('roofs/upperLeft');
});

WA.room.area.onEnter('roof_upperRight').subscribe(() => {    
    WA.room.hideLayer('roofs/upperRight');
});
WA.room.area.onLeave('roof_upperRight').subscribe(() => {    
    WA.room.showLayer('roofs/upperRight');
});
// Define the URL of your webhook
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

// Call the function to send player data initially
sendPlayerData();

// Call the function every 60 seconds
setInterval(sendPlayerData, 60000);
