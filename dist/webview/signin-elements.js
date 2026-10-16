(()=>{var de=globalThis,pe=de.ShadowRoot&&(de.ShadyCSS===void 0||de.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ie=Symbol(),We=new WeakMap,oe=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==Ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(pe&&e===void 0){let o=t!==void 0&&t.length===1;o&&(e=We.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&We.set(t,e))}return e}toString(){return this.cssText}},ue=i=>new oe(typeof i=="string"?i:i+"",void 0,Ie),k=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((o,s,n)=>o+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[n+1],i[0]);return new oe(t,i,Ie)},Ke=(i,e)=>{if(pe)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let o=document.createElement("style"),s=de.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=t.cssText,i.appendChild(o)}},ke=pe?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return ue(t)})(i):i;var{is:Ot,defineProperty:Pt,getOwnPropertyDescriptor:It,getOwnPropertyNames:kt,getOwnPropertySymbols:Tt,getPrototypeOf:Bt}=Object,fe=globalThis,Ye=fe.trustedTypes,Vt=Ye?Ye.emptyScript:"",Mt=fe.reactiveElementPolyfillSupport,se=(i,e)=>i,ie={toAttribute(i,e){switch(e){case Boolean:i=i?Vt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},me=(i,e)=>!Ot(i,e),Ze={attribute:!0,type:String,converter:ie,reflect:!1,useDefault:!1,hasChanged:me};Symbol.metadata??=Symbol("metadata"),fe.litPropertyMetadata??=new WeakMap;var D=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ze){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let o=Symbol(),s=this.getPropertyDescriptor(e,o,t);s!==void 0&&Pt(this.prototype,e,s)}}static getPropertyDescriptor(e,t,o){let{get:s,set:n}=It(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:s,set(r){let l=s?.call(this);n?.call(this,r),this.requestUpdate(e,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ze}static _$Ei(){if(this.hasOwnProperty(se("elementProperties")))return;let e=Bt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(se("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(se("properties"))){let t=this.properties,o=[...kt(t),...Tt(t)];for(let s of o)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[o,s]of t)this.elementProperties.set(o,s)}this._$Eh=new Map;for(let[t,o]of this.elementProperties){let s=this._$Eu(t,o);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let s of o)t.unshift(ke(s))}else e!==void 0&&t.push(ke(e));return t}static _$Eu(e,t){let o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let o of t.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ke(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$ET(e,t){let o=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,o);if(s!==void 0&&o.reflect===!0){let n=(o.converter?.toAttribute!==void 0?o.converter:ie).toAttribute(t,o.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){let o=this.constructor,s=o._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let n=o.getPropertyOptions(s),r=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:ie;this._$Em=s;let l=r.fromAttribute(t,n.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(e,t,o,s=!1,n){if(e!==void 0){let r=this.constructor;if(s===!1&&(n=this[e]),o??=r.getPropertyOptions(e),!((o.hasChanged??me)(n,t)||o.useDefault&&o.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,o))))return;this.C(e,t,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:o,reflect:s,wrapped:n},r){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),n!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[s,n]of o){let{wrapped:r}=n,l=this[s];r!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,n,l)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};D.elementStyles=[],D.shadowRootOptions={mode:"open"},D[se("elementProperties")]=new Map,D[se("finalized")]=new Map,Mt?.({ReactiveElement:D}),(fe.reactiveElementVersions??=[]).push("2.1.2");var Be=globalThis,Ge=i=>i,_e=Be.trustedTypes,Xe=_e?_e.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ve="$lit$",R=`lit$${Math.random().toFixed(9).slice(2)}$`,Me="?"+R,Dt=`<${Me}>`,K=document,re=()=>K.createComment(""),le=i=>i===null||typeof i!="object"&&typeof i!="function",De=Array.isArray,st=i=>De(i)||typeof i?.[Symbol.iterator]=="function",Te=`[ 	
\f\r]`,ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Je=/-->/g,Qe=/>/g,j=RegExp(`>|${Te}(?:([^\\s"'>=/]+)(${Te}*=${Te}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),et=/'/g,tt=/"/g,it=/^(?:script|style|textarea|title)$/i,Re=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),d=Re(1),nt=Re(2),Xt=Re(3),A=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ot=new WeakMap,W=K.createTreeWalker(K,129);function rt(i,e){if(!De(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Xe!==void 0?Xe.createHTML(e):e}var lt=(i,e)=>{let t=i.length-1,o=[],s,n=e===2?"<svg>":e===3?"<math>":"",r=ne;for(let l=0;l<t;l++){let a=i[l],u,b,h=-1,_=0;for(;_<a.length&&(r.lastIndex=_,b=r.exec(a),b!==null);)_=r.lastIndex,r===ne?b[1]==="!--"?r=Je:b[1]!==void 0?r=Qe:b[2]!==void 0?(it.test(b[2])&&(s=RegExp("</"+b[2],"g")),r=j):b[3]!==void 0&&(r=j):r===j?b[0]===">"?(r=s??ne,h=-1):b[1]===void 0?h=-2:(h=r.lastIndex-b[2].length,u=b[1],r=b[3]===void 0?j:b[3]==='"'?tt:et):r===tt||r===et?r=j:r===Je||r===Qe?r=ne:(r=j,s=void 0);let f=r===j&&i[l+1].startsWith("/>")?" ":"";n+=r===ne?a+Dt:h>=0?(o.push(u),a.slice(0,h)+Ve+a.slice(h)+R+f):a+R+(h===-2?l:f)}return[rt(i,n+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]},ae=class i{constructor({strings:e,_$litType$:t},o){let s;this.parts=[];let n=0,r=0,l=e.length-1,a=this.parts,[u,b]=lt(e,t);if(this.el=i.createElement(u,o),W.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=W.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(let h of s.getAttributeNames())if(h.endsWith(Ve)){let _=b[r++],f=s.getAttribute(h).split(R),S=/([.?@])?(.*)/.exec(_);a.push({type:1,index:n,name:S[2],strings:f,ctor:S[1]==="."?ve:S[1]==="?"?ge:S[1]==="@"?xe:Z}),s.removeAttribute(h)}else h.startsWith(R)&&(a.push({type:6,index:n}),s.removeAttribute(h));if(it.test(s.tagName)){let h=s.textContent.split(R),_=h.length-1;if(_>0){s.textContent=_e?_e.emptyScript:"";for(let f=0;f<_;f++)s.append(h[f],re()),W.nextNode(),a.push({type:2,index:++n});s.append(h[_],re())}}}else if(s.nodeType===8)if(s.data===Me)a.push({type:2,index:n});else{let h=-1;for(;(h=s.data.indexOf(R,h+1))!==-1;)a.push({type:7,index:n}),h+=R.length-1}n++}}static createElement(e,t){let o=K.createElement("template");return o.innerHTML=e,o}};function Y(i,e,t=i,o){if(e===A)return e;let s=o!==void 0?t._$Co?.[o]:t._$Cl,n=le(e)?void 0:e._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(i),s._$AT(i,t,o)),o!==void 0?(t._$Co??=[])[o]=s:t._$Cl=s),s!==void 0&&(e=Y(i,s._$AS(i,e.values),s,o)),e}var be=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:o}=this._$AD,s=(e?.creationScope??K).importNode(t,!0);W.currentNode=s;let n=W.nextNode(),r=0,l=0,a=o[0];for(;a!==void 0;){if(r===a.index){let u;a.type===2?u=new J(n,n.nextSibling,this,e):a.type===1?u=new a.ctor(n,a.name,a.strings,this,e):a.type===6&&(u=new ye(n,this,e)),this._$AV.push(u),a=o[++l]}r!==a?.index&&(n=W.nextNode(),r++)}return W.currentNode=K,s}p(e){let t=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}},J=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,o,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),le(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==A&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):st(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&le(this._$AH)?this._$AA.nextSibling.data=e:this.T(K.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=ae.createElement(rt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(t);else{let n=new be(s,this),r=n.u(this.options);n.p(t),this.T(r),this._$AH=n}}_$AC(e){let t=ot.get(e.strings);return t===void 0&&ot.set(e.strings,t=new ae(e)),t}k(e){De(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,s=0;for(let n of e)s===t.length?t.push(o=new i(this.O(re()),this.O(re()),this,this.options)):o=t[s],o._$AI(n),s++;s<t.length&&(this._$AR(o&&o._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let o=Ge(e).nextSibling;Ge(e).remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Z=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,o,s,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=p}_$AI(e,t=this,o,s){let n=this.strings,r=!1;if(n===void 0)e=Y(this,e,t,0),r=!le(e)||e!==this._$AH&&e!==A,r&&(this._$AH=e);else{let l=e,a,u;for(e=n[0],a=0;a<n.length-1;a++)u=Y(this,l[o+a],t,a),u===A&&(u=this._$AH[a]),r||=!le(u)||u!==this._$AH[a],u===p?e=p:e!==p&&(e+=(u??"")+n[a+1]),this._$AH[a]=u}r&&!s&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ve=class extends Z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}},ge=class extends Z{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}},xe=class extends Z{constructor(e,t,o,s,n){super(e,t,o,s,n),this.type=5}_$AI(e,t=this){if((e=Y(this,e,t,0)??p)===A)return;let o=this._$AH,s=e===p&&o!==p||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,n=e!==p&&(o===p||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ye=class{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}},at={M:Ve,P:R,A:Me,C:1,L:lt,R:be,D:st,V:Y,I:J,H:Z,N:ge,U:xe,B:ve,F:ye},Rt=Be.litHtmlPolyfillSupport;Rt?.(ae,J),(Be.litHtmlVersions??=[]).push("3.3.3");var $e=(i,e,t)=>{let o=t?.renderBefore??e,s=o._$litPart$;if(s===void 0){let n=t?.renderBefore??null;o._$litPart$=s=new J(e.insertBefore(re(),n),n,void 0,t??{})}return s._$AI(i),s};var Le=globalThis,T=class extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=$e(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}};T._$litElement$=!0,T.finalized=!0,Le.litElementHydrateSupport?.({LitElement:T});var Lt=Le.litElementPolyfillSupport;Lt?.({LitElement:T});(Le.litElementVersions??=[]).push("4.2.2");var Ht={attribute:!0,type:String,converter:ie,reflect:!1,hasChanged:me},Ut=(i=Ht,e,t)=>{let{kind:o,metadata:s}=t,n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),o==="setter"&&((i=Object.create(i)).wrapped=!0),n.set(t.name,i),o==="accessor"){let{name:r}=t;return{set(l){let a=e.get.call(this);e.set.call(this,l),this.requestUpdate(r,a,i,!0,l)},init(l){return l!==void 0&&this.C(r,void 0,i,l),l}}}if(o==="setter"){let{name:r}=t;return function(l){let a=this[r];e.call(this,l),this.requestUpdate(r,a,i,!0,l)}}throw Error("Unsupported decorator location: "+o)};function c(i){return(e,t)=>typeof t=="object"?Ut(i,e,t):((o,s,n)=>{let r=s.hasOwnProperty(n);return s.constructor.createProperty(n,o),r?Object.getOwnPropertyDescriptor(s,n):void 0})(i,e,t)}function x(i){return c({...i,state:!0,attribute:!1})}var U=(i,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(i,e,t),t);function z(i,e){return(t,o,s)=>{let n=r=>r.renderRoot?.querySelector(i)??null;if(e){let{get:r,set:l}=typeof o=="object"?t:s??(()=>{let a=Symbol();return{get(){return this[a]},set(u){this[a]=u}}})();return U(t,o,{get(){let a=r.call(this);return a===void 0&&(a=n(this),(a!==null||this.hasUpdated)&&l.call(this,a)),a}})}return U(t,o,{get(){return n(this)}})}}function Se(i){return(e,t)=>{let{slot:o,selector:s}=i??{},n="slot"+(o?`[name=${o}]`:":not([name])");return U(e,t,{get(){let r=this.renderRoot?.querySelector(n),l=r?.assignedElements(i)??[];return s===void 0?l:l.filter(a=>a.matches(s))}})}}var C=i=>i??p;var we="2.5.1",ct="__vscodeElements_disableRegistryWarning__",ht=(i,e)=>{console.warn(e?`[VSCode Elements] ${i}
%o`:`${i}
%o`,e)},O=class extends T{get version(){return we}warn(e){ht(e,this)}},B=i=>e=>{if(!customElements.get(i)){customElements.define(i,e);return}if(ct in window)return;let s=document.createElement(i)?.version,n="";s?s!==we?(n+="is already registered by a different version of VSCode Elements. ",n+=`This version is "${we}", while the other one is "${s}".`):n+=`is already registered by the same version of VSCode Elements (${we}).`:n+="is already registered by an unknown custom element handler class.",ht(`The custom element "${i}" ${n}
To suppress this warning, set window.${ct} to true`)};var He=d`
  <span class="icon">
    <svg
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
  </span>
`,dt=nt`<svg
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
</svg>`;var Q={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ee=i=>(...e)=>({_$litDirective$:i,values:e}),F=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var E=ee(class extends F{constructor(i){if(super(i),i.type!==Q.ATTRIBUTE||i.name!=="class"||i.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(e=>i[e]).join(" ")+" "}update(i,[e]){if(this.st===void 0){this.st=new Set,i.strings!==void 0&&(this.nt=new Set(i.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(let o in e)e[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(e)}let t=i.element.classList;for(let o of this.st)o in e||(t.remove(o),this.st.delete(o));for(let o in e){let s=!!e[o];s===this.st.has(o)||this.nt?.has(o)||(s?(t.add(o),this.st.add(o)):(t.remove(o),this.st.delete(o)))}return A}});var{I:zt}=at,pt=i=>i;var ut=()=>document.createComment(""),te=(i,e,t)=>{let o=i._$AA.parentNode,s=e===void 0?i._$AB:e._$AA;if(t===void 0){let n=o.insertBefore(ut(),s),r=o.insertBefore(ut(),s);t=new zt(n,r,i,i.options)}else{let n=t._$AB.nextSibling,r=t._$AM,l=r!==i;if(l){let a;t._$AQ?.(i),t._$AM=i,t._$AP!==void 0&&(a=i._$AU)!==r._$AU&&t._$AP(a)}if(n!==s||l){let a=t._$AA;for(;a!==n;){let u=pt(a).nextSibling;pt(o).insertBefore(a,s),a=u}}}return t},q=(i,e,t=i)=>(i._$AI(e,t),i),Ft={},ft=(i,e=Ft)=>i._$AH=e,mt=i=>i._$AH,Ae=i=>{i._$AR(),i._$AA.remove()};var _t=(i,e,t)=>{let o=new Map;for(let s=e;s<=t;s++)o.set(i[s],s);return o},bt=ee(class extends F{constructor(i){if(super(i),i.type!==Q.CHILD)throw Error("repeat() can only be used in text expressions")}dt(i,e,t){let o;t===void 0?t=e:e!==void 0&&(o=e);let s=[],n=[],r=0;for(let l of i)s[r]=o?o(l,r):r,n[r]=t(l,r),r++;return{values:n,keys:s}}render(i,e,t){return this.dt(i,e,t).values}update(i,[e,t,o]){let s=mt(i),{values:n,keys:r}=this.dt(e,t,o);if(!Array.isArray(s))return this.ut=r,n;let l=this.ut??=[],a=[],u,b,h=0,_=s.length-1,f=0,S=n.length-1;for(;h<=_&&f<=S;)if(s[h]===null)h++;else if(s[_]===null)_--;else if(l[h]===r[f])a[f]=q(s[h],n[f]),h++,f++;else if(l[_]===r[S])a[S]=q(s[_],n[S]),_--,S--;else if(l[h]===r[S])a[S]=q(s[h],n[S]),te(i,a[S+1],s[h]),h++,S--;else if(l[_]===r[f])a[f]=q(s[_],n[f]),te(i,s[h],s[_]),_--,f++;else if(u===void 0&&(u=_t(r,f,S),b=_t(l,h,_)),u.has(l[h]))if(u.has(l[_])){let M=b.get(r[f]),Pe=M!==void 0?s[M]:null;if(Pe===null){let je=te(i,s[h]);q(je,n[f]),a[f]=je}else a[f]=q(Pe,n[f]),te(i,s[h],Pe),s[M]=null;f++}else Ae(s[_]),_--;else Ae(s[h]),h++;for(;f<=S;){let M=te(i,a[S+1]);q(M,n[f]),a[f++]=M}for(;h<=_;){let M=s[h++];M!==null&&Ae(M)}return this.ut=r,ft(i,a),A}});function vt(i,e,t){return i?e(i):t?.(i)}var Ue=class extends F{constructor(e){if(super(e),this._prevProperties={},e.type!==Q.PROPERTY||e.name!=="style")throw new Error("The `stylePropertyMap` directive must be used in the `style` property")}update(e,[t]){return Object.entries(t).forEach(([o,s])=>{this._prevProperties[o]!==s&&(o.startsWith("--")?e.element.style.setProperty(o,s):e.element.style[o]=s,this._prevProperties[o]=s)}),A}render(e){return A}},L=ee(Ue);var V=k`
  :host([hidden]) {
    display: none;
  }

  :host([disabled]),
  :host(:disabled) {
    cursor: not-allowed;
    opacity: 0.4;
    pointer-events: none;
  }
`;var qt=[V,k`
    :host {
      color: var(--vscode-icon-foreground, #cccccc);
      display: inline-block;
    }

    .codicon[class*='codicon-'] {
      display: block;
    }

    .icon,
    .button {
      background-color: transparent;
      display: block;
      padding: 0;
    }

    .button {
      border-color: transparent;
      border-style: solid;
      border-width: 1px;
      border-radius: 5px;
      color: currentColor;
      cursor: pointer;
      padding: 2px;
    }

    .button:hover {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
    }

    .button:active {
      background-color: var(
        --vscode-toolbar-activeBackground,
        rgba(99, 102, 103, 0.31)
      );
    }

    .button:focus {
      outline: none;
    }

    .button:focus-visible {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    @keyframes icon-spin {
      100% {
        transform: rotate(360deg);
      }
    }

    .spin {
      animation-name: icon-spin;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  `],gt=qt;var G=function(i,e,t,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},ce,P=ce=class extends O{constructor(){super(...arguments),this.label="",this.name="",this.size=16,this.spin=!1,this.spinDuration=1.5,this.actionIcon=!1,this._onButtonClick=e=>{this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:e}}))}}connectedCallback(){super.connectedCallback();let{href:e,nonce:t}=this._getStylesheetConfig();ce.stylesheetHref=e,ce.nonce=t}_getStylesheetConfig(){if(typeof document>"u")return{nonce:void 0,href:void 0};let e=document.getElementById("vscode-codicon-stylesheet"),t=e?.getAttribute("href")||void 0,o=e?.nonce||void 0;if(!e){let s='To use the Icon component, the codicons.css file must be included in the page with the id "vscode-codicon-stylesheet"! ';s+="See https://vscode-elements.github.io/components/icon/ for more details.",this.warn(s)}return{nonce:o,href:t}}render(){let{stylesheetHref:e,nonce:t}=ce,o=d`<span
      class=${E({codicon:!0,["codicon-"+this.name]:!0,spin:this.spin})}
      .style=${L({animationDuration:String(this.spinDuration)+"s",fontSize:this.size+"px",height:this.size+"px",width:this.size+"px"})}
    ></span>`,s=this.actionIcon?d` <button
          class="button"
          @click=${this._onButtonClick}
          aria-label=${this.label}
        >
          ${o}
        </button>`:d` <span class="icon" aria-hidden="true" role="presentation"
          >${o}</span
        >`;return d`
      <link
        rel="stylesheet"
        href=${C(e)}
        nonce=${C(t)}
      />
      ${s}
    `}};P.styles=gt;P.stylesheetHref="";P.nonce="";G([c()],P.prototype,"label",void 0);G([c({type:String})],P.prototype,"name",void 0);G([c({type:Number})],P.prototype,"size",void 0);G([c({type:Boolean,reflect:!0})],P.prototype,"spin",void 0);G([c({type:Number,attribute:"spin-duration"})],P.prototype,"spinDuration",void 0);G([c({type:Boolean,reflect:!0,attribute:"action-icon"})],P.prototype,"actionIcon",void 0);P=ce=G([B("vscode-icon")],P);function xt(){return navigator.userAgent.indexOf("Linux")>-1?'system-ui, "Ubuntu", "Droid Sans", sans-serif':navigator.userAgent.indexOf("Mac")>-1?"-apple-system, BlinkMacSystemFont, sans-serif":navigator.userAgent.indexOf("Windows")>-1?'"Segoe WPC", "Segoe UI", sans-serif':"sans-serif"}var Nt=ue(xt()),jt=[V,k`
    :host {
      cursor: pointer;
      display: inline-block;
      width: auto;
    }

    :host([block]) {
      display: block;
      width: 100%;
    }

    .base {
      align-items: center;
      background-color: var(--vscode-button-background, #0078d4);
      border-bottom-left-radius: var(--vsc-border-left-radius, 4px);
      border-bottom-right-radius: var(--vsc-border-right-radius, 4px);
      border-bottom-width: 1px;
      border-color: var(--vscode-button-border, transparent);
      border-left-width: var(--vsc-border-left-width, 1px);
      border-right-width: var(--vsc-border-right-width, 1px);
      border-style: solid;
      border-top-left-radius: var(--vsc-border-left-radius, 4px);
      border-top-right-radius: var(--vsc-border-right-radius, 4px);
      border-top-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-button-foreground, #ffffff);
      display: flex;
      font-family: var(--vscode-font-family, ${Nt});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      height: 100%;
      justify-content: center;
      line-height: 22px;
      overflow: hidden;
      padding: 1px calc(13px + var(--vsc-base-additional-right-padding, 0px))
        1px 13px;
      position: relative;
      user-select: none;
      white-space: nowrap;
      width: 100%;
    }

    :host([block]) .base {
      min-height: 28px;
      text-align: center;
      width: 100%;
    }

    .base:after {
      background-color: var(
        --vscode-button-separator,
        rgba(255, 255, 255, 0.4)
      );
      content: var(--vsc-base-after-content);
      display: var(--vsc-divider-display, none);
      position: absolute;
      right: 0;
      top: 4px;
      bottom: 4px;
      width: 1px;
    }

    :host([secondary]) .base:after {
      background-color: var(--vscode-button-secondaryForeground, #cccccc);
      opacity: 0.4;
    }

    :host([secondary]) .base {
      color: var(--vscode-button-secondaryForeground, #cccccc);
      background-color: var(--vscode-button-secondaryBackground, #313131);
      border-color: var(
        --vscode-button-border,
        var(--vscode-button-secondaryBackground, rgba(255, 255, 255, 0.07))
      );
    }

    :host([disabled]) {
      cursor: default;
      opacity: 0.4;
      pointer-events: none;
    }

    :host(:hover) .base {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }

    :host([disabled]:hover) .base {
      background-color: var(--vscode-button-background, #0078d4);
    }

    :host([secondary]:hover) .base {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    :host([secondary][disabled]:hover) .base {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    :host(:focus),
    :host(:active) {
      outline: none;
    }

    :host(:focus) .base {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: 2px;
    }

    :host([disabled]:focus) .base {
      background-color: var(--vscode-button-background, #0078d4);
      outline: 0;
    }

    :host([secondary]:focus) .base {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    :host([secondary][disabled]:focus) .base {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    ::slotted(*) {
      display: inline-block;
      margin-left: 4px;
      margin-right: 4px;
    }

    ::slotted(*:first-child) {
      margin-left: 0;
    }

    ::slotted(*:last-child) {
      margin-right: 0;
    }

    ::slotted(vscode-icon) {
      color: inherit;
    }

    .content {
      display: flex;
      position: relative;
      width: 100%;
      height: 100%;
      padding: 1px 13px;
    }

    :host(:empty) .base,
    .base.icon-only {
      min-height: 24px;
      min-width: 26px;
      padding: 1px 4px;
    }

    slot {
      align-items: center;
      display: flex;
      height: 100%;
    }

    .has-content-before slot[name='content-before'] {
      margin-right: 4px;
    }

    .has-content-after slot[name='content-after'] {
      margin-left: 4px;
    }

    .icon,
    .icon-after {
      color: inherit;
      display: block;
    }

    :host(:not(:empty)) .icon {
      margin-right: 3px;
    }

    :host(:not(:empty)) .icon-after,
    :host([icon]) .icon-after {
      margin-left: 3px;
    }
  `],yt=jt;var y=function(i,e,t,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},v=class extends O{get form(){return this._internals.form}constructor(){super(),this.autofocus=!1,this.tabIndex=0,this.secondary=!1,this.block=!1,this.role="button",this.disabled=!1,this.icon="",this.iconSpin=!1,this.iconAfter="",this.iconAfterSpin=!1,this.focused=!1,this.name=void 0,this.iconOnly=!1,this.type="button",this.value="",this._prevTabindex=0,this._hasContentBefore=!1,this._hasContentAfter=!1,this._handleFocus=()=>{this.focused=!0},this._handleBlur=()=>{this.focused=!1},this.addEventListener("keydown",this._handleKeyDown.bind(this)),this.addEventListener("click",this._handleClick.bind(this)),this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.autofocus&&(this.tabIndex<0&&(this.tabIndex=0),this.updateComplete.then(()=>{this.focus(),this.requestUpdate()})),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}update(e){super.update(e),e.has("value")&&this._internals.setFormValue(this.value),e.has("disabled")&&(this.disabled?(this._prevTabindex=this.tabIndex,this.tabIndex=-1):this.tabIndex=this._prevTabindex)}_executeAction(){this.type==="submit"&&this._internals.form&&this._internals.form.requestSubmit(),this.type==="reset"&&this._internals.form&&this._internals.form.reset()}_handleKeyDown(e){if((e.key==="Enter"||e.key===" ")&&!this.hasAttribute("disabled")){let t=new MouseEvent("click",{bubbles:!0,cancelable:!0});t.synthetic=!0,this.dispatchEvent(t),this._executeAction()}}_handleClick(e){e.synthetic||this.hasAttribute("disabled")||this._executeAction()}_handleSlotChange(e){let t=e.target;t.name==="content-before"&&(this._hasContentBefore=t.assignedElements().length>0),t.name==="content-after"&&(this._hasContentAfter=t.assignedElements().length>0)}render(){let e=this.icon!=="",t=this.iconAfter!=="",o={base:!0,"icon-only":this.iconOnly,"has-content-before":this._hasContentBefore,"has-content-after":this._hasContentAfter},s=e?d`<vscode-icon
          name=${this.icon}
          ?spin=${this.iconSpin}
          spin-duration=${C(this.iconSpinDuration)}
          class="icon"
        ></vscode-icon>`:p,n=t?d`<vscode-icon
          name=${this.iconAfter}
          ?spin=${this.iconAfterSpin}
          spin-duration=${C(this.iconAfterSpinDuration)}
          class="icon-after"
        ></vscode-icon>`:p;return d`
      <div
        class=${E(o)}
        part="base"
        @slotchange=${this._handleSlotChange}
      >
        <slot name="content-before"></slot>
        ${s}
        <slot></slot>
        ${n}
        <slot name="content-after"></slot>
      </div>
    `}};v.styles=yt;v.formAssociated=!0;y([c({type:Boolean,reflect:!0})],v.prototype,"autofocus",void 0);y([c({type:Number,reflect:!0})],v.prototype,"tabIndex",void 0);y([c({type:Boolean,reflect:!0})],v.prototype,"secondary",void 0);y([c({type:Boolean,reflect:!0})],v.prototype,"block",void 0);y([c({reflect:!0})],v.prototype,"role",void 0);y([c({type:Boolean,reflect:!0})],v.prototype,"disabled",void 0);y([c()],v.prototype,"icon",void 0);y([c({type:Boolean,reflect:!0,attribute:"icon-spin"})],v.prototype,"iconSpin",void 0);y([c({type:Number,reflect:!0,attribute:"icon-spin-duration"})],v.prototype,"iconSpinDuration",void 0);y([c({attribute:"icon-after"})],v.prototype,"iconAfter",void 0);y([c({type:Boolean,reflect:!0,attribute:"icon-after-spin"})],v.prototype,"iconAfterSpin",void 0);y([c({type:Number,reflect:!0,attribute:"icon-after-spin-duration"})],v.prototype,"iconAfterSpinDuration",void 0);y([c({type:Boolean,reflect:!0})],v.prototype,"focused",void 0);y([c({type:String,reflect:!0})],v.prototype,"name",void 0);y([c({type:Boolean,reflect:!0,attribute:"icon-only"})],v.prototype,"iconOnly",void 0);y([c({reflect:!0})],v.prototype,"type",void 0);y([c()],v.prototype,"value",void 0);y([x()],v.prototype,"_hasContentBefore",void 0);y([x()],v.prototype,"_hasContentAfter",void 0);v=y([B("vscode-button")],v);var $t=V;var he=function(i,e,t,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},N=class extends O{constructor(){super(...arguments),this.description="",this.selected=!1,this.disabled=!1,this._initialized=!1,this._handleSlotChange=()=>{this._initialized&&this.dispatchEvent(new Event("vsc-option-state-change",{bubbles:!0}))}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._initialized=!0})}willUpdate(e){this._initialized&&(e.has("description")||e.has("value")||e.has("selected")||e.has("disabled"))&&this.dispatchEvent(new Event("vsc-option-state-change",{bubbles:!0}))}render(){return d`<slot @slotchange=${this._handleSlotChange}></slot>`}};N.styles=$t;he([c({type:String})],N.prototype,"value",void 0);he([c({type:String})],N.prototype,"description",void 0);he([c({type:Boolean,reflect:!0})],N.prototype,"selected",void 0);he([c({type:Boolean,reflect:!0})],N.prototype,"disabled",void 0);N=he([B("vscode-option")],N);var ze=(i,e)=>{let t={match:!1,ranges:[]},o=i.toLowerCase(),s=e.toLowerCase(),n=o.split(" "),r=0;return n.forEach((l,a)=>{if(a>0&&(r+=n[a-1].length+1),t.match)return;let u=l.indexOf(s),b=s.length;u===0&&(t.match=!0,t.ranges.push([r+u,Math.min(r+u+b,i.length)]))}),t},Fe=(i,e)=>{let t={match:!1,ranges:[]};return i.toLowerCase().indexOf(e.toLowerCase())===0&&(t.match=!0,t.ranges=[[0,e.length]]),t},qe=(i,e)=>{let t={match:!1,ranges:[]},o=i.toLowerCase().indexOf(e.toLowerCase());return o>-1&&(t.match=!0,t.ranges=[[o,o+e.length]]),t},Ne=(i,e)=>{let t={match:!1,ranges:[]},o=0,s=0,n=e.length-1,r=i.toLowerCase(),l=e.toLowerCase();for(let a=0;a<=n;a++){if(s=r.indexOf(l[a],o),s===-1)return{match:!1,ranges:[]};t.match=!0,t.ranges.push([s,s+1]),o=s+1}return t},St=(i,e,t)=>{let o=[];return i.forEach(s=>{let n;switch(t){case"startsWithPerTerm":n=ze(s.label,e);break;case"startsWith":n=Fe(s.label,e);break;case"contains":n=qe(s.label,e);break;default:n=Ne(s.label,e)}n.match&&o.push({...s,ranges:n.ranges})}),o},Ee=i=>{let e=[];return i===" "?(e.push(d`&nbsp;`),e):(i.indexOf(" ")===0&&e.push(d`&nbsp;`),e.push(d`${i.trimStart().trimEnd()}`),i.lastIndexOf(" ")===i.length-1&&e.push(d`&nbsp;`),e)},wt=(i,e)=>{let t=[],o=e.length;return o<1?d`${i}`:(e.forEach((s,n)=>{let r=i.substring(s[0],s[1]);n===0&&s[0]!==0&&t.push(...Ee(i.substring(0,e[0][0]))),n>0&&n<o&&s[0]-e[n-1][1]!==0&&t.push(...Ee(i.substring(e[n-1][1],s[0]))),t.push(d`<b>${Ee(r)}</b>`),n===o-1&&s[1]<i.length&&t.push(...Ee(i.substring(s[1],i.length)))}),t)};var Ce=class{constructor(e){this._activeIndex=-1,this._options=[],this._filterPattern="",this._filterMethod="fuzzy",this._combobox=!1,this._indexByValue=new Map,this._indexByLabel=new Map,this._selectedIndex=-1,this._selectedIndexes=new Set,this._multiSelect=!1,this._numOfVisibleOptions=0,(this._host=e).addController(this)}hostConnected(){}get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e,this._host.requestUpdate()}get relativeActiveIndex(){return this._options[this._activeIndex]?.filteredIndex??-1}set comboboxMode(e){this._combobox=e,this._host.requestUpdate()}get comboboxMode(){return this._combobox}get multiSelect(){return this._multiSelect}set multiSelect(e){this._selectedIndex=-1,this._selectedIndexes.clear(),this._multiSelect=e,this._host.requestUpdate()}get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._selectedIndex!==-1&&this._options[this._selectedIndex]&&(this._options[this._selectedIndex].selected??=!1);let t=this.getOptionByIndex(e);this._selectedIndex=t?e:-1,this._host.requestUpdate()}get selectedIndexes(){return Array.from(this._selectedIndexes)}set selectedIndexes(e){this._selectedIndexes.forEach(t=>{this._options[t].selected=!1}),this._selectedIndexes=new Set(e),e.forEach(t=>{this._options[t]!==void 0&&(this._options[t].selected=!0)}),this._host.requestUpdate()}set value(e){if(this._multiSelect){let t=e.map(o=>this._indexByValue.get(o)).filter(o=>o!==void 0);this._selectedIndexes=new Set(t)}else this._selectedIndex=this._indexByValue.get(e)??-1;this._host.requestUpdate()}get value(){return this._multiSelect?this._selectedIndexes.size>0?Array.from(this._selectedIndexes).filter(e=>e>=0&&e<this._options.length).map(e=>this._options[e].value):[]:this._selectedIndex>-1&&this._selectedIndex<this._options.length?this._options[this._selectedIndex].value:""}set multiSelectValue(e){let t=e.map(o=>this._indexByValue.get(o)).filter(o=>o!==void 0);this._selectedIndexes=new Set(t)}get multiSelectValue(){return this._selectedIndexes.size>0?Array.from(this._selectedIndexes).map(e=>this._options[e].value):[]}get filterPattern(){return this._filterPattern}set filterPattern(e){e!==this._filterPattern&&(this._filterPattern=e,this._updateState())}get filterMethod(){return this._filterMethod}set filterMethod(e){e!==this._filterMethod&&(this._filterMethod=e,this._updateState())}get options(){return this._options}get numOfVisibleOptions(){return this._numOfVisibleOptions}get numOptions(){return this._options.length}populate(e){this._indexByValue.clear(),this._indexByLabel.clear(),this._options=e.map((t,o)=>(this._indexByValue.set(t.value??"",o),this._indexByLabel.set(t.label??"",o),{description:t.description??"",disabled:t.disabled??!1,label:t.label??"",selected:t.selected??!1,value:t.value??"",index:o,filteredIndex:o,ranges:[],visible:!0})),this._numOfVisibleOptions=this._options.length}add(e){let t=this._options.length,{description:o,disabled:s,label:n,selected:r,value:l}=e,a=!0,u=[];if(this._combobox&&this._filterPattern!==""){let b=this._searchByPattern(n??"");a=b.match,u=b.ranges}this._indexByValue.set(l??"",t),this._indexByLabel.set(n??"",t),r&&(this._selectedIndex=t,this._selectedIndexes.add(t),this._activeIndex=t),this._options.push({index:t,filteredIndex:t,description:o??"",disabled:s??!1,label:n??"",selected:r??!1,value:l??"",visible:a,ranges:u}),a&&(this._numOfVisibleOptions+=1)}clear(){this._options=[],this._indexByValue.clear(),this._indexByLabel.clear(),this._numOfVisibleOptions=0,this._selectedIndex=-1,this._selectedIndexes.clear(),this._activeIndex=-1}getIsIndexSelected(e){return this._multiSelect?this._selectedIndexes.has(e):this._selectedIndex===e}expandMultiSelection(e){e.forEach(t=>{let o=this._indexByValue.get(t)??-1;o!==-1&&this._selectedIndexes.add(o)}),this._host.requestUpdate()}toggleActiveMultiselectOption(){let e=this._options[this._activeIndex]??null;if(!e)return;this._selectedIndexes.has(e.index)?this._selectedIndexes.delete(e.index):this._selectedIndexes.add(e.index),this._host.requestUpdate()}toggleOptionSelected(e){let t=this._selectedIndexes.has(e);this._options[e].selected=!this._options[e].selected,t?this._selectedIndexes.delete(e):this._selectedIndexes.add(e),this._host.requestUpdate()}getActiveOption(){return this._options[this._activeIndex]??null}getSelectedOption(){return this._options[this._selectedIndex]??null}getOptionByIndex(e){return this._options[e]??null}findOptionIndex(e){return this._indexByValue.get(e)??-1}getOptionByValue(e,t=!1){let o=this._indexByValue.get(e)??-1;return o===-1?null:t?this._options[o]:this._options[o].visible?this._options[o]:null}getOptionByLabel(e){let t=this._indexByLabel.get(e)??-1;return t===-1?null:this._options[t]}next(e){let t=e??this._activeIndex,o=-1;for(let s=t+1;s<this._options.length;s++)if(this._options[s]&&!this._options[s].disabled&&this._options[s].visible){o=s;break}return o>-1?this._options[o]:null}prev(e){let t=e??this._activeIndex,o=-1;for(let s=t-1;s>=0;s--)if(this._options[s]&&!this._options[s].disabled&&this._options[s].visible){o=s;break}return o>-1?this._options[o]:null}activateDefault(){if(this._multiSelect){if(this._selectedIndexes.size>0){let t=this._selectedIndexes.values().next();this._activeIndex=t.value?t.value:0}}else this._selectedIndex>-1?this._activeIndex=this._selectedIndex:this._activeIndex=0;this._host.requestUpdate()}selectAll(){this._multiSelect&&(this._options.forEach((e,t)=>{this._options[t].selected=!0,this._selectedIndexes.add(t)}),this._host.requestUpdate())}selectNone(){this._multiSelect&&(this._options.forEach((e,t)=>{this._options[t].selected=!1}),this._selectedIndexes.clear(),this._host.requestUpdate())}_searchByPattern(e){let t;switch(this._filterMethod){case"startsWithPerTerm":t=ze(e,this._filterPattern);break;case"startsWith":t=Fe(e,this._filterPattern);break;case"contains":t=qe(e,this._filterPattern);break;default:t=Ne(e,this._filterPattern)}return t}_updateState(){if(!this._combobox||this._filterPattern==="")this._options.forEach((e,t)=>{this._options[t].visible=!0,this._options[t].ranges=[]}),this._numOfVisibleOptions=this._options.length;else{let e=-1;this._numOfVisibleOptions=0,this._options.forEach(({label:t},o)=>{let s=this._searchByPattern(t);this._options[o].visible=s.match,this._options[o].ranges=s.ranges,this._options[o].filteredIndex=s.match?++e:-1,s.match&&(this._numOfVisibleOptions+=1)})}this._host.requestUpdate()}};var Wt=[V,k`
    :host {
      display: block;
      position: relative;
    }

    .scrollable-container {
      height: 100%;
      overflow: auto;
    }

    .scrollable-container::-webkit-scrollbar {
      cursor: default;
      width: 0;
    }

    .scrollable-container {
      scrollbar-width: none;
    }

    .shadow {
      box-shadow: var(--vscode-scrollbar-shadow, #000000) 0 6px 6px -6px inset;
      display: none;
      height: 3px;
      left: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      z-index: 1;
      width: 100%;
    }

    .shadow.visible {
      display: block;
    }

    .scrollbar-track {
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      width: 10px;
      z-index: 100;
    }

    .scrollbar-track.hidden {
      display: none;
    }

    .scrollbar-thumb {
      background-color: transparent;
      min-height: var(--min-thumb-height, 20px);
      opacity: 0;
      position: absolute;
      right: 0;
      width: 10px;
    }

    .scrollbar-thumb.visible {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
      opacity: 1;
      transition: opacity 100ms;
    }

    .scrollbar-thumb.fade {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
      opacity: 0;
      transition: opacity 800ms;
    }

    .scrollbar-thumb.visible:hover {
      background-color: var(
        --vscode-scrollbarSlider-hoverBackground,
        rgba(100, 100, 100, 0.7)
      );
    }

    .scrollbar-thumb.visible.active,
    .scrollbar-thumb.visible.active:hover {
      background-color: var(
        --vscode-scrollbarSlider-activeBackground,
        rgba(191, 191, 191, 0.4)
      );
    }

    .prevent-interaction {
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      position: absolute;
      z-index: 99;
    }

    .content {
      overflow: hidden;
    }
  `],At=Wt;var w=function(i,e,t,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},$=class extends O{set scrollPos(e){this._scrollPos=this._limitScrollPos(e),this._updateScrollbar(),this._updateThumbPosition(),this.requestUpdate()}get scrollPos(){return this._scrollPos}get scrollMax(){return this._scrollableContainer?this._scrollableContainer.scrollHeight-this._scrollableContainer.clientHeight:0}constructor(){super(),this.alwaysVisible=!1,this.fastScrollSensitivity=5,this.minThumbSize=20,this.mouseWheelScrollSensitivity=1,this.shadow=!0,this.scrolled=!1,this._scrollPos=0,this._isDragging=!1,this._thumbHeight=0,this._thumbY=0,this._thumbVisible=!1,this._thumbFade=!1,this._thumbActive=!1,this._componentHeight=0,this._contentHeight=0,this._scrollThumbStartY=0,this._mouseStartY=0,this._scrollbarVisible=!0,this._scrollbarTrackZ=0,this._resizeObserverCallback=()=>{this._componentHeight=this.offsetHeight,this._contentHeight=this._contentElement.offsetHeight,this._updateScrollbar(),this._updateThumbPosition()},this._handleSlotChange=()=>{this._updateScrollbar(),this._updateThumbPosition(),this._zIndexFix()},this._handleScrollThumbMouseMove=e=>{let t=this._scrollThumbStartY+(e.screenY-this._mouseStartY);this._thumbY=this._limitThumbPos(t),this.scrollPos=this._calculateScrollPosFromThumbPos(this._thumbY),this.dispatchEvent(new CustomEvent("vsc-scrollable-scroll",{detail:this.scrollPos}))},this._handleScrollThumbMouseUp=e=>{this._isDragging=!1,this._thumbActive=!1;let t=this.getBoundingClientRect(),{x:o,y:s,width:n,height:r}=t,{pageX:l,pageY:a}=e;(l>o+n||l<o||a>s+r||a<s)&&(this._thumbFade=!0,this._thumbVisible=!1),document.removeEventListener("mousemove",this._handleScrollThumbMouseMove),document.removeEventListener("mouseup",this._handleScrollThumbMouseUp)},this._handleComponentMouseOver=()=>{this._thumbVisible=!0,this._thumbFade=!1},this._handleComponentMouseOut=()=>{this._thumbActive||(this._thumbVisible=!1,this._thumbFade=!0)},this._handleComponentWheel=e=>{if(this._contentHeight<=this._componentHeight)return;e.preventDefault();let t=e.altKey?this.mouseWheelScrollSensitivity*this.fastScrollSensitivity:this.mouseWheelScrollSensitivity;this.scrollPos=this._limitScrollPos(this.scrollPos+e.deltaY*t),this.dispatchEvent(new CustomEvent("vsc-scrollable-scroll",{detail:this.scrollPos}))},this._handleScrollableContainerScroll=e=>{e.currentTarget&&(this.scrollPos=e.currentTarget.scrollTop)},this.addEventListener("mouseover",this._handleComponentMouseOver),this.addEventListener("mouseout",this._handleComponentMouseOut),this.addEventListener("wheel",this._handleComponentWheel)}connectedCallback(){super.connectedCallback(),this._hostResizeObserver=new ResizeObserver(this._resizeObserverCallback),this._contentResizeObserver=new ResizeObserver(this._resizeObserverCallback),this.requestUpdate(),this.updateComplete.then(()=>{this._hostResizeObserver.observe(this),this._contentResizeObserver.observe(this._contentElement),this._updateThumbPosition()})}disconnectedCallback(){super.disconnectedCallback(),this._hostResizeObserver.unobserve(this),this._hostResizeObserver.disconnect(),this._contentResizeObserver.unobserve(this._contentElement),this._contentResizeObserver.disconnect()}firstUpdated(e){this._updateThumbPosition()}_calcThumbHeight(){let e=this.offsetHeight,t=this._contentElement?.offsetHeight??0,o=e*(e/t);return Math.max(this.minThumbSize,o)}_updateScrollbar(){let e=this._contentElement?.offsetHeight??0;this.offsetHeight>=e?this._scrollbarVisible=!1:(this._scrollbarVisible=!0,this._thumbHeight=this._calcThumbHeight()),this.requestUpdate()}_zIndexFix(){let e=0;this._assignedElements.forEach(t=>{if("style"in t){let o=window.getComputedStyle(t).zIndex;/([0-9-])+/g.test(o)&&(e=Number(o)>e?Number(o):e)}}),this._scrollbarTrackZ=e+1,this.requestUpdate()}_updateThumbPosition(){if(!this._scrollableContainer)return;this.scrolled=this.scrollPos>0;let e=this.offsetHeight,t=this._thumbHeight,s=this._contentElement.offsetHeight-e,n=this.scrollPos/s,r=e-t;this._thumbY=Math.min(n*(e-t),r)}_calculateScrollPosFromThumbPos(e){let t=this.getBoundingClientRect().height,o=this._scrollThumbElement.getBoundingClientRect().height,s=this._contentElement.getBoundingClientRect().height,n=e/(t-o)*(s-t);return this._limitScrollPos(n)}_limitScrollPos(e){return e<0?0:e>this.scrollMax?this.scrollMax:e}_limitThumbPos(e){let t=this.getBoundingClientRect().height,o=this._scrollThumbElement.getBoundingClientRect().height;return e<0?0:e>t-o?t-o:e}_handleScrollThumbMouseDown(e){let t=this.getBoundingClientRect(),o=this._scrollThumbElement.getBoundingClientRect();this._mouseStartY=e.screenY,this._scrollThumbStartY=o.top-t.top,this._isDragging=!0,this._thumbActive=!0,document.addEventListener("mousemove",this._handleScrollThumbMouseMove),document.addEventListener("mouseup",this._handleScrollThumbMouseUp)}_handleScrollbarTrackPress(e){e.target===e.currentTarget&&(this._thumbY=e.offsetY-this._thumbHeight/2,this.scrollPos=this._calculateScrollPosFromThumbPos(this._thumbY))}render(){return d`
      <div
        class="scrollable-container"
        .style=${L({userSelect:this._isDragging?"none":"auto"})}
        .scrollTop=${this.scrollPos}
        @scroll=${this._handleScrollableContainerScroll}
      >
        <div
          class=${E({shadow:!0,visible:this.scrolled})}
          .style=${L({zIndex:String(this._scrollbarTrackZ)})}
        ></div>
        ${this._isDragging?d`<div class="prevent-interaction"></div>`:p}
        <div
          class=${E({"scrollbar-track":!0,hidden:!this._scrollbarVisible})}
          @mousedown=${this._handleScrollbarTrackPress}
        >
          <div
            class=${E({"scrollbar-thumb":!0,visible:this.alwaysVisible?!0:this._thumbVisible,fade:this.alwaysVisible?!1:this._thumbFade,active:this._thumbActive})}
            .style=${L({height:`${this._thumbHeight}px`,top:`${this._thumbY}px`})}
            @mousedown=${this._handleScrollThumbMouseDown}
          ></div>
        </div>
        <div class="content">
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>
      </div>
    `}};$.styles=At;w([c({type:Boolean,reflect:!0,attribute:"always-visible"})],$.prototype,"alwaysVisible",void 0);w([c({type:Number,attribute:"fast-scroll-sensitivity"})],$.prototype,"fastScrollSensitivity",void 0);w([c({type:Number,attribute:"min-thumb-size"})],$.prototype,"minThumbSize",void 0);w([c({type:Number,attribute:"mouse-wheel-scroll-sensitivity"})],$.prototype,"mouseWheelScrollSensitivity",void 0);w([c({type:Boolean,reflect:!0})],$.prototype,"shadow",void 0);w([c({type:Boolean,reflect:!0})],$.prototype,"scrolled",void 0);w([c({type:Number,attribute:"scroll-pos"})],$.prototype,"scrollPos",null);w([x()],$.prototype,"_isDragging",void 0);w([x()],$.prototype,"_thumbHeight",void 0);w([x()],$.prototype,"_thumbY",void 0);w([x()],$.prototype,"_thumbVisible",void 0);w([x()],$.prototype,"_thumbFade",void 0);w([x()],$.prototype,"_thumbActive",void 0);w([z(".content")],$.prototype,"_contentElement",void 0);w([z(".scrollbar-thumb",!0)],$.prototype,"_scrollThumbElement",void 0);w([z(".scrollable-container")],$.prototype,"_scrollableContainer",void 0);w([Se()],$.prototype,"_assignedElements",void 0);$=w([B("vscode-scrollable")],$);var g=function(i,e,t,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},Oe=10,H=22,m=class extends O{set combobox(e){this._opts.comboboxMode=e}get combobox(){return this._opts.comboboxMode}set disabled(e){this._disabled=e,this.ariaDisabled=e?"true":"false",e===!0?(this._originalTabIndex=this.tabIndex,this.tabIndex=-1):(this.tabIndex=this._originalTabIndex??0,this._originalTabIndex=void 0),this.requestUpdate()}get disabled(){return this._disabled}set filter(e){let t=["contains","fuzzy","startsWith","startsWithPerTerm"],o;t.includes(e)?o=e:(this.warn(`Invalid filter: "${e}", fallback to default. Valid values are: "contains", "fuzzy", "startsWith", "startsWithPerm".`),o="fuzzy"),this._opts.filterMethod=o}get filter(){return this._opts.filterMethod}set options(e){this._opts.populate(e)}get options(){return this._opts.options.map(({label:e,value:t,description:o,selected:s,disabled:n})=>({label:e,value:t,description:o,selected:s,disabled:n}))}constructor(){super(),this.creatable=!1,this.label="",this.invalid=!1,this.focused=!1,this.open=!1,this.position="below",this._prevXPos=0,this._prevYPos=0,this._opts=new Ce(this),this._firstUpdateCompleted=!1,this._currentDescription="",this._filter="fuzzy",this._selectedIndexes=[],this._options=[],this._value="",this._values=[],this._isPlaceholderOptionActive=!1,this._isBeingFiltered=!1,this._optionListScrollPos=0,this._isHoverForbidden=!1,this._disabled=!1,this._originalTabIndex=void 0,this._onMouseMove=()=>{this._isHoverForbidden=!1,window.removeEventListener("mousemove",this._onMouseMove)},this._onOptionListScroll=e=>{this._optionListScrollPos=e.detail},this._onComponentKeyDown=e=>{[" ","ArrowUp","ArrowDown","Escape"].includes(e.key)&&(e.stopPropagation(),e.preventDefault()),e.key==="Enter"&&this._onEnterKeyDown(e),e.key===" "&&this._onSpaceKeyDown(),e.key==="Escape"&&this._onEscapeKeyDown(),e.key==="ArrowUp"&&this._onArrowUpKeyDown(),e.key==="ArrowDown"&&this._onArrowDownKeyDown()},this._onComponentFocus=()=>{this.focused=!0},this._onComponentBlur=()=>{this.focused=!1},this._handleWindowScroll=()=>{let{x:e,y:t}=this.getBoundingClientRect();(e!==this._prevXPos||t!==this._prevYPos)&&(this.open=!1)},this.addEventListener("vsc-option-state-change",e=>{e.stopPropagation(),this._setStateFromSlottedElements(),this.requestUpdate()})}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onComponentKeyDown),this.addEventListener("focus",this._onComponentFocus),this.addEventListener("blur",this._onComponentBlur),this._setAutoFocus()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onComponentKeyDown),this.removeEventListener("focus",this._onComponentFocus),this.removeEventListener("blur",this._onComponentBlur)}firstUpdated(e){this._firstUpdateCompleted=!0}willUpdate(e){if(e.has("required")&&this._firstUpdateCompleted&&this._manageRequired(),e.has("open")&&this._firstUpdateCompleted)if(this.open){this._dropdownEl.showPopover();let{x:t,y:o}=this.getBoundingClientRect();this._prevXPos=t,this._prevYPos=o,window.addEventListener("scroll",this._handleWindowScroll,{capture:!0}),this._opts.activateDefault(),this._scrollActiveElementToTop()}else this._dropdownEl.hidePopover(),window.removeEventListener("scroll",this._handleWindowScroll)}get _filteredOptions(){return!this.combobox||this._opts.filterPattern===""?this._options:St(this._options,this._opts.filterPattern,this._filter)}_setAutoFocus(){this.hasAttribute("autofocus")&&(this.tabIndex<0&&(this.tabIndex=0),this.combobox?this.updateComplete.then(()=>{this.shadowRoot?.querySelector(".combobox-input").focus()}):this.updateComplete.then(()=>{this.shadowRoot?.querySelector(".select-face").focus()}))}get _isSuggestedOptionVisible(){if(!(this.combobox&&this.creatable))return!1;let e=this._opts.getOptionByValue(this._opts.filterPattern)!==null,t=this._opts.filterPattern.length>0;return!e&&t}_manageRequired(){}_setStateFromSlottedElements(){let e=this._assignedOptions??[];this._opts.clear(),e.forEach(t=>{let{innerText:o,description:s,disabled:n}=t,r=typeof t.value=="string"?t.value:o.trim(),l=t.selected??!1,a={label:o.trim(),value:r,description:s,selected:l,disabled:n};this._opts.add(a)})}_createSuggestedOption(){let e=this._opts.numOptions,t=document.createElement("vscode-option");return t.value=this._opts.filterPattern,$e(this._opts.filterPattern,t),this.appendChild(t),e}_dispatchChangeEvent(){this.dispatchEvent(new Event("change")),this.dispatchEvent(new Event("input"))}async _createAndSelectSuggestedOption(){}_toggleComboboxDropdown(){this._opts.filterPattern="",this.open=!this.open}_scrollActiveElementToTop(){this._optionListScrollPos=Math.floor(this._opts.relativeActiveIndex*H)}async _adjustOptionListScrollPos(e,t){let o=this._opts.numOfVisibleOptions;if(this._isSuggestedOptionVisible&&(o+=1),o<=Oe)return;this._isHoverForbidden=!0,window.addEventListener("mousemove",this._onMouseMove);let n=this._optionListScrollPos,r=t*H,l=r>=n&&r<=n+Oe*H-H;e==="down"&&(l||(this._optionListScrollPos=t*H-(Oe-1)*H)),e==="up"&&(l||(this._optionListScrollPos=Math.floor(this._opts.relativeActiveIndex*H)))}_onFaceClick(){this.open=!this.open}_handleDropdownToggle(e){this.open=e.newState==="open"}_onComboboxButtonClick(){this._toggleComboboxDropdown()}_onComboboxButtonKeyDown(e){e.key==="Enter"&&this._toggleComboboxDropdown()}_onOptionMouseOver(e){if(this._isHoverForbidden)return;let t=e.target;t.matches(".option")&&(t.matches(".placeholder")?(this._isPlaceholderOptionActive=!0,this._opts.activeIndex=-1):(this._isPlaceholderOptionActive=!1,this._opts.activeIndex=+t.dataset.index))}_onPlaceholderOptionMouseOut(){this._isPlaceholderOptionActive=!1}_onNoOptionsClick(e){e.stopPropagation()}_onEnterKeyDown(e){this._isBeingFiltered=!1,e?.composedPath&&e.composedPath().find(o=>o.matches?o.matches("vscode-button.button-accept"):!1)}_onSpaceKeyDown(){if(!this.open){this.open=!0;return}}_onArrowUpKeyDown(){if(this.open){if(this._opts.activeIndex<=0&&!(this.combobox&&this.creatable))return;if(this._isPlaceholderOptionActive){let e=this._opts.numOfVisibleOptions-1;this._opts.activeIndex=e,this._isPlaceholderOptionActive=!1}else{let e=this._opts.prev();if(e!==null){this._opts.activeIndex=e?.index??-1;let t=e?.filteredIndex??-1;t>-1&&this._adjustOptionListScrollPos("up",t)}}}else this.open=!0,this._opts.activateDefault()}_onArrowDownKeyDown(){let e=this._opts.numOfVisibleOptions,t=this._isSuggestedOptionVisible;if(t&&(e+=1),this.open){if(this._isPlaceholderOptionActive&&this._opts.activeIndex===-1)return;let o=this._opts.next();if(t&&o===null)this._isPlaceholderOptionActive=!0,this._adjustOptionListScrollPos("down",e-1),this._opts.activeIndex=-1;else if(o!==null){let s=o?.filteredIndex??-1;this._opts.activeIndex=o?.index??-1,s>-1&&this._adjustOptionListScrollPos("down",s)}}else this.open=!0,this._opts.activateDefault()}_onEscapeKeyDown(){this.open=!1}_onSlotChange(){this._setStateFromSlottedElements(),this.requestUpdate()}_onComboboxInputFocus(e){e.target.select(),this._isBeingFiltered=!1,this._opts.filterPattern=""}_onComboboxInputBlur(){this._isBeingFiltered=!1}_onComboboxInputInput(e){this._isBeingFiltered=!0,this._opts.filterPattern=e.target.value,this._opts.activeIndex=-1,this.open=!0}_onComboboxInputClick(){this._isBeingFiltered=this._opts.filterPattern!=="",this.open=!0}_onComboboxInputSpaceKeyDown(e){e.key===" "&&e.stopPropagation()}_onOptionClick(e){this._isBeingFiltered=!1}_renderCheckbox(e,t){return d`<span class=${E({"checkbox-icon":!0,checked:e})}>${dt}</span
      ><span class="option-label">${t}</span>`}_renderOptions(){let e=this._opts.options;return d`
      <ul
        aria-label=${C(this.label??void 0)}
        aria-multiselectable=${C(this._opts.multiSelect?"true":void 0)}
        class="options"
        id="select-listbox"
        role="listbox"
        tabindex="-1"
        @click=${this._onOptionClick}
        @mouseover=${this._onOptionMouseOver}
      >
        ${bt(e,t=>t.index,(t,o)=>{if(!t.visible)return p;let s=t.index===this._opts.activeIndex&&!t.disabled,n=this._opts.getIsIndexSelected(t.index),r={active:s,disabled:t.disabled,option:!0,"single-select":!this._opts.multiSelect,"multi-select":this._opts.multiSelect,selected:n},l=t.ranges?.length??!1?wt(t.label,t.ranges??[]):t.label;return d`
              <li
                aria-selected=${n?"true":"false"}
                class=${E(r)}
                data-index=${t.index}
                data-filtered-index=${o}
                id=${`op-${t.index}`}
                role="option"
                tabindex="-1"
              >
                ${vt(this._opts.multiSelect,()=>this._renderCheckbox(n,l),()=>l)}
              </li>
            `})}
        ${this._renderPlaceholderOption(this._opts.numOfVisibleOptions<1)}
      </ul>
    `}_renderPlaceholderOption(e){return this.combobox?this._opts.getOptionByLabel(this._opts.filterPattern)?p:this.creatable&&this._opts.filterPattern.length>0?d`<li
        class=${E({option:!0,placeholder:!0,active:this._isPlaceholderOptionActive})}
        @mouseout=${this._onPlaceholderOptionMouseOut}
      >
        Add "${this._opts.filterPattern}"
      </li>`:e?d`<li class="no-options" @click=${this._onNoOptionsClick}>
            No options
          </li>`:p:p}_renderDescription(){let e=this._opts.getActiveOption();if(!e)return p;let{description:t}=e;return t?d`<div class="description">${t}</div>`:p}_renderSelectFace(){return d`${p}`}_renderComboboxFace(){return d`${p}`}_renderDropdownControls(){return d`${p}`}_renderDropdown(){let e={dropdown:!0,multiple:this._opts.multiSelect,open:this.open},t=this._isSuggestedOptionVisible||this._opts.numOfVisibleOptions===0?this._opts.numOfVisibleOptions+1:this._opts.numOfVisibleOptions,o=Math.min(t*H,Oe*H),s=this.getBoundingClientRect(),n={width:`${s.width}px`,left:`${s.left}px`,top:this.position==="below"?`${s.top+s.height}px`:"unset",bottom:this.position==="below"?"unset":`${document.documentElement.clientHeight-s.top}px`};return d`
      <div
        class=${E(e)}
        popover="auto"
        @toggle=${this._handleDropdownToggle}
        .style=${L(n)}
      >
        ${this.position==="above"?this._renderDescription():p}
        <vscode-scrollable
          always-visible
          class="scrollable"
          min-thumb-size="40"
          tabindex="-1"
          @vsc-scrollable-scroll=${this._onOptionListScroll}
          .scrollPos=${this._optionListScrollPos}
          .style=${L({height:`${o}px`})}
        >
          ${this._renderOptions()} ${this._renderDropdownControls()}
        </vscode-scrollable>
        ${this.position==="below"?this._renderDescription():p}
      </div>
    `}};g([c({type:Boolean,reflect:!0})],m.prototype,"creatable",void 0);g([c({type:Boolean,reflect:!0})],m.prototype,"combobox",null);g([c({reflect:!0})],m.prototype,"label",void 0);g([c({type:Boolean,reflect:!0})],m.prototype,"disabled",null);g([c({type:Boolean,reflect:!0})],m.prototype,"invalid",void 0);g([c()],m.prototype,"filter",null);g([c({type:Boolean,reflect:!0})],m.prototype,"focused",void 0);g([c({type:Boolean,reflect:!0})],m.prototype,"open",void 0);g([c({type:Array})],m.prototype,"options",null);g([c({reflect:!0})],m.prototype,"position",void 0);g([Se({flatten:!0,selector:"vscode-option"})],m.prototype,"_assignedOptions",void 0);g([z(".dropdown",!0)],m.prototype,"_dropdownEl",void 0);g([x()],m.prototype,"_currentDescription",void 0);g([x()],m.prototype,"_filter",void 0);g([x()],m.prototype,"_filteredOptions",null);g([x()],m.prototype,"_selectedIndexes",void 0);g([x()],m.prototype,"_options",void 0);g([x()],m.prototype,"_value",void 0);g([x()],m.prototype,"_values",void 0);g([x()],m.prototype,"_isPlaceholderOptionActive",void 0);g([x()],m.prototype,"_isBeingFiltered",void 0);g([x()],m.prototype,"_optionListScrollPos",void 0);var Et=[V,k`
    :host {
      display: inline-block;
      max-width: 100%;
      outline: none;
      position: relative;
      width: 320px;
    }

    .main-slot {
      display: none;
    }

    .select-face,
    .combobox-face {
      background-color: var(--vscode-settings-dropdownBackground, #313131);
      border-color: var(--vscode-settings-dropdownBorder, #3c3c3c);
      border-radius: 4px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-dropdownForeground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
      position: relative;
      user-select: none;
      width: 100%;
    }

    :host([invalid]) .select-face,
    :host(:invalid) .select-face,
    :host([invalid]) .combobox-face,
    :host(:invalid) .combobox-face {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .select-face {
      cursor: pointer;
      display: block;
      padding: 3px 4px;
    }

    .select-face .text {
      display: block;
      height: 18px;
      overflow: hidden;
      padding-right: 20px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .select-face.multiselect {
      padding: 0;
    }

    .select-face-badge {
      background-color: var(--vscode-badge-background, #616161);
      border-radius: 2px;
      color: var(--vscode-badge-foreground, #f8f8f8);
      display: inline-block;
      flex-shrink: 0;
      font-size: 11px;
      line-height: 16px;
      margin: 2px;
      padding: 2px 3px;
      white-space: nowrap;
    }

    .select-face-badge.no-item {
      background-color: transparent;
      color: inherit;
    }

    .combobox-face {
      display: flex;
    }

    :host(:focus) .select-face,
    :host(:focus) .combobox-face,
    :host([focused]) .select-face,
    :host([focused]) .combobox-face {
      outline: none;
    }

    :host(:focus:not([open])) .select-face,
    :host(:focus:not([open])) .combobox-face,
    :host([focused]:not([open])) .select-face,
    :host([focused]:not([open])) .combobox-face {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    .combobox-input {
      background-color: transparent;
      box-sizing: border-box;
      border: 0;
      color: var(--vscode-foreground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      line-height: 16px;
      padding: 4px;
      width: 100%;
    }

    .combobox-input:focus {
      outline: none;
    }

    .combobox-button {
      align-items: center;
      background-color: transparent;
      border: 0;
      border-radius: 2px;
      box-sizing: content-box;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      flex-shrink: 0;
      height: 16px;
      justify-content: center;
      margin: 1px 1px 0 0;
      padding: 3px;
      width: 22px;
    }

    .combobox-button:hover,
    .combobox-button:focus-visible {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
      outline-style: dashed;
      outline-color: var(--vscode-toolbar-hoverOutline, transparent);
    }

    .combobox-button:focus-visible {
      outline: none;
    }

    .icon {
      color: var(--vscode-foreground, #cccccc);
      display: block;
      height: 14px;
      pointer-events: none;
      width: 14px;
    }

    .select-face .icon {
      position: absolute;
      right: 6px;
      top: 5px;
    }

    .icon svg {
      color: var(--vscode-foreground, #cccccc);
      height: 100%;
      width: 100%;
    }

    .dropdown {
      background-color: var(--vscode-settings-dropdownBackground, #313131);
      border-color: var(--vscode-settings-dropdownListBorder, #454545);
      border-radius: 4px;
      border-style: solid;
      border-width: 1px;
      bottom: unset;
      box-shadow: 0 2px 8px var(--vscode-widget-shadow, rgba(0, 0, 0, 0.36));
      box-sizing: border-box;
      display: none;
      padding: 0;
      right: unset;
    }

    .dropdown.open {
      display: block;
    }

    :host([position='above']) .dropdown {
      bottom: 26px;
      padding-bottom: 0;
      padding-top: 2px;
      top: unset;
    }

    .scrollable {
      display: block;
      max-height: 222px;
      margin: 0;
      outline: none;
      overflow: hidden;
    }

    .options {
      box-sizing: border-box;
      cursor: pointer;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .option {
      box-sizing: border-box;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      height: 22px;
      line-height: 20px;
      min-height: calc(var(--vscode-font-size) * 1.3);
      padding: 1px 3px;
      user-select: none;
      outline-color: transparent;
      outline-offset: -1px;
      outline-style: solid;
      outline-width: 1px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .option.single-select {
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .option.multi-select {
      align-items: center;
      display: flex;
    }

    .option b {
      color: var(--vscode-list-highlightForeground, #2aaaff);
    }

    .option.active b {
      color: var(--vscode-list-focusHighlightForeground, #2aaaff);
    }

    .option:not(.disabled):hover {
      background-color: var(--vscode-list-hoverBackground, #2a2d2e);
      color: var(--vscode-list-hoverForeground, #ffffff);
    }

    :host-context(body[data-vscode-theme-kind='vscode-high-contrast'])
      .option:hover,
    :host-context(body[data-vscode-theme-kind='vscode-high-contrast-light'])
      .option:hover {
      outline-style: dotted;
      outline-color: var(--vscode-list-focusOutline, #0078d4);
      outline-width: 1px;
    }

    .option.disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }

    .option.active,
    .option.active:hover {
      background-color: var(--vscode-list-activeSelectionBackground, #04395e);
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
      outline-color: var(--vscode-list-activeSelectionBackground, #04395e);
      outline-style: solid;
      outline-width: 1px;
    }

    .no-options {
      align-items: center;
      border-color: transparent;
      border-style: solid;
      border-width: 1px;
      color: var(--vscode-foreground, #cccccc);
      cursor: default;
      display: flex;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
      min-height: calc(var(--vscode-font-size) * 1.3);
      opacity: 0.85;
      padding: 1px 3px;
      user-select: none;
    }

    .placeholder {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .placeholder span {
      font-weight: bold;
    }

    .placeholder:not(.disabled):hover {
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
    }

    :host-context(body[data-vscode-theme-kind='vscode-high-contrast'])
      .option.active,
    :host-context(body[data-vscode-theme-kind='vscode-high-contrast-light'])
      .option.active:hover {
      outline-color: var(--vscode-list-focusOutline, #0078d4);
      outline-style: dashed;
    }

    .option-label {
      display: block;
      overflow: hidden;
      pointer-events: none;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }

    .dropdown.multiple .option.selected {
      background-color: var(--vscode-list-hoverBackground, #2a2d2e);
      outline-color: var(--vscode-list-hoverBackground, #2a2d2e);
    }

    .dropdown.multiple .option.selected.active {
      background-color: var(--vscode-list-activeSelectionBackground, #04395e);
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
      outline-color: var(--vscode-list-activeSelectionBackground, #04395e);
    }

    .checkbox-icon {
      align-items: center;
      background-color: var(--vscode-checkbox-background, #313131);
      border-radius: 2px;
      border: 1px solid var(--vscode-checkbox-border);
      box-sizing: border-box;
      color: var(--vscode-checkbox-foreground);
      display: flex;
      flex-basis: 15px;
      flex-shrink: 0;
      height: 15px;
      justify-content: center;
      margin-right: 5px;
      overflow: hidden;
      position: relative;
      width: 15px;
    }

    .checkbox-icon svg {
      display: none;
      height: 13px;
      width: 13px;
    }

    .checkbox-icon.checked svg {
      display: block;
    }

    .dropdown-controls {
      display: flex;
      justify-content: flex-end;
      padding: 4px;
    }

    .dropdown-controls :not(:last-child) {
      margin-right: 4px;
    }

    .action-icon {
      align-items: center;
      background-color: transparent;
      border: 0;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      height: 24px;
      justify-content: center;
      padding: 0;
      width: 24px;
    }

    .action-icon:focus {
      outline: none;
    }

    .action-icon:focus-visible {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }

    .description {
      border-color: var(--vscode-settings-dropdownBorder, #3c3c3c);
      border-style: solid;
      border-width: 1px 0 0;
      color: var(--vscode-foreground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.3;
      padding: 6px 4px;
      word-wrap: break-word;
    }

    :host([position='above']) .description {
      border-width: 0 0 1px;
    }
  `];var Ct=Et;var X=function(i,e,t,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n},I=class extends m{set selectedIndex(e){this._opts.selectedIndex=e;let t=this._opts.getOptionByIndex(e);t?(this._opts.activeIndex=e,this._value=t.value,this._internals.setFormValue(this._value),this._manageRequired()):(this._value="",this._internals.setFormValue(""),this._manageRequired())}get selectedIndex(){return this._opts.selectedIndex}set value(e){this._opts.value=e,this._opts.selectedIndex>-1?this._requestedValueToSetLater="":this._requestedValueToSetLater=e,this._internals.setFormValue(this._value),this._manageRequired()}get value(){return this._opts.value}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}updateInputValue(){if(!this.combobox)return;let e=this.renderRoot.querySelector(".combobox-input");if(e){let t=this._opts.getSelectedOption();e.value=t?.label??""}}constructor(){super(),this.defaultValue="",this.name=void 0,this.required=!1,this._requestedValueToSetLater="",this._opts.multiSelect=!1,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._manageRequired()})}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(e,t){this.updateComplete.then(()=>{this.value=e})}get type(){return"select-one"}get form(){return this._internals.form}async _createAndSelectSuggestedOption(){let e=this._createSuggestedOption();await this.updateComplete,this._opts.selectedIndex=e,this._dispatchChangeEvent();let t=new CustomEvent("vsc-single-select-create-option",{detail:{value:this._opts.getOptionByIndex(e)?.value??""}});this.dispatchEvent(t),this.open=!1,this._isPlaceholderOptionActive=!1}_setStateFromSlottedElements(){super._setStateFromSlottedElements(),!this.combobox&&this._opts.selectedIndexes.length===0&&(this._opts.selectedIndex=this._opts.options.length>0?0:-1)}_onSlotChange(){if(super._onSlotChange(),this._requestedValueToSetLater){let e=this._opts.getOptionByValue(this._requestedValueToSetLater);e&&(this._opts.selectedIndex=e.index,this._requestedValueToSetLater="")}this._opts.selectedIndex>-1&&this._opts.numOptions>0?(this._internals.setFormValue(this._opts.value),this._manageRequired()):(this._internals.setFormValue(null),this._manageRequired())}_onEnterKeyDown(e){super._onEnterKeyDown(e);let t=!1;this.combobox?this.open?this._isPlaceholderOptionActive?this._createAndSelectSuggestedOption():(t=this._opts.activeIndex!==this._opts.selectedIndex,this._opts.selectedIndex=this._opts.activeIndex,this.open=!1):(this.open=!0,this._scrollActiveElementToTop()):this.open?(t=this._opts.activeIndex!==this._opts.selectedIndex,this._opts.selectedIndex=this._opts.activeIndex,this.open=!1):(this.open=!0,this._scrollActiveElementToTop()),t&&(this._dispatchChangeEvent(),this.updateInputValue(),this._internals.setFormValue(this._opts.value),this._manageRequired())}_onOptionClick(e){super._onOptionClick(e);let o=e.composedPath().find(n=>{let r=n;if("matches"in r)return r.matches("li.option")});if(!o||o.matches(".disabled"))return;o.classList.contains("placeholder")?this.creatable&&this._createAndSelectSuggestedOption():(this._opts.selectedIndex=Number(o.dataset.index),this.open=!1,this._internals.setFormValue(this._opts.value),this._manageRequired(),this._dispatchChangeEvent())}_manageRequired(){let{value:e}=this;e===""&&this.required?this._internals.setValidity({valueMissing:!0},"Please select an item in the list.",this._face):this._internals.setValidity({})}_renderSelectFace(){let t=this._opts.getSelectedOption()?.label??"",o=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"";return d`
      <div
        aria-activedescendant=${o}
        aria-controls="select-listbox"
        aria-expanded=${this.open?"true":"false"}
        aria-haspopup="listbox"
        aria-label=${C(this.label)}
        class="select-face face"
        @click=${this._onFaceClick}
        role="combobox"
        tabindex="0"
      >
        <span class="text">${t}</span> ${He}
      </div>
    `}_renderComboboxFace(){let e="";this._isBeingFiltered?e=this._opts.filterPattern:e=this._opts.getSelectedOption()?.label??"";let t=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"",o=this.open?"true":"false";return d`
      <div class="combobox-face face">
        <input
          aria-activedescendant=${t}
          aria-autocomplete="list"
          aria-controls="select-listbox"
          aria-expanded=${o}
          aria-haspopup="listbox"
          aria-label=${C(this.label)}
          class="combobox-input"
          role="combobox"
          spellcheck="false"
          type="text"
          autocomplete="off"
          .value=${e}
          @focus=${this._onComboboxInputFocus}
          @blur=${this._onComboboxInputBlur}
          @input=${this._onComboboxInputInput}
          @click=${this._onComboboxInputClick}
          @keydown=${this._onComboboxInputSpaceKeyDown}
        />
        <button
          aria-label="Open the list of options"
          class="combobox-button"
          type="button"
          @click=${this._onComboboxButtonClick}
          @keydown=${this._onComboboxButtonKeyDown}
          tabindex="-1"
        >
          ${He}
        </button>
      </div>
    `}render(){return d`
      <div class="single-select">
        <slot class="main-slot" @slotchange=${this._onSlotChange}></slot>
        ${this.combobox?this._renderComboboxFace():this._renderSelectFace()}
        ${this._renderDropdown()}
      </div>
    `}};I.styles=Ct;I.shadowRootOptions={...T.shadowRootOptions,delegatesFocus:!0};I.formAssociated=!0;X([c({attribute:"default-value"})],I.prototype,"defaultValue",void 0);X([c({reflect:!0})],I.prototype,"name",void 0);X([c({type:Number,attribute:"selected-index"})],I.prototype,"selectedIndex",null);X([c({type:String})],I.prototype,"value",null);X([c({type:Boolean,reflect:!0})],I.prototype,"required",void 0);X([z(".face")],I.prototype,"_face",void 0);I=X([B("vscode-single-select")],I);})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
lit-html/directive.js:
lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
