(window.webpackJsonp=window.webpackJsonp||[]).push([[42,8,18,20],{428:function(t,e,n){var content=n(445);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("bfe1014e",content,!0,{sourceMap:!1})},431:function(t,e,n){"use strict";n.r(e);n(78),n(79),n(373),n(44),n(43),n(365);var r=n(425),l=n(366),o={components:{PopOver:n(367).default},data:function(){return{number_all_case:22,judge_data:"",number_case_bg_gray:[1,2,3,4,7,9,10,15,16,17,18,19,20,21,22]}},mounted:function(){this.judge_data=r},methods:{SetBG:function(t){return this.number_case_bg_gray.includes(t)},ReplaceString:function(t){return t.replaceAll(" ","_")},PersonCase:function(t){var e=Object(l.default)(t);return this.SortPersonCaseNumber(e)},SortPersonCaseNumber:function(t){return t.map((function(t){return{name:t.name,list_case:t.list_case.sort((function(a,b){return b-a}))}}))}}},c=(n(444),n(42)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative flex flex-col items-center",attrs:{id:"table-judge-wrapper"}},t._l(t.judge_data,(function(e){return r("div",{key:e.number_person,staticClass:"relative border-l-2 border-r-2  w-max border-l-tableGray border-r-tableGray"},[r("el-popover",{attrs:{placement:"bottom",width:"227",trigger:"click"}},[r("PopOver",{attrs:{person:e,case_list_formated:t.PersonCase(e)}}),t._v(" "),r("img",{staticClass:"\n          w-[15px]\n          h-[15px]\n          md:w-[30px] md:h-[30px]\n          lg:w-[40px] lg:h-[40px]\n          rounded-full\n          border-black border\n          cursor-pointer\n          absolute\n          lg:left-[-60px]\n          md:left-[-50px]\n          left-[-25px]\n        ",staticStyle:{top:"50%",transform:"translateY(-50%)"},attrs:{slot:"reference",src:n(372)("./"+t.ReplaceString(e.name_surname_person)+".png")},slot:"reference"})],1),t._v(" "),r("div",{staticClass:"flex justify-center",attrs:{id:"row"}},t._l(t.number_all_case,(function(n){return r("div",{key:n,staticClass:"\n          flex\n          items-center\n          justify-center\n          py-[5px]\n          md:py-[18px]\n          relative\n        ",class:t.SetBG(n)?"bg-tableGray":""},[e["case_"+n]?r("div",{staticClass:"\n            w-[9px]\n            h-[9px]\n            md:w-[19px] md:h-[19px]\n            lg:w-[24px] lg:h-[24px]\n            rounded-full\n            border border-black\n            lg:mx-[6px]\n            md:mx-[4px]\n            mx-[1.5px]\n            relative\n            z-10\n          ",class:1===e["case_"+n]?"bg-positiveGreen":"bg-negativeRed"}):r("div",{staticClass:"\n            bg-lightGrey\n            relative\n            z-10\n            w-[9px]\n            h-[9px]\n            md:w-[19px] md:h-[19px]\n            lg:w-[24px] lg:h-[24px]\n            rounded-full\n            border border-absentGray\n            lg:mx-[6px]\n            md:mx-[4px]\n            mx-[1.5px]\n          "}),t._v(" "),r("div",{staticClass:"absolute z-0 w-full border-b  md:border-b-4 border-b-absentGray",class:{"w-[50%] left-0":n===t.number_all_case,"w-[50%] right-0":1===n}})])})),0)],1)})),0)}),[],!1,null,null,null);e.default=component.exports},432:function(t,e,n){"use strict";n.r(e);var r=n(42),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative z-50 text-center B_03",attrs:{id:"intro-step-wrapper"}},[n("div",{staticClass:"flex items-center h-screen",attrs:{id:"step-1"}},[n("div",{staticClass:"\n        h-max\n        md:w-[673px]\n        w-10/12\n        mx-auto\n        border-2 border-black\n        md:px-9\n        px-4\n        py-5\n        bg-white\n        box-shadow-style\n      "},[t._v("\n      นับตั้งแต่ที่ศาลรัฐธรรมนูญถูกจัดตั้งขึ้นเป็นองค์กรตุลาการตามรัฐธรรมนูญจนถึงปัจจุบัน\n      หลากหลายการวินิจฉัยของศาลสร้างผลลัพธ์สำคัญต่อเรื่องการเมืองของประเทศไทยอย่างปฏิเสธไม่ได้\n      และในหลายครั้ง\n      เหตุการณ์สำคัญทางการเมืองก็ส่งผลต่อการทำงานของศาลรัฐธรรมนูญในการสร้างผลลัพธ์สำคัญทางการเมือง\n      โดยสามารถสร้างแนวโน้มของผลลัพธ์บางอย่างที่น่าสนใจ\n    ")])]),t._v(" "),n("div",{staticClass:"flex items-center h-screen",attrs:{id:"step-2"}},[n("div",{staticClass:"\n        h-max\n        md:w-[673px]\n        w-10/12\n        mx-auto\n        border-2 border-black\n        md:px-9\n        px-4\n        py-9\n        bg-white\n        box-shadow-style\n      "},[t._v("\n      ELECT\n      ขอพาทุกคนดูตัวอย่างคำวินิจฉัยศาลรัฐธรรมนูญที่ก่อให้เกิดผลลัพธ์สำคัญทางการเมือง\n      พร้อมกับความสัมพันธ์ต่อเหตุการณ์สำคัญทางการเมืองที่ส่งผลต่อสร้างผลลัพธ์สำคัญทางการเมือง\n      รวมถึงผลงานของตุลาการรัฐธรรมนูญแต่ละคนในศาลรัฐธรรมนูญแต่ละชุด\n      ว่าลงมติที่สร้างผลลัพธ์สำคัญทางการเมืองอย่างไรกันบ้าง\n    ")])]),t._v(" "),n("div",{staticClass:"flex items-center h-screen",attrs:{id:"step-3"}},[n("div",{staticClass:"\n        h-max\n        md:w-[673px]\n        w-10/12\n        mx-auto\n        border-2 border-black\n        md:px-9\n        px-4\n        py-14\n        bg-white\n      "},[t._v("\n      จากการวินิจฉัยศาลรัฐธรรมนูญมากกว่า 350 เรื่อง\n      นับตั้งแต่ที่ศาลรัฐธรรมนูญถูกจัดตั้งเป็นองค์กรตุลาการตามรัฐธรรมนูญจนถึงปัจจุบัน\n      "),n("div",{staticClass:"mt-10"},[t._v('\n        เราขอคัดตัวอย่าง "22 การวินิจฉัย"\n        ที่ก่อให้เกิดผลลัพธ์สำคัญทางการเมืองไทย มาตีแผ่รายละเอียดต่าง ๆ ว่า\n        การวินิจฉัยนั้นเกิดขึ้นในสมัยรัฐบาลใด\n        ผลโหวตขององค์คณะตุลาการเป็นอย่างไร\n        และสร้างผลลัพธ์สำคัญทางการเมืองอย่างไรบ้าง\n        รวมถึงเป็นผลดีหรือผลเสียต่อรัฐบาลที่มีอำนาจในยุคนั้น ๆ\n      ')])])])])}],!1,null,null,null);e.default=component.exports},443:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxOCAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNTkwNDggMC42NjYwMTZWMTguODk1NyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik0xNy44Nzk5IDkuNzgwMjdMMC4xNDI4NjQgOS43ODAyNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo="},444:function(t,e,n){"use strict";n(428)},445:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,".el-popover{border:1px solid #000;border-radius:0}.popper__arrow{display:none!important}",""]),r.locals={},t.exports=r},446:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzOCAzOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI4LjMwMjIgOS43MzI0Mkw5LjUxNzIxIDI4LjUxNzUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMyIvPgo8cGF0aCBkPSJNMjguMzAyMiAyOC41MTc2TDkuNTE3MjEgOS43MzI1NCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIzIi8+Cjwvc3ZnPgo="},451:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{tony:{title:"กลุ่มรัฐบาลสายทักษิณ ชินวัตร",list:[{name:"รัฐบาลทักษิณ ชินวัตร",date:" (สมัยที่ 1 พ.ศ. 2544 - 2548<br/> สมัยที่ 2 พ.ศ. 2548 - 2549)",img:n(357)},{name:"รัฐบาลสมัคร สุนทรเวช",date:"(พ.ศ. 2551) ",img:n(358)},{name:"รัฐบาลสมชาย วงศ์สวัสด",date:"(พ.ศ. 2551)",img:n(359)},{name:"รัฐบาลยิ่งลักษณ์ ชินวัตร",date:"(พ.ศ. 2554 - 2557) ",img:n(360)}]},soldier:{title:"กลุ่มรัฐบาลกลุ่มอำนาจเก่า และทหาร",list:[{name:"รัฐบาลสุรยุทธ์ จุลานนท์",date:" (พ.ศ. 2549 - 2551) ",img:n(361)},{name:"รัฐบาลอภิสิทธิ์ เวชชาชีวะ",date:"(พ.ศ. 2551 - 2554)",img:n(362)},{name:"รัฐบาลประยุทธ์ จันทร์โอชา",date:"(สมัยที่ 1 พ.ศ. 2557 - 2562<br/> สมัยที่ 2 พ.ศ. 2562 - ปัจจุบัน)",img:n(363)}]}}}},l=n(42),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative z-40 bg-white",attrs:{id:"divide-gov-wrapper"}},[n("p",{staticClass:"font-bold text-center B_02",attrs:{id:"title"}},[t._v("\n    โดยเราจะแบ่งรัฐบาลออกเป็น 2 กลุ่มหลัก\n  ")]),t._v(" "),n("div",{staticClass:"\n      flex\n      w-10/12\n      lg:max-w-[821px]\n      mx-auto\n      mt-8\n      lg:space-x-20\n      pb-16\n      border-b-2 border-b-black\n      flex-col\n      lg:flex-row\n    ",attrs:{id:"divide-era"}},[n("div",{attrs:{id:"tony-wrapper"}},[n("div",{staticClass:"px-4 py-1 mx-auto font-bold text-white bg-black B_03 w-max"},[t._v("\n        "+t._s(t.tony.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"flex flex-col mt-3 lg:ml-5",attrs:{id:"list-gov"}},t._l(t.tony.list,(function(e,r){return n("div",{key:r,staticClass:"\n            flex\n            justify-start\n            flex-1\n            mt-3\n            w-[200px]\n            md:w-[290px]\n            mx-auto\n          "},[n("img",{staticClass:"max-h-[40px] md:max-h-[60px] rotate-[-9deg] mr-3",attrs:{src:e.img,alt:e.name}}),t._v(" "),n("div",{staticClass:"flex flex-col justify-center",attrs:{id:"inside"}},[n("div",{staticClass:"font-bold B_05"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"B_05",domProps:{innerHTML:t._s(e.date)}})])])})),0)]),t._v(" "),n("div",{staticClass:"mt-8 lg:mt-0",attrs:{id:"soldier-wrapper"}},[n("div",{staticClass:"px-4 py-1 mx-auto font-bold text-white bg-black B_03 w-max"},[t._v("\n        "+t._s(t.soldier.title)+"\n      ")]),t._v(" "),n("div",{staticClass:"flex flex-col mt-3 lg:ml-5",attrs:{id:"list-gov"}},t._l(t.soldier.list,(function(e,r){return n("div",{key:r,staticClass:"\n            flex\n            justify-start\n            flex-1\n            mt-3\n            w-[200px]\n            md:w-[290px]\n            mx-auto\n          "},[n("img",{staticClass:"max-h-[40px] md:max-h-[60px] rotate-[-9deg] mr-3",attrs:{src:e.img,alt:e.name}}),t._v(" "),n("div",{staticClass:"flex flex-col justify-center",attrs:{id:"inside"}},[n("div",{staticClass:"font-bold B_05"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"B_05",domProps:{innerHTML:t._s(e.date)}})])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports},455:function(t,e,n){"use strict";n.r(e);var r={methods:{openModal:function(){document.getElementById("hide-more-case-wrapper").style.display="flex",document.getElementById("table-judge-wrapper").style.overflowY="hidden",document.body.style.overflow="hidden"}}},l=n(42),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"\n    absolute\n    B_06\n    w-[37px]\n    h-[37px]\n    md:w-[64px] md:h-[64px]\n    bg-black\n    rounded-full\n    text-white\n    flex\n    items-center\n    justify-center\n    left-[105%]\n    top-[50%]\n    translate-y-[-50%]\n    cursor-pointer\n    text-center\n    flex-col\n  ",on:{click:t.openModal}},[r("img",{attrs:{src:n(443),width:"mobile"===t.$mq?8:17}}),t._v("\n  รายชื่อ"),r("br"),t._v("\n  คดี\n")])}),[],!1,null,"3238459c",null);e.default=component.exports},456:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{era_case_list:[{name:"ทักษิณ ชินวัตร",list_case:[1,2,3,4]},{name:"สุรยุทธ์ จุลานนท์",list_case:[5,6]},{name:"สมัคร สุนทรเวช",list_case:[7]},{name:"สมชาย วงศ์สวัสดิ์",list_case:[8]},{name:"อภิสิทธิ์ เวชชาชีวะ",list_case:[9,10]},{name:"ยิ่งลักษณ์ ชินวัตร",list_case:[11,12,13,14]},{name:"ประยุทธ์ จันทร์โอชา",list_case:[15,16,17,18,19,20,21,22]}]}},methods:{ReturnEraImage:function(t){return"ทักษิณ ชินวัตร"===t?n(357):"สุรยุทธ์ จุลานนท์"===t?n(361):"สมัคร สุนทรเวช"===t?n(358):"สมชาย วงศ์สวัสดิ์"===t?n(359):"อภิสิทธิ์ เวชชาชีวะ"===t?n(362):"ยิ่งลักษณ์ ชินวัตร"===t?n(360):"ประยุทธ์ จันทร์โอชา"===t?n(363):void 0}}},l=n(42),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"\n    absolute\n    w-max\n    mx-auto\n    left-[50%]\n    bottom-[12px]\n    flex\n    md:h-[61px]\n    h-[25px]\n    border\n    lg:border-2\n    border-absentGray\n  ",staticStyle:{transform:"translateX(-50%)"},attrs:{id:"header-tabler-person"}},t._l(t.era_case_list,(function(e){return n("div",{key:e.name,staticClass:"relative flex items-end h-full pb-1 md:pb-3",class:{"bg-headertable":"ทักษิณ ชินวัตร"===e.name||"สมัคร สุนทรเวช"===e.name||"อภิสิทธิ์ เวชชาชีวะ"===e.name||"ประยุทธ์ จันทร์โอชา"===e.name}},[n("img",{staticClass:"absolute h-[12px] md:h-[25px] lg:h-[32px]",staticStyle:{top:"0%",transform:"translate(-50%, -50%)",left:"50%"},attrs:{src:t.ReturnEraImage(e.name)}}),t._v(" "),t._l(e.list_case,(function(e){return n("div",{key:e,staticClass:"\n        flex\n        w-[9px]\n        h-[9px]\n        md:w-[19px] md:h-[19px]\n        lg:w-[24px] lg:h-[24px]\n        justify-center\n        B_05\n        font-bold\n        lg:mx-[6px]\n        md:mx-[4px]\n        mx-[1.5px]\n      "},[t._v("\n      "+t._s(e)+"\n    ")])}))],2)})),0)}),[],!1,null,"4e27419a",null);e.default=component.exports},457:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{hint_1:[{number:1,content:'วินิจฉัยว่าทักษิณ ชินวัตร ไม่หลุด\nจากตำแหน่งนายกรัฐมนตรี\nจากกรณี "คดีซุกหุ้น" '},{number:2,content:"วินิจฉัยว่า กฎหมายซึ่งอาจเอื้อประโยชน์\nทางธุรกิจแก่ บริษัท ชินคอร์ปอเรชั่น จำกัด\n(มหาชน) โดยเฉพาะ ไม่มีปัญหาเรื่อง\nความชอบด้วยรัฐธรรมนูญ"},{number:3,content:"วินิจฉัยไม่รับคำร้องของ 28 สว. ที่ขอให้\nศาลรัฐธรรมนูญวินิจฉัยให้ ทักษิณ ชินวัตร\nพ้นจากตำแหน่งนายกรัฐมนตรี"},{number:4,content:"วินิจฉัยว่า การเลือกตั้งสมาชิกสภาผู้แทนราษฎร\nเมื่อวันที่ 2 เมษายน พ.ศ. 2549 เป็นโมฆะ"},{number:5,content:"วินิจฉัยยกคำร้องที่ขอให้ศาลสั่งยุบ\nพรรคประชาธิปัตย์"},{number:6,content:'วินิจฉัยให้มีคําสั่งยุบพรรคไทยรักไทย\nจากกรณี "จ้างพรรคเล็กลงเลือกตั้ง"'},{number:7,content:'วินิจฉัยให้สมัคร สุนทรเวช หลุดจาก\nตำแหน่งนายกรัฐมนตรี จากกรณี\n"เป็นพิธีกรรายการทีวี"'}],hint_2:[{number:8,content:'วินิจฉัยให้มีคําสั่งยุบพรรคพลังประชาชน\nจากกรณี "ทุจริตการเลือกตั้ง"'},{number:9,content:"วินิจฉัยยกคำร้องที่ขอให้ศาลสั่งยุบพรรค\nประชาธิปัตย์"},{number:10,content:"วินิจฉัยยกคำร้องที่ขอให้ศาลสั่งยุบพรรค\nประชาธิปัตย์"},{number:11,content:"วินิจฉัยว่า การแก้ไขเพิ่มเติมรัฐธรรมนูญ\nเกี่ยวกับที่มาและคุณสมบัติของสมาชิกวุฒิสภา\nขัดรัฐธรรมนูญ"},{number:12,content:"วินิจฉัยให้ร่าง พ.ร.บ.กู้เงิน 2 ล้านล้าน ตกไป"},{number:13,content:"วินิจฉัยว่า การเลือกตั้งสมาชิกสภาผู้แทนราษฎร\nที่จัดขึ้นเมื่อวันที่ 2 กุมภาพันธ์ พ.ศ. 2557 เป็นโมฆะ"},{number:14,content:'วินิจฉัยให้ยิ่งลักษณ์ ชินวัตร หลุดจากตำแหน่ง\nนายกรัฐมนตรี จากกรณี "โยกย้ายข้าราชการ"'},{number:15,content:"วินิจฉัยให้มาตรา 61 วรรคสอง แห่งพระราชบัญญัติ\nว่าด้วยการออกเสียงประชามติร่างรัฐธรรมนูญ\nพ.ศ. 2559 ไม่ขัดรัฐธรรมนูญ"}],hint_3:[{number:16,content:'วินิจฉัยให้มีคําสั่งมีคำสั่งยุบพรรคไทยรักษาชาติ\nจากกรณี "เสนอชื่อทูลกระหม่อมฯ เป็นแคนดิเดต\nนายกรัฐมนตรี"'},{number:17,content:"วินิจฉัยว่า สูตรคำนวณ สส. ปาร์ตี้ลิสต์ ไม่ขัด\nรัฐธรรมนูญ"},{number:18,content:'วินิจฉัยว่า พลเอกประยุทธ์ จันทร์โอชา ไม่หลุดจาก\nตำแหน่ง นายกรัฐมนตรี จากกรณี "ดำรงตำแหน่ง\nหัวหน้า คสช."'},{number:19,content:'วินิจฉัยให้ธนาธร จึงรุ่งเรืองกิจ หลุดจากตำแหน่ง\nสส. จากกรณี "คดีถือหุ้นสื่อ"'},{number:20,content:'วินิจฉัยให้มีคำสั่งยุบพรรคอนาคตใหม่ จากกรณี\n"กู้ยืมเงินหัวหน้าพรรค"'},{number:21,content:'วินิจฉัยว่า พลเอกประยุทธ์ จันทร์โอชา ไม่หลุด\nจากตำแหน่งนายกรัฐมนตรี  จากกรณี\n"คดีบ้านพักหลวง"'},{number:22,content:'วินิจฉัยว่า ร้อยเอกธรรมนัส พรหมเผ่า ไม่หลุด\nจากตำแหน่ง สส. และรัฐมนตรี ในกรณี\n"คดียาเสพติดที่ออสเตรเลีย"'}]}},methods:{closeModal:function(){document.getElementById("hide-more-case-wrapper").style.display="none",document.getElementById("table-judge-wrapper").style.overflowY="auto",document.body.style.overflow="auto"}}},l=n(42),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"\n    pt-16\n    lg:pt-7\n    fixed\n    lg:w-[80%]\n    w-screen\n    bg-tableHead\n    z-20\n    border border-black\n    top-[50%]\n    translate-y-[-50%]\n    B_05\n    py-7\n    px-12\n    flex flex-col\n    lg:flex-row\n    space-x-3\n    hidden\n    overflow-y-auto\n    lg:overflow-y-visible\n    z-[60]\n    left-[50%]\n    translate-x-[-50%]\n  ",class:{"h-full":"mobile"===t.$mq||"tablet"===t.$mq,"h-max":"mobile"!=t.$mq||"tablet"!=t.$mq},attrs:{id:"hide-more-case-wrapper"}},[r("img",{staticClass:"\n      absolute\n      top-0\n      right-0\n      cursor-pointer\n      w-[16px]\n      md:w-[26px]\n      m-3\n      lg:m-0\n    ",attrs:{src:n(446)},on:{click:t.closeModal}}),t._v(" "),r("div",{staticClass:"flex flex-col space-y-3 lg:flex-1"},t._l(t.hint_1,(function(e,n){return r("div",{key:n+1,staticClass:"flex"},[r("div",{staticClass:"mr-5 font-bold"},[t._v(t._s(e.number))]),t._v(" "),r("div",[t._v(t._s(e.content))])])})),0),t._v(" "),r("div",{staticClass:"flex flex-col space-y-3 lg:flex-1"},t._l(t.hint_2,(function(e,n){return r("div",{key:n+1,staticClass:"flex"},[r("div",{staticClass:"mr-5 font-bold"},[t._v(t._s(e.number))]),t._v(" "),r("div",[t._v(t._s(e.content))])])})),0),t._v(" "),r("div",{staticClass:"flex flex-col space-y-3 lg:flex-1"},t._l(t.hint_3,(function(e,n){return r("div",{key:n+1,staticClass:"flex"},[r("div",{staticClass:"mr-5 font-bold"},[t._v(t._s(e.number))]),t._v(" "),r("div",[t._v(t._s(e.content))])])})),0)])}),[],!1,null,"1b2876d0",null);e.default=component.exports},458:function(t,e,n){t.exports=n.p+"img/logo.9fa5901.png"},459:function(t,e,n){t.exports=n.p+"img/star_bg.78a8b41.png"},460:function(t,e,n){t.exports=n.p+"img/concourt_building.7694b91.svg"},461:function(t,e,n){t.exports=n.p+"img/bg.ecff9d7.png"},462:function(t,e,n){t.exports=n.p+"img/desktop_newspaper.fbec0fc.png"},463:function(t,e,n){t.exports=n.p+"img/mobile_newspaper.14a12c9.png"},469:function(t,e,n){var content=n(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("0348c759",content,!0,{sourceMap:!1})},473:function(t,e,n){"use strict";n.r(e);var r=n(432),l=n(451),o={components:{IntroStep:r.default,DivideGov:l.default},methods:{ScrollToTimeLine:function(){document.querySelector("#timeline").scrollIntoView({behavior:"smooth"})}}},c=n(42),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"intro-wrapper"}},[r("div",{staticClass:"relative"},[r("div",{staticClass:"h-screen"}),t._v(" "),r("div",{staticClass:"absolute top-[7%] z-20 w-full md:h-[2%] h-[50px]"},[r("div",{staticClass:"\n          left-[50%]\n          absolute\n          H_title\n          whitespace-nowrap\n          md:bottom-[18%]\n          bottom-[45%]\n        ",staticStyle:{transform:"translateX(-50%)","z-index":"25"}},[t._v("\n        ศาลรัฐธรรมนูญ\n      ")]),t._v(" "),r("div",{staticClass:"left-[50%] absolute H_title z-40 top-[20%] whitespace-nowrap",staticStyle:{transform:"translateX(-50%)"}},[t._v("\n        กับการเมือง\n      ")]),t._v(" "),r("img",{staticClass:"\n          md:w-[82px] md:h-[82px]\n          w-[37px]\n          h-[37px]\n          z-30\n          left-[50%]\n          absolute\n        ",staticStyle:{transform:"translateX(-50%)"},attrs:{src:n(458)}}),t._v(" "),r("img",{staticClass:"\n          absolute\n          z-20\n          h-screen\n          object-cover\n          md:w-[80%]\n          left-[50%]\n          top-[50%]\n        ",staticStyle:{transform:"translate(-50%, -50%)"},attrs:{src:n(459)}})]),t._v(" "),r("img",{staticClass:"\n        absolute\n        top-0\n        z-40\n        w-[200px]\n        md:w-[500px] md:top-[12%]\n        top-[13%]\n        left-[50%]\n      ",staticStyle:{transform:"translateX(-50%)"},attrs:{src:n(460)}}),t._v(" "),r("img",{staticClass:"absolute top-0 z-0 h-[50%] object-cover",attrs:{src:n(461)}}),t._v(" "),r("img",{staticClass:"absolute top-[15%] z-10 h-[60%] object-cover hidden md:block",attrs:{src:n(462)}}),t._v(" "),r("img",{staticClass:"absolute top-[15%] z-10 h-[50%] object-cover md:hidden",attrs:{src:n(463)}}),t._v(" "),r("IntroStep")],1),t._v(" "),r("DivideGov"),t._v(" "),r("div",{staticClass:"\n      w-10/12\n      lg:max-w-[815px]\n      mx-auto\n      text-center\n      B_03\n      pt-16\n      relative\n      z-40\n      bg-white\n    "},[t._v('\n    นอกจากนี้ เราขอกล่าวถึงตัวอย่าง "6 เหตุการณ์สำคัญ" ในช่วงเวลาดังกล่าว\n    ที่ส่งผลต่อการทำงานของศาลรัฐธรรมนูญ ในการสร้างผลลัพธ์สำคัญทางการเมือง\n    เพื่อแสดงให้เห็นถึงความสัมพันธ์ของเหตุการณ์กับการทำงานของศาลรัฐธรรมนูญในเรื่องนี้\n  ')]),t._v(" "),r("div",{staticClass:"relative z-40 pt-20 pb-2 mx-auto bg-white md:pt-24 w-max"},[r("div",{staticClass:"relative px-8 py-1 mx-auto font-bold border border-black cursor-pointer  md:border-2 H_05 w-max",attrs:{id:"start"},on:{click:t.ScrollToTimeLine}},[t._v("\n      เริ่ม!\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IntroStep:n(432).default})},481:function(t,e,n){"use strict";n.r(e);var r=n(429),l=n(455),o=n(431),c=n(456),d=n(457),m={components:{HintTrack:r.default,BottonSeeMoreCase:l.default,TableJudge:o.default,HeaderTablePerson:c.default,HideMoreCase:d.default}},x=n(42),component=Object(x.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"summary"}},[n("div",{staticClass:"relative"},[n("div",{staticClass:"\n        h-[133px]\n        md:h-[241px]\n        bg-tableHead\n        flex flex-col\n        justify-center\n        sticky\n        top-0\n        z-50\n      ",attrs:{id:"top-table"}},[n("div",{staticClass:"container mx-auto"},[n("div",{staticClass:"\n            bg-white\n            border border-black\n            lg:w-[578px]\n            md:w-[450px]\n            w-max\n            mx-auto\n            flex\n            justify-center\n            relative\n            md:h-[36px]\n            h-[20px]\n          ",attrs:{id:"hint-track"}},[n("HintTrack"),t._v(" "),n("BottonSeeMoreCase")],1)]),t._v(" "),n("HeaderTablePerson")],1),t._v(" "),n("HideMoreCase"),t._v(" "),n("TableJudge",{staticClass:"z-20 h-full overflow-y-auto"})],1)])}),[],!1,null,"275f68c6",null);e.default=component.exports;installComponents(component,{TableJudge:n(431).default})},489:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAYAAADABlfOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACeSURBVHgBrZMLDYAwDERPAhIqAQlIwAE4AAfDAThAAhKQgAQkIAFK1hGy8OlgL7lk6WdZcx1gSRAHcoeUtZwDPy6ccXpg7QcCSaS/8RMdq8c3Bum/ZGIZhGGk7xaCHaOAjlzq6a0wVRaS9kJHiWfjSPI1AmlY401uwoXTWnZXWy9mJP4Zt39uzAr/9vmAYH9ciUBj3shYK+wKRYW0hRsrqh3kdj9eqgAAAABJRU5ErkJggg=="},490:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAXCAYAAAB50g0VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADJSURBVHgB1dVRDYMwFIXhI2ESroRJmIQ5QMIkYKVOkICESUDCxrKeBNouK6WXW/7kvFCSfgkPACeq97Mu6fg8ePlZIn863OLACtkHBhe+4GCH/ItjDscjs3HM4TjkZhxz0EcW49gAPWSIG1DQZd6I+sgQN/q7iqqNrIpjKWSH7T2ggGN7kZ0mDjuRIe4JBRwTf0EuMoUTKCfIQ5rgmCBG3hbndxjimGCNnOZd/SZrHBPEyGZwTBB/7mZwTLBGNoVjgu9Pf0CDOLXetTaaKY0ic7gAAAAASUVORK5CYII="},491:function(t,e,n){"use strict";n(469)},492:function(t,e,n){var r=n(57)((function(i){return i[1]}));r.push([t.i,"html{scroll-behavior:smooth}.box-shadow-style{box-shadow:0 16px 5px 1px rgba(0,0,0,.44);-webkit-box-shadow:0 16px 5px 1px rgba(0,0,0,.44);-moz-box-shadow:0 16px 5px 1px rgba(0,0,0,.44)}",""]),r.locals={},t.exports=r},501:function(t,e,n){"use strict";n.r(e);var r={methods:{ScrollToTimeLine:function(){document.querySelector("#timeline").scrollIntoView({behavior:"smooth"})},ScrollToSummary:function(){document.querySelector("#summary").scrollIntoView({behavior:"smooth"})}}},l=(n(491),n(42)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"container"}},[r("elect-navbar",{staticClass:"fixed lg:absolute z-[99] w-full",attrs:{"title-text":"Constitutional Court",dark:"false"}},[r("div",{staticClass:"flex items-center space-x-5 text-white B_06"},[r("div",{staticClass:"cursor-pointer",on:{click:t.ScrollToTimeLine}},[t._v("Timeline")]),t._v(" "),r("div",{staticClass:"cursor-pointer",on:{click:t.ScrollToSummary}},[t._v("Summary")]),t._v(" "),r("NuxtLink",{attrs:{to:"/about"}},[t._v(" About ")])],1)]),t._v(" "),r("div",{staticClass:"relative",attrs:{id:"wrapper"}},[r("Intro"),t._v(" "),r("Timeline"),t._v(" "),r("div",{staticClass:"\n        absolute\n        w-1/2\n        h-[98%]\n        border-r\n        lg:border-r-2\n        border-dashed border-r-black\n        z-30\n        inset-0\n        pointer-events-none\n      ",staticStyle:{top:"50.6%",transform:"translateY(-50%)"}},[r("img",{staticClass:"\n          absolute\n          bottom-[-10px]\n          md:bottom-[-30px]\n          right-[0]\n          translate-x-[50%]\n        ",attrs:{src:"mobile"===t.$mq?n(489):n(490)}})])],1),t._v(" "),r("TablePerson"),t._v(" "),r("Summary"),t._v(" "),r("elect-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Intro:n(473).default,Timeline:n(498).default,TablePerson:n(481).default,Summary:n(499).default})}}]);