(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{267:function(t,e,i){},290:function(t,e,i){"use strict";i(267)},302:function(t,e,i){"use strict";i.r(e);var a={name:"PayArticle",data:()=>({}),mounted:function(){setTimeout(()=>{if(this.isPay()){let t=this.articleObj();this._detect(t,this)}},150);setInterval(()=>{if(this.isPay()){let t=this.articleObj();this._detect(t,this)}},1e3)},methods:{isPay(){return this.$page.frontmatter.pay},articleObj:function(){let t=$(".theme-default-content");return t.length<=0?null:{article:t,height:t[0].clientHeight}},_detect:function(t,e){if(null==t)return;let i=t.article,a=t.height;if(i.length<=0)return;let r=.9*a;if(i.hasClass("lock-pay"))return;i.css({height:r+"px"}),i.addClass("lock-pay"),i.remove("#pay-read-more-wrap");let n=$(".pay-read-more-wrap").clone();n.attr("id","pay-read-more-wrap"),n.css("display","block"),n.find("#pay-read-more-btn").attr("href",this.$page.frontmatter.pay),i.append(n)}}},r=(i(290),i(7)),n=Object(r.a)(a,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"pay-read-more-wrap",staticStyle:{display:"none",position:"absolute",bottom:"0px","z-index":"9999",width:"100%","margin-top":"-100px","font-family":"PingFangSC-Regular, sans-serif"}},[t("div",{staticStyle:{position:"relative",height:"200px",background:"-webkit-gradient(linear, 0 0%, 0 100%, from(rgba(255, 255, 255, 0)), to(rgb(255, 255, 255)))"},attrs:{id:"pay-read-more-mask"}}),this._v(" "),t("a",{staticStyle:{position:"absolute",left:"50%",top:"70%",bottom:"30px",transform:"translate(-50%, -50%)",width:"160px",height:"36px","line-height":"36px","font-size":"15px","text-align":"center",border:"1px solid rgb(222, 104, 109)",color:"rgb(222, 104, 109)",background:"rgb(255, 255, 255)",cursor:"pointer","border-radius":"6px"},attrs:{id:"pay-read-more-btn",target:"_blank"}},[this._v("付费阅读")])])}],!1,null,null,null);e.default=n.exports}}]);