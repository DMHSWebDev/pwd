document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(Flip);

    const grid = document.querySelector(".grid");
    const squaresNodeList = document.querySelectorAll(".square");
    console.log(squaresNodeList);


    const squares = Array.from(squaresNodeList);
    console.log(squares);

    const shuffleButton = document.getElementById("shuffleButton");

    shuffleButton.addEventListener("click", () => {
        const state = Flip.getState(squares);
        const shuffledSquares = squares.sort(() => Math.random() - 0.5);
        console.log(shuffledSquares);

        shuffledSquares.forEach((square) => {
            console.log(square);
            grid.appendChild(square);

        });
        Flip.from(state, {
            duration: 2,
            ease: "elastic",
        });
    });
});