import{c as a}from"./vendor-reselect-CiXCCDx7.js";const s=e=>a(o=>o.pokemon.data,o=>o.find(t=>t.id===e)),c=e=>a(o=>o.pokemon.data,o=>o.filter(t=>t.name.match(e))),r=a(e=>e.pokemon.data,e=>e.favorite,(e,o)=>e.filter(t=>o.includes(t.id)));export{c as a,r as b,s};
