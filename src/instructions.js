// Handles Drop Down Functionality for Instructions

const dropdownBtn = document.querySelector('.dropdown-btn');
const menuContent = document.querySelector('.instructions-content');

dropdownBtn.addEventListener('click', () => {
  if (menuContent.style.display === "") {
    menuContent.style.display = "block";
  } else {
    menuContent.style.display = "";
  }
})