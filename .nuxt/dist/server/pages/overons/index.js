exports.ids = [21];
exports.modules = {

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(161);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("290aea34", content, true, context)
};

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3b2bc8f5_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3b2bc8f5_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3b2bc8f5_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3b2bc8f5_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_3b2bc8f5_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".overOns[data-v-3b2bc8f5]{width:100vw;height:auto}.title[data-v-3b2bc8f5]{height:45px;color:#fff;display:flex;align-items:center;justify-content:center}.container-top-border[data-v-3b2bc8f5]{width:100vw;height:45px;background-color:#3e4b51}.blok-one[data-v-3b2bc8f5],.blok-two[data-v-3b2bc8f5]{display:flex;align-items:center;justify-content:center}.overons-start-image[data-v-3b2bc8f5],.overons-start-image-two[data-v-3b2bc8f5]{height:50vh}.overons-start-image[data-v-3b2bc8f5],.overons-start-image-two[data-v-3b2bc8f5]{width:100vw;margin:0 auto;background-size:cover;background-position:50%}.overons-start-image-two[data-v-3b2bc8f5]{height:40vh}.quote[data-v-3b2bc8f5],.quote-second[data-v-3b2bc8f5]{display:flex;justify-content:center;align-items:center;width:90%;height:auto;margin:25px auto}.quote-text[data-v-3b2bc8f5],.quote-text-second[data-v-3b2bc8f5]{font-size:20px;text-align:center;color:#3e4b51}.overons-container[data-v-3b2bc8f5]{background-color:rgba(203,203,197,.4)}.overons-container[data-v-3b2bc8f5],.second-overons-container[data-v-3b2bc8f5]{width:100vw;height:auto;border-radius:.5rem}.overons-image[data-v-3b2bc8f5],.second-overons-image[data-v-3b2bc8f5]{background-size:cover;width:100vw;height:auto;background-repeat:no-repeat}.second-container-subtitle[data-v-3b2bc8f5]{width:100%;height:auto;font-family:\"Baskerville\",sans-serif;font-size:22px;color:#010000;padding:10px 0}.overons-text[data-v-3b2bc8f5],.second-overons-text[data-v-3b2bc8f5]{width:100%;height:auto;padding:16px 20px 20px 30px;font-weight:500;line-height:2.43;color:#3e4b51}@media (min-width:500px){.overons-image[data-v-3b2bc8f5],.second-overons-image[data-v-3b2bc8f5]{width:100%;height:400px}.quote[data-v-3b2bc8f5]{margin-bottom:45px;margin-top:45px;height:100px}}@media (min-width:768px){.overons-text[data-v-3b2bc8f5],.second-overons-text[data-v-3b2bc8f5]{font-size:17px}.quote-text[data-v-3b2bc8f5],.quote-text-second[data-v-3b2bc8f5]{font-size:26px}.post-content p[data-v-3b2bc8f5]{font-size:16px}}@media (min-width:1000px){.overons-image[data-v-3b2bc8f5],.second-overons-image[data-v-3b2bc8f5]{height:500px}}@media (min-width:1300px){.quote-text[data-v-3b2bc8f5],.quote-text-second[data-v-3b2bc8f5]{font-size:30px}.quote[data-v-3b2bc8f5]{margin-bottom:25px;margin-top:25px}}@media (min-width:1350px){.overons-container[data-v-3b2bc8f5]{width:100vw;background-color:rgba(203,203,197,.4)}.overons-container[data-v-3b2bc8f5],.overons-container-3[data-v-3b2bc8f5],.second-overons-container[data-v-3b2bc8f5]{height:auto;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));grid-template-rows:repeat(1,minmax(0,1fr));border-radius:.5rem;margin:0 auto}.overons-container-3[data-v-3b2bc8f5],.second-overons-container[data-v-3b2bc8f5]{width:90vw}.overons-content[data-v-3b2bc8f5]:first-of-type{grid-column:1/span 3}.overons-content[data-v-3b2bc8f5]:nth-of-type(2){grid-column:4/span 2}.overons-content-1[data-v-3b2bc8f5]:first-of-type{grid-column:1/span 2}.overons-content-2[data-v-3b2bc8f5]:nth-of-type(2){grid-column:3/span 3}.second-overons-content[data-v-3b2bc8f5]:first-of-type{grid-column:1/span 3}.second-overons-content[data-v-3b2bc8f5]:nth-of-type(2){grid-column:4/span 2;display:flex;align-items:center;justify-content:center}.overons-text[data-v-3b2bc8f5],.second-overons-text[data-v-3b2bc8f5]{padding:32px 40px 40px 63px}.overons-image[data-v-3b2bc8f5],.second-overons-image[data-v-3b2bc8f5]{width:100%;height:100%;border-top-left-radius:.5rem;border-bottom-left-radius:.5rem}.quote-text[data-v-3b2bc8f5]{width:100vw;height:82px}.quote[data-v-3b2bc8f5]{margin-bottom:35px;margin-top:35px;width:100vw}.second-overons-image[data-v-3b2bc8f5]{height:350px;width:600px;margin-right:40px}}@media (min-width:1390px){.container-top-border[data-v-3b2bc8f5],.title[data-v-3b2bc8f5]{height:55px}.overons-start-image-two[data-v-3b2bc8f5]{width:90vw}.second-overons-text[data-v-3b2bc8f5]{width:730px}}@media (min-width:1800px){.container-top-border[data-v-3b2bc8f5],.title[data-v-3b2bc8f5]{height:65px}.second-overons-image[data-v-3b2bc8f5]{width:750px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/overons/index.vue?vue&type=template&id=3b2bc8f5&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"overOns"},[_vm._ssrNode("<div class=\"blok\" data-v-3b2bc8f5><div class=\"container-top-border\" data-v-3b2bc8f5><h4 class=\"title\" data-v-3b2bc8f5>Over ons</h4></div></div> <section class=\"quote\" data-v-3b2bc8f5><h1 class=\"quote-text\" data-v-3b2bc8f5>"+_vm._ssrEscape(_vm._s(_vm.story.content.quote))+"</h1></section> <div class=\"overons-container\" data-v-3b2bc8f5><div class=\"overons-content\" data-v-3b2bc8f5><div class=\"overons-image\" data-v-3b2bc8f5><img"+(_vm._ssrAttr("src",_vm.story.content.content_image_one))+" alt=\"haven\" class=\"overons-image\" data-v-3b2bc8f5></div></div> <div class=\"overons-content\" data-v-3b2bc8f5><div class=\"overons-text\" data-v-3b2bc8f5><section class=\"post-content\" data-v-3b2bc8f5>"+(_vm._s(_vm.$options.filters.markdown(_vm.story.content.content_one)))+"</section></div></div></div> <section class=\"quote-second\" data-v-3b2bc8f5><h1 class=\"quote-text-second\" data-v-3b2bc8f5>"+_vm._ssrEscape(_vm._s(_vm.story.content.quote_two)+"\n    ")+"</h1></section> <div class=\"second-overons-container\" data-v-3b2bc8f5><div class=\"second-overons-content\" data-v-3b2bc8f5><div class=\"second-overons-text\" data-v-3b2bc8f5><section class=\"post-content\" data-v-3b2bc8f5>"+(_vm._s(_vm.$options.filters.markdown(_vm.story.content.content_two)))+"</section></div></div> <div class=\"second-overons-content\" data-v-3b2bc8f5><div class=\"second-overons-image\" data-v-3b2bc8f5><img"+(_vm._ssrAttr("src",_vm.story.content.content_image_two))+" alt=\"Sir Humphry en Hans Christiaan Orsted\" class=\"second-overons-image\" data-v-3b2bc8f5></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/overons/index.vue?vue&type=template&id=3b2bc8f5&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/overons/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var overonsvue_type_script_lang_js_ = ({
  layout: 'headerbar',

  data() {
    return {
      story: {
        content: {}
      }
    };
  },

  mounted() {
    // Use the input event for instant update of content
    this.$storybridge.on('input', event => {
      if (event.story.id === this.story.id) {
        this.story.content = event.story.content;
      }
    }); // Use the bridge to listen the events

    this.$storybridge.on(['published', 'change'], event => {
      // window.location.reload()
      this.$nuxt.$router.go({
        path: this.$nuxt.$router.currentRoute,
        force: true
      });
    });
  },

  asyncData(context) {
    //load the JSOn from the API - loading the home content (index page)
    return context.app.$storyapi.get('cdn/stories/overons', {
      version:  true ? "published" : undefined
    }).then(res => {
      return res.data;
    }).catch(res => {
      if (!res.response) {
        console.error(res);
        context.error({
          statusCode: 404,
          message: 'Failed to receive content from api'
        });
      } else {
        console.error(res.resonse.data);
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        });
      }
    });
  }

});
// CONCATENATED MODULE: ./pages/overons/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_overonsvue_type_script_lang_js_ = (overonsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/overons/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(160)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_overonsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3b2bc8f5",
  "9657ae4e"
  
)

/* harmony default export */ var overons = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map