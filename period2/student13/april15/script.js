document.addEventListener('DOMContentLoaded', () => {
    let StartAnimation = document.getElementById('start-animation')
    StartAnimation.addEventListener('click', () => {
        gsap.to(".box-1",
            { y: 200, duration: 1, delay: 0.5, ease: "power1.in", yoyo: true, repeat: 1 })

        gsap.to(".box-2", { y: 300, duration: 1, delay: 0.5, ease: "power2.in", yoyo: true, repeat: 1 })

        gsap.to(".box-3", { y: 300, duration: 1, delay: 0.5, ease: "circ.inOut", yoyo: true, repeat: 1 })

        gsap.to(".box-4", { y: 300, duration: 1, delay: 0.5, ease: "bounce.out", yoyo: true, repeat: 1 })

        gsap.to(".box-5", { y: 300, duration: 1, delay: 0.5, ease: "elastic.inOut", yoyo: true, repeat: 1 })

        gsap.to(".box-6", { y: 300, duration: 1, delay: 0.5, ease: "expo.inOut", yoyo: true, repeat: 1 })

        gsap.to(".box-7", { y: 300, duration: 1, delay: 0.5, ease: "sine.inOut", yoyo: true, repeat: 1 })

        gsap.to(".box-8", { y: 300, duration: 1, delay: 0.5, ease: "steps(20).inOut", yoyo: true, repeat: 1 })

        gsap.to(".box-9", { y: 300, duration: 1, delay: 0.5, ease: "back.inOut", yoyo: true, repeat: 1 })

        gsap.to(".box-10", { y: 300, duration: 1, delay: 0.5, ease: "power3.inOut", yoyo: true, repeat: 1 })
    })
})