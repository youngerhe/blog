import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as e}from"./app-CuZ5CmZm.js";const i={},l=e(`<h1 id="《mbit》jwt-双-token-机制-鉴权中间件" tabindex="-1"><a class="header-anchor" href="#《mbit》jwt-双-token-机制-鉴权中间件"><span>《Mbit》JWT 双 token 机制+鉴权中间件</span></a></h1><p><strong>JWT（JSON Web Token）是一种用于身份验证和授权的开放标准（RFC 7519），它定义了一种简洁的、自包含的方法用于通信双方之间以 JSON 对象的形式安全地传输信息。JWT 通常用于互联网应用程序中，以提供一种轻量级的身份验证方式。以下是对 JWT 的详细介绍：</strong></p><p><strong>JWT 由三个部分组成，通过点（.）分隔：</strong></p><ul><li><strong>头部（Header）：</strong><ul><li><strong>通常是一个 JSON 对象，描述了 JWT 的签名算法和其它元数据。</strong></li><li><strong>例如：</strong><code>{&quot;alg&quot;: &quot;HS256&quot;, &quot;typ&quot;: &quot;JWT&quot;}</code>。这里的 <code>alg</code>属性表示签名使用的算法（如 HS256），<code>typ</code>属性表示令牌的类型（JWT）。</li><li><strong>头部信息会被进行 Base64 编码以形成 JWT 的第一部分。</strong></li></ul></li><li><strong>载荷（Payload）：</strong><ul><li><strong>也通常是一个 JSON 对象，包含了声明（Claims），用于描述用户信息、权限、过期时间等。</strong></li><li><strong>例如：</strong><code>{&quot;uid&quot;: &quot;1234&quot;, &quot;name&quot;: &quot;test&quot;}</code>。</li><li><strong>载荷信息同样会被进行 Base64 编码以形成 JWT 的第二部分。</strong></li></ul></li><li><strong>签名（Signature）：</strong><ul><li><strong>签名部分是对头部和载荷的签名，用于验证 JWT 的完整性和真实性。</strong></li><li><strong>签名是通过指定的算法（如 HMACSHA256）对头部和载荷的 Base64 编码后的字符串进行加密生成的，加密过程中还会使用一个密钥（secret）。</strong></li><li><strong>例如：</strong><code>HMACSHA256(base64UrlEncode(header) + &quot;.&quot; + base64UrlEncode(payload), secret)</code>。</li></ul></li></ul><h2 id="一、jwt-封装" tabindex="-1"><a class="header-anchor" href="#一、jwt-封装"><span>一、JWT 封装</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package jwt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import (</span></span>
<span class="line"><span>  &quot;errors&quot;</span></span>
<span class="line"><span>  &quot;github.com/golang-jwt/jwt/v4&quot;</span></span>
<span class="line"><span>  &quot;time&quot;</span></span>
<span class="line"><span>  &quot;uc/configs&quot;</span></span>
<span class="line"><span>)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type AccessClaim struct {</span></span>
<span class="line"><span>  UID int64 \`json:&quot;uid&quot;\`</span></span>
<span class="line"><span>  jwt.RegisteredClaims</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>type RefreshClaim struct {</span></span>
<span class="line"><span>  UID int64 \`json:&quot;uid&quot;\`</span></span>
<span class="line"><span>  jwt.RegisteredClaims</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>type MyJwt struct {</span></span>
<span class="line"><span>  AccessTokenExpiredTime  int64  \`json:&quot;access_token_expired_time&quot;\`</span></span>
<span class="line"><span>  RefreshTokenExpiredTime int64  \`json:&quot;refresh_token_expired_time&quot;\`</span></span>
<span class="line"><span>  Secret                  []byte \`json:&quot;secret&quot;\`</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>var JWT *MyJwt</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func Init() {</span></span>
<span class="line"><span>  JWT = NewMyJwt()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func NewMyJwt() *MyJwt {</span></span>
<span class="line"><span>  return &amp;MyJwt{</span></span>
<span class="line"><span>    AccessTokenExpiredTime:  configs.Config.Jwt.AccessTokenExpiredTime,</span></span>
<span class="line"><span>    RefreshTokenExpiredTime: configs.Config.Jwt.RefreshTokenExpiredTime,</span></span>
<span class="line"><span>    Secret:                  []byte(configs.Config.Jwt.Secret),</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func getExpiredTime(hour int64) *jwt.NumericDate {</span></span>
<span class="line"><span>  return jwt.NewNumericDate(time.Now().Add(time.Duration(hour) * time.Minute))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>func CreateToken(uid int64) (accessToken, refreshToken string, err error) {</span></span>
<span class="line"><span>  accessRC := jwt.RegisteredClaims{</span></span>
<span class="line"><span>    ExpiresAt: getExpiredTime(JWT.AccessTokenExpiredTime),</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  refreshRc := jwt.RegisteredClaims{</span></span>
<span class="line"><span>    ExpiresAt: getExpiredTime(JWT.RefreshTokenExpiredTime),</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  accessToken, err = jwt.NewWithClaims(jwt.SigningMethodHS256, &amp;AccessClaim{uid, accessRC}).SignedString(JWT.Secret)</span></span>
<span class="line"><span>  refreshToken, err = jwt.NewWithClaims(jwt.SigningMethodHS256, &amp;RefreshClaim{uid, refreshRc}).SignedString(JWT.Secret)</span></span>
<span class="line"><span>  return</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func keyFunc(token *jwt.Token) (interface{}, error) {</span></span>
<span class="line"><span>  return JWT.Secret, nil</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// VerifyToken 解析token</span></span>
<span class="line"><span>func VerifyToken(accessToken string) (*AccessClaim, error) {</span></span>
<span class="line"><span>  var accessClaim = new(AccessClaim)</span></span>
<span class="line"><span>  jwtToken, err := jwt.ParseWithClaims(accessToken, accessClaim, keyFunc)</span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    return nil, err</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if !jwtToken.Valid {</span></span>
<span class="line"><span>    err = errors.New(&quot;jwtToken Valid Failed&quot;)</span></span>
<span class="line"><span>    return nil, err</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return accessClaim, nil</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>func RefreshToken(refreshToken string) (newAccessToken, newRefreshToken string, err error) {</span></span>
<span class="line"><span>  // refreshToken 出错直接返回</span></span>
<span class="line"><span>  var refreshClaim = new(RefreshClaim)</span></span>
<span class="line"><span>  jwtToken, err := jwt.ParseWithClaims(refreshToken, refreshClaim, keyFunc)</span></span>
<span class="line"><span>  if err != nil {</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if !jwtToken.Valid {</span></span>
<span class="line"><span>    err = errors.New(&quot;jwtToken Valid Failed&quot;)</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return CreateToken(refreshClaim.UID)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、生成令牌" tabindex="-1"><a class="header-anchor" href="#二、生成令牌"><span>二、生成令牌</span></a></h2><ul><li><strong>access_token 是用来做接口鉴权的，每次前端请求需要鉴权的接口，都需要带上 access_token，过期时间需要设置的短一些。</strong></li><li><strong>refresh_token 是用来刷新 access_token 的，当 access_token 过期时，前端需要拿着 refresh_token 请求新的 access_token 以及 refresh_token，过期时间需要设置的长一些。</strong></li><li><strong>备注：因为 jwt 令牌不会失效只会过期，如果需要退出登录，需要将 refresh_token、access_token 放入 redis 黑名单中，鉴权或者刷新 token 的时候判断 redis 是否存在，如果存在就当做失效处理。</strong></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>func Login(){</span></span>
<span class="line"><span>// 接收参数</span></span>
<span class="line"><span>  // 校验参数</span></span>
<span class="line"><span>  // 密码校验</span></span>
<span class="line"><span>  // 生成token</span></span>
<span class="line"><span>  accessToken, refreshToken, err := jwt.CreateToken(UID)</span></span>
<span class="line"><span>  // 返回给前端</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、鉴权" tabindex="-1"><a class="header-anchor" href="#三、鉴权"><span>三、鉴权</span></a></h2><ul><li><strong>这段代码是 gin 的鉴权中间件</strong></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// JwtMiddleware 权限校验中间件</span></span>
<span class="line"><span>func JwtMiddleware() gin.HandlerFunc {</span></span>
<span class="line"><span>  return func(ctx *gin.Context) {</span></span>
<span class="line"><span>    data := map[string]interface{}{}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取token Bearer+token</span></span>
<span class="line"><span>    authorization := ctx.GetHeader(&quot;Authorization&quot;)</span></span>
<span class="line"><span>    if &quot;&quot; == authorization {</span></span>
<span class="line"><span>      ctx.JSON(http.StatusUnauthorized, gin.H{</span></span>
<span class="line"><span>        &quot;code&quot;: constant.UNAUTHORIZED,</span></span>
<span class="line"><span>        &quot;msg&quot;:  constant.CodeMap[constant.UNAUTHORIZED],</span></span>
<span class="line"><span>        &quot;data&quot;: data,</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>      ctx.Abort()</span></span>
<span class="line"><span>      return</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    authorizationSplit := strings.Split(authorization, &quot; &quot;)</span></span>
<span class="line"><span>    if &quot;Bearer&quot; != authorizationSplit[0] {</span></span>
<span class="line"><span>      ctx.JSON(http.StatusUnauthorized, gin.H{</span></span>
<span class="line"><span>        &quot;code&quot;: constant.UNAUTHORIZED,</span></span>
<span class="line"><span>        &quot;msg&quot;:  constant.CodeMap[constant.UNAUTHORIZED],</span></span>
<span class="line"><span>        &quot;data&quot;: data,</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>      ctx.Abort()</span></span>
<span class="line"><span>      return</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    token := authorizationSplit[1]</span></span>
<span class="line"><span>    if token == &quot;&quot; {</span></span>
<span class="line"><span>      ctx.JSON(http.StatusUnauthorized, gin.H{</span></span>
<span class="line"><span>        &quot;code&quot;: constant.UNAUTHORIZED,</span></span>
<span class="line"><span>        &quot;msg&quot;:  constant.CodeMap[constant.UNAUTHORIZED],</span></span>
<span class="line"><span>        &quot;data&quot;: data,</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>      ctx.Abort()</span></span>
<span class="line"><span>      return</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 解析token</span></span>
<span class="line"><span>    accessClaim, err := jwt.VerifyToken(token)</span></span>
<span class="line"><span>    if err != nil || accessClaim.UID == 0 {</span></span>
<span class="line"><span>      ctx.JSON(http.StatusUnauthorized, gin.H{</span></span>
<span class="line"><span>        &quot;code&quot;: constant.FORBIDDEN,</span></span>
<span class="line"><span>        &quot;msg&quot;:  constant.CodeMap[constant.FORBIDDEN],</span></span>
<span class="line"><span>        &quot;data&quot;: data,</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>      ctx.Abort()</span></span>
<span class="line"><span>      return</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    ctx.Set(&quot;uid&quot;, accessClaim.UID)</span></span>
<span class="line"><span>    ctx.Next()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、刷新令牌" tabindex="-1"><a class="header-anchor" href="#四、刷新令牌"><span>四、刷新令牌</span></a></h2><ul><li><strong>通常来说，前端需要判断两种情况：第一种是没有 access_token、或者 access_token 格式错误，需要跳转到登录页面。第二种是 access_token 过期，需要先刷新 access_token，如果刷新成功就继续请求接口，如果刷新失败跳转到登录页面。</strong></li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>func (c *UserController) RefreshToken(ctx *gin.Context) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 获取refreshToken</span></span>
<span class="line"><span>    refreshToken := ctx.GetHeader(&quot;refresh-token&quot;)</span></span>
<span class="line"><span>    newAccessToken, newRefreshToken, err := jwt.RefreshToken(refreshToken)</span></span>
<span class="line"><span>    if err != nil {</span></span>
<span class="line"><span>       c.JsonResp(ctx, constant.REFRESH_TOKEN_FAILED, nil)</span></span>
<span class="line"><span>       return</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    result := types.RefreshTokenResult{</span></span>
<span class="line"><span>       AccessToken:  newAccessToken,</span></span>
<span class="line"><span>       RefreshToken: newRefreshToken,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    c.JsonResp(ctx, constant.SUCCESS, result)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>具体代码，可以看《Mbit》UC 服务代码：</strong><a href="https://github.com/youngerhe/mbit-uc" target="_blank" rel="noopener noreferrer">https://github.com/youngerhe/mbit-uc</a></p>`,16),p=[l];function t(r,c){return a(),s("div",null,p)}const u=n(i,[["render",t],["__file","20240520123812371.html.vue"]]),v=JSON.parse('{"path":"/golang/mbit/20240520123812371.html","title":"《Mbit》JWT 双 token 机制+鉴权中间件","lang":"zh-CN","frontmatter":{"title":"《Mbit》JWT 双 token 机制+鉴权中间件","category":["golang"],"date":"2024-05-20T00:00:00.000Z","tag":["golang","jwt","token","mbit"],"description":"《Mbit》JWT 双 token 机制+鉴权中间件 JWT（JSON Web Token）是一种用于身份验证和授权的开放标准（RFC 7519），它定义了一种简洁的、自包含的方法用于通信双方之间以 JSON 对象的形式安全地传输信息。JWT 通常用于互联网应用程序中，以提供一种轻量级的身份验证方式。以下是对 JWT 的详细介绍： JWT 由三个部分组...","head":[["meta",{"property":"og:url","content":"https://github.com/youngerhe/blog/golang/mbit/20240520123812371.html"}],["meta",{"property":"og:site_name","content":"木锤"}],["meta",{"property":"og:title","content":"《Mbit》JWT 双 token 机制+鉴权中间件"}],["meta",{"property":"og:description","content":"《Mbit》JWT 双 token 机制+鉴权中间件 JWT（JSON Web Token）是一种用于身份验证和授权的开放标准（RFC 7519），它定义了一种简洁的、自包含的方法用于通信双方之间以 JSON 对象的形式安全地传输信息。JWT 通常用于互联网应用程序中，以提供一种轻量级的身份验证方式。以下是对 JWT 的详细介绍： JWT 由三个部分组..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-24T03:43:57.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:tag","content":"golang"}],["meta",{"property":"article:tag","content":"jwt"}],["meta",{"property":"article:tag","content":"token"}],["meta",{"property":"article:tag","content":"mbit"}],["meta",{"property":"article:published_time","content":"2024-05-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-24T03:43:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"《Mbit》JWT 双 token 机制+鉴权中间件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-24T03:43:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"/about/intro.html\\"}]}"]]},"headers":[{"level":2,"title":"一、JWT 封装","slug":"一、jwt-封装","link":"#一、jwt-封装","children":[]},{"level":2,"title":"二、生成令牌","slug":"二、生成令牌","link":"#二、生成令牌","children":[]},{"level":2,"title":"三、鉴权","slug":"三、鉴权","link":"#三、鉴权","children":[]},{"level":2,"title":"四、刷新令牌","slug":"四、刷新令牌","link":"#四、刷新令牌","children":[]}],"git":{"createdTime":1724471037000,"updatedTime":1724471037000,"contributors":[{"name":"perkins","email":"mbitchina@163.com","commits":1}]},"readingTime":{"minutes":3.39,"words":1018},"filePathRelative":"golang/mbit/20240520123812371.md","localizedDate":"2024年5月20日","excerpt":"\\n<p><strong>JWT（JSON Web Token）是一种用于身份验证和授权的开放标准（RFC 7519），它定义了一种简洁的、自包含的方法用于通信双方之间以 JSON 对象的形式安全地传输信息。JWT 通常用于互联网应用程序中，以提供一种轻量级的身份验证方式。以下是对 JWT 的详细介绍：</strong></p>\\n<p><strong>JWT 由三个部分组成，通过点（.）分隔：</strong></p>\\n<ul>\\n<li><strong>头部（Header）：</strong>\\n<ul>\\n<li><strong>通常是一个 JSON 对象，描述了 JWT 的签名算法和其它元数据。</strong></li>\\n<li><strong>例如：</strong><code>{\\"alg\\": \\"HS256\\", \\"typ\\": \\"JWT\\"}</code>。这里的 <code>alg</code>属性表示签名使用的算法（如 HS256），<code>typ</code>属性表示令牌的类型（JWT）。</li>\\n<li><strong>头部信息会被进行 Base64 编码以形成 JWT 的第一部分。</strong></li>\\n</ul>\\n</li>\\n<li><strong>载荷（Payload）：</strong>\\n<ul>\\n<li><strong>也通常是一个 JSON 对象，包含了声明（Claims），用于描述用户信息、权限、过期时间等。</strong></li>\\n<li><strong>例如：</strong><code>{\\"uid\\": \\"1234\\", \\"name\\": \\"test\\"}</code>。</li>\\n<li><strong>载荷信息同样会被进行 Base64 编码以形成 JWT 的第二部分。</strong></li>\\n</ul>\\n</li>\\n<li><strong>签名（Signature）：</strong>\\n<ul>\\n<li><strong>签名部分是对头部和载荷的签名，用于验证 JWT 的完整性和真实性。</strong></li>\\n<li><strong>签名是通过指定的算法（如 HMACSHA256）对头部和载荷的 Base64 编码后的字符串进行加密生成的，加密过程中还会使用一个密钥（secret）。</strong></li>\\n<li><strong>例如：</strong><code>HMACSHA256(base64UrlEncode(header) + \\".\\" + base64UrlEncode(payload), secret)</code>。</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{u as comp,v as data};
