(window.webpackJsonp=window.webpackJsonp||[]).push([[11,9,30,36],{355:function(n,t,e){n.exports=e.p+"img/ทักษิณ_ชินวัตร.679b314.svg"},356:function(n,t,e){n.exports=e.p+"img/สมัคร_สุนทรเวช.1f87bd4.svg"},357:function(n,t,e){n.exports=e.p+"img/สมชาย_วงศ์สวัสดิ์.3420710.svg"},358:function(n,t,e){n.exports=e.p+"img/ยิ่งลักษณ์_ชินวัตร.846bb0b.svg"},359:function(n,t,e){n.exports=e.p+"img/สุรยุทธ์_จุลานนท์.8e96afb.svg"},360:function(n,t,e){n.exports=e.p+"img/อภิสิทธิ์_เวชชาชีวะ.19e7162.svg"},361:function(n,t,e){n.exports=e.p+"img/ประยุทธ์_จันทร์โอชา.e07ba1c.svg"},363:function(n,t,e){"use strict";var r=e(4),o=e(75),c=e(21),_=e(12),f=e(8),m=e(5),l=e(366),d=e(167),x=e(367),v=e(368),h=e(74),C=e(369),w=[],y=w.sort,k=m((function(){w.sort(void 0)})),O=m((function(){w.sort(null)})),A=d("sort"),E=!m((function(){if(h)return h<70;if(!(x&&x>3)){if(v)return!0;if(C)return C<603;var code,n,t,e,r="";for(code=65;code<76;code++){switch(n=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(e=0;e<47;e++)w.push({k:n+e,v:t})}for(w.sort((function(a,b){return b.v-a.v})),e=0;e<w.length;e++)n=w[e].k.charAt(0),r.charAt(r.length-1)!==n&&(r+=n);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:k||!O||!A||!E},{sort:function(n){void 0!==n&&o(n);var t=c(this);if(E)return void 0===n?y.call(t):y.call(t,n);var e,r,m=[],d=_(t.length);for(r=0;r<d;r++)r in t&&m.push(t[r]);for(e=(m=l(m,function(n){return function(t,e){return void 0===e?-1:void 0===t?1:void 0!==n?+n(t,e)||0:f(t)>f(e)?1:-1}}(n))).length,r=0;r<e;)t[r]=m[r++];for(;r<d;)delete t[r++];return t}})},364:function(n,t,e){"use strict";e.r(t),t.default=function(n){return[{name:"ทักษิณ ชินวัตร",list_case:[n.case_1,n.case_2,n.case_3,n.case_4,"","","",""]},{name:"สุรยุทธ์ จุลานนท์",list_case:[n.case_5,n.case_6,"","","","","",""]},{name:"สมัคร สุนทรเวช",list_case:[n.case_7,"","","","","","",""]},{name:"สมชาย วงศ์สวัสดิ์",list_case:[n.case_8,"","","","","","",""]},{name:"อภิสิทธิ์ เวชชาชีวะ",list_case:[n.case_9,n.case_10,"","","","","",""]},{name:"ยิ่งลักษณ์ ชินวัตร",list_case:[n.case_11,n.case_12,n.case_13,n.case_14,"","","",""]},{name:"ประยุทธ์ จันทร์โอชา",list_case:[n.case_15,n.case_16,n.case_17,n.case_18,n.case_19,n.case_20,n.case_21,n.case_22]}]}},365:function(n,t,e){"use strict";e.r(t);var r={props:{person:{type:Object,required:!1,default:{}},case_list_formated:{type:Array,required:!1,default:[]}},data:function(){return{era_img:""}},methods:{ReturnEraImage:function(n){return"ทักษิณ ชินวัตร"===n?e(355):"สุรยุทธ์ จุลานนท์"===n?e(359):"สมัคร สุนทรเวช"===n?e(356):"สมชาย วงศ์สวัสดิ์"===n?e(357):"อภิสิทธิ์ เวชชาชีวะ"===n?e(360):"ยิ่งลักษณ์ ชินวัตร"===n?e(358):"ประยุทธ์ จันทร์โอชา"===n?e(361):void 0},SumAllInCaseList:function(n){return n.reduce((function(a,b){return a+b}),0)}}},o=e(42),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"mt-2 bg-white",attrs:{id:"popover-wrapper"}},[e("p",{staticClass:"font-bold B_05",attrs:{id:"name"}},[n._v("\n    "+n._s(n.person.name_surname_person)+"\n  ")]),n._v(" "),e("p",{staticClass:"B_05",attrs:{id:"position"}},[n._v("ที่มา "+n._s(n.person.position_person))]),n._v(" "),e("div",{staticClass:"grid grid-cols-2 mt-2",attrs:{id:"person-case-wrapper"}},n._l(n.case_list_formated,(function(t){return n.SumAllInCaseList(t.list_case)>0?e("div",{key:t.name,staticClass:"flex my-[2px]"},[e("img",{staticClass:"h-[20px]",attrs:{src:n.ReturnEraImage(t.name)}}),n._v(" "),e("div",{staticClass:"grid grid-cols-4"},n._l(t.list_case,(function(n,t){return e("div",{key:t,staticClass:"m-[1px]"},[e("div",n?{staticClass:"\n              w-[8px]\n              h-[8px]\n              md:w-[11px] md:h-[11px]\n              rounded-full\n              border border-black\n            ",class:1===n?"bg-positiveGreen":"bg-negativeRed"}:{staticClass:"\n              w-[8px]\n              h-[8px]\n              md:w-[11px] md:h-[11px]\n              rounded-full\n              border border-absentGray\n              bg-lightGrey\n            "})])})),0)]):n._e()})),0)])}),[],!1,null,"2d91bede",null);t.default=component.exports},366:function(n,t){var e=Math.floor,r=function(n,t){var _=n.length,f=e(_/2);return _<8?o(n,t):c(r(n.slice(0,f),t),r(n.slice(f),t),t)},o=function(n,t){for(var element,e,r=n.length,i=1;i<r;){for(e=i,element=n[i];e&&t(n[e-1],element)>0;)n[e]=n[--e];e!==i++&&(n[e]=element)}return n},c=function(n,t,e){for(var r=n.length,o=t.length,c=0,_=0,f=[];c<r||_<o;)c<r&&_<o?f.push(e(n[c],t[_])<=0?n[c++]:t[_++]):f.push(c<r?n[c++]:t[_++]);return f};n.exports=r},367:function(n,t,e){var r=e(56).match(/firefox\/(\d+)/i);n.exports=!!r&&+r[1]},368:function(n,t,e){var r=e(56);n.exports=/MSIE|Trident/.test(r)},369:function(n,t,e){var r=e(56).match(/AppleWebKit\/(\d+)\./);n.exports=!!r&&+r[1]},370:function(n,t,e){var map={"./นางเสาวนีย์_อัศวโรจน์.png":374,"./นายกระมล_ทองธรรมชาติ.png":375,"./นายกิติศักดิ์_กิติคุณไพโรจน์.png":376,"./นายจรัญ_ภักดีธนากุล.png":377,"./นายจรัญ_หัตถกรรม.png":378,"./นายจรูญ_อินทจาร.png":379,"./นายจิรนิติ_หะวานนท์.png":380,"./นายจิระ_บุญพจสุนทร.png":381,"./นายจุมพล_ณ_สงขลา.png":382,"./นายชัช_ชลวร.png":383,"./นายทวีเกียรติ_มีนะกนิษฐ.png":384,"./นายธานิศ_เกศวพิทักษ์.png":385,"./นายนครินทร์_เมฆไตรรัตน์.png":386,"./นายนพดล_เฮงเจริญ.png":387,"./นายนภดล_เทพพิทักษ์.png":388,"./นายนุรักษ์_มาประณีต.png":389,"./นายบรรจงศักดิ์_วงศ์ปราชญ์.png":390,"./นายบุญส่ง_กุลบุปผา.png":391,"./นายประเสริฐ_นาสกุล.png":392,"./นายปรีชา_เฉลิมวณิชย์.png":393,"./นายปัญญา_ถนอมรอด.png":394,"./นายปัญญา_อุดชาชน.png":395,"./นายผัน_จันทรปาน.png":396,"./นายมงคล_สระฏัน.png":397,"./นายมานิต_วิทยาเต็ม.png":398,"./นายวรวิทย์_กังศศิเทียม.png":399,"./นายวสันต์_สร้อยพิสุทธิ์.png":400,"./นายวิชัย_ชื่นชมพูนุท.png":401,"./นายวิรุฬห์_แสงเทียน.png":402,"./นายศักดิ์_เตชาชาญ.png":403,"./นายสมชาย_พงษธา.png":404,"./นายสุจิต_บุญบงการ.png":405,"./นายสุจินดา_ยงสุนทร.png":406,"./นายสุธี_สุทธิสมบูรณ์.png":407,"./นายสุพจน์_ไข่มุกด์.png":408,"./นายสุวิทย์_ธีรพงษ์.png":409,"./นายอนันต์_เกตุวงศ์.png":410,"./นายอภัย_จันทนจุลกะ.png":411,"./นายอมร_รักษาสัตย์.png":412,"./นายอักขราทร_จุฬารัตน.png":413,"./นายอิสสระ_นิติทัณฑ์ประภาศ.png":414,"./นายอุดม_สิทธิวิรัชธรรม.png":415,"./นายอุดมศักดิ์_นิติมนตรี.png":416,"./นายอุระ_หวังอ้อมกลาง.png":417,"./นายเฉลิมพล_เอกอุรุ.png":418,"./พลตำรวจเอกสุวรรณ_สุวรรณเวโช.png":419,"./พลโท_จุล_อติเรก.png":420,"./หม่อมหลวงไกรฤกษ์_เกษมสันต์.png":421};function r(n){var t=o(n);return e(t)}function o(n){if(!e.o(map,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return map[n]}r.keys=function(){return Object.keys(map)},r.resolve=o,n.exports=r,r.id=370},371:function(n,t,e){e(422)},374:function(n,t,e){n.exports=e.p+"img/นางเสาวนีย์_อัศวโรจน์.79cb2e5.png"},375:function(n,t,e){n.exports=e.p+"img/นายกระมล_ทองธรรมชาติ.3c2bb25.png"},376:function(n,t,e){n.exports=e.p+"img/นายกิติศักดิ์_กิติคุณไพโรจน์.2dfd6b7.png"},377:function(n,t,e){n.exports=e.p+"img/นายจรัญ_ภักดีธนากุล.671d315.png"},378:function(n,t,e){n.exports=e.p+"img/นายจรัญ_หัตถกรรม.4e647f5.png"},379:function(n,t,e){n.exports=e.p+"img/นายจรูญ_อินทจาร.744bb69.png"},380:function(n,t,e){n.exports=e.p+"img/นายจิรนิติ_หะวานนท์.d34a7b5.png"},381:function(n,t,e){n.exports=e.p+"img/นายจิระ_บุญพจสุนทร.f1ae858.png"},382:function(n,t,e){n.exports=e.p+"img/นายจุมพล_ณ_สงขลา.05f1426.png"},383:function(n,t,e){n.exports=e.p+"img/นายชัช_ชลวร.01114c5.png"},384:function(n,t,e){n.exports=e.p+"img/นายทวีเกียรติ_มีนะกนิษฐ.3ba9188.png"},385:function(n,t,e){n.exports=e.p+"img/นายธานิศ_เกศวพิทักษ์.c2c309a.png"},386:function(n,t,e){n.exports=e.p+"img/นายนครินทร์_เมฆไตรรัตน์.dd78955.png"},387:function(n,t,e){n.exports=e.p+"img/นายนพดล_เฮงเจริญ.26ce203.png"},388:function(n,t,e){n.exports=e.p+"img/นายนภดล_เทพพิทักษ์.8868d38.png"},389:function(n,t,e){n.exports=e.p+"img/นายนุรักษ์_มาประณีต.5d8ca98.png"},390:function(n,t,e){n.exports=e.p+"img/นายบรรจงศักดิ์_วงศ์ปราชญ์.4fda33f.png"},391:function(n,t,e){n.exports=e.p+"img/นายบุญส่ง_กุลบุปผา.68276fc.png"},392:function(n,t,e){n.exports=e.p+"img/นายประเสริฐ_นาสกุล.d5451f0.png"},393:function(n,t,e){n.exports=e.p+"img/นายปรีชา_เฉลิมวณิชย์.08bb367.png"},394:function(n,t,e){n.exports=e.p+"img/นายปัญญา_ถนอมรอด.84106d7.png"},395:function(n,t,e){n.exports=e.p+"img/นายปัญญา_อุดชาชน.01a4756.png"},396:function(n,t,e){n.exports=e.p+"img/นายผัน_จันทรปาน.352e005.png"},397:function(n,t,e){n.exports=e.p+"img/นายมงคล_สระฏัน.4eb6ebc.png"},398:function(n,t,e){n.exports=e.p+"img/นายมานิต_วิทยาเต็ม.fce732c.png"},399:function(n,t,e){n.exports=e.p+"img/นายวรวิทย์_กังศศิเทียม.31b0b66.png"},400:function(n,t,e){n.exports=e.p+"img/นายวสันต์_สร้อยพิสุทธิ์.bf57e57.png"},401:function(n,t,e){n.exports=e.p+"img/นายวิชัย_ชื่นชมพูนุท.15a821f.png"},402:function(n,t,e){n.exports=e.p+"img/นายวิรุฬห์_แสงเทียน.1dfae71.png"},403:function(n,t,e){n.exports=e.p+"img/นายศักดิ์_เตชาชาญ.87ede86.png"},404:function(n,t,e){n.exports=e.p+"img/นายสมชาย_พงษธา.1089a6e.png"},405:function(n,t,e){n.exports=e.p+"img/นายสุจิต_บุญบงการ.fc83d28.png"},406:function(n,t,e){n.exports=e.p+"img/นายสุจินดา_ยงสุนทร.7838932.png"},407:function(n,t,e){n.exports=e.p+"img/นายสุธี_สุทธิสมบูรณ์.797479f.png"},408:function(n,t,e){n.exports=e.p+"img/นายสุพจน์_ไข่มุกด์.bc57723.png"},409:function(n,t,e){n.exports=e.p+"img/นายสุวิทย์_ธีรพงษ์.f67f912.png"},410:function(n,t,e){n.exports=e.p+"img/นายอนันต์_เกตุวงศ์.bb4fbb1.png"},411:function(n,t,e){n.exports=e.p+"img/นายอภัย_จันทนจุลกะ.b548d85.png"},412:function(n,t,e){n.exports=e.p+"img/นายอมร_รักษาสัตย์.19e833f.png"},413:function(n,t,e){n.exports=e.p+"img/นายอักขราทร_จุฬารัตน.fd59fac.png"},414:function(n,t,e){n.exports=e.p+"img/นายอิสสระ_นิติทัณฑ์ประภาศ.ff08d61.png"},415:function(n,t,e){n.exports=e.p+"img/นายอุดม_สิทธิวิรัชธรรม.5b89acc.png"},416:function(n,t,e){n.exports=e.p+"img/นายอุดมศักดิ์_นิติมนตรี.59a8020.png"},417:function(n,t,e){n.exports=e.p+"img/นายอุระ_หวังอ้อมกลาง.a920cac.png"},418:function(n,t,e){n.exports=e.p+"img/นายเฉลิมพล_เอกอุรุ.3816f75.png"},419:function(n,t,e){n.exports=e.p+"img/พลตำรวจเอกสุวรรณ_สุวรรณเวโช.197e88a.png"},420:function(n,t,e){n.exports=e.p+"img/พลโท_จุล_อติเรก.428488d.png"},421:function(n,t,e){n.exports=e.p+"img/หม่อมหลวงไกรฤกษ์_เกษมสันต์.a8ff2b6.png"},422:function(n,t,e){"use strict";var r=e(4),o=e(18),c=e(111),_=e(8),f=e(112),m=e(232),l=e(3),d=e(24),x=l("replace"),v=RegExp.prototype,h=Math.max,C=function(n,t,e){return e>n.length?-1:""===t?e:n.indexOf(t,e)};r({target:"String",proto:!0},{replaceAll:function(n,t){var e,r,l,w,y,k,O,A,E=o(this),S=0,B=0,N="";if(null!=n){if((e=c(n))&&!~_(o("flags"in v?n.flags:f.call(n))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(r=n[x]))return r.call(n,E,t);if(d&&e)return _(E).replace(n,t)}for(l=_(E),w=_(n),(y="function"==typeof t)||(t=_(t)),k=w.length,O=h(1,k),S=C(l,w,0);-1!==S;)A=y?_(t(w,S,l)):m(w,l,S,[],void 0,t),N+=l.slice(B,S)+A,B=S+k,S=C(l,w,S+O);return B<l.length&&(N+=l.slice(B)),N}})},481:function(n,t,e){"use strict";e.r(t);e(371),e(46),e(43),e(44),e(363);var r=e(365),o=e(364),c=e(423),_={components:{PopOver:r.default},data:function(){return{group_data:[{title:"2.1 ลงมติทั้งหมดเป็นผลบวกกับรัฐบาลสายอำนาจเก่า และทหาร ขณะมีอำนาจ",data:[{name:"นายปัญญา ถนอมรอด"},{name:"นายอักขราทร จุฬารัตน"},{name:"หม่อมหลวงไกรฤกษ์ เกษมสันต์"},{name:"นายสมชาย พงษธา"},{name:"นายกิติศักดิ์ กิติคุณไพโรจน์"},{name:"นายธานิศ เกศวพิทักษ์"},{name:"นายจรัญ หัตถกรรม"},{name:"นายวิชัย ชื่นชมพูนุท"},{name:"นายวรวิทย์ กังศศิเทียม"},{name:"นายนครินทร์ เมฆไตรรัตน์"},{name:"นายปัญญา อุดชาชน"},{name:"นายอุดม สิทธิวิรัชธรรม"},{name:"นายวิรุฬห์ แสงเทียน"},{name:"นายจิรนิติ หะวานนท์"},{name:"นายนภดล เทพพิทักษ์"},{name:"นายบรรจงศักดิ์ วงศ์ปราชญ์"}]},{title:"2.2 ลงมติทั้งหมดเป็นผลลบกับรัฐบาลสายทักษิณ ชินวัตร ขณะมีอำนาจ",data:[{name:"นายวสันต์ สร้อยพิสุทธิ์"}]},{title:"2.3 ลงมติทั้งหมดเป็นผลบวกกับรัฐบาลสายอำนาจเก่า และทหาร ขณะมีอำนาจ และลงมติทั้งหมดเป็นผลลบกับรัฐบาลสายทักษิณ ชินวัตร ขณะมีอำนาจ",data:[{name:"นายนุรักษ์ มาประณีต"},{name:"นายจรัญ ภักดีธนากุล"},{name:"นายสุพจน์ ไข่มุกด์"},{name:"นายจรูญ อินทจาร"}]}]}},methods:{ReplaceString:function(n){return n.replaceAll(" ","_")},FilterJudgeByName:function(n){return c.filter((function(p){return p.name_surname_person===n}))[0]},PersonCase:function(n){var t=Object(o.default)(this.FilterJudgeByName(n.name));return this.SortPersonCaseNumber(t)},SortPersonCaseNumber:function(n){return n.map((function(n){return{name:n.name,list_case:n.list_case.sort((function(a,b){return b-a}))}}))}}},f=e(42),component=Object(f.a)(_,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"w-10/12 mx-auto md:max-w-[390px] mt-24",attrs:{id:"summaey-wrapper"}},[n._m(0),n._v(" "),r("div",{attrs:{id:"group-data"}},n._l(n.group_data,(function(t,o){return r("div",{key:o},[r("div",{staticClass:"mt-6 font-bold text-center B_04"},[n._v(n._s(t.title))]),n._v(" "),r("div",{staticClass:"flex flex-wrap justify-center mt-7"},n._l(t.data,(function(t,o){return r("div",{key:o,staticClass:"m-1 md:m-2"},[r("el-popover",{attrs:{placement:"bottom",width:"mobile"===n.$mq?150:227,trigger:"click"}},[r("PopOver",{attrs:{person:n.FilterJudgeByName(t.name),case_list_formated:n.PersonCase(t)}}),n._v(" "),r("img",{staticClass:"\n                w-[52px]\n                h-[52px]\n                md:w-[77px] md:h-[77px]\n                rounded-full\n                border border-black\n                mx-auto\n                cursor-pointer\n              ",attrs:{slot:"reference",src:e(370)("./"+n.ReplaceString(t.name)+".png")},slot:"reference"})],1)],1)})),0)])})),0)])}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"px-6 py-5 text-center border border-black B_04 bg-tableHead",attrs:{id:"wrapper"}},[e("div",{staticClass:"font-bold"},[n._v("\n      2. กลุ่มตุลาการรัฐธรรมนูญ"),e("br"),n._v('\n      "โปรฝั่งการเมืองสายอำนาจเก่า และทหาร"\n    ')]),n._v(" "),e("div",[n._v("\n      ลงมติเป็นผลบวกฝั่งการเมือง สายอำนาจเก่า และทหาร ที่มีอำนาจในช่วงนั้น\n      โดยสามารถแบ่งได้เป็น 3 ประเภทย่อย\n    ")])])}],!1,null,"6a407671",null);t.default=component.exports}}]);