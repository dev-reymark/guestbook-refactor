import{t as v,m as d,o as y,f as P,d as S,g as b}from"./index-CxnsUFar.js";import{r as N,j}from"./app-BhZ0p_bS.js";var o=v({base:"w-px h-px inline-block",variants:{isInline:{true:"inline-block",false:"block"}},defaultVariants:{isInline:!1}}),h={px:"1px",0:"0px",.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",11:"2.75rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},p=e=>{var r;return(r=h[e])!=null?r:e};function k(e){const[r,a]=d(e,o.variantKeys),{as:s,className:t,x:i=1,y:l=1,...n}=r,x=s||"span",f=N.useMemo(()=>o({...a,className:t}),[y(a),t]),u=p(i),g=p(l);return{Component:x,getSpacerProps:(m={})=>({...m,...n,"aria-hidden":P(!0),className:S(f,m.className),style:{...m.style,...n.style,marginLeft:u,marginTop:g}})}}var c=b((e,r)=>{const{Component:a,getSpacerProps:s}=k({...e});return j.jsx(a,{ref:r,...s()})});c.displayName="NextUI.Spacer";var E=c;export{E as s};
