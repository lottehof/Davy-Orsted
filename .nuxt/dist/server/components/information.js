exports.ids = [8];
exports.modules = {

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f8bd5032", content, true, context)
};

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Information/Information.vue?vue&type=template&id=46839dd6&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"editable",rawName:"v-editable",value:(_vm.blok),expression:"blok"}],staticClass:"information-boxes"},[_vm._ssrNode("<div class=\"information-box-content\" data-v-46839dd6><figure data-v-46839dd6><img"+(_vm._ssrAttr("src",_vm.blok.image_box_1))+" alt=\"Nieuws\" class=\"content-image\" data-v-46839dd6></figure> <h3 data-v-46839dd6>"+_vm._ssrEscape(_vm._s(_vm.blok.image_box_1_title))+"</h3></div> <div class=\"information-box-content\" data-v-46839dd6><figure data-v-46839dd6><img"+(_vm._ssrAttr("src",_vm.blok.image_box_2))+" alt=\"Winterstalling Davy&Orsted\" class=\"content-image\" data-v-46839dd6></figure> <h3 data-v-46839dd6>"+_vm._ssrEscape(_vm._s(_vm.blok.image_box_2_title))+"</h3></div> <div class=\"information-box-content\" data-v-46839dd6><figure data-v-46839dd6><img"+(_vm._ssrAttr("src",_vm.blok.image_box_3))+" alt=\"Occasions Davy&Orsted\" class=\"content-image\" data-v-46839dd6></figure> <h3 data-v-46839dd6>"+_vm._ssrEscape(_vm._s(_vm.blok.image_box_3_title))+"</h3></div> <div class=\"information-box-content\" data-v-46839dd6><figure data-v-46839dd6><img"+(_vm._ssrAttr("src",_vm.blok.image_box_4))+" alt=\"De werf\" class=\"content-image\" data-v-46839dd6></figure> <h3 data-v-46839dd6>"+_vm._ssrEscape(_vm._s(_vm.blok.image_box_4_title))+"</h3></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Information/Information.vue?vue&type=template&id=46839dd6&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Information/Information.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Informationvue_type_script_lang_js_ = ({
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Information/Information.vue?vue&type=script&lang=js&
 /* harmony default export */ var Information_Informationvue_type_script_lang_js_ = (Informationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Information/Information.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(94)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Information_Informationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "46839dd6",
  "366825df"
  
)

/* harmony default export */ var Information = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Information_vue_vue_type_style_index_0_id_46839dd6_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Information_vue_vue_type_style_index_0_id_46839dd6_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Information_vue_vue_type_style_index_0_id_46839dd6_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Information_vue_vue_type_style_index_0_id_46839dd6_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Information_vue_vue_type_style_index_0_id_46839dd6_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".test[data-v-46839dd6]{display:block;margin-left:auto;margin-right:auto}.content-image[data-v-46839dd6]{width:100%;height:300px;background-size:cover}h3[data-v-46839dd6]{text-transform:uppercase;font-weight:500;letter-spacing:.02px;padding-top:20px;bottom:0}a[data-v-46839dd6],h3[data-v-46839dd6]{color:#3d4333}a[data-v-46839dd6]{text-decoration:none}.information-boxes[data-v-46839dd6]{width:90%;height:auto;margin:0 auto;display:grid;grid-template-columns:1fr}.information-box-content[data-v-46839dd6]{margin:20px 0;height:auto}@media (min-width:768px){.information-boxes[data-v-46839dd6]{width:80%;height:auto;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-template-rows:repeat(2,minmax(0,1fr));grid-gap:8px}.content-image[data-v-46839dd6]{min-width:300px}.information-boxes>.information-box-content[data-v-46839dd6]:first-of-type{grid-column:1/span 2;grid-row:1/span 2}.information-boxes>.information-box-content[data-v-46839dd6]:nth-of-type(2){grid-column:3/span 2;grid-row:1/span 2}.information-boxes>.information-box-content[data-v-46839dd6]:nth-of-type(3){grid-column:1/span 2;grid-row:2/span 2}.information-boxes>.information-box-content[data-v-46839dd6]:nth-of-type(4){grid-column:3/span 2;grid-row:2/span 2}.information-box-content[data-v-46839dd6]{max-width:447px;height:300px;margin-top:41px;margin-left:auto;margin-right:auto}}@media (min-width:1280px){.information-boxes[data-v-46839dd6]{height:400px;width:95vw;grid-template-rows:repeat(1,minmax(0,1fr));margin:0 auto 100px}img[data-v-46839dd6]{height:300px}.information-box-content[data-v-46839dd6],img[data-v-46839dd6]{width:100%}.information-boxes>.information-box-content[data-v-46839dd6]:first-of-type{grid-column:1/span 1;grid-row:1}.information-boxes>.information-box-content[data-v-46839dd6]:nth-of-type(2){grid-column:2/span 1;grid-row:1}.information-boxes>.information-box-content[data-v-46839dd6]:nth-of-type(3){grid-column:3/span 1;grid-row:1}.information-boxes>.information-box-content[data-v-46839dd6]:nth-of-type(4){grid-column:4/span 1;grid-row:1}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=information.js.map