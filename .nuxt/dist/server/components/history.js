exports.ids = [4];
exports.modules = {

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(125);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("b478d4e8", content, true, context)
};

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_style_index_0_id_d37b660c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_style_index_0_id_d37b660c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_style_index_0_id_d37b660c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_style_index_0_id_d37b660c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_History_vue_vue_type_style_index_0_id_d37b660c_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".history[data-v-d37b660c]{width:100vw;height:auto;margin-bottom:30px}.quote[data-v-d37b660c]{display:flex;justify-content:center;align-items:center;width:90%;height:auto;margin:35px auto 55px}.quote-text[data-v-d37b660c]{height:82px;font-size:20px;text-align:center;color:#3e4b51}.history-image[data-v-d37b660c]{background-size:cover;width:100vw;height:300px;background-repeat:no-repeat}.history-text[data-v-d37b660c]{height:auto;padding:16px 20px 20px 30px;font-weight:500;line-height:2.43;color:#3e4b51}.history-text>p[data-v-d37b660c]{padding-bottom:25px}a[data-v-d37b660c]{color:#3e4b51;text-decoration:none}.history-container[data-v-d37b660c]{width:100vw;height:auto;background-color:rgba(203,203,197,.4);border-radius:.5rem}@media (min-width:500px){.quote[data-v-d37b660c]{margin-bottom:5px;margin-top:45px}.history-image[data-v-d37b660c]{height:400px}}@media (min-width:1000px){.history-image[data-v-d37b660c]{height:500px}}@media (min-width:1300px){.quote-text[data-v-d37b660c]{font-size:30px}.quote[data-v-d37b660c]{margin-bottom:25px;margin-top:65px}}@media (min-width:1350px){.history-container[data-v-d37b660c]{height:665px;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));margin-bottom:2rem}.history-content[data-v-d37b660c]:first-of-type{grid-column:1/span 3}.history-content[data-v-d37b660c]:nth-of-type(2){grid-column:4/span 2}.history-text[data-v-d37b660c]{padding:32px 40px 40px 63px;width:600px}.history-image[data-v-d37b660c]{width:100%;height:665px}.quote-text[data-v-d37b660c]{width:100vw;height:82px}.quote[data-v-d37b660c]{margin-bottom:80px;margin-top:85px;width:100vw}}@media (min-width:1700px){.history-text[data-v-d37b660c]{width:679px;height:600px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/History/History.vue?vue&type=template&id=d37b660c&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"history"},[_vm._ssrNode("<div class=\"quote\" data-v-d37b660c><h1 class=\"quote-text\" data-v-d37b660c>"+_vm._ssrEscape(_vm._s(_vm.blok.title))+"</h1></div> <div class=\"history-container\" data-v-d37b660c><div class=\"history-content\" data-v-d37b660c><figure data-v-d37b660c><img"+(_vm._ssrAttr("src",_vm.blok.image))+" alt=\"jachthaven Davy&Orsted\" class=\"history-image\" data-v-d37b660c></figure></div> <div class=\"history-content\" data-v-d37b660c><div class=\"history-text\" data-v-d37b660c><p data-v-d37b660c>"+_vm._ssrEscape(_vm._s(_vm.blok.content)+"\n          ")+"<a href=\"/overons\" data-v-d37b660c>LEES MEER &gt;</a></p></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/History/History.vue?vue&type=template&id=d37b660c&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/History/History.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Historyvue_type_script_lang_js_ = ({
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/History/History.vue?vue&type=script&lang=js&
 /* harmony default export */ var History_Historyvue_type_script_lang_js_ = (Historyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/History/History.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(124)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  History_Historyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d37b660c",
  "4f9f392f"
  
)

/* harmony default export */ var History = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=history.js.map