document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const nav = document.querySelector('nav');
        if (this.window.scrollY > 500) {
            nav.classList.add('navbar-scrolled');
        }
        else {
            nav.classList.remove('navbar-scrolled');
        }
    })


    gsap.from('#btn', { opacity: 0, duration: 2, ease: 'power2.out', yoy: true, repeat: 1 });
})






