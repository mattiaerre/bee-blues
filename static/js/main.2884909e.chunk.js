(this["webpackJsonpbee-blues"]=this["webpackJsonpbee-blues"]||[]).push([[0],{212:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(74),o=t.n(l),c=(t(82),t(22)),s=t(41),m=t(75),u=t.n(m),i={blanks:"blanks",examples:"examples",input:"input",prompts:"prompts"},p="________________",f="__BLANK__";var d=function(e){var a=e.mode,t=e.model,n=function(e,a){var t=a.examples,n=a.prompts,r=a.source,l=[];switch(e){case i.blanks:default:l=r.match(/__BLANK__/g).map((function(){return p}));break;case i.examples:l=t;break;case i.input:break;case i.prompts:l=n}return l}(a,t);return function(e,a,t){var n=a.slice().split(f),l=[];return n.forEach((function(a,n){if(l.push(a),t[n]){var o=r.a.createElement("span",{className:u()({"bg-blue-200":e===i.prompts,"bg-green-200":e===i.examples,"bg-yellow-200":e===i.blanks}),key:n},t[n]);l.push(o)}})),l}(a,t.source,n)};var b=function(e){var a=e.id,t=e.mode,n=e.onChange,l=e.value,o="".concat(a,"-").concat(l);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{checked:t===l,id:o,name:a,onChange:n,type:"radio",value:l}),r.a.createElement("label",{className:"ml-2",htmlFor:o},l))};var v=function(e){var a=e.id,t=e.model,l=Object(n.useState)(i.blanks),o=Object(c.a)(l,2),s=o[0],m=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement(d,{mode:s,model:t})),r.a.createElement("ul",{className:"p-4"},r.a.createElement("li",null,r.a.createElement(b,{id:a,mode:s,onChange:function(){return m(i.blanks)},value:i.blanks})),t.examples&&r.a.createElement("li",null,r.a.createElement(b,{id:a,mode:s,onChange:function(){return m(i.examples)},value:i.examples})),t.prompts&&r.a.createElement("li",null,r.a.createElement(b,{id:a,mode:s,onChange:function(){return m(i.prompts)},value:i.prompts}))))},h=t(76),E="Examples",g="FITB",_="ID",k="Prompts",x="Status",w="FITBs",y={active:"active"},N=new(t.n(h).a)({apiKey:"keybZUBuHX3GWW9EQ"}).base("apphnkOs93OSLlbQ2");var O=function(e){var a=[];N(w).select({sort:[{field:_,direction:"desc"}]}).eachPage((function(e,t){e.forEach((function(e){if(e.get(x)===y.active){var t=e.get(E)?JSON.parse(e.get(E)):void 0,n=e.get(k)?JSON.parse(e.get(k)):void 0;a.push({examples:t,prompts:n,source:e.get(g)})}})),t()}),(function(t){e(t,a)}))};var B=function(){var e=Object(n.useState)([]),a=Object(c.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){O((function(e,a){e?console.log("makeModels error:",e):l(a)}))}),[]),r.a.createElement("div",{className:"flex flex-col font-serif items-center mx-auto my-12 w-3/4"},r.a.createElement("h1",{className:"capitalize font-normal hover:font-bold text-4xl text-gray-900"},s.a),r.a.createElement("ul",null,t.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement(v,{id:a,model:e}))}))),r.a.createElement("small",{className:"font-normal hover:font-bold text-gray-700 text-sm"},"v",s.b))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},41:function(e){e.exports=JSON.parse('{"a":"bee-blues","b":"0.4.0"}')},77:function(e,a,t){e.exports=t(212)},82:function(e,a,t){}},[[77,1,2]]]);
//# sourceMappingURL=main.2884909e.chunk.js.map