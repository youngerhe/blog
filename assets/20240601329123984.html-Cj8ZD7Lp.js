import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,b as e}from"./app-BD7WayJ1.js";const i={},l=e(`<h1 id="《mbit》grpc-gateway-的使用" tabindex="-1"><a class="header-anchor" href="#《mbit》grpc-gateway-的使用"><span>《Mbit》grpc-gateway 的使用</span></a></h1><h2 id="一、安装" tabindex="-1"><a class="header-anchor" href="#一、安装"><span>一、安装</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>$ go get github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway</span></span>
<span class="line"><span>$ go get google.golang.org/protobuf/cmd/protoc-gen-go</span></span>
<span class="line"><span>$ go get google.golang.org/grpc/cmd/protoc-gen-go-grpc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>我的 mac 电脑报 protoc 未找到的问题，所以还执行了一步</strong> <code>brew install protobuf</code></li></ul><h2 id="二、下载依赖" tabindex="-1"><a class="header-anchor" href="#二、下载依赖"><span>二、下载依赖</span></a></h2><ul><li><strong>grpc-gateway 的 v2 版本是没有的，我随便找了个 v1 版本：</strong><a href="https://github.com/grpc-ecosystem/grpc-gateway/blob/v1.14.5/third_party/googleapis/google/api" target="_blank" rel="noopener noreferrer">https://github.com/grpc-ecosystem/grpc-gateway/blob/v1.14.5/third_party/googleapis/google/api</a></li><li><strong>需要用 annotations.proto 来做 http 映射</strong></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 目录结构</span></span>
<span class="line"><span>├──proto</span></span>
<span class="line"><span>│├── google</span></span>
<span class="line"><span>│    ├── api</span></span>
<span class="line"><span>│      ├── annotations.proto</span></span>
<span class="line"><span>│      ├── http.proto</span></span>
<span class="line"><span>│      ├── httpbody.proto</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、创建-proto" tabindex="-1"><a class="header-anchor" href="#三、创建-proto"><span>三、创建 proto</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// /proto/order.proto</span></span>
<span class="line"><span>syntax= &quot;proto3&quot;;</span></span>
<span class="line"><span>option go_package= &quot;.;order&quot;;</span></span>
<span class="line"><span>package order;</span></span>
<span class="line"><span>import &quot;google/api/annotations.proto&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>service Order{</span></span>
<span class="line"><span>  rpc GetOrderInfo(GetOrderReq) returns(GetOrderRsp){</span></span>
<span class="line"><span>    option(google.api.http) = {</span></span>
<span class="line"><span>      post:&quot;/v1/order/get_order&quot;</span></span>
<span class="line"><span>      body: &quot;*&quot;</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message GetOrderReq{</span></span>
<span class="line"><span>  string order_id = 1;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>message GetOrderRsp{</span></span>
<span class="line"><span>  string order_name = 1;</span></span>
<span class="line"><span>  string description = 2;</span></span>
<span class="line"><span>  string order_info = 3;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、生成代码" tabindex="-1"><a class="header-anchor" href="#四、生成代码"><span>四、生成代码</span></a></h2><ul><li><strong>创建 shell 脚本，放在根目录下</strong></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 定义包含多个.proto文件名的数组 空格隔开</span></span>
<span class="line"><span>proto_files=(&quot;./proto/order.proto&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 遍历数组中的每个文件名</span></span>
<span class="line"><span>for proto_file in &quot;\${proto_files[@]}&quot;; do</span></span>
<span class="line"><span>    # 检查文件是否存在</span></span>
<span class="line"><span>    if [ ! -f &quot;$proto_file&quot; ]; then</span></span>
<span class="line"><span>        echo &quot;Error: File &#39;$proto_file&#39; does not exist.&quot;</span></span>
<span class="line"><span>        continue</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 运行protoc命令</span></span>
<span class="line"><span>    protoc -I ./proto \\</span></span>
<span class="line"><span>        --go_out=paths=source_relative:./internal/protoc \\</span></span>
<span class="line"><span>        --go_opt=paths=source_relative \\</span></span>
<span class="line"><span>        --go-grpc_out=paths=source_relative:./internal/protoc \\</span></span>
<span class="line"><span>        --go-grpc_opt=paths=source_relative \\</span></span>
<span class="line"><span>        --grpc-gateway_out=paths=source_relative:./internal/protoc \\</span></span>
<span class="line"><span>        --grpc-gateway_opt=paths=source_relative \\</span></span>
<span class="line"><span>        &quot;$proto_file&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # 检查命令执行是否成功</span></span>
<span class="line"><span>    if [ $? -ne 0 ]; then</span></span>
<span class="line"><span>        echo &quot;Failed to generate code for $proto_file&quot;</span></span>
<span class="line"><span>        exit 1</span></span>
<span class="line"><span>    fi</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    echo &quot;Successfully generated code for $proto_file&quot;</span></span>
<span class="line"><span>done</span></span>
<span class="line"><span></span></span>
<span class="line"><span>echo &quot;All proto files processed successfully.&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、使用" tabindex="-1"><a class="header-anchor" href="#五、使用"><span>五、使用</span></a></h2><ul><li><strong>这里演示的是 grpc-gateway 提供的 http 与 grpc 的内部转化功能</strong></li><li><strong>如果是 http 服务想做成 grpc 服务，这个工具很不错，可以提供兼容方案。</strong></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// grpc服务 /server/server.go</span></span>
<span class="line"><span>package server</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>  &quot;context&quot;</span></span>
<span class="line"><span>  &quot;gateway/internal/protoc&quot;</span></span>
<span class="line"><span>  &quot;github.com/grpc-ecosystem/grpc-gateway/v2/runtime&quot;</span></span>
<span class="line"><span>  &quot;google.golang.org/grpc&quot;</span></span>
<span class="line"><span>  &quot;google.golang.org/grpc/credentials/insecure&quot;</span></span>
<span class="line"><span>  &quot;log&quot;</span></span>
<span class="line"><span>  &quot;net&quot;</span></span>
<span class="line"><span>  &quot;net/http&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type server struct {</span></span>
<span class="line"><span>  order.UnimplementedOrderServer</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (s *server) GetOrderInfo(ctx context.Context, req *order.GetOrderReq) (*order.GetOrderRsp, error) {</span></span>
<span class="line"><span>  log.Println(&quot;req=&quot;, req)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return &amp;order.GetOrderRsp{</span></span>
<span class="line"><span>    OrderName:   &quot;test name&quot;,</span></span>
<span class="line"><span>    OrderInfo:   &quot;test info&quot;,</span></span>
<span class="line"><span>    Description: &quot;test description&quot;,</span></span>
<span class="line"><span>  }, nil</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func RunGrpcSvr() {</span></span>
<span class="line"><span>  lis, err := net.Listen(&quot;tcp&quot;, &quot;8001&quot;)</span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    log.Fatalf(&quot;failed to listen:%v&quot;, err)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  s := grpc.NewServer()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  order.RegisterOrderServer(s, &amp;server{})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  log.Println(&quot;server start :8001&quot;)</span></span>
<span class="line"><span>  s.Serve(lis)</span></span>
<span class="line"><span>  return</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// http服务 /server/server.go</span></span>
<span class="line"><span>func RunGrpcGw() {</span></span>
<span class="line"><span>  // 调用上面启动的grpc服务</span></span>
<span class="line"><span>  conn, err := grpc.NewClient(&quot;8001&quot;, grpc.WithTransportCredentials(insecure.NewCredentials()))</span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    log.Fatalln(&quot;Failed to dial server&quot;, err)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  defer conn.Close()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  gwmux := runtime.NewServeMux()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  err = order.RegisterOrderHandler(context.Background(), gwmux, conn)</span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    log.Fatalln(&quot;Failed to register gateway&quot;, err)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // HTTP 中间件用于权限校验</span></span>
<span class="line"><span>  authMiddleware := func(next http.Handler) http.Handler {</span></span>
<span class="line"><span>    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // 在这里实现权限校验逻辑</span></span>
<span class="line"><span>      token := r.Header.Get(&quot;Authorization&quot;)</span></span>
<span class="line"><span>      if token != &quot;1&quot; {</span></span>
<span class="line"><span>        http.Error(w, &quot;Unauthorized&quot;, http.StatusUnauthorized)</span></span>
<span class="line"><span>        return</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      // 校验通过，调用下一个中间件或处理器</span></span>
<span class="line"><span>      next.ServeHTTP(w, r)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  gwServer := &amp;http.Server{</span></span>
<span class="line"><span>    Addr:    8080,</span></span>
<span class="line"><span>    Handler: authMiddleware(gwmux),</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  log.Println(&quot;serving start :8080&quot;)</span></span>
<span class="line"><span>  if err = gwServer.ListenAndServe(); err != nil {</span></span>
<span class="line"><span>    log.Fatalln(&quot;http.Listen err&quot;, err)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// main.go</span></span>
<span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;gateway/server&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>  go server.RunGrpcSvr()</span></span>
<span class="line"><span>  server.RunGrpcGw()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>//curl 请求</span></span>
<span class="line"><span>curl --location --request POST &#39;http://localhost:8080/v1/order/get_order&#39; \\</span></span>
<span class="line"><span>--header &#39;Authorization: 1&#39; \\</span></span>
<span class="line"><span>--header &#39;User-Agent: Apifox/1.0.0 (https://apifox.com)&#39; \\</span></span>
<span class="line"><span>--header &#39;Content-Type: application/json&#39; \\</span></span>
<span class="line"><span>--header &#39;Accept: */*&#39; \\</span></span>
<span class="line"><span>--header &#39;Host: localhost:8080&#39; \\</span></span>
<span class="line"><span>--header &#39;Connection: keep-alive&#39; \\</span></span>
<span class="line"><span>--data-raw &#39;{</span></span>
<span class="line"><span>    &quot;order_id&quot;: &quot;222&quot;</span></span>
<span class="line"><span>}&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),p=[l];function r(t,c){return a(),n("div",null,p)}const v=s(i,[["render",r],["__file","20240601329123984.html.vue"]]),u=JSON.parse('{"path":"/golang/mbit/20240601329123984.html","title":"《Mbit》grpc-gateway的使用","lang":"zh-CN","frontmatter":{"title":"《Mbit》grpc-gateway的使用","category":["golang"],"date":"2024-06-01T00:00:00.000Z","tag":["golang","grpc","gateway","网关"],"description":"《Mbit》grpc-gateway 的使用 一、安装 我的 mac 电脑报 protoc 未找到的问题，所以还执行了一步 brew install protobuf 二、下载依赖 grpc-gateway 的 v2 版本是没有的，我随便找了个 v1 版本：https://github.com/grpc-ecosystem/grpc-gateway/b...","head":[["meta",{"property":"og:url","content":"https://github.com/youngerhe/blog/golang/mbit/20240601329123984.html"}],["meta",{"property":"og:site_name","content":"木锤"}],["meta",{"property":"og:title","content":"《Mbit》grpc-gateway的使用"}],["meta",{"property":"og:description","content":"《Mbit》grpc-gateway 的使用 一、安装 我的 mac 电脑报 protoc 未找到的问题，所以还执行了一步 brew install protobuf 二、下载依赖 grpc-gateway 的 v2 版本是没有的，我随便找了个 v1 版本：https://github.com/grpc-ecosystem/grpc-gateway/b..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-24T03:43:57.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:tag","content":"golang"}],["meta",{"property":"article:tag","content":"grpc"}],["meta",{"property":"article:tag","content":"gateway"}],["meta",{"property":"article:tag","content":"网关"}],["meta",{"property":"article:published_time","content":"2024-06-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-24T03:43:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《Mbit》grpc-gateway的使用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-06-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-24T03:43:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"/about/intro.html\\"}]}"]]},"headers":[{"level":2,"title":"一、安装","slug":"一、安装","link":"#一、安装","children":[]},{"level":2,"title":"二、下载依赖","slug":"二、下载依赖","link":"#二、下载依赖","children":[]},{"level":2,"title":"三、创建 proto","slug":"三、创建-proto","link":"#三、创建-proto","children":[]},{"level":2,"title":"四、生成代码","slug":"四、生成代码","link":"#四、生成代码","children":[]},{"level":2,"title":"五、使用","slug":"五、使用","link":"#五、使用","children":[]}],"git":{"createdTime":1724471037000,"updatedTime":1724471037000,"contributors":[{"name":"perkins","email":"mbitchina@163.com","commits":1}]},"readingTime":{"minutes":2.08,"words":625},"filePathRelative":"golang/mbit/20240601329123984.md","localizedDate":"2024年6月1日","excerpt":"\\n<h2>一、安装</h2>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" data-title=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span>$ go get github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway</span></span>\\n<span class=\\"line\\"><span>$ go get google.golang.org/protobuf/cmd/protoc-gen-go</span></span>\\n<span class=\\"line\\"><span>$ go get google.golang.org/grpc/cmd/protoc-gen-go-grpc</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{v as comp,u as data};
