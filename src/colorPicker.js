import { setColor } from "./canvas.js";

const colors = [
  { className: "dark-blue", hex: "#090446", border: "#060230" },
  { className: "blue", hex: "#577590", border: "#486177" },
  { className: "green-blue", hex: "#43AA8B", border: "#368e73" },
  { className: "green", hex: "#90BE6D", border: "#80a762" },
  { className: "yellow", hex: "#F9C74F", border: "#ddaf44" },
  { className: "orange-yellow", hex: "#F8961E", border: "#d88219" },
  { className: "orange", hex: "#F3722C", border: "#d16023" },
  { className: "red", hex: "#F94144", border: "#da373a" },
  { className: "black", hex: "#000000", border: "#d3d3d3" },
  { className: "grey", hex: "#808080", border: "#d3d3d3" },
  { className: "white", hex: "#FFFFFF", border: "#d3d3d3" },
];

export function initColorPicker() {
  const colorPicker = document.querySelector(".color-picker");
  const currentColor = document.querySelector(".current-color-circle");

  const choicesByElement = new Map(
    colors
      .map(({ className, hex, border }) => [document.querySelector(`.${className}`), { hex, border }])
      .filter(([el]) => el)
  );

  colorPicker.addEventListener("click", (event) => {
    const choice = choicesByElement.get(event.target);
    if (!choice) return;
    setColor(choice.hex);
    currentColor.style.backgroundColor = choice.hex;
    currentColor.style.borderColor = choice.border;
  });
}
