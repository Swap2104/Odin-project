# Rock Paper Scissor
## About the game
 Rock paper Scissor game using javascript 

## Start of the game
![Start of the game](https://github.com/Swapnilnaique/Odin-project/blob/master/Js-Project-01-RPS/ui-Page.png)


## What it does
* The game prompts the user to select an option 
* The game picks a random value for the computer 
* The game checks if it is a Tie
* If not, both the values are compared to find the winner and calculate the score
* Then, the winner and the score is displayed 


## Working
```javascript
//? Event listeners for the three buttons 
optionsBtn0.addEventListener('click', () => {
    console.log(computer.textContent) //* displays computers choices in the console
    userChoice.textContent = optionsBtn0.textContent //*updates users choice
    user = 0 //*stores users choice as number for calculation
    computersChoice() //* genrates and displayes the computers choice 
    result() //* checks for tie and calculates the result
    //* updates the score for the user and the computer
    resultComp.textContent = computerScore 
    resultuser.textContent = userScore
})
optionsBtn1.addEventListener('click', () => {
    console.log(computer.textContent)
    userChoice.textContent = optionsBtn1.textContent
    user = 1
    computersChoice()
    result()
    resultComp.textContent = " "+computerScore
    resultuser.textContent = " "+userScore
})
optionsBtn2.addEventListener('click', () => {
    console.log(computer.textContent)
    userChoice.textContent = optionsBtn2.textContent
    user = 2
    computersChoice()
    result()
    resultComp.textContent = " "+computerScore
    resultuser.textContent = " "+userScore
})

```

The three user input buttons have event listeners which listen to _clicks_ by the _user_. The user can select from Rock paper or Scissor. Internally the user input are saved as number between 0-2.

```javascript
function computersChoice() {
    //*Generate computers choice 
    computerChoice = Math.floor(Math.random() * 3) //* generates a number between 0-2 
    switch (computerChoice) {
        case 0:
            computer.textContent = optionsBtn0.textContent //* Updates the computers choice based on the generated number
            //* optionsBtn0.textContent ="✊🏻"
            break; 
        case 1:
            computer.textContent = optionsBtn1.textContent
            //* optionsBtn1.textContent ="✋🏻"
            break;
        case 2:
            computer.textContent = optionsBtn2.textContent
            //* optionsBtn2.textContent ="✌🏻"
            break;
    }
}
```
 The computer also generates a number between 0-2.

```javascript
function result() {
    //* check for tie
    if (computerChoice == user) {
        header.textContent = "Its a Tie" //* updates the header to display the winner
    }
    else {//* if there is no tie the winner is calculated
        if (computerChoice == 0 && user == 1) {
            header.textContent = "User wins" //* updates the header to display the winner
            userScore = userScore + 1 //* increments user score

        } else if (computerChoice == 0 && user == 2) {
            header.textContent = "Computer Wins"
            computerScore = computerScore + 1 //* increments computers score

        } else if (computerChoice == 1 && user == 0) {
            header.textContent = "Computer Wins"
            computerScore = computerScore + 1 //* increments computers score

        } else if (computerChoice == 1 && user == 2) {
            header.textContent = "User wins"
            userScore = userScore + 1 //* increments user score

        } else if (computerChoice == 2 && user == 0) {
            header.textContent = "User wins"
            userScore = userScore + 1 //* increments user score

        } else if (computerChoice == 2 && user == 1) {
            header.textContent = "Computer Wins"
            computerScore = computerScore + 1 //* increments computers score
        }
    }
}
```
The user and computer's input are saved as numbers and compared to check for the winner using the above function. It also increments the winners score and displays who won. 
