window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navigasi");

// Get the offset position of the navbar
var sticky = navigasi.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navigasi.classList.add("sticky")
  } else {
    navigasi.classList.remove("sticky");
  }
}
