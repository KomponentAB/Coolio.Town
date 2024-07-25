const webhookUrl = 'https://apps.taskmagic.com/api/v1/webhooks/Wn8CdqSXOlSSMewy6xL60';
(function sendPlayerData() {
    WA.onInit().then(() => {
        const playerId = WA.player.id;
        const playerName = WA.player.name;
        const payload = {
            id: playerId,
            name: playerName
        };
        fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        setTimeout(sendPlayerData, 60000);
    });
})();
