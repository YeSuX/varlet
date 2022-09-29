import{d as E,b as N,Z as g,_ as L,f as o,h as n,N as u,M as S,R as p,j as f,m as $,O as C,P as c,Q as d,a as B,o as M,u as T,q as l,S as i,an as a,F as W}from"./vue-router.esm-bundler.42d3c0c2.js";import{t as w,a as I,m as j}from"./elements.f7cbc1d5.js";import{c as q}from"./components.0c747098.js";import{S as z}from"./index.ae6ac06d.js";import{A as y}from"./AppType.4c910996.js";import{d as H}from"./index.8b4f1b33.js";import{u as O,a as F,_ as Q,b as R,c as Z}from"./index.2dfd012d.js";import{a as G,b as J}from"./utils.76713588.js";import"./shared.f221b787.js";/* empty css               */function K(e){return["linear","circle"].includes(e)}const X={mode:{type:String,default:"linear",validator:K},lineWidth:{type:[Number,String],default:4},color:{type:String},trackColor:{type:String},ripple:{type:Boolean,default:!1},value:{type:[Number,String],default:0},label:{type:Boolean,default:!1},size:{type:[Number,String],default:40},rotate:{type:Number,default:0},track:{type:Boolean,default:!0}},{n:Y,classes:_}=q("progress"),x=E({name:"VarProgress",inheritAttrs:!1,props:X,setup(e){const t=N(()=>{const s=g(e.value),m=s>100?100:s,h=s>100?100:Math.round(s);return{width:`${m}%`,roundValue:`${h}%`}}),v=N(()=>{const{size:s,lineWidth:m,value:h}=e,A=`0 0 ${w(s)} ${w(s)}`,U=g(h)>100?100:Math.round(g(h)),P=(w(s)-w(m))/2,b=2*Math.PI*P,D=`${U/100*b}, ${b}`;return{viewBox:A,radius:P,strokeDasharray:D,perimeter:b,roundValue:`${U}%`}});return{n:Y,classes:_,toSizeUnit:I,multiplySizeUnit:j,linearProps:t,circleProps:v}}});const ee=["viewBox"],ae=["cx","cy","r","stroke-width"],le=["cx","cy","r","stroke-width"];function re(e,t,v,s,m,h){return o(),n("div",{class:u(e.n())},[e.mode==="linear"?(o(),n("div",{key:0,class:u(e.n("linear"))},[S("div",$({class:e.n("linear-block"),style:{height:e.toSizeUnit(e.lineWidth)}},e.$attrs),[e.track?(o(),n("div",{key:0,class:u(e.n("linear-background")),style:p({background:e.trackColor})},null,6)):f("v-if",!0),S("div",{class:u(e.classes(e.n("linear-certain"),[e.ripple,e.n("linear-ripple")])),style:p({background:e.color,width:e.linearProps.width})},null,6)],16),e.label?(o(),n("div",$({key:0,class:e.n("linear-label")},e.$attrs),[C(e.$slots,"default",{},()=>[c(d(e.linearProps.roundValue),1)])],16)):f("v-if",!0)],2)):f("v-if",!0),e.mode==="circle"?(o(),n("div",{key:1,class:u(e.n("circle")),style:p({width:e.toSizeUnit(e.size),height:e.toSizeUnit(e.size)})},[(o(),n("svg",{class:u(e.n("circle-svg")),style:p({transform:`rotate(${e.rotate-90}deg)`}),viewBox:e.circleProps.viewBox},[e.track?(o(),n("circle",{key:0,class:u(e.n("circle-background")),cx:e.multiplySizeUnit(e.size,.5),cy:e.multiplySizeUnit(e.size,.5),r:e.circleProps.radius,fill:"transparent","stroke-width":e.toSizeUnit(e.lineWidth),style:p({strokeDasharray:e.circleProps.perimeter,stroke:e.trackColor})},null,14,ae)):f("v-if",!0),S("circle",{class:u(e.n("circle-certain")),cx:e.multiplySizeUnit(e.size,.5),cy:e.multiplySizeUnit(e.size,.5),r:e.circleProps.radius,fill:"transparent","stroke-width":e.toSizeUnit(e.lineWidth),style:p({strokeDasharray:e.circleProps.strokeDasharray,stroke:e.color})},null,14,le)],14,ee)),e.label?(o(),n("div",$({key:0,class:e.n("circle-label")},e.$attrs),[C(e.$slots,"default",{},()=>[c(d(e.circleProps.roundValue),1)])],16)):f("v-if",!0)],6)):f("v-if",!0)],2)}const r=L(x,[["render",re]]);r.install=function(e){e.component(r.name,r)};const se={circle:"\u73AF\u5F62\u8FDB\u5EA6\u6761",style:"\u81EA\u5B9A\u4E49\u6837\u5F0F",basicUsage:"\u57FA\u672C\u4F7F\u7528",showLabel:"\u663E\u793A\u6807\u7B7E",hideTrack:"\u9690\u85CF\u8F68\u9053"},ie={circle:"Circle Progress",basicUsage:"Basic Usage",style:"Custom Style",showLabel:"Show Label",hideTrack:"Hide Track"},{add:V,use:te,pack:k,packs:we,merge:ze}=O(),oe=e=>{Z(e),te(e)};F("zh-CN",Q);F("en-US",R);V("zh-CN",se);V("en-US",ie);const ne=c("success"),be={setup(e){const t=B(0),v=B(0);return M(()=>{v.value=window.setInterval(()=>{t.value>=100?t.value=0:t.value+=20},1e3)}),G(oe),J(H),T(()=>{window.clearInterval(v.value)}),(s,m)=>(o(),n(W,null,[l(a(y),null,{default:i(()=>[c(d(a(k).basicUsage),1)]),_:1}),l(a(z),{direction:"column",size:["3vh","3vh"]},{default:i(()=>[l(a(r),{value:20,track:!1}),l(a(r),{value:t.value,track:!1},null,8,["value"]),l(a(r),{value:100,track:!1})]),_:1}),l(a(y),null,{default:i(()=>[c(d(a(k).showLabel),1)]),_:1}),l(a(z),{direction:"column",size:["3vh","3vh"]},{default:i(()=>[l(a(r),{value:30,label:""}),l(a(r),{value:t.value,label:""},null,8,["value"]),l(a(r),{value:100,label:""},{default:i(()=>[ne]),_:1})]),_:1}),l(a(y),null,{default:i(()=>[c(d(a(k).style),1)]),_:1}),l(a(z),{direction:"column",size:["3vh","3vh"]},{default:i(()=>[l(a(r),{value:30,"line-width":"8",color:"#ff9f00"}),l(a(r),{value:60,"line-width":"8",color:"#ff9f00","track-color":"#f5cb90"}),l(a(r),{value:80,ripple:"","line-width":"8",color:"#ff9f00","track-color":"#f5cb90"})]),_:1}),l(a(y),null,{default:i(()=>[c(d(a(k).circle),1)]),_:1}),l(a(z),{size:["8vw","8vw"]},{default:i(()=>[l(a(r),{mode:"circle",value:30,"line-width":"5",size:"18vw"}),l(a(r),{mode:"circle",label:"",value:t.value,"line-width":"5",size:"18vw"},null,8,["value"]),l(a(r),{mode:"circle",label:"",value:100,"line-width":"5",size:"18vw"})]),_:1}),l(a(y),null,{default:i(()=>[c(d(a(k).hideTrack),1)]),_:1}),l(a(r),{mode:"circle",value:50,size:"18vw",track:!1})],64))}};export{be as default};
