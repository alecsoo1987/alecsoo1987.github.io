(function(t){function e(e){for(var a,o,s=e[0],l=e[1],i=e[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,i||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==c[l]&&(a=!1)}a&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},c={app:0},r=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var i=0;i<s.length;i++)e(s[i]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2525:function(t,e,n){"use strict";n("799b")},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("7a23"),c=n("cf05"),r=n.n(c);const o=Object(a["d"])("div",{class:"header"},[Object(a["d"])("ul",{class:"header-button-left"},[Object(a["d"])("li",null,"Cancel")]),Object(a["d"])("ul",{class:"header-button-right"},[Object(a["d"])("li",null,"Next")]),Object(a["d"])("img",{src:r.a,class:"logo"})],-1),s=Object(a["d"])("div",{class:"footer"},[Object(a["d"])("ul",{class:"footer-button-plus"},[Object(a["d"])("input",{type:"file",id:"file",class:"inputfile"}),Object(a["d"])("label",{for:"file",class:"input-plus"},"+")])],-1);function l(t,e,n,c,r,l){const i=Object(a["i"])("Container");return Object(a["g"])(),Object(a["c"])(a["a"],null,[o,Object(a["f"])(i,{instaData:r.instaData},null,8,["instaData"]),s],64)}function i(t,e,n,c,r,o){const s=Object(a["i"])("Post");return Object(a["g"])(),Object(a["c"])("div",null,[Object(a["f"])(s,{instaData:n.instaData},null,8,["instaData"])])}const u={class:"post-header"},p=Object(a["d"])("div",{class:"profile"},null,-1),d={class:"profile-name"},b=Object(a["d"])("div",{class:"post-body"},null,-1),f={class:"post-content"},j={class:"date"};function O(t,e,n,c,r,o){return Object(a["g"])(!0),Object(a["c"])(a["a"],null,Object(a["h"])(n.instaData,(t,e)=>(Object(a["g"])(),Object(a["c"])("div",{class:"post",key:e},[Object(a["d"])("div",u,[p,Object(a["d"])("span",d,Object(a["j"])(n.instaData[e].name),1)]),b,Object(a["d"])("div",f,[Object(a["d"])("p",null,Object(a["j"])(n.instaData[e].likes),1),Object(a["d"])("p",null,[Object(a["d"])("strong",null,Object(a["j"])(n.instaData[e].name),1),Object(a["e"])(Object(a["j"])(n.instaData[e].content),1)]),Object(a["d"])("p",j,Object(a["j"])(n.instaData[e].date),1)])]))),128)}var m={name:"Post",data(){return{}},props:{instaData:Array}},g=(n("2525"),n("6b0d")),h=n.n(g);const v=h()(m,[["render",O]]);var y=v,D={name:"Container",data(){return{}},components:{Post:y},props:{instaData:Array}};const k=h()(D,[["render",i]]);var w=k,P=[{name:"Kim Hyun",userImage:"https://placeimg.com/100/100/arch",postImage:"https://placeimg.com/640/480/arch",likes:36,date:"May 15",liked:!1,content:"오늘 무엇을 했냐면요 아무것도 안했어요 ?",filter:"perpetua"},{name:"John Doe",userImage:"https://placeimg.com/200/200/people",postImage:"https://placeimg.com/640/480/people",likes:20,date:"Apr 20",liked:!1,content:"흔한 자랑스타그램",filter:"clarendon"},{name:"Minny",userImage:"https://placeimg.com/100/100/animals",postImage:"https://placeimg.com/640/480/animals",likes:49,date:"Apr 4",liked:!1,content:"우리집 개는 화장실 물도 내림",filter:"lofi"}],x={name:"App",data(){return{instaData:P}},components:{Container:w}};n("cdc8");const I=h()(x,[["render",l]]);var M=I;Object(a["b"])(M).mount("#app")},"5bb6":function(t,e,n){},"799b":function(t,e,n){},cdc8:function(t,e,n){"use strict";n("5bb6")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.e06eb175.js.map