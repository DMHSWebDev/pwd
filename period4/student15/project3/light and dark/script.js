let theme_toggle = document.getElementById('theme-toggle');
let dark_mode = false;

theme_toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (dark_mode) {
        dark_mode = false;
        theme_toggle.innerText = 'Light Mode';
    } else {
        dark_mode = true;
        theme_toggle.innerText = 'Dark Mode'
    }





});