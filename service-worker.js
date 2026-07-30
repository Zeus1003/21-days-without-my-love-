const CACHE="boba-v4-personal-music-21photos";
const ASSETS=["./","index.html","style.css","app.js","manifest.json","icons/icon-192.png","icons/icon-512.png","music/our_wish.mp3",
...Array.from({length:21},(_,i)=>`images/day${i+1}.jpg`),
...Array.from({length:21},(_,i)=>`images/bg${i+1}.jpg`)];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener("activate",e=>e.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))])));
self.addEventListener("fetch",e=>e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))));
