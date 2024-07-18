// Definiert eine Funktion, um die Wiederholung von Code zu reduzieren
function toggleRoofVisibility(areaName, action) {
    const layerName = `roofs/${areaName}`;
    if (action === 'enter') {
        WA.room.area.onEnter(areaName).subscribe(() => {
            WA.room.hideLayer(layerName);
        });
    } else if (action === 'leave') {
        WA.room.area.onLeave(areaName).subscribe(() => {
            WA.room.showLayer(layerName);
        });
    }
}

// Definiert eine Liste von Dachbereichen
const roofAreas = ['lowerLeft', 'lowerRight', 'upperLeft', 'upperRight'];

// Wendet die Funktion auf jeden Dachbereich an
roofAreas.forEach(area => {
    toggleRoofVisibility(area, 'enter');
    toggleRoofVisibility(area, 'leave');
});
