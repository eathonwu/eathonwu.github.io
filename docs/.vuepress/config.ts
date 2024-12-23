import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "ntom",
  description: "架构设计 & 操作系统 & 开发工具 & 知识库",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
