import { nextArrowPosition, pointerToCanvasPoint, createPenState } from "./geometry.js";
import { makePressable } from "./a11y.js";

export const canvas = document.querySelector("#sketch-a-etch");
export const context = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;
const arrowKeyStep = 3;
const shakeDurationMs = 500;

const pen = createPenState(Math.floor(Math.random() * width), Math.floor(Math.random() * height));
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

function drawDot() {
  const { x, y } = pen.getPosition();
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x, y);
  context.stroke();
}

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
  drawDot();
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

  pen.setPosition(width / 2, height - 10);
  drawDot();
}

function moveTo(nextX, nextY) {
  const { x, y } = pen.getPosition();
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(nextX, nextY);
  context.stroke();
  pen.setPosition(nextX, nextY);
}

function getCanvasPoint(event) {
  const rect = canvas.getBoundingClientRect();
  const point = event.touches && event.touches.length ? event.touches[0] : event;
  return pointerToCanvasPoint(point.clientX, point.clientY, rect, width, height);
}

function handleKeyDown(event) {
  if (!event.key.includes("Arrow")) return;
  event.preventDefault();

  const { x, y } = pen.getPosition();
  const next = nextArrowPosition(event.key, x, y, width, height, arrowKeyStep);
  moveTo(next.x, next.y);
}

function handlePointerDown(event) {
  event.preventDefault();
  isDrawing = true;
  const point = getCanvasPoint(event);
  pen.setPosition(point.x, point.y);
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
    makePressable(dialLeft, showUnicornJoke);
  }
}
