self.addEventListener('install',function(e)
{
	e.waitUntil(
		caches.open('Shuffle game').then(function(cache){
			return cache.addAll([
				'/',
				'index.html',
				'css/bootstrap.css',
				'js/bootstrap.js',
				'js/jquery-1.8.2.js'
				]);
		})
		);
}

	)
self.addEventListener('fetch',function(event){
	console.log(event.request.url);
	event.respondWith(
		caches.match(event.request).then(function(response){
			return response || fetch(event.request);
		})
		);
})