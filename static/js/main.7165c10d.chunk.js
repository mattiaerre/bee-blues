(this["webpackJsonpteamprompts-app"]=this["webpackJsonpteamprompts-app"]||[]).push([[0],{101:function(e,t,a){e.exports=a(251)},22:function(e){e.exports=JSON.parse('{"a":"teamprompts-app","b":"0.16.15"}')},250:function(e,t,a){},251:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(55),c=a(93),l=a.n(c),o=a(0),i=a.n(o),u=a(94),s=a.n(u),m=a(34),f=a(22),b=a(19),p=a(14),g="active",d="asc",E="Author",v="desc",_="Examples",P="FITB",h="FITBs",A="ID",O="Name",y="Prompts",N="Status",x="Tags",j="________________",k="____",C="MASTER_DETAIL_V1",I="NONE",T="__BLANK__",R="TEAMPROMPTS_APP_EXPERIMENT",w="UNKNOWN",S={blanks:"blanks",blanksXS:"blanksXS",examples:"examples",input:"input",prompts:"prompts"},L={CategoryPage:"CategoryPage",HomePage:"HomePage",PromptsPage:"PromptsPage"},D={examples:["San Jose"],id:"receM4Gus7HH43oLM",prompts:["place"],source:"Do you know the way to ".concat(T,"?"),tags:["recTqD26ElVvXKVad"]};var B=function(e){var t=e.get(_)?JSON.parse(e.get(_)):void 0,a=e.get(y)?JSON.parse(e.get(y)):void 0;return{author:e.get(E),examples:t,id:e.id,prompts:a,source:e.get(P),tags:e.get(x)}},K=a(95),U=a.n(K),M=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AIRPLAIN_MODE:"off",REACT_APP_AIRTABLE_API_KEY:"keybZUBuHX3GWW9EQ",REACT_APP_AIRTABLE_APP_ID:"apphnkOs93OSLlbQ2",REACT_APP_AMPLITUDE_KEY:"b010096b3fd732578935eb8bfd7b1082",REACT_APP_GA_TRACKING_ID:"UA-154123858-1"}),G=M.REACT_APP_AIRTABLE_API_KEY,V=M.REACT_APP_AIRTABLE_APP_ID;var W=function(e){var t,a=e.callback,n=e.map,r=e.options,c=e.tableName;new U.a({apiKey:G}).base(V)(c).select(r).eachPage((function(e,a){t=e.map(n),a()}),(function(e){a(e,t)}))},F="off";var H=function(e){"on"===F?e(null,[D]):W({callback:e,map:B,options:{filterByFormula:"".concat(N,'="').concat(g,'"'),sort:[{field:A,direction:v}]},tableName:h})},J={fitbs:["receM4Gus7HH43oLM","rec99C9lxMl6aSedq","rec590aP1VRIE8f23","recNsahDzKCx0IQPk"],id:"recTqD26ElVvXKVad",name:"retrospectives",slug:"retrospectives"};var X=function(e){var t="\xe0\xe1\xe2\xe4\xe6\xe3\xe5\u0101\u0103\u0105\xe7\u0107\u010d\u0111\u010f\xe8\xe9\xea\xeb\u0113\u0117\u0119\u011b\u011f\u01f5\u1e27\xee\xef\xed\u012b\u012f\xec\u0142\u1e3f\xf1\u0144\u01f9\u0148\xf4\xf6\xf2\xf3\u0153\xf8\u014d\xf5\u0151\u1e55\u0155\u0159\xdf\u015b\u0161\u015f\u0219\u0165\u021b\xfb\xfc\xf9\xfa\u016b\u01d8\u016f\u0171\u0173\u1e83\u1e8d\xff\xfd\u017e\u017a\u017c\xb7/_,:;",a=new RegExp(t.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(a,(function(e){return"aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(t.indexOf(e))})).replace(/&/g,"-and-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")};var Y=function(e){var t=e.get(O);return{fitbs:e.get(h),id:e.id,name:t,slug:X(t)}},Q="off";var z=function(e){"on"===Q?e(null,[J]):W({callback:e,map:Y,options:{sort:[{field:O,direction:d}]},tableName:x})},q="try",Z="leave";var $=function(e){var t=e.version,a=Object(m.a)(R,I),r=Object(n.a)(a,2),c=r[0],l=(r[1],Object(o.useState)(c===C?Z:q)),u=Object(n.a)(l,2);return u[0],u[1],i.a.createElement("p",{className:"my-8"},i.a.createElement("small",{className:"font-normal text-gray-700 text-sm"},"v",t),!1)};var ee=function(e){var t=e.title;return i.a.createElement("h1",{className:"font-bold mb-8 mt-2 text-4xl text-gray-900"},t,!1)},te=a(9),ae=a.n(te),ne={name:"all",slug:"all"};function re(e){var t=e.counter,a=e.filter,n=e.onClick,r=e.tag;return i.a.createElement("li",{className:"mx-1 my-1"},i.a.createElement(b.b,{to:"/".concat(r.slug)},i.a.createElement("button",{className:ae()("focus:outline-none hover:bg-blue-700 px-4 rounded-full text-white",{"bg-blue-500":r.name!==a.name,"bg-blue-900":r.name===a.name}),"data-testid":r.name,onClick:function(){return n(r)},type:"button"},"".concat(r.name," (").concat(t,")"))))}var ce=function(e){var t=e.filter,a=e.fitbs,n=e.onClick,r=e.tags,c=a.reduce((function(e,t){return t.tags.forEach((function(t){e[t]?e[t]+=1:e[t]=1})),e}),{});return i.a.createElement("ul",{className:"flex flex-wrap mb-4"},i.a.createElement(re,{counter:a.length,filter:t,onClick:n,tag:ne}),r.map((function(e){return c[e.id]&&i.a.createElement(re,{counter:c[e.id],filter:t,key:e.id,onClick:n,tag:e})})))},le=a(98),oe={off:"off",on:"on"};var ie=function(e){var t=e.id,a=e.onChange,n=e.value;return i.a.createElement("span",{className:"inline-block ml-3 relative"},i.a.createElement("input",{checked:n===oe.on,className:"hidden","data-testid":t,id:t,onChange:function(){return a(n)},type:"checkbox"}),i.a.createElement("label",{className:"cursor-pointer",htmlFor:t},i.a.createElement("div",{className:"w-6 h-3 bg-gray-400 rounded-full shadow-inner"}),i.a.createElement("div",{className:ae()("toggle__dot absolute w-4 h-4 bg-gray-300 rounded-full shadow inset-y-0 left-0",{"toggle__dot--checked":n===oe.on})})))},ue=a(99),se=a.n(ue),me=a(100);function fe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var be="change";var pe=function(e,t){switch(t.type){case be:var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(a),!0).forEach((function(t){Object(me.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):fe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e);return a[t.value.id]=t.value.value,a;default:return e}};var ge=function(e){var t=e.dispatch,a=e.hint,n=e.id,r=e.value;return i.a.createElement("span",{className:"inline-flex flex-col leading-none"},i.a.createElement(se.a,{className:"self-center","data-testid":"input",inputClassName:ae()({"bg-purple-100":r.length>0}),onChange:function(e){var a=e.target.value;t({type:be,value:{id:n,value:a}})},placeholder:j,placeholderIsMinWidth:!0,value:r}),a!==j&&i.a.createElement("label",{className:"self-center text-sm"},a))};var de=function(e,t){var a=Object(o.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}})),r=Object(n.a)(a,2),c=r[0],l=r[1];return[c,function(t){try{var a=t instanceof Function?t(c):t;l(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]};var Ee=function(e){var t=e.build,a=e.source,n=e.values,r=a.slice().split(T),c=[];return r.forEach((function(e,a){c.push(e),n[a]&&c.push(t({index:a}))})),c};function ve(e){var t=e.blank;return e.source.match(/__BLANK__/g).map((function(){return t}))}var _e=function(e,t){var a=t.examples,n=t.prompts,r=t.source,c=[],l=ve({blank:j,source:r});switch(e){case S.blanks:default:c=l;break;case S.blanksXS:c=ve({blank:k,source:r});break;case S.examples:c=a;break;case S.input:c=n||l;break;case S.prompts:c=n}return c};var Pe=function(e){return e.match(/__BLANK__/g).reduce((function(e,t,a){return e[a]="",e}),{})};function he(e){var t=e.dispatch,a=e.mode,n=e.state,r=e.values;return function(e){var c=e.index;return a===S.input?i.a.createElement(ge,{dispatch:t,hint:r[c],id:c,key:c,value:n[c]}):i.a.createElement("span",{className:ae()({"bg-yellow-200":a===S.blanks,"bg-green-200":a===S.examples,"bg-blue-200":a===S.prompts}),key:c},r[c])}}var Ae=function(e){var t=e.callback,a=e.fitb,r=e.mode,c=de(a.id,Pe(a.source)),l=Object(n.a)(c,2),i=l[0],u=l[1],s=Object(o.useReducer)((function(e,a){var n=pe(e,a);return t(n),u(n),n}),i),m=Object(n.a)(s,2),f=m[0],b=m[1],p=_e(r,a);return Ee({build:he({dispatch:b,mode:r,state:f,values:p}),source:a.source,values:p})};function Oe(e){var t=e.inputs,a=e.mode,n=e.values;return function(e){var r=e.index;return a===S.input?t&&t[r]?t[r]:j:n[r]}}var ye=function(e){var t=e.fitb,a=e.inputs,n=e.mode,r=e.onClick;return i.a.createElement("button",{className:"bg-blue-500 focus:outline-none font-bold font-mono hover:bg-blue-700 ml-3 px-4 rounded-full text-sm text-white","data-testid":"copy-button",onClick:function(){var e=_e(n,t),c=Ee({build:Oe({inputs:a,mode:n,values:e}),source:t.source,values:e});r(c.join(""))},type:"button"},"Ctrl+C")};var Ne=function(e){var t=e.fitb,a=e.history,r=e.pageType,c=e.tag,l=Object(le.useClipboard)(),u=Object(o.useState)(),s=Object(n.a)(u,2),m=s[0],f=s[1],b=Object(o.useState)(S.input),p=Object(n.a)(b,2),g=p[0],d=p[1];function E(){return r!==L.PromptsPage&&a}return i.a.createElement("div",{className:ae()("border-b border-gray-500 leading-loose mb-2 px-4",{"hover:bg-gray-100 cursor-pointer":E()," py-8 shadow text-lg":r!==L.PromptsPage,"bg-pink-100  pb-8 shadow-xl text-xl":r===L.PromptsPage}),onClick:function(){E()&&(c?a.push("/".concat(c.slug,"/").concat(t.id)):a.push("/all/".concat(t.id)))}},r===L.PromptsPage&&i.a.createElement("div",{className:"text-right"},i.a.createElement("button",{className:"text-right",onClick:function(){a&&(c?a.push("/".concat(c.slug)):a.push("/all"))}},"\xd7")),i.a.createElement(Ae,{callback:f,fitb:t,mode:g}),t.examples&&i.a.createElement(ie,{id:t.id,onChange:function(e){e===oe.off&&d(S.examples),e===oe.on&&d(S.input)},value:g===S.examples?oe.on:oe.off}),i.a.createElement(ye,{fitb:t,inputs:m,mode:g,onClick:function(e){console.log(e),l.copy(e)}}))};var xe=function(e){var t=e.slug,a=e.tags;return a.length>0?a.find((function(e){return e.slug===t}))||ne:{name:"",slug:""}};var je=function(e){var t=e.fitbs,a=e.history,n=e.tags,r=Object(p.f)().slug,c=xe({slug:r,tags:n});return i.a.createElement(i.a.Fragment,null,i.a.createElement(ee,{title:"TeamPrompts"}),i.a.createElement(ce,{filter:{name:c.name},fitbs:t,onClick:function(){},tags:n}),i.a.createElement("ul",null,function(e){var t=e.fitbs,a=e.tag;return e.tags,t.filter((function(e){return e.tags.includes(a.id)}))}({fitbs:t,tag:c,tags:n}).map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(Ne,{fitb:e,history:a,tag:c}))}))))};var ke=function(e){var t=e.fitbs,a=e.history,n=e.tags;return i.a.createElement(i.a.Fragment,null,i.a.createElement(ee,{title:"TeamPrompts"}),i.a.createElement(ce,{filter:ne,fitbs:t,onClick:function(){},tags:n}),i.a.createElement("ul",null,t.map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(Ne,{fitb:e,history:a}))}))))};var Ce=function(e){var t=e.fitbs,a=e.history,n=e.tags,r=Object(p.f)(),c=r.id,l=r.slug,o=xe({slug:l,tags:n}),u=t.find((function(e){return e.id===c}));return i.a.createElement(i.a.Fragment,null,i.a.createElement(ee,{title:"TeamPrompts"}),i.a.createElement(ce,{filter:{name:o.name},fitbs:t,onClick:function(){},tags:n}),i.a.createElement("ul",null,u&&[u].map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement(Ne,{fitb:e,history:a,pageType:L.PromptsPage,tag:o}))}))))};function Ie(e){var t=e.callback,a=e.children,r=e.loading,c=Object(o.useState)(),l=Object(n.a)(c,2),i=l[0],u=l[1],s=Object(o.useState)([]),m=Object(n.a)(s,2),f=m[0],b=m[1],p=Object(o.useState)([]),g=Object(n.a)(p,2),d=g[0],E=g[1],v=Object(o.useState)(!0),_=Object(n.a)(v,2),P=_[0],h=_[1];return Object(o.useEffect)((function(){H((function(e,t){e?u(e):b(t)}))}),[]),Object(o.useEffect)((function(){z((function(e,t){e?u(e):E(t)}))}),[]),Object(o.useEffect)((function(){i&&h(!1),f.length>0&&d.length>0&&h(!1)}),[i,f.length,d.length]),Object(o.useEffect)((function(){P||t(i,{fitbs:f,tags:d})}),[t,i,f,d,P]),P?r:a}var Te=function(){var e=Object(o.useState)(),t=Object(n.a)(e,2),a=t[0],r=t[1],c=Object(o.useState)([]),l=Object(n.a)(c,2),u=l[0],s=l[1],m=Object(o.useState)([]),g=Object(n.a)(m,2),d=g[0],E=g[1];return i.a.createElement("div",{className:"flex flex-col font-serif items-center max-w-4xl mx-16 sm:mx-32 md:mx-32 lg:mx-32 xl:mx-auto"},i.a.createElement(Ie,{callback:function(e,t){var a=t.fitbs,n=t.tags;e?r(e):(s(a),E(n))},loading:i.a.createElement(i.a.Fragment,null,i.a.createElement(ee,{title:"Loading ..."}))},i.a.createElement(b.a,null,i.a.createElement(p.c,null,i.a.createElement(p.a,{children:function(e){return i.a.createElement(Ce,Object.assign({},e,{fitbs:u,tags:d}))},exact:!0,path:"/all/:id"}),i.a.createElement(p.a,{children:function(e){return i.a.createElement(Ce,Object.assign({},e,{fitbs:u,tags:d}))},exact:!0,path:"/:slug/:id"}),i.a.createElement(p.a,{children:function(e){return i.a.createElement(ke,Object.assign({},e,{fitbs:u,tags:d}))},exact:!0,path:"/all"}),i.a.createElement(p.a,{children:function(e){return i.a.createElement(je,Object.assign({},e,{fitbs:u,tags:d}))},exact:!0,path:"/:slug"}),i.a.createElement(p.a,{children:function(e){return i.a.createElement(ke,Object.assign({},e,{fitbs:u,tags:d}))},default:!0,path:"/"})))),a&&i.a.createElement("pre",null,JSON.stringify(a,0,2)),i.a.createElement($,{version:f.b}))},Re=a(58);var we=function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AIRPLAIN_MODE:"off",REACT_APP_AIRTABLE_API_KEY:"keybZUBuHX3GWW9EQ",REACT_APP_AIRTABLE_APP_ID:"apphnkOs93OSLlbQ2",REACT_APP_AMPLITUDE_KEY:"b010096b3fd732578935eb8bfd7b1082",REACT_APP_GA_TRACKING_ID:"UA-154123858-1"}),t=e.NODE_ENV,a=e.REACT_APP_GA_TRACKING_ID;"development"!==t&&(Re.a.initialize(a),Re.a.pageview("/"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(250);var Se=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AIRPLAIN_MODE:"off",REACT_APP_AIRTABLE_API_KEY:"keybZUBuHX3GWW9EQ",REACT_APP_AIRTABLE_APP_ID:"apphnkOs93OSLlbQ2",REACT_APP_AMPLITUDE_KEY:"b010096b3fd732578935eb8bfd7b1082",REACT_APP_GA_TRACKING_ID:"UA-154123858-1"}),Le=Se.NODE_ENV,De=Se.REACT_APP_AMPLITUDE_KEY;function Be(){var e=Object(m.a)(R,I);return Object(n.a)(e,1)[0]===w?i.a.createElement("div",null,"UNKNOWN"):i.a.createElement(Te,null)}s.a.render(i.a.createElement(r.AmplitudeProvider,{amplitudeInstance:l.a.getInstance(),apiKey:De},i.a.createElement(r.Amplitude,null,(function(e){var t=e.logEvent;return we(),t("hello ".concat(f.a," v").concat(f.b," ").concat(Le)),i.a.createElement(Be,null)}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[101,1,2]]]);
//# sourceMappingURL=main.7165c10d.chunk.js.map