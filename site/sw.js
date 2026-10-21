// Service worker for Sinhala practice.
//
// Network first: the app asks the network, keeps a copy, and uses the saved
// copy only when the network fails or is slow. That lets it open offline once
// it has been loaded, while new versions still arrive as soon as you are online.
//
// To force every device to drop its saved files, change CACHE below
// (for example "sinhala-v3") and push.

var CACHE = "sinhala-v2";
var NETWORK_TIMEOUT_MS = 3000;
var PRECACHE = [
  "./",
  "index.html",
  "vocab.js",
  "manifest.webmanifest",
  "icon-192.png",
  "icon-512.png",
  "icon-maskable-512.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE)
      .then(function (cache) { return cache.addAll(PRECACHE); })
      .then(function () { return self.skipWaiting(); })
  );
});

// Delete every saved cache except the current one, then take over open pages.
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (names) {
        return Promise.all(names.filter(function (n) { return n !== CACHE; }).map(function (n) {
          return caches.delete(n);
        }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  var request = event.request;
  if (request.method !== "GET") return;
  if (new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(networkFirst(request, event));
});

// The saved copy of a request, or for a page visit with no copy, the saved index.html.
function savedCopy(request) {
  return caches.match(request).then(function (hit) {
    if (hit) return hit;
    return request.mode === "navigate" ? caches.match("index.html") : undefined;
  });
}

// Answers with the network's response, unless the network fails or takes longer
// than NETWORK_TIMEOUT_MS and a saved copy exists. A good network response is
// always saved, even when the saved copy was used first.
function networkFirst(request, event) {
  var network = fetch(request).then(function (response) {
    if (response.ok && response.type === "basic") {
      var copy = response.clone();
      event.waitUntil(caches.open(CACHE).then(function (cache) { return cache.put(request, copy); }));
    }
    return response;
  });

  return new Promise(function (resolve) {
    var timer = setTimeout(function () {
      savedCopy(request).then(function (hit) { if (hit) resolve(hit); });
    }, NETWORK_TIMEOUT_MS);

    network.then(
      function (response) {
        clearTimeout(timer);
        resolve(response);
      },
      function () {
        clearTimeout(timer);
        savedCopy(request).then(function (hit) { resolve(hit || Response.error()); });
      }
    );
  });
}
