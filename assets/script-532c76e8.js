const t="https://apps.taskmagic.com/api/v1/webhooks/Wn8CdqSXOlSSMewy6xL60";(function o(){WA.onInit().then(()=>{const n=WA.player.id,a=WA.player.name;fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:n,name:a})}).then(e=>e.json()).then(e=>{console.log("Success:",e)}).catch(e=>{console.error("Error:",e)}),setTimeout(o,6e4)})})();
//# sourceMappingURL=script-532c76e8.js.map
