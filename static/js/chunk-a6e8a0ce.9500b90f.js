(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a6e8a0ce","chunk-459850fb"],{"4aa1":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"Video-container"}},[e("a-tabs",{attrs:{type:"card"}},[e("a-tab-pane",{key:"1",attrs:{tab:"视频"}},[e("h3",[t._v("推荐视频")]),e("div",{staticClass:"rec_content"},t._l(t.recommendData.datas,(function(a){return e("div",{key:a.id,staticClass:"rec_list"},[e("img",{attrs:{src:a.data.coverUrl,alt:"",title:"点击播放"},on:{click:function(e){return t.showVideo(a.data.vid)}}}),e("span",{staticClass:"title"},[t._v(t._s(a.data.title))])])})),0),e("h3",[t._v("全部视频")]),e("div",{staticClass:"rec_content"},t._l(t.allData.datas,(function(a){return e("div",{key:a.id,staticClass:"rec_list"},[e("img",{attrs:{src:a.data.coverUrl,alt:"",title:"点击播放"},on:{click:function(e){return t.showVideo(a.data.vid)}}}),e("span",{staticClass:"title"},[t._v(t._s(a.data.title))])])})),0)]),e("a-tab-pane",{key:"2",attrs:{tab:"MV"}},[e("MV")],1)],1),e("a-modal",{attrs:{"mask-closable":!1,closable:!1,title:"播放",width:"800px"},model:{value:t.playModal,callback:function(a){t.playModal=a},expression:"playModal"}},[e("video",{ref:"video",staticStyle:{width:"100%"},attrs:{src:t.VideoData.url,controls:""}}),t._v(" "+t._s(t.VideoData.r)+"P "),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("a-button",{on:{click:t.closeModal}},[t._v("确定")])],1)])],1)},i=[],s=e("15a9"),c=e("b775");function r(){return Object(c["a"])({url:"/video/timeline/recommend",method:"GET"})}function o(){return Object(c["a"])({url:"/video/timeline/all",method:"GET"})}function l(t){return Object(c["a"])({url:"/video/url",method:"GET",params:{id:t}})}var u=e("7736"),d=e("7ab0"),v={name:"Video",components:{MV:d["default"]},data:function(){return{recommendData:{},allData:{},playModal:!1,VideoData:{}}},created:function(){this.getRecommendVideo(),this.getVideoAllList()},methods:Object(s["a"])(Object(s["a"])({},Object(u["b"])(["playBtnAction"])),{},{getRecommendVideo:function(){var t=this;r().then((function(a){t.recommendData=a}))},getVideoAllList:function(){var t=this;o().then((function(a){t.allData=a}))},showVideo:function(t){this.playBtnAction(!1),this.getVideoUrl(t),this.playModal=!0},closeModal:function(){this.$refs.video.pause(),this.playModal=!1},getVideoUrl:function(t){var a=this;l(t).then((function(t){a.VideoData=t.urls[0]}))}})},m=v,f=(e("db32"),e("5d22")),h=Object(f["a"])(m,n,i,!1,null,null,null);a["default"]=h.exports},"66a7":function(t,a,e){},"7ab0":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"mv-container"}},[t.isSpin?e("a-spin",{staticClass:"example",attrs:{tip:"努力加载中...",size:"large",spinning:t.isSpin}}):e("div",[e("div",{staticClass:"header_list"},[e("span",{staticClass:"title"},[t._v("地区：")]),e("div",{staticClass:"com_content"},t._l(t.areaSelection,(function(a,n){return e("span",{key:n,staticClass:"list",class:{isActive:t.areaNum===n},on:{click:function(e){return t.areaChange(a,n)}}},[t._v(" "+t._s(a.name)+" ")])})),0)]),e("div",{staticClass:"mv_content"},t._l(t.newMvData,(function(a){return e("div",{key:a.id,staticClass:"list"},[e("img",{attrs:{src:a.cover,alt:"加载失败"},on:{click:function(e){return t.toPlayMvDetails(a)}}}),e("span",[t._v(t._s(a.name))]),e("span",[t._v(t._s(a.artistName))]),e("span",{staticClass:"count"},[e("a-icon",{attrs:{type:"caret-right"}}),t._v(" "+t._s(a.playCount)+" ")],1)])})),0)])],1)},i=[],s=(e("425f"),e("d922")),c={name:"Mv",data:function(){return{isSpin:!1,pageSize:20,areaSelection:[{name:"全部"},{name:"内地"},{name:"港台"},{name:"欧美"},{name:"日本"},{name:"韩国"}],listData:{area:"",limit:50},newMvData:[],areaNum:0}},created:function(){this.getFirstMv()},methods:{getFirstMv:function(){var t=this;this.isSpin=!0,Object(s["a"])(this.listData).then((function(a){t.newMvData=a.data,t.isSpin=!1})).catch((function(){t.isSpin=!1}))},toPlayMvDetails:function(t){this.$router.push({path:"/PlayMvDetails",query:{id:t.id}})},areaChange:function(t,a){this.listData.area=t.name,this.areaNum=a,"全部"===t.name&&(this.listData.area=""),this.getFirstMv()}}},r=c,o=(e("a4cd"),e("5d22")),l=Object(o["a"])(r,n,i,!1,null,null,null);a["default"]=l.exports},a4cd:function(t,a,e){"use strict";e("66a7")},ac4b:function(t,a,e){},d922:function(t,a,e){"use strict";e.d(a,"c",(function(){return i})),e.d(a,"b",(function(){return s})),e.d(a,"d",(function(){return c})),e.d(a,"a",(function(){return r}));var n=e("b775");function i(t){return Object(n["a"])({url:"/mv/url",method:"GET",params:t})}function s(t){return Object(n["a"])({url:"/mv/detail",method:"GET",params:{mvid:t}})}function c(){return Object(n["a"])({url:"/personalized/mv",method:"GET"})}function r(t){return Object(n["a"])({url:"/mv/first",method:"GET",params:t})}},db32:function(t,a,e){"use strict";e("ac4b")}}]);