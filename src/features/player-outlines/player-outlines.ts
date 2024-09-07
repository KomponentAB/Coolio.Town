export function setPlayerOutline() {
  if (WA.player.tags.includes("admin")) {
    WA.player.setOutlineColor(128, 0, 128); // Lila
  }

  if (WA.player.tags.includes("teacher")) {
    WA.player.setOutlineColor(0, 0, 255); // Blau
  }

  if (WA.player.tags.includes("masterclass")) {
    WA.player.setOutlineColor(255, 255, 0);
  }
}
