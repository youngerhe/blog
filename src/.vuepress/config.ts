import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

// 配置入口 无需修改
export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "木锤",
  description:
    "记录自己搬砖的点点滴滴，包括：区块链、前端、H5、小程序、后端、数据库、运维、Mysql、Redis、RocketMq、JAVA、Golang、Python、Docker等",

  theme,
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
