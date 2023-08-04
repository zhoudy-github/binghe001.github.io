(window.webpackJsonp=window.webpackJsonp||[]).push([[635],{932:function(t,r,e){"use strict";e.r(r);var s=e(7),a=Object(s.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"《seckill秒杀系统》第4章-秒杀系统需求与流程梳理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#《seckill秒杀系统》第4章-秒杀系统需求与流程梳理"}},[t._v("#")]),t._v(" 《Seckill秒杀系统》第4章：秒杀系统需求与流程梳理")]),t._v(" "),r("p",[t._v("作者：冰河\n"),r("br"),t._v("星球："),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://m6z.cn/6aeFbs"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("博客："),r("a",{attrs:{href:"https://binghe.gitcode.host",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("文章汇总："),r("a",{attrs:{href:"https://binghe.gitcode.host/md/all/all.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://binghe.gitcode.host/md/all/all.html"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("源码获取地址："),r("a",{attrs:{href:"https://t.zsxq.com/0dhvFs5oR",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/0dhvFs5oR"),r("OutboundLink")],1),t._v(" "),r("br"),t._v("课程视频："),r("a",{attrs:{href:"https://t.zsxq.com/10bXXNmjU",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/10bXXNmjU"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[t._v("沉淀，成长，突破，帮助他人，成就自我。")])]),t._v(" "),r("ul",[r("li",[t._v("本章难度：★★★☆☆")]),t._v(" "),r("li",[t._v("本章重点：正所谓磨刀不误砍柴功，在真正研发秒杀系统前要梳理好秒杀系统的需求与业务流程。本章以用户故事的角度全面梳理秒杀系统的需求与业务流程。")]),t._v(" "),r("li",[t._v("课程视频："),r("a",{attrs:{href:"https://t.zsxq.com/10bXXNmjU",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://t.zsxq.com/10bXXNmjU"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("大家好，我是冰河~~")])]),t._v(" "),r("p",[t._v("无论是研发秒杀系统，还是其他业务系统，研发人员拿到任务后，第一时间不是进行系统设计，更不是一开始就干代码，而是首先要好好的梳理下系统需求与业务流程，任何技术最终都是要为业务服务。正所谓磨刀不误砍柴工，今天就来梳理下秒杀系统的需求和业务流程。")]),t._v(" "),r("h2",{attrs:{id:"一、前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[t._v("#")]),t._v(" 一、前言")]),t._v(" "),r("p",[t._v("很多小伙伴对秒杀系统其实并不陌生，甚至有不少小伙伴参与过在秒杀系统上抢购秒杀商品。但那仅仅是站在用户角度对秒杀系统的理解，作为技术人员，只是从用户角度理解秒杀系统是远远不够的，我们要从技术和业务的角度来梳理秒杀系统的业务和流程，以便从技术和业务的角度来更好的实现秒杀系统。")]),t._v(" "),r("p",[t._v("用户参与秒杀系统的流程：")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-05-08-004.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("h2",{attrs:{id:"二、本章诉求"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、本章诉求"}},[t._v("#")]),t._v(" 二、本章诉求")]),t._v(" "),r("p",[t._v("技术人员或者研发人员拿到研发系统的任务时，如果不先去梳理需求和业务流程，一上来就开干代码，大部分情况下会遇到这样的问题，系统研发到中途时，突然卡住了，不知道如何往下进行了，或者研发到中途时，发现自己理解的需求有偏差，再回过头来梳理需求和业务流程，发现自己写的功能不符合需求，又要推倒重来。最终做了很多无用功，浪费时间和精力。")]),t._v(" "),r("p",[t._v("本章，从技术人员的角度梳理下秒杀系统的需求和业务流程。")]),t._v(" "),r("h2",{attrs:{id:"三、需求描述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、需求描述"}},[t._v("#")]),t._v(" 三、需求描述")]),t._v(" "),r("p",[t._v("某天正要下班时，你哼着小曲儿正在收拾自己的工位，心想着马上就能跟自己心仪的女生去约会了，心里正在想象着约会的场景，心里万般高兴，就等时间到下班准点时，你就会飞速跑出公司去接你心仪的女生。")]),t._v(" "),r("p",[t._v("然而，正在你收拾工位的时候，突然你隐约觉得背后貌似有人正在向你走来，你心里顿感不妙：难道又是他？你用余光扫了一眼，“卧槽，果然是他”，没错，就是公司的产品经理阿坑。")]),t._v(" "),r("p",[t._v("“小王啊，咱们老大提了一个紧急的需求，要研发一个秒杀系统，下月端午节的时候，可以让用户在系统中秒杀粽子，中秋节可以秒杀月饼，双11秒杀特价商品，由于时间紧急，咱俩先简单讨论下系统的需求”。你还没用正眼看阿坑，他就已经开口对你说出了这句话。")]),t._v(" "),r("p",[t._v("“说完了吗？还有其他的需求吗？”")]),t._v(" "),r("p",[t._v("“老大说了，最好是在下月初上线，上线后要压测，要预热”。")]),t._v(" "),r("p",[t._v("作为职场经验丰富的研发人员，尽管你心里有一万个“草泥马”在奔腾，你都要保持足够的淡定。即使你听完阿坑的话，特别想说出“滚”这个字，但是你也必须要淡定的接受。你也知道对于这样的需求来说，一两句话是说不清楚的。于是你先跟你要约会的女生打了个电话：“喂，不好意思啊，公司临时有点事情，晚点接你啊”，电话那头传来声音：“好，正好我也有点事情要处理”。")]),t._v(" "),r("p",[t._v("于是，你便和产品经理开始梳理秒杀系统的需求，经过半个多小时的梳理，你跟产品经理初步确定了秒杀系统的需求，于是你画了如图4-1所示的脑图。")]),t._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:"https://binghe.gitcode.host/images/project/seckill/scekill-2023-05-08-001.png?raw=true",width:"80%"}}),t._v(" "),r("br")]),t._v(" "),r("h2",{attrs:{id:"查看完整文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#查看完整文章"}},[t._v("#")]),t._v(" 查看完整文章")]),t._v(" "),r("p",[t._v("加入"),r("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[t._v("冰河技术"),r("OutboundLink")],1),t._v("知识星球，解锁完整技术文章与完整代码")])])}),[],!1,null,null,null);r.default=a.exports}}]);