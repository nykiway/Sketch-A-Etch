export const canvas = document.querySelector("#sketch-a-etch");
export const context = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;
const arrowKeyStep = 3;
const shakeDurationMs = 500;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
let isDrawing = false;
let shakeTimeoutId = null;

context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 2;
context.strokeStyle = "#000000";
context.textAlign = "center";

const shakeTargets = [
  ".heading-border",
  ".canvas-border",
  "#sketch-a-etch",
  ".shake-button",
  ".dial-container",
  ".between-buttons",
].map((selector) => document.querySelector(selector)).filter(Boolean);

function drawWelcomeMessage() {
  context.save();
  context.fillStyle = "#000000";
  context.font = "20px sans-serif";
  context.fillText("Welcome to Sketch-A-Etch!", width / 2, 80);
  context.font = "16px sans-serif";
  context.fillText("Instructions:", width / 2, 110);
  context.font = "12px sans-serif";
  context.fillText("Use your arrow keys, mouse, or finger to draw.", width / 2, 130);
  context.fillText("Push the 'CLEAR' button to refresh your canvas.", width / 2, 150);
  context.fillText("Or to get rid of these instructions...", width / 2, 170);
  context.fillText("Have fun 🙃", width / 2, 190);
  context.restore();
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x, y);
  context.stroke();
}

function drawUnicornJoke() {
  clearCanvas();
  context.save();
  context.strokeStyle = "#000000";
  context.fillStyle = "#000000";
  context.lineWidth = 2;
  context.textAlign = "center";

  const top = { x: width / 2, y: 100 };
  const left = { x: width / 2 - 55, y: 180 };
  const right = { x: width / 2 + 55, y: 180 };
  const radius = 60;

  [top, left, right].forEach(({ x: cx, y: cy }) => {
    context.beginPath();
    context.arc(cx, cy, radius, 0, Math.PI * 2);
    context.stroke();
  });

  context.font = "13px sans-serif";
  context.fillText("Codes Well", top.x, top.y - radius - 10);
  context.fillText("Great w/ People", left.x - 20, left.y + radius + 18);
  context.fillText("Ships Fast", right.x + 20, right.y + radius + 18);

  context.font = "bold 15px sans-serif";
  context.fillText("YOU?", width / 2, 165);

  context.font = "11px sans-serif";
  context.fillText("(also designs, does QA, and fixes the printer)", width / 2, 272);
  context.font = "italic 11px sans-serif";
  context.fillText("— every job posting, probably", width / 2, 288);

  context.restore();

  x = width / 2;
  y = height - 10;
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x, y);
  context.stroke();
}

function moveTo(nextX, nextY) {
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(nextX, nextY);
  context.stroke();
  x = nextX;
  y = nextY;
}

function getCanvasPoint(event) {
  const rect = canvas.getBoundingClientRect();
  const point = event.touches && event.touches.length ? event.touches[0] : event;
  const scaleX = width / rect.width;
  const scaleY = height / rect.height;
  return {
    x: (point.clientX - rect.left) * scaleX,
    y: (point.clientY - rect.top) * scaleY,
  };
}

function handleKeyDown(event) {
  if (!event.key.includes("Arrow")) return;
  event.preventDefault();

  let nextX = x;
  let nextY = y;
  switch (event.key) {
    case "ArrowLeft":
      nextX = Math.max(0, x - arrowKeyStep);
      break;
    case "ArrowRight":
      nextX = Math.min(width, x + arrowKeyStep);
      break;
    case "ArrowUp":
      nextY = Math.max(0, y - arrowKeyStep);
      break;
    case "ArrowDown":
      nextY = Math.min(height, y + arrowKeyStep);
      break;
    default:
      return;
  }
  moveTo(nextX, nextY);
}

function handlePointerDown(event) {
  event.preventDefault();
  isDrawing = true;
  const point = getCanvasPoint(event);
  x = point.x;
  y = point.y;
}

function handlePointerMove(event) {
  if (!isDrawing) return;
  event.preventDefault();
  const point = getCanvasPoint(event);
  moveTo(point.x, point.y);
}

function handlePointerUp() {
  isDrawing = false;
}

export function setColor(hex) {
  context.strokeStyle = hex;
}

export function setLineWidth(lineWidth) {
  context.lineWidth = lineWidth;
}

export function clearCanvas() {
  context.clearRect(0, 0, width, height);
}

export function shakeSketch() {
  shakeTargets.forEach((el) => el.classList.add("shake"));
  clearTimeout(shakeTimeoutId);
  shakeTimeoutId = setTimeout(() => {
    shakeTargets.forEach((el) => el.classList.remove("shake"));
  }, shakeDurationMs);
}

export function clearSketch() {
  shakeSketch();
  clearCanvas();
}

function showUnicornJoke() {
  shakeSketch();
  drawUnicornJoke();
}

export function initCanvas() {
  drawWelcomeMessage();

  window.addEventListener("keydown", handleKeyDown);

  canvas.addEventListener("mousedown", handlePointerDown);
  canvas.addEventListener("mousemove", handlePointerMove);
  window.addEventListener("mouseup", handlePointerUp);

  canvas.addEventListener("touchstart", handlePointerDown, { passive: false });
  canvas.addEventListener("touchmove", handlePointerMove, { passive: false });
  canvas.addEventListener("touchend", handlePointerUp);
  canvas.addEventListener("touchcancel", handlePointerUp);

  document.querySelector(".shake-button").addEventListener("click", clearSketch);

  const dialLeft = document.querySelector(".dial-left");
  if (dialLeft) {
    dialLeft.addEventListener("click", showUnicornJoke);
  }
}
