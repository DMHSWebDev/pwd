const lightbox = document.getElementById('lightbox');
console.log(lightbox);
const lightboxImg = document.getElementById('lightbox-img');
console.log(lightboxImg);
const lightboxClose = document.querySelector('.lightbox-close')
console.log(lightboxClose);
const images = document.querySelectorAll('.lightbox-image');
console.log(images);



images.forEach(img => {
    img.addEventListener('click', function () {
        lightbox.style.display = 'flex';
        lightboxImg.src = this.src;

    });
});


lightboxClose.addEventListener('click', function () {
    lightbox.style.display = 'none';
    lightboxImg.src = this.src;

});