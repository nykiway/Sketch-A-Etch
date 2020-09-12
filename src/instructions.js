// Handles Drop Down Functionality for Instructions

const dropdownBtn = document.querySelector('.dropdown-btn');
const instructionsContent = document.querySelector('.instructions-content');
const strokeMenu = document.querySelector('.stroke-selector')

dropdownBtn.addEventListener('click', () => {
  if (instructionsContent.style.display === "") {
    instructionsContent.style.display = "block";
    strokeMenu.style.display = "none";
  } else {
    instructionsContent.style.display = "";
    strokeMenu.style.display = "block";
  }
})