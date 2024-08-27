import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as i}from"./app-BD7WayJ1.js";const e={},l=i(`<h1 id="《mbit》gin-gorm-搭建项目" tabindex="-1"><a class="header-anchor" href="#《mbit》gin-gorm-搭建项目"><span>《Mbit》gin+gorm 搭建项目</span></a></h1><ul><li><strong>基础架构搭建，后续服务会以此为标准</strong></li></ul><h2 id="一、目录结构" tabindex="-1"><a class="header-anchor" href="#一、目录结构"><span>一、目录结构</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>├── api             // 业务接口</span></span>
<span class="line"><span>├── cmd             // 项目主干</span></span>
<span class="line"><span>├── uc              // 项目</span></span>
<span class="line"><span>├── main.go         // 入口文件</span></span>
<span class="line"><span>├── config          // 配置文件</span></span>
<span class="line"><span>├── init            // 初始化内容</span></span>
<span class="line"><span>├── internal        // 私有库</span></span>
<span class="line"><span>├── pkg             // 公共库</span></span>
<span class="line"><span>├── scripts        // 执行脚本</span></span>
<span class="line"><span>├── test          // 测试文件</span></span>
<span class="line"><span>├── vendor        // 应用程序依赖项</span></span>
<span class="line"><span>├── go.mod        // go模块配置文件</span></span>
<span class="line"><span>└── .gitignore      // git排除项</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、gin" tabindex="-1"><a class="header-anchor" href="#二、gin"><span>二、Gin</span></a></h2><ul><li><strong>Gin 是一个用 Go 语言编写的 Web 框架，它提供了快速、灵活和高性能的方式来构建 Web 应用程序。</strong></li></ul><h3 id="_2-1、主入口" tabindex="-1"><a class="header-anchor" href="#_2-1、主入口"><span>2.1、主入口</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 创建main.go</span></span>
<span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>  &quot;context&quot;</span></span>
<span class="line"><span>  &quot;errors&quot;</span></span>
<span class="line"><span>  &quot;fmt&quot;</span></span>
<span class="line"><span>  &quot;net/http&quot;</span></span>
<span class="line"><span>  &quot;os&quot;</span></span>
<span class="line"><span>  &quot;os/signal&quot;</span></span>
<span class="line"><span>  &quot;syscall&quot;</span></span>
<span class="line"><span>  &quot;time&quot;</span></span>
<span class="line"><span>  &quot;uc/internal/router&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>  // 路由封装</span></span>
<span class="line"><span>  r := router.Init()</span></span>
<span class="line"><span>   </span></span>
<span class="line"><span>   // 启动服务</span></span>
<span class="line"><span>  srv := &amp;http.Server{</span></span>
<span class="line"><span>    Addr:    &quot;:8080&quot;,</span></span>
<span class="line"><span>    Handler: r,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 优雅退出</span></span>
<span class="line"><span>  go func() {</span></span>
<span class="line"><span>    if err := srv.ListenAndServe(); err != nil &amp;&amp; !errors.Is(err, http.ErrServerClosed) {</span></span>
<span class="line"><span>      fmt.Printf(&quot;listen: %s&quot;, err)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 等待中断信号</span></span>
<span class="line"><span>  quit := make(chan os.Signal, 1)</span></span>
<span class="line"><span>  signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)</span></span>
<span class="line"><span>  &lt;-quit</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)</span></span>
<span class="line"><span>  defer cancel()</span></span>
<span class="line"><span>  if err := srv.Shutdown(ctx); err != nil {</span></span>
<span class="line"><span>    fmt.Printf(&quot;server shutdown: %s &quot;, err)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  fmt.Println(&quot;Server exited gracefully&quot;)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2、初始化" tabindex="-1"><a class="header-anchor" href="#_2-2、初始化"><span>2.2、初始化</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 创建文件 /internal/router/router.go</span></span>
<span class="line"><span>package router</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>  &quot;github.com/gin-gonic/gin&quot;</span></span>
<span class="line"><span>routerV1 &quot;uc/internal/router/v1&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Init() *gin.Engine {</span></span>
<span class="line"><span>r := gin.Default()</span></span>
<span class="line"><span>routerV1.UserRouter(r)</span></span>
<span class="line"><span>return r</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3、封装" tabindex="-1"><a class="header-anchor" href="#_2-3、封装"><span>2.3、封装</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 创建文件 /internal/router/v1/UserRouter.go</span></span>
<span class="line"><span>package v1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>  &quot;github.com/gin-gonic/gin&quot;</span></span>
<span class="line"><span>  &quot;uc/internal/controller&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func UserRouter(r *gin.Engine) {</span></span>
<span class="line"><span>  userRouter := r.Group(&quot;v1/user&quot;)</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    // 访问路径 http://localhost:8080/v1/user/list</span></span>
<span class="line"><span>    userRouter.GET(&quot;/list&quot;, func(c *gin.Context) {</span></span>
<span class="line"><span>      c.String(200, &quot;hello world&quot;)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、zap" tabindex="-1"><a class="header-anchor" href="#三、zap"><span>三、Zap</span></a></h2><ul><li><strong>zap 是一种在 Go 语言中广泛使用的高性能、结构化的日志库</strong>。</li></ul><h3 id="_3-1、封装" tabindex="-1"><a class="header-anchor" href="#_3-1、封装"><span>3.1、封装</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package logger</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>  rotatelogs &quot;github.com/lestrrat-go/file-rotatelogs&quot;</span></span>
<span class="line"><span>  &quot;github.com/spf13/viper&quot;</span></span>
<span class="line"><span>  &quot;go.uber.org/zap&quot;</span></span>
<span class="line"><span>  &quot;go.uber.org/zap/zapcore&quot;</span></span>
<span class="line"><span>  &quot;io&quot;</span></span>
<span class="line"><span>  &quot;os&quot;</span></span>
<span class="line"><span>  &quot;strings&quot;</span></span>
<span class="line"><span>  &quot;time&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var Logger *zap.SugaredLogger</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Init() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  encoderConfig := zapcore.EncoderConfig{</span></span>
<span class="line"><span>    MessageKey:       &quot;msg&quot;,</span></span>
<span class="line"><span>    LevelKey:         &quot;level&quot;,</span></span>
<span class="line"><span>    TimeKey:          &quot;ts&quot;,</span></span>
<span class="line"><span>    NameKey:          &quot;log&quot;,</span></span>
<span class="line"><span>    CallerKey:        &quot;caller&quot;,</span></span>
<span class="line"><span>    FunctionKey:      &quot;&quot;,</span></span>
<span class="line"><span>    StacktraceKey:    &quot;stacktrace&quot;,</span></span>
<span class="line"><span>    SkipLineEnding:   false,</span></span>
<span class="line"><span>    LineEnding:       &quot;\\n&quot;,</span></span>
<span class="line"><span>    EncodeLevel:      zapcore.CapitalLevelEncoder,</span></span>
<span class="line"><span>    EncodeTime:       zapcore.ISO8601TimeEncoder,</span></span>
<span class="line"><span>    EncodeDuration:   zapcore.SecondsDurationEncoder,</span></span>
<span class="line"><span>    EncodeCaller:     zapcore.ShortCallerEncoder,</span></span>
<span class="line"><span>    EncodeName:       zapcore.FullNameEncoder,</span></span>
<span class="line"><span>    ConsoleSeparator: &quot; &quot;,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  jsonEncoder := zapcore.NewJSONEncoder(encoderConfig)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  infoLevel := zap.LevelEnablerFunc(func(lvl zapcore.Level) bool {</span></span>
<span class="line"><span>    return lvl == zapcore.InfoLevel</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  errorLevel := zap.LevelEnablerFunc(func(lvl zapcore.Level) bool {</span></span>
<span class="line"><span>    return lvl &gt;= zapcore.WarnLevel</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  infoWriter := getWriter(&quot;log/info&quot;)</span></span>
<span class="line"><span>  errorWriter := getWriter(&quot;log/error&quot;)</span></span>
<span class="line"><span>  core := zapcore.NewTee(</span></span>
<span class="line"><span>    zapcore.NewCore(jsonEncoder, zapcore.AddSync(infoWriter), infoLevel),</span></span>
<span class="line"><span>    zapcore.NewCore(jsonEncoder, zapcore.AddSync(errorWriter), errorLevel),</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>  log := zap.New(core, zap.Fields((zap.String(&quot;product_name&quot;, &quot;uc&quot;))), zap.AddCaller())</span></span>
<span class="line"><span>  Logger = log.Sugar().WithOptions(zap.AddCallerSkip(1))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func getWriter(filename string) io.Writer {</span></span>
<span class="line"><span>  hook, err := rotatelogs.New(</span></span>
<span class="line"><span>    // demo.YYmmddHH.log</span></span>
<span class="line"><span>    strings.Replace(filename, &quot;.log&quot;, &quot;&quot;, -1)+&quot;-%Y%m%d%H.log&quot;,</span></span>
<span class="line"><span>    // 保存xxx小时</span></span>
<span class="line"><span>    rotatelogs.WithMaxAge(time.Hour*time.Duration(7*24)),</span></span>
<span class="line"><span>    // 按xxx小时切割</span></span>
<span class="line"><span>    rotatelogs.WithRotationTime(time.Hour*time.Duration(1)),</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    os.Exit(202)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return hook</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Debug(args ...interface{}) {</span></span>
<span class="line"><span>  Logger.Debug(args...)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Debugf(template string, args ...interface{}) {</span></span>
<span class="line"><span>Logger.Debugf(template, args...)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Info(args ...interface{}) {</span></span>
<span class="line"><span>Logger.Info(args...)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Infof(template string, args ...interface{}) {</span></span>
<span class="line"><span>  Logger.Infof(template, args...)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Warn(args ...interface{}) {</span></span>
<span class="line"><span>  Logger.Warn(args...)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Warnf(template string, args ...interface{}) {</span></span>
<span class="line"><span>  Logger.Warnf(template, args...)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Error(args ...interface{}) {</span></span>
<span class="line"><span>  Logger.Error(args...)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Errorf(template string, args ...interface{}) {</span></span>
<span class="line"><span>  Logger.Errorf(template, args...)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func DPanic(args ...interface{}) {</span></span>
<span class="line"><span>  Logger.DPanic(args...)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func DPanicf(template string, args ...interface{}) {</span></span>
<span class="line"><span>  Logger.DPanicf(template, args...)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Panic(args ...interface{}) {</span></span>
<span class="line"><span>  Logger.Panic(args...)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Panicf(template string, args ...interface{}) {</span></span>
<span class="line"><span>  Logger.Panicf(template, args...)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Fatal(args ...interface{}) {</span></span>
<span class="line"><span>  Logger.Fatal(args...)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Fatalf(template string, args ...interface{}) {</span></span>
<span class="line"><span>  Logger.Fatalf(template, args...)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2、使用" tabindex="-1"><a class="header-anchor" href="#_3-2、使用"><span>3.2、使用</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 编辑 /internal/router/v1/UserRouer.go</span></span>
<span class="line"><span>package v1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>  &quot;github.com/gin-gonic/gin&quot;</span></span>
<span class="line"><span>  &quot;uc/pkg/logger&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func UserRouter(r *gin.Engine) {</span></span>
<span class="line"><span>  userRouter := r.Group(&quot;v1/user&quot;)</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    // 访问该接口即可看到根目录下生成的日志</span></span>
<span class="line"><span>    userRouter.GET(&quot;/list&quot;, func(c *gin.Context) {</span></span>
<span class="line"><span>      logger.Error(&quot;严重错误&quot;)</span></span>
<span class="line"><span>      logger.Info(&quot;打印信息&quot;)</span></span>
<span class="line"><span>      c.String(200, &quot;hello world&quot;)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、全局状态码" tabindex="-1"><a class="header-anchor" href="#四、全局状态码"><span>四、全局状态码</span></a></h2><ul><li><strong>统一异常处理，提高代码的可维护性和用户友好性</strong></li></ul><h3 id="_4-1、封装" tabindex="-1"><a class="header-anchor" href="#_4-1、封装"><span>4.1、封装</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 创建 /internal/constant/ErrorCode.go</span></span>
<span class="line"><span>package constant</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const (</span></span>
<span class="line"><span>  SUCCESS = 200 // 成功</span></span>
<span class="line"><span></span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var CodeMap = map[int]string{</span></span>
<span class="line"><span>  SUCCESS: &quot;success&quot;,</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2、使用" tabindex="-1"><a class="header-anchor" href="#_4-2、使用"><span>4.2、使用</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 编辑 /internal/router/v1/UserRouer.go</span></span>
<span class="line"><span>package v1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>  &quot;github.com/gin-gonic/gin&quot;</span></span>
<span class="line"><span>  &quot;uc/internal/constant&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func UserRouter(r *gin.Engine) {</span></span>
<span class="line"><span>  userRouter := r.Group(&quot;v1/user&quot;)</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    userRouter.GET(&quot;/list&quot;, func(c *gin.Context) {</span></span>
<span class="line"><span>      c.JSON(200, map[string]interface{}{</span></span>
<span class="line"><span>        &quot;status&quot;: constant.SUCCESS,</span></span>
<span class="line"><span>        &quot;msg&quot;:    constant.CodeMap[constant.SUCCESS],</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、viper" tabindex="-1"><a class="header-anchor" href="#五、viper"><span>五、Viper</span></a></h2><ul><li><strong>Viper 是一个用于 Go 语言的配置文件解析库，它支持 JSON、TOML、YAML、HCL、INI、envfile 和 Java properties 等多种格式。</strong></li></ul><h3 id="_5-1、配置文件" tabindex="-1"><a class="header-anchor" href="#_5-1、配置文件"><span>5.1、配置文件</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># configs/configs.yaml</span></span>
<span class="line"><span>app:</span></span>
<span class="line"><span>  port: 8080</span></span>
<span class="line"><span>mysql:</span></span>
<span class="line"><span>  master:</span></span>
<span class="line"><span>    host: 127.0.0.1</span></span>
<span class="line"><span>    port: 3307</span></span>
<span class="line"><span>    user: root</span></span>
<span class="line"><span>    password: 123456</span></span>
<span class="line"><span>    db: mbit</span></span>
<span class="line"><span>  slave:</span></span>
<span class="line"><span>      - host: 127.0.0.1</span></span>
<span class="line"><span>        port: 3308</span></span>
<span class="line"><span>        user: root</span></span>
<span class="line"><span>        password: 123456</span></span>
<span class="line"><span>        db: mbit</span></span>
<span class="line"><span>      - host: 127.0.0.1</span></span>
<span class="line"><span>        port: 3308</span></span>
<span class="line"><span>        user: root</span></span>
<span class="line"><span>        password: 123456</span></span>
<span class="line"><span>        db: mbit</span></span>
<span class="line"><span>  base:</span></span>
<span class="line"><span>    data: 1</span></span>
<span class="line"><span>    max_open_conn: 100</span></span>
<span class="line"><span>    max_idle_conn: 60</span></span>
<span class="line"><span>    conn_max_life_time: 60</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2、封装" tabindex="-1"><a class="header-anchor" href="#_5-2、封装"><span>5.2、封装</span></a></h3><ul><li><strong>按照指定格式、时间、文件名、级别切割日志</strong></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// configs/configs.go</span></span>
<span class="line"><span>package configs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>  &quot;fmt&quot;</span></span>
<span class="line"><span>  &quot;github.com/fsnotify/fsnotify&quot;</span></span>
<span class="line"><span>  &quot;github.com/spf13/viper&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var Config = new(MyConfig)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type App struct {</span></span>
<span class="line"><span>  Port int \`yaml:&quot;port&quot;\`</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type DB struct {</span></span>
<span class="line"><span>  Host     string \`yaml:&quot;host&quot;\`</span></span>
<span class="line"><span>  Port     int    \`yaml:&quot;port&quot;\`</span></span>
<span class="line"><span>  User     string \`yaml:&quot;user&quot;\`</span></span>
<span class="line"><span>  Password string \`yaml:&quot;password&quot;\`</span></span>
<span class="line"><span>  DB       string \`yaml:&quot;db&quot;\`</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Mysql struct {</span></span>
<span class="line"><span>  Master *DB   \`yaml:&quot;master&quot;\`</span></span>
<span class="line"><span>  Slaves []*DB \`yaml:&quot;slaves&quot;\`</span></span>
<span class="line"><span>  Base   struct {</span></span>
<span class="line"><span>    Data            int</span></span>
<span class="line"><span>    MaxOpenConn     int \`yaml:&quot;max_open_conn&quot; mapstructure:&quot;max_open_conn&quot;\`</span></span>
<span class="line"><span>    MaxIdleConn     int \`yaml:&quot;max_idle_conn&quot; mapstructure:&quot;max_idle_conn&quot;\`</span></span>
<span class="line"><span>    ConnMaxLifeTime int \`yaml:&quot;conn_max_life_time&quot; mapstructure:&quot;conn_max_life_time&quot;\`</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type MyConfig struct {</span></span>
<span class="line"><span>  *App</span></span>
<span class="line"><span>  *Mysql</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Init() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 加载配置</span></span>
<span class="line"><span>  viper.SetConfigFile(&quot;./configs/configs.yaml&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 监听配置</span></span>
<span class="line"><span>  viper.WatchConfig()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 监听是否更改配置文件</span></span>
<span class="line"><span>  viper.OnConfigChange(func(e fsnotify.Event) {</span></span>
<span class="line"><span>    if err := viper.Unmarshal(&amp;Config); err != nil {</span></span>
<span class="line"><span>      panic(err)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if err := viper.ReadInConfig(); err != nil {</span></span>
<span class="line"><span>    panic(fmt.Errorf(&quot;ReadInConfig failed, err: %v&quot;, err))</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if err := viper.Unmarshal(&amp;Config); err != nil {</span></span>
<span class="line"><span>    panic(fmt.Errorf(&quot;unmarshal failed, err: %v&quot;, err))</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3、使用" tabindex="-1"><a class="header-anchor" href="#_5-3、使用"><span>5.3、使用</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// main.go</span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>  configs.Init()</span></span>
<span class="line"><span>  fmt.Println(viper.GetInt(&quot;app.port&quot;))</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、mysql-gorm" tabindex="-1"><a class="header-anchor" href="#六、mysql-gorm"><span>六、Mysql+Gorm</span></a></h2><ul><li><strong>MySQL 是一个关系型数据库管理系统，由瑞典 MySQL AB 公司开发，属于 Oracle 旗下产品。</strong></li><li><strong>GORM 是一个强大的 ORM 库，可以简化数据库操作并提供方便的查询方法。它提供了一种简单而强大的方式来处理数据库操作，包括连接到数据库、定义数据模型、执行查询、插入、更新和删除数据等功能。</strong></li></ul><h3 id="_6-1、封装" tabindex="-1"><a class="header-anchor" href="#_6-1、封装"><span>6.1、封装</span></a></h3><ul><li><strong>连接池+读写分离</strong></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># internal/mysql/mysql.go</span></span>
<span class="line"><span>package mysql</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>  &quot;database/sql&quot;</span></span>
<span class="line"><span>  &quot;fmt&quot;</span></span>
<span class="line"><span>  &quot;gorm.io/driver/mysql&quot;</span></span>
<span class="line"><span>  &quot;gorm.io/gorm&quot;</span></span>
<span class="line"><span>  &quot;gorm.io/plugin/dbresolver&quot;</span></span>
<span class="line"><span>  &quot;log&quot;</span></span>
<span class="line"><span>  &quot;time&quot;</span></span>
<span class="line"><span>  &quot;uc/configs&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var DBG = new(gorm.DB)</span></span>
<span class="line"><span>var DBS = new(sql.DB)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// DBConfig 配置数据库连接信息</span></span>
<span class="line"><span>type DBConfig struct {</span></span>
<span class="line"><span>  Username string</span></span>
<span class="line"><span>  Password string</span></span>
<span class="line"><span>  Host     string</span></span>
<span class="line"><span>  Port     int</span></span>
<span class="line"><span>  Database string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Init() {</span></span>
<span class="line"><span>  dsn := getDSN(&amp;DBConfig{</span></span>
<span class="line"><span>    Username: configs.Config.Mysql.Master.User,</span></span>
<span class="line"><span>    Password: configs.Config.Mysql.Master.Password,</span></span>
<span class="line"><span>    Host:     configs.Config.Mysql.Master.Host,</span></span>
<span class="line"><span>    Port:     configs.Config.Mysql.Master.Port,</span></span>
<span class="line"><span>    Database: configs.Config.Mysql.Master.DB,</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  db, err := gorm.Open(mysql.New(mysql.Config{</span></span>
<span class="line"><span>    DSN: dsn,</span></span>
<span class="line"><span>  }))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    log.Fatal(&quot;Could not connect to the master database:&quot;, err)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  replicas := []gorm.Dialector{}</span></span>
<span class="line"><span>  for _, s := range configs.Config.Slaves {</span></span>
<span class="line"><span>    dsnSlaves := getDSN(&amp;DBConfig{</span></span>
<span class="line"><span>      Username: s.User,</span></span>
<span class="line"><span>      Password: s.Password,</span></span>
<span class="line"><span>      Host:     s.Host,</span></span>
<span class="line"><span>      Port:     s.Port,</span></span>
<span class="line"><span>      Database: s.DB,</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    replicas = append(replicas, mysql.New(mysql.Config{DSN: dsnSlaves}))</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  err = db.Use(</span></span>
<span class="line"><span>    dbresolver.Register(dbresolver.Config{</span></span>
<span class="line"><span>    Sources: []gorm.Dialector{mysql.New(mysql.Config{</span></span>
<span class="line"><span>      DSN: dsn,</span></span>
<span class="line"><span>    })},</span></span>
<span class="line"><span>    Replicas: replicas,</span></span>
<span class="line"><span>    Policy:   dbresolver.RandomPolicy{},</span></span>
<span class="line"><span>  }).</span></span>
<span class="line"><span>    SetMaxOpenConns(configs.Config.Mysql.Base.MaxOpenConn).</span></span>
<span class="line"><span>    SetMaxIdleConns(configs.Config.Mysql.Base.MaxIdleConn).</span></span>
<span class="line"><span>    SetConnMaxLifetime(time.Duration(configs.Config.Mysql.Base.ConnMaxLifeTime)),</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    log.Fatal(&quot;Could not connect to the replicas database:&quot;, err)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  DBG = db</span></span>
<span class="line"><span>  DBS, err = db.DB()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// getDSN 生成DSN（数据源名称）</span></span>
<span class="line"><span>func getDSN(cfg *DBConfig) string {</span></span>
<span class="line"><span>  return fmt.Sprintf(&quot;%s:%s@tcp(%s:%d)/%s?charset=utf8mb4&amp;parseTime=%t&amp;loc=%s&quot;,</span></span>
<span class="line"><span>    cfg.Username,</span></span>
<span class="line"><span>    cfg.Password,</span></span>
<span class="line"><span>    cfg.Host,</span></span>
<span class="line"><span>    cfg.Port,</span></span>
<span class="line"><span>    cfg.Database,</span></span>
<span class="line"><span>    true,</span></span>
<span class="line"><span>    &quot;Local&quot;)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2、使用" tabindex="-1"><a class="header-anchor" href="#_6-2、使用"><span>6.2、使用</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 创建user表</span></span>
<span class="line"><span>CREATE TABLE \`user\` (</span></span>
<span class="line"><span>  \`uid\` int(11) NOT NULL,</span></span>
<span class="line"><span>  \`username\` varchar(50) NOT NULL,</span></span>
<span class="line"><span>  \`password\` varchar(255) NOT NULL,</span></span>
<span class="line"><span>  \`salt\` varchar(255) NOT NULL,</span></span>
<span class="line"><span>  \`email\` varchar(100) DEFAULT NULL,</span></span>
<span class="line"><span>  \`phone\` varchar(20) DEFAULT NULL,</span></span>
<span class="line"><span>  \`status\` tinyint(4) NOT NULL DEFAULT &#39;1&#39;,</span></span>
<span class="line"><span>  \`create_time\` bigint(20) NOT NULL,</span></span>
<span class="line"><span>  \`update_time\` bigint(20) NOT NULL,</span></span>
<span class="line"><span>  PRIMARY KEY (\`uid\`),</span></span>
<span class="line"><span>  UNIQUE KEY \`idx_email\` (\`email\`),</span></span>
<span class="line"><span>  UNIQUE KEY \`idx_phone\` (\`phone\`)</span></span>
<span class="line"><span>) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// main.go</span></span>
<span class="line"><span>type User struct {</span></span>
<span class="line"><span>  Uid      uint</span></span>
<span class="line"><span>  Username string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main(){</span></span>
<span class="line"><span>  configs.Init()</span></span>
<span class="line"><span>  mysql.Init()</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>// Read</span></span>
<span class="line"><span>var user User</span></span>
<span class="line"><span>  mysql.DBG.Table(&quot;user&quot;).First(&amp;user)</span></span>
<span class="line"><span>  fmt.Println(&quot;User:&quot;, user)</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 退出db链接...</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七、发送邮件" tabindex="-1"><a class="header-anchor" href="#七、发送邮件"><span>七、发送邮件</span></a></h2><ul><li><strong>stmp 服务器可以选择 163、qq 等，这里不做使用说明。</strong></li></ul><h3 id="_7-1、封装" tabindex="-1"><a class="header-anchor" href="#_7-1、封装"><span>7.1、封装</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// internal/util/email</span></span>
<span class="line"><span>package email</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>  &quot;fmt&quot;</span></span>
<span class="line"><span>  &quot;net/smtp&quot;</span></span>
<span class="line"><span>  &quot;strings&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const MAIL_TYPE_HTML = &quot;html&quot;</span></span>
<span class="line"><span>const MAIL_TYPE_TEXT = &quot;text&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Email struct {</span></span>
<span class="line"><span>  Host     string</span></span>
<span class="line"><span>  Port     string</span></span>
<span class="line"><span>  Username string</span></span>
<span class="line"><span>  Password string</span></span>
<span class="line"><span>  auth     smtp.Auth</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var MyEmail = new(Email)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Init() {</span></span>
<span class="line"><span>  MyEmail = &amp;Email{</span></span>
<span class="line"><span>    Host:     &quot;smtp.xxx.com&quot;,</span></span>
<span class="line"><span>    Port:     &quot;xx&quot;,</span></span>
<span class="line"><span>    Username: &quot;xx@xx.com&quot;,</span></span>
<span class="line"><span>    Password: &quot;xxx&quot;, // 这个password是授权码，别弄错~</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  MyEmail.auth = smtp.PlainAuth(&quot;&quot;, MyEmail.Username, MyEmail.Password, MyEmail.Host)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (e *Email) SendEmail(subject string, to []string, mailType string, message string) error {</span></span>
<span class="line"><span>  var contentType = &quot;text/plain; charset=UTF-8&quot;</span></span>
<span class="line"><span>  if mailType == MAIL_TYPE_HTML {</span></span>
<span class="line"><span>    contentType = &quot;text/html; charset=UTF-8&quot;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  var msg = &quot;To: &quot; + strings.Join(to, &quot;,&quot;) + &quot;\\r\\n&quot; +</span></span>
<span class="line"><span>  &quot;From: &quot; + e.Username + &quot;\\r\\n&quot; +</span></span>
<span class="line"><span>  &quot;Subject: &quot; + subject + &quot;\\r\\n&quot; +</span></span>
<span class="line"><span>  &quot;Content-Type: &quot; + contentType + &quot;\\r\\n\\r\\n&quot; +</span></span>
<span class="line"><span>  message + &quot;\\r\\n&quot;</span></span>
<span class="line"><span>  return smtp.SendMail(fmt.Sprintf(&quot;%s:%s&quot;, e.Host, e.Port), e.auth, e.Username, to, []byte(msg))</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2、使用" tabindex="-1"><a class="header-anchor" href="#_7-2、使用"><span>7.2、使用</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package email</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>  &quot;fmt&quot;</span></span>
<span class="line"><span>  &quot;testing&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func TestSendEmail(t *testing.T) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 邮箱初始化</span></span>
<span class="line"><span>  Init()</span></span>
<span class="line"><span>  err := MyEmail.SendEmail(&quot;mbit的第一封信&quot;, []string{&quot;xxx@163.com&quot;}, MAIL_TYPE_HTML, \`&lt;p style=&#39;color:red&#39;&gt;Hello World&lt;/p&gt;\`)</span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    fmt.Println(&quot;Error:&quot;, err)</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    fmt.Println(&quot;Email sent successfully.&quot;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="八、redis" tabindex="-1"><a class="header-anchor" href="#八、redis"><span>八、redis</span></a></h2><p><strong>备注：苹果电脑的 docker redis 集群通信问题没搞定，后面用虚拟机再说。</strong></p><h3 id="_8-1、封装" tabindex="-1"><a class="header-anchor" href="#_8-1、封装"><span>8.1、封装</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package redis</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>  &quot;context&quot;</span></span>
<span class="line"><span>  &quot;fmt&quot;</span></span>
<span class="line"><span>  &quot;github.com/redis/go-redis/v9&quot;</span></span>
<span class="line"><span>  &quot;uc/configs&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type RDB struct {</span></span>
<span class="line"><span>  client *redis.Client</span></span>
<span class="line"><span>  ctx    context.Context</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var Client = new(RDB)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Init() {</span></span>
<span class="line"><span>  cof := configs.Config.Redis</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  Client = NewClient(cof)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func NewClient(config *configs.Redis) *RDB {</span></span>
<span class="line"><span>  addrLen := len(config.Addr)</span></span>
<span class="line"><span>  if addrLen == 0 {</span></span>
<span class="line"><span>    panic(fmt.Sprintf(&quot;redis addr nil&quot;))</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  var client *redis.Client</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  client = redis.NewClient(&amp;redis.Options{</span></span>
<span class="line"><span>    Addr:         config.Addr[0],</span></span>
<span class="line"><span>    Password:     config.Pass,</span></span>
<span class="line"><span>    MaxRetries:   config.MaxRetries,</span></span>
<span class="line"><span>    PoolSize:     config.PoolSize,</span></span>
<span class="line"><span>    MinIdleConns: config.MinIdleConns,</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  ctx := context.Background()</span></span>
<span class="line"><span>  if err := client.Ping(ctx).Err(); err != nil {</span></span>
<span class="line"><span>    panic(fmt.Sprintf(&quot;redis ping err:%v&quot;, err))</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return &amp;RDB{client: client, ctx: ctx}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (r *RDB) Set(key string, value interface{}) error {</span></span>
<span class="line"><span>  return r.client.Set(r.ctx, key, value, 0).Err()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (r *RDB) Get(key string) (string, error) {</span></span>
<span class="line"><span>  return r.client.Get(r.ctx, key).Result()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (r *RDB) Delete(key string) error {</span></span>
<span class="line"><span>  return r.client.Del(r.ctx, key).Err()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (r *RDB) FlushAll() error {</span></span>
<span class="line"><span>  return r.client.FlushAll(r.ctx).Err()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (r *RDB) Close() error {</span></span>
<span class="line"><span>  return r.client.Close()</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-2、使用" tabindex="-1"><a class="header-anchor" href="#_8-2、使用"><span>8.2、使用</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package redis</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>  &quot;fmt&quot;</span></span>
<span class="line"><span>  &quot;testing&quot;</span></span>
<span class="line"><span>  &quot;uc/configs&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func TestRedis(t *testing.T) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  client := NewClient(&amp;configs.Redis{</span></span>
<span class="line"><span>    Addr: []string{</span></span>
<span class="line"><span>      &quot;127.0.0.1:6379&quot;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    Pass:         &quot;&quot;,</span></span>
<span class="line"><span>    Db:           0,</span></span>
<span class="line"><span>    MaxRetries:   3,</span></span>
<span class="line"><span>    PoolSize:     10,</span></span>
<span class="line"><span>    MinIdleConns: 5,</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  defer func(client *RDB) {</span></span>
<span class="line"><span>    err := client.Close()</span></span>
<span class="line"><span>    if err != nil {</span></span>
<span class="line"><span>      fmt.Println(&quot;Redis close err:&quot;, err)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }(client)</span></span>
<span class="line"><span>  err := client.Set(&quot;foo&quot;, &quot;bar&quot;)</span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    fmt.Println(&quot;Error setting key:&quot;, err)</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  get, err := client.Get(&quot;foo&quot;)</span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    fmt.Println(&quot;Error setting key:&quot;, err)</span></span>
<span class="line"><span>      return</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  fmt.Println(&quot;get&quot;, get)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="九、nacos-配置中心" tabindex="-1"><a class="header-anchor" href="#九、nacos-配置中心"><span>九、nacos 配置中心</span></a></h2><h3 id="_9-1、封装" tabindex="-1"><a class="header-anchor" href="#_9-1、封装"><span>9.1、封装</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package nacos</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>  &quot;bytes&quot;</span></span>
<span class="line"><span>  &quot;fmt&quot;</span></span>
<span class="line"><span>  &quot;github.com/nacos-group/nacos-sdk-go/v2/clients&quot;</span></span>
<span class="line"><span>  &quot;github.com/nacos-group/nacos-sdk-go/v2/common/constant&quot;</span></span>
<span class="line"><span>  &quot;github.com/nacos-group/nacos-sdk-go/v2/vo&quot;</span></span>
<span class="line"><span>  &quot;github.com/spf13/viper&quot;</span></span>
<span class="line"><span>  &quot;strconv&quot;</span></span>
<span class="line"><span>  &quot;strings&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Config struct {</span></span>
<span class="line"><span>  ServerAddr string</span></span>
<span class="line"><span>  Namespace  string</span></span>
<span class="line"><span>  DataId     string</span></span>
<span class="line"><span>  Group      string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func NewNacosConfig(serverAddr string, namespace, dataId, group string) *Config {</span></span>
<span class="line"><span>  return &amp;Config{</span></span>
<span class="line"><span>    ServerAddr: serverAddr,</span></span>
<span class="line"><span>    Namespace:  namespace,</span></span>
<span class="line"><span>    DataId:     dataId,</span></span>
<span class="line"><span>    Group:      group,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (n *Config) GetConfig() (string, error) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 拼接nacos配置</span></span>
<span class="line"><span>  var serverConfigs []constant.ServerConfig</span></span>
<span class="line"><span>  values := strings.Split(n.ServerAddr, &quot;,&quot;)</span></span>
<span class="line"><span>  for _, v := range values {</span></span>
<span class="line"><span>    vs := strings.Split(v, &quot;:&quot;)</span></span>
<span class="line"><span>    if len(vs) != 2 {</span></span>
<span class="line"><span>      continue</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    port, _ := strconv.ParseInt(vs[1], 10, 64)</span></span>
<span class="line"><span>    serverConfigs = append(serverConfigs, *constant.NewServerConfig(vs[0], uint64(port)))</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  clientConfig := *constant.NewClientConfig(</span></span>
<span class="line"><span>    constant.WithNamespaceId(n.Namespace),</span></span>
<span class="line"><span>    constant.WithTimeoutMs(5000),</span></span>
<span class="line"><span>    constant.WithNotLoadCacheAtStart(true),</span></span>
<span class="line"><span>    constant.WithLogDir(&quot;/tmp/nacos/log&quot;),</span></span>
<span class="line"><span>    constant.WithCacheDir(&quot;/tmp/nacos/cache&quot;),</span></span>
<span class="line"><span>    constant.WithLogLevel(&quot;warn&quot;),</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  client, err := clients.NewConfigClient(</span></span>
<span class="line"><span>    vo.NacosClientParam{</span></span>
<span class="line"><span>      ClientConfig:  &amp;clientConfig,</span></span>
<span class="line"><span>      ServerConfigs: serverConfigs,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    return &quot;&quot;, err</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 获取配置</span></span>
<span class="line"><span>  content, err := client.GetConfig(vo.ConfigParam{</span></span>
<span class="line"><span>    DataId: n.DataId,</span></span>
<span class="line"><span>    Group:  n.Group,</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    return &quot;&quot;, err</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  go func() {</span></span>
<span class="line"><span>    err = client.ListenConfig(vo.ConfigParam{</span></span>
<span class="line"><span>      DataId: n.DataId,</span></span>
<span class="line"><span>      Group:  n.Group,</span></span>
<span class="line"><span>      OnChange: func(namespace, group, dataId, data string) {</span></span>
<span class="line"><span>        dataByte := []byte(data)</span></span>
<span class="line"><span>        if err = viper.MergeConfig(bytes.NewBuffer(dataByte)); err != nil {</span></span>
<span class="line"><span>          fmt.Printf(&quot;viper MergeConfig err: %v&quot;, err)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }()</span></span>
<span class="line"><span>  return content, nil</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2、使用" tabindex="-1"><a class="header-anchor" href="#_9-2、使用"><span>9.2、使用</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package configs</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>  &quot;bytes&quot;</span></span>
<span class="line"><span>  &quot;fmt&quot;</span></span>
<span class="line"><span>  &quot;github.com/spf13/viper&quot;</span></span>
<span class="line"><span>  &quot;os&quot;</span></span>
<span class="line"><span>  &quot;uc/internal/nacos&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const (</span></span>
<span class="line"><span>  ENV_NACOS_ENDPOINTS = &quot;ENV_NACOS_ENDPOINTS&quot;</span></span>
<span class="line"><span>  ENV_APP             = &quot;ENV_APP&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var Config = new(MyConfig)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type App struct {</span></span>
<span class="line"><span>  Port int \`yaml:&quot;port&quot;\`</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type DB struct {</span></span>
<span class="line"><span>  Host     string \`yaml:&quot;host&quot;\`</span></span>
<span class="line"><span>  Port     int    \`yaml:&quot;port&quot;\`</span></span>
<span class="line"><span>  User     string \`yaml:&quot;user&quot;\`</span></span>
<span class="line"><span>  Password string \`yaml:&quot;password&quot;\`</span></span>
<span class="line"><span>  DB       string \`yaml:&quot;db&quot;\`</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Mysql struct {</span></span>
<span class="line"><span>  Master *DB   \`yaml:&quot;master&quot;\`</span></span>
<span class="line"><span>  Slaves []*DB \`yaml:&quot;slaves&quot;\`</span></span>
<span class="line"><span>  Base   struct {</span></span>
<span class="line"><span>    Data            int</span></span>
<span class="line"><span>    MaxOpenConn     int \`yaml:&quot;max_open_conn&quot; mapstructure:&quot;max_open_conn&quot;\`</span></span>
<span class="line"><span>    MaxIdleConn     int \`yaml:&quot;max_idle_conn&quot; mapstructure:&quot;max_idle_conn&quot;\`</span></span>
<span class="line"><span>    ConnMaxLifeTime int \`yaml:&quot;conn_max_life_time&quot; mapstructure:&quot;conn_max_life_time&quot;\`</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Email struct {</span></span>
<span class="line"><span>  Host     string \`yaml:&quot;host&quot;\`</span></span>
<span class="line"><span>  Port     string \`yaml:&quot;port&quot;\`</span></span>
<span class="line"><span>  Username string \`yaml:&quot;username&quot;\`</span></span>
<span class="line"><span>  Password string \`yaml:&quot;password&quot;\`</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Redis struct {</span></span>
<span class="line"><span>  Addr         []string \`yaml:&quot;addr&quot;\`</span></span>
<span class="line"><span>  Pass         string   \`yaml:&quot;pass&quot;\`</span></span>
<span class="line"><span>  Db           int      \`yaml:&quot;db&quot;\`</span></span>
<span class="line"><span>  MaxRetries   int      \`yaml:&quot;max_retries&quot; mapstructure:&quot;max_retries&quot;\`</span></span>
<span class="line"><span>  PoolSize     int      \`yaml:&quot;pool_size&quot; mapstructure:&quot;pool_size&quot;\`</span></span>
<span class="line"><span>  MinIdleConns int      \`yaml:&quot;min_idle_conns&quot; mapstructure:&quot;min_idle_conns&quot;\`</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type MyConfig struct {</span></span>
<span class="line"><span>  *App</span></span>
<span class="line"><span>  *Mysql</span></span>
<span class="line"><span>  *Email</span></span>
<span class="line"><span>  *Redis</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Init() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //// 加载配置</span></span>
<span class="line"><span>  //viper.SetConfigFile(&quot;./configs/configs.yaml&quot;)</span></span>
<span class="line"><span>  //</span></span>
<span class="line"><span>  //// 监听配置</span></span>
<span class="line"><span>  //viper.WatchConfig()</span></span>
<span class="line"><span>  //</span></span>
<span class="line"><span>  //// 监听是否更改配置文件</span></span>
<span class="line"><span>  //viper.OnConfigChange(func(e fsnotify.Event) {</span></span>
<span class="line"><span>  //if err := viper.Unmarshal(&amp;Config); err != nil {</span></span>
<span class="line"><span>  //panic(err)</span></span>
<span class="line"><span>  //}</span></span>
<span class="line"><span>  //})</span></span>
<span class="line"><span>  //</span></span>
<span class="line"><span>  //if err := viper.ReadInConfig(); err != nil {</span></span>
<span class="line"><span>  //panic(fmt.Errorf(&quot;ReadInConfig failed, err: %v&quot;, err))</span></span>
<span class="line"><span>  //}</span></span>
<span class="line"><span>  //if err := viper.Unmarshal(&amp;Config); err != nil {</span></span>
<span class="line"><span>  //panic(fmt.Errorf(&quot;unmarshal failed, err: %v&quot;, err))</span></span>
<span class="line"><span>  //}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 获取nacos节点</span></span>
<span class="line"><span>  endpoints, exist := os.LookupEnv(ENV_NACOS_ENDPOINTS)</span></span>
<span class="line"><span>  if !exist {</span></span>
<span class="line"><span>    panic(&quot;ENV_NACOS_ENDPOINTS not exsit&quot;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 获取当前环境</span></span>
<span class="line"><span>  envApp, exist := os.LookupEnv(ENV_APP)</span></span>
<span class="line"><span>  if !exist {</span></span>
<span class="line"><span>    panic(&quot;ENV_APP not exsit&quot;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 初始化Nacos配置</span></span>
<span class="line"><span>  nacosConfig := nacos.NewNacosConfig(endpoints, envApp, &quot;user_config.yaml&quot;, &quot;USER_GROUP&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 获取配置信息</span></span>
<span class="line"><span>  content, err := nacosConfig.GetConfig()</span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    panic(fmt.Errorf(&quot;GetConfig failed, err: %v&quot;, err))</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  viper.SetConfigType(&quot;yaml&quot;)</span></span>
<span class="line"><span>  if err := viper.ReadConfig(bytes.NewBuffer([]byte(content))); err != nil {</span></span>
<span class="line"><span>    panic(fmt.Errorf(&quot;ReadConfig failed, err: %v&quot;, err))</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if err := viper.Unmarshal(&amp;Config); err != nil {</span></span>
<span class="line"><span>    panic(fmt.Errorf(&quot;unmarshal failed, err: %v&quot;, err))</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十、rabbitmq" tabindex="-1"><a class="header-anchor" href="#十、rabbitmq"><span>十、rabbitmq</span></a></h2><h3 id="_10-1、封装" tabindex="-1"><a class="header-anchor" href="#_10-1、封装"><span>10.1、封装</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package rabbitmq</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>  &quot;fmt&quot;</span></span>
<span class="line"><span>  &quot;sync&quot;</span></span>
<span class="line"><span>  &quot;uc/configs&quot;</span></span>
<span class="line"><span>  &quot;uc/internal/logger&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  &quot;github.com/streadway/amqp&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var AMQP = new(AMQPConnectionPool)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type AMQPConnectionPool struct {</span></span>
<span class="line"><span>  mu    sync.Mutex</span></span>
<span class="line"><span>  conns chan *amqp.Connection</span></span>
<span class="line"><span>  options</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>type options struct {</span></span>
<span class="line"><span>  maxOpen     int</span></span>
<span class="line"><span>  maxIdle     int</span></span>
<span class="line"><span>  maxAttempts int</span></span>
<span class="line"><span>  url         string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Init() {</span></span>
<span class="line"><span>  AMQP = NewAMQPConnectionPool(&amp;options{</span></span>
<span class="line"><span>    maxOpen:     configs.Config.RabbitMq.MaxOpen,</span></span>
<span class="line"><span>    maxIdle:     configs.Config.RabbitMq.MaxIdle,</span></span>
<span class="line"><span>    maxAttempts: configs.Config.RabbitMq.MaxAttempts,</span></span>
<span class="line"><span>    url: fmt.Sprintf(&quot;amqp://%s:%s@%s:%d/&quot;,</span></span>
<span class="line"><span>      configs.Config.RabbitMq.Username,</span></span>
<span class="line"><span>      configs.Config.RabbitMq.Password,</span></span>
<span class="line"><span>      configs.Config.RabbitMq.Host,</span></span>
<span class="line"><span>      configs.Config.RabbitMq.Port,</span></span>
<span class="line"><span>    ),</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func NewAMQPConnectionPool(o *options) *AMQPConnectionPool {</span></span>
<span class="line"><span>  return &amp;AMQPConnectionPool{</span></span>
<span class="line"><span>    options: *o,</span></span>
<span class="line"><span>    conns:   make(chan *amqp.Connection, o.maxOpen),</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (p *AMQPConnectionPool) Get() (*amqp.Connection, error) {</span></span>
<span class="line"><span>  var conn *amqp.Connection</span></span>
<span class="line"><span>  var err error</span></span>
<span class="line"><span>  attempts := 0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for attempts &lt; p.maxAttempts {</span></span>
<span class="line"><span>    conn, err = p.GetOne()</span></span>
<span class="line"><span>    if err == nil &amp;&amp; conn != nil {</span></span>
<span class="line"><span>      return conn, nil</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    attempts++</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return nil, fmt.Errorf(&quot;failed to get a valid connection after %d attempts&quot;, p.maxAttempts)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (p *AMQPConnectionPool) GetOne() (*amqp.Connection, error) {</span></span>
<span class="line"><span>  p.mu.Lock()</span></span>
<span class="line"><span>  defer p.mu.Unlock()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  select {</span></span>
<span class="line"><span>    case conn := &lt;-p.conns:</span></span>
<span class="line"><span>    return conn, nil</span></span>
<span class="line"><span>    default:</span></span>
<span class="line"><span>    if len(p.conns) &lt; p.maxOpen {</span></span>
<span class="line"><span>      conn, err := amqp.Dial(p.url)</span></span>
<span class="line"><span>      if err != nil {</span></span>
<span class="line"><span>       return nil, err</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      return conn, nil</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return nil, fmt.Errorf(&quot;no available connections&quot;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (p *AMQPConnectionPool) Put(conn *amqp.Connection) {</span></span>
<span class="line"><span>  p.mu.Lock()</span></span>
<span class="line"><span>  defer p.mu.Unlock()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if len(p.conns) &gt;= p.maxIdle {</span></span>
<span class="line"><span>    conn.Close()</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  p.conns &lt;- conn</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (p *AMQPConnectionPool) DeclareQueue(name string) error {</span></span>
<span class="line"><span>  conn, err := p.Get()</span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    return err</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  defer p.Put(conn)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ch, err := conn.Channel()</span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    return err</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  defer ch.Close()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  _, err = ch.QueueDeclare(name, true, false, false, false, nil)</span></span>
<span class="line"><span>  return err</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (p *AMQPConnectionPool) Publish(exchange, key string, msg []byte) error {</span></span>
<span class="line"><span>  conn, err := p.Get()</span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    return err</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  defer p.Put(conn)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ch, err := conn.Channel()</span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    return err</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  defer ch.Close()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  err = ch.Publish(exchange, key, false, false, amqp.Publishing{</span></span>
<span class="line"><span>    ContentType: &quot;text/plain&quot;,</span></span>
<span class="line"><span>    Body:        msg,</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  return err</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (p *AMQPConnectionPool) Consume(queueName string, handler func(delivery amqp.Delivery)) error {</span></span>
<span class="line"><span>  conn, err := p.Get()</span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    return err</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  defer p.Put(conn)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ch, err := conn.Channel()</span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    return err</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  defer ch.Close()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  msgs, err := ch.Consume(queueName, &quot;&quot;, true, false, false, false, nil)</span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    return err</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for msg := range msgs {</span></span>
<span class="line"><span>    handler(msg)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return nil</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (p *AMQPConnectionPool) Close() {</span></span>
<span class="line"><span>  p.mu.Lock()</span></span>
<span class="line"><span>  defer p.mu.Unlock()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  for len(p.conns) &gt; 0 {</span></span>
<span class="line"><span>    conn := &lt;-p.conns</span></span>
<span class="line"><span>    err := conn.Close()</span></span>
<span class="line"><span>    if err != nil {</span></span>
<span class="line"><span>      logger.Logger.Errorf(&quot;Error closing connection pool: %v&quot;, err)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    fmt.Println(&quot;close&quot;, conn)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-2、使用" tabindex="-1"><a class="header-anchor" href="#_10-2、使用"><span>10.2、使用</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package rabbitmq</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>  &quot;fmt&quot;</span></span>
<span class="line"><span>  &quot;testing&quot;</span></span>
<span class="line"><span>  &quot;time&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var AMQPT = new(AMQPConnectionPool)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func TestNewAMQPConnectionPool(t *testing.T) {</span></span>
<span class="line"><span>  AMQPT = NewAMQPConnectionPool(&amp;options{</span></span>
<span class="line"><span>    maxOpen:     1000,</span></span>
<span class="line"><span>    maxIdle:     500,</span></span>
<span class="line"><span>    maxAttempts: 5,</span></span>
<span class="line"><span>    url: fmt.Sprintf(&quot;amqp://%s:%s@%s:%d/&quot;,</span></span>
<span class="line"><span>      &quot;guest&quot;,</span></span>
<span class="line"><span>      &quot;guest&quot;,</span></span>
<span class="line"><span>      &quot;127.0.0.1&quot;,</span></span>
<span class="line"><span>      5672,</span></span>
<span class="line"><span>    ),</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  start := time.Now()</span></span>
<span class="line"><span>  for i := 0; i &lt; 1000; i++ {</span></span>
<span class="line"><span>    func() {</span></span>
<span class="line"><span>    err := AMQPT.Publish(&quot;&quot;, &quot;test_queue&quot;, []byte(&quot;Hello, World!&quot;))</span></span>
<span class="line"><span>    if err != nil {</span></span>
<span class="line"><span>      fmt.Println(&quot;Failed to publish message:&quot;, err)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>end := time.Now()</span></span>
<span class="line"><span>duration := end.Sub(start)</span></span>
<span class="line"><span>fmt.Println(&quot;执行时间：&quot;, duration)</span></span>
<span class="line"><span>defer AMQPT.Close()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>结尾：差不多就这些吧，开始写业务代码，后续可能需要做 nacos 服务注册发现，后面再补充。</strong></p>`,63),p=[l];function c(d,r){return a(),s("div",null,p)}const u=n(e,[["render",c],["__file","20240518823812376.html.vue"]]),o=JSON.parse('{"path":"/golang/mbit/20240518823812376.html","title":"《Mbit》gin+gorm搭建项目","lang":"zh-CN","frontmatter":{"title":"《Mbit》gin+gorm搭建项目","category":["golang"],"date":"2024-05-18T00:00:00.000Z","star":true,"tag":["golang","gorm","gin","mbit"],"description":"《Mbit》gin+gorm 搭建项目 基础架构搭建，后续服务会以此为标准 一、目录结构 二、Gin Gin 是一个用 Go 语言编写的 Web 框架，它提供了快速、灵活和高性能的方式来构建 Web 应用程序。 2.1、主入口 2.2、初始化 2.3、封装 三、Zap zap 是一种在 Go 语言中广泛使用的高性能、结构化的日志库。 3.1、封装 3....","head":[["meta",{"property":"og:url","content":"https://github.com/youngerhe/blog/golang/mbit/20240518823812376.html"}],["meta",{"property":"og:site_name","content":"木锤"}],["meta",{"property":"og:title","content":"《Mbit》gin+gorm搭建项目"}],["meta",{"property":"og:description","content":"《Mbit》gin+gorm 搭建项目 基础架构搭建，后续服务会以此为标准 一、目录结构 二、Gin Gin 是一个用 Go 语言编写的 Web 框架，它提供了快速、灵活和高性能的方式来构建 Web 应用程序。 2.1、主入口 2.2、初始化 2.3、封装 三、Zap zap 是一种在 Go 语言中广泛使用的高性能、结构化的日志库。 3.1、封装 3...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-24T03:43:57.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:tag","content":"golang"}],["meta",{"property":"article:tag","content":"gorm"}],["meta",{"property":"article:tag","content":"gin"}],["meta",{"property":"article:tag","content":"mbit"}],["meta",{"property":"article:published_time","content":"2024-05-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-24T03:43:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《Mbit》gin+gorm搭建项目\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-24T03:43:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"/about/intro.html\\"}]}"]]},"headers":[{"level":2,"title":"一、目录结构","slug":"一、目录结构","link":"#一、目录结构","children":[]},{"level":2,"title":"二、Gin","slug":"二、gin","link":"#二、gin","children":[{"level":3,"title":"2.1、主入口","slug":"_2-1、主入口","link":"#_2-1、主入口","children":[]},{"level":3,"title":"2.2、初始化","slug":"_2-2、初始化","link":"#_2-2、初始化","children":[]},{"level":3,"title":"2.3、封装","slug":"_2-3、封装","link":"#_2-3、封装","children":[]}]},{"level":2,"title":"三、Zap","slug":"三、zap","link":"#三、zap","children":[{"level":3,"title":"3.1、封装","slug":"_3-1、封装","link":"#_3-1、封装","children":[]},{"level":3,"title":"3.2、使用","slug":"_3-2、使用","link":"#_3-2、使用","children":[]}]},{"level":2,"title":"四、全局状态码","slug":"四、全局状态码","link":"#四、全局状态码","children":[{"level":3,"title":"4.1、封装","slug":"_4-1、封装","link":"#_4-1、封装","children":[]},{"level":3,"title":"4.2、使用","slug":"_4-2、使用","link":"#_4-2、使用","children":[]}]},{"level":2,"title":"五、Viper","slug":"五、viper","link":"#五、viper","children":[{"level":3,"title":"5.1、配置文件","slug":"_5-1、配置文件","link":"#_5-1、配置文件","children":[]},{"level":3,"title":"5.2、封装","slug":"_5-2、封装","link":"#_5-2、封装","children":[]},{"level":3,"title":"5.3、使用","slug":"_5-3、使用","link":"#_5-3、使用","children":[]}]},{"level":2,"title":"六、Mysql+Gorm","slug":"六、mysql-gorm","link":"#六、mysql-gorm","children":[{"level":3,"title":"6.1、封装","slug":"_6-1、封装","link":"#_6-1、封装","children":[]},{"level":3,"title":"6.2、使用","slug":"_6-2、使用","link":"#_6-2、使用","children":[]}]},{"level":2,"title":"七、发送邮件","slug":"七、发送邮件","link":"#七、发送邮件","children":[{"level":3,"title":"7.1、封装","slug":"_7-1、封装","link":"#_7-1、封装","children":[]},{"level":3,"title":"7.2、使用","slug":"_7-2、使用","link":"#_7-2、使用","children":[]}]},{"level":2,"title":"八、redis","slug":"八、redis","link":"#八、redis","children":[{"level":3,"title":"8.1、封装","slug":"_8-1、封装","link":"#_8-1、封装","children":[]},{"level":3,"title":"8.2、使用","slug":"_8-2、使用","link":"#_8-2、使用","children":[]}]},{"level":2,"title":"九、nacos 配置中心","slug":"九、nacos-配置中心","link":"#九、nacos-配置中心","children":[{"level":3,"title":"9.1、封装","slug":"_9-1、封装","link":"#_9-1、封装","children":[]},{"level":3,"title":"9.2、使用","slug":"_9-2、使用","link":"#_9-2、使用","children":[]}]},{"level":2,"title":"十、rabbitmq","slug":"十、rabbitmq","link":"#十、rabbitmq","children":[{"level":3,"title":"10.1、封装","slug":"_10-1、封装","link":"#_10-1、封装","children":[]},{"level":3,"title":"10.2、使用","slug":"_10-2、使用","link":"#_10-2、使用","children":[]}]}],"git":{"createdTime":1724471037000,"updatedTime":1724471037000,"contributors":[{"name":"perkins","email":"mbitchina@163.com","commits":1}]},"readingTime":{"minutes":9.37,"words":2810},"filePathRelative":"golang/mbit/20240518823812376.md","localizedDate":"2024年5月18日","excerpt":"\\n<ul>\\n<li><strong>基础架构搭建，后续服务会以此为标准</strong></li>\\n</ul>\\n<h2>一、目录结构</h2>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>├── api &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // 业务接口</span></span>\\n<span class=\\"line\\"><span>├── cmd &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // 项目主干</span></span>\\n<span class=\\"line\\"><span>├── uc &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  // 项目</span></span>\\n<span class=\\"line\\"><span>├── main.go &nbsp; &nbsp; &nbsp; &nbsp; // 入口文件</span></span>\\n<span class=\\"line\\"><span>├── config &nbsp; &nbsp; &nbsp; &nbsp;  // 配置文件</span></span>\\n<span class=\\"line\\"><span>├── init &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  // 初始化内容</span></span>\\n<span class=\\"line\\"><span>├── internal &nbsp; &nbsp; &nbsp;  // 私有库</span></span>\\n<span class=\\"line\\"><span>├── pkg &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; // 公共库</span></span>\\n<span class=\\"line\\"><span>├── scripts &nbsp; &nbsp; &nbsp;  // 执行脚本</span></span>\\n<span class=\\"line\\"><span>├── test &nbsp; &nbsp; &nbsp; &nbsp;  // 测试文件</span></span>\\n<span class=\\"line\\"><span>├── vendor &nbsp; &nbsp; &nbsp;  // 应用程序依赖项</span></span>\\n<span class=\\"line\\"><span>├── go.mod &nbsp; &nbsp; &nbsp;  // go模块配置文件</span></span>\\n<span class=\\"line\\"><span>└── .gitignore &nbsp; &nbsp;  // git排除项</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{u as comp,o as data};
