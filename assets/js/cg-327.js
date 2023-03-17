(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{619:function(a,t,s){"use strict";s.r(t);var _=s(7),v=Object(_.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"《面试必问》第06章-聊聊kafka的消费模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#《面试必问》第06章-聊聊kafka的消费模型"}},[a._v("#")]),a._v(" 《面试必问》第06章：聊聊Kafka的消费模型？")]),a._v(" "),t("p",[t("strong",[a._v("大家好，我是冰河~~")])]),a._v(" "),t("p",[a._v("最近，有些读者去头条二面，被面试官问了一个关于Kafka的问题："),t("strong",[a._v("多个Kafka消费者如何同时消费相同Topic下的相同Partition的数据？")]),a._v(" 看似一个简单的问题，竟然把这位读者问懵了！")]),a._v(" "),t("p",[a._v("今天，我们就一起来说说这个面试题，好了，开始今天的主题。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"图片","data-src":"https://img-blog.csdnimg.cn/img_convert/b1c2ff67a17e80f250720fc29f189a42.png",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"题目分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目分析"}},[a._v("#")]),a._v(" 题目分析")]),a._v(" "),t("p",[a._v("首先，要明确面试官的问题："),t("strong",[a._v("多个Kafka消费者如何同时消费相同Topic下的相同Partition的数据？")]),a._v(" 这个问题问的已经很明显了，我们只要回答出如何让多个Kafka消费者同时消费相同Topic下的相同Partition的数据就可以了。")]),a._v(" "),t("p",[a._v("为了能够回答好这个问题，我们需要理解Kafka中的一个概念，就是 "),t("strong",[a._v("消费者组")]),a._v("（Consumer Group）。消费者组是Kafka实现单播和广播两种消息模型的基础和手段。")]),a._v(" "),t("p",[a._v("对于同一个Topic（主题）来说，每个消费者组都可以拿到这个Topic中的全部数据。消费者组内的所有消费者协调在一起来订阅并消费Kafka Topic中的所有分区。这里，每个分区只能由同一个消费者组内的一个消费者来消费。")]),a._v(" "),t("p",[a._v("这里，为了更好的理解，我们简单的画一张Kafka消费消息的原理图，如下所示。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"图片","data-src":"https://img-blog.csdnimg.cn/img_convert/a95df89030cacb0132afd0a929ea84f1.png",loading:"lazy"}})]),a._v(" "),t("p",[a._v("在这张图中，一个主题可以配置几个分区，生产者发送的消息分发到不同的分区中，消费者接收数据的时候是按照消费者组来接收的，Kafka确保每个分区的消息只能被同一个消费者组中的同一个消费者消费。")]),a._v(" "),t("p",[a._v("如果想要重复消费，那么需要其他的消费者组来消费。Zookeerper中保存每个主题下的每个分区在每个消费者组中消费的offset。")]),a._v(" "),t("p",[a._v("新版kafka把这个offset保存到了一个"),t("code",[a._v("__consumer_offsert")]),a._v("的主题下。 这个"),t("code",[a._v("__consumer_offsert")]),a._v("有50个分区，通过将消费者组的id哈希值%50的值来确定要保存到那一个分区。这样也是为了考虑到Zookeeper不擅长大量数据读写的原因。")]),a._v(" "),t("p",[a._v("所以，如果要一个消费者组用几个消费者来同时消费Kafka中消息的话，可以使用多线程来读取消息，一个线程相当于一个消费者实例。当消费者的数量大于分区的数量时，有些消费者线程会读取不到数据。")]),a._v(" "),t("h2",{attrs:{id:"扩展知识"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#扩展知识"}},[a._v("#")]),a._v(" 扩展知识")]),a._v(" "),t("p",[a._v("这里，我们举一个例子：假设一个主题 testTopic 被groupA消费了，现在启动另外一个新的groupB来消费testTopic，默认testTopic-groupB的Offset不是0，而是在Kafka中还没有建立这样的一个Offset。")]),a._v(" "),t("p",[a._v("除非当testTopic 主题有数据的时候，groupB会收到该数据，该条数据也是第一条数据，此时，groupB的Offset并不是从0开始的，而是从刚初始化的Offset开始的, 除非显式的用–from-beginning 来获取从0开始的数据。")]),a._v(" "),t("h2",{attrs:{id:"题目解答"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#题目解答"}},[a._v("#")]),a._v(" 题目解答")]),a._v(" "),t("p",[a._v("多个Kafka消费者要想同时消费相同Topic下的相同Partition的数据，则需要将这些Kafka消费者放到不同的消费者组中。")]),a._v(" "),t("p",[t("strong",[a._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),a._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),t("p",[t("strong",[a._v("如果你想进大厂，想升职加薪，或者对自己现有的工作比较迷茫，都可以私信我交流，希望我的一些经历能够帮助到大家~~")])]),a._v(" "),t("p",[t("strong",[a._v("好了，今天就到这儿吧，小伙伴们点赞、收藏、评论，一键三连走起呀，我是冰河，我们下期见~~")])]),a._v(" "),t("blockquote",[t("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=v.exports}}]);