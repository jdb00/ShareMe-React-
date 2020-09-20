webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./API */ "./src/API.js");
/* harmony import */ var _RouteSplashPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RouteSplashPage */ "./src/RouteSplashPage.js");
/* harmony import */ var _RouteLogIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RouteLogIn */ "./src/RouteLogIn.js");
/* harmony import */ var _RouteSignUp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RouteSignUp */ "./src/RouteSignUp.js");
/* harmony import */ var _RouteAddShare__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RouteAddShare */ "./src/RouteAddShare.js");
/* harmony import */ var _RouteNewShare__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RouteNewShare */ "./src/RouteNewShare.js");
/* harmony import */ var _RouteUpdateShare__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RouteUpdateShare */ "./src/RouteUpdateShare.js");
/* harmony import */ var _RouteUserPosts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RouteUserPosts */ "./src/RouteUserPosts.js");
/* harmony import */ var _RouteSettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./RouteSettings */ "./src/RouteSettings.js");
/* harmony import */ var _NewCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NewCard */ "./src/NewCard.js");
var _jsxFileName = "/Users/madmax/Desktop/shareMe app Summative/ShareMe-React-/src/App.js";













class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.setCurrentUser = user => {
      this.setState({
        currentUser: user
      });
    };

    this.state = {
      shares: [],
      currentUser: null
    };
  }

  componentDidMount() {
    _API__WEBPACK_IMPORTED_MODULE_2__["default"].getShares().then(res => this.setState({
      shares: res.data
    })); //local storage

    var userId = localStorage.getItem('userId');

    if (userId) {
      _API__WEBPACK_IMPORTED_MODULE_2__["default"].getSingleUser(userId).then(res => this.setState({
        currentUser: res.data
      }));
    }
  }

  render() {
    var {
      currentUser
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_1__["Router"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RouteSplashPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
      path: "splash",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RouteLogIn__WEBPACK_IMPORTED_MODULE_4__["default"], {
      setCurrentUser: this.setCurrentUser,
      path: "/users/authenticate",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RouteSignUp__WEBPACK_IMPORTED_MODULE_5__["default"], {
      currentUser: currentUser,
      setCurrentUser: this.setCurrentUser,
      path: "users/create",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RouteSettings__WEBPACK_IMPORTED_MODULE_10__["default"], {
      path: "user/settings",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RouteUserPosts__WEBPACK_IMPORTED_MODULE_9__["default"], {
      currentUser: currentUser,
      setCurrentUser: this.setCurrentUser,
      path: "user/posts",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RouteAddShare__WEBPACK_IMPORTED_MODULE_6__["default"], {
      currentUser: currentUser,
      path: "shares/add",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RouteNewShare__WEBPACK_IMPORTED_MODULE_7__["default"], {
      path: "shares",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RouteUpdateShare__WEBPACK_IMPORTED_MODULE_8__["default"], {
      path: "shares/:id/update",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }
    }), currentUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
      currentUser: currentUser,
      path: "new/card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 32
      }
    }) : null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.515e759aabeb4c04e0db.hot-update.js.map