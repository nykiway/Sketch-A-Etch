import { makePressable } from "./a11y.js";

export function initModal() {
  const rightModal = document.querySelector(".modal-right");
  const rightBtn = document.querySelector(".dial-right");
  const otherProjectsBtn = document.querySelector(".other-projects");

  const openModal = () => {
    rightModal.style.display = "block";
  };

  const closeModal = () => {
    rightModal.style.display = "none";
  };

  makePressable(rightBtn, openModal);

  window.addEventListener("click", (event) => {
    if (event.target === rightModal) closeModal();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && rightModal.style.display === "block") closeModal();
  });

  if (otherProjectsBtn) {
    otherProjectsBtn.addEventListener("click", () => {
      window.open("https://github.com/nykiway", "_blank", "noopener");
    });
  }
}
