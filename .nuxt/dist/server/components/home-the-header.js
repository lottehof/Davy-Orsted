exports.ids = [6,5];
exports.modules = {

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(131);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("23ca900c", content, true, context)
};

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeTheHeader_vue_vue_type_style_index_0_id_9800cbc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeTheHeader_vue_vue_type_style_index_0_id_9800cbc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeTheHeader_vue_vue_type_style_index_0_id_9800cbc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeTheHeader_vue_vue_type_style_index_0_id_9800cbc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeTheHeader_vue_vue_type_style_index_0_id_9800cbc4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "header[data-v-9800cbc4]{position:absolute;display:flex;align-items:center;background-color:transparent;background-position:top;padding:0 16px;height:100px;width:100vw}header[data-v-9800cbc4]:nth-child{justify-self:end!important}.drawer-toggle .bar[data-v-9800cbc4]{height:2px;background-color:#fff;border-radius:50px}.drawer-toggle .bar[data-v-9800cbc4]:first-of-type{width:20px}.drawer-toggle .bar[data-v-9800cbc4]:nth-of-type(2){width:28px}.drawer-toggle .bar[data-v-9800cbc4]:nth-of-type(3){width:16px}.drawer-toggle[data-v-9800cbc4]{display:flex;justify-self:start;flex-direction:column;justify-content:space-around;height:15%;width:25px;cursor:pointer}.app-links[data-v-9800cbc4]{justify-self:end;display:none}.brand-name[data-v-9800cbc4]{margin:0 20px 0 0;font-family:\"HelveticaNeue\",sans-serif}.brand-name a[data-v-9800cbc4]{text-decoration:none;color:#fff;display:none;font-size:16px}@media (min-width:430px){.logo[data-v-9800cbc4]{width:40%;height:auto;margin-left:auto;margin-right:auto}.bar[data-v-9800cbc4]:nth-of-type(3){display:none}.drawer-toggle .bar[data-v-9800cbc4]:first-of-type,.drawer-toggle .bar[data-v-9800cbc4]:nth-of-type(2){width:24px}.brand-name[data-v-9800cbc4]{margin-left:10px}.brand-name a[data-v-9800cbc4]{display:block}}@media (min-width:900px){.logo[data-v-9800cbc4]{width:300px}.drawer-toggle[data-v-9800cbc4]{margin-left:35px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HomeMenu/HomeTheHeader.vue?vue&type=template&id=9800cbc4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_vm._ssrNode("<div role=\"button\" class=\"drawer-toggle\" data-v-9800cbc4><div class=\"bar\" data-v-9800cbc4></div> <div class=\"bar\" data-v-9800cbc4></div> <div class=\"bar\" data-v-9800cbc4></div></div> "),_vm._ssrNode("<div class=\"brand-name\" data-v-9800cbc4>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("Menu")])],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HomeMenu/HomeTheHeader.vue?vue&type=template&id=9800cbc4&scoped=true&

// EXTERNAL MODULE: ./components/HomeMenu/HomeAppLinks.vue + 4 modules
var HomeAppLinks = __webpack_require__(90);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HomeMenu/HomeTheHeader.vue?vue&type=script&lang=js&
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

/* harmony default export */ var HomeTheHeadervue_type_script_lang_js_ = ({
  components: {
    AppLinks: HomeAppLinks["default"]
  }
});
// CONCATENATED MODULE: ./components/HomeMenu/HomeTheHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var HomeMenu_HomeTheHeadervue_type_script_lang_js_ = (HomeTheHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HomeMenu/HomeTheHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(130)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  HomeMenu_HomeTheHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9800cbc4",
  "38af2768"
  
)

/* harmony default export */ var HomeTheHeader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(89);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("fe36f304", content, true, context)
};

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeAppLinks_vue_vue_type_style_index_0_id_42ac8ec5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeAppLinks_vue_vue_type_style_index_0_id_42ac8ec5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeAppLinks_vue_vue_type_style_index_0_id_42ac8ec5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeAppLinks_vue_vue_type_style_index_0_id_42ac8ec5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeAppLinks_vue_vue_type_style_index_0_id_42ac8ec5_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*[data-v-42ac8ec5]{list-style:none}.fa-facebook-f[data-v-42ac8ec5],.fa-instagram[data-v-42ac8ec5]{font-size:45px;color:#fff;margin:30px}.icon-container[data-v-42ac8ec5]{justify-content:center}.icon-container[data-v-42ac8ec5],.mobile-menu[data-v-42ac8ec5]{display:flex;align-items:center}.mobile-menu[data-v-42ac8ec5]{width:100%;height:100vh;flex-direction:column;margin-top:60px}.material-icons[data-v-42ac8ec5]{font-size:50px;color:#fff}.nav-image[data-v-42ac8ec5]{width:90%;height:auto;display:none}.MobileMenu-title[data-v-42ac8ec5]{font-size:28px;color:#fff;font-family:\"FuturaStd\";margin:15px;background:none;border:none;width:100%}.MobileMenu-title[data-v-42ac8ec5]:active,.MobileMenu-title[data-v-42ac8ec5]:hover{color:#a89b8c}.one[data-v-42ac8ec5]:after,.three[data-v-42ac8ec5]:after,.two[data-v-42ac8ec5]:after{content:\"\\276F\";color:#fff;float:right;font-size:15px;margin-top:6px;display:flex;justify-content:center;align-items:center;text-transform:uppercase}.MobileMenu-link[data-v-42ac8ec5]{font-size:16px;color:#fff;font-family:\"FuturaStd\";margin-top:10px;height:10px;text-align:center;width:100vh;display:flex;align-items:center;flex-direction:column}.footer-menu[data-v-42ac8ec5]{margin:0 auto}.footer-menu-container[data-v-42ac8ec5]{display:none}.footer-menu-container .footer-menu .title[data-v-42ac8ec5]{height:40px;line-height:1.52;color:#fff;margin-bottom:10px;margin-top:20px;margin-left:30px}.footer-menu-container .footer-menu .title a[data-v-42ac8ec5]{color:#fff}ul li[data-v-42ac8ec5]{margin-left:30px}.footer-menu-container .footer-menu ul li a[data-v-42ac8ec5]{font-size:12px;font-weight:500;line-height:2;letter-spacing:1px;color:#fff}@media (min-width:768px){li a[data-v-42ac8ec5]{display:block}.footer-menu-container .footer-menu .title[data-v-42ac8ec5]{margin-top:0}.footer-menu-container[data-v-42ac8ec5]{display:block}.mobile-container[data-v-42ac8ec5]{display:none}.nav-image[data-v-42ac8ec5]{width:300px;height:auto}.footer-menu[data-v-42ac8ec5]{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));grid-template-rows:repeat(2,minmax(0,1fr));width:100%;margin-bottom:20px;margin-top:30px}.footer-menu>.col_2[data-v-42ac8ec5]{grid-column:1/span 2;grid-row:1}.footer-menu>.col_3[data-v-42ac8ec5]{grid-column:3/span 2;grid-row:1}.footer-menu>.col_4[data-v-42ac8ec5]{grid-column:5/span 2;grid-row:1}.footer-menu-container[data-v-42ac8ec5]{padding:0 20px;margin-left:20px}.footer-menu-container .footer-menu ul li a[data-v-42ac8ec5]{font-size:15px;line-height:2.4}.footer-menu-container .footer-menu .title a[data-v-42ac8ec5]:hover,.footer-menu-container .footer-menu ul li a[data-v-42ac8ec5]:hover{text-decoration:underline}.footer-menu-container a[data-v-42ac8ec5]{color:#53b2c8}.nav-container[data-v-42ac8ec5]{display:flex;justify-content:center;align-items:center;flex-direction:column}}@media (min-width:1200px){li a[data-v-42ac8ec5]{display:block}.footer-menu-container .footer-menu .title[data-v-42ac8ec5]{margin-top:0}.nav-image[data-v-42ac8ec5]{width:600px;height:300px;display:block}.footer-menu[data-v-42ac8ec5]{grid-template-rows:repeat(1,minmax(0,1fr));margin-top:50px}.footer-menu>.col_2[data-v-42ac8ec5]{grid-column:1/span 1;grid-row:1}.footer-menu>.col_3[data-v-42ac8ec5]{grid-column:2/span 1;grid-row:1}.footer-menu>.col_4[data-v-42ac8ec5]{grid-column:3/span 1;grid-row:1}.footer-menu>.col_5[data-v-42ac8ec5]{grid-column:4/span 1;grid-row:1}.footer-menu-container[data-v-42ac8ec5]{padding:0 30px;margin-left:120px}ul[data-v-42ac8ec5]{width:200px}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HomeMenu/HomeAppLinks.vue?vue&type=template&id=42ac8ec5&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"menuToggle"},[_vm._ssrNode("<div class=\"footer-menu-container\" data-v-42ac8ec5><div class=\"footer-menu\" data-v-42ac8ec5><div class=\"col_2\" data-v-42ac8ec5><div data-v-42ac8ec5><h3 class=\"title\" data-v-42ac8ec5>Over ons</h3></div> <ul data-v-42ac8ec5><li data-v-42ac8ec5><a href=\"/overons\" data-v-42ac8ec5>Wie wij zijn</a></li> <li data-v-42ac8ec5><a href=\"/hand-made\" data-v-42ac8ec5>Hand-made</a></li> <li data-v-42ac8ec5><a href=\"/nieuws\" data-v-42ac8ec5>Nieuws</a></li> <li data-v-42ac8ec5><a href data-v-42ac8ec5>Occasions</a></li> <li data-v-42ac8ec5><a href=\"/contact\" data-v-42ac8ec5>Contact</a></li></ul></div> <div class=\"col_3\" data-v-42ac8ec5><div data-v-42ac8ec5><h3 class=\"title\" data-v-42ac8ec5>Boten</h3></div> <ul data-v-42ac8ec5><li data-v-42ac8ec5><a href=\"#\" data-v-42ac8ec5>Sloep Raptor</a></li> <li data-v-42ac8ec5><a href=\"#\" data-v-42ac8ec5>Sloep Crafter</a></li> <li data-v-42ac8ec5><a href=\"#\" data-v-42ac8ec5>Sportboot Marshall</a></li> <li data-v-42ac8ec5><a href=\"#\" data-v-42ac8ec5>Sportboot Moonraker</a></li></ul></div> <div class=\"col_4\" data-v-42ac8ec5><div data-v-42ac8ec5><h3 class=\"title\" data-v-42ac8ec5>Jachthaven</h3></div> <ul data-v-42ac8ec5><li data-v-42ac8ec5><a href=\"/jachthaven\" data-v-42ac8ec5>Over de werf</a></li> <li data-v-42ac8ec5><a href=\"/jachthaven#Onderhoud\" data-v-42ac8ec5>Onderhoud</a></li> <li data-v-42ac8ec5><a href=\"/jachthaven#Winterstalling\" data-v-42ac8ec5>Winterstalling</a></li> <li data-v-42ac8ec5><a href=\"#\" data-v-42ac8ec5>D&amp;O Shop</a></li> <li data-v-42ac8ec5><a href=\"/jachthaven#\" data-v-42ac8ec5>Aanbod onderdelen en occasions</a></li></ul></div> <div class=\"col_5\" data-v-42ac8ec5><img"+(_vm._ssrAttr("src",__webpack_require__(33)))+" alt=\"haven\" class=\"nav-image\" data-v-42ac8ec5></div></div></div> <div class=\"mobile-container\" data-v-42ac8ec5><div class=\"mobile-menu\" data-v-42ac8ec5><button class=\"MobileMenu-title one\" data-v-42ac8ec5>Over ons</button> "+((_vm.isOpenOverOns)?("<div class=\"FooterMenu-box\" data-v-42ac8ec5><a href=\"/overons\" class=\"MobileMenu-link\" data-v-42ac8ec5>Wie wij zijn</a><br data-v-42ac8ec5> <a href=\"/hand-made\" class=\"MobileMenu-link\" data-v-42ac8ec5>Hand-made</a><br data-v-42ac8ec5></div>"):"<!---->")+" <button class=\"MobileMenu-title two\" data-v-42ac8ec5>Boten</button> "+((_vm.isOpenBoten)?("<div class=\"FooterMenu-box\" data-v-42ac8ec5><a href=\"#\" class=\"MobileMenu-link\" data-v-42ac8ec5>Alle boten</a><br data-v-42ac8ec5> <a href=\"#\" class=\"MobileMenu-link\" data-v-42ac8ec5>Sloep Raptor</a><br data-v-42ac8ec5> <a href=\"#\" class=\"MobileMenu-link\" data-v-42ac8ec5>Sloep Crafter</a><br data-v-42ac8ec5> <a href class=\"MobileMenu-link\" data-v-42ac8ec5>Sportboot Marshal</a><br data-v-42ac8ec5> <a href=\"#\" class=\"MobileMenu-link\" data-v-42ac8ec5>Sportboot Moonraker</a><br data-v-42ac8ec5></div>"):"<!---->")+" <button class=\"MobileMenu-title three\" data-v-42ac8ec5>Jachthaven</button> "+((_vm.isOpenJachthaven)?("<div class=\"FooterMenu-box\" data-v-42ac8ec5><a href=\"/jachthaven\" class=\"MobileMenu-link\" data-v-42ac8ec5>De werf</a><br data-v-42ac8ec5> <a href=\"/jachthaven#Onderhoud\" class=\"MobileMenu-link\" data-v-42ac8ec5>Onderhoud</a><br data-v-42ac8ec5> <a href=\"/jachthaven#Winterstalling\" class=\"MobileMenu-link\" data-v-42ac8ec5>Winterstalling</a><br data-v-42ac8ec5></div>"):"<!---->")+" <button class=\"MobileMenu-title\" data-v-42ac8ec5><a href=\"/nieuws\" class=\"MobileMenu-title\" data-v-42ac8ec5>Nieuws</a></button> <button class=\"MobileMenu-title\" data-v-42ac8ec5><a href class=\"MobileMenu-title\" data-v-42ac8ec5>Occasions</a></button> <button class=\"MobileMenu-title\" data-v-42ac8ec5><a href=\"/\" class=\"MobileMenu-title\" data-v-42ac8ec5>D&amp;O Shop</a></button> <button class=\"MobileMenu-title\" data-v-42ac8ec5><a href=\"/contact\" class=\"MobileMenu-title\" data-v-42ac8ec5>Contact</a></button> <div class=\"icon-container\" data-v-42ac8ec5><a href=\"https://www.facebook.com/davyorsted\" data-v-42ac8ec5><i class=\"fab fa-facebook-f\" data-v-42ac8ec5></i></a> <a href=\"https://www.instagram.com/davyorsted/?hl=nl\" data-v-42ac8ec5><i class=\"fab fa-instagram\" data-v-42ac8ec5></i></a></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HomeMenu/HomeAppLinks.vue?vue&type=template&id=42ac8ec5&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HomeMenu/HomeAppLinks.vue?vue&type=script&lang=js&
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
/* harmony default export */ var HomeAppLinksvue_type_script_lang_js_ = ({
  data() {
    return {
      isOpenOverOns: false,
      isOpenBoten: false,
      isOpenJachthaven: false
    };
  }

});
// CONCATENATED MODULE: ./components/HomeMenu/HomeAppLinks.vue?vue&type=script&lang=js&
 /* harmony default export */ var HomeMenu_HomeAppLinksvue_type_script_lang_js_ = (HomeAppLinksvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/HomeMenu/HomeAppLinks.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(88)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  HomeMenu_HomeAppLinksvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "42ac8ec5",
  "6c1d64fe"
  
)

/* harmony default export */ var HomeAppLinks = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home-the-header.js.map