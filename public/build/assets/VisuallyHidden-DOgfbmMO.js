import{c as d,s as p}from"./index-CxnsUFar.js";import{m as u,r as c}from"./app-BhZ0p_bS.js";const a={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function f(s={}){let{style:e,isFocusable:t}=s,[i,l]=c.useState(!1),{focusWithinProps:o}=p({isDisabled:!t,onFocusWithinChange:n=>l(n)}),r=c.useMemo(()=>i?e:e?{...a,...e}:a,[i]);return{visuallyHiddenProps:{...o,style:r}}}function h(s){let{children:e,elementType:t="div",isFocusable:i,style:l,...o}=s,{visuallyHiddenProps:r}=f(s);return u.createElement(t,d(o,r),e)}export{f as $,h as a};
