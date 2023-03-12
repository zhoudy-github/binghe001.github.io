(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{378:function(a,t,e){"use strict";e.r(t);var s=e(7),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"【置顶】mysql索引底层技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#【置顶】mysql索引底层技术"}},[a._v("#")]),a._v(" 【置顶】MySQL索引底层技术")]),a._v(" "),t("p",[t("strong",[a._v("大家好，我是冰河~~")])]),a._v(" "),t("p",[a._v("今天周末了，给大家分享一篇关于MySQL索引底层技术的文章，这也是面试过程中经常被问到的，好了，不多说了，开始今天的正题。")]),a._v(" "),t("p",[a._v("偷偷告诉大家，昨天晚上冰河在B站直播了，哈哈，大家知道吗？")]),a._v(" "),t("h2",{attrs:{id:"什么是索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是索引"}},[a._v("#")]),a._v(" 什么是索引？")]),a._v(" "),t("p",[a._v("索引是辅助存储引擎高效获取数据的一种数据结构。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://b3logfile.com/file/2020/12/solofetchupload4473542009164123409-4dc322ac.png?imageView2/2/w/1280/format/jpg/interlace/1/q/100",loading:"lazy"}})]),a._v(" "),t("p",[a._v("很多人形象的说索引就是数据的目录，便于存储引擎快速的定位数据。")]),a._v(" "),t("h2",{attrs:{id:"索引的分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引的分类"}},[a._v("#")]),a._v(" 索引的分类")]),a._v(" "),t("p",[a._v("我们经常从以下几个方面对索引进行分类")]),a._v(" "),t("p",[a._v("从"),t("strong",[a._v("数据结构的角度")]),a._v("对索引进行分类")]),a._v(" "),t("ul",[t("li",[a._v("B+tree")]),a._v(" "),t("li",[a._v("Hash")]),a._v(" "),t("li",[a._v("Full-texts索引")])]),a._v(" "),t("p",[a._v("从"),t("strong",[a._v("物理存储的角度")]),a._v("对索引进行分类")]),a._v(" "),t("ul",[t("li",[a._v("聚簇索引")]),a._v(" "),t("li",[a._v("二级索引(辅助索引)")])]),a._v(" "),t("p",[a._v("从"),t("strong",[a._v("索引字段特性角度")]),a._v("分类")]),a._v(" "),t("ul",[t("li",[a._v("主键索引")]),a._v(" "),t("li",[a._v("唯一索引")]),a._v(" "),t("li",[a._v("普通索引")]),a._v(" "),t("li",[a._v("前缀索引")])]),a._v(" "),t("p",[a._v("从"),t("strong",[a._v("组成索引的字段个数角度")]),a._v("分类")]),a._v(" "),t("ul",[t("li",[a._v("单列索引")]),a._v(" "),t("li",[a._v("联合索引（复合索引）")])]),a._v(" "),t("h2",{attrs:{id:"数据结构角度看索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据结构角度看索引"}},[a._v("#")]),a._v(" 数据结构角度看索引")]),a._v(" "),t("p",[a._v("下表是MySQL常见的存储引擎InnoDB，MyISAM和Memory分别支持的索引类型")]),a._v(" "),t("table",[t("thead",[t("tr",[t("th"),a._v(" "),t("th",[a._v("InnoDB")]),a._v(" "),t("th",[a._v("MyISAM")]),a._v(" "),t("th",[a._v("Memory")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("B+tree索引")]),a._v(" "),t("td",[a._v("Yes")]),a._v(" "),t("td",[a._v("Yes")]),a._v(" "),t("td",[a._v("Yes")])]),a._v(" "),t("tr",[t("td",[a._v("Hash索引")]),a._v(" "),t("td",[a._v("No")]),a._v(" "),t("td",[a._v("No")]),a._v(" "),t("td",[a._v("Yes")])]),a._v(" "),t("tr",[t("td",[a._v("Full-text索引")]),a._v(" "),t("td",[a._v("Yes")]),a._v(" "),t("td",[a._v("Yes")]),a._v(" "),t("td",[a._v("No")])])])]),a._v(" "),t("p",[a._v("在实际使用中，InnoDB作为MySQL建表时默认的存储引擎")]),a._v(" "),t("p",[a._v("对上表进行横向查看可以了解到，B+tree是MySQL中被存储引擎采用最多的索引类型。")]),a._v(" "),t("p",[a._v("这里浅尝辄止的谈一下B+tree 与 Hash 和红黑树的区别。")]),a._v(" "),t("h3",{attrs:{id:"b-tree和b-tree"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#b-tree和b-tree"}},[a._v("#")]),a._v(" B+tree和B-tree")]),a._v(" "),t("blockquote",[t("p",[a._v("1970年，R.Bayer和E.Mccreight提出了一种适用于外查找的平衡多叉树——B-树，磁盘管理系统中的目录管理，以及数据库系统中的索引组织多数采用B-Tree这种数据结构。 --数据结构C语言版第二版 严蔚敏")])]),a._v(" "),t("p",[a._v("B+tree是B-Tree的一个变种。（哦，对了，B-tree念B树，它不叫B减树。。。）")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://b3logfile.com/file/2020/12/solofetchupload4486096145915991899-1e47f442.png?imageView2/2/w/1280/format/jpg/interlace/1/q/100",loading:"lazy"}})]),a._v(" "),t("p",[a._v("B+tree只在叶子节点存储数据，而B-tree非叶子节点也存储数据。")]),a._v(" "),t("p",[a._v("因此，B+tree单个节点的数量更小，在相同的磁盘IO下能查询更多的节点。")]),a._v(" "),t("p",[a._v("另外B+tree叶子节点采用单链表链接适合MySQL中常见的基于范围的顺序检索场景，而B-tree无法做到这一点。")]),a._v(" "),t("h3",{attrs:{id:"b-tree和红黑树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#b-tree和红黑树"}},[a._v("#")]),a._v(" B+tree和红黑树")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"Btree1","data-src":"https://b3logfile.com/file/2020/12/solofetchupload4486096145915991899-1e47f442.png?imageView2/2/w/1280/format/jpg/interlace/1/q/100",loading:"lazy"}})]),a._v(" "),t("p",[a._v("对于有N个叶子节点的B+tree，搜索复杂度为"),t("strong",[a._v("O(logdN)")]),a._v(" ,"),t("strong",[a._v("d是指degree是指B+tree的度")]),a._v("，表示节点允许的最大子节点个数为d个，在实际的运用中d值是大于100的，即使数据达到千万级别时候B+tree的高度依然维持在3-4左右，保证了3-4次磁盘I/O就能查到目标数据.")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://b3logfile.com/file/2020/12/solofetchupload3013108488416317591-db56131d.png?imageView2/2/w/1280/format/jpg/interlace/1/q/100",loading:"lazy"}})]),a._v(" "),t("p",[a._v("从上图中可以看出红黑树是二叉树，节点的子节点个数最多为2个，意味着其搜索复杂度为"),t("strong",[a._v("O(logN)")]),a._v(",比B+树高出不少，因此红黑树检索到目标数据所需经理的磁盘I/O次数更多。")]),a._v(" "),t("h3",{attrs:{id:"b-tree索引与hash表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#b-tree索引与hash表"}},[a._v("#")]),a._v(" B+tree索引与Hash表")]),a._v(" "),t("p",[a._v("范围查询是MySQL数据库中常见的场景，而Hash表不适合做范围查询，Hash表更适合做等值查询，另外Hash表还存在Hash函数选择和Hash值冲突等问题。")]),a._v(" "),t("p",[a._v("因为这些原因，B+tree索引要比Hash表索引有更广的适用场景。")]),a._v(" "),t("h2",{attrs:{id:"物理存储角度看索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#物理存储角度看索引"}},[a._v("#")]),a._v(" 物理存储角度看索引")]),a._v(" "),t("p",[a._v("MySQL中的两种常用存储引擎对索引的处理方式差别较大。")]),a._v(" "),t("h3",{attrs:{id:"innodb的索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#innodb的索引"}},[a._v("#")]),a._v(" InnoDB的索引")]),a._v(" "),t("p",[a._v("首先看一下InnoDB存储引擎中的索引，"),t("strong",[a._v("InnoDB表的索引按照叶子节点存储的是否为完整表数据分为聚簇索引和二级索引")]),a._v("。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://b3logfile.com/file/2020/12/solofetchupload727395912023305426-2483ea2a.png?imageView2/2/w/1280/format/jpg/interlace/1/q/100",loading:"lazy"}})]),a._v(" "),t("p",[a._v("全表数据就是存储在聚簇索引中的。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://b3logfile.com/file/2020/12/solofetchupload2826468312883612235-e7ef45ce.png?imageView2/2/w/1280/format/jpg/interlace/1/q/100",loading:"lazy"}})]),a._v(" "),t("p",[a._v("聚簇索引以外的其它索引叫做二级索引。")]),a._v(" "),t("p",[a._v("下面结合实际的例子介绍下这两类索引。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" create table workers\n (\n     id    int(11)     not null auto_increment comment '员工工号',\n     name  varchar(16) not null comment '员工名字',\n     sales int(11) default null comment '员工销售业绩',\n     primary key (id)\n ) engine InnoDB\n   AUTO_INCREMENT = 10\n   default charset = utf8;\n \n insert into workers(id, name, sales)\n values (1, '江南', 12744);\n insert into workers(id, name, sales)\n values (3, '今何在', 14082);\n insert into workers(id, name, sales)\n values (7, '路明非', 14738);\n insert into workers(id, name, sales)\n values (8, '吕归尘', 7087);\n insert into workers(id, name, sales)\n values (11, '姬野', 8565);\n insert into workers(id, name, sales)\n values (15, '凯撒', 8501);\n insert into workers(id, name, sales)\n values (20, '绘梨衣', 7890);\n \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br")])]),t("p",[a._v("我们现在自己的测试数据库中创建一个包含销售员信息的测试表workers")]),a._v(" "),t("p",[a._v("包含id(主键),name,sales三个字段，指定表的存储引擎为InnoDB。")]),a._v(" "),t("p",[a._v("然后插入8条数据")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://b3logfile.com/file/2020/12/solofetchupload5196619149879384178-a8b42135.png?imageView2/2/w/1280/format/jpg/interlace/1/q/100",loading:"lazy"}})]),a._v(" "),t("p",[a._v("这个例子当中，workers表的聚簇索引建立在字段id上")]),a._v(" "),t("p",[a._v("为了准确模拟，我们先把主键id插入b+tree得到下图")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://b3logfile.com/file/2020/12/solofetchupload8277729806873131044-147a10cf.png?imageView2/2/w/1280/format/jpg/interlace/1/q/100",loading:"lazy"}})]),a._v(" "),t("p",[a._v("然后在此图基础上，我画出了高清版。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://b3logfile.com/file/2020/12/solofetchupload1624619215807586838-895e621b.png?imageView2/2/w/1280/format/jpg/interlace/1/q/100",loading:"lazy"}})]),a._v(" "),t("p",[a._v("从图中可以看到，聚簇索引的每个叶子节点存储了一行完整的表数据，叶子节点间采用单向链表按id列递增连接，可以方便的进行顺序检索。")]),a._v(" "),t("p",[a._v("InnoDB表要求必须有聚簇索引，默认在主键字段上建立聚簇索引，在没有主键字段的情况下，表的第一个NOT NULL 的唯一索引将被建立为聚簇索引，在前两者都没有的情况下，InnoDB将自动生成一个隐式自增id列并在此列上创建聚簇索引。")]),a._v(" "),t("p",[a._v("接着来看二级索引。")]),a._v(" "),t("p",[a._v("还以刚才的workers表为例")]),a._v(" "),t("p",[a._v("我们在name字段上添加二级索引index_name")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" alter table  workers add index  index_name(name);\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://b3logfile.com/file/2020/12/solofetchupload694986917675646832-7108cd57.png?imageView2/2/w/1280/format/jpg/interlace/1/q/100",loading:"lazy"}})]),a._v(" "),t("p",[a._v("同样我们画出了二级索引index_name的B+tree示意图")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://b3logfile.com/file/2020/12/solofetchupload5342631828174988878-5d89c706.png?imageView2/2/w/1280/format/jpg/interlace/1/q/100",loading:"lazy"}})]),a._v(" "),t("p",[a._v("图中可以看出二级索引的叶子节点并不存储一行完整的表数据，而是存储了聚簇索引所在列的值，也就是")]),a._v(" "),t("p",[a._v("workers表中的id列的值。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://b3logfile.com/file/2020/12/solofetchupload1624619215807586838-895e621b.png?imageView2/2/w/1280/format/jpg/interlace/1/q/100",loading:"lazy"}})]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://b3logfile.com/file/2020/12/solofetchupload5342631828174988878-5d89c706.png?imageView2/2/w/1280/format/jpg/interlace/1/q/100",loading:"lazy"}})]),a._v(" "),t("p",[a._v("这两张示意图中B+tree的度设置为了3 ，这也主要是为了方便演示。")]),a._v(" "),t("p",[a._v("实际的B+tree索引中，树的度通常会大于100。")]),a._v(" "),t("p",[a._v("说了聚簇索引和二级索引  肯定要提到回表查询。")]),a._v(" "),t("p",[a._v("由于二级索引的叶子节点不存储完整的表数据，所以当通过二级索引查询到聚簇索引的列值后，还需要回到局促索引也就是表数据本身进一步获取数据。")]),a._v(" "),t("p",[a._v("比如说我们要在workers表中查询 名叫吕归尘的人")]),a._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" workers "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("where")]),a._v(" name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'吕归尘'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("这条sql通过name='吕归尘'的条件")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://b3logfile.com/file/2020/12/solofetchupload6371302269673599675-ab808554.png?imageView2/2/w/1280/format/jpg/interlace/1/q/100",loading:"lazy"}})]),a._v(" "),t("p",[a._v("在二级索引index_name中查询到主键id=8 ,接着带着id=8这个条件")]),a._v(" "),t("p",[a._v("进一步回到聚簇索引查询以后才能获取到完整的数据，很显然回表需要额外的B+tree搜索过程，必然增大查询耗时。")]),a._v(" "),t("p",[a._v("需要注意的是通过二级索引查询时，回表不是必须的过程,当Query的所有字段在二级索引中就能找到时，就不需要回表，MySQL称此时的二级索引为覆盖索引或称触发了索引覆盖。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" select id,name from workers where name='吕归尘';\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("这句sql只查询了id，和name,二级索引就已经包含了Query所以需要的所有字段，就无需回表查询。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" explain select id,name from workers where name='吕归尘';\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("使用explain查看此条sql的执行计划")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"截图录屏_选择区域_20201205105734","data-src":"https://b3logfile.com/file/2020/12/solofetchupload8475403450367018873-dfe6e728.png?imageView2/2/w/1280/format/jpg/interlace/1/q/100",loading:"lazy"}})]),a._v(" "),t("p",[a._v("执行计划的Extra字段中出现了Using where;Using index 表明查询触发了索引index_name的索引覆盖,且对索引做了where筛选，这里不需要回表。")]),a._v(" "),t("p",[a._v("下面做对比，查询一下没有索引的")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" explain select id,name,sales from workers where name='吕归尘';\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"截图录屏_选择区域_20201205113015","data-src":"https://b3logfile.com/file/2020/12/solofetchupload1506850469409520602-2871b30b.png?imageView2/2/w/1280/format/jpg/interlace/1/q/100",loading:"lazy"}})]),a._v(" "),t("p",[a._v("Extra为"),t("strong",[a._v("Using Index Condition")]),a._v(" 表示会先条件过滤索引，过滤完索引后找到所有符合索引条件的数据行，随后用 WHERE 子句中的其他条件去过滤这些数据行。Index Condition Pushdown (ICP)是MySQL 5.6 以上版本中的新特性,是一种在"),t("strong",[a._v("存储引擎层")]),a._v("使用索引过滤数据的一种优化方式。ICP开启时的执行计划含有 Using index condition 标示 ，表示优化器使用了ICP对数据访问进行优化。")]),a._v(" "),t("p",[a._v("如果你对此感兴趣去查阅对应的官方文档和技术博客。")]),a._v(" "),t("p",[a._v("这次我们简化来理解，不考虑ICP对数据访问的优化，")]),a._v(" "),t("p",[a._v("当关闭ICP时,Index仅仅是data access的一种访问方式，存储引擎通过索引回表获取的数据会传递到MySQL Server 层进行WHERE条件过滤。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://b3logfile.com/file/2020/12/solofetchupload6143883078229078789-0172a07b.png?imageView2/2/w/1280/format/jpg/interlace/1/q/100",loading:"lazy"}})]),a._v(" "),t("p",[a._v("Extra为"),t("strong",[a._v("Using where")]),a._v(" 只是提醒我们MySQL将用where子句来过滤结果集。这个一般发生在MySQL服务器，而不是存储引擎层。一般发生在不能走索引扫描的情况下或者走索引扫描，但是有些查询条件不在索引当中的情况下。")]),a._v(" "),t("p",[a._v("这里表明没有触发索引覆盖，进行回表查询。")]),a._v(" "),t("h3",{attrs:{id:"myisam的索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#myisam的索引"}},[a._v("#")]),a._v(" MyISAM的索引")]),a._v(" "),t("p",[a._v("说完了InnoDB的索引，接下来我们来看MyISAM的索引")]),a._v(" "),t("p",[a._v("以MyISAM存储引擎存储的表不存在聚簇索引。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://b3logfile.com/file/2020/12/solofetchupload677705662432434650-2e01d993.png?imageView2/2/w/1280/format/jpg/interlace/1/q/100",loading:"lazy"}})]),a._v(" "),t("p",[t("strong",[a._v("MyISAM索引B+tree示意图")])]),a._v(" "),t("p",[a._v("MyISAM表中的主键索引和非主键索引的结构是一样的，从上图中我们可以看到")]),a._v(" "),t("p",[a._v("他们的叶子节点是不存储表数据的，节点中存放的是表数据的地址，所以MyISAM表可以没有主键。")]),a._v(" "),t("p",[a._v("MyISAM表的数据和索引是分开的，是单独存放的。")]),a._v(" "),t("p",[a._v("MyISAM表中的主键索引和非主键索引的区别仅在于主键索引B+tree上的key必须符合主键的限制，")]),a._v(" "),t("p",[a._v("非主键索引B+tree上的key只要符合相应字段的特性就可以了。")]),a._v(" "),t("h2",{attrs:{id:"索引字段特性角度看索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引字段特性角度看索引"}},[a._v("#")]),a._v(" "),t("strong",[a._v("索引字段特性角度")]),a._v("看索引")]),a._v(" "),t("h4",{attrs:{id:"主键索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主键索引"}},[a._v("#")]),a._v(" 主键索引")]),a._v(" "),t("ul",[t("li",[a._v("建立在主键字段上的索引")]),a._v(" "),t("li",[a._v("一张表最多只有一个主键索引")]),a._v(" "),t("li",[a._v("索引列值不允许为null")]),a._v(" "),t("li",[a._v("通常在创建表的时候一起创建")])]),a._v(" "),t("h4",{attrs:{id:"唯一索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#唯一索引"}},[a._v("#")]),a._v(" 唯一索引")]),a._v(" "),t("ul",[t("li",[a._v("建立在UNIQUE字段上的索引就是唯一索引")]),a._v(" "),t("li",[a._v("一张表可以有多个唯一索引，索引列值允许为null")])]),a._v(" "),t("p",[a._v("我们演示创建索引")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" create table persons\n (\n     id   int(11) not null auto_increment comment '主键id',\n     eno  int(11) comment '工号',\n     eid  int(11) comment '身份证号',\n     veid int(11) comment '虚拟身份证号',\n     name varchar(16) comment '名字',\n     primary key (id) comment '主键索引',\n     UNIQUE key (eno) comment 'eno唯一索引',\n     UNIQUE key (eid) comment 'eid唯一索引'\n ) engine = InnoDB\n   auto_increment = 1000\n   default charset = utf8;\n \n alter table persons\n     add unique index index_veid (veid) comment 'veid唯一索引';\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br")])]),t("p",[a._v("通过show index from persons;命令我们看到已经成功创建了三个唯一索引。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://b3logfile.com/file/2020/12/solofetchupload156641929552998614-efd9bda9.png?imageView2/2/w/1280/format/jpg/interlace/1/q/100",loading:"lazy"}})]),a._v(" "),t("h4",{attrs:{id:"普通索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#普通索引"}},[a._v("#")]),a._v(" 普通索引")]),a._v(" "),t("p",[a._v("主键索引和唯一索引对字段的要求是要求字段为主键或unique字段，")]),a._v(" "),t("p",[a._v("而那些建立在普通字段上的索引叫做普通索引，既不要求字段为主键也不要求字段为unique。")]),a._v(" "),t("h4",{attrs:{id:"前缀索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前缀索引"}},[a._v("#")]),a._v(" 前缀索引")]),a._v(" "),t("p",[a._v("前缀索引是指对字符类型字段的前几个字符或对二进制类型字段的前几个bytes建立的索引，而不是在整个字段上建索引。")]),a._v(" "),t("p",[a._v("例如，可以对persons表中的name(varchar(16))字段 中name的前5个字符建立索引。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" create index index_name on persons (name(5)) comment '前缀索引';\n show index from persons;\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://b3logfile.com/file/2020/12/solofetchupload3506859226087613750-fcfc2540.png?imageView2/2/w/1280/format/jpg/interlace/1/q/100",loading:"lazy"}})]),a._v(" "),t("p",[a._v("前缀索引可以建立在类型为")]),a._v(" "),t("ul",[t("li",[a._v("char")]),a._v(" "),t("li",[a._v("varchar")]),a._v(" "),t("li",[a._v("binary")]),a._v(" "),t("li",[a._v("varbinary")])]),a._v(" "),t("p",[a._v("的列上，可以大大减少索引占用的存储空间，也能提升索引的查询效率。")]),a._v(" "),t("h2",{attrs:{id:"索引列的个数角度看索引"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#索引列的个数角度看索引"}},[a._v("#")]),a._v(" "),t("strong",[a._v("索引列的个数角度")]),a._v("看索引")]),a._v(" "),t("ul",[t("li",[a._v("建立在单个列上的索引为单列索引\n"),t("ul",[t("li",[a._v("上文演示的都是单列索引")])])]),a._v(" "),t("li",[a._v("建立在多列上的称为联合索引（复合索引）")])]),a._v(" "),t("p",[a._v("演示一下联合索引")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" create index index_id_name on workers(id,name) comment '组合索引';\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("这条语句在我们演示表workers中建立id，name这两个字段的联合索引。")]),a._v(" "),t("p",[a._v("借助show index命令查看索引的详细信息  操作后结果如下：")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"截图录屏_选择区域_20201205130730","data-src":"https://b3logfile.com/file/2020/12/solofetchupload3032431177145337696-d861ff6a.png?imageView2/2/w/1280/format/jpg/interlace/1/q/100",loading:"lazy"}})]),a._v(" "),t("p",[a._v("虽然详细信息当中列出了两条关于联合索引的条目，但并不表示联合索引是建立了多个索引，联合索引是一个索引结构，这两个条目表示的是组合索引中字段的具体信息，按建立索引时的书写顺序排序。")]),a._v(" "),t("p",[a._v("同样我们来看下联合索引的B+tree示意图")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://b3logfile.com/file/2020/12/solofetchupload6130596889042124173-3f0e4671.png?imageView2/2/w/1280/format/jpg/interlace/1/q/100",loading:"lazy"}})]),a._v(" "),t("p",[a._v("从图中看到，组合索引的非叶子节点保存了两个字段的值作为B+tree的key值，当B+tree上插入数据时，先按字段id比较，在id相同的情况下按name字段比较。")]),a._v(" "),t("p",[t("strong",[a._v("好了，如果文章对你有点帮助，记得给冰河一键三连哦，欢迎将文章转发给更多的小伙伴，冰河将不胜感激~~")])]),a._v(" "),t("h2",{attrs:{id:"关于星球"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于星球"}},[a._v("#")]),a._v(" 关于星球")]),a._v(" "),t("p",[t("strong",[a._v("冰河技术")]),a._v(" 知识星球《RPC手撸专栏》已经开始了，我会将《RPC手撸专栏》的源码放到知识星球中，同时在微信上会创建专门的知识星球群，冰河会在知识星球上和星球群里解答球友的提问。")]),a._v(" "),t("h3",{attrs:{id:"星球提供的服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#星球提供的服务"}},[a._v("#")]),a._v(" 星球提供的服务")]),a._v(" "),t("p",[a._v("冰河整理了星球提供的一些服务，如下所示。")]),a._v(" "),t("p",[a._v("加入星球，你将获得：")]),a._v(" "),t("p",[a._v("1.学习从零开始手撸可用于实际场景的高性能、可扩展的RPC框架项目")]),a._v(" "),t("p",[a._v("2.学习SpringCloud Alibaba实战项目—从零开发微服务项目")]),a._v(" "),t("p",[a._v("3.学习高并发、大流量业务场景的解决方案，体验大厂真正的高并发、大流量的业务场景")]),a._v(" "),t("p",[a._v("4.学习进大厂必备技能：性能调优、并发编程、分布式、微服务、框架源码、中间件开发、项目实战")]),a._v(" "),t("p",[a._v("5.提供站点 https://binghe.gitcode.host 所有学习内容的指导、帮助")]),a._v(" "),t("p",[a._v("6.GitHub：https://github.com/binghe001/BingheGuide - 非常有价值的技术资料仓库，包括冰河所有的博客开放案例代码")]),a._v(" "),t("p",[a._v("7.可以发送你的简历到我的邮箱，提供简历批阅服务")]),a._v(" "),t("p",[a._v("8.提供技术问题、系统架构、学习成长、晋升答辩等各项内容的回答")]),a._v(" "),t("p",[a._v("9.定期的整理和分享出各类专属星球的技术小册、电子书、编程视频、PDF文件")]),a._v(" "),t("p",[a._v("10.定期组织技术直播分享，传道、授业、解惑，指导阶段瓶颈突破技巧")]),a._v(" "),t("h3",{attrs:{id:"如何加入星球"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何加入星球"}},[a._v("#")]),a._v(" 如何加入星球")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("链接")]),a._v(" ：打开链接 "),t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://m6z.cn/6aeFbs"),t("OutboundLink")],1),a._v(" 加入星球。")]),a._v(" "),t("li",[t("strong",[a._v("回复")]),a._v(" ：在公众号 "),t("strong",[a._v("冰河技术")]),a._v(" 回复 "),t("strong",[a._v("星球")]),a._v(" 领取优惠券加入星球。")])]),a._v(" "),t("p",[t("strong",[a._v("特别提醒：")]),a._v(" 苹果用户进圈或续费，请加微信 "),t("strong",[a._v("hacker_binghe")]),a._v(" 扫二维码，或者去公众号 "),t("strong",[a._v("冰河技术")]),a._v(" 回复 "),t("strong",[a._v("星球")]),a._v(" 扫二维码加入星球。")]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"sa-2022-04-21-007","data-src":"https://binghe.gitcode.host/assets/images/microservices/springcloudalibaba/sa-2022-04-28-008.png",loading:"lazy"}})]),a._v(" "),t("p",[t("strong",[a._v("如果图片二维码过期，去公众号 冰河技术 回复 星球 扫二维码加入星球, 好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),a._v(" "),t("h2",{attrs:{id:"写在最后"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[a._v("#")]),a._v(" 写在最后")]),a._v(" "),t("blockquote",[t("p",[a._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),t("strong",[a._v("冰河技术")]),a._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),a._v(" "),t("p",[t("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})]),a._v(" "),t("h2",{attrs:{id:"加群交流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加群交流"}},[a._v("#")]),a._v(" 加群交流")]),a._v(" "),t("p",[a._v("本群的宗旨是给大家提供一个良好的技术学习交流平台，所以杜绝一切广告！由于微信群人满 100 之后无法加入，请扫描下方二维码先添加作者 “冰河” 微信(hacker_binghe)，备注："),t("code",[a._v("学习加群")]),a._v("。")]),a._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/hacker_binghe.jpg?raw=true",width:"180px"}}),a._v(" "),t("div",{staticStyle:{"font-size":"9px"}},[a._v("冰河微信")]),a._v(" "),t("br")]),a._v(" "),t("h2",{attrs:{id:"公众号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#公众号"}},[a._v("#")]),a._v(" 公众号")]),a._v(" "),t("p",[a._v("分享各种编程语言、开发技术、分布式与微服务架构、分布式数据库、分布式事务、云原生、大数据与云计算技术和渗透技术。另外，还会分享各种面试题和面试技巧。")]),a._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",width:"180px"}}),a._v(" "),t("div",{staticStyle:{"font-size":"9px"}},[a._v("公众号：冰河技术")]),a._v(" "),t("br")]),a._v(" "),t("h2",{attrs:{id:"星球"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#星球"}},[a._v("#")]),a._v(" 星球")]),a._v(" "),t("p",[a._v("加入星球 "),t("strong",[t("a",{attrs:{href:"http://m6z.cn/6aeFbs",target:"_blank",rel:"noopener noreferrer"}},[a._v("冰河技术"),t("OutboundLink")],1)]),a._v("，可以获得本站点所有学习内容的指导与帮助。如果你遇到不能独立解决的问题，也可以添加冰河的微信："),t("strong",[a._v("hacker_binghe")]),a._v("， 我们一起沟通交流。另外，在星球中不只能学到实用的硬核技术，还能学习"),t("strong",[a._v("实战项目")]),a._v("！")]),a._v(" "),t("p",[a._v("关注 "),t("a",{attrs:{href:"https://img-blog.csdnimg.cn/20210426115714643.jpg?raw=true",target:"_blank",rel:"noopener noreferrer"}},[a._v("冰河技术"),t("OutboundLink")],1),a._v("公众号，回复 "),t("code",[a._v("星球")]),a._v(" 可以获取入场优惠券。")]),a._v(" "),t("div",{attrs:{align:"center"}},[t("img",{attrs:{src:"https://binghe.gitcode.host/images/personal/xingqiu.png?raw=true",width:"180px"}}),a._v(" "),t("div",{staticStyle:{"font-size":"9px"}},[a._v("知识星球：冰河技术")]),a._v(" "),t("br")])])}),[],!1,null,null,null);t.default=r.exports}}]);