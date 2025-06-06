document.addEventListener('DOMContentLoaded', function () {

    window.addEventListener('scroll', function () {
        const nav = document.querySelector('nav');
        if (window.scrollY > 500) {
            nav.classList.add('navbar-scrolled');
        } else {
            nav.classList.remove('navbar-scrolled');
        }
    });

    gsap.from(".hometext h1", {
        opacity: 0,
        y: 50,
        duration: 3
    });

    gsap.from(".hometext h2", {
        opacity: 0,
        y: 50,
        duration: 3,
        delay: 1
    });

});
