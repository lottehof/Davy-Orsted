(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{608:function(t,o,e){var content=e(642);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(41).default)("27e6c788",content,!0,{sourceMap:!1})},641:function(t,o,e){"use strict";e(608)},642:function(t,o,e){var n=e(40)(!1);n.push([t.i,".button-container[data-v-3b9e728c]{border-bottom:1px solid #cacaca;text-align:center}.boot-button[data-v-3b9e728c]{background-color:#fff;text-transform:uppercase;font-family:FuturaStd;height:30px;margin-right:20px;border:none;font-size:14px}.active[data-v-3b9e728c],.boot-button[data-v-3b9e728c]:active,.boot-button[data-v-3b9e728c]:focus{border-bottom:2px solid #000}.boot-description[data-v-3b9e728c],.boot-specificaties[data-v-3b9e728c],.boot-uitvoering[data-v-3b9e728c]{padding:16px 20px 20px 30px}@media (min-width:768px){.button-container[data-v-3b9e728c]{text-align:left;margin-left:30px;margin-top:20px}.boot-button[data-v-3b9e728c]{font-size:18px;margin-right:50px}.boot-description p[data-v-3b9e728c],.boot-specificaties p[data-v-3b9e728c],.boot-uitvoering p[data-v-3b9e728c]{font-size:16px}}@media (min-width:1400px){.content[data-v-3b9e728c]{width:550px;margin:0 auto;grid-column:3/span 3}.button-container[data-v-3b9e728c]{margin-top:0}.boot-button[data-v-3b9e728c]{margin-right:30px}.boot-description p[data-v-3b9e728c],.boot-specificaties p[data-v-3b9e728c],.boot-uitvoering p[data-v-3b9e728c]{font-size:14px}}@media (min-width:1610px){.content[data-v-3b9e728c]{width:850px}.boot-button[data-v-3b9e728c]{margin-right:50px}}",""]),t.exports=n},674:function(t,o,e){"use strict";e.r(o);var n={props:{blok:{type:Object,required:!0}},data:function(){return{description_content:!0,uitvoering_content:!1,specificaties_content:!1,dsactive:"active",selectedImage:{}}},methods:{description:function(){this.description_content=!0,this.uitvoering_content=!1,this.specificaties_content=!1,this.dsactive="active"},uitvoering:function(){this.description_content=!1,this.uitvoering_content=!0,this.specificaties_content=!1,this.dsactive=""},specificaties:function(){this.description_content=!1,this.uitvoering_content=!1,this.specificaties_content=!0,this.dsactive=""}}},c=(e(641),e(18)),component=Object(c.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{staticClass:"content"},[e("div",{staticClass:"button-container"},[e("button",{staticClass:"boot-button",class:t.dsactive,attrs:{type:"button",name:"button"},on:{click:t.description}},[t._v("Beschrijving")]),t._v(" "),e("button",{staticClass:"boot-button",attrs:{type:"button",name:"button"},on:{click:t.uitvoering}},[t._v("Uitvoering")]),t._v(" "),e("button",{staticClass:"boot-button",attrs:{type:"button",name:"button"},on:{click:t.specificaties}},[t._v("Specificaties")])]),t._v(" "),t.description_content?e("div",{staticClass:"boot-description"},[e("section",[e("section",{staticClass:"onderhoud-content",domProps:{innerHTML:t._s(t.$options.filters.markdown(t.blok.beschrijving))}})])]):t._e(),t._v(" "),t.uitvoering_content?e("div",{staticClass:"boot-uitvoering"},[e("section",{staticClass:"onderhoud-content",domProps:{innerHTML:t._s(t.$options.filters.markdown(t.blok.uitvoering))}})]):t._e(),t._v(" "),t.specificaties_content?e("div",{staticClass:"boot-specificaties"},[e("section",{staticClass:"onderhoud-content",domProps:{innerHTML:t._s(t.$options.filters.markdown(t.blok.specificaties))}})]):t._e()])}),[],!1,null,"3b9e728c",null);o.default=component.exports}}]);