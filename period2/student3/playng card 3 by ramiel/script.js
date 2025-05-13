document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(Flip);
    let grid = document.querySelector(".grid");
    console.log(grid);
    let shuffleButton = document.getElementById("shuffle");
    let squaresNodeList = document.querySelectorAll('.square');
    console.log(shuffleButton);
    let squares = Array.from(squaresNodeList);
    shuffleButton.addEventListener('click', function () {
        console.log('clicked');
        const state = Flip.getState(squares);


        const shuffledSquare = squares.sort(() => Math.random() - 0.5);
        console.log(shuffledSquare);

        shuffledSquare.forEach(squares => grid.appendChild(squares));
        Flip.from(state, {
            duration: 1,
            ease: "power1.inOut"
        })
    })
});
