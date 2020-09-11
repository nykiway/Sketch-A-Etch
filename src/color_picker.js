const darkBlue = document.querySelector(".dark-blue");
const blue = document.querySelector(".blue");
const greenBlue = document.querySelector(".green-blue");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");
const orangeYellow = document.querySelector(".orange-yellow");
const orange = document.querySelector(".orange");
const red = document.querySelector(".red");
const black = document.querySelector(".black");
const grey = document.querySelector(".grey");
const white = document.querySelector(".white");

const colorPicker = document.querySelector(".color-picker");
const currentColor = document.querySelector(".current-color-circle");

function chooseColor(event) {
  switch (event.target) {
    case darkBlue:
      context.strokeStyle = "#090446";
      currentColor.style.backgroundColor = "#090446";
      currentColor.style.borderColor = "#060230";
      break;
    case blue:
      context.strokeStyle = "#577590";
      currentColor.style.backgroundColor = "#577590";
      currentColor.style.borderColor = "#486177";
      break;
    case greenBlue:
      context.strokeStyle = "#43AA8B";
      currentColor.style.backgroundColor = "#43AA8B";
      currentColor.style.borderColor = "#368e73";
      break;
    case green:
      context.strokeStyle = "#90BE6D";
      currentColor.style.backgroundColor = "#90BE6D";
      currentColor.style.borderColor = "#80a762";
      break;
    case yellow:
      context.strokeStyle = "#F9C74F";
      currentColor.style.backgroundColor = "#F9C74F";
      currentColor.style.borderColor = "#ddaf44";
      break;
    case orangeYellow:
      context.strokeStyle = "#F8961E";
      currentColor.style.backgroundColor = "#F8961E";
      currentColor.style.borderColor = "#d88219";
      break;
    case orange:
      context.strokeStyle = "#F3722C";
      currentColor.style.backgroundColor = "#F3722C";
      currentColor.style.borderColor = "#d16023";
      break;
    case red:
      context.strokeStyle = "#F94144";
      currentColor.style.backgroundColor = "#F94144";
      currentColor.style.borderColor = "#da373a";
      break;
    case black:
      context.strokeStyle = "#000000";
      currentColor.style.backgroundColor = "#000000";
      currentColor.style.borderColor = "#d3d3d3";
      break;
    case grey:
      context.strokeStyle = "#808080";
      currentColor.style.backgroundColor = "#808080";
      currentColor.style.borderColor = "#d3d3d3";
      break;
    case white:
      context.strokeStyle = "#FFFFFF";
      currentColor.style.backgroundColor = "#FFFFFF";
      currentColor.style.borderColor = "#d3d3d3";
      break;
    default:
      break;
  }
}

colorPicker.addEventListener("click", chooseColor);
