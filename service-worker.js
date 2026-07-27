const CACHE = "boba-v1";
const ASSETS = [
  "./","index.html","style.css","app.js","manifest.json",
  "images/day1.jpg","icons/icon-192.png","icons/icon-512.png"
];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener("fetch", e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
