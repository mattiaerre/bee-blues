(this["webpackJsonpteamprompts-app"]=this["webpackJsonpteamprompts-app"]||[]).push([[0],{104:function(e,t,a){e.exports=a(257)},19:function(e){e.exports=JSON.parse('{"a":"teamprompts-app","b":"0.16.6"}')},256:function(e,t,a){},257:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(58),c=a(97),l=a.n(c),o=a(0),i=a.n(o),u=a(98),s=a.n(u),m=a(34),f=a(19),b=a(35),p=a(36),d=a(37),E=a(16),g=a(7),v="active",_="asc",O="Author",h="desc",A="Examples",x="FITB",P="FITBs",j="ID",N="Name",y="Prompts",k="Status",w="Tags";var C=function(e){var t=e.get(A)?JSON.parse(e.get(A)):void 0,a=e.get(y)?JSON.parse(e.get(y)):void 0;return{author:e.get(O),examples:t,id:e.id,prompts:a,source:e.get(x),tags:e.get(w)}},T=a(99),I=a.n(T),R=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AIRTABLE_API_KEY:"keybZUBuHX3GWW9EQ",REACT_APP_AIRTABLE_APP_ID:"apphnkOs93OSLlbQ2",REACT_APP_AMPLITUDE_KEY:"b010096b3fd732578935eb8bfd7b1082",REACT_APP_GA_TRACKING_ID:"UA-154123858-1"}),S=R.REACT_APP_AIRTABLE_API_KEY,D=R.REACT_APP_AIRTABLE_APP_ID;var L=function(e){var t,a=e.callback,n=e.map,r=e.options,c=e.tableName;new I.a({apiKey:S}).base(D)(c).select(r).eachPage((function(e,a){t=e.map(n),a()}),(function(e){a(e,t)}))};var B=function(e){L({callback:e,map:C,options:{filterByFormula:"".concat(k,'="').concat(v,'"'),sort:[{field:j,direction:h}]},tableName:P})};var K=function(e){var t="\xe0\xe1\xe2\xe4\xe6\xe3\xe5\u0101\u0103\u0105\xe7\u0107\u010d\u0111\u010f\xe8\xe9\xea\xeb\u0113\u0117\u0119\u011b\u011f\u01f5\u1e27\xee\xef\xed\u012b\u012f\xec\u0142\u1e3f\xf1\u0144\u01f9\u0148\xf4\xf6\xf2\xf3\u0153\xf8\u014d\xf5\u0151\u1e55\u0155\u0159\xdf\u015b\u0161\u015f\u0219\u0165\u021b\xfb\xfc\xf9\xfa\u016b\u01d8\u016f\u0171\u0173\u1e83\u1e8d\xff\xfd\u017e\u017a\u017c\xb7/_,:;",a=new RegExp(t.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(a,(function(e){return"aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(t.indexOf(e))})).replace(/&/g,"-and-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")};var U=function(e){var t=e.get(N);return{fitbs:e.get(P),id:e.id,name:t,slug:K(t)}};var G=function(e){L({callback:e,map:U,options:{sort:[{field:N,direction:_}]},tableName:w})},F="________________",M="____",W="MASTER_DETAIL_V1",Y="NONE",z="__BLANK__",X="TEAMPROMPTS_APP_EXPERIMENT",H={blanks:"blanks",blanksXS:"blanksXS",examples:"examples",input:"input",prompts:"prompts"},J="try",Q="leave";var V=function(e){var t=e.version,a=Object(m.a)(X,Y),r=Object(n.a)(a,2),c=r[0],l=r[1],u=Object(o.useState)(c===W?Q:J),s=Object(n.a)(u,2),f=s[0],b=s[1];return i.a.createElement("p",{className:"my-8"},i.a.createElement("small",{className:"font-normal text-gray-700 text-sm"},"v",t),i.a.createElement("button",{className:"bg-red-500 focus:outline-none font-bold font-mono hover:bg-red-700 ml-3 px-2 rounded text-sm text-white","data-testid":"copy-button",onClick:function(){f===J&&(l(W),b(Q),window.location.assign("/")),f===Q&&(l(Y),b(J),window.location.assign("/"))},type:"button"},"".concat(f," the \u03b2eta")))},Z=a(100),$=a(15),q=a.n($),ee={off:"off",on:"on"};var te=function(e){var t=e.id,a=e.onChange,n=e.value;return i.a.createElement("span",{className:"inline-block ml-3 relative"},i.a.createElement("input",{checked:n===ee.on,className:"hidden","data-testid":t,id:t,onChange:function(){return a(n)},type:"checkbox"}),i.a.createElement("label",{className:"cursor-pointer",htmlFor:t},i.a.createElement("div",{className:"w-6 h-3 bg-gray-400 rounded-full shadow-inner"}),i.a.createElement("div",{className:q()("toggle__dot absolute w-4 h-4 bg-gray-300 rounded-full shadow inset-y-0 left-0",{"toggle__dot--checked":n===ee.on})})))},ae=a(101),ne=a.n(ae);function re(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var ce="change";var le=function(e,t){switch(t.type){case ce:var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?re(Object(a),!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):re(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e);return a[t.value.id]=t.value.value,a;default:return e}};var oe=function(e){var t=e.dispatch,a=e.hint,n=e.id,r=e.value;return i.a.createElement("span",{className:"inline-flex flex-col leading-none"},i.a.createElement(ne.a,{className:"self-center","data-testid":"input",inputClassName:q()({"bg-purple-100":r.length>0}),onChange:function(e){var a=e.target.value;t({type:ce,value:{id:n,value:a}})},placeholder:F,placeholderIsMinWidth:!0,value:r}),a!==F&&i.a.createElement("label",{className:"self-center text-sm"},a))};var ie=function(e){var t=e.build,a=e.source,n=e.values,r=a.slice().split(z),c=[];return r.forEach((function(e,a){c.push(e),n[a]&&c.push(t({index:a}))})),c};function ue(e){var t=e.blank;return e.source.match(/__BLANK__/g).map((function(){return t}))}var se=function(e,t){var a=t.examples,n=t.prompts,r=t.source,c=[],l=ue({blank:F,source:r});switch(e){case H.blanks:default:c=l;break;case H.blanksXS:c=ue({blank:M,source:r});break;case H.examples:c=a;break;case H.input:c=n||l;break;case H.prompts:c=n}return c};var me=function(e){return e.match(/__BLANK__/g).reduce((function(e,t,a){return e[a]="",e}),{})};function fe(e){var t=e.dispatch,a=e.mode,n=e.state,r=e.values;return function(e){var c=e.index;return a===H.input?i.a.createElement(oe,{dispatch:t,hint:r[c],id:c,key:c,value:n[c]}):i.a.createElement("span",{className:q()({"bg-yellow-200":a===H.blanks,"bg-green-200":a===H.examples,"bg-blue-200":a===H.prompts}),key:c},r[c])}}var be=function(e){var t=e.callback,a=e.fitb,r=e.mode,c=Object(o.useReducer)((function(e,a){var n=le(e,a);return t(n),n}),me(a.source)),l=Object(n.a)(c,2),i=l[0],u=l[1],s=se(r,a);return ie({build:fe({dispatch:u,mode:r,state:i,values:s}),source:a.source,values:s})};function pe(e){var t=e.inputs,a=e.mode,n=e.values;return function(e){var r=e.index;return a===H.input?t&&t[r]?t[r]:F:n[r]}}var de=function(e){var t=e.fitb,a=e.inputs,n=e.mode,r=e.onClick;return i.a.createElement("button",{className:"bg-blue-500 focus:outline-none font-bold font-mono hover:bg-blue-700 ml-3 px-4 rounded-full text-sm text-white","data-testid":"copy-button",onClick:function(){var e=se(n,t),c=ie({build:pe({inputs:a,mode:n,values:e}),source:t.source,values:e});r(c.join(""))},type:"button"},"Ctrl+C")};var Ee=function(e){var t=e.fitb,a=Object(Z.useClipboard)(),r=Object(o.useState)(),c=Object(n.a)(r,2),l=c[0],u=c[1],s=Object(o.useState)(H.input),m=Object(n.a)(s,2),f=m[0],b=m[1];return i.a.createElement("div",{className:"border-b border-gray-500 leading-loose py-8 text-lg"},i.a.createElement(be,{callback:u,fitb:t,mode:f}),t.examples&&i.a.createElement(te,{id:t.id,onChange:function(e){e===ee.off&&b(H.examples),e===ee.on&&b(H.input)},value:f===H.examples?ee.on:ee.off}),i.a.createElement(de,{fitb:t,inputs:l,mode:f,onClick:function(e){console.log(e),a.copy(e)}}))};function ge(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var ve="Unknown";function _e(e){var t=e.slug,a=e.tags,n={name:"",slug:""};return a.length>0?a.find((function(e){return e.slug===t}))||function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(a),!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ge(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},n,{name:ve}):n}function Oe(){return i.a.createElement("h1",{className:"font-bold mb-8 mt-2 text-4xl text-gray-900"},"TeamPrompts")}function he(e){var t=e.fitbs,a=e.tags,n=Object(E.f)(),r=n.id,c=_e({slug:n.slug,tags:a}),l=t.find((function(e){return e.id===r}));return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"mt-2"},i.a.createElement(g.b,{className:"text-indigo-700 underline",to:"/"},"Home")," > ",i.a.createElement(g.b,{className:"capitalize text-indigo-700 underline",to:"/".concat(c.slug)},c.name)," > ",M),i.a.createElement(Oe,null),l&&i.a.createElement(i.a.Fragment,null,i.a.createElement(Ee,{fitb:l}),i.a.createElement("div",{className:"italic self-end text-sm"},l.author)))}function Ae(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"mt-2"},"\xa0"),i.a.createElement("h1",{className:"font-bold mb-8 mt-2 text-4xl text-gray-900"},"Loading ..."))}function xe(e){var t=e.fitbs,a=e.tags;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"mt-2"},"Home"),i.a.createElement(Oe,null),i.a.createElement("ul",null,function(e){var t=e.fitbs;return e.tags.reduce((function(e,a){if(a.fitbs){var n=!1;a.fitbs.forEach((function(e){t.find((function(t){return t.id===e}))&&(n=!0)})),n&&e.push(a)}return e}),[]).sort((function(e,t){return e.slug>t.slug?1:e.slug<t.slug?-1:0}))}({fitbs:t,tags:a}).map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(g.b,{className:"capitalize text-indigo-700 underline",to:"/".concat(e.slug)},e.name))}))))}function Pe(e){var t=e.fitbs,a=e.tags,n=_e({slug:Object(E.f)().slug,tags:a});return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"mt-2"},i.a.createElement(g.b,{className:"text-indigo-700 underline",to:"/"},"Home")," > ",i.a.createElement("span",{className:"capitalize"},n.name)),i.a.createElement(Oe,null),i.a.createElement("ul",null,function(e){var t=e.fitbs,a=e.tag;return e.tags,t.filter((function(e){return e.tags.includes(a.id)}))}({fitbs:t,tag:n,tags:a}).map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(Ee,{fitb:e}),i.a.createElement("div",{className:"italic text-right text-sm"},i.a.createElement("span",{className:"mr-2"},e.author),i.a.createElement(g.b,{className:"text-indigo-700 underline",to:"/".concat(n.slug,"/").concat(e.id)},i.a.createElement(d.a,{icon:p.b}))))}))))}function je(e){var t=e.callback,a=e.children,r=e.loading,c=Object(o.useState)(),l=Object(n.a)(c,2),i=l[0],u=l[1],s=Object(o.useState)([]),m=Object(n.a)(s,2),f=m[0],b=m[1],p=Object(o.useState)([]),d=Object(n.a)(p,2),E=d[0],g=d[1],v=Object(o.useState)(!0),_=Object(n.a)(v,2),O=_[0],h=_[1];return Object(o.useEffect)((function(){B((function(e,t){e?u(e):b(t)}))}),[]),Object(o.useEffect)((function(){G((function(e,t){e?u(e):g(t)}))}),[]),Object(o.useEffect)((function(){i&&h(!1),f.length>0&&E.length>0&&h(!1)}),[i,f.length,E.length]),Object(o.useEffect)((function(){O||t({fitbs:f,tags:E})}),[t,f,E,O]),O?r:a}var Ne=function(){var e=Object(o.useState)([]),t=Object(n.a)(e,2),a=t[0],r=t[1],c=Object(o.useState)([]),l=Object(n.a)(c,2),u=l[0],s=l[1];return i.a.createElement("div",{className:"flex flex-col font-serif items-center max-w-4xl mx-16 sm:mx-32 md:mx-32 lg:mx-32 xl:mx-auto"},i.a.createElement(je,{callback:function(e){var t=e.fitbs,a=e.tags;r(t),s(a)},loading:i.a.createElement(Ae,null)},i.a.createElement(g.a,null,i.a.createElement(E.c,null,i.a.createElement(E.a,{children:i.a.createElement(he,{fitbs:a,tags:u}),exact:!0,path:"/:slug/:id"}),i.a.createElement(E.a,{children:i.a.createElement(Pe,{fitbs:a,tags:u}),exact:!0,path:"/:slug"}),i.a.createElement(E.a,{children:i.a.createElement(xe,{fitbs:a,tags:u}),default:!0,path:"/"})))),i.a.createElement(V,{version:f.b}))},ye="all",ke={name:ye,slug:ye};function we(e){var t=e.counter,a=e.filter,n=e.onClick,r=e.tag;return i.a.createElement("li",{className:"mx-1 my-1"},i.a.createElement(g.b,{to:"/".concat(r.slug)},i.a.createElement("button",{className:q()("focus:outline-none hover:bg-blue-700 px-4 rounded-full text-white",{"bg-blue-500":r.name!==a.name,"bg-blue-900":r.name===a.name}),"data-testid":r.name,onClick:function(){return n(r)},type:"button"},"".concat(r.name," (").concat(t,")"))))}var Ce=function(e){var t=e.filter,a=e.fitbs,n=e.onClick,r=e.tags,c=a.reduce((function(e,t){return t.tags.forEach((function(t){e[t]?e[t]+=1:e[t]=1})),e}),{});return i.a.createElement("ul",{className:"flex flex-wrap mb-4"},i.a.createElement(we,{counter:a.length,filter:t,onClick:n,tag:ke}),r.map((function(e){return c[e.id]&&i.a.createElement(we,{counter:c[e.id],filter:t,key:e.id,onClick:n,tag:e})})))};var Te=function(e){var t=e.filter,a=e.fitbs,n=e.onClick,r=e.tags;function c(){var e=Object(E.f)().id,c=r.find((function(t){return t.slug===e}));return c&&t!==c&&n(c),i.a.createElement(Ce,{filter:t,fitbs:a,onClick:n,tags:r})}return i.a.createElement(g.a,null,i.a.createElement(E.c,null,i.a.createElement(E.a,{path:"/:id",children:i.a.createElement(c,null)}),i.a.createElement(E.a,{path:"/",children:i.a.createElement(c,null)})))};var Ie=function(){var e=Object(o.useState)(),t=Object(n.a)(e,2),a=t[0],r=t[1],c=Object(o.useState)(ke),l=Object(n.a)(c,2),u=l[0],s=l[1],m=Object(o.useState)([]),b=Object(n.a)(m,2),E=b[0],g=b[1],v=Object(o.useState)([]),_=Object(n.a)(v,2),O=_[0],h=_[1],A=Object(o.useState)(!0),x=Object(n.a)(A,2),P=x[0],j=x[1];return Object(o.useEffect)((function(){B((function(e,t){e?r(e):g(t)}))}),[]),Object(o.useEffect)((function(){G((function(e,t){e?r(e):h(t)}))}),[]),Object(o.useEffect)((function(){a&&j(!1),E.length>0&&O.length>0&&j(!1)}),[a,E.length,O.length]),i.a.createElement("div",{className:"flex flex-col font-serif items-center max-w-4xl mx-16 sm:mx-32 md:mx-32 lg:mx-32 xl:mx-auto"},i.a.createElement("h1",{className:"font-bold my-8 text-4xl text-gray-900"},"TeamPrompts"),P?i.a.createElement(d.a,{className:"text-4xl",icon:p.a,spin:!0}):a?i.a.createElement("pre",null,JSON.stringify(a,0,2)):i.a.createElement(i.a.Fragment,null,i.a.createElement(Te,{filter:u,fitbs:E,onClick:function(e){return s(e)},tags:O}),i.a.createElement("ul",null,E.filter((function(e){return u.name===ye?e:u.fitbs.includes(e.id)?e:null})).map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(Ee,{fitb:e}))})))),i.a.createElement(V,{version:f.b}))},Re=a(62);var Se=function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AIRTABLE_API_KEY:"keybZUBuHX3GWW9EQ",REACT_APP_AIRTABLE_APP_ID:"apphnkOs93OSLlbQ2",REACT_APP_AMPLITUDE_KEY:"b010096b3fd732578935eb8bfd7b1082",REACT_APP_GA_TRACKING_ID:"UA-154123858-1"}),t=e.NODE_ENV,a=e.REACT_APP_GA_TRACKING_ID;"development"!==t&&(Re.a.initialize(a),Re.a.pageview("/"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(256);var De=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AIRTABLE_API_KEY:"keybZUBuHX3GWW9EQ",REACT_APP_AIRTABLE_APP_ID:"apphnkOs93OSLlbQ2",REACT_APP_AMPLITUDE_KEY:"b010096b3fd732578935eb8bfd7b1082",REACT_APP_GA_TRACKING_ID:"UA-154123858-1"}),Le=De.NODE_ENV,Be=De.REACT_APP_AMPLITUDE_KEY;function Ke(){var e=Object(m.a)(X,Y);return Object(n.a)(e,1)[0]===W?i.a.createElement(Ne,null):i.a.createElement(Ie,null)}s.a.render(i.a.createElement(r.AmplitudeProvider,{amplitudeInstance:l.a.getInstance(),apiKey:Be},i.a.createElement(r.Amplitude,null,(function(e){var t=e.logEvent;return Se(),t("hello ".concat(f.a," v").concat(f.b," ").concat(Le)),i.a.createElement(Ke,null)}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[104,1,2]]]);
//# sourceMappingURL=main.476fdaa0.chunk.js.map