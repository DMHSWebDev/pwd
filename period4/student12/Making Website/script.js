document.addEventListener("DOMContentLoaded", function () {
    console.log('console loaded');

    let menu_toggle = document.getElementById('menu-toggle');

    console.log('menu-toggle');

    let nav_links = document.querySelector('.nav-links ul');
    console.log('nav_links');

    menu_toggle.addEventListener('click', function () {
        console.log('clicked');
        nav_links.classList.toggle('open');
    });

    document.addEventListener('click', (event) => {
        if (nav_links.classList.contains('open') && event.target !== menu_toggle) {
            nav_links.classList.remove('open');
        }
    });


    // window.addEventListener('scroll', function () {
    //     const nav = document.querySelector('nav');
    //     if (this.window.scrollY > 500) {
    //         nav.classList.add('navabar-scrolled');
    //     } else {
    //         nav.classList.remove
    //             ('navbar-scrolled')
    //     }
    // })
})