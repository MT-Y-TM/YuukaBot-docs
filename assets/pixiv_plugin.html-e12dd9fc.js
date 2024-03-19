import{_ as l,r as d,o as a,c,a as e,b as t,d as r,e as n}from"./app-1c258af8.js";const o={},p=e("h1",{id:"pixiv-功能",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pixiv-功能","aria-hidden":"true"},"#"),t(" Pixiv 功能")],-1),h=e("h2",{id:"概述",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#概述","aria-hidden":"true"},"#"),t(" 概述")],-1),s={href:"https://www.pixiv.net/",target:"_blank",rel:"noopener noreferrer"},x=n('<h2 id="指令" tabindex="-1"><a class="header-anchor" href="#指令" aria-hidden="true">#</a> 指令</h2><h3 id="搜图" tabindex="-1"><a class="header-anchor" href="#搜图" aria-hidden="true">#</a> 搜图</h3><ul><li><p>指令： <code>搜图(-r)[关键词](*收藏数过滤)</code></p></li><li><p>参数：</p><ul><li><p><code>-r</code>： 可选标识，表示绕过 <em>反R-18系统</em></p></li><li><p><code>关键词</code>： 想要搜什么呢</p></li><li><p><code>收藏数过滤</code>： 可选参数，仅获取该收藏数以上的插画，参数映射表如下</p><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">收藏数</th><th style="text-align:center;">备注</th></tr></thead><tbody><tr><td style="text-align:center;">0</td><td style="text-align:center;">无限制</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">1</td><td style="text-align:center;">1000收藏以上</td><td style="text-align:center;">默认值</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">3000收藏以上</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;">5000收藏以上</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">4</td><td style="text-align:center;">10000收藏以上</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">5</td><td style="text-align:center;">20000收藏以上</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">6</td><td style="text-align:center;">50000收藏以上</td><td style="text-align:center;"></td></tr></tbody></table></li></ul></li><li><p>详情：</p><p>搜索 Pixiv 插画，关键词建议使用日文表达，且全名</p></li><li><p>使用示例：</p><ul><li><code>搜图宇佐見蓮子</code>： 搜索1000收藏以上的宇佐见莲子插画，不含 R-18</li><li><code>搜图-r宇佐見蓮子</code>： 搜索1000收藏以上的宇佐见莲子插画，含 R-18</li><li><code>搜图マエリベリー·ハーン*3</code>： 搜索5000收藏以上的梅莉插画，不含 R-18</li><li><code>搜图西行寺幽々子*4</code>： 搜索10000收藏以上的幽幽子插画，不含 R-18</li></ul></li></ul><h3 id="快速搜图" tabindex="-1"><a class="header-anchor" href="#快速搜图" aria-hidden="true">#</a> 快速搜图</h3><ul><li><p>指令： <code>快速搜图[关键词]</code></p></li><li><p>参数：</p><ul><li><code>关键词</code>：想要搜的东西</li></ul></li><li><p>详情：</p><p>快速搜索 Pixiv 插画，直接返回图片，不返回信息，不允许 R-18</p></li></ul><h3 id="pid" tabindex="-1"><a class="header-anchor" href="#pid" aria-hidden="true">#</a> Pid</h3><ul><li><p>指令： <code>pid[图片id]</code></p></li><li><p>参数：</p><ul><li><code>图片id</code>：Pid，Pixiv 图片id</li></ul></li><li><p>详情：</p><p>查询 Pixiv 插画</p></li></ul><h3 id="p站作品" tabindex="-1"><a class="header-anchor" href="#p站作品" aria-hidden="true">#</a> P站作品</h3><ul><li><p>指令： <code>P站作品[用户id]</code></p></li><li><p>参数：</p><ul><li><code>用户id</code>：P站用户id</li></ul></li><li><p>详情：</p><p>获取 Pixiv 用户插画</p></li></ul><h3 id="p站喜欢" tabindex="-1"><a class="header-anchor" href="#p站喜欢" aria-hidden="true">#</a> P站喜欢</h3><ul><li><p>指令： <code>P站喜欢[用户id]</code></p></li><li><p>参数：</p><ul><li><code>用户id</code>：P站用户id</li></ul></li><li><p>详情：</p><p>获取 Pixiv 用户喜欢的插画</p></li></ul><h3 id="p站关注" tabindex="-1"><a class="header-anchor" href="#p站关注" aria-hidden="true">#</a> P站关注</h3><ul><li><p>指令： <code>P站关注[用户id]</code></p></li><li><p>参数：</p><ul><li><code>用户id</code>：P站用户id</li></ul></li><li><p>详情：</p><p>获取 Pixiv 用户关注的人的插画</p></li></ul><h3 id="p站榜单" tabindex="-1"><a class="header-anchor" href="#p站榜单" aria-hidden="true">#</a> P站榜单</h3><ul><li><p>指令： <code>P站[类型]榜 (序号)</code></p></li><li><p>参数：</p><ul><li><code>类型</code>：需要获取的榜单，可选参数如下 <ul><li><code>[日|周|月]</code>： 每日/周/月插画榜</li><li><code>[日|周]H</code>： 每日/周 R-18榜</li><li><code>新人</code>： 每日新人榜</li><li><code>原创</code>： 每日原创榜</li></ul></li><li><code>序号</code>： 可选参数，需要获取榜单第几，不填默认随机</li></ul></li><li><p>详情：</p><p>获取 P站 榜单</p></li><li><p>使用示例：</p><ul><li><code>P站日榜</code>： 获取 Pixiv 每日榜，随机返回其中的一张</li><li><code>P站月榜*1</code>： 获取 Pixiv 每月榜，返回其中的第一名</li><li><code>P站周H榜</code>： 获取 Pixiv 每周 R-18 榜，随机返回其中的一张</li></ul></li></ul><h3 id="随机tag" tabindex="-1"><a class="header-anchor" href="#随机tag" aria-hidden="true">#</a> 随机tag</h3><ul><li><p>指令： <code>随机tag</code></p></li><li><p>详情：</p><p>获取热门tag并返回有着该tag的插画</p></li></ul>',17);function u(g,P){const i=d("ExternalLinkIcon");return a(),c("div",null,[p,h,e("p",null,[t("方便用户获取 "),e("a",s,[t("Pixiv 插画交流网站"),r(i)]),t(" 的插画与相关信息")]),x])}const _=l(o,[["render",u],["__file","pixiv_plugin.html.vue"]]);export{_ as default};