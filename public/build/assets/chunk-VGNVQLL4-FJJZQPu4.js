import{a as T,z as k}from"./useMenuTriggerState-D6G5vxxI.js";import{j as e,r as C}from"./app-W9rABB7H.js";import{T as c,j as F,k as m}from"./useDialog-CDeD2rZ4.js";import{i as v,b as R}from"./chunk-XHQUSKIE-D1XKxXcu.js";import{L as j,d as b,m as u}from"./chunk-6NL67ZRH-CjJSE_D0.js";var P=v(({children:r,motionProps:n,placement:i,disableAnimation:p,style:d={},transformOrigin:t={},...a},s)=>{let o=d;return t.originX!==void 0||t.originY!==void 0?o={...o,transformOrigin:t}:o={...o,...T(i==="center"?"top":i)},p?e.jsx("div",{...a,ref:s,children:r}):e.jsx(j,{features:b,children:e.jsx(u.div,{ref:s,animate:"enter",exit:"exit",initial:"initial",style:o,variants:c.scaleSpringOpacity,...R(a,n),children:r})})});P.displayName="NextUI.FreeSoloPopoverWrapper";var $=v(({children:r,transformOrigin:n,...i},p)=>{const{Component:d,state:t,placement:a,backdrop:s,titleProps:o,portalContainer:g,disableAnimation:l,motionProps:N,isNonModal:f,getPopoverProps:y,getBackdropProps:x,getDialogProps:S,getContentProps:I}=k({...i,ref:p}),A=C.useMemo(()=>s==="transparent"?null:l?e.jsx("div",{...x()}):e.jsx(j,{features:b,children:e.jsx(u.div,{animate:"enter",exit:"exit",initial:"exit",variants:c.fade,...x()})}),[s,l,x]);return e.jsxs(F,{portalContainer:g,children:[!f&&A,e.jsx(d,{...y(),children:e.jsxs(P,{disableAnimation:l,motionProps:N,placement:a,tabIndex:-1,transformOrigin:n,...S(),children:[!f&&e.jsx(m,{onDismiss:t.close}),e.jsx("div",{...I(),children:typeof r=="function"?r(o):r}),e.jsx(m,{onDismiss:t.close})]})})]})});$.displayName="NextUI.FreeSoloPopover";var E=$;export{E as f};
