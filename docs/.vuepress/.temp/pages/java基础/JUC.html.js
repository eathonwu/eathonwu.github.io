import comp from "/Users/yangyang/vuepress-starter/docs/.vuepress/.temp/pages/java基础/JUC.html.vue"
const data = JSON.parse("{\"path\":\"/java%E5%9F%BA%E7%A1%80/JUC.html\",\"title\":\"锁\",\"lang\":\"zh-CN\",\"frontmatter\":{\"gitInclude\":[],\"description\":\"juc并发编程 主要掌握以下几个类的使用方法: CAS ABA问题,, 1--- >2 ------>1 发生了改变, 但外部并不清楚这种改变 Atomic 类 ​ image countdownlatch 使用场景:同步等待 CyclicBarrier 可循环同步节点 Semaphore ​ 信号量,抢占资源使用 重要方法 acquire 、rele...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/java%E5%9F%BA%E7%A1%80/JUC.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ntom\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"锁\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"juc并发编程 主要掌握以下几个类的使用方法: CAS ABA问题,, 1--- >2 ------>1 发生了改变, 但外部并不清楚这种改变 Atomic 类 ​ image countdownlatch 使用场景:同步等待 CyclicBarrier 可循环同步节点 Semaphore ​ 信号量,抢占资源使用 重要方法 acquire 、rele...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://segmentfault.com/img/bVcHVDB\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"锁\\\",\\\"image\\\":[\\\"https://segmentfault.com/img/bVcHVDB\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"notm\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":1.74,\"words\":522},\"filePathRelative\":\"java基础/JUC.md\",\"autoDesc\":true}")
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
