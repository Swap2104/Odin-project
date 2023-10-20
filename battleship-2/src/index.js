
function grid_creation() {
    let grid = document.getElementById('grid')

    for (let i = 0; i < 100; i++) {
        let div = document.createElement('div')
        grid.appendChild(div)
        div.className = "div"
    }
}
grid_creation()

console.log("hello")

let btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    if (btn.textContent === "Vertical") {
        btn.textContent = "Horizontal";
    } else if (btn.textContent === "Horizontal") {
        btn.textContent = "Vertical";
    }
});
