import{C,T as m,N as T,O as F,P as c}from"./index-Drw1y9bo.js";import{j as e,r as R}from"./app-Db2-ubiR.js";import{g as v,c as _}from"./index-B1ty5uEW.js";import{L as j,a as u,m as b}from"./chunk-6NL67ZRH-CzMdlq90.js";var P=v(({children:r,motionProps:n,placement:i,disableAnimation:p,style:d={},transformOrigin:t={},...a},s)=>{let o=d;return t.originX!==void 0||t.originY!==void 0?o={...o,transformOrigin:t}:o={...o,...C(i==="center"?"top":i)},p?e.jsx("div",{...a,ref:s,children:r}):e.jsx(j,{features:u,children:e.jsx(b.div,{ref:s,animate:"enter",exit:"exit",initial:"initial",style:o,variants:m.scaleSpringOpacity,..._(a,n),children:r})})});P.displayName="NextUI.FreeSoloPopoverWrapper";var g=v(({children:r,transformOrigin:n,...i},p)=>{const{Component:d,state:t,placement:a,backdrop:s,titleProps:o,portalContainer:N,disableAnimation:l,motionProps:$,isNonModal:f,getPopoverProps:y,getBackdropProps:x,getDialogProps:S,getContentProps:I}=T({...i,ref:p}),A=R.useMemo(()=>s==="transparent"?null:l?e.jsx("div",{...x()}):e.jsx(j,{features:u,children:e.jsx(b.div,{animate:"enter",exit:"exit",initial:"exit",variants:m.fade,...x()})}),[s,l,x]);return e.jsxs(F,{portalContainer:N,children:[!f&&A,e.jsx(d,{...y(),children:e.jsxs(P,{disableAnimation:l,motionProps:$,placement:a,tabIndex:-1,transformOrigin:n,...S(),children:[!f&&e.jsx(c,{onDismiss:t.close}),e.jsx("div",{...I(),children:typeof r=="function"?r(o):r}),e.jsx(c,{onDismiss:t.close})]})})]})});g.displayName="NextUI.FreeSoloPopover";var E=g;export{E as f};
