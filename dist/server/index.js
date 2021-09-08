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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bot/main.converse":
/*!*******************************!*\
  !*** ./src/bot/main.converse ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\ncode: `@Event('start')\nstart() {\n    > What is your name ?\n    Prompt()\n    > Welcome { :text }\n    \n    @Format('quickReplies', ['Fine', 'Sad'])\n    > How are you doing?\n}\n\n@Intent('greeting', [\n    'hello',\n    'thanks'\n])\ngreeting() {\n    > Hey !\n}\n\n@Event('nothing')\nnothing() {\n    > What ?\n}`,\ncompiled: [{\"name\":\"start\",\"params\":null,\"type\":\"function\",\"instructions\":[{\"output\":\"What is your name ?\",\"params\":null,\"decorators\":[]},{\"type\":\"executeFn\",\"name\":\"Prompt\",\"params\":[],\"_file\":{\"start\":{\"offset\":56,\"line\":4,\"column\":5},\"end\":{\"offset\":69,\"line\":5,\"column\":5}},\"decorators\":[]},{\"output\":{\"text\":\"Welcome {0}\",\"variables\":[{\"value\":{\"variable\":\":text\"}}]},\"params\":null,\"decorators\":[]},{\"output\":\"How are you doing?\",\"params\":null,\"decorators\":[{\"name\":\"Format\",\"params\":[\"quickReplies\",[\"Fine\",\"Sad\"]]}]}],\"_file\":{\"start\":{\"offset\":0,\"line\":1,\"column\":1},\"end\":{\"offset\":167,\"line\":11,\"column\":1}},\"decorators\":[{\"name\":\"Event\",\"params\":[\"start\"]}]},{\"name\":\"greeting\",\"params\":null,\"type\":\"function\",\"instructions\":[{\"output\":\"Hey !\",\"params\":null,\"decorators\":[]}],\"_file\":{\"start\":{\"offset\":167,\"line\":11,\"column\":1},\"end\":{\"offset\":246,\"line\":19,\"column\":1}},\"decorators\":[{\"name\":\"Intent\",\"params\":[\"greeting\",[\"hello\",\"thanks\"]]}]},{\"name\":\"nothing\",\"params\":null,\"type\":\"function\",\"instructions\":[{\"output\":\"What ?\",\"params\":null,\"decorators\":[]}],\"_file\":{\"start\":{\"offset\":246,\"line\":19,\"column\":1},\"end\":{\"offset\":290,\"line\":22,\"column\":2}},\"decorators\":[{\"name\":\"Event\",\"params\":[\"nothing\"]}]}]\n});\n\n//# sourceURL=webpack:///./src/bot/main.converse?");

/***/ }),

/***/ "./src/bot/main.js":
/*!*************************!*\
  !*** ./src/bot/main.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_converse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.converse */ \"./src/bot/main.converse\");\n/* harmony import */ var newbot_formats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! newbot-formats */ \"newbot-formats\");\n/* harmony import */ var newbot_formats__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(newbot_formats__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    code: _main_converse__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    skills: {\n        formats: (newbot_formats__WEBPACK_IMPORTED_MODULE_1___default())\n    },\n    /*functions: {\n        foo() {\n            return 'foo'\n        }\n    },\n    languages: {},\n    nlp: {},\n    conditions: {},\n    constants: {},\n    formats: {\n\n    },\n    shareFormats: true,\n    shareNlp: true,\n    propagateNlp: true*/\n});\n\n//# sourceURL=webpack:///./src/bot/main.js?");

/***/ }),

/***/ "./src/converse.js":
/*!*************************!*\
  !*** ./src/converse.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var newbot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! newbot */ \"newbot\");\n/* harmony import */ var newbot__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(newbot__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nlpjs_lang_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nlpjs/lang-en */ \"@nlpjs/lang-en\");\n/* harmony import */ var _nlpjs_lang_en__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nlpjs_lang_en__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var newbot_packages_train__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! newbot/packages/train */ \"newbot/packages/train\");\n/* harmony import */ var newbot_packages_train__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(newbot_packages_train__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _bot_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bot/main */ \"./src/bot/main.js\");\n\n\n\n\n\nconst converse = new newbot__WEBPACK_IMPORTED_MODULE_0__[\"NewBot\"](_bot_main__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n\nconsole.log('Train Bot...')\n\nObject(newbot_packages_train__WEBPACK_IMPORTED_MODULE_2__[\"train\"])(converse, [_nlpjs_lang_en__WEBPACK_IMPORTED_MODULE_1__[\"LangEn\"]]).then(model => {\n    converse.setModelNlp(model, [_nlpjs_lang_en__WEBPACK_IMPORTED_MODULE_1__[\"LangEn\"]]);\n    console.log('Bot is trained !')\n})\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((io) => {\n    io.on('connection', (socket) => {\n        socket.on('userText', (text) => {\n            converse.exec(text, socket.id, {\n                output(output, done) {\n                    socket.emit('botReply', output)\n                    done()\n                },\n                data: {\n                    session: {\n                        message: {\n                            source: 'website'\n                        }\n                    }\n                }\n            })\n        })\n    })\n});\n\n//# sourceURL=webpack:///./src/converse.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _converse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./converse */ \"./src/converse.js\");\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3000\n\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()()\nconst server = http__WEBPACK_IMPORTED_MODULE_0___default.a.createServer(app)\nconst io = new socket_io__WEBPACK_IMPORTED_MODULE_3__[\"Server\"](server, {\n    maxHttpBufferSize: 1e4\n})\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json())\napp.use('/', express__WEBPACK_IMPORTED_MODULE_1___default.a.static(__dirname + '/../../src/client'))\n\nObject(_converse__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(io)\n\nserver.listen(PORT, () =>  {\n    console.log(`\n        ===> Chatbot is running on http://localhost:${PORT} <===\n    `)\n}) \n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "@nlpjs/lang-en":
/*!*********************************!*\
  !*** external "@nlpjs/lang-en" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@nlpjs/lang-en\");\n\n//# sourceURL=webpack:///external_%22@nlpjs/lang-en%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "newbot":
/*!*************************!*\
  !*** external "newbot" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"newbot\");\n\n//# sourceURL=webpack:///external_%22newbot%22?");

/***/ }),

/***/ "newbot-formats":
/*!*********************************!*\
  !*** external "newbot-formats" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"newbot-formats\");\n\n//# sourceURL=webpack:///external_%22newbot-formats%22?");

/***/ }),

/***/ "newbot/packages/train":
/*!****************************************!*\
  !*** external "newbot/packages/train" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"newbot/packages/train\");\n\n//# sourceURL=webpack:///external_%22newbot/packages/train%22?");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"socket.io\");\n\n//# sourceURL=webpack:///external_%22socket.io%22?");

/***/ })

/******/ });