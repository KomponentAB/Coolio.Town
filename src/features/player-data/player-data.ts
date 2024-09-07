import { WorkadventurePlayerCommands } from "@workadventure/iframe-api-typings/play/src/front/Api/Iframe/player";
import { fetchWithTimeout } from "../../utils/general";

export function startPlayerDataInterval() {
  // Function to send player data to the webhook
  if (WA.player.tags.includes("bot")) return;

  // Call the function to send player data initially with firstPing=true
  sendPlayerData(WA.player, true);

  // Call the function every 60 seconds with firstPing=false
  setInterval(() => {
    sendPlayerData(WA.player, false);
  }, 60000);
}

export async function sendPlayerData(
  player: WorkadventurePlayerCommands,
  firstPing = false
) {
  const WEBHOOK_URL =
    "https://apps.taskmagic.com/api/v1/webhooks/udowzdkJjQ2MJUNTpL1A0";

  const { id, name } = player;

  if (!id || !name) {
    throw new Error("Invalid player data");
  }

  // Create the payload
  const payload = {
    id,
    name,
    firstPing: firstPing,
  };

  // Send the payload to the webhook
  return fetchWithTimeout(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => (res as Response).json())
    .then((data) => {
      console.log("Success:", data);
      return data;
    })
    .catch((res) => {
      console.error(`HTTP error! status: ${res.status}`, res);
      console.error("Error:", res);
    });
}
