webpackJsonp([1],{"+skl":function(e,t){},"/NAZ":function(e,t,a){var s=a("VU/8")(a("ne5N"),a("1LZN"),null,null);e.exports=s.exports},"/dCH":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},n=a("/NAZ"),r=function(e){return e&&e.__esModule?e:{default:e}}(n),u=a("NYxO");t.default={name:"ThreadSection",components:{Thread:r.default},computed:s({},(0,u.mapGetters)(["threads","currentThread"]),{unreadCount:function(){var e=this.threads;return Object.keys(e).reduce(function(t,a){return e[a].lastMessage.isRead?t:t+1},0)}}),methods:{switchThread:function(e){this.$store.dispatch("switchThread",{id:e})}}}},0:function(e,t){},"0n/d":function(e,t){},"1LZN":function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"thread-list-item",class:{active:e.active},on:{click:function(t){e.$emit("switch-thread",e.thread.id)}}},[a("h5",{staticClass:"thread-name"},[e._v(e._s(e.thread.name))]),e._v(" "),a("div",{staticClass:"thread-time"},[e._v("\n    "+e._s(e._f("time")(e.thread.lastMessage.timestamp))+"\n  ")]),e._v(" "),a("div",{staticClass:"thread-last-message"},[e._v("\n    "+e._s(e.thread.lastMessage.text)+"\n  ")])])},staticRenderFns:[]}},"Du/2":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SWITCH_THREAD="SWITCH_THREAD",t.RECEIVE_ALL="RECEIVE_ALL",t.RECEIVE_MESSAGE="RECEIVE_MESSAGE"},EWfp:function(e,t,a){a("0n/d");var s=a("VU/8")(a("EZYi"),a("I01E"),null,null);e.exports=s.exports},EZYi:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a("r3zk"),r=s(n),u=a("ZiNS"),i=s(u);t.default={name:"App",components:{ThreadSection:r.default,MessageSection:i.default},data:function(){return{modal1:!0,formItem:{name:""}}},methods:{ok:function(){console.log("ok")},cancel:function(){}}}},I01E:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"chatapp"},[a("thread-section"),e._v(" "),a("message-section"),e._v(" "),a("Modal",{attrs:{title:"请输入你的昵称"},on:{"on-ok":e.ok,"on-cancel":e.cancel},model:{value:e.modal1,callback:function(t){e.modal1=t},expression:"modal1"}},[a("Form",{attrs:{model:e.formItem,"label-position":"right","label-width":80}},[a("FormItem",{attrs:{label:"名称"}},[a("Input",{attrs:{placeholder:"请输入"},model:{value:e.formItem.name,callback:function(t){e.formItem.name=t},expression:"formItem.name"}})],1)],1)],1)],1)},staticRenderFns:[]}},IcnI:function(e,t,a){"use strict";function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a("7+uW"),u=n(r),i=a("NYxO"),o=n(i),c=a("UjVw"),l=s(c),d=a("mUbh"),f=s(d),m=a("ukYY"),h=n(m);u.default.use(o.default);var _={currentThreadID:null,threads:{},messages:{}};t.default=new o.default.Store({state:_,getters:l,actions:f,mutations:h.default})},NHnr:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var n=a("7+uW"),r=s(n),u=a("NYxO"),i=s(u),o=a("EWfp"),c=s(o);a("hnHT"),a("+skl");var l=a("BTaQ"),d=s(l),f=a("IcnI"),m=s(f),h=a("mUbh");r.default.use(i.default),r.default.use(d.default),r.default.filter("time",function(e){return new Date(e).toLocaleTimeString()}),new r.default({el:"#app",render:function(e){return e(c.default)}}),(0,h.getAllMessages)(m.default)},U7zJ:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"message-list-item"},[a("h5",{staticClass:"message-author-name"},[e._v(e._s(e.message.authorName))]),e._v(" "),a("div",{staticClass:"message-time"},[e._v("\n    "+e._s(e._f("time")(e.message.timestamp))+"\n  ")]),e._v(" "),a("div",{staticClass:"message-text"},[e._v(e._s(e.message.text))])])},staticRenderFns:[]}},UjVw:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=(t.threads=function(e){return e.threads},t.currentThread=function(e){return e.currentThreadID?e.threads[e.currentThreadID]:{}});t.currentMessages=function(e){var t=s(e);return t.messages?t.messages.map(function(t){return e.messages[t]}):[]}},UnMP:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"thread-section"},[a("div",{staticClass:"thread-count"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.unreadCount,expression:"unreadCount"}]},[e._v("\n      Unread threads: "+e._s(e.unreadCount)+"\n    ")])]),e._v(" "),a("ul",{staticClass:"thread-list"},e._l(e.threads,function(t){return a("thread",{key:t.id,attrs:{thread:t,active:t.id===e.currentThread.id},on:{"switch-thread":e.switchThread}})}))])},staticRenderFns:[]}},VkeE:function(e,t,a){"use strict";e.exports=[{id:"m_1",threadID:"t_1",threadName:"Vue-chatroom",authorName:"Bill",text:"Hey Jing, want to give a Flux talk at ForwardJS?",timestamp:Date.now()-99999},{id:"m_2",threadID:"t_1",threadName:"Vue-chatroom",authorName:"Bill",text:"Seems like a pretty cool conference.",timestamp:Date.now()-89999},{id:"m_3",threadID:"t_1",threadName:"Vue-chatroom",authorName:"Jing",text:"Sounds good.  Will they be serving dessert?",timestamp:Date.now()-79999}]},X1zg:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},n=a("yJ2L"),r=function(e){return e&&e.__esModule?e:{default:e}}(n),u=a("NYxO");t.default={name:"MessageSection",components:{Message:r.default},computed:s({},(0,u.mapGetters)({thread:"currentThread",messages:"currentMessages"}),{sortedMessages:function(){return this.messages.slice().sort(function(e,t){return e.timestamp-t.timestamp})}}),watch:{"thread.lastMessage":function(){var e=this;this.$nextTick(function(){var t=e.$refs.list;t.scrollTop=t.scrollHeight})}},methods:{sendMessage:function(e){var t=e.target.value;t.trim()&&(this.$store.dispatch("sendMessage",{text:t,thread:this.thread}),e.target.value="")}}}},ZiNS:function(e,t,a){var s=a("VU/8")(a("X1zg"),a("m8WK"),null,null);e.exports=s.exports},gyMJ:function(e,t,a){"use strict";function s(e){e(r)}function n(e,t){var a=e.text,s=e.thread,n=Date.now();t({id:"m_"+n,text:a,timestamp:n,threadID:s.id,threadName:s.name,authorName:"Evan"})}Object.defineProperty(t,"__esModule",{value:!0}),t.getAllMessages=s,t.createMessage=n;var r=a("VkeE")},hnHT:function(e,t,a){"use strict";var s=a("DmT9"),n=function(e){return e&&e.__esModule?e:{default:e}}(s);(0,n.default)()},m8WK:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"message-section"},[a("h3",{staticClass:"message-thread-heading"},[e._v(e._s(e.thread.name))]),e._v(" "),a("ul",{ref:"list",staticClass:"message-list"},e._l(e.sortedMessages,function(e){return a("message",{key:e.id,attrs:{message:e}})})),e._v(" "),a("textarea",{staticClass:"message-composer",on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.sendMessage(t)}}})])},staticRenderFns:[]}},mUbh:function(e,t,a){"use strict";function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}Object.defineProperty(t,"__esModule",{value:!0}),t.switchThread=t.sendMessage=t.getAllMessages=void 0;var n=a("gyMJ"),r=s(n),u=a("Du/2"),i=s(u);t.getAllMessages=function(e){var t=e.commit;r.getAllMessages(function(e){t(i.RECEIVE_ALL,{messages:e})})},t.sendMessage=function(e,t){var a=e.commit;r.createMessage(t,function(e){a(i.RECEIVE_MESSAGE,{message:e})})},t.switchThread=function(e,t){(0,e.commit)(i.SWITCH_THREAD,t)}},ne5N:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Thread",props:{thread:Object,active:Boolean}}},r3zk:function(e,t,a){var s=a("VU/8")(a("/dCH"),a("UnMP"),null,null);e.exports=s.exports},ukYY:function(e,t,a){"use strict";function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t,a){c.default.set(e.threads,t,{id:t,name:a,messages:[],lastMessage:null})}function r(e,t){t.isRead=t.threadID===e.currentThreadID;var a=e.threads[t.threadID];a.messages.some(function(e){return e===t.id})||(a.messages.push(t.id),a.lastMessage=t),c.default.set(e.messages,t.id,t)}function u(e,t){e.currentThreadID=t,e.threads[t],e.threads[t].lastMessage.isRead=!0}Object.defineProperty(t,"__esModule",{value:!0});var i,o=a("7+uW"),c=function(e){return e&&e.__esModule?e:{default:e}}(o),l=a("Du/2"),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(l);t.default=(i={},s(i,d.RECEIVE_ALL,function(e,t){var a=t.messages,s=void 0;a.forEach(function(t){e.threads[t.threadID]||n(e,t.threadID,t.threadName),(!s||t.timestamp>s.timestamp)&&(s=t),r(e,t)}),u(e,s.threadID)}),s(i,d.RECEIVE_MESSAGE,function(e,t){r(e,t.message)}),s(i,d.SWITCH_THREAD,function(e,t){u(e,t.id)}),i)},vaj8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Message",props:{message:Object}}},yJ2L:function(e,t,a){var s=a("VU/8")(a("vaj8"),a("U7zJ"),null,null);e.exports=s.exports}},["NHnr"]);
//# sourceMappingURL=app.3429374cf941f57ec9a9.js.map