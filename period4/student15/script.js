let theme_toggle = document.getElementById('theme-toggle');
let dark_mode = false;
gsap.registerPlugin(ScrollTrigger)

gsap.from('#image1', {
    scrollTrigger: '#image1',
    delay: 1,
    x: -500
});

gsap.from('#image2', {
    scrollTrigger: '#image2',
    delay: 1,
    x: -600
});


theme_toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (dark_mode) {
        dark_mode = false;
        theme_toggle.innerText = 'Light Mode';
    } else {
        dark_mode = true;
        theme_toggle.innerText = 'Dark Mode'
    }





});

window.addEventListener('scroll', function () {
    const nav = document.querySelector('.nav-box');
    if (window.scrollY > 700) {
        nav.classList.add('navbar-scrolled');


    } else {
        nav.classList.remove('navbar-scrolled')
    }
})