import { Navbar } from "./navabar.js"
// ! not needed any more
// import { odin_recipes } from "./project_data.js"
// ? import project data
import { data } from "./project_data.js"

//? drawing navbar on the screen

Navbar()
const nav_home = document.getElementById('home')
const nav_project = document.getElementById('project')
const nav_about = document.getElementById('about')
nav_home.className="active"
nav_about.className = ""
nav_project.className = ''

const head = document.getElementsByClassName('heading')
const para = document.getElementsByClassName('para')
const link = document.getElementsByClassName('link')

// console.log(data[3].link.replace(/\//, ""))

for (let i = 1, j = 0; i <= 4; i++, j++) {
    head[j].textContent = data[data.length - i].name
    para[j].textContent = data[data.length - i].desc
    link[j].setAttribute("href", data[data.length - i].link.replace(/\//, ""))
}