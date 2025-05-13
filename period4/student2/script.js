document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(Flip)

    const grid = document.querySelector(".grid")
    const squareNodeList = document.querySelectorAll(".square")
    console.log(squareNodeList)

    const squares = Array.from(squareNodeList)
    console.log(squares)

    const shuffleButton = document.getElementById("shufflebutton")

    shuffleButton.addEventListener("click", () => {
        const state = Flip.getState(squares)
        const shuffleSquares = squares.sort(() => Math.random() - 0.5)
        console.log(shuffleSquares)

        shuffleSquares.forEach((square) => {
            grid.append(square)

        })

        Flip.from(state, {
            duration: .2,
            ease: "power1.inOut"
        })
    })

});