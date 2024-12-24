import comp from "/Users/yangyang/docs/docs/.vuepress/.temp/pages/java基础/jvm.html.vue"
const data = JSON.parse("{\"path\":\"/java%E5%9F%BA%E7%A1%80/jvm.html\",\"title\":\"类加载机制\",\"lang\":\"zh-CN\",\"frontmatter\":{\"gitInclude\":[],\"description\":\"类加载机制 GC策略 对象优先分配在eden区 大对象直接分配在老年代 长期存活的对象分配在老年代 进入survior 区 或者survior 每经历一次minor gc 年龄+1 累计年龄的对象数超过50% 默认年龄阈值15, cms默认6 取累计年龄和默认年龄的最小值 GC分类 partial GC: Young GC (Minor GC), 只收...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/java%E5%9F%BA%E7%A1%80/jvm.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ntom\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"类加载机制\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"类加载机制 GC策略 对象优先分配在eden区 大对象直接分配在老年代 长期存活的对象分配在老年代 进入survior 区 或者survior 每经历一次minor gc 年龄+1 累计年龄的对象数超过50% 默认年龄阈值15, cms默认6 取累计年龄和默认年龄的最小值 GC分类 partial GC: Young GC (Minor GC), 只收...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://ask.qcloudimg.com/http-save/7851499/6eb59f5de3e722e59bf247b2ec1a01ed.jpeg?imageView2/2/w/1620\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"类加载机制\\\",\\\"image\\\":[\\\"https://ask.qcloudimg.com/http-save/7851499/6eb59f5de3e722e59bf247b2ec1a01ed.jpeg?imageView2/2/w/1620\\\",\\\"https://javaguide.cn/assets/22018368.df835851.png\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"notm\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"GC分类\",\"slug\":\"gc分类\",\"link\":\"#gc分类\",\"children\":[]},{\"level\":2,\"title\":\"引用类型\",\"slug\":\"引用类型\",\"link\":\"#引用类型\",\"children\":[]},{\"level\":2,\"title\":\"如何判断一个类是无用的类\",\"slug\":\"如何判断一个类是无用的类\",\"link\":\"#如何判断一个类是无用的类\",\"children\":[]}],\"readingTime\":{\"minutes\":2.74,\"words\":822},\"filePathRelative\":\"java基础/jvm.md\",\"autoDesc\":true}")
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
