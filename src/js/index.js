// Hamburger-Menu

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerMenu.addEventListener('click', () => mobileMenu.classList.toggle('active'));
})