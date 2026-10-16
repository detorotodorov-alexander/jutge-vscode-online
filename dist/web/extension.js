"use strict";var fm=Object.create;var Lt=Object.defineProperty;var hm=Object.getOwnPropertyDescriptor;var bm=Object.getOwnPropertyNames;var ym=Object.getPrototypeOf,vm=Object.prototype.hasOwnProperty;var m=(r,e)=>()=>{try{return e||r((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}},wm=(r,e)=>{for(var t in e)Lt(r,t,{get:e[t],enumerable:!0})},Zo=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of bm(e))!vm.call(r,s)&&s!==t&&Lt(r,s,{get:()=>e[s],enumerable:!(n=hm(e,s))||n.enumerable});return r};var x=(r,e,t)=>(t=r!=null?fm(ym(r)):{},Zo(e||!r||!r.__esModule?Lt(t,"default",{value:r,enumerable:!0}):t,r)),xm=r=>Zo(Lt({},"__esModule",{value:!0}),r);var ts=m((By,ni)=>{"use strict";var ri=Object.prototype.toString;ni.exports=function(e){var t=ri.call(e),n=t==="[object Arguments]";return n||(n=t!=="[object Array]"&&e!==null&&typeof e=="object"&&typeof e.length=="number"&&e.length>=0&&ri.call(e.callee)==="[object Function]"),n}});var mi=m((jy,di)=>{"use strict";var ci;Object.keys||(tt=Object.prototype.hasOwnProperty,rs=Object.prototype.toString,si=ts(),ns=Object.prototype.propertyIsEnumerable,oi=!ns.call({toString:null},"toString"),ii=ns.call(function(){},"prototype"),rt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],Bt=function(r){var e=r.constructor;return e&&e.prototype===r},ai={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},li=(function(){if(typeof window>"u")return!1;for(var r in window)try{if(!ai["$"+r]&&tt.call(window,r)&&window[r]!==null&&typeof window[r]=="object")try{Bt(window[r])}catch{return!0}}catch{return!0}return!1})(),ui=function(r){if(typeof window>"u"||!li)return Bt(r);try{return Bt(r)}catch{return!1}},ci=function(e){var t=e!==null&&typeof e=="object",n=rs.call(e)==="[object Function]",s=si(e),o=t&&rs.call(e)==="[object String]",i=[];if(!t&&!n&&!s)throw new TypeError("Object.keys called on a non-object");var a=ii&&n;if(o&&e.length>0&&!tt.call(e,0))for(var l=0;l<e.length;++l)i.push(String(l));if(s&&e.length>0)for(var u=0;u<e.length;++u)i.push(String(u));else for(var d in e)!(a&&d==="prototype")&&tt.call(e,d)&&i.push(String(d));if(oi)for(var c=ui(e),p=0;p<rt.length;++p)!(c&&rt[p]==="constructor")&&tt.call(e,rt[p])&&i.push(rt[p]);return i});var tt,rs,si,ns,oi,ii,rt,Bt,ai,li,ui;di.exports=ci});var Nt=m((Ny,fi)=>{"use strict";var Pm=Array.prototype.slice,Sm=ts(),pi=Object.keys,jt=pi?function(e){return pi(e)}:mi(),gi=Object.keys;jt.shim=function(){if(Object.keys){var e=(function(){var t=Object.keys(arguments);return t&&t.length===arguments.length})(1,2);e||(Object.keys=function(n){return Sm(n)?gi(Pm.call(n)):gi(n)})}else Object.keys=jt;return Object.keys||jt};fi.exports=jt});var nt=m((qy,hi)=>{"use strict";var qt=Object.defineProperty||!1;if(qt)try{qt({},"a",{value:1})}catch{qt=!1}hi.exports=qt});var Wt=m((Wy,bi)=>{"use strict";bi.exports=SyntaxError});var F=m((Vy,yi)=>{"use strict";yi.exports=TypeError});var wi=m((Jy,vi)=>{"use strict";vi.exports=Object.getOwnPropertyDescriptor});var de=m((Hy,xi)=>{"use strict";var Vt=wi();if(Vt)try{Vt([],"length")}catch{Vt=null}xi.exports=Vt});var Jt=m((Gy,Ei)=>{"use strict";var Pi=nt(),Em=Wt(),Be=F(),Si=de();Ei.exports=function(e,t,n){if(!e||typeof e!="object"&&typeof e!="function")throw new Be("`obj` must be an object or a function`");if(typeof t!="string"&&typeof t!="symbol")throw new Be("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new Be("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new Be("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new Be("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new Be("`loose`, if provided, must be a boolean");var s=arguments.length>3?arguments[3]:null,o=arguments.length>4?arguments[4]:null,i=arguments.length>5?arguments[5]:null,a=arguments.length>6?arguments[6]:!1,l=!!Si&&Si(e,t);if(Pi)Pi(e,t,{configurable:i===null&&l?l.configurable:!i,enumerable:s===null&&l?l.enumerable:!s,value:n,writable:o===null&&l?l.writable:!o});else if(a||!s&&!o&&!i)e[t]=n;else throw new Em("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")}});var Ht=m((zy,Ti)=>{"use strict";var ss=nt(),_i=function(){return!!ss};_i.hasArrayLengthDefineBug=function(){if(!ss)return null;try{return ss([],"length",{value:1}).length!==1}catch{return!0}};Ti.exports=_i});var me=m((Ky,ki)=>{"use strict";var _m=Nt(),Tm=typeof Symbol=="function"&&typeof Symbol("foo")=="symbol",Cm=Object.prototype.toString,Am=Array.prototype.concat,Ci=Jt(),Im=function(r){return typeof r=="function"&&Cm.call(r)==="[object Function]"},Ai=Ht()(),km=function(r,e,t,n){if(e in r){if(n===!0){if(r[e]===t)return}else if(!Im(n)||!n())return}Ai?Ci(r,e,t,!0):Ci(r,e,t)},Ii=function(r,e){var t=arguments.length>2?arguments[2]:{},n=_m(e);Tm&&(n=Am.call(n,Object.getOwnPropertySymbols(e)));for(var s=0;s<n.length;s+=1)km(r,n[s],e[n[s]],t[n[s]])};Ii.supportsDescriptors=!!Ai;ki.exports=Ii});var Gt=m((Yy,Di)=>{"use strict";Di.exports=Object});var os=m((Qy,Ri)=>{"use strict";Ri.exports=Error});var $i=m((Zy,Oi)=>{"use strict";Oi.exports=EvalError});var Li=m((Xy,Mi)=>{"use strict";Mi.exports=RangeError});var Fi=m((ev,Ui)=>{"use strict";Ui.exports=ReferenceError});var ji=m((tv,Bi)=>{"use strict";Bi.exports=URIError});var qi=m((rv,Ni)=>{"use strict";Ni.exports=Math.abs});var Vi=m((nv,Wi)=>{"use strict";Wi.exports=Math.floor});var Hi=m((sv,Ji)=>{"use strict";Ji.exports=Math.max});var zi=m((ov,Gi)=>{"use strict";Gi.exports=Math.min});var Yi=m((iv,Ki)=>{"use strict";Ki.exports=Math.pow});var Zi=m((av,Qi)=>{"use strict";Qi.exports=Math.round});var ea=m((lv,Xi)=>{"use strict";Xi.exports=Number.isNaN||function(e){return e!==e}});var ra=m((uv,ta)=>{"use strict";var Dm=ea();ta.exports=function(e){return Dm(e)||e===0?e:e<0?-1:1}});var st=m((cv,na)=>{"use strict";na.exports=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},t=Symbol("test"),n=Object(t);if(typeof t=="string"||Object.prototype.toString.call(t)!=="[object Symbol]"||Object.prototype.toString.call(n)!=="[object Symbol]")return!1;var s=42;e[t]=s;for(var o in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var i=Object.getOwnPropertySymbols(e);if(i.length!==1||i[0]!==t||!Object.prototype.propertyIsEnumerable.call(e,t))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var a=Object.getOwnPropertyDescriptor(e,t);if(a.value!==s||a.enumerable!==!0)return!1}return!0}});var zt=m((dv,oa)=>{"use strict";var sa=typeof Symbol<"u"&&Symbol,Rm=st();oa.exports=function(){return typeof sa!="function"||typeof Symbol!="function"||typeof sa("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:Rm()}});var is=m((mv,ia)=>{"use strict";ia.exports=typeof Reflect<"u"&&Reflect.getPrototypeOf||null});var as=m((pv,aa)=>{"use strict";var Om=Gt();aa.exports=Om.getPrototypeOf||null});var ca=m((gv,ua)=>{"use strict";var $m="Function.prototype.bind called on incompatible ",Mm=Object.prototype.toString,Lm=Math.max,Um="[object Function]",la=function(e,t){for(var n=[],s=0;s<e.length;s+=1)n[s]=e[s];for(var o=0;o<t.length;o+=1)n[o+e.length]=t[o];return n},Fm=function(e,t){for(var n=[],s=t||0,o=0;s<e.length;s+=1,o+=1)n[o]=e[s];return n},Bm=function(r,e){for(var t="",n=0;n<r.length;n+=1)t+=r[n],n+1<r.length&&(t+=e);return t};ua.exports=function(e){var t=this;if(typeof t!="function"||Mm.apply(t)!==Um)throw new TypeError($m+t);for(var n=Fm(arguments,1),s,o=function(){if(this instanceof s){var d=t.apply(this,la(n,arguments));return Object(d)===d?d:this}return t.apply(e,la(n,arguments))},i=Lm(0,t.length-n.length),a=[],l=0;l<i;l++)a[l]="$"+l;if(s=Function("binder","return function ("+Bm(a,",")+"){ return binder.apply(this,arguments); }")(o),t.prototype){var u=function(){};u.prototype=t.prototype,s.prototype=new u,u.prototype=null}return s}});var je=m((fv,da)=>{"use strict";var jm=ca();da.exports=Function.prototype.bind||jm});var Kt=m((hv,ma)=>{"use strict";ma.exports=Function.prototype.call});var Yt=m((bv,pa)=>{"use strict";pa.exports=Function.prototype.apply});var fa=m((yv,ga)=>{"use strict";ga.exports=typeof Reflect<"u"&&Reflect&&Reflect.apply});var ls=m((vv,ha)=>{"use strict";var Nm=je(),qm=Yt(),Wm=Kt(),Vm=fa();ha.exports=Vm||Nm.call(Wm,qm)});var Qt=m((wv,ba)=>{"use strict";var Jm=je(),Hm=F(),Gm=Kt(),zm=ls();ba.exports=function(e){if(e.length<1||typeof e[0]!="function")throw new Hm("a function is required");return zm(Jm,Gm,e)}});var Sa=m((xv,Pa)=>{"use strict";var Km=Qt(),ya=de(),wa;try{wa=[].__proto__===Array.prototype}catch(r){if(!r||typeof r!="object"||!("code"in r)||r.code!=="ERR_PROTO_ACCESS")throw r}var us=!!wa&&ya&&ya(Object.prototype,"__proto__"),xa=Object,va=xa.getPrototypeOf;Pa.exports=us&&typeof us.get=="function"?Km([us.get]):typeof va=="function"?function(e){return va(e==null?e:xa(e))}:!1});var Zt=m((Pv,Ca)=>{"use strict";var Ea=is(),_a=as(),Ta=Sa();Ca.exports=Ea?function(e){return Ea(e)}:_a?function(e){if(!e||typeof e!="object"&&typeof e!="function")throw new TypeError("getProto: not an object");return _a(e)}:Ta?function(e){return Ta(e)}:null});var Xt=m((Sv,Aa)=>{"use strict";var Ym=Function.prototype.call,Qm=Object.prototype.hasOwnProperty,Zm=je();Aa.exports=Zm.call(Ym,Qm)});var K=m((Ev,$a)=>{"use strict";var y,Xm=Gt(),ep=os(),tp=$i(),rp=Li(),np=Fi(),Ve=Wt(),We=F(),sp=ji(),op=qi(),ip=Vi(),ap=Hi(),lp=zi(),up=Yi(),cp=Zi(),dp=ra(),Ra=Function,cs=function(r){try{return Ra('"use strict"; return ('+r+").constructor;")()}catch{}},ot=de(),mp=nt(),ds=function(){throw new We},pp=ot?(function(){try{return arguments.callee,ds}catch{try{return ot(arguments,"callee").get}catch{return ds}}})():ds,Ne=zt()(),I=Zt(),gp=as(),fp=is(),Oa=Yt(),it=Kt(),qe={},hp=typeof Uint8Array>"u"||!I?y:I(Uint8Array),Pe={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?y:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?y:ArrayBuffer,"%ArrayIteratorPrototype%":Ne&&I?I([][Symbol.iterator]()):y,"%AsyncFromSyncIteratorPrototype%":y,"%AsyncFunction%":qe,"%AsyncGenerator%":qe,"%AsyncGeneratorFunction%":qe,"%AsyncIteratorPrototype%":qe,"%Atomics%":typeof Atomics>"u"?y:Atomics,"%BigInt%":typeof BigInt>"u"?y:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?y:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?y:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?y:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":ep,"%eval%":eval,"%EvalError%":tp,"%Float16Array%":typeof Float16Array>"u"?y:Float16Array,"%Float32Array%":typeof Float32Array>"u"?y:Float32Array,"%Float64Array%":typeof Float64Array>"u"?y:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?y:FinalizationRegistry,"%Function%":Ra,"%GeneratorFunction%":qe,"%Int8Array%":typeof Int8Array>"u"?y:Int8Array,"%Int16Array%":typeof Int16Array>"u"?y:Int16Array,"%Int32Array%":typeof Int32Array>"u"?y:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":Ne&&I?I(I([][Symbol.iterator]())):y,"%JSON%":typeof JSON=="object"?JSON:y,"%Map%":typeof Map>"u"?y:Map,"%MapIteratorPrototype%":typeof Map>"u"||!Ne||!I?y:I(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Xm,"%Object.getOwnPropertyDescriptor%":ot,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?y:Promise,"%Proxy%":typeof Proxy>"u"?y:Proxy,"%RangeError%":rp,"%ReferenceError%":np,"%Reflect%":typeof Reflect>"u"?y:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?y:Set,"%SetIteratorPrototype%":typeof Set>"u"||!Ne||!I?y:I(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?y:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":Ne&&I?I(""[Symbol.iterator]()):y,"%Symbol%":Ne?Symbol:y,"%SyntaxError%":Ve,"%ThrowTypeError%":pp,"%TypedArray%":hp,"%TypeError%":We,"%Uint8Array%":typeof Uint8Array>"u"?y:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?y:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?y:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?y:Uint32Array,"%URIError%":sp,"%WeakMap%":typeof WeakMap>"u"?y:WeakMap,"%WeakRef%":typeof WeakRef>"u"?y:WeakRef,"%WeakSet%":typeof WeakSet>"u"?y:WeakSet,"%Function.prototype.call%":it,"%Function.prototype.apply%":Oa,"%Object.defineProperty%":mp,"%Object.getPrototypeOf%":gp,"%Math.abs%":op,"%Math.floor%":ip,"%Math.max%":ap,"%Math.min%":lp,"%Math.pow%":up,"%Math.round%":cp,"%Math.sign%":dp,"%Reflect.getPrototypeOf%":fp};if(I)try{null.error}catch(r){Ia=I(I(r)),Pe["%Error.prototype%"]=Ia}var Ia,bp=function r(e){var t;if(e==="%AsyncFunction%")t=cs("async function () {}");else if(e==="%GeneratorFunction%")t=cs("function* () {}");else if(e==="%AsyncGeneratorFunction%")t=cs("async function* () {}");else if(e==="%AsyncGenerator%"){var n=r("%AsyncGeneratorFunction%");n&&(t=n.prototype)}else if(e==="%AsyncIteratorPrototype%"){var s=r("%AsyncGenerator%");s&&I&&(t=I(s.prototype))}return Pe[e]=t,t},ka={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},at=je(),er=Xt(),yp=at.call(it,Array.prototype.concat),vp=at.call(Oa,Array.prototype.splice),Da=at.call(it,String.prototype.replace),tr=at.call(it,String.prototype.slice),wp=at.call(it,RegExp.prototype.exec),xp=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,Pp=/\\(\\)?/g,Sp=function(e){var t=tr(e,0,1),n=tr(e,-1);if(t==="%"&&n!=="%")throw new Ve("invalid intrinsic syntax, expected closing `%`");if(n==="%"&&t!=="%")throw new Ve("invalid intrinsic syntax, expected opening `%`");var s=[];return Da(e,xp,function(o,i,a,l){s[s.length]=a?Da(l,Pp,"$1"):i||o}),s},Ep=function(e,t){var n=e,s;if(er(ka,n)&&(s=ka[n],n="%"+s[0]+"%"),er(Pe,n)){var o=Pe[n];if(o===qe&&(o=bp(n)),typeof o>"u"&&!t)throw new We("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:s,name:n,value:o}}throw new Ve("intrinsic "+e+" does not exist!")};$a.exports=function(e,t){if(typeof e!="string"||e.length===0)throw new We("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof t!="boolean")throw new We('"allowMissing" argument must be a boolean');if(wp(/^%?[^%]*%?$/,e)===null)throw new Ve("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var n=Sp(e),s=n.length>0?n[0]:"",o=Ep("%"+s+"%",t),i=o.name,a=o.value,l=!1,u=o.alias;u&&(s=u[0],vp(n,yp([0,1],u)));for(var d=1,c=!0;d<n.length;d+=1){var p=n[d],b=tr(p,0,1),v=tr(p,-1);if((b==='"'||b==="'"||b==="`"||v==='"'||v==="'"||v==="`")&&b!==v)throw new Ve("property names with quotes must have matching quotes");if((p==="constructor"||!c)&&(l=!0),s+="."+p,i="%"+s+"%",er(Pe,i))a=Pe[i];else if(a!=null){if(!(p in a)){if(!t)throw new We("base intrinsic for "+e+" exists, but the property is not available.");return}if(ot&&d+1>=n.length){var E=ot(a,p);c=!!E,c&&"get"in E&&!("originalValue"in E.get)?a=E.get:a=a[p]}else c=er(a,p),a=a[p];c&&!l&&(Pe[i]=a)}}return a}});var Ba=m((_v,Fa)=>{"use strict";var _p=K(),Ma=Jt(),Tp=Ht()(),La=de(),Ua=F(),Cp=_p("%Math.floor%");Fa.exports=function(e,t){if(typeof e!="function")throw new Ua("`fn` is not a function");if(typeof t!="number"||t<0||t>4294967295||Cp(t)!==t)throw new Ua("`length` must be a positive 32-bit integer");var n=arguments.length>2&&!!arguments[2],s=!0,o=!0;if("length"in e&&La){var i=La(e,"length");i&&!i.configurable&&(s=!1),i&&!i.writable&&(o=!1)}return(s||o||!n)&&(Tp?Ma(e,"length",t,!0,!0):Ma(e,"length",t)),e}});var Na=m((Tv,ja)=>{"use strict";var Ap=je(),Ip=Yt(),kp=ls();ja.exports=function(){return kp(Ap,Ip,arguments)}});var Se=m((Cv,rr)=>{"use strict";var Dp=Ba(),qa=nt(),Rp=Qt(),Wa=Na();rr.exports=function(e){var t=Rp(arguments),n=1+e.length-(arguments.length-1);return Dp(t,n>0?n:0,!0)};qa?qa(rr.exports,"apply",{value:Wa}):rr.exports.apply=Wa});var R=m((Av,Ha)=>{"use strict";var Va=K(),Ja=Qt(),Op=Ja([Va("%String.prototype.indexOf%")]);Ha.exports=function(e,t){var n=Va(e,!!t);return typeof n=="function"&&Op(e,".prototype.")>-1?Ja([n]):n}});var ms=m((Iv,Ya)=>{"use strict";var $p=Nt(),za=st()(),Ka=R(),nr=Gt(),Mp=Ka("Array.prototype.push"),Ga=Ka("Object.prototype.propertyIsEnumerable"),Lp=za?nr.getOwnPropertySymbols:null;Ya.exports=function(e,t){if(e==null)throw new TypeError("target must be an object");var n=nr(e);if(arguments.length===1)return n;for(var s=1;s<arguments.length;++s){var o=nr(arguments[s]),i=$p(o),a=za&&(nr.getOwnPropertySymbols||Lp);if(a)for(var l=a(o),u=0;u<l.length;++u){var d=l[u];Ga(o,d)&&Mp(i,d)}for(var c=0;c<i.length;++c){var p=i[c];if(Ga(o,p)){var b=o[p];n[p]=b}}}return n}});var gs=m((kv,Qa)=>{"use strict";var ps=ms(),Up=function(){if(!Object.assign)return!1;for(var r="abcdefghijklmnopqrst",e=r.split(""),t={},n=0;n<e.length;++n)t[e[n]]=e[n];var s=Object.assign({},t),o="";for(var i in s)o+=i;return r!==o},Fp=function(){if(!Object.assign||!Object.preventExtensions)return!1;var r=Object.preventExtensions({1:2});try{Object.assign(r,"xy")}catch{return r[1]==="y"}return!1};Qa.exports=function(){return!Object.assign||Up()||Fp()?ps:Object.assign}});var Xa=m((Dv,Za)=>{"use strict";var Bp=me(),jp=gs();Za.exports=function(){var e=jp();return Bp(Object,{assign:e},{assign:function(){return Object.assign!==e}}),e}});var nl=m((Rv,rl)=>{"use strict";var Np=me(),qp=Se(),Wp=ms(),el=gs(),Vp=Xa(),Jp=qp.apply(el()),tl=function(e,t){return Jp(Object,arguments)};Np(tl,{getPolyfill:el,implementation:Wp,shim:Vp});rl.exports=tl});var fs=m((Ov,il)=>{"use strict";var sl=K(),ol=Se(),Hp=ol(sl("String.prototype.indexOf"));il.exports=function(e,t){var n=sl(e,!!t);return typeof n=="function"&&Hp(e,".prototype.")>-1?ol(n):n}});var ll=m(($v,al)=>{"use strict";var ut=function(){return typeof function(){}.name=="string"},lt=Object.getOwnPropertyDescriptor;if(lt)try{lt([],"length")}catch{lt=null}ut.functionsHaveConfigurableNames=function(){if(!ut()||!lt)return!1;var e=lt(function(){},"name");return!!e&&!!e.configurable};var Gp=Function.prototype.bind;ut.boundFunctionsHaveNames=function(){return ut()&&typeof Gp=="function"&&function(){}.bind().name!==""};al.exports=ut});var dl=m((Mv,cl)=>{"use strict";var ul=Jt(),zp=Ht()(),Kp=ll().functionsHaveConfigurableNames(),Yp=F();cl.exports=function(e,t){if(typeof e!="function")throw new Yp("`fn` is not a function");var n=arguments.length>2&&!!arguments[2];return(!n||Kp)&&(zp?ul(e,"name",t,!0,!0):ul(e,"name",t)),e}});var hs=m((Lv,ml)=>{"use strict";var Qp=dl(),Zp=F(),Xp=Object;ml.exports=Qp(function(){if(this==null||this!==Xp(this))throw new Zp("RegExp.prototype.flags getter called on non-object");var e="";return this.hasIndices&&(e+="d"),this.global&&(e+="g"),this.ignoreCase&&(e+="i"),this.multiline&&(e+="m"),this.dotAll&&(e+="s"),this.unicode&&(e+="u"),this.unicodeSets&&(e+="v"),this.sticky&&(e+="y"),e},"get flags",!0)});var bs=m((Uv,pl)=>{"use strict";var eg=hs(),tg=me().supportsDescriptors,rg=Object.getOwnPropertyDescriptor;pl.exports=function(){if(tg&&/a/mig.flags==="gim"){var e=rg(RegExp.prototype,"flags");if(e&&typeof e.get=="function"&&"dotAll"in RegExp.prototype&&"hasIndices"in RegExp.prototype){var t="",n={};if(Object.defineProperty(n,"hasIndices",{get:function(){t+="d"}}),Object.defineProperty(n,"sticky",{get:function(){t+="y"}}),e.get.call(n),t==="dy")return e.get}}return eg}});var hl=m((Fv,fl)=>{"use strict";var ng=me().supportsDescriptors,sg=bs(),og=de(),ig=Object.defineProperty,ag=os(),gl=Zt(),lg=/a/;fl.exports=function(){if(!ng||!gl)throw new ag("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");var e=sg(),t=gl(lg),n=og(t,"flags");return(!n||n.get!==e)&&ig(t,"flags",{configurable:!0,enumerable:!1,get:e}),e}});var wl=m((Bv,vl)=>{"use strict";var ug=me(),cg=Se(),dg=hs(),bl=bs(),mg=hl(),yl=cg(bl());ug(yl,{getPolyfill:bl,implementation:dg,shim:mg});vl.exports=yl});var pe=m((jv,xl)=>{"use strict";var pg=st();xl.exports=function(){return pg()&&!!Symbol.toStringTag}});var vs=m((Nv,Sl)=>{"use strict";var gg=pe()(),fg=R(),ys=fg("Object.prototype.toString"),sr=function(e){return gg&&e&&typeof e=="object"&&Symbol.toStringTag in e?!1:ys(e)==="[object Arguments]"},Pl=function(e){return sr(e)?!0:e!==null&&typeof e=="object"&&"length"in e&&typeof e.length=="number"&&e.length>=0&&ys(e)!=="[object Array]"&&"callee"in e&&ys(e.callee)==="[object Function]"},hg=(function(){return sr(arguments)})();sr.isLegacyArguments=Pl;Sl.exports=hg?sr:Pl});var El=m(()=>{});var gt=m((Vv,Vl)=>{var Is=typeof Map=="function"&&Map.prototype,ws=Object.getOwnPropertyDescriptor&&Is?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,ir=Is&&ws&&typeof ws.get=="function"?ws.get:null,_l=Is&&Map.prototype.forEach,ks=typeof Set=="function"&&Set.prototype,xs=Object.getOwnPropertyDescriptor&&ks?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,ar=ks&&xs&&typeof xs.get=="function"?xs.get:null,Tl=ks&&Set.prototype.forEach,bg=typeof WeakMap=="function"&&WeakMap.prototype,dt=bg?WeakMap.prototype.has:null,yg=typeof WeakSet=="function"&&WeakSet.prototype,mt=yg?WeakSet.prototype.has:null,vg=typeof WeakRef=="function"&&WeakRef.prototype,Cl=vg?WeakRef.prototype.deref:null,wg=Boolean.prototype.valueOf,xg=Object.prototype.toString,Pg=Function.prototype.toString,Sg=String.prototype.match,Ds=String.prototype.slice,ge=String.prototype.replace,Eg=String.prototype.toUpperCase,Al=String.prototype.toLowerCase,Ul=RegExp.prototype.test,Il=Array.prototype.concat,Y=Array.prototype.join,_g=Array.prototype.slice,kl=Math.floor,Es=typeof BigInt=="function"?BigInt.prototype.valueOf:null,Ps=Object.getOwnPropertySymbols,_s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,Je=typeof Symbol=="function"&&typeof Symbol.iterator=="object",pt=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===Je||!0)?Symbol.toStringTag:null,Fl=Object.prototype.propertyIsEnumerable,Dl=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(r){return r.__proto__}:null);function Rl(r,e){if(r===1/0||r===-1/0||r!==r||r&&r>-1e3&&r<1e3||Ul.call(/e/,e))return e;var t=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof r=="number"){var n=r<0?-kl(-r):kl(r);if(n!==r){var s=String(n),o=Ds.call(e,s.length+1);return ge.call(s,t,"$&_")+"."+ge.call(ge.call(o,/([0-9]{3})/g,"$&_"),/_$/,"")}}return ge.call(e,t,"$&_")}var Ts=El(),Ol=Ts.custom,$l=Nl(Ol)?Ol:null,Bl={__proto__:null,double:'"',single:"'"},Tg={__proto__:null,double:/(["\\])/g,single:/(['\\])/g};Vl.exports=function r(e,t,n,s){var o=t||{};if(oe(o,"quoteStyle")&&!oe(Bl,o.quoteStyle))throw new TypeError('option "quoteStyle" must be "single" or "double"');if(oe(o,"maxStringLength")&&(typeof o.maxStringLength=="number"?o.maxStringLength<0&&o.maxStringLength!==1/0:o.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var i=oe(o,"customInspect")?o.customInspect:!0;if(typeof i!="boolean"&&i!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(oe(o,"indent")&&o.indent!==null&&o.indent!=="	"&&!(parseInt(o.indent,10)===o.indent&&o.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(oe(o,"numericSeparator")&&typeof o.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var a=o.numericSeparator;if(typeof e>"u")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return Wl(e,o);if(typeof e=="number"){if(e===0)return 1/0/e>0?"0":"-0";var l=String(e);return a?Rl(e,l):l}if(typeof e=="bigint"){var u=String(e)+"n";return a?Rl(e,u):u}var d=typeof o.depth>"u"?5:o.depth;if(typeof n>"u"&&(n=0),n>=d&&d>0&&typeof e=="object")return Cs(e)?"[Array]":"[Object]";var c=Vg(o,n);if(typeof s>"u")s=[];else if(ql(s,e)>=0)return"[Circular]";function p(Fe,Mt,gm){if(Mt&&(s=_g.call(s),s.push(Mt)),gm){var Qo={depth:o.depth};return oe(o,"quoteStyle")&&(Qo.quoteStyle=o.quoteStyle),r(Fe,Qo,n+1,s)}return r(Fe,o,n+1,s)}if(typeof e=="function"&&!Ml(e)){var b=Mg(e),v=or(e,p);return"[Function"+(b?": "+b:" (anonymous)")+"]"+(v.length>0?" { "+Y.call(v,", ")+" }":"")}if(Nl(e)){var E=Je?ge.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):_s.call(e);return typeof e=="object"&&!Je?ct(E):E}if(Ng(e)){for(var w="<"+Al.call(String(e.nodeName)),T=e.attributes||[],P=0;P<T.length;P++)w+=" "+T[P].name+"="+jl(Cg(T[P].value),"double",o);return w+=">",e.childNodes&&e.childNodes.length&&(w+="..."),w+="</"+Al.call(String(e.nodeName))+">",w}if(Cs(e)){if(e.length===0)return"[]";var ce=or(e,p);return c&&!Wg(ce)?"["+As(ce,c)+"]":"[ "+Y.call(ce,", ")+" ]"}if(Ig(e)){var Me=or(e,p);return!("cause"in Error.prototype)&&"cause"in e&&!Fl.call(e,"cause")?"{ ["+String(e)+"] "+Y.call(Il.call("[cause]: "+p(e.cause),Me),", ")+" }":Me.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+Y.call(Me,", ")+" }"}if(typeof e=="object"&&i){if($l&&typeof e[$l]=="function"&&Ts)return Ts(e,{depth:d-n});if(i!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(Lg(e)){var et=[];return _l&&_l.call(e,function(Fe,Mt){et.push(p(Mt,e,!0)+" => "+p(Fe,e))}),Ll("Map",ir.call(e),et,c)}if(Bg(e)){var se=[];return Tl&&Tl.call(e,function(Fe){se.push(p(Fe,e))}),Ll("Set",ar.call(e),se,c)}if(Ug(e))return Ss("WeakMap");if(jg(e))return Ss("WeakSet");if(Fg(e))return Ss("WeakRef");if(Dg(e))return ct(p(Number(e)));if(Og(e))return ct(p(Es.call(e)));if(Rg(e))return ct(wg.call(e));if(kg(e))return ct(p(String(e)));if(typeof window<"u"&&e===window)return"{ [object Window] }";if(typeof globalThis<"u"&&e===globalThis||typeof globalThis<"u"&&e===globalThis)return"{ [object globalThis] }";if(!Ag(e)&&!Ml(e)){var xe=or(e,p),Le=Dl?Dl(e)===Object.prototype:e instanceof Object||e.constructor===Object,Ue=e instanceof Object?"":"null prototype",Yo=!Le&&pt&&Object(e)===e&&pt in e?Ds.call(fe(e),8,-1):Ue?"Object":"",pm=Le||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",on=pm+(Yo||Ue?"["+Y.call(Il.call([],Yo||[],Ue||[]),": ")+"] ":"");return xe.length===0?on+"{}":c?on+"{"+As(xe,c)+"}":on+"{ "+Y.call(xe,", ")+" }"}return String(e)};function jl(r,e,t){var n=t.quoteStyle||e,s=Bl[n];return s+r+s}function Cg(r){return ge.call(String(r),/"/g,"&quot;")}function Ee(r){return!pt||!(typeof r=="object"&&(pt in r||typeof r[pt]<"u"))}function Cs(r){return fe(r)==="[object Array]"&&Ee(r)}function Ag(r){return fe(r)==="[object Date]"&&Ee(r)}function Ml(r){return fe(r)==="[object RegExp]"&&Ee(r)}function Ig(r){return fe(r)==="[object Error]"&&Ee(r)}function kg(r){return fe(r)==="[object String]"&&Ee(r)}function Dg(r){return fe(r)==="[object Number]"&&Ee(r)}function Rg(r){return fe(r)==="[object Boolean]"&&Ee(r)}function Nl(r){if(Je)return r&&typeof r=="object"&&r instanceof Symbol;if(typeof r=="symbol")return!0;if(!r||typeof r!="object"||!_s)return!1;try{return _s.call(r),!0}catch{}return!1}function Og(r){if(!r||typeof r!="object"||!Es)return!1;try{return Es.call(r),!0}catch{}return!1}var $g=Object.prototype.hasOwnProperty||function(r){return r in this};function oe(r,e){return $g.call(r,e)}function fe(r){return xg.call(r)}function Mg(r){if(r.name)return r.name;var e=Sg.call(Pg.call(r),/^function\s*([\w$]+)/);return e?e[1]:null}function ql(r,e){if(r.indexOf)return r.indexOf(e);for(var t=0,n=r.length;t<n;t++)if(r[t]===e)return t;return-1}function Lg(r){if(!ir||!r||typeof r!="object")return!1;try{ir.call(r);try{ar.call(r)}catch{return!0}return r instanceof Map}catch{}return!1}function Ug(r){if(!dt||!r||typeof r!="object")return!1;try{dt.call(r,dt);try{mt.call(r,mt)}catch{return!0}return r instanceof WeakMap}catch{}return!1}function Fg(r){if(!Cl||!r||typeof r!="object")return!1;try{return Cl.call(r),!0}catch{}return!1}function Bg(r){if(!ar||!r||typeof r!="object")return!1;try{ar.call(r);try{ir.call(r)}catch{return!0}return r instanceof Set}catch{}return!1}function jg(r){if(!mt||!r||typeof r!="object")return!1;try{mt.call(r,mt);try{dt.call(r,dt)}catch{return!0}return r instanceof WeakSet}catch{}return!1}function Ng(r){return!r||typeof r!="object"?!1:typeof HTMLElement<"u"&&r instanceof HTMLElement?!0:typeof r.nodeName=="string"&&typeof r.getAttribute=="function"}function Wl(r,e){if(r.length>e.maxStringLength){var t=r.length-e.maxStringLength,n="... "+t+" more character"+(t>1?"s":"");return Wl(Ds.call(r,0,e.maxStringLength),e)+n}var s=Tg[e.quoteStyle||"single"];s.lastIndex=0;var o=ge.call(ge.call(r,s,"\\$1"),/[\x00-\x1f]/g,qg);return jl(o,"single",e)}function qg(r){var e=r.charCodeAt(0),t={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return t?"\\"+t:"\\x"+(e<16?"0":"")+Eg.call(e.toString(16))}function ct(r){return"Object("+r+")"}function Ss(r){return r+" { ? }"}function Ll(r,e,t,n){var s=n?As(t,n):Y.call(t,", ");return r+" ("+e+") {"+s+"}"}function Wg(r){for(var e=0;e<r.length;e++)if(ql(r[e],`
`)>=0)return!1;return!0}function Vg(r,e){var t;if(r.indent==="	")t="	";else if(typeof r.indent=="number"&&r.indent>0)t=Y.call(Array(r.indent+1)," ");else return null;return{base:t,prev:Y.call(Array(e+1),t)}}function As(r,e){if(r.length===0)return"";var t=`
`+e.prev+e.base;return t+Y.call(r,","+t)+`
`+e.prev}function or(r,e){var t=Cs(r),n=[];if(t){n.length=r.length;for(var s=0;s<r.length;s++)n[s]=oe(r,s)?e(r[s],r):""}var o=typeof Ps=="function"?Ps(r):[],i;if(Je){i={};for(var a=0;a<o.length;a++)i["$"+o[a]]=o[a]}for(var l in r)oe(r,l)&&(t&&String(Number(l))===l&&l<r.length||Je&&i["$"+l]instanceof Symbol||(Ul.call(/[^\w$]/,l)?n.push(e(l,r)+": "+e(r[l],r)):n.push(l+": "+e(r[l],r))));if(typeof Ps=="function")for(var u=0;u<o.length;u++)Fl.call(r,o[u])&&n.push("["+e(o[u])+"]: "+e(r[o[u]],r));return n}});var Hl=m((Jv,Jl)=>{"use strict";var Jg=gt(),Hg=F(),lr=function(r,e,t){for(var n=r,s;(s=n.next)!=null;n=s)if(s.key===e)return n.next=s.next,t||(s.next=r.next,r.next=s),s},Gg=function(r,e){if(r){var t=lr(r,e);return t&&t.value}},zg=function(r,e,t){var n=lr(r,e);n?n.value=t:r.next={key:e,next:r.next,value:t}},Kg=function(r,e){return r?!!lr(r,e):!1},Yg=function(r,e){if(r)return lr(r,e,!0)};Jl.exports=function(){var e,t={assert:function(n){if(!t.has(n))throw new Hg("Side channel does not contain "+Jg(n))},delete:function(n){var s=Yg(e,n);return s&&e&&!e.next&&(e=void 0),!!s},get:function(n){return Gg(e,n)},has:function(n){return Kg(e,n)},set:function(n,s){e||(e={next:void 0}),zg(e,n,s)}};return t}});var Rs=m((Hv,zl)=>{"use strict";var Qg=K(),ft=R(),Zg=gt(),Xg=F(),Gl=Qg("%Map%",!0),ef=ft("Map.prototype.get",!0),tf=ft("Map.prototype.set",!0),rf=ft("Map.prototype.has",!0),nf=ft("Map.prototype.delete",!0),sf=ft("Map.prototype.size",!0);zl.exports=!!Gl&&function(){var e,t={assert:function(n){if(!t.has(n))throw new Xg("Side channel does not contain "+Zg(n))},delete:function(n){if(e){var s=nf(e,n);return sf(e)===0&&(e=void 0),s}return!1},get:function(n){if(e)return ef(e,n)},has:function(n){return e?rf(e,n):!1},set:function(n,s){e||(e=new Gl),tf(e,n,s)}};return t}});var Yl=m((Gv,Kl)=>{"use strict";var of=K(),cr=R(),af=gt(),ur=Rs(),lf=F(),He=of("%WeakMap%",!0),uf=cr("WeakMap.prototype.get",!0),cf=cr("WeakMap.prototype.set",!0),df=cr("WeakMap.prototype.has",!0),mf=cr("WeakMap.prototype.delete",!0);Kl.exports=He?function(){var e,t,n={assert:function(s){if(!n.has(s))throw new lf("Side channel does not contain "+af(s))},delete:function(s){if(He&&s&&(typeof s=="object"||typeof s=="function")){if(e)return mf(e,s)}else if(ur&&t)return t.delete(s);return!1},get:function(s){return He&&s&&(typeof s=="object"||typeof s=="function")&&e?uf(e,s):t&&t.get(s)},has:function(s){return He&&s&&(typeof s=="object"||typeof s=="function")&&e?df(e,s):!!t&&t.has(s)},set:function(s,o){He&&s&&(typeof s=="object"||typeof s=="function")?(e||(e=new He),cf(e,s,o)):ur&&(t||(t=ur()),t.set(s,o))}};return n}:ur});var Os=m((zv,Ql)=>{"use strict";var pf=F(),gf=gt(),ff=Hl(),hf=Rs(),bf=Yl(),yf=bf||hf||ff;Ql.exports=function(){var e,t={assert:function(n){if(!t.has(n)){var s=n&&Object(n)===n?"the given object key":gf(n);throw new pf("Side channel does not contain "+s)}},delete:function(n){return!!e&&e.delete(n)},get:function(n){return e&&e.get(n)},has:function(n){return!!e&&e.has(n)},set:function(n,s){e||(e=yf()),e.set(n,s)}};return t}});var Xl=m((Kv,Zl)=>{"use strict";var vf=Xt(),ht=Os()(),ie=F(),$s={assert:function(r,e){if(!r||typeof r!="object"&&typeof r!="function")throw new ie("`O` is not an object");if(typeof e!="string")throw new ie("`slot` must be a string");if(ht.assert(r),!$s.has(r,e))throw new ie("`"+e+"` is not present on `O`")},get:function(r,e){if(!r||typeof r!="object"&&typeof r!="function")throw new ie("`O` is not an object");if(typeof e!="string")throw new ie("`slot` must be a string");var t=ht.get(r);return t&&t["$"+e]},has:function(r,e){if(!r||typeof r!="object"&&typeof r!="function")throw new ie("`O` is not an object");if(typeof e!="string")throw new ie("`slot` must be a string");var t=ht.get(r);return!!t&&vf(t,"$"+e)},set:function(r,e,t){if(!r||typeof r!="object"&&typeof r!="function")throw new ie("`O` is not an object");if(typeof e!="string")throw new ie("`slot` must be a string");var n=ht.get(r);n||(n={},ht.set(r,n)),n["$"+e]=t}};Object.freeze&&Object.freeze($s);Zl.exports=$s});var ru=m((Yv,tu)=>{"use strict";var bt=Xl(),wf=Wt(),eu=typeof StopIteration=="object"?StopIteration:null;tu.exports=function(e){if(!eu)throw new wf("this environment lacks StopIteration");bt.set(e,"[[Done]]",!1);var t={next:function(){var s=bt.get(this,"[[Iterator]]"),o=!!bt.get(s,"[[Done]]");try{return{done:o,value:o?void 0:s.next()}}catch(i){if(bt.set(s,"[[Done]]",!0),i!==eu)throw i;return{done:!0,value:void 0}}}};return bt.set(t,"[[Iterator]]",e),t}});var Ms=m((Qv,nu)=>{var xf={}.toString;nu.exports=Array.isArray||function(r){return xf.call(r)=="[object Array]"}});var Ls=m((Zv,ou)=>{"use strict";var su=R(),Pf=su("String.prototype.valueOf"),Sf=function(e){try{return Pf(e),!0}catch{return!1}},Ef=su("Object.prototype.toString"),_f="[object String]",Tf=pe()();ou.exports=function(e){return typeof e=="string"?!0:!e||typeof e!="object"?!1:Tf?Sf(e):Ef(e)===_f}});var Fs=m((Xv,lu)=>{"use strict";var Us=typeof Map=="function"&&Map.prototype?Map:null,Cf=typeof Set=="function"&&Set.prototype?Set:null,dr;Us||(dr=function(e){return!1});var au=Us?Map.prototype.has:null,iu=Cf?Set.prototype.has:null;!dr&&!au&&(dr=function(e){return!1});lu.exports=dr||function(e){if(!e||typeof e!="object")return!1;try{if(au.call(e),iu)try{iu.call(e)}catch{return!0}return e instanceof Us}catch{}return!1}});var js=m((ew,du)=>{"use strict";var Af=typeof Map=="function"&&Map.prototype?Map:null,Bs=typeof Set=="function"&&Set.prototype?Set:null,mr;Bs||(mr=function(e){return!1});var uu=Af?Map.prototype.has:null,cu=Bs?Set.prototype.has:null;!mr&&!cu&&(mr=function(e){return!1});du.exports=mr||function(e){if(!e||typeof e!="object")return!1;try{if(cu.call(e),uu)try{uu.call(e)}catch{return!0}return e instanceof Bs}catch{}return!1}});var Su=m((tw,fr)=>{"use strict";var mu=vs(),pu=ru();zt()()||st()()?(pr=Symbol.iterator,fr.exports=function(e){if(e!=null&&typeof e[pr]<"u")return e[pr]();if(mu(e))return Array.prototype[pr].call(e)}):(gu=Ms(),fu=Ls(),Ns=K(),hu=Ns("%Map%",!0),bu=Ns("%Set%",!0),N=fs(),qs=N("Array.prototype.push"),Ws=N("String.prototype.charCodeAt"),yu=N("String.prototype.slice"),vu=function(e,t){var n=e.length;if(t+1>=n)return t+1;var s=Ws(e,t);if(s<55296||s>56319)return t+1;var o=Ws(e,t+1);return o<56320||o>57343?t+1:t+2},gr=function(e){var t=0;return{next:function(){var s=t>=e.length,o;return s||(o=e[t],t+=1),{done:s,value:o}}}},Vs=function(e,t){if(gu(e)||mu(e))return gr(e);if(fu(e)){var n=0;return{next:function(){var o=vu(e,n),i=yu(e,n,o);return n=o,{done:o>e.length,value:i}}}}if(t&&typeof e["_es6-shim iterator_"]<"u")return e["_es6-shim iterator_"]()},!hu&&!bu?fr.exports=function(e){if(e!=null)return Vs(e,!0)}:(wu=Fs(),xu=js(),Js=N("Map.prototype.forEach",!0),Hs=N("Set.prototype.forEach",!0),(typeof process>"u"||!process.versions||!process.versions.node)&&(Gs=N("Map.prototype.iterator",!0),zs=N("Set.prototype.iterator",!0)),Ks=N("Map.prototype.@@iterator",!0)||N("Map.prototype._es6-shim iterator_",!0),Ys=N("Set.prototype.@@iterator",!0)||N("Set.prototype._es6-shim iterator_",!0),Pu=function(e){if(wu(e)){if(Gs)return pu(Gs(e));if(Ks)return Ks(e);if(Js){var t=[];return Js(e,function(s,o){qs(t,[o,s])}),gr(t)}}if(xu(e)){if(zs)return pu(zs(e));if(Ys)return Ys(e);if(Hs){var n=[];return Hs(e,function(s){qs(n,s)}),gr(n)}}},fr.exports=function(e){return Pu(e)||Vs(e)}));var pr,gu,fu,Ns,hu,bu,N,qs,Ws,yu,vu,gr,Vs,wu,xu,Js,Hs,Gs,zs,Ks,Ys,Pu});var Qs=m((rw,_u)=>{"use strict";var Eu=function(r){return r!==r};_u.exports=function(e,t){return e===0&&t===0?1/e===1/t:!!(e===t||Eu(e)&&Eu(t))}});var Zs=m((nw,Tu)=>{"use strict";var If=Qs();Tu.exports=function(){return typeof Object.is=="function"?Object.is:If}});var Au=m((sw,Cu)=>{"use strict";var kf=Zs(),Df=me();Cu.exports=function(){var e=kf();return Df(Object,{is:e},{is:function(){return Object.is!==e}}),e}});var Ru=m((ow,Du)=>{"use strict";var Rf=me(),Of=Se(),$f=Qs(),Iu=Zs(),Mf=Au(),ku=Of(Iu(),Object);Rf(ku,{getPolyfill:Iu,implementation:$f,shim:Mf});Du.exports=ku});var eo=m((iw,Lu)=>{"use strict";var Lf=Se(),Mu=R(),Uf=K(),Xs=Uf("%ArrayBuffer%",!0),hr=Mu("ArrayBuffer.prototype.byteLength",!0),Ff=Mu("Object.prototype.toString"),Ou=!!Xs&&!hr&&new Xs(0).slice,$u=!!Ou&&Lf(Ou);Lu.exports=hr||$u?function(e){if(!e||typeof e!="object")return!1;try{return hr?hr(e):$u(e,0),!0}catch{return!1}}:Xs?function(e){return Ff(e)==="[object ArrayBuffer]"}:function(e){return!1}});var Bu=m((aw,Fu)=>{"use strict";var Uu=R(),Bf=Uu("Date.prototype.getDay"),jf=function(e){try{return Bf(e),!0}catch{return!1}},Nf=Uu("Object.prototype.toString"),qf="[object Date]",Wf=pe()();Fu.exports=function(e){return typeof e!="object"||e===null?!1:Wf?jf(e):Nf(e)===qf}});var so=m((lw,Vu)=>{"use strict";var ju=R(),Vf=pe()(),Jf=Xt(),Hf=de(),no;Vf?(Nu=ju("RegExp.prototype.exec"),to={},br=function(){throw to},ro={toString:br,valueOf:br},typeof Symbol.toPrimitive=="symbol"&&(ro[Symbol.toPrimitive]=br),no=function(e){if(!e||typeof e!="object")return!1;var t=Hf(e,"lastIndex"),n=t&&Jf(t,"value");if(!n)return!1;try{Nu(e,ro)}catch(s){return s===to}}):(qu=ju("Object.prototype.toString"),Wu="[object RegExp]",no=function(e){return!e||typeof e!="object"&&typeof e!="function"?!1:qu(e)===Wu});var Nu,to,br,ro,qu,Wu;Vu.exports=no});var Gu=m((uw,Hu)=>{"use strict";var Gf=R(),Ju=Gf("SharedArrayBuffer.prototype.byteLength",!0);Hu.exports=Ju?function(e){if(!e||typeof e!="object")return!1;try{return Ju(e),!0}catch{return!1}}:function(e){return!1}});var Yu=m((cw,Ku)=>{"use strict";var zu=R(),zf=zu("Number.prototype.toString"),Kf=function(e){try{return zf(e),!0}catch{return!1}},Yf=zu("Object.prototype.toString"),Qf="[object Number]",Zf=pe()();Ku.exports=function(e){return typeof e=="number"?!0:!e||typeof e!="object"?!1:Zf?Kf(e):Yf(e)===Qf}});var Xu=m((dw,Zu)=>{"use strict";var Qu=R(),Xf=Qu("Boolean.prototype.toString"),eh=Qu("Object.prototype.toString"),th=function(e){try{return Xf(e),!0}catch{return!1}},rh="[object Boolean]",nh=pe()();Zu.exports=function(e){return typeof e=="boolean"?!0:e===null||typeof e!="object"?!1:nh?th(e):eh(e)===rh}});var tc=m((mw,ec)=>{"use strict";var sh=R(),oh=so(),ih=sh("RegExp.prototype.exec"),ah=F();ec.exports=function(e){if(!oh(e))throw new ah("`regex` must be a RegExp");return function(n){return ih(e,n)!==null}}});var ic=m((pw,oo)=>{"use strict";var oc=R(),lh=oc("Object.prototype.toString"),uh=zt()(),ch=tc();uh?(rc=oc("Symbol.prototype.toString"),nc=ch(/^Symbol\(.*\)$/),sc=function(e){return typeof e.valueOf()!="symbol"?!1:nc(rc(e))},oo.exports=function(e){if(typeof e=="symbol")return!0;if(!e||typeof e!="object"||lh(e)!=="[object Symbol]")return!1;try{return sc(e)}catch{return!1}}):oo.exports=function(e){return!1};var rc,nc,sc});var uc=m((gw,lc)=>{"use strict";var ac=typeof BigInt<"u"&&BigInt;lc.exports=function(){return typeof ac=="function"&&typeof BigInt=="function"&&typeof ac(42)=="bigint"&&typeof BigInt(42)=="bigint"}});var mc=m((fw,io)=>{"use strict";var dh=uc()();dh?(cc=BigInt.prototype.valueOf,dc=function(e){try{return cc.call(e),!0}catch{}return!1},io.exports=function(e){return e===null||typeof e>"u"||typeof e=="boolean"||typeof e=="string"||typeof e=="number"||typeof e=="symbol"||typeof e=="function"?!1:typeof e=="bigint"?!0:dc(e)}):io.exports=function(e){return!1};var cc,dc});var gc=m((hw,pc)=>{"use strict";var mh=Ls(),ph=Yu(),gh=Xu(),fh=ic(),hh=mc();pc.exports=function(e){if(e==null||typeof e!="object"&&typeof e!="function")return null;if(mh(e))return"String";if(ph(e))return"Number";if(gh(e))return"Boolean";if(fh(e))return"Symbol";if(hh(e))return"BigInt"}});var bc=m((bw,hc)=>{"use strict";var yr=typeof WeakMap=="function"&&WeakMap.prototype?WeakMap:null,fc=typeof WeakSet=="function"&&WeakSet.prototype?WeakSet:null,vr;yr||(vr=function(e){return!1});var lo=yr?yr.prototype.has:null,ao=fc?fc.prototype.has:null;!vr&&!lo&&(vr=function(e){return!1});hc.exports=vr||function(e){if(!e||typeof e!="object")return!1;try{if(lo.call(e,lo),ao)try{ao.call(e,ao)}catch{return!0}return e instanceof yr}catch{}return!1}});var vc=m((yw,co)=>{"use strict";var bh=K(),yc=R(),yh=bh("%WeakSet%",!0),uo=yc("WeakSet.prototype.has",!0);uo?(wr=yc("WeakMap.prototype.has",!0),co.exports=function(e){if(!e||typeof e!="object")return!1;try{if(uo(e,uo),wr)try{wr(e,wr)}catch{return!0}return e instanceof yh}catch{}return!1}):co.exports=function(e){return!1};var wr});var xc=m((vw,wc)=>{"use strict";var vh=Fs(),wh=js(),xh=bc(),Ph=vc();wc.exports=function(e){if(e&&typeof e=="object"){if(vh(e))return"Map";if(wh(e))return"Set";if(xh(e))return"WeakMap";if(Ph(e))return"WeakSet"}return!1}});var _c=m((ww,Ec)=>{"use strict";var Sc=Function.prototype.toString,Ge=typeof Reflect=="object"&&Reflect!==null&&Reflect.apply,po,xr;if(typeof Ge=="function"&&typeof Object.defineProperty=="function")try{po=Object.defineProperty({},"length",{get:function(){throw xr}}),xr={},Ge(function(){throw 42},null,po)}catch(r){r!==xr&&(Ge=null)}else Ge=null;var Sh=/^\s*class\b/,go=function(e){try{var t=Sc.call(e);return Sh.test(t)}catch{return!1}},mo=function(e){try{return go(e)?!1:(Sc.call(e),!0)}catch{return!1}},Pr=Object.prototype.toString,Eh="[object Object]",_h="[object Function]",Th="[object GeneratorFunction]",Ch="[object HTMLAllCollection]",Ah="[object HTML document.all class]",Ih="[object HTMLCollection]",kh=typeof Symbol=="function"&&!!Symbol.toStringTag,Dh=!(0 in[,]),fo=function(){return!1};typeof document=="object"&&(Pc=document.all,Pr.call(Pc)===Pr.call(document.all)&&(fo=function(e){if((Dh||!e)&&(typeof e>"u"||typeof e=="object"))try{var t=Pr.call(e);return(t===Ch||t===Ah||t===Ih||t===Eh)&&e("")==null}catch{}return!1}));var Pc;Ec.exports=Ge?function(e){if(fo(e))return!0;if(!e||typeof e!="function"&&typeof e!="object")return!1;try{Ge(e,null,po)}catch(t){if(t!==xr)return!1}return!go(e)&&mo(e)}:function(e){if(fo(e))return!0;if(!e||typeof e!="function"&&typeof e!="object")return!1;if(kh)return mo(e);if(go(e))return!1;var t=Pr.call(e);return t!==_h&&t!==Th&&!/^\[object HTML/.test(t)?!1:mo(e)}});var Ac=m((xw,Cc)=>{"use strict";var Rh=_c(),Oh=Object.prototype.toString,Tc=Object.prototype.hasOwnProperty,$h=function(e,t,n){for(var s=0,o=e.length;s<o;s++)Tc.call(e,s)&&(n==null?t(e[s],s,e):t.call(n,e[s],s,e))},Mh=function(e,t,n){for(var s=0,o=e.length;s<o;s++)n==null?t(e.charAt(s),s,e):t.call(n,e.charAt(s),s,e)},Lh=function(e,t,n){for(var s in e)Tc.call(e,s)&&(n==null?t(e[s],s,e):t.call(n,e[s],s,e))};function Uh(r){return Oh.call(r)==="[object Array]"}Cc.exports=function(e,t,n){if(!Rh(t))throw new TypeError("iterator must be a function");var s;arguments.length>=3&&(s=n),Uh(e)?$h(e,t,s):typeof e=="string"?Mh(e,t,s):Lh(e,t,s)}});var kc=m((Pw,Ic)=>{"use strict";Ic.exports=["Float16Array","Float32Array","Float64Array","Int8Array","Int16Array","Int32Array","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array"]});var Rc=m((Sw,Dc)=>{"use strict";var ho=kc(),Fh=globalThis;Dc.exports=function(){for(var e=[],t=0;t<ho.length;t++)typeof Fh[ho[t]]=="function"&&(e[e.length]=ho[t]);return e}});var Uc=m((Ew,Lc)=>{"use strict";var _r=Ac(),Bh=Rc(),Oc=Se(),yo=R(),Er=de(),Sr=Zt(),jh=yo("Object.prototype.toString"),Mc=pe()(),$c=globalThis,bo=Bh(),vo=yo("String.prototype.slice"),Nh=yo("Array.prototype.indexOf",!0)||function(e,t){for(var n=0;n<e.length;n+=1)if(e[n]===t)return n;return-1},Tr={__proto__:null};Mc&&Er&&Sr?_r(bo,function(r){var e=new $c[r];if(Symbol.toStringTag in e&&Sr){var t=Sr(e),n=Er(t,Symbol.toStringTag);if(!n&&t){var s=Sr(t);n=Er(s,Symbol.toStringTag)}if(n&&n.get){var o=Oc(n.get);Tr["$"+r]=o}}}):_r(bo,function(r){var e=new $c[r],t=e.slice||e.set;if(t){var n=Oc(t);Tr["$"+r]=n}});function qh(r){var e=!1;return _r(Tr,function(t,n){if(!e)try{"$"+t(r)===n&&(e=vo(n,1))}catch{}}),e}function Wh(r){var e=!1;return _r(Tr,function(t,n){if(!e)try{t(r),e=vo(n,1)}catch{}}),e}function Vh(r){return Nh(bo,r)>-1}Lc.exports=function(e){if(!e||typeof e!="object")return!1;if(!Mc){var t=vo(jh(e),8,-1);return Vh(t)?t:t!=="Object"?!1:Wh(e)}return Er?qh(e):null}});var jc=m((_w,Bc)=>{"use strict";var Jh=R(),Fc=Jh("ArrayBuffer.prototype.byteLength",!0),Hh=eo();Bc.exports=function(e){return Hh(e)?Fc?Fc(e):e.byteLength:NaN}});var dd=m((Tw,cd)=>{"use strict";var ad=nl(),Q=fs(),Nc=wl(),Gh=K(),ze=Su(),zh=Os(),qc=Ru(),Wc=vs(),Vc=Ms(),Jc=eo(),Hc=Bu(),Gc=so(),zc=Gu(),Kc=Nt(),Yc=gc(),Qc=xc(),Zc=Uc(),Xc=jc(),ed=Q("SharedArrayBuffer.prototype.byteLength",!0),td=Q("Date.prototype.getTime"),wo=Object.getPrototypeOf,rd=Q("Object.prototype.toString"),Ar=Gh("%Set%",!0),xo=Q("Map.prototype.has",!0),Ir=Q("Map.prototype.get",!0),nd=Q("Map.prototype.size",!0),kr=Q("Set.prototype.add",!0),ld=Q("Set.prototype.delete",!0),Dr=Q("Set.prototype.has",!0),Cr=Q("Set.prototype.size",!0);function sd(r,e,t,n){for(var s=ze(r),o;(o=s.next())&&!o.done;)if(J(e,o.value,t,n))return ld(r,o.value),!0;return!1}function ud(r){if(typeof r>"u")return null;if(typeof r!="object")return typeof r=="symbol"?!1:typeof r=="string"||typeof r=="number"?+r==+r:!0}function Kh(r,e,t,n,s,o){var i=ud(t);if(i!=null)return i;var a=Ir(e,i),l=ad({},s,{strict:!1});return typeof a>"u"&&!xo(e,i)||!J(n,a,l,o)?!1:!xo(r,i)&&J(n,a,l,o)}function Yh(r,e,t){var n=ud(t);return n??(Dr(e,n)&&!Dr(r,n))}function od(r,e,t,n,s,o){for(var i=ze(r),a,l;(a=i.next())&&!a.done;)if(l=a.value,J(t,l,s,o)&&J(n,Ir(e,l),s,o))return ld(r,l),!0;return!1}function J(r,e,t,n){var s=t||{};if(s.strict?qc(r,e):r===e)return!0;var o=Yc(r),i=Yc(e);if(o!==i)return!1;if(!r||!e||typeof r!="object"&&typeof e!="object")return s.strict?qc(r,e):r==e;var a=n.has(r),l=n.has(e),u;if(a&&l){if(n.get(r)===n.get(e))return!0}else u={};return a||n.set(r,u),l||n.set(e,u),Xh(r,e,s,n)}function id(r){return!r||typeof r!="object"||typeof r.length!="number"||typeof r.copy!="function"||typeof r.slice!="function"||r.length>0&&typeof r[0]!="number"?!1:!!(r.constructor&&r.constructor.isBuffer&&r.constructor.isBuffer(r))}function Qh(r,e,t,n){if(Cr(r)!==Cr(e))return!1;for(var s=ze(r),o=ze(e),i,a,l;(i=s.next())&&!i.done;)if(i.value&&typeof i.value=="object")l||(l=new Ar),kr(l,i.value);else if(!Dr(e,i.value)){if(t.strict||!Yh(r,e,i.value))return!1;l||(l=new Ar),kr(l,i.value)}if(l){for(;(a=o.next())&&!a.done;)if(a.value&&typeof a.value=="object"){if(!sd(l,a.value,t.strict,n))return!1}else if(!t.strict&&!Dr(r,a.value)&&!sd(l,a.value,t.strict,n))return!1;return Cr(l)===0}return!0}function Zh(r,e,t,n){if(nd(r)!==nd(e))return!1;for(var s=ze(r),o=ze(e),i,a,l,u,d,c;(i=s.next())&&!i.done;)if(u=i.value[0],d=i.value[1],u&&typeof u=="object")l||(l=new Ar),kr(l,u);else if(c=Ir(e,u),typeof c>"u"&&!xo(e,u)||!J(d,c,t,n)){if(t.strict||!Kh(r,e,u,d,t,n))return!1;l||(l=new Ar),kr(l,u)}if(l){for(;(a=o.next())&&!a.done;)if(u=a.value[0],c=a.value[1],u&&typeof u=="object"){if(!od(l,r,u,c,t,n))return!1}else if(!t.strict&&(!r.has(u)||!J(Ir(r,u),c,t,n))&&!od(l,r,u,c,ad({},t,{strict:!1}),n))return!1;return Cr(l)===0}return!0}function Xh(r,e,t,n){var s,o;if(typeof r!=typeof e||r==null||e==null||rd(r)!==rd(e)||Wc(r)!==Wc(e))return!1;var i=Vc(r),a=Vc(e);if(i!==a)return!1;var l=r instanceof Error,u=e instanceof Error;if(l!==u||(l||u)&&(r.name!==e.name||r.message!==e.message))return!1;var d=Gc(r),c=Gc(e);if(d!==c||(d||c)&&(r.source!==e.source||Nc(r)!==Nc(e)))return!1;var p=Hc(r),b=Hc(e);if(p!==b||(p||b)&&td(r)!==td(e)||t.strict&&wo&&wo(r)!==wo(e))return!1;var v=Zc(r),E=Zc(e);if(v!==E)return!1;if(v||E){if(r.length!==e.length)return!1;for(s=0;s<r.length;s++)if(r[s]!==e[s])return!1;return!0}var w=id(r),T=id(e);if(w!==T)return!1;if(w||T){if(r.length!==e.length)return!1;for(s=0;s<r.length;s++)if(r[s]!==e[s])return!1;return!0}var P=Jc(r),ce=Jc(e);if(P!==ce)return!1;if(P||ce)return Xc(r)!==Xc(e)?!1:typeof Uint8Array=="function"&&J(new Uint8Array(r),new Uint8Array(e),t,n);var Me=zc(r),et=zc(e);if(Me!==et)return!1;if(Me||et)return ed(r)!==ed(e)?!1:typeof Uint8Array=="function"&&J(new Uint8Array(r),new Uint8Array(e),t,n);if(typeof r!=typeof e)return!1;var se=Kc(r),xe=Kc(e);if(se.length!==xe.length)return!1;for(se.sort(),xe.sort(),s=se.length-1;s>=0;s--)if(se[s]!=xe[s])return!1;for(s=se.length-1;s>=0;s--)if(o=se[s],!J(r[o],e[o],t,n))return!1;var Le=Qc(r),Ue=Qc(e);return Le!==Ue?!1:Le==="Set"||Ue==="Set"?Qh(r,e,t,n):Le==="Map"?Zh(r,e,t,n):!0}cd.exports=function(e,t,n){return J(e,t,n,zh())}});var My={};wm(My,{activate:()=>$y,coursesView:()=>$t,getContext:()=>B,getIconUri:()=>Nr,getWebviewOptions:()=>jo,getWorkspaceFolder:()=>Xr,getWorkspaceFolderOrPickOne:()=>W,globalStateGet:()=>To,globalStateUpdate:()=>zo,jutgeStatsView:()=>Ko,setJutgeApiURL:()=>yt,whenWorkspaceFolder:()=>mm});module.exports=xm(My);var h=x(require("vscode"));var Xo="jutge-about",Ut=class{getTreeItem(e){return e}getChildren(){return Promise.resolve([])}};var he=x(require("vscode"));var V=class extends Error{constructor(t="Unauthorized"){super(t);this.message=t}message;name="UnauthorizedError"},an=class extends Error{constructor(t){super(t);this.message=t}message;name="InfoError"},ln=class extends Error{constructor(t){super(t);this.message=t}message;name="NotFoundError"},un=class extends Error{constructor(t){super(t);this.message=t}message;name="InputError"},cn=class extends Error{constructor(t){super(t);this.message=t}message;name="ProtocolError"},Ft=class{useCache=!0;logApiCalls=!1;logCache=!1;userAgent="typescript-client";clientTTLs=new Map;cache=new Map;JUTGE_API_URL="https://api.jutge.org/api";headers={};meta=null;async execute(e,t,n=[]){let s=new Date,o;try{return await this.execute2(e,t,n)}finally{if(o=new Date,this.logApiCalls){let i=Math.round(o.getTime()-s.getTime());console.log(`${e}: ${i}ms`)}}}async execute2(e,t,n=[]){let s=this.useCache&&this.clientTTLs.has(e)&&n.length===0;if(s){let T=JSON.stringify({func:e,input:t}),P=this.cache.get(T);if(P!==void 0){this.logCache&&console.log("found");let ce=this.clientTTLs.get(e);if(P.epoch+ce*1e3>new Date().valueOf())return this.logCache&&console.log("used"),[P.output,P.ofiles];this.logCache&&console.log("expired"),this.cache.delete(T)}}this.logCache&&console.log("fetch");let o=new FormData,i={func:e,input:t,meta:this.meta,userAgent:this.userAgent};o.append("data",JSON.stringify(i));for(let T in n)o.append(`file_${T}`,n[T]);let a=await fetch(this.JUTGE_API_URL,{method:"POST",body:o,headers:this.headers});if(a.headers.get("content-type")?.split(";")[0].toLowerCase()!=="multipart/form-data")throw new cn("The content type is not multipart/form-data");let u=await a.formData(),d=u.get("data"),{output:c,error:p,duration:b,operation_id:v,time:E}=JSON.parse(d);p&&this.throwError(p,v);let w=[];for(let T of u.keys()){let P=u.get(T);P instanceof File&&w.push({data:new Uint8Array(await P.arrayBuffer()),name:P.name,type:P.type})}if(s){this.logCache&&console.log("saved");let T=JSON.stringify({func:e,input:t});this.cache.set(T,{output:c,ofiles:w,epoch:new Date().valueOf()})}return[c,w]}throwError(e,t){let n=e.message||"Unknown error";throw e.name==="UnauthorizedError"?new V(n):e.name==="InfoError"?new an(n):e.name==="NotFoundError"?new ln(n):e.name==="InputError"?new un(n):new Error(n)}async login({email:e,password:t}){let[n,s]=await this.execute("auth.login",{email:e,password:t});if(n.error)throw new V(n.error);return this.meta={token:n.token,user_uid:n.user_uid},n}async loginExam({email:e,password:t,exam:n,exam_password:s}){let[o,i]=await this.execute("auth.loginExam",{email:e,password:t,exam:n,exam_password:s});if(o.error)throw new V(o.error);return this.meta={token:o.token,user_uid:o.user_uid},o}async logout(){await this.execute("auth.logout",null),this.meta=null}clearCache(){this.logCache&&console.log("clear"),this.cache=new Map}setCache(e){let t=JSON.parse(e);this.cache=new Map(Object.entries(t)),this.removeExpired()}getCache(){this.removeExpired();let e=Object.fromEntries(this.cache.entries());return JSON.stringify(e)}removeExpired(){for(let[e,t]of this.cache){let{func:n}=JSON.parse(e),s=this.clientTTLs.get(n);s!==void 0&&t.epoch+s*1e3<new Date().getTime()&&this.cache.delete(e)}}clients;auth;misc;tables;courses;problems;student;tutor;instructor;games;admin;constructor(){this.clients=new dn(this),this.auth=new mn(this),this.misc=new pn(this),this.tables=new gn(this),this.courses=new fn(this),this.problems=new hn(this),this.student=new bn(this),this.tutor=new Dn(this),this.instructor=new Ln(this),this.games=new Jn(this),this.admin=new Hn(this),this.clientTTLs.set("misc.getAvatarPacks",3600),this.clientTTLs.set("misc.getExamIcons",3600),this.clientTTLs.set("misc.getDemosForCompiler",3600),this.clientTTLs.set("tables.get",3600),this.clientTTLs.set("tables.getLanguages",3600),this.clientTTLs.set("tables.getCountries",3600),this.clientTTLs.set("tables.getCompilers",3600),this.clientTTLs.set("tables.getDrivers",3600),this.clientTTLs.set("tables.getVerdicts",3600),this.clientTTLs.set("tables.getProglangs",3600),this.clientTTLs.set("tables.getTimezones",3600),this.clientTTLs.set("courses.indexPublic",300),this.clientTTLs.set("problems.getAllAbstractProblems",3600),this.clientTTLs.set("problems.getAllAbstractProblemsRaw",3600),this.clientTTLs.set("problems.getSomeAbstractProblems",600)}},dn=class{root;constructor(e){this.root=e}async python(){let[e,t]=await this.root.execute("clients.python",null);return t[0]}async typescript(){let[e,t]=await this.root.execute("clients.typescript",null);return t[0]}async javascript(){let[e,t]=await this.root.execute("clients.javascript",null);return t[0]}async java(){let[e,t]=await this.root.execute("clients.java",null);return t[0]}async cpp(){let[e,t]=await this.root.execute("clients.cpp",null);return t[0]}async php(){let[e,t]=await this.root.execute("clients.php",null);return t[0]}},mn=class{root;constructor(e){this.root=e}async login(e){let[t,n]=await this.root.execute("auth.login",e);return t}async logout(){let[e,t]=await this.root.execute("auth.logout",null);return e}async loginExam(e){let[t,n]=await this.root.execute("auth.loginExam",e);return t}async getReadyExams(e){let[t,n]=await this.root.execute("auth.getReadyExams",e);return t}async loginWithUsername(e){let[t,n]=await this.root.execute("auth.loginWithUsername",e);return t}async register(e){let[t,n]=await this.root.execute("auth.register",e);return t}async requestPasswordReset(e){let[t,n]=await this.root.execute("auth.requestPasswordReset",e);return t}async confirmPasswordRequest(e){let[t,n]=await this.root.execute("auth.confirmPasswordRequest",e);return t}async requestUnregistration(e){let[t,n]=await this.root.execute("auth.requestUnregistration",e);return t}async confirmUnregistration(e){let[t,n]=await this.root.execute("auth.confirmUnregistration",e);return t}async requestChangeEmail(e){let[t,n]=await this.root.execute("auth.requestChangeEmail",e);return t}async confirmChangeEmail(e){let[t,n]=await this.root.execute("auth.confirmChangeEmail",e);return t}},pn=class{root;constructor(e){this.root=e}async getApiVersion(){let[e,t]=await this.root.execute("misc.getApiVersion",null);return e}async getRequestInformation(){let[e,t]=await this.root.execute("misc.getRequestInformation",null);return e}async getFortune(){let[e,t]=await this.root.execute("misc.getFortune",null);return e}async getTime(){let[e,t]=await this.root.execute("misc.getTime",null);return e}async getHomepageStats(){let[e,t]=await this.root.execute("misc.getHomepageStats",null);return e}async getLogo(){let[e,t]=await this.root.execute("misc.getLogo",null);return t[0]}async getAvatarPacks(){let[e,t]=await this.root.execute("misc.getAvatarPacks",null);return e}async getExamIcons(){let[e,t]=await this.root.execute("misc.getExamIcons",null);return e}async getColors(){let[e,t]=await this.root.execute("misc.getColors",null);return e}async getHexColors(){let[e,t]=await this.root.execute("misc.getHexColors",null);return e}async getDemosForCompiler(e){let[t,n]=await this.root.execute("misc.getDemosForCompiler",e);return t}async translate(e){let[t,n]=await this.root.execute("misc.translate",e);return t}},gn=class{root;constructor(e){this.root=e}async get(){let[e,t]=await this.root.execute("tables.get",null);return e}async getLanguages(){let[e,t]=await this.root.execute("tables.getLanguages",null);return e}async getCountries(){let[e,t]=await this.root.execute("tables.getCountries",null);return e}async getCompilers(){let[e,t]=await this.root.execute("tables.getCompilers",null);return e}async getDrivers(){let[e,t]=await this.root.execute("tables.getDrivers",null);return e}async getVerdicts(){let[e,t]=await this.root.execute("tables.getVerdicts",null);return e}async getProglangs(){let[e,t]=await this.root.execute("tables.getProglangs",null);return e}async getTimezones(){let[e,t]=await this.root.execute("tables.getTimezones",null);return e}},fn=class{root;constructor(e){this.root=e}async indexPublic(){let[e,t]=await this.root.execute("courses.indexPublic",null);return e}},hn=class{root;constructor(e){this.root=e}async getAllAbstractProblems(){let[e,t]=await this.root.execute("problems.getAllAbstractProblems",null);return e}async getAllAbstractProblemsRaw(){let[e,t]=await this.root.execute("problems.getAllAbstractProblemsRaw",null);return e}async getAbstractProblems(e){let[t,n]=await this.root.execute("problems.getAbstractProblems",e);return t}async getSomeAbstractProblems(e){let[t,n]=await this.root.execute("problems.getSomeAbstractProblems",e);return t}async getAbstractProblemsInList(e){let[t,n]=await this.root.execute("problems.getAbstractProblemsInList",e);return t}async getAbstractProblem(e){let[t,n]=await this.root.execute("problems.getAbstractProblem",e);return t}async getAbstractProblemSuppl(e){let[t,n]=await this.root.execute("problems.getAbstractProblemSuppl",e);return t}async getManyAbstractProblemSuppl(e){let[t,n]=await this.root.execute("problems.getManyAbstractProblemSuppl",e);return t}async getProblem(e){let[t,n]=await this.root.execute("problems.getProblem",e);return t}async getProblemSuppl(e){let[t,n]=await this.root.execute("problems.getProblemSuppl",e);return t}async getSampleTestcases(e){let[t,n]=await this.root.execute("problems.getSampleTestcases",e);return t}async getPublicTestcases(e){let[t,n]=await this.root.execute("problems.getPublicTestcases",e);return t}async getZipStatement(e){let[t,n]=await this.root.execute("problems.getZipStatement",e);return n[0]}async getPdfStatement(e){let[t,n]=await this.root.execute("problems.getPdfStatement",e);return n[0]}async getHtmlStatement(e){let[t,n]=await this.root.execute("problems.getHtmlStatement",e);return t}async getTextStatement(e){let[t,n]=await this.root.execute("problems.getTextStatement",e);return t}async getMarkdownStatement(e){let[t,n]=await this.root.execute("problems.getMarkdownStatement",e);return t}async getShortHtmlStatement(e){let[t,n]=await this.root.execute("problems.getShortHtmlStatement",e);return t}async getShortTextStatement(e){let[t,n]=await this.root.execute("problems.getShortTextStatement",e);return t}async getShortMarkdownStatement(e){let[t,n]=await this.root.execute("problems.getShortMarkdownStatement",e);return t}async getTemplates(e){let[t,n]=await this.root.execute("problems.getTemplates",e);return t}async getTemplate(e){let[t,n]=await this.root.execute("problems.getTemplate",e);return n[0]}async getSolutions(e){let[t,n]=await this.root.execute("problems.getSolutions",e);return t}async getSolutionAsB64(e){let[t,n]=await this.root.execute("problems.getSolutionAsB64",e);return t}async getSolutionAsFile(e){let[t,n]=await this.root.execute("problems.getSolutionAsFile",e);return n[0]}async getTestcases(e){let[t,n]=await this.root.execute("problems.getTestcases",e);return t}async getTestcase(e){let[t,n]=await this.root.execute("problems.getTestcase",e);return t}async getAllTestcases(e){let[t,n]=await this.root.execute("problems.getAllTestcases",e);return t}async semanticSearch(e){let[t,n]=await this.root.execute("problems.semanticSearch",e);return t}async fullTextSearch(e){let[t,n]=await this.root.execute("problems.fullTextSearch",e);return t}},bn=class{root;keys;profile;dashboard;submissions;courses;lists;passcodes;exam;exams;statuses;awards;settings;tradingCards;constructor(e){this.root=e,this.keys=new yn(e),this.profile=new vn(e),this.dashboard=new wn(e),this.submissions=new xn(e),this.courses=new Pn(e),this.lists=new Sn(e),this.passcodes=new En(e),this.exam=new _n(e),this.exams=new Tn(e),this.statuses=new Cn(e),this.awards=new An(e),this.settings=new In(e),this.tradingCards=new kn(e)}},yn=class{root;constructor(e){this.root=e}async get(){let[e,t]=await this.root.execute("student.keys.get",null);return e}async getProblems(){let[e,t]=await this.root.execute("student.keys.getProblems",null);return e}async getEnrolledCourses(){let[e,t]=await this.root.execute("student.keys.getEnrolledCourses",null);return e}async getAvailableCourses(){let[e,t]=await this.root.execute("student.keys.getAvailableCourses",null);return e}async getLists(){let[e,t]=await this.root.execute("student.keys.getLists",null);return e}},vn=class{root;constructor(e){this.root=e}async get(){let[e,t]=await this.root.execute("student.profile.get",null);return e}async getAvatar(){let[e,t]=await this.root.execute("student.profile.getAvatar",null);return t[0]}async downloadSubmissions(){let[e,t]=await this.root.execute("student.profile.downloadSubmissions",null);return t[0]}async downloadCards(){let[e,t]=await this.root.execute("student.profile.downloadCards",null);return t[0]}async update(e){let[t,n]=await this.root.execute("student.profile.update",e);return t}async updateAvatar(e){let[t,n]=await this.root.execute("student.profile.updateAvatar",null,[e]);return t}async updatePassword(e){let[t,n]=await this.root.execute("student.profile.updatePassword",e);return t}},wn=class{root;constructor(e){this.root=e}async getAbsoluteRanking(){let[e,t]=await this.root.execute("student.dashboard.getAbsoluteRanking",null);return e}async getAllDistributions(){let[e,t]=await this.root.execute("student.dashboard.getAllDistributions",null);return e}async getCompilersDistribution(){let[e,t]=await this.root.execute("student.dashboard.getCompilersDistribution",null);return e}async getDashboard(){let[e,t]=await this.root.execute("student.dashboard.getDashboard",null);return e}async getHeatmapCalendar(){let[e,t]=await this.root.execute("student.dashboard.getHeatmapCalendar",null);return e}async getProglangsDistribution(){let[e,t]=await this.root.execute("student.dashboard.getProglangsDistribution",null);return e}async getStats(){let[e,t]=await this.root.execute("student.dashboard.getStats",null);return e}async getLevel(){let[e,t]=await this.root.execute("student.dashboard.getLevel",null);return e}async getSubmissionsByHour(){let[e,t]=await this.root.execute("student.dashboard.getSubmissionsByHour",null);return e}async getSubmissionsByWeekDay(){let[e,t]=await this.root.execute("student.dashboard.getSubmissionsByWeekDay",null);return e}async getVerdictsDistribution(){let[e,t]=await this.root.execute("student.dashboard.getVerdictsDistribution",null);return e}},xn=class{root;constructor(e){this.root=e}async indexForAbstractProblem(e){let[t,n]=await this.root.execute("student.submissions.indexForAbstractProblem",e);return t}async indexForProblem(e){let[t,n]=await this.root.execute("student.submissions.indexForProblem",e);return t}async getForAbstractProblems(e){let[t,n]=await this.root.execute("student.submissions.getForAbstractProblems",e);return t}async getAll(){let[e,t]=await this.root.execute("student.submissions.getAll",null);return e}async getRange(e){let[t,n]=await this.root.execute("student.submissions.getRange",e);return t}async submit(e){let[t,n]=await this.root.execute("student.submissions.submit",e);return t}async submitFull(e,t){let[n,s]=await this.root.execute("student.submissions.submitFull",e,t);return n}async get(e){let[t,n]=await this.root.execute("student.submissions.get",e);return t}async getCodeAsB64(e){let[t,n]=await this.root.execute("student.submissions.getCodeAsB64",e);return t}async getCompilationErrors(e){let[t,n]=await this.root.execute("student.submissions.getCompilationErrors",e);return t}async getCodeMetrics(e){let[t,n]=await this.root.execute("student.submissions.getCodeMetrics",e);return t}async getScoring(e){let[t,n]=await this.root.execute("student.submissions.getScoring",e);return t}async getAwards(e){let[t,n]=await this.root.execute("student.submissions.getAwards",e);return t}async getAnalysis(e){let[t,n]=await this.root.execute("student.submissions.getAnalysis",e);return t}async getTestcaseAnalysis(e){let[t,n]=await this.root.execute("student.submissions.getTestcaseAnalysis",e);return t}async getCircuitModules(e){let[t,n]=await this.root.execute("student.submissions.getCircuitModules",e);return t}async getCircuitTracesJson(e){let[t,n]=await this.root.execute("student.submissions.getCircuitTracesJson",e);return t}async getCircuitTracesSvg(e){let[t,n]=await this.root.execute("student.submissions.getCircuitTracesSvg",e);return t}async getGameResult(e){let[t,n]=await this.root.execute("student.submissions.getGameResult",e);return t}async getGameOutput(e){let[t,n]=await this.root.execute("student.submissions.getGameOutput",e);return t}async getDebugInformation(e){let[t,n]=await this.root.execute("student.submissions.getDebugInformation",e);return t}},Pn=class{root;constructor(e){this.root=e}async indexAvailable(){let[e,t]=await this.root.execute("student.courses.indexAvailable",null);return e}async indexEnrolled(){let[e,t]=await this.root.execute("student.courses.indexEnrolled",null);return e}async getAvailable(e){let[t,n]=await this.root.execute("student.courses.getAvailable",e);return t}async getEnrolled(e){let[t,n]=await this.root.execute("student.courses.getEnrolled",e);return t}async enroll(e){let[t,n]=await this.root.execute("student.courses.enroll",e);return t}async unenroll(e){let[t,n]=await this.root.execute("student.courses.unenroll",e);return t}async getArchivedKeys(){let[e,t]=await this.root.execute("student.courses.getArchivedKeys",null);return e}async archive(e){let[t,n]=await this.root.execute("student.courses.archive",e);return t}async unArchive(e){let[t,n]=await this.root.execute("student.courses.unArchive",e);return t}},Sn=class{root;constructor(e){this.root=e}async getAll(){let[e,t]=await this.root.execute("student.lists.getAll",null);return e}async get(e){let[t,n]=await this.root.execute("student.lists.get",e);return t}async getMany(e){let[t,n]=await this.root.execute("student.lists.getMany",e);return t}},En=class{root;constructor(e){this.root=e}async add(e){let[t,n]=await this.root.execute("student.passcodes.add",e);return t}async remove(e){let[t,n]=await this.root.execute("student.passcodes.remove",e);return t}async getAll(){let[e,t]=await this.root.execute("student.passcodes.getAll",null);return e}},_n=class{root;constructor(e){this.root=e}async getReadyExams(){let[e,t]=await this.root.execute("student.exam.getReadyExams",null);return e}async get(){let[e,t]=await this.root.execute("student.exam.get",null);return e}async getDocument(e){let[t,n]=await this.root.execute("student.exam.getDocument",e);return t}async getDocumentPdf(e){let[t,n]=await this.root.execute("student.exam.getDocumentPdf",e);return n[0]}async getRanking(){let[e,t]=await this.root.execute("student.exam.getRanking",null);return e}async finishExam(){let[e,t]=await this.root.execute("student.exam.finishExam",null);return e}},Tn=class{root;constructor(e){this.root=e}async getAll(){let[e,t]=await this.root.execute("student.exams.getAll",null);return e}async get(e){let[t,n]=await this.root.execute("student.exams.get",e);return t}},Cn=class{root;constructor(e){this.root=e}async getAll(){let[e,t]=await this.root.execute("student.statuses.getAll",null);return e}async getForAbstractProblem(e){let[t,n]=await this.root.execute("student.statuses.getForAbstractProblem",e);return t}async getForProblem(e){let[t,n]=await this.root.execute("student.statuses.getForProblem",e);return t}},An=class{root;constructor(e){this.root=e}async getAll(){let[e,t]=await this.root.execute("student.awards.getAll",null);return e}async get(e){let[t,n]=await this.root.execute("student.awards.get",e);return t}},In=class{root;constructor(e){this.root=e}async getAll(){let[e,t]=await this.root.execute("student.settings.getAll",null);return e}async get(e){let[t,n]=await this.root.execute("student.settings.get",e);return t}async set(e){let[t,n]=await this.root.execute("student.settings.set",e);return t}},kn=class{root;constructor(e){this.root=e}async getAll(){let[e,t]=await this.root.execute("student.tradingCards.getAll",null);return e}},Dn=class{root;courses;profile;statuses;submissions;constructor(e){this.root=e,this.courses=new Rn(e),this.profile=new On(e),this.statuses=new $n(e),this.submissions=new Mn(e)}},Rn=class{root;constructor(e){this.root=e}async getCoursesKeys(){let[e,t]=await this.root.execute("tutor.courses.getCoursesKeys",null);return e}async getEnrolledStudents(e){let[t,n]=await this.root.execute("tutor.courses.getEnrolledStudents",e);return t}async getEnrolledTutors(e){let[t,n]=await this.root.execute("tutor.courses.getEnrolledTutors",e);return t}async getCourseSubmissions(e){let[t,n]=await this.root.execute("tutor.courses.getCourseSubmissions",e);return t}},On=class{root;constructor(e){this.root=e}async get(e){let[t,n]=await this.root.execute("tutor.profile.get",e);return t}async getAvatar(e){let[t,n]=await this.root.execute("tutor.profile.getAvatar",e);return n[0]}},$n=class{root;constructor(e){this.root=e}async getAll(e){let[t,n]=await this.root.execute("tutor.statuses.getAll",e);return t}async getForAbstractProblem(e){let[t,n]=await this.root.execute("tutor.statuses.getForAbstractProblem",e);return t}async getForProblem(e){let[t,n]=await this.root.execute("tutor.statuses.getForProblem",e);return t}},Mn=class{root;constructor(e){this.root=e}async indexForAbstractProblem(e){let[t,n]=await this.root.execute("tutor.submissions.indexForAbstractProblem",e);return t}async indexForProblem(e){let[t,n]=await this.root.execute("tutor.submissions.indexForProblem",e);return t}async getForAbstractProblems(e){let[t,n]=await this.root.execute("tutor.submissions.getForAbstractProblems",e);return t}async getAll(e){let[t,n]=await this.root.execute("tutor.submissions.getAll",e);return t}async get(e){let[t,n]=await this.root.execute("tutor.submissions.get",e);return t}async getCodeAsB64(e){let[t,n]=await this.root.execute("tutor.submissions.getCodeAsB64",e);return t}async getCompilationErrors(e){let[t,n]=await this.root.execute("tutor.submissions.getCompilationErrors",e);return t}async getCodeMetrics(e){let[t,n]=await this.root.execute("tutor.submissions.getCodeMetrics",e);return t}async getScoring(e){let[t,n]=await this.root.execute("tutor.submissions.getScoring",e);return t}async getAwards(e){let[t,n]=await this.root.execute("tutor.submissions.getAwards",e);return t}async getAnalysis(e){let[t,n]=await this.root.execute("tutor.submissions.getAnalysis",e);return t}async getTestcaseAnalysis(e){let[t,n]=await this.root.execute("tutor.submissions.getTestcaseAnalysis",e);return t}},Ln=class{root;documents;lists;courses;exams;problems;queries;tags;jutgeai;constructor(e){this.root=e,this.documents=new Un(e),this.lists=new Fn(e),this.courses=new Bn(e),this.exams=new jn(e),this.problems=new Nn(e),this.queries=new qn(e),this.tags=new Wn(e),this.jutgeai=new Vn(e)}},Un=class{root;constructor(e){this.root=e}async index(){let[e,t]=await this.root.execute("instructor.documents.index",null);return e}async get(e){let[t,n]=await this.root.execute("instructor.documents.get",e);return t}async getPdf(e){let[t,n]=await this.root.execute("instructor.documents.getPdf",e);return n[0]}async getZip(e){let[t,n]=await this.root.execute("instructor.documents.getZip",e);return n[0]}async create(e,t){let[n,s]=await this.root.execute("instructor.documents.create",e,[t]);return n}async update(e,t){let[n,s]=await this.root.execute("instructor.documents.update",e,[t]);return n}async remove(e){let[t,n]=await this.root.execute("instructor.documents.remove",e);return t}},Fn=class{root;constructor(e){this.root=e}async index(){let[e,t]=await this.root.execute("instructor.lists.index",null);return e}async get(e){let[t,n]=await this.root.execute("instructor.lists.get",e);return t}async create(e){let[t,n]=await this.root.execute("instructor.lists.create",e);return t}async update(e){let[t,n]=await this.root.execute("instructor.lists.update",e);return t}async remove(e){let[t,n]=await this.root.execute("instructor.lists.remove",e);return t}async getArchived(){let[e,t]=await this.root.execute("instructor.lists.getArchived",null);return e}async archive(e){let[t,n]=await this.root.execute("instructor.lists.archive",e);return t}async unarchive(e){let[t,n]=await this.root.execute("instructor.lists.unarchive",e);return t}},Bn=class{root;constructor(e){this.root=e}async index(){let[e,t]=await this.root.execute("instructor.courses.index",null);return e}async get(e){let[t,n]=await this.root.execute("instructor.courses.get",e);return t}async create(e){let[t,n]=await this.root.execute("instructor.courses.create",e);return t}async update(e){let[t,n]=await this.root.execute("instructor.courses.update",e);return t}async remove(e){let[t,n]=await this.root.execute("instructor.courses.remove",e);return t}async sendInviteToStudents(e){let[t,n]=await this.root.execute("instructor.courses.sendInviteToStudents",e);return t}async sendInviteToTutors(e){let[t,n]=await this.root.execute("instructor.courses.sendInviteToTutors",e);return t}async getStudentProfiles(e){let[t,n]=await this.root.execute("instructor.courses.getStudentProfiles",e);return t}async getTutorProfiles(e){let[t,n]=await this.root.execute("instructor.courses.getTutorProfiles",e);return t}async getArchived(){let[e,t]=await this.root.execute("instructor.courses.getArchived",null);return e}async archive(e){let[t,n]=await this.root.execute("instructor.courses.archive",e);return t}async unarchive(e){let[t,n]=await this.root.execute("instructor.courses.unarchive",e);return t}},jn=class{root;constructor(e){this.root=e}async index(){let[e,t]=await this.root.execute("instructor.exams.index",null);return e}async get(e){let[t,n]=await this.root.execute("instructor.exams.get",e);return t}async getDocuments(e){let[t,n]=await this.root.execute("instructor.exams.getDocuments",e);return t}async getProblems(e){let[t,n]=await this.root.execute("instructor.exams.getProblems",e);return t}async getStudents(e){let[t,n]=await this.root.execute("instructor.exams.getStudents",e);return t}async getStudent(e){let[t,n]=await this.root.execute("instructor.exams.getStudent",e);return t}async getSubmissions(e){let[t,n]=await this.root.execute("instructor.exams.getSubmissions",e);return t}async getSubmissionsPack(e){let[t,n]=await this.root.execute("instructor.exams.getSubmissionsPack",e);return t}async getStatistics(e){let[t,n]=await this.root.execute("instructor.exams.getStatistics",e);return t}async create(e){let[t,n]=await this.root.execute("instructor.exams.create",e);return t}async update(e){let[t,n]=await this.root.execute("instructor.exams.update",e);return t}async updateDocuments(e){let[t,n]=await this.root.execute("instructor.exams.updateDocuments",e);return t}async updateCompilers(e){let[t,n]=await this.root.execute("instructor.exams.updateCompilers",e);return t}async updateProblems(e){let[t,n]=await this.root.execute("instructor.exams.updateProblems",e);return t}async updateStudents(e){let[t,n]=await this.root.execute("instructor.exams.updateStudents",e);return t}async addStudents(e){let[t,n]=await this.root.execute("instructor.exams.addStudents",e);return t}async removeStudents(e){let[t,n]=await this.root.execute("instructor.exams.removeStudents",e);return t}async remove(e){let[t,n]=await this.root.execute("instructor.exams.remove",e);return t}async getArchived(){let[e,t]=await this.root.execute("instructor.exams.getArchived",null);return e}async archive(e){let[t,n]=await this.root.execute("instructor.exams.archive",e);return t}async unarchive(e){let[t,n]=await this.root.execute("instructor.exams.unarchive",e);return t}async getRanking(e){let[t,n]=await this.root.execute("instructor.exams.getRanking",e);return t}},Nn=class{root;constructor(e){this.root=e}async getOwnProblems(){let[e,t]=await this.root.execute("instructor.problems.getOwnProblems",null);return e}async setSharingSettings(e){let[t,n]=await this.root.execute("instructor.problems.setSharingSettings",e);return t}async getSharingSettings(e){let[t,n]=await this.root.execute("instructor.problems.getSharingSettings",e);return t}async getAllSharingSettings(){let[e,t]=await this.root.execute("instructor.problems.getAllSharingSettings",null);return e}async getAlerts(e){let[t,n]=await this.root.execute("instructor.problems.getAlerts",e);return t}async getAllAlerts(){let[e,t]=await this.root.execute("instructor.problems.getAllAlerts",null);return e}async shareWith(e){let[t,n]=await this.root.execute("instructor.problems.shareWith",e);return t}async setDeprecation(e){let[t,n]=await this.root.execute("instructor.problems.setDeprecation",e);return t}async getProblemPopularityBuckets(){let[e,t]=await this.root.execute("instructor.problems.getProblemPopularityBuckets",null);return e}async getAnonymousSubmissions(e){let[t,n]=await this.root.execute("instructor.problems.getAnonymousSubmissions",e);return t}async download(e){let[t,n]=await this.root.execute("instructor.problems.download",e);return n[0]}async create(e,t){let[n,s]=await this.root.execute("instructor.problems.create",e,[t]);return n}async update(e,t){let[n,s]=await this.root.execute("instructor.problems.update",e,[t]);return n}async remove(e){let[t,n]=await this.root.execute("instructor.problems.remove",e);return t}},qn=class{root;constructor(e){this.root=e}async getCourseProblemSubmissions(e){let[t,n]=await this.root.execute("instructor.queries.getCourseProblemSubmissions",e);return t}async getCourseListSubmissions(e){let[t,n]=await this.root.execute("instructor.queries.getCourseListSubmissions",e);return t}},Wn=class{root;constructor(e){this.root=e}async index(){let[e,t]=await this.root.execute("instructor.tags.index",null);return e}async getDict(){let[e,t]=await this.root.execute("instructor.tags.getDict",null);return e}async get(e){let[t,n]=await this.root.execute("instructor.tags.get",e);return t}},Vn=class{root;constructor(e){this.root=e}async supportedModels(){let[e,t]=await this.root.execute("instructor.jutgeai.supportedModels",null);return e}async supportedImageModels(){let[e,t]=await this.root.execute("instructor.jutgeai.supportedImageModels",null);return e}async chat(e){let[t,n]=await this.root.execute("instructor.jutgeai.chat",e);return t}async createImage(e){let[t,n]=await this.root.execute("instructor.jutgeai.createImage",e);return n[0]}async getLlmUsage(){let[e,t]=await this.root.execute("instructor.jutgeai.getLlmUsage",null);return e}},Jn=class{root;constructor(e){this.root=e}async getGames(){let[e,t]=await this.root.execute("games.getGames",null);return e}async getDummy(e){let[t,n]=await this.root.execute("games.getDummy",e);return t}async getViewer(e){let[t,n]=await this.root.execute("games.getViewer",e);return n[0]}async submitMatch(e){let[t,n]=await this.root.execute("games.submitMatch",e);return t}},Hn=class{root;instructors;courses;users;dashboard;queue;tasks;stats;problems;constructor(e){this.root=e,this.instructors=new Gn(e),this.courses=new zn(e),this.users=new Kn(e),this.dashboard=new Yn(e),this.queue=new Qn(e),this.tasks=new Zn(e),this.stats=new Xn(e),this.problems=new es(e)}},Gn=class{root;constructor(e){this.root=e}async get(){let[e,t]=await this.root.execute("admin.instructors.get",null);return e}async add(e){let[t,n]=await this.root.execute("admin.instructors.add",e);return t}async remove(e){let[t,n]=await this.root.execute("admin.instructors.remove",e);return t}},zn=class{root;constructor(e){this.root=e}async getAll(){let[e,t]=await this.root.execute("admin.courses.getAll",null);return e}async setPublicAndOfficial(e){let[t,n]=await this.root.execute("admin.courses.setPublicAndOfficial",e);return t}},Kn=class{root;constructor(e){this.root=e}async count(){let[e,t]=await this.root.execute("admin.users.count",null);return e}async create(e){let[t,n]=await this.root.execute("admin.users.create",e);return t}async remove(e){let[t,n]=await this.root.execute("admin.users.remove",e);return t}async setPassword(e){let[t,n]=await this.root.execute("admin.users.setPassword",e);return t}async getProfiles(e){let[t,n]=await this.root.execute("admin.users.getProfiles",e);return t}async getAllWithEmail(e){let[t,n]=await this.root.execute("admin.users.getAllWithEmail",e);return t}async getSpamUsers(){let[e,t]=await this.root.execute("admin.users.getSpamUsers",null);return e}async removeSpamUsers(e){let[t,n]=await this.root.execute("admin.users.removeSpamUsers",e);return t}},Yn=class{root;constructor(e){this.root=e}async getAll(){let[e,t]=await this.root.execute("admin.dashboard.getAll",null);return e}async getDatabasesInfo(){let[e,t]=await this.root.execute("admin.dashboard.getDatabasesInfo",null);return e}async getFreeDiskSpace(){let[e,t]=await this.root.execute("admin.dashboard.getFreeDiskSpace",null);return e}async getRecentConnectedUsers(){let[e,t]=await this.root.execute("admin.dashboard.getRecentConnectedUsers",null);return e}async getRecentLoadAverages(){let[e,t]=await this.root.execute("admin.dashboard.getRecentLoadAverages",null);return e}async getRecentSubmissions(){let[e,t]=await this.root.execute("admin.dashboard.getRecentSubmissions",null);return e}async getSubmissionsHistograms(){let[e,t]=await this.root.execute("admin.dashboard.getSubmissionsHistograms",null);return e}async getZombies(){let[e,t]=await this.root.execute("admin.dashboard.getZombies",null);return e}async getUpcomingExams(e){let[t,n]=await this.root.execute("admin.dashboard.getUpcomingExams",e);return t}async getPM2Status(){let[e,t]=await this.root.execute("admin.dashboard.getPM2Status",null);return e}async getDockerStatus(){let[e,t]=await this.root.execute("admin.dashboard.getDockerStatus",null);return e}},Qn=class{root;constructor(e){this.root=e}async getQueue(e){let[t,n]=await this.root.execute("admin.queue.getQueue",e);return t}},Zn=class{root;constructor(e){this.root=e}async purgeAuthTokens(){let[e,t]=await this.root.execute("admin.tasks.purgeAuthTokens",null);return e}async clearCaches(){let[e,t]=await this.root.execute("admin.tasks.clearCaches",null);return e}async fatalizeIEs(){let[e,t]=await this.root.execute("admin.tasks.fatalizeIEs",null);return e}async fatalizePendings(){let[e,t]=await this.root.execute("admin.tasks.fatalizePendings",null);return e}async resubmitIEs(){let[e,t]=await this.root.execute("admin.tasks.resubmitIEs",null);return e}async resubmitPendings(){let[e,t]=await this.root.execute("admin.tasks.resubmitPendings",null);return e}async getFullTextSearchDatabase(){let[e,t]=await this.root.execute("admin.tasks.getFullTextSearchDatabase",null);return t[0]}async updateSemanticSearchDatabase(e,t){let[n,s]=await this.root.execute("admin.tasks.updateSemanticSearchDatabase",e,[t]);return n}},Xn=class{root;constructor(e){this.root=e}async getCounters(){let[e,t]=await this.root.execute("admin.stats.getCounters",null);return e}async getDistributionOfVerdicts(){let[e,t]=await this.root.execute("admin.stats.getDistributionOfVerdicts",null);return e}async getDistributionOfVerdictsByYear(){let[e,t]=await this.root.execute("admin.stats.getDistributionOfVerdictsByYear",null);return e}async getDistributionOfCompilers(){let[e,t]=await this.root.execute("admin.stats.getDistributionOfCompilers",null);return e}async getDistributionOfProglangs(){let[e,t]=await this.root.execute("admin.stats.getDistributionOfProglangs",null);return e}async getDistributionOfUsersByYear(){let[e,t]=await this.root.execute("admin.stats.getDistributionOfUsersByYear",null);return e}async getDistributionOfUsersByCountry(){let[e,t]=await this.root.execute("admin.stats.getDistributionOfUsersByCountry",null);return e}async getDistributionOfUsersBySubmissions(e){let[t,n]=await this.root.execute("admin.stats.getDistributionOfUsersBySubmissions",e);return t}async getRankingOfUsers(e){let[t,n]=await this.root.execute("admin.stats.getRankingOfUsers",e);return t}async getDistributionOfSubmissionsByHour(){let[e,t]=await this.root.execute("admin.stats.getDistributionOfSubmissionsByHour",null);return e}async getDistributionOfSubmissionsByProglang(){let[e,t]=await this.root.execute("admin.stats.getDistributionOfSubmissionsByProglang",null);return e}async getDistributionOfSubmissionsByCompiler(){let[e,t]=await this.root.execute("admin.stats.getDistributionOfSubmissionsByCompiler",null);return e}async getDistributionOfSubmissionsByWeekday(){let[e,t]=await this.root.execute("admin.stats.getDistributionOfSubmissionsByWeekday",null);return e}async getDistributionOfSubmissionsByYear(){let[e,t]=await this.root.execute("admin.stats.getDistributionOfSubmissionsByYear",null);return e}async getDistributionOfSubmissionsByYearForProglang(e){let[t,n]=await this.root.execute("admin.stats.getDistributionOfSubmissionsByYearForProglang",e);return t}async getDistributionOfSubmissionsByDay(){let[e,t]=await this.root.execute("admin.stats.getDistributionOfSubmissionsByDay",null);return e}async getHeatmapCalendarOfSubmissions(e){let[t,n]=await this.root.execute("admin.stats.getHeatmapCalendarOfSubmissions",e);return t}async getDistributionOfDomains(){let[e,t]=await this.root.execute("admin.stats.getDistributionOfDomains",null);return e}},es=class{root;constructor(e){this.root=e}async getProblemSummary(e){let[t,n]=await this.root.execute("admin.problems.getProblemSummary",e);return t}async getProblemsWithSummary(){let[e,t]=await this.root.execute("admin.problems.getProblemsWithSummary",null);return e}async getProblemsWithoutSummary(){let[e,t]=await this.root.execute("admin.problems.getProblemsWithoutSummary",null);return e}async getAbstractProblemSolutionTags(e){let[t,n]=await this.root.execute("admin.problems.getAbstractProblemSolutionTags",e);return t}async getAbstractProblemsWithSolutionTags(){let[e,t]=await this.root.execute("admin.problems.getAbstractProblemsWithSolutionTags",null);return e}async getAbstractProblemsWithoutSolutionTags(){let[e,t]=await this.root.execute("admin.problems.getAbstractProblemsWithoutSolutionTags",null);return e}};var ti=["debug","info","warn","error"],A=class{get log(){let e=this.constructor.name,t=n=>(...s)=>console[n](`[${e}]:`,...s);return Object.fromEntries(ti.map(n=>[n,t(n)]))}},j=class{static get log(){let e=this.name,t=n=>(...s)=>console[n](`[${e}]:`,...s);return Object.fromEntries(ti.map(n=>[n,t(n)]))}};var vd=x(dd()),L=x(require("vscode")),g=new Ft;g.userAgent="jutge-vscode";var Po="jutge-vscode.signIn.email",md="jutge-vscode.signIn.password",pd="jutgeToken",gd="jutgeUserUID",fd="jutgePreExamToken",hd="jutgeExamToken",bd="jutgeApiMode",yd="jutgeUseDevApi",f=class extends j{static context_;static signedIn_=!1;static signedInPreExam_=!1;static apiMode_="normal";static useDevApi_=!1;static async setContextKey(e,t){await L.commands.executeCommand("setContext",`jutge-vscode.${e}`,t)}static async setAllContextKeys(e){await Promise.all([this.setContextKey("isSignedIn.Courses",e.courses),this.setContextKey("isSignedIn.Exam",e.exam),this.setContextKey("isSignedIn.PreExam",e.preExam),this.setContextKey("isContestMode",e.contestMode)])}static async initialize(e){this.log.info("Initializing..."),this.context_=e;let t=e.globalState.get(yd);typeof t=="boolean"&&(this.useDevApi_=t),await this.resumeFromStorage(),this.log.info("Initialization complete")}static isSignedIn(){return this.signedIn_}static isSignedInExam(){return this.signedIn_&&!this.signedInPreExam_&&(this.apiMode_==="exam"||this.apiMode_==="contest")}static isSignedInPreExam(){return this.signedInPreExam_}static isExamMode(){return this.apiMode_==="exam"}static isContestMode(){return this.apiMode_==="contest"}static getApiMode(){return this.apiMode_}static setApiMode(e,t=this.useDevApi_){this.apiMode_=e,this.useDevApi_=t,yt({mode:e,useDevApi:t}),this.log.info(`API mode set to '${e}' (dev=${t}).`)}static normalizeMode(e){return e==="exam"||e==="contest"||e==="normal"?e:"normal"}static getToken(){return this.context_.globalState.get(pd)}static async storeToken(e){await this.context_.globalState.update(pd,e)}static getUserUID(){return this.context_.globalState.get(gd)}static async storeUserUID(e){await this.context_.globalState.update(gd,e)}static getPreExamToken(){return this.context_.globalState.get(fd)}static async storePreExamToken(e){await this.context_.globalState.update(fd,e)}static getExamToken(){return this.context_.globalState.get(hd)}static async storeExamToken(e){await this.context_.globalState.update(hd,e)}static getStoredApiMode(){return this.normalizeMode(this.context_.globalState.get(bd))}static async storeApiMode(e){await this.context_.globalState.update(bd,e)}static async storeUseDevApi(e){await this.context_.globalState.update(yd,e)}static async getStoredSignInEmail(){let e=await this.context_.secrets.get(Po);if(e!==void 0&&e!=="")return e;let t=this.context_.globalState.get("email");if(t)return await this.context_.secrets.store(Po,t),await this.context_.globalState.update("email",void 0),t}static async getStoredSignInPassword(){let e=await this.context_.secrets.get(md);return e===""?void 0:e}static async storeSignInCredentials(e,t){await this.context_.secrets.store(Po,e),await this.context_.secrets.store(md,t),await this.context_.globalState.update("email",void 0)}static logStorageKeys(){let e=this.context_.globalState.keys().join(", ");this.log.info(`Keys in storage: ${e}`)}static invalidateToken(){this.storeExamToken(void 0),this.storePreExamToken(void 0),this.storeToken(void 0),g.meta={token:"<invalidated!> XD",user_uid:""},this.log.info("Invalidated tokens.")}static async isTokenValidOnHost(e,t,n){let s=g.meta,o=g.JUTGE_API_URL;try{return yt({mode:t,useDevApi:n}),g.meta={token:e,user_uid:s?.user_uid??""},await g.student.profile.get(),!0}catch(i){return this.log.info(`Token validation failed (mode=${t}, dev=${n}): ${i}`),!1}finally{g.meta=s,g.JUTGE_API_URL=o}}static async setSignedInJutge(e,t){this.setApiMode("normal",this.useDevApi_),this.signedIn_=!0,this.signedInPreExam_=!1,await this.storeToken(e),await this.storeUserUID(t),await this.storeApiMode("normal"),await this.setAllContextKeys({courses:!0,exam:!1,preExam:!1,contestMode:!1}),g.meta={token:e,user_uid:t},this.log.info("Signed in (normal).")}static async setSignedInPreExam(e,t,n){this.setApiMode(n,this.useDevApi_),this.signedIn_=!1,this.signedInPreExam_=!0,await this.storePreExamToken(e),await this.storeApiMode(n),await this.setAllContextKeys({courses:!1,exam:!1,preExam:!0,contestMode:n==="contest"}),g.meta={token:e,user_uid:t},this.log.info(`Signed in pre-exam (${n}).`)}static async setSignedInExam(e,t,n="exam"){this.setApiMode(n,this.useDevApi_),this.signedIn_=!0,this.signedInPreExam_=!1,await this.storeExamToken(e),await this.storeApiMode(n),await this.storePreExamToken(void 0),await this.setAllContextKeys({courses:!1,exam:!0,preExam:!1,contestMode:n==="contest"}),g.meta={token:e,user_uid:t},this.log.info(`Signed in to ${n}.`)}static async setSignedOut(){try{await g.logout()}catch(e){e instanceof V&&this.log.info("Token probably expired.")}this.signedIn_=!1,this.signedInPreExam_=!1,this.setApiMode("normal",this.useDevApi_),await this.storeApiMode("normal"),await this.setAllContextKeys({courses:!1,exam:!1,preExam:!1,contestMode:!1}),this.log.info("Signed out.")}static async signInJutge({email:e,password:t}){let n=e.trim();if(!n)return{ok:!1,error:"Please enter your email."};if(!t)return{ok:!1,error:"Please enter your password."};this.setApiMode("normal",this.useDevApi_);try{let s=await g.login({email:n,password:t});return await this.setSignedInJutge(s.token,s.user_uid),await this.storeSignInCredentials(n,t),await L.commands.executeCommand("jutge-vscode.refreshCoursesTree"),await L.commands.executeCommand("jutge-vscode.refreshProfileTree"),this.getProfileSWR(),{ok:!0}}catch(s){return{ok:!1,error:this.normalizeError(s)}}}static async signInPreExam({email:e,password:t,mode:n,useDevApi:s}){let o=e.trim();if(!o)return{ok:!1,error:"Please enter your email."};if(!t)return{ok:!1,error:"Please enter your password."};let i=!!s;this.setApiMode("normal",i),await this.storeUseDevApi(i);try{let a=await g.login({email:o,password:t});return await this.storeSignInCredentials(o,t),await this.setSignedInPreExam(a.token,a.user_uid,n),{ok:!0}}catch(a){return this.setApiMode("normal",this.useDevApi_),{ok:!1,error:this.normalizeError(a)}}}static async enterExam({mode:e,examKey:t,examPassword:n}){let s=(t||"").trim();if(!s)return{ok:!1,error:`Please select ${e==="contest"?"a contest":"an exam"}.`};if(!n)return{ok:!1,error:`Please enter the ${e==="contest"?"contest":"exam"} password.`};let o=await this.getStoredSignInEmail(),i=await this.getStoredSignInPassword();if(!o||!i)return{ok:!1,error:"Your sign-in credentials were lost. Please sign in again."};this.setApiMode(e,this.useDevApi_);try{let a=await g.loginExam({email:o,password:i,exam:s,exam_password:n});return await this.setSignedInExam(a.token,e),await L.commands.executeCommand("jutge-vscode.refreshExamsTree"),await L.commands.executeCommand("jutge-vscode.refreshExamPropertiesTree"),await L.commands.executeCommand("jutge-vscode.refreshExamDocumentsTree"),e==="contest"&&await L.commands.executeCommand("jutge-vscode.refreshRankingTree"),this.getProfileSWR(),{ok:!0}}catch(a){return{ok:!1,error:this.normalizeError(a)}}}static normalizeError(e){let t=String(e);return e instanceof Error&&(t=e.message,e.cause instanceof Error&&(t=e.cause.message)),(!t||t.trim().length===0||t==="[object Object]")&&(t="Invalid credentials."),this.log.error("Error signing in:",t,e),t}static async getReadyExamsForMode(e,t=this.useDevApi_){let n=this.apiMode_,s=this.useDevApi_;try{return this.setApiMode(e,t),(await g.student.exam.getReadyExams()).map(i=>i.exam_key)}catch(o){this.log.error(`Could not get exams: ${o}`);return}finally{this.setApiMode(n,s)}}static async resumeFromStorage(){let e=this.getStoredApiMode(),t=this.getExamToken();if(t){let o=e==="contest"?"contest":"exam";if(await this.isTokenValidOnHost(t,o,this.useDevApi_)){this.log.info(`Resuming from exam token (${o}).`),await this.setSignedInExam(t,o);return}}if(e==="exam"||e==="contest"){let o=this.getPreExamToken();if(o&&await this.isTokenValidOnHost(o,"normal",this.useDevApi_)){this.log.info(`Resuming from pre-exam token (intended mode=${e}).`),await this.setSignedInPreExam(o,"",e);return}}let n=this.getToken(),s=this.getUserUID();if(n&&await this.isTokenValidOnHost(n,"normal",this.useDevApi_)){this.log.info("Resuming from normal token."),await this.setSignedInJutge(n,s??"");return}this.log.debug("No valid token found during activation")}static async signOutPreExam(){await this.storePreExamToken(void 0),await this.setSignedOut()}static async confirmSignOut(){let e={placeHolder:"Please confirm that you want to sign out",no:"No, keep signed in.",yes:"Yes, sign out."};return(this.isExamMode()||this.isContestMode())&&(e={placeHolder:"Please confirm that you want to finish the exam",no:"No, keep doing the exam.",yes:"Yes, finish the exam."}),await L.window.showQuickPick([e.no,e.yes],{title:"Confirmation",placeHolder:e.placeHolder})===e.yes}static async signOut(e){try{if((e?.askConfirmation??!1)&&!await this.confirmSignOut())return;await this.storeExamToken(void 0),await this.storePreExamToken(void 0),await this.storeToken(void 0),await this.setSignedOut(),L.commands.executeCommand("jutge-vscode.refreshCoursesTree"),typeof e?.message=="string"&&e.message.trim().length>0&&L.window.showInformationMessage(`Jutge.org: ${e.message}`)}catch(t){console.error(t)}}static async signOutExam(e){try{if((e?.askConfirmation??!0)&&!await this.confirmSignOut())return;await this.storeExamToken(void 0),await this.storePreExamToken(void 0),await this.setSignedOut(),L.commands.executeCommand("jutge-vscode.refreshExamsTree");let n=e?.message||"You have signed out";L.window.showInformationMessage(`Jutge.org: ${n}`)}catch(t){console.error(t)}}static SWR(e,t){let n=`this.${e}`,s={data:void 0,onUpdate:i=>{this.log.warn(`onUpdate not replaced by the caller (${e})`)}};return(async()=>{this.log.info(`Revalidating '${e}'...`);try{let i=await t();(0,vd.default)(s.data,i)?this.log.info(`Revalidated '${e}': no changes.`):(this.log.info(`Revalidated '${e}': update!`),this.context_.globalState.update(n,i),s.onUpdate(i))}catch(i){i instanceof V?(this.log.info("Token might have expired (UnauthorizedError). Signing out."),this.signOut({askConfirmation:!1,message:"Token has expired"})):this.log.info(`Error getting data: ${i}`),s.onUpdate(null)}})(),s.data=this.context_.globalState.get(n),s}static async promisify(e){return new Promise((t,n)=>{try{let s=e();s.data!==void 0?t(s.data):s.onUpdate=o=>{o===null?n("Could not load data"):t(o)}}catch(s){n(s)}})}static getExamSWR(){return this.SWR("getExam",async()=>g.student.exam.get())}static getCoursesSWR(){return this.SWR("getCourses",async()=>g.student.courses.indexEnrolled())}static getCourseSWR(e){return this.SWR(`getCourse(${e})`,async()=>{let[t,n]=await Promise.allSettled([g.student.courses.getEnrolled(e),g.student.lists.getAll()]);if(t.status==="rejected"||n.status==="rejected")throw this.log.error("getCourse: Could not load course or all lists"),new Error("[JutgeService] getCourse: Could not load course or all lists");let s=t.value,o=n.value;return{course:s,lists:s.lists.map(i=>o[i])}})}static getAllListsSWR(){return this.SWR("getAllLists()",async()=>g.student.lists.getAll())}static async problemExists(e){return(await g.problems.getAbstractProblems(e))[e]!==void 0}static getAbstractProblemsSWR(e){return this.SWR(`getAbstractProblems(${e.join(",")})`,async()=>{let t=await g.problems.getAbstractProblems(e.join(",")),n=[];for(let[s,o]of Object.entries(t))s!==null&&n.push(o);return n})}static getAbstractProblemsInListSWR(e){return this.SWR(`getAbstractProblemsInList(${e})`,async()=>{let[t,n]=await Promise.allSettled([g.student.lists.get(e),g.problems.getAbstractProblemsInList(e)]);if(n.status==="rejected"||t.status==="rejected")throw new Error("[JutgeService] getAbstractProblemsInListSWR: Failed to load abs. problems or list");let s=n.value,o=t.value.items,i=[];for(let{problem_nm:a,description:l}of o)a===null&&l!==null?i.push(l):a!==null&&a in s&&i.push(s[a]);return i})}static getAllStatusesSWR(){return this.SWR("getAllStatuses()",async()=>g.student.statuses.getAll())}static getAllSubmissionsSWR(){return this.SWR("getAllSubmissions()",async()=>g.student.submissions.getAll())}static getTemplateListSWR(e){return this.SWR(`getTemplates(${e})`,async()=>g.problems.getTemplates(e))}static getTemplateList(e){return this.promisify(()=>this.getTemplateListSWR(e))}static getTemplate(e,t){return g.problems.getTemplate({problem_id:e,template:t})}static getProfileSWR(){return this.SWR("getProfile",async()=>g.student.profile.get())}static getAbstractProblemSWR(e){return this.SWR(`getAbstractProblem(${e})`,async()=>g.problems.getAbstractProblem(e))}static async getAbstractProblem(e){return this.promisify(()=>this.getAbstractProblemSWR(e))}static getHtmlStatementSWR(e){return this.SWR(`getHtmlStatement(${e})`,async()=>g.problems.getHtmlStatement(e))}static async getHtmlStatement(e){return this.promisify(()=>this.getHtmlStatementSWR(e))}static getProblemSupplSWR(e){return this.SWR(`getProblemSuppl(${e})`,async()=>g.problems.getProblemSuppl(e))}static getProblemSuppl(e){return this.promisify(()=>this.getProblemSupplSWR(e))}static getSampleTestcasesSWR(e){return this.SWR(`getSampleTestcases(${e})`,async()=>g.problems.getSampleTestcases(e))}static async getSampleTestcases(e){return this.promisify(()=>this.getSampleTestcasesSWR(e))}static async submit(e,t){try{return await g.student.submissions.submitFull(t,[e])}catch(n){throw n instanceof V&&this.signOut({askConfirmation:!1,message:"Token expired."}),n}}static async getSubmission(e){return g.student.submissions.get(e)}static async getSubmissionScoring(e){return g.student.submissions.getScoring(e)}};var wd="jutge-exam-documents",eb=12e3,_e=class extends he.TreeItem{constructor(e,t){super(e,he.TreeItemCollapsibleState.None),this.description=t?.description,this.tooltip=t?.tooltip,t?.documentNm&&(this.iconPath=new he.ThemeIcon("file-pdf"),this.command={command:"jutge-vscode.openExamDocument",title:"Open Exam Document",arguments:[t.documentNm,e]})}};function tb(r,e,t){return new Promise((n,s)=>{let o=setTimeout(()=>s(new Error(t)),e);r.then(i=>n(i)).catch(i=>s(i)).finally(()=>clearTimeout(o))})}function rb(r){let e=r.description?.trim()?`${r.title}

${r.description}`:r.title;return new _e(r.title,{description:r.description||void 0,tooltip:e,documentNm:r.document_nm})}var Rr=class{_onDidChangeTreeData=new he.EventEmitter;onDidChangeTreeData=this._onDidChangeTreeData.event;items=[new _e("Loading documents...")];constructor(){this.refresh()}async refresh(){this.items=[new _e("Loading documents...")],this._onDidChangeTreeData.fire(void 0);try{let t=(await tb(g.student.exam.get(),eb,"Timed out while fetching exam documents.")).documents||[];this.items=t.length>0?t.map(rb):[new _e("No documents")]}catch(e){let t=e instanceof Error?e.message:String(e);this.items=[new _e("Could not load exam documents",{description:t})]}this._onDidChangeTreeData.fire(void 0)}getTreeItem(e){return e}getChildren(){return Promise.resolve(this.items)}};var Te=x(require("vscode"));var xd="jutge-exam-properties",nb=12e3,sb=new Set(["title","time_start","exp_time_start","running_time"]),Z=class extends Te.TreeItem{constructor(t,n,s){let o=typeof n=="object"&&n!==null;super(t,o?Te.TreeItemCollapsibleState.Collapsed:Te.TreeItemCollapsibleState.None);this.keyLabel=t;this.value=n;this.fullPath=s;this.contextValue=o?"exam-property-node":"exam-property-leaf",this.id=s,this.description=o?void 0:this.toInlineValue_(n),this.tooltip=`${s}: ${this.toInlineValue_(n)}`}keyLabel;value;fullPath;toInlineValue_(t){return typeof t=="string"?t:JSON.stringify(t)}};function ob(r,e,t){return new Promise((n,s)=>{let o=setTimeout(()=>s(new Error(t)),e);r.then(i=>n(i)).catch(i=>s(i)).finally(()=>clearTimeout(o))})}var Or=class{_onDidChangeTreeData=new Te.EventEmitter;onDidChangeTreeData=this._onDidChangeTreeData.event;rootValue=null;rootItems=[new Z("Loading...","","$")];constructor(){this.refresh()}async refresh(){this.rootItems=[new Z("Loading exam properties...","","$")],this._onDidChangeTreeData.fire(void 0);try{let e=await ob(g.student.exam.get(),nb,"Timed out while fetching exam properties.");this.rootValue=e,this.rootItems=this.toRootItems_(this.rootValue)}catch(e){let t=e instanceof Error?e.message:String(e);this.rootItems=[new Z("Could not load exam properties",t,"$")]}this._onDidChangeTreeData.fire(void 0)}getTreeItem(e){return e}getChildren(e){return e?Promise.resolve(this.toChildren_(e)):Promise.resolve(this.rootItems)}toRootItems_(e){return Array.isArray(e)?e.map((t,n)=>new Z(`[${n}]`,t,`$[${n}]`)):typeof e=="object"&&e!==null?Object.entries(e).filter(([t])=>!sb.has(t)).map(([t,n])=>new Z(t,n,`$.${t}`)):[new Z("value",e,"$")]}toChildren_(e){let t=e.value;return Array.isArray(t)?t.map((n,s)=>new Z(`[${s}]`,n,`${e.fullPath}[${s}]`)):typeof t=="object"&&t!==null?Object.entries(t).map(([n,s])=>new Z(n,s,`${e.fullPath}.${n}`)):[]}};var H=x(require("vscode"));var Pd="jutge-ranking",So=12e3,Sd=1e4,ib="jutge-ranking-panel",Ce=class extends H.TreeItem{constructor(e,t){super(e,H.TreeItemCollapsibleState.None),this.description=t}};function Eo(r,e,t){return new Promise((n,s)=>{let o=setTimeout(()=>s(new Error(t)),e);r.then(i=>n(i)).catch(i=>s(i)).finally(()=>clearTimeout(o))})}function ab(r){return r.length===0?[new Ce("No ranking data")]:r.map((e,t)=>{let s=`${e.position??t+1}. ${e.name}  `,i=`\u3010${`${e.score}`}\u3011`,a=`${s}${i}`;return new Ce({label:a,highlights:[[s.length,s.length+i.length]]},`${Math.floor(e.time)}`)})}function _o(r){return r.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function lb(r,e){if(r.verdict===null)return"";let t=e.verdicts[r.verdict]??"var(--vscode-foreground)",n=r.wrongs!==0?` <span class="subtle">(${r.wrongs})</span>`:"";return r.verdict==="AC"?`<div style="color:${t}">${Math.floor(r.time)}${n}</div>`:`<div style="color:${t}">${Math.floor(r.time)}${n}<br/>${_o(r.verdict)}</div>`}function ub(r){let{ranking:e,colors:t}=r,n=e.map(i=>{let a=i.rankingResults.map(l=>`<td class="problem-cell">${lb(l,t)}</td>`).join("");return`<tr>
                <td class="position">${i.position??""}</td>
                <td class="name">${_o(i.name)}</td>
                <td class="score"><strong>${i.score}</strong><div class="subtle">${Math.floor(i.time)}</div></td>
                ${a}
                <td class="score"><strong>${i.score}</strong><div class="subtle">${Math.floor(i.time)}</div></td>
            </tr>`}).join(""),s=e[0]?.rankingResults.length??0;return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline';" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contest Ranking</title>
    <style>
        body {
            margin: 0;
            padding: 12px;
            color: var(--vscode-foreground);
            font-family: var(--vscode-font-family);
            background: var(--vscode-editor-background);
        }
        .table-wrap {
            overflow: auto;
        }
        table {
            border-collapse: separate;
            border-spacing: 4px;
            font-size: 12px;
            margin: 0 auto;
        }
        th, td {
            background: var(--vscode-inputOption-activeBackground, var(--vscode-editorWidget-background));
            border-radius: 4px;
            border: 1px solid var(--vscode-widget-border, transparent);
            padding: 6px 8px;
            text-align: center;
            white-space: nowrap;
            min-height: 28px;
        }
        th {
            font-weight: 600;
        }
        td.name {
            text-align: left;
            max-width: 240px;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .subtle {
            opacity: 0.75;
            font-size: 11px;
        }
    </style>
</head>
<body>
    <div class="table-wrap">
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th>Score</th>
                    ${Array.from({length:s},(i,a)=>`P${a+1}`).map(i=>`<th>${i}</th>`).join("")}
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                ${n||`<tr><td colspan="${s+4}">No ranking data</td></tr>`}
            </tbody>
        </table>
    </div>
</body>
</html>`}var $r=class r{static current;panel;intervalId;disposed=!1;constructor(){this.panel=H.window.createWebviewPanel(ib,"Contest Ranking",H.ViewColumn.Beside,{enableScripts:!1}),this.panel.onDidDispose(()=>this.dispose()),this.intervalId=setInterval(()=>{this.refresh()},Sd),this.refresh()}static openOrReveal(){if(r.current){r.current.panel.reveal(H.ViewColumn.Beside,!0);return}r.current=new r}dispose(){this.disposed||(this.disposed=!0,clearInterval(this.intervalId),r.current===this&&(r.current=void 0),this.panel.dispose())}async refresh(){try{let[e,t]=await Promise.all([Eo(g.student.exam.getRanking(),So,"Timed out while fetching contest ranking."),Eo(g.misc.getHexColors(),So,"Timed out while fetching ranking colors.")]);this.panel.webview.html=ub({ranking:e,colors:t})}catch(e){let t=_o(e instanceof Error?e.message:String(e));this.panel.webview.html=`<!DOCTYPE html><html><body><p>Could not load ranking: ${t}</p></body></html>`}}},Mr=class{_onDidChangeTreeData=new H.EventEmitter;onDidChangeTreeData=this._onDidChangeTreeData.event;intervalId;items=[new Ce("Loading ranking...")];constructor(){this.intervalId=setInterval(()=>{this.refresh()},Sd),this.refresh()}dispose(){clearInterval(this.intervalId)}async refresh(){this.items=[new Ce("Loading ranking...")],this._onDidChangeTreeData.fire(void 0);try{let e=await Eo(g.student.exam.getRanking(),So,"Timed out while fetching contest ranking.");this.items=ab(e)}catch(e){let t=e instanceof Error?e.message:String(e);this.items=[new Ce("Could not load ranking",t)]}this._onDidChangeTreeData.fire(void 0)}getTreeItem(e){return e}getChildren(){return Promise.resolve(this.items)}};var be=x(require("vscode"));var cb=1e4,vt=12e3,db="jutge-dashboard-panel";function wt(r,e,t){return new Promise((n,s)=>{let o=setTimeout(()=>s(new Error(t)),e);r.then(i=>n(i)).catch(i=>s(i)).finally(()=>clearTimeout(o))})}function k(r){return r.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}function Lr(r){return r==null?"-":String(r)}function Ed(r){if(r==null||r==="")return"-";let e=new Date(r);return Number.isNaN(e.getTime())?Lr(r):e.toLocaleString()}function mb(r){if(r.time_start===null||r.time_start===void 0||r.time_start==="")return"-";let e=new Date(r.time_start);if(Number.isNaN(e.getTime()))return"-";let t=Number(r.running_time);return Number.isFinite(t)?new Date(e.getTime()+t*60*1e3).toLocaleString():"-"}function pb(r){let e=r.indexOf("_");return e<=0?r:r.slice(0,e)}function gb(r,e,t){let n=new Map,s=new Set(r.problems.map(a=>a.problem_nm)),o=new Map;for(let a of t){let l=new Set(Object.keys(a.problems||{}));o.set(a.problem_nm,l)}for(let a of e){let l=a.problem_id,u=pb(l);if(!s.has(u))continue;let d=o.get(u);if(d&&d.size>0&&!d.has(l))continue;let c=n.get(u)||{totalSubmissions:0,acceptedSubmissions:0,latestSubmission:null};if(c.totalSubmissions+=1,a.veredict==="AC"&&(c.acceptedSubmissions+=1),!c.latestSubmission)c.latestSubmission=a;else{let p=new Date(c.latestSubmission.time_in).getTime(),b=new Date(a.time_in).getTime();Number.isFinite(b)&&(!Number.isFinite(p)||b>=p)&&(c.latestSubmission=a)}n.set(u,c)}let i=new Map;for(let a of r.problems){let l=n.get(a.problem_nm);i.set(a.problem_nm,{totalSubmissions:l?.totalSubmissions||0,acceptedSubmissions:l?.acceptedSubmissions||0,latestVerdict:l?.latestSubmission?.veredict||"-"})}return i}async function fb(){let[r,e,t]=await Promise.all([wt(g.student.exam.get(),vt,"Timed out while fetching exam details."),wt(g.student.submissions.getAll(),vt,"Timed out while fetching submissions."),wt(g.tables.getCompilers(),vt,"Timed out while fetching compilers.")]),n=null;if(r.contest)try{n=(await wt(g.student.exam.getRanking(),vt,"Timed out while fetching ranking.")).length}catch{n=null}let s=[];if(r.problems.length>0)try{let i=await wt(g.problems.getAbstractProblems(r.problems.map(a=>a.problem_nm).join(",")),vt,"Timed out while fetching abstract problems.");s=Object.values(i||{})}catch{s=[]}let o=gb(r,e,s);return{exam:r,submissions:e,compilers:t,rankingCount:n,problemStats:o}}function hb(r){let{data:e}=r,{exam:t,compilers:n,rankingCount:s,problemStats:o}=e,i=t.problems.map(c=>{let p=o.get(c.problem_nm);return`<tr>
                <td>${k(Lr(c.caption))}</td>
                <td>${k(Lr(c.icon))}</td>
                <td>${k(Lr(c.weight))}</td>
                <td>${k(c.problem_nm)}</td>
                <td>${p?.totalSubmissions??0}</td>
                <td>${p?.acceptedSubmissions??0}</td>
                <td>${k(p?.latestVerdict??"-")}</td>
            </tr>`}).join(""),a=t.compilers.map(c=>{let p=n[c]?.name||"-";return`<tr>
                <td>${k(c)}</td>
                <td>${k(p)}</td>
            </tr>`}).join(""),l=(t.documents||[]).map(c=>`<tr>
                <td>
                    <a href="#" data-document-nm="${k(c.document_nm)}" data-document-title="${k(c.title)}">${k(c.title)}</a>
                </td>
                <td>${k(c.description||"-")}</td>
            </tr>`).join(""),u=t.contest?'<button id="open-ranking-btn" title="Open ranking">\u2263 Ranking</button>':"",d=t.contest&&s!==null?`<span class="hint">Entries: ${s}</span>`:"";return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta
        http-equiv="Content-Security-Policy"
        content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exam Dashboard</title>
    <style>
        body {
            margin: 0;
            padding: 12px;
            color: var(--vscode-foreground);
            font-family: var(--vscode-font-family);
            background: var(--vscode-editor-background);
            font-size: 12px;
        }
        .toolbar {
            display: flex;
            gap: 8px;
            align-items: center;
            margin-bottom: 12px;
        }
        button {
            border: none;
            border-radius: 3px;
            padding: 4px 10px;
            color: var(--vscode-button-foreground);
            background: var(--vscode-button-background);
            cursor: pointer;
            font-family: inherit;
            font-size: inherit;
        }
        button:hover {
            background: var(--vscode-button-hoverBackground);
        }
        .hint {
            opacity: 0.8;
        }
        .section {
            margin-bottom: 14px;
        }
        .section h3 {
            margin: 0 0 6px;
            font-size: 13px;
        }
        .description,
        .instructions {
            white-space: pre-wrap;
            padding: 8px;
            border: 1px solid var(--vscode-widget-border, transparent);
            border-radius: 4px;
            background: var(--vscode-editorWidget-background);
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 4px;
        }
        th,
        td {
            border: 1px solid var(--vscode-widget-border, transparent);
            padding: 6px;
            text-align: left;
            vertical-align: top;
        }
        th {
            background: var(--vscode-sideBarSectionHeader-background, var(--vscode-editorWidget-background));
        }
    </style>
</head>
<body>
    <div class="toolbar">
        <button id="refresh-btn">Refresh</button>
        ${u}
        ${d}
    </div>

    <div class="section">
        <h3>Exam title</h3>
        <div>${k(t.title||"-")}</div>
    </div>

    <div class="section">
        <h3>Description</h3>
        <div class="description">${k(t.description||"-")}</div>
    </div>

    <div class="section">
        <h3>Instructions</h3>
        <div class="instructions">${k(t.instructions||"-")}</div>
    </div>

    <div class="section">
        <h3>Schedule</h3>
        <table>
            <thead>
                <tr>
                    <th>Expected start</th>
                    <th>Start</th>
                    <th>End</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${k(Ed(t.exp_time_start))}</td>
                    <td>${k(Ed(t.time_start))}</td>
                    <td>${k(mb(t))}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="section">
        <h3>Problems</h3>
        <table>
            <thead>
                <tr>
                    <th>Caption</th>
                    <th>Icon</th>
                    <th>Weight</th>
                    <th>problem_nm</th>
                    <th>Total submissions</th>
                    <th>Accepted submissions</th>
                    <th>Latest verdict</th>
                </tr>
            </thead>
            <tbody>
                ${i||'<tr><td colspan="7">No problems</td></tr>'}
            </tbody>
        </table>
    </div>

    <div class="section">
        <h3>Available compilers</h3>
        <table>
            <thead>
                <tr>
                    <th>Key</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                ${a||'<tr><td colspan="2">No compilers</td></tr>'}
            </tbody>
        </table>
    </div>

    <div class="section">
        <h3>Documents</h3>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                ${l||'<tr><td colspan="2">No documents</td></tr>'}
            </tbody>
        </table>
    </div>

    <script>
        (function() {
            const vscode = acquireVsCodeApi();
            const refreshBtn = document.getElementById("refresh-btn");
            if (refreshBtn) {
                refreshBtn.addEventListener("click", () => vscode.postMessage({ type: "refresh" }));
            }
            const rankingBtn = document.getElementById("open-ranking-btn");
            if (rankingBtn) {
                rankingBtn.addEventListener("click", () => vscode.postMessage({ type: "openRanking" }));
            }
            document.querySelectorAll("a[data-document-nm]").forEach((link) => {
                link.addEventListener("click", (event) => {
                    event.preventDefault();
                    const target = event.currentTarget;
                    if (!target) {
                        return;
                    }
                    const documentNm = target.getAttribute("data-document-nm");
                    const documentTitle = target.getAttribute("data-document-title");
                    vscode.postMessage({
                        type: "openDocument",
                        payload: { documentNm, documentTitle }
                    });
                });
            });
        })();
    <\/script>
</body>
</html>`}function bb(r){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline';" />
</head>
<body>
    <p>Could not load dashboard: ${k(r)}</p>
</body>
</html>`}var Ur=class r extends A{static current;panel;intervalId;disposed=!1;refreshing=!1;constructor(){super(),this.panel=be.window.createWebviewPanel(db,"Exam Dashboard",be.ViewColumn.Beside,{enableScripts:!0}),this.panel.onDidDispose(()=>this.dispose()),this.panel.webview.onDidReceiveMessage(async e=>{if(!e||typeof e!="object")return;let t=e;if(t.type==="refresh"){await this.refresh();return}if(t.type==="openRanking"){await be.commands.executeCommand("jutge-vscode.openRankingPanel");return}t.type==="openDocument"&&t.payload?.documentNm&&await be.commands.executeCommand("jutge-vscode.openExamDocument",t.payload.documentNm,t.payload.documentTitle)}),this.intervalId=setInterval(()=>{this.refresh()},cb),this.refresh()}static openOrReveal(){if(r.current){r.current.panel.reveal(be.ViewColumn.Beside,!0),r.current.refresh();return}r.current=new r}dispose(){this.disposed||(this.disposed=!0,clearInterval(this.intervalId),r.current===this&&(r.current=void 0),this.panel.dispose())}async refresh(){if(!(this.refreshing||this.disposed)){this.refreshing=!0;try{this.log.info("loadDashboardData");let e=await fb();this.panel.webview.html=hb({data:e})}catch(e){let t=e instanceof Error?e.message:String(e);this.panel.webview.html=bb(t)}finally{this.refreshing=!1}}}};var Ke=x(require("vscode"));var Fr={AC:"accepted",PE:"presentation_error",WA:"rejected",IC:"rejected",CE:"rejected",EE:"rejected",TLE:"rejected",SC:"scored",Pending:"none",Failed:"failed"},xt=(d=>(d.AC="AC",d.WA="WA",d.IC="IC",d.PE="PE",d.CE="CE",d.EE="EE",d.TLE="TLE",d.SC="SC",d.PENDING="Pending",d.FAILED="Failed",d))(xt||{});var Pt=x(require("vscode")),ye=class r extends j{static pythonApi=null;static setPythonApi(e){r.pythonApi=e}static get python(){if(r.pythonApi===null)throw new Error("The Python extension (ms-python.python) is needed to run Python testcases. Please install it.");return r.pythonApi}static get config(){return Pt.workspace.getConfiguration("jutge-vscode")}static getString(e){let t=r.config.get(e);return(t===void 0||t==="")&&(Pt.window.showWarningMessage(`Warning: '${e}' setting is undefined.`),t="<undefined>"),t}static getStringArray(e){let t=r.config.get(e);return t===void 0&&(Pt.window.showWarningMessage(`Warning: '${e}' setting is undefined.`),t=["-u"]),t}static getPythonCommand(){let e=r.python.environments.getActiveEnvironmentPath();return this.log.debug(`[ConfigService] Python environment is: "${e.path}"`),e.path}static getPythonFlags(){return r.getStringArray("runner.python.flags")}static getCppCommand(){return r.getString("runner.cpp.command")}static getCppFlags(){return r.getString("runner.cpp.flags")}static getGHCCommand(){return r.getString("runner.ghc.command")}static getGHCFlags(){return r.getStringArray("runner.ghc.flags")}static getPreferredLang(){return r.getString("problem.preferredLang")}static codes={Catal\u00E0:"ca",Castellano:"es",English:"en",Fran\u00E7ais:"fr",Deutsch:"de"};static getPreferredLangId(){return this.codes[this.getPreferredLang()]||"??"}};var _d="/",Br=class{type;key;nm;label;description;iconStatus;order=-1;parent=null;children=null;parentPrefix(){let e="",{parent:t}=this;for(;t;)e=e?`${t.key}${_d}${e}`:t.key,t=t.parent;return e}getId(){return this.parentPrefix()?`${this.parentPrefix()}${_d}${this.key}`:this.key}updateIconStatus(e){switch(this.iconStatus){case"none":{this.iconStatus=Fr[e];break}case"rejected":{e==="PE"?this.iconStatus="presentation_error":e==="AC"&&(this.iconStatus="accepted");break}case("scored","presentation_error"):{e==="AC"&&(this.iconStatus="accepted");break}}}constructor(e,t,n,s,o,i){this.type=e,this.key=e==="problem"?o+"_"+t:t,this.nm=t,this.label=n,this.iconStatus=s,this.description=i||""}};var X=x(require("vscode")),yb={collapsed:X.TreeItemCollapsibleState.Collapsed,expanded:X.TreeItemCollapsibleState.Expanded,none:X.TreeItemCollapsibleState.None},vb={course:X.TreeItemCollapsibleState.Collapsed,list:X.TreeItemCollapsibleState.Collapsed,problem:X.TreeItemCollapsibleState.None,separator:X.TreeItemCollapsibleState.None},jr=class extends X.TreeItem{element;constructor(e){super(e.label),this.id=e.getId(),this.element=e,this.description=e.description;let t=To(`itemState:${this.id}`),n=vb[this.element.type];if(this.collapsibleState=t?yb[t]:n,e.type==="problem"){let s=e.iconStatus||"none";this.iconPath={light:Nr("light",`${s}.svg`),dark:Nr("dark",`${s}.svg`)},this.tooltip=e.nm}else e.type==="separator"&&(this.label="\u2B29",this.description=e.label,this.tooltip=e.label)}};var qr=class extends A{emitter_=new Ke.EventEmitter;onDidChangeTreeData=this.emitter_.event;problemName2TreeItem=new Map;getTreeItem(e){let t=new jr(e);return t.element.type==="problem"&&(t.command={command:"jutge-vscode.showProblem",title:"Open Problem",arguments:[t.element.nm,t.element.order]}),this.problemName2TreeItem.set(e.nm,t),t}getParent(e){return e.parent}async getChildren(e){if(f.isSignedIn())if(e){if(e.type==="course")return this.getListsFromCourseNm_(e);if(e.type==="list")return this.getProblemsFromListNm_(e)}else return f.isExamMode()?[]:this.getEnrolledCourseList_();else return[];return[]}makeTreeElement(e,t,n,s,o){let i=new Br(e,t,n,s,o?.order||0,o?.description);if(o?.parent!==void 0){if(o.order===void 0||o.order===-1)throw new Error(`Order is wrong! (order = ${o.order})`);i.order=o.order,i.parent=o.parent}return i}refreshProblem({problem_nm:e,status:t}){this.log.info(`Refresh Problem ${e}`);let n=this.problemName2TreeItem.get(e);n?(this.log.info(`Status ${n.element.iconStatus} -> ${t}`),n.element.updateIconStatus(t),this.refresh_(n.element)):console.error(`Received 'refresh' call for unknown problem '${e}'`)}refresh_(e){this.emitter_.fire(e)}get refresh(){return this.refresh_.bind(this)}async getExamProblems_(e){try{let t=f.getExamSWR();t.onUpdate=()=>this.refresh_(e);let n=t.data;if(!n)return[];let s=n.problems.map(c=>c.problem_nm),o=f.getAbstractProblemsSWR(s);o.onUpdate=()=>this.refresh_(e);let i=f.getAllStatusesSWR();if(i.onUpdate=()=>this.refresh_(e),o.data===void 0||i.data===void 0)return[];let a=o.data,l=i.data,u=[],d=1;for(let c of a){let p=this.abstractProblemToElement_(c,d,l);p.parent=e,p.order=d;let b=n.problems[d-1],v=b?.caption||"",E=b?.weight||1;p.label=`${v}:	${p.label}`,p.description=`${E} points`,d++,u.push(p)}return e.children=u,u}catch(t){return this.log.error(t),Ke.window.showErrorMessage("Failed to get exam problems"),[]}}async getEnrolledCourseList_(){try{let e=f.getCoursesSWR(),t=e.data||{};return e.onUpdate=()=>this.refresh_(),Object.entries(t).map(([n,{title:s,course_nm:o}])=>this.makeTreeElement("course",n,s||o,"none"))}catch(e){return console.error(e),Ke.window.showErrorMessage("Failed to get enrolled courses"),[]}}async getListsFromCourseNm_(e){try{let t=f.getCourseSWR(e.key);t.onUpdate=()=>this.refresh_(e);let n=t.data;if(n===void 0)return[];let s=n.lists.map(({list_nm:o,title:i},a)=>{let l=this.makeTreeElement("list",o,i||o,"none",{order:a+1,parent:e});return l.parent=e,l});return e.children=s,s}catch(t){return console.error(t),Ke.window.showErrorMessage(`Failed to get lists from course: ${e.key}`),[]}}separatorToElement_(e,t){return this.makeTreeElement("separator",e,t,"none")}abstractProblemToElement_(e,t,n){let{problem_nm:s,problems:o}=e,i=ye.getPreferredLangId(),a=`${s}_${i}`,l;a in o?l=o[a]:l=Object.values(o)[0];let u=n[s]?.status||"none";return this.makeTreeElement("problem",s,l.title,u,{order:t})}async getProblemsFromListNm_(e){try{console.debug(`[TreeViewProvider] Getting Problems for list '${e.key}'`);let t=f.getAbstractProblemsInListSWR(e.key);t.onUpdate=()=>this.refresh_(e);let n=f.getAllStatusesSWR();if(n.onUpdate=()=>this.refresh_(e),t.data===void 0||n.data===void 0)return[];let s=t.data,o=n.data,i=1,a=1,l=[];for(let u of s)if(typeof u=="string"){let d=u,c=this.separatorToElement_(`${e.key}:separator${i}`,d);c.parent=e,l.push(c),i++}else{let d=u;if(d.driver_id==="quiz")continue;let c=this.abstractProblemToElement_(d,a,o);c.order=a,c.parent=e,l.push(c),a++}return e.children=l,l}catch(t){return console.error("Error getting problems from list:",t),[]}}};var Ye=x(require("vscode"));var Cd="jutge-home",wb=12e3,ee=class extends Ye.TreeItem{constructor(e,t){super(e,Ye.TreeItemCollapsibleState.None),this.description=t}};function xb(r,e,t){return new Promise((n,s)=>{let o=setTimeout(()=>s(new Error(t)),e);r.then(i=>n(i)).catch(i=>s(i)).finally(()=>clearTimeout(o))})}function Pb(r){return[new ee("Users",r.users.toLocaleString()),new ee("Problems",r.problems.toLocaleString()),new ee("Submissions",r.submissions.toLocaleString()),new ee("Exams",r.exams.toLocaleString()),new ee("Contests",r.contests.toLocaleString())]}var Wr=class{_onDidChangeTreeData=new Ye.EventEmitter;onDidChangeTreeData=this._onDidChangeTreeData.event;items=[new ee("Loading homepage stats...")];constructor(){this.refresh()}async refresh(){this.items=[new ee("Loading homepage stats...")],this._onDidChangeTreeData.fire(void 0);try{let e=await xb(g.misc.getHomepageStats(),wb,"Timed out while fetching homepage stats.");this.items=Pb(e)}catch(e){let t=e instanceof Error?e.message:String(e);this.items=[new ee("Could not load homepage stats",t)]}this._onDidChangeTreeData.fire(void 0)}getTreeItem(e){return e}getChildren(){return Promise.resolve(this.items)}};var Ae=x(require("vscode"));var Ad="jutge-api",Co=12e3,C=class extends Ae.TreeItem{children;constructor(e,t,n=[]){super(e,n.length>0?Ae.TreeItemCollapsibleState.Expanded:Ae.TreeItemCollapsibleState.None),this.description=t,this.children=n}};function Ao(r,e,t){return new Promise((n,s)=>{let o=setTimeout(()=>s(new Error(t)),e);r.then(i=>n(i)).catch(i=>s(i)).finally(()=>clearTimeout(o))})}function Sb(r,e,t){return[new C("Version",void 0,[new C("Version",r.version),new C("Mode",r.mode),new C("Git hash",r.gitHash),new C("Git branch",r.gitBranch),new C("Git date",r.gitDate)]),new C("Request",void 0,[new C("URL",e.url),new C("IP",e.ip),new C("Domain",e.domain)]),new C("Time",void 0,[new C("Full time",t.full_time),new C("Timestamp (int)",String(t.int_timestamp)),new C("Timestamp (float)",String(t.float_timestamp)),new C("Time",t.time),new C("Date",t.date)])]}var Vr=class{_onDidChangeTreeData=new Ae.EventEmitter;onDidChangeTreeData=this._onDidChangeTreeData.event;rootItems=[new C("Loading API information...")];constructor(){this.refresh()}async refresh(){this.rootItems=[new C("Loading API information...")],this._onDidChangeTreeData.fire(void 0);try{let[e,t,n]=await Promise.all([Ao(g.misc.getApiVersion(),Co,"Timed out while fetching API version."),Ao(g.misc.getRequestInformation(),Co,"Timed out while fetching request information."),Ao(g.misc.getTime(),Co,"Timed out while fetching time information.")]);this.rootItems=Sb(e,t,n)}catch(e){let t=e instanceof Error?e.message:String(e);this.rootItems=[new C("Could not load API information",t)]}this._onDidChangeTreeData.fire(void 0)}getTreeItem(e){return e}getChildren(e){return Promise.resolve(e?e.children:this.rootItems)}};var Jr=x(require("vscode"));var Eb=new TextEncoder,_b=new TextDecoder("utf-8");function Io(r){return Eb.encode(r)}function ve(r){return _b.decode(r)}function St(r){let e=atob(r),t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function Et(r){let e="";for(let n=0;n<r.length;n+=32768)e+=String.fromCharCode(...r.subarray(n,n+32768));return btoa(e)}function _t(r){return ve(St(r))}function O(r){let e=r.replace(/[\\/]+$/,""),t=Math.max(e.lastIndexOf("/"),e.lastIndexOf("\\"));return t===-1?e:e.slice(t+1)}function Id(r){let e=r.replace(/[\\/]+$/,""),t=Math.max(e.lastIndexOf("/"),e.lastIndexOf("\\"));return t===-1?".":t===0?e[0]:e.slice(0,t)}function ae(r){let e=O(r),t=e.lastIndexOf(".");return t<=0?"":e.slice(t)}async function te(r){if(!r)return!1;try{return await Jr.workspace.fs.stat(r),!0}catch{return!1}}async function Ie(r){return ve(await Jr.workspace.fs.readFile(r))}async function kd(r,e){await Jr.workspace.fs.writeFile(r,Io(e))}var Rd="jutge-profile",Tb=12e3,Cb=12e3;function Dd(r,e,t){return new Promise((n,s)=>{let o=setTimeout(()=>s(new Error(t)),e);r.then(i=>n(i)).catch(i=>s(i)).finally(()=>clearTimeout(o))})}function Ab(){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta
        http-equiv="Content-Security-Policy"
        content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; img-src data:;"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Profile</title>
    <style>
        :root {
            color-scheme: light dark;
            font-size: 13px;
        }
        body {
            margin: 0;
            padding: 8px 10px 12px;
            color: var(--vscode-foreground);
            font-family: var(--vscode-font-family);
            line-height: 1.45;
            background: var(--vscode-sideBar-background);
        }
        .status {
            padding: 4px 0;
            font-size: 12px;
            color: var(--vscode-descriptionForeground, #888888);
        }
        .status.is-error {
            color: var(--vscode-errorForeground, #d33);
        }
        .profile-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            padding: 6px 0 14px;
            text-align: center;
        }
        .profile-header .avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: var(--vscode-input-background, rgba(127, 127, 127, 0.15));
        }
        .profile-header .avatar[hidden] {
            display: none;
        }
        .profile-header .name {
            margin-top: 6px;
            font-size: 15px;
            font-weight: 600;
            line-height: 1.2;
            word-break: break-word;
        }
        .profile-header .email {
            font-size: 12px;
            color: var(--vscode-descriptionForeground, #888888);
            opacity: 0.9;
            word-break: break-all;
        }
        table.profile {
            width: 100%;
            border-collapse: collapse;
            font-size: 12px;
        }
        table.profile th,
        table.profile td {
            padding: 4px 8px 4px 0;
            vertical-align: top;
            text-align: left;
        }
        table.profile th {
            font-weight: 500;
            color: var(--vscode-descriptionForeground, #888888);
            white-space: nowrap;
            width: 1%;
        }
        table.profile td {
            color: var(--vscode-foreground);
            word-break: break-word;
        }
        table.profile td.empty-value {
            opacity: 0.6;
            font-style: italic;
        }
        table.profile td a {
            color: var(--vscode-textLink-foreground, #3794ff);
            text-decoration: none;
            word-break: break-all;
        }
        table.profile td a:hover {
            color: var(--vscode-textLink-activeForeground, var(--vscode-textLink-foreground, #3794ff));
            text-decoration: underline;
        }
        table.profile tr + tr th,
        table.profile tr + tr td {
            border-top: 1px solid var(--vscode-widget-border, rgba(127, 127, 127, 0.18));
        }
    </style>
</head>
<body>
    <div id="status" class="status">Loading profile...</div>
    <div id="header" class="profile-header" hidden>
        <img id="avatar" class="avatar" alt="" hidden />
        <div id="name" class="name"></div>
        <div id="email" class="email"></div>
    </div>
    <table id="profile" class="profile" hidden></table>

    <script>
        (function() {
            const vscode = acquireVsCodeApi();
            const statusEl = document.getElementById("status");
            const headerEl = document.getElementById("header");
            const avatarEl = document.getElementById("avatar");
            const nameEl = document.getElementById("name");
            const emailEl = document.getElementById("email");
            const tableEl = document.getElementById("profile");

            const OMITTED_FIELDS = new Set([
                "user_uid",
                "name",
                "email",
                "nickname",
                "username",
                "description",
                "administrator",
                "instructor",
                "parent_email",
            ]);

            const FIELD_LABELS = {
                webpage: "Personal Site",
                affiliation: "Affiliation",
                birth_year: "Birth Year",
                max_subsxhour: "Hourly limit",
                max_subsxday: "Daily limit",
                country_id: "Country",
                timezone_id: "Timezone",
                compiler_id: "Compiler",
                language_id: "Language",
            };

            function fieldLabel(key) {
                return Object.prototype.hasOwnProperty.call(FIELD_LABELS, key)
                    ? FIELD_LABELS[key]
                    : key;
            }

            function setStatus(text, isError) {
                statusEl.textContent = text || "";
                statusEl.classList.toggle("is-error", Boolean(isError));
                statusEl.hidden = !text;
            }

            function inlineValue(value) {
                if (typeof value === "string") return value;
                return JSON.stringify(value);
            }

            function appendRow(key, value) {
                const tr = document.createElement("tr");
                const th = document.createElement("th");
                th.textContent = fieldLabel(key);
                tr.appendChild(th);
                const td = document.createElement("td");
                if (key === "webpage" && typeof value === "string" && value.trim() !== "") {
                    const a = document.createElement("a");
                    const trimmed = value.trim();
                    a.href = /^https?:\\/\\//i.test(trimmed) ? trimmed : "https://" + trimmed;
                    a.target = "_blank";
                    a.rel = "noopener noreferrer";
                    a.textContent = trimmed;
                    td.appendChild(a);
                } else if (value === null || value === undefined) {
                    td.textContent = "null";
                    td.classList.add("empty-value");
                } else if (typeof value === "string" && value === "") {
                    td.textContent = "(empty)";
                    td.classList.add("empty-value");
                } else {
                    td.textContent = inlineValue(value);
                }
                tr.appendChild(td);
                tableEl.appendChild(tr);
            }

            function renderHeader(profile, avatarUrl) {
                if (avatarUrl) {
                    avatarEl.src = avatarUrl;
                    avatarEl.hidden = false;
                } else {
                    avatarEl.removeAttribute("src");
                    avatarEl.hidden = true;
                }
                nameEl.textContent =
                    profile && typeof profile.name === "string" ? profile.name : "";
                emailEl.textContent =
                    profile && typeof profile.email === "string" ? profile.email : "";
                headerEl.hidden = !profile;
            }

            function renderTable(profile) {
                tableEl.innerHTML = "";
                if (profile === null || profile === undefined || typeof profile !== "object") {
                    appendRow("value", profile);
                    tableEl.hidden = false;
                    return;
                }
                const entries = Array.isArray(profile)
                    ? profile.map(function(v, i) { return ["[" + i + "]", v]; })
                    : Object.entries(profile).filter(function(entry) {
                        if (OMITTED_FIELDS.has(entry[0])) return false;
                        if (entry[0] === "webpage") {
                            return typeof entry[1] === "string" && entry[1].trim() !== "";
                        }
                        return true;
                    });
                entries.forEach(function(entry) {
                    appendRow(entry[0], entry[1]);
                });
                tableEl.hidden = false;
            }

            window.addEventListener("message", function(event) {
                const message = event.data;
                if (!message || typeof message !== "object") return;
                if (message.type === "profileLoading") {
                    setStatus("Loading profile...", false);
                    headerEl.hidden = true;
                    tableEl.hidden = true;
                    return;
                }
                if (message.type === "profileResult") {
                    const payload = message.payload || {};
                    if (payload.ok) {
                        setStatus("", false);
                        renderHeader(payload.profile, payload.avatarUrl);
                        renderTable(payload.profile);
                    } else {
                        setStatus(payload.error || "Could not load profile.", true);
                        headerEl.hidden = true;
                        tableEl.hidden = true;
                    }
                }
            });

            vscode.postMessage({ type: "profileViewReady" });
        })();
    <\/script>
</body>
</html>`}var Hr=class{webviewView;resolveWebviewView(e){this.webviewView=e,e.webview.options={enableScripts:!0},e.webview.html=Ab(),e.onDidDispose(()=>{this.webviewView=void 0}),e.webview.onDidReceiveMessage(async t=>{if(!t||typeof t!="object")return;t.type==="profileViewReady"&&await this.loadAndPushProfile_()})}async refresh(){await this.loadAndPushProfile_()}async loadAndPushProfile_(){if(this.webviewView){await this.webviewView.webview.postMessage({type:"profileLoading"});try{let[e,t]=await Promise.all([Dd(g.student.profile.get(),Tb,"Timed out while fetching profile."),this.fetchAvatarDataUrl_()]);await this.webviewView.webview.postMessage({type:"profileResult",payload:{ok:!0,profile:e,avatarUrl:t}})}catch(e){let t=e instanceof Error?e.message:String(e);await this.webviewView.webview.postMessage({type:"profileResult",payload:{ok:!1,error:t}})}}}async fetchAvatarDataUrl_(){try{let e=await Dd(g.student.profile.getAvatar(),Cb,"Timed out while fetching avatar.");if(!e||!e.data)return null;let t=Et(e.data);return`data:${e.type||"image/png"};base64,${t}`}catch{return null}}};var Jd=x(require("vscode"));var Od=x(require("vscode"));var Qe=(n=>(n.CPP="C++",n.PYTHON="Python",n.GHC="GHC",n))(Qe||{}),ko={Python:{proglang:"Python",get runner(){return q.getRunner(this.proglang)},extensions:[".py"],commentPrefix:"#",mimeType:"text/x-script.phyton",compilers:["Python3","RunPython"]},"C++":{proglang:"C++",get runner(){return q.getRunner(this.proglang)},extensions:[".cc",".cpp",".cxx",".c++"],commentPrefix:"//",mimeType:"text/x-c",compilers:["G++17","G++11","G++","Clang++17","P1++"]},GHC:{proglang:"GHC",get runner(){return q.getRunner(this.proglang)},extensions:[".hs"],commentPrefix:"--",mimeType:"text/x-haskell",compilers:["GHC"]}};function $d(){let r=[];for(let e of Object.values(ko))r.push(...e.extensions);return r}function Md(r,e){for(let[t,n]of Object.entries(ko))if(r(n))return t;throw new Error(e)}function Ib(r){return Md(e=>e.extensions.includes(r),`Language with extension '${r}' not supported`)}function Ld(r){return Md(e=>e.compilers.includes(r),`Language with compiler '${r}' not supported`)}function Tt(r){return Ib(ae(O(r)))}function re(r){for(let[e,t]of Object.entries(ko))if(e===r)return t;throw new Error("Language not found")}async function Ud(r){return(await Od.window.showQuickPick(Object.values(Qe).map(t=>({label:`${t} File`,description:t})),{placeHolder:"Select file type",title:`New file for ${r}`}))?.description||null}var G=x(require("vscode"));var ke=x(require("vscode")),Fd=ke.languages.createDiagnosticCollection("jutge-runtime"),Bd=ke.languages.createDiagnosticCollection("jutge-compile");function Ze(r,e){Fd.set(r.uri,e)}function Gr(r){Fd.delete(r.uri)}function Do(r,e){Bd.set(r.uri,e)}function jd(r){Bd.delete(r.uri)}function De(r,e,t){let s=e.lineAt(Math.max(0,Math.min(t,e.lineCount-1))).range;return new ke.Diagnostic(s,r,ke.DiagnosticSeverity.Error)}var zr=x(require("vscode")),Ro=null;function kb(){return Ro===null&&(Ro=zr.window.createOutputChannel("Jutge.org")),Ro}function ne(r,e){let t=kb();t.appendLine(`\u2500\u2500\u2500\u2500 ${r} (${new Date().toLocaleTimeString()}) \u2500\u2500\u2500\u2500`),t.appendLine(e.trimEnd()),t.appendLine(""),t.show(!0)}function Re(r,e){let t=zr.workspace.getConfiguration("jutge-vscode").get(r);return t==null||t===""?e:t}var Db="https://godbolt.org",qd=r=>r.replace(/\u001b\[[0-9;]*[A-Za-z]/g,""),Nd=r=>(r??[]).map(e=>qd(e.text)).join(`
`);function Rb(r,e){let t=[];for(let{tag:n}of r){if(!n||!n.line||!n.text)continue;let s=Math.max(0,Math.min(n.line-1,e.lineCount-1)),o=Math.max(0,(n.column??1)-1),i=e.lineAt(s),a=new G.Range(s,Math.min(o,i.text.length),s,i.text.length),l=(n.severity??3)>=3?G.DiagnosticSeverity.Error:G.DiagnosticSeverity.Warning,u=new G.Diagnostic(a,qd(n.text),l);u.source="Compiler Explorer",t.push(u)}return t}function Ob(r,e){let t=(r??"0").split(/[^0-9]+/).filter(Boolean).map(Number),n=(e??"0").split(/[^0-9]+/).filter(Boolean).map(Number);for(let s=0;s<Math.max(t.length,n.length);s++){let o=(t[s]??0)-(n[s]??0);if(o!==0)return o}return 0}var Ct=class extends A{constructor(t,n,s,o,i){super();this.language=t;this.settingCompiler=n;this.settingFlags=s;this.defaultFlags=o;this.compilerIdPattern=i}language;settingCompiler;settingFlags;defaultFlags;compilerIdPattern;compilerCache=new Map;getRunningDir(){return""}get apiBase(){return Re("web.compilerExplorerUrl",Db).replace(/\/+$/,"")+"/api"}async fetchJson(t,n){let s;try{s=await fetch(t,{...n,headers:{Accept:"application/json",...n?.headers??{}}})}catch(o){throw new Error(`Could not reach Compiler Explorer (${this.apiBase}). Check your connection or the 'jutge-vscode.web.compilerExplorerUrl' setting. (${o})`)}if(!s.ok){let o=await s.text().catch(()=>"");throw new Error(`Compiler Explorer answered ${s.status}: ${o.slice(0,300)}`)}return await s.json()}async compilerId(){let t=Re(this.settingCompiler,"");if(t)return t;let n=this.compilerCache.get(this.language);if(n)return n;let o=(await this.fetchJson(`${this.apiBase}/compilers/${encodeURIComponent(this.language)}?fields=id,name,semver,supportsExecute,instructionSet`)).filter(a=>a.supportsExecute!==!1).filter(a=>!a.instructionSet||a.instructionSet==="amd64").filter(a=>this.compilerIdPattern.test(a.id)).filter(a=>!/trunk|snapshot|assert/i.test(`${a.id} ${a.name}`)).sort((a,l)=>Ob(l.semver,a.semver));if(o.length===0)throw new Error(`No ${this.language} compiler able to execute code found on Compiler Explorer`);let i=o[0];return this.log.info(`Using Compiler Explorer compiler ${i.id} (${i.name})`),this.compilerCache.set(this.language,i.id),i.id}async run(t,n,s,o){let i=O(n.path),a=await this.compilerId(),l=Re(this.settingFlags,this.defaultFlags),u={source:o.getText(),lang:this.language,allowStoreCodeDebug:!1,options:{userArguments:l.join(" "),executeParameters:{args:[],stdin:s},compilerOptions:{executorRequest:!0,skipAsm:!0},filters:{execute:!0},tools:[],libraries:[]}},d=await G.window.withProgress({location:G.ProgressLocation.Window,title:`Compiling ${i} on Compiler Explorer\u2026`},()=>this.fetchJson(`${this.apiBase}/compiler/${encodeURIComponent(a)}/compile`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)})),c=d.buildResult,p=Nd(c?.stderr).replaceAll("<source>",i),b=Rb(c?.stderr??[],o);if(c&&c.code!==0)throw ne(`Compilation error in ${i} (${a})`,p),Do(o,b.length>0?b:[De(p||"Compilation failed",o,0)]),new Error("Compilation failed");b.length>0?Do(o,b):jd(o),p.trim()&&ne(`Compiler warnings for ${i}`,p);let v=d.execResult??d,E=v.stdout??[],w=Nd(v.stderr);if(!!(d.timedOut||d.execResult?.timedOut)){let P="Execution timed out on Compiler Explorer (infinite loop?)";throw Ze(o,[De(P,o,0)]),new Error(P)}if(d.didExecute===!1)throw ne(`Could not execute ${i}`,w||JSON.stringify(d)),new Error("Compiler Explorer did not execute the program");if(v.code!==0){let P=w.trim()||`Process exited with code ${v.code}.`;throw ne(`Runtime error in ${i}`,P),Ze(o,[De(P,o,0)]),new Error(`Execution failed: exit code ${v.code}`)}return w.trim()&&ne(`stderr of ${i}`,w),Gr(o),E.map(P=>P.text+`
`).join("")}};var Yr=x(require("vscode"));var Wd=String.raw`
"use strict";

const HARNESS = ${"`"}
import sys, io, traceback

def __jutge_run(code, inp, filename):
    out, err = io.StringIO(), io.StringIO()
    saved = sys.stdin, sys.stdout, sys.stderr
    sys.stdin, sys.stdout, sys.stderr = io.StringIO(inp), out, err
    status = 0
    # Forget modules that capture stdin on import (yogi does)
    for name in [m for m in sys.modules if m == "yogi" or m.startswith("yogi.")]:
        del sys.modules[name]
    try:
        g = {"__name__": "__main__", "__file__": filename, "__builtins__": __builtins__}
        exec(compile(code, filename, "exec"), g)
    except SystemExit as e:
        if e.code is None:
            status = 0
        elif isinstance(e.code, int):
            status = e.code
        else:
            print(e.code, file=err)
            status = 1
    except BaseException:
        tb = traceback.format_exc()
        # Hide the harness frame from the traceback
        lines = [l for l in tb.splitlines(True) if "__jutge_run" not in l and '<exec>' not in l]
        err.write("".join(lines))
        status = 1
    finally:
        try:
            sys.stdout.flush()
        except Exception:
            pass
        sys.stdin, sys.stdout, sys.stderr = saved
    return [out.getvalue(), err.getvalue(), status]
${"`"};

let pyodidePromise = null;

function loadOnce(base, yogiSource) {
    if (pyodidePromise === null) {
        pyodidePromise = (async () => {
            importScripts(base + "pyodide.js");
            const py = await loadPyodide({ indexURL: base });
            py.FS.mkdirTree("/home/pyodide/jutge/yogi");
            py.FS.writeFile("/home/pyodide/jutge/yogi/__init__.py", yogiSource);
            py.runPython("import sys; sys.path.insert(0, '/home/pyodide/jutge')");
            py.runPython(HARNESS);
            return py;
        })();
    }
    return pyodidePromise;
}

self.onmessage = async (event) => {
    const msg = event.data;
    try {
        const py = await loadOnce(msg.base, msg.yogi);
        if (msg.type === "load") {
            self.postMessage({ id: msg.id, ok: true, version: py.version });
            return;
        }
        const run = py.globals.get("__jutge_run");
        const result = run(msg.code, msg.input, msg.filename);
        const [stdout, stderr, status] = result.toJs();
        result.destroy();
        run.destroy();
        self.postMessage({ id: msg.id, ok: true, stdout, stderr, status });
    } catch (err) {
        const message = (err && (err.message || err.toString())) || "Unknown error";
        self.postMessage({ id: msg.id, ok: false, error: message, fatal: /fatal error/i.test(message) });
    }
};
`;var Vd=`# Copyright 2022, Universitat Polit\xE8cnica de Catalunya
#
# Licensed under the Apache License, Version 2.0 (the "License")
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http: // www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.


"""
Simple typed interface to read input in Python
"""


from typing import Optional, TypeVar, Type, Iterator, TextIO
import sys


version = '2.0.3'
"""package version"""


# hack to get more stack size
sys.setrecursionlimit(1000000)


# type variable that can represent int, float or str
T = TypeVar('T', int, float, str)

class Yogi:

    def __init__(self, file: TextIO) -> None:
        """Constructor of the class Yogi."""

        self._file = file
        self._generator = self._token_generator()

    def __del__(self) -> None:
        """Destructor of the class Yogi."""

        pass       # self._file.close()

    def read(self, t: Type[T]) -> T:
        """
        Returns the next token of the input interpreted as having type t.

        Raises EOFError if trying to read past the end of the input.
        Raises ValueError if the read token does not match the type t.
        Raises TypeError if t is not int, float or str.
        """

        self._check(t)
        token = self._get()
        if token is None:
            raise EOFError
        else:
            return t(token)  # might rise ValueError


    def scan(self, t: Type[T]) -> Optional[T]:
        """
        Returns the next token of the input interpreted as having type t.
        Returns None when trying to read past the end of the input
        or if the read token does not match the type t.

        Raises TypeError if t is not int, float or str.
        """

        self._check(t)
        token = self._get()
        if token is None:
            return None
        else:
            try:
                return t(token)
            except ValueError:
                return None


    def tokens(self, t: Type[T]) -> Iterator[T]:
        """Returns an iterator over the tokens of the input."""

        self._check(t)
        while True:
            try:
                token = next(self._generator)
            except StopIteration:
                break
            yield t(token)  # might rise ValueError


    def _check(self, t: Type[T]) -> None:
        """Check that the type t is valid."""

        if t not in [int, float, str]:
            raise TypeError


    def _get(self) -> Optional[str]:
        """Returns the next token in the input or None if eof."""

        try:
            token = next(self._generator)
        except StopIteration:
            return None
        return token


    def _token_generator(self) -> Iterator[str]:
        """Generates the tokens in all the lines of input."""

        for line in self._file:
            for token in iter(line.split()):
                yield token



_stdin = Yogi(sys.stdin)



def read(t: Type[T]) -> T:
    """
    Returns the next token of the input interpreted as having type t.

    Raises EOFError if trying to read past the end of the input.
    Raises ValueError if the read token does not match the type t.
    Raises TypeError if t is not int, float or str.
    """

    return _stdin.read(t)


def scan(t: Type[T]) -> Optional[T]:
    """
    Returns the next token of the input interpreted as having type t.
    Returns None when trying to read past the end of the input
    or if the read token does not match the type t.

    Raises TypeError if t is not int, float or str.
    """

    return _stdin.scan(t)


def tokens(t: Type[T]) -> Iterator[T]:
    """Returns an iterator over the tokens of the input."""

    return _stdin.tokens(t)
`;var Mb=Vd.replace("sys.setrecursionlimit(1000000)","sys.setrecursionlimit(max(sys.getrecursionlimit(), 2000))"),Lb="https://cdn.jsdelivr.net/pyodide/v0.29.3/full/",Kr=class extends A{worker=null;ready=null;nextId=1;pending=new Map;getRunningDir(){return""}get baseUrl(){let e=Re("web.pyodideUrl",Lb);return e.endsWith("/")||(e+="/"),e}startWorker(){if(typeof Worker>"u")throw new Error("This browser does not allow extensions to start Web Workers, so Python cannot run locally.");let e=new Blob([Wd],{type:"text/javascript"}),t=new Worker(URL.createObjectURL(e));return t.onmessage=n=>{let s=this.pending.get(n.data.id);s&&(this.pending.delete(n.data.id),s(n.data))},t.onerror=n=>{this.log.error(`Python worker error: ${n.message}`),this.failAll(n.message||"Python worker crashed"),this.kill()},t}failAll(e){for(let[t,n]of this.pending)n({id:t,ok:!1,error:e});this.pending.clear()}kill(){this.worker?.terminate(),this.worker=null,this.ready=null}request(e,t){this.worker||(this.worker=this.startWorker());let n=this.nextId++;return new Promise(s=>{let o=setTimeout(()=>{this.pending.has(n)&&(this.pending.delete(n),this.failAll("Python worker restarted"),this.kill(),s({id:n,ok:!1,error:"__timeout__"}))},t);this.pending.set(n,i=>{clearTimeout(o),s(i)}),this.worker.postMessage({...e,id:n,base:this.baseUrl,yogi:Mb})})}ensureLoaded(){return this.ready===null&&(this.ready=Yr.window.withProgress({location:Yr.ProgressLocation.Notification,title:"Loading Python (Pyodide) in the browser\u2026"},async()=>{let e=await this.request({type:"load"},12e4);if(!e.ok){this.kill();let t=e.error==="__timeout__"?"timed out":e.error;throw new Error(`Could not load Pyodide from ${this.baseUrl}: ${t}. Check your connection or the 'jutge-vscode.web.pyodideUrl' setting.`)}this.log.info(`Pyodide ${e.version} loaded`)})),this.ready}async run(e,t,n,s){await this.ensureLoaded();let o=O(t.path)||"main.py",i=s.getText(),a=n;e==="RunPython"&&(i=i+`

`+n,a="");let l=Re("web.timeoutSeconds",10)*1e3,u=await this.request({type:"run",code:i,input:a,filename:o},l);if(!u.ok){if(u.error==="__timeout__"){let p=`Execution timed out after ${l/1e3}s (infinite loop?). You can change 'jutge-vscode.web.timeoutSeconds'.`;throw Ze(s,[De(p,s,0)]),new Error(p)}throw u.fatal&&this.kill(),ne(`Python error in ${o}`,u.error||""),new Error(`Python failed: ${u.error}`)}let d=u.stdout??"",c=u.stderr??"";if(u.status!==0){ne(`Runtime error in ${o}`,c||`Exit status ${u.status}`),Ze(s,Ub(c,o,s));let p=c.trim().split(`
`).pop()||`exit status ${u.status}`;throw new Error(`Execution failed: ${p}`)}return c.trim().length>0&&ne(`stderr of ${o}`,c),Gr(s),d}};function Ub(r,e,t){let n=r.trim().split(`
`),s=n[n.length-1]||"Runtime error",o=new RegExp(`File "${e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}", line (\\d+)`),i=0;for(let a of n){let l=a.match(o);l&&(i=parseInt(l[1])-1)}return[De(s,t,Math.max(0,i))]}var Oo=null;function Fb(){return Oo===null&&(Oo={Python:new Kr,"C++":new Ct("c++","web.cppCompilerId","runner.cpp.flags",["-std=c++17","-O2","-Wall"],/^g\d+$/),GHC:new Ct("haskell","web.haskellCompilerId","runner.ghc.flags",["-O2"],/^ghc\d+$/)}),Oo}var q={kind:"web",hasTerminal:!1,init(r){},describe(){return[`Platform:          Web (${typeof navigator<"u"?navigator.userAgent:"?"})`]},getRunner(r){return Fb()[r]},async compareImages(){return null},documentsDirUri(r){return Jd.Uri.joinPath(r.globalStorageUri,"documents")}};var Xe=x(require("vscode"));var Yd="jutge-exams",Hd=["accepted","presentation_error","rejected","none","failed"];function Gd(r){if(r==null)return null;let e=new Date(r).getTime();return Number.isNaN(e)?null:e}function Bb(r){return{title:r.title??"",startMs:Gd(r.time_start),expectedStartMs:Gd(r.exp_time_start),totalMs:Math.max(0,Number(r.running_time||0))*6e4}}function zd(r,e){if(!r)return r;let t=`grad-${e}`;return r.replace(/id="a"/g,`id="${t}"`).replace(/url\(#a\)/g,`url(#${t})`)}async function jb(r){let e={},t=Xe.Uri.joinPath(r,"resources");for(let s of Hd){let o=Xe.Uri.joinPath(t,"dark",`${s}.svg`),i=Xe.Uri.joinPath(t,"light",`${s}.svg`),a="",l="";try{a=await Ie(o)}catch{}try{l=await Ie(i)}catch{}e[s]={dark:zd(a,s),light:zd(l,s)}}let n=e.none;for(let s of Hd)e[s].dark||(e[s].dark=n?.dark||""),e[s].light||(e[s].light=n?.light||"");return e}function Nb(r){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta
        http-equiv="Content-Security-Policy"
        content="default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline';"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Exams</title>
    <style>
        :root {
            color-scheme: light dark;
            font-size: 13px;
        }
        body {
            margin: 0;
            padding: 8px 10px 12px;
            color: var(--vscode-foreground);
            font-family: var(--vscode-font-family);
            line-height: 1.4;
            background: var(--vscode-sideBar-background);
        }
        .status {
            padding: 4px 0;
            font-size: 12px;
            color: var(--vscode-descriptionForeground, #888888);
        }
        .status.is-error {
            color: var(--vscode-errorForeground, #d33);
        }
        .status[hidden] {
            display: none;
        }
        .exam-header {
            margin: 0 0 14px;
        }
        .exam-header[hidden] {
            display: none;
        }
        .exam-header .exam-title {
            margin: 0 0 10px;
            min-height: 20px;
            font-size: 16px;
            font-weight: 600;
            line-height: 1.25;
            color: var(--vscode-foreground);
            word-break: break-word;
        }
        .timer-block.is-dead {
            opacity: 0.55;
        }
        .timer-block .timer-bar {
            width: 100%;
            height: 6px;
            border-radius: 3px;
            background: rgba(127, 127, 127, 0.22);
            overflow: hidden;
        }
        .timer-block .timer-bar-fill {
            height: 100%;
            width: 0%;
            background: var(--vscode-charts-foreground, var(--vscode-foreground));
            transition: width 600ms linear;
        }
        .timer-block .timer-bar-fill.is-danger {
            background: #c8302c;
        }
        .timer-block .timer-bar-fill.is-ended {
            background: #c8302c;
        }
        .timer-block .timer-labels {
            display: flex;
            justify-content: space-between;
            margin-top: 6px;
            font-size: 11.5px;
            color: var(--vscode-descriptionForeground, #888888);
            gap: 8px;
        }
        .timer-block .timer-labels.is-hidden {
            visibility: hidden;
        }
        .timer-block .timer-label {
            white-space: nowrap;
        }
        .timer-block .timer-label .timer-label-name {
            opacity: 0.75;
            margin-right: 4px;
        }
        .timer-block .timer-label .timer-label-value {
            color: var(--vscode-foreground);
            font-variant-numeric: tabular-nums;
        }
        .timer-block .timer-label.timer-remaining .timer-label-value.is-danger {
            color: #d33;
        }
        .exam-empty-state {
            text-align: center;
            padding: 64px 16px;
        }
        .exam-empty-state[hidden] {
            display: none;
        }
        .exam-empty-state .empty-title {
            margin: 0 0 3px;
            font-size: 14px;
            font-style: italic;
            color: var(--vscode-foreground);
        }
        .exam-empty-state .empty-subtitle {
            margin: 0;
            font-size: 12px;
            color: var(--vscode-descriptionForeground, #888888);
        }
        .exam-empty-state .empty-subtitle:empty {
            display: none;
        }
        .problems-list {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
        .problems-list[hidden] {
            display: none;
        }
        .problem-card {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 12px;
            border: 1px solid var(--vscode-widget-border, rgba(127, 127, 127, 0.25));
            border-radius: 6px;
            background: transparent;
            cursor: pointer;
            color: var(--vscode-foreground);
            transition: background-color 100ms ease, border-color 100ms ease;
        }
        .problem-card:hover {
            background: var(--vscode-list-hoverBackground, rgba(127, 127, 127, 0.10));
        }
        .problem-card:focus {
            outline: 1px solid var(--vscode-focusBorder);
            outline-offset: -1px;
        }
        .problem-card .icon-slot {
            flex: 0 0 auto;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 28px;
            height: 28px;
        }
        .problem-card .icon-slot svg {
            display: block;
            width: 100%;
            height: 100%;
        }
        .problem-card .card-text {
            flex: 1;
            min-width: 0;
            display: flex;
            align-items: baseline;
            gap: 8px;
        }
        .problem-card .card-caption {
            color: var(--vscode-descriptionForeground, #888888);
            font-size: 12px;
            white-space: nowrap;
        }
        .problem-card .card-title {
            flex: 1;
            min-width: 0;
            font-size: 14px;
            line-height: 1.3;
            word-break: break-word;
        }
        .problem-card .card-points {
            flex: 0 0 auto;
            font-variant-numeric: tabular-nums;
            color: var(--vscode-descriptionForeground, #888888);
            font-size: 12px;
            white-space: nowrap;
        }
        .problem-card.is-accepted {
            border-color: rgba(76, 175, 80, 0.55);
            background: rgba(76, 175, 80, 0.07);
        }
        .problem-card.is-accepted:hover {
            background: rgba(76, 175, 80, 0.14);
        }
        .problem-card.is-accepted .card-title {
            color: var(--vscode-testing-iconPassed, var(--vscode-charts-green, #4caf50));
            font-weight: 500;
        }
        .problem-card.is-accepted .card-points {
            color: var(--vscode-testing-iconPassed, var(--vscode-charts-green, #4caf50));
        }
        .problem-card.is-presentation-error {
            border-color: rgba(214, 200, 0, 0.55);
            background: rgba(214, 200, 0, 0.07);
        }
        .problem-card.is-presentation-error:hover {
            background: rgba(214, 200, 0, 0.14);
        }
        .problem-card.is-presentation-error .card-title {
            color: var(--vscode-charts-yellow, #d6c800);
            font-weight: 500;
        }
        .problem-card.is-presentation-error .card-points {
            color: var(--vscode-charts-yellow, #d6c800);
        }
        .problem-card.is-rejected,
        .problem-card.is-failed {
            border-color: rgba(214, 0, 0, 0.55);
            background: rgba(214, 0, 0, 0.07);
        }
        .problem-card.is-rejected:hover,
        .problem-card.is-failed:hover {
            background: rgba(214, 0, 0, 0.14);
        }
        .problem-card.is-rejected .card-title,
        .problem-card.is-failed .card-title {
            color: var(--vscode-testing-iconFailed, var(--vscode-charts-red, #d60000));
            font-weight: 500;
        }
        .problem-card.is-rejected .card-points,
        .problem-card.is-failed .card-points {
            color: var(--vscode-testing-iconFailed, var(--vscode-charts-red, #d60000));
        }
    </style>
</head>
<body>
    <div id="status" class="status">Loading exam problems...</div>
    <header id="exam-header" class="exam-header">
        <h2 id="exam-title" class="exam-title"></h2>
        <div id="timer-block" class="timer-block is-dead">
            <div class="timer-bar">
                <div id="timer-bar-fill" class="timer-bar-fill"></div>
            </div>
            <div id="timer-labels-running" class="timer-labels is-hidden">
                <span class="timer-label timer-start">
                    <span class="timer-label-name">Start</span>
                    <span id="timer-start-value" class="timer-label-value">\u2014</span>
                </span>
                <span class="timer-label timer-end">
                    <span class="timer-label-name">End</span>
                    <span id="timer-end-value" class="timer-label-value">\u2014</span>
                </span>
                <span class="timer-label timer-remaining">
                    <span class="timer-label-name">Remaining</span>
                    <span id="timer-remaining-value" class="timer-label-value">\u2014</span>
                </span>
            </div>
        </div>
    </header>
    <div id="exam-empty-state" class="exam-empty-state" hidden>
        <p id="empty-title" class="empty-title">Exam not started yet</p>
        <p id="empty-subtitle" class="empty-subtitle"></p>
    </div>
    <div id="problems" class="problems-list" hidden></div>

    <script>
        (function() {
            const vscode = acquireVsCodeApi();
            const statusEl = document.getElementById("status");
            const tableEl = document.getElementById("problems");
            const bodyEl = tableEl;
            const headerEl = document.getElementById("exam-header");
            const titleEl = document.getElementById("exam-title");
            const timerEl = document.getElementById("timer-block");
            const fillEl = document.getElementById("timer-bar-fill");
            const labelsRunningEl = document.getElementById("timer-labels-running");
            const startValEl = document.getElementById("timer-start-value");
            const endValEl = document.getElementById("timer-end-value");
            const remainingValEl = document.getElementById("timer-remaining-value");
            const emptyStateEl = document.getElementById("exam-empty-state");
            const emptyTitleEl = document.getElementById("empty-title");
            const emptySubtitleEl = document.getElementById("empty-subtitle");
            const ICONS = ${JSON.stringify(r).replace(/<\/script/gi,"<\\/script")};
            const TICK_MS = 10000;
            const DANGER_THRESHOLD_RATIO = 0.10;
            let timerState = null;
            let tickHandle = null;

            function isLightTheme() {
                return document.body.classList.contains("vscode-light");
            }
            function iconSvg(status) {
                const entry = ICONS[status] || ICONS["none"] || { dark: "", light: "" };
                return isLightTheme() ? entry.light : entry.dark;
            }
            function refreshIcons() {
                const slots = bodyEl.querySelectorAll(".icon-slot[data-status]");
                slots.forEach(function(slot) {
                    slot.innerHTML = iconSvg(slot.getAttribute("data-status"));
                });
            }
            new MutationObserver(refreshIcons).observe(document.body, {
                attributes: true,
                attributeFilter: ["class"]
            });

            function setStatus(text, isError) {
                statusEl.textContent = text || "";
                statusEl.classList.toggle("is-error", Boolean(isError));
                statusEl.hidden = !text;
            }

            function formatPoints(weight) {
                if (typeof weight !== "number" || !isFinite(weight)) return "";
                const rounded = Math.round(weight * 100) / 100;
                return String(rounded);
            }

            function formatClock(ms) {
                if (typeof ms !== "number" || !isFinite(ms)) return "\u2014";
                const d = new Date(ms);
                if (isNaN(d.getTime())) return "\u2014";
                const hh = String(d.getHours()).padStart(2, "0");
                const mm = String(d.getMinutes()).padStart(2, "0");
                return hh + ":" + mm;
            }
            function formatRemaining(ms) {
                const clamped = Math.max(0, ms);
                const totalMinutes = Math.floor(clamped / 60000);
                const hours = Math.floor(totalMinutes / 60);
                const minutes = totalMinutes % 60;
                if (hours > 0) return hours + "h " + minutes + "m";
                if (minutes > 0) return minutes + "m";
                return "<1m";
            }

            function setHeaderPlaceholder() {
                titleEl.textContent = "";
                timerState = null;
                stopTicker();
                timerEl.classList.add("is-dead");
                fillEl.style.width = "0%";
                fillEl.classList.remove("is-danger", "is-ended");
                labelsRunningEl.classList.add("is-hidden");
            }
            function renderHeader(meta) {
                if (!meta) {
                    setHeaderPlaceholder();
                    return;
                }
                titleEl.textContent = meta.title || "";

                const hasStart = typeof meta.startMs === "number";
                const hasDuration = typeof meta.totalMs === "number" && meta.totalMs > 0;
                fillEl.classList.remove("is-danger", "is-ended");

                if (hasStart && hasDuration) {
                    timerState = {
                        startMs: meta.startMs,
                        endMs: meta.startMs + meta.totalMs,
                        totalMs: meta.totalMs
                    };
                    timerEl.classList.remove("is-dead");
                    labelsRunningEl.classList.remove("is-hidden");
                    startValEl.textContent = formatClock(timerState.startMs);
                    endValEl.textContent = formatClock(timerState.endMs);
                    redrawTimer();
                    startTicker();
                    return;
                }

                // Exam has not started yet (no real start time): dead, gray, no labels.
                timerState = null;
                stopTicker();
                timerEl.classList.add("is-dead");
                fillEl.style.width = "0%";
                labelsRunningEl.classList.add("is-hidden");
            }
            function showEmptyState(message, subtitle) {
                emptyTitleEl.textContent = message || "";
                emptySubtitleEl.textContent = subtitle || "";
                emptyStateEl.hidden = !message;
            }
            function hideEmptyState() {
                emptyStateEl.hidden = true;
            }
            function redrawTimer() {
                if (!timerState) return;
                const now = Date.now();
                const elapsed = Math.max(0, Math.min(1, (now - timerState.startMs) / timerState.totalMs));
                const remaining = Math.max(0, timerState.endMs - now);
                const ended = elapsed >= 1;
                fillEl.style.width = (elapsed * 100).toFixed(2) + "%";
                fillEl.classList.toggle("is-danger", !ended && elapsed > 1 - DANGER_THRESHOLD_RATIO);
                fillEl.classList.toggle("is-ended", ended);
                if (ended) {
                    remainingValEl.textContent = "ended";
                    remainingValEl.classList.add("is-danger");
                } else {
                    remainingValEl.textContent = formatRemaining(remaining);
                    remainingValEl.classList.toggle(
                        "is-danger",
                        remaining <= timerState.totalMs * DANGER_THRESHOLD_RATIO
                    );
                }
            }
            function startTicker() {
                stopTicker();
                tickHandle = setInterval(redrawTimer, TICK_MS);
            }
            function stopTicker() {
                if (tickHandle !== null) {
                    clearInterval(tickHandle);
                    tickHandle = null;
                }
            }

            function renderRows(rows) {
                bodyEl.innerHTML = "";
                rows.forEach(function(row) {
                    const card = document.createElement("div");
                    card.className = "problem-card";
                    if (row.iconStatus && row.iconStatus !== "none") {
                        card.classList.add("is-" + row.iconStatus.replace(/_/g, "-"));
                    }
                    card.setAttribute("data-problem-nm", row.problem_nm);
                    card.setAttribute("data-order", String(row.order));
                    card.setAttribute("tabindex", "0");
                    card.setAttribute("role", "button");
                    card.title = row.problem_nm;

                    const slot = document.createElement("span");
                    slot.className = "icon-slot";
                    slot.setAttribute("data-status", row.iconStatus);
                    slot.setAttribute("title", row.iconStatus);
                    slot.innerHTML = iconSvg(row.iconStatus);
                    card.appendChild(slot);

                    const text = document.createElement("div");
                    text.className = "card-text";
                    if (row.caption) {
                        const captionEl = document.createElement("span");
                        captionEl.className = "card-caption";
                        captionEl.textContent = row.caption;
                        text.appendChild(captionEl);
                    }
                    const titleEl = document.createElement("span");
                    titleEl.className = "card-title";
                    titleEl.textContent = row.title || "";
                    text.appendChild(titleEl);
                    card.appendChild(text);

                    const pointsText = formatPoints(row.weight);
                    if (pointsText) {
                        const pointsEl = document.createElement("span");
                        pointsEl.className = "card-points";
                        pointsEl.textContent = pointsText + " pts";
                        card.appendChild(pointsEl);
                    }

                    function activate() {
                        vscode.postMessage({
                            type: "openProblem",
                            payload: { problem_nm: row.problem_nm, order: row.order }
                        });
                    }
                    card.addEventListener("click", activate);
                    card.addEventListener("keydown", function(ev) {
                        if (ev.key === "Enter" || ev.key === " ") {
                            ev.preventDefault();
                            activate();
                        }
                    });

                    bodyEl.appendChild(card);
                });
                tableEl.hidden = rows.length === 0;
            }

            window.addEventListener("message", function(event) {
                const message = event.data;
                if (!message || typeof message !== "object") return;
                if (message.type === "examLoading") {
                    setStatus("Loading exam problems...", false);
                    setHeaderPlaceholder();
                    tableEl.hidden = true;
                    hideEmptyState();
                    return;
                }
                if (message.type === "examResult") {
                    const payload = message.payload || {};
                    if (!payload.ok) {
                        setStatus(payload.error || "Could not load exam problems.", true);
                        setHeaderPlaceholder();
                        tableEl.hidden = true;
                        hideEmptyState();
                        return;
                    }
                    const meta = payload.exam || null;
                    renderHeader(meta);
                    const rows = Array.isArray(payload.rows) ? payload.rows : [];
                    const started = meta && typeof meta.startMs === "number";
                    if (meta && !started) {
                        setStatus("", false);
                        tableEl.hidden = true;
                        showEmptyState(
                            "Exam not started yet",
                            typeof meta.expectedStartMs === "number"
                                ? "expected " + formatClock(meta.expectedStartMs)
                                : ""
                        );
                        return;
                    }
                    if (rows.length === 0) {
                        hideEmptyState();
                        setStatus("", false);
                        tableEl.hidden = true;
                        return;
                    }
                    hideEmptyState();
                    setStatus("", false);
                    renderRows(rows);
                }
            });

            vscode.postMessage({ type: "examViewReady" });
        })();
    <\/script>
</body>
</html>`}var Kd=2e4,qb=4e4;function Wb(){return Kd+Math.floor(Math.random()*(qb-Kd))}var Qr=class extends A{constructor(t){super();this.extensionUri=t;this.iconMap=jb(t)}extensionUri;webviewView;currentRows=[];currentExamMeta=null;iconMap;startPollHandle=null;async resolveWebviewView(t){this.webviewView=t,t.webview.options={enableScripts:!0},t.webview.html=Nb(await this.iconMap),t.onDidDispose(()=>{this.webviewView=void 0}),t.webview.onDidReceiveMessage(async n=>{if(!n||typeof n!="object")return;let s=n;if(s.type==="examViewReady"){await this.loadAndPush_();return}s.type==="openProblem"&&s.payload?.problem_nm&&await Xe.commands.executeCommand("jutge-vscode.showProblem",s.payload.problem_nm,s.payload.order??-1)})}dispose(){this.stopStartPoll_(),this.webviewView=void 0}stopStartPoll_(){this.startPollHandle!==null&&(clearTimeout(this.startPollHandle),this.startPollHandle=null)}scheduleStartPoll_(){this.stopStartPoll_(),this.webviewView&&(!this.currentExamMeta||this.currentExamMeta.startMs!==null||(this.startPollHandle=setTimeout(()=>{this.startPollHandle=null,this.loadAndPush_()},Wb())))}refresh=async()=>{await this.loadAndPush_()};refreshProblem({problem_nm:t,status:n}){let s=this.currentRows.find(i=>i.problem_nm===t);if(!s){this.log.info(`Verdict for unknown problem '${t}'`);return}let o=Qd(s.iconStatus,n);o!==s.iconStatus&&(s.iconStatus=o,this.pushRows_())}async loadAndPush_(){if(this.webviewView){if(!f.isSignedInExam()){this.stopStartPoll_(),this.currentRows=[],this.currentExamMeta=null,await this.webviewView.webview.postMessage({type:"examResult",payload:{ok:!0,rows:[],exam:null}});return}try{let t=f.getExamSWR();t.onUpdate=()=>{this.loadAndPush_()};let n=t.data;if(!n){await this.webviewView.webview.postMessage({type:"examLoading"});return}this.currentExamMeta=Bb(n);let s=n.problems.map(c=>c.problem_nm),o=f.getAbstractProblemsSWR(s);o.onUpdate=()=>{this.loadAndPush_()};let i=f.getAllSubmissionsSWR();if(i.onUpdate=()=>{this.loadAndPush_()},o.data===void 0||i.data===void 0){await this.webviewView.webview.postMessage({type:"examLoading"});return}let a=o.data,l=Gb(i.data),u=[],d=1;for(let c of a){let p=n.problems[d-1],b=p?.caption||"",v=p?.weight??1,{title:E,problem_nm:w}=Vb(c),T=l.get(w)??"none";u.push({problem_nm:w,order:d,caption:b,title:E,weight:v,iconStatus:T}),d++}this.currentRows=u,await this.pushRows_()}catch(t){this.log.error(t);let n=t instanceof Error?t.message:String(t);await this.webviewView.webview.postMessage({type:"examResult",payload:{ok:!1,error:n}})}finally{this.scheduleStartPoll_()}}}async pushRows_(){this.webviewView&&await this.webviewView.webview.postMessage({type:"examResult",payload:{ok:!0,rows:this.currentRows,exam:this.currentExamMeta}})}};function Vb(r){let{problem_nm:e,problems:t}=r,n=ye.getPreferredLangId(),s=`${e}_${n}`,o;return s in t?o=t[s]:o=Object.values(t)[0],{problem_nm:e,title:o.title}}function Jb(r){let e=r.indexOf("_");return e<=0?r:r.slice(0,e)}function Hb(r){return r&&Object.values(xt).includes(r)?r:null}function Gb(r){let e=new Map;for(let t of r){let n=Hb(t.veredict);if(n===null)continue;let s=Jb(t.problem_id),o=e.get(s)??"none";e.set(s,Qd(o,n))}return e}function Qd(r,e){switch(r){case"none":return Fr[e];case"rejected":return e==="PE"?"presentation_error":e==="AC"?"accepted":r;case"presentation_error":return e==="AC"?"accepted":r;default:return r}}var $=x(require("vscode"));var U=x(require("vscode"));function Zd(){let r="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let t=0;t<32;t++)r+=e.charAt(Math.floor(Math.random()*e.length));return r}async function $o(r){let e=["output","jutge-diff","debug","vscode-terminal","git","vscode-settings"];return r=r.filter(n=>!e.includes(n.document.uri.scheme)),r.length===0?void 0:r.length===1?r[0]:(await U.window.showQuickPick(r.map(n=>({label:O(n.document.uri.path),description:n.document.languageId,editor:n}))))?.editor}var zb={Catal\u00E0:"ca",Castellano:"es",English:"en"},Xd=["ca","es","en","fr"];function Mo(r){let e=U.workspace.getConfiguration("jutge-vscode").get("problem.preferredLang"),t=zb[e];return r+"_"+t}async function em(r){return new Promise(e=>{setTimeout(()=>e(),r)})}function Zr(r){let e=[[/[àá]/g,"a"],[/[èé]/g,"e"],[/[íï]/g,"i"],[/[òó]/g,"o"],[/[úü]/g,"u"],[/ñ/g,"n"],[/ç/g,"c"],[/[^a-zA-Z0-9 ]/g,""],[/ +/g," "],[/ /g,"_"]];for(let[t,n]of e)r=r.replaceAll(t,n);return r}function tm(r){let{input_b64:e,correct_b64:t}=r,n=ve(St(e)),s=St(t);return{input:n,expected:s}}var Kb=/([P-Z]\d{5}).*/;function rm(r){let e=r.match(Kb);return e===null?null:e[1]}function Yb(r){let e=r.handler?.compilers,t="";return Array.isArray(e)?t=e[0]:typeof e=="string"&&(t=e),t}function Lo(r){let e=Yb(r);if(!e)return null;try{return Ld(e)}catch{return U.window.showErrorMessage("Could not determine programming language"),null}}function Uo(r){let{problem_id:e,title:t}=r,n=Lo(r)||"C++",o=re(n).extensions[0];return{filename:`${e}_${Zr(t)}`,extension:o}}async function Fo(r,e){let t=e?`*${r}*${e}`:`*${r}*.*`;return await U.workspace.findFiles(t)}async function At(r){let{filename:e}=Uo(r);return(await Fo(e)).length>0}async function nm(r,e){let t=Mo(e),n=$d(),s=[];for(let[o,i]of await U.workspace.fs.readDirectory(r.uri)){let a=ae(o);i===U.FileType.File&&o.startsWith(t)&&n.includes(a)&&s.push(U.Uri.joinPath(r.uri,o))}return s[0]||null}function It(r){return new TextEncoder().encode(r)}var Qb=/ \(([0-9]+)\)$/;function Zb(r){let e=Id(r),t=O(r),n=ae(t),s=t.slice(0,-n.length),o=s.match(Qb),i=1,a=s;return o&&(i=1+Number(o[1]),a=s.slice(0,o.index)),a+=` (${i})`+n,e==="/"?`/${a}`:`${e}/${a}`}async function sm(r){for(;await te(r);)r=r.with({path:Zb(r.path)});return r}async function le(r){return U.window.showTextDocument(r,{preview:!1,viewColumn:U.ViewColumn.One})}var Bo=100,z=class extends j{static makeHeader(e,t){let{data:n}=f.getProfileSWR(),s=t.handler?.handler||"",o=t.handler?.source_modifier||"",i=t.handler?.compilers,a="";typeof i=="string"?a=i:Array.isArray(i)?a=i[0]:a=e.compilers[0];let l=e.commentPrefix;return[`${l} ${t.title}
`,`${l} https://jutge.org/problems/${t.problem_id}
`,`${l} ${t.problem_id}:${s}:${o}:${a}
`,`${l} Created on ${new Date().toLocaleString()} ${n?`by ${n.name}`:""}
`,`
`].join("")}static async makeBodyStdNoMain_(e,t){let s=await(async()=>{let l=await f.getTemplateList(t);for(let u of l){let d=ae(u);if(e.extensions.includes(d))return u}return null})();if(s===null)throw new Error(`No template for language ${e.proglang}`);this.log.info(`Found template '${s}'`);let{data:o,name:i,type:a}=await f.getTemplate(t,s);return this.log.info(`Got template '${s}': ${i} - ${a} (${o.constructor.name})`),o}static makeBodyStd_(e){return e.proglang==="C++"?`#include <iostream>
using namespace std;

int main() {

}
`:""}static async makeBody(e,t){let{handler:n,problem_id:s}=t;if(n===null)throw new Error(`Problem ${t.problem_id} does not have a handler!`);switch(n.handler){case"std":return n.source_modifier==="no_main"?this.makeBodyStdNoMain_(e,s):It(this.makeBodyStd_(e));case"graphic":return It(this.makeBodyStd_(e));default:throw new Error(`Handler '${n}' not implemented yet`)}}static makeSolutionFilename(e,t,n){return`${t>=0?`${String(t).padStart(2,"0")}_`:""}${e.problem_id}_${Zr(e.title)}${n}`}static makeTestcaseFilename({problem_id:e,title:t},n=1,s=!1){return`${e}_${Zr(t)}.test-${n}.${s?"cor":"inp"}`}static async findFirstUnusedCustomTestcase(e){let t=await W();if(!t)return null;let n=1;for(;n<=Bo;){let o=this.makeTestcaseFilename(e,n),i=$.Uri.joinPath(t.uri,o);if(!await te(i))break;n++}if(n>Bo)return null;let s=this.makeTestcaseFilename(e,n);return $.Uri.joinPath(t.uri,s)}static async createNewTestcaseFile(e){let t=await this.findFirstUnusedCustomTestcase(e);if(!t)return;this.log.info(`New testcase filename: ${t.fsPath}`);let n="";if(e.testcases&&e.testcases.length>0){let s=e.testcases[0];n=_t(s.input_b64)}try{await kd(t,n)}catch(s){throw $.window.showErrorMessage(`Couldn't create file '${t.fsPath}'`),s}return t}static async createNewTestcaseSolutionFile(e,t,n){let s=this.makeTestcaseFilename(e,t,!0),o=Xr();if(!o)return;let i=$.Uri.joinPath(o.uri,s),a=new Uint8Array([...It(n)]);try{await $.workspace.fs.writeFile(i,a)}catch(l){throw $.window.showErrorMessage(`Couldn't create file '${i.fsPath}'`),l}return i.fsPath}static async loadCustomTestcases(e){let t=[],n=Xr();if(!n)return[];for(let s=1;s<=Bo;s++){let o=this.makeTestcaseFilename(e,s),i=$.Uri.joinPath(n.uri,o);if(await te(i)){let a=await Ie(i),l,u=$.Uri.joinPath(n.uri,this.makeTestcaseFilename(e,s,!0));await te(u)&&(l=(await Ie(u)).replaceAll(/\r\n/g,`
`),l.endsWith(`
`)||(l+=`
`)),t.push({input:a.replaceAll(/\r\n/g,`
`),index:s,solution:l})}}return t}static async createNewFileFor(e,t){let n=await Ud(e.problem_nm);if(!n)return;let s=re(n),o=this.makeSolutionFilename(e,t,s.extensions[0]),i=await W();if(!i)return;let a=$.Uri.joinPath(i.uri,o);if(await te(a)){let l=await sm(a);if(a=await $.window.showSaveDialog({defaultUri:l,filters:{"All files":["*"]},saveLabel:"Create",title:`Create new file for ${e.title}`}),!a)return}try{let l=It(this.makeHeader(s,e)),u=await this.makeBody(s,e),d=new Uint8Array([...l,...u]);await $.workspace.fs.writeFile(a,d)}catch(l){throw $.window.showErrorMessage(`Failed to create file in ${a.fsPath} `),l}return a}static _r3rd=/^\/\/ ([A-Z][0-9]{5}_(?:ca|en|es|fr|de)):([a-z]*):([a-z]*):(.*)$/;static _r4th=/^\/\/ Created on (\d{2}\/\d{2}\/\d{4}), (\d{2}:\d{2}:\d{2}) by .*$/;static async parseFileHeader(e){let t=await Ie(e),[n,s,o,i]=t.split(`
`).slice(0,4),a={problem_id:"",handler:"",source_modifier:"",compiler_id:"",title:"",date:new Date(0)};a.title=n.slice(3),this.log.info(`Title = ${a.title}`);let l=o.match(this._r3rd);l&&(this.log.info(`Third line = ${l[1]}:${l[2]}:${l[3]}:${l[4]}`),a.problem_id=l[1],a.handler=l[2],a.source_modifier=l[3],a.compiler_id=l[4]);let u=i.match(this._r4th);return u&&(this.log.info(`Date = ${u[1]} - ${u[2]}`),a.date=new Date(`${u[1]} ${u[2]}`)),a}};var kt=x(require("vscode"));async function ey(r){try{return await f.getAbstractProblemSWR(r),!0}catch{return!1}}var D=class r extends j{static createdPanels_=new Map;static async createOrReveal(e,t=-1,n){this.log.debug(`Attempting to show panel for problem ${e}`);let s=B();if(!await ey(e))return kt.window.showErrorMessage("Problem not valid or accessible."),null;let o=kt.ViewColumn.Beside;if(this.createdPanels_.has(e)){let l=this.createdPanels_.get(e);return l.panel.reveal(o,!0),l}let i=kt.window.createWebviewPanel(ue.viewType,e,{viewColumn:o,preserveFocus:!0},jo(s.extensionUri)),a=new ue(i,{problemNm:e,order:t},n);return this.createdPanels_.set(e,a),a}static updatePanelsOnChangedFiles(e){let t=e.map(n=>rm(O(n.path)));for(let n of t)n&&r.notifyProblemFilesChanges(n)}static async notifyProblemFilesChanges(e){let t=this.get(e);if(!t)return;await t.notifyProblemFilesChanges();let n=await At(t.problem);t.fileExists=n}static register(e,t){this.createdPanels_.set(e,t)}static get(e){return this.createdPanels_.get(e)}static remove(e){this.createdPanels_.delete(e)}static async sendMessage(e,t){let n=this.createdPanels_.get(e);n&&await n.panel.webview.postMessage(t)}};var S=x(require("vscode"));var M=x(require("vscode"));var Oe=class extends j{static MONITOR_INTERVAL_MS=2e3;static emitter_=new M.EventEmitter;static onDidReceiveVeredict=this.emitter_.event;static async submitProblem(e,t){let n=await M.window.withProgress({location:M.ProgressLocation.Notification,title:`Submitting ${e.problem_nm}`,cancellable:!1},async s=>{let{problem_nm:o,problem_id:i}=e;this.log.info(`Preparing to submit problem ${i} from file ${t}`);let a=Tt(t.path),l=re(a),u="";if(e.handler&&e.handler?.compilers){let p=e.handler?.compilers.split(" ");this.log.debug(`Compiler IDs specified by the problem: [${p.join(", ")}]`),p.length>0&&(u=p[0])}u=u||l.compilers[0],this.log.debug(`Using compiler ID: ${u}`),s.report({message:"Submitting..."}),this._sendStatusUpdate(o,"Pending");let d=new Date().toLocaleDateString(),c=new Date().toLocaleTimeString();try{this.log.debug("Reading file content");let p=await M.workspace.fs.readFile(t),b=new File([p],O(t.path),{type:l.mimeType});this.log.debug(`File has ${b.size} bytes`),this.log.info("Submitting to Jutge.org");let{submission_id:v}=await f.submit(b,{problem_id:i,compiler_id:u,annotation:`Sent through VSCode on ${d} at ${c}`,extraSubmissionInfo:null});this.log.info(`Submission successful (${v})`),s.report({message:`Submission successful (${v})`});let[E,w]=await this._waitForVerdictLoop(e,v,s),T=E==="SC"?await f.getSubmissionScoring({problem_id:i,submission_id:v}):void 0;return this.emitter_.fire({problem_nm:e.problem_nm,status:E}),{submission_id:v,verdict:E,submission:w,scoring:T}}catch(p){if(p instanceof V)return;let b=String(p);p instanceof Error&&(b=p.message,p.cause instanceof Error&&(b=p.cause.message)),this.log.error("Error submitting to Jutge: ",b),M.window.showErrorMessage(`Error submitting to Jutge: ${b}`),this._sendStatusUpdate(o,"Failed")}});n&&n.submission&&(this._sendStatusUpdate(e.problem_nm,n.verdict),await this._showVerdictNotification(e,n.submission_id,n.verdict,n.submission,n.scoring))}static async _waitForVerdictLoop(e,t,n){let s=1,o="Pending",i;try{for(;o==="Pending";)await em(this.MONITOR_INTERVAL_MS),n.report({message:`Waiting (${s++}) ...`}),i=await f.getSubmission({problem_id:e.problem_id,submission_id:t}),o=i.veredict}catch(a){await M.window.showErrorMessage("Error getting submission status: "+a),o="Pending"}return[o,i]}static async _showVerdictNotification(e,t,n,s,o){let i=n&&this._verdictText.get(n)||"\u2753";if(n==="SC"){let u=0,d=0;o?.forEach(c=>{u+=c.points,d+=c.correct_points}),i+=`: ${u}/${d}`}else s.veredict_info&&(i+=": "+s.veredict_info);let a=f.isExamMode()?"https://exam.jutge.org":"https://jutge.org",l=await M.window.showInformationMessage(i,{title:"View in jutge.org"});if(l&&l.title==="View in jutge.org"){let u=`/${e.problem_id}/submissions/${t}`;M.env.openExternal(M.Uri.parse(`${a}/problems${u}`))}}static async _sendStatusUpdate(e,t){return D.sendMessage(e,{command:"update-submission-status",data:{status:t}})}static _verdictText=new Map([["AC","\u{1F7E2} Accepted!"],["WA","\u{1F534} Wrong Answer"],["IC","\u{1F6AB} Invalid Character"],["PE","\u{1F7E1} Presentation Error"],["EE","\u{1F4A3} Execution Error"],["SC","\u{1F7E0} Scored"],["CE","\u{1F6E0} Compilation Error"],["IE","\u{1F525} Internal Error"],["Pending","\u23F3 Pending..."]])};var Dt=class{run(e,t,n){return e===t?"passed":"failed"}},No=class{run(e,t,n){if(e===t)return"passed";if(!n.separator)return"failed";let s=e.split(n.separator),o=t.split(n.separator);return s.length!==o.length?"failed":(s.sort(),o.sort(),s.join(n.separator)===o.join(n.separator)?"passed":"failed")}},qo=class{standarize(e,t,n,s){if(e.startsWith(n)&&e.endsWith(s)){let o=e.slice(n.length,-s.length);return n+o.split(t).sort().join(t)+s}return""}run(e,t,n){if(e===t)return"passed";if(!n.separator1||!n.separator2||!n.starting||!n.ending)return"failed";let s=e.split(n.separator1),o=t.split(n.separator1);if(s.length!==o.length)return"failed";let i=s.map(l=>this.standarize(l,n.separator2||"",n.starting||"",n.ending||"")).sort(),a=o.map(l=>this.standarize(l,n.separator2||"",n.starting||"",n.ending||"")).sort();return i.join(n.separator1)===a.join(n.separator1)?"passed":"failed"}},im={std:{checker:"std",runner:new Dt,implemented:!0,driver:"std"},loose:{checker:"loose",runner:new Dt,implemented:!0,driver:"std"},elastic:{checker:"elastic",runner:new No,implemented:!0,driver:"std"},elastic2:{checker:"elastic2",runner:new qo,implemented:!0,driver:"std"},unk:{checker:"unk",runner:new Dt,implemented:!1,driver:"std"}};function am(r){for(let[e,t]of Object.entries(im))if(r===e)return t;return im.unk}function Rt(r){return am(r||"std")}var en=class extends A{panel_;problem_;compilers;order_;proglang_;langInfo_;constructor(e,t,n,s){super(),this.panel_=e,this.problem_=t,this.order_=s,this.compilers=n,this.problem_.testcases||f.getSampleTestcases(this.problem_.problem_id).then(o=>this.problem_.testcases=o),this.proglang_=Lo(t)||"C++",this.langInfo_=re(this.proglang_)}get langInfo(){if(!this.langInfo_)throw new Error("Lang info not initialized yet!!");return this.langInfo_}async chooseSourceFile(e,t){let n=await W();if(!n)return;let o=(await Fo(e,t)).map(a=>O(a.path)),i=o[0];if(o.length>1&&(i=await S.window.showQuickPick(o)),!!i)return S.Uri.joinPath(n.uri,i)}async openExistingFile(e){if(!await W())return;let{filename:n}=Uo(this.problem_),s=await this.chooseSourceFile(n);if(!s)throw new Error(`File '${n}' does not exist in workspace!`);e.dispose();let o=await S.workspace.openTextDocument(s);le(o);let{problem_nm:i}=this.problem_;await D.createOrReveal(i,this.order_),await D.notifyProblemFilesChanges(i)}async createNewFile(e){if(!await W())return;let n=await z.createNewFileFor(this.problem_,this.order_);if(!n)return;let s=await S.workspace.openTextDocument(n);le(s),e.reveal(S.ViewColumn.Beside,!0)}async runTestcaseByIndex(e,t={saveFirst:!0}){try{t?.saveFirst&&await S.commands.executeCommand("workbench.action.files.save");let n=await this.__getEditorUri();this.log.debug(`Running testcase on file ${n}`);let s=await this.__getTestcase(e);this.log.debug(`Running testcase ${e}`);let{problem_nm:o}=this.problem_;this.__sendUpdate(o,e,"running");let{status:i,output:a}=await this.__runExpecting(s,n);return this.__sendUpdate(o,e,i,a),i==="passed"}catch(n){return this.log.error(n),this.__sendUpdate(this.problem_.problem_nm,e,"failed",String(n?.message??n)),n instanceof Error&&S.window.showErrorMessage(n.message),!1}}async runCustomTestcaseByIndex(e,t={saveFirst:!0}){try{t?.saveFirst&&await S.commands.executeCommand("workbench.action.files.save");let n=await this.__getEditorUri();this.log.debug(`Running testcase on file ${n}`);let s=await this.__getCustomTestcase(e);this.log.debug(`Running custom testcase ${e}`);let{problem_nm:o}=this.problem_;this.__sendUpdateCustom(o,e,"running");let i=await this.__run(s.input,n);if(s.solution===void 0)return this.__sendUpdateCustom(o,e,"passed",i),!0;if(this.problem_.handler?.handler==="std"){console.log("checking");let a=Rt(this.problem_.handler?.checker),l=i.replaceAll(`\r
`,`
`),u=s.solution,d=a.runner.run(l,u,this.problem_.handler);return this.__sendUpdateCustom(o,e,d,i,!0),d==="passed"}else return this.__sendUpdateCustom(o,e,"passed",i),!0}catch(n){return this.log.error(n),this.__sendUpdateCustom(this.problem_.problem_nm,e,"failed",n instanceof Error?n.message:String(n)),n instanceof Error&&S.window.showErrorMessage(n.message),!1}}async runTestcaseAll(){try{await S.commands.executeCommand("workbench.action.files.save");let e=await this.__ensureTestcases(!1);if(e.length===0&&(!this.panel_.customTestcases||this.panel_.customTestcases.length===0))throw new Error(`No testcases found for problem ${this.problem_.problem_nm}`);this.log.debug(`Running all testcases for problem ${this.problem_.problem_id}`);let t=!0;for(let n=1;n<=e.length;n++){let s=await this.runTestcaseByIndex(n,{saveFirst:!1});t=t&&s}if(this.panel_.customTestcases)for(let n=1;n<=this.panel_.customTestcases.length;n++){let s=await this.runCustomTestcaseByIndex(n,{saveFirst:!1});t=t&&s}return t}catch(e){return this.log.error(`Error running all testcases: ${e}`),S.window.showErrorMessage(e.toString()),!1}}async submitToJudge(){await S.commands.executeCommand("workbench.action.files.save");let e=await $o(S.window.visibleTextEditors);if(!e){S.window.showErrorMessage("No text editor open.");return}return Oe.submitProblem(this.problem_,e.document.uri)}async __runExpecting(e,t){try{let n=Tt(t.path),s=re(n).runner,o=await this.__getDocument(t),i=null;this.compilers&&this.compilers.length>0&&(i=this.compilers[0]),this.log.debug(`Executing code with ${s.constructor.name}`);let l=(await s.run(i,t,e.input,o)).replaceAll(/\r\n/g,`
`);this.log.debug("Code execution completed");let u=this.problem_.handler?.handler||"<unknown>";switch(u){case"std":{let c=Rt(this.problem_.handler?.checker),p=l.replaceAll(`\r
`,`
`),b=ve(e.expected),v=l!==null&&l===b;return{status:c.runner.run(p,b,this.problem_.handler),output:p}}case"graphic":{if(q.kind==="web")throw new Error("Graphic problems cannot be tested in the browser. Submit your solution to Jutge.org instead.");let c=S.Uri.file(s.getRunningDir()),p=S.Uri.joinPath(c,"output.png"),b=S.Uri.joinPath(c,"expected.png"),v=await S.workspace.fs.readFile(p),E=Et(v);await S.workspace.fs.writeFile(b,e.expected);let w=await q.compareImages(p,b);return{status:w===null||w>0?"failed":"passed",output:E}}default:let d=`Error running testcase: handler '${u}' not supported`;throw this.log.error(d),new Error(d)}}catch(n){throw this.log.error(`Error running testcase: ${n}`),new Error(`Error running testcase: ${n}`)}}async __run(e,t){let n=Tt(t.path),{compilers:[s]}=this.problem_.handler,{runner:o}=re(n),i=await this.__getDocument(t);this.log.debug(`Executing code with ${o.constructor.name}`);let l=(await o.run(s,t,e,i)).replaceAll(/\r\n/g,`
`);return this.log.debug("Code execution completed"),l}async __sendMessage(e,t,n){await D.sendMessage(t,{command:e,data:n})}async __sendUpdate(e,t,n,s=""){this.__sendMessage("update-testcase-status",e,{testcaseId:t,status:n,output:s})}async __sendUpdateCustom(e,t,n,s="",o=!1){this.__sendMessage("update-custom-testcase-status",e,{testcaseId:t,status:n,output:s,withSolution:o})}async __getEditorUri(){let e=await $o(S.window.visibleTextEditors);if(!e)throw new Error("No text editor open");return e.document.uri}async __ensureTestcases(e=!0){let{testcases:t}=this.problem_;if(t&&t.length>0)return this.log.debug(`Found ${t.length} testcases for problem ${this.problem_.problem_nm}`),t;if(e)throw new Error(`No testcases found for problem ${this.problem_.problem_nm}`);return[]}async __getTestcase(e){let t=await this.__ensureTestcases(),n=e-1;if(n<0||n>=t.length)throw new Error(`Internal error: testcase index ${e} does not exist!`);return tm(t[n])}async __getCustomTestcase(e){let{customTestcases:t}=this.panel_;if(t===null)throw new Error("Internal Error: there are no custom testcases!");let n=e-1;if(n<0||n>=t.length)throw new Error(`Internal error: custom testcase index ${e} does not exist!`);return t[n]}async __getDocument(e){let t=S.workspace.textDocuments.find(n=>n.uri.toString()===e.toString());if(!t)throw this.log.error(`File ${e} not found in workspace documents`),new Error("File not found in the workspace.");return t}};var _=x(require("vscode"));var ry=()=>`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor" d="M2.725 21q-.275 0-.5-.137t-.35-.363t-.137-.488t.137-.512l9.25-16q.15-.25.388-.375T12 3t.488.125t.387.375l9.25 16q.15.25.138.513t-.138.487t-.35.363t-.5.137zm1.725-2h15.1L12 6zM12 18q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18m0-3q.425 0 .713-.288T13 14v-3q0-.425-.288-.712T12 10t-.712.288T11 11v3q0 .425.288.713T12 15m0-2.5"/>
    </svg>`,ny=()=>`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"/>
    </svg>`,sy=()=>`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor" d="M8 19V5l11 7z"/>
    </svg>
`,oy=()=>`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor" d="M2 5v14c0 .86 1.012 1.318 1.659.753l8-7a1 1 0 0 0 0-1.506l-8-7C3.012 3.682 2 4.141 2 5m11 0v14c0 .86 1.012 1.318 1.659.753l8-7a1 1 0 0 0 0-1.506l-8-7C14.012 3.682 13 4.141 13 5"/>
    </svg>
`,iy=()=>`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor" d="m3.4 20.4l17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a.993.993 0 0 0-1.39.91L2 9.12c0 .5.37.93.87.99L17 12L2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91"/>
    </svg>`,ay=()=>`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 20q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V4h2v7h-7V9h4.2q-.8-1.4-2.187-2.2T12 6Q9.5 6 7.75 7.75T6 12t1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325T12 20"/>
    </svg>`;var lm=()=>`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"/>
    </svg>
`,ly=()=>`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor" d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"/>
    </svg>
`,Wo=r=>`
    <div class="warning">
        <div>${ry()}</div>
        <span>${r}</span>
    </div>
`,we={add:ny,run:sy,"run-all":oy,submit:iy,"run-again":ay,edit:ly,none:()=>""};var $e=({text:r,id:e,title:t,icon:n,disabled:s=!1})=>`
    <vscode-button id="${e}" class="${n?"icon-button":"button"}" title="${t}" 
                   ${r===""?'style="transform: scale(0.8)"':""} 
                   ${s?"disabled":""}>
        ${n?`<div class="icon">${we[n]()}</div>`:""}
        ${r&&`<div class="text">${r}</div>`}
    </vscode-button>
`;function tn(r){let e="";for(let t of r)switch(t){case" ":e+='<span class="text-muted">\xB7</span>';break;case`
`:e+='<span class="text-muted">\u21B5</span> <br>';break;case"	":e+='<span class="text-muted">  \u2192  </span>';break;case"\r":e+='<span class="text-muted">\u23CE</span>';break;default:e+=t}return e}function Vo(r){let e=_t(r);return{actual:e,displayed:tn(e)}}function Ho(r,e,t){return`
        <div class="metadata select-none">
            <div class="toggle-minimize">
                <div class="title">
                    <div class="icon">${lm()}</div>
                    ${r} ${e}
                </div>
                <span class="running-text"></span>
            </div>
            ${t}
        </div>
    `}function Ot(r,{actual:e,displayed:t},n){let s=n.copyToClipboard?'<div class="text-button copy-to-clipboard" title="Copy to clipboard">Copy</div>':"";return`
        <div class="container ${n.cssClass||""}">
            <div class="title">
                ${r}
                ${s}
            </div>
            <div id="input" class="selectable textarea">
                <pre data-original-text="${e}">${t}</pre>
            </div>
        </div>    
    `}function uy(r,e){let t=Vo(r.input_b64),n=Vo(r.correct_b64);return`
        <div class="testcase normal" id="testcase-${e+1}" data-type="std">
            ${Ho("Testcase",e+1,`<div id="run-testcase-${e+1}" class="small-button" title="Run this testcase only">
                    <div class="icon">${we.run()}</div>
                    <span>Run</span>
                </div>`)}
            <div class="content">
                ${Ot("Input",t,{copyToClipboard:!0})}
                <div class="two-column">
                    ${Ot("Expected Output",n,{copyToClipboard:!0,cssClass:"expected"})}
                    <div class="container received">
                        <div class="title">Received Output:</div>
                        <div class="compare-diff" title="Compare with expected">Compare</div>
                        <div id="received" class="selectable textarea"><pre></pre></div>
                    </div>
                </div>
            </div>
        </div>
    `}function um(r,e,t,n,s=!1){return`
        <div class="container ${n}">
            <div class="title">${e}</div>
            ${s?'<div class="compare-diff" title="Compare with expected">Compare</div>':""}
            <div id="${r}" class="imagearea">
                ${t?`<img src="data:image/png;base64,${t}" />`:""}
            </div>
        </div>
    `}function cy(r,e){let t=Vo(r.input_b64),n=r.correct_b64;return`
        <div class="testcase normal" id="testcase-${e+1}" data-type="graphic">
            ${Ho("Testcase",e+1,`<div id="run-testcase-${e+1}" class="small-button" title="Run this testcase only">
                    <div class="icon">${we.run()}</div>
                    <span>Run</span>
                </div>`)}
            <div class="content">
                ${Ot("Input",t,{copyToClipboard:!0})}
                <div class="two-column">
                    ${um("output","Expected Output",n,"expected")}
                    ${um("received","Received Output","","received",!0)}
                </div>
            </div>
        </div>
    `}function dy(r){let{index:e,input:t,solution:n}=r,s={actual:t,displayed:tn(t)},o={actual:n||"",displayed:tn(n||"")};return`
        <div class="testcase custom" id="custom-testcase-${e}" data-type="custom-std">
            ${Ho("Testcase",e,`<div id="edit-testcase-${e}" class="small-button" title="Edit this testcase">
                    <div class="icon">${we.edit()}</div>
                    <span>Edit</span>
                </div>
                <div id="edit-solution-testcase-${e}" class="small-button" title="Edit solution">
                    <div class="icon">${we.edit()}</div>
                    <span>Edit sol</span>
                </div>
                <div id="run-custom-testcase-${e}" class="small-button" title="Run this testcase only">
                    <div class="icon">${we.run()}</div>
                    <span>Run</span>
                </div>`)}
            <div class="content">
                <div class="two-column">
                    ${Ot("Input",s,{copyToClipboard:!0})}
                    ${n?Ot("Expected Output:",o,{copyToClipboard:!0}):""}

                    <div class="container received">
                        <div class="title">Received Output:</div>
                        <div id="received" class="selectable textarea"><pre></pre></div>
                    </div>
                </div>
            </div>
        </div>
    `}function my(){return`
        <div class="testcases">
            <div class="header select-none">
                <h2 class="flex-grow-1">Testcases</h2>
            </div>
            <div class="panels">
                ${Wo("Local testcase running is not supported for this problem.")}
            </div>
        </div>
      `}function py(){return Wo("Local testcase checking is not fully supported for this problem, the <i>expected output</i> may not be the only valid solution.")}function Jo(r){return`
        <h2>
            ${r}
            <span class="text-button collapse-testcases select-none">
                Collapse All
            </span>
        </h2>
    `}function gy(r,e){switch(e?.handler||""){case"std":return`
                <vscode-divider></vscode-divider>
                <div class="header">
                    ${Jo("Testcases")}
                    <div class="buttons">
                        ${$e({id:"run-all-testcases",text:"Run All",title:"Run all testscases",icon:"run-all"})}
                    </div>
                </div>
                <div class="panels">
                    ${Rt(e?.checker).implemented?"":py()}
                    ${r.map(uy).join("")||"No testcases found."}
                </div>
            `;case"graphic":return`
                <vscode-divider></vscode-divider>
                <div class="header">
                    ${Jo("Testcases")}
                    <div class="buttons">
                        ${$e({id:"run-all-testcases",text:"Run All",title:"Run all testcases",icon:"run-all"})}
                    </div>
                </div>
                <div class="panels">
                    ${r.map(cy).join("")||"No testcases found."}
                </div>
            `;default:return my()}}function fy(r){return r?`
        <vscode-divider></vscode-divider>
        <div class="header">
            ${Jo("Custom Testcases")}
        </div>
        <div class="panels">
            ${r.map(dy).join("")}
        </div>
        <div class="flex flex-row justify-end mt-4">
            <div class="buttons">
                ${$e({id:"add-new-testcase",text:"Add new testcase",title:"Add new testcase",icon:"add"})}
            </div>
        </div>

    `:""}function hy(){return`
        <div class="flex flex-row justify-end mt-4">
            <div class="buttons">
                ${$e({id:"submit-to-jutge",text:"Submit to Jutge",title:"Submit file to Jutge.org",icon:"submit",disabled:!1})}
            </div>
        </div>
    `}function by(r){return $e({text:"Open Existing File",id:"open-existing-file",title:"Open an existing file",disabled:!0})}function yy(r){let{cspSource:e,nonce:t,styleUri:n}=r;return`
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="Content-Security-Policy" 
                content="
                    default-src 'none';
                    style-src ${e} 'unsafe-inline' data:;
                    script-src 'nonce-${t}' ${e} https://cdn.jsdelivr.net/npm/mathjax@3/;
                    img-src ${e} https: data:;
                    font-src ${e} https://cdn.jsdelivr.net/npm/mathjax@3/;
                ">
            <link rel="stylesheet" href="${n}" />
            <style>body { font-size: 0.9rem; }</style>
        </head>`}function cm(r){let{handler:e,caption:t,problemUrl:n,problemNm:s,order:o,problemId:i,problemTitle:a,fileExists:l,testcases:u,customTestcases:d,statementHtml:c}=r;return`
        <!DOCTYPE html>
        <html lang="en">
            ${yy(r)}
            <body>
                <div id="data" 
                    data-problem-nm="${s}" 
                    data-title="${a}" 
                    data-order="${o}"
                    data-file-exists="${l?"true":"false"}"
                />
                <section id="header" class="component-container">
                    <h2 id="problem-nm" class="font-normal text-md flex-grow-1">
                        <a href="${n}">${t?`${t}:`:""}${i}</a>
                        &ndash; ${e?.handler||"?"} 
                        &ndash; ${e?.source_modifier||"?"} 
                        &ndash; ${e?.compilers||"?"}
                    </h2>
                    ${by(r)}
                    ${$e({text:"New File",id:"new-file",title:"Create new code file",icon:"add"})}
                </section>

                <section id="statement" class="component-container">
                    ${c}
                </section>

                <section id="normal-testcases" class="testcases component-container">
                    ${gy(u,e)}
                </section>

                ${hy()}

                <section id="custom-testcases" class="testcases component-container">
                    ${fy(d)}
                </section>


                <script type="module" nonce="${r.nonce}" src="${r.scriptUri}"><\/script>
            </body>
        </html>
    `}var ue=class extends A{static viewType="problemView";panel;problem;order;fileExists;langId;problemHandler=null;customTestcases=null;constructor(e,{problemNm:t,title:n,order:s,fileExists:o},i){super(),this.problem={problem_id:i?t+"_"+i:Mo(t),problem_nm:t,title:n||"",language_id:null,handler:null,statementHtml:null,testcases:null},i&&(this.langId=i),this.order=s,this.fileExists=o||!1,this.panel=e;let a=B();a.subscriptions.push(e.onDidDispose(()=>this.dispose(),null,a.subscriptions),e.webview.onDidReceiveMessage(this._handleMessage,this,a.subscriptions)),this.log.info(`New panel for problem ${t} (${a.extensionUri})`),this._loadProblem()}dispose(){D.remove(this.problem.problem_nm),this.panel.dispose()}async notifyProblemFilesChanges(){this.fileExists=await At(this.problem),this.customTestcases=await z.loadCustomTestcases(this.problem),await this.panel.webview.postMessage({command:"update-custom-testcases",data:{fileExists:this.fileExists,customTestcases:this.customTestcases}}),this.log.info(`Post message: NOTIFY_PROBLEM_FILES_CHANGES (${this.customTestcases.length} custom testcases, fileExists = ${this.fileExists})`)}get handler(){if(this.problemHandler===null)throw new Error("Handler is null!");return this.problemHandler}async addNewTestcase(){if(!await W())return;let t=await z.createNewTestcaseFile(this.problem);if(!t)return;let n=await _.workspace.openTextDocument(t);await le(n),this.panel.reveal(_.ViewColumn.Beside,!0),await this.notifyProblemFilesChanges()}async editTestcaseByIndex(e){let t=await W();if(!t)return;let n=z.makeTestcaseFilename(this.problem,e),s=_.Uri.joinPath(t.uri,n);if(!await te(s))return;let o=await _.workspace.openTextDocument(s);await le(o),this.panel.reveal(_.ViewColumn.Beside,!0)}async editTestcaseSolutionByIndex(e){let t=await W();if(!t)return;let n=z.makeTestcaseFilename(this.problem,e,!0),s=_.Uri.joinPath(t.uri,n);await te(s)||await z.createNewTestcaseSolutionFile(this.problem,e,"To be added");let o=await _.workspace.openTextDocument(s);await le(o),this.panel.reveal(_.ViewColumn.Beside,!0),await this.notifyProblemFilesChanges()}async _handleMessage(e){console.debug(`[ProblemViewPanel] Received message from webview: ${e.command}`);let{command:t,data:n}=e;switch(t){case"open-existing-file":return this.handler.openExistingFile(this.panel);case"new-file":return await this.handler.createNewFile(this.panel),this.notifyProblemFilesChanges();case"add-new-testcase":return this.addNewTestcase();case"run-all-testcases":return this.handler.runTestcaseAll();case"submit-to-jutge":return this.handler.submitToJudge();case"run-testcase":return this.handler.runTestcaseByIndex(n.testcaseId);case"edit-testcase":return this.editTestcaseByIndex(n.testcaseId);case"edit-testcase-solution":return this.editTestcaseSolutionByIndex(n.testcaseId);case"run-custom-testcase":return this.handler.runCustomTestcaseByIndex(n.testcaseId);case"show-diff":return this._showDiff(n);default:console.warn(`[ProblemViewPanel] Don't know how to handle message: ${e.command}`)}}async _loadProblem(){this.fileExists=await At(this.problem);let e=async()=>{let t=f.isExamMode()?`https://exam.jutge.org/problems/${this.problem.problem_id}`:`https://jutge.org/problems/${this.problem.problem_id}`;this.panel.webview.html=cm({problemUrl:t,problemId:this.problem.problem_id,problemNm:this.problem.problem_nm,order:this.order,problemTitle:this.problem.title,fileExists:this.fileExists,statementHtml:this.problem.statementHtml||"",testcases:this.problem.testcases||[],customTestcases:this.customTestcases||[],handler:this.problem.handler||null,nonce:Zd(),styleUri:this._getUri("dist","webview","main.css"),scriptUri:this._getUri("dist","webview","main.js"),cspSource:this.panel.webview.cspSource})};_.window.withProgress({location:_.ProgressLocation.Notification,title:`Loading ${this.problem.problem_nm}`,cancellable:!1},async t=>{let n=this.problem.problem_nm;try{t.report({increment:0,message:"Loading..."});let s=await f.getAbstractProblem(n),{problem_id:o,title:i}=this.__chooseConcreteProblem(n,s);this.problem.title=i,this.problem.problem_id=o,this.panel.title=`${this.problem.problem_nm} - ${i}`;let a=async()=>{let p=await f.getProblemSuppl(o);this.problem.handler=p.handler,t.report({increment:20,message:"Loaded handler"})},l=async()=>{this.problem.testcases=await f.getSampleTestcases(o),t.report({increment:20,message:"Loaded testcases"})},u=async()=>{this.problem.statementHtml=await f.getHtmlStatement(o),t.report({increment:20,message:"Loaded HTML statement"})},d=async()=>{this.customTestcases=await z.loadCustomTestcases(this.problem),t.report({increment:10,message:"Loaded Custom testcases"})};await Promise.allSettled([a(),l(),u(),d()]);let c=s.compilers?.split(",")||null;this.problemHandler=new en(this,this.problem,c,this.order)}catch(s){console.error(s)}await e()})}__chooseConcreteProblem(e,t){let n=ye.getPreferredLangId(),s=t.problems,o,i=`${e}_${n}`;if(this.langId&&s[`${e}_${this.langId}`])o=s[`${e}_${this.langId}`];else if(s[i])o=s[i];else{console.warn("[ProblemViewPanel] Preferred language not available. Trying with fallback languages.");for(let a of Xd){let l=`${e}_${a}`;if(s[l]){o=s[l];break}}}if(!o)throw new Error("No problem found in any language.");return o}_getUri(...e){let t=B(),n=_.Uri.joinPath(t.extensionUri,...e);return this.panel.webview.asWebviewUri(n)}async _showDiff(e){let{testcaseId:t,expected:n,received:s}=e,o=`Testcase ${t}: Expected vs. Received Output`,i=_.Uri.parse(`jutge-diff://${t}/expected.txt`),a=_.Uri.parse(`jutge-diff://${t}/received.txt`),l=new class{onDidChangeEmitter=new _.EventEmitter;onDidChange=this.onDidChangeEmitter.event;_content=new Map([[i.toString(),n],[a.toString(),s]]);provideTextDocumentContent(c){return this._content.get(c.toString())||""}},u=_.workspace.registerTextDocumentContentProvider("jutge-diff",l);await _.commands.executeCommand("vscode.diff",i,a,o,{viewColumn:_.ViewColumn.Beside,preview:!0});let d=_.window.onDidChangeVisibleTextEditors(c=>{c.some(b=>b.document.uri.scheme==="jutge-diff"&&b.document.uri.path.includes(`/${t}/`))||(u.dispose(),d.dispose())})}};var rn=class extends A{context_;constructor(e){super(),this.context_=e}async deserializeWebviewPanel(e,t){try{if(this.log.debug(`Deserializing webview panel with state: ${JSON.stringify(t)}`),!t?.problemNm){this.log.warn("[WebviewPanel] No problem number found in state"),e.dispose();return}let n=new ue(e,t);D.register(t.problemNm,n)}catch(n){this.log.error("[WebviewPanel] Error deserializing webview panel: ",n),e.dispose()}}};var nn=x(require("vscode"));var dm="jutge-sign-in";function vy({scriptUri:r,cspSource:e}){return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta
        http-equiv="Content-Security-Policy"
        content="default-src 'none'; style-src 'unsafe-inline'; script-src ${e} 'unsafe-inline';"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sign in</title>
    <style>
        :root {
            font-size: 13px;
        }
        body {
            margin: 0;
            padding: 12px 14px 16px;
            color: var(--vscode-foreground);
            font-family: var(--vscode-font-family);
            line-height: 1.45;
        }
        .field {
            margin-bottom: 12px;
        }
        label.field-label {
            display: block;
            margin-bottom: 4px;
            opacity: 0.9;
        }
        input[type="text"],
        input[type="password"] {
            box-sizing: border-box;
            width: 100%;
            padding: 4px 8px;
            color: var(--vscode-input-foreground);
            background: var(--vscode-input-background);
            border: 1px solid var(--vscode-input-border, transparent);
            border-radius: 2px;
            font-family: inherit;
            font-size: inherit;
        }
        input:focus {
            outline: 1px solid var(--vscode-focusBorder);
            outline-offset: -1px;
        }
        vscode-single-select {
            display: block;
            width: 100%;
        }
        .tabs {
            display: flex;
            margin: 0 0 10px;
            border-bottom: 1px solid var(--vscode-tab-border, var(--vscode-widget-border, rgba(127, 127, 127, 0.3)));
        }
        .tab {
            flex: 1;
            padding: 6px 8px;
            background: transparent;
            color: var(--vscode-tab-inactiveForeground, var(--vscode-descriptionForeground, #888888));
            border: none;
            border-bottom: 2px solid transparent;
            font-family: inherit;
            font-size: inherit;
            cursor: pointer;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .tab--primary {
            flex: 3;
            font-weight: 600;
        }
        .tab:hover {
            color: var(--vscode-tab-activeForeground, var(--vscode-foreground));
        }
        .tab:focus {
            outline: 1px solid var(--vscode-focusBorder);
            outline-offset: -2px;
        }
        .tab.is-active {
            color: var(--vscode-tab-activeForeground, var(--vscode-foreground));
            border-bottom-color: var(--vscode-focusBorder);
        }
        .tab .tab-icon {
            display: none;
            line-height: 1;
            vertical-align: middle;
        }
        .tab .tab-icon svg {
            width: 16px;
            height: 16px;
            vertical-align: middle;
        }
        @media (max-width: 320px) {
            .tab:not(.tab--primary) .tab-text {
                display: none;
            }
            .tab:not(.tab--primary) .tab-icon {
                display: inline;
            }
        }
        .host-row {
            margin: 0 0 14px;
            text-align: center;
            font-size: 12px;
        }
        .host-row .host-url {
            font-family: var(--vscode-editor-font-family, monospace);
            font-size: 120%;
            word-break: break-all;
            color: var(--vscode-textLink-foreground, #3794ff);
            text-decoration: none;
            cursor: pointer;
        }
        .host-row .host-url:hover {
            color: var(--vscode-textLink-activeForeground, var(--vscode-textLink-foreground, #3794ff));
            text-decoration: underline;
        }
        .host-row .host-url:focus {
            outline: 1px solid var(--vscode-focusBorder);
            outline-offset: 2px;
        }
        .pre-exam-banner {
            margin: 0 0 14px;
            padding: 8px 10px;
            border-radius: 4px;
            background: color-mix(in srgb, var(--vscode-textLink-foreground, #3794ff) 8%, transparent);
            font-size: 12px;
            line-height: 1.5;
        }
        .pre-exam-banner .pre-exam-banner-label {
            color: var(--vscode-descriptionForeground);
            margin-right: 4px;
        }
        .pre-exam-banner .pre-exam-banner-value {
            font-weight: 600;
        }
        .conditional {
            display: none;
        }
        body[data-state="not-signed-in"] .state-not-signed-in {
            display: block;
        }
        body[data-state="not-signed-in"] .state-pre-exam {
            display: none;
        }
        body[data-state="pre-exam"] .state-pre-exam {
            display: block;
        }
        body[data-state="pre-exam"] .state-not-signed-in {
            display: none;
        }
        .state-not-signed-in,
        .state-pre-exam {
            display: none;
        }
        form {
            margin: 0;
        }
        .action-button-row {
            width: 100%;
            margin-top: 12px;
            margin-bottom: 8px;
        }
        button.action-btn {
            display: block;
            width: 100%;
            box-sizing: border-box;
            padding: 6px 14px;
            color: var(--vscode-button-foreground);
            background: var(--vscode-button-background);
            border: none;
            border-radius: 4px;
            font-family: inherit;
            font-size: inherit;
            cursor: pointer;
        }
        button.action-btn:hover:not(:disabled) {
            background: var(--vscode-button-hoverBackground);
        }
        button.action-btn:disabled {
            opacity: 0.55;
            cursor: not-allowed;
        }
        button.action-btn:disabled:hover {
            background: var(--vscode-button-background);
        }
        .link-row {
            margin-top: 10px;
            text-align: center;
        }
        .link-row a {
            color: var(--vscode-textLink-foreground, #3794ff);
            text-decoration: none;
            font-size: 12px;
            cursor: pointer;
        }
        .link-row a:hover {
            text-decoration: underline;
        }
        .banner {
            display: none;
            opacity: 0;
            box-sizing: border-box;
            width: 100%;
            margin-top: 10px;
            padding: 8px 10px;
            font-size: 12px;
            line-height: 1.45;
            text-align: center;
            border-radius: 4px;
            border: 1px solid transparent;
            transition:
                opacity 400ms ease,
                display 400ms allow-discrete;
        }
        .banner.is-visible {
            display: block;
            opacity: 1;
        }
        @starting-style {
            .banner.is-visible {
                opacity: 0;
            }
        }
        .banner.banner--error {
            color: #ffffff;
            background: #c8302c;
            border: none;
        }
        .banner.banner--success {
            color: var(--vscode-testing-iconPassed, var(--vscode-gitDecoration-addedResourceForeground));
            background: var(
                --vscode-inputValidation-infoBackground,
                color-mix(in srgb, var(--vscode-testing-iconPassed, #73c991) 14%, transparent)
            );
            border-color: var(
                --vscode-inputValidation-infoBorder,
                var(--vscode-testing-iconPassed, #73c991)
            );
        }
    </style>
</head>
<body data-state="not-signed-in">
    <!-- ===== NOT_SIGNED_IN ===== -->
    <div class="state-not-signed-in">
        <div class="tabs" role="tablist">
            <button type="button" class="tab tab--primary is-active" role="tab" data-mode="jutge" aria-selected="true">Jutge.org</button>
            <button type="button" class="tab" role="tab" data-mode="exam" aria-selected="false" aria-label="Exam">
                <span class="tab-text">Exam</span>
                <span class="tab-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg></span>
            </button>
            <button type="button" class="tab" role="tab" data-mode="contest" aria-selected="false" aria-label="Contest">
                <span class="tab-text">Contest</span>
                <span class="tab-icon" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"/><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"/><path d="M18 9h1.5a1 1 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"/><path d="M6 9H4.5a1 1 0 0 1 0-5H6"/></svg></span>
            </button>
        </div>
        <div class="host-row">
            <a class="host-url" id="host-url" href="#" target="_blank" rel="noopener noreferrer"></a>
        </div>
        <form id="base-form">
            <div class="field">
                <label class="field-label" for="email">Email</label>
                <input type="text" id="email" name="email" autocomplete="username" />
            </div>
            <div class="field">
                <label class="field-label" for="password">Password</label>
                <input type="password" id="password" name="password" autocomplete="current-password" />
            </div>
            <div class="action-button-row">
                <button type="submit" class="action-btn" id="base-btn">Sign in</button>
            </div>
            <div id="base-banner" class="banner" role="status" aria-live="polite"></div>
        </form>
    </div>

    <!-- ===== PRE_EXAM ===== -->
    <div class="state-pre-exam">
        <div class="pre-exam-banner">
            <div>
                <span class="pre-exam-banner-label">Signed in as</span>
                <span class="pre-exam-banner-value" id="pre-exam-email">\u2014</span>
            </div>
            <div>
                <span class="pre-exam-banner-label">Mode</span>
                <span class="pre-exam-banner-value" id="pre-exam-mode-label">\u2014</span>
            </div>
        </div>
        <form id="enter-form">
            <div class="field">
                <label class="field-label" for="exam-key">
                    <span id="exam-key-label">Exam name</span>
                </label>
                <vscode-single-select id="exam-key" name="exam-key">
                    <vscode-option value="">\u2014</vscode-option>
                </vscode-single-select>
            </div>
            <div id="custom-key-field" class="field" style="display: none;">
                <input type="text" id="custom-key" name="custom-key" autocomplete="off" placeholder="Custom name" />
            </div>
            <div class="field">
                <label class="field-label" for="exam-password">
                    <span id="exam-password-label">Exam password</span>
                </label>
                <input type="password" id="exam-password" name="exam-password" autocomplete="off" />
            </div>
            <div class="action-button-row">
                <button type="submit" class="action-btn" id="enter-btn">Enter exam</button>
            </div>
            <div id="enter-banner" class="banner" role="status" aria-live="polite"></div>
        </form>
        <div class="link-row">
            <a href="#" id="sign-out-pre-exam">Sign out</a>
        </div>
    </div>

    <script src="${r}"><\/script>
    <script>
        (function () {
            const vscode = acquireVsCodeApi();

            // ----- DOM refs -----
            const bodyEl = document.body;
            const hostUrlEl = document.getElementById("host-url");
            const baseFormEl = document.getElementById("base-form");
            const baseBtnEl = document.getElementById("base-btn");
            const baseBannerEl = document.getElementById("base-banner");
            const emailEl = document.getElementById("email");
            const passwordEl = document.getElementById("password");

            const enterFormEl = document.getElementById("enter-form");
            const enterBtnEl = document.getElementById("enter-btn");
            const enterBannerEl = document.getElementById("enter-banner");
            const preExamEmailEl = document.getElementById("pre-exam-email");
            const preExamModeLabelEl = document.getElementById("pre-exam-mode-label");
            const examKeyEl = document.getElementById("exam-key");
            const customKeyFieldEl = document.getElementById("custom-key-field");
            const customKeyEl = document.getElementById("custom-key");
            const examKeyLabelEl = document.getElementById("exam-key-label");
            const examPasswordLabelEl = document.getElementById("exam-password-label");
            const enterPasswordEl = document.getElementById("exam-password");
            const signOutPreExamEl = document.getElementById("sign-out-pre-exam");

            // ----- State -----
            let isBasePending = false;
            let isEnterPending = false;
            let preExamMode = "exam";

            const HOST_URL_BY_MODE = {
                jutge: "https://jutge.org",
                exam: "https://exam.jutge.org",
                contest: "https://contest.jutge.org"
            };
            const CUSTOM_KEY_VALUE = "\u2014Custom name\u2014";

            // ----- Banner helpers -----
            function setBanner(el, text, kind) {
                const str = text == null ? "" : String(text);
                el.textContent = str;
                el.classList.remove("banner--error", "banner--success");
                if (!str.trim()) {
                    el.classList.remove("is-visible");
                    return;
                }
                el.classList.add(kind === "success" ? "banner--success" : "banner--error");
                el.classList.add("is-visible");
            }
            function clearBanner(el) {
                el.textContent = "";
                el.classList.remove("is-visible", "banner--error", "banner--success");
            }

            // ----- Tabs -----
            function activeMode() {
                const t = document.querySelector(".tab.is-active");
                return t ? t.getAttribute("data-mode") : "jutge";
            }
            function setActiveTab(targetMode) {
                document.querySelectorAll(".tab").forEach(function (t) {
                    const active = t.getAttribute("data-mode") === targetMode;
                    t.classList.toggle("is-active", active);
                    t.setAttribute("aria-selected", active ? "true" : "false");
                });
                updateHostUrl();
                updateBaseButtonLabel();
            }
            function updateHostUrl() {
                const m = activeMode();
                const url = HOST_URL_BY_MODE[m] || HOST_URL_BY_MODE.jutge;
                hostUrlEl.textContent = url;
                hostUrlEl.setAttribute("href", url);
            }
            function updateBaseButtonLabel() {
                if (isBasePending) {
                    baseBtnEl.textContent = "Signing in...";
                    return;
                }
                const m = activeMode();
                baseBtnEl.textContent = m === "jutge" ? "Sign in" : "Continue";
            }

            // ----- Step 1: base sign-in -----
            function setBasePending(pending) {
                isBasePending = pending;
                baseBtnEl.disabled = pending;
                updateBaseButtonLabel();
            }

            baseFormEl.addEventListener("submit", function (ev) {
                ev.preventDefault();
                clearBanner(baseBannerEl);
                setBasePending(true);
                vscode.postMessage({
                    type: "signInBaseRequested",
                    payload: {
                        email: emailEl.value,
                        password: passwordEl.value,
                        mode: activeMode()
                    }
                });
            });
            document.querySelectorAll(".tab").forEach(function (t) {
                t.addEventListener("click", function () {
                    const targetMode = t.getAttribute("data-mode");
                    if (!targetMode || targetMode === activeMode()) {
                        return;
                    }
                    clearBanner(baseBannerEl);
                    setActiveTab(targetMode);
                });
            });
            baseFormEl.addEventListener("input", function () {
                clearBanner(baseBannerEl);
            });

            // ----- Step 2: enter exam -----
            function setEnterPending(pending) {
                isEnterPending = pending;
                enterBtnEl.disabled = pending;
                enterBtnEl.textContent = pending
                    ? (preExamMode === "contest" ? "Entering contest..." : "Entering exam...")
                    : (preExamMode === "contest" ? "Enter contest" : "Enter exam");
            }
            function setExamItems(items) {
                examKeyEl.innerHTML = "";
                const placeholder = document.createElement("vscode-option");
                placeholder.value = "";
                placeholder.textContent = preExamMode === "contest"
                    ? "Select a contest..."
                    : "Select an exam...";
                examKeyEl.appendChild(placeholder);
                if (Array.isArray(items)) {
                    items.forEach(function (item) {
                        const o = document.createElement("vscode-option");
                        o.value = item;
                        o.textContent = item;
                        examKeyEl.appendChild(o);
                    });
                }
                const custom = document.createElement("vscode-option");
                custom.value = CUSTOM_KEY_VALUE;
                custom.textContent = CUSTOM_KEY_VALUE;
                examKeyEl.appendChild(custom);
                examKeyEl.value = "";
                updateCustomKeyFieldVisibility();
            }
            function updateCustomKeyFieldVisibility() {
                const showCustom = examKeyEl.value === CUSTOM_KEY_VALUE;
                customKeyFieldEl.style.display = showCustom ? "block" : "none";
                if (!showCustom) {
                    customKeyEl.value = "";
                }
            }
            function selectedExamKey() {
                if (examKeyEl.value !== CUSTOM_KEY_VALUE) {
                    return examKeyEl.value;
                }
                return customKeyEl.value;
            }
            examKeyEl.addEventListener("change", updateCustomKeyFieldVisibility);
            enterFormEl.addEventListener("input", function () {
                clearBanner(enterBannerEl);
            });
            enterFormEl.addEventListener("submit", function (ev) {
                ev.preventDefault();
                clearBanner(enterBannerEl);
                setEnterPending(true);
                vscode.postMessage({
                    type: "enterExamRequested",
                    payload: {
                        examKey: selectedExamKey(),
                        examPassword: enterPasswordEl.value
                    }
                });
            });
            signOutPreExamEl.addEventListener("click", function (ev) {
                ev.preventDefault();
                vscode.postMessage({ type: "signOutPreExamRequested" });
            });

            // ----- Apply state pushed by the extension -----
            function applySignInState(payload) {
                const p = payload || {};
                if (p.state === "pre-exam") {
                    preExamMode = p.mode === "contest" ? "contest" : "exam";
                    bodyEl.setAttribute("data-state", "pre-exam");
                    preExamEmailEl.textContent = p.email || "";
                    preExamModeLabelEl.textContent =
                        preExamMode === "contest" ? "Contest" : "Exam";
                    examKeyLabelEl.textContent =
                        preExamMode === "contest" ? "Contest name" : "Exam name";
                    examPasswordLabelEl.textContent =
                        preExamMode === "contest" ? "Contest password" : "Exam password";
                    setExamItems(p.items || []);
                    setEnterPending(false);
                    clearBanner(enterBannerEl);
                    if (p.itemsError) {
                        setBanner(enterBannerEl, p.itemsError, "error");
                    }
                    return;
                }
                // not-signed-in
                bodyEl.setAttribute("data-state", "not-signed-in");
                if (typeof p.email === "string") {
                    emailEl.value = p.email;
                }
                if (typeof p.password === "string") {
                    passwordEl.value = p.password;
                }
                setBasePending(false);
                clearBanner(baseBannerEl);
                setActiveTab(activeMode());
            }

            window.addEventListener("message", function (event) {
                const message = event.data;
                if (!message) return;
                if (message.type === "signInState") {
                    applySignInState(message.payload);
                    return;
                }
                if (message.type === "signInBaseResult") {
                    const p = message.payload || {};
                    setBasePending(false);
                    if (p.ok) {
                        // Extension will follow up with a "signInState" message for PRE_EXAM.
                        return;
                    }
                    setBanner(baseBannerEl, p.error || "Could not sign in.", "error");
                    return;
                }
                if (message.type === "enterExamResult") {
                    const p = message.payload || {};
                    setEnterPending(false);
                    if (p.ok) {
                        // The webview will disappear via the context-key transition.
                        return;
                    }
                    setBanner(enterBannerEl, p.error || "Could not enter.", "error");
                    return;
                }
                if (message.type === "readyExamsUpdate") {
                    const p = message.payload || {};
                    setExamItems(p.items || []);
                    if (p.error) {
                        setBanner(enterBannerEl, p.error, "error");
                    }
                    return;
                }
            });

            updateHostUrl();
            updateBaseButtonLabel();
            vscode.postMessage({ type: "signInWebviewReady" });
        })();
    <\/script>
</body>
</html>`}var sn=class{constructor(e){this.extensionUri=e}extensionUri;webviewView_;resolveWebviewView(e){this.webviewView_=e,e.webview.options={enableScripts:!0,localResourceRoots:[nn.Uri.joinPath(this.extensionUri,"src","webview"),nn.Uri.joinPath(this.extensionUri,"dist")]};let t=e.webview.asWebviewUri(nn.Uri.joinPath(this.extensionUri,"dist","webview","signin-elements.js"));e.webview.html=vy({scriptUri:t.toString(),cspSource:e.webview.cspSource}),e.onDidDispose(()=>{this.webviewView_=void 0}),e.webview.onDidReceiveMessage(async n=>{if(!n||typeof n!="object")return;let s=n;switch(s.type){case"signInWebviewReady":await this.pushInitialState_();return;case"signInBaseRequested":await this.handleSignInBase_(s.payload);return;case"enterExamRequested":await this.handleEnterExam_(s.payload);return;case"signOutPreExamRequested":await f.signOutPreExam(),await this.pushInitialState_();return;default:return}})}post_(e){this.webviewView_?.webview.postMessage(e)}async pushInitialState_(){if(f.isSignedInPreExam()){await this.pushPreExamState_();return}let[e,t]=await Promise.all([f.getStoredSignInEmail(),f.getStoredSignInPassword()]);this.post_({type:"signInState",payload:{state:"not-signed-in",email:e??"",password:t??""}})}async pushPreExamState_(){let t=f.getApiMode()==="contest"?"contest":"exam",n=await f.getStoredSignInEmail()??"",s=await f.getReadyExamsForMode(t);this.post_({type:"signInState",payload:{state:"pre-exam",mode:t,email:n,items:s??[],itemsError:s===void 0?t==="contest"?"Could not load ready contests.":"Could not load ready exams.":void 0}})}async handleSignInBase_(e){let t=e?.mode??"jutge",n=e?.email||"",s=e?.password||"";if(t==="exam"||t==="contest"){let i=await f.signInPreExam({email:n,password:s,mode:t,useDevApi:!1});this.post_({type:"signInBaseResult",payload:{ok:i.ok,mode:t,error:i.ok?void 0:i.error}}),i.ok&&await this.pushPreExamState_();return}let o=await f.signInJutge({email:n,password:s});this.post_({type:"signInBaseResult",payload:{ok:o.ok,mode:"jutge",error:o.ok?void 0:o.error}})}async handleEnterExam_(e){let n=f.getApiMode()==="contest"?"contest":"exam",s=await f.enterExam({mode:n,examKey:e?.examKey||"",examPassword:e?.examPassword||""});this.post_({type:"enterExamResult",payload:{ok:s.ok,error:s.ok?void 0:s.error}})}};var yt=({mode:r,useDevApi:e})=>{let s=e?{normal:"dev.api.jutge.org/api",exam:"dev.exam.api.jutge.org/api",contest:"dev.contest.api.jutge.org/api"}[r]:{normal:"api.jutge.org/api",exam:"exam.api.jutge.org/api",contest:"contest.api.jutge.org/api"}[r];g.JUTGE_API_URL=`https://${s}`,console.log(`[Extension]: JUTGE_API_URL = '${g.JUTGE_API_URL}'`)};function jo(r){return{enableScripts:!0,localResourceRoots:[h.Uri.joinPath(r,"src","webview"),h.Uri.joinPath(r,"dist")]}}var Go,wy=r=>{Go=r},B=()=>{if(!Go)throw new Error("Context is undefined!!!");return Go};async function mm(r){let e=h.workspace.workspaceFolders?.[0];e&&await r(e)}function Xr(){return h.workspace.workspaceFolders?.[0]}async function W(){let r=h.workspace.workspaceFolders?.[0];if(r)return r;let e=await h.window.showInformationMessage("You need to have an open folder to create source files.",{title:"Open Folder"});e&&e.title==="Open Folder"&&(console.log("[Extension]: User chose to open folder"),h.commands.executeCommand("vscode.openFolder"))}var Nr=(r,e)=>h.Uri.joinPath(B().extensionUri,"resources",r,e),To=r=>B().globalState.get(r),zo=(r,e)=>B().globalState.update(r,e),xy=(r,e)=>{let t=h.commands.registerCommand(r,e);B().subscriptions.push(t)},Py=(r,e)=>{let t=h.window.registerWebviewPanelSerializer(r,e);B().subscriptions.push(t)},Sy=()=>{let r=B().extension?.packageJSON.version||"unknown";console.info("=== jutge-vscode initialization ==="),console.info(`Extension Version: ${r}`),console.info(`VS Code Version:   ${h.version}`);for(let e of q.describe())console.info(e);console.info(`Date:              ${new Date().toISOString()}`),console.info("MODE:              production"),console.info(`JUTGE_API_URL:     ${g.JUTGE_API_URL}`),console.info("===================================")},$t=null,Ko=null,Ey=()=>{let r=new qr;return $t=h.window.createTreeView("jutge-courses",{showCollapseAll:!0,treeDataProvider:r}),$t.onDidExpandElement(({element:e})=>zo(`itemState:${e.getId()}`,"expanded")),$t.onDidCollapseElement(({element:e})=>zo(`itemState:${e.getId()}`,"collapsed")),Oe.onDidReceiveVeredict(e=>{r.refreshProblem(e)}),{courseTreeProvider:r,coursesView:$t}},_y=()=>{let r=new Wr;return Ko=h.window.createTreeView(Cd,{showCollapseAll:!1,treeDataProvider:r}),{jutgeStatsTreeProvider:r,jutgeStatsView:Ko}},Ty=()=>{let r=new Vr,e=h.window.createTreeView(Ad,{showCollapseAll:!0,treeDataProvider:r});return{jutgeApiTreeProvider:r,jutgeApiView:e}},Cy=()=>{let r=new Ut;return{aboutViewProvider:h.window.registerTreeDataProvider(Xo,r)}},Ay=()=>{let r=new Or,e=h.window.createTreeView(xd,{showCollapseAll:!0,treeDataProvider:r});return{examPropertiesTreeProvider:r,examPropertiesView:e}},Iy=()=>{let r=new Rr,e=h.window.createTreeView(wd,{showCollapseAll:!1,treeDataProvider:r});return{examDocumentsTreeProvider:r,examDocumentsView:e}},ky=()=>{let r=new Mr,e=h.window.createTreeView(Pd,{showCollapseAll:!1,treeDataProvider:r});return{rankingTreeProvider:r,rankingView:e}},Dy=r=>{for(let[e,t]of r)xy(e,t)},Ry=async(r,e)=>{if(console.debug(`[commandShowProblem] Problem ${r} (order = ${e})`),!f.isSignedIn()){h.window.showErrorMessage("You need to sign in to Jutge.org to use this feature.");return}if(r===void 0){if(f.isExamMode()){h.window.showErrorMessage("In exam mode you can only see problems from the exam");return}if(r=await h.window.showInputBox({title:"Jutge Problem ID",placeHolder:"P12345",prompt:"Please write the problem ID.",value:""}),!r)return}let t="";if(r.includes("_")){let n=r.replaceAll(" ","").split("_");r=n[0],t=n[1]}if(!await f.problemExists(r)){h.window.showErrorMessage(`Problem ${r} does not exist`);return}await mm(async n=>{let s=await nm(n,r);if(s){let o=await h.workspace.openTextDocument(s);await le(o)}}),await D.createOrReveal(r,e,t),await D.notifyProblemFilesChanges(r)},Oy=async(r,e)=>{if(!f.isSignedInExam()){h.window.showErrorMessage("You need to be signed in to an exam or contest.");return}if(!r){h.window.showErrorMessage("Missing document name.");return}try{let t=await g.student.exam.getDocumentPdf(r),n=t.name?.trim()||`${r}.pdf`,s=ae(n).toLowerCase()===".pdf"?n:`${n}.pdf`,o=r.replace(/[^a-zA-Z0-9._-]/g,"_"),i=s.replace(/[^a-zA-Z0-9._-]/g,"_"),a=q.documentsDirUri(B());await h.workspace.fs.createDirectory(a);let l=h.Uri.joinPath(a,`${o}-${i}`);if(await h.workspace.fs.writeFile(l,t.data),q.kind==="web"){let u=h.workspace.workspaceFolders?.[0]?.uri,d=await h.window.showSaveDialog({defaultUri:u?h.Uri.joinPath(u,i):l,filters:{PDF:["pdf"]},saveLabel:"Save document"});d&&(await h.workspace.fs.writeFile(d,t.data),await h.commands.executeCommand("revealInExplorer",d),h.window.showInformationMessage(`Saved "${e||r}". Right click it in the Explorer and choose "Download..." to view it.`));return}try{await h.commands.executeCommand("vscode.openWith",l,"pdf.preview")}catch{await h.env.openExternal(l)||await h.commands.executeCommand("vscode.open",l)}}catch(t){let n=t instanceof Error?t.message:String(t);h.window.showErrorMessage(`Could not open document "${e||r}": ${n}`)}};async function $y(r){wy(r);let e=r.extensionMode===h.ExtensionMode.Development;yt({mode:"normal",useDevApi:!1}),h.commands.executeCommand("setContext","jutge-vscode.isSignedIn.Courses",!1),h.commands.executeCommand("setContext","jutge-vscode.isSignedIn.Exam",!1),h.commands.executeCommand("setContext","jutge-vscode.isSignedIn.PreExam",!1),h.commands.executeCommand("setContext","jutge-vscode.isContestMode",!1),Sy(),r.subscriptions.push(h.window.registerWebviewViewProvider(dm,new sn(r.extensionUri)));let t=new Hr;r.subscriptions.push(h.window.registerWebviewViewProvider(Rd,t));let n=new Qr(r.extensionUri);r.subscriptions.push(n),r.subscriptions.push(h.window.registerWebviewViewProvider(Yd,n)),Oe.onDidReceiveVeredict(w=>{n.refreshProblem(w)}),await f.initialize(r),q.init(r);let{courseTreeProvider:s}=Ey(),{examPropertiesTreeProvider:o,examPropertiesView:i}=Ay(),{examDocumentsTreeProvider:a,examDocumentsView:l}=Iy(),{rankingTreeProvider:u,rankingView:d}=ky(),{jutgeStatsTreeProvider:c,jutgeStatsView:p}=_y(),{jutgeApiTreeProvider:b,jutgeApiView:v}=Ty(),{aboutViewProvider:E}=Cy();r.subscriptions.push(p),r.subscriptions.push(v),r.subscriptions.push(i),r.subscriptions.push(l),r.subscriptions.push(d),r.subscriptions.push(u),r.subscriptions.push(E),Py(ue.viewType,new rn(r)),h.workspace.onDidDeleteFiles(w=>{D.updatePanelsOnChangedFiles(w.files)}),h.workspace.onDidCreateFiles(w=>{D.updatePanelsOnChangedFiles(w.files)}),h.workspace.onDidSaveTextDocument(w=>{D.updatePanelsOnChangedFiles([w.uri])}),Dy([["jutge-vscode.signOut",f.signOut.bind(f)],["jutge-vscode.signOutExam",f.signOutExam.bind(f)],["jutge-vscode.refreshCoursesTree",s.refresh],["jutge-vscode.refreshExamsTree",n.refresh],["jutge-vscode.refreshExamPropertiesTree",o.refresh.bind(o)],["jutge-vscode.refreshProfileTree",t.refresh.bind(t)],["jutge-vscode.openDashboardPanel",Ur.openOrReveal],["jutge-vscode.refreshExamDocumentsTree",a.refresh.bind(a)],["jutge-vscode.refreshRankingTree",u.refresh.bind(u)],["jutge-vscode.openRankingPanel",$r.openOrReveal],["jutge-vscode.refreshHomeTree",c.refresh.bind(c)],["jutge-vscode.refreshApiTree",b.refresh.bind(b)],["jutge-vscode.showProblem",Ry],["jutge-vscode.openExamDocument",Oy],["jutge-vscode.invalidateToken",f.invalidateToken.bind(f)]]),console.info("[Extension] jutge-vscode is now active"),await h.commands.executeCommand("setContext","jutge-vscode.isDevMode",["development","semidevelopment"].includes("production")),e&&await h.commands.executeCommand("workbench.view.extension.jutge")}
