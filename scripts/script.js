const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");
const menuLinks = navbar.querySelectorAll("a");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (navbar.classList.contains("active")) {
      toggleNav();
    }

    setTimeout(() => {
      window.scrollBy(0, -80);
    }, 100);
  });
});



const affectedElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");

affectedElements.forEach(function(element) {
  element.dataset.origSize = window.getComputedStyle(element).fontSize;
});

document.querySelector('.js-increase').addEventListener("click", function() {
  changeFontSize(1);
});

document.querySelector('.js-decrease').addEventListener("click", function() {
  changeFontSize(-1);
});

document.querySelector('.js-origin').addEventListener("click", function() {
  affectedElements.forEach(function(element) {
    element.style.fontSize = element.dataset.origSize;
  });
});

function changeFontSize(direction) {
  affectedElements.forEach(function(element) {
    const currentSize = parseInt(window.getComputedStyle(element).fontSize);
    element.style.fontSize = (currentSize + direction) + "px";
  });
}

