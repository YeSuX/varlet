(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[9358],{9358:(s,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>e});var l=n(7875),p={class:"varlet-site-doc"},t=(0,l.uE)('<h1>快速开始</h1><div class="card"><h3>介绍</h3><p>这里为您介绍常见开发模式下接入组件库的最基本方式。</p></div><div class="card"><h3>安装</h3></div><div class="card"><h3>CDN</h3><p><code>varlet.js</code>包含组件库的所有样式和逻辑, 引入即可。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;app&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/npm/vue@next&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/npm/@varlet/ui/umd/varlet.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">\n  <span class="hljs-keyword">const</span> app = Vue.createApp({\n    <span class="hljs-attr">template</span>: <span class="hljs-string">&#39;&lt;var-button&gt;按钮&lt;/var-button&gt;&#39;</span>\n  })\n  app.use(Varlet).mount(<span class="hljs-string">&#39;#app&#39;</span>)\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>\n</code></pre></div><div class="card"><h3>Webpack/Vite</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-meta">#</span><span class="bash"> 通过npm或yarn安装</span>\n<span class="hljs-meta">#</span><span class="bash"> npm</span>\nnpm i @varlet/ui -S\n<span class="hljs-meta">#</span><span class="bash"> yarn</span>\nyarn add @varlet/ui\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> App <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;./App.vue&#39;</span>\n<span class="hljs-keyword">import</span> Varlet <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n<span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@varlet/ui/es/style.js&#39;</span>\n\ncreateApp(App).use(Varlet).mount(<span class="hljs-string">&#39;#app&#39;</span>)\n</code></pre></div>',5);const e={render:function(s,a){return(0,l.wg)(),(0,l.j4)("div",p,[t])}}}}]);