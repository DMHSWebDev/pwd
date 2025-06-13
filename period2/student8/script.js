document.addEventListener('DOMContentLoaded', function () {
    console.log('script loaded')
    gsap.registerPlugin(CustomEase, CustomWiggle)
    gsap.registerPlugin(Physics2DPlugin)

    CustomWiggle.create("myWiggle", { wiggles: 15 });

    let wiggleBtn = document.getElementById('wiggle-btn');
    console.log(wiggleBtn)
    wiggleBtn.addEventListener('mouseover', function () {
        console.log('mouseover')
        gsap.to("#wiggle-btn", {
            duration: 1,
            rotation: 30,
            ease: "myWiggle",
            onComplete: function () {
                gsap.to("#wiggle-btn", {
                    duration: 0,
                    rotation: 0
                })
            }
        });
    })
})

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.house', {
        scrollTrigger: '.house',
        y: 800,
        duration: 1
    })
    gsap.from('.thanks', {
        scrollTrigger: '.thanks',
        x: 1000,
        duration: 1
    });
    gsap.from('.info', {
        scrollTrigger: '.info',
        x: 1000,
        duration: 1
    })

})