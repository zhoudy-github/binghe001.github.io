(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{611:function(s,a,e){"use strict";e.r(a);var t=e(24),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"字典生成工具crunch的使用案例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字典生成工具crunch的使用案例"}},[s._v("#")]),s._v(" 字典生成工具Crunch的使用案例")]),s._v(" "),e("p",[s._v("具体案例：")]),s._v(" "),e("p",[e("strong",[s._v("案例1：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 1 8\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("#生成最小1位，最大8位，由26个小写字母为元素的所有组合")]),s._v(" "),e("p",[e("strong",[s._v("案例2：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 1 6 abcdefg\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("#生成 最小为1,最大为6.由abcdefg为元素的所有组合")]),s._v(" "),e("p",[e("strong",[s._v("案例3：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 1 6 abcdefg\\\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("#生成 最小为1,最大为6.由abcdefg和空格为元素的所有组合（/代表空格）")]),s._v(" "),e("p",[e("strong",[s._v("案例4：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 1 8 -f charset.lst mixalpha-numeric-all-space -o wordlist.txt\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("#调用密码库 charset.lst， 生成最小为1，最大为8,元素为密码库 charset.lst中 mixalpha-numeric-all-space的项目，并保存为 wordlist.txt；其中 charset.lst在kali_linux的目录为 /usr/share/crunch/charset.lst， charset.lst中 mixalpha-numeric-all-space项目包含最常见的元素组合（即大小写字母+数字+常见符号）；")]),s._v(" "),e("blockquote",[e("p",[s._v("想了解更多可以cat /usr/share/crunch/charset.lst 查看所有密码库")])]),s._v(" "),e("p",[e("strong",[s._v("案例5：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 8 8 -f charset.lst mixalpha-numeric-all-space -o wordlist.txt -t @@dog @@@ -s cbdogaaa\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("#调用密码库 charset.lst，生成8位密码；其中元素为 密码库 charset.lst中 mixalpha-numeric-all-space的项；格式为“两个小写字母+dog+三个小写字母”，并以cbdogaaa开始枚举（@代表小写字母）")]),s._v(" "),e("p",[e("strong",[s._v("案例6：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 2 3 -f charset.lst ualpha -s BB\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("#调用密码库charset.lst，生成2位和3位密码；其中元素为密码库charset.lst中ualpha的项；并且以BB开头")]),s._v(" "),e("p",[e("strong",[s._v("案例7：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 4 5 -p abc\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("#crunch将会生成abc, acb, bac, bca, cab, cba，虽然数字4和5这里没用，但必须有")]),s._v(" "),e("p",[e("strong",[s._v("案例8：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 4 5 -p dog cat bird\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("#crunch将生成以“dog”“cat”“bird”为元素的所有密码组合：birdcatdog，birddogcat，catbirddog,   catdogbird, dogbirdcat, dogcatbird")]),s._v(" "),e("p",[e("strong",[s._v("案例9：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 1 5 -o START -c 6000 -z bzip2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v('生成最小为1位，最大为5位元素为所有小写字母的密码字典，其中每一个字典文件包含6000个密码，并将密码文件保存为bz2文件，文件名将以  "第一个密码" + " - " + "最后一个密码" + " .txt.bz2 " 保存（比如000-999.txt.bz2）；下面是生成几种格式的压缩文件所用的时间和体积大小对比：')]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# time ./crunch 1 4 -o START -c 6000 -z gzip\n\nreal    0m2.729s\nuser    0m2.216s\nsys     0m0.360s\n\n# time ./crunch 1 4 -o START -c 6000 -z bzip2\n\nreal    0m3.414s\nuser    0m2.620s\nsys     0m0.580s\n\n# time ./crunch 1 4 -o START -c 6000 -z lzma\n\nreal    0m43.060s\nuser    0m9.965s\nsys     0m32.634s\nsize  filename\n30K   aaaa-aiwt.txt\n12K   aaaa-aiwt.txt.gz\n3.8K  aaaa-aiwt.txt.bz2\n1.1K  aaaa-aiwt.txt.lzma\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])]),e("p",[e("strong",[s._v("案例10：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 4 5 -b 20mib -o START\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("生成最小为4位，最大为5位元素为所有小写字母的密码字典，并以20M进行分割；这时会生成4个文件：aaaa-gvfed.txt,  gvfee-ombqy.txt,  ombqz-wcydt.txt, wcydu-zzzzz.txt：其中前三个大概每个20M，最后一个10M左右（因为总共70M）")]),s._v(" "),e("p",[e("strong",[s._v("案例11：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 4 4  + + 123 + -t %%@^\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("#生成4位密码，其中格式为“两个数字”+“一个小写字母”+“常见符号”（其中数字这里被指定只能为123组成的所有2位数字组合）。比如12f#      32j^    13t$    ......")]),s._v(" "),e("p",[e("strong",[s._v("案例12：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 3 3 abc + 123 @#! -t @%^\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("#生成3位密码，其中第一位由“a，b，c”中的一个；第二位为“1,2,3”中的一个；第三位为“！，@，#”中的一个。比如1a！   2a#      3b@   ......")]),s._v(" "),e("p",[e("strong",[s._v("案例13：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 3 3 abc + 123 @#! -t ^%@\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("#生成3位密码，其中格式为“字符+数字+字母”，这里字符范围为！@# ，数字范围为 1 2 3 , 字母范围为a b c")]),s._v(" "),e("p",[s._v("比如！1c    @3b       @2a       ......")]),s._v(" "),e("p",[e("strong",[s._v("案例14")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 5 5 -t ddd@@  -p dog cat bird\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("#生成5个元素组成的密码，其中前三个为 dog cat bird任意组合，后两个为两个小写字母的任意组合。比如birddogcatuz         catdogbirdab         birdcatdogff           ......")]),s._v(" "),e("p",[e("strong",[s._v("案例15：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 7 7 -t p@ss,%^ -l a@aaaaa\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("#生成7位密码，格式为“字符p@ss”+大写字母+数字+符号     比如  p@ssZ9>  ......")]),s._v(" "),e("p",[e("strong",[s._v("案例16：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 5 5 -s @4#S2 -t @%^,% -e @8 Q2 -l @dddd -b 10KB -o START\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("#生成5位密码，格式为小写字母+数字+符号+大写字母+数字，并以 @4#S2开始，分割为10k大小。。。")]),s._v(" "),e("p",[e("strong",[s._v("案例17：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 5 5 -d 2@ -t @@@%%\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("#生成5位密码，格式为三个字母+两个数字，并限制每个密码最少出现2种字母")]),s._v(" "),e("p",[e("strong",[s._v("案例18：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 10 10 -t @@@^%%%%^^ -d 2@ -d 3% -b 20mb -o START\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("#生成10位密码，格式为三个小写字母+一个符号+四个数字+两个符号，限制每个密码至少2种字母和至少3种数字")]),s._v(" "),e("p",[e("strong",[s._v("案例19：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 8 8 -d 2@\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("#生成8位密码，每个密码至少出现两种字母")]),s._v(" "),e("p",[e("strong",[s._v("案例20：")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 4 4 -f unicode_test.lst the-greeks -t @@%% -l @xdd\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("#调用密码库 unicode_test.lst中的 the-greeks项目字符，生成4位密码，其中格式为两小写字母+两数字，同样kali_linux中 unicode_test.lst 在/usr/share/crunch目录")]),s._v(" "),e("p",[e("strong",[s._v("案例21：")]),s._v(" 字符集")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 4 4 -f /usr/share/crunch/charset.lst lalpha-sv -o 1.txt\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("案例22：")]),s._v(" 无重复字符：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 1 1 -p 1234567890 | more   （10位数字颠倒位置，1 1 无效但必须存在）\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("必须是最后一个参数；")]),s._v(" "),e("p",[e("strong",[s._v("案例23")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 5 5 abc DEF + \\!@# -t ,@^%,     (特殊符号只从!@#这三个选择,加右斜线可以\\\\)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("案例24")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 5 5 -d 2@ -t @@@%%\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("看了这么多案例再来看命令参数是不是有种豁然开朗的感觉！")]),s._v(" "),e("p",[s._v("命令参数：")]),s._v(" "),e("ul",[e("li",[s._v("-b              #按大小分割字典文件，比如后跟20mib")]),s._v(" "),e("li",[s._v("-c              #密码个数（行数），比如8000")]),s._v(" "),e("li",[s._v("-d              #限制出现相同元素的个数（至少出现元素个数），-d 3就不会出现zzfffffgggg之类的")]),s._v(" "),e("li",[s._v("-e              #定义停止生成密码 ，比如-e 222222：到222222停止生成密码")]),s._v(" "),e("li",[s._v("-f               #调用密码库文件，比如/usr/share/crunch/charset.lst")]),s._v(" "),e("li",[s._v("-i                #改变输出格式")]),s._v(" "),e("li",[s._v("-l                #与-t搭配使用")]),s._v(" "),e("li",[s._v("-m              #与-p搭配使用")]),s._v(" "),e("li",[s._v("-o               #保存为")]),s._v(" "),e("li",[s._v("-p               #定义密码元素（最大最小长度失效，所有组合尝试一遍,字符串加空格以字符串为单位）")]),s._v(" "),e("li",[s._v("-q               #读取字典(指定文本文件，最大最小长度失效，每行之间相互排序)")]),s._v(" "),e("li",[s._v("-r                #定义从某一个地方重新开始")]),s._v(" "),e("li",[s._v("-s                #第一个密码，从xxx开始")]),s._v(" "),e("li",[s._v("-t                #定义输出格式")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("@代表小写字母 lalpha\n ，代表大写字母    ualpha\n%代表数字  numeric\n ^代表符号  symbols\n+ 占位符\n\\ 转义符（空格，负号）\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ul",[e("li",[s._v("-z                   #打包压缩，格式支持 gzip, bzip2, lzma, 7z（压缩率最大）")])]),s._v(" "),e("p",[s._v("组合应用(不用把庞大的字典保存在硬盘上，生成一个密码用一个，不过消耗的时间多，比较占用cpu)")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("crunch 2 4 0123456789 | aircrack -ng a,cap -e MyESSID -w -\ncrunch 10 1012345 --stodout | airolib -ng testdlb -import passwd -    (最后面的-表示引用crunch生成的密码)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"写在最后"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[s._v("#")]),s._v(" 写在最后")]),s._v(" "),e("blockquote",[e("p",[s._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),e("strong",[s._v("冰河技术")]),s._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),s._v(" "),e("p",[e("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);