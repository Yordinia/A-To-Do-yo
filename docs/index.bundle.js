/* eslint-disable */

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/** *** */ (() => { // webpackBootstrap
/** *** */

  /** *** */ 	const __webpack_modules__ = ({

    /***/ './modules/code-reuse.js':
    /*! *******************************!*\
  !*** ./modules/code-reuse.js ***!
  \****************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listEmpty\": () => (/* binding */ listEmpty),\n/* harmony export */   \"toLocal\": () => (/* binding */ toLocal)\n/* harmony export */ });\nconst listView = document.querySelector('#todo-list');\r\n\r\nfunction toLocal(todoObject) {\r\n  localStorage.setItem('list', JSON.stringify(todoObject.list));\r\n}\r\n\r\nfunction listEmpty() {\r\n  const li = document.createElement('li');\r\n  li.classList.add('navbar-brand');\r\n  li.innerHTML = `<p> \r\n                      <legend> Notes are clear ! </legend> \r\n                    </p>`;\r\n  listView.appendChild(li);\r\n}\n\n//# sourceURL=webpack://webpack/./modules/code-reuse.js?");
      /***/ }),

    /***/ './modules/styling-purpose.js':
    /*! ************************************!*\
  !*** ./modules/styling-purpose.js ***!
  \*********************************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleCheckedList\": () => (/* binding */ toggleCheckedList),\n/* harmony export */   \"toggleClearCompleted\": () => (/* binding */ toggleClearCompleted)\n/* harmony export */ });\nconst input = document.querySelector('#new-item');\nconst clear = document.querySelector('#archive');\n\nconst classOns = ['mouseover', 'focus', 'keyup'];\nconst classOffs = ['mouseout', 'blur'];\n\nlet hover = false;\n\nfunction classOn(e) {\n  input.classList.toggle('on-hover', true);\n  if (e.type === 'mouseover') hover = true;\n}\n\nfunction classOff(e) {\n  if (e.type === 'mouseout') {\n    let flag = false;\n    if (hover === false || e.target.value !== '') flag = true;\n    // if(e.target.value === '' && document.hasFocus(e.target)=== true) flag = true;\n    if (flag) return;\n  }\n  input.classList.toggle('on-hover', false);\n}\n\nfunction hideCursor(e) {\n  e.target.style.cursor = 'none';\n  hover = true;\n}\n\nclassOns.forEach((event) => input.addEventListener(event, classOn));\nclassOffs.forEach((event) => input.addEventListener(event, classOff));\n\ninput.addEventListener('keyup', hideCursor);\n\nfunction toggleClearCompleted(theList) {\n  const complete = theList.checked !== 0;\n  if (complete) { clear.classList.toggle('disabled', false); } else { clear.classList.toggle('disabled', true); }\n}\n\nfunction toggleCheckedList(li, flag) {\n  const trash = li.lastElementChild.lastElementChild;\n  const edit = li.lastElementChild.firstElementChild;\n\n  li.classList.toggle('checked', flag);\n  edit.classList.toggle('setVisibilityHidden', flag);\n  trash.classList.toggle('checked', false);\n}\n\n\n//# sourceURL=webpack://webpack/./modules/styling-purpose.js?");
      /***/ }),

    /***/ './node_modules/css-loader/dist/cjs.js!./src/style.css':
    /*! *************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \************************************************************ */
    /***/ ((module, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n\\r\\n  /* outline: 2px solid rgb(243, 10, 10); */\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n  background-color: rgb(235, 231, 224);\\r\\n  height: 100vh;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.container,\\r\\nh1 {\\r\\n  background-color: #fff;\\r\\n  box-shadow: 0 0 1rem #f3fab5b2;\\r\\n  margin: 2rem;\\r\\n  width: 50vw;\\r\\n  min-width: 34rem;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  position: relative;\\r\\n  bottom: -4rem;\\r\\n}\\r\\n\\r\\ni {\\r\\n  width: 2rem;\\r\\n  margin: 0.2rem;\\r\\n  position: relative;\\r\\n  display: inline-block;\\r\\n}\\r\\n\\r\\n.no-pointer {\\r\\n  cursor: default;\\r\\n}\\r\\n\\r\\nh1.no-pointer {\\r\\n  background-color: #f3fab5b2;\\r\\n  padding: 1rem;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n  padding: 1rem 0;\\r\\n  padding-left: 0.95rem;\\r\\n  margin: 0;\\r\\n  border-radius: 1.5rem;\\r\\n}\\r\\n\\r\\nli {\\r\\n  width: 99%;\\r\\n  background-color: white;\\r\\n}\\r\\n\\r\\n.checked {\\r\\n  text-decoration: line-through;\\r\\n  color: #888;\\r\\n\\r\\n  /* pointer-events: none; */\\r\\n  background-color: var(--bs-btn-disabled-bg);\\r\\n  border-color: var(--bs-btn-disabled-border-color);\\r\\n  opacity: var(--bs-btn-disabled-opacity);\\r\\n}\\r\\n\\r\\n.not-checked {\\r\\n  all: unset;\\r\\n}\\r\\n\\r\\n.to-do-title {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  text-align: left;\\r\\n  border-bottom: 1px solid #ddd;\\r\\n  padding: 0.4rem 0.4rem 0 0;\\r\\n}\\r\\n\\r\\n.grey-text {\\r\\n  color: #8c8c8c;\\r\\n  font-weight: 500;\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  padding: 0 0.3rem;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n#new-item {\\r\\n  border: none;\\r\\n  font-size: 1.5rem;\\r\\n  margin: 0.7rem;\\r\\n  text-align: left;\\r\\n  padding: 0.5rem;\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\n#new-item::placeholder {\\r\\n  color: #8c8c8c;\\r\\n  font-style: italic;\\r\\n  font-size: 1rem;\\r\\n  font-weight: 100;\\r\\n}\\r\\n\\r\\n#new-item:focus::placeholder {\\r\\n  color: transparent;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.on-hover {\\r\\n  outline: 3px solid salmon;\\r\\n  font-style: italic;\\r\\n  font-weight: 200;\\r\\n}\\r\\n\\r\\n#archive {\\r\\n  margin: 1rem;\\r\\n  padding: 0 30%;\\r\\n}\\r\\n\\r\\n#todo-list {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 1rem;\\r\\n  background-color: #f3fab5b2;\\r\\n}\\r\\n\\r\\n.form-check {\\r\\n  margin-left: 0.5rem;\\r\\n  display: flex;\\r\\n  flex: 1;\\r\\n  gap: 1.5rem;\\r\\n  text-align: left;\\r\\n  min-width: 82%;\\r\\n}\\r\\n\\r\\n.form-check-label {\\r\\n  flex: 1;\\r\\n  overflow-x: auto;\\r\\n  max-width: 100%;\\r\\n  transition: 0.3s all linear;\\r\\n}\\r\\n\\r\\n.icons {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.dispaly-none {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.help {\\r\\n  visibility: hidden;\\r\\n  background-color: rgb(255, 243, 226);\\r\\n  color: #11020e;\\r\\n  text-align: center;\\r\\n  border-radius: 6px;\\r\\n  display: block;\\r\\n\\r\\n  /* Position the tooltip */\\r\\n  position: absolute;\\r\\n  z-index: 1;\\r\\n  top: -2rem;\\r\\n  left: 115%;\\r\\n}\\r\\n\\r\\ni:hover .help {\\r\\n  visibility: visible;\\r\\n}\\r\\n\\r\\n.setVisibilityHidden {\\r\\n  visibility: hidden;\\r\\n}\\r\\n\\r\\n.setVisibility {\\r\\n  visibility: visible;\\r\\n}\\r\\n\\r\\n.false-input-container {\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  flex: 1;\\r\\n}\\r\\n\\r\\n#false-input {\\r\\n  position: absolute;\\r\\n  z-index: 1;\\r\\n  top: -1rem;\\r\\n  left: 10%;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  margin-top: auto;\\r\\n  font-size: 1rem;\\r\\n  width: fit-content;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");
      /***/ }),

    /***/ './node_modules/css-loader/dist/runtime/api.js':
    /*! *****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \**************************************************** */
    /***/ ((module) => {
      eval('\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?');
      /***/ }),

    /***/ './node_modules/css-loader/dist/runtime/noSourceMaps.js':
    /*! **************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \************************************************************* */
    /***/ ((module) => {
      eval('\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?');
      /***/ }),

    /***/ './src/style.css':
    /*! ***********************!*\
  !*** ./src/style.css ***!
  \********************** */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?');
      /***/ }),

    /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
    /*! ****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*************************************************************************** */
    /***/ ((module) => {
      eval('\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?');
      /***/ }),

    /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
    /*! ********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \******************************************************************* */
    /***/ ((module) => {
      eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");
      /***/ }),

    /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
    /*! **********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \********************************************************************* */
    /***/ ((module) => {
      eval('\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?');
      /***/ }),

    /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
    /*! **********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \********************************************************************************* */
    /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
      eval('\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?');
      /***/ }),

    /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
    /*! ***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \************************************************************** */
    /***/ ((module) => {
      eval('\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n  var needLayer = typeof obj.layer !== "undefined";\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += "}";\n  }\n  if (obj.media) {\n    css += "}";\n  }\n  if (obj.supports) {\n    css += "}";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === "undefined") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?');
      /***/ }),

    /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
    /*! *********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \******************************************************************** */
    /***/ ((module) => {
      eval('\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?');
      /***/ }),

    /***/ './src/index.js':
    /*! **********************!*\
  !*** ./src/index.js ***!
  \********************* */
    /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_styling_purpose_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/styling-purpose.js */ \"./modules/styling-purpose.js\");\n/* harmony import */ var _modules_code_reuse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/code-reuse.js */ \"./modules/code-reuse.js\");\n/* eslint-disable no-use-before-define */\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst listView = document.querySelector('#todo-list');\r\n\r\nclass MyTodo {\r\n  constructor() {\r\n    this.list = JSON.parse(localStorage.getItem('list')) || [{\r\n      id: 0,\r\n      description: 'Add, Delete and Edit Notes',\r\n      completed: false,\r\n    },\r\n    {\r\n      id: 1,\r\n      description: 'Check and Clrear selected',\r\n      completed: false,\r\n    },\r\n\r\n    ];\r\n    this.checked = this.list.filter(({ completed }) => completed).length;\r\n  }\r\n\r\n  render() {\r\n    (0,_modules_code_reuse_js__WEBPACK_IMPORTED_MODULE_2__.toLocal)(myTodo);\r\n    listView.innerHTML = '';\r\n\r\n    console.log(`Congrats${this}`); // linters told me I need to use this\r\n    // If there's no value in the list\r\n    if (myTodo.list.length === 0) {\r\n      (0,_modules_code_reuse_js__WEBPACK_IMPORTED_MODULE_2__.listEmpty)();\r\n    }\r\n    // Render new todo list based on updated tasks array\r\n    myTodo.list.forEach((noteObj, index) => {\r\n      const li = document.createElement('li');\r\n      li.classList.add('navbar', 'navbar-brand');\r\n      li.setAttribute('data-index', index);\r\n      li.innerHTML = `\r\n    <div class=\"form-check\">\r\n    <input class=\"form-check-input\" type=\"checkbox\" id=\"${index}\" ${\r\n  noteObj.completed ? 'checked' : ''\r\n} data-index=${index}>\r\n    <label class=\"form-check-label\" for=\"${index}\">\r\n     ${noteObj.description}\r\n    </label>\r\n    <input class='form-check-label on-hover dispaly-none' id='edit-input'>\r\n    </div>\r\n    <div class='icons'>\r\n      <i class=\"bi bi-pencil\"><span class=\"help\">edit</span></i>\r\n      <i class=\"bi bi-trash2\"><span class=\"help\">delete</span></i>\r\n    </div>\r\n    `;\r\n      listView.appendChild(li);\r\n      (0,_modules_styling_purpose_js__WEBPACK_IMPORTED_MODULE_1__.toggleCheckedList)(li, noteObj.completed);\r\n    });\r\n  }\r\n}\r\n\r\nconst myTodo = new MyTodo();\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => myTodo.render());\r\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");
      /***/ }),

    /** *** */ 	});
  /** ********************************************************************* */
  /** *** */ 	// The module cache
  /** *** */ 	const __webpack_module_cache__ = {};
  /** *** */
  /** *** */ 	// The require function
  /** *** */ 	function __webpack_require__(moduleId) {
    /** *** */ 		// Check if module is in cache
    /** *** */ 		const cachedModule = __webpack_module_cache__[moduleId];
    /** *** */ 		if (cachedModule !== undefined) {
      /** *** */ 			return cachedModule.exports;
      /** *** */ 		}
    /** *** */ 		// Create a new module (and put it into the cache)
    /** *** */ 		const module = __webpack_module_cache__[moduleId] = {
      /** *** */ 			id: moduleId,
      /** *** */ 			// no module.loaded needed
      /** *** */ 			exports: {},
      /** *** */ 		};
    /** *** */
    /** *** */ 		// Execute the module function
    /** *** */ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    /** *** */
    /** *** */ 		// Return the exports of the module
    /** *** */ 		return module.exports;
    /** *** */ 	}
  /** *** */
  /** ********************************************************************* */
  /** *** */ 	/* webpack/runtime/compat get default export */
  /** *** */ 	(() => {
    /** *** */ 		// getDefaultExport function for compatibility with non-harmony modules
    /** *** */ 		__webpack_require__.n = (module) => {
      /** *** */ 			const getter = module && module.__esModule
      /** *** */ 				? () => (module.default)
      /** *** */ 				: () => (module);
      /** *** */ 			__webpack_require__.d(getter, { a: getter });
      /** *** */ 			return getter;
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/define property getters */
  /** *** */ 	(() => {
    /** *** */ 		// define getter functions for harmony exports
    /** *** */ 		__webpack_require__.d = (exports, definition) => {
      /** *** */ 			for (const key in definition) {
        /** *** */ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /** *** */ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /** *** */ 				}
        /** *** */ 			}
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/hasOwnProperty shorthand */
  /** *** */ 	(() => {
    /** *** */ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/make namespace object */
  /** *** */ 	(() => {
    /** *** */ 		// define __esModule on exports
    /** *** */ 		__webpack_require__.r = (exports) => {
      /** *** */ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /** *** */ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /** *** */ 			}
      /** *** */ 			Object.defineProperty(exports, '__esModule', { value: true });
      /** *** */ 		};
    /** *** */ 	})();
  /** *** */
  /** *** */ 	/* webpack/runtime/nonce */
  /** *** */ 	(() => {
    /** *** */ 		__webpack_require__.nc = undefined;
    /** *** */ 	})();
  /** *** */
  /** ********************************************************************* */
  /** *** */
  /** *** */ 	// startup
  /** *** */ 	// Load entry module and return exports
  /** *** */ 	// This entry module can't be inlined because the eval devtool is used.
  /** *** */ 	const __webpack_exports__ = __webpack_require__('./src/index.js');
/** *** */
/** *** */ })();
