(window.webpackJsonp=window.webpackJsonp||[]).push([[10,9],{365:function(t,e,r){"use strict";var n=r(4),o=r(75),c=r(21),l=r(12),f=r(8),d=r(5),m=r(366),v=r(168),h=r(367),x=r(368),_=r(74),w=r(369),C=[],y=C.sort,k=d((function(){C.sort(void 0)})),A=d((function(){C.sort(null)})),S=v("sort"),E=!d((function(){if(_)return _<70;if(!(h&&h>3)){if(x)return!0;if(w)return w<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)C.push({k:t+r,v:e})}for(C.sort((function(a,b){return b.v-a.v})),r=0;r<C.length;r++)t=C[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:k||!A||!S||!E},{sort:function(t){void 0!==t&&o(t);var e=c(this);if(E)return void 0===t?y.call(e):y.call(e,t);var r,n,d=[],v=l(e.length);for(n=0;n<v;n++)n in e&&d.push(e[n]);for(r=(d=m(d,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:f(e)>f(r)?1:-1}}(t))).length,n=0;n<r;)e[n]=d[n++];for(;n<v;)delete e[n++];return e}})},366:function(t,e){var r=Math.floor,n=function(t,e){var l=t.length,f=r(l/2);return l<8?o(t,e):c(n(t.slice(0,f),e),n(t.slice(f),e),e)},o=function(t,e){for(var element,r,n=t.length,i=1;i<n;){for(r=i,element=t[i];r&&e(t[r-1],element)>0;)t[r]=t[--r];r!==i++&&(t[r]=element)}return t},c=function(t,e,r){for(var n=t.length,o=e.length,c=0,l=0,f=[];c<n||l<o;)c<n&&l<o?f.push(r(t[c],e[l])<=0?t[c++]:e[l++]):f.push(c<n?t[c++]:e[l++]);return f};t.exports=n},367:function(t,e,r){var n=r(56).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},368:function(t,e,r){var n=r(56);t.exports=/MSIE|Trident/.test(n)},369:function(t,e,r){var n=r(56).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},370:function(t,e,r){r(373)},373:function(t,e,r){"use strict";var n=r(4),o=r(18),c=r(111),l=r(8),f=r(112),d=r(234),m=r(3),v=r(24),h=m("replace"),x=RegExp.prototype,_=Math.max,w=function(t,e,r){return r>t.length?-1:""===e?r:t.indexOf(e,r)};n({target:"String",proto:!0},{replaceAll:function(t,e){var r,n,m,C,y,k,A,S,E=o(this),J=0,O=0,P="";if(null!=t){if((r=c(t))&&!~l(o("flags"in x?t.flags:f.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(n=t[h]))return n.call(t,E,e);if(v&&r)return l(E).replace(t,e)}for(m=l(E),C=l(t),(y="function"==typeof e)||(e=l(e)),k=C.length,A=_(1,k),J=w(m,C,0);-1!==J;)S=y?l(e(C,J,m)):d(C,m,J,[],void 0,e),P+=m.slice(O,J)+S,O=J+k,J=w(m,C,J+A);return O<m.length&&(P+=m.slice(O)),P}})},440:function(t,e,r){"use strict";r.r(e);r(370),r(46),r(43),r(44),r(365);var n=r(376),o=r(375),c=r(374),l={components:{PopOver:n.default},data:function(){return{data:[{name:"นายกระมล ทองธรรมชาติ"},{name:"นายมานิต วิทยาเต็ม"},{name:"นายสุธี สุทธิสมบูรณ์"},{name:"พลตำรวจเอกสุวรรณ สุวรรณเวโช"},{name:"นายผัน จันทรปาน"},{name:"นายศักดิ์ เตชาชาญ"}]}},methods:{ReplaceString:function(t){return t.replaceAll(" ","_")},FilterJudgeByName:function(t){return c.filter((function(p){return p.name_surname_person===t}))[0]},PersonCase:function(t){var e=Object(o.default)(this.FilterJudgeByName(t.name));return this.SortPersonCaseNumber(e)},SortPersonCaseNumber:function(t){return t.map((function(t){return{name:t.name,list_case:t.list_case.sort((function(a,b){return b-a}))}}))}}},f=r(42),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-10/12 mx-auto md:max-w-[450px]",attrs:{id:"summary-group1-wrapper"}},[t._m(0),t._v(" "),n("div",{staticClass:"flex flex-wrap justify-center mt-7",attrs:{id:"group-img"}},t._l(t.data,(function(e,o){return n("div",{key:o,staticClass:"m-1 md:m-2"},[n("el-popover",{attrs:{placement:"bottom",width:"mobile"===t.$mq?210:260,trigger:"click"}},[n("PopOver",{attrs:{person:t.FilterJudgeByName(e.name),case_list_formated:t.PersonCase(e)}}),t._v(" "),n("img",{staticClass:"\n            w-[52px]\n            h-[52px]\n            md:w-[77px] md:h-[77px]\n            rounded-full\n            border border-black\n            mx-auto\n            cursor-pointer\n          ",attrs:{slot:"reference",src:r(377)("./"+t.ReplaceString(e.name)+".png")},slot:"reference"})],1)],1)})),0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-5 py-5 text-center border border-black B_04 bg-tableHead",attrs:{id:"wrapper"}},[r("div",{staticClass:"font-bold"},[t._v('1. กลุ่ม "โหวตดีต่อรัฐบาลสายทักษิณ ชินวัตร"')]),t._v(" "),r("div",[t._v("\n      ตั้งแต่ปี พ.ศ. 2540 - 2549 มีตุลาการ 6 คน\n      ลงมติทั้งหมดเป็นผลบวกต่อรัฐบาลสายทักษิณ ชินวัตร ที่มีอำนาจในช่วงนั้น\n    ")])])}],!1,null,"fbda8a10",null);e.default=component.exports}}]);