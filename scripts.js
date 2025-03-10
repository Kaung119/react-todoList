let lastScrollY = window.scrollY;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    // Scroll down - hide header
    header.style.top = "-100px";
  } else {
    // Scroll up - show header
    header.style.top = "0";
  }
  lastScrollY = window.scrollY;
});
