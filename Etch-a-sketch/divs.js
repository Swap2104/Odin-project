
let div
for (let i = 0; i < 16 * 16; i++) {
    div = document.createElement("div")
    div.className = "gridBox";
    div.style.height = "30px";
    div.style.width = "30px";
    document.getElementById("container").appendChild(div);
}
