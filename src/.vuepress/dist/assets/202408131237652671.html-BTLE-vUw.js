import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as a,b as i}from"./app-CtbYvwav.js";const e={},l=i(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p><strong>部分组件的配置安装方法可能随着 react 迭代有所调整，具体可以参考各个组件的官方文档</strong></p><p><strong>git 地址：</strong><code>https://github.com/youngerhe/mbit-pc</code></p><h2 id="_1、安装-react" tabindex="-1"><a class="header-anchor" href="#_1、安装-react"><span>1、安装 React</span></a></h2><h3 id="_1-1、介绍" tabindex="-1"><a class="header-anchor" href="#_1-1、介绍"><span>1.1、介绍</span></a></h3><p><strong>React 是一个由 Facebook 在 2013 年推出的开源 JavaScript 库，它主要用于构建用户界面。</strong></p><h3 id="_1-2、执行-react-安装命令" tabindex="-1"><a class="header-anchor" href="#_1-2、执行-react-安装命令"><span>1.2、执行 React 安装命令</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>yarn create react-app pc --template typescript</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_1-3、最终目录结构" tabindex="-1"><a class="header-anchor" href="#_1-3、最终目录结构"><span>1.3、最终目录结构</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>├── node_modules          // 依赖文件</span></span>
<span class="line"><span>├── public                // 静态资源目录</span></span>
<span class="line"><span>├── index.html          // html入口</span></span>
<span class="line"><span>├── manifest.json       // pwa配置文件</span></span>
<span class="line"><span>├── robots.txt          // 爬虫规则文件</span></span>
<span class="line"><span>└── src                   // 源码目录</span></span>
<span class="line"><span>└── api                 // 网络层</span></span>
<span class="line"><span>  ├── config            // 网络请求配置</span></span>
<span class="line"><span>  ├── http              // http封装</span></span>
<span class="line"><span>    ├── interface         // 接口定义</span></span>
<span class="line"><span>    ├── modules           // 按模块划分</span></span>
<span class="line"><span>    ├── index.ts          // 统一封装</span></span>
<span class="line"><span>├── assets              // 静态资源</span></span>
<span class="line"><span>├── components          // 全局组件文件夹</span></span>
<span class="line"><span>├── config              // 系统配置文件夹</span></span>
<span class="line"><span>  ├── data                // 数据层</span></span>
<span class="line"><span>  ├── enums               // 枚举</span></span>
<span class="line"><span>  ├── lang      // 多语言                          </span></span>
<span class="line"><span>  ├── layout              // 布局</span></span>
<span class="line"><span>  ├── mock                // mock数据文件夹</span></span>
<span class="line"><span>  ├── routers    // 路由文件夹</span></span>
<span class="line"><span>  ├── store      // 状态管理文件夹</span></span>
<span class="line"><span>  ├── utils      // 工具类文件夹</span></span>
<span class="line"><span>  ├── views      // jsx文件夹</span></span>
<span class="line"><span>  ├── App.tsx    // 入口文件</span></span>
<span class="line"><span>  ├── index.tsx    // 总入口文件</span></span>
<span class="line"><span>  ├── react-app-env.d.ts  // ts兼容文件</span></span>
<span class="line"><span>├── .eslintrc.js     // eslint配置文件</span></span>
<span class="line"><span>├── .gitignore   // git忽略文件配置</span></span>
<span class="line"><span>├── .prettierignore // prettier忽略文件配置</span></span>
<span class="line"><span>├── .craco.config.js   // craco配置文件</span></span>
<span class="line"><span>├── .package.json   </span></span>
<span class="line"><span>├── READNE.md   // 当前文件</span></span>
<span class="line"><span>├── tsconfig.json // ts配置文件</span></span>
<span class="line"><span>├── yarn.lock</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4、启动" tabindex="-1"><a class="header-anchor" href="#_1-4、启动"><span>1.4、启动</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cd pc</span></span>
<span class="line"><span>yarn start</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、安装-craco" tabindex="-1"><a class="header-anchor" href="#_2、安装-craco"><span>2、安装 craco</span></a></h2><h3 id="_2-1、介绍" tabindex="-1"><a class="header-anchor" href="#_2-1、介绍"><span>2.1、介绍</span></a></h3><p><strong>craco 是一个用于扩展 Create React App（CRA）的工具，它允许开发者覆盖和扩展 CRA 的默认配置。</strong></p><h3 id="_2-2、安装" tabindex="-1"><a class="header-anchor" href="#_2-2、安装"><span>2.2、安装</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>yarn add -D @craco/craco</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-3、配置" tabindex="-1"><a class="header-anchor" href="#_2-3、配置"><span>2.3、配置</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 根目录新增craco.config.js</span></span>
<span class="line"><span>const path = require(&#39;path&#39;)</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  // webpack 配置</span></span>
<span class="line"><span>  webpack: {</span></span>
<span class="line"><span>      </span></span>
<span class="line"><span>    // 配置别名</span></span>
<span class="line"><span>    alias: {</span></span>
<span class="line"><span>      &#39;@&#39;: path.resolve(__dirname, &#39;src&#39;)</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 修改打包后的目录</span></span>
<span class="line"><span>    configure: (webpackConfig, { env, paths }) =&gt; {</span></span>
<span class="line"><span>      webpackConfig.output.path = path.resolve(__dirname, &quot;dist&quot;)</span></span>
<span class="line"><span>      paths.appBuild = path.resolve(__dirname, &quot;dist&quot;)</span></span>
<span class="line"><span>      return webpackConfig</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 创建path.json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span>    &quot;baseUrl&quot;: &quot;.&quot;,</span></span>
<span class="line"><span>    &quot;paths&quot;: {</span></span>
<span class="line"><span>      &quot;@/*&quot;: [&quot;src/*&quot;],</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// tsconfig.json添加如下配置</span></span>
<span class="line"><span>&quot;extends&quot;: &quot;./path.json&quot;,</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 修改package.json</span></span>
<span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>  &quot;start&quot;: &quot;craco start&quot;,</span></span>
<span class="line"><span>  &quot;build&quot;: &quot;craco build&quot;,</span></span>
<span class="line"><span>  &quot;test&quot;: &quot;craco test&quot;,</span></span>
<span class="line"><span>  &quot;eject&quot;: &quot;react-scripts eject&quot;,</span></span>
<span class="line"><span>  &quot;lint&quot;: &quot;eslint --cache --max-warnings 0  \\&quot;{src,mock}/**/*.{ts,tsx}\\&quot; --fix&quot;,</span></span>
<span class="line"><span>  &quot;format&quot;: &quot;prettier --write  \\&quot;src/**/*.{js,json,tsx,css,less,scss,html,md}\\&quot;&quot;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、eslint-prettier-代码检测" tabindex="-1"><a class="header-anchor" href="#_3、eslint-prettier-代码检测"><span>3、eslint+prettier（代码检测）</span></a></h2><h3 id="_3-1、介绍" tabindex="-1"><a class="header-anchor" href="#_3-1、介绍"><span>3.1、介绍</span></a></h3><ul><li><strong>ESLint</strong>：是一个 Linting 工具，用于自动检查 JavaScript 代码中的模式，标识出潜在的问题和风格不一致的代码。它通过解析代码生成抽象语法树（AST），然后根据一系列预定义的规则来分析这些 AST，从而识别不符合规范的代码。ESLint 的主要目的是提高代码的质量和一致性，减少因编码风格不统一而导致的错误和混乱。</li><li><strong>Prettier</strong>：是一个代码格式化工具，支持多种编程语言，它支持团队在编写代码时保持统一的风格。Prettier 会按照一套既定的规则来重新打印代码，从而实现统一的代码风格。使用 Prettier 可以确保代码的可读性和一致性，使得团队成员之间的协作更加顺畅。</li></ul><h3 id="_3-2、安装" tabindex="-1"><a class="header-anchor" href="#_3-2、安装"><span>3.2、安装</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 安装eslint 注意eslint版本，这里演示的是v8.x。</span></span>
<span class="line"><span>yarn add -D eslint</span></span>
<span class="line"><span># 初始化eslint</span></span>
<span class="line"><span>yarn eslint --init</span></span>
<span class="line"><span>✔ How would you like to use ESLint? · problems</span></span>
<span class="line"><span>✔ What type of modules does your project use? · esm</span></span>
<span class="line"><span>✔ Which framework does your project use? · react</span></span>
<span class="line"><span>✔ The React plugin doesn&#39;t officially support ESLint v9 yet. What would you like to do? · 8.x</span></span>
<span class="line"><span>✔ Does your project use TypeScript? · typescript</span></span>
<span class="line"><span>✔ Where does your code run? · browser</span></span>
<span class="line"><span>The config that you&#39;ve selected requires the following dependencies:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>eslint@8.x, globals, @eslint/js, typescript-eslint, eslint-plugin-react</span></span>
<span class="line"><span>✔ Would you like to install them now? · No / Yes</span></span>
<span class="line"><span>✔ Which package manager do you want to use? · yarn</span></span>
<span class="line"><span># 安装prettier</span></span>
<span class="line"><span>yarn add -D prettier</span></span>
<span class="line"><span># 安装与ESLint兼容的Prettier插件</span></span>
<span class="line"><span>yarn add -D eslint-config-prettier eslint-plugin-prettier eslint-plugin-typescript</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3、配置" tabindex="-1"><a class="header-anchor" href="#_3-3、配置"><span>3.3、配置</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//.eslintrc.js</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  env: {</span></span>
<span class="line"><span>    browser: true,</span></span>
<span class="line"><span>    es2021: true,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  extends: [&#39;plugin:react/recommended&#39;, &#39;plugin:prettier/recommended&#39;],</span></span>
<span class="line"><span>  parser: &#39;@typescript-eslint/parser&#39;,</span></span>
<span class="line"><span>  parserOptions: {</span></span>
<span class="line"><span>    ecmaFeatures: {</span></span>
<span class="line"><span>      jsx: true,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    ecmaVersion: &#39;latest&#39;,</span></span>
<span class="line"><span>    sourceType: &#39;module&#39;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [&#39;react&#39;, &#39;react-hooks&#39;, &#39;@typescript-eslint/eslint-plugin&#39;, &#39;prettier&#39;],</span></span>
<span class="line"><span>  settings: {</span></span>
<span class="line"><span>    react: {</span></span>
<span class="line"><span>      version: &#39;detect&#39;,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  rules: {</span></span>
<span class="line"><span>    &#39;prettier/prettier&#39;: &#39;error&#39;,</span></span>
<span class="line"><span>    &#39;no-console&#39;: process.env.NODE_ENV === &#39;production&#39; ? &#39;error&#39; : &#39;off&#39;,</span></span>
<span class="line"><span>    &#39;no-debugger&#39;: process.env.NODE_ENV === &#39;production&#39; ? &#39;error&#39; : &#39;off&#39;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// .eslintrc.js</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  printWidth: 100, // 指定代码长度，超出换行</span></span>
<span class="line"><span>  tabWidth: 2, // tab 键的宽度</span></span>
<span class="line"><span>  useTabs: false, // 不使用tab</span></span>
<span class="line"><span>  semi: false, // 结尾加上分号</span></span>
<span class="line"><span>  singleQuote: true, // 使用单引号</span></span>
<span class="line"><span>  quoteProps: &#39;as-needed&#39;, // 要求对象字面量属性是否使用引号包裹,(‘as-needed’: 没有特殊要求，禁止使用，&#39;consistent&#39;: 保持一致 , preserve: 不限制，想用就用)</span></span>
<span class="line"><span>  trailingComma: &#39;es5&#39;, // 确保对象的最后一个属性后有逗号</span></span>
<span class="line"><span>  bracketSpacing: true, // 大括号有空格 { name: &#39;rose&#39; }</span></span>
<span class="line"><span>  arrowParens: &#39;avoid&#39;, // 箭头函数，单个参数添加括号</span></span>
<span class="line"><span>  requirePragma: false, // 是否严格按照文件顶部的特殊注释格式化代码</span></span>
<span class="line"><span>  insertPragma: false, // 是否在格式化的文件顶部插入Pragma标记，以表明该文件被prettier格式化过了</span></span>
<span class="line"><span>  proseWrap: &#39;preserve&#39;, // 按照文件原样折行</span></span>
<span class="line"><span>  htmlWhitespaceSensitivity: &#39;ignore&#39;,</span></span>
<span class="line"><span>  jsxBracketSameLine: false, //html文件的空格敏感度，控制空格是否影响布局// 在jsx中把&#39;&gt;&#39; 是否单独放一行</span></span>
<span class="line"><span>  endOfLine: &#39;auto&#39;, // 结尾 \\n \\r \\n\\r auto</span></span>
<span class="line"><span>  jsxSingleQuote: true, // jsx 语法中使用单引号</span></span>
<span class="line"><span>  singleAttributePerLine: false,</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4、vscode-插件" tabindex="-1"><a class="header-anchor" href="#_3-4、vscode-插件"><span>3.4、vscode 插件</span></a></h3><h4 id="_3-4-1、安装" tabindex="-1"><a class="header-anchor" href="#_3-4-1、安装"><span>3.4.1、安装</span></a></h4><ul><li><strong>eslint</strong></li><li><strong>Prettier - Code formatter</strong></li></ul><h4 id="_3-4-2、配置" tabindex="-1"><a class="header-anchor" href="#_3-4-2、配置"><span>3.4.2、配置</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// vscode settings.json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;editor.formatOnSave&quot;: true,</span></span>
<span class="line"><span>  &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;,</span></span>
<span class="line"><span>  &quot;editor.tabSize&quot;: 2,</span></span>
<span class="line"><span>  &quot;editor.codeActionsOnSave&quot;: {</span></span>
<span class="line"><span>    &quot;source.fixAll&quot;: &quot;explicit&quot;,</span></span>
<span class="line"><span>    &quot;eslint.autoFixOnSave&quot;: &quot;explicit&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;eslint.format.enable&quot;: true,</span></span>
<span class="line"><span>  &quot;[javascript]&quot;: {</span></span>
<span class="line"><span>    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;git.ignoreWindowsGit27Warning&quot;: true,</span></span>
<span class="line"><span>  &quot;[typescriptreact]&quot;: {</span></span>
<span class="line"><span>    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;[typescript]&quot;: {</span></span>
<span class="line"><span>    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;[html]&quot;: {</span></span>
<span class="line"><span>    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;[json]&quot;: {</span></span>
<span class="line"><span>    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;[jsonc]&quot;: {</span></span>
<span class="line"><span>    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;[javascriptreact]&quot;: {</span></span>
<span class="line"><span>    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;prettier.singleAttributePerLine&quot;: true,</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5、使用" tabindex="-1"><a class="header-anchor" href="#_3-5、使用"><span>3.5、使用</span></a></h3><ul><li><strong>全局检测：yarn lint</strong></li><li><strong>全局格式化：yarn format</strong></li><li><strong>ctrl+s 保存文件会自动格式化/报告错误语句</strong></li></ul><h2 id="_4、antd" tabindex="-1"><a class="header-anchor" href="#_4、antd"><span>4、antd</span></a></h2><h4 id="_4-1、安装" tabindex="-1"><a class="header-anchor" href="#_4-1、安装"><span>4.1、安装</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>yarn add antd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_4-2、配置" tabindex="-1"><a class="header-anchor" href="#_4-2、配置"><span>4.2、配置</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// index.tsx</span></span>
<span class="line"><span>import &#39;antd/dist/reset.css&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3、测试" tabindex="-1"><a class="header-anchor" href="#_4-3、测试"><span>4.3、测试</span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// App.tsx</span></span>
<span class="line"><span>import React from &#39;react&#39;</span></span>
<span class="line"><span>import { Button } from &#39;antd&#39;</span></span>
<span class="line"><span>function App() {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;Button type=&#39;primary&#39;&gt;Button&lt;/Button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default App</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、utils-工具类" tabindex="-1"><a class="header-anchor" href="#_5、utils-工具类"><span>5、utils 工具类</span></a></h2><ul><li><strong>写这个的目的是为了衔接后面的内容</strong></li></ul><h3 id="_5-1、封装全局语言管理" tabindex="-1"><a class="header-anchor" href="#_5-1、封装全局语言管理"><span>5.1、封装全局语言管理</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// src/utils/lang.ts</span></span>
<span class="line"><span>const key = &#39;lang&#39;</span></span>
<span class="line"><span>const setLang = (lang: string) =&gt; {</span></span>
<span class="line"><span>  return window.localStorage.setItem(key, lang)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const getLang = () =&gt; {</span></span>
<span class="line"><span>  return window.localStorage.getItem(key)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const removeLang = () =&gt; {</span></span>
<span class="line"><span>  return window.localStorage.removeItem(key)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export { setLang, getLang, removeLang }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-1、统一出口" tabindex="-1"><a class="header-anchor" href="#_5-1、统一出口"><span>5.1、统一出口</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// src/utils/index.ts</span></span>
<span class="line"><span>import { setLang, getLang, removeLang } from &#39;@utils/lang&#39;</span></span>
<span class="line"><span>export { setLang, getLang, removeLang }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、mobx-状态管理" tabindex="-1"><a class="header-anchor" href="#_6、mobx-状态管理"><span>6、mobx（状态管理）</span></a></h2><h3 id="_6-1、安装" tabindex="-1"><a class="header-anchor" href="#_6-1、安装"><span>6.1、安装</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>yarn add mobx mobx-react-lite</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_6-2、使用" tabindex="-1"><a class="header-anchor" href="#_6-2、使用"><span>6.2、使用</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// src/store/common/lang.Store.ts</span></span>
<span class="line"><span>import { makeAutoObservable } from &#39;mobx&#39;</span></span>
<span class="line"><span>import { setLang, getLang } from &#39;@/utils&#39;</span></span>
<span class="line"><span>import i18n from &#39;i18next&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class LangStore {</span></span>
<span class="line"><span>  lang: string = getLang()</span></span>
<span class="line"><span>  constructor() {</span></span>
<span class="line"><span>    makeAutoObservable(this)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  getLang = () =&gt; {</span></span>
<span class="line"><span>    return this.lang</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  setLang = (lang: string) =&gt; {</span></span>
<span class="line"><span>    this.lang = lang</span></span>
<span class="line"><span>    i18n.changeLanguage(this.lang)</span></span>
<span class="line"><span>    setLang(this.lang)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default LangStore</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3、统一出口" tabindex="-1"><a class="header-anchor" href="#_6-3、统一出口"><span>6.3、统一出口</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// src/store/index.ts</span></span>
<span class="line"><span>import React from &#39;react&#39;</span></span>
<span class="line"><span>import LangStore from &#39;@store/common/lang.Store&#39;</span></span>
<span class="line"><span>class RootStore {</span></span>
<span class="line"><span>  langStore</span></span>
<span class="line"><span>  constructor() {</span></span>
<span class="line"><span>    this.langStore = new LangStore()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const rootStore = new RootStore()</span></span>
<span class="line"><span>const context = React.createContext(rootStore)</span></span>
<span class="line"><span>const useStore = () =&gt; React.useContext(context)</span></span>
<span class="line"><span>export { useStore }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7、i18n-国际化" tabindex="-1"><a class="header-anchor" href="#_7、i18n-国际化"><span>7、i18n（国际化）</span></a></h2><h3 id="_7-1、安装" tabindex="-1"><a class="header-anchor" href="#_7-1、安装"><span>7.1、安装</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>yarn add react-i18next i18next --save</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_7-2、语言包" tabindex="-1"><a class="header-anchor" href="#_7-2、语言包"><span>7.2、语言包</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 暂时先不按照业务拆模块。</span></span>
<span class="line"><span>// src/lang/locales/en.json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;common.t1&quot;: &quot;button&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// src/lang/locales/zh.json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;common.t1&quot;: &quot;按钮&quot;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-3、封装" tabindex="-1"><a class="header-anchor" href="#_7-3、封装"><span>7.3、封装</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// src/lang/index.ts</span></span>
<span class="line"><span>import i18n from &#39;i18next&#39;</span></span>
<span class="line"><span>import { initReactI18next } from &#39;react-i18next&#39;</span></span>
<span class="line"><span>import { getLang } from &#39;@utils/index&#39;</span></span>
<span class="line"><span>// 导入翻译文件</span></span>
<span class="line"><span>import en from &#39;./locales/en.json&#39;</span></span>
<span class="line"><span>import zh from &#39;./locales/zh.json&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 拼接配置文件</span></span>
<span class="line"><span>const resources = {</span></span>
<span class="line"><span>  en: {</span></span>
<span class="line"><span>    translation: en,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  zh: {</span></span>
<span class="line"><span>    translation: zh,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 默认语言</span></span>
<span class="line"><span>const lng = getLang()</span></span>
<span class="line"><span>console.log(lng)</span></span>
<span class="line"><span>// 配置i18next</span></span>
<span class="line"><span>i18n</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 将 i18n 实例传递给 react-i18next</span></span>
<span class="line"><span>  .use(initReactI18next)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 初始化配置项</span></span>
<span class="line"><span>  .init({</span></span>
<span class="line"><span>    resources,</span></span>
<span class="line"><span>    fallbackLng: lng,</span></span>
<span class="line"><span>    lng: lng,</span></span>
<span class="line"><span>    debug: true,</span></span>
<span class="line"><span>    interpolation: {</span></span>
<span class="line"><span>      escapeValue: false,</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>export default i18n</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-4、使用" tabindex="-1"><a class="header-anchor" href="#_7-4、使用"><span>7.4、使用</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// index.tsx</span></span>
<span class="line"><span>import &#39;./lang/index&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// App.tsx</span></span>
<span class="line"><span>import React from &#39;react&#39;</span></span>
<span class="line"><span>import { Button } from &#39;antd&#39;</span></span>
<span class="line"><span>import { useTranslation } from &#39;react-i18next&#39;</span></span>
<span class="line"><span>import { useStore } from &#39;@/store&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function App() {</span></span>
<span class="line"><span>  const { t } = useTranslation() // 使用useTranslation钩子获取t函数</span></span>
<span class="line"><span>  const { langStore } = useStore() // 使用useStore钩子获取lang状态</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;Button onClick={() =&gt; langStore.setLang(&#39;en&#39;)} type=&#39;primary&#39;&gt;</span></span>
<span class="line"><span>        英文{t(&#39;common.t1&#39;)}</span></span>
<span class="line"><span>      &lt;/Button&gt;</span></span>
<span class="line"><span>      &lt;Button onClick={() =&gt; langStore.setLang(&#39;zh&#39;)} type=&#39;primary&#39;&gt;</span></span>
<span class="line"><span>        中文{t(&#39;common.t1&#39;)}</span></span>
<span class="line"><span>      &lt;/Button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default App</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8、sass-css-预处理器" tabindex="-1"><a class="header-anchor" href="#_8、sass-css-预处理器"><span>8、sass（css 预处理器）</span></a></h2><h3 id="_8-1、安装" tabindex="-1"><a class="header-anchor" href="#_8-1、安装"><span>8.1、安装</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>yarn add sass -D</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_8-2、使用" tabindex="-1"><a class="header-anchor" href="#_8-2、使用"><span>8.2、使用</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// src/assets/style/index.scss</span></span>
<span class="line"><span>$red: red;</span></span>
<span class="line"><span>body {</span></span>
<span class="line"><span>  color: $red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// index.tsx</span></span>
<span class="line"><span>import &#39;@assets/style/index.scss&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9、tailwindcss-css-框架" tabindex="-1"><a class="header-anchor" href="#_9、tailwindcss-css-框架"><span>9、tailwindcss（css 框架）</span></a></h2><h3 id="_9-1、安装" tabindex="-1"><a class="header-anchor" href="#_9-1、安装"><span>9.1、安装</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>yarn add tailwindcss postcss autoprefixer -D</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_9-2、初始化" tabindex="-1"><a class="header-anchor" href="#_9-2、初始化"><span>9.2、初始化</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>yarn tailwindcss init</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_9-3、配置" tabindex="-1"><a class="header-anchor" href="#_9-3、配置"><span>9.3、配置</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// tailwind.config.js</span></span>
<span class="line"><span>/** @type {import(&#39;tailwindcss&#39;).Config} */</span></span>
<span class="line"><span>module.exports = {</span></span>
<span class="line"><span>  purge: [&#39;./src/**/*.{js,jsx,ts,tsx}&#39;, &#39;./public/**/*.html&#39;],</span></span>
<span class="line"><span>  content: [&#39;./src/**/*.{js,jsx,ts,tsx}&#39;, &#39;./public/**/*.html&#39;],</span></span>
<span class="line"><span>  theme: {</span></span>
<span class="line"><span>    extend: {},</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  plugins: [],</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>// craco.config.js</span></span>
<span class="line"><span>style: {</span></span>
<span class="line"><span>  postcssOptions: {</span></span>
<span class="line"><span>    plugins: [</span></span>
<span class="line"><span>      require(&#39;tailwindcss&#39;),</span></span>
<span class="line"><span>      require(&#39;autoprefixer&#39;),</span></span>
<span class="line"><span>    ],</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>},</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-4、使用" tabindex="-1"><a class="header-anchor" href="#_9-4、使用"><span>9.4、使用</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// src/assets/css/common.scss</span></span>
<span class="line"><span>@tailwind base;</span></span>
<span class="line"><span>@tailwind components;</span></span>
<span class="line"><span>@tailwind utilities;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// index.tsx</span></span>
<span class="line"><span>import &#39;@assets/css/common.scss&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// App.tsx</span></span>
<span class="line"><span>&lt;h1 className=&#39;text-3xl font-bold underline&#39;&gt;Hello world!&lt;/h1&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10、react-router-dom-路由" tabindex="-1"><a class="header-anchor" href="#_10、react-router-dom-路由"><span>10、react-router-dom（路由）</span></a></h2><h3 id="_10-1、安装" tabindex="-1"><a class="header-anchor" href="#_10-1、安装"><span>10.1、安装</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>yarn add react-router-dom</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_10-2、封装" tabindex="-1"><a class="header-anchor" href="#_10-2、封装"><span>10.2、封装</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// src\\components\\public\\lazyLoad.tsx</span></span>
<span class="line"><span>import React, { Suspense } from &#39;react&#39;</span></span>
<span class="line"><span>import { Spin } from &#39;antd&#39;</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @description 路由懒加载</span></span>
<span class="line"><span> * @param {Element} Comp 需要访问的组件</span></span>
<span class="line"><span> * @returns element</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>const lazyLoad = (Comp: React.LazyExoticComponent&lt;any&gt;): React.ReactNode =&gt; {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;Suspense</span></span>
<span class="line"><span>      fallback={</span></span>
<span class="line"><span>        &lt;Spin</span></span>
<span class="line"><span>          size=&#39;large&#39;</span></span>
<span class="line"><span>          style={{
            display: &#39;flex&#39;,
            alignItems: &#39;center&#39;,
            justifyContent: &#39;center&#39;,
            height: &#39;100%&#39;,
          }}</span></span>
<span class="line"><span>        /&gt;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    &gt;</span></span>
<span class="line"><span>      &lt;Comp /&gt;</span></span>
<span class="line"><span>    &lt;/Suspense&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default lazyLoad</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//  \\src\\interface\\route.ts  路由接口定义</span></span>
<span class="line"><span>import { NonIndexRouteObject } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @description 路由类型</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export interface RouteObject extends NonIndexRouteObject {</span></span>
<span class="line"><span>  keepAlive?: boolean</span></span>
<span class="line"><span>  children?: RouteObject[]</span></span>
<span class="line"><span>  requiresAuth?: boolean</span></span>
<span class="line"><span>  title?: string</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//  \\src\\components\\error\\404.tsx</span></span>
<span class="line"><span>import { Button, Result } from &#39;antd&#39;</span></span>
<span class="line"><span>import { useNavigate } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span>import React from &#39;react&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const NotFound = () =&gt; {</span></span>
<span class="line"><span>  const navigate = useNavigate()</span></span>
<span class="line"><span>  const goHome = () =&gt; {</span></span>
<span class="line"><span>    navigate(&#39;/&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;Result</span></span>
<span class="line"><span>      status=&#39;404&#39;</span></span>
<span class="line"><span>      title=&#39;404&#39;</span></span>
<span class="line"><span>      subTitle=&#39;Sorry, the page you visited does not exist.&#39;</span></span>
<span class="line"><span>      extra={</span></span>
<span class="line"><span>        &lt;Button type=&#39;primary&#39; onClick={goHome}&gt;</span></span>
<span class="line"><span>          Back Home</span></span>
<span class="line"><span>        &lt;/Button&gt;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    /&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default NotFound</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// /src/routers/moudles/404.tsx</span></span>
<span class="line"><span>import { lazy } from &#39;react&#39;</span></span>
<span class="line"><span>import { RouteObject } from &#39;@/interface/route&#39;</span></span>
<span class="line"><span>import lazyLoad from &#39;@@/src/components/public/lazyLoad&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 错误页面模块</span></span>
<span class="line"><span>const errorRouter: Array&lt;RouteObject&gt; = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;/404&#39;,</span></span>
<span class="line"><span>    title: &#39;404页面&#39;,</span></span>
<span class="line"><span>    element: lazyLoad(lazy(() =&gt; import(&#39;@/components/error/404&#39;))),</span></span>
<span class="line"><span>    requiresAuth: false,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default errorRouter</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// /src/routers/index.ts</span></span>
<span class="line"><span>import { useRoutes, DataRouteObject } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span>import { lazy } from &#39;react&#39;</span></span>
<span class="line"><span>import lazyLoad from &#39;@@/src/components/public/lazyLoad&#39;</span></span>
<span class="line"><span>import { RouteObject } from &#39;@/interface/route&#39;</span></span>
<span class="line"><span>import notFoundRouter from &#39;@/routers/moudles/404&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 路由集合</span></span>
<span class="line"><span>export const rootRouter: RouteObject[] = [</span></span>
<span class="line"><span>  ...notFoundRouter,</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;*&#39;,</span></span>
<span class="line"><span>    element: lazyLoad(lazy(() =&gt; import(&#39;@/components/error/404&#39;))),</span></span>
<span class="line"><span>    title: &#39;404&#39;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>const Router = () =&gt; {</span></span>
<span class="line"><span>  const routes = useRoutes(rootRouter)</span></span>
<span class="line"><span>  return routes</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default Router</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11、环境变量" tabindex="-1"><a class="header-anchor" href="#_11、环境变量"><span>11、环境变量</span></a></h2><h3 id="_11-1、创建" tabindex="-1"><a class="header-anchor" href="#_11-1、创建"><span>11.1、创建</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//.env.production</span></span>
<span class="line"><span>REACT_APP_API_URL=https://api.muchui.net</span></span>
<span class="line"><span>REACT_APP_CDN_URL=https://static.muchui.net</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//.env.development</span></span>
<span class="line"><span>REACT_APP_API_URL=http://localhost:3000/api</span></span>
<span class="line"><span>REACT_APP_CDN_URL=https://static.muchui.net</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-2、使用" tabindex="-1"><a class="header-anchor" href="#_11-2、使用"><span>11.2、使用</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// package.json 修改build命令</span></span>
<span class="line"><span>&quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;start&quot;: &quot;craco start&quot;,</span></span>
<span class="line"><span>    &quot;build:development&quot;: &quot;REACT_APP_ENV=development craco build&quot;,</span></span>
<span class="line"><span>    &quot;build:production&quot;: &quot;REACT_APP_ENV=production craco build&quot;,</span></span>
<span class="line"><span>    &quot;test&quot;: &quot;react-scripts test&quot;,</span></span>
<span class="line"><span>    &quot;eject&quot;: &quot;craco eject&quot;,</span></span>
<span class="line"><span>    &quot;lint&quot;: &quot;eslint --cache --max-warnings 0  \\&quot;{src,mock}/**/*.{ts,tsx}\\&quot; --fix&quot;,</span></span>
<span class="line"><span>    &quot;format&quot;: &quot;prettier --write  \\&quot;src/**/*.{js,json,tsx,css,less,scss,html,md}\\&quot;&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>// xxx.tsx</span></span>
<span class="line"><span>let logoImg = process.env.REACT_APP_CDN_URL + &#39;/logo.png&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12、axios" tabindex="-1"><a class="header-anchor" href="#_12、axios"><span>12、axios</span></a></h2><h3 id="_12-1、安装" tabindex="-1"><a class="header-anchor" href="#_12-1、安装"><span>12.1、安装</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>yarn add axios</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_12-2、封装" tabindex="-1"><a class="header-anchor" href="#_12-2、封装"><span>12.2、封装</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 封装要素：</span></span>
<span class="line"><span>// 1、超时处理</span></span>
<span class="line"><span>// 2、重试机制</span></span>
<span class="line"><span>// 3、取消重复请求</span></span>
<span class="line"><span>// 4、取消请求</span></span>
<span class="line"><span>// 5、数据缓存 --- 可以在状态管理层做</span></span>
<span class="line"><span>// 6、请求拦截器</span></span>
<span class="line"><span>// 7、响应拦截器</span></span>
<span class="line"><span>// 8、请求配置</span></span>
<span class="line"><span>// 9、错误处理</span></span>
<span class="line"><span>// 10、用户反馈</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// src/type/http 类型定义</span></span>
<span class="line"><span>import { AxiosRequestConfig } from &#39;axios&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> *  扩展AxiosRequestConfig类型</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export interface MOptions extends AxiosRequestConfig {</span></span>
<span class="line"><span>  rawData?: boolean // 是否返回原生响应数据</span></span>
<span class="line"><span>  ignoreRepeat?: boolean // 是否忽略重复请求</span></span>
<span class="line"><span>  withToken?: boolean // 是否携带token</span></span>
<span class="line"><span>  codeMessageShow?: boolean // 是否显示错误信息</span></span>
<span class="line"><span>  retryConfig?: {</span></span>
<span class="line"><span>    isOpen: boolean // 是否开启重连</span></span>
<span class="line"><span>    count: number // 重连次数</span></span>
<span class="line"><span>    time: number // 每次请求间隔时间</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> *  定义返回类型</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export interface ResultData&lt;T = any&gt; {</span></span>
<span class="line"><span>  code: number</span></span>
<span class="line"><span>  message: string</span></span>
<span class="line"><span>  result: T</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// src/utils/http.ts</span></span>
<span class="line"><span>import axios, {</span></span>
<span class="line"><span>  AxiosRequestConfig,</span></span>
<span class="line"><span>  AxiosInstance,</span></span>
<span class="line"><span>  AxiosResponse,</span></span>
<span class="line"><span>  AxiosError,</span></span>
<span class="line"><span>  InternalAxiosRequestConfig,</span></span>
<span class="line"><span>} from &#39;axios&#39;</span></span>
<span class="line"><span>import { MOptions, ResultData } from &#39;@/type/http&#39;</span></span>
<span class="line"><span>import { message } from &#39;antd&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const pendingMap = new Map&lt;string, AbortController&gt;()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class AxiosRequest {</span></span>
<span class="line"><span>  private service: AxiosInstance</span></span>
<span class="line"><span>  private options: MOptions</span></span>
<span class="line"><span>  constructor(options: MOptions) {</span></span>
<span class="line"><span>    this.service = axios.create(options)</span></span>
<span class="line"><span>    this.options = options</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    this.interceptorHandle()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  interceptorHandle() {</span></span>
<span class="line"><span>    // 请求拦截</span></span>
<span class="line"><span>    this.service.interceptors.request.use(this.requestInterceptor, (error: AxiosError) =&gt; {</span></span>
<span class="line"><span>      return Promise.reject(error)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 响应拦截</span></span>
<span class="line"><span>    this.service.interceptors.response.use(this.responseInterceptor, this.responeErrorInterceptor)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 请求拦截器</span></span>
<span class="line"><span>  private async requestInterceptor(config: InternalAxiosRequestConfig) {</span></span>
<span class="line"><span>    const ignoreRepeat = (config as unknown as any)?.ignoreRepeat ?? this.options.ignoreRepeat</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 是否忽略重复请求</span></span>
<span class="line"><span>    if (ignoreRepeat) {</span></span>
<span class="line"><span>      addPending(config)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 自动携带token</span></span>
<span class="line"><span>    // config.headers.Authorization = &#39;Bearer &#39; + localStorage.getItem(&#39;token&#39;)</span></span>
<span class="line"><span>    return config</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 响应拦截器</span></span>
<span class="line"><span>  private async responseInterceptor(res: AxiosResponse) {</span></span>
<span class="line"><span>    // 取消请求</span></span>
<span class="line"><span>    res &amp;&amp; removePending(res.config)</span></span>
<span class="line"><span>    let resultData</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 是否获取原数据</span></span>
<span class="line"><span>    if (!this.options.rawData) {</span></span>
<span class="line"><span>      resultData = res.data</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 如果返回结果不是200 并且需要弹错误提示</span></span>
<span class="line"><span>    if (this.options.codeMessageShow &amp;&amp; res.data &amp;&amp; res.data.code !== 200) {</span></span>
<span class="line"><span>      message.error(res.data.message) // 需要根据状态码获取对应多语言</span></span>
<span class="line"><span>      return Promise.reject(resultData)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return resultData</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 错误拦截器</span></span>
<span class="line"><span>  private async responeErrorInterceptor(err: AxiosError) {</span></span>
<span class="line"><span>    // 取消的重复请求</span></span>
<span class="line"><span>    if (axios.isCancel(err)) {</span></span>
<span class="line"><span>      return Promise.reject(err)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 如果是超时，重试</span></span>
<span class="line"><span>    if ((err as AxiosError).code === &#39;ECONNABORTED&#39;) {</span></span>
<span class="line"><span>      return retry(this.service, err as AxiosError)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      // 非超时走状态码处理</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      httpErrorStatusHandle(err)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // * 常用请求方法封装</span></span>
<span class="line"><span>  get&lt;T&gt;(url: string, params?: object, _object = {}): Promise&lt;ResultData&lt;T&gt;&gt; {</span></span>
<span class="line"><span>    console.log(url, { params, ..._object })</span></span>
<span class="line"><span>    return this.service.get(url, { params, ..._object })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  post&lt;T&gt;(url: string, params?: object, _object = {}): Promise&lt;ResultData&lt;T&gt;&gt; {</span></span>
<span class="line"><span>    return this.service.post(url, params, _object)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  put&lt;T&gt;(url: string, params?: object, _object = {}): Promise&lt;ResultData&lt;T&gt;&gt; {</span></span>
<span class="line"><span>    return this.service.put(url, params, _object)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  delete&lt;T&gt;(url: string, params?: any, _object = {}): Promise&lt;ResultData&lt;T&gt;&gt; {</span></span>
<span class="line"><span>    return this.service.delete(url, { params, ..._object })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @description 添加请求</span></span>
<span class="line"><span> * @param config</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function addPending(config: AxiosRequestConfig) {</span></span>
<span class="line"><span>  removePending(config)</span></span>
<span class="line"><span>  const url = getPendingKey(config)</span></span>
<span class="line"><span>  const abortController = new AbortController()</span></span>
<span class="line"><span>  config.signal = abortController.signal</span></span>
<span class="line"><span>  if (!pendingMap.has(url)) {</span></span>
<span class="line"><span>    pendingMap.set(url, abortController)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @description 删除请求</span></span>
<span class="line"><span> * @param config</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function removePending(config: AxiosRequestConfig) {</span></span>
<span class="line"><span>  const url = getPendingKey(config)</span></span>
<span class="line"><span>  if (pendingMap.has(url)) {</span></span>
<span class="line"><span>    const abortController = pendingMap.get(url)</span></span>
<span class="line"><span>    abortController?.abort()</span></span>
<span class="line"><span>    pendingMap.delete(url)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @description 请求唯一标识</span></span>
<span class="line"><span> * @param config</span></span>
<span class="line"><span> * @returns</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function getPendingKey(config: AxiosRequestConfig) {</span></span>
<span class="line"><span>  return [config.url, config.method].join(&#39;&amp;&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @description 重试处理</span></span>
<span class="line"><span> * @param instance</span></span>
<span class="line"><span> * @param err</span></span>
<span class="line"><span> * @returns</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>async function retry(instance: AxiosInstance, err: AxiosError) {</span></span>
<span class="line"><span>  const config: any = err.config</span></span>
<span class="line"><span>  const { time, count } = config.retryConfig ?? {}</span></span>
<span class="line"><span>  config.currentCount = config.currentCount ?? 0</span></span>
<span class="line"><span>  console.log(\`接口：\${config.url},第\${config.currentCount}次重连\`)</span></span>
<span class="line"><span>  if (config.currentCount &gt;= count) {</span></span>
<span class="line"><span>    return Promise.reject(err)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  config.currentCount++</span></span>
<span class="line"><span>  await wait(time)</span></span>
<span class="line"><span>  return await instance(config)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @description 重试间隔时间</span></span>
<span class="line"><span> * @param time</span></span>
<span class="line"><span> * @returns</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function wait(time: number) {</span></span>
<span class="line"><span>  return new Promise(resolve =&gt; setTimeout(resolve, time))</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @description 处理异常</span></span>
<span class="line"><span> * @param err</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>function httpErrorStatusHandle(err: AxiosError) {</span></span>
<span class="line"><span>  let message = &#39;&#39;</span></span>
<span class="line"><span>  if (err &amp;&amp; err.response) {</span></span>
<span class="line"><span>    switch (err.response.status) {</span></span>
<span class="line"><span>      case 302:</span></span>
<span class="line"><span>        message = &#39;接口重定向！&#39;</span></span>
<span class="line"><span>        break</span></span>
<span class="line"><span>      case 400:</span></span>
<span class="line"><span>        message = &#39;接口参数不正确！&#39;</span></span>
<span class="line"><span>        break</span></span>
<span class="line"><span>      case 401:</span></span>
<span class="line"><span>        message = &#39;未登录！&#39;</span></span>
<span class="line"><span>        break</span></span>
<span class="line"><span>      case 403:</span></span>
<span class="line"><span>        message = &#39;无权限！&#39;</span></span>
<span class="line"><span>        break</span></span>
<span class="line"><span>      case 404:</span></span>
<span class="line"><span>        message = \`接口地址不正确！\`</span></span>
<span class="line"><span>        break</span></span>
<span class="line"><span>      case 500:</span></span>
<span class="line"><span>        message = &#39;服务器内部错误！&#39;</span></span>
<span class="line"><span>        break</span></span>
<span class="line"><span>      case 502:</span></span>
<span class="line"><span>        message = &#39;网关错误！&#39;</span></span>
<span class="line"><span>        break</span></span>
<span class="line"><span>      case 503:</span></span>
<span class="line"><span>        message = &#39;服务不可用！&#39;</span></span>
<span class="line"><span>        break</span></span>
<span class="line"><span>      case 504:</span></span>
<span class="line"><span>        message = &#39;服务暂时无法访问，请稍后再试！&#39;</span></span>
<span class="line"><span>        break</span></span>
<span class="line"><span>      default:</span></span>
<span class="line"><span>        message = &#39;异常问题，请联系管理员！&#39;</span></span>
<span class="line"><span>        break</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if (err.code === &#39;ERR_NETWORK&#39;)</span></span>
<span class="line"><span>    message = window.navigator.onLine ? &#39;服务端异常！&#39; : &#39;网络异常，请检查您的网络！&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  console.log(message)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const axiosRequest = new AxiosRequest({</span></span>
<span class="line"><span>  rawData: false,</span></span>
<span class="line"><span>  ignoreRepeat: true,</span></span>
<span class="line"><span>  withToken: true,</span></span>
<span class="line"><span>  codeMessageShow: true,</span></span>
<span class="line"><span>  retryConfig: {</span></span>
<span class="line"><span>    isOpen: true,</span></span>
<span class="line"><span>    count: 5,</span></span>
<span class="line"><span>    time: 1000,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  timeout: 3000,</span></span>
<span class="line"><span>  withCredentials: true,</span></span>
<span class="line"><span>  baseURL: &#39;https://api.muchui.net&#39;,</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default axiosRequest</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_12-3、使用" tabindex="-1"><a class="header-anchor" href="#_12-3、使用"><span>12.3、使用</span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// src/api/moudles/test.ts</span></span>
<span class="line"><span>import { axiosRequest } from &#39;@/utils&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * @name 测试模块</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>export const testApi = (params: any) =&gt; {</span></span>
<span class="line"><span>  console.log(params)</span></span>
<span class="line"><span>  return axiosRequest.get&lt;any&gt;(&#39;/test&#39;, params)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// src/routers/moudles/home.ts</span></span>
<span class="line"><span>import { lazy } from &#39;react&#39;</span></span>
<span class="line"><span>import { RouteObject } from &#39;@@/src/type/route&#39;</span></span>
<span class="line"><span>import lazyLoad from &#39;@@/src/components/public/lazyLoad&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 错误页面模块</span></span>
<span class="line"><span>const errorRouter: Array&lt;RouteObject&gt; = [</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;/home&#39;,</span></span>
<span class="line"><span>    title: &#39;首页&#39;,</span></span>
<span class="line"><span>    element: lazyLoad(lazy(() =&gt; import(&#39;@/views/home&#39;))),</span></span>
<span class="line"><span>    requiresAuth: false,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default errorRouter</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// src/routers/index.ts</span></span>
<span class="line"><span>import { useRoutes, DataRouteObject } from &#39;react-router-dom&#39;</span></span>
<span class="line"><span>import { lazy } from &#39;react&#39;</span></span>
<span class="line"><span>import lazyLoad from &#39;@@/src/components/public/lazyLoad&#39;</span></span>
<span class="line"><span>import { RouteObject } from &#39;@@/src/type/route&#39;</span></span>
<span class="line"><span>import notFoundRouter from &#39;@/routers/moudles/404&#39;</span></span>
<span class="line"><span>import homeRouter from &#39;@/routers/moudles/home&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 路由集合</span></span>
<span class="line"><span>export const rootRouter: RouteObject[] = [</span></span>
<span class="line"><span>  ...notFoundRouter,</span></span>
<span class="line"><span>  ...homeRouter,</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    path: &#39;*&#39;,</span></span>
<span class="line"><span>    element: lazyLoad(lazy(() =&gt; import(&#39;@/components/error/404&#39;))),</span></span>
<span class="line"><span>    title: &#39;404&#39;,</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>const Router = () =&gt; {</span></span>
<span class="line"><span>  const routes = useRoutes(rootRouter)</span></span>
<span class="line"><span>  return routes</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default Router</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// src/views/home/index.tsx</span></span>
<span class="line"><span>import React from &#39;react&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import &#39;./index.scss&#39;</span></span>
<span class="line"><span>import { testApi } from &#39;@/api&#39;</span></span>
<span class="line"><span>const test = async () =&gt; {</span></span>
<span class="line"><span>  let data: any = await testApi({ test: 1 })</span></span>
<span class="line"><span>  console.log(data)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>const Home = () =&gt; {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div className=&#39;home&#39; onClick={() =&gt; test()}&gt;</span></span>
<span class="line"><span>      哈哈哈</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>export default Home</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最后" tabindex="-1"><a class="header-anchor" href="#最后"><span>最后</span></a></h2><p><strong>还有一些其他组件，比如：websocket、web worker、tradingview 等等的封装，后面用到的时候单独写。</strong></p>`,99),p=[l];function d(c,r){return a(),n("div",null,p)}const u=s(e,[["render",d],["__file","202408131237652671.html.vue"]]),o=JSON.parse('{"path":"/react/202408131237652671.html","title":"react+ts+antd项目搭建","lang":"zh-CN","frontmatter":{"title":"react+ts+antd项目搭建","category":["react"],"date":"2024-05-15T00:00:00.000Z","tag":["前端","框架","ts"],"star":true,"description":"前言 部分组件的配置安装方法可能随着 react 迭代有所调整，具体可以参考各个组件的官方文档 git 地址：https://github.com/youngerhe/mbit-pc 1、安装 React 1.1、介绍 React 是一个由 Facebook 在 2013 年推出的开源 JavaScript 库，它主要用于构建用户界面。 1.2、执行 ...","head":[["meta",{"property":"og:url","content":"https://github.com/youngerhe/react/202408131237652671.html"}],["meta",{"property":"og:site_name","content":"木锤"}],["meta",{"property":"og:title","content":"react+ts+antd项目搭建"}],["meta",{"property":"og:description","content":"前言 部分组件的配置安装方法可能随着 react 迭代有所调整，具体可以参考各个组件的官方文档 git 地址：https://github.com/youngerhe/mbit-pc 1、安装 React 1.1、介绍 React 是一个由 Facebook 在 2013 年推出的开源 JavaScript 库，它主要用于构建用户界面。 1.2、执行 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-24T03:43:57.000Z"}],["meta",{"property":"article:author","content":"Mr.He"}],["meta",{"property":"article:tag","content":"前端"}],["meta",{"property":"article:tag","content":"框架"}],["meta",{"property":"article:tag","content":"ts"}],["meta",{"property":"article:published_time","content":"2024-05-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-24T03:43:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"react+ts+antd项目搭建\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-24T03:43:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.He\\",\\"url\\":\\"/about/intro.html\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"1、安装 React","slug":"_1、安装-react","link":"#_1、安装-react","children":[{"level":3,"title":"1.1、介绍","slug":"_1-1、介绍","link":"#_1-1、介绍","children":[]},{"level":3,"title":"1.2、执行 React 安装命令","slug":"_1-2、执行-react-安装命令","link":"#_1-2、执行-react-安装命令","children":[]},{"level":3,"title":"1.3、最终目录结构","slug":"_1-3、最终目录结构","link":"#_1-3、最终目录结构","children":[]},{"level":3,"title":"1.4、启动","slug":"_1-4、启动","link":"#_1-4、启动","children":[]}]},{"level":2,"title":"2、安装 craco","slug":"_2、安装-craco","link":"#_2、安装-craco","children":[{"level":3,"title":"2.1、介绍","slug":"_2-1、介绍","link":"#_2-1、介绍","children":[]},{"level":3,"title":"2.2、安装","slug":"_2-2、安装","link":"#_2-2、安装","children":[]},{"level":3,"title":"2.3、配置","slug":"_2-3、配置","link":"#_2-3、配置","children":[]}]},{"level":2,"title":"3、eslint+prettier（代码检测）","slug":"_3、eslint-prettier-代码检测","link":"#_3、eslint-prettier-代码检测","children":[{"level":3,"title":"3.1、介绍","slug":"_3-1、介绍","link":"#_3-1、介绍","children":[]},{"level":3,"title":"3.2、安装","slug":"_3-2、安装","link":"#_3-2、安装","children":[]},{"level":3,"title":"3.3、配置","slug":"_3-3、配置","link":"#_3-3、配置","children":[]},{"level":3,"title":"3.4、vscode 插件","slug":"_3-4、vscode-插件","link":"#_3-4、vscode-插件","children":[]},{"level":3,"title":"3.5、使用","slug":"_3-5、使用","link":"#_3-5、使用","children":[]}]},{"level":2,"title":"4、antd","slug":"_4、antd","link":"#_4、antd","children":[]},{"level":2,"title":"5、utils 工具类","slug":"_5、utils-工具类","link":"#_5、utils-工具类","children":[{"level":3,"title":"5.1、封装全局语言管理","slug":"_5-1、封装全局语言管理","link":"#_5-1、封装全局语言管理","children":[]},{"level":3,"title":"5.1、统一出口","slug":"_5-1、统一出口","link":"#_5-1、统一出口","children":[]}]},{"level":2,"title":"6、mobx（状态管理）","slug":"_6、mobx-状态管理","link":"#_6、mobx-状态管理","children":[{"level":3,"title":"6.1、安装","slug":"_6-1、安装","link":"#_6-1、安装","children":[]},{"level":3,"title":"6.2、使用","slug":"_6-2、使用","link":"#_6-2、使用","children":[]},{"level":3,"title":"6.3、统一出口","slug":"_6-3、统一出口","link":"#_6-3、统一出口","children":[]}]},{"level":2,"title":"7、i18n（国际化）","slug":"_7、i18n-国际化","link":"#_7、i18n-国际化","children":[{"level":3,"title":"7.1、安装","slug":"_7-1、安装","link":"#_7-1、安装","children":[]},{"level":3,"title":"7.2、语言包","slug":"_7-2、语言包","link":"#_7-2、语言包","children":[]},{"level":3,"title":"7.3、封装","slug":"_7-3、封装","link":"#_7-3、封装","children":[]},{"level":3,"title":"7.4、使用","slug":"_7-4、使用","link":"#_7-4、使用","children":[]}]},{"level":2,"title":"8、sass（css 预处理器）","slug":"_8、sass-css-预处理器","link":"#_8、sass-css-预处理器","children":[{"level":3,"title":"8.1、安装","slug":"_8-1、安装","link":"#_8-1、安装","children":[]},{"level":3,"title":"8.2、使用","slug":"_8-2、使用","link":"#_8-2、使用","children":[]}]},{"level":2,"title":"9、tailwindcss（css 框架）","slug":"_9、tailwindcss-css-框架","link":"#_9、tailwindcss-css-框架","children":[{"level":3,"title":"9.1、安装","slug":"_9-1、安装","link":"#_9-1、安装","children":[]},{"level":3,"title":"9.2、初始化","slug":"_9-2、初始化","link":"#_9-2、初始化","children":[]},{"level":3,"title":"9.3、配置","slug":"_9-3、配置","link":"#_9-3、配置","children":[]},{"level":3,"title":"9.4、使用","slug":"_9-4、使用","link":"#_9-4、使用","children":[]}]},{"level":2,"title":"10、react-router-dom（路由）","slug":"_10、react-router-dom-路由","link":"#_10、react-router-dom-路由","children":[{"level":3,"title":"10.1、安装","slug":"_10-1、安装","link":"#_10-1、安装","children":[]},{"level":3,"title":"10.2、封装","slug":"_10-2、封装","link":"#_10-2、封装","children":[]}]},{"level":2,"title":"11、环境变量","slug":"_11、环境变量","link":"#_11、环境变量","children":[{"level":3,"title":"11.1、创建","slug":"_11-1、创建","link":"#_11-1、创建","children":[]},{"level":3,"title":"11.2、使用","slug":"_11-2、使用","link":"#_11-2、使用","children":[]}]},{"level":2,"title":"12、axios","slug":"_12、axios","link":"#_12、axios","children":[{"level":3,"title":"12.1、安装","slug":"_12-1、安装","link":"#_12-1、安装","children":[]},{"level":3,"title":"12.2、封装","slug":"_12-2、封装","link":"#_12-2、封装","children":[]},{"level":3,"title":"12.3、使用","slug":"_12-3、使用","link":"#_12-3、使用","children":[]}]},{"level":2,"title":"最后","slug":"最后","link":"#最后","children":[]}],"git":{"createdTime":1724471037000,"updatedTime":1724471037000,"contributors":[{"name":"perkins","email":"mbitchina@163.com","commits":1}]},"readingTime":{"minutes":10.88,"words":3264},"filePathRelative":"react/202408131237652671.md","localizedDate":"2024年5月15日","excerpt":"<h2>前言</h2>\\n<p><strong>部分组件的配置安装方法可能随着 react 迭代有所调整，具体可以参考各个组件的官方文档</strong></p>\\n<p><strong>git 地址：</strong><code>https://github.com/youngerhe/mbit-pc</code></p>\\n<h2>1、安装 React</h2>\\n<h3>1.1、介绍</h3>\\n<p><strong>React 是一个由 Facebook 在 2013 年推出的开源 JavaScript 库，它主要用于构建用户界面。</strong></p>\\n<h3>1.2、执行 React 安装命令</h3>","autoDesc":true}');export{u as comp,o as data};
