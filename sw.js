const CACHE_NAME = 'pomodoro-tasker-v14';
const APP_SHELL = ['./','./index.html','./styles.css','./app.js','./manifest.json','./icon.svg','./tally.html','./tally.css','./tally.js','./theme.css'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(APP_SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('pomodoro-tasker-')&&key!==CACHE_NAME).map(key=>caches.delete(key)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
 const request=event.request;if(request.method!=='GET')return;const url=new URL(request.url);if(url.origin!==self.location.origin)return;
 if(request.mode==='navigate'){
  event.respondWith((async()=>{try{const response=await fetch(request);if(response.ok){const path=url.pathname;const shell=APP_SHELL.find(item=>new URL(item,self.registration.scope).pathname===path);if(shell&&response.type!=='opaque'){const cache=await caches.open(CACHE_NAME);await cache.put(shell,response.clone())}}return response}catch{const path=url.pathname;const shell=APP_SHELL.find(item=>new URL(item,self.registration.scope).pathname===path);const cache=await caches.open(CACHE_NAME);return(shell&&await cache.match(shell))||await cache.match('./index.html')}})());return;
 }
 event.respondWith((async()=>{const cache=await caches.open(CACHE_NAME);const cached=await cache.match(request);if(cached)return cached;try{const response=await fetch(request);if(response.ok&&response.type!=='opaque')await cache.put(request,response.clone());return response}catch{return new Response('Offline: this resource is not available in the app cache.',{status:503,statusText:'Service Unavailable',headers:{'Content-Type':'text/plain; charset=utf-8','Cache-Control':'no-store'}})}})());
});
