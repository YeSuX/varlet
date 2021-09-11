(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[3567],{3567:(t,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>n});var e=a(7875),l={class:"varlet-site-doc"},d=(0,e.uE)('<h1>BackTop</h1><div class="card"><h3>Intro</h3><p>A button to back to top.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { BackTop } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(BackTop)\n</code></pre></div><div class="card"><h3>Basic Usage</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;list in lists&quot;</span> <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;list&quot;</span>&gt;</span>Scroll to bottom {{ list }}<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">var-back-top</span> <span class="hljs-attr">:duration</span>=<span class="hljs-string">&quot;300&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/nord.min.css"><span class="hljs-keyword">const</span> lists = [...Array(<span class="hljs-number">100</span>).keys()]\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">return</span> {\n      lists\n    }\n  }\n}\n</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>target</code></td><td>The target to trigger scroll</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>visibility-height</code></td><td>The button will not show until the scroll height reaches this value</td><td><em>string | number</em></td><td><code>200</code></td></tr><tr><td><code>duration</code></td><td>Time to return to top（ms）</td><td><em>number</em></td><td><code>300</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggers when click</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Custom the content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--back-top-right</code></td><td><code>40px</code></td></tr><tr><td><code>--back-top-bottom</code></td><td><code>40px</code></td></tr><tr><td><code>--back-top-button-size</code></td><td><code>40px</code></td></tr></tbody></table></div>',9);const n={render:function(t,s){return(0,e.wg)(),(0,e.j4)("div",l,[d])}}}}]);