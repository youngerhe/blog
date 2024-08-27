import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as s,b as n}from"./app-CuZ5CmZm.js";const i={},l=n(`<h2 id="一、内网穿透是什么" tabindex="-1"><a class="header-anchor" href="#一、内网穿透是什么"><span>一、内网穿透是什么？</span></a></h2><p>内网穿透，顾名思义，就是将内网中的资源穿透到公网中，使得公网中的用户可以访问到内网中的资源。内网穿透通常用于以下场景：</p><ul><li>远程访问内网中的设备或服务，例如远程桌面、远程文件共享等。</li><li>在内网中搭建服务器，供公网中的用户访问。</li><li>在内网中搭建 VPN，实现公网用户与内网用户的通信。</li></ul><h2 id="二、frp-是什么" tabindex="-1"><a class="header-anchor" href="#二、frp-是什么"><span>二、FRP 是什么？</span></a></h2><p>FRP（Fast Reverse Proxy）是一款高性能的内网穿透工具，它支持 TCP、UDP、HTTP、HTTPS 等协议，可以实现内网穿透、反向代理等功能。FRP 具有以下特点：</p><ul><li>高性能：FRP 采用 Go 语言编写，性能优异，支持高并发连接。</li><li>简单易用：FRP 的配置文件简单易懂，易于上手。</li><li>安全性高：FRP 支持 TLS 加密、SSH 隧道等安全特性，确保数据传输的安全性。</li><li>支持多种协议：FRP 支持 TCP、UDP、HTTP、HTTPS 等协议，可以满足各种场景的需求。</li></ul><h2 id="三、frp-的使用方法" tabindex="-1"><a class="header-anchor" href="#三、frp-的使用方法"><span>三、FRP 的使用方法</span></a></h2><p>注：首先得有一台外网 ip 的机器作为服务端 FRP 的使用方法非常简单，只需要按照以下步骤进行配置即可：</p><h3 id="_1-下载" tabindex="-1"><a class="header-anchor" href="#_1-下载"><span>1.下载</span></a></h3><p>下载 FRP 客户端和服务器端，可以从 FRP 的 GitHub 仓库中(<code>https://github.com/fatedier/frp/releases</code>)下载最新版本的 FRP，例如：我的本地电脑是 <code>mac m1</code>，服务端电脑是 <code>linux</code>，对应包的选择就是 <code>frp_0.59.0_android_arm64.tar.gz</code>、<code>frp_0.59.0_linux_amd64.tar.gz</code>。</p><h3 id="_2-配置-frp-服务端" tabindex="-1"><a class="header-anchor" href="#_2-配置-frp-服务端"><span>2. 配置 FRP 服务端</span></a></h3><h4 id="下载、解压" tabindex="-1"><a class="header-anchor" href="#下载、解压"><span>下载、解压</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>wget https://github.com/fatedier/frp/releases/download/v0.59.0/frp_0.59.0_linux_amd64.tar.gz</span></span>
<span class="line"><span>tar -zxvf frp_0.59.0_linux_amd64.tar.gz</span></span>
<span class="line"><span>cp -rf frp_0.59.0_linux_amd64 frp</span></span>
<span class="line"><span>cd frp</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="编辑配置文件" tabindex="-1"><a class="header-anchor" href="#编辑配置文件"><span>编辑配置文件</span></a></h4><p><code>vi frps.toml</code></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>bindPort = 7400 # 服务端与客户端通信端口</span></span>
<span class="line"><span>auth.token = &quot;xxxxxxxx&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Server Dashboard，可以查看frp服务状态以及统计信息</span></span>
<span class="line"><span>webServer.addr = &quot;0.0.0.0&quot; # 后台管理地址</span></span>
<span class="line"><span>webServer.port = 7500 # 后台管理端口</span></span>
<span class="line"><span>webServer.user = &quot;xxx&quot; # 后台登录用户名</span></span>
<span class="line"><span>webServer.password = &quot;xxx&quot; # 后台登录密码</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>./frps -c frps.toml</code> 启动服务端</p><h3 id="_3-配置-frp-客户端" tabindex="-1"><a class="header-anchor" href="#_3-配置-frp-客户端"><span>3. 配置 FRP 客户端：</span></a></h3><h4 id="下载、解压-1" tabindex="-1"><a class="header-anchor" href="#下载、解压-1"><span>下载、解压</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>wget https://github.com/fatedier/frp/releases/download/v0.59.0/frp_0.59.0_darwin_amd64.tar.gz</span></span>
<span class="line"><span>tar -zxvf frp_0.59.0_darwin_amd64.tar.gz</span></span>
<span class="line"><span>cp -rf frp_0.59.0_darwin_amd64 frp</span></span>
<span class="line"><span>cd frp</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="编辑配置文件-1" tabindex="-1"><a class="header-anchor" href="#编辑配置文件-1"><span>编辑配置文件</span></a></h4><p><code>vi frpc.toml</code></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>serverAddr = &quot;123.57.238.43&quot;</span></span>
<span class="line"><span>serverPort = 7400 # 公网服务端通信端口</span></span>
<span class="line"><span>auth.token = &quot;&gt;/nT{ak44?I[V1x=&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[proxies]]</span></span>
<span class="line"><span>name = &quot;test-http&quot;</span></span>
<span class="line"><span>type = &quot;tcp&quot;</span></span>
<span class="line"><span>localIP = &quot;127.0.0.1&quot; # 需要暴露的服务的IP</span></span>
<span class="line"><span>localPort = 8080 # 将本地8080端口的服务暴露在公网的7300端口</span></span>
<span class="line"><span>remotePort = 7300 # 暴露服务的公网入口</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code>./frpc -c frpc.toml</code> 启动客户端。</p><h3 id="_4-访问" tabindex="-1"><a class="header-anchor" href="#_4-访问"><span>4. 访问</span></a></h3><p>浏览器输入：<code>http://123.57.238.43:7300</code> 即可访问本地服务器的 8080 端口服务。</p><h3 id="_5、注意事项" tabindex="-1"><a class="header-anchor" href="#_5、注意事项"><span>5、注意事项</span></a></h3><ul><li>阿里云必须开放对应的端口安全组，否则无法访问。</li><li>如果 linux 上有防火墙，需要开放对应的端口。</li></ul>`,28),t=[l];function r(p,d){return s(),a("div",null,t)}const h=e(i,[["render",r],["__file","20240815098238482.html.vue"]]),u=JSON.parse('{"path":"/other/20240815098238482.html","title":"FRP内网穿透","lang":"zh-CN","frontmatter":{"title":"FRP内网穿透","category":["杂七杂八"],"date":"2024-08-15T00:00:00.000Z","star":true,"tag":["内网穿透","frp"],"description":"一、内网穿透是什么？ 内网穿透，顾名思义，就是将内网中的资源穿透到公网中，使得公网中的用户可以访问到内网中的资源。内网穿透通常用于以下场景： 远程访问内网中的设备或服务，例如远程桌面、远程文件共享等。 在内网中搭建服务器，供公网中的用户访问。 在内网中搭建 VPN，实现公网用户与内网用户的通信。 二、FRP 是什么？ FRP（Fast Reverse ...","head":[["meta",{"property":"og:url","content":"https://github.com/youngerhe/blog/other/20240815098238482.html"}],["meta",{"property":"og:site_name","content":"木锤"}],["meta",{"property":"og:title","content":"FRP内网穿透"}],["meta",{"property":"og:description","content":"一、内网穿透是什么？ 内网穿透，顾名思义，就是将内网中的资源穿透到公网中，使得公网中的用户可以访问到内网中的资源。内网穿透通常用于以下场景： 远程访问内网中的设备或服务，例如远程桌面、远程文件共享等。 在内网中搭建服务器，供公网中的用户访问。 在内网中搭建 VPN，实现公网用户与内网用户的通信。 二、FRP 是什么？ FRP（Fast Reverse ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-24T03:43:57.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:tag","content":"内网穿透"}],["meta",{"property":"article:tag","content":"frp"}],["meta",{"property":"article:published_time","content":"2024-08-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-24T03:43:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"FRP内网穿透\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-24T03:43:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"/about/intro.html\\"}]}"]]},"headers":[{"level":2,"title":"一、内网穿透是什么？","slug":"一、内网穿透是什么","link":"#一、内网穿透是什么","children":[]},{"level":2,"title":"二、FRP 是什么？","slug":"二、frp-是什么","link":"#二、frp-是什么","children":[]},{"level":2,"title":"三、FRP 的使用方法","slug":"三、frp-的使用方法","link":"#三、frp-的使用方法","children":[{"level":3,"title":"1.下载","slug":"_1-下载","link":"#_1-下载","children":[]},{"level":3,"title":"2. 配置 FRP 服务端","slug":"_2-配置-frp-服务端","link":"#_2-配置-frp-服务端","children":[]},{"level":3,"title":"3. 配置 FRP 客户端：","slug":"_3-配置-frp-客户端","link":"#_3-配置-frp-客户端","children":[]},{"level":3,"title":"4. 访问","slug":"_4-访问","link":"#_4-访问","children":[]},{"level":3,"title":"5、注意事项","slug":"_5、注意事项","link":"#_5、注意事项","children":[]}]}],"git":{"createdTime":1724471037000,"updatedTime":1724471037000,"contributors":[{"name":"perkins","email":"mbitchina@163.com","commits":1}]},"readingTime":{"minutes":2.31,"words":692},"filePathRelative":"other/20240815098238482.md","localizedDate":"2024年8月15日","excerpt":"<h2>一、内网穿透是什么？</h2>\\n<p>内网穿透，顾名思义，就是将内网中的资源穿透到公网中，使得公网中的用户可以访问到内网中的资源。内网穿透通常用于以下场景：</p>\\n<ul>\\n<li>远程访问内网中的设备或服务，例如远程桌面、远程文件共享等。</li>\\n<li>在内网中搭建服务器，供公网中的用户访问。</li>\\n<li>在内网中搭建 VPN，实现公网用户与内网用户的通信。</li>\\n</ul>\\n<h2>二、FRP 是什么？</h2>\\n<p>FRP（Fast Reverse Proxy）是一款高性能的内网穿透工具，它支持 TCP、UDP、HTTP、HTTPS 等协议，可以实现内网穿透、反向代理等功能。FRP 具有以下特点：</p>","autoDesc":true}');export{h as comp,u as data};