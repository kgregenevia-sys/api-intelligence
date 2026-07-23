// NEXION — Service Worker (PWA offline + auto-update). Bez zmian logiki app.
const VERSION = 'nexion-v1-2026-07-23';
const SHELL = ['./','./index.html','./site.webmanifest','./icon-192.png','./icon-512.png','./favicon.ico','./apple-touch-icon.png'];
self.addEventListener('install', (e)=>{ e.waitUntil((async()=>{
  const c = await caches.open(VERSION);
  await Promise.allSettled(SHELL.map(u=>c.add(new Request(u,{cache:'reload'}))));
  self.skipWaiting();
})()); });
self.addEventListener('activate', (e)=>{ e.waitUntil((async()=>{
  const keys = await caches.keys();
  await Promise.all(keys.filter(k=>k!==VERSION).map(k=>caches.delete(k)));
  await self.clients.claim();
})()); });
self.addEventListener('message', (e)=>{ if(e.data==='SKIP_WAITING') self.skipWaiting(); });
self.addEventListener('fetch', (e)=>{
  const req = e.request;
  if(req.method!=='GET') return;                         // API/POST -> nie cache
  const url = new URL(req.url);
  if(url.origin!==self.location.origin) return;          // Supabase edge -> siec
  if(req.mode==='navigate'){                             // nawigacja: network-first + offline fallback
    e.respondWith((async()=>{
      try{ const net = await fetch(req); const c = await caches.open(VERSION); c.put('./index.html', net.clone()); return net; }
      catch(_e){ return (await caches.match('./index.html')) || (await caches.match('./')) || Response.error(); }
    })()); return;
  }
  e.respondWith((async()=>{                              // statyki: stale-while-revalidate
    const cached = await caches.match(req);
    const net = fetch(req).then(res=>{ if(res&&res.status===200&&res.type==='basic'){ caches.open(VERSION).then(c=>c.put(req,res.clone())); } return res; }).catch(()=>cached);
    return cached || net;
  })());
});
