// Service Worker mínimo — necesario para que Android/Chrome permita instalar la app.
// No hace caché agresiva (para no complicar las actualizaciones); solo deja pasar
// las peticiones normales, que es lo mínimo que exige Chrome para el "Add to Home Screen".

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
