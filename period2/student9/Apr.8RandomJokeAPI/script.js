
document.addEventListener("DOMContentLoaded", function () {
    async function fetchJoke() {
        try {
            const response = await fetch("https://icanhazdadjoke.com/slack", {
                headers: { 'Accept': 'application/json' }
            });
            const jokeData = await response.json();
            console.log("Joke Data:", jokeData);

            displayJoke(jokeData.attachments[0].text);
        } catch (error) {
            console.error("Error fetching joke data:", error);
        }
    }

    function displayJoke(joke) {
        console.log("Joke:", joke);

        let jokeElement = document.querySelector('.joke-text');

        jokeElement.innerHTML = `<p>${joke}</p>`;
    }

    const jokeButton = document.querySelector('.joke-button');
    jokeButton.addEventListener("click", fetchJoke);

    fetchJoke();
});
