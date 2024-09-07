import { CoWebsite } from "@workadventure/iframe-api-typings";

export async function setupCoWebsite() {
  const { name } = WA.player;
  const wokaUrl = await WA.player.getWokaPicture();
  let botUrl = `https://chat.cocreation.world/cooliobot?playername=${encodeURIComponent(
    name
  )}&avatar=${encodeURIComponent(wokaUrl)}`;

  // Check if the player has the "admin" tag
  if (WA.player.tags.includes("admin")) botUrl += "&tag=admin";

  let coWebSite: CoWebsite;
  WA.room.area.onEnter("website").subscribe(async () => {
    coWebSite = await WA.nav.openCoWebSite(botUrl);
  });

  WA.room.area.onLeave("website").subscribe(() => coWebSite?.close());
}
