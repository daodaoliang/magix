KISSY.add("magix/magix",function(e){var t=[].slice,n=/\/\.\/|\/[^\/]+?\/\.{2}\/|([^:\/])\/\/+/,r=/\/[^\/]*$/,i=/[#?].*$/,a="",o=/([^=&?\/#]+)=?([^&=#?]*)/g,c="pathname",s=/^https?:\/\//i,f=0,u="/",v="vframe",d={iniFile:"app/ini",appName:"app",appHome:"./",tagName:v,rootId:"magix_vf_root"},h={}.hasOwnProperty,l=function(e){return function(t,n,r){switch(arguments.length){case 0:r=e;break;case 1:r=S.isObject(t)?w(e,t):g(e,t)?e[t]:null;break;case 2:null===n?(delete e[t],r=n):e[t]=r=n}return r}},p=function(e){var t=this;t.c=[],t.x=e||5,t.b=t.x+3},m=function(e){return new p(e)},g=function(e,t){return e?h.call(e,t):0},w=function(e,t,n){for(var r in t)n&&g(n,r)||(e[r]=t[r]);return e};w(p.prototype,{get:function(e){var t,n=this,r=n.c;return e=c+e,g(r,e)&&(t=r[e],t.f>=1&&(t.f++,t.t=f++,t=t.v)),t},set:function(e,t){var n=this,r=n.c;e=c+e;var i=r[e];if(!g(r,e)){if(r.length>=n.b){r.sort(function(e,t){return t.f==e.f?t.t-e.t:t.f-e.f});for(var a=n.b-n.x;a--;)i=r.pop(),delete r[i.k]}i={},r.push(i),r[e]=i}return i.k=e,i.v=t,i.f=1,i.t=f++,i},del:function(e){e=c+e;var t=this.c,n=t[e];n&&(n.f=-1e5,n.v=a,delete t[e])},has:function(e){return e=c+e,g(this.c,e)}});var x=m(20),b=m(),y=function(e,t,n,r,i,a){for(S.isArray(e)||(e=[e]),t&&(S.isArray(t)||t.callee)||(t=[t]),r=0;e.length>r;r++)try{a=e[r],i=S.isFunction(a)&&a.apply(n,t)}catch(o){}return i},C=function(){},S={isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},mix:w,has:g,safeExec:y,noop:C,config:l(d),start:function(e){var t=this;e=w(d,e),t.libEnv(e),e.ready&&(y(e.ready),delete e.ready),t.libRequire(e.iniFile,function(n){d=w(e,n,e),d.tagNameChanged=d.tagName!=v;var r=e.progress;t.libRequire(["magix/router","magix/vom"],function(n,i){n.on("!ul",i.locChged),n.on("changed",i.locChged),r&&i.on("progress",r),t.libRequire(e.extensions,n.start)})})},keys:Object.keys||function(e){var t=[];for(var n in e)g(e,n)&&t.push(n);return t},local:l({}),path:function(e,t){var o=e+"\n"+t,c=b.get(o);if(!c){if(s.test(t))c=t;else if(e=e.replace(i,a).replace(r,a)+u,t.charAt(0)==u){var f=s.test(e)?8:0,v=e.indexOf(u,f);c=e.substring(0,v)+t}else c=e+t;for(;n.test(c);)c=c.replace(n,"$1/");b.set(o,c)}return c},pathToObject:function(e,t){var n=x.get(e);if(!n){n={};var r={},f=a;if(i.test(e)?f=e.replace(i,a):~e.indexOf("=")||(f=e),e=e.replace(f,a),f&&s.test(f)){var v=f.indexOf(u,8);f=-1==v?u:f.substring(v)}e.replace(o,function(e,n,i){if(t)try{i=decodeURIComponent(i)}catch(a){}r[n]=i}),n[c]=f,n.params=r,x.set(e,n)}return n},objectToPath:function(e,t){var n,r=e[c],i=[],a=e.params;for(var o in a)n=a[o],t&&encodeURIComponent(n),i.push(o+"="+n);return i.length&&(r=r+"?"+i.join("&")),r},listToMap:function(e,t){var n,r,i,a={};if(S.isString(e)&&(e=e.split(",")),e&&(i=e.length))for(n=0;i>n;n++)r=e[n],a[t?r[t]:r]=t?r:1;return a},cache:m};return w(S,{libRequire:function(n,r){n?e.use(n+"",function(e){r&&r.apply(e,t.call(arguments,1))}):r&&r()},libEnv:function(t){var n=this,r=t.appHome,i=location;i.protocol;var o=t.appName;r=n.path(i.href,r+u),t.appHome=r;var c=t.debug;c&&(c=0==r.indexOf(i.protocol+u+u+i.host+u));var s=a;s=c?e.now():t.appTag,s&&(s+=".js"),e.config({packages:[{name:o,path:r,debug:t.debug=c,combine:t.appCombine,tag:s}]})},isArray:e.isArray,isFunction:e.isFunction,isObject:e.isObject,isRegExp:e.isRegExp,isString:e.isString,isNumber:e.isNumber})}),KISSY.add("magix/router",function(e,t,n,r){var i,a,o,c,s,f=window,u="",v="pathname",d=t.has,h=t.mix,l=document,p=/^UTF-8$/i.test(l.charset||l.characterSet||"UTF-8"),m=t.config(),g=t.cache(),w=t.cache(),x=/#.*$/,b=/^[^#]*#?!?/,y="params",C=m.nativeHistory,S=function(e,n,r){if(e){r=this[y],t.isArray(e)||(e=e.split(","));for(var i=0;e.length>i&&!(n=d(r,e[i]));i++);}return n},E=function(){return d(this,v)},I=function(){return d(this,"view")},V=function(){var e=this,t=e.hash,n=e.query;return t[v]!=n[v]},M=function(e){var t=this,n=t.hash,r=t.query;return n[y][e]!=r[y][e]},T=function(e){var t=this,n=t.hash;return d(n[y],e)},k=function(e){var t=this,n=t.query;return d(n[y],e)},q=function(e){var t=this,n=t[y];return n[e]},H=function(e){var n=t.pathToObject(e,p),r=n[v];return r&&s&&(n[v]=t.path(f.location[v],r)),n},N=h({getView:function(e,n){if(!o){o={rs:m.routes||{},nf:m.notFoundView};var r=m.defaultView;if(!r)throw Error("unset defaultView");o.home=r;var i=m.defaultPathname||u;o.rs[i]=r,o[v]=i}var a;e||(e=o[v]);var c=o.rs;return a=t.isFunction(c)?c.call(m,e,n):c[e],{view:a?a:o.nf||o.home,pathname:a||C?e:o.nf?e:o[v]}},start:function(){var e=N,t=f.history;c=C&&t.pushState,s=C&&!c,c?e.useState():e.useHash(),e.route()},parseQH:function(e,t){e=e||f.location.href;var n=N,r=g.get(e);if(!r){var i=e.replace(x,u),a=e.replace(b,u),o=H(i),c=H(a),s={};h(s,o[y]),h(s,c[y]),r={pathnameDiff:V,paramDiff:M,hashOwn:T,queryOwn:k,get:q,href:e,srcQuery:i,srcHash:a,query:o,hash:c,params:s},g.set(e,r)}if(t&&!r.view){var d;d=C?r.hash[v]||r.query[v]:r.hash[v];var l=n.getView(d,r);h(r,l)}return r},getChged:function(e,t){var n=e.href,r=t.href,i=n+"\n"+r,a=w.get(i);if(a||(i=r+"\n"+i,a=w.get(i)),!a){var o;a={params:{}},e[v]!=t[v]&&(a[v]=1,o=1),e.view!=t.view&&(a.view=1,o=1);var c,s=e[y],f=t[y];for(c in s)s[c]!=f[c]&&(o=1,a[y][c]=1);for(c in f)s[c]!=f[c]&&(o=1,a[y][c]=1);a.occur=o,a.isParam=S,a.isPathname=E,a.isView=I,w.set(i,a)}return a},route:function(){var e=N,t=e.parseQH(0,1),n=a||{params:{},href:"~"},r=!a;a=t;var o=e.getChged(n,t);o.occur&&(i=t,e.fire("changed",{location:t,changed:o,force:r}))},navigate:function(e,n,r){var a=N;if(!n&&t.isObject(e)&&(n=e,e=u),n&&(e=t.objectToPath({params:n,pathname:e},p)),e){var o=H(e),f={};if(f[y]=h({},o[y]),f[v]=o[v],f[v]){if(s){var l=i.query;if(l&&(l=l[y]))for(var m in l)d(l,m)&&!d(f[y],m)&&(f[y][m]=u)}}else{var g=h({},i[y]);f[y]=h(g,f[y]),f[v]=i[v]}var w,x=t.objectToPath(f);w=c?x!=i.srcQuery:x!=i.srcHash,w&&(c?(a.poped=1,history[r?"replaceState":"pushState"](null,null,x),a.route()):(h(f,i,f),f.srcHash=x,f.hash={params:f[y],pathname:f[v]},a.fire("!ul",{loc:i=f}),x="#!"+x,r?location.replace(x):location.hash=x))}}},n);return N.useState=function(){var e=N,t=location.href;r.on(f,"popstate",function(){var n=location.href==t;(e.poped||!n)&&(e.poped=1,e.route())})},N.useHash=function(){r.on(f,"hashchange",N.route)},N},{requires:["magix/magix","magix/event","event"]}),KISSY.add("magix/body",function(e,t,n){var r,i=t.has,a=t.listToMap(""),o=document.body,c={},s=String.fromCharCode(26),f="mx-owner",u="mx-ie",v={},d=65536,h=function(e){return e.id||(e.id="mx-e-"+d--)},l=function(e,t,n){return n?e.setAttribute(t,n):n=e.getAttribute(t),n},p={process:function(e){for(var t=e.target||e.srcElement;t&&1!=t.nodeType;)t=t.parentNode;var n=t,a=e.type,c=v[a]||(v[a]=RegExp("(?:^|,)"+a+"(?:,|$)"));if(!c.test(l(t,u))){for(var d,p,m="mx-"+a,g=[];n&&n!=o&&(d=l(n,m),p=l(n,u),!d&&!c.test(p));)g.push(n),n=n.parentNode;if(d){var w,x=d.indexOf(s);x>-1&&(w=d.slice(0,x),d=d.slice(x));var b=l(n,f)||w;if(!b)for(var y=n,C=r.all();y&&y!=o;){if(i(C,y.id)){l(n,f,b=y.id);break}y=y.parentNode}if(!b)throw Error("miss "+f+":"+d);var S=r.get(b),E=S&&S.view;E&&E.processEvent({info:d,se:e,tId:h(t),cId:h(n)})}else for(var I;g.length;)I=g.shift(),p=l(I,u),c.test(p)||(p=p?p+","+a:a,l(I,u,p))}},on:function(e,t){var n=this;if(c[e])c[e]++;else{r=t,c[e]=1;var i=a[e];i?n.unbubble(0,o,e):o["on"+e]=function(e){e=e||window.event,e&&n.process(e)}}},un:function(e){var t=this,n=c[e];if(n>0){if(n--,!n){var r=a[e];r?t.unbubble(1,o,e):o["on"+e]=null}c[e]=n}}};return p.unbubble=function(e,t,r){var i=e?n.undelegate:n.delegate;i.call(n,t,r,"[mx-"+r+"]",p.process)},p},{requires:["magix/magix","event","sizzle"]}),KISSY.add("magix/event",function(e,t){var n=function(e){return"~"+e},r=t.safeExec,i={fire:function(e,t,i,a){var o=n(e),c=this,s=c[o];if(s){t||(t={}),t.type||(t.type=e);for(var f,u,v=s.length,d=v-1;v--;)f=a?v:d-v,u=s[f],(u.d||u.r)&&(s.splice(f,1),d--),u.d||r(u.f,t,c)}i&&delete c[o]},on:function(e,r,i){var a=n(e),o=this[a]||(this[a]=[]);t.isNumeric(i)?o.splice(i,0,{f:r}):o.push({f:r,r:i})},un:function(e,t){var r=n(e),i=this[r];if(i)if(t){for(var a,o=i.length-1;o>=0;o--)if(a=i[o],a.f==t&&!a.d){a.d=1;break}}else delete this[r]}};return i},{requires:["magix/magix"]}),KISSY.add("magix/vframe",function(e,t,n,r){var i,a,o,c=document,s=65536,f=t.safeExec,u=[].slice,v=t.mix,d=t.config("tagName"),h=t.config("rootId"),l=!t.config("tagNameChanged"),p=t.has,m="mx-view",g=l?"mx-defer":"mx-vframe",w="alter",x="created",b=function(e){return"object"==typeof e?e:c.getElementById(e)},y=function(e,t,n){return n=b(e),n?n.getElementsByTagName(t):[]},C=function(e){return c.createElement(e)},S=function(e){return e.id||(e.id="magix_vf_"+s--)},E=function(e,t,n){if(e=b(e),t=b(t),e&&t)if(e!==t)try{n=t.contains?t.contains(e):16&t.compareDocumentPosition(e)}catch(r){n=0}else n=1;return n},I=/<script[^>]*>[\s\S]*?<\/script>/gi,V=function(e){var t=this;t.id=e,t.cM={},t.cC=0,t.rC=0,t.sign=1<<30,t.rM={}};return v(V,{root:function(e,t){if(!i){o=t;var n=b(h);n||(n=C(d),n.id=h,c.body.insertBefore(n,c.body.firstChild)),i=new V(h),e.add(i)}return i}}),v(v(V.prototype,n),{mountView:function(e,n,i){var a=this,c=b(a.id);if(c._bak?c._chgd=1:(c._bak=1,c._tmpl=c.innerHTML.replace(I,"")),a.unmountView(),e){var s=t.pathToObject(e),u=s.pathname,d=--a.sign;t.libRequire(u,function(e){if(d==a.sign){var t=a.owner;r.prepare(e);var h=new e({owner:a,id:a.id,$:b,path:u,vom:t,location:o});a.view=h,h.on("interact",function(e){e.tmpl||(c._chgd&&(c.innerHTML=c._tmpl),a.mountZoneVframes(0,0,1)),h.on("rendered",function(){a.mountZoneVframes(0,0,1)}),h.on("prerender",function(){a.unmountZoneVframes(0,1)||a.cAlter()}),h.on("inited",function(){a.viewInited=1,a.fire("viewInited",{view:h}),i&&f(i,h,a)})},0),n=n||{},h.load(v(n,s.params,n))}})}},unmountView:function(){var e=this;if(e.view){a||(a={}),e.unmountZoneVframes(0,1),e.cAlter(a),e.view.destroy();var t=b(e.id);t&&t._bak&&(t.innerHTML=t._tmpl),delete e.view,delete e.viewInited,a=0,e.fire("viewUnmounted")}e.sign--},mountVframe:function(e,t,n){var r=this,i=r.owner,a=i.get(e);return a||(a=new V(e),a.pId=r.id,p(r.cM,e)||r.cC++,r.cM[e]=1,i.add(a)),a.mountView(t,n),a},mountZoneVframes:function(e,t){var n=this,r=e||n.id;n.unmountZoneVframes(r,1);var i=y(r,d),a=i.length,o={};if(a)for(var c,s,f,u,v=0;a>v;v++)if(c=i[v],s=S(c),!p(o,s)&&(f=c.getAttribute(m),u=!c.getAttribute(g),u=u==l,u||f)){n.mountVframe(s,f,t);for(var h,w=y(c,d),x=0,b=w.length;b>x;x++)h=w[x],f=h.getAttribute(m),u=!h.getAttribute(g),u=u==l,u||f||(o[S(h)]=1)}n.cCreated()},unmountVframe:function(e,t){var n=this;e=e||n.id;var r=n.owner,i=r.get(e);if(i){var a=i.fcc;i.unmountView(),r.remove(e,a),n.fire("destroy");var o=r.get(i.pId);o&&p(o.cM,e)&&(delete o.cM[e],o.cC--,t||o.cCreated())}},unmountZoneVframes:function(e,t){var n,r,i,a=this;if(e){var o=a.cM,c={};for(i in o)E(i,e)&&(c[i]=1);n=c}else n=a.cM;for(i in n)r=1,a.unmountVframe(i,1);return t||a.cCreated(),r},invokeView:function(e){var t,n=this,r=n.view,i=u.call(arguments,1);return n.viewInited&&r[e]&&(t=f(r[e],i,r)),t},cCreated:function(e){var t=this;if(t.cC==t.rC){var n=t.view;n&&!t.fcc&&(t.fcc=1,delete t.fca,n.fire(x,e),t.fire(x,e));var r=t.owner;r.vfCreated();var i=t.id,a=r.get(t.pId);a&&!p(a.rM,i)&&(a.rM[i]=a.cM[i],a.rC++,a.cCreated(e))}},cAlter:function(e){var t=this;if(e||(e={}),delete t.fcc,!t.fca){var n=t.view,r=t.id;n&&(t.fca=1,n.fire(w,e),t.fire(w,e));var i=t.owner,a=i.get(t.pId);a&&p(a.rM,r)&&(a.rC--,delete a.rM[r],a.cAlter(e))}},locChged:function(e,n){var r=this,i=r.view;if(i&&i.sign&&i.rendered){var a=i.olChanged(n),o={location:e,changed:n,prevent:function(){this.cs=[]},toChildren:function(e){e=e||[],t.isString(e)&&(e=e.split(",")),this.cs=e}};a&&f(i.locationChange,o,i);for(var c,s=o.cs||t.keys(r.cM),u=0,v=s.length,d=r.owner;v>u;u++)c=d.get(s[u]),c&&c.locChged(e,n)}}}),V},{requires:["magix/magix","magix/event","magix/view"]}),KISSY.add("magix/view",function(e,t,n,r,i){var a=t.safeExec,o=t.has,c=",",s=[],f=t.mix,u={render:1,renderUI:1},v="~",d=function(e){return function(){var t,n=this,r=n.notifyUpdate();return r&&(t=e.apply(n,arguments)),t}},h=t.cache(40),l=/\smx-(?!view|defer|owner)[a-z]+\s*=\s*['"]/g,p=String.fromCharCode(26),m=function(){this.render()},g={prevent:function(e){e=e||this.domEvent,e.preventDefault?e.preventDefault():e.returnValue=!1},stop:function(e){e=e||this.domEvent,e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},halt:function(e){this.prevent(e),this.stop(e)}},w=/(\w+)(?:<(\w+)>)?(?:{([\s\S]*)})?/,x=/(\w+):([^,]+)/g,b=/([$\w]+)<([\w,]+)>/,y=function(e){var t=this;f(t,e),t.sign=1};f(y,{prepare:function(e){var t=this;if(e.extend||(e.extend=t.extend),!e[v]){e[v]=1;var n,r,i,a,o,s=e.prototype,f={};for(var h in s)if(n=s[h],r=h.match(b))for(i=r[1],a=r[2],s[i]=n,a=a.split(c),o=a.length-1;o>-1;o--)r=a[o],f[r]=1,s[i+p+r]=n;else u[n]&&(s[h]=d(n));s.$evts=f}}}),f(f(y.prototype,n),{render:t.noop,locationChange:t.noop,init:t.noop,hasTmpl:!0,enableEvent:!0,load:function(){var e=this,t=e.hasTmpl,n=arguments,r=e.sign,i=o(e,"template"),c=function(o){if(r==e.sign){i||(e.template=e.wrapMxEvent(o)),e.delegateEvents(),e.fire("interact",{tmpl:t},1),a(e.init,n,e),e.fire("inited",0,1),a(e.render,s,e);var c=!t&&!e.rendered;c&&(e.rendered=!0,e.fire("primed",null,1))}};t&&!i?e.fetchTmpl(c):c()},beginUpdate:function(){var e=this;e.sign&&e.rendered&&(e.fire("refresh",0,1),e.fire("prerender"))},endUpdate:function(){var e=this;e.sign&&(e.rendered||e.fire("primed",0,1),e.rendered=!0,e.fire("rendered"))},notifyUpdate:function(){var e=this;return e.sign&&(e.sign++,e.fire("rendercall")),e.sign},wrapMxEvent:function(e){return(e+"").replace(l,"$&"+this.id+p)},setViewHTML:function(e){var t,n=this;n.beginUpdate(),n.sign&&(t=n.$(n.id),t&&(t.innerHTML=e)),n.endUpdate()},observeLocation:function(e){var n,r=this;r.$ol||(r.$ol={keys:[]}),n=r.$ol;var i=n.keys;t.isObject(e)&&(n.pn=e.pathname,e=e.keys),e&&(n.keys=i.concat((e+"").split(c))),r.locationChange==t.noop&&(r.locationChange=m)},olChanged:function(e){var t=this,n=t.$ol;if(n){var r=0;if(n.pn&&(r=e.isPathname()),!r){var i=n.keys;r=e.isParam(i)}return r}return 1},destroy:function(){var e=this;e.fire("refresh",0,1),e.fire("destroy",0,1,1),e.delegateEvents(1),e.sign=0},processEvent:function(e){var t=this;if(t.enableEvent&&t.sign){var n=e.info,r=e.se,i=h.get(n);i||(i=n.match(w),i={n:i[1],f:i[2],i:i[3],p:{}},i.i&&i.i.replace(x,function(e,t,n){i.p[t]=n}),h.set(n,i));var o=i.n+p+r.type,c=t[o];if(c){var s=g[i.f];s&&s.call(g,r),a(c,f({currentId:e.cId,targetId:e.tId,domEvent:r,params:i.p},g),t)}}},delegateEvents:function(e){var t=this,n=t.$evts,i=e?r.un:r.on,a=t.vom;for(var o in n)i.call(r,o,a)}});var C=t.config("appHome"),S=t.config("debug")?"?t="+e.now():"",E={},I={};return y.prototype.fetchTmpl=function(e){var t=this,n="template"in t;if(n)e(tmpl);else if(o(E,t.path))e(E[t.path]);else{var r=C+t.path+".html",c=I[r],s=function(n){e(E[t.path]=n)};c?c.push(s):(c=I[r]=[s],i({url:r+S,success:function(e){a(c,e),delete I[r]},error:function(e,t){a(c,t),delete I[r]}}))}},y.extend=function(t,n,r){var i=this,o=function(){o.superclass.constructor.apply(this,arguments),n&&a(n,arguments,this)};return o.extend=i.extend,e.extend(o,i,t,r)},y},{requires:["magix/magix","magix/event","magix/body","ajax"]}),KISSY.add("magix/vom",function(e,t,n,r){var i=n.has,a=n.mix,o=0,c=0,s=0,f=0,u={},v={},d=n.mix({all:function(){return u},add:function(e){i(u,e.id)||(o++,u[e.id]=e,e.owner=d,d.fire("add",{vframe:e}))},get:function(e){return u[e]},remove:function(e,t){var n=u[e];n&&(o--,t&&c--,delete u[e],d.fire("remove",{vframe:n}))},vfCreated:function(){if(!f){c++;var e=c/o;e>s&&d.fire("progress",{percent:s=e},f=1==e)}},root:function(){return t.root(d,v)},locChged:function(e){var t,n=e.loc;if(n?t=1:n=e.location,a(v,n),!t){var r=d.root(),i=e.changed;i.isView()?r.mountView(n.view):r.locChged(n,i)}}},r);return d},{requires:["magix/vframe","magix/magix","magix/event"]});