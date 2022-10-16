(self["webpackChunkprodigma_frontend"] = self["webpackChunkprodigma_frontend"] || []).push([[0],[
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Images_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var Images_google_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var Images_facebook_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var Theme_base_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _templates_components_web_component_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _templates_components_tab_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);






new _templates_components_web_component_index__WEBPACK_IMPORTED_MODULE_4__["default"]();
new _templates_components_tab_index__WEBPACK_IMPORTED_MODULE_5__["default"]();

/***/ }),
/* 1 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo.svg";

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/google-icon.svg";

/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/facebook-icon.svg";

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WebComponents)
/* harmony export */ });
class WebComponents {
  constructor() {
    this.initFunction();
  }
  initFunction() {
    return console.log('Web Component Enter Success');
  }
}
;

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tabs = __webpack_require__(8);
var container = document.querySelector('.tab-container');
const membershipIndividualSelect = document.querySelector('#js-individual-membership');
const membershipCorporateSelect = document.querySelector('#js-corporate-membership');
const wrap = document.querySelectorAll('.input-step-selection');
class LoginTabs {
  constructor() {
    _defineProperty(this, "changeLoginTabContent", e => {
      if (e.target.getAttribute('data-tab') == 'click-individual') {
        e.target.checked = true;
        membershipCorporateSelect.checked = false;
        e.target.parentElement.classList.add('active');
        e.target.parentElement.nextSibling.classList.remove('active');
      } else if (e.target.getAttribute('data-tab') == 'click-corporate') {
        membershipIndividualSelect.checked = false;
        e.target.checked = true;
        e.target.parentElement.classList.add('active');
        e.target.parentElement.previousSibling.classList.remove('active');
      }
    });
    _defineProperty(this, "loginStepSelectionWrap", () => {
      wrap.forEach(item => {
        //if(membershipCorporateSelect)
        //if(!item.classList.contains('active')){
        //item.classList.add('hidden');
        //}
      });
    });
    this.init();
  }
  init() {
    if (container) {
      tabs(container);
      membershipIndividualSelect === null || membershipIndividualSelect === void 0 ? void 0 : membershipIndividualSelect.addEventListener('click', this.changeLoginTabContent);
      membershipCorporateSelect === null || membershipCorporateSelect === void 0 ? void 0 : membershipCorporateSelect.addEventListener('click', this.changeLoginTabContent);
    }
    this.loginStepSelectionWrap();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginTabs);

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 8 */
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;! function(name, definition) {
  if ( true && module.exports) module.exports = definition();
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  else {}
}('tabs', function() {

  return function tabs(container) {
    var tabs = container.querySelectorAll('.tab');
    var panes = container.querySelectorAll('.tab-pane');

    each(tabs, function(i, tab) {
      tab.addEventListener('click', function(e) {
        activate(tabs, i);
        activate(panes, i);
      });
    })

    function activate(tabs, index) {
      each(tabs, function(i, tab) {
        if (i != index) {
          removeClass(tab, 'active')
        } else {
          addClass(tab, 'active')
        }
      });
    }
  }

  function each(elements, fn) {
    for (var i = elements.length - 1; i >= 0; i--) {
      fn(i, elements[i]);
    }
  }

  function hasClass(el, cls) {
    return el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  }

  function addClass(el, cls) {
    if (!hasClass(el, cls)) {
      el.className += " " + cls;
    }
  }

  function removeClass(el, cls) {
    if (hasClass(el, cls)) {
      var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
      el.className = el.className.replace(reg, '');
    }
  }
});

/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(0));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEI7QUFDbEMsV0FBVyxJQUEyQixFQUFFLG9DQUFPLFVBQVU7QUFBQTtBQUFBO0FBQUE7QUFBQSxrR0FBQztBQUMxRCxPQUFPLEVBQTBCO0FBQ2pDLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kaWdtYS1mcm9udGVuZC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vcHJvZGlnbWEtZnJvbnRlbmQvLi9zcmMvYXNzZXRzL3Njc3MvYmFzZS5zY3NzPzJmOWEiLCJ3ZWJwYWNrOi8vcHJvZGlnbWEtZnJvbnRlbmQvLi9zcmMvdGVtcGxhdGVzL2NvbXBvbmVudHMvd2ViLWNvbXBvbmVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9kaWdtYS1mcm9udGVuZC8uL3NyYy90ZW1wbGF0ZXMvY29tcG9uZW50cy90YWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvZGlnbWEtZnJvbnRlbmQvLi9zcmMvdGVtcGxhdGVzL2NvbXBvbmVudHMvdGFiL2luZGV4LnNjc3M/NjdjNiIsIndlYnBhY2s6Ly9wcm9kaWdtYS1mcm9udGVuZC8uL25vZGVfbW9kdWxlcy90YWJzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnSW1hZ2VzL2xvZ28uc3ZnJztcbmltcG9ydCAnSW1hZ2VzL2dvb2dsZS1pY29uLnN2Zyc7XG5pbXBvcnQgJ0ltYWdlcy9mYWNlYm9vay1pY29uLnN2Zyc7XG5cbmltcG9ydCAnVGhlbWUvYmFzZS5zY3NzJztcblxuaW1wb3J0IFdlYkNvbXBvbmVudHMgZnJvbSAnLi90ZW1wbGF0ZXMvY29tcG9uZW50cy93ZWItY29tcG9uZW50L2luZGV4JztcbmltcG9ydCBMb2dpblRhYnMgZnJvbSAnLi90ZW1wbGF0ZXMvY29tcG9uZW50cy90YWIvaW5kZXgnO1xuXG5uZXcgV2ViQ29tcG9uZW50cygpO1xubmV3IExvZ2luVGFicygpOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlYkNvbXBvbmVudHMge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuaW5pdEZ1bmN0aW9uKCk7XG4gICAgfVxuXG4gICAgaW5pdEZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZygnV2ViIENvbXBvbmVudCBFbnRlciBTdWNjZXNzJyk7XG4gICAgfVxuICAgIFxufTsiLCJpbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbnZhciB0YWJzID0gcmVxdWlyZSgndGFicycpO1xudmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWItY29udGFpbmVyJyk7XG5cbmNvbnN0IG1lbWJlcnNoaXBJbmRpdmlkdWFsU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzLWluZGl2aWR1YWwtbWVtYmVyc2hpcCcpO1xuY29uc3QgbWVtYmVyc2hpcENvcnBvcmF0ZVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqcy1jb3Jwb3JhdGUtbWVtYmVyc2hpcCcpO1xuY29uc3Qgd3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1zdGVwLXNlbGVjdGlvbicpO1xuXG5jbGFzcyBMb2dpblRhYnMge1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpe1xuICAgICAgICBpZihjb250YWluZXIpe1xuICAgICAgICAgICAgdGFicyhjb250YWluZXIpO1xuICAgICAgICAgICAgbWVtYmVyc2hpcEluZGl2aWR1YWxTZWxlY3Q/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VMb2dpblRhYkNvbnRlbnQpO1xuICAgICAgICAgICAgbWVtYmVyc2hpcENvcnBvcmF0ZVNlbGVjdD8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZUxvZ2luVGFiQ29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvZ2luU3RlcFNlbGVjdGlvbldyYXAoKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VMb2dpblRhYkNvbnRlbnQgPSAoZSkgPT4ge1xuICAgICAgICBpZihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFiJykgPT0gJ2NsaWNrLWluZGl2aWR1YWwnKXtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgbWVtYmVyc2hpcENvcnBvcmF0ZVNlbGVjdC5jaGVja2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50Lm5leHRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gICAgICAgIH1lbHNlIGlmKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS10YWInKSA9PSAnY2xpY2stY29ycG9yYXRlJyl7XG4gICAgICAgICAgICBtZW1iZXJzaGlwSW5kaXZpZHVhbFNlbGVjdC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBlLnRhcmdldC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucHJldmlvdXNTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9naW5TdGVwU2VsZWN0aW9uV3JhcCA9ICgpID0+IHtcbiAgICAgICAgd3JhcC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAvL2lmKG1lbWJlcnNoaXBDb3Jwb3JhdGVTZWxlY3QpXG4gICAgICAgICAgICAvL2lmKCFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xuICAgICAgICAgICAgICAgIC8vaXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIC8vfVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5UYWJzOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIiEgZnVuY3Rpb24obmFtZSwgZGVmaW5pdGlvbikge1xuICBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKCk7XG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJykgZGVmaW5lKGRlZmluaXRpb24pO1xuICBlbHNlIHRoaXNbbmFtZV0gPSBkZWZpbml0aW9uKCk7XG59KCd0YWJzJywgZnVuY3Rpb24oKSB7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHRhYnMoY29udGFpbmVyKSB7XG4gICAgdmFyIHRhYnMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuICAgIHZhciBwYW5lcyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcudGFiLXBhbmUnKTtcblxuICAgIGVhY2godGFicywgZnVuY3Rpb24oaSwgdGFiKSB7XG4gICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGFjdGl2YXRlKHRhYnMsIGkpO1xuICAgICAgICBhY3RpdmF0ZShwYW5lcywgaSk7XG4gICAgICB9KTtcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gYWN0aXZhdGUodGFicywgaW5kZXgpIHtcbiAgICAgIGVhY2godGFicywgZnVuY3Rpb24oaSwgdGFiKSB7XG4gICAgICAgIGlmIChpICE9IGluZGV4KSB7XG4gICAgICAgICAgcmVtb3ZlQ2xhc3ModGFiLCAnYWN0aXZlJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhZGRDbGFzcyh0YWIsICdhY3RpdmUnKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlYWNoKGVsZW1lbnRzLCBmbikge1xuICAgIGZvciAodmFyIGkgPSBlbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgZm4oaSwgZWxlbWVudHNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjbHMpIHtcbiAgICByZXR1cm4gZWwuY2xhc3NOYW1lLm1hdGNoKG5ldyBSZWdFeHAoJyhcXFxcc3xeKScgKyBjbHMgKyAnKFxcXFxzfCQpJykpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3MoZWwsIGNscykge1xuICAgIGlmICghaGFzQ2xhc3MoZWwsIGNscykpIHtcbiAgICAgIGVsLmNsYXNzTmFtZSArPSBcIiBcIiArIGNscztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbCwgY2xzKSB7XG4gICAgaWYgKGhhc0NsYXNzKGVsLCBjbHMpKSB7XG4gICAgICB2YXIgcmVnID0gbmV3IFJlZ0V4cCgnKFxcXFxzfF4pJyArIGNscyArICcoXFxcXHN8JCknKTtcbiAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKHJlZywgJycpO1xuICAgIH1cbiAgfVxufSk7Il0sIm5hbWVzIjpbIldlYkNvbXBvbmVudHMiLCJMb2dpblRhYnMiLCJjb25zdHJ1Y3RvciIsImluaXRGdW5jdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ0YWJzIiwicmVxdWlyZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm1lbWJlcnNoaXBJbmRpdmlkdWFsU2VsZWN0IiwibWVtYmVyc2hpcENvcnBvcmF0ZVNlbGVjdCIsIndyYXAiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZSIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImNoZWNrZWQiLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibmV4dFNpYmxpbmciLCJyZW1vdmUiLCJwcmV2aW91c1NpYmxpbmciLCJmb3JFYWNoIiwiaXRlbSIsImluaXQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hhbmdlTG9naW5UYWJDb250ZW50IiwibG9naW5TdGVwU2VsZWN0aW9uV3JhcCJdLCJzb3VyY2VSb290IjoiIn0=