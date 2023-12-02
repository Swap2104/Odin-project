import { Navbar } from "./navabar.js";
Navbar()
const nav_home = document.getElementById('home')
const nav_project = document.getElementById('project')
const nav_about = document.getElementById('about')
nav_home.class=""
nav_about.className = "active"
nav_project.className = ''

nav_home.setAttribute("href", "../index.html")
nav_project.setAttribute("href", "project.html")
nav_about.setAttribute("href", "about.html")
