import comp from "/Users/yangyang/docs/docs/.vuepress/.temp/pages/分布式/raft协议.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%88%86%E5%B8%83%E5%BC%8F/raft%E5%8D%8F%E8%AE%AE.html\",\"title\":\"raft协议\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"raft协议\",\"date\":\"2024-12-09T14:39:39.000Z\",\"lastmod\":\"2024-12-09T14:39:39.000Z\",\"author\":\"notmtop\",\"categories\":[\"分布式\"],\"tags\":[\"分布式\",\"raft\"],\"gitInclude\":[],\"description\":\"+++ raft 算法是 Multi-Paxos 的一个变种，其简化了 Multi-Paxos 的思想，变得更容易被理解以及工程实现，实际项目中可以优先考虑 Raft 算法 +++ \\u00151、拜占庭将军 假设多位拜占庭将军中没有叛军，信使的信息可靠但有可能被暗杀的情况下，将军们如何达成是否要进攻的一致性决定？ 解决方案 2、SOP(共识算法) 共识算法 r...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/%E5%88%86%E5%B8%83%E5%BC%8F/raft%E5%8D%8F%E8%AE%AE.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ntom\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"raft协议\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"+++ raft 算法是 Multi-Paxos 的一个变种，其简化了 Multi-Paxos 的思想，变得更容易被理解以及工程实现，实际项目中可以优先考虑 Raft 算法 +++ \\u00151、拜占庭将军 假设多位拜占庭将军中没有叛军，信使的信息可靠但有可能被暗杀的情况下，将军们如何达成是否要进攻的一致性决定？ 解决方案 2、SOP(共识算法) 共识算法 r...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/paxos-rsm-architecture.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"notmtop\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"分布式\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"raft\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2024-12-09T14:39:39.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"raft协议\\\",\\\"image\\\":[\\\"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/paxos-rsm-architecture.png\\\"],\\\"datePublished\\\":\\\"2024-12-09T14:39:39.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"notmtop\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"2、SOP(共识算法)\",\"slug\":\"_2、sop-共识算法\",\"link\":\"#_2、sop-共识算法\",\"children\":[]},{\"level\":2,\"title\":\"3 leader选举\",\"slug\":\"_3-leader选举\",\"link\":\"#_3-leader选举\",\"children\":[]},{\"level\":2,\"title\":\"日志复制\",\"slug\":\"日志复制\",\"link\":\"#日志复制\",\"children\":[]}],\"readingTime\":{\"minutes\":5.26,\"words\":1579},\"filePathRelative\":\"分布式/raft协议.md\",\"localizedDate\":\"2024年12月9日\",\"autoDesc\":true}")
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
