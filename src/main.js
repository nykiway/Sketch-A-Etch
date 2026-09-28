import { initCanvas } from "./canvas.js";
import { initColorPicker } from "./colorPicker.js";
import { initStrokeSelector } from "./strokeSelector.js";
import { initModal } from "./modal.js";
import { initInstructions } from "./instructions.js";

function init() {
  initCanvas();
  initColorPicker();
  initStrokeSelector();
  initModal();
  initInstructions();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
