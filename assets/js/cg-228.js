(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{513:function(s,n,a){"use strict";a.r(n);var t=a(6),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"利用metasploit找出scada服务器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#利用metasploit找出scada服务器"}},[s._v("#")]),s._v(" 利用Metasploit找出SCADA服务器")]),s._v(" "),n("h2",{attrs:{id:"注册账号"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#注册账号"}},[s._v("#")]),s._v(" 注册账号")]),s._v(" "),n("p",[s._v("首先，我们在https://www.shodan.io上注册一个账号")]),s._v(" "),n("h2",{attrs:{id:"获取api-key"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取api-key"}},[s._v("#")]),s._v(" 获取API Key")]),s._v(" "),n("p",[s._v("注册账号成功之后，我们获取一个免费的API Key")]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"img","data-src":"https://img-blog.csdnimg.cn/20190117213554609.png",loading:"lazy"}})]),s._v(" "),n("h2",{attrs:{id:"在metasploit中找出采用罗克韦尔自动化技术的scada系统"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在metasploit中找出采用罗克韦尔自动化技术的scada系统"}},[s._v("#")]),s._v(" 在Metasploit中找出采用罗克韦尔自动化技术的SCADA系统")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("msfconsole\nuse auxiliary/gather/shodan_search\nshow options\nset SHODAN_APIKEY 第2步获取的API Key\nset QUERY Rockwell\nrun\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("具体操作如下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("msf > use auxiliary/gather/shodan_search\nmsf auxiliary(gather/shodan_search) > show options\n\nModule options (auxiliary/gather/shodan_search):\n\n   Name           Current Setting  Required  Description\n   ----           ---------------  --------  -----------\n   DATABASE       false            no        Add search results to the database\n   MAXPAGE        1                yes       Max amount of pages to collect\n   OUTFILE                         no        A filename to store the list of IPs\n   Proxies                         no        A proxy chain of format type:host:port[,type:host:port][...]\n   QUERY                           yes       Keywords you want to search for\n   REGEX          .*               yes       Regex search for a specific IP/City/Country/Hostname\n   SHODAN_APIKEY                   yes       The SHODAN API key\n   SSL            false            no        Negotiate SSL/TLS for outgoing connections\n\nmsf auxiliary(gather/shodan_search) > set SHODAN_APIKEY  第2步获取的API Key\nSHODAN_APIKEY => dRDBajzYMt9EPV2I5i87f3YWhfykY43p\nmsf auxiliary(gather/shodan_search) > set QUERY Rockwell\nQUERY => Rockwell\nmsf auxiliary(gather/shodan_search) > run\n\n[*] Total: 7351 on 74 pages. Showing: 1 page(s)\n[*] Collecting data, please wait...\n\nSearch Results\n==============\n\n IP:Port                City               Country             Hostname\n -------                ----               -------             --------\n 104.169.148.106:44818  Lewiston           United States       \n 107.85.58.132:44818    N/A                United States       \n 107.85.58.184:44818    N/A                United States       \n 108.95.125.62:44818    Excelsior Springs  United States       108-95-125-62.lightspeed.mssnks.sbcglobal.net\n 124.199.70.151:44818   Tainan             Taiwan              124-199-70-151.HINET-IP.hinet.net\n 129.24.204.161:44818   Albuquerque        United States       ssc-0006.unm.edu\n 142.55.112.203:44818   Oakville           Canada              br-c147-plc03.ddi.sheridanc.on.ca\n 166.130.151.114:44818  Atlanta            United States       mobile-166-130-151-114.mycingular.net\n 166.130.155.138:44818  Atlanta            United States       mobile-166-130-155-138.mycingular.net\n 166.130.174.51:44818   Atlanta            United States       mobile-166-130-174-51.mycingular.net\n 166.130.71.137:44818   Atlanta            United States       mobile-166-130-71-137.mycingular.net\n 166.130.72.51:44818    Atlanta            United States       mobile-166-130-72-51.mycingular.net\n 166.131.38.86:44818    N/A                United States       mobile-166-131-38-86.mycingular.net\n 166.139.173.118:44818  N/A                United States       118.sub-166-139-173.myvzw.com\n 166.139.78.48:44818    N/A                United States       48.sub-166-139-78.myvzw.com\n 166.141.166.213:44818  N/A                United States       213.sub-166-141-166.myvzw.com\n 166.142.163.179:44818  N/A                United States       179.sub-166-142-163.myvzw.com\n 166.142.214.167:44818  N/A                United States       167.sub-166-142-214.myvzw.com\n 166.142.223.87:44818   N/A                United States       87.sub-166-142-223.myvzw.com\n 166.148.138.164:44818  N/A                United States       164.sub-166-148-138.myvzw.com\n 166.150.224.175:44818  N/A                United States       175.sub-166-150-224.myvzw.com\n 166.150.235.165:44818  N/A                United States       165.sub-166-150-235.myvzw.com\n 166.152.102.3:44818    N/A                United States       3.sub-166-152-102.myvzw.com\n 166.152.146.81:44818   N/A                United States       81.sub-166-152-146.myvzw.com\n 166.152.7.95:44818     N/A                United States       95.sub-166-152-7.myvzw.com\n 166.152.86.244:44818   N/A                United States       244.sub-166-152-86.myvzw.com\n 166.152.88.177:44818   N/A                United States       177.sub-166-152-88.myvzw.com\n 166.155.192.83:44818   N/A                United States       83.sub-166-155-192.myvzw.com\n 166.155.230.179:44818  N/A                United States       179.sub-166-155-230.myvzw.com\n 166.155.244.192:44818  N/A                United States       192.sub-166-155-244.myvzw.com\n 166.155.68.30:44818    N/A                United States       30.sub-166-155-68.myvzw.com\n 166.156.252.231:44818  N/A                United States       231.sub-166-156-252.myvzw.com\n 166.157.134.23:44818   N/A                United States       23.sub-166-157-134.myvzw.com\n 166.157.180.145:44818  N/A                United States       145.sub-166-157-180.myvzw.com\n 166.157.211.136:44818  N/A                United States       136.sub-166-157-211.myvzw.com\n 166.165.60.50:44818    N/A                United States       50.sub-166-165-60.myvzw.com\n 166.165.81.185:44818   N/A                United States       185.sub-166-165-81.myvzw.com\n 166.165.81.188:44818   N/A                United States       188.sub-166-165-81.myvzw.com\n 166.168.129.250:44818  N/A                United States       250.sub-166-168-129.myvzw.com\n 166.168.68.40:44818    N/A                United States       40.sub-166-168-68.myvzw.com\n 166.169.25.205:44818   N/A                United States       205.sub-166-169-25.myvzw.com\n 166.211.227.248:44818  N/A                United States       248.sub-166-211-227.myvzw.com\n 166.239.236.32:44818   N/A                United States       32.sub-166-239-236.myvzw.com\n 166.239.24.87:44818    N/A                United States       87.sub-166-239-24.myvzw.com\n 166.241.108.53:44818   N/A                United States       53.sub-166-241-108.myvzw.com\n 166.246.171.53:44818   N/A                United States       53.sub-166-246-171.myvzw.com\n 166.247.38.132:44818   N/A                United States       132.sub-166-247-38.myvzw.com\n 166.247.38.228:44818   N/A                United States       228.sub-166-247-38.myvzw.com\n 166.247.72.15:44818    N/A                United States       15.sub-166-247-72.myvzw.com\n 166.247.72.26:44818    N/A                United States       26.sub-166-247-72.myvzw.com\n 166.250.88.74:44818    N/A                United States       74.sub-166-250-88.myvzw.com\n 166.254.18.72:44818    N/A                United States       72.sub-166-254-18.myvzw.com\n 166.254.21.20:44818    N/A                United States       20.sub-166-254-21.myvzw.com\n 166.255.248.118:44818  Bothell            United States       118.sub-166-255-248.myvzw.com\n 173.241.180.88:44818   Dickinson          United States       mail.frontiertravelcenter.com\n 174.79.107.66:44818    Rogers             United States       mail.our-klan.com\n 174.90.225.57:44818    Beaumont           Canada              \n 184.13.254.67:44818    Bruceton Mills     United States       static-184-13-254-67.clbg.wv.frontiernet.net\n 184.159.33.72:44818    Osceola            United States       184-159-33-72.stat.centurytel.net\n 184.188.189.102:44818  Littleton          United States       wsip-184-188-189-102.ks.ks.cox.net\n 184.6.175.136:44818    Bassett            United States       tx-184-6-175-136.sta.embarqhsd.net\n 185.183.222.174:44818  Ceuti              Spain               185.183.222.174.dyn.user.borecom.com\n 187.201.128.237:44818  Zapopan            Mexico              dsl-187-201-128-237-dyn.prod-infinitum.com.mx\n 192.186.64.242:44818   Windsor            Canada              d192-186-64-242.db.static.comm.cgocable.net\n 192.199.57.83:44818    Red Earth          Canada              \n 198.0.121.49:44818     N/A                United States       MAIL.GFMCORP.COM\n 198.163.95.77:44818    N/A                United States       \n 198.35.56.250:44818    N/A                United States       \n 199.167.142.76:161     N/A                Canada              \n 199.79.231.236:44818   Augusta            United States       \n 2.143.95.44:44818      Perdices           Spain               44.red-2-143-95.dynamicip.rima-tde.net\n 2.55.70.153:44818      Jerusalem          Israel              \n 207.195.130.150:44818  Rexford            United States       207.195.130.150-st-tel.net\n 208.98.195.106:44818   Calgary            Canada              \n 211.75.65.156:44818    Dongning           Taiwan              211-75-65-156.HINET-IP.hinet.net\n 213.3.8.120:44818      N/A                Switzerland         120.8.3.213.static.wline.lns.sme.cust.swisscom.ch\n 216.115.198.94:44818   Rocky Gap          United States       \n 24.111.213.227:44818   Dickinson          United States       24-111-213-227-static.midco.net\n 24.86.129.129:44818    Vancouver          Canada              S01060030440868d3.vc.shawcable.net\n 50.205.167.178:44818   Elkhart            United States       50-205-167-178-static.hfc.comcastbusiness.net\n 50.247.170.211:44818   Melrose Park       United States       50-247-170-211-static.hfc.comcastbusiness.net\n 58.246.115.189:161     Shanghai           China               \n 59.20.136.91:44818     Busan              Korea, Republic of  \n 63.88.122.58:44818     Richmond           United States       \n 70.166.134.53:44818    Fayetteville       United States       wsip-70-166-134-53.fv.ks.cox.net\n 70.186.236.43:44818    Lowell             United States       wsip-70-186-236-43.ks.ks.cox.net\n 70.28.254.80:44818     Dundalk            Canada              \n 70.62.46.230:44818     Columbus           United States       \n 70.88.243.93:44818     N/A                United States       70-88-243-93-ma-nh-me-ne.hfc.comcastbusiness.net\n 75.228.158.242:44818   N/A                United States       242.sub-75-228-158.myvzw.com\n 76.70.223.14:44818     N/A                Canada              \n 77.210.193.171:44818   Barcelona          Spain               \n 77.211.19.36:44818     Salamanca          Spain               \n 78.116.231.225:44818   Lombez             France              225.231.116.78.rev.sfr.net\n 85.120.40.73:44818     N/A                Romania             \n 91.149.55.49:44818     N/A                Norway              \n 96.57.38.114:44818     Saint James        United States       ool-60392672.static.optonline.net\n 96.70.239.109:44818    Boston             United States       96-70-239-109-static.hfc.comcastbusiness.net\n 96.84.106.227:44818    Chicago            United States       96-84-106-227-static.hfc.comcastbusiness.net\n 98.164.37.98:44818     Skiatook           United States       wsip-98-164-37-98.tu.ok.cox.net\n\n[*] Auxiliary module execution completed\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br"),n("span",{staticClass:"line-number"},[s._v("113")]),n("br"),n("span",{staticClass:"line-number"},[s._v("114")]),n("br"),n("span",{staticClass:"line-number"},[s._v("115")]),n("br"),n("span",{staticClass:"line-number"},[s._v("116")]),n("br"),n("span",{staticClass:"line-number"},[s._v("117")]),n("br"),n("span",{staticClass:"line-number"},[s._v("118")]),n("br"),n("span",{staticClass:"line-number"},[s._v("119")]),n("br"),n("span",{staticClass:"line-number"},[s._v("120")]),n("br"),n("span",{staticClass:"line-number"},[s._v("121")]),n("br"),n("span",{staticClass:"line-number"},[s._v("122")]),n("br"),n("span",{staticClass:"line-number"},[s._v("123")]),n("br"),n("span",{staticClass:"line-number"},[s._v("124")]),n("br"),n("span",{staticClass:"line-number"},[s._v("125")]),n("br"),n("span",{staticClass:"line-number"},[s._v("126")]),n("br"),n("span",{staticClass:"line-number"},[s._v("127")]),n("br"),n("span",{staticClass:"line-number"},[s._v("128")]),n("br"),n("span",{staticClass:"line-number"},[s._v("129")]),n("br"),n("span",{staticClass:"line-number"},[s._v("130")]),n("br"),n("span",{staticClass:"line-number"},[s._v("131")]),n("br"),n("span",{staticClass:"line-number"},[s._v("132")]),n("br")])]),n("p",[s._v("可以看到找到了很多的SCADA系统。")]),s._v(" "),n("h2",{attrs:{id:"写在最后"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),n("blockquote",[n("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),n("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),n("p",[n("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);n.default=e.exports}}]);