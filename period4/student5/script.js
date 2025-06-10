document.addEventListener("DOMContentLoaded", function () {
    console.log("Script Loaded")
    let menu_toggle = document.getElementById('menuToggle');
    console.log(menu_toggle);

    let menu = document.querySelector('.mobile-nav-links');
    console.log()

    menu_toggle.addEventListener('click', function () {
        //console.log('Menu clicked!!')
        menu.classList.toggle('open');
    });
});