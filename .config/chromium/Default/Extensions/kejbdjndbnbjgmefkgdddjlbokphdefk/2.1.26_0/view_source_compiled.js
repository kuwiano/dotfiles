var g,m=this,q=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},r=function(a){var b=q(a);return"array"==b||"object"==b&&"number"==typeof a.length},t=function(a){return"string"==typeof a},u=function(a,b){function c(){}c.prototype=b.prototype;a.da=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Z=function(a,c,f){for(var h=Array(arguments.length-2),k=2;k<arguments.length;k++)h[k-2]=arguments[k];return b.prototype[c].apply(a,h)}};var v=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,v);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};u(v,Error);v.prototype.name="CustomError";var aa=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},w=function(a){if(!ba.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ca,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(da,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(fa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ha,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(ia,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ja,"&#0;"));return a},ca=/&/g,da=/</g,
fa=/>/g,ha=/"/g,ia=/'/g,ja=/\x00/g,ba=/[\x00&<>"']/,ma=function(a){return-1!=a.indexOf("&")?"document"in m?ka(a):la(a):a},ka=function(a){var b={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"'},c;c=m.document.createElement("div");return a.replace(na,function(a,e){var f=b[a];if(f)return f;if("#"==e.charAt(0)){var h=Number("0"+e.substr(1));isNaN(h)||(f=String.fromCharCode(h))}f||(c.innerHTML=a+" ",f=c.firstChild.nodeValue.slice(0,-1));return b[a]=f})},la=function(a){return a.replace(/&([^;]+);/g,function(a,
c){switch(c){case "amp":return"&";case "lt":return"<";case "gt":return">";case "quot":return'"';default:if("#"==c.charAt(0)){var d=Number("0"+c.substr(1));if(!isNaN(d))return String.fromCharCode(d)}return a}})},na=/&([^;\s<&]+);?/g;var x=function(a,b){b.unshift(a);v.call(this,aa.apply(null,b));b.shift()};u(x,v);x.prototype.name="AssertionError";
var y=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new x(""+e,f||[]);},z=function(a,b,c){a||y("",null,b,Array.prototype.slice.call(arguments,2))},oa=function(a,b){throw new x("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},A=function(a,b,c){"number"==typeof a||y("Expected number but got %s: %s.",[q(a),a],b,Array.prototype.slice.call(arguments,2));return a},pa=function(a,b,c){t(a)||y("Expected string but got %s: %s.",[q(a),a],
b,Array.prototype.slice.call(arguments,2));return a};var ra=Array.prototype.forEach?function(a,b,c){z(null!=a.length);Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},sa=function(a){return Array.prototype.concat.apply(Array.prototype,arguments)},ta=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var ua=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b},va=function(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b};var B=function(){this.R="";this.T=wa;this.V=null};B.prototype.W=function(){return this.V};B.prototype.toString=function(){return"SafeHtml{"+this.R+"}"};var wa={};var xa="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""},C=function(){};C.prototype.next=function(){throw xa;};C.prototype.U=function(){return this};var D=function(a,b){this.h={};this.c=[];this.I=this.a=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};g=D.prototype;g.O=function(){return this.a};g.j=function(){E(this);for(var a=[],b=0;b<this.c.length;b++)a.push(this.h[this.c[b]]);return a};g.v=function(){E(this);return this.c.concat()};g.G=function(a){return F(this.h,a)};
g.equals=function(a,b){if(this===a)return!0;if(this.a!=a.O())return!1;var c=b||ya;E(this);for(var d,e=0;d=this.c[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};var ya=function(a,b){return a===b};D.prototype.clear=function(){this.h={};this.I=this.a=this.c.length=0};D.prototype.remove=function(a){return F(this.h,a)?(delete this.h[a],this.a--,this.I++,this.c.length>2*this.a&&E(this),!0):!1};
var E=function(a){if(a.a!=a.c.length){for(var b=0,c=0;b<a.c.length;){var d=a.c[b];F(a.h,d)&&(a.c[c++]=d);b++}a.c.length=c}if(a.a!=a.c.length){for(var e={},c=b=0;b<a.c.length;)d=a.c[b],F(e,d)||(a.c[c++]=d,e[d]=1),b++;a.c.length=c}};g=D.prototype;g.get=function(a,b){return F(this.h,a)?this.h[a]:b};g.set=function(a,b){F(this.h,a)||(this.a++,this.c.push(a),this.I++);this.h[a]=b};g.addAll=function(a){var b;a instanceof D?(b=a.v(),a=a.j()):(b=va(a),a=ua(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};
g.forEach=function(a,b){for(var c=this.v(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};g.clone=function(){return new D(this)};g.toObject=function(){E(this);for(var a={},b=0;b<this.c.length;b++){var c=this.c[b];a[c]=this.h[c]}return a};g.U=function(a){E(this);var b=0,c=this.I,d=this,e=new C;e.next=function(){if(c!=d.I)throw Error("The map has changed since the iterator was created");if(b>=d.c.length)throw xa;var e=d.c[b++];return a?e:d.h[e]};return e};
var F=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var za=function(a){if(a.j&&"function"==typeof a.j)return a.j();if(t(a))return a.split("");if(r(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return ua(a)},Aa=function(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(r(a)||t(a))ra(a,b,c);else{var d;if(a.v&&"function"==typeof a.v)d=a.v();else if(a.j&&"function"==typeof a.j)d=void 0;else if(r(a)||t(a)){d=[];for(var e=a.length,f=0;f<e;f++)d.push(f)}else d=va(a);for(var e=za(a),f=e.length,h=0;h<f;h++)b.call(c,e[h],
d&&d[h],a)}};var Ba=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,Ca=function(a,b){if(a)for(var c=a.split("&"),d=0;d<c.length;d++){var e=c[d].indexOf("="),f=null,h=null;0<=e?(f=c[d].substring(0,e),h=c[d].substring(e+1)):f=c[d];b(f,h?decodeURIComponent(h.replace(/\+/g," ")):"")}};var G=function(a,b){this.s=this.B=this.w="";this.F=null;this.A=this.l="";this.g=this.X=!1;var c;if(a instanceof G)this.g=void 0!==b?b:a.g,I(this,a.w),c=a.B,J(this),this.B=c,c=a.s,J(this),this.s=c,K(this,a.F),c=a.l,J(this),this.l=c,L(this,a.i.clone()),c=a.A,J(this),this.A=c;else if(a&&(c=String(a).match(Ba))){this.g=!!b;I(this,c[1]||"",!0);var d=c[2]||"";J(this);this.B=M(d);d=c[3]||"";J(this);this.s=M(d,!0);K(this,c[4]);d=c[5]||"";J(this);this.l=M(d,!0);L(this,c[6]||"",!0);c=c[7]||"";J(this);this.A=
M(c)}else this.g=!!b,this.i=new N(null,0,this.g)};G.prototype.toString=function(){var a=[],b=this.w;b&&a.push(O(b,Da,!0),":");var c=this.s;if(c||"file"==b)a.push("//"),(b=this.B)&&a.push(O(b,Da,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.F,null!=c&&a.push(":",String(c));if(c=this.l)this.s&&"/"!=c.charAt(0)&&a.push("/"),a.push(O(c,"/"==c.charAt(0)?Ea:Fa,!0));(c=this.i.toString())&&a.push("?",c);(c=this.A)&&a.push("#",O(c,Ga));return a.join("")};
G.prototype.resolve=function(a){var b=this.clone(),c=!!a.w;c?I(b,a.w):c=!!a.B;if(c){var d=a.B;J(b);b.B=d}else c=!!a.s;c?(d=a.s,J(b),b.s=d):c=null!=a.F;d=a.l;if(c)K(b,a.F);else if(c=!!a.l){if("/"!=d.charAt(0))if(this.s&&!this.l)d="/"+d;else{var e=b.l.lastIndexOf("/");-1!=e&&(d=b.l.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],h=0;h<e.length;){var k=e[h++];"."==k?d&&h==e.length&&f.push(""):".."==k?
((1<f.length||1==f.length&&""!=f[0])&&f.pop(),d&&h==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?(J(b),b.l=d):c=""!==a.i.toString();c?L(b,M(a.i.toString())):c=!!a.A;c&&(a=a.A,J(b),b.A=a);return b};G.prototype.clone=function(){return new G(this)};
var I=function(a,b,c){J(a);a.w=c?M(b,!0):b;a.w&&(a.w=a.w.replace(/:$/,""))},K=function(a,b){J(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.F=b}else a.F=null},L=function(a,b,c){J(a);b instanceof N?(a.i=b,a.i.N(a.g)):(c||(b=O(b,Ha)),a.i=new N(b,0,a.g))},J=function(a){if(a.X)throw Error("Tried to modify a read-only Uri");};G.prototype.N=function(a){this.g=a;this.i&&this.i.N(a);return this};
var M=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},O=function(a,b,c){return t(a)?(a=encodeURI(a).replace(b,Ia),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},Ia=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},Da=/[#\/\?@]/g,Fa=/[\#\?:]/g,Ea=/[\#\?]/g,Ha=/[\#\?@]/g,Ga=/#/g,N=function(a,b,c){this.a=this.b=null;this.f=a||null;this.g=!!c},Q=function(a){a.b||(a.b=new D,a.a=0,a.f&&Ca(a.f,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g,
" ")),c)}))};g=N.prototype;g.O=function(){Q(this);return this.a};g.add=function(a,b){Q(this);this.f=null;a=R(this,a);var c=this.b.get(a);c||this.b.set(a,c=[]);c.push(b);this.a=A(this.a)+1;return this};g.remove=function(a){Q(this);a=R(this,a);return this.b.G(a)?(this.f=null,this.a=A(this.a)-this.b.get(a).length,this.b.remove(a)):!1};g.clear=function(){this.b=this.f=null;this.a=0};g.G=function(a){Q(this);a=R(this,a);return this.b.G(a)};
g.v=function(){Q(this);for(var a=this.b.j(),b=this.b.v(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};g.j=function(a){Q(this);var b=[];if(t(a))this.G(a)&&(b=sa(b,this.b.get(R(this,a))));else{a=this.b.j();for(var c=0;c<a.length;c++)b=sa(b,a[c])}return b};g.set=function(a,b){Q(this);this.f=null;a=R(this,a);this.G(a)&&(this.a=A(this.a)-this.b.get(a).length);this.b.set(a,[b]);this.a=A(this.a)+1;return this};
g.get=function(a,b){var c=a?this.j(a):[];return 0<c.length?String(c[0]):b};g.toString=function(){if(this.f)return this.f;if(!this.b)return"";for(var a=[],b=this.b.v(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.j(d),f=0;f<d.length;f++){var h=e;""!==d[f]&&(h+="="+encodeURIComponent(String(d[f])));a.push(h)}return this.f=a.join("&")};g.clone=function(){var a=new N;a.f=this.f;this.b&&(a.b=this.b.clone(),a.a=this.a);return a};
var R=function(a,b){var c=String(b);a.g&&(c=c.toLowerCase());return c};N.prototype.N=function(a){a&&!this.g&&(Q(this),this.f=null,this.b.forEach(function(a,c){var d=c.toLowerCase();c!=d&&(this.remove(c),this.remove(d),0<a.length&&(this.f=null,this.b.set(R(this,d),ta(a)),this.a=A(this.a)+a.length))},this));this.g=a};N.prototype.extend=function(a){for(var b=0;b<arguments.length;b++)Aa(arguments[b],function(a,b){this.add(b,a)},this)};var S={aa:!0},Ja={ba:!0},T=function(){throw Error("Do not instantiate directly");};T.prototype.L=null;T.prototype.getContent=function(){return this.content};T.prototype.toString=function(){return this.content};var Ka=function(a){var b=typeof a;if(("object"!=b||null==a)&&"function"!=b)return String(a);if(a instanceof T){if(a.J===S)return pa(a.getContent());if(a.J===Ja)return w(a.getContent())}oa("Soy template output is unsafe for use as HTML: "+a);return"zSoyz"},La={};var Ma=function(a){if(null!=a)switch(a.L){case 1:return 1;case -1:return-1;case 0:return 0}return null},U=function(){T.call(this)};u(U,T);U.prototype.J=S;
var Oa=function(a){if(null!=a&&a.J===S)return z(a.constructor===U),a;if(a instanceof B){var b=Na,c;a instanceof B&&a.constructor===B&&a.T===wa?c=a.R:(oa("expected object of type SafeHtml, got '"+a+"'"),c="type_error:SafeHtml");a=b(c,a.W())}else a=Na(w(String(String(a))),Ma(a));return a},Na=function(a){function b(a){this.content=a}b.prototype=a.prototype;return function(a,d){var e=new b(String(a));void 0!==d&&(e.L=d);return e}}(U);
(function(a){function b(a){this.content=a}b.prototype=a.prototype;return function(a,d){var e=String(a);if(!e)return"";e=new b(e);void 0!==d&&(e.L=d);return e}})(U);
var V=function(a){return null!=a&&a.J===S?(z(a.constructor===U),a=a.getContent(),a=String(a).replace(Pa,"").replace(Qa,"&lt;"),String(a).replace(Ra,Sa)):w(String(a))},Ta={"\x00":"&#0;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Sa=function(a){return Ta[a]},Ra=/[\x00\x22\x27\x3c\x3e]/g,
Pa=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,Qa=/</g;var Ua=function(a){for(var b='<div class="header"><h1 id="title">Source: '+Oa(a.title)+"</h1>"+(a.url?'<a id="view-source" href="view-source:'+V(a.url)+"\">View Source in Chrome's Source code viewer</a>":"")+'</div><div class="line-gutter-backdrop"></div><table><tbody>',c=a.code,d=c.length,e=0;e<d;e++){for(var f=c[e],b=b+("<tr "+(f.type?'class="'+V(f.type)+'"':"")+'><td class="line-number'+(e+1>=a.S&&e+1<=a.S+a.Y?" highlight":"")+'" data-value="'+V(e+1)+'"></td><td class="line-content">'),f=f.spans,
h=f.length,k=0;k<h;k++)var n=f[k],b=b+(n.type?'<span class="'+V(n.type)+'">'+Oa(n.text)+"</span>":Oa(n.text));b+="</td></tr>"}return b+"</tbody></table>"};Ua.ca="tvt.viewsourcetemplates.showSource";var W=function(a,b){this.text=a;this.type=b},Va=function(a,b){this.spans=a;this.type=b},Wa="break case catch continue debugger default delete do else finally for function if in instanceof new return switch this throw try typeof var void while with false null undefined true abstract boolean byte char const double final float goto int long native short synchronized throws transient volatile class enum export extends import super implements interface let package private protected public static yield".split(" "),
Xa=function(a,b){try{var c=new XMLHttpRequest;c.open("GET",a,!0);var d=!1;c.onreadystatechange=function(){d||4!=c.readyState||200!=c.status||(d=!0,b(c))};c.send()}catch(e){}},X={type:"html-tag",open:/^<\/?([-_a-zA-Z0-9]+)/,close:/^(\/?)>/,P:function(a,b){a.M=b[1].toUpperCase();return!0},K:function(a,b){""==b[1]&&("SCRIPT"==a.M?(a.o="js-code",a.D=null,a.H=Ya):"STYLE"==a.M&&(a.o="css-code",a.D=null,a.H=Za));return!0}},$a=[{type:"html-comment",open:"\x3c!--",close:"--\x3e"},{type:"html-cdata",open:"<![CDATA[",
close:"]]\x3e"},{type:"html-doctype",open:"<!",close:">"},X,{type:"html-attribute-url",open:/^\"(https?|\/\/)/,close:'"',escape:"\\",m:X},{type:"html-attribute-url",open:/^\'(https?|\/\/)/,close:"'",escape:"\\",m:X},{type:"html-attribute-value",open:'"',close:'"',escape:"\\",m:X},{type:"html-attribute-value",open:"'",close:"'",escape:"\\",m:X},{type:"html-attribute-name",open:/(^[-_a-zA-Z0-9]+)/,close:"=",m:X}],Ya=[{type:"js-comment",open:"//",C:!0},{type:"js-comment",open:"/*",close:"*/"},{type:"js-string",
open:'"',close:'"',escape:"\\",C:!0},{type:"js-regex",open:"/",close:"/",escape:"\\",C:!0},{open:/^\.[a-zA-Z_][a-zA-Z_0-9]*/,u:!0},{type:"js-keyword",open:/^[a-zA-Z_][a-zA-Z_0-9]*/,P:function(a,b){return 0<=Wa.indexOf(b[0])},u:!0},{open:/^[a-zA-Z_][a-zA-Z_0-9.]*/,u:!0},{type:"js-number",open:/^[+-]?[0-9.]+/,u:!0},{type:"js-string",open:"'",close:"'",escape:"\\",C:!0},{type:"html-tag",open:/^\s*<\/script/,close:/>/,K:function(a){a.o=null;a.D=null;a.H=$a;return!0}}],ab={open:"{",close:"}"},Y={open:":",
close:";",m:ab},Za=[{type:"css-comment",open:"\x3c!--",close:">"},{type:"css-comment",open:"/*",close:"*/"},{type:"css-string",open:'"',close:'"',escape:"\\",C:!0},{type:"css-number",open:/^[+-]?[0-9.]+[a-zA-Z]*/,u:!0,m:Y},{type:"css-color",open:/^#[0-9a-zA-Z]{3}[0-9a-zA-Z]{0,3}/,u:!0,m:Y},ab,Y,{type:"css-name",open:/^[-.#_a-zA-Z0-9]+/,u:!0,m:ab},{type:"css-attribute-value",open:/^[-a-zA-Z_0-9]+/,u:!0,m:Y},{type:"css-string",open:"'",close:"'",escape:"\\",C:!0},{type:"html-tag",open:/^\s*<\/style/,
close:/>/,K:function(a){a.H=$a;a.o=null;a.D=null;return!0}}],cb=function(a){var b={H:$a,M:null,D:null,o:null},c=[],d=[null],e=[null],f=void 0;a=ma(a);a.split("\n").forEach(function(a){var k=[],n=0,H=!1;b.D=b.o;for(var l=0,ea=a.length;l<ea;l+=H?0:1)if(H=!1,!f||f.escape!=a.charAt(l)){if(f){var P=f.close?bb(b,f.close,a,l,f.K):0;P&&(l+=P,k.push(new W(a.substring(n,l),f.type||b.o)),n=l,d.pop(),e.pop(),f=e[e.length-1],H=!0)}for(var qa=0,p;!H&&(p=b.H[qa]);qa++)p.m==f&&(P=bb(b,p.open,a,l,p.P))&&(l>n&&p.type!=
d[d.length-1]&&(k.push(new W(a.substring(n,l),d[d.length-1]||b.o)),n=l),l+=P,p.u?(k.push(new W(a.substring(n,l),p.type||b.o)),n=l):(d.push(p.type),e.push(p),f=p),H=!0)}n<ea&&k.push(new W(a.substring(n,ea),d[d.length-1]||b.o));c.push(new Va(k,b.D));f&&f.C&&(d.pop(),e.pop(),f=e[e.length-1])});return c},bb=function(a,b,c,d,e){var f;return b.exec&&(f=b.exec(c.substring(d)))?e&&!e(a,f)?0:f[0].length:c.substring(d,d+b.length)==b?b.length:0};var Z,db=document.location.href;Z=db instanceof G?db.clone():new G(db,void 0);
(function(a,b,c){Xa(a,function(d){var e;e=document;e=t("source")?e.getElementById("source"):"source";d=cb(d.response+"");d={title:a,code:d,S:b,Y:c||1,url:a};z(Ua,"Soy template may not be null.");e.innerHTML=Ka(Ua(d||La));e=b||0;d=0;var f;f=document;f=f.querySelectorAll&&f.querySelector?f.querySelectorAll("TR"):f.getElementsByTagName("TR");0<=e&&e<f.length&&(d=f[e].offsetTop);window.scrollTo(0,d)})})(Z.i.get("url")||"",parseInt(Z.i.get("line")||-1,10),parseInt(Z.i.get("count")||0,10));
