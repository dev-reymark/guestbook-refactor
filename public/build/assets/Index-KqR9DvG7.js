import{r as l,W as D,j as e,Y as P,b as y}from"./app-Db2-ubiR.js";import{F as N}from"./index-BOcLUZr1.js";import{S as g}from"./sweetalert2.all-ZQG-aeL4.js";import{b as _,d as v}from"./index-Drw1y9bo.js";import{A as w}from"./AuthenticatedLayout-BQOrIhum.js";import{t as I,a as R,b as k,c as $,d as E,e as O,D as L}from"./Icons-CYusrLkA.js";import{a as S}from"./index-B1ty5uEW.js";import{$ as M}from"./useControlledState-BzsOsSwy.js";import{u as U}from"./chunk-HUKVTWEI-Bg16cXyw.js";import{m as A,a as B,b as F,c as G,d as T}from"./chunk-X4CB5I5S-Ca7i5055.js";import{l as z}from"./chunk-77LBB3F4-CUZsdVAA.js";import{s as V}from"./chunk-IXXDDLGU-BDGZNh9j.js";import{i as W}from"./chunk-ZH5EUE66-20KucpV7.js";import"./iconBase-Jn3b2eGl.js";import"./VisuallyHidden-BROYA5OY.js";import"./chunk-3XT5V4LF-DhDNg8xn.js";import"./chunk-6NL67ZRH-CzMdlq90.js";import"./ApplicationLogo-iYVk5wPa.js";import"./index-CeYjTHG6.js";import"./LiveAnnouncer-CuNtP5Ew.js";import"./useUpdateEffect-Bhnx7-cA.js";import"./chunk-7F3ZLNJ6-BhNHqXbe.js";import"./useField-Mc5qBxRi.js";function Y(p={}){const{id:m,defaultOpen:u,isOpen:i,onClose:n,onOpen:f,onChange:x=()=>{}}=p,o=U(f),r=U(n),[s,d]=M(i,u||!1,x),h=l.useId(),a=m||h,t=i!==void 0,b=l.useCallback(()=>{t||d(!1),r==null||r()},[t,r]),j=l.useCallback(()=>{t||d(!0),o==null||o()},[t,o]),C=l.useCallback(()=>{(s?b:j)()},[s,j,b]);return{isOpen:!!s,onOpen:j,onClose:b,onOpenChange:C,isControlled:t,getButtonProps:(c={})=>({...c,"aria-expanded":s,"aria-controls":a,onClick:S(c.onClick,C)}),getDisclosureProps:(c={})=>({...c,hidden:!s,id:a})}}function he({auth:p}){const{isOpen:m,onOpen:u,onClose:i}=Y(),{data:n,setData:f,post:x}=D({}),[o,r]=l.useState([]);l.useEffect(()=>{(async()=>{try{const t=await y.get("/upload/all");r(t.data)}catch(t){console.error("Error fetching uploads:",t)}})()},[]);const s=async a=>{try{await y.delete(`/uploads/${a}`),r(o.filter(t=>t.id!==a))}catch(t){console.error("Error deleting upload:",t)}},d=a=>{f({...n,[a.target.name]:a.target.value})},h=async a=>{if(a.preventDefault(),!n.media_url){g.fire({icon:"warning",title:"Oops...",text:"Please enter a media URL."});return}try{await x(route("media.upload"),n),g.fire({icon:"success",title:"Success!",text:"Uploaded successfully."}).then(t=>{(t.isConfirmed||t.isDismissed)&&v.Inertia.visit(route("media.create"))}),i()}catch{g.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})}};return e.jsxs(w,{user:p.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Upload"}),children:[e.jsx(P,{title:"Guests"}),e.jsx("div",{className:"py-8",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsx(_,{as:z,onPress:u,color:"primary",endContent:e.jsx(N,{}),children:"Add Media"}),e.jsx(V,{y:5}),e.jsxs(I,{"aria-label":"Media URL TABLE",children:[e.jsxs(R,{children:[e.jsx(k,{children:"MEDIA URL"}),e.jsx(k,{children:""})]}),e.jsx($,{emptyContent:"No uploads found.",children:o.map(a=>e.jsxs(E,{children:[e.jsx(O,{children:a.media_url}),e.jsx(O,{children:e.jsx("div",{className:"relative flex items-center justify-center gap-2 text-lg cursor-pointer active:opacity-50",children:e.jsx("span",{className:"text-primary cursor-pointer active:opacity-50",children:e.jsx(L,{className:"text-danger",onClick:()=>s(a.id)})})})})]},a.id))})]}),e.jsx(A,{isOpen:m,onClose:i,placement:"top-center",isDismissable:!1,hideCloseButton:!0,size:"xl",scrollBehavior:"outside",backdrop:"blur",children:e.jsx(B,{children:e.jsxs("form",{onSubmit:h,children:[e.jsxs(F,{className:"flex flex-col gap-1",children:["Upload Media Url",e.jsxs("p",{className:"text-sm text-gray-500",children:["Instructions: Please upload your video (mp4) or image (jpg, png, webp) to an online storage service like Google Drive or Dropbox, then paste the link here. The URL should look something like this:",e.jsx("br",{}),"https://domain.com/file.mp4 or https://domain.com/file.jpg"]})]}),e.jsx(G,{children:e.jsx("div",{className:"mb-4",children:e.jsx(W,{type:"url",name:"media_url",label:"Media URL",onChange:d,className:"mt-1",placeholder:"Media URL (Image or Video)"})})}),e.jsxs(T,{children:[e.jsx(_,{color:"primary",type:"submit",children:"Upload"}),e.jsx(_,{color:"danger",onClick:()=>v.Inertia.visit(route("media.create")),children:"Cancel"})]})]})})})]})})]})}export{he as default};
