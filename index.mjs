// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-iterator-like@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";function i(r,e){var t,n;for(t=r.length,n=0;n<t;n++)if(r[n]===e)return!0;return!1}function o(){var d,f,l,u,m,p,a;if((l=arguments.length)<2)throw new Error(s("0Q30I"));for(d=[],a=0;a<l;a++){if(!t(arguments[a]))throw new TypeError(s("0Q33x",a,arguments[a]));d.push(arguments[a])}if(m=[],r(u={},"next",(function(){var r;if(p)return{done:!0};for(;;)if((r=f.next()).done){if((a+=1)===l)return p=!0,r;f=d[a]}else if(r=r.value,!1===i(m,r)){m.push(r);break}return{value:r,done:!1}})),r(u,"return",(function(r){if(p=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),n){for(a=0;a<l;a++)if(!e(d[a][n])){p=!0;break}p||r(u,n,(function(){var r,e;for(r=[],e=0;e<l;e++)r.push(d[e][n]());return o.apply(null,r)}))}return f=d[0],p=!1,a=0,u}export{o as default};
//# sourceMappingURL=index.mjs.map
