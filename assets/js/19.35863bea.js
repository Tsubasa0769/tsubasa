(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{469:function(t,e,i){},517:function(t,e,i){"use strict";i(469)},542:function(t,e,i){"use strict";i.r(e);i(227);var n=null,s={name:"Luckdraw1",data:function(){return{activeIndex:null}},created:function(){this.lottery={running:!1,circle:5,speed:200,lastCircle:5,timer:null,count:0}},methods:{init:function(){this.lottery.running||(this.lottery={running:!1,circle:5,speed:200,lastCircle:3,timer:null,count:0},this.itemsEle=this.$refs.item,n=this.getRandom(0,this.itemsEle.length-1),console.log(n),this.lottery.running=!0,this.run())},run:function(){null===this.activeIndex?this.activeIndex=0:this.activeIndex++,this.lottery.count++,this.lottery.count>3&&this.lottery.circle>0&&(this.lottery.speed=50),this.activeIndex>=this.itemsEle.length&&(this.activeIndex=0,this.lottery.circle--),this.lottery.timer=setTimeout(this.run,this.lottery.speed),this.lottery.circle<=0&&n===this.activeIndex&&(this.lottery.speed=500,this.lottery.lastCircle--,0===this.lottery.lastCircle&&(clearTimeout(this.lottery.timer),this.lottery.running=!1,this.congratulate()))},congratulate:function(){var t=this;setTimeout((function(){t.$message.success("恭喜".concat(n+1,"号这个逼"))}))},getRandom:function(t,e){return Math.floor(Math.random()*(e-t+1))+t}}},l=(i(517),i(40)),r=Object(l.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"luckdraw-view display-container"},[i("ul",{staticClass:"lottery__list"},t._l(7,(function(e){return i("li",{key:e,ref:"item",refInFor:!0,staticClass:"item",class:{active:t.activeIndex===e-1}},[t._v("\n      "+t._s(e)+"\n    ")])})),0),t._v(" "),i("el-button",{staticClass:"lottery__btn",attrs:{type:"primary"},on:{click:t.init}},[t._v("\n    抽奖\n  ")])],1)}),[],!1,null,"76e7ce10",null);e.default=r.exports}}]);