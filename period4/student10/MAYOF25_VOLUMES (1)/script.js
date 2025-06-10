document.addEventListener('DOMContentLoaded', function () {
    gsap.from('#mainH1', {
        duration: 3,
        scale: 0,
        opacity: 0,
        y: -300,
        ease: 'power3.out'
    })

    gsap.from('#mainH6', {
        duration: 3,
        scale: 0,
        opacity: 0,
        y: -300,
        ease: 'power3.out'
    })
})