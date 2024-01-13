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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ \"./node_modules/mapbox-gl/dist/mapbox-gl.js\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_Stores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/Stores */ \"./data/Stores.ts\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().accessToken) = \"pk.eyJ1IjoiZW5lcm5pdGVyZXMiLCJhIjoiY2trMmRlZnM5MGpjaTJvcWY3MGUzOHQ5NCJ9.14FjEC7wQsSRjw3GeOAujA\";\nvar Map = function() {\n    _s();\n    var mapContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var map = new (mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().Map)({\n            container: mapContainerRef.current,\n            style: \"mapbox://styles/mapbox/streets-v11\",\n            center: [\n                0,\n                50\n            ],\n            zoom: 4\n        });\n        map.on(\"load\", function() {\n            // Add a data source containing GeoJSON data.\n            map.addSource(\"stores\", {\n                type: \"geojson\",\n                data: _data_Stores__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n            });\n            // Add a new layer to visualize the polygon.\n            map.addLayer({\n                id: \"stores\",\n                type: \"circle\",\n                source: \"stores\",\n                layout: {},\n                paint: {\n                    \"circle-color\": \"#0080ff\",\n                    \"circle-opacity\": 0.5\n                }\n            });\n            // Add a black outline around the polygon.\n            map.addLayer({\n                id: \"outline\",\n                type: \"line\",\n                source: \"stores\",\n                layout: {},\n                paint: {\n                    \"line-color\": \"#000\",\n                    \"line-width\": 3\n                }\n            });\n        });\n        return function() {\n            map.remove();\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            ref: mapContainerRef,\n            style: {\n                width: \"100%\",\n                height: \"100vh\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/vegardlowejensen/Documents/Programming/simple-map/components/Map.tsx\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/vegardlowejensen/Documents/Programming/simple-map/components/Map.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, _this);\n};\n_s(Map, \"JDsoK+vCj+KIdyRFXV6E+3zLK1c=\");\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBaUQ7QUFDaEI7QUFDQzs7QUFFbENHLDhEQUFvQixHQUFHRyxnR0FBMkMsQ0FBVztBQUU3RSxJQUFNRyxHQUFHLEdBQUcsV0FBTTs7SUFDaEIsSUFBTUMsZUFBZSxHQUFHUiw2Q0FBTSxDQUFDLElBQUksQ0FBQztJQUVwQ0QsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTVUsR0FBRyxHQUFHLElBQUlSLHNEQUFZLENBQUM7WUFDM0JTLFNBQVMsRUFBRUYsZUFBZSxDQUFDRyxPQUFPO1lBQ2xDQyxLQUFLLEVBQUUsb0NBQW9DO1lBQzNDQyxNQUFNLEVBQUU7QUFBQyxpQkFBQztBQUFFLGtCQUFFO2FBQUM7WUFDZkMsSUFBSSxFQUFFLENBQUM7U0FDUixDQUFDO1FBRUZMLEdBQUcsQ0FBQ00sRUFBRSxDQUFDLE1BQU0sRUFBRSxXQUFNO1lBQ25CLDZDQUE2QztZQUM3Q04sR0FBRyxDQUFDTyxTQUFTLENBQUMsUUFBUSxFQUFFO2dCQUN0QkMsSUFBSSxFQUFFLFNBQVM7Z0JBQ2ZmLElBQUksRUFBRUEsb0RBQUk7YUFDWCxDQUFDLENBQUM7WUFFSCw0Q0FBNEM7WUFDNUNPLEdBQUcsQ0FBQ1MsUUFBUSxDQUFDO2dCQUNYQyxFQUFFLEVBQUUsUUFBUTtnQkFDWkYsSUFBSSxFQUFFLFFBQVE7Z0JBQ2RHLE1BQU0sRUFBRSxRQUFRO2dCQUNoQkMsTUFBTSxFQUFFLEVBQUU7Z0JBQ1ZDLEtBQUssRUFBRTtvQkFDTCxjQUFjLEVBQUUsU0FBUztvQkFDekIsZ0JBQWdCLEVBQUUsR0FBRztpQkFDdEI7YUFDRixDQUFDLENBQUM7WUFDSCwwQ0FBMEM7WUFDMUNiLEdBQUcsQ0FBQ1MsUUFBUSxDQUFDO2dCQUNYQyxFQUFFLEVBQUUsU0FBUztnQkFDYkYsSUFBSSxFQUFFLE1BQU07Z0JBQ1pHLE1BQU0sRUFBRSxRQUFRO2dCQUNoQkMsTUFBTSxFQUFFLEVBQUU7Z0JBQ1ZDLEtBQUssRUFBRTtvQkFDTCxZQUFZLEVBQUUsTUFBTTtvQkFDcEIsWUFBWSxFQUFFLENBQUM7aUJBQ2hCO2FBQ0YsQ0FBQyxDQUFDO1NBQ0osQ0FBQyxDQUFDO1FBRUgsT0FBTyxXQUFNO1lBQ1hiLEdBQUcsQ0FBQ2MsTUFBTSxFQUFFLENBQUM7U0FDZCxDQUFDO0tBQ0gsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDQyxLQUFHO2tCQUNGLDRFQUFDQSxLQUFHO1lBQ0ZDLEdBQUcsRUFBRWpCLGVBQWU7WUFDcEJJLEtBQUssRUFBRTtnQkFBRWMsS0FBSyxFQUFFLE1BQU07Z0JBQUVDLE1BQU0sRUFBRSxPQUFPO2FBQUU7Ozs7O2lCQUNwQzs7Ozs7YUFDSCxDQUNOO0NBQ0g7R0F2REtwQixHQUFHO0FBQUhBLEtBQUFBLEdBQUc7QUF5RFQsK0RBQWVBLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01hcC50c3g/ZWViZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBtYXBib3hnbCBmcm9tIFwibWFwYm94LWdsXCI7XG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vZGF0YS9TdG9yZXNcIjtcblxubWFwYm94Z2wuYWNjZXNzVG9rZW4gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NQVBCT1hfQUNDRVNTX1RPS0VOIGFzIHN0cmluZztcblxuY29uc3QgTWFwID0gKCkgPT4ge1xuICBjb25zdCBtYXBDb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICAgIGNvbnRhaW5lcjogbWFwQ29udGFpbmVyUmVmLmN1cnJlbnQsXG4gICAgICBzdHlsZTogXCJtYXBib3g6Ly9zdHlsZXMvbWFwYm94L3N0cmVldHMtdjExXCIsXG4gICAgICBjZW50ZXI6IFswLCA1MF0sXG4gICAgICB6b29tOiA0LFxuICAgIH0pO1xuXG4gICAgbWFwLm9uKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgICAvLyBBZGQgYSBkYXRhIHNvdXJjZSBjb250YWluaW5nIEdlb0pTT04gZGF0YS5cbiAgICAgIG1hcC5hZGRTb3VyY2UoXCJzdG9yZXNcIiwge1xuICAgICAgICB0eXBlOiBcImdlb2pzb25cIixcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBBZGQgYSBuZXcgbGF5ZXIgdG8gdmlzdWFsaXplIHRoZSBwb2x5Z29uLlxuICAgICAgbWFwLmFkZExheWVyKHtcbiAgICAgICAgaWQ6IFwic3RvcmVzXCIsXG4gICAgICAgIHR5cGU6IFwiY2lyY2xlXCIsXG4gICAgICAgIHNvdXJjZTogXCJzdG9yZXNcIiwgLy8gcmVmZXJlbmNlIHRoZSBkYXRhIHNvdXJjZVxuICAgICAgICBsYXlvdXQ6IHt9LFxuICAgICAgICBwYWludDoge1xuICAgICAgICAgIFwiY2lyY2xlLWNvbG9yXCI6IFwiIzAwODBmZlwiLCAvLyBibHVlIGNvbG9yIGZpbGxcbiAgICAgICAgICBcImNpcmNsZS1vcGFjaXR5XCI6IDAuNSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgLy8gQWRkIGEgYmxhY2sgb3V0bGluZSBhcm91bmQgdGhlIHBvbHlnb24uXG4gICAgICBtYXAuYWRkTGF5ZXIoe1xuICAgICAgICBpZDogXCJvdXRsaW5lXCIsXG4gICAgICAgIHR5cGU6IFwibGluZVwiLFxuICAgICAgICBzb3VyY2U6IFwic3RvcmVzXCIsXG4gICAgICAgIGxheW91dDoge30sXG4gICAgICAgIHBhaW50OiB7XG4gICAgICAgICAgXCJsaW5lLWNvbG9yXCI6IFwiIzAwMFwiLFxuICAgICAgICAgIFwibGluZS13aWR0aFwiOiAzLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgbWFwLnJlbW92ZSgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17bWFwQ29udGFpbmVyUmVmfVxuICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDB2aFwiIH19XG4gICAgICA+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJtYXBib3hnbCIsImRhdGEiLCJhY2Nlc3NUb2tlbiIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19NQVBCT1hfQUNDRVNTX1RPS0VOIiwiTWFwIiwibWFwQ29udGFpbmVyUmVmIiwibWFwIiwiY29udGFpbmVyIiwiY3VycmVudCIsInN0eWxlIiwiY2VudGVyIiwiem9vbSIsIm9uIiwiYWRkU291cmNlIiwidHlwZSIsImFkZExheWVyIiwiaWQiLCJzb3VyY2UiLCJsYXlvdXQiLCJwYWludCIsInJlbW92ZSIsImRpdiIsInJlZiIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Map.tsx\n"));

/***/ })

});