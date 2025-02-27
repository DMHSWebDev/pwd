console.log('Period 4/5')

let menu_toggle = document.getElementById('menu-toggle');

console.log(menu_toggle);

let nav_links = document.querySelector('.nav-links');
console.log(nav_links);

menu_toggle.addEventListener('click', function () {
    console.log('clicked');
    nav_links.classList.toggle('open');

});

document.addEventListener('click', (event) => {
    if (nav_links.classList.contains('open') && event.target !== menu_toggle) {
        nav_links.classList.remove('open');
    }
})

let previous = document.getElementById('previous');
let next = document.getElementById('next');
let images = document.querySelectorAll('.carousel-images img')
let index = 0;
let carousel = document.querySelector('.carousel-images');

previous.addEventListener('click', () => {
    if (index === 0) {
        index = images.length - 1;
    } else {
        index = index - 1;
    }
    carousel.style.transform = `translateX(-${index * 800}px)`

})
next.addEventListener('click', () => {
    if (index === images.length - 1) {
        index = 0;
    } else {
        index = index + 1;
    }
    carousel.style.transform = `translateX(-${index * 800}px)`
});