import { WorkadventureRoomCommands } from "@workadventure/iframe-api-typings/play/src/front/Api/Iframe/room";

export function setupRoofSubscriptions() {
  const roofLayers = ["lowerLeft", "lowerRight", "upperLeft", "upperRight"];
  roofLayers.forEach((layer) => handleLayerVisibility(WA.room, layer));
}

export function handleLayerVisibility(
  room: WorkadventureRoomCommands,
  layerName: string
) {
  room.area
    .onEnter(`roof_${layerName}`)
    .subscribe(() => room.hideLayer(`roofs/${layerName}`));
  room.area
    .onLeave(`roof_${layerName}`)
    .subscribe(() => room.showLayer(`roofs/${layerName}`));
}
