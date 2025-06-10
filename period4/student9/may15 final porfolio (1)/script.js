document.addEventListener('DOMContentLoaded', function () {
    let menu_toggle = document.getElementById('menuToggle');
    let nav_links = document.querySelector('.nav-links');

    menu_toggle.addEventListener('click', () => {
        nav_links.classList.toggle('active');
    });




    let links = document.querySelectorAll('.nav-links a')
    console.log(links)
    links.forEach(link => {
        link.addEventListener('click', function () {
            nav_links.classList.remove('active')
        })
    })






    gsap.from('.left-image', {
        duration: 4,
        delay: 10,
        opacity: 0
    })
    gsap.from('.right-image', {
        duration: 4,
        delay: 10,
        opacity: 0
    })
}); 
