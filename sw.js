/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/11/14/QQ流量分析/index.html","4399998eefc664fa877072125092ce60"],["/2023/11/14/网络渗透(2)/index.html","06d2202b8ab7c885a734cc83cd42ce6b"],["/2023/11/14/网络渗透(3)/index.html","c6aec17e8d1d4231f067cca391b96026"],["/2023/12/03/DedeCMS-V5-7复现/index.html","3bc2bab9c6ccc41fabf91b8474f7d9ef"],["/2023/12/04/pikachu代码审计/index.html","6f4be5d60bdde5af8346f36c5877e21f"],["/2023/12/04/tcp流量报文分析/index.html","5dae99c515d607467a5fd97d8a206f59"],["/2023/12/17/arp欺骗/index.html","305413436fc147d1715334cca55b066f"],["/404.html","5aff9c87c5a515f0a9727fc3e443988d"],["/about/index.html","bd5a652c366cfb4a92d29b9c86b26ab5"],["/archives/2023/11/index.html","77b21215a713141c768fcb9528f2be70"],["/archives/2023/12/index.html","5f009d54a6ad0506b52b52216d3c7f9f"],["/archives/2023/index.html","dde6028b166a901e55a1ebb1fd32876d"],["/archives/index.html","12c2b81b7b2fe53418990a94f7816874"],["/categories/index.html","66e1081cd4eba8752253001c1a719b8d"],["/config_img/sharpery.jpg","09b369f195dd59bc6a0800f36ccceff5"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/highlight-dark.css","0ea5d76d374a283a203564d772ffd935"],["/css/highlight.css","78d82252c6f6f52fe8dc05a9f4d7221a"],["/css/main.css","beb4b73711c80326fe0c04f839947a37"],["/images/a.png","9de3f04e369fe4f58189a205ec1b2651"],["/images/b.png","6185f5be0fff2749b8b70627ca291e1b"],["/images/c.png","42e9223b95751ee8249a333a5cc2fabc"],["/images/d.png","7fb477627c6aeba67c0e1e031afa038e"],["/images/e.png","ce71004580681e7cf3cbe0aba751d3ef"],["/images/f.png","f95c06048f4c878eae181fb5a23e7d8e"],["/images/image-20231114203848639.png","1bdfd0d7061a9995a84660fb3da607b9"],["/images/image-20231114204045158.png","1bdfd0d7061a9995a84660fb3da607b9"],["/images/image-20231114204456057.png","faf713bfd178f4315b6864a22b015769"],["/images/image-20231114205050758.png","9f4cd72cd0e2af7cffe82228efe8ee48"],["/images/image-20231114205327016.png","ce2dcf40bd3fb8df2abc5d6baa8019de"],["/images/image-20231120161648168.png","3732cd0caea588ba6766700b4c339a7f"],["/images/image-20231120161849652.png","ad995ed241ab02e64a9e6a7fb7b67f00"],["/images/image-20231120162504687.png","a0d75b6bb01334dfb034c729cb04afb4"],["/images/image-20231120162631862.png","8cc0ed93188227fbd5db8f1d8e20fa41"],["/images/image-20231120163134483.png","0c0d9f7688fd71675ffacd9be86a3eba"],["/images/image-20231120163237804.png","307df9a849e5975efd4d082e049a2e3b"],["/images/image-20231120163522022.png","4ed71370a20a768d01d181d51a4ccc07"],["/images/image-20231120163850365.png","8c646d4635d4b60e6afa0e3a6630c5a6"],["/images/image-20231120164117741.png","fa1b7091e36e276851447d21ec17fca7"],["/images/image-20231203154456370.png","7224239848f522ef99d3953d2c8125c6"],["/images/image-20231203181338427.png","db21277ed35563ece786505e3e924b1e"],["/images/image-20231203181610700.png","742222ef0855fadef7a41ba1cdabd9be"],["/images/image-20231203182212611.png","ab773911ed7694ef0239f42c36d555e7"],["/images/image-20231203182735571.png","47baec04dee7d5a488eb38d605355de6"],["/images/image-20231203183725628.png","dab24e6664cb12d93dbd27fc0844ab81"],["/images/image-20231203183733967.png","dab24e6664cb12d93dbd27fc0844ab81"],["/images/image-20231203184110318.png","0e6f7bb96ec4a48f730dcf6ef67d69a5"],["/images/image-20231203184356949.png","80e3de09b9a8a3b6fbceba7d62801e9e"],["/images/image-20231203185737331.png","c7593034dde19c4907e326d3c1639494"],["/images/image-20231204135057382.png","0b6cb67e672389609d754ecb21219069"],["/images/image-20231204135152573.png","6402507e33abaed044b0df7b2a5764c9"],["/images/image-20231204135819365.png","5b8454f402aea0eb2dec4991b49e05d5"],["/images/image-20231204140820114.png","fec877958b88eb5b8cdd59592002c361"],["/images/image-20231204140948289.png","00ac0af37e09402ea8679fa6d5f8eaeb"],["/images/image-20231204141042767.png","2a3cf4643aba4e975548d1b160e71ea0"],["/images/image-20231204142755068.png","29809feff1b6ace10b0cfbf03016fa46"],["/images/image-20231204142820637.png","35e4ea66e85ccd30974f110f7fce61bd"],["/images/image-20231204181806892.png","f43c80fff1ea1af749545a9cd87b46f2"],["/images/image-20231204181835440.png","eccc2b6517803ef342180a5702716a8f"],["/images/image-20231204182031817.png","bf8119efe445da49f20ad571fa040cee"],["/images/image-20231204182326173.png","960d233b9c4b31371ce0550bda88f3e8"],["/images/image-20231204182523159.png","5f61ef33b079444f7ad8c3c30e160a35"],["/images/image-20231204182730623.png","a3306c7c9b6f004b1e6665dc047b02ee"],["/images/image-20231204183541580.png","924066f0b4fad466c2e3f1f3c376ae75"],["/images/image-20231204184946184.png","9e90017191623ae6ce249cd8326fb22f"],["/images/image-20231204185000950.png","9e90017191623ae6ce249cd8326fb22f"],["/images/image-20231204185911857.png","8c7df88929ac795887e98d93b75d11e2"],["/images/image-20231204190010860.png","e423e4f92f5610eb31569038d5a3d869"],["/images/image-20231204202939235.png","4c52d1ff0a8b8fd883ce3e5d30688a09"],["/images/image-20231204213540865.png","96a2198c53a301c9b0ce9f4d364bb542"],["/images/image-20231204213753569.png","6c229be971b2158a6fa579354947d8f9"],["/images/image-20231204215049354.png","3d6d82700121077f127f28b58ba11105"],["/images/image-20231204220525155.png","b8d7edccf8c581b93f761bc8d2383912"],["/images/image-20231204220644685.png","9e890afb566de4d6e3ad170bdda0b62c"],["/images/image-20231204220735144.png","d729724b4dee24fbe8c63819a047c07e"],["/images/image-20231204221158696.png","f84adbdeefa4d5979a4743ab52f3aa39"],["/images/image-20231204221240224.png","200f1399c42a3538044b6fa86ee4da7a"],["/images/image-20231204221849883.png","85aa3accd064e407c4b4d743e6541f74"],["/images/image-20231204221901906.png","6cc9fd65d313722359d5b3af7c0f47cf"],["/images/image-20231204224431786.png","9e85857159730aa3900f80bc3add8d9a"],["/images/image-20231204224549307.png","c23b9e759ed71069491271e9e1442ee9"],["/images/image-20231204225704547.png","70ca3678c80e3ef88002ee590af274aa"],["/images/image-20231204230044832.png","7e45fc2a092743fc630f314a4d353ed6"],["/images/image-20231206163115734.png","c92867536ac882113480d86e62e5b018"],["/images/image-20231206163249168.png","0b129cd261cd1c53db0b2c71c2a99814"],["/images/image-20231206163527350.png","3b3658d608134dd73f6873e041375391"],["/images/image-20231206181319449.png","e62d3ff31e664dbc54cb35a095558953"],["/images/image-20231206181738218.png","198d38302c468d2df178754916e3d3c7"],["/images/image-20231206182324985.png","4ff6a5c80139f349eea9c3cd3e779125"],["/images/image-20231206193208070.png","2e790664f274f1b4346944da3d806c0c"],["/images/image-20231206193509738.png","5e7a87e4de33f0714f594b583937e24a"],["/images/image-20231206193528716.png","48b8e4cc68eda5386face3e5a9390c32"],["/images/image-20231206193945612.png","9cc8e966bfe77cfbd7c00da05128e7e2"],["/images/image-20231206200112407.png","32b7dfeea3ba93b228f653fa00f1ac58"],["/images/image-20231206200155208.png","00eaa329339a4cdf483f696fc4a030ef"],["/images/image-20231206223715105.png","906205101de26248fffcc378eb9d6e2a"],["/images/image-20231206223839726.png","6cbd4dc165298d4c3df3410d81837298"],["/images/image-20231206223913025.png","47945be9d3c665da18e5801bf7515228"],["/images/image-20231217105156743.png","defc6142aa407514f418ce3c8153ddb4"],["/images/image-20231217134350409.png","507c48aebfeefd1d3abf7b4a96079ba4"],["/images/image-20231217134507822.png","f1d09796a2aab8002bf6e89b04b2bbb8"],["/images/image-20231217134633779.png","dda65dfe41c53670d03dcb781e16086e"],["/images/image-20231217134837988.png","a3d89473a2c0a93a31dee840860bfec2"],["/images/image-20231217140220094.png","7406f0aeb74014bbbf7d0d782acc1cec"],["/images/image-20231217140253316.png","5d4222957c9a9d0059f85e47a61b56c6"],["/images/image-20231217140610824.png","d95b3bff41a50f3f8eefefe3c76ecabf"],["/images/image-20231217140628776.png","d95b3bff41a50f3f8eefefe3c76ecabf"],["/images/image-20231217140744349.png","6da080265bb1de7600d4223b7e19dab9"],["/images/image-20231217142927766.png","a352fd94d165e29d659f625a66fdba65"],["/images/image-20231217142950389.png","bce24832774f463dc9977d13cac6ed2e"],["/images/image-20231217143835667.png","1708c06717ee3e7688bd95860aca7480"],["/images/image-20231217143946220.png","6ee5d9f60b27e1c1b0f5c84c39512b01"],["/images/image-20231217144304865.png","ee404733c010eced741da2a78557f230"],["/images/send.jpg","06077706c660031202662e4a03fea6dd"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/default.png","beb05a6b5b201044b6d80cacdf29f905"],["/img/fluid.png","5603316bb5bc54a9d5cab14fddd4c510"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","308d2f338b237b9265d93baa07572dbf"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","605f587be2ab3d36472bb03ac27ede65"],["/js/events.js","7fa076a71a5559d89af6b0c6dfd3a0d2"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/links/index.html","840529658ad447395596035fe2e4277d"],["/sw-register.js","ac0b2e8c3a1ae01ba38eee8033f52a79"],["/tags/DedeCMS-V5-7复现/index.html","51efbe317887dabd5bc5de7a68989195"],["/tags/Kali虚拟机采用桥接模式；物理机连接Guet-WiFi，Kali中查看网络配置并截图，能获得IP地址吗？/index.html","e610becb44410bbc63c1c56a7f5fc4d9"],["/tags/index.html","7f4b6dccd738f9b21775743e605ac615"],["/tags/与ZoomEye功能类似的搜索引擎还有哪些/index.html","c42defbb7d7480e64e19e114e0cd0ac2"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
