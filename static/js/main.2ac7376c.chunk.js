(this["webpackJsonpbee-blues"]=this["webpackJsonpbee-blues"]||[]).push([[0],{114:function(e,t,a){},16:function(e){e.exports=JSON.parse('{"a":"bee-blues","b":"0.12.8"}')},249:function(e,t,a){"use strict";a.r(t);var n=a(51),r=a(89),c=a.n(r),l=a(0),o=a.n(l),i=a(90),u=a.n(i),s=a(16),m=(a(114),a(7)),f=a(91),p=a(92),b=a(13),d=a(30),g="active",E="asc",_="Author",v="desc",h="Examples",O="FITB",A="FITBs",P="ID",x="Name",y="Prompts",N="Status",k="Tags";var j=function(e){var t=e.get(h)?JSON.parse(e.get(h)):void 0,a=e.get(y)?JSON.parse(e.get(y)):void 0;return{author:e.get(_),examples:t,id:e.id,prompts:a,source:e.get(O),tags:e.get(k)}},w=a(93),I=a.n(w),C=Object({NODE_ENV:"production",PUBLIC_URL:"/bee-blues",REACT_APP_AIRTABLE_API_KEY:"keybZUBuHX3GWW9EQ",REACT_APP_AIRTABLE_APP_ID:"apphnkOs93OSLlbQ2",REACT_APP_AMPLITUDE_KEY:"b010096b3fd732578935eb8bfd7b1082"}),T=C.REACT_APP_AIRTABLE_API_KEY,L=C.REACT_APP_AIRTABLE_APP_ID;var R=function(e){var t,a=e.callback,n=e.map,r=e.options,c=e.tableName;new I.a({apiKey:T}).base(L)(c).select(r).eachPage((function(e,a){t=e.map(n),a()}),(function(e){a(e,t)}))};var B=function(e){R({callback:e,map:j,options:{filterByFormula:"".concat(N,'="').concat(g,'"'),sort:[{field:P,direction:v}]},tableName:A})};var S=function(e){var t="\xe0\xe1\xe2\xe4\xe6\xe3\xe5\u0101\u0103\u0105\xe7\u0107\u010d\u0111\u010f\xe8\xe9\xea\xeb\u0113\u0117\u0119\u011b\u011f\u01f5\u1e27\xee\xef\xed\u012b\u012f\xec\u0142\u1e3f\xf1\u0144\u01f9\u0148\xf4\xf6\xf2\xf3\u0153\xf8\u014d\xf5\u0151\u1e55\u0155\u0159\xdf\u015b\u0161\u015f\u0219\u0165\u021b\xfb\xfc\xf9\xfa\u016b\u01d8\u016f\u0171\u0173\u1e83\u1e8d\xff\xfd\u017e\u017a\u017c\xb7/_,:;",a=new RegExp(t.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(a,(function(e){return"aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(t.indexOf(e))})).replace(/&/g,"-and-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")};var D=function(e){var t=e.get(x);return{fitbs:e.get(A),id:e.id,name:t,slug:S(t)}};var K=function(e){R({callback:e,map:D,options:{sort:[{field:x,direction:E}]},tableName:k})},U=a(12),W=a.n(U);function J(e){var t=e.counter,a=e.filter,n=e.onClick,r=e.tag;return o.a.createElement("li",{className:"mx-1 my-1"},o.a.createElement(d.b,{to:r.slug},o.a.createElement("button",{className:W()("focus:outline-none hover:bg-blue-700 px-4 rounded-full text-white",{"bg-blue-500":r.name!==a.name,"bg-blue-900":r.name===a.name}),"data-testid":r.name,onClick:function(){return n(r)},type:"button"},"".concat(r.name," (").concat(t,")"))))}var Y=function(e){var t=e.filter,a=e.fitbs,n=e.onClick,r=e.tags,c=a.reduce((function(e,t){return t.tags.forEach((function(t){e[t]?e[t]+=1:e[t]=1})),e}),{});return o.a.createElement("ul",{className:"flex flex-wrap"},o.a.createElement(J,{counter:a.length,filter:t,onClick:n,tag:ce}),r.map((function(e){return o.a.createElement(J,{counter:c[e.id],filter:t,key:e.id,onClick:n,tag:e})})))},F={off:"off",on:"on"};var z=function(e){var t=e.id,a=e.onChange,n=e.value;return o.a.createElement("span",{className:"inline-block ml-3 relative"},o.a.createElement("input",{checked:n===F.on,className:"hidden","data-testid":t,id:t,onChange:function(){return a(n)},type:"checkbox"}),o.a.createElement("label",{className:"cursor-pointer",htmlFor:t},o.a.createElement("div",{className:"w-6 h-3 bg-gray-400 rounded-full shadow-inner"}),o.a.createElement("div",{className:W()("toggle__dot absolute w-4 h-4 bg-gray-300 rounded-full shadow inset-y-0 left-0",{"toggle__dot--checked":n===F.on})})))},M="________________",Q="__BLANK__",V={blanks:"blanks",examples:"examples",input:"input",prompts:"prompts"},G=a(96),H=a.n(G),X=a(97);function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var $="change";var q=function(e,t){switch(t.type){case $:var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(a,!0).forEach((function(t){Object(X.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e);return a[t.value.id]=t.value.value,a;default:return e}};var ee=function(e){var t=e.dispatch,a=e.hint,n=e.id,r=e.value;return o.a.createElement("span",{className:"inline-flex flex-col leading-none"},o.a.createElement(H.a,{"data-testid":"input",inputClassName:W()({"bg-purple-100":r.length>0}),onChange:function(e){var a=e.target.value;t({type:$,value:{id:n,value:a}})},placeholder:M,placeholderIsMinWidth:!0,value:r}),a!==M&&o.a.createElement("label",{className:"self-center text-sm"},a))};var te=function(e){return e.match(/__BLANK__/g).reduce((function(e,t,a){return e[a]="",e}),{})};var ae=function(e){var t=e.fitb,a=e.mode,n=Object(l.useReducer)(q,te(t.source)),r=Object(m.a)(n,2),c=r[0],i=r[1],u=function(e,t){var a=t.examples,n=t.prompts,r=[],c=t.source.match(/__BLANK__/g).map((function(){return M}));switch(e){case V.blanks:default:r=c;break;case V.examples:r=a;break;case V.input:r=n||c;break;case V.prompts:r=n}return r}(a,t);return function(e){var t=e.dispatch,a=e.mode,n=e.source,r=e.state,c=e.values,l=n.slice().split(Q),i=[];return l.forEach((function(e,n){if(i.push(e),c[n]){var l;if(a===V.input){var u=c[n];l=o.a.createElement(ee,{dispatch:t,hint:u,id:n,key:n,value:r[n]})}else l=o.a.createElement("span",{className:W()({"bg-yellow-200":a===V.blanks,"bg-green-200":a===V.examples,"bg-blue-200":a===V.prompts}),key:n},c[n]);i.push(l)}})),i}({dispatch:i,mode:a,source:t.source,state:c,values:u})};var ne=function(e){var t=e.fitb,a=Object(l.useState)(V.input),n=Object(m.a)(a,2),r=n[0],c=n[1];return o.a.createElement("div",{className:"leading-loose text-lg my-5"},o.a.createElement(ae,{mode:r,fitb:t}),t.examples&&o.a.createElement(z,{id:t.id,onChange:function(e){e===F.off&&c(V.examples),e===F.on&&c(V.input)},value:r===V.examples?F.on:F.off}),o.a.createElement("hr",{className:"mt-3"}))},re="all",ce={name:re,slug:re};var le=function(){var e=Object(l.useState)(),t=Object(m.a)(e,2),a=t[0],n=t[1],r=Object(l.useState)(ce),c=Object(m.a)(r,2),i=c[0],u=c[1],g=Object(l.useState)([]),E=Object(m.a)(g,2),_=E[0],v=E[1],h=Object(l.useState)([]),O=Object(m.a)(h,2),A=O[0],P=O[1],x=Object(l.useState)(!0),y=Object(m.a)(x,2),N=y[0],k=y[1];function j(){var e=Object(b.f)().id,t=A.find((function(t){return t.slug===e}));return t&&i!==t&&u(t),o.a.createElement(Y,{filter:i,fitbs:_,onClick:function(e){return u(e)},tags:A})}return Object(l.useEffect)((function(){B((function(e,t){e?n(e):v(t)}))}),[]),Object(l.useEffect)((function(){K((function(e,t){e?n(e):P(t)}))}),[]),Object(l.useEffect)((function(){a&&k(!1),_.length>0&&A.length>0&&k(!1)}),[a,_.length,A.length]),o.a.createElement("div",{className:"flex flex-col font-serif items-center max-w-4xl mx-16 sm:mx-32 md:mx-32 lg:mx-32 xl:mx-auto"},o.a.createElement("h1",{className:"capitalize font-normal font-bold text-4xl text-gray-900"},s.a),N?o.a.createElement(p.a,{className:"text-4xl",icon:f.a,spin:!0}):a?o.a.createElement("pre",null,JSON.stringify(a,0,2)):o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,null,o.a.createElement(b.c,null,o.a.createElement(b.a,{path:"/:id",children:o.a.createElement(j,null)}),o.a.createElement(b.a,{path:"/",children:o.a.createElement(j,null)}))),o.a.createElement("ul",null,_.filter((function(e){return i.name===re?e:i.fitbs.includes(e.id)?e:null})).map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(ne,{fitb:e}))})))),o.a.createElement("small",{className:"font-normal text-gray-700 text-sm"},"v",s.b))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var oe=Object({NODE_ENV:"production",PUBLIC_URL:"/bee-blues",REACT_APP_AIRTABLE_API_KEY:"keybZUBuHX3GWW9EQ",REACT_APP_AIRTABLE_APP_ID:"apphnkOs93OSLlbQ2",REACT_APP_AMPLITUDE_KEY:"b010096b3fd732578935eb8bfd7b1082"}),ie=oe.NODE_ENV,ue=oe.REACT_APP_AMPLITUDE_KEY;u.a.render(o.a.createElement(n.AmplitudeProvider,{amplitudeInstance:c.a.getInstance(),apiKey:ue},o.a.createElement(n.Amplitude,null,(function(e){return(0,e.logEvent)("hello ".concat(s.a," v").concat(s.b," ").concat(ie)),o.a.createElement(le,null)}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},98:function(e,t,a){e.exports=a(249)}},[[98,1,2]]]);
//# sourceMappingURL=main.2ac7376c.chunk.js.map