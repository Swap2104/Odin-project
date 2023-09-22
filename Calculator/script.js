let userInput = ''
let buttons = document.getElementsByClassName('btn')
let clear = document.getElementById('clear')
let equal = document.getElementById('equal')
let display = document.getElementById('display')
let backspace = document.getElementById('backspace')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        if (userInput.length <= 20) {
            userInput += buttons[i].textContent
        }
        display.textContent = userInput
    })
}
clear.addEventListener('click', () => {
    userInput = ""
    display.textContent = userInput
})
equal.addEventListener('click', () => {
    console.log(userInput)
    userInput = eval(userInput)
    console.log(userInput)
    display.textContent = userInput
    userInput = ''
})

backspace.addEventListener('click', () => {
    userInput = userInput.substring(0, userInput.length - 1)
    display.textContent = userInput
})