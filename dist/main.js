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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const canvas = document.querySelector(\"#sketch-a-etch\");\nconst canvasBorder = document.querySelector(\".canvas-border\");\nconst dialContainer = document.querySelector(\".dial-container\");\nconst headingBorder = document.querySelector(\".heading-border\");\nconst shakeButton = document.querySelector(\".shake-button\");\n\nconst context = canvas.getContext(\"2d\");\nconst moveDistance = 10;\n\nconst height = canvas.height;\nconst width = canvas.width;\n\nlet x = Math.floor(Math.random() * width);\nlet y = Math.floor(Math.random() * height);\n\ncontext.lineJoin = 'dial';\ncontext.lineCap = 'dial';\ncontext.lineWidth = moveDistance;\n\ncontext.beginPath();\ncontext.moveTo(x, y);\ncontext.lineTo(x, y);\ncontext.stroke();\n\nfunction draw({ key }) {\n  context.beginPath();\n  context.moveTo(x, y);\n  switch(key) {\n    case 'MoveLeft':\n      x -= moveDistance;\n      break;\n    case 'MoveRight':\n      x += moveDistance;\n      break;\n    case 'MoveDown':\n      y += moveDistance;\n      break;\n    case 'MoveUp':\n      y -= moveDistance;\n      break;\n    default:\n      break;\n  }\n  context.lineTo(x, y);\n  context.stroke();\n}\n\n\n// handles key press\nfunction handleKeyDown(e) {\n  if (e.key.includes('Move')) {\n    e.preventDefault();\n    draw({ key: e.key });\n  }\n}\n\n// clears canvas\nfunction clearSketch() {\n  shakeSketch();\n  context.clearRect(0, 0, width, height);\n}\n\n// handles shake animation\nfunction shakeSketch() {\n\n}\n\nwindow.addEventListener('keydown', handleKeyDown);\nshakeButton.addEventListener('click', clearSketch);\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });