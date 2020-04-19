'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "8823f3a4f09a3c1e5f00830ba43dba30",
"/main.dart.js": "dae058a080e0e79541841e7edc483c0e",
"/favicon.png": "4a1d33db681bf6268c1ead42bf4d75aa",
"/icons/Icon-192.png": "4a1d33db681bf6268c1ead42bf4d75aa",
"/icons/Icon-512.png": "4a1d33db681bf6268c1ead42bf4d75aa",
"/manifest.json": "89627d7b1cdf9e9d10f0b95083592161",
"/assets/LICENSE": "f4f6c5df4c89747473e4333811de9598",
"/assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"/assets/FontManifest.json": "580ff1a5d08679ded8fcf5c6848cece7",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
