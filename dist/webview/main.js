var Se=(function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}})();Se.trustedTypes===void 0&&(Se.trustedTypes={createPolicy:(o,e)=>e});var dr={configurable:!1,enumerable:!1,writable:!1};Se.FAST===void 0&&Reflect.defineProperty(Se,"FAST",Object.assign({value:Object.create(null)},dr));var Xe=Se.FAST;if(Xe.getById===void 0){let o=Object.create(null);Reflect.defineProperty(Xe,"getById",Object.assign({value(e,t){let i=o[e];return i===void 0&&(i=t?o[e]=t():null),i}},dr))}var oe=Object.freeze([]);function Xt(){let o=new WeakMap;return function(e){let t=o.get(e);if(t===void 0){let i=Reflect.getPrototypeOf(e);for(;t===void 0&&i!==null;)t=o.get(i),i=Reflect.getPrototypeOf(i);t=t===void 0?[]:t.slice(0),o.set(e,t)}return t}}var Fo=Se.FAST.getById(1,()=>{let o=[],e=[];function t(){if(e.length)throw e.shift()}function i(s){try{s.call()}catch(a){e.push(a),setTimeout(t,0)}}function r(){let a=0;for(;a<o.length;)if(i(o[a]),a++,a>1024){for(let c=0,d=o.length-a;c<d;c++)o[c]=o[c+a];o.length-=a,a=0}o.length=0}function n(s){o.length<1&&Se.requestAnimationFrame(r),o.push(s)}return Object.freeze({enqueue:n,process:r})}),ur=Se.trustedTypes.createPolicy("fast-html",{createHTML:o=>o}),_o=ur,At=`fast-${Math.random().toString(36).substring(2,8)}`,Bo=`${At}{`,Yt=`}${At}`,v=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(o){if(_o!==ur)throw new Error("The HTML policy can only be set once.");_o=o},createHTML(o){return _o.createHTML(o)},isMarker(o){return o&&o.nodeType===8&&o.data.startsWith(At)},extractDirectiveIndexFromMarker(o){return parseInt(o.data.replace(`${At}:`,""))},createInterpolationPlaceholder(o){return`${Bo}${o}${Yt}`},createCustomAttributePlaceholder(o,e){return`${o}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(o){return`<!--${At}:${o}-->`},queueUpdate:Fo.enqueue,processUpdates:Fo.process,nextUpdate(){return new Promise(Fo.enqueue)},setAttribute(o,e,t){t==null?o.removeAttribute(e):o.setAttribute(e,t)},setBooleanAttribute(o,e,t){t?o.setAttribute(e,""):o.removeAttribute(e)},removeChildNodes(o){for(let e=o.firstChild;e!==null;e=o.firstChild)o.removeChild(e)},createTemplateWalker(o){return document.createTreeWalker(o,133,null,!1)}});var _e=class{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){let t=this.spillover;if(t===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else t.indexOf(e)===-1&&t.push(e)}unsubscribe(e){let t=this.spillover;if(t===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{let i=t.indexOf(e);i!==-1&&t.splice(i,1)}}notify(e){let t=this.spillover,i=this.source;if(t===void 0){let r=this.sub1,n=this.sub2;r!==void 0&&r.handleChange(i,e),n!==void 0&&n.handleChange(i,e)}else for(let r=0,n=t.length;r<n;++r)t[r].handleChange(i,e)}},ct=class{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;let i=this.subscribers[e];i!==void 0&&i.notify(e),(t=this.sourceSubscribers)===null||t===void 0||t.notify(e)}subscribe(e,t){var i;if(t){let r=this.subscribers[t];r===void 0&&(this.subscribers[t]=r=new _e(this.source)),r.subscribe(e)}else this.sourceSubscribers=(i=this.sourceSubscribers)!==null&&i!==void 0?i:new _e(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var i;if(t){let r=this.subscribers[t];r!==void 0&&r.unsubscribe(e)}else(i=this.sourceSubscribers)===null||i===void 0||i.unsubscribe(e)}};var y=Xe.getById(2,()=>{let o=/(:|&&|\|\||if)/,e=new WeakMap,t=v.queueUpdate,i,r=d=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function n(d){let h=d.$fastController||e.get(d);return h===void 0&&(Array.isArray(d)?h=r(d):e.set(d,h=new ct(d))),h}let s=Xt();class a{constructor(h){this.name=h,this.field=`_${h}`,this.callback=`${h}Changed`}getValue(h){return i!==void 0&&i.watch(h,this.name),h[this.field]}setValue(h,p){let g=this.field,$=h[g];if($!==p){h[g]=p;let I=h[this.callback];typeof I=="function"&&I.call(h,$,p),n(h).notify(this.name)}}}class c extends _e{constructor(h,p,g=!1){super(h,p),this.binding=h,this.isVolatileBinding=g,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(h,p){this.needsRefresh&&this.last!==null&&this.disconnect();let g=i;i=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;let $=this.binding(h,p);return i=g,$}disconnect(){if(this.last!==null){let h=this.first;for(;h!==void 0;)h.notifier.unsubscribe(this,h.propertyName),h=h.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(h,p){let g=this.last,$=n(h),I=g===null?this.first:{};if(I.propertySource=h,I.propertyName=p,I.notifier=$,$.subscribe(this,p),g!==null){if(!this.needsRefresh){let z;i=void 0,z=g.propertySource[g.propertyName],i=this,h===z&&(this.needsRefresh=!0)}g.next=I}this.last=I}handleChange(){this.needsQueue&&(this.needsQueue=!1,t(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let h=this.first;return{next:()=>{let p=h;return p===void 0?{value:void 0,done:!0}:(h=h.next,{value:p,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(d){r=d},getNotifier:n,track(d,h){i!==void 0&&i.watch(d,h)},trackVolatile(){i!==void 0&&(i.needsRefresh=!0)},notify(d,h){n(d).notify(h)},defineProperty(d,h){typeof h=="string"&&(h=new a(h)),s(d).push(h),Reflect.defineProperty(d,h.name,{enumerable:!0,get:function(){return h.getValue(this)},set:function(p){h.setValue(this,p)}})},getAccessors:s,binding(d,h,p=this.isVolatileBinding(d)){return new c(d,h,p)},isVolatileBinding(d){return o.test(d.toString())}})});function f(o,e){y.defineProperty(o,e)}function pr(o,e,t){return Object.assign({},t,{get:function(){return y.trackVolatile(),t.get.apply(this)}})}var hr=Xe.getById(3,()=>{let o=null;return{get(){return o},set(e){o=e}}}),Be=class{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return hr.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){hr.set(e)}};y.defineProperty(Be.prototype,"index");y.defineProperty(Be.prototype,"length");var Le=Object.seal(new Be);var Me=class{constructor(){this.targetIndex=0}},dt=class extends Me{constructor(){super(...arguments),this.createPlaceholder=v.createInterpolationPlaceholder}},He=class extends Me{constructor(e,t,i){super(),this.name=e,this.behavior=t,this.options=i}createPlaceholder(e){return v.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}};function ea(o,e){this.source=o,this.context=e,this.bindingObserver===null&&(this.bindingObserver=y.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(o,e))}function ta(o,e){this.source=o,this.context=e,this.target.addEventListener(this.targetName,this)}function oa(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function ia(){this.bindingObserver.disconnect(),this.source=null,this.context=null;let o=this.target.$fastView;o!==void 0&&o.isComposed&&(o.unbind(),o.needsBindOnly=!0)}function ra(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function na(o){v.setAttribute(this.target,this.targetName,o)}function sa(o){v.setBooleanAttribute(this.target,this.targetName,o)}function aa(o){if(o==null&&(o=""),o.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=o.create():this.target.$fastTemplate!==o&&(e.isComposed&&(e.remove(),e.unbind()),e=o.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=o)}else{let e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=o}}function la(o){this.target[this.targetName]=o}function ca(o){let e=this.classVersions||Object.create(null),t=this.target,i=this.version||0;if(o!=null&&o.length){let r=o.split(/\s+/);for(let n=0,s=r.length;n<s;++n){let a=r[n];a!==""&&(e[a]=i,t.classList.add(a))}}if(this.classVersions=e,this.version=i+1,i!==0){i-=1;for(let r in e)e[r]===i&&t.classList.remove(r)}}var Ye=class extends dt{constructor(e){super(),this.binding=e,this.bind=ea,this.unbind=oa,this.updateTarget=na,this.isBindingVolatile=y.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=la,this.cleanedTargetName==="innerHTML"){let t=this.binding;this.binding=(i,r)=>v.createHTML(t(i,r))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=sa;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=ta,this.unbind=ra;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=ca);break}}targetAtContent(){this.updateTarget=aa,this.unbind=ia}createBehavior(e){return new Lo(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}},Lo=class{constructor(e,t,i,r,n,s,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=i,this.bind=r,this.unbind=n,this.updateTarget=s,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){Be.setEvent(e);let t=this.binding(this.source,this.context);Be.setEvent(null),t!==!0&&e.preventDefault()}};var Mo=null,Ho=class o{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Mo=this}static borrow(e){let t=Mo||new o;return t.directives=e,t.reset(),Mo=null,t}};function da(o){if(o.length===1)return o[0];let e,t=o.length,i=o.map(s=>typeof s=="string"?()=>s:(e=s.targetName||e,s.binding)),r=(s,a)=>{let c="";for(let d=0;d<t;++d)c+=i[d](s,a);return c},n=new Ye(r);return n.targetName=e,n}var ua=Yt.length;function mr(o,e){let t=e.split(Bo);if(t.length===1)return null;let i=[];for(let r=0,n=t.length;r<n;++r){let s=t[r],a=s.indexOf(Yt),c;if(a===-1)c=s;else{let d=parseInt(s.substring(0,a));i.push(o.directives[d]),c=s.substring(a+ua)}c!==""&&i.push(c)}return i}function fr(o,e,t=!1){let i=e.attributes;for(let r=0,n=i.length;r<n;++r){let s=i[r],a=s.value,c=mr(o,a),d=null;c===null?t&&(d=new Ye(()=>a),d.targetName=s.name):d=da(c),d!==null&&(e.removeAttributeNode(s),r--,n--,o.addFactory(d))}}function ha(o,e,t){let i=mr(o,e.textContent);if(i!==null){let r=e;for(let n=0,s=i.length;n<s;++n){let a=i[n],c=n===0?e:r.parentNode.insertBefore(document.createTextNode(""),r.nextSibling);typeof a=="string"?c.textContent=a:(c.textContent=" ",o.captureContentBinding(a)),r=c,o.targetIndex++,c!==e&&t.nextNode()}o.targetIndex--}}function br(o,e){let t=o.content;document.adoptNode(t);let i=Ho.borrow(e);fr(i,o,!0);let r=i.behaviorFactories;i.reset();let n=v.createTemplateWalker(t),s;for(;s=n.nextNode();)switch(i.targetIndex++,s.nodeType){case 1:fr(i,s);break;case 3:ha(i,s,n);break;case 8:v.isMarker(s)&&i.addFactory(e[v.extractDirectiveIndexFromMarker(s)])}let a=0;(v.isMarker(t.firstChild)||t.childNodes.length===1&&e.length)&&(t.insertBefore(document.createComment(""),t.firstChild),a=-1);let c=i.behaviorFactories;return i.release(),{fragment:t,viewBehaviorFactories:c,hostBehaviorFactories:r,targetOffset:a}}var Vo=document.createRange(),ut=class{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{let t=this.lastChild;if(e.previousSibling===t)return;let i=e.parentNode,r=this.firstChild,n;for(;r!==t;)n=r.nextSibling,i.insertBefore(r,e),r=n;i.insertBefore(t,e)}}remove(){let e=this.fragment,t=this.lastChild,i=this.firstChild,r;for(;i!==t;)r=i.nextSibling,e.appendChild(i),i=r;e.appendChild(t)}dispose(){let e=this.firstChild.parentNode,t=this.lastChild,i=this.firstChild,r;for(;i!==t;)r=i.nextSibling,e.removeChild(i),i=r;e.removeChild(t);let n=this.behaviors,s=this.source;for(let a=0,c=n.length;a<c;++a)n[a].unbind(s)}bind(e,t){let i=this.behaviors;if(this.source!==e)if(this.source!==null){let r=this.source;this.source=e,this.context=t;for(let n=0,s=i.length;n<s;++n){let a=i[n];a.unbind(r),a.bind(e,t)}}else{this.source=e,this.context=t;for(let r=0,n=i.length;r<n;++r)i[r].bind(e,t)}}unbind(){if(this.source===null)return;let e=this.behaviors,t=this.source;for(let i=0,r=e.length;i<r;++i)e[i].unbind(t);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){Vo.setStartBefore(e[0].firstChild),Vo.setEndAfter(e[e.length-1].lastChild),Vo.deleteContents();for(let t=0,i=e.length;t<i;++t){let r=e[t],n=r.behaviors,s=r.source;for(let a=0,c=n.length;a<c;++a)n[a].unbind(s)}}}};var Zt=class{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(this.fragment===null){let d,h=this.html;if(typeof h=="string"){d=document.createElement("template"),d.innerHTML=v.createHTML(h);let g=d.content.firstElementChild;g!==null&&g.tagName==="TEMPLATE"&&(d=g)}else d=h;let p=br(d,this.directives);this.fragment=p.fragment,this.viewBehaviorFactories=p.viewBehaviorFactories,this.hostBehaviorFactories=p.hostBehaviorFactories,this.targetOffset=p.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}let t=this.fragment.cloneNode(!0),i=this.viewBehaviorFactories,r=new Array(this.behaviorCount),n=v.createTemplateWalker(t),s=0,a=this.targetOffset,c=n.nextNode();for(let d=i.length;s<d;++s){let h=i[s],p=h.targetIndex;for(;c!==null;)if(a===p){r[s]=h.createBehavior(c);break}else c=n.nextNode(),a++}if(this.hasHostBehaviors){let d=this.hostBehaviorFactories;for(let h=0,p=d.length;h<p;++h,++s)r[s]=d[h].createBehavior(e)}return new ut(t,r)}render(e,t,i){typeof t=="string"&&(t=document.getElementById(t)),i===void 0&&(i=t);let r=this.create(i);return r.bind(e,Le),r.appendTo(t),r}},pa=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function x(o,...e){let t=[],i="";for(let r=0,n=o.length-1;r<n;++r){let s=o[r],a=e[r];if(i+=s,a instanceof Zt){let c=a;a=()=>c}if(typeof a=="function"&&(a=new Ye(a)),a instanceof dt){let c=pa.exec(s);c!==null&&(a.targetName=c[2])}a instanceof Me?(i+=a.createPlaceholder(t.length),t.push(a)):i+=a}return i+=o[o.length-1],new Zt(i,t)}var M=class{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}};M.create=(()=>{if(v.supportsAdoptedStyleSheets){let o=new Map;return e=>new No(e,o)}return o=>new zo(o)})();function jo(o){return o.map(e=>e instanceof M?jo(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}function gr(o){return o.map(e=>e instanceof M?e.behaviors:null).reduce((e,t)=>t===null?e:(e===null&&(e=[]),e.concat(t)),null)}var Kt=Symbol("prependToAdoptedStyleSheets");function vr(o){let e=[],t=[];return o.forEach(i=>(i[Kt]?e:t).push(i)),{prepend:e,append:t}}var xr=(o,e)=>{let{prepend:t,append:i}=vr(e);o.adoptedStyleSheets=[...t,...o.adoptedStyleSheets,...i]},yr=(o,e)=>{o.adoptedStyleSheets=o.adoptedStyleSheets.filter(t=>e.indexOf(t)===-1)};if(v.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),xr=(o,e)=>{let{prepend:t,append:i}=vr(e);o.adoptedStyleSheets.splice(0,0,...t),o.adoptedStyleSheets.push(...i)},yr=(o,e)=>{for(let t of e){let i=o.adoptedStyleSheets.indexOf(t);i!==-1&&o.adoptedStyleSheets.splice(i,1)}}}catch{}var No=class extends M{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=gr(e)}get styleSheets(){if(this._styleSheets===void 0){let e=this.styles,t=this.styleSheetCache;this._styleSheets=jo(e).map(i=>{if(i instanceof CSSStyleSheet)return i;let r=t.get(i);return r===void 0&&(r=new CSSStyleSheet,r.replaceSync(i),t.set(i,r)),r})}return this._styleSheets}addStylesTo(e){xr(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){yr(e,this.styleSheets),super.removeStylesFrom(e)}},fa=0;function ma(){return`fast-style-class-${++fa}`}var zo=class extends M{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=gr(e),this.styleSheets=jo(e),this.styleClass=ma()}addStylesTo(e){let t=this.styleSheets,i=this.styleClass;e=this.normalizeTarget(e);for(let r=0;r<t.length;r++){let n=document.createElement("style");n.innerHTML=t[r],n.className=i,e.append(n)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);let t=e.querySelectorAll(`.${this.styleClass}`);for(let i=0,r=t.length;i<r;++i)e.removeChild(t[i]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}};var Ot=Object.freeze({locate:Xt()}),Uo={toView(o){return o?"true":"false"},fromView(o){return!(o==null||o==="false"||o===!1||o===0)}},q={toView(o){if(o==null)return null;let e=o*1;return isNaN(e)?null:e.toString()},fromView(o){if(o==null)return null;let e=o*1;return isNaN(e)?null:e}},eo=class o{constructor(e,t,i=t.toLowerCase(),r="reflect",n){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=i,this.mode=r,this.converter=n,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,r==="boolean"&&n===void 0&&(this.converter=Uo)}setValue(e,t){let i=e[this.fieldName],r=this.converter;r!==void 0&&(t=r.fromView(t)),i!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](i,t),e.$fastController.notify(this.name))}getValue(e){return y.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){let t=this.mode,i=this.guards;i.has(e)||t==="fromView"||v.queueUpdate(()=>{i.add(e);let r=e[this.fieldName];switch(t){case"reflect":let n=this.converter;v.setAttribute(e,this.attribute,n!==void 0?n.toView(r):r);break;case"boolean":v.setBooleanAttribute(e,this.attribute,r);break}i.delete(e)})}static collect(e,...t){let i=[];t.push(Ot.locate(e));for(let r=0,n=t.length;r<n;++r){let s=t[r];if(s!==void 0)for(let a=0,c=s.length;a<c;++a){let d=s[a];typeof d=="string"?i.push(new o(e,d)):i.push(new o(e,d.property,d.attribute,d.mode,d.converter))}}return i}};function u(o,e){let t;function i(r,n){arguments.length>1&&(t.property=n),Ot.locate(r.constructor).push(t)}if(arguments.length>1){t={},i(o,e);return}return t=o===void 0?{}:o,i}var wr={mode:"open"},Cr={},qo=Xe.getById(4,()=>{let o=new Map;return Object.freeze({register(e){return o.has(e.type)?!1:(o.set(e.type,e),!0)},getByType(e){return o.get(e)}})}),ge=class{constructor(e,t=e.definition){typeof t=="string"&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;let i=eo.collect(e,t.attributes),r=new Array(i.length),n={},s={};for(let a=0,c=i.length;a<c;++a){let d=i[a];r[a]=d.attribute,n[d.name]=d,s[d.attribute]=d}this.attributes=i,this.observedAttributes=r,this.propertyLookup=n,this.attributeLookup=s,this.shadowOptions=t.shadowOptions===void 0?wr:t.shadowOptions===null?void 0:Object.assign(Object.assign({},wr),t.shadowOptions),this.elementOptions=t.elementOptions===void 0?Cr:Object.assign(Object.assign({},Cr),t.elementOptions),this.styles=t.styles===void 0?void 0:Array.isArray(t.styles)?M.create(t.styles):t.styles instanceof M?t.styles:M.create([t.styles])}get isDefined(){return!!qo.getByType(this.type)}define(e=customElements){let t=this.type;if(qo.register(this)){let i=this.attributes,r=t.prototype;for(let n=0,s=i.length;n<s;++n)y.defineProperty(r,i[n]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}};ge.forType=qo.getByType;var kr=new WeakMap,ba={bubbles:!0,composed:!0,cancelable:!0};function Go(o){return o.shadowRoot||kr.get(o)||null}var to=class o extends ct{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;let i=t.shadowOptions;if(i!==void 0){let n=e.attachShadow(i);i.mode==="closed"&&kr.set(e,n)}let r=y.getAccessors(e);if(r.length>0){let n=this.boundObservables=Object.create(null);for(let s=0,a=r.length;s<a;++s){let c=r[s].name,d=e[c];d!==void 0&&(delete e[c],n[c]=d)}}}get isConnected(){return y.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,y.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){let t=Go(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){let i=e.behaviors;e.addStylesTo(t),i!==null&&this.addBehaviors(i)}}removeStyles(e){let t=Go(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){let i=e.behaviors;e.removeStylesFrom(t),i!==null&&this.removeBehaviors(i)}}addBehaviors(e){let t=this.behaviors||(this.behaviors=new Map),i=e.length,r=[];for(let n=0;n<i;++n){let s=e[n];t.has(s)?t.set(s,t.get(s)+1):(t.set(s,1),r.push(s))}if(this._isConnected){let n=this.element;for(let s=0;s<r.length;++s)r[s].bind(n,Le)}}removeBehaviors(e,t=!1){let i=this.behaviors;if(i===null)return;let r=e.length,n=[];for(let s=0;s<r;++s){let a=e[s];if(i.has(a)){let c=i.get(a)-1;c===0||t?i.delete(a)&&n.push(a):i.set(a,c)}}if(this._isConnected){let s=this.element;for(let a=0;a<n.length;++a)n[a].unbind(s)}}onConnectedCallback(){if(this._isConnected)return;let e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,Le);let t=this.behaviors;if(t!==null)for(let[i]of t)i.bind(e,Le);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);let e=this.view;e!==null&&e.unbind();let t=this.behaviors;if(t!==null){let i=this.element;for(let[r]of t)r.unbind(i)}}onAttributeChangedCallback(e,t,i){let r=this.definition.attributeLookup[e];r!==void 0&&r.onAttributeChangedCallback(this.element,i)}emit(e,t,i){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},ba),i))):!1}finishInitialization(){let e=this.element,t=this.boundObservables;if(t!==null){let r=Object.keys(t);for(let n=0,s=r.length;n<s;++n){let a=r[n];e[a]=t[a]}this.boundObservables=null}let i=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():i.template&&(this._template=i.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():i.styles&&(this._styles=i.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){let t=this.element,i=Go(t)||t;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||v.removeChildNodes(i),e&&(this.view=e.render(t,i,t))}static forCustomElement(e){let t=e.$fastController;if(t!==void 0)return t;let i=ge.forType(e.constructor);if(i===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new o(e,i)}};function $r(o){return class extends o{constructor(){super(),to.forCustomElement(this)}$emit(e,t,i){return this.$fastController.emit(e,t,i)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,i){this.$fastController.onAttributeChangedCallback(e,t,i)}}}var Ve=Object.assign($r(HTMLElement),{from(o){return $r(o)},define(o,e){return new ge(o,e).define().type}});var Ze=class{createCSS(){return""}createBehavior(){}};function ga(o,e){let t=[],i="",r=[];for(let n=0,s=o.length-1;n<s;++n){i+=o[n];let a=e[n];if(a instanceof Ze){let c=a.createBehavior();a=a.createCSS(),c&&r.push(c)}a instanceof M||a instanceof CSSStyleSheet?(i.trim()!==""&&(t.push(i),i=""),t.push(a)):i+=a}return i+=o[o.length-1],i.trim()!==""&&t.push(i),{styles:t,behaviors:r}}function C(o,...e){let{styles:t,behaviors:i}=ga(o,e),r=M.create(t);return i.length&&r.withBehaviors(...i),r}function ie(o,e,t){return{index:o,removed:e,addedCount:t}}var Sr=0,Er=1,Wo=2,Qo=3;function va(o,e,t,i,r,n){let s=n-r+1,a=t-e+1,c=new Array(s),d,h;for(let p=0;p<s;++p)c[p]=new Array(a),c[p][0]=p;for(let p=0;p<a;++p)c[0][p]=p;for(let p=1;p<s;++p)for(let g=1;g<a;++g)o[e+g-1]===i[r+p-1]?c[p][g]=c[p-1][g-1]:(d=c[p-1][g]+1,h=c[p][g-1]+1,c[p][g]=d<h?d:h);return c}function xa(o){let e=o.length-1,t=o[0].length-1,i=o[e][t],r=[];for(;e>0||t>0;){if(e===0){r.push(Wo),t--;continue}if(t===0){r.push(Qo),e--;continue}let n=o[e-1][t-1],s=o[e-1][t],a=o[e][t-1],c;s<a?c=s<n?s:n:c=a<n?a:n,c===n?(n===i?r.push(Sr):(r.push(Er),i=n),e--,t--):c===s?(r.push(Qo),e--,i=s):(r.push(Wo),t--,i=a)}return r.reverse(),r}function ya(o,e,t){for(let i=0;i<t;++i)if(o[i]!==e[i])return i;return t}function wa(o,e,t){let i=o.length,r=e.length,n=0;for(;n<t&&o[--i]===e[--r];)n++;return n}function Ca(o,e,t,i){return e<t||i<o?-1:e===t||i===o?0:o<t?e<i?e-t:i-t:i<e?i-o:e-o}function Jo(o,e,t,i,r,n){let s=0,a=0,c=Math.min(t-e,n-r);if(e===0&&r===0&&(s=ya(o,i,c)),t===o.length&&n===i.length&&(a=wa(o,i,c-s)),e+=s,r+=s,t-=a,n-=a,t-e===0&&n-r===0)return oe;if(e===t){let I=ie(e,[],0);for(;r<n;)I.removed.push(i[r++]);return[I]}else if(r===n)return[ie(e,[],t-e)];let d=xa(va(o,e,t,i,r,n)),h=[],p,g=e,$=r;for(let I=0;I<d.length;++I)switch(d[I]){case Sr:p!==void 0&&(h.push(p),p=void 0),g++,$++;break;case Er:p===void 0&&(p=ie(g,[],0)),p.addedCount++,g++,p.removed.push(i[$]),$++;break;case Wo:p===void 0&&(p=ie(g,[],0)),p.addedCount++,g++;break;case Qo:p===void 0&&(p=ie(g,[],0)),p.removed.push(i[$]),$++;break}return p!==void 0&&h.push(p),h}var Tr=Array.prototype.push;function ka(o,e,t,i){let r=ie(e,t,i),n=!1,s=0;for(let a=0;a<o.length;a++){let c=o[a];if(c.index+=s,n)continue;let d=Ca(r.index,r.index+r.removed.length,c.index,c.index+c.addedCount);if(d>=0){o.splice(a,1),a--,s-=c.addedCount-c.removed.length,r.addedCount+=c.addedCount-d;let h=r.removed.length+c.removed.length-d;if(!r.addedCount&&!h)n=!0;else{let p=c.removed;if(r.index<c.index){let g=r.removed.slice(0,c.index-r.index);Tr.apply(g,p),p=g}if(r.index+r.removed.length>c.index+c.addedCount){let g=r.removed.slice(c.index+c.addedCount-r.index);Tr.apply(p,g)}r.removed=p,c.index<r.index&&(r.index=c.index)}}else if(r.index<c.index){n=!0,o.splice(a,0,r),a++;let h=r.addedCount-r.removed.length;c.index+=h,s+=h}}n||o.push(r)}function $a(o){let e=[];for(let t=0,i=o.length;t<i;t++){let r=o[t];ka(e,r.index,r.removed,r.addedCount)}return e}function Ir(o,e){let t=[],i=$a(e);for(let r=0,n=i.length;r<n;++r){let s=i[r];if(s.addedCount===1&&s.removed.length===1){s.removed[0]!==o[s.index]&&t.push(s);continue}t=t.concat(Jo(o,s.index,s.index+s.addedCount,s.removed,0,s.removed.length))}return t}var Ar=!1;function Xo(o,e){let t=o.index,i=e.length;return t>i?t=i-o.addedCount:t<0&&(t=i+o.removed.length+t-o.addedCount),t<0&&(t=0),o.index=t,o}var Yo=class extends _e{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){this.splices===void 0?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,v.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,v.queueUpdate(this))}flush(){let e=this.splices,t=this.oldCollection;if(e===void 0&&t===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;let i=t===void 0?Ir(this.source,e):Jo(this.source,0,this.source.length,t,0,t.length);this.notify(i)}};function Or(){if(Ar)return;Ar=!0,y.setArrayObserverFactory(c=>new Yo(c));let o=Array.prototype;if(o.$fastPatch)return;Reflect.defineProperty(o,"$fastPatch",{value:1,enumerable:!1});let e=o.pop,t=o.push,i=o.reverse,r=o.shift,n=o.sort,s=o.splice,a=o.unshift;o.pop=function(){let c=this.length>0,d=e.apply(this,arguments),h=this.$fastController;return h!==void 0&&c&&h.addSplice(ie(this.length,[d],0)),d},o.push=function(){let c=t.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(Xo(ie(this.length-arguments.length,[],arguments.length),this)),c},o.reverse=function(){let c,d=this.$fastController;d!==void 0&&(d.flush(),c=this.slice());let h=i.apply(this,arguments);return d!==void 0&&d.reset(c),h},o.shift=function(){let c=this.length>0,d=r.apply(this,arguments),h=this.$fastController;return h!==void 0&&c&&h.addSplice(ie(0,[d],0)),d},o.sort=function(){let c,d=this.$fastController;d!==void 0&&(d.flush(),c=this.slice());let h=n.apply(this,arguments);return d!==void 0&&d.reset(c),h},o.splice=function(){let c=s.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(Xo(ie(+arguments[0],c,arguments.length>2?arguments.length-2:0),this)),c},o.unshift=function(){let c=a.apply(this,arguments),d=this.$fastController;return d!==void 0&&d.addSplice(Xo(ie(0,[],arguments.length),this)),c}}var Zo=class{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}};function B(o){return new He("fast-ref",Zo,o)}var Ko=o=>typeof o=="function";var Ta=()=>null;function Rr(o){return o===void 0?Ta:Ko(o)?o:()=>o}function ht(o,e,t){let i=Ko(o)?o:()=>o,r=Rr(e),n=Rr(t);return(s,a)=>i(s,a)?r(s,a):n(s,a)}var Dc=Object.freeze({positioning:!1,recycle:!0});function Sa(o,e,t,i){o.bind(e[t],i)}function Ea(o,e,t,i){let r=Object.create(i);r.index=t,r.length=e.length,o.bind(e[t],r)}var ei=class{constructor(e,t,i,r,n,s){this.location=e,this.itemsBinding=t,this.templateBinding=r,this.options=s,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=Sa,this.itemsBindingObserver=y.binding(t,this,i),this.templateBindingObserver=y.binding(r,this,n),s.positioning&&(this.bindView=Ea)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items){this.items=oe;return}let t=this.itemsObserver,i=this.itemsObserver=y.getNotifier(this.items),r=t!==i;r&&t!==null&&t.unsubscribe(this),(r||e)&&i.subscribe(this)}updateViews(e){let t=this.childContext,i=this.views,r=this.bindView,n=this.items,s=this.template,a=this.options.recycle,c=[],d=0,h=0;for(let p=0,g=e.length;p<g;++p){let $=e[p],I=$.removed,z=0,ue=$.index,It=ue+$.addedCount,Fe=i.splice($.index,I.length),Zs=h=c.length+Fe.length;for(;ue<It;++ue){let cr=i[ue],Ks=cr?cr.firstChild:this.location,lt;a&&h>0?(z<=Zs&&Fe.length>0?(lt=Fe[z],z++):(lt=c[d],d++),h--):lt=s.create(),i.splice(ue,0,lt),r(lt,n,ue,t),lt.insertBefore(Ks)}Fe[z]&&c.push(...Fe.slice(z))}for(let p=d,g=c.length;p<g;++p)c[p].dispose();if(this.options.positioning)for(let p=0,g=i.length;p<g;++p){let $=i[p].context;$.length=g,$.index=p}}refreshAllViews(e=!1){let t=this.items,i=this.childContext,r=this.template,n=this.location,s=this.bindView,a=t.length,c=this.views,d=c.length;if((a===0||e||!this.options.recycle)&&(ut.disposeContiguousBatch(c),d=0),d===0){this.views=c=new Array(a);for(let h=0;h<a;++h){let p=r.create();s(p,t,h,i),c[h]=p,p.insertBefore(n)}}else{let h=0;for(;h<a;++h)if(h<d){let g=c[h];s(g,t,h,i)}else{let g=r.create();s(g,t,h,i),c.push(g),g.insertBefore(n)}let p=c.splice(h,d-h);for(h=0,a=p.length;h<a;++h)p[h].dispose()}}unbindAllViews(){let e=this.views;for(let t=0,i=e.length;t<i;++t)e[t].unbind()}},pt=class extends Me{constructor(e,t,i){super(),this.itemsBinding=e,this.templateBinding=t,this.options=i,this.createPlaceholder=v.createBlockPlaceholder,Or(),this.isItemsBindingVolatile=y.isVolatileBinding(e),this.isTemplateBindingVolatile=y.isVolatileBinding(t)}createBehavior(e){return new ei(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}};function Ke(o){return o?function(e,t,i){return e.nodeType===1&&e.matches(o)}:function(e,t,i){return e.nodeType===1}}var ft=class{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){let t=this.options.property;this.shouldUpdate=y.getAccessors(e).some(i=>i.name===t),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(oe),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}};var ti=class extends ft{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}};function _(o){return typeof o=="string"&&(o={property:o}),new He("fast-slotted",ti,o)}var oi=class extends ft{constructor(e,t){super(e,t),this.observer=null,t.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}};function oo(o){return typeof o=="string"&&(o={property:o}),new He("fast-children",oi,o)}var X=class{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}},re=(o,e)=>x`
    <span
        part="end"
        ${B("endContainer")}
        class=${t=>e.end?"end":void 0}
    >
        <slot name="end" ${B("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,ne=(o,e)=>x`
    <span
        part="start"
        ${B("startContainer")}
        class="${t=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${B("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`,fd=x`
    <span part="end" ${B("endContainer")}>
        <slot
            name="end"
            ${B("end")}
            @slotchange="${o=>o.handleEndContentChange()}"
        ></slot>
    </span>
`,md=x`
    <span part="start" ${B("startContainer")}>
        <slot
            name="start"
            ${B("start")}
            @slotchange="${o=>o.handleStartContentChange()}"
        ></slot>
    </span>
`;function l(o,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(n=(r<3?s(n):r>3?s(e,t,n):s(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n}var ii=new Map;"metadata"in Reflect||(Reflect.metadata=function(o,e){return function(t){Reflect.defineMetadata(o,e,t)}},Reflect.defineMetadata=function(o,e,t){let i=ii.get(t);i===void 0&&ii.set(t,i=new Map),i.set(o,e)},Reflect.getOwnMetadata=function(o,e){let t=ii.get(e);if(t!==void 0)return t.get(o)});var ai=class{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,zr(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){let{container:i,key:r}=this;return this.container=this.key=void 0,i.registerResolver(r,new G(r,e,t))}};function Rt(o){let e=o.slice(),t=Object.keys(o),i=t.length,r;for(let n=0;n<i;++n)r=t[n],jr(r)||(e[r]=o[r]);return e}var Ia=Object.freeze({none(o){throw Error(`${o.toString()} not registered, did you forget to add @singleton()?`)},singleton(o){return new G(o,1,o)},transient(o){return new G(o,2,o)}}),ri=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Ia.singleton})}),Dr=new Map;function Pr(o){return e=>Reflect.getOwnMetadata(o,e)}var Fr=null,A=Object.freeze({createContainer(o){return new Dt(null,Object.assign({},ri.default,o))},findResponsibleContainer(o){let e=o.$$container$$;return e&&e.responsibleForOwnerRequests?e:A.findParentContainer(o)},findParentContainer(o){let e=new CustomEvent(Nr,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return o.dispatchEvent(e),e.detail.container||A.getOrCreateDOMContainer()},getOrCreateDOMContainer(o,e){return o?o.$$container$$||new Dt(o,Object.assign({},ri.default,e,{parentLocator:A.findParentContainer})):Fr||(Fr=new Dt(null,Object.assign({},ri.default,e,{parentLocator:()=>null})))},getDesignParamtypes:Pr("design:paramtypes"),getAnnotationParamtypes:Pr("di:paramtypes"),getOrCreateAnnotationParamTypes(o){let e=this.getAnnotationParamtypes(o);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],o),e},getDependencies(o){let e=Dr.get(o);if(e===void 0){let t=o.inject;if(t===void 0){let i=A.getDesignParamtypes(o),r=A.getAnnotationParamtypes(o);if(i===void 0)if(r===void 0){let n=Object.getPrototypeOf(o);typeof n=="function"&&n!==Function.prototype?e=Rt(A.getDependencies(n)):e=[]}else e=Rt(r);else if(r===void 0)e=Rt(i);else{e=Rt(i);let n=r.length,s;for(let d=0;d<n;++d)s=r[d],s!==void 0&&(e[d]=s);let a=Object.keys(r);n=a.length;let c;for(let d=0;d<n;++d)c=a[d],jr(c)||(e[c]=r[c])}}else e=Rt(t);Dr.set(o,e)}return e},defineProperty(o,e,t,i=!1){let r=`$di_${e}`;Reflect.defineProperty(o,e,{get:function(){let n=this[r];if(n===void 0&&(n=(this instanceof HTMLElement?A.findResponsibleContainer(this):A.getOrCreateDOMContainer()).get(t),this[r]=n,i&&this instanceof Ve)){let a=this.$fastController,c=()=>{let h=A.findResponsibleContainer(this).get(t),p=this[r];h!==p&&(this[r]=n,a.notify(e))};a.subscribe({handleChange:c},"isConnected")}return n}})},createInterface(o,e){let t=typeof o=="function"?o:e,i=typeof o=="string"?o:o&&"friendlyName"in o&&o.friendlyName||Mr,r=typeof o=="string"?!1:o&&"respectConnection"in o&&o.respectConnection||!1,n=function(s,a,c){if(s==null||new.target!==void 0)throw new Error(`No registration for interface: '${n.friendlyName}'`);if(a)A.defineProperty(s,a,n,r);else{let d=A.getOrCreateAnnotationParamTypes(s);d[c]=n}};return n.$isInterface=!0,n.friendlyName=i??"(anonymous)",t!=null&&(n.register=function(s,a){return t(new ai(s,a??n))}),n.toString=function(){return`InterfaceSymbol<${n.friendlyName}>`},n},inject(...o){return function(e,t,i){if(typeof i=="number"){let r=A.getOrCreateAnnotationParamTypes(e),n=o[0];n!==void 0&&(r[i]=n)}else if(t)A.defineProperty(e,t,o[0]);else{let r=i?A.getOrCreateAnnotationParamTypes(i.value):A.getOrCreateAnnotationParamTypes(e),n;for(let s=0;s<o.length;++s)n=o[s],n!==void 0&&(r[s]=n)}}},transient(o){return o.register=function(t){return et.transient(o,o).register(t)},o.registerInRequestor=!1,o},singleton(o,e=Oa){return o.register=function(i){return et.singleton(o,o).register(i)},o.registerInRequestor=e.scoped,o}}),Aa=A.createInterface("Container");function so(o){return function(e){let t=function(i,r,n){A.inject(t)(i,r,n)};return t.$isResolver=!0,t.resolve=function(i,r){return o(e,i,r)},t}}var xd=A.inject;var Oa={scoped:!1};function Ra(o){return function(e,t){t=!!t;let i=function(r,n,s){A.inject(i)(r,n,s)};return i.$isResolver=!0,i.resolve=function(r,n){return o(e,r,n,t)},i}}var yd=Ra((o,e,t,i)=>t.getAll(o,i)),wd=so((o,e,t)=>()=>t.get(o)),Cd=so((o,e,t)=>{if(t.has(o,!0))return t.get(o)});function ci(o,e,t){A.inject(ci)(o,e,t)}ci.$isResolver=!0;ci.resolve=()=>{};var kd=so((o,e,t)=>{let i=Vr(o,e),r=new G(o,0,i);return t.registerResolver(o,r),i}),$d=so((o,e,t)=>Vr(o,e));function Vr(o,e){return e.getFactory(o).construct(e)}var G=class{constructor(e,t,i){this.key=e,this.strategy=t,this.state=i,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state}case 2:{let i=e.getFactory(this.state);if(i===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return i.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,i,r;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(r=(i=(t=e.getResolver(this.state))===null||t===void 0?void 0:t.getFactory)===null||i===void 0?void 0:i.call(t,e))!==null&&r!==void 0?r:null;default:return null}}};function _r(o){return this.get(o)}function Da(o,e){return e(o)}var li=class{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let i;return t===void 0?i=new this.Type(...this.dependencies.map(_r,e)):i=new this.Type(...this.dependencies.map(_r,e),...t),this.transformers==null?i:this.transformers.reduce(Da,i)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}},Pa={$isResolver:!0,resolve(o,e){return e}};function no(o){return typeof o.register=="function"}function Fa(o){return no(o)&&typeof o.registerInRequestor=="boolean"}function Br(o){return Fa(o)&&o.registerInRequestor}function _a(o){return o.prototype!==void 0}var Ba=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Nr="__DI_LOCATE_PARENT__",ni=new Map,Dt=class o{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Aa,Pa),e instanceof Node&&e.addEventListener(Nr,i=>{i.composedPath()[0]!==this.owner&&(i.detail.container=this,i.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let t,i,r,n,s,a=this.context;for(let c=0,d=e.length;c<d;++c)if(t=e[c],!!Hr(t))if(no(t))t.register(this,a);else if(_a(t))et.singleton(t,t).register(this);else for(i=Object.keys(t),n=0,s=i.length;n<s;++n)r=t[i[n]],Hr(r)&&(no(r)?r.register(this,a):this.register(r));return--this.registerDepth,this}registerResolver(e,t){io(e);let i=this.resolvers,r=i.get(e);return r==null?i.set(e,t):r instanceof G&&r.strategy===4?r.state.push(t):i.set(e,new G(e,4,[r,t])),t}registerTransformer(e,t){let i=this.getResolver(e);if(i==null)return!1;if(i.getFactory){let r=i.getFactory(this);return r==null?!1:(r.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(io(e),e.resolve!==void 0)return e;let i=this,r;for(;i!=null;)if(r=i.resolvers.get(e),r==null){if(i.parent==null){let n=Br(e)?this:i;return t?this.jitRegister(e,n):null}i=i.parent}else return r;return null}has(e,t=!1){return this.resolvers.has(e)?!0:t&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if(io(e),e.$isResolver)return e.resolve(this,this);let t=this,i;for(;t!=null;)if(i=t.resolvers.get(e),i==null){if(t.parent==null){let r=Br(e)?this:t;return i=this.jitRegister(e,r),i.resolve(t,this)}t=t.parent}else return i.resolve(t,this);throw new Error(`Unable to resolve key: ${String(e)}`)}getAll(e,t=!1){io(e);let i=this,r=i,n;if(t){let s=oe;for(;r!=null;)n=r.resolvers.get(e),n!=null&&(s=s.concat(Lr(n,r,i))),r=r.parent;return s}else for(;r!=null;)if(n=r.resolvers.get(e),n==null){if(r=r.parent,r==null)return oe}else return Lr(n,r,i);return oe}getFactory(e){let t=ni.get(e);if(t===void 0){if(La(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);ni.set(e,t=new li(e,A.getDependencies(e)))}return t}registerFactory(e,t){ni.set(e,t)}createChild(e){return new o(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(Ba.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(no(e)){let i=e.register(t);if(!(i instanceof Object)||i.resolve==null){let r=t.resolvers.get(e);if(r!=null)return r;throw new Error("A valid resolver was not returned from the static register method")}return i}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{let i=this.config.defaultResolver(e,t);return t.resolvers.set(e,i),i}}}},si=new WeakMap;function zr(o){return function(e,t,i){if(si.has(i))return si.get(i);let r=o(e,t,i);return si.set(i,r),r}}var et=Object.freeze({instance(o,e){return new G(o,0,e)},singleton(o,e){return new G(o,1,e)},transient(o,e){return new G(o,2,e)},callback(o,e){return new G(o,3,e)},cachedCallback(o,e){return new G(o,3,zr(e))},aliasTo(o,e){return new G(e,5,o)}});function io(o){if(o==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Lr(o,e,t){if(o instanceof G&&o.strategy===4){let i=o.state,r=i.length,n=new Array(r);for(;r--;)n[r]=i[r].resolve(e,t);return n}return[o.resolve(e,t)]}var Mr="(anonymous)";function Hr(o){return typeof o=="object"&&o!==null||typeof o=="function"}var La=(function(){let o=new WeakMap,e=!1,t="",i=0;return function(r){return e=o.get(r),e===void 0&&(t=r.toString(),i=t.length,e=i>=29&&i<=100&&t.charCodeAt(i-1)===125&&t.charCodeAt(i-2)<=32&&t.charCodeAt(i-3)===93&&t.charCodeAt(i-4)===101&&t.charCodeAt(i-5)===100&&t.charCodeAt(i-6)===111&&t.charCodeAt(i-7)===99&&t.charCodeAt(i-8)===32&&t.charCodeAt(i-9)===101&&t.charCodeAt(i-10)===118&&t.charCodeAt(i-11)===105&&t.charCodeAt(i-12)===116&&t.charCodeAt(i-13)===97&&t.charCodeAt(i-14)===110&&t.charCodeAt(i-15)===88,o.set(r,e)),e}})(),ro={};function jr(o){switch(typeof o){case"number":return o>=0&&(o|0)===o;case"string":{let e=ro[o];if(e!==void 0)return e;let t=o.length;if(t===0)return ro[o]=!1;let i=0;for(let r=0;r<t;++r)if(i=o.charCodeAt(r),r===0&&i===48&&t>1||i<48||i>57)return ro[o]=!1;return ro[o]=!0}default:return!1}}function Ur(o){return`${o.toLowerCase()}:presentation`}var ao=new Map,co=Object.freeze({define(o,e,t){let i=Ur(o);ao.get(i)===void 0?ao.set(i,e):ao.set(i,!1),t.register(et.instance(i,e))},forTag(o,e){let t=Ur(o),i=ao.get(t);return i===!1?A.findResponsibleContainer(e).get(t):i||null}}),lo=class{constructor(e,t){this.template=e||null,this.styles=t===void 0?null:Array.isArray(t)?M.create(t):t instanceof M?t:M.create([t])}applyTo(e){let t=e.$fastController;t.template===null&&(t.template=this.template),t.styles===null&&(t.styles=this.styles)}};var k=class o extends Ve{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=co.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new di(this===o?class extends o{}:this,e,t)}};l([f],k.prototype,"template",void 0);l([f],k.prototype,"styles",void 0);function Pt(o,e,t){return typeof o=="function"?o(e,t):o}var di=class{constructor(e,t,i){this.type=e,this.elementDefinition=t,this.overrideDefinition=i,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){let i=this.definition,r=this.overrideDefinition,s=`${i.prefix||t.elementPrefix}-${i.baseName}`;t.tryDefineElement({name:s,type:this.type,baseClass:this.elementDefinition.baseClass,callback:a=>{let c=new lo(Pt(i.template,a,i),Pt(i.styles,a,i));a.definePresentation(c);let d=Pt(i.shadowOptions,a,i);a.shadowRootMode&&(d?r.shadowOptions||(d.mode=a.shadowRootMode):d!==null&&(d={mode:a.shadowRootMode})),a.defineElement({elementOptions:Pt(i.elementOptions,a,i),shadowOptions:d,attributes:Pt(i.attributes,a,i)})}})}};function L(o,...e){let t=Ot.locate(o);e.forEach(i=>{Object.getOwnPropertyNames(i.prototype).forEach(n=>{n!=="constructor"&&Object.defineProperty(o.prototype,n,Object.getOwnPropertyDescriptor(i.prototype,n))}),Ot.locate(i).forEach(n=>t.push(n))})}var mt={horizontal:"horizontal",vertical:"vertical"};function qr(o,e){let t=o.length;for(;t--;)if(e(o[t],t,o))return t;return-1}function Gr(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Wr(...o){return o.every(e=>e instanceof HTMLElement)}function Ma(){let o=document.querySelector('meta[property="csp-nonce"]');return o?o.getAttribute("content"):null}var tt;function Qr(){if(typeof tt=="boolean")return tt;if(!Gr())return tt=!1,tt;let o=document.createElement("style"),e=Ma();e!==null&&o.setAttribute("nonce",e),document.head.appendChild(o);try{o.sheet.insertRule("foo:focus-visible {color:inherit}",0),tt=!0}catch{tt=!1}finally{document.head.removeChild(o)}return tt}var ui="focus",hi="focusin",Ee="focusout";var Ie="keydown";var Jr;(function(o){o[o.alt=18]="alt",o[o.arrowDown=40]="arrowDown",o[o.arrowLeft=37]="arrowLeft",o[o.arrowRight=39]="arrowRight",o[o.arrowUp=38]="arrowUp",o[o.back=8]="back",o[o.backSlash=220]="backSlash",o[o.break=19]="break",o[o.capsLock=20]="capsLock",o[o.closeBracket=221]="closeBracket",o[o.colon=186]="colon",o[o.colon2=59]="colon2",o[o.comma=188]="comma",o[o.ctrl=17]="ctrl",o[o.delete=46]="delete",o[o.end=35]="end",o[o.enter=13]="enter",o[o.equals=187]="equals",o[o.equals2=61]="equals2",o[o.equals3=107]="equals3",o[o.escape=27]="escape",o[o.forwardSlash=191]="forwardSlash",o[o.function1=112]="function1",o[o.function10=121]="function10",o[o.function11=122]="function11",o[o.function12=123]="function12",o[o.function2=113]="function2",o[o.function3=114]="function3",o[o.function4=115]="function4",o[o.function5=116]="function5",o[o.function6=117]="function6",o[o.function7=118]="function7",o[o.function8=119]="function8",o[o.function9=120]="function9",o[o.home=36]="home",o[o.insert=45]="insert",o[o.menu=93]="menu",o[o.minus=189]="minus",o[o.minus2=109]="minus2",o[o.numLock=144]="numLock",o[o.numPad0=96]="numPad0",o[o.numPad1=97]="numPad1",o[o.numPad2=98]="numPad2",o[o.numPad3=99]="numPad3",o[o.numPad4=100]="numPad4",o[o.numPad5=101]="numPad5",o[o.numPad6=102]="numPad6",o[o.numPad7=103]="numPad7",o[o.numPad8=104]="numPad8",o[o.numPad9=105]="numPad9",o[o.numPadDivide=111]="numPadDivide",o[o.numPadDot=110]="numPadDot",o[o.numPadMinus=109]="numPadMinus",o[o.numPadMultiply=106]="numPadMultiply",o[o.numPadPlus=107]="numPadPlus",o[o.openBracket=219]="openBracket",o[o.pageDown=34]="pageDown",o[o.pageUp=33]="pageUp",o[o.period=190]="period",o[o.print=44]="print",o[o.quote=222]="quote",o[o.scrollLock=145]="scrollLock",o[o.shift=16]="shift",o[o.space=32]="space",o[o.tab=9]="tab",o[o.tilde=192]="tilde",o[o.windowsLeft=91]="windowsLeft",o[o.windowsOpera=219]="windowsOpera",o[o.windowsRight=92]="windowsRight"})(Jr||(Jr={}));var ee="ArrowDown",Ne="ArrowLeft",ze="ArrowRight",te="ArrowUp",ve="Enter",je="Escape",se="Home",ae="End",Xr="F2",Yr="PageDown",Zr="PageUp",xe=" ",bt="Tab";var Kr={ArrowDown:ee,ArrowLeft:Ne,ArrowRight:ze,ArrowUp:te};var Ue;(function(o){o.ltr="ltr",o.rtl="rtl"})(Ue||(Ue={}));function en(o,e,t){return Math.min(Math.max(t,o),e)}function Ft(o,e,t=0){return[e,t]=[e,t].sort((i,r)=>i-r),e<=o&&o<t}var Ha=0;function ot(o=""){return`${o}${Ha++}`}var tn=(o,e)=>x`
    <a
        class="control"
        part="control"
        download="${t=>t.download}"
        href="${t=>t.href}"
        hreflang="${t=>t.hreflang}"
        ping="${t=>t.ping}"
        referrerpolicy="${t=>t.referrerpolicy}"
        rel="${t=>t.rel}"
        target="${t=>t.target}"
        type="${t=>t.type}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${B("control")}
    >
        ${ne(o,e)}
        <span class="content" part="content">
            <slot ${_("defaultSlottedContent")}></slot>
        </span>
        ${re(o,e)}
    </a>
`;var S=class{};l([u({attribute:"aria-atomic"})],S.prototype,"ariaAtomic",void 0);l([u({attribute:"aria-busy"})],S.prototype,"ariaBusy",void 0);l([u({attribute:"aria-controls"})],S.prototype,"ariaControls",void 0);l([u({attribute:"aria-current"})],S.prototype,"ariaCurrent",void 0);l([u({attribute:"aria-describedby"})],S.prototype,"ariaDescribedby",void 0);l([u({attribute:"aria-details"})],S.prototype,"ariaDetails",void 0);l([u({attribute:"aria-disabled"})],S.prototype,"ariaDisabled",void 0);l([u({attribute:"aria-errormessage"})],S.prototype,"ariaErrormessage",void 0);l([u({attribute:"aria-flowto"})],S.prototype,"ariaFlowto",void 0);l([u({attribute:"aria-haspopup"})],S.prototype,"ariaHaspopup",void 0);l([u({attribute:"aria-hidden"})],S.prototype,"ariaHidden",void 0);l([u({attribute:"aria-invalid"})],S.prototype,"ariaInvalid",void 0);l([u({attribute:"aria-keyshortcuts"})],S.prototype,"ariaKeyshortcuts",void 0);l([u({attribute:"aria-label"})],S.prototype,"ariaLabel",void 0);l([u({attribute:"aria-labelledby"})],S.prototype,"ariaLabelledby",void 0);l([u({attribute:"aria-live"})],S.prototype,"ariaLive",void 0);l([u({attribute:"aria-owns"})],S.prototype,"ariaOwns",void 0);l([u({attribute:"aria-relevant"})],S.prototype,"ariaRelevant",void 0);l([u({attribute:"aria-roledescription"})],S.prototype,"ariaRoledescription",void 0);var Y=class extends k{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{var t;(t=this.control)===null||t===void 0||t.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}};l([u],Y.prototype,"download",void 0);l([u],Y.prototype,"href",void 0);l([u],Y.prototype,"hreflang",void 0);l([u],Y.prototype,"ping",void 0);l([u],Y.prototype,"referrerpolicy",void 0);l([u],Y.prototype,"rel",void 0);l([u],Y.prototype,"target",void 0);l([u],Y.prototype,"type",void 0);l([f],Y.prototype,"defaultSlottedContent",void 0);var _t=class{};l([u({attribute:"aria-expanded"})],_t.prototype,"ariaExpanded",void 0);L(_t,S);L(Y,X,_t);var on=o=>{let e=o.closest("[dir]");return e!==null&&e.dir==="rtl"?Ue.rtl:Ue.ltr};var uo=(o,e)=>x`
    <template class="${t=>t.circular?"circular":""}">
        <div class="control" part="control" style="${t=>t.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;var Ae=class extends k{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;let e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}};l([u({attribute:"fill"})],Ae.prototype,"fill",void 0);l([u({attribute:"color"})],Ae.prototype,"color",void 0);l([u({mode:"boolean"})],Ae.prototype,"circular",void 0);var rn=(o,e)=>x`
    <button
        class="control"
        part="control"
        ?autofocus="${t=>t.autofocus}"
        ?disabled="${t=>t.disabled}"
        form="${t=>t.formId}"
        formaction="${t=>t.formaction}"
        formenctype="${t=>t.formenctype}"
        formmethod="${t=>t.formmethod}"
        formnovalidate="${t=>t.formnovalidate}"
        formtarget="${t=>t.formtarget}"
        name="${t=>t.name}"
        type="${t=>t.type}"
        value="${t=>t.value}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-pressed="${t=>t.ariaPressed}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${B("control")}
    >
        ${ne(o,e)}
        <span class="content" part="content">
            <slot ${_("defaultSlottedContent")}></slot>
        </span>
        ${re(o,e)}
    </button>
`;var nn="form-associated-proxy",sn="ElementInternals",an=sn in window&&"setFormValue"in window[sn].prototype,ln=new WeakMap;function Oe(o){let e=class extends o{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return an}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){let t=this.proxy.labels,i=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),r=t?i.concat(Array.from(t)):i;return Object.freeze(r)}else return oe}valueChanged(t,i){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,i){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,i){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),v.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(t,i){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,i){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),v.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!an)return null;let t=ln.get(this);return t||(t=this.attachInternals(),ln.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(t=>this.proxy.removeEventListener(t,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,i,r){this.elementInternals?this.elementInternals.setValidity(t,i,r):typeof i=="string"&&this.proxy.setCustomValidity(i)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(i=>this.proxy.addEventListener(i,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",nn),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",nn)),(t=this.shadowRoot)===null||t===void 0||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),(t=this.shadowRoot)===null||t===void 0||t.removeChild(this.proxySlot)}validate(t){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,t)}setFormValue(t,i){this.elementInternals&&this.elementInternals.setFormValue(t,i||t)}_keypressHandler(t){switch(t.key){case ve:if(this.form instanceof HTMLFormElement){let i=this.form.querySelector("[type=submit]");i?.click()}break}}stopPropagation(t){t.stopPropagation()}};return u({mode:"boolean"})(e.prototype,"disabled"),u({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),u({attribute:"current-value"})(e.prototype,"currentValue"),u(e.prototype,"name"),u({mode:"boolean"})(e.prototype,"required"),f(e.prototype,"value"),e}function ho(o){class e extends Oe(o){}class t extends e{constructor(...r){super(r),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(r,n){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),r!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(r,n){this.checked=this.currentChecked}updateForm(){let r=this.checked?this.value:null;this.setFormValue(r,r)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return u({attribute:"checked",mode:"boolean"})(t.prototype,"checkedAttribute"),u({attribute:"current-checked",converter:Uo})(t.prototype,"currentChecked"),f(t.prototype,"defaultChecked"),f(t.prototype,"checked"),t}var pi=class extends k{},po=class extends Oe(pi){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var Z=class extends po{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&((t=this.defaultSlottedContent)===null||t===void 0?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;let e=this.proxy.isConnected;e||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;(e=this.form)===null||e===void 0||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),t==="submit"&&this.addEventListener("click",this.handleSubmission),e==="submit"&&this.removeEventListener("click",this.handleSubmission),t==="reset"&&this.addEventListener("click",this.handleFormReset),e==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();let t=Array.from((e=this.control)===null||e===void 0?void 0:e.children);t&&t.forEach(i=>{i.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();let t=Array.from((e=this.control)===null||e===void 0?void 0:e.children);t&&t.forEach(i=>{i.removeEventListener("click",this.handleClick)})}};l([u({mode:"boolean"})],Z.prototype,"autofocus",void 0);l([u({attribute:"form"})],Z.prototype,"formId",void 0);l([u],Z.prototype,"formaction",void 0);l([u],Z.prototype,"formenctype",void 0);l([u],Z.prototype,"formmethod",void 0);l([u({mode:"boolean"})],Z.prototype,"formnovalidate",void 0);l([u],Z.prototype,"formtarget",void 0);l([u],Z.prototype,"type",void 0);l([f],Z.prototype,"defaultSlottedContent",void 0);var gt=class{};l([u({attribute:"aria-expanded"})],gt.prototype,"ariaExpanded",void 0);l([u({attribute:"aria-pressed"})],gt.prototype,"ariaPressed",void 0);L(gt,S);L(Z,X,gt);var vt={none:"none",default:"default",sticky:"sticky"},ye={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},qe={default:"default",header:"header",stickyHeader:"sticky-header"};var H=class extends k{constructor(){super(...arguments),this.rowType=qe.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new pt(e=>e.columnDefinitions,e=>e.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(Ee,this.handleFocusout),this.addEventListener(Ie,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(Ee,this.handleFocusout),this.removeEventListener(Ie,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let t=0;switch(e.key){case Ne:t=Math.max(0,this.focusColumnIndex-1),this.cellElements[t].focus(),e.preventDefault();break;case ze:t=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[t].focus(),e.preventDefault();break;case se:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case ae:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===qe.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===qe.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}};l([u({attribute:"grid-template-columns"})],H.prototype,"gridTemplateColumns",void 0);l([u({attribute:"row-type"})],H.prototype,"rowType",void 0);l([f],H.prototype,"rowData",void 0);l([f],H.prototype,"columnDefinitions",void 0);l([f],H.prototype,"cellItemTemplate",void 0);l([f],H.prototype,"headerCellItemTemplate",void 0);l([f],H.prototype,"rowIndex",void 0);l([f],H.prototype,"isActiveRow",void 0);l([f],H.prototype,"activeCellItemTemplate",void 0);l([f],H.prototype,"defaultCellItemTemplate",void 0);l([f],H.prototype,"defaultHeaderCellItemTemplate",void 0);l([f],H.prototype,"cellElements",void 0);function Va(o){let e=o.tagFor(H);return x`
    <${e}
        :rowData="${t=>t}"
        :cellItemTemplate="${(t,i)=>i.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(t,i)=>i.parent.headerCellItemTemplate}"
    ></${e}>
`}var cn=(o,e)=>{let t=Va(o),i=o.tagFor(H);return x`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>i}"
            :defaultRowItemTemplate="${t}"
            ${oo({property:"rowElements",filter:Ke("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};var V=class o extends k{constructor(){super(),this.noTabbing=!1,this.generateHeader=vt.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,t,i)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}let r=Math.max(0,Math.min(this.rowElements.length-1,e)),s=this.rowElements[r].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),a=Math.max(0,Math.min(s.length-1,t)),c=s[a];i&&this.scrollHeight!==this.clientHeight&&(r<this.focusRowIndex&&this.scrollTop>0||r>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&c.scrollIntoView({block:"center",inline:"center"}),c.focus()},this.onChildListChange=(e,t)=>{e&&e.length&&(e.forEach(i=>{i.addedNodes.forEach(r=>{r.nodeType===1&&r.getAttribute("role")==="row"&&(r.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,v.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(e===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){let t=this.rowElements[0];this.generatedGridTemplateColumns=new Array(t.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach((t,i)=>{let r=t;r.rowIndex=i,r.gridTemplateColumns=e,this.columnDefinitionsStale&&(r.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let t="";return e.forEach(i=>{t=`${t}${t===""?"":" "}1fr`}),t}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=o.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=o.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new pt(e=>e.rowsData,e=>e.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(ui,this.handleFocus),this.addEventListener(Ie,this.handleKeydown),this.addEventListener(Ee,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),v.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(ui,this.handleFocus),this.removeEventListener(Ie,this.handleKeydown),this.removeEventListener(Ee,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;let t=e.target;this.focusRowIndex=this.rowElements.indexOf(t),this.focusColumnIndex=t.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){(e.relatedTarget===null||!this.contains(e.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let t,i=this.rowElements.length-1,r=this.offsetHeight+this.scrollTop,n=this.rowElements[i];switch(e.key){case te:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case ee:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case Zr:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(t=this.focusRowIndex-1,t;t>=0;t--){let s=this.rowElements[t];if(s.offsetTop<this.scrollTop){this.scrollTop=s.offsetTop+s.clientHeight-this.clientHeight;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case Yr:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=i||n.offsetTop+n.offsetHeight<=r){this.focusOnCell(i,this.focusColumnIndex,!1);return}for(t=this.focusRowIndex+1,t;t<=i;t++){let s=this.rowElements[t];if(s.offsetTop+s.offsetHeight>r){let a=0;this.generateHeader===vt.sticky&&this.generatedHeader!==null&&(a=this.generatedHeader.clientHeight),this.scrollTop=s.offsetTop-a;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case se:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case ae:e.ctrlKey&&this.columnDefinitions!==null&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,v.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==vt.none&&this.rowsData.length>0){let e=document.createElement(this.rowElementTag);this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===vt.sticky?qe.stickyHeader:qe.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(e,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}};V.generateColumns=o=>Object.getOwnPropertyNames(o).map((e,t)=>({columnDataKey:e,gridColumn:`${t}`}));l([u({attribute:"no-tabbing",mode:"boolean"})],V.prototype,"noTabbing",void 0);l([u({attribute:"generate-header"})],V.prototype,"generateHeader",void 0);l([u({attribute:"grid-template-columns"})],V.prototype,"gridTemplateColumns",void 0);l([f],V.prototype,"rowsData",void 0);l([f],V.prototype,"columnDefinitions",void 0);l([f],V.prototype,"rowItemTemplate",void 0);l([f],V.prototype,"cellItemTemplate",void 0);l([f],V.prototype,"headerCellItemTemplate",void 0);l([f],V.prototype,"focusRowIndex",void 0);l([f],V.prototype,"focusColumnIndex",void 0);l([f],V.prototype,"defaultRowItemTemplate",void 0);l([f],V.prototype,"rowElementTag",void 0);l([f],V.prototype,"rowElements",void 0);var Na=x`
    <template>
        ${o=>o.rowData===null||o.columnDefinition===null||o.columnDefinition.columnDataKey===null?null:o.rowData[o.columnDefinition.columnDataKey]}
    </template>
`,za=x`
    <template>
        ${o=>o.columnDefinition===null?null:o.columnDefinition.title===void 0?o.columnDefinition.columnDataKey:o.columnDefinition.title}
    </template>
`,le=class extends k{constructor(){super(...arguments),this.cellType=ye.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,t){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(hi,this.handleFocusin),this.addEventListener(Ee,this.handleFocusout),this.addEventListener(Ie,this.handleKeydown),this.style.gridColumn=`${((e=this.columnDefinition)===null||e===void 0?void 0:e.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(hi,this.handleFocusin),this.removeEventListener(Ee,this.handleFocusout),this.removeEventListener(Ie,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case ye.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){let t=this.columnDefinition.headerCellFocusTargetCallback(this);t!==null&&t.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){let t=this.columnDefinition.cellFocusTargetCallback(this);t!==null&&t.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(e){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||this.columnDefinition===null||this.cellType===ye.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===ye.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(e.key){case ve:case Xr:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case ye.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){let t=this.columnDefinition.headerCellFocusTargetCallback(this);t!==null&&t.focus(),e.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){let t=this.columnDefinition.cellFocusTargetCallback(this);t!==null&&t.focus(),e.preventDefault()}break}break;case je:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case ye.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=za.render(this,this);break;case void 0:case ye.rowHeader:case ye.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=Na.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}};l([u({attribute:"cell-type"})],le.prototype,"cellType",void 0);l([u({attribute:"grid-column"})],le.prototype,"gridColumn",void 0);l([f],le.prototype,"rowData",void 0);l([f],le.prototype,"columnDefinition",void 0);function ja(o){let e=o.tagFor(le);return x`
    <${e}
        cell-type="${t=>t.isRowHeader?"rowheader":void 0}"
        grid-column="${(t,i)=>i.index+1}"
        :rowData="${(t,i)=>i.parent.rowData}"
        :columnDefinition="${t=>t}"
    ></${e}>
`}function Ua(o){let e=o.tagFor(le);return x`
    <${e}
        cell-type="columnheader"
        grid-column="${(t,i)=>i.index+1}"
        :columnDefinition="${t=>t}"
    ></${e}>
`}var dn=(o,e)=>{let t=ja(o),i=Ua(o);return x`
        <template
            role="row"
            class="${r=>r.rowType!=="default"?r.rowType:""}"
            :defaultCellItemTemplate="${t}"
            :defaultHeaderCellItemTemplate="${i}"
            ${oo({property:"cellElements",filter:Ke('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${_("slottedCellElements")}></slot>
        </template>
    `};var un=(o,e)=>x`
        <template
            tabindex="-1"
            role="${t=>!t.cellType||t.cellType==="default"?"gridcell":t.cellType}"
            class="
            ${t=>t.cellType==="columnheader"?"column-header":t.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `;var hn=(o,e)=>x`
    <template
        role="checkbox"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        tabindex="${t=>t.disabled?null:0}"
        @keypress="${(t,i)=>t.keypressHandler(i.event)}"
        @click="${(t,i)=>t.clickHandler(i.event)}"
        class="${t=>t.readOnly?"readonly":""} ${t=>t.checked?"checked":""} ${t=>t.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${e.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${_("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;var fi=class extends k{},fo=class extends ho(fi){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var it=class extends fo{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{this.readOnly||e.key===xe&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}};l([u({attribute:"readonly",mode:"boolean"})],it.prototype,"readOnly",void 0);l([f],it.prototype,"defaultSlottedNodes",void 0);l([f],it.prototype,"indeterminate",void 0);function mi(o){return Wr(o)&&(o.getAttribute("role")==="option"||o instanceof HTMLOptionElement)}var ce=class extends k{constructor(e,t,i,r){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),i&&(this.defaultSelected=i),r&&(this.selected=r),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){if(typeof t=="boolean"){this.ariaChecked=t?"true":"false";return}this.ariaChecked=null}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return(e=this.value)!==null&&e!==void 0?e:this.text}get text(){var e,t;return(t=(e=this.textContent)===null||e===void 0?void 0:e.replace(/\s+/g," ").trim())!==null&&t!==void 0?t:""}set value(e){let t=`${e??""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),y.notify(this,"value")}get value(){var e;return y.track(this,"value"),(e=this._value)!==null&&e!==void 0?e:this.text}get form(){return this.proxy?this.proxy.form:null}};l([f],ce.prototype,"checked",void 0);l([f],ce.prototype,"content",void 0);l([f],ce.prototype,"defaultSelected",void 0);l([u({mode:"boolean"})],ce.prototype,"disabled",void 0);l([u({attribute:"selected",mode:"boolean"})],ce.prototype,"selectedAttribute",void 0);l([f],ce.prototype,"selected",void 0);l([u({attribute:"value",mode:"fromView"})],ce.prototype,"initialValue",void 0);var Ge=class{};l([f],Ge.prototype,"ariaChecked",void 0);l([f],Ge.prototype,"ariaPosInSet",void 0);l([f],Ge.prototype,"ariaSelected",void 0);l([f],Ge.prototype,"ariaSetSize",void 0);L(Ge,S);L(ce,X,Ge);var j=class o extends k{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return(e=this.selectedOptions[0])!==null&&e!==void 0?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,t;return(t=(e=this.options)===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0}get options(){return y.track(this,"options"),this._options}set options(e){this._options=e,y.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){let t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&e!==null&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){let e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter(i=>i.text.trim().match(t))}getSelectableIndex(e=this.selectedIndex,t){let i=e>t?-1:e<t?1:0,r=e+i,n=null;switch(i){case-1:{n=this.options.reduceRight((s,a,c)=>!s&&!a.disabled&&c<r?a:s,n);break}case 1:{n=this.options.reduce((s,a,c)=>!s&&!a.disabled&&c>r?a:s,n);break}}return this.options.indexOf(n)}handleChange(e,t){t==="selected"&&(o.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions())}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,o.TYPE_AHEAD_TIMEOUT_MS),!(e.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;let t=e.key;switch(t){case se:{e.shiftKey||(e.preventDefault(),this.selectFirstOption());break}case ee:{e.shiftKey||(e.preventDefault(),this.selectNextOption());break}case te:{e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break}case ae:{e.preventDefault(),this.selectLastOption();break}case bt:return this.focusAndScrollOptionIntoView(),!0;case ve:case je:return!0;case xe:if(this.typeaheadExpired)return!0;default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var i;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((i=this.options[this.selectedIndex])===null||i===void 0)&&i.disabled&&typeof e=="number"){let r=this.getSelectableIndex(e,t),n=r>-1?r:e;this.selectedIndex=n,t===n&&this.selectedIndexChanged(t,n);return}this.setSelectedOptions()}selectedOptionsChanged(e,t){var i;let r=t.filter(o.slottedOptionFilter);(i=this.options)===null||i===void 0||i.forEach(n=>{let s=y.getNotifier(n);s.unsubscribe(this,"selected"),n.selected=r.includes(n),s.subscribe(this,"selected")})}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(i=>!i.disabled))!==null&&t!==void 0?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=qr(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(i=>i.defaultSelected))!==null&&t!==void 0?t:-1}setSelectedOptions(){var e,t,i;!((e=this.options)===null||e===void 0)&&e.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(i=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.id)!==null&&i!==void 0?i:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce((r,n)=>(mi(n)&&r.push(n),r),[]);let i=`${this.options.length}`;this.options.forEach((r,n)=>{r.id||(r.id=ot("option-")),r.ariaPosInSet=`${n+1}`,r.ariaSetSize=i}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){let i=this.getTypeaheadMatches();if(i.length){let r=this.options.indexOf(i[0]);r>-1&&(this.selectedIndex=r)}this.typeaheadExpired=!1}}};j.slottedOptionFilter=o=>mi(o)&&!o.hidden;j.TYPE_AHEAD_TIMEOUT_MS=1e3;l([u({mode:"boolean"})],j.prototype,"disabled",void 0);l([f],j.prototype,"selectedIndex",void 0);l([f],j.prototype,"selectedOptions",void 0);l([f],j.prototype,"slottedOptions",void 0);l([f],j.prototype,"typeaheadBuffer",void 0);var we=class{};l([f],we.prototype,"ariaActiveDescendant",void 0);l([f],we.prototype,"ariaDisabled",void 0);l([f],we.prototype,"ariaExpanded",void 0);l([f],we.prototype,"ariaMultiSelectable",void 0);L(we,S);L(j,we);var Bt={above:"above",below:"below"};function Lt(o){let e=o.parentElement;if(e)return e;{let t=o.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}function pn(o,e){let t=e;for(;t!==null;){if(t===o)return!0;t=Lt(t)}return!1}var Ce=document.createElement("div");function qa(o){return o instanceof Ve}var Mt=class{setProperty(e,t){v.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){v.queueUpdate(()=>this.target.removeProperty(e))}},gi=class extends Mt{constructor(e){super();let t=new CSSStyleSheet;t[Kt]=!0,this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(M.create([t]))}},vi=class extends Mt{constructor(){super();let e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}},xi=class extends Mt{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);let{sheet:e}=this.style;if(e){let t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}},mo=class{constructor(e){this.store=new Map,this.target=null;let t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),y.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(this.target!==null)for(let[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),v.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,t)})}removeProperty(e){this.store.delete(e),v.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,t){let{sheet:i}=this.style;if(i){let r=i.insertRule(":host{}",i.cssRules.length);this.target=i.cssRules[r].style}else this.target=null}};l([f],mo.prototype,"target",void 0);var yi=class{constructor(e){this.target=e.style}setProperty(e,t){v.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){v.queueUpdate(()=>this.target.removeProperty(e))}},We=class o{setProperty(e,t){o.properties[e]=t;for(let i of o.roots.values())rt.getOrCreate(o.normalizeRoot(i)).setProperty(e,t)}removeProperty(e){delete o.properties[e];for(let t of o.roots.values())rt.getOrCreate(o.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){let{roots:t}=o;if(!t.has(e)){t.add(e);let i=rt.getOrCreate(this.normalizeRoot(e));for(let r in o.properties)i.setProperty(r,o.properties[r])}}static unregisterRoot(e){let{roots:t}=o;if(t.has(e)){t.delete(e);let i=rt.getOrCreate(o.normalizeRoot(e));for(let r in o.properties)i.removeProperty(r)}}static normalizeRoot(e){return e===Ce?document:e}};We.roots=new Set;We.properties={};var bi=new WeakMap,Ga=v.supportsAdoptedStyleSheets?gi:mo,rt=Object.freeze({getOrCreate(o){if(bi.has(o))return bi.get(o);let e;return o===Ce?e=new We:o instanceof Document?e=v.supportsAdoptedStyleSheets?new vi:new xi:qa(o)?e=new Ga(o):e=new yi(o),bi.set(o,e),e}});var he=class o extends Ze{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=o.uniqueId(),o.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new o({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return o.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){let t=W.getOrCreate(e).get(this);if(t!==void 0)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof o&&(t=this.alias(t)),W.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),W.existsFor(e)&&W.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(Ce,e),this}subscribe(e,t){let i=this.getOrCreateSubscriberSet(t);t&&!W.existsFor(t)&&W.getOrCreate(t),i.has(e)||i.add(e)}unsubscribe(e,t){let i=this.subscribers.get(t||this);i&&i.has(e)&&i.delete(e)}notify(e){let t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(i=>i.handleChange(t)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(i=>i.handleChange(t))}alias(e){return(t=>e.getValueFor(t))}};he.uniqueId=(()=>{let o=0;return()=>(o++,o.toString(16))})();he.tokensById=new Map;var wi=class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){let{token:t,target:i}=e;this.add(t,i)}add(e,t){rt.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(W.getOrCreate(t).get(e)))}remove(e,t){rt.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}},Ci=class{constructor(e,t,i){this.source=e,this.token=t,this.node=i,this.dependencies=new Set,this.observer=y.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){try{this.node.store.set(this.token,this.observer.observe(this.node.target,Le))}catch(e){console.error(e)}}},ki=class{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),y.getNotifier(this).notify(e.id))}get(e){return y.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e),y.getNotifier(this).notify(e.id)}all(){return this.values.entries()}},Ht=new WeakMap,Vt=new WeakMap,W=class o{constructor(e){this.target=e,this.store=new ki,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,i)=>{let r=he.getTokenById(i);r&&(r.notify(this.target),this.updateCSSTokenReflection(t,r))}},Ht.set(e,this),y.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof Ve?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Ht.get(e)||new o(e)}static existsFor(e){return Ht.has(e)}static findParent(e){if(Ce!==e.target){let t=Lt(e.target);for(;t!==null;){if(Ht.has(t))return Ht.get(t);t=Lt(t)}return o.getOrCreate(Ce)}return null}static findClosestAssignedNode(e,t){let i=t;do{if(i.has(e))return i;i=i.parent?i.parent:i.target!==Ce?o.getOrCreate(Ce):null}while(i!==null);return null}get parent(){return Vt.get(this)||null}updateCSSTokenReflection(e,t){if(he.isCSSDesignToken(t)){let i=this.parent,r=this.isReflecting(t);if(i){let n=i.get(t),s=e.get(t);n!==s&&!r?this.reflectToCSS(t):n===s&&r&&this.stopReflectToCSS(t)}else r||this.reflectToCSS(t)}}has(e){return this.assignedValues.has(e)}get(e){let t=this.store.get(e);if(t!==void 0)return t;let i=this.getRaw(e);if(i!==void 0)return this.hydrate(e,i),this.get(e)}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):(t=o.findClosestAssignedNode(e,this))===null||t===void 0?void 0:t.getRaw(e)}set(e,t){he.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),he.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);let t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){let e=o.findParent(this);e&&e.appendChild(this);for(let t of this.assignedValues.keys())t.notify(this.target)}unbind(){this.parent&&Vt.get(this).removeChild(this);for(let e of this.bindingObservers.keys())this.tearDownBindingObserver(e)}appendChild(e){e.parent&&Vt.get(e).removeChild(e);let t=this.children.filter(i=>e.contains(i));Vt.set(e,this),this.children.push(e),t.forEach(i=>e.appendChild(i)),y.getNotifier(this.store).subscribe(e);for(let[i,r]of this.store.all())e.hydrate(i,this.bindingObservers.has(i)?this.getRaw(i):r),e.updateCSSTokenReflection(e.store,i)}removeChild(e){let t=this.children.indexOf(e);if(t!==-1&&this.children.splice(t,1),y.getNotifier(this.store).unsubscribe(e),e.parent!==this)return!1;let i=Vt.delete(e);for(let[r]of this.store.all())e.hydrate(r,e.getRaw(r)),e.updateCSSTokenReflection(e.store,r);return i}contains(e){return pn(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),o.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),o.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){let i=he.getTokenById(t);i&&(this.hydrate(i,this.getRaw(i)),this.updateCSSTokenReflection(this.store,i))}hydrate(e,t){if(!this.has(e)){let i=this.bindingObservers.get(e);he.isDerivedDesignTokenValue(t)?i?i.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(i&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){let i=new Ci(t,e,this);return this.bindingObservers.set(e,i),i}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}};W.cssCustomPropertyReflector=new wi;l([f],W.prototype,"children",void 0);function Wa(o){return he.from(o)}var Nt=Object.freeze({create:Wa,notifyConnection(o){return!o.isConnected||!W.existsFor(o)?!1:(W.getOrCreate(o).bind(),!0)},notifyDisconnection(o){return o.isConnected||!W.existsFor(o)?!1:(W.getOrCreate(o).unbind(),!0)},registerRoot(o=Ce){We.registerRoot(o)},unregisterRoot(o=Ce){We.unregisterRoot(o)}});var $i=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Ti=new Map,bo=new Map,xt=null,zt=A.createInterface(o=>o.cachedCallback(e=>(xt===null&&(xt=new go(null,e)),xt))),Ei=Object.freeze({tagFor(o){return bo.get(o)},responsibleFor(o){let e=o.$$designSystem$$;return e||A.findResponsibleContainer(o).get(zt)},getOrCreate(o){if(!o)return xt===null&&(xt=A.getOrCreateDOMContainer().get(zt)),xt;let e=o.$$designSystem$$;if(e)return e;let t=A.getOrCreateDOMContainer(o);if(t.has(zt,!1))return t.get(zt);{let i=new go(o,t);return t.register(et.instance(zt,i)),i}}});function Qa(o,e,t){return typeof o=="string"?{name:o,type:e,callback:t}:o}var go=class{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>$i.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){let t=this.container,i=[],r=this.disambiguate,n=this.shadowRootMode,s={elementPrefix:this.prefix,tryDefineElement(a,c,d){let h=Qa(a,c,d),{name:p,callback:g,baseClass:$}=h,{type:I}=h,z=p,ue=Ti.get(z),It=!0;for(;ue;){let Fe=r(z,I,ue);switch(Fe){case $i.ignoreDuplicate:return;case $i.definitionCallbackOnly:It=!1,ue=void 0;break;default:z=Fe,ue=Ti.get(z);break}}It&&((bo.has(I)||I===k)&&(I=class extends I{}),Ti.set(z,I),bo.set(I,z),$&&bo.set($,z)),i.push(new Si(t,z,I,n,g,It))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&Nt.registerRoot(this.designTokenRoot)),t.registerWithContext(s,...e);for(let a of i)a.callback(a),a.willDefine&&a.definition!==null&&a.definition.define();return this}},Si=class{constructor(e,t,i,r,n,s){this.container=e,this.name=t,this.type=i,this.shadowRootMode=r,this.callback=n,this.willDefine=s,this.definition=null}definePresentation(e){co.define(this.name,e,this.container)}defineElement(e){this.definition=new ge(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return Ei.tagFor(e)}};var fn=(o,e)=>x`
    <template role="${t=>t.role}" aria-orientation="${t=>t.orientation}"></template>
`;var Ii={separator:"separator",presentation:"presentation"};var yt=class extends k{constructor(){super(...arguments),this.role=Ii.separator,this.orientation=mt.horizontal}};l([u],yt.prototype,"role",void 0);l([u],yt.prototype,"orientation",void 0);var mn=(o,e)=>x`
    <template
        aria-checked="${t=>t.ariaChecked}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-posinset="${t=>t.ariaPosInSet}"
        aria-selected="${t=>t.ariaSelected}"
        aria-setsize="${t=>t.ariaSetSize}"
        class="${t=>[t.checked&&"checked",t.selected&&"selected",t.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${ne(o,e)}
        <span class="content" part="content">
            <slot ${_("content")}></slot>
        </span>
        ${re(o,e)}
    </template>
`;var nt=class extends j{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return(e=this.options)===null||e===void 0?void 0:e.filter(t=>t.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var i,r;this.ariaActiveDescendant=(r=(i=this.options[t])===null||i===void 0?void 0:i.id)!==null&&r!==void 0?r:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;let e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((t,i)=>{t.checked=Ft(i,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,i)=>{t.checked=Ft(i,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,i)=>{t.checked=Ft(i,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((t,i)=>{t.checked=Ft(i,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);let i=(t=e.target)===null||t===void 0?void 0:t.closest("[role=option]");if(!(!i||i.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(i),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;let{key:t,shiftKey:i}=e;switch(this.shouldSkipFocus=!1,t){case se:{this.checkFirstOption(i);return}case ee:{this.checkNextOption(i);return}case te:{this.checkPreviousOption(i);return}case ae:{this.checkLastOption(i);return}case bt:return this.focusAndScrollOptionIntoView(),!0;case je:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case xe:if(e.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var i;this.ariaMultiSelectable=t?"true":null,(i=this.options)===null||i===void 0||i.forEach(r=>{r.checked=t?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView())}sizeChanged(e,t){var i;let r=Math.max(0,parseInt((i=t?.toFixed())!==null&&i!==void 0?i:"",10));r!==t&&v.queueUpdate(()=>{this.size=r})}toggleSelectedForAllCheckedOptions(){let e=this.checkedOptions.filter(i=>!i.disabled),t=!e.every(i=>i.selected);e.forEach(i=>i.selected=t),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(!this.multiple){super.typeaheadBufferChanged(e,t);return}if(this.$fastController.isConnected){let i=this.getTypeaheadMatches(),r=this.options.indexOf(i[0]);r>-1&&(this.activeIndex=r,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(e=!1){this.options.forEach(t=>t.checked=this.multiple?!1:void 0),e||(this.rangeStartIndex=-1)}};l([f],nt.prototype,"activeIndex",void 0);l([u({mode:"boolean"})],nt.prototype,"multiple",void 0);l([u({converter:q})],nt.prototype,"size",void 0);var Ai=class extends k{},vo=class extends Oe(Ai){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var Oi={email:"email",password:"password",tel:"tel",text:"text",url:"url"};var U=class extends vo{constructor(){super(...arguments),this.type=Oi.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&v.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};l([u({attribute:"readonly",mode:"boolean"})],U.prototype,"readOnly",void 0);l([u({mode:"boolean"})],U.prototype,"autofocus",void 0);l([u],U.prototype,"placeholder",void 0);l([u],U.prototype,"type",void 0);l([u],U.prototype,"list",void 0);l([u({converter:q})],U.prototype,"maxlength",void 0);l([u({converter:q})],U.prototype,"minlength",void 0);l([u],U.prototype,"pattern",void 0);l([u({converter:q})],U.prototype,"size",void 0);l([u({mode:"boolean"})],U.prototype,"spellcheck",void 0);l([f],U.prototype,"defaultSlottedNodes",void 0);var wt=class{};L(wt,S);L(U,X,wt);var bn=44,gn=(o,e)=>x`
    <template
        role="progressbar"
        aria-valuenow="${t=>t.value}"
        aria-valuemin="${t=>t.min}"
        aria-valuemax="${t=>t.max}"
        class="${t=>t.paused?"paused":""}"
    >
        ${ht(t=>typeof t.value=="number",x`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${t=>bn*t.percentComplete/100}px ${bn}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,x`
                <slot name="indeterminate" slot="indeterminate">
                    ${e.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;var Re=class extends k{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){let e=typeof this.min=="number"?this.min:0,t=typeof this.max=="number"?this.max:100,i=typeof this.value=="number"?this.value:0,r=t-e;this.percentComplete=r===0?0:Math.fround((i-e)/r*100)}};l([u({converter:q})],Re.prototype,"value",void 0);l([u({converter:q})],Re.prototype,"min",void 0);l([u({converter:q})],Re.prototype,"max",void 0);l([u({mode:"boolean"})],Re.prototype,"paused",void 0);l([f],Re.prototype,"percentComplete",void 0);var vn=(o,e)=>x`
    <template
        role="radiogroup"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @click="${(t,i)=>t.clickHandler(i.event)}"
        @keydown="${(t,i)=>t.keydownHandler(i.event)}"
        @focusout="${(t,i)=>t.focusOutHandler(i.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${t=>t.orientation===mt.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${_({property:"slottedRadioButtons",filter:Ke("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;var pe=class extends k{constructor(){super(...arguments),this.orientation=mt.horizontal,this.radioChangeHandler=e=>{let t=e.target;t.checked&&(this.slottedRadioButtons.forEach(i=>{i!==t&&(i.checked=!1,this.isInsideFoundationToolbar||i.setAttribute("tabindex","-1"))}),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{let i=e[t];this.isInsideToolbar||(i.setAttribute("tabindex","0"),i.readOnly?this.slottedRadioButtons.forEach(r=>{r!==i&&r.setAttribute("tabindex","-1")}):(i.checked=!0,this.selectedRadio=i)),this.focusedRadio=i,i.focus()},this.moveRightOffGroup=()=>{var e;(e=this.nextElementSibling)===null||e===void 0||e.focus()},this.moveLeftOffGroup=()=>{var e;(e=this.previousElementSibling)===null||e===void 0||e.focus()},this.focusOutHandler=e=>{let t=this.slottedRadioButtons,i=e.target,r=i!==null?t.indexOf(i):0,n=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(n===0&&r===n||n===t.length-1&&n===r)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach(s=>{s!==this.selectedRadio&&s.setAttribute("tabindex","-1")}))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach(s=>{s!==this.focusedRadio&&s.setAttribute("tabindex","-1")}))),!0},this.clickHandler=e=>{let t=e.target;if(t){let i=this.slottedRadioButtons;t.checked||i.indexOf(t)===0?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,i)=>e===t.length&&this.isInsideToolbar&&i===ze,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===Ne,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{let t=this.slottedRadioButtons,i=0;if(i=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(i,t,e.key)){this.moveRightOffGroup();return}else i===t.length&&(i=0);for(;i<t.length&&t.length>1;)if(t[i].disabled){if(this.focusedRadio&&i===t.indexOf(this.focusedRadio))break;if(i+1>=t.length){if(this.isInsideToolbar)break;i=0}else i+=1}else{this.moveToRadioByIndex(t,i);break}},this.moveLeft=e=>{let t=this.slottedRadioButtons,i=0;if(i=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,i=i<0?t.length-1:i,this.shouldMoveOffGroupToTheLeft(t,e.key)){this.moveLeftOffGroup();return}for(;i>=0&&t.length>1;)if(t[i].disabled){if(this.focusedRadio&&i===t.indexOf(this.focusedRadio))break;i-1<0?i=t.length-1:i-=1}else{this.moveToRadioByIndex(t,i);break}},this.keydownHandler=e=>{let t=e.key;if(t in Kr&&this.isInsideFoundationToolbar)return!0;switch(t){case ve:{this.checkFocusedRadio();break}case ze:case ee:{this.direction===Ue.ltr?this.moveRight(e):this.moveLeft(e);break}case Ne:case te:{this.direction===Ue.ltr?this.moveLeft(e):this.moveRight(e);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.disabled?e.disabled=!0:e.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)}),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return(e=this.parentToolbar)!==null&&e!==void 0?e:!1}get isInsideFoundationToolbar(){var e;return!!(!((e=this.parentToolbar)===null||e===void 0)&&e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=on(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(e=>{e.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){let e=this.slottedRadioButtons.filter(r=>r.hasAttribute("checked")),t=e?e.length:0;if(t>1){let r=e[t-1];r.checked=!0}let i=!1;if(this.slottedRadioButtons.forEach(r=>{this.name!==void 0&&r.setAttribute("name",this.name),this.disabled&&(r.disabled=!0),this.readOnly&&(r.readOnly=!0),this.value&&this.value===r.value?(this.selectedRadio=r,this.focusedRadio=r,r.checked=!0,r.setAttribute("tabindex","0"),i=!0):(this.isInsideFoundationToolbar||r.setAttribute("tabindex","-1"),r.checked=!1),r.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){let r=this.slottedRadioButtons.filter(s=>s.hasAttribute("checked")),n=r!==null?r.length:0;if(n>0&&!i){let s=r[n-1];s.checked=!0,this.focusedRadio=s,s.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}};l([u({attribute:"readonly",mode:"boolean"})],pe.prototype,"readOnly",void 0);l([u({attribute:"disabled",mode:"boolean"})],pe.prototype,"disabled",void 0);l([u],pe.prototype,"name",void 0);l([u],pe.prototype,"value",void 0);l([u],pe.prototype,"orientation",void 0);l([f],pe.prototype,"childItems",void 0);l([f],pe.prototype,"slottedRadioButtons",void 0);var xn=(o,e)=>x`
    <template
        role="radio"
        class="${t=>t.checked?"checked":""} ${t=>t.readOnly?"readonly":""}"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @keypress="${(t,i)=>t.keypressHandler(i.event)}"
        @click="${(t,i)=>t.clickHandler(i.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${_("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;var Ri=class extends k{},xo=class extends ho(Ri){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var st=class extends xo{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(e.key===xe){!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),((e=this.parentElement)===null||e===void 0?void 0:e.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(t=this.defaultChecked)!==null&&t!==void 0?t:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(e){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}};l([u({attribute:"readonly",mode:"boolean"})],st.prototype,"readOnly",void 0);l([f],st.prototype,"name",void 0);l([f],st.prototype,"defaultSlottedNodes",void 0);function yn(o,e,t){return o.nodeType!==Node.TEXT_NODE?!0:typeof o.nodeValue=="string"&&!!o.nodeValue.trim().length}var Di=class extends nt{},yo=class extends Oe(Di){constructor(){super(...arguments),this.proxy=document.createElement("select")}};var fe=class extends yo{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=ot("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,v.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return y.track(this,"value"),this._value}set value(e){var t,i,r,n,s,a,c;let d=`${this._value}`;if(!((t=this._options)===null||t===void 0)&&t.length){let h=this._options.findIndex($=>$.value===e),p=(r=(i=this._options[this.selectedIndex])===null||i===void 0?void 0:i.value)!==null&&r!==void 0?r:null,g=(s=(n=this._options[h])===null||n===void 0?void 0:n.value)!==null&&s!==void 0?s:null;(h===-1||p!==g)&&(e="",this.selectedIndex=h),e=(c=(a=this.firstSelectedOption)===null||a===void 0?void 0:a.value)!==null&&c!==void 0?c:e}d!==e&&(this._value=e,super.valueChanged(d,e),y.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,i;this.$fastController.isConnected&&(this.value=(i=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.value)!==null&&i!==void 0?i:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){let e=this.getBoundingClientRect(),i=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>i?Bt.above:Bt.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Bt.above?~~e.top:~~i}get displayValue(){var e,t;return y.track(this,"displayValue"),(t=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)!==null&&t!==void 0?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){let t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;let i=e.relatedTarget;if(this.isSameNode(i)){this.focus();return}!((t=this.options)===null||t===void 0)&&t.includes(i)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),t==="value"&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach(i=>{y.getNotifier(i).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,t),this.options.forEach(i=>{y.getNotifier(i).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=((t=this.listbox)===null||t===void 0?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var i;super.selectedOptionsChanged(e,t),(i=this.options)===null||i===void 0||i.forEach((r,n)=>{var s;let a=(s=this.proxy)===null||s===void 0?void 0:s.options.item(n);a&&(a.selected=r.selected)})}setDefaultSelectedOption(){var e;let t=(e=this.options)!==null&&e!==void 0?e:Array.from(this.children).filter(j.slottedOptionFilter),i=t?.findIndex(r=>r.hasAttribute("selected")||r.selected||r.value===this.value);if(i!==-1){this.selectedIndex=i;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{let t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)}))}keydownHandler(e){super.keydownHandler(e);let t=e.key||e.key.charCodeAt(0);switch(t){case xe:{e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case se:case ae:{e.preventDefault();break}case ve:{e.preventDefault(),this.open=!this.open;break}case je:{this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break}case bt:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===ee||t===te)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&y.notify(this,"displayValue")}};l([u({attribute:"open",mode:"boolean"})],fe.prototype,"open",void 0);l([pr],fe.prototype,"collapsible",null);l([f],fe.prototype,"control",void 0);l([u({attribute:"position"})],fe.prototype,"positionAttribute",void 0);l([f],fe.prototype,"position",void 0);l([f],fe.prototype,"maxHeight",void 0);var jt=class{};l([f],jt.prototype,"ariaControls",void 0);L(jt,we);L(fe,X,jt);var wn=(o,e)=>x`
    <template
        class="${t=>[t.collapsible&&"collapsible",t.collapsible&&t.open&&"open",t.disabled&&"disabled",t.collapsible&&t.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${t=>t.ariaActiveDescendant}"
        aria-controls="${t=>t.ariaControls}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-haspopup="${t=>t.collapsible?"listbox":null}"
        aria-multiselectable="${t=>t.ariaMultiSelectable}"
        ?open="${t=>t.open}"
        role="combobox"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,i)=>t.clickHandler(i.event)}"
        @focusin="${(t,i)=>t.focusinHandler(i.event)}"
        @focusout="${(t,i)=>t.focusoutHandler(i.event)}"
        @keydown="${(t,i)=>t.keydownHandler(i.event)}"
        @mousedown="${(t,i)=>t.mousedownHandler(i.event)}"
    >
        ${ht(t=>t.collapsible,x`
                <div
                    class="control"
                    part="control"
                    ?disabled="${t=>t.disabled}"
                    ${B("control")}
                >
                    ${ne(o,e)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${t=>t.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${e.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${re(o,e)}
                </div>
            `)}
        <div
            class="listbox"
            id="${t=>t.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${t=>t.disabled}"
            ?hidden="${t=>t.collapsible?!t.open:!1}"
            ${B("listbox")}
        >
            <slot
                ${_({filter:j.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;var Cn=(o,e)=>x`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;var wo=class extends k{};var kn=(o,e)=>x`
    <template slot="tab" role="tab" aria-disabled="${t=>t.disabled}">
        <slot></slot>
    </template>
`;var Ut=class extends k{};l([u({mode:"boolean"})],Ut.prototype,"disabled",void 0);var $n=(o,e)=>x`
    <template class="${t=>t.orientation}">
        ${ne(o,e)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${_("tabs")}></slot>

            ${ht(t=>t.showActiveIndicator,x`
                    <div
                        ${B("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${re(o,e)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${_("tabpanels")}></slot>
        </div>
    </template>
`;var Co={vertical:"vertical",horizontal:"horizontal"},de=class extends k{constructor(){super(...arguments),this.orientation=Co.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>e.getAttribute("aria-disabled")==="true",this.isHiddenElement=e=>e.hasAttribute("hidden"),this.isFocusableElement=e=>!this.isDisabledElement(e)&&!this.isHiddenElement(e),this.setTabs=()=>{let e="gridColumn",t="gridRow",i=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((r,n)=>{if(r.slot==="tab"){let s=this.activeTabIndex===n&&this.isFocusableElement(r);this.activeindicator&&this.isFocusableElement(r)&&(this.showActiveIndicator=!0);let a=this.tabIds[n],c=this.tabpanelIds[n];r.setAttribute("id",a),r.setAttribute("aria-selected",s?"true":"false"),r.setAttribute("aria-controls",c),r.addEventListener("click",this.handleTabClick),r.addEventListener("keydown",this.handleTabKeyDown),r.setAttribute("tabindex",s?"0":"-1"),s&&(this.activetab=r,this.activeid=a)}r.style[e]="",r.style[t]="",r.style[i]=`${n+1}`,this.isHorizontal()?r.classList.remove("vertical"):r.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((e,t)=>{let i=this.tabIds[t],r=this.tabpanelIds[t];e.setAttribute("id",r),e.setAttribute("aria-labelledby",i),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")})},this.handleTabClick=e=>{let t=e.currentTarget;t.nodeType===1&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case Ne:e.preventDefault(),this.adjustBackward(e);break;case ze:e.preventDefault(),this.adjustForward(e);break}else switch(e.key){case te:e.preventDefault(),this.adjustBackward(e);break;case ee:e.preventDefault(),this.adjustForward(e);break}switch(e.key){case se:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case ae:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=e=>{let t=this.tabs,i=0;for(i=this.activetab?t.indexOf(this.activetab)+1:1,i===t.length&&(i=0);i<t.length&&t.length>1;)if(this.isFocusableElement(t[i])){this.moveToTabByIndex(t,i);break}else{if(this.activetab&&i===t.indexOf(this.activetab))break;i+1>=t.length?i=0:i+=1}},this.adjustBackward=e=>{let t=this.tabs,i=0;for(i=this.activetab?t.indexOf(this.activetab)-1:0,i=i<0?t.length-1:i;i>=0&&t.length>1;)if(this.isFocusableElement(t[i])){this.moveToTabByIndex(t,i);break}else i-1<0?i=t.length-1:i-=1},this.moveToTabByIndex=(e,t)=>{let i=e[t];this.activetab=i,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,i.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(i=>i.id===e),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(e=>{var t;return(t=e.getAttribute("id"))!==null&&t!==void 0?t:`tab-${ot()}`})}getTabPanelIds(){return this.tabpanels.map(e=>{var t;return(t=e.getAttribute("id"))!==null&&t!==void 0?t:`panel-${ot()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===Co.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;let e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",i=this.isHorizontal()?"offsetLeft":"offsetTop",r=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;let n=this.activeIndicatorRef[i];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;let s=n-r;this.activeIndicatorRef.style.transform=`${t}(${s}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(e){let t=this.tabs.filter(s=>this.isFocusableElement(s)),i=t.indexOf(this.activetab),r=en(0,t.length-1,i+e),n=this.tabs.indexOf(t[r]);n>-1&&this.moveToTabByIndex(this.tabs,n)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}};l([u],de.prototype,"orientation",void 0);l([u],de.prototype,"activeid",void 0);l([f],de.prototype,"tabs",void 0);l([f],de.prototype,"tabpanels",void 0);l([u({mode:"boolean"})],de.prototype,"activeindicator",void 0);l([f],de.prototype,"activeIndicatorRef",void 0);l([f],de.prototype,"showActiveIndicator",void 0);L(de,X);var Pi=class extends k{},ko=class extends Oe(Pi){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}};var qt={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};var N=class extends ko{constructor(){super(...arguments),this.resize=qt.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};l([u({mode:"boolean"})],N.prototype,"readOnly",void 0);l([u],N.prototype,"resize",void 0);l([u({mode:"boolean"})],N.prototype,"autofocus",void 0);l([u({attribute:"form"})],N.prototype,"formId",void 0);l([u],N.prototype,"list",void 0);l([u({converter:q})],N.prototype,"maxlength",void 0);l([u({converter:q})],N.prototype,"minlength",void 0);l([u],N.prototype,"name",void 0);l([u],N.prototype,"placeholder",void 0);l([u({converter:q,mode:"fromView"})],N.prototype,"cols",void 0);l([u({converter:q,mode:"fromView"})],N.prototype,"rows",void 0);l([u({mode:"boolean"})],N.prototype,"spellcheck",void 0);l([f],N.prototype,"defaultSlottedNodes",void 0);L(N,wt);var Tn=(o,e)=>x`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
            ${t=>t.resize!==qt.none?`resize-${t.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${_("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${t=>t.autofocus}"
            cols="${t=>t.cols}"
            ?disabled="${t=>t.disabled}"
            form="${t=>t.form}"
            list="${t=>t.list}"
            maxlength="${t=>t.maxlength}"
            minlength="${t=>t.minlength}"
            name="${t=>t.name}"
            placeholder="${t=>t.placeholder}"
            ?readonly="${t=>t.readOnly}"
            ?required="${t=>t.required}"
            rows="${t=>t.rows}"
            ?spellcheck="${t=>t.spellcheck}"
            :value="${t=>t.value}"
            aria-atomic="${t=>t.ariaAtomic}"
            aria-busy="${t=>t.ariaBusy}"
            aria-controls="${t=>t.ariaControls}"
            aria-current="${t=>t.ariaCurrent}"
            aria-describedby="${t=>t.ariaDescribedby}"
            aria-details="${t=>t.ariaDetails}"
            aria-disabled="${t=>t.ariaDisabled}"
            aria-errormessage="${t=>t.ariaErrormessage}"
            aria-flowto="${t=>t.ariaFlowto}"
            aria-haspopup="${t=>t.ariaHaspopup}"
            aria-hidden="${t=>t.ariaHidden}"
            aria-invalid="${t=>t.ariaInvalid}"
            aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
            aria-label="${t=>t.ariaLabel}"
            aria-labelledby="${t=>t.ariaLabelledby}"
            aria-live="${t=>t.ariaLive}"
            aria-owns="${t=>t.ariaOwns}"
            aria-relevant="${t=>t.ariaRelevant}"
            aria-roledescription="${t=>t.ariaRoledescription}"
            @input="${(t,i)=>t.handleTextInput()}"
            @change="${t=>t.handleChange()}"
            ${B("control")}
        ></textarea>
    </template>
`;var Sn=(o,e)=>x`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${_({property:"defaultSlottedNodes",filter:yn})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${ne(o,e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                pattern="${t=>t.pattern}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                ?spellcheck="${t=>t.spellcheck}"
                :value="${t=>t.value}"
                type="${t=>t.type}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${B("control")}
            />
            ${re(o,e)}
        </div>
    </template>
`;var Q="not-allowed";var Ja=":host([hidden]){display:none}";function T(o){return`${Ja}:host{display:${o}}`}var R=Qr()?"focus-visible":"focus";function En(o){return Ei.getOrCreate(o).withPrefix("vscode")}function An(o){window.addEventListener("load",()=>{new MutationObserver(()=>{In(o)}).observe(document.body,{attributes:!0,attributeFilter:["class"]}),In(o)})}function In(o){let e=getComputedStyle(document.body),t=document.querySelector("body");if(t){let i=t.getAttribute("data-vscode-theme-kind");for(let[r,n]of o){let s=e.getPropertyValue(r).toString();if(i==="vscode-high-contrast")s.length===0&&n.name.includes("background")&&(s="transparent"),n.name==="button-icon-hover-background"&&(s="transparent");else if(i==="vscode-high-contrast-light"){if(s.length===0&&n.name.includes("background"))switch(n.name){case"button-primary-hover-background":s="#0F4A85";break;case"button-secondary-hover-background":s="transparent";break;case"button-icon-hover-background":s="transparent";break}}else n.name==="contrast-active-border"&&(s="transparent");n.setValueFor(t,s)}}}var On=new Map,Rn=!1;function m(o,e){let t=Nt.create(o);if(e){if(e.includes("--fake-vscode-token")){let i="id"+Math.random().toString(16).slice(2);e=`${e}-${i}`}On.set(e,t)}return Rn||(An(On),Rn=!0),t}var Dn=m("background","--vscode-editor-background").withDefault("#1e1e1e"),w=m("border-width").withDefault(1),$o=m("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518"),rb=m("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df"),ke=m("corner-radius").withDefault(0),$e=m("corner-radius-round").withDefault(2),b=m("design-unit").withDefault(4),K=m("disabled-opacity").withDefault(.4),E=m("focus-border","--vscode-focusBorder").withDefault("#007fd4"),F=m("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol"),nb=m("font-weight","--vscode-font-weight").withDefault("400"),D=m("foreground","--vscode-foreground").withDefault("#cccccc"),Ct=m("input-height").withDefault("26"),kt=m("input-min-width").withDefault("100px"),O=m("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),P=m("type-ramp-base-line-height").withDefault("normal"),To=m("type-ramp-minus1-font-size").withDefault("11px"),So=m("type-ramp-minus1-line-height").withDefault("16px"),sb=m("type-ramp-minus2-font-size").withDefault("9px"),ab=m("type-ramp-minus2-line-height").withDefault("16px"),lb=m("type-ramp-plus1-font-size").withDefault("16px"),cb=m("type-ramp-plus1-line-height").withDefault("24px"),Pn=m("scrollbarWidth").withDefault("10px"),Fn=m("scrollbarHeight").withDefault("10px"),_n=m("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),Bn=m("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),Ln=m("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),Eo=m("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),Io=m("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),$t=m("button-border","--vscode-button-border").withDefault("transparent"),Fi=m("button-icon-background").withDefault("transparent"),Mn=m("button-icon-corner-radius").withDefault("5px"),Hn=m("button-icon-outline-offset").withDefault(0),_i=m("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),Vn=m("button-icon-padding").withDefault("3px"),at=m("button-primary-background","--vscode-button-background").withDefault("#0e639c"),Bi=m("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),Li=m("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),Ao=m("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),Nn=m("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),zn=m("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),jn=m("button-padding-horizontal").withDefault("11px"),Un=m("button-padding-vertical").withDefault("4px"),me=m("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),Qe=m("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),qn=m("checkbox-corner-radius").withDefault(3),db=m("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0"),Te=m("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771"),De=m("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),Gn=m("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),Wn=m("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),Gt=m("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),be=m("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c"),ub=m("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0"),Qn=m("dropdown-list-max-height").withDefault("200px"),Pe=m("input-background","--vscode-input-background").withDefault("#3c3c3c"),Oo=m("input-foreground","--vscode-input-foreground").withDefault("#cccccc"),hb=m("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc"),Mi=m("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff"),Jn=m("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),Xn=m("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),Yn=m("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),Je=m("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),Zn=m("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799"),pb=m("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e"),fb=m("panel-view-border","--vscode-panel-border").withDefault("#80808059"),Kn=m("tag-corner-radius").withDefault("2px");var es=(o,e)=>C`
	${T("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${F};
		font-size: ${To};
		line-height: ${So};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${Eo};
		border: calc(${w} * 1px) solid ${$t};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${Io};
		display: flex;
		height: calc(${b} * 4px);
		justify-content: center;
		min-width: calc(${b} * 4px + 2px);
		min-height: calc(${b} * 4px + 2px);
		padding: 3px 6px;
	}
`;var Hi=class extends Ae{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}},ts=Hi.compose({baseName:"badge",template:uo,styles:es});function os(o,e,t,i){var r=arguments.length,n=r<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,i);else for(var a=o.length-1;a>=0;a--)(s=o[a])&&(n=(r<3?s(n):r>3?s(e,t,n):s(e,t))||n);return r>3&&n&&Object.defineProperty(e,t,n),n}var Xa=C`
	${T("inline-flex")} :host {
		outline: none;
		font-family: ${F};
		font-size: ${O};
		line-height: ${P};
		color: ${Bi};
		background: ${at};
		border-radius: calc(${$e} * 1px);
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${Un} ${jn};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${w} * 1px) solid ${$t};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${Li};
	}
	:host(:active) {
		background: ${at};
	}
	.control:${R} {
		outline: calc(${w} * 1px) solid ${E};
		outline-offset: calc(${w} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${K};
		background: ${at};
		cursor: ${Q};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${b} * 4px);
		height: calc(${b} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,Ya=C`
	:host([appearance='primary']) {
		background: ${at};
		color: ${Bi};
	}
	:host([appearance='primary']:hover) {
		background: ${Li};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${at};
	}
	:host([appearance='primary']) .control:${R} {
		outline: calc(${w} * 1px) solid ${E};
		outline-offset: calc(${w} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${at};
	}
`,Za=C`
	:host([appearance='secondary']) {
		background: ${Ao};
		color: ${Nn};
	}
	:host([appearance='secondary']:hover) {
		background: ${zn};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${Ao};
	}
	:host([appearance='secondary']) .control:${R} {
		outline: calc(${w} * 1px) solid ${E};
		outline-offset: calc(${w} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${Ao};
	}
`,Ka=C`
	:host([appearance='icon']) {
		background: ${Fi};
		border-radius: ${Mn};
		color: ${D};
	}
	:host([appearance='icon']:hover) {
		background: ${_i};
		outline: 1px dotted ${$o};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${Vn};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${_i};
	}
	:host([appearance='icon']) .control:${R} {
		outline: calc(${w} * 1px) solid ${E};
		outline-offset: ${Hn};
	}
	:host([appearance='icon'][disabled]) {
		background: ${Fi};
	}
`,is=(o,e)=>C`
	${Xa}
	${Ya}
	${Za}
	${Ka}
`;var Ro=class extends Z{connectedCallback(){if(super.connectedCallback(),!this.appearance){let e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,i){e==="appearance"&&i==="icon"&&(this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")),e==="aria-label"&&(this.ariaLabel=i),e==="disabled"&&(this.disabled=i!==null)}};os([u],Ro.prototype,"appearance",void 0);var rs=Ro.compose({baseName:"button",template:rn,styles:is,shadowOptions:{delegatesFocus:!0}});var ns=(o,e)=>C`
	${T("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${b} * 1px) 0;
		user-select: none;
		font-size: ${O};
		line-height: ${P};
	}
	.control {
		position: relative;
		width: calc(${b} * 4px + 2px);
		height: calc(${b} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${qn} * 1px);
		border: calc(${w} * 1px) solid ${Qe};
		background: ${me};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${F};
		color: ${D};
		padding-inline-start: calc(${b} * 2px + 2px);
		margin-inline-end: calc(${b} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${D};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${D};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${me};
		border-color: ${Qe};
	}
	:host(:enabled) .control:active {
		background: ${me};
		border-color: ${E};
	}
	:host(:${R}) .control {
		border: calc(${w} * 1px) solid ${E};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${Q};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${K};
	}
`;var Vi=class extends it{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}},ss=Vi.compose({baseName:"checkbox",template:hn,styles:ns,checkedIndicator:`
		<svg 
			part="checked-indicator"
			class="checked-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
			/>
		</svg>
	`,indeterminateIndicator:`
		<div part="indeterminate-indicator" class="indeterminate-indicator"></div>
	`});var as=(o,e)=>C`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`;var ls=(o,e)=>C`
	:host {
		display: grid;
		padding: calc((${b} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${Dn};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${Gn};
		outline: 1px dotted ${$o};
		outline-offset: -1px;
	}
`;var cs=(o,e)=>C`
	:host {
		padding: calc(${b} * 1px) calc(${b} * 3px);
		color: ${D};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${F};
		font-size: ${O};
		line-height: ${P};
		font-weight: 400;
		border: solid calc(${w} * 1px) transparent;
		border-radius: calc(${ke} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${R}),
	:host(:focus),
	:host(:active) {
		background: ${Te};
		border: solid calc(${w} * 1px) ${E};
		color: ${De};
		outline: none;
	}
	:host(:${R}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${De} !important;
	}
`;var Ni=class extends V{connectedCallback(){super.connectedCallback(),this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}},ds=Ni.compose({baseName:"data-grid",baseClass:V,template:cn,styles:as}),zi=class extends H{},us=zi.compose({baseName:"data-grid-row",baseClass:H,template:dn,styles:ls}),ji=class extends le{},hs=ji.compose({baseName:"data-grid-cell",baseClass:le,template:un,styles:cs});var ps=(o,e)=>C`
	${T("block")} :host {
		border: none;
		border-top: calc(${w} * 1px) solid ${Wn};
		box-sizing: content-box;
		height: 0;
		margin: calc(${b} * 1px) 0;
		width: 100%;
	}
`;var Ui=class extends yt{},fs=Ui.compose({baseName:"divider",template:fn,styles:ps});var ms=(o,e)=>C`
	${T("inline-flex")} :host {
		background: ${Gt};
		border-radius: calc(${$e} * 1px);
		box-sizing: border-box;
		color: ${D};
		contain: contents;
		font-family: ${F};
		height: calc(${Ct} * 1px);
		position: relative;
		user-select: none;
		min-width: ${kt};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${w} * 1px) solid ${be};
		border-radius: calc(${$e} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${O};
		line-height: ${P};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${Gt};
		border: calc(${w} * 1px) solid ${E};
		border-radius: calc(${$e} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${Qn};
		padding: 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${R}) .control {
		border-color: ${E};
	}
	:host(:not([disabled]):hover) {
		background: ${Gt};
		border-color: ${be};
	}
	:host(:${R}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${Te};
		border: calc(${w} * 1px) solid transparent;
		color: ${De};
	}
	:host([disabled]) {
		cursor: ${Q};
		opacity: ${K};
	}
	:host([disabled]) .control {
		cursor: ${Q};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${Gt};
		color: ${D};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${E};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${E};
	}
	:host([open][position='above']) .listbox {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${Ct} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${Ct} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${b} * 4px);
		min-width: calc(${b} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`;var qi=class extends fe{},bs=qi.compose({baseName:"dropdown",template:wn,styles:ms,indicator:`
		<svg 
			class="select-indicator"
			part="select-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
			/>
		</svg>
	`});var gs=(o,e)=>C`
	${T("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${Jn};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${F};
		font-size: ${O};
		line-height: ${P};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${w} * 1px) solid transparent;
		border-radius: calc(${ke} * 1px);
		box-sizing: border-box;
		color: inherit;
		cursor: inherit;
		fill: inherit;
		font-family: inherit;
		height: inherit;
		padding: 0;
		outline: none;
		text-decoration: none;
		word-break: break-word;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:hover) {
		color: ${Mi};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${Mi};
	}
	:host(:${R}) .control,
	:host(:focus) .control {
		border: calc(${w} * 1px) solid ${E};
	}
`;var Gi=class extends Y{},vs=Gi.compose({baseName:"link",template:tn,styles:gs,shadowOptions:{delegatesFocus:!0}});var xs=(o,e)=>C`
	${T("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${ke};
		border: calc(${w} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${D};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${O};
		line-height: ${P};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${b} / 2) * 1px)
			calc((${b} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${R}) {
		border-color: ${E};
		background: ${Te};
		color: ${D};
	}
	:host([aria-selected='true']) {
		background: ${Te};
		border: calc(${w} * 1px) solid transparent;
		color: ${De};
	}
	:host(:active) {
		background: ${Te};
		color: ${De};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${Te};
		border: calc(${w} * 1px) solid transparent;
		color: ${De};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${Te};
		color: ${D};
	}
	:host([disabled]) {
		cursor: ${Q};
		opacity: ${K};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;var Wi=class extends ce{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}},ys=Wi.compose({baseName:"option",template:mn,styles:xs});var ws=(o,e)=>C`
	${T("grid")} :host {
		box-sizing: border-box;
		font-family: ${F};
		font-size: ${O};
		line-height: ${P};
		color: ${D};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${b} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${b} * 1px) calc(${b} * 1px) 0;
		box-sizing: border-box;
	}
	.start,
	.end {
		align-self: center;
	}
	.activeIndicator {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
		height: calc((${b} / 4) * 1px);
		justify-self: center;
		background: ${Je};
		margin: 0;
		border-radius: calc(${ke} * 1px);
	}
	.activeIndicatorTransition {
		transition: transform 0.01s linear;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
`;var Cs=(o,e)=>C`
	${T("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${F};
		font-size: ${O};
		line-height: ${P};
		height: calc(${b} * 7px);
		padding: calc(${b} * 1px) 0;
		color: ${Zn};
		fill: currentcolor;
		border-radius: calc(${ke} * 1px);
		border: solid calc(${w} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${Je};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${Je};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${Je};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${Je};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${Je};
		fill: currentcolor;
	}
	:host(:${R}) {
		outline: none;
		border: solid calc(${w} * 1px) ${Yn};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${b} * 2px);
	}
`;var ks=(o,e)=>C`
	${T("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${w} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${O};
		line-height: ${P};
		padding: 10px calc((${b} + 2) * 1px);
	}
`;var Qi=class extends de{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation=Co.horizontal),this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}},$s=Qi.compose({baseName:"panels",template:$n,styles:ws}),Ji=class extends Ut{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}},Ts=Ji.compose({baseName:"panel-tab",template:kn,styles:Cs}),Xi=class extends wo{},Ss=Xi.compose({baseName:"panel-view",template:Cn,styles:ks});var Es=(o,e)=>C`
	${T("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${b} * 7px);
		width: calc(${b} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${b} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${Xn};
		stroke-width: calc(${b} / 2 * 1px);
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
	}
	@keyframes spin-infinite {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`;var Yi=class extends Re{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(e,t,i){e==="value"&&this.removeAttribute("value")}},Is=Yi.compose({baseName:"progress-ring",template:gn,styles:Es,indeterminateIndicator:`
		<svg class="progress" part="progress" viewBox="0 0 16 16">
			<circle
				class="background"
				part="background"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
			<circle
				class="indeterminate-indicator-1"
				part="indeterminate-indicator-1"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
		</svg>
	`});var As=(o,e)=>C`
	${T("flex")} :host {
		align-items: flex-start;
		margin: calc(${b} * 1px) 0;
		flex-direction: column;
	}
	.positioning-region {
		display: flex;
		flex-wrap: wrap;
	}
	:host([orientation='vertical']) .positioning-region {
		flex-direction: column;
	}
	:host([orientation='horizontal']) .positioning-region {
		flex-direction: row;
	}
	::slotted([slot='label']) {
		color: ${D};
		font-size: ${O};
		margin: calc(${b} * 1px) 0;
	}
`;var Zi=class extends pe{connectedCallback(){super.connectedCallback();let e=this.querySelector("label");if(e){let t="radio-group-"+Math.random().toString(16).slice(2);e.setAttribute("id",t),this.setAttribute("aria-labelledby",t)}}},Os=Zi.compose({baseName:"radio-group",template:vn,styles:As});var Rs=(o,e)=>C`
	${T("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${O};
		line-height: ${P};
		margin: calc(${b} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${me};
		border-radius: 999px;
		border: calc(${w} * 1px) solid ${Qe};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${b} * 4px);
		position: relative;
		outline: none;
		width: calc(${b} * 4px);
	}
	.label {
		color: ${D};
		cursor: pointer;
		font-family: ${F};
		margin-inline-end: calc(${b} * 2px + 2px);
		padding-inline-start: calc(${b} * 2px + 2px);
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.control,
	.checked-indicator {
		flex-shrink: 0;
	}
	.checked-indicator {
		background: ${D};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${b} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${me};
		border-color: ${Qe};
	}
	:host(:not([disabled])) .control:active {
		background: ${me};
		border-color: ${E};
	}
	:host(:${R}) .control {
		border: calc(${w} * 1px) solid ${E};
	}
	:host([aria-checked='true']) .control {
		background: ${me};
		border: calc(${w} * 1px) solid ${Qe};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${me};
		border: calc(${w} * 1px) solid ${Qe};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${me};
		border: calc(${w} * 1px) solid ${E};
	}
	:host([aria-checked="true"]:${R}:not([disabled])) .control {
		border: calc(${w} * 1px) solid ${E};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Q};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${K};
	}
`;var Ki=class extends st{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Radio")}},Ds=Ki.compose({baseName:"radio",template:xn,styles:Rs,checkedIndicator:`
		<div part="checked-indicator" class="checked-indicator"></div>
	`});var Ps=(o,e)=>C`
	${T("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${F};
		font-size: ${To};
		line-height: ${So};
	}
	.control {
		background-color: ${Eo};
		border: calc(${w} * 1px) solid ${$t};
		border-radius: ${Kn};
		color: ${Io};
		padding: calc(${b} * 0.5px) calc(${b} * 1px);
		text-transform: uppercase;
	}
`;var er=class extends Ae{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}},Fs=er.compose({baseName:"tag",template:uo,styles:Ps});var _s=(o,e)=>C`
	${T("inline-block")} :host {
		font-family: ${F};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${Oo};
		background: ${Pe};
		border-radius: calc(${$e} * 1px);
		border: calc(${w} * 1px) solid ${be};
		font: inherit;
		font-size: ${O};
		line-height: ${P};
		padding: calc(${b} * 2px + 1px);
		width: 100%;
		min-width: ${kt};
		resize: none;
	}
	.control:hover:enabled {
		background: ${Pe};
		border-color: ${be};
	}
	.control:active:enabled {
		background: ${Pe};
		border-color: ${E};
	}
	.control:hover,
	.control:${R},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${Pn};
		height: ${Fn};
	}
	.control::-webkit-scrollbar-corner {
		background: ${Pe};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${_n};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${Bn};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${Ln};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${E};
	}
	:host([resize='both']) .control {
		resize: both;
	}
	:host([resize='horizontal']) .control {
		resize: horizontal;
	}
	:host([resize='vertical']) .control {
		resize: vertical;
	}
	.label {
		display: block;
		color: ${D};
		cursor: pointer;
		font-size: ${O};
		line-height: ${P};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Q};
	}
	:host([disabled]) {
		opacity: ${K};
	}
	:host([disabled]) .control {
		border-color: ${be};
	}
`;var tr=class extends N{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text area")}},Bs=tr.compose({baseName:"text-area",template:Tn,styles:_s,shadowOptions:{delegatesFocus:!0}});var Ls=(o,e)=>C`
	${T("inline-block")} :host {
		font-family: ${F};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${Oo};
		background: ${Pe};
		border-radius: calc(${$e} * 1px);
		border: calc(${w} * 1px) solid ${be};
		height: calc(${Ct} * 1px);
		min-width: ${kt};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${b} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${b} * 2px + 1px);
		font-size: ${O};
		line-height: ${P};
	}
	.control:hover,
	.control:${R},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${D};
		cursor: pointer;
		font-size: ${O};
		line-height: ${P};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${b} * 4px);
		height: calc(${b} * 4px);
	}
	.start {
		margin-inline-start: calc(${b} * 2px);
	}
	.end {
		margin-inline-end: calc(${b} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${Pe};
		border-color: ${be};
	}
	:host(:active:not([disabled])) .root {
		background: ${Pe};
		border-color: ${E};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${E};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Q};
	}
	:host([disabled]) {
		opacity: ${K};
	}
	:host([disabled]) .control {
		border-color: ${be};
	}
`;var or=class extends U{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}},Ms=or.compose({baseName:"text-field",template:Sn,styles:Ls,shadowOptions:{delegatesFocus:!0}});var Hs={vsCodeBadge:ts,vsCodeButton:rs,vsCodeCheckbox:ss,vsCodeDataGrid:ds,vsCodeDataGridCell:hs,vsCodeDataGridRow:us,vsCodeDivider:fs,vsCodeDropdown:bs,vsCodeLink:vs,vsCodeOption:ys,vsCodePanels:$s,vsCodePanelTab:Ts,vsCodePanelView:Ss,vsCodeProgressRing:Is,vsCodeRadioGroup:Os,vsCodeRadio:Ds,vsCodeTag:Fs,vsCodeTextArea:Bs,vsCodeTextField:Ms,register(o,...e){if(o)for(let t in this)t!=="register"&&this[t]().register(o,...e)}};function Wt(o){let e="";for(let t of o)switch(t){case" ":e+='<span class="text-muted">\xB7</span>';break;case`
`:e+='<span class="text-muted">\u21B5</span> <br>';break;case"	":e+='<span class="text-muted">  \u2192  </span>';break;case"\r":e+='<span class="text-muted">\u23CE</span>';break;default:e+=t}return e}var Qt=class{run(e,t,i){return e===t?"passed":"failed"}},ir=class{run(e,t,i){if(e===t)return"passed";if(!i.separator)return"failed";let r=e.split(i.separator),n=t.split(i.separator);return r.length!==n.length?"failed":(r.sort(),n.sort(),r.join(i.separator)===n.join(i.separator)?"passed":"failed")}},rr=class{standarize(e,t,i,r){if(e.startsWith(i)&&e.endsWith(r)){let n=e.slice(i.length,-r.length);return i+n.split(t).sort().join(t)+r}return""}run(e,t,i){if(e===t)return"passed";if(!i.separator1||!i.separator2||!i.starting||!i.ending)return"failed";let r=e.split(i.separator1),n=t.split(i.separator1);if(r.length!==n.length)return"failed";let s=r.map(c=>this.standarize(c,i.separator2||"",i.starting||"",i.ending||"")).sort(),a=n.map(c=>this.standarize(c,i.separator2||"",i.starting||"",i.ending||"")).sort();return s.join(i.separator1)===a.join(i.separator1)?"passed":"failed"}},ex={std:{checker:"std",runner:new Qt,implemented:!0,driver:"std"},loose:{checker:"loose",runner:new Qt,implemented:!0,driver:"std"},elastic:{checker:"elastic",runner:new ir,implemented:!0,driver:"std"},elastic2:{checker:"elastic2",runner:new rr,implemented:!0,driver:"std"},unk:{checker:"unk",runner:new Qt,implemented:!1,driver:"std"}};var el=()=>`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"/>
    </svg>`,tl=()=>`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor" d="M8 19V5l11 7z"/>
    </svg>
`,ol=()=>`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor" d="M2 5v14c0 .86 1.012 1.318 1.659.753l8-7a1 1 0 0 0 0-1.506l-8-7C3.012 3.682 2 4.141 2 5m11 0v14c0 .86 1.012 1.318 1.659.753l8-7a1 1 0 0 0 0-1.506l-8-7C14.012 3.682 13 4.141 13 5"/>
    </svg>
`,il=()=>`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor" d="m3.4 20.4l17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a.993.993 0 0 0-1.39.91L2 9.12c0 .5.37.93.87.99L17 12L2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91"/>
    </svg>`,rl=()=>`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 20q-3.35 0-5.675-2.325T4 12t2.325-5.675T12 4q1.725 0 3.3.712T18 6.75V4h2v7h-7V9h4.2q-.8-1.4-2.187-2.2T12 6Q9.5 6 7.75 7.75T6 12t1.75 4.25T12 18q1.925 0 3.475-1.1T17.65 14h2.1q-.7 2.65-2.85 4.325T12 20"/>
    </svg>`,Vs=()=>`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"/>
    </svg>
`,Do=()=>`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"/>
    </svg>
`,nl=()=>`
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor" d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"/>
    </svg>
`;var Tt={add:el,run:tl,"run-all":ol,submit:il,"run-again":rl,edit:nl,none:()=>""};var Ns=({text:o,id:e,title:t,icon:i,disabled:r=!1})=>`
    <vscode-button id="${e}" class="${i?"icon-button":"button"}" title="${t}" 
                   ${o===""?'style="transform: scale(0.8)"':""} 
                   ${r?"disabled":""}>
        ${i?`<div class="icon">${Tt[i]()}</div>`:""}
        ${o&&`<div class="text">${o}</div>`}
    </vscode-button>
`;var sx=new TextEncoder,ax=new TextDecoder("utf-8");function sl(o,e,t){return`
        <div class="metadata select-none">
            <div class="toggle-minimize">
                <div class="title">
                    <div class="icon">${Do()}</div>
                    ${o} ${e}
                </div>
                <span class="running-text"></span>
            </div>
            ${t}
        </div>
    `}function zs(o,{actual:e,displayed:t},i){let r=i.copyToClipboard?'<div class="text-button copy-to-clipboard" title="Copy to clipboard">Copy</div>':"";return`
        <div class="container ${i.cssClass||""}">
            <div class="title">
                ${o}
                ${r}
            </div>
            <div id="input" class="selectable textarea">
                <pre data-original-text="${e}">${t}</pre>
            </div>
        </div>    
    `}function al(o){let{index:e,input:t,solution:i}=o,r={actual:t,displayed:Wt(t)},n={actual:i||"",displayed:Wt(i||"")};return`
        <div class="testcase custom" id="custom-testcase-${e}" data-type="custom-std">
            ${sl("Testcase",e,`<div id="edit-testcase-${e}" class="small-button" title="Edit this testcase">
                    <div class="icon">${Tt.edit()}</div>
                    <span>Edit</span>
                </div>
                <div id="edit-solution-testcase-${e}" class="small-button" title="Edit solution">
                    <div class="icon">${Tt.edit()}</div>
                    <span>Edit sol</span>
                </div>
                <div id="run-custom-testcase-${e}" class="small-button" title="Run this testcase only">
                    <div class="icon">${Tt.run()}</div>
                    <span>Run</span>
                </div>`)}
            <div class="content">
                <div class="two-column">
                    ${zs("Input",r,{copyToClipboard:!0})}
                    ${i?zs("Expected Output:",n,{copyToClipboard:!0}):""}

                    <div class="container received">
                        <div class="title">Received Output:</div>
                        <div id="received" class="selectable textarea"><pre></pre></div>
                    </div>
                </div>
            </div>
        </div>
    `}function ll(o){return`
        <h2>
            ${o}
            <span class="text-button collapse-testcases select-none">
                Collapse All
            </span>
        </h2>
    `}function js(o){return o?`
        <vscode-divider></vscode-divider>
        <div class="header">
            ${ll("Custom Testcases")}
        </div>
        <div class="panels">
            ${o.map(al).join("")}
        </div>
        <div class="flex flex-row justify-end mt-4">
            <div class="buttons">
                ${Ns({id:"add-new-testcase",text:"Add new testcase",title:"Add new testcase",icon:"add"})}
            </div>
        </div>

    `:""}En().register(Hs);var Et=acquireVsCodeApi(),Us=Et.getState();Us&&console.log("Restoring previous state:",Us);window.addEventListener("load",cl);window.addEventListener("message",ul);var nr=new Map;document.querySelectorAll(".testcase").forEach(o=>{nr.set(o.id,!1)});function cl(){bl();let o=document.getElementById("data").dataset;Et.setState(o),Ys(o.fileExists==="true")}function dl(o){let e=Et.getState();Et.setState({...e,...o})}function ul(o){let e=o.data;switch(console.log("Received message from extension",e.command,e.data),e.command){case"update-custom-testcases":gl(e.data.customTestcases),Ys(e.data.fileExists),Jt("custom"),dl({fileExists:e.data.fileExists});break;case"update-testcase-status":{let{testcaseId:t,status:i,output:r}=e.data;qs(t,i,r,"normal"),Jt("normal");break}case"update-custom-testcase-status":{let{testcaseId:t,status:i,output:r,withSolution:n}=e.data;qs(t,i,r,"custom",n),Jt("custom");break}case"update-submission-status":vl(e.data.status);break;default:console.log("Unknown command",e.command)}}function hl(o,e){if(o===null)throw new Error(e)}function Gs(o,e=""){Et.postMessage({command:o,data:e})}function lr(o){let e=document.getElementById(o);return e||(console.warn(`Button with id ${o} not found`),null)}var Po=o=>function(){Gs(o,{testcaseId:parseInt(this.id.split("-").slice(-1)[0])})},pl=Po("run-testcase"),Ws=Po("edit-testcase"),Qs=Po("edit-testcase-solution"),Js=Po("run-custom-testcase");function fl(){let e=this.parentElement.nextElementSibling.querySelector("pre");hl(e,"Pre element not found!");let t=e.getAttribute("data-original-text")||e.textContent||"";navigator.clipboard.writeText(t);let i=this.textContent;this.textContent="Copied!",setTimeout(()=>{this.textContent=i},1e3)}var St={normal:!1,custom:!1};function Jt(o){let e=document.querySelectorAll(`#${o}-testcases > .panels > .testcase > .content`);console.log("contentElems",e);let t=[];for(let s of e)t.push(s.style.display==="none");let i=t.every(s=>s),r=t.every(s=>!s);i?St[o]=!0:r&&(St[o]=!1);let n=document.querySelector(`#${o}-testcases > .header > h2 > .collapse-testcases`);n.textContent=St[o]?"Expand All":"Collapse All"}var sr=o=>function(){let e=this.querySelector(".icon"),t=this.parentElement?.nextElementSibling,i=t.style.display==="none";e.innerHTML=i?Do():Vs(),t.style.display=i?"flex":"none",Jt(o)},ar=o=>function(){St[o]=!St[o],document.querySelectorAll(`.testcase.${o} > .content`).forEach(e=>{e.style.display=St[o]?"none":"flex"}),Jt(o)};function ml(){let o=this.closest(".testcase"),e=parseInt(o.id.split("-")[1]);switch(o.dataset.type){case"std":{let t=document.getElementById(`testcase-${e}`),i=t.querySelector(".expected pre"),r=t.querySelector(".received pre"),n=i.getAttribute("data-original-text")||i.textContent||"",s=r.getAttribute("data-original-text")||r.textContent||"";Et.postMessage({command:"show-diff",data:{testcaseId:e,expected:n,received:s}});break}case"graphic":{console.log("TODO: Graphic comparison!");break}default:console.error(`Unknown type of testcase: '${o.dataset.type}'`)}}var J=o=>e=>e.addEventListener("click",o);function Xs(o){for(let[e,t]of o)lr(e)?.addEventListener("click",()=>{Gs(t)})}function bl(){Xs([["new-file","new-file"],["submit-to-jutge","submit-to-jutge"],["run-all-testcases","run-all-testcases"],["add-new-testcase","add-new-testcase"],["open-existing-file","open-existing-file"]]),document.querySelectorAll('[id^="run-testcase-"]').forEach(J(pl)),document.querySelectorAll('[id^="edit-testcase-"]').forEach(J(Ws)),document.querySelectorAll('[id^="edit-solution-testcase-"]').forEach(J(Qs)),document.querySelectorAll('[id^="run-custom-testcase-"]').forEach(J(Js)),document.querySelectorAll(".copy-to-clipboard").forEach(J(fl)),document.querySelectorAll("#normal-testcases .toggle-minimize").forEach(J(sr("normal"))),document.querySelectorAll("#custom-testcases .toggle-minimize").forEach(J(sr("custom"))),document.querySelectorAll(".compare-diff").forEach(J(ml)),document.querySelectorAll("#normal-testcases .collapse-testcases").forEach(J(ar("normal"))),document.querySelectorAll("#custom-testcases .collapse-testcases").forEach(J(ar("custom")))}function gl(o){let e=document.getElementById("custom-testcases");if(!e)throw new Error('Div with id "custom-testcases" not found');e.innerHTML=js(o),e.querySelectorAll('[id^="edit-testcase-"]').forEach(J(Ws)),e.querySelectorAll('[id^="edit-solution-testcase-"]').forEach(J(Qs)),e.querySelectorAll('[id^="run-custom-testcase-"]').forEach(J(Js)),Xs([["add-new-testcase","add-new-testcase"]]),document.querySelectorAll("#custom-testcases .toggle-minimize").forEach(J(sr("custom"))),document.querySelectorAll("#custom-testcases .collapse-testcases").forEach(J(ar("custom")))}function qs(o,e,t,i,r=!0){let n=i==="normal"?`testcase-${o}`:`custom-testcase-${o}`,s=document.getElementById(n),a=s.querySelector(".content"),c=s.querySelector(".running-text"),d=s.querySelector(".container.received"),h=(g,$)=>{c.textContent=g,s.style.borderLeftColor=$,c.style.color=$},p=g=>{if(s.dataset.type==="graphic"){let $=s.querySelector("#received");$.textContent="";let I=document.createElement("img");I.src=`data:image/png;base64,${t}`,$.appendChild(I)}else{let $=s.querySelector("#received pre");$.setAttribute("data-original-text",g),$.innerHTML=Wt(g)}d.style.display="block"};switch(e){case"running":h("Running...","yellow"),d.style.display="none",a.classList.remove("compare");break;case"failed":h("Failed","red"),p(t),a.style.display="flex",a.classList.add("compare"),nr.set(n,!1);break;case"passed":h(i==="normal"?"Passed":"Done","green"),p(t),a.style.display=i==="normal"||r?"none":"flex",a.classList.remove("compare"),nr.set(n,!0);break}}function vl(o){lr("submit-to-jutge").disabled=o==="Pending"}function Ys(o){lr("open-existing-file").disabled=!o}
/*! Bundled license information:

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
