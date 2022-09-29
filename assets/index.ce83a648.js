import{I as G}from"./index.87785518.js";import{F as I,u as Y}from"./provide.3fa724a1.js";import{R as j}from"./index.d1d03c1f.js";import{u as W,a as q,b as J,d as L,h as Q,e as c,c as Z}from"./components.0c747098.js";import{d as _,a as O,b as E,w as x,n as ee,_ as ae,p as N,ai as ne,f as S,h as K,M as A,D as oe,N as d,R as se,O as v,q as b}from"./vue-router.esm-bundler.42d3c0c2.js";const D=Symbol("CHECKBOX_GROUP_BIND_CHECKBOX_KEY"),R=Symbol("CHECKBOX_GROUP_COUNT_CHECKBOX_KEY");function ve(){const{bindChildren:e,childProviders:o}=q(D),{length:r}=W(R);return{length:r,checkboxes:o,bindCheckboxes:e}}const le={modelValue:{type:[String,Number,Boolean,Object,Array],default:!1},checkedValue:{type:[String,Number,Boolean,Object,Array],default:!0},uncheckedValue:{type:[String,Number,Boolean,Object,Array],default:!1},checkedColor:{type:String},uncheckedColor:{type:String},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},iconSize:{type:[String,Number]},ripple:{type:Boolean,default:!0},validateTrigger:{type:Array,default:["onChange"]},rules:{type:Array},onClick:{type:Function},onChange:{type:Function},"onUpdate:modelValue":{type:Function}};function re(){const{bindParent:e,parentProvider:o}=J(D),{index:r}=L(R);return{index:r,checkboxGroup:o,bindCheckboxGroup:e}}const{n:ie,classes:ce}=Z("checkbox"),de=_({name:"VarCheckbox",directives:{Ripple:j},components:{VarIcon:G,VarFormDetails:I},props:le,setup(e){const o=O(!1),r=E(()=>o.value===e.checkedValue),y=E(()=>e.checkedValue),t=O(!1),{checkboxGroup:s,bindCheckboxGroup:u}=re(),{form:a,bindForm:m}=Y(),{errorMessage:k,validateWithTrigger:P,validate:U,resetValidation:C}=Q(),w=n=>{ee(()=>{const{validateTrigger:l,rules:i,modelValue:h}=e;P(l,n,i,h)})},p=n=>{o.value=n;const{checkedValue:l,onChange:i}=e;c(e["onUpdate:modelValue"],o.value),c(i,o.value),w("onChange"),n===l?s==null||s.onChecked(l):s==null||s.onUnchecked(l)},z=n=>{const{disabled:l,readonly:i,checkedValue:h,uncheckedValue:X,onClick:T}=e;if((a==null?void 0:a.disabled.value)||l||(c(T,n),(a==null?void 0:a.readonly.value)||i))return;t.value=!0;const $=s?s.checkedCount.value>=Number(s.max.value):!1;!r.value&&$||p(r.value?X:h)},M=n=>{const{checkedValue:l,uncheckedValue:i}=e;o.value=n.includes(l)?l:i},F=()=>{t.value=!1},g=()=>{c(e["onUpdate:modelValue"],e.uncheckedValue),C()},H=n=>{const{checkedValue:l,uncheckedValue:i}=e;![l,i].includes(n)&&(n=r.value?i:l),p(n)},V=()=>U(e.rules,e.modelValue);x(()=>e.modelValue,n=>{o.value=n},{immediate:!0});const B={checkedValue:y,checked:r,sync:M,validate:V,resetValidation:C,reset:g,resetWithAnimation:F};return c(u,B),c(m,B),{withAnimation:t,checked:r,errorMessage:k,checkboxGroupErrorMessage:s==null?void 0:s.errorMessage,formDisabled:a==null?void 0:a.disabled,formReadonly:a==null?void 0:a.readonly,n:ie,classes:ce,handleClick:z,toggle:H,reset:g,validate:V,resetValidation:C}}});function te(e,o,r,y,t,s){const u=N("var-icon"),a=N("var-form-details"),m=ne("ripple");return S(),K("div",{class:d(e.n("wrap")),onClick:o[0]||(o[0]=(...k)=>e.handleClick&&e.handleClick(...k))},[A("div",{class:d(e.n())},[oe((S(),K("div",{class:d(e.classes(e.n("action"),[e.checked,e.n("--checked"),e.n("--unchecked")],[e.errorMessage||e.checkboxGroupErrorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")])),style:se({color:e.checked?e.checkedColor:e.uncheckedColor})},[e.checked?v(e.$slots,"checked-icon",{key:0},()=>[b(u,{class:d(e.classes(e.n("icon"),[e.withAnimation,e.n("--with-animation")])),name:"checkbox-marked",size:e.iconSize,"var-checkbox-cover":""},null,8,["class","size"])]):v(e.$slots,"unchecked-icon",{key:1},()=>[b(u,{class:d(e.classes(e.n("icon"),[e.withAnimation,e.n("--with-animation")])),name:"checkbox-blank-outline",size:e.iconSize,"var-checkbox-cover":""},null,8,["class","size"])])],6)),[[m,{disabled:e.formReadonly||e.readonly||e.formDisabled||e.disabled||!e.ripple}]]),A("div",{class:d(e.classes(e.n("text"),[e.errorMessage||e.checkboxGroupErrorMessage,e.n("--error")],[e.formDisabled||e.disabled,e.n("--disabled")]))},[v(e.$slots,"default")],2)],2),b(a,{"error-message":e.errorMessage},null,8,["error-message"])],2)}const f=ae(de,[["render",te]]);f.install=function(e){e.component(f.name,f)};export{f as C,ve as u};
