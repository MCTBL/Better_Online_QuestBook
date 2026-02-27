const CACHE_VERSION = "v1"; // 发布时手动+1，或用构建注入
const PRECACHE_NAME = `BMPageCache-${CACHE_VERSION}`;
const CONFIG_URL = "/cache-config.json";

// 安装：预缓存核心资源 + 配置清单
self.addEventListener("install", (event) => {
    event.waitUntil(
        (async () => {
            const cache = await caches.open(PRECACHE_NAME);
            try {
                const resp = await fetch(CONFIG_URL, { cache: "no-store" });
                if (!resp.ok) throw new Error("加载缓存配置失败");
                const config = await resp.json();

                const urls = Array.isArray(config.urlsToCache) ? config.urlsToCache : [];
                const safeUrls = urls.filter((u) => typeof u === "string" && u.startsWith("/"));

                const results = await Promise.allSettled(safeUrls.map((u) => cache.add(u)));
                const rejected = results.filter((r) => r.status === "rejected");
                if (rejected.length) {
                    console.warn("部分资源预缓存失败：", rejected);
                }
            } catch (e) {
                console.warn("预缓存配置获取失败：", e);
            }

            self.skipWaiting();
        })()
    );
});

// 激活：清理旧缓存
self.addEventListener("activate", (event) => {
    event.waitUntil(
        (async () => {
            const keys = await caches.keys();
            await Promise.all(
                keys.map((key) => {
                    if (key.startsWith("BMPageCache-") && key !== PRECACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
            await self.clients.claim();
        })()
    );
});

// 抓取：按类型分策略
self.addEventListener("fetch", (event) => {
    const req = event.request;
    const url = new URL(req.url);

    // 只处理同源 GET
    if (req.method !== "GET" || url.origin !== self.location.origin) return;

    // 1) HTML：网络优先，失败走缓存/离线页
    if (req.mode === "navigate" || (req.headers.get("accept") || "").includes("text/html")) {
        event.respondWith(
            (async () => {
                try {
                    const fresh = await fetch(req);
                    return fresh;
                } catch {
                    const cached = await caches.match(req);
                    return cached || caches.match(OFFLINE_URL);
                }
            })()
        );
        return;
    }

    // 2) 静态资源：缓存优先
    event.respondWith(
        (async () => {
            const cached = await caches.match(req);
            if (cached) return cached;

            const resp = await fetch(req);
            const cache = await caches.open(PRECACHE_NAME);
            cache.put(req, resp.clone());
            return resp;
        })()
    );
});
