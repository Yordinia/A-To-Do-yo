/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\r\\n  box-sizing: border-box;\\r\\n /* outline: 2px solid rgb(243, 10, 10); */\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n  background-color: rgb(235, 231, 224);\\r\\n  height: 100vh;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.container, h1 {\\r\\n  background-color: #fff;\\r\\n  box-shadow: 0 0 1rem #f3fab5b2;\\r\\n  margin: 2rem;\\r\\n  width: 50vw;\\r\\n  min-width: 34rem;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  position: relative;\\r\\n  bottom: -4rem;\\r\\n}\\r\\n\\r\\ni {\\r\\n  width: 2rem;\\r\\n  margin: 0.2rem;\\r\\n  position: relative;\\r\\n  display: inline-block;\\r\\n}\\r\\n\\r\\n.no-pointer {\\r\\n  cursor: default;\\r\\n}\\r\\n\\r\\nh1.no-pointer {\\r\\n  background-color: #f3fab5b2;\\r\\n  padding: 1rem;\\r\\n\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n  padding: 1rem 0;\\r\\n  padding-left: 0.95rem;\\r\\n  margin: 0;\\r\\n  border-radius: 1.5rem;\\r\\n}\\r\\n\\r\\nli {\\r\\n  width: 99%;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.to-do-title {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  text-align: left;\\r\\n  border-bottom: 1px solid #ddd;\\r\\n  padding: 0.4rem 0.4rem 0 0;\\r\\n}\\r\\n\\r\\n.grey-text {\\r\\n  color: #8c8c8c;\\r\\n  font-weight: 500;\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  padding: 0 0.3rem;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n#new-item {\\r\\n  border: none;\\r\\n  font-size: 1.5rem;\\r\\n  margin: 0.7rem;\\r\\n  text-align: left;\\r\\n  padding: 0.5rem;\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\n#new-item::placeholder {\\r\\n  color: #8c8c8c;\\r\\n  font-style: italic;\\r\\n  font-size: 1rem;\\r\\n  font-weight: 100;\\r\\n}\\r\\n\\r\\n#new-item:focus::placeholder {\\r\\n  color: transparent;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.on-hover {\\r\\n  outline: 3px solid salmon;\\r\\n  font-style: italic;\\r\\n  font-weight: 200;\\r\\n}\\r\\n\\r\\n#archive {\\r\\n  margin: 1rem;\\r\\n  padding: 0rem 30%;\\r\\n}\\r\\n\\r\\n#todo-list {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1rem;\\r\\n  background-color: #f3fab5b2;\\r\\n}\\r\\n\\r\\n.form-check {\\r\\n  margin-left: 0.5rem;\\r\\n  display: flex;\\r\\n  flex: 1;\\r\\n  gap: 1.5rem;\\r\\n  text-align: left;\\r\\n  min-width: 82%;\\r\\n}\\r\\n\\r\\n.form-check-label {\\r\\n  flex: 1;\\r\\n  overflow-x: auto;\\r\\n  max-width: 100%;\\r\\n}\\r\\n\\r\\n#edit-input {\\r\\n  display: none;\\r\\n  width: 85%;\\r\\n}\\r\\n\\r\\n.help {\\r\\n  visibility: hidden;\\r\\n  background-color: rgb(255, 243, 226);\\r\\n  color: #11020e;\\r\\n  text-align: center;\\r\\n  border-radius: 6px;\\r\\n  display: block;\\r\\n  /* Position the tooltip */\\r\\n  position: absolute;\\r\\n  z-index: 1;\\r\\n  top: -2rem;\\r\\n  left: 115%;\\r\\n}\\r\\n\\r\\ni:hover .help {\\r\\n  visibility: visible;\\r\\n}\\r\\n\\r\\n.setVisibilityHidden {\\r\\n  visibility: hidden;\\r\\n}\\r\\n\\r\\n.setVisibility {\\r\\n  visibility: visible;\\r\\n}\\r\\n\\r\\n.false-input-container {\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\n#false-input {\\r\\n  position: absolute;\\r\\n  z-index: 1;\\r\\n  top: -1rem;\\r\\n  left: 10%;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  margin-top: auto;\\r\\n  font-size: 1rem;\\r\\n  width: fit-content;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/code-reuse.js":
/*!***************************!*\
  !*** ./src/code-reuse.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"falseInput\": () => (/* binding */ falseInput),\n/* harmony export */   \"listEmpty\": () => (/* binding */ listEmpty)\n/* harmony export */ });\nconst form = document.querySelector('form');\r\nconst listView = document.querySelector('#todo-list');\r\n\r\nfunction falseInput() {\r\n    const falseInput = form.querySelector('#false-input')\r\n    form.reset()\r\n    falseInput.classList.replace('setVisibilityHidden', 'setVisibility')\r\n    setTimeout(()=>{\r\n      falseInput.classList.replace('setVisibility','setVisibilityHidden')\r\n      }, 2500)\r\n    return false;\r\n}\r\n\r\nfunction listEmpty() {\r\n    const li = document.createElement('li');\r\n    li.classList.add('navbar-brand')\r\n    li.innerHTML = `<p style='textAlign: left; padding-left: 1rem'> \r\n                      <legend> Notes are clear ! </legend> \r\n                    </p>`;\r\n    listView.appendChild(li);\r\n}\n\n//# sourceURL=webpack://webpack/./src/code-reuse.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _styling_purposes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styling-purposes.js */ \"./src/styling-purposes.js\");\n/* harmony import */ var _styling_purposes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styling_purposes_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _code_reuse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code-reuse.js */ \"./src/code-reuse.js\");\n\n\n\n\n\nconst input = document.querySelector('#new-item');\nconst form = document.querySelector('form');\nconst listView = document.querySelector('#todo-list');\n\n\nclass Mytodo {\n\n  constructor() {\n    this.list = JSON.parse(localStorage.getItem('list')) || [];\n  }\n\n  toLocal() {\n    localStorage.setItem('list', JSON.stringify(myTodo.list));\n  }\n\n  setEventListener( list, theFunction) {\n    for(let i=0; i<list.length; i++){\n      list[i].addEventListener('click', theFunction)\n    }\n  }\n\n  addTodo(e) {\n    // console.log('input -', input, input.value, input.value.trim())\n    e.preventDefault();\n    let inputNote = input.value.trim();\n    if(inputNote==false) return (0,_code_reuse_js__WEBPACK_IMPORTED_MODULE_2__.falseInput)();\n    const obj = new List(inputNote);\n    myTodo.list.push(obj);\n    form.reset();\n    console.log('Last added object', myTodo.list[myTodo.list.length-1])\n    myTodo.render();\n  }\n\n  render() {\n    myTodo.toLocal();\n    listView.innerHTML = '';\n\n    // If there's no value in the list\n    if(myTodo.list.length === 0) (0,_code_reuse_js__WEBPACK_IMPORTED_MODULE_2__.listEmpty)();\n\n     // Render new todo list based on updated tasks array\n    myTodo.list.forEach((noteObj,index) => {\n    const li = document.createElement('li');\n    li.classList.add('navbar','navbar-brand')\n    li.setAttribute('data-index',index);\n    li.innerHTML = `\n    <div class=\"form-check\">\n    <input class=\"form-check-input\" type=\"checkbox\" id=\"${index}\" ${\n        noteObj.completed ? 'checked' : ''\n      } data-index=\"${index}\">\n    <label class=\"form-check-label\" for=\"${index}\">\n     ${noteObj.description}\n    </label>\n    <input class=\"form-check-label\" id=\"edit-input\"/>\n    </div>\n    <div>\n      <i class=\"bi bi-pencil\"><span class=\"help\">edit</span></i>\n      <i class=\"bi bi-trash2\"><span class=\"help\">delete</span></i>\n    </div>\n    `;\n    li.classList.toggle('completed', noteObj.completed);\n    listView.appendChild(li);\n  });\n\n  const editList = document.querySelectorAll('i.bi.bi-pencil')\n  const trashList = document.querySelectorAll('i.bi.bi-trash2')\n  const enter = document.querySelectorAll('i.bi.bi-arrow-90deg-left')\n  const refresh = document.querySelectorAll('i.bi.bi-arrow-clockwise')\n  const clear = document.querySelectorAll('#archive')\n\n// set event listener on elements after creating them\n\nmyTodo.setEventListener( trashList, myTodo.removeTodo)\nmyTodo.setEventListener( editList, myTodo.editDescription)\nmyTodo.setEventListener( enter, myTodo.addTodo)\nmyTodo.setEventListener( refresh, myTodo.refreshPage)\nmyTodo.setEventListener( clear, myTodo.clearCompleted)\n\n  form.addEventListener('submit', myTodo.addTodo);\n  }\n  \n  removeTodo(e) {\n    const li = e.target.closest('li');\n    const listIndex = li.dataSet.index;\n    myTodo.list.splice(listIndex,1);\n    myTodo.render();\n  }\n\n  refreshPage(e){\n    location.reload();\n    //console.log(e.type, 'ed refresh right now ', e.target);\n  }\n\n  editDescription(e){\n    // activate edit\n\n    const li = e.target.closest('li');\n    const editLable = li.querySelector('.form-check-label')\n    const editInput = li.querySelector('#edit-input')\n\n    editable.setAttribute('contentEditable', true);\n    editLable.style.display = 'none'\n    editable.style.display = 'inline-block'\n    editable\n    console.log(editable, editLable)\n    //const newDescription;\n   // console.log(li,index)\n    //myTodo.list = [];\n\n  }\n\n  \n\n  clearCompleted(e){\n    //console.log(e.type, 'ed clear right now ', e.target);\n    window.loead\n  }\n}\n\nclass List {\n  constructor(description) {\n    this.id = myTodo.list.length;\n    this.description = description;\n    this.completed = false;\n  }\n}\n\nconst myTodo = new Mytodo();\n\nwindow.onload = function(){\nconsole.log(myTodo.list)\nmyTodo.render();\n}\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/styling-purposes.js":
/*!*********************************!*\
  !*** ./src/styling-purposes.js ***!
  \*********************************/
/***/ (() => {

eval("const input = document.querySelector('#new-item')\r\nconst form = document.querySelector('form')\r\nconst classOns = ['mouseover','focus', 'keyup'];\r\nconst classOffs = ['mouseout','blur'];\r\n\r\nvar hover = false;\r\n\r\nfunction classOn(e){\r\n   input.classList.toggle('on-hover', true)\r\n   if(e.type==='mouseover') hover= true;\r\n}\r\n\r\nfunction classOff(e){\r\n    if(e.type === 'mouseout'){\r\n        let flag = false;\r\n       if(hover===false || e.target.value !== '') flag = true;\r\n    // if(e.target.value === '' && document.hasFocus(e.target)=== true) flag = true;\r\n       if(flag) return\r\n    }\r\n    input.classList.toggle('on-hover', false);\r\n}\r\n\r\nfunction hideCursor(e){\r\n    e.target.style.cursor = 'none';\r\n    hover = true;\r\n}\r\n\r\nclassOns.forEach(event =>\r\n    input.addEventListener(event, classOn))\r\nclassOffs.forEach( event => \r\n    input.addEventListener(event, classOff))\r\n    \r\ninput.addEventListener('keyup', hideCursor);\n\n//# sourceURL=webpack://webpack/./src/styling-purposes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;