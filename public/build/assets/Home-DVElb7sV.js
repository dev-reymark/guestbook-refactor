import{r as a,b as p,j as e,Y as g}from"./app-W9rABB7H.js";import{e as f,f as j}from"./index-I3e8_p6C.js";import{S as y,N as v,A as N,a as w}from"./scrollbar-DsWY-KJL.js";import{c as i}from"./chunk-ZBZZ6A2J-CFWVQFnh.js";import{i as n}from"./chunk-YAC6J4IU-B3N73GNy.js";import{l as c}from"./chunk-77LBB3F4-Ce4K5V8a.js";import{c as b,a as k}from"./chunk-J333S7JQ-TbJ4Dble.js";import{d as S}from"./chunk-44JHHBS2-DmlQyGAj.js";import"./iconBase-DK-kuZej.js";import"./chunk-XHQUSKIE-D1XKxXcu.js";import"./chunk-6NL67ZRH-CjJSE_D0.js";import"./useFocusable-CM9SnkFp.js";import"./index-D9thexaF.js";import"./index-CwcQvHrJ.js";function H({auth:E,mediaUrls:d=[]}){const[l,m]=a.useState(new Date),o=a.useRef(null);a.useEffect(()=>{o.current&&o.current.play().catch(t=>{console.error("Error playing audio:",t)})},[]),a.useEffect(()=>{h()},[]);const h=async()=>{try{const s=(await p.get("/fetch-guest-data")).data;setTotalRegisteredGuest(s.totalRegisteredGuest),setAvgLogsInPast7Days(s.avgLogsInPast7Days)}catch(t){console.error("Error fetching guest data:",t)}};a.useEffect(()=>{const t=setInterval(()=>{m(new Date)},1e3);return()=>clearInterval(t)},[]);const u=l.toLocaleTimeString([],{hour12:!0,hour:"2-digit",minute:"2-digit",second:"2-digit"}),x=l.toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"});return e.jsxs(e.Fragment,{children:[e.jsx(g,{title:"Home"}),e.jsxs("div",{className:"relative min-h-screen p-5",children:[e.jsx("img",{className:"absolute inset-0 w-full h-full object-cover pointer-events-none",src:"/assets/images/bg.png"}),e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsxs("main",{className:"mt-20 grid gap-4 lg:grid-cols-2",style:{height:"600px"},children:[e.jsx(i,{className:"w-full",children:e.jsx("div",{className:"h-full",children:e.jsx(y,{slidesPerView:1,modules:[v,N],autoplay:{delay:5e3,disableOnInteraction:!1},onSlideChangeTransitionEnd:t=>{const r=t.slides[t.activeIndex].querySelector("video");r&&(r.play(),t.autoplay.stop(),r.addEventListener("ended",()=>{t.autoplay.start(),t.slideNext()}))},style:{width:"100%",height:"100%"},children:d.map((t,s)=>e.jsx(w,{children:t.endsWith(".mp4")?e.jsxs("video",{autoPlay:!0,className:"w-full h-full object-cover",children:[e.jsx("source",{src:t,type:"video/mp4"}),"Your browser does not support the video tag."]}):e.jsx(n,{src:t,height:1e3,width:1e3,alt:`Media ${s}`,className:"w-full h-full object-cover"})},s))})})}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 items-center",children:[e.jsxs(i,{className:"p-2 text-center font-semibold text-gray-200 bg-transparent",style:{height:"150px"},children:[e.jsx("p",{className:"text-7xl",children:u}),e.jsx("p",{className:"text-3xl font-light",children:x})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",style:{height:"200px"},children:[e.jsx(i,{as:c,href:route("guestlog.create"),children:e.jsxs("div",{className:"flex items-start gap-4 p-5 py-14",children:[e.jsx("div",{className:"flex size-12 shrink-0 items-center justify-center rounded-full bg-[#00C48C]/10 sm:size-16",children:e.jsx(f,{className:"h-6 w-6 text-primary"})}),e.jsx("div",{className:"pt-3 sm:pt-5",children:e.jsx("h2",{className:"text-2xl font-semibold text-black dark:text-white",children:"Check-in"})})]})}),e.jsx(i,{as:c,href:route("guestlog.scan"),children:e.jsxs("div",{className:"flex items-start gap-4 p-5 py-14",children:[e.jsx("div",{className:"flex size-12 shrink-0 items-center justify-center rounded-full bg-[#FF6B6B]/10 sm:size-16",children:e.jsx(j,{className:"h-6 w-6 text-danger"})}),e.jsx("div",{className:"pt-3 sm:pt-5",children:e.jsx("h2",{className:"text-2xl font-semibold text-black dark:text-white",children:"Check-out"})})]})})]}),e.jsxs(i,{className:"p-2",style:{height:"290px"},children:[e.jsx(b,{className:"text-center p-0 mb-3",children:e.jsx(n,{src:"/assets/images/logo-new.png",alt:"",width:"auto",height:"16"})}),e.jsx(S,{}),e.jsx(k,{children:e.jsxs("div",{className:"mt-1",children:[e.jsxs("p",{children:[e.jsxs("span",{className:"font-bold text-md",children:["Privacy Notice: ","  "]}),"This kiosk collects personal information from visitors and registers them as guest/s."]}),e.jsx("p",{children:"We are committed to protecting your personal information and ensuring its confidentiality. Any data collected through this kiosk will be used solely for the purpose stated and will not be shared with third parties without your consent, except where required by law."})]})})]})]})]})})]})]})}export{H as default};
