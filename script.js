document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.button-30:not(.home-button)');

    buttons.forEach((button, index) => {
        setTimeout(() => {
            if (index % 2 === 0) {
                button.classList.add('slide-in-left');
            } else {
                button.classList.add('slide-in-right');
            }
        }, index * 200); // Stagger the animations by 200ms
    });


    function updateClock() {
        const clock = document.getElementById('clock');
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        hours = hours < 10 ? hours : String(hours).padStart(2, '0');
        clock.textContent = `${hours}:${minutes}:${seconds}`;
    }
    setInterval(updateClock, 1000);
    updateClock(); // Initial call to display the clock immediately

    let menu_toggle = document.querySelector('.mobile-toggle');
    let menu = document.querySelector('nav ul');
    menu_toggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});