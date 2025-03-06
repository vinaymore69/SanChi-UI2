

const menu = document.getElementById("menu-icon");
const menuPage = document.getElementById("nav-part3");
const menuLinks = document.querySelectorAll("#mobile-nav a");
let menuStatus = false;

// Function to disable scrolling
function disableScroll() {
  document.body.style.overflow = "hidden";
  document.body.style.height = "100vh"; // Prevents scrolling
}

// Function to enable scrolling
function enableScroll() {
  document.body.style.overflow = "";
  document.body.style.height = ""; // Resets the height
}

// Toggle menu when the menu icon is clicked
menu.addEventListener("click", function () {
  if (menuStatus) {
    menuPage.style.left = "-100vw";
    enableScroll();
  } else {
    menuPage.style.left = "0vw";
    disableScroll();
  }
  menuStatus = !menuStatus;
});

// Close the menu when any link is clicked
menuLinks.forEach(link => {
  link.addEventListener("click", function () {
    menuPage.style.left = "-100vw";
    enableScroll(); 
    menuStatus = false;
  });
});




//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
