(this["webpackJsonpteamprompts-app"]=this["webpackJsonpteamprompts-app"]||[]).push([[0],{104:function(e,t,a){e.exports=a(257)},19:function(e){e.exports=JSON.parse('{"a":"teamprompts-app","b":"0.16.5"}')},256:function(e,t,a){},257:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(56),c=a(95),l=a.n(c),o=a(0),i=a.n(o),u=a(96),s=a.n(u),m=a(34),f=a(19),b=a(35),d=a(16),p=a(7),E="active",g="asc",v="Author",_="desc",O="Examples",h="FITB",A="FITBs",P="ID",j="Name",x="Prompts",N="Status",y="Tags";var k=function(e){var t=e.get(O)?JSON.parse(e.get(O)):void 0,a=e.get(x)?JSON.parse(e.get(x)):void 0;return{author:e.get(v),examples:t,id:e.id,prompts:a,source:e.get(h),tags:e.get(y)}},w=a(97),C=a.n(w),T=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AIRTABLE_API_KEY:"keybZUBuHX3GWW9EQ",REACT_APP_AIRTABLE_APP_ID:"apphnkOs93OSLlbQ2",REACT_APP_AMPLITUDE_KEY:"b010096b3fd732578935eb8bfd7b1082",REACT_APP_GA_TRACKING_ID:"UA-154123858-1"}),I=T.REACT_APP_AIRTABLE_API_KEY,R=T.REACT_APP_AIRTABLE_APP_ID;var S=function(e){var t,a=e.callback,n=e.map,r=e.options,c=e.tableName;new C.a({apiKey:I}).base(R)(c).select(r).eachPage((function(e,a){t=e.map(n),a()}),(function(e){a(e,t)}))};var D=function(e){S({callback:e,map:k,options:{filterByFormula:"".concat(N,'="').concat(E,'"'),sort:[{field:P,direction:_}]},tableName:A})};var L=function(e){var t="\xe0\xe1\xe2\xe4\xe6\xe3\xe5\u0101\u0103\u0105\xe7\u0107\u010d\u0111\u010f\xe8\xe9\xea\xeb\u0113\u0117\u0119\u011b\u011f\u01f5\u1e27\xee\xef\xed\u012b\u012f\xec\u0142\u1e3f\xf1\u0144\u01f9\u0148\xf4\xf6\xf2\xf3\u0153\xf8\u014d\xf5\u0151\u1e55\u0155\u0159\xdf\u015b\u0161\u015f\u0219\u0165\u021b\xfb\xfc\xf9\xfa\u016b\u01d8\u016f\u0171\u0173\u1e83\u1e8d\xff\xfd\u017e\u017a\u017c\xb7/_,:;",a=new RegExp(t.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(a,(function(e){return"aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(t.indexOf(e))})).replace(/&/g,"-and-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")};var B=function(e){var t=e.get(j);return{fitbs:e.get(A),id:e.id,name:t,slug:L(t)}};var K=function(e){S({callback:e,map:B,options:{sort:[{field:j,direction:g}]},tableName:y})},U="________________",G="____",F="MASTER_DETAIL_V1",M="NONE",W="__BLANK__",X="TEAMPROMPTS_APP_EXPERIMENT",Y={blanks:"blanks",blanksXS:"blanksXS",examples:"examples",input:"input",prompts:"prompts"},z="try",H="leave";var J=function(e){var t=e.version,a=Object(m.a)(X,M),r=Object(n.a)(a,2),c=r[0],l=r[1],u=Object(o.useState)(c===F?H:z),s=Object(n.a)(u,2),f=s[0],b=s[1];return i.a.createElement("p",{className:"my-8"},i.a.createElement("small",{className:"font-normal text-gray-700 text-sm"},"v",t),i.a.createElement("button",{className:"bg-red-500 focus:outline-none font-bold font-mono hover:bg-red-700 ml-3 px-2 rounded text-sm text-white","data-testid":"copy-button",onClick:function(){f===z&&(l(F),b(H),window.location.assign("/")),f===H&&(l(M),b(z),window.location.assign("/"))},type:"button"},"".concat(f," the \u03b2eta")))};var Q=function(e){var t=e.build,a=e.source,n=e.values,r=a.slice().split(W),c=[];return r.forEach((function(e,a){c.push(e),n[a]&&c.push(t({index:a}))})),c},V=a(98),Z=a(15),$=a.n(Z),q={off:"off",on:"on"};var ee=function(e){var t=e.id,a=e.onChange,n=e.value;return i.a.createElement("span",{className:"inline-block ml-3 relative"},i.a.createElement("input",{checked:n===q.on,className:"hidden","data-testid":t,id:t,onChange:function(){return a(n)},type:"checkbox"}),i.a.createElement("label",{className:"cursor-pointer",htmlFor:t},i.a.createElement("div",{className:"w-6 h-3 bg-gray-400 rounded-full shadow-inner"}),i.a.createElement("div",{className:$()("toggle__dot absolute w-4 h-4 bg-gray-300 rounded-full shadow inset-y-0 left-0",{"toggle__dot--checked":n===q.on})})))},te=a(99),ae=a.n(te);function ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var re="change";var ce=function(e,t){switch(t.type){case re:var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(a),!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ne(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e);return a[t.value.id]=t.value.value,a;default:return e}};var le=function(e){var t=e.dispatch,a=e.hint,n=e.id,r=e.value;return i.a.createElement("span",{className:"inline-flex flex-col leading-none"},i.a.createElement(ae.a,{className:"self-center","data-testid":"input",inputClassName:$()({"bg-purple-100":r.length>0}),onChange:function(e){var a=e.target.value;t({type:re,value:{id:n,value:a}})},placeholder:U,placeholderIsMinWidth:!0,value:r}),a!==U&&i.a.createElement("label",{className:"self-center text-sm"},a))};function oe(e){var t=e.blank;return e.source.match(/__BLANK__/g).map((function(){return t}))}var ie=function(e,t){var a=t.examples,n=t.prompts,r=t.source,c=[],l=oe({blank:U,source:r});switch(e){case Y.blanks:default:c=l;break;case Y.blanksXS:c=oe({blank:G,source:r});break;case Y.examples:c=a;break;case Y.input:c=n||l;break;case Y.prompts:c=n}return c};var ue=function(e){return e.match(/__BLANK__/g).reduce((function(e,t,a){return e[a]="",e}),{})};function se(e){var t=e.dispatch,a=e.mode,n=e.state,r=e.values;return function(e){var c=e.index;return a===Y.input?i.a.createElement(le,{dispatch:t,hint:r[c],id:c,key:c,value:n[c]}):i.a.createElement("span",{className:$()({"bg-yellow-200":a===Y.blanks,"bg-green-200":a===Y.examples,"bg-blue-200":a===Y.prompts}),key:c},r[c])}}var me=function(e){var t=e.callback,a=e.fitb,r=e.mode,c=Object(o.useReducer)((function(e,a){var n=ce(e,a);return t(n),n}),ue(a.source)),l=Object(n.a)(c,2),i=l[0],u=l[1],s=ie(r,a);return Q({build:se({dispatch:u,mode:r,state:i,values:s}),source:a.source,values:s})};function fe(e){var t=e.inputs,a=e.mode,n=e.values;return function(e){var r=e.index;return a===Y.input?t&&t[r]?t[r]:U:n[r]}}var be=function(e){var t=e.fitb,a=e.inputs,n=e.mode,r=e.onClick;return i.a.createElement("button",{className:"bg-blue-500 focus:outline-none font-bold font-mono hover:bg-blue-700 ml-3 px-4 rounded-full text-sm text-white","data-testid":"copy-button",onClick:function(){var e=ie(n,t),c=Q({build:fe({inputs:a,mode:n,values:e}),source:t.source,values:e});r(c.join(""))},type:"button"},"Ctrl+C")};var de=function(e){var t=e.fitb,a=Object(V.useClipboard)(),r=Object(o.useState)(),c=Object(n.a)(r,2),l=c[0],u=c[1],s=Object(o.useState)(Y.input),m=Object(n.a)(s,2),f=m[0],b=m[1];return i.a.createElement("div",{className:"border-b border-gray-500 leading-loose py-8 text-lg"},i.a.createElement(me,{callback:u,fitb:t,mode:f}),t.examples&&i.a.createElement(ee,{id:t.id,onChange:function(e){e===q.off&&b(Y.examples),e===q.on&&b(Y.input)},value:f===Y.examples?q.on:q.off}),i.a.createElement(be,{fitb:t,inputs:l,mode:f,onClick:function(e){console.log(e),a.copy(e)}}))};function pe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Ee="Unknown";function ge(e){var t=e.slug,a=e.tags,n={name:"",slug:""};return a.length>0?a.find((function(e){return e.slug===t}))||function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(a),!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):pe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},n,{name:Ee}):n}function ve(){return i.a.createElement("h1",{className:"font-bold mb-8 mt-2 text-4xl text-gray-900"},"TeamPrompts")}function _e(e){var t=e.fitbs,a=e.tags,n=Object(d.f)(),r=n.id,c=ge({slug:n.slug,tags:a}),l=t.find((function(e){return e.id===r}));return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"mt-2"},i.a.createElement(p.b,{className:"text-indigo-700 underline",to:"/"},"Home")," > ",i.a.createElement(p.b,{className:"capitalize text-indigo-700 underline",to:"/".concat(c.slug)},c.name)," > ",G),i.a.createElement(ve,null),l&&i.a.createElement(i.a.Fragment,null,i.a.createElement(de,{fitb:l}),i.a.createElement("div",{className:"italic self-end text-sm"},l.author)))}function Oe(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"mt-2"},"\xa0"),i.a.createElement("h1",{className:"font-bold mb-8 mt-2 text-4xl text-gray-900"},"Loading ..."))}function he(e){var t=e.fitbs,a=e.tags;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"mt-2"},"Home"),i.a.createElement(ve,null),i.a.createElement("ul",null,function(e){var t=e.fitbs;return e.tags.reduce((function(e,a){if(a.fitbs){var n=!1;a.fitbs.forEach((function(e){t.find((function(t){return t.id===e}))&&(n=!0)})),n&&e.push(a)}return e}),[]).sort((function(e,t){return e.slug>t.slug?1:e.slug<t.slug?-1:0}))}({fitbs:t,tags:a}).map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(p.b,{className:"capitalize text-indigo-700 underline",to:"/".concat(e.slug)},e.name))}))))}function Ae(e){var t=e.fitbs,a=e.tags,n=ge({slug:Object(d.f)().slug,tags:a});return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"mt-2"},i.a.createElement(p.b,{className:"text-indigo-700 underline",to:"/"},"Home")," > ",i.a.createElement("span",{className:"capitalize"},n.name)),i.a.createElement(ve,null),i.a.createElement("ul",null,function(e){var t=e.fitbs,a=e.tag;return e.tags,t.filter((function(e){return e.tags.includes(a.id)}))}({fitbs:t,tag:n,tags:a}).map((function(e){return i.a.createElement("li",{key:e.id},function(e){var t=e.fitb,a=ie(Y.blanksXS,t);return Q({build:function(e){var t=e.index;return a[t]},source:t.source,values:a}).join("").split(" ").slice(0,6).join(" ")}({fitb:e})," ",i.a.createElement(p.b,{className:"text-indigo-700 underline",to:"/".concat(n.slug,"/").concat(e.id)},"..."))}))))}function Pe(e){var t=e.callback,a=e.children,r=e.loading,c=Object(o.useState)(),l=Object(n.a)(c,2),i=l[0],u=l[1],s=Object(o.useState)([]),m=Object(n.a)(s,2),f=m[0],b=m[1],d=Object(o.useState)([]),p=Object(n.a)(d,2),E=p[0],g=p[1],v=Object(o.useState)(!0),_=Object(n.a)(v,2),O=_[0],h=_[1];return Object(o.useEffect)((function(){D((function(e,t){e?u(e):b(t)}))}),[]),Object(o.useEffect)((function(){K((function(e,t){e?u(e):g(t)}))}),[]),Object(o.useEffect)((function(){i&&h(!1),f.length>0&&E.length>0&&h(!1)}),[i,f.length,E.length]),Object(o.useEffect)((function(){O||t({fitbs:f,tags:E})}),[t,f,E,O]),O?r:a}var je=function(){var e=Object(o.useState)([]),t=Object(n.a)(e,2),a=t[0],r=t[1],c=Object(o.useState)([]),l=Object(n.a)(c,2),u=l[0],s=l[1];return i.a.createElement("div",{className:"flex flex-col font-serif items-center max-w-4xl mx-16 sm:mx-32 md:mx-32 lg:mx-32 xl:mx-auto"},i.a.createElement(Pe,{callback:function(e){var t=e.fitbs,a=e.tags;r(t),s(a)},loading:i.a.createElement(Oe,null)},i.a.createElement(p.a,null,i.a.createElement(d.c,null,i.a.createElement(d.a,{children:i.a.createElement(_e,{fitbs:a,tags:u}),exact:!0,path:"/:slug/:id"}),i.a.createElement(d.a,{children:i.a.createElement(Ae,{fitbs:a,tags:u}),exact:!0,path:"/:slug"}),i.a.createElement(d.a,{children:i.a.createElement(he,{fitbs:a,tags:u}),default:!0,path:"/"})))),i.a.createElement(J,{version:f.b}))},xe=a(102),Ne=a(103),ye="all",ke={name:ye,slug:ye};function we(e){var t=e.counter,a=e.filter,n=e.onClick,r=e.tag;return i.a.createElement("li",{className:"mx-1 my-1"},i.a.createElement(p.b,{to:"/".concat(r.slug)},i.a.createElement("button",{className:$()("focus:outline-none hover:bg-blue-700 px-4 rounded-full text-white",{"bg-blue-500":r.name!==a.name,"bg-blue-900":r.name===a.name}),"data-testid":r.name,onClick:function(){return n(r)},type:"button"},"".concat(r.name," (").concat(t,")"))))}var Ce=function(e){var t=e.filter,a=e.fitbs,n=e.onClick,r=e.tags,c=a.reduce((function(e,t){return t.tags.forEach((function(t){e[t]?e[t]+=1:e[t]=1})),e}),{});return i.a.createElement("ul",{className:"flex flex-wrap mb-4"},i.a.createElement(we,{counter:a.length,filter:t,onClick:n,tag:ke}),r.map((function(e){return c[e.id]&&i.a.createElement(we,{counter:c[e.id],filter:t,key:e.id,onClick:n,tag:e})})))};var Te=function(e){var t=e.filter,a=e.fitbs,n=e.onClick,r=e.tags;function c(){var e=Object(d.f)().id,c=r.find((function(t){return t.slug===e}));return c&&t!==c&&n(c),i.a.createElement(Ce,{filter:t,fitbs:a,onClick:n,tags:r})}return i.a.createElement(p.a,null,i.a.createElement(d.c,null,i.a.createElement(d.a,{path:"/:id",children:i.a.createElement(c,null)}),i.a.createElement(d.a,{path:"/",children:i.a.createElement(c,null)})))};var Ie=function(){var e=Object(o.useState)(),t=Object(n.a)(e,2),a=t[0],r=t[1],c=Object(o.useState)(ke),l=Object(n.a)(c,2),u=l[0],s=l[1],m=Object(o.useState)([]),b=Object(n.a)(m,2),d=b[0],p=b[1],E=Object(o.useState)([]),g=Object(n.a)(E,2),v=g[0],_=g[1],O=Object(o.useState)(!0),h=Object(n.a)(O,2),A=h[0],P=h[1];return Object(o.useEffect)((function(){D((function(e,t){e?r(e):p(t)}))}),[]),Object(o.useEffect)((function(){K((function(e,t){e?r(e):_(t)}))}),[]),Object(o.useEffect)((function(){a&&P(!1),d.length>0&&v.length>0&&P(!1)}),[a,d.length,v.length]),i.a.createElement("div",{className:"flex flex-col font-serif items-center max-w-4xl mx-16 sm:mx-32 md:mx-32 lg:mx-32 xl:mx-auto"},i.a.createElement("h1",{className:"font-bold my-8 text-4xl text-gray-900"},"TeamPrompts"),A?i.a.createElement(Ne.a,{className:"text-4xl",icon:xe.a,spin:!0}):a?i.a.createElement("pre",null,JSON.stringify(a,0,2)):i.a.createElement(i.a.Fragment,null,i.a.createElement(Te,{filter:u,fitbs:d,onClick:function(e){return s(e)},tags:v}),i.a.createElement("ul",null,d.filter((function(e){return u.name===ye?e:u.fitbs.includes(e.id)?e:null})).map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(de,{fitb:e}))})))),i.a.createElement(J,{version:f.b}))},Re=a(60);var Se=function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AIRTABLE_API_KEY:"keybZUBuHX3GWW9EQ",REACT_APP_AIRTABLE_APP_ID:"apphnkOs93OSLlbQ2",REACT_APP_AMPLITUDE_KEY:"b010096b3fd732578935eb8bfd7b1082",REACT_APP_GA_TRACKING_ID:"UA-154123858-1"}),t=e.NODE_ENV,a=e.REACT_APP_GA_TRACKING_ID;"development"!==t&&(Re.a.initialize(a),Re.a.pageview("/"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(256);var De=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AIRTABLE_API_KEY:"keybZUBuHX3GWW9EQ",REACT_APP_AIRTABLE_APP_ID:"apphnkOs93OSLlbQ2",REACT_APP_AMPLITUDE_KEY:"b010096b3fd732578935eb8bfd7b1082",REACT_APP_GA_TRACKING_ID:"UA-154123858-1"}),Le=De.NODE_ENV,Be=De.REACT_APP_AMPLITUDE_KEY;function Ke(){var e=Object(m.a)(X,M);return Object(n.a)(e,1)[0]===F?i.a.createElement(je,null):i.a.createElement(Ie,null)}s.a.render(i.a.createElement(r.AmplitudeProvider,{amplitudeInstance:l.a.getInstance(),apiKey:Be},i.a.createElement(r.Amplitude,null,(function(e){var t=e.logEvent;return Se(),t("hello ".concat(f.a," v").concat(f.b," ").concat(Le)),i.a.createElement(Ke,null)}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[104,1,2]]]);
//# sourceMappingURL=main.301b782a.chunk.js.map