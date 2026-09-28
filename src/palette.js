export const colors = [
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

export const strokes = [
  { className: "thin-stroke", width: 2 },
  { className: "medium-stroke", width: 5 },
  { className: "thick-stroke", width: 7 },
];

export function toLabel(className) {
  return className
    .split("-")
    .map((word, i) => (i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word))
    .join(" ");
}
