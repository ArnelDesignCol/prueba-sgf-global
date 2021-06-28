(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_home_home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/Brands.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/Brands.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Brands"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/Categories.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/Categories.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Categories"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/Products.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/Products.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Products",
  data: function data() {
    return {
      width: 0,
      price: 0
    };
  },
  created: function created() {
    this.$store.dispatch("products/getProducts");
    window.addEventListener('resize', this.widthProducts);
    console.log(window.addEventListener('resize', this.widthProducts));
    this.widthProducts();
  },
  methods: {
    selectedReference: function selectedReference(data, index) {
      var _this = this;

      this.products.map(function (item, index) {
        if (item.name == data.name) {
          _this.price = item.product_references[index].price;
        }
      });
    },
    widthProducts: function widthProducts() {
      var body = document.body.clientWidth;
      console.log(body);

      if (body >= 1280) {
        this.width = 4;
      } else if (body <= 539) {
        this.width = 1;
      } else if (body > 540 && body <= 768) {
        this.width = 2;
      } else if (body > 769 && body <= 1024) {
        this.width = 3;
      } else if (body > 1025 && body <= 1279) {
        this.width = 3;
      }
    }
  },
  computed: {
    products: function products() {
      return this.$store.state.products.products;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/SelectPet.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/SelectPet.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "SelectPet",
  data: function data() {
    return {
      classesDog: ["d-flex", "align-center", "perro-select", "selected_pet"],
      classesCat: ["d-flex", "align-center", "gato-select"]
    };
  },
  methods: {
    selectPet: function selectPet(pet) {
      if (pet == "dog") {
        if (this.$store.state.header.pet != pet) {
          this.classesCat.pop();
          this.classesDog.push("selected_pet");
          this.$store.state.header.pet = "dog";
        }
      } else {
        if (this.$store.state.header.pet != pet) {
          this.classesDog.pop();
          this.classesCat.push("selected_pet");
          this.$store.state.header.pet = "cat";
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/banners.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/banners.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Banners",
  created: function created() {
    this.$store.dispatch("banners/getBanners");
  },
  computed: {
    banners: {
      get: function get() {
        return this.$store.state.banners.banners;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/home.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/home.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_banners_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/banners.vue */ "./resources/js/views/home/components/banners.vue");
/* harmony import */ var _components_SelectPet_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SelectPet.vue */ "./resources/js/views/home/components/SelectPet.vue");
/* harmony import */ var _components_Products_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Products.vue */ "./resources/js/views/home/components/Products.vue");
/* harmony import */ var _components_Categories_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Categories.vue */ "./resources/js/views/home/components/Categories.vue");
/* harmony import */ var _components_Brands_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Brands.vue */ "./resources/js/views/home/components/Brands.vue");
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





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Home",
  components: {
    SelectPet: _components_SelectPet_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    Banners: _components_banners_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    Products: _components_Products_vue__WEBPACK_IMPORTED_MODULE_2__.default,
    Categories: _components_Categories_vue__WEBPACK_IMPORTED_MODULE_3__.default,
    Brands: _components_Brands_vue__WEBPACK_IMPORTED_MODULE_4__.default
  }
});

/***/ }),

/***/ "./resources/js/views/home/components/Brands.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/home/components/Brands.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Brands_vue_vue_type_template_id_5eaf4714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brands.vue?vue&type=template&id=5eaf4714& */ "./resources/js/views/home/components/Brands.vue?vue&type=template&id=5eaf4714&");
/* harmony import */ var _Brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Brands.vue?vue&type=script&lang=js& */ "./resources/js/views/home/components/Brands.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Brands_vue_vue_type_template_id_5eaf4714___WEBPACK_IMPORTED_MODULE_0__.render,
  _Brands_vue_vue_type_template_id_5eaf4714___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/home/components/Brands.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/home/components/Categories.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/home/components/Categories.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Categories_vue_vue_type_template_id_1394e764___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories.vue?vue&type=template&id=1394e764& */ "./resources/js/views/home/components/Categories.vue?vue&type=template&id=1394e764&");
/* harmony import */ var _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories.vue?vue&type=script&lang=js& */ "./resources/js/views/home/components/Categories.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Categories_vue_vue_type_template_id_1394e764___WEBPACK_IMPORTED_MODULE_0__.render,
  _Categories_vue_vue_type_template_id_1394e764___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/home/components/Categories.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/home/components/Products.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/home/components/Products.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Products_vue_vue_type_template_id_7bc1faac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=7bc1faac& */ "./resources/js/views/home/components/Products.vue?vue&type=template&id=7bc1faac&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/views/home/components/Products.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Products_vue_vue_type_template_id_7bc1faac___WEBPACK_IMPORTED_MODULE_0__.render,
  _Products_vue_vue_type_template_id_7bc1faac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/home/components/Products.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/home/components/SelectPet.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/home/components/SelectPet.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SelectPet_vue_vue_type_template_id_e393ce2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectPet.vue?vue&type=template&id=e393ce2a& */ "./resources/js/views/home/components/SelectPet.vue?vue&type=template&id=e393ce2a&");
/* harmony import */ var _SelectPet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SelectPet.vue?vue&type=script&lang=js& */ "./resources/js/views/home/components/SelectPet.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SelectPet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SelectPet_vue_vue_type_template_id_e393ce2a___WEBPACK_IMPORTED_MODULE_0__.render,
  _SelectPet_vue_vue_type_template_id_e393ce2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/home/components/SelectPet.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/home/components/banners.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/home/components/banners.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _banners_vue_vue_type_template_id_cd73d162___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banners.vue?vue&type=template&id=cd73d162& */ "./resources/js/views/home/components/banners.vue?vue&type=template&id=cd73d162&");
/* harmony import */ var _banners_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banners.vue?vue&type=script&lang=js& */ "./resources/js/views/home/components/banners.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _banners_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _banners_vue_vue_type_template_id_cd73d162___WEBPACK_IMPORTED_MODULE_0__.render,
  _banners_vue_vue_type_template_id_cd73d162___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/home/components/banners.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/home/home.vue":
/*!******************************************!*\
  !*** ./resources/js/views/home/home.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_vue_vue_type_template_id_078146a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=078146a0& */ "./resources/js/views/home/home.vue?vue&type=template&id=078146a0&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ "./resources/js/views/home/home.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _home_vue_vue_type_template_id_078146a0___WEBPACK_IMPORTED_MODULE_0__.render,
  _home_vue_vue_type_template_id_078146a0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/home/home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/home/components/Brands.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/home/components/Brands.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Brands.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/Brands.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/home/components/Categories.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/home/components/Categories.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/Categories.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/home/components/Products.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/home/components/Products.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/Products.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/home/components/SelectPet.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/home/components/SelectPet.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectPet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectPet.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/SelectPet.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectPet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/home/components/banners.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/home/components/banners.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_banners_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./banners.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/banners.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_banners_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/home/home.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/home/home.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/home/components/Brands.vue?vue&type=template&id=5eaf4714&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/home/components/Brands.vue?vue&type=template&id=5eaf4714& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_template_id_5eaf4714___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_template_id_5eaf4714___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_template_id_5eaf4714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Brands.vue?vue&type=template&id=5eaf4714& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/Brands.vue?vue&type=template&id=5eaf4714&");


/***/ }),

/***/ "./resources/js/views/home/components/Categories.vue?vue&type=template&id=1394e764&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/home/components/Categories.vue?vue&type=template&id=1394e764& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_1394e764___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_1394e764___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_1394e764___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Categories.vue?vue&type=template&id=1394e764& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/Categories.vue?vue&type=template&id=1394e764&");


/***/ }),

/***/ "./resources/js/views/home/components/Products.vue?vue&type=template&id=7bc1faac&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/home/components/Products.vue?vue&type=template&id=7bc1faac& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_7bc1faac___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_7bc1faac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_7bc1faac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Products.vue?vue&type=template&id=7bc1faac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/Products.vue?vue&type=template&id=7bc1faac&");


/***/ }),

/***/ "./resources/js/views/home/components/SelectPet.vue?vue&type=template&id=e393ce2a&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/home/components/SelectPet.vue?vue&type=template&id=e393ce2a& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectPet_vue_vue_type_template_id_e393ce2a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectPet_vue_vue_type_template_id_e393ce2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SelectPet_vue_vue_type_template_id_e393ce2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SelectPet.vue?vue&type=template&id=e393ce2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/SelectPet.vue?vue&type=template&id=e393ce2a&");


/***/ }),

/***/ "./resources/js/views/home/components/banners.vue?vue&type=template&id=cd73d162&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/home/components/banners.vue?vue&type=template&id=cd73d162& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_banners_vue_vue_type_template_id_cd73d162___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_banners_vue_vue_type_template_id_cd73d162___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_banners_vue_vue_type_template_id_cd73d162___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./banners.vue?vue&type=template&id=cd73d162& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/banners.vue?vue&type=template&id=cd73d162&");


/***/ }),

/***/ "./resources/js/views/home/home.vue?vue&type=template&id=078146a0&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/home/home.vue?vue&type=template&id=078146a0& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_078146a0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_078146a0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_078146a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./home.vue?vue&type=template&id=078146a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/home.vue?vue&type=template&id=078146a0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/Brands.vue?vue&type=template&id=5eaf4714&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/Brands.vue?vue&type=template&id=5eaf4714& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "brands mb-15" },
    [
      _c(
        "v-container",
        [
          _c("h2", { staticClass: "text-primary mb-15" }, [
            _vm._v("Marcas Destacadas")
          ]),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c(
                "v-col",
                {
                  staticClass: "d-flex justify-center",
                  attrs: { md: "2", cols: "6", sm: "4" }
                },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "rounded-circle",
                      attrs: { width: "100", height: "100" }
                    },
                    [
                      _c("img", {
                        staticStyle: { width: "100%" },
                        attrs: {
                          src:
                            "https://laikapp.s3.amazonaws.com/dev_images_categories/hills_circulo4.png",
                          alt: ""
                        }
                      })
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "d-flex justify-center",
                  attrs: { md: "2", cols: "6", sm: "4" }
                },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "rounded-circle",
                      attrs: { width: "100", height: "100" }
                    },
                    [
                      _c("img", {
                        staticStyle: { width: "100%" },
                        attrs: {
                          src:
                            "https://laikapp.s3.amazonaws.com/dev_images_categories/1592410196_SALVAJE_FOOD_SAS__1226X1028.PNG",
                          alt: ""
                        }
                      })
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "d-flex justify-center",
                  attrs: { md: "2", cols: "6", sm: "4" }
                },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "rounded-circle",
                      attrs: { width: "100", height: "100" }
                    },
                    [
                      _c("img", {
                        staticStyle: { width: "100%" },
                        attrs: {
                          src:
                            "https://s3.us-east-1.amazonaws.com/laikapp/images_categories/total_max_circulo2.png",
                          alt: ""
                        }
                      })
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "d-flex justify-center",
                  attrs: { md: "2", cols: "6", sm: "4" }
                },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "rounded-circle",
                      attrs: { width: "100", height: "100" }
                    },
                    [
                      _c("img", {
                        staticStyle: { width: "100%" },
                        attrs: {
                          src:
                            "https://s3.us-east-1.amazonaws.com/laikapp/images_categories/EQUILIBRIO_CIRCULO2.png",
                          alt: ""
                        }
                      })
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "d-flex justify-center",
                  attrs: { md: "2", cols: "6", sm: "4" }
                },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "rounded-circle",
                      attrs: { width: "100", height: "100" }
                    },
                    [
                      _c("img", {
                        staticStyle: { width: "100%" },
                        attrs: {
                          src:
                            "https://s3.us-east-1.amazonaws.com/laikapp/images_categories/EQUILIBRIO_CIRCULO2.png",
                          alt: ""
                        }
                      })
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "d-flex justify-center",
                  attrs: { md: "2", cols: "6", sm: "4" }
                },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "rounded-circle",
                      attrs: { width: "100", height: "100" }
                    },
                    [
                      _c("img", {
                        staticStyle: { width: "100%" },
                        attrs: {
                          src:
                            "https://s3.us-east-1.amazonaws.com/laikapp/images_categories/EQUILIBRIO_CIRCULO2.png",
                          alt: ""
                        }
                      })
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/Categories.vue?vue&type=template&id=1394e764&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/Categories.vue?vue&type=template&id=1394e764& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { staticClass: "categories" },
    [
      _c("h2", { staticClass: "text-primary" }, [_vm._v("Categorias")]),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c(
            "v-row",
            { staticClass: "mt-10 mb-10 d-flex justify-center" },
            [
              _c(
                "v-col",
                { attrs: { md: "3", sm: "6", cols: "12" } },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-row",
                        { staticClass: "d-flex justify-center align-center" },
                        [
                          _c("img", {
                            attrs: {
                              src:
                                "https://laikapp.s3.amazonaws.com/images_categories/ICONS_COTEGORY_ALIMENTOS.png",
                              alt: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-primary" }, [
                            _vm._v("Alimentos")
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { md: "3", sm: "6", cols: "12" } },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-row",
                        { staticClass: "d-flex justify-center align-center" },
                        [
                          _c("img", {
                            attrs: {
                              src:
                                "https://laikapp.s3.amazonaws.com/images_categories/ICONS_COTEGORY_SNACKS.png",
                              alt: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-primary" }, [
                            _vm._v("Snacks")
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { md: "3", sm: "6", cols: "12" } },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-row",
                        { staticClass: "d-flex justify-center align-center" },
                        [
                          _c("img", {
                            attrs: {
                              src:
                                "https://laikapp.s3.amazonaws.com/dev_images_categories/1614033964Categoria_farmacia.png",
                              alt: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-primary" }, [
                            _vm._v("Farmapet")
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { md: "3", sm: "6", cols: "12" } },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-row",
                        { staticClass: "d-flex justify-center align-center" },
                        [
                          _c("img", {
                            attrs: {
                              src:
                                "https://laikapp.s3.amazonaws.com/dev_images_categories/1613668386Categoria_higiene_2.png",
                              alt: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-primary" }, [
                            _vm._v("Cuidado e higiene")
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { md: "3", sm: "6", cols: "12" } },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-row",
                        { staticClass: "d-flex justify-center align-center" },
                        [
                          _c("img", {
                            attrs: {
                              src:
                                "https://laikapp.s3.amazonaws.com/dev_images_categories/1612554392Juguetes.png",
                              alt: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-primary" }, [
                            _vm._v("Juguetes")
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { md: "3", sm: "6", cols: "12" } },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-row",
                        { staticClass: "d-flex justify-center align-center" },
                        [
                          _c("img", {
                            attrs: {
                              src:
                                "https://laikapp.s3.amazonaws.com/images_categories/categoria_accesorios+(1).png",
                              alt: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-primary" }, [
                            _vm._v("Accesorios")
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { md: "3", sm: "6", cols: "12" } },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-row",
                        { staticClass: "d-flex justify-center align-center" },
                        [
                          _c("img", {
                            attrs: {
                              src:
                                "https://laikapp.s3.amazonaws.com/dev_images_categories/1613595491Categoria_pet_owner.png",
                              alt: ""
                            }
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-primary" }, [
                            _vm._v("Para PetLovers")
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/Products.vue?vue&type=template&id=7bc1faac&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/Products.vue?vue&type=template&id=7bc1faac& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { staticClass: "products" },
    [
      _c("h2", { staticClass: "text-primary" }, [
        _vm._v("Un universo lleno de ofertas")
      ]),
      _vm._v(" "),
      _c(
        "carousel",
        {
          staticClass: "carousel__products",
          attrs: { perPage: _vm.width, autoplay: true, autoplayTimeout: 5000 }
        },
        _vm._l(_vm.products, function(item, index) {
          return _c(
            "slide",
            { key: index },
            [
              _c(
                "v-card",
                {
                  staticClass: "mx-auto my-12 card__products",
                  attrs: { height: "auto" }
                },
                [
                  _c(
                    "template",
                    { slot: "progress" },
                    [
                      _c("v-progress-linear", {
                        attrs: {
                          color: "deep-purple",
                          height: "100",
                          indeterminate: ""
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-img", {
                    staticClass: "img-card",
                    attrs: { height: "300", src: item.product_image_url }
                  }),
                  _vm._v(" "),
                  _c("v-card-title", [_vm._v(_vm._s(item.name))]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-row",
                        { staticClass: "mx-0", attrs: { align: "center" } },
                        [
                          _c("v-rating", {
                            attrs: {
                              value: 4.5,
                              color: "amber",
                              dense: "",
                              "half-increments": "",
                              readonly: "",
                              size: "14"
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "grey--text ms-4" }, [
                            _vm._v("4.5 (413)")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { attrs: { md: "12", cols: "12" } },
                            [
                              _c(
                                "v-row",
                                { staticClass: "m-0" },
                                _vm._l(item.product_references, function(
                                  i,
                                  ind
                                ) {
                                  return _c(
                                    "h2",
                                    {
                                      key: ind,
                                      staticClass: "my-4 text-title"
                                    },
                                    [
                                      _vm._v(
                                        "\n                  $ " +
                                          _vm._s(i.price) +
                                          "\n                "
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-col",
                            { attrs: { md: "12", cols: "12" } },
                            [
                              _c(
                                "v-row",
                                { staticClass: "d-flex align-center m-0" },
                                [
                                  _vm._l(item.product_references, function(
                                    i,
                                    ind
                                  ) {
                                    return _c(
                                      "h2",
                                      {
                                        key: ind,
                                        staticClass:
                                          "my-4 text-title text-danger"
                                      },
                                      [
                                        _vm._v(
                                          "\n                  $ " +
                                            _vm._s(i.price_laika_member) +
                                            "\n                "
                                        )
                                      ]
                                    )
                                  }),
                                  _vm._v(" "),
                                  _c("img", {
                                    staticClass: "ml-5",
                                    staticStyle: {
                                      width: "20%",
                                      height: "20px"
                                    },
                                    attrs: {
                                      src: "/images/laikamember.png",
                                      alt: ""
                                    }
                                  })
                                ],
                                2
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider", { staticClass: "mx-4" }),
                  _vm._v(" "),
                  _c("v-card-title", [_vm._v("Referencias")]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-chip-group",
                        {
                          attrs: {
                            "active-class": "deep-purple accent-4 white--text",
                            column: ""
                          },
                          model: {
                            value: item.id,
                            callback: function($$v) {
                              _vm.$set(item, "id", $$v)
                            },
                            expression: "item.id"
                          }
                        },
                        _vm._l(item.product_references, function(i, ind) {
                          return _c("v-chip", { key: ind }, [
                            _vm._v(
                              "\n              " +
                                _vm._s(i.reference) +
                                "\n            "
                            )
                          ])
                        }),
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-btn", { staticClass: "button__add--cart" }, [
                        _vm._v(" Agregar Al Carrito ")
                      ])
                    ],
                    1
                  )
                ],
                2
              )
            ],
            1
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/SelectPet.vue?vue&type=template&id=e393ce2a&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/SelectPet.vue?vue&type=template&id=e393ce2a& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "select__pet mt-5" },
    [
      _c(
        "v-container",
        [
          _c(
            "v-row",
            { staticClass: "d-flex justify-center align-center" },
            [
              _c(
                "v-col",
                {
                  staticClass: "mr-2",
                  class: _vm.classesDog,
                  attrs: { cols: "4" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.selectPet("dog")
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "mr-2",
                    attrs: {
                      src: "https://laika.com.co/assets/home/dog_mc.png",
                      alt: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-primary" }, [_vm._v("Perro")])
                ]
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  class: _vm.classesCat,
                  attrs: { cols: "4" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.selectPet("cat")
                    }
                  }
                },
                [
                  _c("img", {
                    staticClass: "mr-2",
                    attrs: {
                      src: "https://laika.com.co/assets/home/cat_mc.png",
                      alt: ""
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-primary" }, [_vm._v("Gato ")])
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            {
              staticClass: "d-flex justify-center align-center mt-5",
              attrs: { cols: "12" }
            },
            [_c("img", { attrs: { src: "/images/laikamember.png", alt: "" } })]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/banners.vue?vue&type=template&id=cd73d162&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/components/banners.vue?vue&type=template&id=cd73d162& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "banners" },
    [
      _c(
        "v-container",
        [
          _c(
            "carousel",
            { attrs: { perPage: 1, autoplay: true, autoplayTimeout: 5000 } },
            _vm._l(_vm.banners, function(item, index) {
              return _c("slide", { key: index }, [
                _c("img", { attrs: { src: item.banner_url, alt: "" } })
              ])
            }),
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/home.vue?vue&type=template&id=078146a0&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/home/home.vue?vue&type=template&id=078146a0& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("SelectPet"),
      _vm._v(" "),
      _c("Banners"),
      _vm._v(" "),
      _c("Categories"),
      _vm._v(" "),
      _c("Brands"),
      _vm._v(" "),
      _c("Products"),
      _vm._v(" "),
      _c(
        "v-fab-transition",
        [
          _c(
            "v-btn",
            {
              staticClass: "v-btn--example whatsapp",
              attrs: {
                color: "transparent",
                fab: "",
                large: "",
                dark: "",
                bottom: "",
                right: "",
                fixed: ""
              }
            },
            [
              _c("img", {
                staticStyle: { width: "64px" },
                attrs: {
                  src: "https://laika.com.co/assets/whatsapp_1.png",
                  alt: ""
                }
              })
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-fab-transition",
        [
          _c(
            "v-btn",
            {
              staticClass: "v-btn--example",
              attrs: {
                color: "primary",
                fab: "",
                large: "",
                dark: "",
                bottom: "",
                right: "",
                fixed: ""
              }
            },
            [_c("v-icon", [_vm._v("mdi-message")])],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);