import{c as m,b as l,a as c}from"./components.0c747098.js";import{d,_ as p,f as r,i as u,S as f,h as _,M as t,Q as o,N as a,j as g,G as F}from"./vue-router.esm-bundler.42d3c0c2.js";const h={errorMessage:{type:String,default:""},maxlengthText:{type:String,default:""}},{n:M}=m("form-details"),v=d({name:"VarFormDetails",props:h,setup:()=>({n:M})});function y(e,s,I,b,B,C){return r(),u(F,{name:e.n()},{default:f(()=>[e.errorMessage||e.maxlengthText?(r(),_("div",{key:0,class:a(e.n())},[t("div",{class:a(e.n("message"))},o(e.errorMessage),3),t("div",{class:a(e.n("length"))},o(e.maxlengthText),3)],2)):g("v-if",!0)]),_:1},8,["name"])}const n=p(v,[["render",y]]);n.install=function(e){e.component(n.name,n)};const i=Symbol("FORM_BIND_FORM_ITEM_KEY");function T(){const{bindParent:e,parentProvider:s}=l(i);return{bindForm:e,form:s}}function E(){const{bindChildren:e,childProviders:s}=c(i);return{formItems:s,bindFormItems:e}}export{n as F,E as a,T as u};
