(window.webpackJsonp=window.webpackJsonp||[]).push([[9,10,11,12,13,14,15,30,36],{349:function(t,n,e){t.exports=e.p+"img/ทักษิณ_ชินวัตร.679b314.svg"},350:function(t,n,e){t.exports=e.p+"img/สมัคร_สุนทรเวช.1f87bd4.svg"},351:function(t,n,e){t.exports=e.p+"img/สมชาย_วงศ์สวัสดิ์.3420710.svg"},352:function(t,n,e){t.exports=e.p+"img/ยิ่งลักษณ์_ชินวัตร.846bb0b.svg"},353:function(t,n,e){t.exports=e.p+"img/สุรยุทธ์_จุลานนท์.8e96afb.svg"},354:function(t,n,e){t.exports=e.p+"img/อภิสิทธิ์_เวชชาชีวะ.19e7162.svg"},355:function(t,n,e){t.exports=e.p+"img/ประยุทธ์_จันทร์โอชา.e07ba1c.svg"},357:function(t,n,e){"use strict";var r=e(4),o=e(75),c=e(20),l=e(12),m=e(8),_=e(5),d=e(362),f=e(166),v=e(363),x=e(364),h=e(74),w=e(365),C=[],y=C.sort,k=_((function(){C.sort(void 0)})),S=_((function(){C.sort(null)})),E=f("sort"),O=!_((function(){if(h)return h<70;if(!(v&&v>3)){if(x)return!0;if(w)return w<603;var code,t,n,e,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(e=0;e<47;e++)C.push({k:t+e,v:n})}for(C.sort((function(a,b){return b.v-a.v})),e=0;e<C.length;e++)t=C[e].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:k||!S||!E||!O},{sort:function(t){void 0!==t&&o(t);var n=c(this);if(O)return void 0===t?y.call(n):y.call(n,t);var e,r,_=[],f=l(n.length);for(r=0;r<f;r++)r in n&&_.push(n[r]);for(e=(_=d(_,function(t){return function(n,e){return void 0===e?-1:void 0===n?1:void 0!==t?+t(n,e)||0:m(n)>m(e)?1:-1}}(t))).length,r=0;r<e;)n[r]=_[r++];for(;r<f;)delete n[r++];return n}})},358:function(t,n,e){"use strict";e.r(n),n.default=function(t){return[{name:"ทักษิณ ชินวัตร",list_case:[t.case_1,t.case_2,t.case_3,t.case_4,"","","",""]},{name:"สุรยุทธ์ จุลานนท์",list_case:[t.case_5,t.case_6,"","","","","",""]},{name:"สมัคร สุนทรเวช",list_case:[t.case_7,"","","","","","",""]},{name:"สมชาย วงศ์สวัสดิ์",list_case:[t.case_8,"","","","","","",""]},{name:"อภิสิทธิ์ เวชชาชีวะ",list_case:[t.case_9,t.case_10,"","","","","",""]},{name:"ยิ่งลักษณ์ ชินวัตร",list_case:[t.case_11,t.case_12,t.case_13,t.case_14,"","","",""]},{name:"ประยุทธ์ จันทร์โอชา",list_case:[t.case_15,t.case_16,t.case_17,t.case_18,t.case_19,t.case_20,t.case_21,t.case_22]}]}},359:function(t,n,e){"use strict";e.r(n);var r={props:{person:{type:Object,required:!1,default:{}},case_list_formated:{type:Array,required:!1,default:[]}},data:function(){return{era_img:""}},methods:{ReturnEraImage:function(t){return"ทักษิณ ชินวัตร"===t?e(349):"สุรยุทธ์ จุลานนท์"===t?e(353):"สมัคร สุนทรเวช"===t?e(350):"สมชาย วงศ์สวัสดิ์"===t?e(351):"อภิสิทธิ์ เวชชาชีวะ"===t?e(354):"ยิ่งลักษณ์ ชินวัตร"===t?e(352):"ประยุทธ์ จันทร์โอชา"===t?e(355):void 0},SumAllInCaseList:function(t){return t.reduce((function(a,b){return a+b}),0)}}},o=e(42),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mt-2 bg-white",attrs:{id:"popover-wrapper"}},[e("p",{staticClass:"font-bold B_05",attrs:{id:"name"}},[t._v("\n    "+t._s(t.person.name_surname_person)+"\n  ")]),t._v(" "),e("p",{staticClass:"B_05",attrs:{id:"position"}},[t._v("ที่มา "+t._s(t.person.position_person))]),t._v(" "),e("div",{staticClass:"grid grid-cols-2 mt-2",attrs:{id:"person-case-wrapper"}},t._l(t.case_list_formated,(function(n){return t.SumAllInCaseList(n.list_case)>0?e("div",{key:n.name,staticClass:"flex my-[2px]"},[e("img",{staticClass:"h-[20px]",attrs:{src:t.ReturnEraImage(n.name)}}),t._v(" "),e("div",{staticClass:"grid grid-cols-4"},t._l(n.list_case,(function(t,n){return e("div",{key:n,staticClass:"m-[1px]"},[e("div",t?{staticClass:"\n              w-[8px]\n              h-[8px]\n              md:w-[11px] md:h-[11px]\n              rounded-full\n              border border-black\n            ",class:1===t?"bg-positiveGreen":"bg-negativeRed"}:{staticClass:"\n              w-[8px]\n              h-[8px]\n              md:w-[11px] md:h-[11px]\n              rounded-full\n              border border-absentGray\n              bg-lightGrey\n            "})])})),0)]):t._e()})),0)])}),[],!1,null,"2d91bede",null);n.default=component.exports},360:function(t,n,e){var map={"./นางเสาวนีย์_อัศวโรจน์.png":368,"./นายกระมล_ทองธรรมชาติ.png":369,"./นายกิติศักดิ์_กิติคุณไพโรจน์.png":370,"./นายจรัญ_ภักดีธนากุล.png":371,"./นายจรัญ_หัตถกรรม.png":372,"./นายจรูญ_อินทจาร.png":373,"./นายจิรนิติ_หะวานนท์.png":374,"./นายจิระ_บุญพจสุนทร.png":375,"./นายจุมพล_ณ_สงขลา.png":376,"./นายชัช_ชลวร.png":377,"./นายทวีเกียรติ_มีนะกนิษฐ.png":378,"./นายธานิศ_เกศวพิทักษ์.png":379,"./นายนครินทร์_เมฆไตรรัตน์.png":380,"./นายนพดล_เฮงเจริญ.png":381,"./นายนภดล_เทพพิทักษ์.png":382,"./นายนุรักษ์_มาประณีต.png":383,"./นายบรรจงศักดิ์_วงศ์ปราชญ์.png":384,"./นายบุญส่ง_กุลบุปผา.png":385,"./นายประเสริฐ_นาสกุล.png":386,"./นายปรีชา_เฉลิมวณิชย์.png":387,"./นายปัญญา_ถนอมรอด.png":388,"./นายปัญญา_อุดชาชน.png":389,"./นายผัน_จันทรปาน.png":390,"./นายมงคล_สระฏัน.png":391,"./นายมานิต_วิทยาเต็ม.png":392,"./นายวรวิทย์_กังศศิเทียม.png":393,"./นายวสันต์_สร้อยพิสุทธิ์.png":394,"./นายวิชัย_ชื่นชมพูนุท.png":395,"./นายวิรุฬห์_แสงเทียน.png":396,"./นายศักดิ์_เตชาชาญ.png":397,"./นายสมชาย_พงษธา.png":398,"./นายสุจิต_บุญบงการ.png":399,"./นายสุจินดา_ยงสุนทร.png":400,"./นายสุธี_สุทธิสมบูรณ์.png":401,"./นายสุพจน์_ไข่มุกด์.png":402,"./นายสุวิทย์_ธีรพงษ์.png":403,"./นายอนันต์_เกตุวงศ์.png":404,"./นายอภัย_จันทนจุลกะ.png":405,"./นายอมร_รักษาสัตย์.png":406,"./นายอักขราทร_จุฬารัตน.png":407,"./นายอิสสระ_นิติทัณฑ์ประภาศ.png":408,"./นายอุดม_สิทธิวิรัชธรรม.png":409,"./นายอุดมศักดิ์_นิติมนตรี.png":410,"./นายอุระ_หวังอ้อมกลาง.png":411,"./นายเฉลิมพล_เอกอุรุ.png":412,"./พลตำรวจเอกสุวรรณ_สุวรรณเวโช.png":413,"./พลโท_จุล_อติเรก.png":414,"./หม่อมหลวงไกรฤกษ์_เกษมสันต์.png":415};function r(t){var n=o(t);return e(n)}function o(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=360},361:function(t,n,e){e(416)},362:function(t,n){var e=Math.floor,r=function(t,n){var l=t.length,m=e(l/2);return l<8?o(t,n):c(r(t.slice(0,m),n),r(t.slice(m),n),n)},o=function(t,n){for(var element,e,r=t.length,i=1;i<r;){for(e=i,element=t[i];e&&n(t[e-1],element)>0;)t[e]=t[--e];e!==i++&&(t[e]=element)}return t},c=function(t,n,e){for(var r=t.length,o=n.length,c=0,l=0,m=[];c<r||l<o;)c<r&&l<o?m.push(e(t[c],n[l])<=0?t[c++]:n[l++]):m.push(c<r?t[c++]:n[l++]);return m};t.exports=r},363:function(t,n,e){var r=e(56).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},364:function(t,n,e){var r=e(56);t.exports=/MSIE|Trident/.test(r)},365:function(t,n,e){var r=e(56).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},368:function(t,n,e){t.exports=e.p+"img/นางเสาวนีย์_อัศวโรจน์.79cb2e5.png"},369:function(t,n,e){t.exports=e.p+"img/นายกระมล_ทองธรรมชาติ.3c2bb25.png"},370:function(t,n,e){t.exports=e.p+"img/นายกิติศักดิ์_กิติคุณไพโรจน์.2dfd6b7.png"},371:function(t,n,e){t.exports=e.p+"img/นายจรัญ_ภักดีธนากุล.671d315.png"},372:function(t,n,e){t.exports=e.p+"img/นายจรัญ_หัตถกรรม.4e647f5.png"},373:function(t,n,e){t.exports=e.p+"img/นายจรูญ_อินทจาร.744bb69.png"},374:function(t,n,e){t.exports=e.p+"img/นายจิรนิติ_หะวานนท์.d34a7b5.png"},375:function(t,n,e){t.exports=e.p+"img/นายจิระ_บุญพจสุนทร.f1ae858.png"},376:function(t,n,e){t.exports=e.p+"img/นายจุมพล_ณ_สงขลา.05f1426.png"},377:function(t,n,e){t.exports=e.p+"img/นายชัช_ชลวร.01114c5.png"},378:function(t,n,e){t.exports=e.p+"img/นายทวีเกียรติ_มีนะกนิษฐ.3ba9188.png"},379:function(t,n,e){t.exports=e.p+"img/นายธานิศ_เกศวพิทักษ์.c2c309a.png"},380:function(t,n,e){t.exports=e.p+"img/นายนครินทร์_เมฆไตรรัตน์.dd78955.png"},381:function(t,n,e){t.exports=e.p+"img/นายนพดล_เฮงเจริญ.26ce203.png"},382:function(t,n,e){t.exports=e.p+"img/นายนภดล_เทพพิทักษ์.8868d38.png"},383:function(t,n,e){t.exports=e.p+"img/นายนุรักษ์_มาประณีต.5d8ca98.png"},384:function(t,n,e){t.exports=e.p+"img/นายบรรจงศักดิ์_วงศ์ปราชญ์.4fda33f.png"},385:function(t,n,e){t.exports=e.p+"img/นายบุญส่ง_กุลบุปผา.68276fc.png"},386:function(t,n,e){t.exports=e.p+"img/นายประเสริฐ_นาสกุล.d5451f0.png"},387:function(t,n,e){t.exports=e.p+"img/นายปรีชา_เฉลิมวณิชย์.08bb367.png"},388:function(t,n,e){t.exports=e.p+"img/นายปัญญา_ถนอมรอด.84106d7.png"},389:function(t,n,e){t.exports=e.p+"img/นายปัญญา_อุดชาชน.01a4756.png"},390:function(t,n,e){t.exports=e.p+"img/นายผัน_จันทรปาน.352e005.png"},391:function(t,n,e){t.exports=e.p+"img/นายมงคล_สระฏัน.4eb6ebc.png"},392:function(t,n,e){t.exports=e.p+"img/นายมานิต_วิทยาเต็ม.fce732c.png"},393:function(t,n,e){t.exports=e.p+"img/นายวรวิทย์_กังศศิเทียม.31b0b66.png"},394:function(t,n,e){t.exports=e.p+"img/นายวสันต์_สร้อยพิสุทธิ์.bf57e57.png"},395:function(t,n,e){t.exports=e.p+"img/นายวิชัย_ชื่นชมพูนุท.15a821f.png"},396:function(t,n,e){t.exports=e.p+"img/นายวิรุฬห์_แสงเทียน.1dfae71.png"},397:function(t,n,e){t.exports=e.p+"img/นายศักดิ์_เตชาชาญ.87ede86.png"},398:function(t,n,e){t.exports=e.p+"img/นายสมชาย_พงษธา.1089a6e.png"},399:function(t,n,e){t.exports=e.p+"img/นายสุจิต_บุญบงการ.fc83d28.png"},400:function(t,n,e){t.exports=e.p+"img/นายสุจินดา_ยงสุนทร.7838932.png"},401:function(t,n,e){t.exports=e.p+"img/นายสุธี_สุทธิสมบูรณ์.797479f.png"},402:function(t,n,e){t.exports=e.p+"img/นายสุพจน์_ไข่มุกด์.bc57723.png"},403:function(t,n,e){t.exports=e.p+"img/นายสุวิทย์_ธีรพงษ์.f67f912.png"},404:function(t,n,e){t.exports=e.p+"img/นายอนันต์_เกตุวงศ์.bb4fbb1.png"},405:function(t,n,e){t.exports=e.p+"img/นายอภัย_จันทนจุลกะ.b548d85.png"},406:function(t,n,e){t.exports=e.p+"img/นายอมร_รักษาสัตย์.19e833f.png"},407:function(t,n,e){t.exports=e.p+"img/นายอักขราทร_จุฬารัตน.fd59fac.png"},408:function(t,n,e){t.exports=e.p+"img/นายอิสสระ_นิติทัณฑ์ประภาศ.ff08d61.png"},409:function(t,n,e){t.exports=e.p+"img/นายอุดม_สิทธิวิรัชธรรม.5b89acc.png"},410:function(t,n,e){t.exports=e.p+"img/นายอุดมศักดิ์_นิติมนตรี.59a8020.png"},411:function(t,n,e){t.exports=e.p+"img/นายอุระ_หวังอ้อมกลาง.a920cac.png"},412:function(t,n,e){t.exports=e.p+"img/นายเฉลิมพล_เอกอุรุ.3816f75.png"},413:function(t,n,e){t.exports=e.p+"img/พลตำรวจเอกสุวรรณ_สุวรรณเวโช.197e88a.png"},414:function(t,n,e){t.exports=e.p+"img/พลโท_จุล_อติเรก.428488d.png"},415:function(t,n,e){t.exports=e.p+"img/หม่อมหลวงไกรฤกษ์_เกษมสันต์.a8ff2b6.png"},416:function(t,n,e){"use strict";var r=e(4),o=e(17),c=e(111),l=e(8),m=e(112),_=e(231),d=e(3),f=e(23),v=d("replace"),x=RegExp.prototype,h=Math.max,w=function(t,n,e){return e>t.length?-1:""===n?e:t.indexOf(n,e)};r({target:"String",proto:!0},{replaceAll:function(t,n){var e,r,d,C,y,k,S,E,O=o(this),B=0,$=0,j="";if(null!=t){if((e=c(t))&&!~l(o("flags"in x?t.flags:m.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(r=t[v]))return r.call(t,O,n);if(f&&e)return l(O).replace(t,n)}for(d=l(O),C=l(t),(y="function"==typeof n)||(n=l(n)),k=C.length,S=h(1,k),B=w(d,C,0);-1!==B;)E=y?l(n(C,B,d)):_(C,d,B,[],void 0,n),j+=d.slice($,B)+E,$=B+k,B=w(d,C,B+S);return $<d.length&&(j+=d.slice($)),j}})},418:function(t,n,e){t.exports=e.p+"img/summary_01.95f461c.png"},434:function(t,n,e){var content=e(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(59).default)("45237332",content,!0,{sourceMap:!1})},435:function(t,n,e){t.exports=e.p+"img/summary_02.4dabc5c.png"},436:function(t,n,e){t.exports=e.p+"img/summary_03.c011674.png"},445:function(t,n,e){"use strict";e.r(n);e(361),e(45),e(43),e(44),e(357);var r=e(359),o=e(358),c=e(417),l={components:{PopOver:r.default},data:function(){return{data:[{name:"นายกระมล ทองธรรมชาติ"},{name:"นายมานิต วิทยาเต็ม"},{name:"นายสุธี สุทธิสมบูรณ์"},{name:"พลตำรวจเอกสุวรรณ สุวรรณเวโช"},{name:"นายผัน จันทรปาน"},{name:"นายศักดิ์ เตชาชาญ"}]}},methods:{ReplaceString:function(t){return t.replaceAll(" ","_")},FilterJudgeByName:function(t){return c.filter((function(p){return p.name_surname_person===t}))[0]},PersonCase:function(t){var n=Object(o.default)(this.FilterJudgeByName(t.name));return this.SortPersonCaseNumber(n)},SortPersonCaseNumber:function(t){return t.map((function(t){return{name:t.name,list_case:t.list_case.sort((function(a,b){return b-a}))}}))}}},m=e(42),component=Object(m.a)(l,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"w-10/12 mx-auto md:max-w-[390px]",attrs:{id:"summary-wrapper"}},[t._m(0),t._v(" "),r("div",{staticClass:"flex flex-wrap justify-center mt-7",attrs:{id:"group-img"}},t._l(t.data,(function(n,o){return r("div",{key:o,staticClass:"m-1 md:m-2"},[r("el-popover",{attrs:{placement:"bottom",width:"mobile"===t.$mq?150:227,trigger:"click"}},[r("PopOver",{attrs:{person:t.FilterJudgeByName(n.name),case_list_formated:t.PersonCase(n)}}),t._v(" "),r("img",{staticClass:"\n            w-[52px]\n            h-[52px]\n            md:w-[77px] md:h-[77px]\n            rounded-full\n            border border-black\n            mx-auto\n            cursor-pointer\n          ",attrs:{slot:"reference",src:e(360)("./"+t.ReplaceString(n.name)+".png")},slot:"reference"})],1)],1)})),0)])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"py-5 text-center border border-black B_04 bg-tableHead px-9",attrs:{id:"wrapper"}},[e("div",{staticClass:"font-bold"},[t._v("\n      1.กลุ่มตุลาการรัฐธรรมนูญ "),e("br"),t._v('"โปรฝั่งการเมืองสายทักษิณ ชินวัตร"\n    ')]),t._v(" "),e("div",[t._v("\n      เป็นกลุ่มที่ลงมติเป็นผลบวกกับฝั่งการเมือง สายทักษิณ ชินวัตร\n      ที่มีอำนาจในช่วงนั้น\n    ")])])}],!1,null,"692775dc",null);n.default=component.exports},446:function(t,n,e){"use strict";e.r(n);e(361),e(45),e(43),e(44),e(357);var r=e(359),o=e(358),c=e(417),l={components:{PopOver:r.default},data:function(){return{group_data:[{title:"2.1 ลงมติทั้งหมดเป็นผลบวกกับรัฐบาลสายอำนาจเก่า และทหาร ขณะมีอำนาจ",data:[{name:"นายปัญญา ถนอมรอด"},{name:"นายอักขราทร จุฬารัตน"},{name:"หม่อมหลวงไกรฤกษ์ เกษมสันต์"},{name:"นายสมชาย พงษธา"},{name:"นายกิติศักดิ์ กิติคุณไพโรจน์"},{name:"นายธานิศ เกศวพิทักษ์"},{name:"นายจรัญ หัตถกรรม"},{name:"นายวิชัย ชื่นชมพูนุท"},{name:"นายวรวิทย์ กังศศิเทียม"},{name:"นายนครินทร์ เมฆไตรรัตน์"},{name:"นายปัญญา อุดชาชน"},{name:"นายอุดม สิทธิวิรัชธรรม"},{name:"นายวิรุฬห์ แสงเทียน"},{name:"นายจิรนิติ หะวานนท์"},{name:"นายนภดล เทพพิทักษ์"},{name:"นายบรรจงศักดิ์ วงศ์ปราชญ์"}]},{title:"2.2 ลงมติทั้งหมดเป็นผลลบกับรัฐบาลสายทักษิณ ชินวัตร ขณะมีอำนาจ",data:[{name:"นายวสันต์ สร้อยพิสุทธิ์"}]},{title:"2.3 ลงมติทั้งหมดเป็นผลบวกกับรัฐบาลสายอำนาจเก่า และทหาร ขณะมีอำนาจ และลงมติทั้งหมดเป็นผลลบกับรัฐบาลสายทักษิณ ชินวัตร ขณะมีอำนาจ",data:[{name:"นายนุรักษ์ มาประณีต"},{name:"นายจรัญ ภักดีธนากุล"},{name:"นายสุพจน์ ไข่มุกด์"},{name:"นายจรูญ อินทจาร"}]}]}},methods:{ReplaceString:function(t){return t.replaceAll(" ","_")},FilterJudgeByName:function(t){return c.filter((function(p){return p.name_surname_person===t}))[0]},PersonCase:function(t){var n=Object(o.default)(this.FilterJudgeByName(t.name));return this.SortPersonCaseNumber(n)},SortPersonCaseNumber:function(t){return t.map((function(t){return{name:t.name,list_case:t.list_case.sort((function(a,b){return b-a}))}}))}}},m=e(42),component=Object(m.a)(l,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"w-10/12 mx-auto md:max-w-[390px] mt-24",attrs:{id:"summaey-wrapper"}},[t._m(0),t._v(" "),r("div",{attrs:{id:"group-data"}},t._l(t.group_data,(function(n,o){return r("div",{key:o},[r("div",{staticClass:"mt-6 font-bold text-center B_04"},[t._v(t._s(n.title))]),t._v(" "),r("div",{staticClass:"flex flex-wrap justify-center mt-7"},t._l(n.data,(function(n,o){return r("div",{key:o,staticClass:"m-1 md:m-2"},[r("el-popover",{attrs:{placement:"bottom",width:"mobile"===t.$mq?150:227,trigger:"click"}},[r("PopOver",{attrs:{person:t.FilterJudgeByName(n.name),case_list_formated:t.PersonCase(n)}}),t._v(" "),r("img",{staticClass:"\n                w-[52px]\n                h-[52px]\n                md:w-[77px] md:h-[77px]\n                rounded-full\n                border border-black\n                mx-auto\n                cursor-pointer\n              ",attrs:{slot:"reference",src:e(360)("./"+t.ReplaceString(n.name)+".png")},slot:"reference"})],1)],1)})),0)])})),0)])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"px-6 py-5 text-center border border-black B_04 bg-tableHead",attrs:{id:"wrapper"}},[e("div",{staticClass:"font-bold"},[t._v("\n      2. กลุ่มตุลาการรัฐธรรมนูญ"),e("br"),t._v('\n      "โปรฝั่งการเมืองสายอำนาจเก่า และทหาร"\n    ')]),t._v(" "),e("div",[t._v("\n      ลงมติเป็นผลบวกฝั่งการเมือง สายอำนาจเก่า และทหาร ที่มีอำนาจในช่วงนั้น\n      โดยสามารถแบ่งได้เป็น 3 ประเภทย่อย\n    ")])])}],!1,null,"6a407671",null);n.default=component.exports},447:function(t,n,e){"use strict";e.r(n);var r=e(42),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{attrs:{id:"summary-01-wrapper"}},[r("img",{staticClass:"mx-auto mt-6 md:mt-16 mb-7 w-[175px] md:w-[292px]",attrs:{src:e(418)}}),t._v(" "),t._m(0)])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"w-10/12 mx-auto lg:max-w-[648px] B_04",attrs:{id:"content"}},[e("div",{staticClass:"font-bold"},[t._v("\n      1. ศาลรัฐธรรมนูญถูกจัดตั้งขึ้นครั้งแรกตามรัฐธรรมนูญ"),e("br"),t._v("แห่งราชอาณาจักรไทย\n      พุทธศักราช 2540\n    ")]),t._v(" "),e("div",{staticClass:"mt-[10px]"},[t._v("\n      ศาลรัฐธรรมนูญชุดนี้ถูกมองว่าโอนอ่อนให้กับฝ่ายการเมืองที่มีอำนาจในเวลานั้นมากเกินไป\n      ซึ่งจะเห็นได้จากผลการวินิจฉัยที่ออกมาเป็นผลบวกกับฝั่งการเมืองสายทักษิณ\n      ชินวัตร อย่างเช่น\n    ")]),t._v(" "),e("div",{staticClass:"mt-7"},[e("div",{attrs:{id:"list-dot"}}),t._v("\n      วินิจฉัยให้ทักษิณ ชินวัตร รอดจากการหลุดตำแหน่ง 2 ครั้ง\n    ")]),t._v(" "),e("div",[e("div",{attrs:{id:"list-dot"}}),t._v("\n      วินิจฉัยให้กฎหมายที่ออกในสมัยรัฐบาลทักษิณ ชินวัตร ไม่ถูกขัดขวาง\n    ")])])}],!1,null,null,null);n.default=component.exports},448:function(t,n,e){"use strict";e.r(n);var r=e(42),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{attrs:{id:"summary-02-wrapper"}},[r("img",{staticClass:"mx-auto mt-6 md:mt-16 mb-7 w-[175px] md:w-[292px]",attrs:{src:e(435)}}),t._v(" "),t._m(0)])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"w-10/12 mx-auto lg:max-w-[648px] B_04",attrs:{id:"content"}},[e("div",{staticClass:"font-bold"},[t._v("\n      2. ในหลวงรัชกาลที่ 9 มีพระราชดำรัสเกี่ยวกับหน้าที่ของศาล"),e("br"),t._v("\n      เมื่อวันที่ 25 เมษายน พ.ศ. 2549\n    ")]),t._v(" "),e("div",{staticClass:"mt-[10px]"},[t._v("\n      หลังจากนั้น\n      ท่าทีของศาลรัฐธรรมนูญเริ่มเปลี่ยนแปลงท่าทีต่อฝั่งการเมืองสายทักษิณ\n      ชินวัตร\n      เริ่มตั้งแต่การวินิจฉัยให้การเลือกตั้งที่พรรคไทยรักไทยกำลังได้เปรียบ\n      กลายเป็นโมฆะ\n      รวมไปถึงการทำงานคณะกรรมการตุลาการรัฐธรรมนูญที่มาจากการแต่งตั้งตามรัฐธรรมนูญแห่งราชอาณาจักรไทย\n      (ฉบับชั่วคราว) พุทธศักราช 2549 ที่\n    ")]),t._v(" "),e("div",{staticClass:"mt-7"},[e("div",{attrs:{id:"list-dot"}}),t._v("\n      วินิจฉัยให้ยุบพรรคไทยรักไทย แต่วินิจฉัยไม่ยุบพรรคประชาธิปัตย์\n    ")])])}],!1,null,null,null);n.default=component.exports},449:function(t,n,e){"use strict";e.r(n);var r=e(42),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{attrs:{id:"summary-03-wrapper"}},[r("img",{staticClass:"mx-auto mt-6 md:mt-16 mb-7 w-[175px] md:w-[292px]",attrs:{src:e(436)}}),t._v(" "),t._m(0)])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"w-10/12 mx-auto lg:max-w-[648px] B_04",attrs:{id:"content"}},[e("div",{staticClass:"font-bold"},[t._v("\n      3. การกลับมาของศาลรัฐธรรมนูญตามรัฐธรรมนูญแห่งราชอาณาจักรไทย พุทธศักราช\n      2550\n    ")]),t._v(" "),e("div",{staticClass:"mt-[10px]"},[t._v("\n      ศาลรัฐธรรมนูญชุดนี้มีแนวโน้มการวินิจฉัยที่สร้างผลบวกกับฝั่งการเมืองสายอำนาจเก่า\n      และทหาร ที่มีอำนาจในเวลานั้น เช่น วินิจฉัยให้พรรคประชาธิปัตย์\n      รอดจากการถูกยุบพรรค 2 ครั้ง และสร้างผลลบกับฝั่งการเมืองสายทักษิณ ชินวัตร\n      ที่มีอำนาจในช่วงนั้น อย่างเช่น\n    ")]),t._v(" "),e("div",{staticClass:"mt-7"},[e("div",{attrs:{id:"list-dot"}}),t._v("\n      วินิจฉัยยุบพรรคพลังประชาชน + สมชาย วงศ์สวัสดิ์\n      หลุดจากตำแหน่งนายกรัฐมนตรี\n    ")]),t._v(" "),e("div",[e("div",{attrs:{id:"list-dot"}}),t._v("\n      วินิจฉัยให้สมัคร สุนทรเวช และยิ่งลักษณ์ ชินวัตร\n      หลุดจากตำแหน่งนายกรัฐมนตรี\n    ")]),t._v(" "),e("div",[e("div",{attrs:{id:"list-dot"}}),t._v("\n      วินิจฉัยให้กฎหมายที่จะออกในสมัยรัฐบาลยิ่งลักษณ์ ชินวัตร ถูกขัดขวาง\n    ")]),t._v(" "),e("div",[e("div",{attrs:{id:"list-dot"}}),t._v("\n      วินิจฉัยให้การเลือกตั้งที่พรรคเพื่อไทยกำลังได้เปรียบ กลายเป็นโมฆะ\n    ")])])}],!1,null,null,null);n.default=component.exports},450:function(t,n,e){"use strict";e.r(n);var r=e(42),component=Object(r.a)({},(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{attrs:{id:"summary-04-wrapper"}},[r("img",{staticClass:"mx-auto mt-6 md:mt-16 mb-7 w-[175px] md:w-[292px]",attrs:{src:e(418)}}),t._v(" "),t._m(0)])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"w-10/12 mx-auto lg:max-w-[648px] B_04",attrs:{id:"content"}},[e("div",{staticClass:"font-bold"},[t._v("\n      4. การทำรัฐประหารของคณะรักษาความสงบแห่งชาติ (คสช.)\n    ")]),t._v(" "),e("div",{staticClass:"mt-[10px]"},[t._v("\n      ด้วยการต่ออายุตุลาการรัฐธรรมนูญบางส่วน\n      และการคัดเลือกตุลาการรัฐธรรมนูญหน้าใหม่ โดยอาศัยประกาศและคำสั่งของ คสช.\n      รวมถึงรัฐธรรมนูญแห่งราชอาณาจักรไทย พุทธศักราช 2560\n      ส่งผลให้แนวโน้มการวินิจฉัยของศาลรัฐธรรมนูญยังคงเดิม\n      ซึ่งสร้างผลบวกกับฝั่งการเมืองสายอำนาจเก่า และทหาร ที่มีอำนาจในเวลานั้น\n      เช่น\n    ")]),t._v(" "),e("div",{staticClass:"mt-7"},[e("div",{attrs:{id:"list-dot"}}),t._v("\n      วินิจฉัยยุบพรรคไทยรักษาชาติ และอนาคตใหม่\n    ")]),t._v(" "),e("div",[e("div",{attrs:{id:"list-dot"}}),t._v("\n      วินิจฉัยให้ประยุทธ์ จันทร์โอชา รอดจากการหลุดตำแหน่ง 2 ครั้ง\n    ")]),t._v(" "),e("div",[e("div",{attrs:{id:"list-dot"}}),t._v("\n      วินิจฉัยให้ธรรมนัส พรหมเผ่า รอดจากการหลุดตำแหน่ง\n    ")]),t._v(" "),e("div",[e("div",{attrs:{id:"list-dot"}}),t._v("\n      วินิจฉัยให้กฎหมายที่ออกในสมัยรัฐบาลประยุทธ์ จันทร์โอชา ไม่ถูกขัดขวาง\n    ")])])}],!1,null,null,null);n.default=component.exports},461:function(t,n,e){"use strict";e(434)},462:function(t,n,e){var r=e(58)((function(i){return i[1]}));r.push([t.i,"#list-dot{min-width:4px;height:4px;border-radius:4px;background:#000;display:inline-block;margin:0 8px;position:relative;top:-2.5px;transform:translateY(-50%)}@media screen and (max-width:767px){#list-dot{top:-1.5px;min-width:3px;height:3px;margin-right:5px}}",""]),r.locals={},t.exports=r},478:function(t,n,e){"use strict";e.r(n);var r={},o=(e(461),e(42)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container flex flex-col items-center mx-auto",attrs:{id:"summary-wrapper"}},[e("div",{staticClass:"w-11/12 lg:max-w-[745px] mx-auto mt-36 B_03 text-center"},[t._v("\n    จากรายละเอียดของงานแสดงให้เห็นว่า\n    มีการวินิจฉัยของศาลรัฐธรรมนูญหลายครั้งที่สร้างผลลัพธ์สำคัญทางการเมือง\n    และเหตุการณ์สำคัญหลายครั้งเชื่อมโยงกับการทำงานของศาลรัฐธรรมนูญในเรื่องนี้\n    โดยในรอบระยะเวลา 10 กว่าปีที่ผ่านมา มีตัวอย่างที่ชัดเจนอยู่หลายประการ เช่น\n    ...\n  ")]),t._v(" "),e("Summary01"),t._v(" "),e("Summary02"),t._v(" "),e("Summary03"),t._v(" "),e("Summary04"),t._v(" "),e("div",{staticClass:"\n      B_03\n      w-10/12\n      mx-auto\n      lg:max-w-[673px]\n      text-center\n      md:py-10\n      py-3\n      md:px-14\n      px-6\n      border border-black\n      my-[60px]\n    "},[t._v("\n    เมื่อสังเกตการลงมติของตุลาการรัฐธรรมนูญที่เกี่ยวข้องกับการวินิจฉัยทั้งหมดของตนเอง\n    ในจำนวนตั้งแต่ 2 ครั้งขึ้นไป\n    ก็แสดงให้เห็นถึงแนวโน้มของการลงมติที่น่าสนใจอยู่เหมือนกัน\n    โดยสามารถแบ่งได้เป็น 2 กลุ่มหลัก ๆ ดังนี้\n  ")]),t._v(" "),e("div",{staticClass:"mb-7 B_05 text-darkGrey"},[t._v("(คลิกที่รูปเพื่อดูผลการลงมติ)")]),t._v(" "),e("SummaryGroup01"),t._v(" "),e("SummaryGroup02"),t._v(" "),e("div",{staticClass:"\n      w-10/12\n      mx-auto\n      lg:w-[673px]\n      border border-black\n      md:py-11\n      py-6\n      md:px-5\n      px-2\n      B_03\n      text-center\n      md:mt-36\n      mt-20\n    "},[t._v("\n    ทั้งหมดนี้ก็แสดงให้เห็นชัดเจนว่า\n    คำวินิจฉัยศาลรัฐธรรมนูญหลายครั้งสร้างผลทางการเมืองอย่างชัดเจน\n    และหลายครั้งตุลาการศาลรัฐธรรมนูญก็มีส่วนในการสร้างผลลัพธ์ทางการเมืองที่สร้างประโยชน์ให้ฝ่ายใดฝ่ายหนึ่งอย่างมีนัยสำคัญ\n    ซึ่งความเชื่อมโยงที่มาจากเหตุการณ์สำคัญทางเมือง\n    ก็ส่งผลต่อการทำงานของศาลรัฐธรรมนูญและตุลาการรัฐธรรมนูญด้วยเช่นกัน\n  ")])],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Summary01:e(447).default,Summary02:e(448).default,Summary03:e(449).default,Summary04:e(450).default,SummaryGroup01:e(445).default,SummaryGroup02:e(446).default})}}]);