import { setLineWidth } from "./canvas.js";
import { strokes, toLabel } from "./palette.js";

export function initStrokeSelector() {
  const strokeSelector = document.querySelector(".stroke-selector");
  const status = document.getElementById("a11y-status");

  const entries = strokes
    .map((config) => ({ el: document.querySelector(`.${config.className}`), config }))
    .filter(({ el }) => el);

  entries.forEach(({ el, config }) => {
    el.setAttribute("aria-label", toLabel(config.className));
    el.setAttribute("aria-pressed", "false");
  });

  strokeSelector.addEventListener("click", (event) => {
    const match = entries.find(({ el }) => el === event.target);
    if (!match) return;

    const { config } = match;
    setLineWidth(config.width);

    entries.forEach(({ el }) => {
      const selected = el === match.el;
      el.style.border = selected ? "1px solid red" : "1px solid white";
      el.setAttribute("aria-pressed", selected ? "true" : "false");
    });

    if (status) status.textContent = `Stroke width: ${toLabel(config.className)}`;
  });
}
