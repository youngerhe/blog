module.exports = (options, ctx) => ({
  chainWebpack: (config) => {
    // 黑色主题
    config.plugin("black-theme").tap(() => [
      {
        themeColor: "#000000", // 黑色主题的背景色
        textColor: "#ffffff", // 白色文本色
      },
    ]);

    // 白色主题
    config.plugin("white-theme").tap(() => [
      {
        themeColor: "#ffffff", // 白色主题的背景色
        textColor: "#000000", // 黑色文本色
      },
    ]);
  },
});
