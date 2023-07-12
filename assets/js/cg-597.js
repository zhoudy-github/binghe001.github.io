(window.webpackJsonp=window.webpackJsonp||[]).push([[597],{894:function(t,r,e){"use strict";e.r(r);var s=e(7),a=Object(s.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第2章-秒杀系统的目标与挑战"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第2章-秒杀系统的目标与挑战"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第2章：秒杀系统的目标与挑战")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★☆☆☆")]),t._v(" "),r("li",[t._v("本章重点：介绍建设秒杀系统的目标与对应的挑战，针对过程中的挑战给出简单的应对策略，具体的实现会在设计和研发秒杀系统的章节中具体给出。")])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("在正式设计和研发秒杀系统之前，我们一定要明确秒杀系统要实现的目标，并且需要知晓设计和研发秒杀系统存在哪些技术挑战。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("秒杀系统的建设不是一朝一夕就能完成的，就拿阿里的双11秒杀系统来说，也是经历了长时间的优化和迭代不断完善出来的。说的直白些，秒杀系统是一个典型的高并发读和高并发写的系统，最主要的就是要满足三高特性，即："),r("strong",[t._v("高并发、高性能、高可用。")]),t._v(" 其中，对技术人员存在相当大的挑战。")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("对于普通用户来说，秒杀系统理解起来是相当简单的，在他们的眼中，秒杀系统其实就是打开商品详情页——>点击抢购——>下单——>支付这样的流程，中间如果抢购不到商品，刷新再次尝试即可。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-05-04-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[t._v("所以，一个秒杀系统对于普通用户来说，本质上就是抢购——>下单——>支付三个步骤。但是，站在技术人员的角度，就不能这么理解秒杀系统了。作为技术人员，需要明确知晓建设秒杀系统的目标，并且在实施过程中会存在哪些技术挑战。")]),t._v(" "),r("p",[t._v("所以，本章，我们主要是站在技术人员的角度来阐述建设秒杀系统时，要实现的目标和存在的技术挑战。")]),t._v(" "),r("h2",{attrs:{id:"三、秒杀系统的目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、秒杀系统的目标"}},[t._v("#")]),t._v(" 三、秒杀系统的目标")]),t._v(" "),r("p",[t._v("在互联网项目中，几乎大部分项目无外乎会涉及三个端：C端、B端和运营端，其中，C端直面用户，B端直面企业，运营端也叫做平台端，平台端是C端和B端的重要保障。所以，秒杀系统的目标一般可以从C端、B端和平台端进行阐述。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-05-04-002.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("h3",{attrs:{id:"_3-1-c端目标"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-c端目标"}},[t._v("#")]),t._v(" 3.1 C端目标")]),t._v(" "),r("p",[t._v("无论是秒杀系统，还是其他的系统，毫无疑问，C端用户就是上帝。对于C端用户这些上帝来说，使用系统时，体验要流畅，数据要准确。不能出现突然的卡顿、白屏、无法加载等，不然这种体验是非常糟糕的，会导致C端用户失去对系统的兴趣，慢慢的就会造成用户流失，这种影响就会比较严重。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-05-04-003.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("p",[r("strong",[t._v("总结：对于C端来说，最重要的目标就是要保证页面流畅不卡顿、不出现白屏、接口要稳定、数据要准确。")])]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=a.exports}}]);