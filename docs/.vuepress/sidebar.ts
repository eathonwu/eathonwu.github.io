import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    "portfolio",
    {
      text: "其他",
      icon: "laptop-code",
      prefix: "其他/",
      link: "其他/",
      children: "structure",
    },
    {
      text: "算法",
      icon: "laptop-code",
      prefix: "算法/",
      link: "算法/",
      children: "structure",
    },
    // {
    //   text: "分布式",
    //   icon: "laptop-code",
    //   prefix: "分布式/",
    //   link: "分布式/",
    //   children: "structure",
    // },
    // {
    //   text: "架构",
    //   icon: "laptop-code",
    //   prefix: "架构/",
    //   link: "架构/",
    //   children: "structure",
    // }, 
    // {
    //   text: "数据库",
    //   icon: "laptop-code",
    //   prefix: "数据库/",
    //   link: "数据库/",
    //   children: "structure",
    // },
    // {
    //   text: "go语言基础",
    //   icon: "laptop-code",
    //   prefix: "go语言基础/",
    //   link: "go语言基础/",
    //   children: "structure",
    // },
    // {
    //   text: "java基础",
    //   icon: "laptop-code",
    //   prefix: "java基础/",
    //   link: "java基础/",
    //   children: "structure",
    // },
    // {
    //   text: "linux",
    //   icon: "laptop-code",
    //   prefix: "linux/",
    //   link: "linux/",
    //   children: "structure",
    // },

    // // 需要删除
    // {
    //   text: "案例",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "文档",
    //   icon: "book",
    //   prefix: "guide/",
    //   children: "structure",
    // },
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    // },
  ],
});
