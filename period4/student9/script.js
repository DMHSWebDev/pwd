let menu_toggle = document.getElementById('menuToggle');
let nav_links = document.querySelector('.nav-links');

menu_toggle.addEventListener('click', () => {
    nav_links.classList.toggle('active');
});