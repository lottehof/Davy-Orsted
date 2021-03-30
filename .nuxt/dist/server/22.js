exports.ids = [22];
exports.modules = {

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/recaptcha.vue?vue&type=template&id=72d02ac7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"g-recaptcha",attrs:{"data-sitekey":_vm.siteKey || _vm.$recaptcha.siteKey,"data-size":_vm.dataSize || _vm.$recaptcha.size,"data-theme":_vm.dataTheme,"data-badge":_vm.dataBadge,"data-tabindex":_vm.dataTabindex,"data-callback":"recaptchaSuccessCallback","data-expired-callback":"recaptchaExpiredCallback","data-error-callback":"recaptchaErrorCallback"}},[])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/recaptcha.vue?vue&type=template&id=72d02ac7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/recaptcha.vue?vue&type=script&lang=js&
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
/* harmony default export */ var recaptchavue_type_script_lang_js_ = ({
  props: {
    siteKey: {
      type: String,
      default: ''
    },
    dataTheme: {
      default: 'light',
      type: String,
      validator: value => {
        return ['dark', 'light'].includes(value);
      }
    },
    dataSize: {
      default: 'normal',
      type: String,
      validator: value => {
        return ['compact', 'normal', 'invisible'].includes(value);
      }
    },
    dataBadge: {
      default: 'bottomright',
      type: String,
      validator: value => {
        return ['bottomright', 'bottomleft', 'inline'].includes(value);
      }
    },
    dataTabindex: {
      default: 0,
      type: Number
    }
  },

  beforeDestroy() {
    this.$recaptcha.destroy();
  },

  mounted() {
    this.$recaptcha.init();
    this.$recaptcha.on('recaptcha-error', this.onError);
    this.$recaptcha.on('recaptcha-success', this.onSuccess);
    this.$recaptcha.on('recaptcha-expired', this.onExpired);
  },

  methods: {
    onError(message) {
      return this.$emit('error', message);
    },

    onSuccess(token) {
      return this.$emit('success', token);
    },

    onExpired() {
      return this.$emit('expired');
    }

  }
});
// CONCATENATED MODULE: ./.nuxt/recaptcha.vue?vue&type=script&lang=js&
 /* harmony default export */ var _nuxt_recaptchavue_type_script_lang_js_ = (recaptchavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/recaptcha.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _nuxt_recaptchavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "45da9d6c"
  
)

/* harmony default export */ var recaptcha = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=22.js.map