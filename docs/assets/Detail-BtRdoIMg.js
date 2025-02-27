import{a,j as t}from"./vendor-react-zCVZdxR6.js";import{a as m}from"./vendor-react-redux-D5vAQuTI.js";import{s as n}from"./selector-CzoOXTVI.js";import{F as d}from"./FavoriteButton-FQ9MbxuD.js";import{d as i}from"./vendor-styled-components-DjEF2FX7.js";import{b as c}from"./vendor-react-router-DjyLgPM2.js";import"./vendor-cookie-BX9QSSmL.js";import"./vendor-use-sync-external-store-NXy9BxmK.js";import"./vendor-reselect-CiXCCDx7.js";import"./index-X8SMD8ze.js";import"./vendor-react-dom-gMhDlyru.js";import"./vendor-scheduler-BNqrtbQi.js";import"./vendor-@reduxjs-B7Ktcd2R.js";import"./vendor-redux-BXkGT1VS.js";import"./vendor-immer-DqxjFn0G.js";import"./vendor-redux-thunk-ClJT1hhx.js";import"./vendor-tslib-CGNu0TuM.js";import"./vendor-@emotion-sScrWPmR.js";import"./vendor-stylis-DinRj2j6.js";const l=i.div`
    width: 200px;
    height: 200px;
    position: relative;
    transform-style: preserve-3d;
    transition: 0.5s;
    transform: ${e=>e.flipped?"rotateY(180deg)":"rotateY(0deg)"};
`,x=i.img`
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    position: absolute;
`,f=i.img`
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    
`;function b({front:e,back:r}){const[o,s]=a.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsxs(l,{flipped:o?"flip":"",children:[t.jsx(x,{src:e}),t.jsx(f,{src:r})]}),t.jsx("button",{onClick:()=>s(p=>!p),children:"뒤집기"})]})}function $(){const{pokemonId:e}=c(),r=m(n(Number(e)));return t.jsxs("div",{className:`bg-white flex flex-col justify-center\r
        items-center border py-[30px] px-[60px] rounded-[10px] border-b-[8px] border-r-[8px] border-black`,children:[t.jsxs("div",{className:"text-[28px] mb-[10px]",children:[r.name,t.jsx(d,{pokemonId:Number(e)})]}),t.jsx("div",{className:"whitespace-pre-wrap text-center",children:r.description}),t.jsx(b,{front:r.front,back:r.back})]})}export{$ as default};
