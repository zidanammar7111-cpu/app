// خدمة بسيطة (service worker) — مطلوبة لجعل التطبيق "PWA" قابل للتركيب كـ APK
const CACHE_NAME = "delivery-app-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// استراتيجية بسيطة: المرور للشبكة أولاً، مع رجوع للكاش لو في انقطاع
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
