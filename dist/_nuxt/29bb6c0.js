(window.webpackJsonp=window.webpackJsonp||[]).push([[17,2],{581:function(t,e,n){var content=n(597);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("0eb49920",content,!0,{sourceMap:!1})},596:function(t,e,n){"use strict";n(581)},597:function(t,e,n){var r=n(43)(!1);r.push([t.i,".post-preview[data-v-76a2542b]{min-height:400px;display:block;width:100%;margin-bottom:100px}.post-preview-title[data-v-76a2542b]{font-size:24px;color:#3e4b51;padding:30px 20px 0;opacity:1%;margin-bottom:50px}.post-preview-thumbnail[data-v-76a2542b]{background-position:50%;background-size:cover;width:100%;min-height:350px}.post-preview-text[data-v-76a2542b]{width:100%;height:auto;padding:0 20px;margin-top:20px;opacity:1%}.post-preview-text-button[data-v-76a2542b]{width:100%;height:auto;margin-bottom:20px;padding:20px;color:#3e4b51;text-transform:uppercase;text-decoration:underline;opacity:1%}.post-preview-text-button[data-v-76a2542b]:hover{color:#000;opacity:1%}hr[data-v-76a2542b]{margin-top:20px}a[data-v-76a2542b]{text-decoration:none;color:#000}p[data-v-76a2542b]{white-space:pre-line}@media (min-width:768px){.post-preview-text[data-v-76a2542b]{font-size:18px}}@media (min-width:1300px){.post-preview[data-v-76a2542b]{width:100%}.post-preview-container[data-v-76a2542b]{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-template-rows:repeat(1,minmax(0,1fr))}.post-preview-thumbnail[data-v-76a2542b]{grid-column:3/span 2;grid-row:1/span 2;background-position:50%;background-size:cover;width:100%;height:100%}.post-preview-content[data-v-76a2542b]{grid-column:1/span 2;grid-row:1/span 2}}",""]),t.exports=r},612:function(t,e,n){var content=n(629);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(44).default)("9e0a4110",content,!0,{sourceMap:!1})},617:function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,required:!0},excerpt:{type:String,required:!0},thumbnailImage:{type:String,required:!0},id:{type:String,required:!0}}},o=(n(596),n(18)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"post-preview"},[n("div",{staticClass:"title"},[n("h1",{staticClass:"post-preview-title"},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"post-preview-container"},[n("div",{staticClass:"post-preview-thumbnail",style:{backgroundImage:"url("+t.thumbnailImage+")"}}),t._v(" "),n("div",{staticClass:"post-preview-content"},[n("p",{staticClass:"post-preview-text"},[t._v(t._s(t.excerpt))]),t._v(" "),n("nuxt-link",{attrs:{to:"/nieuws/"+t.id}},[n("p",{staticClass:"post-preview-text-button"},[t._v("Lees meer")])])],1)]),t._v(" "),n("hr")])}),[],!1,null,"76a2542b",null);e.default=component.exports},628:function(t,e,n){"use strict";n(612)},629:function(t,e,n){var r=n(43)(!1);r.push([t.i,".nieuwsbrief[data-v-c4ffa208]{min-height:110vh;width:100vw;margin-bottom:100px}.container-top-border[data-v-c4ffa208]{width:100vw;height:45px;background-color:#3e4b51}.nav-title[data-v-c4ffa208]{height:45px;color:#fff;display:flex;align-items:center;justify-content:center}.nieuwsbrief-container-title[data-v-c4ffa208]{font-size:36px;width:100%;text-align:center;color:#010000;white-space:pre-line;margin-top:20px}.content[data-v-c4ffa208]{display:flex;align-items:center;justify-content:center}.nieuwsbrief-container-content[data-v-c4ffa208]{width:90%;height:auto;font-size:16px;padding:20px;text-align:center}.post-preview-holder[data-v-c4ffa208]{width:90%;margin-left:auto;margin-right:auto}@media (min-width:1390px){.container-top-border[data-v-c4ffa208],.nav-title[data-v-c4ffa208]{height:55px}}@media (min-width:1800px){.container-top-border[data-v-c4ffa208],.nav-title[data-v-c4ffa208]{height:65px}}",""]),t.exports=r},640:function(t,e,n){"use strict";n.r(e);n(7);var r={layout:"headerbar",components:{PostPreview:n(617).default},asyncData:function(t){return t.app.$storyapi.get("cdn/stories",{version:"published",starts_with:"nieuws/"}).then((function(t){return console.log(t),{posts:t.data.stories.map((function(t){return{id:t.slug,title:t.content.title,previewText:t.content.summary,thumbnailUrl:t.content.image}}))}}))}},o=(n(628),n(18)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"nieuwsbrief"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("section",{staticClass:"post-preview-holder"},t._l(t.posts,(function(t){return n("PostPreview",{key:t.id,attrs:{title:t.title,excerpt:t.previewText,thumbnailImage:t.thumbnailUrl,id:t.id}})})),1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blok"},[n("div",{staticClass:"container-top-border"},[n("h4",{staticClass:"nav-title"},[t._v("Nieuws")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nieuwsbrief-container"},[n("h1",{staticClass:"nieuwsbrief-container-title"},[t._v("D&Ø Magazine")]),t._v(" "),n("div",{staticClass:"content"},[n("p",{staticClass:"nieuwsbrief-container-content"},[t._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")])])])}],!1,null,"c4ffa208",null);e.default=component.exports}}]);