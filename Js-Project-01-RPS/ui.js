let computerChoice
let computer = document.getElementById('computer')
let user = 0
let header = document.getElementById('header')
let resultComp = document.getElementById('compw')
let resultuser = document.getElementById('userw')

// resultComp.innerHTML='hello'

let computerScore = 0
let userScore = 0

let optionsBtn0 = document.getElementById('options-btn-0')
let optionsBtn1 = document.getElementById('options-btn-1')
let optionsBtn2 = document.getElementById('options-btn-2')
let boxWidth = optionsBtn0.offsetWidth + "px"
let boxHeight = optionsBtn0.offsetHeight + "px"
console.log(boxWidth)
console.log(boxHeight)

let userChoice = document.getElementById('user')
userChoice.style.width = boxWidth
userChoice.style.height = boxHeight


computer.style.width = boxWidth
computer.style.height = boxHeight


optionsBtn0.addEventListener('click', (e) => {
    console.log(computer.textContent)
    userChoice.textContent = optionsBtn0.textContent
    user = 0
    // console.log(user)
    computersChoice()
    result()
    // scoreUpdate()
    resultComp.textContent = " "+computerScore
    resultuser.textContent = " "+userScore
})
optionsBtn1.addEventListener('click', (e) => {
    console.log(computer.textContent)
    userChoice.textContent = optionsBtn1.textContent
    user = 1
    // console.log(user)
    computersChoice()
    result()
    // scoreUpdate()
    resultComp.textContent = " "+computerScore
    resultuser.textContent = " "+userScore
})
optionsBtn2.addEventListener('click', (e) => {
    console.log(computer.textContent)
    userChoice.textContent = optionsBtn2.textContent
    user = 2
    // console.log(user)
    computersChoice()
    result()
    // scoreUpdate()
    resultComp.textContent = " "+computerScore
    resultuser.textContent = " "+userScore

})



function result() {
    //* check for tie
    if (computerChoice == user) {
        header.textContent = "Its a Tie"
        // userScore = userScore + 1
        // computerScore = computerScore + 1
        console.log("user score " + userScore)
        console.log("computer score " + userScore)
    }
    else {//*
        if (computerChoice == 0 && user == 1) {
            header.textContent = "User wins"
            userScore = userScore + 1
            console.log("user score " + userScore)
            console.log("computer score " + computerScore)
            // resultComp.textContent = computerScore
            // resultuser.textContent = userScore

        } else if (computerChoice == 0 && user == 2) {
            header.textContent = "Computer Wins"
            computerScore = computerScore + 1

            console.log("user score " + userScore)
            console.log("computer score " + computerScore)
            // resultComp.textContent = computerScore
            // resultuser.textContent = userScore

        } else if (computerChoice == 1 && user == 0) {
            header.textContent = "Computer Wins"
            computerScore = computerScore + 1

            // resultComp.textContent = computerScore
            // resultuser.textContent = userScore
            console.log("user score " + userScore)
            console.log("computer score " + computerScore)

        } else if (computerChoice == 1 && user == 2) {
            header.textContent = "User wins"
            userScore = userScore + 1
            // resultComp.textContent = computerScore
            // resultuser.textContent = userScore
            console.log("user score " + userScore)
            console.log("computer score " + computerScore)


        } else if (computerChoice == 2 && user == 0) {
            header.textContent = "User wins"
            userScore = userScore + 1
            // resultComp.textContent = computerScore
            // resultuser.textContent = userScore
            console.log("user score " + userScore)
            console.log("computer score " + computerScore)


        } else if (computerChoice == 2 && user == 1) {
            header.textContent = "Computer Wins"
            computerScore = computerScore + 1
            resultComp.textContent = computerScore
            resultuser.textContent = userScore
            console.log("user score " + userScore)
            console.log("computer score " + userScore)

        }
    }
}

function computerReset() {
    // * to reset the computer choice box 
    computer.innerHTML = "&nbsp;"
}

function computersChoice() {

    //*Genrate computers choice 
    computerChoice = Math.floor(Math.random() * 3)
    switch (computerChoice) {
        case 0:
            computer.textContent = optionsBtn0.textContent
            console.log("Computer: rock")
            break;
        case 1:
            computer.textContent = optionsBtn1.textContent
            console.log("Computer: paper")
            break;
        case 2:
            computer.textContent = optionsBtn2.textContent
            console.log("Computer: scissors")
            break;

    }
}

