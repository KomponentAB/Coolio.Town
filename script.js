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
const DEFAULT_WEBHOOK_URL = 'https://apps.taskmagic.com/api/v1/webhooks/udowzdkJjQ2MJUNTpL1A0';

// Function to send player data to the webhook
WA.onInit().then(async () => {
if (!WA.player.tags.includes("bot") && !WA.player.tags.includes("admin")) {
    async function sendPlayerData(webhookUrl = DEFAULT_WEBHOOK_URL, firstPing = false) {
        try {
            await WA.onInit();
            const playerId = WA.player.id;
            const playerName = WA.player.name;
            console.log(playerName); // or use the playerName variable elsewhere in your code

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
    }

    let firstPing = true;

    // Call the function to send player data initially with firstPing=true
    sendPlayerData(DEFAULT_WEBHOOK_URL, firstPing);

    // Set firstPing to false after the initial call
    firstPing = false;

    // Call the function every 60 seconds with firstPing=false
    setInterval(() => {
        sendPlayerData(DEFAULT_WEBHOOK_URL, firstPing);
    }, 60000);
}});
////////////////////////////////////////////////
WA.onInit().then(() => {
    if (WA.player.tags.includes("admin")) {
        WA.player.setOutlineColor(128, 0, 128); // Lila
    } else if (WA.player.tags.includes("teacher")) {
        WA.player.setOutlineColor(0, 0, 255); // Blau
    } else if (WA.player.tags.includes("masterclass")) {
        WA.player.setOutlineColor(255, 255, 0); // Gelb
    }
});

WA.onInit().then(async () => {
    // Check if the player has the "admin" tag
    const playerName = WA.player.name;
    const wokaurl = await WA.player.getWokaPicture();
    var boturl = `https://chat.cocreation.world/cooliobot?playername=${encodeURIComponent(playerName)}&avatar=${encodeURIComponent(wokaurl)}`;
    if (WA.player.tags.includes("admin")) {
        boturl = `https://chat.cocreation.world/cooliobot?playername=${encodeURIComponent(playerName)}&avatar=${encodeURIComponent(wokaurl)}&tag=admin`;
    } ///if function stops here
    // Get the player's name

    var coWebSite = undefined;
    var shouldClose = false;
    WA.room.area.onEnter('website').subscribe(async () => {
        
        coWebSite = await WA.nav.openCoWebSite(boturl);
        if (shouldClose) {
            coWebSite.close();
            coWebSite = undefined;
            shouldClose = false;
        }
    });

    WA.room.area.onLeave('website').subscribe(() => {
        if (coWebSite !== undefined) {
            coWebSite.close();
            coWebSite = undefined;
        } else {
            shouldClose = true;
        }
    });
});
