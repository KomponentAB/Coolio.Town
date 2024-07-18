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
    WA.room.hideLayer('roofs/upperLeft');
});
WA.room.area.onLeave('roof_upperRight').subscribe(() => {    
    WA.room.showLayer('roofs/upperRight');
});
