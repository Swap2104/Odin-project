
//? variables
let computerChoice //* stores the computers choice (number)
let user = 0 //*stores the input as number
let computerScore = 0 //* stores the users score
let userScore = 0 //* stores the computers score

let computer = document.getElementById('computer') //* selects the element that displays the computers choice
let userChoice = document.getElementById('user') //* selects the element that displays the computers choice

//* selecting the elements that show the score
let resultuser = document.getElementById('userw')
let resultComp = document.getElementById('compw')

//* selecting the three user input buttons
let optionsBtn0 = document.getElementById('options-btn-0')
let optionsBtn1 = document.getElementById('options-btn-1')
let optionsBtn2 = document.getElementById('options-btn-2')

//* selects element to display the winner 
let header = document.getElementById('header')

//* storing the width and height of the buttons 
let boxWidth = optionsBtn0.offsetWidth + "px"
let boxHeight = optionsBtn0.offsetHeight + "px"

//* applying height and width to the elements where computers and users choice is displayed
userChoice.style.width = boxWidth
userChoice.style.height = boxHeight
computer.style.width = boxWidth
computer.style.height = boxHeight




//? Event listeners for the three buttons 
optionsBtn0.addEventListener('click', () => {
    console.log(computer.textContent) //* displays computers choices in the console
    userChoice.textContent = optionsBtn0.textContent //*updates users choice
    user = 0 //*stores users choice as number for calculation
    computersChoice() //* generates and displays the computers choice 
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




//? Functions
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
            computerScore = computerScore + 1

        } else if (computerChoice == 1 && user == 2) {
            header.textContent = "User wins"
            userScore = userScore + 1

        } else if (computerChoice == 2 && user == 0) {
            header.textContent = "User wins"
            userScore = userScore + 1

        } else if (computerChoice == 2 && user == 1) {
            header.textContent = "Computer Wins"
            computerScore = computerScore + 1

        }
    }
}

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

