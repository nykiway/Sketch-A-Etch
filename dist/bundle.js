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
var betweenButtons = document.querySelector(".between-buttons");
var leftDial = document.querySelector(".dial-left");
var rightDial = document.querySelector(".dial-right");
var context = canvas.getContext("2d");
var moveDistance = 2;
var height = canvas.height;
var width = canvas.width;
var x = Math.floor(Math.random() * width);
var y = Math.floor(Math.random() * height);
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 2;
context.strokeStyle = "#000000";
context.beginPath();
context.textAlign = "center";
context.font = "20px sans-serif";
context.fillText("Welcome to Sketch-A-Etch!", 250, 80);
context.font = "16px sans-serif";
context.fillText("Instructions:", 250, 110);
context.font = "12px sans-serif";
context.fillText("Use your arrow keys to draw.", 250, 130);
context.fillText("Push the 'CLEAR' button to refresh your canvas.", 250, 150);
context.fillText("Or to get rid of these instructions...", 250, 170);
context.fillText("Have fun 🙃", 250, 190);
context.moveTo(x, y);
context.lineTo(x, y);
context.stroke();

function draw(_ref) {
  var key = _ref.key;
  context.beginPath();
  context.moveTo(x, y);

  switch (key) {
    case "ArrowLeft":
      x -= moveDistance;
      if (x < 0) x = 0;
      break;

    case "ArrowRight":
      x += moveDistance;
      if (x > width) x = width;
      break;

    case "ArrowUp":
      y -= moveDistance;
      if (y < 0) y = 0;
      break;

    case "ArrowDown":
      y += moveDistance;
      if (y > height) y = height;
      break;

    default:
      break;
  }

  context.lineTo(x, y);
  context.stroke();
} // function rotateDial({key}) {
//   switch(key) {
//     case "ArrowLeft":
//       rightDial.style.transform = 'rotate(-30deg)';
//       break;
//     case "ArrowRight":
//       rightDial.style.transform = 'rotate(30deg)';
//       break;
//     case "ArrowUp":
//       leftDial.style.transform = 'rotate(-30deg)';
//       break;
//     case "ArrowDown":
//       leftDial.style.transform = 'rotate(30deg)';
//       break;
//     default:
//       break;
//   }
// }
// handles key press


function handleKeyDown(event) {
  if (event.key.includes("Arrow")) {
    event.preventDefault();
    draw({
      key: event.key
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
  dialContainer.classList.add('shake');
  betweenButtons.classList.add('shake');
  canvas.addEventListener('animationend', function () {
    headingBorder.classList.remove('shake');
    canvasBorder.classList.remove('shake');
    canvas.classList.remove('shake');
    shakeButton.classList.remove('shake');
    dialContainer.classList.remove('shake');
    betweenButtons.classList.remove('shake');
  }), {
    once: true
  };
} // window.addEventListener("keypress", rotateDial)


window.addEventListener("keydown", handleKeyDown);
shakeButton.addEventListener("click", clearSketch);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map