const thinStroke = document.querySelector(".thin-stroke");
const mediumStroke = document.querySelector(".medium-stroke");
const thickStroke = document.querySelector(".thick-stroke");

const strokeSelector = document.querySelector(".stroke-selector");

function chooseStroke(event) {
  switch(event.target) {
    case thinStroke:
      context.lineWidth = 2;
      thinStroke.style.border = "1px solid red";
      mediumStroke.style.border = "1px solid white";
      thickStroke.style.border = "1px solid white";
      break;
    case mediumStroke:
      context.lineWidth = 5;
      mediumStroke.style.border = "1px solid red";
      thinStroke.style.border = "1px solid white";
      thickStroke.style.border = "1px solid white";
      break;
    case thickStroke:
      context.lineWidth = 7;
      thickStroke.style.border = "1px solid red";
      mediumStroke.style.border = "1px solid white";
      thinStroke.style.border = "1px solid white";
      break;
    default:
      break;
  }
}

strokeSelector.addEventListener("click", chooseStroke);