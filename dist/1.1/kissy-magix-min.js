KISSY.add("magix/magix",function(e){var t=[].slice,n=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,r=/\/[^\/]*$/,i=/[#?].*$/,a="",o=/([^=&?\/#]+)=?([^&=#?]*)/g,c="pathname",s=/^https?:\/\//i,f=0,u="/",v="vframe",d="\n",l=window.console,h=l&&l.error,m=function(){},p={tagName:v,rootId:"magix_vf_root",progress:m,coded:1,execError:function(e){h&&l.error(e)}},g=p.hasOwnProperty,x=function(e,t){return e?g.call(e,t):e},w=function(e){return function(t,n,r){switch(arguments.length){case 0:r=e;break;case 1:r=V.isObject(t)?C(e,t):x(e,t)?e[t]:null;break;case 2:null===n?(delete e[t],r=n):e[t]=r=n}return r}},y=function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f},b=function(e,t){var n=this;return n.get?(n.c=[],n.x=e||20,n.b=n.x+(0|t||5),void 0):new b(e,t)},C=function(e,t,n){for(var r in t)n&&x(n,r)||(e[r]=t[r]);return e};C(b.prototype,{get:function(e){var t,n=this,r=n.c;return e=c+e,x(r,e)&&(t=r[e],t.f>=1&&(t.f++,t.t=f++,t=t.v)),t},set:function(e,t,n){var r=this,i=r.c,a=c+e,o=i[a];if(!x(i,a)){if(i.length>=r.b){i.sort(y);for(var s=r.b-r.x;s--;)o=i.pop(),delete i[o.k],o.m&&E(o.m,o.o,o)}o={},i.push(o),i[a]=o}return o.o=e,o.k=a,o.v=t,o.f=1,o.t=f++,o.m=n,t},del:function(e){e=c+e;var t=this.c,n=t[e];n&&(n.f=-1e5,n.v=a,delete t[e],n.m&&(E(n.m,n.o,n),n.m=a))},has:function(e){return e=c+e,x(this.c,e)}});var I=b(60),S=b(),E=function(e,t,n,r,i,a){for(V.isArray(e)||(e=[e]),t&&(V.isArray(t)||t.callee)||(t=[t]),r=0;e.length>r;r++)try{a=e[r],i=a&&a.apply(n,t)}catch(o){p.execError(o)}return i},V={mix:C,has:x,safeExec:E,noop:m,config:w(p),start:function(e){var t=this;C(p,e),t.libRequire(["magix/router","magix/vom",p.iniFile],function(n,r,i){p=C(p,i,e),p["!tnc"]=p.tagName!=v,n.on("!ul",r.locChged),n.on("changed",r.locChged),r.on("progress",p.progress),t.libRequire(p.extensions,n.start)})},keys:Object.keys||function(e){var t=[];for(var n in e)x(e,n)&&t.push(n);return t},local:w({}),path:function(e,t){var o=e+d+t,c=S.get(o);if(!c){if(s.test(t))c=t;else if(e=e.replace(i,a).replace(r,a)+u,t.charAt(0)==u){var f=s.test(e)?8:0,v=e.indexOf(u,f);c=e.substring(0,v)+t}else c=e+t;for(;n.test(c);)c=c.replace(n,"$1/");S.set(o,c)}return c},pathToObject:function(e,t){var n=e+d+t,r=I.get(n);if(!r){r={};var f={},v=a;i.test(e)?v=e.replace(i,a):~e.indexOf("=")||(v=e);var l=e.replace(v,a);if(v&&s.test(v)){var h=v.indexOf(u,8);v=~h?v.substring(h):u}l.replace(o,function(e,n,r){if(t)try{r=decodeURIComponent(r)}catch(i){}f[n]=r}),r[c]=v,r.params=f,I.set(n,r)}return r},objectToPath:function(e,t,n){var r,i=e[c],a=[],o=e.params;for(var s in o)r=o[s],(!n||r||x(n,s))&&(t&&(r=encodeURIComponent(r)),a.push(s+"="+r));return a.length&&(i=i+"?"+a.join("&")),i},listToMap:function(e,t){var n,r,i,a={};if(V.isString(e)&&(e=e.split(",")),e&&(i=e.length))for(n=0;i>n;n++)r=e[n],a[t?r[t]:r]=t?r:1;return a},cache:b};return C(V,{libRequire:function(n,r){n?e.use(n+"",function(e){r&&r.apply(e,t.call(arguments,1))}):r&&r()},isArray:e.isArray,isFunction:e.isFunction,isObject:e.isObject,isString:e.isString,isNumber:e.isNumber})}),KISSY.add("magix/router",function(e,t,n,r){var i,a,o,c,s=window,f="",u="pathname",v="view",d=t.has,l=t.mix,h=t.keys,m=t.config(),p=t.cache(),g=t.cache(40),x={params:{},href:f},w=/#.*$/,y=/^[^#]*#?!?/,b="params",C=m.nativeHistory,I=m.coded,S=function(e,n,r){if(e){r=this[b],t.isString(e)&&(e=e.split(","));for(var i=0;e.length>i&&!(n=d(r,e[i]));i++);}return n},E=function(){return this[u]},V=function(){return this[v]},M=function(e,t,n,r){return n=this,r=n[b],arguments.length>1?r[e]=t:r[e]},k=function(e){var n=t.pathToObject(e,I),r=n[u];return r&&c&&(n[u]=t.path(s.location[u],r)),n},T=l({viewInfo:function(e,n){var r,i;if(!a){a={rs:m.routes||{},nf:m.notFoundView};var o=m.defaultView;a.dv=o;var c=m.defaultPathname||f;r=a.rs,a.f=t.isFunction(r),a.f||r[c]||!o||(r[c]=o),a[u]=c}return e||(e=a[u]),r=a.rs,i=a.f?r.call(m,e,n):r[e],{view:i||a.nf||a.dv,pathname:e}},start:function(){var e=T,t=s.history;o=C&&t.pushState,c=C&&!o,o?e.useState():e.useHash(),e.route()},parseQH:function(e,t){e=e||s.location.href;var n=T,r=p.get(e);if(!r){var i=e.replace(w,f),a=e.replace(y,f),o=k(i),c=k(a),d={};l(d,o[b]),l(d,c[b]),r={get:M,set:M,href:e,refHref:x.href,srcQuery:i,srcHash:a,query:o,hash:c,params:d},p.set(e,r)}if(t&&!r[v]){var h;h=C?r.hash[u]||r.query[u]:r.hash[u];var m=n.viewInfo(h,r);l(r,m)}return r},getChged:function(e,t){var n=e.href,r=t.href,i=n+"\n"+r,a=g.get(i);if(!a){var o,c,s;a={},a[v]=s,a[u]=s,a[b]={};var f,d,l=[u,v];for(f=1;f>=0;f--)d=l[f],c=e[d],s=t[d],c!=s&&(a[d]={from:c,to:s},o=1);var m=e[b],p=t[b];for(l=h(m).concat(h(p)),f=l.length-1;f>=0;f--)d=l[f],c=m[d],s=p[d],c!=s&&(a[b][d]={from:c,to:s},o=1);a.occur=o,a.isParam=S,a.isPathname=E,a.isView=V,g.set(i,a)}return a},route:function(){var e=T,t=e.parseQH(0,1),n=!x.get,r=e.getChged(x,t);x=t,r.occur&&(i=t,e.fire("changed",{location:t,changed:r,force:n}))},navigate:function(e,n,r){var a=T;if(!n&&t.isObject(e)&&(n=e,e=f),n&&(e=t.objectToPath({params:n,pathname:e},I)),e){var s=k(e),v={};if(v[b]=l({},s[b]),v[u]=s[u],v[u]){if(c){var h=i.query[b];for(var m in h)d(h,m)&&!d(v[b],m)&&(v[b][m]=f)}}else{var p=l({},i[b]);v[b]=l(p,v[b]),v[u]=i[u]}var g,x=t.objectToPath(v,I,i.query[b]);g=o?x!=i.srcQuery:x!=i.srcHash,g&&(o?(a.poped=1,history[r?"replaceState":"pushState"](f,f,x),a.route()):(l(v,i,v),v.srcHash=x,v.hash={params:v[b],pathname:v[u]},a.fire("!ul",{loc:i=v}),x="#!"+x,r?location.replace(x):location.hash=x))}}},n);return T.useState=function(){var e=T,t=location.href;r.on(s,"popstate",function(){var n=location.href==t;(e.poped||!n)&&(e.poped=1,e.route())})},T.useHash=function(){r.on(s,"hashchange",T.route)},T},{requires:["magix/magix","magix/event","event"]}),KISSY.add("magix/body",function(e,t){var n,r=t.has,i=t.mix,a={},o=document.body,c={},s=String.fromCharCode(26),f="mx-ei",u="mx-owner",v="addEventListener",d="removeEventListener",l=o[v],h={},m=65536,p="on",g=",",x=function(e){return e.id||(e.id="mx-e-"+m--)},w=function(e,t,n){return e&&e.setAttribute&&(n?e.setAttribute(t,n):n=e.getAttribute(t)),n},y=function(){this.returnValue=!1},b=function(){this.cancelBubble=!0},C={special:function(e){i(a,e)},process:function(e){if(e=e||window.event,e&&!e[p]){var t=e.target||e.srcElement||o;for(e[p]=1;t&&1!=t.nodeType;)t=t.parentNode;var i=t,a=e.type,c=h[a]||(h[a]=RegExp(g+a+"(?:,|$)"));if(!c.test(w(t,f))){for(var v,d,m="mx-"+a,C=[];i&&(v=w(i,m),d=w(i,f),!v&&!c.test(d));)C.push(i),i=i.parentNode;if(v){var I,S=v.split(s);if(S.length>1&&(I=S[0],v=S.pop()),I=I||w(i,u),!I)for(var E=i,V=n.all();E;){if(r(V,E.id)){w(i,u,I=E.id);break}E=E.parentNode}if(!I)throw Error("bad:"+v);var M=n.get(I),k=M&&M.view;k&&(l||(e.preventDefault=y,e.stopPropagation=b),k.processEvent({info:v,se:e,st:a,tId:x(t),cId:x(i)}))}else for(var T;C.length;)T=C.shift(),d=w(T,f)||p,c.test(d)||(d=d+g+a,w(T,f,d))}}},act:function(e,t,r){var i=c[e]||0,s=i>0?1:0,f=C.process;if(i+=t?-s:s,!i){r&&(n=r);var u=a[e];u?C.lib(o,e,t,f):l?o[t?d:v](e,f,!1):o[p+e]=t?null:f,t||(i=1)}c[e]=i}},I={focusin:1,focusout:1,mouseenter:2,mouseleave:2,mousewheel:1};return C.special(I),C.lib=function(t,n,r,i){e.use("event",function(e,a){var o=I[n];1==o?(o=r?"detach":"on",a[o](t,n,i)):(o=(r?"un":"")+"delegate",a[o](t,n,"[mx-"+n+"]",i))})},C},{requires:["magix/magix"]}),KISSY.add("magix/event",function(e,t){var n=function(e){return"~"+e},r=t.safeExec,i={fire:function(e,t,i,a){var o=n(e),c=this,s=c[o];if(s){t||(t={}),t.type||(t.type=e);for(var f,u,v=s.length,d=v-1;v--;)f=a?v:d-v,u=s[f],(u.d||u.r)&&(s.splice(f,1),d--),u.d||r(u.f,t,c)}i&&delete c[o]},on:function(e,t,r){var i=n(e),a=this[i]||(this[i]=[]);isNaN(r)?a.push({f:t,r:r}):a.splice(0|r,0,{f:t})},off:function(e,t){var r=n(e),i=this[r];if(i)if(t){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==t&&!a.d){a.d=1;break}}else delete this[r]},once:function(e,t){this.on(e,t,n)}};return i},{requires:["magix/magix"]}),KISSY.add("magix/vframe",function(e,t,n,r){var i,a,o,c,s,f=document,u=f.body,v=65536,d=t.safeExec,l=[],h=t.mix,m=t.config("tagName"),p=t.config("rootId"),g=t.config("!tnc"),x=t.has,w=g?"mx-vframe":"mx-defer",y=u.contains,b=g&&u.querySelectorAll,C=" "+m+"[mx-vframe]",I="alter",S="created",E=function(e){return"object"==typeof e?e:f.getElementById(e)},V=function(e,t,n){return t=E(e),t&&(n=b?f.querySelectorAll("#"+t.id+C):t.getElementsByTagName(m)),n||l},M=function(e){return e.id||(e.id="magix_vf_"+v--)},k=function(e,t,n){if(e=E(e),t=E(t),e&&t)if(e!==t)try{n=y?t.contains(e):16&t.compareDocumentPosition(e)}catch(r){n=0}else n=1;return n},T=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={},t.owner=s};return h(T,{root:function(e,t,n){if(!i){o=t,c=n,s=e;var r=E(p);r||(r=f.createElement(m),r.id=p,u.insertBefore(r,u.firstChild)),i=new T(p),e.add(i)}return i}}),h(h(T.prototype,n),{mountView:function(e,n,i){var a=this,f=E(a.id);if(f._bak?f._chgd=1:(f._bak=1,f._tmpl=f.innerHTML),a.unmountView(),e){var u=t.pathToObject(e),v=u.pathname,l=--a.sign;t.libRequire(v,function(e){if(l==a.sign){r.prepare(e);var t=new e({owner:a,id:a.id,$:E,path:v,vom:s,location:o});a.view=t,t.on("interact",function(e){e.tmpl||(f._chgd&&(f.innerHTML=f._tmpl),a.mountZoneVframes()),t.on("rendered",function(){a.mountZoneVframes()}),t.on("prerender",function(){a.unmountZoneVframes(0,1)||a.cAlter()}),t.on("inited",function(){a.viewInited=1,a.fire("viewInited",{view:t}),i&&d(i,t,a)})},0),n=n||{},t.load(h(n,u.params,n),c)}})}},unmountView:function(){var e=this;if(e.view){a||(a={}),e.unmountZoneVframes(0,1),e.cAlter(a),e.view.oust();var t=E(e.id);t&&t._bak&&(t.innerHTML=t._tmpl),delete e.view,delete e.viewInited,a=0,e.fire("viewUnmounted")}e.sign--},mountVframe:function(e,t,n,r){var i=this;i.fcc&&i.cAlter();var a=s.get(e);return a||(a=new T(e),a.pId=i.id,x(i.cM,e)||i.cC++,i.cM[e]=1,s.add(a)),a.mountView(t,n,r),a},mountZoneVframes:function(e,t,n){var r=this,i=e||r.id;r.unmountZoneVframes(i,1);var a=V(i),o=a.length,c={};if(o)for(var s,f,u,v,d=0;o>d;d++)if(s=a[d],f=M(s),!x(c,f)&&(u=s.getAttribute("mx-view"),v=!s.getAttribute(w),v=v!=g,v||u)){r.mountVframe(f,u,t,n);for(var l,h=V(s),m=0,p=h.length;p>m;m++)l=h[m],c[M(l)]=1}r.cCreated()},unmountVframe:function(e,t){var n=this;e=e||n.id;var r=s.get(e);if(r){var i=r.fcc;r.unmountView(),s.remove(e,i);var a=s.get(r.pId);a&&x(a.cM,e)&&(delete a.cM[e],a.cC--,t||a.cCreated())}},unmountZoneVframes:function(e,t){var n,r,i=this,a=i.cM;for(r in a)e?k(r,e)&&i.unmountVframe(r,n=1):i.unmountVframe(r,n=1);return t||i.cCreated(),n},cCreated:function(e){var t=this;if(t.cC==t.rC){var n=t.view;n&&!t.fcc&&(t.fcc=1,delete t.fca,n.fire(S,e),t.fire(S,e)),s.vfCreated();var r=t.id,i=s.get(t.pId);i&&!x(i.rM,r)&&(i.rM[r]=i.cM[r],i.rC++,i.cCreated(e))}},cAlter:function(e){var t=this;e||(e={});var n=t.fcc;if(delete t.fcc,!t.fca&&n){var r=t.view,i=t.id;r&&(t.fca=1,r.fire(I,e),t.fire(I,e));var a=s.get(t.pId);a&&x(a.rM,i)&&(a.rC--,delete a.rM[i],a.cAlter(e))}},locChged:function(){var e=this,n=e.view;if(e.viewInited&&n.sign>0){var r=n.olChanged(c),i={location:o,changed:c,prevent:function(){this.cs=l},to:function(e){e=e||l,t.isString(e)&&(e=e.split(",")),this.cs=e}};r&&d(n.locationChange,i,n);for(var a,f=i.cs||t.keys(e.cM),u=0,v=f.length;v>u;u++)a=s.get(f[u]),a&&a.locChged()}}}),T},{requires:["magix/magix","magix/event","magix/view"]}),KISSY.add("magix/view",function(e,t,n,r,i){var a=t.safeExec,o=t.has,c=",",s=[],f=t.noop,u=t.mix,v="~",d=function(e){return function(){var t,n=this,r=n.notifyUpdate();return r&&(t=e.apply(n,arguments)),t}},l=t.cache(40),h="<",m=">",p=/\smx-(?!view|defer|owner|vframe)[a-z]+\s*=\s*"/g,g=String.fromCharCode(26),x={prevent:function(e){e=e||this.srcEvent,e.preventDefault()},stop:function(e){e=e||this.srcEvent,e.stopPropagation()},halt:function(e){this.prevent(e),this.stop(e)}},w=/(\w+)(?:<(\w+)>)?(?:\(?{([\s\S]*)}\)?)?/,y=/(\w+):([^,]+)/g,b=/([$\w]+)<([\w,]+)>/,C=function(e){var t=this;u(t,e),t.sign=1,a(C.ms,[e],t)};C.ms=[],C.prepare=function(e){if(!e[v]){e[v]=1;var t,n,r,i,a,o=e.prototype,s={};for(var u in o)if(t=o[u],n=u.match(b))for(r=n[1],i=n[2],i=i.split(c),a=i.length-1;a>-1;a--)n=i[a],s[n]=1,o[r+h+n+m]=t;else"render"==u&&t!=f&&(o[u]=d(t));i&&(o.$evts=s)}},C.mixin=function(e,t){t&&C.ms.push(t),u(C.prototype,e)},u(u(C.prototype,n),{render:f,locationChange:f,init:f,hasTmpl:!0,enableEvent:!0,load:function(){var e=this,t=e.hasTmpl,n=arguments,r=e.sign,i=function(i){if(r>0&&r==e.sign){t&&(e.template=e.wrapMxEvent(i)),e.delegateEvents(),e.fire("interact",{tmpl:t},1),a(e.init,n,e),e.fire("inited",0,1),a(e.render,s,e);var o=!t&&!e.rendered;o&&(e.rendered=!0,e.fire("primed",0,1))}};t?e.fetchTmpl(e.path,i):i()},beginUpdate:function(){var e=this;e.sign>0&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign>0&&(e.rendered||(e.fire("primed",0,1),e.rendered=!0),e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign>0&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return(e+"").replace(p,"$&"+this.id+g)},setViewHTML:function(e){var t,n=this;n.beginUpdate(),n.sign>0&&(t=n.$(n.id),t&&(t.innerHTML=e)),n.endUpdate()},observeLocation:function(e){var n,r=this;r.$ol||(r.$ol={keys:[]}),n=r.$ol;var i=n.keys;t.isObject(e)&&(n.pn=e.pathname,e=e.keys),e&&(n.keys=i.concat((e+"").split(c)))},olChanged:function(e){var t=this,n=t.$ol;if(n){var r=0;if(n.pn&&(r=e.isPathname()),!r){var i=n.keys;r=e.isParam(i)}return r}return 1},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.delegateEvents(1)),e.sign--},processEvent:function(e){var t=this;if(t.enableEvent&&t.sign>0){var n=e.info,r=e.se,i=l.get(n);i||(i=n.match(w),i={n:i[1],f:i[2],i:i[3],p:{}},i.i&&i.i.replace(y,function(e,t,n){i.p[t]=n}),l.set(n,i));var o=i.n+h+e.st+m,c=t[o];if(c){var s=x[i.f];s&&s.call(x,r),a(c,{currentId:e.cId,targetId:e.tId,type:e.st,srcEvent:r,halt:x.halt,prevent:x.prevent,stop:x.stop,params:i.p},t)}}},delegateEvents:function(e){var t=this,n=t.$evts,i=t.vom;for(var a in n)r.act(a,e,i)}});var I,S,E="?t="+e.now(),V={},M={};return C.prototype.fetchTmpl=function(t,n){var r=this,c="template"in r;if(c)n(r.template);else if(o(V,t))n(V[t]);else{if(!I){var s=t.substring(0,t.indexOf("/"));S=e.Config.packages[s],I=S.base||S.path}S.ignorePackageNameInUri&&(t=t.replace(S.name,""));var f=I+t+".html",u=M[f],v=function(e){n(V[t]=e)};u?u.push(v):(u=M[f]=[v],i({url:f+E,success:function(e){a(u,e),delete M[f]},error:function(e,t){a(u,t),delete M[f]}}))}},C.extend=function(t,n,r){var i=this,o=function(){o.superclass.constructor.apply(this,arguments),n&&a(n,arguments,this)};return o.extend=i.extend,e.extend(o,i,t,r)},C},{requires:["magix/magix","magix/event","magix/body","ajax"]}),KISSY.add("magix/vom",function(e,t,n,r){var i=n.has,a=n.mix,o=0,c=0,s=0,f=0,u={},v={},d={},l=n.mix({all:function(){return u},add:function(e){i(u,e.id)||(o++,u[e.id]=e,l.fire("add",{vframe:e}))},get:function(e){return u[e]},remove:function(e,t){var n=u[e];n&&(o--,t&&c--,delete u[e],l.fire("remove",{vframe:n}))},vfCreated:function(){if(!f){c++;var e=c/o;e>s&&l.fire("progress",{percent:s=e},f=1==e)}},locChged:function(e){var n,r=e.loc;if(r?n=1:r=e.location,a(v,r),!n){a(d,e.changed);var i=t.root(l,v,d);d.view?i.mountView(r.view):i.locChged()}}},r);return l},{requires:["magix/vframe","magix/magix","magix/event"]}),document.createElement("vframe");