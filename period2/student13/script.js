document.addEventListener("DOMContentLoaded", function () {
    let menu_toggle = document.getElementById('menuToggle')
    // console.log(menu_toggle);

    menu_toggle.addEventListener('click', function () {
        let menu = document.getElementById('mobile-nav-links');
        // console.log(menu);

        menu.classList.toggle('open')

    });
})