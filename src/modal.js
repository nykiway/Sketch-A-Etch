// Left Modal:

// Get the modal
var leftModal = document.getElementById("myModal-left");

// Get the button that opens the modal
var btn = document.getElementById("dial-left");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-left")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  leftModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  leftModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == leftModal) {
    leftModal.style.display = "none";
  }
};
