(function(){'use strict';var p;function aa(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}
function r(a,b,c){120!==b.charCodeAt(0)?a.setAttribute(b,c):109===b.charCodeAt(1)&&108===b.charCodeAt(2)?a.setAttributeNS("http://www.w3.org/XML/1998/namespace",b,c):108===b.charCodeAt(1)&&105===b.charCodeAt(2)?a.setAttributeNS("http://www.w3.org/1999/xlink",b,c):a.setAttribute(b,c)}function t(a,b,c){this.a=a;this.i=b;this.h=null;this.f=c;this.o=this.b=this.g=this.l=this.m=this.j=null}p=t.prototype;p.key=function(a){this.h=a;return this};p.v=function(a){this.f=a;return this};
p.data=function(a){this.f=a;return this};p.style=function(a){this.m=a;return this};p.className=function(a){this.l=a;return this};p.children=function(a){this.g=a;return this};p.value=function(a){this.a|=64;this.g=a;return this};p.checked=function(a){this.a|=128;this.g=a;return this};function v(a){if(0===(a.a&4)){if(a=a.g,null!==a&&"string"!==typeof a)for(var b=0;b<a.length;b++)v(a[b])}else w(a.o)}
function x(a){if(0===(a.a&4)){if(a=a.g,null!==a&&"string"!==typeof a)for(var b=0;b<a.length;b++)x(a[b])}else a.o.detach()}function y(a){if(0===(a.a&256))if(0!==(a.a&4)){a=a.o;a.c|=1;null!==a.w&&0===(a.c&65536)&&y(a.w);0!==(a.c&2)&&ba(a);var b=a.A.ma;null!==b&&b(a,a.v,a.state)}else{if(null!==a.g&&(a=a.g,"string"!==typeof a))for(b=0;b<a.length;b++)y(a[b])}else x(a)}
function ca(a,b){var c=a.a;0!==(c&1)?a.b=document.createTextNode(a.f):0!==(c&2)?a.b=0===(c&131072)?0===(c&32768)?document.createElement(a.i):document.createElementNS("http://www.w3.org/2000/svg",a.i):a.i.createElement():0===(c&256)&&(b=da(a.i,b,a.f),a.b=b.element,a.o=b)}
function z(a,b){var c,d,e,g,f=a.a,k;if(0!==(f&10)){k=a.b;if(0===(f&262144)){var l=a.f;if(null!==l)for(g=Object.keys(l),c=0,d=g.length;c<d;c++)e=g[c],k[e]=l[e];if(null!==a.j)for(g=Object.keys(a.j),c=0,d=g.length;c<d;c++)e=g[c],r(k,e,a.j[e]);null!==a.m&&(0===(f&32768)?k.style.cssText=a.m:k.setAttribute("style",a.m));null!==a.l&&(0===(f&32768)?k.className=a.l:k.setAttribute("class",a.l))}else 0===(f&8)?a.i.update(k,void 0,a.f):b.A.i.update(k,void 0,a.f);e=a.g;if(null!==e)if(0===(a.a&2048))if(0===(a.a&
192))if("string"===typeof e)k.textContent=e;else for(c=0,d=e.length;c<d;c++)A(a,e[c],null,b);else 0!==(a.a&64)?a.b.value=a.g:a.b.checked=a.g;else k.innerHTML=e}else 0!==(f&4)&&C(a.o)}function A(a,b,c,d){a=a.b;null===b.b?(ca(b,d),0!==(b.a&4)&&w(b.o),z(b,d),a.insertBefore(b.b,c)):(a.insertBefore(b.b,c),v(b),C(b.o,0===(b.a&512)?b.f:null))}
function ea(a,b,c,d){a=a.b;null===b.b?(ca(b,d),0!==(b.a&4)&&w(b.o),z(b,d),a.replaceChild(b.b,c.b)):(a.replaceChild(b.b,c.b),v(b),C(b.o,0===(b.a&512)?b.f:null));y(c)}function D(a,b){a.b.removeChild(b.b);y(b)}function E(a,b){a.b.textContent="";for(a=0;a<b.length;a++)y(b[a])}
function F(a,b,c){var d=a.b,e=a.a,g;b.b=a.b;if(0!==(e&1))a.f!==b.f&&(a.b.nodeValue=b.f);else if(0!==(e&10)){if(0===(e&262144)){if(a.f!==b.f){g=a.f;var f=b.f,k=Object.keys(g),l,m;for(m=0;m<k.length;m++){l=k[m];var h=f[l];g[l]!==h&&(d[l]=h)}}if(a.j!==b.j)if(0===(a.a&32))for(g=a.j,f=b.j,k=Object.keys(g),m=0;m<k.length;m++)l=k[m],h=f[l],g[l]!==h&&r(d,l,h);else if(g=a.j,f=b.j,null!==g)if(null===f)for(l=Object.keys(g),k=0;k<l.length;k++)d.removeAttribute(l[k]);else{l=Object.keys(g);for(k=0;k<l.length;k++)m=
l[k],f.hasOwnProperty(m)?(h=f[m],g[m]!==h&&r(d,m,h)):d.removeAttribute(m);l=Object.keys(f);for(k=0;k<l.length;k++)m=l[k],g.hasOwnProperty(m)||r(d,m,f[m])}else if(null!==f)for(l=Object.keys(f),k=0;k<l.length;k++)m=l[k],r(d,m,f[m]);a.m!==b.m&&(g=null===b.m?"":b.m,0===(e&32768)?d.style.cssText=g:d.setAttribute("style",g));a.l!==b.l&&(g=null===b.l?"":b.l,0===(e&32768)?d.className=g:d.setAttribute("class",g))}else a.f!==b.f&&(0===(e&8)?a.i.update(d,a.f,b.f):c.A.i.update(d,a.f,b.f));if(0===(a.a&192)){if(a.g!==
b.g)if(0===(a.a&2048))if(e=a.g,b=b.g,d=0,k=!1,"string"===typeof e)if(null===b)a.b.removeChild(a.b.firstChild);else if("string"===typeof b)(c=a.b.firstChild)?c.nodeValue=b:a.b.textContent=b;else for(a.b.removeChild(a.b.firstChild);d<b.length;)A(a,b[d++],null,c);else if("string"===typeof b){if(null!==e)for(;d<e.length;)y(e[d++]);a.b.textContent=b}else if(null!==e&&0!==e.length)if(null===b||0===b.length)E(a,e);else if(1===e.length&&1===b.length)g=e[0],f=b[0],G(g,f)?F(g,f,c):ea(a,f,g,c);else if(1===e.length){g=
e[0];if(0===(a.a&16))for(;d<b.length;){f=b[d++];if(G(g,f)){F(g,f,c);k=!0;break}A(a,f,g.b,c)}else for(;d<b.length;){f=b[d++];if(g.h===f.h){F(g,f,c);k=!0;break}A(a,f,g.b,c)}if(k)for(;d<b.length;)A(a,b[d++],null,c);else D(a,g)}else if(1===b.length){f=b[0];if(0===(a.a&16))for(;d<e.length;){if(g=e[d++],G(g,f)){F(g,f,c);k=!0;break}}else for(;d<e.length;)if(g=e[d++],g.h===f.h){F(g,f,c);k=!0;break}if(k){c=0;for(d--;c<d;)D(a,e[c++]);for(d++;d<e.length;)D(a,e[d++])}else E(a,e),A(a,f,null,c)}else if(0===(a.a&
16)){d=f=0;k=e.length-1;for(g=b.length-1;f<=k&&d<=g;){l=e[f];m=b[d];if(!G(l,m))break;f++;d++;F(l,m,c)}for(;f<=k&&d<=g;){l=e[k];m=b[g];if(!G(l,m))break;k--;g--;F(l,m,c)}for(;f<=k&&d<=g;)l=e[f++],m=b[d++],G(l,m)?F(l,m,c):ea(a,m,l,c);if(f<=k){do D(a,e[f++]);while(f<=k)}else if(d<=g){e=g+1;e=e<b.length?b[e].b:null;do A(a,b[d++],e,c);while(d<=g)}}else{d=k=0;l=e.length-1;m=b.length-1;f=e[k];g=b[d];var h=e[l],n=b[m],q,H;a:do{for(;f.h===g.h;){F(f,g,c);k++;d++;if(k>l||d>m)break a;f=e[k];g=b[d]}for(;h.h===
n.h;){F(h,n,c);l--;m--;if(k>l||d>m)break a;h=e[l];n=b[m]}if(f.h===n.h){F(f,n,c);f=m+1;f=f<b.length?b[f].b:null;a.b.insertBefore(n.b,f);k++;m--;if(k>l||d>m)break a;f=e[k];n=b[m];continue a}if(h.h===g.h){F(h,g,c);a.b.insertBefore(g.b,f.b);l--;d++;if(k>l||d>m)break a;h=e[l];g=b[d]}}while(0);if(k>l)for(f=m+1,f=f<b.length?b[f].b:null;d<=m;)A(a,b[d++],f,c);else if(d>m)for(;k<=l;)D(a,e[k++]);else{var X=l-k+1,f=m-d+1;g=Array(f);for(h=0;h<f;h++)g[h]=-1;var Y=!1,u=0,B=0;if(4>=f||16>=X*f)for(h=k;h<=l;h++){if(q=
e[h],B<f)for(n=d;n<=m;n++)if(H=b[n],q.h===H.h){g[n-d]=h;u>n?Y=!0:u=n;F(q,H,c);B++;e[h]=null;break}}else{for(var na=new Map,h=d;h<=m;h++)q=b[h],na.set(q.h,h);for(h=k;h<=l;h++)q=e[h],B<f&&(n=na.get(q.h),void 0!==n&&(H=b[n],g[n-d]=h,u>n?Y=!0:u=n,F(q,H,c),B++,e[h]=null))}if(X===e.length&&0===B)for(E(a,e),h=0;h<f;h++)A(a,b[h],null,c);else{if(B<X)for(h=k;h<=l;h++)q=e[h],null!==q&&D(a,q);if(Y){k=g.slice(0);e=[];e.push(0);l=0;for(m=g.length;l<m;l++)if(-1!==g[l])if(h=e[e.length-1],g[h]<g[l])k[l]=h,e.push(l);
else{h=0;for(n=e.length-1;h<n;)q=(h+n)/2|0,g[e[q]]<g[l]?h=q+1:n=q;g[l]<g[e[h]]&&(0<h&&(k[l]=e[h-1]),e[h]=l)}h=e.length;for(n=e[h-1];0<h--;)e[h]=n,n=k[n];n=e.length-1;for(h=f-1;0<=h;h--)-1===g[h]?(u=h+d,q=b[u],f=u+1,f=f<b.length?b[f].b:null,A(a,q,f,c)):0>n||h!==e[n]?(u=h+d,q=b[u],f=u+1,f=f<b.length?b[f].b:null,a.b.insertBefore(q.b,f)):n--}else if(B!==f)for(h=f-1;0<=h;h--)-1===g[h]&&(u=h+d,q=b[u],f=u+1,f=f<b.length?b[f].b:null,A(a,q,f,c))}}}else{if(null!==b&&0<b.length)for(d=0;d<b.length;d++)A(a,b[d],
null,c)}else d.innerHTML=b.g}else 0!==(e&64)?d.value!==b.g&&(d.value=b.g):d.checked!==b.g&&(d.checked=b.g)}else c=b.o=a.o,0!==(e&1024)&&a.f===b.f||C(c,0===(e&512)?b.f:void 0)}function G(a,b){return a.a===b.a&&a.i===b.i&&a.h===b.h}function I(){this.s=4;this.a=0;this.i="div";this.ma=this.la=this.$=this.aa=this.V=this.fa=this.na=null}I.prototype.tagName=function(a){this.i=a;return this};function J(a,b){a.s|=b.s;a.a|=b.s;a.i=b;return a}
I.prototype.canvas=function(){this.s|=65536;this.a|=65536;this.i="canvas";return this};function fa(a,b){a.V=b;return a}I.prototype.update=function(a){this.fa=a;return this};I.prototype.K=function(a){return new t(4,this,void 0===a?null:a)};function ga(a,b){return new t(1028,a,void 0===b?null:b)}
function da(a,b,c){var d;d=0===(a.a&131072)?0===(a.a&32768)?document.createElement(a.i):document.createElementNS("http://www.w3.org/2000/svg",a.i):a.i.createElement();b=new ha(a.s,a,d,b,c);0!==(a.a&1)&&(d.va=b);null!==a.V&&(b.state=a.V(b,b.v));null!==a.aa&&a.aa(b,b.v,b.state);return b}function ha(a,b,c,d,e){this.c=a;this.sa=0;this.A=b;this.element=c;this.depth=void 0===d?0:d.depth+1;this.v=void 0===e?null:e;this.state=null;this.w=0===(a&65536)?null:c.getContext("2d");this.ea=this.ca=null}
function ia(a){0===(a.c&4)&&(a.c|=4,ja(a))}p=ha.prototype;p.D=function(){return 0===(this.c&131072)?new t(8,null,null):this.A.i.D()};function ka(a){0===(a.c&512)?(a.c|=768,la++,K|=8):a.c|=256}function ma(a){0===(a.c&512)?a.c&=-257:(a.c&=-769,oa())}p.update=function(a){C(this,a)};function L(a,b){null===a.w?(b.o=a,b.b=a.element,z(b,a)):F(a.w,b,a);a.w=b}p.M=function(a,b){this.c|=void 0===a?8:a;0===(this.c&5)&&(this.c|=4,(void 0===b?0:b)||ja(this),pa(M(),this))};
function w(a){qa(a);null!==a.w&&0===(a.c&65536)&&v(a.w)}p.detach=function(){null!==this.w&&0===(this.c&65536)&&x(this.w);ba(this)};p.subscribe=function(a){return a.ua(this)};function C(a,b){var c=a.c;if(void 0!==b&&0===(c&1024)){var d=a.v,e=a.A.na;null!==e?e(a,d,b):ia(a);a.v=b}6===(a.c&6)&&(0===(K&8)||0!==(K&32)||0!==(c&256)||0<ra()?(a.A.fa(a,a.v,a.state),a.sa=N,a.c&=-133):pa(M(),a))}function qa(a){a.c|=2;var b=a.A.$;null!==b&&b(a,a.v,a.state)}
function ba(a){0!==(a.c&512)&&oa();a.c&=-531;for(var b=a.ca;null!==b;)b.ja(),b=b.ka;a.ca=null;ja(a);b=a.A.la;null!==b&&b(a,a.v,a.state)}function ja(a){for(var b=a.ea;null!==b;)b.ja(),b=b.ka;a.ea=null}function sa(a,b,c){var d=da(a,void 0,c);M().write(function(){b.appendChild(d.element);qa(d);C(d)});return d}function O(){this.a=0;this.H=[];this.C=this.Z=this.I=this.J=null}
function pa(a,b){if(0===(b.c&128)){b.c|=128;var c=b.depth;for(a.a|=1;c>=a.H.length;)a.H.push(null);var d=a.H[c];null===d?a.H[c]=[b]:d.push(b)}}O.prototype.write=function(a){this.a|=2;null===this.J&&(this.J=[]);this.J.push(a)};O.prototype.read=function(a){this.a|=4;null===this.I&&(this.I=[]);this.I.push(a)};O.prototype.focus=function(a){this.C=a};var K=0,N=0,ta=[],ua=[],va=new O,wa=new O,P=[],xa=document.createTextNode(""),ya="__kivi"+Math.random(),la=0,Q=6,R=60,S=0,za=0,T=0;
(new MutationObserver(Aa)).observe(xa,{characterData:!0});window.addEventListener("message",Ba);function Ca(){0===(K&4)&&(K|=4,requestAnimationFrame(Da))}function Ba(a){if(a.source===window&&a.data===ya){K&=-3;a=ua;ua=[];for(var b=0;b<a.length;b++)a[b]();N++}}
function Da(a){var b;K&=-21;0!==(K&8)&&(0<T&&(R+=.0165*(1E3/(a-T)-R),console.log(R),S+=55>R?-1:1,5<S?(S=0,Q+=.1):-5>S&&(S=0,Q*=.66),6<Q?Q=6:2>Q&&(Q=2)),T=a,za=a+Q,Ca());var c=wa;wa=va;va=c;for(a=0;a<P.length;a++)P[a].c|=4;do{for(;0!==(c.a&4);)for(c.a&=-5,b=c.I,c.I=null,a=0;a<b.length;a++)b[a]();for(;0!==(c.a&3);){if(0!==(c.a&1)){c.a&=-2;var d=c.H;for(a=0;a<d.length;a++){var e=d[a];if(null!==e)for(d[a]=null,b=0;b<e.length;b++)C(e[b])}}if(0!==(c.a&2))for(c.a&=-3,b=c.J,c.J=null,a=0;a<b.length;a++)b[a]()}a=
0;for(b=P.length;a<b;)d=P[a++],0===(d.c&16)?(d.c&=-33,a===b?P.pop():P[--a]=P.pop()):C(d)}while(0!==(c.a&7));for(;0!==(c.a&8);)for(c.a&=-9,b=c.Z,c.Z=null,a=0;a<b.length;a++)b[a]();null!==c.C&&(c.C.constructor===t?c.C.b.focus():c.C.focus(),c.C=null);0<P.length&&Ca();N++}function Aa(){for(;0<ta.length;){var a=ta;ta=[];for(var b=0;b<a.length;b++)a[b]();N++}K&=-2}function M(){Ca();return wa}function oa(){la--;0===la&&(K&=-9,T=0)}
function ra(){if(0!==(K&16))return 0;var a=za-performance.now();return 0>=a?(K|=16,0):a}function U(a){this.s=131072;this.a=0;this.da=a;this.ba=this.pa=this.l=this.m=this.j=this.f=null}p=U.prototype;p.v=function(a){this.f=a;return this};p.style=function(a){this.m=a;return this};p.className=function(a){this.l=a;return this};p.K=function(a){return new t(2|this.s,this,void 0===a?null:a)};p.D=function(a){return new t(8|this.s,this,void 0===a?null:a)};
p.createElement=function(){var a,b,c,d=this.ba;if(null===d){d=0===(this.a&32768)?document.createElement(this.da):document.createElementNS("http://www.w3.org/2000/svg",this.da);if(null!==this.f)for(b=Object.keys(this.f),a=0;a<b.length;a++)c=b[a],d[c]=this.f[c];if(null!==this.j)for(b=Object.keys(this.j),a=0;a<b.length;a++)c=b[a],r(d,c,this.j[c]);null!==this.m&&(0===(this.a&32768)?d.style.cssText=this.m:d.setAttribute("style",this.m));null!==this.l&&(0===(this.a&32768)?d.className=this.l:d.setAttribute("class",
this.l));return 0!==(this.a&1)?(this.ba=d,d.cloneNode(!1)):d}return d.cloneNode(!1)};p.update=function(a,b,c){this.pa(a,b,c)};function Ea(a,b){this.X=a;this.query=b}var Fa=new Ea(0,"");function V(a){this.id=Ga++;this.name=a;this.Y=null;this.update()}V.prototype.update=function(){for(var a=[],b=Math.floor(10*Math.random()+1),c=0;c<b;c++)a.push(new Ea(15*Math.random(),.1>Math.random()?"vacuum":.2>Math.random()?"<IDLE> in transaction":"SELECT blah FROM something"));this.Y=a};
function Ha(a){a=a.Y.slice();a.sort(function(a,c){return a.X-c.X});for(a=a.slice(0,5);5>a.length;)a.push(Fa);return a}var Ga=0;function Ia(a){this.L=[];for(var b=0;b<a;b++)this.L.push(new V("cluster"+b)),this.L.push(new V("cluster"+b+" slave"))}Ia.prototype.update=function(){for(var a=this.L,b=0;b<a.length;b++)a[b]=new V(a[b].name)};
var Ja=(new U("div")).className("popover-content"),Ka=(new U("div")).className("arrow"),La=fa(J(new I,(new U("div")).className("popover left")),function(){return{qa:Ka.K()}}).update(function(a,b,c){L(a,a.D().children([Ja.K().children(b),c.qa]))});function Ma(a){if(!a)return"";if(60<a){var b=(a%60).toFixed(2).split(".");return Math.floor(a/60)+":"+b[0]+"."+b[1]}return a.toFixed(2)}
var Na=(new U("td")).className("dbname"),Oa=(new U("td")).className("query-count"),Pa=fa((new I).tagName("tr"),function(a,b){return{ta:Na.K().children(b.name)}}).update(function(a,b,c){var d=Ha(b),e=b.Y.length;b=Array(7);b[0]=c.ta;b[1]=Oa.K().children([(new t(2,"span",null)).className(20<=e?"label label-important":10<=e?"label label-warning":"label label-success").children(""+e)]);for(c=0;5>c;c++){var e=d[c],g=e.X;b[c+2]=e!==Fa?(new t(2,"td",null)).className(10<=g?"Query elapsed warn_long":1<=g?"Query elapsed warn":
"Query elapsed short").children([new t(1,null,Ma(g)),ga(La,e.query)]):(new t(2,"td",null)).className("").children([new t(1,null,""),ga(La,"")])}L(a,a.D().children(b))}),Qa=J(new I,(new U("table")).className("table table-striped latest-data")).update(function(a,b){b=b.L;for(var c=Array(b.length),d=0;d<b.length;d++)c[d]=ga(Pa,b[d]);L(a,a.D().children([(new t(2,"tbody",null)).children(c)]))});function Ra(a,b,c,d){this.min=a;this.max=b;this.ha=c;this.ga=d}
function Sa(){this.G=[];this.ra=100;this.B=-1}function Ta(a,b){for(var c=a.G,d=0;d<c.length;d++)b(c[(a.B+1+d)%c.length],d)}function Ua(a){var b=a.G;if(0===b.length)return new Ra(0,0,0,0);for(var c=b[(a.B+1)%b.length],d=c,e=0,g=0;g<b.length;g++){var f=b[(a.B+1+g)%b.length];f<c&&(c=f);f>d&&(d=f);e+=f}return new Ra(c,d,e/b.length,b[a.B])}var Va=[],Wa=-1;function Xa(a){Va.push(a);-1===Wa&&requestAnimationFrame(function(){Wa=-1;var a=Va;Va=[];for(var c=0;c<a.length;c++)a[c]()})}
function W(a){var b=this;this.oa=function(){b.ia();b.W=!1};this.name=a;this.element=document.createElement("div");this.element.style.cssText="padding: 2px;background-color: #020;font-family: monospace;font-size: 12px;color: #0f0";this.W=!1;this.M()}W.prototype.M=function(){this.W||(this.W=!0,Xa(this.oa))};W.prototype.ia=function(){throw Error("sync method not implemented");};
function Ya(a,b,c,d){W.call(this,a);this.c=b;this.U=c;this.G=d;a=document.createElement("div");a.style.cssText="text-align: center";a.textContent=this.name;c=document.createElement("div");0===(b&1)?(this.R=document.createElement("div"),c.appendChild(this.R)):this.R=null;0===(b&2)?(this.O=document.createElement("div"),c.appendChild(this.O)):this.O=null;0===(b&4)?(this.P=document.createElement("div"),c.appendChild(this.P)):this.P=null;0===(b&8)?(this.N=document.createElement("div"),c.appendChild(this.N)):
this.N=null;this.element.appendChild(a);this.element.appendChild(c);0===(b&16)?(this.canvas=document.createElement("canvas"),this.canvas.style.cssText="display: block; padding: 0; margin: 0",this.canvas.width=100,this.canvas.height=30,this.F=this.canvas.getContext("2d"),this.element.appendChild(this.canvas)):this.F=this.canvas=null}aa(Ya,W);
Ya.prototype.ia=function(){var a=this,b=Ua(this.G),c=30/(1.2*b.max),d,e,g;0===(this.c&32)?(d=b.min.toFixed(2),e=b.max.toFixed(2),g=b.ha.toFixed(2),b=b.ga.toFixed(2)):(d=Math.round(b.min).toString(),e=Math.round(b.max).toString(),g=Math.round(b.ha).toString(),b=Math.round(b.ga).toString());null!==this.R&&(this.R.textContent="min: \u00a0"+d+this.U);null!==this.O&&(this.O.textContent="max: \u00a0"+e+this.U);null!==this.P&&(this.P.textContent="mean: "+g+this.U);null!==this.N&&(this.N.textContent="last: "+
b+this.U);null!==this.F&&(this.F.fillStyle="#010",this.F.fillRect(0,0,100,30),this.F.fillStyle="#0f0",Ta(this.G,function(b,d){a.F.fillRect(d,30,1,-(b*c))}))};var Z=null;
function Za(){function a(f){0<e&&(g+=d*(1E3/(f-e)-g));e=f;f=g;b.B=(b.B+1)%b.ra;b.G[b.B]=f;c.M();requestAnimationFrame(a)}Z||(Z=document.createElement("div"),Z.style.cssText="position: fixed;opacity: 0.9;right: 0;bottom: 0",document.body.appendChild(Z));var b=new Sa,c=new Ya("FPS",39,"",b);Z.appendChild(c.element);var d=2/121,e=0,g=60;requestAnimationFrame(a)}function $a(){this.u=!1;this.T=this.S=this.top=this.left=0}var ab=fa(J(new I,(new U("div")).className("DragMe")),function(){return new $a});
ab.$=function(a,b,c){a.element.onmousedown=function(b){c.u||(c.u=!0,c.S=b.pageX-b.currentTarget.offsetLeft,c.T=b.pageY-b.currentTarget.offsetTop,ka(a))};a.element.ontouchstart=function(b){c.u||(b.preventDefault(),c.u=!0,c.S=b.touches[0].pageX-b.currentTarget.offsetLeft,c.T=b.touches[0].pageY-b.currentTarget.offsetTop,ka(a))};window.onmousemove=function(b){c.u&&(c.left=b.pageX-c.S,c.top=b.pageY-c.T,a.M())};window.ontouchmove=function(b){c.u&&(b.preventDefault(),c.left=b.touches[0].pageX-c.S,c.top=
b.touches[0].pageY-c.T,a.M())};window.onmouseup=function(){c.u&&(c.u=!1,ma(a))};window.ontouchend=function(b){c.u&&(b.preventDefault(),c.u=!1,ma(a))}};var bb=ab.update(function(a,b,c){L(a,a.D().style("left:"+c.left+"px;top:"+c.top+"px").children("DragMe"))});
document.addEventListener("DOMContentLoaded",function(){function a(){for(var d=b.L,e=0;e<d.length;e++)1>Math.random()&&(d[e]=new V(d[e].name));ia(c);c.update();M().write(a)}Za();var b=new Ia(100),c=sa(Qa,document.getElementById("app"),b);sa(bb,document.body);M().write(a)});}).call();
