exports.ids = [10];
exports.modules = {

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(127);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("5440ca6f", content, true, context)
};

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AluSloepen_vue_vue_type_style_index_0_id_1214f0d2_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AluSloepen_vue_vue_type_style_index_0_id_1214f0d2_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AluSloepen_vue_vue_type_style_index_0_id_1214f0d2_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AluSloepen_vue_vue_type_style_index_0_id_1214f0d2_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AluSloepen_vue_vue_type_style_index_0_id_1214f0d2_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".aluSloepen-container[data-v-1214f0d2]{width:100vw;height:auto}.head-title[data-v-1214f0d2]{height:41px;font-size:26px;letter-spacing:.03px;margin-bottom:0}.container-title[data-v-1214f0d2],.head-title[data-v-1214f0d2]{text-align:center;color:#3e4b51}.container-title[data-v-1214f0d2]{height:21px;font-size:17px;font-weight:500;text-transform:uppercase;letter-spacing:.02px;margin-bottom:30px}.modellen-container[data-v-1214f0d2]{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-template-rows:repeat(3,minmax(0,1fr));width:100%}.modellen-content[data-v-1214f0d2]:first-of-type{grid-column:1/span 2;grid-row:1/span 2}.modellen-content[data-v-1214f0d2]:nth-of-type(2){grid-column:1/span 2;grid-row:3/span 1}.modellen-content[data-v-1214f0d2]:nth-of-type(3){grid-column:3/span 2;grid-row:1/span 2}.modellen-content[data-v-1214f0d2]:nth-of-type(4){grid-column:3/span 2;grid-row:3/span 1}.modellen-content[data-v-1214f0d2]:nth-of-type(2),.modellen-content[data-v-1214f0d2]:nth-of-type(4){padding:0 20px}figure[data-v-1214f0d2]{padding:0;height:100%;width:100%;margin:0 auto;display:flex;align-items:center;justify-content:center}.modellen-image[data-v-1214f0d2]{width:95%;height:210px;background-repeat:no-repeat;background-size:cover;background-position:50%}.boat-title[data-v-1214f0d2]{height:22px;margin-top:37px;margin-bottom:10px;font-size:14px;letter-spacing:.02px;color:#3d4333;text-transform:uppercase}.boat-sub-title[data-v-1214f0d2],.boat-title[data-v-1214f0d2]{margin-left:3px;font-weight:500;text-align:center}.boat-sub-title[data-v-1214f0d2]{height:16px;margin-bottom:20px;letter-spacing:.01px;color:#696969}.boat-sub-title[data-v-1214f0d2],.list-items[data-v-1214f0d2]{display:none}ul[data-v-1214f0d2]{list-style:none;padding:0}li[data-v-1214f0d2]:before{content:\"+\";margin-right:13px}.list-items[data-v-1214f0d2]{width:100%;margin-bottom:16px;margin-left:3px;font-weight:500;line-height:1.71;letter-spacing:2px;color:#3e4b51;text-transform:uppercase;text-align:center}@media (min-width:550px){.head-title[data-v-1214f0d2]{font-size:28px}.container-title[data-v-1214f0d2]{font-size:22px}.boat-title[data-v-1214f0d2]{font-size:18px}}@media (min-width:1000px){.head-title[data-v-1214f0d2]{font-size:36px}.container-title[data-v-1214f0d2]{font-size:26px;margin-bottom:60px;margin-top:30px}.modellen-image[data-v-1214f0d2]{height:410px}.boat-title[data-v-1214f0d2]{font-size:22px}.boat-sub-title[data-v-1214f0d2],.list-items[data-v-1214f0d2]{display:block}.wrap[data-v-1214f0d2]{display:flex;align-items:center;justify-content:center;margin:0}.modellen-container[data-v-1214f0d2]{grid-template-rows:repeat(4,minmax(0,1fr));width:90vw;height:auto;border-radius:.5rem;grid-gap:15px}.modellen-content[data-v-1214f0d2]{max-width:90vw}.modellen-container>.modellen-content[data-v-1214f0d2]:nth-of-type(2){grid-column:1/span 2;grid-row:3/span 2}.modellen-container>.modellen-content[data-v-1214f0d2]:nth-of-type(4){grid-column:3/span 2;grid-row:3/span 2}.modellen-content[data-v-1214f0d2]:nth-of-type(2),.modellen-content[data-v-1214f0d2]:nth-of-type(4){padding:0;margin-bottom:0;margin-top:20px}}@media (min-width:1300px){.aluSloepen-container[data-v-1214f0d2]{height:1146px}.modellen-header[data-v-1214f0d2]{width:100vw;display:flex;justify-content:center;align-items:center}.model[data-v-1214f0d2]{width:100%;text-align:center}.head-title[data-v-1214f0d2]{font-size:36px;margin-bottom:18px;margin-top:77px}.container-title[data-v-1214f0d2]{margin-top:37px;margin-bottom:77px}.modellen-title[data-v-1214f0d2]{display:flex;justify-content:left}.modellen-image[data-v-1214f0d2]{width:100%;height:500px}.boat-title[data-v-1214f0d2]{margin-left:0;margin-bottom:20px;font-size:22px}.boat-sub-title[data-v-1214f0d2]{width:175px;margin-top:43px}.list-items[data-v-1214f0d2]{font-size:14px;text-align:left}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Modellen/AluSloepen.vue?vue&type=template&id=1214f0d2&scoped=true&lang=html&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"aluSloepen-container"},[_vm._ssrNode("<div class=\"modellen-header\" data-v-1214f0d2><div class=\"model\" data-v-1214f0d2><h1 class=\"head-title\" data-v-1214f0d2>Modellen</h1> <h2 class=\"container-title\" data-v-1214f0d2>"+_vm._ssrEscape(_vm._s(_vm.blok.type_of_boat_1))+"</h2></div></div> <div class=\"wrap\" data-v-1214f0d2><div class=\"modellen-container\" data-v-1214f0d2><div class=\"modellen-content\" data-v-1214f0d2><figure data-v-1214f0d2><img"+(_vm._ssrAttr("src",_vm.blok.boat_image_one))+" alt=\"sleop D&O Raptor\" class=\"modellen-image\" data-v-1214f0d2></figure></div> <div class=\"modellen-content\" data-v-1214f0d2><div class=\"modellen-title\" data-v-1214f0d2><h2 class=\"boat-title\" data-v-1214f0d2>"+_vm._ssrEscape(_vm._s(_vm.blok.first_boat_title))+"</h2> <h5 class=\"boat-sub-title\" data-v-1214f0d2>"+_vm._ssrEscape(_vm._s(_vm.blok.boat_subtitle_1))+"</h5></div> <ul data-v-1214f0d2><li class=\"list-items\" data-v-1214f0d2>"+_vm._ssrEscape(_vm._s(_vm.blok.boat_1_listItem_1))+"</li> <li class=\"list-items\" data-v-1214f0d2>"+_vm._ssrEscape(_vm._s(_vm.blok.boat_1_listItem_2))+"</li> <li class=\"list-items\" data-v-1214f0d2>"+_vm._ssrEscape(_vm._s(_vm.blok.boat_1_listItem_3))+"</li> <li class=\"list-items\" data-v-1214f0d2>"+_vm._ssrEscape(_vm._s(_vm.blok.boat_1_listItem_4))+"</li> <li class=\"list-items\" data-v-1214f0d2>"+_vm._ssrEscape(_vm._s(_vm.blok.boat_1_listItem_5))+"</li></ul></div> <div class=\"modellen-content\" data-v-1214f0d2><figure data-v-1214f0d2><img"+(_vm._ssrAttr("src",_vm.blok.boat_image_two))+" alt=\"sleop D&O Raptor\" class=\"modellen-image\" data-v-1214f0d2></figure></div> <div class=\"modellen-content\" data-v-1214f0d2><div class=\"modellen-title\" data-v-1214f0d2><h2 class=\"boat-title\" data-v-1214f0d2>"+_vm._ssrEscape(_vm._s(_vm.blok.second_boat_title))+"</h2> <h5 class=\"boat-sub-title\" data-v-1214f0d2>"+_vm._ssrEscape(_vm._s(_vm.blok.boat_subtitle_2))+"</h5></div> <ul data-v-1214f0d2><li class=\"list-items\" data-v-1214f0d2>"+_vm._ssrEscape(_vm._s(_vm.blok.boat_2_listItem_1))+"</li> <li class=\"list-items\" data-v-1214f0d2>"+_vm._ssrEscape(_vm._s(_vm.blok.boat_2_listItem_2))+"</li> <li class=\"list-items\" data-v-1214f0d2>"+_vm._ssrEscape(_vm._s(_vm.blok.boat_2_listItem_3))+"</li> <li class=\"list-items\" data-v-1214f0d2>"+_vm._ssrEscape(_vm._s(_vm.blok.boat_2_listItem_4))+"</li> <li class=\"list-items\" data-v-1214f0d2>"+_vm._ssrEscape(_vm._s(_vm.blok.boat_2_listItem_5))+"</li></ul></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Modellen/AluSloepen.vue?vue&type=template&id=1214f0d2&scoped=true&lang=html&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Modellen/AluSloepen.vue?vue&type=script&lang=js&
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
/* harmony default export */ var AluSloepenvue_type_script_lang_js_ = ({
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./components/Modellen/AluSloepen.vue?vue&type=script&lang=js&
 /* harmony default export */ var Modellen_AluSloepenvue_type_script_lang_js_ = (AluSloepenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Modellen/AluSloepen.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(126)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Modellen_AluSloepenvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1214f0d2",
  "b29ce28e"
  
)

/* harmony default export */ var AluSloepen = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=modellen-alu-sloepen.js.map