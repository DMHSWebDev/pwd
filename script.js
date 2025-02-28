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
});