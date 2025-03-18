var about_toggle = document.getElementById('abot');
var about = document.querySelector('.about')
console.log(about_toggle)
console.log(about);

let menutoggle = document.getElementById('menu-toggle');

let nav_links = document.querySelector('.nav-links');

let previous = document.getElementById('previous');

let next = document.getElementById('next');

let images = document.querySelectorAll('.carousel-images img');

let index = 0;
let carousel = document.querySelector('.carousel-images');

let clock = document.getElementById('clock');
console.log(clock);




about_toggle.addEventListener('click', function () {
    console.log('clicked!!!');

    if (about.style.transform === 'translateY(0%)') {
        about.style.transform = 'translateY(-100%)';
    } else {
        about.style.transform = 'translateY(0%)';
    }

});




previous.addEventListener('click', function () {
    if (index === 0) {
        index = images.length - 1;
    } else {
        index = index - 1;
    }
    carousel.style.transform = `translateX(-${index * 600}px)`


});

next.addEventListener('click', function () {
    if (index === images.length - 1) {
        index = 0;
    } else {
        index = index + 1;
    }
    carousel.style.transform = `translateX(-${index * 600}px)`

});


function updateClock() {

    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    clock.innerText = hours + ':' + minutes + ':' + seconds;

    setTimeout(updateClock, 1000);
}

updateClock();

menutoggle.addEventListener('click', function () {
    nav_links.classList.toggle('open');
});

document.addEventListener('click', (event) => {
    if (nav_links.classList.contains('open') && event.target !== menutoggle) {
        nav_links.classList.remove('open');
    }
});







