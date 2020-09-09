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

var canvas = document.querySelector("#sketch-a-etch");
var canvasBorder = document.querySelector(".canvas-border");
var dialContainer = document.querySelector(".dial-container");
var headingBorder = document.querySelector(".heading-border");
var shakeButton = document.querySelector(".shake-button");
var context = canvas.getContext("2d");
var moveDistance = 10;
var height = canvas.height;
var width = canvas.width;
var x = Math.floor(Math.random() * width);
var y = Math.floor(Math.random() * height);
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = moveDistance;
context.beginPath();
context.moveTo(x, y);
context.lineTo(x, y);
context.stroke();

function draw(_ref) {
  var key = _ref.key;
  context.beginPath();
  context.moveTo(x, y);

  switch (key) {
    case 'ArrowLeft':
      x -= moveDistance;
      break;

    case 'ArrowRight':
      x += moveDistance;
      break;

    case 'ArrowDown':
      y += moveDistance;
      break;

    case 'ArrowUp':
      y -= moveDistance;
      break;

    default:
      break;
  }

  context.lineTo(x, y);
  context.stroke();
} // handles key press


function handleKeyDown(e) {
  if (e.key.includes("Arrow")) {
    e.preventDefault();
    draw({
      key: e.key
    });
  }
} // clears canvas


function clearSketch() {
  shakeSketch();
  context.clearRect(0, 0, width, height);
} // handles shake animation


function shakeSketch() {
  headingBorder.classList.add('shake');
  canvasBorder.classList.add('shake');
  canvas.classList.add('shake');
  shakeButton.classList.add('shake');
  canvas.addEventListener('animationend', function () {
    headingBorder.classList.remove('shake');
    canvasBorder.classList.remove('shake');
    canvas.classList.remove('shake');
    shakeButton.classList.remove('shake');
  }), {
    once: true
  };
}

window.addEventListener("keydown", handleKeyDown);
shakeButton.addEventListener('click', clearSketch);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map