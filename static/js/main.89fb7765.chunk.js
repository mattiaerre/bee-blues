(this["webpackJsonpteamprompts-app"]=this["webpackJsonpteamprompts-app"]||[]).push([[0],{104:function(e,t,a){e.exports=a(254)},22:function(e){e.exports=JSON.parse('{"a":"teamprompts-app","b":"0.19.0"}')},253:function(e,t,a){},254:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),i=a(93),c=a.n(i),s=a(94),l=a(17),u=a(14),m=a(22),p="active",f="asc",g="Author",b="desc",d="Examples",_="FITB",h="FITBs",v="ID",E="Name",w="Prompts",O="Status",y="Tags",A=a(95),N=a(96);var P=function(e){var t=e.get(d)?JSON.parse(e.get(d)):void 0,a=e.get(w)?JSON.parse(e.get(w)):void 0;return{author:N[e.get(g)],examples:t,id:e.id,prompts:a,source:e.get(_),tags:e.get(y)}},x=a(97),j=a.n(x),k=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AIRPLAIN_MODE:"off",REACT_APP_AIRTABLE_API_KEY:"keybZUBuHX3GWW9EQ",REACT_APP_AIRTABLE_APP_ID:"apphnkOs93OSLlbQ2",REACT_APP_AMPLITUDE_KEY:"b010096b3fd732578935eb8bfd7b1082",REACT_APP_GA_TRACKING_ID:"UA-154123858-1"}),L=k.REACT_APP_AIRTABLE_API_KEY,B=k.REACT_APP_AIRTABLE_APP_ID;var K=function(e){var t,a=e.callback,n=e.map,r=e.options,o=e.tableName;new j.a({apiKey:L}).base(B)(o).select(r).eachPage((function(e,a){t=e.map(n),a()}),(function(e){a(e,t)}))},T="off";var I=function(e,t){"on"===T?t(null,A):K({callback:t,map:P,options:e||{filterByFormula:"".concat(O,'="').concat(p,'"'),sort:[{field:v,direction:b}]},tableName:h})},S=a(98);var C=function(e){var t="\xe0\xe1\xe2\xe4\xe6\xe3\xe5\u0101\u0103\u0105\xe7\u0107\u010d\u0111\u010f\xe8\xe9\xea\xeb\u0113\u0117\u0119\u011b\u011f\u01f5\u1e27\xee\xef\xed\u012b\u012f\xec\u0142\u1e3f\xf1\u0144\u01f9\u0148\xf4\xf6\xf2\xf3\u0153\xf8\u014d\xf5\u0151\u1e55\u0155\u0159\xdf\u015b\u0161\u015f\u0219\u0165\u021b\xfb\xfc\xf9\xfa\u016b\u01d8\u016f\u0171\u0173\u1e83\u1e8d\xff\xfd\u017e\u017a\u017c\xb7/_,:;",a=new RegExp(t.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(a,(function(e){return"aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(t.indexOf(e))})).replace(/&/g,"-and-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")};var D=function(e){var t=e.get(E);return{fitbs:e.get(h),id:e.id,name:t,slug:C(t)}},R="off";var W=function(e){"on"===R?e(null,S):K({callback:e,map:D,options:{sort:[{field:E,direction:f}]},tableName:y})};var G=function(e){var t=e.version;return o.a.createElement("p",{className:"my-8"},o.a.createElement("small",{className:"font-normal text-gray-700 text-sm"},"v",t))};var H=function(e){var t=e.title;return o.a.createElement("h1",{className:"font-bold mb-8 mt-2 text-4xl text-gray-900"},t)},F=a(9),M=a.n(F),U={name:"all",slug:"all"},J=a(55),Q=a(99),X=a.n(Q),z=Object(r.createContext)();var V=function(e){var t=e.apiKey,a=e.children;return o.a.createElement(J.AmplitudeProvider,{amplitudeInstance:X.a.getInstance(),apiKey:t},o.a.createElement(J.Amplitude,null,(function(e){return o.a.createElement(z.Provider,{value:e},a)})))},Y=a(34);function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Z={name:m.a,nodeEnv:"production",version:m.b},$={properties:function(e){var t=e.counter,a=e.tag;return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(Object(a),!0).forEach((function(t){Object(Y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},Z,{collectionId:a.id,collectionName:a.name,loadTime:"TBD",promptsDisplayed:"TBD",promptsInCollection:t})},type:"view collection"};function ee(e){var t=e.counter,a=e.filter,n=e.tag,i=Object(r.useContext)(z).logEvent,c=$.properties,s=$.type;return o.a.createElement("li",{className:"mx-1 my-1"},o.a.createElement(l.b,{onClick:function(){i(s,c({counter:t,tag:n}))},to:"/".concat(n.slug)},o.a.createElement("button",{className:M()("capitalize focus:outline-none hover:bg-blue-700 px-4 rounded-full text-white",{"bg-blue-500":n.name!==a.name,"bg-blue-900":n.name===a.name}),"data-testid":n.name,type:"button"},"".concat(n.name," (").concat(t,")"))))}var te=function(e){var t=e.filter,a=e.fitbs,n=e.tags,r=a.reduce((function(e,t){return t.tags.forEach((function(t){e[t]?e[t]+=1:e[t]=1})),e}),{});return o.a.createElement("ul",{className:"flex flex-wrap mb-4"},o.a.createElement(ee,{counter:a.length,filter:t,tag:U}),n.map((function(e){return r[e.id]&&o.a.createElement(ee,{counter:r[e.id],filter:t,key:e.id,tag:e})})))},ae=a(102),ne={off:"off",on:"on"};var re=function(e){var t=e.id,a=e.onChange,n=e.value;return o.a.createElement("span",{className:"inline-block ml-3 relative",onClick:function(e){return e.stopPropagation()}},o.a.createElement("input",{checked:n===ne.on,className:"hidden","data-testid":t,id:t,onChange:function(){return a(n)},type:"checkbox"}),o.a.createElement("label",{className:"cursor-pointer",htmlFor:t},o.a.createElement("div",{className:"w-6 h-3 bg-gray-400 rounded-full shadow-inner"}),o.a.createElement("div",{className:M()("toggle__dot absolute w-4 h-4 bg-gray-300 rounded-full shadow inset-y-0 left-0",{"toggle__dot--checked":n===ne.on})})))},oe="________________",ie="____",ce="NONE",se="__BLANK__",le="TEAMPROMPTS_APP_EXPERIMENT",ue="UNKNOWN",me={blanks:"blanks",blanksXS:"blanksXS",examples:"examples",input:"input",prompts:"prompts"},pe={CategoryPage:"CategoryPage",HomePage:"HomePage",PromptsPage:"PromptsPage"},fe=a(103),ge=a.n(fe);function be(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var de="change";var _e=function(e,t){switch(t.type){case de:var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?be(Object(a),!0).forEach((function(t){Object(Y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):be(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e);return a[t.value.id]=t.value.value,a;default:return e}};var he=function(e){var t=e.dispatch,a=e.hint,n=e.id,r=e.value;return o.a.createElement("span",{className:"inline-flex flex-col leading-none","data-testid":"input-container",onClick:function(e){return e.stopPropagation()}},o.a.createElement(ge.a,{className:"self-center","data-testid":"input",inputClassName:M()({"bg-purple-100":r.length>0}),onChange:function(e){var a=e.target.value;t({type:de,value:{id:n,value:a}})},placeholder:oe,placeholderIsMinWidth:!0,value:r}),a!==oe&&o.a.createElement("label",{className:"self-center text-sm"},a))};var ve=function(e,t){var a=Object(r.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}})),o=Object(n.a)(a,2),i=o[0],c=o[1];return[i,function(t){try{var a=t instanceof Function?t(i):t;c(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]};var Ee=function(e){var t=e.build,a=e.source,n=e.values,r=a.slice().split(se),o=[];return r.forEach((function(e,a){o.push(e),n[a]&&o.push(t(a))})),o};function we(e){var t=e.blank,a=e.source.match(/__BLANK__/g);return a?a.map((function(){return t})):[]}var Oe=function(e,t){var a=t.examples,n=t.prompts,r=t.source,o=[],i=we({blank:oe,source:r});switch(e){case me.blanks:default:o=i;break;case me.blanksXS:o=we({blank:ie,source:r});break;case me.examples:o=a;break;case me.input:o=n||i;break;case me.prompts:o=n}return o};var ye=function(e){var t=e.match(/__BLANK__/g);return t?t.reduce((function(e,t,a){return e[a]="",e}),{}):{}};function Ae(e){var t=e.dispatch,a=e.mode,n=e.state,r=e.values;return function(e){return a===me.input?o.a.createElement(he,{dispatch:t,hint:r[e],id:e,key:e,value:n[e]}):o.a.createElement("span",{className:M()({"bg-yellow-200":a===me.blanks,"bg-green-200":a===me.examples,"bg-blue-200":a===me.prompts}),key:e},r[e])}}var Ne=function(e){var t=e.callback,a=e.fitb,o=e.mode,i=ve(a.id,ye(a.source)),c=Object(n.a)(i,2),s=c[0],l=c[1],u=Object(r.useReducer)((function(e,a){var n=_e(e,a);return t(n),l(n),n}),s),m=Object(n.a)(u,2),p=m[0],f=m[1],g=Oe(o,a);return Ee({build:Ae({dispatch:f,mode:o,state:p,values:g}),source:a.source,values:g})};function Pe(e){var t=e.inputs,a=e.mode,n=e.values;return function(e){return a===me.input?t&&t[e]?t[e]:oe:n[e]}}var xe=function(e){var t=e.fitb,a=e.inputs,n=e.mode,r=e.onClick;return o.a.createElement("button",{className:"bg-blue-500 focus:outline-none font-bold font-mono hover:bg-blue-700 ml-3 px-4 rounded-full text-xs text-white","data-testid":"copy-button",onClick:function(e){e.stopPropagation();var o=Oe(n,t),i=Ee({build:Pe({inputs:a,mode:n,values:o}),source:t.source,values:o});r(i.join(""))},type:"button"},"Copy to clipboard")};var je=function(e){var t=e.fitb,a=e.history,i=e.pageType,c=e.tag,s=Object(ae.useClipboard)(),l=Object(r.useState)(),u=Object(n.a)(l,2),m=u[0],p=u[1],f=Object(r.useState)(me.input),g=Object(n.a)(f,2),b=g[0],d=g[1];function _(){return i!==pe.PromptsPage&&a}return o.a.createElement("div",{className:M()("border-b border-gray-500 leading-loose mb-2 px-4",{"hover:bg-gray-100 cursor-pointer":_(),"py-8 shadow text-lg":i!==pe.PromptsPage,"bg-gray-100 pb-8 shadow-xl text-xl":i===pe.PromptsPage}),"data-testid":"container",onClick:function(){_()&&(c?a.push("/".concat(c.slug,"/").concat(t.id)):a.push("/all/".concat(t.id)))}},i===pe.PromptsPage&&o.a.createElement("div",{className:"text-right"},o.a.createElement("button",{className:"focus:outline-none text-right","data-testid":"go-to-category",onClick:function(){a&&(c?a.push("/".concat(c.slug)):a.push("/all"))}},"\xd7")),o.a.createElement(Ne,{callback:p,fitb:t,mode:b}),t.examples&&o.a.createElement(re,{id:t.id,onChange:function(e){e===ne.off&&d(me.examples),e===ne.on&&d(me.input)},value:b===me.examples?ne.on:ne.off}),o.a.createElement(xe,{fitb:t,inputs:m,mode:b,onClick:function(e){console.log(e),s.copy(e)}}),t.author&&o.a.createElement("div",{className:"italic text-indigo-700 text-right text-sm underline"},o.a.createElement("a",{href:"https://twitter.com/".concat(t.author.twitter),rel:"noopener noreferrer",target:"_blank"},"@".concat(t.author.twitter))))};var ke=function(e){var t=e.slug,a=e.tags;return a.length>0?a.find((function(e){return e.slug===t}))||U:{name:"",slug:""}};var Le=function(e){var t=e.fitbs,a=e.history,n=e.tags,r=Object(u.f)().slug,i=ke({slug:r,tags:n});return o.a.createElement(o.a.Fragment,null,o.a.createElement(H,{title:"TeamPrompts"}),o.a.createElement(te,{filter:{name:i.name},fitbs:t,tags:n}),o.a.createElement("ul",null,function(e){var t=e.fitbs,a=e.tag;return e.tags,t.filter((function(e){return e.tags.includes(a.id)}))}({fitbs:t,tag:i,tags:n}).map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(je,{fitb:e,history:a,tag:i}))}))))};var Be=function(e){var t=e.fitbs,a=e.history,n=e.tags;return o.a.createElement(o.a.Fragment,null,o.a.createElement(H,{title:"TeamPrompts"}),o.a.createElement(te,{filter:U,fitbs:t,tags:n}),o.a.createElement("ul",null,t.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(je,{fitb:e,history:a}))}))))};var Ke=function(){var e=Object(u.f)().id,t=Object(r.useState)(),a=Object(n.a)(t,2),i=a[0],c=a[1],s=Object(r.useState)(),l=Object(n.a)(s,2),m=l[0],p=l[1],f=Object(r.useState)(!0),g=Object(n.a)(f,2),b=g[0],d=g[1];return Object(r.useEffect)((function(){I({filterByFormula:"".concat(v,'="').concat(e,'"')},(function(e,t){e?c(e):p(t)}))}),[e]),Object(r.useEffect)((function(){i&&d(!1),m&&d(!1)}),[i,m]),o.a.createElement(o.a.Fragment,null,o.a.createElement(H,{title:"TeamPrompts"}),o.a.createElement("ul",null,!i&&!b&&m.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(je,{fitb:e}))})),!i&&!b&&0===m.length&&o.a.createElement("li",null,o.a.createElement("pre",null,"404"))),i&&o.a.createElement("pre",null,JSON.stringify(i,0,2)))};var Te=function(e){var t=e.fitbs,a=e.history,n=e.tags,r=Object(u.f)(),i=r.id,c=r.slug,s=ke({slug:c,tags:n}),l=t.find((function(e){return e.id===i}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(H,{title:"TeamPrompts"}),o.a.createElement(te,{filter:{name:s.name},fitbs:t,tags:n}),o.a.createElement("ul",null,l&&[l].map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(je,{fitb:e,history:a,pageType:pe.PromptsPage,tag:s}))}))))};function Ie(e){var t=e.callback,a=e.children,o=e.loading,i=Object(r.useState)(),c=Object(n.a)(i,2),s=c[0],l=c[1],u=Object(r.useState)([]),m=Object(n.a)(u,2),p=m[0],f=m[1],g=Object(r.useState)([]),b=Object(n.a)(g,2),d=b[0],_=b[1],h=Object(r.useState)(!0),v=Object(n.a)(h,2),E=v[0],w=v[1];return Object(r.useEffect)((function(){I(null,(function(e,t){e?l(e):f(t)}))}),[]),Object(r.useEffect)((function(){W((function(e,t){e?l(e):_(t)}))}),[]),Object(r.useEffect)((function(){s&&w(!1),p.length>0&&d.length>0&&w(!1)}),[s,p.length,d.length]),Object(r.useEffect)((function(){E||t(s,{fitbs:p,tags:d})}),[t,s,p,d,E]),E?o:a}var Se=function(){var e=Object(r.useState)(),t=Object(n.a)(e,2),a=t[0],i=t[1],c=Object(r.useState)([]),s=Object(n.a)(c,2),p=s[0],f=s[1],g=Object(r.useState)([]),b=Object(n.a)(g,2),d=b[0],_=b[1];return o.a.createElement("div",{className:"flex flex-col font-serif items-center max-w-4xl mx-16 sm:mx-32 md:mx-32 lg:mx-32 xl:mx-auto"},o.a.createElement(Ie,{callback:function(e,t){var a=t.fitbs,n=t.tags;e?i(e):(f(a),_(n))},loading:o.a.createElement(H,{title:"Loading ..."})},o.a.createElement(l.a,null,o.a.createElement(u.c,null,o.a.createElement(u.a,{children:function(e){return o.a.createElement(Te,Object.assign({},e,{fitbs:p,tags:d}))},exact:!0,path:"/all/:id"}),o.a.createElement(u.a,{children:o.a.createElement(Ke,null),exact:!0,path:"/preview/:id"}),o.a.createElement(u.a,{children:function(e){return o.a.createElement(Te,Object.assign({},e,{fitbs:p,tags:d}))},exact:!0,path:"/:slug/:id"}),o.a.createElement(u.a,{children:function(e){return o.a.createElement(Be,Object.assign({},e,{fitbs:p,tags:d}))},exact:!0,path:"/all"}),o.a.createElement(u.a,{children:function(e){return o.a.createElement(Le,Object.assign({},e,{fitbs:p,tags:d}))},exact:!0,path:"/:slug"}),o.a.createElement(u.a,{children:function(e){return o.a.createElement(Be,Object.assign({},e,{fitbs:p,tags:d}))},default:!0,path:"/"})))),a&&o.a.createElement("pre",null,JSON.stringify(a,0,2)),o.a.createElement(G,{version:m.b}))},Ce=a(58);var De=function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_AIRPLAIN_MODE:"off",REACT_APP_AIRTABLE_API_KEY:"keybZUBuHX3GWW9EQ",REACT_APP_AIRTABLE_APP_ID:"apphnkOs93OSLlbQ2",REACT_APP_AMPLITUDE_KEY:"b010096b3fd732578935eb8bfd7b1082",REACT_APP_GA_TRACKING_ID:"UA-154123858-1"}),t=e.NODE_ENV,a=e.REACT_APP_GA_TRACKING_ID;"development"!==t&&(Ce.a.initialize(a),Ce.a.pageview("/"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(253);c.a.render(o.a.createElement(V,{apiKey:"b010096b3fd732578935eb8bfd7b1082"},o.a.createElement((function(){De();var e=Object(s.a)(le,ce);return Object(n.a)(e,1)[0]===ue?o.a.createElement("div",null,"UNKNOWN"):o.a.createElement(Se,null)}),null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},95:function(e){e.exports=JSON.parse('[{"author":{"twitter":"HiredThought"},"examples":["limiting work in progress","it meant that at times people would have nothing to do","limiting WIP made it more possible to work on what was important"],"id":"recevUpbRFDbVHx7L","prompts":["aspect of how you work","reason","realization"],"source":"I used to find __BLANK__ to be highly counterintuitive. It seemed destined to fail because __BLANK__. I now see things differently. The big shift was realizing that __BLANK__.","tags":["recTqD26ElVvXKVad"]},{"examples":["increasing","speed of onboarding","increases","rate of overall adoption","their ability to see value earlier"],"id":"recglWG0JkW6S4z5T","prompts":["increasing/decreasing","some activity","increases/decreases","key performance metric, financial metric, etc.","factors, caveats, assumptions"],"source":"We believe that __BLANK__ __BLANK__ causes __BLANK__ in some __BLANK__. There are a number of assumptions/factors underpinning that causal relationship including __BLANK__.","tags":["recmdwXtLaj7hls73","rechbGc1FLmwxb9Hg"]},{"id":"recD5UagMbU0oW464","prompts":["some opportunity","some intervention","know/be more confident","some leading indicator","some approach to de-risking"],"source":"If you look at our near-time three month roadmap, you will see a number of bets. The riskiest bet, with the highest potential upside, is our bet to focus on __BLANK__ by trying to __BLANK__. We will __BLANK__ this was the right bet if we observe __BLANK__. We can actively de-risk this bet by __BLANK__.","tags":["recmdwXtLaj7hls73","rechbGc1FLmwxb9Hg"]},{"id":"recCWoOnmN4aEi5dT","prompts":["some sea-change in technology adoption and/or some shift in consumer behavior","fast/slower","forcing/allowing","some activity","forcing/allowing","some other activity"],"source":"The writing is on the wall about __BLANK__. What is unclear is timing. As a company, we are betting that this will occur __BLANK__ than expected, which will influence our strategy by __BLANK__ us to __BLANK__, and __BLANK__ us to __BLANK__.","tags":["recmdwXtLaj7hls73","rechbGc1FLmwxb9Hg"]},{"examples":["to add steps to the workflow","more customers completing the existing workflow"],"id":"recQ2jud83D1dCxr4","source":"To feel more confident about our decision to __BLANK__, I would like to observe __BLANK__.","tags":["recG0ANQWrp3SRvvY"]},{"examples":["spend too long deliberating over the behavior of the page filter"," test early with customers"],"id":"recrYoglrdF32klOv","source":"I\u2019m concerned that if we __BLANK__, we may miss the opportunity to __BLANK__.","tags":["rechbGc1FLmwxb9Hg"]},{"examples":["the commodification of storage","the rate of dropping costs","1) COGS would not drop as fast as we expect"],"id":"recm6xCbOJSJZ6jwY","prompts":["an assumption","that assumption","a list of ways"],"source":"We seem to be treating __BLANK__ as a foregone conclusion. I\u2019m not sure it is that simple. If we were proven wrong (or less right) about __BLANK__ , it would impact us in the following ways: __BLANK__  .","tags":["recmdwXtLaj7hls73"]},{"author":{"twitter":"mattiaerre"},"examples":["this amazing challenge"],"id":"recqeN7TDq4kdhFah","source":"To even know where to start, we would need to better understand __BLANK__.","tags":["recG0ANQWrp3SRvvY"]},{"author":{"twitter":"HiredThought"},"examples":["this huge problem we have","feel the wrath of all that has come before"],"id":"rec99C9lxMl6aSedq","source":"A danger of not resolving __BLANK__ now is that we will eventually __BLANK__.","tags":["recTqD26ElVvXKVad"]},{"examples":["how we perceive user onboarding","our projections might be off"],"id":"reckkQSV8NuHKOAHr","prompts":["some assumption","reason"],"source":"The weakest link in our mental model is __BLANK__. If we\u2019re off -- even by a little -- it could have a big impact on this initiative because __BLANK__.","tags":["rechbGc1FLmwxb9Hg"]},{"examples":["understand the EMEA customer persona","we haven\'t really made EMA a focus","we decide to shift into EMEA"],"id":"receM4Gus7HH43oLM","prompts":["an action","reason","new event"],"source":"We may be over-confident in our ability to __BLANK__. It hasn\u2019t really been a problem yet because __BLANK__, but it could become a problem in the future if __BLANK__.","tags":["recmdwXtLaj7hls73"]}]')},96:function(e){e.exports=JSON.parse('{"HiredThought":{"twitter":"HiredThought"},"mattiaerre":{"twitter":"mattiaerre"}}')},98:function(e){e.exports=JSON.parse('[{"fitbs":["recNsahDzKCx0IQPk"],"id":"recmdxpSo7MSWEg00","name":"1:1s","slug":"1-1s"},{"fitbs":["recQ2jud83D1dCxr4","recqeN7TDq4kdhFah"],"id":"recG0ANQWrp3SRvvY","name":"decision making","slug":"decision-making"},{"id":"recEZjB6WTnRt6aon","name":"interview","slug":"interview"},{"fitbs":["reckkQSV8NuHKOAHr","recBKiB7u7DLP6QPe","recrYoglrdF32klOv","recCWoOnmN4aEi5dT","recD5UagMbU0oW464","recglWG0JkW6S4z5T"],"id":"rechbGc1FLmwxb9Hg","name":"measurement","slug":"measurement"},{"fitbs":["recnGYhq8E9LeRPlW","recNsahDzKCx0IQPk"],"id":"recBxMIOsQqBhGSaQ","name":"product management","slug":"product-management"},{"fitbs":["rec99C9lxMl6aSedq","rec590aP1VRIE8f23","recNsahDzKCx0IQPk","recevUpbRFDbVHx7L"],"id":"recTqD26ElVvXKVad","name":"retrospectives","slug":"retrospectives"},{"id":"rec1f3sLCcKszXSi4","name":"reviewing decisions","slug":"reviewing-decisions"},{"fitbs":["receM4Gus7HH43oLM","recBKiB7u7DLP6QPe","recm6xCbOJSJZ6jwY","recCWoOnmN4aEi5dT","recD5UagMbU0oW464","recglWG0JkW6S4z5T"],"id":"recmdwXtLaj7hls73","name":"strategy","slug":"strategy"}]')}},[[104,1,2]]]);
//# sourceMappingURL=main.89fb7765.chunk.js.map