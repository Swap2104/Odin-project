import { Navbar } from "./navabar.js"
// ! not needed any more
// import { odin_recipes } from "./project_data.js"
// ? import project data
import { data } from "./project_data.js"

//? drawing navbar on the screen

Navbar()

console.log(data)

const head = document.getElementsByClassName('heading')
const para = document.getElementsByClassName('para')

for (let i = 1, j = 0; i <= 4; i++ , j++) {
    head[j].textContent = data[data.length - i].name
    para[j].textContent = data[data.length - i].desc
}