(window.webpackJsonp=window.webpackJsonp||[]).push([[23,2],{594:function(t,e,o){var content=o(613);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("2794e93a",content,!0,{sourceMap:!1})},612:function(t,e,o){"use strict";o(594)},613:function(t,e,o){var n=o(40)(!1);n.push([t.i,".post-preview[data-v-663105ee]{width:350px;margin-bottom:50px;min-height:700px;position:relative;z-index:0}.post-preview[data-v-663105ee]:hover{box-shadow:0 8px 6px -6px #000}.post-preview-title[data-v-663105ee]{font-size:24px;color:#3e4b51;padding-top:30px;text-align:center}.post-preview-container[data-v-663105ee]{height:auto}.post-preview-thumbnail[data-v-663105ee]{background-position:50%;background-size:cover;width:350px;min-height:250px}.post-preview-text[data-v-663105ee]{width:100%;height:auto;margin-top:20px;padding:16px 20px 20px 30px;line-height:2.43;letter-spacing:.7px}.button-holder[data-v-663105ee]{display:flex;align-items:center;justify-content:center}.post-preview-button[data-v-663105ee]{background-color:#e0e0dd;border:none;font-size:16px;width:200px;height:40px;border-radius:20px;position:absolute;letter-spacing:1.3px;bottom:3%}.post-preview-button[data-v-663105ee]:hover{background-color:#2a393f;color:#fff}a[data-v-663105ee]{text-decoration:none;color:#000}p[data-v-663105ee]{white-space:pre-line}",""]),t.exports=n},648:function(t,e,o){var content=o(674);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(41).default)("20a48760",content,!0,{sourceMap:!1})},659:function(t,e,o){"use strict";o.r(e);var n={props:{title:{type:String,required:!0},excerpt:{type:String,required:!0},thumbnailImage:{type:String,required:!0},id:{type:String,required:!0}}},r=(o(612),o(18)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"post-preview"},[o("nuxt-link",{attrs:{to:"/boten/"+t.id}},[o("div",{staticClass:"post-preview-container"},[o("div",{staticClass:"post-preview-thumbnail",style:{backgroundImage:"url("+t.thumbnailImage+")"}}),t._v(" "),o("div",{staticClass:"title"},[o("h1",{staticClass:"post-preview-title"},[t._v(t._s(t.title))])]),t._v(" "),o("div",{staticClass:"post-preview-content"},[o("p",{staticClass:"post-preview-text"},[t._v(t._s(t.excerpt))])]),t._v(" "),o("div",{staticClass:"button-holder"},[o("button",{staticClass:"post-preview-button",attrs:{type:"button",name:"button"}},[t._v("Lees meer")])])])])],1)}),[],!1,null,"663105ee",null);e.default=component.exports},673:function(t,e,o){"use strict";o(648)},674:function(t,e,o){var n=o(40)(!1);n.push([t.i,".boten[data-v-6408b9a3]{width:100vw;min-height:100vh;position:relative;z-index:0}.test[data-v-6408b9a3]{width:90%;margin:0 auto}.title[data-v-6408b9a3]{text-align:center;font-size:30px;margin:15px 0;text-transform:uppercase}.post-preview-holder[data-v-6408b9a3]{width:auto;margin:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr))}@media (min-width:1400px){.test[data-v-6408b9a3]{width:80%}.title[data-v-6408b9a3]{display:flex;align-items:center;justify-content:center;margin-top:20px}}",""]),t.exports=n},697:function(t,e,o){"use strict";o.r(e);o(7);var n={layout:"headerbar",components:{BootPostPreview:o(659).default},asyncData:function(t){return t.app.$storyapi.get("cdn/stories",{version:"published",starts_with:"boten/"}).then((function(t){return console.log(t),{bootposts:t.data.stories.map((function(t){return{id:t.slug,title:t.content.titel,previewText:t.content.korte_beschrijving,thumbnailUrl:t.content.thumbnail}}))}}))}},r=(o(673),o(18)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"boten"},[o("hr"),t._v(" "),o("h1",{staticClass:"title"},[t._v("Boten")]),t._v(" "),o("div",{staticClass:"test"},[o("section",{staticClass:"post-preview-holder"},t._l(t.bootposts,(function(t){return o("BootPostPreview",{key:t.id,attrs:{title:t.title,excerpt:t.previewText,thumbnailImage:t.thumbnailUrl,id:t.id}})})),1)])])}),[],!1,null,"6408b9a3",null);e.default=component.exports}}]);