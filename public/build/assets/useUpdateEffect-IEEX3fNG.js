import{r as t}from"./app-Bh2i9b_6.js";function o(u,e){const r=t.useRef(!0),f=t.useRef(null);t.useEffect(()=>(r.current=!0,()=>{r.current=!1}),[]),t.useEffect(()=>{r.current?r.current=!1:(!f.current||e.some((s,c)=>!Object.is(s,f[c])))&&u(),f.current=e},e)}export{o as $};