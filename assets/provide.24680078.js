import{d as m,_ as l,f as r,i as d,P as c,h as u,l as t,N as o,H as a,k as p,Q as f}from"./elevation.b6664af0.js";import{c as _,b as g,u as F}from"./components.1dfa4f07.js";const h={errorMessage:{type:String,default:""},maxlengthText:{type:String,default:""}};const{n:v}=_("form-details"),M=m({name:"VarFormDetails",props:h,setup:()=>({n:v})});function y(e,s,I,b,B,C){return r(),d(f,{name:e.n()},{default:c(()=>[e.errorMessage||e.maxlengthText?(r(),u("div",{key:0,class:a(e.n())},[t("div",{class:a(e.n("message"))},o(e.errorMessage),3),t("div",{class:a(e.n("length"))},o(e.maxlengthText),3)],2)):p("v-if",!0)]),_:1},8,["name"])}var n=l(M,[["render",y]]);n.install=function(e){e.component(n.name,n)};const i=Symbol("FORM_BIND_FORM_ITEM_KEY");function T(){const{bindParent:e,parentProvider:s}=g(i);return{bindForm:e,form:s}}function k(){const{bindChildren:e,childProviders:s}=F(i);return{formItems:s,bindFormItems:e}}export{n as F,k as a,T as u};
