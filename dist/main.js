!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";{const t={get_prefix:function(){const e=window.getComputedStyle(document.documentElement,"");return(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||""===e.OLink&&["","o"])[1]}};e.exports=t}},function(e,t,n){"use strict";{const t=n(2),c=new Set(["A","BUTTON"]),l={run:function(){console.log("Running tests...");const e=new Set,n=new Set;let l=[];document.addEventListener("click",e=>{"negate"==e.target.id?l.forEach(e=>{e.style.filter="none",e.style.background="none"}):"any_mode"==e.target.id?t.any_mode=e.target.checked:c.has(e.target.tagName)&&e.preventDefault()}),document.addEventListener("mouseup",c=>{if("generalize"==c.target.id){if(!a(n,e,l)){t.any_mode?t.any_mode=!1:t.any_mode=!0;if(!a(n,e,l))return console.log("Test result? false"),void s(n,e,l)}console.log("Test result? true"),s(n,e,l)}else if("clear"==c.target.id)Array.from(n).forEach(e=>{e.closest("#testcontrols")||(e.style.outline="none")}),Array.from(e).forEach(e=>{e.closest("#testcontrols")||(e.style.outline="none")}),l.forEach(e=>{e.closest("#testcontrols")||(e.style.filter="none",e.style.background="none")}),e.clear(),n.clear(),negate.checked=!1,found_count.innerText="n/a",r(positive_example_count),r(negative_example_count),generalized_selector.innerText="n/a";else{if(!(c.target instanceof HTMLElement)||c.target.matches("article#testcontrols, article#testcontrols *"))return;if(c.target.closest("#testcontrols"))return;negate.checked?(n.has(c.target)&&n.delete(c.target),e.has(c.target)||(e.add(c.target),o(negative_example_count))):(e.has(c.target)&&e.delete(c.target),n.has(c.target)||(n.add(c.target),o(positive_example_count))),c.target.style&&(negate.checked?c.target.style.outline="2px solid red":c.target.style.outline="2px solid lime")}})}};function o(e){const t=parseFloat(e.innerText);e.innerText=t+1}function r(e){e.innerText=0}function s(e,t,n){Array.from(e).forEach(e=>{e.closest("#testcontrols")||(e.style.outline="3px dashed lime")}),Array.from(t).forEach(e=>{e.closest("#testcontrols")||(e.style.outline="3px dashed red")}),n.forEach(e=>{e.closest("#testcontrols")||(e.style.filter="sepia(1)",e.style.background="lime")})}function a(e,n,o){const r=[...e].map(e=>t.get_canonical_sel(e)),s=[...n].map(e=>t.get_canonical_sel(e)),{positive:a,negative:c}=t.generalize(r,s,!0);generalized_selector.innerText=`${a} !(${c})`||"n/a",o.forEach(e=>{e.style.filter="none",e.style.background="none"});try{o.length=0,o.push(...Array.from(document.querySelectorAll(a)))}catch(e){console.warn(" Error on query selector",e),console.warn("Note, MS Edge and IE do not support ':matches' or ':any' as of the time I wrote this code, August 16 2017")}if(c){const e=new Set(Array.from(document.querySelectorAll(c)));Array.from(o);o.length=0,o.push(...o.filter(t=>!e.has(t)))}found_count.innerText=o.length;return function(e,t,n){t=new Set(t);const o=[...e].every(e=>t.has(e)),r=[...n].every(e=>!t.has(e));return o&&r}(e,o,n)}e.exports=l,Object.assign(self,{test:l})}},function(e,t,n){"use strict";{const t=n(3),r={generalize:function(e,n,r){const s=function(e,n,r=!1){let s,a;if(r)s=e.map(e=>t.path_from_sel(e)),a=n.map(e=>t.path_from_sel(e));else{const r=e.map(e=>o(e)?e:document.querySelector(e)),c=n.map(e=>o(e)?e:document.querySelector(e));s=r.map(e=>t.get_canonical_path(e).canonical),a=c.map(e=>t.get_canonical_path(e).canonical)}const c=t.basic_multiple_lcs_from_canonical_path_list(s),l=t.basic_multiple_lcs_from_canonical_path_list(a);return{p_basic:c,n_basic:l}}(e,n,r),a=t.selector_from_canonical_path(s.p_basic||[]),c=t.selector_from_canonical_path(s.n_basic||[]);return{positive:a,negative:c}},lcs_from_sel_pair:t.lcs_from_canonical_sel_pair,get_canonical_sel:function(e){return t.selector_from_canonical_path(t.get_canonical_path(e).canonical)},sel_from_path:t.selector_from_canonical_path,set any_mode(e){t.any_mode=e}};function o(e){return e instanceof HTMLElement}e.exports=r}},function(e,t,n){"use strict";{const t=n(4),f=1e4,d=/(\.[^#\.:]+)/g,g=/#([^#\.:]+)/g,_=/^([^#\.:]+)/g,m=/:\w+\(\s*([^\)]+)\s*\)/g,p=/(:nth-of-type\([^)]*\))/g;let h,y=2;const x={any_mode:!1,get_canonical_path(e){const t=[];let n=s();for(;e&&"HTML"!=e.tagName;){if(!e.parentNode&&e.host){const n={};n["TAG:"+(e=e.host).tagName+"::shadow"]=1,t.unshift(n)}else{const r={tags:new Set,geometry:new Set,classes:new Set,ids:new Set};let s,a="";if(e.parentNode){let t=0;const n=Array.from(e.parentNode.childNodes);for(const o of n)if(o.tagName==e.tagName&&(t+=1),o===e){a=`:nth-of-type(${t})`;break}}e.id&&e.id.length>0&&r.ids.add(e.id);try{s=e.getAttribute("class")}catch(t){s=e.className}if("string"!=typeof s)try{s=Array.from(e.classList)}catch(e){s=[]}else s=s.split(/\s+/);s.forEach(e=>{e.length>0&&r.classes.add("."+o(e))}),r.tags.add(e.tagName),r.geometry.add(a),r.code=n,n+=1,t.unshift(r)}e=e.parentNode}return{canonical:t}},path_from_sel(e){const t=e.split(/\s*>\s*/g),n=[];let a=s();for(const e of t){const t={tags:new Set,geometry:new Set,classes:new Set,ids:new Set},s=new Set(r(d,e).map(e=>o(e)));let c=r(m,e)[0];c=c?new Set(c.split(/\s*,\s*/g)):new Set;const l=r(_,e)[0],i=o(r(g,e)[0]||""),u=r(p,e)[0];t.classes=s,t.tags=c,l&&(0==c.size||"*"!==l)&&t.tags.add(l),i&&t.ids.add(i),u&&t.geometry.add(u),t.code=a,a-=1,n.push(t)}return n},lcs_from_canonical_sel_pair:(e,t)=>u(x.path_from_sel(e),x.path_from_sel(t)).value,selector_from_canonical_path(e){if(h=h||n(0).get_prefix(),0==(e=Array.from(e)).length)return"";const t=[];let r=e[0];for(let t=1;t<e.length;t++){const n=e[t];1==a(r,n)&&e.splice(t,0,{">":1}),r=n}e.forEach(e=>{if(e[">"]){return void(">"!==t[t.length-1]&&t.push(">"))}const{tags:n,classes:r,ids:s,geometry:a}=e;let c="";x.any_mode&&n.size>1?c+=`:-${h}-any(${[...n].join(",")})`:c+=""+[...n].join(","),s.size&&(c+="#"+[...s].map(e=>o(e)).join("#")),r.size&&(c+=""+[...r].map(e=>o(e)).join("")),a.size&&(c+=""+[...a].join("")),c&&t.push(c)});return t.join(" ")},basic_multiple_lcs_from_canonical_path_list(e){if(0==e.length)return[];let t,n=e[0];for(let o=1;o<e.length;o+=1){t=e[o];const r=u(t,n);r&&(n=r.value)}return n}};function o(e){return Number.isInteger(parseInt(e))&&parseInt(e).toString()==e?"\\"+(e=e.split("").map(e=>e.charCodeAt(0).toString(16)).join("\\")):e.replace(/\\\\([\[\]])/,"$1").replace(/([\[\]])/g,"\\$1").replace(/\\(\d\d)/g,"\\\\$1")}function r(e,t){const n=[];let o;for(;o=e.exec(t);)n.push(o[1]);return n}function s(){return y+=f,y}function a(e,n){return t.get_code(e)-t.get_code(n)}function c(e,t){const{xcode:n,ycode:o}=e;return[n-t.xcode,o-t.ycode]}function l(e,t){const[n,o]=[...c(e,t)];return 1==n&&1==o}function i(e,t){return Math.max(...c(e,t))}function u(e,n){const o=new Float32Array(new ArrayBuffer(4*e.length*n.length));n.length;let r,a,c,u,f,d;for(r=0;r<e.length;r+=1)for(a=0;a<n.length;a+=1){const s=t.order(t.union(e[r],n[a]),x.any_mode);let l=0;s&&(l=t.order(t.intersection(e[r],n[a]),x.any_mode)/s),c=n.length*r+a,u=o[c-n.length-1]+l,f=o[c-1],d=o[c-n.length],o[c]=Math.max(f,u,d)}const g=function(e,t,n){let o=0,r=e.length-1;for(let t=0;t<e.length;t+=1)e[t]>=o&&(o=e[t],r=t);if(n.length){const e=r%n.length;return{row:(r-e)/n.length,column:e,value:o}}return{row:0,column:0,value:o}}(o,0,n);const _=function e(n,o,r,s,a){if(s<0||a<0)return[];let c;if(c=x.any_mode?t.any_intersection(o[s],r[a]):t.intersection(o[s],r[a]),t.order(c,x.any_mode)){const l=t.get_code(o[s]),i=t.get_code(r[a]);return Object.assign(c,{xcode:l,ycode:i}),e(n,o,r,s-1,a-1).concat([c])}return n[s*r.length+a-1]>n[(s-1)*r.length+a]?e(n,o,r,s,a-1):e(n,o,r,s-1,a)}(o,e,n,g.row,g.column);if(_.length){let e=s(),t=_[0];t.code=e;for(let n=1;n<_.length;n++){const o=_[n];e-=l(t,o)?1:i(t,o),o.code=e,t=o}}return _.forEach(e=>{delete e.xcode,delete e.ycode}),{value:_,score:g.value}}e.exports=x}},function(e,t,n){"use strict";{let t;const s=["tags","ids","classes","geometry"],a={tags:1,geometry:.5,ids:2,classes:.333},c={get_code:e=>e.code,get_tag_or_any(e,o){t=t||n(0).get_prefix();const r=new Set(e.split(/\s*,\s*/g));o.tags;return o.tags.size?[...r,...o.tags].join(",").trim():"*"},any_intersection:(e,t)=>s.reduce((n,s)=>(n[s]="tags"!=s?o(e[s],t[s]):r(e[s],t[s]),n),{}),intersection:(e,t)=>s.reduce((n,r)=>(n[r]=o(e[r],t[r]),n),{}),union:(e,t)=>s.reduce((n,o)=>(n[o]=r(e[o],t[o]),n),{}),order:(e,t)=>s.reduce((n,o)=>n+function(e,t,n){const o=a[e];switch(e){case"tags":return n?o/t:o*t;default:return o*t}}(o,e[o].size,t),0)};function o(e,t){return new Set([...e].filter(e=>t.has(e)))}function r(e,t){return new Set([...e,...t])}e.exports=c}}]);