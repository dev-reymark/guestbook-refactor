import{J as m,L as R,l as U,k as L,v as P,c as j}from"./index-CxnsUFar.js";import{r as s}from"./app-BhZ0p_bS.js";import{a as F}from"./useControlledState-dJamUJjF.js";function X(a,e,i){let t=s.useRef(e),o=m(()=>{i&&i(t.current)});s.useEffect(()=>{var l;let r=a==null||(l=a.current)===null||l===void 0?void 0:l.form;return r==null||r.addEventListener("reset",o),()=>{r==null||r.removeEventListener("reset",o)}},[a,o])}function Z(a,e,i){let{validationBehavior:t,focus:o}=a;R(()=>{if(t==="native"&&(i!=null&&i.current)){let n=e.realtimeValidation.isInvalid?e.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";i.current.setCustomValidity(n),i.current.hasAttribute("title")||(i.current.title=""),e.realtimeValidation.isInvalid||e.updateValidation(Q(i.current))}});let l=m(()=>{e.resetValidation()}),r=m(n=>{var v;e.displayValidation.isInvalid||e.commitValidation();let u=i==null||(v=i.current)===null||v===void 0?void 0:v.form;if(!n.defaultPrevented&&i&&u&&_(u)===i.current){var f;o?o():(f=i.current)===null||f===void 0||f.focus(),U("keyboard")}n.preventDefault()}),d=m(()=>{e.commitValidation()});s.useEffect(()=>{let n=i==null?void 0:i.current;if(!n)return;let v=n.form;return n.addEventListener("invalid",r),n.addEventListener("change",d),v==null||v.addEventListener("reset",l),()=>{n.removeEventListener("invalid",r),n.removeEventListener("change",d),v==null||v.removeEventListener("reset",l)}},[i,r,d,l,t])}function k(a){let e=a.validity;return{badInput:e.badInput,customError:e.customError,patternMismatch:e.patternMismatch,rangeOverflow:e.rangeOverflow,rangeUnderflow:e.rangeUnderflow,stepMismatch:e.stepMismatch,tooLong:e.tooLong,tooShort:e.tooShort,typeMismatch:e.typeMismatch,valueMissing:e.valueMissing,valid:e.valid}}function Q(a){return{isInvalid:!a.validity.valid,validationDetails:k(a),validationErrors:a.validationMessage?[a.validationMessage]:[]}}function _(a){for(let e=0;e<a.elements.length;e++){let i=a.elements[e];if(!i.validity.valid)return i}return null}const M={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},B={...M,customError:!0,valid:!1},b={isInvalid:!1,validationDetails:M,validationErrors:[]},q=s.createContext({}),D="__formValidationState"+Date.now();function ee(a){if(a[D]){let{realtimeValidation:e,displayValidation:i,updateValidation:t,resetValidation:o,commitValidation:l}=a[D];return{realtimeValidation:e,displayValidation:i,updateValidation:t,resetValidation:o,commitValidation:l}}return J(a)}function J(a){let{isInvalid:e,validationState:i,name:t,value:o,builtinValidation:l,validate:r,validationBehavior:d="aria"}=a;i&&(e||(e=i==="invalid"));let n=e!==void 0?{isInvalid:e,validationErrors:[],validationDetails:B}:null,v=s.useMemo(()=>w(N(r,o)),[r,o]);l!=null&&l.validationDetails.valid&&(l=null);let u=s.useContext(q),f=s.useMemo(()=>t?Array.isArray(t)?t.flatMap(c=>h(u[c])):h(u[t]):[],[u,t]),[C,A]=s.useState(u),[x,p]=s.useState(!1);u!==C&&(A(u),p(!1));let V=s.useMemo(()=>w(x?[]:f),[x,f]),S=s.useRef(b),[y,E]=s.useState(b),$=s.useRef(b),T=()=>{if(!O)return;g(!1);let c=v||l||S.current;I(c,$.current)||($.current=c,E(c))},[O,g]=s.useState(!1);return s.useEffect(T),{realtimeValidation:n||V||v||l||b,displayValidation:d==="native"?n||V||y:n||V||v||l||y,updateValidation(c){d==="aria"&&!I(y,c)?E(c):S.current=c},resetValidation(){let c=b;I(c,$.current)||($.current=c,E(c)),d==="native"&&g(!1),p(!0)},commitValidation(){d==="native"&&g(!0),p(!0)}}}function h(a){return a?Array.isArray(a)?a:[a]:[]}function N(a,e){if(typeof a=="function"){let i=a(e);if(i&&typeof i!="boolean")return h(i)}return[]}function w(a){return a.length?{isInvalid:!0,validationErrors:a,validationDetails:B}:null}function I(a,e){return a===e?!0:a&&e&&a.isInvalid===e.isInvalid&&a.validationErrors.length===e.validationErrors.length&&a.validationErrors.every((i,t)=>i===e.validationErrors[t])&&Object.entries(a.validationDetails).every(([i,t])=>e.validationDetails[i]===t)}function ae(...a){let e=new Set,i=!1,t={...M};for(let r of a){var o,l;for(let d of r.validationErrors)e.add(d);i||(i=r.isInvalid);for(let d in t)(o=t)[l=d]||(o[l]=r.validationDetails[d])}return t.valid=!i,{isInvalid:i,validationErrors:[...e],validationDetails:t}}function Y(a){let{id:e,label:i,"aria-labelledby":t,"aria-label":o,labelElementType:l="label"}=a;e=L(e);let r=L(),d={};i?(t=t?`${r} ${t}`:r,d={id:r,htmlFor:l==="label"?e:void 0}):!t&&!o&&console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");let n=F({id:e,"aria-label":o,"aria-labelledby":t});return{labelProps:d,fieldProps:n}}function ie(a){let{description:e,errorMessage:i,isInvalid:t,validationState:o}=a,{labelProps:l,fieldProps:r}=Y(a),d=P([!!e,!!i,t,o]),n=P([!!e,!!i,t,o]);return r=j(r,{"aria-describedby":[d,n,a["aria-describedby"]].filter(Boolean).join(" ")||void 0}),{labelProps:l,fieldProps:r,descriptionProps:{id:d},errorMessageProps:{id:n}}}export{ee as $,D as a,ie as b,X as c,Z as d,Y as e,b as f,ae as g,M as h};
