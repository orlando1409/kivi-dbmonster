(function(){'use strict';function p(a,b){this.a=a;this.b=b}var aa=0;function q(a){aa++;this.name=a;this.a=null;a=[];for(var b=Math.floor(10*Math.random()+1),c=0;c<b;c++)a.push(new p(15*Math.random(),.1>Math.random()?"vacuum":.2>Math.random()?"<IDLE> in transaction":"SELECT blah FROM something"));this.a=a}var ba=new p(0,"");function ca(a){a=a.a.slice();a.sort(function(a,c){return a.a-c.a});for(a=a.slice(0,5);5>a.length;)a.push(ba);return a}
function da(){this.a=[];for(var a=0;50>a;a++)this.a.push(new q("cluster"+a)),this.a.push(new q("cluster"+a+"slave"))};function t(a,b){this.a=a;this.b=b};function u(){this.a=0;this.g=[];this.b=this.f=this.c=this.h=null};function ea(a){var b=this.a="__pms"+Math.random().toString();window.addEventListener("message",function(c){c.source===window&&c.data===b&&a()})};function fa(a){this.b=new window.MutationObserver(a);this.a=document.createTextNode("");this.b.observe(this.a,{characterData:!0})};function v(){this.a=[];this.b=[]}function w(a){for(var b=0,c=a.a;b<c.length;)c[b++]();b=0;for(c=a.b;b<c.length;)c[b].call(c[b+1]),b+=2};new function(){this.a=0;this.c=1;this.b=new v;this.g=new v;this.f=new u;this.h=new u;this.j=[];var a=this;new fa(function(){a.a|=256;for(var b=a.b;0!==b.a.length||0!==b.b.length;)a.b=new v,w(b),b=a.b;a.c++;a.a&=-258});new ea(function(){a.a&=-3;a.a|=256;var b=a.g;if(0!==b.a.length||0!==b.b.length)a.g=new v,w(b);a.c++;a.a&=-257});this.i=function(){var b=a.j,c,d,f,g,e,h;a.a&=-9;a.a|=256;c=a.h;a.h=a.f;a.f=c;for(e=0;e<b.length;e++)b[e].a|=8;do{for(;0!==(c.a&3);){if(0!==(c.a&1))for(c.a&=-2,d=c.g,e=0;e<
d.length;e++)if(f=d[e],null!==f)for(d[e]=null,h=0;h<f.length;h++)g=f[h],g.constructor===x?y(g):g.call();if(0!==(c.a&2))for(c.a&=-3,f=c.h,e=0;e<f.length;e++)g=f[e],g.constructor===x?y(g):g.call()}e=0;for(h=b.length;e<h;)g=b[e++],0===(g.a&16)?(g.a&=-33,e===h?b.pop():b[--e]=b.pop()):y(g);for(;0!==(c.a&4);)for(c.a&=-5,f=c.c,c.c=null,e=0;e<f.length;e++)g=f[e],g.constructor===x?y(g):g.call()}while(0!==(c.a&3));for(;0!==(c.a&8);)for(c.a&=-9,f=c.f,e=0;e<f.length;e++)g=f[e],g.constructor===x?y(g):g.call();
null!==c.b&&(c.b.constructor===z?c.b.b.focus():c.b.focus(),c.b=null);0<b.length&&0===(a.a&8)&&(a.a|=8,window.requestAnimationFrame(a.i));a.c++;a.a&=-257}};function A(a){this.a=0;this.g=a;this.c=this.b=this.f=null}function B(a){var b;return null===a.c?(b=0===(a.a&1)?document.createElement(a.g):document.createElementNS("http://www.w3.org/2000/svg",a.g),null!==a.f&&(b.style.cssText=a.f),null!==a.b&&(b.className=a.b),0!==(a.a&2)&&(a.c=b),b):a.c.cloneNode(!1)}function E(a,b){a.b=b;return a};function F(){this.a=0;this.b="div";this.c=null}function G(a,b){var c;c="string"===typeof a.b?0===(a.a&1)?document.createElement(a.b):document.createElementNS("http://www.w3.org/2000/svg",a.b):B(a.b);return new x(8,a,b,c)}function x(a,b,c,d){this.a=a;this.i=b;this.j=null===c?0:c.j+1;this.b=null;this.f=d;this.h=this.g=this.c=null}function H(a,b){a.b!==b&&(a.b=b,a.a|=8)}function y(a){10===(a.a&10)&&(a.i.c(a),a.a&=-9)}
function J(a,b){null===a.c?(b.h=a,0!==(a.a&4)?(K(b,a.f,a),a.a&=-5):(b.b=a.f,L(b,a))):M(a.c,b,a);a.c=b}function N(a){a.a|=2;a=a.c;null!==a&&(a.constructor===z?ga(a):a.constructor===x&&N(a))}
function ha(a){a.a|=1;var b=a.c;null!==b&&(b.constructor===z?O(b):b.constructor===x&&ha(b));a.a&=-19;b=a.g;if(null!==b)if(b.constructor===t)b.b.a(b);else for(var c=0;c<b.length;c++){var d=b[c];d.b.a(d)}a.g=null;b=a.h;if(null!==b)if(b.constructor===t)b.b.a(b);else for(c=0;c<b.length;c++)d=b[c],d.b.a(d);a.h=null};function z(a,b,c){this.a=a;this.i=b;this.g=c;this.h=this.b=this.f=this.c=this.j=null}function R(a){return new z(2,a,null)}function ia(a,b){void 0===b&&(b=null);return new z(4,a,b)}function ja(a,b){a.c=b;return a}function S(a,b){a.f=b;return a}function T(a,b){return a.a===b.a&&a.i===b.i&&!0}
function ka(a,b){var c=a.a;0!==(c&1)?a.b=document.createTextNode(a.g):0!==(c&2)?a.b="string"===typeof a.i?0===(c&16)?document.createElement(a.i):document.createElementNS("http://www.w3.org/2000/svg",a.i):B(a.i):0!==(c&4)&&(c=G(a.i,b),a.b=c.f,a.h=c)}
function L(a,b){var c,d,f,g,e=a.a,h;if(0!==(e&10)){h=a.b;var m=a.g;if(null!==m)for(g=Object.keys(m),c=0,d=g.length;c<d;c++)f=g[c],h[f]=m[f];null!==a.j&&(0===(e&16)?h.style.cssText=a.j:h.setAttribute("style",a.j));null!==a.c&&(0===(e&16)?h.className=a.c:h.setAttribute("class",a.c));e=a.f;if(null!==e)if(0===(a.a&768))if("string"===typeof e)h.textContent=e;else for(c=0,d=e.length;c<d;c++)U(a,e[c],null,b);else h=a.b,0!==(a.a&256)?h.value=a.f:h.checked=a.f}else 0!==(e&4)&&(c=a.h,h=a.b,null!==a.c&&(0===
(e&16)?h.className=a.c:h.setAttribute("class",a.c)),H(c,a.g),y(c))}function K(a,b,c){var d=a.a,f=a.f;a.b=b;if(0!==(d&4))b=new x(12,a.i,c,b),b=a.h=b,H(b,a.g),y(b);else if(null!==f&&"string"!==typeof f&&0<f.length){for(var d=b.firstChild,g;8===d.nodeType;)g=d,d=d.nextSibling,b.removeChild(g);for(a=0;a<f.length;a++)for(K(f[a],d,c),d=d.nextSibling;8===d.nodeType;)g=d,d=d.nextSibling,b.removeChild(g)}}
function M(a,b,c){var d=a.b,f=a.a,g;b.b=d;if(0!==(f&1))a.g!==b.g&&(a.b.nodeValue=b.g);else if(0!==(f&10)){if(a.g!==b.g){g=a.g;var e=b.g,h,m,l,k,n,r;if(null!==g)if(null===e)for(k=Object.keys(g),h=0,m=k.length;h<m;h++)d[k[h]]=void 0;else{k=Object.keys(g);h=0;for(m=k.length;h<m;h++)l=k[h],e.hasOwnProperty(l)?(n=g[l],r=e[l],n!==r&&(d[l]=r)):d[l]=void 0;k=Object.keys(e);h=0;for(m=k.length;h<m;h++)l=k[h],g.hasOwnProperty(l)||(d[l]=e[l])}else if(null!==e)for(k=Object.keys(e),h=0,m=k.length;h<m;h++)l=k[h],
d[l]=e[l]}a.j!==b.j&&(g=null===b.j?"":b.j,0===(f&16)?d.style.cssText=g:d.setAttribute("style",g));a.c!==b.c&&(g=null===b.c?"":b.c,0===(f&16)?d.className=g:d.setAttribute("class",g));if(0===(a.a&768))if(f=a.f,b=b.f,e=0,h=!1,"string"===typeof f)if(null===b)a.b.removeChild(a.b.firstChild);else if("string"===typeof b)f!==b&&((c=a.b.firstChild)?c.nodeValue=b:a.b.textContent=b);else for(a.b.removeChild(a.b.firstChild);e<b.length;)U(a,b[e++],null,c);else if("string"===typeof b){if(null!==f)for(;e<f.length;)V(a,
f[e++]);a.b.textContent=b}else if(null!==f&&0!==f.length)if(null===b||0===b.length)for(;e<f.length;)V(a,f[e++]);else if(1===f.length&&1===b.length)d=f[0],g=b[0],T(d,g)?M(d,g,c):la(a,g,d,c);else if(1===f.length){d=f[0];if(0===(a.a&32))for(;e<b.length;){g=b[e++];if(T(d,g)){M(d,g,c);h=!0;break}U(a,g,d.b,c)}else for(;e<b.length;){g=b[e++];M(d,g,c);h=!0;break}if(h)for(;e<b.length;)U(a,b[e++],null,c);else V(a,d)}else if(1===b.length){g=b[0];if(0===(a.a&32))for(;e<f.length;){d=f[e++];if(T(d,g)){M(d,g,c);
h=!0;break}V(a,d)}else for(;e<f.length;){d=f[e++];M(d,g,c);h=!0;break}if(h)for(;e<f.length;)V(a,f[e++]);else U(a,g,null,c)}else if(0===(a.a&32)){d=e=0;h=f.length-1;for(g=b.length-1;e<=h&&d<=g;){m=f[e];l=b[d];if(!T(m,l))break;e++;d++;M(m,l,c)}for(;e<=h&&d<=g;){m=f[h];l=b[g];if(!T(m,l))break;h--;g--;M(m,l,c)}for(;e<=h&&d<=g;)m=f[e++],l=b[d++],T(m,l)?M(m,l,c):la(a,l,m,c);if(e<=h){do V(a,f[e++]);while(e<=h)}else if(d<=g){f=g+1;f=f<b.length?b[f].b:null;do U(a,b[d++],f,c);while(d<=g)}}else{d=l=0;k=f.length-
1;m=b.length-1;g=f[l];var e=b[d],C,I;n=0;a:do for(;;){M(g,e,c);l++;d++;if(l>k||d>m)break a;g=f[l];e=b[d]}while(l<=k&&d<=m);if(l>k)for(k=m+1,k=k<b.length?b[k].b:null;d<=m;)U(a,b[d++],k,c);else if(d>m)for(;l<=k;)V(a,f[l++]);else{r=k-l+1;e=m-d+1;g=Array(e);for(h=0;h<e;h++)g[h]=-1;var P=!1,Q=0;if(16>=r*e)for(h=l;h<=k;h++){var D=!0;C=f[h];for(l=d;l<=m;){I=b[l];g[l-d]=h;n>l?P=!0:n=l;M(C,I,c);D=!1;break}D&&(V(a,C),Q++)}else{D=new Map;for(h=d;h<=m;h++)D.set(null,h);for(h=l;h<=k;h++)C=f[h],l=D.get(null),void 0!==
l?(I=b[l],g[l-d]=h,n>l?P=!0:n=l,M(C,I,c)):(V(a,C),Q++)}if(P){h=g.slice(0);f=[];f.push(0);m=0;for(l=g.length;m<l;m++)if(-1!==g[m])if(k=f[f.length-1],g[k]<g[m])h[m]=k,f.push(m);else{k=0;for(n=f.length-1;k<n;)r=(k+n)/2|0,g[f[r]]<g[m]?k=r+1:n=r;g[m]<g[f[k]]&&(0<k&&(h[m]=f[k-1]),f[k]=m)}k=f.length;for(n=f[k-1];0<k--;)f[k]=n,n=h[n];l=f.length-1;for(h=e-1;0<=h;h--)-1===g[h]?(m=h+d,e=b[m],k=m+1,k=k<b.length?b[k].b:null,U(a,e,k,c)):0>l||h!==f[l]?(m=h+d,e=b[m],k=m+1,k=k<b.length?b[k].b:null,a.b.insertBefore(e.b,
k)):l--}else if(r-Q!==e)for(h=e-1;0<=h;h--)-1===g[h]&&(m=h+d,e=b[m],k=m+1,k=k<b.length?b[k].b:null,U(a,e,k,c))}}else{if(null!==b&&0<b.length)for(e=0;e<b.length;e++)U(a,b[e],null,c)}else 0!==(f&256)?d.value!==b.f&&(d.value=b.f):d.checked!==b.f&&(d.checked=b.f)}else 0!==(f&4)&&(a.c!==b.c&&(g=null===b.c?"":b.c,0===(f&16)?d.className=g:d.setAttribute("class",g)),a=b.h=a.h,H(a,b.g),y(a))}
function ga(a){if(0===(a.a&4)){if(a=a.f,null!==a&&"string"!==typeof a)for(var b=0;b<a.length;b++)ga(a[b])}else N(a.h)}function O(a){if(0!==(a.a&4))ha(a.h);else if(null!==a.f&&(a=a.f,"string"!==typeof a))for(var b=0;b<a.length;b++)O(a[b])}function U(a,b,c,d){ka(b,d);a.b.insertBefore(b.b,c);0!==(b.a&4)&&N(b.h);L(b,d)}function la(a,b,c,d){ka(b,d);a.b.replaceChild(b.b,c.b);O(c);0!==(b.a&4)&&N(b.h);L(b,d)}function V(a,b){a.b.removeChild(b.b);O(b)};var W=new F;W.b=E(new A("div"),"popover left");var ma=E(new A("div"),"popover-content"),na=E(new A("div"),"arrow");W.c=function(a){J(a,S(new z(8,null,null),[S(R(ma),a.b),R(na)]))};function oa(a){if(!a)return"";var b=parseFloat(a).toFixed(2);60<a&&(b=(a%60).toFixed(2).split("."),b=Math.floor(a/60)+":"+b[0]+"."+b[1]);return b}var X=new F;X.b="tr";var pa=E(new A("td"),"dbname"),qa=E(new A("td"),"query-count");
X.c=function(a){for(var b=a.b,c=ca(b),d=b.a.length,b=[S(R(pa),b.name),S(R(qa),[S(ja(R("span"),20<=d?"label label-important":10<=d?"label label-warning":"label label-success"),""+d)])],d=0;5>d;d++){var f=c[d],g=f.a;b.push(S(ja(R("td"),10<=g?"Query elapsed warn_long":1<=g?"Query elapsed warn":"Query elapsed short"),[new z(1,null,oa(g)),ia(W,f.b)]))}J(a,S(new z(8,null,null),b))};var Y=new F;Y.b=E(new A("table"),"table table-striped latest-data");Y.c=function(a){for(var b=a.b.a,c=Array(b.length),d=0;d<b.length;d++)c[d]=ia(X,b[d]);J(a,S(new z(8,null,null),[S(R("tbody"),c)]))};function ra(a){var b=document.getElementById("app"),c=G(Y,null);b.appendChild(c.f);c.a|=2;H(c,a);y(c);return c};var Z=.5;
document.addEventListener("DOMContentLoaded",function(){function a(){for(var c=Z,d=b.a,f=0;f<d.length;f++)Math.random()<c&&(d[f]=new q(d[f].name));Y.c(g);window.Monitoring.renderRate.ping();setTimeout(a,0)}var b=new da,c=document.createElement("div");c.style.display="flex";var d=document.createElement("input");d.type="range";d.style.marginBottom="10px";d.style.marginTop="5px";var f=document.createElement("label");f.textContent="mutations : "+(100*Z).toFixed(0)+"%";d.addEventListener("change",function(a){Z=
a.target.value/100;f.textContent="mutations : "+(100*Z).toFixed(0)+"%"});c.appendChild(f);c.appendChild(d);document.body.insertBefore(c,document.body.firstChild);var g=ra(b);setTimeout(a,0)});}).call();
