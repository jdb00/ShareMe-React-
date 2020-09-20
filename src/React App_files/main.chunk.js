(this["webpackJsonpshare-me-react"] = this["webpackJsonpshare-me-react"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;1,300&display=swap);"]);
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css);"]);
exports.push([module.i, "@import url(https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css);"]);
// Module
exports.push([module.i, "* {\n  padding: 0;\n  margin: 0;\n  border: none;\n  list-style-type: none;\n}\n\nbody {\n  font-family: 'Roboto', sans-serif;\n}\n\n.app {\n  width: 100vw;\n  background-color: #0D0D0D;\n}\n\n.app .splashPage header .fa-chevron-left {\n  position: absolute;\n  top: 1em;\n  left: 1em;\n  flex: 0 0 2em;\n  font-size: 2em;\n  color: #0597F2;\n}\n\n.app .splashPage main {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.app .splashPage main .logo img {\n  display: block;\n  margin: 0 auto;\n}\n\n.app .splashPage main .signin-signup {\n  margin: 0 auto;\n  width: 40%;\n  text-align: center;\n}\n\n.app .splashPage main .signin-signup button {\n  position: relative;\n  margin: 0 auto;\n  background-color: #E5E5E5;\n  padding: 0em 2em;\n  border: none;\n  color: #0597F2;\n  border-radius: 15px;\n  margin-bottom: 2em;\n}\n\n.app .splashPage footer {\n  height: 3em;\n  border-radius: .5em .5em 0em 0em;\n  background-color: #00283e;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  padding: .5em 2em;\n  box-sizing: border-box;\n  width: 100vw;\n}\n\n.app .splashPage footer i {\n  z-index: 100;\n  font-size: 2.5em;\n  color: #0597F2;\n}\n\n.app .splashPage footer p {\n  color: #0CF25D;\n  margin: 0;\n  width: 100%;\n  text-align: center;\n  border-radius: 10px;\n  box-shadow: 0px 0px 5px #0CF25D;\n}\n\n.app .signUp, .app .signIn {\n  height: 100vh;\n}\n\n.app .signUp header, .app .signIn header {\n  text-align: center;\n  padding-top: 3em;\n  box-sizing: border-box;\n}\n\n.app .signUp header .fa-chevron-left, .app .signIn header .fa-chevron-left {\n  position: absolute;\n  top: 1em;\n  left: 1em;\n  flex: 0 0 2em;\n  font-size: 2em;\n  color: #0597F2;\n}\n\n.app .signUp main, .app .signIn main {\n  text-align: center;\n}\n\n.app .signUp main .logIn, .app .signUp main .logUp, .app .signIn main .logIn, .app .signIn main .logUp {\n  position: relative;\n}\n\n.app .signUp main .logIn h1, .app .signUp main .logUp h1, .app .signIn main .logIn h1, .app .signIn main .logUp h1 {\n  position: absolute;\n  text-align: center;\n  width: 100vw;\n  color: #E5E5E5;\n  letter-spacing: .1em;\n  padding-top: 1.25em;\n  box-sizing: border-box;\n}\n\n.app .signUp main img, .app .signIn main img {\n  width: 8em;\n  padding-top: 3em;\n  box-sizing: border-box;\n}\n\n.app .signUp main form, .app .signIn main form {\n  width: 90vw;\n  margin: 0 auto;\n  padding-top: 3em;\n  box-sizing: border-box;\n}\n\n.app .signUp main form input, .app .signIn main form input {\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid rgba(5, 151, 242, 0.5);\n}\n\n.app .signUp main form ::placeholder, .app .signIn main form ::placeholder {\n  color: rgba(5, 151, 242, 0.5);\n}\n\n.app .signUp main p, .app .signIn main p {\n  font-size: 1.5em;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: red;\n}\n\n.app .signUp main button, .app .signIn main button {\n  position: relative;\n  margin: 0 auto;\n  background-color: #E5E5E5;\n  padding: 0em 2em;\n  border: none;\n  color: #0597F2;\n  border-radius: 15px;\n  margin-top: 2em;\n}\n\n.app .signUp footer, .app .signIn footer {\n  height: 3em;\n  border-radius: .5em .5em 0em 0em;\n  background-color: #00283e;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  padding: .5em 2em;\n  box-sizing: border-box;\n  width: 100vw;\n}\n\n.app .signUp footer i, .app .signIn footer i {\n  z-index: 100;\n  font-size: 2.5em;\n  color: #0597F2;\n}\n\n.app .signUp footer p, .app .signIn footer p {\n  color: #0CF25D;\n  margin: 0;\n  width: 100%;\n  text-align: center;\n  border-radius: 10px;\n  box-shadow: 0px 0px 5px #0CF25D;\n}\n\n.app .newShares header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: sticky;\n  z-index: 10;\n  top: 0;\n  height: auto;\n  margin: 0 auto;\n  padding: 1em;\n  background: linear-gradient(180deg, #00283e 50%, rgba(13, 13, 13, 0) 100%);\n  padding-top: 3em;\n}\n\n.app .newShares header .fa-chevron-left {\n  flex: 0 0 2em;\n  font-size: 2em;\n  color: #0597F2;\n}\n\n.app .newShares header .logo img {\n  width: 4em;\n  margin: 0 auto;\n}\n\n.app .newShares header .profimg img {\n  width: 4em;\n  height: 4em;\n  border-radius: 50%;\n  box-shadow: 0px 0px 10px #0CF25D;\n}\n\n.app .newShares header .welcome {\n  width: 60%;\n}\n\n.app .newShares header .welcome p {\n  color: #E5E5E5;\n  font-size: 1.25em;\n  font-weight: 100;\n}\n\n.app .newShares header .profimg img {\n  width: 6em;\n  height: 6em;\n  box-shadow: none;\n}\n\n.app .newShares main {\n  position: relative;\n  margin-top: 2em;\n}\n\n.app .newShares main .shares {\n  padding-bottom: 4em;\n}\n\n.app .newShares main .logo {\n  text-align: center;\n  padding: 1em 0;\n}\n\n.app .newShares main .logo img {\n  width: 40vw;\n}\n\n.app .newShares main .logo h2 {\n  position: absolute;\n  top: .05em;\n  color: #E5E5E5;\n  font-size: 2.5em;\n  text-transform: uppercase;\n  width: 100vw;\n  text-align: center;\n}\n\n.app .newShares footer {\n  height: 3em;\n  border-radius: .5em .5em 0em 0em;\n  background-color: #00283e;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  padding: .5em 2em;\n  box-sizing: border-box;\n  width: 100vw;\n}\n\n.app .newShares footer i {\n  z-index: 100;\n  font-size: 2.5em;\n  color: #0597F2;\n}\n\n.app .newShares footer p {\n  color: #0CF25D;\n  margin: 0;\n  width: 100%;\n  text-align: center;\n  border-radius: 10px;\n  box-shadow: 0px 0px 5px #0CF25D;\n}\n\n.app .addUpdateShare {\n  height: 100vh;\n}\n\n.app .addUpdateShare header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: sticky;\n  z-index: 10;\n  top: 0;\n  height: auto;\n  margin: 0 auto;\n  padding: 1em;\n  background: linear-gradient(180deg, #00283e 50%, rgba(13, 13, 13, 0) 100%);\n}\n\n.app .addUpdateShare header .fa-chevron-left {\n  flex: 0 0 2em;\n  font-size: 2em;\n  color: #0597F2;\n}\n\n.app .addUpdateShare header .logo img {\n  width: 4em;\n  margin: 0 auto;\n}\n\n.app .addUpdateShare header .profimg img {\n  width: 4em;\n  height: 4em;\n  border-radius: 50%;\n  box-shadow: 0px 0px 10px #0CF25D;\n}\n\n.app .addUpdateShare header .welcome {\n  width: 60%;\n}\n\n.app .addUpdateShare header .welcome p {\n  color: #E5E5E5;\n  font-size: 1.25em;\n  font-weight: 100;\n}\n\n.app .addUpdateShare main {\n  position: relative;\n  margin-top: 2em;\n}\n\n.app .addUpdateShare main h2 {\n  position: absolute;\n  top: .05em;\n  color: #E5E5E5;\n  font-size: 2.5em;\n  text-transform: uppercase;\n  width: 100vw;\n  text-align: center;\n}\n\n.app .addUpdateShare main .logo {\n  text-align: center;\n}\n\n.app .addUpdateShare main .logo img {\n  width: 40vw;\n}\n\n.app .addUpdateShare main form {\n  margin: 4em auto;\n  width: 80vw;\n}\n\n.app .addUpdateShare main form .form-group {\n  margin: 2em 0;\n}\n\n.app .addUpdateShare main form .form-group label {\n  color: #E5E5E5;\n  font-weight: 400;\n  font-size: .75em;\n  text-transform: uppercase;\n  letter-spacing: .15em;\n}\n\n.app .addUpdateShare main form .form-group input {\n  background-color: rgba(5, 151, 242, 0.25);\n  border: none;\n}\n\n.app .addUpdateShare main form .form-group input[type='text'] {\n  color: #E5E5E5;\n}\n\n.app .addUpdateShare main form .form-group textarea {\n  width: 80vw;\n  background-color: rgba(5, 151, 242, 0.25);\n  font-size: .85em;\n  color: #E5E5E5;\n  padding: 2em;\n}\n\n.app .addUpdateShare main form .form-group ::placeholder {\n  font-size: .85em;\n  font-weight: 400;\n}\n\n.app .addUpdateShare main form button {\n  position: relative;\n  margin: 0 auto;\n  background-color: #E5E5E5;\n  padding: 0em 2em;\n  border: none;\n  color: #0597F2;\n  border-radius: 15px;\n  margin-top: 3em;\n  text-align: center;\n  display: block;\n}\n\n.app .addUpdateShare footer {\n  height: 3em;\n  border-radius: .5em .5em 0em 0em;\n  background-color: #00283e;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  padding: .5em 2em;\n  box-sizing: border-box;\n  width: 100vw;\n}\n\n.app .addUpdateShare footer i {\n  z-index: 100;\n  font-size: 2.5em;\n  color: #0597F2;\n}\n\n.app .addUpdateShare footer p {\n  color: #0CF25D;\n  margin: 0;\n  width: 100%;\n  text-align: center;\n  border-radius: 10px;\n  box-shadow: 0px 0px 5px #0CF25D;\n}\n\n.app .usersPosts {\n  min-height: 100vh;\n  background-color: #0D0D0D;\n}\n\n.app .usersPosts header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: sticky;\n  z-index: 10;\n  top: 0;\n  height: auto;\n  margin: 0 auto;\n  padding: 1em;\n  background: linear-gradient(180deg, #00283e 50%, rgba(13, 13, 13, 0) 100%);\n  align-items: flex-start;\n}\n\n.app .usersPosts header .fa-chevron-left {\n  flex: 0 0 2em;\n  font-size: 2em;\n  color: #0597F2;\n}\n\n.app .usersPosts header .logo img {\n  width: 4em;\n  margin: 0 auto;\n}\n\n.app .usersPosts header .profimg img {\n  width: 4em;\n  height: 4em;\n  border-radius: 50%;\n  box-shadow: 0px 0px 10px #0CF25D;\n}\n\n.app .usersPosts header .welcome {\n  width: 60%;\n}\n\n.app .usersPosts header .welcome p {\n  color: #E5E5E5;\n  font-size: 1.25em;\n  font-weight: 100;\n}\n\n.app .usersPosts header .logedInUser {\n  text-align: center;\n}\n\n.app .usersPosts header .logedInUser h1 {\n  color: #E5E5E5;\n}\n\n.app .usersPosts header .logedInUser span {\n  color: #0597F2;\n  font-size: .8em;\n  text-transform: uppercase;\n}\n\n.app .usersPosts header .logedInUser p {\n  font-size: .8em;\n  width: 30vw;\n  margin: 0;\n}\n\n.app .usersPosts header p {\n  text-align: center;\n  color: #E5E5E5;\n  text-transform: uppercase;\n  margin-top: .5em;\n  font-weight: 700;\n}\n\n.app .usersPosts main {\n  margin: 0 auto;\n  color: #E5E5E5;\n}\n\n.app .usersPosts main h1 {\n  text-align: center;\n}\n\n.app .usersPosts main span {\n  font-size: .7em;\n  margin-top: 2em;\n}\n\n.app .usersPosts main p {\n  font-size: .85em;\n  font-weight: 100;\n}\n\n.app .usersPosts footer {\n  height: 3em;\n  border-radius: .5em .5em 0em 0em;\n  background-color: #00283e;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  padding: .5em 2em;\n  box-sizing: border-box;\n  width: 100vw;\n}\n\n.app .usersPosts footer i {\n  z-index: 100;\n  font-size: 2.5em;\n  color: #0597F2;\n}\n\n.app .usersPosts footer p {\n  color: #0CF25D;\n  margin: 0;\n  width: 100%;\n  text-align: center;\n  border-radius: 10px;\n  box-shadow: 0px 0px 5px #0CF25D;\n}\n\n.app .usersPosts .cards {\n  background-color: transparent;\n  padding-bottom: 3em;\n}\n\n.app .settings {\n  height: 100vh;\n}\n\n.app .settings header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: sticky;\n  z-index: 10;\n  top: 0;\n  height: auto;\n  margin: 0 auto;\n  padding: 1em;\n  background: linear-gradient(180deg, #00283e 50%, rgba(13, 13, 13, 0) 100%);\n}\n\n.app .settings header .fa-chevron-left {\n  flex: 0 0 2em;\n  font-size: 2em;\n  color: #0597F2;\n}\n\n.app .settings header .logo img {\n  width: 4em;\n  margin: 0 auto;\n}\n\n.app .settings header .profimg img {\n  width: 4em;\n  height: 4em;\n  border-radius: 50%;\n  box-shadow: 0px 0px 10px #0CF25D;\n}\n\n.app .settings header .welcome {\n  width: 60%;\n}\n\n.app .settings header .welcome p {\n  color: #E5E5E5;\n  font-size: 1.25em;\n  font-weight: 100;\n}\n\n.app .settings main {\n  margin-top: 2em;\n}\n\n.app .settings main h1 {\n  text-align: center;\n  color: #E5E5E5;\n}\n\n.app .settings main form {\n  margin: 4em auto;\n  width: 80vw;\n  margin: 1em auto;\n}\n\n.app .settings main form .form-group {\n  margin: 2em 0;\n}\n\n.app .settings main form .form-group label {\n  color: #E5E5E5;\n  font-weight: 400;\n  font-size: .75em;\n  text-transform: uppercase;\n  letter-spacing: .15em;\n}\n\n.app .settings main form .form-group input {\n  background-color: rgba(5, 151, 242, 0.25);\n  border: none;\n}\n\n.app .settings main form .form-group input[type='text'] {\n  color: #E5E5E5;\n}\n\n.app .settings main form .form-group textarea {\n  width: 80vw;\n  background-color: rgba(5, 151, 242, 0.25);\n  font-size: .85em;\n  color: #E5E5E5;\n  padding: 2em;\n}\n\n.app .settings main form .form-group ::placeholder {\n  font-size: .85em;\n  font-weight: 400;\n}\n\n.app .settings main form .form-group {\n  margin: 1em 0;\n  position: relative;\n}\n\n.app .settings main form i {\n  position: absolute;\n  bottom: .7em;\n  right: .25em;\n  color: #0597F2;\n}\n\n.app .settings main form .buttons {\n  width: 50%;\n  padding-bottom: 4em;\n  margin: 1em auto;\n  text-align: center;\n}\n\n.app .settings main form .buttons button {\n  position: relative;\n  margin: 0 auto;\n  background-color: #E5E5E5;\n  padding: 0em 2em;\n  border: none;\n  color: #0597F2;\n  border-radius: 15px;\n  margin-top: 1em;\n  width: 8em;\n}\n\n.app .settings footer {\n  height: 3em;\n  border-radius: .5em .5em 0em 0em;\n  background-color: #00283e;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  padding: .5em 2em;\n  box-sizing: border-box;\n  width: 100vw;\n}\n\n.app .settings footer i {\n  z-index: 100;\n  font-size: 2.5em;\n  color: #0597F2;\n}\n\n.app .settings footer p {\n  color: #0CF25D;\n  margin: 0;\n  width: 100%;\n  text-align: center;\n  border-radius: 10px;\n  box-shadow: 0px 0px 5px #0CF25D;\n}\n\n.app .share-card {\n  margin: .5em auto;\n  padding: .55em;\n  box-sizing: border-box;\n  width: 90%;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  background-color: #1d1d1d;\n  color: white;\n  border-radius: 0.3em;\n}\n\n.app .share-card .photo {\n  margin-right: .5em;\n}\n\n.app .share-card .photo img {\n  border-radius: 0.25em;\n  object-fit: cover;\n  width: 4em;\n  height: 4em;\n}\n\n.app .share-card .comments {\n  width: 30em;\n}\n\n.app .share-card .comments .top {\n  display: flex;\n  justify-content: space-between;\n}\n\n.app .share-card .comments .top h3 {\n  font-size: 1.25em;\n  letter-spacing: .1em;\n  color: #E5E5E5;\n}\n\n.app .share-card .comments .top .button i {\n  color: #0597F2;\n  text-align: right;\n  font-size: 1.5em;\n  padding: .55em;\n  box-sizing: border-box;\n}\n\n.app .share-card .comments span {\n  font-weight: 300;\n}\n\n.app .share-card .comments hr {\n  height: .005em;\n  background-color: #0597F2;\n}\n\n.app .share-card .comments .bottom {\n  position: relative;\n  max-width: 100%;\n}\n\n.app .share-card .comments .bottom .title {\n  margin-bottom: .5em;\n}\n\n.app .share-card .comments .bottom span {\n  font-weight: 700;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/API.js":
/*!********************!*\
  !*** ./src/API.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var urlPrefix = 'http://localhost:4020/api';
var API = {
  //USER
  serverUrl: 'http://localhost:4020/',
  addUser: data => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(urlPrefix + '/users/', data);
  },
  authenticate: data => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(urlPrefix + '/users/authenticate', data);
  },
  updateUser: (id, data) => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(urlPrefix + '/users/' + id, data);
  },
  getUser: () => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(urlPrefix + '/users');
  },
  getSingleUser: (id, data) => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(urlPrefix + '/users/' + id, data);
  },
  deleteUser: id => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(urlPrefix + '/users' + id);
  },
  //SHARES
  addShare: data => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(urlPrefix + '/shares', data);
  },
  getShares: () => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(urlPrefix + '/shares');
  },
  updateShares: (id, data) => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(urlPrefix + '/shares/' + id, data);
  },
  deleteShares: id => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(urlPrefix + '/shares/' + id);
  },
  getSingleShare: id => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(urlPrefix + '/shares/' + id);
  },
  //Title
  addTitle: data => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(urlPrefix + '/title', data);
  },
  getTitle: () => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(urlPrefix + '/title');
  },
  deleteTitle: id => {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(urlPrefix + '/title/' + id);
  },
  uploadFile: formData => {
    var settings = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(urlPrefix + '/upload', formData, settings);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (API);

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

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

/***/ }),

/***/ "./src/NewCard.js":
/*!************************!*\
  !*** ./src/NewCard.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./API */ "./src/API.js");
var _jsxFileName = "/Users/madmax/Desktop/shareMe app Summative/ShareMe-React-/src/NewCard.js";





class NewCard extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.handleTrashClick = () => {
      var {
        id,
        loadShares
      } = this.props;
      _API__WEBPACK_IMPORTED_MODULE_3__["default"].deleteShares(id);
      loadShares();
    };
  }

  render() {
    var {
      share,
      title,
      photo,
      user,
      currentUser,
      id
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "share-card",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "photo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: photo ? _API__WEBPACK_IMPORTED_MODULE_3__["default"].serverUrl + photo : '/mountain.jpeg',
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "comments",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "top",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "user",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 29
      }
    }, "Added by: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 61
      }
    }), user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 29
      }
    }, currentUser && currentUser.id === user.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-comment share-comment",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 45
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: '/shares/' + id + '/update',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 45
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-edit share-edit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 84
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-trash-alt share-trash",
      onClick: this.handleTrashClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 45
      }
    })) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 52
      }
    }, "Title: "), title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 29
      }
    }, share)))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (NewCard);

/***/ }),

/***/ "./src/RouteAddShare.js":
/*!******************************!*\
  !*** ./src/RouteAddShare.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./API */ "./src/API.js");
var _jsxFileName = "/Users/madmax/Desktop/shareMe app Summative/ShareMe-React-/src/RouteAddShare.js";






class RouteAddShare extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.handleFormSubmit = e => {
      e.preventDefault();
      var formData = new FormData(this.addForm);
      _API__WEBPACK_IMPORTED_MODULE_4__["default"].uploadFile(formData).then(res => res.data).then(fileName => {
        // var { currentUser } = this.props;
        var data = {
          title: formData.get('title-input'),
          share: formData.get('share-input'),
          photo: fileName,
          user_id: this.props.currentUser.id
        };
        _API__WEBPACK_IMPORTED_MODULE_4__["default"].addShare(data).then(res => Object(_reach_router__WEBPACK_IMPORTED_MODULE_1__["navigate"])('/user/posts'));
      });
    };
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "addUpdateShare",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 25
      }
    }, "Add share"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "../assets/Vector.png",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleFormSubmit,
      ref: el => {
        this.addForm = el;
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "title-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 33
      }
    }, "Title of your share"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      defaultValue: "",
      className: "form-control",
      name: "title-input",
      id: "title-input",
      placeholder: "Enter the title of the share",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 33
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "share-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 33
      }
    }, "Description of your share"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      defaultValue: "",
      className: "form-control",
      name: "share-input",
      id: "share-input",
      placeholder: "Enter your description",
      cols: "30",
      rows: "10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 33
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "photo-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 33
      }
    }, "Add your image"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "file",
      className: "form-control",
      name: "photo-input",
      id: "photo-input",
      placeholder: "Add an image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 33
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 29
      }
    }, "Add"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 25
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RouteAddShare);

/***/ }),

/***/ "./src/RouteLogIn.js":
/*!***************************!*\
  !*** ./src/RouteLogIn.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./API */ "./src/API.js");
var _jsxFileName = "/Users/madmax/Desktop/shareMe app Summative/ShareMe-React-/src/RouteLogIn.js";





class RouteLogIn extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.handleFormSubmit = e => {
      e.preventDefault();
      var formData = new FormData(this.form);
      var data = {
        users: formData.get('name-input'),
        password: formData.get('password-input')
      };
      var {
        setCurrentUser
      } = this.props;
      _API__WEBPACK_IMPORTED_MODULE_3__["default"].authenticate(data).then(res => {
        var user = res.data;
        return user;
      }).then(user => {
        if (user) {
          setCurrentUser(user);
          localStorage.setItem('userId', user.id);
          Object(_reach_router__WEBPACK_IMPORTED_MODULE_1__["navigate"])('/user/posts');
        } else {
          this.setState({
            message: 'Try again'
          });
        }
      });
    };

    this.handleBackClick = () => {
      Object(_reach_router__WEBPACK_IMPORTED_MODULE_1__["navigate"])(-1);
    };

    this.state = {
      message: ''
    };
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "signIn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-chevron-left",
      onClick: this.handleBackClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "../assets/ShareMe Logo 1.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 29
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "logIn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 29
      }
    }, "Sign in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "../assets/signup-faded.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleFormSubmit,
      ref: el => {
        this.form = el;
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "name-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 33
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      className: "form-control",
      id: "name-input",
      name: "name-input",
      placeholder: "Name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 33
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "password-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 33
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "password",
      className: "form-control",
      id: "password-input",
      name: "password-input",
      placeholder: "Password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 33
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 29
      }
    }, "Log In"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 29
      }
    }, this.state.message))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RouteLogIn);

/***/ }),

/***/ "./src/RouteNewShare.js":
/*!******************************!*\
  !*** ./src/RouteNewShare.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./API */ "./src/API.js");
/* harmony import */ var _NewCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NewCard */ "./src/NewCard.js");
var _jsxFileName = "/Users/madmax/Desktop/shareMe app Summative/ShareMe-React-/src/RouteNewShare.js";






class RouteNewShare extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.loadShares = () => {
      _API__WEBPACK_IMPORTED_MODULE_3__["default"].getShares().then(res => {
        this.setState({
          shares: res.data
        });
      });
    };

    this.componentDidMount = () => {
      this.loadShares();
    };
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "newShares",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "profimg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "../assets/gettyimages-472015658 2.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "welcome",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 29
      }
    }, "Hello ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 38
      }
    }, "Jim"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 71
      }
    }), "What would you like to share today?"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 29
      }
    }, "New shares"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "../assets/signup-faded.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "shares",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 25
      }
    }, this.state.shares.map(share => {
      var shareProps = { ...share,
        key: share.id,
        loadShares: this.loadShares
      };

      if (shareProps.user != null) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewCard__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, shareProps, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 49
          }
        }));
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 25
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RouteNewShare);

/***/ }),

/***/ "./src/RouteSettings.js":
/*!******************************!*\
  !*** ./src/RouteSettings.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./API */ "./src/API.js");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/madmax/Desktop/shareMe app Summative/ShareMe-React-/src/RouteSettings.js";







class RouteSettings extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.handleFormSubmit = e => {
      e.preventDefault();
      var formData = new FormData(this.Form);
      var data = {
        name: formData.get('name-update'),
        email: formData.get('email-update') // photo: formData.get('update-image')

      };
      var {
        id
      } = this.props;
      _API__WEBPACK_IMPORTED_MODULE_3__["default"].updateUser(id, data).then(res => Object(_reach_router__WEBPACK_IMPORTED_MODULE_4__["navigate"])('/user/posts'));
    };

    this.handleTrashClick = () => {
      var {
        id,
        loadUser
      } = this.state.name;
      _API__WEBPACK_IMPORTED_MODULE_3__["default"].deleteUser(id);
      loadUser();
    };

    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    var {
      id
    } = this.props;
    _API__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleUser(id).then(res => {
      this.setState({
        user: res.data
      });
    });
  }

  render() {
    var {
      name,
      email,
      currentUser
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "settings",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }
    }, currentUser, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 42
      }
    }), "Settings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleFormSubmit,
      ref: el => {
        this.Form = el;
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "name-update",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 33
      }
    }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "name-update",
      type: "text",
      className: "form-control",
      id: "name-update",
      defaultValue: name,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 33
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 33
      }
    }, "About me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
      name: "comment",
      defaultValue: "",
      id: "description",
      cols: "10",
      rows: "5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 33
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "email-update",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 33
      }
    }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "email-update",
      type: "email",
      className: "form-control",
      id: "email-update",
      defaultValue: email,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 33
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "buttons",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "update",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 33
      }
    }, "Update"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "sign-out",
      onClick: this.handleTrashClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 33
      }
    }, "Delete")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }
    }, currentUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 44
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 57
      }
    }, "Please log in to use more features")), "                "));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RouteSettings);

/***/ }),

/***/ "./src/RouteSignUp.js":
/*!****************************!*\
  !*** ./src/RouteSignUp.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./API */ "./src/API.js");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
var _jsxFileName = "/Users/madmax/Desktop/shareMe app Summative/ShareMe-React-/src/RouteSignUp.js";





class RouteSignUp extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.handleFormSubmit = e => {
      e.preventDefault();
      var formData = new FormData(this.form);
      var data = {
        name: formData.get('name-input'),
        email: formData.get('email-input'),
        password: formData.get('password-input')
      };
      _API__WEBPACK_IMPORTED_MODULE_2__["default"].addUser(data).then(res => Object(_reach_router__WEBPACK_IMPORTED_MODULE_3__["navigate"])('/users/authenticate'));
    };

    this.handleBackClick = () => {
      Object(_reach_router__WEBPACK_IMPORTED_MODULE_3__["navigate"])(-1);
    };
  }

  render() {
    var {
      currentUser
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "signUp",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-chevron-left",
      onClick: this.handleBackClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 25
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "../assets/ShareMe Logo 1.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 29
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "logUp",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 29
      }
    }, "Sign up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "../assets/signup-faded.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleFormSubmit,
      ref: el => {
        this.form = el;
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "name-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 33
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      className: "form-control",
      name: "name-input",
      id: "name-input",
      placeholder: "Name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 33
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "email-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 33
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "email",
      className: "form-control",
      name: "email-input",
      id: "email-input",
      placeholder: "Email",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 33
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "password-input",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 33
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "password",
      className: "form-control",
      name: "password-input",
      id: "password-input",
      placeholder: "Password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 33
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 29
      }
    }, "Sign up"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }
    }, currentUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 44
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 57
      }
    }, "Please log in to use more features"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RouteSignUp);

/***/ }),

/***/ "./src/RouteSplashPage.js":
/*!********************************!*\
  !*** ./src/RouteSplashPage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/madmax/Desktop/shareMe app Summative/ShareMe-React-/src/RouteSplashPage.js";






class RouteSplashPage extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.handleBackClick = () => {
      Object(_reach_router__WEBPACK_IMPORTED_MODULE_2__["navigate"])(-1);
    };
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "splashPage",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-chevron-left",
      onClick: this.handleBackClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 25
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "../assets/ShareMe Logo 1.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "signin-signup",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/users/authenticate",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 79
      }
    }, "Log in")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/users/create",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 79
      }
    }, "Sign up")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RouteSplashPage);

/***/ }),

/***/ "./src/RouteUpdateShare.js":
/*!*********************************!*\
  !*** ./src/RouteUpdateShare.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./API */ "./src/API.js");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/madmax/Desktop/shareMe app Summative/ShareMe-React-/src/RouteUpdateShare.js";







class RouteUpdateShare extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.handleFormSubmit = e => {
      e.preventDefault();
      var formData = new FormData(this.Form);
      var data = {
        title: formData.get('update-title'),
        share: formData.get('update-description') // photo: formData.get('update-image')

      };
      var {
        id
      } = this.props;
      _API__WEBPACK_IMPORTED_MODULE_3__["default"].updateShares(id, data).then(res => Object(_reach_router__WEBPACK_IMPORTED_MODULE_4__["navigate"])('/user/posts'));
    };

    this.state = {
      share: {}
    };
  }

  componentDidMount() {
    var {
      id
    } = this.props;
    _API__WEBPACK_IMPORTED_MODULE_3__["default"].getSingleShare(id).then(res => {
      this.setState({
        share: res.data
      });
    });
  }

  render() {
    var {
      photo,
      title,
      share,
      currentUser
    } = this.state.share;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "addUpdateShare",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 25
      }
    }, "Update share"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "assets/Vector.png",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleFormSubmit,
      ref: el => {
        this.Form = el;
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "update-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 33
      }
    }, "Update title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      name: "update-title",
      type: "text",
      className: "form-control",
      id: "update-title",
      defaultValue: title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 33
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "update-description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 33
      }
    }, "Update description"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
      name: "update-description",
      id: "update-description",
      cols: "30",
      rows: "10",
      defaultValue: share,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 33
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "update-image",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 33
      }
    }, "Update image"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "file",
      className: "form-control",
      name: "update-image",
      id: "update-image",
      defaultValue: photo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 33
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      className: "btn btn-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 29
      }
    }, "Update"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 21
      }
    }, currentUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 44
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 57
      }
    }, "Please log in to use more features")), "                "));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RouteUpdateShare);

/***/ }),

/***/ "./src/RouteUserPosts.js":
/*!*******************************!*\
  !*** ./src/RouteUserPosts.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _NewCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewCard */ "./src/NewCard.js");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./API */ "./src/API.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/madmax/Desktop/shareMe app Summative/ShareMe-React-/src/RouteUserPosts.js";







class RouteUserPosts extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.loadShares = () => {
      _API__WEBPACK_IMPORTED_MODULE_4__["default"].getShares().then(res => {
        this.setState({
          shares: res.data
        });
      });
    };

    this.handleLogoutClick = e => {
      e.preventDefault();
      localStorage.removeItem('userId'); // this.setState({ currentUser: null })
      // navigate('/splash')

      this.props.setCurrentUser(null);
    };

    this.state = {
      shares: [],
      user: {}
    };
  }

  componentDidMount() {
    this.loadShares();
  }

  render() {
    var {
      currentUser
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "app",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "usersPosts",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "../assets/ShareMe Logo 1.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 29
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "logedInUser",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 25
      }
    }, currentUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 47
      }
    }, "Hello ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 57
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 63
      }
    }, currentUser.name)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 102
      }
    }, "You have to", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 116
      }
    }), "log in", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 128
      }
    }), "to add and edit posts")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "profimg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "../assets/avatar.jpg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 29
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/splash",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 29
      }
    }, currentUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      onClick: this.handleLogoutClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 52
      }
    }, "Log out") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 102
      }
    }, "Log in")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "cards",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 25
      }
    }, this.state.shares.map(share => {
      var shareProps = { ...share,
        key: share.id,
        loadShares: this.loadShares,
        currentUser: currentUser
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewCard__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, shareProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 45
        }
      }));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 21
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (RouteUserPosts);

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./API */ "./src/API.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/madmax/Desktop/shareMe app Summative/ShareMe-React-/src/footer.js";





class Footer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: []
    };
  }

  componentDidMount() {
    _API__WEBPACK_IMPORTED_MODULE_2__["default"].getUser().then(res => this.setState({
      currentUser: res.data
    }));
  }

  render() {
    var {
      user,
      id,
      currentUser
    } = this.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/user/posts",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-home",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 40
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/shares/add",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-plus",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 52
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_reach_router__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: '/user/' + id + '/settings',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 29
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-cog",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 68
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/madmax/Desktop/shareMe app Summative/ShareMe-React-/src/header.js";




class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.handleBackClick = () => {
      Object(_reach_router__WEBPACK_IMPORTED_MODULE_1__["navigate"])(-1);
    };
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fas fa-chevron-left",
      onClick: this.handleBackClick,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "/assets/ShareMe Logo 1.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "profimg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "/assets/avatar.jpg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/madmax/Desktop/shareMe app Summative/ShareMe-React-/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/madmax/Desktop/shareMe app Summative/ShareMe-React-/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/madmax/Desktop/shareMe app Summative/ShareMe-React-/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/madmax/Desktop/shareMe app Summative/ShareMe-React-/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map