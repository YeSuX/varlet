var m=Object.defineProperty;var i=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var o=(a,e,u)=>e in a?m(a,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):a[e]=u,r=(a,e)=>{for(var u in e||(e={}))c.call(e,u)&&o(a,u,e[u]);if(i)for(var u of i(e))d.call(e,u)&&o(a,u,e[u]);return a};import{a as s}from"./elevation.b6664af0.js";var E={dialogTitle:"\u63D0\u793A",dialogConfirmButtonText:"\u786E\u8BA4",dialogCancelButtonText:"\u53D6\u6D88",actionSheetTitle:"\u8BF7\u9009\u62E9",listLoadingText:"\u52A0\u8F7D\u4E2D",listFinishedText:"\u6CA1\u6709\u66F4\u591A\u4E86",listErrorText:"\u52A0\u8F7D\u5931\u8D25",pickerTitle:"\u8BF7\u9009\u62E9",pickerConfirmButtonText:"\u786E\u8BA4",pickerCancelButtonText:"\u53D6\u6D88",datePickerMonthDict:{"01":{name:"\u4E00\u6708",abbr:"\u4E00\u6708"},"02":{name:"\u4E8C\u6708",abbr:"\u4E8C\u6708"},"03":{name:"\u4E09\u6708",abbr:"\u4E09\u6708"},"04":{name:"\u56DB\u6708",abbr:"\u56DB\u6708"},"05":{name:"\u4E94\u6708",abbr:"\u4E94\u6708"},"06":{name:"\u516D\u6708",abbr:"\u516D\u6708"},"07":{name:"\u4E03\u6708",abbr:"\u4E03\u6708"},"08":{name:"\u516B\u6708",abbr:"\u516B\u6708"},"09":{name:"\u4E5D\u6708",abbr:"\u4E5D\u6708"},"10":{name:"\u5341\u6708",abbr:"\u5341\u6708"},"11":{name:"\u5341\u4E00\u6708",abbr:"\u5341\u4E00\u6708"},"12":{name:"\u5341\u4E8C\u6708",abbr:"\u5341\u4E8C\u6708"}},datePickerWeekDict:{"0":{name:"\u661F\u671F\u65E5",abbr:"\u65E5"},"1":{name:"\u661F\u671F\u4E00",abbr:"\u4E00"},"2":{name:"\u661F\u671F\u4E8C",abbr:"\u4E8C"},"3":{name:"\u661F\u671F\u4E09",abbr:"\u4E09"},"4":{name:"\u661F\u671F\u56DB",abbr:"\u56DB"},"5":{name:"\u661F\u671F\u4E94",abbr:"\u4E94"},"6":{name:"\u661F\u671F\u516D",abbr:"\u516D"}},datePickerSelected:"\u4E2A\u88AB\u9009\u62E9",paginationItem:"\u6761",paginationPage:"\u9875",paginationJump:"\u524D\u5F80"};function l(){const a={},e=s({}),u=(n,t)=>{t.lang=n,a[n]=t},b=n=>{if(!a[n])return console.warn(`The ${n} does not exist. You can mount a language package using the add method`),{};e.value=a[n]};return{packs:a,pack:e,add:u,use:b,merge:(n,t)=>{if(!a[n]){console.warn(`The ${n} does not exist. You can mount a language package using the add method`);return}a[n]=r(r({},a[n]),t),b(n)}}}const{packs:C,pack:k,add:p,use:T,merge:B}=l();p("zh-CN",E);T("zh-CN");var h={dialogTitle:"Hint",dialogConfirmButtonText:"Confirm",dialogCancelButtonText:"Cancel",actionSheetTitle:"Select One",listLoadingText:"Loading",listFinishedText:"No more",listErrorText:"Load fail",pickerTitle:"Pick it",pickerConfirmButtonText:"Confirm",pickerCancelButtonText:"Cancel",datePickerMonthDict:{"01":{name:"January",abbr:"JAN"},"02":{name:"February",abbr:"FEB"},"03":{name:"March",abbr:"MAR"},"04":{name:"April",abbr:"APR"},"05":{name:"May",abbr:"MAY"},"06":{name:"June",abbr:"JUN"},"07":{name:"July",abbr:"JUL"},"08":{name:"August",abbr:"AUG"},"09":{name:"September",abbr:"SEP"},"10":{name:"October",abbr:"OCT"},"11":{name:"November",abbr:"NOV"},"12":{name:"December",abbr:"DEC"}},datePickerWeekDict:{"0":{name:"Sunday",abbr:"S"},"1":{name:"Monday",abbr:"M"},"2":{name:"Tuesday",abbr:"T"},"3":{name:"Wednesday",abbr:"W"},"4":{name:"Thursday",abbr:"T"},"5":{name:"Friday",abbr:"F"},"6":{name:"Saturday",abbr:"S"}},datePickerSelected:" selected",paginationItem:"",paginationPage:"page",paginationJump:"Go to"};export{E as _,p as a,h as b,T as c,k as p,l as u};
