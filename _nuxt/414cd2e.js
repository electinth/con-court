/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1,12,13,14,15,39],{384:function(t,e,r){t.exports=r.p+"img/facebook_share.4fafee4.svg"},385:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1IDBDNi43NSAwIDAgNi43NSAwIDE1QzAgMjMuMjUgNi43NSAzMCAxNSAzMEMyMy4yNSAzMCAzMCAyMy4yNSAzMCAxNUMzMCA2Ljc1IDIzLjI1IDAgMTUgMFpNMjIuMiAxMS4zMjVDMjIuMiAxMS40NzUgMjIuMiAxMS42MjUgMjIuMiAxMS43NzVDMjIuMiAxNi42NSAxOC40NSAyMi4zNSAxMS42MjUgMjIuMzVDOS41MjUgMjIuMzUgNy41NzUgMjEuNzUgNS45MjUgMjAuN0M2LjIyNSAyMC43IDYuNTI1IDIwLjc3NSA2LjgyNSAyMC43NzVDOC41NSAyMC43NzUgMTAuMTI1IDIwLjE3NSAxMS40IDE5LjJDOS43NSAxOS4yIDguNCAxOC4wNzUgNy45NSAxNi42NUM4LjE3NSAxNi43MjUgOC40IDE2LjcyNSA4LjYyNSAxNi43MjVDOSAxNi43MjUgOS4zIDE2LjY1IDkuNiAxNi41NzVDNy44NzUgMTYuMiA2LjYgMTQuNyA2LjYgMTIuOTc1QzYuNiAxMi45NzUgNi42IDEyLjk3NSA2LjYgMTIuOUM3LjEyNSAxMy4yIDcuNjUgMTMuMzUgOC4yNSAxMy4zNUM3LjM1IDEyLjYgNi43NSAxMS40NzUgNi43NSAxMC4yQzYuNzUgOS41MjUgNi45IDguODUgNy4yNzUgOC4zMjVDOS4wNzUgMTAuNTc1IDExLjg1IDEyLjA3NSAxNC45MjUgMTIuMjI1QzE0Ljg1IDExLjkyNSAxNC44NSAxMS43IDE0Ljg1IDExLjRDMTQuODUgOS4zNzUgMTYuNSA3LjcyNSAxOC41MjUgNy43MjVDMTkuNTc1IDcuNzI1IDIwLjU1IDguMTc1IDIxLjIyNSA4LjkyNUMyMi4wNSA4Ljc3NSAyMi44NzUgOC40NzUgMjMuNTUgOC4wMjVDMjMuMjUgOC45MjUgMjIuNjUgOS42IDIxLjkgMTAuMDVDMjIuNjUgOS45NzUgMjMuNCA5Ljc1IDI0IDkuNDVDMjMuNTUgMTAuMTI1IDIyLjg3NSAxMC44IDIyLjIgMTEuMzI1WiIgZmlsbD0iYmxhY2siLz4KPC9zdmc+Cg=="},386:function(t,e,r){t.exports=r.p+"img/line_share.7b00b01.svg"},387:function(t,e,r){"use strict";var n=r(388);function l(t){new n(t.target).share()}t.exports={bind:function(t){(t=t||this.el).addEventListener("click",l,!1)},unbind:function(t){(t=t||this.el).removeEventListener("click",l,!1)}}},388:function(t,e){var r=function(t){this.elem=t};r.prototype={getValue:function(t){var e=this.elem.getAttribute("data-"+t);return null!=e&&e},share:function(){var t=this.getValue("sharer").toLowerCase(),s={facebook:{shareUrl:"https://www.facebook.com/sharer/sharer.php",params:{u:this.getValue("url")}},googleplus:{shareUrl:"https://plus.google.com/share",params:{url:this.getValue("url")}},linkedin:{shareUrl:"https://www.linkedin.com/shareArticle",params:{url:this.getValue("url"),mini:!0}},twitter:{shareUrl:"https://twitter.com/intent/tweet/",params:{text:this.getValue("title"),url:this.getValue("url"),hashtags:this.getValue("hashtags"),via:this.getValue("via")}},email:{shareUrl:"mailto:"+this.getValue("to"),params:{subject:this.getValue("subject"),body:this.getValue("title")+"\n"+this.getValue("url")},isLink:!0},whatsapp:{shareUrl:"whatsapp://send",params:{text:this.getValue("title")+" "+this.getValue("url")},isLink:!0},telegram:{shareUrl:"tg://msg_url",params:{text:this.getValue("title")+" "+this.getValue("url")},isLink:!0},viber:{shareUrl:"viber://forward",params:{text:this.getValue("title")+" "+this.getValue("url")},isLink:!0},line:{shareUrl:"http://line.me/R/msg/text/?"+encodeURIComponent(this.getValue("title")+" "+this.getValue("url")),isLink:!0},pinterest:{shareUrl:"https://www.pinterest.com/pin/create/button/",params:{url:this.getValue("url")}},tumblr:{shareUrl:"http://tumblr.com/widgets/share/tool",params:{canonicalUrl:this.getValue("url"),content:this.getValue("url"),posttype:"link",title:this.getValue("title"),caption:this.getValue("caption"),tags:this.getValue("tags")}},hackernews:{shareUrl:"https://news.ycombinator.com/submitlink",params:{u:this.getValue("url"),t:this.getValue("title")}},reddit:{shareUrl:"https://www.reddit.com/submit",params:{url:this.getValue("url")}},vk:{shareUrl:"http://vk.com/share.php",params:{url:this.getValue("url"),title:this.getValue("title"),description:this.getValue("caption"),image:this.getValue("image")}},xing:{shareUrl:"https://www.xing.com/app/user",params:{op:"share",url:this.getValue("url"),title:this.getValue("title")}},buffer:{shareUrl:"https://buffer.com/add",params:{url:this.getValue("url"),title:this.getValue("title"),via:this.getValue("via"),picture:this.getValue("picture")}},instapaper:{shareUrl:"http://www.instapaper.com/edit",params:{url:this.getValue("url"),title:this.getValue("title"),description:this.getValue("description")}},pocket:{shareUrl:"https://getpocket.com/save",params:{url:this.getValue("url")}},digg:{shareUrl:"http://www.digg.com/submit",params:{url:this.getValue("url")}},stumbleupon:{shareUrl:"http://www.stumbleupon.com/submit",params:{url:this.getValue("url"),title:this.getValue("title")}},flipboard:{shareUrl:"https://share.flipboard.com/bookmarklet/popout",params:{v:2,title:this.getValue("title"),url:this.getValue("url"),t:Date.now()}},weibo:{shareUrl:"http://service.weibo.com/share/share.php",params:{url:this.getValue("url"),title:this.getValue("title"),language:"zh_cn"}},renren:{shareUrl:"http://share.renren.com/share/buttonshare",params:{link:this.getValue("url")}},myspace:{shareUrl:"https://myspace.com/post",params:{u:this.getValue("url"),t:this.getValue("title"),c:this.getValue("description")}},blogger:{shareUrl:"https://www.blogger.com/blog-this.g",params:{u:this.getValue("url"),n:this.getValue("title"),t:this.getValue("description")}},baidu:{shareUrl:"http://cang.baidu.com/do/add",params:{it:this.getValue("title"),iu:this.getValue("url")}},hatenabookmark:{shareUrl:"http://b.hatena.ne.jp/entry/"+this.getValue("url")}}[t];return s&&(s.width=this.getValue("width"),s.height=this.getValue("height")),void 0!==s&&this.urlSharer(s)},urlSharer:function(t){var i,p=t.params||{},e=Object.keys(p),r=e.length>0?"?":"";for(i=0;i<e.length;i++)"?"!==r&&(r+="&"),p[e[i]]&&(r+=e[i]+"="+encodeURIComponent(p[e[i]]));if(t.shareUrl+=r,t.isLink)window.location.href=t.shareUrl;else{var n=t.width||600,l=t.height||480,m=window.innerWidth/2-n/2+window.screenX,o="scrollbars=no, width="+n+", height="+l+", top="+(window.innerHeight/2-l/2+window.screenY)+", left="+m,c=window.open(t.shareUrl,"",o);window.focus&&c.focus()}}},t.exports=r},407:function(t,e,r){"use strict";r.r(e);var n=r(387),l={directives:{sharer:r.n(n).a},data:function(){return{BASE_URL:"https://electinth.github.io/con-court/"}}},m=r(42),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex space-x-2 md:space-x-4",attrs:{id:"sharer-wrapper"}},[n("img",{directives:[{name:"sharer",rawName:"v-sharer"}],staticClass:"\n      w-[30px]\n      h-[30px]\n      md:w-[39px] md:h-[39px]\n      lg:h-[50px] lg:w-[50px]\n      cursor-pointer\n      sharer\n      button\n    ",attrs:{src:r(384),"data-sharer":"facebook","data-url":t.BASE_URL}}),t._v(" "),n("img",{directives:[{name:"sharer",rawName:"v-sharer"}],staticClass:"\n      w-[30px]\n      h-[30px]\n      md:w-[39px] md:h-[39px]\n      lg:h-[50px] lg:w-[50px]\n      cursor-pointer\n      sharer\n      button\n    ",attrs:{src:r(385),"data-sharer":"twitter","data-url":t.BASE_URL}}),t._v(" "),n("img",{staticClass:"\n      w-[30px]\n      h-[30px]\n      md:w-[39px] md:h-[39px]\n      lg:h-[50px] lg:w-[50px]\n      cursor-pointer\n      sharer\n      button\n    ",attrs:{src:r(386),"data-sharer":"line","data-url":t.BASE_URL,"facebook_share.svg":""}}),t._v(" "),n("script",{attrs:{src:"https://cdn.jsdelivr.net/npm/sharer.js@latest/sharer.min.js"}})])}),[],!1,null,"55ed895a",null);e.default=component.exports},421:function(t,e,r){t.exports=r.p+"img/summary_01.95f461c.png"},422:function(t,e,r){t.exports=r.p+"img/summary_02.4dabc5c.png"},423:function(t,e,r){t.exports=r.p+"img/summary_03.79131e4.png"},424:function(t,e,r){t.exports=r.p+"img/summary_04.c011674.png"},430:function(t,e,r){var content=r(506);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("45237332",content,!0,{sourceMap:!1})},440:function(t,e,r){"use strict";r.r(e);r(370),r(46),r(43),r(44),r(365);var n=r(376),l=r(375),m=r(374),o={components:{PopOver:n.default},data:function(){return{data:[{name:"นายกระมล ทองธรรมชาติ"},{name:"นายมานิต วิทยาเต็ม"},{name:"นายสุธี สุทธิสมบูรณ์"},{name:"พลตำรวจเอกสุวรรณ สุวรรณเวโช"},{name:"นายผัน จันทรปาน"},{name:"นายศักดิ์ เตชาชาญ"}]}},methods:{ReplaceString:function(t){return t.replaceAll(" ","_")},FilterJudgeByName:function(t){return m.filter((function(p){return p.name_surname_person===t}))[0]},PersonCase:function(t){var e=Object(l.default)(this.FilterJudgeByName(t.name));return this.SortPersonCaseNumber(e)},SortPersonCaseNumber:function(t){return t.map((function(t){return{name:t.name,list_case:t.list_case.sort((function(a,b){return b-a}))}}))}}},c=r(42),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-10/12 mx-auto md:max-w-[450px]",attrs:{id:"summary-group1-wrapper"}},[t._m(0),t._v(" "),n("div",{staticClass:"flex flex-wrap justify-center mt-7",attrs:{id:"group-img"}},t._l(t.data,(function(e,l){return n("div",{key:l,staticClass:"m-1 md:m-2"},[n("el-popover",{attrs:{placement:"bottom",width:"mobile"===t.$mq?200:240,trigger:"click"}},[n("PopOver",{attrs:{person:t.FilterJudgeByName(e.name),case_list_formated:t.PersonCase(e)}}),t._v(" "),n("img",{staticClass:"\n            w-[52px]\n            h-[52px]\n            md:w-[77px] md:h-[77px]\n            rounded-full\n            border border-black\n            mx-auto\n            cursor-pointer\n          ",attrs:{slot:"reference",src:r(377)("./"+t.ReplaceString(e.name)+".png")},slot:"reference"})],1)],1)})),0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-5 py-5 text-center border border-black B_04 bg-tableHead",attrs:{id:"wrapper"}},[r("div",{staticClass:"font-bold"},[t._v('1. กลุ่ม "โหวตดีต่อรัฐบาลสายทักษิณ ชินวัตร"')]),t._v(" "),r("div",[t._v("\n      ตั้งแต่ปี พ.ศ. 2540 - 2549 มีตุลาการ 6 คน\n      ลงมติทั้งหมดเป็นผลบวกต่อรัฐบาลสายทักษิณ ชินวัตร ที่มีอำนาจในช่วงนั้น\n    ")])])}],!1,null,"5cc67935",null);e.default=component.exports},441:function(t,e,r){"use strict";r.r(e);r(370),r(46),r(43),r(44),r(365);var n=r(376),l=r(375),m=r(374),o={components:{PopOver:n.default},data:function(){return{group_data:[{title:"2.1 มีตุลาการ 16 คน ลงมติทั้งหมดเป็นผลบวกต่อรัฐบาลสายอำนาจเก่า และทหาร ขณะมีอำนาจ",data:[{name:"นายปัญญา ถนอมรอด"},{name:"นายอักขราทร จุฬารัตน"},{name:"หม่อมหลวงไกรฤกษ์ เกษมสันต์"},{name:"นายสมชาย พงษธา"},{name:"นายกิติศักดิ์ กิติคุณไพโรจน์"},{name:"นายธานิศ เกศวพิทักษ์"},{name:"นายจรัญ หัตถกรรม"},{name:"นายวิชัย ชื่นชมพูนุท"},{name:"นายวรวิทย์ กังศศิเทียม"},{name:"นายนครินทร์ เมฆไตรรัตน์"},{name:"นายปัญญา อุดชาชน"},{name:"นายอุดม สิทธิวิรัชธรรม"},{name:"นายวิรุฬห์ แสงเทียน"},{name:"นายจิรนิติ หะวานนท์"},{name:"นายนภดล เทพพิทักษ์"},{name:"นายบรรจงศักดิ์ วงศ์ปราชญ์"}]},{title:"2.2 มีตุลาการ 1 คน ลงมติทั้งหมดเป็นผลลบต่อรัฐบาลสายทักษิณ ชินวัตร ขณะมีอำนาจ",data:[{name:"นายวสันต์ สร้อยพิสุทธิ์"}]},{title:"2.3 มีตุลาการ 4 คน ลงมติทั้งหมดเป็นผลบวกต่อรัฐบาลสายอำนาจเก่า และทหาร ขณะมีอำนาจ และเป็นผลลบต่อรัฐบาลสายทักษิณ ชินวัตร ขณะมีอำนาจ",data:[{name:"นายนุรักษ์ มาประณีต"},{name:"นายจรัญ ภักดีธนากุล"},{name:"นายสุพจน์ ไข่มุกด์"},{name:"นายจรูญ อินทจาร"}]}]}},methods:{ReplaceString:function(t){return t.replaceAll(" ","_")},FilterJudgeByName:function(t){return m.filter((function(p){return p.name_surname_person===t}))[0]},PersonCase:function(t){var e=Object(l.default)(this.FilterJudgeByName(t.name));return this.SortPersonCaseNumber(e)},SortPersonCaseNumber:function(t){return t.map((function(t){return{name:t.name,list_case:t.list_case.sort((function(a,b){return b-a}))}}))}}},c=r(42),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-10/12 mx-auto md:max-w-[450px] mt-24",attrs:{id:"summaey-wrapper"}},[t._m(0),t._v(" "),n("div",{attrs:{id:"group-data"}},t._l(t.group_data,(function(e,l){return n("div",{key:l},[n("div",{staticClass:"mt-6 font-bold text-center B_04"},[t._v(t._s(e.title))]),t._v(" "),n("div",{staticClass:"flex flex-wrap justify-center mt-7"},t._l(e.data,(function(e,l){return n("div",{key:l,staticClass:"m-1 md:m-2"},[n("el-popover",{attrs:{placement:"bottom",width:"mobile"===t.$mq?200:240,trigger:"click"}},[n("PopOver",{attrs:{person:t.FilterJudgeByName(e.name),case_list_formated:t.PersonCase(e)}}),t._v(" "),n("img",{staticClass:"\n                w-[52px]\n                h-[52px]\n                md:w-[77px] md:h-[77px]\n                rounded-full\n                border border-black\n                mx-auto\n                cursor-pointer\n              ",attrs:{slot:"reference",src:r(377)("./"+t.ReplaceString(e.name)+".png")},slot:"reference"})],1)],1)})),0)])})),0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-5 py-5 text-center border border-black B_04 bg-tableHead",attrs:{id:"wrapper"}},[r("div",{staticClass:"font-bold"},[t._v('\n      2. กลุ่ม "โหวตดีต่อรัฐบาลสายอำนาจเก่า และทหาร"\n    ')]),t._v(" "),r("div",[t._v("\n      ตั้งแต่ปี พ.ศ. 2549 - ปัจจุบัน สามารถแบ่งประเภท"),r("span",{staticClass:"whitespace-nowrap"},[t._v("การลงมติ")]),t._v("ของตุลาการ ได้ 3 ประเภท\n    ")])])}],!1,null,"2af7506c",null);e.default=component.exports},442:function(t,e,r){"use strict";r.r(e);var n=r(42),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"summary-01-wrapper"}},[n("img",{staticClass:"mx-auto mt-6 md:mt-16 mb-7 w-[175px] md:w-[292px]",attrs:{src:r(421)}}),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-10/12 mx-auto lg:max-w-[648px] B_04",attrs:{id:"content"}},[r("div",{staticClass:"font-bold"},[t._v("\n      1. การจัดตั้งศาลรัฐธรรมนูญครั้งแรกตามรัฐธรรมนูญ พ.ศ. 2540\n    ")]),t._v(" "),r("div",{staticClass:"mt-[10px]"},[t._v("\n      ศาลรัฐธรรมนูญถูกมองว่าโอนอ่อนต่อรัฐบาลสายทักษิณ\n      ชินวัตรที่มีอำนาจในเวลานั้นเกินไป\n      หลายการวินิจฉัยสร้างผลลัพธ์สำคัญทางการเมืองที่เป็นผลบวกกับรัฐบาลสายทักษิณ\n      ชินวัตร เช่น\n    ")]),t._v(" "),r("div",{staticClass:"mt-5 md:mt-7"},[r("div",{attrs:{id:"list-dot"}}),t._v("\n      วินิจฉัยให้ทักษิณ ชินวัตร รอดจากการหลุดตำแหน่ง 2 ครั้ง\n    ")]),t._v(" "),r("div",[r("div",{attrs:{id:"list-dot"}}),t._v("\n      วินิจฉัยให้กฎหมายที่ออกในสมัยรัฐบาลทักษิณ ชินวัตร ไม่ถูกขัดขวาง\n    ")])])}],!1,null,null,null);e.default=component.exports},443:function(t,e,r){"use strict";r.r(e);var n=r(42),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"summary-02-wrapper"}},[n("img",{staticClass:"mx-auto mt-6 md:mt-16 mb-7 w-[175px] md:w-[292px]",attrs:{src:r(422)}}),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-10/12 mx-auto lg:max-w-[648px] B_04",attrs:{id:"content"}},[r("div",{staticClass:"font-bold"},[t._v("\n      2. พระราชดำรัสของในหลวงรัชกาลที่ 9 เรื่องหน้าที่ของศาล"),r("br",{staticClass:"hidden md:block"}),t._v("\n      เมื่อวันที่ 25 เมษายน พ.ศ. 2549\n    ")]),t._v(" "),r("div",{staticClass:"mt-[10px]"},[t._v("\n      ผลลัพธ์สำคัญทางการเมืองจากศาลรัฐธรรมนูญต่อรัฐบาลสายทักษิณ ชินวัตร\n      เปลี่ยนแปลงไป เริ่มจาก\n    ")]),t._v(" "),r("div",{staticClass:"mt-5 md:mt-7 md:whitespace-nowrap"},[r("div",{attrs:{id:"list-dot"}}),t._v("\n      วินิจฉัยให้การเลือกตั้งที่พรรคไทยรักไทยกำลังได้เปรียบ กลายเป็นโมฆะ\n    ")]),t._v(" "),r("div",{staticClass:"mt-5 md:mt-7"},[t._v("\n      รวมถึงผลลัพธ์สำคัญทางการเมืองจากคณะกรรมการตุลาการรัฐธรรมนูญที่มารัฐธรรมนูญ\n      (ชั่วคราว) พ.ศ. 2549 ซึ่ง\n    ")]),t._v(" "),r("div",{staticClass:"mt-5 md:mt-7"},[r("div",{attrs:{id:"list-dot"}}),t._v("\n      วินิจฉัยให้ยุบพรรคไทยรักไทย แต่วินิจฉัยไม่ยุบพรรคประชาธิปัตย์\n    ")])])}],!1,null,null,null);e.default=component.exports},444:function(t,e,r){"use strict";r.r(e);var n=r(42),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"summary-03-wrapper"}},[n("img",{staticClass:"mx-auto mt-6 md:mt-16 mb-7 w-[175px] md:w-[292px]",attrs:{src:r(423)}}),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-10/12 mx-auto lg:max-w-[648px] B_04",attrs:{id:"content"}},[r("div",{staticClass:"font-bold"},[t._v("\n      3. การกลับมาของศาลรัฐธรรมนูญตามรัฐธรรมนูญ พ.ศ. 2550\n    ")]),t._v(" "),r("div",{staticClass:"mt-[10px]"},[t._v("\n      ศาลรัฐธรรมนูญเริ่มสร้างผลลัพธ์สำคัญทางการเมืองที่เป็นผลบวกต่อรัฐบาลสายอำนาจเก่า\n      และทหาร ที่มีอำนาจในเวลานั้น เช่น\n    ")]),t._v(" "),r("div",{staticClass:"mt-5 md:mt-7"},[r("div",{attrs:{id:"list-dot"}}),t._v("\n      วินิจฉัยให้พรรคประชาธิปัตย์ รอดจากการถูกยุบพรรค 2 ครั้ง\n    ")]),t._v(" "),r("div",{staticClass:"mt-5 md:mt-7"},[t._v("\n      รวมถึงสร้างผลลัพธ์สำคัญทางการเมืองที่เป็นผลลบต่อรัฐบาลสายทักษิณ ชินวัตร\n      ที่มีอำนาจในช่วงนั้น เช่น\n    ")]),t._v(" "),r("div",{staticClass:"mt-5 md:mt-7 lg:whitespace-nowrap"},[r("div",{attrs:{id:"list-dot"}}),t._v("\n      วินิจฉัยยุบพรรคพลังประชาชน + สมชาย วงศ์สวัสดิ์\n      หลุดจากตำแหน่งนายกรัฐมนตรี\n    ")]),t._v(" "),r("div",{staticClass:"lg:whitespace-nowrap"},[r("div",{attrs:{id:"list-dot"}}),t._v("\n      วินิจฉัยให้สมัคร สุนทรเวช และยิ่งลักษณ์ ชินวัตร\n      หลุดจากตำแหน่งนายกรัฐมนตรี\n    ")]),t._v(" "),r("div",{staticClass:"lg:whitespace-nowrap"},[r("div",{attrs:{id:"list-dot"}}),t._v("\n      วินิจฉัยให้กฎหมายที่จะออกในสมัยรัฐบาลยิ่งลักษณ์ ชินวัตร ถูกขัดขวาง\n    ")]),t._v(" "),r("div",[r("div",{attrs:{id:"list-dot"}}),t._v("\n      วินิจฉัยให้การเลือกตั้งที่พรรคเพื่อไทยกำลังได้เปรียบ กลายเป็นโมฆะ\n    ")])])}],!1,null,null,null);e.default=component.exports},445:function(t,e,r){"use strict";r.r(e);var n=r(42),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"summary-04-wrapper"}},[n("img",{staticClass:"mx-auto mt-6 md:mt-16 mb-7 w-[175px] md:w-[292px]",attrs:{src:r(424)}}),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-10/12 mx-auto lg:max-w-[648px] B_04",attrs:{id:"content"}},[r("div",{staticClass:"font-bold"},[t._v("\n      4. การทำรัฐประหารโดยคณะรักษาความสงบแห่งชาติ (คสช.)\n    ")]),t._v(" "),r("div",{staticClass:"mt-[10px]"},[t._v("\n      ด้วยการต่ออายุตุลาการรัฐธรรมนูญบางส่วน\n      และการคัดเลือกตุลาการรัฐธรรมนูญหน้าใหม่ ด้วยผลจากประกาศและคำสั่งของ คสช.\n      รวมถึงรัฐธรรมนูญ พ.ศ. 2560\n      ส่งผลให้แนวโน้มการสร้างผลลัพธ์สำคัญทางการเมืองที่เป็นผลบวกต่อรัฐบาลสายอำนาจเก่า\n      และทหาร ที่มีอำนาจในเวลานั้น ยังคงต่อเนื่อง เช่น\n    ")]),t._v(" "),r("div",{staticClass:"mt-5 md:mt-7"},[r("div",{attrs:{id:"list-dot"}}),t._v("\n      วินิจฉัยยุบพรรคไทยรักษาชาติ และพรรคอนาคตใหม่\n    ")]),t._v(" "),r("div",[r("div",{attrs:{id:"list-dot"}}),t._v("\n      วินิจฉัยให้ประยุทธ์ จันทร์โอชา รอดจากการหลุดตำแหน่ง 2 ครั้ง\n    ")]),t._v(" "),r("div",[r("div",{attrs:{id:"list-dot"}}),t._v("\n      วินิจฉัยให้ธรรมนัส พรหมเผ่า รอดจากการหลุดตำแหน่ง\n    ")]),t._v(" "),r("div",{staticClass:"lg:whitespace-nowrap"},[r("div",{attrs:{id:"list-dot"}}),t._v("\n      วินิจฉัยให้กฎหมายที่ออกในสมัยรัฐบาลประยุทธ์ จันทร์โอชา ไม่ถูกขัดขวาง\n    ")])])}],!1,null,null,null);e.default=component.exports},505:function(t,e,r){"use strict";r(430)},506:function(t,e,r){var n=r(57)((function(i){return i[1]}));n.push([t.i,"#list-dot{min-width:4px;height:4px;border-radius:4px;background:#000;display:inline-block;margin:0 8px;position:relative;top:-2.5px;transform:translateY(-50%)}@media screen and (max-width:767px){#list-dot{top:-1.5px;min-width:3px;height:3px;margin-right:5px}}",""]),n.locals={},t.exports=n},508:function(t,e,r){"use strict";r.r(e);var n={components:{Sharer:r(407).default}},l=(r(505),r(42)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container flex flex-col items-center mx-auto mb-36",attrs:{id:"summary"}},[r("div",{staticClass:"w-11/12 lg:max-w-[745px] mx-auto mt-36 B_03 text-center"},[t._v("\n    จากตัวอย่างข้อมูลทั้งหมด สะท้อนว่า\n    ศาลรัฐธรรมนูญได้สร้างผลลัพธ์สำคัญทางการเมืองหลายครั้งในรอบระยะเวลา 10\n    กว่าปีที่ผ่านมา\n    และหลายเหตุการณ์สำคัญมีส่วนเชื่อมโยงกับการวินิจฉัยของศาลรัฐธรรมนูญในเรื่องนี้\n    อย่างเช่น\n  ")]),t._v(" "),r("Summary01"),t._v(" "),r("Summary02"),t._v(" "),r("Summary03"),t._v(" "),r("Summary04"),t._v(" "),r("div",{staticClass:"\n      B_03\n      w-10/12\n      mx-auto\n      lg:max-w-[673px]\n      text-center\n      md:py-10\n      py-3\n      md:px-14\n      px-6\n      border border-black\n      my-[60px]\n    "},[t._v("\n    จากผลลงมติรายบุคคลของตุลาการรัฐธรรมนูญซึ่งมีส่วนร่วมกับการวินิจฉัยที่สร้างผลลัพธ์สำคัญทางการเมืองมากกว่า\n    2 ครั้งขึ้นไป สามารถแบ่งได้ 2 กลุ่ม ดังนี้\n  ")]),t._v(" "),r("div",{staticClass:"mb-7 B_05 text-darkGrey"},[t._v("(คลิกที่รูปเพื่อดูผลการลงมติ)")]),t._v(" "),r("SummaryGroup01"),t._v(" "),r("SummaryGroup02"),t._v(" "),r("div",{staticClass:"\n      w-10/12\n      mx-auto\n      lg:w-[673px]\n      border border-black\n      md:py-11\n      py-6\n      md:px-5\n      px-2\n      B_03\n      text-center\n      md:mt-36\n      mt-20\n    "},[t._v("\n    ผลลัพธ์สำคัญทางการเมืองเกิดขึ้นจากการวินิจฉัยของศาลรัฐธรรมนูญและการลงมติของตุลาการรัฐธรรมนูญได้\n    ซึ่งสามารถถูกใช้เป็นเครื่องมือสร้างประโยชน์หรือโทษทางการเมืองแก่ฝ่ายใดฝ่ายหนึ่ง\n    และในประเทศไทย\n    เหตุการณ์สำคัญบางอย่างส่งผลต่อการทำงานของศาลรัฐธรรมนูญและตุลาการรัฐธรรมนูญในการสร้างผลลัพธ์สำคัญทางการเมืองด้วยเช่นกัน\n  ")]),t._v(" "),r("Sharer",{staticClass:"mt-24"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Summary01:r(442).default,Summary02:r(443).default,Summary03:r(444).default,Summary04:r(445).default,SummaryGroup01:r(440).default,SummaryGroup02:r(441).default})}}]);