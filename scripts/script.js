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
