const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./list-item-01GiotL2.js","./rolldown-runtime-lhHHWwHU.js","./directive-lPw2sjmk.js","./delegate-hnfB5nKr.js","./item-CGTkepd7.js","./static-html-Cn9zyW3M.js","./switch-D_y6MiJL.js","./redispatch-event-Drs_3cRM.js","./element-internals-Bpc_eS8g.js","./form-associated-DE_6oAX9.js","./slider-CskP9zLe.js","./elevation-HX0AzE5U.js","./style-map-h5EnIQTC.js","./icon-button-CkmOhOjE.js","./form-submitter-3NppKR0l.js","./page-404-Cjx1iWPi.js","./PageElement-D-HOFFxE.js","./page-main-B24gchau.js","./divider-DmoCHZ3q.js"])))=>i.map(i=>d[i]);
import{b as e,d as t,f as n,g as r,h as i,n as a,r as o,t as s,v as c}from"./directive-lPw2sjmk.js";import{n as l,t as u}from"./static-html-Cn9zyW3M.js";import{t as d}from"./style-map-h5EnIQTC.js";function ee(e,t){return Object.fromEntries([...e.keys()].map(e=>[e,t[e]]))}var te=(e,t)=>t.kind===`method`&&t.descriptor&&!(`value`in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:`field`,key:Symbol(),placement:`own`,descriptor:{},originalKey:t.key,initializer(){typeof t.initializer==`function`&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}},ne=(e,t,n)=>{t.constructor.createProperty(n,e)};function f(e){return(t,n)=>n===void 0?te(e,t):ne(e,t,n)}var p=(e,t)=>t!==e&&(t===t||e===e),m={hasChanged:p},h=class extends Object{static{this.elementProperties=new Map}static createProperty(e,t=m){if(this.elementProperties.set(e,t),!this.prototype.hasOwnProperty(e)){let n=typeof e==`symbol`?Symbol():`__${e}`,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){let i=this[e];this[t]=r,this.requestUpdate(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||m}#e;constructor(e){super(),this.isUpdatePending=!1,this.hasUpdated=!1,this.resolvedPromise=Promise.resolve(!0),this.#t=!0,this.#n=!0,this.lineageToJSON=!1,this._initialize(),e&&(this.#e=e,this.requestUpdate())}_initialize(){this.__updatePromise=this.resolvedPromise,this._$changedProperties=new Map}requestUpdate(e,t,n){let r=!0;e!==void 0&&(n||=this.constructor.getPropertyOptions(e),(n.hasChanged||p)(this[e],t)?this._$changedProperties.has(e)||this._$changedProperties.set(e,t):r=!1),!this.isUpdatePending&&r&&(this.__updatePromise=this.__enqueueUpdate())}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;let e=!1,t=this._$changedProperties;try{e=this.shouldUpdate(t),e&&(this.hasUpdated===!1&&this.#e&&this.fromObject(this.#e),this.willUpdate(t),this.__update(t),this.update(t)),this.__markUpdated()}catch(t){throw e=!1,this.__markUpdated(),t}e&&this._$didUpdate(t)}willUpdate(e){}_$didUpdate(e){this.hasUpdated||(this.hasUpdated=!0,this.__firstUpdated(e),this.firstUpdated(e)),this.__updated(e)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(e){return!0}__update(e){}update(e){}async __updated(e){await this.updated(e),this.__postUpdated(e)}updated(e){}__firstUpdated(e){}firstUpdated(e){}#t;#n;__postUpdated(e){this.#t===!1&&this.#n&&this.postUpdated(ee(e,this)),this.#t=!1,this.#n=!0}postUpdated(e){}getLocalStatePropertyNames(){return Object.getOwnPropertyNames(Object.getPrototypeOf(this)).filter(e=>this.constructor.elementProperties.has(e))}getLineageStatePropertyNames(){return[...this.constructor.elementProperties.keys()].filter(e=>this.hasOwnProperty(`__${String(e)}`))}toJSON(e={removeUndefinedValues:!1}){let t=(this.lineageToJSON?this.getLineageStatePropertyNames():this.getLocalStatePropertyNames()).map(e=>[e,this[e]]).filter(([t,n])=>!e.removeUndefinedValues||n!==void 0);return Object.fromEntries(t)}fromObject(e){for(let[t,n]of Object.entries(e))this[t]=n}},g=new Set([`hostConnected`,`hostDisconnected`,`hostUpdate`,`hostUpdated`]),_=class extends h{constructor(e,t){super(t),e&&this.bind(e)}bind(e,t){if(!this.hasHost(e)){let n=new Proxy(this,{get(t,n,r){return g.has(String(n))?()=>t[n]?.(e):Reflect.get(t,n,r)}});e.addController(n),t&&(e[t]=this)}return this}unbind(){throw Error(`Not implemented yet.`)}__update(e){this._hosts?.forEach(e=>e.requestUpdate())}addHost(e){(this._hosts??=[]).push(e)}removeHost(e){this._hosts?.splice(this._hosts.indexOf(e)>>>0,1)}hasHost(e){return(this._hosts??[]).indexOf(e)>=0}hostConnected(e){this.addHost(e)}hostDisconnected(e){this.removeHost(e)}remoteUpdateComplete(){return Promise.all(this._hosts?.map(e=>e.updateComplete))}flushDisconnectedHosts(){for(let e of this._hosts)e.isConnected===!1&&(e.removeController(this),this.removeHost(e))}},v=class extends t{},re=(e,t)=>{if(typeof e==`function`)t.addInitializer(t=>{let n=new e(t);t instanceof v&&(t.controller===void 0?t.controller=n:t.controller=void 0)});else if(typeof e==`object`)t.addInitializer(t=>{e.bind(t),t instanceof v&&(t.controller===void 0?t.controller=e:t.controller=void 0)});else throw Error(`Unknown Type`);return t},ie=(e,t)=>{let{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(){console.log(`we are in standard`)}}};function ae(e){return function(t){return typeof t==`function`?re(e,t):ie(e,t)}}var y=``;function oe(e){y=e}var b=new Set,se=class{constructor(e){(this._host=e).addController(this)}hostConnected(){b.add(this._host)}hostDisconnected(){b.delete(this._host)}},x={};function S(t){return typeof t==`string`?x[t]??(x[t]=c(e(t))):t}function C(e,t,n){if(e.finalize(),n??=y,e.elementStyles.unshift(S(n)),t!==void 0)for(let n of Array.isArray(t)?t:[t]){let t=S(n),r=e.elementStyles;if(r.includes(t))return;r.push(t)}e.addInitializer(e=>{new se(e)})}function ce(e,t){return function(n){return C(n,e,t),n}}var w;(function(e){e.LIGHT=`light`,e.DARK=`dark`,e.SYSTEM=`system`})(w||={});var le=class{static#e=!1;static#t=w.SYSTEM;static#n=window.matchMedia(`(prefers-color-scheme: light)`);static#r=window.matchMedia(`(prefers-color-scheme: dark)`);static get preferredColorScheme(){if(this.#r.matches)return`dark`;if(this.#n.matches)return`light`}static get appliedColorScheme(){if(document.documentElement.classList.contains(`dark`))return`dark`;if(document.documentElement.classList.contains(`light`))return`light`}static get mode(){return this.#t}static set mode(e){this.#t=e,this.#c(),this.#o()}static init(){this.#e||(this.#e=!0,this.mode=this.#a(),this.#r.addEventListener(`change`,this.#i.bind(this)))}static#i(){this.#c()}static#a(){return this.#t=localStorage.getItem(`color-mode`)??w.SYSTEM}static#o(){localStorage.setItem(`color-mode`,this.#t)}static#s(){switch(this.#t){case w.LIGHT:return`light`;case w.DARK:return`dark`;case w.SYSTEM:switch(this.preferredColorScheme){case`light`:case`dark`:return this.preferredColorScheme;default:return`light`}}}static#c(){let e=this.#s();if(e!=this.appliedColorScheme){this.#l(),document.documentElement.classList.add(e);for(let t of b)t.classList.add(e)}}static#l(){[`light`,`dark`].forEach(e=>{document.documentElement.classList.remove(e);for(let t of b)t.classList.remove(e)})}};function T(e){return function(t){return class extends t{constructor(){super(...arguments),this._handler=e}__update(e){this.hasUpdated?this.saveData():this.loadData()||this.saveData(),super.__update(e)}loadData(){let e=localStorage.getItem(this._handler);if(e){let t=JSON.parse(e);for(let[e,n]of Object.entries(t))this.getLineageStatePropertyNames().includes(e)&&(this[e]=n);return!0}else return!1}saveData(){let e={};for(let t of this.getLineageStatePropertyNames())e[t]=this[t];localStorage.setItem(this._handler,JSON.stringify(e))}}}}function E(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}var ue=`modulepreload`,de=function(e,t){return new URL(e,t).href},D={},O=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=de(t,n),t in D)return;D[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:ue,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},fe=i`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h160q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h400q17 0 28.5 11.5T600-480q0 17-11.5 28.5T560-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z"/></svg>`,pe=i`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M459-381 314-526q-3-3-4.5-6.5T308-540q0-8 5.5-14t14.5-6h304q9 0 14.5 6t5.5 14q0 2-6 14L501-381q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z"/></svg>`;i`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h360q17 0 28.5 11.5T880-680q0 17-11.5 28.5T840-640H447l-80-80H160v480l79-263q8-26 29.5-41.5T316-560h516q41 0 64.5 32.5T909-457l-72 240q-8 26-29.5 41.5T760-160H160Zm84-80h516l72-240H316l-72 240Zm-84-262v-218 218Zm84 262 72-240-72 240Z"/></svg>`;var me=i`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M433-80q-27 0-46.5-18T363-142l-9-66q-13-5-24.5-12T307-235l-62 26q-25 11-50 2t-39-32l-47-82q-14-23-8-49t27-43l53-40q-1-7-1-13.5v-27q0-6.5 1-13.5l-53-40q-21-17-27-43t8-49l47-82q14-23 39-32t50 2l62 26q11-8 23-15t24-12l9-66q4-26 23.5-44t46.5-18h94q27 0 46.5 18t23.5 44l9 66q13 5 24.5 12t22.5 15l62-26q25-11 50-2t39 32l47 82q14 23 8 49t-27 43l-53 40q1 7 1 13.5v27q0 6.5-2 13.5l53 40q21 17 27 43t-8 49l-48 82q-14 23-39 32t-50-2l-60-26q-11 8-23 15t-24 12l-9 66q-4 26-23.5 44T527-80h-94Zm7-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>`,he=i`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-120q-151 0-255.5-104.5T120-480q0-138 90-239.5T440-838q13-2 23 3.5t16 14.5q6 9 6.5 21t-7.5 23q-17 26-25.5 55t-8.5 61q0 90 63 153t153 63q31 0 61.5-9t54.5-25q11-7 22.5-6.5T819-479q10 5 15.5 15t3.5 24q-14 138-117.5 229T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>`,ge=i`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M346-160H240q-33 0-56.5-23.5T160-240v-106l-77-78q-11-12-17-26.5T60-480q0-15 6-29.5T83-536l77-78v-106q0-33 23.5-56.5T240-800h106l78-77q12-11 26.5-17t29.5-6q15 0 29.5 6t26.5 17l78 77h106q33 0 56.5 23.5T800-720v106l77 78q11 12 17 26.5t6 29.5q0 15-6 29.5T877-424l-77 78v106q0 33-23.5 56.5T720-160H614l-78 77q-12 11-26.5 17T480-60q-15 0-29.5-6T424-83l-78-77Zm34-80 100 100 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140Zm100-40q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680v400Z"/></svg>`,_e=i`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M565-395q35-35 35-85t-35-85q-35-35-85-35t-85 35q-35 35-35 85t35 85q35 35 85 35t85-35Zm-226.5 56.5Q280-397 280-480t58.5-141.5Q397-680 480-680t141.5 58.5Q680-563 680-480t-58.5 141.5Q563-280 480-280t-141.5-58.5ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM451.5-771.5Q440-783 440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760q-17 0-28.5-11.5Zm0 720Q440-63 440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40q-17 0-28.5-11.5ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Zm297-297Z"/></svg>`,k=[`main`,`search`],ve=(e,t,n)=>{let r=t.lastIndexOf(`?`),i=e[r===-1||r<t.lastIndexOf(`/`)?t:t.slice(0,r)];return i?typeof i==`function`?i():Promise.resolve(i):new Promise((e,r)=>{(typeof queueMicrotask==`function`?queueMicrotask:setTimeout)(r.bind(null,Error(`Unknown variable dynamic import: `+t+(t.split(`/`).length===n?``:`. Note that variables only represent file names one level deep.`))))})},A=class{#e;#t;constructor(e,t=100){this.callback=e,this.timeoutMs=t}call(...e){return this.cancel(),new Promise(t=>{this.#t=t,this.#e=setTimeout(async()=>{try{t(await this.callback(...e))}finally{this.#e=void 0,this.#t=void 0}},this.timeoutMs)})}cancel(){this.#e!==void 0&&(clearTimeout(this.#e),this.#e=void 0,this.#t&&=(this.#t(void 0),void 0))}},j=e=>e??n,{I:ye}=r,M=e=>e.strings===void 0,N={},P=(e,t=N)=>e._$AH=t,F=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),F(e,t);return!0},I=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},L=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Se(t)}};function be(e){this._$AN===void 0?this._$AM=e:(I(this),this._$AM=e,L(this))}function xe(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)F(r[e],!1),I(r[e]);else r!=null&&(F(r,!1),I(r));else F(this,e)}var Se=e=>{e.type==o.CHILD&&(e._$AP??=xe,e._$AQ??=be)},R=class extends a{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),L(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(F(this,e),I(this))}setValue(e){if(M(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},z=()=>new B,B=class{},V=new WeakMap,H=s(class extends R{render(e){return n}update(e,[t]){let r=t!==this.G;return r&&this.G!==void 0&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),n}rt(e){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=V.get(t);n===void 0&&(n=new WeakMap,V.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?V.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});function U(e){return e.nodeType===Node.ELEMENT_NODE}function W(e){return U(e)&&(e.nodeName===`INPUT`||`type`in e)}function G(e){return U(e)&&e.nodeName===`SELECT`}var Ce=s(class extends R{constructor(e){if(super(e),this.__host=void 0,this.__lastValue=void 0,this.__onChange=e=>{e.currentTarget===this.__element&&this.__updateValueFromElement(this.__element)},this.__onInput=e=>{e.currentTarget===this.__element&&this.__updateValueFromElement(this.__element)},e.type!==o.ELEMENT&&e.type!==o.ATTRIBUTE&&e.type!==o.PROPERTY)throw Error("The `bindInput` directive must be used in an element or attribute binding");this.__isAttribute=e.type===o.ATTRIBUTE||e.type===o.PROPERTY}render(e,t){return this.__isAttribute?this.__computeValueFromHost(e,t):n}update(e,[t,n]){return e.element!==this.__element&&this.__setElement(e.element),n!==this.__prop&&(this.__prop=n),t!==this.__host&&(this.__host=t),t&&!this.__isAttribute&&this.__updateValueFromHost(t),this.render(t,n)}__computeValueFromHost(e,t){if(!(typeof e!=`object`||!e||!(t in e)))return e[t]}__updateValueFromHost(e){if(!this.__prop||!this.__element)return;let t=this.__computeValueFromHost(e,this.__prop),n=this.__element;if(t!==this.__lastValue)if(this.__lastValue=t,G(n))switch(n.type.toLowerCase()){case`select-multiple`:let e=Array.isArray(t)?t:[t];for(let t of n.options)e.includes(t.value)&&(t.selected=!0);break;default:n.value=String(t??``)}else if(W(n))switch(n.type.toLowerCase()){case`checkbox`:n.checked=t===!0;break;case`number`:case`date`:case`time`:case`datetime-local`:n.valueAsNumber=t;break;default:n.value=String(t??``)}else `value`in n&&(n.value=t)}__setElement(e){this.__element&&this.__removeListenersFromElement(this.__element),this.__element=e,this.__addListenersToElement(e)}__removeListenersFromElement(e){e.removeEventListener(`change`,this.__onChange),e.removeEventListener(`input`,this.__onInput)}__addListenersToElement(e){e.addEventListener(`change`,this.__onChange),e.addEventListener(`input`,this.__onInput)}__getValueFromElement(e){let t;if(G(e))switch(e.type.toLowerCase()){case`select-multiple`:t=[...e.selectedOptions].map(e=>e.value);break;default:t=e.value}else if(W(e))switch(e.type.toLowerCase()){case`checkbox`:t=e.checked===!0;break;case`number`:case`date`:case`time`:case`datetime-local`:t=e.valueAsNumber;break;default:t=e.value}else `value`in e&&(t=e.value);return t}__updateValueFromElement(e){if(!this.__prop||!this.__host||typeof this.__host!=`object`||!(this.__prop in this.__host))return;let t=this.__getValueFromElement(e);this.__lastValue=t,this.__host[this.__prop]=t}reconnected(){this.__element&&this.__addListenersToElement(this.__element)}disconnected(){this.__element&&this.__removeListenersFromElement(this.__element)}});function we(e,t){return Ce(e,t)}var K={autofocus:!1,disabled:!1,init:void 0,required:!1,style:void 0,styles:void 0},Te=class{constructor(e){this.host=e}TEXTFIELD(e,t,n){return J(e,this.host,t,n)}TEXTAREA(e,t,n){return Ae(e,this.host,t,n)}TOGGLEBUTTON(e,t){return Fe(this.host,e,t)}SWITCH(e,t,n){return q(e,this.host,t,n)}CHECKBOX(e,t,n){return Ee(e,this.host,t,n)}SLIDER(e,t,n){return De(e,this.host,t,n)}SELECT(e,t,n,r){return Oe(e,this.host,t,n,r)}CHIPSELECT(e,t,n,r){return ke(e,this.host,t,n,r)}FILTER(e,t,n,r){return Me(e,this.host,t,n,r)}};function q(e,t,n,r){let a={...K,type:`button`,checkbox:!1,overline:void 0,supportingText:void 0,position:`leading`,leadingContent:void 0,trailingSupportingText:void 0,...r};return a.style={"user-select":`none`,cursor:a.disabled||a.type===`text`?`initial`:`pointer`,...a.style},customElements.get(`md-list-item`)||O(()=>import(`./list-item-01GiotL2.js`).then(e=>e.t),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),customElements.get(`md-switch`)||O(()=>import(`./switch-D_y6MiJL.js`),__vite__mapDeps([6,2,3,7,8,9]),import.meta.url),i`
		<md-list-item
			type="${a.type}"
			@click=${()=>{a.disabled||a.type===`button`&&(t[n]=!t[n])}}
			@change=${e=>{if(a.type===`text`){let r=e.target;if(a.checkbox&&r.nodeName===`MD-CHECKBOX`){let e=r;e.updateComplete.then(()=>t[n]=e.checked)}else if(!a.checkbox&&r.nodeName===`MD-SWITCH`){let e=r;e.updateComplete.then(()=>t[n]=e.selected)}}}}
			?disabled=${a.disabled}
			style=${j(a.style?d(a.style):void 0)}
		>
			${a.position===`trailing`&&a.leadingContent?i`<div slot="start">${a.leadingContent}</div>`:null}
			${a.checkbox?i`
						<md-checkbox
							slot="${a.position===`leading`?`start`:`end`}"
							?checked=${t[n]}
							?inert=${a.type===`button`}
							?disabled=${a.disabled}
						></md-checkbox>
					`:i`
						<md-switch
							slot="${a.position===`leading`?`start`:`end`}"
							?selected=${t[n]}
							?inert=${a.type===`button`}
							?disabled=${a.disabled}
						></md-switch>
					`}
			${a.overline?i`<div slot="overline">${a.overline}</div>`:null}
			<div slot="headline">${e}</div>
			${a.supportingText?i`<div slot="supporting-text">${a.supportingText}</div>`:null}
			${a.trailingSupportingText?i`<div slot="trailing-supporting-text">
						${a.trailingSupportingText}
					</div>`:null}
		</md-list-item>
	`}function Ee(e,t,n,r){return q(e,t,n,{...r,checkbox:!0})}function De(e,t,n,r){let a={...K,min:0,max:10,step:1,range:!1,eventType:`input`,timeoutMs:0,ticks:!1,persistLabel:!1,labeled:!0,...r},o=z();function s(){let e=o.value;e.range?t[n]=[e.valueStart,e.valueEnd]:t[n]=e.value}let c=new A(s,a.timeoutMs);function l(e){e.type===a.eventType&&(e.type===`input`?c.call():s())}return customElements.get(`md-slider`)||O(()=>import(`./slider-CskP9zLe.js`),__vite__mapDeps([10,2,11,3,7,8,9,12]),import.meta.url),i`
		<div class="flex items-center gap-3 flex-1">
			${e?i`<span>${e}</span>`:null}
			<md-slider
				?disabled=${a.disabled}
				${H(o)}
				?persist-label=${a.persistLabel}
				class="flex-1"
				?ticks=${a.ticks}
				?labeled=${a.labeled}
				min=${a.min}
				max=${a.max}
				?range=${a.range}
				value-start=${j(a.range?t[n][0]:void 0)}
				value-end=${j(a.range?t[n][1]:void 0)}
				value=${j(a.range?void 0:t[n])}
				step=${a.step}
				@input=${l}
				@change=${l}
				style=${j(a.style?d(a.style):void 0)}
			>
			</md-slider>
		</div>
	`}function Oe(e,t,n,r=[],a){let o={...K,menuPositioning:`absolute`,supportingText:void 0,...a??{}},s=z();return i`
		<md-filled-select
			${H(s)}
			?disabled=${o.disabled}
			quick
			menu-positioning=${o.menuPositioning}
			value=${r.indexOf(t[n])}
			label=${e}
			@change="${()=>{t[n]=r[s.value.selectedIndex]}}"
			supporting-text=${j(o.supportingText)}
			style="${j(o.style?d(o.style):void 0)}"
		>
			${r.map((e,t)=>i`
					<md-select-option value=${t}>${e}</md-select-option>
				`)}
		</md-filled-select>
	`}function ke(e,t,n,r,a){let o={...K,leadingIcon:i`<md-icon>${fe}</md-icon>`,...a??{}},s=z(),c=()=>s.value,l=z(),u=e=>{e.preventDefault(),c().open=!c().open};return i`
		<md-chip-set class="relative">
			<md-input-chip
				id="chip"
				${H(l)}
				@remove=${u}
				@click=${u}
				_positioning="popover"
			>
				${o.leadingIcon?typeof o.leadingIcon==`string`?i`<md-icon slot="icon">${o.leadingIcon}</md-icon>`:i`<div slot="icon" style="--md-icon-size:18px;">
								${o.leadingIcon}
							</div>`:null}
				<span>${t[n]}</span>
				<md-icon slot="remove-trailing-icon" style="--md-icon-size:18px;">${pe}</md-icon>
			</md-input-chip>

			<md-menu
				quick
				${H(s)}
				anchor="chip"
				@close-menu=${e=>{let{reason:{kind:r},initiator:i}=e.detail;r===`click-selection`&&(t[n]=i.typeaheadText)}}
			>
				${r.map(e=>i`<md-menu-item>
							<div slot="headline">${e}</div>
						</md-menu-item>`)}
			</md-menu>
		</md-chip-set>
	`}function J(e,t,r,a){let o={...K,type:`text`,suffixText:void 0,variant:`filled`,rows:2,resetButton:!1,onInput:void 0,leadingIcon:void 0,supportingText:void 0,placeholder:void 0,maxLength:void 0,...a},s;switch(o.variant){case`filled`:s=u`filled`;break;case`outlined`:s=u`outlined`;break}return(()=>{let a=z(),c=()=>a.value;Pe(c,{init:o.init}).then(e=>{if(o.onInput){let{errorText:t,supportingText:n}=o.onInput?.({textfield:e,value:e.value})??{};t&&(e.errorText=t),n&&(e.supportingText=n)}}),o.resetButton&&(customElements.get(`md-icon-button`)||O(()=>import(`./icon-button-CkmOhOjE.js`).then(e=>e.t),__vite__mapDeps([13,1,2,3,14,8,5]),import.meta.url));let u=o.resetButton?i`<md-icon-button
					slot="trailing-icon"
					form=""
					@click=${()=>{typeof o.resetButton==`object`&&o.resetButton.callback?o.resetButton.callback(c()):(t[r]=``,c().focus())}}
				>
					${typeof o.resetButton==`object`&&o.resetButton.icon?typeof o.resetButton.icon==`string`?i`<md-icon>${o.resetButton.icon}</md-icon>`:o.resetButton.icon:i`
								<svg viewBox="0 96 960 960">
									<path
										d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"
									/>
								</svg>
							`}
				</md-icon-button>`:null;return l`
		<md-${s}-text-field
			?disabled=${o.disabled}
			${H(a)}
			class="flex-1"
			?autofocus=${o.autofocus}
			label=${e.replace(/\*/g,``)}
			type=${o.type}
			.rows=${o.rows}
			?required=${o.required||e.includes(`*`)}
			suffix-text=${j(o.suffixText)}
			supporting-text=${j(o.supportingText)}
			style=${j(o.style?d(o.style):void 0)}
			${we(t,r)}
			placeholder=${j(o.placeholder)}
			maxlength=${o.maxLength??n}
		>
		${o.leadingIcon?typeof o.leadingIcon==`string`?i`<md-icon slot="leading-icon">${o.leadingIcon}</md-icon>`:i`<div slot="leading-icon">${o.leadingIcon}</div>`:null}
		${u}
		</md-${s}-text-field>
	`})()}function Ae(e,t,n,r){return J(e,t,n,{...r,type:`textarea`})}var je={ZeroOrMore:`zero-or-more`,OneOrMore:`one-or-more`,OnlyOne:`only-one`},Me=(e,t,n,r,a)=>{let o={...K,behavior:je.ZeroOrMore,type:`string`,sort:`none`,reverseSort:!1,elevated:!1,...a??{}},s=r.map((e,t)=>({value:e,index:t})).sort((e,t)=>{switch(o.sort){case`alphabet`:return e.value.localeCompare(t.value);default:return 0}});a.reverseSort&&s.reverse();let c=z();return i`
		<div class="flex items-center gap-4 m-0">
			${e?i` <div>${e}</div>`:null}
			<md-chip-set
				class="justify-stretch"
				?autofocus=${o.autofocus}
				${H(c)}
				@click=${async e=>{let r=c.value.chips,i=e.target,a=r.indexOf(i);if(a===-1)return;let s=()=>r.filter(e=>e.selected);switch(o.behavior){case`one-or-more`:if(s().length===0){e.preventDefault();return}break;case`only-one`:r.forEach((e,t)=>e.selected=t===a);break}let l=s().map(e=>o.type===`string`?e.dataset.value:Number(e.dataset.index));t[n]=o.behavior===`only-one`?l[0]:l}}
			>
				${s.map(e=>i`
						<md-filter-chip
							?elevated=${o.elevated}
							?selected=${[].concat(t[n]).includes(o.type===`string`?e.value:e.index)}
							data-value=${e.value}
							data-index=${e.index}
							label=${e.value}
						></md-filter-chip>
					`)}
			</md-chip-set>
		</div>
	`};async function Ne(e){return new Promise(t=>{function n(){let r=e();r&&t(r),requestAnimationFrame(n)}requestAnimationFrame(n)})}async function Pe(e,t){let n=await Ne(e);return t.init?.(n),n}function Fe(e,t,n){let r=n?.icon??`close`,a={...K,icon:r,selectedIcon:r===`close`&&!n?.selectedIcon?`check`:r,...n??{}};return i`
		<md-filled-icon-button
			toggle
			form=""
			?selected=${e[t]}
			@change=${n=>{e[t]=n.target.selected}}
		>
			${typeof a.icon==`string`?i`<md-icon>${a.icon}</md-icon>`:a.icon}
			<div slot="selected">
				${typeof a.selectedIcon==`string`?i`<md-icon>${a.selectedIcon}</md-icon>`:a.selectedIcon}
			</div>
		</md-filled-icon-button>
	`}function Y(e=document){let t=[];return e.querySelectorAll(`*`).forEach(e=>{e.shadowRoot&&(t.push(e),t=t.concat(Y(e.shadowRoot)))}),t}function Ie(e,t=document){let n=Array.from(t.querySelectorAll(e));return Y(`shadowRoot`in t?t.shadowRoot:t).forEach(t=>{let r=t.shadowRoot;r&&(n=n.concat(Array.from(r.querySelectorAll(e))))}),n}function Le(e,t=document){return Ie(e,t)[0]}var X=Le;function Re(e){return X(`page-${e}`)}function ze(){return Re(`main`)}var Be=`-10000 fin paleolithique

-10000 debut neolithique

-3000 fin neolithique

-3000 debut age bronze

-1200 fin age bronze

-1200 debut age du fer

-1200 moise (exode)

-1200 (?) philistins

~-1000 David
Puis Salomon son fils

~-1000 Achéménides

-930 le territoire de canaan (plus tard judee) se divise deja en deux etats
Nord Israel, capitale: samarie (plus ou moins les israelites, les tribus d'israel)
Sud Juda, capitale: jerusalem (le mot "juif" vient de ce royaume), mais le terme "Israel" est central au judaisme. (designe le peuple juif.)
Jerusalem fait partie du royaume de Juda
"Israelite" devient flou, fait reference plutot au nord mais peut faire reference aux deux royaumes (proche culturellement)

-722 Les assyriens detruit le royaume d'Israel

~-700 Cyrene

-600 (?) les philistins n'existent plus.

-558 Les babyloniens detruit le royaume de Juda
mais l'identite de juda persiste, on utilisera plus "juif" qu'"israelite" a partir de ce moment.

-550 fin age du fer

~-500 Guerres mediques
Grecs vs Achemenides (Perses)

~-450 Herodote
Historien et geographe grec

-380 Ordre Corinthien

-331 Alexandre le Grand fonde Alexandrie

-332 Alexandre le Grand en Judee
conquete de la judee/jerusalem (fortifie) par les grecs
Les juifs etaient deja la
juifs = religion (judaisme), traditions, identite centree sur jerusalem et le temple
region autours de jerusalem = judea (sous controle de l'empire perse (achemenides) a ce moment)
Sous domination grecque apres sa victoire
puis influence grecque mais jerusalem reste une population juive.
isr

-68 Strabon
Grec

-63 debut controle de la judee par la rome (antique, voir aussi byzantin)
general Pompée entre a jerusalem avec son armee
Les juifs etaient deja la

-44 Assassinat de Cesar
Aux ides de Mars (origine du bonnet confondu au style de la phrygie.)

-37 Herode Ier
Herode le Grand
Roi de Judee (etat client de Rome a ce moment)

-4 mort herode Ier

6 judee officiellement province romaine

70 Revolte juive
Romains diriges par Titus

79 Eruption du Vesuve
Pline l'Ancien meurt a Stabia

132 debut revolte juive de Bar Kokhba en judee
contre les romains

135 fin revolte juive de Bar Kokhba (mort) en judee
Les romains ont toujours le controle de la region sous Hadrien
renommage de judea -> syria palaestina (syrie-palestine, ou levant)
syria (nord)
palaestina (sud levant, empire juda et environ gaza actuel) = philistia (les philistins)
capitale: Aelia Capitolina
objectif: casser le lien politique avec les juifs(!)

138 mort d'Hadrien

313 Edit de Milan
polytheisme -> christianisme

330 Debut empire Byzantin sous constantin Ier
Mais attention certains utilisent 395 pour dater l'empire Byzantin
Empire byzantin (empire romain d'Orient), capitale: constantinople (anciennement Byzance)
marque changement polytheisme -> christianisme
A l'epoque byzance est une ville grecque
actuellement istanbul

395 Division de l'empire romain ouest (rome) - est (constantinople)
Rupture d'une rome trop grande difficle a gerer
On peut parler reellement de l'empire Byzantin pour la partie est a ce moment la

476 fin/chute empire romain d'Occident
L'empire byzantin lui continue
Rome continue de controler la judee, influence chretienne.

476 debut moyen-age (haut moyen-age)

634-638 Conquete arabo-musulmane en judee
Fin du controle byzantin dans la region (perd syrie et palestine)
sous controle des califats
Debut influence islamique en judee mais religions melangees.

639-642 La Rome Byzantine perd l'Egypte
Continuation de l'effondrement de la rome byzantine au proche-orient
10 a 20 ans pour perdre les regions principales

647-698 Chute progressive de l'empire romain Byzantin en Afrique du Nord

698 Chute de Carthage
La Rome perd la ville contre les Carthaginois (ou punique, colonie a l'origine phenicienne)
L'Empire Byzantin se concentre ensuite surtout en Anatolie, Balkans, et Grece

800 charlemagne (carolingiens)
Le comte de Flandres demarre a peu pres a ce moment la

962 Debut Saint-Empire romain germanique
Otton 1er

1000 capet (capetiens)

1000 fin haut moyen-age

1000 debut moyen-age central
Chevalerie, etc 

1054 Grand Schisme
Separation des eglises

1080 | L'ordre de Saint-Jean de Jérusalem
Ordre des Hospitalier

~1100 Fin 

~1100 Les Croisades

1100 Gothique

1100 Bataille d'Ascalon
premiere croisade

1213 Sieges de Lille

~1250 Mamelouks

1300 fin moyen-age central

1300 debut bas moyen-age
moyen-age tardif

~1300 fin des croisades

~1300 Debut empire ottoman (en anatolie)
Osman 1er
Etat multi-ethnique musulman

~1400 Debut Renaissance
L'Humanisme en decoule (proche du peripateticien)

1492 Juifs expulses d'Espagne

1453 Chute de Constantinople fin reelle empire byzantin
Prise de Constantinople par les Ottomans
Dans le monde orthodoxe, une idee se forme, l'heritage de Byzance ne doit pas disparaitre,
Moscou devient heritiere religieuse = theorie de la "3eme Rome"

1473 Nicolas Copernic
La terre tourne autours du soleil et non l'inverse

1492 Fin Royaume de Grenade

1500 fin bas moyen-age (temps modernes)

1500 Charles de Hasbourg
Charles Quint

~1500 Les Ottomans sont deja tres puissants
Controle Anatolie, Balkans, Constantinople, une partie du Proche-Orient

1516-1517 Conquete Syrie, Egypte, Palestine par les Ottomans
Les Mamelouks en Palestine

~1550 Hasbourg Flandre

1550 Art Jesuite
Confondu avec le baroque
Église du Gesù
Certaines eglises post-baroque peuvent s'inspirer de l'Art Jesuite sans en etre.

1596 Descartes

~1600 Fin Renaissance

~1800 fin de l’Ordre de Saint-Jean de Jérusalem
Ordre des Hospitaliers

1801 Concordat
Entre Napoleon Ier et le Pape Pie VII
Retabli la paix entre l'Etat francais et l'Eglise apres la Revolution.

1848 Louis-Napoleon Bonaparte (Napoleon III)
Premier president de la France
Ne pas confondre avec Bonaparte 1er (son oncle)

1848 Printemps des peuples

1853 Guerre de Crimee

1899 1ere convention de La Haye

1907 2nd convention de La Haye

1914 1ere guerre mondiale

1915 Correspondance Hussein–McMahon
Promesse des britannique aux arabes
en echange: arabes se soulevent contre les ottomans

1917. Declaration Balfour
Lettre d'intention, royaume-uni favorable a la creation en Palestine d'un foyer national pour le peuple juif.
condition: ne pas nuire aux droits des populations non juives existantes(!)

1917 Debut transition fin empire ottoman
entre 1917-1918
Il n'y avait pas vraiment d'etat d'israel ou de palestine encore.
Region controlee par l'empire ottoman avec des populations mixtes
Avant cette periode la palestine = mutasarrifat de Jérusalem (un peu autonome) delimite par le vilayet de Beyrout (Nord) sans la partie sud (vers Acre, galillee), vilayet de Damas (sud-ouest), vallee du jourdain (associee a ce dernier).
La palestine existait mais juste un territoire (constituait d'arabes palestiniens + juifs immigres debut XXe siecle (minoritaires)), 

1918 Fin 1ere guerre mondiale

1918 Fin transition fin empire ottoman
entre 1917-1918

1920 Palestine mandataire (angleterre)
aucune division, etat administratif plein
Les populations restent arabo-musulmans, avec minorite juive.
Mais beaucoup de juifs immigrent aussi (aliyot)

1923 accords franco-britannique

1947 plan partage ONU
Beaucoup d'arabes sont contraints de s'exiler (exode Nakba)
Des guerres eclatent entre forces juives et armees arabes

1948 Fin palestine mandataire
et debut guerre israelo-palestinienne

1988 OLP
Organisation de liberation de la Palestine

2005 Retrait d'Israel dans la bande de Gaza
Anciennement controlee
`;function Z(e){return e.startsWith(`~-`)?-Number(e.slice(2)):e.startsWith(`~`)?Number(e.slice(1)):Number(e)}function Ve(e){return e.split(`

`).map(e=>{let t=e.split(`
`),[n,...r]=t[0].split(` `);return{date:n,title:r.join(` `),content:t.slice(1).join(`
`)}}).sort((e,t)=>Z(e.date)-Z(t.date))}var Q=Ve(Be),$=class extends _{constructor(...e){super(...e),this.page=`main`,this.F=new Te(this),this.dateIndex=0}updated(e){if(e.has(`page`)){let e=k.includes(this.page)?this.page:`404`;ve(Object.assign({"./pages/page-404.ts":()=>O(()=>import(`./page-404-Cjx1iWPi.js`),__vite__mapDeps([15,2,16]),import.meta.url),"./pages/page-main.ts":()=>O(()=>import(`./page-main-B24gchau.js`),__vite__mapDeps([17,2,18,3,0,1,4,5,16]),import.meta.url)}),`./pages/page-${e}.ts`,3).then(()=>{console.log(`Page ${e} loaded.`)}).catch(()=>{})}if(e.has(`dateIndex`)){let e=ze();e.updateComplete.then(()=>{e.focusSelectedItem()})}}previousDateIndex(){Q.length&&(this.dateIndex=(this.dateIndex-1+Q.length)%Q.length)}nextDateIndex(){Q.length&&(this.dateIndex=(this.dateIndex+1)%Q.length)}};E([f()],$.prototype,`page`,void 0),E([f()],$.prototype,`dateIndex`,void 0),$=E([T(`historical-dates:store`)],$);var He=new $;export{ce as _,M as a,f as b,he as c,O as d,E as f,oe as g,le as h,P as i,_e as l,w as m,Q as n,k as o,T as p,X as r,ge as s,He as t,me as u,ae as v,_ as y};