webpackHotUpdate("static\\development\\pages\\alloy.js",{

/***/ "./reactComponents/AlloyCard.js":
/*!**************************************!*\
  !*** ./reactComponents/AlloyCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _IngredientTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IngredientTable */ "./reactComponents/IngredientTable.js");
/* harmony import */ var _BasicInfoTotal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BasicInfoTotal */ "./reactComponents/BasicInfoTotal.js");
/* harmony import */ var _UsedIn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UsedIn */ "./reactComponents/UsedIn.js");
/* harmony import */ var _CSS_app_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../CSS/app.css */ "./CSS/app.css");
/* harmony import */ var _CSS_app_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_CSS_app_css__WEBPACK_IMPORTED_MODULE_9__);











var AlloyCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AlloyCard, _React$Component);

  function AlloyCard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AlloyCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AlloyCard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AlloyCard, [{
    key: "render",
    value: function render() {
      var Name = this.props.alloy.name;
      var Volume = this.props.alloy.volume;
      var Mass = this.props.alloy.mass;
      var Description = this.props.alloy.description;
      var Ingredients = this.props.alloy.ingredients;
      var Quantities = this.props.alloy.quantities;
      var Output = this.props.alloy.output;
      var Types = this.props.alloy.types;

      if (!Types) {
        console.log("inside bool 2");
        Types = new Array(Ingredients.length).fill("Resource");
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _CSS_app_css__WEBPACK_IMPORTED_MODULE_9___default.a.cardButtons
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        action: "/alloyDelete/" + Name,
        method: "post"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "submit",
        value: "Delete"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_BasicInfoTotal__WEBPACK_IMPORTED_MODULE_7__["default"], {
        name: Name,
        volume: Volume,
        mass: Mass,
        description: Description,
        output: Output
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_IngredientTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
        ingredients: Ingredients,
        types: Types,
        quantities: Quantities
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_UsedIn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        item: this.props.alloy._id
      }));
    }
  }]);

  return AlloyCard;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AlloyCard);

/***/ })

})
//# sourceMappingURL=alloy.js.90a34124a6e24d1c9ea3.hot-update.js.map