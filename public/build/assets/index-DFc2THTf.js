import{a as $}from"./index-CxnsUFar.js";import{$ as x}from"./useControlledState-dJamUJjF.js";import{u}from"./index-CH-JLVKH.js";import{r as s}from"./app-BhZ0p_bS.js";function R(C={}){const{id:d,defaultOpen:b,isOpen:l,onClose:O,onOpen:k,onChange:m=()=>{}}=C,a=u(k),t=u(O),[o,i]=x(l,b||!1,m),P=s.useId(),p=d||P,e=l!==void 0,c=s.useCallback(()=>{e||i(!1),t==null||t()},[e,t]),r=s.useCallback(()=>{e||i(!0),a==null||a()},[e,a]),f=s.useCallback(()=>{(o?c:r)()},[o,r,c]);return{isOpen:!!o,onOpen:r,onClose:c,onOpenChange:f,isControlled:e,getButtonProps:(n={})=>({...n,"aria-expanded":o,"aria-controls":p,onClick:$(n.onClick,f)}),getDisclosureProps:(n={})=>({...n,hidden:!o,id:p})}}export{R as u};
