(window.webpackJsonp=window.webpackJsonp||[]).push([[17,9,16,18,19,20,30,36,37],{357:function(n,e,t){n.exports=t.p+"img/ทักษิณ_ชินวัตร.679b314.svg"},358:function(n,e,t){n.exports=t.p+"img/สมัคร_สุนทรเวช.1f87bd4.svg"},359:function(n,e,t){n.exports=t.p+"img/สมชาย_วงศ์สวัสดิ์.3420710.svg"},360:function(n,e,t){n.exports=t.p+"img/ยิ่งลักษณ์_ชินวัตร.846bb0b.svg"},361:function(n,e,t){n.exports=t.p+"img/สุรยุทธ์_จุลานนท์.8e96afb.svg"},362:function(n,e,t){n.exports=t.p+"img/อภิสิทธิ์_เวชชาชีวะ.19e7162.svg"},363:function(n,e,t){n.exports=t.p+"img/ประยุทธ์_จันทร์โอชา.e07ba1c.svg"},365:function(n,e,t){"use strict";var r=t(4),o=t(75),l=t(21),c=t(12),d=t(8),f=t(5),m=t(368),_=t(168),x=t(369),v=t(370),h=t(74),y=t(371),w=[],C=w.sort,I=f((function(){w.sort(void 0)})),k=f((function(){w.sort(null)})),M=_("sort"),j=!f((function(){if(h)return h<70;if(!(x&&x>3)){if(v)return!0;if(y)return y<603;var code,n,e,t,r="";for(code=65;code<76;code++){switch(n=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(t=0;t<47;t++)w.push({k:n+t,v:e})}for(w.sort((function(a,b){return b.v-a.v})),t=0;t<w.length;t++)n=w[t].k.charAt(0),r.charAt(r.length-1)!==n&&(r+=n);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:I||!k||!M||!j},{sort:function(n){void 0!==n&&o(n);var e=l(this);if(j)return void 0===n?C.call(e):C.call(e,n);var t,r,f=[],_=c(e.length);for(r=0;r<_;r++)r in e&&f.push(e[r]);for(t=(f=m(f,function(n){return function(e,t){return void 0===t?-1:void 0===e?1:void 0!==n?+n(e,t)||0:d(e)>d(t)?1:-1}}(n))).length,r=0;r<t;)e[r]=f[r++];for(;r<_;)delete e[r++];return e}})},366:function(n,e,t){"use strict";t.r(e),e.default=function(n){return[{name:"ทักษิณ ชินวัตร",list_case:[n.case_1,n.case_2,n.case_3,n.case_4,"","","",""]},{name:"สุรยุทธ์ จุลานนท์",list_case:[n.case_5,n.case_6,"","","","","",""]},{name:"สมัคร สุนทรเวช",list_case:[n.case_7,"","","","","","",""]},{name:"สมชาย วงศ์สวัสดิ์",list_case:[n.case_8,"","","","","","",""]},{name:"อภิสิทธิ์ เวชชาชีวะ",list_case:[n.case_9,n.case_10,"","","","","",""]},{name:"ยิ่งลักษณ์ ชินวัตร",list_case:[n.case_11,n.case_12,n.case_13,n.case_14,"","","",""]},{name:"ประยุทธ์ จันทร์โอชา",list_case:[n.case_15,n.case_16,n.case_17,n.case_18,n.case_19,n.case_20,n.case_21,n.case_22]}]}},367:function(n,e,t){"use strict";t.r(e);var r={props:{person:{type:Object,required:!1,default:{}},case_list_formated:{type:Array,required:!1,default:[]}},data:function(){return{era_img:""}},methods:{ReturnEraImage:function(n){return"ทักษิณ ชินวัตร"===n?t(357):"สุรยุทธ์ จุลานนท์"===n?t(361):"สมัคร สุนทรเวช"===n?t(358):"สมชาย วงศ์สวัสดิ์"===n?t(359):"อภิสิทธิ์ เวชชาชีวะ"===n?t(362):"ยิ่งลักษณ์ ชินวัตร"===n?t(360):"ประยุทธ์ จันทร์โอชา"===n?t(363):void 0},SumAllInCaseList:function(n){return n.reduce((function(a,b){return a+b}),0)}}},o=t(42),component=Object(o.a)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"mt-2 bg-white",attrs:{id:"popover-wrapper"}},[t("p",{staticClass:"font-bold B_05",attrs:{id:"name"}},[n._v("\n    "+n._s(n.person.name_surname_person)+"\n  ")]),n._v(" "),t("p",{staticClass:"B_05",attrs:{id:"position"}},[n._v("\n    ที่มา "),t("span",{domProps:{innerHTML:n._s(n.person.position_person)}})]),n._v(" "),t("div",{staticClass:"grid grid-cols-2 mt-2",attrs:{id:"person-case-wrapper"}},n._l(n.case_list_formated,(function(e){return n.SumAllInCaseList(e.list_case)>0?t("div",{key:e.name,staticClass:"flex my-[2px]"},[t("img",{staticClass:"h-[20px]",attrs:{src:n.ReturnEraImage(e.name)}}),n._v(" "),t("div",{staticClass:"grid grid-cols-4"},n._l(e.list_case,(function(n,e){return t("div",{key:e,staticClass:"m-[1px]"},[t("div",n?{staticClass:"\n              w-[8px]\n              h-[8px]\n              md:w-[11px] md:h-[11px]\n              rounded-full\n              border border-black\n            ",class:1===n?"bg-positiveGreen":"bg-negativeRed"}:{staticClass:"\n              w-[8px]\n              h-[8px]\n              md:w-[11px] md:h-[11px]\n              rounded-full\n              border border-absentGray\n              bg-lightGrey\n            "})])})),0)]):n._e()})),0)])}),[],!1,null,"1f48cb2e",null);e.default=component.exports},368:function(n,e){var t=Math.floor,r=function(n,e){var c=n.length,d=t(c/2);return c<8?o(n,e):l(r(n.slice(0,d),e),r(n.slice(d),e),e)},o=function(n,e){for(var element,t,r=n.length,i=1;i<r;){for(t=i,element=n[i];t&&e(n[t-1],element)>0;)n[t]=n[--t];t!==i++&&(n[t]=element)}return n},l=function(n,e,t){for(var r=n.length,o=e.length,l=0,c=0,d=[];l<r||c<o;)l<r&&c<o?d.push(t(n[l],e[c])<=0?n[l++]:e[c++]):d.push(l<r?n[l++]:e[c++]);return d};n.exports=r},369:function(n,e,t){var r=t(56).match(/firefox\/(\d+)/i);n.exports=!!r&&+r[1]},370:function(n,e,t){var r=t(56);n.exports=/MSIE|Trident/.test(r)},371:function(n,e,t){var r=t(56).match(/AppleWebKit\/(\d+)\./);n.exports=!!r&&+r[1]},372:function(n,e,t){var map={"./นางเสาวนีย์_อัศวโรจน์.png":376,"./นายกระมล_ทองธรรมชาติ.png":377,"./นายกิติศักดิ์_กิติคุณไพโรจน์.png":378,"./นายจรัญ_ภักดีธนากุล.png":379,"./นายจรัญ_หัตถกรรม.png":380,"./นายจรูญ_อินทจาร.png":381,"./นายจิรนิติ_หะวานนท์.png":382,"./นายจิระ_บุญพจสุนทร.png":383,"./นายจุมพล_ณ_สงขลา.png":384,"./นายชัช_ชลวร.png":385,"./นายทวีเกียรติ_มีนะกนิษฐ.png":386,"./นายธานิศ_เกศวพิทักษ์.png":387,"./นายนครินทร์_เมฆไตรรัตน์.png":388,"./นายนพดล_เฮงเจริญ.png":389,"./นายนภดล_เทพพิทักษ์.png":390,"./นายนุรักษ์_มาประณีต.png":391,"./นายบรรจงศักดิ์_วงศ์ปราชญ์.png":392,"./นายบุญส่ง_กุลบุปผา.png":393,"./นายประเสริฐ_นาสกุล.png":394,"./นายปรีชา_เฉลิมวณิชย์.png":395,"./นายปัญญา_ถนอมรอด.png":396,"./นายปัญญา_อุดชาชน.png":397,"./นายผัน_จันทรปาน.png":398,"./นายมงคล_สระฏัน.png":399,"./นายมานิต_วิทยาเต็ม.png":400,"./นายวรวิทย์_กังศศิเทียม.png":401,"./นายวสันต์_สร้อยพิสุทธิ์.png":402,"./นายวิชัย_ชื่นชมพูนุท.png":403,"./นายวิรุฬห์_แสงเทียน.png":404,"./นายศักดิ์_เตชาชาญ.png":405,"./นายสมชาย_พงษธา.png":406,"./นายสุจิต_บุญบงการ.png":407,"./นายสุจินดา_ยงสุนทร.png":408,"./นายสุธี_สุทธิสมบูรณ์.png":409,"./นายสุพจน์_ไข่มุกด์.png":410,"./นายสุวิทย์_ธีรพงษ์.png":411,"./นายอนันต์_เกตุวงศ์.png":412,"./นายอภัย_จันทนจุลกะ.png":413,"./นายอมร_รักษาสัตย์.png":414,"./นายอักขราทร_จุฬารัตน.png":415,"./นายอิสสระ_นิติทัณฑ์ประภาศ.png":416,"./นายอุดม_สิทธิวิรัชธรรม.png":417,"./นายอุดมศักดิ์_นิติมนตรี.png":418,"./นายอุระ_หวังอ้อมกลาง.png":419,"./นายเฉลิมพล_เอกอุรุ.png":420,"./พลตำรวจเอกสุวรรณ_สุวรรณเวโช.png":421,"./พลโท_จุล_อติเรก.png":422,"./หม่อมหลวงไกรฤกษ์_เกษมสันต์.png":423};function r(n){var e=o(n);return t(e)}function o(n){if(!t.o(map,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return map[n]}r.keys=function(){return Object.keys(map)},r.resolve=o,n.exports=r,r.id=372},373:function(n,e,t){t(424)},376:function(n,e,t){n.exports=t.p+"img/นางเสาวนีย์_อัศวโรจน์.79cb2e5.png"},377:function(n,e,t){n.exports=t.p+"img/นายกระมล_ทองธรรมชาติ.3c2bb25.png"},378:function(n,e,t){n.exports=t.p+"img/นายกิติศักดิ์_กิติคุณไพโรจน์.2dfd6b7.png"},379:function(n,e,t){n.exports=t.p+"img/นายจรัญ_ภักดีธนากุล.671d315.png"},380:function(n,e,t){n.exports=t.p+"img/นายจรัญ_หัตถกรรม.4e647f5.png"},381:function(n,e,t){n.exports=t.p+"img/นายจรูญ_อินทจาร.744bb69.png"},382:function(n,e,t){n.exports=t.p+"img/นายจิรนิติ_หะวานนท์.d34a7b5.png"},383:function(n,e,t){n.exports=t.p+"img/นายจิระ_บุญพจสุนทร.f1ae858.png"},384:function(n,e,t){n.exports=t.p+"img/นายจุมพล_ณ_สงขลา.05f1426.png"},385:function(n,e,t){n.exports=t.p+"img/นายชัช_ชลวร.01114c5.png"},386:function(n,e,t){n.exports=t.p+"img/นายทวีเกียรติ_มีนะกนิษฐ.3ba9188.png"},387:function(n,e,t){n.exports=t.p+"img/นายธานิศ_เกศวพิทักษ์.c2c309a.png"},388:function(n,e,t){n.exports=t.p+"img/นายนครินทร์_เมฆไตรรัตน์.dd78955.png"},389:function(n,e,t){n.exports=t.p+"img/นายนพดล_เฮงเจริญ.26ce203.png"},390:function(n,e,t){n.exports=t.p+"img/นายนภดล_เทพพิทักษ์.8868d38.png"},391:function(n,e,t){n.exports=t.p+"img/นายนุรักษ์_มาประณีต.5d8ca98.png"},392:function(n,e,t){n.exports=t.p+"img/นายบรรจงศักดิ์_วงศ์ปราชญ์.4fda33f.png"},393:function(n,e,t){n.exports=t.p+"img/นายบุญส่ง_กุลบุปผา.68276fc.png"},394:function(n,e,t){n.exports=t.p+"img/นายประเสริฐ_นาสกุล.d5451f0.png"},395:function(n,e,t){n.exports=t.p+"img/นายปรีชา_เฉลิมวณิชย์.08bb367.png"},396:function(n,e,t){n.exports=t.p+"img/นายปัญญา_ถนอมรอด.84106d7.png"},397:function(n,e,t){n.exports=t.p+"img/นายปัญญา_อุดชาชน.01a4756.png"},398:function(n,e,t){n.exports=t.p+"img/นายผัน_จันทรปาน.352e005.png"},399:function(n,e,t){n.exports=t.p+"img/นายมงคล_สระฏัน.4eb6ebc.png"},400:function(n,e,t){n.exports=t.p+"img/นายมานิต_วิทยาเต็ม.fce732c.png"},401:function(n,e,t){n.exports=t.p+"img/นายวรวิทย์_กังศศิเทียม.31b0b66.png"},402:function(n,e,t){n.exports=t.p+"img/นายวสันต์_สร้อยพิสุทธิ์.bf57e57.png"},403:function(n,e,t){n.exports=t.p+"img/นายวิชัย_ชื่นชมพูนุท.15a821f.png"},404:function(n,e,t){n.exports=t.p+"img/นายวิรุฬห์_แสงเทียน.1dfae71.png"},405:function(n,e,t){n.exports=t.p+"img/นายศักดิ์_เตชาชาญ.87ede86.png"},406:function(n,e,t){n.exports=t.p+"img/นายสมชาย_พงษธา.1089a6e.png"},407:function(n,e,t){n.exports=t.p+"img/นายสุจิต_บุญบงการ.fc83d28.png"},408:function(n,e,t){n.exports=t.p+"img/นายสุจินดา_ยงสุนทร.7838932.png"},409:function(n,e,t){n.exports=t.p+"img/นายสุธี_สุทธิสมบูรณ์.797479f.png"},410:function(n,e,t){n.exports=t.p+"img/นายสุพจน์_ไข่มุกด์.bc57723.png"},411:function(n,e,t){n.exports=t.p+"img/นายสุวิทย์_ธีรพงษ์.f67f912.png"},412:function(n,e,t){n.exports=t.p+"img/นายอนันต์_เกตุวงศ์.bb4fbb1.png"},413:function(n,e,t){n.exports=t.p+"img/นายอภัย_จันทนจุลกะ.b548d85.png"},414:function(n,e,t){n.exports=t.p+"img/นายอมร_รักษาสัตย์.19e833f.png"},415:function(n,e,t){n.exports=t.p+"img/นายอักขราทร_จุฬารัตน.fd59fac.png"},416:function(n,e,t){n.exports=t.p+"img/นายอิสสระ_นิติทัณฑ์ประภาศ.ff08d61.png"},417:function(n,e,t){n.exports=t.p+"img/นายอุดม_สิทธิวิรัชธรรม.5b89acc.png"},418:function(n,e,t){n.exports=t.p+"img/นายอุดมศักดิ์_นิติมนตรี.59a8020.png"},419:function(n,e,t){n.exports=t.p+"img/นายอุระ_หวังอ้อมกลาง.a920cac.png"},420:function(n,e,t){n.exports=t.p+"img/นายเฉลิมพล_เอกอุรุ.3816f75.png"},421:function(n,e,t){n.exports=t.p+"img/พลตำรวจเอกสุวรรณ_สุวรรณเวโช.197e88a.png"},422:function(n,e,t){n.exports=t.p+"img/พลโท_จุล_อติเรก.428488d.png"},423:function(n,e,t){n.exports=t.p+"img/หม่อมหลวงไกรฤกษ์_เกษมสันต์.a8ff2b6.png"},424:function(n,e,t){"use strict";var r=t(4),o=t(18),l=t(111),c=t(8),d=t(112),f=t(234),m=t(3),_=t(24),x=m("replace"),v=RegExp.prototype,h=Math.max,y=function(n,e,t){return t>n.length?-1:""===e?t:n.indexOf(e,t)};r({target:"String",proto:!0},{replaceAll:function(n,e){var t,r,m,w,C,I,k,M,j=o(this),S=0,G=0,O="";if(null!=n){if((t=l(n))&&!~c(o("flags"in v?n.flags:d.call(n))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(r=n[x]))return r.call(n,j,e);if(_&&t)return c(j).replace(n,e)}for(m=c(j),w=c(n),(C="function"==typeof e)||(e=c(e)),I=w.length,k=h(1,I),S=y(m,w,0);-1!==S;)M=C?c(e(w,S,m)):f(w,m,S,[],void 0,e),O+=m.slice(G,S)+M,G=S+I,S=y(m,w,S+k);return G<m.length&&(O+=m.slice(G)),O}})},428:function(n,e,t){var content=t(448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(58).default)("bfe1014e",content,!0,{sourceMap:!1})},429:function(n,e,t){"use strict";t.r(e);var r={data:function(){return{hint_data:[{name_desktop:"ผลบวกต่อรัฐบาล",name_mobile:"เป็นผลบวก",key:"ผลบวก"},{name_desktop:"ผลลบต่อรัฐบาล",name_mobile:"เป็นผลลบ",key:"ผลลบ"},{name_desktop:"เหตุการณ์",name_mobile:"เหตุการณ์",key:"เหตุการณ์"}]}}},o=t(42),component=Object(o.a)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"flex",attrs:{id:"hint-wrapper"}},n._l(n.hint_data,(function(e){return t("div",{key:e.key,staticClass:"flex items-center B_05 md:mx-2.5 mx-1.5"},[t("div",{staticClass:"\n        md:w-[12px]\n        w-[9px]\n        h-[9px]\n        md:h-[12px]\n        rounded-full\n        border border-black\n      ",class:{"bg-positiveGreen":"ผลบวก"===e.key,"bg-negativeRed":"ผลลบ"===e.key,"bg-absentGray":"เหตุการณ์"===e.key,"border-absentGray":"เหตุการณ์"===e.key}}),n._v(" "),t("p",{staticClass:"ml-[5px]"},[n._v("\n      "+n._s("mobile"===n.$mq?e.name_mobile:e.name_desktop)+"\n    ")])])})),0)}),[],!1,null,"c0be3366",null);e.default=component.exports},430:function(n,e,t){"use strict";t.r(e);t(79),t(80),t(373),t(44),t(43),t(365);var r=t(425),o=t(366),l={components:{PopOver:t(367).default},data:function(){return{number_all_case:22,judge_data:"",number_case_bg_gray:[1,2,3,4,7,9,10,15,16,17,18,19,20,21,22]}},mounted:function(){this.judge_data=r},methods:{SetBG:function(n){return this.number_case_bg_gray.includes(n)},ReplaceString:function(n){return n.replaceAll(" ","_")},PersonCase:function(n){var e=Object(o.default)(n);return this.SortPersonCaseNumber(e)},SortPersonCaseNumber:function(n){return n.map((function(n){return{name:n.name,list_case:n.list_case.sort((function(a,b){return b-a}))}}))}}},c=(t(447),t(42)),component=Object(c.a)(l,(function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"relative flex flex-col items-center",attrs:{id:"table-judge-wrapper"}},n._l(n.judge_data,(function(e){return r("div",{key:e.number_person,staticClass:"\n      relative\n      border-l-2 border-r-2\n      w-max\n      border-l-tableGray border-r-tableGray\n      ml-[15px]\n      md:ml-0\n    "},[r("el-popover",{attrs:{placement:"bottom",width:"mobile"===n.$mq?150:240,trigger:"click"}},[r("PopOver",{attrs:{person:e,case_list_formated:n.PersonCase(e)}}),n._v(" "),r("img",{staticClass:"\n          w-[18px]\n          h-[18px]\n          md:w-[30px] md:h-[30px]\n          lg:w-[40px] lg:h-[40px]\n          rounded-full\n          border-black border\n          cursor-pointer\n          absolute\n          lg:left-[-60px]\n          md:left-[-50px]\n          left-[-25px]\n        ",staticStyle:{top:"50%",transform:"translateY(-50%)"},attrs:{slot:"reference",src:t(372)("./"+n.ReplaceString(e.name_surname_person)+".png")},slot:"reference"})],1),n._v(" "),r("div",{staticClass:"flex justify-center",attrs:{id:"row"}},n._l(n.number_all_case,(function(t){return r("div",{key:t,staticClass:"\n          flex\n          items-center\n          justify-center\n          py-[7px]\n          md:py-[18px]\n          relative\n        ",class:n.SetBG(t)?"bg-tableGray":""},[e["case_"+t]?r("div",{staticClass:"\n            w-[9px]\n            h-[9px]\n            md:w-[19px] md:h-[19px]\n            lg:w-[24px] lg:h-[24px]\n            rounded-full\n            border border-black\n            lg:mx-[6px]\n            md:mx-[4px]\n            mx-[1.5px]\n            relative\n            z-10\n          ",class:1===e["case_"+t]?"bg-positiveGreen":"bg-negativeRed"}):r("div",{staticClass:"\n            bg-lightGrey\n            relative\n            z-10\n            w-[9px]\n            h-[9px]\n            md:w-[19px] md:h-[19px]\n            lg:w-[24px] lg:h-[24px]\n            rounded-full\n            border border-absentGray\n            lg:mx-[6px]\n            md:mx-[4px]\n            mx-[1.5px]\n          "}),n._v(" "),r("div",{staticClass:"absolute z-0 w-full border-b  md:border-b-4 border-b-absentGray",class:{"w-[50%] left-0":t===n.number_all_case,"w-[50%] right-0":1===t}})])})),0)],1)})),0)}),[],!1,null,null,null);e.default=component.exports},446:function(n,e){n.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAxOCAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTguNTkwNDggMC42NjYwMTZWMTguODk1NyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik0xNy44Nzk5IDkuNzgwMjdMMC4xNDI4NjQgOS43ODAyNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo="},447:function(n,e,t){"use strict";t(428)},448:function(n,e,t){var r=t(57)((function(i){return i[1]}));r.push([n.i,".el-popover{border:1px solid #000;border-radius:0}.popper__arrow{display:none!important}",""]),r.locals={},n.exports=r},449:function(n,e){n.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzOCAzOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI4LjMwMjIgOS43MzI0Mkw5LjUxNzIxIDI4LjUxNzUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMyIvPgo8cGF0aCBkPSJNMjguMzAyMiAyOC41MTc2TDkuNTE3MjEgOS43MzI1NCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIzIi8+Cjwvc3ZnPgo="},459:function(n,e,t){"use strict";t.r(e);var r={methods:{openModal:function(){document.getElementById("hide-more-case-wrapper").style.display="flex",document.getElementById("table-judge-wrapper").style.overflowY="hidden",document.body.style.overflow="hidden"}}},o=t(42),component=Object(o.a)(r,(function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"\n    absolute\n    B_06\n    w-[37px]\n    h-[37px]\n    md:w-[64px] md:h-[64px]\n    bg-black\n    rounded-full\n    text-white\n    flex\n    items-center\n    justify-center\n    left-[103%]\n    top-[50%]\n    translate-y-[-50%]\n    cursor-pointer\n    text-center\n    flex-col\n  ",on:{click:n.openModal}},[r("img",{attrs:{src:t(446),width:"mobile"===n.$mq?8:17}}),n._v("\n  ดูรายชื่อ"),r("br"),n._v("\n  คดี\n")])}),[],!1,null,"a887d17a",null);e.default=component.exports},460:function(n,e,t){"use strict";t.r(e);var r={data:function(){return{era_case_list:[{name:"ทักษิณ ชินวัตร",list_case:[1,2,3,4]},{name:"สุรยุทธ์ จุลานนท์",list_case:[5,6]},{name:"สมัคร สุนทรเวช",list_case:[7]},{name:"สมชาย วงศ์สวัสดิ์",list_case:[8]},{name:"อภิสิทธิ์ เวชชาชีวะ",list_case:[9,10]},{name:"ยิ่งลักษณ์ ชินวัตร",list_case:[11,12,13,14]},{name:"ประยุทธ์ จันทร์โอชา",list_case:[15,16,17,18,19,20,21,22]}]}},methods:{ReturnEraImage:function(n){return"ทักษิณ ชินวัตร"===n?t(357):"สุรยุทธ์ จุลานนท์"===n?t(361):"สมัคร สุนทรเวช"===n?t(358):"สมชาย วงศ์สวัสดิ์"===n?t(359):"อภิสิทธิ์ เวชชาชีวะ"===n?t(362):"ยิ่งลักษณ์ ชินวัตร"===n?t(360):"ประยุทธ์ จันทร์โอชา"===n?t(363):void 0}}},o=t(42),component=Object(o.a)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"\n    absolute\n    w-max\n    mx-auto\n    left-[50%]\n    bottom-[12px]\n    flex\n    lg:h-[61px]\n    md:h-[45px]\n    h-[25px]\n    border\n    lg:border-2\n    border-absentGray\n    ml-[7.5px]\n    md:ml-0\n  ",staticStyle:{transform:"translateX(-50%)"},attrs:{id:"header-tabler-person"}},n._l(n.era_case_list,(function(e){return t("div",{key:e.name,staticClass:"relative flex items-end h-full pb-1 md:pb-3",class:{"bg-headertable":"ทักษิณ ชินวัตร"===e.name||"สมัคร สุนทรเวช"===e.name||"อภิสิทธิ์ เวชชาชีวะ"===e.name||"ประยุทธ์ จันทร์โอชา"===e.name}},[t("img",{staticClass:"absolute h-[12px] md:h-[25px] lg:h-[32px]",staticStyle:{top:"0%",transform:"translate(-50%, -50%)",left:"50%"},attrs:{src:n.ReturnEraImage(e.name)}}),n._v(" "),n._l(e.list_case,(function(e){return t("div",{key:e,staticClass:"\n        flex\n        w-[9px]\n        h-[9px]\n        md:w-[19px] md:h-[19px]\n        lg:w-[24px] lg:h-[24px]\n        justify-center\n        header_table\n        font-bold\n        lg:mx-[6px]\n        md:mx-[4px]\n        mx-[1.5px]\n      "},[n._v("\n      "+n._s(e)+"\n    ")])}))],2)})),0)}),[],!1,null,"0694391e",null);e.default=component.exports},461:function(n,e,t){"use strict";t.r(e);var r={data:function(){return{hint_1:[{number:1,content:'วินิจฉัยว่าทักษิณ ชินวัตร ไม่หลุด\nจากตำแหน่งนายกรัฐมนตรี\nจากกรณี "คดีซุกหุ้น" '},{number:2,content:"วินิจฉัยว่า กฎหมายซึ่งอาจเอื้อประโยชน์\nทางธุรกิจแก่ บริษัท ชินคอร์ปอเรชั่น จำกัด\n(มหาชน) โดยเฉพาะ ไม่มีปัญหาเรื่อง\nความชอบด้วยรัฐธรรมนูญ"},{number:3,content:"วินิจฉัยไม่รับคำร้องของ 28 สว. ที่ขอให้\nศาลรัฐธรรมนูญวินิจฉัยให้ ทักษิณ ชินวัตร\nพ้นจากตำแหน่งนายกรัฐมนตรี"},{number:4,content:"วินิจฉัยว่า การเลือกตั้งสมาชิกสภาผู้แทนราษฎร\nเมื่อวันที่ 2 เมษายน พ.ศ. 2549 เป็นโมฆะ"},{number:5,content:"วินิจฉัยยกคำร้องที่ขอให้ศาลสั่งยุบ\nพรรคประชาธิปัตย์"},{number:6,content:'วินิจฉัยให้มีคําสั่งยุบพรรคไทยรักไทย\nจากกรณี "จ้างพรรคเล็กลงเลือกตั้ง"'},{number:7,content:'วินิจฉัยให้สมัคร สุนทรเวช หลุดจาก\nตำแหน่งนายกรัฐมนตรี จากกรณี\n"เป็นพิธีกรรายการทีวี"'}],hint_2:[{number:8,content:'วินิจฉัยให้มีคําสั่งยุบพรรคพลังประชาชน\nจากกรณี "ทุจริตการเลือกตั้ง"'},{number:9,content:"วินิจฉัยยกคำร้องที่ขอให้ศาลสั่งยุบพรรค\nประชาธิปัตย์"},{number:10,content:"วินิจฉัยยกคำร้องที่ขอให้ศาลสั่งยุบพรรค\nประชาธิปัตย์"},{number:11,content:"วินิจฉัยว่า การแก้ไขเพิ่มเติมรัฐธรรมนูญ\nเกี่ยวกับที่มาและคุณสมบัติของสมาชิกวุฒิสภา\nขัดรัฐธรรมนูญ"},{number:12,content:"วินิจฉัยให้ร่าง พ.ร.บ.กู้เงิน 2 ล้านล้าน ตกไป"},{number:13,content:"วินิจฉัยว่า การเลือกตั้งสมาชิกสภาผู้แทนราษฎร\nที่จัดขึ้นเมื่อวันที่ 2 กุมภาพันธ์ พ.ศ. 2557 เป็นโมฆะ"},{number:14,content:'วินิจฉัยให้ยิ่งลักษณ์ ชินวัตร หลุดจากตำแหน่ง\nนายกรัฐมนตรี จากกรณี "โยกย้ายข้าราชการ"'},{number:15,content:"วินิจฉัยให้มาตรา 61 วรรคสอง แห่งพระราชบัญญัติ\nว่าด้วยการออกเสียงประชามติร่างรัฐธรรมนูญ\nพ.ศ. 2559 ไม่ขัดรัฐธรรมนูญ"}],hint_3:[{number:16,content:'วินิจฉัยให้มีคําสั่งมีคำสั่งยุบพรรคไทยรักษาชาติ\nจากกรณี "เสนอชื่อทูลกระหม่อมฯ เป็นแคนดิเดต\nนายกรัฐมนตรี"'},{number:17,content:"วินิจฉัยว่า สูตรคำนวณ สส. ปาร์ตี้ลิสต์ ไม่ขัด\nรัฐธรรมนูญ"},{number:18,content:'วินิจฉัยว่า พลเอกประยุทธ์ จันทร์โอชา ไม่หลุดจาก\nตำแหน่ง นายกรัฐมนตรี จากกรณี "ดำรงตำแหน่ง\nหัวหน้า คสช."'},{number:19,content:'วินิจฉัยให้ธนาธร จึงรุ่งเรืองกิจ หลุดจากตำแหน่ง\nสส. จากกรณี "คดีถือหุ้นสื่อ"'},{number:20,content:'วินิจฉัยให้มีคำสั่งยุบพรรคอนาคตใหม่ จากกรณี\n"กู้ยืมเงินหัวหน้าพรรค"'},{number:21,content:'วินิจฉัยว่า พลเอกประยุทธ์ จันทร์โอชา ไม่หลุด\nจากตำแหน่งนายกรัฐมนตรี  จากกรณี\n"คดีบ้านพักหลวง"'},{number:22,content:'วินิจฉัยว่า ร้อยเอกธรรมนัส พรหมเผ่า ไม่หลุด\nจากตำแหน่ง สส. และรัฐมนตรี ในกรณี\n"คดียาเสพติดที่ออสเตรเลีย"'}]}},methods:{closeModal:function(){document.getElementById("hide-more-case-wrapper").style.display="none",document.getElementById("table-judge-wrapper").style.overflowY="auto",document.body.style.overflow="auto"}}},o=t(42),component=Object(o.a)(r,(function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"\n    pt-16\n    lg:pt-7\n    fixed\n    lg:w-[80%]\n    w-screen\n    bg-tableHead\n    z-20\n    border border-black\n    top-[50%]\n    translate-y-[-50%]\n    B_05\n    py-7\n    px-12\n    flex flex-col\n    lg:flex-row\n    space-x-3\n    hidden\n    overflow-y-auto\n    lg:overflow-y-visible\n    z-[60]\n    left-[50%]\n    translate-x-[-50%]\n  ",class:{"h-full":"mobile"===n.$mq||"tablet"===n.$mq,"h-max":"mobile"!=n.$mq||"tablet"!=n.$mq},attrs:{id:"hide-more-case-wrapper"}},[r("img",{staticClass:"\n      absolute\n      lg:top-0\n      top-[45px]\n      right-0\n      cursor-pointer\n      w-[16px]\n      md:w-[26px]\n      m-3\n      lg:m-0\n    ",attrs:{src:t(449)},on:{click:n.closeModal}}),n._v(" "),r("div",{staticClass:"flex flex-col space-y-3 lg:flex-1"},n._l(n.hint_1,(function(e,t){return r("div",{key:t+1,staticClass:"flex"},[r("div",{staticClass:"mr-5 font-bold"},[n._v(n._s(e.number))]),n._v(" "),r("div",[n._v(n._s(e.content))])])})),0),n._v(" "),r("div",{staticClass:"flex flex-col space-y-3 lg:flex-1"},n._l(n.hint_2,(function(e,t){return r("div",{key:t+1,staticClass:"flex"},[r("div",{staticClass:"mr-5 font-bold"},[n._v(n._s(e.number))]),n._v(" "),r("div",[n._v(n._s(e.content))])])})),0),n._v(" "),r("div",{staticClass:"flex flex-col space-y-3 lg:flex-1"},n._l(n.hint_3,(function(e,t){return r("div",{key:t+1,staticClass:"flex"},[r("div",{staticClass:"mr-5 font-bold"},[n._v(n._s(e.number))]),n._v(" "),r("div",[n._v(n._s(e.content))])])})),0)])}),[],!1,null,"61492c26",null);e.default=component.exports},486:function(n,e,t){"use strict";t.r(e);var r=t(429),o=t(459),l=t(430),c=t(460),d=t(461),f={components:{HintTrack:r.default,BottonSeeMoreCase:o.default,TableJudge:l.default,HeaderTablePerson:c.default,HideMoreCase:d.default}},m=t(42),component=Object(m.a)(f,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"table-person"}},[t("div",{staticClass:"relative"},[t("div",{staticClass:"\n        h-[133px]\n        md:h-[220px]\n        bg-tableHead\n        flex flex-col\n        lg:pt-16\n        justify-center\n        lg:justify-start\n        sticky\n        top-0\n        z-50\n      ",attrs:{id:"top-table"}},[t("div",{staticClass:"container mx-auto"},[t("div",{staticClass:"\n            bg-white\n            border border-black\n            lg:w-[578px]\n            md:w-[450px]\n            w-max\n            mx-auto\n            flex\n            justify-center\n            relative\n            md:h-[36px]\n            h-[20px]\n          ",attrs:{id:"hint-track"}},[t("HintTrack"),n._v(" "),t("BottonSeeMoreCase")],1)]),n._v(" "),t("HeaderTablePerson")],1),n._v(" "),t("HideMoreCase"),n._v(" "),t("TableJudge",{staticClass:"z-20 h-full overflow-y-auto"})],1)])}),[],!1,null,"73117f9a",null);e.default=component.exports;installComponents(component,{TableJudge:t(430).default})}}]);