const canvas = document.querySelector("#sketch-a-etch");
const canvasBorder = document.querySelector(".canvas-border");
const dialContainer = document.querySelector(".dial-container");
const headingBorder = document.querySelector(".heading-border");
const shakeButton = document.querySelector(".shake-button");

const context = canvas.getContext("2d");
const moveDistance = 2;

const height = canvas.height;
const width = canvas.width;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 2;
context.strokeStyle = "#000000";

context.beginPath();
context.moveTo(x, y);
context.lineTo(x, y);
context.stroke();

function draw({ key }) {
  context.beginPath();
  context.moveTo(x, y);
  switch (key) {
    case "ArrowLeft":
      x -= moveDistance;
      break;
    case "ArrowRight":
      x += moveDistance;
      break;
    case "ArrowUp":
      y -= moveDistance;
      break;
    case "ArrowDown":
      y += moveDistance;
      break;
    default:
      break;
  }
  context.lineTo(x, y);
  context.stroke();
}

// handles key press
function handleKeyDown(event) {
  if (event.key.includes("Arrow")) {
    event.preventDefault();
    draw({ key: event.key });
  }
}

// clears canvas
function clearSketch() {
  shakeSketch();
  context.clearRect(0, 0, width, height);
}

// handles shake animation
function shakeSketch() {
  headingBorder.classList.add('shake');
  canvasBorder.classList.add('shake');
  canvas.classList.add('shake');
  shakeButton.classList.add('shake');
  dialContainer.classList.add('shake');
  canvas.addEventListener('animationend', function() {
    headingBorder.classList.remove('shake');
    canvasBorder.classList.remove('shake');
    canvas.classList.remove('shake');
    shakeButton.classList.remove('shake');
    dialContainer.classList.remove('shake');
  }), { once: true };
}

window.addEventListener("keydown", handleKeyDown);
shakeButton.addEventListener("click", clearSketch);