(window.webpackJsonp=window.webpackJsonp||[]).push([[29,30,33,36],{349:function(n,e,t){n.exports=t.p+"img/ทักษิณ_ชินวัตร.679b314.svg"},350:function(n,e,t){n.exports=t.p+"img/สมัคร_สุนทรเวช.1f87bd4.svg"},351:function(n,e,t){n.exports=t.p+"img/สมชาย_วงศ์สวัสดิ์.3420710.svg"},352:function(n,e,t){n.exports=t.p+"img/ยิ่งลักษณ์_ชินวัตร.846bb0b.svg"},353:function(n,e,t){n.exports=t.p+"img/สุรยุทธ์_จุลานนท์.8e96afb.svg"},354:function(n,e,t){n.exports=t.p+"img/อภิสิทธิ์_เวชชาชีวะ.19e7162.svg"},355:function(n,e,t){n.exports=t.p+"img/ประยุทธ์_จันทร์โอชา.e07ba1c.svg"},356:function(n,e,t){"use strict";var r=t(10),o=t(2),c=t(110),f=t(14),_=t(11),l=t(46),d=t(232),m=t(76),x=t(230),v=t(5),h=t(57),w=t(77).f,C=t(29).f,E=t(13).f,I=t(366).trim,N="Number",y=o.Number,A=y.prototype,S=l(h(A))==N,k=function(n){if(m(n))throw TypeError("Cannot convert a Symbol value to a number");var e,t,r,o,c,f,_,code,l=x(n,"number");if("string"==typeof l&&l.length>2)if(43===(e=(l=I(l)).charCodeAt(0))||45===e){if(88===(t=l.charCodeAt(2))||120===t)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+l}for(f=(c=l.slice(2)).length,_=0;_<f;_++)if((code=c.charCodeAt(_))<48||code>o)return NaN;return parseInt(c,r)}return+l};if(c(N,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var O,j=function(n){var e=arguments.length<1?0:n,t=this;return t instanceof j&&(S?v((function(){A.valueOf.call(t)})):l(t)!=N)?d(new y(k(e)),t,j):k(e)},R=r?w(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),T=0;R.length>T;T++)_(y,O=R[T])&&!_(j,O)&&E(j,O,C(y,O));j.prototype=A,A.constructor=j,f(o,N,j)}},357:function(n,e,t){"use strict";var r=t(4),o=t(75),c=t(20),f=t(12),_=t(8),l=t(5),d=t(362),m=t(166),x=t(363),v=t(364),h=t(74),w=t(365),C=[],E=C.sort,I=l((function(){C.sort(void 0)})),N=l((function(){C.sort(null)})),y=m("sort"),A=!l((function(){if(h)return h<70;if(!(x&&x>3)){if(v)return!0;if(w)return w<603;var code,n,e,t,r="";for(code=65;code<76;code++){switch(n=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(t=0;t<47;t++)C.push({k:n+t,v:e})}for(C.sort((function(a,b){return b.v-a.v})),t=0;t<C.length;t++)n=C[t].k.charAt(0),r.charAt(r.length-1)!==n&&(r+=n);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:I||!N||!y||!A},{sort:function(n){void 0!==n&&o(n);var e=c(this);if(A)return void 0===n?E.call(e):E.call(e,n);var t,r,l=[],m=f(e.length);for(r=0;r<m;r++)r in e&&l.push(e[r]);for(t=(l=d(l,function(n){return function(e,t){return void 0===t?-1:void 0===e?1:void 0!==n?+n(e,t)||0:_(e)>_(t)?1:-1}}(n))).length,r=0;r<t;)e[r]=l[r++];for(;r<m;)delete e[r++];return e}})},358:function(n,e,t){"use strict";t.r(e),e.default=function(n){return[{name:"ทักษิณ ชินวัตร",list_case:[n.case_1,n.case_2,n.case_3,n.case_4,"","","",""]},{name:"สุรยุทธ์ จุลานนท์",list_case:[n.case_5,n.case_6,"","","","","",""]},{name:"สมัคร สุนทรเวช",list_case:[n.case_7,"","","","","","",""]},{name:"สมชาย วงศ์สวัสดิ์",list_case:[n.case_8,"","","","","","",""]},{name:"อภิสิทธิ์ เวชชาชีวะ",list_case:[n.case_9,n.case_10,"","","","","",""]},{name:"ยิ่งลักษณ์ ชินวัตร",list_case:[n.case_11,n.case_12,n.case_13,n.case_14,"","","",""]},{name:"ประยุทธ์ จันทร์โอชา",list_case:[n.case_15,n.case_16,n.case_17,n.case_18,n.case_19,n.case_20,n.case_21,n.case_22]}]}},359:function(n,e,t){"use strict";t.r(e);var r={props:{person:{type:Object,required:!1,default:{}},case_list_formated:{type:Array,required:!1,default:[]}},data:function(){return{era_img:""}},methods:{ReturnEraImage:function(n){return"ทักษิณ ชินวัตร"===n?t(349):"สุรยุทธ์ จุลานนท์"===n?t(353):"สมัคร สุนทรเวช"===n?t(350):"สมชาย วงศ์สวัสดิ์"===n?t(351):"อภิสิทธิ์ เวชชาชีวะ"===n?t(354):"ยิ่งลักษณ์ ชินวัตร"===n?t(352):"ประยุทธ์ จันทร์โอชา"===n?t(355):void 0},SumAllInCaseList:function(n){return n.reduce((function(a,b){return a+b}),0)}}},o=t(42),component=Object(o.a)(r,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"mt-2 bg-white",attrs:{id:"popover-wrapper"}},[t("p",{staticClass:"font-bold B_05",attrs:{id:"name"}},[n._v("\n    "+n._s(n.person.name_surname_person)+"\n  ")]),n._v(" "),t("p",{staticClass:"B_05",attrs:{id:"position"}},[n._v("ที่มา "+n._s(n.person.position_person))]),n._v(" "),t("div",{staticClass:"grid grid-cols-2 mt-2",attrs:{id:"person-case-wrapper"}},n._l(n.case_list_formated,(function(e){return n.SumAllInCaseList(e.list_case)>0?t("div",{key:e.name,staticClass:"flex my-[2px]"},[t("img",{staticClass:"h-[20px]",attrs:{src:n.ReturnEraImage(e.name)}}),n._v(" "),t("div",{staticClass:"grid grid-cols-4"},n._l(e.list_case,(function(n,e){return t("div",{key:e,staticClass:"m-[1px]"},[t("div",n?{staticClass:"\n              w-[8px]\n              h-[8px]\n              md:w-[11px] md:h-[11px]\n              rounded-full\n              border border-black\n            ",class:1===n?"bg-positiveGreen":"bg-negativeRed"}:{staticClass:"\n              w-[8px]\n              h-[8px]\n              md:w-[11px] md:h-[11px]\n              rounded-full\n              border border-absentGray\n              bg-lightGrey\n            "})])})),0)]):n._e()})),0)])}),[],!1,null,"2d91bede",null);e.default=component.exports},360:function(n,e,t){var map={"./นางเสาวนีย์_อัศวโรจน์.png":368,"./นายกระมล_ทองธรรมชาติ.png":369,"./นายกิติศักดิ์_กิติคุณไพโรจน์.png":370,"./นายจรัญ_ภักดีธนากุล.png":371,"./นายจรัญ_หัตถกรรม.png":372,"./นายจรูญ_อินทจาร.png":373,"./นายจิรนิติ_หะวานนท์.png":374,"./นายจิระ_บุญพจสุนทร.png":375,"./นายจุมพล_ณ_สงขลา.png":376,"./นายชัช_ชลวร.png":377,"./นายทวีเกียรติ_มีนะกนิษฐ.png":378,"./นายธานิศ_เกศวพิทักษ์.png":379,"./นายนครินทร์_เมฆไตรรัตน์.png":380,"./นายนพดล_เฮงเจริญ.png":381,"./นายนภดล_เทพพิทักษ์.png":382,"./นายนุรักษ์_มาประณีต.png":383,"./นายบรรจงศักดิ์_วงศ์ปราชญ์.png":384,"./นายบุญส่ง_กุลบุปผา.png":385,"./นายประเสริฐ_นาสกุล.png":386,"./นายปรีชา_เฉลิมวณิชย์.png":387,"./นายปัญญา_ถนอมรอด.png":388,"./นายปัญญา_อุดชาชน.png":389,"./นายผัน_จันทรปาน.png":390,"./นายมงคล_สระฏัน.png":391,"./นายมานิต_วิทยาเต็ม.png":392,"./นายวรวิทย์_กังศศิเทียม.png":393,"./นายวสันต์_สร้อยพิสุทธิ์.png":394,"./นายวิชัย_ชื่นชมพูนุท.png":395,"./นายวิรุฬห์_แสงเทียน.png":396,"./นายศักดิ์_เตชาชาญ.png":397,"./นายสมชาย_พงษธา.png":398,"./นายสุจิต_บุญบงการ.png":399,"./นายสุจินดา_ยงสุนทร.png":400,"./นายสุธี_สุทธิสมบูรณ์.png":401,"./นายสุพจน์_ไข่มุกด์.png":402,"./นายสุวิทย์_ธีรพงษ์.png":403,"./นายอนันต์_เกตุวงศ์.png":404,"./นายอภัย_จันทนจุลกะ.png":405,"./นายอมร_รักษาสัตย์.png":406,"./นายอักขราทร_จุฬารัตน.png":407,"./นายอิสสระ_นิติทัณฑ์ประภาศ.png":408,"./นายอุดม_สิทธิวิรัชธรรม.png":409,"./นายอุดมศักดิ์_นิติมนตรี.png":410,"./นายอุระ_หวังอ้อมกลาง.png":411,"./นายเฉลิมพล_เอกอุรุ.png":412,"./พลตำรวจเอกสุวรรณ_สุวรรณเวโช.png":413,"./พลโท_จุล_อติเรก.png":414,"./หม่อมหลวงไกรฤกษ์_เกษมสันต์.png":415};function r(n){var e=o(n);return t(e)}function o(n){if(!t.o(map,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return map[n]}r.keys=function(){return Object.keys(map)},r.resolve=o,n.exports=r,r.id=360},361:function(n,e,t){t(416)},362:function(n,e){var t=Math.floor,r=function(n,e){var f=n.length,_=t(f/2);return f<8?o(n,e):c(r(n.slice(0,_),e),r(n.slice(_),e),e)},o=function(n,e){for(var element,t,r=n.length,i=1;i<r;){for(t=i,element=n[i];t&&e(n[t-1],element)>0;)n[t]=n[--t];t!==i++&&(n[t]=element)}return n},c=function(n,e,t){for(var r=n.length,o=e.length,c=0,f=0,_=[];c<r||f<o;)c<r&&f<o?_.push(t(n[c],e[f])<=0?n[c++]:e[f++]):_.push(c<r?n[c++]:e[f++]);return _};n.exports=r},363:function(n,e,t){var r=t(56).match(/firefox\/(\d+)/i);n.exports=!!r&&+r[1]},364:function(n,e,t){var r=t(56);n.exports=/MSIE|Trident/.test(r)},365:function(n,e,t){var r=t(56).match(/AppleWebKit\/(\d+)\./);n.exports=!!r&&+r[1]},366:function(n,e,t){var r=t(17),o=t(8),c="["+t(367)+"]",f=RegExp("^"+c+c+"*"),_=RegExp(c+c+"*$"),l=function(n){return function(e){var t=o(r(e));return 1&n&&(t=t.replace(f,"")),2&n&&(t=t.replace(_,"")),t}};n.exports={start:l(1),end:l(2),trim:l(3)}},367:function(n,e){n.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},368:function(n,e,t){n.exports=t.p+"img/นางเสาวนีย์_อัศวโรจน์.79cb2e5.png"},369:function(n,e,t){n.exports=t.p+"img/นายกระมล_ทองธรรมชาติ.3c2bb25.png"},370:function(n,e,t){n.exports=t.p+"img/นายกิติศักดิ์_กิติคุณไพโรจน์.2dfd6b7.png"},371:function(n,e,t){n.exports=t.p+"img/นายจรัญ_ภักดีธนากุล.671d315.png"},372:function(n,e,t){n.exports=t.p+"img/นายจรัญ_หัตถกรรม.4e647f5.png"},373:function(n,e,t){n.exports=t.p+"img/นายจรูญ_อินทจาร.744bb69.png"},374:function(n,e,t){n.exports=t.p+"img/นายจิรนิติ_หะวานนท์.d34a7b5.png"},375:function(n,e,t){n.exports=t.p+"img/นายจิระ_บุญพจสุนทร.f1ae858.png"},376:function(n,e,t){n.exports=t.p+"img/นายจุมพล_ณ_สงขลา.05f1426.png"},377:function(n,e,t){n.exports=t.p+"img/นายชัช_ชลวร.01114c5.png"},378:function(n,e,t){n.exports=t.p+"img/นายทวีเกียรติ_มีนะกนิษฐ.3ba9188.png"},379:function(n,e,t){n.exports=t.p+"img/นายธานิศ_เกศวพิทักษ์.c2c309a.png"},380:function(n,e,t){n.exports=t.p+"img/นายนครินทร์_เมฆไตรรัตน์.dd78955.png"},381:function(n,e,t){n.exports=t.p+"img/นายนพดล_เฮงเจริญ.26ce203.png"},382:function(n,e,t){n.exports=t.p+"img/นายนภดล_เทพพิทักษ์.8868d38.png"},383:function(n,e,t){n.exports=t.p+"img/นายนุรักษ์_มาประณีต.5d8ca98.png"},384:function(n,e,t){n.exports=t.p+"img/นายบรรจงศักดิ์_วงศ์ปราชญ์.4fda33f.png"},385:function(n,e,t){n.exports=t.p+"img/นายบุญส่ง_กุลบุปผา.68276fc.png"},386:function(n,e,t){n.exports=t.p+"img/นายประเสริฐ_นาสกุล.d5451f0.png"},387:function(n,e,t){n.exports=t.p+"img/นายปรีชา_เฉลิมวณิชย์.08bb367.png"},388:function(n,e,t){n.exports=t.p+"img/นายปัญญา_ถนอมรอด.84106d7.png"},389:function(n,e,t){n.exports=t.p+"img/นายปัญญา_อุดชาชน.01a4756.png"},390:function(n,e,t){n.exports=t.p+"img/นายผัน_จันทรปาน.352e005.png"},391:function(n,e,t){n.exports=t.p+"img/นายมงคล_สระฏัน.4eb6ebc.png"},392:function(n,e,t){n.exports=t.p+"img/นายมานิต_วิทยาเต็ม.fce732c.png"},393:function(n,e,t){n.exports=t.p+"img/นายวรวิทย์_กังศศิเทียม.31b0b66.png"},394:function(n,e,t){n.exports=t.p+"img/นายวสันต์_สร้อยพิสุทธิ์.bf57e57.png"},395:function(n,e,t){n.exports=t.p+"img/นายวิชัย_ชื่นชมพูนุท.15a821f.png"},396:function(n,e,t){n.exports=t.p+"img/นายวิรุฬห์_แสงเทียน.1dfae71.png"},397:function(n,e,t){n.exports=t.p+"img/นายศักดิ์_เตชาชาญ.87ede86.png"},398:function(n,e,t){n.exports=t.p+"img/นายสมชาย_พงษธา.1089a6e.png"},399:function(n,e,t){n.exports=t.p+"img/นายสุจิต_บุญบงการ.fc83d28.png"},400:function(n,e,t){n.exports=t.p+"img/นายสุจินดา_ยงสุนทร.7838932.png"},401:function(n,e,t){n.exports=t.p+"img/นายสุธี_สุทธิสมบูรณ์.797479f.png"},402:function(n,e,t){n.exports=t.p+"img/นายสุพจน์_ไข่มุกด์.bc57723.png"},403:function(n,e,t){n.exports=t.p+"img/นายสุวิทย์_ธีรพงษ์.f67f912.png"},404:function(n,e,t){n.exports=t.p+"img/นายอนันต์_เกตุวงศ์.bb4fbb1.png"},405:function(n,e,t){n.exports=t.p+"img/นายอภัย_จันทนจุลกะ.b548d85.png"},406:function(n,e,t){n.exports=t.p+"img/นายอมร_รักษาสัตย์.19e833f.png"},407:function(n,e,t){n.exports=t.p+"img/นายอักขราทร_จุฬารัตน.fd59fac.png"},408:function(n,e,t){n.exports=t.p+"img/นายอิสสระ_นิติทัณฑ์ประภาศ.ff08d61.png"},409:function(n,e,t){n.exports=t.p+"img/นายอุดม_สิทธิวิรัชธรรม.5b89acc.png"},410:function(n,e,t){n.exports=t.p+"img/นายอุดมศักดิ์_นิติมนตรี.59a8020.png"},411:function(n,e,t){n.exports=t.p+"img/นายอุระ_หวังอ้อมกลาง.a920cac.png"},412:function(n,e,t){n.exports=t.p+"img/นายเฉลิมพล_เอกอุรุ.3816f75.png"},413:function(n,e,t){n.exports=t.p+"img/พลตำรวจเอกสุวรรณ_สุวรรณเวโช.197e88a.png"},414:function(n,e,t){n.exports=t.p+"img/พลโท_จุล_อติเรก.428488d.png"},415:function(n,e,t){n.exports=t.p+"img/หม่อมหลวงไกรฤกษ์_เกษมสันต์.a8ff2b6.png"},416:function(n,e,t){"use strict";var r=t(4),o=t(17),c=t(111),f=t(8),_=t(112),l=t(231),d=t(3),m=t(23),x=d("replace"),v=RegExp.prototype,h=Math.max,w=function(n,e,t){return t>n.length?-1:""===e?t:n.indexOf(e,t)};r({target:"String",proto:!0},{replaceAll:function(n,e){var t,r,d,C,E,I,N,y,A=o(this),S=0,k=0,O="";if(null!=n){if((t=c(n))&&!~f(o("flags"in v?n.flags:_.call(n))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(r=n[x]))return r.call(n,A,e);if(m&&t)return f(A).replace(n,e)}for(d=f(A),C=f(n),(E="function"==typeof e)||(e=f(e)),I=C.length,N=h(1,I),S=w(d,C,0);-1!==S;)y=E?f(e(C,S,d)):l(C,d,S,[],void 0,e),O+=d.slice(k,S)+y,k=S+I,S=w(d,C,S+N);return k<d.length&&(O+=d.slice(k)),O}})},440:function(n,e,t){"use strict";t.r(e);t(45);var r=t(417);e.default=function(n,e){return r.filter((function(t){return t["case_".concat(e)]==n}))}},472:function(n,e,t){"use strict";t.r(e);t(356),t(361),t(44),t(43),t(357);var r=t(440),o=t(359),c=t(358),f={components:{PopOver:o.default},props:{side_case:{type:String,required:!1,default:0},number_case:{type:Number,required:!1,default:0}},data:function(){return{jusdge_list:[]}},mounted:function(){this.jusdge_list=Object(r.default)(this.side_case,this.number_case)},methods:{ReplaceString:function(n){return n.replaceAll(" ","_")},PersonCase:function(n){var e=Object(c.default)(n);return this.SortPersonCaseNumber(e)},SortPersonCaseNumber:function(n){return n.map((function(n){return{name:n.name,list_case:n.list_case.sort((function(a,b){return b-a}))}}))}}},_=t(42),component=Object(_.a)(f,(function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"\n    grid grid-cols-1\n    lg:grid-cols-3 lg:grid-rows-3\n    w-[240px]\n    lg:my-auto lg:gap-4\n    mb-auto\n    gap-2\n  ",attrs:{id:"judge-grid-wrapper"}},n._l(n.jusdge_list,(function(e){return r("div",{key:e.number_person,staticClass:"self-center justify-self-center"},[r("el-popover",{attrs:{placement:"bottom",width:"mobile"===n.$mq?150:227,trigger:"click"}},[r("PopOver",{attrs:{person:e,case_list_formated:n.PersonCase(e)}}),n._v(" "),r("img",{staticClass:"\n          w-[30px]\n          h-[30px]\n          md:w-[60px] md:h-[60px]\n          lg:w-[70px] lg:h-[70px]\n          rounded-full\n          border-black border\n          cursor-pointer\n        ",class:"1"===n.side_case?"bg-positiveGreen":"bg-negativeRed",attrs:{slot:"reference",src:t(360)("./"+n.ReplaceString(e.name_surname_person)+".png"),alt:""},slot:"reference"})],1)],1)})),0)}),[],!1,null,"321b3d62",null);e.default=component.exports}}]);