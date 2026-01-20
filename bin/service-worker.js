self.addEventListener("install", (event) => {
	event.waitUntil(
		fetch("/cache-config.json")
			.then((response) => {
				if (!response.ok) {
					throw new Error("加载缓存配置失败");
				}
				return response.json();
			})
			.then((config) => {
				return caches.open("BMPageCache").then((cache) => {
					return cache.addAll(config.urlsToCache).catch((error) => {
						console.error("缓存失败：", error);
					});
				});
			})
	);
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			return response || fetch(event.request);
		})
	);
});
