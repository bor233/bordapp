(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8cc11dda"],{1229:function(t,e,n){t.exports=n.p+"img/111.9fbe85f6.jpg"},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new C(r||[]);return i._invoke=L(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=c;var u="suspendedStart",f="suspendedYield",h="executing",d="completed",v={};function p(){}function b(){}function m(){}var g={};g[i]=function(){return this};var y=Object.getPrototypeOf,w=y&&y(y(R([])));w&&w!==n&&r.call(w,i)&&(g=w);var _=m.prototype=p.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function k(t,e){function n(o,i,a,s){var c=l(t[o],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}var o;function i(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function L(t,e,n){var r=u;return function(o,i){if(r===h)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return j()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var s=E(a,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===u)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var c=l(t,e,n);if("normal"===c.type){if(r=n.done?d:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=d,n.method="throw",n.arg=c.arg)}}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function W(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(W,this),this.reset(!0)}function R(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){while(++o<t.length)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:j}}function j(){return{value:e,done:!0}}return b.prototype=_.constructor=m,m.constructor=b,m[s]=b.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},x(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new k(c(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(_),_[s]="Generator",_[i]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=R,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return s.type="throw",s.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;A(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:R(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},"9b94":function(t,e,n){"use strict";var r=n("f009"),o=n.n(r);o.a},d504:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("div",{staticClass:"site-content"},[n("div",{staticClass:"content-warp"},[n("div",{staticClass:"about-site about-info"},[n("section-title",[n("span",[t._v("❤")]),t._v("网站介绍")]),n("div",{staticClass:"info-card"},[t._m(0),n("p",[t._v("做一个dapp网站")]),null!==t.tronWeb?n("div",[n("p",[t._v("你好："+t._s(t.walletAddress))])]):t._e(),null===t.tronWeb?n("div",[n("el-button",{on:{click:t.linkWallet}},[t._v("连接钱包")])],1):t._e(),n("p",[t._v("简介有这么长。。。。。。。。。。。。。")]),n("p",[t._v("接下来。。")]),n("p",[t._v("路途遥远。。")]),n("p",[t._v("1.测试一个y智能合约")]),n("p",[t._v("2.一个未知的DAPP测试并上线")]),n("p",[t._v("3.研发一个区块链分布式项目")]),n("p",[t._v("4.区块链分布式程序节点测试")]),n("p",[t._v("5.区块链分布式项目智能合约研究")]),n("p",[t._v("6.区块链分布式项目对接打通波场")]),n("p",[t._v("7.【S.T.A.Y. (Delta Heavy Tribute)】")]),n("br"),t._m(1),n("br"),t._m(2)]),n("el-row",[n("el-button",[t._v("操作：")]),n("el-button",{attrs:{type:"primary"},on:{click:t.clickLinkWallet}},[t._v("获取钱包信息")]),n("el-button",{attrs:{type:"success"},on:{click:t.clickGetBalance}},[t._v("获取钱包余额")])],1),n("el-row",{staticStyle:{top:"20px"}},[n("el-button",[t._v("其他网站：")]),n("el-button",[n("a",{attrs:{href:"https://bor233.cn"}},[t._v("服务器主站")])]),n("el-button",[n("a",{attrs:{href:"https://index.bor233.cn"}},[t._v("几乎永久的主页")])])],1),n("el-dialog",{attrs:{title:"tronlink钱包主网和侧链信息",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("div",[t._v("钱包地址："+t._s(t.walletAddress))]),n("br"),n("div",[t._v(t._s(t.md))]),n("br"),n("div",[t._v(t._s(t.sd))]),n("br"),n("div",[t._v(t._s(t.ml))]),n("br"),n("div",[t._v(t._s(t.sl))]),n("br"),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)]),n("el-dialog",{attrs:{title:"钱包余额",visible:t.dialogVisible2,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible2=e}}},[n("div",[t._v(t._s(t.balance1))]),n("br"),n("div",[t._v(t._s(t.balance2))]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible2=!1}}},[t._v("确 定")])],1)]),n("div",{staticClass:"about-me about-info",staticStyle:{"margin-top":"60px"}},[n("section-title",{attrs:{id:"Guestbook"}},[n("span",[t._v("❤")]),t._v("给我留言")]),n("div",{staticClass:"info-card"},[n("div",{staticClass:"contactForm"},[t._m(3),t._m(4),n("div",{staticClass:"form-item"},[n("label"),n("button",{on:{click:t.open}},[t._v("提交")])])])])],1)],1)])])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[r("img",{attrs:{src:n("1229")}}),r("img")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"form-item"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"form-item"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-item"},[n("label",{attrs:{for:"mail"}},[t._v("邮箱")]),n("input",{staticClass:"v",attrs:{type:"email",name:"mail",id:"mail"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-item"},[n("label",{attrs:{for:"content"}},[t._v("内容")]),n("textarea",{staticClass:"v",attrs:{id:"content",name:"content"}})])}];n("96cf"),n("d3b7"),n("e6cf");function i(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(l){return void n(l)}s.done?e(c):Promise.resolve(c).then(r,o)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function s(t){i(a,r,o,s,c,"next",t)}function c(t){i(a,r,o,s,c,"throw",t)}s(void 0)}))}}var s=n("fdba"),c=(n("ed08"),{name:"index",data:function(){return{dialogVisible:!1,dialogVisible2:!1,tronlink:null,tronWeb:null,sunWeb:null,list:[],walletAddress:null,requestAccountsResponse:{code:0,message:""},ml:"",md:"",sl:"",sd:"",balance1:"",balance2:""}},components:{sectionTitle:s["a"]},methods:{linkWallet:function(){var t=this;return a(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=setInterval(a(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!window.tronWeb||!window.tronWeb.defaultAddress.base58){e.next=22;break}return clearInterval(n),e.next=4,window.tronLink.request({method:"tron_requestAccounts"});case 4:return t.requestAccountsResponse=e.sent,e.next=7,window.tronLink;case 7:return t.tronlink=e.sent,console.log(t.tronlink),e.next=11,t.tronlink.tronWeb;case 11:return t.tronWeb=e.sent,console.log(t.tronWeb),e.next=15,t.tronlink.sunWeb;case 15:t.sunWeb=e.sent,console.log(t.sunWeb),t.walletAddress=t.tronWeb.defaultAddress.base58,console.log(t.tronWeb.defaultAddress.base58),t.sunWeb.mainchain.trx.getBandwidth(t.walletAddress).then((function(e){console.log("主网带宽剩余："+e),t.md="主网带宽剩余："+e})),t.sunWeb.sidechain.trx.getBandwidth(t.walletAddress).then((function(e){console.log("侧链带宽剩余："+e),t.sd="侧链带宽剩余："+e})),t.sunWeb.mainchain.trx.getAccountResources(t.walletAddress).then((function(e){var n={"地址":t.walletAddress},r=e.EnergyUsed>0?e.EnergyUsed:0,o=e.EnergyLimit-r;console.log("主网能量剩余："+o),n["主网能量剩余"]=o,t.sunWeb.sidechain.trx.getAccountResources(t.walletAddress).then((function(e){var r=e.EnergyUsed>0?e.EnergyUsed:0,i=e.EnergyLimit-r;console.log("侧链能量剩余："+i),n["侧链能量剩余"]=i,console.log(n),t.ml="主网能量剩余："+o,t.sl="侧链能量剩余："+i}))}));case 22:case"end":return e.stop()}}),e)}))),1);case 1:case"end":return e.stop()}}),e)})))()},getBalance:function(){var t=this,e=setInterval(a(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!window.tronWeb||!window.tronWeb.defaultAddress.base58){n.next=25;break}return clearInterval(e),n.next=4,window.tronLink.request({method:"tron_requestAccounts"});case 4:return t.requestAccountsResponse=n.sent,n.next=7,window.tronLink;case 7:return t.tronlink=n.sent,console.log(t.tronlink),n.next=11,t.tronlink.tronWeb;case 11:return t.tronWeb=n.sent,n.next=14,t.tronlink.sunWeb;case 14:return t.sunWeb=n.sent,n.next=17,t.tronWeb.trx.getBalance();case 17:return r=n.sent,n.next=20,t.sunWeb.sidechain.trx.getBalance();case 20:o=n.sent,t.balance1="主网balance："+r,t.balance2="侧链balance："+o,console.log("主网balance：",t.balance1),console.log("侧链balance：",t.balance2);case 25:case"end":return n.stop()}}),n)}))),1)},clickGetBalance:function(){this.dialogVisible2=!0,this.getBalance()},clickLinkWallet:function(){this.dialogVisible=!0,this.linkWallet()},open:function(){var t=this;this.$alert("没有任何消息","糟糕！！！",{confirmButtonText:"确定",callback:function(e){t.$message({type:"info",message:"糟糕！！！"})}})},handleClose:function(t){this.$confirm("确认关闭？").then((function(e){t()})).catch((function(t){}))}},mounted:function(){}}),l=c,u=(n("9b94"),n("2877")),f=Object(u["a"])(l,r,o,!1,null,"9e9d4f40",null);e["default"]=f.exports},f009:function(t,e,n){}}]);
//# sourceMappingURL=chunk-8cc11dda.fdbebea9.js.map