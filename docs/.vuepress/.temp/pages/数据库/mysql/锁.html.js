import comp from "/Users/yangyang/docs/docs/.vuepress/.temp/pages/数据库/mysql/锁.html.vue"
const data = JSON.parse("{\"path\":\"/%E6%95%B0%E6%8D%AE%E5%BA%93/mysql/%E9%94%81.html\",\"title\":\"概览\",\"lang\":\"zh-CN\",\"frontmatter\":{\"gitInclude\":[],\"description\":\"概览 imgimg 全局锁 示例: 用途: 全库备份,期间不允许数据修改 表级别锁 1.表锁 2.元数据锁 再来说说元数据锁（MDL）。 我们不需要显示的使用 MDL，因为当我们对数据库表进行操作时，会自动给这个表加上 MDL： 对一张表进行 CRUD 操作时，加的是 MDL 读锁； 对一张表做结构变更操作的时候，加的是 MDL 写锁； MDL 是为了...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/%E6%95%B0%E6%8D%AE%E5%BA%93/mysql/%E9%94%81.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ntom\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"概览\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"概览 imgimg 全局锁 示例: 用途: 全库备份,期间不允许数据修改 表级别锁 1.表锁 2.元数据锁 再来说说元数据锁（MDL）。 我们不需要显示的使用 MDL，因为当我们对数据库表进行操作时，会自动给这个表加上 MDL： 对一张表进行 CRUD 操作时，加的是 MDL 读锁； 对一张表做结构变更操作的时候，加的是 MDL 写锁； MDL 是为了...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://cdn.xiaolincoding.com//mysql/other/1e37f6994ef44714aba03b8046b1ace2.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"概览\\\",\\\"image\\\":[\\\"https://cdn.xiaolincoding.com//mysql/other/1e37f6994ef44714aba03b8046b1ace2.png\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"notm\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1.表锁\",\"slug\":\"_1-表锁\",\"link\":\"#_1-表锁\",\"children\":[]},{\"level\":2,\"title\":\"2.元数据锁\",\"slug\":\"_2-元数据锁\",\"link\":\"#_2-元数据锁\",\"children\":[]},{\"level\":2,\"title\":\"3.意向锁\",\"slug\":\"_3-意向锁\",\"link\":\"#_3-意向锁\",\"children\":[]},{\"level\":2,\"title\":\"4.AUTO-INC 锁\",\"slug\":\"_4-auto-inc-锁\",\"link\":\"#_4-auto-inc-锁\",\"children\":[]},{\"level\":2,\"title\":\"记录锁record lock\",\"slug\":\"记录锁record-lock\",\"link\":\"#记录锁record-lock\",\"children\":[]},{\"level\":2,\"title\":\"间隙锁gap lock\",\"slug\":\"间隙锁gap-lock\",\"link\":\"#间隙锁gap-lock\",\"children\":[]},{\"level\":2,\"title\":\"next-key lock\",\"slug\":\"next-key-lock\",\"link\":\"#next-key-lock\",\"children\":[]},{\"level\":2,\"title\":\"插入意向锁\",\"slug\":\"插入意向锁\",\"link\":\"#插入意向锁\",\"children\":[]}],\"readingTime\":{\"minutes\":3.13,\"words\":938},\"filePathRelative\":\"数据库/mysql/锁.md\",\"autoDesc\":true}")
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
