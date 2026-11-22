const CACHE='satztraining-satzebene-v3';
const PAGES=[8,22,40,65,66];
const ASSETS=['./','./index.html','./style.css','./tablet-v12.css','./data.js','./app-v12.js','./manifest.json','./icons/app-logo.png','./icons/apple-touch-icon.png','./icons/icon-192.png','./icons/icon-512.png','./icons/favicon.png',...PAGES.flatMap(p=>Array.from({length:8},(_,i)=>`./bilder/p${p}-${i+1}.png`))];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('satztraining-satzebene-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;
  if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).catch(()=>caches.match('./index.html')));return;}
  e.respondWith(caches.open(CACHE).then(cache=>cache.match(e.request,{ignoreSearch:true})).then(c=>c||fetch(e.request)));
});
