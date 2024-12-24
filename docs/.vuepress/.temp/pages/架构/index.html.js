import comp from "/Users/yangyang/docs/docs/.vuepress/.temp/pages/架构/index.html.vue"
const data = JSON.parse("{\"path\":\"/%E6%9E%B6%E6%9E%84/\",\"title\":\"架构\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"架构\",\"gitInclude\":[],\"description\":\"负载均衡介入层 应用集群层 分布式服务层 资源层 qps redis 单机 10万qps 单个应用 数据库8C 16G, 几千qps 左右 单机数据库 -----> 分业务----------> 读写分离--------------> 分库分表 clickhouse 写入50万 qps kakfa 使用Kafka 使用到了 mmap 和 sendfil...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/%E6%9E%B6%E6%9E%84/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ntom\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"架构\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"负载均衡介入层 应用集群层 分布式服务层 资源层 qps redis 单机 10万qps 单个应用 数据库8C 16G, 几千qps 左右 单机数据库 -----> 分业务----------> 读写分离--------------> 分库分表 clickhouse 写入50万 qps kakfa 使用Kafka 使用到了 mmap 和 sendfil...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"架构\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"notm\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.32,\"words\":96},\"filePathRelative\":\"架构/index.md\",\"autoDesc\":true}")
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
