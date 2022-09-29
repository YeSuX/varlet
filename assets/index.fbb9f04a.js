import{I as w}from"./index.87785518.js";import{F as P,u as q}from"./provide.3fa724a1.js";import{R as A}from"./index.d1d03c1f.js";import{h as E,e as c,c as L}from"./components.0c747098.js";import{a as F}from"./elements.f7cbc1d5.js";import{d as X,Z as s,n as Z,_ as j,p as _,ai as G,f as b,h,M as H,F as J,ak as K,D as O,R as I,N as u,q as z}from"./vue-router.esm-bundler.42d3c0c2.js";const Q={modelValue:{type:[String,Number],default:0},count:{type:[String,Number],default:5},color:{type:String},icon:{type:String,default:"star"},emptyColor:{type:String},emptyIcon:{type:String,default:"star-outline"},size:{type:[String,Number]},gap:{type:[String,Number]},namespace:{type:String},half:{type:Boolean,default:!1},halfIcon:{type:String,default:"star-half-full"},disabled:{type:Boolean,default:!1},disabledColor:{type:String},readonly:{type:Boolean,default:!1},ripple:{type:Boolean,default:!0},rules:{type:Array},onChange:{type:Function},"onUpdate:modelValue":{type:Function}},{n:i}=L("rate"),Y=X({name:"VarRate",components:{VarIcon:w,VarFormDetails:P},directives:{Ripple:A},props:Q,setup(e){const{form:a,bindForm:S}=q(),{errorMessage:m,validateWithTrigger:V,validate:N,resetValidation:r}=E(),p=t=>{const{count:n,gap:o}=e;return{color:l(t).color,marginRight:t!==s(n)?F(o):0}},y=t=>{const{name:n,color:o}=l(t);return{[i("content")]:!0,[i("--disabled")]:(a==null?void 0:a.disabled.value)||e.disabled,[i("--error")]:m.value,[i("--primary")]:n!==e.emptyIcon&&!o}},l=t=>{const{modelValue:n,disabled:o,disabledColor:d,color:g,half:U,emptyColor:M,icon:$,halfIcon:T,emptyIcon:W}=e;let v=g;return(o||(a==null?void 0:a.disabled.value))&&(v=d),t<=s(n)?{color:v,name:$}:U&&t<=s(n)+.5?{color:v,name:T}:{color:o||(a==null?void 0:a.disabled.value)?d:M,name:W}},f=(t,n)=>{if(e.half){const{offsetWidth:o}=n.target;n.offsetX<=Math.floor(o/2)&&(t-=.5)}c(e["onUpdate:modelValue"],t)},R=()=>N(e.rules,s(e.modelValue)),B=()=>Z(()=>V(["onChange"],"onChange",e.rules,e.modelValue)),D=(t,n)=>{const{readonly:o,disabled:d,onChange:g}=e;o||d||(a==null?void 0:a.disabled.value)||(a==null?void 0:a.readonly.value)||(f(t,n),c(g,t),B())},k=()=>{c(e["onUpdate:modelValue"],0),r()};return c(S,{reset:k,validate:R,resetValidation:r}),{errorMessage:m,formDisabled:a==null?void 0:a.disabled,formReadonly:a==null?void 0:a.readonly,getStyle:p,getClass:y,getCurrentState:l,handleClick:D,reset:k,validate:R,resetValidation:r,toSizeUnit:F,toNumber:s,n:i}}});const x=["onClick"];function ee(e,a,S,m,V,N){const r=_("var-icon"),p=_("var-form-details"),y=G("ripple");return b(),h("div",{class:u(e.n("wrap"))},[H("div",{class:u(e.n())},[(b(!0),h(J,null,K(e.toNumber(e.count),l=>O((b(),h("div",{key:l,style:I(e.getStyle(l)),class:u(e.getClass(l)),onClick:f=>e.handleClick(l,f)},[z(r,{class:u(e.n("content-icon")),"var-rate-cover":"",transition:0,namespace:e.namespace,name:e.getCurrentState(l).name,style:I({fontSize:e.toSizeUnit(e.size)})},null,8,["class","namespace","name","style"])],14,x)),[[y,{disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled||!e.ripple}]])),128))],2),z(p,{"error-message":e.errorMessage},null,8,["error-message"])],2)}const C=j(Y,[["render",ee]]);C.install=function(e){e.component(C.name,C)};export{C as R};
