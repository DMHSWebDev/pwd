let no_sound = document.getElementById('controls');
console.log(no_sound);

let sound = document.getElementById('pause');
console.log(sound);

let audio = document.getElementById('music');
console.log(audio);

let play = false
let pause = false

setTimeout(() => {
    let pic = document.querySelector('.image1');
    console.log(pic);


    if (pic.style.transform === 'translateX(0%)') {
        pic.style.transform = 'translateX(-90%)';
    } else {
        pic.style.transform = 'translateX(0%)';
    }



}, 1000);

setTimeout(() => {
    let picture = document.querySelector('.image2');
    console.log(picture);


    if (picture.style.transform === 'translateY(0%)') {
        picture.style.transform = 'translateY(80%)';
    } else {
        picture.style.transform = 'translateY(0%)';
    }



}, 1000);





no_sound.addEventListener('click', function () {
    console.log('clicked no_sound');


    if (play === false) {
        play = true

        sound.style.display = 'flex';
        no_sound.style.display = 'none';

    } else {


        sound.style.display = 'flex';
        no_sound.style.display = 'none';
    }


    playNo_sound()
    audio.currentTime = 0;
    audio.play();
    audio.muted = false;

});



sound.addEventListener('click', function () {
    console.log('clicked');

    if (pause === false) {
        pause = true
        sound.style.display = 'none';
        no_sound.style.display = 'flex'


    } else {
        sound.style.display = 'none';
        no_sound.style.display = 'flex';
    }
    stopSound()
    audio.currentTime = 0;
    audio.pause();
    audio.unm

});


function stopSound() {
    var mediaElements = document.querySelectorAll('audio');
    mediaElements.forEach(function (audio) {
        if (audio.pause) {
            audio.pause();

        }
    });
};


function playNo_sound() {
    var mediaElements = document.querySelectorAll('audio');
    mediaElements.forEach(function (audio) {
        if (audio.play) {
            audio.play();
        }
    });
}


stopSound();
playNo_sound();









