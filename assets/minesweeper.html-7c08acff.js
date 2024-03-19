import{_ as e,o as i,c as a,e as l}from"./app-1c258af8.js";const d={},c=l('<h1 id="扫雷" tabindex="-1"><a class="header-anchor" href="#扫雷" aria-hidden="true">#</a> 扫雷</h1><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2><p>简单的扫雷小游戏</p><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>由于是群内多人小游戏，有部分机制不同：</p><ul><li>首翻可能有雷</li><li>当前格周围无雷也不会翻开周围格子</li></ul></div><h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令" aria-hidden="true">#</a> 指令</h2><h3 id="开始扫雷" tabindex="-1"><a class="header-anchor" href="#开始扫雷" aria-hidden="true">#</a> 开始扫雷</h3><ul><li><p>指令： <code>开始扫雷</code></p></li><li><p>详情：</p><p>开始一局扫雷游戏</p></li></ul><h3 id="扫" tabindex="-1"><a class="header-anchor" href="#扫" aria-hidden="true">#</a> 扫</h3><ul><li><p>指令： <code>扫[行数]*[列数](!)</code></p></li><li><p>参数：</p><ul><li><code>行数</code>： 地图行数</li><li><code>列数</code>： 地图列数</li><li><code>!</code>： 可选标识，不加表示扫雷，加上表示插旗</li></ul></li><li><p>详情：</p><p>扫雷/插旗</p></li></ul>',9),r=[c];function h(n,t){return i(),a("div",null,r)}const s=e(d,[["render",h],["__file","minesweeper.html.vue"]]);export{s as default};