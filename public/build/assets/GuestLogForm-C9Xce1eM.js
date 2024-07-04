import{r as n,j as e,Y as z,b as A}from"./app-CO5wpSfZ.js";import{S as j}from"./sweetalert2.all-9UQzOe7u.js";import{G as V,H as M}from"./GuestRegisterForm--PPdj0Ik.js";import{a as W,m as E,p as H,Q as $,M as Y,s as K}from"./Data-BlGn7PCn.js";import{b as d,d as y}from"./index-CDqKHlzA.js";import{G as w}from"./index-CQl_dsDE.js";import{G as J}from"./iconBase-DzqBfQfN.js";import{l as b,s as _}from"./chunk-OKTOLZE5-CgiAQGlU.js";import{s as h}from"./chunk-IXXDDLGU-DTs05vMs.js";import{i as C}from"./chunk-ZH5EUE66-BgX1dPiC.js";import"./index-Bcx430xT.js";import"./chunk-X4CB5I5S-B2f7nLXb.js";import"./chunk-XHQUSKIE-ZgI_Dvk9.js";import"./useDialog-BzO8UDIN.js";import"./useControlledState-B3MVYGPx.js";import"./VisuallyHidden-DX2fErcg.js";import"./chunk-6NL67ZRH-DxynP09K.js";import"./getScrollParent-DpHuCxvN.js";import"./chunk-3XT5V4LF-Oh88uyHI.js";import"./chunk-QY5NICTW-BQA6zMhv.js";import"./chunk-HUKVTWEI-BP7zCPSB.js";import"./index-Dqf8YHrp.js";import"./index-BGQmdK6y.js";import"./useField-CK-2wfN1.js";import"./chunk-CIZQCQPA-Dobh4WMc.js";import"./useFilter-Dsm-vKBE.js";import"./useMenuTriggerState-BkqndFhJ.js";import"./LiveAnnouncer-CuNtP5Ew.js";import"./chunk-VGNVQLL4-B7m4ciat.js";import"./chunk-7F3ZLNJ6-BmGWiuT4.js";import"./chunk-44JHHBS2-DS86ar6n.js";function X(o){return J({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"rect",attr:{x:"9",y:"11",fill:"#424242",width:"30",height:"3"},child:[]},{tag:"path",attr:{fill:"#616161",d:"M4,25h40v-7c0-2.2-1.8-4-4-4H8c-2.2,0-4,1.8-4,4V25z"},child:[]},{tag:"path",attr:{fill:"#424242",d:"M8,36h32c2.2,0,4-1.8,4-4v-8H4v8C4,34.2,5.8,36,8,36z"},child:[]},{tag:"circle",attr:{fill:"#00E676",cx:"40",cy:"18",r:"1"},child:[]},{tag:"rect",attr:{x:"11",y:"4",fill:"#90CAF9",width:"26",height:"10"},child:[]},{tag:"path",attr:{fill:"#242424",d:"M37.5,31h-27C9.7,31,9,30.3,9,29.5v0c0-0.8,0.7-1.5,1.5-1.5h27c0.8,0,1.5,0.7,1.5,1.5v0 C39,30.3,38.3,31,37.5,31z"},child:[]},{tag:"rect",attr:{x:"11",y:"31",fill:"#90CAF9",width:"26",height:"11"},child:[]},{tag:"rect",attr:{x:"11",y:"29",fill:"#42A5F5",width:"26",height:"2"},child:[]},{tag:"g",attr:{fill:"#1976D2"},child:[{tag:"rect",attr:{x:"16",y:"33",width:"17",height:"2"},child:[]},{tag:"rect",attr:{x:"16",y:"37",width:"13",height:"2"},child:[]}]}]})(o)}const Te=({guests:o,name:l})=>{const[m,u]=n.useState(""),[p,g]=n.useState(l),[i,c]=n.useState({meeting_with:"",purpose_of_visit:"",check_in_time:"",check_out_time:""}),[k,N]=n.useState(""),[S,I]=n.useState(!1),[f,v]=n.useState("");n.useState(l);const R=t=>{const{name:r,value:a}=t.target;c({...i,[r]:a})},P=async t=>{t.preventDefault();const r=new Date(i.check_in_time).toISOString().slice(0,19).replace("T"," "),a={...i,check_in_time:r.toString(),check_out_time:i.check_out_time?new Date(i.check_out_time).toISOString():null,purpose_of_visit:i.purpose_of_visit==="Other"?f:i.purpose_of_visit};try{const s=await A.post(`/guest/log/new/${m}`,a),x=s.data.guestLogId,B=s.data.qrCodeUrl,L=s.data.guestName.split(" ")[0];j.fire({title:"Success",icon:"success",showConfirmButton:!1,timer:1e3}),N(B),I(!0),c(U=>({...U,guestName:L}))}catch{j.fire("Error","There was an error submitting the form","error")}},D=()=>{const t=new Date,r=t.getTimezoneOffset()*6e4,s=new Date(t.getTime()-r).toISOString().slice(0,16);c(x=>({...x,check_in_time:s}))};n.useEffect(()=>{const t=o.find(r=>r.name===l);t&&u(t.id)},[l,o]);const T=t=>{g(t.target.value)},O=o.filter(t=>t.name.toLowerCase().includes(p.toLowerCase())).sort((t,r)=>t.name.localeCompare(r.name)),G=t=>{const{value:r}=t.target;c({...i,purpose_of_visit:r}),r!=="Other"&&v("")},Q=()=>{j.fire({title:"Are you sure?",text:"You are about to close this page. Please ensure that the QR code has been captured or printed.",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, close it",cancelButtonText:"Cancel",cancelButtonColor:"#3085d6",confirmButtonColor:"#d33"}).then(t=>{t.isConfirmed&&y.Inertia.visit("/")})},q=t=>{const a=document.querySelector("canvas").toDataURL("image/png").replace("image/png","image/octet-stream"),s=document.createElement("a");s.href=a;const x=new Date().toISOString().slice(0,10);s.download=`qr_code_generated_on_${x}.png`,document.body.appendChild(s),s.click(),document.body.removeChild(s)},F=()=>{const r=document.querySelector("canvas").toDataURL("image/png"),a=K.renderToString(e.jsx(Z,{guestID:m,guestName:i.guestName,meetingWith:i.meeting_with,purposeOfVisit:i.purpose_of_visit==="Other"?f:i.purpose_of_visit,checkInTime:i.check_in_time,checkOutTime:i.check_out_time,qrCodeUrl:r})),s=window.open("","_blank","hidden=yes");s.document.open(),s.document.write("<html><head><title>Print</title>"),s.document.write("</head><body>"),s.document.write(a),s.document.write("</body></html>"),s.document.close(),s.onload=function(){s.focus(),s.print(),s.close()}};return e.jsxs("div",{className:"min-h-screen bg-[url(/assets/images/bg.png)] bg-cover",children:[e.jsx(z,{title:"Log Guest"}),e.jsx("div",{className:"py-12 p-4 flex justify-center items-center",children:e.jsxs("div",{className:"max-w-2xl w-full mx-auto p-4 bg-white shadow-md rounded-lg py-5",children:[e.jsxs("div",{className:"text-center  mb-5",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 ",children:e.jsxs("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary relative",children:["Guest Log Form",e.jsx("span",{className:"absolute  left-1/2 transform -translate-x-1/2 -bottom-2 h-[3px] w-16 bg-[#2aefe6]"})]})}),e.jsx("p",{className:"text-sm font-light",children:"Please fill out the form below to log your visit today."})]}),e.jsxs("form",{onSubmit:P,children:[e.jsxs("div",{className:"flex gap-3 mb-4",children:[e.jsx(W,{label:e.jsx(e.Fragment,{children:e.jsx("b",{children:"Guest Name"})}),labelPlacement:"outside",placeholder:"Search your name here",description:"If you don't see your name here, please click 'New Guest' button to register.",selectedKey:m,onSelectionChange:u,isRequired:!0,onInput:T,children:p&&O.map(t=>e.jsx(b,{value:t.id,children:t.name},t.id))}),e.jsx(V,{})]}),e.jsx(h,{y:2}),e.jsx("div",{className:"mb-4",children:e.jsx(_,{label:e.jsx(e.Fragment,{children:e.jsx("b",{children:"Meeting With"})}),labelPlacement:"outside",placeholder:"Select",value:i.meeting_with,onChange:t=>c({...i,meeting_with:t.target.value}),children:E.map(t=>e.jsx(b,{value:t.value,children:`${t.label} - ${t.position}`},t.value))})}),e.jsx(h,{y:2}),e.jsxs("div",{className:"mb-4",children:[e.jsx(_,{label:e.jsx(e.Fragment,{children:e.jsx("b",{children:"Purpose of Visit"})}),labelPlacement:"outside",placeholder:"Select",value:i.purpose_of_visit,onChange:G,isRequired:!0,children:H.map(t=>e.jsx(b,{value:t.value,children:t.label},t.value))}),e.jsx(h,{y:2}),i.purpose_of_visit==="Other"&&e.jsx(C,{placeholder:"Please input your purpose of visit",value:f,onChange:t=>v(t.target.value),isRequired:!0})]}),e.jsx(h,{y:2}),e.jsxs("div",{className:"flex gap-4 mb-4",children:[e.jsx(C,{label:e.jsx(e.Fragment,{children:e.jsx("b",{children:"Check In Time"})}),placeholder:"Check In",description:"Please enter your check in time or click the button to check in.",labelPlacement:"outside",type:"datetime-local",name:"check_in_time",value:i.check_in_time,onChange:R,isRequired:!0,onClear:()=>c({...i,check_in_time:""})}),e.jsx("div",{className:"hidden md:flex items-center text-sm text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6",children:"Or"}),e.jsx(d,{color:"primary",variant:"shadow",onClick:D,className:"mt-6 ",children:"Check In"})]}),e.jsx(h,{y:7}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(d,{size:"lg",color:"primary",variant:"shadow",type:"submit",startContent:e.jsx(M,{className:"w-6 h-6 text-success"}),children:"Submit"}),e.jsx(d,{size:"lg",color:"danger",onClick:()=>y.Inertia.visit("/"),startContent:e.jsx(w,{className:"w-4 h-4"}),children:"Cancel"})]})]})]})}),S&&e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-[url(/assets/images/bg.png)] bg-cover bg-opacity-100 z-50 p-1",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg max-w-md space-y-4 w-full mx-4",children:[e.jsxs("div",{className:"flex justify-center",children:[e.jsxs("h1",{className:"hidden md:block text-center",children:[e.jsx("span",{className:"text-danger",children:"*"})," Please capture this QR code using your mobile phone or print it out. This will be used for checking out."]}),e.jsxs("h1",{className:"md:hidden text-center",children:[e.jsx("span",{className:"text-danger",children:"*"})," Please download this QR code or take a screenshot using your mobile phone. This will be used for checking out."]})]}),e.jsxs("div",{className:"flex justify-center",children:[e.jsx($,{value:k,size:350})," "]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(d,{color:"primary",variant:"shadow",onClick:F,className:"hidden sm:block",children:e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(X,{className:"w-5 h-5 text-success"}),"Print QR"]})}),e.jsx(d,{color:"primary",variant:"shadow",onClick:()=>q(),className:"sm:hidden",children:e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(Y,{className:"w-6 h-6 text-success-400"}),"Download QR"]})}),e.jsx(d,{startContent:e.jsx(w,{className:"w-4 h-4"}),color:"danger",onClick:Q,children:"Close"})]})]})})]})},Z=({guestID:o,guestName:l,meetingWith:m,purposeOfVisit:u,checkInTime:p,qrCodeUrl:g})=>e.jsxs("div",{style:{padding:"10px",fontFamily:"Arial, sans-serif",width:"80mm",maxWidth:"80mm",wordWrap:"break-word"},children:[e.jsx("h2",{style:{textAlign:"center",marginRight:"40px"},children:"VISITOR"}),e.jsxs("p",{style:{textAlign:"center",marginRight:"40px"},children:["Hello, I'm ",l]}),e.jsx("hr",{style:{marginRight:"40px"}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx("div",{style:{marginBottom:"5px",textAlign:"left",width:"100%"},children:e.jsxs("p",{className:"",children:[e.jsx("strong",{children:"Guest ID:"})," ",o," ",e.jsx("br",{}),e.jsx("strong",{children:"Guest Name:"})," ",l," ",e.jsx("br",{}),e.jsx("strong",{children:"Meeting With:"})," ",m," ",e.jsx("br",{}),e.jsx("strong",{children:"Purpose of Visit:"})," ",u," ",e.jsx("br",{}),e.jsx("strong",{children:"Check In:"}),new Date(p).toLocaleString([],{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0})]})}),e.jsx("div",{style:{marginTop:"10px",marginRight:"40px",marginBottom:"10px"},children:e.jsx("img",{src:g,alt:"QR Code",style:{width:"150px",height:"150px"}})})]}),e.jsx("hr",{style:{marginRight:"40px"}}),e.jsx("div",{style:{textAlign:"center",marginTop:"10px",marginRight:"40px"},children:e.jsx("p",{children:"Scan this QR code to check out. Please keep it with you.Thank you for visit!"})})]});export{Z as PrintableGuestPass,Te as default};
