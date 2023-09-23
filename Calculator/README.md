# Calculator

## About
Calculator using javascript which allows the user to perform basic arithmetic operations.

## Image
![Calculator](https://github.com/Swapnilnaique/Odin-project/blob/master/Calculator/Calculator.png)

## Working
```javascript
// Event Listeners for Buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        if (userInput.length <= 20) {// Limits the user input to 20 characters 
            userInput += buttons[i].textContent
        }
        display.textContent = userInput // Displays the user input 
    })
}
```
The above code adds event listeners to the buttons and stores the user input in the _userInput_ variable. 
 

```javascript
// Event Listeners for clear button
clear.addEventListener('click', () => {
    userInput = "" // Clears the user input variable
    display.textContent = userInput // Displays the user input 
})
```
The above code clears the _userInput_ variable when the All Clear (AC) button is clicked and displays an empty string.

```javascript
// Event Listeners for Backspace button
backspace.addEventListener('click', () => {
    userInput = userInput.substring(0, userInput.length - 1) //Deletes the last character from the user input 
    display.textContent = userInput // Displays the user input 
})
```
The above code deletes the last character from the  _userInput_ variable when the Backspace button is clicked and displays the string.

```javascript
// Event Listeners for Equals to  button
equal.addEventListener('click', () => {
    userInput = eval(userInput)// Evaluates the user input 
    display.textContent = userInput // Displays the user input 
    userInput = ''
})
```
The above code Evaluates the user input stored in the _userInput_ variable using the `eval()` function when the Equals to button is clicked and displays the string.