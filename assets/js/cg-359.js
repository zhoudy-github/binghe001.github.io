(window.webpackJsonp=window.webpackJsonp||[]).push([[359],{657:function(s,a,e){"use strict";e.r(a);var t=e(7),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"sql注入点检测方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql注入点检测方法"}},[s._v("#")]),s._v(" SQL注入点检测方法")]),s._v(" "),a("p",[s._v("现在有很多防注入程序屏蔽了 and、1=1、1=2 类似这样的关键字，使用这样的方法有时不能探测到注入点了。那么是否有新的方法能够探测注入点呢? 经过一段时间的研究，发现了更好的方法。特此共享一下。\n现在假设有一个新闻页面，URL 是 http://192.168.109.139/news.asp?id=123，")]),s._v(" "),a("p",[s._v("1.在浏览器中打开，可以看到一个正常的新闻页面;")]),s._v(" "),a("p",[s._v("2.在URL地址后面加上-1，URL变成：http://192.168.109.139/news.asp?id=123-1，如果返回的页面和前面不同，是另一则新闻，则表示有注入漏洞，是数字型的注入漏洞;在 URL地址后面加上 -0，URL变成 http://192.168.109.139/news.asp?id=123-0，返回的页面和前面的页面相同，加上-1，返回错误页面，则也表示存在注入漏洞，是数字型的。")]),s._v(" "),a("p",[s._v("3.在URL的地址后面加上'%2B'，URL地址变为：http://192.168.109.139/news.asp?id=123'%2B'，返回的页面和1同;加上'%2B'asdf，URL地址变为：http://192.168.109.139/news.asp?id=123'%2Basdf，返回的页面和1不同，或者说未发现该条记录，或者错误，则表示存在注入点，是文本型的。")]),s._v(" "),a("p",[s._v("为什么这样可以呢?")]),s._v(" "),a("p",[s._v("我们可以从程序的角度来考虑一下。程序员的这条语句大致应该是这样的：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from news where "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("当我们在后面加上 -1 后，语句变为")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from news where "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),s._v("-1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("SQL服务器在执行这条语句时会进行运算，实际执行的是：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from news where "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("122")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这样选出来的就是另外一条新闻记录了。如果该记录存在，就是另一则新闻;否则会显示记录不存在，或者出错。这也同时表示程序未对输入的数据进行过滤，存在数值型的注入漏洞。\n如果 SQL 语句时这样的：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from news where "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("那么我们在后面加上 '%2B' 之后，语句变为")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from news where "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123'")]),s._v("+"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("%2B 是 + 的URL编码。 这样之后，SQL服务器实际执行的是：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from news where "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("会返回同样的页面。")]),s._v(" "),a("p",[s._v("加上 '%2B'asdf 之后，语句变为")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from news where "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123'")]),s._v("+"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'asdf'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("实际执行的是：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" * from news where "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123asdf'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("返回页面不存在，或者显错。 这就表示有文本型的注入漏洞。")]),s._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);