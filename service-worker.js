self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("cr-qualite-cache").then((cache) => {
      return cache.addAll([
        "index.html",
        "logo.png",
        "icon-512.png",
        "manifest.json"
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
