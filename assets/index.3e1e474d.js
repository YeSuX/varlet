import{h as ae,e as V,c as te}from"./components.0c747098.js";import{F as ne,u as re}from"./provide.3fa724a1.js";import{m as I,h as ue}from"./elements.f7cbc1d5.js";import{d as se,a as N,r as oe,b as z,Z as g,aw as o,w as H,o as ie,n as de,X as ce,_ as me,p as he,f as F,h as L,M as d,N as u,R as f,F as ve,ak as be,aj as j,O as fe,q as Ve,Q as ge}from"./vue-router.esm-bundler.42d3c0c2.js";function Se(e){return["always","normal","never"].includes(e)}const ye={modelValue:{type:[Number,Array],default:0},step:{type:[Number,String],default:1},range:{type:Boolean,default:!1},labelVisible:{type:String,default:"normal",validator:Se},activeColor:{type:String},trackColor:{type:String},thumbColor:{type:String},labelColor:{type:String},labelTextColor:{type:String},trackHeight:{type:[String,Number]},thumbSize:{type:[String,Number]},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},rules:{type:Array},onChange:{type:Function},onStart:{type:Function},onEnd:{type:Function},"onUpdate:modelValue":{type:Function}},{n:ze,classes:pe}=te("slider");var q=(e=>(e.First="1",e.Second="2",e))(q||{});const ke=se({name:"VarSlider",components:{VarFormDetails:ne},props:ye,setup(e){const{bindForm:p,form:c}=re(),{errorMessage:M,validateWithTrigger:P,validate:U,resetValidation:k}=ae(),r=()=>U(e.rules,e.modelValue),i=()=>({startPosition:0,currentLeft:0,active:!1,percentValue:0}),O=()=>de(()=>P(["onChange"],"onChange",e.rules,e.modelValue)),w=N(null),m=N(0),C=N(!1),n=oe({[1]:i(),[2]:i()}),h=z(()=>m.value/100*g(e.step)),Q=z(()=>{let l=[{value:e.modelValue,enumValue:"1"}];return e.range&&o(e.modelValue)&&(l=[{value:e.modelValue[0],enumValue:"1"},{value:e.modelValue[1],enumValue:"2"}]),l}),Z=l=>{let a;return e.thumbSize!==void 0&&(a=n[l.enumValue].active?I(e.thumbSize,3):"0px"),{height:a,width:a}},G=l=>e.labelVisible==="always"?!0:e.labelVisible==="never"?!1:n[l].active,J=z(()=>{const{activeColor:l,range:a,modelValue:t}=e,v=a&&o(t)?Math.abs(t[0]-t[1]):t,s=a&&o(t)?Math.min(t[0],t[1]):0;return{width:`${v}%`,left:`${s}%`,background:l}}),S=z(()=>e.disabled||(c==null?void 0:c.disabled.value)),T=z(()=>e.readonly||(c==null?void 0:c.readonly.value)),D=(l,a)=>{let t=[];const{step:v,range:s,modelValue:b,onChange:ee}=e,R=g(v),y=Math.round(l/h.value)*R,le=n[a].percentValue;if(n[a].percentValue=y/R,s&&o(b)&&(t=a==="1"?[y,b[1]]:[b[0],y]),le!==y){const X=s?t:y;V(ee,X),V(e["onUpdate:modelValue"],X),O()}},K=l=>{if(!e.range)return"1";const a=n[1].percentValue*h.value,t=n[2].percentValue*h.value,v=Math.abs(l-a),s=Math.abs(l-t);return v<=s?"1":"2"},Y=(l,a)=>{m.value||(m.value=w.value.offsetWidth),!(S.value||T.value)&&(V(e.onStart),C.value=!0,n[a].startPosition=l.touches[0].clientX)},_=(l,a)=>{if(S.value||T.value||!C.value)return;let t=l.touches[0].clientX-n[a].startPosition+n[a].currentLeft;n[a].active=!0,t<=0?t=0:t>=m.value&&(t=m.value),D(t,a)},B=l=>{const{range:a,modelValue:t,onEnd:v}=e;if(S.value||T.value)return;let s=[];n[l].currentLeft=n[l].percentValue*h.value,n[l].active=!1;const b=n[l].percentValue;a&&o(t)&&(s=l==="1"?[b,t[1]]:[t[0],b]),V(v,a?s:b),C.value=!1},x=l=>{if(S.value||T.value||l.target.closest(".var-slider__thumb"))return;const a=l.clientX-ue(l.currentTarget),t=K(a);D(a,t),B(t)},W=()=>{const l=g(e.step);return isNaN(l)?(console.warn('[Varlet] Slider: type of prop "step" should be Number'),!1):l<1||l>100?(console.warn('[Varlet] Slider: "step" should be >= 0 and <= 100'),!1):parseInt(`${e.step}`,10)!==l?(console.warn('[Varlet] Slider: "step" should be an Integer'),!1):!0},E=()=>{const{range:l,modelValue:a}=e;return l&&!o(a)?(console.error('[Varlet] Slider: "modelValue" should be an Array'),!1):!l&&o(a)?(console.error('[Varlet] Slider: "modelValue" should be a Number'),!1):l&&o(a)&&a.length<2?(console.error('[Varlet] Slider: "modelValue" should have two value'),!1):!0},A=(l=e.modelValue,a=g(e.step))=>{e.range&&o(l)?(n[1].percentValue=l[0]/a,n[1].currentLeft=n[1].percentValue*h.value,n[2].percentValue=l[1]/a,n[2].currentLeft=n[2].percentValue*h.value):ce(l)&&(n[1].currentLeft=l/a*h.value)};return H([()=>e.modelValue,()=>e.step],([l,a])=>{!W()||!E()||C.value||A(l,g(a))}),H(m,()=>A()),ie(()=>{!W()||!E()||(m.value=w.value.offsetWidth)}),V(p,{reset:()=>{const l=e.range?[0,0]:0;V(e["onUpdate:modelValue"],l),k()},validate:r,resetValidation:k}),{n:ze,classes:pe,Thumbs:q,sliderEl:w,getFillStyle:J,isDisabled:S,errorMessage:M,thumbsProps:n,thumbList:Q,multiplySizeUnit:I,toNumber:g,getRippleSize:Z,showLabel:G,start:Y,move:_,end:B,click:x}}});const Ce=["onTouchstart","onTouchmove","onTouchend","onTouchcancel"];function Te(e,p,c,M,P,U){const k=he("var-form-details");return F(),L("div",{class:u(e.n())},[d("div",{class:u(e.classes(e.n("block"),[e.isDisabled,e.n("--disabled")],[e.errorMessage,e.n("--error")])),style:f({height:e.thumbSize===void 0?e.thumbSize:e.multiplySizeUnit(e.thumbSize,3),margin:e.thumbSize===void 0?e.thumbSize:`0 ${e.multiplySizeUnit(e.thumbSize,.5)}`}),ref:"sliderEl",onClick:p[0]||(p[0]=(...r)=>e.click&&e.click(...r))},[d("div",{class:u(e.n("track"))},[d("div",{class:u(e.n("track-background")),style:f({background:e.trackColor,height:e.multiplySizeUnit(e.trackHeight)})},null,6),d("div",{class:u(e.n("track-fill")),style:f(e.getFillStyle)},null,6)],2),(F(!0),L(ve,null,be(e.thumbList,r=>(F(),L("div",{class:u(e.n("thumb")),key:r.enumValue,style:f({left:`${r.value}%`,zIndex:e.thumbsProps[r.enumValue].active?1:void 0}),onTouchstart:j(i=>e.start(i,r.enumValue),["stop"]),onTouchmove:j(i=>e.move(i,r.enumValue),["stop"]),onTouchend:i=>e.end(r.enumValue),onTouchcancel:i=>e.end(r.enumValue)},[fe(e.$slots,"button",{currentValue:r.value},()=>[d("div",{class:u(e.n("thumb-block")),style:f({background:e.thumbColor,height:e.multiplySizeUnit(e.thumbSize),width:e.multiplySizeUnit(e.thumbSize)})},null,6),d("div",{class:u(e.classes(e.n("thumb-ripple"),[e.thumbsProps[r.enumValue].active,e.n("thumb-ripple--active")])),style:f({background:e.thumbColor,...e.getRippleSize(r)})},null,6),d("div",{class:u(e.classes(e.n("thumb-label"),[e.showLabel(r.enumValue),e.n("thumb-label--active")])),style:f({background:e.labelColor,color:e.labelTextColor,height:e.thumbSize===void 0?e.thumbSize:e.multiplySizeUnit(e.thumbSize,2),width:e.thumbSize===void 0?e.thumbSize:e.multiplySizeUnit(e.thumbSize,2)})},[d("span",null,ge(r.value),1)],6)])],46,Ce))),128))],6),Ve(k,{"error-message":e.errorMessage,class:u(e.n("form")),"var-slider-cover":""},null,8,["error-message","class"])],2)}const $=me(ke,[["render",Te]]);$.install=function(e){e.component($.name,$)};export{$ as S};
