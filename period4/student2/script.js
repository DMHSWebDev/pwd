let menu_toggle = document.getElementById('menu-toggle');
console.log(menu_toggle)
let nav_links = document.querySelector('.nav-links')

menu_toggle.addEventListener('click', () => {
    console.log('clicked')
    nav_links.classList.toggle('open')
})