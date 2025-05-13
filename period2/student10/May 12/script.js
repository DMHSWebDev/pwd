document.addEventListener("DOMContentLoaded", function () {


    function animateClouds() {
        gsap.to("#clouds", {
            duration: 60,
            x: "-50%",
            ease: "none",
            repeat: -1
        });
    }

    function animateGround() {
        gsap.to("#ground", {
            duration: 60,
            x: "-50%",
            ease: "none",
            repeat: -1
        });
    }

    animateClouds();
    animateGround();
});