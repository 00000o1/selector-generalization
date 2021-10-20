(()=>{"use strict";var e={467:(e,t,n)=>{{const t=n(634),o={generalize:c,lcs_from_sel_pair:t.lcs_from_canonical_sel_pair,get_canonical_sel:a,sel_from_path:t.selector_from_canonical_path,set any_mode(e){t.any_mode=e}};function r(e){return e instanceof HTMLElement}function s(e,n,o=!1){let s,a;if(o)s=e.map((e=>t.path_from_sel(e))),a=n.map((e=>t.path_from_sel(e)));else{const o=e.map((e=>r(e)?e:document.querySelector(e))),c=n.map((e=>r(e)?e:document.querySelector(e)));s=o.map((e=>t.get_canonical_path(e).canonical)),a=c.map((e=>t.get_canonical_path(e).canonical))}return{p_basic:t.basic_multiple_lcs_from_canonical_path_list(s),n_basic:t.basic_multiple_lcs_from_canonical_path_list(a)}}function a(e){return t.selector_from_canonical_path(t.get_canonical_path(e).canonical)}function c(e,n,o){const r=s(e,n,o);return{positive:t.selector_from_canonical_path(r.p_basic||[]),negative:t.selector_from_canonical_path(r.n_basic||[])}}e.exports=o}},634:(e,t,n)=>{{const t=n(288),o=1e4,r=/(\.[^#\.:]+)/g,s=/#([^#\.:]+)/g,a=/^([^#\.:]+)/g,c=/:\w+\(\s*([^\)]+)\s*\)/g,l=/(:nth-of-type\([^)]*\))/g;let i=2;const u={any_mode:!1,get_canonical_path(e){const t=[];let n=m();for(;e&&"HTML"!=e.tagName;){if(!e.parentNode&&e.host){const n={};n["TAG:"+(e=e.host).tagName+"::shadow"]=1,t.unshift(n)}else{const o={tags:new Set,geometry:new Set,classes:new Set,ids:new Set};let r,s="";if(e.parentNode){let t=0;const n=Array.from(e.parentNode.childNodes);for(const o of n)if(o.tagName==e.tagName&&(t+=1),o===e){s=`:nth-of-type(${t})`;break}}e.id&&e.id.length>0&&o.ids.add(e.id);try{r=e.getAttribute("class")}catch(t){r=e.className}if("string"!=typeof r)try{r=Array.from(e.classList)}catch(e){r=[]}else r=r.split(/\s+/);r.forEach((e=>{e.length>0&&o.classes.add(`.${d(e)}`)})),o.tags.add(e.tagName),o.geometry.add(s),o.code=n,n+=1,t.unshift(o)}e=e.parentNode}return{canonical:t}},path_from_sel(e){const t=e.split(/\s*>\s*/g),n=[];let o=m();for(const e of t){const t={tags:new Set,geometry:new Set,classes:new Set,ids:new Set},i=new Set(g(r,e).map((e=>d(e))));let u=g(c,e)[0];u=u?new Set(u.split(/\s*,\s*/g)):new Set;const f=g(a,e)[0],_=d(g(s,e)[0]||""),m=g(l,e)[0];t.classes=i,t.tags=u,f&&(0==u.size||"*"!==f)&&t.tags.add(f),_&&t.ids.add(_),m&&t.geometry.add(m),t.code=o,o-=1,n.push(t)}return n},lcs_from_canonical_sel_pair:(e,t)=>w(u.path_from_sel(e),u.path_from_sel(t)).value,selector_from_canonical_path(e){if(0==(e=Array.from(e)).length)return"";const t=[];let n=e[0];for(let t=1;t<e.length;t++){const o=e[t];1==h(n,o)&&e.splice(t,0,{">":1}),n=o}return e.forEach((e=>{if(e[">"])return void(">"!==t[t.length-1]&&t.push(">"));const{tags:n,classes:o,ids:r,geometry:s}=e;let a="";u.any_mode&&n.size>1?a+=`:is(${[...n].join(",")})`:a+=`${[...n].join(",")}`,r.size&&(a+=`#${[...r].map((e=>d(e))).join("#")}`),o.size&&(a+=`${[...o].map((e=>d(e))).join("")}`),s.size&&(a+=`${[...s].join("")}`),a&&t.push(a)})),t.join(" ")},basic_multiple_lcs_from_canonical_path_list(e){if(0==e.length)return[];let t,n=e[0];for(let o=1;o<e.length;o+=1){t=e[o];const r=w(t,n);r&&(n=r.value)}return n}};function d(e){return Number.isInteger(parseInt(e))&&parseInt(e).toString()==e?"\\"+(e=e.split("").map((e=>e.charCodeAt(0).toString(16))).join("\\")):e.replace(/\\\\([\[\]])/,"$1").replace(/([\[\]])/g,"\\$1").replace(/\\(\d\d)/g,"\\\\$1")}function g(e,t){const n=[];let o;for(;o=e.exec(t);)n.push(o[1]);return n}function f(e,t,n){let o=0,r=e.length-1;for(let t=0;t<e.length;t+=1)e[t]>=o&&(o=e[t],r=t);if(n.length){const e=r%n.length;return{row:(r-e)/n.length,column:e,value:o}}return{row:0,column:0,value:o}}function _(e,n,o,r,s){if(r<0||s<0)return[];let a;if(a=u.any_mode?t.any_intersection(n[r],o[s]):t.intersection(n[r],o[s]),t.order(a,u.any_mode)){const c=t.get_code(n[r]),l=t.get_code(o[s]);return Object.assign(a,{xcode:c,ycode:l}),_(e,n,o,r-1,s-1).concat([a])}return e[r*o.length+s-1]>e[(r-1)*o.length+s]?_(e,n,o,r,s-1):_(e,n,o,r-1,s)}function m(){return i+=o,i}function h(e,n){return t.get_code(e)-t.get_code(n)}function p(e,t){const{xcode:n,ycode:o}=e;return[n-t.xcode,o-t.ycode]}function y(e,t){const[n,o]=[...p(e,t)];return 1==n&&1==o}function x(e,t){return Math.max(...p(e,t))}function w(e,n){const o=new Float32Array(new ArrayBuffer(4*e.length*n.length));let r,s,a,c,l,i;for(n.length,r=0;r<e.length;r+=1)for(s=0;s<n.length;s+=1){const d=t.order(t.union(e[r],n[s]),u.any_mode);let g=0;d&&(g=t.order(t.intersection(e[r],n[s]),u.any_mode)/d),a=n.length*r+s,c=o[a-n.length-1]+g,l=o[a-1],i=o[a-n.length],o[a]=Math.max(l,c,i)}const d=f(o,0,n),g=_(o,e,n,d.row,d.column);if(g.length){let e=m(),t=g[0];t.code=e;for(let n=1;n<g.length;n++){const o=g[n];e-=y(t,o)?1:x(t,o),o.code=e,t=o}}return g.forEach((e=>{delete e.xcode,delete e.ycode})),{value:g,score:d.value}}e.exports=u}},393:(e,t,n)=>{{const t=n(467),o=new Set(["A","BUTTON"]),r={run:l};function s(e,t,n){t=new Set(t);const o=[...e].every((e=>t.has(e))),r=[...n].every((e=>!t.has(e)));return o&&r}function a(e){const t=parseFloat(e.innerText);e.innerText=t+1}function c(e){e.innerText=0}function l(){console.log("Running tests...");const e=new Set,n=new Set;let r=[];t.any_mode=document.querySelector("#any_mode").checked,document.addEventListener("click",(e=>{"negate"==e.target.id?r.forEach((e=>{e.style.filter="none",e.style.background="none",e.style.outline="none"})):o.has(e.target.tagName)&&e.preventDefault()})),document.addEventListener("input",(e=>{"any_mode"===e.target.id&&(t.any_mode=e.target.checked)})),document.addEventListener("mouseup",(o=>{if("generalize"==o.target.id){if(!u(n,e,r)&&(t.any_mode?t.any_mode=!1:t.any_mode=!0,!u(n,e,r)))return console.log("Test result? false"),void i(n,e,r);console.log("Test result? true"),i(n,e,r)}else if("clear"==o.target.id)Array.from(n).forEach((e=>{e.closest("#testcontrols")||(e.style.outline="none")})),Array.from(e).forEach((e=>{e.closest("#testcontrols")||(e.style.outline="none")})),r.forEach((e=>{e.closest("#testcontrols")||(e.style.filter="none",e.style.background="none",e.style.outline="none")})),e.clear(),n.clear(),negate.checked=!1,found_count.innerText="n/a",c(positive_example_count),c(negative_example_count),generalized_selector.innerText="n/a";else{if(!(o.target instanceof HTMLElement)||o.target.matches("article#testcontrols, article#testcontrols *"))return;if(o.target.closest("#testcontrols"))return;negate.checked?(n.has(o.target)&&n.delete(o.target),e.has(o.target)||(e.add(o.target),a(negative_example_count))):(e.has(o.target)&&e.delete(o.target),n.has(o.target)||(n.add(o.target),a(positive_example_count))),o.target.style&&(negate.checked?o.target.style.outline="2px solid red":o.target.style.outline="2px solid lime")}}))}function i(e,t,n){Array.from(e).forEach((e=>{e.closest("#testcontrols")||(e.style.outline="3px dashed lime")})),Array.from(t).forEach((e=>{e.closest("#testcontrols")||(e.style.outline="3px dashed red")})),n.forEach((e=>{console.log(e),e.closest("#testcontrols")||(e.style.outline="3px dashed lime",e.style.filter="sepia(1)",e.style.background="lime")}))}function u(e,n,o){const r=[...e].map((e=>t.get_canonical_sel(e))),a=[...n].map((e=>t.get_canonical_sel(e))),{positive:c,negative:l}=t.generalize(r,a,!0);generalized_selector.innerText=`${c} !(${l})`||"n/a",o.forEach((e=>{e.style.filter="none",e.style.background="none",e.style.outline="none"}));try{o.length=0,o.push(...Array.from(document.querySelectorAll(c)))}catch(e){console.warn(" Error on query selector",e),console.warn("Note, MS Edge and IE do not support ':matches' or ':any' or ':is' as of the time I wrote this code, August 16 2017")}if(l){const e=new Set(Array.from(document.querySelectorAll(l)));Array.from(o),o.length=0,o.push(...o.filter((t=>!e.has(t))))}return found_count.innerText=o.length,s(e,o,n)}e.exports=r,Object.assign(self,{test:r})}},288:e=>{{const t=["tags","ids","classes","geometry"],n={tags:1,geometry:.5,ids:2,classes:.333},o={get_code:e=>e.code,get_tag_or_any(e,t){const n=new Set(e.split(/\s*,\s*/g));return t.tags,t.tags.size?[...n,...t.tags].join(",").trim():"*"},any_intersection:(e,n)=>t.reduce(((t,o)=>(t[o]="tags"!=o?r(e[o],n[o]):s(e[o],n[o]),t)),{}),intersection:(e,n)=>t.reduce(((t,o)=>(t[o]=r(e[o],n[o]),t)),{}),union:(e,n)=>t.reduce(((t,o)=>(t[o]=s(e[o],n[o]),t)),{}),order:(e,n)=>t.reduce(((t,o)=>t+a(o,e[o].size,n)),0)};function r(e,t){return new Set([...e].filter((e=>t.has(e))))}function s(e,t){return new Set([...e,...t])}function a(e,t,o){const r=n[e];return"tags"===e&&o?r/t:r*t}e.exports=o}}},t={};!function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}(393)})();