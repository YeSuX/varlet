import{d as S,a as N,b as c,Z as f,w as C,V as $,_ as y,f as O,h as P,O as h,N as v,R as w}from"./vue-router.esm-bundler.42d3c0c2.js";import{b as z,d as R,e as j,c as k}from"./components.0c747098.js";import{a as U,b as B}from"./index.5941b3ca.js";import{a as E}from"./elements.f7cbc1d5.js";const L={span:{type:[String,Number],default:24},offset:{type:[String,Number],default:0},onClick:{type:Function},xs:{type:[Object,Number,String]},sm:{type:[Object,Number,String]},md:{type:[Object,Number,String]},lg:{type:[Object,Number,String]},xl:{type:[Object,Number,String]}};function I(){const{parentProvider:e,bindParent:n}=z(U),{index:s}=R(B);return(!e||!n||!s)&&console.warn("col must in row"),{index:s,row:e,bindRow:n}}const{n:i,classes:K}=k("col"),V=S({name:"VarCol",props:L,setup(e){const n=N({left:0,right:0}),s=c(()=>f(e.span)),u=c(()=>f(e.offset)),{row:r,bindRow:d}=I(),l={setPadding(t){n.value=t}},b=(t,o)=>{const a=[];if(o==null)return a;if($(o)){const{offset:m,span:g}=o;Number(g)>=0&&a.push(i(`--span-${t}-${g}`)),m&&a.push(i(`--offset-${t}-${m}`))}else Number(o)>=0&&a.push(i(`--span-${t}-${o}`));return a};return C([()=>e.span,()=>e.offset],()=>{r==null||r.computePadding()}),j(d,l),{n:i,classes:K,padding:n,toNumber:f,toSizeUnit:E,getSize:b,span:s,offset:u}}});function W(e,n,s,u,r,d){return O(),P("div",{class:v(e.classes(e.n(),"var--box",[e.span>=0,e.n(`--span-${e.span}`)],[e.offset,e.n(`--offset-${e.offset}`)],...e.getSize("xs",e.xs),...e.getSize("sm",e.sm),...e.getSize("md",e.md),...e.getSize("lg",e.lg),...e.getSize("xl",e.xl))),style:w({paddingLeft:e.toSizeUnit(e.padding.left),paddingRight:e.toSizeUnit(e.padding.right)}),onClick:n[0]||(n[0]=(...l)=>e.onClick&&e.onClick(...l))},[h(e.$slots,"default")],6)}const p=y(V,[["render",W]]);p.install=function(e){e.component(p.name,p)};export{p as C};
