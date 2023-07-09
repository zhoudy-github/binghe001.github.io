(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{634:function(n,s,a){"use strict";a.r(s);var t=a(7),e=Object(t.a)({},(function(){var n=this,s=n._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"利用java生成穷举字典-数字-字母-大小写-字符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#利用java生成穷举字典-数字-字母-大小写-字符"}},[n._v("#")]),n._v(" 利用Java生成穷举字典(数字+字母(大小写)+字符)")]),n._v(" "),s("p",[n._v("简单研究了下，利用Java生成穷举字典(数字+字母(大小写)+字符)，可用于爆破各种密码等场景，原理很简单，就是枚举数组中元素的各种组合情况。下面就将代码贴出来和大家分享一下：")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("package com.binghe.dictionary.seek;\n/**\n * 利用Java实现字母(大小写)+数字+字符的穷举，可用于密码爆破等\n * 如果需要其他的字符，直接接到字符数组中即可\n * 如果只需要\n *  1.数字\n *  2.字母\n *  3.字符\n *  4.数字+字母\n *  5.字母+字符\n *  6.数字+字符\n *  拆分fullCharSource数组即可\n * @author 冰河\n *\n */\npublic class DictionarySeek {\n    \n    \n    //密码可能会包含的字符集合\n    private static char[] fullCharSource = { '1','2','3','4','5','6','7','8','9','0',\n                             'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',  'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',\n                                             'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',  'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',\n                             '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '\"', '<', '>', '?', ';', '\\'', ',', '.', '/', '-', '=', '`'};\n    //将可能的密码集合长度\n    private static int fullCharLength = fullCharSource.length;\n    \n    /**\n     * 穷举打印输出，可以将打印输出的文件形成字典\n     * @param maxLength：生成的字符串的最大长度\n     */\n    public static void generate(int maxLength) {\n        //计数器，多线程时可以对其加锁，当然得先转换成Integer类型。\n        int counter = 0;\n        StringBuilder buider = new StringBuilder();\n        while (buider.toString().length() <= maxLength) {\n            buider = new StringBuilder(maxLength*2);\n            int _counter = counter;\n            //10进制转换成26进制\n            while (_counter >= fullCharLength) {\n                //获得低位\n                buider.insert(0, fullCharSource[_counter % fullCharLength]);\n                _counter = _counter / fullCharLength;\n                //精髓所在，处理进制体系中只有10没有01的问题，在穷举里面是可以存在01的\n                _counter--;\n            }\n            //最高位\n            buider.insert(0,fullCharSource[_counter]);\n            counter++;\n            System.out.println(buider.toString());\n        }\n    }\n    \n    public static void main(String[] args) {\n        long beginMillis = System.currentTimeMillis();\n            System.out.println(beginMillis);//开始时间\n            generate(50);                   //以最大长度为50测试\n            long endMillis = System.currentTimeMillis();\n            System.out.println(endMillis);//结束时间\n            System.out.println(endMillis - beginMillis);//总耗时，毫秒\n    } \n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br"),s("span",{staticClass:"line-number"},[n._v("18")]),s("br"),s("span",{staticClass:"line-number"},[n._v("19")]),s("br"),s("span",{staticClass:"line-number"},[n._v("20")]),s("br"),s("span",{staticClass:"line-number"},[n._v("21")]),s("br"),s("span",{staticClass:"line-number"},[n._v("22")]),s("br"),s("span",{staticClass:"line-number"},[n._v("23")]),s("br"),s("span",{staticClass:"line-number"},[n._v("24")]),s("br"),s("span",{staticClass:"line-number"},[n._v("25")]),s("br"),s("span",{staticClass:"line-number"},[n._v("26")]),s("br"),s("span",{staticClass:"line-number"},[n._v("27")]),s("br"),s("span",{staticClass:"line-number"},[n._v("28")]),s("br"),s("span",{staticClass:"line-number"},[n._v("29")]),s("br"),s("span",{staticClass:"line-number"},[n._v("30")]),s("br"),s("span",{staticClass:"line-number"},[n._v("31")]),s("br"),s("span",{staticClass:"line-number"},[n._v("32")]),s("br"),s("span",{staticClass:"line-number"},[n._v("33")]),s("br"),s("span",{staticClass:"line-number"},[n._v("34")]),s("br"),s("span",{staticClass:"line-number"},[n._v("35")]),s("br"),s("span",{staticClass:"line-number"},[n._v("36")]),s("br"),s("span",{staticClass:"line-number"},[n._v("37")]),s("br"),s("span",{staticClass:"line-number"},[n._v("38")]),s("br"),s("span",{staticClass:"line-number"},[n._v("39")]),s("br"),s("span",{staticClass:"line-number"},[n._v("40")]),s("br"),s("span",{staticClass:"line-number"},[n._v("41")]),s("br"),s("span",{staticClass:"line-number"},[n._v("42")]),s("br"),s("span",{staticClass:"line-number"},[n._v("43")]),s("br"),s("span",{staticClass:"line-number"},[n._v("44")]),s("br"),s("span",{staticClass:"line-number"},[n._v("45")]),s("br"),s("span",{staticClass:"line-number"},[n._v("46")]),s("br"),s("span",{staticClass:"line-number"},[n._v("47")]),s("br"),s("span",{staticClass:"line-number"},[n._v("48")]),s("br"),s("span",{staticClass:"line-number"},[n._v("49")]),s("br"),s("span",{staticClass:"line-number"},[n._v("50")]),s("br"),s("span",{staticClass:"line-number"},[n._v("51")]),s("br"),s("span",{staticClass:"line-number"},[n._v("52")]),s("br"),s("span",{staticClass:"line-number"},[n._v("53")]),s("br"),s("span",{staticClass:"line-number"},[n._v("54")]),s("br"),s("span",{staticClass:"line-number"},[n._v("55")]),s("br"),s("span",{staticClass:"line-number"},[n._v("56")]),s("br"),s("span",{staticClass:"line-number"},[n._v("57")]),s("br"),s("span",{staticClass:"line-number"},[n._v("58")]),s("br"),s("span",{staticClass:"line-number"},[n._v("59")]),s("br"),s("span",{staticClass:"line-number"},[n._v("60")]),s("br"),s("span",{staticClass:"line-number"},[n._v("61")]),s("br")])]),s("h2",{attrs:{id:"写在最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[n._v("#")]),n._v(" 写在最后")]),n._v(" "),s("blockquote",[s("p",[n._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),s("strong",[n._v("冰河技术")]),n._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),s("strong",[n._v("冰河技术")]),n._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),s("strong",[n._v("冰河技术")]),n._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),s("strong",[n._v("冰河技术")]),n._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),n._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);