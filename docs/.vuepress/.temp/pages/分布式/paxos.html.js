import comp from "/Users/yangyang/vuepress-starter/docs/.vuepress/.temp/pages/分布式/paxos.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%88%86%E5%B8%83%E5%BC%8F/paxos.html\",\"title\":\"paxos\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"paxos\",\"date\":\"2024-12-09T14:39:39.000Z\",\"lastmod\":\"2024-12-09T14:39:39.000Z\",\"author\":\"notmtop\",\"categories\":[\"分布式\"],\"tags\":[\"分布式\",\"paxos\"],\"gitInclude\":[],\"description\":\"Basic Paxos 中存在 3 个重要的角色： 提议者（Proposer）：也可以叫做协调者（coordinator），提议者负责接受客户端的请求并发起提案。提案信息通常包括提案编号 (Proposal ID) 和提议的值 (Value)。 接受者（Acceptor）：也可以叫做投票员（voter），负责对提议者的提案进行投票，同时需要记住自己的投...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/%E5%88%86%E5%B8%83%E5%BC%8F/paxos.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"ntom\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"paxos\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Basic Paxos 中存在 3 个重要的角色： 提议者（Proposer）：也可以叫做协调者（coordinator），提议者负责接受客户端的请求并发起提案。提案信息通常包括提案编号 (Proposal ID) 和提议的值 (Value)。 接受者（Acceptor）：也可以叫做投票员（voter），负责对提议者的提案进行投票，同时需要记住自己的投...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://oscimg.oschina.net/oscnet/up-890fa3212e8bf72886a595a34654918486c.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"notmtop\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"分布式\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"paxos\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2024-12-09T14:39:39.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"paxos\\\",\\\"image\\\":[\\\"https://oscimg.oschina.net/oscnet/up-890fa3212e8bf72886a595a34654918486c.png\\\"],\\\"datePublished\\\":\\\"2024-12-09T14:39:39.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"notmtop\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":1.33,\"words\":399},\"filePathRelative\":\"分布式/paxos.md\",\"localizedDate\":\"2024年12月9日\",\"autoDesc\":true}")
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
