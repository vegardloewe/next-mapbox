"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Map.tsx":
/*!****************************!*\
  !*** ./components/Map.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ \"./node_modules/mapbox-gl/dist/mapbox-gl.js\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().accessToken) = \"pk.eyJ1IjoiZW5lcm5pdGVyZXMiLCJhIjoiY2trMmRlZnM5MGpjaTJvcWY3MGUzOHQ5NCJ9.14FjEC7wQsSRjw3GeOAujA\";\nvar Map = function() {\n    _s();\n    var mapContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var map = new (mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().Map)({\n            container: mapContainerRef.current,\n            style: \"mapbox://styles/mapbox/streets-v11\",\n            center: [\n                25,\n                50\n            ],\n            zoom: 4\n        });\n        return function() {\n            map.remove();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: mapContainerRef,\n        style: {\n            width: \"100%\",\n            height: \"100vh\"\n        }\n    }, void 0, false, {\n        fileName: \"/Users/vegardlowejensen/Documents/Programming/simple-map/components/Map.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(Map, \"JDsoK+vCj+KIdyRFXV6E+3zLK1c=\");\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUFpRDtBQUNoQjs7QUFFakNHLDhEQUFvQixHQUFHRSxnR0FBMkMsQ0FBVztBQUU3RSxJQUFNRyxHQUFHLEdBQUcsV0FBTTs7SUFDaEIsSUFBTUMsZUFBZSxHQUFHUCw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUVwQ0QsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTVMsR0FBRyxHQUFHLElBQUlQLHNEQUFZLENBQUM7WUFDM0JRLFNBQVMsRUFBRUYsZUFBZSxDQUFDRyxPQUFPO1lBQ2xDQyxLQUFLLEVBQUUsb0NBQW9DO1lBQzNDQyxNQUFNLEVBQUU7QUFBQyxrQkFBRTtBQUFFLGtCQUFFO2FBQUM7WUFDaEJDLElBQUksRUFBRSxDQUFDO1NBQ1IsQ0FBQztRQUVGLE9BQU8sV0FBTTtZQUNYTCxHQUFHLENBQUNNLE1BQU0sRUFBRSxDQUFDO1NBQ2QsQ0FBQztLQUNILEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxHQUFHLEVBQUVULGVBQWU7UUFBRUksS0FBSyxFQUFFO1lBQUVNLEtBQUssRUFBRSxNQUFNO1lBQUVDLE1BQU0sRUFBRSxPQUFPO1NBQUU7Ozs7O2FBQVEsQ0FDNUU7Q0FDSDtHQW5CS1osR0FBRztBQUFIQSxLQUFBQSxHQUFHO0FBcUJULCtEQUFlQSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXAudHN4P2VlYmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbWFwYm94Z2wgZnJvbSBcIm1hcGJveC1nbFwiO1xuXG5tYXBib3hnbC5hY2Nlc3NUb2tlbiA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BUEJPWF9BQ0NFU1NfVE9LRU4gYXMgc3RyaW5nO1xuXG5jb25zdCBNYXAgPSAoKSA9PiB7XG4gIGNvbnN0IG1hcENvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG1hcCA9IG5ldyBtYXBib3hnbC5NYXAoe1xuICAgICAgY29udGFpbmVyOiBtYXBDb250YWluZXJSZWYuY3VycmVudCxcbiAgICAgIHN0eWxlOiBcIm1hcGJveDovL3N0eWxlcy9tYXBib3gvc3RyZWV0cy12MTFcIixcbiAgICAgIGNlbnRlcjogWzI1LCA1MF0sXG4gICAgICB6b29tOiA0LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIG1hcC5yZW1vdmUoKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17bWFwQ29udGFpbmVyUmVmfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDB2aFwiIH19PjwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFwO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwibWFwYm94Z2wiLCJhY2Nlc3NUb2tlbiIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19NQVBCT1hfQUNDRVNTX1RPS0VOIiwiTWFwIiwibWFwQ29udGFpbmVyUmVmIiwibWFwIiwiY29udGFpbmVyIiwiY3VycmVudCIsInN0eWxlIiwiY2VudGVyIiwiem9vbSIsInJlbW92ZSIsImRpdiIsInJlZiIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Map.tsx\n"));

/***/ })

});