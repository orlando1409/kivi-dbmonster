(function(){'use strict';function q(a,b){this.a=b};function t(){this.a=0;this.g=[];this.b=this.f=this.c=this.h=null};function u(a){var b=this.a="__pms"+Math.random().toString();window.addEventListener("message",function(d){d.source===window&&d.data===b&&a()})};function v(a){this.b=new window.MutationObserver(a);this.a=document.createTextNode("");this.b.observe(this.a,{characterData:!0})};new function(){this.a=0;this.c=1;this.b=[];this.g=[];this.f=new t;this.h=new t;this.i=[];var a=this;new v(function(){a.a|=256;for(var b=a.b;0<b.length;){a.b=[];for(var d=0;d<b.length;d++)b[d]();b=a.b}a.c++;a.a&=-258});new u(function(){a.a&=-3;a.a|=256;var b=a.g;if(0<b.length){a.g=[];for(var d=0;d<b.length;d++)b[d]()}a.c++;a.a&=-257});this.j=function(){var b=a.i,d,c,e,f,h,g;a.a&=-9;a.a|=256;d=a.h;a.h=a.f;a.f=d;for(h=0;h<b.length;h++)b[h].a|=8;do{for(;0!==(d.a&3);){if(0!==(d.a&1))for(d.a&=-2,c=d.g,
h=0;h<c.length;h++)if(e=c[h],null!==e)for(c[h]=null,g=0;g<e.length;g++)f=e[g],f.constructor===w?x(f):f.call();if(0!==(d.a&2))for(d.a&=-3,e=d.h,h=0;h<e.length;h++)f=e[h],f.constructor===w?x(f):f.call()}h=0;for(g=b.length;h<g;)f=b[h++],0===(f.a&16)?(f.a&=-33,h===g?b.pop():b[--h]=b.pop()):x(f);for(;0!==(d.a&4);)for(d.a&=-5,e=d.c,d.c=null,h=0;h<e.length;h++)f=e[h],f()}while(0!==(d.a&3));for(;0!==(d.a&8);)for(d.a&=-9,e=d.f,h=0;h<e.length;h++)f=e[h],f();null!==d.b&&(d.b.constructor===z?d.b.a.focus():d.b.focus(),
d.b=null);0<b.length&&0===(a.a&8)&&(a.a|=8,window.requestAnimationFrame(a.j));a.c++;a.a&=-257}};function A(){this.b="div";this.a=null}function w(a,b,d,c,e,f){this.a=a;this.i=b;this.l=null===d?0:d.l+1;this.b=c;this.c=f;this.h=this.g=this.f=null}function B(a,b,d){var c;void 0===c&&(c=document.createElement(a.b));return new w(10,a,d,b,0,c)}function x(a){10===(a.a&10)&&(a.i.a(a),a.a&=-9)}function C(a,b){null===a.f?(b.h=a,0!==(a.a&4)?(F(b,a.c,a),a.a&=-5):(b.a=a.c,G(b,a))):I(a.f,b,a);a.f=b}
w.prototype.j=function(){this.a|=1;this.a&=-19;var a=this.g;if(null!==a)if(a.constructor===q)a.a.a(a);else for(var b=0;b<a.length;b++){var d=a[b];d.a.a(d)}this.g=null;a=this.h;if(null!==a)if(a.constructor===q)a.a.a(a);else for(b=0;b<a.length;b++)d=a[b],d.a.a(d);this.h=null;a=this.f;null!==a&&(a.constructor===z?a.j():a.constructor===w&&a.j())};function z(a,b,d){this.g=a;this.i=b;this.b=d;this.h=this.a=this.f=this.c=this.l=null}function J(a,b){a.l=b;return a}function K(a,b){a.c=b;return a}function L(a,b){a.f=b;return a}function M(a,b){return a.g===b.g&&a.i===b.i&&a.l===b.l&&!0}function N(a,b){var d=a.g;0!==(d&1)?a.a=document.createTextNode(a.b):0!==(d&2)?a.a=0===(d&16)?document.createElement(a.i):document.createElementNS("http://www.w3.org/2000/svg",a.i):0!==(d&4)&&(d=B(a.i,a.b,b),a.a=d.c,a.h=d)}
function G(a,b){var d,c;c=a.g;var e,f;if(0!==(c&14))if(d=a.a,e=null,null!==a.l&&(e=a.l),null!==a.c&&(f=a.c.join(" "),e=null===e?f:e+" "+f),null!==e&&(0!==(c&2)?(a.b=e,d.className=e):0!==(c&4)?d.className=e:(f=d.className,d.className=""===f?e:f+" "+e)),0!==(c&4))x(a.h);else if(null!==a.f)if(c=a.f,"string"===typeof c)d.textContent=c;else for(d=0,c=a.f.length;d<c;d++)O(a,a.f[d],null,b)}
function F(a,b,d){var c=a.g,e=a.f;a.a=b;if(0!==(c&4))b=new w(14,a.i,d,a.b,0,b),x(a.h=b);else if(null!==e&&"string"!==typeof e&&0<e.length){for(var c=b.firstChild,f;8===c.nodeType;)f=c,c=c.nextSibling,b.removeChild(f);for(a=0;a<e.length;a++)for(F(e[a],c,d),c=c.nextSibling;8===c.nodeType;)f=c,c=c.nextSibling,b.removeChild(f)}}
function I(a,b,d){var c=a.a,e=a.g,f,h;b.a=c;if(0!==(e&1))a.b!==b.b&&(a.a.nodeValue=b.b);else if(0!==(e&14)){if(0!==(e&2))a.c!==b.c?(null===b.b&&(h=b.l,null!==b.c&&(f=b.c.join(" "),h=null===h?f:h+" "+f),b.b=h),a.b!==b.b&&(c.className=null===b.b?"":b.b)):b.b=a.b;else if(a.c!==b.c){f=a.c;h=b.c;var c=c.classList,g,m,l,k;if(null!==f&&0!==f.length)if(null===h||0===h.length)for(g=0;g<f.length;g++)c.remove(f[g]);else if(1===f.length&&1===h.length)m=f[0],l=h[0],m!==l&&(c.remove(m),c.add(l));else if(1===f.length){m=
f[0];k=-1;for(g=0;g<h.length;g++)if(l=h[g],m===l){k=g;break}else c.add(l);if(-1!==k)for(g=k+1;g<h.length;g++)c.add(h[g]);else c.remove(m)}else if(1===h.length){l=h[0];k=-1;for(g=0;g<f.length;g++)if(m=f[g],m===l){k=g;break}else c.remove(m);if(-1!==k)for(g=k+1;g<f.length;g++)c.remove(f[g]);else c.add(l)}else{k=g=0;for(var n=f.length-1,p=h.length-1,y=!1,r;g<=n&&k<=p&&f[g]===h[k];)g++,k++;for(;g<=n&&k<=p&&f[n]===h[p];)n--,p--;for(var D=Array(p-k+1);g<=n;g++){m=f[g];y=!0;for(r=k;r<=p;r++)if(l=h[r],m===
l){y=!1;D[r-k]=!0;break}y&&c.remove(m)}for(g=k;g<=p;g++)D[g-k]||c.add(h[g])}else if(null!==h&&0<h.length)for(g=0;g<h.length;g++)c.add(h[g])}if(0!==(e&4))a=b.h=a.h,d=b.b,a.b!==d&&(a.b=d,a.a|=8),x(a);else if(e=a.f,b=b.f,c=0,g=!1,"string"===typeof e)if("string"===typeof b)e!==b&&((d=a.a.firstChild)?d.nodeValue=b:a.a.textContent=b);else{if(null!==b)for(;c<b.length;)O(a,b[c++],null,d)}else if("string"===typeof b){if(null!==e)for(;c<e.length;)P(a,e[c++]);a.a.textContent=b}else if(null!==e&&0!==e.length)if(null===
b||0===b.length)for(;c<e.length;)P(a,e[c++]);else if(1===e.length&&1===b.length)f=e[0],h=b[0],M(f,h)?I(f,h,d):(b=h,e=f,N(b,d),a.a.replaceChild(b.a,e.a),G(b,d));else if(1===e.length){f=e[0];if(0===(a.g&32))for(;c<b.length;){h=b[c++];if(M(f,h)){I(f,h,d);g=!0;break}O(a,h,f.a,d)}else for(;c<b.length;){h=b[c++];I(f,h,d);g=!0;break}if(g)for(;c<b.length;)O(a,b[c++],null,d);else P(a,f)}else if(1===b.length){h=b[0];if(0===(a.g&32))for(;c<e.length;){f=e[c++];if(M(f,h)){I(f,h,d);g=!0;break}P(a,f)}else for(;c<
e.length;){f=e[c++];I(f,h,d);g=!0;break}if(g)for(;c<e.length;)P(a,e[c++]);else O(a,h,null,d)}else if(0===(a.g&32)){f=c=0;g=e.length-1;for(h=b.length-1;c<=g&&f<=h;){k=e[c];l=b[f];if(!M(k,l))break;c++;f++;I(k,l,d)}for(;c<=g&&f<=h;){k=e[g];l=b[h];if(!M(k,l))break;g--;h--;I(k,l,d)}for(;c<=g&&f<=h;)k=e[c++],l=b[f++],M(k,l)?I(k,l,d):(m=a,n=d,N(l,n),m.a.replaceChild(l.a,k.a),G(l,n));if(c<=g){do P(a,e[c++]);while(c<g)}else if(f<=h){e=h+1;e=e<b.length?b[e].a:null;do O(a,b[f++],e,d);while(f<h)}}else{f=l=0;
k=e.length-1;m=b.length-1;h=e[l];var c=b[f],H,n=0;a:do for(;;){I(h,c,d);l++;f++;if(l>k||f>m)break a;h=e[l];c=b[f]}while(l<=k&&f<=m);if(l>k)for(k=m+1,k=k<b.length?b[k].a:null;f<=m;)O(a,b[f++],k,d);else if(f>m)for(;l<=k;)P(a,e[l++]);else{p=k-l+1;c=m-f+1;h=Array(c);for(g=0;g<c;g++)h[g]=-1;y=!1;D=0;if(16>=p*c)for(g=l;g<=k;g++){var E=!0;r=e[g];for(l=f;l<=m;){H=b[l];h[l-f]=g;n>l?y=!0:n=l;I(r,H,d);E=!1;break}E&&(P(a,r),D++)}else{E={};for(g=f;g<=m;g++)E[null]=g;for(g=l;g<=k;g++)r=e[g],l=E[null],void 0!==
l?(H=b[l],h[l-f]=g,n>l?y=!0:n=l,I(r,H,d)):(P(a,r),D++)}if(y){g=h.slice(0);e=[];e.push(0);m=0;for(l=h.length;m<l;m++)if(-1!==h[m])if(k=e[e.length-1],h[k]<h[m])g[m]=k,e.push(m);else{k=0;for(n=e.length-1;k<n;)p=(k+n)/2|0,h[e[p]]<h[m]?k=p+1:n=p;h[m]<h[e[k]]&&(0<k&&(g[m]=e[k-1]),e[k]=m)}k=e.length;for(n=e[k-1];0<k--;)e[k]=n,n=g[n];l=e.length-1;for(g=c-1;0<=g;g--)-1===h[g]?(m=g+f,c=b[m],k=m+1,k=k<b.length?b[k].a:null,O(a,c,k,d)):0>l||g!==e[l]?(m=g+f,c=b[m],k=m+1,k=k<b.length?b[k].a:null,a.a.insertBefore(c.a,
k)):l--}else if(p-D!==c)for(g=c-1;0<=g;g--)-1===h[g]&&(m=g+f,c=b[m],k=m+1,k=k<b.length?b[k].a:null,O(a,c,k,d))}}else if(null!==b&&0<b.length)for(c=0;c<b.length;c++)O(a,b[c],null,d)}}z.prototype.j=function(){if(0!==(this.g&4))this.h.j();else if(null!==this.f){var a=this.f;if("string"!==typeof a)for(var b=0;b<a.length;b++)a[b].j()}};function O(a,b,d,c){N(b,c);a.a.insertBefore(b.a,d);G(b,c)}function P(a,b){a.a.removeChild(b.a);b.j()};function Q(a){return new z(2,a,null)}function R(a,b){void 0===b&&(b=null);return new z(4,a,b)}function S(a){var b=document.getElementById("app");a=B(T,a,null);b.appendChild(a.c);x(a);return a};function U(a,b){this.a=a;this.b=b}var V=0;function W(a){V++;this.name=a;this.a=null;a=[];for(var b=Math.floor(10*Math.random()+1),d=0;d<b;d++){var c=15*Math.random(),e="SELECT blah FROM something";.2>Math.random()&&(e="<IDLE> in transaction");.1>Math.random()&&(e="vacuum");a.push(new U(c,e))}this.a=a}function X(a){a=a.a.slice();a.sort(function(a,d){return a.a-d.a});for(a=a.slice(0,5);5>a.length;)a.push(new U(0,""));return a}
function aa(){this.a=[];for(var a=0;100>a;a++)this.a.push(new W("cluster"+a)),this.a.push(new W("cluster"+a+"slave"))};var ba=["popover","left"],Y=new A;Y.a=function(a){C(a,L(K(new z(8,null,null),ba),[L(J(Q("div"),"popover-content"),a.b),J(Q("div"),"arrow")]))};var ca=["elapsed","warn_long"],da=["elapsed","warn"],ea=["elapsed","short"],fa=["label-important"],ga=["label-warning"],ha=["label-success"],Z=new A;Z.b="tr";Z.a=function(a){for(var b=a.b,d=X(b),c=b.a.length,b=[L(J(Q("td"),"dbname"),b.name),L(J(Q("td"),"query-count"),[L(K(J(Q("span"),"label"),20<=c?fa:10<=c?ga:ha),""+c)])],c=0;5>c;c++){var e=d[c],f=e.a;b.push(L(K(J(Q("td"),"Query"),10<=f?ca:1<=f?da:ea),[new z(1,null,ia(f)),R(Y,e.b)]))}C(a,L(new z(8,null,null),b))};
function ia(a){if(!a)return"";var b=parseFloat(a).toFixed(2);60<a&&(b=(a%60).toFixed(2).split("."),b=Math.floor(a/60)+":"+b[0]+"."+b[1]);return b};var ja=["table","table-striped","latest-data"],T=new A;T.b="table";T.a=function(a){for(var b=a.b.a,d=Array(b.length),c=0;c<b.length;c++)d[c]=R(Z,b[c]);C(a,L(K(new z(8,null,null),ja),[L(Q("tbody"),d)]))};document.addEventListener("DOMContentLoaded",function(){function a(){for(var c=b.a,e=0;e<c.length;e++)c[e]=new W(c[e].name);T.a(d);window.Monitoring.renderRate.ping();setTimeout(a,0)}var b=new aa,d=S(b);setTimeout(a,0)});}).call();
