// Variables
let userInput = ''
let buttons = document.getElementsByClassName('btn')
let clear = document.getElementById('clear')
let equal = document.getElementById('equal')
let display = document.getElementById('display')
let backspace = document.getElementById('backspace')

// Event Listeners for Buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        if (userInput.length <= 20) {// Limits the user input to 20 characters 
            userInput += buttons[i].textContent
        }
        display.textContent = userInput // Displays the user input 
    })
}
// Event Listeners for clear button
clear.addEventListener('click', () => {
    userInput = "" // Clears the user input variable
    display.textContent = userInput // Displays the user input 
})

// Event Listeners for Equals to  button
equal.addEventListener('click', () => {
    userInput = eval(userInput)// Evaluates the user input 
    display.textContent = userInput // Displays the user input 
    userInput = ''
})

// Event Listeners for Backspace button
backspace.addEventListener('click', () => {
    userInput = userInput.substring(0, userInput.length - 1) //Deletes the last character from the user input 
    display.textContent = userInput // Displays the user input 
})