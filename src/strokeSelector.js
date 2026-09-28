import { setLineWidth } from "./canvas.js";

const strokes = [
  { className: "thin-stroke", width: 2 },
  { className: "medium-stroke", width: 5 },
  { className: "thick-stroke", width: 7 },
];

export function initStrokeSelector() {
  const strokeSelector = document.querySelector(".stroke-selector");

  const entries = strokes
    .map(({ className, width }) => ({ el: document.querySelector(`.${className}`), width }))
    .filter(({ el }) => el);

  strokeSelector.addEventListener("click", (event) => {
    const match = entries.find(({ el }) => el === event.target);
    if (!match) return;
    setLineWidth(match.width);
    entries.forEach(({ el }) => {
      el.style.border = el === match.el ? "1px solid red" : "1px solid white";
    });
  });
}
