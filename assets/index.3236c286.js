import{P as r}from"./index.7c703776.js";import{B as n}from"./index.579068bc.js";import{S as E}from"./index.39902596.js";import{S as k}from"./index.1f1f8977.js";import{A as _}from"./AppType.12f592ea.js";import{d as S}from"./index.44d39c3e.js";import{a as g,b as h}from"./utils.0c1f0941.js";import{u as D,a as x,_ as U,b as c,c as $}from"./en-US.ee95b3a9.js";import{_ as N,r as z,aB as O,f as L,h as R,t as u,ag as e,P as l,aD as i,F as V,M as p,N as s,l as v}from"./elevation.b6664af0.js";import"./lock.220e1e94.js";import"./index.907bdd7e.js";import"./zIndex.b5e81158.js";import"./components.1dfa4f07.js";/* empty css               */import"./index.6f8d2b65.js";import"./elements.e9a3cb11.js";import"./index.3a3df279.js";import"./index.388f0ba6.js";var H={popupPosition:"\u5F39\u51FA\u4F4D\u7F6E",centerPopup:"\u5C45\u4E2D\u5F39\u51FA",belowPopup:"\u4E0B\u65B9\u5F39\u51FA",abovePopup:"\u4E0A\u65B9\u5F39\u51FA",leftPopup:"\u5DE6\u4FA7\u5F39\u51FA",rightPopup:"\u53F3\u4FA7\u5F39\u51FA",overlayStyle:"\u906E\u7F69\u5C42\u6837\u5F0F",overlayClass:"\u906E\u7F69\u5C42class",overlayStyles:"\u906E\u7F69\u5C42style",event:"\u6CE8\u518C\u4E8B\u4EF6",text:"\u7D20\u80DA\u52FE\u52D2\u51FA\u9752\u82B1\u7B14\u950B\u6D53\u8F6C\u6DE1, \u74F6\u8EAB\u63CF\u7ED8\u7684\u7261\u4E39\u4E00\u5982\u4F60\u521D\u5986, \u5189\u5189\u6A80\u9999\u900F\u8FC7\u7A97\u5FC3\u4E8B\u6211\u4E86\u7136, \u5BA3\u7EB8\u4E0A\u8D70\u7B14\u81F3\u6B64\u6401\u4E00\u534A\u3002"},I={popupPosition:"Popup Position",centerPopup:"Center Popup",belowPopup:"Below Popup",abovePopup:"Above Popup",leftPopup:"Left Popup",rightPopup:"Right Popup",overlayStyle:"Overlay Style",overlayClass:"Overlay Class",overlayStyles:"Overlay Styles",event:"Event",text:"As he came into the window. It was the sound of a crescendo. He came into her apartment. He left the bloodstains on the carpet."};const{add:A,use:M,pack:a,packs:Ce,merge:be}=D(),T=P=>{$(P),M(P)};x("zh-CN",U);x("en-US",c);A("zh-CN",H);A("en-US",I);const j={class:"block"},q={class:"block"},G={class:"block"},J={class:"block"},K={class:"block"},Q={class:"block"},W={class:"block"},X={class:"block"},Y={setup(P){const B=z({center:!1,top:!1,bottom:!1,left:!1,right:!1,overlayClass:!1,overlayStyle:!1,event:!1}),{center:d,top:f,bottom:y,left:m,right:w,overlayClass:F,overlayStyle:C,event:b}=O(B);return g(T),h(S),(Z,o)=>(L(),R(V,null,[u(e(_),null,{default:l(()=>[p(s(e(a).popupPosition),1)]),_:1}),u(e(E),{direction:"column",size:["3vw","4vw"]},{default:l(()=>[u(e(n),{type:"primary",block:"",onClick:o[0]||(o[0]=t=>d.value=!0)},{default:l(()=>[p(s(e(a).centerPopup),1)]),_:1}),u(e(n),{type:"primary",block:"",onClick:o[1]||(o[1]=t=>y.value=!0)},{default:l(()=>[p(s(e(a).belowPopup),1)]),_:1}),u(e(n),{type:"primary",block:"",onClick:o[2]||(o[2]=t=>f.value=!0)},{default:l(()=>[p(s(e(a).abovePopup),1)]),_:1}),u(e(n),{type:"primary",block:"",onClick:o[3]||(o[3]=t=>m.value=!0)},{default:l(()=>[p(s(e(a).leftPopup),1)]),_:1}),u(e(n),{type:"primary",block:"",onClick:o[4]||(o[4]=t=>w.value=!0)},{default:l(()=>[p(s(e(a).rightPopup),1)]),_:1})]),_:1}),u(e(r),{show:e(d),"onUpdate:show":o[5]||(o[5]=t=>i(d)?d.value=t:null)},{default:l(()=>[v("div",j,s(e(a).text),1)]),_:1},8,["show"]),u(e(r),{position:"bottom",show:e(y),"onUpdate:show":o[6]||(o[6]=t=>i(y)?y.value=t:null)},{default:l(()=>[v("div",q,s(e(a).text),1)]),_:1},8,["show"]),u(e(r),{position:"top",show:e(f),"onUpdate:show":o[7]||(o[7]=t=>i(f)?f.value=t:null)},{default:l(()=>[v("div",G,s(e(a).text),1)]),_:1},8,["show"]),u(e(r),{position:"left",show:e(m),"onUpdate:show":o[8]||(o[8]=t=>i(m)?m.value=t:null)},{default:l(()=>[v("div",J,s(e(a).text),1)]),_:1},8,["show"]),u(e(r),{position:"right",show:e(w),"onUpdate:show":o[9]||(o[9]=t=>i(w)?w.value=t:null)},{default:l(()=>[v("div",K,s(e(a).text),1)]),_:1},8,["show"]),u(e(_),null,{default:l(()=>[p(s(e(a).overlayStyle),1)]),_:1}),u(e(E),{direction:"column",size:["3vw","4vw"]},{default:l(()=>[u(e(n),{type:"primary",block:"",onClick:o[10]||(o[10]=t=>F.value=!0)},{default:l(()=>[p(s(e(a).overlayClass),1)]),_:1}),u(e(n),{type:"primary",block:"",onClick:o[11]||(o[11]=t=>C.value=!0)},{default:l(()=>[p(s(e(a).overlayStyles),1)]),_:1})]),_:1}),u(e(r),{"overlay-class":"custom-overlay",show:e(F),"onUpdate:show":o[12]||(o[12]=t=>i(F)?F.value=t:null)},{default:l(()=>[v("div",Q,s(e(a).text),1)]),_:1},8,["show"]),u(e(r),{"overlay-style":{backgroundColor:"rgba(0, 0, 0, 0.3)"},show:e(C),"onUpdate:show":o[13]||(o[13]=t=>i(C)?C.value=t:null)},{default:l(()=>[v("div",W,s(e(a).text),1)]),_:1},8,["overlay-style","show"]),u(e(_),null,{default:l(()=>[p(s(e(a).event),1)]),_:1}),u(e(n),{type:"primary",block:"",onClick:o[14]||(o[14]=t=>b.value=!0)},{default:l(()=>[p(s(e(a).event),1)]),_:1}),u(e(r),{show:e(b),"onUpdate:show":o[15]||(o[15]=t=>i(b)?b.value=t:null),onOpen:o[16]||(o[16]=()=>e(k).info("open")),onOpened:o[17]||(o[17]=()=>e(k).success("opened")),onClose:o[18]||(o[18]=()=>e(k).warning("close")),onClosed:o[19]||(o[19]=()=>e(k).error("closed"))},{default:l(()=>[v("div",X,s(e(a).text),1)]),_:1},8,["show"])],64))}};var ke=N(Y,[["__scopeId","data-v-70e1829c"]]);export{ke as default};
