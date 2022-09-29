import{A as r}from"./AppType.4c910996.js";import{B as o}from"./index.050cdf08.js";import{B as C}from"./index.dab83ca2.js";import{C as s}from"./index.2be5c03e.js";import{S as n}from"./index.ae6ac06d.js";import{d as v}from"./index.8b4f1b33.js";import{u as w,a as m,_ as y,b as T,c as D}from"./index.2dfd012d.js";import{a as E,b as x}from"./utils.76713588.js";import{a as i,f as z,h as F,q as a,S as t,an as e,P as u,Q as l}from"./vue-router.esm-bundler.42d3c0c2.js";import"./index.87785518.js";import"./elements.f7cbc1d5.js";import"./shared.f221b787.js";import"./components.0c747098.js";import"./index.d1d03c1f.js";import"./index.712020a1.js";/* empty css               */import"./index.50db04cf.js";const k={themeColorBadge:"\u4E3B\u9898\u8272\u5FBD\u6807",dotBadge:"\u5706\u70B9\u5FBD\u6807",customContentBadge:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u6807\u7B7E",maximum:"\u6700\u5927\u503C",differentPositioningBadges:"\u4E0D\u540C\u5B9A\u4F4D\u5FBD\u6807",upperRight:"\u53F3\u4E0A",lowerRight:"\u53F3\u4E0B",upperLeft:"\u5DE6\u4E0A",lowerLeft:"\u5DE6\u4E0B",whetherToDisplayTheBadge:"\u662F\u5426\u663E\u793A\u5FBD\u6807",clickToChangeTheState:"\u70B9\u51FB\u6539\u53D8\u72B6\u6001",badge:"\u5FBD\u6807",customBadgeColors:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u989C\u8272",customBadgeIcons:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u56FE\u6807"},A={themeColorBadge:"Theme Color Badge",dotBadge:"Dot Badge",customContentBadge:"Custom Content Badge",maximum:"Maximum",differentPositioningBadges:"Different Positioning Badges",upperRight:"The Upper Right",lowerRight:"The Lower Right",upperLeft:"The Upper Left",lowerLeft:"The Lower Left",whetherToDisplayTheBadge:"Whether To Display The Badge",clickToChangeTheState:"Click To Change The State",badge:"Badge",customBadgeColors:"Custom Badge Colors",customBadgeIcons:"Custom Badge Icons"},{add:c,use:L,pack:d,packs:Z,merge:ee}=w(),b=p=>{D(p),L(p)};m("zh-CN",y);m("en-US",T);c("zh-CN",k);c("en-US",A);const S={class:"example"},ae={setup(p){const h=i(88),B=i(188),f=i(99),g=i(!1),_=()=>{g.value=!g.value};return E(b),x(v),(R,N)=>(z(),F("div",S,[a(e(r),null,{default:t(()=>[u(l(e(d).themeColorBadge),1)]),_:1}),a(e(n),{size:["2.666vw","4vw"]},{default:t(()=>[a(e(o)),a(e(o),{type:"primary"}),a(e(o),{type:"info"}),a(e(o),{type:"warning"}),a(e(o),{type:"success"}),a(e(o),{type:"danger"})]),_:1},8,["size"]),a(e(r),null,{default:t(()=>[u(l(e(d).dotBadge),1)]),_:1}),a(e(o),{dot:"",type:"danger"}),a(e(r),null,{default:t(()=>[u(l(e(d).customContentBadge),1)]),_:1}),a(e(n),{size:["2.666vw","4vw"]},{default:t(()=>[a(e(o),{type:"danger",value:"badge"}),a(e(o),{type:"danger",value:"hot"}),a(e(o),{type:"danger",value:"66"})]),_:1},8,["size"]),a(e(r),null,{default:t(()=>[u(l(e(d).maximum),1)]),_:1}),a(e(n),{size:["2.666vw","4vw"]},{default:t(()=>[a(e(o),{type:"danger",value:h.value,"max-value":f.value},null,8,["value","max-value"]),a(e(o),{type:"danger",value:B.value,"max-value":f.value},null,8,["value","max-value"])]),_:1},8,["size"]),a(e(r),null,{default:t(()=>[u(l(e(d).differentPositioningBadges),1)]),_:1}),a(e(n),{size:["2.666vw","6vw"]},{default:t(()=>[a(e(o),{type:"danger",position:"right-top"},{default:t(()=>[a(e(s),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(d).upperRight),1)]),_:1})]),_:1}),a(e(o),{type:"danger",position:"right-bottom"},{default:t(()=>[a(e(s),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(d).lowerRight),1)]),_:1})]),_:1}),a(e(o),{type:"danger",position:"left-top"},{default:t(()=>[a(e(s),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(d).upperLeft),1)]),_:1})]),_:1}),a(e(o),{type:"danger",position:"left-bottom"},{default:t(()=>[a(e(s),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(d).lowerLeft),1)]),_:1})]),_:1})]),_:1},8,["size"]),a(e(r),null,{default:t(()=>[u(l(e(d).whetherToDisplayTheBadge),1)]),_:1}),a(e(n),{size:["2.666vw","6vw"]},{default:t(()=>[a(e(o),{type:"danger",position:"right-top",hidden:g.value},{default:t(()=>[a(e(s),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(d).badge),1)]),_:1})]),_:1},8,["hidden"]),a(e(C),{type:"success",onClick:_},{default:t(()=>[u(l(e(d).clickToChangeTheState),1)]),_:1})]),_:1},8,["size"]),a(e(r),null,{default:t(()=>[u(l(e(d).customBadgeColors),1)]),_:1}),a(e(o),{color:"#6200ea",position:"right-top"},{default:t(()=>[a(e(s),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(d).badge),1)]),_:1})]),_:1}),a(e(r),null,{default:t(()=>[u(l(e(d).customBadgeIcons),1)]),_:1}),a(e(o),{color:"#6200ea",position:"right-top",icon:"notebook"},{default:t(()=>[a(e(s),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(d).badge),1)]),_:1})]),_:1})]))}};export{ae as default};
