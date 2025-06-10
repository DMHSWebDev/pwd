document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelector('.slides');
    let images = document.querySelectorAll('.slides img');

    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');

    let lightbox = document.getElementById('lightbox');
    let lightboxClose = document.querySelector('.close');
    let lightboxImage = document.querySelector('.lightbox-img');

    let idx = 0;

    function showSlide(i) {
        if (i < 0) {
            idx = images.length - 1;
        } else if (i >= images.length) {
            idx = 0;
        }

        const imgWidth = images[0].clientWidth;
        slides.style.transform = `translateX(${-idx * imgWidth}px)`;

    }

    next.addEventListener('click', function () {
        console.log('click-next')
        idx++;
        showSlide(idx)
    })

    prev.addEventListener('click', function () {
        console.log('click-prev')
        idx--;
        showSlide(idx)
    })


    images.forEach(img => {
        img.addEventListener('click', function () {
            lightbox.style.display = 'flex';
            lightboxImage.src = this.src;
        })

    })

    lightboxClose.addEventListener('click', function () {
        lightbox.style.display = 'none';

    })


})