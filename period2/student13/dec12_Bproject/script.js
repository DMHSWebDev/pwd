// nav part

let menu_toggle = document.getElementById('menuToggle')
console.log(menu_toggle);

let menu = document.querySelector('.mobile-nav-links');
console.log(menu);

menu_toggle.addEventListener('click', function () {
    console.log('clicked');
    menu.classList.toggle('open');
});

// clock part

let clock = document.getElementById('clock');
// console.log(clock);

function updateClock() {
    const date = new Date();
    // console.log(date);

    clock.innerText = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

    setTimeout(updateClock, 1000);
}
updateClock();

// slideshow part

const videos = document.querySelectorAll('.carousel-videos video');
console.log(videos);

const previous = document.getElementById('prev');
console.log(previous);

const next = document.getElementById('next');
console.log(next);


let carousel = document.querySelector('.carousel-videos');
console.log(carousel);

let index = 0;

previous.addEventListener('click', () => {
    console.log('previous');
    if (index <= 0) {
        index = videos.length - 1;
    } else {
        index = index - 1;
    }
    carousel.style.transform = `translateX(-${index * 1600}px)`;
});

next.addEventListener('click', () => {
    console.log('next');
    if (index >= videos.length - 1) { index = 0; } else { index = index + 1 }
    console.log(index);
    carousel.style.transform = `translateX(-${index * 1600}px)`;
});

// form part

const registration_form = document.getElementById('registration-form');
console.log(registration_form);

registration_form.addEventListener('submit', function (event) {

    event.preventDefault();
    console.log('form button clicked');

    let password = document.getElementById('password');
    console.log(password.value);

    let confirm_password = document.getElementById('confirm-password');
    console.log(confirm_password.value);

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let error = document.getElementById('password-error');

    if (password.value !== confirm_password.value) {
        console.log('password does not match!');
        error.textContent = 'PASSWORDS DO NOT MATCH!'
    } else {
        console.log('passwords match!');
        error.textContent = '';
        if (passwordPattern.test(password.value)) {
            console.log('password is strong and meets criteria');
            error.textContent = '';
            registration_form.reset();
        }

        else {
            error.textContent = 'PASSWORD IS WEAK AND DOES NOT MEET CRITERIA';
            console.log('password is weak and doesnt meet criteria');
        };

        console.log('password test:' + passwordPattern.test(password.value));
    }
});