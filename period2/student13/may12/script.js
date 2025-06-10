document.addEventListener("DOMContentLoaded", function () {
    function animateStars() {
        gsap.to("#stars", {
            duration: 50,
            x: "-50%",
            ease: "none",
            repeat: -1
        })
    } animateStars();

    function animateGround() {
        gsap.to("#ground", {
            duration: 50,
            x: "-50%",
            ease: "none",
            repeat: -1
        })
    } animateGround();

})