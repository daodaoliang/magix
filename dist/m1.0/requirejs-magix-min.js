define("magix/magix",function(){[].slice;var e=/\/\.\/|\/[^\/]+?\/\.{2}\/|([^:\/])\/\/+/,t=/\/[^\/]*$/,n=/[#?].*$/,r="",i=/([^=&?\/#]+)=?([^&=#?]*)/g,a="pathname",o=/^https?:\/\//i,c=0,f="/",s="vframe",u={iniFile:"app/ini",appName:"app",appHome:"./",tagName:s,rootId:"magix_vf_root"},v={}.hasOwnProperty,p=function(e){return function(t,n,r){switch(arguments.length){case 0:r=e;break;case 1:r=y.isObject(t)?m(e,t):d(e,t)?e[t]:null;break;case 2:null===n?(delete e[t],r=n):e[t]=r=n}return r}},h=function(e){var t=this;t.c=[],t.x=e||5,t.b=t.x+3},l=function(e){return new h(e)},d=function(e,t){return e?v.call(e,t):0},m=function(e,t,n){for(var r in t)n&&d(n,r)||(e[r]=t[r]);return e};m(h.prototype,{get:function(e){var t,n=this,r=n.c;return e=a+e,d(r,e)&&(t=r[e],t.f>=1&&(t.f++,t.t=c++,t=t.v)),t},set:function(e,t){var n=this,r=n.c;e=a+e;var i=r[e];if(!d(r,e)){if(r.length>=n.b){r.sort(function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f});for(var o=n.b-n.x;o--;)i=r.pop(),delete r[i.k]}i={},r.push(i),r[e]=i}return i.k=e,i.v=t,i.f=1,i.t=c++,i},del:function(e){e=a+e;var t=this.c,n=t[e];n&&(n.f=-1e5,n.v=r,delete t[e])},has:function(e){return e=a+e,d(this.c,e)}});var g=l(20),w=l(),x=function(e,t,n,r,i,a){for(y.isArray(e)||(e=[e]),t&&(y.isArray(t)||t.callee)||(t=[t]),r=0;e.length>r;r++)try{a=e[r],i=y.isFunction(a)&&a.apply(n,t)}catch(o){}return i},b=function(){},y={isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},mix:m,has:d,safeExec:x,noop:b,config:p(u),start:function(e){var t=this;e=m(u,e),t.libEnv(e),e.ready&&(x(e.ready),delete e.ready),t.libRequire(e.iniFile,function(n){u=m(e,n,e),u.tagNameChanged=u.tagName!=s;var r=e.progress;t.libRequire(["magix/router","magix/vom"],function(n,i){n.on("!ul",i.locChged),n.on("changed",i.locChged),r&&i.on("progress",r),t.libRequire(e.extensions,n.start)})})},keys:Object.keys||function(e){var t=[];for(var n in e)d(e,n)&&t.push(n);return t},local:p({}),path:function(i,a){var c=i+"\n"+a,s=w.get(c);if(!s){if(o.test(a))s=a;else if(i=i.replace(n,r).replace(t,r)+f,a.charAt(0)==f){var u=o.test(i)?8:0,v=i.indexOf(f,u);s=i.substring(0,v)+a}else s=i+a;for(;e.test(s);)s=s.replace(e,"$1/");w.set(c,s)}return s},pathToObject:function(e,t){var c=g.get(e);if(!c){c={};var s={},u=r;if(n.test(e)?u=e.replace(n,r):~e.indexOf("=")||(u=e),e=e.replace(u,r),u&&o.test(u)){var v=u.indexOf(f,8);u=-1==v?f:u.substring(v)}e.replace(i,function(e,n,r){if(t)try{r=decodeURIComponent(r)}catch(i){}s[n]=r}),c[a]=u,c.params=s,g.set(e,c)}return c},objectToPath:function(e,t){var n,r=e[a],i=[],o=e.params;for(var c in o)n=o[c],t&&encodeURIComponent(n),i.push(c+"="+n);return i.length&&(r=r+"?"+i.join("&")),r},listToMap:function(e,t){var n,r,i,a={};if(y.isString(e)&&(e=e.split(",")),e&&(i=e.length))for(n=0;i>n;n++)r=e[n],a[t?r[t]:r]=t?r:1;return a},cache:l},C=Object.prototype.toString;return m(y,{libRequire:function(e,t){y.isArray(e)||(e=[e]),e?require(e,t):t&&t()},libEnv:function(e){var t=this,n=e.appHome,i=location;i.protocol;var a=e.appName;n=t.path(i.href,n+f),e.appHome=n;var o=e.debug;o&&(o=0==n.indexOf(i.protocol+f+f+i.host+f));var c=r;c=o?Date.now():e.appTag,c&&(c+=".js");var s={};s[a]=n+a+"/",requirejs.config({paths:s})},isArray:$.isArray,isFunction:$.isFunction,isObject:function(e){return"[object Object]"==C.call(e)},isString:function(e){return"[object String]"==C.call(e)},isNumber:function(e){return"[object Number]"==C.call(e)},isRegExp:function(e){return"[object RegExp]"==C.call(e)},extend:function(e,t,n,r){e.superclass=t.prototype;var i=function(){};return i.prototype=t.prototype,e.prototype=new i,y.mix(e.prototype,n),y.mix(e,r),e.prototype.constructor=e,e}})}),define("magix/router",["magix/magix","magix/event"],function(e,t){var n,r,i,a,o,c=window,f="",s="pathname",u=e.has,v=e.mix,p=document,h=/^UTF-8$/i.test(p.charset||p.characterSet||"UTF-8"),l=e.config(),d=e.cache(),m=e.cache(),g=/#.*$/,w=/^[^#]*#?!?/,x="params",b=l.nativeHistory,y=function(t,n,r){if(t){r=this[x],e.isArray(t)||(t=t.split(","));for(var i=0;t.length>i&&!(n=u(r,t[i]));i++);}return n},C=function(){return u(this,s)},E=function(){return u(this,"view")},V=function(){var e=this,t=e.hash,n=e.query;return t[s]!=n[s]},M=function(e){var t=this,n=t.hash,r=t.query;return n[x][e]!=r[x][e]},j=function(e){var t=this,n=t.hash;return u(n[x],e)},T=function(e){var t=this,n=t.query;return u(n[x],e)},I=function(e){var t=this,n=t[x];return n[e]},k=function(t){var n=e.pathToObject(t,h),r=n[s];return r&&o&&(n[s]=e.path(c.location[s],r)),n},O=v({getView:function(t,n){if(!i){i={rs:l.routes||{},nf:l.notFoundView};var r=l.defaultView;if(!r)throw Error("unset defaultView");i.home=r;var a=l.defaultPathname||f;i.rs[a]=r,i[s]=a}var o;t||(t=i[s]);var c=i.rs;return o=e.isFunction(c)?c.call(l,t,n):c[t],{view:o?o:i.nf||i.home,pathname:o||b?t:i.nf?t:i[s]}},start:function(){var e=O,t=c.history;a=b&&t.pushState,o=b&&!a,a?e.useState():e.useHash(),e.route()},parseQH:function(e,t){e=e||c.location.href;var n=O,r=d.get(e);if(!r){var i=e.replace(g,f),a=e.replace(w,f),o=k(i),u=k(a),p={};v(p,o[x]),v(p,u[x]),r={pathnameDiff:V,paramDiff:M,hashOwn:j,queryOwn:T,get:I,href:e,srcQuery:i,srcHash:a,query:o,hash:u,params:p},d.set(e,r)}if(t&&!r.view){var h;h=b?r.hash[s]||r.query[s]:r.hash[s];var l=n.getView(h,r);v(r,l)}return r},getChged:function(e,t){var n=e.href,r=t.href,i=n+"\n"+r,a=m.get(i);if(a||(i=r+"\n"+i,a=m.get(i)),!a){var o;a={params:{}},e[s]!=t[s]&&(a[s]=1,o=1),e.view!=t.view&&(a.view=1,o=1);var c,f=e[x],u=t[x];for(c in f)f[c]!=u[c]&&(o=1,a[x][c]=1);for(c in u)f[c]!=u[c]&&(o=1,a[x][c]=1);a.occur=o,a.isParam=y,a.isPathname=C,a.isView=E,m.set(i,a)}return a},route:function(){var e=O,t=e.parseQH(0,1),i=r||{params:{},href:"~"},a=!r;r=t;var o=e.getChged(i,t);o.occur&&(n=t,e.fire("changed",{location:t,changed:o,force:a}))},navigate:function(t,r,i){var c=O;if(!r&&e.isObject(t)&&(r=t,t=f),r&&(t=e.objectToPath({params:r,pathname:t},h)),t){var p=k(t),l={};if(l[x]=v({},p[x]),l[s]=p[s],l[s]){if(o){var d=n.query;if(d&&(d=d[x]))for(var m in d)u(d,m)&&!u(l[x],m)&&(l[x][m]=f)}}else{var g=v({},n[x]);l[x]=v(g,l[x]),l[s]=n[s]}var w,b=e.objectToPath(l);w=a?b!=n.srcQuery:b!=n.srcHash,w&&(a?(c.poped=1,history[i?"replaceState":"pushState"](null,null,b),c.route()):(v(l,n,l),l.srcHash=b,l.hash={params:l[x],pathname:l[s]},c.fire("!ul",{loc:n=l}),b="#!"+b,i?location.replace(b):location.hash=b))}}},t);return O.useState=function(){var e=O,t=location.href;$(c).on("popstate",function(){var n=location.href==t;(e.poped||!n)&&(e.poped=1,e.route())},!1)},O.useHash=function(){$(c).on("hashchange",O.route,!1)},O}),define("magix/body",["magix/magix"],function(e){var t,n=e.has,r=e.listToMap(""),i=document.body,a={},o=String.fromCharCode(26),c="mx-owner",f="mx-ie",s={},u=65536,v=function(e){return e.id||(e.id="mx-e-"+u--)},p=function(e,t,n){return n?e.setAttribute(t,n):n=e.getAttribute(t),n},h={process:function(e){for(var r=e.target||e.srcElement;r&&1!=r.nodeType;)r=r.parentNode;var a=r,u=e.type,h=s[u]||(s[u]=RegExp("(?:^|,)"+u+"(?:,|$)"));if(!h.test(p(r,f))){for(var l,d,m="mx-"+u,g=[];a&&a!=i&&(l=p(a,m),d=p(a,f),!l&&!h.test(d));)g.push(a),a=a.parentNode;if(l){var w,x=l.indexOf(o);x>-1&&(w=l.slice(0,x),l=l.slice(x));var b=p(a,c)||w;if(!b)for(var y=a,C=t.all();y&&y!=i;){if(n(C,y.id)){p(a,c,b=y.id);break}y=y.parentNode}if(!b)throw Error("miss "+c+":"+l);var E=t.get(b),V=E&&E.view;V&&V.processEvent({info:l,se:e,tId:v(r),cId:v(a)})}else for(var M;g.length;)M=g.shift(),d=p(M,f),h.test(d)||(d=d?d+","+u:u,p(M,f,d))}},on:function(e,n){var o=this;if(a[e])a[e]++;else{t=n,a[e]=1;var c=r[e];c?o.unbubble(0,i,e):i["on"+e]=function(e){e=e||window.event,e&&o.process(e)}}},un:function(e){var t=this,n=a[e];if(n>0){if(n--,!n){var o=r[e];o?t.unbubble(1,i,e):i["on"+e]=null}a[e]=n}}};return h.unbubble=function(e,t,n){var r=e?"undelegate":"delegate";$(t)[r]("[mx-"+n+"]",n,h.process)},h}),define("magix/event",["magix/magix"],function(e){var t=function(e){return"~"+e},n=e.safeExec,r={fire:function(e,r,i,a){var o=t(e),c=this,f=c[o];if(f){r||(r={}),r.type||(r.type=e);for(var s,u,v=f.length,p=v-1;v--;)s=a?v:p-v,u=f[s],(u.d||u.r)&&(f.splice(s,1),p--),u.d||n(u.f,r,c)}i&&delete c[o]},on:function(n,r,i){var a=t(n),o=this[a]||(this[a]=[]);e.isNumeric(i)?o.splice(i,0,{f:r}):o.push({f:r,r:i})},un:function(e,n){var r=t(e),i=this[r];if(i)if(n){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==n&&!a.d){a.d=1;break}}else delete this[r]}};return r}),define("magix/vframe",["magix/magix","magix/event","magix/view"],function(e,t,n){var r,i,a,o=document,c=65536,f=e.safeExec,s=[].slice,u=e.mix,v=e.config("tagName"),p=e.config("rootId"),h=!e.config("tagNameChanged"),l=e.has,d="mx-view",m=h?"mx-defer":"mx-vframe",g="alter",w="created",x=function(e){return"object"==typeof e?e:o.getElementById(e)},b=function(e,t,n){return n=x(e),n?n.getElementsByTagName(t):[]},y=function(e){return o.createElement(e)},C=function(e){return e.id||(e.id="magix_vf_"+c--)},E=function(e,t,n){if(e=x(e),t=x(t),e&&t)if(e!==t)try{n=t.contains?t.contains(e):16&t.compareDocumentPosition(e)}catch(r){n=0}else n=1;return n},V=/<script[^>]*>[\s\S]*?<\/script>/gi,M=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={}};return u(M,{root:function(e,t){if(!r){a=t;var n=x(p);n||(n=y(v),n.id=p,o.body.insertBefore(n,o.body.firstChild)),r=new M(p),e.add(r)}return r}}),u(u(M.prototype,t),{mountView:function(t,r,i){var o=this,c=x(o.id);if(c._bak?c._chgd=1:(c._bak=1,c._tmpl=c.innerHTML.replace(V,"")),o.unmountView(),t){var s=e.pathToObject(t),v=s.pathname,p=--o.sign;e.libRequire(v,function(e){if(p==o.sign){var t=o.owner;n.prepare(e);var h=new e({owner:o,id:o.id,$:x,path:v,vom:t,location:a});o.view=h,h.on("interact",function(e){e.tmpl||(c._chgd&&(c.innerHTML=c._tmpl),o.mountZoneVframes(0,0,1)),h.on("rendered",function(){o.mountZoneVframes(0,0,1)}),h.on("prerender",function(){o.unmountZoneVframes(0,1)||o.cAlter()}),h.on("inited",function(){o.viewInited=1,o.fire("viewInited",{view:h}),i&&f(i,h,o)})},0),r=r||{},h.load(u(r,s.params,r))}})}},unmountView:function(){var e=this;if(e.view){i||(i={}),e.unmountZoneVframes(0,1),e.cAlter(i),e.view.destroy();var t=x(e.id);t&&t._bak&&(t.innerHTML=t._tmpl),delete e.view,delete e.viewInited,i=0,e.fire("viewUnmounted")}e.sign--},mountVframe:function(e,t,n){var r=this,i=r.owner,a=i.get(e);return a||(a=new M(e),a.pId=r.id,l(r.cM,e)||r.cC++,r.cM[e]=1,i.add(a)),a.mountView(t,n),a},mountZoneVframes:function(e,t){var n=this,r=e||n.id;n.unmountZoneVframes(r,1);var i=b(r,v),a=i.length,o={};if(a)for(var c,f,s,u,p=0;a>p;p++)if(c=i[p],f=C(c),!l(o,f)&&(s=c.getAttribute(d),u=!c.getAttribute(m),u=u==h,u||s)){n.mountVframe(f,s,t);for(var g,w=b(c,v),x=0,y=w.length;y>x;x++)g=w[x],s=g.getAttribute(d),u=!g.getAttribute(m),u=u==h,u||s||(o[C(g)]=1)}n.cCreated()},unmountVframe:function(e,t){var n=this;e=e||n.id;var r=n.owner,i=r.get(e);if(i){var a=i.fcc;i.unmountView(),r.remove(e,a),n.fire("destroy");var o=r.get(i.pId);o&&l(o.cM,e)&&(delete o.cM[e],o.cC--,t||o.cCreated())}},unmountZoneVframes:function(e,t){var n,r,i,a=this;if(e){var o=a.cM,c={};for(i in o)E(i,e)&&(c[i]=1);n=c}else n=a.cM;for(i in n)r=1,a.unmountVframe(i,1);return t||a.cCreated(),r},invokeView:function(e){var t,n=this,r=n.view,i=s.call(arguments,1);return n.viewInited&&r[e]&&(t=f(r[e],i,r)),t},cCreated:function(e){var t=this;if(t.cC==t.rC){var n=t.view;n&&!t.fcc&&(t.fcc=1,delete t.fca,n.fire(w,e),t.fire(w,e));var r=t.owner;r.vfCreated();var i=t.id,a=r.get(t.pId);a&&!l(a.rM,i)&&(a.rM[i]=a.cM[i],a.rC++,a.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),delete t.fcc,!t.fca){var n=t.view,r=t.id;n&&(t.fca=1,n.fire(g,e),t.fire(g,e));var i=t.owner,a=i.get(t.pId);a&&l(a.rM,r)&&(a.rC--,delete a.rM[r],a.cAlter(e))}},locChged:function(t,n){var r=this,i=r.view;if(i&&i.sign&&i.rendered){var a=i.olChanged(n),o={location:t,changed:n,prevent:function(){this.cs=[]},toChildren:function(t){t=t||[],e.isString(t)&&(t=t.split(",")),this.cs=t}};a&&f(i.locationChange,o,i);for(var c,s=o.cs||e.keys(r.cM),u=0,v=s.length,p=r.owner;v>u;u++)c=p.get(s[u]),c&&c.locChged(t,n)}}}),M}),define("magix/view",["magix/magix","magix/event","magix/body"],function(e,t,n){var r=e.safeExec,i=e.has,a=",",o=[],c=e.mix,f={render:1,renderUI:1},s="~",u=function(e){return function(){var t,n=this,r=n.notifyUpdate();return r&&(t=e.apply(n,arguments)),t}},v=e.cache(40),p=/\smx-(?!view|defer|owner)[a-z]+\s*=\s*['"]/g,h=String.fromCharCode(26),l=function(){this.render()},d={prevent:function(e){e=e||this.domEvent,e.preventDefault?e.preventDefault():e.returnValue=!1},stop:function(e){e=e||this.domEvent,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},halt:function(e){this.prevent(e),this.stop(e)}},m=/(\w+)(?:<(\w+)>)?(?:{([\s\S]*)})?/,g=/(\w+):([^,]+)/g,w=/([$\w]+)<([\w,]+)>/,x=function(e){var t=this;c(t,e),t.sign=1};c(x,{prepare:function(e){var t=this;if(e.extend||(e.extend=t.extend),!e[s]){e[s]=1;var n,r,i,o,c,v=e.prototype,p={};for(var l in v)if(n=v[l],r=l.match(w))for(i=r[1],o=r[2],v[i]=n,o=o.split(a),c=o.length-1;c>-1;c--)r=o[c],p[r]=1,v[i+h+r]=n;else f[n]&&(v[l]=u(n));v.$evts=p}}}),c(c(x.prototype,t),{render:e.noop,locationChange:e.noop,init:e.noop,hasTmpl:!0,enableEvent:!0,load:function(){var e=this,t=e.hasTmpl,n=arguments,a=e.sign,c=i(e,"template"),f=function(i){if(a==e.sign){c||(e.template=e.wrapMxEvent(i)),e.delegateEvents(),e.fire("interact",{tmpl:t},1),r(e.init,n,e),e.fire("inited",0,1),r(e.render,o,e);var f=!t&&!e.rendered;f&&(e.rendered=!0,e.fire("primed",null,1))}};t&&!c?e.fetchTmpl(f):f()},beginUpdate:function(){var e=this;e.sign&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign&&(e.rendered||e.fire("primed",0,1),e.rendered=!0,e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return(e+"").replace(p,"$&"+this.id+h)},setViewHTML:function(e){var t,n=this;n.beginUpdate(),n.sign&&(t=n.$(n.id),t&&(t.innerHTML=e)),n.endUpdate()},observeLocation:function(t){var n,r=this;r.$ol||(r.$ol={keys:[]}),n=r.$ol;var i=n.keys;e.isObject(t)&&(n.pn=t.pathname,t=t.keys),t&&(n.keys=i.concat((t+"").split(a))),r.locationChange==e.noop&&(r.locationChange=l)},olChanged:function(e){var t=this,n=t.$ol;if(n){var r=0;if(n.pn&&(r=e.isPathname()),!r){var i=n.keys;r=e.isParam(i)}return r}return 1},destroy:function(){var e=this;e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.delegateEvents(1),e.sign=0},processEvent:function(e){var t=this;if(t.enableEvent&&t.sign){var n=e.info,i=e.se,a=v.get(n);a||(a=n.match(m),a={n:a[1],f:a[2],i:a[3],p:{}},a.i&&a.i.replace(g,function(e,t,n){a.p[t]=n}),v.set(n,a));var o=a.n+h+i.type,f=t[o];if(f){var s=d[a.f];s&&s.call(d,i),r(f,c({currentId:e.cId,targetId:e.tId,domEvent:i,params:a.p},d),t)}}},delegateEvents:function(e){var t=this,r=t.$evts,i=e?n.un:n.on,a=t.vom;for(var o in r)i.call(n,o,a)}});var b,y=e.config("appHome"),C=e.config("debug")?"?t="+Date.now():"",E={};return x.prototype.fetchTmpl=function(e){var t=this,n="template"in t;if(n)e(tmpl);else if(i(E,t.path))e(E[t.path]);else{var a=y+t.path+".html",o=b[a],c=function(n){e(E[t.path]=n)};o?o.push(c):(o=b[a]=[c],$.ajax({url:a+C,success:function(e){r(o,e),delete b[a]},error:function(e,t){r(o,t),delete b[a]}}))}},x.extend=function(t,n,i){var a=this,o=function(){o.superclass.constructor.apply(this,arguments),n&&r(n,arguments,this)};return o.extend=a.extend,e.extend(o,a,t,i)},x}),define("magix/vom",["magix/vframe","magix/magix","magix/event"],function(e,t,n){var r=t.has,i=t.mix,a=0,o=0,c=0,f=0,s={},u={},v=t.mix({all:function(){return s},add:function(e){r(s,e.id)||(a++,s[e.id]=e,e.owner=v,v.fire("add",{vframe:e}))},get:function(e){return s[e]},remove:function(e,t){var n=s[e];n&&(a--,t&&o--,delete s[e],v.fire("remove",{vframe:n}))},vfCreated:function(){if(!f){o++;var e=o/a;e>c&&v.fire("progress",{percent:c=e},f=1==e)}},root:function(){return e.root(v,u)},locChged:function(e){var t,n=e.loc;if(n?t=1:n=e.location,i(u,n),!t){var r=v.root(),a=e.changed;a.isView()?r.mountView(n.view):r.locChged(n,a)}}},n);return v});