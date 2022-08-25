(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{468:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"kali系统报错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kali系统报错"}},[s._v("#")]),s._v(" Kali系统报错")]),s._v(" "),t("h2",{attrs:{id:"问题重现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题重现"}},[s._v("#")]),s._v(" 问题重现：")]),s._v(" "),t("p",[s._v("命令行输入：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("add-apt-repository ppa:yubico/stable "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("问题如下：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# add-apt-repository ppa:yubico/stable && sudo apt-get update")]),s._v("\nTraceback "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("most recent call last"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(":\n  File "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/bin/add-apt-repository"')]),s._v(", line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("95")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("module"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    sp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" SoftwareProperties"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("options"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  File "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python3/dist-packages/softwareproperties/SoftwareProperties.py"')]),s._v(", line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("109")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" __init__\n    self.reload_sourceslist"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  File "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python3/dist-packages/softwareproperties/SoftwareProperties.py"')]),s._v(", line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("599")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" reload_sourceslist\n    self.distro.get_sources"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self.sourceslist"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    \n  File "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/lib/python3/dist-packages/aptsources/distro.py"')]),s._v(", line "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("93")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" get_sources\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self.id, self.codename"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v("\naptsources.distro.NoDistroTemplateException: Error: could not "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" a distribution template "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Kali/kali-rolling\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/apt/source.list\n \ndeb http://ppa.launchpad.net/yubico/stable/ubuntu cosmic main \ndeb-src http://ppa.launchpad.net/yubico/stable/ubuntu cosmic main \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),t("blockquote",[t("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);