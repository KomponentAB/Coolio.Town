import { setupCoWebsite } from "../features/chatbot/chatbot";
import { setupRoofSubscriptions } from "../features/layer-management/layer-management";
import { startPlayerDataInterval } from "../features/player-data/player-data";
import { setPlayerOutline } from "../features/player-outlines/player-outlines";

export function initializeScriptBehaviours() {
  /*
    WA.onInit is redundant to call because it's already called
    before this function is executed
  */
  setupRoofSubscriptions();
  startPlayerDataInterval();
  setPlayerOutline();
  setupCoWebsite();
}
