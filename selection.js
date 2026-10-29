(function(root){
function networkCode(value){return /^(FRA|FRP|FRANCHISE)$/i.test(value)?'FRP':value;}
function selectStyle(row,defs){let style=null;for(const d of defs){if(!d.enabled)continue;const key=d.key(row);if(key===null)continue;const item=d.items.find(x=>x.key===key);if(!item)continue;if(!item.checked)return null;
if(d.country){const region=JSON.stringify([row.region||'',row.rl||row.consultant||'Nicht zugeordnet']);if((d.region&&d.region!==region)||(d.bl&&d.bl!==(row.bl||'Nicht zugeordnet'))||(d.bu&&d.bu!==(row.bu||'Nicht zugeordnet'))||(d.territory&&d.territory!==(row.territory||'Nicht zugeordnet')))return null;}
style=item;}return style;}
root.NetworkSelection={selectStyle,networkCode};if(typeof module!=='undefined')module.exports=root.NetworkSelection;
})(typeof window==='undefined'?globalThis:window);
