document.addEventListener('DOMContentLoaded', () => {

    const images = document.querySelectorAll('.carousel-images img');
    const previous = document.getElementById('prev');
    const next = document.getElementById('next');
    let carousel = document.querySelector('.carousel-images');
    let lightbox = document.getElementById('lightbox');
    let index = 0;


    previous.addEventListener('click', () => {
        console.log('previous');
        if (index <= 0) {
            index = images.length - 1;
        } else {
            index = index - 1;
        }


        console.log(index);
        carousel.style.transform = `translateX(-${index * 600}px)`;
    });


    next.addEventListener('click', () => {
        console.log('next');
        if (index >= images.length - 1) {
            index = 0;
        } else {
            index = index + 1;
        }

        console.log(index);
        carousel.style.transform = `translateX(-${index * 600}px)`;
    });


    images.forEach(img => {
        img.addEventListener('click', function () {
            let lightboxImg = document.querySelector('.lightbox-img');
            lightboxImg.src = this.src;
            lightbox.style.display = 'flex';
        })
    });

    let closeLightBox = document.querySelector('.lightbox-close');
    closeLightBox.addEventListener('click', function () {
        lightbox.style.display = 'none';
    })

});

