if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,a,c)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return n;case"module":return i;default:return e(s)}}))).then((e=>{const s=c(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/DBP1mCeZdZG8CQwYAspVf/_buildManifest.js",revision:"DBP1mCeZdZG8CQwYAspVf"},{url:"/_next/static/DBP1mCeZdZG8CQwYAspVf/_ssgManifest.js",revision:"DBP1mCeZdZG8CQwYAspVf"},{url:"/_next/static/chunks/02e2b1896db915c5c45412c46efa584e31b5aa0e.41509c16a4cfcdbad73b.js",revision:"DBP1mCeZdZG8CQwYAspVf"},{url:"/_next/static/chunks/133c715b03ee074daf4a5610a197a5592a5fbe66.95b1b10c88592a78cc67.js",revision:"DBP1mCeZdZG8CQwYAspVf"},{url:"/_next/static/chunks/434c99b7da989338e96d35ac6fcc83d7a982bcb2.0016a79e2384734bf9ce.js",revision:"DBP1mCeZdZG8CQwYAspVf"},{url:"/_next/static/chunks/b2052acc85783d8a10d5ee8c6b013facc5d108ee.619b16a14f90c73098bf.js",revision:"DBP1mCeZdZG8CQwYAspVf"},{url:"/_next/static/chunks/f6f1fe5937dc3051a9f3253700749454a935ace7.1526d7c00841787e3b9c.js",revision:"DBP1mCeZdZG8CQwYAspVf"},{url:"/_next/static/chunks/framework.c14d00bd6be484d824be.js",revision:"DBP1mCeZdZG8CQwYAspVf"},{url:"/_next/static/chunks/main-1aad2214b4d70df2a2e8.js",revision:"DBP1mCeZdZG8CQwYAspVf"},{url:"/_next/static/chunks/pages/_app-90246625031b07627673.js",revision:"DBP1mCeZdZG8CQwYAspVf"},{url:"/_next/static/chunks/pages/_error-248d1e501582d3552680.js",revision:"DBP1mCeZdZG8CQwYAspVf"},{url:"/_next/static/chunks/pages/index-2a327a56510c970d5b40.js",revision:"DBP1mCeZdZG8CQwYAspVf"},{url:"/_next/static/chunks/pages/mypokemons-d60f2ca1c25c28dd9338.js",revision:"DBP1mCeZdZG8CQwYAspVf"},{url:"/_next/static/chunks/pages/pokemon-71db8cae94742be3424b.js",revision:"DBP1mCeZdZG8CQwYAspVf"},{url:"/_next/static/chunks/pages/pokemon/%5Bname%5D-f1ba6bd1b80ebe3ad9f4.js",revision:"DBP1mCeZdZG8CQwYAspVf"},{url:"/_next/static/chunks/polyfills-df541f88df35afcfaabe.js",revision:"DBP1mCeZdZG8CQwYAspVf"},{url:"/_next/static/chunks/webpack-95c2b224bccf352ee870.js",revision:"DBP1mCeZdZG8CQwYAspVf"},{url:"/_next/static/css/0d0b1d0697e060c9adff.css",revision:"DBP1mCeZdZG8CQwYAspVf"},{url:"/android-chrome-192x192.png",revision:"041f3c920a3f455a1077790bf80c5946"},{url:"/android-chrome-512x512.png",revision:"6e28458ce8ead6ef63c8dca8b63eb76d"},{url:"/apple-touch-icon.png",revision:"936f78b6138685cedcab4299e086ce91"},{url:"/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/favicon-16x16.png",revision:"abe977c8db704bece20e34769e86d04d"},{url:"/favicon-32x32.png",revision:"c1d854c52ce35ee5187b9052d08124e9"},{url:"/favicon.ico",revision:"fc38cf7f93602249e98912d0b1f68d8f"},{url:"/manifest.json",revision:"b30aac79943faa554d81de06eb5c0115"},{url:"/maskable_icon.png",revision:"0d05cdd6cd8d1ba1406b374d638a0f0c"},{url:"/mstile-144x144.png",revision:"3217ec5763c34139e89a5fa0525d351a"},{url:"/mstile-150x150.png",revision:"35c35fd63ba35c2d6f07d5b77e8d1a8c"},{url:"/mstile-310x150.png",revision:"8bd3cb7959a110e51cb204f9099b37aa"},{url:"/mstile-310x310.png",revision:"77083cb3a959b4c3d0b7cb87a0ae4ce4"},{url:"/mstile-70x70.png",revision:"29fab42681b2e1067d64825ae1c9dd1f"},{url:"/safari-pinned-tab.svg",revision:"768e64e2d781616087a56cec4514c708"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
