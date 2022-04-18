(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{487:function(e,t,a){"use strict";a.r(t);var s=a(24),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"【高并发】不得不说的线程池与threadpoolexecutor类浅析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#【高并发】不得不说的线程池与threadpoolexecutor类浅析"}},[e._v("#")]),e._v(" 【高并发】不得不说的线程池与ThreadPoolExecutor类浅析")]),e._v(" "),a("p",[a("strong",[e._v("大家好，我是冰河~~")])]),e._v(" "),a("p",[e._v("今天，我们继续聊高并发相关的话题，今天，我们就从源码角度深入探讨下ThreadPoolExecutor类。")]),e._v(" "),a("h2",{attrs:{id:"一、抛砖引玉"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、抛砖引玉"}},[e._v("#")]),e._v(" 一、抛砖引玉")]),e._v(" "),a("p",[e._v("既然Java中支持以多线程的方式来执行相应的任务，但为什么在JDK1.5中又提供了线程池技术呢？这个问题大家自行脑补，多动脑，肯定没坏处，哈哈哈。。。")]),e._v(" "),a("p",[e._v("说起Java中的线程池技术，在很多框架和异步处理中间件中都有涉及，而且性能经受起了长久的考验。可以这样说，Java的线程池技术是Java最核心的技术之一。")]),e._v(" "),a("p",[e._v("在Java的高并发领域中，Java的线程池技术是一个永远绕不开的话题。既然Java的线程池技术这么重要（怎么能说是这么重要呢？那是相当的重要，那家伙老重要了，哈哈哈）。")]),e._v(" "),a("p",[e._v("那么，本文我们就来简单的说下线程池与ThreadPoolExecutor类。至于线程池中的各个技术细节和ThreadPoolExecutor的底层原理和源码解析，我们会在【高并发专题】专栏中进行深度解析。")]),e._v(" "),a("p",[e._v("引言：本文是高并发中线程池的开篇之作，就暂时先不深入讲解，只是让大家从整体上认识下线程池中最核心的类之一——ThreadPoolExecutor，关于ThreadPoolExecutor的底层原理和源码实现，以及线程池中的其他技术细节的底层原理和源码实现，我们会在【高并发专题】接下来的文章中，进行死磕。")]),e._v(" "),a("h2",{attrs:{id:"二、thread直接创建线程的弊端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、thread直接创建线程的弊端"}},[e._v("#")]),e._v(" 二、Thread直接创建线程的弊端")]),e._v(" "),a("p",[e._v("（1）每次new Thread新建对象，性能差。\n（2）线程缺乏统一管理，可能无限制的新建线程，相互竞争，有可能占用过多系统资源导致死机或OOM。\n（3）缺少更多的功能，如更多执行、定期执行、线程中断。\n（4）其他弊端，大家自行脑补，多动脑，没坏处，哈哈。")]),e._v(" "),a("h2",{attrs:{id:"三、线程池的好处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、线程池的好处"}},[e._v("#")]),e._v(" 三、线程池的好处")]),e._v(" "),a("p",[e._v("（1）重用存在的线程，减少对象创建、消亡的开销，性能佳。\n（2）可以有效控制最大并发线程数，提高系统资源利用率，同时可以避免过多资源竞争，避免阻塞。\n（3）提供定时执行、定期执行、单线程、并发数控制等功能。\n（4）提供支持线程池监控的方法，可对线程池的资源进行实时监控。\n（5）其他好处，大家自行脑补，多动脑，没坏处，哈哈。")]),e._v(" "),a("h2",{attrs:{id:"四、线程池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、线程池"}},[e._v("#")]),e._v(" 四、线程池")]),e._v(" "),a("h3",{attrs:{id:"_1-线程池类结构关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-线程池类结构关系"}},[e._v("#")]),e._v(" 1.线程池类结构关系")]),e._v(" "),a("p",[e._v("线程池中的一些接口和类的结构关系如下图所示。")]),e._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200220145215418.jpg",loading:"lazy"}})]),e._v(" "),a("p",[e._v("后文会死磕这些接口和类的底层原理和源码。")]),e._v(" "),a("h3",{attrs:{id:"_2-创建线程池常用的类-executors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建线程池常用的类-executors"}},[e._v("#")]),e._v(" 2.创建线程池常用的类——Executors")]),e._v(" "),a("ul",[a("li",[e._v("Executors.newCachedThreadPool：创建一个可缓存的线程池，如果线程池的大小超过了需要，可以灵活回收空闲线程，如果没有可回收线程，则新建线程")]),e._v(" "),a("li",[e._v("Executors.newFixedThreadPool：创建一个定长的线程池，可以控制线程的最大并发数，超出的线程会在队列中等待")]),e._v(" "),a("li",[e._v("Executors.newScheduledThreadPool：创建一个定长的线程池，支持定时、周期性的任务执行")]),e._v(" "),a("li",[e._v("Executors.newSingleThreadExecutor: 创建一个单线程化的线程池，使用一个唯一的工作线程执行任务，保证所有任务按照指定顺序（先入先出或者优先级）执行")]),e._v(" "),a("li",[e._v("Executors.newSingleThreadScheduledExecutor:创建一个单线程化的线程池，支持定时、周期性的任务执行")]),e._v(" "),a("li",[e._v("Executors.newWorkStealingPool：创建一个具有并行级别的work-stealing线程池")])]),e._v(" "),a("h3",{attrs:{id:"_3-线程池实例的几种状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-线程池实例的几种状态"}},[e._v("#")]),e._v(" 3.线程池实例的几种状态")]),e._v(" "),a("ul",[a("li",[e._v("Running:运行状态，能接收新提交的任务，并且也能处理阻塞队列中的任务")]),e._v(" "),a("li",[e._v("Shutdown: 关闭状态，不能再接收新提交的任务，但是可以处理阻塞队列中已经保存的任务，当线程池处于Running状态时，调用shutdown()方法会使线程池进入该状态")]),e._v(" "),a("li",[e._v("Stop: 不能接收新任务，也不能处理阻塞队列中已经保存的任务，会中断正在处理任务的线程，如果线程池处于Running或Shutdown状态，调用shutdownNow()方法，会使线程池进入该状态")]),e._v(" "),a("li",[e._v("Tidying: 如果所有的任务都已经终止，有效线程数为0（阻塞队列为空，线程池中的工作线程数量为0），线程池就会进入该状态。")]),e._v(" "),a("li",[e._v("Terminated: 处于Tidying状态的线程池调用terminated()方法，会使用线程池进入该状态")])]),e._v(" "),a("p",[a("strong",[e._v("注意：不需要对线程池的状态做特殊的处理，线程池的状态是线程池内部根据方法自行定义和处理的。")])]),e._v(" "),a("h3",{attrs:{id:"_4-合理配置线程的一些建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-合理配置线程的一些建议"}},[e._v("#")]),e._v(" 4.合理配置线程的一些建议")]),e._v(" "),a("p",[e._v("（1）CPU密集型任务，就需要尽量压榨CPU，参考值可以设置为NCPU+1(CPU的数量加1)。\n（2）IO密集型任务，参考值可以设置为2*NCPU（CPU数量乘以2）")]),e._v(" "),a("h2",{attrs:{id:"五、线程池最核心的类之一-threadpoolexecutor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、线程池最核心的类之一-threadpoolexecutor"}},[e._v("#")]),e._v(" 五、线程池最核心的类之一——ThreadPoolExecutor")]),e._v(" "),a("h3",{attrs:{id:"_1-构造方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-构造方法"}},[e._v("#")]),e._v(" 1.构造方法")]),e._v(" "),a("p",[e._v("ThreadPoolExecutor参数最多的构造方法如下：")]),e._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("public")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ThreadPoolExecutor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" corePoolSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n                              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("int")]),e._v(" maximumPoolSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n                              "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("long")]),e._v(" keepAliveTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n                              "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TimeUnit")]),e._v(" unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n                              "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("BlockingQueue")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Runnable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" workQueue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n                              "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ThreadFactory")]),e._v(" threadFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n                              "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("RejectedExecutionHandler")]),e._v(" rejectHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("其他的构造方法都是调用的这个构造方法来实例化对象，可以说，我们直接分析这个方法之后，其他的构造方法我们也明白是怎么回事了！接下来，就对此构造方法进行详细的分析。")]),e._v(" "),a("p",[a("strong",[e._v("注意：为了更加深入的分析ThreadPoolExecutor类的构造方法，会适当调整参数的顺序进行解析，以便于大家更能深入的理解ThreadPoolExecutor构造方法中每个参数的作用。")])]),e._v(" "),a("p",[e._v("上述构造方法接收如下参数进行初始化：")]),e._v(" "),a("p",[e._v("（1）corePoolSize：核心线程数量。")]),e._v(" "),a("p",[e._v("（2）maximumPoolSize：最大线程数。")]),e._v(" "),a("p",[e._v("（3）workQueue：阻塞队列，存储等待执行的任务，很重要，会对线程池运行过程产生重大影响。")]),e._v(" "),a("p",[a("strong",[e._v("其中，上述三个参数的关系如下所示：")])]),e._v(" "),a("ul",[a("li",[e._v("如果运行的线程数小于corePoolSize，直接创建新线程处理任务，即使线程池中的其他线程是空闲的。")]),e._v(" "),a("li",[e._v("如果运行的线程数大于等于corePoolSize，并且小于maximumPoolSize，此时，只有当workQueue满时，才会创建新的线程处理任务。")]),e._v(" "),a("li",[e._v("如果设置的corePoolSize与maximumPoolSize相同，那么创建的线程池大小是固定的，此时，如果有新任务提交，并且workQueue没有满时，就把请求放入到workQueue中，等待空闲的线程，从workQueue中取出任务进行处理。")]),e._v(" "),a("li",[e._v("如果运行的线程数量大于maximumPoolSize，同时，workQueue已经满了，会通过拒绝策略参数rejectHandler来指定处理策略。")])]),e._v(" "),a("p",[a("strong",[e._v("根据上述三个参数的配置，线程池会对任务进行如下处理方式：")])]),e._v(" "),a("p",[e._v("当提交一个新的任务到线程池时，线程池会根据当前线程池中正在运行的线程数量来决定该任务的处理方式。处理方式总共有三种：直接切换、使用无限队列、使用有界队列。")]),e._v(" "),a("ul",[a("li",[e._v("直接切换常用的队列就是SynchronousQueue。")]),e._v(" "),a("li",[e._v("使用无限队列就是使用基于链表的队列，比如：LinkedBlockingQueue，如果使用这种方式，线程池中创建的最大线程数就是corePoolSize，此时maximumPoolSize不会起作用。当线程池中所有的核心线程都是运行状态时，提交新任务，就会放入等待队列中。")]),e._v(" "),a("li",[e._v("使用有界队列使用的是ArrayBlockingQueue，使用这种方式可以将线程池的最大线程数量限制为maximumPoolSize，可以降低资源的消耗。但是，这种方式使得线程池对线程的调度更困难，因为线程池和队列的容量都是有限的了。")])]),e._v(" "),a("p",[a("strong",[e._v("根据上面三个参数，我们可以简单得出如何降低系统资源消耗的一些措施：")])]),e._v(" "),a("ul",[a("li",[e._v("如果想降低系统资源的消耗，包括CPU使用率，操作系统资源的消耗，上下文环境切换的开销等，可以设置一个较大的队列容量和较小的线程池容量。这样，会降低线程处理任务的吞吐量。")]),e._v(" "),a("li",[e._v("如果提交的任务经常发生阻塞，可以考虑调用设置最大线程数的方法，重新设置线程池最大线程数。如果队列的容量设置的较小，通常需要将线程池的容量设置的大一些，这样，CPU的使用率会高些。如果线程池的容量设置的过大，并发量就会增加，则需要考虑线程调度的问题，反而可能会降低处理任务的吞吐量。")])]),e._v(" "),a("p",[e._v("接下来，我们继续看ThreadPoolExecutor的构造方法的参数。")]),e._v(" "),a("p",[e._v("（4）keepAliveTime：线程没有任务执行时最多保持多久时间终止\n当线程池中的线程数量大于corePoolSize时，如果此时没有新的任务提交，核心线程外的线程不会立即销毁，需要等待，直到等待的时间超过了keepAliveTime就会终止。")]),e._v(" "),a("p",[e._v("（5）unit：keepAliveTime的时间单位")]),e._v(" "),a("p",[e._v("（6）threadFactory：线程工厂，用来创建线程\n默认会提供一个默认的工厂来创建线程，当使用默认的工厂来创建线程时，会使新创建的线程具有相同的优先级，并且是非守护的线程，同时也设置了线程的名称")]),e._v(" "),a("p",[e._v("（7）rejectHandler：拒绝处理任务时的策略")]),e._v(" "),a("p",[e._v("如果workQueue阻塞队列满了，并且没有空闲的线程池，此时，继续提交任务，需要采取一种策略来处理这个任务。")]),e._v(" "),a("p",[a("strong",[e._v("线程池总共提供了四种策略：")])]),e._v(" "),a("ul",[a("li",[e._v("直接抛出异常，这也是默认的策略。实现类为AbortPolicy。")]),e._v(" "),a("li",[e._v("用调用者所在的线程来执行任务。实现类为CallerRunsPolicy。")]),e._v(" "),a("li",[e._v("丢弃队列中最靠前的任务并执行当前任务。实现类为DiscardOldestPolicy。")]),e._v(" "),a("li",[e._v("直接丢弃当前任务。实现类为DiscardPolicy。")])]),e._v(" "),a("h3",{attrs:{id:"_2-threadpoolexecutor提供的启动和停止任务的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-threadpoolexecutor提供的启动和停止任务的方法"}},[e._v("#")]),e._v(" 2.ThreadPoolExecutor提供的启动和停止任务的方法")]),e._v(" "),a("p",[e._v("（1）execute():提交任务，交给线程池执行\n（2）submit():提交任务，能够返回执行结果 execute+Future\n（3）shutdown():关闭线程池，等待任务都执行完\n（4）shutdownNow():立即关闭线程池，不等待任务执行完")]),e._v(" "),a("h3",{attrs:{id:"_3-threadpoolexecutor提供的适用于监控的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-threadpoolexecutor提供的适用于监控的方法"}},[e._v("#")]),e._v(" 3.ThreadPoolExecutor提供的适用于监控的方法")]),e._v(" "),a("p",[e._v("（1）getTaskCount()：线程池已执行和未执行的任务总数\n（2）getCompletedTaskCount()：已完成的任务数量\n（3）getPoolSize()：线程池当前的线程数量\n（4）getCorePoolSize()：线程池核心线程数\n（5）getActiveCount():当前线程池中正在执行任务的线程数量")]),e._v(" "),a("p",[a("strong",[e._v("好了，今天就到这儿吧，我是冰河，我们下期见~~")])]),e._v(" "),a("h2",{attrs:{id:"写在最后"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写在最后"}},[e._v("#")]),e._v(" 写在最后")]),e._v(" "),a("blockquote",[a("p",[e._v("如果觉得文章对你有点帮助，请微信搜索并关注「 "),a("strong",[e._v("冰河技术")]),e._v(" 」微信公众号，跟冰河学习高并发编程技术。")])]),e._v(" "),a("p",[e._v("最后，附上并发编程需要掌握的核心技能知识图，祝大家在学习并发编程时，少走弯路。")]),e._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200322144644983.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2wxMDI4Mzg2ODA0,size_16,color_FFFFFF,t_70#pic_center",loading:"lazy"}})]),e._v(" "),a("blockquote",[a("p",[e._v("如果你觉得冰河写的还不错，请微信搜索并关注「 "),a("strong",[e._v("冰河技术")]),e._v(" 」微信公众号，跟冰河学习高并发、分布式、微服务、大数据、互联网和云原生技术，「 "),a("strong",[e._v("冰河技术")]),e._v(" 」微信公众号更新了大量技术专题，每一篇技术文章干货满满！不少读者已经通过阅读「 "),a("strong",[e._v("冰河技术")]),e._v(" 」微信公众号文章，吊打面试官，成功跳槽到大厂；也有不少读者实现了技术上的飞跃，成为公司的技术骨干！如果你也想像他们一样提升自己的能力，实现技术能力的飞跃，进大厂，升职加薪，那就关注「 "),a("strong",[e._v("冰河技术")]),e._v(" 」微信公众号吧，每天更新超硬核技术干货，让你对如何提升技术能力不再迷茫！")])]),e._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"","data-src":"https://img-blog.csdnimg.cn/20200906013715889.png",loading:"lazy"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);