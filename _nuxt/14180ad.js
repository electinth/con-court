(window.webpackJsonp=window.webpackJsonp||[]).push([[16,9,30,36],{355:function(n,e,t){n.exports=t.p+"img/ทักษิณ_ชินวัตร.679b314.svg"},356:function(n,e,t){n.exports=t.p+"img/สมัคร_สุนทรเวช.1f87bd4.svg"},357:function(n,e,t){n.exports=t.p+"img/สมชาย_วงศ์สวัสดิ์.3420710.svg"},358:function(n,e,t){n.exports=t.p+"img/ยิ่งลักษณ์_ชินวัตร.846bb0b.svg"},359:function(n,e,t){n.exports=t.p+"img/สุรยุทธ์_จุลานนท์.8e96afb.svg"},360:function(n,e,t){n.exports=t.p+"img/อภิสิทธิ์_เวชชาชีวะ.19e7162.svg"},361:function(n,e,t){n.exports=t.p+"img/ประยุทธ์_จันทร์โอชา.e07ba1c.svg"},363:function(n,e,t){"use strict";var r=t(4),o=t(75),c=t(21),f=t(12),_=t(8),l=t(5),d=t(366),m=t(167),x=t(367),v=t(368),h=t(74),w=t(369),y=[],C=y.sort,k=l((function(){y.sort(void 0)})),G=l((function(){y.sort(null)})),O=m("sort"),S=!l((function(){if(h)return h<70;if(!(x&&x>3)){if(v)return!0;if(w)return w<603;var code,n,e,t,r="";for(code=65;code<76;code++){switch(n=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(t=0;t<47;t++)y.push({k:n+t,v:e})}for(y.sort((function(a,b){return b.v-a.v})),t=0;t<y.length;t++)n=y[t].k.charAt(0),r.charAt(r.length-1)!==n&&(r+=n);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:k||!G||!O||!S},{sort:function(n){void 0!==n&&o(n);var e=c(this);if(S)return void 0===n?C.call(e):C.call(e,n);var t,r,l=[],m=f(e.length);for(r=0;r<m;r++)r in e&&l.push(e[r]);for(t=(l=d(l,function(n){return function(e,t){return void 0===t?-1:void 0===e?1:void 0!==n?+n(e,t)||0:_(e)>_(t)?1:-1}}(n))).length,r=0;r<t;)e[r]=l[r++];for(;r<m;)delete e[r++];return e}})},364:function(n,e,t){"use strict";t.r(e),e.default=function(n){return[{name:"ทักษิณ ชินวัตร",list_case:[n.case_1,n.case_2,n.case_3,n.case_4,"","","",""]},{name:"สุรยุทธ์ จุลานนท์",list_case:[n.case_5,n.case_6,"","","","","",""]},{name:"สมัคร สุนทรเวช",list_case:[n.case_7,"","","","","","",""]},{name:"สมชาย วงศ์สวัสดิ์",list_case:[n.case_8,"","","","","","",""]},{name:"อภิสิทธิ์ เวชชาชีวะ",list_case:[n.case_9,n.case_10,"","","","","",""]},{name:"ยิ่งลักษณ์ ชินวัตร",list_case:[n.case_11,n.case_12,n.case_13,n.case_14,"","","",""]},{name:"ประยุทธ์ จันทร์โอชา",list_case:[n.case_15,n.case_16,n.case_17,n.case_18,n.case_19,n.case_20,n.case_21,n.case_22]}]}},365:function(n,e,t){"use strict";t.r(e);var r={props:{person:{type:Object,required:!1,default:{}},case_list_formated:{type:Array,required:!1,default:[]}},data:function(){return{era_img:""}},methods:{ReturnEraImage:function(n){return"ทักษิณ ชินวัตร"===n?t(355):"สุรยุทธ์ จุลานนท์"===n?t(359):"สมัคร สุนทรเวช"===n?t(356):"สมชาย วงศ์สวัสดิ์"===n?t(357):"อภิสิทธิ์ เวชชาชีวะ"===n?t(360):"ยิ่งลักษณ์ ชินวัตร"===n?t(358):"ประยุทธ์ จันทร์โอชา"===n?t(361):void 0},SumAllInCaseList:function(n){return n.reduce((function(a,b){return a+b}),0)}}},o=t(42),component=Object(o.a)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"mt-2 bg-white",attrs:{id:"popover-wrapper"}},[t("p",{staticClass:"font-bold B_05",attrs:{id:"name"}},[n._v("\n    "+n._s(n.person.name_surname_person)+"\n  ")]),n._v(" "),t("p",{staticClass:"B_05",attrs:{id:"position"}},[n._v("ที่มา "+n._s(n.person.position_person))]),n._v(" "),t("div",{staticClass:"grid grid-cols-2 mt-2",attrs:{id:"person-case-wrapper"}},n._l(n.case_list_formated,(function(e){return n.SumAllInCaseList(e.list_case)>0?t("div",{key:e.name,staticClass:"flex my-[2px]"},[t("img",{staticClass:"h-[20px]",attrs:{src:n.ReturnEraImage(e.name)}}),n._v(" "),t("div",{staticClass:"grid grid-cols-4"},n._l(e.list_case,(function(n,e){return t("div",{key:e,staticClass:"m-[1px]"},[t("div",n?{staticClass:"\n              w-[8px]\n              h-[8px]\n              md:w-[11px] md:h-[11px]\n              rounded-full\n              border border-black\n            ",class:1===n?"bg-positiveGreen":"bg-negativeRed"}:{staticClass:"\n              w-[8px]\n              h-[8px]\n              md:w-[11px] md:h-[11px]\n              rounded-full\n              border border-absentGray\n              bg-lightGrey\n            "})])})),0)]):n._e()})),0)])}),[],!1,null,"2d91bede",null);e.default=component.exports},366:function(n,e){var t=Math.floor,r=function(n,e){var f=n.length,_=t(f/2);return f<8?o(n,e):c(r(n.slice(0,_),e),r(n.slice(_),e),e)},o=function(n,e){for(var element,t,r=n.length,i=1;i<r;){for(t=i,element=n[i];t&&e(n[t-1],element)>0;)n[t]=n[--t];t!==i++&&(n[t]=element)}return n},c=function(n,e,t){for(var r=n.length,o=e.length,c=0,f=0,_=[];c<r||f<o;)c<r&&f<o?_.push(t(n[c],e[f])<=0?n[c++]:e[f++]):_.push(c<r?n[c++]:e[f++]);return _};n.exports=r},367:function(n,e,t){var r=t(56).match(/firefox\/(\d+)/i);n.exports=!!r&&+r[1]},368:function(n,e,t){var r=t(56);n.exports=/MSIE|Trident/.test(r)},369:function(n,e,t){var r=t(56).match(/AppleWebKit\/(\d+)\./);n.exports=!!r&&+r[1]},370:function(n,e,t){var map={"./นางเสาวนีย์_อัศวโรจน์.png":374,"./นายกระมล_ทองธรรมชาติ.png":375,"./นายกิติศักดิ์_กิติคุณไพโรจน์.png":376,"./นายจรัญ_ภักดีธนากุล.png":377,"./นายจรัญ_หัตถกรรม.png":378,"./นายจรูญ_อินทจาร.png":379,"./นายจิรนิติ_หะวานนท์.png":380,"./นายจิระ_บุญพจสุนทร.png":381,"./นายจุมพล_ณ_สงขลา.png":382,"./นายชัช_ชลวร.png":383,"./นายทวีเกียรติ_มีนะกนิษฐ.png":384,"./นายธานิศ_เกศวพิทักษ์.png":385,"./นายนครินทร์_เมฆไตรรัตน์.png":386,"./นายนพดล_เฮงเจริญ.png":387,"./นายนภดล_เทพพิทักษ์.png":388,"./นายนุรักษ์_มาประณีต.png":389,"./นายบรรจงศักดิ์_วงศ์ปราชญ์.png":390,"./นายบุญส่ง_กุลบุปผา.png":391,"./นายประเสริฐ_นาสกุล.png":392,"./นายปรีชา_เฉลิมวณิชย์.png":393,"./นายปัญญา_ถนอมรอด.png":394,"./นายปัญญา_อุดชาชน.png":395,"./นายผัน_จันทรปาน.png":396,"./นายมงคล_สระฏัน.png":397,"./นายมานิต_วิทยาเต็ม.png":398,"./นายวรวิทย์_กังศศิเทียม.png":399,"./นายวสันต์_สร้อยพิสุทธิ์.png":400,"./นายวิชัย_ชื่นชมพูนุท.png":401,"./นายวิรุฬห์_แสงเทียน.png":402,"./นายศักดิ์_เตชาชาญ.png":403,"./นายสมชาย_พงษธา.png":404,"./นายสุจิต_บุญบงการ.png":405,"./นายสุจินดา_ยงสุนทร.png":406,"./นายสุธี_สุทธิสมบูรณ์.png":407,"./นายสุพจน์_ไข่มุกด์.png":408,"./นายสุวิทย์_ธีรพงษ์.png":409,"./นายอนันต์_เกตุวงศ์.png":410,"./นายอภัย_จันทนจุลกะ.png":411,"./นายอมร_รักษาสัตย์.png":412,"./นายอักขราทร_จุฬารัตน.png":413,"./นายอิสสระ_นิติทัณฑ์ประภาศ.png":414,"./นายอุดม_สิทธิวิรัชธรรม.png":415,"./นายอุดมศักดิ์_นิติมนตรี.png":416,"./นายอุระ_หวังอ้อมกลาง.png":417,"./นายเฉลิมพล_เอกอุรุ.png":418,"./พลตำรวจเอกสุวรรณ_สุวรรณเวโช.png":419,"./พลโท_จุล_อติเรก.png":420,"./หม่อมหลวงไกรฤกษ์_เกษมสันต์.png":421};function r(n){var e=o(n);return t(e)}function o(n){if(!t.o(map,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return map[n]}r.keys=function(){return Object.keys(map)},r.resolve=o,n.exports=r,r.id=370},371:function(n,e,t){t(422)},374:function(n,e,t){n.exports=t.p+"img/นางเสาวนีย์_อัศวโรจน์.79cb2e5.png"},375:function(n,e,t){n.exports=t.p+"img/นายกระมล_ทองธรรมชาติ.3c2bb25.png"},376:function(n,e,t){n.exports=t.p+"img/นายกิติศักดิ์_กิติคุณไพโรจน์.2dfd6b7.png"},377:function(n,e,t){n.exports=t.p+"img/นายจรัญ_ภักดีธนากุล.671d315.png"},378:function(n,e,t){n.exports=t.p+"img/นายจรัญ_หัตถกรรม.4e647f5.png"},379:function(n,e,t){n.exports=t.p+"img/นายจรูญ_อินทจาร.744bb69.png"},380:function(n,e,t){n.exports=t.p+"img/นายจิรนิติ_หะวานนท์.d34a7b5.png"},381:function(n,e,t){n.exports=t.p+"img/นายจิระ_บุญพจสุนทร.f1ae858.png"},382:function(n,e,t){n.exports=t.p+"img/นายจุมพล_ณ_สงขลา.05f1426.png"},383:function(n,e,t){n.exports=t.p+"img/นายชัช_ชลวร.01114c5.png"},384:function(n,e,t){n.exports=t.p+"img/นายทวีเกียรติ_มีนะกนิษฐ.3ba9188.png"},385:function(n,e,t){n.exports=t.p+"img/นายธานิศ_เกศวพิทักษ์.c2c309a.png"},386:function(n,e,t){n.exports=t.p+"img/นายนครินทร์_เมฆไตรรัตน์.dd78955.png"},387:function(n,e,t){n.exports=t.p+"img/นายนพดล_เฮงเจริญ.26ce203.png"},388:function(n,e,t){n.exports=t.p+"img/นายนภดล_เทพพิทักษ์.8868d38.png"},389:function(n,e,t){n.exports=t.p+"img/นายนุรักษ์_มาประณีต.5d8ca98.png"},390:function(n,e,t){n.exports=t.p+"img/นายบรรจงศักดิ์_วงศ์ปราชญ์.4fda33f.png"},391:function(n,e,t){n.exports=t.p+"img/นายบุญส่ง_กุลบุปผา.68276fc.png"},392:function(n,e,t){n.exports=t.p+"img/นายประเสริฐ_นาสกุล.d5451f0.png"},393:function(n,e,t){n.exports=t.p+"img/นายปรีชา_เฉลิมวณิชย์.08bb367.png"},394:function(n,e,t){n.exports=t.p+"img/นายปัญญา_ถนอมรอด.84106d7.png"},395:function(n,e,t){n.exports=t.p+"img/นายปัญญา_อุดชาชน.01a4756.png"},396:function(n,e,t){n.exports=t.p+"img/นายผัน_จันทรปาน.352e005.png"},397:function(n,e,t){n.exports=t.p+"img/นายมงคล_สระฏัน.4eb6ebc.png"},398:function(n,e,t){n.exports=t.p+"img/นายมานิต_วิทยาเต็ม.fce732c.png"},399:function(n,e,t){n.exports=t.p+"img/นายวรวิทย์_กังศศิเทียม.31b0b66.png"},400:function(n,e,t){n.exports=t.p+"img/นายวสันต์_สร้อยพิสุทธิ์.bf57e57.png"},401:function(n,e,t){n.exports=t.p+"img/นายวิชัย_ชื่นชมพูนุท.15a821f.png"},402:function(n,e,t){n.exports=t.p+"img/นายวิรุฬห์_แสงเทียน.1dfae71.png"},403:function(n,e,t){n.exports=t.p+"img/นายศักดิ์_เตชาชาญ.87ede86.png"},404:function(n,e,t){n.exports=t.p+"img/นายสมชาย_พงษธา.1089a6e.png"},405:function(n,e,t){n.exports=t.p+"img/นายสุจิต_บุญบงการ.fc83d28.png"},406:function(n,e,t){n.exports=t.p+"img/นายสุจินดา_ยงสุนทร.7838932.png"},407:function(n,e,t){n.exports=t.p+"img/นายสุธี_สุทธิสมบูรณ์.797479f.png"},408:function(n,e,t){n.exports=t.p+"img/นายสุพจน์_ไข่มุกด์.bc57723.png"},409:function(n,e,t){n.exports=t.p+"img/นายสุวิทย์_ธีรพงษ์.f67f912.png"},410:function(n,e,t){n.exports=t.p+"img/นายอนันต์_เกตุวงศ์.bb4fbb1.png"},411:function(n,e,t){n.exports=t.p+"img/นายอภัย_จันทนจุลกะ.b548d85.png"},412:function(n,e,t){n.exports=t.p+"img/นายอมร_รักษาสัตย์.19e833f.png"},413:function(n,e,t){n.exports=t.p+"img/นายอักขราทร_จุฬารัตน.fd59fac.png"},414:function(n,e,t){n.exports=t.p+"img/นายอิสสระ_นิติทัณฑ์ประภาศ.ff08d61.png"},415:function(n,e,t){n.exports=t.p+"img/นายอุดม_สิทธิวิรัชธรรม.5b89acc.png"},416:function(n,e,t){n.exports=t.p+"img/นายอุดมศักดิ์_นิติมนตรี.59a8020.png"},417:function(n,e,t){n.exports=t.p+"img/นายอุระ_หวังอ้อมกลาง.a920cac.png"},418:function(n,e,t){n.exports=t.p+"img/นายเฉลิมพล_เอกอุรุ.3816f75.png"},419:function(n,e,t){n.exports=t.p+"img/พลตำรวจเอกสุวรรณ_สุวรรณเวโช.197e88a.png"},420:function(n,e,t){n.exports=t.p+"img/พลโท_จุล_อติเรก.428488d.png"},421:function(n,e,t){n.exports=t.p+"img/หม่อมหลวงไกรฤกษ์_เกษมสันต์.a8ff2b6.png"},422:function(n,e,t){"use strict";var r=t(4),o=t(18),c=t(111),f=t(8),_=t(112),l=t(232),d=t(3),m=t(24),x=d("replace"),v=RegExp.prototype,h=Math.max,w=function(n,e,t){return t>n.length?-1:""===e?t:n.indexOf(e,t)};r({target:"String",proto:!0},{replaceAll:function(n,e){var t,r,d,y,C,k,G,O,S=o(this),j=0,A=0,E="";if(null!=n){if((t=c(n))&&!~f(o("flags"in v?n.flags:_.call(n))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(r=n[x]))return r.call(n,S,e);if(m&&t)return f(S).replace(n,e)}for(d=f(S),y=f(n),(C="function"==typeof e)||(e=f(e)),k=y.length,G=h(1,k),j=w(d,y,0);-1!==j;)O=C?f(e(y,j,d)):l(y,d,j,[],void 0,e),E+=d.slice(A,j)+O,A=j+k,j=w(d,y,j+G);return A<d.length&&(E+=d.slice(A)),E}})},426:function(n,e,t){var content=t(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(59).default)("bfe1014e",content,!0,{sourceMap:!1})},429:function(n,e,t){"use strict";t.r(e);t(78),t(79),t(371),t(44),t(43),t(363);var r=t(423),o=t(364),c={components:{PopOver:t(365).default},data:function(){return{number_all_case:22,judge_data:"",number_case_bg_gray:[1,2,3,4,7,9,10,15,16,17,18,19,20,21,22]}},mounted:function(){this.judge_data=r},methods:{SetBG:function(n){return this.number_case_bg_gray.includes(n)},ReplaceString:function(n){return n.replaceAll(" ","_")},PersonCase:function(n){var e=Object(o.default)(n);return this.SortPersonCaseNumber(e)},SortPersonCaseNumber:function(n){return n.map((function(n){return{name:n.name,list_case:n.list_case.sort((function(a,b){return b-a}))}}))}}},f=(t(442),t(42)),component=Object(f.a)(c,(function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"relative flex flex-col items-center",attrs:{id:"table-judge-wrapper"}},n._l(n.judge_data,(function(e){return r("div",{key:e.number_person,staticClass:"relative border-l-2 border-r-2  w-max border-l-tableGray border-r-tableGray"},[r("el-popover",{attrs:{placement:"bottom",width:"227",trigger:"click"}},[r("PopOver",{attrs:{person:e,case_list_formated:n.PersonCase(e)}}),n._v(" "),r("img",{staticClass:"\n          w-[15px]\n          h-[15px]\n          md:w-[30px] md:h-[30px]\n          lg:w-[40px] lg:h-[40px]\n          rounded-full\n          border-black border\n          cursor-pointer\n          absolute\n          lg:left-[-60px]\n          md:left-[-50px]\n          left-[-25px]\n        ",staticStyle:{top:"50%",transform:"translateY(-50%)"},attrs:{slot:"reference",src:t(370)("./"+n.ReplaceString(e.name_surname_person)+".png")},slot:"reference"})],1),n._v(" "),r("div",{staticClass:"flex justify-center",attrs:{id:"row"}},n._l(n.number_all_case,(function(t){return r("div",{key:t,staticClass:"\n          flex\n          items-center\n          justify-center\n          py-[5px]\n          md:py-[18px]\n          relative\n        ",class:n.SetBG(t)?"bg-tableGray":""},[e["case_"+t]?r("div",{staticClass:"\n            w-[9px]\n            h-[9px]\n            md:w-[19px] md:h-[19px]\n            lg:w-[24px] lg:h-[24px]\n            rounded-full\n            border border-black\n            lg:mx-[6px]\n            md:mx-[4px]\n            mx-[1.5px]\n            relative\n            z-10\n          ",class:1===e["case_"+t]?"bg-positiveGreen":"bg-negativeRed"}):r("div",{staticClass:"\n            bg-lightGrey\n            relative\n            z-10\n            w-[9px]\n            h-[9px]\n            md:w-[19px] md:h-[19px]\n            lg:w-[24px] lg:h-[24px]\n            rounded-full\n            border border-absentGray\n            lg:mx-[6px]\n            md:mx-[4px]\n            mx-[1.5px]\n          "}),n._v(" "),r("div",{staticClass:"absolute z-0 w-full border-b  md:border-b-4 border-b-absentGray",class:{"w-[50%] left-0":t===n.number_all_case,"w-[50%] right-0":1===t}})])})),0)],1)})),0)}),[],!1,null,null,null);e.default=component.exports},442:function(n,e,t){"use strict";t(426)},443:function(n,e,t){var r=t(58)((function(i){return i[1]}));r.push([n.i,".el-popover{border:1px solid #000;border-radius:0}.popper__arrow{display:none!important}",""]),r.locals={},n.exports=r}}]);