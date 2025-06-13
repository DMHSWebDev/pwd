document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.lc', {
        scrollTrigger: '.lc',
        y: 800,
        duration: 1
    })
    gsap.from('.ty', {
        scrollTrigger: '.ty',
        x: 1000,
        duration: 1
    });
    gsap.from('.ac', {
        scrollTrigger: '.ac',
        x: 1000,
        duration: 1
    })
})