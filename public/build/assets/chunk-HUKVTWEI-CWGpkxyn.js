import{r as n,j as h}from"./app-W9rABB7H.js";import{c as Ce}from"./iconBase-DK-kuZej.js";import{$ as we}from"./useControlledState-BU-ccswk.js";import{t as de,C as ke,b as j,_ as Ie,a as Se,l as De,h as H,g as P,j as le,i as Ve}from"./chunk-XHQUSKIE-D1XKxXcu.js";import{u as Oe}from"./index-Cd3-71eU.js";import{c as K,a as je,$ as Be}from"./useFocusable-CM9SnkFp.js";import{s as _e}from"./chunk-CAFRINWI-BTDo8zfp.js";import{w as se}from"./chunk-RFUEKIFS-BiXG_wtu.js";import{c as qe,$ as ce,d as Ae,f as Ee,a as Le}from"./useField-DwqTcdZv.js";import{u as Ne}from"./index-CwcQvHrJ.js";import{m as Ge}from"./chunk-CIZQCQPA-h2oCEWhe.js";import{a as Te}from"./VisuallyHidden-CQMxwDHt.js";var ze=de({slots:{base:"group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2",wrapper:["relative","inline-flex","items-center","justify-center","flex-shrink-0","overflow-hidden","before:content-['']","before:absolute","before:inset-0","before:border-solid","before:border-2","before:box-border","before:border-default","after:content-['']","after:absolute","after:inset-0","after:scale-50","after:opacity-0","after:origin-center","group-data-[selected=true]:after:scale-100","group-data-[selected=true]:after:opacity-100","group-data-[hover=true]:before:bg-default-100",...ke],icon:"z-10 w-4 h-3 opacity-0 group-data-[selected=true]:opacity-100",label:"relative text-foreground select-none"},variants:{color:{default:{wrapper:"after:bg-default after:text-default-foreground text-default-foreground"},primary:{wrapper:"after:bg-primary after:text-primary-foreground text-primary-foreground"},secondary:{wrapper:"after:bg-secondary after:text-secondary-foreground text-secondary-foreground"},success:{wrapper:"after:bg-success after:text-success-foreground text-success-foreground"},warning:{wrapper:"after:bg-warning after:text-warning-foreground text-warning-foreground"},danger:{wrapper:"after:bg-danger after:text-danger-foreground text-danger-foreground"}},size:{sm:{wrapper:["w-4 h-4 mr-2 rtl:ml-2 rtl:mr-[unset]","rounded-[calc(theme(borderRadius.medium)*0.5)]","before:rounded-[calc(theme(borderRadius.medium)*0.5)]","after:rounded-[calc(theme(borderRadius.medium)*0.5)]"],label:"text-small",icon:"w-3 h-2"},md:{wrapper:["w-5 h-5 mr-2 rtl:ml-2 rtl:mr-[unset]","rounded-[calc(theme(borderRadius.medium)*0.6)]","before:rounded-[calc(theme(borderRadius.medium)*0.6)]","after:rounded-[calc(theme(borderRadius.medium)*0.6)]"],label:"text-medium",icon:"w-4 h-3"},lg:{wrapper:["w-6 h-6 mr-2 rtl:ml-2 rtl:mr-[unset]","rounded-[calc(theme(borderRadius.medium)*0.7)]","before:rounded-[calc(theme(borderRadius.medium)*0.7)]","after:rounded-[calc(theme(borderRadius.medium)*0.7)]"],label:"text-large",icon:"w-5 h-4"}},radius:{none:{wrapper:"rounded-none before:rounded-none after:rounded-none"},sm:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.5)]","before:rounded-[calc(theme(borderRadius.medium)*0.5)]","after:rounded-[calc(theme(borderRadius.medium)*0.5)]"]},md:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.6)]","before:rounded-[calc(theme(borderRadius.medium)*0.6)]","after:rounded-[calc(theme(borderRadius.medium)*0.6)]"]},lg:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.7)]","before:rounded-[calc(theme(borderRadius.medium)*0.7)]","after:rounded-[calc(theme(borderRadius.medium)*0.7)]"]},full:{wrapper:"rounded-full before:rounded-full after:rounded-full"}},lineThrough:{true:{label:["inline-flex","items-center","justify-center","before:content-['']","before:absolute","before:bg-foreground","before:w-0","before:h-0.5","group-data-[selected=true]:opacity-60","group-data-[selected=true]:before:w-full"]}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},isInvalid:{true:{wrapper:"before:border-danger",label:"text-danger"}},disableAnimation:{true:{wrapper:"transition-none",icon:"transition-none",label:"transition-none"},false:{wrapper:["before:transition-colors","group-data-[pressed=true]:scale-95","transition-transform","after:transition-transform-opacity","after:!ease-linear","after:!duration-200","motion-reduce:transition-none"],icon:"transition-opacity motion-reduce:transition-none",label:"transition-colors-opacity before:transition-width motion-reduce:transition-none"}}},defaultVariants:{color:"primary",size:"md",isDisabled:!1,lineThrough:!1,disableAnimation:!1}});de({slots:{base:"relative flex flex-col gap-2",label:"relative text-medium text-foreground-500",wrapper:"flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row",description:"text-small text-foreground-400",errorMessage:"text-small text-danger"},variants:{isRequired:{true:{label:"after:content-['*'] after:text-danger after:ml-0.5"}},isInvalid:{true:{description:"text-danger"}},disableAnimation:{true:{},false:{description:"transition-colors !duration-150 motion-reduce:transition-none"}}},defaultVariants:{isInvalid:!1,isRequired:!1,disableAnimation:!1}});function Fe(e,a,t){let{isDisabled:i=!1,isReadOnly:o=!1,value:s,name:u,children:r,"aria-label":d,"aria-labelledby":f,validationState:b="valid",isInvalid:v}=e,m=k=>{k.stopPropagation(),a.setSelected(k.target.checked)},w=r!=null,p=d!=null||f!=null;!w&&!p&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:g,isPressed:x}=K({isDisabled:i}),{pressProps:B,isPressed:O}=K({isDisabled:i||o,onPress(){a.toggle()}}),{focusableProps:_}=je(e,t),q=j(g,_),A=Be(e,{labelable:!0});return qe(t,a.isSelected,a.setSelected),{labelProps:j(B,{onClick:k=>k.preventDefault()}),inputProps:j(A,{"aria-invalid":v||b==="invalid"||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":o||void 0,onChange:m,disabled:i,...s==null?{}:{value:s},name:u,type:"checkbox",...q}),isSelected:a.isSelected,isPressed:x||O,isDisabled:i,isReadOnly:o,isInvalid:v||b==="invalid"}}function ue(e,a,t){let i=ce({...e,value:a.isSelected}),{isInvalid:o,validationErrors:s,validationDetails:u}=i.displayValidation,{labelProps:r,inputProps:d,isSelected:f,isPressed:b,isDisabled:v,isReadOnly:m}=Fe({...e,isInvalid:o},a,t);Ae(e,i,t);let{isIndeterminate:w,isRequired:p,validationBehavior:g="aria"}=e;return n.useEffect(()=>{t.current&&(t.current.indeterminate=!!w)}),{labelProps:r,inputProps:{...d,checked:f,"aria-required":p&&g==="aria"||void 0,required:p&&g==="native"},isSelected:f,isPressed:b,isDisabled:v,isReadOnly:m,isInvalid:o,validationErrors:s,validationDetails:u}}const Me=new WeakMap;function fe(e={}){let{isReadOnly:a}=e,[t,i]=we(e.isSelected,e.defaultSelected||!1,e.onChange);function o(u){a||i(u)}function s(){a||i(!t)}return{isSelected:t,setSelected:o,toggle:s}}function We(e,a,t){const i=fe({isReadOnly:e.isReadOnly||a.isReadOnly,isSelected:a.isSelected(e.value),onChange(x){x?a.addValue(e.value):a.removeValue(e.value),e.onChange&&e.onChange(x)}});let{name:o,descriptionId:s,errorMessageId:u,validationBehavior:r}=Me.get(a);var d;r=(d=e.validationBehavior)!==null&&d!==void 0?d:r;let{realtimeValidation:f}=ce({...e,value:i.isSelected,name:void 0,validationBehavior:"aria"}),b=n.useRef(Ee),v=()=>{a.setInvalid(e.value,f.isInvalid?f:b.current)};n.useEffect(v);let m=a.realtimeValidation.isInvalid?a.realtimeValidation:f,w=r==="native"?a.displayValidation:m;var p;let g=ue({...e,isReadOnly:e.isReadOnly||a.isReadOnly,isDisabled:e.isDisabled||a.isDisabled,name:e.name||o,isRequired:(p=e.isRequired)!==null&&p!==void 0?p:a.isRequired,validationBehavior:r,[Le]:{realtimeValidation:m,displayValidation:w,resetValidation:a.resetValidation,commitValidation:a.commitValidation,updateValidation(x){b.current=x,v()}}},i,t);return{...g,inputProps:{...g.inputProps,"aria-describedby":[e["aria-describedby"],a.isInvalid?u:null,s].filter(Boolean).join(" ")||void 0}}}var[da,Ue]=Ce({name:"CheckboxGroupContext",strict:!1});function He(e){const{isSelected:a,disableAnimation:t,...i}=e;return h.jsx("svg",{"aria-hidden":"true",role:"presentation",viewBox:"0 0 17 18",...i,children:h.jsx("polyline",{fill:"none",points:"1 9 7 14 15 4",stroke:"currentColor",strokeDasharray:22,strokeDashoffset:a?44:66,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,style:!t&&a?{transition:"stroke-dashoffset 250ms linear 0.2s"}:{}})})}function Ke(e){const{isSelected:a,disableAnimation:t,...i}=e;return h.jsx("svg",{stroke:"currentColor",strokeWidth:3,viewBox:"0 0 24 24",...i,children:h.jsx("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function Je(e){const{isIndeterminate:a,...t}=e,i=a?Ke:He;return h.jsx(i,{...t})}function Qe(e={}){var a,t,i,o,s,u;const r=Ue(),d=!!r,{as:f,ref:b,value:v="",children:m,icon:w,name:p,isRequired:g,isReadOnly:x=!1,autoFocus:B=!1,isSelected:O,validationState:_,size:q=(a=r==null?void 0:r.size)!=null?a:"md",color:A=(t=r==null?void 0:r.color)!=null?t:"primary",radius:k=r==null?void 0:r.radius,lineThrough:J=(i=r==null?void 0:r.lineThrough)!=null?i:!1,isDisabled:Q=(o=r==null?void 0:r.isDisabled)!=null?o:!1,disableAnimation:E=(s=r==null?void 0:r.disableAnimation)!=null?s:!1,isInvalid:y=_?_==="invalid":(u=r==null?void 0:r.isInvalid)!=null?u:!1,isIndeterminate:I=!1,defaultSelected:L,classNames:l,className:me,onValueChange:X,...S}=e;r&&Ie&&(O&&se("The Checkbox.Group is being used, `isSelected` will be ignored. Use the `value` of the Checkbox.Group instead.","Checkbox"),L&&se("The Checkbox.Group is being used, `defaultSelected` will be ignored. Use the `defaultValue` of the Checkbox.Group instead.","Checkbox"));const pe=f||"label",he=n.useRef(null),D=n.useRef(null);let N=e.onChange;d&&(N=le(()=>{r.groupState.resetValidation()},N));const G=n.useId(),T=n.useMemo(()=>({name:p,value:v,children:m,autoFocus:B,defaultSelected:L,isIndeterminate:I,isRequired:g,isInvalid:y,isSelected:O,isDisabled:Q,isReadOnly:x,"aria-label":_e(S["aria-label"],m),"aria-labelledby":S["aria-labelledby"]||G,onChange:X}),[v,p,G,m,B,y,I,Q,x,O,L,S["aria-label"],S["aria-labelledby"],X]),Y=fe(T),{inputProps:R,isSelected:V,isDisabled:$,isReadOnly:z,isPressed:ve}=d?We({...T,isInvalid:y,validationBehavior:"native"},r.groupState,D):ue({...T,validationBehavior:"native"},Y,D),Z=$||z,[ge,ee]=n.useState(!1),{pressProps:ae}=K({isDisabled:Z,onPressStart(c){c.pointerType!=="keyboard"&&ee(!0)},onPressEnd(c){c.pointerType!=="keyboard"&&ee(!1)}}),re=Z?!1:ge||ve;g&&(R.required=!0);const{hoverProps:ie,isHovered:F}=Se({isDisabled:R.disabled}),{focusProps:te,isFocused:M,isFocusVisible:W}=De({autoFocus:R.autoFocus}),C=n.useMemo(()=>ze({color:A,size:q,radius:k,isInvalid:y,lineThrough:J,isDisabled:$,disableAnimation:E}),[A,q,k,y,J,$,E]);Ne(()=>{if(!D.current)return;const c=!!D.current.checked;Y.setSelected(c)},[D.current]);const U=Oe(N),oe=n.useCallback(c=>{if(z||$){c.preventDefault();return}U==null||U(c)},[z,$,U]),ne=H(l==null?void 0:l.base,me),xe=n.useCallback(()=>({ref:he,className:C.base({class:ne}),"data-disabled":P($),"data-selected":P(V||I),"data-invalid":P(y),"data-hover":P(F),"data-focus":P(M),"data-pressed":P(re),"data-readonly":P(R.readOnly),"data-focus-visible":P(W),"data-indeterminate":P(I),...j(ie,ae,S)}),[C,ne,$,V,I,y,F,M,re,R.readOnly,W,ie,ae,S]),ye=n.useCallback((c={})=>({...c,"aria-hidden":!0,className:H(C.wrapper({class:H(l==null?void 0:l.wrapper,c==null?void 0:c.className)}))}),[C,l==null?void 0:l.wrapper]),$e=n.useCallback(()=>({ref:Ge(D,b),...j(R,te),onChange:le(R.onChange,oe)}),[R,te,oe]),Pe=n.useCallback(()=>({id:G,className:C.label({class:l==null?void 0:l.label})}),[C,l==null?void 0:l.label,$,V,y]),Re=n.useCallback(()=>({isSelected:V,isIndeterminate:!!I,disableAnimation:!!E,className:C.icon({class:l==null?void 0:l.icon})}),[C,l==null?void 0:l.icon,V,I,E]);return{Component:pe,icon:w,children:m,isSelected:V,isDisabled:$,isInvalid:y,isFocused:M,isHovered:F,isFocusVisible:W,getBaseProps:xe,getWrapperProps:ye,getInputProps:$e,getLabelProps:Pe,getIconProps:Re}}var be=Ve((e,a)=>{const{Component:t,children:i,icon:o=h.jsx(Je,{}),getBaseProps:s,getWrapperProps:u,getInputProps:r,getIconProps:d,getLabelProps:f}=Qe({...e,ref:a}),b=typeof o=="function"?o(d()):n.cloneElement(o,d());return h.jsxs(t,{...s(),children:[h.jsx(Te,{children:h.jsx("input",{...r()})}),h.jsx("span",{...u(),children:b}),i&&h.jsx("span",{...f(),children:i})]})});be.displayName="NextUI.Checkbox";var ca=be;export{ca as c};
