parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"o6lB":[function(require,module,exports) {
const e=e=>new Promise((o,t)=>{setTimeout(()=>{o(e)},e)}),o=e=>console.log(`Resolved after ${e}ms`);e(2e3).then(o),e(1e3).then(o),e(1500).then(o);
},{}],"L79m":[function(require,module,exports) {
const e=[{name:"Mango",active:!0},{name:"Poly",active:!1},{name:"Ajax",active:!0},{name:"Lux",active:!1}],a=e=>console.table(e),n=(e,a)=>new Promise((n,t)=>{n(e.map(e=>e.name===a?{...e,active:!e.active}:e))});n(e,"Mango").then(a),n(e,"Lux").then(a);
},{}],"eBhC":[function(require,module,exports) {
const t=(t,n)=>Math.floor(Math.random()*(n-t+1)+t),n=(n,o,a)=>{const e=t(200,500);setTimeout(()=>{Math.random()>.3?o(n.id,e):a(n.id)},e)},o=({id:t,time:n})=>{console.log(`Transaction ${t} processed in ${n}ms`)},a=t=>{console.warn(`Error processing transaction ${t}. Please try again later.`)},e=n=>new Promise((o,a)=>{const e=t(200,500);setTimeout(()=>{Math.random()>.3&&o({id:n.id,time:e}),a(n.id)},e)});e({id:70,amount:150}).then(o).catch(a),e({id:71,amount:230}).then(o).catch(a),e({id:72,amount:75}).then(o).catch(a),e({id:73,amount:100}).then(o).catch(a);
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=u(require("./js/task-01")),r=u(require("./js/task-02")),t=u(require("./js/task-03"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function u(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n();if(r&&r.has(e))return r.get(e);var t={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=u?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(t,o,i):t[o]=e[o]}return t.default=e,r&&r.set(e,t),t}
},{"./js/task-01":"o6lB","./js/task-02":"L79m","./js/task-03":"eBhC"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-promisification/src.6b6086a5.js.map