import{I as L}from"./index.87785518.js";import{g as M,e as A}from"./elements.f7cbc1d5.js";import{d as F,a as l,b as p,w as U,o as V,Z as N,_ as R,p as z,f as g,h as k,M as H,q as Y,N as T,R as q,O as Q,e as X,i as w,S as I,an as b,ak as Z,P as j,Q as G,F as J}from"./vue-router.esm-bundler.42d3c0c2.js";import{c as K}from"./components.0c747098.js";import{C as W}from"./index.173a40d3.js";import{d as x}from"./index.8b4f1b33.js";import{b as ee}from"./utils.76713588.js";import"./shared.f221b787.js";const ae={modelValue:{type:Boolean},disabled:{type:Boolean,default:!1},animationDuration:{type:[Number,String],default:300},successDuration:{type:[Number,String],default:2e3},bgColor:{type:String},successBgColor:{type:String},color:{type:String},successColor:{type:String},onRefresh:{type:Function},"onUpdate:modelValue":{type:Function}},{n:oe,classes:te}=K("pull-refresh"),f=100,h=-50,D=150,ne=F({name:"VarPullRefresh",components:{VarIcon:L},props:ae,setup(e){let o,m;const u=l(null),c=l(0),n=l(h),s=l("arrow-down"),a=l("default"),r=l(!1),i=l(!0),d=p(()=>a.value!=="loading"&&a.value!=="success"&&!e.disabled),E=p(()=>({transform:`translate3d(0px, ${n.value}px, 0px) translate(-50%, 0)`,transition:r.value?`transform ${e.animationDuration}ms`:void 0,background:S.value?e.successBgColor:e.bgColor,color:S.value?e.successColor:e.color})),S=p(()=>a.value==="success"),_=()=>new Promise(t=>{window.setTimeout(()=>{i.value=!0,t()},D)}),B=t=>{!d.value||(a.value="pulling",c.value=t.touches[0].clientY)},O=t=>{const v=A(o);if(v>0||!d.value)return;v===0&&n.value>h&&t.cancelable&&t.preventDefault();const C=(t.touches[0].clientY-c.value)/2+h;n.value=C>=f?f:C,n.value>=f*.2?(i.value=!1,s.value="refresh",m=_()):s.value="arrow-down"},P=async()=>{var t,v;!d.value||(r.value=!0,n.value>=f*.2?(await m,a.value="loading",n.value=f*.3,(t=e["onUpdate:modelValue"])==null||t.call(e,!0),(v=e.onRefresh)==null||v.call(e)):(a.value="loosing",s.value="arrow-down",n.value=h,setTimeout(()=>{r.value=!1},N(e.animationDuration))))},$=()=>{setTimeout(()=>{a.value="default",s.value="arrow-down",r.value=!1},N(e.animationDuration))};return U(()=>e.modelValue,t=>{t===!1&&(r.value=!0,a.value="success",s.value="checkbox-marked-circle",setTimeout(()=>{n.value=h,$()},N(e.successDuration)))}),V(()=>{o=M(u.value)}),{n:oe,classes:te,iconHasChanged:i,ICON_TRANSITION:D,refreshStatus:a,freshNode:u,touchStart:B,touchMove:O,touchEnd:P,iconName:s,controlStyle:E,isSuccess:S}}});function se(e,o,m,u,c,n){const s=z("var-icon");return g(),k("div",{ref:"freshNode",class:T(e.n()),onTouchstart:o[0]||(o[0]=(...a)=>e.touchStart&&e.touchStart(...a)),onTouchmove:o[1]||(o[1]=(...a)=>e.touchMove&&e.touchMove(...a)),onTouchend:o[2]||(o[2]=(...a)=>e.touchEnd&&e.touchEnd(...a)),onTouchcancel:o[3]||(o[3]=(...a)=>e.touchEnd&&e.touchEnd(...a))},[H("div",{class:T(e.classes(e.n("control"),"var-elevation--2",[e.isSuccess,e.n("control-success")])),style:q(e.controlStyle)},[Y(s,{name:e.iconName,transition:e.ICON_TRANSITION,class:T(e.classes(e.n("icon"),[e.refreshStatus==="loading"&&e.iconHasChanged,e.n("animation")])),"var-pull-refresh-cover":""},null,8,["name","transition","class"])],6),Q(e.$slots,"default")],34)}const y=R(ne,[["render",se]]);y.install=function(e){e.component(y.name,y)};const le={setup(e){const o=Array(10).fill("List Item"),m=Array(10).fill("This is new List Item"),u=l(!1),c=l(o),n=()=>{setTimeout(()=>{c.value=c.value[0]==="List Item"?m:o,u.value=!1},2e3)},s=a=>{a.preventDefault()};return V(()=>{document.body.addEventListener("touchmove",s,{passive:!1})}),X(()=>{document.body.removeEventListener("touchmove",s)}),ee(x),(a,r)=>(g(),w(b(y),{onRefresh:n,modelValue:u.value,"onUpdate:modelValue":r[0]||(r[0]=i=>u.value=i),"success-duration":"2000"},{default:I(()=>[(g(!0),k(J,null,Z(c.value,(i,d)=>(g(),w(b(W),{key:d,border:""},{default:I(()=>[j(G(i+" "+(d+1)),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]))}},he=R(le,[["__scopeId","data-v-9864ee1a"]]);export{he as default};
