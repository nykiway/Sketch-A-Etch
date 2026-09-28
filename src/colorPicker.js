import { setColor } from "./canvas.js";
import { colors, toLabel } from "./palette.js";

export function initColorPicker() {
  const colorPicker = document.querySelector(".color-picker");
  const currentColor = document.querySelector(".current-color-circle");
  const status = document.getElementById("a11y-status");

  const entries = colors
    .map((config) => ({ el: document.querySelector(`.${config.className}`), config }))
    .filter(({ el }) => el);

  entries.forEach(({ el, config }) => {
    el.setAttribute("aria-label", toLabel(config.className));
    el.setAttribute("aria-pressed", "false");
  });

  colorPicker.addEventListener("click", (event) => {
    const match = entries.find(({ el }) => el === event.target);
    if (!match) return;

    const { config } = match;
    setColor(config.hex);
    currentColor.style.backgroundColor = config.hex;
    currentColor.style.borderColor = config.border;

    entries.forEach(({ el }) => el.setAttribute("aria-pressed", el === match.el ? "true" : "false"));
    if (status) status.textContent = `Current color: ${toLabel(config.className)}`;
  });
}
