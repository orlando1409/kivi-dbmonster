(function(){'use strict';var q;function aa(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}
function t(a,b,c){120!==b.charCodeAt(0)?a.setAttribute(b,c):109===b.charCodeAt(1)&&108===b.charCodeAt(2)?a.setAttributeNS("http://www.w3.org/XML/1998/namespace",b,c):108===b.charCodeAt(1)&&105===b.charCodeAt(2)?a.setAttributeNS("http://www.w3.org/1999/xlink",b,c):a.setAttribute(b,c)}function u(a,b,c){this.a=a;this.i=b;this.g=null;this.f=c;this.u=this.b=this.h=this.l=this.o=this.j=null}q=u.prototype;q.key=function(a){this.g=a;return this};q.A=function(a){this.f=a;return this};
q.data=function(a){this.f=a;return this};q.style=function(a){this.o=a;return this};q.className=function(a){this.l=a;return this};function v(a,b){a.h=b;return a}q.children=function(a){this.a|=16;this.h=a;return this};q.value=function(a){this.a|=128;this.h=a;return this};q.checked=function(a){this.a|=256;this.h=a;return this};function w(a){if(0===(a.a&4)){if(a=a.h,null!==a&&"string"!==typeof a)for(var b=0;b<a.length;b++)w(a[b])}else x(a.u)}
function z(a){if(0===(a.a&4)){if(a=a.h,null!==a&&"string"!==typeof a)for(var b=0;b<a.length;b++)z(a[b])}else a.u.detach()}function A(a){if(0===(a.a&512))if(0!==(a.a&4)){a=a.u;a.c|=1;null!==a.v&&0===(a.c&65536)&&A(a.v);0!==(a.c&2)&&ba(a);var b=a.w.ka;null!==b&&b(a,a.A,a.state)}else{if(null!==a.h&&(a=a.h,"string"!==typeof a))for(b=0;b<a.length;b++)A(a[b])}else z(a)}
function ca(a,b){var c=a.a;0!==(c&1)?a.b=document.createTextNode(a.f):0!==(c&2)?a.b=0===(c&131072)?0===(c&32768)?document.createElement(a.i):document.createElementNS("http://www.w3.org/2000/svg",a.i):a.i.createElement():0===(c&512)&&(b=da(a.i,b,a.f),a.b=b.element,a.u=b)}
function C(a,b){var c,d,e,g,f=a.a,l;if(0!==(f&10)){l=a.b;if(0===(f&262144)){var k=a.f;if(null!==k)for(g=Object.keys(k),c=0,d=g.length;c<d;c++)e=g[c],l[e]=k[e];if(null!==a.j)for(g=Object.keys(a.j),c=0,d=g.length;c<d;c++)e=g[c],t(l,e,a.j[e]);null!==a.o&&(0===(f&32768)?l.style.cssText=a.o:l.setAttribute("style",a.o));null!==a.l&&(0===(f&32768)?l.className=a.l:l.setAttribute("class",a.l))}else 0===(f&8)?a.i.B(l,void 0,a.f):b.w.i.B(l,void 0,a.f);e=a.h;if(null!==e)if(0===(f&4096))if(0===(f&384))if(0===
(f&16))"string"===typeof e?l.textContent=e:D(a,e,null,b);else for(c=0,d=e.length;c<d;c++)D(a,e[c],null,b);else 0!==(a.a&128)?a.b.value=a.h:a.b.checked=a.h;else l.innerHTML=e}else 0!==(f&4)&&E(a.u)}function D(a,b,c,d){a=a.b;null===b.b?(ca(b,d),0!==(b.a&4)&&x(b.u),C(b,d),a.insertBefore(b.b,c)):(a.insertBefore(b.b,c),w(b),E(b.u,0===(b.a&1024)?b.f:null))}
function F(a,b,c,d){a=a.b;null===b.b?(ca(b,d),0!==(b.a&4)&&x(b.u),C(b,d),a.replaceChild(b.b,c.b)):(a.replaceChild(b.b,c.b),w(b),E(b.u,0===(b.a&1024)?b.f:null));A(c)}function G(a,b){a.b.removeChild(b.b);A(b)}function ea(a,b){a.b.textContent="";for(a=0;a<b.length;a++)A(b[a])}
function H(a,b,c){var d=a.b,e=a.a,g;b.b=a.b;if(0!==(e&1))a.f!==b.f&&(a.b.nodeValue=b.f);else if(0!==(e&10)){if(0===(e&262144)){if(a.f!==b.f){g=a.f;var f=b.f,l=Object.keys(g),k,m;for(m=0;m<l.length;m++){k=l[m];var h=f[k];g[k]!==h&&(d[k]=h)}}if(a.j!==b.j)if(0===(a.a&64))for(g=a.j,f=b.j,l=Object.keys(g),m=0;m<l.length;m++)k=l[m],h=f[k],g[k]!==h&&t(d,k,h);else if(g=a.j,f=b.j,null!==g)if(null===f)for(k=Object.keys(g),l=0;l<k.length;l++)d.removeAttribute(k[l]);else{k=Object.keys(g);for(l=0;l<k.length;l++)m=
k[l],f.hasOwnProperty(m)?(h=f[m],g[m]!==h&&t(d,m,h)):d.removeAttribute(m);k=Object.keys(f);for(l=0;l<k.length;l++)m=k[l],g.hasOwnProperty(m)||t(d,m,f[m])}else if(null!==f)for(k=Object.keys(f),l=0;l<k.length;l++)m=k[l],t(d,m,f[m]);a.o!==b.o&&(g=null===b.o?"":b.o,0===(e&32768)?d.style.cssText=g:d.setAttribute("style",g));a.l!==b.l&&(g=null===b.l?"":b.l,0===(e&32768)?d.className=g:d.setAttribute("class",g))}else a.f!==b.f&&(0===(e&8)?a.i.B(d,a.f,b.f):c.w.i.B(d,a.f,b.f));if(0===(a.a&384)){if(a.h!==b.h)if(0===
(a.a&4096))if(d=a.h,b=b.h,0===(a.a&16))null===d?"string"===typeof b?a.b.textContent=b:D(a,b,null,c):null===b?"string"===typeof d?a.b.textContent="":G(a,d):"string"===typeof d?"string"===typeof b?(c=a.b.firstChild)?c.nodeValue=b:a.b.textContent=b:(a.b.textContent="",D(a,b,null,c)):"string"===typeof b?(a.b.textContent=b,A(d)):I(d,b)&&d.g===b.g?H(d,b,c):F(a,b,d,c);else if(null!==d&&0!==d.length)if(null===b||0===b.length)ea(a,d);else if(1===d.length&&1===b.length)e=d[0],b=b[0],I(e,b)&&e.g===b.g?H(e,b,
c):F(a,b,e,c);else if(0===(a.a&32)){e=f=0;l=d.length-1;for(g=b.length-1;f<=l&&e<=g;){k=d[f];m=b[e];if(!I(k,m)||k.g!==m.g)break;f++;e++;H(k,m,c)}for(;f<=l&&e<=g;){k=d[l];m=b[g];if(!I(k,m)||k.g!==m.g)break;l--;g--;H(k,m,c)}for(;f<=l&&e<=g;)k=d[f++],m=b[e++],I(k,m)&&k.g===m.g?H(k,m,c):F(a,m,k,c);if(f<=l){do G(a,d[f++]);while(f<=l)}else if(e<=g){d=g+1;d=d<b.length?b[d].b:null;do D(a,b[e++],d,c);while(e<=g)}}else{e=l=0;k=d.length-1;m=b.length-1;f=d[l];g=b[e];var h=d[k],n=b[m],p,y;a:for(;;){for(;f.g===
g.g;){I(f,g)?H(f,g,c):F(a,g,f,c);l++;e++;if(l>k||e>m)break a;f=d[l];g=b[e]}for(;h.g===n.g;){I(h,n)?H(h,n,c):F(a,n,h,c);k--;m--;if(l>k||e>m)break a;h=d[k];n=b[m]}if(h.g===g.g){I(h,g)?H(h,g,c):F(a,g,h,c);a.b.insertBefore(g.b,f.b);k--;e++;if(l>k||e>m)break;h=d[k];g=b[e]}else if(f.g===n.g){I(f,n)?H(f,n,c):F(a,n,f,c);f=m+1;f=f<b.length?b[f].b:null;a.b.insertBefore(n.b,f);l++;m--;if(l>k||e>m)break;f=d[l];n=b[m]}else break}if(l>k)for(f=m+1,f=f<b.length?b[f].b:null;e<=m;)D(a,b[e++],f,c);else if(e>m)for(;l<=
k;)G(a,d[l++]);else{var W=k-l+1,f=m-e+1;g=Array(f);for(h=0;h<f;h++)g[h]=-1;var X=!1,r=0,B=0;if(4>=f||16>=W*f)for(h=l;h<=k;h++){if(p=d[h],B<f)for(n=e;n<=m;n++)if(y=b[n],p.g===y.g){g[n-e]=h;r>n?X=!0:r=n;I(p,y)?H(p,y,c):F(a,y,p,c);B++;d[h]=null;break}}else{for(var oa=new Map,h=e;h<=m;h++)p=b[h],oa.set(p.g,h);for(h=l;h<=k;h++)p=d[h],B<f&&(n=oa.get(p.g),void 0!==n&&(y=b[n],g[n-e]=h,r>n?X=!0:r=n,I(p,y)?H(p,y,c):F(a,y,p,c),B++,d[h]=null))}if(W===d.length&&0===B)for(ea(a,d);e<f;)D(a,b[e++],null,c);else{for(h=
W-B;0<h;)p=d[l++],null!==p&&(G(a,p),h--);if(X){l=g.slice(0);d=[];d.push(0);k=0;for(m=g.length;k<m;k++)if(-1!==g[k])if(h=d[d.length-1],g[h]<g[k])l[k]=h,d.push(k);else{h=0;for(n=d.length-1;h<n;)p=(h+n)/2|0,g[d[p]]<g[k]?h=p+1:n=p;g[k]<g[d[h]]&&(0<h&&(l[k]=d[h-1]),d[h]=k)}h=d.length;for(n=d[h-1];0<h--;)d[h]=n,n=l[n];n=d.length-1;for(h=f-1;0<=h;h--)-1===g[h]?(r=h+e,p=b[r],f=r+1,f=f<b.length?b[f].b:null,D(a,p,f,c)):0>n||h!==d[n]?(r=h+e,p=b[r],f=r+1,f=f<b.length?b[f].b:null,a.b.insertBefore(p.b,f)):n--}else if(B!==
f)for(h=f-1;0<=h;h--)-1===g[h]&&(r=h+e,p=b[r],f=r+1,f=f<b.length?b[f].b:null,D(a,p,f,c))}}}else{if(null!==b)for(e=0;e<b.length;e++)D(a,b[e],null,c)}else d.innerHTML=b.h}else 0!==(e&128)?d.value!==b.h&&(d.value=b.h):d.checked!==b.h&&(d.checked=b.h)}else c=b.u=a.u,0!==(e&2048)&&a.f===b.f||E(c,0===(e&1024)?b.f:void 0)}function I(a,b){return a.a===b.a&&a.i===b.i}function J(){this.s=4;this.W=8;this.a=0;this.i="div";this.ka=this.ja=this.ga=this.O=this.B=this.la=null}
J.prototype.tagName=function(a){this.i=a;"string"!==typeof a&&(this.s|=a.s,this.W|=a.s,this.a|=a.s);return this};J.prototype.canvas=function(){this.s|=65536;this.a|=65536;this.i="canvas";return this};J.prototype.update=function(a){this.B=a;return this};J.prototype.L=function(a){return new u(4,this,void 0===a?null:a)};function fa(a,b){return new u(2052,a,void 0===b?null:b)}
function da(a,b,c){var d;d=0===(a.a&131072)?0===(a.a&32768)?document.createElement(a.i):document.createElementNS("http://www.w3.org/2000/svg",a.i):a.i.createElement();b=new ga(a.s,a,d,b,c);0!==(a.a&1)&&(d.ra=b);null!==a.O&&a.O(b,b.A);return b}function ga(a,b,c,d,e){this.c=a;this.pa=0;this.w=b;this.element=c;this.depth=void 0===d?0:d.depth+1;this.A=void 0===e?null:e;this.state=null;this.v=0===(a&65536)?null:c.getContext("2d");this.ca=this.aa=null}function ha(a){0===(a.c&4)&&(a.c|=4,K(a))}
function L(a){return new u(a.w.W,a.w.i,null)}q=ga.prototype;q.update=function(a){E(this,a)};q.H=function(a){null===this.v?(a.u=this,a.b=this.element,C(a,this)):H(this.v,a,this);this.v=a};q.N=function(a,b){this.c|=void 0===a?8:a;if(0===(this.c&5)&&(this.c|=4,(void 0===b?0:b)||K(this),a=ia(),0===(this.c&128))){this.c|=128;b=this.depth;for(a.a|=1;b>=a.I.length;)a.I.push(null);var c=a.I[b];null===c?a.I[b]=[this]:c.push(this)}};function x(a){ja(a);null!==a.v&&0===(a.c&65536)&&w(a.v)}
q.detach=function(){null!==this.v&&0===(this.c&65536)&&z(this.v);ba(this)};q.subscribe=function(a){return a.sa(this)};function E(a,b){if(void 0!==b&&0===(a.c&512)){var c=a.A,d=a.w.la;null!==d?d(a,c,b):ha(a);a.A=b}6===(a.c&6)&&(a.w.B(a,a.A,a.state),a.pa=M,a.c&=-133)}function ja(a){a.c|=2;var b=a.w.ga;null!==b&&b(a,a.A,a.state)}function ba(a){a.c&=-19;for(var b=a.aa;null!==b;)b.ha(),b=b.ia;a.aa=null;K(a);b=a.w.ja;null!==b&&b(a,a.A,a.state)}
function K(a){for(var b=a.ca;null!==b;)b.ha(),b=b.ia;a.ca=null}function ka(a){var b=document.getElementById("app"),c=da(la,void 0,a);ia().write(function(){b.appendChild(c.element);ja(c);E(c)});return c}function N(){this.a=0;this.I=[];this.D=this.Z=this.J=this.K=null}N.prototype.write=function(a){this.a|=2;null===this.K&&(this.K=[]);this.K.push(a)};N.prototype.read=function(a){this.a|=4;null===this.J&&(this.J=[]);this.J.push(a)};N.prototype.focus=function(a){this.D=a};
var O=0,M=0,ma=[],na=[],pa=new N,qa=new N,P=[],ra=document.createTextNode(""),sa="__kivi"+Math.random();(new MutationObserver(ta)).observe(ra,{characterData:!0});window.addEventListener("message",ua);function va(){0===(O&4)&&(O|=4,requestAnimationFrame(wa))}function ua(a){if(a.source===window&&a.data===sa){O&=-3;a=na;na=[];for(var b=0;b<a.length;b++)a[b]();M++}}
function wa(){var a,b;O&=-5;var c=qa;qa=pa;pa=c;for(b=0;b<P.length;b++)P[b].c|=4;do{for(;0!==(c.a&4);)for(c.a&=-5,a=c.J,c.J=null,b=0;b<a.length;b++)a[b]();for(;0!==(c.a&3);){if(0!==(c.a&1)){c.a&=-2;var d=c.I;for(b=0;b<d.length;b++){var e=d[b];if(null!==e)for(d[b]=null,a=0;a<e.length;a++)E(e[a])}}if(0!==(c.a&2))for(c.a&=-3,a=c.K,c.K=null,b=0;b<a.length;b++)a[b]()}b=0;for(a=P.length;b<a;)d=P[b++],0===(d.c&16)?(d.c&=-33,b===a?P.pop():P[--b]=P.pop()):E(d)}while(0!==(c.a&7));for(;0!==(c.a&8);)for(c.a&=
-9,a=c.Z,c.Z=null,b=0;b<a.length;b++)a[b]();null!==c.D&&(c.D.constructor===u?c.D.b.focus():c.D.focus(),c.D=null);0<P.length&&va();M++}function ta(){for(;0<ma.length;){var a=ma;ma=[];for(var b=0;b<a.length;b++)a[b]();M++}O&=-2}function ia(){va();return qa}function Q(a){this.s=131072;this.a=0;this.ba=a;this.$=this.B=this.l=this.o=this.j=this.f=null}q=Q.prototype;q.A=function(a){this.f=a;return this};q.style=function(a){this.o=a;return this};q.className=function(a){this.l=a;return this};
q.update=function(a){this.s|=262144;this.B=a;return this};q.L=function(a){return new u(2|this.s,this,void 0===a?null:a)};
q.createElement=function(){var a,b,c,d=this.$;if(null===d){d=0===(this.a&32768)?document.createElement(this.ba):document.createElementNS("http://www.w3.org/2000/svg",this.ba);if(null!==this.f)for(b=Object.keys(this.f),a=0;a<b.length;a++)c=b[a],d[c]=this.f[c];if(null!==this.j)for(b=Object.keys(this.j),a=0;a<b.length;a++)c=b[a],t(d,c,this.j[c]);null!==this.o&&(0===(this.a&32768)?d.style.cssText=this.o:d.setAttribute("style",this.o));null!==this.l&&(0===(this.a&32768)?d.className=this.l:d.setAttribute("class",
this.l));return 0!==(this.a&1)?(this.$=d,d.cloneNode(!1)):d}return d.cloneNode(!1)};function xa(a,b){this.X=a;this.query=b}var ya=new xa(0,"***");function R(a){this.id=za++;this.name=a;this.Y=null;this.update()}R.prototype.update=function(){for(var a=[],b=Math.floor(10*Math.random()+1),c=0;c<b;c++)a.push(new xa(15*Math.random(),.1>Math.random()?"vacuum":.2>Math.random()?"<IDLE> in transaction":"SELECT blah FROM something"));this.Y=a};
function Aa(a){a=a.Y.slice(0,5);for(a.sort(function(a,c){return a.X-c.X});5>a.length;)a.push(ya);return a}var za=0;function Ba(a){this.M=[];for(var b=0;b<a;b++)this.M.push(new R("cluster"+(b+1))),this.M.push(new R("cluster"+(b+1)+" slave"))}Ba.prototype.update=function(){for(var a=this.M,b=0;b<a.length;b++)a[b]=new R(a[b].name)};var Ca=(new Q("div")).className("popover-content"),Da=(new Q("div")).className("arrow"),Ea=(new J).tagName((new Q("div")).className("popover left"));
Ea.O=function(a){a.state={na:Da.L()}};var Fa=Ea.update(function(a,b,c){a.H(L(a).children([v(Ca.L(),b),c.na]))});function Ga(a){if(!a)return"";if(60<a){var b=(a%60).toFixed(2).split(".");return Math.floor(a/60)+":"+b[0]+"."+b[1]}return a.toFixed(2)}var Ha=(new Q("td")).className("dbname"),Ia=(new Q("td")).className("query-count"),Ja=(new J).tagName("tr");Ja.O=function(a,b){a.state={qa:v(Ha.L(),b.name)}};
var Ka=Ja.update(function(a,b,c){var d=Aa(b),e=b.Y.length;b=Array(7);b[0]=c.qa;b[1]=v(Ia.L(),v((new u(2,"span",null)).className(20<=e?"label label-important":10<=e?"label label-warning":"label label-success"),""+e));for(c=0;5>c;c++){var e=d[c],g=e.X;b[c+2]=(new u(2,"td",null)).className(10<=g?"Query elapsed warn_long":1<=g?"Query elapsed warn":"Query elapsed short").children([new u(1,null,e!==ya?Ga(g):""),fa(Fa,e.query)])}a.H(L(a).children(b))}),la=(new J).tagName((new Q("table")).className("table table-striped latest-data")).update(function(a,
b){b=b.M;for(var c=Array(b.length),d=0;d<b.length;d++)c[d]=fa(Ka,b[d]);a.H(v(L(a),(new u(2,"tbody",null)).children(c)))});function La(a,b,c,d){this.min=a;this.max=b;this.ea=c;this.da=d}function Ma(){this.G=[];this.oa=100;this.C=-1}function Na(a,b){a.C=(a.C+1)%a.oa;a.G[a.C]=b}function Oa(a,b){for(var c=a.G,d=0;d<c.length;d++)b(c[(a.C+1+d)%c.length],d)}
function Pa(a){var b=a.G;if(0===b.length)return new La(0,0,0,0);for(var c=b[(a.C+1)%b.length],d=c,e=0,g=0;g<b.length;g++){var f=b[(a.C+1+g)%b.length];f<c&&(c=f);f>d&&(d=f);e+=f}return new La(c,d,e/b.length,b[a.C])}var Qa=[],Ra=-1;function Sa(a){Qa.push(a);-1===Ra&&requestAnimationFrame(function(){Ra=-1;var a=Qa;Qa=[];for(var c=0;c<a.length;c++)a[c]()})}
function S(a){var b=this;this.ma=function(){b.H();b.V=!1};this.name=a;this.element=document.createElement("div");this.element.style.cssText="padding: 2px;background-color: #020;font-family: monospace;font-size: 12px;color: #0f0";this.V=!1;this.N()}S.prototype.N=function(){this.V||(this.V=!0,Sa(this.ma))};S.prototype.H=function(){throw Error("sync method not implemented");};
function T(a,b,c,d){S.call(this,a);this.c=b;this.U=c;this.G=d;a=document.createElement("div");a.style.cssText="text-align: center";a.textContent=this.name;c=document.createElement("div");0===(b&1)?(this.T=document.createElement("div"),c.appendChild(this.T)):this.T=null;0===(b&2)?(this.R=document.createElement("div"),c.appendChild(this.R)):this.R=null;0===(b&4)?(this.S=document.createElement("div"),c.appendChild(this.S)):this.S=null;0===(b&8)?(this.P=document.createElement("div"),c.appendChild(this.P)):
this.P=null;this.element.appendChild(a);this.element.appendChild(c);0===(b&16)?(this.canvas=document.createElement("canvas"),this.canvas.style.cssText="display: block; padding: 0; margin: 0",this.canvas.width=100,this.canvas.height=30,this.F=this.canvas.getContext("2d"),this.element.appendChild(this.canvas)):this.F=this.canvas=null}aa(T,S);
T.prototype.H=function(){var a=this,b=Pa(this.G),c=30/(1.2*b.max),d,e,g;0===(this.c&32)?(d=b.min.toFixed(2),e=b.max.toFixed(2),g=b.ea.toFixed(2),b=b.da.toFixed(2)):(d=Math.round(b.min).toString(),e=Math.round(b.max).toString(),g=Math.round(b.ea).toString(),b=Math.round(b.da).toString());null!==this.T&&(this.T.textContent="min: \u00a0"+d+this.U);null!==this.R&&(this.R.textContent="max: \u00a0"+e+this.U);null!==this.S&&(this.S.textContent="mean: "+g+this.U);null!==this.P&&(this.P.textContent="last: "+
b+this.U);null!==this.F&&(this.F.fillStyle="#010",this.F.fillRect(0,0,100,30),this.F.fillStyle="#0f0",Oa(this.G,function(b,d){a.F.fillRect(d,30,1,-(b*c))}))};var U=null;function Ta(){U||(U=document.createElement("div"),U.style.cssText="position: fixed;opacity: 0.9;right: 0;bottom: 0",document.body.appendChild(U))}
function Ua(){function a(f){0<e&&(g+=d*(1E3/(f-e)-g));e=f;Na(b,g);c.N();requestAnimationFrame(a)}Ta();var b=new Ma,c=new T("FPS",39,"",b);U.appendChild(c.element);var d=2/121,e=0,g=60;requestAnimationFrame(a)}function Va(){function a(){Na(b,Math.round(performance.memory.usedJSHeapSize/1048576));c.N();setTimeout(a,30)}Ta();if(void 0!==performance.memory){var b=new Ma,c=new T("Memory",5,"MB",b);U.appendChild(c.element);a()}}
function Wa(){this.data=new Ma;this.fa=new T("view update",0,"ms",this.data);this.startTime=-1}var V={};function Xa(){Ta();var a=V["view update"];void 0===a&&(V["view update"]=a=new Wa,U.appendChild(a.fa.element))}var Y=.5,Ya=50,Za;var $a=window.location.search.substr(1).split("&");if(0===$a.length)Za={};else{for(var ab={},bb=0;bb<$a.length;++bb){var cb=$a[bb].split("=",2);ab[cb[0]]=1===cb.length?"":decodeURIComponent(cb[1].replace(/\+/g," "))}Za=ab}var Z=Za;void 0!==Z.n&&(Ya=parseInt(Z.n,10));
void 0!==Z.m&&(Y=parseFloat(Z.m));
document.addEventListener("DOMContentLoaded",function(){function a(){for(var c=Y,d=b.M,e=0;e<d.length;e++)Math.random()<c&&(d[e]=new R(d[e].name));ha(g);c=V["view update"];void 0!==c&&(c.startTime=performance.now());g.update();c=performance.now();d=V["view update"];void 0!==d&&-1!==d.startTime&&(Na(d.data,c-d.startTime),d.fa.N());setTimeout(a,0)}Ua();Va();Xa();var b=new Ba(Ya),c=document.createElement("div");c.style.display="flex";var d=document.createElement("input");d.type="range";d.style.marginBottom=
"10px";d.style.marginTop="5px";var e=document.createElement("label");e.textContent="mutations : "+(100*Y).toFixed(0)+"%";d.addEventListener("change",function(a){Y=Number.parseFloat(a.target.value)/100;e.textContent="mutations : "+(100*Y).toFixed(0)+"%"});c.appendChild(e);c.appendChild(d);document.body.insertBefore(c,document.body.firstChild);var g=ka(b);setTimeout(a,0)});}).call();
