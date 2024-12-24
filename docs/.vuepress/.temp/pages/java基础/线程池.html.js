import comp from "/Users/yangyang/docs/docs/.vuepress/.temp/pages/java基础/线程池.html.vue"
const data = JSON.parse("{\"path\":\"/java%E5%9F%BA%E7%A1%80/%E7%BA%BF%E7%A8%8B%E6%B1%A0.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"gitInclude\":[],\"description\":\"TODO 线程状态 新建: new 就绪: 等待cpu调度 (start方法), Thread.yield() 会让线程从运行状态转换为就绪状态 运行 : running状态 ,Thread.sleep()不会释放线程,只是会释放cpu占用 阻塞: 等待资源 等待 : monitor.wait 终止: stop imageimage\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/java%E5%9F%BA%E7%A1%80/%E7%BA%BF%E7%A8%8B%E6%B1%A0.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ntom\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"TODO 线程状态 新建: new 就绪: 等待cpu调度 (start方法), Thread.yield() 会让线程从运行状态转换为就绪状态 运行 : running状态 ,Thread.sleep()不会释放线程,只是会释放cpu占用 阻塞: 等待资源 等待 : monitor.wait 终止: stop imageimage\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://segmentfault.com/img/bVcHVEm\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"\\\",\\\"image\\\":[\\\"https://segmentfault.com/img/bVcHVEm\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"notm\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.23,\"words\":70},\"filePathRelative\":\"java基础/线程池.md\",\"autoDesc\":true}")
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
