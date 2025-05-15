document.addEventListener('DOMContentLoaded', function () {
    gsap.from('#parks-logo', {
        duration: 2,
        scale: 0,
        opacity: 1,
        y: -300,
        ease: 'power3.out'
    })

    gsap.from('.hero-text', {
        opacity: 1,
        duration: 3,
        y: -300,
        ease: 'power3.out'
    })

})