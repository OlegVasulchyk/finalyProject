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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/about/about.js":
/*!****************************!*\
  !*** ./src/about/about.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.scss */ "./src/about/about.scss");
/* harmony import */ var _about_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_about_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_scripts_render_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/scripts/render-header */ "./src/common/scripts/render-header.js");
/* harmony import */ var _render_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render-navigation */ "./src/about/render-navigation.js");
/* harmony import */ var _render_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render-main */ "./src/about/render-main.js");
/* harmony import */ var _common_scripts_render_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/scripts/render-footer */ "./src/common/scripts/render-footer.js");
/* harmony import */ var _common_scripts_parallax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/scripts/parallax */ "./src/common/scripts/parallax.js");






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

  if (pageYOffset > 500) {
    arrowTop.classList.remove("activate-of");
    arrowTop.classList.add("activate");
    this.setTimeout(function () {
      arrowTop.classList.remove("activate");
      arrowTop.classList.add("activate-of");
    }, 7000);
  }
});

/***/ }),

/***/ "./src/about/about.scss":
/*!******************************!*\
  !*** ./src/about/about.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/about/render-main.js":
/*!**********************************!*\
  !*** ./src/about/render-main.js ***!
  \**********************************/
/*! exports provided: renderMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderMain", function() { return renderMain; });
var renderMain = function renderMain() {
  var body = document.querySelector("body");
  var navigation = document.body.children[1];
  var template = "<main class=\"about grid container parallax-mobile\">\n  <div class=\"about__image col-6 col-sm-12\"></div>\n  <div class=\"about__description-block col-6 col-sm-12\">\n    <h1 class=\"about__title\">ABOUT JADE</h1>\n    <p class=\"about__paragraph\">\n      I'm a paragraph. Click here to add your own text and edit me. It\u2019s\n      easy. Just click \u201CEdit Text\u201D or double click me to add your own\n      content and make changes to the font. Feel free to drag and drop me\n      anywhere you like on your page.\n    </p>\n    <p class=\"about__paragraph\">\n      This is a great space to write long text about your company and your\n      services. You can use this space to go into a little more detail about\n      your company.\n    </p>\n\n    <h2 class=\"about__title-secondary\">education</h2>\n    <p class=\"about__paragraph\">\n      I'm a paragraph. Click here to add your own text and edit me. It\u2019s\n      easy. Just click \u201CEdit Text\u201D or double click me to add your own\n      content and make changes to the font.\n    </p>\n\n    <h2 class=\"about__title-secondary\">Awards & Nominations:</h2>\n    <p class=\"about__paragraph\">\n      I'm a paragraph. Click here to add your own text and edit me. Let your\n      users get to know you.\n    </p>\n  </div>\n</main>";
  navigation.insertAdjacentHTML("afterEnd", template);
};



/***/ }),

/***/ "./src/about/render-navigation.js":
/*!****************************************!*\
  !*** ./src/about/render-navigation.js ***!
  \****************************************/
/*! exports provided: renderNavigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderNavigation", function() { return renderNavigation; });
var renderNavigation = function renderNavigation() {
  var body = document.querySelector("body");
  var header = document.body.children[0];
  var template = "<nav class=\"navigation\">\n  <a href=\"#\" id=\"top\"></a>\n<a href=\"#top\" class=\"arrowTop fas fa-chevron-up\"></a>\n  <div class=\"navigation__container\">\n    <a href=\"./home.html\" class=\"navigation__link\">j.alissa</a>\n    <button id=\"btn\" class=\"navigation__menu-toggle\">\n      <span id=\"btnIcon\" class=\"navigation__icon\"></span>\n    </button>\n    <ul id=\"menu\" class=\"navigation__menu menu\">\n      <li class=\"menu__item\">\n        <a href=\"./home.html\" class=\"menu__link\">home</a>\n      </li>\n      <li class=\"menu__item\">\n        <a href=\"./portfolio.html\" class=\"menu__link\">portfolio</a>\n      </li>\n      <li class=\"menu__item\">\n        <a href=\"#\" class=\"menu__link active\">about</a>\n      </li>\n      <li class=\"menu__item\">\n        <a href=\"./books.html\" class=\"menu__link\">books</a>\n      </li>\n      <li class=\"menu__item\">\n        <a href=\"./contact.html\" class=\"menu__link\">contact</a>\n      </li>\n    </ul>\n  </div>\n  <button\n    id=\"backdrop\"\n    href=\"#\"\n    class=\"navigation__backdrop\"\n    tabindex=\"-1\"\n  ></button>\n</nav>";
  header.insertAdjacentHTML("afterEnd", template);
};



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

      if (parallax.classList === ".parallax-mobile") {
        continue;
      }

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

/***/ 3:
/*!**********************************!*\
  !*** multi ./src/about/about.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/about/about.js */"./src/about/about.js");


/***/ })

/******/ });
//# sourceMappingURL=about.js.map