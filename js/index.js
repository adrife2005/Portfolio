// Hamburger-Menu

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  const body = document.querySelector("body");

  hamburgerMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    body.classList.toggle("overflow");
  });

  document.body.addEventListener("", () => {
    if (window.screenX > 500) {
      mobileMenu.classList.remove("active");
    }
  });
});

// Navbar

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 0) {
      navbar.classList.remove("p-3");
      navbar.classList.add("px-3");
      navbar.classList.add("nav-col");
    } else {
      navbar.classList.remove("nav-col");
      navbar.classList.add("p-3");
    }
  });
});
