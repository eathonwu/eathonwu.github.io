import comp from "/Users/yangyang/vuepress-starter/docs/.vuepress/.temp/pages/其他/查漏补缺.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%85%B6%E4%BB%96/%E6%9F%A5%E6%BC%8F%E8%A1%A5%E7%BC%BA.html\",\"title\":\"查漏补缺\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"查漏补缺\",\"gitInclude\":[],\"description\":\"java 锁 自旋锁 实现cpu空转 会存在超时的情况 ReentrantLock 可重入锁: 巧用condition 用这个await 、notifyAll 可以实现线程通信,但是出现超时情况 Semaphore 交替打印: volatile volatile实现比较轻量化 CyclicBarrier kafka offset管理 每个consume...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/%E5%85%B6%E4%BB%96/%E6%9F%A5%E6%BC%8F%E8%A1%A5%E7%BC%BA.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ntom\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"查漏补缺\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"java 锁 自旋锁 实现cpu空转 会存在超时的情况 ReentrantLock 可重入锁: 巧用condition 用这个await 、notifyAll 可以实现线程通信,但是出现超时情况 Semaphore 交替打印: volatile volatile实现比较轻量化 CyclicBarrier kafka offset管理 每个consume...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/Users/wuguangkuo/Library/Application Support/typora-user-images/image-20230706144230359.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"查漏补缺\\\",\\\"image\\\":[\\\"https://vuepress-theme-hope-docs-demo.netlify.app/Users/wuguangkuo/Library/Application Support/typora-user-images/image-20230706144230359.png\\\",\\\"https://pic2.zhimg.com/80/v2-8d626a3f8af30d7c36ebadf2894af571_1440w.webp\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"notm\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"ReentrantLock\",\"slug\":\"reentrantlock\",\"link\":\"#reentrantlock\",\"children\":[]},{\"level\":2,\"title\":\"Semaphore\",\"slug\":\"semaphore\",\"link\":\"#semaphore\",\"children\":[]},{\"level\":2,\"title\":\"offset管理\",\"slug\":\"offset管理\",\"link\":\"#offset管理\",\"children\":[]},{\"level\":2,\"title\":\"时间轮\",\"slug\":\"时间轮\",\"link\":\"#时间轮\",\"children\":[]},{\"level\":2,\"title\":\"io模型\",\"slug\":\"io模型\",\"link\":\"#io模型\",\"children\":[]},{\"level\":2,\"title\":\"高性能写\",\"slug\":\"高性能写\",\"link\":\"#高性能写\",\"children\":[]},{\"level\":2,\"title\":\"高性能读\",\"slug\":\"高性能读\",\"link\":\"#高性能读\",\"children\":[]},{\"level\":2,\"title\":\"controller作用\",\"slug\":\"controller作用\",\"link\":\"#controller作用\",\"children\":[]},{\"level\":2,\"title\":\"rebalance\",\"slug\":\"rebalance\",\"link\":\"#rebalance\",\"children\":[]},{\"level\":2,\"title\":\"消费策略\",\"slug\":\"消费策略\",\"link\":\"#消费策略\",\"children\":[]},{\"level\":2,\"title\":\"集群规划\",\"slug\":\"集群规划\",\"link\":\"#集群规划\",\"children\":[]},{\"level\":2,\"title\":\"问题\",\"slug\":\"问题\",\"link\":\"#问题\",\"children\":[]},{\"level\":2,\"title\":\"Slice底层实现\",\"slug\":\"slice底层实现\",\"link\":\"#slice底层实现\",\"children\":[]},{\"level\":2,\"title\":\"Map 底层实现\",\"slug\":\"map-底层实现\",\"link\":\"#map-底层实现\",\"children\":[]},{\"level\":2,\"title\":\"接口\",\"slug\":\"接口\",\"link\":\"#接口\",\"children\":[]},{\"level\":2,\"title\":\"GMP\",\"slug\":\"gmp\",\"link\":\"#gmp\",\"children\":[]},{\"level\":2,\"title\":\"管道\",\"slug\":\"管道\",\"link\":\"#管道\",\"children\":[]},{\"level\":2,\"title\":\"协程\",\"slug\":\"协程\",\"link\":\"#协程\",\"children\":[]},{\"level\":2,\"title\":\"各版本区别\",\"slug\":\"各版本区别\",\"link\":\"#各版本区别\",\"children\":[]},{\"level\":2,\"title\":\"长链接\",\"slug\":\"长链接\",\"link\":\"#长链接\",\"children\":[]},{\"level\":2,\"title\":\"短链接\",\"slug\":\"短链接\",\"link\":\"#短链接\",\"children\":[]},{\"level\":2,\"title\":\"长轮询\",\"slug\":\"长轮询\",\"link\":\"#长轮询\",\"children\":[]},{\"level\":2,\"title\":\"短轮询\",\"slug\":\"短轮询\",\"link\":\"#短轮询\",\"children\":[]},{\"level\":2,\"title\":\"配置中心长轮询\",\"slug\":\"配置中心长轮询\",\"link\":\"#配置中心长轮询\",\"children\":[]},{\"level\":2,\"title\":\"ThreadLocal\",\"slug\":\"threadlocal\",\"link\":\"#threadlocal\",\"children\":[]},{\"level\":2,\"title\":\"redis\",\"slug\":\"redis\",\"link\":\"#redis\",\"children\":[]},{\"level\":2,\"title\":\"七层模型\",\"slug\":\"七层模型\",\"link\":\"#七层模型\",\"children\":[]},{\"level\":2,\"title\":\"四层模型\",\"slug\":\"四层模型\",\"link\":\"#四层模型\",\"children\":[]},{\"level\":2,\"title\":\"ARP\",\"slug\":\"arp\",\"link\":\"#arp\",\"children\":[]},{\"level\":2,\"title\":\"NAT\",\"slug\":\"nat\",\"link\":\"#nat\",\"children\":[]},{\"level\":2,\"title\":\"四次握手\",\"slug\":\"四次握手\",\"link\":\"#四次握手\",\"children\":[]},{\"level\":2,\"title\":\"问题\",\"slug\":\"问题-1\",\"link\":\"#问题-1\",\"children\":[]},{\"level\":2,\"title\":\"缓存机制\",\"slug\":\"缓存机制\",\"link\":\"#缓存机制\",\"children\":[]},{\"level\":2,\"title\":\"HTTPS工作原理\",\"slug\":\"https工作原理\",\"link\":\"#https工作原理\",\"children\":[]},{\"level\":2,\"title\":\"单线程reator、单线程\",\"slug\":\"单线程reator、单线程\",\"link\":\"#单线程reator、单线程\",\"children\":[]},{\"level\":2,\"title\":\"单线程reactor、多线程\",\"slug\":\"单线程reactor、多线程\",\"link\":\"#单线程reactor、多线程\",\"children\":[]},{\"level\":2,\"title\":\"多线程reactor 、单线程,不常用\",\"slug\":\"多线程reactor-、单线程-不常用\",\"link\":\"#多线程reactor-、单线程-不常用\",\"children\":[]},{\"level\":2,\"title\":\"多线程reator、多线程\",\"slug\":\"多线程reator、多线程\",\"link\":\"#多线程reator、多线程\",\"children\":[]},{\"level\":2,\"title\":\"ouath 协议工作流程\",\"slug\":\"ouath-协议工作流程\",\"link\":\"#ouath-协议工作流程\",\"children\":[]},{\"level\":2,\"title\":\"\",\"slug\":\"\",\"link\":\"#\",\"children\":[]},{\"level\":2,\"title\":\"Spring Cloud Eureka：\",\"slug\":\"spring-cloud-eureka\",\"link\":\"#spring-cloud-eureka\",\"children\":[]},{\"level\":2,\"title\":\"Spring Cloud Hystrix：断路器\",\"slug\":\"spring-cloud-hystrix-断路器\",\"link\":\"#spring-cloud-hystrix-断路器\",\"children\":[]},{\"level\":2,\"title\":\"分片规划\",\"slug\":\"分片规划\",\"link\":\"#分片规划\",\"children\":[]},{\"level\":2,\"title\":\"Redis\",\"slug\":\"redis-1\",\"link\":\"#redis-1\",\"children\":[]},{\"level\":2,\"title\":\"homo redis\",\"slug\":\"homo-redis\",\"link\":\"#homo-redis\",\"children\":[]},{\"level\":2,\"title\":\"内存泄漏\",\"slug\":\"内存泄漏\",\"link\":\"#内存泄漏\",\"children\":[]},{\"level\":2,\"title\":\"内存溢出\",\"slug\":\"内存溢出\",\"link\":\"#内存溢出\",\"children\":[]},{\"level\":2,\"title\":\"问题排查\",\"slug\":\"问题排查\",\"link\":\"#问题排查\",\"children\":[]},{\"level\":2,\"title\":\"mysql\",\"slug\":\"mysql\",\"link\":\"#mysql\",\"children\":[]},{\"level\":2,\"title\":\"执行过程\",\"slug\":\"执行过程\",\"link\":\"#执行过程\",\"children\":[]},{\"level\":2,\"title\":\"查询缓存\",\"slug\":\"查询缓存\",\"link\":\"#查询缓存\",\"children\":[]},{\"level\":2,\"title\":\"动态加载类框架\",\"slug\":\"动态加载类框架\",\"link\":\"#动态加载类框架\",\"children\":[]},{\"level\":2,\"title\":\"slice\",\"slug\":\"slice\",\"link\":\"#slice\",\"children\":[]},{\"level\":2,\"title\":\"Map:\",\"slug\":\"map\",\"link\":\"#map\",\"children\":[]},{\"level\":2,\"title\":\"rehash\",\"slug\":\"rehash\",\"link\":\"#rehash\",\"children\":[]},{\"level\":2,\"title\":\"GMP模型:\",\"slug\":\"gmp模型\",\"link\":\"#gmp模型\",\"children\":[]},{\"level\":2,\"title\":\"Spring 为什么需要三级缓存解决循环依赖问题\",\"slug\":\"spring-为什么需要三级缓存解决循环依赖问题\",\"link\":\"#spring-为什么需要三级缓存解决循环依赖问题\",\"children\":[]},{\"level\":2,\"title\":\"springboot启动流程\",\"slug\":\"springboot启动流程\",\"link\":\"#springboot启动流程\",\"children\":[]},{\"level\":2,\"title\":\"explain语句\",\"slug\":\"explain语句\",\"link\":\"#explain语句\",\"children\":[]},{\"level\":2,\"title\":\"三级缓存\",\"slug\":\"三级缓存\",\"link\":\"#三级缓存\",\"children\":[]},{\"level\":2,\"title\":\"gc\",\"slug\":\"gc\",\"link\":\"#gc\",\"children\":[]},{\"level\":2,\"title\":\"两阶段提交\",\"slug\":\"两阶段提交\",\"link\":\"#两阶段提交\",\"children\":[]},{\"level\":2,\"title\":\"缓存更新策略\",\"slug\":\"缓存更新策略\",\"link\":\"#缓存更新策略\",\"children\":[]},{\"level\":2,\"title\":\"云原生\",\"slug\":\"云原生\",\"link\":\"#云原生\",\"children\":[]},{\"level\":2,\"title\":\"设计模式\",\"slug\":\"设计模式\",\"link\":\"#设计模式\",\"children\":[{\"level\":3,\"title\":\"常用设计\",\"slug\":\"常用设计\",\"link\":\"#常用设计\",\"children\":[]},{\"level\":3,\"title\":\"solid原则\",\"slug\":\"solid原则\",\"link\":\"#solid原则\",\"children\":[]}]}],\"readingTime\":{\"minutes\":17.59,\"words\":5277},\"filePathRelative\":\"其他/查漏补缺.md\",\"autoDesc\":true}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
