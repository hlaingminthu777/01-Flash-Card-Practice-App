/* Flash Card Practice App - Service Worker. Bump VERSION on every release. */
const VERSION = 'fc-v2.0.4';
const CORE = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon.svg', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png'];
/* Optional files: cached when present, silently skipped when missing. */
const OPTIONAL = [
  'fonts/fredoka-latin-wght-normal.woff2', 'fonts/noto-sans-myanmar-myanmar-400-normal.woff2', 'fonts/noto-sans-myanmar-myanmar-600-normal.woff2',
  'fonts/noto-sans-myanmar-myanmar-800-normal.woff2',
  'fonts/noto-sans-myanmar-latin-400-normal.woff2', 'fonts/noto-sans-myanmar-latin-600-normal.woff2', 'fonts/noto-sans-myanmar-latin-800-normal.woff2', 'fonts/STIXTwoMath-Regular.woff2',
  'vendor/temml/temml.min.js', 'vendor/temml/mhchem.min.js', 'vendor/temml/Temml-Local.css', 'vendor/temml/Temml.woff2',
  'vendor/xlsx/xlsx.full.min.js', 'vendor/jszip/jszip.min.js', 'vendor/model-viewer/model-viewer.min.js'
];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(CORE).catch(() => Promise.all(CORE.map((u) => c.add(u).catch(() => {})))).then(() => Promise.all(OPTIONAL.map((u) => c.add(u).catch(() => {}))))));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k.startsWith('fc-') && k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('message', (e) => { if (e.data === 'SKIP_WAITING') self.skipWaiting(); });
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  /* Pages: network first (a new index.html is seen even if VERSION was not bumped), cache when offline */
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then((res) => { if (res && res.ok) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put('index.html', copy)); } return res; })
      .catch(() => caches.match(req, { ignoreSearch: true }).then((hit) => hit || caches.match('index.html'))));
    return;
  }
  /* Everything else: cache first */
  e.respondWith(caches.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req).then((res) => {
    if (res && res.ok && res.type === 'basic') { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); }
    return res;
  }).catch(() => (req.mode === 'navigate' ? caches.match('index.html') : Response.error()))));
});
