"use strict";var precacheConfig=[["/site/index.html","6e2dfbcda984a84e1934b5b9ff663478"],["/site/static/css/main.45797c28.css","157ead8533be5515496e0a32b8ee80c0"],["/site/static/js/main.5ae9d5bd.js","e6b3d8499b48e354617502e86b0f0da0"],["/site/static/media/basis.cdf22d5a.png","cdf22d5a9cfc212c9ad70f156d41a570"],["/site/static/media/bg-layer.b15f9339.png","b15f9339b4391c17032a5292878e7f3d"],["/site/static/media/car1.67603f2e.png","67603f2e4912e723dc908c38a8ef1773"],["/site/static/media/car6.cf213dff.jpg","cf213dffe9a5e2919308cb711e775098"],["/site/static/media/epson_right.6a36b1f0.png","6a36b1f0ce6db9b4d7944fe116fdc59e"],["/site/static/media/mobile2.d7600c08.png","d7600c08487e5b98678c9b1e6775d898"],["/site/static/media/mobileBasis.c75a1f12.png","c75a1f12675a9f20ad12386b01390731"],["/site/static/media/produkte.5a11fe02.png","5a11fe0200ecfc2057188a50bf121026"],["/site/static/media/raspi_left.0987f2ce.png","0987f2ce7982e3312d51635f8bd36467"],["/site/static/media/rfid_reader_right.d9bc93e4.png","d9bc93e4bb4a8504187aa95116e10eac"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));var r="/site/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});