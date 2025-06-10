document.addEventListener('DOMContentLoaded', function () {
    let startBtn = this.getElementById('win-btn')
    let nav = this.getElementById('nav')

    let portWindows = this.querySelector('.port-windows')


    gsap.registerPlugin(Draggable, InertiaPlugin)

    // make windows grabbable

    Draggable.create(".win-top", {
        bounds: ".main",
        inertia: true
    });

    // window load animations

    gsap.to("#welcome",
        {
            ease: "sine.inOut",
            y: 0,
            opacity: 1,
            duration: 0.75,
        }
    );


    startBtn.addEventListener('click', function () {
        gsap.to("#welcome", {
            ease: "power.inOut",
            y: -35,
            opacity: 0,
            duration: 0.75,
            "display": "none",
        })


        gsap.to("#nav", {
            ease: "power.inOut",
            y: 0,
            duration: 1,
            delay: 0.25
        })


        gsap.to("#about", {
            delay: .75,
            display: "flex",
            ease: "power.inOut",
            x: -700,
            y: -195,
            opacity: 1,
            duration: 1.25,
        })
    })
})

