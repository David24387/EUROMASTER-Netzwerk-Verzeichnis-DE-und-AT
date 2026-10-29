const assert=require('node:assert/strict'),S=require('../selection.js');
const row={network:'EFR',rl:'RL1'},defs=[{enabled:true,key:r=>r.network,items:[{key:'EFR',checked:true}]},{enabled:true,key:r=>r.rl,items:[{key:'RL1',checked:true}]}];
assert(S.selectStyle(row,defs));defs[0].items[0].checked=false;assert.equal(S.selectStyle(row,defs),null,'Other layer must not resurrect excluded network');defs[0].items[0].checked=true;defs[1].items[0].checked=false;assert.equal(S.selectStyle(row,defs),null,'Excluded RL must remain hidden');defs[1].enabled=false;assert(S.selectStyle(row,defs));defs[0].enabled=false;assert.equal(S.selectStyle(row,defs),null);console.log('PASS: combined exclusions, inactive layers and no active layers');
const rows=require('../snapshot.json').partners;
for(const country of ['DE','AT'])for(const networks of [['ERM'],['FRP'],['EFR'],['PLP'],['ERM','FRP']]){
 const members=rows.filter(r=>r.country===country);
 const definition={enabled:true,country,key:r=>r.country===country?S.networkCode(r.network):null,items:['ERM','FRP','EFR','PLP'].map(key=>({key,checked:networks.includes(key)}))};
 for(const bu of ['',...new Set(members.map(r=>r.bu||'Nicht zugeordnet'))])for(const bl of ['',...new Set(members.map(r=>r.bl||'Nicht zugeordnet'))])for(const region of ['',...new Set(members.map(r=>JSON.stringify([r.region||'',r.rl||r.consultant||'Nicht zugeordnet'])))]){
  Object.assign(definition,{bu,bl,region});
  const actual=rows.filter(r=>S.selectStyle(r,[definition]));
  const expected=members.filter(r=>networks.includes(S.networkCode(r.network))&&(!bu||bu===(r.bu||'Nicht zugeordnet'))&&(!bl||bl===(r.bl||'Nicht zugeordnet'))&&(!region||region===JSON.stringify([r.region||'',r.rl||r.consultant||'Nicht zugeordnet'])));
  assert.deepEqual(actual,expected);
 }
 definition.enabled=false;assert.equal(rows.filter(r=>S.selectStyle(r,[definition])).length,0);
}
console.log('PASS: DE/AT country toggles and network × region × BL × BU combinations against live snapshot');
