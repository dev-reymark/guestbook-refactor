import{W as x,r as f,j as e,Y as g,a as j}from"./app-BhZ0p_bS.js";import{G as h}from"./GuestLayout-BoJscIob.js";import{I as o}from"./TextInput-Ntgut1tV.js";import{I as i}from"./InputLabel-CXdM9E5D.js";import{P as b}from"./PrimaryButton-DIhEdZYW.js";import{c as w}from"./chunk-HUKVTWEI-JbG9fkvS.js";import{i as l}from"./chunk-ZH5EUE66-B9_Um8Bt.js";import"./ApplicationLogo-4tUy40ql.js";import"./chunk-3XT5V4LF-C_-giVqc.js";import"./useControlledState-dJamUJjF.js";import"./index-CxnsUFar.js";import"./index-CH-JLVKH.js";import"./useField-CSQ1zrRw.js";import"./chunk-CIZQCQPA-Bs-J7uNN.js";import"./VisuallyHidden-DOgfbmMO.js";function B({status:t,canResetPassword:n}){const{data:r,setData:a,post:c,processing:d,errors:m,reset:u}=x({email:"",password:"",remember:!1});f.useEffect(()=>()=>{u("password")},[]);const p=s=>{s.preventDefault(),c(route("login"))};return e.jsxs(h,{children:[e.jsx(g,{title:"Log in"}),t&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),e.jsxs("form",{onSubmit:p,children:[e.jsxs("div",{children:[e.jsx(i,{htmlFor:"email",value:"Email"}),e.jsx(l,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>a("email",s.target.value)}),e.jsx(o,{message:m.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"password",value:"Password"}),e.jsx(l,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>a("password",s.target.value)}),e.jsx(o,{message:m.password,className:"mt-2"})]}),e.jsx("div",{className:"block mt-4",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(w,{name:"remember",checked:r.remember,onChange:s=>a("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"Remember me"})]})}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[n&&e.jsx(j,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot your password?"}),e.jsx(b,{className:"ms-4",disabled:d,children:"Log in"})]})]})]})}export{B as default};
