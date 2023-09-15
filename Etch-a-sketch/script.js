
let gridBox = document.getElementsByClassName('gridBox')
console.log(gridBox.length)
for (let i = 0; i < gridBox.length; i++) {
    // gridBox[i].style.backgroundColor = "red";
    gridBox[i].addEventListener('mouseover', (e) => {
        gridBox[i].style.background = "black";
        // div.style.background = "red";
        console.log(e.target)
        console.log(e.type)
    })
}




