import comp from "/Users/yangyang/vuepress-starter/docs/.vuepress/.temp/pages/java基础/集合.html.vue"
const data = JSON.parse("{\"path\":\"/java%E5%9F%BA%E7%A1%80/%E9%9B%86%E5%90%88.html\",\"title\":\"List\",\"lang\":\"zh-CN\",\"frontmatter\":{\"gitInclude\":[],\"description\":\"List 默认大小为10 扩容规则 每次扩容 1.5倍 扩容后任然不够大小,直接使用最小的数据大小 大于最大容量,取最大容量 扩展点 go slice扩容规则 小于1024 ,扩容两倍 double容量不能容纳,直接使用预估的容量 大于1024 ,扩容1.25倍\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/java%E5%9F%BA%E7%A1%80/%E9%9B%86%E5%90%88.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ntom\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"List\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"List 默认大小为10 扩容规则 每次扩容 1.5倍 扩容后任然不够大小,直接使用最小的数据大小 大于最大容量,取最大容量 扩展点 go slice扩容规则 小于1024 ,扩容两倍 double容量不能容纳,直接使用预估的容量 大于1024 ,扩容1.25倍\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"List\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"notm\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.31,\"words\":93},\"filePathRelative\":\"java基础/集合.md\",\"autoDesc\":true}")
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
