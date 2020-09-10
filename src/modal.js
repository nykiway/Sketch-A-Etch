let rightModal = document.querySelector(".modal-right");
let rightBtn = document.querySelector(".dial-right");
let rightSpan = document.querySelector(".close-right");

rightBtn.onclick = function () {
  rightModal.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == rightModal) {
    rightModal.style.display = "none";
  }
};