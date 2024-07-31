// Function to handle roof layer visibility based on player location
function handleRoofLayerVisibility() {
    const relevantAreas = ['roof_lowerLeft', 'roof_lowerRight', 'roof_upperLeft', 'roof_upperRight'];

    // Check if player is in a relevant area when joining the server
    if (relevantAreas.some(area => WA.player.location === area)) {
        hideRoofLayers();
    }

    // Subscribe to area enter events
    relevantAreas.forEach(area => {
        WA.room.area.onEnter(area).subscribe(() => {
            hideRoofLayers();
        });
    });

    // Subscribe to area leave events
    relevantAreas.forEach(area => {
        WA.room.area.onLeave(area).subscribe(() => {
            showRoofLayers();
        });
    });
}

// Function to hide roof layers
function hideRoofLayers() {
    WA.room.hideLayer('roofs/lowerLeft');
    WA.room.hideLayer('roofs/lowerRight');
    WA.room.hideLayer('roofs/upperLeft');
    WA.room.hideLayer('roofs/upperRight');
}

// Function to show roof layers
function showRoofLayers() {
    WA.room.showLayer('roofs/lowerLeft');
    WA.room.showLayer('roofs/lowerRight');
    WA.room.showLayer('roofs/upperLeft');
    WA.room.showLayer('roofs/upperRight');
}

// Call the function to handle roof layer visibility inside the onInit listener
WA.onInit().then(() => {
    handleRoofLayerVisibility();

    // Define the URL of your webhook
    const DEFAULT_WEBHOOK_URL = 'https://apps.taskmagic.com/api/v1/webhooks/Wn8CdqSXOlSSMewy6xL60';

    // Function to send player data to the webhook
    async function sendPlayerData(webhookUrl = DEFAULT_WEBHOOK_URL, firstPing = false) {
        try {
            const playerId = WA.player.uuid;
            const playerName = WA.player.name;

            if (!playerId || !playerName) {
                throw new Error('Invalid player data');
            }

            // Create the payload
            const payload = {
                id: playerId,
                name: playerName,
                firstPing: firstPing
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

// Call the function to send player data initially with firstPing=true
sendPlayerData(DEFAULT_WEBHOOK_URL, true);

// Call the function every 60 seconds with firstPing=false
setInterval(() => {
    sendPlayerData(DEFAULT_WEBHOOK_URL, false);
}, 60000);
//////

// Function to set outline color based on player tag
WA.player.onEnter().subscribe(function(player) {
    // Assuming you have a way to get the tag of the player
    var playerTag = getPlayerTag(player); // Replace with your method to get the tag
    setPlayerOutlineColor(player, playerTag);
});

// Function to set outline color based on player tag
function setPlayerOutlineColor(player, tag) {
    switch (tag) {
        case "admins":
            player.setOutlineColor(128, 0, 128); // Purple
            break;
        case "teachers":
            player.setOutlineColor(0, 0, 255); // Blue
            break;
        case "students":
            player.setOutlineColor(255, 255, 0); // Yellow
            break;
        default:
            player.setOutlineColor(0, 0, 0); // Default to black if no tag matches
    }
}

// Function to get player tag (this is just a placeholder, implement your own logic)
function getPlayerTag(player) {
    // Example logic to determine the tag
    if (player.name.includes("admin")) {
        return "admins";
    } else if (player.name.includes("teacher")) {
        return "teachers";
    } else {
        return "students";
    }
}}})
