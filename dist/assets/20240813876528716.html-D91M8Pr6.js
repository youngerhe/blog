import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as i,b as a}from"./app-CtbYvwav.js";const l={},p=a(`<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><ul><li>使用 H5+webrtc 实现视频通信</li><li>使用 golang 作为信令服务（信令服务的本质就是转发两个本地客户端的握手信息，让他俩可以建立 p2p 通信）</li></ul><h2 id="一、前端代码" tabindex="-1"><a class="header-anchor" href="#一、前端代码"><span>一、前端代码</span></a></h2><ul><li>前端需要实现内容：</li></ul><ol><li>获取摄像头权限，获取摄像头流数据</li><li>A 发起 offer 请求，B 接收 offer 请求并发送 answer 答复</li><li>A 接受 answer 答复，发送 candidate 请求，B 接收 candidate 请求</li><li>AB 监听流传输并赋值至 video</li></ol><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;!</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">DOCTYPE</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">html</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> lang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;en&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">meta</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> charset</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;UTF-8&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">meta</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">      name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;viewport&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">      content</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">meta</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">      http-equiv</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;X-UA-Compatible&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">      content</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;ie=edge&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    /&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;Document&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">label</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;room&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;房间号：&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">label</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">input</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">        type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;text&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">        id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;room&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">label</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;user&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;用户名：&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">label</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">input</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">        type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;text&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">        id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;user&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      /&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">button</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> onclick</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Join</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">()</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;加入房间&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">button</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> onclick</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Exit</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">()</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;退出房间&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">button</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">video</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">      id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;localVideo&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">      autoplay</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">      width</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;1%&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">      height</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;auto&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">video</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">video</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">      id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;remoteVideo&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">      autoplay</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">      width</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;1%&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">      height</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;auto&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">video</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">      // turn服务器在下一章会介绍，如果没有turn服务器，需要干掉这个配置，直接置空就行。</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> configuration</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        iceServers</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            urls</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;turn:xxx.xxx.xxx:3478&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            username</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;admin&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            credential</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;123456&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      };</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> pc</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> RTCPeerConnection</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">configuration</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> room</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> offerSdp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> ws</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> WebSocket</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;ws://localhost:8070/ws&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> localStream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">      ws</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">addEventListener</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;message&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">        console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">data</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;ping&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">          console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;发送pong&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">          ws</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">send</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">JSON</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">stringify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;pong&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">          return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> data</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> JSON</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">parse</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">event</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">event</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;join&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">          console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;获取到join&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">          if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">count</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> &gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">            console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;触发sendOffer&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">            sendOffer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">        // 接收offer，发送answer</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">event</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;offer_sdp&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">          console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;触发offer_sdp&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">          offerSdp</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">          sendAnswer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">event</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;answer_sdp&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">          console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;触发answer_sdp&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">          pc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setRemoteDescription</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">event</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;candidate&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">          console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;触发candidate&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">          pc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">addIceCandidate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">event</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;exit_room&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">          pc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">close</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">          console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;对方已经退出房间，触发退出通话&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      });</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      async</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Join</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        room</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getElementById</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;room&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">room</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">          alert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;请输入房间号&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">          return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        user</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getElementById</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;user&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">user</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">          alert</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;请输入用户名&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">          return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">        localStream</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> await</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> navigator</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">mediaDevices</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getUserMedia</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          video</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">          audio</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> true</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        });</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> video</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getElementById</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;localVideo&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">        video</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">srcObject</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> localStream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">        console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;发送加入房间&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">        ws</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">send</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">          JSON</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">stringify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            event</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;join&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">              user_id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> user</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">              room_id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> room</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        );</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> Exit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">        pc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">close</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">        ws</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">send</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">          JSON</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">stringify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">            event</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;exit&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        );</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">      // 远程流</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">      pc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">onaddstream</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">        console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">stream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">        document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getElementById</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;remoteVideo&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">srcObject</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">stream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">      // 候选者</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">      pc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">onicecandidate</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">candidate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">          console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;candidate&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">JSON</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">stringify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">candidate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">          ws</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">send</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">            JSON</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">stringify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">              event</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;candidate&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">              data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">                room_id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> room</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">                value</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> e</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">candidate</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">              },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          );</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      };</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> sendOffer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">        localStream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getTracks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">forEach</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">track</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">          pc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">addTrack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">track</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">localStream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">        pc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">createOffer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">then</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">offer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">          console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;offer&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">JSON</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">stringify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">offer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">sdp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">          ws</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">send</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">            JSON</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">stringify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">              event</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;offer_sdp&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">              data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">                room_id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> room</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">                value</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> offer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">              },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          );</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">          pc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setLocalDescription</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">offer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        });</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> sendAnswer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">        localStream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getTracks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">forEach</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">track</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">          pc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">addTrack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">track</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">localStream</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        });</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">        pc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setRemoteDescription</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">offerSdp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">        pc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">createAnswer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">then</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">answer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">          pc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">setLocalDescription</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">answer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">          ws</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">send</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">            JSON</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">stringify</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">              event</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;answer_sdp&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">              data</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">                room_id</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> room</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">                value</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> answer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">              },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          );</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        });</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、服务端代码" tabindex="-1"><a class="header-anchor" href="#二、服务端代码"><span>二、服务端代码</span></a></h2><p>服务端需要实现：</p><ol><li>建立 ws，记录当前客户端链接信息</li><li>接收客户端信息，并转发给另一个客户端</li><li>如果有房间概念，需要建立房间，并只针对该房间客户端做信息转发</li></ol><p><strong>我这里写的多了点，主要是为了应对后续需求</strong> // server.go，ws 服务</p><div class="language-golang line-numbers-mode" data-highlighter="shiki" data-ext="golang" data-title="golang" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>package ws</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &quot;sync&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Server wsServer</span></span>
<span class="line"><span>type Server struct {</span></span>
<span class="line"><span>	Hubs   map[string]*Hub</span></span>
<span class="line"><span>	rwLock sync.RWMutex</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var MyServer *Server</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Init 初始化ws</span></span>
<span class="line"><span>func Init() *Server {</span></span>
<span class="line"><span>	MyServer = NewServer()</span></span>
<span class="line"><span>	return MyServer</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func NewServer() *Server {</span></span>
<span class="line"><span>	return &amp;Server{</span></span>
<span class="line"><span>		Hubs: make(map[string]*Hub),</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (s *Server) Start() {</span></span>
<span class="line"><span>	hub := NewHub()</span></span>
<span class="line"><span>	s.rwLock.RLock()</span></span>
<span class="line"><span>	s.Hubs[&quot;register&quot;] = hub</span></span>
<span class="line"><span>	s.rwLock.RUnlock()</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>// hub.go，维护不同的房间，可以生成多个通话频道</p><div class="language-golang line-numbers-mode" data-highlighter="shiki" data-ext="golang" data-title="golang" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package ws</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;call/internal/types&quot;</span></span>
<span class="line"><span>	&quot;encoding/json&quot;</span></span>
<span class="line"><span>	&quot;fmt&quot;</span></span>
<span class="line"><span>	&quot;log&quot;</span></span>
<span class="line"><span>	&quot;sync&quot;</span></span>
<span class="line"><span>	&quot;time&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Hub struct {</span></span>
<span class="line"><span>	// 注册到Hub的客户端</span></span>
<span class="line"><span>	clients map[*Client]bool</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 用于在多个goroutine间同步</span></span>
<span class="line"><span>	mu sync.RWMutex</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 广播消息到所有连接的客户端</span></span>
<span class="line"><span>	broadcast chan []byte</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 注册和注销的通道</span></span>
<span class="line"><span>	register   chan *Client</span></span>
<span class="line"><span>	unregister chan *Client</span></span>
<span class="line"><span>	master     string</span></span>
<span class="line"><span>	viewer     string</span></span>
<span class="line"><span>	id         string</span></span>
<span class="line"><span>	closeCh    chan struct{}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func NewHub() *Hub {</span></span>
<span class="line"><span>	return &amp;Hub{</span></span>
<span class="line"><span>		clients:    make(map[*Client]bool),</span></span>
<span class="line"><span>		broadcast:  make(chan []byte),</span></span>
<span class="line"><span>		register:   make(chan *Client),</span></span>
<span class="line"><span>		unregister: make(chan *Client),</span></span>
<span class="line"><span>		closeCh:    make(chan struct{}),</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Run 启动这个hub的注册退出程序</span></span>
<span class="line"><span>func (h *Hub) Run() {</span></span>
<span class="line"><span>	ticker := time.NewTicker(2 * time.Second)</span></span>
<span class="line"><span>	for {</span></span>
<span class="line"><span>		select {</span></span>
<span class="line"><span>		case &lt;-ticker.C:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			log.Print(&quot;协程&quot;, h.id)</span></span>
<span class="line"><span>			// 执行不到这就被关闭了，不写还不行。。</span></span>
<span class="line"><span>		case &lt;-h.closeCh:</span></span>
<span class="line"><span>			h.clean()</span></span>
<span class="line"><span>			log.Print(&quot;关闭协程&quot;, h.id)</span></span>
<span class="line"><span>			return</span></span>
<span class="line"><span>		case client := &lt;-h.register:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			h.mu.RLock()</span></span>
<span class="line"><span>			h.clients[client] = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			msg := &amp;types.JoinResp{</span></span>
<span class="line"><span>				Event: &quot;join&quot;,</span></span>
<span class="line"><span>				Data: types.JoinRespData{</span></span>
<span class="line"><span>					Count:  len(h.clients),</span></span>
<span class="line"><span>					Master: h.master,</span></span>
<span class="line"><span>					Viewer: h.viewer,</span></span>
<span class="line"><span>				},</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			msgByte, err := json.Marshal(msg)</span></span>
<span class="line"><span>			if err != nil {</span></span>
<span class="line"><span>				// TODO 记录日志</span></span>
<span class="line"><span>				continue</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			for c := range h.clients {</span></span>
<span class="line"><span>				if client != c {</span></span>
<span class="line"><span>					c.Send &lt;- msgByte</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			h.mu.RUnlock()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		case client := &lt;-h.unregister:</span></span>
<span class="line"><span>			h.mu.RLock()</span></span>
<span class="line"><span>			if _, ok := h.clients[client]; ok {</span></span>
<span class="line"><span>				client.RoomId = &quot;&quot;</span></span>
<span class="line"><span>				delete(h.clients, client)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>				// 如果房间还有人通知他下线</span></span>
<span class="line"><span>				if len(h.clients) &gt; 0 {</span></span>
<span class="line"><span>					msg := &amp;types.JoinResp{</span></span>
<span class="line"><span>						Event: &quot;exit_room&quot;,</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>					msgByte, _ := json.Marshal(msg)</span></span>
<span class="line"><span>					for c := range h.clients {</span></span>
<span class="line"><span>						c.Send &lt;- msgByte</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>				} else {</span></span>
<span class="line"><span>					//无人，关闭这个房间</span></span>
<span class="line"><span>					MyServer.Hubs[h.id].Close()</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			h.mu.RUnlock()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		case message := &lt;-h.broadcast:</span></span>
<span class="line"><span>			fmt.Println(&quot;广播消息&quot;)</span></span>
<span class="line"><span>			h.mu.RLock()</span></span>
<span class="line"><span>			for client := range h.clients {</span></span>
<span class="line"><span>				select {</span></span>
<span class="line"><span>				case client.Send &lt;- message:</span></span>
<span class="line"><span>				default:</span></span>
<span class="line"><span>					delete(h.clients, client)</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			h.mu.RUnlock()</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (h *Hub) SendJoinMsg() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	msg := &amp;types.JoinResp{</span></span>
<span class="line"><span>		Event: &quot;join&quot;,</span></span>
<span class="line"><span>		Data: types.JoinRespData{</span></span>
<span class="line"><span>			Count:  len(h.clients),</span></span>
<span class="line"><span>			Master: h.master,</span></span>
<span class="line"><span>			Viewer: h.viewer,</span></span>
<span class="line"><span>		},</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	msgByte, err := json.Marshal(msg)</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		// TODO 记录日志</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	h.mu.RLock()</span></span>
<span class="line"><span>	h.broadcast &lt;- msgByte</span></span>
<span class="line"><span>	h.mu.RUnlock()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (h *Hub) Close() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	//关闭资源</span></span>
<span class="line"><span>	if _, ok := MyServer.Hubs[h.id]; ok {</span></span>
<span class="line"><span>		delete(MyServer.Hubs, h.id)</span></span>
<span class="line"><span>		h.closeCh &lt;- struct{}{}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (h *Hub) clean() {</span></span>
<span class="line"><span>	close(h.broadcast)</span></span>
<span class="line"><span>	close(h.register)</span></span>
<span class="line"><span>	close(h.unregister)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>// client.go, 客户端链接管理，针对这个客户端链接做消息监听、发送等处理</p><div class="language-golang line-numbers-mode" data-highlighter="shiki" data-ext="golang" data-title="golang" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package ws</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;call/internal/types&quot;</span></span>
<span class="line"><span>	&quot;encoding/json&quot;</span></span>
<span class="line"><span>	&quot;fmt&quot;</span></span>
<span class="line"><span>	&quot;github.com/gin-gonic/gin&quot;</span></span>
<span class="line"><span>	&quot;github.com/gorilla/websocket&quot;</span></span>
<span class="line"><span>	&quot;log&quot;</span></span>
<span class="line"><span>	&quot;net/http&quot;</span></span>
<span class="line"><span>	&quot;time&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type Client struct {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// WebSocket连接</span></span>
<span class="line"><span>	Conn *websocket.Conn</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 发送消息给客户端的通道</span></span>
<span class="line"><span>	Send chan []byte</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 设备id / 用户id</span></span>
<span class="line"><span>	UserId string</span></span>
<span class="line"><span>	RoomId string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func NewClient(c *websocket.Conn) *Client {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return &amp;Client{</span></span>
<span class="line"><span>		Conn: c,</span></span>
<span class="line"><span>		Send: make(chan []byte),</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ClientHandle 连接处理</span></span>
<span class="line"><span>func ClientHandle(c *gin.Context) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 升级协议</span></span>
<span class="line"><span>	var upgrader = websocket.Upgrader{CheckOrigin: func(r *http.Request) bool {</span></span>
<span class="line"><span>		return true</span></span>
<span class="line"><span>	}}</span></span>
<span class="line"><span>	conn, err := upgrader.Upgrade(c.Writer, c.Request, nil)</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	client := NewClient(conn)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 注册到注册频道, 管理全部用户</span></span>
<span class="line"><span>	// MyServer.Hubs[&quot;register&quot;].register &lt;- client</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	// 为每一个client 处理读写</span></span>
<span class="line"><span>	go client.ReadPump()</span></span>
<span class="line"><span>	go client.WritePump()</span></span>
<span class="line"><span>	go client.Heartbeat()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (c *Client) ReadPump() {</span></span>
<span class="line"><span>	defer func() {</span></span>
<span class="line"><span>		if r := recover(); r != nil {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			// TODO 记录日志</span></span>
<span class="line"><span>			err := c.Conn.Close()</span></span>
<span class="line"><span>			if err != nil {</span></span>
<span class="line"><span>				log.Printf(&quot;ReadPump Error closing connection after panic: %v&quot;, err)</span></span>
<span class="line"><span>				return</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}()</span></span>
<span class="line"><span>	for {</span></span>
<span class="line"><span>		_, message, err := c.Conn.ReadMessage()</span></span>
<span class="line"><span>		if err != nil {</span></span>
<span class="line"><span>			log.Printf(&quot;c.Conn.ReadMessage() 触发错误，%v:&quot;, err)</span></span>
<span class="line"><span>			err = c.Conn.Close()</span></span>
<span class="line"><span>			if err != nil {</span></span>
<span class="line"><span>				log.Printf(&quot;SetReadDeadline c.Conn.Close(): %v&quot;, err)</span></span>
<span class="line"><span>				return</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		var req = types.WsReq{}</span></span>
<span class="line"><span>		err = json.Unmarshal(message, &amp;req)</span></span>
<span class="line"><span>		if err != nil {</span></span>
<span class="line"><span>			// TODO 打印日志</span></span>
<span class="line"><span>			continue</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>		switch req.Event {</span></span>
<span class="line"><span>		case &quot;join&quot;:</span></span>
<span class="line"><span>			log.Printf(&quot;加入房间：%v&quot;, c.UserId)</span></span>
<span class="line"><span>			err = c.joinHandle(message)</span></span>
<span class="line"><span>			if err != nil {</span></span>
<span class="line"><span>				// TODO 打印日志</span></span>
<span class="line"><span>				fmt.Println(err)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		case &quot;offer_sdp&quot;:</span></span>
<span class="line"><span>			var signallingReq = types.SignallingReq{}</span></span>
<span class="line"><span>			err = json.Unmarshal(message, &amp;signallingReq)</span></span>
<span class="line"><span>			if err != nil {</span></span>
<span class="line"><span>				// TODO 打印日志</span></span>
<span class="line"><span>				fmt.Println(err)</span></span>
<span class="line"><span>				continue</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			hub := MyServer.Hubs[signallingReq.Data.RoomId]</span></span>
<span class="line"><span>			for client := range hub.clients {</span></span>
<span class="line"><span>				if client != c {</span></span>
<span class="line"><span>					client.Send &lt;- message</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		case &quot;answer_sdp&quot;:</span></span>
<span class="line"><span>			var signallingReq = types.SignallingReq{}</span></span>
<span class="line"><span>			err = json.Unmarshal(message, &amp;signallingReq)</span></span>
<span class="line"><span>			if err != nil {</span></span>
<span class="line"><span>				// TODO 打印日志</span></span>
<span class="line"><span>				fmt.Println(err)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			hub := MyServer.Hubs[signallingReq.Data.RoomId]</span></span>
<span class="line"><span>			for client := range hub.clients {</span></span>
<span class="line"><span>				if client != c {</span></span>
<span class="line"><span>					client.Send &lt;- message</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		case &quot;candidate&quot;:</span></span>
<span class="line"><span>			var signallingReq = types.SignallingReq{}</span></span>
<span class="line"><span>			err = json.Unmarshal(message, &amp;signallingReq)</span></span>
<span class="line"><span>			if err != nil {</span></span>
<span class="line"><span>				// TODO 打印日志</span></span>
<span class="line"><span>				fmt.Println(err)</span></span>
<span class="line"><span>				continue</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>			hub := MyServer.Hubs[signallingReq.Data.RoomId]</span></span>
<span class="line"><span>			for client := range hub.clients {</span></span>
<span class="line"><span>				if client != c {</span></span>
<span class="line"><span>					client.Send &lt;- message</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		case &quot;exit&quot;:</span></span>
<span class="line"><span>			// 用户退出房间</span></span>
<span class="line"><span>			if _, ok := MyServer.Hubs[c.RoomId]; ok {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>				hub := MyServer.Hubs[c.RoomId]</span></span>
<span class="line"><span>				if _, ok := hub.clients[c]; ok {</span></span>
<span class="line"><span>					hub.unregister &lt;- c</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//</span></span>
<span class="line"><span>//// req请求</span></span>
<span class="line"><span>//func (c *Client) reqHandle(m *Message) {</span></span>
<span class="line"><span>//</span></span>
<span class="line"><span>//	// 获取频道</span></span>
<span class="line"><span>//	switch m.Param[&quot;channel&quot;] {</span></span>
<span class="line"><span>//	case &quot;test&quot;:</span></span>
<span class="line"><span>//		c.Send &lt;- []byte(&quot;进入房间测试&quot;)</span></span>
<span class="line"><span>//		break</span></span>
<span class="line"><span>//	}</span></span>
<span class="line"><span>//</span></span>
<span class="line"><span>//}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 加入房间处理</span></span>
<span class="line"><span>func (c *Client) joinHandle(data []byte) error {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	var req types.JoinReq</span></span>
<span class="line"><span>	err := json.Unmarshal(data, &amp;req)</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		fmt.Println(&quot;err&quot;)</span></span>
<span class="line"><span>		return err</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	var hub *Hub</span></span>
<span class="line"><span>	MyServer.rwLock.RLock()</span></span>
<span class="line"><span>	if myServerHub, ok := MyServer.Hubs[req.Data.RoomId]; !ok {</span></span>
<span class="line"><span>		hub = NewHub()</span></span>
<span class="line"><span>		MyServer.Hubs[req.Data.RoomId] = hub</span></span>
<span class="line"><span>		hub.id = req.Data.RoomId</span></span>
<span class="line"><span>		go hub.Run()</span></span>
<span class="line"><span>	} else {</span></span>
<span class="line"><span>		hub = myServerHub</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	MyServer.rwLock.RUnlock()</span></span>
<span class="line"><span>	c.UserId = req.Data.UserId</span></span>
<span class="line"><span>	// 已经加入房间的用户 不能加入其他房间，不处理就行了，因为正常逻辑的用户不能重复加入</span></span>
<span class="line"><span>	if c.RoomId != &quot;&quot; {</span></span>
<span class="line"><span>		return nil</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	c.RoomId = req.Data.RoomId</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	if hub.viewer == c.UserId || hub.master == c.UserId {</span></span>
<span class="line"><span>		return nil</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if len(hub.clients) == 2 {</span></span>
<span class="line"><span>		return nil</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if len(hub.clients) == 1 {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		//  TODO 判断该游客权限，是否有剩余时间</span></span>
<span class="line"><span>		if true {</span></span>
<span class="line"><span>			hub.mu.RLock()</span></span>
<span class="line"><span>			hub.viewer = c.UserId</span></span>
<span class="line"><span>			hub.register &lt;- c</span></span>
<span class="line"><span>			hub.mu.RUnlock()</span></span>
<span class="line"><span>			return nil</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			return nil</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if len(hub.clients) == 0 {</span></span>
<span class="line"><span>		hub.mu.RLock()</span></span>
<span class="line"><span>		hub.master = c.UserId</span></span>
<span class="line"><span>		hub.register &lt;- c</span></span>
<span class="line"><span>		hub.mu.RUnlock()</span></span>
<span class="line"><span>		return nil</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	return nil</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func (c *Client) WritePump() {</span></span>
<span class="line"><span>	defer func() {</span></span>
<span class="line"><span>		if r := recover(); r != nil {</span></span>
<span class="line"><span>			// TODO 记录日志</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			err := c.Conn.Close()</span></span>
<span class="line"><span>			if err != nil {</span></span>
<span class="line"><span>				log.Printf(&quot;WritePump Error closing connection after panic: %v&quot;, err)</span></span>
<span class="line"><span>				return</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	}()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	for message := range c.Send {</span></span>
<span class="line"><span>		err := c.Conn.WriteMessage(websocket.TextMessage, message)</span></span>
<span class="line"><span>		if err != nil {</span></span>
<span class="line"><span>			break</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Heartbeat 心跳检测</span></span>
<span class="line"><span>func (c *Client) Heartbeat() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	ticker := time.NewTicker(2 * time.Second)</span></span>
<span class="line"><span>	defer func() {</span></span>
<span class="line"><span>		ticker.Stop()</span></span>
<span class="line"><span>		if r := recover(); r != nil {</span></span>
<span class="line"><span>			log.Printf(&quot;Heartbeat recover: %v&quot;, r)</span></span>
<span class="line"><span>			if c.Conn != nil {</span></span>
<span class="line"><span>				// TODO 记录日志</span></span>
<span class="line"><span>				err := c.Conn.Close()</span></span>
<span class="line"><span>				if err != nil {</span></span>
<span class="line"><span>					log.Printf(&quot;Heartbeat Error closing connection: %v&quot;, err)</span></span>
<span class="line"><span>					return</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}()</span></span>
<span class="line"><span>	failTimes := 0</span></span>
<span class="line"><span>	for {</span></span>
<span class="line"><span>		select {</span></span>
<span class="line"><span>		case &lt;-ticker.C:</span></span>
<span class="line"><span>			err := c.Conn.WriteControl(websocket.PingMessage, []byte{}, time.Now().Add(time.Second))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>			if err != nil {</span></span>
<span class="line"><span>				log.Printf(&quot;心跳失败，err:%v&quot;, err)</span></span>
<span class="line"><span>				failTimes += 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>				if failTimes &gt;= 3 {</span></span>
<span class="line"><span>					log.Printf(&quot;心跳重连最大次数，err:%v&quot;, err)</span></span>
<span class="line"><span>					if c.RoomId != &quot;&quot; {</span></span>
<span class="line"><span>						MyServer.Hubs[c.RoomId].unregister &lt;- c</span></span>
<span class="line"><span>					}</span></span>
<span class="line"><span>					return</span></span>
<span class="line"><span>				}</span></span>
<span class="line"><span>			} else {</span></span>
<span class="line"><span>				// 如果成功则重置为0</span></span>
<span class="line"><span>				failTimes = 0</span></span>
<span class="line"><span>				//log.Printf(&quot;发送心跳成功,用户id：%v&quot;, c.UserId)</span></span>
<span class="line"><span>			}</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>// types.go，以上几个文件用的结构体</p><div class="language-golang line-numbers-mode" data-highlighter="shiki" data-ext="golang" data-title="golang" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package types</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type WsReq struct {</span></span>
<span class="line"><span>	Event string \`json:&quot;event&quot;\` // 事件 sub、unsub、error、req、resp</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// JoinReq 登录请求结构体</span></span>
<span class="line"><span>type JoinReq struct {</span></span>
<span class="line"><span>	Event string \`json:&quot;event&quot;\` // 事件 sub、unsub、error、req、resp</span></span>
<span class="line"><span>	Data  struct {</span></span>
<span class="line"><span>		UserId string \`json:&quot;user_id&quot;\` // 设备id</span></span>
<span class="line"><span>		RoomId string \`json:&quot;room_id&quot;\` // 区块</span></span>
<span class="line"><span>	} \`json:&quot;data&quot;\`</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// OutReq 登录请求结构体</span></span>
<span class="line"><span>type OutReq struct {</span></span>
<span class="line"><span>	Event string \`json:&quot;event&quot;\` // 事件 sub、unsub、error、req、resp</span></span>
<span class="line"><span>	Data  struct {</span></span>
<span class="line"><span>		RoomId string \`json:&quot;room_id&quot;\` // 区块</span></span>
<span class="line"><span>	} \`json:&quot;data&quot;\`</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>type WsResp struct {</span></span>
<span class="line"><span>	Event string \`json:&quot;event&quot;\`</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// JoinResp 加入房间广播</span></span>
<span class="line"><span>type JoinResp struct {</span></span>
<span class="line"><span>	Event string       \`json:&quot;event&quot;\`</span></span>
<span class="line"><span>	Data  JoinRespData \`json:&quot;data&quot;\`</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type JoinRespData struct {</span></span>
<span class="line"><span>	Count  int    \`json:&quot;count&quot;\`</span></span>
<span class="line"><span>	Master string \`json:&quot;master&quot;\`</span></span>
<span class="line"><span>	Viewer string \`json:&quot;viewer&quot;\`</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// SignallingReq 信令数据</span></span>
<span class="line"><span>type SignallingReq struct {</span></span>
<span class="line"><span>	Event string \`json:&quot;event&quot;\`</span></span>
<span class="line"><span>	Data  struct {</span></span>
<span class="line"><span>		RoomId string      \`json:&quot;room_id&quot;\` // 区块</span></span>
<span class="line"><span>		Value  interface{} \`json:&quot;value&quot;\`</span></span>
<span class="line"><span>	} \`json:&quot;data&quot;\`</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>// router.go. 我这里用的是 gin 框架，简单封装了一下路由</p><div class="language-golang line-numbers-mode" data-highlighter="shiki" data-ext="golang" data-title="golang" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package router</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;call/internal/ws&quot;</span></span>
<span class="line"><span>	&quot;github.com/gin-gonic/gin&quot;</span></span>
<span class="line"><span>	&quot;net/http&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Router() *gin.Engine {</span></span>
<span class="line"><span>	r := gin.Default()</span></span>
<span class="line"><span>	r.GET(&quot;/ws&quot;, ws.ClientHandle)</span></span>
<span class="line"><span>	r.LoadHTMLGlob(&quot;internal/html/*&quot;)</span></span>
<span class="line"><span>	r.GET(&quot;/&quot;, func(c *gin.Context) {</span></span>
<span class="line"><span>		c.HTML(http.StatusOK, &quot;video.html&quot;, nil)</span></span>
<span class="line"><span>	})</span></span>
<span class="line"><span>	ws.Init()</span></span>
<span class="line"><span>	return r</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>// main.go. 入口文件</p><div class="language-golang line-numbers-mode" data-highlighter="shiki" data-ext="golang" data-title="golang" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package main</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>	&quot;call/internal/router&quot;</span></span>
<span class="line"><span>	&quot;log&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func main() {</span></span>
<span class="line"><span>	r := router.Router()</span></span>
<span class="line"><span>	err := r.Run(&quot;:8070&quot;)</span></span>
<span class="line"><span>	if err != nil {</span></span>
<span class="line"><span>		log.Fatalln(&quot;run err.&quot;, err)</span></span>
<span class="line"><span>		return</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现以上代码，即可在本地实现视频通信。</p>`,22),e=[p];function t(d,h){return i(),n("div",null,e)}const c=s(l,[["render",t],["__file","20240813876528716.html.vue"]]),v=JSON.parse('{"path":"/golang/20240813876528716.html","title":"WebRTC（二）：实现","lang":"zh-CN","frontmatter":{"title":"WebRTC（二）：实现","date":"2024-08-13T00:00:00.000Z","tags":["WebRTC"],"categories":["WebRTC"],"description":"介绍 使用 H5+webrtc 实现视频通信 使用 golang 作为信令服务（信令服务的本质就是转发两个本地客户端的握手信息，让他俩可以建立 p2p 通信） 一、前端代码 前端需要实现内容： 获取摄像头权限，获取摄像头流数据 A 发起 offer 请求，B 接收 offer 请求并发送 answer 答复 A 接受 answer 答复，发送 cand...","head":[["meta",{"property":"og:url","content":"https://github.com/youngerhe/golang/20240813876528716.html"}],["meta",{"property":"og:site_name","content":"木锤"}],["meta",{"property":"og:title","content":"WebRTC（二）：实现"}],["meta",{"property":"og:description","content":"介绍 使用 H5+webrtc 实现视频通信 使用 golang 作为信令服务（信令服务的本质就是转发两个本地客户端的握手信息，让他俩可以建立 p2p 通信） 一、前端代码 前端需要实现内容： 获取摄像头权限，获取摄像头流数据 A 发起 offer 请求，B 接收 offer 请求并发送 answer 答复 A 接受 answer 答复，发送 cand..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-24T03:43:57.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:tag","content":"WebRTC"}],["meta",{"property":"article:published_time","content":"2024-08-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-24T03:43:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WebRTC（二）：实现\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-13T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-24T03:43:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"/about/intro.html\\"}]}"]]},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"一、前端代码","slug":"一、前端代码","link":"#一、前端代码","children":[]},{"level":2,"title":"二、服务端代码","slug":"二、服务端代码","link":"#二、服务端代码","children":[]}],"git":{"createdTime":1724471037000,"updatedTime":1724471037000,"contributors":[{"name":"perkins","email":"mbitchina@163.com","commits":1}]},"readingTime":{"minutes":7.06,"words":2118},"filePathRelative":"golang/20240813876528716.md","localizedDate":"2024年8月13日","excerpt":"<h2>介绍</h2>\\n<ul>\\n<li>使用 H5+webrtc 实现视频通信</li>\\n<li>使用 golang 作为信令服务（信令服务的本质就是转发两个本地客户端的握手信息，让他俩可以建立 p2p 通信）</li>\\n</ul>\\n<h2>一、前端代码</h2>\\n<ul>\\n<li>前端需要实现内容：</li>\\n</ul>\\n<ol>\\n<li>获取摄像头权限，获取摄像头流数据</li>\\n<li>A 发起 offer 请求，B 接收 offer 请求并发送 answer 答复</li>\\n<li>A 接受 answer 答复，发送 candidate 请求，B 接收 candidate 请求</li>\\n<li>AB 监听流传输并赋值至 video</li>\\n</ol>","autoDesc":true}');export{c as comp,v as data};
