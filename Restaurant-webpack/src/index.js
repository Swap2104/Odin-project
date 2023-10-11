import { initialLoad } from "./initial-load";
import { home } from "./home";
import { contact } from "./contact";
import { menu } from "./menu";

home()

let content=document.getElementById('content')
let home_nav=document.getElementById('home')
let menu_nav=document.getElementById('menu')
let contact_nav=document.getElementById('contact')
home_nav.addEventListener('click', ()=>{
    console.log(content.innerHTML)
    content.innerHTML = ""
    console.log("hello")
    initialLoad()
    home()
    // console.log(content.innerHTML)
})

menu_nav.addEventListener('click', ()=>{
    console.log(content.innerHTML)
    content.innerHTML = ""
    console.log("hello")
    initialLoad()
    menu()
})

contact_nav.addEventListener('click', ()=>{
    console.log(content.innerHTML)
    content.innerHTML = ""
    console.log("hello")
    initialLoad()
    contact()
})