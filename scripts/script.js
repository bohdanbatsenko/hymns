document.addEventListener('DOMContentLoaded', () => {

  const mobileNav = document.querySelector(".hamburger");
  const navbar = document.querySelector(".menubar");
  const menuLinks = navbar.querySelectorAll("a");
  const allHymnItems = document.querySelectorAll(".hymn-item");

  const toggleNav = () => {
    navbar.classList.toggle("active");
    mobileNav.classList.toggle("hamburger-active");
  };

  mobileNav.addEventListener("click", () => {
    toggleNav()
  }
);

  menuLinks.forEach(link => {
    link.addEventListener("click", (e) => {

      allHymnItems.forEach(hymnItem => {
        if (hymnItem.classList.contains('js-item-active')) {
          hymnItem.classList.remove('js-item-active')
        }
      })
      
      const currentHref = e.currentTarget.getAttribute('href');
      const targetId = currentHref.startsWith('#') ? currentHref.slice(1) : currentHref;
      const currentHymn = document.getElementById(targetId);
      
      if (currentHymn.classList.contains('js-item-active')) {
        currentHymn.classList.remove('js-item-active')
      } else {
        setTimeout(() => {
          currentHymn.classList.add('js-item-active')
        }, 100);
      }

      if (navbar.classList.contains("active")) {
        toggleNav();
      }

      setTimeout(() => {
        window.scrollBy(0, -60);
      }, 100);

    });
  });

  document.querySelector('.main').addEventListener('click', (e) => {
      if (navbar.classList.contains("active")) {
        toggleNav();
      }
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


  const els = document.querySelectorAll('.hymn-item');
  const options = {
    root: null,
    rootMargin: '10px',
    threshold: .05
  }

  const cb = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('js-item-active')
      } else {
        entry.target.classList.remove('js-item-active')
      }
    })
  }

  let observer = new IntersectionObserver(cb, options);

  els.forEach(el => {
    observer.observe(el)
  })

});