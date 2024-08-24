import { sidebar } from "vuepress-theme-hope";

// 侧边栏配置
export default sidebar({
  "/git/": [
    // "",
    {
      text: "Git",
      icon: "code",
      children: "structure",
    },
  ],
  "/other/": [
    // "",
    {
      text: "杂七杂八",
      icon: "pen",
      children: "structure",
    },
  ],
  "/vue/": [
    // "",
    {
      text: "Vue",
      icon: "pen",
      children: "structure",
    },
  ],
  "/about/": [
    // "",
    {
      text: "About",
      icon: "code",
      children: "structure",
    },
  ],
  "/react/": [
    // "",
    {
      text: "React",
      icon: "code",
      children: "structure",
    },
  ],
  "/docker/": [
    // "",
    {
      text: "Docker",
      icon: "code",
      children: "structure",
    },
  ],
  "/golang/": [
    // "",
    {
      text: "Golang",
      icon: "code",
      children: "structure",
    },
  ],
  // 公用侧边
  "/": [
    "",
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "posts/",
    //   link: "posts/",
    //   children: "structure",
    // },
    // {
    //   text: "文章",
    //   icon: "book",
    //   prefix: "docs/",
    //   link: "docs/",
    //   children: "structure",
    // },
    // "intro",
    // {
    //   text: "幻灯片333",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    // },
  ],
  // "intro",
  // {
  //   text: "幻灯片333",
  //   icon: "person-chalkboard",
  //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
  // },
});
