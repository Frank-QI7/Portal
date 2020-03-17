webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/contact_us/index.js":
/*!****************************************!*\
  !*** ./components/contact_us/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab */ "./node_modules/@material-ui/lab/esm/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/yunqingqi/Documents/GitHub/Portal/leapsheep_nextjs/components/contact_us/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function Contact() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  function sendEmail(e) {
    e.preventDefault();
    emailjs_com__WEBPACK_IMPORTED_MODULE_5___default.a.sendForm('gmail_test', 'leapsheep', e.target, 'user_ktTMKKT4No1antI4E4MSD').then(function (result) {
      console.log(result.text);
      setOpen(true);
    }, function (error) {// console.log(error.text);
    });
  }

  return __jsx("div", {
    id: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
    open: open,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_material_ui_lab__WEBPACK_IMPORTED_MODULE_4__["Alert"], {
    action: __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      "aria-label": "close",
      color: "inherit",
      size: "small",
      onClick: function onClick() {
        setOpen(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Close"], {
      fontSize: "inherit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Thanks for contacting us!")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    container: true,
    justify: "center",
    alignItems: "stretch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    md: 6,
    lg: 6,
    sm: 12,
    xs: 12,
    className: "contact_us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, " Contact Us"), __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["LocationOn"], {
    className: "location_icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Level 1, 33 Pirie Street,", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), "Adelaide SA 5000", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), "Australia"), __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Email"], {
    className: "email_icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "info@leapsheep.biz")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    md: 6,
    lg: 6,
    sm: 12,
    xs: 12,
    className: "email_us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("form", {
    style: {
      maxWidth: "420px",
      margin: " 20px auto",
      paddingLeft: "15px",
      paddingRight: "15px"
    },
    className: "contact-form",
    onSubmit: sendEmail,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    style: {
      padding: "10px 12px 10px 10px",
      display: 'flex',
      alignItems: 'center',
      marginBottom: "15px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Person"], {
    style: {
      marginRight: "10px",
      marginTop: "-5px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputBase"], {
    type: "text",
    name: "user_name",
    fullWidth: true,
    placeholder: "Full Name",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    style: {
      padding: "10px 12px 10px 10px",
      display: 'flex',
      alignItems: 'center',
      marginBottom: "15px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Email"], {
    style: {
      marginRight: "10px",
      marginTop: "-5px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputBase"], {
    type: "email",
    name: "user_email",
    fullWidth: true,
    placeholder: "Email",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Paper"], {
    style: {
      padding: "10px 12px 10px 10px",
      display: 'flex',
      alignItems: 'center',
      marginBottom: "15px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__["Create"], {
    style: {
      marginRight: "10px",
      marginTop: "-97px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["InputBase"], {
    name: "message",
    fullWidth: true,
    placeholder: "Message",
    required: true,
    multiline: true,
    rows: "6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Fab"], {
    type: "submit",
    style: {
      width: "130px",
      fontFamily: "Open Sans"
    },
    variant: "extended",
    color: "primary",
    "aria-label": "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Send")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=index.js.d0650af86071f668fa60.hot-update.js.map