/* eslint-disable array-callback-return */
/* eslint-disable no-restricted-globals */

// Nome do cache
const CACHE_NAME = "nn-lanches";

const urlsToCache = [
  "/",
  "/favicon.png",
  "/manifest.json",
  "/static/js/bundle.js",
  "/static/js/0.chunk.js",
  "/static/js/main.chunk.js"
];

// A primeira vez que o usuário inicia a PWA, 'install' é acionado.
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Abre um cache e armazena nossos arquivos em cache
      return cache.addAll(urlsToCache);
    })
  );
});

// Elimina caches antigos que não sejam os atuais.
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (!cacheWhitelist.includes(key)) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// Quando a página da Web vai buscar arquivos, nós interceptamos esse pedido e servimos os arquivos correspondentes
// se tivemos
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (event.request.cache === "only-if-cache") {
        event.request.mode = "same-origin";
      }
      return response || fetch(event.request);
    })
  );
});
