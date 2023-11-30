import { Cards } from "./cards.js";
import { Navbar } from "./navabar.js";
import { data } from "./project_data.js";

Navbar()
const nav_home = document.getElementById('home')
const nav_project = document.getElementById('project')
const nav_about = document.getElementById('about')
nav_home.class
nav_about.className=""
nav_project.className='active'


for (let i = 0; i < data.length; i++) {
    Cards()
}

const head = document.getElementsByClassName('heading')
const para = document.getElementsByClassName('para')
const link = document.getElementsByClassName('link')

for (let i = 1, j = 0; i <= data.length; i++, j++) {
    head[j].textContent = data[data.length - i].name
    para[j].textContent = data[data.length - i].desc
    link[j].setAttribute("href", data[data.length - i].link)
}