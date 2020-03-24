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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $forEach = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").forEach;\nvar sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ \"./node_modules/core-js/internals/sloppy-array-method.js\");\n\n// `Array.prototype.forEach` method implementation\n// https://tc39.github.io/ecma262/#sec-array.prototype.foreach\nmodule.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {\n  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n} : [].forEach;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bind = __webpack_require__(/*! ../internals/bind-context */ \"./node_modules/core-js/internals/bind-context.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js/internals/array-species-create.js\");\n\nvar push = [].push;\n\n// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation\nvar createMethod = function (TYPE) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  return function ($this, callbackfn, that, specificCreate) {\n    var O = toObject($this);\n    var self = IndexedObject(O);\n    var boundFunction = bind(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var create = specificCreate || arraySpeciesCreate;\n    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;\n    var value, result;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      value = self[index];\n      result = boundFunction(value, index, O);\n      if (TYPE) {\n        if (IS_MAP) target[index] = result; // map\n        else if (result) switch (TYPE) {\n          case 3: return true;              // some\n          case 5: return value;             // find\n          case 6: return index;             // findIndex\n          case 2: push.call(target, value); // filter\n        } else if (IS_EVERY) return false;  // every\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.forEach` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach\n  forEach: createMethod(0),\n  // `Array.prototype.map` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.map\n  map: createMethod(1),\n  // `Array.prototype.filter` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.filter\n  filter: createMethod(2),\n  // `Array.prototype.some` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.some\n  some: createMethod(3),\n  // `Array.prototype.every` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.every\n  every: createMethod(4),\n  // `Array.prototype.find` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.find\n  find: createMethod(5),\n  // `Array.prototype.findIndex` method\n  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex\n  findIndex: createMethod(6)\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `ArraySpeciesCreate` abstract operation\n// https://tc39.github.io/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray, length) {\n  var C;\n  if (isArray(originalArray)) {\n    C = originalArray.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js/internals/a-function.js\");\n\n// optional / simple context binding\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 0: return function () {\n      return fn.call(that);\n    };\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/bind-context.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !fails(function () {\n  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// iterable DOM collections\n// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods\nmodule.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/dom-iterables.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/fails.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var O = 'object';\nvar check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line no-undef\n  check(typeof globalThis == O && globalThis) ||\n  check(typeof window == O && window) ||\n  check(typeof self == O && self) ||\n  check(typeof global == O && global) ||\n  // eslint-disable-next-line no-new-func\n  Function('return this')();\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/hide.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/hide.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/hide.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\n// `IsArray` abstract operation\n// https://tc39.github.io/ecma262/#sec-isarray\nmodule.exports = Array.isArray || function isArray(arg) {\n  return classof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = false;\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  // Chrome 38 Symbol has incorrect toString conversion\n  // eslint-disable-next-line no-undef\n  return !String(Symbol());\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/native-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\n\nvar nativeDefineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.github.io/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return nativeDefineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.github.io/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js/internals/hide.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    hide(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/set-global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.1.3',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/shared.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/sloppy-array-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/sloppy-array-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !method || !fails(function () {\n    // eslint-disable-next-line no-useless-call,no-throw-literal\n    method.call(null, argument || function () { throw 1; }, 1);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/sloppy-array-method.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.github.io/ecma262/#sec-tointeger\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.github.io/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\n// `ToObject` abstract operation\n// https://tc39.github.io/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.github.io/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\n\nvar Symbol = global.Symbol;\nvar store = shared('wks');\n\nmodule.exports = function (name) {\n  return store[name] || (store[name] = NATIVE_SYMBOL && Symbol[name]\n    || (NATIVE_SYMBOL ? Symbol : uid)('Symbol.' + name));\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/core-js/internals/dom-iterables.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"./node_modules/core-js/internals/array-for-each.js\");\nvar hide = __webpack_require__(/*! ../internals/hide */ \"./node_modules/core-js/internals/hide.js\");\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n  // some Chrome versions have non-configurable methods on DOMTokenList\n  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {\n    hide(CollectionPrototype, 'forEach', forEach);\n  } catch (error) {\n    CollectionPrototype.forEach = forEach;\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/core-js/modules/web.dom-collections.for-each.js?");

/***/ }),

/***/ "./node_modules/countup.js/dist/countUp.min.js":
/*!*****************************************************!*\
  !*** ./node_modules/countup.js/dist/countUp.min.js ***!
  \*****************************************************/
/*! exports provided: CountUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CountUp\", function() { return CountUp; });\nvar __assign=undefined&&undefined.__assign||function(){return(__assign=Object.assign||function(t){for(var i,a=1,s=arguments.length;a<s;a++)for(var n in i=arguments[a])Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);return t}).apply(this,arguments)},CountUp=function(){function t(t,i,a){var s=this;this.target=t,this.endVal=i,this.options=a,this.version=\"2.0.4\",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:\",\",decimal:\".\",prefix:\"\",suffix:\"\"},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error=\"\",this.startVal=0,this.paused=!0,this.count=function(t){s.startTime||(s.startTime=t);var i=t-s.startTime;s.remaining=s.duration-i,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(i,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(i,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(i/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(i/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Math.round(s.frameVal*s.decimalMult)/s.decimalMult,s.printValue(s.frameVal),i<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.callback&&s.callback()},this.formatNumber=function(t){var i,a,n,e,r,o=t<0?\"-\":\"\";if(i=Math.abs(t).toFixed(s.options.decimalPlaces),n=(a=(i+=\"\").split(\".\"))[0],e=a.length>1?s.options.decimal+a[1]:\"\",s.options.useGrouping){r=\"\";for(var l=0,h=n.length;l<h;++l)0!==l&&l%3==0&&(r=s.options.separator+r),r=n[h-l-1]+r;n=r}return s.options.numerals&&s.options.numerals.length&&(n=n.replace(/[0-9]/g,function(t){return s.options.numerals[+t]}),e=e.replace(/[0-9]/g,function(t){return s.options.numerals[+t]})),o+s.options.prefix+n+e+s.options.suffix},this.easeOutExpo=function(t,i,a,s){return a*(1-Math.pow(2,-10*t/s))*1024/1023+i},this.options=__assign({},this.defaults,a),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.decimalMult=Math.pow(10,this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,\"\"===this.options.separator&&(this.options.useGrouping=!1),this.el=\"string\"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error=\"[CountUp] target is null or undefined\"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold){this.finalEndVal=t;var a=this.countDown?1:-1;this.endVal=t+a*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var i=this.formattingFn(t);\"INPUT\"===this.el.tagName?this.el.value=i:\"text\"===this.el.tagName||\"tspan\"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i},t.prototype.ensureNumber=function(t){return\"number\"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error=\"[CountUp] invalid start or end value: \"+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}();\n\n//# sourceURL=webpack:///./node_modules/countup.js/dist/countUp.min.js?");

/***/ }),

/***/ "./node_modules/particles.js/particles.js":
/*!************************************************!*\
  !*** ./node_modules/particles.js/particles.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* -----------------------------------------------\n/* Author : Vincent Garreau  - vincentgarreau.com\n/* MIT license: http://opensource.org/licenses/MIT\n/* Demo / Generator : vincentgarreau.com/particles.js\n/* GitHub : github.com/VincentGarreau/particles.js\n/* How to use? : Check the GitHub README\n/* v2.0.0\n/* ----------------------------------------------- */\n\nvar pJS = function(tag_id, params){\n\n  var canvas_el = document.querySelector('#'+tag_id+' > .particles-js-canvas-el');\n\n  /* particles.js variables with default values */\n  this.pJS = {\n    canvas: {\n      el: canvas_el,\n      w: canvas_el.offsetWidth,\n      h: canvas_el.offsetHeight\n    },\n    particles: {\n      number: {\n        value: 400,\n        density: {\n          enable: true,\n          value_area: 800\n        }\n      },\n      color: {\n        value: '#fff'\n      },\n      shape: {\n        type: 'circle',\n        stroke: {\n          width: 0,\n          color: '#ff0000'\n        },\n        polygon: {\n          nb_sides: 5\n        },\n        image: {\n          src: '',\n          width: 100,\n          height: 100\n        }\n      },\n      opacity: {\n        value: 1,\n        random: false,\n        anim: {\n          enable: false,\n          speed: 2,\n          opacity_min: 0,\n          sync: false\n        }\n      },\n      size: {\n        value: 20,\n        random: false,\n        anim: {\n          enable: false,\n          speed: 20,\n          size_min: 0,\n          sync: false\n        }\n      },\n      line_linked: {\n        enable: true,\n        distance: 100,\n        color: '#fff',\n        opacity: 1,\n        width: 1\n      },\n      move: {\n        enable: true,\n        speed: 2,\n        direction: 'none',\n        random: false,\n        straight: false,\n        out_mode: 'out',\n        bounce: false,\n        attract: {\n          enable: false,\n          rotateX: 3000,\n          rotateY: 3000\n        }\n      },\n      array: []\n    },\n    interactivity: {\n      detect_on: 'canvas',\n      events: {\n        onhover: {\n          enable: true,\n          mode: 'grab'\n        },\n        onclick: {\n          enable: true,\n          mode: 'push'\n        },\n        resize: true\n      },\n      modes: {\n        grab:{\n          distance: 100,\n          line_linked:{\n            opacity: 1\n          }\n        },\n        bubble:{\n          distance: 200,\n          size: 80,\n          duration: 0.4\n        },\n        repulse:{\n          distance: 200,\n          duration: 0.4\n        },\n        push:{\n          particles_nb: 4\n        },\n        remove:{\n          particles_nb: 2\n        }\n      },\n      mouse:{}\n    },\n    retina_detect: false,\n    fn: {\n      interact: {},\n      modes: {},\n      vendors:{}\n    },\n    tmp: {}\n  };\n\n  var pJS = this.pJS;\n\n  /* params settings */\n  if(params){\n    Object.deepExtend(pJS, params);\n  }\n\n  pJS.tmp.obj = {\n    size_value: pJS.particles.size.value,\n    size_anim_speed: pJS.particles.size.anim.speed,\n    move_speed: pJS.particles.move.speed,\n    line_linked_distance: pJS.particles.line_linked.distance,\n    line_linked_width: pJS.particles.line_linked.width,\n    mode_grab_distance: pJS.interactivity.modes.grab.distance,\n    mode_bubble_distance: pJS.interactivity.modes.bubble.distance,\n    mode_bubble_size: pJS.interactivity.modes.bubble.size,\n    mode_repulse_distance: pJS.interactivity.modes.repulse.distance\n  };\n\n\n  pJS.fn.retinaInit = function(){\n\n    if(pJS.retina_detect && window.devicePixelRatio > 1){\n      pJS.canvas.pxratio = window.devicePixelRatio; \n      pJS.tmp.retina = true;\n    } \n    else{\n      pJS.canvas.pxratio = 1;\n      pJS.tmp.retina = false;\n    }\n\n    pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;\n    pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;\n\n    pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;\n    pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;\n    pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;\n    pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;\n    pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;\n    pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;\n    pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;\n    pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;\n    pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;\n\n  };\n\n\n\n  /* ---------- pJS functions - canvas ------------ */\n\n  pJS.fn.canvasInit = function(){\n    pJS.canvas.ctx = pJS.canvas.el.getContext('2d');\n  };\n\n  pJS.fn.canvasSize = function(){\n\n    pJS.canvas.el.width = pJS.canvas.w;\n    pJS.canvas.el.height = pJS.canvas.h;\n\n    if(pJS && pJS.interactivity.events.resize){\n\n      window.addEventListener('resize', function(){\n\n          pJS.canvas.w = pJS.canvas.el.offsetWidth;\n          pJS.canvas.h = pJS.canvas.el.offsetHeight;\n\n          /* resize canvas */\n          if(pJS.tmp.retina){\n            pJS.canvas.w *= pJS.canvas.pxratio;\n            pJS.canvas.h *= pJS.canvas.pxratio;\n          }\n\n          pJS.canvas.el.width = pJS.canvas.w;\n          pJS.canvas.el.height = pJS.canvas.h;\n\n          /* repaint canvas on anim disabled */\n          if(!pJS.particles.move.enable){\n            pJS.fn.particlesEmpty();\n            pJS.fn.particlesCreate();\n            pJS.fn.particlesDraw();\n            pJS.fn.vendors.densityAutoParticles();\n          }\n\n        /* density particles enabled */\n        pJS.fn.vendors.densityAutoParticles();\n\n      });\n\n    }\n\n  };\n\n\n  pJS.fn.canvasPaint = function(){\n    pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);\n  };\n\n  pJS.fn.canvasClear = function(){\n    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);\n  };\n\n\n  /* --------- pJS functions - particles ----------- */\n\n  pJS.fn.particle = function(color, opacity, position){\n\n    /* size */\n    this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;\n    if(pJS.particles.size.anim.enable){\n      this.size_status = false;\n      this.vs = pJS.particles.size.anim.speed / 100;\n      if(!pJS.particles.size.anim.sync){\n        this.vs = this.vs * Math.random();\n      }\n    }\n\n    /* position */\n    this.x = position ? position.x : Math.random() * pJS.canvas.w;\n    this.y = position ? position.y : Math.random() * pJS.canvas.h;\n\n    /* check position  - into the canvas */\n    if(this.x > pJS.canvas.w - this.radius*2) this.x = this.x - this.radius;\n    else if(this.x < this.radius*2) this.x = this.x + this.radius;\n    if(this.y > pJS.canvas.h - this.radius*2) this.y = this.y - this.radius;\n    else if(this.y < this.radius*2) this.y = this.y + this.radius;\n\n    /* check position - avoid overlap */\n    if(pJS.particles.move.bounce){\n      pJS.fn.vendors.checkOverlap(this, position);\n    }\n\n    /* color */\n    this.color = {};\n    if(typeof(color.value) == 'object'){\n\n      if(color.value instanceof Array){\n        var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];\n        this.color.rgb = hexToRgb(color_selected);\n      }else{\n        if(color.value.r != undefined && color.value.g != undefined && color.value.b != undefined){\n          this.color.rgb = {\n            r: color.value.r,\n            g: color.value.g,\n            b: color.value.b\n          }\n        }\n        if(color.value.h != undefined && color.value.s != undefined && color.value.l != undefined){\n          this.color.hsl = {\n            h: color.value.h,\n            s: color.value.s,\n            l: color.value.l\n          }\n        }\n      }\n\n    }\n    else if(color.value == 'random'){\n      this.color.rgb = {\n        r: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),\n        g: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),\n        b: (Math.floor(Math.random() * (255 - 0 + 1)) + 0)\n      }\n    }\n    else if(typeof(color.value) == 'string'){\n      this.color = color;\n      this.color.rgb = hexToRgb(this.color.value);\n    }\n\n    /* opacity */\n    this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;\n    if(pJS.particles.opacity.anim.enable){\n      this.opacity_status = false;\n      this.vo = pJS.particles.opacity.anim.speed / 100;\n      if(!pJS.particles.opacity.anim.sync){\n        this.vo = this.vo * Math.random();\n      }\n    }\n\n    /* animation - velocity for speed */\n    var velbase = {}\n    switch(pJS.particles.move.direction){\n      case 'top':\n        velbase = { x:0, y:-1 };\n      break;\n      case 'top-right':\n        velbase = { x:0.5, y:-0.5 };\n      break;\n      case 'right':\n        velbase = { x:1, y:-0 };\n      break;\n      case 'bottom-right':\n        velbase = { x:0.5, y:0.5 };\n      break;\n      case 'bottom':\n        velbase = { x:0, y:1 };\n      break;\n      case 'bottom-left':\n        velbase = { x:-0.5, y:1 };\n      break;\n      case 'left':\n        velbase = { x:-1, y:0 };\n      break;\n      case 'top-left':\n        velbase = { x:-0.5, y:-0.5 };\n      break;\n      default:\n        velbase = { x:0, y:0 };\n      break;\n    }\n\n    if(pJS.particles.move.straight){\n      this.vx = velbase.x;\n      this.vy = velbase.y;\n      if(pJS.particles.move.random){\n        this.vx = this.vx * (Math.random());\n        this.vy = this.vy * (Math.random());\n      }\n    }else{\n      this.vx = velbase.x + Math.random()-0.5;\n      this.vy = velbase.y + Math.random()-0.5;\n    }\n\n    // var theta = 2.0 * Math.PI * Math.random();\n    // this.vx = Math.cos(theta);\n    // this.vy = Math.sin(theta);\n\n    this.vx_i = this.vx;\n    this.vy_i = this.vy;\n\n    \n\n    /* if shape is image */\n\n    var shape_type = pJS.particles.shape.type;\n    if(typeof(shape_type) == 'object'){\n      if(shape_type instanceof Array){\n        var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];\n        this.shape = shape_selected;\n      }\n    }else{\n      this.shape = shape_type;\n    }\n\n    if(this.shape == 'image'){\n      var sh = pJS.particles.shape;\n      this.img = {\n        src: sh.image.src,\n        ratio: sh.image.width / sh.image.height\n      }\n      if(!this.img.ratio) this.img.ratio = 1;\n      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined){\n        pJS.fn.vendors.createSvgImg(this);\n        if(pJS.tmp.pushing){\n          this.img.loaded = false;\n        }\n      }\n    }\n\n    \n\n  };\n\n\n  pJS.fn.particle.prototype.draw = function() {\n\n    var p = this;\n\n    if(p.radius_bubble != undefined){\n      var radius = p.radius_bubble; \n    }else{\n      var radius = p.radius;\n    }\n\n    if(p.opacity_bubble != undefined){\n      var opacity = p.opacity_bubble;\n    }else{\n      var opacity = p.opacity;\n    }\n\n    if(p.color.rgb){\n      var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+opacity+')';\n    }else{\n      var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+opacity+')';\n    }\n\n    pJS.canvas.ctx.fillStyle = color_value;\n    pJS.canvas.ctx.beginPath();\n\n    switch(p.shape){\n\n      case 'circle':\n        pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);\n      break;\n\n      case 'edge':\n        pJS.canvas.ctx.rect(p.x-radius, p.y-radius, radius*2, radius*2);\n      break;\n\n      case 'triangle':\n        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x-radius, p.y+radius / 1.66, radius*2, 3, 2);\n      break;\n\n      case 'polygon':\n        pJS.fn.vendors.drawShape(\n          pJS.canvas.ctx,\n          p.x - radius / (pJS.particles.shape.polygon.nb_sides/3.5), // startX\n          p.y - radius / (2.66/3.5), // startY\n          radius*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength\n          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator\n          1 // sideCountDenominator\n        );\n      break;\n\n      case 'star':\n        pJS.fn.vendors.drawShape(\n          pJS.canvas.ctx,\n          p.x - radius*2 / (pJS.particles.shape.polygon.nb_sides/4), // startX\n          p.y - radius / (2*2.66/3.5), // startY\n          radius*2*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength\n          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator\n          2 // sideCountDenominator\n        );\n      break;\n\n      case 'image':\n\n        function draw(){\n          pJS.canvas.ctx.drawImage(\n            img_obj,\n            p.x-radius,\n            p.y-radius,\n            radius*2,\n            radius*2 / p.img.ratio\n          );\n        }\n\n        if(pJS.tmp.img_type == 'svg'){\n          var img_obj = p.img.obj;\n        }else{\n          var img_obj = pJS.tmp.img_obj;\n        }\n\n        if(img_obj){\n          draw();\n        }\n\n      break;\n\n    }\n\n    pJS.canvas.ctx.closePath();\n\n    if(pJS.particles.shape.stroke.width > 0){\n      pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;\n      pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;\n      pJS.canvas.ctx.stroke();\n    }\n    \n    pJS.canvas.ctx.fill();\n    \n  };\n\n\n  pJS.fn.particlesCreate = function(){\n    for(var i = 0; i < pJS.particles.number.value; i++) {\n      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));\n    }\n  };\n\n  pJS.fn.particlesUpdate = function(){\n\n    for(var i = 0; i < pJS.particles.array.length; i++){\n\n      /* the particle */\n      var p = pJS.particles.array[i];\n\n      // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;\n      // var f = -BANG_SIZE / d;\n      // if ( d < BANG_SIZE ) {\n      //     var t = Math.atan2( dy, dx );\n      //     p.vx = f * Math.cos(t);\n      //     p.vy = f * Math.sin(t);\n      // }\n\n      /* move the particle */\n      if(pJS.particles.move.enable){\n        var ms = pJS.particles.move.speed/2;\n        p.x += p.vx * ms;\n        p.y += p.vy * ms;\n      }\n\n      /* change opacity status */\n      if(pJS.particles.opacity.anim.enable) {\n        if(p.opacity_status == true) {\n          if(p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;\n          p.opacity += p.vo;\n        }else {\n          if(p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;\n          p.opacity -= p.vo;\n        }\n        if(p.opacity < 0) p.opacity = 0;\n      }\n\n      /* change size */\n      if(pJS.particles.size.anim.enable){\n        if(p.size_status == true){\n          if(p.radius >= pJS.particles.size.value) p.size_status = false;\n          p.radius += p.vs;\n        }else{\n          if(p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;\n          p.radius -= p.vs;\n        }\n        if(p.radius < 0) p.radius = 0;\n      }\n\n      /* change particle position if it is out of canvas */\n      if(pJS.particles.move.out_mode == 'bounce'){\n        var new_pos = {\n          x_left: p.radius,\n          x_right:  pJS.canvas.w,\n          y_top: p.radius,\n          y_bottom: pJS.canvas.h\n        }\n      }else{\n        var new_pos = {\n          x_left: -p.radius,\n          x_right: pJS.canvas.w + p.radius,\n          y_top: -p.radius,\n          y_bottom: pJS.canvas.h + p.radius\n        }\n      }\n\n      if(p.x - p.radius > pJS.canvas.w){\n        p.x = new_pos.x_left;\n        p.y = Math.random() * pJS.canvas.h;\n      }\n      else if(p.x + p.radius < 0){\n        p.x = new_pos.x_right;\n        p.y = Math.random() * pJS.canvas.h;\n      }\n      if(p.y - p.radius > pJS.canvas.h){\n        p.y = new_pos.y_top;\n        p.x = Math.random() * pJS.canvas.w;\n      }\n      else if(p.y + p.radius < 0){\n        p.y = new_pos.y_bottom;\n        p.x = Math.random() * pJS.canvas.w;\n      }\n\n      /* out of canvas modes */\n      switch(pJS.particles.move.out_mode){\n        case 'bounce':\n          if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;\n          else if (p.x - p.radius < 0) p.vx = -p.vx;\n          if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;\n          else if (p.y - p.radius < 0) p.vy = -p.vy;\n        break;\n      }\n\n      /* events */\n      if(isInArray('grab', pJS.interactivity.events.onhover.mode)){\n        pJS.fn.modes.grabParticle(p);\n      }\n\n      if(isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)){\n        pJS.fn.modes.bubbleParticle(p);\n      }\n\n      if(isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)){\n        pJS.fn.modes.repulseParticle(p);\n      }\n\n      /* interaction auto between particles */\n      if(pJS.particles.line_linked.enable || pJS.particles.move.attract.enable){\n        for(var j = i + 1; j < pJS.particles.array.length; j++){\n          var p2 = pJS.particles.array[j];\n\n          /* link particles */\n          if(pJS.particles.line_linked.enable){\n            pJS.fn.interact.linkParticles(p,p2);\n          }\n\n          /* attract particles */\n          if(pJS.particles.move.attract.enable){\n            pJS.fn.interact.attractParticles(p,p2);\n          }\n\n          /* bounce particles */\n          if(pJS.particles.move.bounce){\n            pJS.fn.interact.bounceParticles(p,p2);\n          }\n\n        }\n      }\n\n\n    }\n\n  };\n\n  pJS.fn.particlesDraw = function(){\n\n    /* clear canvas */\n    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);\n\n    /* update each particles param */\n    pJS.fn.particlesUpdate();\n\n    /* draw each particle */\n    for(var i = 0; i < pJS.particles.array.length; i++){\n      var p = pJS.particles.array[i];\n      p.draw();\n    }\n\n  };\n\n  pJS.fn.particlesEmpty = function(){\n    pJS.particles.array = [];\n  };\n\n  pJS.fn.particlesRefresh = function(){\n\n    /* init all */\n    cancelRequestAnimFrame(pJS.fn.checkAnimFrame);\n    cancelRequestAnimFrame(pJS.fn.drawAnimFrame);\n    pJS.tmp.source_svg = undefined;\n    pJS.tmp.img_obj = undefined;\n    pJS.tmp.count_svg = 0;\n    pJS.fn.particlesEmpty();\n    pJS.fn.canvasClear();\n    \n    /* restart */\n    pJS.fn.vendors.start();\n\n  };\n\n\n  /* ---------- pJS functions - particles interaction ------------ */\n\n  pJS.fn.interact.linkParticles = function(p1, p2){\n\n    var dx = p1.x - p2.x,\n        dy = p1.y - p2.y,\n        dist = Math.sqrt(dx*dx + dy*dy);\n\n    /* draw a line between p1 and p2 if the distance between them is under the config distance */\n    if(dist <= pJS.particles.line_linked.distance){\n\n      var opacity_line = pJS.particles.line_linked.opacity - (dist / (1/pJS.particles.line_linked.opacity)) / pJS.particles.line_linked.distance;\n\n      if(opacity_line > 0){        \n        \n        /* style */\n        var color_line = pJS.particles.line_linked.color_rgb_line;\n        pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';\n        pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;\n        //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */\n        \n        /* path */\n        pJS.canvas.ctx.beginPath();\n        pJS.canvas.ctx.moveTo(p1.x, p1.y);\n        pJS.canvas.ctx.lineTo(p2.x, p2.y);\n        pJS.canvas.ctx.stroke();\n        pJS.canvas.ctx.closePath();\n\n      }\n\n    }\n\n  };\n\n\n  pJS.fn.interact.attractParticles  = function(p1, p2){\n\n    /* condensed particles */\n    var dx = p1.x - p2.x,\n        dy = p1.y - p2.y,\n        dist = Math.sqrt(dx*dx + dy*dy);\n\n    if(dist <= pJS.particles.line_linked.distance){\n\n      var ax = dx/(pJS.particles.move.attract.rotateX*1000),\n          ay = dy/(pJS.particles.move.attract.rotateY*1000);\n\n      p1.vx -= ax;\n      p1.vy -= ay;\n\n      p2.vx += ax;\n      p2.vy += ay;\n\n    }\n    \n\n  }\n\n\n  pJS.fn.interact.bounceParticles = function(p1, p2){\n\n    var dx = p1.x - p2.x,\n        dy = p1.y - p2.y,\n        dist = Math.sqrt(dx*dx + dy*dy),\n        dist_p = p1.radius+p2.radius;\n\n    if(dist <= dist_p){\n      p1.vx = -p1.vx;\n      p1.vy = -p1.vy;\n\n      p2.vx = -p2.vx;\n      p2.vy = -p2.vy;\n    }\n\n  }\n\n\n  /* ---------- pJS functions - modes events ------------ */\n\n  pJS.fn.modes.pushParticles = function(nb, pos){\n\n    pJS.tmp.pushing = true;\n\n    for(var i = 0; i < nb; i++){\n      pJS.particles.array.push(\n        new pJS.fn.particle(\n          pJS.particles.color,\n          pJS.particles.opacity.value,\n          {\n            'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,\n            'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h\n          }\n        )\n      )\n      if(i == nb-1){\n        if(!pJS.particles.move.enable){\n          pJS.fn.particlesDraw();\n        }\n        pJS.tmp.pushing = false;\n      }\n    }\n\n  };\n\n\n  pJS.fn.modes.removeParticles = function(nb){\n\n    pJS.particles.array.splice(0, nb);\n    if(!pJS.particles.move.enable){\n      pJS.fn.particlesDraw();\n    }\n\n  };\n\n\n  pJS.fn.modes.bubbleParticle = function(p){\n\n    /* on hover event */\n    if(pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)){\n\n      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,\n          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,\n          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),\n          ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;\n\n      function init(){\n        p.opacity_bubble = p.opacity;\n        p.radius_bubble = p.radius;\n      }\n\n      /* mousemove - check ratio */\n      if(dist_mouse <= pJS.interactivity.modes.bubble.distance){\n\n        if(ratio >= 0 && pJS.interactivity.status == 'mousemove'){\n          \n          /* size */\n          if(pJS.interactivity.modes.bubble.size != pJS.particles.size.value){\n\n            if(pJS.interactivity.modes.bubble.size > pJS.particles.size.value){\n              var size = p.radius + (pJS.interactivity.modes.bubble.size*ratio);\n              if(size >= 0){\n                p.radius_bubble = size;\n              }\n            }else{\n              var dif = p.radius - pJS.interactivity.modes.bubble.size,\n                  size = p.radius - (dif*ratio);\n              if(size > 0){\n                p.radius_bubble = size;\n              }else{\n                p.radius_bubble = 0;\n              }\n            }\n\n          }\n\n          /* opacity */\n          if(pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value){\n\n            if(pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value){\n              var opacity = pJS.interactivity.modes.bubble.opacity*ratio;\n              if(opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity){\n                p.opacity_bubble = opacity;\n              }\n            }else{\n              var opacity = p.opacity - (pJS.particles.opacity.value-pJS.interactivity.modes.bubble.opacity)*ratio;\n              if(opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity){\n                p.opacity_bubble = opacity;\n              }\n            }\n\n          }\n\n        }\n\n      }else{\n        init();\n      }\n\n\n      /* mouseleave */\n      if(pJS.interactivity.status == 'mouseleave'){\n        init();\n      }\n    \n    }\n\n    /* on click event */\n    else if(pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)){\n\n\n      if(pJS.tmp.bubble_clicking){\n        var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,\n            dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,\n            dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),\n            time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time)/1000;\n\n        if(time_spent > pJS.interactivity.modes.bubble.duration){\n          pJS.tmp.bubble_duration_end = true;\n        }\n\n        if(time_spent > pJS.interactivity.modes.bubble.duration*2){\n          pJS.tmp.bubble_clicking = false;\n          pJS.tmp.bubble_duration_end = false;\n        }\n      }\n\n\n      function process(bubble_param, particles_param, p_obj_bubble, p_obj, id){\n\n        if(bubble_param != particles_param){\n\n          if(!pJS.tmp.bubble_duration_end){\n            if(dist_mouse <= pJS.interactivity.modes.bubble.distance){\n              if(p_obj_bubble != undefined) var obj = p_obj_bubble;\n              else var obj = p_obj;\n              if(obj != bubble_param){\n                var value = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration);\n                if(id == 'size') p.radius_bubble = value;\n                if(id == 'opacity') p.opacity_bubble = value;\n              }\n            }else{\n              if(id == 'size') p.radius_bubble = undefined;\n              if(id == 'opacity') p.opacity_bubble = undefined;\n            }\n          }else{\n            if(p_obj_bubble != undefined){\n              var value_tmp = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration),\n                  dif = bubble_param - value_tmp;\n                  value = bubble_param + dif;\n              if(id == 'size') p.radius_bubble = value;\n              if(id == 'opacity') p.opacity_bubble = value;\n            }\n          }\n\n        }\n\n      }\n\n      if(pJS.tmp.bubble_clicking){\n        /* size */\n        process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');\n        /* opacity */\n        process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');\n      }\n\n    }\n\n  };\n\n\n  pJS.fn.modes.repulseParticle = function(p){\n\n    if(pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {\n\n      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,\n          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,\n          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);\n\n      var normVec = {x: dx_mouse/dist_mouse, y: dy_mouse/dist_mouse},\n          repulseRadius = pJS.interactivity.modes.repulse.distance,\n          velocity = 100,\n          repulseFactor = clamp((1/repulseRadius)*(-1*Math.pow(dist_mouse/repulseRadius,2)+1)*repulseRadius*velocity, 0, 50);\n      \n      var pos = {\n        x: p.x + normVec.x * repulseFactor,\n        y: p.y + normVec.y * repulseFactor\n      }\n\n      if(pJS.particles.move.out_mode == 'bounce'){\n        if(pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;\n        if(pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;\n      }else{\n        p.x = pos.x;\n        p.y = pos.y;\n      }\n    \n    }\n\n\n    else if(pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {\n\n      if(!pJS.tmp.repulse_finish){\n        pJS.tmp.repulse_count++;\n        if(pJS.tmp.repulse_count == pJS.particles.array.length){\n          pJS.tmp.repulse_finish = true;\n        }\n      }\n\n      if(pJS.tmp.repulse_clicking){\n\n        var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance/6, 3);\n\n        var dx = pJS.interactivity.mouse.click_pos_x - p.x,\n            dy = pJS.interactivity.mouse.click_pos_y - p.y,\n            d = dx*dx + dy*dy;\n\n        var force = -repulseRadius / d * 1;\n\n        function process(){\n\n          var f = Math.atan2(dy,dx);\n          p.vx = force * Math.cos(f);\n          p.vy = force * Math.sin(f);\n\n          if(pJS.particles.move.out_mode == 'bounce'){\n            var pos = {\n              x: p.x + p.vx,\n              y: p.y + p.vy\n            }\n            if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;\n            else if (pos.x - p.radius < 0) p.vx = -p.vx;\n            if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;\n            else if (pos.y - p.radius < 0) p.vy = -p.vy;\n          }\n\n        }\n\n        // default\n        if(d <= repulseRadius){\n          process();\n        }\n\n        // bang - slow motion mode\n        // if(!pJS.tmp.repulse_finish){\n        //   if(d <= repulseRadius){\n        //     process();\n        //   }\n        // }else{\n        //   process();\n        // }\n        \n\n      }else{\n\n        if(pJS.tmp.repulse_clicking == false){\n\n          p.vx = p.vx_i;\n          p.vy = p.vy_i;\n        \n        }\n\n      }\n\n    }\n\n  }\n\n\n  pJS.fn.modes.grabParticle = function(p){\n\n    if(pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove'){\n\n      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,\n          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,\n          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);\n\n      /* draw a line between the cursor and the particle if the distance between them is under the config distance */\n      if(dist_mouse <= pJS.interactivity.modes.grab.distance){\n\n        var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - (dist_mouse / (1/pJS.interactivity.modes.grab.line_linked.opacity)) / pJS.interactivity.modes.grab.distance;\n\n        if(opacity_line > 0){\n\n          /* style */\n          var color_line = pJS.particles.line_linked.color_rgb_line;\n          pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';\n          pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;\n          //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */\n          \n          /* path */\n          pJS.canvas.ctx.beginPath();\n          pJS.canvas.ctx.moveTo(p.x, p.y);\n          pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);\n          pJS.canvas.ctx.stroke();\n          pJS.canvas.ctx.closePath();\n\n        }\n\n      }\n\n    }\n\n  };\n\n\n\n  /* ---------- pJS functions - vendors ------------ */\n\n  pJS.fn.vendors.eventsListeners = function(){\n\n    /* events target element */\n    if(pJS.interactivity.detect_on == 'window'){\n      pJS.interactivity.el = window;\n    }else{\n      pJS.interactivity.el = pJS.canvas.el;\n    }\n\n\n    /* detect mouse pos - on hover / click event */\n    if(pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable){\n\n      /* el on mousemove */\n      pJS.interactivity.el.addEventListener('mousemove', function(e){\n\n        if(pJS.interactivity.el == window){\n          var pos_x = e.clientX,\n              pos_y = e.clientY;\n        }\n        else{\n          var pos_x = e.offsetX || e.clientX,\n              pos_y = e.offsetY || e.clientY;\n        }\n\n        pJS.interactivity.mouse.pos_x = pos_x;\n        pJS.interactivity.mouse.pos_y = pos_y;\n\n        if(pJS.tmp.retina){\n          pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;\n          pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;\n        }\n\n        pJS.interactivity.status = 'mousemove';\n\n      });\n\n      /* el on onmouseleave */\n      pJS.interactivity.el.addEventListener('mouseleave', function(e){\n\n        pJS.interactivity.mouse.pos_x = null;\n        pJS.interactivity.mouse.pos_y = null;\n        pJS.interactivity.status = 'mouseleave';\n\n      });\n\n    }\n\n    /* on click event */\n    if(pJS.interactivity.events.onclick.enable){\n\n      pJS.interactivity.el.addEventListener('click', function(){\n\n        pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;\n        pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;\n        pJS.interactivity.mouse.click_time = new Date().getTime();\n\n        if(pJS.interactivity.events.onclick.enable){\n\n          switch(pJS.interactivity.events.onclick.mode){\n\n            case 'push':\n              if(pJS.particles.move.enable){\n                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);\n              }else{\n                if(pJS.interactivity.modes.push.particles_nb == 1){\n                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);\n                }\n                else if(pJS.interactivity.modes.push.particles_nb > 1){\n                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);\n                }\n              }\n            break;\n\n            case 'remove':\n              pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);\n            break;\n\n            case 'bubble':\n              pJS.tmp.bubble_clicking = true;\n            break;\n\n            case 'repulse':\n              pJS.tmp.repulse_clicking = true;\n              pJS.tmp.repulse_count = 0;\n              pJS.tmp.repulse_finish = false;\n              setTimeout(function(){\n                pJS.tmp.repulse_clicking = false;\n              }, pJS.interactivity.modes.repulse.duration*1000)\n            break;\n\n          }\n\n        }\n\n      });\n        \n    }\n\n\n  };\n\n  pJS.fn.vendors.densityAutoParticles = function(){\n\n    if(pJS.particles.number.density.enable){\n\n      /* calc area */\n      var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;\n      if(pJS.tmp.retina){\n        area = area/(pJS.canvas.pxratio*2);\n      }\n\n      /* calc number of particles based on density area */\n      var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;\n\n      /* add or remove X particles */\n      var missing_particles = pJS.particles.array.length - nb_particles;\n      if(missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));\n      else pJS.fn.modes.removeParticles(missing_particles);\n\n    }\n\n  };\n\n\n  pJS.fn.vendors.checkOverlap = function(p1, position){\n    for(var i = 0; i < pJS.particles.array.length; i++){\n      var p2 = pJS.particles.array[i];\n\n      var dx = p1.x - p2.x,\n          dy = p1.y - p2.y,\n          dist = Math.sqrt(dx*dx + dy*dy);\n\n      if(dist <= p1.radius + p2.radius){\n        p1.x = position ? position.x : Math.random() * pJS.canvas.w;\n        p1.y = position ? position.y : Math.random() * pJS.canvas.h;\n        pJS.fn.vendors.checkOverlap(p1);\n      }\n    }\n  };\n\n\n  pJS.fn.vendors.createSvgImg = function(p){\n\n    /* set color to svg element */\n    var svgXml = pJS.tmp.source_svg,\n        rgbHex = /#([0-9A-F]{3,6})/gi,\n        coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {\n          if(p.color.rgb){\n            var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+p.opacity+')';\n          }else{\n            var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+p.opacity+')';\n          }\n          return color_value;\n        });\n\n    /* prepare to create img with colored svg */\n    var svg = new Blob([coloredSvgXml], {type: 'image/svg+xml;charset=utf-8'}),\n        DOMURL = window.URL || window.webkitURL || window,\n        url = DOMURL.createObjectURL(svg);\n\n    /* create particle img obj */\n    var img = new Image();\n    img.addEventListener('load', function(){\n      p.img.obj = img;\n      p.img.loaded = true;\n      DOMURL.revokeObjectURL(url);\n      pJS.tmp.count_svg++;\n    });\n    img.src = url;\n\n  };\n\n\n  pJS.fn.vendors.destroypJS = function(){\n    cancelAnimationFrame(pJS.fn.drawAnimFrame);\n    canvas_el.remove();\n    pJSDom = null;\n  };\n\n\n  pJS.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator){\n\n    // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/\n    var sideCount = sideCountNumerator * sideCountDenominator;\n    var decimalSides = sideCountNumerator / sideCountDenominator;\n    var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;\n    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians\n    c.save();\n    c.beginPath();\n    c.translate(startX, startY);\n    c.moveTo(0,0);\n    for (var i = 0; i < sideCount; i++) {\n      c.lineTo(sideLength,0);\n      c.translate(sideLength,0);\n      c.rotate(interiorAngle);\n    }\n    //c.stroke();\n    c.fill();\n    c.restore();\n\n  };\n\n  pJS.fn.vendors.exportImg = function(){\n    window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');\n  };\n\n\n  pJS.fn.vendors.loadImg = function(type){\n\n    pJS.tmp.img_error = undefined;\n\n    if(pJS.particles.shape.image.src != ''){\n\n      if(type == 'svg'){\n\n        var xhr = new XMLHttpRequest();\n        xhr.open('GET', pJS.particles.shape.image.src);\n        xhr.onreadystatechange = function (data) {\n          if(xhr.readyState == 4){\n            if(xhr.status == 200){\n              pJS.tmp.source_svg = data.currentTarget.response;\n              pJS.fn.vendors.checkBeforeDraw();\n            }else{\n              console.log('Error pJS - Image not found');\n              pJS.tmp.img_error = true;\n            }\n          }\n        }\n        xhr.send();\n\n      }else{\n\n        var img = new Image();\n        img.addEventListener('load', function(){\n          pJS.tmp.img_obj = img;\n          pJS.fn.vendors.checkBeforeDraw();\n        });\n        img.src = pJS.particles.shape.image.src;\n\n      }\n\n    }else{\n      console.log('Error pJS - No image.src');\n      pJS.tmp.img_error = true;\n    }\n\n  };\n\n\n  pJS.fn.vendors.draw = function(){\n\n    if(pJS.particles.shape.type == 'image'){\n\n      if(pJS.tmp.img_type == 'svg'){\n\n        if(pJS.tmp.count_svg >= pJS.particles.number.value){\n          pJS.fn.particlesDraw();\n          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);\n          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);\n        }else{\n          //console.log('still loading...');\n          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);\n        }\n\n      }else{\n\n        if(pJS.tmp.img_obj != undefined){\n          pJS.fn.particlesDraw();\n          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);\n          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);\n        }else{\n          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);\n        }\n\n      }\n\n    }else{\n      pJS.fn.particlesDraw();\n      if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);\n      else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);\n    }\n\n  };\n\n\n  pJS.fn.vendors.checkBeforeDraw = function(){\n\n    // if shape is image\n    if(pJS.particles.shape.type == 'image'){\n\n      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined){\n        pJS.tmp.checkAnimFrame = requestAnimFrame(check);\n      }else{\n        //console.log('images loaded! cancel check');\n        cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);\n        if(!pJS.tmp.img_error){\n          pJS.fn.vendors.init();\n          pJS.fn.vendors.draw();\n        }\n        \n      }\n\n    }else{\n      pJS.fn.vendors.init();\n      pJS.fn.vendors.draw();\n    }\n\n  };\n\n\n  pJS.fn.vendors.init = function(){\n\n    /* init canvas + particles */\n    pJS.fn.retinaInit();\n    pJS.fn.canvasInit();\n    pJS.fn.canvasSize();\n    pJS.fn.canvasPaint();\n    pJS.fn.particlesCreate();\n    pJS.fn.vendors.densityAutoParticles();\n\n    /* particles.line_linked - convert hex colors to rgb */\n    pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);\n\n  };\n\n\n  pJS.fn.vendors.start = function(){\n\n    if(isInArray('image', pJS.particles.shape.type)){\n      pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);\n      pJS.fn.vendors.loadImg(pJS.tmp.img_type);\n    }else{\n      pJS.fn.vendors.checkBeforeDraw();\n    }\n\n  };\n\n\n\n\n  /* ---------- pJS - start ------------ */\n\n\n  pJS.fn.vendors.eventsListeners();\n\n  pJS.fn.vendors.start();\n  \n\n\n};\n\n/* ---------- global functions - vendors ------------ */\n\nObject.deepExtend = function(destination, source) {\n  for (var property in source) {\n    if (source[property] && source[property].constructor &&\n     source[property].constructor === Object) {\n      destination[property] = destination[property] || {};\n      arguments.callee(destination[property], source[property]);\n    } else {\n      destination[property] = source[property];\n    }\n  }\n  return destination;\n};\n\nwindow.requestAnimFrame = (function(){\n  return  window.requestAnimationFrame ||\n    window.webkitRequestAnimationFrame ||\n    window.mozRequestAnimationFrame    ||\n    window.oRequestAnimationFrame      ||\n    window.msRequestAnimationFrame     ||\n    function(callback){\n      window.setTimeout(callback, 1000 / 60);\n    };\n})();\n\nwindow.cancelRequestAnimFrame = ( function() {\n  return window.cancelAnimationFrame         ||\n    window.webkitCancelRequestAnimationFrame ||\n    window.mozCancelRequestAnimationFrame    ||\n    window.oCancelRequestAnimationFrame      ||\n    window.msCancelRequestAnimationFrame     ||\n    clearTimeout\n} )();\n\nfunction hexToRgb(hex){\n  // By Tim Down - http://stackoverflow.com/a/5624139/3493650\n  // Expand shorthand form (e.g. \"03F\") to full form (e.g. \"0033FF\")\n  var shorthandRegex = /^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i;\n  hex = hex.replace(shorthandRegex, function(m, r, g, b) {\n     return r + r + g + g + b + b;\n  });\n  var result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);\n  return result ? {\n      r: parseInt(result[1], 16),\n      g: parseInt(result[2], 16),\n      b: parseInt(result[3], 16)\n  } : null;\n};\n\nfunction clamp(number, min, max) {\n  return Math.min(Math.max(number, min), max);\n};\n\nfunction isInArray(value, array) {\n  return array.indexOf(value) > -1;\n}\n\n\n/* ---------- particles.js functions - start ------------ */\n\nwindow.pJSDom = [];\n\nwindow.particlesJS = function(tag_id, params){\n\n  //console.log(params);\n\n  /* no string id? so it's object params, and set the id with default id */\n  if(typeof(tag_id) != 'string'){\n    params = tag_id;\n    tag_id = 'particles-js';\n  }\n\n  /* no id? set the id to default id */\n  if(!tag_id){\n    tag_id = 'particles-js';\n  }\n\n  /* pJS elements */\n  var pJS_tag = document.getElementById(tag_id),\n      pJS_canvas_class = 'particles-js-canvas-el',\n      exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);\n\n  /* remove canvas if exists into the pJS target tag */\n  if(exist_canvas.length){\n    while(exist_canvas.length > 0){\n      pJS_tag.removeChild(exist_canvas[0]);\n    }\n  }\n\n  /* create canvas element */\n  var canvas_el = document.createElement('canvas');\n  canvas_el.className = pJS_canvas_class;\n\n  /* set size canvas */\n  canvas_el.style.width = \"100%\";\n  canvas_el.style.height = \"100%\";\n\n  /* append canvas */\n  var canvas = document.getElementById(tag_id).appendChild(canvas_el);\n\n  /* launch particle.js */\n  if(canvas != null){\n    pJSDom.push(new pJS(tag_id, params));\n  }\n\n};\n\nwindow.particlesJS.load = function(tag_id, path_config_json, callback){\n\n  /* load json config */\n  var xhr = new XMLHttpRequest();\n  xhr.open('GET', path_config_json);\n  xhr.onreadystatechange = function (data) {\n    if(xhr.readyState == 4){\n      if(xhr.status == 200){\n        var params = JSON.parse(data.currentTarget.response);\n        window.particlesJS(tag_id, params);\n        if(callback) callback();\n      }else{\n        console.log('Error pJS - XMLHttpRequest status: '+xhr.status);\n        console.log('Error pJS - File config not found');\n      }\n    }\n  };\n  xhr.send();\n\n};\n\n//# sourceURL=webpack:///./node_modules/particles.js/particles.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/js/apis/intersection-observer.js":
/*!**********************************************!*\
  !*** ./src/js/apis/intersection-observer.js ***!
  \**********************************************/
/*! exports provided: launchObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"launchObserver\", function() { return launchObserver; });\n/* harmony import */ var _helpers_intersection_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/intersection-observer */ \"./src/js/helpers/intersection-observer.js\");\n\nvar launchObserver = function launchObserver() {\n  if (document.querySelector('.main-content__section') !== null) {\n    Object(_helpers_intersection_observer__WEBPACK_IMPORTED_MODULE_0__[\"setIntersectionObserver\"])('.main-content__section', function (element) {\n      element.classList.add('is-coming-left');\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/js/apis/intersection-observer.js?");

/***/ }),

/***/ "./src/js/helpers/document-ready.js":
/*!******************************************!*\
  !*** ./src/js/helpers/document-ready.js ***!
  \******************************************/
/*! exports provided: ready */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ready\", function() { return ready; });\nvar ready = function ready(fn) {\n  if (document.readyState != 'loading') {\n    fn();\n  } else {\n    document.addEventListener('DOMContentLoaded', fn);\n  }\n};\n\n//# sourceURL=webpack:///./src/js/helpers/document-ready.js?");

/***/ }),

/***/ "./src/js/helpers/intersection-observer.js":
/*!*************************************************!*\
  !*** ./src/js/helpers/intersection-observer.js ***!
  \*************************************************/
/*! exports provided: setIntersectionObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setIntersectionObserver\", function() { return setIntersectionObserver; });\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar setIntersectionObserver = function setIntersectionObserver(targetsClass, callbackOnIntersection) {\n  var observer = new IntersectionObserver(function (entries, observer) {\n    entries.forEach(function (entry) {\n      if (entry.isIntersecting) {\n        callbackOnIntersection(entry.target);\n        observer.unobserve(entry.target);\n      }\n    });\n  }, {\n    rootMargin: '0px',\n    threshold: 0.25\n  });\n  document.querySelectorAll(targetsClass).forEach(function (target) {\n    observer.observe(target);\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/js/helpers/intersection-observer.js?");

/***/ }),

/***/ "./src/js/libraries/countUp.js":
/*!*************************************!*\
  !*** ./src/js/libraries/countUp.js ***!
  \*************************************/
/*! exports provided: launchCountUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"launchCountUp\", function() { return launchCountUp; });\n/* harmony import */ var countup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! countup.js */ \"./node_modules/countup.js/dist/countUp.min.js\");\n\nvar launchCountUp = function launchCountUp(_) {\n  var countUp = new countup_js__WEBPACK_IMPORTED_MODULE_0__[\"CountUp\"]('number', 1000000);\n  countUp.start();\n};\n\n//# sourceURL=webpack:///./src/js/libraries/countUp.js?");

/***/ }),

/***/ "./src/js/libraries/particles.js":
/*!***************************************!*\
  !*** ./src/js/libraries/particles.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_particles_js_particles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/particles.js/particles */ \"./node_modules/particles.js/particles.js\");\n/* harmony import */ var _node_modules_particles_js_particles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_particles_js_particles__WEBPACK_IMPORTED_MODULE_0__);\n // Configure rendering with 'particles.json' in assets folder\n\nif (document.querySelector('.page--particles-js') !== null) {\n  particlesJS.load('particles-js', 'particles.json');\n}\n\n//# sourceURL=webpack:///./src/js/libraries/particles.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_document_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/document-ready */ \"./src/js/helpers/document-ready.js\");\n/* harmony import */ var _libraries_particles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libraries/particles */ \"./src/js/libraries/particles.js\");\n/* harmony import */ var _libraries_countUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libraries/countUp */ \"./src/js/libraries/countUp.js\");\n/* harmony import */ var _apis_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apis/intersection-observer */ \"./src/js/apis/intersection-observer.js\");\n/* Setup General */\n\n/* Import Libraries */\n//Particles.js\n\n //Countup.js\n\n\n/* Import Codepens */\n\n/* Import Apis */\n//Intersection-observer\n\n\n/* Import Others */\n\nObject(_helpers_document_ready__WEBPACK_IMPORTED_MODULE_0__[\"ready\"])(function () {\n  /* Setup General */\n\n  /* Setup Libraries */\n  //Countup.js\n  if (document.querySelector('.page--countup-js') !== null) Object(_libraries_countUp__WEBPACK_IMPORTED_MODULE_2__[\"launchCountUp\"])();\n  /* Setup Codepens */\n\n  /* Setup Apis */\n  //Intersection-observer\n\n  if (document.querySelector('.page--intersection-observer') !== null) Object(_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_3__[\"launchObserver\"])();\n  /* Setup Others */\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });