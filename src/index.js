const canvas = document.querySelector("#sketch-a-etch");
const canvasBorder = document.querySelector(".canvas-border");
const dialContainer = document.querySelector(".dial-container");
const headingBorder = document.querySelector(".heading-border");
const shakeButton = document.querySelector(".shake-button");
const betweenButtons = document.querySelector(".between-buttons");
const leftDial = document.querySelector(".dial-left");
const rightDial = document.querySelector(".dial-right");

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
context.textAlign = "center";

context.beginPath();
context.font = "20px sans-serif";
context.fillText("Welcome to Sketch-A-Etch!", 250, 80)
context.font = "16px sans-serif";
context.fillText("Instructions:", 250, 110); 
context.font = "12px sans-serif"
context.fillText("Use your arrow keys to draw.", 250, 130)
context.fillText("Push the 'CLEAR' button to refresh your canvas.", 250, 150)
context.fillText("Or to get rid of these instructions...", 250, 170)
context.fillText("Have fun 🙃", 250, 190)
context.moveTo(x, y);
context.lineTo(x, y);
context.stroke();

function draw({ key }) {
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
  betweenButtons.classList.add('shake');
  canvas.addEventListener('animationend', function() {
    headingBorder.classList.remove('shake');
    canvasBorder.classList.remove('shake');
    canvas.classList.remove('shake');
    shakeButton.classList.remove('shake');
    dialContainer.classList.remove('shake');
    betweenButtons.classList.remove('shake');
  }), { once: true };
}

window.addEventListener("keydown", handleKeyDown);
shakeButton.addEventListener("click", clearSketch);