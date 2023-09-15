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
        <div id="container">
            <script src="divs.js"></script>
        </div>
    </div>

    <script src="script.js"></script>
</body>

</html>
```
An **HTML** container is used to create the drawable container

```javascript
let div
for (let i = 0; i < 16 * 16; i++) {
    div = document.createElement("div")
    div.className = "gridBox";
    // div.style.background = "#0fb3f5";
    div.style.height = "40px";
    div.style.width = "40px";
    // div.style.borderColor = 'blue'
    // div.style.borderStyle = 'solid'
    // div.style.borderWidth = '.1px'
    document.getElementById("container").appendChild(div);
}
```
The above Javascript code creates 16x16 divs and with class name _gridBox_ 