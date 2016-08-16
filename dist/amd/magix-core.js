/*Magix3.1.2 Licensed MIT*/define("magix",["$"],function(n){var t,e=function(n,t){n?(u(n)||(n=[n]),require(n,t)):t&&t()},r=function(){},i=function(n,t,e,i,o){return r[y]=t[y],o=new r,T(o,e),T(n,i),o.constructor=n,n[y]=o,n},o=n.isPlainObject,u=n.isArray,f=function(t,e){n(t).html(e)},c=0,a="",s=[],$=s.slice,d=function(){},l=",",p=null,v=window,h=document,m="#",g="",w="object",y="prototype",b=/[#?].*$/,x=/([^=&?\/#]+)=?([^&#?]*)/g,V=/(?!^)=|&/,I=function(n){return(n||"mx_")+c++},S=I(),U={rootId:I(),defaultView:S,error:function(n){throw n}},k=U.hasOwnProperty,A=function(n){return typeof n==w?n:h.getElementById(n)},j=function(n,t,e){if(n=A(n),t=A(t),n&&t&&(e=n==t,!e))try{e=t.contains?t.contains(n):16&t.compareDocumentPosition(n)}catch(r){}return e},T=function(n,t,e){for(e in t)n[e]=t[e];return n},Z=function(n,t,e,r,i,o){for(u(n)||(n=[n]),u(t)||(t=[t]),r=0;o=n[r];r++)try{i=o&&o.apply(e,t)}catch(f){U.error(f)}return i},M=function(n,t){return n&&k.call(n,t)},O=function(n,t){return t.f-n.f||t.t-n.t},H=function(n,t,e,r){r=this,r.c=[],r.b=0|t||5,r.x=r.b+(n||20),r.r=e};T(H[y],{get:function(n){var t=this,e=t.c,r=e[g+n];return r&&(r.f++,r.t=c++,r=r.v),r},set:function(n,t){var e=this,r=e.c,i=g+n,o=r[i],u=e.b;if(!o){if(r.length>=e.x)for(r.sort(O);u--;)o=r.pop(),o.f>0&&e.del(o.o);o={o:n},r.push(o),r[i]=o}o.v=t,o.f=1,o.t=c++},del:function(n){n=g+n;var t=this.c,e=t[n],r=this.r;e&&(e.f=-1,e.v=a,delete t[n],r&&Z(r,e.o,e))},has:function(n){return M(this.c,g+n)}});var L,P=new H,q=function(n,t,e){try{e=decodeURIComponent(e)}catch(r){}L[t]=e},C=function(n){var t,e=P.get(n);return e||(L={},t=n.replace(b,a),n==t&&V.test(t)&&(t=a),n.replace(t,a).replace(x,q),P.set(n,e={a:t,b:L})),{path:e.a,params:T({},e.b)}},E=function(n,t,e){var r,i,o,u=[];for(i in t)r=t[i]+a,(!e||r||M(e,i))&&(r=encodeURIComponent(r),u.push(o=i+"="+r));return o&&(n+=(n&&(~n.indexOf("?")?"&":"?"))+u.join("&")),n},N=function(n,t){var e,r,i,o={};if(n&&(i=n.length))for(e=0;i>e;e++)r=n[e],o[t&&r?r[t]:r]=t?r:(0|o[r])+1;return o},D={config:function(n,t){return t=U,n&&(t=o(n)?T(t,n):t[n]),t},boot:function(n){T(U,n),e(U.exts,function(){G().mountView(U.defaultView)})},toMap:N,toTry:Z,toUrl:E,parseUrl:C,mix:T,has:M,inside:j,node:A,guid:I,Cache:H},F="on",J={fire:function(n,t,e,r){var i,o,u,f,c=g+n,a=this,s=a[c];if(t||(t={}),t.type||(t.type=n),s)for(i=s.length,o=i-1;i--;)u=r?i:o-i,f=s[u],f.d?(s.splice(u,1),o--):Z(f.f,t,a);s=a[F+n],s&&Z(s,t,a),e&&a.off(n)},on:function(n,t){var e=this,r=g+n,i=e[r]||(e[r]=[]);i.push({f:t})},off:function(n,t){var e,r,i=g+n,o=this,u=o[i];if(t){if(u)for(e=u.length;e--;)if(r=u[e],r.f==t&&!r.d){r.d=1;break}}else delete o[i],delete o[F+n]}};D.Event=J;var R,B,K=/\{(.+)\}/,_=function(n,t,e){n.$d||n.$h||n.$cc!=n.$rc||(n.$cr||(n.$cr=1,n.$ca=0,n.fire("created")),t=n.id,e=Q[n.pId],e&&!M(e.$r,t)&&(e.$r[t]=1,e.$rc++,_(e)))},z=function(n,t,e,r){t||(t={}),!n.$ca&&n.$cr&&(n.$cr=0,n.$ca=1,n.fire("alter",t),e=n.id,r=Q[n.pId],r&&M(r.$r,e)&&(r.$rc--,delete r.$r[e],z(r,t)))},G=function(n,e){return R||(t=h.body,n=U.rootId,e=A(n),e||(t.id=n),R=new Y(n)),R},Q={},W=function(n,t){M(Q,n)||(Q[n]=t,Y.fire("add",{vframe:t}))},X=function(n,t,e){e=Q[n],e&&(delete Q[n],Y.fire("remove",{vframe:e,fcc:t}))},Y=function(n,t,e){e=this,e.id=n,e.$c={},e.$cc=0,e.$rc=0,e.$s=1,e.$r={},e.pId=t,W(n,e)};T(Y,T({root:G,all:function(){return Q},get:function(n){return Q[n]}},J)),T(T(Y[y],J),{mountView:function(n,t){var r,i,o,u=this,f=A(u.id);!u.$a&&f&&(u.$a=1,u.$t=f.innerHTML),u.unmountView(),u.$d=0,f&&n&&(u.path=n,r=C(n),i=++u.$s,e(r.path,function(n){if(i==u.$s){Un(n);var e,f,c=r.params,a=u.parent();if(a=a&&a.$v,a=a&&a.$updater)for(e in c)f=c[e],f=f.match(K),f&&(c[e]=a.get(f[1]));var s=T(c,t);o=new n({owner:u,id:u.id},s),u.$v=o,In(o),o.init(s),o.render(),o.tmpl||o.$p||o.endUpdate()}}))},unmountView:function(){var n,t,e=this,r=e.$v;r&&(B||(t=1,B={id:e.id}),e.$d=1,e.unmountZone(0,1),z(e,B),e.$v=0,kn(r),n=A(e.id),n&&e.$a&&f(n,e.$t),t&&(B=0)),e.$s++},mountVframe:function(n,t,e){var r,i=this;return z(i),r=Q[n],r||(M(i.$c,n)||i.$cc++,i.$c[n]=n,r=new Y(n,i.id)),r.mountView(t,e),r},mountZone:function(t,e){var r,i,o,u=this;t=t||u.id;var f=n(m+t+" [mx-view]");for(u.$h=1,u.unmountZone(t,1),r=f.length-1;r>=0;r--)i=f[r],o=i.id||(i.id=I()),u.mountVframe(o,i.getAttribute("mx-view"),e);u.$h=0,_(u)},unmountVframe:function(n,t){var e,r,i,o=this;n=n?o.$c[n]:o.id,e=Q[n],e&&(r=e.$cr,i=e.pId,e.unmountView(),X(n,r),e.id=e.pId=a,e=Q[i],e&&M(e.$c,n)&&(delete e.$c[n],e.$cc--,t||_(e)))},unmountZone:function(n,t){var e,r=this,i=r.$c;for(e in i)(!n||e!=n&&j(e,n))&&r.unmountVframe(e,1);t||_(r)}}),D.Vframe=Y;var nn=function(n,t){t=n.data,Z(t.f,n,t.v)},tn=function(t,e,r,i){i?n(t).off(e,selector,r):n(t).on(e,selector,scope,r)},en="parentNode",rn=new H(30,10),on=/([^\(]+)\(([\s\S]*)?\)/,un={},fn=function(n){for(var e,r,i,o,u,f,c,a,$,d,l=n.target,p=n.type,v="mx-"+p,h=[];l!=t&&1==l.nodeType;){if(e=l.getAttribute(v)){if(h=[],u=l.$f,!u)for(f=l;f=f[en];)if(M(Q,c=f.id)){l.$f=u=c;break}u?(i=Q[u],o=i&&i.$v,o&&o.$s>0&&(a=rn.get(e),a||(a=e.match(on)||s,a={n:a[1],i:a[2]},a.p=a.i&&Z(Function("return "+a.i))||{},rn.set(e,a)),$=a.n+g+p,d=o[$],d&&(n.current=l,n.currentTarget=l,n.params=a.p,Z(d,n,o)))):U.error(Error("bad:"+e))}if((r=l.$)&&r[p]||n.mxStop||n.isPropagationStopped())break;h.push(l),l=l[en]||t}for(;l=h.pop();)r=l.$||(l.$={}),r[p]=1},cn=function(n,e){var r=0|un[n],i=r>0?1:0;r+=e?-i:i,r||(tn(t,n,fn,e),e||(r=1)),un[n]=r},an={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},sn=/\\|'|\r|\n|\u2028|\u2029/g,$n=function(n){return"\\"+an[n]},dn=/<%=([\s\S]+?)%>|<%!([\s\S]+?)%>|<%([\s\S]+?)%>|$/g,ln=function(n){var t=0,e="$p+='";n.replace(dn,function(r,i,o,u,f){return e+=n.slice(t,f).replace(sn,$n),t=f+r.length,i?e+="'+\n(($t=("+i+"))==null?'':$e($t))+\n'":o?e+="'+\n(($t=("+o+"))==null?'':$t)+\n'":u&&(e+="';\n"+u+"\n$p+='"),r}),e+="';\n",e="with($mx){\n"+e+"}\n",e="var $t,$p='',$em={'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;','\\'':'&#x27;','`':'&#x60;'},$er=/[&<>\"'`]/g,$ef=function(m){return $em[m]},$e=function(v){v=v==null?'':''+v;return v.replace($er,$ef)};\n"+e+"return $p;\n";var r;try{r=Function("$mx",e)}catch(i){throw i.source=e,i}return r},pn=new H,vn=function(n,t){var e=pn.get(n);return e||(e=ln(n),pn.set(n,e)),e(t)},hn=/\u001f/g,mn=/@(\d+)\-\u001f/g,gn=JSON.stringify,wn=function(n,t,e,r){var i=n.$v,o=i.tmpl,u=i.tmplData,f=i.id,c=function(n,t){return vn(n,t).replace(hn,f)};if(t||!n.$rd)if(n.$rd&&e&&u)for(var a,s,$,d,l,p,v,h,g={},w=function(n){var t=n.id||(n.id=I("n"));if(!g[t]){if(g[t]=1,d)for(var e=s.attrs.length-1;e>=0;e--){var o=s.attrs[e],u=c(o.v,r);o.p?n[o.n]=u:!u&&o.a?n.removeAttribute(o.n):n.setAttribute(o.n,u)}var f,a,l=s.view;l&&(a=Q[t],f=c(l,r),a&&a[f?"unmountView":"unmountVframe"]()),s.tmpl&&$&&i.setHTML(t,c(s.tmpl,r)),l&&f&&i.owner.mountVframe(t,f)}},y=u.length-1;y>=0;y--){if($=0,d=0,s=u[y],l=1,v=s.mask,a=s.pKeys)for(p=a.length;--p>=0;)if(M(e,a[p])){l=0;break}if(l){for(a=s.keys,p=a.length,l=0;--p>=0;)if(M(e,a[p])){if(l=1,!v||$&&d){$=s.tmpl,d=s.attrs;break}h=v.charAt(p),$=$||1&h,d=d||2&h}if(l){l=m+f+" "+s.selector.replace(hn,f);var b=document.querySelectorAll(l);for(p=0;p<b.length;)w(b[p++])}}}else{var x,V,S=function(n,t){return x[t].tmpl};if(u){if(!u.$)for(u.$=x={},V=u.length;V>0;){var U=u[--V];U.guid&&(x[U.guid]=U,U.tmpl=U.tmpl.replace(mn,S),delete U.guid)}x=u.$}n.$rd=1;var k=o.replace(mn,S);i.setHTML(f,c(k,r))}},yn=function(n){var t=this;t.$v=n,t.$data={},t.$json={}},bn=yn.prototype;T(bn,J),T(bn,{get:function(n){var t=this.$data;return n&&(t=t[n]),t},set:function(n){var t=this;return T(t.$data,n),t},digest:function(){var n,t,e,r,i,o=this,u=o.$data,f=o.$json,c={};for(e in u)t=u[e],i=0,r=gn(t),M(f,e)?(i=r!=f[e],f[e]=r):(f[e]=r,i=1),i&&(c[e]=n=1);return wn(o,n,c,u),n&&(o.fire("changed",{keys:c}),delete o.$lss),o},snapshot:function(){var n=this;return n.$ss=gn(n.$json),n},altered:function(){var n=this;return n.$ss?(n.$lss||(n.$lss=JSON.stringify(n.$json)),n.$ss!=n.$lss):!0}});var xn=/^(\$?)([^<]+)<([^>]+)>$/,Vn=function(n,t,e){t=n.render,n.render=function(){e=this,e.$s>0&&(e.$s++,e.fire("rendercall"),Z(t,$.call(arguments),e))}},In=function(n,t){var e,r,i=n.$eo;for(e in i)cn(e,t);for(i=n.$el,e=i.length;e--;)r=i[e],tn(r.e||m+n.id,r.n,nn,t,r.s,{v:n,f:r.f})},Sn={win:v,doc:h},Un=function(n){if(!n[g]){n[g]=1;var t,e,r,i,o,u,f,c,a=n[y],s={},$=[];for(f in a)if(t=a[f],e=f.match(xn))for(u=e[1],r=e[2],i=e[3].split(l);c=i.pop();)u?(o=Sn[r],$.push({f:t,s:o?p:r,n:c,e:o})):(s[c]=1,a[r+g+c]=t);Vn(a),a.$eo=s,a.$el=$}},kn=function(n){n.$s>0&&(n.$s=0,n.fire("destroy",0,1,1),In(n,1)),n.$s--},An=function(n,t){t=this,T(t,n),t.$s=1,t.$updater=new yn(t)},jn=An[y];return T(An,{extend:function(n,t){var e=this;n=n||{};var r=n.ctor,o=function(n,t){e.call(this,n,t),r&&r.call(this,t)};return o.extend=e.extend,i(o,e,n,t)}}),T(T(jn,J),{render:d,init:d,beginUpdate:function(n,t){t=this,t.$s>0&&t.$p&&t.owner.unmountZone(n,1)},endUpdate:function(n,t){t=this,t.$s>0&&(t.$p=1,t.owner.mountZone(n))},wrapAsync:function(n,t){var e=this,r=e.$s;return function(){r>0&&r==e.$s&&n&&n.apply(t||e,arguments)}},setHTML:function(n,t){var e,r=this;r.beginUpdate(n),r.$s>0&&(e=A(n),e&&f(e,t)),r.endUpdate(n)}}),D.View=An,define(S,function(){return An.extend()}),D});