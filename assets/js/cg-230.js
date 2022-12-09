(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{519:function(e,t,s){"use strict";s.r(t);var o=s(7),r=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"psexec下载地址及其用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#psexec下载地址及其用法"}},[e._v("#")]),e._v(" PsExec下载地址及其用法")]),e._v(" "),t("p",[t("a",{attrs:{href:"http://technet.microsoft.com/en-us/sysinternals/bb897553.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("PsExec下载地址"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"http://download.sysinternals.com/files/PSTools.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("PSTools.zip"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("http://technet.microsoft.com/en-us/sysinternals/bb897553.aspx")]),e._v(" "),t("h2",{attrs:{id:"using-psexec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-psexec"}},[e._v("#")]),e._v(" Using PsExec")]),e._v(" "),t("p",[e._v("See the July 2004 issue of "),t("em",[e._v("Windows IT Pro Magazine")]),e._v(" for "),t("a",{attrs:{href:"http://windowsitpro.com/systems-management/psexec",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mark's article"),t("OutboundLink")],1),e._v(" that covers advanced usage of PsExec.")]),e._v(" "),t("p",[t("strong",[e._v("Usage: psexec [\\computer[,computer2"),t("a",{attrs:{href:"#"}},[e._v(",...] | @file")]),e._v("]"),t("a",{attrs:{href:"#"}},[e._v("-n s")]),t("a",{attrs:{href:"#"}},[e._v("-s|-e")]),e._v("[-i "),t("a",{attrs:{href:"#"}},[e._v("session]")]),e._v("]"),t("a",{attrs:{href:"#"}},[e._v("-w directory")]),t("a",{attrs:{href:"#"}},[e._v("-")]),e._v(" cmd [arguments]")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[e._v("computer")])]),e._v(" "),t("th",[e._v('Direct PsExec to run the application on the computer or computers specified.  If you omit the computer name PsExec runs the application on the local  system and if you enter a computer name of "*" PsExec runs the  applications on all computers in the current domain.')])])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[e._v("@file")])]),e._v(" "),t("td",[e._v("Directs PsExec to run the command on each computer listed in the text file specified.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("-a")])]),e._v(" "),t("td",[e._v('Separate processors on which the application can run with commas where 1 is the  lowest numbered CPU. For example, to run the application on CPU 2 and  CPU 4, enter: "-a 2,4"')])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("-c")])]),e._v(" "),t("td",[e._v("Copy the specified program to the remote system for execution. If you omit  this option then the application must be in the system's path on the  remote system.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("-d")])]),e._v(" "),t("td",[e._v("Don't wait for application to terminate. Only use this option for non-interactive applications.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("-e")])]),e._v(" "),t("td",[e._v("Does not load the specified account's profile.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("-f")])]),e._v(" "),t("td",[e._v("Copy the specified program to the remote system even if the file already exists on the remote system.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("-i")])]),e._v(" "),t("td",[e._v("Run the program so that it interacts with the desktop of the specified  session on the remote system. If no session is specified the process  runs in the console session.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("-l")])]),e._v(" "),t("td",[e._v("Run process as limited user (strips the Administrators group and allows  only privileges assigned to the Users group). On Windows Vista the  process runs with Low Integrity.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("-n")])]),e._v(" "),t("td",[e._v("Specifies timeout in seconds connecting to remote computers.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("-p")])]),e._v(" "),t("td",[e._v("Specifies optional password for user name. If you omit this you will be prompted to enter a hidden password.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("-s")])]),e._v(" "),t("td",[e._v("Run remote process in the System account.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("-u")])]),e._v(" "),t("td",[e._v("Specifies optional user name for login to remote computer.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("-v")])]),e._v(" "),t("td",[e._v("Copy the specified file only if it has a higher version number or is newer on than the one on the remote system.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("-w")])]),e._v(" "),t("td",[e._v("Set the working directory of the process (relative to the remote computer).")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("-x")])]),e._v(" "),t("td",[e._v("Display the UI on the Winlogon desktop (local system only).")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("-priority")])]),e._v(" "),t("td",[e._v("Specifies -low, -belownormal, -abovenormal, -high or -realtime to run the process at a different priority. Use -background to run at low memory and I/O  priority on Vista.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("program")])]),e._v(" "),t("td",[e._v("Name of the program to execute.")])]),e._v(" "),t("tr",[t("td",[t("strong",[e._v("arguments")])]),e._v(" "),t("td",[e._v("Arguments to pass (note that file paths must be absolute paths on the target system)")])])])]),e._v(" "),t("p",[e._v('You can enclose applications that have spaces in their name with  quotation marks e.g. "psexec \\marklap "c:\\long name\\app.exe". Input is  only passed to the remote system when you press the enter key, and  typing Ctrl-C terminates the remote process.')]),e._v(" "),t("p",[e._v("If you omit a username the remote process runs in the same account  from which you execute PsExec, but because the remote process is  impersonating it will not have access to network resources on the remote system. When you specify a username the remote process executes in the  account specified, and will have access to any network resources the  account has access to. Note that the password is transmitted in clear  text to the remote system.")]),e._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("p",[e._v("This article I wrote "),t("a",{attrs:{href:"http://windowsitpro.com/systems-management/psexec",target:"_blank",rel:"noopener noreferrer"}},[e._v("describes how PsExec works"),t("OutboundLink")],1),e._v(" and gives tips on how to use it:")]),e._v(" "),t("p",[e._v("The following command launches an interactive command prompt on \\marklap:")]),e._v(" "),t("p",[t("strong",[e._v("psexec \\marklap cmd")])]),e._v(" "),t("p",[e._v("This command executes IpConfig on the remote system with the /all switch, and displays the resulting output locally:")]),e._v(" "),t("p",[t("strong",[e._v("psexec \\marklap ipconfig /all")])]),e._v(" "),t("p",[e._v("This command copies the program test.exe to the remote system and executes it interactively:")]),e._v(" "),t("p",[t("strong",[e._v("psexec \\marklap -c test.exe")])]),e._v(" "),t("p",[e._v("Specify the full path to a program that is already installed on a remote system if its not on the system's path:")]),e._v(" "),t("p",[t("strong",[e._v("psexec \\marklap c:\\bin\\test.exe")])]),e._v(" "),t("p",[e._v("Run Regedit interactively in the System account to view the contents of the SAM and SECURITY keys::")]),e._v(" "),t("p",[t("strong",[e._v("psexec -i -d -s c:\\windows\\regedit.exe")])]),e._v(" "),t("p",[e._v("To run Internet Explorer as with limited-user privileges use this command:")]),e._v(" "),t("p",[t("strong",[e._v('psexec -l -d "c:\\program files\\internet explorer\\iexplore.exe"')])]),e._v(" "),t("p",[e._v("以下命令可在 \\marklap 上启动交互式命令提示窗口")]),e._v(" "),t("p",[t("strong",[e._v("psexec \\marklap cmd")])]),e._v(" "),t("p",[e._v("此命令通过 /all 开关在远程系统上执行 IpConfig，并在本地显示输出结果：")]),e._v(" "),t("p",[t("strong",[e._v("psexec \\marklap ipconfig /all")])]),e._v(" "),t("p",[e._v("此命令将程序 test.exe 复制到远程系统，并以交互方式执行此程序：")]),e._v(" "),t("p",[t("strong",[e._v("psexec \\marklap -c test.exe")])]),e._v(" "),t("p",[e._v("如果远程系统中已经安装的程序不在系统路径中，请指定该程序的完整路径：")]),e._v(" "),t("p",[t("strong",[e._v("psexec \\marklap c:\\bin\\test.exe")])]),e._v(" "),t("p",[e._v("在系统帐户中以交互方式运行 Regedit，以便查看 SAM 和 SECURITY "),t("a",{attrs:{href:"http://baike.baidu.com/view/627022.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("注册表项"),t("OutboundLink")],1),e._v("的内容：")]),e._v(" "),t("p",[e._v("http://technet.microsoft.com/en-us/sysinternals/bb897553.aspx")]),e._v(" "),t("p",[e._v("要以受限用户权限运行 Internet Explorer，请使用此命令：")]),e._v(" "),t("p",[t("strong",[e._v('psexec -l -d "c:\\program files\\internet explorer\\iexplore.exe"')])]),e._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[e._v("#")]),e._v(" 写在最后")]),e._v(" "),t("blockquote",[t("p",[e._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[e._v("冰河技术")]),e._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[e._v("冰河技术")]),e._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[e._v("冰河技术")]),e._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[e._v("冰河技术")]),e._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),e._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);