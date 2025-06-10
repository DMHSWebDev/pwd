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

    let images = document.querySelectorAll(".grid-gallery img");

    images.forEach(function (img) {

        img.addEventListener("click", function () {
            let lightbox = document.getElementById("lightbox");
            let lightboxImg = document.getElementById("lightbox-image");
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.style.display = "block";
        });
    });

    document.getElementById("close-lightbox").addEventListener("click", function () {
        document.getElementById("lightbox").style.display = "none";
    });
});