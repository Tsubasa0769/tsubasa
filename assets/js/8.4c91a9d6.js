(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{433:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var s={props:{knowDisplay:{type:Boolean,default:!1},displayType:{type:String,default:""}}}},457:function(e,t,a){},499:function(e,t,a){"use strict";a(457)},524:function(e,t,a){"use strict";a.r(t);var s={name:"InnerRounding",mixins:[a(433).a],data:function(){return{checked:!0}},mounted:function(){console.log(this.displayType)}},i=(a(499),a(40)),c=Object(i.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"display-container"},[a("p",{directives:[{name:"show",rawName:"v-show",value:e.knowDisplay,expression:"knowDisplay"}],staticClass:"bg-knowledge"},[e._v("\n    背景知识："),a("img",{staticClass:"point_right",attrs:{src:e.$withBase("/images/point_right.png"),alt:""}}),e._v(" "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow",target:"_blank"}},[e._v("\n      box-shadow\n    ")]),e._v("\n    ,\n    "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/outline",target:"_blank"}},[e._v("\n      outline\n    ")])]),e._v(" "),"display1"===e.displayType?a("div",{staticClass:"display1 display-item"},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{type:"checkbox",id:"pb",checked:""},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(t){var a=e.checked,s=t.target,i=!!s.checked;if(Array.isArray(a)){var c=e._i(a,null);s.checked?c<0&&(e.checked=a.concat([null])):c>-1&&(e.checked=a.slice(0,c).concat(a.slice(c+1)))}else e.checked=i}}}),e._v(" "),a("label",{attrs:{for:"pb"}},[e._v("box-shadow")])]),e._v(" "),a("div",{staticClass:"content",class:{active:e.checked}},[e._v("哈哈哈")])]):e._e(),e._v(" "),"display2"===e.displayType?a("div",{staticClass:"display2 display-item"},[a("div",{staticClass:"box"})]):e._e()])}),[],!1,null,"5bde4f70",null);t.default=c.exports}}]);