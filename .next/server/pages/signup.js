(function() {
var exports = {};
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./components/Common/CommonInputs.js":
/*!*******************************************!*\
  !*** ./components/Common/CommonInputs.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\msi\\Desktop\\socket.io\\courses\\Course Starter Files\\components\\Common\\CommonInputs.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const CommonInputs = ({
  user: {
    bio,
    facebook,
    twitter,
    youtube,
    instagram
  },
  handleChange,
  showSocialLinks,
  setShowSocialLinks
}) => {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    required: true,
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.TextArea,
    name: "bio",
    value: bio,
    onChange: handleChange,
    placeholder: "bio",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    content: "add socal link",
    color: "red",
    icon: "at",
    type: "button",
    onClick: () => setShowSocialLinks(!showSocialLinks),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), showSocialLinks && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "facebook",
    iconPosition: "left",
    name: "facebook",
    value: facebook,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "twitter",
    iconPosition: "left",
    name: "twitter",
    value: twitter,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "instagram",
    iconPosition: "left",
    name: "instagram",
    value: instagram,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "youtube",
    iconPosition: "left",
    name: "youtube",
    value: youtube,
    onChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    icon: "attention",
    info: true,
    size: "small",
    header: "social media links are optionnal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CommonInputs);

/***/ }),

/***/ "./components/Common/ImageDropDiv.js":
/*!*******************************************!*\
  !*** ./components/Common/ImageDropDiv.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\msi\\Desktop\\socket.io\\courses\\Course Starter Files\\components\\Common\\ImageDropDiv.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function ImageDropDiv({
  highlighted,
  setHighlighted,
  inputRef,
  handleChange,
  mediaPreview,
  setMediaPreview,
  setMedia
}) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    placeholder: true,
    basic: true,
    secondary: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("input", {
    style: {
      display: "none"
    },
    type: "file",
    accept: "image/*",
    onChange: handleChange,
    name: "media",
    ref: inputRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }), __jsx("div", {
    onDragOver: e => {
      e.preventDefault();
      setHighlighted(true);
    },
    onDragLeave: e => {
      e.preventDefault();
      setHighlighted(false);
    },
    onDrop: e => {
      e.preventDefault();
      setHighlighted(true);
      const droppedFile = Array.from(e.dataTransfer.files);
      setMedia(droppedFile[0]);
      setMediaPreview(URL.createObjectURL(droppedFile[0]));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, mediaPreview === null ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, _extends({}, highlighted && {
    color: "green"
  }, {
    placeholder: true,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
    icon: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "file image outline",
    style: {
      cursor: "pointer"
    },
    onClick: () => inputRef.current.click(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }), "Drag n Drop or Click To Upload Image"))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: "green",
    placeholder: true,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: mediaPreview,
    size: "medium",
    centered: true,
    style: {
      cursor: "pointer"
    },
    onClick: () => inputRef.current.click(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ImageDropDiv);

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/CommonInputs */ "./components/Common/CommonInputs.js");
/* harmony import */ var _components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Common/ImageDropDiv */ "./components/Common/ImageDropDiv.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/authUser */ "./utils/authUser.js");
/* harmony import */ var _utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/uploadPicToCloudinary */ "./utils/uploadPicToCloudinary.js");
var _jsxFileName = "C:\\Users\\msi\\Desktop\\socket.io\\courses\\Course Starter Files\\pages\\signup.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
let cancel;

function Signup() {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: "",
    email: "",
    password: "",
    bio: "",
    facebook: "",
    youtube: "",
    twitter: "",
    instagram: ""
  });
  const {
    name,
    email,
    password,
    bio
  } = user;

  const handleChange = e => {
    const {
      name,
      value,
      files
    } = e.target;

    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const {
    0: showSocialLinks,
    1: setShowSocialLinks
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
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
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: usernameLoading,
    1: setUsernameLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: usernameAvailable,
    1: setUsernameAvailable
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: media,
    1: setMedia
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: highlighted,
    1: setHighlighted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const isUser = Object.values({
      name,
      email,
      password,
      bio
    }).every(item => Boolean(item));
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);

  const checkUsername = async () => {
    setUsernameLoading(true);

    try {
      cancel && cancel();
      const CancelToken = (axios__WEBPACK_IMPORTED_MODULE_4___default().CancelToken);
      const res = await axios__WEBPACK_IMPORTED_MODULE_4___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__.default}/api/signup/${username}`, {
        cancelToken: new CancelToken(canceler => {
          cancel = canceler;
        })
      });
      if (errorMsg !== null) setErrorMsg(null);

      if (res.data === "Available") {
        setUsernameAvailable(true);
        setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
          username
        }));
      }
    } catch (error) {
      setErrorMsg("Username Not Available");
      setUsernameAvailable(false);
    }

    setUsernameLoading(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    username === "" ? setUsernameAvailable(false) : checkUsername();
  }, [username]);

  const handleSubmit = async e => {
    e.preventDefault();
    setFormLoading(true);
    let profilePicUrl;

    if (media !== null) {
      profilePicUrl = await (0,_utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_7__.default)(media);
    }

    if (media !== null && !profilePicUrl) {
      setFormLoading(false);
      return setErrorMsg("Error Uploading Image");
    }

    await (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_6__.registerUser)(user, profilePicUrl, setErrorMsg, setFormLoading);
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    loading: formLoading,
    error: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    error: true,
    header: "Oops!",
    content: errorMsg,
    onDismiss: () => setErrorMsg(null),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, __jsx(_components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_3__.default, {
    mediaPreview: mediaPreview,
    setMediaPreview: setMediaPreview,
    setMedia: setMedia,
    inputRef: inputRef,
    highlighted: highlighted,
    setHighlighted: setHighlighted,
    handleChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    required: true,
    label: "Name",
    placeholder: "Name",
    name: "name",
    value: name,
    onChange: handleChange,
    fluid: true,
    icon: "user",
    iconPosition: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
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
      onClick: () => setShowPassword(!showPassword)
    },
    iconPosition: "left",
    type: showPassword ? "text" : "password",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    loading: usernameLoading,
    error: !usernameAvailable,
    required: true,
    label: "Username",
    placeholder: "Username",
    value: username,
    onChange: e => {
      setUsername(e.target.value);

      if (regexUserName.test(e.target.value)) {
        setUsernameAvailable(true);
      } else {
        setUsernameAvailable(false);
      }
    },
    fluid: true,
    icon: usernameAvailable ? "check" : "close",
    iconPosition: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 11
    }
  }), __jsx(_components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_2__.default, {
    user: user,
    showSocialLinks: showSocialLinks,
    setShowSocialLinks: setShowSocialLinks,
    handleChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: "signup",
    content: "Signup",
    type: "submit",
    color: "orange",
    disabled: submitDisabled || !usernameAvailable,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 11
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "./utils/authUser.js":
/*!***************************!*\
  !*** ./utils/authUser.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerUser": function() { return /* binding */ registerUser; },
/* harmony export */   "LoginUser": function() { return /* binding */ LoginUser; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);





const registerUser = async (user, profilePicUrl, setError, setLoading) => {
  setLoading(true);

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/signup`, {
      user,
      profilePicUrl
    });
    setToken(res.data);
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }

  setLoading(false);
};
const LoginUser = async (user, setError, setLoading) => {
  setLoading(true);

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/auth`, {
      user
    });
    setToken(res.data);
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }

  setLoading(false);
};

const setToken = token => {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set("token", token);
  next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');
};

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl = "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const catchErrors = error => {
  let errorMsg = '';

  if (error.response) {
    // If the request was made and the server not responded with a status code in the range of 2xx
    errorMsg = error.response.data;
    console.error(errorMsg);
  } else if (error.request) {
    // if the request was made and no response was recevied from server
    errorMsg = error.request;
    console.error(errorMsg);
  } else {
    // if something else happened while making the request
    errorMsg = error.message;
    console.error(errorMsg);
  }

  return errorMsg;
};

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

/***/ }),

/***/ "./utils/uploadPicToCloudinary.js":
/*!****************************************!*\
  !*** ./utils/uploadPicToCloudinary.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const uploadPic = async media => {
  try {
    const form = new FormData();
    form.append("file", media);
    form.append("upload_preset", "social_media_app");
    form.append("cloud_name", "indersingh");
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("https://api.cloudinary.com/v1_1/dmjrzsis4/image/upload", form);
    return res.data.url;
  } catch (error) {
    console.log(error);
    return;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (uploadPic);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

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

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/signup.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0NvbW1vbi9Db21tb25JbnB1dHMuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2LmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3BhZ2VzL3NpZ251cC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9hdXRoVXNlci5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2NhdGNoRXJyb3JzLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL3VwbG9hZFBpY1RvQ2xvdWRpbmFyeS5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIl0sIm5hbWVzIjpbIkNvbW1vbklucHV0cyIsInVzZXIiLCJiaW8iLCJmYWNlYm9vayIsInR3aXR0ZXIiLCJ5b3V0dWJlIiwiaW5zdGFncmFtIiwiaGFuZGxlQ2hhbmdlIiwic2hvd1NvY2lhbExpbmtzIiwic2V0U2hvd1NvY2lhbExpbmtzIiwiVGV4dEFyZWEiLCJJbWFnZURyb3BEaXYiLCJoaWdobGlnaHRlZCIsInNldEhpZ2hsaWdodGVkIiwiaW5wdXRSZWYiLCJtZWRpYVByZXZpZXciLCJzZXRNZWRpYVByZXZpZXciLCJzZXRNZWRpYSIsImRpc3BsYXkiLCJlIiwicHJldmVudERlZmF1bHQiLCJkcm9wcGVkRmlsZSIsIkFycmF5IiwiZnJvbSIsImRhdGFUcmFuc2ZlciIsImZpbGVzIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY29sb3IiLCJjdXJzb3IiLCJjdXJyZW50IiwiY2xpY2siLCJyZWdleFVzZXJOYW1lIiwiY2FuY2VsIiwiU2lnbnVwIiwic2V0VXNlciIsInVzZVN0YXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ2YWx1ZSIsInRhcmdldCIsInByZXYiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiZm9ybUxvYWRpbmciLCJzZXRGb3JtTG9hZGluZyIsInN1Ym1pdERpc2FibGVkIiwic2V0U3VibWl0RGlzYWJsZWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlcm5hbWVMb2FkaW5nIiwic2V0VXNlcm5hbWVMb2FkaW5nIiwidXNlcm5hbWVBdmFpbGFibGUiLCJzZXRVc2VybmFtZUF2YWlsYWJsZSIsIm1lZGlhIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiaXNVc2VyIiwiT2JqZWN0IiwidmFsdWVzIiwiZXZlcnkiLCJpdGVtIiwiQm9vbGVhbiIsImNoZWNrVXNlcm5hbWUiLCJDYW5jZWxUb2tlbiIsImF4aW9zIiwicmVzIiwiYmFzZVVybCIsImNhbmNlbFRva2VuIiwiY2FuY2VsZXIiLCJkYXRhIiwiZXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJwcm9maWxlUGljVXJsIiwidXBsb2FkUGljIiwicmVnaXN0ZXJVc2VyIiwiY2lyY3VsYXIiLCJsaW5rIiwib25DbGljayIsInRlc3QiLCJzZXRFcnJvciIsInNldExvYWRpbmciLCJzZXRUb2tlbiIsImNhdGNoRXJyb3JzIiwiTG9naW5Vc2VyIiwidG9rZW4iLCJjb29raWUiLCJSb3V0ZXIiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJyZXF1ZXN0IiwibWVzc2FnZSIsImZvcm0iLCJGb3JtRGF0YSIsImFwcGVuZCIsInByb2Nlc3MiLCJ1cmwiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFTQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQztBQUNwQkMsTUFBSSxFQUFFO0FBQUVDLE9BQUY7QUFBT0MsWUFBUDtBQUFpQkMsV0FBakI7QUFBMEJDLFdBQTFCO0FBQW1DQztBQUFuQyxHQURjO0FBRXBCQyxjQUZvQjtBQUdwQkMsaUJBSG9CO0FBSXBCQztBQUpvQixDQUFELEtBS2Y7QUFDSixTQUNFLHFFQUNFLE1BQUMseURBQUQ7QUFDRSxZQUFRLE1BRFY7QUFFRSxXQUFPLEVBQUVDLHVEQUZYO0FBR0UsUUFBSSxFQUFDLEtBSFA7QUFJRSxTQUFLLEVBQUVSLEdBSlQ7QUFLRSxZQUFRLEVBQUVLLFlBTFo7QUFNRSxlQUFXLEVBQUMsS0FOZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFTSSxNQUFDLHFEQUFEO0FBQ0UsV0FBTyxFQUFDLGdCQURWO0FBRUUsU0FBSyxFQUFDLEtBRlI7QUFHRSxRQUFJLEVBQUMsSUFIUDtBQUlFLFFBQUksRUFBQyxRQUpQO0FBS0UsV0FBTyxFQUFFLE1BQU1FLGtCQUFrQixDQUFDLENBQUNELGVBQUYsQ0FMbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLEVBZ0JHQSxlQUFlLElBQ2QscUVBQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLHlEQUFEO0FBQ0UsUUFBSSxFQUFDLFVBRFA7QUFFRSxnQkFBWSxFQUFDLE1BRmY7QUFHRSxRQUFJLEVBQUMsVUFIUDtBQUlFLFNBQUssRUFBRUwsUUFKVDtBQUtFLFlBQVEsRUFBRUksWUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFTRSxNQUFDLHlEQUFEO0FBQ0UsUUFBSSxFQUFDLFNBRFA7QUFFRSxnQkFBWSxFQUFDLE1BRmY7QUFHRSxRQUFJLEVBQUMsU0FIUDtBQUlFLFNBQUssRUFBRUgsT0FKVDtBQUtFLFlBQVEsRUFBRUcsWUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEYsRUFnQkUsTUFBQyx5REFBRDtBQUNFLFFBQUksRUFBQyxXQURQO0FBRUUsZ0JBQVksRUFBQyxNQUZmO0FBR0UsUUFBSSxFQUFDLFdBSFA7QUFJRSxTQUFLLEVBQUVELFNBSlQ7QUFLRSxZQUFRLEVBQUVDLFlBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixFQXVCRSxNQUFDLHlEQUFEO0FBQ0UsUUFBSSxFQUFDLFNBRFA7QUFFRSxnQkFBWSxFQUFDLE1BRmY7QUFHRSxRQUFJLEVBQUMsU0FIUDtBQUlFLFNBQUssRUFBRUYsT0FKVDtBQUtFLFlBQVEsRUFBRUUsWUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkJGLEVBOEJFLE1BQUMsc0RBQUQ7QUFDRSxRQUFJLEVBQUMsV0FEUDtBQUVFLFFBQUksTUFGTjtBQUdFLFFBQUksRUFBQyxPQUhQO0FBSUUsVUFBTSxFQUFDLGtDQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5QkYsQ0FqQkosQ0FERjtBQTBERCxDQWhFRDs7QUFrRUEsK0RBQWVQLFlBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBQ0E7O0FBRUEsU0FBU1csWUFBVCxDQUFzQjtBQUNwQkMsYUFEb0I7QUFFcEJDLGdCQUZvQjtBQUdwQkMsVUFIb0I7QUFJcEJQLGNBSm9CO0FBS3BCUSxjQUxvQjtBQU1wQkMsaUJBTm9CO0FBT3BCQztBQVBvQixDQUF0QixFQVFHO0FBQ0QsU0FDRSxxRUFDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQVMsZUFBVyxNQUFwQjtBQUFxQixTQUFLLE1BQTFCO0FBQTJCLGFBQVMsTUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsU0FBSyxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBRFQ7QUFFRSxRQUFJLEVBQUMsTUFGUDtBQUdFLFVBQU0sRUFBQyxTQUhUO0FBSUUsWUFBUSxFQUFFWCxZQUpaO0FBS0UsUUFBSSxFQUFDLE9BTFA7QUFNRSxPQUFHLEVBQUVPLFFBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBVUU7QUFDRSxjQUFVLEVBQUVLLENBQUMsSUFBSTtBQUNmQSxPQUFDLENBQUNDLGNBQUY7QUFDQVAsb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDRCxLQUpIO0FBS0UsZUFBVyxFQUFFTSxDQUFDLElBQUk7QUFDaEJBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBUCxvQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNELEtBUkg7QUFTRSxVQUFNLEVBQUVNLENBQUMsSUFBSTtBQUNYQSxPQUFDLENBQUNDLGNBQUY7QUFDQVAsb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFFQSxZQUFNUSxXQUFXLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXSixDQUFDLENBQUNLLFlBQUYsQ0FBZUMsS0FBMUIsQ0FBcEI7QUFDQVIsY0FBUSxDQUFDSSxXQUFXLENBQUMsQ0FBRCxDQUFaLENBQVI7QUFDQUwscUJBQWUsQ0FBQ1UsR0FBRyxDQUFDQyxlQUFKLENBQW9CTixXQUFXLENBQUMsQ0FBRCxDQUEvQixDQUFELENBQWY7QUFDRCxLQWhCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBaUJHTixZQUFZLEtBQUssSUFBakIsR0FDQyxxRUFDRSxNQUFDLHNEQUFELGVBQWNILFdBQVcsSUFBSTtBQUFDZ0IsU0FBSyxFQUFDO0FBQVAsR0FBN0I7QUFBZ0QsZUFBVyxNQUEzRDtBQUE0RCxTQUFLLE1BQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDRSxNQUFDLHFEQUFEO0FBQVEsUUFBSSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQ0UsUUFBSSxFQUFDLG9CQURQO0FBRUUsU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRTtBQUFWLEtBRlQ7QUFHRSxXQUFPLEVBQUUsTUFBTWYsUUFBUSxDQUFDZ0IsT0FBVCxDQUFpQkMsS0FBakIsRUFIakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLHlDQURGLENBREYsQ0FERCxHQWNDLHFFQUNFLE1BQUMsc0RBQUQ7QUFBUyxTQUFLLEVBQUMsT0FBZjtBQUF1QixlQUFXLE1BQWxDO0FBQW1DLFNBQUssTUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFDRSxPQUFHLEVBQUVoQixZQURQO0FBRUUsUUFBSSxFQUFDLFFBRlA7QUFHRSxZQUFRLE1BSFY7QUFJRSxTQUFLLEVBQUU7QUFBRWMsWUFBTSxFQUFFO0FBQVYsS0FKVDtBQUtFLFdBQU8sRUFBRSxNQUFNZixRQUFRLENBQUNnQixPQUFULENBQWlCQyxLQUFqQixFQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQS9CSixDQVZGLENBREYsQ0FERixDQURGO0FBNkREOztBQUVELCtEQUFlcEIsWUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTXFCLGFBQWEsR0FBRyx1Q0FBdEI7QUFDQSxJQUFJQyxNQUFKOztBQUVBLFNBQVNDLE1BQVQsR0FBa0I7QUFDaEIsUUFBTTtBQUFBLE9BQUNqQyxJQUFEO0FBQUEsT0FBT2tDO0FBQVAsTUFBa0JDLCtDQUFRLENBQUM7QUFDL0JDLFFBQUksRUFBRSxFQUR5QjtBQUUvQkMsU0FBSyxFQUFFLEVBRndCO0FBRy9CQyxZQUFRLEVBQUUsRUFIcUI7QUFJL0JyQyxPQUFHLEVBQUUsRUFKMEI7QUFLL0JDLFlBQVEsRUFBRSxFQUxxQjtBQU0vQkUsV0FBTyxFQUFFLEVBTnNCO0FBTy9CRCxXQUFPLEVBQUUsRUFQc0I7QUFRL0JFLGFBQVMsRUFBRTtBQVJvQixHQUFELENBQWhDO0FBV0EsUUFBTTtBQUFFK0IsUUFBRjtBQUFRQyxTQUFSO0FBQWVDLFlBQWY7QUFBeUJyQztBQUF6QixNQUFpQ0QsSUFBdkM7O0FBRUEsUUFBTU0sWUFBWSxHQUFHWSxDQUFDLElBQUk7QUFDeEIsVUFBTTtBQUFFa0IsVUFBRjtBQUFRRyxXQUFSO0FBQWVmO0FBQWYsUUFBeUJOLENBQUMsQ0FBQ3NCLE1BQWpDOztBQUVBLFFBQUlKLElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQ3BCcEIsY0FBUSxDQUFDUSxLQUFLLENBQUMsQ0FBRCxDQUFOLENBQVI7QUFDQVQscUJBQWUsQ0FBQ1UsR0FBRyxDQUFDQyxlQUFKLENBQW9CRixLQUFLLENBQUMsQ0FBRCxDQUF6QixDQUFELENBQWY7QUFDRDs7QUFFRFUsV0FBTyxDQUFDTyxJQUFJLG9DQUFVQSxJQUFWO0FBQWdCLE9BQUNMLElBQUQsR0FBUUc7QUFBeEIsTUFBTCxDQUFQO0FBQ0QsR0FURDs7QUFXQSxRQUFNO0FBQUEsT0FBQ2hDLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0MyQiwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEQ7QUFDQSxRQUFNO0FBQUEsT0FBQ08sWUFBRDtBQUFBLE9BQWVDO0FBQWYsTUFBa0NSLCtDQUFRLENBQUMsS0FBRCxDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDUyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQlYsK0NBQVEsQ0FBQyxJQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNXLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDWiwrQ0FBUSxDQUFDLEtBQUQsQ0FBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQ2EsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ2QsK0NBQVEsQ0FBQyxJQUFELENBQXBEO0FBRUEsUUFBTTtBQUFBLE9BQUNlLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCaEIsK0NBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNpQixlQUFEO0FBQUEsT0FBa0JDO0FBQWxCLE1BQXdDbEIsK0NBQVEsQ0FBQyxLQUFELENBQXREO0FBQ0EsUUFBTTtBQUFBLE9BQUNtQixpQkFBRDtBQUFBLE9BQW9CQztBQUFwQixNQUE0Q3BCLCtDQUFRLENBQUMsS0FBRCxDQUExRDtBQUVBLFFBQU07QUFBQSxPQUFDcUIsS0FBRDtBQUFBLE9BQVF4QztBQUFSLE1BQW9CbUIsK0NBQVEsQ0FBQyxJQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNyQixZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ29CLCtDQUFRLENBQUMsSUFBRCxDQUFoRDtBQUNBLFFBQU07QUFBQSxPQUFDeEIsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0N1QiwrQ0FBUSxDQUFDLEtBQUQsQ0FBOUM7QUFDQSxRQUFNdEIsUUFBUSxHQUFHNEMsNkNBQU0sRUFBdkI7QUFFQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUFFekIsVUFBRjtBQUFRQyxXQUFSO0FBQWVDLGNBQWY7QUFBeUJyQztBQUF6QixLQUFkLEVBQThDNkQsS0FBOUMsQ0FBb0RDLElBQUksSUFDckVDLE9BQU8sQ0FBQ0QsSUFBRCxDQURNLENBQWY7QUFHQUosVUFBTSxHQUFHVixpQkFBaUIsQ0FBQyxLQUFELENBQXBCLEdBQThCQSxpQkFBaUIsQ0FBQyxJQUFELENBQXJEO0FBQ0QsR0FMUSxFQUtOLENBQUNqRCxJQUFELENBTE0sQ0FBVDs7QUFPQSxRQUFNaUUsYUFBYSxHQUFHLFlBQVk7QUFDaENaLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7O0FBQ0EsUUFBSTtBQUNGckIsWUFBTSxJQUFJQSxNQUFNLEVBQWhCO0FBRUEsWUFBTWtDLFdBQVcsR0FBR0MsMERBQXBCO0FBRUEsWUFBTUMsR0FBRyxHQUFHLE1BQU1ELGdEQUFBLENBQVcsR0FBRUUsbURBQVEsZUFBY25CLFFBQVMsRUFBNUMsRUFBK0M7QUFDL0RvQixtQkFBVyxFQUFFLElBQUlKLFdBQUosQ0FBZ0JLLFFBQVEsSUFBSTtBQUN2Q3ZDLGdCQUFNLEdBQUd1QyxRQUFUO0FBQ0QsU0FGWTtBQURrRCxPQUEvQyxDQUFsQjtBQU1BLFVBQUkzQixRQUFRLEtBQUssSUFBakIsRUFBdUJDLFdBQVcsQ0FBQyxJQUFELENBQVg7O0FBRXZCLFVBQUl1QixHQUFHLENBQUNJLElBQUosS0FBYSxXQUFqQixFQUE4QjtBQUM1QmpCLDRCQUFvQixDQUFDLElBQUQsQ0FBcEI7QUFDQXJCLGVBQU8sQ0FBQ08sSUFBSSxvQ0FBVUEsSUFBVjtBQUFnQlM7QUFBaEIsVUFBTCxDQUFQO0FBQ0Q7QUFDRixLQWpCRCxDQWlCRSxPQUFPdUIsS0FBUCxFQUFjO0FBQ2Q1QixpQkFBVyxDQUFDLHdCQUFELENBQVg7QUFDQVUsMEJBQW9CLENBQUMsS0FBRCxDQUFwQjtBQUNEOztBQUNERixzQkFBa0IsQ0FBQyxLQUFELENBQWxCO0FBQ0QsR0F4QkQ7O0FBMEJBSyxrREFBUyxDQUFDLE1BQU07QUFDZFIsWUFBUSxLQUFLLEVBQWIsR0FBa0JLLG9CQUFvQixDQUFDLEtBQUQsQ0FBdEMsR0FBZ0RVLGFBQWEsRUFBN0Q7QUFDRCxHQUZRLEVBRU4sQ0FBQ2YsUUFBRCxDQUZNLENBQVQ7O0FBSUEsUUFBTXdCLFlBQVksR0FBRyxNQUFNeEQsQ0FBTixJQUFXO0FBQzlCQSxLQUFDLENBQUNDLGNBQUY7QUFDQTRCLGtCQUFjLENBQUMsSUFBRCxDQUFkO0FBRUEsUUFBSTRCLGFBQUo7O0FBQ0EsUUFBSW5CLEtBQUssS0FBSyxJQUFkLEVBQW9CO0FBQ2xCbUIsbUJBQWEsR0FBRyxNQUFNQyxxRUFBUyxDQUFDcEIsS0FBRCxDQUEvQjtBQUNEOztBQUVELFFBQUlBLEtBQUssS0FBSyxJQUFWLElBQWtCLENBQUNtQixhQUF2QixFQUFzQztBQUNwQzVCLG9CQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0EsYUFBT0YsV0FBVyxDQUFDLHVCQUFELENBQWxCO0FBQ0Q7O0FBRUQsVUFBTWdDLDZEQUFZLENBQUM3RSxJQUFELEVBQU8yRSxhQUFQLEVBQXNCOUIsV0FBdEIsRUFBbUNFLGNBQW5DLENBQWxCO0FBQ0QsR0FmRDs7QUFpQkEsU0FDRSxxRUFDRSxNQUFDLG1EQUFEO0FBQU0sV0FBTyxFQUFFRCxXQUFmO0FBQTRCLFNBQUssRUFBRUYsUUFBUSxLQUFLLElBQWhEO0FBQXNELFlBQVEsRUFBRThCLFlBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQ0UsU0FBSyxNQURQO0FBRUUsVUFBTSxFQUFDLE9BRlQ7QUFHRSxXQUFPLEVBQUU5QixRQUhYO0FBSUUsYUFBUyxFQUFFLE1BQU1DLFdBQVcsQ0FBQyxJQUFELENBSjlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVFFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0VBQUQ7QUFDRSxnQkFBWSxFQUFFL0IsWUFEaEI7QUFFRSxtQkFBZSxFQUFFQyxlQUZuQjtBQUdFLFlBQVEsRUFBRUMsUUFIWjtBQUlFLFlBQVEsRUFBRUgsUUFKWjtBQUtFLGVBQVcsRUFBRUYsV0FMZjtBQU1FLGtCQUFjLEVBQUVDLGNBTmxCO0FBT0UsZ0JBQVksRUFBRU4sWUFQaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBVUUsTUFBQyx5REFBRDtBQUNFLFlBQVEsTUFEVjtBQUVFLFNBQUssRUFBQyxNQUZSO0FBR0UsZUFBVyxFQUFDLE1BSGQ7QUFJRSxRQUFJLEVBQUMsTUFKUDtBQUtFLFNBQUssRUFBRThCLElBTFQ7QUFNRSxZQUFRLEVBQUU5QixZQU5aO0FBT0UsU0FBSyxNQVBQO0FBUUUsUUFBSSxFQUFDLE1BUlA7QUFTRSxnQkFBWSxFQUFDLE1BVGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBc0JFLE1BQUMseURBQUQ7QUFDRSxZQUFRLE1BRFY7QUFFRSxTQUFLLEVBQUMsT0FGUjtBQUdFLGVBQVcsRUFBQyxPQUhkO0FBSUUsUUFBSSxFQUFDLE9BSlA7QUFLRSxTQUFLLEVBQUUrQixLQUxUO0FBTUUsWUFBUSxFQUFFL0IsWUFOWjtBQU9FLFNBQUssTUFQUDtBQVFFLFFBQUksRUFBQyxVQVJQO0FBU0UsZ0JBQVksRUFBQyxNQVRmO0FBVUUsUUFBSSxFQUFDLE9BVlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRCRixFQW1DRSxNQUFDLHlEQUFEO0FBQ0UsU0FBSyxFQUFDLFVBRFI7QUFFRSxlQUFXLEVBQUMsVUFGZDtBQUdFLFFBQUksRUFBQyxVQUhQO0FBSUUsU0FBSyxFQUFFZ0MsUUFKVDtBQUtFLFlBQVEsRUFBRWhDLFlBTFo7QUFNRSxTQUFLLE1BTlA7QUFPRSxRQUFJLEVBQUU7QUFDSjhCLFVBQUksRUFBRSxLQURGO0FBRUowQyxjQUFRLEVBQUUsSUFGTjtBQUdKQyxVQUFJLEVBQUUsSUFIRjtBQUlKQyxhQUFPLEVBQUUsTUFBTXJDLGVBQWUsQ0FBQyxDQUFDRCxZQUFGO0FBSjFCLEtBUFI7QUFhRSxnQkFBWSxFQUFDLE1BYmY7QUFjRSxRQUFJLEVBQUVBLFlBQVksR0FBRyxNQUFILEdBQVksVUFkaEM7QUFlRSxZQUFRLE1BZlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5DRixFQXFERSxNQUFDLHlEQUFEO0FBQ0UsV0FBTyxFQUFFVSxlQURYO0FBRUUsU0FBSyxFQUFFLENBQUNFLGlCQUZWO0FBR0UsWUFBUSxNQUhWO0FBSUUsU0FBSyxFQUFDLFVBSlI7QUFLRSxlQUFXLEVBQUMsVUFMZDtBQU1FLFNBQUssRUFBRUosUUFOVDtBQU9FLFlBQVEsRUFBRWhDLENBQUMsSUFBSTtBQUNiaUMsaUJBQVcsQ0FBQ2pDLENBQUMsQ0FBQ3NCLE1BQUYsQ0FBU0QsS0FBVixDQUFYOztBQUNBLFVBQUlSLGFBQWEsQ0FBQ2tELElBQWQsQ0FBbUIvRCxDQUFDLENBQUNzQixNQUFGLENBQVNELEtBQTVCLENBQUosRUFBd0M7QUFDdENnQiw0QkFBb0IsQ0FBQyxJQUFELENBQXBCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xBLDRCQUFvQixDQUFDLEtBQUQsQ0FBcEI7QUFDRDtBQUNGLEtBZEg7QUFlRSxTQUFLLE1BZlA7QUFnQkUsUUFBSSxFQUFFRCxpQkFBaUIsR0FBRyxPQUFILEdBQWEsT0FoQnRDO0FBaUJFLGdCQUFZLEVBQUMsTUFqQmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJERixFQXlFRSxNQUFDLG9FQUFEO0FBQ0UsUUFBSSxFQUFFdEQsSUFEUjtBQUVFLG1CQUFlLEVBQUVPLGVBRm5CO0FBR0Usc0JBQWtCLEVBQUVDLGtCQUh0QjtBQUlFLGdCQUFZLEVBQUVGLFlBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF6RUYsRUFnRkUsTUFBQyxzREFBRDtBQUFTLFVBQU0sTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEZGLEVBaUZFLE1BQUMscURBQUQ7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFdBQU8sRUFBQyxRQUZWO0FBR0UsUUFBSSxFQUFDLFFBSFA7QUFJRSxTQUFLLEVBQUMsUUFKUjtBQUtFLFlBQVEsRUFBRTBDLGNBQWMsSUFBSSxDQUFDTSxpQkFML0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpGRixDQVJGLENBREYsQ0FERjtBQXVHRDs7QUFFRCwrREFBZXJCLE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxNQUFNNEMsWUFBWSxHQUFFLE9BQU83RSxJQUFQLEVBQVkyRSxhQUFaLEVBQTBCTyxRQUExQixFQUFtQ0MsVUFBbkMsS0FBaUQ7QUFDeEVBLFlBQVUsQ0FBQyxJQUFELENBQVY7O0FBQ0EsTUFBSTtBQUNBLFVBQU1mLEdBQUcsR0FBQyxNQUFNRCxpREFBQSxDQUFZLEdBQUVFLDZDQUFRLGFBQXRCLEVBQW1DO0FBQUNyRSxVQUFEO0FBQU0yRTtBQUFOLEtBQW5DLENBQWhCO0FBQ0FTLFlBQVEsQ0FBQ2hCLEdBQUcsQ0FBQ0ksSUFBTCxDQUFSO0FBRUgsR0FKRCxDQUlFLE9BQU9DLEtBQVAsRUFBYztBQUNaLFVBQU03QixRQUFRLEdBQUV5QyxxREFBVyxDQUFDWixLQUFELENBQTNCO0FBQ0FTLFlBQVEsQ0FBQ3RDLFFBQUQsQ0FBUjtBQUVIOztBQUNEdUMsWUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUdILENBZE07QUFpQkEsTUFBTUcsU0FBUyxHQUFFLE9BQU90RixJQUFQLEVBQVlrRixRQUFaLEVBQXFCQyxVQUFyQixLQUFtQztBQUN2REEsWUFBVSxDQUFDLElBQUQsQ0FBVjs7QUFDQSxNQUFJO0FBQ0EsVUFBTWYsR0FBRyxHQUFDLE1BQU1ELGlEQUFBLENBQVksR0FBRUUsNkNBQVEsV0FBdEIsRUFBaUM7QUFBQ3JFO0FBQUQsS0FBakMsQ0FBaEI7QUFDQW9GLFlBQVEsQ0FBQ2hCLEdBQUcsQ0FBQ0ksSUFBTCxDQUFSO0FBRUgsR0FKRCxDQUlFLE9BQU9DLEtBQVAsRUFBYztBQUNaLFVBQU03QixRQUFRLEdBQUV5QyxxREFBVyxDQUFDWixLQUFELENBQTNCO0FBQ0FTLFlBQVEsQ0FBQ3RDLFFBQUQsQ0FBUjtBQUVIOztBQUNEdUMsWUFBVSxDQUFDLEtBQUQsQ0FBVjtBQUdILENBZE07O0FBZ0JQLE1BQU1DLFFBQVEsR0FBRUcsS0FBRCxJQUFTO0FBQ3BCQyxzREFBQSxDQUFXLE9BQVgsRUFBbUJELEtBQW5CO0FBQ0FFLHlEQUFBLENBQVksR0FBWjtBQUVILENBSkQsQzs7Ozs7Ozs7Ozs7O0FDdENBLE1BQU1wQixPQUFPLEdBQUUsdUJBQWY7QUFFQSwrREFBZUEsT0FBZixFOzs7Ozs7Ozs7Ozs7QUNGQSxNQUFNZ0IsV0FBVyxHQUFJWixLQUFELElBQVc7QUFDN0IsTUFBSTdCLFFBQVEsR0FBRyxFQUFmOztBQUVBLE1BQUk2QixLQUFLLENBQUNpQixRQUFWLEVBQW9CO0FBQ2xCO0FBRUE5QyxZQUFRLEdBQUc2QixLQUFLLENBQUNpQixRQUFOLENBQWVsQixJQUExQjtBQUVBbUIsV0FBTyxDQUFDbEIsS0FBUixDQUFjN0IsUUFBZDtBQUNELEdBTkQsTUFNTyxJQUFJNkIsS0FBSyxDQUFDbUIsT0FBVixFQUFtQjtBQUN4QjtBQUNBaEQsWUFBUSxHQUFHNkIsS0FBSyxDQUFDbUIsT0FBakI7QUFFQUQsV0FBTyxDQUFDbEIsS0FBUixDQUFjN0IsUUFBZDtBQUNELEdBTE0sTUFLQTtBQUNMO0FBQ0FBLFlBQVEsR0FBRzZCLEtBQUssQ0FBQ29CLE9BQWpCO0FBRUFGLFdBQU8sQ0FBQ2xCLEtBQVIsQ0FBYzdCLFFBQWQ7QUFDRDs7QUFDRixTQUFPQSxRQUFQO0FBQ0EsQ0FyQkQ7O0FBdUJBLCtEQUFleUMsV0FBZixFOzs7Ozs7Ozs7Ozs7OztBQ3ZCQTs7QUFHQSxNQUFNVCxTQUFTLEdBQUcsTUFBTXBCLEtBQU4sSUFBZTtBQUMvQixNQUFJO0FBQ0YsVUFBTXNDLElBQUksR0FBRyxJQUFJQyxRQUFKLEVBQWI7QUFDQUQsUUFBSSxDQUFDRSxNQUFMLENBQVksTUFBWixFQUFvQnhDLEtBQXBCO0FBQ0FzQyxRQUFJLENBQUNFLE1BQUwsQ0FBWSxlQUFaLEVBQTRCLGtCQUE1QjtBQUNBRixRQUFJLENBQUNFLE1BQUwsQ0FBWSxZQUFaLEVBQTBCLFlBQTFCO0FBRUEsVUFBTTVCLEdBQUcsR0FBRyxNQUFNRCxpREFBQSxDQUFXOEIsd0RBQVgsRUFBdUNILElBQXZDLENBQWxCO0FBQ0EsV0FBTzFCLEdBQUcsQ0FBQ0ksSUFBSixDQUFTMEIsR0FBaEI7QUFDRCxHQVJELENBUUUsT0FBT3pCLEtBQVAsRUFBYztBQUNka0IsV0FBTyxDQUFDUSxHQUFSLENBQVkxQixLQUFaO0FBQ0E7QUFDRDtBQUNGLENBYkQ7O0FBZUEsK0RBQWVHLFNBQWYsRTs7Ozs7Ozs7Ozs7QUNsQkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEZvcm0sXHJcbiAgQnV0dG9uLFxyXG4gIE1lc3NhZ2UsXHJcbiAgU2VnbWVudCxcclxuICBUZXh0QXJlYSxcclxuICBEaXZpZGVyLFxyXG59IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuY29uc3QgQ29tbW9uSW5wdXRzID0gKHtcclxuICB1c2VyOiB7IGJpbywgZmFjZWJvb2ssIHR3aXR0ZXIsIHlvdXR1YmUsIGluc3RhZ3JhbSB9LFxyXG4gIGhhbmRsZUNoYW5nZSxcclxuICBzaG93U29jaWFsTGlua3MsXHJcbiAgc2V0U2hvd1NvY2lhbExpbmtzLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtLkZpZWxkXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICBjb250cm9sPXtUZXh0QXJlYX1cclxuICAgICAgICBuYW1lPVwiYmlvXCJcclxuICAgICAgICB2YWx1ZT17YmlvfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJiaW9cIlxyXG4gICAgICAvPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGNvbnRlbnQ9XCJhZGQgc29jYWwgbGlua1wiXHJcbiAgICAgICAgICBjb2xvcj1cInJlZFwiXHJcbiAgICAgICAgICBpY29uPVwiYXRcIlxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93U29jaWFsTGlua3MoIXNob3dTb2NpYWxMaW5rcyl9XHJcbiAgICAgICAgLz5cclxuICAgICAge3Nob3dTb2NpYWxMaW5rcyAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBpY29uPVwiZmFjZWJvb2tcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgbmFtZT1cImZhY2Vib29rXCJcclxuICAgICAgICAgICAgdmFsdWU9e2ZhY2Vib29rfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIGljb249XCJ0d2l0dGVyXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJ0d2l0dGVyXCJcclxuICAgICAgICAgICAgdmFsdWU9e3R3aXR0ZXJ9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgaWNvbj1cImluc3RhZ3JhbVwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICBuYW1lPVwiaW5zdGFncmFtXCJcclxuICAgICAgICAgICAgdmFsdWU9e2luc3RhZ3JhbX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBpY29uPVwieW91dHViZVwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICBuYW1lPVwieW91dHViZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt5b3V0dWJlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICAgIGljb249XCJhdHRlbnRpb25cIlxyXG4gICAgICAgICAgICBpbmZvXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIGhlYWRlcj1cInNvY2lhbCBtZWRpYSBsaW5rcyBhcmUgb3B0aW9ubmFsXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbW9uSW5wdXRzO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm0sIFNlZ21lbnQsIEltYWdlLCBJY29uLCBIZWFkZXIgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEltYWdlRHJvcERpdih7XHJcbiAgaGlnaGxpZ2h0ZWQsXHJcbiAgc2V0SGlnaGxpZ2h0ZWQsXHJcbiAgaW5wdXRSZWYsXHJcbiAgaGFuZGxlQ2hhbmdlLFxyXG4gIG1lZGlhUHJldmlldyxcclxuICBzZXRNZWRpYVByZXZpZXcsXHJcbiAgc2V0TWVkaWFcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICA8U2VnbWVudCBwbGFjZWhvbGRlciBiYXNpYyBzZWNvbmRhcnk+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgbmFtZT1cIm1lZGlhXCJcclxuICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBvbkRyYWdPdmVyPXtlID0+IHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uRHJhZ0xlYXZlPXtlID0+IHtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkRyb3A9e2UgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgY29uc3QgZHJvcHBlZEZpbGUgPSBBcnJheS5mcm9tKGUuZGF0YVRyYW5zZmVyLmZpbGVzKTtcclxuICAgICAgICAgICAgICBzZXRNZWRpYShkcm9wcGVkRmlsZVswXSk7XHJcbiAgICAgICAgICAgICAgc2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZHJvcHBlZEZpbGVbMF0pKTtcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHttZWRpYVByZXZpZXcgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxTZWdtZW50IHsuLi4oaGlnaGxpZ2h0ZWQgJiYge2NvbG9yOlwiZ3JlZW5cIn0pfSAgcGxhY2Vob2xkZXIgYmFzaWM+XHJcbiAgICAgICAgICAgICAgICAgIDxIZWFkZXIgaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpbGUgaW1hZ2Ugb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICBEcmFnIG4gRHJvcCBvciBDbGljayBUbyBVcGxvYWQgSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxTZWdtZW50IGNvbG9yPVwiZ3JlZW5cIiBwbGFjZWhvbGRlciBiYXNpYz5cclxuICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXttZWRpYVByZXZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIm1lZGl1bVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyZWRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaW5wdXRSZWYuY3VycmVudC5jbGljaygpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZURyb3BEaXY7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBNZXNzYWdlLCBTZWdtZW50LCBEaXZpZGVyIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBDb21tb25JbnB1dHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL0NvbW1vbklucHV0c1wiO1xyXG5pbXBvcnQgSW1hZ2VEcm9wRGl2IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9JbWFnZURyb3BEaXZcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5pbXBvcnQgeyByZWdpc3RlclVzZXIgfSBmcm9tIFwiLi4vdXRpbHMvYXV0aFVzZXJcIjtcclxuaW1wb3J0IHVwbG9hZFBpYyBmcm9tIFwiLi4vdXRpbHMvdXBsb2FkUGljVG9DbG91ZGluYXJ5XCI7XHJcbmNvbnN0IHJlZ2V4VXNlck5hbWUgPSAvXig/IS4qXFwuXFwuKSg/IS4qXFwuJClbXlxcV11bXFx3Ll17MCwyOX0kLztcclxubGV0IGNhbmNlbDtcclxuXHJcbmZ1bmN0aW9uIFNpZ251cCgpIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICAgIGJpbzogXCJcIixcclxuICAgIGZhY2Vib29rOiBcIlwiLFxyXG4gICAgeW91dHViZTogXCJcIixcclxuICAgIHR3aXR0ZXI6IFwiXCIsXHJcbiAgICBpbnN0YWdyYW06IFwiXCJcclxuICB9KTtcclxuXHJcbiAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGJpbyB9ID0gdXNlcjtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlLCBmaWxlcyB9ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgaWYgKG5hbWUgPT09IFwibWVkaWFcIikge1xyXG4gICAgICBzZXRNZWRpYShmaWxlc1swXSk7XHJcbiAgICAgIHNldE1lZGlhUHJldmlldyhVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzWzBdKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VXNlcihwcmV2ID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtzaG93U29jaWFsTGlua3MsIHNldFNob3dTb2NpYWxMaW5rc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtmb3JtTG9hZGluZywgc2V0Rm9ybUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzdWJtaXREaXNhYmxlZCwgc2V0U3VibWl0RGlzYWJsZWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VzZXJuYW1lTG9hZGluZywgc2V0VXNlcm5hbWVMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXNlcm5hbWVBdmFpbGFibGUsIHNldFVzZXJuYW1lQXZhaWxhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW21lZGlhLCBzZXRNZWRpYV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbWVkaWFQcmV2aWV3LCBzZXRNZWRpYVByZXZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2hpZ2hsaWdodGVkLCBzZXRIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGlzVXNlciA9IE9iamVjdC52YWx1ZXMoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGJpbyB9KS5ldmVyeShpdGVtID0+XHJcbiAgICAgIEJvb2xlYW4oaXRlbSlcclxuICAgICk7XHJcbiAgICBpc1VzZXIgPyBzZXRTdWJtaXREaXNhYmxlZChmYWxzZSkgOiBzZXRTdWJtaXREaXNhYmxlZCh0cnVlKTtcclxuICB9LCBbdXNlcl0pO1xyXG5cclxuICBjb25zdCBjaGVja1VzZXJuYW1lID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0VXNlcm5hbWVMb2FkaW5nKHRydWUpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY2FuY2VsICYmIGNhbmNlbCgpO1xyXG5cclxuICAgICAgY29uc3QgQ2FuY2VsVG9rZW4gPSBheGlvcy5DYW5jZWxUb2tlbjtcclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvc2lnbnVwLyR7dXNlcm5hbWV9YCwge1xyXG4gICAgICAgIGNhbmNlbFRva2VuOiBuZXcgQ2FuY2VsVG9rZW4oY2FuY2VsZXIgPT4ge1xyXG4gICAgICAgICAgY2FuY2VsID0gY2FuY2VsZXI7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoZXJyb3JNc2cgIT09IG51bGwpIHNldEVycm9yTXNnKG51bGwpO1xyXG5cclxuICAgICAgaWYgKHJlcy5kYXRhID09PSBcIkF2YWlsYWJsZVwiKSB7XHJcbiAgICAgICAgc2V0VXNlcm5hbWVBdmFpbGFibGUodHJ1ZSk7XHJcbiAgICAgICAgc2V0VXNlcihwcmV2ID0+ICh7IC4uLnByZXYsIHVzZXJuYW1lIH0pKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3JNc2coXCJVc2VybmFtZSBOb3QgQXZhaWxhYmxlXCIpO1xyXG4gICAgICBzZXRVc2VybmFtZUF2YWlsYWJsZShmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBzZXRVc2VybmFtZUxvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB1c2VybmFtZSA9PT0gXCJcIiA/IHNldFVzZXJuYW1lQXZhaWxhYmxlKGZhbHNlKSA6IGNoZWNrVXNlcm5hbWUoKTtcclxuICB9LCBbdXNlcm5hbWVdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRGb3JtTG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICBsZXQgcHJvZmlsZVBpY1VybDtcclxuICAgIGlmIChtZWRpYSAhPT0gbnVsbCkge1xyXG4gICAgICBwcm9maWxlUGljVXJsID0gYXdhaXQgdXBsb2FkUGljKG1lZGlhKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobWVkaWEgIT09IG51bGwgJiYgIXByb2ZpbGVQaWNVcmwpIHtcclxuICAgICAgc2V0Rm9ybUxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICByZXR1cm4gc2V0RXJyb3JNc2coXCJFcnJvciBVcGxvYWRpbmcgSW1hZ2VcIik7XHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgcmVnaXN0ZXJVc2VyKHVzZXIsIHByb2ZpbGVQaWNVcmwsIHNldEVycm9yTXNnLCBzZXRGb3JtTG9hZGluZyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxGb3JtIGxvYWRpbmc9e2Zvcm1Mb2FkaW5nfSBlcnJvcj17ZXJyb3JNc2cgIT09IG51bGx9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgaGVhZGVyPVwiT29wcyFcIlxyXG4gICAgICAgICAgY29udGVudD17ZXJyb3JNc2d9XHJcbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldEVycm9yTXNnKG51bGwpfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgICAgPEltYWdlRHJvcERpdlxyXG4gICAgICAgICAgICBtZWRpYVByZXZpZXc9e21lZGlhUHJldmlld31cclxuICAgICAgICAgICAgc2V0TWVkaWFQcmV2aWV3PXtzZXRNZWRpYVByZXZpZXd9XHJcbiAgICAgICAgICAgIHNldE1lZGlhPXtzZXRNZWRpYX1cclxuICAgICAgICAgICAgaW5wdXRSZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICBoaWdobGlnaHRlZD17aGlnaGxpZ2h0ZWR9XHJcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkPXtzZXRIaWdobGlnaHRlZH1cclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj1cInVzZXJcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIGljb249XCJlbnZlbG9wZVwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj17e1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwiZXllXCIsXHJcbiAgICAgICAgICAgICAgY2lyY3VsYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgbGluazogdHJ1ZSxcclxuICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBzZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZCA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBsb2FkaW5nPXt1c2VybmFtZUxvYWRpbmd9XHJcbiAgICAgICAgICAgIGVycm9yPXshdXNlcm5hbWVBdmFpbGFibGV9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgIGlmIChyZWdleFVzZXJOYW1lLnRlc3QoZS50YXJnZXQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUF2YWlsYWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVBdmFpbGFibGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj17dXNlcm5hbWVBdmFpbGFibGUgPyBcImNoZWNrXCIgOiBcImNsb3NlXCJ9XHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Q29tbW9uSW5wdXRzXHJcbiAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgIHNob3dTb2NpYWxMaW5rcz17c2hvd1NvY2lhbExpbmtzfVxyXG4gICAgICAgICAgICBzZXRTaG93U29jaWFsTGlua3M9e3NldFNob3dTb2NpYWxMaW5rc31cclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBpY29uPVwic2lnbnVwXCJcclxuICAgICAgICAgICAgY29udGVudD1cIlNpZ251cFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICBjb2xvcj1cIm9yYW5nZVwiXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXREaXNhYmxlZCB8fCAhdXNlcm5hbWVBdmFpbGFibGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgPC9Gb3JtPlxyXG5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cDtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi9iYXNlVXJsXCI7XHJcbmltcG9ydCBjYXRjaEVycm9ycyBmcm9tIFwiLi9jYXRjaEVycm9yc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlciA9YXN5bmMgKHVzZXIscHJvZmlsZVBpY1VybCxzZXRFcnJvcixzZXRMb2FkaW5nKSA9PntcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzPWF3YWl0IGF4aW9zLnBvc3QoYCR7YmFzZVVybH0vYXBpL3NpZ251cGAse3VzZXIscHJvZmlsZVBpY1VybH0pXHJcbiAgICAgICAgc2V0VG9rZW4ocmVzLmRhdGEpXHJcbiAgICAgICAgXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnN0IGVycm9yTXNnID1jYXRjaEVycm9ycyhlcnJvcilcclxuICAgICAgICBzZXRFcnJvcihlcnJvck1zZylcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHNldExvYWRpbmcoZmFsc2UpXHJcblxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMb2dpblVzZXIgPWFzeW5jICh1c2VyLHNldEVycm9yLHNldExvYWRpbmcpID0+e1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXM9YXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9hcGkvYXV0aGAse3VzZXJ9KVxyXG4gICAgICAgIHNldFRva2VuKHJlcy5kYXRhKVxyXG4gICAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBlcnJvck1zZyA9Y2F0Y2hFcnJvcnMoZXJyb3IpXHJcbiAgICAgICAgc2V0RXJyb3IoZXJyb3JNc2cpXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG5cclxuXHJcbn1cclxuXHJcbmNvbnN0IHNldFRva2VuPSh0b2tlbik9PntcclxuICAgIGNvb2tpZS5zZXQoXCJ0b2tlblwiLHRva2VuKVxyXG4gICAgUm91dGVyLnB1c2goJy8nKVxyXG5cclxufSIsImNvbnN0IGJhc2VVcmwgPVwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBiYXNlVXJsO1xyXG4iLCJjb25zdCBjYXRjaEVycm9ycyA9IChlcnJvcikgPT4ge1xyXG4gIGxldCBlcnJvck1zZyA9ICcnO1xyXG5cclxuICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgIC8vIElmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIG5vdCByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlIGluIHRoZSByYW5nZSBvZiAyeHhcclxuXHJcbiAgICBlcnJvck1zZyA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAvLyBpZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgbm8gcmVzcG9uc2Ugd2FzIHJlY2V2aWVkIGZyb20gc2VydmVyXHJcbiAgICBlcnJvck1zZyA9IGVycm9yLnJlcXVlc3Q7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGlmIHNvbWV0aGluZyBlbHNlIGhhcHBlbmVkIHdoaWxlIG1ha2luZyB0aGUgcmVxdWVzdFxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5tZXNzYWdlO1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH1cclxuIHJldHVybiBlcnJvck1zZztcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdGNoRXJyb3JzO1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuY29uc3QgdXBsb2FkUGljID0gYXN5bmMgbWVkaWEgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtLmFwcGVuZChcImZpbGVcIiwgbWVkaWEpO1xyXG4gICAgZm9ybS5hcHBlbmQoXCJ1cGxvYWRfcHJlc2V0XCIsXCJzb2NpYWxfbWVkaWFfYXBwXCIpO1xyXG4gICAgZm9ybS5hcHBlbmQoXCJjbG91ZF9uYW1lXCIsIFwiaW5kZXJzaW5naFwiKTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KHByb2Nlc3MuZW52LkNMT1VESU5BUllfVVJMLCBmb3JtKTtcclxuICAgIHJldHVybiByZXMuZGF0YS51cmw7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1cGxvYWRQaWM7XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9