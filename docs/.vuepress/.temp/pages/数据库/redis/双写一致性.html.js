import comp from "/Users/yangyang/docs/docs/.vuepress/.temp/pages/数据库/redis/双写一致性.html.vue"
const data = JSON.parse("{\"path\":\"/%E6%95%B0%E6%8D%AE%E5%BA%93/redis/%E5%8F%8C%E5%86%99%E4%B8%80%E8%87%B4%E6%80%A7.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"gitInclude\":[],\"description\":\"redis与 db双写一致性问题 先更新redis,后更新数据库 先更新数据库,后更新redis 先删除redis,后更新数据库 先更新数据库,后删除redis\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/%E6%95%B0%E6%8D%AE%E5%BA%93/redis/%E5%8F%8C%E5%86%99%E4%B8%80%E8%87%B4%E6%80%A7.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ntom\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"redis与 db双写一致性问题 先更新redis,后更新数据库 先更新数据库,后更新redis 先删除redis,后更新数据库 先更新数据库,后删除redis\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"notm\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"先更新redis,后更新数据库\",\"slug\":\"先更新redis-后更新数据库\",\"link\":\"#先更新redis-后更新数据库\",\"children\":[]},{\"level\":2,\"title\":\"先更新数据库,后更新redis\",\"slug\":\"先更新数据库-后更新redis\",\"link\":\"#先更新数据库-后更新redis\",\"children\":[]},{\"level\":2,\"title\":\"先删除redis,后更新数据库\",\"slug\":\"先删除redis-后更新数据库\",\"link\":\"#先删除redis-后更新数据库\",\"children\":[]},{\"level\":2,\"title\":\"先更新数据库,后删除redis\",\"slug\":\"先更新数据库-后删除redis\",\"link\":\"#先更新数据库-后删除redis\",\"children\":[]}],\"readingTime\":{\"minutes\":0.17,\"words\":50},\"filePathRelative\":\"数据库/redis/双写一致性.md\",\"autoDesc\":true}")
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
