(window.webpackJsonp=window.webpackJsonp||[]).push([[28,5],{603:function(t,e,n){var content=n(632);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("25a5590f",content,!0,{sourceMap:!1})},631:function(t,e,n){"use strict";n(603)},632:function(t,e,n){var r=n(40)(!1);r.push([t.i,'.post-preview[data-v-d60073aa]{min-height:600px;max-height:auto;display:block;position:relative;width:300px;margin:0 10px 100px;box-shadow:0 8px 24px rgba(149,157,165,.2)}.post-preview-title[data-v-d60073aa]{font-size:24px;color:#3e4b51;padding:30px 20px 0;text-align:center}.post-preview-thumbnail[data-v-d60073aa]{background-position:50%;background-size:cover;width:100%;min-height:350px;bottom:0;position:absolute}.post-preview-text[data-v-d60073aa]{width:100%;height:auto;padding:0 20px;margin-top:20px}.post-preview-text-button[data-v-d60073aa]{width:100%;height:auto;margin-bottom:20px;padding:20px;color:#3e4b51;text-transform:uppercase;text-decoration:underline}.post-preview-text-button[data-v-d60073aa]:hover{color:#000}.post-preview-text>ul li[data-v-d60073aa]:before{content:"+"}hr[data-v-d60073aa]{margin-top:20px}a[data-v-d60073aa]{text-decoration:none;color:#000}p[data-v-d60073aa]{white-space:pre-line}@media (min-width:768px){.post-preview-text[data-v-d60073aa]{font-size:18px}.post-preview[data-v-d60073aa]{width:500px}}@media (min-width:1300px){.post-preview[data-v-d60073aa]{width:500px}}',""]),t.exports=r},658:function(t,e,n){var content=n(689);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("09b010ca",content,!0,{sourceMap:!1})},669:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,required:!0},excerpt:{type:String,required:!0},thumbnailImage:{type:String,required:!0},id:{type:String,required:!0}}},o=(n(631),n(18)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"post-preview"},[n("nuxt-link",{attrs:{to:"/nieuws/"+t.id}},[n("div",{staticClass:"title"},[n("h1",{staticClass:"post-preview-title"},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"post-preview-content"},[n("section",{staticClass:"post-preview-text",domProps:{innerHTML:t._s(t.$options.filters.markdown(t.excerpt))}})]),t._v(" "),n("div",{staticClass:"post-preview-thumbnail",style:{backgroundImage:"url("+t.thumbnailImage+")"}})])],1)}),[],!1,null,"d60073aa",null);e.default=component.exports},688:function(t,e,n){"use strict";n(658)},689:function(t,e,n){var r=n(40)(!1);r.push([t.i,".nieuwsbrief[data-v-75a8d2c8]{min-height:100vh;width:100vw;margin-bottom:100px}.container-top-border[data-v-75a8d2c8]{width:100vw;height:45px;background-color:#3e4b51}.nav-title[data-v-75a8d2c8]{height:45px;color:#fff;display:flex;align-items:center;justify-content:center}.nieuwsbrief-container-title[data-v-75a8d2c8]{font-size:36px;width:100%;text-align:center;color:#010000;white-space:pre-line;margin-top:20px}.content[data-v-75a8d2c8]{display:flex;align-items:center;justify-content:center}.nieuwsbrief-container-content[data-v-75a8d2c8]{width:90%;height:auto;font-size:16px;padding:20px;text-align:center}.post-preview-holder[data-v-75a8d2c8]{max-width:80%;display:flex;justify-content:center;align-items:center;margin:30px auto 0;flex-wrap:wrap}@media (min-width:1390px){.container-top-border[data-v-75a8d2c8],.nav-title[data-v-75a8d2c8]{height:55px}}@media (min-width:1800px){.container-top-border[data-v-75a8d2c8],.nav-title[data-v-75a8d2c8]{height:65px}}",""]),t.exports=r},707:function(t,e,n){"use strict";n.r(e);n(7);var r={layout:"headerbar",components:{PostPreview:n(669).default},asyncData:function(t){return t.app.$storyapi.get("cdn/stories",{version:"published",starts_with:"nieuws/"}).then((function(t){return console.log(t),{posts:t.data.stories.map((function(t){return{id:t.slug,title:t.content.title,previewText:t.content.summary,thumbnailUrl:t.content.image}}))}}))}},o=(n(688),n(18)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"nieuwsbrief"},[t._m(0),t._v(" "),n("section",{staticClass:"post-preview-holder"},t._l(t.posts,(function(t){return n("PostPreview",{key:t.id,attrs:{title:t.title,excerpt:t.previewText,thumbnailImage:t.thumbnailUrl,id:t.id}})})),1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nieuwsbrief-container"},[n("h1",{staticClass:"nieuwsbrief-container-title"},[t._v("D&Ø Magazine")]),t._v(" "),n("div",{staticClass:"content"})])}],!1,null,"75a8d2c8",null);e.default=component.exports}}]);