import{A as T}from"./AppType.4c910996.js";import{B as be}from"./index.dab83ca2.js";import{u as me,a as ve,c as R,e as A,b as de,d as fe}from"./components.0c747098.js";import{d as J,a as d,b as F,w as G,o as ge,al as pe,X as Ce,_ as W,p as z,f as k,h as U,O as M,i as D,S as u,m as Z,j as $,N as P,R as x,ai as he,D as Ne,M as Be,F as ee,P as y,Q as I,q as l,an as e}from"./vue-router.esm-bundler.42d3c0c2.js";import{R as ye}from"./index.d1d03c1f.js";import{B as Ie}from"./index.050cdf08.js";import{I as ae}from"./index.87785518.js";import{S as j}from"./index.cfd02f99.js";import{d as Ae}from"./index.8b4f1b33.js";import{u as ke,a as le,_ as Ee,b as Te,c as _e}from"./index.2dfd012d.js";import{a as Se,b as Oe}from"./utils.76713588.js";import"./index.50db04cf.js";import"./elements.f7cbc1d5.js";import"./shared.f221b787.js";import"./index.712020a1.js";/* empty css               */import"./zIndex.ca8ef2b3.js";import"./lock.4badc63d.js";const Fe={active:{type:[Number,String],default:0},fixed:{type:Boolean,default:!1},border:{type:Boolean,default:!1},safeArea:{type:Boolean,default:!1},zIndex:{type:[Number,String],default:1},activeColor:{type:String},inactiveColor:{type:String},onChange:{type:Function},"onUpdate:active":{type:Function},onBeforeChange:{type:Function},onFabClick:{type:Function},fabProps:{type:Object}},te=Symbol("BOTTOM_NAVIGATION_BIND_BOTTOM_NAVIGATION_ITEM_KEY"),ne=Symbol("BOTTOM_NAVIGATION_COUNT_BOTTOM_NAVIGATION_ITEM_KEY");function $e(){const{childProviders:a,bindChildren:c}=ve(te),{length:r}=me(ne);return{length:r,bottomNavigationItems:a,bindBottomNavigationItem:c}}const{n:Pe,classes:Ue}=R("bottom-navigation"),{n:L}=R("bottom-navigation-item"),q=L("--right-half-space"),Q=L("--left-half-space"),X=L("--right-space"),Me={type:"primary"},De=J({name:"VarBottomNavigation",components:{VarButton:be},props:Fe,setup(a,{slots:c}){const r=d(null),m=F(()=>a.active),f=F(()=>a.activeColor),h=F(()=>a.inactiveColor),v=d({}),{length:b,bottomNavigationItems:N,bindBottomNavigationItem:g}=$e(),_=()=>{b.value===0||E()||B()||o()},E=()=>N.find(({name:s})=>m.value===s.value),B=()=>N.find(({index:s})=>m.value===s.value),o=()=>{!Ce(m.value)||(m.value<0?A(a["onUpdate:active"],0):m.value>b.value-1&&A(a["onUpdate:active"],b.value-1))},i=s=>{a.onBeforeChange?ie(s):H(s)},ie=s=>{Promise.resolve(A(a.onBeforeChange,s)).then(p=>p&&H(s))},H=s=>{A(a["onUpdate:active"],s),A(a.onChange,s)},se=()=>{Y().forEach(p=>{p.classList.remove(q,Q,X)})},K=s=>{const p=Y(),S=p.length,O=s%2===0;p.forEach((V,w)=>{ce(O,V,w,S)})},ce=(s,p,S,O)=>{const V=S===O-1;if(!s&&V){p.classList.add(X);return}const w=S===O/2-1,ue=S===O/2;w?p.classList.add(q):ue&&p.classList.add(Q)},Y=()=>Array.from(r.value.querySelectorAll(`.${L()}`)),re=()=>{A(a.onFabClick)};return g({active:m,activeColor:f,inactiveColor:h,onToggle:i}),G(()=>b.value,_),G(()=>a.fabProps,s=>{v.value={...Me,...s}},{immediate:!0,deep:!0}),ge(()=>{!c.fab||K(b.value)}),pe(()=>{se(),c.fab&&K(b.value)}),{n:Pe,classes:Ue,length:b,bottomNavigationDom:r,handleFabClick:re,fabProps:v}}});function Le(a,c,r,m,f,h){const v=z("var-button");return k(),U("div",{class:P(a.classes(a.n(),[a.fixed,a.n("--fixed")],[a.border,a.n("--border")],[a.safeArea,a.n("--safe-area")])),ref:"bottomNavigationDom",style:x(`z-index:${a.zIndex}`)},[M(a.$slots,"default"),a.$slots.fab?(k(),D(v,Z({key:0,class:a.classes(a.n("fab"),[a.length%2,a.n("--fab-right"),a.n("--fab-center")]),"var-bottom-navigation__fab":"",onClick:a.handleFabClick},a.fabProps,{round:""}),{default:u(()=>[M(a.$slots,"fab")]),_:3},16,["class","onClick"])):$("v-if",!0)],6)}const C=W(De,[["render",Le]]);C.install=function(a){a.component(C.name,C)};const Ve={name:{type:String},icon:{type:String},label:{type:String},namespace:{type:String,default:"var-icon"},badge:{type:[Boolean,Object],default:!1},onClick:{type:Function}};function we(){const{parentProvider:a,bindParent:c}=de(te),{index:r}=fe(ne);if(!a||!c||!r)throw Error("<var-bottom-navigation-item/> must in <var-bottom-navigation/>");return{index:r,bottomNavigation:a,bindBottomNavigation:c}}const{n:Ge,classes:ze}=R("bottom-navigation-item"),Re={type:"danger",dot:!0},He=J({name:"VarBottomNavigationItem",components:{VarBadge:Ie,VarIcon:ae},directives:{Ripple:ye},props:Ve,setup(a){const c=F(()=>a.name),r=F(()=>a.badge),m=d({}),{index:f,bottomNavigation:h,bindBottomNavigation:v}=we(),{active:b,activeColor:N,inactiveColor:g}=h,_={name:c,index:f},E=()=>b.value===c.value||b.value===f.value?N.value:g.value,B=()=>{var i;const o=(i=c.value)!=null?i:f.value;A(a.onClick,o),A(h.onToggle,o)};return v(_),G(()=>r.value,o=>{m.value=o===!0?Re:r.value},{immediate:!0}),{n:Ge,classes:ze,index:f,active:b,badge:r,badgeProps:m,computeColorStyle:E,handleClick:B}}});function Ke(a,c,r,m,f,h){const v=z("var-icon"),b=z("var-badge"),N=he("ripple");return Ne((k(),U("button",{class:P(a.classes(a.n(),[a.active===a.index||a.active===a.name,a.n("--active")])),style:x({color:a.computeColorStyle()}),onClick:c[0]||(c[0]=(...g)=>a.handleClick&&a.handleClick(...g))},[a.icon&&!a.$slots.icon?(k(),D(v,{key:0,name:a.icon,namespace:a.namespace,class:P(a.n("icon")),"var-bottom-navigation-item-cover":""},null,8,["name","namespace","class"])):$("v-if",!0),M(a.$slots,"icon",{active:a.active===a.index||a.active===a.name}),a.badge?(k(),D(b,Z({key:1},a.badgeProps,{class:a.n("badge"),"var-bottom-navigation-item-cover":""}),null,16,["class"])):$("v-if",!0),Be("span",{class:P(a.n("label"))},[a.$slots.default?$("v-if",!0):(k(),U(ee,{key:0},[y(I(a.label),1)],2112)),M(a.$slots,"default")],2)],6)),[[N]])}const n=W(He,[["render",Ke]]);n.install=function(a){a.component(n.name,n)};const Ye={basicUsage:"\u57FA\u672C\u4F7F\u7528",matchByName:"\u901A\u8FC7\u540D\u79F0\u5339\u914D",showBadge:"\u5FBD\u6807\u63D0\u793A",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",changeEvent:"\u76D1\u542C\u5207\u6362\u4E8B\u4EF6",clickEvent:"\u76D1\u542C\u70B9\u51FB\u4E8B\u4EF6",fab:"\u60AC\u6D6E\u6309\u94AE",label:"\u6807\u7B7E"},je={basicUsage:"Basic Usage",matchByName:"Match by name",showBadge:"Show Badge",customColor:"Custom Color",changeEvent:"Change Event",clickEvent:"Click Event",fab:"Fab",label:"label"},{add:oe,use:qe,pack:t,packs:da,merge:fa}=ke(),Qe=a=>{_e(a),qe(a)};le("zh-CN",Ee);le("en-US",Te);oe("zh-CN",Ye);oe("en-US",je);const ga={setup(a){const c=d(0),r=d("home"),m=d(0),f={type:"primary",value:"66"},h=d(0),v=d(0);function b(B){j.info(`changed to ${B}`)}const N=d(0);function g(B){j.success(`clicked ${B}`)}const _=d(0),E=d(!0);return Se(Qe),Oe(Ae),(B,o)=>(k(),U(ee,null,[l(e(T),null,{default:u(()=>[y(I(e(t).basicUsage),1)]),_:1}),l(e(C),{active:c.value,"onUpdate:active":o[0]||(o[0]=i=>c.value=i)},{default:u(()=>[l(e(n),{label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"magnify"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"heart"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(T),null,{default:u(()=>[y(I(e(t).matchByName),1)]),_:1}),l(e(C),{active:r.value,"onUpdate:active":o[1]||(o[1]=i=>r.value=i)},{default:u(()=>[l(e(n),{name:"home",label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{name:"search",label:e(t).label,icon:"magnify"},null,8,["label"]),l(e(n),{name:"heart",label:e(t).label,icon:"heart"},null,8,["label"]),l(e(n),{name:"user",label:e(t).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(T),null,{default:u(()=>[y(I(e(t).showBadge),1)]),_:1}),l(e(C),{active:m.value,"onUpdate:active":o[2]||(o[2]=i=>m.value=i)},{default:u(()=>[l(e(n),{label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"magnify",badge:""},null,8,["label"]),l(e(n),{label:e(t).label,icon:"heart",badge:f},null,8,["label"]),l(e(n),{label:e(t).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(T),null,{default:u(()=>[y(I(e(t).customColor),1)]),_:1}),l(e(C),{"active-color":"#ba68c8",active:h.value,"onUpdate:active":o[3]||(o[3]=i=>h.value=i)},{default:u(()=>[l(e(n),{label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"magnify"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"heart"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(T),null,{default:u(()=>[y(I(e(t).changeEvent),1)]),_:1}),l(e(C),{active:v.value,"onUpdate:active":o[4]||(o[4]=i=>v.value=i),onChange:b},{default:u(()=>[l(e(n),{label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"magnify"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"heart"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(T),null,{default:u(()=>[y(I(e(t).clickEvent),1)]),_:1}),l(e(C),{active:N.value,"onUpdate:active":o[5]||(o[5]=i=>N.value=i)},{default:u(()=>[l(e(n),{onClick:g,label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{onClick:g,label:e(t).label,icon:"magnify"},null,8,["label"]),l(e(n),{onClick:g,label:e(t).label,icon:"heart"},null,8,["label"]),l(e(n),{onClick:g,label:e(t).label,icon:"account-circle"},null,8,["label"])]),_:1},8,["active"]),l(e(T),null,{default:u(()=>[y(I(e(t).fab),1)]),_:1}),l(e(C),{active:_.value,"onUpdate:active":o[6]||(o[6]=i=>_.value=i),onFabClick:o[7]||(o[7]=i=>E.value=!E.value),style:{"margin-top":"10px"}},{fab:u(()=>[l(e(ae),{name:"heart"})]),default:u(()=>[l(e(n),{label:e(t).label,icon:"home"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"magnify"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"heart"},null,8,["label"]),l(e(n),{label:e(t).label,icon:"bell"},null,8,["label"]),E.value?$("v-if",!0):(k(),D(e(n),{key:0,label:e(t).label,icon:"account-circle"},null,8,["label"]))]),_:1},8,["active"])],64))}};export{ga as default};
