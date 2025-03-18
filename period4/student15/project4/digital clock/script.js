let clock = document.getElementById('clock');
console.log(clock);

//'Year:' + (date.getFullYear() + 1) + 'Month:' + (date.getMonth() + 1) + 

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

    clock.innerText = 'The time is:' + hours + ':' + minutes + ':' + seconds;

    setTimeout(updateClock, 1000);

    // console.log(date.getFullYear());

    // console.log(date.getHours());

    // console.log(date.getMinutes());

    // console.log(date)
}

updateClock();
