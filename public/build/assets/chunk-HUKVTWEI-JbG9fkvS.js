import{r as l,j as h}from"./app-BhZ0p_bS.js";import{c as Ce}from"./chunk-3XT5V4LF-C_-giVqc.js";import{$ as ke,s as Ie}from"./useControlledState-dJamUJjF.js";import{t as ce,Q as Se,A as K,D as De,c as _,j as Ve,R as Oe,p as _e,n as je,e as Be,d as H,f as P,a as le,g as Ae}from"./index-CxnsUFar.js";import{u as Ee}from"./index-CH-JLVKH.js";import{c as qe,$ as ue,d as Ne,f as Le,a as Ge}from"./useField-CSQ1zrRw.js";import{m as Te}from"./chunk-CIZQCQPA-Bs-J7uNN.js";import{a as ze}from"./VisuallyHidden-DOgfbmMO.js";var Fe={},se={};function de(e,a,...t){var i;const n=`[Next UI]${a?` [${a}]`:" "}: ${e}`;if(!(typeof console>"u")&&!se[n]&&(se[n]=!0,((i=process==null?void 0:Fe)==null?void 0:i.NODE_ENV)!=="production"))return console.warn(n,t)}var Me=ce({slots:{base:"group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2",wrapper:["relative","inline-flex","items-center","justify-center","flex-shrink-0","overflow-hidden","before:content-['']","before:absolute","before:inset-0","before:border-solid","before:border-2","before:box-border","before:border-default","after:content-['']","after:absolute","after:inset-0","after:scale-50","after:opacity-0","after:origin-center","group-data-[selected=true]:after:scale-100","group-data-[selected=true]:after:opacity-100","group-data-[hover=true]:before:bg-default-100",...Se],icon:"z-10 w-4 h-3 opacity-0 group-data-[selected=true]:opacity-100",label:"relative text-foreground select-none"},variants:{color:{default:{wrapper:"after:bg-default after:text-default-foreground text-default-foreground"},primary:{wrapper:"after:bg-primary after:text-primary-foreground text-primary-foreground"},secondary:{wrapper:"after:bg-secondary after:text-secondary-foreground text-secondary-foreground"},success:{wrapper:"after:bg-success after:text-success-foreground text-success-foreground"},warning:{wrapper:"after:bg-warning after:text-warning-foreground text-warning-foreground"},danger:{wrapper:"after:bg-danger after:text-danger-foreground text-danger-foreground"}},size:{sm:{wrapper:["w-4 h-4 mr-2 rtl:ml-2 rtl:mr-[unset]","rounded-[calc(theme(borderRadius.medium)*0.5)]","before:rounded-[calc(theme(borderRadius.medium)*0.5)]","after:rounded-[calc(theme(borderRadius.medium)*0.5)]"],label:"text-small",icon:"w-3 h-2"},md:{wrapper:["w-5 h-5 mr-2 rtl:ml-2 rtl:mr-[unset]","rounded-[calc(theme(borderRadius.medium)*0.6)]","before:rounded-[calc(theme(borderRadius.medium)*0.6)]","after:rounded-[calc(theme(borderRadius.medium)*0.6)]"],label:"text-medium",icon:"w-4 h-3"},lg:{wrapper:["w-6 h-6 mr-2 rtl:ml-2 rtl:mr-[unset]","rounded-[calc(theme(borderRadius.medium)*0.7)]","before:rounded-[calc(theme(borderRadius.medium)*0.7)]","after:rounded-[calc(theme(borderRadius.medium)*0.7)]"],label:"text-large",icon:"w-5 h-4"}},radius:{none:{wrapper:"rounded-none before:rounded-none after:rounded-none"},sm:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.5)]","before:rounded-[calc(theme(borderRadius.medium)*0.5)]","after:rounded-[calc(theme(borderRadius.medium)*0.5)]"]},md:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.6)]","before:rounded-[calc(theme(borderRadius.medium)*0.6)]","after:rounded-[calc(theme(borderRadius.medium)*0.6)]"]},lg:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.7)]","before:rounded-[calc(theme(borderRadius.medium)*0.7)]","after:rounded-[calc(theme(borderRadius.medium)*0.7)]"]},full:{wrapper:"rounded-full before:rounded-full after:rounded-full"}},lineThrough:{true:{label:["inline-flex","items-center","justify-center","before:content-['']","before:absolute","before:bg-foreground","before:w-0","before:h-0.5","group-data-[selected=true]:opacity-60","group-data-[selected=true]:before:w-full"]}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},isInvalid:{true:{wrapper:"before:border-danger",label:"text-danger"}},disableAnimation:{true:{wrapper:"transition-none",icon:"transition-none",label:"transition-none"},false:{wrapper:["before:transition-colors","group-data-[pressed=true]:scale-95","transition-transform","after:transition-transform-opacity","after:!ease-linear","after:!duration-200","motion-reduce:transition-none"],icon:"transition-opacity motion-reduce:transition-none",label:"transition-colors-opacity before:transition-width motion-reduce:transition-none"}}},defaultVariants:{color:"primary",size:"md",isDisabled:!1,lineThrough:!1,disableAnimation:!1}});ce({slots:{base:"relative flex flex-col gap-2",label:"relative text-medium text-foreground-500",wrapper:"flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row",description:"text-small text-foreground-400",errorMessage:"text-small text-danger"},variants:{isRequired:{true:{label:"after:content-['*'] after:text-danger after:ml-0.5"}},isInvalid:{true:{description:"text-danger"}},disableAnimation:{true:{},false:{description:"transition-colors !duration-150 motion-reduce:transition-none"}}},defaultVariants:{isInvalid:!1,isRequired:!1,disableAnimation:!1}});function We(e,a,t){let{isDisabled:i=!1,isReadOnly:o=!1,value:n,name:u,children:r,"aria-label":d,"aria-labelledby":f,validationState:b="valid",isInvalid:v}=e,m=k=>{k.stopPropagation(),a.setSelected(k.target.checked)},C=r!=null,p=d!=null||f!=null;!C&&!p&&console.warn("If you do not provide children, you must specify an aria-label for accessibility");let{pressProps:g,isPressed:x}=K({isDisabled:i}),{pressProps:j,isPressed:O}=K({isDisabled:i||o,onPress(){a.toggle()}}),{focusableProps:B}=De(e,t),A=_(g,B),E=Ve(e,{labelable:!0});return qe(t,a.isSelected,a.setSelected),{labelProps:_(j,{onClick:k=>k.preventDefault()}),inputProps:_(E,{"aria-invalid":v||b==="invalid"||void 0,"aria-errormessage":e["aria-errormessage"],"aria-controls":e["aria-controls"],"aria-readonly":o||void 0,onChange:m,disabled:i,...n==null?{}:{value:n},name:u,type:"checkbox",...A}),isSelected:a.isSelected,isPressed:x||O,isDisabled:i,isReadOnly:o,isInvalid:v||b==="invalid"}}function fe(e,a,t){let i=ue({...e,value:a.isSelected}),{isInvalid:o,validationErrors:n,validationDetails:u}=i.displayValidation,{labelProps:r,inputProps:d,isSelected:f,isPressed:b,isDisabled:v,isReadOnly:m}=We({...e,isInvalid:o},a,t);Ne(e,i,t);let{isIndeterminate:C,isRequired:p,validationBehavior:g="aria"}=e;return l.useEffect(()=>{t.current&&(t.current.indeterminate=!!C)}),{labelProps:r,inputProps:{...d,checked:f,"aria-required":p&&g==="aria"||void 0,required:p&&g==="native"},isSelected:f,isPressed:b,isDisabled:v,isReadOnly:m,isInvalid:o,validationErrors:n,validationDetails:u}}const Ue=new WeakMap;function be(e={}){let{isReadOnly:a}=e,[t,i]=ke(e.isSelected,e.defaultSelected||!1,e.onChange);function o(u){a||i(u)}function n(){a||i(!t)}return{isSelected:t,setSelected:o,toggle:n}}function He(e,a,t){const i=be({isReadOnly:e.isReadOnly||a.isReadOnly,isSelected:a.isSelected(e.value),onChange(x){x?a.addValue(e.value):a.removeValue(e.value),e.onChange&&e.onChange(x)}});let{name:o,descriptionId:n,errorMessageId:u,validationBehavior:r}=Ue.get(a);var d;r=(d=e.validationBehavior)!==null&&d!==void 0?d:r;let{realtimeValidation:f}=ue({...e,value:i.isSelected,name:void 0,validationBehavior:"aria"}),b=l.useRef(Le),v=()=>{a.setInvalid(e.value,f.isInvalid?f:b.current)};l.useEffect(v);let m=a.realtimeValidation.isInvalid?a.realtimeValidation:f,C=r==="native"?a.displayValidation:m;var p;let g=fe({...e,isReadOnly:e.isReadOnly||a.isReadOnly,isDisabled:e.isDisabled||a.isDisabled,name:e.name||o,isRequired:(p=e.isRequired)!==null&&p!==void 0?p:a.isRequired,validationBehavior:r,[Ge]:{realtimeValidation:m,displayValidation:C,resetValidation:a.resetValidation,commitValidation:a.commitValidation,updateValidation(x){b.current=x,v()}}},i,t);return{...g,inputProps:{...g.inputProps,"aria-describedby":[e["aria-describedby"],a.isInvalid?u:null,n].filter(Boolean).join(" ")||void 0}}}var[la,Ke]=Ce({name:"CheckboxGroupContext",strict:!1});function Qe(e){const{isSelected:a,disableAnimation:t,...i}=e;return h.jsx("svg",{"aria-hidden":"true",role:"presentation",viewBox:"0 0 17 18",...i,children:h.jsx("polyline",{fill:"none",points:"1 9 7 14 15 4",stroke:"currentColor",strokeDasharray:22,strokeDashoffset:a?44:66,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,style:!t&&a?{transition:"stroke-dashoffset 250ms linear 0.2s"}:{}})})}function Je(e){const{isSelected:a,disableAnimation:t,...i}=e;return h.jsx("svg",{stroke:"currentColor",strokeWidth:3,viewBox:"0 0 24 24",...i,children:h.jsx("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function Xe(e){const{isIndeterminate:a,...t}=e,i=a?Je:Qe;return h.jsx(i,{...t})}function Ye(e={}){var a,t,i,o,n,u;const r=Ke(),d=!!r,{as:f,ref:b,value:v="",children:m,icon:C,name:p,isRequired:g,isReadOnly:x=!1,autoFocus:j=!1,isSelected:O,validationState:B,size:A=(a=r==null?void 0:r.size)!=null?a:"md",color:E=(t=r==null?void 0:r.color)!=null?t:"primary",radius:k=r==null?void 0:r.radius,lineThrough:Q=(i=r==null?void 0:r.lineThrough)!=null?i:!1,isDisabled:J=(o=r==null?void 0:r.isDisabled)!=null?o:!1,disableAnimation:q=(n=r==null?void 0:r.disableAnimation)!=null?n:!1,isInvalid:y=B?B==="invalid":(u=r==null?void 0:r.isInvalid)!=null?u:!1,isIndeterminate:I=!1,defaultSelected:N,classNames:s,className:pe,onValueChange:X,...S}=e;r&&Oe&&(O&&de("The Checkbox.Group is being used, `isSelected` will be ignored. Use the `value` of the Checkbox.Group instead.","Checkbox"),N&&de("The Checkbox.Group is being used, `defaultSelected` will be ignored. Use the `defaultValue` of the Checkbox.Group instead.","Checkbox"));const he=f||"label",ve=l.useRef(null),D=l.useRef(null);let L=e.onChange;d&&(L=le(()=>{r.groupState.resetValidation()},L));const G=l.useId(),T=l.useMemo(()=>({name:p,value:v,children:m,autoFocus:j,defaultSelected:N,isIndeterminate:I,isRequired:g,isInvalid:y,isSelected:O,isDisabled:J,isReadOnly:x,"aria-label":Ie(S["aria-label"],m),"aria-labelledby":S["aria-labelledby"]||G,onChange:X}),[v,p,G,m,j,y,I,J,x,O,N,S["aria-label"],S["aria-labelledby"],X]),Y=be(T),{inputProps:R,isSelected:V,isDisabled:$,isReadOnly:z,isPressed:ge}=d?He({...T,isInvalid:y,validationBehavior:"native"},r.groupState,D):fe({...T,validationBehavior:"native"},Y,D),Z=$||z,[xe,ee]=l.useState(!1),{pressProps:ae}=K({isDisabled:Z,onPressStart(c){c.pointerType!=="keyboard"&&ee(!0)},onPressEnd(c){c.pointerType!=="keyboard"&&ee(!1)}}),re=Z?!1:xe||ge;g&&(R.required=!0);const{hoverProps:ie,isHovered:F}=_e({isDisabled:R.disabled}),{focusProps:te,isFocused:M,isFocusVisible:W}=je({autoFocus:R.autoFocus}),w=l.useMemo(()=>Me({color:E,size:A,radius:k,isInvalid:y,lineThrough:Q,isDisabled:$,disableAnimation:q}),[E,A,k,y,Q,$,q]);Be(()=>{if(!D.current)return;const c=!!D.current.checked;Y.setSelected(c)},[D.current]);const U=Ee(L),oe=l.useCallback(c=>{if(z||$){c.preventDefault();return}U==null||U(c)},[z,$,U]),ne=H(s==null?void 0:s.base,pe),ye=l.useCallback(()=>({ref:ve,className:w.base({class:ne}),"data-disabled":P($),"data-selected":P(V||I),"data-invalid":P(y),"data-hover":P(F),"data-focus":P(M),"data-pressed":P(re),"data-readonly":P(R.readOnly),"data-focus-visible":P(W),"data-indeterminate":P(I),..._(ie,ae,S)}),[w,ne,$,V,I,y,F,M,re,R.readOnly,W,ie,ae,S]),$e=l.useCallback((c={})=>({...c,"aria-hidden":!0,className:H(w.wrapper({class:H(s==null?void 0:s.wrapper,c==null?void 0:c.className)}))}),[w,s==null?void 0:s.wrapper]),Pe=l.useCallback(()=>({ref:Te(D,b),..._(R,te),onChange:le(R.onChange,oe)}),[R,te,oe]),Re=l.useCallback(()=>({id:G,className:w.label({class:s==null?void 0:s.label})}),[w,s==null?void 0:s.label,$,V,y]),we=l.useCallback(()=>({isSelected:V,isIndeterminate:!!I,disableAnimation:!!q,className:w.icon({class:s==null?void 0:s.icon})}),[w,s==null?void 0:s.icon,V,I,q]);return{Component:he,icon:C,children:m,isSelected:V,isDisabled:$,isInvalid:y,isFocused:M,isHovered:F,isFocusVisible:W,getBaseProps:ye,getWrapperProps:$e,getInputProps:Pe,getLabelProps:Re,getIconProps:we}}var me=Ae((e,a)=>{const{Component:t,children:i,icon:o=h.jsx(Xe,{}),getBaseProps:n,getWrapperProps:u,getInputProps:r,getIconProps:d,getLabelProps:f}=Ye({...e,ref:a}),b=typeof o=="function"?o(d()):l.cloneElement(o,d());return h.jsxs(t,{...n(),children:[h.jsx(ze,{children:h.jsx("input",{...r()})}),h.jsx("span",{...u(),children:b}),i&&h.jsx("span",{...f(),children:i})]})});me.displayName="NextUI.Checkbox";var sa=me;export{sa as c,de as w};
