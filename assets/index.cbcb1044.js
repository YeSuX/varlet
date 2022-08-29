import{A as d}from"./AppType.12f592ea.js";import{B as o}from"./index.4eada2fc.js";import{B as v}from"./index.579068bc.js";import{C as s}from"./index.4b42bb6e.js";import{S as i}from"./index.39902596.js";import{d as C}from"./index.44d39c3e.js";import{u as w,a as m,_ as y,b as T,c as D}from"./en-US.ee95b3a9.js";import{a as E,b as x}from"./utils.0c1f0941.js";import{a as n,f as z,h as F,t as a,ag as e,P as t,M as u,N as l}from"./elevation.b6664af0.js";import"./index.388f0ba6.js";import"./elements.e9a3cb11.js";import"./components.1dfa4f07.js";import"./index.6f8d2b65.js";import"./index.907bdd7e.js";/* empty css               */import"./index.3a3df279.js";var k={themeColorBadge:"\u4E3B\u9898\u8272\u5FBD\u6807",dotBadge:"\u5706\u70B9\u5FBD\u6807",customContentBadge:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u6807\u7B7E",maximum:"\u6700\u5927\u503C",differentPositioningBadges:"\u4E0D\u540C\u5B9A\u4F4D\u5FBD\u6807",upperRight:"\u53F3\u4E0A",lowerRight:"\u53F3\u4E0B",upperLeft:"\u5DE6\u4E0A",lowerLeft:"\u5DE6\u4E0B",whetherToDisplayTheBadge:"\u662F\u5426\u663E\u793A\u5FBD\u6807",clickToChangeTheState:"\u70B9\u51FB\u6539\u53D8\u72B6\u6001",badge:"\u5FBD\u6807",customBadgeColors:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u989C\u8272",customBadgeIcons:"\u81EA\u5B9A\u4E49\u5FBD\u6807\u56FE\u6807"},A={themeColorBadge:"Theme Color Badge",dotBadge:"Dot Badge",customContentBadge:"Custom Content Badge",maximum:"Maximum",differentPositioningBadges:"Different Positioning Badges",upperRight:"The Upper Right",lowerRight:"The Lower Right",upperLeft:"The Upper Left",lowerLeft:"The Lower Left",whetherToDisplayTheBadge:"Whether To Display The Badge",clickToChangeTheState:"Click To Change The State",badge:"Badge",customBadgeColors:"Custom Badge Colors",customBadgeIcons:"Custom Badge Icons"};const{add:c,use:L,pack:r,packs:Y,merge:Z}=w(),b=p=>{D(p),L(p)};m("zh-CN",y);m("en-US",T);c("zh-CN",k);c("en-US",A);const S={class:"example"},ee={setup(p){const h=n(88),B=n(188),f=n(99),g=n(!1),_=()=>{g.value=!g.value};return E(b),x(C),(N,R)=>(z(),F("div",S,[a(e(d),null,{default:t(()=>[u(l(e(r).themeColorBadge),1)]),_:1}),a(e(i),{size:["2.666vw","4vw"]},{default:t(()=>[a(e(o)),a(e(o),{type:"primary"}),a(e(o),{type:"info"}),a(e(o),{type:"warning"}),a(e(o),{type:"success"}),a(e(o),{type:"danger"})]),_:1},8,["size"]),a(e(d),null,{default:t(()=>[u(l(e(r).dotBadge),1)]),_:1}),a(e(o),{dot:"",type:"danger"}),a(e(d),null,{default:t(()=>[u(l(e(r).customContentBadge),1)]),_:1}),a(e(i),{size:["2.666vw","4vw"]},{default:t(()=>[a(e(o),{type:"danger",value:"badge"}),a(e(o),{type:"danger",value:"hot"}),a(e(o),{type:"danger",value:"66"})]),_:1},8,["size"]),a(e(d),null,{default:t(()=>[u(l(e(r).maximum),1)]),_:1}),a(e(i),{size:["2.666vw","4vw"]},{default:t(()=>[a(e(o),{type:"danger",value:h.value,"max-value":f.value},null,8,["value","max-value"]),a(e(o),{type:"danger",value:B.value,"max-value":f.value},null,8,["value","max-value"])]),_:1},8,["size"]),a(e(d),null,{default:t(()=>[u(l(e(r).differentPositioningBadges),1)]),_:1}),a(e(i),{size:["2.666vw","6vw"]},{default:t(()=>[a(e(o),{type:"danger",position:"right-top"},{default:t(()=>[a(e(s),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(r).upperRight),1)]),_:1})]),_:1}),a(e(o),{type:"danger",position:"right-bottom"},{default:t(()=>[a(e(s),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(r).lowerRight),1)]),_:1})]),_:1}),a(e(o),{type:"danger",position:"left-top"},{default:t(()=>[a(e(s),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(r).upperLeft),1)]),_:1})]),_:1}),a(e(o),{type:"danger",position:"left-bottom"},{default:t(()=>[a(e(s),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(r).lowerLeft),1)]),_:1})]),_:1})]),_:1},8,["size"]),a(e(d),null,{default:t(()=>[u(l(e(r).whetherToDisplayTheBadge),1)]),_:1}),a(e(i),{size:["2.666vw","6vw"]},{default:t(()=>[a(e(o),{type:"danger",position:"right-top",hidden:g.value},{default:t(()=>[a(e(s),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(r).badge),1)]),_:1})]),_:1},8,["hidden"]),a(e(v),{type:"success",onClick:_},{default:t(()=>[u(l(e(r).clickToChangeTheState),1)]),_:1})]),_:1},8,["size"]),a(e(d),null,{default:t(()=>[u(l(e(r).customBadgeColors),1)]),_:1}),a(e(o),{color:"#6200ea",position:"right-top"},{default:t(()=>[a(e(s),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(r).badge),1)]),_:1})]),_:1}),a(e(d),null,{default:t(()=>[u(l(e(r).customBadgeIcons),1)]),_:1}),a(e(o),{color:"#6200ea",position:"right-top",icon:"notebook"},{default:t(()=>[a(e(s),{plain:"",round:!1,color:"#009688"},{default:t(()=>[u(l(e(r).badge),1)]),_:1})]),_:1})]))}};export{ee as default};
