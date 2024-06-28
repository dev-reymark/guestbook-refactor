import{j as d,r as c}from"./app-njBl8sGy.js";import{L as ve,M as he,n as S,t as $e,v as we,k as O,u as W,j as I,c as T,m as ye,q as ge,o as Ce,i as P}from"./chunk-XHQUSKIE-_GA5kLhr.js";import{l as V,m as Me,k as X,T as ke,a as Ee,n as Be,c as Ne,$ as Pe,o as je,j as Se}from"./useDialog-cFtgF5jy.js";import{L as G,d as J,m as Q,u as Ie,A as Te}from"./chunk-6NL67ZRH-D64YXdLR.js";import{$ as oe}from"./getScrollParent-DT8dE1DZ.js";import{c as Oe}from"./chunk-3XT5V4LF-VDNuiCFk.js";const q=typeof document<"u"&&window.visualViewport,De=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);let j=0,F;function Ae(e={}){let{isDisabled:t}=e;ve(()=>{if(!t)return j++,j===1&&(he()?F=Le():F=Re()),()=>{j--,j===0&&F()}},[t])}function Re(){return S($(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),$(document.documentElement,"overflow","hidden"))}function Le(){let e,t,o=s=>{e=oe(s.target,!0),!(e===document.documentElement&&e===document.body)&&e instanceof HTMLElement&&window.getComputedStyle(e).overscrollBehavior==="auto"&&(t=$(e,"overscrollBehavior","contain"))},a=s=>{if(!e||e===document.documentElement||e===document.body){s.preventDefault();return}e.scrollHeight===e.clientHeight&&e.scrollWidth===e.clientWidth&&s.preventDefault()},r=s=>{let n=s.target;ee(n)&&n!==document.activeElement&&(s.preventDefault(),l(),n.style.transform="translateY(-2000px)",n.focus(),requestAnimationFrame(()=>{n.style.transform=""})),t&&t()},u=s=>{let n=s.target;ee(n)&&(l(),n.style.transform="translateY(-2000px)",requestAnimationFrame(()=>{n.style.transform="",q&&(q.height<window.innerHeight?requestAnimationFrame(()=>{Z(n)}):q.addEventListener("resize",()=>Z(n),{once:!0}))}))},i=null,l=()=>{if(i)return;let s=()=>{window.scrollTo(0,0)},n=window.pageXOffset,m=window.pageYOffset;i=S(C(window,"scroll",s),$(document.documentElement,"paddingRight",`${window.innerWidth-document.documentElement.clientWidth}px`),$(document.documentElement,"overflow","hidden"),$(document.body,"marginTop",`-${m}px`),()=>{window.scrollTo(n,m)}),window.scrollTo(0,0)},p=S(C(document,"touchstart",o,{passive:!1,capture:!0}),C(document,"touchmove",a,{passive:!1,capture:!0}),C(document,"touchend",r,{passive:!1,capture:!0}),C(document,"focus",u,!0));return()=>{t==null||t(),i==null||i(),p()}}function $(e,t,o){let a=e.style[t];return e.style[t]=o,()=>{e.style[t]=a}}function C(e,t,o,a){return e.addEventListener(t,o,a),()=>{e.removeEventListener(t,o,a)}}function Z(e){let t=document.scrollingElement||document.documentElement;for(;e&&e!==t;){let o=oe(e);if(o!==document.documentElement&&o!==document.body&&o!==e){let a=o.getBoundingClientRect().top,r=e.getBoundingClientRect().top;r>a+e.clientHeight&&(o.scrollTop+=r-a)}e=o.parentElement}}function ee(e){return e instanceof HTMLInputElement&&!De.has(e.type)||e instanceof HTMLTextAreaElement||e instanceof HTMLElement&&e.isContentEditable}var te=$e({slots:{wrapper:["flex","w-screen","h-[100dvh]","fixed","inset-0","z-50","overflow-x-auto","justify-center","[--scale-enter:100%]","[--scale-exit:100%]","[--slide-enter:0px]","[--slide-exit:80px]","sm:[--scale-enter:100%]","sm:[--scale-exit:103%]","sm:[--slide-enter:0px]","sm:[--slide-exit:0px]"],base:["flex","flex-col","relative","bg-white","z-50","w-full","box-border","bg-content1","outline-none","mx-1","my-1","sm:mx-6","sm:my-16"],backdrop:"z-50",header:"flex py-4 px-6 flex-initial text-large font-semibold",body:"flex flex-1 flex-col gap-3 px-6 py-2",footer:"flex flex-row gap-2 px-6 py-4 justify-end",closeButton:["absolute","appearance-none","outline-none","select-none","top-1","right-1","rtl:left-1","rtl:right-[unset]","p-2","text-foreground-500","rounded-full","hover:bg-default-100","active:bg-default-200","tap-highlight-transparent",...we]},variants:{size:{xs:{base:"max-w-xs"},sm:{base:"max-w-sm"},md:{base:"max-w-md"},lg:{base:"max-w-lg"},xl:{base:"max-w-xl"},"2xl":{base:"max-w-2xl"},"3xl":{base:"max-w-3xl"},"4xl":{base:"max-w-4xl"},"5xl":{base:"max-w-5xl"},full:{base:"my-0 mx-0 sm:mx-0 sm:my-0 max-w-full h-[100dvh] !rounded-none"}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"}},placement:{auto:{wrapper:"items-end sm:items-center"},center:{wrapper:"items-center sm:items-center"},top:{wrapper:"items-start sm:items-start"},"top-center":{wrapper:"items-start sm:items-center"},bottom:{wrapper:"items-end sm:items-end"},"bottom-center":{wrapper:"items-end sm:items-center"}},shadow:{sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},backdrop:{transparent:{backdrop:"hidden"},opaque:{backdrop:"bg-overlay/50 backdrop-opacity-disabled"},blur:{backdrop:"backdrop-blur-md backdrop-saturate-150 bg-overlay/30"}},scrollBehavior:{normal:{base:"overflow-y-hidden"},inside:{base:"max-h-[calc(100%_-_7.5rem)]",body:"overflow-y-auto"},outside:{wrapper:"items-start sm:items-start overflow-y-auto",base:"my-16"}}},defaultVariants:{size:"md",radius:"lg",shadow:"sm",placement:"auto",backdrop:"opaque",scrollBehavior:"normal"},compoundVariants:[{backdrop:["opaque","blur"],class:{backdrop:"w-screen h-screen fixed inset-0"}}]}),_e=e=>d.jsx("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",width:"1em",...e,children:d.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}),[He,z]=Oe({name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Modal />`"}),se=O((e,t)=>{const{as:o,children:a,className:r,...u}=e,{slots:i,classNames:l,bodyId:p,setBodyMounted:s}=z(),n=W(t),m=o||"div";return c.useEffect(()=>(s(!0),()=>s(!1)),[s]),d.jsx(m,{ref:n,className:i.body({class:I(l==null?void 0:l.body,r)}),id:p,...u,children:a})});se.displayName="NextUI.ModalBody";var Ge=se,Ve={enter:{scale:"var(--scale-enter)",y:"var(--slide-enter)",opacity:1,transition:{scale:{duration:.4,ease:V.ease},opacity:{duration:.4,ease:V.ease},y:{type:"spring",bounce:0,duration:.6}}},exit:{scale:"var(--scale-exit)",y:"var(--slide-exit)",opacity:0,transition:{duration:.3,ease:V.ease}}},ae=O((e,t)=>{const{as:o,children:a,role:r="dialog",...u}=e,{Component:i,domRef:l,slots:p,classNames:s,motionProps:n,backdrop:m,closeButton:M,hideCloseButton:D,disableAnimation:f,getDialogProps:A,getBackdropProps:x,getCloseButtonProps:k,onClose:w}=z(),E=o||i||"div",{dialogProps:R}=Me({role:r},l),L=c.isValidElement(M)?c.cloneElement(M,k()):d.jsx("button",{...k(),children:d.jsx(_e,{})}),y=c.useCallback(v=>{v.key==="Tab"&&v.nativeEvent.isComposing&&(v.stopPropagation(),v.preventDefault())},[]),B=A(T(R,u)),N=d.jsxs(E,{...B,onKeyDown:S(B.onKeyDown,y),children:[d.jsx(X,{onDismiss:w}),!D&&L,typeof a=="function"?a(w):a,d.jsx(X,{onDismiss:w})]}),_=c.useMemo(()=>m==="transparent"?null:f?d.jsx("div",{...x()}):d.jsx(G,{features:J,children:d.jsx(Q.div,{animate:"enter",exit:"exit",initial:"exit",variants:ke.fade,...x()})}),[m,f,x]),H=f?d.jsx("div",{className:p.wrapper({class:s==null?void 0:s.wrapper}),"data-slot":"wrapper",children:N}):d.jsx(G,{features:J,children:d.jsx(Q.div,{animate:"enter",className:p.wrapper({class:s==null?void 0:s.wrapper}),"data-slot":"wrapper",exit:"exit",initial:"exit",variants:Ve,...n,children:N})});return d.jsxs("div",{tabIndex:-1,children:[_,H]})});ae.displayName="NextUI.ModalContent";var Je=ae,ne=O((e,t)=>{const{as:o,children:a,className:r,...u}=e,{slots:i,classNames:l,headerId:p,setHeaderMounted:s}=z(),n=W(t),m=o||"header";return c.useEffect(()=>(s(!0),()=>s(!1)),[s]),d.jsx(m,{ref:n,className:i.header({class:I(l==null?void 0:l.header,r)}),id:p,...u,children:a})});ne.displayName="NextUI.ModalHeader";var Qe=ne;function qe(e={shouldBlockScroll:!0},t,o){let{overlayProps:a,underlayProps:r}=Ee({...e,isOpen:t.isOpen,onClose:t.close},o);return Ae({isDisabled:!t.isOpen||!e.shouldBlockScroll}),Be(),c.useEffect(()=>{if(t.isOpen&&o.current)return Ne([o.current])},[t.isOpen,o]),{modalProps:T(a),underlayProps:r}}function Fe(e){var t;const[o,a]=ye(e,te.variantKeys),{ref:r,as:u,className:i,classNames:l,disableAnimation:p=!1,isOpen:s,defaultOpen:n,onOpenChange:m,motionProps:M,closeButton:D,isDismissable:f=!0,hideCloseButton:A=!1,shouldBlockScroll:x=!0,portalContainer:k,isKeyboardDismissDisabled:w=!1,onClose:E,...R}=o,L=u||"section",y=W(r),B=c.useRef(null),[N,_]=c.useState(!1),[H,v]=c.useState(!1),le=c.useId(),K=c.useId(),U=c.useId(),h=Pe({isOpen:s,defaultOpen:n,onOpenChange:b=>{m==null||m(b),b||E==null||E()}}),{modalProps:de,underlayProps:Y}=qe({isDismissable:f,shouldBlockScroll:x,isKeyboardDismissDisabled:w},h,y),{buttonProps:ce}=Ie({onPress:h.close},B),{isFocusVisible:ie,focusProps:ue}=ge(),me=I(l==null?void 0:l.base,i),g=c.useMemo(()=>te({...a}),[Ce(a)]),pe=(b={},xe=null)=>({ref:je(xe,y),...T(de,R,b),className:g.base({class:I(me,b.className)}),id:le,"data-open":P(h.isOpen),"data-dismissable":P(f),"aria-modal":P(!0),"aria-labelledby":N?K:void 0,"aria-describedby":H?U:void 0}),fe=c.useCallback((b={})=>({className:g.backdrop({class:l==null?void 0:l.backdrop}),onClick:()=>h.close(),...Y,...b}),[g,l,Y]),be=()=>({role:"button",tabIndex:0,"aria-label":"Close","data-focus-visible":P(ie),className:g.closeButton({class:l==null?void 0:l.closeButton}),...T(ce,ue)});return{Component:L,slots:g,domRef:y,headerId:K,bodyId:U,motionProps:M,classNames:l,isDismissable:f,closeButton:D,hideCloseButton:A,portalContainer:k,shouldBlockScroll:x,backdrop:(t=e.backdrop)!=null?t:"opaque",isOpen:h.isOpen,onClose:h.close,disableAnimation:p,setBodyMounted:v,setHeaderMounted:_,getDialogProps:pe,getBackdropProps:fe,getCloseButtonProps:be}}var re=O((e,t)=>{const{children:o,...a}=e,r=Fe({...a,ref:t}),u=d.jsx(Se,{portalContainer:r.portalContainer,children:o});return d.jsx(He,{value:r,children:r.disableAnimation&&r.isOpen?u:d.jsx(Te,{children:r.isOpen?u:null})})});re.displayName="NextUI.Modal";var Ze=re;export{_e as C,Je as a,Qe as b,Ge as c,Ze as m,z as u};