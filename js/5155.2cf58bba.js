(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[5155],{5155:(s,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>p});var n=t(7875),l={class:"varlet-site-doc"},e=(0,n.uE)('<h1>图片懒加载</h1><div class="card"><h3>介绍</h3><p>在图片可见时进行加载</p><h4></h4></div><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Lazy } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Lazy)\n</code></pre></div><div class="card"><h3>基本用法</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">v-lazy</span>=<span class="hljs-string">&quot;&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;&quot;</span>&gt;</span>\n</code></pre></div><div class="card"><h3>背景图懒加载</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-lazy:background-image</span>=<span class="hljs-string">&quot;&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n</code></pre></div><div class="card"><h3>内联属性</h3><p>可以通过内联属性修改<code>loading</code>、<code>error</code>图片和<code>加载失败时尝试重新加载的次数</code>。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">img</span> \n  <span class="hljs-attr">v-lazy</span>=<span class="hljs-string">&quot;&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;&quot;</span>\n  <span class="hljs-attr">lazy-loading</span>=<span class="hljs-string">&quot;https://xxx.cn/loading.png&quot;</span>\n  <span class="hljs-attr">lazy-error</span>=<span class="hljs-string">&quot;https://xxx.cn/error.png&quot;</span>\n  <span class="hljs-attr">lazy-attempt</span>=<span class="hljs-string">&quot;3&quot;</span>\n&gt;</span>\n</code></pre></div><div class="card"><h3>插件</h3><p><code>Lazy</code>提供了在插件注册时传入的选项，可以设置默认的懒加载选项。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Lazy } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Lazy, {\n  <span class="hljs-attr">loading</span>: <span class="hljs-string">&#39;https://xxx.cn/loading.png&#39;</span>,\n  <span class="hljs-attr">error</span>: <span class="hljs-string">&#39;https://xxx.cn/error.png&#39;</span>,\n  <span class="hljs-attr">attempt</span>: <span class="hljs-number">3</span>,\n  <span class="hljs-attr">throttleWait</span>: <span class="hljs-number">300</span>,\n  <span class="hljs-attr">events</span>: [\n    <span class="hljs-string">&#39;scroll&#39;</span>, \n    <span class="hljs-string">&#39;wheel&#39;</span>, \n    <span class="hljs-string">&#39;mousewheel&#39;</span>, \n    <span class="hljs-string">&#39;resize&#39;</span>,\n    <span class="hljs-string">&#39;animationend&#39;</span>,\n    <span class="hljs-string">&#39;transitionend&#39;</span>, \n    <span class="hljs-string">&#39;touchmove&#39;</span>\n  ],\n  <span class="hljs-function"><span class="hljs-title">filter</span>(<span class="hljs-params">lazy</span>)</span> {\n    <span class="hljs-comment">// 可以访问lazy上下文的所有属性,执行一些属性拦截, </span>\n    <span class="hljs-comment">// 比如简单修改所有的图片地址http -&gt; https</span>\n    lazy.src.replace(<span class="hljs-string">&#39;http://&#39;</span>, <span class="hljs-string">&#39;https://&#39;</span>)\n  }\n})\n</code></pre></div><h2>API</h2><div class="card"><h3>插件选项</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>loading</code></td><td>加载中的图片，尽可能选择加载速度很快的图片</td><td><em>string</em></td><td><code>1像素透明图片</code></td></tr><tr><td><code>error</code></td><td>加载失败显示的图片</td><td><em>string</em></td><td><code>1像素透明图片</code></td></tr><tr><td><code>attempt</code></td><td>加载失败时尝试重新加载的次数</td><td><em>number</em></td><td><code>3</code></td></tr><tr><td><code>throttleWait</code></td><td>节流时间，数值越大事件触发频率越低</td><td><em>number</em></td><td><code>300</code></td></tr><tr><td><code>events</code></td><td>触发可见性检测注册的事件列表</td><td><em>string[]</em></td><td><code>[&#39;scroll&#39;...]</code></td></tr><tr><td><code>filter</code></td><td>属性拦截函数</td><td><em>(lazy: Lazy) =&gt; void</em></td><td><code>() =&gt; void</code></td></tr></tbody></table></div>',9);const p={render:function(s,a){return(0,n.wg)(),(0,n.j4)("div",l,[e])}}}}]);