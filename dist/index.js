"use strict";var d=function(t,n){return function(){return n||t((n={exports:{}}).exports,n),n.exports}};var m=d(function(E,c){"use strict";var v=require("@stdlib/utils-define-nonenumerable-read-only-property"),q=require("@stdlib/assert-is-function"),w=require("@stdlib/assert-is-iterator-like"),s=require("@stdlib/symbol-iterator"),x=require("@stdlib/string-format");function y(t,n){var a,u;for(a=t.length,u=0;u<a;u++)if(t[u]===n)return!0;return!1}function l(){var t,n,a,u,f,i,r;if(a=arguments.length,a<2)throw new Error("insufficient arguments. Must provide two or more iterators.");for(t=[],r=0;r<a;r++){if(!w(arguments[r]))throw new TypeError(x("invalid argument. Must provide an iterator protocol-compliant object. Argument: `%u`. Value: `%s`.",r,arguments[r]));t.push(arguments[r])}if(f=[],u={},v(u,"next",g),v(u,"return",p),s){for(r=0;r<a;r++)if(!q(t[r][s])){i=!0;break}i||v(u,s,h)}return n=t[0],i=!1,r=0,u;function g(){var e;if(i)return{done:!0};for(;;)if(e=n.next(),e.done){if(r+=1,r===a)return i=!0,e;n=t[r]}else if(e=e.value,y(f,e)===!1){f.push(e);break}return{value:e,done:!1}}function p(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}}function h(){var e,o;for(e=[],o=0;o<a;o++)e.push(t[o][s]());return l.apply(null,e)}}c.exports=l});var b=m();module.exports=b;
/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
