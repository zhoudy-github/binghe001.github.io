(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{616:function(s,a,e){"use strict";e.r(a);var n=e(7),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用openvas进行漏洞扫描"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用openvas进行漏洞扫描"}},[s._v("#")]),s._v(" 使用OpenVAS进行漏洞扫描")]),s._v(" "),a("p",[s._v("攻击机： Kali 192.168.205.128")]),s._v(" "),a("p",[s._v("靶机： Win2012 R2 192.168.205.130")]),s._v(" "),a("p",[s._v("注：Kali中安装OpenVAS可以参考：《"),a("a",{attrs:{href:"https://blog.csdn.net/l1028386804/article/details/86561375",target:"_blank",rel:"noopener noreferrer"}},[s._v("Kali之——OpenVAS 8.0 Vulnerability Scanning"),a("OutboundLink")],1),s._v("》")]),s._v(" "),a("h2",{attrs:{id:"在metasploit中加载openvas插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在metasploit中加载openvas插件"}},[s._v("#")]),s._v(" 在Metasploit中加载OpenVAS插件")]),s._v(" "),a("p",[s._v("为了将OpenVAS整合到Metasploit中，首先需要在Metasploit中加载OpenVAS插件。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("msfconsole\nload\nload openvas\n\nmsf > load \nload aggregator        load db_credcollect    load ips_filter        load msfd              load openvas           load sample            load sounds            load token_hunter      \nload alias             load db_tracker        load komand            load msgrpc            load pcap_log          load session_notifier  load sqlmap            load wiki              \nload auto_add_route    load event_tester      load lab               load nessus            load request           load session_tagger    load thread            load wmap              \nload beholder          load ffautoregen       load libnotify         load nexpose           load rssfeed           load socket_logger     load token_adduser     \nmsf > load openvas \n[*] Welcome to OpenVAS integration by kost and averagesecurityguy.\n[*] \n[*] OpenVAS integration requires a database connection. Once the \n[*] database is ready, connect to the OpenVAS server using openvas_connect.\n[*] For additional commands use openvas_help.\n[*] \n[*] Successfully loaded plugin: OpenVAS\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"将metasploit中的openvas插件与openvas软件本身连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将metasploit中的openvas插件与openvas软件本身连接"}},[s._v("#")]),s._v(" 将Metasploit中的OpenVAS插件与OpenVAS软件本身连接")]),s._v(" "),a("p",[s._v("可以通过在命令openvas_connect后面添加用户凭证、服务器地址、端口号和SSL状态实现，如下命令所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("openvas_connect admin admin localhost 9390 ok\n\nmsf > openvas_connect admin admin localhost 9390 ok\n[*] Connecting to OpenVAS instance at localhost:9390 with username admin...\n/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.\n[+] OpenVAS connection successful\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"创建工作区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建工作区"}},[s._v("#")]),s._v(" 创建工作区")]),s._v(" "),a("h2",{attrs:{id:"查看帮助信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看帮助信息"}},[s._v("#")]),s._v(" 查看帮助信息")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("workspace -h\n\nmsf > workspace -h\nUsage:\n    workspace                  List workspaces\n    workspace -v               List workspaces verbosely\n    workspace [name]           Switch workspace\n    workspace -a [name] ...    Add workspace(s)\n    workspace -d [name] ...    Delete workspace(s)\n    workspace -D               Delete all workspaces\n    workspace -r <old> <new>   Rename workspace\n    workspace -h               Show this help information\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"创建一个名为netscan的工作区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个名为netscan的工作区"}},[s._v("#")]),s._v(" 创建一个名为NetScan的工作区")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("workspace -a NetScan\n\nmsf > workspace -a NetScan\n[*] Added workspace: NetScan\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"切换到netscan工作区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#切换到netscan工作区"}},[s._v("#")]),s._v(" 切换到NetScan工作区")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("workspace NetScan\n\nmsf > workspace NetScan \n[*] Workspace: NetScan\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"创建目标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建目标"}},[s._v("#")]),s._v(" 创建目标")]),s._v(" "),a("p",[s._v("可以使用命令openvas_target_create来创建任意数量的目标。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("openvas_target_create\nopenvas_target_create outer 192.168.205.130 Outer_Interface\n\nmsf > openvas_target_create \n[*] Usage: openvas_target_create <name> <hosts> <comment>\nmsf > \nmsf > openvas_target_create outer 192.168.205.130 Outer_Interface\n/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.\n[*] 275520c1-9a9e-4e49-865a-cd22ca4f3c6f\n/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.\n[+] OpenVAS list of targets\n\nID                                    Name   Hosts            Max Hosts  In Use  Comment\n--                                    ----   -----            ---------  ------  -------\n275520c1-9a9e-4e49-865a-cd22ca4f3c6f  outer  192.168.205.130  1          0       Outer_Interface\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("这里，我们创建了IP地址为192.168.205.130的目标，名字为outer，备注为Outer-Interface，"),a("strong",[s._v("我们需要记住这个目标的ID:275520c1-9a9e-4e49-865a-cd22ca4f3c6f")])]),s._v(" "),a("h2",{attrs:{id:"定义策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义策略"}},[s._v("#")]),s._v(" 定义策略")]),s._v(" "),a("p",[s._v("可以使用openvas_config_list命令列出示例策略。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("openvas_config_list\n\nmsf > openvas_config_list\n/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.\n[+] OpenVAS list of configs\n\nID                                    Name\n--                                    ----\n085569ce-73ed-11df-83c3-002264764cea  empty\n2d3f051c-55ba-11e3-bf43-406186ea4fc5  Host Discovery\n698f691e-7489-11df-9d8c-002264764cea  Full and fast ultimate\n708f25c4-7489-11df-8094-002264764cea  Full and very deep\n74db13d6-7489-11df-91b9-002264764cea  Full and very deep ultimate\n8715c877-47a0-438d-98a3-27c7a6ab2196  Discovery\nbbca7412-a950-11e3-9109-406186ea4fc5  System Discovery\ndaba56c8-73ec-11df-a475-002264764cea  Full and fast\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("这里，我们选择Full and fast策略，同样"),a("strong",[s._v("我们需要记住这个策略ID：daba56c8-73ec-11df-a475-002264764cea")])]),s._v(" "),a("h2",{attrs:{id:"创建扫描任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建扫描任务"}},[s._v("#")]),s._v(" 创建扫描任务")]),s._v(" "),a("p",[s._v("这里我们使用的命令是openvas_task_create")]),s._v(" "),a("p",[s._v("首先，我们查看下目标列表")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("openvas_target_list\n\nmsf > openvas_target_list\n/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.\n[+] OpenVAS list of targets\n\nID                                    Name   Hosts            Max Hosts  In Use  Comment\n--                                    ----   -----            ---------  ------  -------\n275520c1-9a9e-4e49-865a-cd22ca4f3c6f  outer  192.168.205.130  1          0       Outer_Interface\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("接着创建扫描任务")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("openvas_task_create\nopenvas_task_create Netscan ScanForVulns 策略id 目标id\n\nmsf > openvas_task_create \n[*] Usage: openvas_task_create <name> <comment> <config_id> <target_id>\nmsf > \nmsf > openvas_task_create  Netscan ScanForVulns daba56c8-73ec-11df-a475-002264764cea 275520c1-9a9e-4e49-865a-cd22ca4f3c6f\n/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.\n[*] f1311593-6ffb-4eef-817f-3c0f1df521b7\n/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.\n[+] OpenVAS list of tasks\n\nID                                    Name     Comment       Status  Progress\n--                                    ----     -------       ------  --------\nf1311593-6ffb-4eef-817f-3c0f1df521b7  Netscan  ScanForVulns  New     -1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("这里的目标id就是第4步中创建的目标id，策略id就是第5步中创建的策略id")]),s._v(" "),a("p",[s._v("这里，"),a("strong",[s._v("我们也需要记下这个任务id：f1311593-6ffb-4eef-817f-3c0f1df521b7")])]),s._v(" "),a("h2",{attrs:{id:"开始扫描"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始扫描"}},[s._v("#")]),s._v(" 开始扫描")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("openvas_task_start\nopenvas_task_start 任务id\n\nmsf > openvas_task_start\n[*] Usage: openvas_task_start <id>\nmsf > \nmsf > openvas_task_start f1311593-6ffb-4eef-817f-3c0f1df521b7\n/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.\n[*] <X><authenticate_response status='200' status_text='OK'><role>Admin</role><timezone>UTC</timezone><severity>nist</severity></authenticate_response><start_task_response status='202' status_text='OK, request submitted'><report_id>cdfbf3e8-cf79-4f5e-a34d-6076457bd16b</report_id></start_task_response></X>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("这里的任务id就是第6步中得出的任务id")]),s._v(" "),a("h2",{attrs:{id:"查看任务进度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看任务进度"}},[s._v("#")]),s._v(" 查看任务进度")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("openvas_task_list\n\nmsf > openvas_task_list \n/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.\n[+] OpenVAS list of tasks\n\nID                                    Name     Comment       Status   Progress\n--                                    ----     -------       ------   --------\nf1311593-6ffb-4eef-817f-3c0f1df521b7  Netscan  ScanForVulns  Running  94\n\nmsf > openvas_task_list \n/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.\n[+] OpenVAS list of tasks\n\nID                                    Name     Comment       Status  Progress\n--                                    ----     -------       ------  --------\nf1311593-6ffb-4eef-817f-3c0f1df521b7  Netscan  ScanForVulns  Done    -1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"列出扫描报告"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列出扫描报告"}},[s._v("#")]),s._v(" 列出扫描报告")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("openvas_report_list\n\nmsf > openvas_report_list \n/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.\n/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.\n[+] OpenVAS list of reports\n\nID                                    Task Name  Start Time            Stop Time\n--                                    ---------  ----------            ---------\ncdfbf3e8-cf79-4f5e-a34d-6076457bd16b  Netscan    2019-01-20T09:39:11Z  2019-01-20T09:44:11Z\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("这些报告可以下载,如果需要导出报告，那么我们就要选择一个报告id")]),s._v(" "),a("h2",{attrs:{id:"查看所有的格式id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看所有的格式id"}},[s._v("#")]),s._v(" 查看所有的格式ID")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('openvas_format_list\n\nmsf > openvas_format_list \n/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.\n[+] OpenVAS list of report formats\n\nID                                    Name           Extension  Summary\n--                                    ----           ---------  -------\n5057e5cc-b825-11e4-9d0e-28d24461215b  Anonymous XML  xml        Anonymous version of the raw XML report\n50c9950a-f326-11e4-800c-28d24461215b  Verinice ITG   vna        Greenbone Verinice ITG Report, v1.0.1.\n5ceff8ba-1f62-11e1-ab9f-406186ea4fc5  CPE            csv        Common Product Enumeration CSV table.\n6c248850-1f62-11e1-b082-406186ea4fc5  HTML           html       Single page HTML report.\n77bd6c4a-1f62-11e1-abf0-406186ea4fc5  ITG            csv        German "IT-Grundschutz-Kataloge" report.\n9087b18c-626c-11e3-8892-406186ea4fc5  CSV Hosts      csv        CSV host summary.\n910200ca-dc05-11e1-954f-406186ea4fc5  ARF            xml        Asset Reporting Format v1.0.0.\n9ca6fe72-1f62-11e1-9e7c-406186ea4fc5  NBE            nbe        Legacy OpenVAS report.\n9e5e5deb-879e-4ecc-8be6-a71cd0875cdd  Topology SVG   svg        Network topology SVG image.\na3810a62-1f62-11e1-9219-406186ea4fc5  TXT            txt        Plain text report.\na684c02c-b531-11e1-bdc2-406186ea4fc5  LaTeX          tex        LaTeX source file.\na994b278-1f62-11e1-96ac-406186ea4fc5  XML            xml        Raw XML report.\nc15ad349-bd8d-457a-880a-c7056532ee15  Verinice ISM   vna        Greenbone Verinice ISM Report, v3.0.0.\nc1645568-627a-11e3-a660-406186ea4fc5  CSV Results    csv        CSV result list.\nc402cc3e-b531-11e1-9163-406186ea4fc5  PDF            pdf        Portable Document Format report.\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("h2",{attrs:{id:"将报告导入数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将报告导入数据库"}},[s._v("#")]),s._v(" 将报告导入数据库")]),s._v(" "),a("p",[s._v("这里使用openvas_report_import命令后面加上报告ID和格式ID导入到数据库中。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("openvas_report_import 报告id 格式id\n\nmsf > openvas_report_import cdfbf3e8-cf79-4f5e-a34d-6076457bd16b a994b278-1f62-11e1-96ac-406186ea4fc5\n/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.\n/usr/share/metasploit-framework/vendor/bundle/ruby/2.5.0/gems/openvas-omp-0.0.4/lib/openvas-omp.rb:201: warning: Object#timeout is deprecated, use Timeout.timeout instead.\n[*] Importing report to database.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"查看msf中的漏洞数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看msf中的漏洞数据库"}},[s._v("#")]),s._v(" 查看MSF中的漏洞数据库")]),s._v(" "),a("p",[s._v("将报告成功导入数据库之后，就可以使用vulns命令查看MSF中的漏洞数据库，如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("msf > vulns\n[*] Time: 2019-01-20 09:48:02 UTC Vuln: host=192.168.205.130 name=ICMP Timestamp Detection refs=CVE-1999-0524 \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"通过浏览器访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过浏览器访问"}},[s._v("#")]),s._v(" 通过浏览器访问")]),s._v(" "),a("p",[s._v("所有的漏洞都已经保存到了数据库中，我们还可以通过浏览器9392端口来登录Greenbone助手，对漏洞数量进行交替确认，并深入了解这些漏洞的细节。如下图所示：")]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190120181020394.png",loading:"lazy"}})]),s._v(" "),a("h1",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),a("blockquote",[a("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=t.exports}}]);