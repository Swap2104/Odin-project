# Etch-a-sketch
## About 
It allows the user to draw on a 16 X 16 square using mouse hover

## working
```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>

<body>
    <div class="root">

        <div id="grid">
            <div id="control">
                <p class="para">Pick a color</p>
                <input type="color" class="color" id="colorPicker">
                <button id="normal" class="btn">Normal</button>
                <button id="clear" class="btn">Clear</button>
                <button id="eraser" class="btn">Eraser</button>
            </div>
            <div id="con">
                <div id="head">
                    <h2> Etch-a-Sketch</h2>
                </div>
                <div id="container">
                    <script src="divs.js"></script>
                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>

</html>
```
A **HTML** container is used to create the drawable canvas. The **control** div contain 
* The color picker for the user to select a color
* Clear button to clear the canvas
* Normal button to set the color to default
* Eraser button to set the color to white 

```javascript
let div
for (let i = 0; i < 16 * 16; i++) {
    div = document.createElement("div")
    div.className = "gridBox";
    div.style.height = "30px";
    div.style.width = "30px";
    document.getElementById("container").appendChild(div);
}
```
The above Javascript code creates 16x16 divs for the drawable canvas with class name _gridBox_ 

```javascript
let mouseColor = 'black'
let gridBox = document.getElementsByClassName('gridBox')
for (let i = 0; i < gridBox.length; i++) {
    gridBox[i].addEventListener('mouseover', (e) => {
        gridBox[i].style.background = mouseColor;
        console.log(e.target)
        console.log(e.type)
    })
}
```
The mouse color variable stores the color. All the div have event listeners. When the mouse goes over any div it calls the event listener function which changes the color of the div.

```javascript
let clear = document.getElementById('clear')
clear.addEventListener('click', () => {
    for (let i = 0; i < gridBox.length; i++) {
        gridBox[i].style.background = "white";
    }
})
```
Above is the code for Clear button. It has an event listener which, on click changes the background color of all the divs to _white _  

```javascript
let eraser = document.getElementById('eraser')
eraser.addEventListener('click', () => {
    mouseColor = "white"
})
```
Above is the code for Eraser button. It has an event listener which, on click changes _mouseColor_  to _white_ 

```javascript
let normal = document.getElementById('normal')
normal.addEventListener('click', () => {
    mouseColor = "black"
})
```
Above is the code for Normal button. It has an event listener which, on click changes _mouseColor_  to _black_

```javascript 
let colorPicker = document.getElementById('colorPicker')
colorPicker.addEventListener('change', () => {
    mouseColor = colorPicker.value
})
```
Above is the code for the color picker. It has an event listener which, on change, changes _mouseColor_  to the color pickers value.