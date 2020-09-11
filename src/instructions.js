const content = document.querySelector(".instructions-content");
const dropDownBtn = document.querySelector(".dropdown-btn");
const dropDown = document.querySelector(".instructions-dropdown");


function showDropdown() {
  if(content.style.display == "block") {
    content.style.display = "none";
  }
  if (dropDown.style.display == "none" || content.style.display == "none" ||) {
    dropDown.style.display = "block";
    content.style.display = "block";

  }
}

dropDownBtn.addEventListener("click", showDropdown);