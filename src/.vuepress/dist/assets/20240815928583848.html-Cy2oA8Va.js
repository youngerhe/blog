import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,b as l}from"./app-CtbYvwav.js";const t={},n=l(`<h2 id="systemctl" tabindex="-1"><a class="header-anchor" href="#systemctl"><span>systemctl</span></a></h2><h3 id="systemctl-常用命令" tabindex="-1"><a class="header-anchor" href="#systemctl-常用命令"><span>systemctl 常用命令</span></a></h3><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 启动服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> start</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 服务名</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 停止服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> stop</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 服务名</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 重启服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> restart</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 服务名</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 服务状态</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> status</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 服务名</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 开机自启</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> enable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 服务名</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 取消开机自启</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> disable</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 服务名</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看所有服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list-unit-files</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --type=service</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看所有运行服务</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> list-units</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --type=service</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --state=running</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 重新加载配置文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看服务是否开机自启</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> is-enabled</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 服务名</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看服务是否正在运行</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> is-active</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 服务名</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看服务信息</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> show</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 服务名</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 查看服务PID</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">systemctl</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> show</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> MainPID</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 服务名</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),e=[n];function h(k,p){return a(),i("div",null,e)}const c=s(t,[["render",h],["__file","20240815928583848.html.vue"]]),y=JSON.parse('{"path":"/other/20240815928583848.html","title":"systemctl的使用","lang":"zh-CN","frontmatter":{"title":"systemctl的使用","date":"2024-08-15T00:00:00.000Z","description":"systemctl systemctl 常用命令","head":[["meta",{"property":"og:url","content":"https://github.com/youngerhe/other/20240815928583848.html"}],["meta",{"property":"og:site_name","content":"木锤"}],["meta",{"property":"og:title","content":"systemctl的使用"}],["meta",{"property":"og:description","content":"systemctl systemctl 常用命令"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-24T03:43:57.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:published_time","content":"2024-08-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-24T03:43:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"systemctl的使用\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-24T03:43:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"/about/intro.html\\"}]}"]]},"headers":[{"level":2,"title":"systemctl","slug":"systemctl","link":"#systemctl","children":[{"level":3,"title":"systemctl 常用命令","slug":"systemctl-常用命令","link":"#systemctl-常用命令","children":[]}]}],"git":{"createdTime":1724471037000,"updatedTime":1724471037000,"contributors":[{"name":"perkins","email":"mbitchina@163.com","commits":1}]},"readingTime":{"minutes":0.55,"words":165},"filePathRelative":"other/20240815928583848.md","localizedDate":"2024年8月15日","excerpt":"<h2>systemctl</h2>\\n<h3>systemctl 常用命令</h3>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 启动服务</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">systemctl</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> start</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 服务名</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 停止服务</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">systemctl</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> stop</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 服务名</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 重启服务</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">systemctl</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> restart</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 服务名</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 服务状态</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">systemctl</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> status</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 服务名</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 开机自启</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">systemctl</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> enable</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 服务名</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 取消开机自启</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">systemctl</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> disable</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 服务名</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 查看所有服务</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">systemctl</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> list-unit-files</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --type=service</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 查看所有运行服务</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">systemctl</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> list-units</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --type=service</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> --state=running</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 重新加载配置文件</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">systemctl</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> daemon-reload</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 查看服务是否开机自启</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">systemctl</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> is-enabled</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 服务名</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 查看服务是否正在运行</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">systemctl</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> is-active</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 服务名</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 查看服务信息</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">systemctl</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> show</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 服务名</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic\\"># 查看服务PID</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">systemctl</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> show</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -p</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> MainPID</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> 服务名</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{c as comp,y as data};
