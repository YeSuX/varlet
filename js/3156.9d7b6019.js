(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[3156],{3156:(s,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>n});var a=e(7875),d={class:"varlet-site-doc"},l=(0,a.uE)('<h1>PullRefresh 下拉刷新</h1><div class="card"><h3>介绍</h3><p>用于提供下拉刷新的交互操作。</p></div><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { PullRefresh } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(PullRefresh)\n</code></pre></div><div class="card"><h3>基本使用</h3><p>下拉到刷新位置时松开会触发<code>refresh</code>事件， 在事件开始时将<code>v-model</code>设置为<code>true</code>表示正在加载，完成后将<code>v-model</code>设置为<code>false</code>表示加载结束。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-pull-refresh</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;isRefresh&quot;</span> @<span class="hljs-attr">refresh</span>=<span class="hljs-string">&quot;refresh&quot;</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>\n    <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;(item, index) in data&quot;</span>\n    <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;index&quot;</span>\n    <span class="hljs-attr">border</span>\n  &gt;</span>\n    {{ item + &#39; &#39; + (index + 1) }}\n  <span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-pull-refresh</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n\n<span class="hljs-keyword">const</span> data1 = <span class="hljs-built_in">Array</span>(<span class="hljs-number">10</span>).fill(<span class="hljs-string">&#39;List Item&#39;</span>)\n<span class="hljs-keyword">const</span> data2 = <span class="hljs-built_in">Array</span>(<span class="hljs-number">10</span>).fill(<span class="hljs-string">&#39;This is new List Item&#39;</span>)\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> isRefresh = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> data = ref(data1)\n\n    <span class="hljs-keyword">const</span> refresh = <span class="hljs-function">() =&gt;</span> {\n      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {\n        data.value = data.value[<span class="hljs-number">0</span>] === <span class="hljs-string">&#39;List Item&#39;</span> ? data2 : data1\n        isRefresh.value = <span class="hljs-literal">false</span>\n      }, <span class="hljs-number">2000</span>)\n    }\n\n    <span class="hljs-keyword">return</span> {\n      refresh,\n      isRefresh,\n      data\n    }\n  }\n}\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>是否处于加载中状态</td><td><em>boolean</em></td><td><code>-</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用下拉刷新</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>animation-duration</code></td><td>加载结束后回到初始位置的动画时长(ms)</td><td><em>string | number</em></td><td><code>300</code></td></tr><tr><td><code>success-duration</code></td><td>成功提示展示时长(ms)</td><td><em>string | number</em></td><td><code>2000</code></td></tr><tr><td><code>bgColor</code></td><td>control的背景颜色</td><td><em>string</em></td><td><code>#005CAF</code></td></tr><tr><td><code>color</code></td><td>control 的颜色</td><td><em>string</em></td><td><code>#ffffff</code></td></tr><tr><td><code>successBgColor</code></td><td>成功状态下control的背景颜色</td><td><em>string</em></td><td><code>#4CAF50</code></td></tr><tr><td><code>successColor</code></td><td>成功状态下control的颜色</td><td><em>string</em></td><td><code>ffffff</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>refresh</code></td><td>下拉刷新时触发</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>default</code></td><td>默认插槽</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的css变量,可以使用<a href="#/zh-CN/style-provider">StyleProvider组件</a>进行样式定制</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--pull-refresh-size</code></td><td><code>40px</code></td></tr><tr><td><code>--pull-refresh-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--pull-refresh-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--pull-refresh-success-color</code></td><td><code>var(--color-success)</code></td></tr><tr><td><code>--pull-refresh-icon-size</code></td><td><code>25px</code></td></tr></tbody></table></div>',9);const n={render:function(s,t){return(0,a.wg)(),(0,a.j4)("div",d,[l])}}}}]);