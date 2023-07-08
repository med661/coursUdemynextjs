(function() {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./components/Common/WeclomeMessage.js":
/*!*********************************************!*\
  !*** ./components/Common/WeclomeMessage.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderMessage": function() { return /* binding */ HeaderMessage; },
/* harmony export */   "FooterMessage": function() { return /* binding */ FooterMessage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\msi\\Desktop\\socket.io\\courses\\Course Starter Files\\components\\Common\\WeclomeMessage.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const HeaderMessage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const sinupRoute = router.pathname === "/signup";
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: true,
    color: "teal",
    header: sinupRoute ? "get started" : "welcome back",
    icon: sinupRoute ? "settings" : "privacy",
    content: sinupRoute ? "create new account" : "login with Email and password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  });
};
const FooterMessage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const sinupRoute = router.pathname === "/signup";
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, sinupRoute ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    warning: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "help",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }), "Existing user? ", " ", __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Login here instead")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    info: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "lock",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), "Existing user? ", " ", __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, "forget password")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    warning: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "help",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }), "new user ?", __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "signup here           "), " instead", " ")));
};

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Common_WeclomeMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Common/WeclomeMessage */ "./components/Common/WeclomeMessage.js");
var _jsxFileName = "C:\\Users\\msi\\Desktop\\socket.io\\courses\\Course Starter Files\\pages\\login.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Login = () => {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    email: "",
    password: ""
  });

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    })); // console.log({ user });
  };

  const {
    0: showPassword,
    1: setShowPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: formLoading,
    1: setFormLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: submitDisabled,
    1: setSubmitDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    email,
    password
  } = user;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const isUser = Object.values({
      email,
      password
    }).every(item => Boolean(item));
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_Common_WeclomeMessage__WEBPACK_IMPORTED_MODULE_3__.HeaderMessage, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form, {
    loading: formLoading,
    error: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Message, {
    error: true,
    header: "Oops!",
    content: errorMsg,
    onDismiss: () => setErrorMsg(null),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Segment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    required: true,
    label: "Email",
    placeholder: "Email",
    name: "email",
    value: email,
    onChange: handleChange,
    fluid: true,
    icon: "envelope",
    iconPosition: "left",
    type: "email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Form.Input, {
    required: true,
    label: "Password",
    placeholder: "Password",
    name: "password",
    value: password,
    onChange: handleChange,
    fluid: true,
    icon: {
      name: "eye",
      circular: true,
      link: true,
      onClick: () => {
        setShowPassword(!showPassword);
      }
    },
    type: showPassword ? "text" : "password",
    iconPosition: "left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Divider, {
    hidden: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
    icon: "signup",
    content: "login",
    type: "submit",
    color: "orange",
    disabled: submitDisabled,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }))), __jsx(_components_Common_WeclomeMessage__WEBPACK_IMPORTED_MODULE_3__.FooterMessage, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/login.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0NvbW1vbi9XZWNsb21lTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9wYWdlcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvaWdub3JlZHxDOlxcVXNlcnNcXG1zaVxcRGVza3RvcFxcc29ja2V0LmlvXFxjb3Vyc2VzXFxDb3Vyc2UgU3RhcnRlciBGaWxlc1xcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkhlYWRlck1lc3NhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzaW51cFJvdXRlIiwicGF0aG5hbWUiLCJGb290ZXJNZXNzYWdlIiwiTG9naW4iLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2Iiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwiZXJyb3JNc2ciLCJzZXRFcnJvck1zZyIsImZvcm1Mb2FkaW5nIiwic2V0Rm9ybUxvYWRpbmciLCJzdWJtaXREaXNhYmxlZCIsInNldFN1Ym1pdERpc2FibGVkIiwidXNlRWZmZWN0IiwiaXNVc2VyIiwiT2JqZWN0IiwidmFsdWVzIiwiZXZlcnkiLCJpdGVtIiwiQm9vbGVhbiIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY2lyY3VsYXIiLCJsaW5rIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDTyxNQUFNQSxhQUFhLEdBQUUsTUFBSTtBQUM1QixRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsVUFBVSxHQUFDRixNQUFNLENBQUNHLFFBQVAsS0FBa0IsU0FBbkM7QUFDQSxTQUNJLE1BQUMsc0RBQUQ7QUFDQyxZQUFRLE1BRFQ7QUFFQSxTQUFLLEVBQUMsTUFGTjtBQUdBLFVBQU0sRUFBRUQsVUFBVSxHQUFFLGFBQUYsR0FBZ0IsY0FIbEM7QUFJQSxRQUFJLEVBQUVBLFVBQVUsR0FBRSxVQUFGLEdBQWEsU0FKN0I7QUFLQSxXQUFPLEVBQUVBLFVBQVUsR0FBRSxvQkFBRixHQUF1QiwrQkFMMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKO0FBU0gsQ0FaTTtBQWFBLE1BQU1FLGFBQWEsR0FBRSxNQUFJO0FBQzVCLFFBQU1KLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNQyxVQUFVLEdBQUNGLE1BQU0sQ0FBQ0csUUFBUCxLQUFrQixTQUFuQztBQUNBLFNBQ0kscUVBQ0NELFVBQVUsR0FBRSxxRUFDYixNQUFDLHNEQUFEO0FBQVMs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UDtBQVFFLFFBQUksRUFBRTtBQUNKRSxVQUFJLEVBQUUsS0FERjtBQUVKcUIsY0FBUSxFQUFFLElBRk47QUFHSkMsVUFBSSxFQUFFLElBSEY7QUFJSkMsYUFBTyxFQUFFLE1BQU07QUFDYmxCLHVCQUFlLENBQUMsQ0FBQ0QsWUFBRixDQUFmO0FBQ0Q7QUFORyxLQVJSO0FBZ0JFLFFBQUksRUFBRUEsWUFBWSxHQUFHLE1BQUgsR0FBWSxVQWhCaEM7QUFpQkUsZ0JBQVksRUFBQyxNQWpCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkYsRUFpQ0UsTUFBQyxzREFBRDtBQUFTLFVBQU0sTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakNGLEVBa0NFLE1BQUMscURBQUQ7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFdBQU8sRUFBQyxPQUZWO0FBR0UsUUFBSSxFQUFDLFFBSFA7QUFJRSxTQUFLLEVBQUMsUUFKUjtBQUtFLFlBQVEsRUFBRU0sY0FMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbENGLENBWEYsQ0FGRixFQXlERSxNQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6REYsQ0FERjtBQTZERCxDQXpGRDs7QUEyRkEsK0RBQWVsQixLQUFmLEU7Ozs7Ozs7Ozs7O0FDMUdBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVzc2FnZSxJY29uLCBEaXZpZGVyfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuZXhwb3J0IGNvbnN0IEhlYWRlck1lc3NhZ2UgPSgpPT57XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3Qgc2ludXBSb3V0ZT1yb3V0ZXIucGF0aG5hbWU9PT1cIi9zaWdudXBcIlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICBhdHRhY2hlZCBcclxuICAgICAgICBjb2xvcj0ndGVhbCdcclxuICAgICAgICBoZWFkZXI9e3NpbnVwUm91dGUgP1wiZ2V0IHN0YXJ0ZWRcIjpcIndlbGNvbWUgYmFja1wifSBcclxuICAgICAgICBpY29uPXtzaW51cFJvdXRlID9cInNldHRpbmdzXCI6XCJwcml2YWN5XCJ9XHJcbiAgICAgICAgY29udGVudD17c2ludXBSb3V0ZSA/XCJjcmVhdGUgbmV3IGFjY291bnRcIjpcImxvZ2luIHdpdGggRW1haWwgYW5kIHBhc3N3b3JkXCJ9XHJcbiAgICAgICAgLz5cclxuICAgIClcclxufVxyXG5leHBvcnQgY29uc3QgRm9vdGVyTWVzc2FnZSA9KCk9PntcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBzaW51cFJvdXRlPXJvdXRlci5wYXRobmFtZT09PVwiL3NpZ251cFwiXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAge3NpbnVwUm91dGUgPzw+XHJcbiAgICAgICAgPE1lc3NhZ2UgYXR0YWNoZWQ9XCJib3R0b21cIiB3YXJuaW5nPlxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwiaGVscFwiIC8+XHJcbiAgICAgICAgICAgIEV4aXN0aW5nIHVzZXI/IHtcIiBcIn1cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICBMb2dpbiBoZXJlIGluc3RlYWRcclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTWVzc2FnZT5cclxuICAgICAgICA8RGl2aWRlciBoaWRkZW4vPlxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDo8PlxyXG5cclxuICAgICAgICA8TWVzc2FnZSBhdHRhY2hlZD1cImJvdHRvbVwiIGluZm8+XHJcbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJsb2NrXCIgLz5cclxuICAgICAgICAgICAgRXhpc3RpbmcgdXNlcj8ge1wiIFwifVxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Jlc2V0XCI+XHJcbiAgICAgICAgICAgIGZvcmdldCBwYXNzd29yZFxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9NZXNzYWdlPlxyXG5cclxuICAgICAgICA8TWVzc2FnZSBhdHRhY2hlZD1cImJvdHRvbVwiIHdhcm5pbmc+XHJcbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJoZWxwXCIgLz5cclxuICAgICAgICAgICAgbmV3IHVzZXIgP1xyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgICBzaWdudXAgaGVyZSAgICAgICAgICAgPC9MaW5rPiBpbnN0ZWFke1wiIFwifVxyXG4gICAgICAgIDwvTWVzc2FnZT5cclxuICAgICAgICA8Lz5cclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gIEZvcm0sXHJcbiAgQnV0dG9uLFxyXG4gIE1lc3NhZ2UsXHJcbiAgU2VnbWVudCxcclxuICBUZXh0QXJlYSxcclxuICBEaXZpZGVyLFxyXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBIZWFkZXJNZXNzYWdlLFxyXG4gIEZvb3Rlck1lc3NhZ2UsXHJcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL1dlY2xvbWVNZXNzYWdlXCI7XHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG5cclxuICAgIHNldFVzZXIoKHByZXYpID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xyXG4gICAgLy8gY29uc29sZS5sb2coeyB1c2VyIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbZm9ybUxvYWRpbmcsIHNldEZvcm1Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3VibWl0RGlzYWJsZWQsIHNldFN1Ym1pdERpc2FibGVkXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gdXNlcjtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaXNVc2VyID0gT2JqZWN0LnZhbHVlcyh7IGVtYWlsLCBwYXNzd29yZCB9KS5ldmVyeSgoaXRlbSkgPT5cclxuICAgICAgQm9vbGVhbihpdGVtKVxyXG4gICAgKTtcclxuICAgIGlzVXNlciA/IHNldFN1Ym1pdERpc2FibGVkKGZhbHNlKSA6IHNldFN1Ym1pdERpc2FibGVkKHRydWUpO1xyXG4gIH0sIFt1c2VyXSk7XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlck1lc3NhZ2UgLz5cclxuICAgICAgPEZvcm1cclxuICAgICAgICBsb2FkaW5nPXtmb3JtTG9hZGluZ31cclxuICAgICAgICBlcnJvcj17ZXJyb3JNc2cgIT09IG51bGx9XHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgPlxyXG4gICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgaGVhZGVyPVwiT29wcyFcIlxyXG4gICAgICAgICAgY29udGVudD17ZXJyb3JNc2d9XHJcbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldEVycm9yTXNnKG51bGwpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj1cImVudmVsb3BlXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIGljb249e3tcclxuICAgICAgICAgICAgICBuYW1lOiBcImV5ZVwiLFxyXG4gICAgICAgICAgICAgIGNpcmN1bGFyOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGxpbms6IHRydWUsXHJcbiAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2hvd1Bhc3N3b3JkKCFzaG93UGFzc3dvcmQpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZCA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPERpdmlkZXIgaGlkZGVuIC8+XHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGljb249XCJzaWdudXBcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwibG9naW5cIlxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgY29sb3I9XCJvcmFuZ2VcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0RGlzYWJsZWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgPC9Gb3JtPlxyXG5cclxuICAgICAgPEZvb3Rlck1lc3NhZ2UgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9