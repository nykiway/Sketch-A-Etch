export function initModal() {
  const rightModal = document.querySelector(".modal-right");
  const rightBtn = document.querySelector(".dial-right");
  const otherProjectsBtn = document.querySelector(".other-projects");

  rightBtn.addEventListener("click", () => {
    rightModal.style.display = "block";
  });

  window.addEventListener("click", (event) => {
    if (event.target === rightModal) {
      rightModal.style.display = "none";
    }
  });

  if (otherProjectsBtn) {
    otherProjectsBtn.addEventListener("click", () => {
      window.open("https://github.com/nykiway", "_blank", "noopener");
    });
  }
}
