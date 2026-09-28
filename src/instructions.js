export function initInstructions() {
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const instructionsContent = document.querySelector(".instructions-content");
  const strokeMenu = document.querySelector(".stroke-selector");

  dropdownBtn.addEventListener("click", () => {
    const isOpen = instructionsContent.style.display === "block";
    instructionsContent.style.display = isOpen ? "" : "block";
    strokeMenu.style.display = isOpen ? "block" : "none";
  });
}
