import{r as a,j as e,Y as T,a as O}from"./app-D6oMoqqm.js";import{F as E,a as H}from"./index-BlKwdCzO.js";import{S as g}from"./sweetalert2.all-XPMZHkQs.js";import{d as h,b as x}from"./index-D9vgJChr.js";import{S as F,t as z,a as G,b as n,c as L,d as M,e as l}from"./Icons-n0S3bhVa.js";import{c as V}from"./chunk-ZBZZ6A2J-Dzecx82L.js";import{s as b,l as r}from"./chunk-OKTOLZE5-D2UsWInQ.js";import{p as A}from"./chunk-F7XGZDO5-Dt3WcCwM.js";import{i as B}from"./chunk-ZH5EUE66-BnbBlYs5.js";import"./iconBase-BR-cmu0o.js";import"./chunk-3XT5V4LF-CyNc6-LJ.js";import"./chunk-GMMETTYU-DVo_IJkY.js";import"./chunk-XHQUSKIE-DjcTBOuN.js";import"./chunk-6NL67ZRH-De-FcQp9.js";import"./useMenuTriggerState--Tb75tZc.js";import"./useDialog-Bsxk8ZDi.js";import"./useControlledState-D62E11d4.js";import"./VisuallyHidden-CrVl-S-_.js";import"./index-BrKsmHvf.js";import"./getScrollParent-BxWrNVlF.js";import"./chunk-HUKVTWEI-DXkA-xqJ.js";import"./index-BtGFx3e9.js";import"./chunk-RFUEKIFS-BiXG_wtu.js";import"./useField-DBK6V9hp.js";import"./chunk-CIZQCQPA-BQVEC0G-.js";import"./LiveAnnouncer-CuNtP5Ew.js";import"./useUpdateEffect-BW0G6ARQ.js";import"./chunk-7F3ZLNJ6-D1U1X1xd.js";import"./chunk-IXXDDLGU-DCxuo5Lk.js";import"./chunk-44JHHBS2-BttJ5CRx.js";import"./chunk-VGNVQLL4-CQzjJ6Bx.js";import"./index-X92CTFGl.js";function be({guestLogs:c}){const[p,_]=a.useState(""),[f,j]=a.useState(1),[o,y]=a.useState(13),[m,k]=a.useState("past24Hours"),[C,w]=a.useState([]);a.useEffect(()=>{(()=>{const s=new Date;let i=null;switch(m){case"past24Hours":i=new Date(s.getTime()-864e5);break;case"past7Days":i=new Date(s.getTime()-6048e5);break;case"past30Days":i=new Date(s.getTime()-2592e6);break;default:i=null;break}if(i){const S=c.filter(P=>new Date(P.check_in_time)>=i);w(S)}else w(c)})()},[m,c]);const u=C.filter(t=>t.guest.name.toLowerCase().includes(p.toLowerCase())),d=f*o,v=d-o,D=u.slice(v,d),N=t=>j(t),I=async t=>{try{await h.Inertia.post(`/guest/log/check-out/${t}`),g.fire({icon:"success",title:"Guest checked out successfully!"})}catch(s){console.error("Error checking out guest:",s),g.fire({icon:"error",title:"An error occurred",text:"Please try again later."})}};return a.useEffect(()=>{const t=setTimeout(()=>{h.Inertia.visit("/",{replace:!0})},3e4),s=()=>{clearTimeout(t)};return window.addEventListener("mousemove",s),window.addEventListener("keydown",s),()=>{clearTimeout(t),window.removeEventListener("mousemove",s),window.removeEventListener("keydown",s)}},[]),e.jsxs("div",{className:"min-h-screen bg-[url(/assets/images/bg.png)] bg-cover",children:[e.jsx(T,{title:"Check Out"}),e.jsx("div",{className:"py-12 p-4",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsxs(V,{className:"w-full p-4",children:[e.jsxs("div",{className:"text-center mb-8",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 ",children:e.jsxs("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary relative",children:["Check Out",e.jsx("span",{className:"absolute  left-1/2 transform -translate-x-1/2 -bottom-2 h-[3px] w-16 bg-[#2aefe6]"})]})}),e.jsx("p",{className:"text-sm font-light",children:'To check out a guest, click on the "Check Out" button.'})]}),e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex justify-between gap-3 items-end mb-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(x,{as:O,href:route("guestlog.create"),color:"primary",variant:"shadow",endContent:e.jsx(E,{}),children:"Check-in"}),e.jsx(x,{isIconOnly:!0,color:"secondary",variant:"flat",startContent:e.jsx(H,{}),onClick:()=>h.Inertia.visit("/")})]}),e.jsx(B,{variant:"bordered",placeholder:"Search by guest name",className:"w-full sm:max-w-[35%]",startContent:e.jsx(F,{className:"text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"}),value:p,onChange:t=>{_(t.target.value),j(1)}})]}),e.jsxs("div",{className:"flex justify-between items-center mt-4",children:[e.jsxs("div",{className:"flex gap-2 w-[35%]",children:[e.jsxs(b,{size:"sm",placeholder:"Items Per Page",value:o.toString(),onChange:t=>y(Number(t.target.value)),children:[e.jsx(r,{value:"5",children:"5"},"5"),e.jsx(r,{value:"10",children:"10"},"10"),e.jsx(r,{value:"15",children:"15"},"15")]}),e.jsxs(b,{size:"sm",placeholder:"Past 24 Hours",value:m,onChange:t=>k(t.target.value),children:[e.jsx(r,{value:"current",children:"All Time"},"current"),e.jsx(r,{value:"past24Hours",children:"Past 24 Hours"},"past24Hours"),e.jsx(r,{value:"past7Days",children:"Past 7 Days"},"past7Days"),e.jsx(r,{value:"past30Days",children:"Past 30 Days"},"past30Days")]})]}),e.jsxs("p",{children:["Showing ",v+1," to"," ",d," of (",u.length,")"]})]}),e.jsxs(z,{selectionMode:"single","aria-label":"Guests Table",children:[e.jsxs(G,{children:[e.jsx(n,{children:"Guest ID"}),e.jsx(n,{children:"Guest Name"}),e.jsx(n,{children:"Meeting With"}),e.jsx(n,{children:"Purpose of Visit"}),e.jsx(n,{children:"Check In"}),e.jsx(n,{children:"Check Out"})]}),e.jsx(L,{emptyContent:"No log for today.",children:D.sort((t,s)=>new Date(s.created_at)-new Date(t.created_at)).map(t=>e.jsxs(M,{children:[e.jsx(l,{children:t.guest_id}),e.jsx(l,{children:t.guest.name}),e.jsx(l,{children:t.meeting_with}),e.jsx(l,{children:t.purpose_of_visit}),e.jsx(l,{children:new Date(new Date(t.check_in_time).getTime()-new Date(t.check_in_time).getTimezoneOffset()*6e4).toLocaleString([],{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0})}),e.jsx(l,{children:t.check_out_time?new Date(new Date(t.check_out_time).getTime()-new Date(t.check_out_time).getTimezoneOffset()*6e4).toLocaleString([],{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0}):e.jsx(x,{onClick:()=>I(t.id),color:"success",size:"sm",children:"Check Out"})})]},t.id))})]}),e.jsx("div",{className:"flex w-full justify-center",children:e.jsx(A,{color:"primary",showShadow:!0,isCompact:!0,showControls:!0,total:Math.ceil(u.length/o),page:f,onChange:N})})]})]})})})]})}export{be as default};
