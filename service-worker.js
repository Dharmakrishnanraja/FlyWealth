
const CACHE='flywealth-v1';

self.addEventListener('install', event=>{
  self.skipWaiting();
});

self.addEventListener('fetch', event=>{
  event.respondWith(
    caches.match(event.request).then(resp=>{
      return resp || fetch(event.request);
    })
  );
});
