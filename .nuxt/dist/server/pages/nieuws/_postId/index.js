exports.ids = [19];
exports.modules = {

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(163);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("14e05486", content, true, context)
};

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(140);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nav-title{height:35px;color:#fff;display:flex;align-items:center;justify-content:center}.slider{height:300px;display:block;margin-left:auto;margin-right:auto}.post-title{height:41px;font-size:26px;letter-spacing:.03px;text-align:center;color:#3e4b51;margin-top:20px;margin-bottom:0}.post-thumbnail{width:90%;height:200px;background-size:cover;background-position:50%;margin:0 auto;display:flex;justify-content:center;align-items:center}.post-preview-summary{line-height:2.3}.post-content,.post-preview-summary{width:90%;height:auto;margin:auto auto 20px}.post-content{margin-top:20px}.post-content>p{margin-bottom:0;line-height:2.3}.container-top-border{width:100vw;height:35px;background-color:#3e4b51}.nieuwsbrief-start-image{width:100vw;height:40vh;background-size:auto;background-position:50%;background-color:#add8e6}@media (min-width:768px){.post-title{font-size:28px}.post-thumbnail{height:400px}.post-content,.post-preview-summary{font-size:16px}}@media (min-width:1200px){.post-container{display:grid;width:90%;margin:20px auto auto;grid-template-columns:repeat(2,minmax(0,1fr))}.post-preview-summary{grid-column:1/span 1;font-size:18px}.post-thumbnail{grid-column:2/span 1;padding-top:40px;width:700px}.post-content{display:grid;grid-template-columns:1fr 1fr 1fr;width:90%;height:auto;font-size:18px}.post-content>p{margin:10px;width:80%;padding:10px;height:auto}.slider{height:600px;display:block;margin-left:auto;margin-right:auto}}@media (min-width:1390px){.container-top-border,.nav-title{height:55px}}@media (min-width:1800px){.container-top-border,.nav-title{height:65px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/nieuws/_postId/index.vue?vue&type=template&id=d6737f3e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"post"},[_vm._ssrNode("<div class=\"blok\"><div class=\"container-top-border\"><h4 class=\"nav-title\">Nieuws bericht</h4></div></div> <h1 class=\"post-title\">"+_vm._ssrEscape(_vm._s(_vm.story.content.title))+"</h1> <div class=\"post-container\"><p class=\"post-preview-summary\">"+_vm._ssrEscape(_vm._s(_vm.story.content.summary))+"</p> <img"+(_vm._ssrAttr("src",_vm.story.content.image))+" alt=\"Nieuwsbrief post\" class=\"post-thumbnail\"></div> <section class=\"post-content\">"+(_vm._s(_vm.$options.filters.markdown(_vm.story.content.content)))+"</section> "),_vm._ssrNode("<section class=\"slider\">","</section>",[(_vm.story.content.component)?_c('post',{key:_vm.story.content._id,attrs:{"blok":_vm.story.content}}):_vm._e()],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/nieuws/_postId/index.vue?vue&type=template&id=d6737f3e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/nieuws/_postId/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _postIdvue_type_script_lang_js_ = ({
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
    return context.app.$storyapi.get('cdn/stories/nieuws/' + context.params.postId, {
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
// CONCATENATED MODULE: ./pages/nieuws/_postId/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var nieuws_postIdvue_type_script_lang_js_ = (_postIdvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/nieuws/_postId/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(162)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  nieuws_postIdvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6a762222"
  
)

/* harmony default export */ var _postId = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Post: __webpack_require__(25).default})


/***/ })

};;
//# sourceMappingURL=index.js.map