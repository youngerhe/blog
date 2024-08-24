import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as r,b as n}from"./app-CtbYvwav.js";const o={},e=n('<h3 id="资产" tabindex="-1"><a class="header-anchor" href="#资产"><span><strong>资产</strong></span></a></h3><p><strong>账户权益 = 钱包余额+未实现盈亏</strong></p><p><strong>钱包余额 = 总转入-总转出+已实现盈亏（总转入包括赠金发放，总转出包括赠金回收）</strong></p><p><strong>已实现盈亏 = 总平仓盈亏 + 总手续费 + 总资金费</strong></p><p><strong>仓位保证金 = 所有逐仓的仓位保证金之和+所有全仓仓位保证金之和</strong></p><p><strong>委托保证金 = 所有订单的委托成本之和</strong></p><p><strong>占用保证金 = 仓位保证金+委托保证金</strong></p><p><strong>可用保证金 = max（0，钱包余额 - 占用保证金 + min（0，全仓总未实现盈亏））</strong></p><p><strong>可划转保证金 = max（0，可用保证金-体验金余额）</strong></p><p><strong>最高买价：指数价*（1+限价比例）</strong></p><p><strong>最低卖价：指数价*（1-限价比例）</strong></p><h3 id="订单" tabindex="-1"><a class="header-anchor" href="#订单"><span><strong>订单</strong></span></a></h3><p><strong>市价开仓预估价格</strong></p><ul><li><strong>市价开多预估成交价格 =最⾼买⼊价（取价格范围的最⼤值）</strong></li><li><strong>市价开空预估成交价格=Max (买⼀盘⼝价格, 最低卖出价)（最低卖出价取价格范围的最⼩值）</strong></li></ul><p><strong>限价开仓预估价格</strong></p><ul><li><strong>限价开多预估成交价格 = 委托价格</strong></li><li><strong>限价开空预估成交价格 = Max (买⼀盘⼝价格, 限价委托价格)</strong></li></ul><p><strong>开仓委托价值</strong></p><ul><li>**开仓委托价值=开仓预估价格 ***开仓张数*合约⾯值</li></ul><p><strong>开仓预估保证⾦</strong></p><ul><li><strong>开仓预估保证⾦ = 开仓委托价值 / 杠杆</strong></li></ul><p><strong>初始保证⾦率</strong></p><ul><li><strong>初始保证⾦率=1/杠杆倍数</strong></li></ul><p><strong>开仓预估⼿续费</strong></p><ul><li><strong>市价/限价（GTC、IOC、FOK）开仓预估⼿续费=开仓委托价值*Taker 费率</strong></li></ul><p><strong>委托成本 （需要把平仓部分也包含进去）</strong></p><ul><li><strong>委托成本=开仓预估保证⾦+2*开仓预估⼿续费</strong></li></ul><h3 id="仓位" tabindex="-1"><a class="header-anchor" href="#仓位"><span><strong>仓位</strong></span></a></h3><p><strong>开仓保证⾦/初始保证金 （需要把平仓部分也包含进去）</strong></p><ul><li>**开仓保证⾦/初始保证金=⾯值***开仓张数<em>开仓均价</em>（1/杠杆倍数+taker 费率）</li></ul><p><strong>开仓均价</strong></p><ul><li><strong>开仓均价=（|原仓位张数|*</strong>⾯值<em>原开仓均价+|新开仓张数|</em>⾯值<em>新开仓成交均价）/|新仓位张数|</em>⾯值</li></ul><p><strong>注意：仅适⽤于加仓，减仓不影响开仓均价</strong></p><p><strong>未实现盈亏</strong></p><ul><li><strong>多仓未实现盈亏=（标记价格-开仓均价）*</strong>⾯值*持仓张数</li><li><strong>空仓未实现盈亏=（开仓均价-标记价格）*</strong>⾯值*持仓张数</li></ul><p><strong>未实现盈亏收益率/平仓收益率 （需要改为按照初始保证金）</strong></p><ul><li>**未实现盈亏收益率 = 未实现盈亏/初始保证金**<em>100%=未实现盈亏/（⾯值<em>开仓张数</em>开仓均价</em>（1/杠杆倍数+taker 费率））*100%</li></ul><p>**平仓盈亏 **</p><ul><li><strong>多仓平仓盈亏=（平仓均价-开仓均价）*</strong>⾯值*平仓张数</li><li><strong>空仓平仓盈亏=（开仓均价-平仓均价）*</strong>⾯值*平仓张数</li></ul><p><strong>注意：平仓均价是指平仓订单成交均价</strong></p><p>**已实现盈亏 **</p><ul><li><strong>已实现盈亏=平仓盈亏+资金费+手续费</strong></li></ul><p><strong>已实现盈亏收益率</strong></p><ul><li><strong>已实现盈亏收益率=仓位已实现盈亏总和/平仓保证⾦总和*100%</strong></li></ul><p><strong>逐仓保证⾦率</strong></p><ul><li><strong>保证⾦率 =(⾯值 _ 持仓张数_ 标记价格 * (维持保证⾦率+ taker ⼿续费率)) /max(0.00000001, (逐仓仓位保证⾦余额 + 未实现盈亏) ）</strong></li></ul><p><strong>维持保证⾦（即维持仓位所需的最少保证⾦）：</strong></p><ul><li><strong>维持保证⾦ = ⾯值 _ 持仓张数 _ 维持保证⾦率 * 标记价格</strong></li></ul><p><strong>维持保证⾦率</strong></p><ul><li><strong>维持保证⾦率每个合约在后台配置</strong></li></ul><p><strong>平仓保证⾦=平仓数量*开仓均价/杠杆倍数</strong></p><p><strong>平仓释放保证⾦</strong></p><ul><li><strong>逐仓保证⾦释放 = 平仓张数 / 平仓前的总持仓张数 * 逐仓保证⾦余额（先释放，然后再从释放出去的保证金部分把平仓手续费和平仓盈亏扣减掉）</strong></li></ul><p><strong>逐仓强平价</strong></p><ul><li>**多仓预估强平价 = (逐仓保证⾦余额 - ⾯值 **<em>持仓张数</em> 开仓均价) / (⾯值 * 持仓张数* (维持保证⾦率 + taker ⼿续费率 - 1)) ；</li><li>**空仓预估强平价 = (逐仓保证⾦余额 + ⾯值 **<em>持仓张数</em> 开仓均价) / (⾯值 *持仓张数* (维持保证⾦率 + taker ⼿续费率 + 1))；</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>强平公式来源：` `以多仓为例，当⽤⼾仓位发⽣强平时，保证⾦率降低⾄``100``%，即保证⾦余额 - 亏损 = 维持所需保证⾦+⼿续费；` `其中强平时的仓位数据情况：` ` ``仓位保证⾦余额即⽤⼾仓位中的保证⾦``亏损 = （开仓均价-强平价格）*⾯值*张数``维持保证⾦ = 强平价格*⾯值*张数*维持保证⾦率``平仓⼿续费 = 强平价格*⾯值*张数*taker⼿续费率` `整理公式为：` `保证⾦余额 = 维持保证⾦+⼿续费+亏损` `保证⾦余额 = 强平价格*⾯值*张数*维持保证⾦率 + 强平价格*⾯值*张数*taker⼿续费率 + （开仓均价-强平价格）*⾯值*张数` `= 强平价格*⾯值*张数（维持保证⾦率+taker⼿续费率）+开仓均价*⾯值*张数 - 强平价格*⾯值*张数` `= 强平价格*⾯值*张数[（维持保证⾦率+taker⼿续费率）-``1` `] + 开仓均价*⾯值*张数` `整理公式为：` `保证⾦余额 - 开仓均价*⾯值*张数 = 强平价格*⾯值*张数[（维持保证⾦率+taker⼿续费率）-``1` `]` `即多仓强平价格：` `强平价格= (保证⾦余额 - 开仓均价*⾯值*张数）/ [*⾯值*张数[（维持保证⾦率+taker⼿续费率）-``1` `]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>逐仓仓位破产价格</strong></p><ul><li><strong>多仓破产价格=（开仓均价-逐仓保证⾦余额 / ⾯值/持仓张数）/（1- Taker 费率）</strong></li><li><strong>空仓破产价格=（开仓均价+逐仓保证⾦余额 /⾯值/持仓张数 ）/（1+ Taker 费率）</strong></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>破产价格公式来源：` `以多仓为例，破产价格即为当标记价格达到此价格时，逐仓保证⾦余额+未实现盈亏-平仓⼿续费=``0` `其中强平时的仓位数据情况：` `• 仓位保证⾦余额即⽤⼾仓位中的保证⾦` `• 未实现盈亏 = （破产价格-开仓均价）*⾯值*张数` `• 平仓⼿续费 = 破产价格*⾯值*张数*taker⼿续费率` `整理公式为：` `逐仓保证⾦余额+未实现盈亏-平仓⼿续费=``0` `逐仓保证⾦余额+（破产价格-开仓均价）*⾯值*张数-破产价格*⾯值*张数*taker⼿续费率=``0` `逐仓保证⾦余额+破产价格*⾯值*张数-开仓均价*⾯值*张数-破产价格*⾯值*张数*taker⼿续费率=``0` `逐仓保证⾦余额-开仓均价*⾯值*张数+破产价格*⾯值*张数*（``1``-taker⼿续费率）=``0` `破产价格*⾯值*张数*（``1``-taker⼿续费率）=开仓均价*⾯值*张数-逐仓保证⾦余额` `破产价格=（开仓均价*⾯值*张数-逐仓保证⾦余额）/（⾯值*张数*（``1``-taker⼿续费率））` `破产价格=（开仓均价-逐仓保证⾦余额/⾯值/张数）/（``1``-taker⼿续费率）</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>全仓：</strong></p><p><strong>保证金比率=（sum（所有全仓仓位维持保证金）+ sum（所有全仓仓位强平手续费））/max(0.00000001,（钱包余额-逐仓仓位保证金-委托保证金+所有全仓仓位未实现盈亏）)</strong></p><p><strong>（推算过程：总维持保证金+所有全仓仓位强平手续费&gt;=全仓可用保证金+所有全仓仓位未实现盈亏，其中【全仓可用保证金】=钱包余额-逐仓仓位保证金-委托保证金）。</strong></p><p>**维持保证金 = 标记价格***持仓数量<em>合约面值</em>维持保证金率，所以【所有全仓仓位维持保证金】=A 仓位维持保证金+B 仓位维持保证金+…</p><p><strong>强平价格（全仓）</strong></p><p>**强平价格=（空仓开仓均价***空仓持仓数量<em>合约面值-多仓开仓均价</em>多仓持仓数量<em>合约面值+钱包余额-逐仓仓位保证金-委托保证金+其他合约全仓仓位未实现盈亏-其他合约全仓仓位强平手续费-其他全仓仓位维持保证金）/（面值</em>（多仓持仓数量<em>维持保证金率+空仓持仓数量</em>维持保证金率-多仓持仓数量+空仓持仓数量+空仓持仓数量<em>taker 费率+多仓持仓数量</em>taker 费率））</p><p><strong>（推算过程：所有全仓仓位维持保证金 = 全仓可用保证金+其他合约全仓仓位未实现盈亏-其他合约全仓仓位强平手续费+当前合约未实现盈亏-当前合约强平手续费，然后由当前合约未实现盈亏和强平手续费反推出强平价格。）</strong></p><p><strong>注：</strong><strong>1、其他合约全仓仓位未实现盈亏、其他合约全仓仓位强平手续费，都是按照当时的标记价格计算。</strong><strong>2、多仓价格可能为负，我们用&quot;0&quot;表示，空仓价格可能会很大用&quot;1000000&quot;表示 ；</strong></p><p><strong>破产价格（全仓）</strong></p><p>**破产价格 =（强平时标记价格***空仓持仓量<em>面值-强平时标记价格</em>多仓持仓量<em>面值 +（钱包余额-逐仓仓位保证金-委托保证金+所有全仓仓位未实现盈亏）<em>当前合约仓位维持保证金/sum（所有合约全仓仓位维持保证金））/（面值</em>（空仓持仓量-多仓持仓量+ 多仓持仓量</em>taker 费率+空仓持仓量*taker 费率））</p><p><strong>（推算过程：根据强平时剩下的保证金按照维持保证金比例进行分配，然后再根据分配到的保证金 = 当前合约从强平时市场最新价到破产价之间的未实现盈亏+破产价手续费，算出破产价格。）</strong></p><p><strong>即：（钱包余额-逐仓仓位保证金-委托保证金+所有全仓仓位未实现盈亏）*当前全仓仓位维持保证金/sum（所有合约全仓仓位维持保证金）+ 当前合约从当前标记价到破产价格的未实现盈亏-当前合约的破产价强平手续费=0</strong></p><p><strong>注：</strong></p><p><strong>1、其他合约全仓仓位未实现盈亏，是按照当时的标记价格计算。当前合约仓位维持保证金，是使用强平时标记价格计算的。</strong> **2、多仓价格可能为负，我们用&quot;0&quot;表示，空仓价格可能会很大用&quot;1000000&quot;表示 **</p><p><strong>减⼩杠杆需增加保证⾦公式（调大杠杆不释放保证金）</strong></p><p><em><em>=Max{0，（⾯值</em> 张数</em>**开仓均价*（1/新杠杆倍数+taker 费率）-逐仓仓位保证⾦余额） }</p><p><strong>仓位可减少保证⾦公式</strong></p><p>**=Max{0，（逐仓仓位保证⾦余额+MIN{0，未实现盈亏} -⾯值***张数<em>开仓均价</em>（1/杠杆倍数+taker 费率）） }</p><p><strong>平仓均价</strong></p><p><strong>平仓均价 = ( 合约⾯值 _ 成交价格 1 的合约数 _ 成交价格 1 + 合约⾯值 _ 成交价格 2 的合约数 _ 成交价格 2 + ... )/（合约⾯值*总持仓张数）</strong></p>',78),g=[e];function l(i,a){return r(),s("div",null,g)}const u=t(o,[["render",l],["__file","20230806328123976.html.vue"]]),d=JSON.parse('{"path":"/other/20230806328123976.html","title":"合约计算公式","lang":"zh-CN","frontmatter":{"title":"合约计算公式","category":["杂七杂八"],"date":"2023-08-06T00:00:00.000Z","tag":["杂七杂八","公式"],"feed":false,"seo":false,"head":[]},"headers":[{"level":3,"title":"资产","slug":"资产","link":"#资产","children":[]},{"level":3,"title":"订单","slug":"订单","link":"#订单","children":[]},{"level":3,"title":"仓位","slug":"仓位","link":"#仓位","children":[]}],"git":{"createdTime":1724471037000,"updatedTime":1724471037000,"contributors":[{"name":"perkins","email":"mbitchina@163.com","commits":1}]},"readingTime":{"minutes":8.89,"words":2666},"filePathRelative":"other/20230806328123976.md","localizedDate":"2023年8月6日"}');export{u as comp,d as data};
