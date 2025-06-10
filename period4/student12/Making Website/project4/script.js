document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(TextPlugin)
    gsap.registerPlugin(ScrollTrigger)


    gsap.from('#contact-form', {
        scrollTrigger: '#contact-form',
        delay: 2,
        duration: 5,
        x: -1200,
        opacity: 0,
        ease: "elastic.out"
    });

    gsap.to('#hero-heading', {
        duration: 2,
        delay: 2,
        text: "This is the new text",
        ease: "power2.out",
    });

    gsap.to('#hero-message', {
        duration: 2,
        delay: 4,
        text: "This is the new text",
        ease: "power2.out",
    });
})