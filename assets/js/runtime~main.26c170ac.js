(()=>{"use strict";var e,r,t,a,o,n={},f={};function d(e){var r=f[e];if(void 0!==r)return r.exports;var t=f[e]={id:e,loaded:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.loaded=!0,t.exports}d.m=n,d.c=f,e=[],d.O=(r,t,a,o)=>{if(!t){var n=1/0;for(c=0;c<e.length;c++){t=e[c][0],a=e[c][1],o=e[c][2];for(var f=!0,i=0;i<t.length;i++)(!1&o||n>=o)&&Object.keys(d.O).every((e=>d.O[e](t[i])))?t.splice(i--,1):(f=!1,o<n&&(n=o));if(f){e.splice(c--,1);var u=a();void 0!==u&&(r=u)}}return r}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[t,a,o]},d.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return d.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var o=Object.create(null);d.r(o);var n={};r=r||[null,t({}),t([]),t(t)];for(var f=2&a&&e;"object"==typeof f&&!~r.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((r=>n[r]=()=>e[r]));return n.default=()=>e,d.d(o,n),o},d.d=(e,r)=>{for(var t in r)d.o(r,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((r,t)=>(d.f[t](e,r),r)),[])),d.u=e=>"assets/js/"+({53:"935f2afb",85:"1f391b9e",162:"d589d3a7",169:"eef9ccaf",237:"1df93b7f",344:"761664e1",414:"393be207",514:"1be78505",572:"f515c510",624:"a76de88e",658:"85c43aa7",806:"50191268",817:"14eb3368",825:"63634808",860:"666a13a9",918:"17896441",953:"215f7396",954:"0a701d9e",956:"8d7febe2"}[e]||e)+"."+{53:"4a4d9a35",85:"50053041",162:"18f9f83b",169:"39b06e1b",237:"02b33f25",344:"17c9378e",414:"b8b863bb",514:"2dcf7f9a",515:"43b2ab50",572:"2a7ea4ea",624:"334d389a",658:"466d911a",666:"b6d202ba",806:"edb66c2e",817:"a2bd2bdf",825:"70f10fbb",860:"26d30bd4",918:"1e3b0890",953:"7d74b575",954:"1961ad33",956:"baeb76d4",972:"2efd38db"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),a={},o="gameboy-user-manual:",d.l=(e,r,t,n)=>{if(a[e])a[e].push(r);else{var f,i;if(void 0!==t)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var l=u[c];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==o+t){f=l;break}}f||(i=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,d.nc&&f.setAttribute("nonce",d.nc),f.setAttribute("data-webpack",o+t),f.src=e),a[e]=[r];var b=(r,t)=>{f.onerror=f.onload=null,clearTimeout(s);var o=a[e];if(delete a[e],f.parentNode&&f.parentNode.removeChild(f),o&&o.forEach((e=>e(t))),r)return r(t)},s=setTimeout(b.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=b.bind(null,f.onerror),f.onload=b.bind(null,f.onload),i&&document.head.appendChild(f)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/gameboy-user-manual/",d.gca=function(e){return e={17896441:"918",50191268:"806",63634808:"825","935f2afb":"53","1f391b9e":"85",d589d3a7:"162",eef9ccaf:"169","1df93b7f":"237","761664e1":"344","393be207":"414","1be78505":"514",f515c510:"572",a76de88e:"624","85c43aa7":"658","14eb3368":"817","666a13a9":"860","215f7396":"953","0a701d9e":"954","8d7febe2":"956"}[e]||e,d.p+d.u(e)},(()=>{var e={303:0,532:0};d.f.j=(r,t)=>{var a=d.o(e,r)?e[r]:void 0;if(0!==a)if(a)t.push(a[2]);else if(/^(303|532)$/.test(r))e[r]=0;else{var o=new Promise(((t,o)=>a=e[r]=[t,o]));t.push(a[2]=o);var n=d.p+d.u(r),f=new Error;d.l(n,(t=>{if(d.o(e,r)&&(0!==(a=e[r])&&(e[r]=void 0),a)){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;f.message="Loading chunk "+r+" failed.\n("+o+": "+n+")",f.name="ChunkLoadError",f.type=o,f.request=n,a[1](f)}}),"chunk-"+r,r)}},d.O.j=r=>0===e[r];var r=(r,t)=>{var a,o,n=t[0],f=t[1],i=t[2],u=0;if(n.some((r=>0!==e[r]))){for(a in f)d.o(f,a)&&(d.m[a]=f[a]);if(i)var c=i(d)}for(r&&r(t);u<n.length;u++)o=n[u],d.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return d.O(c)},t=self.webpackChunkgameboy_user_manual=self.webpackChunkgameboy_user_manual||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})()})();