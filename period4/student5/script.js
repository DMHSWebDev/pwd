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

window.addEventListener('scroll', function () {
    let nav = this.document.querySelector('nav');
    let text = document.querySelector('.title h1');
    let links = document.querySelectorAll('.nav-links li a');

    console.log(text);
    console.log(links);

    if (this.window.scrollY > 50) {
        console.log('scrolled 50px');
        nav.style.backgroundColor = '#ffffff00';
        text.style.color = '#ffffff'
        links[0].style.color = '#ffffff'
        links[1].style.color = '#ffffff'
        links[2].style.color = '#ffffff'
        links[3].style.color = '#ffffff'
    }
    else {
        nav.style.backgroundColor = '#ffffff'
        text.style.color = '#008080'
        links[0].style.color = '#008080'
        links[1].style.color = '#008080'
        links[2].style.color = '#008080'
        links[3].style.color = '#008080'
    }
});