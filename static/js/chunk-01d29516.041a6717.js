(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01d29516"],{"0a47":function(t,a,n){"use strict";n("c8f2")},"100c":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"rankList-container"}},[t.isSpin?n("div",{staticClass:"example"},[n("a-spin",{attrs:{tip:"努力加载中...",size:"large"}})],1):n("div",[n("div",{staticClass:"top_content"},[n("img",{attrs:{src:t.rankData.coverImgUrl,alt:"图片"}}),n("div",{staticClass:"top_r"},[n("div",{staticClass:"r_header"},[n("span",{staticClass:"name"},[t._v(t._s(t.rankData.name))]),n("div",{staticClass:"r_header_count"},[n("div",{staticClass:"header_r"},[n("span",[t._v("歌曲数")]),n("span",[t._v(t._s(t.rankData.trackCount))])]),n("div",{staticClass:"header_r"},[n("span",[t._v("播放数")]),n("span",[t._v(t._s(t.rankData.playCount))])])])]),n("div",{staticClass:"r_top"},[n("img",{attrs:{src:t.rankData.creator.avatarUrl,alt:""},on:{click:function(a){return t.toUserDetail(t.rankData.creator)}}}),n("span",{staticClass:"name",on:{click:function(a){return t.toUserDetail(t.rankData.creator)}}},[t._v(t._s(t.rankData.creator.nickname))]),n("span",[t._v("最近更新："+t._s(t._f("dateFormatIn")(t.rankData.trackUpdateTime)))])]),n("div",{staticClass:"r_content"},[n("a-button",[n("a-icon",{attrs:{type:"play-circle"}}),t._v(" 播放全部 ")],1),n("a-button",[n("a-icon",{attrs:{type:"folder-add"}}),t._v(" 收藏("+t._s(t.rankData.subscribedCount)+") ")],1),n("a-button",[n("a-icon",{attrs:{type:"share-alt"}}),t._v(" 分享("+t._s(t.rankData.shareCount)+") ")],1),n("a-button",[n("a-icon",{attrs:{type:"download"}}),t._v(" VIP下载 ")],1)],1),n("span",[t._v("简介："+t._s(t.rankData.description?t.rankData.description:"无"))])])]),n("a-tabs",{attrs:{"default-active-key":"1"},on:{change:t.tabChange}},[n("a-tab-pane",{key:"1",attrs:{tab:"歌曲列表"}},[n("a-table",{attrs:{columns:t.columns,"data-source":t.rankData.tracks,pagination:!1,"row-key":function(t,a){return a}},scopedSlots:t._u([{key:"name",fn:function(a,e){return n("a",{},[t._v(" "+t._s(a)+" "),0!==e.mv?n("a-icon",{staticStyle:{margin:"2px 0 0 5px",color:"red","font-size":"18px"},attrs:{type:"youtube",title:"MV"},on:{click:function(a){return t.playMv(e)}}}):t._e()],1)}},{key:"ar",fn:function(a){return n("a",{on:{click:function(n){return t.toSingerDetail(a[0])}}},[t._v(" "+t._s(a[0].name)+" ")])}},{key:"dt",fn:function(a){return n("a",{},[t._v(" "+t._s(t._f("dateFormatLr")(a))+" ")])}},{key:"action",fn:function(a,e){return n("span",{},[n("a-icon",{staticStyle:{"font-size":"20px","margin-right":"20px"},attrs:{type:"play-circle"},on:{click:function(a){return t.playSong(e)}}})],1)}}])})],1),n("a-tab-pane",{key:"2",attrs:{tab:"评论(99999)"}},[t._v(" 评论 ")]),n("a-tab-pane",{key:"3",attrs:{tab:"收藏者"}},[t._v(" 嘿 ")])],1)],1)])},r=[],i=(n("425f"),n("15a9")),s=n("c32a"),c=n("7736"),o=n("5f87"),u={name:"RankList",data:function(){return{isSpin:!1,rankData:[],total:100,columns:[{title:"歌曲",dataIndex:"name",key:"name",width:"150px",scopedSlots:{customRender:"name"}},{title:"歌手",dataIndex:"ar",key:"ar",width:"100px",scopedSlots:{customRender:"ar"}},{title:"时长",dataIndex:"dt",key:"dt",width:"100px",scopedSlots:{customRender:"dt"}},{title:"操作",dataIndex:"action",key:"action",width:"150px",scopedSlots:{customRender:"action"}}]}},created:function(){this.getPlayList()},methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["songIdAction"])),{},{getPlayList:function(){var t=this;this.isSpin=!0;var a=this.$route.query.id;Object(s["b"])(a).then((function(a){t.rankData=a.playlist,t.isSpin=!1})).catch((function(){t.isSpin=!1}))},toSingerDetail:function(t){this.$router.push({name:"SingerDetails",query:{id:t.id}})},toUserDetail:function(t){this.$router.push({path:"/UserDetails",query:{userId:t.userId}})},tabChange:function(){},playSong:function(t){this.songIdAction(t.id),this.playToAll()},playToAll:function(){for(var t=this.rankData.tracks,a=[],n=0;n<t.length;n++)a.push({name:t[n].name,id:t[n].id});Object(o["h"])(JSON.stringify(a))},playMv:function(t){this.$router.push({path:"/PlayMvDetails",query:{id:t.mv}})}})},l=u,d=(n("0a47"),n("5d22")),p=Object(d["a"])(l,e,r,!1,null,null,null);a["default"]=p.exports},c32a:function(t,a,n){"use strict";n.d(a,"a",(function(){return r})),n.d(a,"b",(function(){return i}));var e=n("b775");function r(t){return Object(e["a"])({url:"/personalized",method:"GET",data:t})}function i(t){return Object(e["a"])({url:"/playlist/detail?id="+t,method:"GET"})}},c8f2:function(t,a,n){}}]);