

const game = (() => {
    const squares = document.getElementsByClassName('squares');
    const gameDisplayController = () => {
        for (let i = 0; i < squares.length; i++) {
            squares[i].textContent = gameBoard[i];
            // console.log(gameBoard[i])
            // console.log(gameBoard[10])
        }
    }

    const userInput = () => {
        for (let i = 0; i < squares.length; i++) {
            squares[i].addEventListener('click', () => {
                // console.log("hello from userInput");
                const squareIndex = parseInt(squares[i].id);
                if (gameBoard[squareIndex] === "") {
                    gameBoard[squareIndex] = "X";
                    game.gameDisplayController();
                    game.computerInput();
                }
            });
        }
    }

    const computerInput = () => {
        let compRand;
        do {
            compRand = Math.floor(Math.random() * 9);
        } while (gameBoard[compRand] !== "");

        gameBoard[compRand] = "O";
        game.gameDisplayController();
    }

    return {
        gameDisplayController,
        userInput,
        computerInput
    };
})();

let gameBoard = ["", "", "", "", "", "", "", "", ""];
game.gameDisplayController()
game.userInput();
