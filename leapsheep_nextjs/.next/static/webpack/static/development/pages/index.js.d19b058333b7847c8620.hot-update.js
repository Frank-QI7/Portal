webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/carousel_card/Carousel.js":
/*!**********************************************!*\
  !*** ./components/carousel_card/Carousel.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Carousel; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var auto_bind__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! auto-bind */ "./node_modules/auto-bind/index.js");
/* harmony import */ var auto_bind__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(auto_bind__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/FiberManualRecord */ "./node_modules/@material-ui/icons/FiberManualRecord.js");
/* harmony import */ var _material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/NavigateBefore */ "./node_modules/@material-ui/icons/NavigateBefore.js");
/* harmony import */ var _material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/NavigateNext */ "./node_modules/@material-ui/icons/NavigateNext.js");
/* harmony import */ var _material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "/Users/yunqingqi/Documents/GitHub/Portal/leapsheep_nextjs/components/carousel_card/Carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;







var Carousel = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Carousel, _Component);

  function Carousel(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Carousel);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Carousel).call(this, props));
    _this.state = {
      active: 0,
      autoPlay: _this.props.autoPlay !== undefined ? _this.props.autoPlay : true,
      interval: _this.props.interval !== undefined ? _this.props.interval : 4000
    };
    _this.timer = null;
    auto_bind__WEBPACK_IMPORTED_MODULE_9___default()(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.start();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stop();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.autoPlay !== prevState.autoPlay || prevProps.interval !== prevState.interval) {
        this.reset();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }
  }, {
    key: "start",
    value: function start() {
      if (this.state.autoPlay) {
        this.timer = setInterval(this.next, this.state.interval);
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.stop();

      if (this.state.autoPlay) {
        this.start();
      }
    }
  }, {
    key: "pressIndicator",
    value: function pressIndicator(index) {
      this.setState({
        active: index
      }, this.reset);
    }
  }, {
    key: "next",
    value: function next(event) {
      var next = this.state.active + 1 > this.props.children.length - 1 ? 0 : this.state.active + 1;
      this.setState({
        active: next
      }, this.reset);
      if (event) event.stopPropagation();
    }
  }, {
    key: "prev",
    value: function prev(event) {
      var prev = this.state.active - 1 < 0 ? this.props.children.length - 1 : this.state.active - 1;
      this.setState({
        active: prev
      }, this.reset);
      if (event) event.stopPropagation();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var indicators = this.props.indicators !== undefined ? this.props.indicators : true;
      var animation = this.props.animation !== undefined ? this.props.animation : "fade";
      return __jsx("div", {
        className: "Carousel ".concat(this.props.className ? this.props.className : ""),
        onMouseEnter: this.stop,
        onMouseOut: this.reset,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(this.props.children) ? this.props.children.map(function (child, index) {
        return __jsx(CarouselItem, {
          key: index,
          active: index === _this2.state.active ? true : false,
          child: child,
          animation: animation,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: this
        });
      }) : __jsx(CarouselItem, {
        key: 0,
        active: true,
        child: this.props.children,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }), __jsx("div", {
        className: "Next ButtonWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
        className: "Next Button mui--align-middle",
        onClick: this.next,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, __jsx(_material_ui_icons_NavigateNext__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }))), __jsx("div", {
        className: "Prev ButtonWrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
        className: "Prev Button mui--align-middle",
        onClick: this.prev,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, __jsx(_material_ui_icons_NavigateBefore__WEBPACK_IMPORTED_MODULE_11___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }))), indicators ? __jsx(Indicators, {
        length: this.props.children.length,
        active: this.state.active,
        press: this.pressIndicator,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }) : null);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.autoPlay !== prevState.autoPlay || nextProps.interval !== prevState.interval) {
        return {
          autoPlay: nextProps.autoPlay !== undefined ? nextProps.autoPlay : true,
          interval: nextProps.interval !== undefined ? nextProps.interval : 4000
        };
      } else return null;
    }
  }]);

  return Carousel;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



function CarouselItem(props) {
  return (// props.active ? 
    // (
    __jsx("div", {
      className: "CarouselItem",
      hidden: !props.active,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, props.animation === "slide" ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Slide"], {
      direction: "left",
      "in": props.active,
      timeout: 200,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, props.child)) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Fade"], {
      "in": props.active,
      timeout: 500,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, props.child))) // ) : null

  );
}

function Indicators(props) {
  var indicators = [];

  var _loop = function _loop(i) {
    var className = i === props.active ? "Active Indicator" : "Indicator";

    var item = __jsx(_material_ui_icons_FiberManualRecord__WEBPACK_IMPORTED_MODULE_10___default.a, {
      key: i,
      size: "small",
      className: className,
      onClick: function onClick() {
        props.press(i);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    });

    indicators.push(item);
  };

  for (var i = 0; i < props.length; i++) {
    _loop(i);
  }

  return __jsx("div", {
    className: "Indicators",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, indicators);
}

/***/ }),

/***/ "./components/carousel_card/index.js":
/*!*******************************************!*\
  !*** ./components/carousel_card/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel */ "./components/carousel_card/Carousel.js");
/* harmony import */ var _outer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../outer */ "./components/outer/index.js");
var _jsxFileName = "/Users/yunqingqi/Documents/GitHub/Portal/leapsheep_nextjs/components/carousel_card/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function HomeCarousel() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(_outer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    name: "Testimonials",
    Component: component,
    color: "#fafafa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
}

function component() {
  return __jsx(_Carousel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 4,
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    md: 3,
    style: {
      padding: "30px",
      marginBottom: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: "avatar",
    alt: "Mark Keough",
    src: "/Mark_Keough.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("div", {
    className: "author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Mark Keough"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Founder & CEO of Intrinsic Learning"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 11,
    sm: 9,
    md: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: "words",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\"LeapSheep represent innovative, contemporary thinking regarding how to launch a start-up or plan business growth. They are fully aware of the nature of modern economies, how they are less tied to government and national boundaries, and what it takes to cut through the jargon, and find customers for your products and services.  Despite over 25 years starting companies myself, I learned much, and challenged my thinking in just a few hours.\""))))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 4,
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    md: 3,
    style: {
      padding: "30px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: "avatar",
    alt: "Matthew Pyke",
    src: "/Matthew_Pyke.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("div", {
    className: "author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Matthew Pyke"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "TilliT Market Fit Lead"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 11,
    sm: 9,
    md: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: "words",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "\"LeapSheep\u2019s Business Builder program enabled us to effectively develop our idea into a business. The combination of mentoring, practical hands on operational sessions, oversight, and the validation at each stage of the business building journey meant that our Board had the information they needed to make the right decisions, at the right time, about how far to progress the business idea.\""))))), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxWidth: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    spacing: 4,
    justify: "center",
    alignItems: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    md: 3,
    style: {
      padding: "30px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    className: "avatar",
    alt: "Tina McIntosh",
    src: "/Tina_McIntosh.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx("div", {
    className: "author",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Tina McIntosh"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "CEO of Brain Changer"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    xs: 11,
    sm: 9,
    md: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Paper"], {
    className: "words",
    variant: "outlined",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "\"LeapSheep has been our team's secret weapon, their unparalleled knowledge of the startup building journey and support has not only propelled our growth but kept us sane!\""))))));
}

/* harmony default export */ __webpack_exports__["default"] = (HomeCarousel);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/react-material-ui-carousel/dist/components/Carousel.js":
false,

/***/ "./node_modules/react-material-ui-carousel/dist/index.js":
false

})
//# sourceMappingURL=index.js.d19b058333b7847c8620.hot-update.js.map