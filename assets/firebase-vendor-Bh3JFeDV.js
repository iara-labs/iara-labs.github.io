/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var t={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},n={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const e=t[r],s=r+1<t.length,o=s?t[r+1]:0,a=r+2<t.length,c=a?t[r+2]:0,h=e>>2,l=(3&e)<<4|o>>4;let u=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(u=64)),i.push(n[h],n[l],n[u],n[d])}return i.join("")},encodeString(t,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(t):this.encodeByteArray(e(t),n)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],o=s<t.length?n[t.charAt(s)]:0;++s;const a=s<t.length?n[t.charAt(s)]:64;++s;const c=s<t.length?n[t.charAt(s)]:64;if(++s,null==e||null==o||null==a||null==c)throw new i;const h=e<<2|o>>4;if(r.push(h),64!==a){const t=o<<4&240|a>>2;if(r.push(t),64!==c){const t=a<<6&192|c;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class i extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const r=function(t){return function(t){const i=e(t);return n.encodeByteArray(i,!0)}(t).replace(/\./g,"")},s=()=>{try{
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */().__FIREBASE_DEFAULTS__||(()=>{if("undefined"==typeof process)return;const e=t.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(i){return}const e=t&&function(t){try{return n.decodeString(t,!0)}catch(i){}return null}(t[1]);return e&&JSON.parse(e)})()}catch(e){return}},o=()=>s()?.config;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}const h={};let l=!1;function u(t,e){if("undefined"==typeof window||"undefined"==typeof document||!c(window.location.host)||h[t]===e||h[t]||l)return;function n(t){return`__firebase__banner__${t}`}h[t]=e;const i="__firebase__banner",r=function(){const t={prod:[],emulator:[]};for(const e of Object.keys(h))h[e]?t.emulator.push(e):t.prod.push(e);return t}().prod.length>0;function s(){const t=function(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}(i),e=n("text"),s=document.getElementById(e)||document.createElement("span"),o=n("learnmore"),a=document.getElementById(o)||document.createElement("a"),c=n("preprendIcon"),h=document.getElementById(c)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(t.created){const e=t.element;!function(t){t.style.display="flex",t.style.background="#7faaf0",t.style.position="fixed",t.style.bottom="5px",t.style.left="5px",t.style.padding=".5em",t.style.borderRadius="5px",t.style.alignItems="center"}(e),function(t,e){t.setAttribute("id",e),t.innerText="Learn more",t.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",t.setAttribute("target","__blank"),t.style.paddingLeft="5px",t.style.textDecoration="underline"}(a,o);const n=function(){const t=document.createElement("span");return t.style.cursor="pointer",t.style.marginLeft="16px",t.style.fontSize="24px",t.innerHTML=" &times;",t.onclick=()=>{l=!0,function(){const t=document.getElementById(i);t&&t.remove()}()},t}();!function(t,e){t.setAttribute("width","24"),t.setAttribute("id",e),t.setAttribute("height","24"),t.setAttribute("viewBox","0 0 24 24"),t.setAttribute("fill","none"),t.style.marginLeft="-6px"}(h,c),e.append(h,s,a,n),document.body.appendChild(e)}r?(s.innerText="Preview backend disconnected.",h.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(h.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',s.innerText="Preview backend running in this workspace."),s.setAttribute("id",e)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",s):s()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,d.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,f.prototype.create)}}class f{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(p,(t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`})}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new d(i,o,n)}}const p=/\{\$([^}]+)}/g;function g(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(m(n)&&m(s)){if(!g(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function m(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(t){return t&&t._delegate?t._delegate:t}class v{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new a;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),n=t?.optional??!1;if(!this.isInitialized(e)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:e})}catch(i){if(n)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:w})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});n.resolve(t)}catch(e){}}}}clearInstance(t=w){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=w){return this.instances.has(t)}getOptions(t=w){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[r,s]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(r)&&s.resolve(i);return i}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),i=this.onInitCallbacks.get(n)??new Set;i.add(t),this.onInitCallbacks.set(n,i);const r=this.instances.get(n);return r&&t(r,n),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===w?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}var i;return n||null}normalizeInstanceIdentifier(t=w){return this.component?this.component.multipleInstances?t:w:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class _{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new E(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(b||(b={}));const T={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},S=b.INFO,C={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},I=(t,e,...n)=>{if(!(e<t.logLevel||((new Date).toISOString(),C[e])))throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class A{constructor(t){this.name=t,this._logLevel=S,this._logHandler=I,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in b))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?T[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...t),this._logHandler(this,b.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...t),this._logHandler(this,b.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,b.INFO,...t),this._logHandler(this,b.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,b.WARN,...t),this._logHandler(this,b.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...t),this._logHandler(this,b.ERROR,...t)}}let D,N;const k=new WeakMap,R=new WeakMap,O=new WeakMap,x=new WeakMap,L=new WeakMap;let M={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return R.get(t);if("objectStoreNames"===e)return t.objectStoreNames||O.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return V(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function P(t){return"function"==typeof t?(e=t)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(N||(N=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(F(this),t),V(k.get(this))}:function(...t){return V(e.apply(F(this),t))}:function(t,...n){const i=e.call(F(this),t,...n);return O.set(i,t.sort?t.sort():[t]),V(i)}:(t instanceof IDBTransaction&&function(t){if(R.has(t))return;const e=new Promise((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)});R.set(t,e)}(t),n=t,(D||(D=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some(t=>n instanceof t)?new Proxy(t,M):t);var e,n}function V(t){if(t instanceof IDBRequest)return function(t){const e=new Promise((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(V(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)});return e.then(e=>{e instanceof IDBCursor&&k.set(e,t)}).catch(()=>{}),L.set(e,t),e}(t);if(x.has(t))return x.get(t);const e=P(t);return e!==t&&(x.set(t,e),L.set(e,t)),e}const F=t=>L.get(t),U=["get","getKey","getAll","getAllKeys","count"],B=["put","add","delete","clear"],j=new Map;function $(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(j.get(e))return j.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=B.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!U.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return j.set(e,s),s}var q;q=M,M={...q,get:(t,e,n)=>$(t,e)||q.get(t,e,n),has:(t,e)=>!!$(t,e)||q.has(t,e)};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(function(t){const e=t.getComponent();return"VERSION"===e?.type}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}const H="@firebase/app",G="0.14.4",K=new A("@firebase/app"),Q="@firebase/app-compat",W="@firebase/analytics-compat",X="@firebase/analytics",J="@firebase/app-check-compat",Y="@firebase/app-check",Z="@firebase/auth",tt="@firebase/auth-compat",et="@firebase/database",nt="@firebase/data-connect",it="@firebase/database-compat",rt="@firebase/functions",st="@firebase/functions-compat",ot="@firebase/installations",at="@firebase/installations-compat",ct="@firebase/messaging",ht="@firebase/messaging-compat",lt="@firebase/performance",ut="@firebase/performance-compat",dt="@firebase/remote-config",ft="@firebase/remote-config-compat",pt="@firebase/storage",gt="@firebase/storage-compat",mt="@firebase/firestore",yt="@firebase/ai",vt="@firebase/firestore-compat",wt="firebase",Et="[DEFAULT]",_t={[H]:"fire-core",[Q]:"fire-core-compat",[X]:"fire-analytics",[W]:"fire-analytics-compat",[Y]:"fire-app-check",[J]:"fire-app-check-compat",[Z]:"fire-auth",[tt]:"fire-auth-compat",[et]:"fire-rtdb",[nt]:"fire-data-connect",[it]:"fire-rtdb-compat",[rt]:"fire-fn",[st]:"fire-fn-compat",[ot]:"fire-iid",[at]:"fire-iid-compat",[ct]:"fire-fcm",[ht]:"fire-fcm-compat",[lt]:"fire-perf",[ut]:"fire-perf-compat",[dt]:"fire-rc",[ft]:"fire-rc-compat",[pt]:"fire-gcs",[gt]:"fire-gcs-compat",[mt]:"fire-fst",[vt]:"fire-fst-compat",[yt]:"fire-vertex","fire-js":"fire-js",[wt]:"fire-js-all"},bt=new Map,Tt=new Map,St=new Map;function Ct(t,e){try{t.container.addComponent(e)}catch(n){K.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function It(t){const e=t.name;if(St.has(e))return K.debug(`There were multiple attempts to register component ${e}.`),!1;St.set(e,t);for(const n of bt.values())Ct(n,t);for(const n of Tt.values())Ct(n,t);return!0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const At=new f("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dt{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new v("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t,e={}){let n=t;"object"!=typeof e&&(e={name:e});const i={name:Et,automaticDataCollectionEnabled:!0,...e},r=i.name;if("string"!=typeof r||!r)throw At.create("bad-app-name",{appName:String(r)});if(n||(n=o()),!n)throw At.create("no-options");const s=bt.get(r);if(s){if(g(n,s.options)&&g(i,s.config))return s;throw At.create("duplicate-app",{appName:r})}const a=new _(r);for(const o of St.values())a.addComponent(o);const c=new Dt(n,i,a);return bt.set(r,c),c}function kt(t,e,n){let i=_t[t]??t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),s=e.match(/\s|\//);if(r||s){const t=[`Unable to register library "${i}" with version "${e}":`];return r&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&s&&t.push("and"),s&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void K.warn(t.join(" "))}It(new v(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="firebase-heartbeat-store";let Ot=null;function xt(){return Ot||(Ot=function(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=V(o);return i&&o.addEventListener("upgradeneeded",t=>{i(V(o.result),t.oldVersion,t.newVersion,V(o.transaction),t)}),n&&o.addEventListener("blocked",t=>n(t.oldVersion,t.newVersion,t)),a.then(t=>{s&&t.addEventListener("close",()=>s()),r&&t.addEventListener("versionchange",t=>r(t.oldVersion,t.newVersion,t))}).catch(()=>{}),a}("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)try{t.createObjectStore(Rt)}catch(n){}}}).catch(t=>{throw At.create("idb-open",{originalErrorMessage:t.message})})),Ot}async function Lt(t,e){try{const n=(await xt()).transaction(Rt,"readwrite"),i=n.objectStore(Rt);await i.put(e,Mt(t)),await n.done}catch(n){if(n instanceof d)K.warn(n.message);else{const t=At.create("idb-set",{originalErrorMessage:n?.message});K.warn(t.message)}}}function Mt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ft(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Vt();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===e||this._heartbeatsCache.heartbeats.some(t=>t.date===e))return;if(this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats.length>30){const t=function(t){if(0===t.length)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(t,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){K.warn(t)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const t=Vt(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let i=t.slice();for(const r of t){const t=n.find(t=>t.agent===r.agent);if(t){if(t.dates.push(r.date),Ut(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ut(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=r(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return K.warn(t),""}}}function Vt(){return(new Date).toISOString().substring(0,10)}class Ft{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(n){e(n)}}).then(()=>!0).catch(()=>!1)}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=(await xt()).transaction(Rt),n=await e.objectStore(Rt).get(Mt(t));return await e.done,n}catch(e){if(e instanceof d)K.warn(e.message);else{const t=At.create("idb-get",{originalErrorMessage:e?.message});K.warn(t.message)}}}(this.app);return t?.heartbeats?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const e=await this.read();return Lt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){if(await this._canUseIndexedDBPromise){const e=await this.read();return Lt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:[...e.heartbeats,...t.heartbeats]})}}}function Ut(t){return r(JSON.stringify({version:2,heartbeats:t})).length}It(new v("platform-logger",t=>new z(t),"PRIVATE")),It(new v("heartbeat",t=>new Pt(t),"PRIVATE")),kt(H,G,""),kt(H,G,"esm2020"),kt("fire-js",""),
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
kt("firebase","12.4.0","app");var Bt,jt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var t;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function n(t,e,n){n||(n=0);const i=Array(16);if("string"==typeof e)for(var r=0;r<16;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;r<16;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];let s,o=t.g[3];s=e+(o^n&(r^o))+i[0]+3614090360&4294967295,s=o+(r^(e=n+(s<<7&4294967295|s>>>25))&(n^r))+i[1]+3905402710&4294967295,o=e+(s<<12&4294967295|s>>>20),s=r+(n^o&(e^n))+i[2]+606105819&4294967295,s=n+(e^(r=o+(s<<17&4294967295|s>>>15))&(o^e))+i[3]+3250441966&4294967295,s=e+(o^(n=r+(s<<22&4294967295|s>>>10))&(r^o))+i[4]+4118548399&4294967295,s=o+(r^(e=n+(s<<7&4294967295|s>>>25))&(n^r))+i[5]+1200080426&4294967295,o=e+(s<<12&4294967295|s>>>20),s=r+(n^o&(e^n))+i[6]+2821735955&4294967295,s=n+(e^(r=o+(s<<17&4294967295|s>>>15))&(o^e))+i[7]+4249261313&4294967295,s=e+(o^(n=r+(s<<22&4294967295|s>>>10))&(r^o))+i[8]+1770035416&4294967295,s=o+(r^(e=n+(s<<7&4294967295|s>>>25))&(n^r))+i[9]+2336552879&4294967295,o=e+(s<<12&4294967295|s>>>20),s=r+(n^o&(e^n))+i[10]+4294925233&4294967295,s=n+(e^(r=o+(s<<17&4294967295|s>>>15))&(o^e))+i[11]+2304563134&4294967295,s=e+(o^(n=r+(s<<22&4294967295|s>>>10))&(r^o))+i[12]+1804603682&4294967295,s=o+(r^(e=n+(s<<7&4294967295|s>>>25))&(n^r))+i[13]+4254626195&4294967295,o=e+(s<<12&4294967295|s>>>20),s=r+(n^o&(e^n))+i[14]+2792965006&4294967295,s=n+(e^(r=o+(s<<17&4294967295|s>>>15))&(o^e))+i[15]+1236535329&4294967295,s=e+(r^o&((n=r+(s<<22&4294967295|s>>>10))^r))+i[1]+4129170786&4294967295,s=o+(n^r&((e=n+(s<<5&4294967295|s>>>27))^n))+i[6]+3225465664&4294967295,o=e+(s<<9&4294967295|s>>>23),s=r+(e^n&(o^e))+i[11]+643717713&4294967295,s=n+(o^e&((r=o+(s<<14&4294967295|s>>>18))^o))+i[0]+3921069994&4294967295,s=e+(r^o&((n=r+(s<<20&4294967295|s>>>12))^r))+i[5]+3593408605&4294967295,s=o+(n^r&((e=n+(s<<5&4294967295|s>>>27))^n))+i[10]+38016083&4294967295,o=e+(s<<9&4294967295|s>>>23),s=r+(e^n&(o^e))+i[15]+3634488961&4294967295,s=n+(o^e&((r=o+(s<<14&4294967295|s>>>18))^o))+i[4]+3889429448&4294967295,s=e+(r^o&((n=r+(s<<20&4294967295|s>>>12))^r))+i[9]+568446438&4294967295,s=o+(n^r&((e=n+(s<<5&4294967295|s>>>27))^n))+i[14]+3275163606&4294967295,o=e+(s<<9&4294967295|s>>>23),s=r+(e^n&(o^e))+i[3]+4107603335&4294967295,s=n+(o^e&((r=o+(s<<14&4294967295|s>>>18))^o))+i[8]+1163531501&4294967295,s=e+(r^o&((n=r+(s<<20&4294967295|s>>>12))^r))+i[13]+2850285829&4294967295,s=o+(n^r&((e=n+(s<<5&4294967295|s>>>27))^n))+i[2]+4243563512&4294967295,o=e+(s<<9&4294967295|s>>>23),s=r+(e^n&(o^e))+i[7]+1735328473&4294967295,s=n+(o^e&((r=o+(s<<14&4294967295|s>>>18))^o))+i[12]+2368359562&4294967295,s=e+((n=r+(s<<20&4294967295|s>>>12))^r^o)+i[5]+4294588738&4294967295,s=o+((e=n+(s<<4&4294967295|s>>>28))^n^r)+i[8]+2272392833&4294967295,o=e+(s<<11&4294967295|s>>>21),s=r+(o^e^n)+i[11]+1839030562&4294967295,s=n+((r=o+(s<<16&4294967295|s>>>16))^o^e)+i[14]+4259657740&4294967295,s=e+((n=r+(s<<23&4294967295|s>>>9))^r^o)+i[1]+2763975236&4294967295,s=o+((e=n+(s<<4&4294967295|s>>>28))^n^r)+i[4]+1272893353&4294967295,o=e+(s<<11&4294967295|s>>>21),s=r+(o^e^n)+i[7]+4139469664&4294967295,s=n+((r=o+(s<<16&4294967295|s>>>16))^o^e)+i[10]+3200236656&4294967295,s=e+((n=r+(s<<23&4294967295|s>>>9))^r^o)+i[13]+681279174&4294967295,s=o+((e=n+(s<<4&4294967295|s>>>28))^n^r)+i[0]+3936430074&4294967295,o=e+(s<<11&4294967295|s>>>21),s=r+(o^e^n)+i[3]+3572445317&4294967295,s=n+((r=o+(s<<16&4294967295|s>>>16))^o^e)+i[6]+76029189&4294967295,s=e+((n=r+(s<<23&4294967295|s>>>9))^r^o)+i[9]+3654602809&4294967295,s=o+((e=n+(s<<4&4294967295|s>>>28))^n^r)+i[12]+3873151461&4294967295,o=e+(s<<11&4294967295|s>>>21),s=r+(o^e^n)+i[15]+530742520&4294967295,s=n+((r=o+(s<<16&4294967295|s>>>16))^o^e)+i[2]+3299628645&4294967295,s=e+(r^((n=r+(s<<23&4294967295|s>>>9))|~o))+i[0]+4096336452&4294967295,s=o+(n^((e=n+(s<<6&4294967295|s>>>26))|~r))+i[7]+1126891415&4294967295,o=e+(s<<10&4294967295|s>>>22),s=r+(e^(o|~n))+i[14]+2878612391&4294967295,s=n+(o^((r=o+(s<<15&4294967295|s>>>17))|~e))+i[5]+4237533241&4294967295,s=e+(r^((n=r+(s<<21&4294967295|s>>>11))|~o))+i[12]+1700485571&4294967295,s=o+(n^((e=n+(s<<6&4294967295|s>>>26))|~r))+i[3]+2399980690&4294967295,o=e+(s<<10&4294967295|s>>>22),s=r+(e^(o|~n))+i[10]+4293915773&4294967295,s=n+(o^((r=o+(s<<15&4294967295|s>>>17))|~e))+i[1]+2240044497&4294967295,s=e+(r^((n=r+(s<<21&4294967295|s>>>11))|~o))+i[8]+1873313359&4294967295,s=o+(n^((e=n+(s<<6&4294967295|s>>>26))|~r))+i[15]+4264355552&4294967295,o=e+(s<<10&4294967295|s>>>22),s=r+(e^(o|~n))+i[6]+2734768916&4294967295,s=n+(o^((r=o+(s<<15&4294967295|s>>>17))|~e))+i[13]+1309151649&4294967295,s=e+(r^((n=r+(s<<21&4294967295|s>>>11))|~o))+i[4]+4149444226&4294967295,s=o+(n^((e=n+(s<<6&4294967295|s>>>26))|~r))+i[11]+3174756917&4294967295,o=e+(s<<10&4294967295|s>>>22),s=r+(e^(o|~n))+i[2]+718787259&4294967295,s=n+(o^((r=o+(s<<15&4294967295|s>>>17))|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+o&4294967295}function i(t,e){this.h=e;const n=[];let i=!0;for(let r=t.length-1;r>=0;r--){const s=0|t[r];i&&s==e||(n[r]=s,i=!1)}this.g=n}!function(t,e){function n(){}n.prototype=e.prototype,t.F=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.D=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}(e,function(){this.blockSize=-1}),e.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},e.prototype.v=function(t,e){void 0===e&&(e=t.length);const i=e-this.blockSize,r=this.C;let s=this.h,o=0;for(;o<e;){if(0==s)for(;o<=i;)n(this,t,o),o+=this.blockSize;if("string"==typeof t){for(;o<e;)if(r[s++]=t.charCodeAt(o++),s==this.blockSize){n(this,r),s=0;break}}else for(;o<e;)if(r[s++]=t[o++],s==this.blockSize){n(this,r),s=0;break}}this.h=s,this.o+=e},e.prototype.A=function(){var t=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;e=8*this.o;for(var n=t.length-8;n<t.length;++n)t[n]=255&e,e/=256;for(this.v(t),t=Array(16),e=0,n=0;n<4;++n)for(let i=0;i<32;i+=8)t[e++]=this.g[n]>>>i&255;return t};var r={};function s(t){return-128<=t&&t<128?function(t){var e=r;return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=function(t){return new i([0|t],t<0?-1:0)}(t)}(t):new i([0|t],t<0?-1:0)}function o(t){if(isNaN(t)||!isFinite(t))return a;if(t<0)return d(o(-t));const e=[];let n=1;for(let i=0;t>=n;i++)e[i]=t/n|0,n*=4294967296;return new i(e,0)}var a=s(0),c=s(1),h=s(16777216);function l(t){if(0!=t.h)return!1;for(let e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function u(t){return-1==t.h}function d(t){const e=t.g.length,n=[];for(let i=0;i<e;i++)n[i]=~t.g[i];return new i(n,~t.h).add(c)}function f(t,e){return t.add(d(e))}function p(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function g(t,e){this.g=t,this.h=e}function m(t,e){if(l(e))throw Error("division by zero");if(l(t))return new g(a,a);if(u(t))return e=m(d(t),e),new g(d(e.g),d(e.h));if(u(e))return e=m(t,d(e)),new g(d(e.g),e.h);if(t.g.length>30){if(u(t)||u(e))throw Error("slowDivide_ only works with positive integers.");for(var n=c,i=e;i.l(t)<=0;)n=y(n),i=y(i);var r=v(n,1),s=v(i,1);for(i=v(i,2),n=v(n,2);!l(i);){var h=s.add(i);h.l(t)<=0&&(r=r.add(n),s=h),i=v(i,1),n=v(n,1)}return e=f(t,r.j(e)),new g(r,e)}for(r=a;t.l(e)>=0;){for(n=Math.max(1,Math.floor(t.m()/e.m())),i=(i=Math.ceil(Math.log(n)/Math.LN2))<=48?1:Math.pow(2,i-48),h=(s=o(n)).j(e);u(h)||h.l(t)>0;)h=(s=o(n-=i)).j(e);l(s)&&(s=c),r=r.add(s),t=f(t,h)}return new g(r,t)}function y(t){const e=t.g.length+1,n=[];for(let i=0;i<e;i++)n[i]=t.i(i)<<1|t.i(i-1)>>>31;return new i(n,t.h)}function v(t,e){const n=e>>5;e%=32;const r=t.g.length-n,s=[];for(let i=0;i<r;i++)s[i]=e>0?t.i(i+n)>>>e|t.i(i+n+1)<<32-e:t.i(i+n);return new i(s,t.h)}(t=i.prototype).m=function(){if(u(this))return-d(this).m();let t=0,e=1;for(let n=0;n<this.g.length;n++){const i=this.i(n);t+=(i>=0?i:4294967296+i)*e,e*=4294967296}return t},t.toString=function(t){if((t=t||10)<2||36<t)throw Error("radix out of range: "+t);if(l(this))return"0";if(u(this))return"-"+d(this).toString(t);const e=o(Math.pow(t,6));var n=this;let i="";for(;;){const r=m(n,e).g;let s=(((n=f(n,r.j(e))).g.length>0?n.g[0]:n.h)>>>0).toString(t);if(l(n=r))return s+i;for(;s.length<6;)s="0"+s;i=s+i}},t.i=function(t){return t<0?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return u(t=f(this,t))?-1:l(t)?0:1},t.abs=function(){return u(this)?d(this):this},t.add=function(t){const e=Math.max(this.g.length,t.g.length),n=[];let r=0;for(let i=0;i<=e;i++){let e=r+(65535&this.i(i))+(65535&t.i(i)),s=(e>>>16)+(this.i(i)>>>16)+(t.i(i)>>>16);r=s>>>16,e&=65535,s&=65535,n[i]=s<<16|e}return new i(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(l(this)||l(t))return a;if(u(this))return u(t)?d(this).j(d(t)):d(d(this).j(t));if(u(t))return d(this.j(d(t)));if(this.l(h)<0&&t.l(h)<0)return o(this.m()*t.m());const e=this.g.length+t.g.length,n=[];for(var r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(let e=0;e<t.g.length;e++){const i=this.i(r)>>>16,s=65535&this.i(r),o=t.i(e)>>>16,a=65535&t.i(e);n[2*r+2*e]+=s*a,p(n,2*r+2*e),n[2*r+2*e+1]+=i*a,p(n,2*r+2*e+1),n[2*r+2*e+1]+=s*o,p(n,2*r+2*e+1),n[2*r+2*e+2]+=i*o,p(n,2*r+2*e+2)}for(t=0;t<e;t++)n[t]=n[2*t+1]<<16|n[2*t];for(t=e;t<2*e;t++)n[t]=0;return new i(n,0)},t.B=function(t){return m(this,t).h},t.and=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let i=0;i<e;i++)n[i]=this.i(i)&t.i(i);return new i(n,this.h&t.h)},t.or=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let i=0;i<e;i++)n[i]=this.i(i)|t.i(i);return new i(n,this.h|t.h)},t.xor=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let i=0;i<e;i++)n[i]=this.i(i)^t.i(i);return new i(n,this.h^t.h)},e.prototype.digest=e.prototype.A,e.prototype.reset=e.prototype.u,e.prototype.update=e.prototype.v,i.prototype.add=i.prototype.add,i.prototype.multiply=i.prototype.j,i.prototype.modulo=i.prototype.B,i.prototype.compare=i.prototype.l,i.prototype.toNumber=i.prototype.m,i.prototype.toString=i.prototype.toString,i.prototype.getBits=i.prototype.i,i.fromNumber=o,i.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if((n=n||10)<2||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return d(t(e.substring(1),n));if(e.indexOf("-")>=0)throw Error('number format error: interior "-" character');const i=o(Math.pow(n,8));let r=a;for(let a=0;a<e.length;a+=8){var s=Math.min(8,e.length-a);const t=parseInt(e.substring(a,a+s),n);s<8?(s=o(Math.pow(n,s)),r=r.j(s).add(o(t))):(r=r.j(i),r=r.add(o(t)))}return r},Bt=i}).apply(void 0!==jt?jt:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var $t,qt,zt,Ht,Gt,Kt,Qt,Wt,Xt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var t,e=Object.defineProperty,n=function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Xt&&Xt];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);function i(t,i){if(i)t:{var r=n;t=t.split(".");for(var s=0;s<t.length-1;s++){var o=t[s];if(!(o in r))break t;r=r[o]}(i=i(s=r[t=t[t.length-1]]))!=s&&null!=i&&e(r,t,{configurable:!0,writable:!0,value:i})}}i("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(t){return t||function(t){var e,n=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push([e,t[e]]);return n}});
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var r=r||{},s=this||self;function o(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function a(t,e,n){return t.call.apply(t.bind,arguments)}function c(t,e,n){return(c=a).apply(null,arguments)}function h(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function l(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Ob=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}var u="undefined"!=typeof AsyncContext&&"function"==typeof AsyncContext.Snapshot?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function d(t){const e=t.length;if(e>0){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function f(t,e){for(let i=1;i<arguments.length;i++){const e=arguments[i];var n=typeof e;if("array"==(n="object"!=n?n:e?Array.isArray(e)?"array":n:"null")||"object"==n&&"number"==typeof e.length){n=t.length||0;const i=e.length||0;t.length=n+i;for(let r=0;r<i;r++)t[n+r]=e[r]}else t.push(e)}}function p(t){s.setTimeout(()=>{throw t},0)}function g(){var t=E;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var m=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return this.h>0?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new y,t=>t.reset());class y{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let v,w=!1,E=new class{constructor(){this.h=this.g=null}add(t,e){const n=m.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},_=()=>{const t=Promise.resolve(void 0);v=()=>{t.then(b)}};function b(){for(var t;t=g();){try{t.h.call(t.g)}catch(n){p(n)}var e=m;e.j(t),e.h<100&&(e.h++,t.next=e.g,e.g=t)}w=!1}function T(){this.u=this.u,this.C=this.C}function S(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},S.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!s.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};s.addEventListener("test",t,e),s.removeEventListener("test",t,e)}catch(n){}return t}();function I(t){return/^[\s\xa0]*$/.test(t)}function A(t,e){S.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,e)}l(A,S),A.prototype.init=function(t,e){const n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=e,(e=t.relatedTarget)||("mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement)),this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&A.Z.h.call(this)},A.prototype.h=function(){A.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),N=0;function k(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++N,this.da=this.fa=!1}function R(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function O(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function x(t){const e={};for(const n in t)e[n]=t[n];return e}const L="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(t,e){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)t[n]=i[n];for(let e=0;e<L.length;e++)n=L[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function P(t){this.src=t,this.g={},this.h=0}function V(t,e){const n=e.type;if(n in t.g){var i,r=t.g[n],s=Array.prototype.indexOf.call(r,e,void 0);(i=s>=0)&&Array.prototype.splice.call(r,s,1),i&&(R(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function F(t,e,n,i){for(let r=0;r<t.length;++r){const s=t[r];if(!s.da&&s.listener==e&&s.capture==!!n&&s.ha==i)return r}return-1}P.prototype.add=function(t,e,n,i,r){const s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);const o=F(t,e,i,r);return o>-1?(e=t[o],n||(e.fa=!1)):((e=new k(e,this.src,s,!!i,r)).fa=n,t.push(e)),e};var U="closure_lm_"+(1e6*Math.random()|0),B={};function j(t,e,n,i,r){if(Array.isArray(e)){for(let s=0;s<e.length;s++)j(t,e[s],n,i,r);return null}return n=Q(n),t&&t[D]?t.J(e,n,!!o(i)&&!!i.capture,r):function(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");const a=o(r)?!!r.capture:!!r;let c=G(t);if(c||(t[U]=c=new P(t)),(n=c.add(e,n,i,a,s)).proxy)return n;if(i=function(){const t=H;return function e(n){return t.call(e.src,e.listener,n)}}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)C||(r=a),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(z(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}(t,e,n,!1,i,r)}function $(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)$(t,e[s],n,i,r);else i=o(i)?!!i.capture:!!i,n=Q(n),t&&t[D]?(t=t.i,(s=String(e).toString())in t.g&&(n=F(e=t.g[s],n,i,r))>-1&&(R(e[n]),Array.prototype.splice.call(e,n,1),0==e.length&&(delete t.g[s],t.h--))):t&&(t=G(t))&&(e=t.g[e.toString()],t=-1,e&&(t=F(e,n,i,r)),(n=t>-1?e[t]:null)&&q(n))}function q(t){if("number"!=typeof t&&t&&!t.da){var e=t.src;if(e&&e[D])V(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(z(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=G(e))?(V(n,t),0==n.h&&(n.src=null,e[U]=null)):R(t)}}}function z(t){return t in B?B[t]:B[t]="on"+t}function H(t,e){if(t.da)t=!0;else{e=new A(e,this);const n=t.listener,i=t.ha||t.src;t.fa&&q(t),t=n.call(i,e)}return t}function G(t){return(t=t[U])instanceof P?t:null}var K="__closure_events_fn_"+(1e9*Math.random()>>>0);function Q(t){return"function"==typeof t?t:(t[K]||(t[K]=function(e){return t.handleEvent(e)}),t[K])}function W(){T.call(this),this.i=new P(this),this.M=this,this.G=null}function X(t,e){var n,i=t.G;if(i)for(n=[];i;i=i.G)n.push(i);if(t=t.M,i=e.type||e,"string"==typeof e)e=new S(e,t);else if(e instanceof S)e.target=e.target||t;else{var r=e;M(e=new S(i,t),r)}let s,o;if(r=!0,n)for(o=n.length-1;o>=0;o--)s=e.g=n[o],r=J(s,i,!0,e)&&r;if(s=e.g=t,r=J(s,i,!0,e)&&r,r=J(s,i,!1,e)&&r,n)for(o=0;o<n.length;o++)s=e.g=n[o],r=J(s,i,!1,e)&&r}function J(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();let r=!0;for(let s=0;s<e.length;++s){const o=e[s];if(o&&!o.da&&o.capture==n){const e=o.listener,n=o.ha||o.src;o.fa&&V(t.i,o),r=!1!==e.call(n,i)&&r}}return r&&!i.defaultPrevented}function Y(t){t.g=function(t,e){if("function"!=typeof t){if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=c(t.handleEvent,t)}return Number(e)>2147483647?-1:s.setTimeout(t,e||0)}(()=>{t.g=null,t.i&&(t.i=!1,Y(t))},t.l);const e=t.h;t.h=null,t.m.apply(null,e)}l(W,T),W.prototype[D]=!0,W.prototype.removeEventListener=function(t,e,n,i){$(this,t,e,n,i)},W.prototype.N=function(){if(W.Z.N.call(this),this.i){var t=this.i;for(const e in t.g){const n=t.g[e];for(let t=0;t<n.length;t++)R(n[t]);delete t.g[e],t.h--}}this.G=null},W.prototype.J=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},W.prototype.K=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};class Z extends T{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:Y(this)}N(){super.N(),this.g&&(s.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(t){T.call(this),this.h=t,this.g={}}l(tt,T);var et=[];function nt(t){O(t.g,function(t,e){this.g.hasOwnProperty(e)&&q(t)},t),t.g={}}tt.prototype.N=function(){tt.Z.N.call(this),nt(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var it=s.JSON.stringify,rt=s.JSON.parse,st=class{stringify(t){return s.JSON.stringify(t,void 0)}parse(t){return s.JSON.parse(t,void 0)}};function ot(){}function at(){}var ct={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ht(){S.call(this,"d")}function lt(){S.call(this,"c")}l(ht,S),l(lt,S);var ut={},dt=null;function ft(){return dt=dt||new W}function pt(t){S.call(this,ut.Ia,t)}function gt(t){const e=ft();X(e,new pt(e))}function mt(t,e){S.call(this,ut.STAT_EVENT,t),this.stat=e}function yt(t){const e=ft();X(e,new mt(e,t))}function vt(t,e){S.call(this,ut.Ja,t),this.size=e}function wt(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return s.setTimeout(function(){t()},e)}function Et(){this.g=!0}function _t(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{const s=JSON.parse(e);if(s)for(t=0;t<s.length;t++)if(Array.isArray(s[t])){var n=s[t];if(!(n.length<2)){var i=n[1];if(Array.isArray(i)&&!(i.length<1)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(let t=1;t<i.length;t++)i[t]=""}}}return it(s)}catch(s){return e}}(t,n)+(i?" "+i:"")})}ut.Ia="serverreachability",l(pt,S),ut.STAT_EVENT="statevent",l(mt,S),ut.Ja="timingevent",l(vt,S),Et.prototype.ua=function(){this.g=!1},Et.prototype.info=function(){};var bt,Tt={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},St={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function Ct(){}function It(t){return encodeURIComponent(String(t))}function At(t){var e=1;t=t.split(":");const n=[];for(;e>0&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Dt(t,e,n,i){this.j=t,this.i=e,this.l=n,this.S=i||1,this.V=new tt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Nt}function Nt(){this.i=null,this.g="",this.h=!1}l(Ct,ot),Ct.prototype.g=function(){return new XMLHttpRequest},bt=new Ct;var kt={},Rt={};function Ot(t,e,n){t.M=1,t.A=fe(ce(e)),t.u=n,t.R=!0,xt(t,null)}function xt(t,e){t.F=Date.now(),Pt(t),t.B=ce(t.A);var n=t.B,i=t.S;Array.isArray(i)||(i=[String(i)]),Ae(n.i,"t",i),t.C=0,n=t.j.L,t.h=new Nt,t.g=gn(t.j,n?e:null,!t.u),t.P>0&&(t.O=new Z(c(t.Y,t,t.g),t.P)),e=t.V,n=t.g,i=t.ba;var r="readystatechange";Array.isArray(r)||(r&&(et[0]=r.toString()),r=et);for(let s=0;s<r.length;s++){const t=j(n,r[s],i||e.handleEvent,!1,e.h||e);if(!t)break;e.g[t.key]=t}e=t.J?x(t.J):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,e)):(t.v="GET",t.g.ea(t.B,t.v,null,e)),gt(),function(t,e,n,i,r,s){t.info(function(){if(t.g)if(s){var o="",a=s.split("&");for(let t=0;t<a.length;t++){var c=a[t].split("=");if(c.length>1){const t=c[0];c=c[1];const e=t.split("_");o=e.length>=2&&"type"==e[1]?o+(t+"=")+c+"&":o+(t+"=redacted&")}}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o})}(t.i,t.v,t.B,t.l,t.S,t.u)}function Lt(t){return!!t.g&&"GET"==t.v&&2!=t.M&&t.j.Aa}function Mt(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Rt:(n=Number(e.substring(n,i)),isNaN(n)?kt:(i+=1)+n>e.length?Rt:(e=e.slice(i,i+n),t.C=i+n,e))}function Pt(t){t.T=Date.now()+t.H,Vt(t,t.H)}function Vt(t,e){if(null!=t.D)throw Error("WatchDog timer not null");t.D=wt(c(t.aa,t),e)}function Ft(t){t.D&&(s.clearTimeout(t.D),t.D=null)}function Ut(t){0==t.j.I||t.K||ln(t.j,t)}function Bt(t){Ft(t);var e=t.O;e&&"function"==typeof e.dispose&&e.dispose(),t.O=null,nt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.dispose())}function jt(t,e){try{var n=t.j;if(0!=n.I&&(n.g==t||ne(n.h,t)))if(!t.L&&ne(n.h,t)&&3==n.I){try{var i=n.Ba.g.parse(e)}catch(l){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.v){if(n.g){if(!(n.g.F+3e3<t.F))break t;hn(n),Ye(n)}on(n),yt(18)}}else n.xa=r[1],0<n.xa-n.K&&r[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=wt(c(n.Va,n),6e3));ee(n.h)<=1&&n.ta&&(n.ta=void 0)}else dn(n,11)}else if((t.L||n.g==t)&&hn(n),!I(e))for(r=n.Ba.g.parse(e),e=0;e<r.length;e++){let c=r[e];const l=c[0];if(!(l<=n.K))if(n.K=l,c=c[1],2==n.I)if("c"==c[0]){n.M=c[1],n.ba=c[2];const e=c[3];null!=e&&(n.ka=e,n.j.info("VER="+n.ka));const r=c[4];null!=r&&(n.za=r,n.j.info("SVER="+n.za));const l=c[5];null!=l&&"number"==typeof l&&l>0&&(i=1.5*l,n.O=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(ie(s,s.h),s.h=null))}if(i.G){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.wa=t,de(i.J,i.G,t))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-t.F,n.j.info("Handshake RTT: "+n.T+"ms"));var o=t;if((i=n).na=pn(i,i.L?i.ba:null,i.W),o.L){re(i.h,o);var a=o,h=i.O;h&&(a.H=h),a.D&&(Ft(a),Pt(a)),i.g=o}else sn(i);n.i.length>0&&tn(n)}else"stop"!=c[0]&&"close"!=c[0]||dn(n,7);else 3==n.I&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?dn(n,7):Je(n):"noop"!=c[0]&&n.l&&n.l.qa(c),n.A=0)}gt()}catch(l){}}Dt.prototype.ba=function(t){t=t.target;const e=this.O;e&&3==Ke(t)?e.j():this.Y(t)},Dt.prototype.Y=function(t){try{if(t==this.g)t:{const c=Ke(this.g),h=this.g.ya();if(this.g.ca(),!(c<3)&&(3!=c||this.g&&(this.h.h||this.g.la()||Qe(this.g)))){this.K||4!=c||7==h||gt(),Ft(this);var e=this.g.ca();this.X=e;var n=function(t){if(!Lt(t))return t.g.la();const e=Qe(t.g);if(""===e)return"";let n="";const i=e.length,r=4==Ke(t.g);if(!t.h.i){if("undefined"==typeof TextDecoder)return Bt(t),Ut(t),"";t.h.i=new s.TextDecoder}for(let s=0;s<i;s++)t.h.h=!0,n+=t.h.i.decode(e[s],{stream:!(r&&s==i-1)});return e.length=0,t.h.g+=n,t.C=0,t.h.g}(this);if(this.o=200==e,function(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o})}(this.i,this.v,this.B,this.l,this.S,c,e),this.o){if(this.U&&!this.L){e:{if(this.g){var i,r=this.g;if((i=r.g?r.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(i)){var o=i;break e}}o=null}if(!(t=o)){this.o=!1,this.m=3,yt(12),Bt(this),Ut(this);break t}_t(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,jt(this,t)}if(this.R){let e;for(t=!0;!this.K&&this.C<n.length;){if(e=Mt(this,n),e==Rt){4==c&&(this.m=4,yt(14),t=!1),_t(this.i,this.l,null,"[Incomplete Response]");break}if(e==kt){this.m=4,yt(15),_t(this.i,this.l,n,"[Invalid Chunk]"),t=!1;break}_t(this.i,this.l,e,null),jt(this,e)}if(Lt(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=c||0!=n.length||this.h.h||(this.m=1,yt(16),t=!1),this.o=this.o&&t,t){if(n.length>0&&!this.W){this.W=!0;var a=this.j;a.g==this&&a.aa&&!a.P&&(a.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),an(a),a.P=!0,yt(11))}}else _t(this.i,this.l,n,"[Invalid Chunked Response]"),Bt(this),Ut(this)}else _t(this.i,this.l,n,null),jt(this,n);4==c&&Bt(this),this.o&&!this.K&&(4==c?ln(this.j,this):(this.o=!1,Pt(this)))}else(function(t){const e={};t=(t.g&&Ke(t)>=2&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(I(t[i]))continue;var n=At(t[i]);const r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,function(t){return t.join(", ")})})(this.g),400==e&&n.indexOf("Unknown SID")>0?(this.m=3,yt(12)):(this.m=0,yt(13)),Bt(this),Ut(this)}}}catch(ke){}},Dt.prototype.cancel=function(){this.K=!0,Bt(this)},Dt.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(function(t,e){t.info(function(){return"TIMEOUT: "+e})}(this.i,this.B),2!=this.M&&(gt(),yt(17)),Bt(this),this.m=2,Ut(this)):Vt(this,this.T-t)};var Jt=class{constructor(t,e){this.g=t,this.map=e}};function Zt(t){this.l=t||10,t=s.PerformanceNavigationTiming?(t=s.performance.getEntriesByType("navigation")).length>0&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(s.chrome&&s.chrome.loadTimes&&s.chrome.loadTimes()&&s.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function te(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ee(t){return t.h?1:t.g?t.g.size:0}function ne(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ie(t,e){t.g?t.g.add(e):t.h=e}function re(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function se(t){if(null!=t.h)return t.i.concat(t.h.G);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.G);return e}return d(t.i)}Zt.prototype.cancel=function(){if(this.i=se(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var oe=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ae(t){let e;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,t instanceof ae?(this.l=t.l,he(this,t.j),this.o=t.o,this.g=t.g,le(this,t.u),this.h=t.h,ue(this,De(t.i)),this.m=t.m):t&&(e=String(t).match(oe))?(this.l=!1,he(this,e[1]||"",!0),this.o=pe(e[2]||""),this.g=pe(e[3]||"",!0),le(this,e[4]),this.h=pe(e[5]||"",!0),ue(this,e[6]||"",!0),this.m=pe(e[7]||"")):(this.l=!1,this.i=new be(null,this.l))}function ce(t){return new ae(t)}function he(t,e,n){t.j=n?pe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function le(t,e){if(e){if(e=Number(e),isNaN(e)||e<0)throw Error("Bad port number "+e);t.u=e}else t.u=null}function ue(t,e,n){e instanceof be?(t.i=e,function(t,e){e&&!t.j&&(Te(t),t.i=null,t.g.forEach(function(t,e){const n=e.toLowerCase();e!=n&&(Se(this,e),Ae(this,n,t))},t)),t.j=e}(t.i,t.l)):(n||(e=ge(e,Ee)),t.i=new be(e,t.l))}function de(t,e,n){t.i.set(e,n)}function fe(t){return de(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function pe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ge(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,me),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function me(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}ae.prototype.toString=function(){const t=[];var e=this.j;e&&t.push(ge(e,ye,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(ge(e,ye,!0),"@"),t.push(It(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.u)&&t.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(ge(n,"/"==n.charAt(0)?we:ve,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",ge(n,_e)),t.join("")},ae.prototype.resolve=function(t){const e=ce(this);let n=!!t.j;n?he(e,t.j):n=!!t.o,n?e.o=t.o:n=!!t.g,n?e.g=t.g:n=null!=t.u;var i=t.h;if(n)le(e,t.u);else if(n=!!t.h){if("/"!=i.charAt(0))if(this.g&&!this.h)i="/"+i;else{var r=e.h.lastIndexOf("/");-1!=r&&(i=e.h.slice(0,r+1)+i)}if(".."==(r=i)||"."==r)i="";else if(-1!=r.indexOf("./")||-1!=r.indexOf("/.")){i=0==r.lastIndexOf("/",0),r=r.split("/");const t=[];for(let e=0;e<r.length;){const n=r[e++];"."==n?i&&e==r.length&&t.push(""):".."==n?((t.length>1||1==t.length&&""!=t[0])&&t.pop(),i&&e==r.length&&t.push("")):(t.push(n),i=!0)}i=t.join("/")}else i=r}return n?e.h=i:n=""!==t.i.toString(),n?ue(e,De(t.i)):n=!!t.m,n&&(e.m=t.m),e};var ye=/[#\/\?@]/g,ve=/[#\?:]/g,we=/[#\?]/g,Ee=/[#\?@]/g,_e=/#/g;function be(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Te(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(let n=0;n<t.length;n++){const i=t[n].indexOf("=");let r,s=null;i>=0?(r=t[n].substring(0,i),s=t[n].substring(i+1)):r=t[n],e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function Se(t,e){Te(t),e=Ne(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ce(t,e){return Te(t),e=Ne(t,e),t.g.has(e)}function Ie(t,e){Te(t);let n=[];if("string"==typeof e)Ce(t,e)&&(n=n.concat(t.g.get(Ne(t,e))));else for(t=Array.from(t.g.values()),e=0;e<t.length;e++)n=n.concat(t[e]);return n}function Ae(t,e,n){Se(t,e),n.length>0&&(t.i=null,t.g.set(Ne(t,e),d(n)),t.h+=n.length)}function De(t){const e=new be;return e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),e}function Ne(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Re(t,e,n,i,r){try{r&&(r.onload=null,r.onerror=null,r.onabort=null,r.ontimeout=null),i(n)}catch(s){}}function Oe(){this.g=new st}function xe(t){this.i=t.Sb||null,this.h=t.ab||!1}function Le(t,e){W.call(this),this.H=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function Me(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}function Pe(t){t.readyState=4,t.l=null,t.j=null,t.B=null,Ve(t)}function Ve(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function Fe(t){let e="";return O(t,function(t,n){e+=n,e+=":",e+=t,e+="\r\n"}),e}function Ue(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Fe(n),"string"==typeof t?null!=n&&It(n):de(t,e,n))}function Be(t){W.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(t=be.prototype).add=function(t,e){Te(this),this.i=null,t=Ne(this,t);let n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){Te(this),this.g.forEach(function(n,i){n.forEach(function(n){t.call(e,n,i,this)},this)},this)},t.set=function(t,e){return Te(this),this.i=null,Ce(this,t=Ne(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t&&(t=Ie(this,t)).length>0?String(t[0]):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(let i=0;i<e.length;i++){var n=e[i];const r=It(n);n=Ie(this,n);for(let e=0;e<n.length;e++){let i=r;""!==n[e]&&(i+="="+It(n[e])),t.push(i)}}return this.i=t.join("&")},l(xe,ot),xe.prototype.g=function(){return new Le(this.i,this.h)},l(Le,W),(t=Le.prototype).open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=e,this.readyState=1,Ve(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const e={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(e.body=t),(this.H||s).fetch(new Request(this.D,e)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,Pe(this)),this.readyState=0},t.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ve(this)),this.g&&(this.readyState=3,Ve(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(void 0!==s.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Me(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))},t.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.B.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Pe(this):Ve(this),3==this.readyState&&Me(this)}},t.Oa=function(t){this.g&&(this.response=this.responseText=t,Pe(this))},t.Na=function(t){this.g&&(this.response=t,Pe(this))},t.ga=function(){this.g&&Pe(this)},t.setRequestHeader=function(t,e){this.A.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Le.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),l(Be,W);var je=/^https?$/i,$e=["POST","PUT"];function qe(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.o=5,ze(t),Ge(t)}function ze(t){t.A||(t.A=!0,X(t,"complete"),X(t,"error"))}function He(t){if(t.h&&void 0!==r)if(t.v&&4==Ke(t))setTimeout(t.Ca.bind(t),0);else if(X(t,"readystatechange"),4==Ke(t)){t.h=!1;try{const r=t.ca();t:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===r){let e=String(t.D).match(oe)[1]||null;!e&&s.self&&s.self.location&&(e=s.self.location.protocol.slice(0,-1)),i=!je.test(e?e.toLowerCase():"")}n=i}if(n)X(t,"complete"),X(t,"success");else{t.o=6;try{var o=Ke(t)>2?t.g.statusText:""}catch(a){o=""}t.l=o+" ["+t.ca()+"]",ze(t)}}finally{Ge(t)}}}function Ge(t,e){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const i=t.g;t.g=null,e||X(t,"ready");try{i.onreadystatechange=null}catch(n){}}}function Ke(t){return t.g?t.g.readyState:0}function Qe(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function We(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Xe(t){this.za=0,this.i=[],this.j=new Et,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=We("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=We("baseRetryDelayMs",5e3,t),this.Za=We("retryDelaySeedMs",1e4,t),this.Ta=We("forwardChannelMaxRetries",2,t),this.va=We("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new Zt(t&&t.concurrentRequestLimit),this.Ba=new Oe,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function Je(t){if(Ze(t),3==t.I){var e=t.V++,n=ce(t.J);if(de(n,"SID",t.M),de(n,"RID",e),de(n,"TYPE","terminate"),nn(t,n),(e=new Dt(t,t.j,e)).M=2,e.A=fe(ce(n)),n=!1,s.navigator&&s.navigator.sendBeacon)try{n=s.navigator.sendBeacon(e.A.toString(),"")}catch(i){}!n&&s.Image&&((new Image).src=e.A,n=!0),n||(e.g=gn(e.j,null),e.g.ea(e.A)),e.F=Date.now(),Pt(e)}fn(t)}function Ye(t){t.g&&(an(t),t.g.cancel(),t.g=null)}function Ze(t){Ye(t),t.v&&(s.clearTimeout(t.v),t.v=null),hn(t),t.h.cancel(),t.m&&("number"==typeof t.m&&s.clearTimeout(t.m),t.m=null)}function tn(t){if(!te(t.h)&&!t.m){t.m=!0;var e=t.Ea;v||_(),w||(v(),w=!0),E.add(e,t),t.D=0}}function en(t,e){var n;n=e?e.l:t.V++;const i=ce(t.J);de(i,"SID",t.M),de(i,"RID",n),de(i,"AID",t.K),nn(t,i),t.u&&t.o&&Ue(i,t.u,t.o),n=new Dt(t,t.j,n,t.D+1),null===t.u&&(n.J=t.o),e&&(t.i=e.G.concat(t.i)),e=rn(t,n,1e3),n.H=Math.round(.5*t.va)+Math.round(.5*t.va*Math.random()),ie(t.h,n),Ot(n,i,e)}function nn(t,e){t.H&&O(t.H,function(t,n){de(e,n,t)}),t.l&&O({},function(t,n){de(e,n,t)})}function rn(t,e,n){n=Math.min(t.i.length,n);const i=t.l?c(t.l.Ka,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?n>0?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let c=!0;for(let h=0;h<n;h++){var s=r[h].g;const n=r[h].map;if((s-=e)<0)e=Math.max(0,r[h].g-100),c=!1;else try{s="req"+s+"_"||"";try{var a=n instanceof Map?n:Object.entries(n);for(const[e,n]of a){let i=n;o(n)&&(i=it(n)),t.push(s+e+"="+encodeURIComponent(i))}}catch(Yt){throw t.push(s+"type="+encodeURIComponent("_badmap")),Yt}}catch(Yt){i&&i(n)}}if(c){a=t.join("&");break t}}a=void 0}return t=t.i.splice(0,n),e.G=t,a}function sn(t){if(!t.g&&!t.v){t.Y=1;var e=t.Da;v||_(),w||(v(),w=!0),E.add(e,t),t.A=0}}function on(t){return!(t.g||t.v||t.A>=3||(t.Y++,t.v=wt(c(t.Da,t),un(t,t.A)),t.A++,0))}function an(t){null!=t.B&&(s.clearTimeout(t.B),t.B=null)}function cn(t){t.g=new Dt(t,t.j,"rpc",t.Y),null===t.u&&(t.g.J=t.o),t.g.P=0;var e=ce(t.na);de(e,"RID","rpc"),de(e,"SID",t.M),de(e,"AID",t.K),de(e,"CI",t.F?"0":"1"),!t.F&&t.ia&&de(e,"TO",t.ia),de(e,"TYPE","xmlhttp"),nn(t,e),t.u&&t.o&&Ue(e,t.u,t.o),t.O&&(t.g.H=t.O);var n=t.g;t=t.ba,n.M=1,n.A=fe(ce(e)),n.u=null,n.R=!0,xt(n,t)}function hn(t){null!=t.C&&(s.clearTimeout(t.C),t.C=null)}function ln(t,e){var n=null;if(t.g==e){hn(t),an(t),t.g=null;var i=2}else{if(!ne(t.h,e))return;n=e.G,re(t.h,e),i=1}if(0!=t.I)if(e.o)if(1==i){n=e.u?e.u.length:0,e=Date.now()-e.F;var r=t.D;X(i=ft(),new vt(i,n)),tn(t)}else sn(t);else if(3==(r=e.m)||0==r&&e.X>0||!(1==i&&function(t,e){return!(ee(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.G.concat(t.i),0):1==t.I||2==t.I||t.D>=(t.Sa?0:t.Ta)||(t.m=wt(c(t.Ea,t,e),un(t,t.D)),t.D++,0)))}(t,e)||2==i&&on(t)))switch(n&&n.length>0&&(e=t.h,e.i=e.i.concat(n)),r){case 1:dn(t,5);break;case 4:dn(t,10);break;case 3:dn(t,6);break;default:dn(t,2)}}function un(t,e){let n=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(n*=2),n*e}function dn(t,e){if(t.j.info("Error code "+e),2==e){var n=c(t.bb,t),i=t.Ua;const e=!i;i=new ae(i||"//www.google.com/images/cleardot.gif"),s.location&&"http"==s.location.protocol||he(i,"https"),fe(i),e?function(t,e){const n=new Et;if(s.Image){const i=new Image;i.onload=h(Re,n,"TestLoadImage: loaded",!0,e,i),i.onerror=h(Re,n,"TestLoadImage: error",!1,e,i),i.onabort=h(Re,n,"TestLoadImage: abort",!1,e,i),i.ontimeout=h(Re,n,"TestLoadImage: timeout",!1,e,i),s.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}(i.toString(),n):function(t,e){new Et;const n=new AbortController,i=setTimeout(()=>{n.abort(),Re(0,0,!1,e)},1e4);fetch(t,{signal:n.signal}).then(t=>{clearTimeout(i),t.ok?Re(0,0,!0,e):Re(0,0,!1,e)}).catch(()=>{clearTimeout(i),Re(0,0,!1,e)})}(i.toString(),n)}else yt(2);t.I=0,t.l&&t.l.pa(e),fn(t),Ze(t)}function fn(t){if(t.I=0,t.ja=[],t.l){const e=se(t.h);0==e.length&&0==t.i.length||(f(t.ja,e),f(t.ja,t.i),t.h.i.length=0,d(t.i),t.i.length=0),t.l.oa()}}function pn(t,e,n){var i=n instanceof ae?ce(n):new ae(n);if(""!=i.g)e&&(i.g=e+"."+i.g),le(i,i.u);else{var r=s.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;const t=new ae(null);i&&he(t,i),e&&(t.g=e),r&&le(t,r),n&&(t.h=n),i=t}return n=t.G,e=t.wa,n&&e&&de(i,n,e),de(i,"VER",t.ka),nn(t,i),i}function gn(t,e,n){if(e&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Aa&&!t.ma?new Be(new xe({ab:n})):new Be(t.ma)).Fa(t.L),e}function mn(){}function yn(){}function vn(t,e){W.call(this),this.g=new Xe(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.sa&&(t?t["X-WebChannel-Client-Profile"]=e.sa:t={"X-WebChannel-Client-Profile":e.sa}),this.g.U=t,(t=e&&e.Qb)&&!I(t)&&(this.g.u=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!I(e)&&(this.g.G=e,null!==(t=this.h)&&e in t&&e in(t=this.h)&&delete t[e]),this.j=new _n(this)}function wn(t){ht.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function En(){lt.call(this),this.status=1}function _n(t){this.g=t}(t=Be.prototype).Fa=function(t){this.H=t},t.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():bt.g(),this.g.onreadystatechange=u(c(this.Ca,this));try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(o){return void qe(this,o)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),r=s.FormData&&t instanceof s.FormData,!(Array.prototype.indexOf.call($e,e,void 0)>=0)||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(o){qe(this,o)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,X(this,"complete"),X(this,"abort"),Ge(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ge(this,!0)),Be.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?He(this):this.Xa())},t.Xa=function(){He(this)},t.isActive=function(){return!!this.g},t.ca=function(){try{return Ke(this)>2?this.g.status:-1}catch(t){return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.La=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),rt(e)}},t.ya=function(){return this.o},t.Ha=function(){return"string"==typeof this.l?this.l:String(this.l)},(t=Xe.prototype).ka=8,t.I=1,t.connect=function(t,e,n,i){yt(0),this.W=t,this.H=e||{},n&&void 0!==i&&(this.H.OSID=n,this.H.OAID=i),this.F=this.X,this.J=pn(this,null,this.W),tn(this)},t.Ea=function(t){if(this.m)if(this.m=null,1==this.I){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const r=new Dt(this,this.j,t);let s=this.o;if(this.U&&(s?(s=x(s),M(s,this.U)):s=this.U),null!==this.u||this.R||(r.J=s,s=null),this.S)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.map&&"string"==typeof(i=i.map.__data__)?i.length:void 0))break;if((e+=i)>4096){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=rn(this,r,e),de(n=ce(this.J),"RID",t),de(n,"CVER",22),this.G&&de(n,"X-HTTP-Session-Id",this.G),nn(this,n),s&&(this.R?e="headers="+It(Fe(s))+"&"+e:this.u&&Ue(n,this.u,s)),ie(this.h,r),this.Ra&&de(n,"TYPE","init"),this.S?(de(n,"$req",e),de(n,"SID","null"),r.U=!0,Ot(r,n,null)):Ot(r,n,e),this.I=2}}else 3==this.I&&(t?en(this,t):0==this.i.length||te(this.h)||en(this))},t.Da=function(){if(this.v=null,cn(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=wt(c(this.Wa,this),t)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,yt(10),Ye(this),cn(this))},t.Va=function(){null!=this.C&&(this.C=null,Ye(this),on(this),yt(19))},t.bb=function(t){t?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},(t=mn.prototype).ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){},yn.prototype.g=function(t,e){return new vn(t,e)},l(vn,W),vn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},vn.prototype.close=function(){Je(this.g)},vn.prototype.o=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=it(t),t=n);e.i.push(new Jt(e.Ya++,t)),3==e.I&&tn(e)},vn.prototype.N=function(){this.g.l=null,delete this.j,Je(this.g),delete this.g,vn.Z.N.call(this)},l(wn,ht),l(En,lt),l(_n,mn),_n.prototype.ra=function(){X(this.g,"a")},_n.prototype.qa=function(t){X(this.g,new wn(t))},_n.prototype.pa=function(t){X(this.g,new En)},_n.prototype.oa=function(){X(this.g,"b")},yn.prototype.createWebChannel=yn.prototype.g,vn.prototype.send=vn.prototype.o,vn.prototype.open=vn.prototype.m,vn.prototype.close=vn.prototype.close,Wt=function(){return new yn},Qt=function(){return ft()},Kt=ut,Gt={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Tt.NO_ERROR=0,Tt.TIMEOUT=8,Tt.HTTP_ERROR=6,Ht=Tt,St.COMPLETE="complete",zt=St,at.EventType=ct,ct.OPEN="a",ct.CLOSE="b",ct.ERROR="c",ct.MESSAGE="d",W.prototype.listen=W.prototype.J,qt=at,Be.prototype.listenOnce=Be.prototype.K,Be.prototype.getLastError=Be.prototype.Ha,Be.prototype.getLastErrorCode=Be.prototype.ya,Be.prototype.getStatus=Be.prototype.ca,Be.prototype.getResponseJson=Be.prototype.La,Be.prototype.getResponseText=Be.prototype.la,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Fa,$t=Be}).apply(void 0!==Xt?Xt:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const Jt="@firebase/firestore",Yt="4.9.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Zt.UNAUTHENTICATED=new Zt(null),Zt.GOOGLE_CREDENTIALS=new Zt("google-credentials-uid"),Zt.FIRST_PARTY=new Zt("first-party-uid"),Zt.MOCK_USER=new Zt("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let te="12.3.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee=new A("@firebase/firestore");function ne(){return ee.logLevel}function ie(t,...e){if(ee.logLevel<=b.DEBUG){const n=e.map(oe);ee.debug(`Firestore (${te}): ${t}`,...n)}}function re(t,...e){if(ee.logLevel<=b.ERROR){const n=e.map(oe);ee.error(`Firestore (${te}): ${t}`,...n)}}function se(t,...e){if(ee.logLevel<=b.WARN){const n=e.map(oe);ee.warn(`Firestore (${te}): ${t}`,...n)}}function oe(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t,e,n){let i="Unexpected state";"string"==typeof e?i=e:n=e,ce(t,i,n)}function ce(t,e,n){let i=`FIRESTORE (${te}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(void 0!==n)try{i+=" CONTEXT: "+JSON.stringify(n)}catch(t){i+=" CONTEXT: "+n}throw re(i),new Error(i)}function he(t,e,n,i){let r="Unexpected state";"string"==typeof n?r=n:i=n,t||ce(e,r,i)}function le(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class de extends d{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ge{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Zt.UNAUTHENTICATED))}shutdown(){}}class me{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class ye{constructor(t){this.t=t,this.currentUser=Zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){he(void 0===this.o,42304);let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new fe;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new fe,t.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const e=r;t.enqueueRetryable(async()=>{await e.promise,await i(this.currentUser)})},o=t=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new fe)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(he("string"==typeof e.accessToken,31837,{l:e}),new pe(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return he(null===t||"string"==typeof t,2055,{h:t}),new Zt(t)}}class ve{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=Zt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class we{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new ve(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(Zt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ee{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _e{constructor(t,e){var n;this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,null!=(n=t)&&void 0!==n.settings&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){he(void 0===this.o,3512);const n=t=>{null!=t.error&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.m;return this.m=t.token,ie("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const i=t=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(t=>i(t)),setTimeout(()=>{if(!this.appCheck){const t=this.V.getImmediate({optional:!0});t?i(t):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ee(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(he("string"==typeof t.token,44558,{tokenResult:t}),this.m=t.token,new Ee(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static newId(){const t=62*Math.floor(256/62);let e="";for(;e.length<20;){const n=be(40);for(let i=0;i<n.length;++i)e.length<20&&n[i]<t&&(e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[i]%62))}return e}}function Se(t,e){return t<e?-1:t>e?1:0}function Ce(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.charAt(i),r=e.charAt(i);if(n!==r)return De(n)===De(r)?Se(n,r):De(n)?1:-1}return Se(t.length,e.length)}const Ie=55296,Ae=57343;function De(t){const e=t.charCodeAt(0);return e>=Ie&&e<=Ae}function Ne(t,e,n){return t.length===e.length&&t.every((t,i)=>n(t,e[i]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="__name__";class Re{constructor(t,e,n){void 0===e?e=0:e>t.length&&ae(637,{offset:e,range:t.length}),void 0===n?n=t.length-e:n>t.length-e&&ae(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Re.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Re?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=Re.compareSegments(t.get(i),e.get(i));if(0!==n)return n}return Se(t.length,e.length)}static compareSegments(t,e){const n=Re.isNumericId(t),i=Re.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?Re.extractNumericId(t).compare(Re.extractNumericId(e)):Ce(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Bt.fromString(t.substring(4,t.length-2))}}class Oe extends Re{construct(t,e,n){return new Oe(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new de(ue.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new Oe(e)}static emptyPath(){return new Oe([])}}const xe=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Le extends Re{construct(t,e,n){return new Le(t,e,n)}static isValidIdentifier(t){return xe.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Le.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===ke}static keyField(){return new Le([ke])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new de(ue.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new de(ue.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new de(ue.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new de(ue.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Le(e)}static emptyPath(){return new Le([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t){this.path=t}static fromPath(t){return new Me(Oe.fromString(t))}static fromName(t){return new Me(Oe.fromString(t).popFirst(5))}static empty(){return new Me(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Oe.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Oe.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Me(new Oe(t.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t,e,n){if(!n)throw new de(ue.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ve(t){if(!Me.isDocumentKey(t))throw new de(ue.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Fe(t){if(Me.isDocumentKey(t))throw new de(ue.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ue(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}function Be(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":ae(12329,{type:typeof t})}function je(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new de(ue.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Be(t);throw new de(ue.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t,e){const n={typeString:t};return e&&(n.value=e),n}function qe(t,e){if(!Ue(t))throw new de(ue.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const r=e[i].typeString,s="value"in e[i]?{value:e[i].value}:void 0;if(!(i in t)){n=`JSON missing required field: '${i}'`;break}const o=t[i];if(r&&typeof o!==r){n=`JSON field '${i}' must be a ${r}.`;break}if(void 0!==s&&o!==s.value){n=`Expected '${i}' field to equal '${s.value}'`;break}}if(n)throw new de(ue.INVALID_ARGUMENT,n);return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze=-62135596800,He=1e6;class Ge{static now(){return Ge.fromMillis(Date.now())}static fromDate(t){return Ge.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*He);return new Ge(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new de(ue.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new de(ue.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ze)throw new de(ue.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new de(ue.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/He}_compareTo(t){return this.seconds===t.seconds?Se(this.nanoseconds,t.nanoseconds):Se(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(qe(t,Ge._jsonSchema))return new Ge(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-ze;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ge._jsonSchemaVersion="firestore/timestamp/1.0",Ge._jsonSchema={type:$e("string",Ge._jsonSchemaVersion),seconds:$e("number"),nanoseconds:$e("number")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke{static fromTimestamp(t){return new Ke(t)}static min(){return new Ke(new Ge(0,0))}static max(){return new Ke(new Ge(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t){return new We(t.readTime,t.key,-1)}class We{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new We(Ke.min(),Me.empty(),-1)}static max(){return new We(Ke.max(),Me.empty(),-1)}}function Xe(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Me.comparator(t.documentKey,e.documentKey),0!==n?n:Se(t.largestBatchId,e.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}class Je{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ye(t){if(t.code!==ue.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;ie("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ze((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Ze?e:Ze.resolve(e)}catch(t){return Ze.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Ze.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Ze.reject(e)}static resolve(t){return new Ze((e,n)=>{e(t)})}static reject(t){return new Ze((e,n)=>{n(t)})}static waitFor(t){return new Ze((e,n)=>{let i=0,r=0,s=!1;t.forEach(t=>{++i,t.next(()=>{++r,s&&r===i&&e()},t=>n(t))}),s=!0,r===i&&e()})}static or(t){let e=Ze.resolve(!1);for(const n of t)e=e.next(t=>t?Ze.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,i)=>{n.push(e.call(this,t,i))}),this.waitFor(n)}static mapArray(t,e){return new Ze((n,i)=>{const r=t.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next(t=>{s[c]=t,++o,o===r&&n(s)},t=>i(t))}})}static doWhile(t,e){return new Ze((n,i)=>{const r=()=>{!0===t()?e().next(()=>{r()},i):n()};r()})}}function tn(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ae(t),this.ue=t=>e.writeSequenceNumber(t))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}function nn(t){return null==t}function rn(t){return 0===t&&1/t==-1/0}function sn(t,e){let n=e;const i=t.length;for(let r=0;r<i;r++){const e=t.charAt(r);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function on(t){return t+""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hn(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.ce=-1;class ln{constructor(t,e){this.comparator=t,this.root=e||dn.EMPTY}insert(t,e){return new ln(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,dn.BLACK,null,null))}remove(t){return new ln(this.comparator,this.root.remove(t,this.comparator).copy(null,null,dn.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new un(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new un(this.root,t,this.comparator,!1)}getReverseIterator(){return new un(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new un(this.root,t,this.comparator,!0)}}class un{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class dn{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:dn.RED,this.left=null!=i?i:dn.EMPTY,this.right=null!=r?r:dn.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new dn(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return dn.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return dn.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,dn.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,dn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ae(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw ae(27949);return t+(this.isRed()?0:1)}}dn.EMPTY=null,dn.RED=!0,dn.BLACK=!1,dn.EMPTY=new class{constructor(){this.size=0}get key(){throw ae(57766)}get value(){throw ae(16141)}get color(){throw ae(16727)}get left(){throw ae(29726)}get right(){throw ae(36894)}copy(t,e,n,i,r){return this}insert(t,e,n){return new dn(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fn{constructor(t){this.comparator=t,this.data=new ln(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new pn(this.data.getIterator())}getIteratorFrom(t){return new pn(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof fn))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new fn(this.comparator);return e.data=t,e}}class pn{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t){this.fields=t,t.sort(Le.comparator)}static empty(){return new gn([])}unionWith(t){let e=new fn(Le.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new gn(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ne(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new mn("Invalid base64 string: "+t):t}}(t);return new yn(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new yn(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Se(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}yn.EMPTY_BYTE_STRING=new yn("");const vn=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wn(t){if(he(!!t,39018),"string"==typeof t){let e=0;const n=vn.exec(t);if(he(!!n,46558,{timestamp:t}),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:En(t.seconds),nanos:En(t.nanos)}}function En(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function _n(t){return"string"==typeof t?yn.fromBase64String(t):yn.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn="server_timestamp",Tn="__type__",Sn="__previous_value__",Cn="__local_write_time__";function In(t){const e=(t?.mapValue?.fields||{})[Tn]?.stringValue;return e===bn}function An(t){const e=t.mapValue.fields[Sn];return In(e)?An(e):e}function Dn(t){const e=wn(t.mapValue.fields[Cn].timestampValue);return new Ge(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t,e,n,i,r,s,o,a,c,h){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c,this.isUsingEmulator=h}}const kn="(default)";class Rn{constructor(t,e){this.projectId=t,this.database=e||kn}static empty(){return new Rn("","")}get isDefaultDatabase(){return this.database===kn}isEqual(t){return t instanceof Rn&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On="__type__",xn={},Ln="__vector__",Mn="value";function Pn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?In(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)?9007199254740991:function(t){const e=(t?.mapValue?.fields||{})[On]?.stringValue;return e===Ln}(t)?10:11:ae(28295,{value:t})}function Vn(t,e){if(t===e)return!0;const n=Pn(t);if(n!==Pn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Dn(t).isEqual(Dn(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=wn(t.timestampValue),i=wn(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return _n(t.bytesValue).isEqual(_n(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return En(t.geoPointValue.latitude)===En(e.geoPointValue.latitude)&&En(t.geoPointValue.longitude)===En(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return En(t.integerValue)===En(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=En(t.doubleValue),i=En(e.doubleValue);return n===i?rn(n)===rn(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return Ne(t.arrayValue.values||[],e.arrayValue.values||[],Vn);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(an(n)!==an(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!Vn(n[r],i[r])))return!1;return!0}(t,e);default:return ae(52216,{left:t})}}function Fn(t,e){return void 0!==(t.values||[]).find(t=>Vn(t,e))}function Un(t,e){if(t===e)return 0;const n=Pn(t),i=Pn(e);if(n!==i)return Se(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Se(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=En(t.integerValue||t.doubleValue),i=En(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Bn(t.timestampValue,e.timestampValue);case 4:return Bn(Dn(t),Dn(e));case 5:return Ce(t.stringValue,e.stringValue);case 6:return function(t,e){const n=_n(t),i=_n(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let r=0;r<n.length&&r<i.length;r++){const t=Se(n[r],i[r]);if(0!==t)return t}return Se(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Se(En(t.latitude),En(e.latitude));return 0!==n?n:Se(En(t.longitude),En(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return jn(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},i=e.fields||{},r=n[Mn]?.arrayValue,s=i[Mn]?.arrayValue,o=Se(r?.values?.length||0,s?.values?.length||0);return 0!==o?o:jn(r,s)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===xn&&e===xn)return 0;if(t===xn)return 1;if(e===xn)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const t=Ce(i[o],s[o]);if(0!==t)return t;const e=Un(n[i[o]],r[s[o]]);if(0!==e)return e}return Se(i.length,s.length)}(t.mapValue,e.mapValue);default:throw ae(23264,{he:n})}}function Bn(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Se(t,e);const n=wn(t),i=wn(e),r=Se(n.seconds,i.seconds);return 0!==r?r:Se(n.nanos,i.nanos)}function jn(t,e){const n=t.values||[],i=e.values||[];for(let r=0;r<n.length&&r<i.length;++r){const t=Un(n[r],i[r]);if(t)return t}return Se(n.length,i.length)}function $n(t){return qn(t)}function qn(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=wn(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return _n(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return Me.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=qn(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${qn(t.fields[r])}`;return n+"}"}(t.mapValue):ae(61005,{value:t})}function zn(t){switch(Pn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=An(t);return e?16+zn(e):16;case 5:return 2*t.stringValue.length;case 6:return _n(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(t){return(t.values||[]).reduce((t,e)=>t+zn(e),0)}(t.arrayValue);case 10:case 11:return function(t){let e=0;return cn(t.fields,(t,n)=>{e+=t.length+zn(n)}),e}(t.mapValue);default:throw ae(13486,{value:t})}}function Hn(t){return!!t&&"integerValue"in t}function Gn(t){return!!t&&"arrayValue"in t}function Kn(t){return!!t&&"mapValue"in t}function Qn(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return cn(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Qn(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qn(t.arrayValue.values[n]);return e}return{...t}}class Wn{constructor(t){this.value=t}static empty(){return new Wn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Kn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Qn(e)}setAll(t){let e=Le.emptyPath(),n={},i=[];t.forEach((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=Qn(t):i.push(r.lastSegment())});const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());Kn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Vn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Kn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){cn(e,(e,n)=>t[e]=n);for(const i of n)delete t[i]}clone(){return new Wn(Qn(this.value))}}function Xn(t){const e=[];return cn(t.fields,(t,n)=>{const i=new Le([t]);if(Kn(n)){const t=Xn(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)}),new gn(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Jn{constructor(t,e,n,i,r,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(t){return new Jn(t,0,Ke.min(),Ke.min(),Ke.min(),Wn.empty(),0)}static newFoundDocument(t,e,n,i){return new Jn(t,1,e,Ke.min(),n,i,0)}static newNoDocument(t,e){return new Jn(t,2,e,Ke.min(),Ke.min(),Wn.empty(),0)}static newUnknownDocument(t,e){return new Jn(t,3,e,Ke.min(),Ke.min(),Wn.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Ke.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Wn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Wn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ke.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Jn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Jn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t,e){this.position=t,this.inclusive=e}}function Zn(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?Me.comparator(Me.fromName(o.referenceValue),n.key):Un(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function ti(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vn(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,e="asc"){this.field=t,this.dir=e}}function ni(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{}class ri extends ii{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new ui(t,e,n):"array-contains"===e?new gi(t,n):"in"===e?new mi(t,n):"not-in"===e?new yi(t,n):"array-contains-any"===e?new vi(t,n):new ri(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new di(t,n):new fi(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&void 0===e.nullValue&&this.matchesComparison(Un(e,this.value)):null!==e&&Pn(this.value)===Pn(e)&&this.matchesComparison(Un(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class si extends ii{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new si(t,e)}matches(t){return oi(this)?void 0===this.filters.find(e=>!e.matches(t)):void 0!==this.filters.find(e=>e.matches(t))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function oi(t){return"and"===t.op}function ai(t){return function(t){for(const e of t.filters)if(e instanceof si)return!1;return!0}(t)&&oi(t)}function ci(t){if(t instanceof ri)return t.field.canonicalString()+t.op.toString()+$n(t.value);if(ai(t))return t.filters.map(t=>ci(t)).join(",");{const e=t.filters.map(t=>ci(t)).join(",");return`${t.op}(${e})`}}function hi(t,e){return t instanceof ri?function(t,e){return e instanceof ri&&t.op===e.op&&t.field.isEqual(e.field)&&Vn(t.value,e.value)}(t,e):t instanceof si?function(t,e){return e instanceof si&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce((t,n,i)=>t&&hi(n,e.filters[i]),!0)}(t,e):void ae(19439)}function li(t){return t instanceof ri?function(t){return`${t.field.canonicalString()} ${t.op} ${$n(t.value)}`}(t):t instanceof si?function(t){return t.op.toString()+" {"+t.getFilters().map(li).join(" ,")+"}"}(t):"Filter"}class ui extends ri{constructor(t,e,n){super(t,e,n),this.key=Me.fromName(n.referenceValue)}matches(t){const e=Me.comparator(t.key,this.key);return this.matchesComparison(e)}}class di extends ri{constructor(t,e){super(t,"in",e),this.keys=pi(0,e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class fi extends ri{constructor(t,e){super(t,"not-in",e),this.keys=pi(0,e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function pi(t,e){return(e.arrayValue?.values||[]).map(t=>Me.fromName(t.referenceValue))}class gi extends ri{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Gn(e)&&Fn(e.arrayValue,this.value)}}class mi extends ri{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Fn(this.value.arrayValue,e)}}class yi extends ri{constructor(t,e){super(t,"not-in",e)}matches(t){if(Fn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&void 0===e.nullValue&&!Fn(this.value.arrayValue,e)}}class vi extends ri{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Gn(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>Fn(this.value.arrayValue,t))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.Te=null}}function Ei(t,e=null,n=[],i=[],r=null,s=null,o=null){return new wi(t,e,n,i,r,s,o)}function _i(t){const e=le(t);if(null===e.Te){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>ci(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),nn(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>$n(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>$n(t)).join(",")),e.Te=t}return e.Te}function bi(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ni(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!hi(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ti(t.startAt,e.startAt)&&ti(t.endAt,e.endAt)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Si(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ci(t){const e=le(t);if(null===e.Ie){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",i=function(t){let e=new fn(Le.comparator);return t.filters.forEach(t=>{t.getFlattenedFilters().forEach(t=>{t.isInequality()&&(e=e.add(t.field))})}),e}(e);i.forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ei(i,n))}),t.has(Le.keyField().canonicalString())||e.Ie.push(new ei(Le.keyField(),n))}return e.Ie}function Ii(t){const e=le(t);return e.Ee||(e.Ee=function(t,e){if("F"===t.limitType)return Ei(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(t=>{const e="desc"===t.dir?"asc":"desc";return new ei(t.field,e)});const n=t.endAt?new Yn(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Yn(t.startAt.position,t.startAt.inclusive):null;return Ei(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}(e,Ci(t))),e.Ee}function Ai(t,e,n){return new Ti(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Di(t,e){return bi(Ii(t),Ii(e))&&t.limitType===e.limitType}function Ni(t){return`${_i(Ii(t))}|lt:${t.limitType}`}function ki(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>li(t)).join(", ")}]`),nn(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>$n(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>$n(t)).join(",")),`Target(${e})`}(Ii(t))}; limitType=${t.limitType})`}function Ri(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Me.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Ci(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=Zn(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,Ci(t),e)||t.endAt&&!function(t,e,n){const i=Zn(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,Ci(t),e))}(t,e)}function Oi(t,e,n){const i=t.field.isKeyField()?Me.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?Un(i,r):ae(42886)}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return ae(19790,{direction:t.dir})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){cn(this.inner,(e,n)=>{for(const[i,r]of n)t(i,r)})}isEmpty(){return hn(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=new ln(Me.comparator);function Mi(){return Li}const Pi=new ln(Me.comparator);function Vi(...t){let e=Pi;for(const n of t)e=e.insert(n.key,n);return e}function Fi(t){let e=Pi;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Ui(){return ji()}function Bi(){return ji()}function ji(){return new xi(t=>t.toString(),(t,e)=>t.isEqual(e))}const $i=new ln(Me.comparator),qi=new fn(Me.comparator);function zi(...t){let e=qi;for(const n of t)e=e.add(n);return e}const Hi=new fn(Se);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gi(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:rn(e)?"-0":e}}function Ki(t){return{integerValue:""+t}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this._=void 0}}function Wi(t,e,n){return t instanceof Yi?function(t,e){const n={fields:{[Tn]:{stringValue:bn},[Cn]:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&In(e)&&(e=An(e)),e&&(n.fields[Sn]=e),{mapValue:n}}(n,e):t instanceof Zi?tr(t,e):t instanceof er?nr(t,e):function(t,e){const n=Ji(t,e),i=rr(n)+rr(t.Ae);return Hn(n)&&Hn(t.Ae)?Ki(i):Gi(t.serializer,i)}(t,e)}function Xi(t,e,n){return t instanceof Zi?tr(t,e):t instanceof er?nr(t,e):n}function Ji(t,e){return t instanceof ir?function(t){return Hn(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class Yi extends Qi{}class Zi extends Qi{constructor(t){super(),this.elements=t}}function tr(t,e){const n=sr(e);for(const i of t.elements)n.some(t=>Vn(t,i))||n.push(i);return{arrayValue:{values:n}}}class er extends Qi{constructor(t){super(),this.elements=t}}function nr(t,e){let n=sr(e);for(const i of t.elements)n=n.filter(t=>!Vn(t,i));return{arrayValue:{values:n}}}class ir extends Qi{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function rr(t){return En(t.integerValue||t.doubleValue)}function sr(t){return Gn(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,e){this.field=t,this.transform=e}}class ar{constructor(t,e){this.version=t,this.transformResults=e}}class cr{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new cr}static exists(t){return new cr(void 0,t)}static updateTime(t){return new cr(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function hr(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class lr{}function ur(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new _r(t.key,cr.none()):new mr(t.key,t.data,cr.none());{const n=t.data,i=Wn.empty();let r=new fn(Le.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new yr(t.key,i,new gn(r.toArray()),cr.none())}}function dr(t,e,n){t instanceof mr?function(t,e,n){const i=t.value.clone(),r=wr(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof yr?function(t,e,n){if(!hr(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=wr(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(vr(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function fr(t,e,n,i){return t instanceof mr?function(t,e,n,i){if(!hr(t.precondition,e))return n;const r=t.value.clone(),s=Er(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof yr?function(t,e,n,i){if(!hr(t.precondition,e))return n;const r=Er(t.fieldTransforms,i,e),s=e.data;return s.setAll(vr(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,i):function(t,e,n){return hr(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function pr(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=Ji(i.transform,t||null);null!=r&&(null===n&&(n=Wn.empty()),n.set(i.field,r))}return n||null}function gr(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Ne(t,e,(t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Zi&&e instanceof Zi||t instanceof er&&e instanceof er?Ne(t.elements,e.elements,Vn):t instanceof ir&&e instanceof ir?Vn(t.Ae,e.Ae):t instanceof Yi&&e instanceof Yi}(t.transform,e.transform)}(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class mr extends lr{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class yr extends lr{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function vr(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function wr(t,e,n){const i=new Map;he(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,Xi(o,a,n[r]))}return i}function Er(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,Wi(t,s,e))}return i}class _r extends lr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class br extends lr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const e=this.mutations[i];e.key.isEqual(t.key)&&dr(e,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=fr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=fr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Bi();return this.mutations.forEach(i=>{const r=t.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=e.has(i.key)?null:o;const a=ur(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(Ke.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),zi())}isEqual(t){return this.batchId===t.batchId&&Ne(this.mutations,t.mutations,(t,e)=>gr(t,e))&&Ne(this.baseMutations,t.baseMutations,(t,e)=>gr(t,e))}}class Sr{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){he(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let i=$i;const r=t.mutations;for(let s=0;s<r.length;s++)i=i.insert(r[s].key,n[s].version);return new Sr(t,e,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ir,Ar;(Ar=Ir||(Ir={}))[Ar.OK=0]="OK",Ar[Ar.CANCELLED=1]="CANCELLED",Ar[Ar.UNKNOWN=2]="UNKNOWN",Ar[Ar.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ar[Ar.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ar[Ar.NOT_FOUND=5]="NOT_FOUND",Ar[Ar.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ar[Ar.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ar[Ar.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ar[Ar.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ar[Ar.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ar[Ar.ABORTED=10]="ABORTED",Ar[Ar.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ar[Ar.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ar[Ar.INTERNAL=13]="INTERNAL",Ar[Ar.UNAVAILABLE=14]="UNAVAILABLE",Ar[Ar.DATA_LOSS=15]="DATA_LOSS",
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Bt([4294967295,4294967295],0);class Dr{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Nr(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kr(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Rr(t,e){return Nr(t,e.toTimestamp())}function Or(t){return he(!!t,49232),Ke.fromTimestamp(function(t){const e=wn(t);return new Ge(e.seconds,e.nanos)}(t))}function xr(t,e){return Lr(t,e).canonicalString()}function Lr(t,e){const n=function(t){return new Oe(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function Mr(t,e){return xr(t.databaseId,e.path)}function Pr(t,e,n){return{name:Mr(t,e),fields:n.value.mapValue.fields}}function Vr(t){let e=function(t){const e=function(t){const e=Oe.fromString(t);return he(function(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),10190,{key:e.toString()}),e}(t);return 4===e.length?Oe.emptyPath():function(t){return he(t.length>4&&"documents"===t.get(4),29091,{key:t.toString()}),t.popFirst(5)}(e)}(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){he(1===i,65062);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Fr(t);return e instanceof si&&ai(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map(t=>function(t){return new ei(Ur(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,nn(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Yn(n,e)}(n.startAt));let h=null;return n.endAt&&(h=function(t){const e=!t.before,n=t.values||[];return new Yn(n,e)}(n.endAt)),function(t,e,n,i,r,s,o,a){return new Ti(t,e,n,i,r,"F",o,a)}(e,r,o,s,a,0,c,h)}function Fr(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ur(t.unaryFilter.field);return ri.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ur(t.unaryFilter.field);return ri.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ur(t.unaryFilter.field);return ri.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ur(t.unaryFilter.field);return ri.create(r,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ae(61313);default:return ae(60726)}}(t):void 0!==t.fieldFilter?function(t){return ri.create(Ur(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ae(58110);default:return ae(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return si.create(t.compositeFilter.filters.map(t=>Fr(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return ae(1026)}}(t.compositeFilter.op))}(t):ae(30097,{filter:t})}function Ur(t){return Le.fromServerFormat(t.fieldPath)}function Br(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}class jr{constructor(t){this.yt=t}}function $r(t){const e=Vr({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Ai(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.Cn=new zr}addToCollectionParentIndex(t,e){return this.Cn.add(e),Ze.resolve()}getCollectionParents(t,e){return Ze.resolve(this.Cn.getEntries(e))}addFieldIndex(t,e){return Ze.resolve()}deleteFieldIndex(t,e){return Ze.resolve()}deleteAllFieldIndexes(t){return Ze.resolve()}createTargetIndexes(t,e){return Ze.resolve()}getDocumentsMatchingTarget(t,e){return Ze.resolve(null)}getIndexType(t,e){return Ze.resolve(0)}getFieldIndexes(t,e){return Ze.resolve([])}getNextCollectionGroupToUpdate(t){return Ze.resolve(null)}getMinOffset(t,e){return Ze.resolve(We.min())}getMinOffsetFromCollectionGroup(t,e){return Ze.resolve(We.min())}updateCollectionGroup(t,e,n){return Ze.resolve()}updateIndexEntries(t,e){return Ze.resolve()}}class zr{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new fn(Oe.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new fn(Oe.comparator)).toArray()}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Gr=41943040;class Kr{static withCacheSize(t){return new Kr(t,Kr.DEFAULT_COLLECTION_PERCENTILE,Kr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kr.DEFAULT_COLLECTION_PERCENTILE=10,Kr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Kr.DEFAULT=new Kr(Gr,Kr.DEFAULT_COLLECTION_PERCENTILE,Kr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Kr.DISABLED=new Kr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qr{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new Qr(0)}static cr(){return new Qr(-1)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="LruGarbageCollector";function Xr([t,e],[n,i]){const r=Se(t,n);return 0===r?Se(e,i):r}class Jr{constructor(t){this.Ir=t,this.buffer=new fn(Xr),this.Er=0}dr(){return++this.Er}Ar(t){const e=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();Xr(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Yr{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Vr(t){ie(Wr,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){tn(t)?ie(Wr,"Ignoring IndexedDB error during garbage collection: ",t):await Ye(t)}await this.Vr(3e5)})}}class Zr{constructor(t,e){this.mr=t,this.params=e}calculateTargetCount(t,e){return this.mr.gr(t).next(t=>Math.floor(e/100*t))}nthSequenceNumber(t,e){if(0===e)return Ze.resolve(en.ce);const n=new Jr(e);return this.mr.forEachTarget(t,t=>n.Ar(t.sequenceNumber)).next(()=>this.mr.pr(t,t=>n.Ar(t))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.mr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.mr.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),Ze.resolve(Hr)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hr):this.yr(t,e))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,e){let n,i,r,s,o,a,c;const h=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(e=>(e>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),i=this.params.maximumSequenceNumbersToCollect):i=e,s=Date.now(),this.nthSequenceNumber(t,i))).next(i=>(n=i,o=Date.now(),this.removeTargets(t,n,e))).next(e=>(r=e,a=Date.now(),this.removeOrphanedDocuments(t,n))).next(t=>(c=Date.now(),ne()<=b.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-h}ms\n\tDetermined least recently used ${i} in `+(o-s)+"ms\n"+`\tRemoved ${r} targets in `+(a-o)+"ms\n"+`\tRemoved ${t} documents in `+(c-a)+"ms\n"+`Total Duration: ${c-h}ms`),Ze.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:t})))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ts{constructor(){this.changes=new xi(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Jn.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ze.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(n=i,this.remoteDocumentCache.getEntry(t,e))).next(t=>(null!==n&&fr(n.mutation,t,gn.empty(),Ge.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,zi()).next(()=>e))}getLocalViewOfDocuments(t,e,n=zi()){const i=Ui();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,n).next(t=>{let e=Vi();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){const n=Ui();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,zi()))}populateOverlays(t,e,n){const i=[];return n.forEach(t=>{e.has(t)||i.push(t)}),this.documentOverlayCache.getOverlays(t,i).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,i){let r=Mi();const s=ji(),o=ji();return e.forEach((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof yr)?r=r.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),fr(o.mutation,e,o.mutation.getFieldMask(),Ge.now())):s.set(e.key,gn.empty())}),this.recalculateAndSaveOverlays(t,r).next(t=>(t.forEach((t,e)=>s.set(t,e)),e.forEach((t,e)=>o.set(t,new es(e,s.get(t)??null))),o))}recalculateAndSaveOverlays(t,e){const n=ji();let i=new ln((t,e)=>t-e),r=zi();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(const r of t)r.keys().forEach(t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||gn.empty();o=r.applyToLocalView(s,o),n.set(t,o);const a=(i.get(r.batchId)||zi()).add(t);i=i.insert(r.batchId,a)})}).next(()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,h=Bi();c.forEach(t=>{if(!r.has(t)){const i=ur(e.get(t),n.get(t));null!==i&&h.set(t,i),r=r.add(t)}}),s.push(this.documentOverlayCache.saveOverlays(t,a,h))}return Ze.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n,i){return function(t){return Me.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next(r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):Ze.resolve(Ui());let o=-1,a=r;return s.next(e=>Ze.forEach(e,(e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?Ze.resolve():this.remoteDocumentCache.getEntry(t,e).next(t=>{a=a.insert(e,t)}))).next(()=>this.populateOverlays(t,e,r)).next(()=>this.computeViews(t,a,e,zi())).next(t=>({batchId:o,changes:Fi(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Me(e)).next(t=>{let e=Vi();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const r=e.collectionGroup;let s=Vi();return this.indexManager.getCollectionParents(t,r).next(o=>Ze.forEach(o,o=>{const a=function(t,e){return new Ti(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.getDocumentsMatchingCollectionQuery(t,a,n,i).next(t=>{t.forEach((t,e)=>{s=s.insert(t,e)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,e,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r,i))).next(t=>{r.forEach((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,Jn.newInvalidDocument(i)))});let n=Vi();return t.forEach((t,i)=>{const s=r.get(t);void 0!==s&&fr(s.mutation,i,gn.empty(),Ge.now()),Ri(e,i)&&(n=n.insert(t,i))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,e){return Ze.resolve(this.Lr.get(e))}saveBundleMetadata(t,e){return this.Lr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Or(t.createTime)}}(e)),Ze.resolve()}getNamedQuery(t,e){return Ze.resolve(this.kr.get(e))}saveNamedQuery(t,e){return this.kr.set(e.name,function(t){return{name:t.name,query:$r(t.bundledQuery),readTime:Or(t.readTime)}}(e)),Ze.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.overlays=new ln(Me.comparator),this.qr=new Map}getOverlay(t,e){return Ze.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Ui();return Ze.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,i)=>{this.St(t,e,i)}),Ze.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.qr.get(n);return void 0!==i&&(i.forEach(t=>this.overlays=this.overlays.remove(t)),this.qr.delete(n)),Ze.resolve()}getOverlaysForCollection(t,e,n){const i=Ui(),r=e.length+1,s=new Me(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return Ze.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new ln((t,e)=>t-e);const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=Ui(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Ui(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((t,e)=>o.set(t,e)),!(o.size()>=i)););return Ze.resolve(o)}St(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.qr.get(i.largestBatchId).delete(n.key);this.qr.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Cr(e,n));let r=this.qr.get(e);void 0===r&&(r=zi(),this.qr.set(e,r)),this.qr.set(e,r.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.sessionToken=yn.EMPTY_BYTE_STRING}getSessionToken(t){return Ze.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,Ze.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.Qr=new fn(as.$r),this.Ur=new fn(as.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,e){const n=new as(t,e);this.Qr=this.Qr.add(n),this.Ur=this.Ur.add(n)}Wr(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.Gr(new as(t,e))}zr(t,e){t.forEach(t=>this.removeReference(t,e))}jr(t){const e=new Me(new Oe([])),n=new as(e,t),i=new as(e,t+1),r=[];return this.Ur.forEachInRange([n,i],t=>{this.Gr(t),r.push(t.key)}),r}Jr(){this.Qr.forEach(t=>this.Gr(t))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const e=new Me(new Oe([])),n=new as(e,t),i=new as(e,t+1);let r=zi();return this.Ur.forEachInRange([n,i],t=>{r=r.add(t.key)}),r}containsKey(t){const e=new as(t,0),n=this.Qr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class as{constructor(t,e){this.key=t,this.Yr=e}static $r(t,e){return Me.comparator(t.key,e.key)||Se(t.Yr,e.Yr)}static Kr(t,e){return Se(t.Yr,e.Yr)||Me.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.tr=1,this.Zr=new fn(as.$r)}checkEmpty(t){return Ze.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Tr(r,e,n,i);this.mutationQueue.push(s);for(const o of i)this.Zr=this.Zr.add(new as(o.key,r)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Ze.resolve(s)}lookupMutationBatch(t,e){return Ze.resolve(this.Xr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ei(n),r=i<0?0:i;return Ze.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Ze.resolve(0===this.mutationQueue.length?-1:this.tr-1)}getAllMutationBatches(t){return Ze.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new as(e,0),i=new as(e,Number.POSITIVE_INFINITY),r=[];return this.Zr.forEachInRange([n,i],t=>{const e=this.Xr(t.Yr);r.push(e)}),Ze.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new fn(Se);return e.forEach(t=>{const e=new as(t,0),i=new as(t,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([e,i],t=>{n=n.add(t.Yr)})}),Ze.resolve(this.ti(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;Me.isDocumentKey(r)||(r=r.child(""));const s=new as(new Me(r),0);let o=new fn(Se);return this.Zr.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.Yr)),!0)},s),Ze.resolve(this.ti(o))}ti(t){const e=[];return t.forEach(t=>{const n=this.Xr(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){he(0===this.ni(e.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Zr;return Ze.forEach(e.mutations,i=>{const r=new as(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Zr=n})}ir(t){}containsKey(t,e){const n=new as(e,0),i=this.Zr.firstAfterOrEqual(n);return Ze.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,Ze.resolve()}ni(t,e){return this.ei(t)}ei(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Xr(t){const e=this.ei(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(t){this.ri=t,this.docs=new ln(Me.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.ri(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ze.resolve(n?n.document.mutableCopy():Jn.newInvalidDocument(e))}getEntries(t,e){let n=Mi();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Jn.newInvalidDocument(t))}),Ze.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=Mi();const s=e.path,o=new Me(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Xe(Qe(o),n)<=0||(i.has(o.key)||Ri(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return Ze.resolve(r)}getAllFromCollectionGroup(t,e,n,i){ae(9500)}ii(t,e){return Ze.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new ls(this)}getSize(t){return Ze.resolve(this.size)}}class ls extends ts{constructor(t){super(),this.Nr=t}applyChanges(t){const e=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?e.push(this.Nr.addEntry(t,i)):this.Nr.removeEntry(n)}),Ze.waitFor(e)}getFromCache(t,e){return this.Nr.getEntry(t,e)}getAllFromCache(t,e){return this.Nr.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t){this.persistence=t,this.si=new xi(t=>_i(t),bi),this.lastRemoteSnapshotVersion=Ke.min(),this.highestTargetId=0,this.oi=0,this._i=new os,this.targetCount=0,this.ai=Qr.ur()}forEachTarget(t,e){return this.si.forEach((t,n)=>e(n)),Ze.resolve()}getLastRemoteSnapshotVersion(t){return Ze.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ze.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),Ze.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.oi&&(this.oi=e),Ze.resolve()}Pr(t){this.si.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.ai=new Qr(e),this.highestTargetId=e),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,e){return this.Pr(e),this.targetCount+=1,Ze.resolve()}updateTargetData(t,e){return this.Pr(e),Ze.resolve()}removeTargetData(t,e){return this.si.delete(e.target),this._i.jr(e.targetId),this.targetCount-=1,Ze.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.si.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.si.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)}),Ze.waitFor(r).next(()=>i)}getTargetCount(t){return Ze.resolve(this.targetCount)}getTargetData(t,e){const n=this.si.get(e)||null;return Ze.resolve(n)}addMatchingKeys(t,e,n){return this._i.Wr(e,n),Ze.resolve()}removeMatchingKeys(t,e,n){this._i.zr(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach(e=>{r.push(i.markPotentiallyOrphaned(t,e))}),Ze.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this._i.jr(e),Ze.resolve()}getMatchingKeysForTargetId(t,e){const n=this._i.Hr(e);return Ze.resolve(n)}containsKey(t,e){return Ze.resolve(this._i.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t,e){this.ui={},this.overlays={},this.ci=new en(0),this.li=!1,this.li=!0,this.hi=new ss,this.referenceDelegate=t(this),this.Pi=new us(this),this.indexManager=new qr,this.remoteDocumentCache=function(t){return new hs(t)}(t=>this.referenceDelegate.Ti(t)),this.serializer=new jr(e),this.Ii=new is(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new rs,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ui[t.toKey()];return n||(n=new cs(e,this.referenceDelegate),this.ui[t.toKey()]=n),n}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,e,n){ie("MemoryPersistence","Starting transaction:",t);const i=new fs(this.ci.next());return this.referenceDelegate.Ei(),n(i).next(t=>this.referenceDelegate.di(i).next(()=>t)).toPromise().then(t=>(i.raiseOnCommittedEvent(),t))}Ai(t,e){return Ze.or(Object.values(this.ui).map(n=>()=>n.containsKey(t,e)))}}class fs extends Je{constructor(t){super(),this.currentSequenceNumber=t}}class ps{constructor(t){this.persistence=t,this.Ri=new os,this.Vi=null}static mi(t){return new ps(t)}get fi(){if(this.Vi)return this.Vi;throw ae(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.fi.delete(n.toString()),Ze.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.fi.add(n.toString()),Ze.resolve()}markPotentiallyOrphaned(t,e){return this.fi.add(e.toString()),Ze.resolve()}removeTarget(t,e){this.Ri.jr(e.targetId).forEach(t=>this.fi.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.fi.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Ei(){this.Vi=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ze.forEach(this.fi,n=>{const i=Me.fromPath(n);return this.gi(t,i).next(t=>{t||e.removeEntry(i,Ke.min())})}).next(()=>(this.Vi=null,e.apply(t)))}updateLimboDocument(t,e){return this.gi(t,e).next(t=>{t?this.fi.delete(e.toString()):this.fi.add(e.toString())})}Ti(t){return 0}gi(t,e){return Ze.or([()=>Ze.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ai(t,e)])}}class gs{constructor(t,e){this.persistence=t,this.pi=new xi(t=>function(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=on(e)),e=sn(t.get(n),e);return on(e)}(t.path),(t,e)=>t.isEqual(e)),this.garbageCollector=function(t,e){return new Zr(t,e)}(this,e)}static mi(t,e){return new gs(t,e)}Ei(){}di(t){return Ze.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}gr(t){const e=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}wr(t){let e=0;return this.pr(t,t=>{e++}).next(()=>e)}pr(t,e){return Ze.forEach(this.pi,(n,i)=>this.br(t,n,i).next(t=>t?Ze.resolve():e(i)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.ii(t,i=>this.br(t,i,e).next(t=>{t||(n++,r.removeEntry(i,Ke.min()))})).next(()=>r.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.pi.set(e,t.currentSequenceNumber),Ze.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),Ze.resolve()}removeReference(t,e,n){return this.pi.set(n,t.currentSequenceNumber),Ze.resolve()}updateLimboDocument(t,e){return this.pi.set(e,t.currentSequenceNumber),Ze.resolve()}Ti(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=zn(t.data.value)),e}br(t,e,n){return Ze.or([()=>this.persistence.Ai(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const t=this.pi.get(e);return Ze.resolve(void 0!==t&&t>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Es=n,this.ds=i}static As(t,e){let n=zi(),i=zi();for(const r of e.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ms(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=!function(){const t=s()?.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}()&&navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")?8:function(){const t=("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"").match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}()>0?6:4}initialize(t,e){this.ps=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,i){const r={result:null};return this.ys(t,e).next(t=>{r.result=t}).next(()=>{if(!r.result)return this.ws(t,e,i,n).next(t=>{r.result=t})}).next(()=>{if(r.result)return;const n=new ys;return this.Ss(t,e,n).next(i=>{if(r.result=i,this.Vs)return this.bs(t,e,n,i.size)})}).next(()=>r.result)}bs(t,e,n,i){return n.documentReadCount<this.fs?(ne()<=b.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",ki(e),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),Ze.resolve()):(ne()<=b.DEBUG&&ie("QueryEngine","Query:",ki(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.gs*i?(ne()<=b.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",ki(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ii(e))):Ze.resolve())}ys(t,e){if(Si(e))return Ze.resolve(null);let n=Ii(e);return this.indexManager.getIndexType(t,n).next(i=>0===i?null:(null!==e.limit&&1===i&&(e=Ai(e,null,"F"),n=Ii(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(i=>{const r=zi(...i);return this.ps.getDocuments(t,r).next(i=>this.indexManager.getMinOffset(t,n).next(n=>{const s=this.Ds(e,i);return this.Cs(e,s,r,n.readTime)?this.ys(t,Ai(e,null,"F")):this.vs(t,s,e,n)}))})))}ws(t,e,n,i){return Si(e)||i.isEqual(Ke.min())?Ze.resolve(null):this.ps.getDocuments(t,n).next(r=>{const s=this.Ds(e,r);return this.Cs(e,s,n,i)?Ze.resolve(null):(ne()<=b.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ki(e)),this.vs(t,s,e,function(t){const e=t.toTimestamp().seconds,n=t.toTimestamp().nanoseconds+1,i=Ke.fromTimestamp(1e9===n?new Ge(e+1,0):new Ge(e,n));return new We(i,Me.empty(),-1)}(i)).next(t=>t))})}Ds(t,e){let n=new fn(function(t){return(e,n)=>{let i=!1;for(const r of Ci(t)){const t=Oi(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}(t));return e.forEach((e,i)=>{Ri(t,i)&&(n=n.add(i))}),n}Cs(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ss(t,e,n){return ne()<=b.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",ki(e)),this.ps.getDocumentsMatchingQuery(t,e,We.min(),n)}vs(t,e,n,i){return this.ps.getDocumentsMatchingQuery(t,n,i).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(t,e,n,i){this.persistence=t,this.Fs=e,this.serializer=i,this.Ms=new ln(Se),this.xs=new xi(t=>_i(t),bi),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(n)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ns(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ms))}}async function Es(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next(r=>(i=r,n.Bs(e),n.mutationQueue.getAllMutationBatches(t))).next(e=>{const r=[],s=[];let o=zi();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next(t=>({Ls:t,removedBatchIds:r,addedBatchIds:s}))})})}function _s(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e)))}class bs{constructor(){this.activeTargetIds=Hi}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ts{constructor(){this.Mo=new bs,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,e,n){this.xo[t]=e}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new bs,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{Oo(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="ConnectivityMonitor";class Is{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ie(Cs,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){ie(Cs,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As=null;function Ds(){return null===As?As=268435456+Math.round(2147483648*Math.random()):As++,"0x"+As.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Ns="RestConnection",ks={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Rs{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=e+"://"+t.host,this.Ko=`projects/${n}/databases/${i}`,this.Wo=this.databaseId.database===kn?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Go(t,e,n,i,r){const s=Ds(),o=this.zo(t,e.toUriEncodedString());ie(Ns,`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(a,i,r);const{host:h}=new URL(o),l=c(h);return this.Jo(t,o,a,n,l).then(e=>(ie(Ns,`Received RPC '${t}' ${s}: `,e),e),e=>{throw se(Ns,`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e})}Ho(t,e,n,i,r,s){return this.Go(t,e,n,i,r)}jo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+te,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}zo(t,e){const n=ks[t];return`${this.Uo}/v1/${e}:${n}`}terminate(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="WebChannelConnection";class Ls extends Rs{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,e,n,i,r){const s=Ds();return new Promise((r,o)=>{const a=new $t;a.setWithCredentials(!0),a.listenOnce(zt.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ht.NO_ERROR:const e=a.getResponseJson();ie(xs,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(e)),r(e);break;case Ht.TIMEOUT:ie(xs,`RPC '${t}' ${s} timed out`),o(new de(ue.DEADLINE_EXCEEDED,"Request time out"));break;case Ht.HTTP_ERROR:const n=a.getStatus();if(ie(xs,`RPC '${t}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=t?.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(ue).indexOf(e)>=0?e:ue.UNKNOWN}(e.status);o(new de(t,e.message))}else o(new de(ue.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new de(ue.UNAVAILABLE,"Connection failed."));break;default:ae(9055,{l_:t,streamId:s,h_:a.getLastErrorCode(),P_:a.getLastError()})}}finally{ie(xs,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);ie(xs,`RPC '${t}' ${s} sending request:`,i),a.send(e,"POST",c,n,15)})}T_(t,e,n){const i=Ds(),r=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Wt(),o=Qt(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.jo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const h=r.join("");ie(xs,`Creating RPC '${t}' stream ${i}: ${h}`,a);const l=s.createWebChannel(h,a);this.I_(l);let u=!1,d=!1;const f=new Os({Yo:e=>{d?ie(xs,`Not sending because RPC '${t}' stream ${i} is closed:`,e):(u||(ie(xs,`Opening RPC '${t}' stream ${i} transport.`),l.open(),u=!0),ie(xs,`RPC '${t}' stream ${i} sending:`,e),l.send(e))},Zo:()=>l.close()}),p=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return p(l,qt.EventType.OPEN,()=>{d||(ie(xs,`RPC '${t}' stream ${i} transport opened.`),f.o_())}),p(l,qt.EventType.CLOSE,()=>{d||(d=!0,ie(xs,`RPC '${t}' stream ${i} transport closed`),f.a_(),this.E_(l))}),p(l,qt.EventType.ERROR,e=>{d||(d=!0,se(xs,`RPC '${t}' stream ${i} transport errored. Name:`,e.name,"Message:",e.message),f.a_(new de(ue.UNAVAILABLE,"The operation could not be completed")))}),p(l,qt.EventType.MESSAGE,e=>{if(!d){const n=e.data[0];he(!!n,16349);const r=n,s=r?.error||r[0]?.error;if(s){ie(xs,`RPC '${t}' stream ${i} received error:`,s);const e=s.status;let n=function(t){const e=Ir[t];if(void 0!==e)return function(t){if(void 0===t)return re("GRPC error has no .code"),ue.UNKNOWN;switch(t){case Ir.OK:return ue.OK;case Ir.CANCELLED:return ue.CANCELLED;case Ir.UNKNOWN:return ue.UNKNOWN;case Ir.DEADLINE_EXCEEDED:return ue.DEADLINE_EXCEEDED;case Ir.RESOURCE_EXHAUSTED:return ue.RESOURCE_EXHAUSTED;case Ir.INTERNAL:return ue.INTERNAL;case Ir.UNAVAILABLE:return ue.UNAVAILABLE;case Ir.UNAUTHENTICATED:return ue.UNAUTHENTICATED;case Ir.INVALID_ARGUMENT:return ue.INVALID_ARGUMENT;case Ir.NOT_FOUND:return ue.NOT_FOUND;case Ir.ALREADY_EXISTS:return ue.ALREADY_EXISTS;case Ir.PERMISSION_DENIED:return ue.PERMISSION_DENIED;case Ir.FAILED_PRECONDITION:return ue.FAILED_PRECONDITION;case Ir.ABORTED:return ue.ABORTED;case Ir.OUT_OF_RANGE:return ue.OUT_OF_RANGE;case Ir.UNIMPLEMENTED:return ue.UNIMPLEMENTED;case Ir.DATA_LOSS:return ue.DATA_LOSS;default:return ae(39323,{code:t})}}(e)}(e),r=s.message;void 0===n&&(n=ue.INTERNAL,r="Unknown error status: "+e+" with message "+s.message),d=!0,f.a_(new de(n,r)),l.close()}else ie(xs,`RPC '${t}' stream ${i} received:`,n),f.u_(n)}}),p(o,Kt.STAT_EVENT,e=>{e.stat===Gt.PROXY?ie(xs,`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===Gt.NOPROXY&&ie(xs,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{f.__()},0),f}terminate(){this.c_.forEach(t=>t.close()),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter(e=>e===t)}}function Ms(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(t){return new Dr(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t,e,n=1e3,i=1.5,r=6e4){this.Mi=t,this.timerId=e,this.d_=n,this.A_=i,this.R_=r,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const e=Math.floor(this.V_+this.y_()),n=Math.max(0,Date.now()-this.f_),i=Math.max(0,e-n);i>0&&ie("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),t())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs="PersistentStream";class Us{constructor(t,e,n,i,r,s,o,a){this.Mi=t,this.S_=n,this.b_=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Vs(t,e)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,4!==t?this.M_.reset():e&&e.code===ue.RESOURCE_EXHAUSTED?(re(e.toString()),re("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===ue.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(e)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.D_===e&&this.G_(t,n)},e=>{t(()=>{const t=new de(ue.UNKNOWN,"Fetching auth token failed: "+e.message);return this.z_(t)})})}G_(t,e){const n=this.W_(this.D_);this.stream=this.j_(t,e),this.stream.Xo(()=>{n(()=>this.listener.Xo())}),this.stream.t_(()=>{n(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(t=>{n(()=>this.z_(t))}),this.stream.onMessage(t=>{n(()=>1==++this.F_?this.J_(t):this.onNext(t))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return ie(Fs,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return e=>{this.Mi.enqueueAndForget(()=>this.D_===t?e():(ie(Fs,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Bs extends Us{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}J_(t){return he(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,he(!t.writeResults||0===t.writeResults.length,55816),this.listener.ta()}onNext(t){he(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=function(t,e){return t&&t.length>0?(he(void 0!==e,14353),t.map(t=>function(t,e){let n=t.updateTime?Or(t.updateTime):Or(e);return n.isEqual(Ke.min())&&(n=Or(e)),new ar(n,t.transformResults||[])}(t,e))):[]}(t.writeResults,t.commitTime),n=Or(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=function(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}(this.serializer),this.q_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>function(t,e){let n;if(e instanceof mr)n={update:Pr(t,e.key,e.value)};else if(e instanceof _r)n={delete:Mr(t,e.key)};else if(e instanceof yr)n={update:Pr(t,e.key,e.data),updateMask:Br(e.fieldMask)};else{if(!(e instanceof br))return ae(16599,{Vt:e.type});n={verify:Mr(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof Yi)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Zi)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof er)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ir)return{fieldPath:e.field.canonicalString(),increment:n.Ae};throw ae(20930,{transform:e.transform})}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Rr(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:ae(27497)}(t,e.precondition)),n}(this.serializer,t))};this.q_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{}class $s extends js{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new de(ue.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,e,n,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,s])=>this.connection.Go(t,Lr(e,n),i,r,s)).catch(t=>{throw"FirebaseError"===t.name?(t.code===ue.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new de(ue.UNKNOWN,t.toString())})}Ho(t,e,n,i,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Ho(t,Lr(e,n),i,s,o,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===ue.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new de(ue.UNKNOWN,t.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class qs{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,"Online"===t&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(re(e),this.aa=!1):ie("OnlineStateTracker",e)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="RemoteStore";class Hs{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=r,this.Aa.Oo(t=>{n.enqueueAndForget(async()=>{Qs(this)&&(ie(zs,"Restarting streams for network reachability change."),await async function(t){const e=le(t);e.Ea.add(4),await Ks(e),e.Ra.set("Unknown"),e.Ea.delete(4),await Gs(e)}(this))})}),this.Ra=new qs(n,i)}}async function Gs(t){if(Qs(t))for(const e of t.da)await e(!0)}async function Ks(t){for(const e of t.da)await e(!1)}function Qs(t){return 0===le(t).Ea.size}async function Ws(t,e,n){if(!tn(e))throw e;t.Ea.add(1),await Ks(t),t.Ra.set("Offline"),n||(n=()=>function(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ie(zs,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Gs(t)})}function Xs(t,e){return e().catch(n=>Ws(t,n,e))}async function Js(t){const e=le(t),n=ao(e);let i=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:-1;for(;Ys(e);)try{const t=await _s(e.localStore,i);if(null===t){0===e.Ta.length&&n.L_();break}i=t.batchId,Zs(e,t)}catch(t){await Ws(e,t)}to(e)&&eo(e)}function Ys(t){return Qs(t)&&t.Ta.length<10}function Zs(t,e){t.Ta.push(e);const n=ao(t);n.O_()&&n.X_&&n.ea(e.mutations)}function to(t){return Qs(t)&&!ao(t).x_()&&t.Ta.length>0}function eo(t){ao(t).start()}async function no(t){ao(t).ra()}async function io(t){const e=ao(t);for(const n of t.Ta)e.ea(n.mutations)}async function ro(t,e,n){const i=t.Ta.shift(),r=Sr.from(i,e,n);await Xs(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Js(t)}async function so(t,e){e&&ao(t).X_&&await async function(t,e){if(function(t){return function(t){switch(t){case ue.OK:return ae(64938);case ue.CANCELLED:case ue.UNKNOWN:case ue.DEADLINE_EXCEEDED:case ue.RESOURCE_EXHAUSTED:case ue.INTERNAL:case ue.UNAVAILABLE:case ue.UNAUTHENTICATED:return!1;case ue.INVALID_ARGUMENT:case ue.NOT_FOUND:case ue.ALREADY_EXISTS:case ue.PERMISSION_DENIED:case ue.FAILED_PRECONDITION:case ue.ABORTED:case ue.OUT_OF_RANGE:case ue.UNIMPLEMENTED:case ue.DATA_LOSS:return!0;default:return ae(15467,{code:t})}}(t)&&t!==ue.ABORTED}(e.code)){const n=t.Ta.shift();ao(t).B_(),await Xs(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Js(t)}}(t,e),to(t)&&eo(t)}async function oo(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),ie(zs,"RemoteStore received new credentials");const i=Qs(n);n.Ea.add(3),await Ks(n),i&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Gs(n)}function ao(t){return t.fa||(t.fa=function(t,e,n){const i=le(t);return i.sa(),new Bs(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{Xo:()=>Promise.resolve(),t_:no.bind(null,t),r_:so.bind(null,t),ta:io.bind(null,t),na:ro.bind(null,t)}),t.da.push(async e=>{e?(t.fa.B_(),await Js(t)):(await t.fa.stop(),t.Ta.length>0&&(ie(zs,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class co{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new fe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new co(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new de(ue.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ho(t,e){if(re("AsyncQueue",`${e}: ${t}`),tn(t))return new de(ue.UNAVAILABLE,`${e}: ${t}`);throw t}class lo{constructor(){this.queries=uo(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(t,e){const n=le(t),i=n.queries;n.queries=uo(),i.forEach((t,n)=>{for(const i of n.Sa)i.onError(e)})}(this,new de(ue.ABORTED,"Firestore shutting down"))}}function uo(){return new xi(t=>Ni(t),Di)}var fo,po;(po=fo||(fo={})).Ma="default",po.Cache="cache";class go{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Pu={},this.Tu=new xi(t=>Ni(t),Di),this.Iu=new Map,this.Eu=new Set,this.du=new ln(Me.comparator),this.Au=new Map,this.Ru=new os,this.Vu={},this.mu=new Map,this.fu=Qr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function mo(t,e,n){const i=function(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vo.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=wo.bind(null,e),e}(t);try{const t=await function(t,e){const n=le(t),i=Ge.now(),r=e.reduce((t,e)=>t.add(e.key),zi());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>{let a=Mi(),c=zi();return n.Ns.getEntries(t,r).next(t=>{a=t,a.forEach((t,e)=>{e.isValidDocument()||(c=c.add(t))})}).next(()=>n.localDocuments.getOverlayedDocuments(t,a)).next(r=>{s=r;const o=[];for(const t of e){const e=pr(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new yr(t.key,e,Xn(e.value.mapValue),cr.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)}).next(e=>{o=e;const i=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)})}).then(()=>({batchId:o.batchId,changes:Fi(s)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.Vu[t.currentUser.toKey()];i||(i=new ln(Se)),i=i.insert(e,n),t.Vu[t.currentUser.toKey()]=i}(i,t.batchId,n),await bo(i,t.changes),await Js(i.remoteStore)}catch(t){const e=ho(t,"Failed to persist write");n.reject(e)}}function yo(t,e,n){const i=le(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.Tu.forEach((n,i)=>{const r=i.view.va(e);r.snapshot&&t.push(r.snapshot)}),function(t,e){const n=le(t);n.onlineState=e;let i=!1;n.queries.forEach((t,n)=>{for(const r of n.Sa)r.va(e)&&(i=!0)}),i&&function(t){t.Ca.forEach(t=>{t.next()})}(n)}(i.eventManager,e),t.length&&i.Pu.H_(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function vo(t,e){const n=le(t),i=e.batch.batchId;try{const t=await function(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const i=e.batch.keys(),r=n.Ns.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=Ze.resolve();return s.forEach(t=>{o=o.next(()=>i.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);he(null!==s,48541),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))})}),o.next(()=>t.mutationQueue.removeMutationBatch(e,r))}(n,t,e,r).next(()=>r.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=zi();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,i))})}(n.localStore,e);_o(n,i,null),Eo(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await bo(n,t)}catch(t){await Ye(t)}}async function wo(t,e,n){const i=le(t);try{const t=await function(t,e){const n=le(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next(e=>(he(null!==e,37113),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e))).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i)).next(()=>n.localDocuments.getDocuments(t,i))})}(i.localStore,e);_o(i,e,n),Eo(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await bo(i,t)}catch(n){await Ye(n)}}function Eo(t,e){(t.mu.get(e)||[]).forEach(t=>{t.resolve()}),t.mu.delete(e)}function _o(t,e,n){const i=le(t);let r=i.Vu[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.Vu[i.currentUser.toKey()]=r}}async function bo(t,e,n){const i=le(t),r=[],s=[],o=[];i.Tu.isEmpty()||(i.Tu.forEach((t,a)=>{o.push(i.pu(a,e,n).then(t=>{if((t||n)&&i.isPrimaryClient){const e=t?!t.fromCache:n?.targetChanges.get(a.targetId)?.current;i.sharedClientState.updateQueryState(a.targetId,e?"current":"not-current")}if(t){r.push(t);const e=ms.As(a.targetId,t);s.push(e)}}))}),await Promise.all(o),i.Pu.H_(r),await async function(t,e){const n=le(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Ze.forEach(e,e=>Ze.forEach(e.Es,i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i)).next(()=>Ze.forEach(e.ds,i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))}catch(t){if(!tn(t))throw t;ie("LocalStore","Failed to update sequence numbers: "+t)}for(const i of e){const t=i.targetId;if(!i.fromCache){const e=n.Ms.get(t),i=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(i);n.Ms=n.Ms.insert(t,r)}}}(i.localStore,s))}async function To(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){ie("SyncEngine","User change. New user:",e.toKey());const t=await Es(n.localStore,e);n.currentUser=e,function(t){t.mu.forEach(t=>{t.forEach(t=>{t.reject(new de(ue.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),t.mu.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await bo(n,t.Ls)}}class So{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ps(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return function(t,e,n,i){return new ws(t,e,n,i)}(this.persistence,new vs,t.initialUser,this.serializer)}Cu(t){return new ds(ps.mi,this.serializer)}Du(t){return new Ts}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}So.provider={build:()=>new So};class Co extends So{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){he(this.persistence.referenceDelegate instanceof gs,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Yr(n,t.asyncQueue,e)}Cu(t){const e=void 0!==this.cacheSizeBytes?Kr.withCacheSize(this.cacheSizeBytes):Kr.DEFAULT;return new ds(t=>gs.mi(t,e),this.serializer)}}class Io{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>yo(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=To.bind(null,this.syncEngine),await async function(t,e){const n=le(t);e?(n.Ea.delete(2),await Gs(n)):e||(n.Ea.add(2),await Ks(n),n.Ra.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new lo}createDatastore(t){const e=Ps(t.databaseInfo.databaseId),n=function(t){return new Ls(t)}(t.databaseInfo);return function(t,e,n,i){return new $s(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,i,r){return new Hs(t,e,n,i,r)}(this.localStore,this.datastore,t.asyncQueue,t=>yo(this.syncEngine,t,0),Is.v()?new Is:new Ss)}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new go(t,e,n,i,r,s);return o&&(a.gu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await async function(t){const e=le(t);ie(zs,"RemoteStore shutting down."),e.Ea.add(5),await Ks(e),e.Aa.shutdown(),e.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Io.provider={build:()=>new Io};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ao="FirestoreClient";class Do{constructor(t,e,n,i,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Zt.UNAUTHENTICATED,this.clientId=Te.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(n,async t=>{ie(Ao,"Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(ie(Ao,"Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new fe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ho(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function No(t,e){t.asyncQueue.verifyOperationInProgress(),ie(Ao,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async t=>{i.isEqual(t)||(await Es(e.localStore,t),i=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ko(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ie(Ao,"Using user provided OfflineComponentProvider");try{await No(t,t._uninitializedComponentsProvider._offline)}catch(e){const i=e;if(!function(t){return"FirebaseError"===t.name?t.code===ue.FAILED_PRECONDITION||t.code===ue.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(i))throw i;se("Error using user provided cache. Falling back to memory cache: "+i),await No(t,new So)}}else ie(Ao,"Using default OfflineComponentProvider"),await No(t,new Co(void 0));return t._offlineComponents}(t);ie(Ao,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(t=>oo(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>oo(e.remoteStore,n)),t._onlineComponents=e}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ro(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Oo=new Map,xo="firestore.googleapis.com",Lo=!0;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(t){if(void 0===t.host){if(void 0!==t.ssl)throw new de(ue.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=xo,this.ssl=Lo}else this.host=t.host,this.ssl=t.ssl??Lo;if(this.isUsingEmulator=void 0!==t.emulatorOptions,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=Gr;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new de(ue.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,i){if(!0===e&&!0===i)throw new de(ue.INVALID_ARGUMENT,"experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")})(0,t.experimentalForceLongPolling,0,t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ro(t.experimentalLongPollingOptions??{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new de(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new de(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new de(ue.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Po{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new de(ue.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new de(ue.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mo(t),this._emulatorOptions=t.emulatorOptions||{},void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ge;switch(t.type){case"firstParty":return new we(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new de(ue.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Oo.get(t);e&&(ie("ComponentProvider","Removing Datastore"),Oo.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vo{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Vo(this.firestore,t,this._query)}}class Fo{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Uo(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Fo(this.firestore,t,this._key)}toJSON(){return{type:Fo._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(qe(e,Fo._jsonSchema))return new Fo(t,n||null,new Me(Oe.fromString(e.referencePath)))}}Fo._jsonSchemaVersion="firestore/documentReference/1.0",Fo._jsonSchema={type:$e("string",Fo._jsonSchemaVersion),referencePath:$e("string")};class Uo extends Vo{constructor(t,e,n){super(t,e,function(t){return new Ti(t)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Fo(this.firestore,null,new Me(t))}withConverter(t){return new Uo(this.firestore,t,this._path)}}function Bo(t,e,...n){if(t=y(t),Pe("collection","path",e),t instanceof Po){const i=Oe.fromString(e,...n);return Fe(i),new Uo(t,null,i)}{if(!(t instanceof Fo||t instanceof Uo))throw new de(ue.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Oe.fromString(e,...n));return Fe(i),new Uo(t.firestore,null,i)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jo="AsyncQueue";class $o{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Vs(this,"async_queue_retry"),this._c=()=>{const t=Ms();t&&ie(jo,"Visibility state changed to "+t.visibilityState),this.M_.w_()},this.ac=t;const e=Ms();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Ms();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new fe;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Xu.push(t),this.lc()))}async lc(){if(0!==this.Xu.length){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!tn(t))throw t;ie(jo,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(t=>{throw this.nc=t,this.rc=!1,re("INTERNAL UNHANDLED ERROR: ",qo(t)),t}).then(t=>(this.rc=!1,t))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const i=co.createAndSchedule(this,t,e,n,t=>this.hc(t));return this.tc.push(i),i}uc(){this.nc&&ae(47125,{Pc:qo(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do{t=this.ac,await t}while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Tc()})}dc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function qo(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}class zo extends Po{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new $o,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new $o(t),this._firestoreClient=void 0,await t}}}function Ho(t,e){const n="object"==typeof t?t:function(t=Et){const e=bt.get(t);if(!e&&t===Et&&o())return Nt();if(!e)throw At.create("no-app",{appName:t});return e}(),i="string"==typeof t?t:kn,a=function(t){const e=t.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),t.container.getProvider("firestore")}(n).getImmediate({identifier:i});if(!a._initialized){const t=(t=>{const e=(t=>s()?.emulatorHosts?.[t])(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]})("firestore");t&&function(t,e,n,i={}){t=je(t,Po);const s=c(e),o=t._getSettings(),a={...o,emulatorOptions:t._getEmulatorOptions()},h=`${e}:${n}`;s&&(async function(t){(await fetch(t,{credentials:"include"})).ok}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(`https://${h}`),u("Firestore",!0)),o.host!==xo&&o.host!==h&&se("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...o,host:h,ssl:s,emulatorOptions:i};if(!g(l,a)&&(t._setSettings(l),i.mockUserToken)){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=Zt.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[r(JSON.stringify({alg:"none",type:"JWT"})),r(JSON.stringify(o)),""].join(".")}(i.mockUserToken,t._app?.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new de(ue.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Zt(s)}t._authCredentials=new me(new pe(e,n))}}(a,...t)}return a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Go{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Go(yn.fromBase64String(t))}catch(t){throw new de(ue.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Go(yn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Go._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(qe(t,Go._jsonSchema))return Go.fromBase64String(t.bytes)}}Go._jsonSchemaVersion="firestore/bytes/1.0",Go._jsonSchema={type:$e("string",Go._jsonSchemaVersion),bytes:$e("string")};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ko{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new de(ue.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Le(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new de(ue.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new de(ue.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Se(this._lat,t._lat)||Se(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Wo._jsonSchemaVersion}}static fromJSON(t){if(qe(t,Wo._jsonSchema))return new Wo(t.latitude,t.longitude)}}Wo._jsonSchemaVersion="firestore/geoPoint/1.0",Wo._jsonSchema={type:$e("string",Wo._jsonSchemaVersion),latitude:$e("number"),longitude:$e("number")};
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xo{constructor(t){this._values=(t||[]).map(t=>t)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Xo._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(qe(t,Xo._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(t=>"number"==typeof t))return new Xo(t.vectorValues);throw new de(ue.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xo._jsonSchemaVersion="firestore/vectorValue/1.0",Xo._jsonSchema={type:$e("string",Xo._jsonSchemaVersion),vectorValues:$e("object")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jo=/^__.*__$/;class Yo{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new yr(t,this.data,this.fieldMask,e,this.fieldTransforms):new mr(t,this.data,e,this.fieldTransforms)}}function Zo(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae(40011,{Ac:t})}}class ta{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.Rc(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new ta({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){const e=this.path?.child(t),n=this.Vc({path:e,fc:!1});return n.gc(t),n}yc(t){const e=this.path?.child(t),n=this.Vc({path:e,fc:!1});return n.Rc(),n}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return da(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(0===t.length)throw this.Sc("Document fields must not be empty");if(Zo(this.Ac)&&Jo.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class ea{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Ps(t)}Cc(t,e,n,i=!1){return new ta({Ac:t,methodName:e,Dc:n,path:Le.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function na(t){const e=t._freezeSettings(),n=Ps(t._databaseId);return new ea(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ia(t,e,n,i,r,s={}){const o=t.Cc(s.merge||s.mergeFields?2:0,e,n,r);ca("Data must be an object, but it was:",o,i);const a=oa(i,o);let c,h;if(s.merge)c=new gn(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=ha(e,i,n);if(!o.contains(r))throw new de(ue.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);fa(t,r)||t.push(r)}c=new gn(t),h=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,h=o.fieldTransforms;return new Yo(new Wn(a),c,h)}class ra extends Qo{_toFieldTransform(t){return new or(t.path,new Yi)}isEqual(t){return t instanceof ra}}function sa(t,e){if(aa(t=y(t)))return ca("Unsupported field value:",e,t),oa(t,e);if(t instanceof Qo)return function(t,e){if(!Zo(e.Ac))throw e.Sc(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Sc(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&4!==e.Ac)throw e.Sc("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=sa(r,e.wc(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=y(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return function(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!rn(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)?Ki(e):Gi(t,e)}(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Ge.fromDate(t);return{timestampValue:Nr(e.serializer,n)}}if(t instanceof Ge){const n=new Ge(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Nr(e.serializer,n)}}if(t instanceof Wo)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Go)return{bytesValue:kr(e.serializer,t._byteString)};if(t instanceof Fo){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.Sc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:xr(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof Xo)return function(t,e){return{mapValue:{fields:{[On]:{stringValue:Ln},[Mn]:{arrayValue:{values:t.toArray().map(t=>{if("number"!=typeof t)throw e.Sc("VectorValues must only contain numeric values.");return Gi(e.serializer,t)})}}}}}}(t,e);throw e.Sc(`Unsupported field value: ${Be(t)}`)}(t,e)}function oa(t,e){const n={};return hn(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cn(t,(t,i)=>{const r=sa(i,e.mc(t));null!=r&&(n[t]=r)}),{mapValue:{fields:n}}}function aa(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof Wo||t instanceof Go||t instanceof Fo||t instanceof Qo||t instanceof Xo)}function ca(t,e,n){if(!aa(n)||!Ue(n)){const i=Be(n);throw"an object"===i?e.Sc(t+" a custom object"):e.Sc(t+" "+i)}}function ha(t,e,n){if((e=y(e))instanceof Ko)return e._internalPath;if("string"==typeof e)return ua(t,e);throw da("Field path arguments must be of type string or ",t,!1,void 0,n)}const la=new RegExp("[~\\*/\\[\\]]");function ua(t,e,n){if(e.search(la)>=0)throw da(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ko(...e.split("."))._internalPath}catch(i){throw da(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function da(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new de(ue.INVALID_ARGUMENT,a+t+c)}function fa(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t,e,n,i,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Fo(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new ga(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ma("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class ga extends pa{data(){return super.data()}}function ma(t,e){return"string"==typeof e?ua(t,e):e instanceof Ko?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class va extends pa{constructor(t,e,n,i,r,s){super(t,e,n,i,s),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new wa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ma("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new de(ue.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=va._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),t&&t.isValidDocument()&&t.isFoundDocument()?(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e):e}}va._jsonSchemaVersion="firestore/documentSnapshot/1.0",va._jsonSchema={type:$e("string",va._jsonSchemaVersion),bundleSource:$e("string","DocumentSnapshot"),bundleName:$e("string"),bundle:$e("string")};class wa extends va{data(t={}){return super.data(t)}}class Ea{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new ya(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new wa(this._firestore,this._userDataWriter,n.key,n,new ya(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new de(ue.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>{const i=new wa(t._firestore,t._userDataWriter,n.doc.key,n.doc,new ya(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:e++}})}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const i=new wa(t._firestore,t._userDataWriter,e.doc.key,e.doc,new ya(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,s=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:_a(e.type),doc:i,oldIndex:r,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new de(ue.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Ea._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Te.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],i=[];return this.docs.forEach(t=>{null!==t._document&&(e.push(t._document),n.push(this._userDataWriter.convertObjectMap(t._document.data.value.mapValue.fields,"previous")),i.push(t.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function _a(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae(61501,{type:t})}}function ba(t,e){const n=je(t.firestore,zo),i=function(t,e,...n){if(t=y(t),1===arguments.length&&(e=Te.newId()),Pe("doc","path",e),t instanceof Po){const i=Oe.fromString(e,...n);return Ve(i),new Fo(t,null,new Me(i))}{if(!(t instanceof Fo||t instanceof Uo))throw new de(ue.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Oe.fromString(e,...n));return Ve(i),new Fo(t.firestore,t instanceof Uo?t.converter:null,new Me(i))}}(t),r=function(t,e){let n;return n=t?t.toFirestore(e):e,n}(t.converter,e);return function(t,e){return function(t,e){const n=new fe;return t.asyncQueue.enqueueAndForget(async()=>mo(await function(t){return async function(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ie(Ao,"Using user provided OnlineComponentProvider"),await ko(t,t._uninitializedComponentsProvider._online)):(ie(Ao,"Using default OnlineComponentProvider"),await ko(t,new Io))),t._onlineComponents}(t).then(t=>t.syncEngine)}(t),e,n)),n.promise}(function(t){if(t._terminated)throw new de(ue.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||function(t){const e=t._freezeSettings(),n=function(t,e,n,i){return new Nn(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Ro(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator)}(t._databaseId,t._app?.options.appId||"",t._persistenceKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Do(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(t){const e=t?._online.build();return{_offline:t?._offline.build(e),_online:e}}(t._componentsProvider))}(t),t._firestoreClient}(t),e)}(n,[ia(na(t.firestore),"addDoc",i._key,r,null!==t.converter,{}).toMutation(i._key,cr.exists(!1))]).then(()=>i)}function Ta(){return new ra("serverTimestamp")}Ea._jsonSchemaVersion="firestore/querySnapshot/1.0",Ea._jsonSchema={type:$e("string",Ea._jsonSchemaVersion),bundleSource:$e("string","QuerySnapshot"),bundleName:$e("string"),bundle:$e("string")},function(t,e=!0){te="12.4.0",It(new v("firestore",(t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new zo(new ye(t.getProvider("auth-internal")),new _e(r,t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new de(ue.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rn(t.options.projectId,e)}(r,n),r);return i={useFetchStreams:e,...i},s._setSettings(i),s},"PUBLIC").setMultipleInstances(!0)),kt(Jt,Yt,t),kt(Jt,Yt,"esm2020")}();export{ba as a,Bo as c,Ho as g,Nt as i,Ta as s};
