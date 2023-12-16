// Hamburger-Menu

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerMenu.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );
});

// Navbar

document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 0) {
      navbar.classList.remove("p-3");
      navbar.classList.add("px-3");
    } else {
      navbar.classList.add("p-3");
    }
  });
});

// Test
