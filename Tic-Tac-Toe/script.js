let gameBoard = [];

const game = (() => {
    const squares = document.getElementsByClassName('squares');
    const gameDisplayController = () => {
        for (let i = 0; i < squares.length; i++) {
            squares[i].textContent = gameBoard[i];
        }
    }

    const userInput = () => {
        for (let i = 0; i < squares.length; i++) {
            squares[i].addEventListener('click', () => {
                console.log("hello from userInput");
                gameBoard[squares[i].id] = "X";
                game.gameDisplayController();
                game.computerInput()
            });
        }
    }

    const computerInput = () => {
        let compRand = Math.floor(Math.random() * 8);
        gameBoard[compRand] = "O";
        game.gameDisplayController();

    }

    return {
        gameDisplayController,
        userInput,
        computerInput
    };
})();

game.userInput();
