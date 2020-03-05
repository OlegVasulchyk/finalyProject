/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/scripts/anchor.js":
/*!**************************************!*\
  !*** ./src/common/scripts/anchor.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/common/scripts/parallax.js":
/*!****************************************!*\
  !*** ./src/common/scripts/parallax.js ***!
  \****************************************/
/*! exports provided: showVisible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showVisible", function() { return showVisible; });
function isVisible(elem) {
  var coords = elem.getBoundingClientRect();
  var windowHeight = document.documentElement.clientHeight;
  var topVisible = coords.top > 0 && coords.top < windowHeight; // нижний край элемента виден?

  var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
  return topVisible || bottomVisible;
}

function showVisible() {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = document.querySelectorAll(".parallax-mobile")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var parallax = _step.value;

      if (isVisible(parallax)) {
        parallax.classList.add("parallax-mobile--visible");
        parallax.classList.remove("parallax-mobile");
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}



/***/ }),

/***/ "./src/common/scripts/render-footer.js":
/*!*********************************************!*\
  !*** ./src/common/scripts/render-footer.js ***!
  \*********************************************/
/*! exports provided: renderFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderFooter", function() { return renderFooter; });
var renderFooter = function renderFooter() {
  var body = document.querySelector("body");
  var template = " <footer class=\"main-footer\">\n  <ul class=\"social\">\n    <li class=\"social__item\">\n      <a href=\"https://www.pinterest.com\" class=\"social__link\"\n        ><i class=\"fab fa-pinterest-p\"></i\n      ></a>\n    </li>\n    <li class=\"social__item\">\n      <a href=\"https://uk-ua.facebook.com\" class=\"social__link\"\n        ><i class=\"fab fa-facebook-f\"></i\n      ></a>\n    </li>\n    <li class=\"social__item\">\n      <a href=\"https://twitter.com\" class=\"social__link\"\n        ><i class=\"fab fa-twitter\"></i\n      ></a>\n    </li>\n    <li class=\"social__item\">\n      <a href=\"https://www.instagram.com/\" class=\"social__link\"\n        ><i class=\"fab fa-instagram\"></i\n      ></a>\n    </li>\n  </ul>\n  \xA9 2023 by The Art of Food. Proudly created with\n  <a href=\"#\" class=\"main-footer__link\">Wix.com</a>\n</footer>";
  body.insertAdjacentHTML("beforeEnd", template);
};



/***/ }),

/***/ "./src/common/scripts/render-header.js":
/*!*********************************************!*\
  !*** ./src/common/scripts/render-header.js ***!
  \*********************************************/
/*! exports provided: renderHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderHeader", function() { return renderHeader; });
var renderHeader = function renderHeader() {
  var body = document.querySelector("body");
  var template = "\n  <header class=\"page-header page-header--border\">\n<a href=\"#\" class=\"header header__link\">\n  <span class=\"header__text\"\n    >This site was designed with the <span class=\"logo-wix\">WIX</span>.com\n    website builder. Great your website today.\n  </span>\n  <button class=\"btn-wix btn-wix--premium\">start now</button>\n</a>\n</header>";
  body.insertAdjacentHTML("afterBegin", template);
};



/***/ }),

/***/ "./src/contact/contact.js":
/*!********************************!*\
  !*** ./src/contact/contact.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contact_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.scss */ "./src/contact/contact.scss");
/* harmony import */ var _contact_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_contact_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_scripts_render_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/scripts/render-header */ "./src/common/scripts/render-header.js");
/* harmony import */ var _render_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-navigation */ "./src/contact/render-navigation.js");
/* harmony import */ var _render_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render-main */ "./src/contact/render-main.js");
/* harmony import */ var _common_scripts_render_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/scripts/render-footer */ "./src/common/scripts/render-footer.js");
/* harmony import */ var _common_scripts_parallax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/scripts/parallax */ "./src/common/scripts/parallax.js");
/* harmony import */ var _common_scripts_anchor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/scripts/anchor */ "./src/common/scripts/anchor.js");
/* harmony import */ var _common_scripts_anchor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_common_scripts_anchor__WEBPACK_IMPORTED_MODULE_6__);







Object(_common_scripts_render_header__WEBPACK_IMPORTED_MODULE_1__["renderHeader"])();
Object(_render_navigation__WEBPACK_IMPORTED_MODULE_2__["renderNavigation"])();
Object(_render_main__WEBPACK_IMPORTED_MODULE_3__["renderMain"])();
Object(_common_scripts_render_footer__WEBPACK_IMPORTED_MODULE_4__["renderFooter"])();
var body = document.querySelector("body");
btn.addEventListener("click", function () {
  menu.classList.toggle("active");
  backdrop.classList.toggle("active");
  btn.classList.toggle("active");
  btnIcon.classList.toggle("active");
});
backdrop.addEventListener("click", function () {
  menu.classList.remove("active");
  backdrop.classList.remove("active");
  btn.classList.remove("active");
  btnIcon.classList.remove("active");
});
window.addEventListener("scroll", _common_scripts_parallax__WEBPACK_IMPORTED_MODULE_5__["showVisible"]);
Object(_common_scripts_parallax__WEBPACK_IMPORTED_MODULE_5__["showVisible"])();
window.addEventListener("scroll", function () {
  var arrowTop = document.querySelector(".arrowTop");

  if (pageYOffset > 650) {
    arrowTop.classList.remove("activate-of");
    arrowTop.classList.add("activate");
    this.setTimeout(function () {
      arrowTop.classList.remove("activate");
      arrowTop.classList.add("activate-of");
    }, 7000);
  }
});

/***/ }),

/***/ "./src/contact/contact.scss":
/*!**********************************!*\
  !*** ./src/contact/contact.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/contact/render-main.js":
/*!************************************!*\
  !*** ./src/contact/render-main.js ***!
  \************************************/
/*! exports provided: renderMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderMain", function() { return renderMain; });
var renderMain = function renderMain() {
  var body = document.querySelector("body");
  var navigation = document.body.children[1];
  var template = " <main class=\"contact container grid parallax-mobile\">\n  <div class=\"contact__image-block col-6 col-xs-12\"></div>\n  <div class=\"contact__form-block col-6 col-xs-12\">\n    <div class=\"contact__inner\">\n      <h1 class=\"first-title\">GET IN TOUCH</h1>\n      <p class=\"contact__paragraph contact__information\">\n        I'm a paragraph. Click here to add your own text and edit me. I\u2019m a\n        great place for you to tell a story and let your users know a little\n        more about you.\n      </p>\n      <div class=\"contact__text\">\n        Tel: 123-456-7890 | Email: info@mysite.com\n      </div>\n\n      <form action=\"\" class=\"form\">\n        <div class=\"form__group\">\n          <label for=\"name\" class=\"form__label\">Enter Your Name</label>\n          <input\n            placeholder=\"Name\"\n            type=\"text\"\n            class=\"form__input\"\n            id=\"name\"\n            required\n          />\n        </div>\n        <div class=\"form__group\">\n          <label for=\"email\" class=\"form__label\">Enter Your Email</label>\n          <input\n            placeholder=\"Email\"\n            type=\"email\"\n            class=\"form__input\"\n            id=\"email\"\n            required\n          />\n        </div>\n        <div class=\"form__group\">\n          <label for=\"subject \" class=\"form__label\"\n            >Enter Your Subject</label\n          >\n          <input\n            placeholder=\"Subject\"\n            type=\"text\"\n            class=\"form__input\"\n            id=\"subject\"\n            required\n          />\n        </div>\n        <div class=\"form__group form__group--textarea\">\n          <label for=\"message\" class=\"form__label\">\n            Enter Your Message Here</label\n          >\n          <textarea\n            placeholder=\"Message\"\n            class=\"form__input form__input--textarea\"\n            id=\"message\"\n            required\n          ></textarea>\n        </div>\n        <div class=\"form__group form__group--btn\">\n          <input type=\"submit\" class=\"btn btn__form\" value=\"Submit\" />\n        </div>\n      </form>\n      <form action=\"\" class=\"form form-subscribe\">\n        <h2 class=\"form-subscribe__title\">\n          Stay Up-To-Date with New Posts\n        </h2>\n        <div class=\"form__group\">\n          <label for=\"subscribe\" class=\"form__label\"\n            >Enter your email here</label\n          >\n          <input\n            placeholder=\"Email\"\n            type=\"email\"\n            class=\"form__input form__input--subscribe\"\n            id=\"subscribe\"\n            required\n          />\n          <input\n            type=\"submit\"\n            class=\"btn btn__form btn__form--small\"\n            value=\"Subscribe Now\"\n          />\n        </div>\n      </form>\n    </div>\n  </div>\n</main>";
  navigation.insertAdjacentHTML("afterEnd", template);
};



/***/ }),

/***/ "./src/contact/render-navigation.js":
/*!******************************************!*\
  !*** ./src/contact/render-navigation.js ***!
  \******************************************/
/*! exports provided: renderNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderNavigation", function() { return renderNavigation; });
var renderNavigation = function renderNavigation() {
  var body = document.querySelector("body");
  var header = document.body.children[0];
  var template = "<nav class=\"navigation\">\n  <a href=\"#\" id=\"top\"></a>\n<a href=\"#top\" class=\"arrowTop fas fa-chevron-up\"></a>\n  <div class=\"navigation__container\">\n    <a href=\"./home.html\" class=\"navigation__link\">j.alissa</a>\n    <button id=\"btn\" class=\"navigation__menu-toggle\">\n      <span id=\"btnIcon\" class=\"navigation__icon\"></span>\n    </button>\n    <ul id=\"menu\" class=\"navigation__menu menu\">\n      <li class=\"menu__item\">\n        <a href=\"./home.html\" class=\"menu__link\">home</a>\n      </li>\n      <li class=\"menu__item\">\n        <a href=\"./portfolio.html\" class=\"menu__link\">portfolio</a>\n      </li>\n      <li class=\"menu__item\">\n        <a href=\"./about.html\" class=\"menu__link\">about</a>\n      </li>\n      <li class=\"menu__item\">\n        <a href=\"./books.html\" class=\"menu__link\">books</a>\n      </li>\n      <li class=\"menu__item\">\n        <a href=\"#\" class=\"menu__link active\">contact</a>\n      </li>\n    </ul>\n  </div>\n  <button\n    id=\"backdrop\"\n    href=\"#\"\n    class=\"navigation__backdrop\"\n    tabindex=\"-1\"\n  ></button>\n</nav>";
  header.insertAdjacentHTML("afterEnd", template);
};



/***/ }),

/***/ 5:
/*!**************************************!*\
  !*** multi ./src/contact/contact.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/contact/contact.js */"./src/contact/contact.js");


/***/ })

/******/ });
//# sourceMappingURL=contact.js.map