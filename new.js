(function(){'use strict';function p(a,b){this.a=a;this.b=b}var aa=0;function q(a){aa++;this.name=a;this.a=null;a=[];for(var b=Math.floor(10*Math.random()+1),c=0;c<b;c++)a.push(new p(15*Math.random(),.1>Math.random()?"vacuum":.2>Math.random()?"<IDLE> in transaction":"SELECT blah FROM something"));this.a=a}var ba=new p(0,"");function ca(a){a=a.a.slice();a.sort(function(a,c){return a.a-c.a});for(a=a.slice(0,5);5>a.length;)a.push(ba);return a}
function da(){this.a=[];for(var a=0;50>a;a++)this.a.push(new q("cluster"+a)),this.a.push(new q("cluster"+a+"slave"))};function r(a,b){this.a=a;this.b=b};function t(){this.a=0;this.g=[];this.b=this.f=this.c=this.h=null};function ea(a){var b=this.a="__pms"+Math.random().toString();window.addEventListener("message",function(c){c.source===window&&c.data===b&&a()})};function fa(a){this.b=new window.MutationObserver(a);this.a=document.createTextNode("");this.b.observe(this.a,{characterData:!0})};function u(){this.a=[];this.b=[]}function v(a){for(var b=0,c=a.a;b<c.length;)c[b++]();b=0;for(c=a.b;b<c.length;)c[b].call(c[b+1]),b+=2};new function(){this.a=0;this.c=1;this.b=new u;this.g=new u;this.f=new t;this.h=new t;this.j=[];var a=this;new fa(function(){a.a|=256;for(var b=a.b;0!==b.a.length||0!==b.b.length;)a.b=new u,v(b),b=a.b;a.c++;a.a&=-258});new ea(function(){a.a&=-3;a.a|=256;var b=a.g;if(0!==b.a.length||0!==b.b.length)a.g=new u,v(b);a.c++;a.a&=-257});this.i=function(){var b=a.j,c,d,e,g,f,h;a.a&=-9;a.a|=256;c=a.h;a.h=a.f;a.f=c;for(f=0;f<b.length;f++)b[f].a|=8;do{for(;0!==(c.a&3);){if(0!==(c.a&1))for(c.a&=-2,d=c.g,f=0;f<
d.length;f++)if(e=d[f],null!==e)for(d[f]=null,h=0;h<e.length;h++)g=e[h],g.constructor===w?x(g):g.call();if(0!==(c.a&2))for(c.a&=-3,e=c.h,f=0;f<e.length;f++)g=e[f],g.constructor===w?x(g):g.call()}f=0;for(h=b.length;f<h;)g=b[f++],0===(g.a&16)?(g.a&=-33,f===h?b.pop():b[--f]=b.pop()):x(g);for(;0!==(c.a&4);)for(c.a&=-5,e=c.c,c.c=null,f=0;f<e.length;f++)g=e[f],g.constructor===w?x(g):g.call()}while(0!==(c.a&3));for(;0!==(c.a&8);)for(c.a&=-9,e=c.f,f=0;f<e.length;f++)g=e[f],g.constructor===w?x(g):g.call();
null!==c.b&&(c.b.constructor===y?c.b.b.focus():c.b.focus(),c.b=null);0<b.length&&0===(a.a&8)&&(a.a|=8,window.requestAnimationFrame(a.i));a.c++;a.a&=-257}};function z(){this.a=0;this.c="div";this.b=null}function D(a,b){var c=0===(a.a&1)?document.createElement(a.c):document.createElementNS(E,a.c);return new w(8,a,b,c)}function w(a,b,c,d){this.a=a;this.i=b;this.j=null===c?0:c.j+1;this.b=null;this.f=d;this.h=this.g=this.c=null}function F(a,b){a.b!==b&&(a.b=b,a.a|=8)}function x(a){10===(a.a&10)&&(a.i.b(a),a.a&=-9)}function G(a,b){null===a.c?(b.f=a,0!==(a.a&4)?(I(b,a.f,a),a.a&=-5):(b.b=a.f,J(b,a))):K(a.c,b,a);a.c=b}
function L(a){a.a|=2;a.a&=-65;a=a.c;null!==a&&(a.constructor===y?M(a):a.constructor===w&&L(a))}function N(a){a.a|=1;var b=a.c;null!==b&&(b.constructor===y?Q(b):b.constructor===w&&N(b));a.a&=-19;b=a.g;if(null!==b)if(b.constructor===r)b.b.a(b);else for(var c=0;c<b.length;c++){var d=b[c];d.b.a(d)}a.g=null;b=a.h;if(null!==b)if(b.constructor===r)b.b.a(b);else for(c=0;c<b.length;c++)d=b[c],d.b.a(d);a.h=null};var E="http://www.w3.org/2000/svg";function y(a,b,c){this.a=a;this.i=b;this.c=c;this.f=this.b=this.g=this.h=this.j=null}function R(a){return new y(2,a,null)}function ga(a,b){void 0===b&&(b=null);return new y(4,a,b)}function S(a,b){a.h=b;return a}function T(a,b){a.g=b;return a}function U(a,b){return a.a===b.a&&a.i===b.i&&!0}function ha(a,b){var c=a.a;0!==(c&1)?a.b=document.createTextNode(a.c):0!==(c&2)?a.b=0===(c&16)?document.createElement(a.i):document.createElementNS(E,a.i):0!==(c&4)&&(c=D(a.i,b),a.b=c.f,a.f=c)}
function J(a,b){var c,d,e,g;c=a.a;var f;if(0!==(c&10)){f=a.b;var h=a.c;if(null!==h)for(g=Object.keys(h),c=0,d=g.length;c<d;c++)e=g[c],f[e]=h[e];null!==a.j&&(f.style.cssText=a.j);null!==a.h&&(f.className=a.h);e=a.g;if(null!==e)if("string"===typeof e)f.textContent=e;else for(c=0,d=e.length;c<d;c++)V(a,e[c],null,b)}else 0!==(c&4)&&(c=a.f,F(c,a.c),x(c))}
function I(a,b,c){var d=a.a,e=a.g;a.b=b;if(0!==(d&4))b=new w(12,a.i,c,b),b=a.f=b,F(b,a.c),x(b);else if(null!==e&&"string"!==typeof e&&0<e.length){for(var d=b.firstChild,g;8===d.nodeType;)g=d,d=d.nextSibling,b.removeChild(g);for(a=0;a<e.length;a++)for(I(e[a],d,c),d=d.nextSibling;8===d.nodeType;)g=d,d=d.nextSibling,b.removeChild(g)}}
function K(a,b,c){var d=a.b,e=a.a;b.b=d;if(0!==(e&1))a.c!==b.c&&(a.b.nodeValue=b.c);else if(0!==(e&10)){if(a.c!==b.c){var e=a.c,g=b.c,f,h,k,l,m,n;if(null!==e)if(null===g)for(l=Object.keys(e),f=0,h=l.length;f<h;f++)d[l[f]]=void 0;else{l=Object.keys(e);f=0;for(h=l.length;f<h;f++)k=l[f],g.hasOwnProperty(k)?(m=e[k],n=g[k],m!==n&&(d[k]=n)):d[k]=void 0;l=Object.keys(g);f=0;for(h=l.length;f<h;f++)k=l[f],e.hasOwnProperty(k)||(d[k]=g[k])}else if(null!==g)for(l=Object.keys(g),f=0,h=l.length;f<h;f++)k=l[f],
d[k]=g[k]}a.j!==b.j&&(d.style.cssText=null===b.j?"":b.j);a.h!==b.h&&(d.className=null===b.h?"":b.h);e=a.g;b=b.g;f=0;h=!1;if("string"===typeof e)if("string"===typeof b)e!==b&&((c=a.b.firstChild)?c.nodeValue=b:a.b.textContent=b);else{if(null!==b)for(a.b.removeChild(a.b.firstChild);f<b.length;)V(a,b[f++],null,c)}else if("string"===typeof b){if(null!==e)for(;f<e.length;)W(a,e[f++]);a.b.textContent=b}else if(null!==e&&0!==e.length)if(null===b||0===b.length)for(;f<e.length;)W(a,e[f++]);else if(1===e.length&&
1===b.length)d=e[0],g=b[0],U(d,g)?K(d,g,c):ia(a,g,d,c);else if(1===e.length){d=e[0];if(0===(a.a&32))for(;f<b.length;){g=b[f++];if(U(d,g)){K(d,g,c);h=!0;break}V(a,g,d.b,c)}else for(;f<b.length;){g=b[f++];K(d,g,c);h=!0;break}if(h)for(;f<b.length;)V(a,b[f++],null,c);else W(a,d)}else if(1===b.length){g=b[0];if(0===(a.a&32))for(;f<e.length;){d=e[f++];if(U(d,g)){K(d,g,c);h=!0;break}W(a,d)}else for(;f<e.length;){d=e[f++];K(d,g,c);h=!0;break}if(h)for(;f<e.length;)W(a,e[f++]);else V(a,g,null,c)}else if(0===
(a.a&32)){d=f=0;h=e.length-1;for(g=b.length-1;f<=h&&d<=g;){k=e[f];l=b[d];if(!U(k,l))break;f++;d++;K(k,l,c)}for(;f<=h&&d<=g;){k=e[h];l=b[g];if(!U(k,l))break;h--;g--;K(k,l,c)}for(;f<=h&&d<=g;)k=e[f++],l=b[d++],U(k,l)?K(k,l,c):ia(a,l,k,c);if(f<=h){do W(a,e[f++]);while(f<=h)}else if(d<=g){e=g+1;e=e<b.length?b[e].b:null;do V(a,b[d++],e,c);while(d<=g)}}else{d=l=0;m=e.length-1;k=b.length-1;g=e[l];f=b[d];var A,H;n=0;a:do for(;;){K(g,f,c);l++;d++;if(l>m||d>k)break a;g=e[l];f=b[d]}while(l<=m&&d<=k);if(l>m)for(m=
k+1,m=m<b.length?b[m].b:null;d<=k;)V(a,b[d++],m,c);else if(d>k)for(;l<=m;)W(a,e[l++]);else{var B=m-l+1;f=k-d+1;g=Array(f);for(h=0;h<f;h++)g[h]=-1;var O=!1,P=0;if(16>=B*f)for(h=l;h<=m;h++){var C=!0;A=e[h];for(l=d;l<=k;){H=b[l];g[l-d]=h;n>l?O=!0:n=l;K(A,H,c);C=!1;break}C&&(W(a,A),P++)}else{C={};for(h=d;h<=k;h++)C[null]=h;for(h=l;h<=m;h++)A=e[h],l=C[null],void 0!==l?(H=b[l],g[l-d]=h,n>l?O=!0:n=l,K(A,H,c)):(W(a,A),P++)}if(O){h=g.slice(0);e=[];e.push(0);k=0;for(l=g.length;k<l;k++)if(-1!==g[k])if(m=e[e.length-
1],g[m]<g[k])h[k]=m,e.push(k);else{m=0;for(n=e.length-1;m<n;)B=(m+n)/2|0,g[e[B]]<g[k]?m=B+1:n=B;g[k]<g[e[m]]&&(0<m&&(h[k]=e[m-1]),e[m]=k)}m=e.length;for(n=e[m-1];0<m--;)e[m]=n,n=h[n];l=e.length-1;for(h=f-1;0<=h;h--)-1===g[h]?(k=h+d,f=b[k],m=k+1,m=m<b.length?b[m].b:null,V(a,f,m,c)):0>l||h!==e[l]?(k=h+d,f=b[k],m=k+1,m=m<b.length?b[m].b:null,a.b.insertBefore(f.b,m)):l--}else if(B-P!==f)for(h=f-1;0<=h;h--)-1===g[h]&&(k=h+d,f=b[k],m=k+1,m=m<b.length?b[m].b:null,V(a,f,m,c))}}else if(null!==b&&0<b.length)for(f=
0;f<b.length;f++)V(a,b[f],null,c)}else 0!==(e&4)&&(a=b.f=a.f,F(a,b.c),x(a))}function M(a){if(0===(a.a&4)){if(a=a.g,null!==a&&"string"!==typeof a)for(var b=0;b<a.length;b++)M(a[b])}else L(a.f)}function Q(a){if(0!==(a.a&4))N(a.f);else if(null!==a.g&&(a=a.g,"string"!==typeof a))for(var b=0;b<a.length;b++)Q(a[b])}function V(a,b,c,d){ha(b,d);a.b.insertBefore(b.b,c);0!==(b.a&4)&&L(b.f);J(b,d)}function ia(a,b,c,d){ha(b,d);a.b.replaceChild(b.b,c.b);Q(c);0!==(b.a&4)&&L(b.f);J(b,d)}
function W(a,b){a.b.removeChild(b.b);Q(b)};var ja=new z;ja.b=function(a){G(a,T(S(new y(8,null,null),"popover left"),[T(S(R("div"),"popover-content"),a.b),S(R("div"),"arrow")]))};function ka(a){if(!a)return"";var b=parseFloat(a).toFixed(2);60<a&&(b=(a%60).toFixed(2).split("."),b=Math.floor(a/60)+":"+b[0]+"."+b[1]);return b}var X=new z;X.c="tr";
X.b=function(a){for(var b=a.b,c=ca(b),d=b.a.length,b=[T(S(R("td"),"dbname"),b.name),T(S(R("td"),"query-count"),[T(S(R("span"),20<=d?"label label-important":10<=d?"label label-warning":"label label-success"),""+d)])],d=0;5>d;d++){var e=c[d],g=e.a;b.push(T(S(R("td"),10<=g?"Query elapsed warn_long":1<=g?"Query elapsed warn":"Query elapsed short"),[new y(1,null,ka(g)),ga(ja,e.b)]))}G(a,T(new y(8,null,null),b))};var Y=new z;Y.c="table";Y.b=function(a){for(var b=a.b.a,c=Array(b.length),d=0;d<b.length;d++)c[d]=ga(X,b[d]);G(a,T(S(new y(8,null,null),"table table-striped latest-data"),[T(R("tbody"),c)]))};function la(a){var b=document.getElementById("app"),c=D(Y,null);b.appendChild(c.f);c.a|=2;c.a&=-65;F(c,a);x(c);return c};var Z=.5;
document.addEventListener("DOMContentLoaded",function(){function a(){for(var c=Z,d=b.a,e=0;e<d.length;e++)Math.random()<c&&(d[e]=new q(d[e].name));Y.b(g);window.Monitoring.renderRate.ping();setTimeout(a,0)}var b=new da,c=document.createElement("div");c.style.display="flex";var d=document.createElement("input");d.type="range";d.style.marginBottom="10px";d.style.marginTop="5px";var e=document.createElement("label");e.textContent="mutations : "+(100*Z).toFixed(0)+"%";d.addEventListener("change",function(a){Z=
a.target.value/100;e.textContent="mutations : "+(100*Z).toFixed(0)+"%"});c.appendChild(e);c.appendChild(d);document.body.insertBefore(c,document.body.firstChild);var g=la(b);setTimeout(a,0)});}).call();
