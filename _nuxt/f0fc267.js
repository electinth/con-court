(window.webpackJsonp=window.webpackJsonp||[]).push([[11,9],{365:function(e,t,n){"use strict";var r=n(4),o=n(75),c=n(21),l=n(12),f=n(8),m=n(5),d=n(366),v=n(168),h=n(367),_=n(368),x=n(74),w=n(369),C=[],y=C.sort,k=m((function(){C.sort(void 0)})),A=m((function(){C.sort(null)})),S=v("sort"),B=!m((function(){if(x)return x<70;if(!(h&&h>3)){if(_)return!0;if(w)return w<603;var code,e,t,n,r="";for(code=65;code<76;code++){switch(e=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:t=3;break;case 68:case 71:t=4;break;default:t=2}for(n=0;n<47;n++)C.push({k:e+n,v:t})}for(C.sort((function(a,b){return b.v-a.v})),n=0;n<C.length;n++)e=C[n].k.charAt(0),r.charAt(r.length-1)!==e&&(r+=e);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:k||!A||!S||!B},{sort:function(e){void 0!==e&&o(e);var t=c(this);if(B)return void 0===e?y.call(t):y.call(t,e);var n,r,m=[],v=l(t.length);for(r=0;r<v;r++)r in t&&m.push(t[r]);for(n=(m=d(m,function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:f(t)>f(n)?1:-1}}(e))).length,r=0;r<n;)t[r]=m[r++];for(;r<v;)delete t[r++];return t}})},366:function(e,t){var n=Math.floor,r=function(e,t){var l=e.length,f=n(l/2);return l<8?o(e,t):c(r(e.slice(0,f),t),r(e.slice(f),t),t)},o=function(e,t){for(var element,n,r=e.length,i=1;i<r;){for(n=i,element=e[i];n&&t(e[n-1],element)>0;)e[n]=e[--n];n!==i++&&(e[n]=element)}return e},c=function(e,t,n){for(var r=e.length,o=t.length,c=0,l=0,f=[];c<r||l<o;)c<r&&l<o?f.push(n(e[c],t[l])<=0?e[c++]:t[l++]):f.push(c<r?e[c++]:t[l++]);return f};e.exports=r},367:function(e,t,n){var r=n(56).match(/firefox\/(\d+)/i);e.exports=!!r&&+r[1]},368:function(e,t,n){var r=n(56);e.exports=/MSIE|Trident/.test(r)},369:function(e,t,n){var r=n(56).match(/AppleWebKit\/(\d+)\./);e.exports=!!r&&+r[1]},370:function(e,t,n){n(373)},373:function(e,t,n){"use strict";var r=n(4),o=n(18),c=n(111),l=n(8),f=n(112),m=n(234),d=n(3),v=n(24),h=d("replace"),_=RegExp.prototype,x=Math.max,w=function(e,t,n){return n>e.length?-1:""===t?n:e.indexOf(t,n)};r({target:"String",proto:!0},{replaceAll:function(e,t){var n,r,d,C,y,k,A,S,B=o(this),E=0,J=0,O="";if(null!=e){if((n=c(e))&&!~l(o("flags"in _?e.flags:f.call(e))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(r=e[h]))return r.call(e,B,t);if(v&&n)return l(B).replace(e,t)}for(d=l(B),C=l(e),(y="function"==typeof t)||(t=l(t)),k=C.length,A=x(1,k),E=w(d,C,0);-1!==E;)S=y?l(t(C,E,d)):m(C,d,E,[],void 0,t),O+=d.slice(J,E)+S,J=E+k,E=w(d,C,E+A);return J<d.length&&(O+=d.slice(J)),O}})},441:function(e,t,n){"use strict";n.r(t);n(370),n(46),n(43),n(44),n(365);var r=n(376),o=n(375),c=n(374),l={components:{PopOver:r.default},data:function(){return{group_data:[{title:"2.1 มีตุลาการ 16 คน ลงมติทั้งหมดเป็นผลบวกต่อรัฐบาลสายอำนาจเก่า และทหาร ขณะมีอำนาจ",data:[{name:"นายปัญญา ถนอมรอด"},{name:"นายอักขราทร จุฬารัตน"},{name:"หม่อมหลวงไกรฤกษ์ เกษมสันต์"},{name:"นายสมชาย พงษธา"},{name:"นายกิติศักดิ์ กิติคุณไพโรจน์"},{name:"นายธานิศ เกศวพิทักษ์"},{name:"นายจรัญ หัตถกรรม"},{name:"นายวิชัย ชื่นชมพูนุท"},{name:"นายวรวิทย์ กังศศิเทียม"},{name:"นายนครินทร์ เมฆไตรรัตน์"},{name:"นายปัญญา อุดชาชน"},{name:"นายอุดม สิทธิวิรัชธรรม"},{name:"นายวิรุฬห์ แสงเทียน"},{name:"นายจิรนิติ หะวานนท์"},{name:"นายนภดล เทพพิทักษ์"},{name:"นายบรรจงศักดิ์ วงศ์ปราชญ์"}]},{title:"2.2 มีตุลาการ 1 คน ลงมติทั้งหมดเป็นผลลบต่อรัฐบาลสายทักษิณ ชินวัตร ขณะมีอำนาจ",data:[{name:"นายวสันต์ สร้อยพิสุทธิ์"}]},{title:"2.3 มีตุลาการ 4 คน ลงมติทั้งหมดเป็นผลบวกต่อรัฐบาลสายอำนาจเก่า และทหาร ขณะมีอำนาจ และเป็นผลลบต่อรัฐบาลสายทักษิณ ชินวัตร ขณะมีอำนาจ",data:[{name:"นายนุรักษ์ มาประณีต"},{name:"นายจรัญ ภักดีธนากุล"},{name:"นายสุพจน์ ไข่มุกด์"},{name:"นายจรูญ อินทจาร"}]}]}},methods:{ReplaceString:function(e){return e.replaceAll(" ","_")},FilterJudgeByName:function(e){return c.filter((function(p){return p.name_surname_person===e}))[0]},PersonCase:function(e){var t=Object(o.default)(this.FilterJudgeByName(e.name));return this.SortPersonCaseNumber(t)},SortPersonCaseNumber:function(e){return e.map((function(e){return{name:e.name,list_case:e.list_case.sort((function(a,b){return b-a}))}}))}}},f=n(42),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"w-10/12 mx-auto md:max-w-[450px] mt-24",attrs:{id:"summaey-wrapper"}},[e._m(0),e._v(" "),r("div",{attrs:{id:"group-data"}},e._l(e.group_data,(function(t,o){return r("div",{key:o},[r("div",{staticClass:"mt-6 font-bold text-center B_04"},[e._v(e._s(t.title))]),e._v(" "),r("div",{staticClass:"flex flex-wrap justify-center mt-7"},e._l(t.data,(function(t,o){return r("div",{key:o,staticClass:"m-1 md:m-2"},[r("el-popover",{attrs:{placement:"bottom",width:"mobile"===e.$mq?200:240,trigger:"click"}},[r("PopOver",{attrs:{person:e.FilterJudgeByName(t.name),case_list_formated:e.PersonCase(t)}}),e._v(" "),r("img",{staticClass:"\n                w-[52px]\n                h-[52px]\n                md:w-[77px] md:h-[77px]\n                rounded-full\n                border border-black\n                mx-auto\n                cursor-pointer\n              ",attrs:{slot:"reference",src:n(377)("./"+e.ReplaceString(t.name)+".png")},slot:"reference"})],1)],1)})),0)])})),0)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"px-5 py-5 text-center border border-black B_04 bg-tableHead",attrs:{id:"wrapper"}},[n("div",{staticClass:"font-bold"},[e._v('\n      2. กลุ่ม "โหวตดีต่อรัฐบาลสายอำนาจเก่า และทหาร"\n    ')]),e._v(" "),n("div",[e._v("\n      ตั้งแต่ปี พ.ศ. 2549 - ปัจจุบัน สามารถแบ่งประเภท"),n("span",{staticClass:"whitespace-nowrap"},[e._v("การลงมติ")]),e._v("ของตุลาการ ได้ 3 ประเภท\n    ")])])}],!1,null,"2af7506c",null);t.default=component.exports}}]);