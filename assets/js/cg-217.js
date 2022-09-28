(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{507:function(s,a,t){"use strict";t.r(a);var e=t(7),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"burpsuite上传截断及截断原理介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#burpsuite上传截断及截断原理介绍"}},[s._v("#")]),s._v(" Burpsuite上传截断及截断原理介绍")]),s._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("p",[s._v("截断的产生核心，就是chr(0)字符 。")]),s._v(" "),a("p",[s._v('这个字符即不为空(Null)，也不是空字符("")，更不是空格！')]),s._v(" "),a("p",[s._v("当程序在输出含有chr(0)变量时，chr(0)后面的数据会被停止，换句话说，就是误把它当成结束符，后面的数据直接忽略，这就导致漏洞产生的原因。")]),s._v(" "),a("h2",{attrs:{id:"后端语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后端语言"}},[s._v("#")]),s._v(" 后端语言")]),s._v(" "),a("h3",{attrs:{id:"php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php"}},[s._v("#")]),s._v(" PHP")]),s._v(" "),a("p",[s._v("在php 5.3.4中修复了0字符，但是在之前的版本中仍然危害巨大。")]),s._v(" "),a("p",[s._v("简单测试一下 (PHP 版本<5.3.4)")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<?php\n$data = $_GET["filename"]`;\necho $data;\n?>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("url中输入xx.php?filename=test.php%00.txt，实际输出为test.php.")]),s._v(" "),a("p",[s._v("常见利用方法：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1.上传时路径可控，使用00截断\n2.文件下载时，00截断绕过白名单检查\n3.文件包含时，00截断后面限制(主要是本地包含时)\n4.其它与文件操作有关的地方都可能使用00截断。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"asp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asp"}},[s._v("#")]),s._v(" ASP")]),s._v(" "),a("p",[s._v("在文件上传路径可控时出现：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<%\nresponse.write(request("Filename"))\n%> \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("传入filename=test.asp%00.txt， 获得参数值是test.asp，asp 会自动截断 %00 后面的内容。")]),s._v(" "),a("h3",{attrs:{id:"jsp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsp"}},[s._v("#")]),s._v(" JSP")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<%\nString temp=request.getRealPath("/")+request.getParameter("path");\n out.println(temp);\n String ext = temp.substring(temp.lastIndexOf(".") + 1);\n out.println(ext);\n %>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("传入path=shell.jsp%00.txt 获得后缀是txt，但是操作文件的api是使用 C 实现会导致00截断。因此这个与php相似，利用场景是文件上传 文件下载等。")]),s._v(" "),a("h2",{attrs:{id:"web容器解析漏洞"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web容器解析漏洞"}},[s._v("#")]),s._v(" Web容器解析漏洞")]),s._v(" "),a("p",[s._v("我们都知道windows2003 + IIS6.0下，如果目录结构中有xxx.asp这样的目录，那么所有这个目录下的文件不管扩展名为什么，都会当作asp来解析。")]),s._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);