define("magix/magix",function(){var e=/\/\.\/|\/[^\/.]+?\/\.{2}\/|([^:\/])\/\/+|\.{2}\//,t=/\/[^\/]*$/,r=/[#?].*$/,n="",i=/([^=&?\/#]+)=?([^&=#?]*)/g,a="pathname",o=/^https?:\/\//i,s=0,c="/",f="vframe",u=function(){},m={tagName:f,rootId:"magix_vf_root",execError:u},v=m.hasOwnProperty,h=function(e,t){return e?v.call(e,t):e},l=function(e){return function(t,r,n){switch(arguments.length){case 0:n=e;break;case 1:n=b.isObject(t)?p(e,t):h(e,t)?e[t]:null;break;case 2:null===r?(delete e[t],n=r):e[t]=n=r}return n}},d=function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f},g=function(e,t){var r=this;return r.get?(r.c=[],r.x=e||20,r.b=r.x+(isNaN(t)?5:t),void 0):new g(e,t)},p=function(e,t,r){for(var n in t)r&&h(r,n)||(e[n]=t[n]);return e};p(g.prototype,{get:function(e){var t,r=this,n=r.c;return e=a+e,h(n,e)&&(t=n[e],t.f>=1&&(t.f++,t.t=s++,t=t.v)),t},set:function(e,t,r){var n=this,i=n.c,o=a+e,c=i[o];if(!h(i,o)){if(i.length>=n.b){i.sort(d);for(var f=n.b-n.x;f--;)c=i.pop(),delete i[c.k],c.m&&w(c.m,c.o,c)}c={},i.push(c),i[o]=c}return c.o=e,c.k=o,c.v=t,c.f=1,c.t=s++,c.m=r,t},del:function(e){e=a+e;var t=this.c,r=t[e];r&&(r.f=-1e5,r.v=n,delete t[e],r.m&&(w(r.m,r.o,r),r.m=n))},has:function(e){return e=a+e,h(this.c,e)}});var x=g(60),y=g(),w=function(e,t,r,n,i,a){for(b.isArray(e)||(e=[e]),t&&(b.isArray(t)||t.callee)||(t=[t]),n=0;e.length>n;n++)try{a=e[n],i=a&&a.apply(r,t)}catch(o){m.execError(o)}return i},b={isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},mix:p,has:h,safeExec:w,noop:u,config:l(m),start:function(e){var t=this;p(m,e),t.libRequire(m.iniFile,function(r){m=p(m,r,e),m["!tnc"]=m.tagName!=f;var n=m.progress;t.libRequire(["magix/router","magix/vom"],function(e,r){e.on("!ul",r.locChged),e.on("changed",r.locChged),n&&r.on("progress",n),t.libRequire(m.extensions,e.start)})})},keys:Object.keys||function(e){var t=[];for(var r in e)h(e,r)&&t.push(r);return t},local:l({}),path:function(i,a){var s=i+"\n"+a,f=y.get(s);if(!f){if(o.test(a))f=a;else if(i=i.replace(r,n).replace(t,n)+c,a.charAt(0)==c){var u=o.test(i)?8:0,m=i.indexOf(c,u);f=i.substring(0,m)+a}else f=i+a;for(;e.test(f);)f=f.replace(e,"$1/");y.set(s,f)}return f},pathToObject:function(e,t){var s=x.get(e);if(!s){s={};var f={},u=n;r.test(e)?u=e.replace(r,n):~e.indexOf("=")||(u=e);var m=e.replace(u,n);if(u&&o.test(u)){var v=u.indexOf(c,8);u=~v?u.substring(v):c}m.replace(i,function(e,r,n){if(t)try{n=decodeURIComponent(n)}catch(i){}f[r]=n}),s[a]=u,s.params=f,x.set(e,s)}return s},objectToPath:function(e,t,r){var n,i=e[a],o=[],s=e.params;for(var c in s)n=s[c],(!r||n||h(r,c))&&(t&&(n=encodeURIComponent(n)),o.push(c+"="+n));return o.length&&(i=i+"?"+o.join("&")),i},listToMap:function(e,t){var r,n,i,a={};if(b.isString(e)&&(e=e.split(",")),e&&(i=e.length))for(r=0;i>r;r++)n=e[r],a[t?n[t]:n]=t?n:1;return a},cache:g},C=Object.prototype.toString;return p(b,{libRequire:function(e,t){e?seajs.use(e,t):t&&t()},isArray:$.isArray,isFunction:$.isFunction,isObject:function(e){return"[object Object]"==C.call(e)},isString:function(e){return"[object String]"==C.call(e)},isNumber:function(e){return"[object Number]"==C.call(e)},isRegExp:function(e){return"[object RegExp]"==C.call(e)},extend:function(e,t,r,n){e.superclass=t.prototype,t.prototype.constructor=t;var i=function(){};return i.prototype=t.prototype,e.prototype=new i,b.mix(e.prototype,r),b.mix(e,n),e.prototype.constructor=e,e}})}),define("magix/router",["magix/magix","magix/event"],function(e){var t,r,n,i,a=e("magix/magix"),o=e("magix/event"),s=window,c="",f="pathname",u=a.has,m=a.mix,v=document,h=a.keys,l=/^UTF-8$/i.test(v.charset||v.characterSet||"UTF-8"),d=a.config(),g=a.cache(),p=a.cache(40),x={params:{},href:c},y=/#.*$/,w=/^[^#]*#?!?/,b="params",$=d.nativeHistory,C=function(e,t,r){if(e){r=this[b],a.isString(e)&&(e=e.split(","));for(var n=0;e.length>n&&!(t=u(r,e[n]));n++);}return t},E=function(){return this[f]},M=function(){return this.view},T=function(e,t,r,n){return r=this,n=r[b],arguments.length>1?n[e]=t:n[e]},P=function(e){var t=a.pathToObject(e,l),r=t[f];return r&&i&&(t[f]=a.path(s.location[f],r)),t},O=m({viewInfo:function(e,t){if(!r){r={rs:d.routes||{},nf:d.notFoundView};var n=d.defaultView;if(!n)throw Error("unset defaultView");r.home=n;var i=d.defaultPathname||c;r.rs[i]=n,r[f]=i}var o;e||(e=r[f]);var s=r.rs;return o=a.isFunction(s)?s.call(d,e,t):s[e],{view:o?o:r.nf||r.home,pathname:o||$?e:r.nf?e:r[f]}},start:function(){var e=O,t=s.history;n=$&&t.pushState,i=$&&!n,n?e.useState():e.useHash(),e.route()},parseQH:function(e,t){e=e||s.location.href;var r=O,n=g.get(e);if(!n){var i=e.replace(y,c),a=e.replace(w,c),o=P(i),u=P(a),v={};m(v,o[b]),m(v,u[b]),n={get:T,set:T,href:e,refHref:x.href,srcQuery:i,srcHash:a,query:o,hash:u,params:v},g.set(e,n)}if(t&&!n.view){var h;h=$?n.hash[f]||n.query[f]:n.hash[f];var l=r.viewInfo(h,n);m(n,l)}return n},getChged:function(e,t){var r=e.href,n=t.href,i=r+"\n"+n,a=p.get(i);if(!a){var o,s,c;a={view:c},a[f]=c,a[b]={};var u,m,v=[f,"view"];for(u=1;u>=0;u--)m=v[u],s=e[m],c=t[m],s!=c&&(a[m]={from:s,to:c},o=1);var l=e[b],d=t[b];for(v=h(l).concat(h(d)),u=v.length-1;u>=0;u--)m=v[u],s=l[m],c=d[m],s!=c&&(a[b][m]={from:s,to:c},o=1);a.occur=o,a.isParam=C,a.isPathname=E,a.isView=M,p.set(i,a)}return a},route:function(){var e=O,r=e.parseQH(0,1),n=!x.get,i=e.getChged(x,r);x=r,i.occur&&(t=r,e.fire("changed",{location:r,changed:i,force:n}))},navigate:function(e,r,o){var s=O;if(!r&&a.isObject(e)&&(r=e,e=c),r&&(e=a.objectToPath({params:r,pathname:e},l)),e){var v=P(e),h={};if(h[b]=m({},v[b]),h[f]=v[f],h[f]){if(i){var d=t.query[b];for(var g in d)u(d,g)&&!u(h[b],g)&&(h[b][g]=c)}}else{var p=m({},t[b]);h[b]=m(p,h[b]),h[f]=t[f]}var x,y=a.objectToPath(h,l,t.query[b]);x=n?y!=t.srcQuery:y!=t.srcHash,x&&(n?(s.poped=1,history[o?"replaceState":"pushState"](c,c,y),s.route()):(m(h,t,h),h.srcHash=y,h.hash={params:h[b],pathname:h[f]},s.fire("!ul",{loc:t=h}),y="#!"+y,o?location.replace(y):location.hash=y))}}},o);return O.useState=function(){var e=O,t=location.href;s.addEventListener("popstate",function(){var r=location.href==t;(e.poped||!r)&&(e.poped=1,e.route())},!1)},O.useHash=function(){s.addEventListener("hashchange",O.route,!1)},O}),define("magix/body",["magix/magix"],function(e){var t,r=e("magix/magix"),n=r.has,i=r.mix,a={},o=document.body,s={},c=String.fromCharCode(26),f="mx-owner",u="mx-ei",m={},v=65536,h=function(e){return e.id||(e.id="mx-e-"+v--)},l=function(e,t,r){return e&&e.setAttribute&&(r?e.setAttribute(t,r):r=e.getAttribute(t)),r},d={special:function(e){i(a,e)},process:function(e){for(var r=e.target||e.srcElement;r&&1!=r.nodeType;)r=r.parentNode;var i=r,a=e.type,s=m[a]||(m[a]=RegExp(","+a+"(?:,|$)"));if(!s.test(l(r,u))){for(var v,d,g="mx-"+a,p=[];i&&i!=o&&(v=l(i,g),d=l(i,u),!v&&!s.test(d));)p.push(i),i=i.parentNode;if(v){var x,y=v.split(c);y.length>1&&(x=y[0],v=y.pop());var w=l(i,f)||x;if(!w)for(var b=i,$=t.all();b&&b!=o;){if(n($,b.id)){l(i,f,w=b.id);break}b=b.parentNode}if(!w)throw Error("miss "+f+":"+v);var C=t.get(w),E=C&&C.view;E&&E.processEvent({info:v,se:e,st:a,tId:h(r),cId:h(i)})}else for(var M;p.length;)M=p.shift(),d=l(M,u)||"",s.test(d)||(d=d+","+a,l(M,u,d))}},on:function(e,r){var n=this;if(!s[e]){t=r,s[e]=0;var i=a[e];i?n.lib(0,o,e):o["on"+e]=function(e){e=e||window.event,e&&n.process(e)}}s[e]++},off:function(e){var t=this,r=s[e];if(r>0){if(r--,!r){var n=a[e];n?t.lib(1,o,e):o["on"+e]=null}s[e]=r}}};return d.lib=function(e,t,r){var n=e?"undelegate":"delegate";$(t)[n]("[mx-"+r+"]",r,d.process)},d}),define("magix/event",["magix/magix"],function(e){var t=e("magix/magix"),r=function(e){return"~"+e},n=t.safeExec,i={fire:function(e,t,i,a){var o=r(e),s=this,c=s[o];if(c){t||(t={}),t.type||(t.type=e);for(var f,u,m=c.length,v=m-1;m--;)f=a?m:v-m,u=c[f],(u.d||u.r)&&(c.splice(f,1),v--),u.d||n(u.f,t,s)}i&&delete s[o]},on:function(e,n,i){var a=r(e),o=this[a]||(this[a]=[]);t.isNumeric(i)?o.splice(i,0,{f:n}):o.push({f:n,r:i})},off:function(e,t){var n=r(e),i=this[n];if(i)if(t){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==t&&!a.d){a.d=1;break}}else delete this[n]},once:function(e,t){this.on(e,t,!0)}};return i}),define("magix/vframe",["magix/magix","magix/event","magix/view"],function(e){var t,r,n,i,a,o=e("magix/magix"),s=e("magix/event"),c=e("magix/view"),f=document,u=f.body,m=65536,v=o.safeExec,h=[],l=h.slice,d=o.mix,g=o.config("tagName"),p=o.config("rootId"),x=o.config("!tnc"),y=o.has,w=x?"mx-vframe":"mx-defer",b=u.contains,$=x&&u.querySelectorAll,C=" "+g+"[mx-vframe]",E="alter",M="created",T=function(e){return"object"==typeof e?e:f.getElementById(e)},P=function(e,t,r){return t=T(e),t&&(r=$?f.querySelectorAll("#"+t.id+C):t.getElementsByTagName(g)),r||h},O=function(e){return e.id||(e.id="magix_vf_"+m--)},V=function(e,t,r){if(e=T(e),t=T(t),e&&t)if(e!==t)try{r=b?t.contains(e):16&t.compareDocumentPosition(e)}catch(n){r=0}else r=1;return r},k=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={},t.owner=a};return d(k,{root:function(e,r,o){if(!t){n=r,i=o,a=e;var s=T(p);s||(s=f.createElement(g),s.id=p,u.insertBefore(s,u.firstChild)),t=new k(p),e.add(t)}return t}}),d(d(k.prototype,s),{mountView:function(e,t,r){var s=this,f=T(s.id);if(f._bak?f._chgd=1:(f._bak=1,f._tmpl=f.innerHTML),s.unmountView(),e){var u=o.pathToObject(e),m=u.pathname,h=--s.sign;o.libRequire(m,function(e){if(h==s.sign){c.prepare(e);var o=new e({owner:s,id:s.id,$:T,path:m,vom:a,location:n});s.view=o,o.on("interact",function(e){e.tmpl||(f._chgd&&(f.innerHTML=f._tmpl),s.mountZoneVframes()),o.on("rendered",function(){s.mountZoneVframes()}),o.on("prerender",function(){s.unmountZoneVframes(0,1)||s.cAlter()}),o.on("inited",function(){s.viewInited=1,s.fire("viewInited",{view:o}),r&&v(r,o,s)})},0),t=t||{},o.load(d(t,u.params,t),i)}})}},unmountView:function(){var e=this;if(e.view){r||(r={}),e.unmountZoneVframes(0,1),e.cAlter(r),e.view.oust();var t=T(e.id);t&&t._bak&&(t.innerHTML=t._tmpl),delete e.view,delete e.viewInited,r=0,e.fire("viewUnmounted")}e.sign--},mountVframe:function(e,t,r,n){var i=this,o=a.get(e);return o||(o=new k(e),o.pId=i.id,y(i.cM,e)||i.cC++,i.cM[e]=1,a.add(o)),o.mountView(t,r,n),o},mountZoneVframes:function(e,t,r){var n=this,i=e||n.id;n.unmountZoneVframes(i,1);var a=P(i),o=a.length,s={};if(o)for(var c,f,u,m,v=0;o>v;v++)if(c=a[v],f=O(c),!y(s,f)&&(u=c.getAttribute("mx-view"),m=!c.getAttribute(w),m=m!=x,m||u)){n.mountVframe(f,u,t,r);for(var h,l=P(c),d=0,g=l.length;g>d;d++)h=l[d],s[O(h)]=1}n.cCreated()},unmountVframe:function(e,t){var r=this;e=e||r.id;var n=a.get(e);if(n){var i=n.fcc;n.unmountView(),a.remove(e,i);var o=a.get(n.pId);o&&y(o.cM,e)&&(delete o.cM[e],o.cC--,t||o.cCreated())}},unmountZoneVframes:function(e,t){var r,n,i=this,a=i.cM;for(n in a)e?V(n,e)&&i.unmountVframe(n,r=1):i.unmountVframe(n,r=1);return t||i.cCreated(),r},invokeView:function(e){var t,r=this,n=r.view,i=r.viewInited&&n[e],a=l.call(arguments,1);return i&&(t=v(i,a,n)),t},cCreated:function(e){var t=this;if(t.cC==t.rC){var r=t.view;r&&!t.fcc&&(t.fcc=1,delete t.fca,r.fire(M,e),t.fire(M,e)),a.vfCreated();var n=t.id,i=a.get(t.pId);i&&!y(i.rM,n)&&(i.rM[n]=i.cM[n],i.rC++,i.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),delete t.fcc,!t.fca){var r=t.view,n=t.id;r&&(t.fca=1,r.fire(E,e),t.fire(E,e));var i=a.get(t.pId);i&&y(i.rM,n)&&(i.rC--,delete i.rM[n],i.cAlter(e))}},locChged:function(){var e=this,t=e.view;if(t&&t.sign>0&&t.rendered){var r=t.olChanged(i),s={location:n,changed:i,prevent:function(){this.cs=h},toChildren:function(e){e=e||h,o.isString(e)&&(e=e.split(",")),this.cs=e}};r&&v(t.locationChange,s,t);for(var c,f=s.cs||o.keys(e.cM),u=0,m=f.length;m>u;u++)c=a.get(f[u]),c&&c.locChged()}}}),k}),define("magix/view",function(e){var t=e("magix/magix"),r=e("magix/event"),n=e("magix/body"),i=t.safeExec,a=t.has,o=",",s=[],c=t.noop,f=t.mix,u={render:1,renderUI:1},m="~",v=function(e){return function(){var t,r=this,n=r.notifyUpdate();return n&&(t=e.apply(r,arguments)),t}},h=t.cache(40),l=/\smx-(?!view|defer|owner|vframe)[a-z]+\s*=\s*"/g,d=String.fromCharCode(26),g=function(){this.render()},p={prevent:function(e){e=e||this.domEvent,e.preventDefault?e.preventDefault():e.returnValue=!1},stop:function(e){e=e||this.domEvent,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},halt:function(e){this.prevent(e),this.stop(e)}},x=/(\w+)(?:<(\w+)>)?(?:{([\s\S]*)})?/,y=/(\w+):([^,]+)/g,w=/([$\w]+)<([\w,]+)>/,b=function(e){var t=this;f(t,e),t.sign=1,i(b.ms,[e],t)};b.ms=[],b.prepare=function(e){var t=this,r=e.superclass;if(r&&t.prepare(r.constructor),!e[m]){e[m]=1;var n,i,s,f,h,l=e.prototype,g={};for(var p in l)if(a(l,p))if(n=l[p],i=p.match(w))for(s=i[1],f=i[2],f=f.split(o),h=f.length-1;h>-1;h--)i=f[h],g[i]=1,l[s+d+i]=n;else a(u,p)&&n!=c&&(l[p]=v(n));f&&(l.$evts=g)}},b.mixin=function(e,t){t&&b.ms.push(t),f(b.prototype,e)},f(f(b.prototype,r),{render:c,locationChange:c,init:c,hasTmpl:!0,enableEvent:!0,load:function(){var e=this,t=e.hasTmpl,r=arguments,n=e.sign,a=function(a){if(n==e.sign){e.template=e.wrapMxEvent(a),e.delegateEvents(),e.fire("interact",{tmpl:t},1),i(e.init,r,e),e.fire("inited",0,1),i(e.render,s,e);var o=!t&&!e.rendered;o&&(e.rendered=!0,e.fire("primed",0,1))}};t?e.fetchTmpl(a):a()},beginUpdate:function(){var e=this;e.sign>0&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign>0&&(e.rendered||(e.fire("primed",0,1),e.rendered=!0),e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign>0&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return(e+"").replace(l,"$&"+this.id+d)},setViewHTML:function(e){var t,r=this;r.beginUpdate(),r.sign>0&&(t=r.$(r.id),t&&(t.innerHTML=e)),r.endUpdate()},observeLocation:function(e){var r,n=this;n.$ol||(n.$ol={keys:[]}),r=n.$ol;var i=r.keys;t.isObject(e)&&(r.pn=e.pathname,e=e.keys),e&&(r.keys=i.concat((e+"").split(o))),n.locationChange==c&&(n.locationChange=g)},olChanged:function(e){var t=this,r=t.$ol;if(r){var n=0;if(r.pn&&(n=e.isPathname()),!n){var i=r.keys;n=e.isParam(i)}return n}return 1},oust:function(){var e=this;e.sign>0&&(e.sign=0,e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.delegateEvents(1)),e.sign--},processEvent:function(e){var t=this;if(t.enableEvent&&t.sign>0){var r=e.info,n=e.se,a=h.get(r);a||(a=r.match(x),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(y,function(e,t,r){a.p[t]=r}),h.set(r,a));var o=a.n+d+e.st,s=t[o];if(s){var c=p[a.f];c&&c.call(p,n),i(s,f({currentId:e.cId,targetId:e.tId,type:e.st,domEvent:n,params:a.p},p),t)}}},delegateEvents:function(e){var t=this,r=t.$evts,i=e?n.off:n.on,a=t.vom;for(var o in r)i.call(n,o,a)}});var C,E="?t="+Date.now(),M={},T={};return b.prototype.fetchTmpl=function(e){var t=this,r="template"in t;if(r)e(t.template);else if(a(M,t.path))e(M[t.path]);else{var n=t.path.indexOf("/");if(!C){var o=t.path.substring(0,n);C=seajs.data.paths[o]}var s=t.path.substring(n+1),c=C+s+".html",f=T[c],u=function(r){e(M[t.path]=r)};f?f.push(u):(f=T[c]=[u],$.ajax({url:c+E,success:function(e){i(f,e),delete T[c]},error:function(e,t){i(f,t),delete T[c]}}))}},b.extend=function(e,r,n){var a=this,o=function(){o.superclass.constructor.apply(this,arguments),r&&i(r,arguments,this)};return o.extend=a.extend,t.extend(o,a,e,n)},b}),define("magix/vom",["magix/vframe","magix/magix","magix/event"],function(e){var t=e("magix/vframe"),r=e("magix/magix"),n=e("magix/event"),i=r.has,a=r.mix,o=0,s=0,c=0,f=0,u={},m={},v={},h=r.mix({all:function(){return u},add:function(e){i(u,e.id)||(o++,u[e.id]=e,h.fire("add",{vframe:e}))},get:function(e){return u[e]},remove:function(e,t){var r=u[e];r&&(o--,t&&s--,delete u[e],h.fire("remove",{vframe:r}))},vfCreated:function(){if(!f){s++;var e=s/o;e>c&&h.fire("progress",{percent:c=e},f=1==e)}},locChged:function(e){var r,n=e.loc;if(n?r=1:n=e.location,a(m,n),!r){a(v,e.changed);var i=t.root(h,m,v);v.isView()?i.mountView(n.view):i.locChged()}}},n);return h}),define("mxext/mmanager",["magix/magix","magix/event"],function(e){var t=e("magix/magix"),r=e("magix/event"),n=t.has,i=t.safeExec,a=t.mix,o="mr",s=String.fromCharCode(26),c=t.isFunction,f=12e5,u=function(e,t,r){t=[];for(r in e)t.push(r,o,e[r]);return t},m=function(e,t){return[e.name,u(t.urlParams),u(t.postParams)].join(s)},v=Date.now||function(){return+new Date},h=v(),l=function(e){var r=this;r.$mClass=e,r.$mCache=t.cache(),r.$mCacheKeys={},r.$mMetas={},r.id="mm"+h--},d=[].slice,g={urlParams:1,postParams:1,cacheKey:1,cacheTime:1,cache:1,before:1,after:1},p=function(e,t,r){return function(){return e.apply(t,[t,r].concat(d.call(arguments)))}},x=function(e){return e&&e.manage},y=function(e,t,r){var n=r.key,a=r.cKeys,o=a[n];if(o){var s=o.q;delete a[n],i(s,e)}},w=function(e){return function(){var t=new C(this),r=arguments,n=r[r.length-1];return x(n)&&(n.manage(t.id,t),r=d.call(r,0,-1)),t[e].apply(t,r)}},b=function(e,t){return function(r,n){var i=d.call(arguments,1);return this.send(r,i.length>1?i:n,e,t)}};a(l,{create:function(e){if(!e)throw Error("ungiven modelClass");return new l(e)}});var $={ALL:1,ONE:2,ORDER:4},C=function(e){this.$host=e,this.$doTask=!1,this.$reqModels={},this.id=o+h--};return a(C.prototype,{send:function(e,r,a,o){var s=this;if(s.$doTask)return s.next(function(){this.send(e,r,a,o)}),s;s.$doTask=!0;var c=s.$host,f=c.$mCache,u=c.$mCacheKeys,m=s.$reqModels;t.isArray(e)||(e=[e]);var h,l,d,g=e.length,x=0,w=Array(g),b=[],C={},E=[],M=t.isArray(r);M&&(b=Array(r.length));for(var T,P=function(e,t,n){if(!s.$destroy){x++,delete m[e.id];var o=e.$mm,u=o.key;if(w[t]=e,n)h=!0,d=!0,l=n,C.msg=n,C[t]=n;else{if(d=!1,!u||u&&!f.has(u)){u&&f.set(u,e),o.done=v();var p=o.after,y=o.meta;p&&i(p,[e,y]),c.fire("done",{model:e,meta:y})}!e.fromCache&&o.used>0&&(e.fromCache=!0),o.used++}if(a==$.ONE){var T=M?r[t]:r;T&&(b[t]=i(T,[d?C:null,e,C],s))}else if(a==$.ORDER){E[t]={m:e,e:d,s:n};for(var P,O,V=E.i||0;P=E[V];V++)O=M?r[V]:r,P.e&&(C.msg=P.s,C[V]=P.s),b[V]=i(O,[P.e?C:null,P.m,C].concat(b),s);E.i=V}x>=g&&(h||(C=null),a==$.ALL?(w.unshift(C),b[0]=C,b[1]=i(r,w,s)):b.unshift(C),s.$ntId=setTimeout(function(){s.doNext(b)},30))}},O=0;e.length>O;O++){if(T=e[O],!T)throw Error("miss attrs:"+e);var V=c.getModel(T,o),k=V.cKey,I=V.entity,A=p(P,I,O);A.id=s.id,k&&n(u,k)?u[k].q.push(A):V.update?(m[I.id]=I,k&&(u[k]={q:[A],e:I},A=y),I.request(A,{key:k,cKeys:u})):A()}return s},fetchAll:function(e,t){return this.send(e,t,$.ALL)},saveAll:function(e,t){return this.send(e,t,$.ALL,1)},fetchOrder:b($.ORDER),saveOrder:b($.ORDER,1),saveOne:b($.ONE,1),fetchOne:b($.ONE),abort:function(){var e=this;clearTimeout(e.$ntId);var t=e.$host,r=e.$reqModels,a=t.$mCacheKeys;for(var o in r){var s=r[o],c=s.$mm.key;if(c&&n(a,c)){for(var f,u=a[c],m=u.q,v=[],h=[],l=0;m.length>l;l++)f=m[l],f.id!=e.id?v.push(f):e.$destroy||h.push(f);i(h,["abort"],e),v.length?u.q=v:s.abort()}else s.abort()}e.$reqModels={},e.$queue=[],e.$doTask=!1},next:function(e){var t=this;if(t.$queue||(t.$queue=[]),t.$queue.push(e),!t.$doTask){var r=t.$latest;t.doNext(r)}return t},doNext:function(e){var t=this;t.$doTask=!1;var r=t.$queue;if(r){var n=r.shift();n&&i(n,e,t)}t.$latest=e},destroy:function(){var e=this;e.$destroy=!0,e.abort()}}),a(a(l.prototype,r),{registerModels:function(e){var r=this,n=r.$mMetas;t.isArray(e)||(e=[e]);for(var i,a,o=0;e.length>o;o++)if(i=e[o]){if(a=i.name,!a)throw Error("miss name attribute");if(n[a])throw Error("already exist:"+a);i.cache&&(i.cacheKey||(i.cacheKey=m),i.cacheTime||(i.cacheTime=f)),n[a]=i}},registerMethods:function(e){var t=this;a(t,e)},createModel:function(e){var t=this,r=t.getModelMeta(e),n=new t.$mClass;n.set(r,g),n.$mm={used:0};var a=e.before||r.before;c(a)&&i(a,[n,r]);var o=e.after||r.after;n.$mm.after=o;var s=e.cacheKey||r.cacheKey;return c(s)&&(s=i(s,[r,e])),n.$mm.key=s,n.$mm.meta=r,n.set(e,g),n.setUrlParams(r.urlParams),n.setPostParams(r.postParams),n.setUrlParams(e.urlParams),n.setPostParams(e.postParams),t.fire("inited",{model:n,meta:r}),n},getModelMeta:function(e){var r,n=this,i=n.$mMetas;r=t.isString(e)?e:e.name;var a=i[r];if(!a)throw Error("Unfound:"+r);return a},getModel:function(e,t){var r,n,i=this;return t||(r=i.getCachedModel(e)),r||(n=!0,r=i.createModel(e)),{entity:r,cKey:r.$mm.key,update:n}},saveAll:w("saveAll"),fetchAll:w("fetchAll"),saveOrder:w("saveOrder"),fetchOrder:w("fetchOrder"),saveOne:w("saveOne"),fetchOne:w("fetchOne"),createMRequest:function(e){var t=new C(this);return x(e)&&e.manage(t.id,t),t},clearCacheByKey:function(e){var t=this,r=t.$mCache;r.del(e)},clearCacheByName:function(e){for(var t=this,r=t.$mCache,n=r.c,i=0;n.length>i;i++){var a=n[i],o=a.v,s=o&&o.$mm;if(s){var c=s.meta.name;c==e&&r.del(s.key)}}},getCachedModel:function(e){var r,n,a=this,o=a.$mCache,s=null;if(t.isString(e)?r=e:(n=a.getModelMeta(e),r=e.cacheKey||n.cacheKey,c(r)&&(r=i(r,[n,e]))),r){var f=a.$mCacheKeys,u=f[r];if(u)s=u.e;else if(s=o.get(r)){n||(n=s.$mm.meta);var m=e.cacheTime||n.cacheTime||0;c(m)&&(m=i(m,[n,e])),m>0&&v()-s.$mm.done>m&&(a.clearCacheByKey(r),s=null)}}return s}}),l}),define("mxext/model",["magix/magix"],function(e){var t=e("magix/magix"),r=function(e,r){var n=this,i=function(){i.superclass.constructor.apply(this,arguments),r&&t.safeExec(r,arguments,this)};return t.mix(i,n,{prototype:!0}),t.extend(i,n,e)},n=+new Date,i=encodeURIComponent,a=t.has,o=t.isObject,s=t.toString,c=function(e){this.set(e),this.id="m"+n--};return t.mix(c,{GET:"GET",POST:"POST",extend:r}),t.mix(c.prototype,{sync:t.noop,getPostParams:function(){return this.getParams(c.POST)},getUrlParams:function(){return this.getParams(c.GET)},getParams:function(e){var r=this;e||(e=c.GET),e=e.toUpperCase();var n,a="$"+e,o=r[a],s=[];for(var f in o){n=o[f],t.isArray(n)||(n=[n]);for(var u=0;n.length>u;u++)s.push(f+"="+i(n[u]))}return s.join("&")},setUrlParamsIf:function(e,t){this.setParams(e,t,c.GET,!0)},setPostParamsIf:function(e,t){var r=this;r.setParams(e,t,c.POST,!0)},setParams:function(e,t,r,n){var i=this,s="$"+r;i[s]||(i[s]={});var c=i[s];if(!o(e)&&e){var f={};f[e]=t,e=f}for(var u in e)n&&a(c,u)||(c[u]=e[u])},setPostParams:function(e,t){var r=this;r.setParams(e,t,c.POST)},setUrlParams:function(e,t){this.setParams(e,t,c.GET)},get:function(e,t){var r=this,n=arguments.length,i=!n,a=2==n,o=r.$attrs;return o&&(o=i?o:o[e]),a&&s.call(t)!=s.call(o)&&(o=t),o},set:function(e,t){var r=this;if(r.$attrs||(r.$attrs={}),o(e))for(var n in e)a(t,n)||(r.$attrs[n]=e[n]);else e&&(r.$attrs[e]=t)},request:function(e,t){var r=this;r.$abt=0;var n=function(n,i){r.$abt?e("abort",null,t):n?e(n,i,t):(o(i)||(i={data:i}),r.set(i),e(n,i,t))};r.$trans=r.sync(n)},abort:function(){var e=this,t=e.$trans;t&&t.abort&&t.abort(),delete e.$trans,e.$abt=1},isAborted:function(){return this.$abt}}),c}),define("mxext/view",["magix/magix","magix/view","magix/router"],function(e){var t=e("magix/magix"),r=e("magix/view"),n=e("magix/router"),i=window,a=function(e){i.clearTimeout(e),i.clearInterval(e)},o=function(e){c(e.destroy,[],e)},s=0,c=t.safeExec,f=t.has,u=r.extend({navigate:n.navigate,manage:function(e,r){var n=this,i=arguments,c=!0;1==i.length&&(r=e,e="res_"+s++,c=!1),n.$res||(n.$res={});var f;t.isNumber(r)?f=a:r&&r.destroy&&(f=o);var u={hasKey:c,res:r,sign:n.sign,destroy:f};return n.$res[e]=u,r},getManaged:function(e,t){var r=this,n=r.$res,i=null;if(n&&f(n,e)){var a=n[e];i=a.res,t&&delete n[e]}return i},removeManaged:function(e){return this.getManaged(e,1)},destroyManaged:function(){var e=this,t=e.$res;if(t)for(var r in t){var n=t[r];if(n.sign!=e.sign){var i=n.res,a=n.destroy,o=!1;a&&(a(i),o=!0),n.hasKey||delete t[r],e.fire("destroyManaged",{resource:i,processed:o})}}},destroyMRequest:function(){var e=this,t=e.$res;if(t)for(var r in t){var n=t[r],i=n.res;i&&i.fetchOne&&i.fetchAll&&(i.destroy(),delete t[r])}}},function(){var e=this;e.on("interact",function(){e.on("rendercall",e.destroyMRequest),e.on("prerender",e.destroyManaged),e.on("destroy",e.destroyManaged)})});return u}),document.createElement("vframe");