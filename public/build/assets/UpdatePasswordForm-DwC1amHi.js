import{r as l,W as h,j as s}from"./app-W9rABB7H.js";import{I as n}from"./TextInput-BNhu2UO5.js";import{I as p}from"./InputLabel-DXvv9kKJ.js";import{P as v}from"./PrimaryButton-C5gvcjdj.js";import{i as d}from"./chunk-ZH5EUE66-CeA2AVMT.js";import{q as g}from"./transition-CaTqC2Nn.js";import"./chunk-XHQUSKIE-D1XKxXcu.js";import"./index-CwcQvHrJ.js";import"./useFocusable-CM9SnkFp.js";import"./chunk-CAFRINWI-BTDo8zfp.js";import"./useControlledState-BU-ccswk.js";import"./useField-DwqTcdZv.js";function q({className:u=""}){const i=l.useRef(),c=l.useRef(),{data:e,setData:a,errors:o,put:w,reset:t,processing:f,recentlySuccessful:x}=h({current_password:"",password:"",password_confirmation:""}),j=r=>{r.preventDefault(),w(route("password.update"),{preserveScroll:!0,onSuccess:()=>t(),onError:m=>{m.password&&(t("password","password_confirmation"),i.current.focus()),m.current_password&&(t("current_password"),c.current.focus())}})};return s.jsxs("section",{className:u,children:[s.jsxs("header",{children:[s.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Update Password"}),s.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Ensure your account is using a long, random password to stay secure."})]}),s.jsxs("form",{onSubmit:j,className:"mt-6 space-y-6",children:[s.jsxs("div",{children:[s.jsx(p,{htmlFor:"current_password",value:"Current Password"}),s.jsx(d,{id:"current_password",ref:c,value:e.current_password,onChange:r=>a("current_password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s.jsx(n,{message:o.current_password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(p,{htmlFor:"password",value:"New Password"}),s.jsx(d,{id:"password",ref:i,value:e.password,onChange:r=>a("password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(n,{message:o.password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(p,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(d,{id:"password_confirmation",value:e.password_confirmation,onChange:r=>a("password_confirmation",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(n,{message:o.password_confirmation,className:"mt-2"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(v,{disabled:f,children:"Save"}),s.jsx(g,{show:x,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:s.jsx("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{q as default};
