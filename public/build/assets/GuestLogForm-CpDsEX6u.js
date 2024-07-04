import{r as o,j as e,Y as V,b as M}from"./app-DD9rhTtv.js";import{S as j}from"./sweetalert2.all-BWp7xjUc.js";import{G as W,H as E}from"./GuestRegisterForm-DoNkh3sJ.js";import{a as H,m as $,p as Y,Q as K,M as J,s as X}from"./Data-Bk97Pdp1.js";import{b as d,d as y}from"./index-CpCuFxGX.js";import{G as w}from"./index-ClYOqLKB.js";import{G as Z}from"./iconBase-debvKZmI.js";import{l as b,s as _}from"./chunk-OKTOLZE5-DALboX4Z.js";import{s as h}from"./chunk-IXXDDLGU-DSDnA2Jk.js";import{i as C}from"./chunk-ZH5EUE66-Z8mautop.js";import{i as ee}from"./chunk-YAC6J4IU-C00iL-au.js";import"./index-BixbDo4I.js";import"./react-webcam-rIvqufMp.js";import"./index-CsG0tH7t.js";import"./chunk-X4CB5I5S-D6O9IKwa.js";import"./chunk-XHQUSKIE-Wp14T0fw.js";import"./useDialog-Dif4VF7h.js";import"./useControlledState-BmFBuDc0.js";import"./VisuallyHidden-5oSL4531.js";import"./chunk-6NL67ZRH-gOTG5TmV.js";import"./getScrollParent-Bge-XfiX.js";import"./chunk-3XT5V4LF-BjZCzBj-.js";import"./chunk-QY5NICTW-L9G8JelF.js";import"./chunk-HUKVTWEI-qjClWyvg.js";import"./index-Beiuia64.js";import"./index-Sn5wN2z7.js";import"./useField-DGG8Pg6M.js";import"./chunk-CIZQCQPA-BYFhkhUv.js";import"./useFilter-DRAYsPRy.js";import"./useMenuTriggerState-7dPNpU9b.js";import"./LiveAnnouncer-CuNtP5Ew.js";import"./chunk-VGNVQLL4-Gjy5snYR.js";import"./chunk-7F3ZLNJ6-BYWeyow8.js";import"./chunk-44JHHBS2-C9bX0Jrp.js";import"./index-B0LnG7rN.js";function te(n){return Z({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"rect",attr:{x:"9",y:"11",fill:"#424242",width:"30",height:"3"},child:[]},{tag:"path",attr:{fill:"#616161",d:"M4,25h40v-7c0-2.2-1.8-4-4-4H8c-2.2,0-4,1.8-4,4V25z"},child:[]},{tag:"path",attr:{fill:"#424242",d:"M8,36h32c2.2,0,4-1.8,4-4v-8H4v8C4,34.2,5.8,36,8,36z"},child:[]},{tag:"circle",attr:{fill:"#00E676",cx:"40",cy:"18",r:"1"},child:[]},{tag:"rect",attr:{x:"11",y:"4",fill:"#90CAF9",width:"26",height:"10"},child:[]},{tag:"path",attr:{fill:"#242424",d:"M37.5,31h-27C9.7,31,9,30.3,9,29.5v0c0-0.8,0.7-1.5,1.5-1.5h27c0.8,0,1.5,0.7,1.5,1.5v0 C39,30.3,38.3,31,37.5,31z"},child:[]},{tag:"rect",attr:{x:"11",y:"31",fill:"#90CAF9",width:"26",height:"11"},child:[]},{tag:"rect",attr:{x:"11",y:"29",fill:"#42A5F5",width:"26",height:"2"},child:[]},{tag:"g",attr:{fill:"#1976D2"},child:[{tag:"rect",attr:{x:"16",y:"33",width:"17",height:"2"},child:[]},{tag:"rect",attr:{x:"16",y:"37",width:"13",height:"2"},child:[]}]}]})(n)}const Be=({guests:n,name:l})=>{const[m,u]=o.useState(""),[p,g]=o.useState(l),[s,c]=o.useState({meeting_with:"",purpose_of_visit:"",check_in_time:"",check_out_time:""}),[k,N]=o.useState(""),[S,I]=o.useState(!1),[f,v]=o.useState("");o.useState(l);const P=t=>{const{name:r,value:a}=t.target;c({...s,[r]:a})},D=async t=>{t.preventDefault();const r=new Date(s.check_in_time).toISOString().slice(0,19).replace("T"," "),a={...s,check_in_time:r.toString(),check_out_time:s.check_out_time?new Date(s.check_out_time).toISOString():null,purpose_of_visit:s.purpose_of_visit==="Other"?f:s.purpose_of_visit};try{const i=await M.post(`/guest/log/new/${m}`,a),x=i.data.guestLogId,B=i.data.qrCodeUrl,L=i.data.guestName,z=i.data.guestPhoto,A=L.split(" ")[0];j.fire({title:"Success",icon:"success",showConfirmButton:!1,timer:1e3}),N(B),I(!0),c(U=>({...U,guestName:A,guestPhoto:z}))}catch{j.fire("Error","There was an error submitting the form","error")}},O=()=>{const t=new Date,r=t.getTimezoneOffset()*6e4,i=new Date(t.getTime()-r).toISOString().slice(0,16);c(x=>({...x,check_in_time:i}))};o.useEffect(()=>{const t=n.find(r=>r.name===l);t&&u(t.id)},[l,n]);const R=t=>{g(t.target.value)},T=n.filter(t=>t.name.toLowerCase().includes(p.toLowerCase())).sort((t,r)=>t.name.localeCompare(r.name)),G=t=>{const{value:r}=t.target;c({...s,purpose_of_visit:r}),r!=="Other"&&v("")},Q=()=>{j.fire({title:"Are you sure?",text:"You are about to close this page. Please ensure that the QR code has been captured or printed.",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, close it",cancelButtonText:"Cancel",cancelButtonColor:"#3085d6",confirmButtonColor:"#d33"}).then(t=>{t.isConfirmed&&y.Inertia.visit("/")})},q=t=>{const a=document.querySelector("canvas").toDataURL("image/png").replace("image/png","image/octet-stream"),i=document.createElement("a");i.href=a;const x=new Date().toISOString().slice(0,10);i.download=`qr_code_generated_on_${x}.png`,document.body.appendChild(i),i.click(),document.body.removeChild(i)},F=()=>{const r=document.querySelector("canvas").toDataURL("image/png"),a=X.renderToString(e.jsx(se,{guestID:m,guestName:s.guestName,guestPhoto:s.guestPhoto,meetingWith:s.meeting_with,purposeOfVisit:s.purpose_of_visit==="Other"?f:s.purpose_of_visit,checkInTime:s.check_in_time,checkOutTime:s.check_out_time,qrCodeUrl:r})),i=window.open("","_blank","hidden=yes");i.document.open(),i.document.write("<html><head><title>Print</title>"),i.document.write("</head><body>"),i.document.write(a),i.document.write("</body></html>"),i.document.close(),i.onload=function(){i.focus(),i.print(),i.close()}};return e.jsxs("div",{className:"min-h-screen bg-[url(/assets/images/bg.png)] bg-cover",children:[e.jsx(V,{title:"Log Guest"}),e.jsx("div",{className:"py-12 p-4 flex justify-center items-center",children:e.jsxs("div",{className:"max-w-2xl w-full mx-auto p-4 bg-white shadow-md rounded-lg py-5",children:[e.jsxs("div",{className:"text-center  mb-5",children:[e.jsx("h2",{className:"text-3xl font-bold mb-4 ",children:e.jsxs("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary relative",children:["Guest Log Form",e.jsx("span",{className:"absolute  left-1/2 transform -translate-x-1/2 -bottom-2 h-[3px] w-16 bg-[#2aefe6]"})]})}),e.jsx("p",{className:"text-sm font-light",children:"Please fill out the form below to log your visit today."})]}),e.jsxs("form",{onSubmit:D,children:[e.jsxs("div",{className:"flex gap-3 mb-4",children:[e.jsx(H,{label:e.jsx(e.Fragment,{children:e.jsx("b",{children:"Guest Name"})}),labelPlacement:"outside",placeholder:"Search your name here",description:"If you don't see your name here, please click 'New Guest' button to register.",selectedKey:m,onSelectionChange:u,isRequired:!0,onInput:R,children:p&&T.map(t=>e.jsx(b,{value:t.id,children:t.name},t.id))}),e.jsx(W,{})]}),e.jsx(h,{y:2}),e.jsx("div",{className:"mb-4",children:e.jsx(_,{label:e.jsx(e.Fragment,{children:e.jsx("b",{children:"Meeting With"})}),labelPlacement:"outside",placeholder:"Select",value:s.meeting_with,onChange:t=>c({...s,meeting_with:t.target.value}),children:$.map(t=>e.jsx(b,{value:t.value,children:`${t.label} - ${t.position}`},t.value))})}),e.jsx(h,{y:2}),e.jsxs("div",{className:"mb-4",children:[e.jsx(_,{label:e.jsx(e.Fragment,{children:e.jsx("b",{children:"Purpose of Visit"})}),labelPlacement:"outside",placeholder:"Select",value:s.purpose_of_visit,onChange:G,isRequired:!0,children:Y.map(t=>e.jsx(b,{value:t.value,children:t.label},t.value))}),e.jsx(h,{y:2}),s.purpose_of_visit==="Other"&&e.jsx(C,{placeholder:"Please input your purpose of visit",value:f,onChange:t=>v(t.target.value),isRequired:!0})]}),e.jsx(h,{y:2}),e.jsxs("div",{className:"flex gap-4 mb-4",children:[e.jsx(C,{label:e.jsx(e.Fragment,{children:e.jsx("b",{children:"Check In Time"})}),placeholder:"Check In",description:"Please enter your check in time or click the button to check in.",labelPlacement:"outside",type:"datetime-local",name:"check_in_time",value:s.check_in_time,onChange:P,isRequired:!0,onClear:()=>c({...s,check_in_time:""})}),e.jsx("div",{className:"hidden md:flex items-center text-sm text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6",children:"Or"}),e.jsx(d,{color:"primary",variant:"shadow",onClick:O,className:"mt-6 ",children:"Check In"})]}),e.jsx(h,{y:7}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(d,{size:"lg",color:"primary",variant:"shadow",type:"submit",startContent:e.jsx(E,{className:"w-6 h-6 text-success"}),children:"Submit"}),e.jsx(d,{size:"lg",color:"danger",onClick:()=>y.Inertia.visit("/"),startContent:e.jsx(w,{className:"w-4 h-4"}),children:"Cancel"})]})]})]})}),S&&e.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-[url(/assets/images/bg.png)] bg-cover bg-opacity-100 z-50 p-1",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg max-w-md space-y-4 w-full mx-4",children:[e.jsxs("div",{className:"flex justify-center",children:[e.jsxs("h1",{className:"hidden md:block text-center",children:[e.jsx("span",{className:"text-danger",children:"*"})," Please capture this QR code using your mobile phone or print it out. This will be used for checking out."]}),e.jsxs("h1",{className:"md:hidden text-center",children:[e.jsx("span",{className:"text-danger",children:"*"})," Please download this QR code or take a screenshot using your mobile phone. This will be used for checking out."]})]}),e.jsxs("div",{className:"flex justify-center",children:[e.jsx(K,{value:k,size:350})," "]}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(d,{color:"primary",variant:"shadow",onClick:F,className:"hidden sm:block",children:e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(te,{className:"w-5 h-5 text-success"}),"Print QR"]})}),e.jsx(d,{color:"primary",variant:"shadow",onClick:()=>q(),className:"sm:hidden",children:e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(J,{className:"w-6 h-6 text-success-400"}),"Download QR"]})}),e.jsx(d,{startContent:e.jsx(w,{className:"w-4 h-4"}),color:"danger",onClick:Q,children:"Close"})]})]})})]})},se=({guestID:n,guestName:l,meetingWith:m,purposeOfVisit:u,checkInTime:p,qrCodeUrl:g,guestPhoto:s})=>e.jsxs("div",{style:{position:"relative",padding:"10px",fontFamily:"Arial, sans-serif",width:"70mm",maxWidth:"70mm",wordWrap:"break-word",border:"1px solid #ccc",borderRadius:"8px"},children:[e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%) rotate(-30deg)",opacity:"0.2",zIndex:"-1"},children:e.jsx(ee,{src:"/assets/images/logo-new.png",alt:"Watermark Logo",style:{width:"500px",height:"auto",pointerEvents:"none"}})}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx("h2",{style:{textAlign:"center",margin:"10px 0"},children:"VISITOR"}),s&&e.jsx("div",{style:{textAlign:"center",marginBottom:"10px"},children:e.jsx("img",{src:s,alt:l,width:100,height:100,style:{borderRadius:"50%",marginBottom:"5px"}})}),e.jsxs("p",{style:{textAlign:"center",marginBottom:"5px"},children:["Hello, I'm ",l]}),e.jsx("hr",{style:{margin:"10px 0",width:"80%"}}),e.jsx("div",{style:{textAlign:"left",margin:"5px 10px"},children:e.jsxs("p",{children:[e.jsx("strong",{children:"Guest ID:"})," ",n," ",e.jsx("br",{}),e.jsx("strong",{children:"Meeting With:"})," ",m," ",e.jsx("br",{}),e.jsx("strong",{children:"Purpose of Visit:"})," ",u," ",e.jsx("br",{}),e.jsx("strong",{children:"Check In:"})," ",new Date(p).toLocaleString([],{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",hour12:!0})]})}),e.jsx("div",{style:{margin:"10px 0"},children:e.jsx("img",{src:g,alt:"QR Code",style:{width:"120px",height:"120px"}})}),e.jsx("hr",{style:{margin:"10px 0",width:"80%"}}),e.jsx("p",{style:{textAlign:"center",marginTop:"5px"},children:"Scan this QR code to check out."})]})]});export{se as PrintableGuestPass,Be as default};