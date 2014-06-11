/*! jQuery v1.7.1 jquery.com | jquery.org/license */

(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
/*
 * jQuery Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * http://github.com/jeresig/jquery.hotkeys
 *
 * Based upon the plugin by Tzury Bar Yochay:
 * http://github.com/tzuryby/hotkeys
 *
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
*/


(function(b){b.hotkeys={version:"0.8",specialKeys:{8:"backspace",9:"tab",13:"return",16:"shift",17:"ctrl",18:"alt",19:"pause",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"insert",46:"del",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",106:"*",107:"+",109:"-",110:".",111:"/",112:"f1",113:"f2",114:"f3",115:"f4",116:"f5",117:"f6",118:"f7",119:"f8",120:"f9",121:"f10",122:"f11",123:"f12",144:"numlock",145:"scroll",191:"/",224:"meta",219:"[",221:"]"},shiftNums:{"`":"~","1":"!","2":"@","3":"#","4":"$","5":"%","6":"^","7":"&","8":"*","9":"(","0":")","-":"_","=":"+",";":": ","'":'"',",":"<",".":">","/":"?","\\":"|"}};function a(d){if(typeof d.data!=="string"){return}var c=d.handler,e=d.data.toLowerCase().split(" ");d.handler=function(n){if(this!==n.target&&(/textarea|select/i.test(n.target.nodeName)||n.target.type==="text")){return}var h=n.type!=="keypress"&&b.hotkeys.specialKeys[n.which],o=String.fromCharCode(n.which).toLowerCase(),k,m="",g={};if(n.altKey&&h!=="alt"){m+="alt+"}if(n.ctrlKey&&h!=="ctrl"){m+="ctrl+"}if(n.metaKey&&!n.ctrlKey&&h!=="meta"){m+="meta+"}if(n.shiftKey&&h!=="shift"){m+="shift+"}if(h){g[m+h]=true}else{g[m+o]=true;g[m+b.hotkeys.shiftNums[o]]=true;if(m==="shift+"){g[b.hotkeys.shiftNums[o]]=true}}for(var j=0,f=e.length;j<f;j++){if(g[e[j]]){return c.apply(this,arguments)}}}}b.each(["keydown","keyup","keypress"],function(){b.event.special[this]={add:a}})})(jQuery);
/*
 * jQuery BBQ: Back Button & Query Library - v1.2.1 - 2/17/2010
 * http://benalman.com/projects/jquery-bbq-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

(function($,p){var i,m=Array.prototype.slice,r=decodeURIComponent,a=$.param,c,l,v,b=$.bbq=$.bbq||{},q,u,j,e=$.event.special,d="hashchange",A="querystring",D="fragment",y="elemUrlAttr",g="location",k="href",t="src",x=/^.*\?|#.*$/g,w=/^.*\#/,h,C={};function E(F){return typeof F==="string"}function B(G){var F=m.call(arguments,1);return function(){return G.apply(this,F.concat(m.call(arguments)))}}function n(F){return F.replace(/^[^#]*#?(.*)$/,"$1")}function o(F){return F.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/,"$1")}function f(H,M,F,I,G){var O,L,K,N,J;if(I!==i){K=F.match(H?/^([^#]*)\#?(.*)$/:/^([^#?]*)\??([^#]*)(#?.*)/);J=K[3]||"";if(G===2&&E(I)){L=I.replace(H?w:x,"")}else{N=l(K[2]);I=E(I)?l[H?D:A](I):I;L=G===2?I:G===1?$.extend({},I,N):$.extend({},N,I);L=a(L);if(H){L=L.replace(h,r)}}O=K[1]+(H?"#":L||!K[1]?"?":"")+L+J}else{O=M(F!==i?F:p[g][k])}return O}a[A]=B(f,0,o);a[D]=c=B(f,1,n);c.noEscape=function(G){G=G||"";var F=$.map(G.split(""),encodeURIComponent);h=new RegExp(F.join("|"),"g")};c.noEscape(",/");$.deparam=l=function(I,F){var H={},G={"true":!0,"false":!1,"null":null};$.each(I.replace(/\+/g," ").split("&"),function(L,Q){var K=Q.split("="),P=r(K[0]),J,O=H,M=0,R=P.split("]["),N=R.length-1;if(/\[/.test(R[0])&&/\]$/.test(R[N])){R[N]=R[N].replace(/\]$/,"");R=R.shift().split("[").concat(R);N=R.length-1}else{N=0}if(K.length===2){J=r(K[1]);if(F){J=J&&!isNaN(J)?+J:J==="undefined"?i:G[J]!==i?G[J]:J}if(N){for(;M<=N;M++){P=R[M]===""?O.length:R[M];O=O[P]=M<N?O[P]||(R[M+1]&&isNaN(R[M+1])?{}:[]):J}}else{if($.isArray(H[P])){H[P].push(J)}else{if(H[P]!==i){H[P]=[H[P],J]}else{H[P]=J}}}}else{if(P){H[P]=F?i:""}}});return H};function z(H,F,G){if(F===i||typeof F==="boolean"){G=F;F=a[H?D:A]()}else{F=E(F)?F.replace(H?w:x,""):F}return l(F,G)}l[A]=B(z,0);l[D]=v=B(z,1);$[y]||($[y]=function(F){return $.extend(C,F)})({a:k,base:k,iframe:t,img:t,input:t,form:"action",link:k,script:t});j=$[y];function s(I,G,H,F){if(!E(H)&&typeof H!=="object"){F=H;H=G;G=i}return this.each(function(){var L=$(this),J=G||j()[(this.nodeName||"").toLowerCase()]||"",K=J&&L.attr(J)||"";L.attr(J,a[I](K,H,F))})}$.fn[A]=B(s,A);$.fn[D]=B(s,D);b.pushState=q=function(I,F){if(E(I)&&/^#/.test(I)&&F===i){F=2}var H=I!==i,G=c(p[g][k],H?I:{},H?F:2);p[g][k]=G+(/#/.test(G)?"":"#")};b.getState=u=function(F,G){return F===i||typeof F==="boolean"?v(F):v(G)[F]};b.removeState=function(F){var G={};if(F!==i){G=u();$.each($.isArray(F)?F:arguments,function(I,H){delete G[H]})}q(G,2)};e[d]=$.extend(e[d],{add:function(F){var H;function G(J){var I=J[D]=c();J.getState=function(K,L){return K===i||typeof K==="boolean"?l(I,K):l(I,L)[K]};H.apply(this,arguments)}if($.isFunction(F)){H=F;return G}else{H=F.handler;F.handler=G}}})})(jQuery,this);
/*
 * jQuery hashchange event - v1.2 - 2/11/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,i,b){var j,k=$.event.special,c="location",d="hashchange",l="href",f=$.browser,g=document.documentMode,h=f.msie&&(g===b||g<8),e="on"+d in i&&!h;function a(m){m=m||i[c][l];return m.replace(/^[^#]*#?(.*)$/,"$1")}$[d+"Delay"]=100;k[d]=$.extend(k[d],{setup:function(){if(e){return false}$(j.start)},teardown:function(){if(e){return false}$(j.stop)}});j=(function(){var m={},r,n,o,q;function p(){o=q=function(s){return s};if(h){n=$('<iframe src="javascript:0"/>').hide().insertAfter("body")[0].contentWindow;q=function(){return a(n.document[c][l])};o=function(u,s){if(u!==s){var t=n.document;t.open().close();t[c].hash="#"+u}};o(a())}}m.start=function(){if(r){return}var t=a();o||p();(function s(){var v=a(),u=q(t);if(v!==t){o(t=v,u);$(i).trigger(d)}else{if(u!==t){i[c][l]=i[c][l].replace(/#.*/,"")+"#"+u}}r=setTimeout(s,$[d+"Delay"])})()};m.stop=function(){if(!n){r&&clearTimeout(r);r=0}};return m})()})(jQuery,this);
/*
 * SVG Icon Loader 2.0
 *
 * jQuery Plugin for loading SVG icons from a single file
 *
 * Copyright (c) 2009 Alexis Deveria
 * http://a.deveria.com
 *
 * MIT License

How to use:

1. Create the SVG master file that includes all icons:

The master SVG icon-containing file is an SVG file that contains 
<g> elements. Each <g> element should contain the markup of an SVG
icon. The <g> element has an ID that should 
correspond with the ID of the HTML element used on the page that should contain 
or optionally be replaced by the icon. Additionally, one empty element should be
added at the end with id "svg_eof".

2. Optionally create fallback raster images for each SVG icon.

3. Include the jQuery and the SVG Icon Loader scripts on your page.

4. Run $.svgIcons() when the document is ready:

$.svgIcons( file [string], options [object literal]);

File is the location of a local SVG or SVGz file.

All options are optional and can include:

- 'w (number)': The icon widths

- 'h (number)': The icon heights

- 'fallback (object literal)': List of raster images with each
	key being the SVG icon ID to replace, and the value the image file name.
	
- 'fallback_path (string)': The path to use for all images
	listed under "fallback"
	
- 'replace (boolean)': If set to true, HTML elements will be replaced by,
	rather than include the SVG icon.

- 'placement (object literal)': List with selectors for keys and SVG icon ids
	as values. This provides a custom method of adding icons.

- 'resize (object literal)': List with selectors for keys and numbers
	as values. This allows an easy way to resize specific icons.
	
- 'callback (function)': A function to call when all icons have been loaded. 
	Includes an object literal as its argument with as keys all icon IDs and the 
	icon as a jQuery object as its value.

- 'id_match (boolean)': Automatically attempt to match SVG icon ids with
	corresponding HTML id (default: true)
	
- 'no_img (boolean)': Prevent attempting to convert the icon into an <img>
	element (may be faster, help for browser consistency)

- 'svgz (boolean)': Indicate that the file is an SVGZ file, and thus not to
	parse as XML. SVGZ files add compression benefits, but getting data from
	them fails in Firefox 2 and older.

5. To access an icon at a later point without using the callback, use this:
	$.getSvgIcon(id (string));

This will return the icon (as jQuery object) with a given ID.
	
6. To resize icons at a later point without using the callback, use this:
	$.resizeSvgIcons(resizeOptions) (use the same way as the "resize" parameter)


Example usage #1:

$(function() {
	$.svgIcons('my_icon_set.svg'); // The SVG file that contains all icons
	// No options have been set, so all icons will automatically be inserted 
	// into HTML elements that match the same IDs. 
});

Example usage #2:

$(function() {
	$.svgIcons('my_icon_set.svg', { // The SVG file that contains all icons
		callback: function(icons) { // Custom callback function that sets click
									// events for each icon
			$.each(icons, function(id, icon) {
				icon.click(function() {
					alert('You clicked on the icon with id ' + id);
				});
			});
		}
	}); //The SVG file that contains all icons
});

Example usage #3:

$(function() {
	$.svgIcons('my_icon_set.svgz', { // The SVGZ file that contains all icons
		w: 32,	// All icons will be 32px wide
		h: 32,  // All icons will be 32px high
		fallback_path: 'icons/',  // All fallback files can be found here
		fallback: {
			'#open_icon': 'open.png',  // The "open.png" will be appended to the
									   // HTML element with ID "open_icon"
			'#close_icon': 'close.png',
			'#save_icon': 'save.png'
		},
		placement: {'.open_icon','open'}, // The "open" icon will be added
										  // to all elements with class "open_icon"
		resize: function() {
			'#save_icon .svg_icon': 64  // The "save" icon will be resized to 64 x 64px
		},
		
		callback: function(icons) { // Sets background color for "close" icon 
			icons['close'].css('background','red');
		},
		
		svgz: true // Indicates that an SVGZ file is being used
		
	})
});

*/



(function($) {
	var svg_icons = {}, fixIDs;

	$.svgIcons = function(file, opts) {
		var svgns = "http://www.w3.org/2000/svg",
			xlinkns = "http://www.w3.org/1999/xlink",
			icon_w = opts.w?opts.w : 24,
			icon_h = opts.h?opts.h : 24,
			elems, svgdoc, testImg,
			icons_made = false, data_loaded = false, load_attempts = 0,
			ua = navigator.userAgent, isOpera = !!window.opera, isSafari = (ua.indexOf('Safari/') > -1 && ua.indexOf('Chrome/')==-1),
			data_pre = 'data:image/svg+xml;charset=utf-8;base64,';
			
			if(opts.svgz) {
				var data_el = $('<object data="' + file + '" type=image/svg+xml>').appendTo('body').hide();
				try {
					svgdoc = data_el[0].contentDocument;
					data_el.load(getIcons);
					getIcons(0, true); // Opera will not run "load" event if file is already cached
				} catch(err1) {
					useFallback();
				}
			} else {
				var parser = new DOMParser();
				$.ajax({
					url: file,
					dataType: 'string',
					success: function(data) {
						if(!data) {
							$(useFallback);
							return;
						}
						svgdoc = parser.parseFromString(data, "text/xml");
						$(function() {
							getIcons('ajax');
						});
					},
					error: function(err) {
						// TODO: Fix Opera widget icon bug
						if(window.opera) {
							$(function() {
								useFallback();
							});
						} else {
							if(err.responseText) {
								svgdoc = parser.parseFromString(err.responseText, "text/xml");

								if(!svgdoc.childNodes.length) {
									$(useFallback);									
								}
								$(function() {
									getIcons('ajax');
								});							
							} else {
								$(useFallback);
							}
						}
					}
				});
			}
			
		function getIcons(evt, no_wait) {
			if(evt !== 'ajax') {
				if(data_loaded) return;
				// Webkit sometimes says svgdoc is undefined, other times
				// it fails to load all nodes. Thus we must make sure the "eof" 
				// element is loaded.
				svgdoc = data_el[0].contentDocument; // Needed again for Webkit
				var isReady = (svgdoc && svgdoc.getElementById('svg_eof'));
				if(!isReady && !(no_wait && isReady)) {
					load_attempts++;
					if(load_attempts < 50) {
						setTimeout(getIcons, 20);
					} else {
						useFallback();
						data_loaded = true;
					}
					return;
				}
				data_loaded = true;
			}
			
			elems = $(svgdoc.firstChild).children(); //.getElementsByTagName('foreignContent');
			
			if(!opts.no_img) {
				var testSrc = data_pre + 'PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNzUiIGhlaWdodD0iMjc1Ij48L3N2Zz4%3D';
				
				testImg = $(new Image()).attr({
					src: testSrc,
					width: 0,
					height: 0
				}).appendTo('body')
				.load(function () {
					// Safari 4 crashes, Opera and Chrome don't
					makeIcons(true);
				}).error(function () {
					makeIcons();
				});
			} else {
				setTimeout(function() {
					if(!icons_made) makeIcons();
				},500);
			}
		}
		
		var setIcon = function(target, icon, id, setID) {
			if(isOpera) icon.css('visibility','hidden');
			if(opts.replace) {
				if(setID) icon.attr('id',id);
				var cl = target.attr('class');
				if(cl) icon.attr('class','svg_icon '+cl);
				target.replaceWith(icon);
			} else {
				
				target.append(icon);
			}
			if(isOpera) {
				setTimeout(function() {
					icon.removeAttr('style');
				},1);
			}
		}
		
		var addIcon = function(icon, id) {
			if(opts.id_match === undefined || opts.id_match !== false) {
				setIcon(holder, icon, id, true);
			}
			svg_icons[id] = icon;
		}
		
		function makeIcons(toImage, fallback) {
			if(icons_made) return;
			if(opts.no_img) toImage = false;
			var holder;
			
			if(toImage) {
				var temp_holder = $(document.createElement('div'));
				temp_holder.hide().appendTo('body');
			} 
			if(fallback) {
				var path = opts.fallback_path?opts.fallback_path:'';
				$.each(fallback, function(id, imgsrc) {
					holder = $('#' + id);
					var icon = $(new Image())
						.attr({
							'class':'svg_icon',
							src: path + imgsrc,
							'width': icon_w,
							'height': icon_h,
							'alt': 'icon'
						});
					
					addIcon(icon, id);
				});
			} else {
				var len = elems.length;
				for(var i = 0; i < len; i++) {
					var elem = elems[i];
					var id = elem.id;
					if(id === 'svg_eof') break;
					holder = $('#' + id);
					var svg = elem.getElementsByTagNameNS(svgns, 'svg')[0];
					var svgroot = document.createElementNS(svgns, "svg");
					svgroot.setAttributeNS(svgns, 'viewBox', [0,0,icon_w,icon_h].join(' '));
					
					// Make flexible by converting width/height to viewBox
					var w = svg.getAttribute('width');
					var h = svg.getAttribute('height');
					svg.removeAttribute('width');
					svg.removeAttribute('height');
					
					var vb = svg.getAttribute('viewBox');
					if(!vb) {
						svg.setAttribute('viewBox', [0,0,w,h].join(' '));
					}
					
					// Not using jQuery to be a bit faster
					svgroot.setAttribute('xmlns', svgns);
					svgroot.setAttribute('width', icon_w);
					svgroot.setAttribute('height', icon_h);
					svgroot.setAttribute("xmlns:xlink", xlinkns);
					svgroot.setAttribute("class", 'svg_icon');

					// Without cloning, Firefox will make another GET request.
					// With cloning, causes issue in Opera/Win/Non-EN
					if(!isOpera) svg = svg.cloneNode(true);
					
					svgroot.appendChild(svg);
			
					if(toImage) {
						// Without cloning, Safari will crash
						// With cloning, causes issue in Opera/Win/Non-EN
						var svgcontent = isOpera?svgroot:svgroot.cloneNode(true);
						temp_holder.empty().append(svgroot);
						var str = data_pre + encode64(temp_holder.html());
						var icon = $(new Image())
							.attr({'class':'svg_icon', src:str});
					} else {
						var icon = fixIDs($(svgroot), i);
					}
					addIcon(icon, id);
				}

			}
			
			if(opts.placement) {
				$.each(opts.placement, function(sel, id) {
					if(!svg_icons[id]) return;
					$(sel).each(function(i) {
						var copy = svg_icons[id].clone();
						if(i > 0 && !toImage) copy = fixIDs(copy, i, true);
						setIcon($(this), copy, id);
					})
				});
			}
			if(!fallback) {
				if(toImage) temp_holder.remove();
				if(data_el) data_el.remove();
				if(testImg) testImg.remove();
			}
			if(opts.resize) $.resizeSvgIcons(opts.resize);
			icons_made = true;

			if(opts.callback) opts.callback(svg_icons);
		}
		
		fixIDs = function(svg_el, svg_num, force) {
			var defs = svg_el.find('defs');
			if(!defs.length) return svg_el;
			
			if(isOpera) {
				var id_elems = defs.find('*').filter(function() {
					return !!this.id;
				});
			} else {
				var id_elems = defs.find('[id]');
			}
			
			var all_elems = svg_el[0].getElementsByTagName('*'), len = all_elems.length;
			
			id_elems.each(function(i) {
				var id = this.id;
				var no_dupes = ($(svgdoc).find('#' + id).length <= 1);
				if(isOpera) no_dupes = false; // Opera didn't clone svg_el, so not reliable
				// if(!force && no_dupes) return;
				var new_id = 'x' + id + svg_num + i;
				this.id = new_id;
				
				var old_val = 'url(#' + id + ')';
				var new_val = 'url(#' + new_id + ')';
				
				// Selector method, possibly faster but fails in Opera / jQuery 1.4.3
// 				svg_el.find('[fill="url(#' + id + ')"]').each(function() {
// 					this.setAttribute('fill', 'url(#' + new_id + ')');
// 				}).end().find('[stroke="url(#' + id + ')"]').each(function() {
// 					this.setAttribute('stroke', 'url(#' + new_id + ')');
// 				}).end().find('use').each(function() {
// 					if(this.getAttribute('xlink:href') == '#' + id) {
// 						this.setAttributeNS(xlinkns,'href','#' + new_id);
// 					}
// 				}).end().find('[filter="url(#' + id + ')"]').each(function() {
// 					this.setAttribute('filter', 'url(#' + new_id + ')');
// 				});

				for(var i = 0; i < len; i++) {
					var elem = all_elems[i];
					if(elem.getAttribute('fill') === old_val) {
						elem.setAttribute('fill', new_val);
					}
					if(elem.getAttribute('stroke') === old_val) {
						elem.setAttribute('stroke', new_val);
					}
					if(elem.getAttribute('filter') === old_val) {
						elem.setAttribute('filter', new_val);
					}
				}
			});
			return svg_el;
		}
		
		function useFallback() {
			if(file.indexOf('.svgz') != -1) {
				var reg_file = file.replace('.svgz','.svg');
				if(window.console) {
					console.log('.svgz failed, trying with .svg');
				}
				$.svgIcons(reg_file, opts);
			} else if(opts.fallback) {
				makeIcons(false, opts.fallback);
			}
		}
				
		function encode64(input) {
			// base64 strings are 4/3 larger than the original string
			if(window.btoa) return window.btoa(input);
			var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
			var output = new Array( Math.floor( (input.length + 2) / 3 ) * 4 );
			var chr1, chr2, chr3;
			var enc1, enc2, enc3, enc4;
			var i = 0, p = 0;
		
			do {
				chr1 = input.charCodeAt(i++);
				chr2 = input.charCodeAt(i++);
				chr3 = input.charCodeAt(i++);
		
				enc1 = chr1 >> 2;
				enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
				enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
				enc4 = chr3 & 63;
		
				if (isNaN(chr2)) {
					enc3 = enc4 = 64;
				} else if (isNaN(chr3)) {
					enc4 = 64;
				}
		
				output[p++] = _keyStr.charAt(enc1);
				output[p++] = _keyStr.charAt(enc2);
				output[p++] = _keyStr.charAt(enc3);
				output[p++] = _keyStr.charAt(enc4);
			} while (i < input.length);
		
			return output.join('');
		}
	}
	
	$.getSvgIcon = function(id, uniqueClone) { 
		var icon = svg_icons[id];
		if(uniqueClone && icon) {
			icon = fixIDs(icon, 0, true).clone(true);
		}
		return icon; 
	}
	
	$.resizeSvgIcons = function(obj) {
		// FF2 and older don't detect .svg_icon, so we change it detect svg elems instead
		var change_sel = !$('.svg_icon:first').length;
		$.each(obj, function(sel, size) {
			var arr = $.isArray(size);
			var w = arr?size[0]:size,
				h = arr?size[1]:size;
			if(change_sel) {
				sel = sel.replace(/\.svg_icon/g,'svg');
			}
			$(sel).each(function() {
				this.setAttribute('width', w);
				this.setAttribute('height', h);
				if(window.opera && window.widget) {
					this.parentNode.style.width = w + 'px';
					this.parentNode.style.height = h + 'px';
				}
			});
		});
	}
	
})(jQuery);
(function(){function r(i,z,t){i=document.createElementNS(A.svg,i);if(Ba)for(var B in z)i.setAttribute(B,z[B]);else for(B in z){var W=z[B],w=i[B];if(w&&w.constructor==="SVGLength")w.baseVal.value=W;else i.setAttribute(B,W)}t&&t.appendChild(i);return i}var A={svg:"http://www.w3.org/2000/svg",xlink:"http://www.w3.org/1999/xlink"};if(!window.console)window.console=new function(){this.log=function(){};this.dir=function(){}};$.jGraduate={Paint:function(i){i=i||{};this.alpha=isNaN(i.alpha)?100:i.alpha;if(i.copy){this.type=
i.copy.type;this.alpha=i.copy.alpha;this.radialGradient=this.linearGradient=this.solidColor=null;switch(this.type){case "solidColor":this.solidColor=i.copy.solidColor;break;case "linearGradient":this.linearGradient=i.copy.linearGradient.cloneNode(true);break;case "radialGradient":this.radialGradient=i.copy.radialGradient.cloneNode(true)}}else if(i.linearGradient){this.type="linearGradient";this.radialGradient=this.solidColor=null;this.linearGradient=i.linearGradient.cloneNode(true)}else if(i.radialGradient){this.type=
"radialGradient";this.linearGradient=this.solidColor=null;this.radialGradient=i.radialGradient.cloneNode(true)}else if(i.solidColor){this.type="solidColor";this.solidColor=i.solidColor}else{this.type="none";this.radialGradient=this.linearGradient=this.solidColor=null}}};jQuery.fn.jGraduateDefaults={paint:new $.jGraduate.Paint,window:{pickerTitle:"Drag markers to pick a paint"},images:{clientPath:"images/"},newstop:"inverse"};var Ba=navigator.userAgent.indexOf("Gecko/")>=0;jQuery.fn.jGraduate=function(i){var z=
arguments;return this.each(function(){function t(c,a,d,h,f){var l=f||r("stop",{"stop-color":a,"stop-opacity":d,offset:c},g);if(f){a=f.getAttribute("stop-color");d=f.getAttribute("stop-opacity");c=f.getAttribute("offset")}else g.appendChild(l);if(d===null)d=1;f=r("path",{d:"M-6.2,0.9c3.6-4,6.7-4.3,6.7-12.4c-0.2,7.9,3.1,8.8,6.5,12.4c3.5,3.8,2.9,9.6,0,12.3c-3.1,2.8-10.4,2.7-13.2,0C-9.6,9.9-9.4,4.4-6.2,0.9z",fill:"url(#jGraduate_trans)",transform:"translate("+(10+c*j)+", 26)"},fa);var X=r("path",{d:"M-6.2,0.9c3.6-4,6.7-4.3,6.7-12.4c-0.2,7.9,3.1,8.8,6.5,12.4c3.5,3.8,2.9,9.6,0,12.3c-3.1,2.8-10.4,2.7-13.2,0C-9.6,9.9-9.4,4.4-6.2,0.9z",
fill:a,"fill-opacity":d,transform:"translate("+(10+c*j)+", 26)",stroke:"#000","stroke-width":1.5},fa);$(X).mousedown(function(M){B(this);R=F;N.mousemove(la).mouseup(W);S=ga.offset();M.preventDefault();return false}).data("stop",l).data("bg",f).dblclick(function(){$("div.jGraduate_LightBox").show();for(var M=this,I=+l.getAttribute("stop-opacity")||1,C=l.getAttribute("stop-color")||1,Y=(parseFloat(I)*255).toString(16);Y.length<2;)Y="0"+Y;a=C.substr(1)+Y;$("#"+b+"_jGraduate_stopPicker").css({left:100,
bottom:15}).jPicker({window:{title:"Pick the start color and opacity for the gradient"},images:{clientPath:o.images.clientPath},color:{active:a,alphaSupport:true}},function(Z){C=Z.val("hex")?"#"+Z.val("hex"):"none";I=Z.val("a")!==null?Z.val("a")/256:1;M.setAttribute("fill",C);M.setAttribute("fill-opacity",I);l.setAttribute("stop-color",C);l.setAttribute("stop-opacity",I);$("div.jGraduate_LightBox").hide();$("#"+b+"_jGraduate_stopPicker").hide()},null,function(){$("div.jGraduate_LightBox").hide();
$("#"+b+"_jGraduate_stopPicker").hide()})});$(g).find("stop").each(function(){var M=$(this);if(+this.getAttribute("offset")>c){if(!a){var I=this.getAttribute("stop-color"),C=this.getAttribute("stop-opacity");l.setAttribute("stop-color",I);X.setAttribute("fill",I);l.setAttribute("stop-opacity",C===null?1:C);X.setAttribute("fill-opacity",C===null?1:C)}M.before(l);return false}});h&&B(X);return l}function B(c){F&&F.setAttribute("stroke","#000");c.setAttribute("stroke","blue");F=c;F.parentNode.appendChild(F)}
function W(){N.unbind("mousemove",la);if(O.getAttribute("display")!=="none"){O.setAttribute("display","none");var c=$(F),a=c.data("stop");c=c.data("bg");$([F,a,c]).remove()}R=null}function w(){var c=T?"rotate("+T+","+ha+","+ia+") ":"";J===1&&G===1?g.removeAttribute("gradientTransform"):g.setAttribute("gradientTransform",c+"translate("+-ha*(J-1)+","+-ia*(G-1)+") scale("+J+","+G+")")}function la(c){var a=c.pageX-S.left;c=c.pageY-S.top;a=a<10?10:a>j+10?j+10:a;var d="translate("+a+", 26)";if(c<-60||c>
130){O.setAttribute("display","block");O.setAttribute("transform",d)}else O.setAttribute("display","none");R.setAttribute("transform",d);$.data(R,"bg").setAttribute("transform",d);$.data(R,"stop").setAttribute("offset",(a-10)/j);var h=0;$(g).find("stop").each(function(){var f=this.getAttribute("offset"),l=$(this);if(f<h){l.prev().before(l);D=$(g).find("stop")}h=f})}var e=$(this),o=$.extend(true,{},jQuery.fn.jGraduateDefaults,i),b=e.attr("id"),s="#"+e.attr("id")+" ";if(s){var ma=function(){switch(e.paint.type){case "radialGradient":e.paint.linearGradient=
null;break;case "linearGradient":e.paint.radialGradient=null;break;case "solidColor":e.paint.radialGradient=e.paint.linearGradient=null}$.isFunction(e.okCallback)&&e.okCallback(e.paint);e.hide()},na=function(){$.isFunction(e.cancelCallback)&&e.cancelCallback();e.hide()};$.extend(true,e,{paint:new $.jGraduate.Paint({copy:o.paint}),okCallback:$.isFunction(z[1])&&z[1]||null,cancelCallback:$.isFunction(z[2])&&z[2]||null});e.position();var u=null,N=$(window);if(e.paint.type=="none")e.paint=$.jGraduate.Paint({solidColor:"ffffff"});
e.addClass("jGraduate_Picker");e.html('<ul class="jGraduate_tabs"><li class="jGraduate_tab_color jGraduate_tab_current" data-type="col">Solid Color</li><li class="jGraduate_tab_lingrad" data-type="lg">Linear Gradient</li><li class="jGraduate_tab_radgrad" data-type="rg">Radial Gradient</li></ul><div class="jGraduate_colPick"></div><div class="jGraduate_gradPick"></div><div class="jGraduate_LightBox"></div><div id="'+b+'_jGraduate_stopPicker" class="jGraduate_stopPicker"></div>');var Ca=$(s+"> .jGraduate_colPick"),
n=$(s+"> .jGraduate_gradPick");n.html('<div id="'+b+'_jGraduate_Swatch" class="jGraduate_Swatch"><h2 class="jGraduate_Title">'+o.window.pickerTitle+'</h2><div id="'+b+'_jGraduate_GradContainer" class="jGraduate_GradContainer"></div><div id="'+b+'_jGraduate_StopSlider" class="jGraduate_StopSlider"></div></div><div class="jGraduate_Form jGraduate_Points jGraduate_lg_field"><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">Begin Point</label><div class="jGraduate_Form_Section"><label>x:</label><input type="text" id="'+
b+'_jGraduate_x1" size="3" title="Enter starting x value between 0.0 and 1.0"/><label> y:</label><input type="text" id="'+b+'_jGraduate_y1" size="3" title="Enter starting y value between 0.0 and 1.0"/></div></div><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">End Point</label><div class="jGraduate_Form_Section"><label>x:</label><input type="text" id="'+b+'_jGraduate_x2" size="3" title="Enter ending x value between 0.0 and 1.0"/><label> y:</label><input type="text" id="'+
b+'_jGraduate_y2" size="3" title="Enter ending y value between 0.0 and 1.0"/></div></div></div><div class="jGraduate_Form jGraduate_Points jGraduate_rg_field"><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">Center Point</label><div class="jGraduate_Form_Section"><label>x:</label><input type="text" id="'+b+'_jGraduate_cx" size="3" title="Enter x value between 0.0 and 1.0"/><label> y:</label><input type="text" id="'+b+'_jGraduate_cy" size="3" title="Enter y value between 0.0 and 1.0"/></div></div><div class="jGraduate_StopSection"><label class="jGraduate_Form_Heading">Focal Point</label><div class="jGraduate_Form_Section"><label>Match center: <input type="checkbox" checked="checked" id="'+
b+'_jGraduate_match_ctr"/></label><br/><label>x:</label><input type="text" id="'+b+'_jGraduate_fx" size="3" title="Enter x value between 0.0 and 1.0"/><label> y:</label><input type="text" id="'+b+'_jGraduate_fy" size="3" title="Enter y value between 0.0 and 1.0"/></div></div></div><div class="jGraduate_StopSection jGraduate_SpreadMethod"><label class="jGraduate_Form_Heading">Spread method</label><div class="jGraduate_Form_Section"><select class="jGraduate_spreadMethod"><option value=pad selected>Pad</option><option value=reflect>Reflect</option><option value=repeat>Repeat</option></select></div></div><div class="jGraduate_Form"><div class="jGraduate_Slider jGraduate_RadiusField jGraduate_rg_field"><label class="prelabel">Radius:</label><div id="'+
b+'_jGraduate_Radius" class="jGraduate_SliderBar jGraduate_Radius" title="Click to set radius"><img id="'+b+'_jGraduate_RadiusArrows" class="jGraduate_RadiusArrows" src="'+o.images.clientPath+'rangearrows2.gif"></div><label><input type="text" id="'+b+'_jGraduate_RadiusInput" size="3" value="100"/>%</label></div><div class="jGraduate_Slider jGraduate_EllipField jGraduate_rg_field"><label class="prelabel">Ellip:</label><div id="'+b+'_jGraduate_Ellip" class="jGraduate_SliderBar jGraduate_Ellip" title="Click to set Ellip"><img id="'+
b+'_jGraduate_EllipArrows" class="jGraduate_EllipArrows" src="'+o.images.clientPath+'rangearrows2.gif"></div><label><input type="text" id="'+b+'_jGraduate_EllipInput" size="3" value="0"/>%</label></div><div class="jGraduate_Slider jGraduate_AngleField jGraduate_rg_field"><label class="prelabel">Angle:</label><div id="'+b+'_jGraduate_Angle" class="jGraduate_SliderBar jGraduate_Angle" title="Click to set Angle"><img id="'+b+'_jGraduate_AngleArrows" class="jGraduate_AngleArrows" src="'+o.images.clientPath+
'rangearrows2.gif"></div><label><input type="text" id="'+b+'_jGraduate_AngleInput" size="3" value="0"/>deg</label></div><div class="jGraduate_Slider jGraduate_OpacField"><label class="prelabel">Opac:</label><div id="'+b+'_jGraduate_Opac" class="jGraduate_SliderBar jGraduate_Opac" title="Click to set Opac"><img id="'+b+'_jGraduate_OpacArrows" class="jGraduate_OpacArrows" src="'+o.images.clientPath+'rangearrows2.gif"></div><label><input type="text" id="'+b+'_jGraduate_OpacInput" size="3" value="100"/>%</label></div></div><div class="jGraduate_OkCancel"><input type="button" id="'+
b+'_jGraduate_Ok" class="jGraduate_Ok" value="OK"/><input type="button" id="'+b+'_jGraduate_Cancel" class="jGraduate_Cancel" value="Cancel"/></div>');var j=256,oa=j-0,pa=j-0,p,g,aa,q={};$(".jGraduate_SliderBar").width(145);var x=$("#"+b+"_jGraduate_GradContainer")[0],m=r("svg",{id:b+"_jgraduate_svg",width:j,height:j,xmlns:A.svg},x);p=p||e.paint.type;var v=g=e.paint[p],U=e.paint.alpha,ba=p==="solidColor";switch(p){case "solidColor":case "linearGradient":if(!ba){g.id=b+"_lg_jgraduate_grad";v=g=m.appendChild(g)}r("radialGradient",
{id:b+"_rg_jgraduate_grad"},m);if(p==="linearGradient")break;case "radialGradient":if(!ba){g.id=b+"_rg_jgraduate_grad";v=g=m.appendChild(g)}r("linearGradient",{id:b+"_lg_jgraduate_grad"},m)}if(ba){v=g=$("#"+b+"_lg_jgraduate_grad")[0];u=e.paint[p];t(0,"#"+u,1);var K=typeof o.newstop;if(K==="string")switch(o.newstop){case "same":t(1,"#"+u,1);break;case "inverse":K="";for(var y=0;y<6;y+=2){u.substr(y,2);var P=(255-parseInt(u.substr(y,2),16)).toString(16);if(P.length<2)P=0+P;K+=P}t(1,"#"+K,1);break;case "white":t(1,
"#ffffff",1);break;case "black":t(1,"#000000",1)}else if(K==="object")t(1,o.newstop.color||"#"+u,"opac"in o.newstop?o.newstop.opac:1)}u=parseFloat(v.getAttribute("x1")||0);K=parseFloat(v.getAttribute("y1")||0);y=parseFloat(v.getAttribute("x2")||1);P=parseFloat(v.getAttribute("y2")||0);var ca=parseFloat(v.getAttribute("cx")||0.5),da=parseFloat(v.getAttribute("cy")||0.5),qa=parseFloat(v.getAttribute("fx")||ca),ra=parseFloat(v.getAttribute("fy")||da);aa=r("rect",{id:b+"_jgraduate_rect",x:0,y:0,width:oa,
height:pa,fill:"url(#"+b+"_jgraduate_grad)","fill-opacity":U/100},m);var sa=$("<div/>").attr({"class":"grad_coord jGraduate_lg_field",title:"Begin Stop"}).text(1).css({top:K*j,left:u*j}).data("coord","start").appendTo(x),Da=sa.clone().text(2).css({top:P*j,left:y*j}).attr("title","End stop").data("coord","end").appendTo(x),ta=$("<div/>").attr({"class":"grad_coord jGraduate_rg_field",title:"Center stop"}).text("C").css({top:da*j,left:ca*j}).data("coord","center").appendTo(x),V=ta.clone().text("F").css({top:ra*
j,left:qa*j,display:"none"}).attr("title","Focus point").data("coord","focus").appendTo(x);V[0].id=b+"_jGraduate_focusCoord";$(s+" .grad_coord");$.each(["x1","y1","x2","y2","cx","cy","fx","fy"],function(c,a){var d=g.getAttribute(a),h=isNaN(a[1]);d||(d=h?"0.5":a==="x2"?"1.0":"0.0");q[a]=$("#"+b+"_jGraduate_"+a).val(d).change(function(){if(isNaN(parseFloat(this.value))||this.value<0)this.value=0;else if(this.value>1)this.value=1;if(!(a[0]==="f"&&!E))if(h&&p==="radialGradient"||!h&&p==="linearGradient")g.setAttribute(a,
this.value);var f=h?a[0]==="c"?ta:V:a[1]==="1"?sa:Da,l=a.indexOf("x")>=0?"left":"top";f.css(l,this.value*j)}).change()});var D,fa,ga=$("#"+b+"_jGraduate_StopSlider"),F,H,R,O=r("path",{d:"m9.75,-6l-19.5,19.5m0,-19.5l19.5,19.5",fill:"none",stroke:"#D00","stroke-width":5,display:"none"},H),S,J=1,G=1,T=0,ha=ca,ia=da;H=r("svg",{width:"100%",height:45},ga[0]);x=r("pattern",{width:16,height:16,patternUnits:"userSpaceOnUse",id:"jGraduate_trans"},H);r("image",{width:16,height:16},x).setAttributeNS(A.xlink,
"xlink:href",o.images.clientPath+"map-opacity.png");$(H).click(function(c){S=ga.offset();if(c.target.tagName!=="path"){var a=c.pageX-S.left-8;a=a<10?10:a>j+10?j+10:a;t(a/j,0,0,true);c.stopPropagation()}});$(H).mouseover(function(){H.appendChild(O)});fa=r("g",{},H);r("line",{x1:10,y1:15,x2:j+10,y2:15,"stroke-width":2,stroke:"#000"},H);var ua=n.find(".jGraduate_spreadMethod").change(function(){g.setAttribute("spreadMethod",$(this).val())}),Q=null,va=function(c){var a=c.pageX-ja.left,d=c.pageY-ja.top;
a=a<0?0:a>j?j:a;d=d<0?0:d>j?j:d;Q.css("left",a).css("top",d);a=a/oa;d=d/pa;var h=Q.data("coord"),f=g;switch(h){case "start":q.x1.val(a);q.y1.val(d);f.setAttribute("x1",a);f.setAttribute("y1",d);break;case "end":q.x2.val(a);q.y2.val(d);f.setAttribute("x2",a);f.setAttribute("y2",d);break;case "center":q.cx.val(a);q.cy.val(d);f.setAttribute("cx",a);f.setAttribute("cy",d);ha=a;ia=d;w();break;case "focus":q.fx.val(a);q.fy.val(d);f.setAttribute("fx",a);f.setAttribute("fy",d);w()}c.preventDefault()},wa=
function(){Q=null;N.unbind("mousemove",va).unbind("mouseup",wa)};D=g.getElementsByTagNameNS(A.svg,"stop");if(k<2){for(;k<2;){g.appendChild(document.createElementNS(A.svg,"stop"));++k}D=g.getElementsByTagNameNS(A.svg,"stop")}var k=D.length;for(y=0;y<k;y++)t(0,0,0,0,D[y]);ua.val(g.getAttribute("spreadMethod")||"pad");var ja,E=false;aa.setAttribute("fill-opacity",U/100);$("#"+b+" div.grad_coord").mousedown(function(c){c.preventDefault();Q=$(this);Q.offset();ja=Q.parent().offset();N.mousemove(va).mouseup(wa)});
$("#"+b+"_jGraduate_Ok").bind("click",function(){e.paint.type=p;e.paint[p]=g.cloneNode(true);e.paint.solidColor=null;ma()});$("#"+b+"_jGraduate_Cancel").bind("click",function(){na()});if(p==="radialGradient")if(E)V.show();else{V.hide();q.fx.val("");q.fy.val("")}$("#"+b+"_jGraduate_match_ctr")[0].checked=!E;var xa,ya;$("#"+b+"_jGraduate_match_ctr").change(function(){E=!this.checked;V.toggle(E);q.fx.val("");q.fy.val("");var c=g;if(E){var a=xa||0.5,d=ya||0.5;c.setAttribute("fx",a);c.setAttribute("fy",
d);q.fx.val(a);q.fy.val(d)}else{xa=c.getAttribute("fx");ya=c.getAttribute("fy");c.removeAttribute("fx");c.removeAttribute("fy")}});D=g.getElementsByTagNameNS(A.svg,"stop");k=D.length;if(k<2){for(;k<2;){g.appendChild(document.createElementNS(A.svg,"stop"));++k}D=g.getElementsByTagNameNS(A.svg,"stop")}var L;U=n=0;if(p==="radialGradient"){m=g.gradientTransform.baseVal;if(m.numberOfItems===2){k=m.getItem(0);m=m.getItem(1);if(k.type===2&&m.type===3){k=m.matrix;if(k.a!==1)n=Math.round(-(1-k.a)*100);else if(k.d!==
1)n=Math.round((1-k.d)*100)}}else if(m.numberOfItems===3){x=m.getItem(0);k=m.getItem(1);m=m.getItem(2);if(x.type===4&&k.type===2&&m.type===3){U=Math.round(x.angle);k=m.matrix;if(k.a!==1)n=Math.round(-(1-k.a)*100);else if(k.d!==1)n=Math.round((1-k.d)*100)}}}n={radius:{handle:"#"+b+"_jGraduate_RadiusArrows",input:"#"+b+"_jGraduate_RadiusInput",val:(g.getAttribute("r")||0.5)*100},opacity:{handle:"#"+b+"_jGraduate_OpacArrows",input:"#"+b+"_jGraduate_OpacInput",val:e.paint.alpha||100},ellip:{handle:"#"+
b+"_jGraduate_EllipArrows",input:"#"+b+"_jGraduate_EllipInput",val:n},angle:{handle:"#"+b+"_jGraduate_AngleArrows",input:"#"+b+"_jGraduate_AngleInput",val:U}};$.each(n,function(c,a){var d=$(a.handle);d.mousedown(function(h){var f=d.parent();L={type:c,elem:d,input:$(a.input),parent:f,offset:f.offset()};N.mousemove(za).mouseup(Aa);h.preventDefault()});$(a.input).val(a.val).change(function(){var h=+this.value,f=0,l=p==="radialGradient";switch(c){case "radius":l&&g.setAttribute("r",h/100);f=Math.pow(h/
100,0.4)/2*145;break;case "opacity":e.paint.alpha=h;aa.setAttribute("fill-opacity",h/100);f=h*1.45;break;case "ellip":J=G=1;if(h===0){f=72.5;break}if(h>99.5)h=99.5;if(h>0)G=1-h/100;else J=-(h/100)-1;f=145*((h+100)/2)/100;l&&w();break;case "angle":T=h;f=T/180;f+=0.5;f*=145;l&&w()}if(f>145)f=145;else if(f<0)f=0;d.css({"margin-left":f-5})}).change()});var za=function(c){var a=c.pageX-L.offset.left-parseInt(L.parent.css("border-left-width"));if(a>145)a=145;if(a<=0)a=0;var d=a-5;a/=145;switch(L.type){case "radius":a=
Math.pow(a*2,2.5);if(a>0.98&&a<1.02)a=1;if(a<=0.01)a=0.01;g.setAttribute("r",a);break;case "opacity":e.paint.alpha=parseInt(a*100);aa.setAttribute("fill-opacity",a);break;case "ellip":G=J=1;if(a<0.5){a/=0.5;J=a<=0?0.01:a}else if(a>0.5){a/=0.5;a=2-a;G=a<=0?0.01:a}w();a-=1;if(G===a+1)a=Math.abs(a);break;case "angle":a-=0.5;T=a*=180;w();a/=100}L.elem.css({"margin-left":d});a=Math.round(a*100);L.input.val(a);c.preventDefault()},Aa=function(){N.unbind("mousemove",za).unbind("mouseup",Aa);L=null};for(n=
(e.paint.alpha*255/100).toString(16);n.length<2;)n="0"+n;n=n.split(".")[0];u=e.paint.solidColor=="none"?"":e.paint.solidColor+n;ba||(u=D[0].getAttribute("stop-color"));$.extend($.fn.jPicker.defaults.window,{alphaSupport:true,effects:{type:"show",speed:0}});Ca.jPicker({window:{title:o.window.pickerTitle},images:{clientPath:o.images.clientPath},color:{active:u,alphaSupport:true}},function(c){e.paint.type="solidColor";e.paint.alpha=c.val("ahex")?Math.round(c.val("a")/255*100):100;e.paint.solidColor=
c.val("hex")?c.val("hex"):"none";e.paint.radialGradient=null;ma()},null,function(){na()});var ka=$(s+" .jGraduate_tabs li");ka.click(function(){ka.removeClass("jGraduate_tab_current");$(this).addClass("jGraduate_tab_current");$(s+" > div").hide();var c=$(this).attr("data-type");$(s+" .jGraduate_gradPick").show();if(c==="rg"||c==="lg"){$(".jGraduate_"+c+"_field").show();$(".jGraduate_"+(c==="lg"?"rg":"lg")+"_field").hide();$("#"+b+"_jgraduate_rect")[0].setAttribute("fill","url(#"+b+"_"+c+"_jgraduate_grad)");
p=c==="lg"?"linearGradient":"radialGradient";$("#"+b+"_jGraduate_OpacInput").val(e.paint.alpha).change();var a=$("#"+b+"_"+c+"_jgraduate_grad")[0];if(g!==a){var d=$(g).find("stop");$(a).empty().append(d);g=a;a=ua.val();g.setAttribute("spreadMethod",a)}E=c==="rg"&&g.getAttribute("fx")!=null&&!(ca==qa&&da==ra);$("#"+b+"_jGraduate_focusCoord").toggle(E);if(E)$("#"+b+"_jGraduate_match_ctr")[0].checked=false}else{$(s+" .jGraduate_gradPick").hide();$(s+" .jGraduate_colPick").show()}});$(s+" > div").hide();
ka.removeClass("jGraduate_tab_current");var ea;switch(e.paint.type){case "linearGradient":ea=$(s+" .jGraduate_tab_lingrad");break;case "radialGradient":ea=$(s+" .jGraduate_tab_radgrad");break;default:ea=$(s+" .jGraduate_tab_color")}e.show();setTimeout(function(){ea.addClass("jGraduate_tab_current").click()},10)}else alert("Container element must have an id attribute to maintain unique id strings for sub-elements.")})}})();
$.fn.SpinButton=function(b){function f(a,c){for(var e=a[c],d=document.body;(a=a.offsetParent)&&a!=d;)if(!$.browser.msie||a.currentStyle.position!="relative")e+=a[c];return e}return this.each(function(){this.repeating=false;this.spinCfg={min:b&&!isNaN(parseFloat(b.min))?Number(b.min):null,max:b&&!isNaN(parseFloat(b.max))?Number(b.max):null,step:b&&b.step?Number(b.step):1,stepfunc:b&&b.stepfunc?b.stepfunc:false,page:b&&b.page?Number(b.page):10,upClass:b&&b.upClass?b.upClass:"up",downClass:b&&b.downClass?
b.downClass:"down",reset:b&&b.reset?b.reset:this.value,delay:b&&b.delay?Number(b.delay):500,interval:b&&b.interval?Number(b.interval):100,_btn_width:20,_direction:null,_delay:null,_repeat:null,callback:b&&b.callback?b.callback:null};this.spinCfg.smallStep=b&&b.smallStep?b.smallStep:this.spinCfg.step/2;this.adjustValue=function(a){a=isNaN(this.value)?this.spinCfg.reset:$.isFunction(this.spinCfg.stepfunc)?this.spinCfg.stepfunc(this,a):Number((Number(this.value)+Number(a)).toFixed(5));if(this.spinCfg.min!==
null)a=Math.max(a,this.spinCfg.min);if(this.spinCfg.max!==null)a=Math.min(a,this.spinCfg.max);this.value=a;$.isFunction(this.spinCfg.callback)&&this.spinCfg.callback(this)};$(this).addClass(b&&b.spinClass?b.spinClass:"spin-button").mousemove(function(a){var c=a.pageX||a.x,e=a.pageY||a.y;a=a.target||a.srcElement;var d=svgEditor.tool_scale||1,g=$(a).height()/2;c=c>f(a,"offsetLeft")+a.offsetWidth*d-this.spinCfg._btn_width?e<f(a,"offsetTop")+g*d?1:-1:0;if(c!==this.spinCfg._direction){switch(c){case 1:$(this).removeClass(this.spinCfg.downClass).addClass(this.spinCfg.upClass);
break;case -1:$(this).removeClass(this.spinCfg.upClass).addClass(this.spinCfg.downClass);break;default:$(this).removeClass(this.spinCfg.upClass).removeClass(this.spinCfg.downClass)}this.spinCfg._direction=c}}).mouseout(function(){$(this).removeClass(this.spinCfg.upClass).removeClass(this.spinCfg.downClass);this.spinCfg._direction=null;window.clearInterval(this.spinCfg._repeat);window.clearTimeout(this.spinCfg._delay)}).mousedown(function(a){if(a.button===0&&this.spinCfg._direction!=0){var c=this,
e=a.shiftKey?c.spinCfg.smallStep:c.spinCfg.step,d=function(){c.adjustValue(c.spinCfg._direction*e)};d();c.spinCfg._delay=window.setTimeout(function(){d();c.spinCfg._repeat=window.setInterval(d,c.spinCfg.interval)},c.spinCfg.delay)}}).mouseup(function(){window.clearInterval(this.spinCfg._repeat);window.clearTimeout(this.spinCfg._delay)}).dblclick(function(){$.browser.msie&&this.adjustValue(this.spinCfg._direction*this.spinCfg.step)}).keydown(function(a){switch(a.keyCode){case 38:this.adjustValue(this.spinCfg.step);
break;case 40:this.adjustValue(-this.spinCfg.step);break;case 33:this.adjustValue(this.spinCfg.page);break;case 34:this.adjustValue(-this.spinCfg.page)}}).keypress(function(a){if(this.repeating)switch(a.keyCode){case 38:this.adjustValue(this.spinCfg.step);break;case 40:this.adjustValue(-this.spinCfg.step);break;case 33:this.adjustValue(this.spinCfg.page);break;case 34:this.adjustValue(-this.spinCfg.page)}else this.repeating=true}).keyup(function(a){this.repeating=false;switch(a.keyCode){case 38:case 40:case 33:case 34:case 13:this.adjustValue(0)}}).bind("mousewheel",
function(a){if(a.wheelDelta>=120)this.adjustValue(this.spinCfg.step);else a.wheelDelta<=-120&&this.adjustValue(-this.spinCfg.step);a.preventDefault()}).change(function(){this.adjustValue(0)});this.addEventListener&&this.addEventListener("DOMMouseScroll",function(a){if(a.detail>0)this.adjustValue(-this.spinCfg.step);else a.detail<0&&this.adjustValue(this.spinCfg.step);a.preventDefault()},false)})};
// http://ross.posterous.com/2008/08/19/iphone-touch-events-in-javascript/

function touchHandler(event)
{   
    
    var touches = event.changedTouches,
        first = touches[0],
        type = "";
         switch(event.type)
    {
        case "touchstart": type="mousedown"; break;
        case "touchmove":  type="mousemove"; break;        
        case "touchend":   type="mouseup"; break;
        default: return;
    }

             //initMouseEvent(type, canBubble, cancelable, view, clickCount, 
    //           screenX, screenY, clientX, clientY, ctrlKey, 
    //           altKey, shiftKey, metaKey, button, relatedTarget);
    
    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1, 
                              first.screenX, first.screenY, 
                              first.clientX, first.clientY, false, 
                              false, false, false, 0/*left*/, null);
    if(touches.length < 2) {
      first.target.dispatchEvent(simulatedEvent);
      event.preventDefault();
    }
}
;
jQuery&&function(){var a=$(window),K=$(document);$.extend($.fn,{contextMenu:function(l,s){if(l.menu==undefined)return false;if(l.inSpeed==undefined)l.inSpeed=150;if(l.outSpeed==undefined)l.outSpeed=75;if(l.inSpeed==0)l.inSpeed=-1;if(l.outSpeed==0)l.outSpeed=-1;$(this).each(function(){var v=$(this),G=$(v).offset(),e=$("#"+l.menu);e.addClass("contextMenu");$(this).bind("mousedown",function(f){$(this).mouseup(function(k){var n=$(this);n.unbind("mouseup");if(f.button===2||l.allowLeft||f.ctrlKey&&svgedit.browser.isMac()){k.stopPropagation();
$(".contextMenu").hide();if(v.hasClass("disabled"))return false;var F=k.pageX,B=k.pageY;k=a.width()-e.width();var A=a.height()-e.height();if(F>k-15)F=k-15;if(B>A-30)B=A-30;K.unbind("click");e.css({top:B,left:F}).fadeIn(l.inSpeed);e.find("A").mouseover(function(){e.find("LI.hover").removeClass("hover");$(this).parent().addClass("hover")}).mouseout(function(){e.find("LI.hover").removeClass("hover")});K.keypress(function(O){switch(O.keyCode){case 38:if(e.find("LI.hover").length){e.find("LI.hover").removeClass("hover").prevAll("LI:not(.disabled)").eq(0).addClass("hover");
e.find("LI.hover").length||e.find("LI:last").addClass("hover")}else e.find("LI:last").addClass("hover");break;case 40:if(e.find("LI.hover").length==0)e.find("LI:first").addClass("hover");else{e.find("LI.hover").removeClass("hover").nextAll("LI:not(.disabled)").eq(0).addClass("hover");e.find("LI.hover").length||e.find("LI:first").addClass("hover")}break;case 13:e.find("LI.hover A").trigger("click");break;case 27:K.trigger("click")}});e.find("A").unbind("mouseup");e.find("LI:not(.disabled) A").mouseup(function(){K.unbind("click").unbind("keypress");
$(".contextMenu").hide();s&&s($(this).attr("href").substr(1),$(n),{x:F-G.left,y:B-G.top,docX:F,docY:B});return false});setTimeout(function(){K.click(function(){K.unbind("click").unbind("keypress");e.fadeOut(l.outSpeed);return false})},0)}})});if($.browser.mozilla)$("#"+l.menu).each(function(){$(this).css({MozUserSelect:"none"})});else $.browser.msie?$("#"+l.menu).each(function(){$(this).bind("selectstart.disableTextSelect",function(){return false})}):$("#"+l.menu).each(function(){$(this).bind("mousedown.disableTextSelect",
function(){return false})});$(v).add($("UL.contextMenu")).bind("contextmenu",function(){return false})});return $(this)},disableContextMenuItems:function(l){if(l==undefined){$(this).find("LI").addClass("disabled");return $(this)}$(this).each(function(){if(l!=undefined)for(var s=l.split(","),v=0;v<s.length;v++)$(this).find('A[href="'+s[v]+'"]').parent().addClass("disabled")});return $(this)},enableContextMenuItems:function(l){if(l==undefined){$(this).find("LI.disabled").removeClass("disabled");return $(this)}$(this).each(function(){if(l!=
undefined)for(var s=l.split(","),v=0;v<s.length;v++)$(this).find('A[href="'+s[v]+'"]').parent().removeClass("disabled")});return $(this)},disableContextMenu:function(){$(this).each(function(){$(this).addClass("disabled")});return $(this)},enableContextMenu:function(){$(this).each(function(){$(this).removeClass("disabled")});return $(this)},destroyContextMenu:function(){$(this).each(function(){$(this).unbind("mousedown").unbind("mouseup")});return $(this)}})}(jQuery);var svgedit=svgedit||{};
(function(){if(!svgedit.browser)svgedit.browser={};var a=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect;svgedit.browser.supportsSvg=function(){return a};if(svgedit.browser.supportsSvg()){var K=navigator.userAgent,l=document.createElementNS("http://www.w3.org/2000/svg","svg"),s=!!window.opera,v=K.indexOf("AppleWebKit")>=0,G=K.indexOf("Gecko/")>=0,e=K.indexOf("MSIE")>=0,f=K.indexOf("Chrome/")>=0,k=K.indexOf("Windows")>=0,n=K.indexOf("Macintosh")>=
0,F="ontouchstart"in window,B=!!l.querySelector,A=!!document.evaluate,O=function(){var ia=document.createElementNS("http://www.w3.org/2000/svg","path");ia.setAttribute("d","M0,0 10,10");var da=ia.pathSegList;ia=ia.createSVGPathSegLinetoAbs(5,5);try{da.replaceItem(ia,0);return true}catch(Ya){}return false}(),Z=function(){var ia=document.createElementNS("http://www.w3.org/2000/svg","path");ia.setAttribute("d","M0,0 10,10");var da=ia.pathSegList;ia=ia.createSVGPathSegLinetoAbs(5,5);try{da.insertItemBefore(ia,
0);return true}catch(Ya){}return false}(),N=function(){var ia=document.createElementNS("http://www.w3.org/2000/svg","svg"),da=document.createElementNS("http://www.w3.org/2000/svg","svg");document.documentElement.appendChild(ia);da.setAttribute("x",5);ia.appendChild(da);var Ya=document.createElementNS("http://www.w3.org/2000/svg","text");Ya.textContent="a";da.appendChild(Ya);da=Ya.getStartPositionOfChar(0).x;document.documentElement.removeChild(ia);return da===0}(),L=function(){var ia=document.createElementNS("http://www.w3.org/2000/svg",
"svg");document.documentElement.appendChild(ia);var da=document.createElementNS("http://www.w3.org/2000/svg","path");da.setAttribute("d","M0,0 C0,0 10,10 10,0");ia.appendChild(da);da=da.getBBox();document.documentElement.removeChild(ia);return da.height>4&&da.height<5}(),na=function(){var ia=document.createElementNS("http://www.w3.org/2000/svg","svg");document.documentElement.appendChild(ia);var da=document.createElementNS("http://www.w3.org/2000/svg","path");da.setAttribute("d","M0,0 10,0");var Ya=
document.createElementNS("http://www.w3.org/2000/svg","path");Ya.setAttribute("d","M5,0 15,0");var kb=document.createElementNS("http://www.w3.org/2000/svg","g");kb.appendChild(da);kb.appendChild(Ya);ia.appendChild(kb);da=kb.getBBox();document.documentElement.removeChild(ia);return da.width==15}(),ca=function(){var ia=document.createElementNS("http://www.w3.org/2000/svg","rect");ia.setAttribute("x",0.1);(ia=ia.cloneNode(false).getAttribute("x").indexOf(",")==-1)||$.alert("NOTE: This version of Opera is known to contain bugs in SVG-edit.\n\t\tPlease upgrade to the <a href='http://opera.com'>latest version</a> in which the problems have been fixed.");
return ia}(),oa=function(){var ia=document.createElementNS("http://www.w3.org/2000/svg","rect");ia.setAttribute("style","vector-effect:non-scaling-stroke");return ia.style.vectorEffect==="non-scaling-stroke"}(),pa=function(){var ia=document.createElementNS("http://www.w3.org/2000/svg","rect").transform.baseVal,da=l.createSVGTransform();ia.appendItem(da);return ia.getItem(0)==da}();svgedit.browser.isOpera=function(){return s};svgedit.browser.isWebkit=function(){return v};svgedit.browser.isGecko=function(){return G};
svgedit.browser.isIE=function(){return e};svgedit.browser.isChrome=function(){return f};svgedit.browser.isWindows=function(){return k};svgedit.browser.isMac=function(){return n};svgedit.browser.isTouch=function(){return F};svgedit.browser.supportsSelectors=function(){return B};svgedit.browser.supportsXpath=function(){return A};svgedit.browser.supportsPathReplaceItem=function(){return O};svgedit.browser.supportsPathInsertItemBefore=function(){return Z};svgedit.browser.supportsPathBBox=function(){return L};
svgedit.browser.supportsHVLineContainerBBox=function(){return na};svgedit.browser.supportsGoodTextCharPos=function(){return N};svgedit.browser.supportsEditableText=function(){return s};svgedit.browser.supportsGoodDecimals=function(){return ca};svgedit.browser.supportsNonScalingStroke=function(){return oa};svgedit.browser.supportsNativeTransformLists=function(){return pa}}else window.location="browser-not-supported.html"})();svgedit=svgedit||{};
(function(){if(!svgedit.transformlist)svgedit.transformlist={};var a=document.createElementNS("http://www.w3.org/2000/svg","svg"),K={};svgedit.transformlist.SVGTransformList=function(l){this._elem=l||null;this._xforms=[];this._update=function(){var s="";a.createSVGMatrix();for(var v=0;v<this.numberOfItems;++v){var G=this._list.getItem(v);s=s;G=G;var e=G.matrix,f="";switch(G.type){case 1:f="matrix("+[e.a,e.b,e.c,e.d,e.e,e.f].join(",")+")";break;case 2:f="translate("+e.e+","+e.f+")";break;case 3:f=
e.a==e.d?"scale("+e.a+")":"scale("+e.a+","+e.d+")";break;case 4:var k=0;f=0;if(G.angle!=0){k=1-e.a;f=(k*e.f+e.b*e.e)/(k*k+e.b*e.b);k=(e.e-e.b*f)/k}f="rotate("+G.angle+" "+k+","+f+")"}s=s+(f+" ")}this._elem.setAttribute("transform",s)};this._list=this;this._init=function(){var s=this._elem.getAttribute("transform");if(s)for(var v=/\s*((scale|matrix|rotate|translate)\s*\(.*?\))\s*,?\s*/,G=true;G;){G=s.match(v);s=s.replace(v,"");if(G&&G[1]){var e=G[1].split(/\s*\(/),f=e[0];e=e[1].match(/\s*(.*?)\s*\)/);
e[1]=e[1].replace(/(\d)-/g,"$1 -");var k=e[1].split(/[, ]+/),n="abcdef".split(""),F=a.createSVGMatrix();$.each(k,function(O,Z){k[O]=parseFloat(Z);if(f=="matrix")F[n[O]]=k[O]});e=a.createSVGTransform();var B="set"+f.charAt(0).toUpperCase()+f.slice(1),A=f=="matrix"?[F]:k;if(f=="scale"&&A.length==1)A.push(A[0]);else if(f=="translate"&&A.length==1)A.push(0);else if(f=="rotate"&&A.length==1){A.push(0);A.push(0)}e[B].apply(e,A);this._list.appendItem(e)}}};this._removeFromOtherLists=function(s){if(s){var v=
false,G;for(G in K){for(var e=K[G],f=0,k=e._xforms.length;f<k;++f)if(e._xforms[f]==s){v=true;e.removeItem(f);break}if(v)break}}};this.numberOfItems=0;this.clear=function(){this.numberOfItems=0;this._xforms=[]};this.initialize=function(s){this.numberOfItems=1;this._removeFromOtherLists(s);this._xforms=[s]};this.getItem=function(s){if(s<this.numberOfItems&&s>=0)return this._xforms[s];throw{code:1};};this.insertItemBefore=function(s,v){var G=null;if(v>=0)if(v<this.numberOfItems){this._removeFromOtherLists(s);
G=Array(this.numberOfItems+1);for(var e=0;e<v;++e)G[e]=this._xforms[e];G[e]=s;for(var f=e+1;e<this.numberOfItems;++f,++e)G[f]=this._xforms[e];this.numberOfItems++;this._xforms=G;G=s;this._list._update()}else G=this._list.appendItem(s);return G};this.replaceItem=function(s,v){var G=null;if(v<this.numberOfItems&&v>=0){this._removeFromOtherLists(s);G=this._xforms[v]=s;this._list._update()}return G};this.removeItem=function(s){if(s<this.numberOfItems&&s>=0){for(var v=this._xforms[s],G=Array(this.numberOfItems-
1),e=0;e<s;++e)G[e]=this._xforms[e];for(s=e;s<this.numberOfItems-1;++s,++e)G[s]=this._xforms[e+1];this.numberOfItems--;this._xforms=G;this._list._update();return v}else throw{code:1};};this.appendItem=function(s){this._removeFromOtherLists(s);this._xforms.push(s);this.numberOfItems++;this._list._update();return s}};svgedit.transformlist.resetListMap=function(){K={}};svgedit.transformlist.removeElementFromListMap=function(l){l.id&&K[l.id]&&delete K[l.id]};svgedit.transformlist.getTransformList=function(l){if(svgedit.browser.supportsNativeTransformLists())if(l.transform)return l.transform.baseVal;
else if(l.gradientTransform)return l.gradientTransform.baseVal;else{if(l.patternTransform)return l.patternTransform.baseVal}else{var s=l.id;s||(s="temp");var v=K[s];if(!v||s=="temp"){K[s]=new svgedit.transformlist.SVGTransformList(l);K[s]._init();v=K[s]}return v}return null}})();svgedit=svgedit||{};
(function(){if(!svgedit.math)svgedit.math={};var a=document.createElementNS("http://www.w3.org/2000/svg","svg");svgedit.math.transformPoint=function(K,l,s){return{x:s.a*K+s.c*l+s.e,y:s.b*K+s.d*l+s.f}};svgedit.math.isIdentity=function(K){return K.a===1&&K.b===0&&K.c===0&&K.d===1&&K.e===0&&K.f===0};svgedit.math.matrixMultiply=function(){for(var K=arguments,l=K.length,s=K[l-1];l-- >1;)s=K[l-1].multiply(s);if(Math.abs(s.a)<1.0E-14)s.a=0;if(Math.abs(s.b)<1.0E-14)s.b=0;if(Math.abs(s.c)<1.0E-14)s.c=0;if(Math.abs(s.d)<
1.0E-14)s.d=0;if(Math.abs(s.e)<1.0E-14)s.e=0;if(Math.abs(s.f)<1.0E-14)s.f=0;return s};svgedit.math.hasMatrixTransform=function(K){if(!K)return false;for(var l=K.numberOfItems;l--;){var s=K.getItem(l);if(s.type==1&&!svgedit.math.isIdentity(s.matrix))return true}return false};svgedit.math.transformBox=function(K,l,s,v,G){var e={x:K,y:l},f={x:K+s,y:l};s={x:K+s,y:l+v};K={x:K,y:l+v};l=svgedit.math.transformPoint;e=l(e.x,e.y,G);var k=v=e.x,n=e.y,F=e.y;f=l(f.x,f.y,G);v=Math.min(v,f.x);k=Math.max(k,f.x);
n=Math.min(n,f.y);F=Math.max(F,f.y);K=l(K.x,K.y,G);v=Math.min(v,K.x);k=Math.max(k,K.x);n=Math.min(n,K.y);F=Math.max(F,K.y);s=l(s.x,s.y,G);v=Math.min(v,s.x);k=Math.max(k,s.x);n=Math.min(n,s.y);F=Math.max(F,s.y);return{tl:e,tr:f,bl:K,br:s,aabox:{x:v,y:n,width:k-v,height:F-n}}};svgedit.math.transformListToTransform=function(K,l,s){if(K==null)return a.createSVGTransformFromMatrix(a.createSVGMatrix());l=l==undefined?0:l;s=s==undefined?K.numberOfItems-1:s;l=parseInt(l);s=parseInt(s);if(l>s){var v=s;s=l;
l=v}v=a.createSVGMatrix();for(l=l;l<=s;++l){var G=l>=0&&l<K.numberOfItems?K.getItem(l).matrix:a.createSVGMatrix();v=svgedit.math.matrixMultiply(v,G)}return a.createSVGTransformFromMatrix(v)};svgedit.math.getMatrix=function(K){K=svgedit.transformlist.getTransformList(K);return svgedit.math.transformListToTransform(K).matrix};svgedit.math.snapToAngle=function(K,l,s,v){var G=Math.PI/4;s=s-K;var e=v-l;v=Math.sqrt(s*s+e*e);G=Math.round(Math.atan2(e,s)/G)*G;return{x:K+v*Math.cos(G),y:l+v*Math.sin(G),a:G}};
svgedit.math.rectsIntersect=function(K,l){return l.x<K.x+K.width&&l.x+l.width>K.x&&l.y<K.y+K.height&&l.y+l.height>K.y}})();svgedit=svgedit||{};
(function(){if(!svgedit.units)svgedit.units={};var a=["x","x1","cx","rx","width"],K=["y","y1","cy","ry","height"],l=$.merge(["r","radius"],a);$.merge(l,K);var s,v={px:1};svgedit.units.init=function(e){s=e;e=document.createElementNS("http://www.w3.org/2000/svg","svg");document.body.appendChild(e);var f=document.createElementNS("http://www.w3.org/2000/svg","rect");f.setAttribute("width","1em");f.setAttribute("height","1ex");f.setAttribute("x","1in");e.appendChild(f);f=f.getBBox();document.body.removeChild(e);
e=f.x;v.em=f.width;v.ex=f.height;v["in"]=e;v.cm=e/2.54;v.mm=e/25.4;v.pt=e/72;v.pc=e/6;v["%"]=0};svgedit.units.getTypeMap=function(){return v};svgedit.units.shortFloat=function(e){var f=s.getRoundDigits();if(isNaN(e)){if($.isArray(e))return svgedit.units.shortFloat(e[0])+","+svgedit.units.shortFloat(e[1])}else return+(+e).toFixed(f);return parseFloat(e).toFixed(f)-0};svgedit.units.convertUnit=function(e,f){f=f||s.getBaseUnit();return svgedit.unit.shortFloat(e/v[f])};svgedit.units.setUnitAttr=function(e,
f,k){isNaN(k)||e.getAttribute(f);e.setAttribute(f,k)};var G={line:["x1","x2","y1","y2"],circle:["cx","cy","r"],ellipse:["cx","cy","rx","ry"],foreignObject:["x","y","width","height"],rect:["x","y","width","height"],image:["x","y","width","height"],use:["x","y","width","height"],text:["x","y"]};svgedit.units.convertAttrs=function(e){var f=e.tagName,k=s.getBaseUnit();if(f=G[f])for(var n=f.length,F=0;F<n;F++){var B=f[F],A=e.getAttribute(B);if(A)isNaN(A)||e.setAttribute(B,A/v[k]+k)}};svgedit.units.convertToNum=
function(e,f){if(!isNaN(f))return f-0;if(f.substr(-1)==="%"){var k=f.substr(0,f.length-1)/100,n=s.getWidth(),F=s.getHeight();return a.indexOf(e)>=0?k*n:K.indexOf(e)>=0?k*F:k*Math.sqrt(n*n+F*F)/Math.sqrt(2)}else{n=f.substr(-2);k=f.substr(0,f.length-2);return k*v[n]}};svgedit.units.isValidUnit=function(e,f,k){var n=false;if(l.indexOf(e)>=0)if(isNaN(f)){f=f.toLowerCase();$.each(v,function(A){if(!n)if(RegExp("^-?[\\d\\.]+"+A+"$").test(f))n=true})}else n=true;else if(e=="id"){e=false;try{var F=s.getElement(f);
e=F==null||F===k}catch(B){}return e}else n=true;return n}})();svgedit=svgedit||{};
(function(){function a(e){if(svgedit.browser.supportsHVLineContainerBBox())try{return e.getBBox()}catch(f){}var k=$.data(e,"ref"),n=null;if(k){var F=$(k).children().clone().attr("visibility","hidden");$(G).append(F);n=F.filter("line, path")}else n=$(e).find("line, path");var B=false;if(n.length){n.each(function(){var A=this.getBBox();if(!A.width||!A.height)B=true});if(B){e=k?F:$(e).children();ret=getStrokedBBox(e)}else ret=e.getBBox()}else ret=e.getBBox();k&&F.remove();return ret}if(!svgedit.utilities)svgedit.utilities=
{};var K="a,circle,ellipse,foreignObject,g,image,line,path,polygon,polyline,rect,svg,text,tspan,use".split(","),l=null,s=null,v=null,G=null;svgedit.utilities.init=function(e){l=e;s=e.getDOMDocument();v=e.getDOMContainer();G=e.getSVGRoot()};svgedit.utilities.toXml=function(e){return $("<p/>").text(e).html()};svgedit.utilities.fromXml=function(e){return $("<p/>").html(e).text()};svgedit.utilities.encode64=function(e){e=svgedit.utilities.convertToXMLReferences(e);if(window.btoa)return window.btoa(e);
var f=Array(Math.floor((e.length+2)/3)*4),k,n,F,B,A,O,Z=0,N=0;do{k=e.charCodeAt(Z++);n=e.charCodeAt(Z++);F=e.charCodeAt(Z++);B=k>>2;k=(k&3)<<4|n>>4;A=(n&15)<<2|F>>6;O=F&63;if(isNaN(n))A=O=64;else if(isNaN(F))O=64;f[N++]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(B);f[N++]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(k);f[N++]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(A);f[N++]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(O)}while(Z<
e.length);return f.join("")};svgedit.utilities.decode64=function(e){if(window.atob)return window.atob(e);var f="",k,n,F="",B,A="",O=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");do{k="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(O++));n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(O++));B="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(O++));A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(O++));
k=k<<2|n>>4;n=(n&15)<<4|B>>2;F=(B&3)<<6|A;f+=String.fromCharCode(k);if(B!=64)f+=String.fromCharCode(n);if(A!=64)f+=String.fromCharCode(F)}while(O<e.length);return unescape(f)};svgedit.utilities.convertToXMLReferences=function(e){for(var f="",k=0;k<e.length;k++){var n=e.charCodeAt(k);if(n<128)f+=e[k];else if(n>127)f+="&#"+n+";"}return f};svgedit.utilities.text2xml=function(e){if(e.indexOf("<svg:svg")>=0)e=e.replace(/<(\/?)svg:/g,"<$1").replace("xmlns:svg","xmlns");var f;try{var k=window.DOMParser?
new DOMParser:new ActiveXObject("Microsoft.XMLDOM");k.async=false}catch(n){throw Error("XML Parser could not be instantiated");}try{f=k.loadXML?k.loadXML(e)?k:false:k.parseFromString(e,"text/xml")}catch(F){throw Error("Error parsing XML string");}return f};svgedit.utilities.bboxToObj=function(e){return{x:e.x,y:e.y,width:e.width,height:e.height}};svgedit.utilities.walkTree=function(e,f){if(e&&e.nodeType==1){f(e);for(var k=e.childNodes.length;k--;)svgedit.utilities.walkTree(e.childNodes.item(k),f)}};
svgedit.utilities.walkTreePost=function(e,f){if(e&&e.nodeType==1){for(var k=e.childNodes.length;k--;)svgedit.utilities.walkTree(e.childNodes.item(k),f);f(e)}};svgedit.utilities.getUrlFromAttr=function(e){if(e)if(e.indexOf('url("')===0)return e.substring(5,e.indexOf('"',6));else if(e.indexOf("url('")===0)return e.substring(5,e.indexOf("'",6));else if(e.indexOf("url(")===0)return e.substring(4,e.indexOf(")"));return null};svgedit.utilities.getHref=function(e){return e.getAttributeNS("http://www.w3.org/1999/xlink",
"href")};svgedit.utilities.setHref=function(e,f){e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",f)};svgedit.utilities.findDefs=function(e){e=l.getSVGContent().documentElement;var f=e.getElementsByTagNameNS("http://www.w3.org/2000/svg","defs");return f=f.length>0?f[0]:e.insertBefore(e.ownerDocument.createElementNS("http://www.w3.org/2000/svg","defs"),e.firstChild.nextSibling)};svgedit.utilities.getPathBBox=function(e){var f=e.pathSegList,k=f.numberOfItems;e=[[],[]];var n=f.getItem(0),
F=[n.x,n.y];for(n=0;n<k;n++){var B=f.getItem(n);if(typeof B.x!="undefined"){e[0].push(F[0]);e[1].push(F[1]);if(B.x1){for(var A=[B.x1,B.y1],O=[B.x2,B.y2],Z=[B.x,B.y],N=0;N<2;N++){B=function(pa){return Math.pow(1-pa,3)*F[N]+3*Math.pow(1-pa,2)*pa*A[N]+3*(1-pa)*Math.pow(pa,2)*O[N]+Math.pow(pa,3)*Z[N]};var L=6*F[N]-12*A[N]+6*O[N],na=-3*F[N]+9*A[N]-9*O[N]+3*Z[N],ca=3*A[N]-3*F[N];if(na==0){if(L!=0){L=-ca/L;0<L&&L<1&&e[N].push(B(L))}}else{ca=Math.pow(L,2)-4*ca*na;if(!(ca<0)){var oa=(-L+Math.sqrt(ca))/(2*
na);0<oa&&oa<1&&e[N].push(B(oa));L=(-L-Math.sqrt(ca))/(2*na);0<L&&L<1&&e[N].push(B(L))}}}F=Z}else{e[0].push(B.x);e[1].push(B.y)}}}f=Math.min.apply(null,e[0]);k=Math.max.apply(null,e[0])-f;n=Math.min.apply(null,e[1]);e=Math.max.apply(null,e[1])-n;return{x:f,y:n,width:k,height:e}};svgedit.utilities.getBBox=function(e){var f=e||l.geSelectedElements()[0];if(e.nodeType!=1)return null;e=null;var k=f.nodeName;switch(k){case "text":if(f.textContent===""){f.textContent="a";e=f.getBBox();f.textContent=""}else try{e=
f.getBBox()}catch(n){}break;case "path":if(svgedit.browser.supportsPathBBox())try{e=f.getBBox()}catch(F){}else e=svgedit.utilities.getPathBBox(f);break;case "g":case "a":e=a(f);break;default:if(k==="use")e=a(f,true);if(k==="use"){e||(e=f.getBBox());k={};k.width=e.width;k.height=e.height;k.x=e.x+parseFloat(f.getAttribute("x")||0);k.y=e.y+parseFloat(f.getAttribute("y")||0);e=k}else if(~K.indexOf(k))try{e=f.getBBox()}catch(B){f=$(f).closest("foreignObject");if(f.length)try{e=f[0].getBBox()}catch(A){e=
null}else e=null}}if(e)e=svgedit.utilities.bboxToObj(e);return e};svgedit.utilities.getRotationAngle=function(e,f){var k=e||l.getSelectedElements()[0];k=svgedit.transformlist.getTransformList(k);if(!k)return 0;for(var n=k.numberOfItems,F=0;F<n;++F){var B=k.getItem(F);if(B.type==4)return f?B.angle*Math.PI/180:B.angle}return 0};svgedit.utilities.getElem=svgedit.browser.supportsSelectors()?function(e){return G.querySelector("#"+e)}:svgedit.browser.supportsXpath()?function(e){return s.evaluate('svg:svg[@id="svgroot"]//svg:*[@id="'+
e+'"]',v,function(){return"http://www.w3.org/2000/svg"},9,null).singleNodeValue}:function(e){return $(G).find("[id="+e+"]")[0]};svgedit.utilities.assignAttributes=function(e,f,k,n){k||(k=0);svgedit.browser.isOpera()||G.suspendRedraw(k);for(var F in f)if(k=F.substr(0,4)==="xml:"?"http://www.w3.org/XML/1998/namespace":F.substr(0,6)==="xlink:"?"http://www.w3.org/1999/xlink":null)e.setAttributeNS(k,F,f[F]);else n?svgedit.units.setUnitAttr(e,F,f[F]):e.setAttribute(F,f[F]);svgedit.browser.isOpera()||G.unsuspendRedraw(null)};
svgedit.utilities.cleanupElement=function(e){var f=G.suspendRedraw(60),k={"fill-opacity":1,"stop-opacity":1,opacity:1,stroke:"none","stroke-dasharray":"none","stroke-linejoin":"miter","stroke-linecap":"butt","stroke-opacity":1,"stroke-width":1,rx:0,ry:0},n;for(n in k){var F=k[n];e.getAttribute(n)==F&&e.removeAttribute(n)}G.unsuspendRedraw(f)}})();svgedit=svgedit||{};
(function(){if(!svgedit.sanitize)svgedit.sanitize={};var a={};a["http://www.w3.org/1999/xlink"]="xlink";a["http://www.w3.org/XML/1998/namespace"]="xml";a["http://www.w3.org/2000/xmlns/"]="xmlns";a["http://svg-edit.googlecode.com"]="se";a["http://www.w3.org/1999/xhtml"]="xhtml";a["http://www.w3.org/1998/Math/MathML"]="mathml";var K={};$.each(a,function(v,G){K[G]=v});var l={a:["class","clip-path","clip-rule","fill","fill-opacity","fill-rule","filter","id","mask","opacity","stroke","stroke-dasharray",
"stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","style","systemLanguage","transform","xlink:href","xlink:title"],circle:["class","clip-path","clip-rule","cx","cy","fill","fill-opacity","fill-rule","filter","id","mask","opacity","r","requiredFeatures","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","style","systemLanguage","transform"],clipPath:["class",
"clipPathUnits","id"],defs:[],style:["type"],desc:[],ellipse:["class","clip-path","clip-rule","cx","cy","fill","fill-opacity","fill-rule","filter","id","mask","opacity","requiredFeatures","rx","ry","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","style","systemLanguage","transform"],feGaussianBlur:["class","color-interpolation-filters","id","requiredFeatures","stdDeviation"],filter:["class","color-interpolation-filters",
"filterRes","filterUnits","height","id","primitiveUnits","requiredFeatures","width","x","xlink:href","y"],foreignObject:["class","font-size","height","id","opacity","requiredFeatures","style","transform","width","x","y"],g:["class","clip-path","clip-rule","id","display","fill","fill-opacity","fill-rule","filter","mask","opacity","requiredFeatures","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","style","systemLanguage",
"transform","font-family","font-size","font-style","font-weight","text-anchor"],image:["class","clip-path","clip-rule","filter","height","id","mask","opacity","requiredFeatures","style","systemLanguage","transform","width","x","xlink:href","xlink:title","y"],line:["class","clip-path","clip-rule","fill","fill-opacity","fill-rule","filter","id","marker-end","marker-mid","marker-start","mask","opacity","requiredFeatures","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin",
"stroke-miterlimit","stroke-opacity","stroke-width","style","systemLanguage","transform","x1","x2","y1","y2"],linearGradient:["class","id","gradientTransform","gradientUnits","requiredFeatures","spreadMethod","systemLanguage","x1","x2","xlink:href","y1","y2"],marker:["id","class","markerHeight","markerUnits","markerWidth","orient","preserveAspectRatio","refX","refY","systemLanguage","viewBox"],mask:["class","height","id","maskContentUnits","maskUnits","width","x","y"],metadata:["class","id"],path:["class",
"clip-path","clip-rule","d","fill","fill-opacity","fill-rule","filter","id","marker-end","marker-mid","marker-start","mask","opacity","requiredFeatures","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","style","systemLanguage","transform"],pattern:["class","height","id","patternContentUnits","patternTransform","patternUnits","requiredFeatures","style","systemLanguage","viewBox","width","x","xlink:href","y"],polygon:["class",
"clip-path","clip-rule","id","fill","fill-opacity","fill-rule","filter","id","class","marker-end","marker-mid","marker-start","mask","opacity","points","requiredFeatures","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","style","systemLanguage","transform"],polyline:["class","clip-path","clip-rule","id","fill","fill-opacity","fill-rule","filter","marker-end","marker-mid","marker-start","mask","opacity","points",
"requiredFeatures","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","style","systemLanguage","transform"],radialGradient:["class","cx","cy","fx","fy","gradientTransform","gradientUnits","id","r","requiredFeatures","spreadMethod","systemLanguage","xlink:href"],rect:["class","clip-path","clip-rule","fill","fill-opacity","fill-rule","filter","height","id","mask","opacity","requiredFeatures","rx","ry","stroke","stroke-dasharray",
"stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","style","systemLanguage","transform","width","x","y"],stop:["class","id","offset","requiredFeatures","stop-color","stop-opacity","style","systemLanguage"],svg:["class","clip-path","clip-rule","filter","id","height","mask","preserveAspectRatio","requiredFeatures","style","systemLanguage","viewBox","width","x","xmlns","xmlns:se","xmlns:xlink","y"],"switch":["class","id","requiredFeatures","systemLanguage"],
symbol:["class","fill","fill-opacity","fill-rule","filter","font-family","font-size","font-style","font-weight","id","opacity","preserveAspectRatio","requiredFeatures","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","style","systemLanguage","transform","viewBox"],text:["class","clip-path","clip-rule","fill","fill-opacity","fill-rule","filter","font-family","font-size","font-style","font-weight","id","mask","opacity",
"requiredFeatures","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","style","systemLanguage","text-anchor","transform","x","xml:space","y"],textPath:["class","id","method","requiredFeatures","spacing","startOffset","style","systemLanguage","transform","xlink:href"],title:[],tspan:["class","clip-path","clip-rule","dx","dy","fill","fill-opacity","fill-rule","filter","font-family","font-size","font-style","font-weight",
"id","mask","opacity","requiredFeatures","rotate","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","style","systemLanguage","text-anchor","textLength","transform","x","xml:space","y"],use:["class","clip-path","clip-rule","fill","fill-opacity","fill-rule","filter","height","id","mask","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width",
"style","transform","width","x","xlink:href","y"],annotation:["encoding"],"annotation-xml":["encoding"],maction:["actiontype","other","selection"],math:["class","id","display","xmlns"],menclose:["notation"],merror:[],mfrac:["linethickness"],mi:["mathvariant"],mmultiscripts:[],mn:[],mo:["fence","lspace","maxsize","minsize","rspace","stretchy"],mover:[],mpadded:["lspace","width","height","depth","voffset"],mphantom:[],mprescripts:[],mroot:[],mrow:["xlink:href","xlink:type","xmlns:xlink"],mspace:["depth",
"height","width"],msqrt:[],mstyle:["displaystyle","mathbackground","mathcolor","mathvariant","scriptlevel"],msub:[],msubsup:[],msup:[],mtable:["align","columnalign","columnlines","columnspacing","displaystyle","equalcolumns","equalrows","frame","rowalign","rowlines","rowspacing","width"],mtd:["columnalign","columnspan","rowalign","rowspan"],mtext:[],mtr:["columnalign","rowalign"],munder:[],munderover:[],none:[],semantics:[]},s={};$.each(l,function(v,G){var e={};$.each(G,function(f,k){if(k.indexOf(":")>=
0){var n=k.split(":");e[n[1]]=K[n[0]]}else e[k]=k=="xmlns"?"http://www.w3.org/2000/xmlns/":null});s[v]=e});svgedit.sanitize.getNSMap=function(){return a};svgedit.sanitize.sanitizeSvg=function(v){if(v.nodeType==3){v.nodeValue=v.nodeValue.replace(/^\s+|\s+$/g,"");v.nodeValue.length||v.parentNode.removeChild(v)}if(v.nodeType==1){var G=v.parentNode;if(v.ownerDocument&&G){var e=l[v.nodeName],f=s[v.nodeName];if(e!=undefined){for(var k=[],n=v.attributes.length;n--;){var F=v.attributes.item(n),B=F.nodeName,
A=F.localName,O=F.namespaceURI;if(!(f.hasOwnProperty(A)&&O==f[A]&&O!="http://www.w3.org/2000/xmlns/")&&!(O=="http://www.w3.org/2000/xmlns/"&&a[F.nodeValue])){B.indexOf("se:")==0&&k.push([B,F.nodeValue]);v.removeAttributeNS(O,A)}if(svgedit.browser.isGecko())switch(B){case "transform":case "gradientTransform":case "patternTransform":A=F.nodeValue.replace(/(\d)-/g,"$1 -");v.setAttribute(B,A)}if(B=="style"){F=F.nodeValue.split(";");for(B=F.length;B--;){A=F[B].split(":");e.indexOf(A[0])>=0&&v.setAttribute(A[0],
A[1])}v.removeAttribute("style")}}$.each(k,function(Z,N){v.setAttributeNS("http://svg-edit.googlecode.com",N[0],N[1])});if((n=svgedit.utilities.getHref(v))&&["filter","linearGradient","pattern","radialGradient","textPath","use"].indexOf(v.nodeName)>=0)if(n[0]!="#"){svgedit.utilities.setHref(v,"");v.removeAttributeNS("http://www.w3.org/1999/xlink","href")}if(v.nodeName=="use"&&!svgedit.utilities.getHref(v))G.removeChild(v);else{$.each(["clip-path","fill","filter","marker-end","marker-mid","marker-start",
"mask","stroke"],function(Z,N){var L=v.getAttribute(N);if(L)if((L=svgedit.utilities.getUrlFromAttr(L))&&L[0]!=="#"){v.setAttribute(N,"");v.removeAttribute(N)}});for(n=v.childNodes.length;n--;)svgedit.sanitize.sanitizeSvg(v.childNodes.item(n))}}else{for(e=[];v.hasChildNodes();)e.push(G.insertBefore(v.firstChild,v));G.removeChild(v);for(n=e.length;n--;)svgedit.sanitize.sanitizeSvg(e[n])}}}}})();svgedit=svgedit||{};
(function(){if(!svgedit.history)svgedit.history={};svgedit.history.HistoryEventTypes={BEFORE_APPLY:"before_apply",AFTER_APPLY:"after_apply",BEFORE_UNAPPLY:"before_unapply",AFTER_UNAPPLY:"after_unapply"};svgedit.history.MoveElementCommand=function(a,K,l,s){this.elem=a;this.text=s?"Move "+a.tagName+" to "+s:"Move "+a.tagName;this.oldNextSibling=K;this.oldParent=l;this.newNextSibling=a.nextSibling;this.newParent=a.parentNode};svgedit.history.MoveElementCommand.type=function(){return"svgedit.history.MoveElementCommand"};svgedit.history.MoveElementCommand.prototype.type=
svgedit.history.MoveElementCommand.type;svgedit.history.MoveElementCommand.prototype.getText=function(){return this.text};svgedit.history.MoveElementCommand.prototype.apply=function(a){a&&a.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_APPLY,this);this.elem=this.newParent.insertBefore(this.elem,this.newNextSibling);a&&a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY,this)};svgedit.history.MoveElementCommand.prototype.unapply=function(a){a&&a.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY,
this);this.elem=this.oldParent.insertBefore(this.elem,this.oldNextSibling);a&&a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_UNAPPLY,this)};svgedit.history.MoveElementCommand.prototype.elements=function(){return[this.elem]};svgedit.history.InsertElementCommand=function(a,K){this.elem=a;this.text=K||"Create "+a.tagName;this.parent=a.parentNode;this.nextSibling=this.elem.nextSibling};svgedit.history.InsertElementCommand.type=function(){return"svgedit.history.InsertElementCommand"};svgedit.history.InsertElementCommand.prototype.type=
svgedit.history.InsertElementCommand.type;svgedit.history.InsertElementCommand.prototype.getText=function(){return this.text};svgedit.history.InsertElementCommand.prototype.apply=function(a){a&&a.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_APPLY,this);this.elem=this.parent.insertBefore(this.elem,this.nextSibling);a&&a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY,this)};svgedit.history.InsertElementCommand.prototype.unapply=function(a){a&&a.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY,
this);this.parent=this.elem.parentNode;this.elem=this.elem.parentNode.removeChild(this.elem);a&&a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_UNAPPLY,this)};svgedit.history.InsertElementCommand.prototype.elements=function(){return[this.elem]};svgedit.history.RemoveElementCommand=function(a,K,l,s){this.elem=a;this.text=s||"Delete "+a.tagName;this.nextSibling=K;this.parent=l;svgedit.transformlist.removeElementFromListMap(a)};svgedit.history.RemoveElementCommand.type=function(){return"svgedit.history.RemoveElementCommand"};
svgedit.history.RemoveElementCommand.prototype.type=svgedit.history.RemoveElementCommand.type;svgedit.history.RemoveElementCommand.prototype.getText=function(){return this.text};svgedit.history.RemoveElementCommand.prototype.apply=function(a){a&&a.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_APPLY,this);svgedit.transformlist.removeElementFromListMap(this.elem);this.parent=this.elem.parentNode;this.elem=this.parent.removeChild(this.elem);a&&a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY,
this)};svgedit.history.RemoveElementCommand.prototype.unapply=function(a){a&&a.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY,this);svgedit.transformlist.removeElementFromListMap(this.elem);this.nextSibling==null&&window.console&&console.log("Error: reference element was lost");this.parent.insertBefore(this.elem,this.nextSibling);a&&a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_UNAPPLY,this)};svgedit.history.RemoveElementCommand.prototype.elements=function(){return[this.elem]};
svgedit.history.ChangeElementCommand=function(a,K,l){this.elem=a;this.text=l?"Change "+a.tagName+" "+l:"Change "+a.tagName;this.newValues={};this.oldValues=K;for(var s in K)this.newValues[s]=s=="#text"?a.textContent:s=="#href"?svgedit.utilities.getHref(a):a.getAttribute(s)};svgedit.history.ChangeElementCommand.type=function(){return"svgedit.history.ChangeElementCommand"};svgedit.history.ChangeElementCommand.prototype.type=svgedit.history.ChangeElementCommand.type;svgedit.history.ChangeElementCommand.prototype.getText=
function(){return this.text};svgedit.history.ChangeElementCommand.prototype.apply=function(a){a&&a.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_APPLY,this);var K=false,l;for(l in this.newValues){if(this.newValues[l])if(l=="#text")this.elem.textContent=this.newValues[l];else l=="#href"?svgedit.utilities.setHref(this.elem,this.newValues[l]):this.elem.setAttribute(l,this.newValues[l]);else if(l=="#text")this.elem.textContent="";else{this.elem.setAttribute(l,"");this.elem.removeAttribute(l)}if(l==
"transform")K=true}if(!K)if(K=svgedit.utilities.getRotationAngle(this.elem)){l=elem.getBBox();K=["rotate(",K," ",l.x+l.width/2,",",l.y+l.height/2,")"].join("");K!=elem.getAttribute("transform")&&elem.setAttribute("transform",K)}a&&a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY,this);return true};svgedit.history.ChangeElementCommand.prototype.unapply=function(a){a&&a.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY,this);var K=false,l;for(l in this.oldValues){if(this.oldValues[l])if(l==
"#text")this.elem.textContent=this.oldValues[l];else l=="#href"?svgedit.utilities.setHref(this.elem,this.oldValues[l]):this.elem.setAttribute(l,this.oldValues[l]);else if(l=="#text")this.elem.textContent="";else this.elem.removeAttribute(l);if(l=="transform")K=true}if(!K)if(K=svgedit.utilities.getRotationAngle(this.elem)){l=elem.getBBox();K=["rotate(",K," ",l.x+l.width/2,",",l.y+l.height/2,")"].join("");K!=elem.getAttribute("transform")&&elem.setAttribute("transform",K)}svgedit.transformlist.removeElementFromListMap(this.elem);
a&&a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_UNAPPLY,this);return true};svgedit.history.ChangeElementCommand.prototype.elements=function(){return[this.elem]};svgedit.history.BatchCommand=function(a){this.text=a||"Batch Command";this.stack=[]};svgedit.history.BatchCommand.type=function(){return"svgedit.history.BatchCommand"};svgedit.history.BatchCommand.prototype.type=svgedit.history.BatchCommand.type;svgedit.history.BatchCommand.prototype.getText=function(){return this.text};svgedit.history.BatchCommand.prototype.apply=
function(a){a&&a.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_APPLY,this);for(var K=this.stack.length,l=0;l<K;++l)this.stack[l].apply(a);a&&a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_APPLY,this)};svgedit.history.BatchCommand.prototype.unapply=function(a){a&&a.handleHistoryEvent(svgedit.history.HistoryEventTypes.BEFORE_UNAPPLY,this);for(var K=this.stack.length-1;K>=0;K--)this.stack[K].unapply(a);a&&a.handleHistoryEvent(svgedit.history.HistoryEventTypes.AFTER_UNAPPLY,
this)};svgedit.history.BatchCommand.prototype.elements=function(){for(var a=[],K=this.stack.length;K--;)for(var l=this.stack[K].elements(),s=l.length;s--;)a.indexOf(l[s])==-1&&a.push(l[s]);return a};svgedit.history.BatchCommand.prototype.addSubCommand=function(a){this.stack.push(a)};svgedit.history.BatchCommand.prototype.isEmpty=function(){return this.stack.length==0};svgedit.history.UndoManager=function(a){this.handler_=a||null;this.undoStackPointer=0;this.undoStack=[];this.undoChangeStackPointer=
-1;this.undoableChangeStack=[]};svgedit.history.UndoManager.prototype.resetUndoStack=function(){this.undoStack=[];this.undoStackPointer=0};svgedit.history.UndoManager.prototype.getUndoStackSize=function(){return this.undoStackPointer};svgedit.history.UndoManager.prototype.getRedoStackSize=function(){return this.undoStack.length-this.undoStackPointer};svgedit.history.UndoManager.prototype.getNextUndoCommandText=function(){return this.undoStackPointer>0?this.undoStack[this.undoStackPointer-1].getText():
""};svgedit.history.UndoManager.prototype.getNextRedoCommandText=function(){return this.undoStackPointer<this.undoStack.length?this.undoStack[this.undoStackPointer].getText():""};svgedit.history.UndoManager.prototype.undo=function(){this.undoStackPointer>0&&this.undoStack[--this.undoStackPointer].unapply(this.handler_)};svgedit.history.UndoManager.prototype.redo=function(){this.undoStackPointer<this.undoStack.length&&this.undoStack.length>0&&this.undoStack[this.undoStackPointer++].apply(this.handler_)};
svgedit.history.UndoManager.prototype.addCommandToHistory=function(a){if(this.undoStackPointer<this.undoStack.length&&this.undoStack.length>0)this.undoStack=this.undoStack.splice(0,this.undoStackPointer);this.undoStack.push(a);this.undoStackPointer=this.undoStack.length};svgedit.history.UndoManager.prototype.beginUndoableChange=function(a,K){for(var l=++this.undoChangeStackPointer,s=K.length,v=Array(s),G=Array(s);s--;){var e=K[s];if(e!=null){G[s]=e;v[s]=e.getAttribute(a)}}this.undoableChangeStack[l]=
{attrName:a,oldValues:v,elements:G}};svgedit.history.UndoManager.prototype.finishUndoableChange=function(){for(var a=this.undoChangeStackPointer--,K=this.undoableChangeStack[a],l=K.elements.length,s=K.attrName,v=new svgedit.history.BatchCommand("Change "+s);l--;){var G=K.elements[l];if(G!=null){var e={};e[s]=K.oldValues[l];e[s]!=G.getAttribute(s)&&v.addSubCommand(new svgedit.history.ChangeElementCommand(G,e,s))}}this.undoableChangeStack[a]=null;return v}})();svgedit=svgedit||{};
(function(){if(!svgedit.select)svgedit.select={};var a,K,l,s;svgedit.browser.isTouch()?s=10:s=4;svgedit.select.Selector=function(v,G){this.id=v;this.selectedElement=G;this.locked=true;this.selectorGroup=a.createSVGElement({element:"g",attr:{id:"selectorGroup"+this.id}});this.selectorRect=this.selectorGroup.appendChild(a.createSVGElement({element:"path",attr:{id:"selectedBox"+this.id,fill:"none",stroke:"#22C","stroke-width":"1","stroke-dasharray":"5,5",style:"pointer-events:none"}}));this.gripCoords=
{nw:null,n:null,ne:null,e:null,se:null,s:null,sw:null,w:null};this.reset(this.selectedElement)};svgedit.select.Selector.prototype.reset=function(v){this.locked=true;this.selectedElement=v;this.resize();this.selectorGroup.setAttribute("display","inline")};svgedit.select.Selector.prototype.updateGripCursors=function(v){var G=[];v=Math.round(v/45);if(v<0)v+=8;for(var e in l.selectorGrips)G.push(e);for(;v>0;){G.push(G.shift());v--}v=0;for(e in l.selectorGrips){l.selectorGrips[e].setAttribute("style",
"cursor:"+G[v]+"-resize");v++}};svgedit.select.Selector.prototype.showGrips=function(v){l.selectorGripsGroup.setAttribute("display",v?"inline":"none");var G=this.selectedElement;this.hasGrips=v;if(G&&v){this.selectorGroup.appendChild(l.selectorGripsGroup);this.updateGripCursors(svgedit.utilities.getRotationAngle(G))}};svgedit.select.Selector.prototype.resize=function(){var v=this.selectorRect,G=l,e=G.selectorGrips,f=this.selectedElement,k=f.getAttribute("stroke-width"),n=a.currentZoom(),F=1/n;if(f.getAttribute("stroke")!==
"none"&&!isNaN(k))F+=k/2;var B=f.tagName;if(B==="text")F+=2/n;k=svgedit.transformlist.getTransformList(f);k=svgedit.math.transformListToTransform(k).matrix;k.e*=n;k.f*=n;var A=svgedit.utilities.getBBox(f);if(B==="g"&&!$.data(f,"gsvg"))if(B=a.getStrokedBBox(f.childNodes))A=B;B=A.x;var O=A.y,Z=A.width;A=A.height;F*=n;n=svgedit.math.transformBox(B*n,O*n,Z*n,A*n,k);k=n.aabox;B=k.x-F;O=k.y-F;Z=k.width+F*2;var N=k.height+F*2;k=B+Z/2;A=O+N/2;if(f=svgedit.utilities.getRotationAngle(f)){B=a.svgRoot().createSVGTransform();
B.setRotate(-f,k,A);B=B.matrix;n.tl=svgedit.math.transformPoint(n.tl.x,n.tl.y,B);n.tr=svgedit.math.transformPoint(n.tr.x,n.tr.y,B);n.bl=svgedit.math.transformPoint(n.bl.x,n.bl.y,B);n.br=svgedit.math.transformPoint(n.br.x,n.br.y,B);B=n.tl;Z=B.x;N=B.y;var L=B.x,na=B.y;B=Math.min;O=Math.max;Z=B(Z,B(n.tr.x,B(n.bl.x,n.br.x)))-F;N=B(N,B(n.tr.y,B(n.bl.y,n.br.y)))-F;L=O(L,O(n.tr.x,O(n.bl.x,n.br.x)))+F;na=O(na,O(n.tr.y,O(n.bl.y,n.br.y)))+F;B=Z;O=N;Z=L-Z;N=na-N}F=a.svgRoot().suspendRedraw(100);v.setAttribute("d",
"M"+B+","+O+" L"+(B+Z)+","+O+" "+(B+Z)+","+(O+N)+" "+B+","+(O+N)+"z");this.selectorGroup.setAttribute("transform",f?"rotate("+[f,k,A].join(",")+")":"");this.gripCoords={nw:[B,O],ne:[B+Z,O],sw:[B,O+N],se:[B+Z,O+N],n:[B+Z/2,O],w:[B,O+N/2],e:[B+Z,O+N/2],s:[B+Z/2,O+N]};for(var ca in this.gripCoords){v=this.gripCoords[ca];e[ca].setAttribute("cx",v[0]);e[ca].setAttribute("cy",v[1])}G.rotateGripConnector.setAttribute("x1",B+Z/2);G.rotateGripConnector.setAttribute("y1",O);G.rotateGripConnector.setAttribute("x2",
B+Z/2);G.rotateGripConnector.setAttribute("y2",O-s*5);G.rotateGrip.setAttribute("cx",B+Z/2);G.rotateGrip.setAttribute("cy",O-s*5);a.svgRoot().unsuspendRedraw(F)};svgedit.select.SelectorManager=function(){this.rubberBandBox=this.selectorParentGroup=null;this.selectors=[];this.selectorMap={};this.selectorGrips={nw:null,n:null,ne:null,e:null,se:null,s:null,sw:null,w:null};this.rotateGrip=this.rotateGripConnector=this.selectorGripsGroup=null;this.initGroup()};svgedit.select.SelectorManager.prototype.initGroup=
function(){this.selectorParentGroup&&this.selectorParentGroup.parentNode&&this.selectorParentGroup.parentNode.removeChild(this.selectorParentGroup);this.selectorParentGroup=a.createSVGElement({element:"g",attr:{id:"selectorParentGroup"}});this.selectorGripsGroup=a.createSVGElement({element:"g",attr:{display:"none"}});this.selectorParentGroup.appendChild(this.selectorGripsGroup);a.svgRoot().appendChild(this.selectorParentGroup);this.selectorMap={};this.selectors=[];this.rubberBandBox=null;for(var v in this.selectorGrips){var G=
a.createSVGElement({element:"circle",attr:{id:"selectorGrip_resize_"+v,fill:"#22C",r:s,style:"cursor:"+v+"-resize","stroke-width":2,"pointer-events":"all"}});$.data(G,"dir",v);$.data(G,"type","resize");this.selectorGrips[v]=this.selectorGripsGroup.appendChild(G)}this.rotateGripConnector=this.selectorGripsGroup.appendChild(a.createSVGElement({element:"line",attr:{id:"selectorGrip_rotateconnector",stroke:"#22C","stroke-width":"1"}}));this.rotateGrip=this.selectorGripsGroup.appendChild(a.createSVGElement({element:"circle",
attr:{id:"selectorGrip_rotate",fill:"lime",r:s,stroke:"#22C","stroke-width":2,style:"cursor:url("+K.imgPath+"rotate.png) 12 12, auto;"}}));$.data(this.rotateGrip,"type","rotate");if(!$("#canvasBackground").length){v=K.dimensions;v=a.createSVGElement({element:"svg",attr:{id:"canvasBackground",width:v[0],height:v[1],x:0,y:0,overflow:svgedit.browser.isWebkit()?"none":"visible",style:"pointer-events:none"}});G=a.createSVGElement({element:"rect",attr:{width:"100%",height:"100%",x:0,y:0,"stroke-width":1,
stroke:"#000",fill:"#FFF",style:"pointer-events:none"}});v.appendChild(G);a.svgRoot().insertBefore(v,a.svgContent())}};svgedit.select.SelectorManager.prototype.requestSelector=function(v){if(v==null)return null;var G=this.selectors.length;if(typeof this.selectorMap[v.id]=="object"){this.selectorMap[v.id].locked=true;return this.selectorMap[v.id]}for(var e=0;e<G;++e)if(this.selectors[e]&&!this.selectors[e].locked){this.selectors[e].locked=true;this.selectors[e].reset(v);this.selectorMap[v.id]=this.selectors[e];
return this.selectors[e]}this.selectors[G]=new svgedit.select.Selector(G,v);this.selectorParentGroup.appendChild(this.selectors[G].selectorGroup);this.selectorMap[v.id]=this.selectors[G];return this.selectors[G]};svgedit.select.SelectorManager.prototype.releaseSelector=function(v){if(v!=null)for(var G=this.selectors.length,e=this.selectorMap[v.id],f=0;f<G;++f)if(this.selectors[f]&&this.selectors[f]==e){e.locked==false&&console.log("WARNING! selector was released but was already unlocked");delete this.selectorMap[v.id];
e.locked=false;e.selectedElement=null;e.showGrips(false);try{e.selectorGroup.setAttribute("display","none")}catch(k){}break}};svgedit.select.SelectorManager.prototype.getRubberBandBox=function(){if(!this.rubberBandBox)this.rubberBandBox=this.selectorParentGroup.appendChild(a.createSVGElement({element:"rect",attr:{id:"selectorRubberBand",fill:"#22C","fill-opacity":0.15,stroke:"#22C","stroke-width":0.5,display:"none",style:"pointer-events:none"}}));return this.rubberBandBox};svgedit.select.init=function(v,
G){K=v;a=G;l=new svgedit.select.SelectorManager};svgedit.select.getSelectorManager=function(){return l}})();svgedit=svgedit||{};
(function(){if(!svgedit.draw)svgedit.draw={};var a="a,circle,ellipse,foreignObject,g,image,line,path,polygon,polyline,rect,svg,text,tspan,use".split(","),K={LET_DOCUMENT_DECIDE:0,ALWAYS_RANDOMIZE:1,NEVER_RANDOMIZE:2},l=K.LET_DOCUMENT_DECIDE;svgedit.draw.Layer=function(s,v){this.name_=s;this.group_=v};svgedit.draw.Layer.prototype.getName=function(){return this.name_};svgedit.draw.Layer.prototype.getGroup=function(){return this.group_};svgedit.draw.randomizeIds=function(s,v){l=s==false?K.NEVER_RANDOMIZE:
K.ALWAYS_RANDOMIZE;if(l==K.ALWAYS_RANDOMIZE&&!v.getNonce())v.setNonce(Math.floor(Math.random()*100001));else l==K.NEVER_RANDOMIZE&&v.getNonce()&&v.clearNonce()};svgedit.draw.Drawing=function(s,v){if(!s||!s.tagName||!s.namespaceURI||s.tagName!="svg"||s.namespaceURI!="http://www.w3.org/2000/svg")throw"Error: svgedit.draw.Drawing instance initialized without a <svg> element";this.svgElem_=s;this.obj_num=0;this.idPrefix=v||"svg_";this.releasedNums=[];this.all_layers=[];this.current_layer=null;this.nonce_=
"";var G=this.svgElem_.getAttributeNS("http://svg-edit.googlecode.com","nonce");if(G&&l!=K.NEVER_RANDOMIZE)this.nonce_=G;else l==K.ALWAYS_RANDOMIZE&&this.setNonce(Math.floor(Math.random()*100001))};svgedit.draw.Drawing.prototype.getElem_=function(s){return this.svgElem_.querySelector?this.svgElem_.querySelector("#"+s):$(this.svgElem_).find("[id="+s+"]")[0]};svgedit.draw.Drawing.prototype.getSvgElem=function(){return this.svgElem_};svgedit.draw.Drawing.prototype.getNonce=function(){return this.nonce_};
svgedit.draw.Drawing.prototype.setNonce=function(s){this.svgElem_.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:se","http://svg-edit.googlecode.com");this.svgElem_.setAttributeNS("http://svg-edit.googlecode.com","se:nonce",s);this.nonce_=s};svgedit.draw.Drawing.prototype.clearNonce=function(){this.nonce_=""};svgedit.draw.Drawing.prototype.getId=function(){return this.nonce_?this.idPrefix+this.nonce_+"_"+this.obj_num:this.idPrefix+this.obj_num};svgedit.draw.Drawing.prototype.getNextId=function(){var s=
this.obj_num,v=false;if(this.releasedNums.length>0){this.obj_num=this.releasedNums.pop();v=true}else this.obj_num++;for(var G=this.getId();this.getElem_(G);){if(v){this.obj_num=s;v=false}this.obj_num++;G=this.getId()}if(v)this.obj_num=s;return G};svgedit.draw.Drawing.prototype.releaseId=function(s){var v=this.idPrefix+(this.nonce_?this.nonce_+"_":"");if(typeof s!="string"||s.indexOf(v)!=0)return false;s=parseInt(s.substr(v.length));if(typeof s!="number"||s<=0||this.releasedNums.indexOf(s)!=-1)return false;
this.releasedNums.push(s);return true};svgedit.draw.Drawing.prototype.getNumLayers=function(){return this.all_layers.length};svgedit.draw.Drawing.prototype.hasLayer=function(s){for(var v=0;v<this.getNumLayers();v++)if(this.all_layers[v][0]==s)return true;return false};svgedit.draw.Drawing.prototype.getLayerName=function(s){if(s>=0&&s<this.getNumLayers())return this.all_layers[s][0];return""};svgedit.draw.Drawing.prototype.getCurrentLayer=function(){return this.current_layer};svgedit.draw.Drawing.prototype.getCurrentLayerName=
function(){for(var s=0;s<this.getNumLayers();++s)if(this.all_layers[s][1]==this.current_layer)return this.getLayerName(s);return""};svgedit.draw.Drawing.prototype.setCurrentLayer=function(s){for(var v=0;v<this.getNumLayers();++v)if(s==this.getLayerName(v)){if(this.current_layer!=this.all_layers[v][1]){this.current_layer.setAttribute("style","pointer-events:none");this.current_layer=this.all_layers[v][1];this.current_layer.setAttribute("style","pointer-events:all")}return true}return false};svgedit.draw.Drawing.prototype.deleteCurrentLayer=
function(){if(this.current_layer&&this.getNumLayers()>1){var s=this.current_layer.parentNode.removeChild(this.current_layer);this.identifyLayers();return s}return null};svgedit.draw.Drawing.prototype.identifyLayers=function(){this.all_layers=[];for(var s=this.svgElem_.childNodes.length,v=[],G=[],e=null,f=false,k=0;k<s;++k){var n=this.svgElem_.childNodes.item(k);if(n&&n.nodeType==1)if(n.tagName=="g"){f=true;var F=$("title",n).text();if(!F&&svgedit.browser.isOpera()&&n.querySelectorAll)F=$(n.querySelectorAll("title")).text();
if(F){G.push(F);this.all_layers.push([F,n]);e=n;svgedit.utilities.walkTree(n,function(B){B.setAttribute("style","pointer-events:inherit")});e.setAttribute("style","pointer-events:none")}else v.push(n)}else if(~a.indexOf(n.nodeName)){svgedit.utilities.getBBox(n);v.push(n)}}s=this.svgElem_.ownerDocument;if(v.length>0||!f){for(k=1;G.indexOf("Layer "+k)>=0;)k++;G="Layer "+k;e=s.createElementNS("http://www.w3.org/2000/svg","g");f=s.createElementNS("http://www.w3.org/2000/svg","title");f.textContent=G;
e.appendChild(f);for(f=0;f<v.length;++f)e.appendChild(v[f]);this.svgElem_.appendChild(e);this.all_layers.push([G,e])}svgedit.utilities.walkTree(e,function(B){B.setAttribute("style","pointer-events:inherit")});this.current_layer=e;this.current_layer.setAttribute("style","pointer-events:all")};svgedit.draw.Drawing.prototype.createLayer=function(s){var v=this.svgElem_.ownerDocument,G=v.createElementNS("http://www.w3.org/2000/svg","g");v=v.createElementNS("http://www.w3.org/2000/svg","title");v.textContent=
s;G.appendChild(v);this.svgElem_.appendChild(G);this.identifyLayers();return G};svgedit.draw.Drawing.prototype.getLayerVisibility=function(s){for(var v=null,G=0;G<this.getNumLayers();++G)if(this.getLayerName(G)==s){v=this.all_layers[G][1];break}if(!v)return false;return v.getAttribute("display")!="none"};svgedit.draw.Drawing.prototype.setLayerVisibility=function(s,v){if(typeof v!="boolean")return null;for(var G=null,e=0;e<this.getNumLayers();++e)if(this.getLayerName(e)==s){G=this.all_layers[e][1];
break}if(!G)return null;G.getAttribute("display");G.setAttribute("display",v?"inline":"none");return G};svgedit.draw.Drawing.prototype.getLayerOpacity=function(s){for(var v=0;v<this.getNumLayers();++v)if(this.getLayerName(v)==s){(s=this.all_layers[v][1].getAttribute("opacity"))||(s="1.0");return parseFloat(s)}return null};svgedit.draw.Drawing.prototype.setLayerOpacity=function(s,v){if(!(typeof v!="number"||v<0||v>1))for(var G=0;G<this.getNumLayers();++G)if(this.getLayerName(G)==s){this.all_layers[G][1].setAttribute("opacity",
v);break}}})();svgedit=svgedit||{};
(function(){if(!svgedit.path)svgedit.path={};var a={pathNodeTooltip:"Drag node to move it. Double-click node to change segment type",pathCtrlPtTooltip:"Drag control point to adjust curve properties"},K={2:["x","y"],4:["x","y"],6:["x","y","x1","y1","x2","y2"],8:["x","y","x1","y1"],10:["x","y","r1","r2","angle","largeArcFlag","sweepFlag"],12:["x"],14:["y"],16:["x","y","x2","y2"],18:["x","y"]},l=[],s=true,v={};svgedit.path.setLinkControlPoints=function(f){s=f};var G=svgedit.path.path=null;svgedit.path.init=
function(f){G=f;l=[0,"ClosePath"];$.each(["Moveto","Lineto","CurvetoCubic","CurvetoQuadratic","Arc","LinetoHorizontal","LinetoVertical","CurvetoCubicSmooth","CurvetoQuadraticSmooth"],function(k,n){l.push(n+"Abs");l.push(n+"Rel")})};svgedit.path.insertItemBefore=function(f,k,n){f=f.pathSegList;if(svgedit.browser.supportsPathInsertItemBefore())f.insertItemBefore(k,n);else{for(var F=f.numberOfItems,B=[],A=0;A<F;A++){var O=f.getItem(A);B.push(O)}f.clear();for(A=0;A<F;A++){A==n&&f.appendItem(k);f.appendItem(B[A])}}};
svgedit.path.ptObjToArr=function(f,k){for(var n=K[f],F=n.length,B=Array(F),A=0;A<F;A++)B[A]=k[n[A]];return B};svgedit.path.getGripPt=function(f,k){var n={x:k?k.x:f.item.x,y:k?k.y:f.item.y},F=f.path;if(F.matrix)n=svgedit.math.transformPoint(n.x,n.y,F.matrix);n.x*=G.getCurrentZoom();n.y*=G.getCurrentZoom();return n};svgedit.path.getPointFromGrip=function(f,k){var n={x:f.x,y:f.y};if(k.matrix){f=svgedit.math.transformPoint(n.x,n.y,k.imatrix);n.x=f.x;n.y=f.y}n.x/=G.getCurrentZoom();n.y/=G.getCurrentZoom();
return n};svgedit.path.addPointGrip=function(f,k,n){var F=svgedit.path.getGripContainer(),B=svgedit.utilities.getElem("pathpointgrip_"+f);if(!B){B=document.createElementNS("http://www.w3.org/2000/svg","circle");svgedit.utilities.assignAttributes(B,{id:"pathpointgrip_"+f,display:"none",r:4,fill:"#0FF",stroke:"#00F","stroke-width":2,cursor:"move",style:"pointer-events:all","xlink:title":a.pathNodeTooltip});B=F.appendChild(B);$("#pathpointgrip_"+f).dblclick(function(){svgedit.path.path&&svgedit.path.path.setSegType()})}k&&
n&&svgedit.utilities.assignAttributes(B,{cx:k,cy:n,display:"inline"});return B};svgedit.path.getGripContainer=function(){var f=svgedit.utilities.getElem("pathpointgrip_container");if(!f){f=svgedit.utilities.getElem("selectorParentGroup").appendChild(document.createElementNS("http://www.w3.org/2000/svg","g"));f.id="pathpointgrip_container"}return f};svgedit.path.addCtrlGrip=function(f){var k=svgedit.utilities.getElem("ctrlpointgrip_"+f);if(k)return k;k=document.createElementNS("http://www.w3.org/2000/svg",
"circle");svgedit.utilities.assignAttributes(k,{id:"ctrlpointgrip_"+f,display:"none",r:4,fill:"#0FF",stroke:"#55F","stroke-width":1,cursor:"move",style:"pointer-events:all","xlink:title":a.pathCtrlPtTooltip});svgedit.path.getGripContainer().appendChild(k);return k};svgedit.path.getCtrlLine=function(f){var k=svgedit.utilities.getElem("ctrlLine_"+f);if(k)return k;k=document.createElementNS("http://www.w3.org/2000/svg","line");svgedit.utilities.assignAttributes(k,{id:"ctrlLine_"+f,stroke:"#555","stroke-width":1,
style:"pointer-events:none"});svgedit.path.getGripContainer().appendChild(k);return k};svgedit.path.getPointGrip=function(f,k){var n=svgedit.path.addPointGrip(f.index);if(k){var F=svgedit.path.getGripPt(f);svgedit.utilities.assignAttributes(n,{cx:F.x,cy:F.y,display:"inline"})}return n};svgedit.path.getControlPoints=function(f){var k=f.item,n=f.index;if(!("x1"in k)||!("x2"in k))return null;var F={};svgedit.path.getGripContainer();for(var B=[svgedit.path.path.segs[n-1].item,k],A=1;A<3;A++){var O=n+
"c"+A,Z=F["c"+A+"_line"]=svgedit.path.getCtrlLine(O),N=svgedit.path.getGripPt(f,{x:k["x"+A],y:k["y"+A]}),L=svgedit.path.getGripPt(f,{x:B[A-1].x,y:B[A-1].y});svgedit.utilities.assignAttributes(Z,{x1:N.x,y1:N.y,x2:L.x,y2:L.y,display:"inline"});F["c"+A+"_line"]=Z;pointGrip=F["c"+A]=svgedit.path.addCtrlGrip(O);svgedit.utilities.assignAttributes(pointGrip,{cx:N.x,cy:N.y,display:"inline"});F["c"+A]=pointGrip}return F};svgedit.path.replacePathSeg=function(f,k,n,F){F=F||svgedit.path.path.elem;f=F["createSVGPathSeg"+
l[f]].apply(F,n);if(svgedit.browser.supportsPathReplaceItem())F.pathSegList.replaceItem(f,k);else{n=F.pathSegList;F=n.numberOfItems;for(var B=[],A=0;A<F;A++){var O=n.getItem(A);B.push(O)}n.clear();for(A=0;A<F;A++)A==k?n.appendItem(f):n.appendItem(B[A])}};svgedit.path.getSegSelector=function(f,k){var n=f.index,F=svgedit.utilities.getElem("segline_"+n);if(!F){var B=svgedit.path.getGripContainer();F=document.createElementNS("http://www.w3.org/2000/svg","path");svgedit.utilities.assignAttributes(F,{id:"segline_"+
n,display:"none",fill:"none",stroke:"#0FF","stroke-width":2,style:"pointer-events:none",d:"M0,0 0,0"});B.appendChild(F)}if(k){n=f.prev;if(!n){F.setAttribute("display","none");return F}n=svgedit.path.getGripPt(n);svgedit.path.replacePathSeg(2,0,[n.x,n.y],F);B=svgedit.path.ptObjToArr(f.type,f.item,true);for(var A=0;A<B.length;A+=2){n=svgedit.path.getGripPt(f,{x:B[A],y:B[A+1]});B[A]=n.x;B[A+1]=n.y}svgedit.path.replacePathSeg(f.type,1,B,F)}return F};svgedit.path.smoothControlPoints=this.smoothControlPoints=
function(f,k,n){var F=f.x-n.x,B=f.y-n.y,A=k.x-n.x,O=k.y-n.y;if((F!=0||B!=0)&&(A!=0||O!=0)){f=Math.atan2(B,F);k=Math.atan2(O,A);F=Math.sqrt(F*F+B*B);A=Math.sqrt(A*A+O*O);B=G.getSVGRoot().createSVGPoint();O=G.getSVGRoot().createSVGPoint();if(f<0)f+=2*Math.PI;if(k<0)k+=2*Math.PI;var Z=Math.abs(f-k),N=Math.abs(Math.PI-Z)/2;if(f-k>0){f=Z<Math.PI?f+N:f-N;k=Z<Math.PI?k-N:k+N}else{f=Z<Math.PI?f-N:f+N;k=Z<Math.PI?k+N:k-N}B.x=F*Math.cos(f)+n.x;B.y=F*Math.sin(f)+n.y;O.x=A*Math.cos(k)+n.x;O.y=A*Math.sin(k)+n.y;
return[B,O]}};svgedit.path.Segment=function(f,k){this.selected=false;this.index=f;this.item=k;this.type=k.pathSegType;this.ctrlpts=[];this.segsel=this.ptgrip=null};svgedit.path.Segment.prototype.showCtrlPts=function(f){for(var k in this.ctrlpts)this.ctrlpts[k].setAttribute("display",f?"inline":"none")};svgedit.path.Segment.prototype.selectCtrls=function(f){$("#ctrlpointgrip_"+this.index+"c1, #ctrlpointgrip_"+this.index+"c2").attr("fill",f?"#0FF":"#EEE")};svgedit.path.Segment.prototype.show=function(f){if(this.ptgrip){this.ptgrip.setAttribute("display",
f?"inline":"none");this.segsel.setAttribute("display",f?"inline":"none");this.showCtrlPts(f)}};svgedit.path.Segment.prototype.select=function(f){if(this.ptgrip){this.ptgrip.setAttribute("stroke",f?"#0FF":"#00F");this.segsel.setAttribute("display",f?"inline":"none");this.ctrlpts&&this.selectCtrls(f);this.selected=f}};svgedit.path.Segment.prototype.addGrip=function(){this.ptgrip=svgedit.path.getPointGrip(this,true);this.ctrlpts=svgedit.path.getControlPoints(this,true);this.segsel=svgedit.path.getSegSelector(this,
true)};svgedit.path.Segment.prototype.update=function(f){if(this.ptgrip){var k=svgedit.path.getGripPt(this);svgedit.utilities.assignAttributes(this.ptgrip,{cx:k.x,cy:k.y});svgedit.path.getSegSelector(this,true);if(this.ctrlpts){if(f){this.item=svgedit.path.path.elem.pathSegList.getItem(this.index);this.type=this.item.pathSegType}svgedit.path.getControlPoints(this)}}};svgedit.path.Segment.prototype.move=function(f,k){var n=this.item;n=this.ctrlpts?[n.x+=f,n.y+=k,n.x1,n.y1,n.x2+=f,n.y2+=k]:[n.x+=f,
n.y+=k];svgedit.path.replacePathSeg(this.type,this.index,n);if(this.next&&this.next.ctrlpts){n=this.next.item;n=[n.x,n.y,n.x1+=f,n.y1+=k,n.x2,n.y2];svgedit.path.replacePathSeg(this.next.type,this.next.index,n)}if(this.mate){n=this.mate.item;n=[n.x+=f,n.y+=k];svgedit.path.replacePathSeg(this.mate.type,this.mate.index,n)}this.update(true);this.next&&this.next.update(true)};svgedit.path.Segment.prototype.setLinked=function(f){var k,n,F;if(f==2){n=1;k=this.next;if(!k)return;F=this.item}else{n=2;k=this.prev;
if(!k)return;F=k.item}var B=k.item;B["x"+n]=F.x+(F.x-this.item["x"+f]);B["y"+n]=F.y+(F.y-this.item["y"+f]);svgedit.path.replacePathSeg(k.type,k.index,[B.x,B.y,B.x1,B.y1,B.x2,B.y2]);k.update(true)};svgedit.path.Segment.prototype.moveCtrl=function(f,k,n){var F=this.item;F["x"+f]+=k;F["y"+f]+=n;svgedit.path.replacePathSeg(this.type,this.index,[F.x,F.y,F.x1,F.y1,F.x2,F.y2]);this.update(true)};svgedit.path.Segment.prototype.setType=function(f,k){svgedit.path.replacePathSeg(f,this.index,k);this.type=f;
this.item=svgedit.path.path.elem.pathSegList.getItem(this.index);this.showCtrlPts(f===6);this.ctrlpts=svgedit.path.getControlPoints(this);this.update(true)};svgedit.path.Path=function(f){if(!f||f.tagName!=="path")throw"svgedit.path.Path constructed without a <path> element";this.elem=f;this.segs=[];this.selected_pts=[];svgedit.path.path=this;this.init()};svgedit.path.Path.prototype.init=function(){$(svgedit.path.getGripContainer()).find("*").attr("display","none");var f=this.elem.pathSegList,k=f.numberOfItems;
this.segs=[];this.selected_pts=[];this.first_seg=null;for(var n=0;n<k;n++){var F=f.getItem(n);F=new svgedit.path.Segment(n,F);F.path=this;this.segs.push(F)}f=this.segs;F=null;for(n=0;n<k;n++){var B=f[n],A=n+1>=k?null:f[n+1],O=n-1<0?null:f[n-1];if(B.type===2){if(O&&O.type!==1){A=f[F];A.next=f[F+1];A.next.prev=A;A.addGrip()}F=n}else if(A&&A.type===1){B.next=f[F+1];B.next.prev=B;B.mate=f[F];B.addGrip();if(this.first_seg==null)this.first_seg=B}else if(A){if(B.type!==1){B.addGrip();if(A&&A.type!==2){B.next=
A;B.next.prev=B}}}else if(B.type!==1){A=f[F];A.next=f[F+1];A.next.prev=A;A.addGrip();B.addGrip();if(!this.first_seg)this.first_seg=f[F]}}return this};svgedit.path.Path.prototype.eachSeg=function(f){for(var k=this.segs.length,n=0;n<k;n++)if(f.call(this.segs[n],n)===false)break};svgedit.path.Path.prototype.addSeg=function(f){var k=this.segs[f];if(k.prev){var n=k.prev,F;switch(k.item.pathSegType){case 4:var B=(k.item.x+n.item.x)/2,A=(k.item.y+n.item.y)/2;F=this.elem.createSVGPathSegLinetoAbs(B,A);break;
case 6:F=(n.item.x+k.item.x1)/2;var O=(k.item.x1+k.item.x2)/2,Z=(k.item.x2+k.item.x)/2,N=(F+O)/2;O=(O+Z)/2;B=(N+O)/2;var L=(n.item.y+k.item.y1)/2,na=(k.item.y1+k.item.y2)/2;n=(k.item.y2+k.item.y)/2;var ca=(L+na)/2;na=(na+n)/2;A=(ca+na)/2;F=this.elem.createSVGPathSegCurvetoCubicAbs(B,A,F,L,N,ca);svgedit.path.replacePathSeg(k.type,f,[k.item.x,k.item.y,O,na,Z,n])}svgedit.path.insertItemBefore(this.elem,F,f)}};svgedit.path.Path.prototype.deleteSeg=function(f){var k=this.segs[f],n=this.elem.pathSegList;
k.show(false);var F=k.next;if(k.mate){var B=[F.item.x,F.item.y];svgedit.path.replacePathSeg(2,F.index,B);svgedit.path.replacePathSeg(4,k.index,B);n.removeItem(k.mate.index)}else{if(!k.prev){B=[F.item.x,F.item.y];svgedit.path.replacePathSeg(2,k.next.index,B)}n.removeItem(f)}};svgedit.path.Path.prototype.subpathIsClosed=function(f){var k=false;svgedit.path.path.eachSeg(function(n){if(n<=f)return true;if(this.type===2)return false;else if(this.type===1){k=true;return false}});return k};svgedit.path.Path.prototype.removePtFromSelection=
function(f){var k=this.selected_pts.indexOf(f);if(k!=-1){this.segs[f].select(false);this.selected_pts.splice(k,1)}};svgedit.path.Path.prototype.clearSelection=function(){this.eachSeg(function(){this.select(false)});this.selected_pts=[]};svgedit.path.Path.prototype.storeD=function(){this.last_d=this.elem.getAttribute("d")};svgedit.path.Path.prototype.show=function(f){this.eachSeg(function(){this.show(f)});f&&this.selectPt(this.first_seg.index);return this};svgedit.path.Path.prototype.movePts=function(f,
k){for(var n=this.selected_pts.length;n--;)this.segs[this.selected_pts[n]].move(f,k)};svgedit.path.Path.prototype.moveCtrl=function(f,k){var n=this.segs[this.selected_pts[0]];n.moveCtrl(this.dragctrl,f,k);s&&n.setLinked(this.dragctrl)};svgedit.path.Path.prototype.setSegType=function(f){this.storeD();for(var k=this.selected_pts.length,n;k--;){var F=this.segs[this.selected_pts[k]],B=F.prev;if(B){if(!f){n="Toggle Path Segment Type";f=F.type==6?4:6}f-=0;var A=F.item.x,O=F.item.y,Z=B.item.x;B=B.item.y;
var N;switch(f){case 6:if(F.olditem){Z=F.olditem;N=[A,O,Z.x1,Z.y1,Z.x2,Z.y2]}else{N=A-Z;var L=O-B;N=[A,O,Z+N/3,B+L/3,A-N/3,O-L/3]}break;case 4:N=[A,O];F.olditem=F.item}F.setType(f,N)}}svgedit.path.path.endChanges(n)};svgedit.path.Path.prototype.selectPt=function(f,k){this.clearSelection();f==null&&this.eachSeg(function(n){if(this.prev)f=n});this.addPtsToSelection(f);if(k){this.dragctrl=k;s&&this.segs[f].setLinked(k)}};svgedit.path.Path.prototype.update=function(){var f=this.elem;if(svgedit.utilities.getRotationAngle(f)){this.matrix=
svgedit.math.getMatrix(f);this.imatrix=this.matrix.inverse()}else this.imatrix=this.matrix=null;this.eachSeg(function(k){this.item=f.pathSegList.getItem(k);this.update()});return this};svgedit.path.getPath_=function(f){var k=v[f.id];k||(k=v[f.id]=new svgedit.path.Path(f));return k};svgedit.path.removePath_=function(f){f in v&&delete v[f]};var e=function(f,k){dx=f-oldcx;dy=k-oldcy;r=Math.sqrt(dx*dx+dy*dy);theta=Math.atan2(dy,dx)+angle;dx=r*Math.cos(theta)+oldcx;dy=r*Math.sin(theta)+oldcy;dx-=newcx;
dy-=newcy;r=Math.sqrt(dx*dx+dy*dy);theta=Math.atan2(dy,dx)-angle;return{x:(r*Math.cos(theta)+newcx)/1,y:(r*Math.sin(theta)+newcy)/1}};svgedit.path.recalcRotatedPath=function(){var f=svgedit.path.path.elem,k=svgedit.utilities.getRotationAngle(f,true);if(k){var n=svgedit.utilities.getBBox(f),F=svgedit.path.path.oldbbox,B=F.x+F.width/2,A=F.y+F.height/2;F=n.x+n.width/2;n=n.y+n.height/2;F=F-B;var O=n-A;n=Math.sqrt(F*F+O*O);O=Math.atan2(O,F)+k;F=n*Math.cos(O)+B;n=n*Math.sin(O)+A;B=f.pathSegList;for(A=B.numberOfItems;A;){A-=
1;O=B.getItem(A);var Z=O.pathSegType;if(Z!=1){var N=e(O.x,O.y);N=[N.x,N.y];if(O.x1!=null&&O.x2!=null){c_vals1=e(O.x1,O.y1);c_vals2=e(O.x2,O.y2);N.splice(N.length,0,c_vals1.x,c_vals1.y,c_vals2.x,c_vals2.y)}svgedit.path.replacePathSeg(Z,A,N)}}svgedit.utilities.getBBox(f);B=svgroot.createSVGTransform();f=svgedit.transformlist.getTransformList(f);B.setRotate(k*180/Math.PI,F,n);f.replaceItem(B,0)}};svgedit.path.clearData=function(){v={}}})();if(!window.console){window.console={};window.console.log=function(){};window.console.dir=function(){}}if(window.opera){window.console.log=function(a){opera.postError(a)};window.console.dir=function(){}}
(function(){var a=jQuery.fn.attr;jQuery.fn.attr=function(K,l){var s=this.length;if(!s)return a.apply(this,arguments);for(var v=0;v<s;v++){var G=this[v];if(G.namespaceURI==="http://www.w3.org/2000/svg")if(l!==undefined)G.setAttribute(K,l);else if($.isArray(K)){s=K.length;for(v={};s--;){var e=K[s],f=G.getAttribute(e);if(f||f==="0")f=isNaN(f)?f:f-0;v[e]=f}return v}else if(typeof K==="object")for(e in K)G.setAttribute(e,K[e]);else{if((f=G.getAttribute(K))||f==="0")f=isNaN(f)?f:f-0;return f}else return a.apply(this,
arguments)}return this}})();
$.SvgCanvas=function(a,K){function l(b,c){for(var d=svgedit.utilities.getBBox(b),m=0;m<2;m++){var i=m===0?"fill":"stroke",z=b.getAttribute(i);if(z&&z.indexOf("url(")===0){z=rb(z);if(z.tagName==="linearGradient"){var o=z.getAttribute("x1")||0,h=z.getAttribute("y1")||0,q=z.getAttribute("x2")||1,w=z.getAttribute("y2")||0;o=d.width*o+d.x;h=d.height*h+d.y;q=d.width*q+d.x;w=d.height*w+d.y;o=oa(o,h,c);w=oa(q,w,c);q={};q.x1=(o.x-d.x)/d.width;q.y1=(o.y-d.y)/d.height;q.x2=(w.x-d.x)/d.width;q.y2=(w.y-d.y)/d.height;
z=z.cloneNode(true);$(z).attr(q);z.id=Fa();Xa().appendChild(z);b.setAttribute(i,"url(#"+z.id+")")}}}}var s="http://www.w3.org/2000/svg",v={show_outside_canvas:true,selectNew:true,dimensions:[640,480]};K&&$.extend(v,K);var G=v.dimensions,e=this,f=a.ownerDocument,k=f.importNode(svgedit.utilities.text2xml('<svg id="svgroot" xmlns="'+s+'" xlinkns="http://www.w3.org/1999/xlink" width="'+G[0]+'" height="'+G[1]+'" x="'+G[0]+'" y="'+G[1]+'" overflow="visible"><defs><filter id="canvashadow" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur"/><feOffset in="blur" dx="5" dy="5" result="offsetBlur"/><feMerge><feMergeNode in="offsetBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs></svg>').documentElement,
true);a.appendChild(k);var n=f.createElementNS(s,"svg");(e.clearSvgContentElement=function(){for(;n.firstChild;)n.removeChild(n.firstChild);$(n).attr({id:"svgcontent",width:G[0],height:G[1],x:G[0],y:G[1],overflow:v.show_outside_canvas?"visible":"hidden",xmlns:s,"xmlns:se":"http://svg-edit.googlecode.com","xmlns:xlink":"http://www.w3.org/1999/xlink"}).appendTo(k);var b=f.createComment(" Created with SVG-edit - http://svg-edit.googlecode.com/ ");n.appendChild(b)})();var F="svg_";e.setIdPrefix=function(b){F=
b};e.current_drawing_=new svgedit.draw.Drawing(n,F);var B=e.getCurrentDrawing=function(){return e.current_drawing_},A=1,O=null,Z={shape:{fill:(v.initFill.color=="none"?"":"#")+v.initFill.color,fill_paint:null,fill_opacity:v.initFill.opacity,stroke:"#"+v.initStroke.color,stroke_paint:null,stroke_opacity:v.initStroke.opacity,stroke_width:v.initStroke.width,stroke_dasharray:"none",stroke_linejoin:"miter",stroke_linecap:"butt",opacity:v.initOpacity}};Z.text=$.extend(true,{},Z.shape);$.extend(Z.text,{fill:"#000000",
stroke_width:0,font_size:24,font_family:"serif"});var N=Z.shape,L=Array(1),na=this.addSvgElementFromJson=function(b){var c=svgedit.utilities.getElem(b.attr.id),d=B().getCurrentLayer();if(c&&b.element!=c.tagName){d.removeChild(c);c=null}if(!c){c=f.createElementNS(s,b.element);if(d)(O||d).appendChild(c)}b.curStyles&&svgedit.utilities.assignAttributes(c,{fill:N.fill,stroke:N.stroke,"stroke-width":N.stroke_width,"stroke-dasharray":N.stroke_dasharray,"stroke-linejoin":N.stroke_linejoin,"stroke-linecap":N.stroke_linecap,
"stroke-opacity":N.stroke_opacity,"fill-opacity":N.fill_opacity,opacity:N.opacity/2,style:"pointer-events:inherit"},100);svgedit.utilities.assignAttributes(c,b.attr,100);svgedit.utilities.cleanupElement(c);return c},ca=e.getTransformList=svgedit.transformlist.getTransformList,oa=svgedit.math.transformPoint,pa=e.matrixMultiply=svgedit.math.matrixMultiply,ia=e.hasMatrixTransform=svgedit.math.hasMatrixTransform,da=e.transformListToTransform=svgedit.math.transformListToTransform,Ya=svgedit.math.snapToAngle,
kb=svgedit.math.getMatrix;svgedit.units.init({getBaseUnit:function(){return v.baseUnit},getElement:svgedit.utilities.getElem,getHeight:function(){return n.getAttribute("height")/A},getWidth:function(){return n.getAttribute("width")/A},getRoundDigits:function(){return Na.round_digits}});var ba=e.convertToNum=svgedit.units.convertToNum;svgedit.utilities.init({getDOMDocument:function(){return f},getDOMContainer:function(){return a},getSVGRoot:function(){return k},getSelectedElements:function(){return L},
getSVGContent:function(){return n}});var sb=e.getUrlFromAttr=svgedit.utilities.getUrlFromAttr,ib=e.getHref=svgedit.utilities.getHref,lb=e.setHref=svgedit.utilities.setHref,Tb=svgedit.utilities.getPathBBox;e.getBBox=svgedit.utilities.getBBox;var bb=e.getRotationAngle=svgedit.utilities.getRotationAngle,va=e.getElem=svgedit.utilities.getElem,Ga=e.assignAttributes=svgedit.utilities.assignAttributes,Oa=this.cleanupElement=svgedit.utilities.cleanupElement,hb=svgedit.sanitize.getNSMap(),ja=e.sanitizeSvg=
svgedit.sanitize.sanitizeSvg,Ca=svgedit.history.MoveElementCommand,Ha=svgedit.history.InsertElementCommand,Pa=svgedit.history.RemoveElementCommand,Ia=svgedit.history.ChangeElementCommand,ua=svgedit.history.BatchCommand;e.undoMgr=new svgedit.history.UndoManager({handleHistoryEvent:function(b,c){var d=svgedit.history.HistoryEventTypes;if(b==d.BEFORE_UNAPPLY||b==d.BEFORE_APPLY)e.clearSelection();else if(b==d.AFTER_APPLY||b==d.AFTER_UNAPPLY){var m=c.elements();e.pathActions.clear();ha("changed",m);m=
c.type();d=b==d.AFTER_APPLY;if(m==Ca.type())(d?c.newParent:c.oldParent)==n&&e.identifyLayers();else if(m==Ha.type()||m==Pa.type()){c.parent==n&&e.identifyLayers();if(m==Ha.type())d&&tb(c.elem);else d||tb(c.elem);c.elem.tagName==="use"&&Gb(c.elem)}else if(m==Ia.type()){c.elem.tagName=="title"&&c.elem.parentNode.parentNode==n&&e.identifyLayers();d=d?c.newValues:c.oldValues;d.stdDeviation&&e.setBlurOffsets(c.elem.parentNode,d.stdDeviation)}}}});var ma=function(b){e.undoMgr.addCommandToHistory(b)};svgedit.select.init(v,
{createSVGElement:function(b){return e.addSvgElementFromJson(b)},svgRoot:function(){return k},svgContent:function(){return n},currentZoom:function(){return A},getStrokedBBox:function(b){return e.getStrokedBBox([b])}});var ra=this.selectorManager=svgedit.select.getSelectorManager();svgedit.path.init({getCurrentZoom:function(){return A},getSVGRoot:function(){return k}});svgedit.utilities.snapToGrid=function(b){var c=v.snappingStep,d=v.baseUnit;if(d!=="px")c*=svgedit.units.getTypeMap()[d];return b=Math.round(b/
c)*c};var la=svgedit.utilities.snapToGrid,ub={exportNoBlur:"Blurred elements will appear as un-blurred",exportNoforeignObject:"foreignObject elements will not appear",exportNoDashArray:"Strokes will appear filled",exportNoText:"Text may not appear as expected"},Hb=["clip-path","fill","filter","marker-end","marker-mid","marker-start","mask","stroke"],Ab=$.data,Ib=document.createElementNS(s,"animate");$(Ib).attr({attributeName:"opacity",begin:"indefinite",dur:1,fill:"freeze"}).appendTo(k);var tb=function(b){var c=
$(b).attr(Hb),d;for(d in c){var m=c[d];if(m&&m.indexOf("url(")===0){m=sb(m).substr(1);if(!va(m)){Xa().appendChild(Ub[m]);delete Ub[m]}}}b=b.getElementsByTagName("*");if(b.length){c=0;for(d=b.length;c<d;c++)tb(b[c])}},Jb={},Bb=v.imgPath+"logo.png",Kb=[],Na={round_digits:5},xa=false,Qa=null,sa="select",cb="none",pb={},Ua=Z.text,Sa=N,La=null,wa=null,jb=[],Cb={},Vb=null,Ub={};e.clipBoard=[];var Db=this.runExtensions=function(b,c,d){var m=false;if(d)m=[];$.each(Cb,function(i,z){if(b in z)if(d)m.push(z[b](c));
else m=z[b](c)});return m};this.addExtension=function(b,c){if(b in Cb)console.log('Cannot add extension "'+b+'", an extension by that name already exists"');else{var d=$.isFunction(c)?c($.extend(e.getPrivateMethods(),{svgroot:k,svgcontent:n,nonce:B().getNonce(),selectorManager:ra})):c;Cb[b]=d;ha("extension_added",d)}};var Eb=this.round=function(b){return parseInt(b*A)/A},Wb=this.getIntersectionList=function(b){if(wa==null)return null;var c=O||B().getCurrentLayer();jb.length||(jb=jc(c));var d=null;
try{d=c.getIntersectionList(b,null)}catch(m){}if(d==null||typeof d.item!="function"){d=[];if(b)b=b;else{b=wa.getBBox();c={};for(var i in b)c[i]=b[i]/A;b=c}for(i=jb.length;i--;)b.width&&b.width&&svgedit.math.rectsIntersect(b,jb[i].bbox)&&d.push(jb[i].elem)}return d};getStrokedBBox=this.getStrokedBBox=function(b){b||(b=Lb());if(!b.length)return false;var c=function(w){try{var u=svgedit.utilities.getBBox(w),t=svgedit.utilities.getRotationAngle(w);if(t&&t%90||svgedit.math.hasMatrixTransform(svgedit.transformlist.getTransformList(w))){t=
false;if(["ellipse","path","line","polyline","polygon"].indexOf(w.tagName)>=0)u=t=e.convertToPath(w,true);else if(w.tagName=="rect"){var C=w.getAttribute("rx"),E=w.getAttribute("ry");if(C||E)u=t=e.convertToPath(w,true)}if(!t){var H=w.cloneNode(true),I=document.createElementNS(s,"g"),P=w.parentNode;P.appendChild(I);I.appendChild(H);u=svgedit.utilities.bboxToObj(I.getBBox());P.removeChild(I)}}return u}catch(W){console.log(w,W);return null}},d;$.each(b,function(){if(!d)if(this.parentNode)d=c(this)});
if(d==null)return null;var m=d.x+d.width,i=d.y+d.height,z=d.x,o=d.y,h=function(w){var u=w.getAttribute("stroke-width"),t=0;if(w.getAttribute("stroke")!="none"&&!isNaN(u))t+=u/2;return t},q=[];$.each(b,function(w,u){var t=c(u);if(t){var C=h(u);z=Math.min(z,t.x-C);o=Math.min(o,t.y-C);q.push(t)}});d.x=z;d.y=o;$.each(b,function(w,u){var t=q[w];if(t&&u.nodeType==1){var C=h(u);m=Math.max(m,t.x+t.width+C);i=Math.max(i,t.y+t.height+C)}});d.width=m-z;d.height=i-o;return d};var Lb=this.getVisibleElements=function(b){b||
(b=$(n).children());var c=[];$(b).children().each(function(d,m){try{m.getBBox()&&c.push(m)}catch(i){}});return c.reverse()},jc=this.getVisibleElementsAndBBoxes=function(b){b||(b=$(n).children());var c=[];$(b).children().each(function(d,m){try{m.getBBox()&&c.push({elem:m,bbox:getStrokedBBox([m])})}catch(i){}});return c.reverse()},cc=this.groupSvgElem=function(b){var c=document.createElementNS(s,"g");b.parentNode.replaceChild(c,b);$(c).append(b).data("gsvg",b)[0].id=Fa()},vb=function(b){var c=document.createElementNS(b.namespaceURI,
b.nodeName);$.each(b.attributes,function(m,i){i.localName!="-moz-math-font-style"&&c.setAttributeNS(i.namespaceURI,i.nodeName,i.nodeValue)});c.removeAttribute("id");c.id=Fa();if(svgedit.browser.isWebkit()&&b.nodeName=="path"){var d=qa.convertPath(b);c.setAttribute("d",d)}$.each(b.childNodes,function(m,i){switch(i.nodeType){case 1:c.appendChild(vb(i));break;case 3:c.textContent=i.nodeValue}});if($(b).data("gsvg"))$(c).data("gsvg",c.firstChild);else if($(b).data("symbol")){b=$(b).data("symbol");$(c).data("ref",
b).data("symbol",b)}else c.tagName=="image"&&Mb(c);return c},db,Fa,ha;(function(b){var c={};db=b.getId=function(){return B().getId()};Fa=b.getNextId=function(){return B().getNextId()};ha=b.call=function(d,m){if(c[d])return c[d](this,m)};b.bind=function(d,m){var i=c[d];c[d]=m;return i}})(e);this.prepareSvg=function(b){this.sanitizeSvg(b.documentElement);b=b.getElementsByTagNameNS(s,"path");for(var c=0,d=b.length;c<d;++c){var m=b[c];m.setAttribute("d",qa.convertPath(m));qa.fixEnd(m)}};var rb=this.getRefElem=
function(b){return va(sb(b).substr(1))},Nb=function(b){if(!svgedit.browser.isGecko())return b;var c=b.cloneNode(true);b.parentNode.insertBefore(c,b);b.parentNode.removeChild(b);ra.releaseSelector(b);L[0]=c;ra.requestSelector(c).showGrips(true);return c};this.setRotationAngle=function(b,c){b=parseFloat(b);var d=L[0],m=d.getAttribute("transform"),i=svgedit.utilities.getBBox(d),z=i.x+i.width/2,o=i.y+i.height/2;i=ca(d);i.numberOfItems>0&&i.getItem(0).type==4&&i.removeItem(0);if(b!=0){z=oa(z,o,da(i).matrix);
o=k.createSVGTransform();o.setRotate(b,z.x,z.y);i.numberOfItems?i.insertItemBefore(o,0):i.appendItem(o)}else i.numberOfItems==0&&d.removeAttribute("transform");if(!c){i=d.getAttribute("transform");d.setAttribute("transform",m);Va("transform",i,L);ha("changed",L)}va("pathpointgrip_container");d=ra.requestSelector(L[0]);d.resize();d.updateGripCursors(b)};var Ob=this.recalculateAllSelectedDimensions=function(){for(var b=new ua(cb=="none"?"position":"size"),c=L.length;c--;){var d=Ta(L[c]);d&&b.addSubCommand(d)}if(!b.isEmpty()){ma(b);
ha("changed",L)}},Xb=[0,"z","M","m","L","l","C","c","Q","q","A","a","H","h","V","v","S","s","T","t"],kc=function(b){console.log([b.a,b.b,b.c,b.d,b.e,b.f])},Fb=this.remapElement=function(b,c,d){var m=v.gridSnapping&&b.parentNode.parentNode.localName==="svg",i=function(){if(m)for(var t in c)c[t]=la(c[t]);Ga(b,c,1E3,true)};box=svgedit.utilities.getBBox(b);for(var z=0;z<2;z++){var o=z===0?"fill":"stroke",h=b.getAttribute(o);if(h&&h.indexOf("url(")===0)if(d.a<0||d.d<0){h=rb(h).cloneNode(true);if(d.a<0){var q=
h.getAttribute("x1"),w=h.getAttribute("x2");h.setAttribute("x1",-(q-1));h.setAttribute("x2",-(w-1))}if(d.d<0){q=h.getAttribute("y1");w=h.getAttribute("y2");h.setAttribute("y1",-(q-1));h.setAttribute("y2",-(w-1))}h.id=Fa();Xa().appendChild(h);b.setAttribute(o,"url(#"+h.id+")")}}z=b.tagName;if(z==="g"||z==="text"||z==="use")if(d.a==1&&d.b==0&&d.c==0&&d.d==1&&(d.e!=0||d.f!=0)){o=da(b).matrix;o=pa(o.inverse(),d,o);c.x=parseFloat(c.x)+o.e;c.y=parseFloat(c.y)+o.f}else{o=ca(b);h=k.createSVGTransform();h.setMatrix(pa(da(o).matrix,
d));o.clear();o.appendItem(h)}switch(z){case "foreignObject":case "rect":case "image":if(z==="image"&&(d.a<0||d.d<0)){o=ca(b);h=k.createSVGTransform();h.setMatrix(pa(da(o).matrix,d));o.clear();o.appendItem(h)}else{o=oa(c.x,c.y,d);c.width=d.a*c.width;c.height=d.d*c.height;c.x=o.x+Math.min(0,c.width);c.y=o.y+Math.min(0,c.height);c.width=Math.abs(c.width);c.height=Math.abs(c.height)}i();break;case "ellipse":z=oa(c.cx,c.cy,d);c.cx=z.x;c.cy=z.y;c.rx=d.a*c.rx;c.ry=d.d*c.ry;c.rx=Math.abs(c.rx);c.ry=Math.abs(c.ry);
i();break;case "circle":z=oa(c.cx,c.cy,d);c.cx=z.x;c.cy=z.y;d=svgedit.math.transformBox(box.x,box.y,box.width,box.height,d);c.r=Math.min((d.tr.x-d.tl.x)/2,(d.bl.y-d.tl.y)/2);if(c.r)c.r=Math.abs(c.r);i();break;case "line":o=oa(c.x1,c.y1,d);q=oa(c.x2,c.y2,d);c.x1=o.x;c.y1=o.y;c.x2=q.x;c.y2=q.y;case "text":case "use":i();break;case "g":(d=$(b).data("gsvg"))&&Ga(d,c,1E3,true);break;case "polyline":case "polygon":i=c.points.length;for(z=0;z<i;++z){w=c.points[z];w=oa(w.x,w.y,d);c.points[z].x=w.x;c.points[z].y=
w.y}i=c.points.length;d="";for(z=0;z<i;++z){w=c.points[z];d+=w.x+","+w.y+" "}b.setAttribute("points",d);break;case "path":o=b.pathSegList;i=o.numberOfItems;c.d=Array(i);for(z=0;z<i;++z){h=o.getItem(z);c.d[z]={type:h.pathSegType,x:h.x,y:h.y,x1:h.x1,y1:h.y1,x2:h.x2,y2:h.y2,r1:h.r1,r2:h.r2,angle:h.angle,largeArcFlag:h.largeArcFlag,sweepFlag:h.sweepFlag}}i=c.d.length;z=c.d[0];var u=oa(z.x,z.y,d);c.d[0].x=u.x;c.d[0].y=u.y;for(z=1;z<i;++z){h=c.d[z];o=h.type;if(o%2==0){w=oa(h.x!=undefined?h.x:u.x,h.y!=undefined?
h.y:u.y,d);o=oa(h.x1,h.y1,d);q=oa(h.x2,h.y2,d);h.x=w.x;h.y=w.y;h.x1=o.x;h.y1=o.y;h.x2=q.x;h.y2=q.y}else{h.x=d.a*h.x;h.y=d.d*h.y;h.x1=d.a*h.x1;h.y1=d.d*h.y1;h.x2=d.a*h.x2;h.y2=d.d*h.y2}h.r1=d.a*h.r1;h.r2=d.d*h.r2}d="";i=c.d.length;for(z=0;z<i;++z){h=c.d[z];o=h.type;d+=Xb[o];switch(o){case 13:case 12:d+=h.x+" ";break;case 15:case 14:d+=h.y+" ";break;case 3:case 5:case 19:case 2:case 4:case 18:d+=h.x+","+h.y+" ";break;case 7:case 6:d+=h.x1+","+h.y1+" "+h.x2+","+h.y2+" "+h.x+","+h.y+" ";break;case 9:case 8:d+=
h.x1+","+h.y1+" "+h.x+","+h.y+" ";break;case 11:case 10:d+=h.r1+","+h.r2+" "+h.angle+" "+ +h.largeArcFlag+" "+ +h.sweepFlag+" "+h.x+","+h.y+" ";break;case 17:case 16:d+=h.x2+","+h.y2+" "+h.x+","+h.y+" "}}b.setAttribute("d",d)}},dc=function(b,c,d){b=rb(b).firstChild;var m=ca(b),i=k.createSVGTransform();i.setTranslate(c,d);m.appendItem(i);Ta(b)},Ta=this.recalculateDimensions=function(b){if(b==null)return null;var c=ca(b);if(c&&c.numberOfItems>0){for(var d=c.numberOfItems;d--;){var m=c.getItem(d);if(m.type===
0)c.removeItem(d);else if(m.type===1)svgedit.math.isIdentity(m.matrix)&&c.removeItem(d);else m.type===4&&m.angle===0&&c.removeItem(d)}if(c.numberOfItems===1&&bb(b))return null}if(!c||c.numberOfItems==0){b.removeAttribute("transform");return null}if(c){d=c.numberOfItems;for(var i=[];d--;){m=c.getItem(d);if(m.type===1)i.push([m.matrix,d]);else if(i.length)i=[]}if(i.length===2){d=k.createSVGTransformFromMatrix(pa(i[1][0],i[0][0]));c.removeItem(i[0][1]);c.removeItem(i[1][1]);c.insertItemBefore(d,i[1][1])}d=
c.numberOfItems;if(d>=2&&c.getItem(d-2).type===1&&c.getItem(d-1).type===2){i=k.createSVGTransform();m=pa(c.getItem(d-2).matrix,c.getItem(d-1).matrix);i.setMatrix(m);c.removeItem(d-2);c.removeItem(d-2);c.appendItem(i)}}switch(b.tagName){case "line":case "polyline":case "polygon":case "path":break;default:if(c.numberOfItems===1&&c.getItem(0).type===1||c.numberOfItems===2&&c.getItem(0).type===1&&c.getItem(0).type===4)return null}var z=$(b).data("gsvg");d=new ua("Transform");var o={},h=null;m=[];switch(b.tagName){case "line":m=
["x1","y1","x2","y2"];break;case "circle":m=["cx","cy","r"];break;case "ellipse":m=["cx","cy","rx","ry"];break;case "foreignObject":case "rect":case "image":m=["width","height","x","y"];break;case "use":case "text":m=["x","y"];break;case "polygon":case "polyline":h={};h.points=b.getAttribute("points");i=b.points;var q=i.numberOfItems;o.points=Array(q);for(var w=0;w<q;++w){var u=i.getItem(w);o.points[w]={x:u.x,y:u.y}}break;case "path":h={};h.d=b.getAttribute("d");o.d=b.getAttribute("d")}if(m.length){o=
$(b).attr(m);$.each(o,function(eb,fb){o[eb]=ba(eb,fb)})}else if(z)o={x:$(z).attr("x")||0,y:$(z).attr("y")||0};if(h==null){h=$.extend(true,{},o);$.each(h,function(eb,fb){h[eb]=ba(eb,fb)})}h.transform=Qa?Qa:"";if(b.tagName=="g"&&!z||b.tagName=="a"){i=svgedit.utilities.getBBox(b);var t={x:i.x+i.width/2,y:i.y+i.height/2},C=oa(i.x+i.width/2,i.y+i.height/2,da(c).matrix);m=k.createSVGMatrix();if(i=bb(b)){w=i*Math.PI/180;q=Math.abs(w)>1.0E-10?Math.sin(w)/(1-Math.cos(w)):2/w;for(w=0;w<c.numberOfItems;++w){m=
c.getItem(w);if(m.type==4){m=m.matrix;t.y=(q*m.e+m.f)/2;t.x=(m.e-q*m.f)/2;c.removeItem(w);break}}}w=m=z=0;var E=c.numberOfItems;if(E)var H=c.getItem(0).matrix;if(E>=3&&c.getItem(E-2).type==3&&c.getItem(E-3).type==2&&c.getItem(E-1).type==2){w=3;var I=c.getItem(E-3).matrix,P=c.getItem(E-2).matrix,W=c.getItem(E-1).matrix;q=b.childNodes;for(u=q.length;u--;){var Y=q.item(u);m=z=0;if(Y.nodeType==1){var R=ca(Y);if(R){m=da(R).matrix;z=bb(Y);var T=Qa,V=[];Qa=Y.getAttribute("transform");if(z||ia(R)){var aa=
k.createSVGTransform();aa.setMatrix(pa(I,P,W,m));R.clear();R.appendItem(aa);V.push(aa)}else{z=pa(m.inverse(),W,m);aa=k.createSVGMatrix();aa.e=-z.e;aa.f=-z.f;m=pa(aa.inverse(),m.inverse(),I,P,W,m,z.inverse());var Ja=k.createSVGTransform(),Za=k.createSVGTransform(),mb=k.createSVGTransform();Ja.setTranslate(z.e,z.f);Za.setScale(m.a,m.d);mb.setTranslate(aa.e,aa.f);R.appendItem(mb);R.appendItem(Za);R.appendItem(Ja);V.push(mb);V.push(Za);V.push(Ja)}d.addSubCommand(Ta(Y));Qa=T}}}c.removeItem(E-1);c.removeItem(E-
2);c.removeItem(E-3)}else if(E>=3&&c.getItem(E-1).type==1){w=3;m=da(c).matrix;aa=k.createSVGTransform();aa.setMatrix(m);c.clear();c.appendItem(aa)}else if((E==1||E>1&&c.getItem(1).type!=3)&&c.getItem(0).type==2){w=2;z=da(c).matrix;c.removeItem(0);m=da(c).matrix.inverse();m=pa(m,z);z=m.e;m=m.f;if(z!=0||m!=0){q=b.childNodes;u=q.length;for(E=[];u--;){Y=q.item(u);if(Y.nodeType==1){if(Y.getAttribute("clip-path")){T=Y.getAttribute("clip-path");if(E.indexOf(T)===-1){dc(T,z,m);E.push(T)}}T=Qa;Qa=Y.getAttribute("transform");
if(R=ca(Y)){I=k.createSVGTransform();I.setTranslate(z,m);R.numberOfItems?R.insertItemBefore(I,0):R.appendItem(I);d.addSubCommand(Ta(Y));R=b.getElementsByTagNameNS(s,"use");Y="#"+Y.id;for(I=R.length;I--;){P=R.item(I);if(Y==ib(P)){W=k.createSVGTransform();W.setTranslate(-z,-m);ca(P).insertItemBefore(W,0);d.addSubCommand(Ta(P))}}Qa=T}}}E=[];Qa=T}}else if(E==1&&c.getItem(0).type==1&&!i){w=1;m=c.getItem(0).matrix;q=b.childNodes;for(u=q.length;u--;){Y=q.item(u);if(Y.nodeType==1){T=Qa;Qa=Y.getAttribute("transform");
if(R=ca(Y)){z=pa(m,da(R).matrix);E=k.createSVGTransform();E.setMatrix(z);R.clear();R.appendItem(E,0);d.addSubCommand(Ta(Y));Qa=T;T=Y.getAttribute("stroke-width");Y.getAttribute("stroke")!=="none"&&!isNaN(T)&&Y.setAttribute("stroke-width",T*((Math.abs(z.a)+Math.abs(z.d))/2))}}}c.clear()}else{if(i){t=k.createSVGTransform();t.setRotate(i,C.x,C.y);c.numberOfItems?c.insertItemBefore(t,0):c.appendItem(t)}c.numberOfItems==0&&b.removeAttribute("transform");return null}if(w==2){if(i){C={x:t.x+H.e,y:t.y+H.f};
t=k.createSVGTransform();t.setRotate(i,C.x,C.y);c.numberOfItems?c.insertItemBefore(t,0):c.appendItem(t)}}else if(w==3){m=da(c).matrix;H=k.createSVGTransform();H.setRotate(i,t.x,t.y);H=H.matrix;t=k.createSVGTransform();t.setRotate(i,C.x,C.y);C=t.matrix.inverse();T=m.inverse();C=pa(T,C,H,m);z=C.e;m=C.f;if(z!=0||m!=0){q=b.childNodes;for(u=q.length;u--;){Y=q.item(u);if(Y.nodeType==1){T=Qa;Qa=Y.getAttribute("transform");R=ca(Y);I=k.createSVGTransform();I.setTranslate(z,m);R.numberOfItems?R.insertItemBefore(I,
0):R.appendItem(I);d.addSubCommand(Ta(Y));Qa=T}}}if(i)c.numberOfItems?c.insertItemBefore(t,0):c.appendItem(t)}}else{i=svgedit.utilities.getBBox(b);if(!i&&b.tagName!="path")return null;m=k.createSVGMatrix();if(z=bb(b)){t={x:i.x+i.width/2,y:i.y+i.height/2};C=oa(i.x+i.width/2,i.y+i.height/2,da(c).matrix);w=z*Math.PI/180;q=Math.abs(w)>1.0E-10?Math.sin(w)/(1-Math.cos(w)):2/w;for(w=0;w<c.numberOfItems;++w){m=c.getItem(w);if(m.type==4){m=m.matrix;t.y=(q*m.e+m.f)/2;t.x=(m.e-q*m.f)/2;c.removeItem(w);break}}}w=
0;E=c.numberOfItems;if(!svgedit.browser.isWebkit())if((H=b.getAttribute("fill"))&&H.indexOf("url(")===0){H=rb(H);T="pattern";if(H.tagName!==T)T="gradient";if(H.getAttribute(T+"Units")==="userSpaceOnUse"){m=da(c).matrix;i=ca(H);i=da(i).matrix;m=pa(m,i);i="matrix("+[m.a,m.b,m.c,m.d,m.e,m.f].join(",")+")";H.setAttribute(T+"Transform",i)}}if(E>=3&&c.getItem(E-2).type==3&&c.getItem(E-3).type==2&&c.getItem(E-1).type==2){w=3;m=da(c,E-3,E-1).matrix;c.removeItem(E-1);c.removeItem(E-2);c.removeItem(E-3)}else if(E==
4&&c.getItem(E-1).type==1){w=3;m=da(c).matrix;aa=k.createSVGTransform();aa.setMatrix(m);c.clear();c.appendItem(aa);m=k.createSVGMatrix()}else if((E==1||E>1&&c.getItem(1).type!=3)&&c.getItem(0).type==2){w=2;H=c.getItem(0).matrix;T=da(c,1).matrix;i=T.inverse();m=pa(i,H,T);c.removeItem(0)}else if(E==1&&c.getItem(0).type==1&&!z){m=da(c).matrix;switch(b.tagName){case "line":o=$(b).attr(["x1","y1","x2","y2"]);case "polyline":case "polygon":o.points=b.getAttribute("points");if(o.points){i=b.points;q=i.numberOfItems;
o.points=Array(q);for(w=0;w<q;++w){u=i.getItem(w);o.points[w]={x:u.x,y:u.y}}}case "path":o.d=b.getAttribute("d");w=1;c.clear()}}else{w=4;if(z){t=k.createSVGTransform();t.setRotate(z,C.x,C.y);c.numberOfItems?c.insertItemBefore(t,0):c.appendItem(t)}c.numberOfItems==0&&b.removeAttribute("transform");return null}if(w==1||w==2||w==3)Fb(b,o,m);if(w==2){if(z){ia(c)||(C={x:t.x+m.e,y:t.y+m.f});t=k.createSVGTransform();t.setRotate(z,C.x,C.y);c.numberOfItems?c.insertItemBefore(t,0):c.appendItem(t)}}else if(w==
3&&z){m=da(c).matrix;H=k.createSVGTransform();H.setRotate(z,t.x,t.y);H=H.matrix;t=k.createSVGTransform();t.setRotate(z,C.x,C.y);C=t.matrix.inverse();T=m.inverse();C=pa(T,C,H,m);Fb(b,o,C);if(z)c.numberOfItems?c.insertItemBefore(t,0):c.appendItem(t)}}c.numberOfItems==0&&b.removeAttribute("transform");d.addSubCommand(new Ia(b,h));return d},nb=null,za=this.clearSelection=function(b){if(L[0]!=null)for(var c=L.length,d=0;d<c;++d){var m=L[d];if(m==null)break;ra.releaseSelector(m);L[d]=null}b||ha("selected",
L)},gb=this.addToSelection=function(b,c){if(b.length!=0){for(var d=0;d<L.length;){if(L[d]==null)break;++d}for(var m=b.length;m--;){var i=b[m];if(i&&svgedit.utilities.getBBox(i)){if(i.tagName==="a"&&i.childNodes.length===1)i=i.firstChild;if(L.indexOf(i)==-1){L[d]=i;d++;i=ra.requestSelector(i);L.length>1&&i.showGrips(false)}}}ha("selected",L);c||L.length==1?ra.requestSelector(L[0]).showGrips(true):ra.requestSelector(L[0]).showGrips(false);for(L.sort(function(z,o){if(z&&o&&z.compareDocumentPosition)return 3-
(o.compareDocumentPosition(z)&6);else if(z==null)return 1});L[0]==null;)L.shift(0)}},Wa=this.selectOnly=function(b,c){za(true);gb(b,c)};this.removeFromSelection=function(b){if(L[0]!=null)if(b.length!=0){var c=Array(L.length);j=0;len=L.length;for(var d=0;d<len;++d){var m=L[d];if(m)if(b.indexOf(m)==-1){c[j]=m;j++}else ra.releaseSelector(m)}L=c}};this.selectAllInCurrentLayer=function(){var b=B().getCurrentLayer();if(b){sa="select";Wa($(O||b).children())}};var Pb=this.getMouseTarget=function(b){if(b==
null)return null;b=b.target;if(b.correspondingUseElement)b=b.correspondingUseElement;if(["http://www.w3.org/1998/Math/MathML","http://www.w3.org/1999/xhtml"].indexOf(b.namespaceURI)>=0&&b.id!="svgcanvas")for(;b.nodeName!="foreignObject";){b=b.parentNode;if(!b)return k}var c=B().getCurrentLayer();if([k,a,n,c].indexOf(b)>=0)return k;if($(b).closest("#selectorParentGroup").length)return ra.selectorParentGroup;for(;b.parentNode!==(O||c);)b=b.parentNode;return b};(function(){var b=null,c=null,d=null,m=
null,i=null,z={},o={minx:null,miny:null,maxx:null,maxy:null};$(a).mousedown(function(h){if(!(e.spaceKey||h.button===1)){var q=h.button===2;h.altKey&&svgCanvas.cloneSelectedElements(0,0);nb=$('#svgcontent g')[0].getScreenCTM().inverse();var w=oa(h.pageX,h.pageY,nb),u=w.x*A,t=w.y*A;h.preventDefault();if(q){sa="select";Vb=w}w=u/A;t=t/A;var C=Pb(h);if(C.tagName==="a"&&C.childNodes.length===1)C=C.firstChild;u=m=c=w;var E=i=d=t;if(v.gridSnapping){w=la(w);t=la(t);c=la(c);d=la(d)}if(C==ra.selectorParentGroup&&L[0]!=null){C=
h.target;var H=Ab(C,"type");if(H=="rotate")sa="rotate";else if(H=="resize"){sa="resize";cb=Ab(C,"dir")}C=L[0]}Qa=C.getAttribute("transform");H=ca(C);switch(sa){case "select":xa=true;cb="none";if(q)xa=false;if(C!=k){if(L.indexOf(C)==-1){h.shiftKey||za(true);gb([C]);La=C;qa.clear()}if(!q)for(q=0;q<L.length;++q)if(L[q]!=null){var I=ca(L[q]);I.numberOfItems?I.insertItemBefore(k.createSVGTransform(),0):I.appendItem(k.createSVGTransform())}}else if(!q){za();sa="multiselect";if(wa==null)wa=ra.getRubberBandBox();
m*=A;i*=A;Ga(wa,{x:m,y:i,width:0,height:0,display:"inline"},100)}break;case "zoom":xa=true;if(wa==null)wa=ra.getRubberBandBox();Ga(wa,{x:u*A,y:u*A,width:0,height:0,display:"inline"},100);break;case "resize":xa=true;c=w;d=t;z=svgedit.utilities.getBBox($("#selectedBox0")[0]);var P={};$.each(z,function(W,Y){P[W]=Y/A});z=P;q=bb(C)?1:0;if(ia(H)){H.insertItemBefore(k.createSVGTransform(),q);H.insertItemBefore(k.createSVGTransform(),q);H.insertItemBefore(k.createSVGTransform(),q)}else{H.appendItem(k.createSVGTransform());
H.appendItem(k.createSVGTransform());H.appendItem(k.createSVGTransform());if(svgedit.browser.supportsNonScalingStroke()){if(w=svgedit.browser.isWebkit())I=function(W){var Y=W.getAttributeNS(null,"stroke");W.removeAttributeNS(null,"stroke");setTimeout(function(){W.setAttributeNS(null,"stroke",Y)},0)};C.style.vectorEffect="non-scaling-stroke";w&&I(C);t=C.getElementsByTagName("*");u=t.length;for(q=0;q<u;q++){t[q].style.vectorEffect="non-scaling-stroke";w&&I(t[q])}}}break;case "fhellipse":case "fhrect":case "fhpath":xa=
true;b=u+","+E+" ";I=N.stroke_width==0?1:N.stroke_width;na({element:"polyline",curStyles:true,attr:{points:b,id:Fa(),fill:"none",opacity:N.opacity/2,"stroke-linecap":"round",style:"pointer-events:none"}});o.minx=u;o.maxx=u;o.miny=E;o.maxy=E;break;case "image":xa=true;I=na({element:"image",attr:{x:w,y:t,width:0,height:0,id:Fa(),opacity:N.opacity/2,style:"pointer-events:inherit"}});lb(I,Bb);Mb(I);break;case "square":case "rect":xa=true;c=w;d=t;na({element:"rect",curStyles:true,attr:{x:w,y:t,width:0,
height:0,id:Fa(),opacity:N.opacity/2}});break;case "line":xa=true;I=N.stroke_width==0?1:N.stroke_width;na({element:"line",curStyles:true,attr:{x1:w,y1:t,x2:w,y2:t,id:Fa(),stroke:N.stroke,"stroke-width":I,"stroke-dasharray":N.stroke_dasharray,"stroke-linejoin":N.stroke_linejoin,"stroke-linecap":N.stroke_linecap,"stroke-opacity":N.stroke_opacity,fill:"none",opacity:N.opacity/2,style:"pointer-events:none"}});break;case "circle":xa=true;na({element:"circle",curStyles:true,attr:{cx:w,cy:t,r:0,id:Fa(),
opacity:N.opacity/2}});break;case "ellipse":xa=true;na({element:"ellipse",curStyles:true,attr:{cx:w,cy:t,rx:0,ry:0,id:Fa(),opacity:N.opacity/2}});break;case "text":xa=true;na({element:"text",curStyles:true,attr:{x:w,y:t,id:Fa(),fill:Ua.fill,"stroke-width":Ua.stroke_width,"font-size":Ua.font_size,"font-family":Ua.font_family,"text-anchor":"middle","xml:space":"preserve",opacity:N.opacity}});break;case "path":case "pathedit":c*=A;d*=A;qa.mouseDown(h,C,c,d);xa=true;break;case "textedit":c*=A;d*=A;Ra.mouseDown(h,
C,c,d);xa=true;break;case "rotate":xa=true;e.undoMgr.beginUndoableChange("transform",L)}h=Db("mouseDown",{event:h,start_x:c,start_y:d,selectedElements:L},true);$.each(h,function(W,Y){if(Y&&Y.started)xa=true})}}).mousemove(function(h){if(xa)if(!(h.button===1||e.spaceKey)){var q=L[0],w=oa(h.pageX,h.pageY,nb),u=w.x*A;w=w.y*A;var t=va(db()),C=x=u/A,E=y=w/A;if(v.gridSnapping){x=la(x);y=la(y)}h.preventDefault();switch(sa){case "select":if(L[0]!==null){C=x-c;var H=y-d;if(v.gridSnapping){C=la(C);H=la(H)}if(h.shiftKey){var I=
Ya(c,d,x,y);x=I.x;y=I.y}if(C!=0||H!=0){I=L.length;for(E=0;E<I;++E){q=L[E];if(q==null)break;var P=k.createSVGTransform();t=ca(q);P.setTranslate(C,H);t.numberOfItems?t.replaceItem(P,0):t.appendItem(P);ra.requestSelector(q).resize()}ha("transition",L)}}break;case "multiselect":C*=A;E*=A;Ga(wa,{x:Math.min(m,C),y:Math.min(i,E),width:Math.abs(C-m),height:Math.abs(E-i)},100);t=[];C=[];P=Wb();I=L.length;for(E=0;E<I;++E){H=P.indexOf(L[E]);if(H==-1)t.push(L[E]);else P[H]=null}I=P.length;for(E=0;E<I;++E)P[E]&&
C.push(P[E]);t.length>0&&e.removeFromSelection(t);C.length>0&&gb(C);break;case "resize":t=ca(q);H=(I=ia(t))?z:svgedit.utilities.getBBox(q);E=H.x;P=H.y;var W=H.width,Y=H.height;C=x-c;H=y-d;if(v.gridSnapping){C=la(C);H=la(H);Y=la(Y);W=la(W)}var R=bb(q);if(R){var T=Math.sqrt(C*C+H*H);H=Math.atan2(H,C)-R*Math.PI/180;C=T*Math.cos(H);H=T*Math.sin(H)}if(cb.indexOf("n")==-1&&cb.indexOf("s")==-1)H=0;if(cb.indexOf("e")==-1&&cb.indexOf("w")==-1)C=0;var V=T=0,aa=Y?(Y+H)/Y:1,Ja=W?(W+C)/W:1;if(cb.indexOf("n")>=
0){aa=Y?(Y-H)/Y:1;V=Y}if(cb.indexOf("w")>=0){Ja=W?(W-C)/W:1;T=W}C=k.createSVGTransform();H=k.createSVGTransform();W=k.createSVGTransform();if(v.gridSnapping){E=la(E);T=la(T);P=la(P);V=la(V)}C.setTranslate(-(E+T),-(P+V));if(h.shiftKey)if(Ja==1)Ja=aa;else aa=Ja;H.setScale(Ja,aa);W.setTranslate(E+T,P+V);if(I){I=R?1:0;t.replaceItem(C,2+I);t.replaceItem(H,1+I);t.replaceItem(W,0+I)}else{I=t.numberOfItems;t.replaceItem(W,I-3);t.replaceItem(H,I-2);t.replaceItem(C,I-1)}ra.requestSelector(q).resize();ha("transition",
L);break;case "zoom":C*=A;E*=A;Ga(wa,{x:Math.min(m*A,C),y:Math.min(i*A,E),width:Math.abs(C-m*A),height:Math.abs(E-i*A)},100);break;case "text":Ga(t,{x:x,y:y},1E3);break;case "line":E=null;window.opera||k.suspendRedraw(1E3);if(v.gridSnapping){x=la(x);y=la(y)}C=x;I=y;if(h.shiftKey){I=Ya(c,d,C,I);C=I.x;I=I.y}t.setAttributeNS(null,"x2",C);t.setAttributeNS(null,"y2",I);window.opera||k.unsuspendRedraw(E);break;case "foreignObject":case "square":case "rect":case "image":C=Math.abs(x-c);I=Math.abs(y-d);if(sa==
"square"||h.shiftKey){C=I=Math.max(C,I);E=c<x?c:c-C;P=d<y?d:d-I}else{E=Math.min(c,x);P=Math.min(d,y)}if(v.gridSnapping){C=la(C);I=la(I);E=la(E);P=la(P)}Ga(t,{width:C,height:I,x:E,y:P},1E3);break;case "circle":I=$(t).attr(["cx","cy"]);C=I.cx;I=I.cy;C=Math.sqrt((x-C)*(x-C)+(y-I)*(y-I));if(v.gridSnapping)C=la(C);t.setAttributeNS(null,"r",C);break;case "ellipse":I=$(t).attr(["cx","cy"]);C=I.cx;I=I.cy;E=null;window.opera||k.suspendRedraw(1E3);if(v.gridSnapping){x=la(x);C=la(C);y=la(y);I=la(I)}t.setAttributeNS(null,
"rx",Math.abs(x-C));t.setAttributeNS(null,"ry",Math.abs(h.shiftKey?x-C:y-I));window.opera||k.unsuspendRedraw(E);break;case "fhellipse":case "fhrect":o.minx=Math.min(C,o.minx);o.maxx=Math.max(C,o.maxx);o.miny=Math.min(E,o.miny);o.maxy=Math.max(E,o.maxy);case "fhpath":b+=+C+","+E+" ";t.setAttributeNS(null,"points",b);break;case "path":case "pathedit":x*=A;y*=A;if(v.gridSnapping){x=la(x);y=la(y);c=la(c);d=la(d)}if(h.shiftKey){if(I=svgedit.path.path){t=I.dragging?I.dragging[0]:c;I=I.dragging?I.dragging[1]:
d}else{t=c;I=d}I=Ya(t,I,x,y);x=I.x;y=I.y}if(wa&&wa.getAttribute("display")!=="none"){C*=A;E*=A;Ga(wa,{x:Math.min(m*A,C),y:Math.min(i*A,E),width:Math.abs(C-m*A),height:Math.abs(E-i*A)},100)}qa.mouseMove(x,y);break;case "textedit":x*=A;y*=A;Ra.mouseMove(u,w);break;case "rotate":H=svgedit.utilities.getBBox(q);C=H.x+H.width/2;I=H.y+H.height/2;t=kb(q);t=oa(C,I,t);C=t.x;I=t.y;R=(Math.atan2(I-y,C-x)*(180/Math.PI)-90)%360;if(v.gridSnapping)R=la(R);if(h.shiftKey)R=Math.round(R/45)*45;e.setRotationAngle(R<
-180?360+R:R,true);ha("transition",L)}Db("mouseMove",{event:h,mouse_x:u,mouse_y:w,selected:q})}}).click(function(h){h.preventDefault();return false}).dblclick(function(h){var q=h.target.parentNode;if(q!==O){var w=Pb(h),u=w.tagName;if(u==="text"&&sa!=="textedit"){h=oa(h.pageX,h.pageY,nb);Ra.select(w,h.x,h.y)}if((u==="g"||u==="a")&&bb(w)){Yb(w);w=L[0];za(true)}O&&Qb();q.tagName!=="g"&&q.tagName!=="a"||q===B().getCurrentLayer()||w===ra.selectorParentGroup||lc(w)}}).mouseup(function(h){if(h.button!==
2){var q=La;La=null;if(xa){var w=oa(h.pageX,h.pageY,nb),u=w.x*A;w=w.y*A;var t=u/A,C=w/A,E=va(db()),H=false;xa=false;switch(sa){case "resize":case "multiselect":if(wa!=null){wa.setAttribute("display","none");jb=[]}sa="select";case "select":if(L[0]!=null){if(L[1]==null){u=L[0];switch(u.tagName){case "g":case "use":case "image":case "foreignObject":break;default:Sa.fill=u.getAttribute("fill");Sa.fill_opacity=u.getAttribute("fill-opacity");Sa.stroke=u.getAttribute("stroke");Sa.stroke_opacity=u.getAttribute("stroke-opacity");
Sa.stroke_width=u.getAttribute("stroke-width");Sa.stroke_dasharray=u.getAttribute("stroke-dasharray");Sa.stroke_linejoin=u.getAttribute("stroke-linejoin");Sa.stroke_linecap=u.getAttribute("stroke-linecap")}if(u.tagName=="text"){Ua.font_size=u.getAttribute("font-size");Ua.font_family=u.getAttribute("font-family")}ra.requestSelector(u).showGrips(true)}Ob();if(t!=m||C!=i){h=L.length;for(u=0;u<h;++u){if(L[u]==null)break;L[u].firstChild||ra.requestSelector(L[u]).resize()}}else{u=h.target;if(L[0].nodeName===
"path"&&L[1]==null)qa.select(L[0]);else h.shiftKey&&q!=u&&e.removeFromSelection([u])}if(svgedit.browser.supportsNonScalingStroke())if(h=L[0]){h.removeAttribute("style");svgedit.utilities.walkTree(h,function(W){W.removeAttribute("style")})}}return;case "zoom":wa!=null&&wa.setAttribute("display","none");ha("zoomed",{x:Math.min(m,t),y:Math.min(i,C),width:Math.abs(t-m),height:Math.abs(C-i),factor:h.shiftKey?0.5:2});return;case "fhpath":q=E.getAttribute("points");t=q.indexOf(",");if(H=t>=0?q.indexOf(",",
t+1)>=0:q.indexOf(" ",q.indexOf(" ")+1)>=0)E=qa.smoothPolylineIntoPath(E);break;case "line":q=$(E).attr(["x1","x2","y1","y2"]);H=q.x1!=q.x2||q.y1!=q.y2;break;case "foreignObject":case "square":case "rect":case "image":q=$(E).attr(["width","height"]);H=q.width!=0||q.height!=0||sa==="image";break;case "circle":H=E.getAttribute("r")!=0;break;case "ellipse":q=$(E).attr(["rx","ry"]);H=q.rx!=null||q.ry!=null;break;case "fhellipse":if(o.maxx-o.minx>0&&o.maxy-o.miny>0){E=na({element:"ellipse",curStyles:true,
attr:{cx:(o.minx+o.maxx)/2,cy:(o.miny+o.maxy)/2,rx:(o.maxx-o.minx)/2,ry:(o.maxy-o.miny)/2,id:db()}});ha("changed",[E]);H=true}break;case "fhrect":if(o.maxx-o.minx>0&&o.maxy-o.miny>0){E=na({element:"rect",curStyles:true,attr:{x:o.minx,y:o.miny,width:o.maxx-o.minx,height:o.maxy-o.miny,id:db()}});ha("changed",[E]);H=true}break;case "text":H=true;Wa([E]);Ra.start(E);break;case "path":E=null;xa=true;q=qa.mouseUp(h,E,u,w);E=q.element;H=q.keep;break;case "pathedit":H=true;E=null;qa.mouseUp(h);break;case "textedit":H=
false;E=null;Ra.mouseUp(h,u,w);break;case "rotate":H=true;E=null;sa="select";q=e.undoMgr.finishUndoableChange();q.isEmpty()||ma(q);Ob();ha("changed",L)}u=Db("mouseUp",{event:h,mouse_x:u,mouse_y:w},true);$.each(u,function(W,Y){if(Y){H=Y.keep||H;E=Y.element;xa=Y.started||xa}});if(!H&&E!=null){B().releaseId(db());E.parentNode.removeChild(E);E=null;for(u=h.target;u.parentNode.parentNode.tagName=="g";)u=u.parentNode;if((sa!="path"||!drawn_path)&&u.parentNode.id!="selectorParentGroup"&&u.id!="svgcanvas"&&
u.id!="svgroot"){e.setMode("select");Wa([u],true)}}else if(E!=null){e.addedNew=true;h=0.2;var I;if(Ib.beginElement&&E.getAttribute("opacity")!=N.opacity){I=$(Ib).clone().attr({to:N.opacity,dur:h}).appendTo(E);try{I[0].beginElement()}catch(P){}}else h=0;setTimeout(function(){I&&I.remove();E.setAttribute("opacity",N.opacity);E.setAttribute("style","pointer-events:inherit");Oa(E);if(sa==="path")qa.toEditMode(E);else v.selectNew&&Wa([E],true);ma(new Ha(E));ha("changed",[E])},h*1E3)}Qa=null}}});$(a).bind("mousewheel DOMMouseScroll",
function(h){if(h.shiftKey){h.preventDefault();nb=$('#svgcontent g')[0].getScreenCTM().inverse();var q=oa(h.pageX,h.pageY,nb);q={x:q.x,y:q.y,width:0,height:0};if(h.wheelDelta)if(h.wheelDelta>=120)q.factor=2;else{if(h.wheelDelta<=-120)q.factor=0.5}else if(h.detail)if(h.detail>0)q.factor=0.5;else if(h.detail<0)q.factor=2;q.factor&&ha("zoomed",q)}})})();var Mb=function(b){$(b).click(function(c){c.preventDefault()})},Ra=e.textActions=function(){function b(R){var T=w.value==="";$(w).focus();if(!arguments.length)if(T)R=0;else{if(w.selectionEnd!==
w.selectionStart)return;R=w.selectionEnd}var V;V=E[R];T||w.setSelectionRange(R,R);u=va("text_cursor");if(!u){u=document.createElementNS(s,"line");Ga(u,{id:"text_cursor",stroke:"#333","stroke-width":1});u=va("selectorParentGroup").appendChild(u)}C||(C=setInterval(function(){var aa=u.getAttribute("display")==="none";u.setAttribute("display",aa?"inline":"none")},600));T=z(V.x,H.y);V=z(V.x,H.y+H.height);Ga(u,{x1:T.x,y1:T.y,x2:V.x,y2:V.y,visibility:"visible",display:"inline"});t&&t.setAttribute("d","")}
function c(R,T,V){if(R===T)b(T);else{V||w.setSelectionRange(R,T);t=va("text_selectblock");if(!t){t=document.createElementNS(s,"path");Ga(t,{id:"text_selectblock",fill:"green",opacity:0.5,style:"pointer-events:none"});va("selectorParentGroup").appendChild(t)}R=E[R];var aa=E[T];u.setAttribute("visibility","hidden");T=z(R.x,H.y);V=z(R.x+(aa.x-R.x),H.y);var Ja=z(R.x,H.y+H.height);R=z(R.x+(aa.x-R.x),H.y+H.height);Ga(t,{d:"M"+T.x+","+T.y+" L"+V.x+","+V.y+" "+R.x+","+R.y+" "+Ja.x+","+Ja.y+"z",display:"inline"})}}
function d(R,T){var V=k.createSVGPoint();V.x=R;V.y=T;if(E.length==1)return 0;V=q.getCharNumAtPosition(V);if(V<0){V=E.length-2;if(R<=E[0].x)V=0}else if(V>=E.length-2)V=E.length-2;var aa=E[V];R>aa.x+aa.width/2&&V++;return V}function m(R,T,V){var aa=w.selectionStart;R=d(R,T);c(Math.min(aa,R),Math.max(aa,R),!V)}function i(R,T){var V={x:R,y:T};V.x/=A;V.y/=A;if(I){var aa=oa(V.x,V.y,I.inverse());V.x=aa.x;V.y=aa.y}return V}function z(R,T){var V={x:R,y:T};if(I){var aa=oa(V.x,V.y,I);V.x=aa.x;V.y=aa.y}V.x*=
A;V.y*=A;return V}function o(R){c(0,q.textContent.length);$(this).unbind(R)}function h(R){if(Y&&q){var T=oa(R.pageX,R.pageY,nb);T=i(T.x*A,T.y*A);T=d(T.x,T.y);var V=q.textContent,aa=V.substr(0,T).replace(/[a-z0-9]+$/i,"").length;V=V.substr(T).match(/^[a-z0-9]+/i);c(aa,(V?V[0].length:0)+T);$(R.target).click(o);setTimeout(function(){$(R.target).unbind("click",o)},300)}}var q,w,u,t,C,E=[],H,I,P,W,Y;return{select:function(R,T,V){q=R;Ra.toEditMode(T,V)},start:function(R){q=R;Ra.toEditMode()},mouseDown:function(R,
T,V,aa){R=i(V,aa);w.focus();b(d(R.x,R.y));P=V;W=aa},mouseMove:function(R,T){var V=i(R,T);m(V.x,V.y)},mouseUp:function(R,T,V){var aa=i(T,V);m(aa.x,aa.y,true);R.target!==q&&T<P+2&&T>P-2&&V<W+2&&V>W-2&&Ra.toSelectMode(true)},setCursor:b,toEditMode:function(R,T){Y=false;sa="textedit";ra.requestSelector(q).showGrips(false);ra.requestSelector(q);Ra.init();$(q).css("cursor","text");if(arguments.length){var V=i(R,T);b(d(V.x,V.y))}else b();setTimeout(function(){Y=true},300)},toSelectMode:function(R){sa="select";
clearInterval(C);C=null;t&&$(t).attr("display","none");u&&$(u).attr("visibility","hidden");$(q).css("cursor","move");if(R){za();$(q).css("cursor","move");ha("selected",[q]);gb([q],true)}q&&!q.textContent.length&&e.deleteSelectedElements();$(w).blur();q=false},setInputElem:function(R){w=R},clear:function(){sa=="textedit"&&Ra.toSelectMode()},init:function(){if(q){if(!q.parentNode){q=L[0];ra.requestSelector(q).showGrips(false)}var R=q.textContent.length,T=q.getAttribute("transform");H=svgedit.utilities.getBBox(q);
I=T?kb(q):null;E=Array(R);w.focus();$(q).unbind("dblclick",h).dblclick(h);if(!R)var V={x:H.x+H.width/2,width:0};for(T=0;T<R;T++){var aa=q.getStartPositionOfChar(T);V=q.getEndPositionOfChar(T);if(!svgedit.browser.supportsGoodTextCharPos()){var Ja=e.contentW*A;aa.x-=Ja;V.x-=Ja;aa.x/=A;V.x/=A}E[T]={x:aa.x,y:H.y,width:V.x-aa.x,height:H.height}}E.push({x:V.x,width:0});c(w.selectionStart,w.selectionEnd,true)}}}}(),qa=e.pathActions=function(){var b=false,c,d,m;svgedit.path.Path.prototype.endChanges=function(o){if(svgedit.browser.isWebkit()){var h=
this.elem;h.setAttribute("d",qa.convertPath(h))}o=new Ia(this.elem,{d:this.last_d},o);ma(o);ha("changed",[this.elem])};svgedit.path.Path.prototype.addPtsToSelection=function(o){$.isArray(o)||(o=[o]);for(var h=0;h<o.length;h++){var q=o[h],w=this.segs[q];w.ptgrip&&this.selected_pts.indexOf(q)==-1&&q>=0&&this.selected_pts.push(q)}this.selected_pts.sort();h=this.selected_pts.length;for(o=Array(h);h--;){w=this.segs[this.selected_pts[h]];w.select(true);o[h]=w.ptgrip}qa.canDeleteNodes=true;qa.closed_subpath=
this.subpathIsClosed(this.selected_pts[0]);ha("selected",o)};var i=c=null,z=false;return{mouseDown:function(o,h,q,w){if(sa==="path"){mouse_x=q;mouse_y=w;w=mouse_x/A;h=mouse_y/A;q=va("path_stretch_line");d=[w,h];if(v.gridSnapping){w=la(w);h=la(h);mouse_x=la(mouse_x);mouse_y=la(mouse_y)}if(!q){q=document.createElementNS(s,"path");Ga(q,{id:"path_stretch_line",stroke:"#22C","stroke-width":"0.5",fill:"none"});q=va("selectorParentGroup").appendChild(q)}q.setAttribute("display","inline");var u=null;if(i){u=
i.pathSegList;for(var t=u.numberOfItems,C=6/A,E=false;t;){t--;var H=u.getItem(t),I=H.x;H=H.y;if(w>=I-C&&w<=I+C&&h>=H-C&&h<=H+C){E=true;break}}C=db();svgedit.path.removePath_(C);C=va(C);I=u.numberOfItems;if(E){if(t<=1&&I>=2){w=u.getItem(0).x;h=u.getItem(0).y;o=q.pathSegList.getItem(1);o=o.pathSegType===4?i.createSVGPathSegLinetoAbs(w,h):i.createSVGPathSegCurvetoCubicAbs(w,h,o.x1/A,o.y1/A,w,h);w=i.createSVGPathSegClosePath();u.appendItem(o);u.appendItem(w)}else if(I<3)return u=false;$(q).remove();element=
C;i=null;xa=false;if(b){svgedit.path.path.matrix&&Fb(C,{},svgedit.path.path.matrix.inverse());q=C.getAttribute("d");o=$(svgedit.path.path.elem).attr("d");$(svgedit.path.path.elem).attr("d",o+q);$(C).remove();svgedit.path.path.matrix&&svgedit.path.recalcRotatedPath();svgedit.path.path.init();qa.toEditMode(svgedit.path.path.elem);svgedit.path.path.selectPt();return false}}else{if(!$.contains(a,Pb(o))){console.log("Clicked outside canvas");return false}u=i.pathSegList.numberOfItems;t=i.pathSegList.getItem(u-
1);C=t.x;t=t.y;if(o.shiftKey){o=Ya(C,t,w,h);w=o.x;h=o.y}o=q.pathSegList.getItem(1);o=o.pathSegType===4?i.createSVGPathSegLinetoAbs(Eb(w),Eb(h)):i.createSVGPathSegCurvetoCubicAbs(Eb(w),Eb(h),o.x1/A,o.y1/A,o.x2/A,o.y2/A);i.pathSegList.appendItem(o);w*=A;h*=A;q.setAttribute("d",["M",w,h,w,h].join(" "));q=u;if(b)q+=svgedit.path.path.segs.length;svgedit.path.addPointGrip(q,w,h)}}else{d_attr="M"+w+","+h+" ";i=na({element:"path",curStyles:true,attr:{d:d_attr,id:Fa(),opacity:N.opacity/2}});q.setAttribute("d",
["M",mouse_x,mouse_y,mouse_x,mouse_y].join(" "));q=b?svgedit.path.path.segs.length:0;svgedit.path.addPointGrip(q,mouse_x,mouse_y)}}else if(svgedit.path.path){svgedit.path.path.storeD();C=o.target.id;if(C.substr(0,14)=="pathpointgrip_"){h=svgedit.path.path.cur_pt=parseInt(C.substr(14));svgedit.path.path.dragging=[q,w];u=svgedit.path.path.segs[h];if(o.shiftKey)u.selected?svgedit.path.path.removePtFromSelection(h):svgedit.path.path.addPtsToSelection(h);else{if(svgedit.path.path.selected_pts.length<=
1||!u.selected)svgedit.path.path.clearSelection();svgedit.path.path.addPtsToSelection(h)}}else if(C.indexOf("ctrlpointgrip_")==0){svgedit.path.path.dragging=[q,w];o=C.split("_")[1].split("c");h=o[0]-0;svgedit.path.path.selectPt(h,o[1]-0)}if(!svgedit.path.path.dragging){if(wa==null)wa=ra.getRubberBandBox();Ga(wa,{x:q*A,y:w*A,width:0,height:0,display:"inline"},100)}}},mouseMove:function(o,h){z=true;if(sa==="path"){if(i){var q=i.pathSegList,w=q.numberOfItems-1;if(d){var u=svgedit.path.addCtrlGrip("1c1"),
t=svgedit.path.addCtrlGrip("0c2");u.setAttribute("cx",o);u.setAttribute("cy",h);u.setAttribute("display","inline");u=d[0];var C=d[1];q.getItem(w);var E=u+(u-o/A),H=C+(C-h/A);t.setAttribute("cx",E*A);t.setAttribute("cy",H*A);t.setAttribute("display","inline");t=svgedit.path.getCtrlLine(1);Ga(t,{x1:o,y1:h,x2:E*A,y2:H*A,display:"inline"});if(w===0)m=[o,h];else{var I=q.getItem(w-1);q=I.x;t=I.y;if(I.pathSegType===6){q+=q-I.x2;t+=t-I.y2}else if(m){q=m[0]/A;t=m[1]/A}svgedit.path.replacePathSeg(6,w,[u,C,
q,t,E,H],i)}}else if(u=va("path_stretch_line")){w=q.getItem(w);if(w.pathSegType===6)svgedit.path.replacePathSeg(6,1,[o,h,(w.x+(w.x-w.x2))*A,(w.y+(w.y-w.y2))*A,o,h],u);else m?svgedit.path.replacePathSeg(6,1,[o,h,m[0],m[1],o,h],u):svgedit.path.replacePathSeg(4,1,[o,h],u)}}}else if(svgedit.path.path.dragging){u=svgedit.path.getPointFromGrip({x:svgedit.path.path.dragging[0],y:svgedit.path.path.dragging[1]},svgedit.path.path);C=svgedit.path.getPointFromGrip({x:o,y:h},svgedit.path.path);w=C.x-u.x;u=C.y-
u.y;svgedit.path.path.dragging=[o,h];svgedit.path.path.dragctrl?svgedit.path.path.moveCtrl(w,u):svgedit.path.path.movePts(w,u)}else{svgedit.path.path.selected_pts=[];svgedit.path.path.eachSeg(function(){if(this.next||this.prev){var P=wa.getBBox(),W=svgedit.path.getGripPt(this);P=svgedit.math.rectsIntersect(P,{x:W.x,y:W.y,width:0,height:0});this.select(P);P&&svgedit.path.path.selected_pts.push(this.index)}})}},mouseUp:function(o,h){if(sa==="path"){d=null;if(!i){h=va(db());xa=false;m=null}return{keep:true,
element:h}}if(svgedit.path.path.dragging){var q=svgedit.path.path.cur_pt;svgedit.path.path.dragging=false;svgedit.path.path.dragctrl=false;svgedit.path.path.update();z&&svgedit.path.path.endChanges("Move path point(s)");!o.shiftKey&&!z&&svgedit.path.path.selectPt(q)}else if(wa&&wa.getAttribute("display")!="none"){wa.setAttribute("display","none");wa.getAttribute("width")<=2&&wa.getAttribute("height")<=2&&qa.toSelectMode(o.target)}else qa.toSelectMode(o.target);z=false},toEditMode:function(o){svgedit.path.path=
svgedit.path.getPath_(o);sa="pathedit";za();svgedit.path.path.show(true).update();svgedit.path.path.oldbbox=svgedit.utilities.getBBox(svgedit.path.path.elem);b=false},toSelectMode:function(o){var h=o==svgedit.path.path.elem;sa="select";svgedit.path.path.show(false);c=false;za();svgedit.path.path.matrix&&svgedit.path.recalcRotatedPath();if(h){ha("selected",[o]);gb([o],true)}},addSubPath:function(o){if(o){sa="path";b=true}else{qa.clear(true);qa.toEditMode(svgedit.path.path.elem)}},select:function(o){if(c===
o){qa.toEditMode(o);sa="pathedit"}else c=o},reorient:function(){var o=L[0];if(o)if(bb(o)!=0){var h=new ua("Reorient path"),q={d:o.getAttribute("d"),transform:o.getAttribute("transform")};h.addSubCommand(new Ia(o,q));za();this.resetOrientation(o);ma(h);svgedit.path.getPath_(o).show(false).matrix=null;this.clear();gb([o],true);ha("changed",L)}},clear:function(){c=null;if(i){var o=va(db());$(va("path_stretch_line")).remove();$(o).remove();$(va("pathpointgrip_container")).find("*").attr("display","none");
i=m=null;xa=false}else sa=="pathedit"&&this.toSelectMode();svgedit.path.path&&svgedit.path.path.init().show(false)},resetOrientation:function(o){if(o==null||o.nodeName!="path")return false;var h=ca(o),q=da(h).matrix;h.clear();o.removeAttribute("transform");h=o.pathSegList;for(var w=h.numberOfItems,u=0;u<w;++u){var t=h.getItem(u),C=t.pathSegType;if(C!=1){var E=[];$.each(["",1,2],function(H,I){var P=t["x"+I],W=t["y"+I];if(P!==undefined&&W!==undefined){P=oa(P,W,q);E.splice(E.length,0,P.x,P.y)}});svgedit.path.replacePathSeg(C,
u,E,o)}}l(o,q)},zoomChange:function(){sa=="pathedit"&&svgedit.path.path.update()},getNodePoint:function(){var o=svgedit.path.path.segs[svgedit.path.path.selected_pts.length?svgedit.path.path.selected_pts[0]:1];return{x:o.item.x,y:o.item.y,type:o.type}},linkControlPoints:function(o){svgedit.path.setLinkControlPoints(o)},clonePathNode:function(){svgedit.path.path.storeD();for(var o=svgedit.path.path.selected_pts,h=o.length,q=[];h--;){var w=o[h];svgedit.path.path.addSeg(w);q.push(w+h);q.push(w+h+1)}svgedit.path.path.init().addPtsToSelection(q);
svgedit.path.path.endChanges("Clone path node(s)")},opencloseSubPath:function(){var o=svgedit.path.path.selected_pts;if(o.length===1){var h=svgedit.path.path.elem,q=h.pathSegList,w=o[0],u=null,t=null;svgedit.path.path.eachSeg(function(I){if(this.type===2&&I<=w)t=this.item;if(I<=w)return true;if(this.type===2){u=I;return false}else if(this.type===1)return u=false});if(u==null)u=svgedit.path.path.segs.length-1;if(u!==false){var C=h.createSVGPathSegLinetoAbs(t.x,t.y),E=h.createSVGPathSegClosePath();
if(u==svgedit.path.path.segs.length-1){q.appendItem(C);q.appendItem(E)}else{svgedit.path.insertItemBefore(h,E,u);svgedit.path.insertItemBefore(h,C,u)}svgedit.path.path.init().selectPt(u+1)}else if(svgedit.path.path.segs[w].mate){q.removeItem(w);q.removeItem(w);svgedit.path.path.init().selectPt(w-1)}else{for(o=0;o<q.numberOfItems;o++){var H=q.getItem(o);if(H.pathSegType===2)C=o;else if(o===w)q.removeItem(C);else if(H.pathSegType===1&&w<o){E=o-1;q.removeItem(o);break}}for(o=w-C-1;o--;)svgedit.path.insertItemBefore(h,
q.getItem(C),E);h=q.getItem(C);svgedit.path.replacePathSeg(2,C,[h.x,h.y]);o=w;svgedit.path.path.init().selectPt(0)}}},deletePathNode:function(){if(qa.canDeleteNodes){svgedit.path.path.storeD();for(var o=svgedit.path.path.selected_pts,h=o.length;h--;)svgedit.path.path.deleteSeg(o[h]);var q=function(){var w=svgedit.path.path.elem.pathSegList,u=w.numberOfItems,t=function(H,I){for(;I--;)w.removeItem(H)};if(u<=1)return true;for(;u--;){var C=w.getItem(u);if(C.pathSegType===1){C=w.getItem(u-1);var E=w.getItem(u-
2);if(C.pathSegType===2){t(u-1,2);q();break}else if(E.pathSegType===2){t(u-2,3);q();break}}else if(C.pathSegType===2)if(u>0){C=w.getItem(u-1).pathSegType;if(C===2){t(u-1,1);q();break}else if(C===1&&w.numberOfItems-1===u){t(u,1);q();break}}}return false};q();if(svgedit.path.path.elem.pathSegList.numberOfItems<=1){qa.toSelectMode(svgedit.path.path.elem);e.deleteSelectedElements()}else{svgedit.path.path.init();svgedit.path.path.clearSelection();if(window.opera){o=$(svgedit.path.path.elem);o.attr("d",
o.attr("d"))}svgedit.path.path.endChanges("Delete path node(s)")}}},smoothPolylineIntoPath:function(o){var h=o.points,q=h.numberOfItems;if(q>=4){var w=h.getItem(0),u=null;o=[];o.push(["M",w.x,",",w.y," C"].join(""));for(var t=1;t<=q-4;t+=3){var C=h.getItem(t),E=h.getItem(t+1),H=h.getItem(t+2);if(u)if((w=svgedit.path.smoothControlPoints(u,C,w))&&w.length==2){C=o[o.length-1].split(",");C[2]=w[0].x;C[3]=w[0].y;o[o.length-1]=C.join(",");C=w[1]}o.push([C.x,C.y,E.x,E.y,H.x,H.y].join(","));w=H;u=E}for(o.push("L");t<
q;++t){E=h.getItem(t);o.push([E.x,E.y].join(","))}o=o.join(" ");o=na({element:"path",curStyles:true,attr:{id:db(),d:o,fill:"none"}})}return o},setSegType:function(o){svgedit.path.path.setSegType(o)},moveNode:function(o,h){var q=svgedit.path.path.selected_pts;if(q.length){svgedit.path.path.storeD();q=svgedit.path.path.segs[q[0]];var w={x:0,y:0};w[o]=h-q.item[o];q.move(w.x,w.y);svgedit.path.path.endChanges("Move path point")}},fixEnd:function(o){for(var h=o.pathSegList,q=h.numberOfItems,w,u=0;u<q;++u){var t=
h.getItem(u);if(t.pathSegType===2)w=t;if(t.pathSegType===1){t=h.getItem(u-1);if(t.x!=w.x||t.y!=w.y){h=o.createSVGPathSegLinetoAbs(w.x,w.y);svgedit.path.insertItemBefore(o,h,u);qa.fixEnd(o);break}}}svgedit.browser.isWebkit()&&o.setAttribute("d",qa.convertPath(o))},convertPath:function(o,h){for(var q=o.pathSegList,w=q.numberOfItems,u=0,t=0,C="",E=null,H=0;H<w;++H){var I=q.getItem(H),P=I.x||0,W=I.y||0,Y=I.x1||0,R=I.y1||0,T=I.x2||0,V=I.y2||0,aa=I.pathSegType,Ja=Xb[aa]["to"+(h?"Lower":"Upper")+"Case"](),
Za=function(mb,eb,fb){eb=eb?" "+eb.join(" "):"";fb=fb?" "+svgedit.units.shortFloat(fb):"";$.each(mb,function(ec,wb){mb[ec]=svgedit.units.shortFloat(wb)});C+=Ja+mb.join(" ")+eb+fb};switch(aa){case 1:C+="z";break;case 12:P-=u;case 13:if(h){u+=P;Ja="l"}else{P+=u;u=P;Ja="L"}Za([[P,t]]);break;case 14:W-=t;case 15:if(h){t+=W;Ja="l"}else{W+=t;t=W;Ja="L"}Za([[u,W]]);break;case 2:case 4:case 18:P-=u;W-=t;case 5:case 3:if(E&&q.getItem(H-1).pathSegType===1&&!h){u=E[0];t=E[1]}case 19:if(h){u+=P;t+=W}else{P+=
u;W+=t;u=P;t=W}if(aa===3)E=[u,t];Za([[P,W]]);break;case 6:P-=u;Y-=u;T-=u;W-=t;R-=t;V-=t;case 7:if(h){u+=P;t+=W}else{P+=u;Y+=u;T+=u;W+=t;R+=t;V+=t;u=P;t=W}Za([[Y,R],[T,V],[P,W]]);break;case 8:P-=u;Y-=u;W-=t;R-=t;case 9:if(h){u+=P;t+=W}else{P+=u;Y+=u;W+=t;R+=t;u=P;t=W}Za([[Y,R],[P,W]]);break;case 10:P-=u;W-=t;case 11:if(h){u+=P;t+=W}else{P+=u;W+=t;u=P;t=W}Za([[I.r1,I.r2]],[I.angle,I.largeArcFlag?1:0,I.sweepFlag?1:0],[P,W]);break;case 16:P-=u;T-=u;W-=t;V-=t;case 17:if(h){u+=P;t+=W}else{P+=u;T+=u;W+=
t;V+=t;u=P;t=W}Za([[T,V],[P,W]])}}return C}}}(),fc=this.removeUnusedDefElems=function(){var b=n.getElementsByTagNameNS(s,"defs");if(!b||!b.length)return 0;for(var c=[],d=0,m=["fill","stroke","filter","marker-start","marker-mid","marker-end"],i=m.length,z=n.getElementsByTagNameNS(s,"*"),o=z.length,h=0;h<o;h++){for(var q=z[h],w=0;w<i;w++){var u=sb(q.getAttribute(m[w]));u&&c.push(u.substr(1))}(q=ib(q))&&q.indexOf("#")===0&&c.push(q.substr(1))}b=$(b).find("linearGradient, radialGradient, filter, marker, svg, symbol");
defelem_ids=[];for(h=b.length;h--;){m=b[h];i=m.id;if(c.indexOf(i)<0){Ub[i]=m;m.parentNode.removeChild(m);d++}}return d};this.svgCanvasToString=function(){for(;fc()>0;);qa.clear(true);$.each(n.childNodes,function(d,m){d&&m.nodeType===8&&m.data.indexOf("Created with")>=0&&n.insertBefore(m,n.firstChild)});if(O){Qb();Wa([O])}var b=[];$(n).find("g:data(gsvg)").each(function(){for(var d=this.attributes,m=d.length,i=0;i<m;i++)if(d[i].nodeName=="id"||d[i].nodeName=="style")m--;if(m<=0){d=this.firstChild;
b.push(d);$(this).replaceWith(d)}});var c=this.svgToString(n,0);b.length&&$(b).each(function(){cc(this)});return c};this.svgToString=function(b,c){var d=[],m=svgedit.utilities.toXml,i=v.baseUnit,z=RegExp("^-?[\\d\\.]+"+i+"$");if(b){Oa(b);var o=b.attributes,h,q,w=b.childNodes;for(q=0;q<c;q++)d.push(" ");d.push("<");d.push(b.nodeName);if(b.id==="svgcontent"){q=xb();if(i!=="px"){q.w=svgedit.units.convertUnit(q.w,i)+i;q.h=svgedit.units.convertUnit(q.h,i)+i}d.push(' width="'+q.w+'" height="'+q.h+'" xmlns="'+
s+'"');var u={};$(b).find("*").andSelf().each(function(){$.each(this.attributes,function(H,I){var P=I.namespaceURI;if(P&&!u[P]&&hb[P]!=="xmlns"&&hb[P]!=="xml"){u[P]=true;d.push(" xmlns:"+hb[P]+'="'+P+'"')}})});q=o.length;for(i=["width","height","xmlns","x","y","viewBox","id","overflow"];q--;){h=o.item(q);var t=m(h.nodeValue);if(h.nodeName.indexOf("xmlns:")!==0)if(t!=""&&i.indexOf(h.localName)==-1)if(!h.namespaceURI||hb[h.namespaceURI]){d.push(" ");d.push(h.nodeName);d.push('="');d.push(t);d.push('"')}}}else{if(b.nodeName===
"defs"&&!b.firstChild)return;var C=["-moz-math-font-style","_moz-math-font-style"];for(q=o.length-1;q>=0;q--){h=o.item(q);t=m(h.nodeValue);if(!(C.indexOf(h.localName)>=0))if(t!="")if(t.indexOf("pointer-events")!==0)if(!(h.localName==="class"&&t.indexOf("se_")===0)){d.push(" ");if(h.localName==="d")t=qa.convertPath(b,true);if(isNaN(t)){if(z.test(t))t=svgedit.units.shortFloat(t)+i}else t=svgedit.units.shortFloat(t);if(/*Na.apply&&*/b.nodeName==="image"&&h.localName==="href"/*&&Na.images&&Na.images==="embed"*/){var E=
Jb[t];if(E)t=E}if(!h.namespaceURI||h.namespaceURI==s||hb[h.namespaceURI]){d.push(h.nodeName);d.push('="');d.push(t);d.push('"')}}}}if(b.hasChildNodes()){d.push(">");c++;o=false;for(q=0;q<w.length;q++){i=w.item(q);switch(i.nodeType){case 1:d.push("\n");d.push(this.svgToString(w.item(q),c));break;case 3:i=i.nodeValue.replace(/^\s+|\s+$/g,"");if(i!=""){o=true;d.push(m(i)+"")}break;case 4:d.push("\n");d.push(Array(c+1).join(" "));d.push("<![CDATA[");d.push(i.nodeValue);d.push("]]\>");break;case 8:d.push("\n");
d.push(Array(c+1).join(" "));d.push("<!--");d.push(i.data);d.push("--\>")}}c--;if(!o){d.push("\n");for(q=0;q<c;q++)d.push(" ")}d.push("</");d.push(b.nodeName);d.push(">")}else d.push("/>")}return d.join("")};this.embedImage=function(b,c){$(new Image).load(function(){var d=document.createElement("canvas");d.width=this.width;d.height=this.height;d.getContext("2d").drawImage(this,0,0);try{var m=";svgedit_url="+encodeURIComponent(b);m=d.toDataURL().replace(";base64",m+";base64");Jb[b]=m}catch(i){Jb[b]=
false}Bb=b;c&&c(Jb[b])}).attr("src",b)};this.setGoodImage=function(b){Bb=b};this.open=function(){};this.save=function(b){za();b&&$.extend(Na,b);Na.apply=true;b=this.svgCanvasToString();ha("saved",b)};this.rasterExport=function(){za();var b=[],c={feGaussianBlur:ub.exportNoBlur,foreignObject:ub.exportNoforeignObject,"[stroke-dasharray]":ub.exportNoDashArray},d=$(n);if(!("font"in $("<canvas>")[0].getContext("2d")))c.text=ub.exportNoText;$.each(c,function(m,i){d.find(m).length&&b.push(i)});c=this.svgCanvasToString();
ha("exported",{svg:c,issues:b})};this.getSvgString=function(){Na.apply=false;return this.svgCanvasToString()};this.randomizeIds=function(){arguments.length>0&&arguments[0]==false?svgedit.draw.randomizeIds(false,B()):svgedit.draw.randomizeIds(true,B())};var Rb=this.uniquifyElems=function(b){var c={},d=["filter","linearGradient","pattern","radialGradient","symbol","textPath","use"];svgedit.utilities.walkTree(b,function(h){if(h.nodeType==1){if(h.id){h.id in c||(c[h.id]={elem:null,attrs:[],hrefs:[]});
c[h.id].elem=h}$.each(Hb,function(w,u){var t=h.getAttributeNode(u);if(t){var C=svgedit.utilities.getUrlFromAttr(t.value);if(C=C?C.substr(1):null){C in c||(c[C]={elem:null,attrs:[],hrefs:[]});c[C].attrs.push(t)}}});var q=svgedit.utilities.getHref(h);if(q&&d.indexOf(h.nodeName)>=0)if(q=q.substr(1)){q in c||(c[q]={elem:null,attrs:[],hrefs:[]});c[q].hrefs.push(h)}}});for(var m in c)if(m){var i=c[m].elem;if(i){b=Fa();i.id=b;i=c[m].attrs;for(var z=i.length;z--;){var o=i[z];o.ownerElement.setAttribute(o.name,
"url(#"+b+")")}i=c[m].hrefs;for(z=i.length;z--;)svgedit.utilities.setHref(i[z],"#"+b)}}},Gb=this.setUseData=function(b){var c=$(b);if(b.tagName!=="use")c=c.find("use");c.each(function(){var d=ib(this).substr(1);if(d=va(d)){$(this).data("ref",d);if(d.tagName=="symbol"||d.tagName=="svg")$(this).data("symbol",d).data("ref",d)}})},yb=this.convertGradients=function(b){var c=$(b).find("linearGradient, radialGradient");if(!c.length&&svgedit.browser.isWebkit())c=$(b).find("*").filter(function(){return this.tagName.indexOf("Gradient")>=
0});c.each(function(){if($(this).attr("gradientUnits")==="userSpaceOnUse"){var d=$(n).find('[fill="url(#'+this.id+')"],[stroke="url(#'+this.id+')"]');if(d.length)if(d=svgedit.utilities.getBBox(d[0]))if(this.tagName==="linearGradient"){var m=$(this).attr(["x1","y1","x2","y2"]),i=this.gradientTransform.baseVal;if(i&&i.numberOfItems>0){var z=da(i).matrix;i=oa(m.x1,m.y1,z);z=oa(m.x2,m.y2,z);m.x1=i.x;m.y1=i.y;m.x2=z.x;m.y2=z.y;this.removeAttribute("gradientTransform")}$(this).attr({x1:(m.x1-d.x)/d.width,
y1:(m.y1-d.y)/d.height,x2:(m.x2-d.x)/d.width,y2:(m.y2-d.y)/d.height});this.removeAttribute("gradientUnits")}}})},gc=this.convertToGroup=function(b){b||(b=L[0]);var c=$(b),d=new ua,m;if(c.data("gsvg")){d=$(b.firstChild).attr(["x","y"]);$(b.firstChild.firstChild).unwrap();$(b).removeData("gsvg");m=ca(b);var i=k.createSVGTransform();i.setTranslate(d.x,d.y);m.appendItem(i);Ta(b);ha("selected",[b])}else if(c.data("symbol")){b=c.data("symbol");m=c.attr("transform");i=c.attr(["x","y"]);var z=b.getAttribute("viewBox");
if(z){z=z.split(" ");i.x-=+z[0];i.y-=+z[1]}m+=" translate("+(i.x||0)+","+(i.y||0)+")";i=c.prev();d.addSubCommand(new Pa(c[0],c[0].nextSibling,c[0].parentNode));c.remove();z=$(n).find("use:data(symbol)").length;c=f.createElementNS(s,"g");for(var o=b.childNodes,h=0;h<o.length;h++)c.appendChild(o[h].cloneNode(true));if(svgedit.browser.isGecko()){o=$(Xa()).children("linearGradient,radialGradient,pattern").clone();$(c).append(o)}m&&c.setAttribute("transform",m);m=b.parentNode;Rb(c);svgedit.browser.isGecko()&&
$(Xa()).append($(c).find("linearGradient,radialGradient,pattern"));c.id=Fa();i.after(c);if(m){if(!z){i=b.nextSibling;m.removeChild(b);d.addSubCommand(new Pa(b,i,m))}d.addSubCommand(new Ha(c))}Gb(c);svgedit.browser.isGecko()?yb(Xa()):yb(c);svgedit.utilities.walkTreePost(c,function(q){try{Ta(q)}catch(w){console.log(w)}});$(c).find("a,circle,ellipse,foreignObject,g,image,line,path,polygon,polyline,rect,svg,text,tspan,use").each(function(){if(!this.id)this.id=Fa()});Wa([c]);(b=Yb(c,true))&&d.addSubCommand(b);
ma(d)}else console.log("Unexpected element to ungroup:",b)};this.setSvgString=function(b){try{var c=svgedit.utilities.text2xml(b);this.prepareSvg(c);var d=new ua("Change Source"),m=n.nextSibling,i=k.removeChild(n);d.addSubCommand(new Pa(i,m,k));n=f.adoptNode?f.adoptNode(c.documentElement):f.importNode(c.documentElement,true);k.appendChild(n);var z=$(n);e.current_drawing_=new svgedit.draw.Drawing(n,F);var o=B().getNonce();o?ha("setnonce",o):ha("unsetnonce");z.find("image").each(function(){var E=this;
Mb(E);var H=ib(this);if(H.indexOf("data:")===0){var I=H.match(/svgedit_url=(.*?);/);if(I){var P=decodeURIComponent(I[1]);$(new Image).load(function(){E.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",P)}).attr("src",P)}}e.embedImage(H)});z.find("svg").each(function(){if(!$(this).closest("defs").length){Rb(this);var E=this.parentNode;if(E.childNodes.length===1&&E.nodeName==="g"){$(E).data("gsvg",this);E.id=E.id||Fa()}else cc(this)}});svgedit.browser.isGecko()&&z.find("linearGradient, radialGradient, pattern").appendTo(Xa());
Gb(z);yb(z[0]);svgedit.utilities.walkTreePost(n,function(E){try{Ta(E)}catch(H){console.log(H)}});var h={id:"svgcontent",overflow:v.show_outside_canvas?"visible":"hidden"},q=false;if(z.attr("viewBox")){var w=z.attr("viewBox").split(" ");h.width=w[2];h.height=w[3]}else $.each(["width","height"],function(E,H){var I=z.attr(H);I||(I="100%");if((I+"").substr(-1)==="%")q=true;else h[H]=ba(H,I)});zb();z.children().find("a,circle,ellipse,foreignObject,g,image,line,path,polygon,polyline,rect,svg,text,tspan,use").each(function(){if(!this.id)this.id=
Fa()});if(q){var u=getStrokedBBox();h.width=u.width+u.x;h.height=u.height+u.y}if(h.width<=0)h.width=100;if(h.height<=0)h.height=100;z.attr(h);this.contentW=h.width;this.contentH=h.height;d.addSubCommand(new Ha(n));var t=z.attr(["width","height"]);d.addSubCommand(new Ia(k,t));A=1;svgedit.transformlist.resetListMap();za();svgedit.path.clearData();k.appendChild(ra.selectorParentGroup);ma(d);ha("changed",[n])}catch(C){console.log(C);return false}return true};this.importSvgString=function(b){try{var c=
svgedit.utilities.encode64(b.length+b).substr(0,32),d=false;if(pb[c])if($(pb[c].symbol).parents("#svgroot").length)d=true;var m=new ua("Import SVG");if(d)var i=pb[c].symbol,z=pb[c].xform;else{var o=svgedit.utilities.text2xml(b);this.prepareSvg(o);var h;h=f.adoptNode?f.adoptNode(o.documentElement):f.importNode(o.documentElement,true);Rb(h);var q=ba("width",h.getAttribute("width")),w=ba("height",h.getAttribute("height")),u=h.getAttribute("viewBox"),t=u?u.split(" "):[0,0,q,w];for(b=0;b<4;++b)t[b]=+t[b];
n.getAttribute("width");var C=+n.getAttribute("height");z=w>q?"scale("+C/3/t[3]+")":"scale("+C/3/t[2]+")";z="translate(0) "+z+" translate(0)";i=f.createElementNS(s,"symbol");var E=Xa();for(svgedit.browser.isGecko()&&$(h).find("linearGradient, radialGradient, pattern").appendTo(E);h.firstChild;)i.appendChild(h.firstChild);var H=h.attributes;for(h=0;h<H.length;h++){var I=H[h];i.setAttribute(I.nodeName,I.nodeValue)}i.id=Fa();pb[c]={symbol:i,xform:z};Xa().appendChild(i);m.addSubCommand(new Ha(i))}var P=
f.createElementNS(s,"use");P.id=Fa();lb(P,"#"+i.id);(O||B().getCurrentLayer()).appendChild(P);m.addSubCommand(new Ha(P));za();P.setAttribute("transform",z);Ta(P);$(P).data("symbol",i).data("ref",i);gb([P]);ma(m);ha("changed",[n])}catch(W){console.log(W);return false}return true};var zb=e.identifyLayers=function(){Qb();B().identifyLayers()};this.createLayer=function(b){var c=new ua("Create Layer");b=B().createLayer(b);c.addSubCommand(new Ha(b));ma(c);za();ha("changed",[b])};this.cloneLayer=function(b){var c=
new ua("Duplicate Layer"),d=f.createElementNS(s,"g"),m=f.createElementNS(s,"title");m.textContent=b;d.appendChild(m);m=B().getCurrentLayer();$(m).after(d);m=m.childNodes;for(var i=0;i<m.length;i++){var z=m[i];z.localName!="title"&&d.appendChild(vb(z))}za();zb();c.addSubCommand(new Ha(d));ma(c);e.setCurrentLayer(b);ha("changed",[d])};this.deleteCurrentLayer=function(){var b=B().getCurrentLayer(),c=b.nextSibling,d=b.parentNode;if(b=B().deleteCurrentLayer()){var m=new ua("Delete Layer");m.addSubCommand(new Pa(b,
c,d));ma(m);za();ha("changed",[d]);return true}return false};this.setCurrentLayer=function(b){(b=B().setCurrentLayer(svgedit.utilities.toXml(b)))&&za();return b};this.renameCurrentLayer=function(b){var c=B();if(c.current_layer){var d=c.current_layer;if(!e.setCurrentLayer(b)){for(var m=new ua("Rename Layer"),i=0;i<c.getNumLayers();++i)if(c.all_layers[i][1]==d)break;var z=c.getLayerName(i);c.all_layers[i][0]=svgedit.utilities.toXml(b);var o=d.childNodes.length;for(i=0;i<o;++i){var h=d.childNodes.item(i);
if(h&&h.tagName=="title"){for(;h.firstChild;)h.removeChild(h.firstChild);h.textContent=b;m.addSubCommand(new Ia(h,{"#text":z}));ma(m);ha("changed",[d]);return true}}}c.current_layer=d}return false};this.setCurrentLayerPosition=function(b){var c=B();if(c.current_layer&&b>=0&&b<c.getNumLayers()){for(var d=0;d<c.getNumLayers();++d)if(c.all_layers[d][1]==c.current_layer)break;if(d==c.getNumLayers())return false;if(d!=b){var m=null,i=c.current_layer.nextSibling;if(b>d){if(b<c.getNumLayers()-1)m=c.all_layers[b+
1][1]}else m=c.all_layers[b][1];n.insertBefore(c.current_layer,m);ma(new Ca(c.current_layer,i,n));zb();e.setCurrentLayer(c.getLayerName(b));return true}}return false};this.setLayerVisibility=function(b,c){var d=B(),m=d.getLayerVisibility(b),i=d.setLayerVisibility(b,c);if(i)ma(new Ia(i,{display:m?"inline":"none"},"Layer Visibility"));else return false;if(i==d.getCurrentLayer()){za();qa.clear()}return true};this.moveSelectedToLayer=function(b){for(var c=null,d=B(),m=0;m<d.getNumLayers();++m)if(d.getLayerName(m)==
b){c=d.all_layers[m][1];break}if(!c)return false;b=new ua("Move Elements to Layer");d=L;for(m=d.length;m--;){var i=d[m];if(i){var z=i.nextSibling,o=i.parentNode;c.appendChild(i);b.addSubCommand(new Ca(i,z,o))}}ma(b);return true};this.mergeLayer=function(b){var c=new ua("Merge Layer"),d=B(),m=$(d.current_layer).prev()[0];if(m){for(c.addSubCommand(new Pa(d.current_layer,d.current_layer.nextSibling,n));d.current_layer.firstChild;){var i=d.current_layer.firstChild;if(i.localName=="title"){c.addSubCommand(new Pa(i,
i.nextSibling,d.current_layer));d.current_layer.removeChild(i)}else{var z=i.nextSibling;m.appendChild(i);c.addSubCommand(new Ca(i,z,d.current_layer))}}n.removeChild(d.current_layer);if(!b){za();zb();ha("changed",[n]);ma(c)}d.current_layer=m;return c}};this.mergeAllLayers=function(){var b=new ua("Merge all Layers"),c=B();for(c.current_layer=c.all_layers[c.getNumLayers()-1][1];$(n).children("g").length>1;)b.addSubCommand(e.mergeLayer(true));za();zb();ha("changed",[n]);ma(b)};var Qb=this.leaveContext=
function(){var b=Kb.length;if(b){for(var c=0;c<b;c++){var d=Kb[c],m=Ab(d,"orig_opac");m!==1?d.setAttribute("opacity",m):d.removeAttribute("opacity");d.setAttribute("style","pointer-events: inherit")}Kb=[];za(true);ha("contextset",null)}O=null},lc=this.setContext=function(b){Qb();if(typeof b==="string")b=va(b);O=b;$(b).parentsUntil("#svgcontent").andSelf().siblings().each(function(){var c=this.getAttribute("opacity")||1;Ab(this,"orig_opac",c);this.setAttribute("opacity",c*0.33);this.setAttribute("style",
"pointer-events: none");Kb.push(this)});za();ha("contextset",O)};this.clear=function(){qa.clear();za();e.clearSvgContentElement();e.current_drawing_=new svgedit.draw.Drawing(n);e.createLayer("Layer 1");e.undoMgr.resetUndoStack();ra.initGroup();wa=ra.getRubberBandBox();ha("cleared")};this.linkControlPoints=qa.linkControlPoints;this.getContentElem=function(){return n};this.getRootElem=function(){return k};this.getSelectedElems=function(){return L};var xb=this.getResolution=function(){var b=n.getAttribute("width")/
A,c=n.getAttribute("height")/A;return{w:b,h:c,zoom:A}};this.getZoom=function(){return A};this.getVersion=function(){return"svgcanvas.js ($Rev: 2199 $)"};this.setUiStrings=function(b){$.extend(ub,b.notification)};this.setConfig=function(b){$.extend(v,b)};this.getTitle=function(b){if(b=b||L[0]){b=$(b).data("gsvg")||$(b).data("symbol")||b;b=b.childNodes;for(var c=0;c<b.length;c++)if(b[c].nodeName=="title")return b[c].textContent;return""}};this.setGroupTitle=function(b){var c=L[0];c=$(c).data("gsvg")||
c;var d=$(c).children("title"),m=new ua("Set Label");if(b.length)if(d.length){d=d[0];m.addSubCommand(new Ia(d,{"#text":d.textContent}));d.textContent=b}else{d=f.createElementNS(s,"title");d.textContent=b;$(c).prepend(d);m.addSubCommand(new Ha(d))}else{m.addSubCommand(new Pa(d[0],d.nextSibling,c));d.remove()}ma(m)};this.getDocumentTitle=function(){return e.getTitle(n)};this.setDocumentTitle=function(b){for(var c=n.childNodes,d=false,m="",i=new ua("Change Image Title"),z=0;z<c.length;z++)if(c[z].nodeName==
"title"){d=c[z];m=d.textContent;break}if(!d){d=f.createElementNS(s,"title");n.insertBefore(d,n.firstChild)}if(b.length)d.textContent=b;else d.parentNode.removeChild(d);i.addSubCommand(new Ia(d,{"#text":m}));ma(i)};this.getEditorNS=function(b){b&&n.setAttribute("xmlns:se","http://svg-edit.googlecode.com");return"http://svg-edit.googlecode.com"};this.setResolution=function(b,c){var d=xb(),m=d.w;d=d.h;var i;if(b=="fit"){var z=getStrokedBBox();if(z){i=new ua("Fit Canvas to Content");var o=Lb();gb(o);
var h=[],q=[];$.each(o,function(){h.push(z.x*-1);q.push(z.y*-1)});o=e.moveSelectedElements(h,q,true);i.addSubCommand(o);za();b=Math.round(z.width);c=Math.round(z.height)}else return false}if(b!=m||c!=d){o=k.suspendRedraw(1E3);i||(i=new ua("Change Image Dimensions"));b=ba("width",b);c=ba("height",c);n.setAttribute("width",b);n.setAttribute("height",c);this.contentW=b;this.contentH=c;i.addSubCommand(new Ia(n,{width:m,height:d}));n.setAttribute("viewBox",[0,0,b/A,c/A].join(" "));i.addSubCommand(new Ia(n,
{viewBox:["0 0",m,d].join(" ")}));ma(i);k.unsuspendRedraw(o);ha("changed",[n])}return true};this.getOffset=function(){return $(n).attr(["x","y"])};this.setBBoxZoom=function(b,c,d){var m=0.85,i=function(z){if(!z)return false;var o=Math.min(Math.round(c/z.width*100*m)/100,Math.round(d/z.height*100*m)/100);e.setZoom(o);return{zoom:o,bbox:z}};if(typeof b=="object"){b=b;if(b.width==0||b.height==0){e.setZoom(b.zoom?b.zoom:A*b.factor);return{zoom:A,bbox:b}}return i(b)}switch(b){case "selection":if(!L[0])return;
b=$.map(L,function(z){if(z)return z});b=getStrokedBBox(b);break;case "canvas":b=xb();m=0.95;b={width:b.w,height:b.h,x:0,y:0};break;case "content":b=getStrokedBBox();break;case "layer":b=getStrokedBBox(Lb(B().getCurrentLayer()));break;default:return}return i(b)};this.setZoom=function(b){var c=xb();n.setAttribute("viewBox","0 0 "+c.w/b+" "+c.h/b);A=b;$.each(L,function(d,m){m&&ra.requestSelector(m).resize()});qa.zoomChange();Db("zoomChanged",b)};this.getMode=function(){return sa};this.setMode=function(b){qa.clear(true);
Ra.clear();Sa=L[0]&&L[0].nodeName=="text"?Ua:N;sa=b};this.getColor=function(b){return Sa[b]};this.setColor=function(b,c,d){N[b]=c;Sa[b+"_paint"]={type:"solidColor"};for(var m=[],i=L.length;i--;){var z=L[i];if(z)if(z.tagName=="g")svgedit.utilities.walkTree(z,function(o){o.nodeName!="g"&&m.push(o)});else if(b=="fill")z.tagName!="polyline"&&z.tagName!="line"&&m.push(z);else m.push(z)}if(m.length>0)if(d)ob(b,c,m);else{Va(b,c,m);ha("changed",m)}};var Xa=function(){var b=n.getElementsByTagNameNS(s,"defs");
if(b.length>0)b=b[0];else{b=f.createElementNS(s,"defs");n.firstChild?n.insertBefore(b,n.firstChild.nextSibling):n.appendChild(b)}return b},Zb=this.setGradient=function(b){if(!(!Sa[b+"_paint"]||Sa[b+"_paint"].type=="solidColor")){var c=e[b+"Grad"],d=Sb(c),m=Xa();if(d)c=d;else{c=m.appendChild(f.importNode(c,true));c.id=Fa()}e.setColor(b,"url(#"+c.id+")")}},Sb=function(b){var c=Xa();c=$(c).find("linearGradient, radialGradient");for(var d=c.length,m=["r","cx","cy","fx","fy"];d--;){var i=c[d];if(b.tagName==
"linearGradient"){if(b.getAttribute("x1")!=i.getAttribute("x1")||b.getAttribute("y1")!=i.getAttribute("y1")||b.getAttribute("x2")!=i.getAttribute("x2")||b.getAttribute("y2")!=i.getAttribute("y2"))continue}else{var z=$(b).attr(m),o=$(i).attr(m),h=false;$.each(m,function(E,H){if(z[H]!=o[H])h=true});if(h)continue}var q=b.getElementsByTagNameNS(s,"stop"),w=i.getElementsByTagNameNS(s,"stop");if(q.length==w.length){for(var u=q.length;u--;){var t=q[u],C=w[u];if(t.getAttribute("offset")!=C.getAttribute("offset")||
t.getAttribute("stop-opacity")!=C.getAttribute("stop-opacity")||t.getAttribute("stop-color")!=C.getAttribute("stop-color"))break}if(u==-1)return i}}return null};this.setPaint=function(b,c){var d=new $.jGraduate.Paint(c);this.setPaintOpacity(b,d.alpha/100,true);Sa[b+"_paint"]=d;switch(d.type){case "solidColor":this.setColor(b,d.solidColor!="none"?"#"+d.solidColor:"none");break;case "linearGradient":case "radialGradient":e[b+"Grad"]=d[d.type];Zb(b)}};this.getStrokeWidth=function(){return Sa.stroke_width};
this.setStrokeWidth=function(b){if(b==0&&["line","path"].indexOf(sa)>=0)e.setStrokeWidth(1);else{Sa.stroke_width=b;for(var c=[],d=L.length;d--;){var m=L[d];if(m)m.tagName=="g"?svgedit.utilities.walkTree(m,function(i){i.nodeName!="g"&&c.push(i)}):c.push(m)}if(c.length>0){Va("stroke-width",b,c);ha("changed",L)}}};this.setStrokeAttr=function(b,c){N[b.replace("-","_")]=c;for(var d=[],m=L.length;m--;){var i=L[m];if(i)i.tagName=="g"?svgedit.utilities.walkTree(i,function(z){z.nodeName!="g"&&d.push(z)}):
d.push(i)}if(d.length>0){Va(b,c,d);ha("changed",L)}};this.getStyle=function(){return N};this.getOpacity=function(){return N.opacity};this.setOpacity=function(b){N.opacity=b;Va("opacity",b)};this.getFillOpacity=function(){return N.fill_opacity};this.getStrokeOpacity=function(){return N.stroke_opacity};this.setPaintOpacity=function(b,c,d){N[b+"_opacity"]=c;d?ob(b+"-opacity",c):Va(b+"-opacity",c)};this.getBlur=function(b){var c=0;if(b)if(b.getAttribute("filter"))if(b=va(b.id+"_blur"))c=b.firstChild.getAttribute("stdDeviation");
return c};(function(){function b(){var i=e.undoMgr.finishUndoableChange();c.addSubCommand(i);ma(c);d=c=null}var c=null,d=null,m=false;e.setBlurNoUndo=function(i){if(d)if(i===0){ob("filter","");m=true}else{var z=L[0];m&&ob("filter","url(#"+z.id+"_blur)");if(svgedit.browser.isWebkit()){console.log("e",z);z.removeAttribute("filter");z.setAttribute("filter","url(#"+z.id+"_blur)")}ob("stdDeviation",i,[d.firstChild]);e.setBlurOffsets(d,i)}else e.setBlur(i)};e.setBlurOffsets=function(i,z){if(z>3)Ga(i,{x:"-50%",
y:"-50%",width:"200%",height:"200%"},100);else if(!svgedit.browser.isWebkit()){i.removeAttribute("x");i.removeAttribute("y");i.removeAttribute("width");i.removeAttribute("height")}};e.setBlur=function(i,z){if(c)b();else{var o=L[0],h=o.id;d=va(h+"_blur");i-=0;var q=new ua;if(d){if(i===0)d=null}else{var w=na({element:"feGaussianBlur",attr:{"in":"SourceGraphic",stdDeviation:i}});d=na({element:"filter",attr:{id:h+"_blur"}});d.appendChild(w);Xa().appendChild(d);q.addSubCommand(new Ha(d))}w={filter:o.getAttribute("filter")};
if(i===0){o.removeAttribute("filter");q.addSubCommand(new Ia(o,w))}else{Va("filter","url(#"+h+"_blur)");q.addSubCommand(new Ia(o,w));e.setBlurOffsets(d,i);c=q;e.undoMgr.beginUndoableChange("stdDeviation",[d?d.firstChild:null]);if(z){e.setBlurNoUndo(i);b()}}}}})();this.getBold=function(){var b=L[0];if(b!=null&&b.tagName=="text"&&L[1]==null)return b.getAttribute("font-weight")=="bold";return false};this.setBold=function(b){var c=L[0];if(c!=null&&c.tagName=="text"&&L[1]==null)Va("font-weight",b?"bold":
"normal");L[0].textContent||Ra.setCursor()};this.getItalic=function(){var b=L[0];if(b!=null&&b.tagName=="text"&&L[1]==null)return b.getAttribute("font-style")=="italic";return false};this.setItalic=function(b){var c=L[0];if(c!=null&&c.tagName=="text"&&L[1]==null)Va("font-style",b?"italic":"normal");L[0].textContent||Ra.setCursor()};this.getFontFamily=function(){return Ua.font_family};this.setFontFamily=function(b){Ua.font_family=b;Va("font-family",b);L[0]&&!L[0].textContent&&Ra.setCursor()};this.setFontColor=
function(b){Ua.fill=b;Va("fill",b)};this.getFontSize=function(){return Ua.fill};this.getFontSize=function(){return Ua.font_size};this.setFontSize=function(b){Ua.font_size=b;Va("font-size",b);L[0].textContent||Ra.setCursor()};this.getText=function(){var b=L[0];if(b==null)return"";return b.textContent};this.setTextContent=function(b){Va("#text",b);Ra.init(b);Ra.setCursor()};this.setImageURL=function(b){var c=L[0];if(c){var d=$(c).attr(["width","height"]);d=!d.width||!d.height;var m=ib(c);if(m!==b)d=
true;else if(!d)return;var i=new ua("Change Image URL");lb(c,b);i.addSubCommand(new Ia(c,{"#href":m}));d?$(new Image).load(function(){var z=$(c).attr(["width","height"]);$(c).attr({width:this.width,height:this.height});ra.requestSelector(c).resize();i.addSubCommand(new Ia(c,z));ma(i);ha("changed",[c])}).attr("src",b):ma(i)}};this.setLinkURL=function(b){var c=L[0];if(c){if(c.tagName!=="a"){c=$(c).parents("a");if(c.length)c=c[0];else return}var d=ib(c);if(d!==b){var m=new ua("Change Link URL");lb(c,
b);m.addSubCommand(new Ia(c,{"#href":d}));ma(m)}}};this.setRectRadius=function(b){var c=L[0];if(c!=null&&c.tagName=="rect"){var d=c.getAttribute("rx");if(d!=b){c.setAttribute("rx",b);c.setAttribute("ry",b);ma(new Ia(c,{rx:d,ry:d},"Radius"));ha("changed",[c])}}};this.makeHyperlink=function(b){e.groupSelectedElements("a",b)};this.removeHyperlink=function(){e.ungroupSelectedElement()};this.setSegType=function(b){qa.setSegType(b)};this.convertToPath=function(b,c){if(b==null)$.each(L,function(Y,R){R&&
e.convertToPath(R)});else{if(!c)var d=new ua("Convert element to Path");var m=c?{}:{fill:N.fill,"fill-opacity":N.fill_opacity,stroke:N.stroke,"stroke-width":N.stroke_width,"stroke-dasharray":N.stroke_dasharray,"stroke-linejoin":N.stroke_linejoin,"stroke-linecap":N.stroke_linecap,"stroke-opacity":N.stroke_opacity,opacity:N.opacity,visibility:"hidden"};$.each(["marker-start","marker-end","marker-mid","filter","clip-path"],function(){if(b.getAttribute(this))m[this]=b.getAttribute(this)});var i=na({element:"path",
attr:m}),z=b.getAttribute("transform");z&&i.setAttribute("transform",z);var o=b.id,h=b.parentNode;b.nextSibling?h.insertBefore(i,b):h.appendChild(i);var q="",w=function(Y){$.each(Y,function(R,T){var V=T[1];q+=T[0];for(var aa=0;aa<V.length;aa+=2)q+=V[aa]+","+V[aa+1]+" "})},u=1.81;switch(b.tagName){case "ellipse":case "circle":var t=$(b).attr(["rx","ry","cx","cy"]),C=t.cx,E=t.cy,H=t.rx;t=t.ry;if(b.tagName=="circle")H=t=$(b).attr("r");w([["M",[C-H,E]],["C",[C-H,E-t/u,C-H/u,E-t,C,E-t]],["C",[C+H/u,E-
t,C+H,E-t/u,C+H,E]],["C",[C+H,E+t/u,C+H/u,E+t,C,E+t]],["C",[C-H/u,E+t,C-H,E+t/u,C-H,E]],["Z",[]]]);break;case "path":q=b.getAttribute("d");break;case "line":t=$(b).attr(["x1","y1","x2","y2"]);q="M"+t.x1+","+t.y1+"L"+t.x2+","+t.y2;break;case "polyline":case "polygon":q="M"+b.getAttribute("points");break;case "rect":t=$(b).attr(["rx","ry"]);H=t.rx;t=t.ry;var I=b.getBBox();C=I.x;E=I.y;var P=I.width;I=I.height;u=4-u;!H&&!t?w([["M",[C,E]],["L",[C+P,E]],["L",[C+P,E+I]],["L",[C,E+I]],["L",[C,E]],["Z",[]]]):
w([["M",[C,E+t]],["C",[C,E+t/u,C+H/u,E,C+H,E]],["L",[C+P-H,E]],["C",[C+P-H/u,E,C+P,E+t/u,C+P,E+t]],["L",[C+P,E+I-t]],["C",[C+P,E+I-t/u,C+P-H/u,E+I,C+P-H,E+I]],["L",[C+H,E+I]],["C",[C+H/u,E+I,C,E+I-t/u,C,E+I-t]],["L",[C,E+t]],["Z",[]]]);break;default:i.parentNode.removeChild(i)}q&&i.setAttribute("d",q);if(c){qa.resetOrientation(i);d=false;try{d=i.getBBox()}catch(W){}i.parentNode.removeChild(i);return d}else{if(z){z=ca(i);ia(z)&&qa.resetOrientation(i)}d.addSubCommand(new Pa(b,b.nextSibling,h));d.addSubCommand(new Ha(i));
za();b.parentNode.removeChild(b);i.setAttribute("id",o);i.removeAttribute("visibility");gb([i],true);ma(d)}}};var ob=function(b,c,d){var m=k.suspendRedraw(1E3);sa=="pathedit"&&qa.moveNode(b,c);d=d||L;for(var i=d.length,z=["g","polyline","path"],o=["transform","opacity","filter"];i--;){var h=d[i];if(h!=null){sa==="textedit"&&b!=="#text"&&h.textContent.length&&Ra.toSelectMode(h);if((b==="x"||b==="y")&&z.indexOf(h.tagName)>=0){var q=getStrokedBBox([h]);e.moveSelectedElements((b==="x"?c-q.x:0)*A,(b===
"y"?c-q.y:0)*A,true)}else{h.tagName==="g"&&o.indexOf(b);q=b==="#text"?h.textContent:h.getAttribute(b);if(q==null)q="";if(q!==String(c)){if(b=="#text"){svgedit.utilities.getBBox(h);h.textContent=c;if(/rotate/.test(h.getAttribute("transform")))h=Nb(h)}else b=="#href"?lb(h,c):h.setAttribute(b,c);if(svgedit.browser.isGecko()&&h.nodeName==="text"&&/rotate/.test(h.getAttribute("transform")))if((c+"").indexOf("url")===0||["font-size","font-family","x","y"].indexOf(b)>=0&&h.textContent)h=Nb(h);L.indexOf(h)>=
0&&setTimeout(function(){h.parentNode&&ra.requestSelector(h).resize()},0);q=bb(h);if(q!=0&&b!="transform")for(var w=ca(h),u=w.numberOfItems;u--;)if(w.getItem(u).type==4){w.removeItem(u);var t=svgedit.utilities.getBBox(h),C=oa(t.x+t.width/2,t.y+t.height/2,da(w).matrix);t=C.x;C=C.y;var E=k.createSVGTransform();E.setRotate(q,t,C);w.insertItemBefore(E,u);break}}}}}k.unsuspendRedraw(m)},Va=this.changeSelectedAttribute=function(b,c,d){d=d||L;e.undoMgr.beginUndoableChange(b,d);ob(b,c,d);b=e.undoMgr.finishUndoableChange();
b.isEmpty()||ma(b)};this.deleteSelectedElements=function(){for(var b=new ua("Delete Elements"),c=L.length,d=[],m=0;m<c;++m){var i=L[m];if(i==null)break;var z=i.parentNode,o=i;ra.releaseSelector(o);svgedit.path.removePath_(o.id);if(z.tagName==="a"&&z.childNodes.length===1){o=z;z=z.parentNode}var h=o.nextSibling;o=z.removeChild(o);d.push(i);L[m]=null;b.addSubCommand(new Pa(o,h,z))}b.isEmpty()||ma(b);ha("changed",d);za()};this.cutSelectedElements=function(){for(var b=new ua("Cut Elements"),c=L.length,
d=[],m=0;m<c;++m){var i=L[m];if(i==null)break;var z=i.parentNode,o=i;ra.releaseSelector(o);svgedit.path.removePath_(o.id);var h=o.nextSibling;o=z.removeChild(o);d.push(i);L[m]=null;b.addSubCommand(new Pa(o,h,z))}b.isEmpty()||ma(b);ha("changed",d);za();e.clipBoard=d};this.copySelectedElements=function(){e.clipBoard=$.merge([],L)};this.pasteElements=function(b,c,d){var m=e.clipBoard,i=m.length;if(i){for(var z=[],o=new ua("Paste elements");i--;){var h=m[i];if(h){var q=vb(h);if(!va(h.id))q.id=h.id;z.push(q);
(O||B().getCurrentLayer()).appendChild(q);o.addSubCommand(new Ha(q))}}Wa(z);if(b!=="in_place"){var w,u;if(b){if(b==="point"){w=c;u=d}}else{w=Vb.x;u=Vb.y}b=getStrokedBBox(z);var t=w-(b.x+b.width/2),C=u-(b.y+b.height/2),E=[],H=[];$.each(z,function(){E.push(t);H.push(C)});w=e.moveSelectedElements(E,H,false);o.addSubCommand(w)}ma(o);ha("changed",z)}};this.groupSelectedElements=function(b){b||(b="g");var c="";switch(b){case "a":c="Make hyperlink";var d="";if(arguments.length>1)d=arguments[1];break;default:b=
"g";c="Group Elements"}c=new ua(c);var m=na({element:b,attr:{id:Fa()}});b==="a"&&lb(m,d);c.addSubCommand(new Ha(m));for(d=L.length;d--;){var i=L[d];if(i!=null){if(i.parentNode.tagName==="a"&&i.parentNode.childNodes.length===1)i=i.parentNode;var z=i.nextSibling,o=i.parentNode;m.appendChild(i);c.addSubCommand(new Ca(i,z,o))}}c.isEmpty()||ma(c);Wa([m],true)};var Yb=this.pushGroupProperties=function(b,c){var d=b.childNodes,m=d.length,i=b.getAttribute("transform"),z=ca(b),o=da(z).matrix,h=new ua("Push group properties"),
q=0,w=bb(b),u=$(b).attr(["filter","opacity"]),t,C;for(q=0;q<m;q++){var E=d[q];if(E.nodeType===1){if(u.opacity!==null&&u.opacity!==1){E.getAttribute("opacity");var H=Math.round((E.getAttribute("opacity")||1)*u.opacity*100)/100;Va("opacity",H,[E])}if(u.filter){var I=H=this.getBlur(E);C||(C=this.getBlur(b));if(H)H=C-0+(H-0);else if(H===0)H=C;if(I)t=rb(E.getAttribute("filter"));else if(t){t=vb(t);Xa().appendChild(t)}else t=rb(u.filter);t.id=E.id+"_"+(t.firstChild.tagName==="feGaussianBlur"?"blur":"filter");
Va("filter","url(#"+t.id+")",[E]);if(H){Va("stdDeviation",H,[t.firstChild]);e.setBlurOffsets(t,H)}}H=ca(E);if(~E.tagName.indexOf("Gradient"))H=null;if(H)if(E.tagName!=="defs")if(z.numberOfItems){if(w&&z.numberOfItems==1){var P=z.getItem(0).matrix,W=k.createSVGMatrix();if(I=bb(E))W=H.getItem(0).matrix;var Y=svgedit.utilities.getBBox(E),R=da(H).matrix,T=oa(Y.x+Y.width/2,Y.y+Y.height/2,R);Y=w+I;R=k.createSVGTransform();R.setRotate(Y,T.x,T.y);P=pa(P,W,R.matrix.inverse());I&&H.removeItem(0);if(Y)H.numberOfItems?
H.insertItemBefore(R,0):H.appendItem(R);if(P.e||P.f){I=k.createSVGTransform();I.setTranslate(P.e,P.f);H.numberOfItems?H.insertItemBefore(I,0):H.appendItem(I)}}else{I=E.getAttribute("transform");P={};P.transform=I?I:"";I=k.createSVGTransform();P=da(H).matrix;W=P.inverse();P=pa(W,o,P);I.setMatrix(P);H.appendItem(I)}(E=Ta(E))&&h.addSubCommand(E)}}}if(i){P={};P.transform=i;b.setAttribute("transform","");b.removeAttribute("transform");h.addSubCommand(new Ia(b,P))}if(c&&!h.isEmpty())return h};this.ungroupSelectedElement=
function(){var b=L[0];if($(b).data("gsvg")||$(b).data("symbol"))gc(b);else if(b.tagName==="use"){var c=va(ib(b).substr(1));$(b).data("symbol",c).data("ref",c);gc(b)}else{c=$(b).parents("a");if(c.length)b=c[0];if(b.tagName==="g"||b.tagName==="a"){c=new ua("Ungroup Elements");var d=Yb(b,true);d&&c.addSubCommand(d);d=b.parentNode;for(var m=b.nextSibling,i=Array(b.childNodes.length),z=0;b.firstChild;){var o=b.firstChild,h=o.nextSibling,q=o.parentNode;if(o.tagName==="title"){c.addSubCommand(new Pa(o,o.nextSibling,
q));q.removeChild(o)}else{i[z++]=o=d.insertBefore(o,m);c.addSubCommand(new Ca(o,h,q))}}za();m=b.nextSibling;b=d.removeChild(b);c.addSubCommand(new Pa(b,m,d));c.isEmpty()||ma(c);gb(i)}}};this.moveToTopSelectedElement=function(){var b=L[0];if(b!=null){b=b;var c=b.parentNode,d=b.nextSibling;b=b.parentNode.appendChild(b);if(d!=b.nextSibling){ma(new Ca(b,d,c,"top"));ha("changed",[b])}}};this.moveToBottomSelectedElement=function(){var b=L[0];if(b!=null){b=b;var c=b.parentNode,d=b.nextSibling,m=b.parentNode.firstChild;
if(m.tagName=="title")m=m.nextSibling;if(m.tagName=="defs")m=m.nextSibling;b=b.parentNode.insertBefore(b,m);if(d!=b.nextSibling){ma(new Ca(b,d,c,"bottom"));ha("changed",[b])}}};this.moveUpDownSelected=function(b){var c=L[0];if(c){jb=[];var d,m,i=$(Wb(getStrokedBBox([c]))).toArray();b=="Down"&&i.reverse();$.each(i,function(){if(m){d=this;return false}else if(this==c)m=true});if(d){i=c.parentNode;var z=c.nextSibling;$(d)[b=="Down"?"before":"after"](c);if(z!=c.nextSibling){ma(new Ca(c,z,i,"Move "+b));
ha("changed",[c])}}}};this.moveSelectedElements=function(b,c,d){if(b.constructor!=Array){b/=A;c/=A}d=d||true;for(var m=new ua("position"),i=L.length;i--;){var z=L[i];if(z!=null){var o=k.createSVGTransform(),h=ca(z);b.constructor==Array?o.setTranslate(b[i],c[i]):o.setTranslate(b,c);h.numberOfItems?h.insertItemBefore(o,0):h.appendItem(o);(o=Ta(z))&&m.addSubCommand(o);ra.requestSelector(z).resize()}}if(!m.isEmpty()){d&&ma(m);ha("changed",L);return m}};this.cloneSelectedElements=function(b,c){for(var d=
new ua("Clone Elements"),m=L.length,i=0;i<m;++i){var z=L[i];if(z==null)break}m=L.slice(0,i);this.clearSelection(true);for(i=m.length;i--;){z=m[i]=vb(m[i]);(O||B().getCurrentLayer()).appendChild(z);d.addSubCommand(new Ha(z))}if(!d.isEmpty()){gb(m.reverse());this.moveSelectedElements(b,c,false);ma(d)}};this.alignSelectedElements=function(b,c){var d=[],m=Number.MAX_VALUE,i=Number.MIN_VALUE,z=Number.MAX_VALUE,o=Number.MIN_VALUE,h=Number.MIN_VALUE,q=Number.MIN_VALUE,w=L.length;if(w){for(var u=0;u<w;++u){if(L[u]==
null)break;d[u]=getStrokedBBox([L[u]]);switch(c){case "smallest":if((b=="l"||b=="c"||b=="r")&&(h==Number.MIN_VALUE||h>d[u].width)||(b=="t"||b=="m"||b=="b")&&(q==Number.MIN_VALUE||q>d[u].height)){m=d[u].x;z=d[u].y;i=d[u].x+d[u].width;o=d[u].y+d[u].height;h=d[u].width;q=d[u].height}break;case "largest":if((b=="l"||b=="c"||b=="r")&&(h==Number.MIN_VALUE||h<d[u].width)||(b=="t"||b=="m"||b=="b")&&(q==Number.MIN_VALUE||q<d[u].height)){m=d[u].x;z=d[u].y;i=d[u].x+d[u].width;o=d[u].y+d[u].height;h=d[u].width;
q=d[u].height}break;default:if(d[u].x<m)m=d[u].x;if(d[u].y<z)z=d[u].y;if(d[u].x+d[u].width>i)i=d[u].x+d[u].width;if(d[u].y+d[u].height>o)o=d[u].y+d[u].height}}if(c=="page"){z=m=0;i=e.contentW;o=e.contentH}h=Array(w);q=Array(w);for(u=0;u<w;++u){if(L[u]==null)break;var t=d[u];h[u]=0;q[u]=0;switch(b){case "l":h[u]=m-t.x;break;case "c":h[u]=(m+i)/2-(t.x+t.width/2);break;case "r":h[u]=i-(t.x+t.width);break;case "t":q[u]=z-t.y;break;case "m":q[u]=(z+o)/2-(t.y+t.height/2);break;case "b":q[u]=o-(t.y+t.height)}}this.moveSelectedElements(h,
q)}};this.contentW=xb().w;this.contentH=xb().h;this.updateCanvas=function(b,c){k.setAttribute("width",b);k.setAttribute("height",c);var d=$("#canvasBackground")[0],m=n.getAttribute("x"),i=n.getAttribute("y"),z=b/2-this.contentW*A/2,o=c/2-this.contentH*A/2;Ga(n,{width:this.contentW*A,height:this.contentH*A,x:z,y:o,viewBox:"0 0 "+this.contentW+" "+this.contentH});Ga(d,{width:n.getAttribute("width"),height:n.getAttribute("height"),x:z,y:o});(d=va("background_image"))&&Ga(d,{width:"100%",height:"100%"});
ra.selectorParentGroup.setAttribute("transform","translate("+z+","+o+")");return{x:z,y:o,old_x:m,old_y:i,d_x:z-m,d_y:o-i}};this.setBackground=function(b,c){var d=va("canvasBackground"),m=$(d).find("rect")[0],i=va("background_image");m.setAttribute("fill",b);if(c){if(!i){i=f.createElementNS(s,"image");Ga(i,{id:"background_image",width:"100%",height:"100%",preserveAspectRatio:"xMinYMin",style:"pointer-events:none"})}lb(i,c);d.appendChild(i)}else i&&i.parentNode.removeChild(i)};this.cycleElement=function(b){var c=
L[0],d=false,m=Lb(O||B().getCurrentLayer());if(m.length){if(c==null){b=b?m.length-1:0;d=m[b]}else for(var i=m.length;i--;)if(m[i]==c){b=b?i-1:i+1;if(b>=m.length)b=0;else if(b<0)b=m.length-1;d=m[b];break}Wa([d],true);ha("selected",L)}};this.clear();this.getPrivateMethods=function(){return{addCommandToHistory:ma,setGradient:Zb,addSvgElementFromJson:na,assignAttributes:Ga,BatchCommand:ua,call:ha,ChangeElementCommand:Ia,copyElem:vb,ffClone:Nb,findDefs:Xa,findDuplicateGradient:Sb,getElem:va,getId:db,getIntersectionList:Wb,
getMouseTarget:Pb,getNextId:Fa,getPathBBox:Tb,getUrlFromAttr:sb,hasMatrixTransform:ia,identifyLayers:zb,InsertElementCommand:Ha,isIdentity:svgedit.math.isIdentity,logMatrix:kc,matrixMultiply:pa,MoveElementCommand:Ca,preventClickDefault:Mb,recalculateAllSelectedDimensions:Ob,recalculateDimensions:Ta,remapElement:Fb,RemoveElementCommand:Pa,removeUnusedDefElems:fc,round:Eb,runExtensions:Db,sanitizeSvg:ja,SVGEditTransformList:svgedit.transformlist.SVGTransformList,toString:toString,transformBox:svgedit.math.transformBox,
transformListToTransform:da,transformPoint:oa,walkTree:svgedit.utilities.walkTree}}};(function(){document.addEventListener("touchstart",touchHandler,true);document.addEventListener("touchmove",touchHandler,true);document.addEventListener("touchend",touchHandler,true);document.addEventListener("touchcancel",touchHandler,true);if(!window.svgEditor)window.svgEditor=function(a){function K(B,A){var O=l.setSvgString(B)!==false;A=A||a.noop;O?A(true):a.alert(k.notification.errorLoadingSVG,function(){A(false)})}var l,s={},v=false,G={lang:"en",iconsize:"m",bkgd_color:"#FFF",bkgd_url:"",img_save:"embed"},
e={},f={canvasName:"default",canvas_expansion:3,dimensions:[640,480],initFill:{color:"FF0000",opacity:1},initStroke:{width:5,color:"000000",opacity:1},initOpacity:1,imgPath:"/assets/svg-edit-2.6/images/",langPath:"/assets/svg-edit-2.6/locale/",extPath:"/assets/svg-edit-2.6/extensions/",jGraduatePath:"/assets/svg-edit-2.6/jgraduate/images/",extensions:["ext-markers.js","ext-connector.js","ext-eyedropper.js","ext-shapes.js","ext-imagelib.js","ext-grid.js"],initTool:"select",wireframe:false,colorPickerCSS:null,gridSnapping:false,gridColor:"#000",baseUnit:"px",snappingStep:10,showRulers:true},
k=s.uiStrings={common:{ok:"OK",cancel:"Cancel",key_up:"Up",key_down:"Down",key_backspace:"Backspace",key_del:"Del"},layers:{layer:"Layer"},notification:{invalidAttrValGiven:"Invalid value given",noContentToFitTo:"No content to fit to",dupeLayerName:"There is already a layer named that!",enterUniqueLayerName:"Please enter a unique layer name",enterNewLayerName:"Please enter the new layer name",layerHasThatName:"Layer already has that name",QmoveElemsToLayer:'Move selected elements to layer "%s"?',
QwantToClear:"Do you want to clear the drawing?\nThis will also erase your undo history!",QwantToOpen:"Do you want to open a new file?\nThis will also erase your undo history!",QerrorsRevertToSource:"There were parsing errors in your SVG source.\nRevert back to original SVG source?",QignoreSourceChanges:"Ignore changes made to SVG source?",featNotSupported:"Feature not supported",enterNewImgURL:"Enter the new image URL",defsFailOnSave:"NOTE: Due to a bug in your browser, this image may appear wrong (missing gradients or elements). It will however appear correct once actually saved.",
loadingImage:"Loading image, please wait...",saveFromBrowser:'Select "Save As..." in your browser to save this image as a %s file.',noteTheseIssues:"Also note the following issues: ",unsavedChanges:"There are unsaved changes.",enterNewLinkURL:"Enter the new hyperlink URL",errorLoadingSVG:"Error: Unable to load SVG data",URLloadFail:"Unable to load from URL",retrieving:'Retrieving "%s" ...'}};e={};var n={};s.curConfig=f;s.tool_scale=1;a.pref=function(B,A){if(A)e[B]=A;B="svg-edit-"+B;var O=location.hostname,
Z=O&&O.indexOf(".")>=0,N=A!=undefined,L=false;try{if(window.localStorage)L=localStorage}catch(na){}try{if(window.globalStorage&&Z)L=globalStorage[O]}catch(ca){}if(L)if(N)L.setItem(B,A);else{if(L.getItem(B))return L.getItem(B)+""}else if(window.widget)if(N)widget.setPreferenceForKey(A,B);else return widget.preferenceForKey(B);else if(N){O=new Date;O.setTime(O.getTime()+31536E6);A=encodeURIComponent(A);document.cookie=B+"="+A+"; expires="+O.toUTCString()}else return(O=document.cookie.match(RegExp(B+
"=([^;]+)")))?decodeURIComponent(O[1]):""};s.setConfig=function(B){a.each(B,function(A,O){A in G&&a.pref(A,O)});a.extend(true,f,B);if(B.extensions)f.extensions=B.extensions};s.setCustomHandlers=function(B){s.ready(function(){if(B.open){a('#tool_open > input[type="file"]').remove();a("#tool_open").show();l.open=B.open}if(B.save){s.show_save_warning=false;l.bind("saved",B.save)}B.pngsave&&l.bind("exported",B.pngsave);n=B})};s.randomizeIds=function(){l.randomizeIds(arguments)};s.init=function(){function B(g,
p){var D=g.id,J=D.split("_"),M=J[0];J=J[1];p&&l.setStrokeAttr("stroke-"+M,J);Ua();t("#cur_"+M,D,20);a(g).addClass("current").siblings().removeClass("current")}function A(g,p){a.pref("bkgd_color",g);a.pref("bkgd_url",p);l.setBackground(g,p)}function O(){var g=l.getHref(ja);g=g.indexOf("data:")===0?"":g;a.prompt(k.notification.enterNewImgURL,g,function(p){p&&Bb(p)})}function Z(){if(l.deleteCurrentLayer()){Na();$a();a("#layerlist tr.layer").removeClass("layersel");a("#layerlist tr.layer:first").addClass("layersel")}}
function N(){var g=l.getCurrentDrawing().getCurrentLayerName()+" copy";a.prompt(k.notification.enterUniqueLayerName,g,function(p){if(p)if(l.getCurrentDrawing().hasLayer(p))a.alert(k.notification.dupeLayerName);else{l.cloneLayer(p);Na();$a()}})}function L(g){var p=a("#layerlist tr.layersel").index(),D=l.getCurrentDrawing().getNumLayers();if(p>0||p<D-1){p+=g;l.setCurrentLayerPosition(D-p-1);$a()}}function na(g,p){p||(p=l.getZoom());g||(g=a("#svgcanvas"));for(var D=l.getContentElem(),J=svgedit.units.getTypeMap()[f.baseUnit],
M=0;M<2;M++){var Q=M===0,U=Q?"x":"y",X=Q?"width":"height",ga=D.getAttribute(U)-0;U=a("#ruler_"+U+" canvas:first");$hcanv=U.clone();U.replaceWith($hcanv);var ea=$hcanv[0];var ka=U=g[X]();ea.parentNode.style[X]=ka+"px";var ya=0,Da,S=ea.getContext("2d");S.fillStyle="rgb(200,0,0)";S.fillRect(0,0,ea.width,ea.height);$hcanv.siblings().remove();if(U>=3E4){var Aa=parseInt(U/3E4)+1;Da=Array(Aa);Da[0]=S;for(var fa=1;fa<Aa;fa++){ea[X]=3E4;var ta=ea.cloneNode(true);ea.parentNode.appendChild(ta);Da[fa]=ta.getContext("2d")}ta[X]=
U%3E4;U=3E4}ea[X]=U;X=J*p;var Ea=50/X;ea=1;for(fa=0;fa<$b.length;fa++){ea=Aa=$b[fa];if(Ea<=Aa)break}Ea=ea*X;S.font="9px sans-serif";for(var Ka=ga/X%ea*X,Ma=Ka-Ea;Ka<ka;Ka+=Ea){Ma+=Ea;fa=Math.round(Ka)+0.5;if(Q){S.moveTo(fa,15);S.lineTo(fa,0)}else{S.moveTo(15,fa);S.lineTo(0,fa)}Aa=(Ma-ga)/X;if(ea>=1)fa=Math.round(Aa);else{fa=(ea+"").split(".")[1].length;fa=Aa.toFixed(fa)-0}if(fa!==0&&fa!==1E3&&fa%1E3===0)fa=fa/1E3+"K";if(Q)S.fillText(fa,Ka+2,8);else{Aa=(fa+"").split("");for(fa=0;fa<Aa.length;fa++)S.fillText(Aa[fa],
1,Ka+9+fa*9)}Aa=Ea/10;for(fa=1;fa<10;fa++){var Ba=Math.round(Ka+Aa*fa)+0.5;if(Da&&Ba>U){ya++;S.stroke();if(ya>=Da.length){fa=10;Ka=ka;continue}S=Da[ya];Ka-=3E4;Ba=Math.round(Ka+Aa*fa)+0.5}var ab=fa%2?12:10;if(Q){S.moveTo(Ba,15);S.lineTo(Ba,ab)}else{S.moveTo(15,Ba);S.lineTo(ab,Ba)}}}S.strokeStyle="#000";S.stroke()}}(function(){var g=window.opener;if(g)try{var p=g.document.createEvent("Event");p.initEvent("svgEditorReady",true,true);g.document.documentElement.dispatchEvent(p)}catch(D){}})();(function(){var g=
a.deparam.querystring(true);if(a.isEmptyObject(g))(g=window.localStorage.getItem("svgedit-"+s.curConfig.canvasName))&&s.loadFromString(g);else{if(g.dimensions)g.dimensions=g.dimensions.split(",");if(g.extensions)g.extensions=g.extensions.split(",");if(g.bkgd_color)g.bkgd_color="#"+g.bkgd_color;svgEditor.setConfig(g);var p=g.source,D=a.param.querystring();if(!p)if(D.indexOf("source=data:")>=0)p=D.match(/source=(data:[^&]*)/)[1];if(p)if(p.indexOf("data:")===0){p=p.replace(/ /g,"+");s.loadFromDataURI(p)}else s.loadFromString(p);
else if(D.indexOf("paramurl=")!==-1)svgEditor.loadFromURL(D.substr(9));else g.url&&svgEditor.loadFromURL(g.url)}})();var ca=function(){a.each(f.extensions,function(){var p=this;a.getScript(f.extPath+p,function(D){if(!D){D=document.createElement("script");D.src=f.extPath+p;document.querySelector("head").appendChild(D)}})});var g=[];a("#lang_select option").each(function(){g.push(this.value)});s.putLocale(null,g)};document.location.protocol==="file:"?setTimeout(ca,100):ca();a.svgIcons(f.imgPath+"svg_edit_icons.svg",
{w:24,h:24,id_match:false,no_img:!svgedit.browser.isWebkit(),fallback_path:f.imgPath,fallback:{new_image:"clear.png",save:"save.png",open:"open.png",source:"source.png",docprops:"document-properties.png",wireframe:"wireframe.png",undo:"undo.png",redo:"redo.png",select:"select.png",select_node:"select_node.png",pencil:"fhpath.png",pen:"line.png",square:"square.png",rect:"rect.png",fh_rect:"freehand-square.png",circle:"circle.png",ellipse:"ellipse.png",fh_ellipse:"freehand-circle.png",path:"path.png",
text:"text.png",image:"image.png",zoom:"zoom.png",clone:"clone.png",node_clone:"node_clone.png","delete":"delete.png",node_delete:"node_delete.png",group:"shape_group.png",ungroup:"shape_ungroup.png",move_top:"move_top.png",move_bottom:"move_bottom.png",to_path:"to_path.png",link_controls:"link_controls.png",reorient:"reorient.png",align_left:"align-left.png",align_center:"align-center",align_right:"align-right",align_top:"align-top",align_middle:"align-middle",align_bottom:"align-bottom",go_up:"go-up.png",
go_down:"go-down.png",ok:"save.png",cancel:"cancel.png",arrow_right:"flyouth.png",arrow_down:"dropdown.gif"},placement:{"#logo":"logo","#tool_clear div,#layer_new":"new_image","#tool_save div":"save","#tool_export div":"export","#tool_open div div":"open","#tool_import div div":"import","#tool_source":"source","#tool_docprops > div":"docprops","#tool_wireframe":"wireframe","#tool_undo":"undo","#tool_redo":"redo","#tool_select":"select","#tool_fhpath":"pencil","#tool_line":"pen","#tool_rect,#tools_rect_show":"rect",
"#tool_square":"square","#tool_fhrect":"fh_rect","#tool_ellipse,#tools_ellipse_show":"ellipse","#tool_circle":"circle","#tool_fhellipse":"fh_ellipse","#tool_path":"path","#tool_text,#layer_rename":"text","#tool_image":"image","#tool_zoom":"zoom","#tool_clone,#tool_clone_multi":"clone","#tool_node_clone":"node_clone","#layer_delete,#tool_delete,#tool_delete_multi":"delete","#tool_node_delete":"node_delete","#tool_add_subpath":"add_subpath","#tool_openclose_path":"open_path","#tool_move_top":"move_top",
"#tool_move_bottom":"move_bottom","#tool_topath":"to_path","#tool_node_link":"link_controls","#tool_reorient":"reorient","#tool_group":"group","#tool_ungroup":"ungroup","#tool_unlink_use":"unlink_use","#tool_alignleft, #tool_posleft":"align_left","#tool_aligncenter, #tool_poscenter":"align_center","#tool_alignright, #tool_posright":"align_right","#tool_aligntop, #tool_postop":"align_top","#tool_alignmiddle, #tool_posmiddle":"align_middle","#tool_alignbottom, #tool_posbottom":"align_bottom","#cur_position":"align",
"#linecap_butt,#cur_linecap":"linecap_butt","#linecap_round":"linecap_round","#linecap_square":"linecap_square","#linejoin_miter,#cur_linejoin":"linejoin_miter","#linejoin_round":"linejoin_round","#linejoin_bevel":"linejoin_bevel","#url_notice":"warning","#layer_up":"go_up","#layer_down":"go_down","#layer_moreopts":"context_menu","#layerlist td.layervis":"eye","#tool_source_save,#tool_docprops_save,#tool_prefs_save":"ok","#tool_source_cancel,#tool_docprops_cancel,#tool_prefs_cancel":"cancel","#rwidthLabel, #iwidthLabel":"width",
"#rheightLabel, #iheightLabel":"height","#cornerRadiusLabel span":"c_radius","#angleLabel":"angle","#linkLabel,#tool_make_link,#tool_make_link_multi":"globe_link","#zoomLabel":"zoom","#tool_fill label":"fill","#tool_stroke .icon_label":"stroke","#group_opacityLabel":"opacity","#blurLabel":"blur","#font_sizeLabel":"fontsize",".flyout_arrow_horiz":"arrow_right",".dropdown button, #main_button .dropdown":"arrow_down","#palette .palette_item:first, #fill_bg, #stroke_bg":"no_color"},resize:{"#logo .svg_icon":28,
".flyout_arrow_horiz .svg_icon":5,".layer_button .svg_icon, #layerlist td.layervis .svg_icon":14,".dropdown button .svg_icon":7,"#main_button .dropdown .svg_icon":9,".palette_item:first .svg_icon":15,"#fill_bg .svg_icon, #stroke_bg .svg_icon":16,".toolbar_button button .svg_icon":16,".stroke_tool div div .svg_icon":20,"#tools_bottom label .svg_icon":18},callback:function(){a(".toolbar_button button > svg, .toolbar_button button > img").each(function(){a(this).parent().prepend(this)});var g=a("#tools_left");
if(g.length!=0){g.offset();g.outerHeight()}a(".tools_flyout").each(function(){var p=a("#"+this.id+"_show"),D=p.attr("data-curopt");if(!p.children("svg, img").length){D=a(D).children().clone();if(D.length){D[0].removeAttribute("style");p.append(D)}}});svgEditor.runCallbacks();setTimeout(function(){a(".flyout_arrow_horiz:empty").each(function(){a(this).append(a.getSvgIcon("arrow_right").width(5).height(5))})},1)}});s.canvas=l=new a.SvgCanvas(document.getElementById("svgcanvas"),f);s.show_save_warning=
false;ca=navigator.platform.indexOf("Mac")>=0;var oa=navigator.userAgent.indexOf("AppleWebKit")>=0,pa=ca?"meta+":"ctrl+",ia=l.pathActions,da=l.undoMgr,Ya=svgedit.utilities,kb=f.imgPath+"logo.png",ba=a("#workarea"),sb=a("#cmenu_canvas");a("#cmenu_layers");var ib=null,lb=1,Tb="crosshair",bb="crosshair",va="toolbars",Ga="",Oa={fill:null,stroke:null};(function(){a("#dialog_container").draggable({cancel:"#dialog_content, #dialog_buttons *",containment:"window"});var g=a("#dialog_box"),p=a("#dialog_buttons"),
D=function(J,M,Q,U){a("#dialog_content").html("<p>"+M.replace(/\n/g,"</p><p>")+"</p>").toggleClass("prompt",J=="prompt");p.empty();var X=a('<input type="button" value="'+k.common.ok+'">').appendTo(p);J!="alert"&&a('<input type="button" value="'+k.common.cancel+'">').appendTo(p).click(function(){g.hide();Q(false)});if(J=="prompt"){var ga=a('<input type="text">').prependTo(p);ga.val(U||"");ga.bind("keydown","return",function(){X.click()})}J=="process"&&X.hide();g.show();X.click(function(){g.hide();
var ea=J=="prompt"?ga.val():true;Q&&Q(ea)}).focus();J=="prompt"&&ga.focus()};a.alert=function(J,M){D("alert",J,M)};a.confirm=function(J,M){D("confirm",J,M)};a.process_cancel=function(J,M){D("process",J,M)};a.prompt=function(J,M,Q){D("prompt",J,Q,M)}})();var hb=function(){var g=a(".tool_button_current");if(g.length&&g[0].id!=="tool_select"){g.removeClass("tool_button_current").addClass("tool_button");a("#tool_select").addClass("tool_button_current").removeClass("tool_button");a("#styleoverrides").text("#svgcanvas svg *{cursor:move;pointer-events:all} #svgcanvas svg{cursor:default}")}l.setMode("select");
ba.css("cursor","auto")},ja=null,Ca=false,Ha=false,Pa=false,Ia=false,ua="",ma=a("title:first").text(),ra=l.zoomChanged=function(g,p,D){l.getResolution();a("#svgcanvas").position();if(p=l.setBBoxZoom(p,ba.width()-15,ba.height()-15)){g=p.zoom;p=p.bbox;if(g<0.001)sa({value:0.1});else{a("#zoom").val(g*100);D?qb():qb(false,{x:p.x*g+p.width*g/2,y:p.y*g+p.height*g/2});l.getMode()=="zoom"&&p.width&&hb();d()}}};a("#cur_context_panel").delegate("a","click",function(){var g=a(this);g.attr("data-root")?l.leaveContext():
l.setContext(g.text());l.clearSelection();return false});var la={},ub=function(g){a.each(g,function(p,D){var J=a(p).children(),M=p+"_show",Q=a(M),U=false;J.addClass("tool_button").unbind("click mousedown mouseup").each(function(ea){var ka=D[ea];la[ka.sel]=ka.fn;if(ka.isDefault)U=ea;ea=function(ya){var Da=ka;if(ya.type==="keydown"){var S=a(Da.parent+"_show").hasClass("tool_button_current"),Aa=a(Da.parent+"_show").attr("data-curopt");a.each(g[ka.parent],function(ta,Ea){if(Ea.sel==Aa)Da=!ya.shiftKey||
!S?Ea:g[ka.parent][ta+1]||g[ka.parent][0]})}if(a(this).hasClass("disabled"))return false;La(M)&&Da.fn();var fa=Da.icon?a.getSvgIcon(Da.icon,true):a(Da.sel).children().eq(0).clone();fa[0].setAttribute("width",Q.width());fa[0].setAttribute("height",Q.height());Q.children(":not(.flyout_arrow_horiz)").remove();Q.append(fa).attr("data-curopt",Da.sel)};a(this).mouseup(ea);ka.key&&a(document).bind("keydown",ka.key[0]+" shift+"+ka.key[0],ea)});if(U)Q.attr("data-curopt",D[U].sel);else Q.attr("data-curopt")||
Q.attr("data-curopt",D[0].sel);var X,ga=a(M).position();a(p).css({left:ga.left+34,top:ga.top+40});Q.mousedown(function(ea){if(Q.hasClass("disabled"))return false;var ka=a(p),ya=ga.left+34,Da=ka.width()*-1,S=ka.data("shown_popop")?200:0;X=setTimeout(function(){Q.data("isLibrary")?ka.css("left",ya).show():ka.css("left",Da).show().animate({left:ya},150);ka.data("shown_popop",true)},S);ea.preventDefault()}).mouseup(function(){clearTimeout(X);var ea=a(this).attr("data-curopt");if(Q.data("isLibrary")&&
a(M.replace("_show","")).is(":visible"))La(M,true);else La(M)&&ea in la&&la[ea]()})});Ib()},Hb=function(g,p){return a("<div>",{"class":"tools_flyout",id:g}).appendTo("#svg_editor").append(p)},Ab=function(){a(".tools_flyout").each(function(){var g=a("#"+this.id+"_show"),p=g.offset();g=g.outerWidth();a(this).css({left:(p.left+g)*lb,top:p.top})})},Ib=function(){a(".tools_flyout").each(function(){var g=a("#"+this.id+"_show");if(!g.data("isLibrary")){var p=[];a(this).children().each(function(){p.push(this.title)});
g[0].title=p.join(" / ")}})},tb,Jb=function(g,p,D){var J=null;if(g.indexOf("url(#")===0){g=(g=l.getRefElem(g))?g.cloneNode(true):a("#"+D+"_color defs *")[0];J={alpha:p};J[g.tagName]=g}else J=g.indexOf("#")===0?{alpha:p,solidColor:g.substr(1)}:{alpha:p,solidColor:"none"};return new a.jGraduate.Paint(J)},Bb=s.setImageURL=function(g){g||(g=kb);l.setImageURL(g);a("#image_url").val(g);if(g.indexOf("data:")===0){a("#image_url").hide();a("#change_image_url").show()}else{l.embedImage(g,function(p){p?a("#url_notice").hide():
a("#url_notice").show();kb=g});a("#image_url").show();a("#change_image_url").hide()}},Kb=function(g){var p=Math.min(Math.max(12+g.value.length*6,50),300);a(g).width(p)},Na=function(){var g=ja;if(g!=null&&!g.parentNode)g=null;var p=l.getCurrentDrawing().getCurrentLayerName(),D=l.getMode(),J=f.baseUnit!=="px"?f.baseUnit:null,M=D=="pathedit",Q=a("#cmenu_canvas li");a("#selected_panel, #multiselected_panel, #g_panel, #rect_panel, #circle_panel,\t\t\t\t\t#ellipse_panel, #line_panel, #text_panel, #image_panel, #container_panel, #use_panel, #a_panel").hide();
if(g!=null){var U=g.nodeName,X=l.getRotationAngle(g);a("#angle").val(X);var ga=l.getBlur(g);a("#blur").val(ga);a("#blur_slider").slider("option","value",ga);l.addedNew&&U==="image"&&l.getHref(g).indexOf("data:")!==0&&O();if(!M&&D!="pathedit"){a("#selected_panel").show();if(["line","circle","ellipse"].indexOf(U)>=0)a("#xy_panel").hide();else{var ea,ka;if(["g","polyline","path"].indexOf(U)>=0){if(D=l.getStrokedBBox([g])){ea=D.x;ka=D.y}}else{ea=g.getAttribute("x");ka=g.getAttribute("y")}if(J){ea=svgedit.units.convertUnit(ea);
ka=svgedit.units.convertUnit(ka)}a("#selected_x").val(ea||0);a("#selected_y").val(ka||0);a("#xy_panel").show()}J=["image","text","path","g","use"].indexOf(U)==-1;a("#tool_topath").toggle(J);a("#tool_reorient").toggle(U=="path");a("#tool_reorient").toggleClass("disabled",X==0)}else{p=ia.getNodePoint();a("#tool_add_subpath").removeClass("push_button_pressed").addClass("tool_button");a("#tool_node_delete").toggleClass("disabled",!ia.canDeleteNodes);t("#tool_openclose_path",ia.closed_subpath?"open_path":
"close_path");if(p){M=a("#seg_type");if(J){p.x=svgedit.units.convertUnit(p.x);p.y=svgedit.units.convertUnit(p.y)}a("#path_node_x").val(p.x);a("#path_node_y").val(p.y);p.type?M.val(p.type).removeAttr("disabled"):M.val(4).attr("disabled","disabled")}return}J={g:[],a:[],rect:["rx","width","height"],image:["width","height"],circle:["cx","cy","r"],ellipse:["cx","cy","rx","ry"],line:["x1","y1","x2","y2"],text:[],use:[]};var ya=g.tagName;U=null;if(ya==="a"){U=l.getHref(g);a("#g_panel").show()}if(g.parentNode.tagName===
"a")if(!a(g).siblings().length){a("#a_panel").show();U=l.getHref(g.parentNode)}a("#tool_make_link, #tool_make_link").toggle(!U);U&&a("#link_url").val(U);if(J[ya]){J=J[ya];a("#"+ya+"_panel").show();a.each(J,function(Da,S){var Aa=g.getAttribute(S);if(f.baseUnit!=="px"&&g[S])Aa=svgedit.units.convertUnit(g[S].baseVal.value);a("#"+ya+"_"+S).val(Aa||0)});if(ya=="text"){a("#text_panel").css("display","inline");l.getItalic()?a("#tool_italic").addClass("push_button_pressed").removeClass("tool_button"):a("#tool_italic").removeClass("push_button_pressed").addClass("tool_button");
l.getBold()?a("#tool_bold").addClass("push_button_pressed").removeClass("tool_button"):a("#tool_bold").removeClass("push_button_pressed").addClass("tool_button");a("#font_family").val(g.getAttribute("font-family"));a("#font_size").val(g.getAttribute("font-size"));a("#text").val(g.textContent);l.addedNew&&setTimeout(function(){a("#text").focus().select()},100)}else if(ya=="image")Bb(l.getHref(g));else if(ya==="g"||ya==="use"){a("#container_panel").show();J=l.getTitle();U=a("#g_title")[0];U.value=J;
Kb(U);ya=="use"?U.setAttribute("disabled","disabled"):U.removeAttribute("disabled")}}Q[(ya==="g"?"en":"dis")+"ableContextMenuItems"]("#ungroup");Q[(ya==="g"||!Ca?"dis":"en")+"ableContextMenuItems"]("#group")}else if(Ca){a("#multiselected_panel").show();Q.enableContextMenuItems("#group").disableContextMenuItems("#ungroup")}else Q.disableContextMenuItems("#delete,#cut,#copy,#group,#ungroup,#move_front,#move_up,#move_down,#move_back");da.getUndoStackSize()>0?a("#tool_undo").removeClass("disabled"):a("#tool_undo").addClass("disabled");
da.getRedoStackSize()>0?a("#tool_redo").removeClass("disabled"):a("#tool_redo").addClass("disabled");l.addedNew=false;if(g&&!M||Ca){a("#selLayerNames").removeAttr("disabled").val(p);sb.enableContextMenuItems("#delete,#cut,#copy,#move_front,#move_up,#move_down,#move_back")}else a("#selLayerNames").attr("disabled","disabled")};a("#text").focus(function(){});a("#text").blur(function(){});l.bind("selected",function(g,p){var D=l.getMode();D==="select"&&hb();D=D=="pathedit";ja=p.length==1||p[1]==null?p[0]:
null;Ca=p.length>=2&&p[1]!=null;if(ja!=null)if(!D){if(ja!=null)switch(ja.tagName){case "use":case "image":case "foreignObject":break;case "g":case "a":for(var J=null,M=ja.getElementsByTagName("*"),Q=0,U=M.length;Q<U;Q++){var X=M[Q].getAttribute("stroke-width");if(Q===0)J=X;else if(J!==X)J=null}a("#stroke_width").val(J===null?"":J);Oa.fill.update(true);Oa.stroke.update(true);break;default:Oa.fill.update(true);Oa.stroke.update(true);a("#stroke_width").val(ja.getAttribute("stroke-width")||1);a("#stroke_style").val(ja.getAttribute("stroke-dasharray")||
"none");J=ja.getAttribute("stroke-linejoin")||"miter";a("#linejoin_"+J).length!=0&&B(a("#linejoin_"+J)[0]);J=ja.getAttribute("stroke-linecap")||"butt";a("#linecap_"+J).length!=0&&B(a("#linecap_"+J)[0])}if(ja!=null){J=(ja.getAttribute("opacity")||1)*100;a("#group_opacity").val(J);a("#opac_slider").slider("option","value",J);a("#elem_id").val(ja.id)}fb()}a("#path_node_panel").toggle(D);a("#tools_bottom_2,#tools_bottom_3").toggle(!D);if(D){a(".tool_button_current").removeClass("tool_button_current").addClass("tool_button");
a("#tool_select").addClass("tool_button_current").removeClass("tool_button");t("#tool_select","select_node");Ca=false;if(p.length)ja=p[0]}else t("#tool_select","select");Na();l.runExtensions("selectedChanged",{elems:p,selectedElement:ja,multiselected:Ca})});l.bind("transition",function(g,p){var D=l.getMode(),J=p[0];if(J){Ca=p.length>=2&&p[1]!=null;if(!Ca)switch(D){case "rotate":D=l.getRotationAngle(J);a("#angle").val(D);a("#tool_reorient").toggleClass("disabled",D==0)}l.runExtensions("elementTransition",
{elems:p})}});l.bind("changed",function(g,p){var D=l.getMode();D==="select"&&hb();for(var J=0;J<p.length;++J){var M=p[J];if(M&&M.tagName==="svg"){$a();qb()}else if(M&&ja&&ja.parentNode==null)ja=M}s.show_save_warning=true;Na();if(ja&&D==="select"){Oa.fill.update();Oa.stroke.update()}l.runExtensions("elementChanged",{elems:p})});l.bind("saved",function(g,p){s.show_save_warning=false;p='<?xml version="1.0"?>\n'+p;var D=navigator.userAgent;if(~D.indexOf("Chrome")&&a.browser.version>=533||~D.indexOf("MSIE"))m(0,
true);else{var J=g.open("data:image/svg+xml;base64,"+Ya.encode64(p)),M=a.pref("save_notice_done");if(M!=="all"){var Q=k.notification.saveFromBrowser.replace("%s","SVG");if(D.indexOf("Gecko/")!==-1)if(p.indexOf("<defs")!==-1){Q+="\n\n"+k.notification.defsFailOnSave;a.pref("save_notice_done","all");M="all"}else a.pref("save_notice_done","part");else a.pref("save_notice_done","all");M!=="part"&&J.alert(Q)}}});l.bind("exported",function(g,p){var D=p.issues;a("#export_canvas").length||a("<canvas>",{id:"export_canvas"}).hide().appendTo("body");
var J=a("#export_canvas")[0];J.width=l.contentW;J.height=l.contentH;canvg(J,p.svg,{renderCallback:function(){var M=J.toDataURL("image/png");ib.location.href=M;if(a.pref("export_notice_done")!=="all"){M=k.notification.saveFromBrowser.replace("%s","PNG");if(D.length)M+="\n\n"+k.notification.noteTheseIssues+"\n \u2022 "+D.join("\n \u2022 ");a.pref("export_notice_done","all");ib.alert(M)}}})});l.bind("zoomed",ra);l.bind("contextset",function(g,p){var D="";if(p){var J="";D='<a href="#" data-root="y">'+
l.getCurrentDrawing().getCurrentLayerName()+"</a>";a(p).parentsUntil("#svgcontent > g").andSelf().each(function(){if(this.id){J+=" > "+this.id;D+=this!==p?' > <a href="#">'+this.id+"</a>":" > "+this.id}});ua=J}else ua=null;a("#cur_context_panel").toggle(!!p).html(D);q()});l.bind("extension_added",function(g,p){function D(){if(tb){clearTimeout(tb);tb=null}M||(tb=setTimeout(function(){M=true;H(e.iconsize)},50))}var J=false,M=false,Q=true,U=function(){if(p.callback&&!J&&Q){J=true;p.callback()}},X=[];
p.context_tools&&a.each(p.context_tools,function(Da,S){var Aa=S.container_id?' id="'+S.container_id+'"':"",fa=a("#"+S.panel);fa.length||(fa=a("<div>",{id:S.panel}).appendTo("#tools_top"));switch(S.type){case "tool_button":var ta='<div class="tool_button">'+S.id+"</div>",Ea=a(ta).appendTo(fa);S.events&&a.each(S.events,function(Ba,ab){a(Ea).bind(Ba,ab)});break;case "select":ta="<label"+Aa+'><select id="'+S.id+'">';a.each(S.options,function(Ba,ab){ta+='<option value="'+Ba+'"'+(Ba==S.defval?" selected":
"")+">"+ab+"</option>"});ta+="</select></label>";var Ka=a(ta).appendTo(fa).find("select");a.each(S.events,function(Ba,ab){a(Ka).bind(Ba,ab)});break;case "button-select":ta='<div id="'+S.id+'" class="dropdown toolset" title="'+S.title+'"><div id="cur_'+S.id+'" class="icon_label"></div><button></button></div>';Aa=a('<ul id="'+S.id+'_opts"></ul>').appendTo("#option_lists");S.colnum&&Aa.addClass("optcols"+S.colnum);a(ta).appendTo(fa).children();X.push({elem:"#"+S.id,list:"#"+S.id+"_opts",title:S.title,
callback:S.events.change,cur:"#cur_"+S.id});break;case "input":ta="<label"+Aa+'><span id="'+S.id+'_label">'+S.label+':</span><input id="'+S.id+'" title="'+S.title+'" size="'+(S.size||"4")+'" value="'+(S.defval||"")+'" type="text"/></label>';var Ma=a(ta).appendTo(fa).find("input");S.spindata&&Ma.SpinButton(S.spindata);S.events&&a.each(S.events,function(Ba,ab){Ma.bind(Ba,ab)})}});if(p.buttons){var ga={},ea={},ka=p.svgicons,ya={};a.each(p.buttons,function(Da,S){for(var Aa,fa=S.id,ta=Da;a("#"+fa).length;)fa=
S.id+"_"+ ++ta;if(ka){ga[fa]=S.icon;ta=S.svgicon?S.svgicon:S.id;if(S.type=="app_menu")ea["#"+fa+" > div"]=ta;else ea["#"+fa]=ta}else Aa=a('<img src="'+S.icon+'">');var Ea,Ka;switch(S.type){case "mode_flyout":case "mode":Ea="tool_button";Ka="#tools_left";break;case "context":Ea="tool_button";Ka="#"+S.panel;a(Ka).length||a("<div>",{id:S.panel}).appendTo("#tools_top");break;case "app_menu":Ea="";Ka="#main_menu ul"}var Ma=a(S.list||S.type=="app_menu"?"<li/>":"<div/>").attr("id",fa).attr("title",S.title).addClass(Ea);
if(!S.includeWith&&!S.list){"position"in S?a(Ka).children().eq(S.position).before(Ma):Ma.appendTo(Ka);if(S.type=="mode_flyout"){ta=a(Ma);Ea=ta.parent();if(!ta.parent().hasClass("tools_flyout")){var Ba=ta[0].id.replace("tool_","tools_"),ab=ta.clone().attr("id",Ba+"_show").append(a("<div>",{"class":"flyout_arrow_horiz"}));ta.before(ab);Ea=Hb(Ba,ta);Ea.data("isLibrary",true);ab.data("isLibrary",true)}ea["#"+Ba+"_show"]=S.id;fa=ya["#"+Ea[0].id]=[{sel:"#"+fa,fn:S.events.click,icon:S.id,isDefault:true},
hc]}else S.type=="app_menu"&&Ma.append("<div>").append(S.title)}else if(S.list){Ma.addClass("push_button");a("#"+S.list+"_opts").append(Ma);if(S.isDefault){a("#cur_"+S.list).append(Ma.children().clone());ta=S.svgicon?S.svgicon:S.id;ea["#cur_"+S.list]=ta}}else if(S.includeWith){Ka=S.includeWith;ta=a(Ka.button);Ea=ta.parent();if(!ta.parent().hasClass("tools_flyout")){Ba=ta[0].id.replace("tool_","tools_");ab=ta.clone().attr("id",Ba+"_show").append(a("<div>",{"class":"flyout_arrow_horiz"}));ta.before(ab);
Ea=Hb(Ba,ta)}var hc=mc.getButtonData(Ka.button);if(Ka.isDefault)ea["#"+Ba+"_show"]=S.id;fa=ya["#"+Ea[0].id]=[{sel:"#"+fa,fn:S.events.click,icon:S.id,key:S.key,isDefault:S.includeWith?S.includeWith.isDefault:0},hc];Ba="position"in Ka?Ka.position:"last";hc=Ea.children().length;if(!isNaN(Ba)&&Ba>=0&&Ba<hc)Ea.children().eq(Ba).before(Ma);else{Ea.append(Ma);fa.reverse()}}ka||Ma.append(Aa);S.list||a.each(S.events,function(ac,bc){if(ac=="click")if(S.type=="mode"){S.includeWith?Ma.bind(ac,bc):Ma.bind(ac,
function(){La(Ma)&&bc()});if(S.key){a(document).bind("keydown",S.key,bc);S.title&&Ma.attr("title",S.title+" ["+S.key+"]")}}else Ma.bind(ac,bc);else Ma.bind(ac,bc)});ub(ya)});a.each(X,function(){wa(this.elem,this.list,this.callback,{seticon:true})});if(ka)Q=false;a.svgIcons(ka,{w:24,h:24,id_match:false,no_img:!oa,fallback:ga,placement:ea,callback:function(){e.iconsize&&e.iconsize!="m"&&D();Q=true;U()}})}U()});l.textActions.setInputElem(a("#text")[0]);var xa='<div class="palette_item" data-rgb="none"></div>';
a.each(["#000000","#3f3f3f","#7f7f7f","#bfbfbf","#ffffff","#ff0000","#ff7f00","#ffff00","#7fff00","#00ff00","#00ff7f","#00ffff","#007fff","#0000ff","#7f00ff","#ff00ff","#ff007f","#7f0000","#7f3f00","#7f7f00","#3f7f00","#007f00","#007f3f","#007f7f","#003f7f","#00007f","#3f007f","#7f007f","#7f003f","#ffaaaa","#ffd4aa","#ffffaa","#d4ffaa","#aaffaa","#aaffd4","#aaffff","#aad4ff","#aaaaff","#d4aaff","#ffaaff","#ffaad4"],function(g,p){xa+='<div class="palette_item" style="background-color: '+p+';" data-rgb="'+
p+'"></div>'});a("#palette").append(xa);xa="";a.each(["#FFF","#888","#000"],function(){xa+='<div class="color_block" style="background-color:'+this+';"></div>'});a("#bg_blocks").append(xa);var Qa=a("#bg_blocks div");Qa.each(function(){a(this).click(function(){Qa.removeClass("cur_background");a(this).addClass("cur_background")})});if(a.pref("bkgd_color"))A(a.pref("bkgd_color"),a.pref("bkgd_url"));else a.pref("bkgd_url")&&A(G.bkgd_color,a.pref("bkgd_url"));if(a.pref("img_save")){e.img_save=a.pref("img_save");
a("#image_save_opts input").val([e.img_save])}var sa=function(g){var p=g.value/100;if(p<0.001)g.value=0.1;else{g=l.getZoom();ra(window,{width:0,height:0,x:(ba[0].scrollLeft+ba.width()/2)/g,y:(ba[0].scrollTop+ba.height()/2)/g,zoom:p},true)}},cb=function(g,p){if(p==null)p=g.value;a("#group_opacity").val(p);if(!g||!g.handle)a("#opac_slider").slider("option","value",p);l.setOpacity(p/100)},pb=function(g,p,D){if(p==null)p=g.value;a("#blur").val(p);var J=false;if(!g||!g.handle){a("#blur_slider").slider("option",
"value",p);J=true}D?l.setBlurNoUndo(p):l.setBlur(p,J)},Ua=function(){window.opera&&a("<p/>").hide().appendTo("body").remove()};a("#stroke_style").change(function(){l.setStrokeAttr("stroke-dasharray",a(this).val());Ua()});a("#stroke_linejoin").change(function(){l.setStrokeAttr("stroke-linejoin",a(this).val());Ua()});a("select").change(function(){a(this).blur()});var Sa=false;a("#selLayerNames").change(function(){var g=this.options[this.selectedIndex].value,p=k.notification.QmoveElemsToLayer.replace("%s",
g),D=function(J){if(J){Sa=true;l.moveSelectedToLayer(g);l.clearSelection();$a()}};if(g)Sa?D(true):a.confirm(p,D)});a("#font_family").change(function(){l.setFontFamily(this.value)});a("#seg_type").change(function(){l.setSegType(a(this).val())});a("#text").keyup(function(){l.setTextContent(this.value)});a("#image_url").change(function(){Bb(this.value)});a("#link_url").change(function(){this.value.length?l.setLinkURL(this.value):l.removeHyperlink()});a("#g_title").change(function(){l.setGroupTitle(this.value)});
a(".attr_changer").change(function(){var g=this.getAttribute("data-attr"),p=this.value;if(!svgedit.units.isValidUnit(g,p,ja)){a.alert(k.notification.invalidAttrValGiven);this.value=ja.getAttribute(g);return false}if(g!=="id")if(isNaN(p))p=l.convertToNum(g,p);else if(f.baseUnit!=="px"){var D=svgedit.units.getTypeMap();if(ja[g]||l.getMode()==="pathedit"||g==="x"||g==="y")p*=D[f.baseUnit]}if(g==="id"){g=ja;l.clearSelection();g.id=p;l.addToSelection([g],true)}else l.changeSelectedAttribute(g,p);this.blur()});
a("#palette").mouseover(function(){var g=a('<input type="hidden">');a(this).append(g);g.focus().remove()});a(".palette_item").mousedown(function(g){var p=g.button===2;p=(g=g.shiftKey||p)?"stroke":"fill";var D=a(this).attr("data-rgb"),J=null;if(D==="none"||D==="transparent"||D==="initial"){D="none";J=new a.jGraduate.Paint}else J=new a.jGraduate.Paint({alpha:100,solidColor:D.substr(1)});Oa[p].setPaint(J);if(g){l.setColor("stroke",D);D!="none"&&l.getStrokeOpacity()!=1&&l.setPaintOpacity("stroke",1)}else{l.setColor("fill",
D);D!="none"&&l.getFillOpacity()!=1&&l.setPaintOpacity("fill",1)}fb()}).bind("contextmenu",function(g){g.preventDefault()});a("#toggle_stroke_tools").on("click",function(){a("#tools_bottom").toggleClass("expanded")});var La=function(g,p){if(a(g).hasClass("disabled"))return false;if(a(g).parent().hasClass("tools_flyout"))return true;var D=D||"normal";p||a(".tools_flyout").fadeOut(D);a("#styleoverrides").text("");ba.css("cursor","auto");a(".tool_button_current").removeClass("tool_button_current").addClass("tool_button");
a(g).addClass("tool_button_current").removeClass("tool_button");return true};(function(){var g=null,p=null,D=ba[0],J=false,M=false;a("#svgcanvas").bind("mousemove mouseup",function(Q){if(J!==false){D.scrollLeft-=Q.clientX-g;D.scrollTop-=Q.clientY-p;g=Q.clientX;p=Q.clientY;if(Q.type==="mouseup")J=false;return false}}).mousedown(function(Q){if(Q.button===1||M===true){J=true;g=Q.clientX;p=Q.clientY;return false}});a(window).mouseup(function(){J=false});a(document).bind("keydown","space",function(Q){l.spaceKey=
M=true;Q.preventDefault()}).bind("keyup","space",function(Q){Q.preventDefault();l.spaceKey=M=false}).bind("keydown","shift",function(){l.getMode()==="zoom"&&ba.css("cursor",bb)}).bind("keyup","shift",function(){l.getMode()==="zoom"&&ba.css("cursor",Tb)})})();(function(){var g=a("#main_icon"),p=a("#main_icon span"),D=a("#main_menu"),J=false,M=0,Q=true,U=false;a(window).mouseup(function(ga){if(!J){g.removeClass("buttondown");if(ga.target.tagName!="INPUT")D.fadeOut(200);else if(!U){U=true;a(ga.target).click(function(){D.css("margin-left",
"-9999px").show()})}}J=false}).mousedown(function(ga){a(ga.target).closest("div.tools_flyout, .contextMenu").length||a(".tools_flyout:visible,.contextMenu").fadeOut(250)});p.bind("mousedown",function(){if(g.hasClass("buttondown")){g.removeClass("buttondown").addClass("buttonup");D.fadeOut(200)}else{g.addClass("buttondown").removeClass("buttonup");D.css("margin-left",0).show();M||(M=D.height());D.css("height",0).animate({height:M},200);J=true;return false}}).hover(function(){J=true}).mouseout(function(){J=
false});var X=a("#main_menu li");X.mouseover(function(){Q=a(this).css("background-color")=="rgba(0, 0, 0, 0)";X.unbind("mouseover");Q&&X.mouseover(function(){this.style.backgroundColor="#FFC"}).mouseout(function(){this.style.backgroundColor="transparent";return true})})})();s.addDropDown=function(g,p,D){if(a(g).length!=0){var J=a(g).find("button"),M=a(g).find("ul").attr("id",a(g)[0].id+"-list");D||a("#option_lists").append(M);var Q=false;D&&a(g).addClass("dropup");M.find("li").bind("mouseup",p);a(window).mouseup(function(){if(!Q){J.removeClass("down");
M.hide()}Q=false});J.bind("mousedown",function(){if(J.hasClass("down")){J.removeClass("down");M.hide()}else{J.addClass("down");if(!D){var U=a(g).position();M.css({top:U.top+24,left:U.left-10})}M.show();Q=true}}).hover(function(){Q=true}).mouseout(function(){Q=false})}};var wa=function(g,p,D,J){var M=a(g);p=a(p);var Q=false,U=J.dropUp;U&&a(g).addClass("dropup");p.find("li").bind("mouseup",function(){if(J.seticon){t("#cur_"+M[0].id,a(this).children());a(this).addClass("current").siblings().removeClass("current")}D.apply(this,
arguments)});a(window).mouseup(function(){if(!Q){M.removeClass("down");p.hide();p.css({top:0,left:0})}Q=false});p.height();a(g).bind("mousedown",function(){var X=a(g).offset();if(U){X.top-=p.height();X.left+=8}else X.top+=a(g).height();a(p).offset(X);if(M.hasClass("down")){M.removeClass("down");p.hide();p.css({top:0,left:0})}else{M.addClass("down");p.show();Q=true;return false}}).hover(function(){Q=true}).mouseout(function(){Q=false});J.multiclick&&p.mousedown(function(){Q=true})};s.addDropDown("#font_family_dropdown",
function(){a(this).text();a("#font_family").val(a(this).text()).change()});s.addDropDown("#opacity_dropdown",function(){if(!a(this).find("div").length){var g=parseInt(a(this).text().split("%")[0]);cb(false,g)}},true);a("#opac_slider").slider({start:function(){a("#opacity_dropdown li:not(.special)").hide()},stop:function(){a("#opacity_dropdown li").show();a(window).mouseup()},slide:function(g,p){cb(p)}});s.addDropDown("#blur_dropdown",a.noop);var jb=false;a("#blur_slider").slider({max:10,step:0.1,
stop:function(g,p){jb=false;pb(p);a("#blur_dropdown li").show();a(window).mouseup()},start:function(){jb=true},slide:function(g,p){pb(p,null,jb)}});s.addDropDown("#zoom_dropdown",function(){var g=a(this),p=g.attr("data-val");p?ra(window,p):sa({value:parseInt(g.text())})},true);wa("#stroke_linecap","#linecap_opts",function(){B(this,true)},{dropUp:true});wa("#stroke_linejoin","#linejoin_opts",function(){B(this,true)},{dropUp:true});wa("#tool_position","#position_opts",function(){var g=this.id.replace("tool_pos",
"").charAt(0);l.alignSelectedElements(g,"page")},{multiclick:true});(function(){var g,p=function(){a(g).blur()};a("#svg_editor").find("button, select, input:not(#text)").focus(function(){g=this;va="toolbars";ba.mousedown(p)}).blur(function(){va="canvas";ba.unbind("mousedown",p);l.getMode()=="textedit"&&a("#text").focus()})})();var Cb=function(){if(La("#tool_select")){l.setMode("select");a("#styleoverrides").text("#svgcanvas svg *{cursor:move;pointer-events:all}, #svgcanvas svg{cursor:default}")}},
Vb=function(){La("#tool_fhpath")&&l.setMode("fhpath")},Ub=function(){La("#tool_line")&&l.setMode("line")},Db=function(){La("#tool_square")&&l.setMode("square")},Eb=function(){La("#tool_rect")&&l.setMode("rect")},Wb=function(){La("#tool_fhrect")&&l.setMode("fhrect")},Lb=function(){La("#tool_circle")&&l.setMode("circle")},jc=function(){La("#tool_ellipse")&&l.setMode("ellipse")},cc=function(){La("#tool_fhellipse")&&l.setMode("fhellipse")},vb=function(){La("#tool_image")&&l.setMode("image")},db=function(){if(La("#tool_zoom")){l.setMode("zoom");
ba.css("cursor",Tb)}},Fa=function(){if(La("#tool_zoom")){b();hb()}},ha=function(){La("#tool_text")&&l.setMode("text")},rb=function(){La("#tool_path")&&l.setMode("path")},Nb=function(){if(ja!=null||Ca)l.deleteSelectedElements()},Ob=function(){if(ja!=null||Ca)l.cutSelectedElements()},Xb=function(){if(ja!=null||Ca)l.copySelectedElements()},kc=function(){var g=l.getZoom(),p=(ba[0].scrollLeft+ba.width()/2)/g-l.contentW;g=(ba[0].scrollTop+ba.height()/2)/g-l.contentH;l.pasteElements("point",p,g)},Fb=function(){ja!=
null&&l.moveToTopSelectedElement()},dc=function(){ja!=null&&l.moveToBottomSelectedElement()},Ta=function(g){ja!=null&&l.moveUpDownSelected(g)},nb=function(){ja!=null&&l.convertToPath()},za=function(){ja!=null&&ia.reorient()},gb=function(){if(ja!=null||Ca)a.prompt(k.notification.enterNewLinkURL,"http://",function(g){g&&l.makeHyperlink(g)})},Wa=function(g,p){if(ja!=null||Ca){if(f.gridSnapping){var D=l.getZoom()*f.snappingStep;g*=D;p*=D}l.moveSelectedElements(g,p)}},Pb=function(){var g=!a("#tool_node_link").hasClass("push_button_pressed");
g?a("#tool_node_link").addClass("push_button_pressed").removeClass("tool_button"):a("#tool_node_link").removeClass("push_button_pressed").addClass("tool_button");ia.linkControlPoints(g)},Mb=function(){ia.getNodePoint()&&ia.clonePathNode()},Ra=function(){ia.getNodePoint()&&ia.deletePathNode()},qa=function(){var g=a("#tool_add_subpath"),p=!g.hasClass("push_button_pressed");p?g.addClass("push_button_pressed").removeClass("tool_button"):g.removeClass("push_button_pressed").addClass("tool_button");ia.addSubPath(p)},
fc=function(){ia.opencloseSubPath()},Rb=function(){l.cycleElement(1)},Gb=function(){l.cycleElement(0)},yb=function(g,p){if(!(ja==null||Ca)){g||(p*=-1);var D=a("#angle").val()*1+p;l.setRotationAngle(D);Na()}},gc=function(){var g=f.dimensions;a.confirm(k.notification.QwantToClear,function(p){if(p){hb();l.clear();l.setResolution(g[0],g[1]);qb(true);b();$a();Na();Oa.fill.prep();Oa.stroke.prep();l.runExtensions("onNewDocument")}})},zb=function(){l.setBold(!l.getBold());Na();return false},Qb=function(){l.setItalic(!l.getItalic());
Na();return false},lc=function(){if(!n.pngsave){var g=k.notification.loadingImage;ib=window.open("data:text/html;charset=utf-8,<title>"+g+"</title><h1>"+g+"</h1>")}window.canvg?l.rasterExport():a.getScript("/assets/svg-edit-2.6/canvg/rgbcolor.js",function(){a.getScript("/assets/svg-edit-2.6/canvg/canvg.js",function(){l.rasterExport()})})},xb=function(){l.open()},Xa=function(){},Zb=function(){if(da.getUndoStackSize()>0){da.undo();$a()}},Sb=function(){if(da.getRedoStackSize()>0){da.redo();$a()}},ob=function(){if(Ca)l.groupSelectedElements();
else ja&&l.ungroupSelectedElement()},Va=function(){l.cloneSelectedElements(20,20)},Yb=function(){var g=this.id.replace("tool_align","").charAt(0);l.alignSelectedElements(g,a("#align_relative_to").val())},b=function(g){var p=l.getResolution();g=g?p.zoom*g:1;a("#zoom").val(g*100);l.setZoom(g);d();qb(true)},c=function(){!a("#tool_wireframe").hasClass("push_button_pressed")?a("#tool_wireframe").addClass("push_button_pressed").removeClass("tool_button"):a("#tool_wireframe").removeClass("push_button_pressed").addClass("tool_button");
ba.toggleClass("wireframe");if(!ec){var g=a("#wireframe_rules");g.length?g.empty():a('<style id="wireframe_rules"></style>').appendTo("head");d()}},d=function(){if(!ec){var g="#workarea.wireframe #svgcontent * { stroke-width: "+1/l.getZoom()+"px; }";a("#wireframe_rules").text(ba.hasClass("wireframe")?g:"")}},m=function(g,p){if(!Ha){Ha=true;a("#save_output_btns").toggle(!!p);a("#tool_source_back").toggle(!p);var D=Ga=l.getSvgString();a("#svg_source_textarea").val(D);a("#svg_source_editor").fadeIn();
o();a("#svg_source_textarea").focus()}};a("#svg_docprops_container, #svg_prefs_container").draggable({cancel:"button,fieldset",containment:"window"});var i=function(){if(!Pa){Pa=true;a("#image_save_opts input").val([e.img_save]);var g=l.getResolution();if(f.baseUnit!=="px"){g.w=svgedit.units.convertUnit(g.w)+f.baseUnit;g.h=svgedit.units.convertUnit(g.h)+f.baseUnit}a("#canvas_width").val(g.w);a("#canvas_height").val(g.h);a("#canvas_title").val(l.getDocumentTitle());a("#svg_docprops").show()}},z=function(){if(!Ia){Ia=
true;a("#main_menu").hide();var g=a("#bg_blocks div"),p=a.pref("bkgd_color"),D=a.pref("bkgd_url");g.each(function(){var J=a(this),M=J.css("background-color")==p;J.toggleClass("cur_background",M);M&&a("#canvas_bg_url").removeClass("cur_background")});p||g.eq(0).addClass("cur_background");D&&a("#canvas_bg_url").val(D);a("grid_snapping_step").attr("value",f.snappingStep);f.gridSnapping==true?a("#grid_snapping_on").attr("checked","checked"):a("#grid_snapping_on").removeAttr("checked");a("#svg_prefs").show()}},
o=function(){var g=a("#svg_source_container").height()-80;a("#svg_source_textarea").css("height",g)},h=function(){if(Ha){var g=function(){l.clearSelection();P();b();$a();q();Oa.fill.prep();Oa.stroke.prep()};l.setSvgString(a("#svg_source_textarea").val())?g():a.confirm(k.notification.QerrorsRevertToSource,function(p){if(!p)return false;g()});hb()}},q=function(g){g=g||l.getDocumentTitle();g=ma+(g?": "+g:"");a("title:first").text(g)},w=function(){var g=a("#canvas_title").val();q(g);l.setDocumentTitle(g);
g=a("#canvas_width");var p=g.val(),D=a("#canvas_height"),J=D.val();if(p!="fit"&&!svgedit.units.isValidUnit("width",p)){a.alert(k.notification.invalidAttrValGiven);g.parent().addClass("error");return false}g.parent().removeClass("error");if(J!="fit"&&!svgedit.units.isValidUnit("height",J)){a.alert(k.notification.invalidAttrValGiven);D.parent().addClass("error");return false}D.parent().removeClass("error");if(!l.setResolution(p,J)){a.alert(k.notification.noContentToFitTo);return false}e.img_save=a("#image_save_opts :checked").val();
a.pref("img_save",e.img_save);qb();W()},u=function(){var g=a("#bg_blocks div.cur_background").css("background-color")||"#FFF";A(g,a("#canvas_bg_url").val());g=a("#lang_select").val();g!=e.lang&&s.putLocale(g);H(a("#iconsize").val());f.gridSnapping=a("#grid_snapping_on")[0].checked;f.snappingStep=a("#grid_snapping_step").val();f.showRulers=a("#show_rulers")[0].checked;a("#rulers").toggle(f.showRulers);f.showRulers&&na();f.baseUnit=a("#base_unit").val();l.setConfig(f);qb();Y()},t=s.setIcon=function(g,
p){var D=typeof p==="string"?a.getSvgIcon(p,true):p.clone();D?a(g).empty().append(D):console.log("NOTE: Icon image missing: "+p)},C;C=function(){var g=/^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,p=document.getElementsByTagName("script")[0],D;for(D in p.style)if(g.test(D))return D.match(g)[0];if("WebkitOpacity"in p.style)return"Webkit";if("KhtmlOpacity"in p.style)return"Khtml";return""}();var E=function(g,p){C.toLowerCase();var D=["top","left","bottom","right"];g.each(function(){for(var J=a(this),M=J.outerWidth()*
(p-1),Q=J.outerHeight()*(p-1),U=0;U<4;U++){var X=D[U],ga=J.data("orig_margin-"+X);if(ga==null){ga=parseInt(J.css("margin-"+X));J.data("orig_margin-"+X,ga)}ga=ga*p;if(X==="right")ga+=M;else if(X==="bottom")ga+=Q;J.css("margin-"+X,ga)}})},H=s.setIconSize=function(g,p){if(!(g==e.size&&!p)){console.log("size",g);var D=a("#tools_top .toolset, #editor_panel > *, #history_panel > *,\t\t\t\t#main_button, #tools_left > *, #path_node_panel > *, #multiselected_panel > *,\t\t\t\t#g_panel > *, #tool_font_size > *, .tools_flyout"),
J=1;J=typeof g=="number"?g:{s:0.75,m:1,l:1.25,xl:1.5}[g];s.tool_scale=lb=J;Ab();var M=D.parents(":hidden");M.css("visibility","hidden").show();E(D,J);M.css("visibility","visible").hide();a.pref("iconsize",g);a("#iconsize").val(g);M={"#tools_top":{left:50,height:72},"#tools_left":{width:31,top:74},"div#workarea":{left:38,top:74}};D=a("#tool_size_rules");if(D.length)D.empty();else D=a('<style id="tool_size_rules"></style>').appendTo("head");if(g!="m"){var Q="";a.each(M,function(U,X){U="#svg_editor "+
U.replace(/,/g,", #svg_editor");Q+=U+"{";a.each(X,function(ga,ea){if(typeof ea==="number")var ka=ea*J+"px";else if(ea[g]||ea.all)ka=ea[g]||ea.all;Q+=ga+":"+ka+";"});Q+="}"});M="-"+C.toLowerCase()+"-";Q+="#tools_top .toolset, #editor_panel > *, #history_panel > *,\t\t\t\t#main_button, #tools_left > *, #path_node_panel > *, #multiselected_panel > *,\t\t\t\t#g_panel > *, #tool_font_size > *, .tools_flyout{"+M+"transform: scale("+J+");} #svg_editor div.toolset .toolset {"+M+"transform: scale(1); margin: 1px !important;} #svg_editor .ui-slider {"+
M+"transform: scale("+1/J+");}";D.text(Q)}Ab()}},I=function(){a("#dialog_box").hide();if(!Ha&&!Pa&&!Ia)ua&&l.leaveContext();else{if(Ha)Ga!==a("#svg_source_textarea").val()?a.confirm(k.notification.QignoreSourceChanges,function(g){g&&P()}):P();else if(Pa)W();else Ia&&Y();T()}},P=function(){a("#svg_source_editor").hide();Ha=false;a("#svg_source_textarea").blur()},W=function(){a("#svg_docprops").hide();a("#canvas_width,#canvas_height").removeAttr("disabled");a("#resolution")[0].selectedIndex=0;a("#image_save_opts input").val([e.img_save]);
Pa=false},Y=function(){a("#svg_prefs").hide();Ia=false},R={width:a(window).width(),height:a(window).height()},T=a.noop,V;svgedit.browser.isIE()&&function(){T=function(){if(ba[0].scrollLeft===0&&ba[0].scrollTop===0){ba[0].scrollLeft=V.left;ba[0].scrollTop=V.top}};V={left:ba[0].scrollLeft,top:ba[0].scrollTop};a(window).resize(T);svgEditor.ready(function(){setTimeout(function(){T()},500)});ba.scroll(function(){V={left:ba[0].scrollLeft,top:ba[0].scrollTop}})}();a(window).resize(function(){Ha&&o();a.each(R,
function(g,p){var D=a(window)[g]();ba[0]["scroll"+(g==="width"?"Left":"Top")]-=(D-p)/2;R[g]=D})});(function(){ba.scroll(function(){if(a("#ruler_x").length!=0)a("#ruler_x")[0].scrollLeft=ba[0].scrollLeft;if(a("#ruler_y").length!=0)a("#ruler_y")[0].scrollTop=ba[0].scrollTop})})();a("#url_notice").click(function(){a.alert(this.title)});a("#change_image_url").click(O);(function(){var g=["clear","open","save","source","delete","delete_multi","paste","clone","clone_multi","move_top","move_bottom"],p="";
a.each(g,function(D,J){p+="#tool_"+J+(D==g.length-1?",":"")});a(p).mousedown(function(){a(this).addClass("tool_button_current")}).bind("mousedown mouseout",function(){a(this).removeClass("tool_button_current")});a("#tool_undo, #tool_redo").mousedown(function(){a(this).hasClass("disabled")||a(this).addClass("tool_button_current")}).bind("mousedown mouseout",function(){a(this).removeClass("tool_button_current")})})();if(ca&&!window.opera){ca=["tool_clear","tool_save","tool_source","tool_undo","tool_redo",
"tool_clone"];for(var aa=ca.length;aa--;){var Ja=document.getElementById(ca[aa]);if(Ja!=null){var Za=Ja.title,mb=Za.indexOf("Ctrl+");Ja.title=[Za.substr(0,mb),"Cmd+",Za.substr(mb+5)].join("")}}}var eb=function(g){var p=g.attr("id")=="stroke_color"?"stroke":"fill",D=Oa[p].paint,J=p=="stroke"?"Pick a Stroke Paint and Opacity":"Pick a Fill Paint and Opacity";g=g.offset();a("#color_picker").draggable({cancel:".jGraduate_tabs, .jGraduate_colPick, .jGraduate_gradPick, .jPicker",containment:"window"}).css(f.colorPickerCSS||
{left:g.left-140,bottom:40}).jGraduate({paint:D,window:{pickerTitle:J},images:{clientPath:f.jGraduatePath},newstop:"inverse"},function(M){D=new a.jGraduate.Paint(M);Oa[p].setPaint(D);l.setPaint(p,D);a("#color_picker").hide()},function(){a("#color_picker").hide()})},fb=function(){var g=l.getColor("fill")=="none",p=l.getColor("stroke")=="none",D=["#tool_fhpath","#tool_line"],J=["#tools_rect .tool_button","#tools_ellipse .tool_button","#tool_text","#tool_path"];if(p)for(var M in D){var Q=D[M];a(Q).hasClass("tool_button_current")&&
Cb();a(Q).addClass("disabled")}else for(M in D){Q=D[M];a(Q).removeClass("disabled")}if(p&&g)for(M in J){Q=J[M];a(Q).hasClass("tool_button_current")&&Cb();a(Q).addClass("disabled")}else for(M in J){Q=J[M];a(Q).removeClass("disabled")}l.runExtensions("toolButtonStateUpdate",{nofill:g,nostroke:p});a(".tools_flyout").each(function(){var U=a("#"+this.id+"_show"),X=false;a(this).children().each(function(){a(this).hasClass("disabled")||(X=true)});U.toggleClass("disabled",!X)});Ua()};ca=function(g,p){var D=
f[p==="fill"?"initFill":"initStroke"],J=(new DOMParser).parseFromString('<svg xmlns="http://www.w3.org/2000/svg"><rect width="16.5" height="16.5"\t\t\t\t\tfill="#'+D.color+'" opacity="'+D.opacity+'"/>\t\t\t\t\t<defs><linearGradient id="gradbox_"/></defs></svg>',"text/xml").documentElement;J=a(g)[0].appendChild(document.importNode(J,true));J.setAttribute("width",16.5);this.rect=J.firstChild;this.defs=J.getElementsByTagName("defs")[0];this.grad=this.defs.firstChild;this.paint=new a.jGraduate.Paint({solidColor:D.color});
this.type=p;this.setPaint=function(M,Q){this.paint=M;var U="none",X=M.type,ga=M.alpha/100;switch(X){case "solidColor":U=M[X]!="none"?"#"+M[X]:M[X];break;case "linearGradient":case "radialGradient":this.defs.removeChild(this.grad);this.grad=this.defs.appendChild(M[X]);U="url(#"+(this.grad.id="gradbox_"+this.type)+")"}this.rect.setAttribute("fill",U);this.rect.setAttribute("opacity",ga);if(Q){l.setColor(this.type,paintColor,true);l.setPaintOpacity(this.type,paintOpacity,true)}};this.update=function(M){if(ja){var Q=
this.type;switch(ja.tagName){case "use":case "image":case "foreignObject":return;case "g":case "a":for(var U=null,X=ja.getElementsByTagName("*"),ga=0,ea=X.length;ga<ea;ga++){var ka=X[ga].getAttribute(Q);if(ga===0)U=ka;else if(U!==ka){U=null;break}}if(U===null){X=null;return}X=U;U=1;break;default:U=parseFloat(ja.getAttribute(Q+"-opacity"));if(isNaN(U))U=1;X=Q==="fill"?"black":"none";X=ja.getAttribute(Q)||X}if(M){l.setColor(Q,X,true);l.setPaintOpacity(Q,U,true)}U*=100;this.setPaint(Jb(X,U,Q))}};this.prep=
function(){switch(this.paint.type){case "linearGradient":case "radialGradient":var M=new a.jGraduate.Paint({copy:this.paint});l.setPaint(p,M)}}};Oa.fill=new ca("#fill_color","fill");Oa.stroke=new ca("#stroke_color","stroke");a("#stroke_width").val(f.initStroke.width);a("#group_opacity").val(f.initOpacity*100);ca=Oa.fill.rect.cloneNode(false);ca.setAttribute("style","vector-effect:non-scaling-stroke");var ec=ca.style.vectorEffect==="non-scaling-stroke";ca.removeAttribute("style");ca=Oa.fill.rect.ownerDocument.createElementNS("http://www.w3.org/2000/svg",
"feGaussianBlur");typeof ca.stdDeviationX==="undefined"&&a("#tool_blur").hide();a(ca).remove();(function(){var g="-"+C.toLowerCase()+"-zoom-",p=g+"in";ba.css("cursor",p);if(ba.css("cursor")===p){Tb=p;bb=g+"out"}ba.css("cursor","auto")})();setTimeout(function(){l.embedImage("/assets/svg-edit-2.6/images/logo.png",function(g){if(!g){a("#image_save_opts [value=embed]").attr("disabled","disabled");a("#image_save_opts input").val(["ref"]);e.img_save="ref";a("#image_opt_embed").css("color","#666").attr("title",k.notification.featNotSupported)}})},
1E3);a("#fill_color, #tool_fill .icon_label").click(function(){eb(a("#fill_color"));fb()});a("#stroke_color, #tool_stroke .icon_label").click(function(){eb(a("#stroke_color"));fb()});a("#group_opacityLabel").click(function(){a("#opacity_dropdown button").mousedown();a(window).mouseup()});a("#zoomLabel").click(function(){a("#zoom_dropdown button").mousedown();a(window).mouseup()});a("#tool_move_top").mousedown(function(g){a("#tools_stacking").show();g.preventDefault()});a(".layer_button").mousedown(function(){a(this).addClass("layer_buttonpressed")}).mouseout(function(){a(this).removeClass("layer_buttonpressed")}).mouseup(function(){a(this).removeClass("layer_buttonpressed")});
a(".push_button").mousedown(function(){a(this).hasClass("disabled")||a(this).addClass("push_button_pressed").removeClass("push_button")}).mouseout(function(){a(this).removeClass("push_button_pressed").addClass("push_button")}).mouseup(function(){a(this).removeClass("push_button_pressed").addClass("push_button")});a("#layer_new").click(function(){var g=l.getCurrentDrawing().getNumLayers();do var p=k.layers.layer+" "+ ++g;while(l.getCurrentDrawing().hasLayer(p));a.prompt(k.notification.enterUniqueLayerName,
p,function(D){if(D)if(l.getCurrentDrawing().hasLayer(D))a.alert(k.notification.dupeLayerName);else{l.createLayer(D);Na();$a()}})});a("#layer_delete").click(Z);a("#layer_up").click(function(){L(-1)});a("#layer_down").click(function(){L(1)});a("#layer_rename").click(function(){a("#layerlist tr.layersel").prevAll();var g=a("#layerlist tr.layersel td.layername").text();a.prompt(k.notification.enterNewLayerName,"",function(p){if(p)if(g==p||l.getCurrentDrawing().hasLayer(p))a.alert(k.notification.layerHasThatName);
else{l.renameCurrentLayer(p);$a()}})});var wb=-1,ic=false,nc=false,pc=function(g){if(nc)if(wb!=-1){ic=true;g=wb-g.pageX;var p=a("#sidepanels"),D=parseInt(p.css("width"));if(D+g>300)g=300-D;else if(D+g<2)g=2-D;if(g!=0){wb-=g;D=a("#layerpanel");ba.css("right",parseInt(ba.css("right"))+g);p.css("width",parseInt(p.css("width"))+g);D.css("width",parseInt(D.css("width"))+g);p=a("#ruler_x");p.css("right",parseInt(p.css("right"))+g)}}};a("#sidepanel_handle").mousedown(function(g){wb=g.pageX;a(window).mousemove(pc);
nc=false;setTimeout(function(){nc=true},20)}).mouseup(function(){ic||oc();wb=-1;ic=false});a(window).mouseup(function(){wb=-1;ic=false;a("#svg_editor").unbind("mousemove",pc)});var oc=function(g){var p=parseInt(a("#sidepanels").css("width"));g=(p>2||g?2:150)-p;p=a("#sidepanels");var D=a("#layerpanel"),J=a("#ruler_x");ba.css("right",parseInt(ba.css("right"))+g);p.css("width",parseInt(p.css("width"))+g);D.css("width",parseInt(D.css("width"))+g);J.css("right",parseInt(J.css("right"))+g)},qc=function(g){for(var p=
Array(l.getCurrentDrawing().getNumLayers()),D=0;D<p.length;++D)p[D]=l.getCurrentDrawing().getLayerName(D);if(g)for(D=0;D<p.length;++D)p[D]!=g&&l.getCurrentDrawing().setLayerOpacity(p[D],0.5);else for(D=0;D<p.length;++D)l.getCurrentDrawing().setLayerOpacity(p[D],1)},$a=function(){var g=a("#layerlist tbody"),p=a("#selLayerNames");g.empty();p.empty();for(var D=l.getCurrentDrawing().getCurrentLayerName(),J=l.getCurrentDrawing().getNumLayers(),M=a.getSvgIcon("eye");J--;){var Q=l.getCurrentDrawing().getLayerName(J),
U='<tr class="layer';if(Q==D)U+=" layersel";U+='">';U+=l.getCurrentDrawing().getLayerVisibility(Q)?'<td class="layervis"/><td class="layername" >'+Q+"</td></tr>":'<td class="layervis layerinvis"/><td class="layername" >'+Q+"</td></tr>";g.append(U);p.append('<option value="'+Q+'">'+Q+"</option>")}if(M!==undefined){M.clone();a("td.layervis",g).append(M.clone());a.resizeSvgIcons({"td.layervis .svg_icon":14})}a("#layerlist td.layername").mouseup(function(X){a("#layerlist tr.layer").removeClass("layersel");
a(this.parentNode).addClass("layersel");l.setCurrentLayer(this.textContent);X.preventDefault()}).mouseover(function(){a(this).css({"font-style":"italic",color:"blue"});qc(this.textContent)}).mouseout(function(){a(this).css({"font-style":"normal",color:"black"});qc()});a("#layerlist td.layervis").click(function(){var X=a(this.parentNode).prevAll().length;X=a("#layerlist tr.layer:eq("+X+") td.layername").text();var ga=a(this).hasClass("layerinvis");l.setLayerVisibility(X,ga);ga?a(this).removeClass("layerinvis"):
a(this).addClass("layerinvis")});for(p=5-a("#layerlist tr.layer").size();p-- >0;)g.append('<tr><td style="color:white">_</td><td/></tr>')};$a();a(window).bind("load resize",function(){ba.css("line-height",ba.height()+"px")});a("#resolution").change(function(){var g=a("#canvas_width,#canvas_height");if(this.selectedIndex)if(this.value=="content")g.val("fit").attr("disabled","disabled");else{var p=this.value.split("x");a("#canvas_width").val(p[0]);a("#canvas_height").val(p[1]);g.removeAttr("disabled")}else a("#canvas_width").val()==
"fit"&&g.removeAttr("disabled").val(100)});a("input,select").attr("autocomplete","off");var mc=function(){var g=[{sel:"#tool_select",fn:Cb,evt:"click",key:["V",true]},{sel:"#tool_fhpath",fn:Vb,evt:"click",key:["Q",true]},{sel:"#tool_line",fn:Ub,evt:"click",key:["L",true]},{sel:"#tool_rect",fn:Eb,evt:"mouseup",key:["R",true],parent:"#tools_rect",icon:"rect"},{sel:"#tool_square",fn:Db,evt:"mouseup",parent:"#tools_rect",icon:"square"},{sel:"#tool_fhrect",fn:Wb,evt:"mouseup",parent:"#tools_rect",icon:"fh_rect"},
{sel:"#tool_ellipse",fn:jc,evt:"mouseup",key:["E",true],parent:"#tools_ellipse",icon:"ellipse"},{sel:"#tool_circle",fn:Lb,evt:"mouseup",parent:"#tools_ellipse",icon:"circle"},{sel:"#tool_fhellipse",fn:cc,evt:"mouseup",parent:"#tools_ellipse",icon:"fh_ellipse"},{sel:"#tool_path",fn:rb,evt:"click",key:["P",true]},{sel:"#tool_text",fn:ha,evt:"click",key:["T",true]},{sel:"#tool_image",fn:vb,evt:"mouseup"},{sel:"#tool_zoom",fn:db,evt:"mouseup",key:["Z",true]},{sel:"#tool_clear",fn:gc,evt:"mouseup",key:["N",
true]},{sel:"#tool_save",fn:function(){Ha?h():l.save({images:e.img_save,round_digits:6})},evt:"mouseup",key:["S",true]},{sel:"#tool_export",fn:lc,evt:"mouseup"},{sel:"#tool_open",fn:xb,evt:"mouseup",key:["O",true]},{sel:"#tool_import",fn:Xa,evt:"mouseup"},{sel:"#tool_source",fn:m,evt:"click",key:["U",true]},{sel:"#tool_wireframe",fn:c,evt:"click",key:["F",true]},{sel:"#tool_source_cancel,#svg_source_overlay,#tool_docprops_cancel,#tool_prefs_cancel",fn:I,evt:"click",key:["esc",false,false],hidekey:true},
{sel:"#tool_source_save",fn:h,evt:"click"},{sel:"#tool_docprops_save",fn:w,evt:"click"},{sel:"#tool_docprops",fn:i,evt:"mouseup"},{sel:"#tool_prefs_save",fn:u,evt:"click"},{sel:"#tool_prefs_option",fn:function(){z();return false},evt:"mouseup"},{sel:"#tool_delete,#tool_delete_multi",fn:Nb,evt:"click",key:["del/backspace",true]},{sel:"#tool_reorient",fn:za,evt:"click"},{sel:"#tool_node_link",fn:Pb,evt:"click"},{sel:"#tool_node_clone",fn:Mb,evt:"click"},{sel:"#tool_node_delete",fn:Ra,evt:"click"},{sel:"#tool_openclose_path",
fn:fc,evt:"click"},{sel:"#tool_add_subpath",fn:qa,evt:"click"},{sel:"#tool_move_top",fn:Fb,evt:"click",key:"ctrl+shift+]"},{sel:"#tool_move_bottom",fn:dc,evt:"click",key:"ctrl+shift+["},{sel:"#tool_topath",fn:nb,evt:"click"},{sel:"#tool_make_link,#tool_make_link_multi",fn:gb,evt:"click"},{sel:"#tool_undo",fn:Zb,evt:"click",key:["Z",true]},{sel:"#tool_redo",fn:Sb,evt:"click",key:["Y",true]},{sel:"#tool_clone,#tool_clone_multi",fn:Va,evt:"click",key:["D",true]},{sel:"#tool_group",fn:ob,evt:"click",
key:["G",true]},{sel:"#tool_ungroup",fn:ob,evt:"click"},{sel:"#tool_unlink_use",fn:ob,evt:"click"},{sel:"[id^=tool_align]",fn:Yb,evt:"click"},{sel:"#tool_bold",fn:zb,evt:"mousedown"},{sel:"#tool_italic",fn:Qb,evt:"mousedown"},{sel:"#sidepanel_handle",fn:oc,key:["X"]},{sel:"#copy_save_done",fn:I,evt:"click"},{key:"ctrl+left",fn:function(){yb(0,1)}},{key:"ctrl+right",fn:function(){yb(1,1)}},{key:"ctrl+shift+left",fn:function(){yb(0,5)}},{key:"ctrl+shift+right",fn:function(){yb(1,5)}},{key:"shift+O",
fn:Gb},{key:"shift+P",fn:Rb},{key:[pa+"up",true],fn:function(){b(2)}},{key:[pa+"down",true],fn:function(){b(0.5)}},{key:[pa+"]",true],fn:function(){Ta("Up")}},{key:[pa+"[",true],fn:function(){Ta("Down")}},{key:["up",true],fn:function(){Wa(0,-1)}},{key:["down",true],fn:function(){Wa(0,1)}},{key:["left",true],fn:function(){Wa(-1,0)}},{key:["right",true],fn:function(){Wa(1,0)}},{key:"shift+up",fn:function(){Wa(0,-10)}},{key:"shift+down",fn:function(){Wa(0,10)}},{key:"shift+left",fn:function(){Wa(-10,
0)}},{key:"shift+right",fn:function(){Wa(10,0)}},{key:["alt+up",true],fn:function(){l.cloneSelectedElements(0,-1)}},{key:["alt+down",true],fn:function(){l.cloneSelectedElements(0,1)}},{key:["alt+left",true],fn:function(){l.cloneSelectedElements(-1,0)}},{key:["alt+right",true],fn:function(){l.cloneSelectedElements(1,0)}},{key:["alt+shift+up",true],fn:function(){l.cloneSelectedElements(0,-10)}},{key:["alt+shift+down",true],fn:function(){l.cloneSelectedElements(0,10)}},{key:["alt+shift+left",true],fn:function(){l.cloneSelectedElements(-10,
0)}},{key:["alt+shift+right",true],fn:function(){l.cloneSelectedElements(10,0)}},{key:"A",fn:function(){l.selectAllInCurrentLayer()}},{key:pa+"z",fn:Zb},{key:pa+"shift+z",fn:Sb},{key:pa+"y",fn:Sb},{key:pa+"x",fn:Ob},{key:pa+"c",fn:Xb},{key:pa+"v",fn:kc}],p={"4/Shift+4":"#tools_rect_show","5/Shift+5":"#tools_ellipse_show"};return{setAll:function(){var D={};a.each(g,function(J,M){if(M.sel){var Q=a(M.sel);if(Q.length==0)return true;if(M.evt){if(svgedit.browser.isTouch()&&M.evt==="click")M.evt="mousedown";
Q[M.evt](M.fn)}if(M.parent&&a(M.parent+"_show").length!=0){var U=a(M.parent);U.length||(U=Hb(M.parent.substr(1)));U.append(Q);a.isArray(D[M.parent])||(D[M.parent]=[]);D[M.parent].push(M)}}if(M.key){var X=M.fn,ga=false;if(a.isArray(M.key)){U=M.key[0];if(M.key.length>1)ga=M.key[1]}else U=M.key;U+="";a.each(U.split("/"),function(ka,ya){a(document).bind("keydown",ya,function(Da){X();ga&&Da.preventDefault();return false})});if(M.sel&&!M.hidekey&&Q.attr("title")){var ea=Q.attr("title").split("[")[0]+" ("+
U+")";p[U]=M.sel;Q.parents("#main_menu").length||Q.attr("title",ea)}}});ub(D);a(".attr_changer, #image_url").bind("keydown","return",function(J){a(this).change();J.preventDefault()});a(window).bind("keydown","tab",function(J){if(va==="canvas"){J.preventDefault();Rb()}}).bind("keydown","shift+tab",function(J){if(va==="canvas"){J.preventDefault();Gb()}});a("#tool_zoom").dblclick(Fa)},setTitles:function(){a.each(p,function(D,J){var M=a(J).parents("#main_menu").length;a(J).each(function(){var Q=M?a(this).text().split(" [")[0]:
this.title.split(" [")[0],U="";a.each(D.split("/"),function(X,ga){var ea=ga.split("+"),ka="";if(ea.length>1){ka=ea[0]+"+";ga=ea[1]}U+=(X?"/":"")+ka+(k["key_"+ga]||ga)});if(M)this.lastChild.textContent=Q+" ["+U+"]";else this.title=Q+" ["+U+"]"})})},getButtonData:function(D){var J;a.each(g,function(M,Q){if(Q.sel===D)J=Q});return J}}}();mc.setAll();s.ready(function(){var g=f.initTool,p=a("#tools_left, #svg_editor .tools_flyout"),D=p.find("#tool_"+g);g=p.find("#"+g);(D.length?D:g.length?g:a("#tool_select")).click().mouseup();
f.wireframe&&a("#tool_wireframe").click();f.showlayers&&oc();a("#rulers").toggle(!!f.showRulers);if(f.showRulers)a("#show_rulers")[0].checked=true;if(f.gridSnapping)a("#grid_snapping_on")[0].checked=true;f.baseUnit&&a("#base_unit").val(f.baseUnit);f.snappingStep&&a("#grid_snapping_step").val(f.snappingStep)});a("#rect_rx").SpinButton({min:0,max:1E3,step:1,callback:function(g){l.setRectRadius(g.value)}});a("#stroke_width").SpinButton({min:0,max:99,step:1,smallStep:0.1,callback:function(g){var p=g.value;
if(p==0&&ja&&["line","polyline"].indexOf(ja.nodeName)>=0)p=g.value=1;l.setStrokeWidth(p)}});a("#angle").SpinButton({min:-180,max:180,step:5,callback:function(g){l.setRotationAngle(g.value);a("#tool_reorient").toggleClass("disabled",g.value==0)}});a("#font_size").SpinButton({step:1,min:0.001,stepfunc:function(g,p){var D=g.value-0,J=D+p,M=J>=D;if(p===0)return D;return D>=24?M?Math.round(D*1.1):Math.round(D/1.1):D<=1?M?D*2:D/2:J},callback:function(g){l.setFontSize(g.value)}});a("#group_opacity").SpinButton({step:5,
min:0,max:100,callback:cb});a("#blur").SpinButton({step:0.1,min:0,max:10,callback:pb});a("#zoom").SpinButton({min:0.001,max:1E4,step:50,stepfunc:function(g,p){var D=g.value-0;if(D===0)return 100;var J=D+p;if(p===0)return D;return D>=100?J:J>=D?D*2:D/2},callback:sa}).val(l.getZoom()*100);a("#workarea").contextMenu({menu:"cmenu_canvas",inSpeed:0},function(g){switch(g){case "delete":Nb();break;case "cut":Ob();break;case "copy":Xb();break;case "paste":l.pasteElements();break;case "paste_in_place":l.pasteElements("in_place");
break;case "group":l.groupSelectedElements();break;case "ungroup":l.ungroupSelectedElement();break;case "move_front":Fb();break;case "move_up":Ta("Up");break;case "move_down":Ta("Down");break;case "move_back":dc();break;default:svgedit.contextmenu&&svgedit.contextmenu.hasCustomHandler(g)&&svgedit.contextmenu.getCustomHandler(g).call()}l.clipBoard.length&&sb.enableContextMenuItems("#paste,#paste_in_place")});ca=function(g){switch(g){case "dupe":N();break;case "delete":Z();break;case "merge_down":if(a("#layerlist tr.layersel").index()!=
l.getCurrentDrawing().getNumLayers()-1){l.mergeLayer();Na();$a()}break;case "merge_all":l.mergeAllLayers();Na();$a()}};a("#layerlist").contextMenu({menu:"cmenu_layers",inSpeed:0},ca);a("#layer_moreopts").contextMenu({menu:"cmenu_layers",inSpeed:0,allowLeft:true},ca);a(".contextMenu li").mousedown(function(g){g.preventDefault()});a("#cmenu_canvas li").disableContextMenu();sb.enableContextMenuItems("#delete,#cut,#copy");window.onbeforeunload=function(){if("localStorage"in window){window.localStorage.setItem("svgedit-"+
s.curConfig.canvasName,l.getSvgString());s.show_save_warning=false}if(da.getUndoStackSize()===0)s.show_save_warning=false;if(!f.no_save_warning&&s.show_save_warning)return k.notification.unsavedChanges};s.openPrep=function(g){a("#main_menu").hide();da.getUndoStackSize()===0?g(true):a.confirm(k.notification.QwantToOpen,g)};if(window.FileReader){ca=function(g){g.stopPropagation();g.preventDefault();a("#workarea").removeAttr("style");a("#main_menu").hide();var p=null;if(p=g.type=="drop"?g.dataTransfer.files[0]:
this.files[0])if(p.type.indexOf("image")!=-1)if(p.type.indexOf("svg")!=-1){g=new FileReader;g.onloadend=function(D){l.importSvgString(D.target.result,true);l.ungroupSelectedElement();l.ungroupSelectedElement();l.groupSelectedElements();l.alignSelectedElements("m","page");l.alignSelectedElements("c","page")};g.readAsText(p)}else{g=new FileReader;g.onloadend=function(D){insertNewImage=function(U,X){var ga=l.addSvgElementFromJson({element:"image",attr:{x:0,y:0,width:U,height:X,id:l.getNextId(),style:"pointer-events:inherit"}});
l.setHref(ga,D.target.result);l.selectOnly([ga]);l.alignSelectedElements("m","page");l.alignSelectedElements("c","page");Na()};var J=100,M=100,Q=new Image;Q.src=D.target.result;Q.style.opacity=0;Q.onload=function(){J=Q.offsetWidth;M=Q.offsetHeight;insertNewImage(J,M)}};g.readAsDataURL(p)}};ba[0].addEventListener("dragenter",function(g){g.stopPropagation();g.preventDefault()},false);ba[0].addEventListener("dragover",function(g){g.stopPropagation();g.preventDefault()},false);ba[0].addEventListener("dragleave",
function(g){g.stopPropagation();g.preventDefault()},false);ba[0].addEventListener("drop",ca,false);aa=a('<input type="file">').change(function(){var g=this;s.openPrep(function(p){if(p){l.clear();if(g.files.length==1){p=new FileReader;p.onloadend=function(D){K(D.target.result);qb()};p.readAsText(g.files[0])}}})});a("#tool_open").show().prepend(aa);ca=a('<input type="file">').change(ca);a("#tool_import").show().prepend(ca)}var qb=s.updateCanvas=function(g,p){var D=ba.width(),J=ba.height(),M=D,Q=J,U=
l.getZoom(),X=a("#svgcanvas"),ga={x:ba[0].scrollLeft+M/2,y:ba[0].scrollTop+Q/2},ea=f.canvas_expansion;D=Math.max(M,l.contentW*U*ea);J=Math.max(Q,l.contentH*U*ea);D==M&&J==Q?ba.css("overflow","hidden"):ba.css("overflow","scroll");ea=X.height()/2;var ka=X.width()/2;X.width(D).height(J);var ya=J/2,Da=D/2,S=l.updateCanvas(D,J),Aa=Da/ka;D=D/2-M/2;J=J/2-Q/2;if(p){p.x+=S.x;p.y+=S.y}else p={x:Da+(ga.x-ka)*Aa,y:ya+(ga.y-ea)*Aa};if(g)if(l.contentW>ba.width()){ba[0].scrollLeft=S.x-10;ba[0].scrollTop=S.y-10}else{ba[0].scrollLeft=
D;ba[0].scrollTop=J}else{ba[0].scrollLeft=p.x-M/2;ba[0].scrollTop=p.y-Q/2}if(f.showRulers){na(X,U);ba.scroll()}},$b=[];for(aa=0.1;aa<1E5;aa*=10){$b.push(1*aa);$b.push(2*aa);$b.push(5*aa)}qb(true);try{var rc=function(g){if(window.JSON&&JSON.stringify)return JSON.stringify(g);var p=arguments.callee;if(typeof g=="boolean"||typeof g=="number")return g+"";else if(typeof g=="string")return'"'+g.replace(/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
function(M){return"\\u"+("0000"+M.charCodeAt(0).toString(16)).slice(-4)})+'"';else if(g.length){for(var D=0;D<g.length;D++)g[D]=p(g[D]);return"["+g.join(",")+"]"}else{D=[];for(var J in g)D.push(p(J)+":"+p(g[J]));return"{"+D.join(",")+"}"}};window.addEventListener("message",function(g){var p=parseInt(g.data.substr(0,g.data.indexOf(";")));try{g.source.postMessage("SVGe"+p+";"+rc(eval(g.data)),"*")}catch(D){g.source.postMessage("SVGe"+p+";error:"+D.message,"*")}},false)}catch(sc){window.embed_error=
sc}a(function(){window.svgCanvas=l;l.ready=svgEditor.ready});s.setLang=function(g,p){a.pref("lang",g);a("#lang_select").val(g);if(p){var D=a("#layerlist tr.layersel td.layername").text()==k.common.layer+" 1";a.extend(k,p);l.setUiStrings(p);mc.setTitles();if(D){l.renameCurrentLayer(k.common.layer+" 1");$a()}l.runExtensions("langChanged",g);Ib();a.each({"#stroke_color":"#tool_stroke .icon_label, #tool_stroke .color_block","#fill_color":"#tool_fill label, #tool_fill .color_block","#linejoin_miter":"#cur_linejoin",
"#linecap_butt":"#cur_linecap"},function(J,M){a(M).attr("title",a(J)[0].title)});a("#multiselected_panel div[id^=tool_align]").each(function(){a("#tool_pos"+this.id.substr(10))[0].title=this.title})}}};var F=[];s.ready=function(B){v?B():F.push(B)};s.runCallbacks=function(){a.each(F,function(){this()});v=true};s.loadFromString=function(B){s.ready(function(){K(B)})};s.disableUI=function(){};s.loadFromURL=function(B,A){A||(A={});var O=A.cache,Z=A.callback;s.ready(function(){a.ajax({url:B,dataType:"text",
cache:!!O,success:function(N){K(N,Z)},error:function(N,L,na){N.status!=404&&N.responseText?K(N.responseText,Z):a.alert(k.notification.URLloadFail+": \n"+na+"",Z)}})})};s.loadFromDataURI=function(B){s.ready(function(){var A=B.substring(26);K(svgedit.utilities.decode64(A))})};s.addExtension=function(){var B=arguments;a(function(){l&&l.addExtension.apply(this,B)})};return s}(jQuery);$(svgEditor.init)})();svgedit=svgedit||{};
(function(){var a=this;if(!svgedit.contextmenu)svgedit.contextmenu={};a.contextMenuExtensions={};svgEditor.ready(function(){for(menuItem in contextMenuExtensions){var K=contextMenuExtensions[menuItem];Object.keys(a.contextMenuExtensions).length==0&&$("#cmenu_canvas").append("<li class='separator'>");var l=K.shortcut||"";$("#cmenu_canvas").append("<li class='disabled'><a href='#"+K.id+"'>"+K.label+"<span class='shortcut'>"+l+"</span></a></li>")}});svgedit.contextmenu.resetCustomMenus=function(){a.contextMenuExtensions=
{}};svgedit.contextmenu.add=function(K){if(K&&K.id&&K.label&&K.action&&typeof K.action=="function")if(K.id in a.contextMenuExtensions)console.error('Cannot add extension "'+K.id+'", an extension by that name already exists"');else{console.log("Registed contextmenu item: {id:"+K.id+", label:"+K.label+"}");a.contextMenuExtensions[K.id]=K}else console.error("Menu items must be defined and have at least properties: id, label, action, where action must be a function")};svgedit.contextmenu.hasCustomHandler=
function(K){return a.contextMenuExtensions[K]&&true};svgedit.contextmenu.getCustomHandler=function(K){return a.contextMenuExtensions[K].action}})();var svgEditor=function(a,K){function l(v,G,e){var f=a("#svg_editor").parent(),k;for(k in G){var n=G[k];n||console.log(k);if(e)k="#"+k;if(f.find(k).length){var F=f.find(k)[0];switch(v){case "content":for(var B=0;B<F.childNodes.length;B++){var A=F.childNodes[B];if(A.nodeType===3&&A.textContent.replace(/\s/g,"")){A.textContent=n;break}}break;case "title":F.title=n}}else console.log("Missing: "+k)}}var s;K.readLang=function(v){var G=K.canvas.runExtensions("addlangData",s,true);a.each(G,function(Z,N){if(N.data)v=
a.merge(v,N.data)});if(v.tools){var e=v.tools;G=v.properties;var f=v.config,k=v.layers,n=v.common,F=v.ui;l("content",{copyrightLabel:v.misc.powered_by,curve_segments:G.curve_segments,fitToContent:e.fitToContent,fit_to_all:e.fit_to_all,fit_to_canvas:e.fit_to_canvas,fit_to_layer_content:e.fit_to_layer_content,fit_to_sel:e.fit_to_sel,icon_large:f.icon_large,icon_medium:f.icon_medium,icon_small:f.icon_small,icon_xlarge:f.icon_xlarge,image_opt_embed:f.image_opt_embed,image_opt_ref:f.image_opt_ref,includedImages:f.included_images,
largest_object:e.largest_object,layersLabel:k.layers,page:e.page,relativeToLabel:e.relativeTo,selLayerLabel:k.move_elems_to,selectedPredefined:f.select_predefined,selected_objects:e.selected_objects,smallest_object:e.smallest_object,straight_segments:G.straight_segments,svginfo_bg_url:f.editor_img_url+":",svginfo_bg_note:f.editor_bg_note,svginfo_change_background:f.background,svginfo_dim:f.doc_dims,svginfo_editor_prefs:f.editor_prefs,svginfo_height:n.height,svginfo_icons:f.icon_size,svginfo_image_props:f.image_props,
svginfo_lang:f.language,svginfo_title:f.doc_title,svginfo_width:n.width,tool_docprops_cancel:n.cancel,tool_docprops_save:n.ok,tool_source_cancel:n.cancel,tool_source_save:n.ok,tool_prefs_cancel:n.cancel,tool_prefs_save:n.ok,sidepanel_handle:k.layers.split("").join(" "),tool_clear:e.new_doc,tool_docprops:e.docprops,tool_export:e.export_png,tool_import:e.import_doc,tool_imagelib:e.imagelib,tool_open:e.open_doc,tool_save:e.save_doc,svginfo_units_rulers:f.units_and_rulers,svginfo_rulers_onoff:f.show_rulers,
svginfo_unit:f.base_unit,svginfo_grid_settings:f.grid,svginfo_snap_onoff:f.snapping_onoff,svginfo_snap_step:f.snapping_stepsize},true);var B={},A;for(A in v.shape_cats)B['#shape_cats [data-cat="'+A+'"]']=v.shape_cats[A];setTimeout(function(){l("content",B)},2E3);var O={};a.each(["cut","copy","paste","paste_in_place","delete","group","ungroup","move_front","move_up","move_down","move_back"],function(){O['#cmenu_canvas a[href="#'+this+'"]']=e[this]});a.each(["dupe","merge_down","merge_all"],function(){O['#cmenu_layers a[href="#'+
this+'"]']=k[this]});O['#cmenu_layers a[href="#delete"]']=k.del;l("content",O);l("title",{align_relative_to:e.align_relative_to,circle_cx:G.circle_cx,circle_cy:G.circle_cy,circle_r:G.circle_r,cornerRadiusLabel:G.corner_radius,ellipse_cx:G.ellipse_cx,ellipse_cy:G.ellipse_cy,ellipse_rx:G.ellipse_rx,ellipse_ry:G.ellipse_ry,fill_color:G.fill_color,font_family:G.font_family,idLabel:G.id,image_height:G.image_height,image_url:G.image_url,image_width:G.image_width,layer_delete:k.del,layer_down:k.move_down,
layer_new:k["new"],layer_rename:k.rename,layer_moreopts:n.more_opts,layer_up:k.move_up,line_x1:G.line_x1,line_x2:G.line_x2,line_y1:G.line_y1,line_y2:G.line_y2,linecap_butt:G.linecap_butt,linecap_round:G.linecap_round,linecap_square:G.linecap_square,linejoin_bevel:G.linejoin_bevel,linejoin_miter:G.linejoin_miter,linejoin_round:G.linejoin_round,main_icon:e.main_menu,mode_connect:e.mode_connect,tools_shapelib_show:e.mode_shapelib,palette:F.palette_info,zoom_panel:F.zoom_level,path_node_x:G.node_x,path_node_y:G.node_y,
rect_height_tool:G.rect_height,rect_width_tool:G.rect_width,seg_type:G.seg_type,selLayerNames:k.move_selected,selected_x:G.pos_x,selected_y:G.pos_y,stroke_color:G.stroke_color,stroke_style:G.stroke_style,stroke_width:G.stroke_width,svginfo_title:f.doc_title,text:G.text_contents,toggle_stroke_tools:F.toggle_stroke_tools,tool_add_subpath:e.add_subpath,tool_alignbottom:e.align_bottom,tool_aligncenter:e.align_center,tool_alignleft:e.align_left,tool_alignmiddle:e.align_middle,tool_alignright:e.align_right,
tool_aligntop:e.align_top,tool_angle:G.angle,tool_blur:G.blur,tool_bold:G.bold,tool_circle:e.mode_circle,tool_clone:e.clone,tool_clone_multi:e.clone,tool_delete:e.del,tool_delete_multi:e.del,tool_ellipse:e.mode_ellipse,tool_eyedropper:e.mode_eyedropper,tool_fhellipse:e.mode_fhellipse,tool_fhpath:e.mode_fhpath,tool_fhrect:e.mode_fhrect,tool_font_size:G.font_size,tool_group:e.group,tool_make_link:e.make_link,tool_link_url:e.set_link_url,tool_image:e.mode_image,tool_italic:G.italic,tool_line:e.mode_line,
tool_move_bottom:e.move_bottom,tool_move_top:e.move_top,tool_node_clone:e.node_clone,tool_node_delete:e.node_delete,tool_node_link:e.node_link,tool_opacity:G.opacity,tool_openclose_path:e.openclose_path,tool_path:e.mode_path,tool_position:e.align_to_page,tool_rect:e.mode_rect,tool_redo:e.redo,tool_reorient:e.reorient_path,tool_select:e.mode_select,tool_source:e.source_save,tool_square:e.mode_square,tool_text:e.mode_text,tool_topath:e.to_path,tool_undo:e.undo,tool_ungroup:e.ungroup,tool_wireframe:e.wireframe_mode,
view_grid:e.toggle_grid,tool_zoom:e.mode_zoom,url_notice:e.no_embed},true);K.setLang(s,v)}};K.putLocale=function(v,G){if(v)s=v;else{s=a.pref("lang");if(!s){if(navigator.userLanguage)s=navigator.userLanguage;else if(navigator.language)s=navigator.language;if(s=="")return}console.log("Lang: "+s);if(a.inArray(s,G)==-1&&s!=="test")s="en";if(s.indexOf("en")==0)return}var e=K.curConfig.langPath+"lang."+s+".js";a.getScript(e,function(f){if(!f){f=document.createElement("script");f.src=e;document.querySelector("head").appendChild(f)}})};
return K}(jQuery,svgEditor);
/*!
 * jQuery UI 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(a,b){function d(b){return!a(b).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}function c(b,c){var e=b.nodeName.toLowerCase();if("area"===e){var f=b.parentNode,g=f.name,h;if(!b.href||!g||f.nodeName.toLowerCase()!=="map")return!1;h=a("img[usemap=#"+g+"]")[0];return!!h&&d(h)}return(/input|select|textarea|button|object/.test(e)?!b.disabled:"a"==e?b.href||c:c)&&d(b)}a.ui=a.ui||{};a.ui.version||(a.extend(a.ui,{version:"1.8.17",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}}),a.fn.extend({propAttr:a.fn.prop||a.fn.attr,_focus:a.fn.focus,focus:function(b,c){return typeof b=="number"?this.each(function(){var d=this;setTimeout(function(){a(d).focus(),c&&c.call(d)},b)}):this._focus.apply(this,arguments)},scrollParent:function(){var b;a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?b=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):b=this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!b.length?a(document):b},zIndex:function(c){if(c!==b)return this.css("zIndex",c);if(this.length){var d=a(this[0]),e,f;while(d.length&&d[0]!==document){e=d.css("position");if(e==="absolute"||e==="relative"||e==="fixed"){f=parseInt(d.css("zIndex"),10);if(!isNaN(f)&&f!==0)return f}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),a.each(["Width","Height"],function(c,d){function h(b,c,d,f){a.each(e,function(){c-=parseFloat(a.curCSS(b,"padding"+this,!0))||0,d&&(c-=parseFloat(a.curCSS(b,"border"+this+"Width",!0))||0),f&&(c-=parseFloat(a.curCSS(b,"margin"+this,!0))||0)});return c}var e=d==="Width"?["Left","Right"]:["Top","Bottom"],f=d.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+d]=function(c){if(c===b)return g["inner"+d].call(this);return this.each(function(){a(this).css(f,h(this,c)+"px")})},a.fn["outer"+d]=function(b,c){if(typeof b!="number")return g["outer"+d].call(this,b);return this.each(function(){a(this).css(f,h(this,b,!0,c)+"px")})}}),a.extend(a.expr[":"],{data:function(b,c,d){return!!a.data(b,d[3])},focusable:function(b){return c(b,!isNaN(a.attr(b,"tabindex")))},tabbable:function(b){var d=a.attr(b,"tabindex"),e=isNaN(d);return(e||d>=0)&&c(b,!e)}}),a(function(){var b=document.body,c=b.appendChild(c=document.createElement("div"));a.extend(c.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),a.support.minHeight=c.offsetHeight===100,a.support.selectstart="onselectstart"in c,b.removeChild(c).style.display="none"}),a.extend(a.ui,{plugin:{add:function(b,c,d){var e=a.ui[b].prototype;for(var f in d)e.plugins[f]=e.plugins[f]||[],e.plugins[f].push([c,d[f]])},call:function(a,b,c){var d=a.plugins[b];if(!!d&&!!a.element[0].parentNode)for(var e=0;e<d.length;e++)a.options[d[e][0]]&&d[e][1].apply(a.element,c)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(b,c){if(a(b).css("overflow")==="hidden")return!1;var d=c&&c==="left"?"scrollLeft":"scrollTop",e=!1;if(b[d]>0)return!0;b[d]=1,e=b[d]>0,b[d]=0;return e},isOverAxis:function(a,b,c){return a>b&&a<b+c},isOver:function(b,c,d,e,f,g){return a.ui.isOverAxis(b,d,f)&&a.ui.isOverAxis(c,e,g)}}))})(jQuery);/*!
 * jQuery UI Widget 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */(function(a,b){if(a.cleanData){var c=a.cleanData;a.cleanData=function(b){for(var d=0,e;(e=b[d])!=null;d++)try{a(e).triggerHandler("remove")}catch(f){}c(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){c||(!b||a.filter(b,[this]).length)&&a("*",this).add([this]).each(function(){try{a(this).triggerHandler("remove")}catch(b){}});return d.call(a(this),b,c)})}}a.widget=function(b,c,d){var e=b.split(".")[0],f;b=b.split(".")[1],f=e+"-"+b,d||(d=c,c=a.Widget),a.expr[":"][f]=function(c){return!!a.data(c,b)},a[e]=a[e]||{},a[e][b]=function(a,b){arguments.length&&this._createWidget(a,b)};var g=new c;g.options=a.extend(!0,{},g.options),a[e][b].prototype=a.extend(!0,g,{namespace:e,widgetName:b,widgetEventPrefix:a[e][b].prototype.widgetEventPrefix||b,widgetBaseClass:f},d),a.widget.bridge(b,a[e][b])},a.widget.bridge=function(c,d){a.fn[c]=function(e){var f=typeof e=="string",g=Array.prototype.slice.call(arguments,1),h=this;e=!f&&g.length?a.extend.apply(null,[!0,e].concat(g)):e;if(f&&e.charAt(0)==="_")return h;f?this.each(function(){var d=a.data(this,c),f=d&&a.isFunction(d[e])?d[e].apply(d,g):d;if(f!==d&&f!==b){h=f;return!1}}):this.each(function(){var b=a.data(this,c);b?b.option(e||{})._init():a.data(this,c,new d(e,this))});return h}},a.Widget=function(a,b){arguments.length&&this._createWidget(a,b)},a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:!1},_createWidget:function(b,c){a.data(c,this.widgetName,this),this.element=a(c),this.options=a.extend(!0,{},this.options,this._getCreateOptions(),b);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()}),this._create(),this._trigger("create"),this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName),this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled "+"ui-state-disabled")},widget:function(){return this.element},option:function(c,d){var e=c;if(arguments.length===0)return a.extend({},this.options);if(typeof c=="string"){if(d===b)return this.options[c];e={},e[c]=d}this._setOptions(e);return this},_setOptions:function(b){var c=this;a.each(b,function(a,b){c._setOption(a,b)});return this},_setOption:function(a,b){this.options[a]=b,a==="disabled"&&this.widget()[b?"addClass":"removeClass"](this.widgetBaseClass+"-disabled"+" "+"ui-state-disabled").attr("aria-disabled",b);return this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_trigger:function(b,c,d){var e,f,g=this.options[b];d=d||{},c=a.Event(c),c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase(),c.target=this.element[0],f=c.originalEvent;if(f)for(e in f)e in c||(c[e]=f[e]);this.element.trigger(c,d);return!(a.isFunction(g)&&g.call(this.element[0],c,d)===!1||c.isDefaultPrevented())}}})(jQuery);/*!
 * jQuery UI Mouse 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */(function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent")){a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation();return!1}}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(b){if(!c){this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which==1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted){b.preventDefault();return!0}}!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0;return!0}},_mouseMove:function(b){if(a.browser.msie&&!(document.documentMode>=9)&&!b.button)return this._mouseUp(b);if(this._mouseStarted){this._mouseDrag(b);return b.preventDefault()}this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b));return!this._mouseStarted},_mouseUp:function(b){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b));return!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})})(jQuery);/*
 * jQuery UI Draggable 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */(function(a,b){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},destroy:function(){if(!!this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy();return this}},_mouseCapture:function(b){var c=this.options;if(this.helper||c.disabled||a(b.target).is(".ui-resizable-handle"))return!1;this.handle=this._getHandle(b);if(!this.handle)return!1;c.iframeFix&&a(c.iframeFix===!0?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a(this).offset()).appendTo("body")});return!0},_mouseStart:function(b){var c=this.options;this.helper=this._createHelper(b),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),c.containment&&this._setContainment();if(this._trigger("start",b)===!1){this._clear();return!1}this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this.helper.addClass("ui-draggable-dragging"),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b);return!0},_mouseDrag:function(b,c){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute");if(!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1){this._mouseUp({});return!1}this.position=d.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";a.ui.ddmanager&&a.ui.ddmanager.drag(this,b);return!1},_mouseStop:function(b){var c=!1;a.ui.ddmanager&&!this.options.dropBehaviour&&(c=a.ui.ddmanager.drop(this,b)),this.dropped&&(c=this.dropped,this.dropped=!1);if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return!1;if(this.options.revert=="invalid"&&!c||this.options.revert=="valid"&&c||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)){var d=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){d._trigger("stop",b)!==!1&&d._clear()})}else this._trigger("stop",b)!==!1&&this._clear();return!1},_mouseUp:function(b){this.options.iframeFix===!0&&a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b);return a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?!0:!1;a(this.options.handle,this.element).find("*").andSelf().each(function(){this==b.target&&(c=!0)});return c},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo),d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute");return d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[b.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,b.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(b.containment=="document"?0:a(window).scrollLeft())+a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b.containment=="document"?0:a(window).scrollTop())+(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)&&b.containment.constructor!=Array){var c=a(b.containment),d=c[0];if(!d)return;var e=c.offset(),f=a(d).css("overflow")!="hidden";this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=c}else b.containment.constructor==Array&&(this.containment=b.containment)},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName),f=b.pageX,g=b.pageY;if(this.originalPosition){var h;if(this.containment){if(this.relative_container){var i=this.relative_container.offset();h=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else h=this.containment;b.pageX-this.offset.click.left<h[0]&&(f=h[0]+this.offset.click.left),b.pageY-this.offset.click.top<h[1]&&(g=h[1]+this.offset.click.top),b.pageX-this.offset.click.left>h[2]&&(f=h[2]+this.offset.click.left),b.pageY-this.offset.click.top>h[3]&&(g=h[3]+this.offset.click.top)}if(c.grid){var j=c.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY;g=h?j-this.offset.click.top<h[1]||j-this.offset.click.top>h[3]?j-this.offset.click.top<h[1]?j+c.grid[1]:j-c.grid[1]:j:j;var k=c.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0]:this.originalPageX;f=h?k-this.offset.click.left<h[0]||k-this.offset.click.left>h[2]?k-this.offset.click.left<h[0]?k+c.grid[0]:k-c.grid[0]:k:k}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(b,c,d){d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d]),b=="drag"&&(this.positionAbs=this._convertPositionTo("absolute"));return a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(a){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.extend(a.ui.draggable,{version:"1.8.17"}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c){var d=a(this).data("draggable"),e=d.options,f=a.extend({},c,{item:d.element});d.sortables=[],a(e.connectToSortable).each(function(){var c=a.data(this,"sortable");c&&!c.options.disabled&&(d.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),c._trigger("activate",b,f))})},stop:function(b,c){var d=a(this).data("draggable"),e=a.extend({},c,{item:d.element});a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(b),this.instance.options.helper=this.instance.options._helper,d.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",b,e))})},drag:function(b,c){var d=a(this).data("draggable"),e=this,f=function(b){var c=this.offset.click.top,d=this.offset.click.left,e=this.positionAbs.top,f=this.positionAbs.left,g=b.height,h=b.width,i=b.top,j=b.left;return a.ui.isOver(e+c,f+d,i,j,g,h)};a.each(d.sortables,function(f){this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return c.helper[0]},b.target=this.instance.currentItem[0],this.instance._mouseCapture(b,!0),this.instance._mouseStart(b,!0,!0),this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",b),d.dropped=this.instance.element,d.currentItem=d.element,this.instance.fromOutside=d),this.instance.currentItem&&this.instance._mouseDrag(b)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",b,this.instance._uiHash(this.instance)),this.instance._mouseStop(b,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",b),d.dropped=!1)})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c){var d=a("body"),e=a(this).data("draggable").options;d.css("cursor")&&(e._cursor=d.css("cursor")),d.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;d._cursor&&a("body").css("cursor",d._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(b,c){var d=a(this).data("draggable");d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"&&(d.overflowOffset=d.scrollParent.offset())},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=!1;if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!e.axis||e.axis!="x")d.overflowOffset.top+d.scrollParent[0].offsetHeight-b.pageY<e.scrollSensitivity?d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop-e.scrollSpeed);if(!e.axis||e.axis!="y")d.overflowOffset.left+d.scrollParent[0].offsetWidth-b.pageX<e.scrollSensitivity?d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft-e.scrollSpeed)}else{if(!e.axis||e.axis!="x")b.pageY-a(document).scrollTop()<e.scrollSensitivity?f=a(document).scrollTop(a(document).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<e.scrollSensitivity&&(f=a(document).scrollTop(a(document).scrollTop()+e.scrollSpeed));if(!e.axis||e.axis!="y")b.pageX-a(document).scrollLeft()<e.scrollSensitivity?f=a(document).scrollLeft(a(document).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<e.scrollSensitivity&&(f=a(document).scrollLeft(a(document).scrollLeft()+e.scrollSpeed))}f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c){var d=a(this).data("draggable"),e=d.options;d.snapElements=[],a(e.snap.constructor!=String?e.snap.items||":data(draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!=d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=e.snapTolerance,g=c.offset.left,h=g+d.helperProportions.width,i=c.offset.top,j=i+d.helperProportions.height;for(var k=d.snapElements.length-1;k>=0;k--){var l=d.snapElements[k].left,m=l+d.snapElements[k].width,n=d.snapElements[k].top,o=n+d.snapElements[k].height;if(!(l-f<g&&g<m+f&&n-f<i&&i<o+f||l-f<g&&g<m+f&&n-f<j&&j<o+f||l-f<h&&h<m+f&&n-f<i&&i<o+f||l-f<h&&h<m+f&&n-f<j&&j<o+f)){d.snapElements[k].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=!1;continue}if(e.snapMode!="inner"){var p=Math.abs(n-j)<=f,q=Math.abs(o-i)<=f,r=Math.abs(l-h)<=f,s=Math.abs(m-g)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n-d.helperProportions.height,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l-d.helperProportions.width}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m}).left-d.margins.left)}var t=p||q||r||s;if(e.snapMode!="outer"){var p=Math.abs(n-i)<=f,q=Math.abs(o-j)<=f,r=Math.abs(l-g)<=f,s=Math.abs(m-h)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o-d.helperProportions.height,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m-d.helperProportions.width}).left-d.margins.left)}!d.snapElements[k].snapping&&(p||q||r||s||t)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=p||q||r||s||t}}}),a.ui.plugin.add("draggable","stack",{start:function(b,c){var d=a(this).data("draggable").options,e=a.makeArray(a(d.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});if(!!e.length){var f=parseInt(e[0].style.zIndex)||0;a(e).each(function(a){this.style.zIndex=f+a}),this[0].style.zIndex=f+e.length}}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})})(jQuery);/*
 * jQuery UI Slider 1.8.17
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */(function(a,b){var c=5;a.widget("ui.slider",a.ui.mouse,{widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var b=this,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",g=d.values&&d.values.length||1,h=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(d.disabled?" ui-slider-disabled ui-disabled":"")),this.range=a([]),d.range&&(d.range===!0&&(d.values||(d.values=[this._valueMin(),this._valueMin()]),d.values.length&&d.values.length!==2&&(d.values=[d.values[0],d.values[0]])),this.range=a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(d.range==="min"||d.range==="max"?" ui-slider-range-"+d.range:"")));for(var i=e.length;i<g;i+=1)h.push(f);this.handles=e.add(a(h.join("")).appendTo(b.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(a){a.preventDefault()}).hover(function(){d.disabled||a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")}).focus(function(){d.disabled?a(this).blur():(a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),a(this).addClass("ui-state-focus"))}).blur(function(){a(this).removeClass("ui-state-focus")}),this.handles.each(function(b){a(this).data("index.ui-slider-handle",b)}),this.handles.keydown(function(d){var e=!0,f=a(this).data("index.ui-slider-handle"),g,h,i,j;if(!b.options.disabled){switch(d.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:e=!1;if(!b._keySliding){b._keySliding=!0,a(this).addClass("ui-state-active"),g=b._start(d,f);if(g===!1)return}}j=b.options.step,b.options.values&&b.options.values.length?h=i=b.values(f):h=i=b.value();switch(d.keyCode){case a.ui.keyCode.HOME:i=b._valueMin();break;case a.ui.keyCode.END:i=b._valueMax();break;case a.ui.keyCode.PAGE_UP:i=b._trimAlignValue(h+(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.PAGE_DOWN:i=b._trimAlignValue(h-(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(h===b._valueMax())return;i=b._trimAlignValue(h+j);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(h===b._valueMin())return;i=b._trimAlignValue(h-j)}b._slide(d,f,i);return e}}).keyup(function(c){var d=a(this).data("index.ui-slider-handle");b._keySliding&&(b._keySliding=!1,b._stop(c,d),b._change(c,d),a(this).removeClass("ui-state-active"))}),this._refreshValue(),this._animateOff=!1},destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"),this._mouseDestroy();return this},_mouseCapture:function(b){var c=this.options,d,e,f,g,h,i,j,k,l;if(c.disabled)return!1;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),d={x:b.pageX,y:b.pageY},e=this._normValueFromMouse(d),f=this._valueMax()-this._valueMin()+1,h=this,this.handles.each(function(b){var c=Math.abs(e-h.values(b));f>c&&(f=c,g=a(this),i=b)}),c.range===!0&&this.values(1)===c.min&&(i+=1,g=a(this.handles[i])),j=this._start(b,i);if(j===!1)return!1;this._mouseSliding=!0,h._handleIndex=i,g.addClass("ui-state-active").focus(),k=g.offset(),l=!a(b.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:b.pageX-k.left-g.width()/2,top:b.pageY-k.top-g.height()/2-(parseInt(g.css("borderTopWidth"),10)||0)-(parseInt(g.css("borderBottomWidth"),10)||0)+(parseInt(g.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,i,e),this._animateOff=!0;return!0},_mouseStart:function(a){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);this._slide(a,this._handleIndex,c);return!1},_mouseStop:function(a){this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1;return!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;this.orientation==="horizontal"?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),d<0&&(d=0),this.orientation==="vertical"&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e;return this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values());return this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),this.options.values.length===2&&this.options.range===!0&&(b===0&&c>d||b===1&&c<d)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c,!0))):c!==this.value()&&(f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("change",a,c)}},value:function(a){if(arguments.length)this.options.value=this._trimAlignValue(a),this._refreshValue(),this._change(null,0);else return this._value()},values:function(b,c){var d,e,f;if(arguments.length>1)this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),this._change(null,b);else{if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();d=this.options.values,e=arguments[0];for(f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()}},_setOption:function(b,c){var d,e=0;a.isArray(this.options.values)&&(e=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments);switch(b){case"disabled":c?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.propAttr("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.propAttr("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(d=0;d<e;d+=1)this._change(null,d);this._animateOff=!1}},_value:function(){var a=this.options.value;a=this._trimAlignValue(a);return a},_values:function(a){var b,c,d;if(arguments.length){b=this.options.values[a],b=this._trimAlignValue(b);return b}c=this.options.values.slice();for(d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;Math.abs(c)*2>=b&&(d+=c>0?b:-b);return parseFloat(d.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var b=this.options.range,c=this.options,d=this,e=this._animateOff?!1:c.animate,f,g={},h,i,j,k;this.options.values&&this.options.values.length?this.handles.each(function(b,i){f=(d.values(b)-d._valueMin())/(d._valueMax()-d._valueMin())*100,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",a(this).stop(1,1)[e?"animate":"css"](g,c.animate),d.options.range===!0&&(d.orientation==="horizontal"?(b===0&&d.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({width:f-h+"%"},{queue:!1,duration:c.animate})):(b===0&&d.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({height:f-h+"%"},{queue:!1,duration:c.animate}))),h=f}):(i=this.value(),j=this._valueMin(),k=this._valueMax(),f=k!==j?(i-j)/(k-j)*100:0,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",this.handle.stop(1,1)[e?"animate":"css"](g,c.animate),b==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[e?"animate":"css"]({width:f+"%"},c.animate),b==="max"&&this.orientation==="horizontal"&&this.range[e?"animate":"css"]({width:100-f+"%"},{queue:!1,duration:c.animate}),b==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},c.animate),b==="max"&&this.orientation==="vertical"&&this.range[e?"animate":"css"]({height:100-f+"%"},{queue:!1,duration:c.animate}))}}),a.extend(a.ui.slider,{version:"1.8.17"})})(jQuery);
/*
 * jPicker 1.1.6
 *
 * jQuery Plugin for Photoshop style color picker
 *
 * Copyright (c) 2010 Christopher T. Tillman
 * Digital Magic Productions, Inc. (http://www.digitalmagicpro.com/)
 * MIT style license, FREE to use, alter, copy, sell, and especially ENHANCE
 *
 * Painstakingly ported from John Dyers' excellent work on his own color picker based on the Prototype framework.
 *
 * John Dyers' website: (http://johndyer.name)
 * Color Picker page:   (http://johndyer.name/post/2007/09/PhotoShop-like-JavaScript-Color-Picker.aspx)
 *
 */

(function($, version)
{
  Math.precision = function(value, precision)
    {
      if (precision === undefined) precision = 0;
      return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);
    };
  var Slider = // encapsulate slider functionality for the ColorMap and ColorBar - could be useful to use a jQuery UI draggable for this with certain extensions
      function(bar, options)
      {
        var $this = this, // private properties, methods, and events - keep these variables and classes invisible to outside code
          arrow = bar.find('img:first'), // the arrow image to drag
          minX = 0,
          maxX = 100,
          rangeX = 100,
          minY = 0,
          maxY = 100,
          rangeY = 100,
          x = 0,
          y = 0,
          offset,
          timeout,
          changeEvents = new Array(),
          fireChangeEvents =
            function(context)
            {
              for (var i = 0; i < changeEvents.length; i++) changeEvents[i].call($this, $this, context);
            },
          mouseDown = // bind the mousedown to the bar not the arrow for quick snapping to the clicked location
            function(e)
            {
              var off = bar.offset();
              offset = { l: off.left | 0, t: off.top | 0 };
              clearTimeout(timeout);
              timeout = setTimeout( // using setTimeout for visual updates - once the style is updated the browser will re-render internally allowing the next Javascript to run
                function()
                {
                  setValuesFromMousePosition.call($this, e);
                }, 0);
              // Bind mousemove and mouseup event to the document so it responds when dragged of of the bar - we will unbind these when on mouseup to save processing
              $(document).bind('mousemove', mouseMove).bind('mouseup', mouseUp);
              e.preventDefault(); // don't try to select anything or drag the image to the desktop
            },
          mouseMove = // set the values as the mouse moves
            function(e)
            {
              clearTimeout(timeout);
              timeout = setTimeout(
                function()
                {
                  setValuesFromMousePosition.call($this, e);
                }, 0);
              e.stopPropagation();
              e.preventDefault();
              return false;
            },
          mouseUp = // unbind the document events - they aren't needed when not dragging
            function(e)
            {
              $(document).unbind('mouseup', mouseUp).unbind('mousemove', mouseMove);
              e.stopPropagation();
              e.preventDefault();
              return false;
            },
          setValuesFromMousePosition = // calculate mouse position and set value within the current range
            function(e)
            {
              var locX = e.pageX - offset.l,
                  locY = e.pageY - offset.t,
                  barW = bar.w, // local copies for YUI compressor
                  barH = bar.h;
              // keep the arrow within the bounds of the bar
              if (locX < 0) locX = 0;
              else if (locX > barW) locX = barW;
              if (locY < 0) locY = 0;
              else if (locY > barH) locY = barH;
              val.call($this, 'xy', { x: ((locX / barW) * rangeX) + minX, y: ((locY / barH) * rangeY) + minY });
            },
          draw =
            function()
            {
              var arrowOffsetX = 0,
                arrowOffsetY = 0,
                barW = bar.w,
                barH = bar.h,
                arrowW = arrow.w,
                arrowH = arrow.h;
              setTimeout(
                function()
                {
                  if (rangeX > 0) // range is greater than zero
                  {
                    // constrain to bounds
                    if (x == maxX) arrowOffsetX = barW;
                    else arrowOffsetX = ((x / rangeX) * barW) | 0;
                  }
                  if (rangeY > 0) // range is greater than zero
                  {
                    // constrain to bounds
                    if (y == maxY) arrowOffsetY = barH;
                    else arrowOffsetY = ((y / rangeY) * barH) | 0;
                  }
                  // if arrow width is greater than bar width, center arrow and prevent horizontal dragging
                  if (arrowW >= barW) arrowOffsetX = (barW >> 1) - (arrowW >> 1); // number >> 1 - superfast bitwise divide by two and truncate (move bits over one bit discarding lowest)
                  else arrowOffsetX -= arrowW >> 1;
                  // if arrow height is greater than bar height, center arrow and prevent vertical dragging
                  if (arrowH >= barH) arrowOffsetY = (barH >> 1) - (arrowH >> 1);
                  else arrowOffsetY -= arrowH >> 1;
                  // set the arrow position based on these offsets
                  arrow.css({ left: arrowOffsetX + 'px', top: arrowOffsetY + 'px' });
                }, 0);
            },
          val =
            function(name, value, context)
            {
              var set = value !== undefined;
              if (!set)
              {
                if (name === undefined || name == null) name = 'xy';
                switch (name.toLowerCase())
                {
                  case 'x': return x;
                  case 'y': return y;
                  case 'xy':
                  default: return { x: x, y: y };
                }
              }
              if (context != null && context == $this) return;
              var changed = false,
                  newX,
                  newY;
              if (name == null) name = 'xy';
              switch (name.toLowerCase())
              {
                case 'x':
                  newX = value && (value.x && value.x | 0 || value | 0) || 0;
                  break;
                case 'y':
                  newY = value && (value.y && value.y | 0 || value | 0) || 0;
                  break;
                case 'xy':
                default:
                  newX = value && value.x && value.x | 0 || 0;
                  newY = value && value.y && value.y | 0 || 0;
                  break;
              }
              if (newX != null)
              {
                if (newX < minX) newX = minX;
                else if (newX > maxX) newX = maxX;
                if (x != newX)
                {
                  x = newX;
                  changed = true;
                }
              }
              if (newY != null)
              {
                if (newY < minY) newY = minY;
                else if (newY > maxY) newY = maxY;
                if (y != newY)
                {
                  y = newY;
                  changed = true;
                }
              }
              changed && fireChangeEvents.call($this, context || $this);
            },
          range =
            function (name, value)
            {
              var set = value !== undefined;
              if (!set)
              {
                if (name === undefined || name == null) name = 'all';
                switch (name.toLowerCase())
                {
                  case 'minx': return minX;
                  case 'maxx': return maxX;
                  case 'rangex': return { minX: minX, maxX: maxX, rangeX: rangeX };
                  case 'miny': return minY;
                  case 'maxy': return maxY;
                  case 'rangey': return { minY: minY, maxY: maxY, rangeY: rangeY };
                  case 'all':
                  default: return { minX: minX, maxX: maxX, rangeX: rangeX, minY: minY, maxY: maxY, rangeY: rangeY };
                }
              }
              var changed = false,
                  newMinX,
                  newMaxX,
                  newMinY,
                  newMaxY;
              if (name == null) name = 'all';
              switch (name.toLowerCase())
              {
                case 'minx':
                  newMinX = value && (value.minX && value.minX | 0 || value | 0) || 0;
                  break;
                case 'maxx':
                  newMaxX = value && (value.maxX && value.maxX | 0 || value | 0) || 0;
                  break;
                case 'rangex':
                  newMinX = value && value.minX && value.minX | 0 || 0;
                  newMaxX = value && value.maxX && value.maxX | 0 || 0;
                  break;
                case 'miny':
                  newMinY = value && (value.minY && value.minY | 0 || value | 0) || 0;
                  break;
                case 'maxy':
                  newMaxY = value && (value.maxY && value.maxY | 0 || value | 0) || 0;
                  break;
                case 'rangey':
                  newMinY = value && value.minY && value.minY | 0 || 0;
                  newMaxY = value && value.maxY && value.maxY | 0 || 0;
                  break;
                case 'all':
                default:
                  newMinX = value && value.minX && value.minX | 0 || 0;
                  newMaxX = value && value.maxX && value.maxX | 0 || 0;
                  newMinY = value && value.minY && value.minY | 0 || 0;
                  newMaxY = value && value.maxY && value.maxY | 0 || 0;
                  break;
              }
              if (newMinX != null && minX != newMinX)
              {
                minX = newMinX;
                rangeX = maxX - minX;
              }
              if (newMaxX != null && maxX != newMaxX)
              {
                maxX = newMaxX;
                rangeX = maxX - minX;
              }
              if (newMinY != null && minY != newMinY)
              {
                minY = newMinY;
                rangeY = maxY - minY;
              }
              if (newMaxY != null && maxY != newMaxY)
              {
                maxY = newMaxY;
                rangeY = maxY - minY;
              }
            },
          bind =
            function (callback)
            {
              if ($.isFunction(callback)) changeEvents.push(callback);
            },
          unbind =
            function (callback)
            {
              if (!$.isFunction(callback)) return;
              var i;
              while ((i = $.inArray(callback, changeEvents)) != -1) changeEvents.splice(i, 1);
            },
          destroy =
            function()
            {
              // unbind all possible events and null objects
              $(document).unbind('mouseup', mouseUp).unbind('mousemove', mouseMove);
              bar.unbind('mousedown', mouseDown);
              bar = null;
              arrow = null;
              changeEvents = null;
            };
        $.extend(true, $this, // public properties, methods, and event bindings - these we need to access from other controls
          {
            val: val,
            range: range,
            bind: bind,
            unbind: unbind,
            destroy: destroy
          });
        // initialize this control
        arrow.src = options.arrow && options.arrow.image;
        arrow.w = options.arrow && options.arrow.width || arrow.width();
        arrow.h = options.arrow && options.arrow.height || arrow.height();
        bar.w = options.map && options.map.width || bar.width();
        bar.h = options.map && options.map.height || bar.height();
        // bind mousedown event
        bar.bind('mousedown', mouseDown);
        bind.call($this, draw);
      },
    ColorValuePicker = // controls for all the input elements for the typing in color values
      function(picker, color, bindedHex, alphaPrecision)
      {
        var $this = this, // private properties and methods
          inputs = picker.find('td.Text input'),
          red = inputs.eq(3),
          green = inputs.eq(4),
          blue = inputs.eq(5),
          alpha = inputs.length > 7 ? inputs.eq(6) : null,
          hue = inputs.eq(0),
          saturation = inputs.eq(1),
          value = inputs.eq(2),
          hex = inputs.eq(inputs.length > 7 ? 7 : 6),
          ahex = inputs.length > 7 ? inputs.eq(8) : null,
          keyDown = // input box key down - use arrows to alter color
            function(e)
            {
              if (e.target.value == '' && e.target != hex.get(0) && (bindedHex != null && e.target != bindedHex.get(0) || bindedHex == null)) return;
              if (!validateKey(e)) return e;
              switch (e.target)
              {
                case red.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      red.val(setValueInRange.call($this, (red.val() << 0) + 1, 0, 255));
                      color.val('r', red.val(), e.target);
                      return false;
                    case 40:
                      red.val(setValueInRange.call($this, (red.val() << 0) - 1, 0, 255));
                      color.val('r', red.val(), e.target);
                      return false;
                  }
                  break;
                case green.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      green.val(setValueInRange.call($this, (green.val() << 0) + 1, 0, 255));
                      color.val('g', green.val(), e.target);
                      return false;
                    case 40:
                      green.val(setValueInRange.call($this, (green.val() << 0) - 1, 0, 255));
                      color.val('g', green.val(), e.target);
                      return false;
                  }
                  break;
                case blue.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      blue.val(setValueInRange.call($this, (blue.val() << 0) + 1, 0, 255));
                      color.val('b', blue.val(), e.target);
                      return false;
                    case 40:
                      blue.val(setValueInRange.call($this, (blue.val() << 0) - 1, 0, 255));
                      color.val('b', blue.val(), e.target);
                      return false;
                  }
                  break;
                case alpha && alpha.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      alpha.val(setValueInRange.call($this, parseFloat(alpha.val()) + 1, 0, 100));
                      color.val('a', Math.precision((alpha.val() * 255) / 100, alphaPrecision), e.target);
                      return false;
                    case 40:
                      alpha.val(setValueInRange.call($this, parseFloat(alpha.val()) - 1, 0, 100));
                      color.val('a', Math.precision((alpha.val() * 255) / 100, alphaPrecision), e.target);
                      return false;
                  }
                  break;
                case hue.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      hue.val(setValueInRange.call($this, (hue.val() << 0) + 1, 0, 360));
                      color.val('h', hue.val(), e.target);
                      return false;
                    case 40:
                      hue.val(setValueInRange.call($this, (hue.val() << 0) - 1, 0, 360));
                      color.val('h', hue.val(), e.target);
                      return false;
                  }
                  break;
                case saturation.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      saturation.val(setValueInRange.call($this, (saturation.val() << 0) + 1, 0, 100));
                      color.val('s', saturation.val(), e.target);
                      return false;
                    case 40:
                      saturation.val(setValueInRange.call($this, (saturation.val() << 0) - 1, 0, 100));
                      color.val('s', saturation.val(), e.target);
                      return false;
                  }
                  break;
                case value.get(0):
                  switch (e.keyCode)
                  {
                    case 38:
                      value.val(setValueInRange.call($this, (value.val() << 0) + 1, 0, 100));
                      color.val('v', value.val(), e.target);
                      return false;
                    case 40:
                      value.val(setValueInRange.call($this, (value.val() << 0) - 1, 0, 100));
                      color.val('v', value.val(), e.target);
                      return false;
                  }
                  break;
              }
            },
          keyUp = // input box key up - validate value and set color
            function(e)
            {
              if (e.target.value == '' && e.target != hex.get(0) && (bindedHex != null && e.target != bindedHex.get(0) || bindedHex == null)) return;
              if (!validateKey(e)) return e;
              switch (e.target)
              {
                case red.get(0):
                  red.val(setValueInRange.call($this, red.val(), 0, 255));
                  color.val('r', red.val(), e.target);
                  break;
                case green.get(0):
                  green.val(setValueInRange.call($this, green.val(), 0, 255));
                  color.val('g', green.val(), e.target);
                  break;
                case blue.get(0):
                  blue.val(setValueInRange.call($this, blue.val(), 0, 255));
                  color.val('b', blue.val(), e.target);
                  break;
                case alpha && alpha.get(0):
                  alpha.val(setValueInRange.call($this, alpha.val(), 0, 100));
                  color.val('a', Math.precision((alpha.val() * 255) / 100, alphaPrecision), e.target);
                  break;
                case hue.get(0):
                  hue.val(setValueInRange.call($this, hue.val(), 0, 360));
                  color.val('h', hue.val(), e.target);
                  break;
                case saturation.get(0):
                  saturation.val(setValueInRange.call($this, saturation.val(), 0, 100));
                  color.val('s', saturation.val(), e.target);
                  break;
                case value.get(0):
                  value.val(setValueInRange.call($this, value.val(), 0, 100));
                  color.val('v', value.val(), e.target);
                  break;
                case hex.get(0):
                  hex.val(hex.val().replace(/[^a-fA-F0-9]/g, '').toLowerCase().substring(0, 6));
                  bindedHex && bindedHex.val(hex.val());
                  color.val('hex', hex.val() != '' ? hex.val() : null, e.target);
                  break;
                case bindedHex && bindedHex.get(0):
                  bindedHex.val(bindedHex.val().replace(/[^a-fA-F0-9]/g, '').toLowerCase().substring(0, 6));
                  hex.val(bindedHex.val());
                  color.val('hex', bindedHex.val() != '' ? bindedHex.val() : null, e.target);
                  break;
                case ahex && ahex.get(0):
                  ahex.val(ahex.val().replace(/[^a-fA-F0-9]/g, '').toLowerCase().substring(0, 2));
                  color.val('a', ahex.val() != null ? parseInt(ahex.val(), 16) : null, e.target);
                  break;
              }
            },
          blur = // input box blur - reset to original if value empty
            function(e)
            {
              if (color.val() != null)
              {
                switch (e.target)
                {
                  case red.get(0): red.val(color.val('r')); break;
                  case green.get(0): green.val(color.val('g')); break;
                  case blue.get(0): blue.val(color.val('b')); break;
                  case alpha && alpha.get(0): alpha.val(Math.precision((color.val('a') * 100) / 255, alphaPrecision)); break;
                  case hue.get(0): hue.val(color.val('h')); break;
                  case saturation.get(0): saturation.val(color.val('s')); break;
                  case value.get(0): value.val(color.val('v')); break;
                  case hex.get(0):
                  case bindedHex && bindedHex.get(0):
                    hex.val(color.val('hex'));
                    bindedHex && bindedHex.val(color.val('hex'));
                    break;
                  case ahex && ahex.get(0): ahex.val(color.val('ahex').substring(6)); break;
                }
              }
            },
          validateKey = // validate key
            function(e)
            {
              switch(e.keyCode)
              {
                case 9:
                case 16:
                case 29:
                case 37:
                case 39:
                  return false;
                case 'c'.charCodeAt():
                case 'v'.charCodeAt():
                  if (e.ctrlKey) return false;
              }
              return true;
            },
          setValueInRange = // constrain value within range
            function(value, min, max)
            {
              if (value == '' || isNaN(value)) return min;
              if (value > max) return max;
              if (value < min) return min;
              return value;
            },
          colorChanged =
            function(ui, context)
            {
              var all = ui.val('all');
              if (context != red.get(0)) red.val(all != null ? all.r : '');
              if (context != green.get(0)) green.val(all != null ? all.g : '');
              if (context != blue.get(0)) blue.val(all != null ? all.b : '');
              if (alpha && context != alpha.get(0)) alpha.val(all != null ? Math.precision((all.a * 100) / 255, alphaPrecision) : '');
              if (context != hue.get(0)) hue.val(all != null ? all.h : '');
              if (context != saturation.get(0)) saturation.val(all != null ? all.s : '');
              if (context != value.get(0)) value.val(all != null ? all.v : '');
              if (context != hex.get(0) && (bindedHex && context != bindedHex.get(0) || !bindedHex)) hex.val(all != null ? all.hex : '');
              if (bindedHex && context != bindedHex.get(0) && context != hex.get(0)) bindedHex.val(all != null ? all.hex : '');
              if (ahex && context != ahex.get(0)) ahex.val(all != null ? all.ahex.substring(6) : '');
            },
          destroy =
            function()
            {
              // unbind all events and null objects
              red.add(green).add(blue).add(alpha).add(hue).add(saturation).add(value).add(hex).add(bindedHex).add(ahex).unbind('keyup', keyUp).unbind('blur', blur);
              red.add(green).add(blue).add(alpha).add(hue).add(saturation).add(value).unbind('keydown', keyDown);
              color.unbind(colorChanged);
              red = null;
              green = null;
              blue = null;
              alpha = null;
              hue = null;
              saturation = null;
              value = null;
              hex = null;
              ahex = null;
            };
        $.extend(true, $this, // public properties and methods
          {
            destroy: destroy
          });
        red.add(green).add(blue).add(alpha).add(hue).add(saturation).add(value).add(hex).add(bindedHex).add(ahex).bind('keyup', keyUp).bind('blur', blur);
        red.add(green).add(blue).add(alpha).add(hue).add(saturation).add(value).bind('keydown', keyDown);
        color.bind(colorChanged);
      };
  $.jPicker =
    {
      List: [], // array holding references to each active instance of the control
      Color: // color object - we will be able to assign by any color space type or retrieve any color space info
             // we want this public so we can optionally assign new color objects to initial values using inputs other than a string hex value (also supported)
        function(init)
        {
          var $this = this,
            r,
            g,
            b,
            a,
            h,
            s,
            v,
            changeEvents = new Array(),
            fireChangeEvents = 
              function(context)
              {
                for (var i = 0; i < changeEvents.length; i++) changeEvents[i].call($this, $this, context);
              },
            val =
              function(name, value, context)
              {
                // Kind of ugly
                var set = Boolean(value);
                if (set && value.ahex === "") value.ahex = "00000000";
                if (!set)
                {
                  if (name === undefined || name == null || name == '') name = 'all';
                  if (r == null) return null;
                  switch (name.toLowerCase())
                  {
                    case 'ahex': return ColorMethods.rgbaToHex({ r: r, g: g, b: b, a: a });
                    case 'hex': return val('ahex').substring(0, 6);
                    case 'all': return { r: r, g: g, b: b, a: a, h: h, s: s, v: v, hex: val.call($this, 'hex'), ahex: val.call($this, 'ahex') };
                    default:
                      var ret={};
                      for (var i = 0; i < name.length; i++)
                      {
                        switch (name.charAt(i))
                        {
                          case 'r':
                            if (name.length == 1) ret = r;
                            else ret.r = r;
                            break;
                          case 'g':
                            if (name.length == 1) ret = g;
                            else ret.g = g;
                            break;
                          case 'b':
                            if (name.length == 1) ret = b;
                            else ret.b = b;
                            break;
                          case 'a':
                            if (name.length == 1) ret = a;
                            else ret.a = a;
                            break;
                          case 'h':
                            if (name.length == 1) ret = h;
                            else ret.h = h;
                            break;
                          case 's':
                            if (name.length == 1) ret = s;
                            else ret.s = s;
                            break;
                          case 'v':
                            if (name.length == 1) ret = v;
                            else ret.v = v;
                            break;
                        }
                      }
                      return ret == {} ? val.call($this, 'all') : ret;
                      break;
                  }
                }
                if (context != null && context == $this) return;
                var changed = false;
                if (name == null) name = '';
                if (value == null)
                {
                  if (r != null)
                  {
                    r = null;
                    changed = true;
                  }
                  if (g != null)
                  {
                    g = null;
                    changed = true;
                  }
                  if (b != null)
                  {
                    b = null;
                    changed = true;
                  }
                  if (a != null)
                  {
                    a = null;
                    changed = true;
                  }
                  if (h != null)
                  {
                    h = null;
                    changed = true;
                  }
                  if (s != null)
                  {
                    s = null;
                    changed = true;
                  }
                  if (v != null)
                  {
                    v = null;
                    changed = true;
                  }
                  changed && fireChangeEvents.call($this, context || $this);
                  return;
                }
                switch (name.toLowerCase())
                {
                  case 'ahex':
                  case 'hex':
                    var ret = ColorMethods.hexToRgba(value && (value.ahex || value.hex) || value || 'none');

                    val.call($this, 'rgba', { r: ret.r, g: ret.g, b: ret.b, a: name == 'ahex' ? ret.a : a != null ? a : 255 }, context);
                    break;
                  default:
                    if (value && (value.ahex != null || value.hex != null))
                    {
                      val.call($this, 'ahex', value.ahex || value.hex || '00000000', context);
                      return;
                    }
                    var newV = {}, rgb = false, hsv = false;
                    if (value.r !== undefined && !name.indexOf('r') == -1) name += 'r';
                    if (value.g !== undefined && !name.indexOf('g') == -1) name += 'g';
                    if (value.b !== undefined && !name.indexOf('b') == -1) name += 'b';
                    if (value.a !== undefined && !name.indexOf('a') == -1) name += 'a';
                    if (value.h !== undefined && !name.indexOf('h') == -1) name += 'h';
                    if (value.s !== undefined && !name.indexOf('s') == -1) name += 's';
                    if (value.v !== undefined && !name.indexOf('v') == -1) name += 'v';
                    for (var i = 0; i < name.length; i++)
                    {
                      switch (name.charAt(i))
                      {
                        case 'r':
                          if (hsv) continue;
                          rgb = true;
                          newV.r = value && value.r && value.r | 0 || value && value | 0 || 0;
                          if (newV.r < 0) newV.r = 0;
                          else if (newV.r > 255) newV.r = 255;
                          if (r != newV.r)
                          {
                            r = newV.r;
                            changed = true;
                          }
                          break;
                        case 'g':
                          if (hsv) continue;
                          rgb = true;
                          newV.g = value && value.g && value.g | 0 || value && value | 0 || 0;
                          if (newV.g < 0) newV.g = 0;
                          else if (newV.g > 255) newV.g = 255;
                          if (g != newV.g)
                          {
                            g = newV.g;
                            changed = true;
                          }
                          break;
                        case 'b':
                          if (hsv) continue;
                          rgb = true;
                          newV.b = value && value.b && value.b | 0 || value && value | 0 || 0;
                          if (newV.b < 0) newV.b = 0;
                          else if (newV.b > 255) newV.b = 255;
                          if (b != newV.b)
                          {
                            b = newV.b;
                            changed = true;
                          }
                          break;
                        case 'a':
                          newV.a = value && value.a != null ? value.a | 0 : value != null ? value | 0 : 255;
                          if (newV.a < 0) newV.a = 0;
                          else if (newV.a > 255) newV.a = 255;
                          if (a != newV.a)
                          {
                            a = newV.a;
                            changed = true;
                          }
                          break;
                        case 'h':
                          if (rgb) continue;
                          hsv = true;
                          newV.h = value && value.h && value.h | 0 || value && value | 0 || 0;
                          if (newV.h < 0) newV.h = 0;
                          else if (newV.h > 360) newV.h = 360;
                          if (h != newV.h)
                          {
                            h = newV.h;
                            changed = true;
                          }
                          break;
                        case 's':
                          if (rgb) continue;
                          hsv = true;
                          newV.s = value && value.s != null ? value.s | 0 : value != null ? value | 0 : 100;
                          if (newV.s < 0) newV.s = 0;
                          else if (newV.s > 100) newV.s = 100;
                          if (s != newV.s)
                          {
                            s = newV.s;
                            changed = true;
                          }
                          break;
                        case 'v':
                          if (rgb) continue;
                          hsv = true;
                          newV.v = value && value.v != null ? value.v | 0 : value != null ? value | 0 : 100;
                          if (newV.v < 0) newV.v = 0;
                          else if (newV.v > 100) newV.v = 100;
                          if (v != newV.v)
                          {
                            v = newV.v;
                            changed = true;
                          }
                          break;
                      }
                    }
                    if (changed)
                    {
                      if (rgb)
                      {
                        r = r || 0;
                        g = g || 0;
                        b = b || 0;
                        var ret = ColorMethods.rgbToHsv({ r: r, g: g, b: b });
                        h = ret.h;
                        s = ret.s;
                        v = ret.v;
                      }
                      else if (hsv)
                      {
                        h = h || 0;
                        s = s != null ? s : 100;
                        v = v != null ? v : 100;
                        var ret = ColorMethods.hsvToRgb({ h: h, s: s, v: v });
                        r = ret.r;
                        g = ret.g;
                        b = ret.b;
                      }
                      a = a != null ? a : 255;
                      fireChangeEvents.call($this, context || $this);
                    }
                    break;
                }
              },
            bind =
              function(callback)
              {
                if ($.isFunction(callback)) changeEvents.push(callback);
              },
            unbind =
              function(callback)
              {
                if (!$.isFunction(callback)) return;
                var i;
                while ((i = $.inArray(callback, changeEvents)) != -1) changeEvents.splice(i, 1);
              },
            destroy =
              function()
              {
                changeEvents = null;
              }
          $.extend(true, $this, // public properties and methods
            {
              val: val,
              bind: bind,
              unbind: unbind,
              destroy: destroy
            });
          if (init)
          {
            if (init.ahex != null) val('ahex', init);
            else if (init.hex != null) val((init.a != null ? 'a' : '') + 'hex', init.a != null ? { ahex: init.hex + ColorMethods.intToHex(init.a) } : init);
            else if (init.r != null && init.g != null && init.b != null) val('rgb' + (init.a != null ? 'a' : ''), init);
            else if (init.h != null && init.s != null && init.v != null) val('hsv' + (init.a != null ? 'a' : ''), init);
          }
        },
      ColorMethods: // color conversion methods  - make public to give use to external scripts
        {
          hexToRgba:
            function(hex)
            {
              if (hex === '' || hex === 'none') return { r: null, g: null, b: null, a: null };
              hex = this.validateHex(hex);
              var r = '00', g = '00', b = '00', a = '255';
              if (hex.length == 6) hex += 'ff';
              if (hex.length > 6)
              {
                r = hex.substring(0, 2);
                g = hex.substring(2, 4);
                b = hex.substring(4, 6);
                a = hex.substring(6, hex.length);
              }
              else
              {
                if (hex.length > 4)
                {
                  r = hex.substring(4, hex.length);
                  hex = hex.substring(0, 4);
                }
                if (hex.length > 2)
                {
                  g = hex.substring(2, hex.length);
                  hex = hex.substring(0, 2);
                }
                if (hex.length > 0) b = hex.substring(0, hex.length);
              }
              return { r: this.hexToInt(r), g: this.hexToInt(g), b: this.hexToInt(b), a: this.hexToInt(a) };
            },
          validateHex:
            function(hex)
            {
              //if (typeof hex === "object") return "";
              hex = hex.toLowerCase().replace(/[^a-f0-9]/g, '');
              if (hex.length > 8) hex = hex.substring(0, 8);
              return hex;
            },
          rgbaToHex:
            function(rgba)
            {
              return this.intToHex(rgba.r) + this.intToHex(rgba.g) + this.intToHex(rgba.b) + this.intToHex(rgba.a);
            },
          intToHex:
            function(dec)
            {
              var result = (dec | 0).toString(16);
              if (result.length == 1) result = ('0' + result);
              return result.toLowerCase();
            },
          hexToInt:
            function(hex)
            {
              return parseInt(hex, 16);
            },
          rgbToHsv:
            function(rgb)
            {
              var r = rgb.r / 255, g = rgb.g / 255, b = rgb.b / 255, hsv = { h: 0, s: 0, v: 0 }, min = 0, max = 0, delta;
              if (r >= g && r >= b)
              {
                max = r;
                min = g > b ? b : g;
              }
              else if (g >= b && g >= r)
              {
                max = g;
                min = r > b ? b : r;
              }
              else
              {
                max = b;
                min = g > r ? r : g;
              }
              hsv.v = max;
              hsv.s = max ? (max - min) / max : 0;
              if (!hsv.s) hsv.h = 0;
              else
              {
                delta = max - min;
                if (r == max) hsv.h = (g - b) / delta;
                else if (g == max) hsv.h = 2 + (b - r) / delta;
                else hsv.h = 4 + (r - g) / delta;
                hsv.h = parseInt(hsv.h * 60);
                if (hsv.h < 0) hsv.h += 360;
              }
              hsv.s = (hsv.s * 100) | 0;
              hsv.v = (hsv.v * 100) | 0;
              return hsv;
            },
          hsvToRgb:
            function(hsv)
            {
              var rgb = { r: 0, g: 0, b: 0, a: 100 }, h = hsv.h, s = hsv.s, v = hsv.v;
              if (s == 0)
              {
                if (v == 0) rgb.r = rgb.g = rgb.b = 0;
                else rgb.r = rgb.g = rgb.b = (v * 255 / 100) | 0;
              }
              else
              {
                if (h == 360) h = 0;
                h /= 60;
                s = s / 100;
                v = v / 100;
                var i = h | 0,
                    f = h - i,
                    p = v * (1 - s),
                    q = v * (1 - (s * f)),
                    t = v * (1 - (s * (1 - f)));
                switch (i)
                {
                  case 0:
                    rgb.r = v;
                    rgb.g = t;
                    rgb.b = p;
                    break;
                  case 1:
                    rgb.r = q;
                    rgb.g = v;
                    rgb.b = p;
                    break;
                  case 2:
                    rgb.r = p;
                    rgb.g = v;
                    rgb.b = t;
                    break;
                  case 3:
                    rgb.r = p;
                    rgb.g = q;
                    rgb.b = v;
                    break;
                  case 4:
                    rgb.r = t;
                    rgb.g = p;
                    rgb.b = v;
                    break;
                  case 5:
                    rgb.r = v;
                    rgb.g = p;
                    rgb.b = q;
                    break;
                }
                rgb.r = (rgb.r * 255) | 0;
                rgb.g = (rgb.g * 255) | 0;
                rgb.b = (rgb.b * 255) | 0;
              }
              return rgb;
            }
        }
    };
  var Color = $.jPicker.Color, List = $.jPicker.List, ColorMethods = $.jPicker.ColorMethods; // local copies for YUI compressor
  $.fn.jPicker =
    function(options)
    {
      var $arguments = arguments;
      return this.each(
        function()
        {
          var $this = this, settings = $.extend(true, {}, $.fn.jPicker.defaults, options); // local copies for YUI compressor
          if ($($this).get(0).nodeName.toLowerCase() == 'input') // Add color picker icon if binding to an input element and bind the events to the input
          {
            $.extend(true, settings,
              {
                window:
                {
                  bindToInput: true,
                  expandable: true,
                  input: $($this)
                }
              });
            if($($this).val()=='')
            {
              settings.color.active = new Color({ hex: null });
              settings.color.current = new Color({ hex: null });
            }
            else if (ColorMethods.validateHex($($this).val()))
            {
              settings.color.active = new Color({ hex: $($this).val(), a: settings.color.active.val('a') });
              settings.color.current = new Color({ hex: $($this).val(), a: settings.color.active.val('a') });
            }
          }
          if (settings.window.expandable)
            $($this).after('<span class="jPicker"><span class="Icon"><span class="Color">&nbsp;</span><span class="Alpha">&nbsp;</span><span class="Image" title="Click To Open Color Picker">&nbsp;</span><span class="Container">&nbsp;</span></span></span>');
          else settings.window.liveUpdate = false; // Basic control binding for inline use - You will need to override the liveCallback or commitCallback function to retrieve results
          var isLessThanIE7 = parseFloat(navigator.appVersion.split('MSIE')[1]) < 7 && document.body.filters, // needed to run the AlphaImageLoader function for IE6
            container = null,
            colorMapDiv = null,
            colorBarDiv = null,
            colorMapL1 = null, // different layers of colorMap and colorBar
            colorMapL2 = null,
            colorMapL3 = null,
            colorBarL1 = null,
            colorBarL2 = null,
            colorBarL3 = null,
            colorBarL4 = null,
            colorBarL5 = null,
            colorBarL6 = null,
            colorMap = null, // color maps
            colorBar = null,
            colorPicker = null,
            elementStartX = null, // Used to record the starting css positions for dragging the control
            elementStartY = null,
            pageStartX = null, // Used to record the mousedown coordinates for dragging the control
            pageStartY = null,
            activePreview = null, // color boxes above the radio buttons
            currentPreview = null,
            okButton = null,
            cancelButton = null,
            grid = null, // preset colors grid
            iconColor = null, // iconColor for popup icon
            iconAlpha = null, // iconAlpha for popup icon
            iconImage = null, // iconImage popup icon
            moveBar = null, // drag bar
            setColorMode = // set color mode and update visuals for the new color mode
              function(colorMode)
              {
                var active = color.active, // local copies for YUI compressor
                  clientPath = images.clientPath,
                  hex = active.val('hex'),
                  rgbMap,
                  rgbBar;
                settings.color.mode = colorMode;
                switch (colorMode)
                {
                  case 'h':
                    setTimeout(
                      function()
                      {
                        setBG.call($this, colorMapDiv, 'transparent');
                        setImgLoc.call($this, colorMapL1, 0);
                        setAlpha.call($this, colorMapL1, 100);
                        setImgLoc.call($this, colorMapL2, 260);
                        setAlpha.call($this, colorMapL2, 100);
                        setBG.call($this, colorBarDiv, 'transparent');
                        setImgLoc.call($this, colorBarL1, 0);
                        setAlpha.call($this, colorBarL1, 100);
                        setImgLoc.call($this, colorBarL2, 260);
                        setAlpha.call($this, colorBarL2, 100);
                        setImgLoc.call($this, colorBarL3, 260);
                        setAlpha.call($this, colorBarL3, 100);
                        setImgLoc.call($this, colorBarL4, 260);
                        setAlpha.call($this, colorBarL4, 100);
                        setImgLoc.call($this, colorBarL6, 260);
                        setAlpha.call($this, colorBarL6, 100);
                      }, 0);
                    colorMap.range('all', { minX: 0, maxX: 100, minY: 0, maxY: 100 });
                    colorBar.range('rangeY', { minY: 0, maxY: 360 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('s'), y: 100 - active.val('v') }, colorMap);
                    colorBar.val('y', 360 - active.val('h'), colorBar);
                    break;
                  case 's':
                    setTimeout(
                      function()
                      {
                        setBG.call($this, colorMapDiv, 'transparent');
                        setImgLoc.call($this, colorMapL1, -260);
                        setImgLoc.call($this, colorMapL2, -520);
                        setImgLoc.call($this, colorBarL1, -260);
                        setImgLoc.call($this, colorBarL2, -520);
                        setImgLoc.call($this, colorBarL6, 260);
                        setAlpha.call($this, colorBarL6, 100);
                      }, 0);
                    colorMap.range('all', { minX: 0, maxX: 360, minY: 0, maxY: 100 });
                    colorBar.range('rangeY', { minY: 0, maxY: 100 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('h'), y: 100 - active.val('v') }, colorMap);
                    colorBar.val('y', 100 - active.val('s'), colorBar);
                    break;
                  case 'v':
                    setTimeout(
                      function()
                      {
                        setBG.call($this, colorMapDiv, '000000');
                        setImgLoc.call($this, colorMapL1, -780);
                        setImgLoc.call($this, colorMapL2, 260);
                        setBG.call($this, colorBarDiv, hex);
                        setImgLoc.call($this, colorBarL1, -520);
                        setImgLoc.call($this, colorBarL2, 260);
                        setAlpha.call($this, colorBarL2, 100);
                        setImgLoc.call($this, colorBarL6, 260);
                        setAlpha.call($this, colorBarL6, 100);
                      }, 0);
                    colorMap.range('all', { minX: 0, maxX: 360, minY: 0, maxY: 100 });
                    colorBar.range('rangeY', { minY: 0, maxY: 100 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('h'), y: 100 - active.val('s') }, colorMap);
                    colorBar.val('y', 100 - active.val('v'), colorBar);
                    break;
                  case 'r':
                    rgbMap = -1040;
                    rgbBar = -780;
                    colorMap.range('all', { minX: 0, maxX: 255, minY: 0, maxY: 255 });
                    colorBar.range('rangeY', { minY: 0, maxY: 255 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('b'), y: 255 - active.val('g') }, colorMap);
                    colorBar.val('y', 255 - active.val('r'), colorBar);
                    break;
                  case 'g':
                    rgbMap = -1560;
                    rgbBar = -1820;
                    colorMap.range('all', { minX: 0, maxX: 255, minY: 0, maxY: 255 });
                    colorBar.range('rangeY', { minY: 0, maxY: 255 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('b'), y: 255 - active.val('r') }, colorMap);
                    colorBar.val('y', 255 - active.val('g'), colorBar);
                    break;
                  case 'b':
                    rgbMap = -2080;
                    rgbBar = -2860;
                    colorMap.range('all', { minX: 0, maxX: 255, minY: 0, maxY: 255 });
                    colorBar.range('rangeY', { minY: 0, maxY: 255 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('r'), y: 255 - active.val('g') }, colorMap);
                    colorBar.val('y', 255 - active.val('b'), colorBar);
                    break;
                  case 'a':
                    setTimeout(
                      function()
                      {
                        setBG.call($this, colorMapDiv, 'transparent');
                        setImgLoc.call($this, colorMapL1, -260);
                        setImgLoc.call($this, colorMapL2, -520);
                        setImgLoc.call($this, colorBarL1, 260);
                        setImgLoc.call($this, colorBarL2, 260);
                        setAlpha.call($this, colorBarL2, 100);
                        setImgLoc.call($this, colorBarL6, 0);
                        setAlpha.call($this, colorBarL6, 100);
                      }, 0);
                    colorMap.range('all', { minX: 0, maxX: 360, minY: 0, maxY: 100 });
                    colorBar.range('rangeY', { minY: 0, maxY: 255 });
                    if (active.val('ahex') == null) break;
                    colorMap.val('xy', { x: active.val('h'), y: 100 - active.val('v') }, colorMap);
                    colorBar.val('y', 255 - active.val('a'), colorBar);
                    break;
                  default:
                    throw ('Invalid Mode');
                    break;
                }
                switch (colorMode)
                {
                  case 'h':
                    break;
                  case 's':
                  case 'v':
                  case 'a':
                    setTimeout(
                      function()
                      {
                        setAlpha.call($this, colorMapL1, 100);
                        setAlpha.call($this, colorBarL1, 100);
                        setImgLoc.call($this, colorBarL3, 260);
                        setAlpha.call($this, colorBarL3, 100);
                        setImgLoc.call($this, colorBarL4, 260);
                        setAlpha.call($this, colorBarL4, 100);
                      }, 0);
                    break;
                  case 'r':
                  case 'g':
                  case 'b':
                    setTimeout(
                      function()
                      {
                        setBG.call($this, colorMapDiv, 'transparent');
                        setBG.call($this, colorBarDiv, 'transparent');
                        setAlpha.call($this, colorBarL1, 100);
                        setAlpha.call($this, colorMapL1, 100);
                        setImgLoc.call($this, colorMapL1, rgbMap);
                        setImgLoc.call($this, colorMapL2, rgbMap - 260);
                        setImgLoc.call($this, colorBarL1, rgbBar - 780);
                        setImgLoc.call($this, colorBarL2, rgbBar - 520);
                        setImgLoc.call($this, colorBarL3, rgbBar);
                        setImgLoc.call($this, colorBarL4, rgbBar - 260);
                        setImgLoc.call($this, colorBarL6, 260);
                        setAlpha.call($this, colorBarL6, 100);
                      }, 0);
                    break;
                }
                if (active.val('ahex') == null) return;
                activeColorChanged.call($this, active);
              },
            activeColorChanged = // Update color when user changes text values
              function(ui, context)
              {
                if (context == null || (context != colorBar && context != colorMap)) positionMapAndBarArrows.call($this, ui, context);
                setTimeout(
                  function()
                  {
                    updatePreview.call($this, ui);
                    updateMapVisuals.call($this, ui);
                    updateBarVisuals.call($this, ui);
                  }, 0);
              },
            mapValueChanged = // user has dragged the ColorMap pointer
              function(ui, context)
              {
                var active = color.active;
                if (context != colorMap && active.val() == null) return;
                var xy = ui.val('all');
                switch (settings.color.mode)
                {
                  case 'h':
                    active.val('sv', { s: xy.x, v: 100 - xy.y }, context);
                    break;
                  case 's':
                  case 'a':
                    active.val('hv', { h: xy.x, v: 100 - xy.y }, context);
                    break;
                  case 'v':
                    active.val('hs', { h: xy.x, s: 100 - xy.y }, context);
                    break;
                  case 'r':
                    active.val('gb', { g: 255 - xy.y, b: xy.x }, context);
                    break;
                  case 'g':
                    active.val('rb', { r: 255 - xy.y, b: xy.x }, context);
                    break;
                  case 'b':
                    active.val('rg', { r: xy.x, g: 255 - xy.y }, context);
                    break;
                }
              },
            colorBarValueChanged = // user has dragged the ColorBar slider
              function(ui, context)
              {
                var active = color.active;
                if (context != colorBar && active.val() == null) return;
                switch (settings.color.mode)
                {
                  case 'h':
                    active.val('h', { h: 360 - ui.val('y') }, context);
                    break;
                  case 's':
                    active.val('s', { s: 100 - ui.val('y') }, context);
                    break;
                  case 'v':
                    active.val('v', { v: 100 - ui.val('y') }, context);
                    break;
                  case 'r':
                    active.val('r', { r: 255 - ui.val('y') }, context);
                    break;
                  case 'g':
                    active.val('g', { g: 255 - ui.val('y') }, context);
                    break;
                  case 'b':
                    active.val('b', { b: 255 - ui.val('y') }, context);
                    break;
                  case 'a':
                    active.val('a', 255 - ui.val('y'), context);
                    break;
                }
              },
            positionMapAndBarArrows = // position map and bar arrows to match current color
              function(ui, context)
              {
                if (context != colorMap)
                {
                  switch (settings.color.mode)
                  {
                    case 'h':
                      var sv = ui.val('sv');
                      colorMap.val('xy', { x: sv != null ? sv.s : 100, y: 100 - (sv != null ? sv.v : 100) }, context);
                      break;
                    case 's':
                    case 'a':
                      var hv = ui.val('hv');
                      colorMap.val('xy', { x: hv && hv.h || 0, y: 100 - (hv != null ? hv.v : 100) }, context);
                      break;
                    case 'v':
                      var hs = ui.val('hs');
                      colorMap.val('xy', { x: hs && hs.h || 0, y: 100 - (hs != null ? hs.s : 100) }, context);
                      break;
                    case 'r':
                      var bg = ui.val('bg');
                      colorMap.val('xy', { x: bg && bg.b || 0, y: 255 - (bg && bg.g || 0) }, context);
                      break;
                    case 'g':
                      var br = ui.val('br');
                      colorMap.val('xy', { x: br && br.b || 0, y: 255 - (br && br.r || 0) }, context);
                      break;
                    case 'b':
                      var rg = ui.val('rg');
                      colorMap.val('xy', { x: rg && rg.r || 0, y: 255 - (rg && rg.g || 0) }, context);
                      break;
                  }
                }
                if (context != colorBar)
                {
                  switch (settings.color.mode)
                  {
                    case 'h':
                      colorBar.val('y', 360 - (ui.val('h') || 0), context);
                      break;
                    case 's':
                      var s = ui.val('s');
                      colorBar.val('y', 100 - (s != null ? s : 100), context);
                      break;
                    case 'v':
                      var v = ui.val('v');
                      colorBar.val('y', 100 - (v != null ? v : 100), context);
                      break;
                    case 'r':
                      colorBar.val('y', 255 - (ui.val('r') || 0), context);
                      break;
                    case 'g':
                      colorBar.val('y', 255 - (ui.val('g') || 0), context);
                      break;
                    case 'b':
                      colorBar.val('y', 255 - (ui.val('b') || 0), context);
                      break;
                    case 'a':
                      var a = ui.val('a');
                      colorBar.val('y', 255 - (a != null ? a : 255), context);
                      break;
                  }
                }
              },
            updatePreview =
              function(ui)
              {
                try
                {
                  var all = ui.val('all');
                  activePreview.css({ backgroundColor: all && '#' + all.hex || 'transparent' });
                  setAlpha.call($this, activePreview, all && Math.precision((all.a * 100) / 255, 4) || 0);
                }
                catch (e) { }
              },
            updateMapVisuals =
              function(ui)
              {
                switch (settings.color.mode)
                {
                  case 'h':
                    setBG.call($this, colorMapDiv, new Color({ h: ui.val('h') || 0, s: 100, v: 100 }).val('hex'));
                    break;
                  case 's':
                  case 'a':
                    var s = ui.val('s');
                    setAlpha.call($this, colorMapL2, 100 - (s != null ? s : 100));
                    break;
                  case 'v':
                    var v = ui.val('v');
                    setAlpha.call($this, colorMapL1, v != null ? v : 100);
                    break;
                  case 'r':
                    setAlpha.call($this, colorMapL2, Math.precision((ui.val('r') || 0) / 255 * 100, 4));
                    break;
                  case 'g':
                    setAlpha.call($this, colorMapL2, Math.precision((ui.val('g') || 0) / 255 * 100, 4));
                    break;
                  case 'b':
                    setAlpha.call($this, colorMapL2, Math.precision((ui.val('b') || 0) / 255 * 100));
                    break;
                }
                var a = ui.val('a');
                setAlpha.call($this, colorMapL3, Math.precision(((255 - (a || 0)) * 100) / 255, 4));
              },
            updateBarVisuals =
              function(ui)
              {
                switch (settings.color.mode)
                {
                  case 'h':
                    var a = ui.val('a');
                    setAlpha.call($this, colorBarL5, Math.precision(((255 - (a || 0)) * 100) / 255, 4));
                    break;
                  case 's':
                    var hva = ui.val('hva'),
                        saturatedColor = new Color({ h: hva && hva.h || 0, s: 100, v: hva != null ? hva.v : 100 });
                    setBG.call($this, colorBarDiv, saturatedColor.val('hex'));
                    setAlpha.call($this, colorBarL2, 100 - (hva != null ? hva.v : 100));
                    setAlpha.call($this, colorBarL5, Math.precision(((255 - (hva && hva.a || 0)) * 100) / 255, 4));
                    break;
                  case 'v':
                    var hsa = ui.val('hsa'),
                        valueColor = new Color({ h: hsa && hsa.h || 0, s: hsa != null ? hsa.s : 100, v: 100 });
                    setBG.call($this, colorBarDiv, valueColor.val('hex'));
                    setAlpha.call($this, colorBarL5, Math.precision(((255 - (hsa && hsa.a || 0)) * 100) / 255, 4));
                    break;
                  case 'r':
                  case 'g':
                  case 'b':
                    var hValue = 0, vValue = 0, rgba = ui.val('rgba');
                    if (settings.color.mode == 'r')
                    {
                      hValue = rgba && rgba.b || 0;
                      vValue = rgba && rgba.g || 0;
                    }
                    else if (settings.color.mode == 'g')
                    {
                      hValue = rgba && rgba.b || 0;
                      vValue = rgba && rgba.r || 0;
                    }
                    else if (settings.color.mode == 'b')
                    {
                      hValue = rgba && rgba.r || 0;
                      vValue = rgba && rgba.g || 0;
                    }
                    var middle = vValue > hValue ? hValue : vValue;
                    setAlpha.call($this, colorBarL2, hValue > vValue ? Math.precision(((hValue - vValue) / (255 - vValue)) * 100, 4) : 0);
                    setAlpha.call($this, colorBarL3, vValue > hValue ? Math.precision(((vValue - hValue) / (255 - hValue)) * 100, 4) : 0);
                    setAlpha.call($this, colorBarL4, Math.precision((middle / 255) * 100, 4));
                    setAlpha.call($this, colorBarL5, Math.precision(((255 - (rgba && rgba.a || 0)) * 100) / 255, 4));
                    break;
                  case 'a':
                    var a = ui.val('a');
                    setBG.call($this, colorBarDiv, ui.val('hex') || '000000');
                    setAlpha.call($this, colorBarL5, a != null ? 0 : 100);
                    setAlpha.call($this, colorBarL6, a != null ? 100 : 0);
                    break;
                }
              },
            setBG =
              function(el, c)
              {
                el.css({ backgroundColor: c && c.length == 6 && '#' + c || 'transparent' });
              },
            setImg =
              function(img, src)
              {
                if (isLessThanIE7 && (src.indexOf('AlphaBar.png') != -1 || src.indexOf('Bars.png') != -1 || src.indexOf('Maps.png') != -1))
                {
                  img.attr('pngSrc', src);
                  img.css({ backgroundImage: 'none', filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + src + '\', sizingMethod=\'scale\')' });
                }
                else img.css({ backgroundImage: 'url(\'' + src + '\')' });
              },
            setImgLoc =
              function(img, y)
              {
                img.css({ top: y + 'px' });
              },
            setAlpha =
              function(obj, alpha)
              {
                obj.css({ visibility: alpha > 0 ? 'visible' : 'hidden' });
                if (alpha > 0 && alpha < 100)
                {
                  if (isLessThanIE7)
                  {
                    var src = obj.attr('pngSrc');
                    if (src != null && (src.indexOf('AlphaBar.png') != -1 || src.indexOf('Bars.png') != -1 || src.indexOf('Maps.png') != -1))
                      obj.css({ filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + src + '\', sizingMethod=\'scale\') progid:DXImageTransform.Microsoft.Alpha(opacity=' + alpha + ')' });
                    else obj.css({ opacity: Math.precision(alpha / 100, 4) });
                  }
                  else obj.css({ opacity: Math.precision(alpha / 100, 4) });
                }
                else if (alpha == 0 || alpha == 100)
                {
                  if (isLessThanIE7)
                  {
                    var src = obj.attr('pngSrc');
                    if (src != null && (src.indexOf('AlphaBar.png') != -1 || src.indexOf('Bars.png') != -1 || src.indexOf('Maps.png') != -1))
                      obj.css({ filter: 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + src + '\', sizingMethod=\'scale\')' });
                    else obj.css({ opacity: '' });
                  }
                  else obj.css({ opacity: '' });
                }
              },
            revertColor = // revert color to original color when opened
              function()
              {
                color.active.val('ahex', color.current.val('ahex'));
              },
            commitColor = // commit the color changes
              function()
              {
                color.current.val('ahex', color.active.val('ahex'));
              },
            radioClicked =
              function(e)
              {
                $(this).parents('tbody:first').find('input:radio[value!="'+e.target.value+'"]').removeAttr('checked');
                setColorMode.call($this, e.target.value);
              },
            currentClicked =
              function()
              {
                revertColor.call($this);
              },
            cancelClicked =
              function()
              {
                revertColor.call($this);
                settings.window.expandable && hide.call($this);
                $.isFunction(cancelCallback) && cancelCallback.call($this, color.active, cancelButton);
              },
            okClicked =
              function()
              {
                commitColor.call($this);
                settings.window.expandable && hide.call($this);
                $.isFunction(commitCallback) && commitCallback.call($this, color.active, okButton);
              },
            iconImageClicked =
              function()
              {
                show.call($this);
              },
            currentColorChanged =
              function(ui, context)
              {
                var hex = ui.val('hex');
                currentPreview.css({ backgroundColor: hex && '#' + hex || 'transparent' });
                setAlpha.call($this, currentPreview, Math.precision(((ui.val('a') || 0) * 100) / 255, 4));
              },
            expandableColorChanged =
              function(ui, context)
              {
                var hex = ui.val('hex');
                var va = ui.val('va');
                iconColor.css({ backgroundColor: hex && '#' + hex || 'transparent' });
                setAlpha.call($this, iconAlpha, Math.precision(((255 - (va && va.a || 0)) * 100) / 255, 4));
                if (settings.window.bindToInput&&settings.window.updateInputColor)
                  settings.window.input.css(
                    {
                      backgroundColor: hex && '#' + hex || 'transparent',
                      color: va == null || va.v > 75 ? '#000000' : '#ffffff'
                    });
              },
            moveBarMouseDown =
              function(e)
              {
                var element = settings.window.element, // local copies for YUI compressor
                  page = settings.window.page;
                elementStartX = parseInt(container.css('left'));
                elementStartY = parseInt(container.css('top'));
                pageStartX = e.pageX;
                pageStartY = e.pageY;
                // bind events to document to move window - we will unbind these on mouseup
                $(document).bind('mousemove', documentMouseMove).bind('mouseup', documentMouseUp);
                e.preventDefault(); // prevent attempted dragging of the column
              },
            documentMouseMove =
              function(e)
              {
                container.css({ left: elementStartX - (pageStartX - e.pageX) + 'px', top: elementStartY - (pageStartY - e.pageY) + 'px' });
                if (settings.window.expandable && !$.support.boxModel) container.prev().css({ left: container.css("left"), top: container.css("top") });
                e.stopPropagation();
                e.preventDefault();
                return false;
              },
            documentMouseUp =
              function(e)
              {
                $(document).unbind('mousemove', documentMouseMove).unbind('mouseup', documentMouseUp);
                e.stopPropagation();
                e.preventDefault();
                return false;
              },
            quickPickClicked =
              function(e)
              {
                e.preventDefault();
                e.stopPropagation();
                color.active.val('ahex', $(this).attr('title') || null, e.target);
                return false;
              },
            commitCallback = $.isFunction($arguments[1]) && $arguments[1] || null,
            liveCallback = $.isFunction($arguments[2]) && $arguments[2] || null,
            cancelCallback = $.isFunction($arguments[3]) && $arguments[3] || null,
            show =
              function()
              {
                color.current.val('ahex', color.active.val('ahex'));
                var attachIFrame = function()
                  {
                    if (!settings.window.expandable || $.support.boxModel) return;
                    var table = container.find('table:first');
                    container.before('<iframe/>');
                    container.prev().css({ width: table.width(), height: container.height(), opacity: 0, position: 'absolute', left: container.css("left"), top: container.css("top") });
                  };
                if (settings.window.expandable)
                {
                  $(document.body).children('div.jPicker.Container').css({zIndex:10});
                  container.css({zIndex:20});
                }
                switch (settings.window.effects.type)
                {
                  case 'fade':
                    container.fadeIn(settings.window.effects.speed.show, attachIFrame);
                    break;
                  case 'slide':
                    container.slideDown(settings.window.effects.speed.show, attachIFrame);
                    break;
                  case 'show':
                  default:
                    container.show(settings.window.effects.speed.show, attachIFrame);
                    break;
                }
              },
            hide =
              function()
              {
                var removeIFrame = function()
                  {
                    if (settings.window.expandable) container.css({ zIndex: 10 });
                    if (!settings.window.expandable || $.support.boxModel) return;
                    container.prev().remove();
                  };
                switch (settings.window.effects.type)
                {
                  case 'fade':
                    container.fadeOut(settings.window.effects.speed.hide, removeIFrame);
                    break;
                  case 'slide':
                    container.slideUp(settings.window.effects.speed.hide, removeIFrame);
                    break;
                  case 'show':
                  default:
                    container.hide(settings.window.effects.speed.hide, removeIFrame);
                    break;
                }
              },
            initialize =
              function()
              {
                var win = settings.window,
                    popup = win.expandable ? $($this).next().find('.Container:first') : null;
                container = win.expandable ? $('<div/>') : $($this);
                container.addClass('jPicker Container');
                if (win.expandable) container.hide();
                container.get(0).onselectstart = function(event){ if (event.target.nodeName.toLowerCase() !== 'input') return false; };
                // inject html source code - we are using a single table for this control - I know tables are considered bad, but it takes care of equal height columns and
                // this control really is tabular data, so I believe it is the right move
                var all = color.active.val('all');
                if (win.alphaPrecision < 0) win.alphaPrecision = 0;
                else if (win.alphaPrecision > 2) win.alphaPrecision = 2;
                var controlHtml='<table class="jPicker" cellpadding="0" cellspacing="0"><tbody>' + (win.expandable ? '<tr><td class="Move" colspan="5">&nbsp;</td></tr>' : '') + '<tr><td rowspan="9"><h2 class="Title">' + (win.title || localization.text.title) + '</h2><div class="Map"><span class="Map1">&nbsp;</span><span class="Map2">&nbsp;</span><span class="Map3">&nbsp;</span><img src="' + images.clientPath + images.colorMap.arrow.file + '" class="Arrow"/></div></td><td rowspan="9"><div class="Bar"><span class="Map1">&nbsp;</span><span class="Map2">&nbsp;</span><span class="Map3">&nbsp;</span><span class="Map4">&nbsp;</span><span class="Map5">&nbsp;</span><span class="Map6">&nbsp;</span><img src="' + images.clientPath + images.colorBar.arrow.file + '" class="Arrow"/></div></td><td colspan="2" class="Preview">' + localization.text.newColor + '<div><span class="Active" title="' + localization.tooltips.colors.newColor + '">&nbsp;</span><span class="Current" title="' + localization.tooltips.colors.currentColor + '">&nbsp;</span></div>' + localization.text.currentColor + '</td><td rowspan="9" class="Button"><input type="button" class="Ok" value="' + localization.text.ok + '" title="' + localization.tooltips.buttons.ok + '"/><input type="button" class="Cancel" value="' + localization.text.cancel + '" title="' + localization.tooltips.buttons.cancel + '"/><hr/><div class="Grid">&nbsp;</div></td></tr><tr class="Hue"><td class="Radio"><label title="' + localization.tooltips.hue.radio + '"><input type="radio" value="h"' + (settings.color.mode == 'h' ? ' checked="checked"' : '') + '/>H:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (all != null ? all.h : '') + '" title="' + localization.tooltips.hue.textbox + '"/>&nbsp;&deg;</td></tr><tr class="Saturation"><td class="Radio"><label title="' + localization.tooltips.saturation.radio + '"><input type="radio" value="s"' + (settings.color.mode == 's' ? ' checked="checked"' : '') + '/>S:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (all != null ? all.s : '') + '" title="' + localization.tooltips.saturation.textbox + '"/>&nbsp;%</td></tr><tr class="Value"><td class="Radio"><label title="' + localization.tooltips.value.radio + '"><input type="radio" value="v"' + (settings.color.mode == 'v' ? ' checked="checked"' : '') + '/>V:</label><br/><br/></td><td class="Text"><input type="text" maxlength="3" value="' + (all != null ? all.v : '') + '" title="' + localization.tooltips.value.textbox + '"/>&nbsp;%<br/><br/></td></tr><tr class="Red"><td class="Radio"><label title="' + localization.tooltips.red.radio + '"><input type="radio" value="r"' + (settings.color.mode == 'r' ? ' checked="checked"' : '') + '/>R:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (all != null ? all.r : '') + '" title="' + localization.tooltips.red.textbox + '"/></td></tr><tr class="Green"><td class="Radio"><label title="' + localization.tooltips.green.radio + '"><input type="radio" value="g"' + (settings.color.mode == 'g' ? ' checked="checked"' : '') + '/>G:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (all != null ? all.g : '') + '" title="' + localization.tooltips.green.textbox + '"/></td></tr><tr class="Blue"><td class="Radio"><label title="' + localization.tooltips.blue.radio + '"><input type="radio" value="b"' + (settings.color.mode == 'b' ? ' checked="checked"' : '') + '/>B:</label></td><td class="Text"><input type="text" maxlength="3" value="' + (all != null ? all.b : '') + '" title="' + localization.tooltips.blue.textbox + '"/></td></tr><tr class="Alpha"><td class="Radio">' + (win.alphaSupport ? '<label title="' + localization.tooltips.alpha.radio + '"><input type="radio" value="a"' + (settings.color.mode == 'a' ? ' checked="checked"' : '') + '/>A:</label>' : '&nbsp;') + '</td><td class="Text">' + (win.alphaSupport ? '<input type="text" maxlength="' + (3 + win.alphaPrecision) + '" value="' + (all != null ? Math.precision((all.a * 100) / 255, win.alphaPrecision) : '') + '" title="' + localization.tooltips.alpha.textbox + '"/>&nbsp;%' : '&nbsp;') + '</td></tr><tr class="Hex"><td colspan="2" class="Text"><label title="' + localization.tooltips.hex.textbox + '">#:<input type="text" maxlength="6" class="Hex" value="' + (all != null ? all.hex : '') + '"/></label>' + (win.alphaSupport ? '<input type="text" maxlength="2" class="AHex" value="' + (all != null ? all.ahex.substring(6) : '') + '" title="' + localization.tooltips.hex.alpha + '"/></td>' : '&nbsp;') + '</tr></tbody></table>';
                if (win.expandable)
                {
                  container.html(controlHtml);
                  if($(document.body).children('div.jPicker.Container').length==0)$(document.body).prepend(container);
                  else $(document.body).children('div.jPicker.Container:last').after(container);
                  container.mousedown(
                    function()
                    {
                      $(document.body).children('div.jPicker.Container').css({zIndex:10});
                      container.css({zIndex:20});
                    });
                  container.css( // positions must be set and display set to absolute before source code injection or IE will size the container to fit the window
                    {
                      left:
                        win.position.x == 'left' ? (popup.offset().left - 530 - (win.position.y == 'center' ? 25 : 0)) + 'px' :
                        win.position.x == 'center' ? (popup.offset().left - 260) + 'px' :
                        win.position.x == 'right' ? (popup.offset().left - 10 + (win.position.y == 'center' ? 25 : 0)) + 'px' :
                        win.position.x == 'screenCenter' ? (($(document).width() >> 1) - 260) + 'px' : (popup.offset().left + parseInt(win.position.x)) + 'px',
                      position: 'absolute',
                      top: win.position.y == 'top' ? (popup.offset().top - 312) + 'px' :
                           win.position.y == 'center' ? (popup.offset().top - 156) + 'px' :
                           win.position.y == 'bottom' ? (popup.offset().top + 25) + 'px' : (popup.offset().top + parseInt(win.position.y)) + 'px'
                    });
                }
                else
                {
                  container = $($this);
                  container.html(controlHtml);
                }
                // initialize the objects to the source code just injected
                var tbody = container.find('tbody:first');
                colorMapDiv = tbody.find('div.Map:first');
                colorBarDiv = tbody.find('div.Bar:first');
                var MapMaps = colorMapDiv.find('span'),
                    BarMaps = colorBarDiv.find('span');
                colorMapL1 = MapMaps.filter('.Map1:first');
                colorMapL2 = MapMaps.filter('.Map2:first');
                colorMapL3 = MapMaps.filter('.Map3:first');
                colorBarL1 = BarMaps.filter('.Map1:first');
                colorBarL2 = BarMaps.filter('.Map2:first');
                colorBarL3 = BarMaps.filter('.Map3:first');
                colorBarL4 = BarMaps.filter('.Map4:first');
                colorBarL5 = BarMaps.filter('.Map5:first');
                colorBarL6 = BarMaps.filter('.Map6:first');
                // create color pickers and maps
                colorMap = new Slider(colorMapDiv,
                  {
                    map:
                    {
                      width: images.colorMap.width,
                      height: images.colorMap.height
                    },
                    arrow:
                    {
                      image: images.clientPath + images.colorMap.arrow.file,
                      width: images.colorMap.arrow.width,
                      height: images.colorMap.arrow.height
                    }
                  });
                colorMap.bind(mapValueChanged);
                colorBar = new Slider(colorBarDiv,
                  {
                    map:
                    {
                      width: images.colorBar.width,
                      height: images.colorBar.height
                    },
                    arrow:
                    {
                      image: images.clientPath + images.colorBar.arrow.file,
                      width: images.colorBar.arrow.width,
                      height: images.colorBar.arrow.height
                    }
                  });
                colorBar.bind(colorBarValueChanged);
                colorPicker = new ColorValuePicker(tbody, color.active, win.expandable && win.bindToInput ? win.input : null, win.alphaPrecision);
                var hex = all != null ? all.hex : null,
                    preview = tbody.find('.Preview'),
                    button = tbody.find('.Button');
                activePreview = preview.find('.Active:first').css({ backgroundColor: hex && '#' + hex || 'transparent' });
                currentPreview = preview.find('.Current:first').css({ backgroundColor: hex && '#' + hex || 'transparent' }).bind('click', currentClicked);
                setAlpha.call($this, currentPreview, Math.precision(color.current.val('a') * 100) / 255, 4);
                okButton = button.find('.Ok:first').bind('click', okClicked);
                cancelButton = button.find('.Cancel:first').bind('click', cancelClicked);
                grid = button.find('.Grid:first');
                setTimeout(
                  function()
                  {
                    setImg.call($this, colorMapL1, images.clientPath + 'Maps.png');
                    setImg.call($this, colorMapL2, images.clientPath + 'Maps.png');
                    setImg.call($this, colorMapL3, images.clientPath + 'map-opacity.png');
                    setImg.call($this, colorBarL1, images.clientPath + 'Bars.png');
                    setImg.call($this, colorBarL2, images.clientPath + 'Bars.png');
                    setImg.call($this, colorBarL3, images.clientPath + 'Bars.png');
                    setImg.call($this, colorBarL4, images.clientPath + 'Bars.png');
                    setImg.call($this, colorBarL5, images.clientPath + 'bar-opacity.png');
                    setImg.call($this, colorBarL6, images.clientPath + 'AlphaBar.png');
                    setImg.call($this, preview.find('div:first'), images.clientPath + 'preview-opacity.png');
                  }, 0);
                tbody.find('td.Radio input').bind('click', radioClicked);
                // initialize quick list
                if (color.quickList && color.quickList.length > 0)
                {
                  var html = '';
                  for (i = 0; i < color.quickList.length; i++)
                  {
                    /* if default colors are hex strings, change them to color objects */
                    if ((typeof (color.quickList[i])).toString().toLowerCase() == 'string') color.quickList[i] = new Color({ hex: color.quickList[i] });
                    var alpha = color.quickList[i].val('a');
                    var ahex = color.quickList[i].val('ahex');
                    if (!win.alphaSupport && ahex) ahex = ahex.substring(0, 6) + 'ff';
                    var quickHex = color.quickList[i].val('hex');
                    if(!ahex) ahex = "00000000";
                    html+='<span class="QuickColor"' + (ahex && ' title="#' + ahex + '"' || 'none') + ' style="background-color:' + (quickHex && '#' + quickHex || '') + ';' + (quickHex ? '' : 'background-image:url(' + images.clientPath + 'NoColor.png)') + (win.alphaSupport && alpha && alpha < 255 ? ';opacity:' + Math.precision(alpha / 255, 4) + ';filter:Alpha(opacity=' + Math.precision(alpha / 2.55, 4) + ')' : '') + '">&nbsp;</span>';
                  }
                  setImg.call($this, grid, images.clientPath + 'bar-opacity.png');
                  grid.html(html);
                  grid.find('.QuickColor').click(quickPickClicked);
                }
                setColorMode.call($this, settings.color.mode);
                color.active.bind(activeColorChanged);
                $.isFunction(liveCallback) && color.active.bind(liveCallback);
                color.current.bind(currentColorChanged);
                // bind to input
                if (win.expandable)
                {
                  $this.icon = popup.parents('.Icon:first');
                  iconColor = $this.icon.find('.Color:first').css({ backgroundColor: hex && '#' + hex || 'transparent' });
                  iconAlpha = $this.icon.find('.Alpha:first');
                  setImg.call($this, iconAlpha, images.clientPath + 'bar-opacity.png');
                  setAlpha.call($this, iconAlpha, Math.precision(((255 - (all != null ? all.a : 0)) * 100) / 255, 4));
                  iconImage = $this.icon.find('.Image:first').css(
                    {
                      backgroundImage: 'url(\'' + images.clientPath + images.picker.file + '\')'
                    }).bind('click', iconImageClicked);
                  if (win.bindToInput&&win.updateInputColor)
                    win.input.css(
                      {
                        backgroundColor: hex && '#' + hex || 'transparent',
                        color: all == null || all.v > 75 ? '#000000' : '#ffffff'
                      });
                  moveBar = tbody.find('.Move:first').bind('mousedown', moveBarMouseDown);
                  color.active.bind(expandableColorChanged);
                }
                else show.call($this);
              },
            destroy =
              function()
              {
                container.find('td.Radio input').unbind('click', radioClicked);
                currentPreview.unbind('click', currentClicked);
                cancelButton.unbind('click', cancelClicked);
                okButton.unbind('click', okClicked);
                if (settings.window.expandable)
                {
                  iconImage.unbind('click', iconImageClicked);
                  moveBar.unbind('mousedown', moveBarMouseDown);
                  $this.icon = null;
                }
                container.find('.QuickColor').unbind('click', quickPickClicked);
                colorMapDiv = null;
                colorBarDiv = null;
                colorMapL1 = null;
                colorMapL2 = null;
                colorMapL3 = null;
                colorBarL1 = null;
                colorBarL2 = null;
                colorBarL3 = null;
                colorBarL4 = null;
                colorBarL5 = null;
                colorBarL6 = null;
                colorMap.destroy();
                colorMap = null;
                colorBar.destroy();
                colorBar = null;
                colorPicker.destroy();
                colorPicker = null;
                activePreview = null;
                currentPreview = null;
                okButton = null;
                cancelButton = null;
                grid = null;
                commitCallback = null;
                cancelCallback = null;
                liveCallback = null;
                container.html('');
                for (i = 0; i < List.length; i++) if (List[i] == $this) List.splice(i, 1);
              },
            images = settings.images, // local copies for YUI compressor
            localization = settings.localization,
            color =
              {
                active: (typeof(settings.color.active)).toString().toLowerCase() == 'string' ? new Color({ ahex: !settings.window.alphaSupport && settings.color.active ? settings.color.active.substring(0, 6) + 'ff' : settings.color.active }) : new Color({ ahex: !settings.window.alphaSupport && settings.color.active.val('ahex') ? settings.color.active.val('ahex').substring(0, 6) + 'ff' : settings.color.active.val('ahex') }),
                current: (typeof(settings.color.active)).toString().toLowerCase() == 'string' ? new Color({ ahex: !settings.window.alphaSupport && settings.color.active ? settings.color.active.substring(0, 6) + 'ff' : settings.color.active }) : new Color({ ahex: !settings.window.alphaSupport && settings.color.active.val('ahex') ? settings.color.active.val('ahex').substring(0, 6) + 'ff' : settings.color.active.val('ahex') }),
                quickList: settings.color.quickList
              };
          $.extend(true, $this, // public properties, methods, and callbacks
            {
              commitCallback: commitCallback, // commitCallback function can be overridden to return the selected color to a method you specify when the user clicks "OK"
              liveCallback: liveCallback, // liveCallback function can be overridden to return the selected color to a method you specify in live mode (continuous update)
              cancelCallback: cancelCallback, // cancelCallback function can be overridden to a method you specify when the user clicks "Cancel"
              color: color,
              show: show,
              hide: hide,
              destroy: destroy // destroys this control entirely, removing all events and objects, and removing itself from the List
            });
          List.push($this);
          setTimeout(
            function()
            {
              initialize.call($this);
            }, 0);
        });
    };
  $.fn.jPicker.defaults = /* jPicker defaults - you can change anything in this section (such as the clientPath to your images) without fear of breaking the program */
      {
      window:
        {
          title: null, /* any title for the jPicker window itself - displays "Drag Markers To Pick A Color" if left null */
          effects:
          {
            type: 'slide', /* effect used to show/hide an expandable picker. Acceptable values "slide", "show", "fade" */
            speed:
            {
              show: 'slow', /* duration of "show" effect. Acceptable values are "fast", "slow", or time in ms */
              hide: 'fast' /* duration of "hide" effect. Acceptable values are "fast", "slow", or time in ms */
            }
          },
          position:
          {
            x: 'screenCenter', /* acceptable values "left", "center", "right", "screenCenter", or relative px value */
            y: 'top' /* acceptable values "top", "bottom", "center", or relative px value */
          },
          expandable: false, /* default to large static picker - set to true to make an expandable picker (small icon with popup) - set automatically when binded to input element */
          liveUpdate: true, /* set false if you want the user to have to click "OK" before the binded input box updates values (always "true" for expandable picker) */
          alphaSupport: false, /* set to true to enable alpha picking */
          alphaPrecision: 0, /* set decimal precision for alpha percentage display - hex codes do not map directly to percentage integers - range 0-2 */
          updateInputColor: true /* set to false to prevent binded input colors from changing */
        },
      color:
        {
          mode: 'h', /* acceptabled values "h" (hue), "s" (saturation), "v" (value), "r" (red), "g" (green), "b" (blue), "a" (alpha) */
          active: new Color({ ahex: '#ffcc00ff' }), /* acceptable values are any declared $.jPicker.Color object or string HEX value (e.g. #ffc000) WITH OR WITHOUT the "#" prefix */
          quickList: /* the quick pick color list */
            [
              new Color({ h: 360, s: 33, v: 100 }), /* acceptable values are any declared $.jPicker.Color object or string HEX value (e.g. #ffc000) WITH OR WITHOUT the "#" prefix */
              new Color({ h: 360, s: 66, v: 100 }),
              new Color({ h: 360, s: 100, v: 100 }),
              new Color({ h: 360, s: 100, v: 75 }),
              new Color({ h: 360, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 100 }),
              new Color({ h: 30, s: 33, v: 100 }),
              new Color({ h: 30, s: 66, v: 100 }),
              new Color({ h: 30, s: 100, v: 100 }),
              new Color({ h: 30, s: 100, v: 75 }),
              new Color({ h: 30, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 90 }),
              new Color({ h: 60, s: 33, v: 100 }),
              new Color({ h: 60, s: 66, v: 100 }),
              new Color({ h: 60, s: 100, v: 100 }),
              new Color({ h: 60, s: 100, v: 75 }),
              new Color({ h: 60, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 80 }),
              new Color({ h: 90, s: 33, v: 100 }),
              new Color({ h: 90, s: 66, v: 100 }),
              new Color({ h: 90, s: 100, v: 100 }),
              new Color({ h: 90, s: 100, v: 75 }),
              new Color({ h: 90, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 70 }),
              new Color({ h: 120, s: 33, v: 100 }),
              new Color({ h: 120, s: 66, v: 100 }),
              new Color({ h: 120, s: 100, v: 100 }),
              new Color({ h: 120, s: 100, v: 75 }),
              new Color({ h: 120, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 60 }),
              new Color({ h: 150, s: 33, v: 100 }),
              new Color({ h: 150, s: 66, v: 100 }),
              new Color({ h: 150, s: 100, v: 100 }),
              new Color({ h: 150, s: 100, v: 75 }),
              new Color({ h: 150, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 50 }),
              new Color({ h: 180, s: 33, v: 100 }),
              new Color({ h: 180, s: 66, v: 100 }),
              new Color({ h: 180, s: 100, v: 100 }),
              new Color({ h: 180, s: 100, v: 75 }),
              new Color({ h: 180, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 40 }),
              new Color({ h: 210, s: 33, v: 100 }),
              new Color({ h: 210, s: 66, v: 100 }),
              new Color({ h: 210, s: 100, v: 100 }),
              new Color({ h: 210, s: 100, v: 75 }),
              new Color({ h: 210, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 30 }),
              new Color({ h: 240, s: 33, v: 100 }),
              new Color({ h: 240, s: 66, v: 100 }),
              new Color({ h: 240, s: 100, v: 100 }),
              new Color({ h: 240, s: 100, v: 75 }),
              new Color({ h: 240, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 20 }),
              new Color({ h: 270, s: 33, v: 100 }),
              new Color({ h: 270, s: 66, v: 100 }),
              new Color({ h: 270, s: 100, v: 100 }),
              new Color({ h: 270, s: 100, v: 75 }),
              new Color({ h: 270, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 10 }),
              new Color({ h: 300, s: 33, v: 100 }),
              new Color({ h: 300, s: 66, v: 100 }),
              new Color({ h: 300, s: 100, v: 100 }),
              new Color({ h: 300, s: 100, v: 75 }),
              new Color({ h: 300, s: 100, v: 50 }),
              new Color({ h: 180, s: 0, v: 0 }),
              new Color({ h: 330, s: 33, v: 100 }),
              new Color({ h: 330, s: 66, v: 100 }),
              new Color({ h: 330, s: 100, v: 100 }),
              new Color({ h: 330, s: 100, v: 75 }),
              new Color({ h: 330, s: 100, v: 50 }),
              new Color()
            ]
        },
      images:
        {
          clientPath: '/jPicker/images/', /* Path to image files */
          colorMap:
          {
            width: 256,
            height: 256,
            arrow:
            {
              file: 'mappoint.gif', /* ColorMap arrow icon */
              width: 15,
              height: 15
            }
          },
          colorBar:
          {
            width: 20,
            height: 256,
            arrow:
            {
              file: 'rangearrows.gif', /* ColorBar arrow icon */
              width: 20,
              height: 7
            }
          },
          picker:
          {
            file: 'picker.gif', /* Color Picker icon */
            width: 25,
            height: 24
          }
        },
      localization: /* alter these to change the text presented by the picker (e.g. different language) */
        {
          text:
          {
            title: 'Drag Markers To Pick A Color',
            newColor: 'new',
            currentColor: 'current',
            ok: 'OK',
            cancel: 'Cancel'
          },
          tooltips:
          {
            colors:
            {
              newColor: 'New Color - Press &ldquo;OK&rdquo; To Commit',
              currentColor: 'Click To Revert To Original Color'
            },
            buttons:
            {
              ok: 'Commit To This Color Selection',
              cancel: 'Cancel And Revert To Original Color'
            },
            hue:
            {
              radio: 'Set To &ldquo;Hue&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Hue&rdquo; Value (0-360&deg;)'
            },
            saturation:
            {
              radio: 'Set To &ldquo;Saturation&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Saturation&rdquo; Value (0-100%)'
            },
            value:
            {
              radio: 'Set To &ldquo;Value&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Value&rdquo; Value (0-100%)'
            },
            red:
            {
              radio: 'Set To &ldquo;Red&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Red&rdquo; Value (0-255)'
            },
            green:
            {
              radio: 'Set To &ldquo;Green&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Green&rdquo; Value (0-255)'
            },
            blue:
            {
              radio: 'Set To &ldquo;Blue&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Blue&rdquo; Value (0-255)'
            },
            alpha:
            {
              radio: 'Set To &ldquo;Alpha&rdquo; Color Mode',
              textbox: 'Enter A &ldquo;Alpha&rdquo; Value (0-100)'
            },
            hex:
            {
              textbox: 'Enter A &ldquo;Hex&rdquo; Color Value (#000000-#ffffff)',
              alpha: 'Enter A &ldquo;Alpha&rdquo; Value (#00-#ff)'
            }
          }
        }
    };
})(jQuery, '1.1.6');










