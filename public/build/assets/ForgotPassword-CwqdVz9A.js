import{W as n,j as e,Y as d}from"./app-DD9rhTtv.js";import{G as u}from"./GuestLayout-9l6h4bEs.js";import{I as p}from"./TextInput-DFfVQWUb.js";import{P as c}from"./PrimaryButton-gLDKpSGi.js";import{i as x}from"./chunk-ZH5EUE66-Z8mautop.js";import"./ApplicationLogo-D0DqgW2E.js";import"./chunk-XHQUSKIE-Wp14T0fw.js";import"./index-Sn5wN2z7.js";import"./useControlledState-BmFBuDc0.js";import"./useField-DGG8Pg6M.js";function k({status:t}){const{data:a,setData:o,post:r,processing:m,errors:i}=n({email:""}),l=s=>{s.preventDefault(),r(route("password.email"))};return e.jsxs(u,{children:[e.jsx(d,{title:"Forgot Password"}),e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),t&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),e.jsxs("form",{onSubmit:l,children:[e.jsx(x,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",isFocused:!0,onChange:s=>o("email",s.target.value)}),e.jsx(p,{message:i.email,className:"mt-2"}),e.jsx("div",{className:"flex items-center justify-end mt-4",children:e.jsx(c,{className:"ms-4",disabled:m,children:"Email Password Reset Link"})})]})]})}export{k as default};