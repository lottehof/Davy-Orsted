exports.ids = [1];
exports.modules = {

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(123);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("2a9c85dd", content, true, context)
};

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPreview_vue_vue_type_style_index_0_id_50c1e437_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPreview_vue_vue_type_style_index_0_id_50c1e437_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPreview_vue_vue_type_style_index_0_id_50c1e437_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPreview_vue_vue_type_style_index_0_id_50c1e437_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostPreview_vue_vue_type_style_index_0_id_50c1e437_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".post-preview[data-v-50c1e437]{min-height:400px;display:block;width:100%;margin-bottom:100px}.post-preview-title[data-v-50c1e437]{font-size:24px;color:#3e4b51;padding:30px 20px 0;margin-bottom:50px}.post-preview-thumbnail[data-v-50c1e437]{background-position:50%;background-size:cover;width:100%;min-height:350px}.post-preview-text[data-v-50c1e437]{width:100%;height:auto;padding:0 20px;margin-top:20px}.post-preview-text-button[data-v-50c1e437]{width:100%;height:auto;margin-bottom:20px;padding:20px;color:#3e4b51;text-transform:uppercase;text-decoration:underline}.post-preview-text-button[data-v-50c1e437]:hover{color:#000}hr[data-v-50c1e437]{margin-top:20px}a[data-v-50c1e437]{text-decoration:none;color:#000}p[data-v-50c1e437]{white-space:pre-line}@media (min-width:768px){.post-preview-text[data-v-50c1e437]{font-size:18px}}@media (min-width:1300px){.post-preview[data-v-50c1e437]{width:100%}.post-preview-container[data-v-50c1e437]{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-template-rows:repeat(1,minmax(0,1fr))}.post-preview-thumbnail[data-v-50c1e437]{grid-column:3/span 2;grid-row:1/span 2;background-position:50%;background-size:cover;width:100%;height:100%}.post-preview-content[data-v-50c1e437]{grid-column:1/span 2;grid-row:1/span 2}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/PostPreview.vue?vue&type=template&id=50c1e437&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"post-preview"},[_vm._ssrNode("<div class=\"title\" data-v-50c1e437><h1 class=\"post-preview-title\" data-v-50c1e437>"+_vm._ssrEscape(_vm._s(_vm.title))+"</h1></div> "),_vm._ssrNode("<div class=\"post-preview-container\" data-v-50c1e437>","</div>",[_vm._ssrNode("<div class=\"post-preview-thumbnail\""+(_vm._ssrStyle(null,{backgroundImage: 'url(' + _vm.thumbnailImage + ')'}, null))+" data-v-50c1e437></div> "),_vm._ssrNode("<div class=\"post-preview-content\" data-v-50c1e437>","</div>",[_vm._ssrNode("<p class=\"post-preview-text\" data-v-50c1e437>"+_vm._ssrEscape(_vm._s(_vm.excerpt))+"</p> "),_c('nuxt-link',{attrs:{"to":'/nieuws/' + _vm.id}},[_c('p',{staticClass:"post-preview-text-button"},[_vm._v("Lees meer")])])],2)],2),_vm._ssrNode(" <hr data-v-50c1e437>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Blog/PostPreview.vue?vue&type=template&id=50c1e437&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Blog/PostPreview.vue?vue&type=script&lang=js&
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
/* harmony default export */ var PostPreviewvue_type_script_lang_js_ = ({
  props: {
    title: {
      type: String,
      required: true
    },
    excerpt: {
      type: String,
      required: true
    },
    thumbnailImage: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Blog/PostPreview.vue?vue&type=script&lang=js&
 /* harmony default export */ var Blog_PostPreviewvue_type_script_lang_js_ = (PostPreviewvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Blog/PostPreview.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(122)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Blog_PostPreviewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "50c1e437",
  "ac528096"
  
)

/* harmony default export */ var PostPreview = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=blog-post-preview.js.map