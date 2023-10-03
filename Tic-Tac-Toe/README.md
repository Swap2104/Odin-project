# TicTacToe
## About 
Tic-Tac-Toe game where the user can play a game of Tic-Tac-Toe against the computer.
## Working
Theres a `game` object which contains all the method used for the game.
When the user selects a square, a `X` is placed in that square using the `userInput()` method.
```javascript
    //userInput() method: takes the user input and stores the value in the gameBoard array
    const userInput = () => {
        for (let i = 0; i < squares.length; i++) {
            squares[i].addEventListener('click', () => {
                const squareIndex = parseInt(squares[i].id);// .id returns a string, so we convert it to an integer
                if (gameBoard[squareIndex] === "" && gameOver == false) {
                    gameBoard[squareIndex] = "X";
                    game.gameDisplayController();// update the page
                    game.computerInput(); //Generate computers input
                    game.listToMatrix(gameBoard, 3) //convert the gameBoard array to a matrix
                    game.checkWinner()// check for the winner.
                }
            });
        }
    }
```
The `userInput()` function checks if the game is over (`gameOver == false`) and that the square the user is clicking is empty (`gameBoard[squareIndex] === ""`).
If the condition is true `X` is pushed in `gameBoard` array.

After the `userInput` is stored,the `gameDisplayController()` method is called which updates the display. 
```javascript
//* gameDisplayController() method: displays the X and Os on the squares.
    const gameDisplayController = () => {
        for (let i = 0; i < squares.length; i++) {
            squares[i].textContent = gameBoard[i];
        }
    }
```
It takes values from the gameBoard array and stores it into the squares.

Then the `computerInput()` function is called which generates and stores computer's input.
```javascript
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
```
If the condition (`gameOver == false && gameBoard[compRand] !== "" && i < 4`) is true,
`O` is stored into the `gameBoard` array. The condition checks if the `gameOver` variable is false, It also checks is the counter is less then 4, so tha computer cannot generate more then 4 inputs.

At the end `checkWinner()` method is called which checks if the game is over or if there is a winner. If there is a winner the `gameStatus()` function is called.

```javascript
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

    const allEqual = arr => arr.every(val => val === arr[0]);//allEqual function
```
The `gameStatus()` function takes 2 arguments winner and draw, if it is a draw `gameStatus(", true)` is passed.If there is a winner `gameStatus(Winner, false)` is passed.
```javascript
//* gameStatus method: used to display the winner when the game is over.
    const gameStatus = (winner, draw) => {
        gameOver = true
        if (draw) {
            window.location = "http://127.0.0.1:5500/Odin-project/Tic-Tac-Toe/draw.html"
            console.log("Its a draw");
        }
        if (winner !== "") {
            if (winner === "X") {
                console.log(`${winner} Wins`)
                window.location = "http://127.0.0.1:5500/Odin-project/Tic-Tac-Toe/x.html"
            } else {
                console.log(`${winner} Wins`)
                window.location = "http://127.0.0.1:5500/Odin-project/Tic-Tac-Toe/o.html"
            }
        }
    }
```
The `gameStatus()` method then loads pages based on if its a draw or if someone own.
<ul>
    <li>draw.html if its a draw</li>
    <li>x.html if its X won</li>
    <li>o.html if its O won</li>
</ul>

```javascript
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
```
`listToMatrix()` converts the `gameBoard` array to a 2d array/matrix