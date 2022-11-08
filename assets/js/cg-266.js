(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{557:function(t,s,a){"use strict";a.r(s);var n=a(7),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"对威胁建模-附加搭建cve-2014-6287漏洞环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对威胁建模-附加搭建cve-2014-6287漏洞环境"}},[t._v("#")]),t._v(" 对威胁建模(附加搭建CVE:2014-6287漏洞环境)")]),t._v(" "),s("p",[t._v("攻击机： Kali 192.168.205.128")]),t._v(" "),s("p",[t._v("靶机： Win2012 R2 192.168.205.130")]),t._v(" "),s("p",[t._v("根据上一篇博文《"),s("a",{attrs:{href:"https://blog.csdn.net/l1028386804/article/details/86564219",target:"_blank",rel:"noopener noreferrer"}},[t._v("Metasploit实战一之——使用OpenVAS进行漏洞扫描"),s("OutboundLink")],1),t._v("》OpenVAS提供的扫描结果，可以看出目标计算机上存在的MS15-034漏洞，但是对这个漏洞的测试可能会引起目标计算机蓝屏宕机。在大多数渗透测试中，都应该避免使用Dos攻击方式。这里，我们选择一个HTTP文件服务器远程代码执行漏洞，编号为CVE 2014-6287。我们在Metasploit中查找这个漏洞对应的渗透模块。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("msf > search cve:2014-6287\n\nMatching Modules\n================\n\n   Name                                   Disclosure Date  Rank       Check  Description\n   ----                                   ---------------  ----       -----  -----------\n   exploit/windows/http/rejetto_hfs_exec  2014-09-11       excellent  Yes    Rejetto HttpFileServer Remote Command Execution\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[s("strong",[t._v("搭建CVE:2014-6287环境")])]),t._v(" "),s("p",[t._v("首先到链接：https://www.exploit-db.com/exploits/34926 下载漏洞程序")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190120221941294.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("然后将下载的程序上传到目标机运行")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190120221958158.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("这里，我们端口改为了8080，如下：")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190120222014892.png",loading:"lazy"}})]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190120222024700.png",loading:"lazy"}})]),t._v(" "),s("p",[t._v("接下来，就是获取目标的控制权限了。")]),t._v(" "),s("h1",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[t._v("#")]),t._v(" 写在最后")]),t._v(" "),s("blockquote",[s("p",[t._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[t._v("冰河技术")]),t._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);