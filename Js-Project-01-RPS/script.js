
let computersChoice = Math.floor(Math.random() * 3)
let usersChoice = window.prompt("Enter a number",);

console.log(computersChoice)
console.log(usersChoice)

if (computersChoice == usersChoice) {
    console.log("Its a Tie");
}
else {
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



