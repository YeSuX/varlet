import{D as m}from"./index.0a8d4162.js";import{B as i}from"./index.dab83ca2.js";import{I as S}from"./index.87785518.js";import{S as r}from"./index.cfd02f99.js";import{C as g}from"./index.173a40d3.js";import{A as w}from"./AppType.4c910996.js";import{d as x}from"./index.8b4f1b33.js";import{u as N,a as h,_ as T,b as I,c as $}from"./index.2dfd012d.js";import{a as z,b as M}from"./utils.76713588.js";import{_ as P,r as H,aH as V,f as L,h as R,q as t,S as a,an as e,aI as y,F as q,P as l,Q as n}from"./vue-router.esm-bundler.42d3c0c2.js";import"./index.e10f6c16.js";import"./lock.4badc63d.js";import"./index.712020a1.js";import"./zIndex.ca8ef2b3.js";import"./components.0c747098.js";/* empty css               */import"./shared.f221b787.js";import"./index.d1d03c1f.js";import"./elements.f7cbc1d5.js";import"./index.50db04cf.js";const Q={functionCall:"\u51FD\u6570\u8C03\u7528",basicUsage:"\u57FA\u672C\u4F7F\u7528",modifyTitle:"\u4FEE\u6539\u6807\u9898",hideButton:"\u9690\u85CF\u6309\u94AE",handleUserBehavior:"\u5904\u7406\u7528\u6237\u884C\u4E3A",asyncClose:"\u5F02\u6B65\u5173\u95ED",componentCall:"\u7EC4\u4EF6\u8C03\u7528",title:"\u5170\u4EAD\u5E8F",message:"\u5170\u4EAD\u4E34\u5E16 \u884C\u4E66\u5982\u884C\u4E91\u6D41\u6C34",customSlots:"\u81EA\u5B9A\u4E49\u63D2\u69FD",asyncCloseProgress:"\u6B63\u5728\u5F02\u6B65\u5173\u95ED"},W={functionCall:"Function Call",basicUsage:"Basic Usage",modifyTitle:"Modify Title",hideButton:"Hide Button",handleUserBehavior:"Handle User Behavior",asyncClose:"Asynchronous closing",componentCall:"Component Call",title:"Beat It",message:"Don't Wanna See No Blood, Don't Be A Macho Man",customSlots:"Custom Slots",asyncCloseProgress:"Asynchronous shutdown in progress"},{add:_,use:j,pack:o,packs:Ce,merge:ge}=N(),G=d=>{$(d),j(d)};h("zh-CN",T);h("en-US",I);_("zh-CN",Q);_("en-US",W);const J={setup(d){const C=m.Component,E=H({show:!1,show1:!1,show2:!1}),{show:c,show1:p,show2:f}=V(E),B={confirm:()=>r.success("confirm"),cancel:()=>r.error("cancel"),close:()=>r.info("close")},U=()=>m({message:o.value.message}),b=async()=>B[await m(o.value.message)](),D=()=>{m({title:o.value.title,message:o.value.message})},F=()=>{m({message:o.value.message,confirmButton:!1,cancelButton:!1})},v=(k,s)=>{r.loading(o.value.asyncCloseProgress),setTimeout(()=>{B[k](),s()},1e3)},A=()=>{m({message:o.value.message,onBeforeClose:v})};return z(G),M(x),(k,s)=>(L(),R(q,null,[t(e(w),null,{default:a(()=>[l(n(e(o).functionCall),1)]),_:1}),t(e(i),{type:"primary",block:"",onClick:U},{default:a(()=>[l(n(e(o).basicUsage),1)]),_:1}),t(e(i),{type:"primary",block:"",onClick:D},{default:a(()=>[l(n(e(o).modifyTitle),1)]),_:1}),t(e(i),{type:"primary",block:"",onClick:F},{default:a(()=>[l(n(e(o).hideButton),1)]),_:1}),t(e(i),{type:"primary",block:"",onClick:b},{default:a(()=>[l(n(e(o).handleUserBehavior),1)]),_:1}),t(e(i),{type:"primary",block:"",onClick:A},{default:a(()=>[l(n(e(o).asyncClose),1)]),_:1}),t(e(w),null,{default:a(()=>[l(n(e(o).componentCall),1)]),_:1}),t(e(i),{type:"warning",block:"",onClick:s[0]||(s[0]=u=>c.value=!0)},{default:a(()=>[l(n(e(o).basicUsage),1)]),_:1}),t(e(C),{show:e(c),"onUpdate:show":s[1]||(s[1]=u=>y(c)?c.value=u:null),title:e(o).title,message:e(o).message,onConfirm:s[2]||(s[2]=()=>e(r).success("confirm")),onCancel:s[3]||(s[3]=()=>e(r).error("cancel")),onClosed:s[4]||(s[4]=()=>e(r).info("closed"))},null,8,["show","title","message"]),t(e(i),{type:"warning",block:"",onClick:s[5]||(s[5]=u=>p.value=!0)},{default:a(()=>[l(n(e(o).asyncClose),1)]),_:1}),t(e(C),{show:e(p),"onUpdate:show":s[6]||(s[6]=u=>y(p)?p.value=u:null),title:e(o).title,message:e(o).message,onBeforeClose:v},null,8,["show","title","message"]),t(e(i),{type:"warning",block:"",onClick:s[7]||(s[7]=u=>f.value=!0)},{default:a(()=>[l(n(e(o).customSlots),1)]),_:1}),t(e(C),{show:e(f),"onUpdate:show":s[8]||(s[8]=u=>y(f)?f.value=u:null)},{title:a(()=>[t(e(S),{name:"information",color:"#2979ff"})]),default:a(()=>[t(e(g),null,{default:a(()=>[l(n(e(o).message),1)]),_:1}),t(e(g),null,{default:a(()=>[l(n(e(o).message),1)]),_:1}),t(e(g),null,{default:a(()=>[l(n(e(o).message),1)]),_:1})]),_:1},8,["show"])],64))}},ye=P(J,[["__scopeId","data-v-e5a28a85"]]);export{ye as default};
