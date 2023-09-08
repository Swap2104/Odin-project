

//*Genrate computers choice 
let computersChoice = Math.floor(Math.random() * 3)
//*get users choice 
let usersChoice = window.prompt("Enter rock , paper or scissor",);

//* Display computers choice as string.
switch (computersChoice) {
    case 0:
        console.log("Computer: rock")
        break;
    case 1: console.log("Computer: paper")
        break;
    case 2: console.log("Computer: scissors")
        break;
}

//* Display users choice.
console.log("User: "+usersChoice)

//* Convert users choice to number.
usersChoice = usersChoice.toLowerCase()
if (usersChoice == "rock") {
    usersChoice = 0
} else if (usersChoice == "paper") {
    usersChoice = 1
} else {
    usersChoice = 2
}

//* check for tie
if (computersChoice == usersChoice) {
    console.log("Its a Tie");
}
else {//*
    if (computersChoice == 0 && usersChoice == 1) {
        console.log("User wins")
    } else if (computersChoice == 0 && usersChoice == 2) {
        console.log("Computer Wins")
    } else if (computersChoice == 1 && usersChoice == 0) {
        console.log("Computer Wins")
    } else if (computersChoice == 1 && usersChoice == 2) {
        console.log("User wins")
    } else if (computersChoice == 2 && usersChoice == 0) {
        console.log("User wins")
    } else if (computersChoice == 2 && usersChoice == 1) {
        console.log("Computer Wins")
    }
}




