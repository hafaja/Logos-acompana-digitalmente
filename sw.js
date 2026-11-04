// Service Worker mínimo de Logos Acompanya (v2 · 2026-11-04)
// Necesario para que Android/Chrome permita instalar la app. No guarda nada en caché.
// IMPORTANTE: solo atiende las peticiones a la propia web. Las de otras webs (base de datos,
// librerías, letras…) van directas, sin pasar por aquí: la versión anterior las pasaba todas
// y las cabeceras de seguridad las bloqueaban («No se ha podido conectar» en los móviles).

self.addEventListener('install', () => { self.skipWaiting(); });

self.addEventListener('activate', (event) => { event.waitUntil(self.clients.claim()); });

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  let url;
  try { url = new URL(req.url); } catch (e) { return; }
  if (url.origin !== self.location.origin) return;   // otras webs: el navegador las pide directamente
  event.respondWith(fetch(req));
});
