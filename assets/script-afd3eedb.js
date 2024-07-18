function i(e,o){const r=`roofs/${e}`;o==="enter"?WA.room.area.onEnter(e).subscribe(()=>{WA.room.hideLayer(r)}):o==="leave"&&WA.room.area.onLeave(e).subscribe(()=>{WA.room.showLayer(r)})}const s=["lowerLeft","lowerRight","upperLeft","upperRight"];s.forEach(e=>{i(e,"enter"),i(e,"leave")});
//# sourceMappingURL=script-afd3eedb.js.map
