(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{373:function(t,s,a){"use strict";a.r(s);var r=a(7),n=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"《mysql核心知识》第5章-查看字段长度与类型宽度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#《mysql核心知识》第5章-查看字段长度与类型宽度"}},[t._v("#")]),t._v(" 《MySQL核心知识》第5章：查看字段长度与类型宽度")]),t._v(" "),s("p",[s("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),s("blockquote",[s("p",[t._v("《RPC手撸专栏》已经在 "),s("strong",[t._v("「冰河技术」")]),t._v(" 知识星球开始更新了，冰河要带你从零开始手撸一个可在实际环境使用的高性能、可扩展的RPC框架，想要一起手撸RPC的小伙伴文末有加入星球的方式。")])]),t._v(" "),s("p",[t._v("今天是《"),s("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=Mzg4MjU0OTM1OA==&action=getalbum&album_id=2479089143118053377&scene=173&from_msgid=2247503275&from_itemidx=1&count=3&nolastread=1#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("MySQL核心知识"),s("OutboundLink")],1),t._v("》专栏的第5章，今天跟大家一起聊聊MySQL的字段长度与类型宽度。好了，开始今天的正题。")]),t._v(" "),s("h2",{attrs:{id:"查看字段长度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看字段长度"}},[t._v("#")]),t._v(" 查看字段长度")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" tmp13"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vb "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARBINARY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" tmp13 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" LENGTH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" tmp13"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" tmp13 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1212")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("是不是有点简单了，哈哈，其实我不想把这个专栏写的太复杂，小伙伴们自行测试下上面的SQL语句吧。")]),t._v(" "),s("h2",{attrs:{id:"数据类型宽度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型宽度"}},[t._v("#")]),t._v(" 数据类型宽度")]),t._v(" "),s("p",[t._v("MYSQL中的整数型数据类型都可以指定显示宽度.\n创建一个表")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" tb_emp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BIGINT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("id字段的数据类型为BIGINT(1)，注意到后面的数字1，这表示的是该数据类型指定的显示宽度，指定能够显示的数值中数字的个数。")]),t._v(" "),s("p",[t._v("例如，假设声明一个INT类型的字段 YEAR INT(4) ，该声明指明，在year字段中的数据一般只显示4位数字的宽度。")]),t._v(" "),s("p",[t._v("显示宽度和数据类型的取值范围是无关的。显示宽度只是指明MYSQL最大可能显示的数字个数，数值的位数小于指定的宽度时会有空格填充，如果插入了大于显示宽度的值，只要该值不超过该类型整数的取值范围，数值依然可以插入，而且能显示出来。")]),t._v(" "),s("p",[t._v("例如，向year字段插入一个数值19999，当使用select查询的时候，MYSQL显示的将是完整带有5位数字的19999，而不是4位数字的值\n如果不指定显示宽度，则MYSQL为每一种类型指定默认的宽度值。")]),t._v(" "),s("p",[t._v("注意：显示宽度只用于显示，并不能限制取值范围和占用空间，例如：INT(3)会占用4个字节的存储空间，并且允许的最大值也不会是999，而是INT整型所允许的最大值。")]),t._v(" "),s("p",[s("strong",[t._v("好了，今天的内容比较简单，如果文章对你有点帮助，记得给冰河一键三连哦，欢迎将文章转发给更多的小伙伴，冰河将不胜感激~~")])]),t._v(" "),s("h2",{attrs:{id:"关于星球"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于星球"}},[t._v("#")]),t._v(" 关于星球")]),t._v(" "),s("p",[s("strong",[t._v("冰河技术")]),t._v(" 知识星球《RPC手撸专栏》已经开始了，我会将《RPC手撸专栏》的源码放到知识星球中，同时在微信上会创建专门的知识星球群，冰河会在知识星球上和星球群里解答球友的提问。")]),t._v(" "),s("h3",{attrs:{id:"星球提供的服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#星球提供的服务"}},[t._v("#")]),t._v(" 星球提供的服务")]),t._v(" "),s("p",[t._v("冰河整理了星球提供的一些服务，如下所示。")]),t._v(" "),s("p",[t._v("加入星球，你将获得：")]),t._v(" "),s("p",[t._v("1.学习从零开始手撸可用于实际场景的高性能、可扩展的RPC框架项目")]),t._v(" "),s("p",[t._v("2.学习SpringCloud Alibaba实战项目—从零开发微服务项目")]),t._v(" "),s("p",[t._v("3.学习高并发、大流量业务场景的解决方案，体验大厂真正的高并发、大流量的业务场景")]),t._v(" "),s("p",[t._v("4.学习进大厂必备技能：性能调优、并发编程、分布式、微服务、框架源码、中间件开发、项目实战")]),t._v(" "),s("p",[t._v("5.提供站点 https://binghe.gitcode.host 所有学习内容的指导、帮助")]),t._v(" "),s("p",[t._v("6.GitHub：https://github.com/binghe001/BingheGuide - 非常有价值的技术资料仓库，包括冰河所有的博客开放案例代码")]),t._v(" "),s("p",[t._v("7.可以发送你的简历到我的邮箱，提供简历批阅服务")]),t._v(" "),s("p",[t._v("8.提供技术问题、系统架构、学习成长、晋升答辩等各项内容的回答")]),t._v(" "),s("p",[t._v("9.定期的整理和分享出各类专属星球的技术小册、电子书、编程视频、PDF文件")]),t._v(" "),s("p",[t._v("10.定期组织技术直播分享，传道、授业、解惑，指导阶段瓶颈突破技巧")]),t._v(" "),s("h3",{attrs:{id:"如何加入星球"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何加入星球"}},[t._v("#")]),t._v(" 如何加入星球")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("链接")]),t._v(" ：打开链接 "),s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),s("OutboundLink")],1),t._v(" 加入星球。")]),t._v(" "),s("li",[s("strong",[t._v("回复")]),t._v(" ：在公众号 "),s("strong",[t._v("冰河技术")]),t._v(" 回复 "),s("strong",[t._v("星球")]),t._v(" 领取优惠券加入星球。")])]),t._v(" "),s("p",[s("strong",[t._v("特别提醒：")]),t._v(" 苹果用户进圈或续费，请加微信 "),s("strong",[t._v("hacker_binghe")]),t._v(" 扫二维码，或者去公众号 "),s("strong",[t._v("冰河技术")]),t._v(" 回复 "),s("strong",[t._v("星球")]),t._v(" 扫二维码加入星球。")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"sa-2022-04-21-007","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-28-008.png",loading:"lazy"}})]),t._v(" "),s("p",[s("strong",[t._v("如果图片二维码过期，去公众号 冰河技术 回复 星球 扫二维码加入星球, 好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),t._v(" "),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),s("blockquote",[s("p",[t._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"加群交流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[t._v("#")]),t._v(" 加群交流")]),t._v(" "),s("p",[t._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),s("code",[t._v("学习加群")]),t._v("。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),t._v(" "),s("div",{staticStyle:{"font-size":"9px"}},[t._v("冰河微信")]),t._v(" "),s("br")]),t._v(" "),s("h2",{attrs:{id:"公众号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[t._v("#")]),t._v(" 公众号")]),t._v(" "),s("p",[t._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",width:"180px"}}),t._v(" "),s("div",{staticStyle:{"font-size":"9px"}},[t._v("公众号：冰河技术")]),t._v(" "),s("br")]),t._v(" "),s("h2",{attrs:{id:"星球"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[t._v("#")]),t._v(" 星球")]),t._v(" "),s("p",[t._v("加入星球 "),s("strong",[s("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),s("OutboundLink")],1)]),t._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),s("strong",[t._v("hacker_binghe")]),t._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),s("strong",[t._v("实战项目")]),t._v("！")]),t._v(" "),s("p",[t._v("关注 "),s("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),s("OutboundLink")],1),t._v("公众号，回复 "),s("code",[t._v("星球")]),t._v(" 可以获取入场优惠券。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),t._v(" "),s("div",{staticStyle:{"font-size":"9px"}},[t._v("知识星球：冰河技术")]),t._v(" "),s("br")])])}),[],!1,null,null,null);s.default=n.exports}}]);