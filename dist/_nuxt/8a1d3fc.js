(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{614:function(t,e,o){var content=o(633);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(44).default)("14e05486",content,!0,{sourceMap:!1})},632:function(t,e,o){"use strict";o(614)},633:function(t,e,o){var n=o(43)(!1);n.push([t.i,".nav-title{height:35px;color:#fff;display:flex;align-items:center;justify-content:center}.slider{height:300px;display:block;margin-left:auto;margin-right:auto}.post-title{height:41px;font-size:26px;letter-spacing:.03px;text-align:center;color:#3e4b51;margin-top:20px;margin-bottom:0}.post-thumbnail{width:90%;height:200px;background-size:cover;background-position:50%;margin:0 auto;display:flex;justify-content:center;align-items:center}.post-preview-summary{line-height:2.3}.post-content,.post-preview-summary{width:90%;height:auto;margin:auto auto 20px}.post-content{margin-top:20px}.post-content>p{margin-bottom:0;line-height:2.3}.container-top-border{width:100vw;height:35px;background-color:#3e4b51}.nieuwsbrief-start-image{width:100vw;height:40vh;background-size:auto;background-position:50%;background-color:#add8e6}@media (min-width:768px){.post-title{font-size:28px}.post-thumbnail{height:400px}.post-content,.post-preview-summary{font-size:16px}}@media (min-width:1200px){.post-container{display:grid;width:90%;margin:20px auto auto;grid-template-columns:repeat(2,minmax(0,1fr))}.post-preview-summary{grid-column:1/span 1;font-size:18px}.post-thumbnail{grid-column:2/span 1;padding-top:40px;width:700px}.post-content{display:grid;grid-template-columns:1fr 1fr 1fr;width:90%;height:auto;font-size:18px}.post-content>p{margin:10px;width:80%;padding:10px;height:auto}.slider{height:600px;display:block;margin-left:auto;margin-right:auto}}@media (min-width:1390px){.container-top-border,.nav-title{height:55px}}@media (min-width:1800px){.container-top-border,.nav-title{height:65px}}",""]),t.exports=n},642:function(t,e,o){"use strict";o.r(e);var n={layout:"headerbar",data:function(){return{story:{content:{}}}},mounted:function(){var t=this;this.$storybridge.on("input",(function(e){e.story.id===t.story.id&&(t.story.content=e.story.content)})),this.$storybridge.on(["published","change"],(function(e){t.$nuxt.$router.go({path:t.$nuxt.$router.currentRoute,force:!0})}))},asyncData:function(t){return t.app.$storyapi.get("cdn/stories/nieuws/"+t.params.postId,{version:"published"}).then((function(t){return t.data})).catch((function(e){e.response?(console.error(e.resonse.data),t.error({statusCode:e.response.status,message:e.response.data})):(console.error(e),t.error({statusCode:404,message:"Failed to receive content from api"}))}))}},r=(o(632),o(18)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"post"},[t._m(0),t._v(" "),o("h1",{staticClass:"post-title"},[t._v(t._s(t.story.content.title))]),t._v(" "),o("div",{staticClass:"post-container"},[o("p",{staticClass:"post-preview-summary"},[t._v(t._s(t.story.content.summary))]),t._v(" "),o("img",{staticClass:"post-thumbnail",attrs:{src:t.story.content.image,alt:"Nieuwsbrief post"}})]),t._v(" "),o("section",{staticClass:"post-content",domProps:{innerHTML:t._s(t.$options.filters.markdown(t.story.content.content))}}),t._v(" "),o("section",{staticClass:"slider"},[t.story.content.component?o("post",{key:t.story.content._id,attrs:{blok:t.story.content}}):t._e()],1)])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blok"},[o("div",{staticClass:"container-top-border"},[o("h4",{staticClass:"nav-title"},[t._v("Nieuws bericht")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Post:o(313).default})}}]);