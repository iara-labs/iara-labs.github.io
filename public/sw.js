// Service Worker básico para Iara Labs
const CACHE_NAME = "iara-labs-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/images/logo.webp",
  "/images/logo-nav.webp",
  "/manifest.json",
  "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Space+Grotesk:wght@300..700&display=swap",
];

// Instalação do Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cache aberto");
      return cache.addAll(urlsToCache);
    })
  );
});

// Interceptação de requisições
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - retorna a resposta do cache
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

// Atualização do Service Worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Removendo cache antigo:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
