if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>n(e,o),d={module:{uri:o},exports:l,require:t};s[o]=Promise.all(i.map((e=>d[e]||t(e)))).then((e=>(r(...e),l)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/apple-icon-180-DT5NF0Fl.png",revision:null},{url:"assets/favicon-196-B1HopOxs.png",revision:null},{url:"assets/index-CEF98s0T.css",revision:null},{url:"assets/index-DcemI36h.js",revision:null},{url:"assets/index-DcemI36h.js.map",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js.map",revision:null},{url:"index.html",revision:"fe6bd33f7f464ae8238c9ae85fc63d4a"},{url:"manifest.webmanifest",revision:"c58af96c5e5e41e2d5e63e8723826f8d"},{url:"manifest-icon-192.maskable.png",revision:"162a6a4cb2198317bf1de6429bad477d"},{url:"manifest-icon-512.maskable.png",revision:"a857c9b902cca2bec5a414283dd912f2"},{url:"manifest.webmanifest",revision:"c58af96c5e5e41e2d5e63e8723826f8d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
