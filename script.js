// Helper function to manage roof visibility
function toggleRoofVisibility(areaName, layerName, isVisible) {
    const action = isVisible ? 'showLayer' : 'hideLayer';
    WA.room.area[`on${isVisible ? 'Leave' : 'Enter'}`](areaName).subscribe(() => {
        WA.room[action](layerName);
    });
}

// Configure visibility for each roof area
const roofAreas = [
    { area: 'roof_lowerLeft', layer: 'roofs/lowerLeft' },
    { area: 'roof_lowerRight', layer: 'roofs/lowerRight' },
    { area: 'roof_upperLeft', layer: 'roofs/upperLeft' },
    { area: 'roof_upperRight', layer: 'roofs/upperRight' },
];

// Apply visibility settings
roofAreas.forEach(({ area, layer }) => {
    toggleRoofVisibility(area, layer, false); // Hide on enter
    toggleRoofVisibility(area, layer, true);  // Show on leave
});
