document.addEventListener("DOMContentLoaded", function () {

    async function getJoke() {
        let response = await fetch("https://icanhazdadjoke.com/slack");
        let jokeData = await response.json();
        console.log(jokeData.attachments[0].text);
        displayJoke(jokeData.attachments[0].text);

    }

    function displayJoke(joke) {
        console.log(joke);

        let jokeText = document.getElementById("joke-text");
        jokeText.innerHTML = joke;
    }

    let button = document.getElementById("joke-button");
    button.addEventListener("click", getJoke);


    getJoke();
});