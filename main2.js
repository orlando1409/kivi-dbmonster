(function(){'use strict';function aa(a){this.b=new window.MutationObserver(a);this.a=document.createTextNode("");this.b.observe(this.a,{characterData:!0})}function ba(a){var b=this.a="__pms"+Math.random().toString();window.addEventListener("message",function(d){d.source===window&&d.data===b&&a()})}function q(){this.a=0;this.b=[];this.g=this.f=this.c=null}
function ca(a){var b,d;d=da;0===(d.a&8)&&(d.a|=8,window.requestAnimationFrame(d.i));d=d.c;var c;void 0===b&&(b=-1);if(-1===b)d.a|=t,null===d.c&&(d.c=[]),d.c.push(a);else{for(d.a|=u;b>=d.b.length;)d.b.push(null);c=d.b[b];null===c&&(c=d.b[b]=[]);c.push(a)}}
var u=1,t=2,da=new function(){this.a=0;this.f=1;this.b=[];this.h=[];this.g=new q;this.c=new q;var a=this;new aa(function(){a.a|=256;for(var b=a.b;0<b.length;){a.b=[];for(var d=0;d<b.length;d++)b[d]();b=a.b}a.f++;a.a&=-258});new ba(function(){a.a&=-3;a.a|=256;var b=a.h;if(0<b.length){a.h=[];for(var d=0;d<b.length;d++)b[d]()}a.f++;a.a&=-257});this.i=function(){var b,d,c,e,f,h;a.a&=-9;a.a|=256;b=a.c;a.c=a.g;a.g=b;do{for(;0!==(b.a&3);){if(0!==(b.a&u))for(b.a&=~u,d=b.b,f=0;f<d.length;f++)if(c=d[f],null!==
c)for(d[f]=null,h=0;h<c.length;h++)e=c[h],e.constructor===v?w(e):e.call();if(0!==(b.a&t))for(b.a&=~t,c=b.c,f=0;f<c.length;f++)e=c[f],e.constructor===v?w(e):e.call()}for(;0!==(b.a&4);)for(b.a&=-5,c=b.f,b.f=null,f=0;f<c.length;f++)e=c[f],e()}while(0!==(b.a&3));for(;0!==(b.a&8);)for(b.a&=-9,c=b.g,f=0;f<c.length;f++)e=c[f],e();a.f++;a.a&=-257}};function x(){this.c="div";this.b=this.a=null}function v(a,b,d,c,e,f){this.a=a;this.i=b;this.j=null===d?0:d.j+1;this.c=c;this.f=f;this.h=this.g=this.b=null}function w(a){(a.a&z)===z&&(a.i.b(a),a.a&=~A)}function B(a,b){null===a.b?(b.h=a,0!==(a.a&C)?(E(b,a.f,a),a.a&=~C):(b.a=a.f,G(b,a))):H(a.b,b,a);a.b=b}var A=1,C=8,z=3;function I(a,b,d){b=new v(z,a,d,b,0,document.createElement(a.c));null!==a.a&&a.a(b);return b};function J(a,b,d){this.g=a;this.i=b;this.b=d;this.h=this.a=this.f=this.c=this.j=null}function K(a,b){a.j=b;return a}function L(a,b){a.c=b;return a}function N(a,b){a.f=b;return a}function O(a,b){return a.g===b.g&&a.i===b.i&&a.j===b.j&&!0}function P(a,b){var d=a.g;0!==(d&Q)?a.a=document.createTextNode(a.b):0!==(d&R)?a.a=0===(d&ea)?document.createElement(a.i):document.createElementNS("http://www.w3.org/2000/svg",a.i):0!==(d&S)&&(d=I(a.i,a.b,b),a.a=d.f,a.h=d)}
function G(a,b){var d,c;c=a.g;var e,f;if(0!==(c&(R|S|T)))if(d=a.a,e=null,null!==a.j&&(e=a.j),null!==a.c&&(f=a.c.join(" "),e=null===e?f:e+" "+f),null!==e&&(0!==(c&R)?(a.b=e,d.className=e):0!==(c&S)?d.className=e:(f=d.className,d.className=""===f?e:f+" "+e)),0!==(c&S))w(a.h);else if(null!==a.f)if(c=a.f,"string"===typeof c)d.textContent=c;else for(d=0,c=a.f.length;d<c;d++)U(a,a.f[d],null,b)}
function E(a,b,d){var c=a.g,e=a.f;a.a=b;if(0!==(c&S))e=a.i,b=new v(z|C,e,d,a.b,0,b),null!==e.a&&e.a(b),w(a.h=b);else if(null!==e&&"string"!==typeof e&&0<e.length){for(var c=b.firstChild,f;8===c.nodeType;)f=c,c=c.nextSibling,b.removeChild(f);for(a=0;a<e.length;a++)for(E(e[a],c,d),c=c.nextSibling;8===c.nodeType;)f=c,c=c.nextSibling,b.removeChild(f)}}
function H(a,b,d){var c=a.a,e=a.g,f,h;b.a=c;if(0!==(e&Q))a.b!==b.b&&(a.a.nodeValue=b.b);else if(0!==(e&(R|S|T))){if(0!==(e&R))a.c!==b.c?(null===b.b&&(h=b.j,null!==b.c&&(f=b.c.join(" "),h=null===h?f:h+" "+f),b.b=h),a.b!==b.b&&(c.className=null===b.b?"":b.b)):b.b=a.b;else if(a.c!==b.c){f=a.c;h=b.c;var c=c.classList,g,m,l,k;if(null!==f&&0!==f.length)if(null===h||0===h.length)for(g=0;g<f.length;g++)c.remove(f[g]);else if(1===f.length&&1===h.length)m=f[0],l=h[0],m!==l&&(c.remove(m),c.add(l));else if(1===
f.length){m=f[0];k=-1;for(g=0;g<h.length;g++)if(l=h[g],m===l){k=g;break}else c.add(l);if(-1!==k)for(g=k+1;g<h.length;g++)c.add(h[g]);else c.remove(m)}else if(1===h.length){l=h[0];k=-1;for(g=0;g<f.length;g++)if(m=f[g],m===l){k=g;break}else c.remove(m);if(-1!==k)for(g=k+1;g<f.length;g++)c.remove(f[g]);else c.add(l)}else{k=g=0;for(var n=f.length-1,p=h.length-1,y=!1,r;g<=n&&k<=p&&f[g]===h[k];)g++,k++;for(;g<=n&&k<=p&&f[n]===h[p];)n--,p--;for(var D=Array(p-k+1);g<=n;g++){m=f[g];y=!0;for(r=k;r<=p;r++)if(l=
h[r],m===l){y=!1;D[r-k]=!0;break}y&&c.remove(m)}for(g=k;g<=p;g++)D[g-k]||c.add(h[g])}else if(null!==h&&0<h.length)for(g=0;g<h.length;g++)c.add(h[g])}if(0!==(e&S))d=b.h=a.h,a.b!==b.b&&(d.c=b.b,d.a|=A),w(d);else if(e=a.f,b=b.f,c=0,g=!1,"string"===typeof e)if("string"===typeof b)e!==b&&((d=a.a.firstChild)?d.nodeValue=b:a.a.textContent=b);else{if(null!==b)for(;c<b.length;)U(a,b[c++],null,d)}else if("string"===typeof b){if(null!==e)for(;c<e.length;)V(a,e[c++]);a.a.textContent=b}else if(null!==e&&0!==e.length)if(null===
b||0===b.length)for(;c<e.length;)V(a,e[c++]);else if(1===e.length&&1===b.length)f=e[0],h=b[0],O(f,h)?H(f,h,d):(b=h,e=f,P(b,d),a.a.replaceChild(b.a,e.a),G(b,d));else if(1===e.length){f=e[0];if(0===(a.g&W))for(;c<b.length;){h=b[c++];if(O(f,h)){H(f,h,d);g=!0;break}U(a,h,f.a,d)}else for(;c<b.length;){h=b[c++];H(f,h,d);g=!0;break}if(g)for(;c<b.length;)U(a,b[c++],null,d);else V(a,f)}else if(1===b.length){h=b[0];if(0===(a.g&W))for(;c<e.length;){f=e[c++];if(O(f,h)){H(f,h,d);g=!0;break}V(a,f)}else for(;c<
e.length;){f=e[c++];H(f,h,d);g=!0;break}if(g)for(;c<e.length;)V(a,e[c++]);else U(a,h,null,d)}else if(0===(a.g&W)){f=c=0;g=e.length-1;for(h=b.length-1;c<=g&&f<=h;){k=e[c];l=b[f];if(!O(k,l))break;c++;f++;H(k,l,d)}for(;c<=g&&f<=h;){k=e[g];l=b[h];if(!O(k,l))break;g--;h--;H(k,l,d)}for(;c<=g&&f<=h;)k=e[c++],l=b[f++],O(k,l)?H(k,l,d):(m=a,n=d,P(l,n),m.a.replaceChild(l.a,k.a),G(l,n));if(c<=g){do V(a,e[c++]);while(c<g)}else if(f<=h){e=h+1;e=e<b.length?b[e].a:null;do U(a,b[f++],e,d);while(f<h)}}else{f=l=0;k=
e.length-1;m=b.length-1;h=e[l];var c=b[f],M,n=0;a:do for(;;){H(h,c,d);l++;f++;if(l>k||f>m)break a;h=e[l];c=b[f]}while(l<=k&&f<=m);if(l>k)for(k=m+1,k=k<b.length?b[k].a:null;f<=m;)U(a,b[f++],k,d);else if(f>m)for(;l<=k;)V(a,e[l++]);else{p=k-l+1;c=m-f+1;h=Array(c);for(g=0;g<c;g++)h[g]=-1;y=!1;D=0;if(16>=p*c)for(g=l;g<=k;g++){var F=!0;r=e[g];for(l=f;l<=m;){M=b[l];h[l-f]=g;n>l?y=!0:n=l;H(r,M,d);F=!1;break}F&&(V(a,r),D++)}else{F={};for(g=f;g<=m;g++)F[null]=g;for(g=l;g<=k;g++)r=e[g],l=F[null],void 0!==l?
(M=b[l],h[l-f]=g,n>l?y=!0:n=l,H(r,M,d)):(V(a,r),D++)}if(y){g=h.slice(0);e=[];e.push(0);m=0;for(l=h.length;m<l;m++)if(-1!==h[m])if(k=e[e.length-1],h[k]<h[m])g[m]=k,e.push(m);else{k=0;for(n=e.length-1;k<n;)p=(k+n)/2|0,h[e[p]]<h[m]?k=p+1:n=p;h[m]<h[e[k]]&&(0<k&&(g[m]=e[k-1]),e[k]=m)}k=e.length;for(n=e[k-1];0<k--;)e[k]=n,n=g[n];l=e.length-1;for(g=c-1;0<=g;g--)-1===h[g]?(m=g+f,c=b[m],k=m+1,k=k<b.length?b[k].a:null,U(a,c,k,d)):0>l||g!==e[l]?(m=g+f,c=b[m],k=m+1,k=k<b.length?b[k].a:null,a.a.insertBefore(c.a,
k)):l--}else if(p-D!==c)for(g=c-1;0<=g;g--)-1===h[g]&&(m=g+f,c=b[m],k=m+1,k=k<b.length?b[k].a:null,U(a,c,k,d))}}else if(null!==b&&0<b.length)for(c=0;c<b.length;c++)U(a,b[c],null,d)}}function X(a){if(0!==(a.g&S)){a=a.h;a.a&=-3;var b=a.g;if(null!==b)for(var d=0;d<b.length;d++){var c=b[d];c.a.a(c)}a.g=null;b=a.h;if(null!==b)for(d=0;d<b.length;d++)c=b[d],c.a.a(c);a.h=null;null!==a.b&&X(a.b)}else if(null!==a.f&&(a=a.f,"string"!==typeof a))for(b=0;b<a.length;b++)X(a[b])}
function U(a,b,d,c){P(b,c);a.a.insertBefore(b.a,d);G(b,c)}function V(a,b){a.a.removeChild(b.a);X(b)}var Q=1,R=2,S=4,T=8,ea=16,W=32;function Y(a){return new J(R,a,null)}function fa(a){var b=ga;void 0===a&&(a=null);return new J(S,b,a)};function ha(a,b){this.a=a;this.b=b}var ia=0;function ja(a){ia++;this.name=a;this.a=null;ka(this)}function ka(a){for(var b=[],d=Math.floor(10*Math.random()+1),c=0;c<d;c++){var e=15*Math.random(),f="SELECT blah FROM something";.2>Math.random()&&(f="<IDLE> in transaction");.1>Math.random()&&(f="vacuum");b.push(new ha(e,f))}a.a=b}function la(a){a=a.a.slice();a.sort(function(a,d){return a.a-d.a});for(a=a.slice(0,5);5>a.length;)a.push(new ha(0,""));return a};function ma(a){this.a=a}var ga=new x;ga.b=function(a){B(a,N(L(new J(T,null,null),na),[N(K(Y("div"),"popover-content"),a.c.a),K(Y("div"),"arrow")]))};var na=["popover","left"];function oa(a){this.a=a}var Z=new x;Z.c="table";Z.a=function(a){function b(){for(var d=a.c.a,c=0;c<d.length;c++)ka(d[c]);Z.b(a);window.Monitoring.renderRate.ping();setTimeout(b,0)}b()};
Z.b=function(a){for(var b=a.c.a,d=Array(b.length),c=0;c<b.length;c++){for(var e=b[c],f=la(e),h=e.a.length,e=[N(K(Y("td"),"dbname"),e.name),N(K(Y("td"),"query-count"),[N(L(K(Y("span"),"label"),20<=h?pa:10<=h?qa:ra),""+h)])],h=0;5>h;h++){var g=f[h],m=g.a;e.push(N(L(K(Y("td"),"Query"),10<=m?sa:1<=m?ta:ua),[new J(Q,null,va(m)),fa(new ma(g.b))]))}d[c]=N(Y("tr"),e)}B(a,N(L(new J(T,null,null),wa),[N(Y("tbody"),d)]))};
function va(a){if(!a)return"";var b=parseFloat(a).toFixed(2);60<a&&(b=(a%60).toFixed(2).split("."),b=Math.floor(a/60)+":"+b[0]+"."+b[1]);return b}var sa=["elapsed","warn_long"],ta=["elapsed","warn"],ua=["elapsed","short"],wa=["table","table-striped","latest-data"],pa=["label-important"],qa=["label-warning"],ra=["label-success"];document.addEventListener("DOMContentLoaded",function(){for(var a=[],b=0;100>b;b++)a.push(new ja("cluster"+b)),a.push(new ja("cluster"+b+"slave"));ca(function(){var b=document.getElementById("app"),c=I(Z,new oa(a),null);b.appendChild(c.f);w(c)})});}).call();
