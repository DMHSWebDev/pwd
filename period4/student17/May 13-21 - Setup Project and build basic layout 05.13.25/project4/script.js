document.addEventListener("DOMContentLoaded", function () {
    let player1Btn = document.getElementById('player1-btn');
    let player2Btn = document.getElementById('player2-btn');

    async function drawCards() {
        let response = await fetch('https://www.deckofcardsapi.com/api/deck/new/draw/?count=1');
        let data = await response.json();
        //console.log(data.cards[0]);
        return data.cards[0];
    }

    player1Btn.addEventListener('click', async function () {
        let player1card = await drawCards();
        console.log(player1card);
        let player1CardImg = document.getElementById('player1-card');
        player1CardImg.src = player1card.image;
        let player1CardSuit = document.getElementById('player1-suit');
        player1CardSuit.innerText = player1card.suit;
        let player1CardValue = document.getElementById('player1-value');
        player1CardValue.innerText = player1card.value;


    });

    player2Btn.addEventListener('click', async function () {
        let player2card = await drawCards();
        console.log(player2card);
        let player2CardImg = document.getElementById('player2-card');
        player2CardImg.src = player2card.image;
        let player2CardSuit = document.getElementById('player2-suit');
        player2CardSuit.innerText = player2card.suit;
        let player2CardValue = document.getElementById('player2-value');
        player2CardValue.innerText = player2card.value;


    });

});