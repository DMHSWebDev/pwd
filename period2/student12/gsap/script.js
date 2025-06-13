document.addEventListener('DOMContentLoaded', function () {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger)

    gsap.to('#hero-text h1', {
        duration: 2,
        text: "Animated Text using GSAP",
        ease: "Power2.out",
    });
    gsap.to('#hero-text h2', {
        duration: 2,
        delay: 3,
        text: "Using the Text Plugin to apply this animation",
        ease: "Power2.out",
    });



    gsap.from('#contact-form', {
        ScrollTrigger: '#contact-form',
        x: -500,
        duration: 2,
    });
});
