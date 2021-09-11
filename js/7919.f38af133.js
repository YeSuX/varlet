(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[7919],{7919:(s,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var e=a(7875),d={class:"varlet-site-doc"},n=(0,e.uE)('<h1>ImagePreview 图片预览</h1><div class="card"><h3>介绍</h3><p>图片放大预览，支持双击倍数放大，支持函数调用和组件调用两种方式。</p></div><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { ImagePreview } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(ImagePreview)\n</code></pre></div><div class="card"><h3>局部引入</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { ImagePreview } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\n<span class="hljs-comment">// 局部注册</span>\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-attr">components</span>: {\n    [ImagePreview.Component.name]: ImagePreview.Component,\n  },\n}\n</code></pre></div><div class="card"><h3>函数调用</h3></div><div class="card"><h3>基本使用</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css">ImagePreview(<span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>)\n</code></pre></div><div class="card"><h3>处理回调函数</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">const</span> images = [\n  <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>,\n  <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat2.jpg&#39;</span>\n]\n\nImagePreview({\n  images,\n  <span class="hljs-function"><span class="hljs-title">onChange</span>(<span class="hljs-params">index</span>)</span> {\n    <span class="hljs-built_in">console</span>.log(index)\n  }\n})\n</code></pre></div><h2>组件使用</h2><div class="card"><h3>基本使用</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>\n  <span class="hljs-attr">block</span>\n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>\n&gt;</span>\n  基本使用\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-image-preview</span> <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;images&quot;</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> /&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> \n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> \n  <span class="hljs-attr">block</span>\n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;currentShow = true&quot;</span>\n&gt;</span>\n  指定初始位置\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-image-preview</span>\n  <span class="hljs-attr">current</span>=<span class="hljs-string">&quot;https://varlet.gitee.io/varlet-ui/cat2.jpg&quot;</span>\n  <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;images&quot;</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;currentShow&quot;</span> \n/&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> \n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> \n  <span class="hljs-attr">block</span> \n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;closeShow = true&quot;</span>\n&gt;</span>\n  展示关闭按钮\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-image-preview</span>\n  <span class="hljs-attr">closeable</span>\n  <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;images&quot;</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;closeShow&quot;</span> \n/&gt;</span>\n\n<span class="hljs-tag">&lt;<span class="hljs-name">var-button</span>\n  <span class="hljs-attr">block</span>\n  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>\n  @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;closeEventShow = true&quot;</span>\n&gt;</span>\n  监听关闭事件\n<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-image-preview</span> \n  <span class="hljs-attr">:images</span>=<span class="hljs-string">&quot;images&quot;</span>\n  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;closeEventShow&quot;</span>\n  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;handleCloseEvent&quot;</span> \n/&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> currentShow = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> closeShow = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> closeEventShow = ref(<span class="hljs-literal">false</span>)\n    <span class="hljs-keyword">const</span> images = ref([\n      <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat.jpg&#39;</span>,\n      <span class="hljs-string">&#39;https://varlet.gitee.io/varlet-ui/cat2.jpg&#39;</span>,\n    ])\n\n    <span class="hljs-keyword">const</span> handleCloseEvent = <span class="hljs-function">() =&gt;</span> Snackbar(<span class="hljs-string">&#39;触发了关闭事件。&#39;</span>)\n    \n    <span class="hljs-keyword">return</span> {\n      show,\n      currentShow,\n      closeShow,\n      closeEventShow,\n      images,\n      handleCloseEvent,\n    }\n  },\n}\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>show</code></td><td>是否显示</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>images</code></td><td>需要预览的图片 URL数组</td><td><em>string[]</em></td><td><code>[]</code></td></tr><tr><td><code>current</code></td><td>图片预览起始的 URL</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>双击放大倍数</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>是否显示关闭按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loop</code></td><td>是否开启循环播放</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>是否显示分页</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lock-scroll</code></td><td>锁定滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>弹出层挂载的位置</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>change</code></td><td>切换图片时的回调函数，回调参数为当前索引</td><td><code>index: number(图片索引)</code></td></tr><tr><td><code>open</code></td><td>打开image-preview时触发</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>打开image-preview动画结束时触发</td><td><code>-</code></td></tr><tr><td><code>close</code></td><td>关闭image-preview时触发</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>关闭image-preview动画结束时触发</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>插槽</h3><table><thead><tr><th>插槽名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td><code>indicator</code></td><td>分页指示器</td><td><code>index: number(图片索引), length: number(图片总数)</code></td></tr><tr><td><code>close-icon</code></td><td>关闭按钮</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>ImagePreview Options</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>images</code></td><td>需要预览的图片URL数组或者单个图片的url</td><td><em>string[] | string</em></td><td><code>[]</code></td></tr><tr><td><code>current</code></td><td>图片预览起始的 URL</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>zoom</code></td><td>双击放大倍数</td><td><em>string | number</em></td><td><code>2</code></td></tr><tr><td><code>closeable</code></td><td>是否显示关闭按钮</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loop</code></td><td>是否开启循环播放</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>indicator</code></td><td>是否显示分页</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>lockScroll</code></td><td>锁定滚动</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onChange</code></td><td>切换图片时的回调函数，回调参数为当前索引</td><td><em>(index: number) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpen</code></td><td>image-preview开启时候的回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>image-preview动画结束时候的回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>image-preview时关闭时候的回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>image-preview关闭动画结束时候的回调</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的css变量,可以使用<a href="#/zh-CN/style-provider">StyleProvider组件</a>进行样式定制</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--image-preview-swipe-indicators-text-color</code></td><td><code> #ddd</code></td></tr><tr><td><code>--image-preview-swipe-indicators-padding</code></td><td><code>16px 0</code></td></tr><tr><td><code>--image-preview-zoom-container-background</code></td><td><code> #000</code></td></tr><tr><td><code>--image-preview-close-icon-top</code></td><td><code>13px</code></td></tr><tr><td><code>--image-preview-close-icon-right</code></td><td><code> 14px</code></td></tr><tr><td><code>--image-preview-close-icon-size</code></td><td><code>22px</code></td></tr><tr><td><code>--image-preview-close-icon-color</code></td><td><code>#fff</code></td></tr></tbody></table></div>',15);const l={render:function(s,t){return(0,e.wg)(),(0,e.j4)("div",d,[n])}}}}]);