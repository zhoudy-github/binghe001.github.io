(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{576:function(s,n,t){"use strict";t.r(n);var a=t(7),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"metasploit模块的格式说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#metasploit模块的格式说明"}},[s._v("#")]),s._v(" Metasploit模块的格式说明")]),s._v(" "),n("p",[s._v("先给出一个通用的框架头部:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("class MetasoloitModule < Msf::Auxiliary\n  def initialize(info = {})\n     supper(update_info(info,\n         'Name' => 'Module Name',\n         'Description' => %q{\n            Say something that the user might want to know.\n          },\n          'Author' => ['Name'],\n          'License' => MSF_LICENSE\n     ))\n  end\n  def run\n     #Main function\n  end\nend\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("一个框架一般都会从使用require关键字导入重要的库文件开始，上面的代码就导入了msf/core库。所以，这个框架中就包含了msf目录下的core库文件。")]),s._v(" "),n("p",[s._v("接下来的主要任务就是使用MetasploitModule指定这个类的类型，通常是Metasploit3或者Metasploit4，取决于你希望应用的版本。在定义类型的哪行中，还需要定义类的用途。这个示例中定义了类的用途为MSF:Auxiliary")]),s._v(" "),n("p",[s._v("initialize方法是Ruby的默认构造方法。在这个方法中，我们定义了名称(Name)、描述(Description)、作者(Author)、许可(License)和CVE信息等。这个方法涵盖了特定模块的所有相关信息：软件的名称通常会提现设计软件的目的；描述中会包含对漏洞的摘要信息；作者是开发这个模块的人的名字；许可就是MSF_LICENSE.辅助模块中的主函数是run方法。除非是要使用特别多的方法，否则所有的操作都应该在这个函数里面执行。但是程序仍然要从run方法开始执行。")]),s._v(" "),n("h2",{attrs:{id:"写在最后"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),n("blockquote",[n("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);n.default=e.exports}}]);