import{a as r,j as t}from"./vendor-react-zCVZdxR6.js";import{d as a}from"./vendor-styled-components-DjEF2FX7.js";import{F as d}from"./FavoriteButton-FQ9MbxuD.js";import{u as n}from"./vendor-react-router-DjyLgPM2.js";const l=a.section`
    width: 150px;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;
    border-radius: 10px;
    border-bottom: 5px solid black;
    border-right: 5px solid black;

    img {
        width: 120px;
    }
    `,g=r.memo(({pokemon:e})=>{const[i,s]=r.useState(!0),o=n();return t.jsxs(l,{onClick:()=>o(`/detail/${e.id}`),children:[i?t.jsx("div",{className:"w-[120px] h-[120px] leading-[120px] text-center",children:"로딩중..."}):null,t.jsx("img",{onLoad:()=>s(!1),src:e.front,style:{display:i?"none":"block"}}),t.jsxs("div",{children:[e.name,t.jsx(d,{pokemonId:e.id})]})]})});export{g as C};
