export function makePressable(el, onActivate) {
  el.setAttribute("role", "button");
  el.setAttribute("tabindex", "0");
  el.addEventListener("click", onActivate);
  el.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
      event.preventDefault();
      onActivate(event);
    }
  });
}
