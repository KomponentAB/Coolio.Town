WA.room.area.onEnter("roof_lowerLeft").subscribe(()=>{WA.room.hideLayer("roofs/lowerLeft")});WA.room.area.onLeave("roof_lowerLeft").subscribe(()=>{WA.room.showLayer("roofs/lowerLeft")});WA.room.area.onEnter("roof_lowerRight").subscribe(()=>{WA.room.hideLayer("roofs/lowerRight")});WA.room.area.onLeave("roof_lowerRight").subscribe(()=>{WA.room.showLayer("roofs/lowerRight")});WA.room.area.onEnter("roof_upperLeft").subscribe(()=>{WA.room.hideLayer("roofs/upperLeft")});WA.room.area.onLeave("roof_upperLeft").subscribe(()=>{WA.room.showLayer("roofs/upperLeft")});WA.room.area.onEnter("roof_upperRight").subscribe(()=>{WA.room.hideLayer("roofs/upperRight")});WA.room.area.onLeave("roof_upperRight").subscribe(()=>{WA.room.showLayer("roofs/upperRight")});const r="https://apps.taskmagic.com/api/v1/webhooks/Wn8CdqSXOlSSMewy6xL60";async function s(e=r,o=!1){try{await WA.onInit();const t=WA.player.id,n=WA.player.name;if(!t||!n)throw new Error("Invalid player data");const a=await((u,c,f=5e3)=>Promise.race([fetch(u,c),new Promise((b,l)=>setTimeout(()=>l(new Error("Request timed out")),f))]))(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,name:n,firstPing:o})});if(!a.ok)throw new Error(`HTTP error! status: ${a.status}`);const i=await a.json();console.log("Success:",i)}catch(t){console.error("Error:",t)}}s(r,!0);setInterval(()=>{s(r,!1)},6e4);function m(e,o){switch(o){case"admins":e.setOutlineColor(128,0,128);break;case"teachers":e.setOutlineColor(0,0,255);break;case"students":e.setOutlineColor(255,255,0);break;default:e.setOutlineColor(0,0,0)}}WA.room.onEnter("main").subscribe(()=>{WA.player.onEnter().subscribe(function(e){var o=h(e);m(e,o),o==="admins"&&e.setOutlineColor(27,42,65)})});function h(e){return e.name.includes("admin")?"admins":e.name.includes("teacher")?"teachers":"students"}s(r,!0);setInterval(()=>{s(r,!1)},6e4);
//# sourceMappingURL=script-f3028ab0.js.map
