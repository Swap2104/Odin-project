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
