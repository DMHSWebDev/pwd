document.addEventListener('DOMContentLoaded', () => {
    let slides = document.querySelector('.slides');
    let images = document.querySelectorAll('.slides img');
    console.log(images)
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    let lightbox = document.querySelector('.lightbox');
    console.log(images);

    let idx = 0;

    function showSlide(i) {
        if (i < 0) {
            idx = images.length - 1;
        } else if (1 >= images.length - 1) {
            idx = 0;
        }
        const imgWidth = images[0].clientWidth;
        slides.style.transform = `translatex(${-idx * imgWidth}px)`;
    }

    next.addEventListener('click', () => {
        console.log("next")
        idx++;
        showSlide(idx);
    })

    prev.addEventListener('click', () => {
        idx--;
        showSlide(idx);
    })

    images.forEach(img => {
        img.addEventListener('click', function () {
            let lightboxImg = document.querySelector('.lightbox-img')
            lightboxImg.src = this.src;
            lightbox.style.display = 'flex';
        })
    })


    let closeLightbox = document.querySelector('.close');
    closeLightbox.addEventListener('click', function () {
        lightbox.style.display = 'none';
    })
});