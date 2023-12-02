//* declaring the game object
const game = (() => {
    let matrix = [] //matrix to store the game board
    const squares = document.getElementsByClassName('squares'); //selecting individual squares.

    //* gameStatus method: used to display the winner when the game is over.
    const gameStatus = (winner, draw) => {
        gameOver = true
        if (draw) {
            window.location = "draw.html"
            console.log("Its a draw");
        }
        if (winner !== "") {
            if (winner === "X") {
                console.log(`${winner} Wins`)
                window.location = "x.html"
            } else {
                console.log(`${winner} Wins`)
                window.location = "o.html"
            }
        }
    }

    //* gameDisplayController() method: displays the X and Os on the squares.
    const gameDisplayController = () => {
        for (let i = 0; i < squares.length; i++) {
            squares[i].textContent = gameBoard[i];
        }
    }

    //* userInput() method: takes the user input and stores the value in the gameBoard array
    const userInput = () => {
        for (let i = 0; i < squares.length; i++) {
            squares[i].addEventListener('click', () => {
                const squareIndex = parseInt(squares[i].id);
                if (gameBoard[squareIndex] === "" && gameOver == false) {
                    gameBoard[squareIndex] = "X";
                    game.gameDisplayController();
                    game.computerInput();
                    game.listToMatrix(gameBoard, 3)
                    game.checkWinner()
                }
            });
        }
    }

    //* computerInput() method:  generates the computer input and stores the value in the gameBoard array
    const computerInput = () => {
        let compRand;
        let i = 0
        do {
            compRand = Math.floor(Math.random() * 9);
            i++
        } while (gameOver == false && gameBoard[compRand] !== "" && i < 4);
        gameBoard[compRand] = "O";

        game.gameDisplayController();
    }

    //* listToMatrix() method: Converts the gameBoard array into a matrix
    const listToMatrix = (list, elementsPerSubArray) => {
        let i, k;

        for (i = 0, k = -1; i < list.length; i++) {
            if (i % elementsPerSubArray === 0) {
                k++;
                matrix[k] = [];
            }

            matrix[k].push(list[i]);
        }
    }

    //* checkWinner() method: checks for the winner and Draw using the matrix
    const checkWinner = () => {
        // Check rows
        for (let i = 0; i < matrix.length; i++) {
            if (allEqual(matrix[i]) && matrix[i][0] !== "") {
                game.gameStatus(matrix[i][0], false)
                return true;
            }
        }

        //* Check columns
        for (let i = 0; i < matrix[0].length; i++) {
            const column = matrix.map(row => row[i]);
            if (allEqual(column) && column[0] !== "") {
                game.gameStatus(matrix[0][i], false)
                return true;
            }
        }

        //* Check diagonals
        const diagonal1 = matrix.map((row, index) => row[index]);
        const diagonal2 = matrix.map((row, index) => row[matrix.length - index - 1]);

        if (allEqual(diagonal1) && diagonal1[0] !== "") {
            game.gameStatus(matrix[0][0], false)
            return true;
        }

        if (allEqual(diagonal2) && diagonal2[0] !== "") {
            game.gameStatus(matrix[0][2], false)
            return true;
        }

        if (gameBoard.includes("") === false) {
            game.gameStatus("", true)
        }
        return false; //* Return false to indicate no winner found yet
    };

    const allEqual = arr => arr.every(val => val === arr[0]);

    return {
        gameDisplayController,
        userInput,
        computerInput,
        listToMatrix,
        checkWinner,
        gameStatus
    };
})();

let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameOver = false
game.gameDisplayController()
game.userInput();