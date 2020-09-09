const canvas = document.querySelector("#sketch-a-etch");
const canvasBorder = document.querySelector(".canvas-border");
const dialContainer = document.querySelector(".dial-container");
const headingBorder = document.querySelector(".heading-border");
const shakeButton = document.querySelector(".shake-button");

const context = canvas.getContext("2d");
const moveDistance = 10;

const height = canvas.height;
const width = canvas.width;

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = moveDistance;

context.beginPath();
context.moveTo(x, y);
context.lineTo(x, y);
context.stroke();

function draw({ key }) {
  context.beginPath();
  context.moveTo(x, y);
  switch(key) {
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
}

// handles key press
function handleKeyDown(e) {
  if (e.key.includes("Arrow")) {
    e.preventDefault();
    draw({ key: e.key });
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
  canvas.addEventListener('animationend', function() {
    headingBorder.classList.remove('shake');
    canvasBorder.classList.remove('shake');
    canvas.classList.remove('shake');
    shakeButton.classList.remove('shake');
  }), { once: true };
}

window.addEventListener("keydown", handleKeyDown);
shakeButton.addEventListener('click', clearSketch);

