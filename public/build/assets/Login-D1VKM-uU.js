import{W as x,r as f,j as e,Y as g,a as j}from"./app-CO5wpSfZ.js";import{G as h}from"./GuestLayout-BcQMXTTn.js";import{I as o}from"./TextInput-DNGDKiI7.js";import{I as i}from"./InputLabel-mRQWhtF0.js";import{P as b}from"./PrimaryButton-D9LyCYFF.js";import{c as w}from"./chunk-HUKVTWEI-BP7zCPSB.js";import{i as l}from"./chunk-ZH5EUE66-BgX1dPiC.js";import"./ApplicationLogo-hkD2JY8f.js";import"./chunk-3XT5V4LF-Oh88uyHI.js";import"./useControlledState-B3MVYGPx.js";import"./chunk-XHQUSKIE-ZgI_Dvk9.js";import"./index-Dqf8YHrp.js";import"./index-BGQmdK6y.js";import"./useField-CK-2wfN1.js";import"./chunk-CIZQCQPA-Dobh4WMc.js";import"./VisuallyHidden-DX2fErcg.js";function S({status:t,canResetPassword:n}){const{data:r,setData:a,post:c,processing:d,errors:m,reset:p}=x({email:"",password:"",remember:!1});f.useEffect(()=>()=>{p("password")},[]);const u=s=>{s.preventDefault(),c(route("login"))};return e.jsxs(h,{children:[e.jsx(g,{title:"Log in"}),t&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),e.jsxs("form",{onSubmit:u,children:[e.jsxs("div",{children:[e.jsx(i,{htmlFor:"email",value:"Email"}),e.jsx(l,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>a("email",s.target.value)}),e.jsx(o,{message:m.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"password",value:"Password"}),e.jsx(l,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>a("password",s.target.value)}),e.jsx(o,{message:m.password,className:"mt-2"})]}),e.jsx("div",{className:"block mt-4",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(w,{name:"remember",checked:r.remember,onChange:s=>a("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"Remember me"})]})}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[n&&e.jsx(j,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot your password?"}),e.jsx(b,{className:"ms-4",disabled:d,children:"Log in"})]})]})]})}export{S as default};