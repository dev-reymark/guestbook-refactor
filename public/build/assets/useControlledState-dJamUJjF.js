import{k as h}from"./index-CxnsUFar.js";import{r as f}from"./app-BhZ0p_bS.js";var w=e=>(e==null?void 0:e.length)<=4?e:e==null?void 0:e.slice(0,3),C=(...e)=>{let n=" ";for(const t of e)if(typeof t=="string"&&t.length>0){n=t;break}return n};function S(e,n){let{id:t,"aria-label":o,"aria-labelledby":r}=e;return t=h(t),r&&o?r=[...new Set([t,...r.trim().split(/\s+/)])].join(" "):r&&(r=r.trim().split(/\s+/).join(" ")),!o&&!r&&n&&(o=n),{id:t,"aria-label":o,"aria-labelledby":r}}function V(e,n,t){let[o,r]=f.useState(e||n),d=f.useRef(e!==void 0),l=e!==void 0;f.useEffect(()=>{let i=d.current;i!==l&&console.warn(`WARN: A component changed from ${i?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}.`),d.current=l},[l]);let a=l?e:o,$=f.useCallback((i,...u)=>{let b=(s,...c)=>{t&&(Object.is(a,s)||t(s,...c)),l||(a=s)};typeof i=="function"?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),r((c,...m)=>{let p=i(l?a:c,...m);return b(p,...u),l?c:p})):(l||r(i),b(i,...u))},[l,a,t]);return[a,$]}export{V as $,S as a,w as b,C as s};
