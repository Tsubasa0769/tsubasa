(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{433:function(e,t,s){"use strict";s.d(t,"a",(function(){return i}));var i={props:{knowDisplay:{type:Boolean,default:!1},displayType:{type:String,default:""}}}},460:function(e,t,s){},505:function(e,t,s){"use strict";s(460)},533:function(e,t,s){"use strict";s.r(t);s(228);var i={name:"ResizeSwitchPicture",mixins:[s(433).a],data:function(){return this.isMove=!1,this.srcX=0,this.minWidth=15,this.maxWidth=0,{}},methods:{handleMouseDown:function(e){window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("mouseup",this.handleMouseUp),this.isMove=!0,this.maxWidth=this.$refs.outer.clientWidth,"touchstart"===e.type?(this.srcX=e.touches[0].pageX,window.document.documentElement.style.overflow="hidden"):this.srcX=e.pageX,this.srcW=parseInt(window.getComputedStyle(this.$refs.inner,null).width)},handleMouseMove:function(e){if(this.isMove){var t=0;t="touchmove"===e.type?e.touches[0].pageX-this.srcX:e.pageX-this.srcX;var s=this.srcW+t;s<=this.minWidth&&(s=this.minWidth),s>=this.maxWidth&&(s=this.maxWidth),this.$refs.inner.style.width=s+"px"}},handleMouseUp:function(){this.isMove=!1,window.removeEventListener("mouseup",this.handleMouseUp),window.removeEventListener("mousemove",this.handleMouseMove),window.document.documentElement.style.overflow="auto"}}},n=(s(505),s(40)),o=Object(n.a)(i,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"display-container"},[s("p",{directives:[{name:"show",rawName:"v-show",value:e.knowDisplay,expression:"knowDisplay"}],staticClass:"bg-knowledge"},[e._v("\n    背景知识："),s("img",{staticClass:"point_right",attrs:{src:e.$withBase("/images/point_right.png"),alt:""}}),e._v(" "),s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/resize",target:"_blank"}},[e._v("\n      resize\n    ")])]),e._v(" "),"display1"===e.displayType?s("div",{staticClass:"display-item"},[e._m(0)]):e._e(),e._v(" "),"display2"===e.displayType?s("div",{staticClass:"display-item"},[s("div",{ref:"outer",staticClass:"g-outer"},[s("div",{ref:"inner",staticClass:"g-inner"},[s("div",{staticClass:"inner-resize",on:{mousedown:e.handleMouseDown,touchstart:e.handleMouseDown,touchmove:function(t){return t.stopPropagation(),e.handleMouseMove.apply(null,arguments)},touchend:function(t){return t.stopPropagation(),e.handleMouseUp.apply(null,arguments)}}},[e._v("\n          ↔\n        ")])])])]):e._e()])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"picA"},[t("div",{staticClass:"picB"},[t("div",{staticClass:"resizeElement",attrs:{readonly:""}})])])}],!1,null,"085634d9",null);t.default=o.exports}}]);