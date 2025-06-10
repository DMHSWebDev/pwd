document.addEventListener('DOMContentLoaded', function () {

    async function getJoke() {
        let response = await fetch('https://icanhazdadjoke.com/slack');
        let jokeData = await response.json();
        console.log(jokeData.attachments[0].text);
        displayJoke(jokeData.attachments[0].text);
    }

    function displayJoke(joke) {
        console.log(joke);
        let jokeElement = document.getElementById('joke-text');
        console.log(jokeElement);
        jokeElement.innerHTML = `<strong>${joke}</strong>`
        //Get the joke text to display on the page
    }

    let jokeButton = document.getElementById('joke-button');
    console.log(jokeButton);
    jokeButton.addEventListener('click', getJoke)

    getJoke();




});