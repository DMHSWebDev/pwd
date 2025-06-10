document.addEventListener('DOMContentLoaded', function () {
    gsap.from('#hero-heading', {
        opacity: 0,
        duration: 3
    })

    gsap.from('#hero-heading', {
        x: 1000,
        duration: 3,
        ease: "bounce.out",
    })

    gsap.from('#paragraph', {
        opacity: 0,
        duration: 3
    })

    gsap.from('#paragraph', {
        x: 1000,
        duration: 3,
        ease: "bounce.out",
    })


});