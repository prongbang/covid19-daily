'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "ca1a39e9b289e8cf73ea54458e87dbcc",
"/main.dart.js": "cc76bb9420bade6d31709cdd1b239787",
"/favicon.png": "4a1d33db681bf6268c1ead42bf4d75aa",
"/icons/Icon-192.png": "4a1d33db681bf6268c1ead42bf4d75aa",
"/icons/Icon-512.png": "4a1d33db681bf6268c1ead42bf4d75aa",
"/manifest.json": "89627d7b1cdf9e9d10f0b95083592161",
"/.git/config": "a515a2323bf58e1be5b510c2ad0c9809",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
"/.git/objects/51/0cce87d53be8f43dd35bcf895f5c177d016e02": "b3258a84472b74630bc30bc38deb6c51",
"/.git/objects/60/e4ddaf2d7d1f833a9c531946ae4d2751d53e8b": "d0aded2879031b875800a14415f4fdc5",
"/.git/objects/b3/dcd487eae4023a129fbdcfbad0f789c276294c": "20018398c1443b15c988f2ece89bf9c6",
"/.git/objects/e3/327794a27fa05abd23ba19838ab67bc8c23206": "55669e0d2f54cbd1a73ea90f07aafc51",
"/.git/objects/10/8024377707c780c289de5379559ff4161be7ea": "faf5b68f1d5008ba1b7ad757ee6a5bce",
"/.git/objects/2a/5f8c4985fc8cbe0f274be3fdcfd8b0978f67f2": "28156e3641477ff1d4547c049c81481e",
"/.git/objects/65/c28661de40b8ae53264c66fc091693e9e0789e": "b9644a4f320ebad1ac59b0c2492ef22a",
"/.git/objects/6d/e226dd222f362514425a672e57c64863e567ec": "2780d2e8171f4c1016ddcd659100bf80",
"/.git/objects/01/1b4801ee702dd3b254eca637bb67d044e11c55": "4237b8520d4ada2d4b244e22412e373c",
"/.git/objects/52/74d4975bc00c0b3ffd4835f90519ecb1548227": "1b8941868eade1df14dcad4118a3d2e0",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/dc/75c3320684fdbc1cb743c82006a4a4ce5e84b2": "c9cd0449dad83ba51114e2408ab4bfe3",
"/.git/objects/a9/080bbad378b3de2335e03a09f1cc106e4e7aa9": "3c572a59d9dcdd82ac30ab183a04fdc6",
"/.git/objects/db/b33e2858d74728cc37a76acd3943646d82ea61": "48dbb34247c7fbcc4bf8490a57cf1ec4",
"/.git/objects/a8/99d0404616b83ce9415c65c6ad64e9f4956668": "0b627eeca5abdb3fed7c587fa500c1c3",
"/.git/objects/79/b79d9cbff98442ee2f79d78673810e296694eb": "1eeffc9e073b40f148288b17e6ccd00e",
"/.git/objects/48/d08cd867473ff1c8c80cb72561ad946ff873de": "f9bcb1133c12afe8038e093831683e70",
"/.git/objects/12/9f9c8a9b263591bd55bd397d7195a9f5fe5ed3": "0649431171a24ec5e1da0f4ba90a7781",
"/.git/objects/2e/d3f9a9442fe748263246392fd99ff22d13c830": "9e2b391fffc81dffe8510aab1cd986cc",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
"/.git/logs/HEAD": "f919e2b01d85f99b8378b4d356a0ba30",
"/.git/logs/refs/heads/master": "f919e2b01d85f99b8378b4d356a0ba30",
"/.git/logs/refs/remotes/origin/master": "828a67c9812055400e0eb3aab3774b9f",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/refs/heads/master": "5785e791e038a013471e56548e4fee4d",
"/.git/refs/remotes/origin/master": "5785e791e038a013471e56548e4fee4d",
"/.git/index": "903ff35d4e9fac7cb4620e03d119e3de",
"/.git/COMMIT_EDITMSG": "ae95d32a467617c7510b19dd63baa27f",
"/.git/FETCH_HEAD": "f1114c29b5d69f819e358c3b13a50cd1",
"/assets/LICENSE": "f4f6c5df4c89747473e4333811de9598",
"/assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"/assets/FontManifest.json": "580ff1a5d08679ded8fcf5c6848cece7",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/privacy.html": "0daecb773ea73d83a22019b8bfaf3190"
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
