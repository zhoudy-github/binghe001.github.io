(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{609:function(s,a,t){"use strict";t.r(a);var r=t(24),n=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"使用rarcrack暴力破解rar-zip-7z压缩包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用rarcrack暴力破解rar-zip-7z压缩包"}},[s._v("#")]),s._v(" 使用rarcrack暴力破解RAR，ZIP，7Z压缩包")]),s._v(" "),t("p",[s._v("这里使用的软件名称叫rarcrack，其官方主页: http://rarcrack.sourceforge.net")]),s._v(" "),t("p",[s._v("该软件用于暴力破解压缩文件的密码，但仅支持RAR, ZIP, 7Z这三种类型的压缩包，其特点是可以使用多线程，而且可以随时暂停与继续(暂停时会在当前目录生成一个xml文件，里面显示了正在尝试的一个密码)。这是真正的暴力破解，因为连字典都没用\nrarcrack安装方法")]),s._v(" "),t("p",[s._v("首先从官网下载安装包，然后执行如下命令")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -xjf rarcrack-0.2.tar.bz2\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" rarcrack-0.2\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("或者直接使用下述命令安装rarcrack")]),s._v(" "),t("p",[s._v("apt-get install rarcrack")]),s._v(" "),t("p",[s._v("rarcrack使用方法")]),s._v(" "),t("p",[s._v("执行命令: rarcrack 文件名 -threads 线程数 -type rar|zip|7z")]),s._v(" "),t("p",[s._v("同时，该软件自带了测试样例，在解压目录里，执行rarcrack test.zip —threads 4 —type zip，等待一会儿即可得到结果，其密码是100，很简单。在执行过程中，还会打印当前尝试的速度，比如:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Probing: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'oB'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("527")]),s._v(" pwds/sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nProbing: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Nh'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("510")]),s._v(" pwds/sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nProbing: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0c3'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" pwds/sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nProbing: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0AV'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("514")]),s._v(" pwds/sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("如果要改变当前密码破解的位置，可以直接打开xml，修改当前密码到那一行密码即可。xml内容如下:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("?xml "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("encoding")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UTF-8"')]),s._v("?"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("rarcrack"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("abc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/abc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("current"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("4")]),s._v("<")]),s._v("/current"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("good_password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v("<")]),s._v("/good_password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/rarcrack"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("在执行过程中，如果出现如下错误:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("gcc -pthread rarcrack.cxml2-config --libs --cflags-O2 -o rarcrack  \n/bin/sh: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": xml2-config: not found  \nIn "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" included from rarcrack.c:21:0:  \nrarcrack.h:25:48: 致命错误： libxml/xmlmemory.h：没有那个文件或目录  \n编译中断。  \nmake: *** "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("all"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 错误 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("那么可以执行sudo apt-get install libxml2-dev libxslt-dev进行修复。")]),s._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),t("blockquote",[t("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);